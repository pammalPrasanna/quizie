<template>
  <div>
    <div
      :class="
        $vuetify.breakpoint.xs
          ? 'subtitle-1 mx-1 px-1 my-1 py-1'
          : 'body-1 font-weight-regular mx-1 px-1 my-1 py-1'
      "
    >
      {{qno}}. {{ quiz.question }}
    </div>
    <template v-if="quiz.objective_type === 'single'">
      <v-radio-group class="pt-0 mt-1">
        <p class="pl-5">
          <template v-for="(choice, index) in quiz.choices">
            <v-radio
            readonly
              class="ma-0 px-0 pb-0 pt-2"
              :key="index"
              :value="choice.id"
              :color="
                showAnswer ? (choice.is_answer ? 'green' : 'red') : 'primary'
              "
            >
              <template v-slot:label>
                <span
                  v-if="showAnswer"
                  :class="choice.is_answer ? 'green--text' : 'red--text'"
                  >{{ choice.choice }}</span
                >
                <span v-else>{{ choice.choice }}</span>
              </template>
            </v-radio>
          </template>
        </p>
      </v-radio-group>
    </template>
    <template v-else>
      <p class="pl-5 pt-2">
        <template v-for="(choice, index) in quiz.choices">
          <v-checkbox
          readonly
            class="ma-0 pa-0"
            :key="index"
            :value="choice.id"
            :color="
              showAnswer ? (choice.is_answer ? 'green' : 'red') : 'primary'
            "
            ><template v-slot:label>
              <span
                v-if="showAnswer"
                :class="choice.is_answer ? 'green--text' : 'red--text'"
                >{{ choice.choice }}</span
              >
              <span v-else>{{ choice.choice }}</span>
            </template></v-checkbox
          >
        </template>
      </p>
    </template>
    <div
      :class="
        $vuetify.breakpoint.xs
          ? 'subtitle-2 mx-1 px-1 my-1 py-1'
          : 'body-1 font-weight-regular mx-1 px-1 my-1 py-1'
      "
    >
      Maximum mark: {{ quiz.maximum_mark }}
    </div>
    <div
      :class="
        $vuetify.breakpoint.xs
          ? 'subtitle-2 mx-1 px-1'
          : 'body-1 font-weight-regular mx-1 px-1'
      "
    >
      Explanation: <i>{{ quiz.answer_explantion }}</i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    quiz: {
      type: Object,
      required: true,
    },
    qno: {
        type: Number,
        required: true
    }
  },
  data: () => ({
    showAnswer: true,
    //        quizes: [
    //   {
    //     id: 1,
    //     question: "Who is the father of computer?",
    //     objective_type: "single",
    //     answer_explantion: "Charles Babbage is the correct answer",
    //     maximum_mark: 1,
    //     choices: [
    //       {
    //         id: 1,
    //         choice: "Charles Babbage",
    //         is_answer: true,
    //         created_at: "2021-06-17T02:12:20.232725Z",
    //         question_id: 1,
    //       },
    //     ],
    //   },
    //   {
    //     id: 2,
    //     question: "Python is a ...................................",
    //     objective_type: "multiple",
    //     answer_explantion: "Python is a general purpose  programming language",
    //     maximum_mark: 1,
    //     choices: [
    //       {
    //         id: 2,
    //         choice: "Programming Language",
    //         is_answer: true,
    //         created_at: "2021-06-17T02:13:32.780959Z",
    //         question_id: 2,
    //       },
    //       {
    //         id: 3,
    //         choice: "Natural Language",
    //         is_answer: false,
    //         created_at: "2021-06-17T02:13:32.780959Z",
    //         question_id: 2,
    //       },
    //     ],
    //   },
    // ],
  }),
};
</script>