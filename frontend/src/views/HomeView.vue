<template>
  <div class="flex items-center h-screen w-full justify-center">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld v-model:city="city" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      city: '',
    };
  },
  components: {
    HelloWorld,
  },
});
</script>
