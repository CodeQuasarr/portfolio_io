<script lang="ts" setup>

</script>

<template>
    <main class="pt-24">
        <div class="container-custom">
            <!-- En-tête -->
            <section v-motion-slide-visible-once-bottom class="mb-16 text-center">
                <h1 class="text-4xl font-bold mb-6">Contact</h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Vous avez un projet en tête ? Je serais ravi d'en discuter avec vous
                    et de voir comment je peux vous aider à le réaliser.
                </p>
            </section>

            <div class="grid md:grid-cols-2 gap-12">

                <!-- Informations de contact -->
                <section v-motion-slide-visible-once-bottom>
                    <div class="bg-white rounded-xl shadow-lg p-8 sticky top-24">
                        <h2 class="text-2xl font-bold mb-6">Informations de Contact</h2>

                        <div class="space-y-6">
                            <div>
                                <h3 class="font-semibold mb-2">Email</h3>
                                <a class="text-primary-600 hover:text-primary-700"
                                   href="mailto:samuel.anyaronke@gmail.com">
                                  samuel.anyaronke@gmail.com
                                </a>
                            </div>

                            <div>
                                <h3 class="font-semibold mb-2">Téléphone</h3>
                                <a class="text-primary-600 hover:text-primary-700"
                                   href="tel:+330754817436">
                                    +33 0754817436
                                </a>
                            </div>

                            <div>
                                <h3 class="font-semibold mb-2">Réseaux sociaux</h3>
                                <div class="flex space-x-4">
                                    <a class="text-gray-600 hover:text-primary-600" href="https://github.com/CodeQuasarr" target="_blank">
                                        GitHub
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 class="font-semibold mb-2">Disponibilité</h3>
                                <p class="text-gray-600">
                                    Du lundi au vendredi<br>
                                    9h00 - 18h00
                                </p>
                            </div>
                        </div>

                        <div class="mt-8 pt-8 border-t border-gray-200">
                            <h3 class="font-semibold mb-4">FAQ Rapide</h3>
                            <div class="space-y-4">
                                <details class="cursor-pointer">
                                    <summary class="font-medium">Quel est le délai moyen de réponse ?</summary>
                                    <p class="mt-2 text-gray-600">
                                        Je réponds généralement dans les 24-48 heures.
                                    </p>
                                </details>
                                <details class="cursor-pointer">
                                    <summary class="font-medium">Comment se déroule la première consultation ?</summary>
                                    <p class="mt-2 text-gray-600">
                                        Un appel téléphonique de 30 minutes pour discuter de votre projet et de vos besoins.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>
