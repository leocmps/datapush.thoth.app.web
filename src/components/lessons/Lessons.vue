<template>
  <div
    class="d-flex align-center justify-center"
    style="width: 100%; height: 100%"
  >
    <v-sheet
      class="pa-4 scroller rounded-xl"
      color="#15161B"
      height="calc(100vh - 140px)"
      width="1200"
    >
      <div class="white--text d-flex align-center justify-space-between mb-4">
        AULAS
        <v-btn
          fab
          rounded
          x-small
          @click="showDialog = true"
        >
          <v-icon size="24">
            mdi-plus
          </v-icon>
        </v-btn>
      </div>
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
          class="mb-4 d-flex"
          color="#3B4651"
          height="145"
        >
          <v-sheet
            class="d-flex flex-column align-center justify-center"
            color="transparent"
            height="100%"
            width="140px"
          >
            <v-avatar
              class="text-h4 white--text"
              color="#15161B"
              size="82"
            >
              {{ getInstructorInitials(lesson.instructorName) }}
            </v-avatar>
            <div class="white--text">
              {{ lesson.instructorName }}
            </div>
            <div>
              <v-icon
                v-for="(rating, ratingIndex) in [1,2,3,4,5]"
                :key="ratingIndex"
                color="yellow"
              >
                mdi-star
              </v-icon>
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
            class="white--text text-body-2 pa-2 d-flex flex-column align-start justify-space-around"
            color="transparent"
            height="100%"
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
              small
              width="124"
              @click="accessLesson(lesson)"
            >
              Acessar
            </v-btn>
          </v-sheet>
        </v-card>
      </div>
    </v-sheet>
    <lesson-dialog v-model="showDialog" />
  </div>
</template>
<script lang="ts" src="./Lessons.ts"></script>
