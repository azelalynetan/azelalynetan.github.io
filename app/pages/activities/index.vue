<template>
  <div>
    <div class="text-center mb-10">
      <h1 class="font-montserrat font-bold text-3xl mb-4">My Activities</h1>
      <p>
        Showcasing my tech-related activities beyond work — 
        from writing and community engagement to continuous learning. 
      </p>
      <p>
        Some of these were originally published on <a href="https://devbits.ph" target="_blank" rel="noopener noreferrer" class="">Devbits.ph</a>.
      </p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-[1fr_350px] mb-16">
      <div class="border-brand-darkPink border-2 rounded-md p-4 sm:px-14 sm:py-10 bg-white">
        <ActivitiesCardList />
      </div>
      <div class="">
        <!-- <div>Sidebar</div> -->
      </div>
    </div>
  </div>
</template>
