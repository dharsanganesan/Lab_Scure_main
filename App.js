import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import SafetyScreen from './screens/SafetyScreen';
import ChemistryScreen from './screens/ChemistryScreen';
import PhysicsScreen from './screens/PhysicsScreen';
import ComputerScreen from './screens/ComputerScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoading ? (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Safety" component={SafetyScreen} />
            <Stack.Screen name="Chemistry" component={ChemistryScreen} />
            <Stack.Screen name="Physics" component={PhysicsScreen} />
            <Stack.Screen name="Computer" component={ComputerScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
