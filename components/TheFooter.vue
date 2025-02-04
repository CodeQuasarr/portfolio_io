<script setup lang="ts">
const menuItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
]
</script>

<template>
    <footer class="bg-gray-900 text-white mt-20">
        <div class="container-custom py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Portfolio</h3>
                    <p class="text-gray-400">Solutions créatives pour vos projets digitaux</p>
                </div>

                <div>
                    <h4 class="font-semibold mb-4">Navigation</h4>
                    <ul class="space-y-2">
                        <li v-for="item in menuItems" :key="item.path">
                            <NuxtLink :to="item.path" class="text-gray-400 hover:text-white transition-colors">
                                {{ item.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold mb-4">Contact</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li>dsanyaronke@mail.com</li>
                        <li>+33 7 54 81 74 36</li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold mb-4">Réseaux sociaux</h4>
                    <div class="flex space-x-4">
                        <a href="https://www.linkedin.com/in/samuel-anyaronke-b3ba7b22b/" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://github.com/CodeQuasarr" target="_blank" class="text-gray-400 hover:text-white transition-colors">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; {{ new Date().getFullYear() }} CodeQuasarr. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>

</style>
