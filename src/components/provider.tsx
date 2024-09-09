import { Body, Font, Head, Html } from "@react-email/components";
import React, { ReactNode } from "react";

export type ProviderProps = {
  children?: ReactNode;
  title?: string;
  fonts?: {
    MarianneUrl?: string;
    Spectral?: string;
  };
};

export default function Provider({ children, title, fonts }: ProviderProps) {
  return (
    <Html lang="fr" dir="ltr">
      <Head>
        {fonts?.MarianneUrl && (
          <Font
            fontFamily="Marianne"
            fallbackFontFamily="Arial"
            webFont={{
              url: fonts?.MarianneUrl,
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        )}

        {fonts?.Spectral && (
          <Font
            fontFamily="Spectral"
            fallbackFontFamily="Georgia"
            webFont={{
              url: fonts?.Spectral,
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        )}

        {title && <title>{title}</title>}
      </Head>
      <Body style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {children}
      </Body>
    </Html>
  );
}
