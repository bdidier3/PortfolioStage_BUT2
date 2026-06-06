<template>
  <div>

    <!-- En-tete -->
    <v-card class="mb-4 pa-4" rounded="lg">
      <h1 class="text-h6 font-weight-bold mb-1">
        Pr&eacute;sentation et &eacute;valuation de savoir-faire techniques
      </h1>
      <p class="text-body-2 text-medium-emphasis mb-0">
        Cette partie pr&eacute;sente les savoir-faire techniques mobilis&eacute;s lors de la migration EzGED vers
        Python&nbsp;3.13&nbsp;: analyse automatique du code source et g&eacute;n&eacute;ration de tests dynamiques.
        Chaque trace illustre un savoir-faire pr&eacute;cis, suivi d&rsquo;un bilan global.
      </p>
    </v-card>

    <!-- Contenu avec onglets -->
    <v-card class="pa-4" rounded="lg">
      <v-tabs v-model="tab" color="amber-darken-2" align-tabs="start" density="compact">
        <v-tab value="t1">Trace 1</v-tab>
        <v-tab value="t2">Trace 2</v-tab>
        <v-tab value="t3">Trace 3</v-tab>
        <v-tab value="t4">Trace 4</v-tab>
        <v-tab value="bilan">Bilan &amp; &Eacute;valuation</v-tab>
      </v-tabs>
      <v-divider class="mb-3" />

      <v-window v-model="tab">

        <!-- TRACE 1 -->
        <v-window-item value="t1">
          <v-card variant="flat" class="pa-3" rounded="lg">
            <h3 class="text-h6 font-weight-bold mb-2">
              D&eacute;tection des appels de d&eacute;pendances et croisement avec la couverture de tests
            </h3>
            <div class="mb-3">
              <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
              <v-chip color="#ff5252" size="small" class="ma-1">Utiliser LibCST pour d&eacute;tecter les usages de d&eacute;pendances</v-chip>
              <v-chip color="#ffa726" size="small" class="ma-1">Lire un fichier .coverage avec l&rsquo;API coverage.py</v-chip>
            </div>

            <v-row align="start" no-gutters class="g-row">
              <v-col cols="12" md="6" class="pe-md-4">
                <img
                  src="/images/Trace1_technique.png"
                  alt="Interface HTML g&eacute;n&eacute;r&eacute;e par le script d'analyse"
                  class="trace-image"
                  @click="openImage($event.currentTarget.currentSrc)"
                />
                <p class="text-caption text-medium-emphasis mt-2 mb-0">
                  <strong>Trace n&deg;1</strong> : Interface HTML produite par le script d&rsquo;analyse (rendu Jinja2).
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <div class="text-body-2 mb-2">
                  <p class="mb-2">
                    La <strong>Trace n&deg;1</strong> montre l&rsquo;interface HTML g&eacute;n&eacute;r&eacute;e par mon script d&rsquo;analyse des d&eacute;pendances.
                    Elle liste les fichiers Python d&rsquo;EzGED contenant au moins un appel vers une d&eacute;pendance externe
                    (chemins dans les <strong>cadres gris (A)</strong>, avec le pourcentage de couverture de code testé dans celui-ci).
                  </p>
                  <p class="mb-2">Chaque fichier est d&eacute;pliable et affiche, pour chaque appel d&eacute;tect&eacute;&nbsp;:</p>
                  <ul class="pl-4 mb-2">
                    <li>la ligne (colonne Ligne),</li>
                    <li>le statut de couverture (<strong>cadre jaune (C)</strong> avec <code class="inline-code">TESTE</code> / <code class="inline-code">NON TESTE</code>),</li>
                    <li>les tests qui l&rsquo;ex&eacute;cutent (<strong>cadre rouge (B)</strong>, colonne Contexte),</li>
                    <li>l&rsquo;appel lui-m&ecirc;me (<strong>soulign&eacute; en vert (D)</strong>),</li>
                    <li>et la fonction parente avec son score.</li>
                  </ul>
                  <p class="mb-0">
                    Le <strong>cadre bleu (E)</strong> isole un cas particulier&nbsp;: <code class="inline-code">imp.find_module</code>,
                    signal&eacute; <strong>[!]</strong> car le module est supprim&eacute; entre Python&nbsp;3.11 et 3.13,
                    un point bloquant &agrave; remonter avant migration. Cette d&eacute;tection est automatique&nbsp;: le script
                    utilise la biblioth&egrave;que <code class="inline-code">stdlib_list</code> pour comparer la liste des
                    modules de la biblioth&egrave;que standard entre deux versions de Python et marque ceux qui ont
                    disparu.
                  </p>
                </div>
                <p class="text-body-2 mb-2">
                  Pour <span class="sf-t1a">utiliser LibCST</span>, j&rsquo;ai cr&eacute;&eacute; une classe qui h&eacute;rite de
                  <code class="inline-code">cst.CSTVisitor</code>&nbsp;: elle parcourt le CST (Concrete Syntax Tree) des
                  fichiers Python pour analyser le code sans l&rsquo;ex&eacute;cuter. Cette classe d&eacute;tecte les appels vers
                  des d&eacute;pendances externes, y compris lorsque les imports utilisent des alias
                  (<code class="inline-code">import numpy as np</code>) ou des imports cibl&eacute;s
                  (<code class="inline-code">from PIL import Image</code>). LibCST m&rsquo;a aussi permis de r&eacute;cup&eacute;rer
                  le num&eacute;ro de ligne exact de chaque appel gr&acirc;ce aux m&eacute;tadonn&eacute;es fournies par
                  <code class="inline-code">PositionProvider</code>.
                </p>
                <p class="text-body-2 mb-0">
                  Pour <span class="sf-t1b">lire le fichier .coverage</span>, j&rsquo;ai utilis&eacute; l&rsquo;API
                  <a href="https://coverage.readthedocs.io/" target="_blank" rel="noopener noreferrer">coverage.py</a>
                  via <code class="inline-code">coverage.CoverageData</code>. Le fichier est en interne une base SQLite,
                  mais l&rsquo;API &eacute;vite de la requ&ecirc;ter. La m&eacute;thode <code class="inline-code">contexts_by_lineno()</code>
                  retourne, pour chaque ligne couverte, la liste des tests qui l&rsquo;ont ex&eacute;cut&eacute;e&nbsp;: si la ligne d&rsquo;un
                  appel y figure, le badge <code class="inline-code">TESTE</code> s&rsquo;affiche et les tests responsables sont list&eacute;s,
                  indispensable pour cibler les tests &agrave; rejouer lors d&rsquo;une mont&eacute;e de version.
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>

        <!-- TRACE 2 -->
        <v-window-item value="t2">
          <v-card variant="flat" class="pa-3" rounded="lg">
            <h3 class="text-h6 font-weight-bold mb-2">
              Configuration du projet et gestion centralis&eacute;e des d&eacute;pendances Python
            </h3>
            <div class="mb-3">
              <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
              <v-chip color="#ffd740" size="small" class="ma-1">Configurer un projet Python avec pyproject.toml et uv</v-chip>
              <v-chip color="#69f0ae" size="small" class="ma-1">Configurer deptry pour &eacute;viter les faux positifs sur les modules internes</v-chip>
            </div>

            <v-row align="start" no-gutters class="g-row">
              <v-col cols="12" md="6" class="pe-md-4">
                <img
                  src="/images/Trace2_pyproject.png"
                  alt="Fichier pyproject.toml d&rsquo;EzGED"
                  class="trace-image"
                  @click="openImage($event.currentTarget.currentSrc)"
                />
                <p class="text-caption text-medium-emphasis mt-2 mb-0">
                  <strong>Trace n&deg;2</strong> : Fichier <code class="inline-code">pyproject.toml</code> du projet EzGED.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <div class="text-body-2 mb-2">
                  <p class="mb-2">
                    La <strong>Trace n&deg;2</strong> montre le fichier <code class="inline-code">pyproject.toml</code>, qui centralise
                    toute la configuration du projet. Plusieurs sections sont mises en &eacute;vidence&nbsp;:
                  </p>
                  <ul class="pl-4 mb-0">
                    <li class="mb-1">
                      <strong>Cadre jaune (A)</strong> : <code class="inline-code">requires-python = ">=3.11"</code> qui définit la version minimale de Python requise pour le projet.
                    </li>
                    <li class="mb-1">
                      <strong>Cadre rouge (B)</strong> : la liste <code class="inline-code">dependencies</code> o&ugrave; chaque paquet est &eacute;pingl&eacute; &agrave; une version pr&eacute;cise
                      (soulign&eacute; en bleu&nbsp;: <code class="inline-code">annotated-types==0.7.0</code>), ce qui garantit la reproductibilit&eacute; de l&rsquo;environnement.
                    </li>
                    <li class="mb-1">
                      <strong>Ligne blanche (C)</strong> : la section <code class="inline-code">[dependency-groups] dev</code> regroupe &agrave; part les outils utilis&eacute;s uniquement en d&eacute;veloppement
                      (<code class="inline-code">coverage</code>, <code class="inline-code">deptry</code>, <code class="inline-code">pytest</code>, <code class="inline-code">ruff</code>, <code class="inline-code">libcst</code>, <code class="inline-code">jinja2</code>...), afin de ne pas les installer en production.
                    </li>
                    <li class="mb-1">
                      <strong>Ligne verte (D)</strong> : la section <code class="inline-code">[tool.deptry]</code> d&eacute;clare via <code class="inline-code">known_first_party</code> les modules internes du projet
                      (<code class="inline-code">wf</code>, <code class="inline-code">fs</code>, <code class="inline-code">libjobdext</code>...) pour qu&rsquo;ils ne soient pas confondus avec des d&eacute;pendances externes.
                    </li>
                    <li>
                      <strong>Ligne grise (E)</strong> : <code>exclude</code> permet d'exclure certains fichiers du projet de l'analyse que l'on ne veut pas auditer.
                    </li>
                  </ul>
                </div>
                <p class="text-body-2 mb-2">
                  Pour <span class="sf-t2a">configurer le projet</span>, j&rsquo;ai utilis&eacute;
                  <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer">uv</a>, un gestionnaire moderne
                  qui remplace <code class="inline-code">pip</code> et <code class="inline-code">venv</code>. La commande
                  <code class="inline-code">uv sync</code> lit le <code class="inline-code">pyproject.toml</code>, cr&eacute;e un
                  environnement virtuel isol&eacute; dans <code class="inline-code">.venv/</code> et installe les d&eacute;pendances
                  aux versions exactes sp&eacute;cifi&eacute;es. Cela permet de tester une mont&eacute;e de version
                  (ex.&nbsp;<code class="inline-code">mail-parser==3.16.0</code>) sans impacter le syst&egrave;me, et de s&eacute;parer
                  proprement les d&eacute;pendances de production des outils de d&eacute;veloppement gr&acirc;ce aux
                  <code class="inline-code">dependency-groups</code>.
                </p>
                <p class="text-body-2 mb-0">
                  Pour <span class="sf-t2b">configurer deptry</span>, outil d&rsquo;audit des d&eacute;pendances, j&rsquo;ai utilis&eacute; la
                  section <code class="inline-code">[tool.deptry]</code>. Lors du premier audit, deptry signalait &agrave; tort les
                  modules internes (<code class="inline-code">wf</code>, <code class="inline-code">fs</code>,
                  <code class="inline-code">coldtrt</code>...) comme d&eacute;pendances manquantes (code <code class="inline-code">DEP001</code>),
                  car ils ne sont pas publi&eacute;s sur PyPI. En les d&eacute;clarant dans
                  <code class="inline-code">known_first_party</code>, deptry les reconna&icirc;t comme code interne et concentre
                  son analyse sur les vraies d&eacute;pendances externes, ce qui rend les rapports d&rsquo;audit fiables et exploitables.
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>

        <!-- TRACE 3 -->
        <v-window-item value="t3">
          <v-card variant="flat" class="pa-3" rounded="lg">
            <h3 class="text-h6 font-weight-bold mb-2">
              G&eacute;n&eacute;ration dynamique de classes de tests &agrave; partir d&rsquo;un fichier JSON
            </h3>
            <div class="mb-3">
              <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
              <v-chip color="#00bcd4" size="small" class="ma-1">Charger dynamiquement un module Python avec importlib</v-chip>
              <v-chip color="#42a5f5" size="small" class="ma-1">G&eacute;n&eacute;rer des classes de tests &agrave; la vol&eacute;e avec type(), ex&eacute;cutables par unittest et pytest</v-chip>
            </div>

            <v-row align="start" no-gutters class="g-row">
              <v-col cols="12" md="6" class="pe-md-4">
                <img
                  src="/images/Trace3_buildtest.png"
                  alt="Fonctions build_test_class et build_tests"
                  class="trace-image"
                  @click="openImage($event.currentTarget.currentSrc, 'tall')"
                />
                <p class="text-caption text-medium-emphasis mt-2 mb-0">
                  <strong>Trace n&deg;3</strong> : Fonctions <code class="inline-code">build_test_class</code> et
                  <code class="inline-code">build_tests</code> du script de suites dynamiques.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <div class="text-body-2 mb-2">
                  <p class="mb-2">
                    La <strong>Trace n&deg;3</strong> montre le m&eacute;canisme de g&eacute;n&eacute;ration dynamique de tests utilis&eacute;
                    pour ne rejouer automatiquement que les tests pertinents lors d&rsquo;une mont&eacute;e de version de d&eacute;pendance.
                    &Agrave; partir du fichier JSON d&eacute;crit en <a href="#" class="trace-link" @click.prevent="tab = 't4'">Trace n&deg;4</a>,
                    qui associe chaque appel de d&eacute;pendance aux tests qui le couvrent, le script construit &agrave; l&rsquo;ex&eacute;cution
                    une classe de test par couple (d&eacute;pendance, appel, m&eacute;thode). Les classes g&eacute;n&eacute;r&eacute;es
                    h&eacute;ritent indirectement d&rsquo;<code class="inline-code">unittest.TestCase</code>, ce qui les rend ex&eacute;cutables
                    aussi bien par unittest que par pytest (via la d&eacute;couverte automatique des
                    <code class="inline-code">TestCase</code> expos&eacute;s au niveau du module).
                  </p>
                  <p class="mb-2">La trace met en &eacute;vidence les points cl&eacute;s du m&eacute;canisme&nbsp;:</p>
                  <ul class="pl-4 mb-0">
                    <li class="mb-1">
                      <strong>Soulignement bleu (A) (ligne 41)</strong> : chargement du module source via <code class="inline-code">importlib.import_module</code>.
                    </li>
                    <li class="mb-1">
                      <strong>Soulignement jaune (B) (ligne 42)</strong> : r&eacute;cup&eacute;ration de la classe d&rsquo;origine avec <code class="inline-code">getattr</code>.
                    </li>
                    <li class="mb-1">
                      <strong>Cadre vert (C) (lignes 50-52)</strong> : neutralisation des autres m&eacute;thodes
                      <code class="inline-code">test_*</code> de la classe parente, afin que les tests des autres d&eacute;pendances
                      ne se m&eacute;langent pas dans la classe g&eacute;n&eacute;r&eacute;e.
                    </li>
                    <li class="mb-1">
                      <strong>Soulignement gris (D) (ligne 54)</strong> : cr&eacute;ation de la classe dynamique avec <code class="inline-code">type()</code>.
                    </li>
                    <li>
                      <strong>Cadre rouge (E) (ligne 73)</strong> : injection de la classe cr&eacute;&eacute;e dans <code class="inline-code">globals()</code>
                      pour qu&rsquo;elle soit d&eacute;couverte par pytest.
                    </li>
                  </ul>
                </div>
                <p class="text-body-2 mb-2">
                  Pour <span class="sf-t3a">utiliser importlib</span>, j&rsquo;ai d&rsquo;abord transform&eacute; le chemin stock&eacute;
                  dans le JSON (<code class="inline-code">eztest/foo/bar.py</code>) en nom de module Python
                  (<code class="inline-code">foo.bar</code>) via une fonction utilitaire
                  <code class="inline-code">formater_chemin_module</code> que j&rsquo;ai &eacute;crite dans le script. Ensuite,
                  <code class="inline-code">importlib.import_module</code> importe le module &agrave; partir de ce nom
                  (soulignement bleu ligne 41) et <code class="inline-code">getattr(module, test_def["class"])</code>
                  r&eacute;cup&egrave;re la classe de test &agrave; partir de son nom (soulignement jaune ligne 42). Cela &eacute;vite
                  tout import statique et permet de cibler n&rsquo;importe quelle classe de test du projet sans modifier
                  le script.
                </p>
                <p class="text-body-2 mb-0">
                  Pour <span class="sf-t3b">utiliser type()</span>, chaque entr&eacute;e du JSON donne lieu &agrave; une classe unique
                  nomm&eacute;e <code class="inline-code">{lib}_{call}_{method}TestCase</code> (soulignement gris ligne 54),
                  h&eacute;ritant de la classe d&rsquo;origine (et donc indirectement d&rsquo;<code class="inline-code">unittest.TestCase</code>).
                  Le dictionnaire <code class="inline-code">attrs</code> pass&eacute; &agrave; <code class="inline-code">type()</code>
                  ne conserve que la m&eacute;thode vis&eacute;e et met &agrave; <code class="inline-code">None</code> toutes les autres
                  m&eacute;thodes <code class="inline-code">test_*</code> h&eacute;rit&eacute;es (cadre vert lignes 50-52). Sans cette
                  neutralisation, l&rsquo;ex&eacute;cuteur rejouerait, depuis chaque classe g&eacute;n&eacute;r&eacute;e, l&rsquo;ensemble des tests
                  de la classe parente. La classe r&eacute;sultante est ensuite stock&eacute;e dans
                  <code class="inline-code">globals()</code> (cadre rouge ligne 73), ce qui la rend visible &agrave; la fois pour
                  la collecte de pytest et pour <code class="inline-code">unittest.main()</code>. Cette double compatibilit&eacute;
                  permet d&rsquo;utiliser le script aussi bien en local
                  (<code class="inline-code">python test_dependencies.py</code>) que dans la CI/CD GitLab via pytest,
                  et de ne rejouer que les tests li&eacute;s &agrave; la d&eacute;pendance mise &agrave; jour.
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>

        <!-- TRACE 4 -->
        <v-window-item value="t4">
          <v-card variant="flat" class="pa-3" rounded="lg">
            <h3 class="text-h6 font-weight-bold mb-2">
              Structuration du fichier JSON ciblant les tests par d&eacute;pendance et par appel
            </h3>
            <div class="mb-3">
              <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
              <v-chip color="#ab47bc" size="small" class="ma-1">Concevoir une structure JSON hi&eacute;rarchis&eacute;e pour cibler les tests par d&eacute;pendance</v-chip>
              <v-chip color="#ff80ab" size="small" class="ma-1">Exporter automatiquement l&rsquo;audit LibCST dans un fichier JSON r&eacute;utilisable par d&rsquo;autres scripts</v-chip>
            </div>

            <v-row align="start" no-gutters class="g-row">
              <v-col cols="12" md="6" class="pe-md-4">
                <img
                  src="/images/Trace4_jsonfile.png"
                  alt="Fichier JSON des tests dynamiques"
                  class="trace-image"
                  @click="openImage($event.currentTarget.currentSrc)"
                />
                <p class="text-caption text-medium-emphasis mt-2 mb-0">
                  <strong>Trace n&deg;4</strong> : Fichier JSON source utilis&eacute; pour g&eacute;n&eacute;rer les suites de tests.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <div class="text-body-2 mb-2">
                  <p class="mb-2">
                    La <strong>Trace n&deg;4</strong> montre la structure du fichier <code class="inline-code">test_dependencies.json</code>
                    export&eacute; par mon script en fin d&rsquo;analyse. Elle suit trois niveaux&nbsp;:
                  </p>
                  <ul class="pl-4 mb-2">
                    <li>
                      <strong>1<sup>er</sup> niveau (soulign&eacute; en rouge (A))</strong> : le nom de la d&eacute;pendance Python
                      (<code class="inline-code">reportlab</code> et <code class="inline-code">pypdf2</code>),
                    </li>
                    <li>
                      <strong>2<sup>e</sup> niveau (soulign&eacute; en vert (B))</strong> : le chemin complet de l&rsquo;appel d&eacute;tect&eacute;
                      (<code class="inline-code">reportlab.pdfgen.canvas.Canvas</code> et <code class="inline-code">PyPDF2.PdfReader</code>),
                    </li>
                    <li>
                      <strong>3<sup>e</sup> niveau (cadres jaunes (C))</strong> : la liste des tests qui exercent cet appel,
                      avec leurs champs <code class="inline-code">fichier</code>, <code class="inline-code">class</code> et <code class="inline-code">method</code>.
                    </li>
                  </ul>
                  <p class="mb-0">
                    Le bloc <code class="inline-code">PyPDF2.PdfReader</code> illustre l&rsquo;int&eacute;r&ecirc;t du format&nbsp;:
                    un m&ecirc;me module peut &ecirc;tre appel&eacute; par plusieurs tests r&eacute;partis dans plusieurs fichiers
                    (<code class="inline-code">test_scripts.py</code> et <code class="inline-code">test_ezpdfutils.py</code>),
                    tous remont&eacute;s ici pour &ecirc;tre rejou&eacute;s ensemble lors d&rsquo;une mont&eacute;e de version de <code class="inline-code">pypdf2</code>.
                  </p>
                </div>
                <p class="text-body-2 mb-2">
                  Pour <span class="sf-t4a">la structure JSON</span>, j&rsquo;ai invers&eacute; le regroupement par rapport &agrave; la
                  premi&egrave;re version du script&nbsp;: au lieu de partir des fichiers du code, je pars de la d&eacute;pendance,
                  car c&rsquo;est elle qui d&eacute;clenche le besoin de rejouer des tests lors d&rsquo;une mise &agrave; jour.
                  J&rsquo;ai ajout&eacute; un niveau interm&eacute;diaire pour l&rsquo;appel exact (<code class="inline-code">PdfReader</code>
                  ), ce qui &eacute;vite de relancer toute la base de tests d&rsquo;une
                  d&eacute;pendance quand seule une de ses fonctions est impact&eacute;e par un changement d&rsquo;API. Le format JSON
                  a &eacute;t&eacute; choisi pour &ecirc;tre charg&eacute; nativement par Python via <code class="inline-code">json.load</code>,
                  sans d&eacute;pendance suppl&eacute;mentaire dans le script consommateur.
                </p>
                <p class="text-body-2 mb-0">
                  Pour <span class="sf-t4b">exporter automatiquement l&rsquo;audit au format JSON</span>, j&rsquo;ai ajout&eacute; &agrave; mon
                  script LibCST une &eacute;tape finale qui &eacute;crit via <code class="inline-code">json.dump</code> le dictionnaire
                  des d&eacute;pendances, de leurs appels et des tests associ&eacute;s dans un fichier
                  <code class="inline-code">test_dependencies.json</code>. Le choix du JSON tient &agrave; trois raisons concr&egrave;tes&nbsp;:
                  Python le lit nativement via <code class="inline-code">json.load</code> sans d&eacute;pendance suppl&eacute;mentaire
                  dans le script qui s&rsquo;en sert, le format reste lisible par un humain (utile pour relire visuellement la
                  <strong>Trace n&deg;4</strong> avant de lancer une suite ou ajouter manuellement un test), et il peut &ecirc;tre
                  versionn&eacute; dans Git pour suivre l&rsquo;&eacute;volution du plan de tests &agrave; mesure que le code &eacute;volue.
                  Chaque entr&eacute;e terminale visible dans les <strong>cadres jaunes</strong> suit un contrat minimal
                  <code class="inline-code">{fichier, class, method}</code>&nbsp;: exactement ce que la fonction
                  <code class="inline-code">build_test_class()</code> c&ocirc;t&eacute; lancement des tests
                  (<a href="#" class="trace-link" @click.prevent="tab = 't3'">Trace n&deg;3</a>) attend pour construire la
                  classe de test dynamique. Ce passage par un fichier interm&eacute;diaire permet de relancer l&rsquo;audit et le
                  lancement des tests ind&eacute;pendamment, et d&rsquo;ins&eacute;rer entre les deux une &eacute;tape de relecture manuelle
                  de la liste de tests.
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>

        <!-- BILAN -->
        <v-window-item value="bilan">
          <div class="mb-6">
            <v-card variant="flat" class="pa-4 bilan-card" rounded="lg">
              <div class="d-flex flex-wrap align-center justify-space-between mb-4">
                <span class="text-body-1 font-weight-bold">Analyse statique de code Python avec un CST</span>
              </div>

              <ul class="sf-list text-body-2 mb-3">
                <li><span class="sf-t1a">Utiliser <a href="https://libcst.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer"><span class="code-tag">LibCST</span></a> pour d&eacute;tecter les usages de d&eacute;pendances</span> (<a href="#" class="trace-link" @click.prevent="tab = 't1'">Trace n&deg;1</a>) : rep&eacute;rer automatiquement les appels externes.</li>
                <li><span class="sf-t1b">Lire un fichier <span class="code-tag">.coverage</span> avec l&rsquo;API <a href="https://coverage.readthedocs.io/" target="_blank" rel="noopener noreferrer"><span class="code-tag">coverage.py</span></a></span> (<a href="#" class="trace-link" @click.prevent="tab = 't1'">Trace n&deg;1</a>) : relier appels et tests pour cibler ceux &agrave; rejouer.</li>
                <li><span class="sf-t4b">Exporter automatiquement l&rsquo;audit <span class="code-tag">LibCST</span> dans un fichier <span class="code-tag">JSON</span> r&eacute;utilisable</span> (<a href="#" class="trace-link" @click.prevent="tab = 't4'">Trace n&deg;4</a>) : transformer le r&eacute;sultat de l&rsquo;analyse statique en livrable exploitable par d&rsquo;autres scripts.</li>
              </ul>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte : </span>
                Pour pr&eacute;parer la migration EzGED vers Python&nbsp;3.13, je devais savoir pr&eacute;cis&eacute;ment <em>o&ugrave;</em> chaque d&eacute;pendance externe &eacute;tait appel&eacute;e dans le code et <em>quels appels &eacute;taient d&eacute;j&agrave; couverts</em> par des tests. J&rsquo;ai combin&eacute; <span class="code-tag">LibCST</span> (parcours du code sans l&rsquo;ex&eacute;cuter) et l&rsquo;API <span class="code-tag">coverage.py</span> (lecture du fichier <code class="inline-code">.coverage</code> produit par pytest) pour g&eacute;n&eacute;rer un rapport HTML unique (<a href="#" class="trace-link" @click.prevent="tab = 't1'">Trace n&deg;1</a>) et un export JSON (<a href="#" class="trace-link" @click.prevent="tab = 't4'">Trace n&deg;4</a>) qui listent chaque appel avec son statut <code class="inline-code">TESTE</code>/<code class="inline-code">NON TESTE</code> et les tests associ&eacute;s.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte d&rsquo;apprentissage : </span>
                D&eacute;couvert pendant le stage. Je n&rsquo;avais jamais fait d&rsquo;analyse statique ni utilis&eacute; de CST avant, j&rsquo;ai appris <span class="code-tag">LibCST</span> et <span class="code-tag">coverage.py</span> via la documentation officielle.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Difficult&eacute; :</span>
                Moyenne. La principale difficult&eacute; a &eacute;t&eacute; de comprendre comment <a href="https://libcst.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer"><span class="code-tag">LibCST</span></a> parcourt les fichiers et de g&eacute;rer correctement les alias d'import pour reconstruire les appels r&eacute;els des d&eacute;pendances. L'utilisation des m&eacute;tadonn&eacute;es, notamment <code class="inline-code">PositionProvider</code>, demandait aussi une bonne compr&eacute;hension du fonctionnement interne de la biblioth&egrave;que.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">&Eacute;valuation :</span>
                Moyen &agrave; bon. Je sais maintenant <span class="sf-t1a">utiliser <span class="code-tag">LibCST</span></span> pour rep&eacute;rer des appels, <span class="sf-t1b">lire un <span class="code-tag">.coverage</span></span> pour relier code et tests, et <span class="sf-t4b">exporter le r&eacute;sultat dans un fichier <span class="code-tag">JSON</span></span> r&eacute;utilisable par d&rsquo;autres scripts.
              </p>
              <p class="text-body-2 mb-0">
                <span class="sf-label">Avant / Apr&egrave;s stage :</span>
                <strong>Avant&nbsp;:</strong> aucune connaissance de l&rsquo;analyse statique ni des CST, je lisais le code &agrave; la main pour trouver les usages. <strong>Apr&egrave;s&nbsp;:</strong> je peux &eacute;crire un visiteur LibCST autonome, croiser ses r&eacute;sultats avec une base <code class="inline-code">.coverage</code>, exporter l&rsquo;ensemble en JSON pour le rejouer plus tard, et r&eacute;utiliser cette approche sur d&rsquo;autres projets.
              </p>
            </v-card>
          </div>

          <v-divider class="my-6" />

          <div class="mb-6">
            <v-card variant="flat" class="pa-4 bilan-card" rounded="lg">
              <div class="d-flex flex-wrap align-center justify-space-between mb-4">
                <span class="text-body-1 font-weight-bold">G&eacute;n&eacute;ration dynamique de classes de tests &agrave; partir d'un fichier JSON</span>
              </div>

              <ul class="sf-list text-body-2 mb-3">
                <li><span class="sf-t3a">Charger dynamiquement un module Python avec <a href="https://docs.python.org/3/library/importlib.html" target="_blank" rel="noopener noreferrer"><span class="code-tag">importlib</span></a></span> (<a href="#" class="trace-link" @click.prevent="tab = 't3'">Trace n&deg;3</a>) : importer un module depuis un chemin JSON.</li>
                <li><span class="sf-t3b">G&eacute;n&eacute;rer des classes de tests &agrave; la vol&eacute;e avec <span class="code-tag">type()</span></span> (<a href="#" class="trace-link" @click.prevent="tab = 't3'">Trace n&deg;3</a>) : cr&eacute;er une classe cibl&eacute;e et ne garder qu&rsquo;une m&eacute;thode.</li>
                <li><span class="sf-t4a">Concevoir une structure <span class="code-tag">JSON</span> hi&eacute;rarchis&eacute;e</span> (<a href="#" class="trace-link" @click.prevent="tab = 't4'">Trace n&deg;4</a>) : lier d&eacute;pendance, appel et tests pour cibler les tests &agrave; rejouer.</li>
              </ul>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte : </span>
                La base de tests d&rsquo;EzGED est tr&egrave;s longue &agrave; rejouer enti&egrave;rement &agrave; chaque mont&eacute;e de version. J&rsquo;ai donc con&ccedil;u un workflow pilot&eacute; par un fichier JSON&nbsp;: mon script LibCST exporte la liste des tests pertinents par d&eacute;pendance et par appel, puis <code class="inline-code">test_dependencies.py</code> construit dynamiquement (via <span class="code-tag">importlib</span> + <span class="code-tag">type()</span>) uniquement les classes de tests qui couvrent les appels impact&eacute;s par la mise &agrave; jour.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte d&rsquo;apprentissage : </span>
                En cours, nous avions vu les tests unitaires et d&rsquo;int&eacute;gration uniquement en Java, et les mocks aussi uniquement en Java, jamais en Python. Les suites dynamiques n&rsquo;avaient pas &eacute;t&eacute; abord&eacute;es et je n&rsquo;avais jamais utilis&eacute; <span class="code-tag">pytest</span>. <span class="code-tag">importlib</span> et la m&eacute;ta-programmation avec <span class="code-tag">type()</span> ont &eacute;t&eacute; appris pendant le stage via la documentation officielle.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Difficult&eacute; :</span>
                &Eacute;lev&eacute;e. Il faut cha&icirc;ner plusieurs concepts et garder la compatibilit&eacute; <span class="code-tag">unittest</span> / <span class="code-tag">pytest</span>, ce qui complique le d&eacute;bogage.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">&Eacute;valuation :</span>
                Moyen &agrave; bon. Je sais maintenant <span class="sf-t3a">utiliser <span class="code-tag">importlib</span></span> et <span class="sf-t3b">g&eacute;n&eacute;rer des classes avec <span class="code-tag">type()</span></span> pour construire des tests cibl&eacute;s, et <span class="sf-t4a">concevoir une structure <span class="code-tag">JSON</span> hi&eacute;rarchis&eacute;e</span> qui sert de pivot entre l&rsquo;audit et le lancement des tests, pour ne rejouer que les tests utiles.
              </p>
              <p class="text-body-2 mb-0">
                <span class="sf-label">Avant / Apr&egrave;s stage :</span>
                <strong>Avant&nbsp;:</strong> je n&rsquo;avais &eacute;crit que des tests statiques (un fichier = une suite), sans connaissance de <span class="code-tag">pytest</span>, de <span class="code-tag">importlib</span> ni de la m&eacute;ta-programmation avec <span class="code-tag">type()</span>. <strong>Apr&egrave;s&nbsp;:</strong> je suis capable de concevoir un format JSON pivot, de g&eacute;n&eacute;rer dynamiquement des classes de tests cibl&eacute;es et de les ex&eacute;cuter aussi bien sous <span class="code-tag">unittest</span> que <span class="code-tag">pytest</span> dans une CI.
              </p>
            </v-card>
          </div>

          <v-divider class="my-6" />

          <div class="mb-6">
            <v-card variant="flat" class="pa-4 bilan-card" rounded="lg">
              <div class="d-flex flex-wrap align-center justify-space-between mb-4">
                <span class="text-body-1 font-weight-bold">Outillage et configuration d'un projet Python moderne</span>
              </div>

              <ul class="sf-list text-body-2 mb-3">
                <li><span class="sf-t2a">Comprendre et utiliser un <span class="code-tag">pyproject.toml</span> avec <a href="https://docs.astral.sh/uv/" target="_blank" rel="noopener noreferrer"><span class="code-tag">uv</span></a></span> (<a href="#" class="trace-link" @click.prevent="tab = 't2'">Trace n&deg;2</a>) : lire la configuration et refaire un environnement propre.</li>
                <li><span class="sf-t2b">Configurer <a href="https://deptry.com/" target="_blank" rel="noopener noreferrer"><span class="code-tag">deptry</span></a> pour &eacute;viter les faux positifs</span> (<a href="#" class="trace-link" @click.prevent="tab = 't2'">Trace n&deg;2</a>) : s&eacute;parer modules internes et d&eacute;pendances externes.</li>
                <li><span class="sf-t1b">Lire un fichier <span class="code-tag">.coverage</span> avec <a href="https://coverage.readthedocs.io/" target="_blank" rel="noopener noreferrer"><span class="code-tag">coverage.py</span></a></span> (<a href="#" class="trace-link" @click.prevent="tab = 't1'">Trace n&deg;1</a>) : relier les lignes aux tests couverts.</li>
              </ul>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte : </span>
                Sur le projet EzGED h&eacute;rit&eacute;, j&rsquo;ai migr&eacute; la gestion des d&eacute;pendances vers un <code class="inline-code">pyproject.toml</code> pilot&eacute; par <span class="code-tag">uv</span> pour reproduire un environnement propre en quelques secondes, configur&eacute; <span class="code-tag">deptry</span> pour ne pas confondre les modules internes du projet avec des d&eacute;pendances externes, et exploit&eacute; <span class="code-tag">coverage.py</span> pour relier code et tests dans mes rapports d&rsquo;audit.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte d&rsquo;apprentissage : </span>
                Sujet pas vu en cours. Avant le stage, je travaillais en <code class="inline-code">pip</code> + <code class="inline-code">venv</code> manuel, sans <span class="code-tag">pyproject.toml</span> ni gestionnaire moderne. <span class="code-tag">uv</span> m'a &eacute;t&eacute; confi&eacute; d&egrave;s le premier jour.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Difficult&eacute; :</span>
                Faible &agrave; moyenne. Il faut bien distinguer d&eacute;pendances de production et outils de d&eacute;veloppement, et prendre en main <span class="code-tag">deptry</span> et <span class="code-tag">coverage.py</span>.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">&Eacute;valuation :</span>
                Bon. Je sais <span class="sf-t2a">utiliser un <span class="code-tag">pyproject.toml</span> avec <span class="code-tag">uv</span></span>, <span class="sf-t2b">configurer <span class="code-tag">deptry</span></span> et <span class="sf-t1b">lire un <span class="code-tag">.coverage</span></span> pour suivre la couverture. Je peux reprendre cette configuration sur un autre projet.
              </p>
              <p class="text-body-2 mb-0">
                <span class="sf-label">Avant / Apr&egrave;s stage :</span>
                <strong>Avant&nbsp;:</strong> je g&eacute;rais mes projets en <code class="inline-code">pip install</code> direct dans le syst&egrave;me ou un <code class="inline-code">venv</code> manuel, sans <span class="code-tag">pyproject.toml</span> ni s&eacute;paration entre d&eacute;pendances de production et de d&eacute;veloppement. <strong>Apr&egrave;s&nbsp;:</strong> je suis capable de monter un projet Python &laquo;&nbsp;propre&nbsp;&raquo; (uv + groupes de d&eacute;pendances + audit deptry + couverture), reproductible et auditable.
              </p>
            </v-card>
          </div>
        </v-window-item>

      </v-window>
    </v-card>

    <!-- Footer -->
    <v-card class="pa-5 text-center mt-5" rounded="lg">
      <p class="text-body-2 text-medium-emphasis">
        <a href="mailto:baptiste.didier@edu.univ-fcomte.fr" class="text-blue-lighten-2">baptiste.didier@edu.univ-fcomte.fr</a>
      </p>
      <p class="text-caption text-medium-emphasis mt-2">
                Je tiens à remercier mon professeur référent, M. Bruno VIEZZI, de l'IUT Nord Franche-Comté, ainsi que M. Fabrice CARITEY et M. Florian MASY, mes tuteurs au sein de l'entreprise EzDev, pour leur accompagnement et leurs conseils tout au long de ce stage.
      </p>
      <div class="mt-2">
        <router-link to="/suivi" class="text-blue-lighten-2 text-body-2">
          Aller sur la page Suivi
        </router-link>
      </div>
      <p class="text-caption text-medium-emphasis mt-2">&copy; 2026 Baptiste Didier. Tous droits r&eacute;serv&eacute;s.</p>
    </v-card>

    <!-- Modal zoom image -->
    <v-dialog v-model="imageModal" max-width="90vw" content-class="image-dialog">
      <v-card
        class="pa-2 d-flex flex-column image-modal-card"
        style="background:#1a1a1a; width:90vw; max-width:1200px; height:85vh;"
      >
        <!-- Barre d'outils -->
        <div class="d-flex align-center mb-2 px-1">
          <v-btn icon variant="text" size="small" :disabled="zoom <= 100" @click="setZoom(-25)" title="D&eacute;zoomer">
            <v-icon>mdi-magnify-minus</v-icon>
          </v-btn>
          <span class="mx-2 text-caption" style="min-width:42px; text-align:center; color:#ccc;">{{ zoom }}%</span>
          <v-btn icon variant="text" size="small" :disabled="zoom >= 400" @click="setZoom(25)" title="Zoomer">
            <v-icon>mdi-magnify-plus</v-icon>
          </v-btn>
          <v-btn icon variant="text" size="small" @click="resetZoom" title="Adapter &agrave; la fen&ecirc;tre">
            <v-icon>mdi-fit-to-screen</v-icon>
          </v-btn>
          <v-spacer />
          <span class="text-caption mr-3 d-none d-sm-block" style="color:#555;">
            Molette pour zoomer &middot; Glisser pour naviguer &middot; Double-clic pour r&eacute;initialiser
          </span>
          <v-btn icon variant="text" size="small" @click="closeImage">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <!-- Zone d'affichage -->
        <div
          ref="viewportRef"
          class="image-viewport"
          :class="{ 'image-viewport-tall': imageMode === 'tall' }"
          @mousedown="startPan"
          @mousemove="onPan"
          @mouseup="endPan"
          @mouseleave="endPan"
          @wheel.prevent="onWheel"
          @dblclick="resetZoom"
        >
          <img
            v-if="currentImage"
            ref="imageRef"
            :src="currentImage"
            :style="imageStyle"
            draggable="false"
          />
        </div>
      </v-card>
    </v-dialog>

  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const VALID_TABS = ['t1', 't2', 't3', 't4', 'bilan']
