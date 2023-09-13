// Load environment variables
if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}
const express = require('express')
const cors = require('cors')
const connectToDB = require('./config/connectToDB')
const personController = require('./controllers/personController')

// Init express app
// const mongoose = require('mongoose')
const app = express()
connectToDB()
app.use(express.json())
app.use(cors())


app.get('/', personController.baseRoute)

// Get list of all people
app.get('/api', personController.getPeople)

// Get a person by their id
app.get('/api/:user_id', personController.getPersonbyId)

// Create a new person with name
app.post('/api', personController.createPerson)

// Update a persons name by their id
app.put('/api/:user_id', personController.updatePersonbyId)

// Delete a persons record by their id
app.delete('/api/:user_id', personController.deletePersonbyId)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})