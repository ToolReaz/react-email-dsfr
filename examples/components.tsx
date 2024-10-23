import React from "react";
import Provider from "../src/components/provider";
import Typo from "../src/components/typo";
import Heading from "../src/components/heading";
import Button from "../src/components/button";

export default function Components() {
  return (
    <Provider>
      <Heading level={1}>Heading level 1</Heading>
      <Heading level={2}>Heading level 2</Heading>
      <Heading level={3}>Heading level 3</Heading>
      <Heading level={4}>Heading level 4</Heading>
      <Heading level={5}>Heading level 5</Heading>
      <Heading level={6}>Heading level 6</Heading>
      <Typo size="xl">Typo xl Lorem, ipsum.</Typo>
      <Typo size="lg">Typo lg Lorem, ipsum.</Typo>
      <Typo size="md">Typo md Lorem, ipsum.</Typo>
      <Typo size="sm">Typo sm Lorem, ipsum.</Typo>
      <Typo size="xs">Typo xs Lorem, ipsum.</Typo>
      <Button>Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="tertiary">Button</Button>
    </Provider>
  );
}
