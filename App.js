import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import JobInfoScreen from './screens/infopage';
import HomeScreen from './screens/home';

export default function App() {
  return (
    // <HomeScreen />
    <JobInfoScreen />
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
