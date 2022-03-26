import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: 'This is the back-end of Notiefi.',
  });
});

app.listen(port, (): void => {
  console.log(`⚡️[server]: Server is listening on port ${port}`);
});
