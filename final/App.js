import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import  Article from './component/Article';
import CreatePost from './component/CreatePost';
import List from './component/List';
import Contact from './component/Contact';
import Splash from './component/Splash';
import Details from './component/Details';
import Location from './component/Location';
import EditPost from './component/EditPost'
import Share from './component/Share'

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
const Stack = createStackNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation screenOptions={{ headerStyle: { backgroundColor: '#2A6C6A', headerTintColor: 'white'}, drawerStyle: {backgroundColor: 'white'} }}>
      <Drawer.Screen name="All restaurants" component={MyStack} />
      <Drawer.Screen name="Create Post" component={CreatePost} />
      <Drawer.Screen name="Contact Us" component={Contact} />
    </Drawer.Navigator>
  );
}

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Details" component={Details}/>
      <Stack.Screen name="Location" component={Location}/>
      <Stack.Screen name="EditPost" component={EditPost}/>
      <Stack.Screen name="Share" component={Share}/>
    </Stack.Navigator>
  );
}


// function MyStack() {
//   return (
//     <Stack.Navigator  initialRouteName="Splash" screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Splash" component={Splash} />
//         <Stack.Screen name="List" component={List} />
//     </Stack.Navigator>
//   );
// }


export default function App() {
  return ( 
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
