'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Photos', [
     {
       userId: 1,
       photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641849219/photo-1522163182402-834f871fd851_zky0wt.jpg',
       description: 'Climibng over the ocean! Tonsai, Ao Nang, Thailand. Photo by Hu Chen on Unsplash',
     },
     {
       userId: 1,
       photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641852269/photo-1516902663607-8d25785663fe_fac6a0.jpg',
       description: 'Taking a big fall at the crux of Fun Teminal (5.12a) at Elephant Rock.! Photo by Christoph Deinet on Unsplash',
     },
     {
      userId: 1,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641919429/photo-1583623010148-9c00f6b12efe_jxnwtz.jpg',
      description: 'Taking a big fall at the crux of Fun Teminal (5.12a) at Elephant Rock.! Photo by Christoph Deinet on Unsplash',
    },
    {
      userId: 1,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641943550/photo-1601224748193-d24f166b5c77_vz4j6g.jpg',
      description: 'Going Up | Smith Rock State Park, Oregon. Photo by Sean Benesh on Unsplash',
    },
    {
      userId: 1,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641943725/photo-1578886141033-b9f066572135_p0qukf.jpg',
      description: '',
    },
    {
      userId: 1,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641943754/photo-1586627161720-ee2849303aee_bljag8.jpg',
      description: '',
    },
    {
      userId: 1,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641943870/photo-1597250861267-429663f244a8_e1uo0w.jpg',
      description: 'Misty morning on the Lauteraargrat, the long ridge between Lauteraarhorn (4042m) and Sckreckhorn (4078m) in Berner Oberland. Photo by Sylvain Mauroux on Unsplash',
    },
    {
      userId: 1,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641943981/photo-1601025678763-e8f5835995db_sw5swq.jpg',
      description: 'A mountain climber shot with zoom lens from a near outlook. Photo by Petr Slovacek on Unsplash',
    },
    {
      userId: 1,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641944042/photo-1583178180198-0cf050dc2bbf_kw9m5n.jpg',
      description: '',
    },
    {
      userId: 1,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641944057/photo-1597698063932-9450882bb1be_gtyjo5.jpg',
      description: 'Photo by Yente Van Eynde on Unsplash',
    },
    {
      userId: 1,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641944119/photo-1623872373655-1ccd020beea5_icnoni.jpg',
      description: 'A climber rappelling at Smith Rock at sunset. Photo by Ben Kitching on Unsplash',
    },
    {
      userId: 1,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641943786/photo-1577434150790-3bfe143fe4f2_cctfuy.jpg',
      description: 'Wallclimbing Sport Nextlevel Outbound Indoor Adventure Indonesia. Photo by Rahadiansyah on Unsplash',
    },
    {
      userId: 2,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641944200/photo-1577580529485-d39b28695fdf_lkj09r.jpg',
      description: 'Photo by Jeff Ochoa on Unsplash',
    },
    {
      userId: 2,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641944351/photo-1522079803432-e0b7649dc1de_z0luc6.jpg',
      description: 'phto by Hu Chen on Unsplash',
    },
    {
      userId: 2,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641944381/photo-1579769696129-4e6bde81a9ae_yrsvse.jpg',
      description: 'Man in orange clothes climbing up an ice fall with crampons and ice axes. Photo by Johannes Andersson on Unsplash',
    },
    {
      userId: 2,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641944454/photo-1573491473930-5a14ebedbae8_cov9ar.jpg',
      description: 'Rock climbing southern Utah. Crack Climbing Indian Creek. Photo by Patrick Hendry on Unsplash',
    },
    {
      userId: 2,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641944519/photo-1630432328419-bee5f50d6390_ki23nf.jpg',
      description: 'On Belay. Photo by Bradley Dunn on Unsplash',
    },
    {
      userId: 2,
      photoUrl: 'https://res.cloudinary.com/rock-flickr/image/upload/v1641944598/photo-1516372048654-2e06f99e1382_t4kzr4.jpg',
      description: 'My brother traverses the ridge high on the Lagginhorn, with Italy hidden beneath the layer of clouds in the background. Photo by Jef Willemyns on Unsplash',
    },


  ], {});
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Photos', null, {});
  }
};
