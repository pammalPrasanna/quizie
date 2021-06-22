<template>
  <v-card>
        <v-btn v-if="!results.length" @click="$router.go(-1)" icon small color="success">
          <v-icon dark> mdi-arrow-left</v-icon>
        </v-btn>
    <v-card-title>
      <span v-if="results.length">
        <v-btn @click="$router.go(-1)" icon small color="success">
          <v-icon dark> mdi-arrow-left</v-icon>
        </v-btn>
        Results</span
      >
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="results"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    search: "",
    headers: [
      {
        text: "Attended on",
        align: "start",
        sortable: true,
        value: "date",
      },
      {
        text: "Quiz",
        sortable: true,
        value: "quiz",
      },
      {
        text: "Marks",
        sortable: true,
        value: "marks",
      },
      {
        text: "Time taken",
        sortable: true,
        value: "time",
      },
    ],
    results: [],
  }),
  async mounted() {
    this.$store.commit("setIsLoading", true);
    await axios
      .get(`/api/v1/user/results/${this.$route.params.id}`)
      .then((response) => {
        const results = response.data;
        for (var result in results) {
          let dateAttempt = String(results[result].attempt_on);
          dateAttempt =
            `${dateAttempt.split("T")[0]} ` +
            `${dateAttempt.split("T")[1].split(".")[0]}`;
          this.results.push({
            date: dateAttempt,
            quiz: results[result]["quiz"].name,
            marks: results[result].marks,
            time: results[result].time,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    this.$store.commit("setIsLoading", false);
  },
};
</script>