interface TagPillProps {
  label: string;
}

export default function TagPill({ label }: TagPillProps) {
  return (
    <span className="px-8 py-2 rounded-full bg-[#e6e6e6] text-black text-lg border border-gray-800 font-light">
      {label}
    </span>
  );
}
