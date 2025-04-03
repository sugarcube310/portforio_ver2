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
    scale = 1 + scrollFactor * 0.75 // scale: 1 → 1.5
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
    height: 100vh;
    width: 100vw;

    &__inner {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      height: 100svh;
      width: 100%;
    }

    &__main {
      background-color: $color-white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin: auto;
      overflow: hidden;
      opacity: 0;
      position: relative;
      visibility: hidden;
      max-height: 500px;
      max-width: 500px;
      height: 70svh;
      width: 70svh;

      @include media('sm') {
        max-height: 320px;
        max-width: 320px;
      }

      // タイトル
      .title {
        animation: fadeIn 1s ease-out forwards;
        position: absolute;
        top: 30%;
        opacity: 0;
        visibility: hidden;
      }

      // アリ
      .antWrapper {
        animation: antMove 20s linear infinite;
        display: flex;
        margin-top: 2rem;
        pointer-events: none;
        height: fit-content;
        width: 150%;

        .ant {
          flex-shrink: 0;
          width: 100%;
        }
      }
    }

    &.show {
      opacity: 1;
      visibility: visible;

      .hero__title {
        animation: fadeIn .3s ease-out forwards;
      }

      .hero__main {
        opacity: 1;
        visibility: visible;
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
    <div class="hero__main">
      <h1 class="title">
        Sato’s Portforio Website
      </h1>
      <div class="antWrapper">
        {#each ants as _, i}
          <div class="ant">
            <img src="/images/ants.gif" alt="ants">
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
