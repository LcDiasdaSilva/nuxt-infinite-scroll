
<style lang="scss" scoped>
.scroll-container {
  width: 100%;
  height: 100vh;
  background: #1d1d1d;
  display: flex;
  justify-content: center;
  overflow: auto;
}
</style>
<template>
  <div ref="scrollContainer" class="scroll-container">
    <TimeLine :items="users" />
  </div>
</template>
<script setup  >
import { ref } from "vue";

const scrollContainer = ref(null);
let users = ref([]);
const perPage = 20;

useInfiniteScroll(
  scrollContainer,
  async () => {
    const { data } = await useFetch(
      `https://randomuser.me/api/?page=${users.value.length / perPage + 1
      }&results=${perPage}&seed=abc`
    );
    users.value = [...users.value, ...data.value?.results];
  },
  { distance: 10 }
);
</script>