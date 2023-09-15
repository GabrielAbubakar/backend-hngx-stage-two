# How to Use the API


# Features
There are 5 operations that can be carried out on this API.
- Create a Person in the mongoDB database by including a name field in a request.
- Update the name of a person by making a request with the id of the person and the name field of the new name.
- Read and get an array of all persons in the database
- Read and get the name of a specific person by making a request with id of the person
- Delete a specific record of a person by making a request with the id of the person

The respective HTTP Requests at the different routes and their respective responses would be included below;
- GET /api - Returns an array of all persons currently stored in the database
- GET /api/:user_id - Requires a path variable of the id of the person, returns an object of the person with that id if available containing their name
- POST /api - Requires a request body of { name: "James Bond" } that inserts a new person object with that name and a randomly generated id to the database. Returns the newly generated person object for further reference.
- PUT /api/:user_id - Requires both a path variable of the intended person and a request body of { name: "New Name"} that changes the name of the person with that id to the new name
- DELETE /api/:user_id - Requires a path variable of the id of the person and deletes that record from the database

## API Endpoints

| Endpoint            | Description                  | HTTP Method(s)  | Expected Request Body                            |
| ------------------- | ---------------------------- | --------------- | ---------------------------------------------- |
| `/api`              | Get a list of all people.      | GET             | N/A                                            |
| `/api/:user_id`     | Get a person by ID.            | GET             | N/A                                            |
| `/api`              | Create a new person.           | POST            | JSON object with name property                    |
| `/api/:user_id`     | Update a person by ID.         | PUT             | JSON object with updated name property            |
| `/api/:user_id`     | Delete a person by ID.         | DELETE          | N/A                                            |
