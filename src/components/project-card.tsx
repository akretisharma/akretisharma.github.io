import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  hackathonWinner?: boolean;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  hackathonWinner = false,
}: Props) {
  return (
    <Card
    className={cn(
        "group flex flex-col overflow-hidden h-full rounded-xl border border-white bg-pink-50 text-black transition-all duration-300 ease-out",
        "hover:scale-[1.0]",
        "dark:border-neutral-800 dark:bg-neutral-950 dark:text-white"
      )}
      
>
<Link href={href || "#"} target="_blank" className={cn("block cursor-pointer relative", className)}>
        {image && (
          <>
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              draggable={false}
              className="h-40 w-full object-cover object-top rounded-t-xl select-none"
            />
            {hackathonWinner && (
              <div className="absolute top-3 right-4 flex items-center rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 pl-3 pr-6 py-1 shadow-md border-2 border-white/50">
                <span className="text-white font-bold text-sm">Winner</span>
                <span className="text-4xl absolute -right-2 rotate-15">🏆</span>
              </div>
            )}


          </>
        )}
      </Link>

  <CardHeader className="mt-4 px-4">
    <CardTitle className="mt-1 text-lg font-semibold text-black dark:text-pink-100">
      {title}
    </CardTitle>
    <time className="text-xs text-neutral-400">{dates}</time>

    <div className="prose max-w-full text-pretty font-sans text-xs text-neutral-600 dark:text-neutral-300">
  <Markdown>{description}</Markdown>
</div>

  </CardHeader>

  <CardContent className="mt-auto flex flex-col px-4">
    {tags?.length > 0 && (
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            className="rounded-full bg-white text-black dark:bg-neutral-800 px-2 py-0.5 text-xs dark:text-white"
          >
            {tag}
          </Badge>
        ))}
      </div>
    )}
  </CardContent>

  <CardFooter className="px-4 pb-4">
  {(links ?? []).length > 0 && (
  <div className="mt-2 flex flex-wrap gap-2">
    {(links ?? []).map((link, idx) => (
      <Link href={link.href} key={idx} target="_blank">
        <Badge className="flex items-center gap-2 rounded-full bg-pink-950 dark:bg-pink-200 text-white dark:text-black px-3 py-1 text-xs hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
          {link.icon}
          {link.type}
        </Badge>
      </Link>
    ))}
  </div>
)}
  </CardFooter>
</Card>
  );
}