import { StyleSheet, Text, View } from 'react-native';


export default function AddVocaScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.tmp}>This is AddVocaScreen</Text>
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