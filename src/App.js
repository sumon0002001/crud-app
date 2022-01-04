import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import EditClient from './components/EditClient';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <Navbar />
        <Switch >
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/all" component={AllUsers} />
          <Route exact path="/add" component={AddUser} />
          <Route exact path = "/edit/:id" component = {EditClient} />
          <Route component={NotFound} />
        </Switch>
       
    </Router>
   
  );
}

export default App;
