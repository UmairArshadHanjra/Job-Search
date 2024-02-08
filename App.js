import Home from './screens/Home';
import JobSearch from './screens/JobSearch';
import JobDetails from './screens/JobDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

let Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="JobDetails" component={JobDetails} />
        <Stack.Screen name="JobSearch" component={JobSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
