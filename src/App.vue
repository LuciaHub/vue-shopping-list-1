<template>
  <v-app>
    <h1>Hello</h1>
     <router-link to="/">Lista</router-link>
     <router-link to="/add">Add</router-link>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>
