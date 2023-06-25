import { Text, View, StyleSheet, StatusBar ,SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Movies from './Screens/Movies';
import List from './Screens/List';
import HomeScreen from './Screens/HomeScreen';
import TaskScreen from './Screens/Task';
import PasswordScreen from './Screens/PasswordScreen';
import Gmail from './components/Gmail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {

  const HomeStack = () => (
     <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Home" component={HomeScreen} /> 
       <Stack.Screen name="List" component={List} />
       <Stack.Screen name="Movies" component={Movies} />
       <Stack.Screen name="Gmail" component={Gmail} />
      </Stack.Navigator>
  );


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'WatchList') {
              iconName = focused ? 'ios-film' : 'ios-film-outline';
            } else if (route.name === 'Tasks') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Password') {
              iconName = focused ? 'ios-lock-closed' : 'ios-lock-open-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
           headerShown: false 
        })
        
        }
          tabBarOptions={{
             activeTintColor: 'blue',
             inactiveTintColor: 'gray',
             style: {
                 backgroundColor: 'white', // Background color of the tab bar
                 borderTopWidth: 1, // Top border width of the tab bar
                 borderTopColor: 'gray', 
                 // Top border color of the tab bar
               },
             labelStyle: {
                 fontSize: 14, // Font size of the tab labels
                 fontWeight: 'bold',
         // Font weight of the tab labels
               },
          }}

      >
        <Tab.Screen name="WatchList" component={HomeStack} />
        <Tab.Screen name="Tasks" component={TaskScreen} />
        <Tab.Screen name="Password" component={PasswordScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
