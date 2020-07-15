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




const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;



  return (
    <React.Fragment>

  <Route path="/login" render={props => {
    return <Login setUser={setUser} {...props} />
  }} />

      <Route
        exact
        path="/"
        render={props => {
          return <Home />
        }}
      />
        <Route exact path="/animals" render={props => {
            if (hasUser) {
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
          if (hasUser) {
            return <AnimalEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />


            <Route
        exact path="/locations"
        render={(props) => {
          return <LocationList {...props} />
        }} />

        <Route exact path="/locations/:locationsId(\d+)" render= {(props) => {
          if (hasUser) {
          return (
          <LocationDetail
           locationsId={parseInt(props.match.params.locationsId)}
             {...props}
           /> 
          )} else {
            return <Redirect to="/login" />
          }
        }} />
                <Route path="/locations/new" render={(props) => {
                  if(hasUser) {
          return <LocationForm {...props} /> 
                  } else {
                    return <Redirect to="/login" />
                  }
        }} />

        <Route path="/locations/:locationId(\d+)/edit" render={(props )=> {
          if (hasUser) {
            return <LocationEditForm {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />

        <Route path="/locations/:locationId(\d+)/details" render={(props) => {
          if (hasUser) {
            return <LocationWithEmployee {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />


            <Route
        exact path="/employees"
        render={(props) => {
          if (hasUser) {
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
        if (hasUser) {
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
          if (hasUser) {
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
        if (hasUser) {
          return <OwnerEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

    </React.Fragment>
  )
}

export default ApplicationViews;