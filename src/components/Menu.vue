<template>
  <v-navigation-drawer app expand-on-hover permanent>
    <v-list dense>
      <router-link
        class="menu__link"
        v-for="item in items"
        :key="item.label"
        :to="item.link"
        active-class="menu__link--active"
        exact
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon class="menu__icon">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="menu__label">{{ item.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      items: [
        { icon: "mdi-format-list-bulleted", label: "List", link: "/" },
        { icon: "mdi-plus", label: "Add", link: "/add" },
      ],
    };
  },
};
</script>
<style scoped>
.menu__link {
  text-decoration: none;
}
/* Vuetify list breaks color inheritance using !important */
.menu__link--active .menu__label {
  color: var(--v-anchor-base);
}
.menu__link--active .menu__icon {
  color: var(--v-anchor-base);
}
</style>