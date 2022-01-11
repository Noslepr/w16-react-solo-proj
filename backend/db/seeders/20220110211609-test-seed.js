'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Photos', [
     {
       userId: 1,
       photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641849219/photo-1522163182402-834f871fd851_zky0wt.jpg',
       description: 'Climibng over the ocean! Photo by Hu Chen on Unsplash',
     },
     {
       userId: 1,
       photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641852269/photo-1516902663607-8d25785663fe_fac6a0.jpg',
       description: 'Taking a big fall at the crux of Fun Teminal (5.12a) at Elephant Rock.! Photo by Christoph Deinet on Unsplash',
     }
  ], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Photos', null, {});
  }
};
