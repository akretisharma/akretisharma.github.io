import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
  date: string;
  description: string;
}

export function ExperienceSection({
  title,
  date,
  description,
}: Props) {
  return (
    <div className="w-full mx-auto border-b border-neutral-200 dark:border-neutral-800 py-4">
        <div className="flex items-center justify-between mb-2">
            <h3 className="text-md font-semibold text-neutral-900 dark:text-neutral-100">
                {title}
            </h3>
            <Badge
                variant="secondary"
                className="rounded-full dark:bg-neutral-200 dark:text-black bg-neutral-800 text-white px-3 py-0.5 text-xs font-medium"
            >
                {date}
            </Badge>
        </div>

    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
      {description}
    </p>
  </div>
  );
}