#Quel resto ?

**This project is no longer maintained**

Vote for the places where you would like to take lunch

##Configure the application

Settings are taken from the `Meteor.settings` object. You can define settings from a JSON file :

    meteor --settings settings.json

##Reset votes

For now, resetting votes is a manual task. Run following query in Mongo :

    db.restaurant.update({}, {$set: {votes: 0, supporters: []}}, {multi: true});



