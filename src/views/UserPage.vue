<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <LogoutAndBackComponent />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="card-container">
        <div v-for="user in users" :key="user.id" class="card">
          <div class="card-header">
            <!-- Afficher les informations sur l'utilisateur -->
            <h2>{{ user.name }}</h2>
            <p>id {{ user.id }}</p>
            <p>Role : {{ user.role }}</p>
            <p>Mot de passe : {{ user.password }}</p>
          </div>
          <div class="card-actions">
            <ion-button color="danger" @click="deleteUser(user.id)">
              Supprimer
            </ion-button>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
  
  <script>
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";
import LogoutAndBackComponent from "@/components/LogoutAndBackComponent.vue";
import { useStore } from "../store";

export default defineComponent({
  name: "UserPage",
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    LogoutAndBackComponent,
  },
  computed: {
    users() {
      // Accéder à la liste des utilisateurs depuis le store
      return this.$store.getters.getAllUsers;
    },
  },
  methods: {
    deleteUser(userId) {
      this.$store.dispatch("deleteUser", userId);
    },
  },
});
</script>
  
  <style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.card {
  max-width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  text-align: center;
}

.card-actions {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
  