import {
  Button as BaseButton,
  type ButtonProps,
} from "@react-email/components";
import * as React from "react";

export type Props = ButtonProps & {
  variant?: "primary" | "secondary" | "tertiary";
  href?: string;
};

export default function Button({ href, variant = "primary", ...props }: Props) {
  return (
    <BaseButton href={href} style={styles.default} {...props}>
      Click me
    </BaseButton>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  default: {
    fontFamily: "Marianne, Arial, sans-serif",
    backgroundColor: "#000091",
    color: "#f5f5fe",
    display: "inline-flex",
    flexDirection: "row",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.5rem",
    minHeight: "2.5rem",
    padding: ".5rem 1rem",
    width: "fit-content",
  },
};
