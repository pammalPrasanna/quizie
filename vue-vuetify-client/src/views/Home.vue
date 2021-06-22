<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="12">
        <div class="text-center success--text display-1 pt-3">
          Q for Quizie
          <div class="subtitle-1 black--text">
            our one stop solution for conducting your online quizes
          </div>
        </div>
      </v-col>
      <v-col md="12">
        <div class="text-center">
              <v-btn
          label="Sign up"
          class="text-capitalize"
          outlined
          @click="snackbar = true"
          color="green"
          >Sign up
        </v-btn>
        </div>
      </v-col>
      <v-col md="12" v-if="$vuetify.breakpoint.xs">
        <div class="text-center">
             <v-btn
          label="Login"
          class="text-capitalize"
          outlined
          color="green"
          :to="{ name: 'log-in' }"
          >Login
        </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackbar" :timeout="timeout" color="warning">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn icon color="white" v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    snackbar: false,
    text: "Contact your administrator.",
    timeout: 3000,
  }),
};
</script>