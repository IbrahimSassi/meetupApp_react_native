/**
 * Created by Ibrahim on 05/05/2017.
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

class NotificationsScreen extends Component {


    static navigationOptions = {
        tabBarLabel: 'notifications',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <MaterialIcons
                name="home"
                size={25}
                color={tintColor}
            />
        ),
    };



    render() {
        return (
            <View>
                <Text>Notifications</Text>
            </View>
        );
    }
}

export default NotificationsScreen;
