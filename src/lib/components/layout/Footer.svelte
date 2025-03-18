<style lang="scss">
  @use '../../../styles/includes/variables' as *;

  .footer__inner {
    margin: auto;
    padding: 40px 0 20px;
    position: relative;
    max-width: 960px;
    width: 50%;

    @include media('md') {
      padding: 20px 0 8px;
      width: 80%;
    }

    @include media('sm') {
      padding: 20px 0 8px;
      max-width: 80%;
      width: calc(100% - 40px);
    }

    .copyright {
      font-size: .75rem;
      letter-spacing: .01rem;
    }
  }
</style>

<footer>
  <div class="footer__inner">
    <p class="copyright color-gray t-align-center">&copy; 2025 sato</p>
  </div>
</footer>
