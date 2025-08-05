import { createTheme } from '@mui/material/styles';
import '@fontsource-variable/inter';

const theme = createTheme({
    palette: {
        primary: {
        main: '#760b7aba', 
        },
        secondary: {
        main: '#62a8c3', 
        },
        background: {
        default: '#f5f5f5',
        },
    },
    typography: {
        h1: {
            fontSize: '9vh',
            fontWeight: '700'
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: '400',

        },
        h3: {
            fontSize: '3vh',
            fontWeight: '700',
        },
        h4: {
            fontSize: '2.3vh',
            fontWeight: '500',
        },
        body1: {
            fontSize: "3vh",
            fontWeight: "700",

        },
        fontFamily: 'Inter Variable, sans-serif',
        },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                backgroundImage: `url("/img/bgg1.png")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: "center",
                backgroundAttachment: 'scroll',
                margin: 0, 
                padding: 0,
                minHeight: '100vh',
                width: '100%',
                },
            },
        },
  },
});

export default theme;