const initialTab = VALID_TABS.includes(route.query.tab) ? route.query.tab : 't1'
const tab = ref(initialTab)
watch(() => route.query.tab, (val) => {
  if (VALID_TABS.includes(val)) tab.value = val
})

const imageModal = ref(false)
const currentImage = ref('')
const zoom = ref(100)
const imageMode = ref('default')
const pan = ref({ x: 0, y: 0 })
const isPanning = ref(false)
const panStart = ref({ x: 0, y: 0 })
const panOrigin = ref({ x: 0, y: 0 })
const panMoved = ref(false)

const viewportRef = ref(null)
const imageRef = ref(null)

const MIN_ZOOM = 50
const MAX_ZOOM = 400

const imageStyle = computed(() => {
  if (zoom.value === 100) {
    return {
      width: '100%',
      height: imageMode.value === 'tall' ? 'auto' : '100%',
      objectFit: 'contain',
      display: 'block',
      userSelect: 'none',
      cursor: 'zoom-in',
    }
  }
  const scale = zoom.value / 100
  return {
    transform: `translate(${pan.value.x}px, ${pan.value.y}px) scale(${scale})`,
    transformOrigin: 'top left',
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
    maxWidth: 'none',
    maxHeight: 'none',
    userSelect: 'none',
    cursor: 'grab',
  }
})

