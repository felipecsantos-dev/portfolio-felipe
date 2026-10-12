import { siCss, siGit, siGithub, siHtml5, siJavascript, siPython } from "simple-icons";
import type { TechSlug } from "./content";

export const tech: Record<TechSlug, { title: string; path: string }> = {
  html5: { title: "HTML", path: siHtml5.path },
  css: { title: "CSS", path: siCss.path },
  git: { title: "Git", path: siGit.path },
  github: { title: "GitHub", path: siGithub.path },
  javascript: { title: "JavaScript", path: siJavascript.path },
  python: { title: "Python", path: siPython.path },
};
