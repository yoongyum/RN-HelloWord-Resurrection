import { StyleSheet, Text, View ,Button,TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Screens, HomeStackParamList} from '../navigators/HomeNavigator'
import CommonMondal from '../common/commonModal';
import AddVocaListModal from './AddVocaListModal';


//HomeScreen에 필요한 파라미터들을 타입명시
type HomeScreenNavigationProps = NativeStackNavigationProp<HomeStackParamList,Screens.Home>

//HomeScreenProps에 대한 인터페이스 지정
interface HomeScreenProps{
  navigation: HomeScreenNavigationProps
}


//HomeScreen Component
const HomeScreen: React.FC<HomeScreenProps> = (props) =>{
  // const {navigation} = props
  const [modalVisible, setModalVisible] = useState(false) //모달 보여지는 상태변화
  
  const onStart=()=>{//모달창 보여지게 
    setModalVisible(true);
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>This is HomeScreen</Text>
      <CommonMondal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        body={<AddVocaListModal/>}/>
      <TouchableOpacity style={styles.modalBtn} onPressOut={onStart}>
        <Text>Modal</Text>
      </TouchableOpacity>
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
  text:{
    fontWeight:'bold',
    fontSize: 20,
    marginBottom:30,
  },
  modalBtn:{
    width: 100,
    height: 30,
    borderRadius: 15,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'orange',
    color: 'white'
  }
});