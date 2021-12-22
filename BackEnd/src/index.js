import app from "./app"
import {db} from './database/database'


// server and database settings
const force = true;
db.sync({ force })
    .then(function () {
        app.listen(3001, function () {
            console.log('Server is listening on port 3001!');
    })
})
