import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authentication from './components/pages/Authentication';
import Navbar from './components/Navbar';
import { LightTheme, MuiTheme } from './utils/themes';
import styled from 'styled-components';

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


const currentUser = true;

function App() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <StyledThemeProvider theme={LightTheme}>
        <BrowserRouter>
          {currentUser ? (
            <Container>
              <Navbar />
            </Container>
          ) : (
            <Container>
              <Authentication />
            </Container>
          )}
        </BrowserRouter>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
