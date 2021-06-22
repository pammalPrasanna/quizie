<template>
  <div>
    <div class="text-center success--text title font-weight-regular">
      Add question in {{quiz['name']}}
    </div>
    <v-form @submit.prevent="submitForm" class="pt-3">
      <v-textarea
        v-model="question.question"
        auto-grow
        outlined
        rows="4"
        clearable
        color="success"
        required
        label="Enter the question"
      ></v-textarea>
      <v-alert
        border="left"
        colored-border
        color="warning"
        elevation="2"
        dismissible
        >Select the check box near the answer to mark it as an answer for this
        question
      </v-alert>
      <div v-for="n in totalChoices" class="pt-2" :key="n">
        <v-row>
          <v-checkbox
            dense
            v-model="choices[n].is_answer"
            hide-details
            class="shrink mr-2 mt-0"
          ></v-checkbox>
          <v-textarea
            v-model="choices[n].choice"
            auto-grow
            outlined
            rows="4"
            clearable
            required
            color="success"
            :label="getChoiceLabel(n)"
          ></v-textarea>
          <v-btn
            @click="removeOption(choices[n])"
            class="shrink ml-2 mt-0"
            hide-details
            icon
            color="red"
          >
            <v-icon>mdi-delete</v-icon></v-btn
          >
        </v-row>
      </div>
      <div class="pt-2">
        <v-btn
          tile
          block
          dark
          color="success"
          @click="addOption()"
          class="text-capitalize"
        >
          <v-icon left> mdi-plus </v-icon> Add option</v-btn
        >
      </div>
      <v-textarea
        v-model="question.answer_explantion"
        auto-grow
        class="pt-4"
        outlined
        rows="4"
        clearable
        required
        color="success"
        label="Explanation for the answer (optional)"
      ></v-textarea>
      <v-text-field
        type="number"
        class="mt-0 pt-0"
        v-model="question.maximum_mark"
        label="Enter maximum marks in number"
        color="success"
        required
        outlined
      ></v-text-field>
      <v-alert border="left" color="red lighten-1" dark v-if="error.length">
        {{ error }}
      </v-alert>
      <v-btn type="submit" block color="success" class="text-capitalize"
        >Submit</v-btn
      >
    </v-form>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="warning">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn icon color="white" v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    totalChoices: 2,
    snackbar: false,
    text: "",
    timeout: 3000,
    error: "",
    quiz: {},
    question: {
      quiz_id: "",
      question: "",
      maximum_mark: "",
      answer_explantion: "",
      objective_type: ""
    },
    choices: [
      { id: 0, choice: "", is_answer: false },
      { id: 1, choice: "", is_answer: false },
      { id: 2, choice: "", is_answer: false },
      { id: 3, choice: "", is_answer: false },
      { id: 4, choice: "", is_answer: false },
      { id: 5, choice: "", is_answer: false },
      { id: 6, choice: "", is_answer: false },
      { id: 7, choice: "", is_answer: false },
      { id: 8, choice: "", is_answer: false },
      { id: 9, choice: "", is_answer: false },
      { id: 10, choice: "", is_answer: false },
    ],
    formData: {}
  }),
  async mounted() {
     this.$store.commit("setIsLoading", true);
      await axios
            .get(`/api/v1/quiz/${this.$route.params.id}`)
            .then(response => {
                this.quiz = response.data
            })
      this.$store.commit("setIsLoading", false);
  },
  methods: {
    getChoiceLabel(ind) {
      return `Enter the option ${ind}`;
    },

    addOption() {
      if (this.totalChoices === 10) {
        this.text = "You cannot add more than 10 choices!";
        this.snackbar = true;
      } else this.totalChoices += 1;
    },

    removeOption(choice) {
      if (this.choices.length === 2) {
        this.text = "Minimum two options are required to create a question!";
        this.snackbar = true;
      } else {
        const indexOfChoice = this.choices.indexOf(choice);
        this.choices[indexOfChoice].choice = "";
        this.choices[indexOfChoice].is_answer = false;
        this.totalChoices -= 1;
      }
    },
    validate() {
      this.error = "";
      if (this.question.question === "") {
        this.error = "Question field cannot be empty!";
        return false;
      }
      for(var i=1; i<=this.totalChoices; i++){
          if(this.choices[i].choice === '') {
              this.error = `Option ${i} cannot be empty!`
              return false
          }else continue
      }
      var chosen = false
        for(var i=1; i<=this.totalChoices; i++){
          if(this.choices[i].is_answer === true) {
              chosen =  chosen || this.choices[i].is_answer
          }else continue
      }
    
        if(chosen === false) {
          this.error = "Choose atleast one option as correct answer!"
          return false
        }

      if(this.question.maximum_mark === ''){
          this.error = "Maximum marks cannot be empty!"
      }

    return true
    },
    prepareData(){
        let choices = []
        let answerType = 0
        for(var i=1; i<=this.totalChoices; i++){
          if(this.choices[i].choice != '') {
              choices.push(this.choices[i])
              if(this.choices[i].is_answer === true) answerType+=1
          }else continue
        }

        if(answerType > 1) this.question.objective_type = "multiple"
        else this.question.objective_type = "single"
        this.question.quiz_id = this.quiz['id']
        this.formData['question'] = this.question
        this.formData['choices'] = choices

        return true
    },
    async submitForm() {
      this.$store.commit("setIsLoading", true);
      if (await this.validate()) {
          if(await this.prepareData()){
            this.$store.commit("setIsLoading", true);

            await axios
                .post('/api/v1/question/', this.formData)
                .then(response => {
                    console.log(response.data)
                    this.$router.push({name: 'view-quiz', params: {id: this.quiz['id']}})
                })
                .catch(error =>{
                    console.log(JSON.stringify(error))
                })

          }
      }
      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>