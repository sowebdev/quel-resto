Meteor.publish('restaurants', function(){
    return Restaurant.find();
});

Meteor.startup(function(){
    if (Restaurant.find().count() === 0) {
        Restaurant.insert({
            name: 'Mezzo'
        });
        Restaurant.insert({
            name: 'Classecroute'
        });
        Restaurant.insert({
            name: 'Air Bagel'
        });
    }
});