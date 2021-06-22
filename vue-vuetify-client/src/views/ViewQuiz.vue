<template>
  <div v-if="quizes.length">
    <div>
      <div class="row">
        <div :class="$vuetify.breakpoint.xs ? 'col-6' : 'col-8'">
          <span
            :class="
              !$vuetify.breakpoint.xs
                ? 'text-h5 font-weight-regular'
                : 'text-h6'
            "
          >
            <v-btn @click="$router.go(-1)" class="pl-0 ml-0" icon color="success">
              <v-icon dark> mdi-arrow-left</v-icon>
            </v-btn>

            <span v-if="!$vuetify.breakpoint.xs">{{ quiz["name"] }} </span>
          </span>
        </div>

        <div
          :class="
            $vuetify.breakpoint.xs ? 'col-6 text-right' : 'col-4 text-right'
          "
        >
          <v-btn
            outlined
            color="success"
            dense
            :to="{ name: 'add-question', params: { id: $route.params.id } }"
            :small="$vuetify.breakpoint.xs ? true : false"
            class="text-capitalize"
            >add question</v-btn
          >
        </div>
      </div>
      <span
        :class="
          !$vuetify.breakpoint.xs ? 'text-h5 font-weight-regular' : 'text-h6'
        "
        v-if="$vuetify.breakpoint.xs"
        >{{ quiz["name"] }}
      </span>
    </div>
    <div
      :class="
        !$vuetify.breakpoint.xs
          ? 'subtitle-1 font-weight-regular'
          : 'subtitle-2 font-weight-regular'
      "
    >
      No of questions: {{ quizes.length }}
    </div>
    <div class="pt-2">
      <v-text-field
        label="Search"
        name="search"
        v-model="search"
        append-icon="mdi-magnify"
        type="text"
        outlined
        color="success"
        :dense="$vuetify.breakpoint.xs"
      />
    </div>
    <template v-for="(quiz, index) in searchResult">
      <v-card class="mx-auto mt-2" max-width="900" :key="index" outlined>
        <question :quiz="quiz" :qno="index + 1" />
        <v-card-actions
          ><v-spacer /><v-btn
            small
            :to="{ name: 'edit-question', params: { id: quiz.id } }"
            outlined
            color="success"
            >edit</v-btn
          ></v-card-actions
        >
      </v-card>
    </template>
  </div>
</template>
<script>
import axios from "axios";
import question from "../components/Question.vue";
export default {
  components: {
    question,
  },
  data: () => ({
    quizes: [],
    search: "",
    quiz: "",
    showAnswer: true,
  }),

  computed: {
    totalmarks() {
      let marks = 0;
      for (var quiz in this.quizes) {
        marks += this.quizes[quiz].maximum_mark;
      }
      return marks;
    },
    searchResult() {
      if (this.search.length) {
        return this.quizes.filter((quiz) => {
          return quiz.question.includes(this.search);
        });
      } else return this.quizes;
    },
  },
  methods: {
    async getQuizes() {
      this.$store.commit("setIsLoading", true);
      await axios
        .get(`/api/v1/questions/${this.$route.params.id}`)
        .then((response) => {
          this.quizes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.$store.commit("setIsLoading", false);
    },
  },
  async mounted() {
    await axios
      .get(`/api/v1/quiz/${this.$route.params.id}`)
      .then((response) => {
        this.quiz = response.data;
      });
    this.getQuizes();
  },
};
</script>