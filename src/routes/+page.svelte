<script>
  import Opening from '$lib/components/layout/Opening.svelte'
  import Hero from '$lib/components/home/Hero.svelte'
  import About from '$lib/components/home/About.svelte'
  import Skills from '$lib/components/home/Skills.svelte'
  import Products from '$lib/components/home/Products.svelte'
  import Contact from '$lib/components/home/Contact.svelte'

  // コンテンツ表示制御
  let isContentsDisplay = false
</script>

<!-- オープニング -->
<Opening bind:isContentsDisplay />

<div id="top" class="container">
  <Hero isContentsDisplay={ isContentsDisplay } />
  <div class="sectionWrapper">
    <About />
    <Skills />
    <Products />
    <Contact />
  </div>
</div>
