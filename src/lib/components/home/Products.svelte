<script>
  import { fadeIn } from '$lib/actions/fadeIn'

  import icon_heart from '$lib/assets/icons/icon_heart.png'
  import icon_pin from '$lib/assets/icons/icon_pin.png'
</script>

<section id="products" class="section">
  <div class="section__head" use:fadeIn>
    <h2 class="section__title">PRODUCTS</h2>
  </div>
  <div class="section__body">
    <ul class="cardList">
      <li class="cardList__item" use:fadeIn={{ delay: 300 }}>
        <div class="cardList__item-image">
          <div class="icon">
            <img src="{ icon_heart }" alt="">
          </div>
        </div>
        <div class="cardList__item-textWrap">
          <h3 class="cardList__item-title">
            バースデーカード
          </h3>
          <p class="cardList__item-text">
            サクッとお誕生日メッセージを贈ることができる、バースデーカード作成サイトです。
          </p>
          <div class="cardList__item-link">
            <a href="https://birthday-card-for-you.web.app/" target="_blank" rel="noopener noreferrer" class="cardList__item-linkText">
              サイトへ
            </a>
          </div>
        </div>
      </li>
      <li class="cardList__item" use:fadeIn={{ delay: 400 }}>
        <div class="cardList__item-image">
          <div class="icon">
            <img src="{ icon_pin }" alt="">
          </div>
        </div>
        <div class="cardList__item-textWrap">
          <h3 class="cardList__item-title">
            Pinme
          </h3>
          <p class="cardList__item-text">
            コルクボード感覚で画像をまとめられる、Webギャラリーアプリです。
          </p>
          <div class="cardList__item-link --disabled">
            <p class="cardList__item-linkText">
              開発中...
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</section>
