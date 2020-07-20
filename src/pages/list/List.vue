<template>
  <div>
    <h2>List</h2>
    <ul class="list">
      <li v-for="item in items" :key="item.id">
        <Product :product="item"></Product>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Product from './Product';
import { ACTION_TYPES } from "../../store/actions";
import { httpService } from "../../http";
export default {
  name: "List",
  components: {
    Product
  },
  computed: {
    ...mapState(["items"])
  },
  methods: {
    ...mapActions({
      getItems: ACTION_TYPES.GET_ITEMS
    })
  },
  mounted() {
    this.getItems(httpService);
  }
};
</script>
<style scoped>
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
</style>