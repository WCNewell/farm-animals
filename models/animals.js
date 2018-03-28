const database = require("../database_connection")  

function list() {
    return database("animal").select()  
}

function read(id) {
    return database("animal")
        .select()
        .where("id", id)
        .first()  
}

function create(animal) {
    return database("animal")
        .insert(animal)
        .returning("*")
        .then(animals => animals[0])  
}

function update(id, animal) {
    return database("animal")
        .update(animal)
        .where("id", id)
        .returning("*")
        .then(animals => animals[0])  
}

function remove(id) {
    return database("animal")
        .delete()
        .where("id", id)
        .returning("*")
        .then(animals => animals[0])  
}

module.exports = {
    list,
    read,
    create,
    update,
    remove
}  