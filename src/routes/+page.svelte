<script>
  import { onMount } from 'svelte'

  /* Lenis (イージングスクロール) */
  import { get } from 'svelte/store'
  import { lenisStore } from '$lib/stores/lenis'

  /* 要素のフェードイン表示 */
  import { fadeIn } from '$lib/actions/fadeIn'

  /* カスタムカーソルコンポーネント */
  import CustomCursor from '$lib/components/CustomCursor.svelte'

  /* 画像インポート */
  import icon_github from '$lib/assets/icons/github-mark-white.png'
  import icon_heart from '$lib/assets/icons/icon_heart.png'
  import icon_pin from '$lib/assets/icons/icon_pin.png'
  import sugarCube from '$lib/assets/icons/sugarcube.png'

  /* 変数定義 */
  let nav,
      navButton,
      navButtonText,
      container

  let scrollY

  let sections = []

  let openNav = false
  let hideNavButton = true

  /* ナビ表示切り替え */
  function switchShowMenu() {
    if (!nav) return
    openNav = !openNav

    const body = document.body

    if (openNav) { // ナビを開く場合の処理
      // ナビボタンのテキスト変更
      navButtonText.textContent = 'CLOSE'

      // スクロール位置を保存
      scrollY = window.scrollY

      // ページのスクロールを固定
      body.style.position = 'fixed'
      body.style.top = `-${ scrollY }px`
      body.style.width = '100%'

    } else { // ナビを閉じる場合の処理
      // ナビボタンのテキスト変更
      navButtonText.textContent = 'MENU'

      // ページのスクロールを元に戻す
      const scrollY = Math.abs(parseInt(body.style.top || '0'))

      body.style.position = ''
      body.style.top = ''

      window.scrollTo(0, scrollY)
    }
  }

  /* アンカーリンク */
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
          switchShowMenu()
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

  /* 要素監視 */
  function observeContents() {
    const options = {
      threshold: 0.7 // 要素が70%以上画面内に入ったら発火
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id

          if (id === 'mv') {
            hideNavButton = true
          } else {
            hideNavButton = false
          }
        }
      })
    }, options)

    sections.forEach((section) => observer.observe(section))
  }

  /* スクロール量を取得 */
  function setScrollY() {
    scrollY = window.scrollY
  }

  onMount(() => {
    // section要素の監視
    sections = Array.from(container.querySelectorAll('section'))
    observeContents()

    window.addEventListener('scroll', setScrollY)

    return () => {
      // アンカーリンク
      document.removeEventListener('click', handleAnchorClick)
      window.removeEventListener('scroll', setScrollY)
    }
  })
</script>

