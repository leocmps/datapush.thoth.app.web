<template>
  <div class="ma-16">
    <div
      class="white--text px-10 d-grid text-h6 mb-4"
      style="grid-template-columns: 400px 1fr; column-gap: 16px"
    >
      <div>Segmentos</div>
      <div class="d-flex align-center justify-space-between">
        Cursos
        <v-text-field
          append-icon="mdi-magnify"
          background-color="white"
          dense
          hide-details
          label="Pesquisar"
          outlined
          style="max-width: 338px"
          type="password"
        />
      </div>
    </div>
    <div
      class="d-grid white--text px-10"
      style="grid-template-columns: 400px 1fr; column-gap: 16px"
    >
      <div>
        <div
          v-for="(segment, index) in segments"
          :key="index"
          class="d-flex align-center mb-4 pa-2 highlight-2 rounded-lg"
          style="position: relative; overflow: hidden !important; cursor: pointer"
        >
          <div
            class="dot mr-2"
            :style="`background: ${segment.color}`"
          />
          {{ segment.name }}
        </div>
      </div>
      <div
        class="d-grid"
        style="grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(auto-fill, 300px); column-gap: 16px; row-gap: 16px"
      >
        <v-card
          v-for="(course, index) in courses"
          :key="index"
          class="white--text"
          color="#3B4651"
          height="300"
          style="transform: translate(0)"
        >
          <v-card-title>{{ course.name }}</v-card-title>
          <v-card-subtitle class="white--text">
            {{ course.description }}
          </v-card-subtitle>
          <v-footer
            class="px-2 white--text"
            color="transparent"
            fixed
          >
            {{ getCourseTime(course) }}
            <v-icon
              class="ml-1"
              color="white"
              size="16"
            >
              mdi-clock
            </v-icon>
            <v-btn
              :color="course.segmentColor"
              width="100%"
            >
              Começar agora
            </v-btn>
          </v-footer>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./Courses.ts"></script>
<style lang="scss">
.dot {
  height: 20px;
  width: 20px;
  border-radius: 50%;
}
</style>
