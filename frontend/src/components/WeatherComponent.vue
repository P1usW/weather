<template>
  <section class="w-2/5">
    <h2>Информация о {{ cityName }}</h2>
    <ul class="list-none">
      <li class="mt-2">Температура: {{ temperature }}</li>
      <li class="mt-2">Ветер: {{ wind }}</li>
      <li class="mt-2">Осадки: {{ rainfall }}</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'WeatherComponent',
});
</script>

<script setup lang="ts">
import { defineProps } from 'vue';

export interface WeatherProps {
  cityName: string;
  temperature?: number;
  wind?: number;
  rainfall?: number;
}

defineProps<WeatherProps>();
</script>
