Meteor.publish('restaurants', function(){
    return Restaurant.find();
});

Meteor.methods({
    vote: function (restaurantId) {
        if (!this.userId) {
            throw new Meteor.Error('logged-out', 'Veuillez vous connecter');
        }
        var resto = Restaurant.findOne(restaurantId);
        if (!resto) {
            throw new Meteor.Error('not-found', 'Restaurant non trouvé');
        }
        var updateOptions = {};
        if (_.findWhere(resto.supporters, {id: this.userId})) {
            updateOptions = {
                $inc: {
                    votes: -1
                },
                $pull: {
                    supporters: {id: this.userId}
                }
            };
        } else {
            updateOptions = {
                $inc: {
                    votes: 1
                },
                $push: {
                    supporters: {id: this.userId, name: Meteor.user().username}
                }
            };
        }
        Restaurant.update(restaurantId, updateOptions);
    }
});