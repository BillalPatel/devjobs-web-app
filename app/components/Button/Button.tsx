import React, { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  [
    "capitalize",
    "rounded-md",
    "px-8",
    "h-12",
    "lg:px-10",
    "text-center",
    "font-bold",
    "text-base",
  ],
  {
    variants: {
      variant: {
        default: ["bg-primary", "text-textWhite", "hover:bg-hover"],
      },
      size: {
        default: ["px-10", "max-w-[11rem]"],
        wide: ["w-full"],
      },
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  text: string;
  textContent?: string;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const { variant, size, text, onClick } = props;

  return (
    <button className={button({ variant, size })} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
