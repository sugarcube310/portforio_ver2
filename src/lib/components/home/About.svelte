<script>
  import { fadeIn } from '$lib/actions/fadeIn'

  import sugarCube from '$lib/assets/icons/sugarcube.png'
</script>

<style lang="scss">
  @use '../../../styles/includes/variables' as *;

  #about {
    .about__image .icon {
      background-color: rgb(255 254 250 /.5);
      border: 1px solid $color-gray;
      border-radius: 50%;
      margin: auto;
      padding: 1.5rem 1.5rem 2rem;
      height: 180px;
      width: 180px;

      @include media('md') {
        padding: 1.25rem 1.25rem 1.75rem;
        height: 160px;
        width: 160px;
      }

      @include media('sm') {
        padding: 1.15rem 1.15rem 1.5rem;
        height: 120px;
        width: 120px;
      }

      img {
        object-fit: contain;
        height: 100%;
      }
    }

    .about__textWrap {
      margin: 40px auto 0;
      width: 80%;

      @include media('md') {
        width: 70%;
      }

      @include media('sm') {
        margin-top: 20px;
        width: 100%;
      }
    }
  }
</style>

<section id="about" class="section --partition">
  <div class="section__head" use:fadeIn>
    <h2 class="section__title">ABOUT ME</h2>
  </div>
  <div class="section__body">
    <div class="about__image" use:fadeIn={{ delay: 300 }}>
      <div class="icon">
        <img src="{ sugarCube }" alt="アイコン">
      </div>
    </div>
    <div class="about__textWrap">
      <p class="section__text" use:fadeIn={{ delay: 400 }}>
        はじめまして。<br>
        フロントエンドが大好きな、さとうと申します。
      </p>
      <p class="section__text" use:fadeIn={{ delay: 500 }}>
        Web業界ではデザインとコーディングが分業されていることも多く、これまでは実装業務を主に担当してきました。<br>
        しかし、私はデザインとコーディングはお互いに「フロントエンドをより良いものにするための相乗効果を生むもの」と考えています。<br>
        そのためにも、UI設計から実装まで一貫して手がけられる人間になることを目標としています。
      </p>
    </div>
  </div>
</section>
