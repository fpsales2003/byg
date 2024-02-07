// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getCastDetails() {
  const castData = [
    {
      id: "1",
      name: "Jack Goodman",
      slug: "jack",
      nickname: "Kid Icarus",
      origin: "My parents met at a bar in NYC.",
      why: "I love creating content that gets my peers excited. I strive to mix and pair content that evokes a whole new spectrum of emotion from my viewers. I wanna give viewers a piece of my mind. I want to drop your balls. You will explode. Generations of your ancestors will envy your viewing experience.",
      animal: "Monitor Lizard",
      likes: {
        one: "Having fun",
        two: "Bacon egg and cheese",
        three: "Arts n crafts"
      },
      song: {
        title: "Your Latest Trick",
        artist: "Dire Straits"
      },
      boosts: [
        "byg1",
        "byg2",
        "byg3",
        "byg4"
      ]
      
  },
  {
      id: "2",
      name: "Oscar Hechter",
      slug: "oscar",
      nickname: "",
      origin: "Westport, CT",
      why: "I boost to express myself, to bring joy to the world, I boost to be free. I hope that my boost inspires some of the little tikes out there to take up boosting themselves, you're never too young. Give me boost or give me death.",
      animal: "Mantis Shrimp",
      likes: {
        one: "Long-form character dramas",
        two: "Yippie IPA",
        three: "Cholula Lady"
      },
      song: {
        title: "Subdivisions",
        artist: "Rush"
      },
      boosts: [
        "byg1",
        "byg2",
        "byg3",
        "byg4"
      ]
  },
  {
      id: "3",
      name: "David Corro",
      slug: "david",
      nickname: "",
      origin: "The Depths",
      why: "I boost for the people. When I boost, I am the people and the people are me. I want to accomplish…everything. ",
      animal: "Mongoose",
      likes: {
        one: "Sinister Schemes",
        two: "dastardly Deeds",
        three: "Educational Exploits"
      },
      song: {
        title: "Brazil",
        artist: "Afroto"
      },
      boosts: [
        "byg1",
        "byg2",
        "byg3",
        "byg4"
      ]
  },
  {
      id: "4",
      name: "Francis Sales",
      slug: "francis",
      nickname: "",
      origin: "Wherever the heart is",
      why: "I want to inspire. I want to get people involved. But not too involved. This isn't about you. It's about me.",
      animal: "Red Panda",
      likes: {
        one: "Sharing Laughs",
        two: "Laughing at others",
        three: "Beverage"
      },
      song: {
        title: "Material Girl",
        artist: "Madonna"
      },
      boosts: [
        "byg2",
        "byg3",
        "byg4"
      ]
  },
  {
      id: "5",
      name: "Henry Schwabe",
      slug: "henry",
      nickname: "The Sandwich",
      origin: "Oragon",
      why: "For myself mostly, but also for the fame and recognition",
      animal: "Goldfish",
      likes: {
        one: "Charity work",
        two: "Volunteering",
        three: "Helping others"
      },
      song: {
        title: "Pledge of Allegiance",
        artist: "Francis Bellamy"
      },
      boosts: [
        "byg2",
        "byg3",
        "byg4"
      ]
  },
  {
      id: "6",
      name: "Jacob Waldman",
      slug: "jacob",
      nickname: "",
      origin: "Westport, CT",
      why: "An intense spiritual journey that leaves you questioning your life",
      animal: "Penguin",
      likes: {
        one: "Cars",
        two: "Sushi",
        three: "Texas"
      },
      song: {
        title: "American Pie",
        artist: "Don McLean"
      },
      boosts: [
        "byg2",
        "byg3",
      ]
  },
  {
      id: "7",
      name: "Eli Wasserman",
      slug: "wassy",
      nickname: "Wassy",
      origin: "Sharon, MA",
      why: "I boost because thats my only option. I boost to live. I want my video to boost those who cannot boost themselves.",
      animal: "River Otter",
      likes: {
        one: "Museums",
        two: "Soup",
        three: "Dumb looking dogs"
      },
      song: {
        title: "I Cry, Bai Bai",
        artist: "Bogdan Raczynski"
      },
      boosts: [
        "byg2",
        "byg3",
        "byg4"
      ]
  },
  {
      id: "8",
      name: "Eli Kerness",
      slug: "eli",
      nickname: "",
      origin: "Patomac, MD",
      why: "My video will accomplish a new level of boost enlightenment",
      animal: "Grizzly Bear",
      likes: {
        one: "VFX",
        two: "Chipotle",
        three: "Jack Goodman"
      },
      song: {
        title: "Baba O'Reilly",
        artist: "The Who"
      },
      boosts: [
        "byg3",
        "byg4"
      ]
  },
  {
      id: "9",
      name: "William",
      slug: "will",
      nickname: "",
      origin: "44.159276, -85.968269",
      why: "Over the years I've amassed a playlist on YouTube with hundreds of gems I've found while traversing the internet. This playlist has always held a lot of sentimental value, yet I've never stumbled across a medium to properly share my collection. I boost in an effort to share these treasures with my peers and the world as a whole. Also it's fun.",
      animal: "Dachschund",
      likes: {
        one: "Morality",
        two: "Consciousness",
        three: "Cream Cheese"
      },
      song: {
        title: "School Violins",
        artist: "Danny P"
      },
      boosts: [
        "byg4"
      ]
  },
  {
      id: "10",
      name: "Tobias Gray",
      slug: "tobias",
      nickname: "",
      origin: "Tallahassee",
      why: "I want my video to invigorate all walks of life",
      animal: "bird",
      likes: {
        one: "Tshirts",
        two: "loved ones",
        three: "and"
      },
      song: {
        title: "You're The Top",
        artist: "Jerry Southern"
      },
      boosts: [
        "byg4"
      ]
  },
  {
      id: "11",
      name: "Dylan Welch",
      slug: "dylan",
      nickname: "",
      origin: "Oklahoma City",
      why: "Fortnite",
      animal: "Parrot",
      likes: {
        one: "Peanut",
        two: "Butter",
        three: "Crackers"
      },
      song: {
        title: "Meow Meow",
        artist: "The Cat Boys"
      },
      boosts: [
        "byg4"
      ]
  },
  {
      id: "12",
      name: "Sam Levy",
      slug: "sam",
      nickname: "",
      origin: "North Caroline",
      why: "I boost for truth… and power?",
      animal: "Small Rat",
      likes: {
        one: "Pizza",
        two: "Ice Cream",
        three: "Cookies"
      },
      song: {
        title: "Cheerleader",
        artist: "Felix Jaehn Remix"
      },
      boosts: [
        "byg4"
      ]
  },
  {
      id: "13",
      name: "Ben Price",
      slug: "ben",
      nickname: "Tyrannasaurus Jeff",
      origin: "Born from the ashes of a war-torn suburban Richmond, Ben Price is the author of multiple New York Times bestselling novels, including his biggest hit: “The Cum Trilogy”. After his parents were tragically consumed by a giant sentient stick of butter, Ben set out on his own, finding a new life within the confides of the pack of wolves that have adopted him as one of their own. Now, Ben wanders from realm to realm, searching for the best possible discounts he can find on Uber Eats.",
      why: "I boost for truth, justice, and the American dream.",
      animal: "Cyclops",
      likes: {
        one: "Quarter pounder with cheese",
        two: "slug",
        three: "Ganondorf"
      },
      song: {
        title: "Foreign",
        artist: "Playboi Carti"
      },
      boosts: [
        "byg4"
      ]
  },
  {
      id: "14",
      name: "Andrew Buzby",
      slug: "buzby",
      nickname: "Buzby",
      origin: "Earth",
      why: "My video is gonna look cool and very cool and also hmmmm yes cool",
      animal: "Squid",
      likes: {
        one: "Nutella toast",
        two: "An Athletic IPA in my hand",
        three: "Shrek two"
      },
      song: {
        title: "Nangs",
        artist: "Tame Impala"
      },
      boosts: [
        "byg4"
      ]
  },
  {
      id: "15",
      name: "Wil Applebaum",
      slug: "will",
      nickname: "",
      origin: "Summoners Rift",
      why: "It should become an experience that transcends media and has a life of its own",
      animal: "Ancestor Spirit ",
      likes: {
        one: "Dungeons",
        two: "Dragons",
        three: "mystical loot"
      },
      song: {
        title: "One Beer",
        artist: "MF Doom"
      },
      boosts: [
        "byg4"
      ]
  },
  {
      id: "16",
      name: "Jarrett Markman",
      slug: "jarrett",
      nickname: "",
      origin: "Dawg",
      why: "Funny Times",
      animal: "Lion",
      likes: {
        one: "Girls",
        two: "Good food",
        three: "sports"
      },
      song: {
        title: "Destroyer Of Worlds",
        artist: "Ludwig Goransson"
      },
      boosts: [
        "byg4"
      ]
  },
  {
      id: "17",
      name: "Justin Kumiega",
      slug: "justin",
      nickname: "Kumi",
      origin: "Syracuse, NY",
      why: "Boost your guys! Why else?",
      animal: "Toad",
      likes: {
        one: "Fried Chicken",
        two: "The Louisiana Purchase",
        three: "My good friend Adam"
      },
      song: {
        title: "Harness Your Hopes",
        artist: "Pavement"
      },
      boosts: [
        "byg4"
      ]
  },
/*  {
      id: "18",
      name: "Macy Aiken",
      slug: "macy",
      nickname: "",
      origin: "Chicahoe",
      why: "I want to make something positive with my friends that tickles our dopamine receptors just right. I want to bring people together and give them something to watch together.",
      animal: "Domesticated: dog. Non-Domesticated: monkey",
      likes: {
        one: "Candy",
        two: "Kind People",
        three: "Matrices"
      },
      song: {
        title: "Going up the Country",
        artist: "Canned Heat"
      },
      boosts: {
        one: "no",
        two: "no",
        three: "no",
        four: "yes"
      }
  },
*/
  {
      id: "19",
      name: "Noah Weinberg",
      slug: "noah",
      nickname: "",
      origin: "Stamford, CT!!!!!",
      why: "I boost for vibes, and I boost for highs, but most importantly... I boost my guys. Idk, I want my video to be a nice lil trip into my lil psyche. ",
      animal: "French Bulldog",
      likes: {
        one: "Crushed ice",
        two: "High ponytais",
        three: "a desire to make the world a better place"
      },
      song: {
        title: "I'll Never Forgive You",
        artist: "Angela Mota"
      },
      boosts: [
        "byg4"
      ]
  },
  {
      id: "20",
      name: "Lily Brooks",
      slug: "lily",
      nickname: "",
      origin: "Yonder",
      why: "I like silly little things and boosting vibes",
      animal: "Stitch",
      likes: {
        one: "Thunder",
        two: "Lucid dreams",
        three: "Honey Nut Cheerios"
      },
      song: {
        title: "RYDEEN",
        artist: "Yellow Magic Orchestra"
      },
      boosts: [
        "byg4"
      ]
  },
  {
      id: "21",
      name: "Jesse Anderson",
      slug: "jesse",
      nickname: "",
      origin: "Perthshire, Scotland",
      why: "my Greatest Dream and Wish is for my boost to bring people together. my boost will paint you with the brush of love, joy, fear, and exploration. my boosh will divide and conquer, but also multiply and liberate, and i think that's really something to celebrate. ",
      animal: "Goose",
      likes: {
        one: "Putting your towel on the radiator before you get into the shower so it's warm when you get out",
        two: "When books have notes on the title page",
        three: "mess"
      },
      song: {
        title: "Quit Your Job, Runaway",
        artist: "Junior Mesa"
      },
      boosts: [
        "byg4"
      ]
  },
  {
      id: "22",
      name: "Patrick Malone",
      slug: "patrick",
      nickname: "The Acorn",
      origin: "Pittsburgh",
      why: "Why does Texas play Rice?  I want my video to accompany a high stakes poker game in the Dominican Republic ",
      animal: "Kangaroo",
      likes: {
        one: "Peanut butter and jelly",
        two: "Pittburgh Steelers",
        three: "Matt McCusker"
      },
      song: {
        title: "Surf",
        artist: "Mac Miller"
      },
      boosts: [
        "byg4"
      ]
  },
  {
      id: "23",
      name: "Theo Solomon",
      slug: "theo",
      nickname: "",
      origin: "Boostistan",
      why: "",
      animal: "",
      likes: {
        one: "pint with the lads",
        two: "loadin up a plate at tobeys",
        three: "a dirty bird"
      },
      song: {
        title: "The London",
        artist: "Young Thug"
      },
      boosts: [
        "byg2",
        "byg3"
      ]
  },
  {
      id: "24",
      name: "Jessie Aguirre",
      slug: "yeshie",
      nickname: "Yeshie",
      origin: "Ogden, Utah",
      why: "I boost to help boost those who are in need of boosting. Boosting fills my heart with boost and I want to spread the lovely boost to all of the boost.",
      animal: "Llamas",
      likes: {
        one: "Breakfast bagels",
        two: "Squash the sport",
        three: "Thai food"
      },
      song: {
        title: "My Favorite Things",
        artist: "The Sound of Music"
      },
      boosts: [
        "byg3",
        "byg4"
      ]
  },
  {
      id: "25",
      name: "Gerard Allen",
      slug: "gerard",
      nickname: "",
      origin: "The Elven Forests of CT",
      why: "I boost in order to carry the torch of what is righteous and true. I can offer naught in my quest but some sick ass visuals.",
      animal: "Sperm Whale",
      likes: {
        one: "Irony",
        two: "Classical Literature",
        three: "Three 6 Mafia"
      },
      song: {
        title: "Devil in a Sleepin Bag",
        artist: "Willie Nelson"
      },
      boosts: [
        "byg1",
        "byg2"
      ]
  },
  {
      id: "26",
      name: "Keaton Prechtel",
      slug: "slyme",
      nickname: "Slyme",
      origin: "Jasper, Indiana",
      why: "I'm gonna get deep with this one- with around half a layer of irony over it. I boost because I want to make you feel. I want to curate something that pierces the veil of bro-ism and gets you acting like a Greek philosopher who just discovered the true nature of the universe after watching a National Geographic documentary. And then I wanna throw a silly meme in at the end.",
      animal: "The Humble African Bullfrog",
      likes: {
        one: "Grilled Cheese",
        two: "D&D",
        three: "Dancing around the kitchen weirldy"
      },
      song: {
        title: "From Eden",
        artist: "Hozier"
      },
      boosts: [
        "byg4"
      ]
  },
/*  {
      id: "27",
      name: "Ryan Zimmerman",
      slug: "ryan",
      nickname: "",
      origin: "Jewish (USA)",
      why: "I may boost. I may not boost. If I do boost, it will be because Jack Goodman has inspired me.",
      animal: "Francis during Halloweekend",
      likes: {
        one: "closing tabs",
        two: "bagels",
        three: "making delicious meals"
      },
      song: {
        title: "Strawberry Swing",
        artist: "Coldplay"
      },
      boosts: {
        one: "no",
        two: "no",
        three: "no",
        four: "yes"
      }
  }
*/
  ]
  return castData;
}

