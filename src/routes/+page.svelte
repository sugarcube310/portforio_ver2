<script>
  // 画像インポート
  import icon from '$lib/assets/icons/icon.png'
  import rabbit from '$lib/assets/icons/rabbit.png'
  import githubIcon from '$lib/assets/icons/github-mark.png'
  import githubIconW from '$lib/assets/icons/github-mark-white.png'
  import thumb from '$lib/assets/icons/thumb.jpg'

  // 星表示用コンポーネントの読み込み
  import StarCanvas from '$lib/components/StarCanvas.svelte'

  import { onMount } from 'svelte'

  let nav,
      navButton,
      navButtonText

  let openNav = false // ナビゲーションが開いている場合はtrueに

  onMount(() => {
    setTimeout(() => {
      navButton.style.cssText = `
        opacity: 1;
        visibility: visible;
      `
    }, 3000)
  })

  function switchOpenNav() {
    if (!nav) return
    openNav = !openNav

    setTimeout(() => { // ナビゲーション表示アニメーションの時間だけ待つ
      if (openNav) {
      navButtonText.textContent = 'close'
      } else {
        navButtonText.textContent = 'menu'
      }
    }, 300)
  }
</script>

<div id="top" class="container" data-scroll-container>
  <!-- Navigation -->
  <button class="nav__button" bind:this={ navButton } on:click={ switchOpenNav } class:noHover={ openNav }>
    <div class="button__inner d-flex align-center justify-center">
      <p class="button__text font-family-accent weight-500 color-primary" bind:this={ navButtonText }>menu</p>
    </div>
  </button>

  <nav class="nav" bind:this={ nav } class:isOpen={ openNav }>
    <div class="nav__inner">
      <div class="nav__menu">
        <ul class="menu__list">
          <li class="list__item">
            <a href="#about" class="font-family-accent weight-400 color-white">About me</a>
          </li>
          <li class="list__item">
            <a href="#skills" class="font-family-accent weight-400 color-white">Skills</a>
          </li>
          <li class="list__item">
            <a href="#products" class="font-family-accent weight-400 color-white">Products</a>
          </li>
          <li class="list__item">
            <a href="#contact" class="font-family-accent weight-400 color-white">Contact</a>
          </li>
        </ul>
      </div>

      <div class="nav__link">
        <p class="link__title font-family-accent weight-300 color-white">Links：</p>
        <ul class="link__list">
          <li class="list__item">
            <a href="https://github.com/piiiikmin" target="blank" rel="noopener noreferrer" class="icon d-block hover-opacity">
              <img src="{ githubIconW }" alt="Github">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="nav__bg" class:isOpen={ openNav } on:click={ switchOpenNav }></div>

  <!-- MV -->
  <div id="mv">
    <div class="mv__inner">
      <div class="mv__content">
        <div class="mv__title">
          <h1 class="title__text">
            <span class="normal">piiiikmin</span>
            <span class="mdi-small d-inBlock">’</span>
            <span class="small d-inBlock">s</span>
            <span class="normal d-block">room</span>
          </h1>
          <p class="title__subText">portforio website</p>
        </div>
        <div class="mv__rabbit">
          <div class="img">
            <img src="{ rabbit }" alt="">
          </div>
        </div>
      </div>
      <div class="mv__scrollArrow">
        <div class="scrollArrow__icon">
          <span class="arrow"></span>
          <span class="mini-arrow"></span>
        </div>
      </div>
    </div>
  </div>

  <div class="section__wrapper">
    <!-- About -->
    <section id="about" class="section">
      <div class="section__head">
        <h2 class="section__title">About me</h2>
      </div>
      <div class="section__body d-flex align-center justify-between md-flex-column sm-flex-column md-gap-40 sm-gap-40">
        <div class="about__icon">
          <div class="img">
            <img src="{ icon }" alt="アイコン">
          </div>
          <div class="icon__name d-flex align-center justify-center gap-8 sm-gap-4">
            <p class="name weight-600">@piiiikmin</p>
            <a href="https://github.com/piiiikmin" target="blank" rel="noopener noreferrer" class="githubIcon hover-opacity">
              <img src="{ githubIcon }" alt="Github">
            </a>
          </div>
        </div>
        <div class="section__textWrap">
          <p class="section__text">
            フロントエンドが大好きな、ピクミン(@piiiikmin)と申します。<br>
            ピクミンは名前にちなんで呼ばれているあだ名です。
          </p>
          <p class="section__text m-0">
            Web業界ではデザインとコーディングが分業されていることも多く、これまでは実装業務をメインに携わってきました。<br>
            しかし私は、デザインと実装は「フロントエンドをより良いものにしていくための相乗効果を与え合うもの」だと考えています。<br>
            UI設計から実装まで一貫して自分で手がけられる人間になることを理想として、日々励んでいます。
          </p>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="section">
      <div class="section__head">
        <h2 class="section__title">Skills</h2>
      </div>
      <div class="section__body">
        <ul class="section__list -border-bottom">
          <li class="list__item">
            <h3 class="section__subTitle -icon">
              HTML / CSS / JavaScript
            </h3>
            <p class="section__text">
              デザインや仕様に正確に、かつ素早くコーディングすることを心がけています。<br>
              インタラクション部分を考えたり実装するのが特に好きです。
            </p>
          </li>
          <li class="list__item">
            <h3 class="section__subTitle -icon">
              JavaScriptフレームワーク
            </h3>
            <p class="section__text">
              Nuxt.jsを使用した、WebアプリとSaaSのフロントエンド開発経験があります。<br>
              Svelte(SvelteKit)とNext.jsは、業務での使用経験はありませんが、個人開発にて学習中です。
            </p>
          </li>
          <li class="list__item">
            <h3 class="section__subTitle -icon">
              CMS
            </h3>
            <p class="section__text">
              WordPress / Shopify
            </p>
          </li>
          <li class="list__item">
            <h3 class="section__subTitle -icon">
              DB
            </h3>
            <p class="section__text">
              Firebase (Realtime Database, Cloud Firestore)
            </p>
          </li>
          <li class="list__item">
            <h3 class="section__subTitle -icon">
              Webデザイン
            </h3>
            <p class="section__text">
              これまでは主に実装面からUIやUXに触れてきましたが、デザイン設計から自分で手がけられるよう、学習中です。<br>
              目的やターゲットをしっかりと考え、より質の高いユーザー体験を目指しつつ、機能性やコーディングの拡張性も両立できるよう心がけています。
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Products -->
    <section id="products" class="section">
      <div class="section__head">
        <h2 class="section__title">Products</h2>
      </div>
      <div class="section__body">
        <ul class="section__list d-flex flex-wrap gap-60 md-gap-40">
          <li class="list__item mb-0">
            <div class="item__thumb">
              <img src="{ thumb }" alt="">
            </div>
            <h3 class="section__subTitle mb-4">タイトル</h3>
            <p class="section__text-note">Webサイト</p>
          </li>
          <li class="list__item mb-0">
            <div class="item__thumb">
              <img src="{ thumb }" alt="">
            </div>
            <h3 class="section__subTitle mb-4">タイトル</h3>
            <p class="section__text-note">Webサイト</p>
          </li>
          <li class="list__item mb-0">
            <div class="item__thumb">
              <img src="{ thumb }" alt="">
            </div>
            <h3 class="section__subTitle mb-4">タイトル</h3>
            <p class="section__text-note">Webサイト</p>
          </li>
          <li class="list__item mb-0">
            <div class="item__thumb">
              <img src="{ thumb }" alt="">
            </div>
            <h3 class="section__subTitle mb-4">タイトル</h3>
            <p class="section__text-note">Webサイト</p>
          </li>
        </ul>
      </div>
    </section>
  </div>

  <!-- Footer -->
  <footer>
    <div class="footer__inner">
      <!-- Contact -->
      <section id="contact" class="section t-align-center">
        <div class="section__head">
          <h2 class="section__title">Contact</h2>
        </div>
        <div class="section__body">
          <p class="section__text color-primary weight-500">
            お問い合わせはメールにてご連絡ください。
          </p>
          <div class="contact__mail">
            <a href="mailto:satoikumi.14@gmail.com" class="mailaddress color-primary weight-600">
              satoikumi.14@gmail.com
            </a>
          </div>
        </div>
      </section>
      <p class="copyright color-gray t-align-center">&copy; 2025 piiikmin</p>
    </div>
  </footer>
