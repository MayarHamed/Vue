<template>
  <div class="body">
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
.body{
  background: url("assets/4660795.png");
  background-attachment: fixed;
  background-size: cover;
}
</style>
