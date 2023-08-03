<template>
  <div :class="className">
    <ul class="word-list">
      <li class="word" v-for="(word, wordKey) in words" :key="wordKey">
        {{ word }},
      </li>
    </ul>

    <div class="links__container">
      <a
        v-for="(link, linkKey) in links"
        :key="linkKey"
        class="link"
        :href="link.url"
        target="_none"
      >
        <img class="link__img" :src="link.img" />
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
    words: ['Developer', 'Designer', 'Editor', 'Gamer', 'Investor'],
    links: [
      {
        text: 'GitHub',
        url: 'https://github.com/aclarke211',
        img: '../assets/bio/github-logo.jpeg',
      },
      {
        text: 'CodePen',
        url: 'https://codepen.io/aclarke211',
        img: '../assets/bio/codepen-logo.jpeg',
      },
      {
        text: 'Linkedin',
        url: 'https://www.linkedin.com/in/aclarke211/',
        img: '../assets/bio/linkedin-logo.jpeg',
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
    transition: all 0.25s;

    .word {
      font-size: 3.5rem;
      text-decoration: none;
      list-style: none;
      margin: 0.25rem 1rem;
      padding: 0;
      transition: all 0.35s;
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
    transition: all 0.25s;

    .link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 1rem;
      text-decoration: none;
      flex: 1;
      transition: all 0.25s;

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
        transition: all 0.25s;
      }

      &__text {
        font-size: 1.5rem;
        color: white;
        margin: 0.5rem 0;
        padding: 0;
        text-shadow: 2px 2px 2px #363636;
        transition: all 0.25s;
      }
    }
  }
}
</style>
