<script>
  // 画像インポート
  import icon from '$lib/assets/icons/icon.png'
  import rabbit from '$lib/assets/icons/rabbit.png'
  import githubIcon from '$lib/assets/icons/github-mark.png'
  import thumb from '$lib/assets/icons/thumb.jpg'

  // 星表示用コンポーネントの読み込み
  import StarCanvas from '$lib/components/StarCanvas.svelte'

  import { onMount } from "svelte";

</script>

<div id="top" class="container" data-scroll-container>
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
        </div>
      </div>
    </div>
  </div>

  <div class="section__wrapper">
    <!-- About me -->
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
            <a href="https://github.com/piiiikmin" target="blank" rel="noopener noreferrer" class="githubIcon">
              <img src="{ githubIcon }" alt="Githubアイコン">
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
            しかし私は、デザインと実装は「フロントをより良いものにしていくための相乗効果を与え合うもの」だと考えています。<br>
            そのためにも、UI設計から実装まで一貫して自分で手がけられる人間になることを目標としています。
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
              Webデザイン (学習中)
            </h3>
            <p class="section__text">
              UI設計から実装までを自分で実現できる人間になるべく、基礎から勉強中です。
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
              line-height: 1;
            }
          }

          .title__subText {
            color: #fff;
            font-size: 1.5rem;
            font-weight: 300;
            letter-spacing: .25rem;
            padding-top: 30px;
            padding-left: 4px;

            @include media('md') {
              padding-top: 20px;
            }

            @include media('sm') {
              font-size: 1.25rem;
              letter-spacing: 0.275rem;
              padding-top: 16px;
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
            margin: 12px 0 0 auto;
            position: unset;
          }

          .img {
            height: 160px;
            width: 160px;

            @include media('md') {
              height: 140px;
              width: 140px;
            }

            @include media('sm') {
              height: 120px;
              width: 120px;
            }
          }
        }
      }
    }

    // scroll arrow
    .mv__scrollArrow {
      margin: auto;
      position: absolute;
      bottom: 40px;
      left: 0;
      right: 0;
      height: fit-content;
      width: fit-content;

      .scrollArrow__icon {
        animation: scroll_bg 4s infinite;
        background-color: transparent;
        border-radius: 50%;
        position: relative;
        height: 60px;
        width: 60px;

        &::before {
          content: '';
          animation: scroll_ripple 4s infinite;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgb(0 94 167 / .2);
          left: 0;
          margin: auto;
          opacity: 0;
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 100%;
        }

        .arrow {
          border-bottom: 1px solid #fff;
          border-left: 1px solid #fff;
          margin: auto;
          position: absolute;
          inset: 0;
          top: -8px;
          transform: rotate(-45deg);
          height: 20px;
          width: 20px;
        }
      }
    }
  }

  /* Section */
  .section__wrapper {
    border: 12px solid rgb(255 255 255 / .8);
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
      background-color: rgb(255 255 255 / .8);
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

  /* About me */
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
          height: 20px;
          width: 20px;

          @include media('sm') {
            height: 16px;
            width: 16px;
          }
        }
      }
    }

    .section__list {
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
        background-color: rgb(255 255 255 / .6);
        border: 2px solid rgb(0 94 167 / .8);
        border-radius: 40px;
        cursor: pointer;
        margin: 24px auto 40px;
        position: relative;
        transition: background-color .3s ease-in-out;
        width: fit-content;

        @include media('lg') {
          &:hover  {
            background-color: rgb(0 94 167 / .8);

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
