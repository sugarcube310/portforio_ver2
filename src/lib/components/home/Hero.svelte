<script>
  import { anchorLink } from '$lib/actions/anchorLink'

  // オープニングを表示したかどうかの値を取得
  export let openingPlayed

  // 表示するアリの画像数
  const ants = Array(2).fill(null)
</script>

<style lang="scss">
  @use '../../../styles/includes/variables' as *;
  @use 'sass:color';

  .hero {
    background-color: $color-primary;
    overflow: hidden;
    height: 100svh;
    width: 100%;

    &__inner {
      position: relative;
      height: 100%;
      width: 100%;
    }

    // タイトル
    &__title {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 5%;
      left: 5%;
      max-width: 240px;

      @include media('xl') {
        max-width: 320px;
      }

      @include media('md') {
        max-width: 240px;
      }

      @include media('sm') {
        max-width: 180px;
      }
    }

    // アリ
    &__main {
      background-color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      margin: auto;
      overflow: hidden;
      position: absolute;
      inset: 0;
      max-height: 480px;
      max-width: 480px;
      height: 55svh;
      width: 55svh;

      @include media('md') {
        top: 5%;
        max-height: 320px;
        max-width: 320px;
      }

      @include media('sm') {
        top: 10%;
        max-height: 280px;
        max-width: 280px;
      }

      .antWrapper {
        animation: hero_antMove 20s linear infinite;
        display: flex;
        margin: auto;
        pointer-events: none;
        position: absolute;
        inset: 0;
        height: fit-content;
        width: 200%;

        .ant {
          flex-shrink: 0;
          width: 100%;
        }
      }
    }

    // スクロールアイコン
    .scrollIcon {
      cursor: default;
      margin: 0 auto;
      position: absolute;
      bottom: 40px;
      left: 75px;
      right: 0;
      height: fit-content;
      width: fit-content;

      &__inner {
        display: flex;
        align-items: center;
      }

      &__arrow {
        overflow: hidden;
        position: relative;

        img {
          animation: hero_scrollArrow .3s ease-out forwards;
          animation-delay: 5s;
          clip-path: inset(0 0 100% 0);
          object-fit: cover;
          height: 100%;
          width: 100%;

          &.fast {
            animation-delay: 1s;
          }
        }
      }

      &__text {
        animation: fadeIn .3s ease-out forwards;
        animation-delay: 5.5s;
        margin-left: -1rem;
        opacity: 0;
        padding-bottom: 1rem;

        &.fast {
          animation-delay: 1.5s;
        }
      }
    }
  }
</style>

<div id="pageTop" class="hero">
  <div class="hero__inner">
    <h1 class="hero__title">
      <img src="/images/title.png" alt="Sato’s Portforio Website">
    </h1>
    <div class="hero__main">
      <div class="antWrapper">
        {#each ants as _, i}
          <div class="ant">
            <img src="/images/ants.gif" alt="ants">
          </div>
        {/each}
      </div>
    </div>
    <div class="scrollIcon">
      <div class="scrollIcon__inner">
        <div class="scrollIcon__arrow">
          <img src="/images/arrow.png" alt="" class="{ openingPlayed ? 'fast' : '' }">
        </div>
        <div class="scrollIcon__text { openingPlayed ? 'fast' : '' }">
          <img src="/images/scroll.png" alt="Scroll">
        </div>
      </div>
    </div>
  </div>
</div>
