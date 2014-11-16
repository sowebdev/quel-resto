Meteor.subscribe('restaurants');

Template.restaurants.helpers({
    restos: function () {
        return Restaurant.find();
    }
});