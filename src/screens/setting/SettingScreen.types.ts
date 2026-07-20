export interface SettingScreenProps {
  cardNumber: string;
  setCardNumber: (val: string) => void;
  expiryDate: string;
  setExpiryDate: (val: string) => void;
  cardHolderName: string;
  setCardHolderName: (val: string) => void;
  errors: { [key: string]: string | undefined };
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string | undefined }>>;
  cvv: string;
  setCvv: (val: string) => void;
}
