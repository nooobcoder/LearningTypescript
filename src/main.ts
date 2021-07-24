import express, { NextFunction, Request, Response } from 'express';

import router from './routes/todos';

const app = express();

app.use(express.json());
app.use('/todos', router);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
