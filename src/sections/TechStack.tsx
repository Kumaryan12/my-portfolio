import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { Icon } from "@iconify/react";

const CATEGORY_ICONS: Record<string, string> = {
  All: "lucide:layers",
  Languages: "lucide:code-2",
  "ML & Data": "lucide:brain-circuit",
  "Vision & NLP": "lucide:scan-search",
  Backend: "lucide:server",
  Tools: "lucide:terminal",
};

const SKILL_ICONS: Record<string, string> = {
  SQL: "lucide:database",
  C: "logos:c",
  "Next.js": "logos:nextjs-icon",
  PyTorch: "logos:pytorch-icon",
  "scikit-learn": "logos:scikit-learn",
  Pandas: "logos:pandas-icon",
  NumPy: "logos:numpy",
  PostgreSQL: "logos:postgresql",
  Supabase: "logos:supabase-icon",
  Firebase: "logos:firebase",
  "REST APIs": "lucide:cpu",
  FastAPI: "logos:fastapi-icon",
  Git: "logos:git-icon",
  GitHub: "logos:github-icon",
  "C++": "logos:c-plusplus",
  Python: "logos:python",
};

const skillCategories: Record<string, string[]> = {
  Languages: ["Python", "SQL", "C", "C++"],
  "ML & Data": ["PyTorch", "scikit-learn", "Pandas", "NumPy"],
  "Vision & NLP": ["YOLO", "SegFormer", "CNNs", "LSTMs", "GRUs", "Transformers", "XLM-R", "RAG", "ChromaDB"],
  Backend: ["FastAPI", "REST APIs", "Firebase", "Supabase", "PostgreSQL", "Firestore"],
  Tools: ["Git", "GitHub"],
};

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  if (!site.skills.length) return null;

  const categories = ["All", "Languages", "ML & Data", "Vision & NLP", "Backend", "Tools"];

  const filteredSkills = activeCategory === "All"
    ? site.skills
    : site.skills.filter((skill) => skillCategories[activeCategory]?.includes(skill));

  return (
    <div id="skills">
      <SectionHeader
        title="Tech Stack"
        aside={
          <span className="hidden font-mono text-[10px] tracking-wider text-[var(--soft)] sm:inline">
            ( select tab to filter )
          </span>
        }
      />
      <Shell className="px-6 py-6 sm:px-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 rounded-lg border border-[var(--line)] bg-[var(--chip)] p-1">
          {categories.map((cat) => {
            const iconName = CATEGORY_ICONS[cat] || "lucide:layers";
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[12px] font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[var(--fg)] text-[var(--bg)] shadow-sm font-semibold"
                    : "text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--fg)]"
                }`}
              >
                <Icon icon={iconName} width={14} height={14} className="size-3.5" />
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Items Grid */}
        <motion.div layout className="mt-6 flex flex-wrap gap-2.5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const iconName = SKILL_ICONS[skill] || "lucide:code-2";
              const isShadcn = iconName === "simple-icons:shadcnui";
              return (
                <motion.span
                  key={skill}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 25 }}
                  className="flex cursor-default items-center gap-2 rounded-md border border-[var(--line)] bg-[var(--card)] px-3 py-1.5 font-mono text-[12px] text-[var(--muted)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--fg)] hover:bg-[var(--fg)] hover:text-[var(--bg)] shadow-xs group"
                >
                  <Icon 
                    icon={iconName} 
                    width={16}
                    height={16}
                    className={`size-4 shrink-0 transition-colors ${
                      isShadcn ? "text-current" : ""
                    } group-hover:filter group-hover:brightness-110`} 
                  />
                  {skill}
                </motion.span>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </Shell>
    </div>
  );
}

export default TechStack;
