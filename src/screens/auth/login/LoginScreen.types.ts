export interface LoginScreenProps {
  secure: boolean;
  setSecure: (value: boolean) => void;
  password: string;
  setPassword: (value: string) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  errors: { phoneNumber?: string; password?: string };
  setErrors: (value: React.SetStateAction<{ phoneNumber?: string; password?: string }>) => void;
  selectedType: 'patient' | 'doctor';
  setSelectedType: (value: 'patient' | 'doctor') => void;
  handleLogin: () => Promise<void>;
  handleNavToSignup: () => void;
  handleNavToForgetPassword: () => void;
  handleNavToChangePassword: () => void;
}