export async function getSagaDetails() {
    const boostData = [
        {
            id: "1",
            num: "I",
            name: "BOOST YOUR GUYS 1",
            slug: "bygone",
            shorthand: "byg 1",
            link: "https://youtu.be/KNe1BbpABnE?si=UadGsP50_C-auGVC",
            embed: "https://www.youtube.com/embed/KNe1BbpABnE?si=U4KCiA68CrLZiWNW",
            desc: "Boost Your Guys 1, the first installment in the Boost Your Guys franchise, is a very tasteful avant-garde film consisting of four parts created by Oscar, David, Gerard, and Jack. BYG 1 balances addressing themes of cycles, home, and feeling while laying the groundwork for the essence of Boost Your Guys. BYG1 premiered on July 3rd and was released to the public on October 19th, 2022.",
            spotify: "https://open.spotify.com/embed/playlist/6lZfK2ukC9oPJTeK5dgxHz?utm_source=generator",
            members: [
              "jack",
              "oscar",
              "david",
              "gerard"
            ],
            promo: [
              "promo1",
            ]
        },
        {
            id: "2",
            num: "II",
            name: "BOOST YOUR GUYS 2",
            slug: "bygtwo",
            shorthand: "byg 2",
            link: "https://youtu.be/Gtx-j2wEI0k?si=In7xiGefQe01-RHk",
            embed: "https://www.youtube.com/embed/Gtx-j2wEI0k?si=iu0tBQ8GGrfWQUrJ",
            desc: "Boost Your Guys 2, the second installment in the Boost Your Guys franchise, is a video project consisting of parts created by Jack, Francis, Theo, Ben, David, Jacob, Gerard, Henry, Wassy, and Oscar. BYG 2 addresses themes of discovery, perspective, and spectacle buffered by hand-drawn crayon renditions of our artists. BYG2 premiered on December 31st and was released to the public on January 4th, 2023.",
            spotify: "https://open.spotify.com/embed/playlist/3cmoeEsQQ3jmbWCLotpEGj?utm_source=generator",
            members: [
              "jack",
              "francis",
              "theo",
              "ben",
              "david",
              "jacob",
              "gerard",
              "henry",
              "wassy",
              "oscar"
            ],
            promo: [
              "promo1",
              "promo2",
              "promo3",
            ]
        },
        {
            id: "3",
            num: "III",
            name: "BOOST YOUR GUYS 3",
            shorthand: "byg 3",
            slug: "bygthree",
            link: "https://youtu.be/RQt4SRJ42L0?si=j_h0vB7F4YW5Vz43",
            embed: "https://www.youtube.com/embed/RQt4SRJ42L0?si=5Fjs3SKU8N8r0UAg",
            desc: "Boost Your Guys 3, the third installment in the Boost Your Guys franchise is a video project consisting of parts created by Henry, David, Eli, Oscar, Francis, Yeshie, Sarah, Jacob, Theo, Wassy, and Jack. BYG3 addresses themes of connection, longing, and love wrapped in  Y2K-esque frutiger-aero motifs. BYG3 premiered via livestream on August 17th, 2023.",
            spotify: "https://open.spotify.com/embed/playlist/6yFeGTiPFNWPFZYfU5Mhrd?utm_source=generator",
            members: [
              "henry",
              "david",
              "eli",
              "oscar",
              "francis",
              "yeshie",
              "sarah",
              "jacob",
              "theo",
              "wassy",
              "jack"
            ],
            promo: [
              "promo1",
              "promo2",
              "promo3",
              "promo4",
              "promo5",
              "promo6",
              "promo7",
              "promo8",
              "promo9",
              "promo10",
              "promo11",
              "promo12",
              "promo13"
            ],
        },
        {
            id: "4",
            num: "IV",
            name: "BOOST YOUR GUYS 4",
            slug: "bygfour",
            shorthand: "byg 4",
            link: "https://youtu.be/AKRyVzVws50?si=UvgeeC-W_5iSQ7Te",
            embed: "https://www.youtube.com/embed/AKRyVzVws50?si=UvgeeC-W_5iSQ7Te",
            desc: "Boost Your Guys 4, the third installment in the Boost Your Guys franchise, is a video project consisting of parts created by Francis, BP, Lulu, David, Sam, Eli, Keaton, Noah, Tobias, Jack, Oscar, Jesse, Wassy, Henry, Dylan, Kumi, Ben G, Patrick, Lily, Jarrett, Wil, and Will. BYG4 addresses themes of youth, time, and growth behind the guise of an RPG-style fantasy videogame. BYG4 premiered on January 7th, 2024, and was released to the public on January 8th, 2024.",
            spotify: "https://open.spotify.com/embed/playlist/5TLSi4WycdZZilVCFEn0Ih?utm_source=generator",
            members: [
              "Francis",
              "BP",
              "Lulu",
              "David",
              "Sam",
              "Eli",
              "Keaton",
              "Noah",
              "Tobias",
              "Jack",
              "Oscar",
              "Jesse",
              "Wassy",
              "Henry",
              "Dylan",
              "Kumi",
              "Ben G",
              "Patrick",
              "Lily",
              "Jarrett",
              "Wil",
              "Will"
            ],
            promo: [
              "promo1",
              "promo2",
              "promo3",
              "promo4",
              "promo5",
              "promo6",
            ]
        },
    ]
    return boostData;
}

export async function getMusic() {
  const music = [
    {
      "title": "Meditation Sweep",
      "file": "MeditationSweep.m4a"
    },
    {
      "title": "Ascension",
      "file": "Ascension.m4a"
    },
    {
      "title": "WaWaWa",
      "file": "WaWaWa.m4a"
    },
    {
      "title": "Song For Boost",
      "file": "SongForBoost.m4a"
    },
  ]
}