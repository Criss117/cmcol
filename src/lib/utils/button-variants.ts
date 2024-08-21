const variants = {
  primary: "dark:bg-black bg-lightPrimary100",
  secondary: " bg-lightPrimary100 text-white",
  outline: "bg-transparent text-black border",
  ghost: "bg-transparent text-sky-700 underline",
} as const;

const base =
  "text-white font-bold rounded-md hover:opacity-80 transition px-4 py-2";

export function buttonVariants(variant: keyof typeof variants = "primary") {
  return `${base} ${variants[variant]}`;
}
