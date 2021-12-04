import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/login" component={LoginPage} exact/>
        <Route component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
