export type LoginUser = {
  name: string;
  email: string;
  password: string;
  expectedResult: 'success' | 'failure';
};

export const loginUsers: LoginUser[] = [
  {
    name: 'Valid user',
    email: 'valid.user@example.com',
    password: 'ValidPassword123!',
    expectedResult: 'success',
  },
  {
    name: 'Invalid password',
    email: 'valid.user@example.com',
    password: 'WrongPassword!',
    expectedResult: 'failure',
  },
  {
    name: 'Unregistered user',
    email: 'not.registered@example.com',
    password: 'SomePassword123!',
    expectedResult: 'failure',
  },
];
