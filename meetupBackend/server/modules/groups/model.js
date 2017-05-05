/**
 * Created by Ibrahim on 04/05/2017.
 */
import mongoose, {Schema} from 'mongoose';

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Name must be 5 characters long']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description must be 5 characters long']

    },
    eventDate: {
        type: Date
    },
    category: {
        type: String
    },
    meetups: [{
        type: Schema.ObjectId,
        ref: 'Meetup'
    }]
}, {
    timestamps: true
});

/**
 * Create a meetup and add it to the meetups array in the group
 * @param id
 * @param args
 * @returns {*}
 */

GroupSchema.statics.addMeetup = async function (id, args) {
    const Meetup = mongoose.model('Meetup');
    const meetup = await new Meetup({...args, group: id});
    const group = await this.findByIdAndUpdate(id,{$push : {meetups:meetup.id}});
    return {
        meetup: await  meetup.save(),
        group
    };

};


export default mongoose.model('Group', GroupSchema);