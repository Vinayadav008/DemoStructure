import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Screens } from '../../constant/Screens'
import Home from "../../constant/Components"
const Stack = createNativeStackNavigator()
const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={Screens.Home} component={Home} />
        </Stack.Navigator>
    )
}

export default MainStack