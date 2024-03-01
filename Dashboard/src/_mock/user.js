import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.person.fullName(),
  company: faker.company.name(),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  role: sample([
    '1111111111',
    '0000000000',
    '2222222222',
    '3333333333',
    '4444444444',
    '6666666666',
    '1111111111',
    '1111111111',
    '1111111111',
  
  ]),
}));
