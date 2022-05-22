<template>
  <div
    class="d-flex align-center justify-center"
    style="width: 100%; height: 100%"
  >
    <forum-selected v-if="hasForumSelected" />
    <v-sheet
      v-else
      class="pa-4 white--text rounded-xl"
      color="#15161B"
      height="calc(100vh - 140px)"
      style="transform: translate(0)"
      width="1200"
    >
      <div class="d-flex align-center justify-space-between">
        <span>
          BEM VINDO AO THOTH FORUM! <br>
          Participe, pergunte e aprenda sobre desenvolvimento. <br>
          Compartilhe a comunidade de alunos!
        </span>
        <div>
          <div class="mb-2 font-weight-light">
            <v-icon color="white">
              mdi-account-multiple
            </v-icon>
            A melhor <b>-comunidade-</b>
          </div>
          <div class="mb-2 font-weight-light">
            <v-icon color="white">
              mdi-message
            </v-icon>
            Qualquer um pode <b>-perguntar-</b>
          </div>
          <div class="mb-2 font-weight-light">
            <v-icon color="white">
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
          dense
          hide-details
          label="Buscar"
          outlined
          style="max-width: 338px"
        />
      </div>
      <v-divider
        class="my-2"
        dark
      />
      <v-sheet
        v-if="inProgress"
        class="white--text scroller d-flex align-center justify-center"
        color="transparent"
        height="calc(100vh - 330px)"
      >
        <th-loader />
      </v-sheet>
      <v-sheet
        v-else
        class="white--text scroller"
        color="transparent"
        max-height="calc(100vh - 330px)"
      >
        <div
          v-for="(question, index) in questionsFiltered"
          :key="index"
          class="pa-4 d-grid highlight-2"
          style="grid-template-columns: 80px 1fr 180px ; column-gap: 16px; border-bottom: 1px solid white; cursor: pointer; position: relative"
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
            <div class="d-flex justify-space-between">
              <v-avatar
                class="text-caption black--text mr-4"
                color="white"
                rounded
                size="24"
              >
                {{ getUserInitials(question.userName) }}
              </v-avatar>
              {{ question.userName }}
            </div>
          </div>
        </div>
      </v-sheet>
      <v-btn
        bottom
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
