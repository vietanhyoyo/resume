import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import Box from '@mui/material/Box';

const LanguageSwitch = () => {
    const { i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (language: any) => {
        i18n.changeLanguage(language);
        handleClose();
    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',}}>
            <Button
                color="inherit"
                startIcon={<LanguageIcon />}
                onClick={handleClick}
            >
                {i18n.language === 'en' ? 'En' : 'Vi'}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleLanguageChange('en')}>
                    English
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange('vi')}>
                    Tiếng Việt
                </MenuItem>
            </Menu>
        </Box>
    );
};

export default LanguageSwitch;
