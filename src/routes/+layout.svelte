<script>
  import { onMount, onDestroy } from 'svelte'

  /* Lenis (イージングスクロール) */
  import Lenis from '@studio-freight/lenis'
  import { lenisStore } from '$lib/stores/lenis'

  onMount(() => {
    const lenis = new Lenis()

    lenisStore.set(lenis)

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisStore.set(null)
    }
  })

  onDestroy(() => {
    lenis?.destroy()
    lenisStore.set(null)
  })
</script>

<slot />
