import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  location: string;
  date: string;
  image?: string;
  className?: string;
}

export function PhotoCard({
  location,
  date,
  image,
  className,
}: Props) {
  return (
      <div
        className={cn(
          "group relative flex flex-col overflow-hidden h-full rounded-xl border border-neutral-200 bg-white dark:bg-black text-black dark:text-white transition-all duration-300 ease-out",
          "dark:border-neutral-800", "w-55 h-80",
          className
        )}
      >
        {image && (
          <Image
            src={image}
            alt={location}
            fill
            draggable={false}
            className="object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none select-none"
          />
        )}

<div className="absolute inset-x-0 bottom-0 h-5/12 bg-gradient-to-t from-white/90 via-white/70 dark:bg-gradient-to-t dark:from-black/90 dark:via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute inset-x-0 bottom-0 z-10 p-4 
        opacity-0 translate-y-4 
        group-hover:opacity-100 group-hover:translate-y-0 
        transition-all duration-300">
        
        

        <h3 className="text-xl font-bold">{location}</h3>
        <Badge
          variant="secondary"
          className="rounded-full dark:bg-neutral-200 dark:text-black bg-neutral-800 px-2 py-0.5 text-xs text-white"
        >
          {date}
        </Badge>
      </div>
      </div>
  );
}