const Person = require('../models/person')


const baseRoute = (req, res) => {
    res.send({ message: 'This route is not available on this api, use the /api route' })
}

const getPeople = async (req, res) => {
    // Get all people from the people collection
    const people = await Person.find()

    // Respond with an array of all persons
    if (people.length !== 0) {
        res.json({ people: people })
    } else {
        res.json({ message: 'There are no records of people in this database. Please add some.' })
    }
}

const getPersonbyId = async (req, res) => {
    // Extract the request params
    const person_id = req.params.user_id

    try {
        const person = await Person.findById(person_id)

        // Respond with the object of the person
        res.json({ person: person })
    } catch (error) {
        console.log(error);
        res.json({ error: 'Couldnt find any person with that ID at this database' })
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
    res.json({ success: `A record of ${name} was successfully created` })
}

const updatePersonbyId = async (req, res) => {
    const person_id = req.params.user_id
    const new_name = req.body.new_name

    try {
        const old_name = await Person.findById(person_id)
        await Person.findByIdAndUpdate(person_id, {
            name: new_name
        })

        res.json({ success: `${old_name.name} has been successfully updated to ${new_name}` })
    } catch (error) {
        console.log(error);
        res.json({ error: 'Couldnt find any person with that ID at this database' })
    }
}

const deletePersonbyId = async (req, res) => {
    const person_id = req.params.user_id

    try {
        await Person.deleteOne({ _id: person_id })

        res.json({ success: 'That record was successfully deleted' })
    } catch (error) {
        console.log(error);
        res.json({ error: 'Couldnt find any person with that ID at this database' })
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