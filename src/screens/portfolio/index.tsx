import React from 'react';
import { Box, Container, Typography, Grid, Paper, Toolbar } from '@mui/material';
import HeaderNavbar from 'layouts/header_navbar';
import { useTranslation } from 'react-i18next';
import About from './About';

function PortfolioScreen() {

    const { t } = useTranslation();

    return <>
        <HeaderNavbar />
        <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <About />
        </Box>
    </>
}

export default PortfolioScreen;
