import { PrintDrawer } from "@/components/print-drawer";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 px-9 py-4 md:p-16 print:m-0 print:block print:w-full print:max-w-none print:p-0">
      <article className="mx-auto w-full max-w-4xl bg-white print:max-w-none">
        {/* Header */}
        <header className="mb-6 flex items-center justify-between print:mb-4">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty  text-base text-gray-900 print:text-black">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md text-pretty text-base text-gray-900 print:text-black">
              <span className="font-bold">Goal:</span> {RESUME_DATA.goal}
            </p>
            <p className="max-w-md items-center text-pretty  text-xs text-gray-900">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1  text-sm text-gray-900 print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="h-8 w-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url} target="_blank">
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1  text-sm text-gray-900 print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-x-4">
            <Avatar className="h-32 w-32 print:h-20 print:w-20">
              <AvatarImage
                alt={RESUME_DATA.name}
                src={RESUME_DATA.avatarUrl}
                className="object-cover"
              />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Skills */}
        <div className="mb-6 print:mb-4">
          <h2 className="mb-3 text-xl font-bold print:mb-2 print:text-lg">
            Skills
          </h2>
          {Object.entries(RESUME_DATA.skills).map(([category, skills]) => (
            <p key={category} className="mb-1 text-base print:mb-0.5">
              <span className="font-semibold">{category}:</span>{" "}
              <span className="text-gray-900">{skills.join(", ")}</span>
            </p>
          ))}
        </div>

        {/* Work Experience */}
        <div className="mb-6 print:mb-4">
          <h2 className="mb-3 text-xl font-bold print:mb-2 print:text-lg">
            Work Experience
          </h2>
          {RESUME_DATA.work.map((work) => (
            <div key={work.company} className="mb-4 print:mb-3">
              <div className="flex items-center justify-between text-base">
                <h3 className="font-semibold">
                  <a className="hover:underline" href={work.link}>
                    {work.company}
                  </a>
                </h3>
                <span className="tabular-nums text-gray-900">
                  {work.start} - {work.end}
                </span>
              </div>
              <p className=" text-base">{work.title}</p>

              {work.repo && (
                <a
                  href={work.repo}
                  className="mt-1 block  text-xs text-gray-900"
                  target="_blank"
                >
                  repo: {work.repo}
                </a>
              )}

              {"projects" in work && work.projects && (
                <div className="mt-3 pl-2">
                  {work.projects.map((project, index) => (
                    <ProjectCard
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      tasks={project.tasks}
                      tags={project.techStack}
                      link={"link" in project ? project.link?.href : undefined}
                      repo={"link" in project ? project.link?.repo : undefined}
                      status={project.status}
                      isFirst={index === 0}
                      isLast={index === (work.projects?.length ?? 0) - 1}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mb-6 print:mb-4">
          <h2 className="mb-3 text-xl font-bold print:mb-2 print:text-lg">
            Education
          </h2>
          {RESUME_DATA.education.map((education) => (
            <div key={education.school} className="mb-2">
              <h3 className="text-base font-semibold">{education.school}</h3>
              <p className="text-base text-gray-900">
                {education.start} - {education.end}
              </p>
              <p className=" text-sm">{education.degree}</p>
            </div>
          ))}
        </div>

        {/* References */}
        {RESUME_DATA.references && RESUME_DATA.references.length > 0 && (
          <div className="mb-6 print:mb-4">
            <h2 className="mb-3 text-xl font-bold print:mb-2 print:text-lg">
              References
            </h2>
            {RESUME_DATA.references.map((ref) => (
              <div key={ref.name} className="mb-2">
                <h3 className="text-base font-semibold">{ref.name}</h3>
                <p className="text-base text-gray-900">{ref.title}</p>
                <p className="text-sm text-gray-900">
                  Phone: {ref.phone ?? ""}
                </p>
              </div>
            ))}
          </div>
        )}
      </article>

      <PrintDrawer />
    </main>
  );
}
