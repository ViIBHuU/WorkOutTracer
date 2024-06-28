import { createTheme } from '@mui/material/styles';

export const LightTheme = {
  bg: "#FFFFFF",
  bgLight: "#FFFFFF",
  primary: "#007AFF",
  secondary: "#5B86E5",
  disabled: "#b1b2b3",
  menubar: "#191c29",
  navbar: "#242B3F",
  arrow: "#AFAFB5",
  menu_primary_text: "#F2F3F4",
  menu_secondary_text: "#b1b2b3",
  table_header: "#242445",
  text_primary: "#404040",
  text_secondary: "#4d4c4c",
  card: "#FFFFFF",
  black: "#000000",
  white: "#FFFFFF",
  shadow: "#00000020",
  green: "#00ff6a",
  yellow: "#e8ba00",
  red: "#ef5350",
  orange: "#F7AD63",
  popup: "#242B3F",
  popup_text_primary: "#F2F3F4",
  popup_text_secondary: "#b1b2b3",
  output_node: "#49516b",
};

export const MuiTheme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    primary: {
      main: '#007AFF',
    },
    secondary: {
      main: '#5B86E5',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#404040',
      secondary: '#4d4c4c',
    },
  },
});
