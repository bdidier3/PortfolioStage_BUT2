<template>
  <div>

    <!-- En-tete -->
    <v-card class="mb-5 pa-5" rounded="lg">
      <h1 class="text-h6 font-weight-bold mb-2">
        Pr&eacute;sentation et &eacute;valuation de savoir-faire en suivi de projet
      </h1>
      <p class="text-body-2 text-medium-emphasis">
        Cette page pr&eacute;sente les savoir-faire li&eacute;s &agrave; la veille technologique, &agrave; la documentation
        et &agrave; l&rsquo;utilisation de Git et GitLab dans le cadre du stage EzGED.
      </p>
    </v-card>

    <!-- Contenu principal avec onglets -->
    <v-card class="pa-5" rounded="lg">
      <v-tabs v-model="tab" color="primary">
        <v-tab value="comp3">Comp&eacute;tence 3</v-tab>
        <v-tab value="comp4">Comp&eacute;tence 4</v-tab>
        <v-tab value="bilan">Bilan &amp; &Eacute;valuation</v-tab>
      </v-tabs>
      <v-divider class="mb-4" />

      <v-window v-model="tab">

        <!-- COMPETENCE 3 -->
        <v-window-item value="comp3">
          <h3 class="text-h5 font-weight-bold mb-3">
            Faire une veille technologique et documenter son travail
          </h3>
          <div class="mb-3">
            <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
            <v-chip color="success" size="small" class="ma-1">Identifier et comparer des outils de mise &agrave; jour automatique de d&eacute;pendances</v-chip>
            <v-chip color="success" size="small" class="ma-1">Configurer Renovate sur un projet GitLab</v-chip>
            <v-chip color="success" size="small" class="ma-1">R&eacute;diger une documentation technique exploitable par l&rsquo;&eacute;quipe</v-chip>
          </div>

          <!-- Trace 4 - image a gauche, texte a droite -->
          <v-divider class="my-4" />
          <v-row class="mb-4" align="start">
            <v-col cols="12" md="7">
              <img
                src="/images/Trace5_renovate.png"
                alt="Documentation Renovate utilis&eacute;e pour la configuration"
                class="trace-image"
                @click="openImage('/images/Trace5_renovate.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;5</strong> &mdash; Documentation Renovate consult&eacute;e pour configurer l&rsquo;outil
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="success" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-0">
                  La Trace n°5 montre un extrait de la documentation que j'ai rédigée pour intégrer Renovate,
                  l’outil choisi pour automatiser la veille des dépendances. Le cadre rouge met en évidence
                  la configuration du pipeline du fichier <code class="inline-code">.gitlab-ci.yml</code>. Les cadres verts montrent les règles globales
                  appliquées au projet <code class="inline-code">renovate.json</code>, avec un focus précis dans le cadre jaune sur les gestionnaires
                  de paquets. Dans le cadre de ma mission de migration, cette documentation permet à l'équipe de reproduire
                  l'installation facilement.
                </p>
              </v-card>
            </v-col>
          </v-row>

          <!-- Trace 5 - image a droite, texte a gauche (diagonal) -->
          <v-divider class="my-4" />
          <v-row class="mb-4" align="start">
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="success" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-0">
                 La Trace n°6 montre le résultat concret du robot Renovate sur notre GitLab. Les cadres
                 bleus indiquent que l'outil crée automatiquement une « Issue » (qui sert de tableau de
                 bord de suivi global) et plusieurs « Merge Requests » (MR) pour proposer les mises à jour.
                 Pour limiter les risques, Renovate sépare intelligemment les mises à jour : le trait rouge
                 souligne justement une MR « major » qui regroupe les grandes montées de version (les plus risquées),
                 tandis qu'il génère d'autres MR isolées pour les correctifs mineurs, qui sont beaucoup plus sûrs. Enfin,
                 le cadre jaune cible le tableau de bord de la MR : il liste le nom de la dépendance, le changement de version,
                  l'âge de la mise à jour et un indice de confiance basé sur la communauté pour évaluer facilement le risque de
                  casse avant de valider.
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="7">
              <img
                src="/images/Trace6_MRRenovate.png"
                alt="Commits GitLab sur la branche gestions_deps"
                class="trace-image"
                @click="openImage('/images/Trace6_MRRenovate.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;6</strong> &mdash; Merge Requests Renovate sur la branche
                <code class="inline-code">gestions_deps</code> dans GitLab
              </p>
            </v-col>
          </v-row>
          <v-divider class="my-4" />

          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">identifier et comparer des outils de mise &agrave; jour automatique de d&eacute;pendances</v-chip>,
              j&rsquo;ai men&eacute; une veille technologique approfondie pour comparer
              <a href="https://docs.renovatebot.com/" target="_blank" rel="noopener noreferrer">Renovate</a>
              et
              <a href="https://docs.github.com/en/code-security/dependabot" target="_blank" rel="noopener noreferrer">Dependabot</a>.
              Dans le cadre du projet, le crit&egrave;re bloquant &eacute;tait la compatibilit&eacute; avec le serveur GitLab interne
              de l&rsquo;entreprise (EzDEV). Dependabot &eacute;tant optimis&eacute; pour GitHub, j&rsquo;ai logiquement s&eacute;lectionn&eacute;
              Renovate. La Trace n&deg;5 montre justement le manuel technique qui est le r&eacute;sultat direct de cette recherche.
            </p>
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">configurer Renovate sur un projet GitLab</v-chip>,
              j&rsquo;ai mis en place les deux fichiers cl&eacute;s visibles sur la Trace n&deg;5. Le cadre rouge montre
              le pipeline CI/CD qui permet d&rsquo;ex&eacute;cuter Renovate de mani&egrave;re autonome sur notre serveur.
              Les cadres verts d&eacute;finissent les r&egrave;gles du robot, comme le blocage de la fusion automatique
              (<code class="inline-code">automerge: false</code>) pour garder le contr&ocirc;le. Enfin, le cadre jaune
              montre une r&egrave;gle avanc&eacute;e que j&rsquo;ai configur&eacute;e : cibler pr&eacute;cis&eacute;ment les paquets Python
              (<code class="inline-code">pip_requirements</code>, <code class="inline-code">poetry</code>...) pour les regrouper.
              La Merge Request g&eacute;n&eacute;r&eacute;e sur la Trace n&deg;6 prouve que cette configuration est un succ&egrave;s.
            </p>
            <p>
              Pour
              <v-chip color="success" size="x-small" class="mx-1">r&eacute;diger une documentation technique exploitable par l&rsquo;&eacute;quipe</v-chip>,
              j&rsquo;ai structur&eacute; mon document (Trace n&deg;5) sous forme de tutoriel pas &agrave; pas tr&egrave;s visuel.
              J&rsquo;y ai inclus la pr&eacute;sentation de l&rsquo;outil, les scripts exacts &agrave; copier-coller
              (comme vus dans les cadres rouge et vert), et un guide pour interpr&eacute;ter les r&eacute;sultats.
              Mon objectif &eacute;tait de rendre l&rsquo;&eacute;quipe totalement autonome, afin qu&rsquo;&agrave; la fin de mon stage,
              n&rsquo;importe quel d&eacute;veloppeur puisse reproduire ce processus sur d&rsquo;autres projets sans d&eacute;pendre de moi.
            </p>
          </div>
        </v-window-item>

        <!-- COMPETENCE 4 -->
        <v-window-item value="comp4">
          <h3 class="text-h5 font-weight-bold mb-3">
            Utiliser Git et GitLab pour g&eacute;rer le code en &eacute;quipe
          </h3>
          <div class="mb-3">
            <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
            <v-chip color="success" size="small" class="ma-1">G&eacute;rer son travail avec des branches Git nomm&eacute;es</v-chip>
            <v-chip color="success" size="small" class="ma-1">R&eacute;diger des messages de commit clairs et atomiques</v-chip>
            <v-chip color="success" size="small" class="ma-1">Soumettre son travail via des Merge Requests GitLab</v-chip>
          </div>

          <v-divider class="my-4" />
          <v-row class="mb-4" align="start">
            <v-col cols="12" md="7">
              <img
                src="/images/Trace7_commits.png"
                alt="Historique de commits GitLab"
                class="trace-image"
                @click="openImage('/images/Trace7_commits.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;7</strong> &mdash; Historique de commits sur GitLab
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="success" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-0">
                  La Trace n°7 montre l’historique de mes commits sur le GitLab de l'entreprise (EzDEV), réalisé pendant ma
                  mission d'analyse et de migration vers Python 3.13. L'image met en évidence mon environnement de travail
                  avec la branche de développement (cadre rouge), l'historique des actions détaillées (cadre bleu) et le
                  déclenchement de la validation du code (cadre vert). C’est la preuve visuelle que j'ai adopté les normes de
                  l'équipe pour versionner chaque étape de ma mission de manière sécurisée.
                </p>
              </v-card>
            </v-col>
          </v-row>
          <v-divider class="my-4" />

          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">g&eacute;rer son travail avec des branches Git nomm&eacute;es</v-chip>,
              j'ai isol&eacute; la cr&eacute;ation de mes scripts d'analyse sur une branche d&eacute;di&eacute;e, visible
              dans le cadre rouge (<code class="inline-code">gestions_deps</code>). Mon objectif
              &eacute;tait de d&eacute;velopper et de tester mes outils sans jamais risquer d'impacter ou de casser
              la branche principale du projet. Travailler sur une branche s&eacute;par&eacute;e
              est une bonne pratique indispensable pour collaborer efficacement en &eacute;quipe.
            </p>
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">r&eacute;diger des messages de commit clairs et atomiques</v-chip>,
              j'ai veill&eacute; &agrave; d&eacute;couper mon travail en petites actions ind&eacute;pendantes. Comme le
              montre le cadre bleu, au lieu d'enregistrer toutes mes modifications d'un coup sous un message
              vague, je d&eacute;taille l'action exacte (ex: "Modification du script d'audit avec libcst en ajoutant
              un filtre HTML"). La m&eacute;thode consiste &agrave; r&eacute;aliser un commit d&egrave;s
              qu'une sous-fonctionnalit&eacute; est termin&eacute;e. Le but est de rendre
              l’historique lisible et de faciliter un &eacute;ventuel retour en arri&egrave;re pr&eacute;cis en cas d'erreur.
            </p>
            <p>
              Pour
              <v-chip color="success" size="x-small" class="mx-1">soumettre son travail via des Merge Requests GitLab</v-chip>,
              j'utilise le bouton mis en &eacute;vidence par le cadre vert (Create merge request). Une fois mon
              code termin&eacute; sur ma branche, je d&eacute;clenche manuellement cette demande. L'objectif est de notifier l'&eacute;quipe, pour qu'ils puissent
              relire mon code, valider ma m&eacute;thode et approuver mon travail avant de le fusionner d&eacute;finitivement
              avec le reste du logiciel EzGED.
            </p>
          </div>
        </v-window-item>

        <!-- BILAN -->
        <v-window-item value="bilan">
          <h3 class="text-subtitle-1 font-weight-bold mb-4">
            Bilan &amp; Analyse
          </h3>

          <v-card
            v-for="comp in bilanCompetences"
            :key="comp.id"
            variant="outlined"
            class="pa-4 mb-6"
            rounded="lg"
          >
            <h4 class="text-body-1 font-weight-bold mb-4">{{ comp.title }}</h4>

            <h5 class="text-body-1 font-weight-bold mb-3">R&eacute;sum&eacute; des savoir-faire &eacute;l&eacute;mentaires</h5>
            <v-row class="mb-4">
              <v-col cols="12" md="6" v-for="sf in comp.savoirFaire" :key="sf.title">
                <v-card variant="outlined" class="pa-3 h-100" rounded="lg">
                  <v-chip color="success" size="small" class="mb-2">{{ sf.title }}</v-chip>
                  <p class="text-body-2 mb-1"><strong>Contexte d'utilisation :</strong> {{ sf.contexteUtilisation }}</p>
                  <p class="text-body-2 mb-1"><strong>Contexte d'apprentissage :</strong> {{ sf.contexteApprentissage }}</p>
                  <p class="text-body-2"><strong>Difficult&eacute; :</strong> {{ sf.difficulte }}</p>
                </v-card>
              </v-col>
            </v-row>

            <h5 class="text-body-1 font-weight-bold mb-3">&Eacute;valuation du niveau</h5>
            <v-row>
              <v-col cols="12" md="6">
                <v-card variant="outlined" class="pa-4" rounded="lg">
                  <h6 class="text-subtitle-2 font-weight-bold mb-2">Avant le stage</h6>
                  <p class="text-body-2 mb-2">
                    Niveau <strong>{{ comp.evaluation.beforeLevel }}</strong>.
                  </p>
                  <p class="text-body-2 mb-0">
                    {{ comp.evaluation.beforeText }}
                  </p>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card variant="outlined" class="pa-4" rounded="lg">
                  <h6 class="text-subtitle-2 font-weight-bold mb-2">Apr&egrave;s le stage</h6>
                  <p class="text-body-2 mb-2">
                    Niveau <strong>{{ comp.evaluation.afterLevel }}</strong>.
                  </p>
                  <p class="text-body-2 mb-0">
                    {{ comp.evaluation.afterText }}
                  </p>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>

      </v-window>
    </v-card>

    <!-- Modal zoom image (commun a toutes les traces) -->
    <v-dialog v-model="imageModal" max-width="1400" @click:outside="closeImage" @keydown.esc="closeImage">
      <v-card>
        <v-card-actions class="pa-2">
          <v-btn icon variant="text" @click="zoomOut" :disabled="zoom <= 0.5"><v-icon>mdi-magnify-minus</v-icon></v-btn>
          <span class="text-caption mx-2">{{ Math.round(zoom * 100) }}%</span>
          <v-btn icon variant="text" @click="zoomIn" :disabled="zoom >= 5"><v-icon>mdi-magnify-plus</v-icon></v-btn>
          <v-btn icon variant="text" @click="resetZoom"><v-icon>mdi-magnify-scan</v-icon></v-btn>
          <v-spacer />
          <v-btn icon variant="text" @click="closeImage"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-actions>
        <v-divider />
        <div
          ref="zoomContainer"
          class="pa-2"
          style="overflow:auto; max-height:80vh; background:#1e1e1e; user-select:none;"
          @wheel.prevent="onWheel"
          @mousedown="onMouseDown"
          @mousemove="onMouseMove"
          @mouseup="onMouseUp"
          @mouseleave="onMouseUp"
        >
          <img
            :src="currentImage"
            alt="zoom"
            :style="{
              transform: `scale(${zoom})`,
              transformOrigin: 'top left',
              transition: dragging ? 'none' : 'transform 0.15s',
              cursor: zoom > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in',
              display: 'block',
              width: '100%',
              borderRadius: '4px',
              pointerEvents: 'none',
            }"
            draggable="false"
          />
        </div>
      </v-card>
    </v-dialog>

    <!-- Footer -->
    <v-card class="mt-5 pa-5 text-center" rounded="lg">
      <router-link to="/integration" class="text-blue-lighten-2 text-body-2">
        D&eacute;couvrir l&rsquo;int&eacute;gration en entreprise &rarr;
      </router-link>
      <p class="text-caption text-medium-emphasis mt-3">&copy; 2026 Baptiste Didier. Tous droits r&eacute;serv&eacute;s.</p>
    </v-card>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('comp3')

