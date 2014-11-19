if (Meteor.settings.restrictCreationByEmailDomain) {
    Accounts.config({
        restrictCreationByEmailDomain: Meteor.settings.restrictCreationByEmailDomain
    });
}

Meteor.startup(function(){
    if (Restaurant.find().count() === 0) {
        if (Meteor.settings.predefinedData) {
            _.each(Meteor.settings.predefinedData, function(data){
                Restaurant.insert(data);
            });
        }
    }
});

VotingPeriod = {
    startDatetime: moment(Meteor.settings.votingPeriod.hourStart, 'H').add(
        Meteor.settings.votingPeriod.minuteStart,
        'minutes'
    ),
    endDatetime: moment(Meteor.settings.votingPeriod.hourEnd, 'H').add(
        Meteor.settings.votingPeriod.minuteEnd,
        'minutes'
    )
};