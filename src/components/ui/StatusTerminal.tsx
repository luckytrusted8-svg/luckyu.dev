import { motion } from "framer-motion";

export function StatusTerminal() {
  return (
    <motion.div
      drag
      dragSnapToOrigin={false} // Set `true` jika ingin box kembali ke posisi asal saat dilepas
      whileDrag={{ scale: 1.05 }}
      whileHover={{ scale: 1.02 }}
      className="cursor-grab active:cursor-grabbing w-64 rounded-xl border border-border bg-surface/90 p-4 shadow-xl backdrop-blur-md transition-shadow hover:shadow-2xl select-none"
    >
      {/* Terminal Top Bar */}
      <div className="flex items-center gap-1.5 border-b border-border/60 pb-2.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-[10px] text-muted-dim">
          currently-building.sh
        </span>
      </div>

      {/* Terminal Content */}
      <div className="mt-3 font-mono text-xs space-y-1.5">
        <p className="text-muted">
          <span className="text-primary font-bold">$</span> project:{" "}
          <span className="text-text font-semibold">eventpass</span>
        </p>
        <p className="text-muted">
          <span className="text-primary font-bold">$</span> stage:{" "}
          <span className="text-text font-semibold">landing-page/v3</span>
        </p>
        <p className="text-muted">
          <span className="text-primary font-bold">$</span> status:{" "}
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            in progress
          </span>
        </p>
      </div>
    </motion.div>
  );
}