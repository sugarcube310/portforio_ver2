<script>
  import { onMount } from 'svelte'

  // オープニング再生制御
  let isOpeningPlayed = false

  // アニメーション開始制御
  let isFalling = false, // 落下
      isScaling = false, // スケール
      isRevealing = false // ページ表示

  // アニメーション時間
  const fallingTime = 1000, // 落下
        scalingTime = 1000, // スケール
        revealingTime = 500 // ページ表示

  // ページの表示制御
  export let isShowPage = false

  onMount(() => {
    if (sessionStorage.getItem('openingPlayed')) { // すでにオープニングを再生済みならスキップ
      isShowPage = true
      return

    } else { // オープニングを再生
      isOpeningPlayed = true

      /* 砂糖_落下 */
      isFalling = true

      /* 砂糖_スケールアウト */
      setTimeout(() => {
        isScaling = true

        /* ページ表示アニメーション */
        setTimeout(() => {
          isRevealing = true

          /* ページ表示切り替え */
          setTimeout(() => {
            isShowPage = true // ページ表示
            isOpeningPlayed = false // オープニング非表示
            sessionStorage.setItem('openingPlayed', 'true') // オープニング再生済みフラグをセット
          }, revealingTime)

        }, scalingTime)

      }, fallingTime)
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
    height: 100vh;
    width: 100vw;
    z-index: 1000;

    &.show {
      visibility: visible;
    }

    // 砂糖
    .sugarWrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;

      .sugar {
        transform: translateY(-100vh) rotate(-60deg);
        transition: transform 1s cubic-bezier(.2, 1, .3, 1);
        height: 120px;
        width: 120px;

        img {
          object-fit: contain;
          height: 100%;
        }
      }

      &.fall .sugar {
        transform: translateY(0) rotate(0deg);
      }

      &.scale {
        animation: scale .5s forwards;
      }
    }

    // ページ遷移用の円形マスク
    .pageTransition {
      background-color: white;
      clip-path: circle(0% at center);
      position: absolute;
      top: 0;
      left: 0;
      transition: clip-path 1s ease-in-out;
      height: 100%;
      width: 100%;

      &.reveal {
        clip-path: circle(150% at center);
      }
    }
  }
</style>

<div class="opening { isOpeningPlayed ? 'show' : '' }">
  <div class="sugarWrapper { isFalling ? 'fall' : '' } { isScaling ? 'scale' : '' }">
    <div class="sugar">
      <img src="/images/sugar_02.png" alt="角砂糖" />
    </div>
  </div>
  <div class="pageTransition { isRevealing ? 'reveal' : '' }"></div>
</div>
