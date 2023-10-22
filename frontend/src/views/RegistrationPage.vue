<template>
  <section class="w-full h-screen flex gap-6 flex-col justify-center items-center">
    <h2 class="text-center text-lg">Регистрация</h2>
    <form class="w-full flex gap-6 flex-col justify-center items-center" @submit.prevent="pushData">
      <input
        class="w-2/5 rounded border-2 border-solid"
        v-model="email"
        autocomplete="email"
        name="email"
        type="email"
        placeholder="Почта"
      />
      <input
        class="w-2/5 rounded border-2 border-solid"
        v-model="password"
        autocomplete="current-password"
        name="password"
        type="password"
        placeholder="Пароль"
      />
      <input class="w-24 rounded border-2 border-solid" value="Отправить" type="submit" />
    </form>
    <router-link class="underline" to="/login">Авторизация</router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RegistrationPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    pushData() {
      const body = JSON.stringify({
        email: this.email,
        password: this.password,
      });
      fetch(`${location.origin}/api/registration`, {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((result) => result.json())
        .then((result) => this.setAuth(result.accessToken))
        .then(() => this.$router.push('/'))
        .catch((e) => console.log(e));
    },
    setAuth(token: string) {
      this.$store.commit('login', token);
    },
  },
});
</script>
