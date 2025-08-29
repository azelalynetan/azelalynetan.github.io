<template>
  <div class="mx-auto relative w-full h-full overflow-hidden">
    <img src="~/assets/images/character-blank.png" alt="Character" class="hover-img" />
    <div 
      class="
        icon-link absolute bottom-0 mb-[60px] lg:mb-[20px] xl:mb-[50px] flex
        h-[80%] w-full inset-x-0
      "
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <a href="/pdf/CV.pdf" target="_blank" 
        class="
          mx-auto mt-auto xxs:mb-[30px] xs:mb-[50px] sm:mb-[90px] lg:mb-[30px]
          flex flex-col gap-2 text-center text-2xl xxs:text-3xl xl:text-4xl 
          text-[#3c3233] hover:text-brand-darkPink
        "
      >
        <span class="font-bold">
          Resume
        </span>
        <Icon name="material-symbols:download" class="text-4xl lg:text-7xl mx-auto" />
        <span class="text-sm underline underline-offset-2 decoration-dashed">Click to download</span>
      </a>
    </div>
  </div>
</template>

<script setup>
const isHovered = ref(false)
</script>

<style scoped>
.icon-link {
  /* position: absolute; */
  /* bottom: 20px; */
  /* left: 100px; */
  /* height: 230px; */
  /* width: 200px; */
  font-style: oblique 10deg;
  transform: perspective(600px) rotateX(25deg);
}
</style>