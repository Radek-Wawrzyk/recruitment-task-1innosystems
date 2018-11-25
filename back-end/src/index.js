import express from 'express';
import { join } from 'path';
import bodyParser from 'body-parser';
import register from 'babel-core/register';
import babelPolyfill from 'babel-polyfill';
import { notFound, catchErrors } from './middlewares/errors';
import cors from 'cors';
import Users from './routes/users';

// Connect to database
import dbConfig from './config/database';
import mongoose from 'mongoose';

mongoose.connect(dbConfig.mongoUrl);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes config
app.use('/api/users', Users());

// errors handling
app.use(notFound);
app.use(catchErrors);

// Start
app.listen(4000, () => {
    console.log(`Server is up!`);
});