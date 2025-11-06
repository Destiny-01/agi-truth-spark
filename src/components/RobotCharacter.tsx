import { cn } from "@/lib/utils";

interface RobotCharacterProps {
  mood: "neutral" | "happy" | "sad" | "thinking";
  className?: string;
}

export const RobotCharacter = ({ mood, className }: RobotCharacterProps) => {
  const getMoodExpression = () => {
    switch (mood) {
      case "happy":
        return { eyes: "^_^", color: "text-accent", animation: "animate-float" };
      case "sad":
        return { eyes: "•_•", color: "text-destructive", animation: "animate-shake" };
      case "thinking":
        return { eyes: "◉_◉", color: "text-secondary", animation: "animate-pulse-glow" };
      default:
        return { eyes: "◕_◕", color: "text-primary", animation: "" };
    }
  };

  const { eyes, color, animation } = getMoodExpression();

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className={cn("relative", animation)}>
        {/* Robot Head */}
        <div className={cn(
          "w-24 h-24 rounded-2xl bg-gradient-card border-2 flex items-center justify-center relative",
          color === "text-accent" ? "border-accent shadow-glow-accent" : "",
          color === "text-destructive" ? "border-destructive" : "",
          color === "text-secondary" ? "border-secondary shadow-glow-secondary" : "",
          color === "text-primary" ? "border-primary shadow-glow-primary" : ""
        )}>
          {/* Antenna */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className={cn("w-1 h-4 bg-gradient-to-t from-current to-transparent", color)} />
            <div className={cn("w-2 h-2 rounded-full bg-current -mt-1 mx-auto animate-pulse-glow", color)} />
          </div>

          {/* Eyes */}
          <div className={cn("text-3xl font-bold", color)}>
            {eyes}
          </div>

          {/* Side Details */}
          <div className={cn("absolute left-2 top-1/2 -translate-y-1/2 w-1 h-3 rounded-full bg-current opacity-50", color)} />
          <div className={cn("absolute right-2 top-1/2 -translate-y-1/2 w-1 h-3 rounded-full bg-current opacity-50", color)} />
        </div>

        {/* Robot Body */}
        <div className={cn(
          "w-20 h-12 mx-auto mt-1 rounded-lg bg-card border flex items-center justify-center gap-1",
          color === "text-accent" ? "border-accent/50" : "",
          color === "text-destructive" ? "border-destructive/50" : "",
          color === "text-secondary" ? "border-secondary/50" : "",
          color === "text-primary" ? "border-primary/50" : ""
        )}>
          <div className={cn("w-1 h-1 rounded-full bg-current opacity-50", color)} />
          <div className={cn("w-1 h-1 rounded-full bg-current opacity-50", color)} />
          <div className={cn("w-1 h-1 rounded-full bg-current opacity-50", color)} />
        </div>
      </div>
    </div>
  );
};
