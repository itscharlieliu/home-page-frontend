import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
      fontFamily: [
        'Playfair Display',
        'serif',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });