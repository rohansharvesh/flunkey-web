// Quiet Intelligence: warm editorial minimalism, cream surfaces, ink typography, and one orange signal color.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Docs from "./pages/Docs";
import Home from "./pages/Home";
import About from "./pages/About";
import Download from "./pages/Download";
import { Privacy, Terms } from "./pages/Legal";
import { useEffect } from "react";
import { useLocation } from "wouter";

const SITE_URL = "https://flunky.space";
const DEFAULT_TITLE = "Flunkey — Voice-first productivity for Windows";
const DEFAULT_DESCRIPTION = "Flunkey is a voice-first productivity layer for Windows that turns spoken thoughts into clean text, useful AI actions, and remembered context.";

const pageSeo: Record<string, { title: string; description: string; type?: string; noindex?: boolean }> = {
  "/": { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, type: "WebSite" },
  "/docs": { title: "Flunkey Documentation — Voice, AI actions, memory, and privacy", description: "Learn how Flunkey turns speech into text, useful AI actions, rewrites, connected-tool actions, and personal memory on Windows." },
  "/about": { title: "About Flunkey — Built for the thought between thinking and doing", description: "Learn why Flunkey was built, how its BYOK Groq model works, and why this Windows productivity tool is designed local-first." },
  "/download": { title: "Download Flunkey for Windows — Public Beta", description: "Download the free Flunkey 0.1.0 public beta for Windows 10 and 11. Bring your own Groq API key and turn spoken thoughts into useful work." },
  "/terms": { title: "Terms of Service — Flunkey", description: "Read the Terms of Service for using the Flunkey Windows desktop application." },
  "/privacy": { title: "Privacy Policy — Flunkey", description: "Read how Flunkey handles local storage, API requests, connected services, and personal data." },
};

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function Seo() {
  const [location] = useLocation();

  useEffect(() => {
    const path = location.split("?")[0] || "/";
    const metadata = pageSeo[path] ?? { title: "Page not found — Flunkey", description: "The requested Flunkey page could not be found.", noindex: true };
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;
    document.title = metadata.title;
    setMeta("name", "description", metadata.description);
    setMeta("name", "robots", metadata.noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:type", metadata.type ?? "article");
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const existingSchema = document.getElementById("flunkey-schema");
    existingSchema?.remove();
    if (!metadata.noindex) {
      const schema = document.createElement("script");
      schema.id = "flunkey-schema";
      schema.type = "application/ld+json";
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": metadata.type ?? "WebPage",
        name: metadata.title,
        description: metadata.description,
        url,
        isPartOf: { "@type": "WebSite", name: "Flunkey", url: SITE_URL },
      });
      document.head.appendChild(schema);
    }
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/docs" component={Docs} />
      <Route path="/about" component={About} />
      <Route path="/download" component={Download} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Seo />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
