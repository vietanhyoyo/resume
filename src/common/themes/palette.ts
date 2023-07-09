import { PaletteMode } from "@mui/material";

export default function themePalette(theme: any, mode: string) {

    return {
        mode: mode as PaletteMode,
        primary: {
            main: theme.colors?.primary,
        },
        secondary: {
            main: theme.colors?.secondary,
        },
    }
}