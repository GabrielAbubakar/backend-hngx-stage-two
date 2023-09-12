// Load environment variables
if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}
const express = require('express')
const connectToDB = require('./config/connectToDB')
const Person = require('./models/person')

// Init express app
// const mongoose = require('mongoose')
const app = express()
connectToDB()
app.use(express.json())


// Handle a get request to / route
app.get('/', (req, res) => {
    res.send({ message: 'This route is not available on this api, use the /api route' })
})

// Handle a get request to /api route
app.get('/api', async (req, res) => {
    // Get all people from the people collection
    const people = await Person.find()

    // Respond with an array of all persons
    res.json({ people: people })
})

// Handle a get request to /api/:user_id route
app.get('/api/:user_id', async (req, res) => {
    // Extract the request params
    const person_id = req.params.user_id

    try {
        // Get all people from the people collection
        const person = await Person.findById(person_id)

        // Respond with the object of the person
        res.json({ person: person })
    } catch (error) {
        console.log(error);
        res.json({ error: 'Couldnt find any person with that ID at this database' })
    }
})

// Handle a post request ot /api route
app.post('/api', async (req, res) => {
    // Remove data from request body
    const name = req.body.name

    // Create a person
    const person = await Person.create({
        name: name
    })

    // Respond with new person
    res.json({ person: person })
})

app.put('/api/:user_id', async (req, res) => {
    const person_id = req.params.user_id
    const new_name = req.body.new_name

    try {
        await Person.findByIdAndUpdate(person_id, {
            name: new_name
        })

        const person = await Person.findById(person_id)

        res.json({ person: person })
    } catch (error) {
        console.log(error);
        res.json({ error: 'Couldnt find any person with that ID at this database' })
    }
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})