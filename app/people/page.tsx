import type { Metadata } from "next";

const title = "People | Interfacial Flow and Manufacturing Group";
const description = "Principal investigator and current students of the Xiaofeng Wei Research Group.";
export const metadata: Metadata = { title, description, openGraph: { title, description, images: [] }, twitter: { title, description, images: [] } };

const students = [
  ["Jinshun Gao", "M.S. 2023–2026", "Controlled liquid-bridge breakup and satellite droplet formation"],
  ["Wenyao Zhang", "M.S. 2023–2026", "Particle effects on textured-surface friction under heavy loads"],
  ["Liquan Luo", "M.S. 2024–2027", "Satellite droplet formation in low-to-medium viscosity liquid bridges"],
  ["Sirui Li", "M.S. 2024–2027", "Lubrication mechanisms of textured piston-pump surfaces"],
  ["Xia Wu", "M.S. 2025–2028", "Coating of rods immersed in liquid baths"],
  ["Qingrui Zhang", "M.S. 2025–2028", "Stretching of liquid bridges in confined baths"],
];

export default function PeoplePage() {
  return (
    <section className="template-section subpage people-page">
      <h1>People</h1>
      <article className="profile-block"><div className="profile-title"><span>Principal Investigator</span><h2>Xiaofeng Wei</h2><p>Associate Professor · M.S. Supervisor</p></div><div className="profile-copy"><p>Dr. Xiaofeng Wei is an Associate Professor in the College of Engineering at Zhejiang Normal University. He received his Ph.D. from Zhejiang University and was a visiting scholar at the TIPs Laboratory, Université libre de Bruxelles.</p><p>His research spans interfacial fluid mechanics, micro- and nanoscale inkjet-printing mechanisms, and textured-surface lubrication in axial piston machines.</p></div></article>
      <h2 className="subsection-title">Current Students</h2>
      <div className="people-list">{students.map(([name, degree, topic]) => <div className="person-row" key={name}><strong>{name}</strong><span>{degree}</span><p>{topic}</p></div>)}</div>
    </section>
  );
}
