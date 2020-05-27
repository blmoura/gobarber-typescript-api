import { Router } from 'express';

import AppointmentController from '@modules/appointments/infra/http/controller/AppointmentsController';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentController();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
