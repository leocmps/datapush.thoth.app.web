<template>
  <v-dialog
    max-width="600"
    :value="value"
    @input="emitInput($event)"
  >
    <v-card
      class="pa-8"
      color="#768D87"
    >
      <v-text-field
        v-model="currentLesson.tittle"
        background-color="white"
        class="mb-4"
        color="#52784F"
        dense
        label="Título"
        outlined
      />
      <div class="d-flex align-center">
        <v-text-field
          v-model="date"
          v-mask="'##/##/####'"
          background-color="white"
          class="mb-4 mr-2"
          color="#52784F"
          dense
          label="Data"
          outlined
        />
        <v-text-field
          v-model="hour"

          v-mask="'##:##'"
          background-color="white"
          class="mb-4"
          color="#52784F"
          dense
          label="Horário"
          outlined
        />
      </div>
      <div class="d-flex">
        <v-autocomplete
          v-model="currentLesson.instructorId"
          background-color="white"
          class="mb-4"
          color="#52784F"
          dense
          item-text="name"
          item-value="id"
          :items="instructors"
          label="Instrutor"
          outlined
        />
        <instructor-form />
      </div>
      <v-autocomplete
        v-model="currentLesson.segmentId"
        background-color="white"
        class="mb-4"
        color="#52784F"
        dense
        full-width
        item-text="name"
        item-value="id"
        :items="segments"
        label="Segmento"
        outlined
      />
      <v-text-field
        v-model="currentLesson.url"
        background-color="white"
        class="mb-4"
        color="#52784F"
        dense
        label="Link"
        outlined
      />
      <div class="d-flex">
        <v-spacer />
        <v-btn
          :disabled="inProgress"
          :loading="inProgress"
          width="120"
          @click="postLesson"
        >
          Cadastrar
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" src="./LessonDialog.ts"></script>
