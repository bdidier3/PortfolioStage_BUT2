<template>
  <div>

    <!-- En-tete -->
    <v-card class="mb-5 pa-5" rounded="lg">
      <h1 class="text-h6 font-weight-bold mb-2">
        Pr&eacute;sentation et &eacute;valuation de savoir-faire techniques
      </h1>
      <p class="text-body-2 text-medium-emphasis">
        Cette page pr&eacute;sente les savoir-faire techniques mobilis&eacute;s lors de la migration EzGED vers
        Python&nbsp;3.13&nbsp;: audit de d&eacute;pendances, automatisation de l'analyse de code et int&eacute;gration CI/CD GitLab.
      </p>
    </v-card>

    <!-- Contenu avec onglets -->
    <v-card class="pa-5" rounded="lg">
      <v-tabs v-model="tab" color="primary">
        <v-tab value="trace1">Comp&eacute;tence 1</v-tab>
        <v-tab value="trace2">Comp&eacute;tence 2</v-tab>
        <v-tab value="bilan">Bilan &amp; &Eacute;valuation</v-tab>
      </v-tabs>
      <v-divider class="mb-4" />

      <v-window v-model="tab">

        <!-- TRACE 1 -->
        <v-window-item value="trace1">
          <h3 class="text-subtitle-1 font-weight-bold mb-3">
            Création d'un script d'analyse de code Python pour détecter les usages de dépendances et leur couverture de tests
          </h3>
          <div class="mb-3">
            <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
            <v-chip color="error" size="small" class="ma-1">Utiliser LibCST pour d&eacute;tecter les usages de d&eacute;pendances</v-chip>
            <v-chip color="error" size="small" class="ma-1">Lire et exploiter un fichier pyproject.toml avec tomllib</v-chip>
            <v-chip color="error" size="small" class="ma-1">Lecture d&rsquo;un fichier .coverage avec l&rsquo;API coverage.py</v-chip>
          </div>

          <v-row class="mb-4" align="start">
            <v-col cols="12" md="7">
              <img
                src="/images/Trace1_technique.png"
                alt="Interface HTML Jinja2 d’analyse des usages de d&eacute;pendances EzGED"
                style="width:100%; border-radius:8px; cursor:pointer; display:block;"
                @click="trace1Modal = true"
              />
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;1</strong> &mdash; Interface HTML Jinja2 d’analyse des usages de dépendances
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="error" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-3">
                  La Trace n&deg;1 ci-contre est une copie d&rsquo;&eacute;cran de l&rsquo;interface HTML g&eacute;n&eacute;r&eacute;e par le script
                  d&rsquo;analyse du projet EzGED. Cette interface, produite &agrave; l&rsquo;aide du moteur de templates Jinja2,
                  liste l&rsquo;ensemble des fichiers Python du projet utilisant au moins une d&eacute;pendance du projet.
                  Pour chaque fichier, un bloc d&eacute;pliable pr&eacute;sente un tableau &agrave; quatre colonnes&nbsp;: le num&eacute;ro
                  de ligne de l&rsquo;appel, son &eacute;tat de couverture (test&eacute; ou non), l&rsquo;appel d&eacute;tect&eacute; avec ses
                  param&egrave;tres et sa fonction parente avec son score de couverture.
                </p>
                <p class="text-body-2 mb-1">Le code couleur des fichiers a &eacute;t&eacute; d&eacute;fini comme suit&nbsp;:</p>
                <ul class="text-body-2 pl-5 mb-0">
                  <li><strong style="color:#9e9e9e;">Gris</strong>&nbsp;: Fichier sans couverture d&eacute;tect&eacute;e.</li>
                  <li><strong style="color:#fdd835;">Jaune</strong>&nbsp;: Fichier contenant des tests, mais pas sur les lignes des appels d&eacute;tect&eacute;s.</li>
                  <li><strong style="color:#4caf50;">Vert</strong>&nbsp;: Fichier avec au moins un appel d&eacute;tect&eacute; sur ligne test&eacute;e.</li>
                  <li><strong style="color:#f44336;">Rouge</strong>&nbsp;: Fichier contenant au moins un appel critique.</li>
                </ul>
              </v-card>
            </v-col>
          </v-row>

          <!-- Dialog zoom Trace 1 -->
          <v-dialog v-model="trace1Modal" max-width="1100">
            <v-card>
              <v-card-text class="pa-2">
                <img src="/images/Trace1_technique.png" alt="Trace n&deg;1" style="width:100%; border-radius:8px; display:block;" />
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn @click="trace1Modal = false">Fermer</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="error" size="x-small" class="mx-1">lire et exploiter un fichier pyproject.toml avec tomllib</v-chip>,
              la premi&egrave;re &eacute;tape de l&rsquo;impl&eacute;mentation a consist&eacute; &agrave; extraire automatiquement la liste des
              d&eacute;pendances du projet en lisant le fichier <code>pyproject.toml</code> avec le module
              <code>tomllib</code> int&eacute;gr&eacute; &agrave; Python depuis la version&nbsp;3.11. Ce fichier d&eacute;finit les
              d&eacute;pendances dans une section structur&eacute;e&nbsp;: la cl&eacute; <code>[project]</code> contient une
              entr&eacute;e <code>dependencies</code> qui liste les paquets requis. Son exploitation est indispensable
              pour d&eacute;limiter le p&eacute;rim&egrave;tre d&rsquo;analyse&nbsp;: sans cette liste, il serait impossible de savoir
              quels imports rechercher dans le code. J&rsquo;ai &eacute;galement int&eacute;gr&eacute;
              <code>importlib.metadata</code> pour r&eacute;soudre les noms de distribution en v&eacute;ritables noms de
              modules importables, car ces deux noms ne co&iuml;ncident pas toujours&nbsp;: le paquet
              <code>Pillow</code> s&rsquo;importe par exemple sous le nom <code>PIL</code>, et sans cette
              correspondance, les d&eacute;pendances concern&eacute;es auraient &eacute;t&eacute; silencieusement ignor&eacute;es lors de
              l&rsquo;analyse. La gestion de ces &eacute;carts a n&eacute;cessit&eacute; plusieurs ajustements pour couvrir
              correctement l&rsquo;ensemble des d&eacute;pendances d&rsquo;EzGED.
            </p>
            <p class="mb-3">
              Pour
              <v-chip color="error" size="x-small" class="mx-1">utiliser LibCST pour d&eacute;tecter les usages de d&eacute;pendances</v-chip>
              <v-chip color="warning" size="x-small" class="mx-1">&#x26A0; &Agrave; REVOIR</v-chip>
            </p>
            <p>
              Pour la
              <v-chip color="error" size="x-small" class="mx-1">lecture d&rsquo;un fichier .coverage avec l&rsquo;API coverage.py</v-chip>,
              j&rsquo;ai int&eacute;gr&eacute; dans le script la lecture du fichier <code>.coverage</code> g&eacute;n&eacute;r&eacute; par pytest,
              qui est une base de donn&eacute;es SQLite contenant les lignes de code effectivement ex&eacute;cut&eacute;es lors
              des tests. L&rsquo;API Python de coverage.py permet d&rsquo;interroger ce fichier pour obtenir, pour
              chaque fichier source, l&rsquo;ensemble des num&eacute;ros de lignes couvertes. Ces donn&eacute;es sont ensuite
              crois&eacute;es avec les r&eacute;sultats de l&rsquo;analyse LibCST&nbsp;: pour chaque appel d&eacute;tect&eacute; &agrave; une ligne
              donn&eacute;e, le script v&eacute;rifie si cette ligne est couverte, ce qui d&eacute;termine le badge
              <code>TEST&Eacute;</code> ou <code>NON TEST&Eacute;</code> affich&eacute; dans la colonne <code>Test&eacute;&nbsp;?</code>
              du tableau, ainsi que la couleur du badge <code>FILE&nbsp;X%</code> en t&ecirc;te de chaque fichier
              visible sur la trace. La principale difficult&eacute; a &eacute;t&eacute; la normalisation des chemins de
              fichiers&nbsp;: les chemins enregistr&eacute;s dans le <code>.coverage</code> et ceux produits par le
              parcours du code source ne sont pas toujours identiques (chemins absolus vs relatifs,
              diff&eacute;rences de s&eacute;parateurs Windows/Linux), ce qui a n&eacute;cessit&eacute; une fonction de normalisation
              d&eacute;di&eacute;e pour garantir une correspondance correcte.
            </p>
          </div>
        </v-window-item>

        <!-- TRACE 2 -->
        <v-window-item value="trace2">
          <h3 class="text-subtitle-1 font-weight-bold mb-3">
            Définition d'une suite de tests dynamique ciblée à partir d'un fichier JSON
          </h3>
          <div class="mb-3">
            <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
            <v-chip color="error" size="small" class="ma-1">Charger et exploiter un fichier JSON structur&eacute; en Python</v-chip>
            <v-chip color="error" size="small" class="ma-1">Importer dynamiquement des modules Python avec importlib</v-chip>
            <v-chip color="error" size="small" class="ma-1">Construire dynamiquement des classes de tests avec unittest.TestCase</v-chip>
          </div>

          <v-row class="mb-4" align="start">
            <v-col cols="12" md="5">
              <v-sheet color="grey-darken-3" rounded="lg" class="pa-3 d-flex flex-column align-center justify-center" min-height="200">
                <v-icon size="48" color="grey-lighten-1">mdi-image-outline</v-icon>
                <p class="text-caption text-medium-emphasis mt-2 text-center">
                  Image &agrave; venir &mdash; Code des fonctions <code>build_test</code> et <code>build_class_test</code>
                  du script <code>test_dependencies.py</code>
                </p>
              </v-sheet>
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;2</strong> &mdash; Code source des fonctions <code>build_test</code> et
                <code>build_class_test</code> du script <code>test_dependencies.py</code>.
                Ces deux fonctions constituent le c&oelig;ur du m&eacute;canisme de g&eacute;n&eacute;ration dynamique&nbsp;:
                <code>build_test</code> cr&eacute;e un objet test unittest &agrave; partir des attributs
                <code>"fichier"</code>, <code>"class"</code> et <code>"method"</code> du JSON&nbsp;;
                <code>build_class_test</code> regroupe ces tests en une classe <code>TestCase</code>
                d&eacute;di&eacute;e &agrave; chaque appel de d&eacute;pendance analys&eacute;.
              </p>
            </v-col>
            <v-col cols="12" md="7">
              <v-card variant="outlined" color="error" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-3">
                  La Trace n&deg;2 ci-contre est le code des fonctions <code>build_test</code> et
                  <code>build_class_test</code> du script <code>test_dependencies.py</code>, d&eacute;velopp&eacute; pour
                  g&eacute;n&eacute;rer dynamiquement une suite de tests unittest ciblant les d&eacute;pendances analys&eacute;es.
                  &Agrave; partir du fichier JSON produit par le script d&rsquo;analyse, ce script construit
                  automatiquement des classes de tests et des suites par librairie, sans avoir &agrave; &eacute;crire
                  manuellement un seul test.
                </p>
                <p class="text-body-2 mb-0">
                  Pour chaque appel de d&eacute;pendance pr&eacute;sent dans le JSON, une classe h&eacute;ritant de
                  <code>unittest.TestCase</code> est cr&eacute;&eacute;e dynamiquement&nbsp;: par exemple, pour l&rsquo;appel
                  <code>librairieA.une_fonction</code>, la classe g&eacute;n&eacute;r&eacute;e s&rsquo;appelle
                  <code>LibrairieAUne_FonctionTestCase</code>. Une suite de tests est ensuite constitu&eacute;e
                  par librairie et regroupe toutes les classes correspondant aux appels de cette librairie.
                  Cette trace illustre le savoir-faire central du stage&nbsp;: automatiser non seulement
                  l&rsquo;analyse, mais aussi la v&eacute;rification de la compatibilit&eacute; d&rsquo;EzGED apr&egrave;s une mont&eacute;e
                  de version de d&eacute;pendance.
                </p>
              </v-card>
            </v-col>
          </v-row>

          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="error" size="x-small" class="mx-1">charger et exploiter un fichier JSON structur&eacute; en Python</v-chip>,
              le script lit le fichier JSON produit par l&rsquo;analyse et navigue dans sa structure &agrave; trois
              niveaux&nbsp;: la librairie, les appels de fonctions associ&eacute;s, puis pour chaque appel la liste
              des tests couvrant ces lignes avec leurs attributs <code>"fichier"</code>, <code>"class"</code>
              et <code>"method"</code>. Ce format a &eacute;t&eacute; d&eacute;fini sur la proposition de Florian Masy lors
              d&rsquo;une revue, qui a sugg&eacute;r&eacute; de regrouper les r&eacute;sultats par librairie plut&ocirc;t que par fichier,
              afin de faciliter la construction des suites de tests. Sa mise en place a n&eacute;cessit&eacute; une
              red&eacute;finition du script d&rsquo;analyse pour &eacute;viter les doublons, en s&rsquo;assurant qu&rsquo;un m&ecirc;me test
              n&rsquo;appara&icirc;t qu&rsquo;une fois par appel de d&eacute;pendance, ce qui a demand&eacute; une gestion rigoureuse
              des ensembles lors de la construction du JSON.
            </p>
            <p class="mb-3">
              Pour
              <v-chip color="error" size="x-small" class="mx-1">importer dynamiquement des modules Python avec importlib</v-chip>,
              la fonction <code>build_test</code> utilise <code>importlib.import_module()</code> avec le
              chemin indiqu&eacute; par l&rsquo;attribut <code>"fichier"</code> du JSON pour charger le module de test
              correspondant au moment de l&rsquo;ex&eacute;cution. Sans importation dynamique, il serait impossible de
              r&eacute;f&eacute;rencer des classes de tests dont les noms ne sont connus qu&rsquo;&agrave; la lecture du JSON.
              La principale difficult&eacute; a &eacute;t&eacute; la gestion des chemins de modules&nbsp;: le script a &eacute;t&eacute;
              modifi&eacute; pour que les tests soient recherch&eacute;s directement dans le dossier o&ugrave; se trouve le
              script, et non dans un chemin &eacute;crit en dur, afin de garantir un fonctionnement identique
              sur toutes les machines.
            </p>
            <p>
              Pour
              <v-chip color="error" size="x-small" class="mx-1">construire dynamiquement des classes de tests avec unittest.TestCase</v-chip>,
              la fonction <code>build_class_test</code> utilise la fonction Python <code>type()</code> pour
              cr&eacute;er &agrave; la vol&eacute;e une classe h&eacute;ritant de <code>unittest.TestCase</code>, en lui passant son
              nom, sa classe parente et le dictionnaire de ses m&eacute;thodes. Chaque test est instanci&eacute; &agrave; partir
              de la classe r&eacute;cup&eacute;r&eacute;e dynamiquement via <code>importlib</code> en passant la m&eacute;thode
              indiqu&eacute;e par l&rsquo;attribut <code>"method"</code>. La difficult&eacute; principale a &eacute;t&eacute; de s&rsquo;assurer
              que le m&eacute;canisme <code>setUp</code> et <code>tearDown</code> de chaque classe de test d&rsquo;origine
              &eacute;tait bien respect&eacute; lors de l&rsquo;ex&eacute;cution dynamique, car une mauvaise initialisation
              provoquait des erreurs de type <code>AttributeError</code> ou m&eacute;langeait les contextes de tests.
              Apr&egrave;s corrections, la suite de tests a pu &ecirc;tre lanc&eacute;e avec des r&eacute;sultats
              (155&nbsp;failed, 159&nbsp;passed, 6&nbsp;errors en&nbsp;84&nbsp;s), documentant pr&eacute;cis&eacute;ment
              les incompatibilit&eacute;s li&eacute;es &agrave; la mont&eacute;e de version des d&eacute;pendances.
            </p>
          </div>
        </v-window-item>

        <!-- BILAN -->
        <v-window-item value="bilan">
          <h3 class="text-subtitle-1 font-weight-bold mb-4">
            Bilan &amp; Analyse &mdash; Savoir analyser un projet existant et automatiser la d&eacute;tection
            d'incompatibilit&eacute;s Python
          </h3>

          <h4 class="text-body-1 font-weight-bold mb-3">R&eacute;sum&eacute; des savoir-faire &eacute;l&eacute;mentaires associ&eacute;s</h4>
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

          <h4 class="text-body-1 font-weight-bold mb-3">&Eacute;valuation justifi&eacute;e du niveau d'expertise</h4>
          <v-row>
            <v-col cols="12" md="6">
              <v-card variant="outlined" class="pa-4" rounded="lg">
                <h4 class="text-subtitle-2 font-weight-bold mb-2">Avant le stage</h4>
                <p class="text-body-2">
                  Niveau <strong>faible</strong> &mdash; connaissances th&eacute;oriques sur Python et les tests
                  unitaires vues en cours de BUT, mais aucune exp&eacute;rience pratique de migration de d&eacute;pendances,
                  d'analyse statique avanc&eacute;e (LibCST, AST) ni de CI/CD.
                  Les outils ruff, deptry, uv, LibCST et coverage.py &eacute;taient totalement inconnus.
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="outlined" class="pa-4" rounded="lg">
                <h4 class="text-subtitle-2 font-weight-bold mb-2">Apr&egrave;s le stage</h4>
                <p class="text-body-2">
                  Niveau <strong>bon</strong> &mdash; capable d'auditer un projet Python existant, d'identifier
                  les incompatibilit&eacute;s avec une nouvelle version du langage, d'automatiser cette d&eacute;tection
                  via des scripts d'analyse (LibCST + coverage.py) et de configurer un pipeline CI/CD GitLab.
                  La progression est importante et directement li&eacute;e &agrave; la pratique intensive sur EzGED.
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>

      </v-window>
    </v-card>

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

