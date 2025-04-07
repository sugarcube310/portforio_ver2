<style lang="scss">
  @use '../../../styles/includes/variables' as *;

  .footer__inner {
    padding: 40px 0 80px;

    @include media('md') {
      padding-bottom: 64px;
    }

    @include media('sm') {
      padding: 20px 0 80px;
    }

    .copyright {
      font-size: .75rem;
      letter-spacing: .0025rem;
    }
  }
</style>

<footer>
  <div class="footer__inner">
    <p class="copyright color-gray t-align-center">&copy; 2025 sato</p>
  </div>
</footer>
