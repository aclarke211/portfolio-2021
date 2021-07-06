<template>
  <div :class="className">
    <h1>{{ title }}</h1>
    <h2>Full Stack Dev</h2>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',

  props: {
    title: {
      type: String,
      default: 'Alex Clarke',
    },
  },

  data: () => ({
    className: 'hero-banner',
  }),
};
</script>

<style lang="scss">
  .hero-banner {
    width: 100%;
  }

</style>
