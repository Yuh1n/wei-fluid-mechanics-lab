import type { Metadata } from "next";

const title = "Publications | Interfacial Flow and Manufacturing Group";
const description = "Selected publications by Xiaofeng Wei and collaborators.";
export const metadata: Metadata = { title, description, openGraph: { title, description, images: [] }, twitter: { title, description, images: [] } };

const publications = [
  ["2026", "The breakup dynamics of an asymmetric liquid bridge under quasi-static stretching", "Physics of Fluids 38, 042120"],
  ["2026", "Spontaneous rupture and satellite formation of an inviscid ligament", "Physical Review Fluids 11, 043606"],
  ["2025", "The butterfly effect of tiny density difference in microfluidic channel", "International Journal of Mechanical Sciences 300, 110430"],
  ["2024", "Formation dynamics of the satellite droplet in the breakup of asymmetrical liquid bridge", "Physics of Fluids 36, 072001"],
  ["2024", "Exit dynamics of a sphere launched underneath a liquid bath surface", "Physical Review Fluids 9, 054003 · Editors’ Suggestion"],
  ["2024", "Enhancing the lubrication performance of oil films in piston/cylinder pairs by textures", "Physics of Fluids 36, 033607 · Editors’ Pick"],
  ["2021", "Statics and dynamics of a viscous ligament drawn out of a pure-liquid bath", "Journal of Fluid Mechanics 922, A14"],
];

export default function PublicationsPage() {
  return (
    <section className="template-section subpage publications-page">
      <h1>Selected Publications</h1>
      <div className="publication-list">{publications.map(([year, paperTitle, journal], index) => <article key={paperTitle}><span>{String(index + 1).padStart(2, "0")}</span><div><p>{year}</p><h2>{paperTitle}</h2><em>{journal}</em></div></article>)}</div>
      <a className="external-link" href="https://mypage.zjnu.edu.cn/WXF4/zh_CN/index.htm" target="_blank" rel="noreferrer">VIEW THE COMPLETE PUBLICATION LIST ↗</a>
    </section>
  );
}
