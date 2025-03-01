<script>
  import { onMount } from 'svelte'

  let canvas
  let stars = []
  const starAmount = 600 // 星の表示数を設定

  // 星要素を作成
  function createStars() {
    stars = Array.from({ length: starAmount }, () => ({
      posX: Math.random() * window.innerWidth,
      posY: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 0.25,
      opacity: Math.random() * 0.5 + 0.5,
      animationOffset: Math.random() * Math.PI * 2 // キラキラアニメーション用の設定
    }))
  }

  // アニメーション描画
  function drawStars(ctx, time) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    stars.forEach(star => {
      ctx.beginPath()

      // キラキラアニメーション
      const scale = 0.5 + Math.sin(time / 500 + star.animationOffset) * 0.4
      const opacity = 0.3 + Math.sin(time / 500 + star.animationOffset) * 0.6

      // ふんわり光るグラデーション
      const gradient = ctx.createRadialGradient(
        star.posX, star.posY, 0,
        star.posX, star.posY, star.size * 2 * scale
      )
      gradient.addColorStop(0, `rgb(255 255 255 / ${ star.opacity })`)
      gradient.addColorStop(1, 'rgb(255 255 255 / 0)')

      ctx.fillStyle = gradient
      ctx.arc(star.posX, star.posY, star.size * 4, 0, Math.PI * 2)
      ctx.fill()
    })

    // アニメーション実行
    requestAnimationFrame((newTime) => drawStars(ctx, newTime))
  }

  // Canvasのセットアップ
  onMount(() => {
    const ctx = canvas.getContext('2d') // canvas要素に描画するコンテキスト
    if (!ctx) return

    // canvas要素のサイズ指定
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    createStars()
    drawStars(ctx, 0)

    // 画面サイズが変わったらcanvasをリサイズ
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      createStars() // リサイズ時に星も再生成
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })
</script>

<canvas bind:this={ canvas } class="star-canvas"></canvas>

<style>
  .star-canvas {
    background: linear-gradient(
      to bottom,
      #16466a,
      #256597,
      #4e96c0,
      #7eb6ce,
      #a7d6ea
    );
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
</style>
