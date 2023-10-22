<template>
  <div class="w-1/2">
    <form class="w-full flex flex-col justify-center items-center mx-auto gap-6" @submit.prevent>
      <h2 class="text-lg text-center">Введите название города</h2>
      <input
        type="text"
        class="w-4/5 h-7 p-2 border-2 border-slate-950 border-solid rounded-lg"
        placeholder="Введите город"
        :value="city"
        @input="changeCity"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormWeather',
  props: {
    city: String,
  },
  emits: ['update:city'],
  methods: {
    changeCity(event: Event) {
      const el = event.target as HTMLInputElement;
      this.$emit('update:city', el.value);
    },
  },
});
</script>
