<script setup>
import Footer from "@/footer.vue";
import  Header from "../header.vue"
</script>

<template>
    <Header></Header>
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16 md:mb-20">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Get in Touch
        </h1>
        <div class="w-16 h-1 bg-amber-600 mx-auto mt-6 rounded-full"></div>
        <p class="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We’d love to hear from you — whether it’s a reservation question, feedback, or just saying hello.
        </p>
      </div>
      <div class="grid md:grid-cols-2 gap-12 md:gap-16">
        <div class="space-y-10">
          <div>
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Visit Us</h2>
            <div class="space-y-4 text-gray-700">
              <p class="flex items-start">
                <span class="text-amber-600 text-xl mr-4 mt-1">📍</span>
                <span>
                  123 Ramen Street<br>
                  Shibuya, Tokyo 150-0002<br>
                  (Near Shibuya Crossing – look for the red lantern!)
                </span>
              </p>

              <p class="flex items-start">
                <span class="text-amber-600 text-xl mr-4 mt-1">⏰</span>
                <span>
                  Monday – Sunday<br>
                  11:30 AM – 10:00 PM<br>
                  (Last order at 9:30 PM)
                </span>
              </p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">Reach Out</h2>
            <div class="space-y-4 text-gray-700">
              <p class="flex items-center">
                <span class="text-amber-600 text-xl mr-4">📞</span>
                +81 3-1234-5678
              </p>
              <p class="flex items-center">
                <span class="text-amber-600 text-xl mr-4">✉️</span>
                hello@yourramenhouse.com
              </p>
              <p class="flex items-center">
                <span class="text-amber-600 text-xl mr-4">📱</span>
                @yourramenhouse (Instagram & Threads)
              </p>
            </div>
          </div>
          <div class="pt-6">
            <h3 class="text-xl font-medium text-gray-800 mb-4">Quick Message</h3>
            <form class="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <textarea
                rows="4"
                placeholder="How can we help you today?"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 resize-y"
              ></textarea>
              <button
                class="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition shadow-md hover:shadow-lg"
               >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div class="space-y-8">
          <div class="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.squarespace-cdn.com/content/v1/63194bccc0e951668ec2e822/1711388594068-TKQD5F96N13F8NPI98VF/akahoshi-ramen-dining-area-siren-betty-design.jpg"
              alt="Cozy ramen restaurant interior with warm wooden booths and ambient lighting"
              class="w-full h-64 md:h-96 object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div class="rounded-xl overflow-hidden shadow-xl bg-gray-200 h-64 md:h-96 flex items-center justify-center text-gray-500">
            <div class="text-center p-8">
              <p class="text-2xl mb-4">📍 Our Location</p>
              <p class="text-lg">Interactive map coming soon!</p>
            </div>
          </div>
          <p class="text-center text-gray-600 italic">
            We’re just a short walk from the station — follow the aroma of simmering broth!
          </p>
        </div>
      </div>

      <div class="mt-16 text-center text-gray-600">
        <p>We usually reply within a few hours during opening times.</p>
        <p class="mt-2">Looking forward to welcoming you soon 🍜</p>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
<style>

</style>