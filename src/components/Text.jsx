import { createElement } from "react";

export function Text({ as = "span", variant = "default", children, className, ...props }) {
  const textVariants = {
    default: "text-xl",
    muted: "text-xl text-gray-500",
    heading: "text-2xl",
    blast: "text-3xl",
  }

  return createElement(
    as,
    {
      className: `${textVariants[variant]} ${className}`,
      ...props,
    },
    children,
  )
}