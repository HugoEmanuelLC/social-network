// DEPENDENCIES
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { PORT, corsOptionsCheck } from './config.js';
import {connectionMongodb} from './mongoDB/mongoDBconfig.js';

// ROUTES
import { routerTest } from './routes/routeTest.js';
import { authRouter } from './routes/authRoute.js';
import { pageSecretes } from './routes/pageSecretesRoute.js';

const app = express();

app.use(cors(corsOptionsCheck));

app.use(morgan('dev'));

app.use(express.json());

// DATABASE CONNECTION ET SERVER START
connectionMongodb.then((res) => {
    res.message ? 
    console.log(res.message) 
    :
    app.listen(PORT, () => {
        console.log('Server is running on port '+ PORT);
    });
})

app.use(authRouter)
app.use(pageSecretes)
app.use(routerTest);
app.get('*', (req, res) => res.status(404).json({message: 'Page not found'}));
