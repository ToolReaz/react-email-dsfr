import { Container } from "@react-email/components";
import * as React from "react";

export type HighlightProps = {};

export default function Highlight({}: HighlightProps) {
  return <Container style={styles.default}></Container>;
}

const styles: { [key: string]: React.CSSProperties } = {
  default: {
    fontFamily: "Marianne, Arial, sans-serif",
  },
};
