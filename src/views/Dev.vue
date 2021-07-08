<template>
  <div :class="className">
    <section
      class="section"
      v-for="(section, sectionKey) in sections"
      :key="sectionKey">
        <h1 class="title">{{ section.title }}</h1>
        <h2 class="subtitle">{{ section.subtitle }}</h2>
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
        subtitle: 'Frameworks, Libraries and Tools:',
        items: [
          {
            name: 'Vue',
            img: 'https://i8.amplience.net/i/jpl/icon-vue-20b8b379d338f4488705cae27d4849d9',
            url: 'https://vuejs.org/',
          },
          {
            name: 'Node',
            img: 'https://i8.amplience.net/i/jpl/icon-node-js-84dae0c85887a8c7798e1a0df84fd34e',
            url: 'https://nodejs.org/',
          },
          {
            name: 'MongoDB',
            img: 'https://i8.amplience.net/i/jpl/mongodb-logo-8db9194e54f81a6ed4304eabe08639dd',
            url: 'https://www.mongodb.com/',
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
            name: 'Octopus',
            img: 'https://i8.amplience.net/i/jpl/icon-octopus-31312c77f0887333152eb24adcb463b5',
            url: 'https://octopus.com/',
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
            name: 'Axios',
            img: 'https://i8.amplience.net/i/jpl/axios-logo-59b90233bbde980a526ad590e27780a2',
            url: 'https://axios-http.com/',
          },
          {
            name: 'Jest',
            img: 'https://i8.amplience.net/i/jpl/jest-logo-2e732c3e8fd0b5b30b4dd0b5b4d274f5',
            url: 'https://jestjs.io/',
          },
          {
            name: 'React Native',
            img: 'https://i8.amplience.net/i/jpl/icon-react-native-36054f172d39435416095035adb7e304',
            url: 'https://reactnative.dev/',
          },
          {
            name: 'Three.js',
            img: 'https://i8.amplience.net/i/jpl/three-js-logo-c8c4b280b5d01b54a9155dc41e2b0371',
            url: 'https://threejs.org/',
          },
          {
            name: 'Sass',
            img: 'https://i8.amplience.net/i/jpl/icon-sass-71c79f464ca2cf8de7ad093e48d5cccd',
            url: 'https://sass-lang.com/',
          },
          {
            name: 'JIRA',
            img: 'https://i8.amplience.net/i/jpl/jira-logo-41377032cc34c0abd4beb89a30e0807e',
            url: 'https://www.atlassian.com/software/jira',
          },
          {
            name: 'NPM',
            img: 'https://i8.amplience.net/i/jpl/npm-logo-332d55d0e01866951bb34a1d7846da92',
            url: 'https://www.npmjs.com/',
          },
          {
            name: 'JavaScript',
            img: 'https://i8.amplience.net/i/jpl/icon-javascript-608be566b0e69846cb2001d867640bed',
            url: 'https://developer.mozilla.org/en-US/docs/Web/javascript',
          },
          {
            name: 'CSS',
            img: 'https://i8.amplience.net/i/jpl/icon-css-04cf122be0afe7542083d1a3967390ae',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            name: 'HTML5',
            img: 'https://i8.amplience.net/i/jpl/icon-html-7fa80d12263e1acbfc0af3c0e72f6085',
            url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
          },
        ],
      },
      {
        title: 'SITES',
        subtitle: 'Projects contributed towards:',
        items: [
          {
            name: 'JD Sports',
            img: 'https://i8.amplience.net/i/jpl/jd-600-black-081bf84ea8e2c71b637bf48541cd07d8',
            url: 'https://www.jdsports.co.uk/',
          },
          {
            name: 'Size?',
            img: 'https://www.size.co.uk/skins/size-desktop/public/img/logos/logo-large-en.png',
            url: 'https://www.size.co.uk/',
          },
          {
            name: 'Footpatrol',
            img: 'https://www.footpatrol.com/skins/footpatrolgb-desktop/public/img/logos/logo-large-en.png',
            url: 'https://www.footpatrol.com/',
          },
          {
            name: 'The Hip Store',
            img: 'https://www.thehipstore.co.uk/skins/hipstoregb-desktop/public/img/logos/logo.png',
            url: 'https://www.thehipstore.co.uk/',
          },
          {
            name: 'Tessuti',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vouchercloud.com%2Fimage%2Fupload%2Fw_200%2Cq_auto%2Cfl_strip_profile%2Cf_auto%2Ftessuti_logo_1.jpg&f=1&nofb=1',
            url: 'https://www.tessuti.co.uk/',
          },
          {
            name: 'Scotts Menswear',
            img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwl3-cdn.landsec.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fshop_logo%2Fpublic%2Fimages%2Fshops%2Flogos%2Fscotts-menswear_0.png%3Fitok%3Dq9ZLGUOv&f=1&nofb=1',
            url: 'https://www.scottsmenswear.com/',
          },
          {
            name: 'Aktiesport',
            img: 'https://www.aktiesport.nl/skins/aktiesport-desktop/public/img/logos/logo-large-nl.png',
            url: 'https://www.aktiesport.nl/',
          },
          {
            name: 'Perrysport',
            img: 'https://www.perrysport.nl/skins/perrysport-desktop/public/img/logos/logo-large-nl.png',
            url: 'https://www.perrysport.nl/',
          },
          {
            name: 'Supply & Demand',
            img: 'https://mesh-uploads-production.s3.amazonaws.com/mesh-uploads/undefined/2020/8/dfd8c79a-a321-4f10-bfa1-bbf70129084a_Mesh_Landing_Page_Icons_Supply_and_Demand.png',
            url: 'https://www.supplyanddemand.co.uk/',
          },
          {
            name: 'Choice Store',
            img: 'https://www.choicestore.com/skins/choicegb-desktop/public/img/logos/logo.svg',
            url: 'https://www.choicestore.com/',
          },
          {
            name: 'Scotland Football Shop',
            img: 'https://www.scotlandfootballshop.co.uk/skins/jdsfa-desktop/public/img/logos/logo.png',
            url: 'https://www.scotlandfootballshop.co.uk/',
          },
          {
            name: 'Wales Football Shop',
            img: 'https://www.walesfootballshop.co.uk/skins/jdwfa-desktop/public/img/logos/logo.png',
            url: 'https://www.walesfootballshop.co.uk/',
          },
          {
            name: 'NI Football Shop',
            img: 'https://www.northernirelandfootballshop.co.uk/skins/jdnifa-desktop/public/img/logos/logo.png',
            url: 'https://www.northernirelandfootballshop.co.uk/',
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
    padding: 0 0 8rem;
  }

  .section {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    max-width: 60rem;

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
    }

    .subtitle {
      font-size: 1.5rem;
      margin: 0 1rem 1rem;
      text-shadow: 1px 2px #363636;
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
        flex: 0 1 6rem;
        min-height: 8rem;
        transition: all .35s;

        &:hover {
          background: #d8d9dd;
        }

        &.inactive {
          color: red;
          opacity: .5;
        }

        &__img {
          width: 80px;
          height: auto;
          object-fit: contain;
          min-height: 3rem;
          display: block;
          border-radius: .15rem;

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
