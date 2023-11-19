import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

type ThemeProps = {
    children: JSX.Element;
}

export enum fuentes_colores {
    //colores
    BG = '#12181b',
    WHITE = '#FFF',
    //fuentes
    FONT_GLOBAL = "'JetBrains Mono', monospace",
}

const theme = createTheme({
    palette:{
        mode: "dark",
        background:{
            default: fuentes_colores.BG,
        },
        primary:{
            main: fuentes_colores.WHITE,
        },
    },
    typography: {
        fontFamily: fuentes_colores.FONT_GLOBAL,
    },
    components:{
        MuiButton: {
            defaultProps:{
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5rem",
                    width: "100%",
                    padding: 12,
                },
            },
        },
    },
});

export const ThemeConfig: React.FC<ThemeProps> = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline  />
            {children}
        </ThemeProvider>
    );
}