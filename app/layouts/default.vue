<template>
  <div class="relative font-roboto">
    <NuxtLoadingIndicator />
    <div class="flex flex-col min-h-screen max-w-[1280px] sm:px-4 mx-auto relative">
      <Navbar />
      <div class="flex-1 px-2">
        <slot />
      </div>
    </div>
    <Footer />
    
    <!-- TODO: Update background not to cause hydration issue -->
    <!-- <ClientOnly>
      <BackgroundPinkBubbles />
    </ClientOnly> -->
    <!-- <BackgroundBubbles /> -->
    <!-- <BackgroundSimpleBubbles /> -->
    <BackgroundShiftingBubbles />
  </div>
</template>