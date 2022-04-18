import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hasil from './app/screens/Hasil';
import Home from './app/screens/Home';

export default function App() {
  return (
    <Home />
    // <Hasil/>
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
