const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(01[0125][0-9]{8}|1[0125][0-9]{8}|20?1[0125][0-9]{8})$/;

export const validatePhoneOrEmail = (value: string): boolean => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return false;
  }

  if (emailRegex.test(trimmedValue)) {
    return true;
  }

  const normalizedPhone = trimmedValue.replace(/[+\s()-]/g, '');

  return phoneRegex.test(normalizedPhone);
};

export const validatePassword = (value: string): boolean => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return false;
  }

  return trimmedValue.length >= 6;
};
