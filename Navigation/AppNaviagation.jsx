import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LinkedAccount from '../Screens/Onboarding/SplashScreen';
import Welcome from '../Screens/Auth/Welcome/Welcome';

const Stack = createNativeStackNavigator();

export default function AppNaviagation() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='LinkedAccount'
      >
        <Stack.Screen
          name="LinkedAccount"
          component={LinkedAccount}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}