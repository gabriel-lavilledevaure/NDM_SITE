export default function SectionMeta({ number, label, detail, light = false }) {
  return (
    <div className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b pb-4 font-archivo text-[11px] font-bold uppercase tracking-[0.09em] sm:text-xs ${light ? "border-white/30 text-white/75" : "border-background/30 text-background/75"}`}>
      <span>{number} / {label}</span>
      {detail && <span className="text-right">{detail}</span>}
    </div>
  );
}
