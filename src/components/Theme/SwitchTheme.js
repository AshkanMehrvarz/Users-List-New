import * as React from "react";
import { Card, Container, Row, Spacer, Switch, Text } from "@nextui-org/react";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";

export default function SwitchTheme({ setThemeSwaper, themeSwaper }) {
  return (
    <Container fluid>
      <Card css={{ padding: 10, marginTop: 20 }}>
        <Row justify='space-between' align='center'>
          <Text
            weight='bold'
            h2
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}>
            Users List
          </Text>
          <Switch
            shadow
            checked={true}
            size='md'
            color='primary'
            iconOn={<MoonIcon filled />}
            iconOff={<SunIcon filled />}
            onChange={() => setThemeSwaper(!themeSwaper)}
          />
        </Row>
      </Card>
    </Container>
  );
}
