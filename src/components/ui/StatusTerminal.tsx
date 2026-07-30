import { motion } from "framer-motion";

const lines = [
  { label: "project", value: "eventpass", color: "text-primary-soft" },
  { label: "stage", value: "landing-page/v3", color: "text-secondary" },
  { label: "status", value: "in progress", color: "text-accent" },
];

export function StatusTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[280px] rounded-xl border border-border bg-bg-elevated/90 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-sm"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-accent/80" />
        <span className="h-2 w-2 rounded-full bg-secondary/80" />
        <span className="h-2 w-2 rounded-full bg-primary/80" />
        <span className="ml-2 text-[10px] font-mono text-muted-dim">currently-building.sh</span>
      </div>
      <div className="space-y-1.5 px-4 py-3 font-mono text-[12px]">
        {lines.map((line, i) => (
          <div key={line.label} className="flex items-center gap-1.5">
            <span className="text-muted-dim">$</span>
            <span className="text-muted">{line.label}:</span>
            <span className={line.color}>{line.value}</span>
            {i === lines.length - 1 && (
              <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-blink bg-primary-soft" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
