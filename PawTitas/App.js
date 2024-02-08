
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './componentes/Register';
import LoginScreen from './componentes/Login';
import SingupScreen from './componentes/Singup';


const Stack = createNativeStackNavigator();

export default function App() {

  return(
  <NavigationContainer>
    
    <Stack.Navigator>
      <Stack.Screen name="PawTitas" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Singup" component={SingupScreen} />
    </Stack.Navigator>
    
  </NavigationContainer>


);
}

