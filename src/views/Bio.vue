<template>
  <div :class="className">
    <ul class="word-list">
      <li
      class="word"
      v-for="(word, wordKey) in words"
      :key="wordKey"
      >{{ word }},</li>
    </ul>

    <div class="links__container">
      <a
        v-for="(link, linkKey) in links"
        :key="linkKey"
        class="link"
        :href="link.url"
        target="_none">
          <img class="link__img" :src="link.img">
          <p class="link__text">{{ link.text }}</p>
        </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Bio',

  data: () => ({
    className: 'bio',
    words: [
      'Developer',
      'Designer',
      'Editor',
      'Gamer',
      'Investor',
    ],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/aclarke211',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.seeklogo.net%2Fwp-content%2Fuploads%2F2015%2F09%2Fgithub-mark-logo-400x400.png&f=1&nofb=1',
      },
      {
        text: 'CodePen',
        url: 'https://codepen.io/aclarke211',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FAndroid_L%2FPNG%2F512%2FLogos%2Fcodepen-512.png&f=1&nofb=1',
        // img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fseeklogo.com%2Fimages%2FC%2Fcodepen-logo-FDEB3664F1-seeklogo.com.png&f=1&nofb=1',
      },
      {
        text: 'Linkedin',
        url: 'https://www.linkedin.com/in/aclarke211/',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogoeps.com%2Fwp-content%2Fuploads%2F2014%2F09%2F34405-linkedin-logo-icon-vector-icon-vector-eps.png&f=1&nofb=1',
      },
    ],
  }),
};
</script>

<style lang="scss">
@import '../css/base/mixins.scss';

.bio {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-bottom: 6rem;
  justify-content: space-around;

  @include desktop {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      margin-top: -3rem;
      padding-bottom: 0;
  }

  .word-list {
    padding: 0;
    margin: 0 0 1rem;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    transition: all .25s;

    .word {
      font-size: 3.5rem;
      text-decoration: none;
      list-style: none;
      margin: .25rem 1rem;
      padding: 0;
      transition: all .35s;
      animation: grow 20s;
      text-shadow: 1px 2px #363636;
      font-weight: 600;
      letter-spacing: -2px;

      @include desktop {
        font-size: 6rem;
      }
    }
  }

  .links__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    flex-wrap: wrap;
    transition: all .25s;

    .link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1rem;
      text-decoration: none;
      flex: 1;
      transition: all .25s;

      &:hover {
        margin-top: 1rem;
      }

      &:hover img {
        filter: invert(100);
         width: 4.35rem;
        height: 4.35rem;
      }

      &:hover .link__text {
          text-shadow: 3px 3px 3px #363636;
        }

      @include desktop {
        margin: 2rem;
      }

      &__img {
        width: 4rem;
        height: 4rem;
        transition: all .25s;
      }

      &__text {
        font-size: 1.5rem;
        color: white;
        margin: .5rem 0;
        padding: 0;
        text-shadow: 2px 2px 2px #363636;
        transition: all .25s;
      }
    }
  }
}

</style>
