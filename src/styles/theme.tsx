import { ThemeProvider } from "styled-components";
import theme from "../themes/default";
import GlobalStyles from "./global";

export function Theme() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default Theme;
