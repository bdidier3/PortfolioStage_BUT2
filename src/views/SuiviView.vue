<template>
  <div>

    <!-- En-tête -->
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
        <v-tab value="comp1">Comp&eacute;tence 3</v-tab>
        <v-tab value="comp2">Comp&eacute;tence 4</v-tab>
        <v-tab value="bilan">Bilan &amp; &Eacute;valuation</v-tab>
      </v-tabs>
      <v-divider class="mb-4" />

      <v-window v-model="tab">

        <!-- Compétence 1 — Veille technologique et documentation -->
        <v-window-item value="comp1">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">
            Faire une veille technologique et documenter son travail
          </h3>
          <div class="mb-4">
            <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
            <v-chip color="success" size="small" class="ma-1">Identifier et comparer des outils de mise &agrave; jour automatique de d&eacute;pendances</v-chip>
            <v-chip color="success" size="small" class="ma-1">Configurer Renovate sur un projet GitLab</v-chip>
            <v-chip color="success" size="small" class="ma-1">R&eacute;diger une documentation technique exploitable par l&rsquo;&eacute;quipe</v-chip>
          </div>

          <!-- Trace 3 -->
          <p class="text-overline text-medium-emphasis mb-2">Trace 3</p>

          <v-row class="mb-4" align="start">
            <v-col cols="12" md="7">
              <v-sheet color="grey-darken-3" rounded="lg" class="pa-3 d-flex flex-column align-center justify-center" min-height="220">
                <v-icon size="48" color="grey-lighten-1">mdi-image-outline</v-icon>
                <p class="text-caption text-medium-emphasis mt-2 text-center">
                  Image &agrave; venir &mdash; Extrait de la documentation sur la proc&eacute;dure de mont&eacute;e de version
                </p>
              </v-sheet>
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace 3</strong> &mdash; Extrait visuel de la documentation r&eacute;dig&eacute;e expliquant
                comment r&eacute;aliser une mont&eacute;e de version de d&eacute;pendance dans le projet EzGED. Ce document,
                publi&eacute; sur le Wiki GitLab, d&eacute;crit les &eacute;tapes &agrave; suivre, les outils utilis&eacute;s et les
                points de vigilance identifi&eacute;s lors de la veille.
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="green-lighten-2" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-3">
                  La Trace 3 ci-contre est un extrait de la documentation r&eacute;dig&eacute;e au cours de la
                  veille technologique sur les outils de mise &agrave; jour automatique de d&eacute;pendances.
                  J&rsquo;ai &eacute;t&eacute; charg&eacute; d&rsquo;identifier des outils pouvant automatiser ce processus
                  suite &agrave; la migration Python&nbsp;3.13 d&rsquo;EzGED.
                </p>
                <p class="text-body-2 mb-0">
                  Cette documentation explique les &eacute;tapes de la mont&eacute;e de version&nbsp;: mise &agrave;
                  jour du <code>pyproject.toml</code>, ex&eacute;cution des tests de non-r&eacute;gression,
                  v&eacute;rification des incompatibilit&eacute;s d&eacute;tect&eacute;es et prochain script &agrave; adapter.
                  Elle a servi de base de d&eacute;cision pour l&rsquo;&eacute;quipe.
                </p>
              </v-card>
            </v-col>
          </v-row>

          <div class="text-body-2 mb-6">
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">identifier et comparer des outils de mise &agrave; jour automatique</v-chip>,
              j&rsquo;ai effectu&eacute; une veille sur les solutions disponibles pour g&eacute;rer automatiquement les
              mises &agrave; jour de d&eacute;pendances dans un projet Python h&eacute;berg&eacute; sur GitLab. La principale
              contrainte &eacute;tait la compatibilit&eacute; avec l&rsquo;instance GitLab interne d&rsquo;EzDEV, ce qui a
              d&rsquo;embl&eacute;e exclu Dependabot (natif GitHub) de la solution retenue au profit de Renovate.
            </p>
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">configurer Renovate sur un projet GitLab</v-chip>,
              j&rsquo;ai mis en place la configuration via un fichier <code>renovate.json</code> &agrave; la racine du
              projet (fen&ecirc;tres d&rsquo;application, groupement des paquets, labels des MR) et une entr&eacute;e dans
              le <code>.gitlab-ci.yml</code> pour d&eacute;clencher le bot r&eacute;guli&egrave;rement. La difficult&eacute; principale
              a &eacute;t&eacute; la gestion des droits du runner GitLab pour la cr&eacute;ation automatique de MR.
            </p>
            <p>
              Pour
              <v-chip color="success" size="x-small" class="mx-1">r&eacute;diger une documentation technique exploitable</v-chip>,
              j&rsquo;ai structur&eacute; le document en plusieurs parties&nbsp;: pr&eacute;sentation des outils &eacute;valu&eacute;s,
              proc&eacute;dure d&rsquo;installation de Renovate, &eacute;tapes de la mont&eacute;e de version et points de
              vigilance. Ce document a &eacute;t&eacute; valid&eacute; par Florian Masy et vers&eacute; dans le Wiki GitLab.
            </p>
          </div>

          <v-divider class="mb-4" />

          <!-- Trace 4 -->
          <p class="text-overline text-medium-emphasis mb-2">Trace 4</p>

          <v-row class="mb-4" align="start">
            <v-col cols="12" md="7">
              <v-sheet color="grey-darken-3" rounded="lg" class="pa-3 d-flex flex-column align-center justify-center" min-height="220">
                <v-icon size="48" color="grey-lighten-1">mdi-image-outline</v-icon>
                <p class="text-caption text-medium-emphasis mt-2 text-center">
                  Image &agrave; venir &mdash; Merge Request automatique cr&eacute;&eacute;e par Renovate sur GitLab
                </p>
              </v-sheet>
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace 4</strong> &mdash; Capture montrant les tests conduits sur les outils
                Renovate et Dependabot&nbsp;: Merge Request automatique cr&eacute;&eacute;e par Renovate sur le
                projet de test GitLab, avec le titre standardis&eacute;, le diff des d&eacute;pendances et le
                label de regroupement configur&eacute; dans <code>renovate.json</code>.
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="green-lighten-2" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-3">
                  La Trace 4 ci-contre documente les tests conduits sur les deux outils &eacute;valu&eacute;s.
                  Renovate a &eacute;t&eacute; test&eacute; sur un projet GitLab de test avec un
                  <code>pyproject.toml</code> contenant des d&eacute;pendances volontairement p&eacute;rim&eacute;es.
                  Dependabot a &eacute;t&eacute; test&eacute; sur un d&eacute;p&ocirc;t GitHub de test pour comparaison.
                </p>
                <p class="text-body-2 mb-0">
                  Les tests en conditions r&eacute;elles ont valid&eacute; le comportement de Renovate&nbsp;:
                  d&eacute;tection des nouvelles versions et cr&eacute;ation automatique des MR. L&rsquo;incompatibilit&eacute;
                  de Dependabot avec les instances GitLab auto-h&eacute;berg&eacute;es a confirm&eacute; le choix
                  de Renovate pour EzGED.
                </p>
              </v-card>
            </v-col>
          </v-row>

          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">tester un outil sur un projet de r&eacute;f&eacute;rence isol&eacute;</v-chip>,
              j&rsquo;ai cr&eacute;&eacute; un projet GitLab de test &agrave; partir d&rsquo;un <code>pyproject.toml</code> avec des
              d&eacute;pendances p&eacute;rim&eacute;es et configur&eacute; Renovate avec un <code>renovate.json</code> minimal.
              Ce test isol&eacute; a permis d&rsquo;identifier les blocages (droits du runner, token d&rsquo;acc&egrave;s)
              sans risquer d&rsquo;impacter le projet principal.
            </p>
            <p>
              Pour
              <v-chip color="success" size="x-small" class="mx-1">justifier un choix technologique &agrave; partir de crit&egrave;res objectifs</v-chip>,
              j&rsquo;ai compar&eacute; les deux outils selon quatre crit&egrave;res&nbsp;: compatibilit&eacute; GitLab, facilit&eacute; de
              configuration, granularit&eacute; du param&eacute;trage et maintenance communaut&eacute;. Cette analyse,
              synth&eacute;tis&eacute;e dans un tableau comparatif, a &eacute;t&eacute; pr&eacute;sent&eacute;e lors d&rsquo;une revue avec
              Florian Masy et a formalis&eacute; le choix de Renovate.
            </p>
          </div>
        </v-window-item>

        <!-- Compétence 2 — Git et GitLab en équipe -->
        <v-window-item value="comp2">
          <h3 class="text-subtitle-1 font-weight-bold mb-2">
            Utiliser Git et GitLab pour g&eacute;rer le code en &eacute;quipe
          </h3>
          <div class="mb-4">
            <span class="text-body-2 font-weight-medium">Savoir-faire &eacute;l&eacute;mentaires&nbsp;: </span>
            <v-chip color="success" size="small" class="ma-1">G&eacute;rer son travail avec des branches Git nomm&eacute;es</v-chip>
            <v-chip color="success" size="small" class="ma-1">R&eacute;diger des messages de commit clairs et atomiques</v-chip>
            <v-chip color="success" size="small" class="ma-1">Soumettre son travail via des Merge Requests GitLab</v-chip>
          </div>

          <!-- Trace 5 -->
          <p class="text-overline text-medium-emphasis mb-2">Trace 5</p>

          <v-row class="mb-4" align="start">
            <v-col cols="12" md="7">
              <v-sheet color="grey-darken-3" rounded="lg" class="pa-3 d-flex flex-column align-center justify-center" min-height="220">
                <v-icon size="48" color="grey-lighten-1">mdi-image-outline</v-icon>
                <p class="text-caption text-medium-emphasis mt-2 text-center">
                  Image &agrave; venir &mdash; Historique de commits GitLab (date, branche, auteur, message)
                </p>
              </v-sheet>
              <p class="text-caption text-medium-emphasis mt-2">
                <strong>Trace 5</strong> &mdash; Capture d&rsquo;&eacute;cran de l&rsquo;historique de commits sur GitLab,
                montrant la date, la branche et l&rsquo;auteur de chaque commit. On y voit la progression
                it&eacute;rative du travail et l&rsquo;application de la convention de nommage tout au long du stage.
              </p>
            </v-col>
            <v-col cols="12" md="5">
              <v-card variant="outlined" color="green-lighten-2" class="pa-3 mb-3" rounded="lg">
                <p class="text-body-2 mb-3">
                  La Trace 5 ci-contre est une capture de l&rsquo;historique de commits GitLab
                  r&eacute;alis&eacute;s lors du stage. Cet historique couvre l&rsquo;ensemble de la migration&nbsp;:
                  depuis les premiers scripts d&rsquo;audit de d&eacute;pendances jusqu&rsquo;aux corrections du
                  script de g&eacute;n&eacute;ration de tests dynamiques.
                </p>
                <p class="text-body-2 mb-0">
                  Les messages suivent une convention (<code>feat:</code>, <code>fix:</code>,
                  <code>docs:</code>), les branches sont nomm&eacute;es par fonctionnalit&eacute; et chaque
                  int&eacute;gration passe par une Merge Request valid&eacute;e par Florian Masy.
                </p>
              </v-card>
            </v-col>
          </v-row>

          <div class="text-body-2">
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">g&eacute;rer son travail avec des branches Git nomm&eacute;es</v-chip>,
              chaque fonctionnalit&eacute; ou correctif a &eacute;t&eacute; d&eacute;velopp&eacute; sur une branche d&eacute;di&eacute;e, nomm&eacute;e
              explicitement (par exemple <code>feat/libcst-visitor</code> ou
              <code>fix/coverage-path-normalization</code>). Cette convention, adopt&eacute;e d&egrave;s le
              d&eacute;but du stage, a facilit&eacute; les revues et &eacute;vit&eacute; de polluer la branche principale.
            </p>
            <p class="mb-3">
              Pour
              <v-chip color="success" size="x-small" class="mx-1">r&eacute;diger des messages de commit clairs et atomiques</v-chip>,
              j&rsquo;ai appliqu&eacute; une convention bas&eacute;e sur les pr&eacute;fixes <code>feat:</code>, <code>fix:</code>
              et <code>docs:</code>. Chaque commit correspond &agrave; une modification coh&eacute;rente et
              ind&eacute;pendante, ce qui a permis &agrave; Florian Masy de lire l&rsquo;historique sans ouvrir chaque diff.
            </p>
            <p>
              Pour
              <v-chip color="success" size="x-small" class="mx-1">soumettre son travail via des Merge Requests GitLab</v-chip>,
              chaque branche a &eacute;t&eacute; int&eacute;gr&eacute;e par une MR avec une description r&eacute;sumant les
              changements. Les revues de code de Florian Masy ont permis d&rsquo;identifier des
              ajustements, notamment sur la normalisation des chemins et la gestion des
              contextes de tests dynamiques.
            </p>
          </div>
        </v-window-item>

        <!-- Bilan -->
        <v-window-item value="bilan">
          <h3 class="text-subtitle-1 font-weight-bold mb-4">
            Bilan &amp; Analyse
          </h3>

          <h4 class="text-body-1 font-weight-bold mb-1">
            Comp&eacute;tence 3 &mdash; Faire une veille technologique et documenter son travail
          </h4>
          <v-row class="mb-5">
            <v-col cols="12" md="4" v-for="sf in savoir1SavoirFaire" :key="sf.title">
              <v-card variant="outlined" class="pa-3 h-100" rounded="lg">
                <v-chip color="success" size="small" class="mb-2">{{ sf.title }}</v-chip>
                <p class="text-body-2 mb-1"><strong>Contexte d&rsquo;utilisation :</strong> {{ sf.contexteUtilisation }}</p>
                <p class="text-body-2 mb-1"><strong>Contexte d&rsquo;apprentissage :</strong> {{ sf.contexteApprentissage }}</p>
                <p class="text-body-2"><strong>Difficult&eacute; :</strong> {{ sf.difficulte }}</p>
              </v-card>
            </v-col>
          </v-row>

          <h4 class="text-body-1 font-weight-bold mb-1">
            Comp&eacute;tence 4 &mdash; Utiliser Git et GitLab pour g&eacute;rer le code en &eacute;quipe
          </h4>
          <v-row class="mb-6">
            <v-col cols="12" md="4" v-for="sf in savoir2SavoirFaire" :key="sf.title">
              <v-card variant="outlined" class="pa-3 h-100" rounded="lg">
                <v-chip color="success" size="small" class="mb-2">{{ sf.title }}</v-chip>
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
                <p class="text-body-2 mb-2">
                  <strong>Comp&eacute;tence 3&nbsp;:</strong> Niveau <strong>faible</strong> &mdash; aucune
                  exp&eacute;rience de veille structur&eacute;e ni de documentation technique &agrave; destination
                  d&rsquo;une &eacute;quipe. Renovate et Dependabot &eacute;taient totalement inconnus.
                </p>
                <p class="text-body-2">
                  <strong>Comp&eacute;tence 4&nbsp;:</strong> Niveau <strong>moyen</strong> &mdash; bases de
                  Git acquises en cours de BUT, mais peu d&rsquo;exp&eacute;rience des branches et MR en
                  contexte professionnel.
                </p>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card variant="outlined" class="pa-4" rounded="lg">
                <h4 class="text-subtitle-2 font-weight-bold mb-2">Apr&egrave;s le stage</h4>
                <p class="text-body-2 mb-2">
                  <strong>Comp&eacute;tence 3&nbsp;:</strong> Niveau <strong>bon</strong> &mdash; capable de
                  conduire une veille structur&eacute;e, tester des outils en conditions r&eacute;elles et
                  r&eacute;diger une documentation directement utilisable par l&rsquo;&eacute;quipe.
                </p>
                <p class="text-body-2">
                  <strong>Comp&eacute;tence 4&nbsp;:</strong> Niveau <strong>bon</strong> &mdash; ma&icirc;trise
                  du flux Git en &eacute;quipe&nbsp;: branches nomm&eacute;es, commits atomiques avec convention,
                  Merge Requests avec revue de code.
                </p>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>

      </v-window>
    </v-card>

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