<div id="top" class="container" bind:this={ container }>
  <!-- カーソル -->
  <CustomCursor openNav={ openNav } />

  <!-- ナビゲーション -->
  <button
    class="navButton"
    class:open={ openNav }
    class:hide={ hideNavButton }
    bind:this={ navButton }
    on:click={ switchShowMenu }
  >
    <div class="button__inner d-flex align-center justify-center">
      <p class="button__text font-family-accent weight-500" bind:this={ navButtonText }>MENU</p>
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
          <li class="item">
            <a href="#about" class="font-family-accent weight-400 color-white item__link navLink">ABOUT ME</a>
          </li>
          <li class="item">
            <a href="#skills" class="font-family-accent weight-400 color-white item__link navLink">SKILLS</a>
          </li>
          <li class="item">
            <a href="#products" class="font-family-accent weight-400 color-white item__link navLink">PRODUCTS</a>
          </li>
          <li class="item">
            <a href="#contact" class="font-family-accent weight-400 color-white item__link navLink">CONTACT</a>
          </li>
        </ul>
      </div>

      <div class="nav__link">
        <p class="link__title font-family-accent weight-300 color-white">LINKS：</p>
        <ul class="link__list">
          <li class="item">
            <a href="https://github.com/sugarcube310" target="blank" rel="noopener noreferrer" class="icon d-block hover-opacity">
              <img src="{ icon_github }" alt="Github">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div
    class="nav__bg"
    class:open={ openNav }
    on:click={ switchShowMenu }
    aria-hidden="true"
  ></div>

  <!-- MV -->
  <section id="mv" bind:this={ mv }>
    <div class="mv__inner">
      <div class="mv__content">
        <div class="mv__title">
          <h1 class="title__text">
            <span class="d-block firstRow">
              <span class="d-inBlock bounce">W</span><span class="d-inBlock bounce" style="animation-delay: .1s">R</span><span class="d-inBlock bounce" style="animation-delay: .2s">I</span><span class="d-inBlock bounce" style="animation-delay: .3s">T</span><span class="d-inBlock bounce" style="animation-delay: .4s">E</span>
            </span>
            <span class="d-block secondRow">
              <span class="d-inBlock bounce" style="animation-delay: .5s">M</span><span class="d-inBlock bounce" style="animation-delay: .6s">O</span><span class="d-inBlock bounce" style="animation-delay: .7s">R</span><span class="d-inBlock bounce" style="animation-delay: .8s">E</span>
            </span>
            <span class="d-block thirdRow">
              <span class="d-inBlock bounce" style="animation-delay: .9s">C</span><span class="d-inBlock bounce" style="animation-delay: 1s">O</span><span class="d-inBlock bounce" style="animation-delay: 1.1s">D</span><span class="d-inBlock bounce" style="animation-delay: 1.2s">E</span><span class="d-inBlock bounce mark" style="animation-delay: 1.3s">!</span>
            </span>
          </h1>
          <p class="title__subText weight-500">sato's portforio website</p>
        </div>
      </div>
    </div>
  </section>

  <div class="sectionWrapper">
    <!-- ABOUT -->
    <section id="about" class="section --partition">
      <div class="section__head" use:fadeIn>
        <h2 class="section__title">ABOUT ME</h2>
      </div>
      <div class="section__body">
        <div class="about__image" use:fadeIn={{ delay: 300 }}>
          <div class="icon">
            <img src="{ sugarCube }" alt="アイコン">
          </div>
        </div>
        <div class="section__textWrap">
          <p class="section__text" use:fadeIn={{ delay: 400 }}>
            はじめまして。<br>
            フロントエンドが大好きな、さとうと申します。
          </p>
          <p class="section__text" use:fadeIn={{ delay: 500 }}>
            Web業界ではデザインとコーディングが分業されていることも多く、これまでは実装業務を主に担当してきました。<br>
            しかし、私はデザインとコーディングはお互いに「フロントエンドをより良いものにするための相乗効果を生むもの」と考えています。<br>
            そのためにも、UI設計から実装まで一貫して手がけられる人間になることを目標としています。
          </p>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="section --partition">
      <div class="section__head" use:fadeIn>
        <h2 class="section__title">SKILLS</h2>
      </div>
      <div class="section__body">
        <h3 class="section__subTitle" use:fadeIn={{ delay: 300 }}>
          HTML / CSS / JavaScript
        </h3>
        <p class="section__text" use:fadeIn={{ delay: 350 }}>
          デザインや仕様に正確に、かつ迅速にコーディングすることを心がけています。<br>
          特に、インタラクション部分を考えたり実装するのが好きです。
        </p>
        <h3 class="section__subTitle" use:fadeIn={{ delay: 400 }}>
          JavaScriptフレームワーク
        </h3>
        <p class="section__text" use:fadeIn={{ delay: 450 }}>
          Nuxt.jsを使用したWebアプリおよびSaaSのフロントエンド開発経験があります。<br>
          Svelte(SvelteKit)とNext.jsは、業務での使用経験はありませんが、個人開発を通じて学習しています。
        </p>
        <h3 class="section__subTitle" use:fadeIn={{ delay: 500 }}>
          CMS
        </h3>
        <p class="section__text" use:fadeIn={{ delay: 550 }}>
          WordPress / Shopify
        </p>
        <h3 class="section__subTitle" use:fadeIn={{ delay: 600 }}>
          DB
        </h3>
        <p class="section__text" use:fadeIn={{ delay: 650 }}>
          Firebase (Realtime Database, Cloud Firestore)
        </p>
        <h3 class="section__subTitle" use:fadeIn={{ delay: 700 }}>
          Webデザイン
        </h3>
        <p class="section__text" use:fadeIn={{ delay: 750 }}>
          デザイン設計から実装までを自ら一貫して手がけられるよう、デザイン基礎やUI/UXについて学んでいます。<br>
          目的やターゲットを明確にし、より質の高いユーザー体験の提供を目指しつつ、機能性やコーディングの拡張性も兼ね備えることを心がけています。
        </p>
      </div>
    </section>

    <!-- PRODUCTS -->
    <section id="products" class="section">
      <div class="section__head" use:fadeIn>
        <h2 class="section__title">PRODUCTS</h2>
      </div>
      <div class="section__body">
        <ul class="cardList">
          <li class="item" use:fadeIn={{ delay: 300 }}>
            <div class="item__image">
              <div class="icon">
                <img src="{ icon_heart }" alt="">
              </div>
            </div>
            <div class="item__textWrap">
              <h3 class="item__title">ありがとカード</h3>
              <p class="item__text">サクッと感謝のメッセージを贈ることができる、サンキューカード作成サイトです。</p>
              <div class="item__link">
                <a href="https://birthday-card-for-you.web.app/" target="_blank" rel="noopener noreferrer" class="item__link-text">サイトへ</a>
              </div>
            </div>
          </li>
          <li class="item" use:fadeIn={{ delay: 400 }}>
            <div class="item__image">
              <div class="icon">
                <img src="{ icon_pin }" alt="">
              </div>
            </div>
            <div class="item__textWrap">
              <h3 class="item__title">Pinme</h3>
              <p class="item__text">コルクボード感覚で画像をまとめられる、Webギャラリーアプリです。</p>
              <div class="item__link --disabled">
                <p class="item__link-text">開発中...</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section">
      <div class="section__head" use:fadeIn>
        <h2 class="section__title">CONTACT</h2>
      </div>
      <div class="section__body">
        <p class="section__text t-align-center mb-0" use:fadeIn={{ delay: 300 }}>
          ご覧いただきありがとうございました。
        </p>
        <p class="section__text t-align-center mb-0" use:fadeIn={{ delay: 400 }}>
          ご質問等ございましたら、<br class="sm"><a href="mailto:satoikumi.14@gmail.com" class="mainLink d-inBlock hover-opacity">メール</a>にてご連絡ください。
        </p>
      </div>
    </section>
  </div>

  <!-- Footer -->
  <footer>
    <div class="footer__inner">
      <p class="copyright color-gray t-align-center">&copy; 2025 sato</p>
    </div>
  </footer>
