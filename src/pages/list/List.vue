<template>
  <section role="contentinfo" :title="title" :aria-label="title">
    <v-alert type="error" v-if="errorGettingItems">
      Items could not be retrieved, try again later.
    </v-alert>
    <ul v-else-if="items.length" class="list">
      <li class="list__item" v-for="item in items" :key="item.id">
        <Product :product="item"/>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { ACTION_TYPES } from "../../store/actions";
import { itemsService } from "../../services/items-service";
import Product from './Product';
export default {
  name: "List",
  components:{
    Product
  },
  data(){
    return {
      title: 'Items list'
    }
  },
  computed: {
    ...mapState(['items', 'errorGettingItems'])
  },
  methods: {
    ...mapActions({
      getItems: ACTION_TYPES.GET_ITEMS,
    }),
  },
  created() {
    this.getItems(itemsService);
  },
};
</script>
<style scoped>
  .list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));;
    gap: 1rem;
  }
</style>