<script>
  import { onMount } from 'svelte'
  import { anchorLink } from '$lib/actions/anchorLink'

  export let isNavOpen = false

  function closeNav() {
    isNavOpen = false
  }

  function switchNav() {
    isNavOpen = !isNavOpen
  }

  onMount(() => {
    anchorLink(switchNav)
  })
</script>

<style lang="scss">
  @use '../../../styles/includes/variables' as *;

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
        color: white;
        font-size: 1.2rem;
        letter-spacing: 0.15rem;
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

    &.open {
      background-color: white;

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

      .nav__menu .item {
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
              background-color: white;
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
</style>

<button
  class="navButton"
  class:open={ isNavOpen }
  on:click={ switchNav }
>
  <div class="button__inner d-flex align-center justify-center">
    <p class="button__text font-family-accent weight-b line-height-1">
      { isNavOpen ? 'CLOSE' : 'MENU' }
    </p>
  </div>
</button>

<nav
  class="nav"
  class:open={ isNavOpen }
>
  <div class="nav__inner">
    <ul class="nav__menu">
      <li class="item">
        <a href="#about" class="font-family-accent color-white item__link navLink">ABOUT ME</a>
      </li>
      <li class="item">
        <a href="#skills" class="font-family-accent color-white item__link navLink">SKILLS</a>
      </li>
      <li class="item">
        <a href="#products" class="font-family-accent color-white item__link navLink">PRODUCTS</a>
      </li>
      <li class="item">
        <a href="#contact" class="font-family-accent color-white item__link navLink">CONTACT</a>
      </li>
    </ul>
  </div>
</nav>

<div
  class="nav__bg"
  aria-hidden="true"
  class:open={ isNavOpen }
  on:click={ switchNav }
></div>
