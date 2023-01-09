import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';


const theme = createTheme({
    palette: {
        common: {
            black: '#000',
            white: '#fff'
        },
        primary: {
            main: '#3861fb',
        },
        error: {
            main: '#E95D5D',
            light: '#fdefef'
        },
    },
    typography: {
        fontFamily: [
            'Inter', '-apple-system', 'BlinkMacSystemFont', 'segoe ui', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'
        ].join(','),
        subtitle1: {
            fontWeight: 500
        },
        button: {
            textTransform: 'capitalize'
        },
    },
    components: {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: 'none',
                    background: 'white',
                    borderRadius: 5
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    width: '100%'
                }
            }
        },
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
                    marginRight: 10
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