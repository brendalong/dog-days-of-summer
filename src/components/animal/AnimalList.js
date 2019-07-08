import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
// import AnimalForm from './AnimalForm'
import AnimalManager from '../../modules/AnimalManager'

class AnimalList extends Component {
    //define what we expect
    state = {
        animals: [],
    }

    //the problem... when coming from employee, the animalList needs to display
    //the updated info - not all the animals.

    deleteAnimal = id => {
        AnimalManager.delete(id)
        .then(() => {
            //is this from employeeWithAnimals, if yes
            //load employees again.
            //did not work
            // this.props.history.push("/employees")
            //else
            AnimalManager.getAll()
            .then((newAnimals) => {
                this.setState({
                    animals: newAnimals
                })
            })
        })
    }

    componentDidUpdate(prevProps){
        //invoked immediately after updating occurs.This method is not called for the initial render.
        console.log("componentDidUpdate", prevProps);
        // if (prevProps !== this.props){
        //     this.setState({animals:this.props.animals})
        // }
    }

    componentDidMount(){
        //getAll() from AnimalManager and hang on to that data; put it into state
        if (this.props.match.url !== "/employees"){
            console.log("no animals")
            AnimalManager.getAll()
            .then((animals) => {
                this.setState({
                    animals: animals
                })
            })
        }else {
            this.setState({
                animals: this.props.animals,
            })
        }
    }

    render(){
        console.log("AnimalList: Render");

        return (
            <>
            {/*<AnimalForm />*/}
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {this.props.history.push("/animals/new")}}>
                    Admit Animal
                </button>
            </section>
            <div className="container-cards">
                {this.state.animals.map(animal =>
                    <AnimalCard
                        key={animal.id}
                        animal={animal}
                        deleteAnimal={this.deleteAnimal}
                        {...this.props}
                    />
                )}
            </div>
            </>
        )
    }
}

export default AnimalList