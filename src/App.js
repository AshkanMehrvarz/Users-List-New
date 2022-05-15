import * as React from "react";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import MainComponent from "./components/Main/MainComponent";
import SwitchTheme from "./components/Theme/SwitchTheme";

const myDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      background: "#202020",
      text: "#EDF5FF",
    },
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'",
    },
  },
});

const myLightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      background: "#fff",
      text: "#00254D",
    },
    fonts: {
      sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'",
    },
  },
});

export default function App() {
  const [theme, setTheme] = React.useState(true);

  return (
    <NextUIProvider theme={theme ? myDarkTheme : myLightTheme}>
      <SwitchTheme setThemeSwaper={setTheme} themeSwaper={theme} />
      <MainComponent />
    </NextUIProvider>
  );
}
