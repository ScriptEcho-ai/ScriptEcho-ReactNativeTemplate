import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.tsx';

const theme = createTheme({});

function App() {
  return (
    <>
      <style type="text/css">{`
        @font-face {
          font-family: 'MaterialIcons';
          src: url(${require("react-native-vector-icons/Fonts/MaterialIcons.ttf")}) format('truetype');
        }

        @font-face {
          font-family: 'FontAwesome';
          src: url(${require("react-native-vector-icons/Fonts/FontAwesome.ttf")}) format('truetype');
        }
      `}</style>

      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/test" element={<HomeScreen />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;