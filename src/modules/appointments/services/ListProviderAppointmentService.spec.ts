import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderAppointmentService from '@modules/appointments/services/ListProviderAppointmentService';

let listProviderAppointment: ListProviderAppointmentService;
let fakeAppointmentRepository: FakeAppointmentsRepository;

describe('ListProviderAppointment', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentsRepository();
    listProviderAppointment = new ListProviderAppointmentService(
      fakeAppointmentRepository,
    );
  });

  it('should be able to list the appointments on a specific day', async () => {
    const appointment1 = await fakeAppointmentRepository.create({
      provider_id: 'provider',
      user_id: 'user',
      date: new Date(2020, 6, 10, 14, 0, 0),
    });

    const appointment2 = await fakeAppointmentRepository.create({
      provider_id: 'provider',
      user_id: 'user',
      date: new Date(2020, 6, 10, 15, 0, 0),
    });

    const appointments = await listProviderAppointment.execute({
      provider_id: 'provider',
      year: 2020,
      month: 7,
      day: 10,
    });

    await expect(appointments).toEqual([appointment1, appointment2]);
  });
});
