import './App.css';
import { Button, Container } from '@mui/material';
import { NavBar } from './common/navbar';

function App() {
  return (
    <div>
      <NavBar />
      <Container 
        maxWidth="xl"
        sx={{
          mt:10,
        }}
      >
        
      </Container>
    </div>
  );
}

export default App;
