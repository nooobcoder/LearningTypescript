import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_request: Request, response: Response) => {
  response.send(`<div><h1>Hi there</h1></div>`);
});

app.listen(3000, () => console.log('App is listening on port [3000]'));
