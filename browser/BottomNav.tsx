import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pagina3" component={Screen3} />
      <Tab.Screen name="Pagina2" component={Screen2} />
    </Tab.Navigator>
  );
}

export default function BottomTap(){
  return(
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
}