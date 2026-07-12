export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
}
