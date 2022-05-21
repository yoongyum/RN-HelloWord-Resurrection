import { StyleSheet, Text, View ,Button} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Screens, HomeStackParamList} from '../navigators/HomeNavigator'


//HomeScreen에 필요한 파라미터들을 타입명시를 해줍니다.
type HomeScreenNavigationProps = NativeStackNavigationProp<HomeStackParamList,Screens.Home>

//HomeScreenProps에 대한 인터페이스 지정
interface HomeScreenProps{
  navigation: HomeScreenNavigationProps
}

//HomeScreen Component
const HomeScreen: React.FC<HomeScreenProps> = (props) =>{
  const {navigation} = props
  return(
    <View style={styles.container}>
      <Text style={styles.tmp}>This is HomeScreen</Text>
      <View>
        <Button title="new Voca" onPress={()=>navigation.navigate(Screens.AddVoca)}/>
      </View>
    </View>
  );
};
export default HomeScreen;




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