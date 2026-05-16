<template>
  <div>

    <!-- En-tete -->
    <v-card class="mb-5 pa-5" rounded="lg">
      <h1 class="text-h6 font-weight-bold mb-2">
        Pr&eacute;sentation et &eacute;valuation de savoir-faire techniques
      </h1>
      <p class="text-body-2 text-medium-emphasis">
        Cette page pr&eacute;sente les savoir-faire techniques mobilis&eacute;s lors de la migration EzGED vers
        Python&nbsp;3.13&nbsp;: analyse automatique du code source et g&eacute;n&eacute;ration de tests dynamiques.
      </p>
    </v-card>

    <!-- Contenu avec onglets -->
    <v-card class="pa-5" rounded="lg">
      <v-tabs v-model="tab" color="primary">
        <v-tab value="comp1">Comp&eacute;tence 1</v-tab>
        <v-tab value="comp2">Comp&eacute;tence 2</v-tab>
        <v-tab value="bilan">Bilan &amp; &Eacute;valuation</v-tab>
      </v-tabs>
      <v-divider class="mb-4" />

      <v-window v-model="tab">

        <!-- COMPETENCE 1 -->
        <v-window-item value="comp1">
          <h3 class="text-h5 font-weight-bold mb-3">
            Cr&eacute;ation d&rsquo;un script d&rsquo;analyse de code Python pour d&eacute;tecter les usages de d&eacute;pendances et leur couverture de tests
          </h3>
          <div class="mb-3">
            <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
            <v-chip color="error" size="small" class="ma-1">Utiliser LibCST pour d&eacute;tecter les usages de d&eacute;pendances</v-chip>
            <v-chip color="error" size="small" class="ma-1">Lire et exploiter un fichier pyproject.toml avec tomllib</v-chip>
            <v-chip color="error" size="small" class="ma-1">Lecture d&rsquo;un fichier .coverage avec l&rsquo;API coverage.py</v-chip>
          </div>

          <!-- Trace 1 - image a gauche, texte a droite -->
          <v-divider class="my-4" />
          <v-row class="mb-4" align="start">
            <v-col cols="12" md="7">
              <img
                src="/images/Trace1_technique.png"
                alt="Interface HTML g&eacute;n&eacute;r&eacute;e par le script d'analyse"
                style="width:100%; border-radius:8px; cursor:zoom-in; display:block;"
                @click="openImage('/images/Trace1_technique.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;1</strong> &mdash; Interface HTML g&eacute;n&eacute;r&eacute;e par le script d&rsquo;analyse
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="error" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-0">
                  La Trace n&deg;1 montre l&rsquo;interface HTML produite par mon script, g&eacute;n&eacute;r&eacute;e avec Jinja2.
                  Elle liste les fichiers Python d&rsquo;EzGED qui utilisent au moins une d&eacute;pendance externe.
                  Chaque fichier est d&eacute;pliable et affiche un tableau&nbsp;: ligne de l&rsquo;appel, statut
                  (TEST&Eacute; ou NON TEST&Eacute;), appel d&eacute;tect&eacute; avec ses param&egrave;tres, et fonction parente
                  avec son score de couverture.
                </p>
              </v-card>
            </v-col>
          </v-row>

          <!-- Trace 2 - image a droite, texte a gauche (diagonal) -->
          <v-divider class="my-4" />
          <v-row class="mb-4" align="start">
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="error" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-0">
                  La Trace n&deg;2 montre le fichier <code>pyproject.toml</code> d&rsquo;EzGED. On y voit
                  la section <code>[project]</code> avec la liste des d&eacute;pendances d&eacute;clar&eacute;es
                  (<code>paquet==version</code>). C&rsquo;est ce fichier qui d&eacute;finit le p&eacute;rim&egrave;tre
                  de l&rsquo;analyse&nbsp;: les imports &agrave; rechercher dans le code.
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="7">
              <img
                src="/images/Trace2_pyproject.png"
                alt="Fichier pyproject.toml d&rsquo;EzGED"
                style="width:100%; border-radius:8px; cursor:zoom-in; display:block;"
                @click="openImage('/images/Trace2_pyproject.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;2</strong> &mdash; Fichier <code>pyproject.toml</code> du projet EzGED
              </p>
            </v-col>
          </v-row>
          <v-divider class="my-4" />


          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="error" size="x-small" class="mx-1">lire et exploiter un fichier pyproject.toml avec tomllib</v-chip>,
              j&rsquo;ai utilis&eacute; le module <code>tomllib</code> int&eacute;gr&eacute; &agrave; Python depuis la 3.11 pour
              extraire la liste des d&eacute;pendances visible sur la Trace n&deg;2. La cl&eacute; <code>dependencies</code>
              de la section <code>[project]</code> donne directement les paquets &agrave; analyser. J&rsquo;ai aussi
              utilis&eacute; <code>importlib.metadata</code> pour faire correspondre les noms de distribution aux
              vrais noms de modules importables, car ce n&rsquo;est pas toujours identique&nbsp;: <code>Pillow</code>
              s&rsquo;importe sous le nom <code>PIL</code>, par exemple. Sans ce mapping, le script ignorait
              certaines d&eacute;pendances sans le signaler, ce qui aurait faux&eacute; les r&eacute;sultats.
            </p>
            <p class="mb-3">
              Pour
              <v-chip color="error" size="x-small" class="mx-1">utiliser LibCST pour d&eacute;tecter les usages de d&eacute;pendances</v-chip>,
              le script parcourt l&rsquo;arbre syntaxique concret de chaque fichier Python d&rsquo;EzGED et
              r&eacute;cup&egrave;re tous les appels li&eacute;s &agrave; une d&eacute;pendance du <code>pyproject.toml</code>. J&rsquo;ai choisi
              LibCST plut&ocirc;t que le module <code>ast</code> parce qu&rsquo;il donne acc&egrave;s au num&eacute;ro
              de ligne pr&eacute;cis de chaque appel, ce qui est n&eacute;cessaire pour croiser avec la
              couverture. Sur la Trace n&deg;1, la colonne &laquo;&nbsp;Appel d&eacute;tect&eacute;&nbsp;&raquo; affiche le
              r&eacute;sultat&nbsp;: par exemple <code>requests.Session()</code> dans <code>pastell.py</code>.
              Le plus dur a &eacute;t&eacute; la gestion des alias (<code>import requests as req</code>) et des
              appels imbriqu&eacute;s, qui n&eacute;cessitent de suivre le contexte des imports tout au long du fichier.
            </p>
            <p>
              Pour la
              <v-chip color="error" size="x-small" class="mx-1">lecture d&rsquo;un fichier .coverage avec l&rsquo;API coverage.py</v-chip>,
              le script lit le fichier <code>.coverage</code> g&eacute;n&eacute;r&eacute; par pytest. C&rsquo;est en fait une base
              SQLite qui enregistre toutes les lignes ex&eacute;cut&eacute;es pendant les tests. L&rsquo;API coverage.py
              donne, pour chaque fichier source, la liste des lignes couvertes. Le script croise ces
              donn&eacute;es avec les appels d&eacute;tect&eacute;s par LibCST&nbsp;: si la ligne d&rsquo;un appel est dans la liste,
              le badge <code>TEST&Eacute;</code> s&rsquo;affiche sur la Trace n&deg;1, sinon c&rsquo;est
              <code>NON TEST&Eacute;</code>. Le probl&egrave;me le plus concret a &eacute;t&eacute; la normalisation des
              chemins&nbsp;: le <code>.coverage</code> enregistre des chemins qui ne correspondent pas
              toujours &agrave; ceux du code source (absolu vs relatif, s&eacute;parateurs Windows/Linux).
            </p>
          </div>
        </v-window-item>

        <!-- COMPETENCE 2 -->
        <v-window-item value="comp2">
          <h3 class="text-h5 font-weight-bold mb-3">
            D&eacute;finition d&rsquo;une suite de tests dynamique cibl&eacute;e &agrave; partir d&rsquo;un fichier JSON
          </h3>
          <div class="mb-3">
            <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
            <v-chip color="error" size="small" class="ma-1">Charger et exploiter un fichier JSON structur&eacute; en Python</v-chip>
            <v-chip color="error" size="small" class="ma-1">Importer dynamiquement des modules Python avec importlib</v-chip>
            <v-chip color="error" size="small" class="ma-1">Construire dynamiquement des classes de tests avec unittest.TestCase</v-chip>
          </div>

          <v-divider class="my-4" />
          <v-row class="mb-4" align="start">
            <v-col cols="12" md="7">
              <img
                src="/images/Trace3_buildtest.png"
                alt="Fonctions build_test_class et build_tests"
                style="width:100%; border-radius:8px; cursor:zoom-in; display:block;"
                @click="openImage('/images/Trace3_buildtest.png')"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;3</strong> &mdash; Fonctions <code>build_test_class</code> et <code>build_tests</code> du script
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="error" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-0">
                  La Trace n&deg;3 montre les deux m&eacute;thodes centrales de <code>test_dependencies.py</code>.
                  <code>build_test_class</code> cr&eacute;e une classe dynamique qui h&eacute;rite de la classe source,
                  garde uniquement la m&eacute;thode cible et met les autres <code>test_*</code> &agrave;
                  <code>None</code>. <code>build_tests</code> lit le JSON et regroupe les classes dans
                  une <code>TestSuite</code> par librairie. Le but est de v&eacute;rifier la compatibilit&eacute;
                  d&rsquo;EzGED apr&egrave;s une mont&eacute;e de version sans &eacute;crire les tests &agrave; la main.
                </p>
              </v-card>
            </v-col>
          </v-row>
          <v-divider class="my-4" />

          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="error" size="x-small" class="mx-1">charger et exploiter un fichier JSON structur&eacute; en Python</v-chip>,
              <code>build_tests</code> lit <code>test_dependencies.json</code> via le module standard
              <code>json</code>. Ce fichier a une structure &agrave; trois niveaux&nbsp;: librairie, appel de
              fonction, liste de tests (avec <code>"fichier"</code>, <code>"class"</code> et
              <code>"method"</code>). Ce format a &eacute;t&eacute; propos&eacute; par Florian Masy lors d&rsquo;une revue,
              parce que regrouper par librairie facilite la construction d&rsquo;une <code>TestSuite</code>
              par librairie. J&rsquo;ai aussi d&ucirc; g&eacute;rer les doublons&nbsp;: un m&ecirc;me test peut couvrir plusieurs
              appels, et il ne doit appara&icirc;tre qu&rsquo;une seule fois pour ne pas &ecirc;tre ex&eacute;cut&eacute; en double.
            </p>
            <p class="mb-3">
              Pour
              <v-chip color="error" size="x-small" class="mx-1">importer dynamiquement des modules Python avec importlib</v-chip>,
              <code>build_test_class</code> utilise <code>importlib.import_module()</code> avec le chemin
              converti par <code>formater_chemin_module</code>. Cette m&eacute;thode transforme un chemin fichier
              (<code>eztest/tests/test_pastell.py</code>) en notation point&eacute;e
              (<code>tests.test_pastell</code>). Sans <code>importlib</code>, impossible de charger des
              classes dont les noms ne sont connus qu&rsquo;&agrave; l&rsquo;ex&eacute;cution. Ce qui m&rsquo;a pos&eacute; le plus de
              probl&egrave;mes, c&rsquo;est le r&eacute;pertoire de recherche&nbsp;: <code>import_module</code> cherche
              relativement au <code>sys.path</code> courant, donc le script devait s&rsquo;ex&eacute;cuter depuis
              le bon dossier.
            </p>
            <p>
              Pour
              <v-chip color="error" size="x-small" class="mx-1">construire dynamiquement des classes de tests avec unittest.TestCase</v-chip>,
              <code>build_test_class</code> utilise <code>type()</code> pour cr&eacute;er une classe qui
              h&eacute;rite de la source. Dans <code>attrs</code>, on ne met que la m&eacute;thode cibl&eacute;e, les
              autres sont mises &agrave; <code>None</code>. La classe est expos&eacute;e dans <code>globals()</code>
              pour que pytest la d&eacute;tecte. Le gros probl&egrave;me a &eacute;t&eacute; le m&eacute;lange des contextes&nbsp;: deux
              classes dynamiques h&eacute;ritant de la m&ecirc;me source partageaient leur <code>setUp</code>,
              ce qui provoquait des <code>AttributeError</code>. Isoler chaque test dans sa propre classe
              d&eacute;riv&eacute;e a r&eacute;gl&eacute; le probl&egrave;me. La suite a produit 155 failed, 159 passed et 6 errors
              en 84s, ce qui a identifi&eacute; les incompatibilit&eacute;s li&eacute;es aux mont&eacute;es de version.
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
            <v-col cols="12" md="6" v-for="sf in techSavoirFaire" :key="sf.title">
              <v-card variant="outlined" class="pa-3 h-100" rounded="lg">
                <v-chip color="error" size="small" class="mb-2">{{ sf.title }}</v-chip>
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
                  Niveau <strong>faible</strong>. J&rsquo;avais vu les bases de Python et les tests unitaires
                  en cours de BUT, mais jamais dans un contexte de migration ou de projet industriel.
                  LibCST, coverage.py, tomllib et importlib.metadata m&rsquo;&eacute;taient compl&egrave;tement inconnus.
                  Je n&rsquo;avais jamais g&eacute;n&eacute;r&eacute; de tests dynamiquement ni manipul&eacute; un arbre syntaxique.
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="outlined" class="pa-4" rounded="lg">
                <h4 class="text-subtitle-2 font-weight-bold mb-2">Apr&egrave;s le stage</h4>
                <p class="text-body-2">
                  Niveau <strong>bon</strong>. Je suis capable d&rsquo;analyser automatiquement les usages de
                  d&eacute;pendances via LibCST, de croiser les r&eacute;sultats avec la couverture de tests,
                  et de g&eacute;n&eacute;rer des suites de tests dynamiques cibl&eacute;es par librairie. La progression
                  vient de six semaines de pratique quotidienne sur EzGED, avec des revues r&eacute;guli&egrave;res
                  de Florian Masy qui m&rsquo;ont pouss&eacute; &agrave; am&eacute;liorer mon approche &agrave; chaque it&eacute;ration.
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
      <router-link to="/suivi" class="text-blue-lighten-2 text-body-2">
        D&eacute;couvrir le suivi de projet &rarr;
      </router-link>
      <p class="text-caption text-medium-emphasis mt-3">&copy; 2026 Baptiste Didier. Tous droits r&eacute;serv&eacute;s.</p>
    </v-card>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('comp1')

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

