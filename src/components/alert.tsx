import { Container } from "@react-email/components";
import * as React from "react";

export type AlertProps = {};

export default function Alert({}: AlertProps) {
  return <Container style={styles.default}>Click me</Container>;
}

const styles: { [key: string]: React.CSSProperties } = {
  default: {
    fontFamily: "Marianne, Arial, sans-serif",
  },
};
