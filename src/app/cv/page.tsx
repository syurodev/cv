import { PrintDrawer } from "@/components/print-drawer";
import { ProjectCard } from "@/components/project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 px-9 py-4 md:p-16 print:static print:m-0 print:block print:h-auto print:min-h-0 print:w-full print:max-w-none print:overflow-visible print:p-0">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:w-full print:max-w-none print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-black">
              {RESUME_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="h-3 w-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
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
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
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
        </div>
        {/* <Section className="print-compact-section">
          <h2 className="print-compact-text text-xl font-bold print:text-lg">
            About
          </h2>
          <p className="print-compact-text text-pretty font-mono text-sm text-muted-foreground print:text-xs print:text-black">
            {RESUME_DATA.summary}
          </p>
        </Section> */}
        <Section className="print-compact-section">
          <h2 className="print-compact-text text-xl font-bold print:text-lg">
            Work Experience
          </h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company} className="print-compact-card">
                <CardHeader className="print:py-1">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <div className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="outline"
                            className="align-middle text-xs print:border-gray-300 print:bg-gray-100 print:text-black"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-sm print:text-sm print:text-black">
                  {work.description}
                </CardContent>
                {work.repo && (
                  <a
                    href={work.repo}
                    className="mt-2 font-mono text-xs text-gray-500 print:text-black"
                    target="_blank"
                  >
                    repo: {work.repo}
                  </a>
                )}
                {"projects" in work && work.projects && (
                  <div className="mt-4 flex flex-col pl-2">
                    {work.projects.map((project, index) => (
                      <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        tasks={project.tasks}
                        tags={project.techStack}
                        link={
                          "link" in project ? project.link?.href : undefined
                        }
                        repo={
                          "link" in project ? project.link?.repo : undefined
                        }
                        status={project.status}
                        isFirst={index === 0}
                        isLast={index === (work.projects?.length ?? 0) - 1}
                      />
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </Section>
        <Section className="print-compact-section">
          <h2 className="print-compact-text text-xl font-bold print:text-lg">
            Education
          </h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card
                key={education.school}
                className="print-break-inside-avoid print-compact-card"
              >
                <CardHeader className="print:py-1">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}{" "}
                      <Badge
                        variant={"outline"}
                        className="font-mono text-xs font-light print:border-gray-300 print:bg-gray-100 print:text-black"
                      >
                        {education.degree}
                      </Badge>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 font-mono text-xs print:text-sm print:text-black">
                  {education.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section className="print-compact-section">
          <h2 className="print-compact-text text-xl font-bold print:text-lg">
            Skills
          </h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge
                  key={skill}
                  variant={"outline"}
                  className="rounded-full print:border-gray-300 print:bg-gray-100 print:text-black"
                >
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>

        {RESUME_DATA.projects.length > 0 && (
          <Section className="print-compact-section scroll-mb-16 print:mt-2">
            <h2 className="print-compact-text text-xl font-bold print:text-lg">
              Projects
            </h2>
            <div className="-mx-3 flex flex-col pl-3">
              {(RESUME_DATA.projects as readonly any[]).map(
                (project, index) => {
                  return (
                    <ProjectCard
                      key={project.title}
                      title={project.title}
                      description={project.description}
                      tasks={project.tasks as any}
                      tags={project.techStack}
                      link={"link" in project ? project.link?.href : undefined}
                      repo={"link" in project ? project.link?.repo : undefined}
                      status={project.status}
                      isFirst={index === 0}
                      isLast={index === RESUME_DATA.projects.length - 1}
                    />
                  );
                },
              )}
            </div>
          </Section>
        )}
      </section>

      <PrintDrawer />

      {/* <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      /> */}
    </main>
  );
}
