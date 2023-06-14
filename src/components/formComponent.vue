<template>
  <form @submit.prevent="submitForm">
    <ion-list>
      <ion-Item>
        <ion-label position="floating">Titre de la Todo</ion-label>
        <ion-input required=true type="text" placeholder="Titre de la todo" v-model="todo.title"></ion-input>
      </ion-Item>

      <ion-Item>
        <ion-label position="floating">Description de la Todo</ion-label>
        <ion-textarea
          required=true 
          col="5"
          placeholder="description de la todo"
          v-model="todo.description"
        ></ion-textarea>
      </ion-Item>

      <ion-Item>
        <ion-label position="floating">URL photo de la Todo</ion-label>
        <ion-input required=true  type="url" placeholder="url de la todo" v-model="todo.img"></ion-input>
      </ion-Item>
    </ion-list>

    <ion-button v-if="is_edit_type_form" type="submit" expand="full">Modifier La todo</ion-button>
    <ion-button v-else type="submit" expand="full">Ajouter La todo</ion-button>

  </form>
</template>

<script lang="ts">
import {
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonTextarea,
  IonInput,
} from "@ionic/vue";
import { defineComponent,toRef } from "vue";

export default defineComponent({
  name: "FormComponent",
  props : ["todo_prop","is_edit_type_form"],
  emits: ["submitForm"],
  setup(props,context) {

    const todo = toRef(props,"todo_prop")

    function submitForm() {
    
      context.emit("submitForm", todo)
    }

    return { submitForm,todo };
  },
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonTextarea,
    IonInput,
  },
});
</script>
