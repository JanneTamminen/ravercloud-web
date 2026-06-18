import Image from "next/image";

type MediaSlotProps = {
  label: string;
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
};

export function MediaSlot({ label, className, src, alt, priority }: MediaSlotProps) {
  if (src) {
    return (
      <div className={`media-slot${className ? ` ${className}` : ""}`}>
        <Image
          src={src}
          alt={alt ?? label}
          fill
          sizes="(max-width: 940px) 100vw, 560px"
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={`media-slot placeholder${className ? ` ${className}` : ""}`}>
      <span className="ph-label">{label}</span>
    </div>
  );
}
