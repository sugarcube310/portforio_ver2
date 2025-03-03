/* ---------------------------------------------------------------------------------
  要素のフェードイン表示 (IntersectionObserver)

  【設定】
  threshold: 発火タイミング (0.3 => 要素が30%見えたら発火)
  delay: 発火までの遅延時間
  duration: フェードインにかける時間

  【使用方法】
  1. fadeIn.jsをインポート
  import { fadeIn } from '$lib/actions/fadeIn'

  2. コンポーネントで対象要素を設定
  <section use:fadeIn></section>
  <section use:fadeIn={{ threshold: 0.5, delay: 300, duration: 600 }}></section>
--------------------------------------------------------------------------------- */

export function fadeIn(node, { threshold = 0.3, delay = 0, duration = 300 } = {}) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // フェードイン表示
        node.style.transition = `opacity ${ duration }ms ease-out ${ delay }ms, transform ${ duration }ms ease-out ${ delay }ms`;
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';

        // 一度発火したら監視を解除
        observer.unobserve(node)
      }
    },
    { threshold }
  )

  // 初期状態では対象要素を隠す
  node.style.opacity = '0'
  node.style.transform = 'translateY(20px)'

  // 対象要素を監視
  observer.observe(node)

  return {
    destroy() {
      observer.disconnect()
    }
  }
}
