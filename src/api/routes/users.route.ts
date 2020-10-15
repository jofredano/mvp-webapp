import { Router } from "express";
import { addUserController, getUserController } from '../../controllers';

const route = Router();
export default ( app: Router ) => {
    app.use('/users', route);
    route.post('/register', addUserController);
    route.post('/list', getUserController );
};