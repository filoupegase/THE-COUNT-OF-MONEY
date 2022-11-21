import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3861fb',
        },
    },
    typography: {
        fontFamily: [
            'Inter', '-apple-system', 'BlinkMacSystemFont', 'segoe ui', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'
        ].join(','),
        button: {
            textTransform: 'capitalize'
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {}
        }
    }
});

export default theme;