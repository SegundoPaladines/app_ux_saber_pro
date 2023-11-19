import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ResgisterScorePage } from './pages/registro_puntajes';
import { RouterLayaut } from './common/router_layaut';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayaut/>} >
                <Route path="/" element={<ResgisterScorePage/>} /> 
                <Route path="/home" element={<HomePage/>} /> 
                <Route path="/login" element={<LoginPage/>} />
            </Route>
        </Routes>
    );
}