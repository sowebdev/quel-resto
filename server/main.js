Meteor.publish('restaurants', function(){
    return Restaurant.find();
});

Meteor.startup(function(){
    if (Restaurant.find().count() === 0) {
        Restaurant.insert({
            name: 'Mezzo di Pasta',
            img: 'http://www.mezzodipasta.ch/images/_interface/illus-mezzo-conso.jpg',
            description: "Mezzo di Pasta c’est la joie de vivre et de bien manger. Puisque la restauration rapide est trop souvent synonyme de repas bâclés, il fallait innover et proposer enfin aux amateurs de nourriture saine, de vrais plats de pâtes fraîches, complets, pleins de saveurs et de bonne humeur..."
        });
        Restaurant.insert({
            name: "Class'croute",
            img: 'http://www.classcroute.com/css/images/logo.png',
            description: "Depuis 25 ans à votre service ! Elle paraissait farfelue cette idée en 1987, lorsque class'croute l'a lancée ! Maintenant c'est devenu une évidence : il est possible de BIEN MANGERAU BUREAU, d'y faire des repas équilibrés, variés. Avec plusieurs milliers de repas livrés par jour, c'est même devenu un véritable mode de consommation...pour votre plus grand plaisir."
        });
        Restaurant.insert({
            name: 'Air Bagels',
            img : 'http://www.airbagels.com/wp-content/themes/airbagels/images/air-bagels-logo.png',
            description: 'Air Bagels vous prépare des recettes originales pour vous offrir des sensations gourmandes et équilibrées : un goût unique qui s’inspire de l’esprit des grandes capitales européennes. Nous tenons à vous offrir des produits originaux et de qualité pour des bagels salés, bagels sucrés, des salades et desserts qui feront décoller vos papilles !'
        });
    }
});