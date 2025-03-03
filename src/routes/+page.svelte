<script>
  import { onMount,onDestroy } from 'svelte'

  /* Lenis (イージングスクロール) */
  import { get } from 'svelte/store'
  import { lenisStore } from '$lib/stores/lenis'

  /* 要素のフェードイン表示 */
  import { fadeIn } from '$lib/actions/fadeIn'

  /* 星表示用コンポーネント */
  import StarCanvas from '$lib/components/StarCanvas.svelte'

  /* 画像インポート */
  import icon from '$lib/assets/icons/icon.png'
  import rabbit from '$lib/assets/icons/rabbit.png'
  import githubIcon_white from '$lib/assets/icons/github-mark-white.png'
  import arrow_blue from '$lib/assets/icons/arrow-blue.svg'
  import arrow_white from '$lib/assets/icons/arrow-white.svg'
  // import thumb from '$lib/assets/icons/thumb.jpg'

  /* 変数定義 */
  let nav,
      navButton,
      navButtonText,
      container

  let sections = []

  let openNav = false // ナビゲーションが開いている場合はtrueに
  let showMV = true // MVが画面内に入っている場合はtrueに

  /* ナビゲーション表示切り替え */
  function switchOpenNav() {
    if (!nav) return
    openNav = !openNav

    // ナビゲーションボタンのテキスト変更
    if (openNav) {
      navButtonText.textContent = 'close'
    } else {
      navButtonText.textContent = 'menu'
    }
  }

  /* アンカーリンク(aタグ) */
  function handleAnchorClick(event) {
    const lenis = get(lenisStore)
    if (!lenis) return

    const target = event.target
    const href = target.getAttribute('href')
    const navLink = target.classList.contains('navLink')

    if (href && href.startsWith('#')) {
      event.preventDefault()
      const targetId = document.querySelector(href)

      if (targetId) {
        if (navLink) { // ナビゲーション内リンクの場合
          switchOpenNav()
          setTimeout(() => {
            lenis.scrollTo(targetId)
          }, 300)
        } else {
          lenis.scrollTo(targetId)
        }
      }
    }
  }
  document.addEventListener('click', handleAnchorClick)

  /* アンカーリンク(data-target) */
  function scrollToTarget(event) {
    const lenis = get(lenisStore)
    const targetValue = event.currentTarget.dataset.target

    if (!lenis || !targetValue) return

    const target = `#${ targetValue }`

    lenis.scrollTo(target)
  }

  /* 要素監視 */
  function observeContents() {
    const options = {
      threshold: 0.5 // 要素が50%以上画面内に入ったら発火
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id

          if (id === 'mv') {
            showMV = true
          } else {
            showMV = false
          }
        }
      })
    }, options)

    sections.forEach((section) => observer.observe(section))
  }

  onMount(() => {
    // section要素の監視
    sections = Array.from(container.querySelectorAll('section'))
    observeContents()

    return () => {
      // アンカーリンク
      document.removeEventListener('click', handleAnchorClick)
    }
  })
</script>

