'use client';

import Image from 'next/image';
import { PortfolioItem } from '@/lib/content';

interface PortfolioGridProps {
  items: PortfolioItem[];
  onImageClick?: (item: PortfolioItem, index: number) => void;
}

export default function PortfolioGrid({ items, onImageClick }: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="group cursor-pointer overflow-hidden rounded-lg h-64 bg-warm-100 animate-fade-in"
          onClick={() => onImageClick?.(item, index)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onImageClick?.(item, index);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`View ${item.title}`}
        >
          <div className="relative w-full h-full">
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-end">
              <div className="w-full bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition duration-300">
                <h3 className="font-serif font-bold text-white text-lg">{item.title}</h3>
                <p className="text-sand-300 text-sm">{item.category}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
