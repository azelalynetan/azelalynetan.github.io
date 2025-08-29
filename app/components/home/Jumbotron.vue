<template>
  <div
    class="
      grid gap-4
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
    "
  >
    <div class="order-1 md:order-none md:col-span-1 md:row-span-2 md:flex md:justify-between p-4">
      <HomeJumbotronIntro />
    </div>
    
    <div class="order-3 md:order-none md:row-span-2">
      <HomeJumbotronCharacterImg />
    </div>
    <div class="order-2 md:order-none md:row-span-2 md:flex md:justify-end md:mt-auto p-4">
      <HomeJumbotronDescription />
    </div>
    <div class="p-4 block lg:hidden order-last sm:order-none">
      <p class="uppercase font-bold mb-2">Find me on:</p>
      <UiSocials />
    </div>
  </div>
</template>