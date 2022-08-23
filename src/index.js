import ReactDOM from 'react-dom/client'
import App from "./App";
import './index.css'
import {
    BrowserRouter,
    Routes,
    Route,
  } from 'react-router-dom';
import Startup from './pages/startup/startup'
import Signup from './pages/signup/signup'

  

const root= ReactDOM.createRoot(
    document.querySelector('#root')
    );

root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" component={App}/>
        <Route path="startup" component= {<Startup/>}/>
        <Route path="signup" component= {<Signup/>}/>
    </Routes>
    
  </BrowserRouter>
);