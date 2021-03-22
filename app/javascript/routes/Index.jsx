import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import History from "../components/History";
import CreateGroupForm from "../components/CreateGroupForm";

export default props => (
    <Router>
        <Switch>
            <Route path="/" exact component={History}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/groups/new" exact component={CreateGroupForm}/>
        </Switch>
    </Router>
);