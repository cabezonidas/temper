import { H2, H3, Paragraph } from "@cabezonidas/shop-ui";
import React from "react";

type Props = {
  id: string;
  title: string;
  general: string[];
  positive: string[];
  negative: string[];
};
export const Temper = ({ id, title, general, positive, negative }: Props) => {
  return (
    <>
      <H2 css={undefined} textAlign="center" id={id}>
        {title}
      </H2>
      <H3 css={undefined} textAlign="center">
        Características generales
      </H3>
      {general.map((item, i) => (
        <Paragraph key={i}>{item}</Paragraph>
      ))}
      <H3 css={undefined} textAlign="center">
        Aspectos tendenciales positivos
      </H3>
      {positive.map((item, i) => (
        <Paragraph key={i}>{item}</Paragraph>
      ))}
      <H3 css={undefined} textAlign="center">
        Aspectos tendenciales negativos
      </H3>
      {negative.map((item, i) => (
        <Paragraph key={i}>{item}</Paragraph>
      ))}
    </>
  );
};
