const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    // Set the Content-Type header to indicate JSON response
    res.setHeader('Content-Type', 'application/json');

    res.send({ message: 'Success' })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})