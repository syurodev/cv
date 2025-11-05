import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  tasks: string | string[];
  link?: string;
  repo?: string;
  status?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  repo,
  tasks,
  status,
}: Props) {
  const tasksArray = Array.isArray(tasks) ? tasks : [tasks];

  return (
    <Card className="print-compact-card print-compact-card flex flex-col overflow-hidden border border-muted p-3 print:break-inside-avoid print:border print:border-l print:border-r print:border-gray-300">
      <CardHeader className="print:px-2 print:py-1">
        <div className="space-y-1">
          <div className="flex gap-2">
            <CardTitle className="text-base">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:underline print:font-semibold print:no-underline"
                >
                  {title}{" "}
                  <span className="h-1 w-1 rounded-full bg-green-500 print:hidden"></span>
                </a>
              ) : (
                title
              )}
            </CardTitle>
            {status && (
              <Badge
                variant={"outline"}
                className="px-2 py-0 text-[10px] print:border-gray-400"
              >
                {status}
              </Badge>
            )}
          </div>
          {link && (
            <div className="hidden font-mono text-xs text-gray-500 print:hidden">
              {link.replace("https://", "").replace("www.", "")}
            </div>
          )}
          <CardContent className="print-compact-text font-mono text-sm print:px-2 print:py-0 print:text-sm print:text-black">
            <strong>Description: </strong>
            {description}
          </CardContent>
          <CardContent className="print-compact-text font-mono text-sm print:px-2 print:py-0 print:text-sm">
            <strong className="print:text-black">Tasks: </strong>
            {tasksArray.map((x, index) => (
              <p
                key={title + "task" + index}
                className="print-compact-text ms-4 print:text-black"
              >
                - {x}
              </p>
            ))}
          </CardContent>
        </div>
      </CardHeader>
      <CardContent className="mt-1 flex flex-col print:mt-0 print:px-2 print:py-0">
        <div className="flex flex-col font-mono text-sm print:text-xs">
          <div className="flex gap-1 print:text-black">
            <span className="font-semibold">Github:</span>
            {repo ? (
              <a href={repo} target="_blank" className="print:no-underline">
                <span className="screen-only">{repo || "private"}</span>
                <span className="hidden print:inline">
                  {repo?.replace("https://", "").replace("www.", "") ||
                    "private"}
                </span>
              </a>
            ) : (
              "private"
            )}
          </div>
          <div className="flex gap-1 print:text-black">
            <span className="font-semibold">Demo:</span>
            {link ? (
              <a href={link} target="_blank" className="print:no-underline">
                <span className="screen-only">{link || "private"}</span>
                <span className="hidden print:inline">
                  {link?.replace("https://", "").replace("www.", "") ||
                    "private"}
                </span>
              </a>
            ) : (
              "private"
            )}
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1 print:mt-0 print:gap-0.5">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant={"outline"}
              className="rounded-full print:border-gray-300 print:bg-gray-100 print:text-black"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
