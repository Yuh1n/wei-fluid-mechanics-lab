import type { Metadata } from "next";
import Image from "next/image";

const title = "Research | Interfacial Flow and Manufacturing Group";
const description = "Research in interfacial fluid mechanics, micro- and nanoscale printing, and piston-machine lubrication.";
export const metadata: Metadata = { title, description, openGraph: { title, description, images: [] }, twitter: { title, description, images: [] } };

export default function ResearchPage() {
  return (
    <section className="template-section subpage research-page">
      <h1>Research</h1>
      <div className="research-list">
        <article><span>01</span><div><h2>Interfacial Fluid Mechanics</h2><p>Liquid-bridge breakup, satellite-droplet formation, drop impact, antibubbles, and transport phenomena across fluid interfaces.</p></div></article>
        <article><span>02</span><div><h2>Micro- and Nanoscale Inkjet Printing</h2><p>Physical mechanisms and printhead design for precise, controllable droplet generation in advanced manufacturing.</p></div></article>
        <article><span>03</span><div><h2>Lubrication in Axial Piston Machines</h2><p>Textured piston/cylinder interfaces, oil-film rupture and regeneration, cavitation, friction, and efficiency optimization.</p></div></article>
      </div>
      <Image className="research-banner" src="/images/research-results.jpg" alt="Research results in interfacial fluid mechanics" width={2083} height={1069} priority />
    </section>
  );
}
