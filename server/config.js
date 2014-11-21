VotingPeriod = {};

Meteor.startup(function(){

    if (Meteor.settings.restrictCreationByEmailDomain) {
        Accounts.config({
            restrictCreationByEmailDomain: Meteor.settings.restrictCreationByEmailDomain
        });
    }

    if (Restaurant.find().count() === 0) {
        if (Meteor.settings.predefinedData) {
            _.each(Meteor.settings.predefinedData, function(data){
                Restaurant.insert(data);
            });
        }
    }

    VotingPeriod.startDatetime = moment(Meteor.settings.votingPeriod.hourStart, 'H').add(
        Meteor.settings.votingPeriod.minuteStart,
        'minutes'
    );
    VotingPeriod.endDatetime = moment(Meteor.settings.votingPeriod.hourEnd, 'H').add(
        Meteor.settings.votingPeriod.minuteEnd,
        'minutes'
    );
});

