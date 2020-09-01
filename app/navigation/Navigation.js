import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from '../screen/Home';
import { Location } from '../screen/Location';

const Stack = createStackNavigator()

export const MainStack = () => {
    return(
        <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Location" component={Location} />

      </Stack.Navigator>
    )
}