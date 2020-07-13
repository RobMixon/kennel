import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm';
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from './location/LocationForm';
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from './employee/EmployeeForm';
import OwnerList from "./owner/OwnerList";
import OwnerForm from './owner/OwnerForm';
import Login from "./auth/Login";



const ApplicationViews = () => {

  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
    <Route path="/login" component={Login} />
      <Route
        exact
        path="/"
        render={props => {
          return <Home />
        }}
      />
        <Route exact path="/animals" render={props => {
            if (isAuthenticated()) {
              return <AnimalList {...props} />
            } else {
              return <Redirect to="/login" />
            }
          }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return (
          <AnimalDetail 
            animalId={parseInt(props.match.params.animalId)}
            {...props}
          />
          )
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />

            <Route
        exact path="/locations"
        render={(props) => {
          return <LocationList {...props} />
        }} />
        <Route path="/locations/:locationsId(\d+)" render= {(props) => {
          return (
          <LocationDetail
           locationsId={parseInt(props.match.params.locationsId)}
             {...props}
           />
          )
        }} />
                <Route path="/locations/new" render={(props) => {
          return <LocationForm {...props} />
        }} />
            <Route
        exact path="/employees"
        render={(props) => {
          return <EmployeeList {...props} />
        }}
      />
              <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
            <Route
         exact path="/owner"
        render={props => {
          return <OwnerList {...props} />
        }}
      />
              <Route path="/owner/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
    </React.Fragment>
  )
}

export default ApplicationViews;