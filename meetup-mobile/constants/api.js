import ApiUtils from './ApiUtils'
import axios from 'axios';
import {Platform} from 'react-native';

let url;

// Cause of genymotion we need to change the url here
// http://stackoverflow.com/questions/5528850/how-to-connect-localhost-in-android-emulator
if (Platform.OS !== 'ios') {
    // url = 'http://10.0.3.2:3000/api';
    url = 'http://192.168.1.2:3000/api';
} else {
    url = 'http://localhost:3000/api';
}

axios.defaults.baseURL = url;
const fakeGroupId = "590ba0a614740128f07208a1";

class MeetupApi {
    constructor() {
        this.groupId = fakeGroupId;
        this.path = `/groups/${this.groupId}/meetups`;
    }

    async fetchGroupMeetups() {
        const {data} = await axios.get(this.path);
        return data.meetups;
    }

}
export
{
    MeetupApi
}