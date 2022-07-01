const mongoose = require('mongoose');

const user = 'admin';
const password = 'wA48t16FZOoClvUk';
const database = 'todo';
const servername = 'todo.9zjprzi.mongodb.net';

module.exports = {
    connect: () => {
        mongoose.connect(`mongodb+srv://${user}:${password}@${servername}/${database}?retryWrites=true&w=majority`)
        .then((res) => console.log(`Connection Succesful. Database: ${res.connection.name}`))
        .catch((err) => console.log(`Error in DB Connection: ${err}`))
    }
};