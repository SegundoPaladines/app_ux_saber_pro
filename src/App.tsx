import './App.css';
import { Container, Grid} from '@mui/material';
import { TitleComponent } from './components/titulo';
import React, { useState } from "react";
import { PersonDataComponent } from './components/datos_persona';
import { ScoreForm } from './components/formulario_puntaje';
import { RouterLayaut } from './common/router_layaut';

function App() {

  const [score, setScore] = useState<number>(0);

  const handleScore = (newScore: number) =>{
    setScore(newScore);
  }
  
  return (
    <div>
      <RouterLayaut />
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
              score={score}
              img="https://pbs.twimg.com/profile_images/1066477945076752384/6cgqAOkb_400x400.jpg"
            />
          </Grid>
          <Grid item 
            xs={12}
          >
            <ScoreForm 
              onSocreChangue={handleScore}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
