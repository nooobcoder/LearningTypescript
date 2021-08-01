import { Router, Request, Response } from 'express';

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

router.post('/login', (request: Request, response: Response): void => {
  const { email, password } = request.body;

  response.send(email + password);
});

export { router };
