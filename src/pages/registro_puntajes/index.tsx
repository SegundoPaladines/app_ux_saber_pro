import { Container, Grid} from '@mui/material';
import { TitleComponent } from '../../components/titulo';
import React from "react";

export const ResgisterScorePage: React.FC<{}> = () =>{
  return (
      <Container 
      maxWidth="xl"
      sx={{
        mt:12,
      }}
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={2}
        sx={{
          minWidth: "90hv"
        }}
      >
        <Grid item xs={12}>
          <TitleComponent 
            title="Registrar Resultados Pruebas Saber Pro"
            color="white"
            divider
            dividerColor="green"
          />
        </Grid>
      </Grid>
    </Container>
  );
}