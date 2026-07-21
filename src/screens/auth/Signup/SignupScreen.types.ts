import type { Dispatch, SetStateAction } from 'react';

export type SignupErrors = {
  password?: string;
  newPassword?: string;
  [key: string]: string | undefined;
  confirm_new_password?: string;
};

export interface SignupScreenProps {
  name: string;
  setName: (name: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  job: string;
  setJob: (job: string) => void;
  work_place: string;
  setWork_place: (work_place: string) => void;
  password: string;
  setPassword: (password: string) => void;
  newPassword: string;
  setNewPassword: (newPassword: string) => void;
  confirm_new_password: string;
  setConfirm_new_password: (confirm_new_password: string) => void;
  errors: SignupErrors;
  setErrors: Dispatch<SetStateAction<SignupErrors>>;
  handleChangePassword: () => void;
  goBack: () => void;
}