const tab = ref('comp1')

const savoir1SavoirFaire = [
  {
    title: "Identifier et comparer des outils de mise à jour automatique",
    contexteUtilisation: "Veille sur Renovate et Dependabot pour automatiser la gestion des dépendances d'EzGED après migration Python 3.13.",
    contexteApprentissage: "Entièrement appris en stage — ces outils n'avaient jamais été abordés en cours de BUT. Documentation officielle et tests pratiques.",
    difficulte: "Moyenne — la comparaison objective demande de tester réellement les deux outils et de comprendre les contraintes de l'infrastructure GitLab interne.",
  },
  {
    title: "Configurer Renovate sur un projet GitLab",
    contexteUtilisation: "Mise en place de Renovate sur un projet de test GitLab, configuration via renovate.json et intégration dans le pipeline .gitlab-ci.yml.",
    contexteApprentissage: "Appris entièrement en stage à partir de la documentation Renovate et des échanges avec Florian Masy sur les runners GitLab.",
    difficulte: "Élevée — la gestion des droits du runner GitLab et du token d'accès pour la création de MR automatiques a nécessité plusieurs itérations.",
  },
  {
    title: "Rédiger une documentation technique exploitable",
    contexteUtilisation: "Rédaction de la documentation comparative Renovate/Dependabot et de la procédure de montée de version, publiée sur le Wiki GitLab d'EzGED.",
    contexteApprentissage: "Pratique développée en stage — la rédaction de documentation à destination d'une équipe professionnelle n'avait pas été travaillée en cours.",
    difficulte: "Faible pour la rédaction elle-même ; moyenne pour trouver le bon niveau de détail technique adapté aux futurs lecteurs.",
  },
]

