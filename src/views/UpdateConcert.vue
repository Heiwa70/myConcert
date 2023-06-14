<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <LogoutAndBackComponent />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card
        class="custom-card"
        v-for="concert in concerts"
        :key="concert.id"
      >
        <ion-img
          class="card-image"
          :src="concert.image"
          alt="Card Image"
        ></ion-img>
        <ion-card-header>
          <ion-card-title>{{ concert.name }}</ion-card-title>
          <ion-card-subtitle>{{ concert.description }}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <div class="card-info">
            <ion-icon
              style="font-size: 20px; margin-right: 5px"
              :icon="musicalNoteOutline"
            ></ion-icon>
            <span>POP</span>
          </div>
          <div class="card-info">
            <ion-icon
              style="font-size: 20px; margin-right: 5px"
              :icon="calendarOutline"
            ></ion-icon>
            <span>{{ concert.date }}</span>
          </div>
          <div class="card-info">
            <ion-icon
              style="font-size: 20px; margin-right: 5px"
              :icon="timeOutline"
            ></ion-icon>
            <span>{{ concert.heure }}</span>
          </div>
        </ion-card-content>

        <ion-row class="button-row">
          <ion-button color="tertiary" @click="voirConcert(concert)">
            <ion-icon :icon="eyeOutline"></ion-icon>
            Voir
          </ion-button>
          <ion-button color="warning" @click="modifierConcert(concert)">
            <ion-icon :icon="createOutline"></ion-icon>
            Modifier
          </ion-button>
          <ion-button color="danger" @click="supprimerConcert(concert)">
            <ion-icon :icon="trashOutline"></ion-icon>
            Supprimer
          </ion-button>
        </ion-row>
      </ion-card>
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
  IonCard,
  IonRow,
} from "@ionic/vue";
import { defineComponent, computed } from "vue";
import {
  musicalNoteOutline,
  calendarOutline,
  timeOutline,
  eyeOutline,
  createOutline,
  trashOutline,
} from "ionicons/icons";
import LogoutAndBackComponent from "@/components/LogoutAndBackComponent.vue";
import { useStore } from "../store";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "UpdateConcert",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
    IonIcon,
    IonCard,
    IonRow,
    LogoutAndBackComponent,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    store.dispatch("getAllConcerts");

    const concerts = computed(() => {
      return store.getters.getAllConcerts;
    });

    const voirConcert = (concert) => {
      alert("Il est sous vos yeux 👀");
    };

    const modifierConcert = (concert) => {
      router.push(`/ModifierConcert/${concert.id}`);
    };

    const supprimerConcert = (concert) => {
      store.dispatch("deleteConcert", concert);
    };

    return {
      concerts,
      musicalNoteOutline,
      calendarOutline,
      timeOutline,
      eyeOutline,
      createOutline,
      trashOutline,
      voirConcert,
      modifierConcert,
      supprimerConcert,
    };
  },
});
</script>

<style scoped>
.custom-card {
  margin-bottom: 16px;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-info {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

.card-info ion-icon {
  margin-right: 8px;
}

.card-info span {
  font-weight: bold;
}

.button-row {
  display: flex;
  justify-content: space-between;
  margin: 8px 10px;
  flex-direction: row;
}
</style>
