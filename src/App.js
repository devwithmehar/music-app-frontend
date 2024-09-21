import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


Amplify.configure(amplifyconfig);

const code = new URLSearchParams(window.location.search).get("code")

function App() {
    
    return (
        <Router>
        <Header />
        <Routes>
        <Route path="/" element={code ? <Dashboard code={code} /> : <Login />} />
          <Route path="/callback" element={<Dashboard code={code} />} />
        </Routes>
        </Router>
    );
  
}

export default App;
