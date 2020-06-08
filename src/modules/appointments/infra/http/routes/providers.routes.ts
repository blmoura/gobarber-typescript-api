import { Router } from 'express';

import ProvidersController from '@modules/appointments/infra/http/controller/ProvidersController';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';

const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

export default providersRouter;
