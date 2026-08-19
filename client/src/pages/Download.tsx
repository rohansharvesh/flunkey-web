// Download page: MVP beta launch, direct Windows installer, and BYOK setup notes.
import { Link } from "wouter";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  FileText,
  Home,
  Info,
  KeyRound,
  LockKeyhole,
  Monitor,
  Send,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";

import logo from "@assets/flunkey_logo.webp";
import installerUrl from "@assets/Flunkey_0.1.0_x64-setup.exe?url";

const markImage = logo;
const setupName = "Flunkey_0.1.0_x64-setup.exe";

function DownloadHeader() {
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

function DownloadFooter() {
  return (
    <footer className="docs-footer download-footer">
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

export default function Download() {
  return (
    <div className="docs-shell download-shell">
      <DownloadHeader />
      <main className="docs-main download-main">
        <section className="download-hero">
          <div className="docs-eyebrow">Flunkey 0.1.0 · public beta</div>
          <h1>
            Download Flunkey <em>for Windows.</em>
          </h1>
          <p className="docs-lede">
            The voice-first productivity layer is now in open beta — free, unlimited, and completely local. Bring your
            own Groq API key and start speaking.
          </p>
          <div className="download-actions">
            <a className="download-btn" href={installerUrl} download={setupName}>
              <ArrowDown size={18} /> Download for Windows
            </a>
            <span className="download-secondary">
              <strong>{setupName}</strong>
              ~14 MB · Windows 10 / 11 · x64
            </span>
          </div>
          <div className="download-callout">
            <Zap size={17} />
            <p>
              <strong>Beta launch note.</strong> Flunkey 0.1.0 is an MVP, so expect rough edges and rapid fixes. The app
              is free with no usage limits; transcription and AI chat run through your own Groq API key, so any Groq
              usage charges are yours.
            </p>
          </div>
        </section>

        <section className="download-section">
          <span className="docs-section-kicker">Why it stays free</span>
          <h2>
            Local, unlimited, <em>yours.</em>
          </h2>
          <div className="download-grid">
            <div className="download-card">
              <LockKeyhole size={19} />
              <strong>Completely local</strong>
              <span>Transcripts, chat history, settings, and your API key stay on your machine. Nothing is sent to
                Flunkey servers.</span>
            </div>
            <div className="download-card">
              <Zap size={19} />
              <strong>Free & unlimited</strong>
              <span>No subscriptions, no per-minute pricing, no caps baked into the app. The only cost is whatever
                Groq charges your own key.</span>
            </div>
            <div className="download-card">
              <KeyRound size={19} />
              <strong>Bring your own key</strong>
              <span>Flunkey doesn’t issue API keys. Create a free Groq account, paste your key once, and the app
                handles the rest.</span>
            </div>
          </div>
        </section>

        <section className="download-section">
          <span className="docs-section-kicker">Setup in four steps</span>
          <h2>
            From download <em>to talking.</em>
          </h2>
          <div className="download-steps">
            <div className="download-step">
              <span className="download-step-num">1</span>
              <div>
                <h3>Download the installer</h3>
                <p>
                  Grab <strong>{setupName}</strong> above and run it on Windows 10 or 11 (64-bit). No account is
                  needed to install.
                </p>
              </div>
            </div>
            <div className="download-step">
              <span className="download-step-num">2</span>
              <div>
                <h3>Get a Groq API key</h3>
                <p>
                  Create a free account at{" "}
                  <a href="https://console.groq.com" target="_blank" rel="noreferrer">
                    console.groq.com
                  </a>{" "}
                  and generate an API key. It takes about a minute and doesn’t require a card.
                </p>
              </div>
            </div>
            <div className="download-step">
              <span className="download-step-num">3</span>
              <div>
                <h3>Onboard in the app</h3>
                <p>
                  Launch Flunkey. The built-in onboarding will ask for your Groq key and walk you through preferences —
                  the essentials are covered here, the app handles the rest.
                </p>
              </div>
            </div>
            <div className="download-step">
              <span className="download-step-num">4</span>
              <div>
                <h3>Choose hotkeys & speak</h3>
                <p>
                  Use the defaults — <strong>F8</strong> to transcribe at the cursor, <strong>F9</strong> for the AI
                  assistant overlay — or set your own in Settings.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="download-section">
          <span className="docs-section-kicker">What’s inside 0.1.0</span>
          <h2>
            The essentials, <em>done well.</em>
          </h2>
          <div className="doc-check-list download-checks">
            <div><Check size={15} /> Hold-to-talk transcription at the cursor (default F8)</div>
            <div><Check size={15} /> AI chat with streaming overlay (default F9)</div>
            <div><Check size={15} /> Local transcripts and chat history</div>
            <div><Check size={15} /> Hotkey, model, and system-prompt settings</div>
          </div>
        </section>

        <section className="download-section">
          <span className="docs-section-kicker">Know before you go</span>
          <h2>
            Beta <em>expectations.</em>
          </h2>
          <div className="download-note-card">
            <Wand2 size={17} />
            <div>
              <strong>The app includes onboarding</strong>
              <p>
                Setup guidance lives inside Flunkey, so this page only covers the essentials. If you get stuck, the
                docs walk through every feature.
              </p>
            </div>
          </div>
          <div className="download-requirements">
            <div><Monitor size={15} /> Windows 10 or 11 (64-bit)</div>
            <div><Sparkles size={15} /> Internet connection for Groq calls</div>
            <div><KeyRound size={15} /> A Groq API key</div>
            <div><ArrowUpRight size={15} /> ~140 MB of disk space</div>
          </div>
          <div className="download-note-card">
            <Send size={17} />
            <div>
              <strong>Your key, your costs</strong>
              <p>
                Transcription and AI run through your own Groq key. Keep an eye on usage in your Groq console, and
                reach out at <a href="mailto:flunkeymanager@gmail.com">flunkeymanager@gmail.com</a> with any feedback.
              </p>
            </div>
          </div>
        </section>
      </main>
      <DownloadFooter />
    </div>
  );
}