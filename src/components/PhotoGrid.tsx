import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Photo {
  src: string;
  location: string;
  film: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.map((photo, index) => (
        <div key={index} className="group relative aspect-square overflow-hidden rounded-lg">
          <ImageWithFallback 
            src={photo.src} 
            alt={`Film photo taken in ${photo.location}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-3 text-white text-xs">
              <p className="font-medium">{photo.location}</p>
              <p className="text-white/80">{photo.film}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}