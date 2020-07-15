import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from './animal/AnimalForm';
import AnimalEditForm from './animal/AnimalEditForm';
import LocationList from "./location/LocationList";
import LocationDetail from "./location/LocationDetail";
import LocationForm from './location/LocationForm';
import LocationEditForm from "./location/LocationEditForm";
import LocationWithEmployee from "./location/LocationWithEmployee.js";
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from './employee/EmployeeForm';
import EmployeeEditForm from "./employee/EmployeeEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals";
import OwnerList from "./owner/OwnerList";
import OwnerForm from './owner/OwnerForm';
import OwnerEditForm from "./owner/OwnerEditForm";
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
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
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
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          if (isAuthenticated()) {
            return <AnimalEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />


            <Route
        exact path="/locations"
        render={(props) => {
          if (isAuthenticated()) {
          return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/locations/:locationsId(\d+)" render= {(props) => {
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
        <Route path="/locations/:locationId(\d+)/edit" render={props => {
          if (isAuthenticated()) {
            return <LocationEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/locations/:locationId(\d+)/details" render={(props) => {
            return <LocationWithEmployee {...props} />
        }} />


            <Route
        exact path="/employees"
        render={(props) => {
          if (isAuthenticated()) {
          return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
              <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
      <Route path="/employees/:employeeId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <EmployeeEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />
      <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
    return <EmployeeWithAnimals {...props} />
      }} />


            <Route
         exact path="/owner"
        render={props => { 
          if (isAuthenticated()) {
          return <OwnerList {...props} /> 
          } else {
            return <Redirect to="/login" />
          }
        }}
      />
              <Route path="/owner/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
      <Route path="/owner/:ownerId(\d+)/edit" render={props => {
        if (isAuthenticated()) {
          return <OwnerEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

    </React.Fragment>
  )
}

export default ApplicationViews;