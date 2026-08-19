// Guided Flunkey tour: split-screen welcome, persistent brand rail, keyboard-accessible sequential feature education.
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Brain, Check, ChevronRight, Command, FileText, Info, Keyboard, LockKeyhole, Menu, Mic, Network, PenLine, Sparkles, X, Zap } from "lucide-react";

import logo from "@assets/flunkey_logo.webp";
import smiley from "@assets/smiley.svg";

const markImage = logo;
const loaderMarkImage = logo;

type TourStep = { eyebrow: string; title: string; accent: string; body: string; icon: typeof Mic; detail: string; chips: string[]; visual: "voice" | "action" | "rewrite" | "memory" | "mcp" | "privacy" };

const steps: TourStep[] = [
  { eyebrow: "01 / voice capture", title: "Your voice,\nat the cursor.", accent: "", body: "One hotkey turns what you say into clean, formatted text wherever your cursor already is. No tab. No copy-paste. No breaking your train of thought.", icon: Mic, detail: "Hold ⌥ space, speak naturally, release.", chips: ["Any app", "Auto punctuation", "Custom vocabulary"], visual: "voice" },
  { eyebrow: "02 / AI actions", title: "A thought becomes\na next step.", accent: "", body: "A second hotkey lets Flunkey understand the messy version and turn it into something useful: a task, note, reminder, answer, or draft.", icon: Sparkles, detail: "Say it once. Review the result. Keep moving.", chips: ["To-dos", "Notes", "Reminders", "Answers"], visual: "action" },
  { eyebrow: "03 / rewriting", title: "Keep the meaning.\nChange the shape.", accent: "", body: "Make a rough thought shorter, clearer, warmer, or more direct without starting over. Flunkey gives you a second draft that still sounds like you.", icon: PenLine, detail: "Editable before anything is finalized.", chips: ["Shorten", "Change tone", "Keep your voice"], visual: "rewrite" },
  { eyebrow: "04 / personal memory", title: "It remembers the\nthread, not everything.", accent: "", body: "Flunkey turns your captures into a searchable personal memory. Ask about a project, a person, or an idea from last week and get the relevant context.", icon: Brain, detail: "View it. Correct it. Exclude it. Delete it.", chips: ["Relevant retrieval", "Digests", "Topic clusters"], visual: "memory" },
  { eyebrow: "05 / connected tools", title: "Your tools become\npart of the sentence.", accent: "", body: "Connect Gmail, Calendar, Slack, Discord, Notion, and other MCP-compatible services. Flunkey prepares the action and waits for your approval.", icon: Network, detail: "Capability never removes your final say.", chips: ["MCP-ready", "Cross-tool actions", "Edit then confirm"], visual: "mcp" },
  { eyebrow: "06 / privacy & control", title: "Useful should never\nmean out of your hands.", accent: "", body: "Run local-first, choose local-only when you need it, redact sensitive topics, and see exactly what Flunkey stores. Trust is part of the product.", icon: LockKeyhole, detail: "Your memory stays yours.", chips: ["Local-first", "Export or delete", "Redaction controls"], visual: "privacy" },
];

function LaunchBanner() {
  return (
    <Link className="launch-banner" href="/download">
      <span className="launch-banner-tag">Beta launch</span>
      <span>Flunkey 0.1.0 is here — free, unlimited, and completely local.</span>
      <span className="launch-banner-cta">Download for Windows <ArrowRight size={13} /></span>
    </Link>
  );
}

function TopBar({ onMenu }: { onMenu: () => void }) {
  return <header className="tour-topbar"><a className="tour-brand" href="#top" aria-label="Flunkey home"><img src={smiley} alt="" /><span>flunkey</span></a><div className="tour-top-actions"><Link className="tour-docs-link" href="/docs" aria-label="Documentation" title="Documentation"><FileText size={16} /></Link><Link className="tour-docs-link" href="/about" aria-label="About Flunkey" title="About Flunkey"><Info size={16} /></Link><button className="tour-menu-button" onClick={onMenu} aria-label="Open menu"><Menu size={19} /></button></div></header>;
}

