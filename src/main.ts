import express from 'express';
import { router } from './routes/loginRoutes.js';

const app = express();

// Express 4.16+, express.urlencoded is the middleware to parse html bodies
app.use(express.urlencoded());
app.use(router);

app.listen(3000, () => console.log('App is listening on port [3000]'));
