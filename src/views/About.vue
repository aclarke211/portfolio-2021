<template>
  <div :class="className">
    <h1 class="title">Alex Clarke</h1>
    <h3>Developer, Designer, Editor, Gamer, Retail Investor</h3>
  </div>
</template>

<script>

export default {
  name: 'About',

  data: () => ({
    className: 'about',
  }),
};
</script>
