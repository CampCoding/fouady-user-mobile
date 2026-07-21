import { validatePhoneOrEmail } from '../src/screens/auth/login/validation';

describe('validatePhoneOrEmail', () => {
  it('accepts a valid email address', () => {
    expect(validatePhoneOrEmail('user@example.com')).toBe(true);
  });

  it('accepts a valid phone number', () => {
    expect(validatePhoneOrEmail('966512345678')).toBe(true);
  });

  it('rejects malformed input', () => {
    expect(validatePhoneOrEmail('abc')).toBe(false);
  });
});
