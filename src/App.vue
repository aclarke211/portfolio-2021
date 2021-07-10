<template>
  <div id="app">
    <router-view class="router" />
    <FooterNav />
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav.vue';

export default {
  name: 'App',

  components: {
    FooterNav,
  },
};

</script>

<style lang="scss">
@import './css/base/mixins.scss';
@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400&family=Jomhuria');

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #3965dd, #6cdb7e, #9579e0, #69ceb5);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

#app {
  font-family: 'Anonymous Pro', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  padding: 1rem;
}

.router {
  animation: fadeIn 1s;
  overflow-y: auto;
  min-height: 95vh;
}
</style>
