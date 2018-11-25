import express from 'express';
import { join } from 'path';
import bodyParser from 'body-parser';
import register from 'babel-core/register';
import babelPolyfill from 'babel-polyfill';
import { notFound, catchErrors } from './middlewares/errors';

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes config
app.get('/', (req, res) => {
  res.send(`I'm handsome JS developer`);
});

// errors handling
app.use(notFound);
app.use(catchErrors);

// Start
app.listen(4000, () => {
    console.log(`Server is up!`);
});