const imageModal = ref(false)
const currentImage = ref('')
const zoom = ref(1)
const dragging = ref(false)
const zoomContainer = ref(null)
let dragStart = { x: 0, y: 0, scrollLeft: 0, scrollTop: 0, moved: false }

function openImage(src) {
  currentImage.value = src
  zoom.value = 1
  imageModal.value = true
}
function closeImage() {
  imageModal.value = false
  zoom.value = 1
}
function zoomIn() { zoom.value = Math.min(5, zoom.value + 0.25) }
function zoomOut() { zoom.value = Math.max(0.5, zoom.value - 0.25) }
function resetZoom() { zoom.value = 1 }
function onWheel(e) {
  const delta = e.deltaY > 0 ? -0.15 : 0.15
  zoom.value = Math.min(5, Math.max(0.5, zoom.value + delta))
}
function onMouseDown(e) {
  const c = zoomContainer.value
  if (!c) return
  dragging.value = true
  dragStart = {
    x: e.pageX,
    y: e.pageY,
    scrollLeft: c.scrollLeft,
    scrollTop: c.scrollTop,
    moved: false,
  }
}
function onMouseMove(e) {
  if (!dragging.value) return
  const c = zoomContainer.value
  if (!c) return
  const dx = e.pageX - dragStart.x
  const dy = e.pageY - dragStart.y
  if (Math.abs(dx) > 3 || Math.abs(dy) > 3) dragStart.moved = true
  c.scrollLeft = dragStart.scrollLeft - dx
  c.scrollTop = dragStart.scrollTop - dy
}
function onMouseUp() {
  if (dragging.value && !dragStart.moved) {
    zoom.value = zoom.value === 1 ? 2 : 1
  }
  dragging.value = false
}

