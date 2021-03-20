import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import History from "../components/History";

export default props => (
    <Router>
        <Switch>
            <Route path="/" exact component={History}/>
            <Route path="/home" exact component={Home}/>
        </Switch>
    </Router>
);