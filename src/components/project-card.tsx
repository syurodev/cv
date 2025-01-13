import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

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
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
          <div className="flex gap-2">
            <CardTitle className="text-base">
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  className="inline-flex items-center gap-1 hover:underline"
                >
                  {title}{" "}
                  <span className="h-1 w-1 rounded-full bg-green-500"></span>
                </a>
              ) : (
                title
              )}
            </CardTitle>
            {status && (
              <Badge variant={"outline"} className="px-2 py-0 text-[10px]">
                {status}
              </Badge>
            )}
          </div>
          <div className="hidden font-mono text-sm underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardContent className="font-mono text-sm">
            <strong>Description: </strong>
            {description}
          </CardContent>
          <CardContent className="font-mono text-sm">
            <strong>Tasks: </strong>
            {tasksArray.map((x, index) => (
              <p key={title + "task" + index} className="ms-4">
                - {x}
              </p>
            ))}
          </CardContent>
        </div>
      </CardHeader>
      <CardContent className="mt-1 flex flex-col">
        <div className="flex flex-col font-mono text-sm">
          <div className="flex gap-1">
            <span className="font-semibold">Github:</span>
            {repo ? (
              <a href={repo} target="_blank">
                {repo || "private"}
              </a>
            ) : (
              "private"
            )}
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">Demo:</span>
            {link ? (
              <a href={link} target="_blank">
                {link || "private"}
              </a>
            ) : (
              "private"
            )}
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="rounded-full px-2 py-0 text-[10px]"
              variant="outline"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
