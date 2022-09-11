import React from 'react'
import { Auth0Provider } from "@auth0/auth0-react";
import { Components } from "./Components/Components";

export const App = () => {
  return (
    <Auth0Provider
      domain="dev-ugbui2k5.us.auth0.com"
      clientId="sw7rK2UAdqtpKGo6f4aKdJFateiNgbjZ"
      redirectUri={window.location.origin}
    >
    <Components />
  </Auth0Provider>
  )
}
