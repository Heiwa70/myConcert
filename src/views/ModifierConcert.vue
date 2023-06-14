<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <LogoutAndBackComponent />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="formContainer">
        <ion-item>
          <ion-label position="floating">Nom du concert</ion-label>
          <ion-input type="text" v-model="nomConcert"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Description</ion-label>
          <ion-textarea v-model="description"></ion-textarea>
        </ion-item>

        <ion-item>
          <ion-datetime
            presentation="date"
            picker-format="DD MMMM YYYY"
            display-format="DD MMMM YYYY"
            v-model="dateConcert"
          ></ion-datetime>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Heure du concert</ion-label>
          <ion-datetime
            presentation="time"
            picker-format="HH:mm"
            display-format="HH:mm"
            v-model="heureConcert"
          ></ion-datetime>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Catégorie du concert</ion-label>
          <ion-input type="text" v-model="categorieConcert"></ion-input>
        </ion-item>

        <div class="btn">
          <ion-button color="warning" @click="ajouterConcert">
            <ion-icon :icon="addCircleOutline"></ion-icon>
            Modifier un concert
          </ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
    
    <script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButton,
  IonIcon,
  IonDatetime,
  IonInput,
  IonTextarea,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { addCircleOutline } from "ionicons/icons";
import LogoutAndBackComponent from "@/components/LogoutAndBackComponent.vue";
import { store } from "../store";

export default defineComponent({
  name: "ModifierConcertPage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
    IonIcon,
    IonDatetime,
    IonInput,
    IonTextarea,
    LogoutAndBackComponent,
  },
  data() {
    return {
      nomConcert: "",
      description: "",
      dateConcert: "",
      heureConcert: "",
      categorieConcert: "",
    };
  },
  methods: {
    ajouterConcert() {
      this.$router.push("/modifierConcert");
    },
  },
  computed: {
    addCircleOutline() {
      return addCircleOutline;
    },
  },
});
</script>
    
    <style scoped>
.btn {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.formContainer {
  margin-top: 20px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.ion-item {
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;
}

.ion-label {
  white-space: nowrap;
}

.ion-input {
  max-width: 100%;
}

.ion-textarea {
  max-width: 100%;
}
</style>
    