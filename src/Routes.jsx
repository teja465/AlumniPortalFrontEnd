import React, { Component,Link } from 'react'
import { BrowserRouter ,Switch,Route, } from "react-router-dom";
export default function Routes_() {
    return (
        <BrowserRouter>
        <div>
            <Link to="/home"></Link>
            <Link to="/nav"></Link>

            <Switch>
                <Route path="/home" component={Home}>
       
                </Route>
                <Route path="/nav" component={About}>
                </Route>
            </Switch>

            </div>
        </BrowserRouter>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
