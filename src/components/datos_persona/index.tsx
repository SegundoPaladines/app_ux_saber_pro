import { Box, Grid, Paper } from '@mui/material';
import React from "react";
import { BoxComponent } from '../caja/index';

type PersonaProps = {
    title:string;
    name:string;
    profesion?:string | null;
    score:number;
    img?:string | null;
}

export const PersonDataComponent: React.FC<PersonaProps> = ({title, name, profesion ,score, img}) => {
    return (
        <Box
            width="100%"
        >
            <Grid
                width="100%"
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                justifyItems="center"
                spacing={2}
                sx={{
                    minWidth: "100hv"
                }}
            >
                <Grid item
                    xs={12} sm={12} md={5} lg={5} xl={5}
                >
                     <BoxComponent 
                        title={title}
                        score={score}
                    />
                </Grid>
                <Grid item
                    xs={12} sm={12} md={5} lg={5} xl={5}
                >
                    <BoxComponent 
                        title={name}
                        description={profesion}
                    />
                </Grid>
                <Grid item
                    xs={12} sm={12} md={2} lg={2} xl={2}
                >
                    <Paper
                        elevation={5}
                        sx={{
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            padding:"0.5rem",
                            height:"6rem"
                        }}
                    >
                        {
                            img?(
                                <img
                                    src={img} 
                                    alt="Imagen"
                                    width="auto"
                                    height="100%"
                                />
                            ): <p>Imagen No Cargada</p>
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}