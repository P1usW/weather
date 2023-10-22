<template lang="">
  <header class="w-full h-12 sticky top-0 left-0">
    <nav
      class="flex justify-center items-center gap-6 h-full backdrop-blur bg-opacity-80 bg-white border-b-2 border-gray-400"
    >
      <router-link class="text-gray-700 hover:text-cyan-700" to="/">Home</router-link> |
      <router-link class="text-gray-700 hover:text-cyan-700" to="/profile">Profile</router-link>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.router-link-active {
  color: rgb(14, 116, 144);
}
</style>
