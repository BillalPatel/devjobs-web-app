import React, { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  [
    "capitalize",
    "rounded-md",
    "h-12",
    "min-w-[10.5rem]",
    "lg:px-10",
    "text-center",
    "font-bold",
    "text-base",
  ],
  {
    variants: {
      variant: {
        default: ["bg-primary", "text-textWhite", "hover:bg-hover"],
        // light: ["bg-primary", "text-primary", "bg-opacity-10"],
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
  onClick?: any;
}

export function Button(props: ButtonProps) {
  const { variant, size, text } = props;

  return <button className={button({ variant, size })}>{text}</button>;
}

export default Button;
