<template>
<div>
     <v-list-item>
          <v-list-item-title class="text-h6 font-weight-regular">
              Quizie
          </v-list-item-title>
           <v-list-item-icon>
             <v-btn @click="$store.commit('setDrawer', false)" icon color="red lighten-2"> <v-icon>mdi-close</v-icon></v-btn>
            </v-list-item-icon>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        exact
        
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.link"
          active-class="success  lighten-4"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title :class="$vuetify.breakpoint.xs ? 'subtitle-1 font-weight-regular' : 'body-1 font-weight-regular'">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Quizes', icon: 'mdi-format-list-checks', link: {name: 'quizes'} },
          { title: 'Results', icon: 'mdi-chart-bar', link: {name: 'user-results', params: {id: this.$store.state.user.id}} },
        ],
        right: null,
      }
    },
  }
</script>