function PixelField({ step }: { step?: TourStep }) {
  const Icon = step?.icon || Zap;
  return <div className="pixel-field"><div className="pixel-grid" /><div className="pixel-orbit orbit-one" /><div className="pixel-orbit orbit-two" /><div className={`field-visual ${step ? `field-${step.visual}` : "field-welcome"}`}>
    {step ? <><div className="field-icon"><Icon size={42} strokeWidth={1.35} /></div><span className="field-number">{step.eyebrow.split(" /")[0]}</span>{step.visual === "voice" && <div className="field-wave">{[1,2,3,4,5,6,7,8,9].map(n => <i key={n} style={{ height: `${10 + ((n * 7) % 24)}px` }} />)}</div>}{step.visual === "action" && <div className="field-flow"><span>say</span><i>→</i><span>sort</span><i>→</i><span>do</span></div>}{step.visual === "rewrite" && <div className="field-rewrite"><span>rough thought</span><i>↘</i><strong>clear sentence</strong></div>}{step.visual === "memory" && <div className="field-memory"><span /><span /><span /><span /><span /></div>}{step.visual === "mcp" && <div className="field-connect"><span>mail</span><i>+</i><span>calendar</span></div>}{step.visual === "privacy" && <div className="field-lock"><LockKeyhole size={22} /><span>under your control</span></div>}</> : <><div className="welcome-mark"><img src={loaderMarkImage} alt="" /></div><div className="field-caption">voice-first productivity</div><div className="field-scanline" /></>}
  </div><div className="field-corner corner-tl" /><div className="field-corner corner-br" /></div>;
}

function StepVisual({ step }: { step: TourStep }) {
  if (step.visual === "voice") return <div className="tour-demo-card"><div className="tour-window-bar"><span>flunkey / transcription</span><span className="live-dot" /> ready</div><div className="demo-prompt"><Keyboard size={18} /><span>⌥ space</span><small>listening</small></div><div className="demo-wave-row">{[1,2,3,4,5,6,7,8,9,10,11,12].map(n => <i key={n} style={{ height: `${12 + ((n * 9) % 30)}px` }} />)}</div><p>“Send the notes to the team when you have a minute.”</p><div className="demo-output"><Check size={14} /> Send the notes to the team when you have a minute.</div></div>;
  if (step.visual === "action") return <div className="tour-demo-card"><div className="tour-window-bar"><span>flunkey / AI action</span><span className="approval-pill">review first</span></div><div className="demo-said"><span>you said</span><p>“Remind me to send Priya the budget notes tomorrow.”</p></div><div className="demo-action-list"><div><Check size={14} /><span><strong>Reminder</strong>Tomorrow · 9:00 AM</span></div><div><FileText size={14} /><span><strong>Email draft</strong>To Priya · editable</span></div></div><div className="demo-foot"><LockKeyhole size={13} /> Nothing sends without your say</div></div>;
  if (step.visual === "rewrite") return <div className="tour-demo-card"><div className="tour-window-bar"><span>flunkey / rewrite</span><span className="approval-pill green">editable</span></div><div className="rewrite-mini before"><span>before</span><p>“Could we maybe find a time next week to talk about this?”</p></div><div className="rewrite-mini after"><span>after · clearer</span><p>“Could we schedule time next week to discuss this?”</p></div><div className="demo-foot"><PenLine size={13} /> Edit before you use it</div></div>;
  if (step.visual === "memory") return <div className="tour-demo-card memory-demo"><div className="tour-window-bar"><span>flunkey / memory</span><span className="approval-pill">searching</span></div><div className="memory-search"><Brain size={15} /><span>What did I say about Q3?</span></div><div className="memory-result"><span className="memory-line" /><div><strong>Q3 budget notes</strong><p>Captured last Tuesday · 3 relevant moments</p></div></div><div className="memory-result"><span className="memory-line short" /><div><strong>Priya · planning</strong><p>Connected context · 1 relevant thread</p></div></div></div>;
  if (step.visual === "mcp") return <div className="tour-demo-card"><div className="tour-window-bar"><span>flunkey / connected tools</span><span className="approval-pill green">3 connected</span></div><div className="tool-row"><span className="tool-tile">G</span><span className="tool-tile">C</span><span className="tool-tile">S</span><span className="tool-plus">+</span></div><div className="mcp-sentence">“Note this, remind me tomorrow, and send it to the team.”</div><div className="demo-foot"><Network size={13} /> One sentence · three prepared actions</div></div>;
  return <div className="tour-demo-card privacy-demo"><div className="tour-window-bar"><span>flunkey / control center</span><span className="approval-pill green">local-only</span></div><div className="privacy-controls"><div><LockKeyhole size={18} /><span><strong>Local-only mode</strong><small>Nothing leaves this machine</small></span><i /></div><div><Brain size={18} /><span><strong>Memory visibility</strong><small>View and manage stored context</small></span><i /></div><div><Zap size={18} /><span><strong>Action approval</strong><small>Always review before sending</small></span><i /></div></div></div>;
}

