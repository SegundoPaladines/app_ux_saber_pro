import React from "react";
import { NavBar } from './navbar';
import { Outlet } from "react-router-dom";

export const RouterLayaut: React.FC<{}> = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}