const techSavoirFaire = [
  {
    title: "Utiliser LibCST pour détecter les usages de dépendances",
    contexteUtilisation: "Détection automatique des imports et appels liés à chaque dépendance dans le code EzGED, alimentant l'interface HTML Jinja2 (trace n°1, semaines 2-3).",
    contexteApprentissage: "Appris entièrement en stage à partir de la documentation LibCST, sans base préalable en analyse syntaxique.",
    difficulte: "Élevée — la manipulation du CST demande de comprendre la structure interne du code Python et de gérer les alias d'imports.",
  },
  {
    title: "Lire et exploiter un fichier pyproject.toml avec tomllib",
    contexteUtilisation: "Extraction automatique de la liste des dépendances depuis le pyproject.toml d'EzGED, point d'entrée du script d'analyse (trace n°2, semaine 3).",
    contexteApprentissage: "Module découvert en stage, couplé avec importlib.metadata pour résoudre les correspondances noms de paquets / noms de modules.",
    difficulte: "Faible pour la lecture du TOML ; moyenne pour le mapping distribution/module avec importlib.metadata.",
  },
  {
    title: "Lecture d'un fichier .coverage avec l'API coverage.py",
    contexteUtilisation: "Croisement des données de couverture avec les appels détectés par LibCST pour identifier les zones non testées (trace n°1, semaines 3-4).",
    contexteApprentissage: "Appris en stage via la documentation. Le fichier .coverage est une base SQLite, j'ai dû comprendre son format interne.",
    difficulte: "Moyenne — la normalisation des chemins entre le .coverage et le code source a demandé une fonction dédiée.",
  },
  {
    title: "Charger et exploiter un fichier JSON structuré en Python",
    contexteUtilisation: "Lecture du JSON regroupé par librairie pour construire dynamiquement les suites de tests (trace n°3, semaines 5-6).",
    contexteApprentissage: "Bases JSON vues en cours de BUT, approfondissement de la déduplication et restructuration du format sur proposition de Florian Masy.",
    difficulte: "Faible pour la lecture ; moyenne pour la déduplication et la redéfinition du format à trois niveaux.",
  },
  {
    title: "Importer dynamiquement des modules Python avec importlib",
    contexteUtilisation: "Chargement à l'exécution des classes de tests référencées dans le JSON, car les noms ne sont connus qu'au runtime (trace n°3, semaines 5-6).",
    contexteApprentissage: "Découvert en stage. L'import dynamique n'a jamais été abordé en cours de BUT.",
    difficulte: "Moyenne — la gestion du sys.path et la conversion chemin fichier / notation pointée ont posé des problèmes multi-environnements.",
  },
  {
    title: "Construire dynamiquement des classes de tests avec unittest",
    contexteUtilisation: "Génération automatique de classes TestCase par librairie à partir du JSON pour vérifier la compatibilité après montée de version (trace n°3, semaines 5-6).",
    contexteApprentissage: "Bases unittest vues en cours, mécanisme type() pour la création dynamique appris entièrement en stage.",
    difficulte: "Élevée — le mélange des contextes setUp/tearDown entre classes dynamiques a nécessité plusieurs jours de débogage.",
  },
]
</script>
