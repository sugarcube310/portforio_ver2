<script>
  import { onMount } from 'svelte'

  const ants = Array(2).fill(null)
  let isShowHeroArea = false

  function observeContents() {
    const options = {
      threshold: 0.5
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { // ヒーローエリアが画面内に入った場合
          isShowHeroArea = true
        } else {
          isShowHeroArea = false
        }
      })
    }, options)

    observer.observe(document.querySelector('.hero'))
  }

  onMount(() => {
    observeContents()
  })
</script>

<style lang="scss">
  @use '../../../styles/includes/variables' as *;
  @use 'sass:color';

  .hero {
    overflow: hidden;
    height: 100vh;
    width: 100%;

    &__inner {
      position: relative;
      height: 100%;
      width: 100%;

      // タイトル
      .title {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 5%;
        left: 5%;

        &-decoration {
          display: flex;
          gap: 32px;
          margin-left: 4px;

          @include media('sm') {
            gap: 20px;
          }

          .circle {
            animation: bounce .3s ease-in-out;
            background-color: $color-secondary;
            border-radius: 50%;
            display: block;
            height: 12px;
            width: 12px;

            @include media('sm') {
              height: 10px;
              width: 10px;
            }
          }
        }
      }

      // アリ
      .antWrapper {
        animation: antMove 15s linear infinite;
        display: flex;
        margin: auto;
        pointer-events: none;
        position: absolute;
        inset: 0;
        top: 8%;
        height: fit-content;
        width: 200%;

        @include media('md') {
          animation: antMoveMd 15s linear infinite;
          top: 5%;
        }

        @include media('sm') {
          animation: antMoveSm 15s linear infinite;
          top: 0;
        }

        .ant {
          flex-shrink: 0;
          width: 50%;

          @include media('md') {
            width: 75%;
          }

          @include media('sm') {
            width: 150%;
          }
        }
      }

      // スクロールアイコン
      .scrollIcon {
        margin: 0 auto;
        opacity: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateY(30px);
        transition: opacity .6s ease-out, transform .6s ease-out;
        height: fit-content;
        width: fit-content;


        &.show {
          opacity: 1;
          transform: translateY(0);
        }

        &__inner {
          display: flex;
          flex-direction: column;
        }

        &__text {
          color: color.adjust($color-gray, $blackness: 90%);
          font-size: 0.9rem;
          letter-spacing: .075rem;
          margin-left: 2px;
          padding-bottom: 1rem;
          writing-mode: vertical-lr;
        }

        &__line {
          position: relative;
          height: 80px;

          &::before,
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            height: 100%;
            width: 1px;
          }

          &::before {
            background-color: $color-gray;
          }

          &::after {
            animation: scrollLine 2.5s cubic-bezier(1, 0, 0, 1) infinite;
            background-color: color.adjust($color-gray, $blackness: 50%);
          }
        }
      }
    }
  }
</style>

<div id="pageTop" class="hero">
  <div class="hero__inner">
    <div class="title">
      <h1>sato’s<br>portforio website</h1>
      <div class="title-decoration">
        {#each Array.from({ length: 10 }) as _, i}
          <span class="circle bounce" style="animation-delay: .{i}s"></span>
        {/each}
      </div>
    </div>
    <div class="antWrapper">
      {#each ants as _, i}
        <div class="ant">
          <img src="/images/ants.gif" alt="ants">
        </div>
      {/each}
    </div>
    <div class="scrollIcon { isShowHeroArea ? 'show' : '' }">
      <div class="scrollIcon__inner">
        <p class="scrollIcon__text">scroll</p>
        <div class="scrollIcon__line"></div>
      </div>
    </div>
  </div>
</div>
