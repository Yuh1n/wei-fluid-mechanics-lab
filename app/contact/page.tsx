import type { Metadata } from "next";

const title = "Contact Us | Interfacial Flow and Manufacturing Group";
const description = "Contact and recruitment information for the Xiaofeng Wei Research Group.";
export const metadata: Metadata = { title, description, openGraph: { title, description, images: [] }, twitter: { title, description, images: [] } };

export default function ContactPage() {
  return (
    <section className="template-section subpage contact-page">
      <h1>Contact Us</h1>
      <div className="contact-grid"><div><h2>Join the Group</h2><p>Students with an interest in fluid mechanics, microfluidics, precision manufacturing, and fluid-power systems are warmly encouraged to contact us.</p></div><div><h2>Office</h2><p>Room 31-307, College of Engineering<br />Zhejiang Normal University<br />688 Yingbin Avenue, Jinhua, Zhejiang 321004, China</p></div></div>
    </section>
  );
}
