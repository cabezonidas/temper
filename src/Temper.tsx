import { H2, H3, Paragraph } from "@cabezonidas/shop-ui";
import React from "react";

type Props = {
  id: string;
  title: string;
  name: string;
  achronym: string;
  general: string[];
  positive: string[];
  negative: string[];
};
export const Temper = ({
  id,
  general,
  positive,
  negative,
  name,
  achronym,
}: Props) => {
  return (
    <>
      <H2
        css={undefined}
        textAlign="center"
        id={id}
        color="#dd9b39"
        marginBottom="0px"
      >
        {name}
      </H2>
      <H3
        css={undefined}
        textAlign="center"
        id={id}
        color="#dd9b39"
        marginTop="0px"
      >
        {achronym}
      </H3>
      {general.map((item, i) => (
        <Paragraph key={i}>{item}</Paragraph>
      ))}
      <H3 css={undefined} textAlign="center" color="#9fcb9f">
        Aspectos tendenciales positivos
      </H3>
      {positive.map((item, i) => (
        <Paragraph key={i}>{item}</Paragraph>
      ))}
      <H3 css={undefined} textAlign="center" color="#f3b5b5">
        Aspectos tendenciales negativos
      </H3>
      {negative.map((item, i) => (
        <Paragraph key={i}>{item}</Paragraph>
      ))}
    </>
  );
};
