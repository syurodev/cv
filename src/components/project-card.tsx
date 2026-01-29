import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  tasks: string | readonly string[];
  link?: string;
  repo?: string;
  status?: string;
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
  isFirst = false,
  isLast = false,
}: Props) {
  const tasksArray = Array.isArray(tasks) ? tasks : [tasks];

  return (
    <div className={`relative pb-6 pl-6 print:pb-2 ${isLast ? "pb-0" : ""}`}>
      {/* Timeline Line */}
      <div
        className={`absolute left-0 w-px border-l border-dashed border-gray-300 print:border-black ${
          isFirst ? "top-2" : "top-0"
        } bottom-0`}
      />

      {/* Timeline Dot */}
      <div className="print-force-bg absolute -left-[4.5px] top-1.5 h-2.5 w-2.5 rounded-full border border-gray-400 bg-white print:-left-[4px] print:h-2 print:w-2 print:border-black" />

      <div className="flex flex-col space-y-2 print:space-y-1">
        {/* Title & Badge */}
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold leading-none print:text-sm">
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
        <div className="flex gap-4 text-base text-gray-900 print:gap-2 print:text-sm print:text-black">
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
        <div className="text-pretty text-base text-gray-900 print:text-sm print:leading-tight print:text-black">
          {description}
        </div>

        {/* Tasks */}
        {tasksArray.length > 0 && (
          <div className="text-pretty text-base text-gray-900 print:text-sm print:leading-tight print:text-black">
            <ul className="list-none space-y-1 print:space-y-0.5">
              {tasksArray.map((task, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="shrink-0 text-gray-900 print:text-black">
                    -
                  </span>
                  <span>{task}</span>
                </li>
              ))}
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
