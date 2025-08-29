<template>
  <div class="bg"></div>
</template>

<style scoped>
.bg {
  position: absolute;
  inset: 0;
  background-image: url('~/assets/images/Bubbles.png');
  background-size: cover; /* or "auto 100%" depending on your image */
  background-repeat: no-repeat;
  transition: background-position 0.8s ease;
  z-index: -1;
}
.bg.move-left {
  background-position: -600px 0;
}
.bg.move-right {
  background-position: 600px 0;
}
</style>