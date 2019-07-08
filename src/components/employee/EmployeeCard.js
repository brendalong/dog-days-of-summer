import React, { Component } from 'react'

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <p>Employee: {this.props.employee.name}</p>
                <button type="button" onClick={() => { this.props.history.push(`/employees/${this.props.employee.id}/details`) }}>Details</button>
                </div>
                )

            }
        }

export default EmployeeCard;