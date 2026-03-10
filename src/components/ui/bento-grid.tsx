import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-gray-800 bg-gray-900/80 p-4 transition-all duration-200 hover:shadow-md hover:border-green-800/60",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <div className="font-sans text-base font-bold text-white">
            {title}
          </div>
        </div>
        <div className="font-sans text-sm font-normal text-gray-400 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};