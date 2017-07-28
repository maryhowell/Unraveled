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
  email: "Evie@gmail.com",
  password: "12345678"
)

user6 = User.create!(
  first_name: "John",
  last_name: "Jacob",
  email: "Luke@gmail.com",
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
  name: "Ondawa",
  image_url: ["https://res.cloudinary.com/unravled/image/upload/v1501260420/Ondawa_01_medium2_nipbre.jpg"],
  short_description: "ndawa is knit in Shelter and designed to be oversized or even generously oversized; we chose to style it with almost 19” of ease. Since the size of the boatneck is determined by your seaming, you can adjust the way the garment sits on your shoulders after the knitting is complete. Measure your arm circumference at the biceps to determine which size sleeve will give you a slender fit that’s not too restricting.",
  price: 9.00,
)

pattern12 = Pattern.create!(
  seller_id: user6.id,
  name: "Ronan",
  image_url: ["https://10084-presscdn-0-93-pagely.netdna-ssl.com/wp-content/uploads/2017/05/ronan_01-600x900.jpg"],
  short_description: "This open-front drop-yoke cardigan is the height of snuggly fashion. The brioche shawl collar, shaped with simple short rows, sweeps back to form pockets at the hem, and the sleeves begin below the elbows to create a cape-like silhouette. Tiny gutters of purl stitches trace a flattering A-line from hem to neckline within the volume of the coat. Top-down seamless construction makes Ronan a straightforward knit, and woolen-spun Shelter keeps the fabric light and airy despite the generous ease and long length.",
  price: 9.00
)

pattern13 = Pattern.create!(
  seller_id: user5.id,
  name: "Ilia",
  image_url: ["https://10084-presscdn-0-93-pagely.netdna-ssl.com/wp-content/uploads/2017/01/ilia_01-600x900.jpg"],
  short_description: "Add structural flair to your wardrobe with a plush cabled cardigan. Wide bands of front ribbing fold back to form a collar and create an architectural silhouette. The densely worked fabric features rope cables spliced into a lattice for vivid texture and cozy warmth. Ilia’s boxy fit makes for easy layering; the fronts may be pinned to close if you wish, so choose a size that gives you 3-5″ of ease with the fronts overlapped.",
  price: 9.00
)

pattern14 = Pattern.create!(
  seller_id: user4.id,
  name: "Prime",
  image_url: ["https://10084-presscdn-0-93-pagely.netdna-ssl.com/wp-content/uploads/2016/12/prime_01-600x900.jpg"],
  short_description: "Prime is a textural riff on our favorite boxy pullovers. Welts on the lower torso are halved by a narrow vertical element, while the yoke is in clean stockinette fabric. Exaggerated drop shoulders and just a hint of A-line shaping through the torso finesse the roomy fit, and the light warmth of Loft makes this an easy piece to incorporate into your wardrobe. Double-deep single ribbing on the hem and bracelet-length cuffs further heightens the geometry, and transitions in fabric are subtly marked by a lateral braid. All pieces are knit flat and seamed, with the neckband worked in the round after assembly.",
  price: 9.00
)

pattern15 = Pattern.create!(
  seller_id: user2.id,
  name: "Binary",
  image_url: ["https://10084-presscdn-0-93-pagely.netdna-ssl.com/wp-content/uploads/2016/12/binary_01-600x900.jpg"],
  short_description: "Sequence knitting can create familiar textured fabrics or break with traditional patterning and take flight in organic forms. This scarf (or wrap, if you opt for a larger scale) pairs alternating charted motifs to form a patchwork of flowing wavelets and more structured pennants. The reversible fabric is subtly different but equally handsome on both sides. Worsted-spun Arbor renders the stitches in high relief, and simple slipped-stitch edges keep the focus on the novel textures.",
  price: 8.00
)

pattern16 = Pattern.create!(
  seller_id: user1.id,
  name: "Foundry",
  image_url: ["https://10084-presscdn-0-93-pagely.netdna-ssl.com/wp-content/uploads/2016/10/foundry_4-600x900.jpg"],
  short_description: "Wrap up in a big luscious stole with an architectural motif of traveling ribs that gather and diverge. The deep texture adds cozy warmth as well as visual interest, and the charted motif is easily memorized after a few repetitions. Foundry is built with thoughtful details like slipped rib selvedges that keep the long sides straight and tidy, and buttons allow for converting the scarf to an oversized cowl.",
  price: 8.00
)

pattern17 = Pattern.create!(
  seller_id: user4.id,
  name: "Furrow Cowl",
  image_url: ["https://10084-presscdn-0-93-pagely.netdna-ssl.com/wp-content/uploads/2016/08/furrow_cowl_02-600x900.jpg"],
  short_description: "Curl up in this plush, oversized cowl on chilly days. Furrow’s simple stitches make for easy knitting, and a gentle bell shape — achieved by decreases within the moss stitch segments — makes styling effortless. Knit in Shelter to 18” tall, the cowl drapes and folds elegantly, but it can be shortened if you prefer less volume or wish to use a smaller amount of yarn. Pair it with a Furrow Hat for a matched set of accessories.",
  price: 8.00
)

pattern18 = Pattern.create!(
  seller_id: user3.id,
  name: "Tessera",
  image_url: ["https://10084-presscdn-0-93-pagely.netdna-ssl.com/wp-content/uploads/2016/08/tessera_01-600x900.jpg"],
  short_description: "A motif found on a pair of traditional Latvian mittens tessellates across the fabric of this toasty cowl. Accents in a third color lift and energize the fabric, allowing for a wider range of color play. Two of every twelve rounds require working all three colors at once to achieve this effect. The Tessera cowl is worked in Loft from a provisional crochet chain; a subtle funnel shape is achieved by changing needle sizes, and the self-facing is grafted to the cast-on edge for a seamless finish. Counting the fabric layers and the floats sandwiched inside, that’s four layers of wool between you and the elements.",
  price: 8.00
)

pattern19 = Pattern.create!(
  seller_id: user6.id,
  name: "Halus",
  image_url: ["https://10084-presscdn-0-93-pagely.netdna-ssl.com/wp-content/uploads/2016/01/Halus_04-600x900.jpg"],
  short_description: "This one-of-a-kind cap features exaggerated texture and playful use of negative space, with plump chains rising to the crown between ladders of easy lace. The knitting begins with a tubular cast-on and a band of single rib; chains are worked by dropping stitches and hooking them back up in clusters. Quick and so much fun to knit from a single skein of Quarry, Halus is an ideal last-minute gift—and you may find you can’t stop at one.",
  price: 7.00
)

patter20 = Pattern.create!(
  seller_id: user7.id,
  name: "League",
  image_url: ["https://10084-presscdn-0-93-pagely.netdna-ssl.com/wp-content/uploads/2016/01/League_01-600x900.jpg"],
  short_description: "Color blocking achieves stylish new heights in this sporty pullover. The front and back are worked flat in intarsia, with increases and decreases on either side of the color change to achieve a faux-raglan effect. Saddle-shoulder sleeves are knit flat in a third color of Loft. The subtlest of A-line shapes gives League a neat fit that still allows layering over collared shirts.",
  price: 9.00
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
