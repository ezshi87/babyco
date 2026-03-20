import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-gold/10 shadow-sm hover:shadow-md transition-shadow duration-300 p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
