'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Photos', [{
     userId: 4,
     photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641849219/photo-1522163182402-834f871fd851_zky0wt.jpg',
     description: 'Climibng over the ocean Photo by Hu Chen on Unsplash',
    }], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Photos', null, {});
  }
};
