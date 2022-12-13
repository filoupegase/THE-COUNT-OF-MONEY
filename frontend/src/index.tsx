import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './_core/app';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import theme from './_core/style/theme';
import { Provider } from 'react-redux';
import { store } from './_core/_store/store';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>
        <ThemeProvider theme={ theme }>
            <Provider store={ store }>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
