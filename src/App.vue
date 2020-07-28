<template>
  <v-app>
    <Menu />
    <Header />
    <v-main>
      <Loader />
      <div class="app__content">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "./components/Menu";
import Header from "./components/Header";
import Loader from "./components/Loader";
export default {
  name: "App",
  components: {
    Menu,
    Header,
    Loader,
  },
};
</script>
<style scoped>
.app__content {
  padding: 1rem;
}
</style>