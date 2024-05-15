import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Route from './src/routes';
import BottomTab from './src/routes/Bottom';
import { AuthScreen } from './src/screen';

export default function App() {
  return (
<AuthScreen/>
      // <Route />
      // <BottomTab/>
    
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
