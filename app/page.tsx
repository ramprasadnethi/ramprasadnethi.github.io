import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "../content/portfolio";

export const metadata: Metadata = { alternates: { canonical: "/" }, openGraph: { url: "/" } };

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Cloud architecture · Agentic AI · Cybersecurity</p>
            <h1>Ram Prasad<br />Nethi<span>.</span></h1>
            <p className="hero-role">{profile.role} <span>at {profile.employer}</span></p>
            <p className="hero-summary">{profile.summary}</p>
            <div className="flex flex-wrap gap-3">
              <Link className="button primary" href="/engineering-impact/">Explore engineering impact</Link>
              <Link className="button outline" href="/contact/">Get in touch</Link>
            </div>
          </div>
          <div className="architecture" aria-hidden="true">
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-middle" />
            <div className="orbit orbit-inner" />
            <div className="axis axis-horizontal" />
            <div className="axis axis-vertical" />
            <div className="architecture-core"><i /><i /><i /></div>
            <span className="architecture-point point-cloud">CLOUD</span>
            <span className="architecture-point point-ai">AI</span>
            <span className="architecture-point point-edge">EDGE</span>
          </div>
        </div>
      </section>
      <section className="shell content-section" aria-labelledby="speaking-review">
        <div className="panel">
          <h2 id="speaking-review">Conference speaking & peer review</h2>
          <p>I speak at public conferences and review papers for IEEE and other established conferences and journals.</p>
        </div>
      </section>
      <section className="shell section-space">
        <p className="eyebrow">Selected work</p>
        <h2>Engineering, research & community</h2>
        <div className="work-grid">
          <article className="panel">
            <p className="eyebrow">Engineering</p>
            <h3>Enterprise cloud modernization</h3>
            <p>Designing cloud architectures for distributed systems with a focus on reliability, security, and operating cost.</p>
            <Link className="text-link" href="/engineering-impact/">View engineering impact</Link>
          </article>
          <article className="panel">
            <p className="eyebrow">Research & writing</p>
            <h3>Enterprise context engineering</h3>
            <p>Technical articles on enterprise AI, AWS Transform single sign-on, and distributed databases, plus an AWS workshop on Apache HBase.</p>
            <Link className="text-link" href="/research/">Browse research and publications</Link>
          </article>
          <article className="panel">
            <p className="eyebrow">Community</p>
            <h3>Hackathon judging & mentoring</h3>
            <p>Judging experience spans university, industry, and community hackathons.</p>
            <Link className="text-link" href="/judging/">View judging experience</Link>
          </article>
        </div>
      </section>
    </>
  );
}
