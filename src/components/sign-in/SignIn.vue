<template>
  <div
    class="d-flex align-center justify-center"
    style="width: 100%; height: 100%"
  >
    <v-sheet
      class="sign-grid rounded-xl"
      height="calc(100vh - 200px)"
      style="overflow: hidden"
      width="1200"
    >
      <v-sheet
        class="
          text-h5
          font-weight-bold
          white--text
          d-flex
          align-center
          justify-center
        "
        color="#332F4B"
      >
        <div style="max-width: 300px">
          A plataforma para você aprender com experts, dominar as principais
          tecnologias e entrar mais rápido nas empresas mais desejadas.
        </div>
      </v-sheet>
      <v-divider vertical />
      <v-sheet
        class="d-flex align-center justify-center"
        color="#EBEEFF"
        style="transform: translate(0)"
      >
        <v-form
          ref="form"
          v-model="form"
          class="d-flex flex-column align-center justify-center"
        >
          <img
            class="mb-2"
            src="../../assets/logo.png"
            width="64"
          >
          <h1 class="mb-5">
            Bem-vindo de volta!
          </h1>
          <v-text-field
            v-model="email"
            append-icon="mdi-at"
            background-color="white"
            class="mb-4"
            dense
            hide-details
            label="Email"
            outlined
            :rules="[rules.required, rules.email]"
            style="width: 338px"
          />
          <v-text-field
            v-model="password"
            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            background-color="white"
            dense
            hide-details
            label="Senha"
            outlined
            :rules="[rules.required]"
            style="width: 338px"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            @keyup.enter="authenticate"
          />
          <div
            class="d-flex justify-space-between align-center"
            style="width: 100%"
          >
            <v-checkbox
              class="mt-4"
              label="Lembrar"
            />
            <v-btn
              :disabled="!form || inProgress"
              :loading="inProgress"
              width="120"
              @click="authenticate"
            >
              Entrar
            </v-btn>
          </div>
        </v-form>
        <div class="bottom-left">
          Novo por aqui? <a @click="$router.push({ name: 'SignUp' }).catch(() => {})">Criar uma conta.</a>
        </div>
      </v-sheet>
    </v-sheet>
  </div>
</template>
<script lang="ts" src="./SignIn.ts"></script>
<style lang="scss" scoped>
.sign-grid {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
}

.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}
</style>
