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
        MuiDivider: {
            styleOverrides: {
                wrapper: {
                    fontWeight: 500
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '5px 20px'
                },
                startIcon: {
                    marginRight: 6
                }
            },
        },
        MuiButtonBase: {
            // The props to change the default for.
            defaultProps: {}// No exemple yet 💣!
        }
    }
});

export default theme;