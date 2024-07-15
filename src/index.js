import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme_light2 = createTheme({
  palette: {
    mode: "light",
/*     primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ABCECB",
    },
    tertiary: {
      main: "#E6F0F9",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
      light: "E6F0F9",
    },*/
  }, 
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme_light2}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
