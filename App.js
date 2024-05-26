import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is Derrick Boateng</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2DFFF',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight:"bold",
  },
  text: {
    fontSize: 24, // Increased font size
    fontWeight: 'bold', // Made the name bold
  },
});
