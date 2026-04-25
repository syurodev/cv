import { RESUME_DATA } from "@/data/resume-data";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | CV`,
  description: RESUME_DATA.about,
};

export default function FaangCVPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl bg-white px-10 py-8 text-black print:px-0 print:py-0">
      {/* Header */}
      <header className="mb-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          {RESUME_DATA.name}
        </h1>
        <div className="mt-1.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-gray-800">
          <a
            href={RESUME_DATA.locationLink}
            target="_blank"
            className="flex items-center gap-1 hover:underline"
          >
            <GlobeIcon className="h-3 w-3" />
            {RESUME_DATA.location}
          </a>
          {RESUME_DATA.contact.email && (
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="flex items-center gap-1 hover:underline"
            >
              <MailIcon className="h-3 w-3" />
              {RESUME_DATA.contact.email}
            </a>
          )}
          {RESUME_DATA.contact.tel && (
            <a
              href={`tel:${RESUME_DATA.contact.tel}`}
              className="flex items-center gap-1 hover:underline"
            >
              <PhoneIcon className="h-3 w-3" />
              {RESUME_DATA.contact.tel}
            </a>
          )}
          {/* {RESUME_DATA.contact.social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              className="flex items-center gap-1 hover:underline"
            >
              <s.icon className="h-3 w-3" />
              {s.name}
            </a>
          ))} */}
        </div>
      </header>

      <hr className="border-black" />

      {/* Summary */}
      <section className="mb-4 mt-3">
        <h2 className="mb-1 text-sm font-bold uppercase tracking-widest">
          Summary
        </h2>
        <hr className="mb-2 border-black" />
        <p className="text-sm leading-relaxed text-gray-800">
          {RESUME_DATA.about}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-gray-800">
          <span className="font-semibold">Career Goal:</span> {RESUME_DATA.goal}
        </p>
      </section>

      {/* Skills */}
      <section className="mb-4">
        <h2 className="mb-1 text-sm font-bold uppercase tracking-widest">
          Technical Skills
        </h2>
        <hr className="mb-2 border-black" />
        <div className="space-y-0.5">
          {Object.entries(RESUME_DATA.skills).map(([category, skills]) => (
            <p key={category} className="text-sm leading-relaxed">
              <span className="font-semibold">{category}:</span>{" "}
              <span className="text-gray-800">
                {(skills as readonly string[]).join(", ")}
              </span>
            </p>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-4">
        <h2 className="mb-1 text-sm font-bold uppercase tracking-widest">
          Work Experience
        </h2>
        <hr className="mb-2 border-black" />
        <div className="space-y-4">
          {RESUME_DATA.work.map((job) => (
            <div key={job.company}>
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-sm font-bold">
                    {job.link ? (
                      <a
                        href={job.link}
                        target="_blank"
                        className="hover:underline"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </span>
                  <span className="mx-2 text-gray-400">·</span>
                  <span className="text-sm font-semibold text-gray-800">
                    {job.title}
                  </span>
                </div>
                <span className="shrink-0 text-xs tabular-nums text-gray-800">
                  {job.start} – {job.end}
                </span>
              </div>

              <p className="mt-1 text-sm leading-relaxed text-gray-800">
                {job.description}
              </p>

              {job.projects && job.projects.length > 0 && (
                <div className="mt-2 space-y-3 pl-4">
                  {job.projects.map((project) => (
                    <div
                      key={project.title}
                      className="border-l-2 border-gray-300 pl-3"
                    >
                      <div className="flex items-baseline justify-between">
                        <p className="text-sm font-semibold">
                          {project.link?.href ? (
                            <a
                              href={project.link.href}
                              target="_blank"
                              className="hover:underline"
                            >
                              {project.title}
                            </a>
                          ) : (
                            project.title
                          )}
                        </p>
                        {"teamSize" in project && project.teamSize && (
                          <span className="text-xs text-gray-800">
                            Team: {project.teamSize}
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs leading-relaxed text-gray-800">
                        {project.description}
                      </p>
                      {project.tasks && project.tasks.length > 0 && (
                        <ul className="mt-1 space-y-0.5">
                          {(project.tasks as readonly string[]).map(
                            (task, i) => {
                              const colonIdx = task.indexOf(":");
                              const hasColon = colonIdx !== -1;
                              return (
                                <li
                                  key={i}
                                  className="flex gap-1.5 text-xs leading-relaxed text-gray-800"
                                >
                                  <span className="mt-px shrink-0">•</span>
                                  <span>
                                    {hasColon ? (
                                      <>
                                        <span className="font-semibold">
                                          {task.slice(0, colonIdx)}
                                        </span>
                                        {task.slice(colonIdx)}
                                      </>
                                    ) : (
                                      task
                                    )}
                                  </span>
                                </li>
                              );
                            },
                          )}
                        </ul>
                      )}
                      <p className="mt-1 text-xs text-gray-800">
                        <span className="font-medium">Tech:</span>{" "}
                        {(project.techStack as readonly string[]).join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-4">
        <h2 className="mb-1 text-sm font-bold uppercase tracking-widest">
          Education
        </h2>
        <hr className="mb-2 border-black" />
        <div className="space-y-2">
          {RESUME_DATA.education.map((edu) => (
            <div key={edu.school}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-bold">{edu.school}</span>
                <span className="text-xs tabular-nums text-gray-800">
                  {edu.start} – {edu.end}
                </span>
              </div>
              <p className="text-sm text-gray-800">{edu.degree}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
