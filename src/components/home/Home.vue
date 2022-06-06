<template>
  <div
    class="d-grid"
    style="height: 100%; grid-template-columns: 0.75fr 1fr"
  >
    <div class="d-flex flex-column justify-space-between pa-16">
      <div style="height: 30%" />
      <div style="font-size: 64px !important;">
        THOTH CURSOS
      </div>
      <span style="font-size: 24px">Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores.</span>
      <div>
        <v-btn
          class="mr-4 white--text"
          color="#52784F"
          height="60"
          width="180"
          @click="navigationHandler"
        >
          Começar agora!
        </v-btn>
        Custo zero.
      </div>
    </div>
    <div class="d-flex align-center justify-center">
      <img
        height="100%"
        src="../../assets/landing.svg"
        style="position: absolute"
        width="100%"
      >
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts"></script>
