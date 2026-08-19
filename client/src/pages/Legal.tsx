// Legal pages: Terms of Service and Privacy Policy, in the same editorial voice as the docs.
import { useEffect, type ReactNode } from "react";
import { Link } from "wouter";
import { ArrowLeft, ChevronRight, FileText, Home, Info, LockKeyhole } from "lucide-react";

import logo from "@assets/flunkey_logo.webp";

const markImage = logo;

type LegalSection = { id: string; label: string; body: ReactNode };

function Sub({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="legal-sub">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="legal-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function Callout({ children }: { children: ReactNode }) {
  return <div className="legal-callout">{children}</div>;
}

function LegalHeader() {
  return (
    <header className="docs-header">
      <Link className="brand" href="/">
        <img src={markImage} alt="" />
        <span>flunkey</span>
      </Link>
      <div className="docs-header-right">
        <Link className="docs-icon-link" href="/docs" aria-label="Documentation" title="Documentation">
          <FileText size={16} />
        </Link>
        <Link className="docs-icon-link" href="/about" aria-label="About Flunkey" title="About Flunkey">
          <Info size={16} />
        </Link>
        <Link className="docs-icon-link" href="/" aria-label="Flunkey tour" title="Tour">
          <Home size={16} />
        </Link>
      </div>
    </header>
  );
}

function LegalRail({ sections }: { sections: LegalSection[] }) {
  return (
    <aside className="docs-rail">
      <Link className="back-link" href="/docs">
        <ArrowLeft size={15} /> Back to documentation
      </Link>
      <div className="docs-rail-title">On this page</div>
      {sections.map((section) => (
        <a key={section.id} href={`#${section.id}`}>
          <span>{section.label}</span>
          <ChevronRight size={14} />
        </a>
      ))}
      <div className="docs-rail-note">
        <LockKeyhole size={15} />
        <span>
          Local-first by design.
          <br />
          Your memory stays yours.
        </span>
      </div>
    </aside>
  );
}

function LegalFooter() {
  return (
    <footer className="docs-footer legal-footer">
      <Link className="brand" href="/">
        <img src={markImage} alt="" />
        <span>flunkey</span>
      </Link>
      <div className="docs-legal-wrap">
        <span>Voice-first productivity for Windows.</span>
        <span className="docs-legal-links">
          <Link href="/terms">Terms of Service</Link>
          <i />
          <Link href="/privacy">Privacy Policy</Link>
        </span>
      </div>
    </footer>
  );
}

function LegalShell({
  title,
  lede,
  updated,
  sections,
}: {
  title: ReactNode;
  lede: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="docs-shell legal-shell">
      <LegalHeader />
      <div className="docs-layout">
        <LegalRail sections={sections} />
        <main className="docs-main legal-main">
          <div className="docs-eyebrow">Flunkey / Legal</div>
          <h1>{title}</h1>
          <p className="docs-lede">{lede}</p>
          <div className="docs-updated">{updated}</div>
          {sections.map((section, index) => (
            <section key={section.id} id={section.id} className="legal-section">
              <div className="legal-head">
                <span className="legal-head-num">{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.label}</h2>
              </div>
              <div className="legal-body">{section.body}</div>
            </section>
          ))}
        </main>
      </div>
      <LegalFooter />
    </div>
  );
}

const termsSections: LegalSection[] = [
  {
    id: "acceptance",
    label: "Acceptance of Terms",
    body: (
      <>
        <p>
          By downloading, installing, or using Flunkey (“the App”), you agree to these Terms of Service (“Terms”). If
          you do not agree with any part of these Terms, do not use the App.
        </p>
        <p>
          These Terms are a legal agreement between you (“User” or “you”) and the developer of Flunkey (“we,” “us,” or
          “Flunkey”).
        </p>
      </>
    ),
  },
  {
    id: "description",
    label: "Description of the App",
    body: (
      <>
        <p>
          Flunkey is a Windows desktop application that provides voice-enabled productivity tools using global hotkeys.
          The App’s primary features include:
        </p>
        <Bullets
          items={[
            <>Hold-to-talk transcription and paste-to-cursor functionality (default F8).</>,
            <>Hold-to-talk AI chat and streaming responses in an overlay panel (default F9).</>,
            <>Local storage of voice transcripts and AI chat session history.</>,
            <>Integration with Groq API services for transcription and language model responses.</>,
          ]}
        />
        <p>
          The App is built with Tauri, React, and TypeScript, and uses the Groq API for AI and speech processing.
        </p>
      </>
    ),
  },
  {
    id: "license",
    label: "License Grant & Distribution",
    body: (
      <>
        <p>
          Subject to your compliance with these Terms, Flunkey grants you a limited, non-exclusive, non-transferable,
          revocable license to install and use the App on a single Windows computer for personal, non-commercial
          purposes.
        </p>
        <Sub title="3.1 Free to Use">
          <p>
            Flunkey is provided free of charge for personal use. “Free” refers to the cost of the App itself; use of
            third-party services (for example Groq) may incur separate charges which you are responsible for.
          </p>
        </Sub>
        <Sub title="3.2 Authorized Downloads and Redistribution">
          <p>
            You may download Flunkey only from official distribution channels (for example, our website or authorized
            stores). You may share links to the official download page, but you may NOT redistribute, copy, host,
            republish, or repackage the App (binary, installer, or source) without our express written permission.
            Unauthorized distribution or hosting of the App is a breach of these Terms.
          </p>
        </Sub>
        <Sub title="3.3 Proprietary License">
          <p>
            Flunkey is proprietary software unless explicitly stated otherwise. All rights not expressly granted are
            reserved by us.
          </p>
        </Sub>
        <Sub title="3.4 Prohibited Use">
          <p>You may not:</p>
          <Bullets
            items={[
              <>Reverse engineer, decompile, or disassemble the App.</>,
              <>Modify, adapt, create derivative works of, or distribute the App.</>,
              <>Rent, lease, sublicense, or sell the App.</>,
              <>Use the App for commercial services, consulting, or resale.</>,
              <>Use the App to violate any applicable laws or third-party rights.</>,
              <>Remove or alter any copyright, trademark, or proprietary notices.</>,
            ]}
          />
        </Sub>
      </>
    ),
  },
  {
    id: "responsibilities",
    label: "User Responsibilities",
    body: (
      <>
        <Sub title="4.1 Bring Your Own Key (BYOK)">
          <p>
            Flunkey operates under a BYOK model: the App does not issue API keys. To use transcription and AI features,
            you must provide and configure your own Groq API key. By providing an API key you acknowledge and agree
            that:
          </p>
          <Bullets
            items={[
              <>You are responsible for obtaining, securing, and managing that key.</>,
              <>You are responsible for any charges, limits, or other costs incurred through your use of Groq.</>,
              <>
                Flunkey stores the provided API key locally on your device and uses it to make requests directly from
                your device to Groq; we do not transmit your API key to any Flunkey servers.
              </>,
            ]}
          />
        </Sub>
        <Sub title="4.2 Proper Use">
          <p>
            You agree to use Flunkey responsibly and not to: transmit illegal content, harass, threaten, or defame
            others, violate privacy rights by recording others without consent, or engage in fraud or malicious
            activities.
          </p>
        </Sub>
        <Sub title="4.3 Data Accuracy">
          <p>
            Flunkey does not guarantee the accuracy, completeness, or reliability of transcriptions or AI responses.
            You are responsible for verifying output before relying on it.
          </p>
        </Sub>
      </>
    ),
  },
  {
    id: "thirdparty",
    label: "Third-Party Services",
    body: (
      <>
        <Sub title="5.1 Groq API">
          <p>
            Flunkey uses Groq services to perform speech-to-text transcription and AI chat completions. When you use
            these features, audio and text are sent directly from your device to Groq.
          </p>
          <p>Your use of Groq services is subject to Groq’s terms and privacy policy:</p>
          <Bullets
            items={[
              <>
                <a href="https://www.groq.com/terms" target="_blank" rel="noreferrer">
                  https://www.groq.com/terms
                </a>
              </>,
              <>
                <a href="https://www.groq.com/privacy" target="_blank" rel="noreferrer">
                  https://www.groq.com/privacy
                </a>
              </>,
            ]}
          />
          <p>
            We are not responsible for Groq service availability, pricing, policy changes, or how Groq processes data.
            You should review Groq’s documentation before using Flunkey.
          </p>
        </Sub>
      </>
    ),
  },
  {
    id: "data",
    label: "Data and Storage",
    body: (
      <>
        <Sub title="6.1 Local Storage">
          <p>
            Flunkey stores the following data locally on your machine: Groq API key, app settings, voice transcription
            history, AI chat session history, and system prompts. This data is stored in your Windows user AppData
            folder and is accessible by your Windows account. Flunkey does not transmit this local store to any remote
            Flunkey servers.
          </p>
        </Sub>
        <Sub title="6.2 No Analytics">
          <p>
            Flunkey does not collect analytics, telemetry, or usage data for external reporting by default.
          </p>
        </Sub>
        <Sub title="6.3 Backups and Windows">
          <p>
            Local data may be included in operating system backups (e.g., Windows backups). It is your responsibility
            to manage backups and secure your device.
          </p>
        </Sub>
      </>
    ),
  },
  {
    id: "warranties",
    label: "Disclaimer of Warranties",
    body: (
      <p>
        THE APP IS PROVIDED “AS-IS” AND “AS-AVAILABLE,” WITHOUT WARRANTIES OF ANY KIND. TO THE FULLEST EXTENT PERMITTED
        BY APPLICABLE LAW, WE DISCLAIM ALL IMPLIED AND EXPRESS WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
      </p>
    ),
  },
  {
    id: "liability",
    label: "Limitation of Liability",
    body: (
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, FLUNKEY AND ITS AFFILIATES WILL NOT BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE APP, INCLUDING BUT NOT
        LIMITED TO LOSS OF DATA, PROFITS, GOODWILL, OR OTHER INTANGIBLE LOSSES, EVEN IF ADVISED OF THE POSSIBILITY OF
        SUCH DAMAGES. THIS INCLUDES CHARGES OR COSTS INCURRED VIA YOUR GROQ ACCOUNT.
      </p>
    ),
  },
  {
    id: "termination",
    label: "Termination",
    body: (
      <p>
        We may suspend or terminate your access to features of the App if you materially breach these Terms. Upon
        termination, you must cease using the App and delete any local copies if requested.
      </p>
    ),
  },
  {
    id: "changes",
    label: "Changes to Terms",
    body: (
      <p>
        We may modify these Terms at any time. If we make material changes, we will update the “Last Updated” date at
        the top of this document. Continued use of the App after changes constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: "governing",
    label: "Governing Law",
    body: (
      <p>
        These Terms are governed by the laws of the jurisdiction where the App developer is located. Any dispute
        arising from these Terms will be resolved in that jurisdiction.
      </p>
    ),
  },
  {
    id: "contact",
    label: "Contact Information",
    body: (
      <p>
        For questions about these Terms, contact us at:{" "}
        <a href="mailto:flunkeymanager@gmail.com">flunkeymanager@gmail.com</a>
      </p>
    ),
  },
];

const privacySections: LegalSection[] = [
  {
    id: "introduction",
    label: "Introduction",
    body: (
      <>
        <p>
          Flunkey (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains what
          information Flunkey collects, how it is used, how it is stored, and the choices you have about your data.
        </p>
        <p>
          Flunkey is a Windows desktop application that uses voice input and Groq AI services to provide transcription
          and chat features.
        </p>
      </>
    ),
  },
  {
    id: "collect",
    label: "Information We Collect",
    body: (
      <>
        <Sub title="2.1 Information You Provide">
          <Bullets
            items={[
              <>
                <strong>Groq API Key</strong>: Required to use transcription and AI chat features. Stored locally on
                your device.
              </>,
              <>
                <strong>User Information</strong>: Your name and selected use cases.
              </>,
              <>
                <strong>Settings and Preferences</strong>: Model selection, hotkeys, overlay options, and recording
                settings.
              </>,
              <>
                <strong>Voice Input</strong>: Audio recordings captured only when you hold the configured hotkey.
              </>,
              <>
                <strong>Transcriptions</strong>: Text created from your audio recordings.
              </>,
              <>
                <strong>Chat History</strong>: Your questions and the AI responses returned by Groq.
              </>,
            ]}
          />
        </Sub>
        <Sub title="2.2 Information Collected Automatically">
          <p>
            Flunkey collects only minimal technical data needed to operate the App, such as hotkey activation events
            (F8, F9), microphone permission status, and local configuration states.
          </p>
        </Sub>
        <Sub title="2.3 Information We Do Not Collect">
          <p>
            We do not collect or transmit to our servers: browser history, personal messages, screenshots,
            telemetry/crash reports (by default), IP addresses, or sensitive device identifiers.
          </p>
        </Sub>
        <Sub title="2.4 Bring Your Own Key (BYOK)">
          <p>
            Flunkey is BYOK (Bring Your Own Key). The key is stored locally and used by the app to make requests
            directly to Groq’s servers. We do not host your API key on any Flunkey servers.
          </p>
        </Sub>
      </>
    ),
  },
  {
    id: "use",
    label: "How We Use Information",
    body: (
      <>
        <p>
          The data collected is used to: provide voice transcription and AI chat, store preferences locally, and
          preserve history logs for your review. We do not use your data for marketing or advertising.
        </p>
        <Sub title="3.1 Data Flow">
          <p>
            When you use the App’s AI features, data flows as follows: Your device records audio when you hold a
            hotkey; the app sends the audio to Groq using your Groq API key; Groq returns a transcription or AI
            response; the app stores this transcription and chat history locally on your device.
          </p>
          <p>Data transmitted to Groq is processed according to Groq’s privacy policy and terms.</p>
        </Sub>
      </>
    ),
  },
  {
    id: "storage",
    label: "Local Storage and Security",
    body: (
      <>
        <Sub title="4.1 Where Data is Stored">
          <p>Your data is stored in the local application storage area (typically your Windows AppData folder).</p>
        </Sub>
        <Sub title="4.2 What is Stored Locally">
          <p>
            Groq API key, app settings and preferences, transcription history, AI chat history, and system prompt
            selections.
          </p>
        </Sub>
        <Sub title="4.3 Data Security">
          <p>
            We take reasonable steps to protect local data. However, the Groq API key is stored locally and is not
            encrypted by Flunkey by default. Local files are accessible to anyone with access to your Windows user
            account.
          </p>
        </Sub>
        <Sub title="4.4 Security Recommendations">
          <Bullets
            items={[
              <>Protect your Windows account with a strong password.</>,
              <>Regularly rotate your Groq API key and revoke compromised keys.</>,
              <>Do not enter your API key on shared or untrusted machines.</>,
            ]}
          />
        </Sub>
      </>
    ),
  },
  {
    id: "thirdparty",
    label: "Third-Party Services",
    body: (
      <>
        <Sub title="5.1 Groq API">
          <p>
            Flunkey uses Groq API services for speech-to-text transcription and AI chat completion. When you use these
            features, your audio and text are sent to Groq and processed by their servers. Please review Groq’s privacy
            policy:{" "}
            <a href="https://www.groq.com/privacy" target="_blank" rel="noreferrer">
              https://www.groq.com/privacy
            </a>
          </p>
        </Sub>
      </>
    ),
  },
  {
    id: "sharing",
    label: "Data Sharing and Disclosure",
    body: (
      <p>
        We do not sell or rent your personal information. We may disclose information only if required by law, such as
        to comply with a legal process or investigate fraud/misuse.
      </p>
    ),
  },
  {
    id: "retention",
    label: "Data Retention and Deletion",
    body: (
      <>
        <Sub title="7.1 Retention">
          <p>We retain your data locally for as long as you keep using the App and until you delete it.</p>
        </Sub>
        <Sub title="7.2 Deletion">
          <p>
            You may delete your data by using the App’s “Wipe all data” feature in Settings. This removes all local
            JSON stores, history logs, and keys from your system.
          </p>
        </Sub>
      </>
    ),
  },
  {
    id: "security",
    label: "Security",
    body: (
      <>
        <p>
          Flunkey takes reasonable steps to protect your local data, but no software can guarantee complete security.
        </p>
        <Sub title="8.1 Security Measures">
          <p>
            Local storage in the Windows AppData folder, microphone access only when hotkeys are active, and no
            external telemetry by default.
          </p>
        </Sub>
        <Sub title="8.2 Security Limitations">
          <p>
            Stored API key is not encrypted by Flunkey by default. Local files may still be accessible through your
            Windows account if it is compromised.
          </p>
        </Sub>
      </>
    ),
  },
  {
    id: "rights",
    label: "Your Rights",
    body: (
      <>
        <Sub title="9.1 Access and Control">
          <p>
            You can view your stored data through the Flunkey app interface and update preferences in Settings.
          </p>
        </Sub>
        <Sub title="9.2 Delete Your Data">
          <p>Use the “Wipe all data” button in Settings to purge your local profile.</p>
        </Sub>
        <Sub title="9.3 Data Portability & Requests">
          <p>
            If you need a copy of your local data or have privacy requests, contact us at{" "}
            <a href="mailto:flunkeymanager@gmail.com">flunkeymanager@gmail.com</a>.
          </p>
        </Sub>
      </>
    ),
  },
  {
    id: "children",
    label: "Children",
    body: (
      <p>
        Flunkey is not intended for use by children under 13. If you are under 13, do not use the App without adult
        supervision.
      </p>
    ),
  },
  {
    id: "changes",
    label: "Changes to this Privacy Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will update the “Last Updated” date.
        Continued use of the App after changes constitutes acceptance of the revised policy.
      </p>
    ),
  },
  {
    id: "contact",
    label: "Contact Information",
    body: (
      <p>
        If you have questions about this Privacy Policy, contact us at:{" "}
        <a href="mailto:flunkeymanager@gmail.com">flunkeymanager@gmail.com</a>
      </p>
    ),
  },
];

export function Terms() {
  useEffect(() => {
    document.title = "Terms of Service — Flunkey";
    return () => {
      document.title = "Flunkey — Voice-first productivity for Windows";
    };
  }, []);
  return (
    <LegalShell
      title={
        <>
          Terms of <em>Service.</em>
        </>
      }
      lede="The agreement that governs how Flunkey is licensed, how you may use it, and what to expect from a local-first app."
      updated="Last updated on June 21, 2026."
      sections={termsSections}
    />
  );
}

export function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy — Flunkey";
    return () => {
      document.title = "Flunkey — Voice-first productivity for Windows";
    };
  }, []);
  return (
    <LegalShell
      title={
        <>
          Privacy <em>Policy.</em>
        </>
      }
      lede="Flunkey is committed to protecting your privacy. This policy explains what information the app collects, how it is used, how it is stored, and the choices you have about your data."
      updated="Last updated on June 21, 2026."
      sections={privacySections}
    />
  );
}