const savoir2SavoirFaire = [
  {
    title: "Gérer son travail avec des branches Git nommées",
    contexteUtilisation: "Développement de chaque fonctionnalité (script LibCST, interface HTML, suite de tests) sur une branche dédiée avec convention de nommage.",
    contexteApprentissage: "Bases Git en cours de BUT, convention de nommage des branches apprise et appliquée en conditions réelles de stage.",
    difficulte: "Faible — la convention est simple à appliquer. La difficulté est de maintenir une granularité cohérente entre les branches.",
  },
  {
    title: "Rédiger des messages de commit clairs et atomiques",
    contexteUtilisation: "Application de la convention feat:/fix:/docs: pour qualifier chaque commit tout au long du stage, facilitant les revues de Florian Masy.",
    contexteApprentissage: "Convention apprise en stage — les commits en cours de BUT n'avaient pas de structure particulière.",
    difficulte: "Faible une fois la convention assimilée. La difficulté est de découper le travail en commits atomiques, surtout lors des refactorisations.",
  },
  {
    title: "Soumettre son travail via des Merge Requests GitLab",
    contexteUtilisation: "Intégration de chaque branche via une MR avec description des changements, soumise à la revue de Florian Masy avant merge.",
    contexteApprentissage: "Processus de MR connu théoriquement en cours, pratiqué et affiné en conditions réelles de stage avec retours du tuteur.",
    difficulte: "Faible pour la création de la MR ; moyenne pour rédiger une description claire et anticiper les questions de la revue.",
  },
]
</script>
