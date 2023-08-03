<template>
  <div :className="className">
     <div
      class="icon-item"
      v-for="(icon, iconKey) in icons"
      :key="iconKey"
     >
      Icon Item
     </div>
  </div>
</template>

<script>
export default {
  name: 'IconsList',

  props: {
    icons: {
      type: Array,
      default: () => ([]),
    },
  },

  data: () => ({
    className: 'icons-list',
  }),
};
</script>

<style lang="scss">
  .icons-list {
    border: 2px solid red;
  }

  .tech {
  background: #eaeaea;
  border: 5px solid grey;
  color: #2c3e50;
  font-size: 1rem;
  padding: 5.5rem 2rem 2rem;
  position: relative;
  margin: 2rem 0;
}

.tech::before {
  position: absolute;
  left: 2rem;
  top: 1.5rem;
}

.tech__title, .tech h4 {
  font-weight: 600;
  font-size: 1.25rem;
  left: 5.5rem;
  position: absolute;
  top: .5rem;
}

.tech__description, .tech p {
  padding: 0;
  margin: 0;
  font-size: 1rem;
}

.tech.android {
  border-color: #95BD33;
}

.tech.android::before {
  content: url(https://i8.amplience.net/i/jpl/icon-android-53fcf2cd1cab151ed69e36d9e9f597db/?qlt=80&w=45);
}

.tech.ios {
  border-color: #282828;
}

.tech.ios::before {
  content: url(https://i8.amplience.net/i/jpl/icon-ios-79982795bdbe06fac71cb5509195d595/?qlt=80&w=45);
}

.tech.windows {
  border-color: #1BB1ED;
}

.tech.windows::before {
  content: url(https://i8.amplience.net/i/jpl/icon-windows-16b40aae0c7e134512220707dc00fab9/?qlt=80&w=45);
}

.tech.macos {
  border-color: #666666;
}

.tech.macos::before {
  content: url(https://i8.amplience.net/i/jpl/icon-macos-9bd889498124263555d8eb3f2c8db573/?qlt=80&w=45);
}

.tech.linux {
  border-color: #544e6d;
}

.tech.linux::before {
  content: url(https://i8.amplience.net/i/jpl/icon-linux-aeca2949585248fc1c953a9abd420c2e/?qlt=80&w=45);
}

.tech.internet-explorer {
  border-color: #01A2F1;
}

.tech.internet-explorer::before {
  content: url(https://i8.amplience.net/i/jpl/icon-internet-explorer-ace65f93e1339f6fcd425af729b59aa9/?qlt=80&w=45);
}

.tech.chrome {
  border-color: #1290D2;
}

.tech.chrome::before {
  content: url(https://i8.amplience.net/i/jpl/icon-chrome-6b70ab2c404219801afaf09b6637b3e3/?qlt=80&w=45);
}

.tech.firefox {
  border-color: #EB7015;
}

.tech.firefox::before {
  content: url(https://i8.amplience.net/i/jpl/icon-firefox-44d5eca7100a7f710250d8b9e9eeab02/?qlt=80&w=45);
}

.tech.safari {
  border-color: #1290D2;
}

.tech.safari::before {
  content: url(https://i8.amplience.net/i/jpl/icon-safari-ad743077226b95bea0cbf4eb69487d89/?qlt=80&w=45);
}

.tech.opera {
  border-color: #E21517;
}

.tech.opera::before {
  content: url(https://i8.amplience.net/i/jpl/icon-opera-052f608a533ee0d5abe8f9e6b6151bb3/?qlt=80&w=45);
}

.tech.nodejs {
  border-color: #6BC24A;
}

.tech.nodejs::before {
  content: url(https://i8.amplience.net/i/jpl/icon-node-js-84dae0c85887a8c7798e1a0df84fd34e/?qlt=80&w=45);
}

.tech.docker {
  border-color: #0091E2;
}

.tech.docker::before {
  content: url(https://i8.amplience.net/i/jpl/icon-docker-84628b0fbe340cea11a1f5513f40b3ff/?qlt=80&w=45);
}

.tech.vue {
  border-color: #3FB983;
}

.tech.vue::before {
  content: url(https://i8.amplience.net/i/jpl/icon-vue-20b8b379d338f4488705cae27d4849d9/?qlt=80&w=45);
}

.tech.react {
  border-color: #222222;
}

.tech.react::before {
  content: url(https://i8.amplience.net/i/jpl/icon-react-d588ea23a7c89233e73826a102c63e79/?qlt=80&w=45);
}

.tech.react-native {
  border-color: #62DAFB;
}

.tech.react-native::before {
  content: url(https://i8.amplience.net/i/jpl/icon-react-native-36054f172d39435416095035adb7e304/?qlt=80&w=45);
}

.tech.teamcity {
  border-color: #7991FE;
}

.tech.teamcity::before {
  content: url(https://i8.amplience.net/i/jpl/icon-teamcity-a4b856ecfd687b05a2ad9fc45386823c/?qlt=80&w=45);
}

.tech.octopus {
  border-color: #3093E0;
}

.tech.octopus::before {
  content: url(https://i8.amplience.net/i/jpl/icon-octopus-31312c77f0887333152eb24adcb463b5/?qlt=80&w=45);
}

.tech.javascript {
  border-color: #EFDC4F;
}

.tech.javascript::before {
  content: url(https://i8.amplience.net/i/jpl/icon-javascript-608be566b0e69846cb2001d867640bed/?qlt=80&w=45);
}

.tech.slack {
  border-color: #ECB22E;
}

.tech.slack::before {
  content: url(https://i8.amplience.net/i/jpl/icon-slack-f885a1b427891c867429190cd5dd971d/?qlt=80&w=45);
}

.tech.css {
  border-color: #369BD6;
}

.tech.css::before {
  content: url(https://i8.amplience.net/i/jpl/icon-css-04cf122be0afe7542083d1a3967390ae/?qlt=80&w=45);
}

.tech.sass {
  border-color: #E88DB7;
}

.tech.sass::before {
  content: url(https://i8.amplience.net/i/jpl/icon-sass-71c79f464ca2cf8de7ad093e48d5cccd/?qlt=80&w=45);
}

.tech.html {
  border-color: #F16629;
}

.tech.html::before {
  content: url(https://i8.amplience.net/i/jpl/icon-html-7fa80d12263e1acbfc0af3c0e72f6085/?qlt=80&w=45);
}

.tech.php {
  border-color: #8892BD;
}

.tech.php::before {
  content: url(https://i8.amplience.net/i/jpl/icon-php-a94646c4f1e247a7b5e9de04ca504d5c/?qlt=80&w=45);
}

.tech.angular {
  border-color: #B62E31;
}

.tech.angular::before {
  content: url(https://i8.amplience.net/i/jpl/icon-angular-d720dd94dc00565610652fe1fcb39ae3/?qlt=80&w=45);
}

.tech.dotnet {
  border-color: #6d429c;
}

.tech.dotnet::before {
  content: url(https://i8.amplience.net/i/jpl/icon-dotnet-ee813dc83b6a2e3e8974c99db2fce1be/?qlt=80&w=45);
}

.tech.storybook {
  border-color: #FF4684;
}

.tech.storybook::before {
  content: url(https://i8.amplience.net/i/jpl/icon-storybook-321f0737ec998d67e457de699253f452/?qlt=80&w=45);
}

.tech.python {
  border-color: #2C2C2B;
}

.tech.python::before {
  content: url(https://i8.amplience.net/i/jpl/icon-python-826ecc0aeca6b13d5120408efbb8198c/?qlt=80&w=45);
}

.tech.vuepress {
  border-color: #5F6686;
}

.tech.vuepress::before {
  content: url(https://i8.amplience.net/i/jpl/icon-vuepress-d48f4587fb68c171d98db6653ffd927f/?qlt=80&w=45);
}

.tech.word {
  border-color: #2B5795;
}

.tech.word::before {
  content: url(https://i8.amplience.net/i/jpl/icon-word-234184a6ac43ed0ba14b481dd7333851/?qlt=80&w=45);
}

.tech.c-sharp {
  border-color: #69237A;
}ß

.tech.c-sharp::before {
  content: url(https://i8.amplience.net/i/jpl/icon-c-sharp-3ca3b3f3735b42f15cde9720b19f3791/?qlt=80&w=45);
}
</style>