const bilanCompetences = [
  {
    id: "comp3",
    title: "Compétence 3 — Faire une veille technologique et documenter son travail",
    savoirFaire: [
      {
        title: "Identifier et comparer des outils de mise à jour automatique",
        contexteUtilisation: "Veille sur Renovate et Dependabot pour automatiser la gestion des dépendances d'EzGED après la migration Python 3.13 (traces n°5-6, semaine 2).",
        contexteApprentissage: "Entièrement appris en stage. Ces outils n'avaient jamais été abordés en cours de BUT.",
        difficulte: "Moyenne — la comparaison demande de tester réellement les deux outils et de comprendre les contraintes du GitLab interne.",
      },
      {
        title: "Configurer Renovate sur un projet GitLab",
        contexteUtilisation: "Mise en place de Renovate sur un projet de test GitLab, configuration via renovate.json et intégration dans le pipeline CI (traces n°5-6, semaine 2).",
        contexteApprentissage: "Appris en stage à partir de la documentation Renovate et des échanges avec Florian Masy sur les runners GitLab.",
        difficulte: "Élevée — la gestion des droits du runner et du token d'accès pour la création automatique de MR a pris plusieurs essais.",
      },
      {
        title: "Rédiger une documentation technique exploitable",
        contexteUtilisation: "Rédaction de la documentation comparative Renovate/Dependabot et de la procédure de montée de version, publiée sur le Wiki GitLab (semaines 2-4).",
        contexteApprentissage: "Pratique développée en stage. La rédaction pour une équipe pro n'avait pas été travaillée en cours.",
        difficulte: "Faible pour la rédaction ; moyenne pour trouver le bon niveau de détail technique.",
      },
    ],
    evaluation: {
      beforeLevel: "faible",
      beforeText: "Aucune expérience de veille structurée ni de documentation technique à destination d'une équipe. Renovate et Dependabot m'étaient inconnus.",
      afterLevel: "bon",
      afterText: "Je sais mener une veille structurée, tester des outils en conditions réelles et rédiger une documentation directement exploitable.",
    },
  },
  {
    id: "comp4",
    title: "Compétence 4 — Utiliser Git et GitLab pour gérer le code en équipe",
    savoirFaire: [
      {
        title: "Gérer son travail avec des branches Git nommées",
        contexteUtilisation: "Développement de chaque fonctionnalité sur une branche dédiée avec convention de nommage (trace n°7, tout le stage).",
        contexteApprentissage: "Bases Git en cours de BUT, convention de nommage des branches appliquée en conditions réelles de stage.",
        difficulte: "Faible — la convention est simple. La difficulté est de maintenir une granularité cohérente entre les branches.",
      },
      {
        title: "Rédiger des messages de commit clairs et atomiques",
        contexteUtilisation: "Application de la convention feat:/fix:/docs: pour chaque commit, facilitant les revues de Florian Masy (trace n°7, tout le stage).",
        contexteApprentissage: "Convention apprise en stage. Les commits en cours de BUT n'avaient pas de structure particulière.",
        difficulte: "Faible une fois la convention assimilée. Le découpage en commits atomiques demande un peu de réflexion.",
      },
      {
        title: "Soumettre son travail via des Merge Requests GitLab",
        contexteUtilisation: "Intégration de chaque branche via une MR avec description, soumise à la revue de Florian Masy avant merge (trace n°7, tout le stage).",
        contexteApprentissage: "Processus de MR connu théoriquement en cours, pratiqué et affiné en conditions réelles avec retours du tuteur.",
        difficulte: "Faible pour la création de la MR ; moyenne pour rédiger une description claire et anticiper les retours.",
      },
    ],
    evaluation: {
      beforeLevel: "moyen",
      beforeText: "Bases Git acquises en cours de BUT, mais peu d'expérience des branches et MR en contexte professionnel. Les commits n'avaient pas de convention particulière.",
      afterLevel: "bon",
      afterText: "Je maîtrise le flux Git en équipe : branches nommées, commits atomiques avec convention, Merge Requests avec revue de code.",
    },
  },
]
</script>

<style scoped>
.trace-image {
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  transition: filter 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.trace-image:hover {
  filter: brightness(0.75);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.inline-code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace;
  background: #111111;
  color: #e6e6e6;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}
</style>
