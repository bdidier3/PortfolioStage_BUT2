<template>
  <div>

    <!-- En-tete -->
    <v-card class="mb-4 pa-4" rounded="lg">
      <h1 class="text-h6 font-weight-bold mb-1">
        Pr&eacute;sentation et &eacute;valuation de savoir-faire sur l&rsquo;int&eacute;gration en entreprise
      </h1>
      <p class="text-body-2 text-medium-emphasis mb-0">
        Cette partie pr&eacute;sente le savoir-faire li&eacute; &agrave; l&rsquo;appropriation rapide d&rsquo;un projet existant
        complexe&nbsp;: audit statique du code EzGED et identification des incompatibilit&eacute;s Python&nbsp;3.13.
        Chaque trace illustre un outil pr&eacute;cis, suivi d&rsquo;un bilan global.
      </p>
    </v-card>

    <!-- Contenu avec onglets -->
    <v-card class="pa-4" rounded="lg">
      <v-tabs v-model="tab" color="amber-darken-2" align-tabs="start" density="compact">
        <v-tab value="t9">Trace 9</v-tab>
        <v-tab value="t10">Trace 10</v-tab>
        <v-tab value="t11">Trace 11</v-tab>
        <v-tab value="bilan">Bilan &amp; &Eacute;valuation</v-tab>
      </v-tabs>
      <v-divider class="mb-3" />

      <v-window v-model="tab">

        <!-- TRACE 8 -->
        <v-window-item value="t9">
          <v-card variant="flat" class="pa-3" rounded="lg">
            <h3 class="text-h6 font-weight-bold mb-2">
              Audit statique du projet EzGED avec ruff
            </h3>
            <div class="mb-3">
              <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
              <v-chip color="info" size="small" class="ma-1">Prendre en main un projet inconnu via un audit automatique</v-chip>
              <v-chip color="info" size="small" class="ma-1">Se documenter en autonomie sur un outil pour l&rsquo;appliquer au projet</v-chip>
            </div>

            <v-row align="start" no-gutters class="g-row">
              <v-col cols="12" md="6" class="pe-md-4">
                <img
                  src="/images/Trace9_ruff.png"
                  alt="Rapport ruff"
                  class="trace-image"
                  @click="openImage($event.currentTarget.currentSrc)"
                />
                <p class="text-caption text-medium-emphasis mt-2 mb-0">
                  <strong>Trace n&deg;9</strong> : Rapport ruff ex&eacute;cut&eacute; sur le projet EzGED.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <p class="text-body-2 mb-2">
                  La <strong>Trace n&deg;9</strong> montre un extrait du rapport produit par ruff lanc&eacute; sur le projet EzGED. Trois r&egrave;gles sont mises en &eacute;vidence dans des cadres rouges&nbsp;:
                  <code class="inline-code">F401</code> signalant deux imports inutilis&eacute;s (soulign&eacute;s en blanc,
                  <code class="inline-code">common</code> et <code class="inline-code">traceback</code>) dans
                  <code class="inline-code">lib\simple_mail.py</code>, et <code class="inline-code">E713</code> indiquant
                  un test d&rsquo;appartenance &eacute;crit <code class="inline-code">if not secusrid in vlistout</code> qui devrait &ecirc;tre
                  r&eacute;&eacute;crit <code class="inline-code">if secusrid not in vlistout</code>. Le marqueur
                  <code class="inline-code">[*]</code> &agrave; c&ocirc;t&eacute; des codes indique que ruff peut corriger l&rsquo;erreur tout seul.
                  La derni&egrave;re ligne donne le bilan global&nbsp;: 4958 erreurs d&eacute;tect&eacute;es sur l&rsquo;ensemble du d&eacute;p&ocirc;t,
                  dont 276 corrigibles automatiquement (cadre bleu) avec l&rsquo;option <code class="inline-code">--fix</code>, et
                  91 suppl&eacute;mentaires via <code class="inline-code">--unsafe-fixes</code>. Ce premier rapport m&rsquo;a donn&eacute; une
                  vue d&rsquo;ensemble de l&rsquo;&eacute;tat du projet avant m&ecirc;me de conna&icirc;tre son architecture en d&eacute;tail.
                </p>
                <p class="text-body-2 mb-2">
                  Pour <span class="sf-blue">prendre en main le projet via cet audit</span>, j&rsquo;ai install&eacute; ruff via
                  <code class="inline-code">uv</code> et lanc&eacute; la commande
                  <code class="inline-code">uv run ruff check ezged lib &gt; ruff_rapport_complet.txt</code> &agrave; la racine du d&eacute;p&ocirc;t
                  EzGED. Le rapport produit m&rsquo;a permis de rep&eacute;rer rapidement les zones
                  du code &agrave; probl&egrave;me (imports inutiles, vieilles syntaxes, modules supprim&eacute;s) sans lire des milliers de
                  lignes. J&rsquo;ai ensuite archivé le fichier sur GitLab et l&rsquo;ai pr&eacute;sent&eacute; pour indiquer les modules qu'il faudrait réparer en premier avant la migration, ce qui
                  a servi de base &agrave; mes premiers &eacute;changes techniques avec l&rsquo;&eacute;quipe.
                </p>
                <p class="text-body-2 mb-0">
                  Pour <span class="sf-blue">me documenter en autonomie sur ruff</span>, je suis parti directement de la
                  documentation officielle&nbsp;: je l&rsquo;ai parcourue pour comprendre la cat&eacute;gorisation des r&egrave;gles
                  (lettre + num&eacute;ro, ex.&nbsp;<code class="inline-code">F401</code> pour les imports inutilis&eacute;s,
                  <code class="inline-code">E7xx</code> pour le style des comparaisons), puis l&rsquo;usage du marqueur
                  <code class="inline-code">[*]</code> qui s&eacute;pare les corrections automatiques (option
                  <code class="inline-code">--fix</code>) des erreurs &agrave; examiner manuellement. Cette d&eacute;marche m&rsquo;a permis
                  de produire un rapport directement exploitable&nbsp;: identifier d&rsquo;un c&ocirc;t&eacute; les zones nettoyables
                  en s&eacute;curit&eacute; (auto-fixables) et de l&rsquo;autre celles &agrave; revoir manuellement, sans attendre une formation
                  pr&eacute;alable sur l&rsquo;outil.
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>

        <!-- TRACE 9 -->
        <v-window-item value="t10">
          <v-card variant="flat" class="pa-3" rounded="lg">
            <h3 class="text-h6 font-weight-bold mb-2">
              Prise en main du projet EzGED via l&rsquo;audit des d&eacute;pendances
            </h3>
            <div class="mb-3">
              <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
              <v-chip color="info" size="small" class="ma-1">Prendre en main un projet existant via un outil d&rsquo;audit</v-chip>
              <v-chip color="info" size="small" class="ma-1">Adapter la configuration d&rsquo;un outil au projet</v-chip>
            </div>

            <v-row align="start" no-gutters class="g-row">
              <v-col cols="12" md="6" class="pe-md-4">
                <img
                  src="/images/Trace10_deptry.png"
                  alt="Rapport deptry"
                  class="trace-image"
                  @click="openImage($event.currentTarget.currentSrc, 'tall')"
                />
                <p class="text-caption text-medium-emphasis mt-2 mb-0">
                  <strong>Trace n&deg;10</strong> : Rapport deptry ex&eacute;cut&eacute; sur EzGED.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <div class="text-body-2 mb-2">
                  <p class="mb-2">
                    La <strong>Trace n&deg;10</strong> montre la sortie de deptry ex&eacute;cut&eacute; &agrave; la racine du projet EzGED
                    (316 fichiers analys&eacute;s, <strong>98 probl&egrave;mes de d&eacute;pendances</strong> remont&eacute;s au total).
                    Chaque ligne associe un fichier (chemin &agrave; gauche) ou le <code class="inline-code">pyproject.toml</code>
                    &agrave; un code de diagnostic et au module concern&eacute;. Trois cat&eacute;gories d&rsquo;anomalies apparaissent&nbsp;:
                  </p>
                  <ul class="pl-4 mb-2">
                    <li class="mb-1">
                      <strong>Cadre jaune (ligne 68, <code class="inline-code">DEP001</code>)</strong> :
                      <code class="inline-code">pyzbar</code> est import&eacute; dans <code class="inline-code">lib/ezbarcodereader.py</code>
                      mais <strong>n&rsquo;est pas d&eacute;clar&eacute;</strong> dans <code class="inline-code">pyproject.toml</code>
                      (m&ecirc;me cas pour <code class="inline-code">sphinx</code>, <code class="inline-code">pyamf</code>,
                      <code class="inline-code">ldap</code>, <code class="inline-code">lxml</code>...).
                    </li>
                    <li class="mb-1">
                      <strong>Cadre bleu (ligne 62, <code class="inline-code">DEP003</code>)</strong> :
                      <code class="inline-code">pygments</code> est import&eacute; dans
                      <code class="inline-code">ezforms/.../doc/_build/conf.py</code> mais c&rsquo;est une
                      <strong>d&eacute;pendance transitive</strong>&nbsp;: pr&eacute;sente uniquement parce qu&rsquo;une autre d&eacute;pendance
                      l&rsquo;embarque (m&ecirc;me cas pour <code class="inline-code">router</code>,
                      <code class="inline-code">marshmallow</code>, <code class="inline-code">snifertrt</code>).
                    </li>
                    <li>
                      <strong>Cadre orange (lignes 73-106, <code class="inline-code">DEP002</code>)</strong> :
                      34 paquets sont <strong>d&eacute;clar&eacute;s dans <code class="inline-code">pyproject.toml</code> mais jamais utilis&eacute;s</strong>
                      dans le code (<code class="inline-code">annotated-types</code> soulign&eacute; en exemple,
                      suivi de <code class="inline-code">attrs</code>, <code class="inline-code">automat</code>,
                      <code class="inline-code">bcrypt</code>, <code class="inline-code">cryptography</code>,
                      <code class="inline-code">pandas</code>, <code class="inline-code">twisted-iocpsupport</code>...
                      jusqu&rsquo;&agrave; <code class="inline-code">zope-interface</code>).
                    </li>
                  </ul>
                  <p class="mb-0">
                    Cette trace s&rsquo;inscrit dans ma phase d&rsquo;int&eacute;gration chez EzDEV&nbsp;: confront&eacute; &agrave; un projet existant,
                    gros et complexe, j&rsquo;ai utilis&eacute; deptry pour cartographier rapidement l&rsquo;&eacute;cosyst&egrave;me des d&eacute;pendances
                    Python d&rsquo;EzGED et rep&eacute;rer les zones &agrave; traiter en priorit&eacute; avant la migration vers Python&nbsp;3.13.
                  </p>
                </div>
                <p class="text-body-2 mb-2">
                  Pour <span class="sf-blue">prendre en main un projet existant via un outil d&rsquo;audit</span>, j&rsquo;ai utilis&eacute;
                  deptry d&egrave;s mes premiers jours dans l&rsquo;entreprise afin d&rsquo;obtenir une vision globale des d&eacute;pendances
                  Python d&rsquo;EzGED. Cet outil m&rsquo;a permis de rep&eacute;rer rapidement les d&eacute;pendances obsol&egrave;tes, inutilis&eacute;es
                  ou incompatibles avec les nouvelles versions de Python, sans avoir besoin de parcourir tout le code &agrave; la main.
                  Concr&egrave;tement, le rapport m&rsquo;a donn&eacute; en une seule ex&eacute;cution trois informations cl&eacute;s&nbsp;: les paquets
                  <strong>manquants</strong> (<code class="inline-code">DEP001</code>), les paquets <strong>d&eacute;clar&eacute;s mais inutiles</strong>
                  (<code class="inline-code">DEP002</code>, le gros cadre orange) et les d&eacute;pendances <strong>transitives</strong>
                  utilis&eacute;es par erreur comme directes (<code class="inline-code">DEP003</code>). Les anomalies visibles dans la
                  <strong>Trace n&deg;10</strong> m&rsquo;ont directement orient&eacute; vers les fichiers et modules &agrave; comprendre en priorit&eacute;,
                  ce qui a acc&eacute;l&eacute;r&eacute; ma d&eacute;couverte de l&rsquo;architecture du projet.
                </p>
                <p class="text-body-2 mb-0">
                  Pour <span class="sf-blue">adapter la configuration d&rsquo;un outil au projet</span>, j&rsquo;ai d&rsquo;abord constat&eacute;
                  qu&rsquo;une premi&egrave;re ex&eacute;cution de deptry produisait des centaines de faux positifs sur les modules internes
                  d&rsquo;EzGED (<code class="inline-code">ezged</code>, <code class="inline-code">ezforms</code>,
                  <code class="inline-code">lib</code>, <code class="inline-code">www3</code>...), car deptry les voyait comme
                  des imports externes non d&eacute;clar&eacute;s dans <code class="inline-code">pyproject.toml</code>. J&rsquo;ai donc compl&eacute;t&eacute;
                  la section <code class="inline-code">[tool.deptry] known_first_party</code> (voir
                  <a href="#" class="trace-link" @click.prevent="$router.push({ path: '/technique', query: { tab: 't2' } })">Trace n&deg;2</a>) en y listant
                  ces modules internes. Le rapport visible ici en est le r&eacute;sultat&nbsp;: les 98 anomalies restantes sont toutes
                  exploitables, ce qui m&rsquo;a permis de me concentrer sur les vrais points &agrave; comprendre et d&rsquo;avancer
                  efficacement dans la prise en main du projet.
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>

        <!-- TRACE 11 -->
        <v-window-item value="t11">
          <v-card variant="flat" class="pa-3" rounded="lg">
            <h3 class="text-h6 font-weight-bold mb-2">
              Diagnostic d&rsquo;un test en &eacute;chec via le d&eacute;bogueur pas-&agrave;-pas de PyCharm
            </h3>
            <div class="mb-3">
              <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
              <v-chip color="info" size="small" class="ma-1">Configurer un environnement de d&eacute;bogage Python avec PyCharm et uv</v-chip>
              <v-chip color="info" size="small" class="ma-1">Diagnostiquer un test unitaire &agrave; l&rsquo;aide d&rsquo;un d&eacute;bogueur pas-&agrave;-pas</v-chip>
            </div>

            <v-row align="start" no-gutters class="g-row">
              <v-col cols="12" md="6" class="pe-md-4">
                <img
                  src="/images/Trace11_pycharm_debug.png"
                  alt="Session de d&eacute;bogage PyCharm d&rsquo;un test unittest"
                  class="trace-image"
                  @click="openImage($event.currentTarget.currentSrc)"
                />
                <p class="text-caption text-medium-emphasis mt-2 mb-0">
                  <strong>Trace n&deg;11</strong> : Session de d&eacute;bogage PyCharm sur
                  <code class="inline-code">test_set_mailbox</code> du fichier
                  <code class="inline-code">test_o365lib.py</code>.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <div class="text-body-2 mb-2">
                  <p class="mb-2">
                    La <strong>Trace n&deg;11</strong> montre une session de d&eacute;bogage PyCharm sur le test unitaire
                    <code class="inline-code">test_set_mailbox</code> de la classe
                    <code class="inline-code">O365OutlookIntegrationTestCases</code>, arr&ecirc;t&eacute;e sur un point d&rsquo;arr&ecirc;t.
                    Plusieurs zones de l&rsquo;IDE sont mises en &eacute;vidence&nbsp;:
                  </p>
                  <ul class="pl-4 mb-2">
                    <li class="mb-1">
                      <strong>Cadre rose (haut-droit)</strong> : barre de la configuration de lancement
                      &laquo;&nbsp;Unittests for test_o365lib.O365O...mailbox&nbsp;&raquo; avec les boutons Run/Debug actifs.
                    </li>
                    <li class="mb-1">
                      <strong>Bouton Debug surlign&eacute; bleu (sidebar gauche)</strong> : panneau Debug ouvert,
                      l&rsquo;ex&eacute;cution est suspendue.
                    </li>
                    <li class="mb-1">
                      <strong>Cadre rouge (ligne 350)</strong> : breakpoint pos&eacute; sur
                      <code class="inline-code">result = self.o365.set_mailbox(folder_name=folder_name)</code>,
                      qui est l&rsquo;appel sous test.
                    </li>
                    <li class="mb-1">
                      <strong>Cadre vert (bas-gauche)</strong> : barre d&rsquo;outils pas-&agrave;-pas
                      (<em>resume, stop, step over, step into, step out, run to cursor</em>).
                    </li>
                    <li class="mb-1">
                      <strong>Cadre bleu (panneau MainThread)</strong> : pile d&rsquo;appels unittest. La m&eacute;thode
                      <code class="inline-code">test_set_mailbox</code> est appel&eacute;e par
                      <code class="inline-code">_callTestMethod</code>, lui-m&ecirc;me appel&eacute; depuis
                      <code class="inline-code">case.py:run</code>, qui est orchestr&eacute; en remontant par
                      <code class="inline-code">suite.py</code>, puis <code class="inline-code">runner.py</code>,
                      et enfin <code class="inline-code">main.py</code> au sommet de la pile.
                    </li>
                    <li>
                      <strong>Cadre jaune (panneau Threads &amp; Variables)</strong> : valeurs courantes
                      (<code class="inline-code">folder_name = 'test'</code>,
                      <code class="inline-code">tasks = {'del_mailbox': 'test'}</code>,
                      <code class="inline-code">self.o365 = &lt;O365Outlook&gt;</code>,
                      <code class="inline-code">db = &lt;db_mysql.sql_db&gt;</code>...).
                    </li>
                  </ul>
                  <p class="mb-0">
                    Cette trace s&rsquo;inscrit dans ma phase d&rsquo;int&eacute;gration&nbsp;: une partie des tests existants
                    d&rsquo;EzGED &eacute;chouait (
                    <code class="inline-code">fileindexer</code>,
                    <code class="inline-code">coldpdfburst</code>...) et j&rsquo;ai d&ucirc; apprendre &agrave; m&rsquo;approprier
                    l&rsquo;environnement de d&eacute;bogage utilis&eacute; par l&rsquo;&eacute;quipe (PyCharm + uv + Python&nbsp;3.11)
                    pour diagnostiquer leurs causes.
                  </p>
                </div>
                <p class="text-body-2 mb-2">
                  Pour <span class="sf-blue">configurer l&rsquo;environnement de d&eacute;bogage</span>, j&rsquo;ai d&rsquo;abord rattach&eacute;
                  PyCharm &agrave; l&rsquo;interpr&eacute;teur g&eacute;r&eacute; par <code class="inline-code">uv</code>
                  (<em>Settings &gt; Python Interpreter &gt; Add Local Interpreter &gt; Existing &gt;
                  .venv/Scripts/python.exe</em>), confirm&eacute; en bas de l&rsquo;&eacute;cran par
                  <code class="inline-code">uv (trunk4) [Python 3.11.15]</code>. J&rsquo;ai ensuite cr&eacute;&eacute; une
                  configuration de lancement <strong>Unittests</strong> cibl&eacute;e sur la m&eacute;thode de test (cadre rose),
                  ce qui permet de relancer rapidement le test seul plut&ocirc;t que toute la suite. Cette mise en place a
                  &eacute;t&eacute; faite en parall&egrave;le du travail sur <code class="inline-code">pyproject.toml</code>
                  (<a href="#" class="trace-link" @click.prevent="$router.push({ path: '/technique', query: { tab: 't2' } })">Trace n&deg;2</a>) qui d&eacute;clare
                  les m&ecirc;mes d&eacute;pendances.
                </p>
                <p class="text-body-2 mb-0">
                  Pour <span class="sf-blue">diagnostiquer le test pas-&agrave;-pas</span>, j&rsquo;ai pos&eacute; un breakpoint
                  (cadre rouge ligne 350) juste avant l&rsquo;appel suspect&nbsp;: l&rsquo;ex&eacute;cution s&rsquo;y arr&ecirc;te et le
                  panneau <em>Threads &amp; Variables</em> (cadre jaune) me donne en direct l&rsquo;&eacute;tat des variables
                  locales et de <code class="inline-code">self</code>, ce qui est bien plus efficace que des
                  <code class="inline-code">print()</code> dispers&eacute;s dans le code. Les contr&ocirc;les pas-&agrave;-pas
                  (cadre vert) permettent ensuite d&rsquo;avancer ligne par ligne ou d&rsquo;entrer dans
                  <code class="inline-code">set_mailbox</code>. Enfin, la pile d&rsquo;appels (cadre bleu) rend visible
                  la cha&icirc;ne d&rsquo;orchestration de <em>unittest</em>
                  (<code class="inline-code">case.py</code>, <code class="inline-code">suite.py</code>,
                  <code class="inline-code">runner.py</code>), ce qui m&rsquo;aide &agrave; distinguer un bug du test d&rsquo;un
                  probl&egrave;me dans le framework lui-m&ecirc;me.
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
                <span class="text-body-1 font-weight-bold">S'approprier un projet Python existant et cons&eacute;quent</span>
                <v-chip size="small" color="amber-darken-2" variant="tonal">Bilan</v-chip>
              </div>

              <ul class="sf-list text-body-2 mb-3">
                <li><span class="sf-blue">Prendre en main un projet inconnu via un audit automatique</span> (<a href="#" class="trace-link" @click.prevent="tab = 't9'">Trace n&deg;9</a>) : obtenir une vue d&rsquo;ensemble rapide du code avec <span class="code-tag">ruff</span>.</li>
                <li><span class="sf-blue">Prendre en main un projet existant via un outil d&rsquo;audit</span> (<a href="#" class="trace-link" @click.prevent="tab = 't10'">Trace n&deg;10</a>) : cartographier les d&eacute;pendances avec <span class="code-tag">deptry</span> et rep&eacute;rer les anomalies principales.</li>
              </ul>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte d&rsquo;apprentissage :</span>
                Appris en autonomie pendant le stage avec les docs <span class="code-tag">ruff</span> et <span class="code-tag">deptry</span>. En cours, nous partions de z&eacute;ro sur des projets petits.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Difficult&eacute; :</span>
                Moyenne. Le plus dur est de trier le rapport et de prioriser.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">&Eacute;valuation :</span>
                Bon. Je sais <span class="sf-blue">auditer un projet avec <span class="code-tag">ruff</span></span> et <span class="sf-blue">cartographier les d&eacute;pendances avec <span class="code-tag">deptry</span></span> pour orienter la prise en main.
              </p>
              <p class="text-body-2 mb-0">
                <span class="sf-label">Avant / Apr&egrave;s stage :</span>
                <strong>Avant&nbsp;:</strong> face &agrave; un projet inconnu, j&rsquo;ouvrais les fichiers un par un pour comprendre l&rsquo;architecture, m&eacute;thode qui ne passe pas l&rsquo;&eacute;chelle sur un projet de plusieurs milliers de fichiers. <strong>Apr&egrave;s&nbsp;:</strong> mon r&eacute;flexe est de lancer un audit automatique (<span class="code-tag">ruff</span> + <span class="code-tag">deptry</span>) pour obtenir en quelques minutes une cartographie des zones &agrave; risque et concentrer ma lecture l&agrave; o&ugrave; c&rsquo;est utile.
              </p>
            </v-card>
          </div>

          <v-divider class="my-6" />

          <div class="mb-6">
            <v-card variant="flat" class="pa-4 bilan-card" rounded="lg">
              <div class="d-flex flex-wrap align-center justify-space-between mb-4">
                <span class="text-body-1 font-weight-bold">Mettre en place un outil d'analyse en autonomie</span>
                <v-chip size="small" color="amber-darken-2" variant="tonal">Bilan</v-chip>
              </div>

              <ul class="sf-list text-body-2 mb-3">
                <li><span class="sf-blue">Se documenter en autonomie sur un outil</span> (<a href="#" class="trace-link" @click.prevent="tab = 't9'">Trace n&deg;9</a>) : comprendre <span class="code-tag">ruff</span> sans formation pr&eacute;alable.</li>
                <li><span class="sf-blue">Adapter la configuration d&rsquo;un outil au projet</span> (<a href="#" class="trace-link" @click.prevent="tab = 't10'">Trace n&deg;10</a>) : ajuster <span class="code-tag">deptry</span> via <code class="inline-code">pyproject.toml</code> pour &eacute;viter les faux positifs.</li>
              </ul>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte d&rsquo;apprentissage :</span>
                Lecture de doc vue en cours, mais pas sur un outil complet. La configuration via <code class="inline-code">pyproject.toml</code> n&rsquo;&eacute;tait pas abord&eacute;e. J&rsquo;ai introduit <span class="code-tag">ruff</span> et <span class="code-tag">deptry</span> pour compl&eacute;ter l&rsquo;audit.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Difficult&eacute; :</span>
                Moyenne. Il faut comprendre les r&egrave;gles utiles et bien configurer <span class="code-tag">deptry</span>.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">&Eacute;valuation :</span>
                Bon. Je sais <span class="sf-blue">me documenter seul</span> et <span class="sf-blue">adapter un outil</span> &agrave; un projet pour produire un livrable clair.
              </p>
              <p class="text-body-2 mb-0">
                <span class="sf-label">Avant / Apr&egrave;s stage :</span>
                <strong>Avant&nbsp;:</strong> je consommais des outils en mode &laquo;&nbsp;configuration par d&eacute;faut&nbsp;&raquo;, et si le r&eacute;sultat &eacute;tait bruit&eacute; je l&rsquo;acceptais tel quel. <strong>Apr&egrave;s&nbsp;:</strong> je sais lire une doc technique pour identifier les options de configuration utiles, et adapter un outil (ex. <code class="inline-code">known_first_party</code> pour deptry) au contexte d&rsquo;un projet sp&eacute;cifique.
              </p>
            </v-card>
          </div>

          <v-divider class="my-6" />

          <div class="mb-6">
            <v-card variant="flat" class="pa-4 bilan-card" rounded="lg">
              <div class="d-flex flex-wrap align-center justify-space-between mb-4">
                <span class="text-body-1 font-weight-bold">Adopter l&rsquo;environnement de d&eacute;veloppement de l&rsquo;&eacute;quipe</span>
                <v-chip size="small" color="amber-darken-2" variant="tonal">Bilan</v-chip>
              </div>

              <ul class="sf-list text-body-2 mb-3">
                <li><span class="sf-blue">Configurer un environnement de d&eacute;bogage Python avec <span class="code-tag">PyCharm</span> et <span class="code-tag">uv</span></span> (<a href="#" class="trace-link" @click.prevent="tab = 't11'">Trace n&deg;11</a>) : rattacher l&rsquo;IDE &agrave; l&rsquo;interpr&eacute;teur du projet et cr&eacute;er une configuration unittest cibl&eacute;e.</li>
                <li><span class="sf-blue">Diagnostiquer un test unitaire avec un d&eacute;bogueur pas-&agrave;-pas</span> (<a href="#" class="trace-link" @click.prevent="tab = 't11'">Trace n&deg;11</a>) : breakpoint, inspection des variables, pile d&rsquo;appels, step-into.</li>
              </ul>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Contexte d&rsquo;apprentissage :</span>
                <span class="code-tag">PyCharm</span> n&rsquo;avait pas &eacute;t&eacute; vu en cours mais nous avions vu <span class="code-tag">IDEA</span> qui est de JetBrains, c&rsquo;est &agrave; peu pr&egrave;s pareil. Nous avions vu comment lancer des tests, mais le d&eacute;bogueur pas-&agrave;-pas n&rsquo;avait pas &eacute;t&eacute; vu. J&rsquo;ai d&ucirc; m&rsquo;approprier ces outils pendant le stage pour analyser des tests existants en &eacute;chec (<code class="inline-code">fileindexer</code>, <code class="inline-code">coldpdfburst</code>...).
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">Difficult&eacute; :</span>
                Moyenne. Le plus dur est de comprendre la pile d&rsquo;appels unittest (<code class="inline-code">case.py</code>, <code class="inline-code">suite.py</code>, <code class="inline-code">runner.py</code>) pour ne pas confondre un bug du test avec un bug du framework.
              </p>
              <p class="text-body-2 mb-3">
                <span class="sf-label">&Eacute;valuation :</span>
                Bon. Je sais <span class="sf-blue">configurer un IDE Python sur un projet existant</span> et <span class="sf-blue">m&rsquo;en servir pour diagnostiquer un test en &eacute;chec</span>. Je n&rsquo;ai pas encore explor&eacute; les watches conditionnels ni le d&eacute;bogage distant.
              </p>
              <p class="text-body-2 mb-0">
                <span class="sf-label">Avant / Apr&egrave;s stage :</span>
                <strong>Avant&nbsp;:</strong> je d&eacute;boguais avec des <code class="inline-code">print()</code> dispers&eacute;s et je relan&ccedil;ais tout le script &agrave; chaque modification.
                <strong>Apr&egrave;s&nbsp;:</strong> mon r&eacute;flexe est de poser un breakpoint et d&rsquo;inspecter l&rsquo;&eacute;tat des variables et la pile d&rsquo;appels dans l&rsquo;IDE, ce qui me permet de comprendre <em>en une seule ex&eacute;cution</em> ce qu&rsquo;un test fait r&eacute;ellement.
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
        <router-link to="/" class="text-blue-lighten-2 text-body-2">
          Aller sur la page Accueil
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
const VALID_TABS = ['t9', 't10', 't11', 'bilan']
const initialTab = VALID_TABS.includes(route.query.tab) ? route.query.tab : 't9'
const tab = ref(initialTab)
watch(() => route.query.tab, (val) => {
  if (VALID_TABS.includes(val)) tab.value = val
})

const imageModal = ref(false)
const currentImage = ref('')
const imageMode = ref('default')
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
  imageMode.value = mode
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
  color: #8ecbff;
  padding: 1px 6px;
  border-radius: 6px;
  border: 1px solid rgba(66, 165, 245, 0.25);
  font-size: 0.92em;
}
.trace-link {
  color: #ffd54f;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.sf-blue {
  color: #42a5f5;
  font-weight: 600;
}
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
