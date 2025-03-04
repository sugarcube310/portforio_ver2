<script>
  import { onMount } from 'svelte'

  let canvas
  let stars = []
  let shootingStars = []
  const starAmount = 500 // 星の表示数を設定

  // 通常星の作成
  function createStar() {
    stars = Array.from({ length: starAmount }, () => ({
      posX: Math.random() * window.innerWidth,
      posY: Math.random() * window.innerHeight,
      size: Math.random() * 2 + 0.25,
      opacity: Math.random() * 0.5 + 0.5,
      animationOffset: Math.random() * Math.PI * 2 // キラキラアニメーション用の設定
    }))
  }

  // 流れ星の作成
  function createShootingStar() {
    const startX = Math.random() * window.innerWidth
    const startY = Math.random() * (window.innerHeight / 2) // 上半分から開始
    const speed = Math.random() * 3 + 1 // 速度をランダムに
    shootingStars.push({
      x: startX,
      y: startY,
      length: Math.random() * 80 + 40, // 星の長さ
      speedX: speed,
      speedY: speed / 2,
      opacity: 1
    })

    // 一定時間後に流れ星を削除
    setTimeout(() => {
      shootingStars.shift()
    }, 2000)
  }

  // 通常星の描画
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

    // 流れ星の描画処理を実行
    drawShootingStars(ctx)

    // アニメーション実行
    requestAnimationFrame((newTime) => drawStars(ctx, newTime))
  }

  // 流れ星の描画
  function drawShootingStars(ctx) {
    shootingStars.forEach((star, index) => {
      ctx.beginPath()

      // 流れ星の尾のグラデーション
      const gradient = ctx.createLinearGradient(star.x, star.y, star.x - star.length, star.y - star.length / 2)
      gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.moveTo(star.x, star.y)
      ctx.lineTo(star.x - star.length, star.y - star.length / 2)
      ctx.stroke()

      // 星の位置を更新
      star.x += star.speedX
      star.y += star.speedY
      star.opacity -= 0.01 // 徐々に消える

      // 画面外に出たら削除
      if (star.opacity <= 0) {
        shootingStars.splice(index, 1)
      }
    })
  }

  // Canvasのセットアップ
  onMount(() => {
    const ctx = canvas.getContext('2d') // canvas要素に描画するコンテキスト
    if (!ctx) return

    // canvas要素のサイズ指定
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    createStar()
    drawStars(ctx, 0)

    // 一定間隔で流れ星を追加
    const shootingStarInterval = setInterval(() => {
      if (shootingStars.length < 3) {
        createShootingStar()
      }
    }, 3000)

    // 画面サイズが変わったらcanvasをリサイズ
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      createStar() // リサイズ時に星を再生成
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearInterval(shootingStarInterval)
    }
  })
</script>

<canvas bind:this={ canvas } class="star-canvas"></canvas>

<style>
  .star-canvas {
    background: linear-gradient(
      to bottom,
      #16466a,
      #256597,
      #3d81a9,
      #6caac4,
      #9dcce0
    );
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
</style>