<div id="top" class="container" bind:this={ container }>
  <!-- Navigation -->
  <button
    class="nav__button"
    class:open={ openNav }
    class:hide={ showMV }
    bind:this={ navButton }
    on:click={ switchOpenNav }
  >
    <div class="button__inner d-flex align-center justify-center">
      <p class="button__text font-family-accent weight-500 color-primary" bind:this={ navButtonText }>menu</p>
    </div>
  </button>

  <nav
    class="nav"
    class:open={ openNav }
    bind:this={ nav }
  >
    <div class="nav__inner">
      <div class="nav__menu">
        <ul class="menu__list">
          <li class="list__item">
            <a href="#about" class="font-family-accent weight-400 color-white item__link navLink">About me</a>
          </li>
          <li class="list__item">
            <a href="#skills" class="font-family-accent weight-400 color-white item__link navLink">Skills</a>
          </li>
          <li class="list__item">
            <a href="#products" class="font-family-accent weight-400 color-white item__link navLink">Products</a>
          </li>
          <li class="list__item">
            <a href="#contact" class="font-family-accent weight-400 color-white item__link navLink">Contact</a>
          </li>
        </ul>
      </div>

      <div class="nav__link">
        <p class="link__title font-family-accent weight-300 color-white">Links：</p>
        <ul class="link__list">
          <li class="list__item">
            <a href="https://github.com/piiiikmin" target="blank" rel="noopener noreferrer" class="icon d-block hover-opacity">
              <img src="{ githubIcon_white }" alt="Github">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div
    class="nav__bg"
    class:open={ openNav }
    on:click={ switchOpenNav }
    aria-hidden="true"
  ></div>

  <!-- MV -->
  <section id="mv" bind:this={ mv }>
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
      <button
        class="button scrollDown"
        class:hide={ !showMV }
        on:click={ scrollToTarget }
        data-target="sectionTop"
        aria-label="scrollDown"
      >
        <div class="button__icon">
          <span class="arrow"></span>
          <span class="mini-arrow"></span>
        </div>
      </button>
    </div>
  </section>

  <div id="sectionTop" class="section__wrapper">
    <!-- About -->
    <section id="about" class="section">
      <div class="section__head" use:fadeIn>
        <h2 class="section__title">About me</h2>
      </div>
      <div class="section__body d-flex align-center justify-between md-flex-column sm-flex-column md-gap-40 sm-gap-40">
        <div class="about__icon" use:fadeIn={{ delay: 300 }}>
          <div class="img">
            <img src="{ icon }" alt="アイコン">
          </div>
          <div class="about__nickName d-flex align-center justify-center gap-8 sm-gap-4">
            <p class="name weight-600">@piiiikmin</p>
          </div>
        </div>
        <div class="section__textWrap">
          <p class="section__text" use:fadeIn={{ delay: 400 }}>
            はじめまして。<br>
            フロントエンドが大好きな、ピクミン(@piiiikmin)と申します。
          </p>
          <p class="section__text m-0" use:fadeIn={{ delay: 500 }}>
            Web業界ではデザインとコーディングが分業されていることも多く、これまで実装業務を主に担当してきました。<br>
            しかし、私はデザインとコーディングの両方が「フロントエンドをより良いものにするための相乗効果を生むもの」だと考えています。<br>
            これまで培ってきたコーディング経験を活かしながら、UI設計から実装まで一貫して自分で手がけられる人間を目指しています。
          </p>
        </div>
      </div>
      <div class="section__line" use:fadeIn></div>
    </section>

    <!-- Skills -->
    <section id="skills" class="section">
      <div class="section__head" use:fadeIn>
        <h2 class="section__title">Skills</h2>
      </div>
      <div class="section__body">
        <ul class="section__list">
          <li class="list__item" use:fadeIn={{ delay: 300 }}>
            <h3 class="section__subTitle -icon">
              HTML / CSS / JavaScript
            </h3>
            <p class="section__text">
              デザインや仕様に正確に、かつ迅速にコーディングすることを心がけています。<br>
              インタラクション部分を考えたり実装するのが特に好きです。
            </p>
          </li>
          <li class="list__item" use:fadeIn={{ delay: 400 }}>
            <h3 class="section__subTitle -icon">
              JavaScriptフレームワーク
            </h3>
            <p class="section__text">
              Nuxt.jsを使用したWebアプリおよびSaaSのフロントエンド開発経験があります。<br>
              Svelte(SvelteKit)とNext.jsは、業務での使用経験はありませんが、個人開発を通じて学習しています。
            </p>
          </li>
          <li class="list__item" use:fadeIn={{ delay: 500 }}>
            <h3 class="section__subTitle -icon">
              CMS
            </h3>
            <p class="section__text">
              WordPress / Shopify
            </p>
          </li>
          <li class="list__item" use:fadeIn={{ delay: 600 }}>
            <h3 class="section__subTitle -icon">
              DB
            </h3>
            <p class="section__text">
              Firebase (Realtime Database, Cloud Firestore)
            </p>
          </li>
          <li class="list__item" use:fadeIn={{ delay: 700 }}>
            <h3 class="section__subTitle -icon">
              Webデザイン
            </h3>
            <p class="section__text">
              デザイン設計から実装までを一貫して手がけられるよう、UI/UXについて学んでいます。<br>
              目的やターゲットを明確にし、より質の高いユーザー体験の提供を目指しつつ、機能性やコーディングの拡張性も兼ね備えることを心がけています。
            </p>
          </li>
        </ul>
      </div>
      <div class="section__line" use:fadeIn></div>
    </section>

    <!-- Products -->
    <section id="products" class="section">
      <div class="section__head" use:fadeIn>
        <h2 class="section__title">Products</h2>
      </div>
      <div class="section__body">
        <ul class="section__list d-flex flex-wrap gap-60 md-gap-40">
          <li class="list__item mb-0" use:fadeIn={{ delay: 300 }}>
            <div class="item__thumb">
              <!-- <img src="{ thumb }" alt=""> -->
            </div>
            <h3 class="section__subTitle mb-4">タイトル</h3>
            <p class="section__text-note">Webサイト</p>
          </li>
          <li class="list__item mb-0" use:fadeIn={{ delay: 400 }}>
            <div class="item__thumb">
              <!-- <img src="{ thumb }" alt=""> -->
            </div>
            <h3 class="section__subTitle mb-4">タイトル</h3>
            <p class="section__text-note">Webサイト</p>
          </li>
          <li class="list__item mb-0" use:fadeIn={{ delay: 500 }}>
            <div class="item__thumb">
              <!-- <img src="{ thumb }" alt=""> -->
            </div>
            <h3 class="section__subTitle mb-4">タイトル</h3>
            <p class="section__text-note">Webサイト</p>
          </li>
          <li class="list__item mb-0" use:fadeIn={{ delay: 600 }}>
            <div class="item__thumb">
              <!-- <img src="{ thumb }" alt=""> -->
            </div>
            <h3 class="section__subTitle mb-4">タイトル</h3>
            <p class="section__text-note">Webサイト</p>
          </li>
        </ul>
      </div>
      <div class="section__line" use:fadeIn></div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section">
      <div class="section__head" use:fadeIn>
        <h2 class="section__title">Contact</h2>
      </div>
      <div class="section__body">
        <p class="section__text mb-4" use:fadeIn={{ delay: 300 }}>
          ご覧いただきありがとうございました。
        </p>
        <p class="section__text" use:fadeIn={{ delay: 400 }}>
          ご質問等ございましたら、<a href="mailto:satoikumi.14@gmail.com" class="mainLink d-inBlock hover-opacity">メール</a>にてご連絡ください。
        </p>
      </div>
    </section>
  </div>

  <!-- Footer -->
  <footer>
    <div class="footer__inner">
      <p class="copyright color-gray t-align-center">&copy; 2025 piiikmin</p>
    </div>
  </footer>
