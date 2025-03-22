<script>
  import { onMount } from 'svelte'
  import { anchorLink } from '$lib/actions/anchorLink'

  // コンテンツ表示制御
  export let isContentsDisplay

  // 表示するアリの画像数
  const ants = Array(2).fill(null)

  /* ヒーローエリアのフェードアウト */
  let blur = 0,
      scale = 1,
      opacity = 1

  function fadeOutHero() {
    const scrollY = window.scrollY // 現在のスクロール量を取得
    const maxScroll = 700 // エフェクトが完全に消えるスクロール位置

    // エフェクト計算
    const scrollFactor = Math.min(scrollY / maxScroll, 1)

    blur = scrollFactor * 20 // blur: 0 → 20
    scale = 1 + scrollFactor * 0.5 // scale: 1 → 1.5
    opacity = 1 - scrollFactor // opacity: 1 → 0
  }

  onMount(() => {
    window.addEventListener('scroll', fadeOutHero)
    return () => window.removeEventListener('scroll', fadeOutHero)
  })
</script>

<style lang="scss">
  @use '../../../styles/includes/variables' as *;
  @use 'sass:color';

  .hero {
    background-color: $color-primary;
    overflow: hidden;
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    transform-origin: center center;
    transition: transform 0.1s linear, filter 0.1s linear, opacity 0.1s linear;
    visibility: hidden;
    height: 100svh;
    width: 100vw;

    &__inner {
      position: relative;
      height: 100%;
      width: 100%;
    }

    // タイトル
    &__title {
      animation: fadeIn .5s ease-out forwards;
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 5%;
      left: 5%;
      opacity: 0;
      visibility: hidden;
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
      opacity: 0;
      position: absolute;
      inset: 0;
      visibility: hidden;
      max-height: 480px;
      max-width: 480px;
      height: 55svh;
      width: 55svh;

      @include media('md') {
        max-height: 320px;
        max-width: 320px;
      }

      @include media('sm') {
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
      left: 60px;
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
        width: 80px;

        img {
          clip-path: inset(0 0 100% 0);
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
      }

      &__text {
        color: white;
        font-family: $font-caveat;
        font-size: 1.75rem;
        letter-spacing: .2rem;
        margin-left: -1.5rem;
        padding-bottom: 1rem;
        opacity: 0;
        visibility: hidden;
        width: 80px;
      }
    }

    &.show {
      opacity: 1;
      visibility: visible;

      .hero__title {
        animation: fadeIn .5s ease-out forwards;
      }

      .hero__main {
        opacity: 1;
        visibility: visible;
      }

      .scrollIcon {
        .scrollIcon__arrow img {
          animation: hero_scrollArrow .5s ease-out forwards;
          animation-delay: .5s;
        }

        .scrollIcon__text {
          animation: fadeIn .5s ease-out forwards;
          animation-delay: 1s;
        }
      }
    }
  }
</style>

<div
  id="pageTop"
  class="hero { isContentsDisplay ? 'show' : '' }"
  style="filter: blur({ blur }px); transform: scale({ scale }); opacity: { opacity };"
>
  <div class="hero__inner">
    <h1 class="hero__title">
      Sato’s<br>Portforio<br>Website
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
          <img src="/images/arrow.png" alt="">
        </div>
        <p class="scrollIcon__text">Scroll</p>
      </div>
    </div>
  </div>
</div>
