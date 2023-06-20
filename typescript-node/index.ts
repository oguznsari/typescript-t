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

// generics
function nameCreator<T>(name: T): T {
    return name;

}

let myName = nameCreator<string>('Manny, ');
// let myName = nameCreator<number>(5);


// declaration merging
interface Warriors {
    weapon: string;
    skills: number;
}

interface Warriors {
    name: string;
}

let ninja: Warriors = { weapon: "Shuriken", skills: 5, name: "Manny" }

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(ninja)
);

app.listen(Settings.PORT, () =>
    console.log(myName, messages.messagePrint())
);