<template>
  <div class="flex flex-col sm:justify-around">
    <div class="sm:mt-10 mb-6">
      <div class="mb-8 flex flex-col justify-center md:block md:justify-start items-center">
        <p class="font-montserrat">Hello, I am</p>
        <div class="flex items-center justify-center md:justify-start gap-2">
          <div class="border-t-8 border-black w-12"></div>
          <span class="text-6xl sm:text-7xl font-bold font-nunito">Azel</span>
          <div class="border-t-8 border-black w-12"></div>
        </div>
      </div>
      <p class="mb-2">
        I enjoy creating responsive, user-friendly websites and learning along the way.
      </p>
    </div>
    <div class="hidden lg:block">
      <p class="uppercase font-bold mb-2">Find me on:</p>
      <UiSocials />
    </div>
  </div>
</template>