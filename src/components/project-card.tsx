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
    <div className={`relative pb-6 pl-6 ${isLast ? "pb-0" : ""}`}>
      {/* Timeline Line */}
      <div
        className={`absolute left-0 w-px border-l border-dashed border-gray-300 print:border-black ${
          isFirst ? "top-2" : "top-0"
        } bottom-0`}
      />

      {/* Timeline Dot */}
      <div className="print-force-bg absolute -left-[4.5px] top-1.5 h-2.5 w-2.5 rounded-full border border-gray-400 bg-white print:border-black" />

      <div className="flex flex-col space-y-2">
        {/* Title & Badge */}
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold leading-none">
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
            <Badge variant="outline" className="px-1.5 py-0 text-[10px]">
              {status}
            </Badge>
          )}
        </div>

        {/* Links (Repo/Demo) - Subtext style */}
        <div className="flex gap-4 text-xs text-muted-foreground print:text-black">
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
        <div className="text-pretty font-mono text-sm text-muted-foreground print:text-sm print:text-black">
          {description}
        </div>

        {/* Tasks */}
        {tasksArray.length > 0 && (
          <div className="text-pretty font-mono text-sm text-foreground/80 print:text-sm print:text-black">
            <ul className="list-none space-y-1">
              {tasksArray.map((task, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/60 print:bg-black" />
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
              className="rounded-md bg-secondary/50 px-1 py-0 text-[10px] text-secondary-foreground print:border print:border-gray-200 print:bg-gray-100 print:text-black"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
