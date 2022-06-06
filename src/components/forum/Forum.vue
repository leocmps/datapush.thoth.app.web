<template>
  <div
    class="d-flex align-center justify-center"
    style="width: 100%; height: 100%"
  >
    <forum-selected v-if="hasForumSelected" />
    <v-sheet
      v-else
      class="pa-4 rounded-xl"
      color="transparent"
      height="calc(100vh - 140px)"
      width="90%"
    >
      <div class="d-flex align-center justify-space-between">
        <span>
          BEM VINDO AO THOTH FORUM! <br>
          Participe, pergunte e aprenda sobre desenvolvimento. <br>
          Compartilhe a comunidade de alunos!
        </span>
        <div>
          <div class="mb-2 font-weight-light">
            <v-icon color="#52784F">
              mdi-account-multiple
            </v-icon>
            A melhor <b>-comunidade-</b>
          </div>
          <div class="mb-2 font-weight-light">
            <v-icon color="#52784F">
              mdi-message
            </v-icon>
            Qualquer um pode <b>-perguntar-</b>
          </div>
          <div class="mb-2 font-weight-light">
            <v-icon color="#52784F">
              mdi-forum
            </v-icon>
            Qualquer um pode <b>-responder-</b>
          </div>
        </div>
      </div>
      <div class="d-flex align-center justify-space-between mt-2">
        <span>
          Perguntas
        </span>
        <v-text-field
          v-model="searchText"
          append-icon="mdi-magnify"
          background-color="white"
          color="#52784F"
          dense
          hide-details
          label="Buscar"
          outlined
          style="max-width: 338px"
        />
      </div>
      <v-divider
        class="black my-2"
      />
      <v-sheet
        v-if="inProgress"
        class="scroller d-flex align-center justify-center"
        color="transparent"
        height="calc(100vh - 330px)"
      >
        <th-loader />
      </v-sheet>
      <v-sheet
        v-else
        class="scroller"
        color="transparent"
        max-height="calc(100vh - 330px)"
      >
        <div
          v-for="(question, index) in questionsFiltered"
          :key="index"
          class="pa-4 d-grid highlight-2"
          style="grid-template-columns: 80px 1fr 200px ; column-gap: 16px; border-bottom: 1px solid black; cursor: pointer; position: relative"
          @click="setForumSelected(question)"
        >
          <div class="d-flex flex-column align-center">
            {{ question.answers.length }}
            <div>Reposta(s)</div>
          </div>
          <div class="d-flex align-center justify-center text-uppercase font-weight-bold">
            {{ question.title }}
          </div>
          <div class="d-flex flex-column align-start justify-center">
            <div class="d-flex justify-space-between mb-2">
              <v-avatar
                class="text-caption white--text mr-4"
                color="#52784F"
                rounded
                size="24"
              >
                {{ getUserInitials(question.userName) }}
              </v-avatar>
              {{ question.userName }}
            </div>
            {{ getQuestionTime(question.date) }}
          </div>
        </div>
      </v-sheet>
      <v-btn
        bottom
        class="white--text"
        color="#768D87"
        fab
        fixed
        right
        small
        @click="showDialog = true"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-sheet>
    <forum-dialog v-model="showDialog" />
  </div>
</template>
<script lang="ts" src="./Forum.ts"></script>
