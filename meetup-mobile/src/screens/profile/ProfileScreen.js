/**
 * Created by Ibrahim on 09/05/2017.
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
class ProfileScreen extends Component {


    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <MaterialIcons
                name="account-circle"
                size={25}
                color={tintColor}
            />
        ),
    };



    render() {
        return (
            <View >
                <Text>Profile</Text>
            </View>
        );
    }
}

export default ProfileScreen
