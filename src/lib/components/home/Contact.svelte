<script>
  import { fadeIn } from '$lib/actions/fadeIn'
</script>

<style lang="scss">
  @use '../../../styles/includes/variables' as *;
  @use 'sass:color';

  #contact {
    .mainLink {
      border-bottom: 1px solid color.adjust($text-color, $lightness: 20%);
      margin: 0 2px;
      line-height: 1.25;
    }
  }

</style>

<section id="contact" class="section">
  <div class="section__head" use:fadeIn>
    <h2 class="section__title">CONTACT</h2>
  </div>
  <div class="section__body">
    <p class="section__text t-align-center mb-0" use:fadeIn={{ delay: 300 }}>
      ご覧いただきありがとうございました。
    </p>
    <p class="section__text t-align-center mb-0" use:fadeIn={{ delay: 400 }}>
      ご質問等ございましたら、<br class="sm"><a href="mailto:satoikumi.14@gmail.com" class="mainLink d-inBlock hover-opacity">メール</a>にてご連絡ください。
    </p>
  </div>
</section>
