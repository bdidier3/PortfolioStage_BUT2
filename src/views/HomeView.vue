<template>
  <div>

    <!-- Presentation -->
    <v-card class="mb-5 pa-5" rounded="lg">
      <div class="text-overline text-blue-lighten-2 mb-2">Portfolio &middot; BUT2 &middot; 2026</div>
      <div class="presentation-content mb-1">
        <img
          class="profile-photo"
          src="/images/IMG_profil.png"
          alt="Photo de profil"
        />
        <h1 class="text-h4 font-weight-bold mb-2">Baptiste DIDIER</h1>
        <p class="text-body-2 mb-2 intro-text">
          Ce site a pour objectif de pr&eacute;senter le contexte, les travaux r&eacute;alis&eacute;s et les comp&eacute;tences
          d&eacute;velopp&eacute;es lors de mon stage chez EzDEV, qui s'est d&eacute;roul&eacute; du 7 avril au 11 juin 2026,
          &agrave; travers une analyse technique, un suivi de projet et un retour sur mon int&eacute;gration en entreprise.
        </p>
        <p class="text-body-2 mb-0 intro-text">
          Pour acc&eacute;der aux 3 parties principales, un panneau de menu&nbsp;<v-icon size="small" style="vertical-align:middle;">mdi-menu</v-icon>&nbsp;est affichable en cliquant sur l&rsquo;ic&ocirc;ne en haut &agrave; gauche.
        </p>
      </div>
    </v-card>

    <!-- Contexte entreprise -->
    <v-card class="mb-5 pa-5" rounded="lg">
      <div class="text-overline text-blue-lighten-2 mb-1">Entreprise</div>
      <h2 class="text-h6 font-weight-bold mb-4">Description du contexte entreprise du stage</h2>
      <img
        class="company-logo"
        src="/images/logo_EzDEV.png"
        alt="Logo EzDEV"
      />
      <div class="company-text">
        <p class="text-body-2 mb-3">
          <strong>EzDEV</strong> est une soci&eacute;t&eacute; de d&eacute;veloppement logiciel situ&eacute;e &agrave; Montreux-Ch&acirc;teau, en
          Franche-Comt&eacute;. Son activit&eacute; principale est l'&eacute;dition de logiciels, notamment dans le domaine de
          la gestion &eacute;lectronique de documents.
        </p>
        <p class="text-body-2 mb-3">
          Elle d&eacute;veloppe et commercialise son propre logiciel, <strong>EzGED</strong>, une solution de
          gestion et d'archivage de documents num&eacute;riques d&eacute;velopp&eacute;e principalement en Python.
        </p>
        <p class="text-body-2 mb-3">
          Cr&eacute;&eacute;e au d&eacute;but des ann&eacute;es 2000, l'entreprise se compose aujourd'hui de 5 personnes. Depuis
          plusieurs ann&eacute;es, elle se concentre principalement sur l'&eacute;volution de son logiciel EzGED. Elle
          assure &eacute;galement le suivi de ses solutions via une assistance en ligne et s'appuie sur un r&eacute;seau
          de plus de 30 distributeurs pour l'installation, la formation et le support aupr&egrave;s des clients.
        </p>
        <p class="text-body-2 mb-3">
          Pendant mon stage, je travaille principalement avec <strong>Fabrice Caritey</strong>, g&eacute;rant de
          l'entreprise et &eacute;galement mon ma&icirc;tre de stage, ainsi qu'avec <strong>Florian Masy</strong>,
          responsable solution, <strong>Antoine Heidet</strong> et <strong>J&eacute;r&eacute;my Hindgray</strong>,
          d&eacute;veloppeurs, et <strong>F&eacute;lix Riat</strong>, alternant.
        </p>
        <p class="text-body-2 mb-0">
          Mon r&ocirc;le est de participer &agrave; l'analyse et &agrave; l'am&eacute;lioration du projet, en particulier sur la
          gestion des d&eacute;pendances et la modernisation du code. Pour travailler, nous utilisons des postes
          sous Windows ainsi que des serveurs Linux. Pour la collaboration et la gestion du code, nous
          utilisons des outils comme GitLab et SVN.
        </p>
      </div>
    </v-card>

    <!-- Organigramme -->
    <v-card class="mb-5 pa-5" rounded="lg">
      <div class="text-overline text-blue-lighten-2 mb-1">&Eacute;quipe</div>
      <h2 class="text-h6 font-weight-bold mb-4">Organigramme EzDEV</h2>
      <div class="d-flex flex-column align-center">
        <img
          src="/images/Organigrame_EZDEV.png"
          alt="Organigramme hi&eacute;rarchique EzDEV"
          style="max-width:600px; width:100%; border-radius:8px; cursor:pointer; display:block; margin:0 auto;"
          @click="orgModal = true"
        />
        <p class="text-caption text-medium-emphasis mt-2 text-center">
          Cliquez pour agrandir &mdash; Organigramme de l'&eacute;quipe EzDEV et r&ocirc;les impliqu&eacute;s dans le projet EzGED.
        </p>
      </div>
    </v-card>

    <!-- Dialog organigramme agrandi -->
    <v-dialog v-model="orgModal" max-width="900">
      <v-card>
        <v-card-text class="pa-2">
          <img
            src="/images/Organigrame_EZDEV.png"
            alt="Organigramme EzDEV"
            style="width:100%; border-radius:8px; display:block;"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="orgModal = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Contexte du stage -->
    <v-card class="mb-5 pa-5" rounded="lg">
      <div class="text-overline text-blue-lighten-2 mb-1">Contexte du stage</div>
      <h2 class="text-h6 font-weight-bold mb-4">Description du contexte sujet stage</h2>
      <p class="text-body-2 mb-3">
        Le logiciel <strong>EzGED</strong> est une solution de gestion &eacute;lectronique de documents qui a
        &eacute;volu&eacute; au fil du temps avec de nombreuses d&eacute;pendances Python. Cette &eacute;volution a rendu
        le projet plus complexe &agrave; maintenir, notamment avec l'apparition d'incompatibilit&eacute;s li&eacute;es aux
        nouvelles versions du langage.
      </p>
      <p class="text-body-2">
        Dans ce contexte, mon stage porte sur la <strong>modernisation des outils de d&eacute;veloppement</strong>
        afin de pr&eacute;parer la migration vers <strong>Python 3.13</strong>. Il consiste &agrave; analyser le code
        et les d&eacute;pendances, d&eacute;velopper des scripts pour d&eacute;tecter les incompatibilit&eacute;s, produire des
        rapports techniques et mettre en place des tests automatis&eacute;s (unittest) pour valider la
        compatibilit&eacute; du projet. L'objectif est d'am&eacute;liorer la fiabilit&eacute; du logiciel et de faciliter
        son &eacute;volution.
      </p>
    </v-card>

    <!-- Rapports hebdomadaires -->
    <v-card class="mb-5 pa-5" rounded="lg">
      <div class="text-overline text-blue-lighten-2 mb-1">Parcours Professionnel</div>
      <h2 class="text-h6 font-weight-bold mb-4">Rapports hebdomadaires</h2>
      <v-row>
        <v-col v-for="report in reports" :key="report.id" cols="12" sm="6" md="4">
          <v-card
            variant="outlined"
            class="pa-4"
            rounded="lg"
            style="cursor:pointer;"
            @click="openReport(report.id)"
          >
            <div class="text-subtitle-2 font-weight-bold mb-1">{{ report.title }}</div>
            <div class="text-caption text-medium-emphasis mb-2">{{ report.dates }}</div>
            <div class="text-caption text-blue-lighten-2">Lire le rapport complet &rarr;</div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <!-- Dialog rapport -->
    <v-dialog v-model="reportModal" max-width="800" scrollable>
      <v-card v-if="activeReport">
        <v-card-title class="pa-4">{{ activeReport.title }}</v-card-title>
        <v-divider />
        <v-card-text class="pa-4" style="max-height:70vh; overflow-y:auto;">
          <div v-html="activeReport.content" />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn @click="reportModal = false">Fermer</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Synthese des savoir-faire -->
    <v-card class="mb-5 pa-5" rounded="lg">
      <div class="text-overline text-blue-lighten-2 mb-1">Arsenal Technique</div>
      <h2 class="text-h6 font-weight-bold mb-2">Description des savoir-faire g&eacute;n&eacute;raux mis en jeu</h2>
      <p class="text-body-2 mb-4">
        Synth&egrave;se des savoir-faire (cf. cours 1) mobilis&eacute;s par le sujet.
        Les &eacute;l&eacute;ments en <strong>gras</strong> sont d&eacute;taill&eacute;s dans les trois autres pages.
      </p>
      <v-row>
        <v-col cols="12" md="4">
          <v-card variant="outlined" class="pa-4 h-100" rounded="lg">
            <v-chip color="error" size="small" class="mb-3">Technique</v-chip>
            <div class="text-subtitle-2 font-weight-bold mb-2">Savoir-faire technique</div>
            <ul class="text-body-2 pl-4">
              <li class="mb-1"><strong>Analyser un code existant</strong> et identifier les d&eacute;pendances critiques.</li>
              <li class="mb-1"><strong>Automatiser des audits</strong> avec LibCST, ruff et deptry.</li>
              <li><strong>Mettre en place des tests</strong> et suivre la couverture.</li>
            </ul>
            <div class="mt-3">
              <router-link to="/technique" class="text-blue-lighten-2 text-body-2">
                Voir les traces techniques &rarr;
              </router-link>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card variant="outlined" class="pa-4 h-100" rounded="lg">
            <v-chip color="success" size="small" class="mb-3">Suivi de projet</v-chip>
            <div class="text-subtitle-2 font-weight-bold mb-2">Suivi de projet</div>
            <ul class="text-body-2 pl-4">
              <li class="mb-1"><strong>Organiser le travail</strong> par semaines et jalons.</li>
              <li class="mb-1"><strong>Documenter</strong> les analyses sur GitLab.</li>
              <li><strong>Communiquer l'avancement</strong> et ajuster les objectifs.</li>
            </ul>
            <div class="mt-3">
              <router-link to="/suivi" class="text-blue-lighten-2 text-body-2">
                Voir le suivi de projet &rarr;
              </router-link>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card variant="outlined" class="pa-4 h-100" rounded="lg">
            <v-chip color="info" size="small" class="mb-3">Int&eacute;gration en entreprise</v-chip>
            <div class="text-subtitle-2 font-weight-bold mb-2">Int&eacute;gration en entreprise</div>
            <ul class="text-body-2 pl-4">
              <li class="mb-1"><strong>Collaborer</strong> avec le chef de projet et le responsable solution.</li>
              <li class="mb-1"><strong>S'approprier</strong> un environnement technique existant.</li>
              <li><strong>Participer</strong> aux revues et aux points d'&eacute;quipe.</li>
            </ul>
            <div class="mt-3">
              <router-link to="/integration" class="text-blue-lighten-2 text-body-2">
                Voir l'int&eacute;gration &rarr;
              </router-link>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <!-- Footer -->
    <v-card class="pa-5 text-center" rounded="lg">
      <p class="text-body-2 text-medium-emphasis">
        <a href="mailto:baptiste.didier@proton.me" class="text-blue-lighten-2">baptiste.didier@proton.me</a>
      </p>
      <p class="text-caption text-medium-emphasis mt-2">&copy; 2026 Baptiste Didier. Tous droits r&eacute;serv&eacute;s.</p>
    </v-card>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const orgModal = ref(false)
