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

@import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400');

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #2f2a2a, #2c2929);
}

.router {
  animation: fadeIn 1.5s;
  overflow-y: auto;
  min-height: 75vh;
}

#app {
  font-family: 'Anonymous Pro', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  padding: 2rem;
}
</style>
