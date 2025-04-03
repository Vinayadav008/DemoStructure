import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './MainStack/MainStack'

const Root = () => {
    const isAuth = true
    return (
        <NavigationContainer>
            {isAuth ? <MainStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default Root