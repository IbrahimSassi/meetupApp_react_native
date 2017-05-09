import Expo,{Components} from 'expo';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import Root from './src/root';
import { cachedFonts } from './helpers';

EStyleSheet.build(Colors);




class App extends React.Component {


    componentDidMount() {
    }



    render() {
        return (
            <Root />
        );
    }
}


Expo.registerRootComponent(App);
