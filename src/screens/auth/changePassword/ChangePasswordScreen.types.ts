import type { Dispatch, SetStateAction } from 'react';

export type ChangePasswordErrors = {
  password?: string;
  newPassword?: string;
  [key: string]: string | undefined;
  confirm_new_password?: string;
};

export interface ChangePasswordScreenProps {
  password: string;
  setPassword: (password: string) => void;
  newPassword: string;
  setNewPassword: (newPassword: string) => void;
  confirm_new_password: string;
  setConfirm_new_password: (confirm_new_password: string) => void;
  errors: ChangePasswordErrors;
  setErrors: Dispatch<SetStateAction<ChangePasswordErrors>>;
  handleChangePassword: () => void;
  goBack: () => void;
}
