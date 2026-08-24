import { motion } from "framer-motion";
import { Shell, SectionHeader } from "@/components/Layout";
import { site } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export function Writing() {
  if (!site.writing || site.writing.length === 0) return null;

  return (
    <div id="writing">
      <SectionHeader
        title="Certifications"
        aside={<span className="font-mono text-[10px] uppercase tracking-wider text-[var(--soft)]">Verified credentials</span>}
      />
      <Shell>
        <div className="divide-y divide-[var(--line)]">
          {site.writing.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 px-6 py-5 sm:px-8 hover:bg-[var(--hover)] transition-colors duration-200 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6 flex-1 min-w-0">
                <span className="font-mono text-[11px] text-[var(--soft)] w-20 shrink-0">
                  {post.date}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-[18px] text-[var(--fg)] group-hover:text-[var(--muted)] transition-colors font-medium leading-snug flex items-center gap-1.5">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-[var(--muted)] leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0 font-mono text-[11px] text-[var(--soft)] mt-2 sm:mt-0">
                {post.readingTime && <span>{post.readingTime}</span>}
                <ArrowUpRight className="size-3.5 text-[var(--soft)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--fg)]" />
              </div>
            </motion.a>
          ))}
        </div>
      </Shell>
    </div>
  );
}

export default Writing;
