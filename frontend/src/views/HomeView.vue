<template>
  <div class="flex items-center h-screen w-full justify-center flex-col gap-10 font-sans">
    <h1 class="text-justify text-5xl font-bold">Weather API</h1>
    <FormWeather @update:city="updateCity" v-model:city="city" />
    <WeatherComponent
      v-show="!isError"
      :temperature="temp"
      :wind="wind"
      :rainfall="rainfall"
      :city-name="city"
    />
    <p class="text-red-500" v-show="isError">
      Вы превысили количество запросов в час, повторите попытку позже
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormWeather from '@/components/FormWeather.vue';
import WeatherComponent from '@/components/WeatherComponent.vue';

type ResponseWeather = {
  temp: number;
  wind: number;
  rainfall: number;
};

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      city: '',
      timerId: 0,
      temp: 0,
      wind: 0,
      rainfall: 0,
      isError: false,
    };
  },
  methods: {
    async fetchWeather() {
      if (this.city === '') return;
      try {
        const token = this.$store.state.accessToken;
        let headers = {
          'Content-Type': 'application/json',
        };
        if (token !== null) {
          headers = {
            // @ts-ignore
            Authorization: this.$store.state.accessToken,
            'Content-Type': 'application/json',
          };
        }
        const response: ResponseWeather = await fetch(`${location.origin}/api/weather`, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            city: this.city,
          }),
        }).then((result) => result.json());
        this.temp = response.temp;
        this.wind = response.wind;
        this.rainfall = response.rainfall;
      } catch (e) {
        this.isError = true;
      }
    },
    updateCity(cityName: string) {
      this.city = cityName;
      clearTimeout(this.timerId);
      this.timerId = setTimeout(this.fetchWeather, 1500);
    },
  },
  components: {
    FormWeather,
    WeatherComponent,
  },
});
</script>
