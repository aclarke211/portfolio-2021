<template>
  <div :class="className">
    <section
      class="section"
      v-for="(section, sectionKey) in sections"
      :key="sectionKey">
        <h1 class="title">{{ section.title }}</h1>
        <div class="items__container">
          <a
          :class="['item', {'inactive': !item.url}]"
          v-for="(item, itemKey) in section.items"
          :key="itemKey"
          :href="item.url || false"
          target="_none">
            <img class="item__img" :src="item.img" />
            <p class="item__name">{{ item.name }}</p>
          </a>
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
            url: 'https://vuejs.org/',
          },
          {
            name: 'Node',
            img: 'https://i8.amplience.net/i/jpl/icon-node-js-84dae0c85887a8c7798e1a0df84fd34e',
            url: 'https://nodejs.org/',
          },
          {
            name: 'Docker',
            img: 'https://i8.amplience.net/i/jpl/icon-docker-84628b0fbe340cea11a1f5513f40b3ff',
            url: 'https://www.docker.com/',
          },
          {
            name: 'TeamCity',
            img: 'https://i8.amplience.net/i/jpl/icon-teamcity-a4b856ecfd687b05a2ad9fc45386823c',
            url: 'https://www.jetbrains.com/teamcity/',
          },
          {
            name: 'Octopus Deploy',
            img: 'https://i8.amplience.net/i/jpl/icon-octopus-31312c77f0887333152eb24adcb463b5',
            url: 'https://octopus.com/',
          },
          {
            name: 'React Native',
            img: 'https://i8.amplience.net/i/jpl/icon-react-native-36054f172d39435416095035adb7e304',
            url: 'https://reactnative.dev/',
          },
          {
            name: 'Storybook',
            img: 'https://i8.amplience.net/i/jpl/icon-storybook-321f0737ec998d67e457de699253f452',
            url: 'https://storybook.js.org/',
          },
          {
            name: 'VuePress',
            img: 'https://i8.amplience.net/i/jpl/icon-vuepress-d48f4587fb68c171d98db6653ffd927f',
            url: 'https://vuepress.vuejs.org/',
          },
          {
            name: 'Sass',
            img: 'https://i8.amplience.net/i/jpl/icon-sass-71c79f464ca2cf8de7ad093e48d5cccd',
            url: 'https://sass-lang.com/',
          },
          {
            name: 'ES6 JS',
            img: 'https://i8.amplience.net/i/jpl/icon-javascript-608be566b0e69846cb2001d867640bed',
            url: '',
          },
          {
            name: 'CSS3',
            img: 'https://i8.amplience.net/i/jpl/icon-css-04cf122be0afe7542083d1a3967390ae',
            url: '',
          },
          {
            name: 'HTML5',
            img: 'https://i8.amplience.net/i/jpl/icon-html-7fa80d12263e1acbfc0af3c0e72f6085',
            url: '',
          },
        ],
      },
      {
        title: 'SITES',
        items: [
          {
            name: 'JD Sports',
            img: 'https://www.jdsports.co.uk/skins/jdsports-desktop/public/img/logos/logo-large-en.png',
            url: 'https://www.jdsports.co.uk/',
          },
          {
            name: 'Tessuti',
            img: 'https://media-oneiotastore-com.s3.amazonaws.com/mesh-control/a10912a679674345bf8c02c441b579ba_tessutiLogo.png',
            url: 'https://www.tessuti.co.uk/',
          },
          {
            name: 'Size?',
            img: 'https://www.size.co.uk/skins/size-desktop/public/img/logos/logo-large-en.png',
            url: 'https://www.size.co.uk/',
          },
        ],
      },
    ],
  }),
};
</script>

<style lang="scss">
@import '../css/base/mixins.scss';

.dev {
  padding: 0 0 12rem;

  @include desktop {
    padding: 0 0 10rem;
  }

  .section {
    display: flex;
    flex-direction: column;
    margin: .5rem 0;

    &:first-child {
      margin: 0;
    }

    @include desktop {
      margin: 0;
    }

    .title {
      font-size: 2rem;
      margin: 1rem;
      text-shadow: 1px 2px #363636;

      @include desktop {
        margin: 1rem 0;
      }
    }

    .items__container {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;

      @include desktop {
        justify-content: flex-start;
      }

      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        margin: 1rem;
        text-decoration: none;
        padding: 1rem;
        background:#ebedf0;
        border-radius: .25rem;
        text-align: center;
        flex: 0 1 5rem;
        min-height: 8rem;

        &.inactive {
          color: red;
          opacity: .5;
        }

        &__img {
          width: 80px;
          height: auto;
          display: block;

          @include desktop {
            width: 60px;
          }
        }

        &__name {
          font-size: 1rem;
          font-weight: 600;
          color: #505050;
        }
      }
    }
  }
}
</style>
