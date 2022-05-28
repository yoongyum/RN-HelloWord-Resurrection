import React from 'react';
import {Modal, StyleSheet, View, Dimensions} from 'react-native';

const SIZE_WIDTH = Dimensions.get('window').width;
const SIZE_HEIGHT = Dimensions.get('window').height;

interface ModalProps{
    modalVisible: boolean;
    setModalVisible: any;
    body: any;
}

const CommonMondal: React.FC<ModalProps> = (props) =>{
    return(
        <Modal
            animationType={'fade'}
            transparent={true}
            visible={props.modalVisible}>
                <View style={styles.container}>
                    <View style={styles.blankSpace} onTouchEnd={()=> props.setModalVisible(false)}/>
                    {props.body}
                </View>
        </Modal>
    );
}

export default CommonMondal;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blankSpace:{
        position: 'absolute',
        backgroundColor: '#000000',
        width: SIZE_WIDTH,
        height: SIZE_HEIGHT,
        opacity: 0.8,
    }

})