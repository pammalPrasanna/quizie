<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="12">
        <div class="text-center success--text display-1 pt-3">
            Create quizes now in web and android </div>
      </v-col>
      <v-col md="12">
          <div class="text-center"><v-btn class="subtitle-1 success text-capitalize" dark>sign  up</v-btn>
            </div>
      </v-col>
        <v-col md="12" v-if="$vuetify.breakpoint.xs">
          <div class="text-center"><v-btn class="subtitle-1 success text-capitalize" dark>Login</v-btn>
            </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>