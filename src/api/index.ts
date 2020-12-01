import { Router } from 'express';
import messages from './routes/messages.route';
import users from './routes/users.route';

export default () => {
    const app = Router();
    messages( app );
    users( app );
	return app;
}