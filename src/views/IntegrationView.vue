<template>
  <div>

    <!-- En-tête -->
    <v-card class="mb-5 pa-5" rounded="lg">
      <h1 class="text-h6 font-weight-bold mb-2">
        Pr&eacute;sentation et &eacute;valuation de savoir-faire sur l'int&eacute;gration en entreprise
      </h1>
      <p class="text-body-2 text-medium-emphasis">
        Cette page pr&eacute;sente le savoir-faire li&eacute; &agrave; l&rsquo;appropriation rapide d&rsquo;un projet existant
        complexe&nbsp;: audit statique du code EzGED, identification des incompatibilit&eacute;s Python&nbsp;3.13
        et reconstruction de l&rsquo;architecture.
      </p>
    </v-card>

    <!-- Contenu principal avec onglets -->
    <v-card class="pa-5" rounded="lg">
      <h2 class="text-h6 font-weight-bold mb-2">
        Savoir s&rsquo;approprier rapidement un projet existant complexe
      </h2>
      <p class="text-body-2 text-medium-emphasis mb-4">
        Les deux traces ci-dessous illustrent comment j&rsquo;ai analys&eacute; l&rsquo;architecture d&rsquo;EzGED,
        identifi&eacute; les d&eacute;pendances existantes, rep&eacute;r&eacute; les fichiers incompatibles avec Python&nbsp;3.13
        et sollicit&eacute; les d&eacute;veloppeurs (J&eacute;r&eacute;my Hindgray) sur les aspects techniques.
      </p>

      <v-tabs v-model="tab" color="primary">
        <v-tab value="comp1">Comp&eacute;tence 5</v-tab>
        <v-tab value="comp2">Comp&eacute;tence 6</v-tab>
        <v-tab value="bilan">Bilan &amp; &Eacute;valuation</v-tab>
      </v-tabs>
      <v-divider class="mb-4" />

      <v-window v-model="tab">

        <!-- Compétence 1 — Audit initial deptry/ruff/uv -->
        <v-window-item value="comp1">
          <h3 class="text-subtitle-1 font-weight-bold mb-3">
            Audit initial du code EzGED avec ruff et deptry (Semaine&nbsp;1)
          </h3>
          <div class="mb-3">
            <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
            <v-chip color="info" size="small" class="ma-1">D&eacute;ployer et utiliser des outils d&rsquo;analyse statique (ruff, deptry)</v-chip>
            <v-chip color="info" size="small" class="ma-1">Identifier et classifier les anomalies d&rsquo;un projet Python existant</v-chip>
            <v-chip color="info" size="small" class="ma-1">Solliciter les d&eacute;veloppeurs pour comprendre l&rsquo;architecture</v-chip>
          </div>

          <v-row class="mb-4" align="start">
            <v-col cols="12" md="7">
              <v-sheet color="grey-darken-3" rounded="lg" class="pa-3 d-flex flex-column align-center justify-center" min-height="220">
                <v-icon size="48" color="grey-lighten-1">mdi-image-outline</v-icon>
                <p class="text-caption text-medium-emphasis mt-2 text-center">
                  Image &agrave; venir &mdash; Rapport de sortie ruff / deptry sur le projet EzGED (semaine&nbsp;1)
                </p>
              </v-sheet>
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;6</strong> &mdash; R&eacute;sultat de l&rsquo;audit initial ruff et deptry sur les
                dossiers <code>ezged</code> et <code>lib</code>. On y voit les cat&eacute;gories d&rsquo;anomalies
                d&eacute;tect&eacute;es (F401, F821, E722&hellip;), les d&eacute;pendances non utilis&eacute;es (DEP002) et les
                paquets manquants (DEP001).
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="blue-lighten-2" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-3">
                  La Trace n&deg;6 est le rapport produit lors de l&rsquo;audit initial de la semaine&nbsp;1,
                  r&eacute;alis&eacute; avec les outils <strong>ruff</strong> et <strong>deptry</strong> ex&eacute;cut&eacute;s
                  via le gestionnaire <code>uv</code>. Deux commandes principales ont &eacute;t&eacute; utilis&eacute;es&nbsp;:
                  <code>uv run ruff check ezged lib</code> et <code>uv run deptry ezged lib</code>.
                </p>
                <p class="text-body-2 mb-0">
                  Cet audit a fourni un premier panorama de l&rsquo;&eacute;tat du projet&nbsp;: dette technique,
                  syntaxes Python&nbsp;2.7 r&eacute;siduelles, d&eacute;pendances inutilis&eacute;es et bugs silencieux
                  cach&eacute;s dans des chemins d&rsquo;ex&eacute;cution rarement activ&eacute;s.
                </p>
              </v-card>
            </v-col>
          </v-row>

          <div class="text-body-2">
            <p class="mb-3 font-weight-medium">M&eacute;thodologie de l&rsquo;audit</p>
            <p class="mb-3">
              Afin de fiabiliser la migration vers Python&nbsp;3.13, deux outils d&rsquo;analyse statique ont
              &eacute;t&eacute; d&eacute;ploy&eacute;s via le gestionnaire <code>uv</code>&nbsp;:
              <strong>deptry</strong> (<code>uv run deptry .</code>) pour l&rsquo;analyse structurelle
              (croisement des imports avec les d&eacute;pendances d&eacute;clar&eacute;es dans <code>pyproject.toml</code>)
              et <strong>ruff</strong> (<code>uv run ruff check .</code>) pour le linting et le
              rep&eacute;rage des erreurs de syntaxe, imports morts et non-respects des standards.
            </p>

            <p class="mb-2 font-weight-medium">Audit ruff &mdash; anomalies d&eacute;tect&eacute;es</p>
            <p class="mb-2">
              Pour
              <v-chip color="info" size="x-small" class="mx-1">identifier et classifier les anomalies</v-chip>,
              l&rsquo;ex&eacute;cution de ruff sur les r&eacute;pertoires <code>lib</code> et <code>ezged</code>
              a mis en &eacute;vidence plusieurs niveaux de probl&egrave;mes&nbsp;:
            </p>
            <ul class="pl-5 mb-3">
              <li class="mb-1"><strong>Syntaxes obsolètes Python&nbsp;2.7</strong>&nbsp;: pr&eacute;sence r&eacute;siduelle dans le r&eacute;pertoire <code>satellite</code> d&rsquo;op&eacute;rateurs strictement bloquants en Python&nbsp;3.13 (ex&nbsp;: l&rsquo;op&eacute;rateur <code>&lt;&gt;</code> au lieu de <code>!=</code>).</li>
              <li class="mb-1"><strong>F401 — Imports fant&ocirc;mes</strong>&nbsp;: modules import&eacute;s mais jamais utilis&eacute;s. Consomme de la m&eacute;moire et pollue la lecture du code.</li>
              <li class="mb-1"><strong>F821 — Appels non d&eacute;finis</strong>&nbsp;: utilisation d&rsquo;un module ou variable inexistant. <em>Critique</em>&nbsp;: provoque un crash imm&eacute;diat (<code>NameError</code>). Exemple concret&nbsp;: dans <code>sendemail.py</code>, appel &agrave; <code>libjobdext.get_job_script_session()</code> &agrave; la ligne&nbsp;163 alors que le module <code>libjobdext</code> n&rsquo;avait jamais &eacute;t&eacute; import&eacute;.</li>
              <li class="mb-1"><strong>F841 — Variables mortes</strong>&nbsp;: variables assign&eacute;es mais jamais lues. Perte de temps processeur et surcharge m&eacute;moire inutile.</li>
              <li class="mb-1"><strong>F601 — Cl&eacute;s dupliqu&eacute;es</strong>&nbsp;: doublons dans un dictionnaire. Python &eacute;crase silencieusement la premi&egrave;re valeur &mdash; erreur de logique m&eacute;tier difficile &agrave; d&eacute;tecter.</li>
              <li class="mb-1"><strong>E722 — Pratiques &agrave; risque</strong>&nbsp;: blocs <code>except:</code> g&eacute;n&eacute;riques sans pr&eacute;ciser l&rsquo;exception. Masque les vrais crashs et rend le d&eacute;bogage impossible.</li>
              <li class="mb-1"><strong>E402 / E713</strong>&nbsp;: imports mal plac&eacute;s et syntaxes non standards (<code>if not X in Y</code> au lieu de <code>if X not in Y</code>).</li>
            </ul>
            <p class="mb-3">
              Une vigilance particuli&egrave;re a &eacute;t&eacute; requise avant toute correction automatique&nbsp;: l&rsquo;analyse
              &eacute;tant statique, ruff peut g&eacute;n&eacute;rer des <em>faux positifs</em> sur des imports ou variables
              appel&eacute;s dynamiquement via <code>eval()</code>, <code>exec()</code> ou <code>getattr()</code>.
              Un tri manuel des fichiers utilisant ces fonctions a &eacute;t&eacute; n&eacute;cessaire.
            </p>

            <p class="mb-2 font-weight-medium">Audit deptry &mdash; analyse des d&eacute;pendances (DEP002)</p>
            <p class="mb-2">
              Pour
              <v-chip color="info" size="x-small" class="mx-1">d&eacute;ployer et utiliser les outils d&rsquo;analyse statique</v-chip>,
              deptry a &eacute;t&eacute; lanc&eacute; avec la commande&nbsp;:
              <code>uv run deptry ezged lib &gt; audit_dep.txt 2&gt;&amp;1</code>.
              L&rsquo;outil &eacute;value le projet selon 5 r&egrave;gles (DEP001 &agrave; DEP005). L&rsquo;analyse DEP002 a identifi&eacute;
              les paquets d&eacute;clar&eacute;s dans <code>pyproject.toml</code> mais sans aucune trace d&rsquo;import
              dans le code source&nbsp;:
            </p>
            <ul class="pl-5 mb-3">
              <li class="mb-1"><strong>Calcul / Data&nbsp;:</strong> <code>pandas</code></li>
              <li class="mb-1"><strong>S&eacute;curit&eacute; / Crypto&nbsp;:</strong> <code>pyjwt</code>, <code>pynacl</code></li>
              <li class="mb-1"><strong>Communication / SSH&nbsp;:</strong> <code>paramiko</code></li>
              <li class="mb-1"><strong>Utilitaires&nbsp;:</strong> <code>humanfriendly</code>, <code>simplejson</code>, <code>pytz</code>, <code>tzdata</code>, <code>certifi</code></li>
              <li><strong>D&eacute;pendances transitives (DEP003)</strong>&nbsp;: <code>automat</code>, <code>incremental</code>, <code>constantly</code>, <code>zope-interface</code>, <code>six</code>&hellip; sont des sous-d&eacute;pendances requises par d&rsquo;autres outils (comme <code>Twisted</code>) et n&rsquo;ont pas besoin d&rsquo;&ecirc;tre d&eacute;clar&eacute;es manuellement.</li>
            </ul>
            <p>
              Pour
              <v-chip color="info" size="x-small" class="mx-1">solliciter les d&eacute;veloppeurs sur l&rsquo;architecture</v-chip>,
              certaines d&eacute;pendances signal&eacute;es comme inutilis&eacute;es par deptry (notamment <code>paramiko</code>
              et <code>pyjwt</code>) ont &eacute;t&eacute; soumises &agrave; J&eacute;r&eacute;my Hindgray pour confirmation&nbsp;: ces paquets
              pouvaient &ecirc;tre charg&eacute;s dynamiquement ou utilis&eacute;s dans des parties du projet non couverts
              par le scan. Ces &eacute;changes ont &eacute;t&eacute; essentiels pour &eacute;viter de supprimer des d&eacute;pendances
              encore n&eacute;cessaires.
            </p>
          </div>
        </v-window-item>

        <!-- Compétence 2 — Architecture EzGED & LibCST -->
        <v-window-item value="comp2">
          <h3 class="text-subtitle-1 font-weight-bold mb-3">
            Reconstruction de l&rsquo;architecture EzGED et identification des fichiers critiques avec LibCST
          </h3>
          <div class="mb-3">
            <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
            <v-chip color="info" size="small" class="ma-1">Reconstituer l&rsquo;architecture d&rsquo;un projet inconnu</v-chip>
            <v-chip color="info" size="small" class="ma-1">Identifier les fichiers critiques incompatibles Python&nbsp;3.13</v-chip>
            <v-chip color="info" size="small" class="ma-1">Comprendre les d&eacute;pendances et leur usage dans le code</v-chip>
          </div>

          <v-row class="mb-4" align="start">
            <v-col cols="12" md="7">
              <v-sheet color="grey-darken-3" rounded="lg" class="pa-3 d-flex flex-column align-center justify-center" min-height="220">
                <v-icon size="48" color="grey-lighten-1">mdi-image-outline</v-icon>
                <p class="text-caption text-medium-emphasis mt-2 text-center">
                  Image &agrave; venir &mdash; Sch&eacute;ma ou description de l&rsquo;architecture EzGED reconstitu&eacute;e
                </p>
              </v-sheet>
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace n&deg;7</strong> &mdash; Sch&eacute;ma ou description de l&rsquo;architecture d&rsquo;EzGED
                reconstitu&eacute;e &agrave; partir de l&rsquo;analyse du code&nbsp;: r&eacute;pertoires principaux
                (<code>ezged</code>, <code>lib</code>, <code>satellite</code>), d&eacute;pendances critiques
                (PyWin32, Pillow, Numpy) et fichiers bloquants identifi&eacute;s par LibCST.
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="blue-lighten-2" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-3">
                  La Trace n&deg;7 est la cartographie de l&rsquo;architecture EzGED reconstitu&eacute;e apr&egrave;s l&rsquo;analyse
                  statique avec LibCST. Le script <code>audit_libcst_fonctions.py</code> a parcouru les
                  dossiers <code>lib</code> et <code>ezged</code> pour extraire, fichier par fichier,
                  les fonctions appel&eacute;es et leur num&eacute;ro de ligne&nbsp;:
                  <code>uv run python audit_libcst_fonctions.py &gt; resultats.txt</code>.
                </p>
                <p class="text-body-2 mb-0">
                  Cette analyse a class&eacute; les fichiers en trois cat&eacute;gories&nbsp;:
                  <strong style="color:#f44336;">bloquants</strong> (68 fichiers &mdash; syntaxe Python&nbsp;2),
                  <strong style="color:#fdd835;">&agrave; v&eacute;rifier</strong> (27 fichiers &mdash; d&eacute;pendances mont&eacute;es en version)
                  et <strong style="color:#f44336;">critiques</strong> (2 fichiers &mdash; module <code>imp</code>
                  supprim&eacute; en Python&nbsp;3.12).
                </p>
              </v-card>
            </v-col>
          </v-row>

          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="info" size="x-small" class="mx-1">reconstituer l&rsquo;architecture d&rsquo;un projet inconnu</v-chip>,
              j&rsquo;ai utilis&eacute; LibCST pour analyser la structure du code de mani&egrave;re fiable, en me basant
              sur l&rsquo;arbre syntaxique plut&ocirc;t que sur une simple recherche de texte. Le script d&rsquo;audit
              personnalis&eacute; <code>audit_libcst_fonctions.py</code> a permis de cartographier l&rsquo;ensemble
              des appels de fonctions dans les dossiers principaux et de comprendre les d&eacute;pendances
              inter-modules d&rsquo;EzGED sans avoir &agrave; lire chaque fichier manuellement.
            </p>

            <p class="mb-2 font-weight-medium">Fichiers bloquants &mdash; syntaxe Python&nbsp;2.7 (68 fichiers)</p>
            <p class="mb-3">
              Pour
              <v-chip color="info" size="x-small" class="mx-1">identifier les fichiers critiques incompatibles</v-chip>,
              68 fichiers ont &eacute;t&eacute; identifi&eacute;s comme bloquants&nbsp;: LibCST n&rsquo;a m&ecirc;me pas pu construire
              leur arbre syntaxique. Ces fichiers, concentr&eacute;s dans les dossiers <code>inst</code> et
              <code>spec</code>, utilisent encore la syntaxe Python&nbsp;2.7 (ex&nbsp;: <code>print "message"</code>
              sans parenth&egrave;ses). Ils ne pourront pas &ecirc;tre ex&eacute;cut&eacute;s en Python&nbsp;3.13 et devront &ecirc;tre
              r&eacute;&eacute;crits ou supprim&eacute;s s&rsquo;ils sont obsolètes.
            </p>

            <p class="mb-2 font-weight-medium">Fichiers &agrave; v&eacute;rifier &mdash; d&eacute;pendances mont&eacute;es en version (27 fichiers)</p>
            <p class="mb-3">
              27 fichiers s&rsquo;appuient sur des d&eacute;pendances dont la version a &eacute;t&eacute; mont&eacute;e (principalement
              <strong>PyWin32</strong>, <strong>Pillow</strong> et <strong>Numpy</strong>). Le code est
              syntaxiquement correct, mais le passage &agrave; des versions r&eacute;centes peut modifier leur
              comportement interne lors de l&rsquo;ex&eacute;cution sans provoquer d&rsquo;erreur imm&eacute;diate&nbsp;:
            </p>
            <ul class="pl-5 mb-3">
              <li class="mb-1"><strong>PyWin32&nbsp;:</strong> appels critiques pour la communication avec l&rsquo;Active Directory (<code>ldapAD.py</code>), la gestion des processus et les services Windows (<code>pythoncom.CoInitialize</code>, <code>win32api.GetModuleFileName</code>).</li>
              <li class="mb-1"><strong>Pillow&nbsp;:</strong> manipulation d&rsquo;images utilis&eacute;e dans la gestion des m&eacute;tadonn&eacute;es (<code>PIL.Image.open</code>, <code>PIL.Image.new</code>).</li>
              <li><strong>Numpy&nbsp;:</strong> lecture de codes-barres dans <code>ezbarcodereader.py</code> via tableaux et fonctions trigonom&eacute;triques (<code>numpy.array</code>, <code>numpy.cos</code>, <code>numpy.sin</code>).</li>
            </ul>

            <p class="mb-2 font-weight-medium">Fichiers critiques &mdash; module <code>imp</code> supprim&eacute; (2 fichiers)</p>
            <p>
              Pour
              <v-chip color="info" size="x-small" class="mx-1">comprendre les d&eacute;pendances et leur usage</v-chip>,
              deux fichiers (<code>saxexts.py</code> et <code>coldtrt.py</code>) ont &eacute;t&eacute; identifi&eacute;s comme
              critiques&nbsp;: ils utilisent <code>imp.find_module</code>, un module natif d&eacute;finitivement
              supprim&eacute; depuis Python&nbsp;3.12. Son utilisation provoquera un crash imm&eacute;diat et
              in&eacute;vitable (<code>ModuleNotFoundError</code>). Le remplacement par la biblioth&egrave;que
              standard <code>importlib</code> est obligatoire et prioritaire. Ces cas ont fait l&rsquo;objet
              d&rsquo;&eacute;changes avec J&eacute;r&eacute;my Hindgray pour confirmer qu&rsquo;aucune autre partie du code ne
              d&eacute;pendait du comportement sp&eacute;cifique d&rsquo;<code>imp</code>.
            </p>
          </div>
        </v-window-item>

        <!-- Bilan -->
        <v-window-item value="bilan">
          <h3 class="text-subtitle-1 font-weight-bold mb-4">
            Bilan &amp; Analyse &mdash; Savoir s&rsquo;approprier rapidement un projet existant complexe
          </h3>

          <h4 class="text-body-1 font-weight-bold mb-3">R&eacute;sum&eacute; des savoir-faire &eacute;l&eacute;mentaires associ&eacute;s</h4>
          <v-row class="mb-6">
            <v-col cols="12" md="4" v-for="sf in integrationSavoirFaire" :key="sf.title">
              <v-card variant="outlined" class="pa-3 h-100" rounded="lg">
                <v-chip color="info" size="small" class="mb-2">{{ sf.title }}</v-chip>
                <p class="text-body-2 mb-1"><strong>Contexte d&rsquo;utilisation :</strong> {{ sf.contexteUtilisation }}</p>
                <p class="text-body-2 mb-1"><strong>Contexte d&rsquo;apprentissage :</strong> {{ sf.contexteApprentissage }}</p>
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
                  Niveau <strong>faible</strong> &mdash; aucune exp&eacute;rience de prise en main d&rsquo;un projet
                  professionnel existant et volumineux. Les outils ruff, deptry, uv et LibCST
                  &eacute;taient totalement inconnus. La notion de dette technique &eacute;tait connue
                  th&eacute;oriquement mais jamais rencontr&eacute;e en pratique sur un vrai projet.
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="outlined" class="pa-4" rounded="lg">
                <h4 class="text-subtitle-2 font-weight-bold mb-2">Apr&egrave;s le stage</h4>
                <p class="text-body-2">
                  Niveau <strong>bon</strong> &mdash; capable de conduire un audit statique complet
                  d&rsquo;un projet Python, de classifier les anomalies par niveau de criticité,
                  de reconstituer une architecture &agrave; partir des d&eacute;pendances et d&rsquo;identifier les
                  blocages prioritaires avant une migration de version. La collaboration avec
                  J&eacute;r&eacute;my Hindgray a &eacute;galement d&eacute;velopp&eacute; la capacit&eacute; &agrave; solliciter les bons
                  interlocuteurs au bon moment.
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>

      </v-window>
    </v-card>

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

