<template>
  <div :class="className">
    <div id="nav">
      <router-link to="/">BIO</router-link>
      <router-link to="/dev">DEV</router-link>
      <!-- <router-link to="/sites">Sites</router-link> -->
    </div>
    <img class="badge" src="../assets/team-lead-sig.png" />
    <p class="date">2021</p>
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
@import '../css/base/mixins.scss';

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
        font-size: 2.25rem;
        margin: 1rem;
        text-decoration: none;

        &.router-link-exact-active {
          color: white;
        }
      }
    }

    .badge {
      width: 12rem;
      height: auto;
      border-radius: .25rem;
    }

    .date {
      font-size: .75rem;
      margin: 1rem 0 0;
      padding: 0;
    }
  }
</style>
