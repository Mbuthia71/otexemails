import type { ReactNode, ButtonHTMLAttributes, ElementType } from "react";

export type Surface = "cream" | "sage" | "terra" | "ink";
export const surfaceClass: Record<Surface, string> = {
  cream: "felt-cream text-ink",
  sage: "felt-sage text-cream",
  terra: "felt-terra text-cream",
  ink: "felt-ink text-cream",
};
export const stitchClass: Record<Surface, string> = {
  cream: "stitched",
  sage: "stitched-cream",
  terra: "stitched-cream",
  ink: "stitched-cream",
};
const fluffClass: Record<Surface, string> = {
  cream: "fluff",
  sage: "fluff-sage",
  terra: "fluff-terra",
  ink: "fluff-ink",
};

export function Puff({
  children,
  surface = "cream",
  className = "",
  shape = "circle",
}: {
  children?: ReactNode;
  surface?: Surface;
  className?: string;
  shape?: "circle" | "pill" | "square";
}) {
  const shapes = {
    circle: "rounded-full aspect-square",
    pill: "rounded-full",
    square: "rounded-[1.75rem] aspect-square",
  };
  return (
    <div
      className={`fuzz-texture ${fluffClass[surface]} ${surfaceClass[surface]} ${shapes[shape]} ${stitchClass[surface]} flex items-center justify-center p-4 puff-press ${className}`}
    >
      {children}
    </div>
  );
}

export function FuzzyButton({
  children,
  surface = "sage",
  className = "",
  as: As = "button",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { surface?: Surface; as?: ElementType }) {
  return (
    <As
      className={`fuzz-texture ${fluffClass[surface]} ${surfaceClass[surface]} ${stitchClass[surface]} rounded-full px-7 py-4 text-sm font-bold tracking-wide uppercase cursor-pointer inline-flex items-center gap-2 puff-press ${className}`}
      {...rest}
    >
      {children}
    </As>
  );
}
