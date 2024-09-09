import { Heading as BaseHeading } from "@react-email/components";
import * as React from "react";

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export default function Heading({
  level = 1,
  style,
  children,
  className,
}: HeadingProps) {
  return (
    <BaseHeading
      className={className}
      as={`h${level}`}
      style={{ ...styles.default, ...styles[level], ...style }}
    >
      {children}
    </BaseHeading>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  default: {
    fontFamily: "Marianne, Arial, sans-serif",
  },
  1: {
    fontSize: "40px",
    lineHeight: "48px",
    marginBottom: "24px",
  },
  2: {
    fontSize: "32px",
    lineHeight: "40px",
    marginBottom: "24px",
  },
  3: {
    fontSize: "28px",
    lineHeight: "36px",
    marginBottom: "24px",
  },
  4: {
    fontSize: "24px",
    lineHeight: "32px",
    marginBottom: "24px",
  },
  5: {
    fontSize: "22px",
    lineHeight: "28px",
    marginBottom: "24px",
  },
  6: {
    fontSize: "20px",
    lineHeight: "28px",
    marginBottom: "24px",
  },
};
