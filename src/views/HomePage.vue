<template>
  <LogoutComponent>
    <template #content-page>
      <div class="imgConcert">
        <ion-img
          class="concert"
          src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        ></ion-img>
        <ion-text
          class="ion-text-center"
          style="font-weight: 500; font-size: 20px; margin-top: 20px"
          >Bienvenue sur l'application MyConcert 🔥</ion-text
        >
      </div>

      <ion-buttons id="blockbtn">
        <ion-button id="add" @click="$router.push('/newConcert')">
          <ion-icon color="light" :icon="addCircleOutline"></ion-icon>
          <span style="color: white; font-size: 20px; font-weight: 600"
            >Créer un concert</span
          >
        </ion-button>

        <ion-button
          style="margin-top: 20px"
          class="purple"
          @click="$router.push('/updateConcert')"
        >
          <ion-icon color="light" :icon="menuOutline"></ion-icon>
          <span
            class="ion-no-border"
            style="color: white; font-weight: 600; font-size: 20px"
          >
            Gérer un concert
          </span>
        </ion-button>

        <ion-button
          style="margin-top: 20px"
          class="orange"
          @click="$router.push('/updateConcert')"
        >
          <span
            class="ion-no-border"
            style="color: white; font-weight: 600; font-size: 20px"
          >
            Gérer les catégories
          </span>
        </ion-button>

        <ion-button
          style="margin-top: 20px"
          class="cyan"
          @click="$router.push('/userPage')"
        >
          <span
            class="ion-no-border"
            style="color: white; font-weight: 600; font-size: 20px"
          >
            Gérer les utilisateurs
          </span>
        </ion-button>
      </ion-buttons>
    </template>
  </LogoutComponent>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonItem,
  IonButton,
  IonButtons,
} from "@ionic/vue";
import LogoutComponent from "@/components/LogoutComponent.vue";
import LogoutAndBackComponent from "@/components/LogoutAndBackComponent.vue";
import LogoutAndAddComponent from "@/components/LogoutAndAddComponent.vue";

import { menuOutline, addCircleOutline } from "ionicons/icons";
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

#back {
  background-color: #6558f5;
  border-radius: 5px;
  color: white;
  font-weight: 800;
}
#add {
  background: #207869;
  border-radius: 5px;
}
.purple {
  background: #6558f5;

  border-radius: 5px;
  color: white;
  font-weight: 800;
}

.green {
  background: #207869;
  border-radius: 5px;
  color: white;
  font-weight: 800;
  margin-bottom: 20px;
}

.cyan {
  background: rgb(8, 115, 255);
  border-radius: 5px;
  color: white;
  font-weight: 800;
  margin-bottom: 20px;
}

.orange {
  background: orange;
  border-radius: 5px;
  color: white;
  font-weight: 800;
  margin-bottom: 20px;
}
.imgConcert {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.concert {
  width: 90%;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

#blockbtn {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
</style>
