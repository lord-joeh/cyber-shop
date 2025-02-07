// Ensure modal is declared at the top of your script
let modal;
//Products
const products = [
  {
    id: 1,
    name: 'Samsung Galaxy A06',
    price: 1611,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/87/4803262/1.jpg?0984',
    description:
      'Samsung Galaxy A06 - 128GB + 4GB RAM - 50MP Rear / 8MP Front - 6.7" - 5000 mAh - Black (24 Months Warranty).',
    category: 'phones-and-tablets',
  },
  {
    id: 2,
    name: 'Infinix Hot 50 Pro Plus ',
    price: 3218,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/10/0224382/1.jpg?5126',
    description:
      "Infinix Hot 50 Pro Plus - 6.78'' Display - 256GB HDD - 8GB RAM - 48MP - 8MP - 5000mAh - Sleek Black - 12 Months Warranty",
    category: 'phones-and-tablets',
  },
  {
    id: 3,
    name: 'TECNO Pop 9',
    price: 1335,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/17/3957252/1.jpg?3395',
    description:
      "TECNO Pop 9 - 6.6'' - 64GB ROM - 3GB RAM - 13MP Rear/8MP Front - 5000mAh - Startrail Black, 13 Months Warranty",
    category: 'phones-and-tablets',
  },
  {
    id: 4,
    name: 'NIVEA Body Lotion - Perfect & Radiant',
    price: 46,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/71/749333/1.jpg?5236',
    description:
      'NIVEA Perfect & Radiant Body Lotion is a daily moisturizer developed to enhance the skin’s natural radiance. The innovative formula of NIVEA Perfect & Radiant Body Lotion gives the desired benefits via combined effect of the active ingredients. It works through two mechanisms.Even toned skin by reducing or inhibiting overall skin pigmentation. Active ingredients added to the formula (licorice extract and Octadecene dioic acid) are known to facilitate even toned skin by acting on the melanin producing enzyme, tyrosinase.UV protection – The sunscreens added to the formula help in maintaining skin colour by protecting skin from harsh UV rays thus protecting the skin from hyperpigmentation and future skin darkening Berry extracts provide a visibly even and radiant skin Liquorice also helps to brighten dark spots and discoloration. UVA/UVB filters help to protect the skin against sun damage. Glycerin and Vitamin E provide intensive moisturization for smooth skin.',
    category: 'health-and-beauty',
  },
  {
    id: 5,
    name: 'Vaseline Lot Cocoa Glow Lotion',
    price: 37,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/63/491664/1.jpg?7321',
    description:
      "​Keep skin moisturized and supple with these products formulated with essential nutrients to help improve skin health. The cocoa butter lotion deep conditions and smooths skin, drawing out its natural glow. Brazilian nut and almond oil help boost skin's natural moisture barrier.Vaseline Cocoa Radiant Body Lotion is made with 100% pure cocoa and shea butters, known to reveal skin’s natural radiancePenetrates deeply to help minimize roughness and the appearance of dark spotsLotion contains rich cocoa butter and conditioning moisturizers to help even skin tone and leave skin suppleContains microdroplets of Vaseline® Jelly to lock in moisture",
    category: 'health-and-beauty',
  },
  {
    id: 6,
    name: 'Pepsodent Triple Protection Toothpaste - Charcoal White',
    price: 18,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/70/491664/1.jpg?6361',
    description:
      'Over the years, our teeth suffer a barrage of physical attack from food of varying textures resulting in tiny invisible holes that may eventually lead to cavities as well as a host of other dental infections over time.This is why Pepsodent Cavity Fighter Toothpaste comes infused with an active micro calcium agent that helps repairs these holes and restores the mineral composition of weak spots in the tool enamel, providing the necessary added layer of protection against germs and cavities.For thorough cleansing and improved dental health, the fast-acting toothpaste also comes complete with a pro-fluoride complex that reaches in between your teeth and thoroughly cleanses from the gum up, keeping your mouth sparkling clean and your breath minty fresh.Brush twice daily with Pepsodent Cavity Fighter Toothpaste for full dental cleansing action and to keep your teeth healthy and stronger for the foreseeable future. Pepsodent Cavity Fighter repairs tiny invisible holes and strengthens teeth',
    category: 'health-and-beauty',
  },
  {
    id: 7,
    name: 'NIVEA Dry Impact Anti Perspirant Roll-On',
    price: 28,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/07/749333/1.jpg?0552',
    description:
      "NIVEA MEN Dry Impact Anti-Perspirant offers you 72h reliable protection with unique skin comfort. The effective dual protect formula with 2 antibacterial actives keeps your armpits dry and prevents malodour. At the same time, this skin-friendly formula with 0% alcohol supports a comfortable skin feeling. It's skin tolerance has been dermatologically proven.",
    category: 'health-and-beauty',
  },
  {
    id: 8,
    name: 'NIVEA NIVEA Radiant & Beauty Advanced Care Body Lotion',
    price: 105,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/849333/1.jpg?5134',
    description:
      'NIVEA Radiant & Beauty Advanced Care Body Lotion offers 48H long lasting nourishment, helps reduce & smoothen stretch marks*, helps repair dry & ashy skin*, helps repair the roughest parts of your skin: elbows, arms, knuckles*, and is enriched with 5 natural oils (avocado, almond, soybean, macadamia and olive oil) & 5 vitamins (A, B3, C, E, per vit B5).',
    category: 'health-and-beauty',
  },
  {
    id: 9,
    name: 'Blood Pressure Monitors Heart Rate Health Monitors Arm Wrist Heart BP Monitor sphygmomanometer',
    price: 169,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/56/563892/1.jpg?2071',
    description:
      'Clock function, you can set year, month, day, hour, minute by yourself easily. Arm type of design,you need to take off your coat or your sweater for measuring accurately. Intelligent pressurize and decompress design, with IHB heart rate monitoring function, more practical.',
    category: 'health-and-beauty',
  },
  {
    id: 10,
    name: 'Op Non Stick Marble Coating Glory Mega Die Cast Cooking Pot Set With Glass lid',
    price: 880,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/21/6060662/1.jpg?5984',
    description:
      "Non Stick Marble Coating Glory Mega Die Cast Cooking Pot Set With Glass lid - Black ( 28,32,36 ) cm in size. Non Stick Crown King Die Cast Cooking Pot Set is the perfect kitchen addition for any home chef. This 3 pc set is made with a non-stick die cast material and is designed to withstand heavy-duty use. The set is complete with a glass lid for added convenience. It's ideal for a wide range of cooking tasks, ensuring a professional performance every tim",
    category: 'home-and-office',
  },
  {
    id: 11,
    name: 'Wooden Shoe Rack With Mini Top Drawer',
    price: 542,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/47/9740861/1.jpg?6289',
    description:
      "This  modern multipurpose shoe rack and book shelf also comes with a mini top drawer for storing valuables.It will be delivered in a box and would r self assembling. It's made of wood and package comes with it's own screws for fixing, you only need a screwdriver. It can be used to store kids and adults shoes. Get this beautiful modern shoe rack and beautiful your space",
    category: 'home-and-office',
  },
  {
    id: 12,
    name: 'Lindy Double Size Bed Sheets - 3 Pieces - Blue/White',
    price: 138,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/6360031/1.jpg?3467',
    description:
      "Enjoy a fresh day on the bed in this Luxuriously bedding sheet set that is truly worthy of a classy elegant suite and is found in world class hotels as well. It has a colorful print that makes it look beautiful on your bed. It is made of 100% polyester and provides the softest and most comfortable night's sleep you could ever hope to experience.",
    category: 'electronics',
  },
  {
    id: 13,
    name: 'Nasco NASGC-50X50B-CTZ 4-Burner Gas Cooker-Oven-Glass Top-Black',
    price: 1825,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/01/5333482/1.jpg?1884',
    description:
      '4 High-Efficiency Burners :This sturdy Nasco NASGC-50X50B-CTZ 4-Burner Gas Cooker-Oven-Glass Top-Black Burner Gas Cooker has four differently sized burners which can take care of four different tasks at the same time. Two of the burners measure 7.62 cm, and two measure 6.35 cm. With same sized burners placed across from each other, the gas stove makes maximum utilization of space, accommodating two large and two small utensils simultaneously. The efficient brass burners of the stove are designed to save fuel.',
    category: 'appliance',
  },
  {
    id: 14,
    name: 'Banana 20L - Microwave Oven - Black',
    price: 856,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/60/436443/1.jpg?0259',
    description:
      "Banana microwave oven is the perfect kitchen add for you to either bake, toast, steam, reheat and defrost. Banana is always aimed at providing suitable home appliances at the best price, and constantly enriching its customers' life experience. It continuously strives to enrich the living experience for each family worldwide. All Banana has done is to offer you a smart and colorful new life. Banana spares no efforts to develop into a leading home appliance brand of its kind now in Africa.",
    category: 'appliance',
  },
  {
    id: 15,
    name: 'Asano 1.5 HP -AS-A15 - Split Air Conditioner',
    price: 3707,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/6665041/1.jpg?9962',
    description:
      'The Asano Split Air Conditioner Wall Split Air Conditioner comes with the unique technology to offer higher efficiency compared to other air conditioners in the market. The technology works together with built-in healthy ionizer to allow you and your family to enjoy clean air. The Air conditioner works silently while preserving the peace that you deserve especially after a long day. It offers features unique such as comfortable sleep, auto-swing and 24 timer just for your convenience.',
    category: 'appliance',
  },
  {
    id: 16,
    name: 'Westpool 1.5L 2-in-1 Blender ',
    price: 216,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/86/3866232/1.jpg?3639',
    description:
      'The sturdy blender has a pulse mode with grinder and 3 speed controls so you have the option of preparing different recipes to your preference. The ultra-sharp stainless steel blades ensure you get a smooth final  makes for easy cleaning and maintaining also the filter ensure you get clear juice without seeds and pips',
    category: 'appliance',
  },
  {
    id: 17,
    name: 'Nexus 200 Litres - NX-FZ-265H Chest Freezer',
    price: 3822,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/78/4859701/1.jpg?3114',
    description:
      'Nexus refrigerating products do more than just cooling and preserving your foods, dairy, and groceries,  they come in amazing energy-efficient capacities and space-saving designs that is simply perfect and will not alter the aesthetics of your living area.The Nexus NX-265H Chest Freezer features removable storage baskets and an easy-to-clean design for extra convenience. It is highly energy efficient and is also 100% HFC and FCKW free. The 200-litre capacity freezer is powered by a high-efficiency compressor that ensures fast freezing.',
    category: 'appliance',
  },
  {
    id: 18,
    name: 'AILYONS HD-198A-J Electric Dry Iron Box - 1000W - White & Blue',
    price: 89,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/66/1112781/1.jpg?6697',
    description:
      'Beat the creases and look sharp with this dry iron box. It also comes with an overheating protection feature saving you from accidental electrical fires. This iron features a power indicator light that goes off when the required ironing temperature has been reached and a long power cord that can wrap around the heel rest for easy storage. The stainless soleplate surface makes it easier to clean starch buildup from the soleplate. It gets better because it does not affect how smoothly the iron glides over fabrics it just glides just as easily.',
    category: 'appliance',
  },
  {
    id: 19,
    name: "Nuvo Full HD Android TV - 43'' - HDMI - USB & Coax Ports - Black",
    price: 3073,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/16/7929501/1.jpg?3846',
    description:
      'Nuvo Television is backed up with High Dynamic-Range-Technology that expresses details in content in both very bright and very dark scenes. It offers a more natural and natural-like picture output even with a widened range of contrast.',
    category: 'electronics',
  },
  {
    id: 20,
    name: 'WEYON 5.1 Channel Bluetooth Speaker Home Theater - 300W - Black - 12 Months Warranty',
    price: 702,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/68/597745/1.jpg?5045',
    description:
      'The first output of 300 watts, an exciting audio experience. It’s time to start the party. Improve your audio experience with 300 watts of continuous beats. Take your party to the next level. Double to enjoy more fun.',
    category: 'electronics',
  },
  {
    id: 21,
    name: 'Hifinit Movie LED TV 1080P 6000 Lumen MINI Projector WIFI',
    price: 1670,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/09/4372901/1.jpg?0796',
    description:
      'LED Projector for Indoor & Outdoor Home Theater Entertainment.Native 1280 x 720P resolution which provides 60% crisper picture quality than 480P projectors.Upgraded 6000lumens of brightness, 30% brighter than the older version and other 720p projectors, offering a highly visible display with clear on-screen images.2000:1 contrast ratio: provides a multitude of shades between black and white for rich color saturation.Multimedia inputs (HDMI, TF, AV, USB) Connect it directly to your home theater system!55 - 130 viewable screen size, it allows everyone in the room to enjoy a clear view in a comfortable way.Delivers more than 50,000 hours of lamp life in normal mode for extended use.Built-in HIFI Stereo Sound which creates a crisp sound and comfortable immersion experience you cannot resist.Supports a variety of signals, including 1080p for a wide range of compatibility options. Watching movies, enjoying concerts and playing games, all on the same wall.The ideal distance is 8.2-11.4 ft with 80-100’ large screen.WIFI connection',
    category: 'electronics',
  },
  {
    id: 22,
    name: 'Wireless Adapter 3D Audio Receiver - Black',
    price: 175,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/73/695945/1.jpg?9124',
    description:
      'Unique 3D Surround Sound Function: With 3D audio button, you can switch to 3D mode to enjoy surround sound with high fidelity from normal audio source. Its advanced internal chip supports conversion to make possible, using convenient lossless codes. AutomaticWhen you connect to power, so it is very good for car use or other use, you want it to have auto-on functions.',
    category: 'electronics',
  },
  {
    id: 23,
    name: 'Hp 15s-fq0004nia - 15.6" HD, Intel Celeron N4120 Processor, 256GB SSD- 4GB RAM, Free DOS - Silver',
    price: 4950,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/20/4050881/1.jpg?0019',
    description:
      'The HP Laptop 15s-fq0004nia is a reliable computing companion designed to meet the needs of everyday tasks. Powered by an Intel Celeron N4120 processor, this laptop ensures smooth performance for your day-to-day activities. The 15.6-inch HD display with a resolution of 1366 x 768 provides a clear and vibrant viewing experience, enhanced by the anti-glare feature that reduces reflections and eye strain.',
    category: 'computing',
  },
  {
    id: 24,
    name: 'Hp LaserJet Pro M107a Printer - White',
    price: 2350,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/62/8478241/1.jpg?3448',
    description:
      'Get productive print performance at an affordable price. Produce high-quality results and print and scan from your phone. This surprisingly small laser delivers exceptional quality, page after page. Produce sharp text, bold blacks and crisp graphics. You can fit this printer almost anywhere – it’s that small and compact. Get print speeds up to 20 ppm (A4). Get simple setup, print and scan from your phone, with the HP Smart app. Easily share resources – access and print.',
    category: 'computing',
  },
  {
    id: 25,
    name: 'TP-Link 300 Mbps Wireless N 4G LTE Router - Black',
    price: 1164,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/58/628165/1.jpg?7628',
    description:
      'Maximum wireless signal rates are the physical rates derived from IEEE Standard 802.11 specifications. Actual wireless data throughput and wireless coverage, and quantity of connected devices are not guaranteed and will vary as a result of network conditions, client limitations, and environmental factors, including building materials, obstacles, volume and density of traffic, and client location.',
    category: 'computing',
  },
  {
    id: 26,
    name: 'Colorful LED 2.4G Rechargeable Ultra-Thin Wireless Mouse - Silver',
    price: 44,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/28/872168/1.jpg?3248',
    description:
      "This 2.4G wireless transmission technology provides reliable connection within a range of 10m, allows you to say goodbye to the wired shackles and operate more freely. It has an ergonomic design, fits the hand, provides comfortable feel, effectively reduces hand fatigue. It's humanized silent design, creates a quiet and comfortable environment whether you are in quiet office or studying late at night in the library. It also features a (3) three adjustable DPI which provide sensitive response and smooth operation, can position accurately in moving. Slim design, lightweight and portable, you can easily put it in a bag or pocket, more convenient to use. No driver required, plug and play. Built-in 500mAh rechargeable battery, adopt low and energy saving technology, no need to charge the battery repeatedly.",
    category: 'computing',
  },
  {
    id: 27,
    name: "Fashion 2 In 1 Men's Short Sleeve Shorts Set - Black",
    price: 95,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/48/473397/1.jpg?6730',
    description:
      'Yinglong Family is a international fashion clothing and accessory store. Focusing on the very latest in affordable Jumia fashion styles, both attire and stunning accessories, we feature many newest product lines, providing maximum choice and convenience to our discerning clientele. We also aim to provide an extensive range of high quality, trendy fashion clothing together to our valued customers. Our goal is always to provide our customers with stunning, high quality fashion products at down to earth prices. Yinglong Family offers trending fashion-forward styles, edgy and innovative designs all delivered with a truly class-leading professional service.',
    category: 'fashion',
  },
  {
    id: 28,
    name: "Fashion Women's Double Layered Diamond Pendant Necklace",
    price: 29,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/79/9818581/1.jpg?0422',
    description:
      'Introduce our exquisite and charming double-layer diamond pendant necklace, suitable for women to wear - a microcosm of elegance and eternal beauty. This stunning and unique item has been carefully designed to enhance the style of any woman, stand out in any crowd, and leave a lasting impression on anyone.The design is perfect, and this necklace elegantly hangs around the neck, using a single-layer double-layer chain to create a charming and exquisite appearance. Each layer of chain is professionally manufactured to ensure durability and ensure that accessories become precious items in your jewelry collection in the coming years. The design is perfect, and this necklace elegantly hangs around the neck, using a single-layer double-layer chain to create a charming and exquisite appearance. Each layer of chain is professionally manufactured to ensure durability and ensure that accessories become precious items in your jewelry collection in the coming years. Perfectly designed,',
    category: 'fashion',
  },
  {
    id: 29,
    name: "Fashion Men's Shoes Fashion Sneakers - White",
    price: 139,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/57/923432/1.jpg?9387',
    description:
      "This footwear is classy and gets the attention of onlookers. With it's trendy and gorgeous finish, it pairs well with every outfits. The heel is evenly balanced for comfortable movement. This collection has versatility and comfort you would always require in a shoe",
    category: 'fashion',
  },
  {
    id: 30,
    name: '2Pcs/Set ABS Push Up Bar Body Fitness Training Tools',
    price: 72,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/41/8104931/1.jpg?5304',
    description:
      'Features: Size: 25*15*8cm Color:Black Blue Material: PP+EVA Package:1 Pair',
    category: 'sporting-goods',
  },
  {
    id: 31,
    name: 'Resistance Loop Exercise Band 5 in 1 - Multicolour',
    price: 100,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/89/2382451/1.jpg?5986',
    description:
      'The resistance bands are made from natural latex. Whether you are a start-up or a fitness veteran, they are the ideal choice. Our ultra-light sports belts are perfect for beginners, while our medium, heavy and super heavy sports belts are used for medium and advanced strength training.',
    category: 'sporting-goods',
  },
  {
    id: 32,
    name: 'New 2025 Ghana Black Stars Jersey - Yellow/ Black',
    price: 200,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/27/1001482/1.jpg?5784',
    description:
      'The Ghana Away Kit shines brightly in bold yellow, with the iconic Black Star taking center stage. Traditional Adinkra symbols are featured across the sleeves, side panels, and lower back as a nod to Ghana’s rich cultural heritage.',
    category: 'sporting-goods',
  },
  {
    id: 33,
    name: 'Baby Discovery 6 Way Adjustable Baby Carrier - Blue',
    price: 96,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/97/576125/1.jpg?4308',
    description:
      "This comfortable baby carrier for your little one lets you take your baby with you wherever you go effortlessly. The carrier is safe and can be used till your baby is 30 months. This product is designed with a head cushion and neck protection band. It protects new-born baby's neck while he/she is sleeping.",
    category: 'baby-products',
  },
  {
    id: 34,
    name: '4 in 1 Portable Baby Bed with Net - Pink',
    price: 145,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/71/088193/1.jpg?8910',
    description:
      'The baby bed net allows fresh air to breeze in while prevent insect from biting to provide a safe sleeping environment. Folding design is easy to carry and use. Perfect for outdoors and indoor use.',
    category: 'baby-products',
  },
  {
    id: 35,
    name: 'Baby Feeding Bottle Set - 13 Pieces - Blue',
    price: 189,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/88/441903/1.jpg?9084',
    description:
      "This is perfect for your baby's nursery with a unique baby gear to serve your little one well. It is a must have item for all nursing mothers any day. This set of feeding bottle makes great centerpiece at a baby shower and ensure your baby has a comfortable and nourished feeding experience at every stage. This is made up of 11 pieces of items.",
    category: 'baby-products',
  },
  {
    id: 36,
    name: 'Genetic 2PC Baby Full Sleeve WaterProof Feeding Bibs -Red & Green',
    price: 68,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/07/2673051/1.jpg?5004',
    description: '',
    category: 'baby-products',
  },
  {
    id: 37,
    name: 'Sony PS4 Wireless Controller',
    price: 299,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/52/6046142/1.jpg?0428',
    description:
      "You will need to pair your controller when you use it for the first time and when you use it with another PS4™️ system.Turn on the PS4™️ system and connect the controller with the USB cable to complete device pairing.You can also Charge your controller by connecting the USB to a computer or another USB device.This product contains a lithium-ion rechargeable battery When the controller is not used for extended period of time, it is recommended that you fully charge it at least once a year in order to maintain it's functionality.",
    category: 'gaming',
  },
  {
    id: 38,
    name: 'PS5 Charging Station Dock P5 Controller Charger With Fan',
    price: 828,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/62/0715931/1.jpg?5056',
    description:
      '[PS5 Stand for PS5 Digital / Disc Edition]-All-In-One multifunctional design for ps5 digital edition & disc edition,this ps5 stand can dissipate heat for the playstion 5 console, store PS5 controllers, headsets, game discs and quickly charge PS5 controllers.',
    category: 'gaming',
  },
  {
    id: 39,
    name: 'Hot Game console and controllers decal For Sony PS3 Slim',
    price: 309,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/53/080068/1.jpg?8189',
    description:
      'Console games generally have a short flow, fast-paced characteristics. Because the purpose of the game is to entertain people in a short period of time (waiting for a bus, waiting in line), it does not have the complex plot of a typical video game. At the same time, due to the limitations of hardware conditions, the picture and sound of the general console are not like the home game hardware of the period. This puts a higher demand on game designers.',
    category: 'gaming',
  },
  {
    id: 40,
    name: 'Steering Wheel Bracket Gamepad Plastic Professional For PS5 Children',
    price: 624,
    image:
      'https://gh.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/88/7666412/1.jpg?6522',
    description:
      'Dear customers, welcome to my store. We are an online store where you can purchase all your electronics, home appliances, kiddies items, fashion items for men, women, and children; cool gadgets, groceries, automobile parts, and more on the go. Our store is a star store dedicated to creating high-quality and practical products, allowing you to enjoy a better lifestyle. Your support is our greatest driving force. All the goods in our store are sold at the lowest price, and the quality is guaranteed. If you need it, please rest assured to buy, we will provide you with a comfortable shopping experience every time. As well we are launching new products every day, please follow our store and pay more attention, you will get the information of our latest products as soon as possible. Clicking on the seller information to enter our store to buy what you needs, after placing an order, we will deliver the goods for you at the frist time. Thank you and have a nice day!',
    category: 'gaming',
  },
];

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach((n) =>
      n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }),
    );
  }

  displayProducts(products); // Ensure this is called after the DOM is loaded
  updateCartCount(); // Update cart count on page load
});

