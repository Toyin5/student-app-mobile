import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-native-paper';
import { theme } from './core/theme';
import HomePage from './screens/HomePage';
import LoginScreen from './screens/Login';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
          <Stack.Screen name="HomePage" component={HomePage} options={{ title: 'Overview' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider >
  );
}
