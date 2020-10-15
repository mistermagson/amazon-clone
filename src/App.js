import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import {auth} from "./firebase-config"

const App = () => {

    useEffect( (dispatch) =>{
            auth.onAuthStateChanged((authUser) => {
                console.log("THE USER IS >>> ", authUser);

                if (authUser) {
                    // the user just logged in / the user was logged in

                    dispatch({
                        type: "SET_USER",
                        user: authUser,
                    });
                } else {
                    // the user is logged out
                    dispatch({
                        type: "SET_USER",
                        user: null,
                    });
                }
            });
        }

    ,[]);

  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Header />
                    <Home />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
