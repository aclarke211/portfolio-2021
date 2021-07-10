<template>
  <div :class="className">
    <div id="nav">
      <router-link to="/">BIO</router-link>
      <router-link to="/dev">DEV</router-link>
      <!-- <router-link to="/sites">Sites</router-link> -->
    </div>
    <!-- <img class="badge" src="../assets/team-lead-sig.png" /> -->
    <p class="footer__info">
    <span class="author">Alex Clarke</span>
     |
    <span class="date">2021</span>
    </p>
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
    padding: 1rem;
    box-sizing: border-box;
    background: linear-gradient(to bottom, #242323, #161515);

    #nav {
      margin: .5rem 1rem 1.5rem;
      height: 100%;

      a {
        font-weight: bold;
        color: #695555;
        font-size: 2rem;
        margin: 1rem;
        text-decoration: none;

        &:hover {
          color: #9e9797;
        }

        &.router-link-exact-active {
          background-image: linear-gradient(to bottom, #ebedf0, #aaa8ad);
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

    .footer__info {
      .author {
        font-family: 'Jomhuria', 'sans-serif';
        letter-spacing: -.25px;
        font-size: 1.5rem;
      }

      .date {
        font-size: .95rem;
        margin: 0;
        padding: 0;
      }
    }

  }
</style>
