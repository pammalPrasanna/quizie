<template>
  <div
    class="d-flex justify-center mb-6"
    :class="$vuetify.breakpoint.xs ? 'flex-column' : 'flex-row'"
  >
    <v-card
      class="ma-4"
      outlined
      tile
      v-for="(link, index) in loginLinks"
      :key="index"
      :style="$vuetify.breakpoint.xs ? 'width: 100%;' : 'width: 400px'"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h5 primary--text">
            {{ link.name }}
          </v-list-item-title>
          <v-card-text v-if="$vuetify.breakpoint.xs">
            A {{ link.name }} can
            <p>
              <template v-for="(item, index) in link.actions">
                <span
                  :key="index"
                  :style="item.canPerform ? 'color: green' : 'color: crimson'"
                >
                  {{
                    index === link.actions.length - 1
                      ? `${item.name}.`
                      : `${item.name}, `
                  }}
                </span>
              </template>
            </p>
          </v-card-text>
          <v-card-text v-else>
            A {{ link.name }} can
            <ul>
              <template v-for="(item, index) in link.actions">
                <li
                  :key="index"
                  :style="item.canPerform ? 'color: green' : 'color: crimson'"
                >
                  {{ item.name }}
                </li>
              </template>
            </ul>
          </v-card-text>
        </v-list-item-content>
      </v-list-item>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          class="ma-2"
          outlined
          small
          color="primary"
          @click="submitForm(link.name)"
        >
          Login
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginLinks",
  data: () => {
    return {
      loginLinks: [
        {
          name: "Teacher",
          actions: [
            {
              name: "Create Quiz",
              canPerform: true,
            },
            {
              name: "Edit Quiz",
              canPerform: true,
            },
            {
              name: "Delete Quiz",
              canPerform: true,
            },
            {
              name: "Add questions to quiz",
              canPerform: true,
            },
            {
              name: "Edit questions in quiz",
              canPerform: true,
            },
            {
              name: "Delete questions in quiz",
              canPerform: true,
            },
            {
              name: "View results of all attempts in a quiz",
              canPerform: true,
            },
            {
              name: "Attempt a quiz",
              canPerform: false,
            },
            {
              name: "View the result of attended quiz",
              canPerform: false,
            },
          ],
        },
        {
          name: "Student",
          actions: [
            {
              name: "Create Quiz",
              canPerform: false,
            },
            {
              name: "Edit Quiz",
              canPerform: false,
            },
            {
              name: "Delete Quiz",
              canPerform: false,
            },
            {
              name: "Add questions to quiz",
              canPerform: false,
            },
            {
              name: "Edit questions in quiz",
              canPerform: false,
            },
            {
              name: "Delete questions in quiz",
              canPerform: false,
            },
            {
              name: "View results of all attempts in a quiz",
              canPerform: false,
            },
            {
              name: "Attempt a quiz",
              canPerform: true,
            },
            {
              name: "View the result of attended quiz",
              canPerform: true,
            },
          ],
        },
      ],
    };
  },
  methods: {
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
      await this.getUserAccess();
    },

    async submitForm(user) {
      // console.log(user);
      this.$store.commit("setIsLoading", true);
      this.errors = [];
      const formData = {
        username: user === "Teacher" ? "teacher1" : "student1",
        password: user === "Teacher" ? "qt1@quizie.com" : "qs1@quizie.com",
      };
      await axios
        .post("/api/v1/token/login/", formData)
        .then((response) => {
          const token = response.data.auth_token;

          this.$store.commit("setToken", token);

          axios.defaults.headers.common["Authorization"] = `Token ${token}`;

          localStorage.setItem("token", token);

          this.getUser();
        })
        .catch((error) => {
          if (error.response) {
            for (const err in error.response.data) {
              this.errors.push(`${err}: ${error.response.data[err]}`);
            }
          } else if (error.message) {
            this.errors.push(error.message);
          }
          console.log(error);
        });

      this.$router.push({ name: "quizes" });
      this.$store.commit("setIsLoading", false);
    },
  },
};
</script>