function clampPan(nextPan, zoomValue = zoom.value) {
  if (zoomValue <= 100 || !viewportRef.value) return { x: 0, y: 0 }
  const rect = viewportRef.value.getBoundingClientRect()
  const scale = zoomValue / 100
  const scaledWidth = rect.width * scale
  const scaledHeight = rect.height * scale
  const minX = Math.min(0, rect.width - scaledWidth)
  const minY = Math.min(0, rect.height - scaledHeight)
  return {
    x: Math.max(minX, Math.min(0, nextPan.x)),
    y: Math.max(minY, Math.min(0, nextPan.y)),
  }
}

function openImage(src, mode = 'default') {
  currentImage.value = src
  zoom.value = 100
  pan.value = { x: 0, y: 0 }
  isPanning.value = false
  panMoved.value = false
  imageMode.value = mode
  imageModal.value = true
}

function closeImage() {
  imageModal.value = false
  isPanning.value = false
  panMoved.value = false
}

function resetZoom() {
  zoom.value = 100
  pan.value = { x: 0, y: 0 }
}

function setZoom(delta) {
  const nextZoom = Math.min(400, Math.max(100, zoom.value + delta))
  zoom.value = nextZoom
  if (nextZoom === 100) {
    pan.value = { x: 0, y: 0 }
  } else {
    pan.value = clampPan(pan.value, nextZoom)
  }
}

