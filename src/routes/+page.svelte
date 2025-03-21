<script>
  import { onMount } from 'svelte'

  import Opening from '$lib/components/layout/Opening.svelte'
  import Hero from '$lib/components/home/Hero.svelte'
  import About from '$lib/components/home/About.svelte'
  import Skills from '$lib/components/home/Skills.svelte'
  import Products from '$lib/components/home/Products.svelte'
  import Contact from '$lib/components/home/Contact.svelte'

  // オープニングを表示したかどうかを管理
  let hasOpeningPlayed = false

  // ページコンテンツ表示制御
  let isContentsDisplay = false

  onMount(() => {
    if (sessionStorage.getItem('openingPlayed')) {
      hasOpeningPlayed = true
    } else {
      hasOpeningPlayed = false
    }
  })
</script>

<style lang="scss">
  .container {
    opacity: 0;
    visibility: hidden;
    transition: opacity 1s ease-in-out, visibility 1s ease-in-out;

    &.show {
      opacity: 1;
      visibility: visible;
    }
  }
</style>

<!-- オープニング -->
<Opening bind:isContentsDisplay />

<div id="top" class="container { isContentsDisplay ? 'show' : '' }">
  <Hero openingPlayed={ hasOpeningPlayed } />
  <div class="sectionWrapper">
    <About />
    <Skills />
    <Products />
    <Contact />
  </div>
</div>
