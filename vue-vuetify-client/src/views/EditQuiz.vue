<template>
  <div class="row">
    <div :class="$vuetify.breakpoint.xs ? '' : 'col-2'"></div>
    <div
      :class="
        $vuetify.breakpoint.xs ? 'col-12 text-center' : 'col-8 text-center'
      "
    >
      <div class="row">
        <div class="col-6 text-left justify-center">
          <div class="success--text title font-weight-regular pa-4">
            Edit quiz
          </div>
        </div>
        <div class="col-6 text-right my-auto">
          <v-btn @click="deleteQuiz()" small outlined color="red lighten-1"
            >Delete</v-btn
          >
        </div>
      </div>
      <v-form @submit.prevent="submitForm">
        <v-text-field
          v-model="quiz['name']"
          outlined
          label="Enter the name of the quiz"
          color="success"
        />
        <v-alert border="left" color="red lighten-1" dark v-if="error.length">
          {{ error }}
        </v-alert>
        <v-btn type="submit" block class="text-capitalize" color="success"
          >Submit</v-btn
        >
      </v-form>
    </div>
    <div :class="$vuetify.breakpoint.xs ? '' : 'col-2'"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    error: "",
    quiz: {},
  }),
  async mounted() {
    await axios
      .get(`/api/v1/quiz/${this.$route.params.id}`)
      .then((response) => {
        this.quiz = response.data;
      });
  },
  methods: {
    async deleteQuiz() {
      this.$store.commit("setIsLoading", true);
      await axios
        .delete(`/api/v1/quiz/${this.$route.params.id}`)
        .then((response) => {
          this.$router.push({ name: "quizes" });
        })
        .catch((error) => {
          console.log(error);
        });
      this.$store.commit("setIsLoading", false);
    },
    async submitForm() {
      this.$store.commit("setIsLoading", true);
      this.error = "";
      if (this.quiz_name === "") {
        this.error = "Quiz name cannot be empty!";
        this.$store.commit("setIsLoading", false);
        return false;
      }
      const formData = {
        quiz: { name: this.quiz["name"], id: this.quiz["id"] },
      };
      await axios
        .patch("/api/v1/quizes/", formData)
        .then((response) => {
          this.$router.push({ name: "quizes" });
        })
        .catch((error) => {
          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>