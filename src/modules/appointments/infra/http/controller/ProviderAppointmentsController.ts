import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderAppointmentService from '@modules/appointments/services/ListProviderAppointmentService';

export default class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const provider_id = request.user.id;
    const { day, month, year } = request.body;

    const listProviderAppointment = container.resolve(
      ListProviderAppointmentService,
    );

    const availability = await listProviderAppointment.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(availability);
  }
}
