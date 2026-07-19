import { useNavigation } from '@react-navigation/native';

const useForgetPasswordScreen = () => {
  const navigation = useNavigation();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return { goBack };
};

export default useForgetPasswordScreen;
