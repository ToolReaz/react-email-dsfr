import { Text as BaseTypo } from "@react-email/components";
import * as React from "react";

export type TypoProps = {
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

export default function Typo({
  size = "md",
  children,
  style,
  className,
}: TypoProps) {
  return (
    <BaseTypo
      className={className}
      style={{ ...styles.default, ...styles[size], ...style }}
    >
      {children}
    </BaseTypo>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  default: {
    fontFamily: "Marianne, Arial, sans-serif",
  },
  xl: {
    fontSize: "20px",
    lineHeight: "32px",
    marginBottom: "24px",
  },
  lg: {
    fontSize: "18px",
    lineHeight: "28px",
    marginBottom: "24px",
  },
  md: {
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "24px",
  },
  sm: {
    fontSize: "14px",
    lineHeight: "24px",
    marginBottom: "24px",
  },
  xs: {
    fontSize: "12px",
    lineHeight: "20px",
    marginBottom: "24px",
  },
};
