<script setup>
import { ref, onMounted } from 'vue'
import Header from '../header.vue'
import Footer from '@/footer.vue'

const categories = ref([])
const meals = ref([])
const selectedCategory = ref('Seafood')      // default
const isLoading = ref(false)
const error = ref(null)

const baseUrl = 'https://www.themealdb.com/api/json/v1/1'
const categoryUrl = `${baseUrl}/categories.php`
const mealsUrl = (cat) => `${baseUrl}/filter.php?c=${cat}`

async function loadCategories() {
  try {
    const res = await fetch(categoryUrl)
    if (!res.ok) throw new Error('Failed to load categories')
    const data = await res.json()
    categories.value = data.categories || []
  } catch (err) {
    error.value = err.message
    console.error(err)
  }
}

async function loadMeals(category) {
  isLoading.value = true
  error.value = null
  
  try {
    const res = await fetch(mealsUrl(category))
    if (!res.ok) throw new Error('Failed to load meals')
    const data = await res.json()
    meals.value = data.meals || []
  } catch (err) {
    error.value = err.message
    console.error(err)
  } finally {
    isLoading.value = false
  }
}

function selectCategory(catName) {
  selectedCategory.value = catName
  loadMeals(catName)
}

onMounted(() => {
  loadCategories()
  loadMeals(selectedCategory.value)
})
</script>

<template>
  <Header />
  <div class="min-h-screen bg-gray-50 py-10 px-4">
    <div class="max-w-5xl mx-auto mb-10">
      <div class="flex flex-wrap gap-3 justify-center">
        <button
          v-for="cat in categories"
          :key="cat.idCategory"
          @click="selectCategory(cat.strCategory)"
          :class="[
            'px-5 py-2 rounded-full text-sm font-medium transition',
            selectedCategory === cat.strCategory
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-amber-100'
          ]"
        >
          {{ cat.strCategory }}
        </button>
      </div>
    </div>
    <div class="max-w-4xl mx-auto">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">
        {{ selectedCategory }} Dishes
      </h2>

      <div v-if="isLoading" class="text-center py-12 text-gray-500">
        Loading meals...
      </div>

      <div v-else-if="error" class="text-center py-12 text-red-600">
        {{ error }}
      </div>

      <div v-else-if="meals.length === 0" class="text-center py-12 text-gray-500">
        No meals found
      </div>

      <div v-else class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="meal in meals"
          :key="meal.idMeal"
          class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
        >
          <img
            v-if="meal.strMealThumb"
            :src="meal.strMealThumb"
            :alt="meal.strMeal"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="font-semibold text-lg text-gray-800">
              {{ meal.strMeal }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>