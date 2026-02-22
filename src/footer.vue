<script setup>
</script>

<template>
  <footer class="w-full bg-black text-white py-10 px-6 md:px-12">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">

      <div class="flex flex-col items-center md:items-start text-center md:text-left">
        <p class="text-lg font-semibold tracking-wide">ramen resturant</p>
        <p class="text-gray-400 text-sm mt-2">
          © {{ new Date().getFullYear() }} Developed by Adil
        </p>
      </div>

      <div class="flex flex-col items-center md:items-start gap-3">
        <h3 class="text-gray-300 font-medium mb-1 uppercase tracking-wider text-sm">
          Navigation
        </h3>
        <a href="/" class="hover:text-amber-400 transition-colors duration-200">Home</a>
        <a href="/menu" class="hover:text-amber-400 transition-colors duration-200">Menu</a>
        <a href="/#about" class="hover:text-amber-400 transition-colors duration-200">About</a>
        <a href="/reserv" class="hover:text-amber-400 transition-colors duration-200">Reservation</a>
      </div>

      <div class="flex flex-col items-center md:items-start gap-3">
        <h3 class="text-gray-300 font-medium mb-1 uppercase tracking-wider text-sm">
          Follow Us
        </h3>
        <div class="flex flex-col gap-2">
          <a 
            href="https://instagram.com/adilx_977" 
            target="_blank" 
            rel="noopener noreferrer"
            class="hover:text-amber-400 transition-colors duration-200"
          >
            Instagram
          </a>
          <a 
            href="https://threads.net/adilx_977" 
            target="_blank" 
            rel="noopener noreferrer"
            class="hover:text-amber-400 transition-colors duration-200"
          >
            Threads
          </a>
            <a 
                href="https://github.com/CodeAndCofe" 
                target="_blank" 
                rel="noopener noreferrer"
                class="hover:text-amber-400 transition-colors duration-200"
            >
            github
          </a>
        </div>
      </div>

    </div>

    <div class="mt-10 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
      Made with ♥ • Always fresh ingredients • Reservations recommended
    </div>
  </footer>
</template>

<style>

</style>