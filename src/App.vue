<template>
  <v-app>
    <v-app-bar
      app
      class="mx-16"
      color="transparent"
      elevation="0"
    >
      <img
        src="./assets/logo.png"
        width="50"
      >
      <h1 class="ml-2 title">
        THOTH.
      </h1>

      <v-spacer />

      <div class="mr-16">
        Início
      </div>
      <div class="mr-16">
        Cursos
      </div>
      <div class="mr-16">
        Aulas
      </div>
      <div class="mr-16">
        Fóruns
      </div>

      <v-menu
        close-on-content-click
        nudge-bottom="5"
        nudge-left="40"
        offset-y
        rounded="lg"
        transition="scroll-x-reverse-transition"
      >
        <template #activator="{ on }">
          <v-btn
            color="white"
            elevation="0"
            rounded="lg"
            v-on="on"
          >
            <v-icon size="22">
              mdi-menu
            </v-icon>
            <v-icon size="28">
              mdi-account-circle
            </v-icon>
          </v-btn>
        </template>
        <v-card rounded="lg">
          <v-list dense>
            <v-list-item>Cadastrar-se</v-list-item>
            <v-list-item>Entrar</v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
.v-application {
  background: #EEFDF2 !important;
}

.title {
  font-weight: 800;
}
</style>
