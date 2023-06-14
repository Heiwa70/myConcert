<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title style="font-weight: 900">MyConcertsApp 🎧</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="imgConcert">
        <ion-img
          src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ></ion-img>
      </div>

      <ion-item>
        <ion-label class="inputClass" position="floating"
          >Nom d'utilisateur</ion-label
        >
        <ion-input
          v-model="usernameValue"
          id="username"
          type="text"
          placeholder="Utilisateur"
          required="true"
        ></ion-input>
      </ion-item>

      <ion-item>
        <ion-label class="inputClass" position="floating"
          >Mot de passe</ion-label
        >
        <ion-input
          v-model="passwordValue"
          type="password"
          placeholder="Mot de passe"
          required="true"
        ></ion-input>
      </ion-item>

      <ion-buttons class="btn">
        <ion-button @click="conn" slot="center" id="back">Connexion</ion-button>
      </ion-buttons>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { defineComponent, computed, ref } from "vue";
import { useStore } from "../store";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const store = useStore(); // Obtient l'instance du store Vuex
    store.dispatch("getAllUsers");

    const users = computed(() => {
      return store.getters.getAllUsers;
    });
    store.dispatch("checkUsernamePassword");

    return { users };
  },
  methods: {
    conn() {
      //verif si les password et username sont corrects pour un user et un admin
      if (this.usernameValue == "iutlpro" && this.passwordValue == "iutlpro") {
        this.$router.push("/user");
      } else if (
        this.usernameValue == "client" &&
        this.passwordValue == "client"
      ) {
        this.$router.push("/user");
      } else {
        alert("Mauvais identifiants");
      }
    },
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonImg,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  },
  data() {
    return {
      prenom: "pauline",
      usernameValue: "",
      passwordValue: "",
    };
  },
});
</script>


<style scoped>
#back {
  background-color: #6558f5;
  border-radius: 5px;
  color: white;
  font-weight: 800;
}
.btn {
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
