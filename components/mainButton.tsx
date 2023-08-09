import { twMerge } from "tailwind-merge";

export default function MainButton(title: string, style?: string) {
  return (
    <button
      className={twMerge(
        "px-4 py-2 bg-orange-400 flex items-center justify-center rounded-md text-sm text-white hover:bg-amber-600 transition-colors delay-100 duration-100",
        style
      )}
    >
      {title}
    </button>
  );
}
