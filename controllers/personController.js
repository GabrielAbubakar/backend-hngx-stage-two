const Person = require('../models/person')


const baseRoute = (req, res) => {
    res.status(200).send({ message: 'This route is not available on this api, use the /api route' })
}

const getPeople = async (req, res) => {
    // Get all people from the people collection
    const people = await Person.find()

    // Respond with an array of all persons
    if (people.length !== 0) {
        res.status(200).json({ people: people })
    } else {
        res.status(200).json({ message: 'There are no records of people in this database. Please add some.' })
    }
}

const getPersonbyId = async (req, res) => {
    // Extract the request params
    const person_id = req.params.user_id

    try {
        const person = await Person.findById(person_id)

        // Respond with the object of the person
        res.status(200).json({ person: person })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Couldnt find any person with that ID at this database' })
    }
}

const createPerson = async (req, res) => {
    // Remove data from request body
    const name = req.body.name

    // Create a person
    const person = await Person.create({
        name: name
    })

    // Respond with new person
    res.status(201).json({ person: person })
}

const updatePersonbyId = async (req, res) => {
    const person_id = req.params.user_id
    const new_name = req.body.new_name

    try {
        // const old_name = await Person.findById(person_id)
        await Person.findByIdAndUpdate(person_id, {
            name: new_name
        })

        const person = await Person.findById(person_id)

        // res.status(200).json({ success: `${old_name.name} has been successfully updated to ${new_name}` })
        res.status(200).json({ person: person })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Couldnt find any person with that ID at this database' })
    }
}

const deletePersonbyId = async (req, res) => {
    const person_id = req.params.user_id

    try {
        await Person.deleteOne({ _id: person_id })

        res.status(200).json({ success: 'That record was successfully deleted' })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Couldnt find any person with that ID at this database' })
    }
}


module.exports = {
    baseRoute,
    getPeople,
    getPersonbyId,
    createPerson,
    updatePersonbyId,
    deletePersonbyId
}