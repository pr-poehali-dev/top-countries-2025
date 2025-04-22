import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";

interface MilitaryImageProps {
  src: string;
  alt: string;
  className?: string;
}

const MilitaryImage: React.FC<MilitaryImageProps> = ({ src, alt, className }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setError(true);
  };

  return (
    <div className={`relative overflow-hidden rounded-md ${className}`}>
      <AspectRatio ratio={16 / 9}>
        {isLoading && <Skeleton className="absolute inset-0 w-full h-full bg-muted" />}
        {error ? (
          <div className="flex items-center justify-center w-full h-full bg-muted text-muted-foreground text-sm">
            Изображение недоступно
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        )}
      </AspectRatio>
    </div>
  );
};

export default MilitaryImage;
