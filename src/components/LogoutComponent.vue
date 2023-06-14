<template>
  <ion-page>
    <ion-header no-border :translucent="true">
      <ion-toolbar id="toolBar">
        <ion-buttons slot="end">
          <ion-button id="logOut" @click="logout">
            <ion-icon color="light" :icon="logOutOutline"></ion-icon>
            <span class="ion-no-border" style="color: white; font-weight: 800"
              >Déconnexion</span
            >
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <slot name="content-page"></slot>
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
} from "@ionic/vue";
import { defineComponent } from "vue";
import { arrowBackOutline, logOutOutline } from "ionicons/icons";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LogoutComponent",
  props: ["pageTitle", "pageDefaultBackLink"],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
    IonIcon,
  },
  setup() {
    const router = useRouter();

    const logout = () => {
      // Ajoutez ici votre logique de déconnexion
      // Par exemple, effacer les informations d'authentification

      // Rediriger l'utilisateur vers la page d'accueil ("/")
      router.push("/");
    };

    return {
      arrowBackOutline,
      logOutOutline,
      logout,
    };
  },
});
</script>

<style>
.ion-icon {
  font-size: 24px; /* ajustez la taille de police selon vos besoins */
  margin-right: 8px; /* ajustez la marge selon vos besoins */
  height: max-content;
  width: auto;
  background-color: black;
}
ion-toolbar {
  --background: white;
  --border: none;
  --box-shadow: none;
}

.ion-header::before::after {
  background: none;
}

#logOut {
  background: #eb445a;
  border-radius: 5px;
}
</style>
