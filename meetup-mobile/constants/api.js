import ApiUtils from './ApiUtils'


export const fetchMeetups = () =>
    fetch('localhost:3000/api/meetups')
        .then(response => response.json())
        .catch((err) => {
            console.log("err", err)
            return {
                "meetups": [
                    {
                        "_id": "5909bb0756c03f29f0589bfc",
                        "title": " React Meeting",
                        "description": " lets CREATE AN APP WITH REACT NATIVE",
                        "__v": 0
                    },
                    {
                        "_id": "5909bcba4511ac15547ecaa1",
                        "title": " Angular Meeting",
                        "description": " This is a second meetup",
                        "__v": 0
                    },
                    {
                        "_id": "5909bcc14511ac15547ecaa2",
                        "title": " Vue Meeting",
                        "description": " This is a third meetup",
                        "__v": 0
                    }
                ]
            }
        });

