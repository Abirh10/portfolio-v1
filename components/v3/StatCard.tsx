type StatCardProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export default function StatCard({ label, children, className }: StatCardProps) {
  return (
    <div
      className={`card p-4 flex flex-col gap-2 ${className ?? ""}`}
      style={{ background: "var(--surface-dim)" }}
    >
      <p className="label">{label}</p>
      {children}
    </div>
  );
}
