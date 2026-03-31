export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'customer' | 'guest';
  isActive: boolean;
};

export const users: User[] = [
  {
    id: 'u-001',
    name: 'Admin User',
    email: 'admin.user@example.com',
    password: 'AdminPassword123!',
    role: 'admin',
    isActive: true,
  },
  {
    id: 'u-002',
    name: 'Active Customer',
    email: 'active.customer@example.com',
    password: 'CustomerPass123!',
    role: 'customer',
    isActive: true,
  },
  {
    id: 'u-003',
    name: 'Inactive Customer',
    email: 'inactive.customer@example.com',
    password: 'InactivePass123!',
    role: 'customer',
    isActive: false,
  },
  {
    id: 'u-004',
    name: 'Guest User',
    email: 'guest.user@example.com',
    password: 'GuestPass123!',
    role: 'guest',
    isActive: true,
  },
];
