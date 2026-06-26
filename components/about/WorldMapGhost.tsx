import { Globe } from 'lucide-react';

export function WorldMapGhost() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.03]">
      {/* Abstract representation for minimal bundle */}
      <Globe className="h-[80vh] w-[80vh] stroke-[#124a6d]" strokeWidth={0.5} />
    </div>
  );
}