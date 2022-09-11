import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
<<<<<<< HEAD

export const Components = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button onClick = { () => loginWithRedirect()} >
            Log In
        </button >
=======
import { NavBar } from "./appbar/NavBar";

export const Components = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return (
        <div>
            <NavBar />
        </div>
>>>>>>> b5e3d43cda603e5b3a0147d9cf066151fb5a3013
    )
}