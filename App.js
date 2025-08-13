<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import SafetyScreen from './screens/SafetyScreen';
<<<<<<< HEAD
=======
import ChemistryScreen from './screens/ChemistryScreen';
import PhysicsScreen from './screens/PhysicsScreen';
import ComputerScreen from './screens/ComputerScreen';
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)

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
<<<<<<< HEAD
=======
            <Stack.Screen name="Chemistry" component={ChemistryScreen} />
            <Stack.Screen name="Physics" component={PhysicsScreen} />
            <Stack.Screen name="Computer" component={ComputerScreen} />
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
>>>>>>> 5b03b5995b3b208cdeca7701ed8ca8cb14a98a12
