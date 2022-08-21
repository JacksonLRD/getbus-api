import { Router } from 'express';
import exampleController from '../../../modules/examples/presentation/controllers/example.controllers';

const exampleRouter = Router();

exampleRouter.get('/', exampleController.findAll);

export default exampleRouter;
