interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const color = variant === "light" ? "#FFFFFF" : "#9CA3AF";
  return (
    <span
      className={`font-logo tracking-tight ${className}`}
      style={{ fontFamily: "Nunito, system-ui, sans-serif", fontWeight: 200, color, letterSpacing: "-0.01em" }}
    >
      babyco
    </span>
  );
}
