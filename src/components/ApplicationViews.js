import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalDetail from "./animal/AnimalDetail";
import LocationDetail from "./location/LocationDetail";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList />
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return (
          <AnimalDetail 
            animalId={parseInt(props.match.params.animalId)}
            {...props}
          />
          );
        }} />

            <Route
        exact path="/locations"
        render={(props) => {
          return <LocationList />;
        }} />
        <Route path="/locations/:locationsId(\d+)" render= {(props) => {
          return (
          <LocationDetail
           locationsId={parseInt(props.match.params.locationsId)}
             {...props}
           />
          );
        }} />
            <Route
        path="/Employees"
        render={(props) => {
          return <EmployeeList/>;
        }}
      />
            <Route
        path="/Owners"
        render={(props) => {
          return <OwnerList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;