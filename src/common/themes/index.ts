import { createTheme } from '@mui/material/styles';
import colors from 'assets/sass/_variables.module.scss';
import themePalette from './palette';

export const theme= (mode: string) => {
    //Lấy màu từ sass sang
    const color = colors;

    const themeOption = {
        colors: color,
    }
    const themeOptions = {
        palette: themePalette(themeOption, mode)
    };
    //Khởi tạo theme
    const themes = createTheme(themeOptions);
    return themes
}
