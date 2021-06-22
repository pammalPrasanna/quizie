<template>

  <div v-if="quizes.length">
    <div
      :class="
        !$vuetify.breakpoint.xs
          ? 'text-h5 font-weight-regular'
          : 'text-h6 font-weight-bold'
      "
    >
      <div class="row pt-1">
        <div :class="$vuetify.breakpoint.xs ? 'col-6' : 'col-10'">
          Quizes</div>
        <div
          :class="
            $vuetify.breakpoint.xs ? 'col-6 text-right' : 'col-2 text-right'
          "
        >
          <v-btn
            outlined
            color="success"
            dense
            :small="$vuetify.breakpoint.xs ? true : false"
            class="text-capitalize"
            :to="{name: 'add-quiz'}"
            >add quiz</v-btn
          >
        </div>
      </div>
    </div>
    <div
      :class="
        !$vuetify.breakpoint.xs
          ? 'subtitle-1 font-weight-regular'
          : 'subtitle-2 font-weight-regular'
      "
    >
      No of quizes: {{ quizes.length }}
    </div>
    <div class="pt-1">
      <v-text-field
        label="Search"
        name="search"
        v-model="search"
        append-icon="mdi-magnify"
        type="text"
        outlined
        color="success"
        dense
      />
    </div>

    <div class="row">
      <template v-for="(quiz, index) in searchResult">
        <div :class="$vuetify.breakpoint.xs ? 'col-12 pt-0 mt-0' : 'col-6'" :key="index">
          <v-card outlined dense>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-1">subject</div>
                <v-list-item-title
                  :class="
                    $vuetify.breakpoint.xs
                      ? 'subtitle-1 font-weight-regular'
                      : 'text-h5 mb-1 font-weight-regular'
                  "
                >
                  {{ quiz.name }}
                </v-list-item-title>
                <v-list-item-subtitle
                  :class="
                    $vuetify.breakpoint.xs
                      ? 'subtitle-2 font-weight-regular'
                      : 'subtitle-1 font-weight-regular'
                  "
                  >short description</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-spacer></v-spacer>
              <template>
                <template v-if="$store.state.user.is_staff">
                  <QuizCardButton
                    :btype="{
                      label: 'View',
                      link: {
                        name: 'view-quiz',
                        params: {
                          id: quiz.id
                        },
                      },
                    }"
                  />
                  <QuizCardButton :btype="{ label: 'Edit', link:{name: 'edit-quiz', params:{id: quiz.id}} }" />
                  <QuizCardButton :btype="{ label: 'Results', link: {name: 'quiz-results', params:{id: quiz.id}}}" />
                </template>
                <template v-else>
                  <QuizCardButton
                    :btype="{
                      label: 'Take quiz',
                      link: { name: 'take-quiz', params: { id: quiz.id } },
                    }"
                  />
                </template>
              </template>
            </v-card-actions>
          </v-card>
        </div>
      </template>
      <!-- </v-row> -->
    </div>
  </div>
</template>
<script>
import axios from "axios";
import QuizCardButton from "../components/QuizCardButton.vue";
export default {
  components: {
    QuizCardButton,
  },
  data: () => ({
    user: "",
    quizes: [],
    search: ''
  }),
  mounted() {
    this.user = this.$store.state.user;
    this.getQuizes();
  },
  computed: {
    searchResult() {
      if(this.search.length){
        return this.quizes.filter((quiz)=>{
          return quiz.name.includes(this.search)
        })
      }else return this.quizes
    }
  },
  methods: {
    async getQuizes() {
      this.$store.commit("setIsLoading", true);
      await axios
        .get("/api/v1/quizes/")
        .then((response) => {
          this.quizes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>
