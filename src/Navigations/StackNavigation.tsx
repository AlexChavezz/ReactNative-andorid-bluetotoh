import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BluetothScreen } from '../Screens/BluetothScreen';
import { ListeningPage } from '../Screens/ListeningPage';
import { InitialScreen } from '../Screens/InitialScreen';
import { NormalScreen } from '../Screens/NormalScreen';
const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
                // headerStyle: {
                //     elevation: 0,
                //     backgroundColor: "#2b2c34",
                // },
                // headerTintColor: "#fff",
                // headerTitleStyle: {
                //     fontWeight:'bold',
                //     fontSize: 15
                // },
                // cardStyle: {
                //     backgroundColor: 'white'
                // }
            }}
        >
            <Stack.Screen name="ListeningPage" component={ ListeningPage } />
            <Stack.Screen name="InitialScreen" component={ InitialScreen } />
            <Stack.Screen name="NormalScreen" component={ NormalScreen }/>            
            <Stack.Screen name="BluetothScreen" component={ BluetothScreen } />
        </Stack.Navigator>
    );
}