<template>
  <div :class="className">
    <ul class="word-list">
      <li
      class="word"
      v-for="(word, wordKey) in words"
      :key="wordKey"
      >{{ word }},</li>
    </ul>
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
  }),
};
</script>

<style lang="scss">
@import '../css/base/mixins.scss';

.bio {
  .word-list {
    padding: 0;
    margin: 0;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;

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
}

</style>
