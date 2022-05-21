import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../home/HomeScreen';
import AddVocaScreen from '../addVoca/AddVocaScreen';

// 필요한 스크린 enum 타입정의
export enum Screens{
    Home = 'Home',
    AddVoca = 'AddVoca', 
}

//각 스크린 마다 필요한 파라미터 타입정리
export type HomeStackParamList = {
    Home: undefined;
    AddVoca: AddVocaParams;
}

//위에서 만든 타입을 createNativeStackNavigator메소드에 지정하여 객체를 만듬
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator: React.FC=()=>{
    return(
        <HomeStack.Navigator initialRouteName='Home'>
            <HomeStack.Screen name = {Screens.Home} component={HomeScreen}/>
            <HomeStack.Screen name = {Screens.AddVoca} component={AddVocaScreen}/>
        </HomeStack.Navigator>
    );
}
export default HomeNavigator