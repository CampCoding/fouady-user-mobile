
import './src/localization'; // Initialize i18n before rendering
import { StatusBar, } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/RootNavigator';

function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar/>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
export default App;