function onWheel(event) {
  const step = event.deltaY < 0 ? 25 : -25
  const nextZoom = Math.min(400, Math.max(100, zoom.value + step))
  if (nextZoom === zoom.value) return

  if (zoom.value > 100) {
    const viewport = event.currentTarget
    const rect = viewport.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const ratio = nextZoom / zoom.value
    pan.value = clampPan({
      x: mouseX - ratio * (mouseX - pan.value.x),
      y: mouseY - ratio * (mouseY - pan.value.y),
    }, nextZoom)
  }

  zoom.value = nextZoom
  if (nextZoom === 100) pan.value = { x: 0, y: 0 }
}

function startPan(event) {
  if (zoom.value <= 100) return
  isPanning.value = true
  panMoved.value = false
  panStart.value = { x: event.clientX, y: event.clientY }
  panOrigin.value = { x: pan.value.x, y: pan.value.y }
}

function onPan(event) {
  if (!isPanning.value) return
  const deltaX = event.clientX - panStart.value.x
  const deltaY = event.clientY - panStart.value.y
  if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) panMoved.value = true
  pan.value = clampPan({
    x: panOrigin.value.x + deltaX,
    y: panOrigin.value.y + deltaY,
  })
}

function endPan() {
  isPanning.value = false
}

function onKeydown(event) {
  const PAN_STEP = 40
  switch (event.key) {
    case '+': case '=': setZoom(25); break
    case '-': setZoom(-25); break
    case '0': resetZoom(); break
    case 'Escape': closeImage(); break
    case 'ArrowLeft':
      if (zoom.value > 100) pan.value = { ...pan.value, x: pan.value.x + PAN_STEP }
      break
    case 'ArrowRight':
      if (zoom.value > 100) pan.value = { ...pan.value, x: pan.value.x - PAN_STEP }
      break
    case 'ArrowUp':
      if (zoom.value > 100) pan.value = { ...pan.value, y: pan.value.y + PAN_STEP }
      break
    case 'ArrowDown':
      if (zoom.value > 100) pan.value = { ...pan.value, y: pan.value.y - PAN_STEP }
      break
  }
}


