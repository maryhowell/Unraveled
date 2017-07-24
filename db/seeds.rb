# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demo = User.create!(
  first_name: "Demo",
  last_name: "User",
  email: "DemoUser@gmail.com",
  password: "12345678"
)


user0 = User.create!(
  first_name: "John",
  last_name: "Jacob",
  email: "yo@gmail.com",
  password: "12345678"
)

user1 = User.create!(
  first_name: "Mable",
  last_name: "Smith",
  email: "asffg@gmail.com",
  password: "12345678"
)

user2 = User.create!(
  first_name: "Laurie",
  last_name: "Smithy",
  email: "klrguhvgd@gmail.com",
  password: "12345678"
)

pattern0 = Pattern.create!(
  seller_id: 1,
  name: "Carpeaux",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500928568/carpeaux_1_medium2_tplwdd.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500928568/carpeaux_2_medium2_fltttm.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500928567/carpeaux_3_medium2_wybmym.jpg"],
  short_description: "This dramatic open cardigan makes the most of deeply textured brioche stitch. The blanket fronts are adorned with reversible cables and hang with a flattering tilt, thanks to architectural back shaping. Carpeaux is knit from Shelter in one piece to the underarms, with sleeves knit circularly to the caps and then seamed in. The cables are charted, and thoughtful details like garter stitch selvedges and tubular edging give this garment professional polish.",
  price: 10.00,
)

pattern1 = Pattern.create!(
  seller_id: 2,
  name: "Yane",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500928578/Yane_01_medium2_sj7m4n.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500928578/Yane_02_medium2_vnefqz.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500928582/Yane_03_medium2_ciefu2.jpg"],
  short_description: "A basic pullover is elevated by tiered rooftops of bold chevrons. Seamed construction provides a crisply structured fit and the arrowhead motif is worked in intarsia. Heighten the playful graphic effect with bright or high-contrast color choices; choose a tone-on-tone pairing to create more subtle interest.",
  price: 8.00,
)

pattern3 = Pattern.create!(
  seller_id: 3,
  name: "Carpino",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500928553/Carpino_1_small2_a0ha3o.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500928553/Carpino_2_medium2_ju6ebk.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500928552/Carpino_5_medium2_lpvfb7.jpg"],
  short_description: "This sweater is knit from the top down in the round, with minimal shaping at the neck and waist. It can be worn as a casual top with jeans or even as a warm layer over a more formal outfit",
  price: 8.00,
)
