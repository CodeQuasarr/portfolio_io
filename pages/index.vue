<script lang="ts" setup>
const services = [
    {
        title: 'Développement Web',
        description: 'Création de sites web modernes et responsifs avec les dernières technologies.',
        icon: defineComponent({
            template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      `
        })
    },
    {
        title: 'Applications Web',
        description: 'Développement d\'applications web performantes et évolutives.',
        icon: defineComponent({
            template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      `
        })
    },
    {
        title: 'Deployement',
        description: 'Optimisation et mise en ligne de vos applications.',
        icon: defineComponent({
            template: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      `
        })
    }
]

const stats = [
    { value: '3+', label: 'Années d\'expérience' },
    { value: '+++', label: 'Projets livrés' },
    { value: '837', label: 'Tasses de thé' },
    { value: '∞', label: 'Lignes de code' },
]

const technologies = [
    'PHP','Laravel', 'Symfony',
    'Vue.js',
    'Nuxt.js',
    'TypeScript',
    'MySQL/MaraDB',
    'Docker',
    'Nginx',
    'composer',
    'Git',
    'PHPStorm',
    'Tailwind CSS/Bootstrap',
    'Architecture MVC/Hexagonal',
];

const learningGoals = [
    {
        title: 'Veille Technologique',
        description: 'Exploration continue des nouvelles technologies et frameworks pour rester à la pointe.',
    },
    {
        title: 'Architecture',
        description: 'Approfondissement des architectures et des notions DevOps.',
    },
    {
        title: 'IA',
        description: 'Le sujet de l\'intégration de l\'intelligence artificielle dans les solutions web modernes.',
    },
]
</script>

<template>
    <main>
        <!-- Hero Section -->
        <section class="min-h-screen flex items-center pt-20 bg-gradient-to-br from-sky-50 via-white to-gray-50">
            <div class="container-custom">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div v-motion
                         :enter="{ opacity: 1, x: 0, transition: { duration: 800, ease: 'easeOut' } }"
                         :initial="{ opacity: 0, x: -100 }">
                        <h1 class="text-4xl md:text-6xl font-bold mb-6">
                            Créons ensemble votre
                            <span class="gradient-text">présence digitale</span>
                        </h1>
                        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                            Développeur Full Stack spécialisé dans la création de solutions web modernes, robustes et performantes.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                            <ULink to="/contact" class="btn-primary group flex items-center justify-center gap-2">
                                <span>Démarrer un projet</span>
                                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"/>
                                </svg>
                            </ULink>
                            <ULink to="/portfolio" class="btn-secondary group flex items-center justify-center gap-2">
                                <span>Voir mes travaux</span>
                                <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"/>
                                </svg>
                            </ULink>
                        </div>
                    </div>

                    <div v-motion
                         :enter="{ opacity: 1, scale: 1, transition: { duration: 800, ease: 'easeOut', delay: 200 } }"
                         :initial="{ opacity: 0, scale: 0.8 }"
                         class="relative">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-transparent rounded-full blur-3xl"></div>
                        <img alt="Développement web"
                             class="relative rounded-2xl shadow-2xl hover-lift"
                             src="https://images.unsplash.com/photo-1498050108023-c5249f4df085">
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        <section class="py-20">
            <div class="container-custom">
                <h2 class="section-title-center">Mes Services</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    <div v-for="(service, index) in services"
                         :key="service.title"
                         v-motion
                         :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: index * 200 } }"
                         :initial="{ opacity: 0, y: 50 }"
                         class="card p-6 group">
                        <div class="mb-4 text-sky-600 transition-transform duration-300 group-hover:scale-110">
                            <component :is="service.icon" class="w-12 h-12"/>
                        </div>
                        <h3 class="text-xl font-semibold mb-4 group-hover:text-sky-600 transition-colors">
                            {{ service.title }}
                        </h3>
                        <p class="text-gray-600">{{ service.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section class="py-20 bg-gradient-to-br from-sky-50 to-white">
            <div class="container-custom">
                <div class="grid md:grid-cols-2 gap-12">
                    <!-- Stats -->
                    <div v-motion
                         :initial="{ opacity: 0, y: 50 }"
                         :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
                         class="grid grid-cols-2 gap-6">
                        <div v-for="stat in stats"
                             :key="stat.label"
                             class="glass-card p-6 text-center hover-lift">
                            <p class="text-4xl font-bold text-sky-600 mb-2">{{ stat.value }}</p>
                            <p class="text-gray-600">{{ stat.label }}</p>
                        </div>
                    </div>

                    <!-- Technologies -->
                    <div v-motion
                         :initial="{ opacity: 0, y: 50 }"
                         :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }">
                        <div class="glass-card p-8">
                            <h3 class="text-xl font-bold mb-6">Stacks clés </h3>
                            <div class="flex flex-wrap gap-3">
                                <span v-for="tech in technologies"
                                      :key="tech"
                                      class="tag">
                                  {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Learning & Growth -->
                <div class="mt-12 glass-card p-8"
                     v-motion
                     :initial="{ opacity: 0, y: 50 }"
                     :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400 } }">
                    <h3 class="text-xl font-bold mb-6">Passion pour l'apprentissage</h3>
                    <div class="grid md:grid-cols-3 gap-6">
                        <div v-for="item in learningGoals"
                             :key="item.title"
                             class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <h4 class="font-semibold mb-3">{{ item.title }}</h4>
                            <p class="text-gray-600">{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20">
            <div class="container-custom">
                <div
                    class="relative overflow-hidden bg-gradient-to-br from-sky-600 to-sky-800 rounded-2xl p-12 text-center">
                    <div class="absolute inset-0 bg-grid-white/10"></div>
                    <div class="relative z-10">
                        <h2 class="text-3xl font-bold text-white mb-6">Prêt à démarrer?</h2>
                        <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé
                        </p>
                        <ULink to="/contact" class="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold
                         hover:bg-sky-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            Commencer la discussion
                        </ULink>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.bg-grid-white {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
