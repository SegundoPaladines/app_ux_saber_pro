import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

type TitleProps = {
    title:string;
    color:string;
    divider?:boolean| null;
    dividerColor?:string | null;
}

export const TitleComponent: React.FC<TitleProps> = ({title, color, divider, dividerColor}) =>{
    const [titulo, setTitulo] = useState('');
    const [caracterActual, setCaracterActual] = useState(0);

    useEffect(()=>{
        const intervalo = setInterval(()=>{
            if(caracterActual < title.length){
                setTitulo((prev)=> prev+title[caracterActual]);
                setCaracterActual((prev) => prev+1);
            }else{
                clearInterval(intervalo);
            }
        }, 100);
        return () => clearInterval(intervalo);
    });
    return (
        <Box
            sx={{
                width:"100%",
            }}
        >
            <Typography 
                variant="h5"
                sx={{
                    color:{color}
                }}
            >
              {titulo}
            </Typography>
            {
                divider?(
                    <Divider sx={{
                        borderBottomColor: dividerColor?dividerColor:"white",
                        mt:2,
                    }} />  
                ):null
            }
        </Box>
    );
}