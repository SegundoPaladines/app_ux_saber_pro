import { Container } from "@mui/material";
import React from "react";

export const HomePage: React.FC<{}> = () =>{
    return (
        <Container 
        maxWidth="xl"
        sx={{
          mt:10,
        }}
      >
        HOME
      </Container>
    );
}