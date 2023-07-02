import { createContext, useState } from 'react';
import{BrowserRouter as Router} from "react-router-dom";
import RoutesConfig from './routes';
import Head from './layouts/Header';
import Main from './layouts/Main';
import Footer from './layouts/Footer';

export const AuthContext = createContext(null);

function App() {
  
  const[user,setUser]=useState({
      token:""
  });

  return (
    <AuthContext.Provider value={user}>
      <Router> 
        <Head/> 
        <Main>
            <RoutesConfig/>
        </Main>  
        <Footer/>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
