const api = require('./app');
const db = require('./mongoosedb');

db.connect();

const port = process.env.port || 3005;

api.listen(port, () => {
    console.log(`App listening on port ${port}`);
});