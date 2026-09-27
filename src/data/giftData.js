// ============================================================================
// giftData.js
//
// THIS IS THE ONLY FILE YOU SHOULD NEED TO EDIT.
//
// Everything on the site — names, MyHeartGallery, photos, the letter, the quiz,
// songs, the future list, the secret message — lives here. Replace the
// placeholder text and file paths below with your own. You do not need
// to touch anything inside src/components.
//
// Gallery media is stored in: MyHeartGallery/ at the repository root.
// The GitHub Pages workflow copies it into dist/MyHeartGallery/ during deployment.
// Music goes in:      public/music/
// Reference local media with a relative path such as "./MyHeartGallery/your-file.jpg".\n// Media currently lives in the repository-level MyHeartGallery/ folder.
// If a photo or song file doesn't exist yet, the site will not crash — it
// will just show a soft placeholder or hide that control.
// ============================================================================

export const settings = {
  // Turn the music player on/off entirely.
  musicEnabled: true,
  // Show or hide the "Things We Haven't Done Yet" future section.
  showFutureSection: true,
  // If true, "Open When" letters stay locked until their unlockDate.
  // Set to false while you're testing so you can see everything.
  enableDateLocks: true,
  // Turn the small hidden Easter eggs on/off.
  enableEasterEggs: true,
  // If true, background motion (stars, drifting particles) is reduced,
  // regardless of the visitor's device settings. Useful for low-power phones.
  reducedParticles: false,
};

