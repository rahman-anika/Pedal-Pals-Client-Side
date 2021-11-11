// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AllProducts from './components/Home/AllProducts/AllProducts';
import ProductDetails from './components/Home/ProductDetails/ProductDetails';
import AdminRoute from './components/Login/AdminRoute/AdminRoute';
import UpdateOrder from './components/Dashboard/UpdateOrder/UpdateOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>

            {/* Route for homepage  */}
            <Route exact path="/">
              <Home></Home>
            </Route>


            {/* Route for homepage  */}
            <Route path="/home">
              <Home></Home>
            </Route>


            {/* Route for login  */}
            <Route path="/login">
              <Login></Login>
            </Route>

            {/* Route for register  */}
            <Route path="/register">
              <Register></Register>
            </Route>

            {/* Route for all products  */}
            <Route path="/products">
              <AllProducts></AllProducts>
            </Route>


            {/* PrivateRoute for showing service details  */}
            <PrivateRoute path="/serviceDetails/:serviceId">
              <ProductDetails></ProductDetails>
            </PrivateRoute>

            {/* adminroute for update booking status  */}
            <AdminRoute exact path="/update/:orderId">
              <UpdateOrder></UpdateOrder>
            </AdminRoute>

            {/* Route for dashboard  */}
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>


            {/* Route for 404  */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
