type MediaSlotProps = {
  label: string;
  className?: string;
};

export function MediaSlot({ label, className }: MediaSlotProps) {
  return (
    <div className={`media-slot placeholder${className ? ` ${className}` : ""}`}>
      <span className="ph-label">{label}</span>
    </div>
  );
}
