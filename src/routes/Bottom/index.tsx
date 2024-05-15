import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import ScreenNames from '../routes';
import { AdPostScreen, AuthScreen, EditProfileScreen, HomeScreen } from '../../screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()


const HomeStack = () => {
    return(
        <Stack.Navigator>
        <Stack.Screen name={ScreenNames.Home} component={HomeScreen} />
<Stack.Screen name={ScreenNames.EditProfile} component={EditProfileScreen} />
<Stack.Screen name={ScreenNames.AdPost} component={AdPostScreen} />

    </Stack.Navigator>
    )
}


export default function BottomTab() {
    


  return (

    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name={ScreenNames.homeStack} component={HomeStack} />
        <Tab.Screen name={ScreenNames.TabAdPost} component={AdPostScreen} />
        <Tab.Screen name={ScreenNames.TabAuthentication} component={AuthScreen} />
    </Tab.Navigator>

  );
}
