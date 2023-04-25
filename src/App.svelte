<script lang="ts">
  import "beercss";
  import "#/styles/google-pixel.scss";
  import "#/styles/fonts.css";

  import Screen from "#/Screen.svelte";

  let message = "Hello, 世界!";
</script>

<div class="device-box">
  <div class="device device-google-pixel">
    <div class="device-frame">
      <div class="device-screen">
        <Screen />
      </div>
    </div>
    <div class="device-sensors" />
    <!-- <div class="device-stripe" /> -->
    <div class="device-header" />
    <div class="device-btns" />
    <div class="device-power" />
  </div>
</div>

<style global lang="scss">
</style>
