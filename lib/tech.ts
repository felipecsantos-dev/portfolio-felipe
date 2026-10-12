import {
  siCss,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import type { TechSlug } from "./content";

export const tech: Record<TechSlug, { title: string; path: string }> = {
  html5: { title: "HTML", path: siHtml5.path },
  css: { title: "CSS", path: siCss.path },
  javascript: { title: "JavaScript", path: siJavascript.path },
  typescript: { title: "TypeScript", path: siTypescript.path },
  react: { title: "React", path: siReact.path },
  nextdotjs: { title: "Next.js", path: siNextdotjs.path },
  tailwindcss: { title: "Tailwind CSS", path: siTailwindcss.path },
  nodedotjs: { title: "Node.js", path: siNodedotjs.path },
  git: { title: "Git", path: siGit.path },
  github: { title: "GitHub", path: siGithub.path },
  figma: { title: "Figma", path: siFigma.path },
};
