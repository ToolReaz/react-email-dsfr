import { Text as BaseTypo } from "@react-email/components";
import * as React from "react";

export type TypoProps = {};

export default function Typo({}: TypoProps) {
  return <BaseTypo style={styles.default}>Click me</BaseTypo>;
}

const styles: { [key: string]: React.CSSProperties } = {
  default: {
    fontFamily: "Marianne, Arial, sans-serif",
  },
};
