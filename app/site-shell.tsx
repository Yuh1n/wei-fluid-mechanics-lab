export function Header() {
  return (
    <header className="site-header">
      <a className="group-identity" href="/">
        <span>College of Engineering</span>
        <strong>Interfacial Flow and Manufacturing Group</strong>
        <span>Zhejiang Normal University</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/">HOME</a><a href="/gallery">GALLERY</a><a href="/people">PEOPLE</a><a href="/research">RESEARCH</a><a href="/publications">PUBLICATIONS</a><a href="/contact">CONTACT US</a>
      </nav>
    </header>
  );
}

export function Footer() {
  return <footer><p>Interfacial Flow and Manufacturing Group</p><p>Zhejiang Normal University</p><a href="/">BACK TO HOME ↑</a></footer>;
}
