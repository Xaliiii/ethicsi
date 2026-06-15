import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import EthicMail from './EthicMail'
import EthicOffice from './EthicOffice'
import './App.css'

const cloudItems = [
  'Jusqu\'à 15 utilisateurs',
  '1 To de données par utilisateur',
  'Gestion et partage de fichiers',
  'Gestionnaire de tâches',
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

function LandingPage() {
  return (
    <>
      <header className="nav">
        <Logo />

        <nav>
          <a href="#plateforme">La plateforme</a>
          <a href="#tarifs">Tarifs</a>
        </nav>

        <a className="navBtn" href="#contact">Demander une démo</a>
      </header>

      <main>
        <section className="hero">
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

          <a className="primaryBtn" href="#contact">Demander une démo →</a>
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
              Basée sur des technologies Open Source et hébergée en Europe, elle
              garantit transparence, conformité RGPD et contrôle de nos informations,
              tout en conservant une expérience utilisateur familière.
            </p>

            <div className="featureGrid">
              {features.map((feature) => (
                <article className="feature" key={feature.title}>
                  <div className="featureIcon">
                    <img src={feature.icon} alt="" />
                    {feature.check && (
                      <img className="lockCheck" src="/assets/Vector.svg" alt="" />
                    )}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="tarifs" className="pricing">
          <span className="label">TARIFS</span>
          <h2>Des tarifs maîtrisés</h2>

          <p className="pricingIntro">
            La souveraineté numérique accessible aux PME. Une offre clé en main
            incluant cloud privé, logiciels collaboratifs et environnement de travail
            complet, dès 149€ HT/mois pour 15 utilisateurs.
          </p>

          <div className="tabs">
            <button>Mensuel</button>
          </div>

          <div className="plans">
            <article className="mainPlan">
              <div className="chosen">LE PLUS CHOISI</div>

              <span>SOCLE CLOUD</span>
              <h3>149€ <small>/ mois</small></h3>
              <p>Maximum 15 utilisateurs</p>
              <p>Pour les organisations exigeantes</p>

              <hr />

              <ul>
                {cloudItems.map((item) => (
                  <li key={item}>
                    <img src="/assets/Icon(2).svg" alt="" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button>Commander ce plan</button>
            </article>

            <div className="sidePlans">
              <Plan title="MODULE ETHIC-MAIL" items={['Webmail', 'Contacts', 'Agenda', 'Anti-spam']} />

              <Plan
                title="MODULE ETHIC-OFFICE"
                items={[
                  'NextCloud Talk',
                  'Messagerie instantanée',
                  'Visioconférence',
                  'OnlyOffice collaboratif',
                ]}
              />
            </div>
          </div>

          <small className="note">
            * Tarifs à partir de 10€ par mois et par utilisateurs, pour un minimum
            de 15 utilisateurs, soit 149€/mois pour la structure.
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

            <a href="#plateforme">
              Fonctionnalités
            </a>

            <a href="#tarifs">
              Tarifs
            </a>
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
                window.open(
                  'https://www.exelys.net/contact/',
                  '_blank'
                )
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
          <span>Une solution EXELYS - Digital Partner — Siège social : Pau, France</span>
        </div>
      </footer>
    </>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand ${light ? 'light' : ''}`}>
      <span className="brandIcon">
        <img src="/assets/Icon.svg" alt="" />
      </span>
      <strong>EthicSI</strong>
    </div>
  )
}

function Plan({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="plan">
      <span>{title}</span>
      <h3>49€ <small>/ mois</small></h3>

      <div className="planItems">
        {items.map((item) => (
          <p key={item}>
            <img src="/assets/Icon(1).svg" alt="" />
            <span>{item}</span>
          </p>
        ))}
      </div>

      <div className="planActions">
        <Link
          className="moreBtn"
          to={
            title.includes('MAIL')
              ? '/ethic-mail'
              : '/ethic-office'
          }
        >
          En savoir plus
        </Link>

        <button
              onClick={() =>
                window.open(
                  'https://www.exelys.net/contact/',
                  '_blank'
                )
              }
            >
              Nous contacter →
            </button>
      </div>
    </article>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ethic-mail" element={<EthicMail />} />
      <Route path="/ethic-office" element={<EthicOffice />} />
    </Routes>
  )
}