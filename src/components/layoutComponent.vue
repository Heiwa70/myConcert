<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons>
            <ion-button>
                <ion-back-button text="Retour" :default-href="pageDefaultBackLink"></ion-back-button>
            </ion-button>

        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
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
  IonTitle,
  IonToolbar,
    IonButtons,
    IonButton,
    IonBackButton
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LayoutComponent",
  props:["pageTitle", "pageDefaultBackLink"],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonBackButton,
  },
});
</script>

<style></style>
