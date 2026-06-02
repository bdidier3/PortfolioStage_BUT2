<template>
  <div>

    <!-- En-tete -->
    <v-card class="mb-4 pa-4" rounded="lg">
      <h1 class="text-h6 font-weight-bold mb-1">
        Pr&eacute;sentation et &eacute;valuation de savoir-faire en suivi de projet
      </h1>
      <p class="text-body-2 text-medium-emphasis mb-0">
        Cette partie pr&eacute;sente les savoir-faire li&eacute;s &agrave; la veille technologique, &agrave; la documentation
        et &agrave; l&rsquo;utilisation de Git/GitLab dans le cadre du stage EzGED. Chaque trace illustre un savoir-faire
        pr&eacute;cis, suivi d&rsquo;un bilan global.
      </p>
    </v-card>

    <!-- Contenu avec onglets -->
    <v-card class="pa-4" rounded="lg">
      <v-tabs v-model="tab" color="amber-darken-2" align-tabs="start" density="compact">
        <v-tab value="t5">Trace 5</v-tab>
        <v-tab value="t6">Trace 6</v-tab>
        <v-tab value="t7">Trace 7</v-tab>
        <v-tab value="t8">Trace 8</v-tab>
        <v-tab value="bilan">Bilan &amp; &Eacute;valuation</v-tab>
      </v-tabs>
      <v-divider class="mb-3" />

      <v-window v-model="tab">

        <!-- TRACE 5 -->
        <v-window-item value="t5">
          <v-card variant="flat" class="pa-3" rounded="lg">
            <h3 class="text-h6 font-weight-bold mb-2">
              Automatisation des mises &agrave; jour de d&eacute;pendances avec Renovate
            </h3>
            <div class="mb-3">
              <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
              <v-chip color="#80cbc4" size="small" class="ma-1">Configurer un pipeline CI/CD GitLab pour ex&eacute;cuter Renovate</v-chip>
              <v-chip color="#b39ddb" size="small" class="ma-1">Param&eacute;trer Renovate via le fichier renovate.json</v-chip>
            </div>

            <v-row align="start" no-gutters class="g-row">
              <v-col cols="12" md="6" class="pe-md-4">
                <img
                  src="/images/Trace5_renovate.png"
                  alt="Documentation Renovate"
                  class="trace-image"
                  @click="openImage($event.currentTarget.currentSrc)"
                />
                <p class="text-caption text-medium-emphasis mt-2 mb-0">
                  <strong>Trace n&deg;5</strong> : Documentation Renovate r&eacute;dig&eacute;e pour configurer l&rsquo;outil.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <p class="text-body-2 mb-2">
                  La <strong>Trace n&deg;5</strong> montre un extrait de la documentation que j&rsquo;ai r&eacute;dig&eacute;e pour
                  expliquer la mise en place de Renovate sur EzGED. Elle d&eacute;crit les deux fichiers de configuration
                  n&eacute;cessaires et la proc&eacute;dure compl&egrave;te pour automatiser la d&eacute;tection des mises &agrave; jour
                  de d&eacute;pendances Python. Le cadre rouge isole le fichier <code class="inline-code">.gitlab-ci.yml</code>
                  qui d&eacute;finit le job Renovate&nbsp;: l&rsquo;image Docker
                  <code class="inline-code">renovate/renovate:43.111.3</code>, les variables d&rsquo;environnement
                  (<code class="inline-code">RENOVATE_PLATFORM</code>, <code class="inline-code">RENOVATE_ENDPOINT</code>
                  pointant vers <code class="inline-code">gitlab.ezdev.fr</code>, les deux tokens d&rsquo;acc&egrave;s) et la r&egrave;gle
                  <code class="inline-code">$CI_PIPELINE_SOURCE == &quot;schedule&quot;</code> qui limite l&rsquo;ex&eacute;cution aux
                  pipelines planifi&eacute;s. Les cadres verts montrent le fichier
                  <code class="inline-code">renovate.json</code> &agrave; la racine du d&eacute;p&ocirc;t&nbsp;: h&eacute;ritage
                  <code class="inline-code">config:recommended</code>, d&eacute;sactivation de l&rsquo;<code class="inline-code">automerge</code>
                  pour garder un contr&ocirc;le manuel, activation du <code class="inline-code">dependencyDashboard</code> et
                  d&eacute;signation du reviewer notifi&eacute; &agrave; chaque mise &agrave; jour. Le cadre jaune met en &eacute;vidence le
                  bloc <code class="inline-code">matchManagers</code> qui regroupe <code class="inline-code">pip_requirements</code>,
                  <code class="inline-code">poetry</code> et <code class="inline-code">pip_setup</code> sous un seul groupe
                  &laquo;&nbsp;Toutes les d&eacute;pendances Python&nbsp;&raquo;. Le bas de la trace d&eacute;crit la cr&eacute;ation des
                  access tokens GitLab/GitHub, leur ajout en variables masqu&eacute;es, puis la configuration d&rsquo;un
                  pipeline planifi&eacute;.
                </p>
                <p class="text-body-2 mb-2">
                  Pour <span class="sf-t5a">configurer le pipeline CI/CD</span>, j&rsquo;ai d&ucirc; comprendre comment GitLab
                  ex&eacute;cute un job conteneuris&eacute; et comment lui transmettre des secrets via des variables masqu&eacute;es.
                  Le token GitLab autorise Renovate &agrave; cr&eacute;er les Merge Requests, le token GitHub permet de r&eacute;cup&eacute;rer
                  les changelogs et notes de version utilis&eacute;s dans le rapport.
                </p>
                <p class="text-body-2 mb-0">
                  Pour <span class="sf-t5b">param&eacute;trer Renovate</span>, je me suis appuy&eacute; sur la documentation
                  officielle du fichier <code class="inline-code">renovate.json</code> afin de regrouper toutes les d&eacute;pendances
                  Python en une seule Merge Request plut&ocirc;t qu&rsquo;une par paquet, ce qui rend les mises &agrave; jour bien plus
                  exploitables dans le contexte d&rsquo;EzGED o&ugrave; les d&eacute;pendances sont fortement interconnect&eacute;es.
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>

        <!-- TRACE 6 -->
        <v-window-item value="t6">
          <v-card variant="flat" class="pa-3" rounded="lg">
            <h3 class="text-h6 font-weight-bold mb-2">
              R&eacute;sultats Renovate&nbsp;: Merge Request major et priorisation des mises &agrave; jour
            </h3>
            <div class="mb-3">
              <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
              <v-chip color="#e6ee9c" size="small" class="ma-1">Identifier les indicateurs pertinents pour &eacute;valuer la stabilit&eacute; d&rsquo;une mise &agrave; jour</v-chip>
              <v-chip color="#ffab40" size="small" class="ma-1">&Eacute;valuer la pertinence d&rsquo;une mise &agrave; jour de d&eacute;pendance avant validation</v-chip>
            </div>

            <v-row align="start" no-gutters class="g-row">
              <v-col cols="12" md="6" class="pe-md-4">
                <img
                  src="/images/Trace6_MRRenovate.png"
                  alt="Merge Requests Renovate"
                  class="trace-image"
                  @click="openImage($event.currentTarget.currentSrc)"
                />
                <p class="text-caption text-medium-emphasis mt-2 mb-0">
                  <strong>Trace n&deg;6</strong> : Merge Requests Renovate sur la branche
                  <code class="inline-code">gestions_deps</code> dans GitLab.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <p class="text-body-2 mb-2">
                  La <strong>Trace n&deg;6</strong> montre la Merge Request &laquo;&nbsp;Update Toutes les d&eacute;pendances Python (major)&nbsp;&raquo;
                  g&eacute;n&eacute;r&eacute;e par Renovate sur le d&eacute;p&ocirc;t <code class="inline-code">test_renovate</code>.
                  L&rsquo;utilisateur <code class="inline-code">RENOVATE_TOKEN</code> propose de fusionner sa branche
                  <code class="inline-code">renovate/major-toutes-les-...</code> dans <code class="inline-code">main</code>.
                  Le tableau du cadre jaune liste les d&eacute;pendances ayant une mont&eacute;e majeure disponible
                  (<code class="inline-code">attrs</code>, <code class="inline-code">bcrypt</code>,
                  <code class="inline-code">certifi</code>, <code class="inline-code">cryptography</code>,
                  <code class="inline-code">paramiko</code>, <code class="inline-code">pywin32</code>,
                  <code class="inline-code">twisted</code>...) avec la version actuelle et cible (colonne
                  <code class="inline-code">Change</code>), l&rsquo;anciennet&eacute; (<code class="inline-code">Age</code>) et
                  un indice de fiabilit&eacute; (<code class="inline-code">Confidence</code>). Le cadre rouge souligne le
                  suffixe <code class="inline-code">(major)</code>&nbsp;: Renovate isole les mont&eacute;es majeures, plus risqu&eacute;es.
                  Le cadre bleu met en &eacute;vidence les onglets <em>Issues</em> et <em>Merge requests</em>, o&ugrave; sont centralis&eacute;es
                  les propositions (Dependency Dashboard + MR &agrave; valider).
                </p>
                <p class="text-body-2 mb-2">
                  Pour <span class="sf-t6a">identifier les indicateurs pertinents</span> dans le tableau de la MR
                  (<strong>cadre jaune</strong>), je m&rsquo;appuie sur deux colonnes que Renovate affiche pour chaque
                  d&eacute;pendance&nbsp;: <code class="inline-code">Age</code> (depuis combien de jours la nouvelle version
                  est publi&eacute;e) et <code class="inline-code">Confidence</code> (indice de fiabilit&eacute; calcul&eacute; par
                  Renovate &agrave; partir des projets qui ont d&eacute;j&agrave; adopt&eacute; cette version). Une version r&eacute;cente
                  avec peu de retours est risqu&eacute;e&nbsp;: <code class="inline-code">paramiko</code> &agrave; 5 jours et
                  <code class="inline-code">Confidence: neutral</code> demande d&rsquo;attendre. &Agrave; l&rsquo;inverse, une
                  version installant un peu de recul et largement valid&eacute;e est plus s&ucirc;re&nbsp;:
                  <code class="inline-code">certifi</code> &agrave; 23 jours et <code class="inline-code">Confidence: high</code>
                  peut &ecirc;tre fusionn&eacute;e rapidement. La combinaison de ces deux indicateurs me donne un signal
                  fiable de stabilit&eacute; sans avoir &agrave; tester la version moi-m&ecirc;me.
                </p>
                <p class="text-body-2 mb-0">
                  Pour <span class="sf-t6b">&eacute;valuer la pertinence d&rsquo;une mise &agrave; jour avant validation</span>, je lis
                  d&rsquo;abord le contenu de la MR&nbsp;: la liste des d&eacute;pendances modifi&eacute;es dans le
                  <strong>cadre jaune</strong>, et surtout le suffixe <code class="inline-code">(major)</code> du titre
                  isol&eacute; par le <strong>cadre rouge</strong>. Ce suffixe signale une mont&eacute;e majeure, donc un
                  risque potentiel de cassure d&rsquo;API (signatures de fonctions modifi&eacute;es, fonctions supprim&eacute;es&hellip;).
                  J&rsquo;utilise alors les onglets <em>Issues</em> et <em>Merge requests</em> du <strong>cadre bleu</strong>
                  pour v&eacute;rifier que la MR est bien rattach&eacute;e au Dependency Dashboard et qu&rsquo;elle n&rsquo;est pas
                  en conflit avec une autre MR ouverte. Si la mont&eacute;e est mineure et que les indicateurs Age/Confidence
                  sont au vert, je valide directement&nbsp;; si elle est majeure, je compl&egrave;te par un audit du code
                  (<a href="#" class="trace-link" @click.prevent="$router.push({ path: '/technique', query: { tab: 't1' } })">Trace n&deg;1</a>)
                  pour savoir quels fichiers d&rsquo;EzGED appellent r&eacute;ellement la d&eacute;pendance avant d&rsquo;accepter la fusion.
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>

        <!-- TRACE 7 -->
        <v-window-item value="t7">
          <v-card variant="flat" class="pa-3" rounded="lg">
            <h3 class="text-h6 font-weight-bold mb-2">
              Suivi du travail via Git et GitLab sur le projet EzGED
            </h3>
            <div class="mb-3">
              <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
              <v-chip color="#4fc3f7" size="small" class="ma-1">Isoler le d&eacute;veloppement sur une branche Git d&eacute;di&eacute;e</v-chip>
              <v-chip color="#f48fb1" size="small" class="ma-1">D&eacute;couper le travail en commits courts et explicites</v-chip>
              <v-chip color="#a5d6a7" size="small" class="ma-1">Pr&eacute;parer l&rsquo;int&eacute;gration du travail via une Merge Request GitLab</v-chip>
            </div>

            <v-row align="start" no-gutters class="g-row">
              <v-col cols="12" md="6" class="pe-md-4">
                <img
                  src="/images/Trace7_commits.png"
                  alt="Historique de commits GitLab"
                  class="trace-image"
                  @click="openImage($event.currentTarget.currentSrc)"
                />
                <p class="text-caption text-medium-emphasis mt-2 mb-0">
                  <strong>Trace n&deg;7</strong> : Historique de commits sur le GitLab d&rsquo;EzDEV.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <p class="text-body-2 mb-2">
                  La <strong>Trace n&deg;7</strong> repr&eacute;sente l&rsquo;historique des commits du d&eacute;p&ocirc;t EzGED, consult&eacute;
                  depuis l&rsquo;interface web de GitLab. Le cadre rouge identifie la branche d&eacute;di&eacute;e
                  <code class="inline-code">gestions_deps</code>, cr&eacute;&eacute;e pour isoler le d&eacute;veloppement li&eacute; &agrave; la gestion
                  des d&eacute;pendances Python du reste du projet. Le cadre bleu met en &eacute;vidence le message d&rsquo;un commit du
                  12/05/2026, qui d&eacute;crit pr&eacute;cis&eacute;ment l&rsquo;&eacute;volution apport&eacute;e au script d&rsquo;audit bas&eacute; sur
                  LibCST. Le cadre vert pointe le bouton <em>Create merge request</em>, qui permet de proposer l&rsquo;int&eacute;gration
                  de la branche dans la branche principale d&rsquo;EzGED. En dessous apparaissent deux commits du 11/05/2026
                  illustrant le d&eacute;coupage progressif du travail (nouveau rendu du fichier JSON, puis d&eacute;but du filtre HTML).
                  Cette trace s&rsquo;inscrit dans le suivi quotidien de mon travail sur EzGED, o&ugrave; chaque &eacute;volution du script
                  d&rsquo;analyse doit &ecirc;tre trac&eacute;e et int&eacute;gr&eacute;e proprement au projet d&rsquo;entreprise.
                </p>
                <p class="text-body-2 mb-2">
                  Pour <span class="sf-t7a">isoler le d&eacute;veloppement sur une branche Git d&eacute;di&eacute;e</span>, j&rsquo;ai cr&eacute;&eacute;
                  la branche <code class="inline-code">gestions_deps</code> depuis la branche principale d&rsquo;EzGED avec la
                  commande <code class="inline-code">git checkout -b gestions_deps</code>. Tous mes scripts (analyse des
                  d&eacute;pendances, rendu HTML, g&eacute;n&eacute;ration de tests) sont commit&eacute;s sur cette branche, ce qui permet
                  &agrave; l&rsquo;&eacute;quipe de continuer &agrave; faire &eacute;voluer la branche principale sans interférence avec mes d&eacute;veloppements
                  en cours. Cette s&eacute;paration est indispensable sur un projet collaboratif o&ugrave; plusieurs d&eacute;veloppeurs
                  interviennent en parall&egrave;le.
                </p>
                <p class="text-body-2 mb-2">
                  Pour <span class="sf-t7b">d&eacute;couper le travail en commits courts et explicites</span>, je segmente mes
                  d&eacute;veloppements en petites unit&eacute;s coh&eacute;rentes, chacune accompagn&eacute;e d&rsquo;un message clair. La trace
                  en montre trois cons&eacute;cutifs&nbsp;: un commit pour le nouveau rendu du fichier
                  <code class="inline-code">test_dependencies.json</code>, un autre pour le d&eacute;but du filtre HTML, puis celui
                  mis en &eacute;vidence pour l&rsquo;int&eacute;gration de ce filtre dans le script d&rsquo;audit bas&eacute; sur LibCST. Chaque message
                  r&eacute;sume en une phrase l&rsquo;&eacute;volution apport&eacute;e, ce qui rend l&rsquo;historique relisable et facilite
                  l&rsquo;identification pr&eacute;cise du moment o&ugrave; une modification a &eacute;t&eacute; introduite.
                </p>
                <p class="text-body-2 mb-0">
                  Pour <span class="sf-t7c">pr&eacute;parer l&rsquo;int&eacute;gration via une Merge Request GitLab</span>, j&rsquo;utilise le
                  bouton <em>Create merge request</em> une fois la branche stable. La merge request regroupe l&rsquo;ensemble des
                  commits de <code class="inline-code">gestions_deps</code> en une demande d&rsquo;int&eacute;gration unique, accompagn&eacute;e
                  d&rsquo;une description du travail r&eacute;alis&eacute;. Elle constitue le point de contr&ocirc;le obligatoire avant la
                  fusion dans la branche principale et garantit qu&rsquo;aucune modification non valid&eacute;e ne rejoint le projet.
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>

        <!-- TRACE 8 -->
        <v-window-item value="t8">
          <v-card variant="flat" class="pa-3" rounded="lg">
            <h3 class="text-h6 font-weight-bold mb-2">
              Formalisation visuelle de l&rsquo;algorithme de g&eacute;n&eacute;ration dynamique de tests
            </h3>
            <div class="mb-3">
              <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
              <v-chip color="#9fa8da" size="small" class="ma-1">Mod&eacute;liser un algorithme complexe sous forme de sch&eacute;ma fonctionnel</v-chip>
              <v-chip color="#ff8a65" size="small" class="ma-1">Choisir une forme adapt&eacute;e &agrave; chaque &eacute;tape du sch&eacute;ma</v-chip>
            </div>

            <v-row align="start" no-gutters class="g-row">
              <v-col cols="12" md="6" class="pe-md-4">
                <img
                  src="/images/Trace8_flowchart.png"
                  alt="Sch&eacute;ma fonctionnel du script test_dependencies.py"
                  class="trace-image"
                  @click="openImage($event.currentTarget.currentSrc)"
                />
                <p class="text-caption text-medium-emphasis mt-2 mb-0">
                  <strong>Trace n&deg;8</strong> : Sch&eacute;ma fonctionnel du script <code class="inline-code">test_dependencies.py</code>
                  produit pour expliquer l&rsquo;algorithme &agrave; l&rsquo;&eacute;quipe.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <div class="text-body-2 mb-2">
                  <p class="mb-2">
                    La <strong>Trace n&deg;8</strong> montre le sch&eacute;ma fonctionnel du script
                    <code class="inline-code">test_dependencies.py</code>
                    (<a href="#" class="trace-link" @click.prevent="$router.push({ path: '/technique', query: { tab: 't3' } })">Trace n&deg;3</a>),
                    qui ne rejoue automatiquement que les tests pertinents lors d&rsquo;une mont&eacute;e de version
                    de d&eacute;pendance. Les couleurs s&eacute;parent les grandes &eacute;tapes&nbsp;:
                  </p>
                  <ul class="pl-4 mb-2">
                    <li class="mb-1">
                      <strong>Cadre rouge</strong> : point d&rsquo;entr&eacute;e (<em>Lancement du script</em>).
                    </li>
                    <li class="mb-1">
                      <strong>Cadre vert</strong> : initialisation (lecture des options
                      <code class="inline-code">argparse</code> et chargement du fichier JSON).
                    </li>
                    <li class="mb-1">
                      <strong>Cadres jaunes</strong> : la triple boucle imbriqu&eacute;e qui constitue le c&oelig;ur du parcours du JSON.
                      Pour chaque <em>librairie</em>, on parcourt chacun de ses <em>appels de fonctions</em>, puis pour chaque
                      appel de fonction chacun de ses <em>tests</em>.
                    </li>
                    <li class="mb-1">
                      <strong>Cadre bleu</strong> : sous-routine de cr&eacute;ation dynamique d&rsquo;une classe de test
                      (<em>charger le module via <code class="inline-code">importlib</code>, garder uniquement les m&eacute;thodes
                      list&eacute;es dans le JSON, cr&eacute;er la classe unique avec <code class="inline-code">type()</code>,
                      l&rsquo;enregistrer dans <code class="inline-code">globals()</code></em>).
                    </li>
                    <li>
                      <strong>Cadre orange</strong> : terminaison. Le script lance tous les tests g&eacute;n&eacute;r&eacute;s
                      via <code class="inline-code">unittest.main()</code>, puis se termine sur le n&oelig;ud <em>FIN</em>.
                    </li>
                  </ul>
                  <p class="mb-0">
                    Les <strong>cercles rouges</strong> isolent les transitions cl&eacute;s du flux&nbsp;:
                    les r&eacute;ponses <em>Oui</em>/<em>Non</em> des losanges de filtrage (&laquo;&nbsp;ignor&eacute;e par les
                    options&nbsp;?&nbsp;&raquo;) et les retours <em>Termin&eacute;</em> qui remontent &agrave; la boucle parente.
                    Cette trace s&rsquo;inscrit dans la documentation du projet&nbsp;: produire un sch&eacute;ma exploitable par
                    l&rsquo;&eacute;quipe pour expliquer le fonctionnement du script avant son int&eacute;gration dans la CI.
                  </p>
                </div>
                <p class="text-body-2 mb-2">
                  Pour <span class="sf-t8a">mod&eacute;liser l&rsquo;algorithme sous forme de sch&eacute;ma fonctionnel</span>, j&rsquo;ai
                  d&eacute;compos&eacute; le code en blocs logiques&nbsp;: les trois <strong>losanges jaunes</strong> mat&eacute;rialisent la
                  <em>triple boucle imbriqu&eacute;e</em> (libs, puis appels de fonctions, puis tests) qui serait p&eacute;nible
                  &agrave; reconstituer mentalement depuis le code seul, et le <strong>cadre bleu</strong> isole &agrave; part la
                  sous-routine de cr&eacute;ation dynamique pour qu&rsquo;elle se lise comme un bloc, ce qui correspond &agrave; la fonction
                  <code class="inline-code">build_test_class</code> du code. Les <strong>cercles rouges</strong> attirent
                  l&rsquo;&oelig;il sur les transitions cl&eacute;s (<em>Oui / Non / Termin&eacute;</em>) qui d&eacute;cident si un test
                  est rejou&eacute; ou ignor&eacute;. Le but est qu&rsquo;un d&eacute;veloppeur de l&rsquo;&eacute;quipe puisse comprendre le
                  fonctionnement du script <strong>sans lire le code</strong>, ce qui en facilite la revue, la maintenance
                  et l&rsquo;int&eacute;gration dans le pipeline GitLab.
                </p>
                <p class="text-body-2 mb-0">
                  Pour <span class="sf-t8b">choisir une forme adapt&eacute;e &agrave; chaque &eacute;tape</span>, je me suis appuy&eacute;
                  sur la <strong>norme des diagrammes de flux</strong> (norme ISO&nbsp;5807) plut&ocirc;t que d&rsquo;inventer
                  ma propre convention. L&rsquo;avantage est concret&nbsp;: un nouveau membre de l&rsquo;&eacute;quipe, ou un futur
                  stagiaire qui reprendra le projet apr&egrave;s moi, n&rsquo;a pas besoin de moi pour comprendre le sch&eacute;ma.
                  Cela &eacute;vite aussi le pi&egrave;ge des couleurs ou des formes invent&eacute;es qui demandent une l&eacute;gende
                  s&eacute;par&eacute;e (et qui se p&eacute;rime d&egrave;s qu&rsquo;on perd la l&eacute;gende). Concr&egrave;tement, chaque type de
                  ligne de code se traduit par une forme&nbsp;: un <code class="inline-code">if/else</code> du script
                  devient un losange avec deux fl&egrave;ches sortantes &eacute;tiquet&eacute;es <em>Oui</em>/<em>Non</em>, un
                  point d&rsquo;entr&eacute;e ou de sortie devient un rectangle arrondi, et chaque instruction simple
                  (appel de fonction, affectation) devient un rectangle. La lecture du sch&eacute;ma suit donc le m&ecirc;me
                  vocabulaire visuel que tout autre diagramme de flux que la personne aura d&eacute;j&agrave; rencontr&eacute;.
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
                <span class="text-body-1 font-weight-bold">Configuration d'un pipeline CI/CD GitLab</span>
                <v-chip size="small" color="amber-darken-2" variant="tonal">Bilan</v-chip>
              </div>

              <ul class="sf-list text-body-2 mb-3">
                <li><span class="sf-t5a">Configurer un pipeline CI/CD <a href="https://docs.gitlab.com/ee/ci/" target="_blank" rel="noopener noreferrer"><span class="code-tag">GitLab</span></a> pour ex&eacute;cuter <a href="https://docs.renovatebot.com/" target="_blank" rel="noopener noreferrer"><span class="code-tag">Renovate</span></a></span> (<a href="#" class="trace-link" @click.prevent="tab = 't5'">Trace n&deg;5</a>, <a href="#" class="trace-link" @click.prevent="tab = 't6'">Trace n&deg;6</a>) : automatiser la veille des d&eacute;pendances.</li>
              </ul>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte :</span>
                J&rsquo;ai mis en place sur le GitLab interne d&rsquo;EzDEV (<code class="inline-code">gitlab.ezdev.fr</code>) un pipeline planifi&eacute; qui ex&eacute;cute <span class="code-tag">Renovate</span> de fa&ccedil;on hebdomadaire pour d&eacute;tecter automatiquement les mises &agrave; jour disponibles des d&eacute;pendances Python d&rsquo;EzGED, sans intervention manuelle de l&rsquo;&eacute;quipe.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte d&rsquo;apprentissage :</span>
                En cours, au semestre 2, nous avions vu comment utiliser <span class="code-tag">GitLab</span> pour g&eacute;rer du code, mais pas la partie CI/CD. J&rsquo;ai donc appris cette partie pendant le stage via les documentations officielles <span class="code-tag">GitLab CI/CD</span> et <span class="code-tag">Renovate</span>.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Difficult&eacute; :</span>
                Faible &agrave; moyenne. La difficult&eacute; principale est la gestion des tokens et variables CI/CD.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">&Eacute;valuation :</span>
                Bon. Je sais <span class="sf-t5a">configurer un pipeline CI/CD <span class="code-tag">GitLab</span></span> pour automatiser <span class="code-tag">Renovate</span>. Je n&rsquo;ai pas encore abord&eacute; les pipelines complexes.
              </p>
              <p class="text-body-2 mb-0">
                <span class="sf-label">Avant / Apr&egrave;s stage :</span>
                <strong>Avant&nbsp;:</strong> j&rsquo;utilisais GitLab uniquement pour pousser du code et ouvrir des MR, sans jamais &eacute;crire de pipeline ni manipuler de variables CI/CD. <strong>Apr&egrave;s&nbsp;:</strong> je sais &eacute;crire un <code class="inline-code">.gitlab-ci.yml</code>, inclure un template officiel, g&eacute;rer des tokens en variables masqu&eacute;es et planifier un pipeline.
              </p>
            </v-card>
          </div>

          <v-divider class="my-6" />

          <div class="mb-6">
            <v-card variant="flat" class="pa-4 bilan-card" rounded="lg">
              <div class="d-flex flex-wrap align-center justify-space-between mb-4">
                <span class="text-body-1 font-weight-bold">Param&eacute;trage et exploitation d'un outil de veille de d&eacute;pendances</span>
                <v-chip size="small" color="amber-darken-2" variant="tonal">Bilan</v-chip>
              </div>

              <ul class="sf-list text-body-2 mb-3">
                <li><span class="sf-t5b">Param&eacute;trer <a href="https://docs.renovatebot.com/" target="_blank" rel="noopener noreferrer"><span class="code-tag">Renovate</span></a> via <code class="inline-code">renovate.json</code></span> (<a href="#" class="trace-link" @click.prevent="tab = 't5'">Trace n&deg;5</a>) : regrouper les mises &agrave; jour et garder un contr&ocirc;le manuel.</li>
                <li><span class="sf-t6a">Identifier les indicateurs pertinents</span> (<a href="#" class="trace-link" @click.prevent="tab = 't6'">Trace n&deg;6</a>) : utiliser Age et Confidence pour juger de la stabilit&eacute; d&rsquo;une mise &agrave; jour.</li>
                <li><span class="sf-t6b">Auditer une Merge Request automatique avant validation</span> (<a href="#" class="trace-link" @click.prevent="tab = 't6'">Trace n&deg;6</a>) : croiser la veille avec un audit du code (LibCST) pour d&eacute;cider en connaissance de cause.</li>
              </ul>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte :</span>
                J&rsquo;ai param&eacute;tr&eacute; <span class="code-tag">Renovate</span> pour produire des Merge Requests group&eacute;es par &laquo;&nbsp;Toutes les d&eacute;pendances Python&nbsp;&raquo; plut&ocirc;t qu&rsquo;une MR par paquet, et activ&eacute; le <em>Dependency Dashboard</em>. J&rsquo;utilise ensuite les colonnes <em>Age</em>/<em>Confidence</em> pour prioriser les mises &agrave; jour &agrave; valider, et je croise avec mon audit LibCST (<a href="#" class="trace-link" @click.prevent="$router.push({ path: '/technique', query: { tab: 't1' } })">Trace n&deg;1</a>) avant de fusionner.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte d&rsquo;apprentissage :</span>
                D&eacute;couvert pendant le stage. J&rsquo;ai &eacute;tudi&eacute; <span class="code-tag">Dependabot</span> puis choisi <span class="code-tag">Renovate</span> pour GitLab, via la documentation officielle.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Difficult&eacute; :</span>
                Moyenne. Il faut bien r&eacute;gler les options et interpr&eacute;ter les indicateurs du rapport.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">&Eacute;valuation :</span>
                Bon. Je sais <span class="sf-t5b">configurer <span class="code-tag">Renovate</span></span> et <span class="sf-t6a">identifier les bons indicateurs</span> pour prioriser les mises &agrave; jour. Je n&rsquo;ai pas encore explor&eacute; les options avanc&eacute;es.
              </p>
              <p class="text-body-2 mb-0">
                <span class="sf-label">Avant / Apr&egrave;s stage :</span>
                <strong>Avant&nbsp;:</strong> aucune notion de veille automatis&eacute;e&nbsp;; je mettais &agrave; jour les paquets &laquo;&nbsp;&agrave; l&rsquo;aveugle&nbsp;&raquo; quand j&rsquo;y pensais. <strong>Apr&egrave;s&nbsp;:</strong> je peux mettre en place une cha&icirc;ne de veille (Renovate + Dependency Dashboard + MR group&eacute;es) et prioriser les mont&eacute;es en croisant Age et Confidence.
              </p>
            </v-card>
          </div>

          <v-divider class="my-6" />

          <div class="mb-6">
            <v-card variant="flat" class="pa-4 bilan-card" rounded="lg">
              <div class="d-flex flex-wrap align-center justify-space-between mb-4">
                <span class="text-body-1 font-weight-bold">Workflow Git/GitLab pour le d&eacute;veloppement collaboratif</span>
                <v-chip size="small" color="amber-darken-2" variant="tonal">Bilan</v-chip>
              </div>

              <ul class="sf-list text-body-2 mb-3">
                <li><span class="sf-t7a">Isoler le d&eacute;veloppement sur une branche d&eacute;di&eacute;e</span> (<a href="#" class="trace-link" @click.prevent="tab = 't7'">Trace n&deg;7</a>) : travailler sans bloquer l&rsquo;&eacute;quipe.</li>
                <li><span class="sf-t7b">D&eacute;couper le travail en commits courts et explicites</span> : garder un historique clair.</li>
                <li><span class="sf-t7c">Pr&eacute;parer l&rsquo;int&eacute;gration via une Merge Request <span class="code-tag">GitLab</span></span> : faire valider le travail avant fusion.</li>
              </ul>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte :</span>
                Tous mes d&eacute;veloppements sur EzGED (script LibCST, rendu HTML, g&eacute;n&eacute;ration de tests, automatisation de mont&eacute;e de version&hellip;) ont &eacute;t&eacute; faits sur la branche d&eacute;di&eacute;e <code class="inline-code">gestions_deps</code>, d&eacute;coup&eacute;s en commits courts et int&eacute;gr&eacute;s &agrave; la branche principale via Merge Request. Cette discipline a permis &agrave; l&rsquo;&eacute;quipe de continuer &agrave; faire &eacute;voluer le code en parall&egrave;le sans interf&eacute;rence avec mes d&eacute;veloppements.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte d&rsquo;apprentissage :</span>
                Les bases de <span class="code-tag">Git</span> ont &eacute;t&eacute; vues en cours au semestre 2. Le stage m&rsquo;a apport&eacute; la rigueur du quotidien&nbsp;: branches d&eacute;di&eacute;es, messages clairs, passage syst&eacute;matique par une Merge Request.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Difficult&eacute; :</span>
                Faible. La difficult&eacute; est la rigueur sur la dur&eacute;e.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">&Eacute;valuation :</span>
                Bon. Je sais <span class="sf-t7a">travailler en branche</span>, <span class="sf-t7b">committer proprement</span> et <span class="sf-t7c">passer par une MR</span>. Je n&rsquo;ai pas encore g&eacute;r&eacute; de cas complexes (rebase, conflits multi-auteurs).
              </p>
              <p class="text-body-2 mb-0">
                <span class="sf-label">Avant / Apr&egrave;s stage :</span>
                <strong>Avant&nbsp;:</strong> j&rsquo;utilisais Git en mode &laquo;&nbsp;solo&nbsp;&raquo; (commits gros et peu document&eacute;s, peu de branches, pas de MR). <strong>Apr&egrave;s&nbsp;:</strong> j&rsquo;ai adopt&eacute; un workflow collaboratif rigoureux (branche d&eacute;di&eacute;e, commits courts &amp; explicites, MR comme point de contr&ocirc;le) que je peux appliquer sur n&rsquo;importe quel projet d&rsquo;&eacute;quipe.
              </p>
            </v-card>
          </div>

          <v-divider class="my-6" />

          <div class="mb-6">
            <v-card variant="flat" class="pa-4 bilan-card" rounded="lg">
              <div class="d-flex flex-wrap align-center justify-space-between mb-4">
                <span class="text-body-1 font-weight-bold">Formaliser et communiquer une solution technique</span>
                <v-chip size="small" color="amber-darken-2" variant="tonal">Bilan</v-chip>
              </div>

              <ul class="sf-list text-body-2 mb-3">
                <li><span class="sf-t8a">Mod&eacute;liser un algorithme complexe sous forme de sch&eacute;ma fonctionnel</span> (<a href="#" class="trace-link" @click.prevent="tab = 't8'">Trace n&deg;8</a>) : rendre visible une triple boucle imbriqu&eacute;e + une sous-routine de cr&eacute;ation dynamique.</li>
                <li><span class="sf-t8b">Choisir une forme adapt&eacute;e &agrave; chaque &eacute;tape</span> (<a href="#" class="trace-link" @click.prevent="tab = 't8'">Trace n&deg;8</a>) : losange pour un choix, rectangle arrondi pour le d&eacute;but/la fin, rectangle pour une action.</li>
              </ul>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte :</span>
                Avant d&rsquo;int&eacute;grer <code class="inline-code">test_dependencies.py</code> dans la CI, je devais expliquer son fonctionnement (triple boucle imbriqu&eacute;e libs/appels/tests + g&eacute;n&eacute;ration dynamique de classes via <code class="inline-code">type()</code>). J&rsquo;ai produit un sch&eacute;ma fonctionnel qui se lit sans avoir besoin de relire le code, servant de support &agrave; la revue d&rsquo;&eacute;quipe avant int&eacute;gration.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte d&rsquo;apprentissage :</span>
                Le concept a &eacute;t&eacute; vu en cours, mais sans pratique sur un vrai outil. Le sch&eacute;ma a &eacute;t&eacute; r&eacute;alis&eacute; pour pr&eacute;senter le script <code class="inline-code">test_dependencies.py</code> &agrave; l&rsquo;&eacute;quipe sur <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer">Canva</a>.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Difficult&eacute; :</span>
                Faible &agrave; moyenne. Le plus dur est de choisir le bon niveau d&rsquo;abstraction&nbsp;: ni trop d&eacute;taill&eacute; (illisible), ni trop synth&eacute;tique (perd l&rsquo;information utile).
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">&Eacute;valuation :</span>
                Bon. Je sais <span class="sf-t8a">d&eacute;composer un algorithme en blocs lisibles</span> et <span class="sf-t8b">choisir la bonne forme pour chaque &eacute;tape</span> (texte, code comment&eacute;, sch&eacute;ma) selon ce que je veux faire passer, et produire un livrable autonome.
              </p>
              <p class="text-body-2 mb-0">
                <span class="sf-label">Avant / Apr&egrave;s stage :</span>
                <strong>Avant&nbsp;:</strong> je documentais mes scripts uniquement par des commentaires de code et du texte brut, ce qui rendait difficile la communication d&rsquo;une vue d&rsquo;ensemble &agrave; quelqu&rsquo;un qui ne lisait pas le code.
                <strong>Apr&egrave;s&nbsp;:</strong> mon r&eacute;flexe est de doubler le code d&rsquo;un sch&eacute;ma quand la logique est non-triviale (boucles imbriqu&eacute;es, sous-routines), ce qui rend la revue d&rsquo;&eacute;quipe bien plus rapide.
              </p>
            </v-card>
          </div>
        </v-window-item>

      </v-window>
    </v-card>

    <!-- Footer -->
    <v-card class="pa-5 text-center mt-5" rounded="lg">
      <p class="text-body-2 text-medium-emphasis">
        <a href="mailto:baptiste.didier@proton.me" class="text-blue-lighten-2">baptiste.didier@proton.me</a>
      </p>
      <div class="mt-2">
        <router-link to="/integration" class="text-blue-lighten-2 text-body-2">
          Aller sur la page Int&eacute;gration
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

