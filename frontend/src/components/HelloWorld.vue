<template>
  <div class="hello">
    <form>
      <input
        type="text"
        class="w-28 h-6 border-2 border-slate-950 border-solid"
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
  name: 'HelloWorld',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  width: max-content;
}
</style>
