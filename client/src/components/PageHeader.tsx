/** BashaMate Courtyard Editorial: compact editorial page headers with an explicit frontend-demo note. */

export default function PageHeader({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: React.ReactNode;
}) {
  return (
    <header className="border-b border-[#e4d9c9] pb-7 sm:pb-8">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="field-note text-[#376d5a]">{eyebrow}</p>
          <h1 className="mt-3 font-display text-[clamp(2rem,3.5vw,3.15rem)] font-semibold leading-[0.98] tracking-[-0.05em]">{title}</h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#64716b] sm:text-base">{description}</p>
        </div>
        {aside}
      </div>
    </header>
  );
}
