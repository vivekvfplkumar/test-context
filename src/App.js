import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from "./components/helpers/PrivateRoute";
import Nav from "./components/Nav";



function App() {
 return (
   <div>
     <ReactKeycloakProvider authClient={keycloak}>
       <Nav />
       <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<WelcomePage />} />
           <Route
             path="/secured"
             element={
               <PrivateRoute>
                 <SecuredPage />
               </PrivateRoute>
             }
           />
         </Routes>
       </BrowserRouter>
     </ReactKeycloakProvider>
   </div>
 );
}

export default App;