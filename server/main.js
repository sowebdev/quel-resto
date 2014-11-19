Meteor.publish('restaurants', function(){
    return Restaurant.find();
});

Meteor.methods({
    vote: function (restaurantId) {
        if (!this.userId) {
            throw new Meteor.Error('logged-out', 'Connecte-toi !');
        }
        var resto = Restaurant.findOne(restaurantId);
        if (!resto) {
            throw new Meteor.Error('not-found', 'Restaurant non trouvé');
        }
        if (moment().isBefore(VotingPeriod.startDatetime)) {
            throw new Meteor.Error('too-soon', "Bien essayé, mais c'est trop tôt ;-)");
        }
        if (moment().isAfter(VotingPeriod.endDatetime)) {
            throw new Meteor.Error('too-soon', "Bien essayé, mais c'est trop tard ;-)");
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
    },
    votingPeriod: function() {
        var start = VotingPeriod.startDatetime.tz(Meteor.settings.clientTimezone).format('HH:mm');
        var end = VotingPeriod.endDatetime.tz(Meteor.settings.clientTimezone).format('HH:mm');
        return "Les votes sont ouverts de " + start + " à " + end;
    }
});