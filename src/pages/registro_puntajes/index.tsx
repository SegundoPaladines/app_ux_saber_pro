import { Container, Grid} from '@mui/material';
import { TitleComponent } from '../../components/titulo';
import React from "react";
import { PersonDataComponent } from '../../components/datos_persona';
import { ScoreForm } from '../../components/formulario_puntaje';


export const ResgisterScorePage: React.FC<{}> = () =>{
  return (
      <Container 
        maxWidth="xl"
        sx={{
          mt:12
        }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
        sx={{
          minWidth: "100hv"
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
        <Grid item 
          xs={12}
        >
          <PersonDataComponent
            title="Puntaje Global"
            name="Samuel Hernandez"
            profesion="Ingeniero de Sistemas"
            score={400}
            img="https://pbs.twimg.com/profile_images/1066477945076752384/6cgqAOkb_400x400.jpg"
          />
        </Grid>
        <Grid item 
          xs={12}
        >
          <ScoreForm />
        </Grid>
      </Grid>
    </Container>
  );
}