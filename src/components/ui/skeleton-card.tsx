import { Skeleton } from "./skeleton";

interface SkeletonCardProps {
  className?: string;
  imageHeight?: string;
}

export function SkeletonCard({
  className = "",
  imageHeight = "h-64",
}: SkeletonCardProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <Skeleton className={`${imageHeight} w-full rounded-lg`} />
    </div>
  );
}