// Add cart persistence
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update cart count
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartCount = cart.length;
  document.querySelector('.cart-count').textContent = cartCount; // Update the cart count display
}

// Function to add to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return; // Ensure the product exists

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  const existingProductIndex = cart.findIndex((item) => item.id === product.id);
  if (existingProductIndex > -1) {
    // If it exists, increase the quantity
    cart[existingProductIndex].quantity += 1;
  } else {
    // If it doesn't exist, add it to the cart
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1, // Initialize quantity
    });
  }

  // Update the cart in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  // Update the cart count display
  updateCartCount();

  console.log(cart); // Check the cart contents after adding items
  console.log(`Subtotal: GH₵ ${subtotal}`); // Check subtotal calculation
}

// Function to remove from cart
function removeFromCart(productId) {
  console.log(`Removing product with ID: ${productId}`); // Log the product ID being removed
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log('Current cart before removal:', cart); // Log the current cart

  const productIndex = cart.findIndex((item) => item.id === productId);
  if (productIndex > -1) {
    cart.splice(productIndex, 1);
    console.log('Product removed. Updated cart:', cart); // Log the updated cart
  } else {
    console.log('Product not found in cart.'); // Log if the product was not found
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart(); // Ensure the cart is displayed after removal
}

// Function to display products
function displayProducts(productsToDisplay) {
  const productList = document.getElementById('product-list');
  if (!productList) {
    console.error('Product list element not found!');
    return;
  }
  productList.innerHTML = ''; // Clear the product list

  // Create a container for the product grid
  const productGrid = document.createElement('div');
  productGrid.classList.add('product-grid');

  productsToDisplay.forEach((product) => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item'); // Ensure this class is used for styling
    productItem.setAttribute('data-category', product.category); // Set data-category
    productItem.setAttribute('data-price', product.price); // Set data-price
    productItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>GH₵${product.price}</p>
          <div class="button-container">
              <button onclick="addToCart(${product.id})">Add to Cart</button>
              <button onclick="window.location.href='view-product.html?id=${product.id}'">View Product</button>
          </div>
      `;
    productGrid.appendChild(productItem);
  });

  productList.appendChild(productGrid); // Append the grid to the product list
}
// Display Cart with totals
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = ''; // Clear existing cart items

  let subtotal = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity; // Calculate total for this item
    subtotal += itemTotal; // Add to subtotal

    const cartItem = document.createElement('div');
    cartItem.innerHTML = `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: auto;"/>
        <p>${item.name} - GH₵ ${item.price} x ${item.quantity}</p>
        <button onclick="removeFromCart(${item.id})">Remove</button>
      </div>
    `;
    cartList.appendChild(cartItem);
  });

  const tax = subtotal * 0.1; // Example tax calculation (10%)
  const total = subtotal + tax;

  // Update the totals in the cart display
  const subtotalElement = document.getElementById('subtotal');
  const taxElement = document.getElementById('tax');
  const totalElement = document.getElementById('total');

  // Check if elements exist before setting textContent
  if (subtotalElement && taxElement && totalElement) {
    subtotalElement.textContent = `GH₵${subtotal.toFixed(2)}`;
    taxElement.textContent = `GH₵${tax.toFixed(2)}`;
    totalElement.textContent = `GH₵${total.toFixed(2)}`;
  } else {
    console.error('One or more total elements not found in the DOM.');
  }
}

// Modify existing checkout function
function checkout() {
  alert('Thank you for your purchase!');
  cart.length = 0; // Clear the cart array
  localStorage.removeItem('cart'); // Clear cart from localStorage
  updateCartCount(); // Update cart count display
  removeFromCart();
  updateCartTotals(); // Reset totals to 0
}

// Event Listeners

document
  .getElementById('product-list')
  .addEventListener('click', () => displayProducts(products));
document.getElementById('cart-list').addEventListener('click', displayCart);
document.getElementById('checkout-button').addEventListener('click', checkout);

// Category filtering
function filterProducts(category) {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;
  displayProducts(filteredProducts);
}

// Price filtering
function filterByPrice(range) {
  let filtered = [...products];

  switch (range) {
    case '0-99':
      filtered = products.filter((p) => p.price < 100);
      break;
    case '100-499':
      filtered = products.filter((p) => p.price >= 100 && p.price < 500);
      break;
    case '500-999':
      filtered = products.filter((p) => p.price >= 500 && p.price < 1000);
      break;
    case '1000-1999':
      filtered = products.filter((p) => p.price >= 1000 && p.price < 2000);
      break;
    case '2000-2999':
      filtered = products.filter((p) => p.price >= 2000 && p.price < 3000);
      break;
    default:
      filtered = products; // If no range matches, show all products
  }

  displayProducts(filtered);
}

// Event listeners for filters
document.addEventListener('DOMContentLoaded', function () {
  const categoryFilter = document.getElementById('category-filter');
  const priceFilter = document.getElementById('price-filter');

  if (categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
      filterProducts(e.target.value);
    });
  }

  if (priceFilter) {
    priceFilter.addEventListener('change', (e) => {
      filterByPrice(e.target.value);
    });
  }
});

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function () {
  updateCartCount();
  displayCart(); // Ensure cart is displayed on load
});

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      // If you want to prevent default behavior for some links, uncomment the next line
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
});

function updateCartTotals() {
  const subtotalElement = document.getElementById('subtotal-amount');
  const taxElement = document.getElementById('tax-amount');
  const totalElement = document.getElementById('total-amount');

  let subtotal = 0;
  cart.forEach((productId) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      subtotal += product.price; // Assuming price is a number
    }
  });

  const tax = subtotal * 0.1; 
  const total = subtotal + tax;

  subtotalElement.textContent = `GH₵ ${subtotal.toFixed(2)}`;
  taxElement.textContent = `GH₵ ${tax.toFixed(2)}`;
  totalElement.textContent = `GH₵ ${total.toFixed(2)}`;
}

document.querySelectorAll('.category-card a').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const category = this.getAttribute('href').split('=')[1];
    console.log(`Category clicked: ${category}`);
    filterProducts(category);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const cartList = document.getElementById('cart-list');
  if (cartList) {
    cartList.addEventListener('click', displayCart);
  }
});

// Initialize product display on page load
document.addEventListener('DOMContentLoaded', function () {
  displayProducts(products); // Ensure products are displayed on load

  // Filtering functionality
  $('#category-filter, #price-filter').change(function () {
    filterProducts();
  });

  // Search functionality
  $('#search-input').on('input', function () {
    filterProducts();
  });
});

// Function to filter products based on category, price, and search input
function filterProducts(category) {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  // Update the H1 element with the selected category
  const categoryHeader = document.getElementById('category-header');
  if (categoryHeader) {
    categoryHeader.textContent = `Selected Category: ${
      category.charAt(0).toUpperCase() + category.slice(1)
    }`; // Capitalize the first letter
  }

  displayProducts(filteredProducts);
}

// Ensure the product list is empty on load
document.addEventListener('DOMContentLoaded', function () {
  const productList = document.getElementById('product-list');
  if (productList) {
    productList.innerHTML = ''; // Clear the product list on load
  }
});

document.querySelectorAll('.category-card a').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const category = this.getAttribute('href').split('=')[1];
    filterProducts(category); // Display products based on the selected category
  });
});
