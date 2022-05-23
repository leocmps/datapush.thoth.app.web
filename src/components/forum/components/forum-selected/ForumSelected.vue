<template>
  <v-sheet
    class="pa-4 white--text rounded-xl"
    color="#15161B"
    height="calc(100vh - 140px)"
    width="1200"
  >
    <div
      v-if="inProgress"
      class="d-flex flex-column align-center justify-center"
      style="height: 100%"
    >
      <th-loader />
    </div>
    <div v-else>
      <div class="d-flex align-center">
        <div class="text-h5">
          <v-btn
            class="mb-1"
            icon
            small
            @click="backToForum"
          >
            <v-icon color="white">
              mdi-arrow-left-circle
            </v-icon>
          </v-btn>
          {{ currentQuestion.title }}
        </div>
        <v-spacer />
        por: {{ currentQuestion.userName }}
      </div>
      <v-divider
        class="my-2"
        dark
      />
      <div class="mt-5">
        {{ currentQuestion.message }}
      </div>
      <div class="my-2">
        <v-btn
          class="mr-2"
          fab
          icon
          small
          @click="shareContent"
        >
          <v-icon
            v-if="succesIconShare"
            color="green"
          >
            mdi-checkbox-marked-circle
          </v-icon>
          <v-icon
            v-else
            color="white"
          >
            mdi-share-variant
          </v-icon>
        </v-btn>
        <v-btn
          fab
          icon
          small
        >
          <v-icon color="white">
            mdi-pencil
          </v-icon>
        </v-btn>
      </div>
      <v-divider
        class="my-2"
        dark
      />
      <v-sheet
        class="scroller white--text"
        color="transparent"
        height="calc(100vh - 450px)"
      >
        <v-sheet
          v-for="(answers, index) in currentQuestion.answers"
          :key="index"
          class="py-4 d-flex align-center white--text"
          color="transparent"
          style="border-bottom: 1px solid white !important"
        >
          <div
            class="d-flex align-center text-caption"
            style="width: 200px"
          >
            <v-avatar
              class="text-caption black--text mx-2"
              color="white"
              rounded
              size="24"
            >
              UA
            </v-avatar>
            Usuário Anônimo <br>
            {{ getAnswerTime(answer.date) }}
          </div>
          <v-divider
            class="mx-2"
            dark
            vertical
          />
          <div
            class="pa-2"
            style="height: 100%; width: 100%"
          >
            {{ answers.message }}
          </div>
        </v-sheet>
      </v-sheet>
      <div class="d-flex">
        <v-textarea
          v-model="answer"
          background-color="white"
          class="mr-4"
          dense
          height="80"
          hide-details
          outlined
          placeholder="Digite aqui sua resposta"
        />
        <v-btn
          dark
          :disabled="postAnswerInProgress || !answer"
          height="80"
          icon
          :loading="postAnswerInProgress"
          @click="postAnswer"
        >
          <v-icon color="white">
            mdi-send
          </v-icon>
        </v-btn>
      </div>
    </div>
  </v-sheet>
</template>
<script lang="ts" src="./ForumSelected.ts"></script>
<style lang="scss">
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
