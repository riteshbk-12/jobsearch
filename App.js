import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JobInfoScreen from './screens/infopage';
import HomeScreen from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/profile';

const Stack = createStackNavigator();
export default function App() {
  return (
    // <HomeScreen />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
    //     <Stack.Screen 
    //       name="Home" 
    //       component={HomeScreen} 
    //       options={{ title: 'Job Finder' }} 
    //     />
    //     <Stack.Screen 
    //       name="Info" 
    //       component={JobInfoScreen} 
    //       options={{ title: 'Job Details' }} 
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <ProfileScreen/>
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
