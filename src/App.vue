<template>
  <v-app>
    <v-app-bar
      app
      class="px-16 white--text"
      color="#151515"
      elevation="0"
    >
      <img
        class="mr-2"
        src="./assets/logo.png"
        style="cursor: pointer"
        width="24"
        @click="$router.push({ name: 'Home' }).catch(() => {})"
      >
      <span
        class="mr-1"
        style="cursor: pointer"
        @click="$router.push({ name: 'Home' }).catch(() => {})"
      >datapush</span>
      <span
        class="font-weight-bold"
        style="cursor: pointer"
        @click="$router.push({ name: 'Home' }).catch(() => {})"
      >thoth</span>
      <span class="mx-2">|</span>
      <span
        style="cursor: pointer"
        @click="$router.push({ name: 'Home' }).catch(() => {})"
      >escola virtual</span>

      <v-spacer />

      <div class="ml-16 d-flex align-center text-body-2 text-uppercase">
        <span
          class="mr-12 highlight"
          @click="$router.push({ name: 'Home' }).catch(() => {})"
        >
          Início
        </span>
        <span
          class="mr-12 highlight"
          @click="$router.push({ name: 'Courses' }).catch(() => {})"
        >
          Cursos
        </span>
        <span
          class="mr-12 highlight"
          @click="$router.push({ name: 'Lessons' }).catch(() => {})"
        >
          Aulas
        </span>
        <span
          class="mr-12 highlight"
          @click="$router.push({ name: 'Forum' }).catch(() => {})"
        >
          Fórum
        </span>
      </div>

      <v-menu
        nudge-bottom="5"
        nudge-left="66"
        offset-y
      >
        <template #activator="{ on }">
          <v-btn
            elevation="0"
            rounded
            v-on="on"
          >
            <v-icon>mdi-account-circle</v-icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-card
          v-if="!hasUserLogged"
          class="d-flex flex-column py-2"
          width="140"
        >
          <v-btn
            small
            text
            @click="$router.push({ name: 'SignIn' }).catch(() => {})"
          >
            Entrar
            <v-spacer />
          </v-btn>
          <v-btn
            small
            text
            @click="$router.push({ name: 'SignUp' }).catch(() => {})"
          >
            Cadastrar-se
            <v-spacer />
          </v-btn>
        </v-card>
        <v-card
          v-else
          class="d-flex flex-column py-2"
          width="140"
        >
          <v-btn
            small
            text
          >
            {{ user.name }}
            <v-spacer />
          </v-btn>
          <v-btn
            small
            text
            @click="signOutUser"
          >
            Sair
            <v-spacer />
          </v-btn>
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
import { Getter, Mutation, State } from 'vuex-class'
import { User } from './models/User'
import UserEntity from './models/UserEntity'

@Component
export default class App extends Vue {
  @State('user')
  readonly user!: User

  @Getter('hasUserLogged')
  readonly hasUserLogged!: () => boolean

  @Mutation('setUser')
  readonly setUser!: (user: User) => void

  created () {
    document.documentElement.classList.add('disable-scroll')
  }

  signOutUser () {
    this.setUser(new UserEntity())
    window.location.reload()
  }
}
</script>

<style lang="scss" src="./App.scss"></style>
