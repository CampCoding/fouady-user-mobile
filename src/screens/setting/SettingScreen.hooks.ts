import { useState } from 'react';

const useSettingScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});
  const [cvv, setCvv] = useState('');
  return {
    cardNumber,
    setCardNumber,
    expiryDate,
    setExpiryDate,
    cardHolderName,
    setCardHolderName,
    errors,
    setErrors,
    cvv,
    setCvv,
    
  };
};

export default useSettingScreen;
