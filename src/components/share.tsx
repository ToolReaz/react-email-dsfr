import { Container } from "@react-email/components";
import * as React from "react";

export type ShareProps = {};

export default function Share({}: ShareProps) {
  return <Container style={styles.default}></Container>;
}

const styles: { [key: string]: React.CSSProperties } = {
  default: {},
};
