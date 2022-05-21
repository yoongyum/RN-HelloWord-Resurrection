import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text>This is HelloWord!!</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });