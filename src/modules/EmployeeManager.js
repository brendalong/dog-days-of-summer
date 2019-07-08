const remoteURL = "http://localhost:5002";

//http://localhost:5002/employees/1?_embed=animals

export default {
    getWithAnimals(id) {
        return fetch(`${remoteURL}/employees/${id}?_embed=animals`).then(e => e.json())
    },
    getAll(){
        return fetch(`${remoteURL}/employees/`).then(e => e.json())
    }
}