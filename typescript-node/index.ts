import * as express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
require('dotenv').config();

const app = express();
const PORT: number = 3000;

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

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);