<script>
  import { onMount, onDestroy } from 'svelte'
  import { anchorLink } from '$lib/actions/anchorLink'

  export let isNavOpen = false
  let isNavButtonShow = false

  let navContainer

  function switchNav() {
    isNavOpen = !isNavOpen
  }

  function onClickOutsideNav(event) {
    if (navContainer && !navContainer.contains(event.target)) {
      isNavOpen = false
    }
  }

  function showNav() {
    const scrollY = window.scrollY
    const maxScroll = 700 // ヒーローエリアが完全に消えるスクロール量

    if (scrollY <= maxScroll) {
      isNavButtonShow = false
    } else { // ヒーローエリアが完全に消えたらナビを表示
      isNavButtonShow = true
    }
  }

  onMount(() => {
    window.addEventListener('scroll', showNav)

    document.addEventListener('click', onClickOutsideNav)
    anchorLink(switchNav)
  })

  onDestroy(() => {
    window.removeEventListener('scroll', showNav)
    document.removeEventListener('click', onClickOutsideNav)
  })
</script>

<style lang="scss">
  @use '../../../styles/includes/variables' as *;
  @use 'sass:color';

  .nav__container {
    background-color: rgb(57 106 169 /.95);
    border-radius: 20px;
    margin: auto;
    opacity: 0;
    position: fixed;
    bottom: 32px;
    left: 0;
    right: 0;
    transform: translateY(60px);
    transition: all .3s;
    height: 40px;
    width: 120px;
    z-index: 102;

    @include media('sm') {
      bottom: 20px;
    }

    &.button-show {
      opacity: 1;
      transform: translateY(0);
    }

    .nav {
      opacity: 0;
      visibility: hidden;
      transition: opacity .3s, visibility .3s;
      height: 100%;

      &__inner {
        padding: 1rem;

        .nav__menu .item {
          font-size: 1.15rem;
          letter-spacing: .1rem;
          opacity: 0;
          transform: translateY(10px);

          &:not(:last-child) {
            margin-bottom: .5rem;
          }
        }
      }
    }

    .button {
      border: none;
      cursor: pointer;
      margin: auto;
      padding: .5rem .7em .5rem 1rem;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 40px;
      width: 100%;
      z-index: 103;

      &__inner {
        gap: .5rem;
      }

      &__text {
        color: $color-white;
        font-size: 1rem;
        letter-spacing: .1rem;
        text-align: center;
        transition: color .3s;
      }

      &__iconWrap {
        background-color: rgb(255 252 244 / .4);
        border-radius: 50%;
        height: 22px;
        width: 22px;

        .icon {
          display: block;
          position: relative;
          transition: transform .3s;
          height: 12px;
          width: 12px;

          &::before,
          &::after {
            content: '';
            background-color: $color-white;
            margin: auto;
            position: absolute;
            inset: 0;
            height: 2px;
            width: 12px;
            transition: transform .3s;
          }

          &::after {
            transform: rotate(90deg);
          }
        }
      }
    }

    &.open {
      height: 240px;
      width: 200px;

      .nav {
        opacity: 1;
        visibility: visible;

        .item {
          animation: fadeInUp .3s forwards;
        }
      }

      .button {
        &__text {
          color: color.adjust($color-white, $blackness: 20%);
        }

        .icon {
          transform: rotate(45deg);
        }
      }
    }
  }
</style>

<div
  bind:this={ navContainer }
  class="nav__container { isNavButtonShow ? 'button-show' : '' } { isNavOpen ? 'open' : '' }"
>
  <nav class="nav">
    <div class="nav__inner">
      <ul class="nav__menu">
        <li class="item" style="animation-delay: .1s;">
          <a href="#about" class="font-accent color-white item__link navLink hover-opacity">ABOUT ME</a>
        </li>
        <li class="item" style="animation-delay: .2s;">
          <a href="#skills" class="font-accent color-white item__link navLink hover-opacity">SKILLS</a>
        </li>
        <li class="item" style="animation-delay: .3s;">
          <a href="#products" class="font-accent color-white item__link navLink hover-opacity">PRODUCTS</a>
        </li>
        <li class="item" style="animation-delay: .4s;">
          <a href="#contact" class="font-accent color-white item__link navLink hover-opacity">CONTACT</a>
        </li>
      </ul>
    </div>
  </nav>
  <button
    class="button"
    on:click={ switchNav }
    aria-label="{ isNavOpen ? 'menu-close' : 'menu-open' }"
  >
    <div class="button__inner d-flex align-center justify-between">
      <p class="button__text font-accent line-height-1">
        { isNavOpen ? 'CLOSE' : 'MENU' }
      </p>
      <div class="button__iconWrap d-flex align-center justify-center hover-opacity">
        <span class="icon"></span>
      </div>
    </div>
  </button>
</div>
