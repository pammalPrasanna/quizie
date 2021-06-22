<template>
  <div class="text-center">
    <div class="mx-auto" style="max-width: 900px;">
    <v-card-title
      class="text-h6 font-weight-regular justify-space-between"
      v-if="globalStep != 2"
    >
      <span :class="$vuetify.breakpoint.xs ? 'subtitle-1' : 'title'">{{ globalTitle }}</span>
    </v-card-title>

    <v-window v-model="globalStep">
      <v-window-item :value="1">
        <v-card-text>
          <div class="text-left subtitle-1 font-weight-bold">Note:</div>
          <div class="text-left subtitle-2 font-weight-regular">
            <p v-for="(instruction, index) in instructions" :key="index">
              {{ index + 1 }}. {{ instruction }}
            </p>
          </div>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <div>
          <v-card-title
            class="text-h6 font-weight-regular justify-space-between"
          >
            <span :class="$vuetify.breakpoint.xs ? 'body-1' : 'subtitle-1'">{{ currentQuizTitle }}</span>
            <span :class="$vuetify.breakpoint.xs ? 'body-1' : 'subtitle-1'">Time {{ formattedElapsedTime }}</span>
            <v-avatar
              color="primary lighten-2"
              class="subheading white--text"
              size="24"
              v-text="step"
            ></v-avatar>
          </v-card-title>

          <v-window v-model="step">
            <template v-for="(quiz, index) in quizes">
              <v-window-item :value="index + 1" :key="index">
                <v-card-title :class="$vuetify.breakpoint.xs ? 'body-1' : 'body-1'">{{ quiz.question }}</v-card-title>
                <template v-if="quiz.objective_type === 'single'">
                  <v-radio-group>
                    <p class="ml-5">
                      <template v-for="(choice, index) in quiz.choices">
                        <v-radio
                          :key="index"
                          :readonly="readonly"
                          :value="choice.id"
                          :color="
                            showAnswer
                              ? choice.is_answer
                                ? 'green'
                                : 'red'
                              : 'primary'
                          "
                          @change="showRadioAnswer(quiz.id, choice.id)"
                        >
                          <template v-slot:label>
                            <span
                              v-if="showAnswer"
                              :class="
                                choice.is_answer ? 'green--text' : 'red--text'
                              "
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
                  <p class="ml-5">
                    <template v-for="(choice, index) in quiz.choices">
                      <v-checkbox
                        v-model="selected"
                        :readonly="readonly"
                        :key="index"
                        :value="choice.id"
                        :color="
                          showAnswer
                            ? choice.is_answer
                              ? 'green'
                              : 'red'
                            : 'primary'
                        "
                        @change="showCheckBoxAnswer(quiz.id)"
                        ><template v-slot:label>
                          <span
                            v-if="showAnswer"
                            :class="
                              choice.is_answer ? 'green--text' : 'red--text'
                            "
                            >{{ choice.choice }}</span
                          >
                          <span v-else>{{ choice.choice }}</span>
                        </template></v-checkbox
                      >
                    </template>
                  </p>
                </template>
                <v-card-text v-if="showAnswer && quiz.answer_explantion">
                  Explanation: <i>{{ quiz.answer_explantion }}</i>
                </v-card-text>
              </v-window-item>
            </template>
          </v-window>

          <v-divider  v-if="globalStep === 3 ? false : true"></v-divider>

          <v-card-actions>
            <!-- <v-btn :disabled="step === 1" text @click="step--"> Back </v-btn>
      <v-btn :disabled="(selected.length || radioSelected.length) ? false : true" text @click="clearSelected()"> Clear </v-btn> -->
            <v-spacer></v-spacer>
            <v-btn
              v-if="quizes.length === step ? false : true"
              :disabled="proceed"
              color="primary"
              outlined
              @click="nextQuestion()"
            >
              Next
            </v-btn>
          </v-card-actions>
        </div>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <h3 class="text-h6 mb-2">Results</h3>
          <h4 class="text-body-1 mb-2">
            Marks: {{ this.marks }} Result:
            <template v-if="getResult() === 'PASS'"
              ><span class="success--text">PASS</span></template
            >
            <template v-else><span class="red--text">FAIL</span></template>
          </h4>
          <h4 class="text-body-2 font-weight-regular mb-2" v-if="homeLink">
            Click
            <router-link :to="{ name: 'quizes' }" class="text-decoration-none"
              >here</router-link
            >
            to go home
          </h4>
          <span class="text-caption grey--text">Thanks for trying it!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider
      v-if="globalStep === 3 || globalStep === 1 ? true : false"
    ></v-divider>

    <v-card-actions>
      <!-- <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
       global Back
      </v-btn> -->
      <v-spacer></v-spacer>
      <v-btn
        v-if="finishButton"
        :disabled="globalStep === 3"
        color="primary"
        outlined
        @click="nextGlobalStep()"
      >
        {{ globalNextButtonName }}
      </v-btn>
    </v-card-actions>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    globalStep: 1,
    globalTitle: "Instructions",
    globalNextButtonName: "Start",
    finishButton: true,
    step: 1,
    selected: [],
    radioSelected: "",
    showAnswer: false,
    marks: 0,
    timeTaken: "",
    elapsedTime: 0,
    timer: undefined,
    currentQuizTitle: '',
    proceed: true,
    readonly: false,
    homeLink: false,
    instructions: [
      "Once you click on the start button, you will be navigated to the first question and timer will start.",
      "Don't refresh the page or close the browser, if you do then, you have to start again from first. Your attempt will be nullified.",
      "Answer of the question will be revealed once you selected the answer, you cannot change your answer once the answers are revealed.",
      "Pass criteria - minimum 50%.",
    ],
    quizes: [
      // {
      //   id: 1,
      //   question: "Who is the father of computer?",
      //   objective_type: "single",
      //   answer_explantion: "Charles Babbage is the correct answer",
      //   maximum_mark: 1,
      //   choices: [
      //     {
      //       id: 1,
      //       choice: "Charles Babbage",
      //       is_answer: true,
      //       created_at: "2021-06-17T02:12:20.232725Z",
      //       question_id: 1,
      //     },
      //   ],
      // },
      // {
      //   id: 2,
      //   question: "Python is a ...................................",
      //   objective_type: "multiple",
      //   answer_explantion: "Python is a general purpose  programming language",
      //   maximum_mark: 1,
      //   choices: [
      //     {
      //       id: 2,
      //       choice: "Programming Language",
      //       is_answer: true,
      //       created_at: "2021-06-17T02:13:32.780959Z",
      //       question_id: 2,
      //     },
      //     {
      //       id: 3,
      //       choice: "Natural Language",
      //       is_answer: false,
      //       created_at: "2021-06-17T02:13:32.780959Z",
      //       question_id: 2,
      //     },
      //   ],
      // },
    ],
  }),
  async mounted() {
    this.$store.commit("setIsLoading", true);
    await axios
      .get(`/api/v1/quiz/${this.$route.params.id}`)
      .then(response => {
        this.currentQuizTitle = response.data['name']
      })
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
  methods: {
    totalmarks() {
      let marks = 0;
      for (var quiz in this.quizes) {
        marks += this.quizes[quiz].maximum_mark;
      }
      return marks;
    },
    getResult() {
      let totalMarks = this.totalmarks();
      if (this.marks >= totalMarks / 2) {
        return "PASS";
      } else return "FAIL";
    },
    async nextGlobalStep() {
      this.$store.commit("setIsLoading", true);
      if (this.globalStep === 1) {
        this.finishButton = false;
        this.globalStep += 1;
        await this.startTime();
      } else if (this.globalStep === 2) {
        await this.stop();
        this.finishButton = false;
        this.globalTitle = "Results";
        this.globalStep += 1;
        await this.updateResults();
      }
      this.$store.commit("setIsLoading", false);
    },

    async updateResults() {
      this.$store.commit("setIsLoading", true);
      const formData = {
        result: {
            quiz_id: this.$route.params.id,
            user_id: this.$store.state.user.id,
            marks: this.marks,
            time: this.timeTaken,
        }
      };
      // console.log(JSON.stringify(formData))
      await axios
        .post("/api/v1/results/", formData)
        .then((response) => {
          this.homeLink = true;
        })
        .catch((error) => {

          console.log(error);
        });

      this.$store.commit("setIsLoading", false);
    },
    startTime() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
    },
    clearSelected() {
      this.selected = [];
      this.radioSelected = "";
    },
    getAnswer(quiz_id) {
      let answers = [];
      let choices = [];
      let maximum_mark = 0;
      for (var quiz in this.quizes) {
        if (this.quizes[quiz].id === quiz_id) {
          choices = this.quizes[quiz].choices;
          maximum_mark = this.quizes[quiz].maximum_mark;
        }
      }
      for (var choice in choices) {
        if (choices[choice].is_answer === true) {
          answers.push({
            answer: choices[choice].id,
            marks: maximum_mark,
          });
        }
      }

      return answers;
    },
    showCheckBoxAnswer(quiz_id) {
      const answers = this.getAnswer(quiz_id);
      const marks = answers[0].marks;
      let markFlag = 1;
      // console.log(answers)
      if (this.selected.length === answers.length) {
        this.readonly = true;
        this.showAnswer = true;
        for (var ans in answers) {
          if (this.selected.includes(answers[ans].answer)) continue;
          else markFlag += 1;
        }
        if (markFlag === 1) this.marks += marks;
      }
    },
    showRadioAnswer(quiz_id, choice_id) {
      this.readonly = true;
      this.radioSelected = choice_id;
      let answer = this.getAnswer(quiz_id);
      // console.log(answer);
      this.showAnswer = true;
      if (choice_id === answer[0].answer) {
        this.marks += answer[0].marks;
      }
      this.proceed = false;
    },

    async nextQuestion() {
      this.$store.commit("setIsLoading", true);
      this.readonly = false;
      this.proceed = true;
      this.showAnswer = false;
      this.radioSelected = "";
      this.selected = [];
      this.step += 1;
      // console.log('step',this.step)
      // console.log('quiz length',this.quizes.length)
      // console.log('considt', this.globalStep === 2 && (this.step === this.quizes.length))
      if (this.globalStep === 2 && this.step === this.quizes.length) {
        this.globalNextButtonName = "Finish";
        this.finishButton = true;
      }
      this.$store.commit("setIsLoading", false);
    },
  },
  computed: {
    formattedElapsedTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      this.timeTaken = utc.substr(utc.indexOf(":") - 2, 8);
      return this.timeTaken;
    },
  },
};
</script>
