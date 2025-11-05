import { RESUME_DATA } from "@/data/resume-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Phone, Globe, Github, Facebook } from "lucide-react";

// Helper to truncate text
const truncate = (str: string, len: number) => {
  if (str.length <= len) return str;
  // find last space within len
  const lastSpace = str.lastIndexOf(" ", len);
  return str.substring(0, lastSpace > 0 ? lastSpace : len) + "...";
};

export default function CvPage() {
  return (
    <div className="flex h-fit items-center justify-center bg-gray-200 p-4 sm:p-8 print:bg-transparent print:p-0">
      <main className="cv-container h-fit w-[210mm] bg-white font-sans text-[10pt] leading-normal text-gray-800 shadow-2xl print:h-[297mm] print:shadow-none">
        <div className="flex h-full print:h-[297mm]">
          {/* Left Column */}
          <aside className="flex w-[33%] flex-col border-r border-gray-200 bg-gray-50 p-6 print:h-[297mm]">
            <div className="text-center">
              <Avatar className="mx-auto h-32 w-32 shadow-md">
                <AvatarImage
                  alt={RESUME_DATA.name}
                  src={RESUME_DATA.avatarUrl}
                  className="object-cover"
                />
                <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
              </Avatar>
              <h1 className="mt-4 text-2xl font-bold tracking-tight">
                {RESUME_DATA.name}
              </h1>
              <h2 className="mt-1 text-sm font-medium text-blue-600">
                {RESUME_DATA.about.split(" with")[0]}
              </h2>
            </div>

            <section className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Contact
              </h3>
              <div className="mt-2 space-y-1.5 text-xs">
                <a
                  href={`mailto:${RESUME_DATA.contact.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-blue-600"
                >
                  <Mail className="h-3.5 w-3.5 text-gray-500" />
                  <span>{RESUME_DATA.contact.email}</span>
                </a>
                <a
                  href={`tel:${RESUME_DATA.contact.tel}`}
                  className="flex items-center gap-2 transition-colors hover:text-blue-600"
                >
                  <Phone className="h-3.5 w-3.5 text-gray-500" />
                  <span>{RESUME_DATA.contact.tel}</span>
                </a>
                <a
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                  className="flex items-center gap-2 transition-colors hover:text-blue-600"
                >
                  <Globe className="h-3.5 w-3.5 text-gray-500" />
                  <span>{RESUME_DATA.location}</span>
                </a>
                {RESUME_DATA.contact.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="flex items-center gap-2 transition-colors hover:text-blue-600"
                  >
                    {social.name === "GitHub" && (
                      <Github className="h-3.5 w-3.5 text-gray-500" />
                    )}
                    {social.name === "Facebook" && (
                      <Facebook className="h-3.5 w-3.5 text-gray-500" />
                    )}
                    <span className="truncate">
                      {social.url
                        .replace("https://www.", "")
                        .replace("https://", "")}
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Skills
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
                {RESUME_DATA.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-gray-200 px-2 py-0.5 font-medium text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-6 flex flex-col">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Education
              </h3>
              <div className="mt-2">
                {RESUME_DATA.education.map((edu) => (
                  <div key={edu.school}>
                    <h4 className="text-sm font-bold">{edu.school}</h4>
                    <p className="text-xs text-gray-600">{edu.degree}</p>
                    <p className="mt-0.5 text-xs text-gray-500">
                      {edu.start} - {edu.end}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </aside>

          {/* Right Column */}
          <div className="w-[67%] p-6">
            <section>
              <h3 className="border-b-2 border-gray-200 pb-1 text-base font-bold uppercase tracking-widest text-blue-600">
                Summary
              </h3>
              <p className="mt-3 text-xs leading-relaxed">
                {RESUME_DATA.about}
              </p>
            </section>

            <section className="mt-4">
              <h3 className="border-b-2 border-gray-200 pb-1 text-base font-bold uppercase tracking-widest text-blue-600">
                Work Experience
              </h3>
              <div className="mt-3 space-y-3">
                {RESUME_DATA.work.map((work) => (
                  <div key={work.company} className="text-xs">
                    <div className="flex items-baseline justify-between">
                      <h4 className="text-sm font-bold text-gray-800">
                        {work.company}
                      </h4>
                      <span className="font-mono text-[9pt] text-gray-500">
                        {work.start} - {work.end}
                      </span>
                    </div>
                    <p className="my-0.5 font-semibold text-gray-700">
                      {work.title}
                    </p>
                    <p className="leading-relaxed">
                      {truncate(work.description, 180)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-4">
              <h3 className="border-b-2 border-gray-200 pb-1 text-base font-bold uppercase tracking-widest text-blue-600">
                Projects
              </h3>
              <div className="mt-3 space-y-3">
                {RESUME_DATA.projects.slice(0, 2).map((project) => {
                  if (project.title === "DaiHy") {
                    return (
                      <div key={project.title} className="text-xs">
                        <h4 className="text-sm font-bold text-gray-800">
                          {project.title}
                        </h4>
                        <p className="mt-0.5 italic leading-relaxed">
                          {project.description}
                        </p>
                        <ul className="mt-1 list-outside list-disc space-y-0.5 pl-4">
                          {project.tasks.map(
                            (
                              task,
                              index, // Show all tasks for DaiHy
                            ) => (
                              <li key={index} className="leading-snug">
                                {task}
                              </li> // No truncation
                            ),
                          )}
                        </ul>
                        <div className="mt-1.5 flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md bg-blue-100 px-2 py-0.5 text-[8pt] font-medium text-blue-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  // Keep other projects concise
                  return (
                    <div key={project.title} className="text-xs">
                      <h4 className="text-sm font-bold text-gray-800">
                        {project.title}
                      </h4>
                      <p className="mt-0.5 italic leading-relaxed">
                        {project.description}
                      </p>
                      <ul className="mt-1 list-outside list-disc space-y-0.5 pl-4">
                        {project.tasks.map((task, index) => (
                          <li key={index} className="leading-snug">
                            {task}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-blue-100 px-2 py-0.5 text-[8pt] font-medium text-blue-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
