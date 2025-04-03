<script>
  import { onMount } from 'svelte'

  // オープニング表示制御
  let isOpeningDisplay = false

  // コンテンツ表示制御
  export let isContentsDisplay = false

  // 各アニメーションの再生制御
  let isFall = false, // 角砂糖_落下アニメーション
      isScaleOut = false, // 角砂糖_縮小アニメーション
      isReveal = false // 円形アニメーション

  // 各アニメーションにかかる時間を設定
  const delay = 500, // 最初のアニメーション開始までの遅延時間
        fallTime = 2200, // 角砂糖_落下アニメーション + テキスト表示完了時間
        scaleOutTime = 1000, // 角砂糖_縮小アニメーション
        revealTime = 1000 // 円形アニメーション

  // スクロール禁止
  function disableScroll(elm) {
    elm.classList.add('no-scroll')
  }

  // スクロール解除
  function enableScroll(elm) {
    elm.classList.remove('no-scroll')
  }

  onMount(() => {
    if (sessionStorage.getItem('openingPlayed')) { // すでにオープニングを再生済みならスキップ
      isContentsDisplay = true
      return

    } else {
      isOpeningDisplay = true

      // コンテンツのスクロール禁止
      const main = document.querySelector('main')
      disableScroll(main)

      setTimeout(() => {
        // 角砂糖_落下アニメーション開始
        isFall = true

        setTimeout(() => {
          // 角砂糖_縮小アニメーション開始
          isScaleOut = true

          setTimeout(() => {
            // 円形アニメーション開始
            isReveal = true

            setTimeout(() => {
              // ページの表示切り替え
              isOpeningDisplay = false // オープニング非表示
              isContentsDisplay = true // コンテンツ表示

              // オープニング再生済みフラグをsessionStorageに登録
              sessionStorage.setItem('openingPlayed', 'true')

            }, revealTime)

            // コンテンツのスクロール解除
            enableScroll(main)

          }, scaleOutTime)

        }, fallTime)

      }, delay)
    }
  })
</script>

<style lang="scss">
  @use '../../../styles/includes/variables' as *;

  .opening {
    background-color: $color-primary;
    visibility: hidden;
    overflow: hidden;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    height: 100svh;
    width: 100vw;
    z-index: 1000;

    &.show {
      visibility: visible;
    }

    &__content {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;

      // 砂糖
      .sugarWrapper {
        .sugar {
          transform: translateY(-100svh) rotate(90deg);
          transition: transform 1.5s cubic-bezier(.2, 1, .3, 1);
          height: 100px;
          width: 100px;

          @include media('md') {
            height: 90px;
            width: 90px;
          }

          @include media('sm') {
            height: 80px;
            width: 80px;
          }

          img {
            object-fit: contain;
            height: 100%;
          }
        }

        &.fall {
          .sugar {
            transform: translateY(0) rotate(0deg);
          }
        }

        &.hide {
          animation: scaleOut 1s forwards;
        }
      }

      // あいさつ
      .greeting {
        color: $color-white;
        display: flex;
        align-items: center;
        font-family: $font-lexend;
        font-size: 1.2rem;
        letter-spacing: .225rem;
        margin-top: 0.65rem;
        opacity: 1;
        transition: opacity 1s;

        &.hide {
          opacity: 0;
        }

        &__text {
          animation: fadeInUp .3s forwards;
          animation-delay: 1.5s;
          color: $color-white;
          opacity: 0;
          transform: translateY(10px);

          &:last-of-type {
            padding-left: 0.1rem;
          }
        }
      }
    }

    // ページ遷移用の円形マスク
    &__pageTransition {
      background-color: $color-white;
      clip-path: circle(0% at center);
      margin: auto;
      position: absolute;
      inset: 0;
      transition: clip-path 1s;
      height: 100%;
      width: 100%;

      &.reveal {
        clip-path: circle(calc(min(250px, 50svh, 50svh)) at center);

        @include media('sm') {
          clip-path: circle(calc(min(160px, 50svh, 50svh)) at center);
        }
      }
    }
  }
</style>

<div class="opening { isOpeningDisplay ? 'show' : '' }">
  <div class="opening__content">
    <div class="sugarWrapper { isFall ? 'fall' : '' } { isScaleOut ? 'hide' : '' }">
      <div class="sugar">
        <img src="/images/sugar.png" alt="" />
      </div>
    </div>
    <div class="greeting { isScaleOut ? 'hide' : '' }">
      <span class="greeting__text d-inBlock">W</span>
      <span class="greeting__text d-inBlock" style="animation-delay: 1.6s;">e</span>
      <span class="greeting__text d-inBlock" style="animation-delay: 1.7s;">l</span>
      <span class="greeting__text d-inBlock" style="animation-delay: 1.8s;">c</span>
      <span class="greeting__text d-inBlock" style="animation-delay: 1.9s;">o</span>
      <span class="greeting__text d-inBlock" style="animation-delay: 2s;">m</span>
      <span class="greeting__text d-inBlock" style="animation-delay: 2.1s;">e</span>
      <span class="greeting__text d-inBlock" style="animation-delay: 2.2s;">!</span>
    </div>
  </div>
  <div class="opening__pageTransition { isReveal ? 'reveal' : '' }"></div>
</div>
