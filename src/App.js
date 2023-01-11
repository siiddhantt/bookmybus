import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import HomePage from './screens/HomePage';
import Schedule from './screens/Schedule';
import Account from './screens/Account';

export default function App() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    animationEnabled: false,
                    headerShown: false,
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}>
                <Stack.Screen name="HomePage" component={HomePage} />
                <Stack.Screen name="Schedule" component={Schedule} />
                <Stack.Screen name="Account" component={Account} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};