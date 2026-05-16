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
                src="/images/Trace4_renovate.png"
                alt="Documentation Renovate utilis&eacute;e pour la configuration"
                class="trace-image"
                @click="openImage('/images/Trace4_renovate.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;4</strong> &mdash; Documentation Renovate consult&eacute;e pour configurer l&rsquo;outil
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="success" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-0">
                  La Trace n&deg;4 montre la documentation de
                  <a href="https://docs.renovatebot.com/" target="_blank" rel="noopener noreferrer">Renovate</a>,
                  l&rsquo;outil choisi pour automatiser les mises &agrave; jour de d&eacute;pendances. Cette doc sert de r&eacute;f&eacute;rence
                  pour comprendre comment Renovate d&eacute;tecte les versions &agrave; mettre &agrave; jour et g&eacute;n&egrave;re des
                  Merge Requests sur GitLab. Dans le contexte EzGED, elle a &eacute;t&eacute; indispensable pour d&eacute;finir
                  la configuration (regroupement, planification, automerge) avant d&rsquo;appliquer la mise en place.
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
                  La Trace n&deg;5 montre les Merge Requests (MR) g&eacute;n&eacute;r&eacute;es par Renovate sur la branche
                  <code class="inline-code">gestions_deps</code> dans GitLab. Ces MR regroupent les mises &agrave; jour
                  de d&eacute;pendances, affichent le changelog et une estimation du risque. Elles prouvent que
                  l&rsquo;automatisation fonctionne et qu&rsquo;elle s&rsquo;int&egrave;gre bien au flux de revue de l&rsquo;&eacute;quipe.
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="7">
              <img
                src="/images/Trace5_MRRenovate.png"
                alt="Commits GitLab sur la branche gestions_deps"
                class="trace-image"
                @click="openImage('/images/Trace5_MRRenovate.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;5</strong> &mdash; Merge Requests Renovate sur la branche
                <code class="inline-code">gestions_deps</code> dans GitLab
              </p>
            </v-col>
          </v-row>
          <v-divider class="my-4" />

          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">identifier et comparer des outils de mise &agrave; jour automatique de d&eacute;pendances</v-chip>,
              j&rsquo;ai men&eacute; une veille sur
              <a href="https://docs.renovatebot.com/" target="_blank" rel="noopener noreferrer">Renovate</a>
              et
              <a href="https://docs.github.com/en/code-security/dependabot" target="_blank" rel="noopener noreferrer">Dependabot</a>.
              La contrainte principale &eacute;tait la compatibilit&eacute; avec l&rsquo;instance GitLab interne d&rsquo;EzDEV.
              Dependabot &eacute;tant centr&eacute; sur GitHub, il ne r&eacute;pondait pas au besoin. La Trace n&deg;4 situe
              la documentation qui a servi &agrave; comparer les fonctionnalit&eacute;s et &agrave; justifier le choix.
            </p>
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">configurer Renovate sur un projet GitLab</v-chip>,
              j&rsquo;ai mis en place un fichier <code class="inline-code">renovate.json</code> et un pipeline
              <code class="inline-code">.gitlab-ci.yml</code> afin d&rsquo;ex&eacute;cuter Renovate en mode self-hosted.
              Les options importantes concernaient le regroupement, la planification et l&rsquo;automerge des
              petites mises &agrave; jour. La Trace n&deg;5 montre les MR cr&eacute;&eacute;es automatiquement, preuve que la
              configuration fonctionne dans notre GitLab interne.
            </p>
            <p>
              Pour
              <v-chip color="success" size="x-small" class="mx-1">r&eacute;diger une documentation technique exploitable par l&rsquo;&eacute;quipe</v-chip>,
              j&rsquo;ai structur&eacute; un document pas &agrave; pas : pr&eacute;sentation des outils &eacute;valu&eacute;s,
              proc&eacute;dure d&rsquo;installation, &eacute;tapes de la mont&eacute;e de version et points de vigilance.
              Cette documentation a été publiée sur Gitlab pour que l&rsquo;&eacute;quipe puisse reproduire le processus sans d&eacute;pendre de moi.
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
                src="/images/Trace6_commits.png"
                alt="Historique de commits GitLab"
                class="trace-image"
                @click="openImage('/images/Trace6_commits.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;6</strong> &mdash; Historique de commits sur GitLab
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="success" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-0">
                  La Trace n&deg;6 montre l&rsquo;historique de mes commits sur GitLab pendant le stage.
                  C&rsquo;est la preuve du suivi au fil de l&rsquo;eau : chaque &eacute;tape est versionn&eacute;e et reli&eacute;e
                  &agrave; une fonctionnalit&eacute; pr&eacute;cise. Les messages suivent la convention
                  <code class="inline-code">feat:</code> / <code class="inline-code">fix:</code> /
                  <code class="inline-code">docs:</code>, les branches sont nomm&eacute;es par fonctionnalit&eacute; et
                  chaque int&eacute;gration passe par une Merge Request valid&eacute;e par Florian Masy.
                </p>
              </v-card>
            </v-col>
          </v-row>
          <v-divider class="my-4" />

          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">g&eacute;rer son travail avec des branches Git nomm&eacute;es</v-chip>,
              chaque fonctionnalit&eacute; ou correctif a &eacute;t&eacute; d&eacute;velopp&eacute; sur une branche d&eacute;di&eacute;e
              (<code class="inline-code">feat/libcst-visitor</code>, <code class="inline-code">fix/coverage-path-normalization</code>, etc.).
              Cette pratique, recommand&eacute;e par
              <a href="https://git-scm.com/docs/git-branch" target="_blank" rel="noopener noreferrer">Git</a>,
              facilite les revues et &eacute;vite de polluer la branche principale.
            </p>
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">r&eacute;diger des messages de commit clairs et atomiques</v-chip>,
              j&rsquo;ai appliqu&eacute; une convention avec pr&eacute;fixes
              (<code class="inline-code">feat:</code>, <code class="inline-code">fix:</code>,
              <code class="inline-code">docs:</code>) inspir&eacute;e des bonnes pratiques
              <a href="https://www.conventionalcommits.org/" target="_blank" rel="noopener noreferrer">Conventional Commits</a>.
              Chaque commit correspond &agrave; une modification coh&eacute;rente et ind&eacute;pendante, ce qui rend
              l&rsquo;historique lisible et facilite les retours en arri&egrave;re.
            </p>
            <p>
              Pour
              <v-chip color="success" size="x-small" class="mx-1">soumettre son travail via des Merge Requests GitLab</v-chip>,
              chaque branche a &eacute;t&eacute; int&eacute;gr&eacute;e via une MR avec une description claire, en suivant
              les bonnes pratiques
              <a href="https://docs.gitlab.com/ee/user/project/merge_requests/" target="_blank" rel="noopener noreferrer">GitLab</a>.
              Les revues ont permis d&rsquo;identifier des ajustements, notamment sur la normalisation des chemins
              et la gestion des contextes de tests. Ce flux m&rsquo;a appris &agrave; d&eacute;couper le travail en morceaux
              raisonnables plut&ocirc;t que de tout envoyer d&rsquo;un coup.
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
            <v-col cols="12" md="6" v-for="sf in suiviSavoirFaire" :key="sf.title">
              <v-card variant="outlined" class="pa-3 h-100" rounded="lg">
                <v-chip color="success" size="small" class="mb-2">{{ sf.title }}</v-chip>
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
                <p class="text-body-2 mb-2">
                  <strong>Comp&eacute;tence 3 :</strong> Niveau <strong>faible</strong>. Aucune exp&eacute;rience de
                  veille structur&eacute;e ni de documentation technique &agrave; destination d&rsquo;une &eacute;quipe.
                  Renovate et Dependabot m&rsquo;&eacute;taient totalement inconnus.
                </p>
                <p class="text-body-2">
                  <strong>Comp&eacute;tence 4 :</strong> Niveau <strong>moyen</strong>. Bases Git acquises
                  en cours de BUT, mais peu d&rsquo;exp&eacute;rience des branches et MR en contexte professionnel.
                  Les commits n&rsquo;avaient pas de convention particuli&egrave;re.
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="outlined" class="pa-4" rounded="lg">
                <h4 class="text-subtitle-2 font-weight-bold mb-2">Apr&egrave;s le stage</h4>
                <p class="text-body-2 mb-2">
                  <strong>Comp&eacute;tence 3 :</strong> Niveau <strong>bon</strong>. Capable de mener une
                  veille structur&eacute;e, tester des outils en conditions r&eacute;elles et r&eacute;diger une
                  documentation directement utilisable par l&rsquo;&eacute;quipe.
                </p>
                <p class="text-body-2">
                  <strong>Comp&eacute;tence 4 :</strong> Niveau <strong>bon</strong>. Ma&icirc;trise du flux
                  Git en &eacute;quipe&nbsp;: branches nomm&eacute;es, commits atomiques avec convention, Merge
                  Requests avec revue de code. Le r&eacute;flexe est pris.
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

