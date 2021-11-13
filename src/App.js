import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Menubar from './Pages/Shared/MenuBar/Menubar';
import AddServices from './Pages/AddServices/AddServices';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrder from './Pages/MyOrder/MyOrder';
import Admin from './Pages/Admin/Admin/Admin/Admin';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Menubar></Menubar>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
                <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path='/admin'>
                <Admin></Admin>
              </Route>
              <Route path='/addservice'>
                <AddServices></AddServices>
              </Route>
              <Route path='/myorder'>
                <MyOrder></MyOrder>
              </Route>
              <PrivateRoute exact path="/booking/:serviceId">
                <Booking></Booking>
              </PrivateRoute>
              <Route path="*">
              </Route>
            </Switch>
          </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
