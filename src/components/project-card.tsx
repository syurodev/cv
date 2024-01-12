import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  tasks: string;
  link?: string;
  repo?: string;
}

export function ProjectCard({ title, description, tags, link, repo, tasks }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      <CardHeader className="">
        <div className="space-y-1">
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
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-xs">
            <p><span className="font-semibold">Description: </span><span>{description}</span></p>
            <p><span className="font-semibold">Tasks: </span><span>{tasks}</span></p>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col">
        <div className="flex flex-col font-mono text-xs">
          <div className="flex gap-1">
            <span className="font-semibold">Github:</span>
            <a href={repo} target="_blank">{repo || "private"}</a>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">Demo:</span>
            <a href={repo} target="_blank">{link || "private"}</a>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px]"
              variant="secondary"
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