watch(imageModal, (val) => {
  if (val) {
    window.addEventListener('keydown', onKeydown)
  } else {
    window.removeEventListener('keydown', onKeydown)
  }
})

function getDiffColor(difficulte) {
  const d = difficulte.toLowerCase()
  if (d.startsWith('faible')) return 'success'
  if (d.startsWith('moyenne')) return 'warning'
  if (d.startsWith('élevée')) return 'error'
  return undefined
}

function getDiffColorHex(difficulte) {
  const d = difficulte.toLowerCase()
  if (d.startsWith('faible')) return '#66bb6a'
  if (d.startsWith('moyenne')) return '#ffa726'
  if (d.startsWith('élevée')) return '#ef5350'
  return '#9e9e9e'
}

</script>

<style scoped>
.trace-image {
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  display: block;
  max-height: 380px;
  object-fit: contain;
  background: #1a1a1a;
  transition: filter 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}
.trace-image:hover {
  filter: brightness(0.8);
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}
.inline-code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  background: #111;
  color: #e6e6e6;
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 0.88em;
}
.code-tag {
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  background: #141414;
  color: #ffd54f;
  padding: 1px 6px;
  border-radius: 6px;
  border: 1px solid rgba(255, 213, 79, 0.25);
  font-size: 0.92em;
}
.trace-link {
  color: #ffd54f;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.sf-t1a { color: #ff5252; font-weight: 600; }
.sf-t1b { color: #ffa726; font-weight: 600; }
.sf-t2a { color: #ffd740; font-weight: 600; }
.sf-t2b { color: #69f0ae; font-weight: 600; }
.sf-t3a { color: #00bcd4; font-weight: 600; }
.sf-t3b { color: #42a5f5; font-weight: 600; }
.sf-t4a { color: #ab47bc; font-weight: 600; }
.sf-t4b { color: #ff80ab; font-weight: 600; }
.g-row {
  row-gap: 12px;
}
.image-viewport {
  flex: 1;
  overflow: hidden;
  cursor: crosshair;
  position: relative;
}
.image-viewport-tall {
  overflow: auto;
  cursor: default;
}
.bilan-card {
  background: linear-gradient(180deg, rgba(22, 22, 22, 0.95), rgba(18, 18, 18, 0.95));
  border: 1px solid rgba(255, 193, 7, 0.2);
}
.sf-card {
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.sf-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
}
.image-modal-card {
  margin: 0 auto;
}
:deep(.image-dialog) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin: 0;
}
.eval-card-before {
  border-left: 4px solid rgb(var(--v-theme-error));
  background: #171717;
  border: 1px solid rgba(244, 67, 54, 0.25);
}
.eval-card-after {
  border-left: 4px solid rgb(var(--v-theme-success));
  background: #171717;
  border: 1px solid rgba(76, 175, 80, 0.25);
}
</style>
