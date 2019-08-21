import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Groups from "./components/groups";
import Locations from "./components/locations";
import Orders from "./components/orders";
import PrepItems from "./components/prepItems";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    //state = {};

    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/groups" component={Groups} />
            <Route path="/locations" component={Locations} />
            <Route path="/orders" component={Orders} />
            <Route path="/prepitems" component={PrepItems} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" component={LoginForm} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
