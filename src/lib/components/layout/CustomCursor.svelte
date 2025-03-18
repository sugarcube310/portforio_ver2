<script>
  import { onMount } from 'svelte'
  import { writable } from 'svelte/store'

  // ナビの開閉状態を取得
  export let openNav

  // カーソルの初期位置 (ロード直後に見えない位置にいるように調整)
  const position = writable({ x: -20, y: -20 })

  // ホバー状態管理
  const isHovering = writable(false)

  onMount(() => {
    // マウスカーソル追従
    const updateCursor = (e) => {
      position.set({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateCursor)

    // ホバー時表示切替え
    const handleHover = (e) => {
      if (e.target.closest('a') || e.target.closest('button')) { // リンクとボタンをホバー対象にする
        isHovering.set(true)
      } else {
        isHovering.set(false)
      }
    }
    window.addEventListener('mouseover', handleHover)
    window.addEventListener('mouseout', handleHover)

    // クリーンアップ
    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('mouseover', handleHover)
      window.removeEventListener('mouseout', handleHover)
    }
  })
</script>

<div
  class="cursor { $isHovering ? 'hover' : '' }"
  class:onNav={ openNav }
  style="top: { $position.y }px; left: { $position.x }px;"
>
</div>

<style lang="scss">
  @use '../../../styles/includes/variables' as *;

  @include media ('lg') {
    .cursor {
      background-color: rgba($color-primary, .5);
      border-radius: 50%;
      opacity: 1;
      pointer-events: none;
      position: fixed;
      transform: translate(-50%, -50%);
      transition: background-color .1s, transform .1s, height .1s, width .1s ease-out;
      height: 20px;
      width: 20px;
      z-index: 999;

      &.hover {
        background-color: rgba($color-accent, .5);
        height: 40px;
        width: 40px;
      }

      &.onNav {
        background-color: rgba($color-accent, .5);
      }
    }
  }
</style>
