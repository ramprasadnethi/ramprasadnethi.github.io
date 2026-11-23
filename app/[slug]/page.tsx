import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { judging, mentoring, pages, profile, publications, research, type PageSlug } from "../../content/portfolio";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

async function getSlug(params: Props["params"]): Promise<PageSlug> {
  const { slug } = await params;
  if (!Object.hasOwn(pages, slug)) notFound();
  return slug as PageSlug;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = await getSlug(params);
  const { title, description } = pages[slug];
  const url = "/" + slug + "/";
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url } };
}

function Engineering() {
  return (
    <>
      <section className="engineering-intro" aria-labelledby="engineering-intro">
        <h2 id="engineering-intro">Transforming Legacy Enterprises into Intelligent, Cloud-Native Ecosystems</h2>
        <div className="engineering-lead">
          <p>My engineering journey spans some of the world&apos;s most recognizable enterprises, including <strong>Macy’s, Apple, Nokē (Janus International), and Amazon Web Services (AWS)</strong>, where I have focused on solving complex technology challenges through <strong>enterprise application migration, legacy modernization, data center exits, cloud transformation, and AI-driven innovation</strong>.</p>
          <p>Throughout my career, I have helped modernize mission-critical enterprise applications, transform legacy infrastructure into scalable cloud-native architectures, and build resilient platforms supporting global business operations. My experience spans <strong>cloud computing, infrastructure engineering, distributed systems, Big Data, Internet of Things (IoT), cybersecurity, and enterprise application modernization</strong>, combining deep technical execution with business-driven architectural strategy.</p>
        </div>
      </section>
      <section className="engineering-contributions" aria-labelledby="engineering-contributions">
        <h2 id="engineering-contributions">Engineering &amp; Technology Contributions</h2>
        <div className="engineering-grid">
          <article className="panel">
            <h3>Macy’s</h3>
            <p>At Macy’s, I contributed to the modernization of enterprise retail technology, including SAP Fashion Management, Big Data platform transformations, and the migration of on-premises e-commerce applications to Google Cloud.</p>
          </article>
          <article className="panel">
            <h3>Apple</h3>
            <p>At Apple, I worked on migrating and modernizing global retail applications from traditional data centers to AWS, helping support technology platforms used by Apple Store associates worldwide.</p>
          </article>
          <article className="panel">
            <h3>Nokē <span>(Janus International)</span></h3>
            <p>At Nokē, I helped architect and lead a large-scale IoT cloud transformation from Google Cloud to AWS, modernizing infrastructure and connected-device platforms to improve scalability, resilience, security, and operational efficiency.</p>
          </article>
        </div>
        <article className="engineering-current">
          <div>
            <h3>Amazon Web Services</h3>
            <p className="engineering-role">Senior Solutions Architect</p>
          </div>
          <p>Today, as a <strong>Senior Solutions Architect at AWS</strong>, I help enterprises accelerate cloud migration, data center exits, and legacy application modernization by bringing together <strong>Generative AI, Agentic AI, intelligent automation, and modern cloud architectures</strong>. My work includes helping organizations adopt AI-assisted application discovery, dependency analysis, modernization planning, code transformation, and cloud-native development, while building the secure data foundations and governance capabilities needed for enterprise-scale AI adoption.</p>
        </article>
      </section>
      <p className="engineering-statement">My focus is not simply moving applications to the cloud—it is reimagining how enterprises engineer, modernize, secure, and operate their technology in an AI-driven world.</p>
    </>
  );
}

function Research() {
  return (
    <>
      <section aria-labelledby="publications">
        <h2 id="publications">Published articles & workshop</h2>
        <div className="publication-list">
          {publications.map(({ venue, title, description, url }) => (
            <article className="publication" key={url}>
              <p className="eyebrow">{venue}</p>
              <div><h3><a className="title-link" href={url}>{title}</a></h3>{description && <p>{description}</p>}</div>
            </article>
          ))}
        </div>
      </section>
      <section className="content-section" aria-labelledby="research">
        <h2 id="research">Research focus</h2>
        <div className="work-grid">
          {research.map(({ title, description }) => <article className="panel" key={title}><h3>{title}</h3><p>{description}</p></article>)}
        </div>
      </section>
    </>
  );
}

function EngagementList({ entries }: { entries: typeof judging }) {
  return (
    <ul className="event-list mt-6 grid gap-3 sm:grid-cols-2">
      {entries.map(({ name, date, detail, links }) => (
        <li className="panel" key={name}>
          <h3>{name}</h3>
          {date && <p>{date}</p>}
          {detail && <p>{detail}</p>}
          {links && (
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
              {links.map(({ label, url }) => <a className="text-link" key={url} href={url} aria-label={name + " · " + label}>{label}</a>)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

function Judging() {
  return (
    <>
      <section aria-labelledby="events">
        <h2 id="events">Hackathon judging</h2>
        <EngagementList entries={judging} />
      </section>
      <section className="content-section" aria-labelledby="mentoring">
        <h2 id="mentoring">Student mentoring</h2>
        <EngagementList entries={mentoring} />
      </section>
      <section className="content-section panel">
        <h2>Mentoring & judging invitations</h2>
        <p>Connect about student hackathons, technical mentoring, or reviewing projects in cloud architecture, AI, and cybersecurity.</p>
        <Link className="text-link" href="/contact/">Get in touch</Link>
      </section>
    </>
  );
}

function About() {
  return (
    <div className="work-grid two-columns">
      <article className="panel">
        <h2>Professional background</h2>
        <p>I am a Senior Solutions Architect at Amazon Web Services with more than 15 years of experience in cloud computing, AI, cybersecurity, distributed systems, and enterprise modernization.</p>
        <p>My technical writing covers cloud infrastructure and the architecture behind enterprise AI systems.</p>
        <p>I speak at public conferences and peer review papers for IEEE and other established conferences and journals. I also serve as a hackathon judge.</p>
      </article>
      <section className="panel">
        <h2>Credentials & education</h2>
        <ul className="credential-list mt-4">{profile.credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul>
      </section>
    </div>
  );
}

function Contact() {
  const [linkedin, ...otherProfiles] = profile.profiles;
  return (
    <>
      <section className="panel case-study">
        <h2>Connect on LinkedIn</h2>
        <p>For judging or mentoring invitations, include the event date, format, and expected time commitment. For research or peer review, share the topic, scope, and timeline.</p>
        <a className="button primary" href={linkedin.url}>Message Ram on LinkedIn</a>
      </section>
      <div className="work-grid two-columns">
        {otherProfiles.map(({ name, url, description }) => (
          <article className="panel" key={name}><h3><a className="title-link" href={url}>{name}</a></h3><p>{description}</p></article>
        ))}
      </div>
    </>
  );
}

const sections = {
  "engineering-impact": Engineering,
  research: Research,
  judging: Judging,
  about: About,
  contact: Contact,
};

export default async function PortfolioPage({ params }: Props) {
  const slug = await getSlug(params);
  const { title, description } = pages[slug];
  const Section = sections[slug];
  return (
    <>
      <section className="hero subhero">
        <div className="shell">
          <h1>{title}</h1>
          <p className="hero-summary">{description}</p>
        </div>
      </section>
      <div className="shell section-space"><Section /></div>
    </>
  );
}
