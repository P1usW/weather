<template>
  <div class="w-full min-h-screen flex flex-col justify-center items-center gap-3">
    <h2 class="text-lg">Пользователь {{ email }}</h2>
    <button
      class="border-2 border-solid rounded bg-slate-500 hover:bg-slate-700"
      @click.prevent="logout"
    >
      Выйти
    </button>
    <p>История погоды</p>
    <div class="flex flex-wrap justify-center align-middle gap-4">
      <ul
        class="w-64 border-2 border-solid rounded list-none"
        v-for="weather in weatherHistory"
        :key="weather.wind + weather.temp + weather.rainfall + Math.random()"
      >
        <li class="m-2">Температура: {{ weather.temp }}</li>
        <li class="m-2">Ветер: {{ weather.wind }}</li>
        <li class="m-2">Осадки: {{ weather.rainfall }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type WeatherHistory = {
  city: string;
  temp: number;
  wind: number;
  rainfall: number;
};

type UserInfo = {
  email: string;
  weatherHistory: WeatherHistory[];
};

export default defineComponent({
  name: 'ProfileView',
  data(): UserInfo {
    return {
      email: '',
      weatherHistory: [],
    };
  },
  beforeCreate() {
    if (!this.$store.state.accessToken) this.$router.push('/login');
  },
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push('login');
    },
    async getUser() {
      const token = this.$store.state.accessToken;
      if (token)
        return await fetch(`${location.origin}/api/profile`, {
          headers: {
            Authorization: token,
          },
        });
    },
  },
  beforeMount() {
    this.getUser()
      .then((response) => response?.json())
      .then((result) => {
        if (typeof result !== 'undefined') {
          this.email = result.email;
          this.weatherHistory = result.weatherHistory;
        }
      })
      .catch((e) => console.log(e));
  },
});
</script>
