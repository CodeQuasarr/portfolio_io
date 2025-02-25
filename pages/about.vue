<script setup lang="ts">

const technicalSkills = {
    'Front-end': [
        'Vue.js / Nuxt.js',
        'TypeScript',
        'Tailwind CSS / Bootstrap',
    ],
    'Back-end': [
        'Nuxt.js',
        'Next.js',
        'PHP / Laravel',
        'API REST',
    ],
    'Database': [
        'MongoDB',
        'Redis',
        'MySQL / MariaDB',
    ],
    'DevOps': [
        'Docker',
        'Git',
        'Nginx',
    ],
    'Architecture': [
        'MVC',
        'Architecture hexagonale',
        'Clean Architecture',
    ],
    'Methodologies': [
        'Agile',
    ],
}
</script>

<template>
    <main class="pt-24">
        <div class="container-custom">
            <!-- En-tête -->
            <section class="mb-16" v-motion-slide-visible-once-bottom>
                <h1 class="text-4xl font-bold mb-6">À propos de moi</h1>
                <p class="text-xl text-gray-600 max-w-3xl">
                    Développeur passionné avec plus de 3 ans d'expérience dans la création de solutions web innovantes.
                    Je m'engage à fournir des solutions sur mesure qui répondent parfaitement à vos besoins.
                </p>
            </section>

            <!-- Compétences -->
            <section class="mb-16" v-motion-slide-visible-once-bottom>
                <h2 class="section-title">Compétences Techniques</h2>
                <div class="grid md:grid-cols-4 gap-6">
                    <div v-for="(skills, category) in technicalSkills"
                         :key="category"
                         class="bg-white p-6 rounded-lg shadow-lg">
                        <h3 class="text-lg font-semibold mb-4">{{ category }}</h3>
                        <ul class="space-y-2">
                            <li v-for="skill in skills"
                                :key="skill"
                                class="text-gray-600">
                                {{ skill }}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- Parcours -->
            <section class="mb-16" v-motion-slide-visible-once-bottom>
                <h2 class="section-title">Mon Parcours</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="space-y-8">
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold mb-2">Expérience Professionnelle</h3>
                            <ul class="space-y-4">
                                <li>
                                    <p class="font-medium">Développeur Full-Stack Freelance</p>
                                    <p class="text-gray-600">2023 - Présent</p>
                                    <p class="text-gray-600">Création de solutions web sur mesure pour divers clients</p>
                                </li>
                                <li>
                                    <p class="font-medium">Développeur web</p>
                                    <p class="text-gray-600">Groupe Full Ace - Octobre 2021- Decembre 2024</p>
                                    <p class="text-gray-600">
                                        Développement de site e-commerce et site d'agence
                                    </p>
                                </li>
                                <li>
                                    <p class="font-medium">Développeur Full-Stack Laravel/Vue</p>
                                    <p class="text-gray-600">Sayaris - juillet 2021- septembre 2024</p>
                                    <p class="text-gray-600">
                                        Développement de la plateforme : <br>
                                        - <a href="https://www.wikikap.eu/" target="_blank">Wikikap</a> <br>
                                        - <a href="https://www.lanea.fr/" target="_blank">Wikikap</a>Lanea <br>
                                        -<a href="https://www.e-formadapt.com/" target="_blank">Wikikap</a>e-formadpt
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="space-y-8">
                        <div class="bg-white p-6 rounded-lg shadow-lg">
                            <h3 class="text-xl font-semibold mb-2">Formation</h3>
                            <ul class="space-y-4">
                                <li>
                                    <p class="font-medium">Master Expert Dev Web</p>
                                    <p class="text-gray-600">Bordeaux Ynov Campus 2022 - 2024</p>
                                </li>
                                <li>
                                    <p class="font-medium">Licence Pro Développement en Application Web et Innovation Numerique</p>
                                    <p class="text-gray-600">IUT de Gradignan - 2021 - 2022</p>
                                </li>
                                <li>
                                    <p class="font-medium">Licence en Informatique</p>
                                    <p class="text-gray-600">Université Sciences et technologies de Bordeaux - 2019 - 2021</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>

            <!-- CTA -->
            <section class="text-center py-16 bg-sky-50 rounded-2xl" v-motion-slide-visible-once-bottom>
                <h2 class="text-2xl font-bold mb-4">Intéressé par une collaboration ?</h2>
                <p class="text-gray-600 mb-8">
                    Je suis toujours ouvert aux nouvelles opportunités et projets passionnants.
                </p>
                <ULink to="/contact" class="btn-primary">
                    Me contacter
                </ULink>
            </section>
        </div>
    </main>
</template>

<style scoped>

</style>
