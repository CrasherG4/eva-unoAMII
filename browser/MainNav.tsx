import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import WelcomeScreen from '../Screens/WelcomeScreen';
import Screen4 from '../Screens/Screen4';

const Tap = createBottomTabNavigator();

function MyTap(){
  return(
    <Tap.Navigator>
      <Tap.Screen name="Pagina1" component={Screen2}/>
      <Tap.Screen name="Pagina2" component={Screen3}/>
      <Tap.Screen name="Pagina3" component={Screen4}/>
    </Tap.Navigator>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="BottomNav" component={MyTap} />
    </Stack.Navigator>
  );
}

export default function MainNav(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}