<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: url('фоновое_видео.mp4') no-repeat center center fixed;
  background-size: cover;
  filter: blur(5px);
}
</style>
