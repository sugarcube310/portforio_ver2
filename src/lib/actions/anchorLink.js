/* ---------------------------------------------------------------------------------
  アンカーリンク (aタグ)

  【使用方法】
  anchorLink.jsをインポートするだけ！
  import { anchorLink } from '$lib/actions/anchorLink'
--------------------------------------------------------------------------------- */

export function anchorLink(closeNavCallback) {
  const anchorLinks = document.querySelectorAll('a[href^="#"]')

  anchorLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()

      const targetId = link.hash
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top

        function scroll() {
          window.scrollTo({
            top: targetOffsetTop,
            behavior: 'smooth'
          })
        }

        if (link.classList.contains('navLink')) {
          // ナビを閉じる処理 (Navigation.svelteの関数を実行)
          if (closeNavCallback) {
            closeNavCallback()
          }

          setTimeout(() => {
            scroll()
          }, 300) // ナビゲーション開閉アニメーションの時間

        } else {
          scroll()
        }
      }
    })
  })
}
