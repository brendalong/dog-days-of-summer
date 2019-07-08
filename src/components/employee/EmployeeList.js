import React, { Component } from 'react'
import EmployeeManager from '../../modules/EmployeeManager';
import EmployeeCard from './EmployeeCard';

class EmployeeList extends Component {
    state = {
        employees: []
    }

     componentDidMount() {
        EmployeeManager.getAll()
            .then(APIResult => {
                this.setState({ employees: APIResult });
            })
    }

    render() {

        return (
            <div className="cards">
                {this.state.employees.map(employee =>
                   <EmployeeCard key={employee.id} employee={employee} {...this.props} />
                )}
            </div>
        )
    }

}

export default EmployeeList;