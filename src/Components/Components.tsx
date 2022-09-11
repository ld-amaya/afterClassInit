import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar } from "./appbar/NavBar";

export const Components = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return (
        <div>
            <NavBar />
        </div>
    )
}