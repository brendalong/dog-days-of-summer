import React, { Component } from 'react'
import AnimalCard from './AnimalCard'
import './Kennel.css'

class Kennel extends Component {
    render() {
        return (
            <div>
                <h2>Student Kennels<br />
                    <small>Loving care when you're not there.</small>
                </h2>
                <address>
                    Visit Us at the Nashville North Location
                    <br />500 Puppy Way
                </address>

                <div className="centered">
                    <section className="cards">
                        <AnimalCard />
                        <AnimalCard />
                        <AnimalCard />
                    </section>
                </div>
            </div>
        );
    }
}

export default Kennel;