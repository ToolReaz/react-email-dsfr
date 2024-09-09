import { Container } from "@react-email/components";
import * as React from "react";

export type FooterProps = {};

export default function Footer({}: FooterProps) {
  return <Container style={styles.default}>Click me</Container>;
}

const styles: { [key: string]: React.CSSProperties } = {
  default: {},
};
