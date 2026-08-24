import { site } from "@/config/site";
import { Writing } from "@/components/writing";
import { Reveal } from "@/components/reveal";
import { Award } from "lucide-react";

export function WritingPage() {
  return (
    <main className="min-h-screen pt-28 pb-16">
      <div className="mx-auto w-full max-w-5xl px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
            03 / Credentials & Recognition
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-neutral-100 font-normal mt-2">
            Certifications & Achievements
          </h1>
          <p className="mt-3 text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Verified learning credentials, competitive milestones, leadership, and responsibilities beyond the classroom.
          </p>
        </Reveal>

        {site.writing.length > 0 ? (
          <Writing />
        ) : (
          <Reveal delay={0.1}>
            <div className="mt-8 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-8 backdrop-blur-md text-center">
              <Award size={32} className="text-neutral-500 mx-auto mb-3" />
              <h3 className="font-serif text-2xl text-neutral-200">Credentials Coming Soon</h3>
              <p className="mt-2 text-neutral-400 text-sm max-w-md mx-auto">
                New certifications and learning milestones will be added here.
              </p>
            </div>
          </Reveal>
        )}

        {/* Achievements Card */}
        <Reveal delay={0.2}>
          <div className="mt-12 rounded-3xl border border-neutral-800 bg-neutral-900/40 p-8 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl border border-neutral-800 bg-neutral-950 text-emerald-400">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-neutral-100 text-lg">Achievements & Responsibility</h3>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {site.achievements.map((achievement) => (
                <li key={achievement} className="flex gap-2 text-sm leading-relaxed text-neutral-400">
                  <span className="font-mono text-emerald-400">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
