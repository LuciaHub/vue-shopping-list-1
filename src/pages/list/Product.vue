<template>
  <v-card outlined>
    <v-card-title> {{product.name}} {{product.ammount}} </v-card-title>

    <v-card-actions>
      <v-switch></v-switch>
      <v-btn text>Detalles  <v-icon right>mdi-pencil</v-icon> </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>
