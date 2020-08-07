import express, { response } from 'express';

import Classescontroller from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

// express routing model
const routes = express.Router();
const classesControllers = new Classescontroller();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;