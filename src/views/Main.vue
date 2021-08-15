<template>
  <div class="main">
    <AboutCourses/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutCourses from "@/components/AboutCourses.vue";

export default {
  name: "Main",
  components: {
    AboutCourses,
  },
};
</script>
