<header>
  <nav>
    <button class="circle transparent">
      <i>menu</i>
    </button>
    <h4>Aftermarketer</h4>
  </nav>
</header>

<main class="responsive">
  <div id="locate-shop">
    <h6>Locate Repair Shops</h6>
    <p>
      Need something fixed? We can match you with the best repair shop in your
      area.
    </p>
    <div class="action">
      <button>Go to Maps <i>map</i></button>
    </div>
  </div>

  <div id="repairability-assistant">
    <h6>
      Repairability Assistant
      <span class="badge round primary">AI</span>
    </h6>
    <p>
      Get instant repairability scores for your device. We'll tell you how easy
      it is to repair your device and how much it will cost.
    </p>
    <div class="action">
      <button>Get Started <i>arrow_forward</i></button>
    </div>
  </div>
</main>

<style lang="scss">
  header {
    --surface: #aee2ff;
    margin: 1.25em 0.75em;

    nav {
      min-height: 3.5em;
    }

    h4 {
      flex: 1;
      font-size: 1.5em;
    }

    button.wrench {
      background-color: white !important;

      i {
        ---size: 2.25em;
        margin-left: 1em !important;
        font-variation-settings: "FILL" 1;
      }
    }
  }

  main {
    --surface: #eaf6f9;
    --primary: #66a4cc;

    overflow: visible;
    margin: 0;
    padding: 0;

    & > div {
      border-top: 1px solid #0005;
      border-radius: 0;
      padding: 1.5em 1em;
    }
  }

  .action {
    display: flex;
    justify-content: center;

    margin-top: 1.25em;

    button {
      margin: 0;
    }
  }

  #locate-shop {
  }

  #repairability-assistant {
    h6 span.badge {
      position: relative;
      transform: none;
      margin: 0 0.5em;
    }
  }
</style>
