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
          <ion-button color="success" @click="ajouterConcert">
            <ion-icon :icon="addCircleOutline"></ion-icon>
            Ajouter un concert
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
  name: "NewConcertPage",
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
      const randomPicture = [
        "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3171812/pexels-photo-3171812.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1916821/pexels-photo-1916821.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3052360/pexels-photo-3052360.jpeg?auto=compress&cs=tinysrgb&w=1200",
      ];

      const randomIndex = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
      const newConcert = {
        id: Math.floor(Math.random() * (1000 - 5 + 1)) + 5,
        name: this.nomConcert,
        description: this.description,
        image: randomPicture[randomIndex],
        date: this.dateConcert,
        heure: this.heureConcert,
        categorie_id: 2,
        user_id: 1,
      };
      store.dispatch("addConcertAction", newConcert);
      this.$router.push("/user");
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
  