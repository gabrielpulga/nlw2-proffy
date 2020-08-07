import express, { response } from 'express';
import Classescontroller from './controllers/ClassesController';

// express routing model
const routes = express.Router();
const classesControllers = new Classescontroller();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

export default routes;