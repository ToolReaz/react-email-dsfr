import { Link as BaseLink } from "@react-email/components";
import * as React from "react";

export type LinkProps = {
  href: string;
};

export default function Link({ href }: LinkProps) {
  return (
    <BaseLink href={href} style={styles.default}>
      Click me
    </BaseLink>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  default: {
    fontFamily: "Marianne, Arial, sans-serif",
  },
};
