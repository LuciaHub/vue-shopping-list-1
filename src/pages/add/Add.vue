<template>
  <section class="add">
    <h2>Add a product to your shopping list</h2>
    <v-form @submit.stop.prevent="onSubmit" ref="form" v-model="isValid">
      <v-alert type="error" v-if="formError">
        Unexpected error!
      </v-alert>
      <v-text-field autofocus v-model="model.name" :rules="rules.name" label="Name"></v-text-field>
      <v-text-field v-model="model.ammount" :rules="rules.ammount" label="Ammount" type="number"></v-text-field>
      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { ACTION_TYPES } from "../../store/actions";
import { itemsService } from "../../services/items-service";
import { required, min } from "../../core/validators";
export default {
  name: "Add",
  data() {
    return {
      isValid: false,
      formError: false,
      model: {
        name: "",
        ammount: 1,
      },
      rules: {
        name: [required("Name is required")],
        ammount: [min(1, "Ammount must be at least 1")],
      },
    };
  },
  methods: {
    ...mapActions({
      createItem: ACTION_TYPES.CREATE_ITEM
    }),
    onSubmit() {
      this.$refs.form.validate();
      if (!this.isValid) {
        return;
      }
      this.createItem({
        model: this.model,
        itemsService
      }).then(this.onSuccess).catch(this.onError)
    },
    onSuccess(){
        this.$refs.form.reset();
        // se ejecuta cuando terminen todas las tareas de la pila de llamadas
        setTimeout(()=>this.model.ammount = 1, 0);
    },
    onError(){
        this.formError = true;
    }
  },
};
</script>
<style scoped>
  .add {
    width: 50%;
    margin: auto;
  }
</style>