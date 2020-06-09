import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabityService from '@modules/appointments/services/ListProviderMonthAvailabityService';

let listProviderMonthAvailability: ListProviderMonthAvailabityService;
let fakeAppointmentRepository: FakeAppointmentsRepository;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabityService(
      fakeAppointmentRepository,
    );
  });

  it('should be able to list the month availabity from provider', async () => {
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 9, 8, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 9, 9, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 9, 10, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 9, 11, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 9, 12, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 9, 13, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 9, 14, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 9, 15, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 9, 16, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 9, 17, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      date: new Date(2020, 6, 10, 17, 0, 0),
    });

    const availabilty = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 7,
    });

    expect(availabilty).toEqual(
      expect.arrayContaining([
        { day: 9, available: false },
        { day: 10, available: true },
        { day: 11, available: true },
        { day: 12, available: true },
      ]),
    );
  });
});
