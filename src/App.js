
import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/Home/HomePage';
import {Route, Switch, Redirect} from 'react-router-dom'
import CountryDetails from './components/Home/CountryDetails';

function App() {
  return (
    <div className="App">
     <Header />
    <Switch>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home/" exact>
     <HomePage />
     </Route>
     <Route path="/country">
        <h1>country</h1>
     </Route>
     <Route path="/:country">
        <CountryDetails />
     </Route>
     </Switch>
    </div>  
  );
}

export default App;
