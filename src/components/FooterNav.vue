<template>
  <div :class="className">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <img class="badge" src="../assets/team-lead-sig.png" />
  </div>
</template>

<script>
export default {
  name: 'FooterComp',

  data: () => ({
    className: 'footer-comp',
  }),
};
</script>

<style lang="scss">
  .footer-comp {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    box-sizing: border-box;

    #nav {
      margin: 1rem 1rem 3rem;
      height: 100%;

      a {
        font-weight: bold;
        color: grey;
        font-size: 1.5rem;
        margin: 1rem;
        text-decoration: none;

        &.router-link-exact-active {
          color: white;
        }
      }
    }

    .badge {
      width: 14rem;
      height: auto;
    }
  }
</style>
