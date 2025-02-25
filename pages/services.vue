<script setup lang="ts">
const services = [
  {
    title: 'Développement Web Sur Mesure',
    description: 'Création de sites web et d\'applications web personnalisés pour répondre à vos besoins spécifiques.',
    price: '3000',
    features: [
      'Design responsive et moderne',
      'Optimisation SEO',
      'Performance optimisée',
      'Support technique',
    ],
    technologies: [
      'PHP / Laravel',
      'Vue.js / Nuxt.js',
      'Node.js',
      'MySQL / MariaDB',
      'TypeScript',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Applications Web Complexes',
    description: 'Développement d\'applications web sophistiquées avec des fonctionnalités avancées.',
    price: '5000',
    features: [
      'Architecture scalable',
      'API RESTful',
      'Authentification sécurisée',
      'Tests automatisés',
      'Documentation complète',
    ],
    technologies: [
      'PHP / Laravel',
      'Vue.js / Nuxt.js',
      'TypeScript',
      'Node.js',
      'MySQL / MariaDB',
      'Docker',
    ],
  },
]

const faq = [
  {
    question: 'Combien de temps faut-il pour développer un site web ?',
    answer: 'La durée de développement varie en fonction de la complexité du projet. Un site vitrine simple peut prendre 2-3 semaines, tandis qu\'une application web complexe peut nécessiter 2-3 mois ou plus.',
  },
  {
    question: 'Quelles sont les modalités de paiement ?',
    answer: 'Je propose généralement un paiement en trois fois : 30% à la signature, 40% à mi-projet, et 30% à la livraison. Les modalités peuvent être adaptées selon vos besoins.',
  },
  {
    question: 'Proposez-vous un support après la mise en ligne ?',
    answer: 'Oui, je propose un support technique de 3 mois après la mise en ligne, incluant les corrections de bugs et les ajustements mineurs. Des contrats de maintenance sont également disponibles.',
  },
  {
    question: 'Comment se déroule la collaboration ?',
    answer: 'La collaboration commence par une phase de découverte pour comprendre vos besoins. Ensuite, nous établissons un cahier des charges détaillé. Le développement se fait de manière itérative avec des points réguliers.',
  },
]
</script>

<template>
  <main class="pt-24">
    <div class="container-custom">
      <!-- En-tête -->
      <section class="mb-16 text-center" v-motion-slide-visible-once-bottom>
        <h1 class="text-4xl font-bold mb-6">Mes Services</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Des solutions sur mesure pour répondre à vos besoins spécifiques,
          avec un focus sur la qualité, la performance et l'expérience utilisateur.
        </p>
      </section>

      <!-- Services détaillés -->
      <section class="mb-20">
        <div class="grid gap-16">
          <div v-for="service in services"
               :key="service.title"
               v-motion-slide-visible-once-bottom
               class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="grid md:grid-cols-2 gap-8 p-8">
              <div>
                <h2 class="text-2xl font-bold mb-4">{{ service.title }}</h2>
                <p class="text-gray-600 mb-6">{{ service.description }}</p>

                <h3 class="font-semibold mb-4">Ce qui est inclus :</h3>
                <ul class="space-y-3 mb-8">
                  <li v-for="feature in service.features"
                      :key="feature"
                      class="flex items-start">
                    <svg class="w-5 h-5 text-primary-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-gray-600">{{ feature }}</span>
                  </li>
                </ul>

                <div class="space-y-4">
                  <p class="text-2xl font-bold text-primary-600">
                    À partir de {{ service.price }}€
                  </p>
                  <button class="btn-primary">
                    Demander un devis
                  </button>
                </div>
              </div>

              <div class="bg-gray-50 p-6 rounded-lg">
                <h3 class="font-semibold mb-4">Technologies utilisées :</h3>
                <div class="grid grid-cols-2 gap-4">
                  <div v-for="tech in service.technologies"
                       :key="tech"
                       class="flex items-center p-3 bg-white rounded-lg shadow">
                    <span class="text-gray-700">{{ tech }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="mb-20" v-motion-slide-visible-once-bottom>
        <h2 class="section-title text-center">Questions Fréquentes</h2>
        <div class="max-w-3xl mx-auto">
          <div v-for="item in faq"
               :key="item.question"
               class="mb-4">
            <details class="bg-white rounded-lg shadow-lg">
              <summary class="p-6 cursor-pointer font-semibold">
                {{ item.question }}
              </summary>
              <div class="px-6 pb-6">
                <p class="text-gray-600">{{ item.answer }}</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="text-center py-16 bg-primary-50 rounded-2xl" v-motion-slide-visible-once-bottom>
        <h2 class="text-2xl font-bold mb-4">Prêt à concrétiser votre projet ?</h2>
        <p class="text-gray-600 mb-8">
          Discutons de vos besoins et trouvons la meilleure solution pour votre entreprise.
        </p>
        <NuxtLink to="/contact" class="btn-primary">
          Démarrer la discussion
        </NuxtLink>
      </section>
    </div>
  </main>
</template>

<style scoped>

</style>
