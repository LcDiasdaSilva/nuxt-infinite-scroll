
import type ItemVue from './Item.vue';

<style lang="scss" scoped>
.time-line {
  width: 100%;
  max-width: 600px;
  padding: 1rem;
}
</style>
<template>
  <div class="time-line">
    <ItemVue :item="item" v-for="item in items" :key="item.id" />
  </div>
</template>
<script setup >
const props = defineProps({
  items: {
    type: Array,
    require: true
  }
})
</script>