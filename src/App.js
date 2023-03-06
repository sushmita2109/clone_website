import "./App.css";
import { ButtonAppBar } from "./Components/ButtonAppBar";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

function App() {
  const theme = createTheme({
    pallet: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <ButtonAppBar />
        <h1>Dark Mode</h1>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
