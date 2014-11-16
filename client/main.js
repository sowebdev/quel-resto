Meteor.subscribe('restaurants');

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