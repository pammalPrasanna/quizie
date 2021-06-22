<template>
  <div class="row">
    <div :class="$vuetify.breakpoint.xs ? '' : 'col-2'"></div>
    <div
      :class="
        $vuetify.breakpoint.xs ? 'col-12 text-center' : 'col-8 text-center'
      "
    >
      <div class="success--text title font-weight-regular pa-4">Add quiz</div>
      <v-form @submit.prevent="submitForm">
        <v-text-field
          v-model="quiz_name"
          outlined
          label="Enter the name of the quiz"
          color="success"
        />
             <v-alert border="left" color="red lighten-1" dark v-if="error.length">
        {{ error }}
      </v-alert>
        <v-btn type="submit" block class="text-capitalize" color="success">Submit</v-btn>
      </v-form>
    </div>
    <div :class="$vuetify.breakpoint.xs ? '' : 'col-2'"></div>
  </div>
</template>
<script>
import axios  from 'axios'
export default {
  data: () => ({
    quiz_name: "",
    error: '',
  }),
  methods: {
      async submitForm() {
           this.$store.commit("setIsLoading", true);
          this.error = ''
          if(this.quiz_name === ''){
              this.error = 'Quiz name cannot be empty!'
              this.$store.commit("setIsLoading", false);
              return false
          }
          const formData= {
              quiz: {name: this.quiz_name,
              created_by: this.$store.state.user.id
              }
          }
          await axios
                .post('/api/v1/quizes/', formData)
                .then(response => {
                    this.$router.push({name: 'quizes'})
                })
                .catch(error =>{
                    console.log(error)
                })

           this.$store.commit("setIsLoading", false);
      }
  }
};
</script>