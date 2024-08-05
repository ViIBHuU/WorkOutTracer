import { ThemeProvider, styled } from "styled-components";
import { LightTheme } from "./utils/themes.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Authentication from "./components/pages/Authentication";
import Navbar from './components/Navbar';
import Dashboard from "./components/pages/Dashboard.jsx";
import Workouts from './components/pages/Workouts.jsx';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser} />
            <Routes>
              <Route path="/"  element={<Dashboard />} />
              <Route path="/workouts"  element={<Workouts />} />
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
