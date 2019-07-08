import { Route, withRouter, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
import Login from './auth/Login'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
//only include these once they are built
// import LocationCard from './location/LocationCard'
import EmployeeList from './employee/EmployeeList'
// import OwnerCard from './owner/CardCard'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'


class ApplicationViews extends Component {

    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

    render() {

        return (
            <>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
               {/*  <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}/>
                }} /> */}
                <Route exact path="/animals" render={props => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
                        {...props}/>
                }} />

                <Route path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props} />
                    }}
                />

                <Route exact path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />



                {/*<Route path="/login" component={Login} />*/}
                <Route exact path="/login" render={(props) => {
                    return <Login {...props} />
                }} />

                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList {...props} />
                }} />

                <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
                    return <EmployeeWithAnimals {...props} />
                }} />
            </>
        )
    }
}

export default withRouter(ApplicationViews)