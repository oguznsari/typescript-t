import * as express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
require('dotenv').config();
import messenger from './src/controllers/createMessage';
import { Settings } from './settings';

const app = express();
let messages = new messenger(Settings.PORT);

const database: string = process.env.MONGO_URI;
// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} as ConnectOptions);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

interface Name {
    firstName: string;
}

// function with interface
const nameCreator = (name: Name): string => {
    return `Hello, ${name.firstName},`;
}

let myName = { firstName: 'Mant' };


// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(messages.messagePrint())
);

app.listen(Settings.PORT, () =>
    console.log(nameCreator(myName), messages.messagePrint())
);