const suiviSavoirFaire = [
  {
    title: "Identifier et comparer des outils de mise à jour automatique",
    contexteUtilisation: "Veille sur Renovate et Dependabot pour automatiser la gestion des dépendances d'EzGED après la migration Python 3.13 (traces n°4-5, semaine 2).",
    contexteApprentissage: "Entièrement appris en stage. Ces outils n'avaient jamais été abordés en cours de BUT.",
    difficulte: "Moyenne — la comparaison demande de tester réellement les deux outils et de comprendre les contraintes du GitLab interne.",
  },
  {
    title: "Configurer Renovate sur un projet GitLab",
    contexteUtilisation: "Mise en place de Renovate sur un projet de test GitLab, configuration via renovate.json et intégration dans le pipeline CI (traces n°4-5, semaine 2).",
    contexteApprentissage: "Appris en stage à partir de la documentation Renovate et des échanges avec Florian Masy sur les runners GitLab.",
    difficulte: "Élevée — la gestion des droits du runner et du token d'accès pour la création automatique de MR a pris plusieurs essais.",
  },
  {
    title: "Rédiger une documentation technique exploitable",
    contexteUtilisation: "Rédaction de la documentation comparative Renovate/Dependabot et de la procédure de montée de version, publiée sur le Wiki GitLab (semaines 2-4).",
    contexteApprentissage: "Pratique développée en stage. La rédaction pour une équipe pro n'avait pas été travaillée en cours.",
    difficulte: "Faible pour la rédaction ; moyenne pour trouver le bon niveau de détail technique.",
  },
  {
    title: "Gérer son travail avec des branches Git nommées",
    contexteUtilisation: "Développement de chaque fonctionnalité sur une branche dédiée avec convention de nommage (trace n°6, tout le stage).",
    contexteApprentissage: "Bases Git en cours de BUT, convention de nommage des branches appliquée en conditions réelles de stage.",
    difficulte: "Faible — la convention est simple. La difficulté est de maintenir une granularité cohérente entre les branches.",
  },
  {
    title: "Rédiger des messages de commit clairs et atomiques",
    contexteUtilisation: "Application de la convention feat:/fix:/docs: pour chaque commit, facilitant les revues de Florian Masy (trace n°6, tout le stage).",
    contexteApprentissage: "Convention apprise en stage. Les commits en cours de BUT n'avaient pas de structure particulière.",
    difficulte: "Faible une fois la convention assimilée. Le découpage en commits atomiques demande un peu de réflexion.",
  },
  {
    title: "Soumettre son travail via des Merge Requests GitLab",
    contexteUtilisation: "Intégration de chaque branche via une MR avec description, soumise à la revue de Florian Masy avant merge (trace n°6, tout le stage).",
    contexteApprentissage: "Processus de MR connu théoriquement en cours, pratiqué et affiné en conditions réelles avec retours du tuteur.",
    difficulte: "Faible pour la création de la MR ; moyenne pour rédiger une description claire et anticiper les retours.",
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
