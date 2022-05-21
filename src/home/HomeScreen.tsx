import { StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.tmp}>This is HomeScreen</Text>
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
    tmp:{
      fontWeight:'bold',
      fontSize: 20,
    }
  });