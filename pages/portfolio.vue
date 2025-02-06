<script lang="ts" setup>

import docOnTimeImg from '~/assets/images/projects/doc_on_time_1.webp';
import apiDocOnTimeImg from '~/assets/images/projects/api_doc_on_time.png';
import stockManagement from '~/assets/images/projects/stock_management.png';
import apiStockManagement from '~/assets/images/projects/api_stock_management.png';
import netflixus from '~/assets/images/projects/netflixus.png';
import barber from '~/assets/images/projects/barber.png';
const selectedCategory = ref('Tous')

const categories = ['Tous', 'Applications', 'Sites Web', 'Api Rest', 'E-commerce']

const projects = [
    {
        title: 'Doc On Time',
        description: 'DocOnTime simplifie la prise de rendez-vous médicaux. Trouvez rapidement un professionnel de santé et gérez vos rendez-vous en ligne.',
        image: docOnTimeImg,
        category: 'Applications',
        tags: ['Vue.js', 'Symfony Api Rest', 'MariaDB', '...'],
        liveUrl: 'https://doc-on-time.codequasarr.fr',
        caseStudyUrl: 'https://github.com/CodeQuasarr/doc_on_time',
    },
    {
        title: 'Api Doc On Time',
        description: 'DocOnTime simplifie la prise de rendez-vous médicaux. Trouvez rapidement un professionnel de santé et gérez vos rendez-vous en ligne.',
        image: apiDocOnTimeImg,
        category: 'Api Rest',
        tags: ['Symfony Api Rest', 'MariaDB', 'Bonne pratique (SOLID, DDD, TDD)', '...'],
        liveUrl: 'https://api.doc-on-time.codequasarr.fr',
        caseStudyUrl: 'https://github.com/CodeQuasarr/doc_on_time_api',
    },
    {
        title: 'Application de Gestion',
        description: 'Plateforme de gestion des stocks de médicaments pour les pharmacies, avec suivi des entrées et sorties, approvisionnements et alertes de stock.',
        image: stockManagement,
        category: 'Applications',
        tags: ['Vue.js', 'Laravel Api Rest', 'MariaDB', '...'],
        liveUrl: 'https://stock-management.codequasarr.fr',
        caseStudyUrl: 'https://github.com/CodeQuasarr/stock_management',
    },
    {
        title: 'Api Application de Gestion',
        description: 'Plateforme de gestion des stocks de médicaments pour les pharmacies, avec suivi des entrées et sorties, approvisionnements et alertes de stock.',
        image: apiStockManagement,
        category: 'Api Rest',
        tags: ['Laravel Api Rest', 'MariaDB', 'Bonne pratique (SOLID, DDD, TDD)', '...'],
        liveUrl: 'https://api.stock-management.codequasarr.fr',
        caseStudyUrl: 'https://api.stock-management.codequasarr.fr/api/v1/stocks',
    },
    {
        title: 'Demo App de Streaming',
        description: 'Netflixus est une application de streaming vidéo qui permet de regarder des films et des séries en ligne.',
        image: netflixus,
        category: 'Sites Web',
        tags: ['Vue.js', 'Tailwind CSS', 'API externes TMDB', '...'],
        liveUrl: 'https://main--stramview.netlify.app/',
        caseStudyUrl: 'https://github.com/CodeQuasarr/netflixus_app',
    },
    {
        title: 'Barber Shop',
        description: 'Venir chez le coiffeur n\'a jamais été aussi simple. Découvrez notre plateforme de payement en ligne pour les salons de coiffure.',
        image: barber,
        category: 'E-commerce',
        tags: ['Vue.js', 'Laravel', 'MySQL'],
        liveUrl: 'https://github.com/CodeQuasarr/barber_shop',
        caseStudyUrl: 'https://github.com/CodeQuasarr/barber_shop_api',
    },
]


const filteredProjects = computed(() => {
    if (selectedCategory.value === 'Tous') {
        return projects
    }
    return projects.filter(project => project.category === selectedCategory.value)
})

</script>

<template>
    <main class="pt-24">
        <div class="container-custom">
            <!-- En-tête -->
            <section v-motion-slide-visible-once-bottom class="mb-16 text-center">
                <h1 class="text-4xl font-bold mb-6">Portfolio</h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Découvrez une sélection de mes projets récents,
                    démontrant mon expertise en développement web et applications.
                </p>
            </section>

            <!-- Filtres -->
            <section v-motion-slide-visible-once-bottom class="mb-12">
                <div class="flex flex-wrap gap-4 justify-center">
                    <button v-for="category in categories"
                            :key="category"
                            :class="[
                    'px-4 py-2 rounded-lg transition-colors',
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  ]"
                            @click="selectedCategory = category">
                        {{ category }}
                    </button>
                </div>
            </section>

            <!-- Projets -->
            <section class="mb-20">
                <div class="grid md:grid-cols-2 gap-8">
                    <div v-for="project in filteredProjects"
                         :key="project.title"
                         v-motion-slide-visible-once-bottom
                         class="bg-white rounded-xl shadow-lg overflow-hidden">
                        <img :alt="project.title"
                             :src="project.image"
                             class="w-full h-64 object-cover">

                        <div class="p-6">
                            <div class="flex gap-2 mb-4">
                <span v-for="tag in project.tags"
                      :key="tag"
                      class="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm">
                  {{ tag }}
                </span>
                            </div>

                            <h2 class="text-2xl font-bold mb-4">{{ project.title }}</h2>
                            <p class="text-gray-600 mb-6">{{ project.description }}</p>

                            <div class="flex gap-4">
                                <a :href="project.liveUrl"
                                   class="btn-primary"
                                   target="_blank">
                                    Voir le projet
                                </a>
                                <a :href="project.caseStudyUrl"
                                   class="px-6 py-3 text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors">
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA -->
            <section v-motion-slide-visible-once-bottom class="text-center">
                <h2 class="text-2xl font-bold mb-4">Vous avez un projet similaire ?</h2>
                <p class="text-gray-600 mb-8">
                    Je peux vous aider à le concrétiser avec la même qualité et attention aux détails.
                </p>
                <NuxtLink class="btn-primary" to="/contact">
                    Discuter de votre projet
                </NuxtLink>
            </section>
        </div>
    </main>
</template>

<style scoped>

</style>
