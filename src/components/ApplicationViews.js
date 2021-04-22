import React from "react";
import { Switch, Route } from "react-router-dom";
import { ChrisList } from "./clJournal/ChrisList";
import { ChrisListAddForm } from "./clJournal/ChrisListAddForm";
import { ChrisItemUpdate } from "./clJournal/ChrisItemUpdate";


export default function ApplicationViews() {

  return (
    <main>
    
      <Switch>
        <Route path="/" exact>
          <ChrisList /> 
        </Route>
        <Route path="/home">
          <ChrisList /> 
        </Route>

        <Route path="/list">
          <ChrisList /> 
        </Route>

        <Route path="/add">
          <ChrisListAddForm /> 
        </Route>

        <Route path="/chrisItem/edit/:chrisItemId">
          <ChrisItemUpdate /> 
        </Route>
      </Switch>
    </main>
  );
};