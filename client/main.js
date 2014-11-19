Meteor.subscribe('restaurants');

VotingPeriod = new ReactiveVar();

Meteor.call('votingPeriod', function(error, result) {
    if (!error) {
        VotingPeriod.set(result);
    }
});

UI.registerHelper('votingPeriod', function() {
    return VotingPeriod.get();
});

Template.restaurants.helpers({
    restos: function () {
        return Restaurant.find({}, {sort: {votes: -1}});
    }
});

Template.restaurants.events({
    'click button.vote': function () {
        Meteor.call('vote', this._id, function(error){
            if (error) {
                alert(error.reason);
            }
        });
        return false;
    }
});

Template.resto.helpers({
    hasVoted: function (restaurantId) {
        var resto = Restaurant.findOne({
            _id: restaurantId,
            supporters: {$elemMatch: {
                id: Meteor.userId()
            }}
        });
        return resto != null;
    },
    formatSupporters: function() {
        return Blaze.toHTMLWithData(Template.supporters_popover, this);
    }
});

Template.resto.rendered = function() {
    jQuery('[data-toggle="popover"]').popover({html:true});
};