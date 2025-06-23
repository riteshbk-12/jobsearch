import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JobInfoScreen from './screens/infopage';
import HomeScreen from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/profile';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createStackNavigator();
export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    // <HomeScreen />
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        {user ? (
          <>
           <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Job Finder' }} 
        />
        <Stack.Screen 
          name="Info" 
          component={JobInfoScreen} 
          options={{ title: 'Job Details' }} 
        />
        
        </>
        ):(<>
          <Stack.Screen 
          name="login" 
          component={LoginScreen} 
          options={{ title: 'login screen' }} 
        />
        <Stack.Screen 
          name="register" 
          component={RegisterScreen} 
          options={{ title: 'register screen' }} 
        /></>
        )}
        
       
        
      </Stack.Navigator>
    </NavigationContainer>
    // <ProfileScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