export const giftData = {
  // ---- Names -----------------------------------------------------------
  recipientName: "Aria",
  senderName: "Harshit",

  // ---- Opening screen ----------------------------------------------------
  opening: {
    line1: "I made you a little universe.",
    line2: "Take your time.",
    line3: "There's no rush.",
    starLabel: "You",
    enterLabel: "Enter our universe",
  },

  // ---- Background music ---------------------------------------------------
  music: {
    enabled: true,
    src: "./MyHeartGallery/Sanam Re.mp3",
    title: "Song",
    artist: "US",
  },

  // ---- The Beginning: a chronological timeline ---------------------------
  // Add as many entries as you like. They render in the order you list them.
  timeline: [
    {
      date: "13th October 2022",
      title: "The Beginning",
      description:
        "Write about how you met, or the first time you really noticed each other. Keep it specific — one small detail says more than a paragraph of adjectives.",
      image: "./MyHeartGallery/BirthdayStory.jpeg",
      location: "",
      song: "",
    },
    {
      date: "DATE",
      title: "A DAY THAT MATTERED",
      description:
        "Replace this with something only the two of you would recognize.",
      image: "./MyHeartGallery/CutieInRed.jpeg",
      location: "",
      song: "",
    },
    {
      date: "DATE",
      title: "ANOTHER MOMENT",
      description:
        "Add as many of these as you want, or delete this one entirely.",
      image: "./MyHeartGallery/FarewellSelfie.jpeg",
      location: "",
      song: "",
    },
  ],

  // ---- Memory Museum: exhibits ------------------------------------------
  exhibits: [
    {
      id: "ex-001",
      title: "Our First Farewell",
      date: "12 February 2023",
      story:
        "Write the story here. What happened, what it felt like, why it stuck.",
      image: "./MyHeartGallery/MyFavPic.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-002",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/WhenSheFeltMine.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-003",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/MyFirstWallpaper.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-004",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/TheGreenFlag.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-005",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/SchoolPic.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-006",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/TheEPIC.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-007",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/FarewellSelfie.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-008",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/TheForcedLove.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-009",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/GoofyUS.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0010",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/TheTurningPoint.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0011",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/OurShyStart.jpeg",
      location: "",
      song: "",
      mood: "",
    },
   {
      id: "ex-0012",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/GudiPadwa.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    
    {
      id: "ex-0013",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/Badmashi.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0014",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/UsInSoftLove.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0015",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/TheWifeyyyyy.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0016",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/OrangeLove.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0017",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/TheMarriedCouple.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0018",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/HerSmile.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0019",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/ThePrince&Princess.jpeg",
      location: "",
      song: "",
      mood: "",
    },{
      id: "ex-0020",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/HoldMyHandForeverPlease.mp4",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0021",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      video: "./MyHeartGallery/NavratiLikeNever.mp4",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0022",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/FeltIWasInADream.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0023",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      video:"./MyHeartGallery/TheNonChalantInLove.mp4",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0024",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/TheFIT.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0025",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/TiedInLoveForever.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0026",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/TheIceCreamBrownie.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0027",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/FallenInLove.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0028",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/HowCuteCanSomeoneBe.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0029",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/Adorable.jpeg",
      location: "",
      song: "",
      mood: "",
    },
    {
      id: "ex-0030",
      title: "",
      date: "DATE",
      story: "Another exhibit. Delete or duplicate this block as needed.",
      image: "./MyHeartGallery/HerFavPic.jpeg",
      location: "",
      song: "",
      mood: "",
    },
  ],

  // ---- Things I probably don't say enough --------------------------------
  // Short, specific, understated. Avoid grand declarations — the plain
  // version usually lands harder than the poetic one.
  unsaidThings: [
    "You make ordinary days feel different.",
    "I notice the little things you do, even when I don't say so.",
    "I'm really glad our paths crossed.",
    "You're the first person I want to tell things to.",
    "I don't say this enough, but I mean it every time I think it.",
  ],

  // ---- The letter ---------------------------------------------------------
  letter: {
    heading: "A letter for you.",
    paragraphs: [
      "Start here. Write like you talk, not like a greeting card.",
      "Add a second paragraph about something specific and recent, so it feels current, not generic.",
      "Close with whatever is true right now.",
    ],
    signOff: "With love,",
    sender: "Harshit",
  },

  // ---- Open When... letters ------------------------------------------------
  // unlockDate uses "YYYY-MM-DD". Leave it blank ("") for no lock at all.
  openWhen: [
    {
      title: "Open when you miss me",
      unlockDate: "",
      content: "Awww, My Babyyyy I Miss You moreeee alreadyyyy,Uk U might be missing me rn and im sorry that im just not there kissing or adoring you, but i am actuallyy missing you moreee, i miss your scent , i miss your smile , i miss your cutu harkatein , i miss those cutu angry bird vale face aapke , i miss your hugs , i miss those kissies , i miss those drowning in ur Armsss , i miss and regret each second that i am without youuuu, But Just Let me Know on text that you miss me babyy, ill get back to you asap till then don't forget that i love youu moreeeeeee, mwaahhhh my wifey.",
    },
    {
      title: "Open when you can't sleep",
      unlockDate: "",
      content: "Babyyy, Cutuu Pie Kyu nahi so pa rahe aap, .",
    },
    {
      title: "Open when you're having a bad day",
      unlockDate: "",
      content: "Awwleee, Merii babyyy ka din bad kyu ja rha haiii, if its smthing chotu ya family ka please send me Voice Message i might listen thoda late but i need it more than you do, if its smthing srs why not just call me already , but know that ki you are my strong babyy and ik that this person/thing/incident is sooo shit legit akkal hi nahi hai unko, and im so pissed off knowing this whole thing happened to youuu, dww merii cutuuu im with youu do what you think is the best and im by your side theek hai dekh lenge dono sathmee isko/unko .",
    },
    {
      title: "Open when you need to laugh",
      unlockDate: "",
      content: "Drop in the inside joke that always works.",
    },
    {
      title: "Open when you need a hug",
      unlockDate: "",
      content: "Write something warm here.",
    },
    {
      title: "Open on your birthday",
      unlockDate: "2026-10-13",
      lockedMessage: "Not Today Cutieee, Birthday ke Din Dekho Okay.",
      content: "Happy Birthday My Cutie Pie.",
    },
    {
      title: "Open when we're far apart",
      unlockDate: "",
      content: "Write something for the next time distance gets in the way.",
    },
  ],

  // ---- How well do you know us: quiz --------------------------------------
  // "myAnswer" is what you reveal after she answers, with a short reason.
  quiz: [
    {
      question: "What was one of our funniest moments?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      myAnswer: "Option B",
      reason: "Because of REPLACE_WITH_WHY — you can probably guess.",
    },
    {
      question: "Where did we go on our first real day out together?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      myAnswer: "Option A",
      reason: "REPLACE — add the detail that makes this one land.",
    },
    {
      question: "What do I always say that annoys you (affectionately)?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      myAnswer: "Option C",
      reason: "REPLACE with the real answer.",
    },
    {
      question: "What's my go-to order at our usual place?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      myAnswer: "Option D",
      reason: "REPLACE with the real answer.",
    },
    {
      question: "What song comes on and one of us always reacts?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      myAnswer: "Option A",
      reason: "REPLACE with the real answer.",
    },
  ],
  // Shown at the end of the quiz, regardless of score.
  quizResult: "Apparently you remember us better than I do.",
  // If you'd rather show a real percentage score, set this to true.
  quizShowScore: false,

  // ---- Songs that feel like us ---------------------------------------------
  // "src" is optional — leave blank to just show the card without a player.
  songs: [
    {
      title: "Zaalima",
      artist: "Arijit Singh",
      cover: "./photos/song-01.jpg",
      why: "Wasn't this Your Schooltime Fav Song, and it resembles Us ; ) .",
      src: "./MyHeartGallery/Zaalima.mp3",
      link: "https://open.spotify.com/track/1J9vyEntJ79CppvgUxJs75?si=510edca8198e4d54",
    },
    {
      title: "Mahi Aaja",
      artist: "Manj Musk",
      cover: "./MyHeartGallery/TheGirliFellinLoveWith.jpeg",
      why: "Because it Resembles our Situation , and ofc Aaja Mahi Aake Gale Lag ja Tuuuu.... .",
      src: "./MyHeartGallery/Mahi Aaja.mp3",
      link: "https://open.spotify.com/track/67kncjHVEBrYg6iVuqaS5W?si=0d1a41737c1b4c53",
    },
  ],

  // ---- Our Future: Collection of future memories that haven't happened yet ---
  futureIntro: {
    eyebrow: "Our Future",
    heading: "Where should we go first?",
    subheading: "There are still so many places we haven't been together.",
    coreIdea: "This is not a future-plans section. It is a collection of future memories that haven't happened yet.",
  },

  futureAdventures: [
    {
      id: "japan",
      title: "Japan",
      emblem: "🇯🇵",
      tagline: "The big adventure.",
      visualCaption: "Wandering lantern-lit alleys, taking wrong train exits on purpose, and watching Mount Fuji glow in the morning starlight.",
      story: "Explore, eat, wander, get lost, take too many photos, make memories.",
      x: 20,
      y: 28,
      mx: 26,
      my: 16,
      theme: "japan",
      atmosphere: {
        accent: "#f0a2b0",
        glow: "240, 162, 176",
        tint: "rgba(226, 141, 156, 0.16)",
        watermark: "未来の約束",
        badge: "Tokyo · Kyoto · Someday",
      },
      pacing: "drift",
      moments: [
        { verb: "Explore", note: "Lantern-lit alleys in the evening drizzle, no maps needed" },
        { verb: "Eat", note: "Tiny ramen bars where we point at the menu, grin, and share" },
        { verb: "Wander", note: "Quiet bamboo groves and neon crossings, fingers intertwined" },
        { verb: "Get lost", note: "Taking the wrong station exit and stumbling on something beautiful" },
        { verb: "Take too many photos", note: "Hundreds of candid shots, mostly of your laugh" },
        { verb: "Make memories", note: "The kind that become stories we tell forever" },
      ],
      keepsake: {
        label: "Future Memory Stub",
        route: "Tokyo ⇄ Anywhere with you",
        status: "Awaiting our arrival",
        whisper: "Pack light. We're carrying back a lifetime of memories.",
      },
    },
    {
      id: "photobooth",
      title: "Photobooth Date",
      emblem: "📸",
      tagline: "Proof that we were here.",
      visualCaption: "Tucked inside the curtain, counting down between flashes — four little frames to keep forever in our wallets.",
      story: "Serious photo → cute photo → stupid photo → favourite photo.",
      x: 48,
      y: 18,
      mx: 74,
      my: 24,
      theme: "photobooth",
      atmosphere: {
        accent: "#e8c8f5",
        glow: "232, 200, 245",
        tint: "rgba(230, 200, 240, 0.16)",
        badge: "Curtain Closed · 4 Countdowns",
      },
      pacing: "snappy",
      moments: [
        { verb: "Serious photo", note: "Trying to look poised... 3, 2, 1" },
        { verb: "Cute photo", note: "Cheek against cheek, warmest smiles" },
        { verb: "Stupid photo", note: "Total chaos face, zero regrets" },
        { verb: "Favourite photo", note: "Looking right at each other, caught laughing" },
      ],
      frames: [
        { num: "01", title: "Serious photo", subtitle: "Trying not to smile yet" },
        { num: "02", title: "Cute photo", subtitle: "Cheek to cheek, real smiles" },
        { num: "03", title: "Stupid photo", subtitle: "Unapologetic goofy face" },
        { num: "04", title: "Favourite photo", subtitle: "Looking at each other instead of the lens" },
      ],
      keepsake: {
        label: "4-Shot Photostrip",
        route: "Booth #01 · Curtain drawn tight",
        status: "Unprinted future memory",
        whisper: "Proof that we were here, and proof of how happy you make me.",
      },
    },
    {
      id: "shopping",
      title: "Date + Shopping",
      emblem: "🛍️",
      tagline: "Just a day that's ours.",
      visualCaption: "Walking for hours without checking the clock, shopping for each other, and laughing at outfits we'd never wear.",
      story: "Walk, shop for each other, eat somewhere random, take our time.",
      x: 80,
      y: 26,
      mx: 28,
      my: 40,
      theme: "shopping",
      atmosphere: {
        accent: "#f5cca0",
        glow: "245, 204, 160",
        tint: "rgba(242, 200, 131, 0.15)",
        badge: "Sunny Afternoon · No Schedule",
      },
      pacing: "leisurely",
      moments: [
        { verb: "Walk", note: "Hand in hand, no clock to beat, nowhere we have to rush to" },
        { verb: "Shop for each other", note: "Picking out silly outfits just to giggle in the mirror" },
        { verb: "Eat somewhere random", note: "A café that smelled too sweet to walk past" },
        { verb: "Take our time", note: "Bags in one hand, yours in the other, sun slowly setting" },
      ],
      keepsake: {
        label: "Unscheduled Itinerary",
        route: "City Streets · Hand in hand",
        status: "Open-ended afternoon",
        whisper: "Not shopping for things. Just spending hours together.",
      },
    },
    {
      id: "dinner",
      title: "Expensive Dinner",
      emblem: "🍽️",
      tagline: "Table for two.",
      visualCaption: "Dressing up just for each other, lingering across candlelight, and talking long after the restaurant closes.",
      story: "Dress up, try something special, stay too long, enjoy the night.",
      x: 82,
      y: 64,
      mx: 72,
      my: 56,
      theme: "dinner",
      atmosphere: {
        accent: "#ffd782",
        glow: "255, 215, 130",
        tint: "rgba(255, 215, 130, 0.18)",
        badge: "Midnight Noir · Candlelight",
      },
      pacing: "intimate",
      moments: [
        { verb: "Dress up", note: "You in that outfit that leaves me completely speechless" },
        { verb: "Try something special", note: "Delicate courses we whisper about across the table" },
        { verb: "Stay too long", note: "Talking softly until the candles flicker down low" },
        { verb: "Enjoy the night", note: "Stepping outside into the quiet midnight air together" },
      ],
      keepsake: {
        label: "Table Reservation",
        route: "Corner Table · Party of Two",
        status: "Reserved indefinitely",
        whisper: "Good food, gentle candlelight, and my favourite view across the table.",
      },
    },
    {
      id: "airbnb",
      title: "Airbnb Escape",
      emblem: "🏡",
      tagline: "Disappear for a while.",
      visualCaption: "A quiet cabin in the hills, rain tapping against the window, warm mugs, oversized hoodies, and the world locked outside.",
      story: "Book a cute place, order food, watch movies, cook, sleep in, nowhere else to be.",
      x: 50,
      y: 78,
      mx: 26,
      my: 72,
      theme: "airbnb",
      atmosphere: {
        accent: "#b2c2f0",
        glow: "178, 194, 240",
        tint: "rgba(169, 184, 232, 0.16)",
        badge: "Cozy Cabin · Rainy Twilight",
      },
      pacing: "breathing",
      moments: [
        { verb: "Book a cute place", note: "Glass windows overlooking green hills or misty rain" },
        { verb: "Order food", note: "Warm comfort takeout eaten sitting cross-legged on the floor" },
        { verb: "Watch movies", note: "Blankets piled high, talking through half the plot" },
        { verb: "Cook & sleep in", note: "Morning coffee in oversized sweaters with no alarms" },
        { verb: "Nowhere else to be", note: "Just the two of us, disconnected from the rest of the world" },
      ],
      keepsake: {
        label: "Hideout Keycard",
        route: "Our Quiet Haven · World on pause",
        status: "Do Not Disturb",
        whisper: "The whole world outside, completely forgotten.",
      },
    },
    {
      id: "cook",
      title: "Cook Together",
      emblem: "🍳",
      tagline: "How hard can it be?",
      visualCaption: "Flour on your nose, sauce bubbling in the skillet, a passionate debate about the recipe, and eating it proud because we made it.",
      story: "Choose a recipe, make a mess, laugh, argue about who did it wrong, eat it anyway.",
      x: 18,
      y: 64,
      mx: 74,
      my: 86,
      theme: "cook",
      atmosphere: {
        accent: "#f6b490",
        glow: "246, 180, 144",
        tint: "rgba(242, 166, 121, 0.16)",
        badge: "Our Kitchen · Aprons & Laughter",
      },
      pacing: "playful",
      moments: [
        { verb: "Choose a recipe", note: "Something ambitious that neither of us knows how to make" },
        { verb: "Make a mess", note: "Flour on your nose, pans sizzling, chaotic joy" },
        { verb: "Laugh", note: "At how completely different it looks compared to the video" },
        { verb: "Argue who did it wrong", note: "A very serious debate about the seasonings, settled by a kiss" },
        { verb: "Eat it anyway", note: "Tastes amazing — because we made it together" },
      ],
      keepsake: {
        label: "Recipe Card #01",
        route: "Home Kitchen · 2 Aprons",
        status: "Masterpiece in progress",
        whisper: "Ingredients: 2 amateur chefs, lots of teasing, zero regrets.",
      },
    },
  ],

  // Backwards compatibility for existing references
  future: [
    { title: "Watch a sunrise together", status: "not-yet", note: "Someday." },
    { title: "Take a completely random trip", status: "not-yet", note: "Someday." },
    { title: "Eat somewhere neither of us has tried", status: "planned", note: "Someday." },
    { title: "Take ridiculous photobooth photos", status: "not-yet", note: "Someday." },
    { title: "Have a terrible cooking competition", status: "not-yet", note: "Someday." },
    { title: "Spend an entire day doing absolutely nothing", status: "not-yet", note: "Someday." },
    { title: "Make another memory worth putting in here", status: "not-yet", note: "Someday." },
  ],

  destinations: [
    { label: "Somewhere we've never been", note: "A note about it." },
    { label: "First trip", note: "A note about it." },
    { label: "That restaurant we keep talking about", note: "A note about it." },
    { label: "Somewhere completely random", note: "A note about it." },
  ],

  // ---- Surprise Me -----------------------------------------------------------
  surprises: [
    {
      type: "memory",
      title: "Do you remember the time when we almost broke up while i was in delhi and we fought so much like sooo soo much , im so sorrryy babyy for that but uske just bad when i came back and the first day i saw you i left all my friends and came and sat by you and then we slowly normally talked and then uske kuch din baad we were back to normal but i genuinely felt like my life was on line when i fought with you there were so many people taking you away from me and taking me away from you but we somehow stayed together and now no one can do tha touchwood Umwah",
      content: "Drop in a quick memory.",
    },
    {
      type: "message",
      title: "Tiny reminder",
      content: "You're doing better than you think.",
    },
    {
      type: "quote",
      title: "Something you said once",
      content: "REPLACE with the quote.",
    },
    { type: "joke", title: "Inside joke", content: "REPLACE with the joke." },
    {
      type: "idea",
      title: "A future idea",
      content: "REPLACE with a small idea.",
    },
  ],

  // ---- Final reveal -----------------------------------------------------------
  final: {
    line1: "If you ever wonder how much of you exists in my life...",
    line2: "...the answer is in this big world , Anything or Anyone Else than you doesn't exist For me.",
    line3: "You are my favourite part of it.",
    image: "MyHeartGallery/Adorable.jpeg",
  },

  // ---- Secret Easter egg (click the small star 5 times) -----------------------
  secret: {
    line1: "Okay, you found the secret.",
    line2: `I don't know if it is truly a secret or not, but I had to say this to you, my love.
    But You Are , Were and Will be 
    My ONLY CRUSH`,
  },
};
