import React, { Component } from 'react';

class ToggleTest extends Component {
    state = {
        isGoing: true,
        notes: "",
        savenow: false
    }

    toggle = (event) => {
        this.setState({
            isGoing: !this.state.isGoing,
        });
    }

    showMe = () => {
        console.log("ShowMe State", this.state.notes);

    }

    handleChange = (event) => {
        this.setState({
            notes: event.target.value,
            savenow: true
        }, this.showMe)
        console.log("handleChange state:", this.state.notes)
    }

    saveNote = (event) => {
        console.log("gonna save the note!")
    }

    render() {

        const myStuff = <h1>Hello World</h1>;

        return (
            <>
                <hr></hr>
                {myStuff}
                <input
                    name="isGoing"
                    type="checkbox"
                    checked={this.state.isGoing}
                    onChange={this.toggle} />
                Check out this box
            <hr></hr>
                <div>
                    <textarea style={{ width: '100%' }} rows='2' type="text" value={this.state.notes || ""} name="notes" placeholder='notes' onChange={(e) => this.handleChange(e)} />
                    <button style={{ width: '100%' }} id="save" onClick={this.saveNote} disabled={this.state.savenow ? false : true}>Save Note</button>
                </div >
                <hr></hr>
            </>
        )
    }
}

export default ToggleTest;