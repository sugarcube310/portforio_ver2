<script>
  import Opening from '$lib/components/layout/Opening.svelte'
  import Hero from '$lib/components/home/Hero.svelte'
  import About from '$lib/components/home/About.svelte'
  import Skills from '$lib/components/home/Skills.svelte'
  import Products from '$lib/components/home/Products.svelte'
  import Contact from '$lib/components/home/Contact.svelte'

  let isShowPage = false
</script>

<style lang="scss">
  .container {
    opacity: 0;
    transition: opacity .3s ease-in-out;

    &.show {
      opacity: 1;
    }
  }
</style>

<!-- オープニング -->
<Opening bind:isShowPage />

<div id="top" class="container { isShowPage ? 'show' : '' }">
  <Hero />

  <div class="sectionWrapper">
    <About />
    <Skills />
    <Products />
    <Contact />
  </div>
</div>
