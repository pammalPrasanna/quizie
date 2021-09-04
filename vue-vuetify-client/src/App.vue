<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-if="!$store.state.user['is_staff'] && $store.state.isAuthenticated"
      v-model="$store.state.drawer"
      app
    >
      <NavbarLinks />
    </v-navigation-drawer>
    <v-app-bar app dense color="white" dark>
      <!--  -->
      <v-app-bar-nav-icon
        color="success"
       v-if="!$store.state.user['is_staff'] && $store.state.isAuthenticated"
      
        @click="$store.commit('setDrawer', true)"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="green--text" 
        ><router-link :to="{ name: 'quizes' }" class="text-h5 text-decoration-none">
            Quizie</router-link></v-toolbar-title
      >
      <v-spacer />

      <template v-if="$store.state.isAuthenticated">
        <template v-if="!$vuetify.breakpoint.xs">
          <v-btn
            label="Logout"
            class="text-capitalize"
            color="success"
            outlined
            @click="logout()"
            >Logout
          </v-btn>
        </template>
        <template v-else>
          <v-btn class="mx-2" icon small color="success" @click="logout()">
            <v-icon dark> mdi-logout </v-icon>
          </v-btn>
        </template>
      </template>
      <!-- <template v-else>
        <v-btn
          label="Login"
          v-if="!$vuetify.breakpoint.xs"
          class="text-capitalize"
          outlined
          color="green"
          :to="{ name: 'log-in' }"
          >Login
        </v-btn>
      </template> -->
      <v-progress-linear
        :active="$store.state.isLoading"
        :indeterminate="$store.state.isLoading"
        absolute
        bottom
        color="green"
      ></v-progress-linear>
    </v-app-bar>
  
    <v-main>
      <v-container fluid>
        <router-view><Home /></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import NavbarLinks from "@/components/NavbarLinks.vue";
export default {
  name: "App",

  data: () => ({
    drawer: false,
  }),
  components: {
    NavbarLinks,
  },
  async beforeCreate() { 
    await this.$store.commit("initializeStore");
    if (this.$store.state.token) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Token ${this.$store.state.token}`;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
 
  methods: {
    async logout() {
      await axios
        .post("/api/v1/token/logout/")
        .then((response) => {
          console.log("Logged out");
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        });

      axios.defaults.headers.common["Authorization"] = "";
      this.$store.commit("removeToken");
      this.$router.push({ name: "log-in" });
    },
  },
};
</script>