export default function Home() {
  const [stepIndex, setStepIndex] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = stepIndex >= 0 ? steps[stepIndex] : undefined;
  const next = () => setStepIndex(index => Math.min(index + 1, steps.length - 1));
  const previous = () => setStepIndex(index => Math.max(index - 1, -1));
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (event.key === "ArrowRight" || event.key === "Enter") { event.preventDefault(); next(); } if (event.key === "ArrowLeft") { event.preventDefault(); previous(); } if (event.key === "Escape") setMenuOpen(false); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, []);
  return <div className="tour-shell" id="top"><LaunchBanner /><TopBar onMenu={() => setMenuOpen(true)} />{menuOpen && <div className="tour-menu-overlay" role="dialog" aria-modal="true"><button className="tour-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20} /></button><span className="section-kicker">Flunkey tour</span><h2>Start with the<br /><em>part that matters.</em></h2><nav>{steps.map((tourStep, index) => <button key={tourStep.eyebrow} onClick={() => { setStepIndex(index); setMenuOpen(false); }}><span>{tourStep.eyebrow}</span><strong>{tourStep.title.replace("\n", " ")}</strong><ChevronRight size={16} /></button>)}</nav><Link href="/docs" className="menu-docs">Open full documentation <ArrowRight size={15} /></Link></div>}
    <main className="tour-main">{!active ? <section className="welcome-screen"><PixelField /><div className="welcome-copy"><div className="tour-kicker">A guided introduction to Flunkey</div><h1>The shortest path from<br /><em>thought to useful.</em></h1><p>Flunkey is a voice-first productivity layer for Windows. Learn how it turns spoken ideas into text, action, and remembered context — one feature at a time.</p><div className="welcome-actions"><button className="tour-primary" onClick={next}>Learn Flunkey <ArrowRight size={17} /></button></div><div className="welcome-meta"><span><Zap size={14} /> 6 short chapters</span><span><Keyboard size={14} /> Use ← → to move</span></div></div></section> : <section className="feature-screen"><div className="feature-copy"><div className="tour-kicker">{active.eyebrow}</div><h1>{active.title.split("\n").map((line, index) => <span key={line} className={index === active.title.split("\n").length - 1 ? "accent-line" : ""}>{line}<br /></span>)}</h1><p>{active.body}</p><div className="feature-detail"><span className="detail-icon"><active.icon size={17} /></span><span>{active.detail}</span></div><div className="feature-chips">{active.chips.map(chip => <span key={chip}>{chip}</span>)}</div><div className="tour-controls"><button className="tour-secondary" onClick={previous} disabled={stepIndex === 0}><ArrowLeft size={16} /> Back</button>{stepIndex < steps.length - 1 ? <button className="tour-primary" onClick={next}>Next feature <ArrowRight size={16} /></button> : <Link className="tour-primary" href="/docs">Read the docs <ArrowRight size={16} /></Link>}</div><div className="tour-progress"><span>{String(stepIndex + 1).padStart(2, "0")}</span><div><i style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }} /></div><span>{String(steps.length).padStart(2, "0")}</span></div></div><div className="feature-visual"><PixelField step={active} /><StepVisual step={active} /></div></section>}
    </main>
    <footer className="tour-footer"><span>Flunkey · voice-first productivity for Windows</span><span>{active ? `${String(stepIndex + 1).padStart(2, "0")} / ${String(steps.length).padStart(2, "0")}` : "intro"}</span></footer>
  </div>;
}
