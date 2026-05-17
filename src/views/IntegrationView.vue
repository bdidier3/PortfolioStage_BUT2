<template>
  <div>

    <!-- En-tete -->
    <v-card class="mb-5 pa-5" rounded="lg">
      <h1 class="text-h6 font-weight-bold mb-2">
        Pr&eacute;sentation et &eacute;valuation de savoir-faire sur l&rsquo;int&eacute;gration en entreprise
      </h1>
      <p class="text-body-2 text-medium-emphasis">
        Cette page pr&eacute;sente le savoir-faire li&eacute; &agrave; l&rsquo;appropriation rapide d&rsquo;un projet existant
        complexe&nbsp;: audit statique du code EzGED, identification des incompatibilit&eacute;s Python&nbsp;3.13
        et reconstruction de l&rsquo;architecture.
      </p>
    </v-card>

    <!-- Contenu principal avec onglets -->
    <v-card class="pa-5" rounded="lg">
      <v-tabs v-model="tab" color="primary">
        <v-tab value="comp5">Comp&eacute;tence 5</v-tab>
        <v-tab value="bilan">Bilan &amp; &Eacute;valuation</v-tab>
      </v-tabs>
      <v-divider class="mb-4" />

      <v-window v-model="tab">

        <!-- COMPETENCE 5 -->
        <v-window-item value="comp5">
          <h3 class="text-h5 font-weight-bold mb-3">
            Prendre en main un projet existant
          </h3>
          <div class="mb-3">
            <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
            <v-chip color="info" size="small" class="ma-1">D&eacute;ployer et utiliser des outils d&rsquo;analyse statique (ruff, deptry)</v-chip>
            <v-chip color="info" size="small" class="ma-1">Identifier et classifier les anomalies d&rsquo;un projet Python existant</v-chip>
          </div>

          <v-divider class="my-4" />
          <v-row class="mb-4" align="start">
            <v-col cols="12" md="7">
              <img
                src="/images/Trace8_ruff.png"
                alt="Sortie ruff sur le projet EzGED (4958 erreurs)"
                class="trace-image"
                @click="openImage('/images/Trace8_ruff.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;8</strong> &mdash; Sortie de <code class="inline-code">ruff check</code> sur le projet EzGED
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="info" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-0">
                  La Trace n°8 présente la sortie de Ruff, un linter Python que j'ai utilisé pour faire un
                  audit rapide du code avant notre migration vers Python 3.13. L'image montre le bilan d'analyse
                  avec les cadres rouges qui ciblent des codes d’erreur spécifiques : F401 pour les imports inutilisés
                  et E713 pour des syntaxes obsolètes. Sur les 4958 problèmes détectés au total, ce rapport visuel a été
                  essentiel pour faire un état des lieux de la dette technique.
                </p>
              </v-card>
            </v-col>
          </v-row>

          <!-- Trace 9 - texte a gauche, image a droite (diagonal) -->
          <v-divider class="my-4" />
          <v-row class="mb-4" align="start">
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="info" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-0">
                  La Trace n°9 montre le rapport de deptry, un outil complémentaire qui vérifie la cohérence entre le
                  code source et les dépendances déclarées. Les cadres de couleur mettent en évidence trois types d'anomalies :
                  le cadre cyan pour les dépendances transitives (DEP003), le cadre jaune pour les modules utilisés mais non déclarés
                  (DEP001), et le cadre orange pour les paquets déclarés mais jamais importés (DEP002).
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="7">
              <img
                src="/images/Trace9_deptry.png"
                alt="Sortie deptry sur le projet EzGED"
                class="trace-image"
                @click="openImage('/images/Trace9_deptry.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;9</strong> &mdash; Sortie de <code class="inline-code">deptry</code> sur le projet EzGED
              </p>
            </v-col>
          </v-row>
          <v-divider class="my-4" />

          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="info" size="x-small" class="mx-1">d&eacute;ployer et utiliser des outils d&rsquo;analyse statique (ruff, deptry)</v-chip>,
              j&rsquo;ai install&eacute; et ex&eacute;cut&eacute; Ruff et deptry via le gestionnaire
              <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer">uv</a>
              directement dans l&rsquo;environnement du projet. Mon objectif &eacute;tait d&rsquo;obtenir
              une cartographie rapide et fiable du projet avant de commencer la migration. La Trace n&deg;8 montre
              le r&eacute;sultat de la commande Ruff, qui v&eacute;rifie instantan&eacute;ment la syntaxe, tandis que la
              Trace n&deg;9 montre le r&eacute;sultat de deptry, qui compare les imports r&eacute;els au fichier
              <code class="inline-code">pyproject.toml</code>. J&rsquo;ai d&ucirc; affiner la configuration de ces outils
              pour ignorer certains dossiers internes et &eacute;viter les faux positifs.
            </p>
            <p class="mb-3">
              Pour
              <v-chip color="info" size="x-small" class="mx-1">identifier et classifier les anomalies d&rsquo;un projet Python existant</v-chip>,
              j&rsquo;ai tri&eacute; m&eacute;thodiquement les milliers d'erreurs remont&eacute;es pour d&eacute;finir mes priorit&eacute;s
              d'action. Par exemple, sur la Trace n&deg;8, le cadre rouge du bas pointe une erreur de syntaxe
              (E713) qui est prioritaire car bloquante pour les nouvelles versions de Python. &Agrave; l'inverse,
              les cadres rouges du haut (F401) signalent de simples imports inutilis&eacute;s, qui rel&egrave;vent du
              style et sont moins urgents. J'ai appliqu&eacute; la m&ecirc;me logique avec la Trace n&deg;9, en
              cat&eacute;gorisant les d&eacute;pendances manquantes (jaunes), transitives (cyans) ou inutilis&eacute;es
              (oranges).
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
                  <v-chip color="info" size="small" class="mb-2">{{ sf.title }}</v-chip>
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
      <router-link to="/" class="text-blue-lighten-2 text-body-2">
        Retour &agrave; l&rsquo;accueil &rarr;
      </router-link>
      <p class="text-caption text-medium-emphasis mt-3">&copy; 2026 Baptiste Didier. Tous droits r&eacute;serv&eacute;s.</p>
    </v-card>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('comp5')

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
    id: "comp5",
    title: "Compétence 5 — Prendre en main un projet existant",
    savoirFaire: [
      {
        title: "Déployer et utiliser des outils d'analyse statique (ruff, deptry)",
        contexteUtilisation: "Audit complet du code EzGED pour détecter les erreurs, imports inutilisés et incompatibilités Python 3.13 (trace n°8, semaine 1).",
        contexteApprentissage: "Découvert en stage via la documentation officielle. Ruff et deptry n'avaient jamais été abordés en cours.",
        difficulte: "Faible pour l'exécution ; moyenne pour la configuration des règles pertinentes et l'exclusion des faux positifs.",
      },
      {
        title: "Identifier et classifier les anomalies d'un projet Python existant",
        contexteUtilisation: "Classification des 4958 erreurs ruff par sévérité et impact sur la migration, rédaction d'un rapport d'analyse sur GitLab (trace n°8, semaines 1-2).",
        contexteApprentissage: "Appris en stage avec l'aide de Florian Masy pour distinguer les erreurs de style des erreurs bloquantes.",
        difficulte: "Moyenne — il faut comprendre chaque code d'erreur et son impact concret sur le fonctionnement du logiciel.",
      },
    ],
    evaluation: {
      beforeLevel: "faible",
      beforeText: "Les outils ruff, deptry et uv m'étaient inconnus. Je n'avais jamais audité un projet existant ni classé des anomalies par sévérité.",
      afterLevel: "bon",
      afterText: "Je sais conduire un audit statique, classifier les anomalies et croiser les résultats pour valider la cohérence des dépendances.",
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
