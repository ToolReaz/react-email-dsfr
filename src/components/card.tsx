import { Container } from "@react-email/components";
import * as React from "react";

export type CardProps = {};

export default function Card({}: CardProps) {
  return <Container style={styles.default}>Click me</Container>;
}

const styles: { [key: string]: React.CSSProperties } = {
  default: {
    fontFamily: "Marianne, Arial, sans-serif",
  },
};
