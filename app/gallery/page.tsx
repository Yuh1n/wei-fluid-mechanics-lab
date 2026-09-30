import type { Metadata } from "next";
import Image from "next/image";

const title = "Gallery | Interfacial Flow and Manufacturing Group";
const description = "Academic events, conferences, honors and exchanges of the Xiaofeng Wei Research Group.";
export const metadata: Metadata = { title, description, openGraph: { title, description, images: [] }, twitter: { title, description, images: [] } };

export default function GalleryPage() {
  return (
    <section className="template-section subpage gallery-page">
      <h1>Members Event Showcase</h1>
      <article className="gallery-event"><h2>2025.07 · Invited Keynote at Droplets 2025</h2><Image src="/images/droplets-2025.jpg" alt="Professor Xiaofeng Wei at the Droplets 2025 conference in Liège" width={2505} height={1003} priority /></article>
      <article className="gallery-event"><h2>2023–2025 · International and National Conferences</h2><Image src="/images/conferences.jpg" alt="Group members attending academic conferences" width={2250} height={623} /></article>
      <article className="gallery-event"><h2>2025.04 · Academic Exchange and Visiting Scholars</h2><Image src="/images/visits.jpg" alt="Academic exchange activities and visiting scholars" width={2238} height={850} /></article>
      <article className="gallery-event"><h2>2023–2025 · Honors and Media Coverage</h2><Image src="/images/honors.jpg" alt="Keynote invitation, best presentation award and media coverage" width={2628} height={1470} /></article>
    </section>
  );
}
