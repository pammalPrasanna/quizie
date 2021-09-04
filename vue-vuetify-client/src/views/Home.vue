<template>
<LoginLinks/>
  <!-- <v-container class="fill-height" fluid> -->
    <!-- <v-row align="center" justify="center">
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
    </v-snackbar> -->
  <!-- </v-container> -->
</template>

<script>
import LoginLinks from '../components/LoginLinks.vue'
export default {
  data: () => ({
    snackbar: false,
    text: "Contact your administrator.",
    timeout: 3000,
  }),
  components: {
    LoginLinks: LoginLinks,
  },
    methods: {
    async getUser() {
          await axios
            .get("/api/v1/users/me")
            .then((response) => {
              this.$store.commit("setUser", {
                id: response.data.id,
                username: response.data.username,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        await  this.getUserAccess()
    },
    async getUserAccess() {
       const user = this.$store.state.user;
          await axios
            .get(`/api/v1/user/${user.id}/`)
            .then((response) => {
              this.$store.commit("setUserAccess", response.data.is_staff);
            })
            .catch((error) => {
              console.log(error);
            });
        
    },
    async submitForm(user) {
      this.$store.commit("setIsLoading", true);
      this.errors = [];
      const formData = {
        username: user === 'T' ? 'asdf' : '',
        password: user === 'T' ? 'asdf' : '',
      };
      await axios
        .post("/api/v1/token/login/", formData)
        .then((response) => {
          const token = response.data.auth_token;

          this.$store.commit("setToken", token);

          axios.defaults.headers.common["Authorization"] = `Token ${token}`;

          localStorage.setItem("token", token);

          this.getUser()
         
        })
        .catch((error) => {
          if (error.response) {
            for (const err in error.response.data) {
              this.errors.push(`${err}: ${error.response.data[err]}`);
            }
          } else if (error.message) {
            this.errors.push(error.message);
          }
        });

      this.$router.push({ name: "quizes" });
      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>