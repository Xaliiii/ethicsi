import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function EthicOffice() {
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
          <a href="#office">OnlyOffice</a>
          <a href="#talk">Talk</a>
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
          <div className="pill">● MODULE ETHIC-OFFICE</div>

          <h1>
            Une suite collaborative
            <br />
            souveraine et complète
          </h1>

          <p>
            Documents, tableurs, présentations, formulaires, messagerie instantanée
            et visioconférence dans un environnement sécurisé.
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

        <section id="office" className="moduleShowcase">
          <div className="moduleContainer showcaseGrid">
            <div className="showcaseDecor">
              <div className="showcaseImages officeImages">
                <img
                  className="officeFade officeOne"
                  src="/assets/word.png"
                  alt="Document texte OnlyOffice"
                />
                <img
                  className="officeFade officeTwo"
                  src="/assets/calc.png"
                  alt="Tableur OnlyOffice"
                />
                <img
                  className="officeFade officeThree"
                  src="/assets/powerpoint.png"
                  alt="Présentation OnlyOffice"
                />
                <img
                  className="officeFade officeFour"
                  src="/assets/formulaire.png"
                  alt="Formulaire OnlyOffice"
                />
              </div>
            </div>

            <div className="showcaseText">
              <span className="label">SUITE BUREAUTIQUE COLLABORATIVE</span>

              <h2>Créez et partagez vos documents en toute souveraineté</h2>

              <p>
                Ethic-Office intègre OnlyOffice pour créer et modifier vos documents,
                tableurs, présentations et formulaires directement depuis votre navigateur.
              </p>

              <p>
                Travaillez seul ou à plusieurs en temps réel, sans dépendre de solutions
                externes, tout en conservant la maîtrise complète de vos données. 
                Cette solution permet le remplacement de Microsoft Office.
              </p>
            </div>
          </div>
        </section>

        <section id="talk" className="moduleShowcase moduleShowcaseAlt">
          <div className="moduleContainer showcaseGrid reverse">
            <div className="showcaseText">
              <span className="label">COMMUNICATION UNIFIÉE</span>

              <h2>Messagerie instantanée et visioconférence intégrées</h2>

              <p>
                Échangez simplement avec vos équipes grâce à un espace de discussion
                sécurisé intégré à la plateforme.
              </p>

              <p>
                Lancez des réunions audio ou vidéo, partagez votre écran et collaborez
                efficacement sans passer par des services tiers. Cette solution est idéale pour le remplacement de Microsoft Teams
              </p>
            </div>

            <div className="showcaseDecor">
              <div className="showcaseImages talkImages">
                <img
                  className="talkFade talkOne"
                  src="/assets/talk.png"
                  alt="Discussion NextCloud Talk"
                />
                <img
                  className="talkFade talkTwo"
                  src="/assets/visio.png"
                  alt="Visioconférence NextCloud Talk"
                />
              </div>
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