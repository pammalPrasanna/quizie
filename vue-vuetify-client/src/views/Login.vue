<template>
<LoginLinks/>
  <!-- <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="5">
        <div  :class="
              !$vuetify.breakpoint.xs
                ? 'text-h5 font-weight-regular text-center pt-3'
                : 'text-h6 text-center pt-3'">Log in</div>
        <v-form @submit.prevent="submitForm" class="pt-3">
          <v-text-field
            v-model="username"
            :rules="nameRules"
            label="Username"
            color="success"
            required
            outlined
            :dense="$vuetify.breakpoint.xs"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="showPass ? 'text' : 'password'"
            label="Password"
            color="success"
            outlined
            required
            :dense="$vuetify.breakpoint.xs"
            :disabled="username.length === 0"
            @click:append="showPass = !showPass"
          ></v-text-field>

          <v-alert
            v-if="errors.length"
            border="left"
            color="red lighten-2"
            dark
          >
            <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
          </v-alert>
          <v-btn
            :disabled="password.length === 0"
            color="success"
            class="text-capitalize"
            type="submit"
            block
          >
            Log in
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script>
import LoginLinks from '../components/LoginLinks.vue'

export default {
  data: () => ({
    // isFormValid: true,
    // username: "",
    // password: "",
    // errors: [],
    // showPass: false,
    // nameRules: [(v) => !!v || "Username is required"],
    // passwordRules: [(v) => !!v || "Password is required"],
  }),
  components: {
    LoginLinks: LoginLinks,
  },

  methods: {
  //   async getUser() {
  //         await axios
  //           .get("/api/v1/users/me")
  //           .then((response) => {
  //             this.$store.commit("setUser", {
  //               id: response.data.id,
  //               username: response.data.username,
  //             });
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //           });
  //       await  this.getUserAccess()
  //   },
  //   async getUserAccess() {
  //      const user = this.$store.state.user;
  //         await axios
  //           .get(`/api/v1/user/${user.id}/`)
  //           .then((response) => {
  //             this.$store.commit("setUserAccess", response.data.is_staff);
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //           });
        
  //   },
  //   async submitForm() {
  //     this.$store.commit("setIsLoading", true);
  //     this.errors = [];
  //     const formData = {
  //       username: this.username,
  //       password: this.password,
  //     };
  //     await axios
  //       .post("/api/v1/token/login/", formData)
  //       .then((response) => {
  //         const token = response.data.auth_token;

  //         this.$store.commit("setToken", token);

  //         axios.defaults.headers.common["Authorization"] = `Token ${token}`;

  //         localStorage.setItem("token", token);

  //         this.getUser()
         
  //       })
  //       .catch((error) => {
  //         if (error.response) {
  //           for (const err in error.response.data) {
  //             this.errors.push(`${err}: ${error.response.data[err]}`);
  //           }
  //         } else if (error.message) {
  //           this.errors.push(error.message);
  //         }
  //       });

  //     this.$router.push({ name: "quizes" });
  //     this.$store.commit("setIsLoading", false);
  //   },
  },
};
</script>