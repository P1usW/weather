<template>
  <NavBar />
  <router-view />
  <FooterComponent />
</template>

<script lang="ts">
import NavBar from './components/NavBar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: {
    FooterComponent,
    NavBar,
  },
};
</script>

<style scoped lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
