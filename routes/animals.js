const express = require("express")  
const router = express.Router()  
 
const Animals = require("../models/animals")  

// List
router.get("/", (request, response, next) => {
    Animals.list().then(animals => {
        response.status(200).json({ animals })  
    }).catch(next)  
})
//next catches the errors and throws them over to the
//error handlers in app.js

// Read
router.get("/:id", (request, response, next) => {
    Animals.read(request.params.id).then(animal => {
        response.status(200).json({ animal })  
    }).catch(next)  
})  
// Create
router.post("/", (request, response, next) => {
    Animals.create(request.body).then(animal => {
        response.status(201).json({ animal })  
    }).catch(next)  
})  
// Update
router.put("/:id", (request, response, next) => {
    Animals.update(request.params.id, request.body).then(animal => {
        response.status(201).json({ animal })  
    }).catch(next)  
})  
// Delete
router.delete("/:id", (request, response, next) => {
    Animals.remove(request.params.id).then(() => {
        response.status(204).json({})  
    }).catch(next)  
})  

module.exports = router  
