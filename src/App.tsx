import React from 'react';
import { useSelector } from 'react-redux';
import { theme } from 'common/themes'
import { ThemeProvider } from '@mui/material/styles';
import PortfolioScreen from 'screens/portfolio';
import { CssBaseline } from '@mui/material';
import { StoreState } from 'stores/reducer'

export default function App() {

    const mode = useSelector((state: StoreState) => state.mode);

    return <ThemeProvider theme={theme(mode)}>
        <CssBaseline />
        <PortfolioScreen />
        <p>{mode}</p>
    </ThemeProvider>
}