<template>
  <v-menu
    v-model="showMenu"
    :close-on-content-click="false"
    offset-x
    open-on-click
  >
    <template #activator="{ on }">
      <v-btn
        class="ml-2"
        height="40"
        icon
        small
        width="40"
        v-on="on"
        @click="showMenu = true"
      >
        <v-icon color="white">
          mdi-plus
        </v-icon>
      </v-btn>
    </template>
    <v-card
      class="pa-4"
      color="#768D87"
    >
      <v-text-field
        v-model="currentInstructor.name"
        background-color="white"
        class="mb-4"
        color="#52784F"
        dense
        label="Nome"
        outlined
      />
      <v-autocomplete
        v-model="currentInstructor.segmentId"
        background-color="white"
        class="mb-4"
        color="#52784F"
        dense
        :disabled="segmentsInProgress"
        full-width
        item-text="name"
        item-value="id"
        :items="segments"
        label="Segmento"
        :loading="segmentsInProgress"
        outlined
      />
      <div class="d-flex">
        <v-spacer />
        <v-btn
          :disabled="inProgress"
          :loading="inProgress"
          width="120"
          @click="postInstructor"
        >
          Cadastrar
        </v-btn>
      </div>
    </v-card>
  </v-menu>
</template>
<script lang="ts" src="./InstructorForm.ts"></script>
