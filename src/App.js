import React from 'react';
import './App.css';
import NavLinks from './components/navigation/NavLinks';
import MHeader from './components/navigation/MHeader';
import { BrowserRouter as Router, Route, Switch} from
"react-router-dom"
import PageAccueil from './components/pages/PageAccueil';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PageAccueil />
          <MHeader />
        </Switch>
        
      </Router>
        
      
      
      
    </div>
  );
}

export default App;
