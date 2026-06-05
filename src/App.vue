<template>
  <v-app theme="dark">
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list density="compact" nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          :title="item.title"
          :prepend-icon="item.icon"
          rounded="lg"
          @click="drawer = false"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>
        Baptiste DIDIER
        <a
          href="mailto:baptiste.didier@edu.univ-fcomte.fr"
          style="color: #64b5f6; font-size: 0.82em; font-weight: 400;"
        >(baptiste.didier@edu.univ-fcomte.fr)</a>
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container class="py-6" style="max-width: 1500px;">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const navItems = [
  { title: 'Accueil', path: '/', icon: 'mdi-home-outline' },
  { title: 'Technique', path: '/technique', icon: 'mdi-code-braces' },
  { title: 'Suivi de projet', path: '/suivi', icon: 'mdi-chart-gantt' },
  { title: 'Intégration en entreprise', path: '/integration', icon: 'mdi-account-group-outline' },
]
</script>

<style>
/* Justifier le texte principal du site (paragraphes, légendes, blocs de contenu) */
p, .text-body-2, .text-caption, .company-text, .text-overline, .text-subtitle-2 {
  text-align: justify;
  text-justify: inter-word;
}

/* Garder les titres, la barre d'application et les éléments de navigation alignés à gauche */
.v-app-bar-title, h1, h2, h3, .v-navigation-drawer {
  text-align: left !important;
}

/* Les liens héritent de l'alignement du parent (pour les footers text-center) */
a {
  text-align: inherit;
}

/* Les éléments dans un conteneur text-center restent centrés malgré le justify global */
.text-center p,
.text-center .text-caption,
.text-center .text-body-2 {
  text-align: center !important;
}
</style>