const tab = ref('comp1')

const integrationSavoirFaire = [
  {
    title: "Analyser l'architecture d'un projet inconnu",
    contexteUtilisation: "Prise en main d'EzGED dès la semaine 1 : compréhension des répertoires (ezged, lib, satellite), des dépendances déclarées dans pyproject.toml et des relations inter-modules.",
    contexteApprentissage: "Appris entièrement en stage — aucun projet de cette taille n'avait été abordé en cours de BUT. Utilisation de ruff, deptry et LibCST pour cartographier le code.",
    difficulte: "Élevée — EzGED représente plusieurs milliers de fichiers Python avec un historique mêlant Python 2.7 et Python 3. La compréhension globale a pris plusieurs jours.",
  },
  {
    title: "Identifier les fichiers incompatibles Python 3.13",
    contexteUtilisation: "Classification des 68 fichiers bloquants (syntaxe Python 2), 27 fichiers à vérifier (dépendances mises à jour) et 2 fichiers critiques (module imp supprimé).",
    contexteApprentissage: "Connaissance de Python 3 acquise en cours de BUT, classification des incompatibilités apprise en pratique via les outils d'analyse statique.",
    difficulte: "Moyenne — distinguer les faux positifs des vraies incompatibilités (notamment sur les imports dynamiques via eval/exec) a demandé un tri manuel rigoureux.",
  },
  {
    title: "Solliciter les développeurs sur les aspects techniques",
    contexteUtilisation: "Échanges avec Jérémy Hindgray pour confirmer les dépendances signalées comme inutilisées par deptry et valider les fichiers critiques utilisant imp.",
    contexteApprentissage: "Pratique développée en stage — identifier le bon interlocuteur et formuler une question technique claire sont des compétences professionnelles non travaillées en cours.",
    difficulte: "Faible — l'équipe EzDEV était disponible et les échanges techniques bien accueillis. La difficulté principale était de préparer des questions précises pour ne pas perdre le temps des développeurs.",
  },
]
</script>
