export default function Header() {
  return (
    <header className="nav">
        <a href="#top" className="brand">
            <img
                src="/assets/logo.png"
                alt="EthicSI"
                className="brandLogo"
            />
        </a>

        <nav>
            <a href="#office">Ethic-Office</a>
            <a href="#talk">Ethic-Talk</a>
            <a href="#webmail">Ethic-Mail</a>
            <a href="#contacts">Contacts</a>
            <a href="#agenda">Agenda</a>
            <a href="#tarifs">Tarifs</a>
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
  )
}