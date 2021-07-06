<template>
  <div :class="className">
    <h1>Tech</h1>
    <h2>Vue, React Native</h2>

    <h1>Libraries</h1>
    <h2>Nuxt.js, PM2, VuePress</h2>
  </div>
</template>

<script>
export default {
  name: 'Dev',

  data: () => ({
    className: 'dev',
  }),
};
</script>
