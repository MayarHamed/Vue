<template>
  <div>
    <navbarApp v-if="!$route.meta.hideNavbar"/>
    <router-view></router-view>
  </div>
</template>

<script>
import navbarApp from "./components/navbar.vue";

export default {
  name: "App",
  components: {
    navbarApp,
  },
};
</script>

<style>
</style>