const reportModal = ref(false)
const activeReportId = ref(null)

const reports = [
  { id: 'w1', title: 'Semaine n°1', dates: '06/04/2026 – 12/04/2026' },
  { id: 'w2', title: 'Semaine n°2', dates: '13/04/2026 – 19/04/2026' },
  { id: 'w3', title: 'Semaine n°3', dates: '20/04/2026 – 26/04/2026' },
  { id: 'w4', title: 'Semaine n°4', dates: '27/04/2026 – 03/05/2026' },
  { id: 'w5', title: 'Semaine n°5', dates: '04/05/2026 – 10/05/2026' },
]

const reportContents = {
  w1: {
    title: 'Semaine n°1 : du 06/04/2026 au 12/04/2026',
    content: `
      <h3 style="margin-bottom:12px;">Contexte de l'organisme</h3>
      <p style="margin-bottom:10px;">L'entreprise EzDEV, située à Montreux-Château en Franche-Comté, est une société spécialisée dans le développement de solutions logicielles. Elle est composée de 5 salariés. Elle développe notamment son propre logiciel, EzGED, une solution de gestion électronique de documents (GED) développée principalement en Python.</p>
      <p style="margin-bottom:10px;">Durant mon stage, je travaille avec Fabrice Caritey, mon maître de stage, qui occupe le poste de chef de projet. Je collabore également avec Florian Masy, responsable solution, et Jérémy Hindgray, développeur.</p>
      <p style="margin-bottom:10px;">L'objectif de ce stage est de moderniser les outils de développement Python 3 utilisés dans le projet EzGED, en mettant en place des scripts d'analyse et des tests permettant de vérifier la compatibilité des modules avec les nouvelles versions de Python, notamment dans le cadre de la migration vers Python 3.13.</p>
      <h3 style="margin:16px 0 12px;">Tâches</h3>
      <p style="margin-bottom:10px;">Durant cette première semaine, j'ai installé mon poste de travail et configuré les outils nécessaires au projet. Mes accès (GitLab, mail, etc.) m'ont également été créés.</p>
      <p style="margin-bottom:10px;">J'ai découvert l'entreprise et commencé à prendre en main le projet EzGED. J'ai cloné le dépôt et analysé son fonctionnement afin de comprendre l'architecture globale dans le cadre de la migration vers Python 3.13.</p>
      <p style="margin-bottom:10px;">J'ai configuré l'outil uv pour installer les paquets dans un environnement virtuel isolé. J'ai réalisé un premier audit des dépendances avec uv, ruff et deptry afin d'identifier celles pouvant poser problème lors de la migration.</p>
      <p style="margin-bottom:10px;">En parallèle, j'ai commencé le développement d'un script Python basé sur LibCST afin de détecter automatiquement les utilisations des dépendances dans le code.</p>
      <h3 style="margin:16px 0 12px;">Difficultés rencontrées</h3>
      <p style="margin-bottom:10px;">La principale difficulté est la prise en main du projet existant, assez volumineux avec une structure complexe. L'apprentissage de LibCST a également demandé un effort important.</p>
      <h3 style="margin:16px 0 12px;">Apprentissages</h3>
      <p>Cette semaine m'a permis de découvrir uv, ruff et deptry, et d'approfondir ma compréhension de la gestion des environnements Python et de l'analyse statique de code.</p>
    `,
  },
  w2: {
    title: 'Semaine n°2 : du 13/04/2026 au 19/04/2026',
    content: `
      <h3 style="margin-bottom:12px;">Tâches réalisées</h3>
      <p style="margin-bottom:10px;">J'ai continué le développement du script basé sur LibCST en améliorant sa précision et en ajoutant une gestion des arguments avec argparse pour le rendre plus flexible.</p>
      <p style="margin-bottom:10px;">J'ai amélioré la configuration de deptry en ajoutant les modules internes du projet pour éviter les faux positifs, puis publié les scripts et rapports sur GitLab.</p>
      <p style="margin-bottom:10px;">J'ai mis en place une veille technologique sur les dépendances Python et testé Renovate via une configuration CI/CD pour évaluer son intégration dans le projet.</p>
      <h3 style="margin:16px 0 12px;">Difficultés rencontrées</h3>
      <p style="margin-bottom:10px;">Problèmes liés à la gestion du dépôt Git (reclonage nécessaire), erreurs dues aux incompatibilités Python 2/3, et prise en main de Renovate et multiprocessing.</p>
      <h3 style="margin:16px 0 12px;">Apprentissages</h3>
      <p style="margin-bottom:10px;">Renforcement des compétences en analyse de code Python (LibCST, argparse), en gestion des dépendances (deptry) et découverte de Renovate.</p>
      <h3 style="margin:16px 0 12px;">Échanges et interactions</h3>
      <p>Revue avec Florian Masy pour améliorer le script. Échanges avec Fabrice Caritey pour mieux comprendre les enjeux du logiciel EzGED.</p>
    `,
  },
  w3: {
    title: 'Semaine n°3 : du 20/04/2026 au 26/04/2026',
    content: `
      <h3 style="margin-bottom:12px;">Tâches réalisées</h3>
      <p style="margin-bottom:10px;">Intégration de tomllib pour extraire automatiquement les dépendances du pyproject.toml, et de importlib.metadata pour faire correspondre noms de dépendances et imports réels.</p>
      <p style="margin-bottom:10px;">Amélioration du script LibCST avec détection enrichie des appels de fonctions et optimisation via multiprocessing. Mise en place d'un rendu HTML avec Jinja2.</p>
      <p style="margin-bottom:10px;">Début de l'intégration de l'analyse de couverture de tests avec pytest et coverage.py, génération d'un fichier coverage.xml.</p>
      <h3 style="margin:16px 0 12px;">Difficultés rencontrées</h3>
      <p style="margin-bottom:10px;">Intégration de plusieurs outils dans un même script (LibCST, tomllib, coverage.py) et gestion des correspondances entre dépendances déclarées et imports réels.</p>
      <h3 style="margin:16px 0 12px;">Apprentissages</h3>
      <p style="margin-bottom:10px;">Approfondissement de l'analyse statique avec LibCST, de pytest et coverage.py, et génération de rapports dynamiques avec Jinja2.</p>
      <h3 style="margin:16px 0 12px;">Échanges et interactions</h3>
      <p>Revue avec Florian Masy et Fabrice Caritey : constat d'un manque de couverture de tests sur certaines parties du projet, lié aux évolutions successives du logiciel.</p>
    `,
  },
  w4: {
    title: 'Semaine n°4 : du 27/04/2026 au 03/05/2026',
    content: `
      <p style="margin-bottom:10px;">Poursuite du développement du script d'analyse pour améliorer l'exploitation de la couverture de tests.</p>
      <h3 style="margin:16px 0 12px;">Tâches réalisées</h3>
      <ul style="padding-left:20px; margin-bottom:10px;">
        <li style="margin-bottom:8px;">Comparaison de différents modes d'exécution des tests avec pytest et coverage.py.</li>
        <li style="margin-bottom:8px;">Ajout d'informations de traçabilité (date, branche GitLab, commit, auteur) dans le script.</li>
        <li style="margin-bottom:8px;">Rédaction d'une documentation décrivant le processus de montée de version.</li>
        <li style="margin-bottom:8px;">Réorganisation et intégration des fichiers de tests dans le dépôt.</li>
        <li>Exploitation du fichier .coverage via sqlite3 puis via l'API de coverage.py.</li>
      </ul>
      <h3 style="margin:16px 0 12px;">Difficultés rencontrées</h3>
      <p style="margin-bottom:10px;">Relier les lignes de code couvertes aux tests responsables s'est révélé complexe sans traitement avancé du fichier .coverage.</p>
      <h3 style="margin:16px 0 12px;">Apprentissages</h3>
      <p style="margin-bottom:10px;">Exploitation des contextes de coverage.py, découverte des différentes méthodes d'accès aux données de couverture (XML, SQLite, API).</p>
      <h3 style="margin:16px 0 12px;">Échanges et interactions</h3>
      <p>Points avec Florian Masy pour structurer la documentation du processus de montée de version et affiner l'analyse de couverture.</p>
    `,
  },
  w5: {
    title: 'Semaine n°5 : du 04/05/2026 au 10/05/2026',
    content: `
      <p style="margin-bottom:10px;">Mise en place de l'automatisation du processus de montée de version des dépendances Python via CI/CD GitLab.</p>
      <h3 style="margin:16px 0 12px;">Tâches réalisées</h3>
      <ul style="padding-left:20px; margin-bottom:10px;">
        <li style="margin-bottom:8px;">Configuration d'une CI/CD GitLab et installation d'un runner Windows avec Florian Masy.</li>
        <li style="margin-bottom:8px;">Le script associe maintenant des fonctions de tests aux lignes couvertes et exporte ces informations en JSON.</li>
        <li style="margin-bottom:8px;">Documentation sur unittest pour générer dynamiquement des suites de tests à partir du JSON produit.</li>
        <li>Premiers essais de montée de version de mail-parser pour identifier les incompatibilités avec EzGED.</li>
      </ul>
      <h3 style="margin:16px 0 12px;">Difficultés rencontrées</h3>
      <p style="margin-bottom:10px;">Adaptation de commandes Bash vers PowerShell pour le runner GitLab, et différences d'exécution entre environnement local et runner distant.</p>
      <h3 style="margin:16px 0 12px;">Apprentissages</h3>
      <p style="margin-bottom:10px;">Configuration d'un runner GitLab, exploitation des mécanismes de cache et d'artefacts, et génération dynamique de suites de tests avec unittest.</p>
      <h3 style="margin:16px 0 12px;">Échanges et interactions</h3>
      <p>Revues avec Florian Masy pour améliorer la documentation de montée de version. Échanges avec Fabrice Caritey sur les tests devant volontairement échouer lors des montées de version.</p>
    `,
  },
}

const activeReport = computed(() =>
  activeReportId.value ? reportContents[activeReportId.value] : null
)

function openReport(id) {
  activeReportId.value = id
  reportModal.value = true
}
</script>

<style scoped>
.company-logo {
  float: right;
  width: 210px;
  max-width: 44vw;
  margin: 0.25rem 0 1.5rem 2rem;
  display: block;
}

.presentation-content::after {
  content: '';
  display: block;
  clear: both;
}

.profile-photo {
  float: right;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.18);
  margin: 0 0 1rem 1.25rem;
}

.company-text {
  text-align: justify;
  text-justify: inter-word;
}

.intro-text {
  max-width: none;
  margin-top: 8px;
}

@media (max-width: 600px) {
  .company-logo {
    float: none;
    width: 170px;
    max-width: 100%;
    margin: 0 auto 1rem;
  }

  .profile-photo {
    float: none;
    width: 180px;
    height: 180px;
    margin: 0 auto 1rem;
  }

  .intro-text {
    max-width: none;
  }
}
</style>
