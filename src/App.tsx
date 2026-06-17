import Header from './Header'
import './App.css'

const cloudItems = [
  "Jusqu'à 15 utilisateurs",
  '1 To de données par utilisateur',
  'Gestion et partage de fichiers',
  'Gestionnaire de tâches',
  'Suivi d\'activitès',
  'Anti-virus',
]

const features = [
  {
    icon: '/assets/Vector(3).svg',
    title: 'Hébergement en France',
    text: 'Des données conservées en France pour une maîtrise totale de leur sécurité.',
  },
  {
    icon: '/assets/Vector(2).svg',
    check: true,
    title: 'Échanges sécurisés',
    text: 'Toutes les communications sont protégées pour garantir confidentialité et sérénité quotidiennes.',
  },
  {
    icon: '/assets/Group 2.svg',
    title: 'Services cloisonnés',
    text: 'Une architecture cloisonnée qui réduit les risques et protège chaque service.',
  },
  {
    icon: '/assets/Vector(1).svg',
    title: 'Conformité RGPD natif',
    text: 'Une solution conçue pour répondre pleinement aux exigences européennes de protection.',
  },
]

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="top" className="hero">
          <div className="pill">● CLOUD SOUVERAIN</div>

          <h1>
            L’alternative souveraine
            <br />
            pour les entreprises
            <br />
            <em>dès 10€/utilisateur/mois*</em>
          </h1>

          <p>
            Gestion et partage de fichiers, collaboration, gestion des tâches —
            100 % souverain, sans aucune donnée hors de l’Union Européenne,
            conformité totale avec le RGPD.
          </p>

          <a
            className="primaryBtn"
            href="https://www.exelys.net/contact/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demander une démo →
          </a>
        </section>

        <section id="plateforme" className="platform">
          <div className="imageWrap">
            <img
              src="/assets/17db007eeabbd97ebd01098541b87d333dea9abe.jpg"
              alt="Serveurs"
            />

            <div className="badge">
              <strong>100 %</strong>
              <span>Souverain</span>
            </div>
          </div>

          <div className="content">
            <span className="label">LA PLATEFORME</span>

            <h2>
              La souveraineté
              <br />
              numérique sans changer
              <br />
              vos habitudes !
            </h2>

            <p>
              Une nouvelle solution collaborative, souveraine et sécurisée pour
              votre entreprise, conçue pour répondre aux enjeux de maîtrise de vos
              données et d’indépendance numérique.
            </p>

            <p>
              Basée sur des technologies Open Source et hébergée en France, elle
              garantit transparence, conformité RGPD et contrôle de nos informations,
              tout en conservant une expérience utilisateur familière.
            </p>

            <div className="featureGrid">
              {features.map((feature) => (
                <article className="feature" key={feature.title}>
                  <div className="featureIcon">
                    <img src={feature.icon} alt="" />

                    {feature.check && (
                      <img
                        className="lockCheck"
                        src="/assets/Vector.svg"
                        alt=""
                      />
                    )}
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="office" className="moduleShowcase moduleShowcaseAlt">
          <div className="moduleContainer showcaseGrid">
            <div className="showcaseDecor">
              <div className="showcaseImages officeImages">
                <img
                  className="officeOne"
                  src="/assets/word.png"
                  alt="Document texte OnlyOffice"
                />
                <img
                  className="officeTwo"
                  src="/assets/calc.png"
                  alt="Tableur OnlyOffice"
                />
                <img
                  className="officeThree"
                  src="/assets/powerpoint.png"
                  alt="Présentation OnlyOffice"
                />
                <img
                  className="officeFour"
                  src="/assets/formulaire.png"
                  alt="Formulaire OnlyOffice"
                />
              </div>
            </div>

            <div className="showcaseText">
              <span className="label">SUITE BUREAUTIQUE COLLABORATIVE</span>

              <h2>Créez et partagez vos documents en toute souveraineté</h2>

              <p>
                EthicSI Office est conçu pour créer et modifier vos
                documents, tableurs, présentations et formulaires directement
                depuis votre navigateur.
              </p>

              <p>
                Travaillez seul ou à plusieurs en temps réel, sans dépendre de
                solutions externes, tout en conservant la maîtrise complète de vos
                données. Cette solution permet le remplacement de Microsoft Office.
              </p>
            </div>
          </div>
        </section>

        <section id="talk" className="moduleShowcase">
          <div className="moduleContainer showcaseGrid reverse">
            <div className="showcaseText">
              <span className="label">COMMUNICATION UNIFIÉE</span>

              <h2>Messagerie instantanée et visioconférence intégrées</h2>

              <p>
                Échangez simplement avec vos équipes grâce à un espace de
                discussion sécurisé intégré à la plateforme.
              </p>

              <p>
                Lancez des réunions audio ou vidéo, partagez votre écran et
                collaborez efficacement sans passer par des services tiers. Cette
                solution est idéale pour le remplacement de Microsoft Teams.
              </p>
            </div>

            <div className="showcaseDecor">
              <div className="showcaseImages talkImages">
                <img
                  className="talkOne"
                  src="/assets/talk.png"
                  alt="Discussion NextCloud Talk"
                />
                <img
                  className="talkTwo"
                  src="/assets/visio.png"
                  alt="Visioconférence NextCloud Talk"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="webmail" className="moduleShowcase moduleShowcaseAlt">
          <div className="moduleContainer showcaseGrid">
            <div className="showcaseDecor">
              <div className="showcaseImages">
                <img
                  className="fadeImage imageOne"
                  src="/assets/accueil.png"
                  alt="Connexion Ethic-Mail"
                />
                <img
                  className="fadeImage imageTwo"
                  src="/assets/boite.png"
                  alt="Boîte mail Ethic-Mail"
                />
              </div>
            </div>

            <div className="showcaseText">
              <span className="label">WEBMAIL SOUVERAIN</span>

              <h2>Votre messagerie professionnelle, accessible partout</h2>

              <p>
                EthicSI Mail vous permet de consulter, envoyer et organiser vos
                emails depuis une interface claire, sécurisée et hébergée en France.
              </p>

              <p>
                Une solution pensée pour remplacer les messageries classiques
                comme Gmail ou Outlook tout en gardant une expérience simple pour
                vos utilisateurs.
              </p>
            </div>
          </div>
        </section>

        <section id="contacts" className="moduleShowcase">
          <div className="moduleContainer showcaseGrid reverse">
            <div className="showcaseText">
              <span className="label">CONTACTS PARTAGÉS</span>

              <h2>Un carnet d’adresses sécurisé et centralisé</h2>

              <p>
                Retrouvez vos contacts professionnels, groupes et équipes depuis
                une interface simple et synchronisée avec votre environnement
                EthicSI Mail.
              </p>

              <p>
                Les informations importantes restent organisées, accessibles et
                maîtrisées dans un espace souverain.
              </p>
            </div>

            <div className="showcaseDecor">
              <div className="showcaseImages singleImage">
                <img src="/assets/contacts.png" alt="Contacts Ethic-Mail" />
              </div>
            </div>
          </div>
        </section>

        <section id="agenda" className="moduleShowcase moduleShowcaseAlt">
          <div className="moduleContainer showcaseGrid">
            <div className="showcaseDecor">
              <div className="showcaseImages singleImage agendaImage">
                <img src="/assets/agenda.png" alt="Agenda Ethic-Mail" />
              </div>
            </div>

            <div className="showcaseText">
              <span className="label">AGENDA COLLABORATIF</span>

              <h2>Planifiez vos rendez-vous et réunions simplement</h2>

              <p>
                Organisez vos journées, réunions d’équipe et événements
                professionnels grâce à un agenda partagé intégré à votre messagerie.
              </p>

              <p>
                Vos calendriers restent accessibles depuis votre navigateur, tout
                en conservant vos données dans un environnement sécurisé.
              </p>
            </div>
          </div>
        </section>

        <section id="tarifs" className="pricing">
          <span className="label">TARIFS</span>

          <h2>Des tarifs maîtrisés</h2>

          <p className="pricingIntro">
            La souveraineté numérique accessible aux PME. Une offre clé en main
            incluant cloud privé, logiciels collaboratifs et environnement de
            travail complet, dès 149€ HT/mois pour 15 utilisateurs.
          </p>

          <div className="plans">
            <article className="mainPlan">

              <span>ETHICSI CORE</span>

              <h3>
                149€ <small>/ mois</small>
              </h3>

              <hr />

              <ul>
                {cloudItems.map((item) => (
                  <li key={item}>
                    <img src="/assets/Icon(2).svg" alt="" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

            <button
              onClick={() =>
                window.open('https://www.exelys.net/contact/', '_blank')
              }
              >
               Nous contacter
            </button>
            </article>

            <div className="sidePlans">
              <Plan
                title="MODULE ETHIC-MAIL"
                items={['Webmail', 'Contacts', 'Agenda', 'Anti-spam']}
              />

              <Plan
                title="MODULE ETHIC-OFFICE"
                items={[
                  'Ethic-Talk',
                  'Messagerie instantanée',
                  'Edition de document collaborative',
                ]}
              />
            </div>
          </div>

          <small className="note">
            * 149€ HT/mois pour EthicSI core pour 15 utilisateurs maximum soit moins de 10€ /mois/utilisateurs
          </small>
        </section>
      </main>

      <footer id="contact">
        <div className="footerTop">
          <div>
            <Logo light />
            <p>L’alternative souveraine des entreprises</p>
          </div>

          <div>
            <h4>LA PLATEFORME</h4>
            <a href="#plateforme">Fonctionnalités</a>
            <a href="#tarifs">Tarifs</a>
          </div>

          <div>
            <h4>EXELYS - DIGITAL PARTNER</h4>

            <a
              href="https://www.exelys.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              À propos
            </a>

            <a
              href="https://www.exelys.net/expertises/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Expertises
            </a>

            <button
              onClick={() =>
                window.open('https://www.exelys.net/contact/', '_blank')
              }
            >
              Nous contacter →
            </button>
          </div>
        </div>

        <div className="footerBottom">
          <a
            href="https://www.exelys.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/07cd2090a6beeedcf6683255b1573fbffd68a1f7.png"
              alt="Exelys"
            />
          </a>

          <span>
            Une solution EXELYS - Digital Partner — Siège social : Pau, France
          </span>
        </div>
      </footer>
    </>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand ${light ? 'light' : ''}`}>
      <strong>EthicSI</strong>
    </div>
  )
}

function Plan({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="plan">
      <span>{title}</span>

      <h3>
        49€ <small>/ mois</small>
      </h3>

      <div className="planItems">
        {items.map((item) => (
          <p key={item}>
            <img src="/assets/Icon(1).svg" alt="" />
            <span>{item}</span>
          </p>
        ))}
      </div>

      <button
        onClick={() =>
          window.open('https://www.exelys.net/contact/', '_blank')
        }
      >
        Nous contacter →
      </button>
    </article>
  )
}

export default App