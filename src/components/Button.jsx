import { Text } from "./Text"

export function Button({ variant = "default", children, className, ...props }) {
  const btnVariants = {
    default: "bg-gray-600",
    primary: "bg-black",
    secondary: "bg-purple-500",
  }

  return (
    <Text
      as="button"
      variant="heading"
      className={`
            flex items-center justify-center rounded-xl
            p-3 cursor-pointer text-white
            ${btnVariants[variant]}
            ${className ? className : ""}
        `}
      {...props}
    >
      {children}
    </Text>
  )
}