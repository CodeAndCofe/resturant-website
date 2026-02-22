<style>

</style>


<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">

      <div class="text-center mb-16 md:mb-20">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
          About Our Ramen House
        </h1>
        <div class="w-16 h-1 bg-amber-600 mx-auto mt-6 rounded-full"></div>
        <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We don’t just serve ramen. We tell stories — one warm bowl at a time.
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div class="space-y-8">
          <div>
            <h2 class="text-3xl font-semibold text-gray-800 mb-4">
              Born from passion
            </h2>
            <p class="text-gray-600 leading-relaxed">
              It all started in a small kitchen in 2018 when our founder couldn’t stop thinking about the perfect tonkotsu broth — rich, milky, deep, and full of soul. After hundreds of test batches (and many very happy neighbors), the recipe was born.
            </p>
          </div>

          <div>
            <h2 class="text-3xl font-semibold text-gray-800 mb-4">
              What makes us different
            </h2>
            <ul class="space-y-4 text-gray-600">
              <li class="flex items-start">
                <span class="text-amber-600 text-xl mr-3">•</span>
                <span>Broth simmered 18–24 hours — never rushed</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-600 text-xl mr-3">•</span>
                <span>Fresh, hand-made noodles every morning</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-600 text-xl mr-3">•</span>
                <span>Only seasonal & high-quality ingredients</span>
              </li>
              <li class="flex items-start">
                <span class="text-amber-600 text-xl mr-3">•</span>
                <span>Our tare (sauce base) is our family secret — guarded since day one</span>
              </li>
            </ul>
          </div>

          <p class="text-gray-600 italic pt-4 border-t border-gray-100">
            “Good ramen isn’t just food. It’s comfort, memory, and care in every spoonful.”
          </p>
        </div>

        <div class="relative rounded-xl overflow-hidden shadow-xl">
          <img
            src="https://imgs.search.brave.com/8VcYzOcOAIC8o5gNdz9WS8yDQ4BZQKqrHbkGIvb_wLM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hbmltZS1pbnNw/aXJlZC1jdWxpbmFy/eS1nb3VybWV0LXJl/c3RhdXJhbnQtc2V0/dGluZ185OTQ3NjQt/MTYwMTgyLmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA"
            alt="Chef preparing ramen with deep care"
            class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
            <p class="text-white text-lg font-medium">
              Every bowl starts with respect for the craft
            </p>
          </div>
        </div>
      </div>

      <div class="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div class="p-8 bg-gray-50 rounded-xl">
          <div class="text-5xl text-amber-600 mb-4">18+</div>
          <h3 class="text-xl font-semibold text-gray-800">Hours of broth</h3>
          <p class="mt-3 text-gray-600">That’s how long we simmer — every single day</p>
        </div>

        <div class="p-8 bg-gray-50 rounded-xl">
          <div class="text-5xl text-amber-600 mb-4">100%</div>
          <h3 class="text-xl font-semibold text-gray-800">Handmade</h3>
          <p class="mt-3 text-gray-600">Noodles, chashu, menma — made fresh in-house</p>
        </div>

        <div class="p-8 bg-gray-50 rounded-xl">
          <div class="text-5xl text-amber-600 mb-4">Since</div>
          <h3 class="text-xl font-semibold text-gray-800">2018</h3>
          <p class="mt-3 text-gray-600">Still cooking with the same love</p>
        </div>
      </div>

      <div class="mt-16 text-center">
        <router-link
          to="/reserv"
          class="inline-block px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:shadow-lg transform hover:-translate-y-1"
        >
          Reserve Your Table Today
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>