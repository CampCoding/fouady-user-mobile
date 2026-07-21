import { validatePassword } from '../login/validation';

describe('validatePassword', () => {
  it('accepts a valid password', () => {
    expect(validatePassword('password')).toBe(true);
  });

  it('accepts a 6-character password', () => {
    expect(validatePassword('123456')).toBe(true);
  });

  it('rejects an empty password', () => {
    expect(validatePassword('')).toBe(false);
  });

  it('rejects a short password', () => {
    expect(validatePassword('12345')).toBe(false);
  });
});
