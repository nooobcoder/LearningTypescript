import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const requireAuth = (request: Request, response: Response, next: NextFunction): void => {
  if (request.session?.loggedIn) {
    next();
    return;
  } else {
    response.status(403).send({ message: 'You are not permitted to access this route' });
  }
};

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

  if (email && password && email === 'hi@hi.com' && password === 'password') {
    // Mark this person as logged in
    request.session = { loggedIn: true };

    // redirect them to the root route
    response.redirect('/');
  } else {
    response.send('Invalid email or password');
  }
});

router.get('/logout', (request: RequestWithBody, response: Response): void => {
  request.session = undefined;
  response.redirect('/');
});

router.get('/protected', requireAuth, (_request: RequestWithBody, response: Response): void => {
  response.send('Welcome to the protected route, logged in user!');
});

router.get('/', (request: Request, response: Response): void => {
  if (request.session?.loggedIn) {
    response.send(`
      <div>
        <div>You are logged in</div>
        <a href='/logout'>Logout</a>
      </div>
    `);
  } else {
    response.send(`
      <div>
        <div>You are not logged in</div>
        <a href='/login'>Login</a>
      </div>
    `);
  }
});

export { router };
