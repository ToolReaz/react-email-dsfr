import { Button as BaseButton, ButtonProps } from "@react-email/components";
import * as React from "react";

export type ButtonPropsType = ButtonProps & {
    variant: "primary" | "secondary"
}

export default function Button({ href }: ButtonPropsType) {
    return (
        <BaseButton
            href={href}
            style={styles.default}
        >
            Click me
        </BaseButton>
    );
}

const styles = {
    default: {
        fontFamily: "Marianne, Arial, sans-serif",
        alignItems: "center",
        backgroundColor: "#000091",
        color: "#f5f5fe",
        display: "inline-flex",
        flexDirection: "row",
        fontSize: "1rem",
        fontWeight: 500,
        lineHeight: "1.5rem",
        minHeight: "2.5rem",
        padding: ".5rem 1rem",
        width: "fit-content",
    }
}
