import React from 'react';
import { Box, Container, Typography, Grid, Paper, Toolbar } from '@mui/material';
import HeaderNavbar from 'layouts/header_navbar';
import { useTranslation } from 'react-i18next';
import Top from './Top';

function PortfolioScreen() {

    const { t } = useTranslation();

    return <>
        <HeaderNavbar />
        <Box component="main">
            <Toolbar />
            <Top />
        </Box>
    </>
}

export default PortfolioScreen;
