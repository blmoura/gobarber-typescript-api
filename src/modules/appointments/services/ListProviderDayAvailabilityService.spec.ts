import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderDayAvailabityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

let listProviderDayAvailability: ListProviderDayAvailabityService;
let fakeAppointmentRepository: FakeAppointmentsRepository;

describe('ListProviderDayAvailability', () => {
  beforeEach(() => {
    fakeAppointmentRepository = new FakeAppointmentsRepository();
    listProviderDayAvailability = new ListProviderDayAvailabityService(
      fakeAppointmentRepository,
    );
  });

  it('should be able to list the day availabity from provider', async () => {
    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 6, 9, 14, 0, 0),
    });

    await fakeAppointmentRepository.create({
      provider_id: 'user',
      user_id: 'user',
      date: new Date(2020, 6, 9, 15, 0, 0),
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 6, 9, 11).getTime();
    });

    const availabilty = await listProviderDayAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 7,
      day: 9,
    });

    expect(availabilty).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: false },
        { hour: 10, available: false },
        { hour: 13, available: true },
        { hour: 14, available: false },
        { hour: 15, available: false },
        { hour: 16, available: true },
      ]),
    );
  });
});
