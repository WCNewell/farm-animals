exports.up = function (knex, Promise) {
    return knex.schema.createTable("animal", animal => {
        animal.increments()  
        animal.string("name")  
        animal.string("breed")  
    })  
}  

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists("animal")  
}  