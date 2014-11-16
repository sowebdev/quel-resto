Meteor.subscribe('restaurants');

Template.restaurants.helpers({
    restos: function () {
        return Restaurant.find({}, {sort: {votes: -1}});
    },
    hasVoted: function (restaurantId) {
        var resto = Restaurant.findOne({
            _id: restaurantId,
            supporters: {$elemMatch: {
                id: Meteor.userId()
            }}
        });
        return resto != null;
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