<script setup>
import Footer from "@/footer.vue";
import  Header from "../header.vue"
</script>

<template>
  <Header />
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-12">
    <div class="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8 md:p-10 border border-gray-200">
      
      <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">
        Table Reservation
      </h2>
      <form class="space-y-7">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col">
            <label for="name" class="mb-2 font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="John Doe"
              class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            />
          </div>
          <div class="flex flex-col">
            <label for="email" class="mb-2 font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="your.email@gmail.com"
              class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label for="party-size" class="mb-2 font-medium text-gray-700">
            Reservation for
          </label>
          <select
            id="party-size"
            name="partySize"
            required
            class="px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
          >
            <option value="" disabled selected hidden>Choose party size</option>
            <option value="1">Just me (1 person)</option>
            <option value="2">Couple / Date (2 people)</option>
            <option value="3-4">Small group (3–4 people)</option>
            <option value="5-6">Family table (5–6 people)</option>
            <option value="7+">Larger group (7+ people)</option>
          </select>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex flex-col">
            <label for="date" class="mb-2 font-medium text-gray-700">Date</label>
            <input
              id="date"
              type="date"
              name="date"
              required
              class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            />
          </div>
          <div class="flex flex-col">
            <label for="time" class="mb-2 font-medium text-gray-700">Time</label>
            <input
              id="time"
              type="time"
              name="time"
              required
              class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label for="notes" class="mb-2 font-medium text-gray-700">
            Special requests / notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows="3"
            placeholder="e.g. window seat, birthday, allergy info..."
            class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition resize-y"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-md transition duration-200 transform hover:scale-[1.01] active:scale-[0.98]"
        >
          Submit Reservation
        </button>
      </form>
      <p class="text-center text-sm text-gray-500 mt-6">
        We’ll confirm your booking via email within 24 hours.
      </p>
    </div>
  </div>
  <Footer />
</template>

<style>

</style>