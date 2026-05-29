import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

export function LazyImage({ src, alt, className = "", loading = "lazy" }: Props) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ref.current?.complete) setLoaded(true);
  }, []);

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      onLoad={() => setLoaded(true)}
      className={`${className} transition-[opacity,transform,filter] duration-700 ease-out ${
        loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105"
      }`}
    />
  );
}
