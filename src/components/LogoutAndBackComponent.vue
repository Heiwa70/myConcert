<template>
  <ion-page>
    <ion-header no-border :translucent="true">
      <ion-toolbar id="toolBar">
        <ion-buttons slot="end">
          <ion-button id="logOut" @click="$router.push('/')">
            <ion-icon color="light" :icon="arrowBackOutline"></ion-icon>
            <span class="ion-no-border" style="color: white; font-weight: 800"
              >Déconnexion</span
            >
          </ion-button>
        </ion-buttons>

        <ion-buttons slot="start">
          <ion-button id="back" @click="$router.go(-1)">
            <ion-icon color="light" :icon="logOutOutline"></ion-icon>
            <span class="ion-no-border" style="color: white; font-weight: 800"
              >Retour</span
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
    return {
      arrowBackOutline,
      logOutOutline,
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

#back {
  background: #6558f5;
  border-radius: 5px;
}
</style>
