import { useNavigation } from '@react-navigation/native';

const useChangePasswordScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return { goBack };
};

export default useChangePasswordScreen;
