import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function EthicMail() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <header className="nav">
        <div className="brand">
          <span className="brandIcon">
            <img src="/assets/Icon.svg" alt="" />
          </span>
          <strong>EthicSI</strong>
        </div>

        <nav>
          <Link to="/">Accueil</Link>
          <a href="#webmail">Webmail</a>
          <a href="#contacts">Contacts</a>
          <a href="#agenda">Agenda</a>
        </nav>

        <a
          className="navBtn"
          href="https://www.exelys.net/contact/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demander une démo
        </a>
      </header>

      <main>
        <section className="hero moduleHero">
          <div className="pill">● MODULE ETHIC-MAIL</div>

          <h1>
            Une boîte mail
            <br />
            souveraine et sécurisée
          </h1>

          <p>
            Hébergée en France, conforme RGPD et pensée pour les entreprises souhaitant
            reprendre le contrôle de leurs données.
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

        <section id="webmail" className="moduleShowcase">
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
                Ethic-Mail vous permet de consulter, envoyer et organiser vos emails depuis
                une interface claire, sécurisée et hébergée en France.
              </p>
              <p>
                Une solution pensée pour remplacer les messageries classiques comme Gmail ou Outlook tout en gardant
                une expérience simple pour vos utilisateurs.
              </p>
            </div>
          </div>
        </section>

        <section id="contacts" className="moduleShowcase moduleShowcaseAlt">
          <div className="moduleContainer showcaseGrid reverse">
            <div className="showcaseText">
              <span className="label">CONTACTS PARTAGÉS</span>
              <h2>Un carnet d’adresses clair et centralisé</h2>
              <p>
                Retrouvez vos contacts professionnels, groupes et équipes depuis une interface
                simple et synchronisée avec votre environnement Ethic-Mail.
              </p>
              <p>
                Les informations importantes restent organisées, accessibles et maîtrisées
                dans un espace souverain.
              </p>
            </div>

            <div className="showcaseDecor">
              <div className="showcaseImages singleImage">
                <img
                  src="/assets/contacts.png"
                  alt="Contacts Ethic-Mail"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="agenda" className="moduleShowcase">
          <div className="moduleContainer showcaseGrid">
            <div className="showcaseDecor">
              <div className="showcaseImages singleImage agendaImage">
                <img
                  src="/assets/agenda.png"
                  alt="Agenda Ethic-Mail"
                />
              </div>
            </div>

            <div className="showcaseText">
              <span className="label">AGENDA COLLABORATIF</span>
              <h2>Planifiez vos rendez-vous et réunions simplement</h2>
              <p>
                Organisez vos journées, réunions d’équipe et événements professionnels grâce
                à un agenda partagé intégré à votre messagerie.
              </p>
              <p>
                Vos calendriers restent accessibles depuis votre navigateur, tout en conservant
                vos données dans un environnement sécurisé.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footerTop">
          <div>
            <div className="brand light">
              <span className="brandIcon">
                <img src="/assets/Icon.svg" alt="" />
              </span>
              <strong>EthicSI</strong>
            </div>

            <p>L'alternative souveraine des entreprises</p>
          </div>

          <div>
            <h4>LA PLATEFORME</h4>
            <Link to="/">Retour à l'accueil</Link>
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