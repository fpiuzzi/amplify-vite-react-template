import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Authenticator } from '@aws-amplify/ui-react';

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Authenticator
            components={{
                SignIn: {
                    Header() {
                        return <h3>Connexion à votre compte</h3>;
                    },
                },
                SignUp: {
                    Header() {
                        return <h3>Créer un nouveau compte</h3>;
                    },
                }
            }}
        >
            <App />
        </Authenticator>
    </React.StrictMode>
);
