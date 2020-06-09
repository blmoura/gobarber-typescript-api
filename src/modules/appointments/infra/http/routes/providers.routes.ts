import { Router } from 'express';

import ProvidersController from '@modules/appointments/infra/http/controller/ProvidersController';
import ProviderMonthAvailabilityController from '@modules/appointments/infra/http/controller/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '@modules/appointments/infra/http/controller/ProviderDayAvailabilityController';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get(
  '/:provider_id/month-availability',
  providerMonthAvailabilityController.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailabilityController.index,
);

export default providersRouter;
