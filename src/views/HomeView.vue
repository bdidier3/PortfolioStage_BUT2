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
          Les objectifs de ce site sont de présenter le contexte de mon stage chez EzDEV (du 7 avril au 11 juin 2026), d’illustrer les travaux réalisés à l’aide de traces concrètes (captures, extraits de code, rapports) et d’évaluer les compétences développées à travers une analyse technique, un suivi de projet et un retour sur mon intégration en entreprise. Chaque savoir-faire est accompagné d’un bilan justifié comparant mon niveau avant et après le stage.
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
              <li class="mb-2">
                <strong>Analyser un code existant</strong>
                <ul class="mt-1 pl-4">
                  <li>Identifier les d&eacute;pendances critiques.</li>
                  <li>Automatiser des audits (LibCST, ruff, deptry).</li>
                  <li>Mettre en place des tests et suivre la couverture.</li>
                </ul>
              </li>
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
              <li class="mb-2">
                <strong>Organiser et suivre un projet</strong>
                <ul class="mt-1 pl-4">
                  <li>Organiser le travail par semaines et jalons.</li>
                  <li>Documenter les analyses sur GitLab.</li>
                  <li>Communiquer l&rsquo;avancement et ajuster les objectifs.</li>
                </ul>
              </li>
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
              <li class="mb-2">
                <strong>S&rsquo;int&eacute;grer et collaborer en entreprise</strong>
                <ul class="mt-1 pl-4">
                  <li>Collaborer avec le chef de projet et le responsable solution.</li>
                  <li>S&rsquo;approprier un environnement technique existant.</li>
                  <li>Participer aux revues et aux points d&rsquo;&eacute;quipe.</li>
                </ul>
              </li>
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
      <div class="mt-2">
        <router-link to="/technique" class="text-blue-lighten-2 text-body-2">
          Aller sur la page Technique
        </router-link>
      </div>
      <p class="text-caption text-medium-emphasis mt-2">&copy; 2026 Baptiste Didier. Tous droits r&eacute;serv&eacute;s.</p>
    </v-card>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const orgModal = ref(false)
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
