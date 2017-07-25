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

user3 = User.create!(
  first_name: "John",
  last_name: "Jacob",
  email: "fgjb@gmail.com",
  password: "12345678"
)

user4 = User.create!(
  first_name: "Mable",
  last_name: "Smith",
  email: "jkzfsb@gmail.com",
  password: "12345678"
)

user5 = User.create!(
  first_name: "Laurie",
  last_name: "Smithy",
  email: "dKBFS@gmail.com",
  password: "12345678"
)

user6 = User.create!(
  first_name: "John",
  last_name: "Jacob",
  email: "dsv@gmail.com",
  password: "12345678"
)

user7 = User.create!(
  first_name: "Mable",
  last_name: "Smith",
  email: "b@gmail.com",
  password: "12345678"
)

pattern0 = Pattern.create!(
  seller_id: demo.id,
  name: "Carpeaux",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500928568/carpeaux_1_medium2_tplwdd.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500928568/carpeaux_2_medium2_fltttm.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500928567/carpeaux_3_medium2_wybmym.jpg"],
  short_description: "This dramatic open cardigan makes the most of deeply textured brioche stitch. The blanket fronts are adorned with reversible cables and hang with a flattering tilt, thanks to architectural back shaping. Carpeaux is knit from Shelter in one piece to the underarms, with sleeves knit circularly to the caps and then seamed in. The cables are charted, and thoughtful details like garter stitch selvedges and tubular edging give this garment professional polish.",
  price: 10.00,
)

pattern1 = Pattern.create!(
  seller_id: user4.id,
  name: "Yane",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500928578/Yane_01_medium2_sj7m4n.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500928578/Yane_02_medium2_vnefqz.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500928582/Yane_03_medium2_ciefu2.jpg"],
  short_description: "A basic pullover is elevated by tiered rooftops of bold chevrons. Seamed construction provides a crisply structured fit and the arrowhead motif is worked in intarsia. Heighten the playful graphic effect with bright or high-contrast color choices; choose a tone-on-tone pairing to create more subtle interest.",
  price: 8.00,
)

pattern3 = Pattern.create!(
  seller_id: user5.id,
  name: "Carpino",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500928553/Carpino_2_medium2_ju6ebk.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500928553/Carpino_1_small2_a0ha3o.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500928552/Carpino_5_medium2_lpvfb7.jpg"],
  short_description: "This sweater is knit from the top down in the round, with minimal shaping at the neck and waist. It can be worn as a casual top with jeans or even as a warm layer over a more formal outfit",
  price: 8.00,
)

pattern4 = Pattern.create!(
  seller_id: user2.id,
  name: "Guernsey",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500954695/guernsey_wrap_1_medium2_nqx6hk.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500954695/guernsey_wrap_3_medium2_mapy3w.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500954696/guernsey_wrap_2_medium2_otaq51.jpg"],
  short_description: "Textured patterns found on traditional fishermen’s sweaters adorn this simple and practical stole. The knitting is straightforward, accessible to the adventurous beginner. The wrap achieves its generous dimensions and fluid drape through the use of blocking wires, typically used to put knitted lace under tension as it dries to open up the stitch motifs. Wires allow for even stretching of the fabric while maintaining a crisp, straight edge on all sides.",
  price: 8.00,
)


pattern5 = Pattern.create!(
  seller_id: user3.id,
  name: "Terra",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500954832/terra_1_medium2_ycqocg.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500954832/terra_2_medium2_uab0ck.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500954832/terra_3_medium2_xhovx7.jpg"],
  short_description: "Wavelets of lace lap at the trailing edge of this simple shawl textured with chevron furrows of garter ridge. The same instructions yield a large size with softly rustic fabric in Shelter or a smaller triangle with crisply defined motifs in Arbor. Jewel tones make Terra perfect for autumn; a bright hue like Tincture will give you a jolt of color to enliven an outfit in any season.",
  price: 8.00,
)

pattern6 = Pattern.create!(
  seller_id: user5.id,
  name: "Breslin",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500954991/breslin_03_medium2_srhiwl.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500954991/breslin_01_medium2_f44hvl.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500954991/FLAT_breslin_medium2_itjzqg.jpg"],
  short_description: "Set-in sleeves and waist shaping update the traditional boxy gansey for women who prefer a sleeker fit. Both yoke and upper sleeves are textured with a spare, high-relief, industrial pattern that recalls beams, trusses, and grating. The reverse stockinette body and sleeves are knit circularly to the underarm, then all pieces are completed working flat and sewn together. An open, minimally finished neckline and a light fabric of Loft make Breslin great for layering over collared shirts..",
  price: 9.00,
)

pattern7 = Pattern.create!(
  seller_id: user7.id,
  name: "Far Hills",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500955160/far_hills_hat_01_medium2_xpihuc.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500955160/far_hills_hat_02_medium2_tbeglc.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500955160/FLAT_far_hills_hat_full_foothills_medium2_gr5egp.jpg"],
  short_description: "This deeply textured beanie uses the same beaded cable found on the Far Hills Scarf, so you can knit a matched set. Here the cable is reinterpreted as chains of diminishing horseshoes that encircle the hat as they climb to the crown. A tubular cast-on yields a durable double-rib edge that’s elastic enough to fit most adult heads. The hat is worked from a large chart in two skeins of Shelter.",
  price: 8.00,
)