const VALID_TABS = ['t5', 't6', 't7', 't8', 'bilan']
const initialTab = VALID_TABS.includes(route.query.tab) ? route.query.tab : 't5'
const tab = ref(initialTab)
watch(() => route.query.tab, (val) => {
  if (VALID_TABS.includes(val)) tab.value = val
})

const imageModal = ref(false)
const currentImage = ref('')
const zoom = ref(100)
const pan = ref({ x: 0, y: 0 })
const isPanning = ref(false)
const panStart = ref({ x: 0, y: 0 })
const panOrigin = ref({ x: 0, y: 0 })
const panMoved = ref(false)

const viewportRef = ref(null)
const imageRef = ref(null)

const imageStyle = computed(() => {
  if (zoom.value === 100) {
    return {
      width: '100%',
      height: '100%',
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

function openImage(src) {
  currentImage.value = src
  zoom.value = 100
  pan.value = { x: 0, y: 0 }
  isPanning.value = false
  panMoved.value = false
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
  color: #c5f6c7;
  padding: 1px 6px;
  border-radius: 6px;
  border: 1px solid rgba(102, 187, 106, 0.25);
  font-size: 0.92em;
}
.trace-link {
  color: #ffd54f;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.sf-t5a { color: #80cbc4; font-weight: 600; }
.sf-t5b { color: #b39ddb; font-weight: 600; }
.sf-t6a { color: #e6ee9c; font-weight: 600; }
.sf-t6b { color: #ffab40; font-weight: 600; }
.sf-t7a { color: #4fc3f7; font-weight: 600; }
.sf-t7b { color: #f48fb1; font-weight: 600; }
.sf-t7c { color: #a5d6a7; font-weight: 600; }
.sf-t8a { color: #9fa8da; font-weight: 600; }
.sf-t8b { color: #ff8a65; font-weight: 600; }
.g-row {
  row-gap: 12px;
}
.image-viewport {
  flex: 1;
  overflow: hidden;
  cursor: crosshair;
  position: relative;
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
:deep(.image-dialog) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin: 0;
}
.image-modal-card {
  margin: 0 auto;
}
</style>
