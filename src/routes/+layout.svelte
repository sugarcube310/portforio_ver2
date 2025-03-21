<script>
  import { onMount, onDestroy } from 'svelte'

  import Lenis from '@studio-freight/lenis'
  import { lenisStore } from '$lib/stores/lenis'

  import '../styles/app.scss'
  import Footer from '$lib/components/layout/Footer.svelte'
  import Navigation from '$lib/components/layout/Navigation.svelte'

  /* ナビゲーションの開閉状態を取得 */
  let isNavOpen = false

  onMount(() => {
    /* Lenis初期化 */
    if (typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        lerp: 0.05
      })
      lenisStore.set(lenis)

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }

    return () => {
      lenis.destroy()
      lenisStore.set(null)
    }
  })

  onDestroy(() => {
    lenisStore.set(null)
  })
</script>

<main>
  <slot />
  <Footer />
</main>

<Navigation bind:isNavOpen />
