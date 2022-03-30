import bodyParser from 'body-parser';
import 'dotenv/config';
import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port);

export default app;
