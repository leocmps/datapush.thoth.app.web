<template>
  <v-dialog
    max-width="600"
    :value="value"
    @input="$emit('input', $event)"
  >
    <v-card
      class="pa-8"
      color="#768D87"
    >
      <v-text-field
        v-model="currentQuestion.title"
        background-color="white"
        class="mb-4"
        color="#52784F"
        dense
        label="Título"
        outlined
      />
      <v-textarea
        v-model="currentQuestion.message"
        background-color="white"
        class="mb-4"
        color="#52784F"
        dense
        label="Pergunta"
        outlined
      />
      <div class="d-flex">
        <v-spacer />
        <v-btn
          :disabled="inProgress"
          :loading="inProgress"
          width="120"
          @click="postQuestion"
        >
          Enviar
        </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" src="./ForumDialog.ts"></script>
