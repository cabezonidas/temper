import React from "react";
import "./App.css";
import {
  UiProvider,
  Checkbox,
  H1,
  Label,
  Form,
  Box,
  Button,
  Dialog,
  H3,
} from "@cabezonidas/shop-ui";
import { statements, valuations } from "./questionaire";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import "@reach/dialog/styles.css";
import { Temper } from "./Temper";
import styled from "@cabezonidas/shop-ui/lib/theme/styled";

i18next.use(initReactI18next).init({
  resources: { "es-AR": {} },
  lng: "en-NZ",
  fallbackLng: "en-NZ",
});

const assessQuestionaire = (state: { id: number; checked: boolean }[]) =>
  Object.entries(
    state
      .filter((s) => s.checked)
      .map((s) => s.id)
      .reduce<string[]>((res, itemId) => {
        const checkboxes = valuations
          .filter((value) => value.statements.includes(itemId))
          .map((value) => value.id);
        return [...res, ...checkboxes];
      }, [])
      .reduce<{ [key: string]: number }>(
        (res, item) => ({
          ...res,
          [item]: (res[item] ?? 0) + 1,
        }),
        {}
      )
  ).sort((a, b) => (a[1] < b[1] ? 1 : -1));

const initState = () => statements.map(({ id }) => ({ id, checked: false }));

function App() {
  const [state, setState] = React.useState(initState);
  const [showModal, setShowModal] = React.useState(false);

  return (
    <UiProvider mode="dark" palette="dollar" suspense={false}>
      {showModal && (
        <Dialog
          aria-label="Results"
          isOpen={true}
          onDismiss={() => setShowModal(false)}
        >
          <Box
            display="grid"
            gridTemplateColumns="1fr auto"
            style={{ gap: 10 }}
          >
            <H3 css={undefined}>Temperamento</H3>
            <H3 css={undefined}>Coincidencias</H3>
            {assessQuestionaire(state).map((s) => {
              const valuation = valuations.find((v) => v.id === s[0])!;
              const count = s[1];
              return (
                <React.Fragment key={s[0]}>
                  <Box>
                    <Box>
                      <Link
                        href={`#${valuation.id}`}
                        onClick={() => setShowModal(false)}
                      >
                        <strong>{valuation.name}</strong>
                      </Link>
                    </Box>
                    <Box fontSize="small">{valuation.achronym}</Box>
                  </Box>
                  <Box textAlign="center">{count}</Box>
                </React.Fragment>
              );
            })}
          </Box>
        </Dialog>
      )}
      <H1 css={undefined} textAlign="center">
        TEST CARACTEROLÓGICO
      </H1>
      <Form
        display="grid"
        style={{ gap: 10 }}
        gridTemplateColumns="auto 1fr"
        maxWidth="600px"
        margin="auto"
        onSubmit={(e) => {
          e.preventDefault();
          setShowModal(true);
        }}
      >
        {statements.map(({ id, text }) => (
          <React.Fragment key={id}>
            <Label css={undefined} htmlFor={String(id)}>
              {text}
            </Label>
            <Checkbox
              id={String(id)}
              css={undefined}
              checked={state.find((s) => s.id === id)!.checked}
              onChange={() =>
                setState((prev) =>
                  prev.map((i) =>
                    i.id === id ? { id, checked: !i.checked } : i
                  )
                )
              }
            />
          </React.Fragment>
        ))}
        <Box
          width="100%"
          display="flex"
          justifyContent="space-around"
          marginBottom={50}
        >
          <Box display="flex" style={{ gap: 20 }}>
            <Button
              css={undefined}
              type="reset"
              onClick={() => setState(initState)}
            >
              Limpiar
            </Button>
            <Button
              css={undefined}
              type="submit"
              disabled={!state.some((s) => s.checked)}
              variant="primary"
            >
              Ver resultados
            </Button>
          </Box>
        </Box>
      </Form>
      <Box width={"80%"} margin={"auto"}>
        {valuations.map((v) => (
          <Temper key={v.id} id={v.id} {...v.temper} />
        ))}
      </Box>
    </UiProvider>
  );
}

export default App;

export const Link = styled.a`
  &:link {
    color: inherit;
  }
  &:visited {
    color: inherit;
  }
  &:hover {
    color: inherit;
  }
  &:active {
    color: inherit;
  }
`;
