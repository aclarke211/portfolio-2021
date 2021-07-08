<template>
  <div :class="className">
    <div id="nav">
      <router-link to="/">BIO</router-link>
      <router-link to="/dev">DEV</router-link>
      <!-- <router-link to="/sites">Sites</router-link> -->
    </div>
    <!-- <img class="badge" src="../assets/team-lead-sig.png" /> -->
    <p class="date">Alex Clarke 2021</p>
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
    background: linear-gradient(to bottom, #242323, #161515);

    #nav {
      margin: 0 1rem 2rem;
      height: 100%;

      a {
        font-weight: bold;
        color: #695555;
        font-size: 2rem;
        margin: 1rem;
        text-decoration: none;
        font-weight: 400;

        &.router-link-exact-active {
          background-image: linear-gradient(to bottom, #ebedf0, #97939c);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
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
      margin: 0;
      padding: 0;
    }
  }
</style>