const tab = ref('trace1')
const trace1Modal = ref(false)

const techSavoirFaire = [
  {
    title: "Utiliser deptry/ruff pour auditer les dépendances",
    contexteUtilisation: "Audit des dépendances d'EzGED pour identifier les paquets obsolètes, inutilisés ou incompatibles avec Python 3.13 (trace n°1, semaines 1–2).",
    contexteApprentissage: "Entièrement appris en stage, via la documentation officielle de ruff, deptry et uv et les échanges avec Florian Masy.",
    difficulte: "Faible pour ruff et uv ; moyenne pour deptry en raison des faux positifs liés aux modules internes du projet.",
  },
  {
    title: "Utiliser LibCST pour détecter les usages de dépendances",
    contexteUtilisation: "Détection automatique des imports et appels liés à chaque dépendance dans le code EzGED, alimentant l'interface HTML Jinja2 (trace n°1, semaines 2–3).",
    contexteApprentissage: "Entièrement appris en stage à partir de la documentation et d'exemples, sans base préalable en analyse syntaxique avancée.",
    difficulte: "Élevée — la manipulation du CST demande de comprendre la structure interne du code Python et de gérer les alias d'imports et les appels imbriqués.",
  },
  {
    title: "Charger et exploiter un fichier JSON structuré en Python",
    contexteUtilisation: "Lecture du JSON regroupé par librairie pour alimenter la construction dynamique des suites de tests (trace n°2, semaines 4–5).",
    contexteApprentissage: "Bases en JSON vues en cours de BUT, approfondissement de la gestion des doublons et de la restructuration du format sur proposition de Florian Masy.",
    difficulte: "Faible pour la lecture du JSON ; moyenne pour la déduplication des entrées et la redéfinition du format à trois niveaux.",
  },
  {
    title: "Construire dynamiquement des classes de tests avec unittest.TestCase",
    contexteUtilisation: "Génération automatique de classes TestCase et de suites de tests par librairie à partir du JSON (trace n°2, semaines 4–5).",
    contexteApprentissage: "Bases unittest vues en cours de BUT, mécanisme de création dynamique par type() et importlib appris entièrement en stage.",
    difficulte: "Élevée — la gestion du setUp/tearDown dynamique et le mélange des contextes de tests ont nécessité plusieurs jours de débogage.",
  },
]
</script>
