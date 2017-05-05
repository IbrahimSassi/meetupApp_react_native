import ApiUtils from './ApiUtils'
import axios from 'axios';

axios.defaults.baseURL = "http://192.168.1.2:3000/api";
const fakeGroupId = "590ba0a614740128f07208a1";

class MeetupApi {
    constructor()
    {
        this.groupId = fakeGroupId;
        this.path=`/groups/${this.groupId}/meetups`;
    }

    async fetchGroupMeetups()
    {
        const {data} = await axios.get(this.path);
        return data.meetups;
    }

}
export
{
    MeetupApi
}