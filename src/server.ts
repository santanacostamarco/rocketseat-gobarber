import express from 'express';
// import routes from './routes';

const app = express();

app.use(express.json());
// app.use(routes());
app.get('/', (request, response) =>
  response.status(200).json({ message: 'hello, world' }),
);

console.log('⚙ Server is running in port 3333');

app.listen(3333);
