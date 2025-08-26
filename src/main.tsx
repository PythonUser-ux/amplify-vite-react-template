import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

// Amplify.configure(outputs);
Amplify.configure({
  ...outputs,
  Auth: {
    Cognito: {
      // <-- force your new pool/client here
      userPoolId: "eu-north-1_PxOyzFtjR",
      userPoolClientId: "4qcm8ebs4kak0j955hifcces4o",
      loginWith: {
        email: true,
        oauth: {
          domain: "il-social-utile.auth.eu-north-1.amazoncognito.com",
          redirectSignIn: ["https://main.d4o7j5d8taluc.amplifyapp.com/"],
          redirectSignOut: ["https://main.d4o7j5d8taluc.amplifyapp.com/"],
          responseType: "code",
          scopes: ["openid", "email", "profile"],
        },
      },
    },
  },
});


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator socialProviders={['google']}>
      <App />
    </Authenticator>
  </React.StrictMode>
);
