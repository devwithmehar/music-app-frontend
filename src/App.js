import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";


Amplify.configure(amplifyconfig);

const code = new URLSearchParams(window.location.search).get("code")

function App() {
    
    return (
        <>
        <Header />
        {code ? <Dashboard code={code} /> : <Login />}
        </>
    );
  
}

export default App;
