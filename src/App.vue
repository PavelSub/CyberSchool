<template>
  <v-app>
    <Menu/>
    <v-main><router-view></router-view></v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Menu from "@/components/Menu.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    Menu,
    Footer,
  }
};
</script>