</div>

<!-- 星空 -->
<StarCanvas />

<style lang="scss">
  @use '../styles/common/utils' as *;
  @use '../styles/common/includes/keyframe' as *;
  @use 'sass:color';

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
    position: fixed;
    bottom: 5%;
    right: 0;
    transition: transform .6s, background-color .15s, width .15s;
    height: 120px;
    width: 50px;
    z-index: 999;

    &.hide {
      transform: translateX(100%);
    }

    @include media('lg') {
      &:hover {
        background-color: $color-primary;
        width: 60px;

        .button__text {
          color: $color-white;
          padding-right: 20px;
        }
      }

      &.open:hover {
        background-color: $color-white;
        width: 60px;

        .button__text {
          color: $color-primary;
          padding-right: 20px;
        }
      }
    }

    @include media('md') {
      border-top: 2px solid $color-primary;
      border-bottom: 2px solid $color-primary;
      border-left: 2px solid $color-primary;
    }

    @include media('sm') {
      border-top: 2px solid $color-primary;
      border-bottom: 2px solid $color-primary;
      border-left: 2px solid $color-primary;
      height: 100px;
      width: 40px;
    }

    .button__inner {
      height: 100%;
      width: 100%;

      .button__text {
        font-size: 1.25rem;
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

    &.open {
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
          width: fit-content;

          &:not(:last-child) {
            margin-bottom: 2.5rem;
          }

          .item__link {
            display: block;
            font-size: 2rem;
            letter-spacing: .1rem;
            padding-bottom: .5rem;
            position: relative;

            @include media('sm') {
              font-size: 1.75rem;
              padding-bottom: 0;
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

    &.open {
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

              @include media ('xs') {
                font-size: 2.5rem;
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
            letter-spacing: .33rem;
            padding-top: 32px;
            padding-left: 4px;

            @include media('md') {
              letter-spacing: .25rem;
              padding-top: 24px;
            }

            @include media('sm') {
              font-size: 1.25rem;
              letter-spacing: 0.25rem;
              padding-top: 16px;
              padding-left: 2px;
            }

            @include media('xs') {
              font-size: 1.175rem;
              letter-spacing: 0.2rem;
              padding-top: 12px;
            }
          }
        }

        // rabbit icon
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

    // scrollDown
    .button.scrollDown {
      cursor: pointer;
      margin: auto;
      position: absolute;
      bottom: 5%;
      left: 0;
      right: 0;
      transition: opacity .6s, visibility .6s;
      height: fit-content;
      width: fit-content;

      &.hide {
        opacity: 0;
        visibility: hidden;
      }

      .button__icon {
        background-color: rgb(255 255 255 / .1);
        border-radius: 50%;
        position: relative;
        transition: background-color .3s;
        height: 60px;
        width: 60px;

        @include media('xl') {
          height: 70px;
          width: 70px;
        }

        &::before {
          content: '';
          animation: scrollIcon_ripple 3s infinite;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgb(0 94 167 / .6);
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
          border-bottom: 2px solid $color-white;
          border-left: 2px solid $color-white;
          margin: auto;
          position: absolute;
          inset: 0;
          top: -8px;
          transform: rotate(-45deg);
          transition: top .3s, border-color .15s;
          height: 20px;
          width: 20px;

          @include media('sm') {
            height: 18px;
            width: 18px;
          }
        }

        .mini-arrow {
          border-bottom: 2px solid $color-white;
          border-left: 2px solid $color-white;
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
            background-color: $color-primary;

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
    border: 6px solid $color-white;
    border-radius: 32px;
    margin: 100px auto 120px;
    padding: 100px 0;
    position: relative;
    max-width: 1200px;
    width: 80%;

    @include media('md') {
      border-width: 4px;
      border-radius: 20px;
      margin-top: 60px;
      padding: 60px 0;
      max-width: 900px;
      width: 90%;
    }

    @include media('sm') {
      border-width: 4px;
      border-radius: 20px;
      margin: 40px auto 100px;
      padding: 40px 0;
      max-width: 100%;
      width: calc(100% - 40px);
    }

    &::before {
      content: '';
      background-color: $color-white;
      border-radius: 22px;
      position: absolute;
      top: 8px;
      left: 8px;
      height: calc(100% - 16px);
      width: calc(100% - 16px);

      @include media('md') {
        border-radius: 12px;
        top: 6px;
        left: 6px;
        height: calc(100% - 12px);
        width: calc(100% - 12px);
      }

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
          margin-bottom: 2.5rem;

          @include media('sm') {
            margin-bottom: 2rem;
          }
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

      // 区切り線
      .section__line {
        background-color: $color-gray;
        margin: 120px 0 100px;
        height: 1px;
        width: 100%;

        @include media('md') {
          margin: 100px 0 80px;
        }

        @include media('sm') {
          margin: 60px 0 40px;
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

      .about__nickName {
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

  /* Contact */
  #contact {
    // mail
    .mainLink {
      border-bottom: 1px solid color.adjust($text-color-base, $lightness: 20%);
      margin: 0 2px;
      line-height: 1.25;
    }
  }

  /* Footer */
  .footer__inner {
    margin: auto;
    padding-bottom: 4px;
    position: relative;
    max-width: 1200px;
    width: 80%;

    @include media('sm') {
      max-width: 100%;
      width: calc(100% - 40px);
    }

    // copyright
    .copyright {
      font-size: .75rem;
      letter-spacing: .01rem;
    }
  }

</style>
