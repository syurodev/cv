import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  tasks: string | readonly string[];
  link?: string;
  repo?: string;
  status?: string;
  teamSize?: number;
  isFirst?: boolean;
  isLast?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  repo,
  tasks,
  status,
  teamSize,
  isFirst = false,
  isLast = false,
}: Props) {
  const tasksArray = Array.isArray(tasks) ? tasks : [tasks];

  return (
    <div
      className={`relative pb-6 pl-6 print:pb-3 print:pl-5 ${isLast ? "pb-0" : ""}`}
    >
      {/* Timeline Line */}
      <div
        className={`absolute left-0 w-px border-l border-dashed border-gray-300 print:border-black ${
          isFirst ? "top-2" : "top-0"
        } bottom-0`}
      />

      {/* Timeline Dot */}
      <div className="print-force-bg absolute -left-[4.5px] top-1.5 h-2.5 w-2.5 rounded-full border border-gray-400 bg-white print:-left-[4px] print:h-2 print:w-2 print:border-black" />

      <div className="flex flex-col space-y-2 print:space-y-0.5">
        {/* Title & Badge */}
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold leading-none print:text-[16px]">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 print:hidden"></span>
              </a>
            ) : (
              title
            )}
          </h3>
          {status && (
            <Badge
              variant="outline"
              className="px-1.5 py-0 text-[10px] print:px-1 print:py-0 print:text-[9px]"
            >
              {status}
            </Badge>
          )}
        </div>

        {/* Links (Repo/Demo) - Subtext style */}
        <div className="flex gap-4 text-base text-gray-900 print:hidden">
          {repo && (
            <div className="flex gap-1">
              <span className="font-semibold text-foreground/80 print:text-black">
                Github:
              </span>
              <a href={repo} target="_blank" className="hover:underline">
                {repo.replace("https://", "").replace("www.", "")}
              </a>
            </div>
          )}
          {link && (
            <div className="flex gap-1">
              <span className="font-semibold text-foreground/80 print:text-black">
                Demo:
              </span>
              <a href={link} target="_blank" className="hover:underline">
                {link.replace("https://", "").replace("www.", "")}
              </a>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="text-pretty text-base text-gray-900 print:text-[15px] print:leading-snug print:text-black">
          {description}
        </div>

        {/* Team Size */}
        {teamSize && (
          <div className="text-base text-gray-900 print:text-[15px] print:leading-snug print:text-black">
            <span className="font-semibold">Team size:</span> {teamSize} members (including FE, BE, QC, BA)
          </div>
        )}

        {/* Tasks */}
        {tasksArray.length > 0 && (
          <div className="text-pretty text-base text-gray-900 print:text-[15px] print:leading-snug print:text-black">
            <ul className="list-none space-y-1 print:space-y-0">
              {tasksArray.map((task, index) => {
                const colonIndex = task.indexOf(":");
                const hasColon = colonIndex !== -1;
                return (
                  <li key={index} className="flex items-start gap-2">
                    <span className="shrink-0 text-gray-900 print:text-black">
                      -
                    </span>
                    <span>
                      {hasColon ? (
                        <>
                          <span className="font-semibold">{task.slice(0, colonIndex)}</span>
                          {task.slice(colonIndex)}
                        </>
                      ) : (
                        task
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-md bg-secondary/50 px-1 py-0 text-xs text-secondary-foreground print:border print:border-gray-200 print:bg-gray-100 print:px-1 print:py-0 print:text-[9px] print:text-black"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
