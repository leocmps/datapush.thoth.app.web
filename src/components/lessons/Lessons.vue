<template>
  <div
    class="d-flex align-center justify-center"
    style="width: 100%; height: 100%"
  >
    <v-sheet
      class="pa-4 scroller rounded-xl"
      color="transparent"
      height="calc(100vh - 140px)"
      width="90%"
    >
      <div
        v-if="inProgress"
        class="d-flex align-center justify-center"
        style="height: 90%"
      >
        <th-loader />
      </div>
      <div v-else>
        <v-card
          v-for="(lesson, index) in lessons"
          :key="index"
          class="mb-4 d-flex justify-space-between align-center px-2"
          color="#768D87"
          height="145"
        >
          <v-sheet
            class="d-flex flex-column align-center justify-center"
            color="transparent"
            height="100%"
            width="140px"
          >
            <v-avatar
              class="white--text"
              color="#15161B"
              size="82"
              style="font-size: 32px"
            >
              {{ getInstructorInitials(lesson.instructorName) }}
            </v-avatar>
            <div class="white--text">
              {{ lesson.instructorName }}
            </div>
          </v-sheet>
          <v-sheet
            class="white--text d-flex align-center justify-center"
            color="transparent"
            height="100%"
            width="1000px"
          >
            {{ lesson.title }}
          </v-sheet>
          <v-sheet
            class="white--text pa-2 d-flex flex-column align-start justify-space-around"
            color="transparent"
            height="100%"
            style="font-size: 14px"
            width="140px"
          >
            <div class="font-weight-bold">
              Quando será?
            </div>
            <div>
              <v-icon
                color="white"
                size="14"
              >
                mdi-calendar
              </v-icon>
              {{ getLessonDate(lesson.date) }}
            </div>
            <div>
              <v-icon
                color="white"
                size="14"
              >
                mdi-alarm
              </v-icon>
              {{ getLessonHour(lesson.date) }}
            </div>
            <div>Duração: 2h</div>
            <v-btn
              color="#FDF7F2"
              width="100%"
              @click="accessLesson(lesson)"
            >
              Acessar
            </v-btn>
          </v-sheet>
        </v-card>
      </div>
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
    <lesson-dialog v-model="showDialog" />
  </div>
</template>
<script lang="ts" src="./Lessons.ts"></script>
