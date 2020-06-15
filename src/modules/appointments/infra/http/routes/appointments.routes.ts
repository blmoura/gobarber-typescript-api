import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import AppointmentController from '@modules/appointments/infra/http/controller/AppointmentsController';
import ProviderAppointmentsController from '@modules/appointments/infra/http/controller/ProviderAppointmentsController';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentController();
const providerAppointmentsController = new ProviderAppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required(),
      date: Joi.date(),
    },
  }),
  appointmentsController.create,
);
appointmentsRouter.get('/me', providerAppointmentsController.index);

export default appointmentsRouter;
