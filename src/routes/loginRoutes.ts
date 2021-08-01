import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (_request: Request, response: Response): void => {
  response.send(`<form method='POST'>
                          <div>
                            <label>Email</label>
                            <input name='email'/>
                          </div>
                          <div>
                            <label>Password</label>
                            <input name='password' type='password'/>
                          </div>
                          <button>Submit</button> 
                       </form>
                `);
});

router.post('/login', (request: RequestWithBody, response: Response): void => {
  const { email, password } = request.body;
  email && password && response.send({ input: { email, password: password } });
});

export { router };
