import Image from "next/image";

const publications = [
  ["2026", "The breakup dynamics of an asymmetric liquid bridge under quasi-static stretching", "Physics of Fluids 38, 042120"],
  ["2026", "Spontaneous rupture and satellite formation of an inviscid ligament", "Physical Review Fluids 11, 043606"],
  ["2025", "The butterfly effect of tiny density difference in microfluidic channel", "International Journal of Mechanical Sciences 300, 110430"],
  ["2024", "Formation dynamics of the satellite droplet in the breakup of asymmetrical liquid bridge", "Physics of Fluids 36, 072001"],
  ["2024", "Exit dynamics of a sphere launched underneath a liquid bath surface", "Physical Review Fluids 9, 054003 · Editors’ Suggestion"],
  ["2024", "Enhancing the lubrication performance of oil films in piston/cylinder pairs by textures", "Physics of Fluids 36, 033607 · Editors’ Pick"],
  ["2021", "Statics and dynamics of a viscous ligament drawn out of a pure-liquid bath", "Journal of Fluid Mechanics 922, A14"],
];

const students = [
  ["Jinshun Gao", "M.S. 2023–2026", "Controlled liquid-bridge breakup and satellite droplet formation"],
  ["Wenyao Zhang", "M.S. 2023–2026", "Particle effects on textured-surface friction under heavy loads"],
  ["Liquan Luo", "M.S. 2024–2027", "Satellite droplet formation in low-to-medium viscosity liquid bridges"],
  ["Sirui Li", "M.S. 2024–2027", "Lubrication mechanisms of textured piston-pump surfaces"],
  ["Xia Wu", "M.S. 2025–2028", "Coating of rods immersed in liquid baths"],
  ["Qingrui Zhang", "M.S. 2025–2028", "Stretching of liquid bridges in confined baths"],
];

export default function Home() {
  return (
    <main id="home">
      <header className="site-header">
        <a className="group-identity" href="#home">
          <span>College of Engineering</span>
          <strong>Interfacial Flow and Manufacturing Group</strong>
          <span>Zhejiang Normal University</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#home">HOME</a><a href="#gallery">GALLERY</a><a href="#people">PEOPLE</a><a href="#research">RESEARCH</a><a href="#publications">PUBLICATIONS</a><a href="#contact">CONTACT US</a>
        </nav>
      </header>

      <section className="home-section template-section">
        <h1>Interfacial Flow and Intelligent Manufacturing Group</h1>
        <p className="home-subtitle">Fundamental fluid mechanics for precision control in industrial applications</p>
        <Image className="hero-image" src="/images/research-results.jpg" alt="Selected research on liquid ligaments, droplet transport and microscale experiments" width={2083} height={1069} priority />
        <div className="home-intro"><p>We combine numerical simulation and experiments to uncover the physics of complex fluid phenomena and translate fundamental understanding into engineering practice.</p><p>Our work focuses on interfacial fluid mechanics, micro- and nanoscale inkjet printing, and lubrication in axial piston machines.</p></div>
      </section>

      <section className="template-section" id="gallery">
        <h2>Members Event Showcase</h2>
        <article className="gallery-event"><h3>2025.07 · Invited Keynote at Droplets 2025</h3><Image src="/images/droplets-2025.jpg" alt="Professor Xiaofeng Wei at the Droplets 2025 conference in Liège" width={2505} height={1003} /></article>
        <article className="gallery-event"><h3>2023–2025 · International and National Conferences</h3><Image src="/images/conferences.jpg" alt="Group members attending academic conferences" width={2250} height={623} /></article>
        <article className="gallery-event"><h3>2025.04 · Academic Exchange and Visiting Scholars</h3><Image src="/images/visits.jpg" alt="Academic exchange activities and visiting scholars" width={2238} height={850} /></article>
        <article className="gallery-event"><h3>2023–2025 · Honors and Media Coverage</h3><Image src="/images/honors.jpg" alt="Keynote invitation, best presentation award and media coverage" width={2628} height={1470} /></article>
      </section>

      <section className="template-section people-page" id="people">
        <h2>People</h2>
        <article className="profile-block"><div className="profile-title"><span>Principal Investigator</span><h3>Xiaofeng Wei</h3><p>Associate Professor · M.S. Supervisor</p></div><div className="profile-copy"><p>Dr. Xiaofeng Wei is an Associate Professor in the College of Engineering at Zhejiang Normal University. He received his Ph.D. from Zhejiang University and was a visiting scholar at the TIPs Laboratory, Université libre de Bruxelles.</p><p>His research spans interfacial fluid mechanics, micro- and nanoscale inkjet-printing mechanisms, and textured-surface lubrication in axial piston machines.</p></div></article>
        <h3 className="subsection-title">Current Students</h3>
        <div className="people-list">{students.map(([name, degree, topic]) => <div className="person-row" key={name}><strong>{name}</strong><span>{degree}</span><p>{topic}</p></div>)}</div>
      </section>

      <section className="template-section research-page" id="research">
        <h2>Research</h2>
        <div className="research-list">
          <article><span>01</span><div><h3>Interfacial Fluid Mechanics</h3><p>Liquid-bridge breakup, satellite-droplet formation, drop impact, antibubbles, and transport phenomena across fluid interfaces.</p></div></article>
          <article><span>02</span><div><h3>Micro- and Nanoscale Inkjet Printing</h3><p>Physical mechanisms and printhead design for precise, controllable droplet generation in advanced manufacturing.</p></div></article>
          <article><span>03</span><div><h3>Lubrication in Axial Piston Machines</h3><p>Textured piston/cylinder interfaces, oil-film rupture and regeneration, cavitation, friction, and efficiency optimization.</p></div></article>
        </div>
        <Image className="research-banner" src="/images/research-results.jpg" alt="Research results in interfacial fluid mechanics" width={2083} height={1069} />
      </section>

      <section className="template-section publications-page" id="publications">
        <h2>Selected Publications</h2>
        <div className="publication-list">{publications.map(([year, title, journal], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><p>{year}</p><h3>{title}</h3><em>{journal}</em></div></article>)}</div>
        <a className="external-link" href="https://mypage.zjnu.edu.cn/WXF4/zh_CN/index.htm" target="_blank" rel="noreferrer">VIEW THE COMPLETE PUBLICATION LIST ↗</a>
      </section>

      <section className="template-section contact-page" id="contact">
        <h2>Contact Us</h2>
        <div className="contact-grid"><div><h3>Join the Group</h3><p>Students with an interest in fluid mechanics, microfluidics, precision manufacturing, and fluid-power systems are warmly encouraged to contact us.</p></div><div><h3>Office</h3><p>Room 31-307, College of Engineering<br />Zhejiang Normal University<br />688 Yingbin Avenue, Jinhua, Zhejiang 321004, China</p></div></div>
      </section>

      <footer><p>Interfacial Flow and Manufacturing Group</p><p>Zhejiang Normal University</p><a href="#home">BACK TO TOP ↑</a></footer>
    </main>
  );
}
