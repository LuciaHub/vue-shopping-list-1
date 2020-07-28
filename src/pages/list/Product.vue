<template>
  <v-card class="product" outlined>
    <v-card-title>{{product.name}} {{product.ammount}}</v-card-title>

    <v-card-actions class="product__actions">
      <v-switch @change="onSwitchChanged" :input-value="product.bought"></v-switch>
      <v-btn :to="detailsRoute" text>
        Detalles
        <v-icon right>mdi-pencil</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import debounce from "debounce";
import { mapActions } from "vuex";
import { ACTION_TYPES } from "../../store/actions";
import { itemsService } from "../../services/items-service";

export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    detailsRoute() {
      return "/" + this.product.id;
    },
  },
  methods: {
    ...mapActions({
      updateItem: ACTION_TYPES.UPDATE_ITEM,
    }),
    onSwitchChanged: debounce(function (value) {
      this.updateBought(value);
    }, 750),
    updateBought(value) {
      if (value === this.product.bought) {
        return;
      }
      this.updateItem({
        id: this.product.id,
        model: {
          bought: value,
        },
        itemsService,
      });
    },
  },
};
</script>
<style scoped>
.product:hover {
  border-color: var(--v-primary-base);
}
.product__actions {
  display: flex;
  justify-content: space-between;
}
</style>
