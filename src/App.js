import "./App.css";
import { ButtonAppBar } from "./Components/ButtonAppBar";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { useState } from "react";
import { Header } from "./Components/Header";

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
        <Header />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
