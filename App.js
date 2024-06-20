import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TelaPrincipal from './screens/TelaPrincipal/TelaPrincipal.js'

export default function App() {
  return (
    <View style={styles.container}>
      <TelaPrincipal/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});