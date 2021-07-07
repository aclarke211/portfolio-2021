<template>
  <div :class="className">
    <section
      class="section"
      v-for="(section, sectionKey) in sections"
      :key="sectionKey">
        <h1 class="title">{{ section.title }}</h1>
        <div class="items__container">
          <div
          class="item"
          v-for="(item, itemKey) in section.items"
          :key="itemKey">
            <img class="item__img" :src="item.img" />
            <p class="item__name">{{ item.name }}</p>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Dev',

  data: () => ({
    className: 'dev',
    sections: [
      {
        title: 'TECH',
        items: [
          {
            name: 'Vue.js',
            img: 'https://i8.amplience.net/i/jpl/icon-vue-20b8b379d338f4488705cae27d4849d9',
          },
          {
            name: 'Node',
            img: 'https://i8.amplience.net/i/jpl/icon-node-js-84dae0c85887a8c7798e1a0df84fd34e',
          },
          {
            name: 'React Native',
            img: 'https://i8.amplience.net/i/jpl/icon-react-native-36054f172d39435416095035adb7e304',
          },
          {
            name: 'ES6 JS',
            img: 'https://i8.amplience.net/i/jpl/icon-javascript-608be566b0e69846cb2001d867640bed',
          },
          {
            name: 'CSS3',
            img: 'https://i8.amplience.net/i/jpl/icon-css-04cf122be0afe7542083d1a3967390ae',
          },
          {
            name: 'HTML5',
            img: 'https://i8.amplience.net/i/jpl/icon-html-7fa80d12263e1acbfc0af3c0e72f6085',
          },
        ],
      },
      {
        title: 'DEPLOYMENT',
        items: [
          {
            name: 'Docker',
            img: 'https://i8.amplience.net/i/jpl/icon-docker-84628b0fbe340cea11a1f5513f40b3ff',
          },
          {
            name: 'TeamCity',
            img: 'https://i8.amplience.net/i/jpl/icon-teamcity-a4b856ecfd687b05a2ad9fc45386823c',
          },
          {
            name: 'Octopus Deploy',
            img: 'https://i8.amplience.net/i/jpl/icon-octopus-31312c77f0887333152eb24adcb463b5',
          },
        ],
      },
      {
        title: 'LIBRARIES',
        items: [
          {
            name: 'Storybook',
            img: 'https://i8.amplience.net/i/jpl/icon-storybook-321f0737ec998d67e457de699253f452',
          },
          {
            name: 'VuePress',
            img: 'https://i8.amplience.net/i/jpl/icon-vuepress-d48f4587fb68c171d98db6653ffd927f',
          },
          {
            name: 'Sass',
            img: 'https://i8.amplience.net/i/jpl/icon-sass-71c79f464ca2cf8de7ad093e48d5cccd',
          },
        ],
      },
    ],
  }),
};
</script>

<style lang="scss">
.dev {
  padding: 0 0 12rem;

  .section {
    display: flex;
    flex-direction: column;
    margin: .5rem 0;

    .title {
      font-size: 2rem
    }

    .items__container {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;

      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1.5rem;

        &__img {
          width: 80px;
          height: auto;
          display: block;
        }

        &__name {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
