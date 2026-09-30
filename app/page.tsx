import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Interfacial Flow and Intelligent Manufacturing Group",
  description: "The Xiaofeng Wei Research Group at Zhejiang Normal University.",
  openGraph: { title: "Interfacial Flow and Intelligent Manufacturing Group", description: "The Xiaofeng Wei Research Group at Zhejiang Normal University.", images: [] },
  twitter: { title: "Interfacial Flow and Intelligent Manufacturing Group", description: "The Xiaofeng Wei Research Group at Zhejiang Normal University.", images: [] },
};

export default function Home() {
  return (
    <section className="home-section template-section">
      <h1>Interfacial Flow and Intelligent Manufacturing Group</h1>
      <p className="home-subtitle">Fundamental fluid mechanics for precision control in industrial applications</p>
      <Image className="hero-image" src="/images/research-results.jpg" alt="Selected research on liquid ligaments, droplet transport and microscale experiments" width={2083} height={1069} priority />
      <div className="home-intro"><p>We combine numerical simulation and experiments to uncover the physics of complex fluid phenomena and translate fundamental understanding into engineering practice.</p><p>Our work focuses on interfacial fluid mechanics, micro- and nanoscale inkjet printing, and lubrication in axial piston machines.</p></div>
    </section>
  );
}
