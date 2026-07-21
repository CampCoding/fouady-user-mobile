import { validatePassword } from '../src/screens/auth/login/validation';

describe('validatePassword', () => {
  it('accepts a password with 6 or more characters', () => {
    expect(validatePassword('123456')).toBe(true);
  });

  it('accepts a longer password', () => {
    expect(validatePassword('Password123')).toBe(true);
  });

  it('rejects a password shorter than 6 characters', () => {
    expect(validatePassword('12345')).toBe(false);
  });

  it('rejects an empty password', () => {
    expect(validatePassword('')).toBe(false);
  });

  it('rejects whitespace only', () => {
    expect(validatePassword('     ')).toBe(false);
  });
});