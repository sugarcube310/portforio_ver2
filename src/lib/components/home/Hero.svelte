<style lang="scss">
  @use '../../../styles/includes/variables' as *;

  #hero {
    height: 100vh;
    width: 100%;

    .hero__inner {
      background-color: white;
      background-image: linear-gradient(90deg, $color-secondary 80px, transparent 80px), linear-gradient($color-secondary 80px, transparent 80px);
      background-position: 10px 10px;
      background-repeat: repeat;
      background-size: 160px 160px;
      position: relative;
      height: 100%;
      width: 100%;

      @include media('sm') {
        background-image: linear-gradient(90deg, $color-secondary 40px, transparent 40px), linear-gradient($color-secondary 40px, transparent 40px);
        background-size: 80px 80px;
      }

      // title
      .hero__title {
        margin: auto;
        position: absolute;
        inset: 0;
        height: fit-content;
        width: fit-content;

        @include media ('sm') {
          display: flex;
          flex-direction: column;
          padding: 0;
          top: 0;
        }

        &-text {
          margin: auto;
          width: fit-content;

          .firstRow {
            margin-left: -8px;

            @include media('sm') {
              margin-left: -6px;
            }
          }

          .secondRow {
            font-size: 5.8rem;

            @include media('xl') {
              font-size: 6.275rem;
            }

            @include media('sm') {
              font-size: 4.4rem;
            }
          }

          .thirdRow {
            margin-left: 4px;

            .mark {
              margin-left: 8px;

              @include media('sm') {
                margin-left: 4px;
              }
            }
          }

          .bounce {
            animation: bounce .3s ease-in-out;
          }
        }

        &-subText {
          color: $color-primary;
          font-size: 1.55rem;
          letter-spacing: .175rem;
          margin-top: 20px;
          margin-left: -12px;
          text-align: center;

          @include media('xl') {
            font-size: 1.75rem;
          }

          @include media('sm') {
            font-size: 1.175rem;
            letter-spacing: 0.1rem;
            margin-top: 8px;
            margin-left: -4px;
          }
        }
      }
    }
  }
</style>

<section id="hero">
  <div class="hero__inner">
    <div class="hero__title">
      <h1 class="hero__title-text">
        <span class="d-block firstRow">
          <span class="d-inBlock bounce">W</span><span class="d-inBlock bounce" style="animation-delay: .1s">R</span><span class="d-inBlock bounce" style="animation-delay: .2s">I</span><span class="d-inBlock bounce" style="animation-delay: .3s">T</span><span class="d-inBlock bounce" style="animation-delay: .4s">E</span>
        </span>
        <span class="d-block secondRow">
          <span class="d-inBlock bounce" style="animation-delay: .5s">M</span><span class="d-inBlock bounce" style="animation-delay: .6s">O</span><span class="d-inBlock bounce" style="animation-delay: .7s">R</span><span class="d-inBlock bounce" style="animation-delay: .8s">E</span>
        </span>
        <span class="d-block thirdRow">
          <span class="d-inBlock bounce" style="animation-delay: .9s">C</span><span class="d-inBlock bounce" style="animation-delay: 1s">O</span><span class="d-inBlock bounce" style="animation-delay: 1.1s">D</span><span class="d-inBlock bounce" style="animation-delay: 1.2s">E</span><span class="d-inBlock bounce mark" style="animation-delay: 1.3s">!</span>
        </span>
      </h1>
      <p class="hero__title-subText weight-b">sato's portforio website</p>
    </div>
  </div>
</section>
