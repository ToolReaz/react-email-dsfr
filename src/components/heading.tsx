import { Heading as BaseHeading } from "@react-email/components";
import * as React from "react";

export type HeadingProps = {};

export default function Heading({}: HeadingProps) {
  return <BaseHeading style={styles.default}>Click me</BaseHeading>;
}

const styles: { [key: string]: React.CSSProperties } = {
  default: {
    fontFamily: "Marianne, Arial, sans-serif",
  },
};
