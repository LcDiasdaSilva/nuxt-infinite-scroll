
<style lang="scss" scoped>
.item {
  width: 100%;
  padding: 1rem;
  position: relative;
  background: #333;
  margin-bottom: 1rem;
  border-radius: 10px;
  display: flex;
  word-break: break-word;

  &__content,
  &__image {
    padding: .5rem;
  }

  &__title {
    font-size: 1.3rem;
    margin-bottom: .3rem;
    font-weight: 600;
  }
}
</style>
<template>
  <div class="item">
    <div class="item__image">
      <img :src="item.picture.thumbnail" />
    </div>
    <div class="item__content">
      <div class="item__title">{{ item.name.first }}</div>
      <div> {{ item.email }}</div>
    </div>

  </div>
</template>
<script setup >
const props = defineProps({
  item: {
    type: Object,
    require: true
  }
})

</script>