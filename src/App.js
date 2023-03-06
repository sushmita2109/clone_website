import "./App.css";
import { ButtonAppBar } from "./Components/ButtonAppBar";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: "250vh" }}>
        <ButtonAppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
        <h1>Dark Mode</h1>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
