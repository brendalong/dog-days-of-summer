import React, { Component } from 'react';

class AnimalCard extends Component {
    render() {
        return (
            <div className="card">
                <img class="petImg" src={require('./dog.svg')} alt="My Dog" />
                <div className="container">
                    <h4>Name: <b>Doodles</b></h4>
                    <p>Breed: Poodle</p>
                </div>
            </div>
        );
    }
}

export default AnimalCard;