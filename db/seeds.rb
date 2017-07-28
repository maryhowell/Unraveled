# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Pattern.destroy_all
Review.destroy_all
Favorite.destroy_all


demo = User.create!(
  first_name: "Demo",
  last_name: "User",
  email: "Demo@gmail.com",
  password: "12345678"
)


user0 = User.create!(
  first_name: "John",
  last_name: "Jacob",
  email: "Jeff@gmail.com",
  password: "12345678"
)

user1 = User.create!(
  first_name: "Hope",
  last_name: "Wanroy",
  email: "Hope@gmail.com",
  password: "12345678"
)

user2 = User.create!(
  first_name: "Dallas",
  last_name: "Hall",
  email: "Dallas@gmail.com",
  password: "12345678"
)

user3 = User.create!(
  first_name: "Kelly",
  last_name: "Chung",
  email: "Kelly@gmail.com",
  password: "12345678"
)

user4 = User.create!(
  first_name: "Mable",
  last_name: "Smith",
  email: "Jules@gmail.com",
  password: "12345678"
)

user5 = User.create!(
  first_name: "Laurie",
  last_name: "Smithy",
  email: "Hope@gmail.com",
  password: "12345678"
)

user6 = User.create!(
  first_name: "John",
  last_name: "Jacob",
  email: "Kelly@gmail.com",
  password: "12345678"
)

user7 = User.create!(
  first_name: "Mable",
  last_name: "Smith",
  email: "David@gmail.com",
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

pattern8 = Pattern.create!(
  seller_id: user5.id,
  name: "Byway",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1501258617/byway_05_medium2_qsdgtg.jpg"],
  short_description: "Beat the cold weather in instant style with a chunky cable-knit scarf or wrap. Blocks of textural patterning reminiscent of seamen’s ganseys create an attractive allover fabric and keep the knitting process engaging. Work up a traditional scarf or, if you prefer accessories that don’t mince around, expand your Byway to a dramatic wrap. Quarry makes the knitting fly and shows the stitch patterns beautifully.",
  price: 8.00,
)

pattern9 = Pattern.create!(
  seller_id: user7.id,
  name: "High Pines",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1501258896/high_pines_1_medium2_lx5oii.jpg"],
  short_description: "Branching half-twisted rib and knit-purl texture shifts combine to decorate this shaped cowl with stitchwork that conjures alpine evergreens. Columns of clustered stitches that are decreased and then restored in the same maneuver punctuate the motifs, which subtly diminish toward the top edge for a fit that’s wider at the shoulders and slightly closer about the neck.",
  price: 8.00,
)

pattern10 = Pattern.create!(
  seller_id: user5.id,
  name: "Snoqualmie",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1501259136/Snoqualmie_04_medium2_aqtjva.jpg"],
  short_description: "This cabled shawl-collar cardigan radiates classic good looks and cozy texture. Elaborate cable motifs really make Quarry purr; Snoqualmie’s grid of densely twining stitches looks complex but is intuitive to work and easy to memorize. Whether you wear it as a barn coat or dress it up with tall boots and a skirt, this is knitwear that will make you look forward to cold weather.",
  price: 9.00,
)

pattern11 = Pattern.create!(
  seller_id: user7.id,
  name: "Far Hills",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500955160/far_hills_hat_01_medium2_xpihuc.jpg"],
  short_description: "This cabled shawl-collar cardigan radiates classic good looks and cozy texture. Elaborate cable motifs really make Quarry purr; Snoqualmie’s grid of densely twining stitches looks complex but is intuitive to work and easy to memorize. Whether you wear it as a barn coat or dress it up with tall boots and a skirt, this is knitwear that will make you look forward to cold weather.",
  price: 9.00,
)

pattern12 = Pattern.create!(
  seller_id: user5.id,
  name: "Breslin",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500954991/breslin_03_medium2_srhiwl.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500954991/breslin_01_medium2_f44hvl.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500954991/FLAT_breslin_medium2_itjzqg.jpg"],
  short_description: "Set-in sleeves and waist shaping update the traditional boxy gansey for women who prefer a sleeker fit. Both yoke and upper sleeves are textured with a spare, high-relief, industrial pattern that recalls beams, trusses, and grating. The reverse stockinette body and sleeves are knit circularly to the underarm, then all pieces are completed working flat and sewn together. An open, minimally finished neckline and a light fabric of Loft make Breslin great for layering over collared shirts..",
  price: 9.00,
)

pattern13 = Pattern.create!(
  seller_id: user7.id,
  name: "Far Hills",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1500955160/far_hills_hat_01_medium2_xpihuc.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500955160/far_hills_hat_02_medium2_tbeglc.jpg",
              "https://res.cloudinary.com/unravled/image/upload/v1500955160/FLAT_far_hills_hat_full_foothills_medium2_gr5egp.jpg"],
  short_description: "This deeply textured beanie uses the same beaded cable found on the Far Hills Scarf, so you can knit a matched set. Here the cable is reinterpreted as chains of diminishing horseshoes that encircle the hat as they climb to the crown. A tubular cast-on yields a durable double-rib edge that’s elastic enough to fit most adult heads. The hat is worked from a large chart in two skeins of Shelter.",
  price: 8.00,
)

review1 = Review.create!(
  item_id: 1,
  user_id: 1,
  description: "Great sweater"
)

review2 = Review.create!(
  item_id: 2,
  user_id: 2,
  description: "Love this!"
)
review24 = Review.create!(
  item_id: 3,
  user_id: 3,
  description: "OMG I want to make this so bad"
)
review3 = Review.create!(
  item_id: 4,
  user_id: 4,
  description: "I love this design"
)
review4 = Review.create!(
  item_id: 5,
  user_id: 5,
  description: "I want to make one for my boyfriend"
)
review5 = Review.create!(
  item_id: 6,
  user_id: 6,
  description: "Love the details"
)
review6 = Review.create!(
  item_id: 7,
  user_id: 7,
  description: "This is the best!"
)

favorite1 = Favorite.create!(
  pattern_id: 1,
  user_id: 1
)
favorite2 = Favorite.create!(
  pattern_id: 2,
  user_id: 2
)
favorite3 = Favorite.create!(
  pattern_id: 3,
  user_id: 3
)
favorite4 = Favorite.create!(
  pattern_id: 4,
  user_id: 4
)
favorite5 = Favorite.create!(
  pattern_id: 5,
  user_id: 5
)
favorite6 = Favorite.create!(
  pattern_id: 6,
  user_id: 6
)
favorite7 = Favorite.create!(
  pattern_id: 7,
  user_id: 7
)
favorite8 = Favorite.create!(
  pattern_id: 2,
  user_id: 2
)
favorite9 = Favorite.create!(
  pattern_id: 3,
  user_id: 3
)
