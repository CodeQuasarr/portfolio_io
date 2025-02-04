<script setup lang="ts">

const isMenuOpen = ref(false)

const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
]

// Fermer le menu mobile lors du changement de route
watch(() => useRoute().path, () => {
    isMenuOpen.value = false
})

</script>

<template>
    <header class="fixed w-full z-50">
        <nav class="glass-card border-b border-gray-200/50 backdrop-blur-lg">
            <div class="container-custom py-4">
                <div class="flex items-center justify-between">
                    <NuxtLink to="/" class="flex items-center text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300">
                        <img class="w-10 h-10 rounded-full me-3" src="~/assets/images/logo/logo.webp" alt="logo codeQuasarr">
                        Portfolio
                    </NuxtLink>

                    <div class="hidden md:flex items-center space-x-8">
                        <NuxtLink v-for="item in menuItems"
                                  :key="item.path"
                                  :to="item.path"
                                  class="relative text-gray-600 hover:text-indigo-600 transition-colors duration-300
                      after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-0.5
                      after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">
                            {{ item.name }}
                        </NuxtLink>
                    </div>

                    <button class="btn-indigo hidden md:flex items-center gap-2 group">
                        <span>Contact</span>
                        <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>

                    <!-- Mobile menu button -->
                    <button class="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" @click="isMenuOpen = !isMenuOpen">
                        <span class="sr-only">Menu</span>
                        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  :d="isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
                        </svg>
                    </button>
                </div>

                <!-- Mobile menu -->
                <div v-show="isMenuOpen"
                     class="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg">
                    <div class="container-custom py-4 space-y-4">
                        <NuxtLink v-for="item in menuItems"
                                  :key="item.path"
                                  :to="item.path"
                                  class="block px-4 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300">
                            {{ item.name }}
                        </NuxtLink>
                        <button class="btn-indigo w-full flex items-center justify-center gap-2">
                            <span>Contact</span>
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>

</style>
