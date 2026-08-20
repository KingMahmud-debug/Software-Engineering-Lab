/** BashaMate Courtyard Editorial: preserves generated web assets while falling back to public photography in a local clone. */

import { useEffect, useState } from "react";

export default function BashaImage({
  src,
  fallback,
  alt,
  className,
}: {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  useEffect(() => setCurrentSrc(src), [src]);
  return <img src={currentSrc} alt={alt} className={className} onError={() => setCurrentSrc(fallback)} />;
}

