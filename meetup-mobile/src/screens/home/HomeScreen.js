/**
 * Created by Ibrahim on 04/05/2017.
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {MeetupApi} from '../../../constants/api';
import styles from './style/HomeScreen';

import {LoadingScreen} from '../../commons'
import {MyMeetupsList} from './components';


const meetupApi = new MeetupApi();
class HomeScreen extends Component {

    static defaultProps = {
        meetupApi
    };

    state = {
        loading: false,
        meetups: []
    }

    async componentDidMount() {
        this.setState({loading: true});
        const meetups = await this.props.meetupApi.fetchGroupMeetups();
        // setTimeout(() => {
        console.log("hello");
        console.log(meetups);
            this.setState({loading: false, meetups});
        // }, 1000);
    }


    render() {
        if (this.state.loading) {
            return <LoadingScreen/>;
        }

        return (
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <Text>Home Screen</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <MyMeetupsList meetups={this.state.meetups} />
                </View>
            </View>
        );
    }
}
export default HomeScreen;