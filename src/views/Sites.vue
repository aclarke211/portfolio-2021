<template>
  <div :class="className">
    <h1>Sites</h1>
    <h3>Contributed towards the following websites:</h3>
  </div>
</template>

<script>
export default {
  name: 'Sites',

  data: () => ({
    className: 'sites',
  }),
};
</script>
