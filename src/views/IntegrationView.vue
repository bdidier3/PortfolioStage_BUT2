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
            <v-chip color="info" size="small" class="ma-1">Solliciter les d&eacute;veloppeurs pour comprendre l&rsquo;architecture</v-chip>
          </div>

          <v-divider class="my-4" />
          <v-row class="mb-4" align="start">
            <v-col cols="12" md="7">
              <img
                src="/images/Trace7_ruff.png"
                alt="Sortie ruff sur le projet EzGED (4958 erreurs)"
                class="trace-image"
                @click="openImage('/images/Trace7_ruff.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;7</strong> &mdash; Sortie de <code class="inline-code">ruff check</code> sur le projet EzGED
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="info" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-0">
                  La Trace n&deg;7 montre la sortie de
                  <a href="https://docs.astral.sh/ruff/" target="_blank" rel="noopener noreferrer">Ruff</a>,
                  un linter Python utilis&eacute; pour un audit rapide du code avant la migration vers Python 3.13.
                  On y voit les codes d&rsquo;erreur (F401 imports inutilis&eacute;s, (E713 syntaxe d&eacute;pr&eacute;ci&eacute;e, etc) et un total de 4958 probl&egrave;mes, dont 68 en syntaxe Python 2. Ce rapport a &eacute;t&eacute; essentiel pour classer les anomalies par s&eacute;v&eacute;rit&eacute; et planifier les corrections.
                  de 4958 probl&egrave;mes. Ce r&eacute;sultat a servi &agrave; classer les anomalies et &agrave; rep&eacute;rer
                  les zones &agrave; traiter en priorit&eacute;.
                </p>
              </v-card>
            </v-col>
          </v-row>

          <!-- Trace 8 - texte a gauche, image a droite (diagonal) -->
          <v-divider class="my-4" />
          <v-row class="mb-4" align="start">
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="info" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-0">
                  La Trace n&deg;8 montre la sortie de
                  <a href="https://deptry.com/" target="_blank" rel="noopener noreferrer">deptry</a>,
                  l&rsquo;outil qui v&eacute;rifie la coh&eacute;rence entre le code et les d&eacute;pendances d&eacute;clar&eacute;es.
                  Il compare les imports avec <code class="inline-code">pyproject.toml</code> et met en avant
                  les erreurs DEP001 (modules manquants), DEP002 (paquets d&eacute;clar&eacute;s mais jamais import&eacute;s)
                  et DEP003 (d&eacute;pendances transitives). Ce r&eacute;sultat compl&egrave;te Ruff en se concentrant
                  sur la gestion des d&eacute;pendances.
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="7">
              <img
                src="/images/Trace8_deptry.png"
                alt="Sortie deptry sur le projet EzGED"
                class="trace-image"
                @click="openImage('/images/Trace8_deptry.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;8</strong> &mdash; Sortie de <code class="inline-code">deptry</code> sur le projet EzGED
              </p>
            </v-col>
          </v-row>
          <v-divider class="my-4" />

          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="info" size="x-small" class="mx-1">d&eacute;ployer et utiliser des outils d&rsquo;analyse statique (ruff, deptry)</v-chip>,
              j&rsquo;ai install&eacute; Ruff et deptry via
              <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer">uv</a>
              dans l&rsquo;environnement du projet. Les commandes principales &eacute;taient
              <code class="inline-code">uv run ruff check ezged lib</code> et
              <code class="inline-code">uv run deptry ezged lib</code>. Ruff analyse le code rapidement,
              et deptry compare les imports aux d&eacute;pendances d&eacute;clar&eacute;es dans
              <code class="inline-code">pyproject.toml</code>. J&rsquo;ai configur&eacute; deptry pour ignorer certains
              modules internes afin d&rsquo;&eacute;viter les faux positifs.
            </p>
            <p class="mb-3">
              Pour
              <v-chip color="info" size="x-small" class="mx-1">identifier et classifier les anomalies d&rsquo;un projet Python existant</v-chip>,
              j&rsquo;ai class&eacute; les 4958 erreurs Ruff par code et par s&eacute;v&eacute;rit&eacute;. Les erreurs de
              style (ex: F401 imports inutilis&eacute;s) ne bloquent pas la migration, alors que les erreurs
              li&eacute;es &agrave; Python 3.13 (syntaxes d&eacute;pr&eacute;ci&eacute;es, modules supprim&eacute;s de la stdlib)
              sont prioritaires. Le rapport a aussi mis en &eacute;vidence 68 fichiers en syntaxe Python 2 et
              des usages critiques du module <code class="inline-code">imp</code>. J&rsquo;ai produit un r&eacute;sum&eacute;
              distinguant les corrections automatiques de celles &agrave; traiter manuellement.
            </p>
            <p>
              Pour
              <v-chip color="info" size="x-small" class="mx-1">solliciter les d&eacute;veloppeurs pour comprendre l&rsquo;architecture</v-chip>,
              certaines d&eacute;pendances signal&eacute;es comme inutilis&eacute;es par deptry (ex:
              <code class="inline-code">paramiko</code>, <code class="inline-code">pyjwt</code>) ont &eacute;t&eacute; revues
              avec J&eacute;r&eacute;my Hindgray. Certaines pouvaient &ecirc;tre charg&eacute;es dynamiquement via
              <code class="inline-code">eval()</code> ou <code class="inline-code">getattr()</code>.
              Ces &eacute;changes ont &eacute;vit&eacute; de supprimer des d&eacute;pendances encore utiles et m&rsquo;ont aid&eacute;
              &agrave; mieux comprendre l&rsquo;architecture globale.
            </p>
          </div>
        </v-window-item>

        <!-- BILAN -->
        <v-window-item value="bilan">
          <h3 class="text-subtitle-1 font-weight-bold mb-4">
            Bilan &amp; Analyse
          </h3>

          <h4 class="text-body-1 font-weight-bold mb-3">R&eacute;sum&eacute; des savoir-faire &eacute;l&eacute;mentaires</h4>
          <v-row class="mb-6">
            <v-col cols="12" md="6" v-for="sf in integrationSavoirFaire" :key="sf.title">
              <v-card variant="outlined" class="pa-3 h-100" rounded="lg">
                <v-chip color="info" size="small" class="mb-2">{{ sf.title }}</v-chip>
                <p class="text-body-2 mb-1"><strong>Contexte d'utilisation :</strong> {{ sf.contexteUtilisation }}</p>
                <p class="text-body-2 mb-1"><strong>Contexte d'apprentissage :</strong> {{ sf.contexteApprentissage }}</p>
                <p class="text-body-2"><strong>Difficult&eacute; :</strong> {{ sf.difficulte }}</p>
              </v-card>
            </v-col>
          </v-row>

          <h4 class="text-body-1 font-weight-bold mb-3">&Eacute;valuation justifi&eacute;e du niveau d&rsquo;expertise</h4>
          <v-row>
            <v-col cols="12" md="6">
              <v-card variant="outlined" class="pa-4" rounded="lg">
                <h4 class="text-subtitle-2 font-weight-bold mb-2">Avant le stage</h4>
                <p class="text-body-2">
                  Niveau <strong>faible</strong>. Les outils ruff, deptry et uv m&rsquo;&eacute;taient totalement
                  inconnus. Je n&rsquo;avais jamais audit&eacute; un projet existant ni class&eacute; des anomalies par
                  s&eacute;v&eacute;rit&eacute;. Aucune exp&eacute;rience de prise en main d&rsquo;un projet professionnel volumineux,
                  la notion de dette technique &eacute;tait connue th&eacute;oriquement mais jamais rencontr&eacute;e en pratique.
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="outlined" class="pa-4" rounded="lg">
                <h4 class="text-subtitle-2 font-weight-bold mb-2">Apr&egrave;s le stage</h4>
                <p class="text-body-2">
                  Niveau <strong>bon</strong>. Capable de conduire un audit statique complet avec
                  ruff et deptry sur un projet Python volumineux, de classifier les anomalies par
                  criticit&eacute;, de croiser les r&eacute;sultats des deux outils pour valider la coh&eacute;rence
                  des d&eacute;pendances, et de r&eacute;diger un rapport exploitable par l&rsquo;&eacute;quipe. La
                  collaboration avec J&eacute;r&eacute;my Hindgray a aussi d&eacute;velopp&eacute; le r&eacute;flexe de solliciter
                  les bons interlocuteurs au bon moment.
                </p>
              </v-card>
            </v-col>
          </v-row>
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

const integrationSavoirFaire = [
  {
    title: "Déployer et utiliser des outils d'analyse statique (ruff, deptry)",
    contexteUtilisation: "Audit complet du code EzGED pour détecter les erreurs, imports inutilisés et incompatibilités Python 3.13 (trace n°7, semaine 1).",
    contexteApprentissage: "Découvert en stage via la documentation officielle. Ruff et deptry n'avaient jamais été abordés en cours.",
    difficulte: "Faible pour l'exécution ; moyenne pour la configuration des règles pertinentes et l'exclusion des faux positifs.",
  },
  {
    title: "Identifier et classifier les anomalies d'un projet Python existant",
    contexteUtilisation: "Classification des 4958 erreurs ruff par sévérité et impact sur la migration, rédaction d'un rapport d'analyse sur GitLab (trace n°7, semaines 1-2).",
    contexteApprentissage: "Appris en stage avec l'aide de Florian Masy pour distinguer les erreurs de style des erreurs bloquantes.",
    difficulte: "Moyenne — il faut comprendre chaque code d'erreur et son impact concret sur le fonctionnement du logiciel.",
  },
  {
    title: "Solliciter les développeurs pour comprendre l'architecture",
    contexteUtilisation: "Échanges avec Jérémy Hindgray pour confirmer les dépendances signalées par deptry et valider les fichiers critiques (traces n°7-8, semaines 1-2).",
    contexteApprentissage: "Pratique développée en stage. Formuler une question technique précise est une compétence professionnelle non travaillée en cours.",
    difficulte: "Faible — l'équipe était disponible. La difficulté était de préparer des questions précises pour ne pas perdre leur temps.",
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
