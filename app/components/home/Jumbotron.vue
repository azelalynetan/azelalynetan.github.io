<template>
  <div
    class="
      grid gap-4
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
    "
  >
    <div class="order-1 md:order-none md:col-span-1 md:flex md:justify-between p-4">
      <HomeJumbotronIntro />
    </div>
    <div class="hidden md:block lg:hidden order-2 lg:order-2"></div>
    <div class="order-last md:order-4 md:row-span-2 lg:row-span-1">
      <HomeJumbotronCharacterImg />
    </div>
    <div class="order-2 md:order-3 lg:order-last md:flex md:justify-end lg:mt-auto p-4">
      <HomeJumbotronDescription />
    </div>
    <div class="p-4 block lg:hidden order-3 md:order-last">
      <p class="uppercase font-bold mb-2">Find me on:</p>
      <UiSocials />
    </div>
  </div>
</template>