<script setup>
import { RouterLink } from 'vue-router';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigatepage = ()=> { router.push("/contact")};
</script>


<template>
  <header class="w-full bg-gray-100/80 backdrop-blur-sm border-b border-gray-200/70 sticky top-0 z-50">
    <nav class="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
      
      <!-- Logo + Name -->
      <router-link to="/" class="flex items-center gap-3 group">
        <img 
          src="../public/ramen.png" 
          alt="Ramen Logo" 
          class="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
        >
        <span class="font-semibold text-xl md:text-2xl text-amber-700 tracking-tight">
          Ramen
        </span>
      </router-link>

      <!-- Navigation Links (centered on larger screens) -->
      <div class="hidden md:flex items-center gap-10">
        <router-link 
          to="/" 
          class="nav-link"
        >
          Home
        </router-link>
        
        <router-link 
          to="/menu" 
          class="nav-link"
        >
          Menu
        </router-link>
        
        <router-link 
          to="/reserv" 
          class="nav-link"
        >
          Reservation
        </router-link>
      </div>

      <!-- Contact Button -->
      <button 
        @click="navigatepage"
        class="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg shadow-sm transition-all duration-300 hover:shadow-md active:scale-95"
      >
        Contact
      </button>

    </nav>
  </header>
</template>

<style scoped>
/* Reset & base typography */
* {
  font-family: "Roboto", system-ui, -apple-system, sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

/* Navigation link style with animated underline */
.nav-link {
  position: relative;
  padding: 0.5rem 0;
  font-weight: 500;
  color: #444;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #d97706; /* amber-700-ish */
}

.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2.5px;
  bottom: 0;
  left: 0;
  background-color: #d97706;
  transition: width 0.35s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.25rem 1rem;
  }
  
  .hidden {
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem 2rem;
  }
  
  .nav-link {
    font-size: 1.05rem;
  }
}
</style>