</div>

<!-- 星空 -->
<StarCanvas />

<style lang="scss">
  @use '../styles/common/utils' as *;
  @use '../styles/common/includes/keyframe' as *;

  /* Container */
  .container {
    z-index: 1;
  }

  /* Navigation */
  .nav__button {
    background-color: $color-white;
    border-radius: 32px 0 0 8px;
    cursor: pointer;
    display: flex;
    opacity: 0;
    position: fixed;
    bottom: 5%;
    right: 0;
    transition: opacity .6s, visibility .6s, background-color .15s, width .15s;
    visibility: hidden;
    height: 120px;
    width: 40px;
    z-index: 999;

    @include media('lg') {
      &:hover {
        background-color: $color-primary;
        width: 60px;

        .button__text {
          color: $color-white;
          padding-right: 20px;
        }
      }

      &.noHover:hover {
        background-color: $color-white;
        width: 60px;

        .button__text {
          color: $color-primary;
          padding-right: 20px;
        }
      }
    }

    @include media('sm') {
      border-top: 2px solid $color-primary;
      border-bottom: 2px solid $color-primary;
      border-left: 2px solid $color-primary;
      height: 100px;
      width: 36px;
    }

    .button__inner {
      height: 100%;
      width: 100%;

      .button__text {
        font-size: 1.2rem;
        letter-spacing: .09rem;
        line-height: 1;
        padding-top: .5rem;
        transition: color .15s, padding-right .15s;
        writing-mode: vertical-rl;

        @include media('sm') {
          font-size: 1.15rem;
          padding-left: 1px;
        }
      }
    }
  }

  .nav {
    background-color: $color-primary;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: transform .3s;
    height: 100vh;
    width: 100vw;
    z-index: 998;

    @include media('lg') {
      width: 40vw;
    }

    @include media('xl') {
      width: 30vw;
    }

    &.isOpen {
      transform: translateX(0);
    }

    &__inner {
      padding: 100px;

      @include media('sm') {
        padding: 60px;
      }

      .menu__list {
        margin-bottom: 60px;

        .list__item {
          cursor: pointer;
          font-size: 2rem;
          letter-spacing: .1rem;
          padding-bottom: .5rem;
          position: relative;
          width: fit-content;

          @include media('sm') {
            font-size: 1.75rem;
            padding-bottom: 0;
          }

          &:not(:last-child) {
            margin-bottom: 2.5rem;
          }

          @include media('lg') {
            &::after {
              content: '';
              background-color: $color-white;
              display: block;
              position: absolute;
              bottom: 0;
              left: 0;
              height: 2px;
              transition: width .3s;
              width: 0;
            }

            &:hover::after {
              width: 100%;
            }
          }
        }
      }

      .nav__link {
        .link__title {
          font-size: 1.05rem;
          letter-spacing: .075rem;
          margin-bottom: .75rem;
        }

        .icon {
          height: 20px;
          width: 20px;
        }
      }
    }
  }

  .nav__bg {
    background-color: rgb(0 0 0 / .3);
    backdrop-filter: blur(2px);
    margin: auto;
    opacity: 0;
    visibility: hidden;
    position: fixed;
    inset: 0;
    transition: opacity .3s, visibility .3s;
    height: 100vh;
    width: 100vw;
    z-index: 997;

    &.isOpen {
      opacity: 1;
      visibility: visible;
    }
  }

  /* MV */
  #mv {
    height: 100vh;
    width: 100%;

    .mv__inner {
      position: relative;
      height: 100%;
      width: 100%;

      .mv__content {
        margin: auto;
        padding: 24px;
        position: absolute;
        top: -10%;
        bottom: 0;
        left: 0;
        right: 0;
        height: fit-content;
        width: fit-content;

        @include media ('sm') {
          display: flex;
          flex-direction: column;
          padding: 0;
          top: 0;
        }

        // title
        .mv__title {
          h1 {
            .mdi-small {
              font-weight: 300;
              margin-left: -2rem;
              letter-spacing: 0;

              @include media ('sm') {
                margin-left: -1rem;
              }
            }

            .small {
              font-size: 5rem;
              margin-left: -2rem;

              @include media ('sm') {
                font-size: 3rem;
                margin-left: -1rem;
              }
            }

            .normal:last-of-type {
              line-height: 1.2;
            }
          }

          .title__subText {
            color: $color-white;
            font-size: 1.5rem;
            font-weight: 300;
            letter-spacing: .25rem;
            padding-top: 36px;
            padding-left: 4px;

            @include media('md') {
              padding-top: 28px;
            }

            @include media('sm') {
              font-size: 1.25rem;
              letter-spacing: 0.275rem;
              padding-top: 20px;
              padding-left: 2px;
            }
          }
        }

        // rabbit
        .mv__rabbit {
          animation: float 3s ease-in-out infinite;
          position: absolute;
          bottom: 0;
          right: 0;

          @include media('sm') {
            margin: 4px 0 0 auto;
            position: unset;
          }

          .img {
            height: 120px;
            width: 120px;

            @include media('xl') {
              height: 140px;
              width: 140px;
            }

            @include media('sm') {
              height: 100px;
              width: 100px;
            }
          }
        }
      }
    }

    // scroll arrow
    .mv__scrollArrow {
      cursor: pointer;
      margin: auto;
      position: absolute;
      bottom: 5%;
      left: 0;
      right: 0;
      height: fit-content;
      width: fit-content;

      .scrollArrow__icon {
        animation: scrollIcon_bg 4s infinite;
        background-color: rgb(255 255 255 / .1);
        border-radius: 50%;
        position: relative;
        transition: animation .4s, background-color .3s;
        height: 68px;
        width: 68px;

        @include media('md') {
          height: 60px;
          width: 60px;
        }

        @include media('sm') {
          height: 60px;
          width: 60px;
        }

        &::before {
          content: '';
          animation: scrollIcon_ripple 4s infinite;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgb(0 94 167 / .2);
          left: 0;
          margin: auto;
          opacity: 0;
          position: absolute;
          right: 0;
          top: 0;
          transition: animation .3s, box-shadow .3s, opacity .3s;
          height: 100%;
          width: 100%;
        }

        .arrow {
          border-bottom: 2px solid rgb(255 255 255 / .8);
          border-left: 2px solid rgb(255 255 255 / .8);
          margin: auto;
          position: absolute;
          inset: 0;
          top: -8px;
          transform: rotate(-45deg);
          transition: top .3s, border-color .15s;
          height: 20px;
          width: 20px;
        }

        .mini-arrow {
          border-bottom: 2px solid rgb(255 255 255 / .8);
          border-left: 2px solid rgb(255 255 255 / .8);
          margin: auto;
          opacity: 0;
          position: absolute;
          inset: 0;
          top: -12px;
          transform: rotate(-45deg);
          transition: opacity .35s, transform .35s;
          height: 12px;
          width: 12px;
        }

        @include media ('lg') {
          &:hover {
            animation: none;
            background-color: rgb(0 94 167 / .8);

            &::before {
              animation: none;
              box-shadow: 0;
              opacity: 1;
            }

            .arrow {
              border-color: $color-white;
              top: 4px;
            }

            .mini-arrow {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  /* Section */
  .section__wrapper {
    border: 8px solid $color-white;
    border-radius: 32px;
    margin: 100px auto;
    padding: 100px 0;
    position: relative;
    max-width: 1200px;
    width: 80%;

    @include media('md') {
      margin: 60px auto;
      padding: 60px 0;
      max-width: 900px;
      width: 90%;
    }

    @include media('sm') {
      border-width: 4px;
      border-radius: 20px;
      margin: 40px auto;
      padding: 40px 0;
      max-width: 100%;
      width: calc(100% - 40px);
    }

    &::before {
      content: '';
      background-color: $color-white;
      border-radius: 16px;
      position: absolute;
      top: 8px;
      left: 8px;
      height: calc(100% - 16px);
      width: calc(100% - 16px);

      @include media('sm') {
        border-radius: 12px;
        top: 4px;
        left: 4px;
        height: calc(100% - 8px);
        width: calc(100% - 8px);
      }
    }

    .section {
      margin: auto;
      position: relative;
      width: 75%;
      z-index: 1;

      @include media('md') {
        width: 85%;
      }

      @include media('sm') {
        width: 85%;
      }

      &:not(:last-of-type) {
        margin-bottom: 160px;

        @include media('md') {
          margin-bottom: 100px;
        }

        @include media('sm') {
          margin-bottom: 80px;
        }
      }

      // text
      .section__text {
        margin-bottom: 2rem;

        @include media('sm') {
          margin-bottom: 1.25rem;
        }
      }

      .section__text-note {
        color: $text-color-gray;
        font-size: .9rem;
      }

      // list
      .section__list {
        .list__item:not(:last-child) {
          margin-bottom: 2rem;

          @include media('sm') {
            margin-bottom: 1.25rem;
          }
        }

        &.-border-bottom .list__item:not(:last-child) {
          border-bottom: 1px solid $color-gray;
        }

        .item__thumb {
          margin-bottom: 20px;
          img {
            border-radius: 20px;

            @include media('sm') {
              border-radius: 8px;
            }
          }
        }
      }
    }
  }

  /* About */
  #about {
    .about__icon {
      @include media('lg') {
        width: 40%;
      }

      .img {
        margin: auto;
        height: 180px;
        width: 180px;

        @include media('sm') {
          height: 140px;
          width: 140px;
        }
      }

      .icon__name {
        margin-top: 12px;
        text-align: center;

        @include media('sm') {
          margin-top: 8px;
        }

        .name {
          font-family: $accent-font-family;
          font-size: 1.15rem;
          letter-spacing: .05rem;

          @include media('sm') {
            font-size: 1.05rem;
            letter-spacing: .03rem;
          }
        }

        .githubIcon {
          cursor: pointer;
          height: 20px;
          width: 20px;

          @include media('sm') {
            height: 16px;
            width: 16px;
          }
        }
      }
    }

    .section__textWrap {
      @include media('lg') {
        width: 60%;
      }
    }
  }

  /* Products */
  #products {
    .section__list .list__item {
      width: calc(50% - 30px);

      @include media('md') {
        width: calc(50% - 20px);
      }

      @include media('sm') {
        width: 100%;
      }
    }
  }

  /* Footer */
  .footer__inner {
    margin: auto;
    max-width: 1200px;
    width: 80%;

    @include media('sm') {
      max-width: 100%;
      width: calc(100% - 40px);
    }

    /* Contact */
    #contact {
      padding: 60px 0;

      @include media('sm') {
        padding: 40px 0;
      }

      .section__title,
      .section__text {
        mix-blend-mode: darken;
      }

      .section__text {
        font-size: 1rem;

        @include media('sm') {
          font-size: .95rem;
        }
      }

      .contact__mail {
        background-color: $color-white;
        border-radius: 40px;
        cursor: pointer;
        margin: 24px auto 40px;
        position: relative;
        transition: background-color .3s;
        width: fit-content;

        @include media('lg') {
          &:hover  {
            background-color: $color-primary;

            .mailaddress {
              color: $color-white;
              mix-blend-mode: unset;
            }
          }
        }

        @include media('sm') {
          margin: 16px auto 20px;
        }

        .mailaddress {
          display: block;
          font-size: 1.25rem;
          letter-spacing: .05rem;
          mix-blend-mode: darken;
          padding: 12px 60px;
          transition: color .3s;

          @include media('sm') {
            font-size: 1.15rem;
            padding: 8px 40px;
          }
        }
      }
    }

    /* Copyright */
    .copyright {
      font-size: .75rem;
      margin-bottom: 20px;
      letter-spacing: .01rem;

      @include media('sm') {
        margin-bottom: 12px;
      }
    }
  }

</style>