</div>

<style lang="scss">
  @use '../styles/common/utils' as *;
  @use '../styles/common/includes/keyframe' as *;
  @use 'sass:color';

  /* Navigation */
  .navButton {
    background-color: $color-primary;
    border-radius: 20px 0 0 8px;
    display: flex;
    position: fixed;
    bottom: 5%;
    right: 0;
    transition: transform .3s, background-color .15s, width .15s;
    height: 120px;
    width: 48px;
    z-index: 102;

    .button__inner {
      position: relative;
      height: 100%;
      width: 100%;

      .button__text {
        color: $color-white;
        font-size: 1.2rem;
        letter-spacing: 0.15rem;
        line-height: 1;
        margin: auto;
        position: absolute;
        inset: 0;
        transform: rotate(180deg);
        transition: color .15s, right .15s;
        writing-mode: vertical-rl;
        height: fit-content;
        width: fit-content;

        @include media('sm') {
          font-size: 1.05rem;
        }

        @include media('xs') {
          font-size: 1rem;
        }
      }
    }

    &.hide {
      transform: translateX(100%);
    }

    &.open {
      background-color: $color-white;

      .button__text {
        color: $color-primary;
      }
    }

    @include media('lg') {
      &:hover {
        width: 80px;

        .button__text {
          right: 20px;
        }
      }
    }

    @include media('sm') {
      height: 100px;
      width: 40px;
    }

    @include media('xs') {
      height: 80px;
      width: 28px;
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
    z-index: 101;

    @include media('lg') {
      width: 35vw;
    }

    @include media('xl') {
      width: 30vw;
    }

    &.open {
      transform: translateX(0);
    }

    &__inner {
      padding: 80px;

      @include media('sm') {
        padding: 40px;
      }

      .menu__list {
        margin-bottom: 60px;

        .item {
          width: fit-content;

          &:not(:last-child) {
            margin-bottom: 2.75rem;

            @include media('sm') {
              margin-bottom: 3rem;
            }
          }

          .item__link {
            display: block;
            font-size: 2rem;
            letter-spacing: .15rem;
            padding-bottom: .75rem;
            position: relative;

            @include media('sm') {
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
                height: 3px;
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
          font-size: 1.25rem;
          letter-spacing: .125rem;
          margin-bottom: 1rem;

          @include media('sm') {
            font-size: 1.3rem;
          }
        }

        .icon {
          height: 20px;
          width: 20px;
        }
      }
    }
  }

  .nav__bg {
    background-color: rgb(0 0 0 / .5);
    backdrop-filter: blur(2px);
    margin: auto;
    opacity: 0;
    visibility: hidden;
    position: fixed;
    inset: 0;
    transition: opacity .3s, visibility .3s;
    height: 100vh;
    width: 100vw;
    z-index: 100;

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
      background-color: $color-white;
      background-image: linear-gradient(90deg, $color-secondary 80px, transparent 80px), linear-gradient($color-secondary 80px, transparent 80px);
      background-position: 10px 10px;
      background-repeat: repeat;
      background-size: 160px 160px;
      position: relative;
      height: 100%;
      width: 100%;

      @include media('sm') {
        background-image: linear-gradient(90deg, $color-secondary 40px, transparent 40px), linear-gradient($color-secondary 40px, transparent 40px);
        background-size: 80px 80px;
      }

      .mv__content {
        margin: auto;
        position: absolute;
        inset: 0;
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
          .title__text {
            margin: auto;
            width: fit-content;

            .firstRow {
              margin-left: -8px;

              @include media('sm') {
                margin-left: -6px;
              }
            }

            .secondRow {
              font-size: 5.8rem;

              @include media('xl') {
                font-size: 6.275rem;
              }

              @include media('sm') {
                font-size: 4.4rem;
              }
            }

            .thirdRow {
              margin-left: 4px;

              .mark {
                margin-left: 8px;

                @include media('sm') {
                  margin-left: 4px;
                }
              }
            }

            .bounce {
              animation: bounce .3s ease-in-out;
            }
          }

          .title__subText {
            color: $color-primary;
            font-size: 1.55rem;
            letter-spacing: .175rem;
            margin-top: 20px;
            margin-left: -12px;
            text-align: center;

            @include media('xl') {
              font-size: 1.75rem;
            }

            @include media('sm') {
              font-size: 1.175rem;
              letter-spacing: 0.1rem;
              margin-top: 8px;
              margin-left: -4px;
            }
          }
        }
      }
    }
  }

  /* About */
  #about {
    .about__image .icon {
      margin: auto;
      height: 180px;
      width: 180px;
      border: 1px solid $color-gray;
      border-radius: 50%;
      padding: 1.5rem 1.5rem 2rem;

      @include media('md') {
        padding: 1.25rem 1.25rem 1.75rem;
        height: 160px;
        width: 160px;
      }

      @include media('sm') {
        padding: 1.15rem 1.15rem 1.5rem;
        height: 120px;
        width: 120px;
      }

      img {
        object-fit: contain;
        height: 100%;
      }
    }

    .section__textWrap {
      margin: 40px auto 0;
      width: 75%;

      @include media('xl') {
        width: 70%;
      }

      @include media('md') {
        width: 80%;
      }

      @include media('sm') {
        margin-top: 20px;
        width: 100%;
      }
    }
  }

  /* Contact */
  #contact {
    .mainLink {
      border-bottom: 1px solid color.adjust($text-color-base, $lightness: 20%);
      margin: 0 2px;
      line-height: 1.25;
    }
  }

  /* Footer */
  .footer__inner {
    margin: auto;
    padding: 40px 0 20px;
    position: relative;
    max-width: 960px;
    width: 50%;

    @include media('md') {
      padding: 20px 0 8px;
      width: 80%;
    }

    @include media('sm') {
      padding: 20px 0 8px;
      max-width: 80%;
      width: calc(100% - 40px);
    }

    .copyright {
      font-size: .75rem;
      letter-spacing: .01rem;
    }
  }

</style>
