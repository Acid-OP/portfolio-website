// components/AvatarCircle.tsx
import Image from "next/image";

interface AvatarCircleProps {
  src: string;
  alt: string;
  size?: number; // default size if not provided
}

export default function AvatarCircle({ src, alt, size = 80 }: AvatarCircleProps) {
  return (
    <div
      className="rounded-full m-8 overflow-hidden shadow-lg"
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover"
      />
    </div>
  );
}
