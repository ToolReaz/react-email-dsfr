import { Hr as BaseDivider } from "@react-email/components";
import * as React from "react";

export type DividerProps = {};

export default function Divider({}: DividerProps) {
  return <BaseDivider style={styles.default}>Click me</BaseDivider>;
}

const styles: { [key: string]: React.CSSProperties } = {
  default: {},
};
