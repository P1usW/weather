<template>
  <section class="w-full h-screen flex justify-center items-center gap-8 flex-col">
    <h2 class="text-center text-lg">404 Страница не найдена</h2>
    <router-link class="text-gray-700 hover:text-cyan-700" to="/">Вернуться на главную</router-link>
  </section>
</template>

<script lang="ts">
export default {
  name: 'NotFound',
};
</script>
