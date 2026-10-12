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
    title: "Sanam Re",
    artist: "Arijit Singh",
  },

  // ---- The Beginning: a chronological timeline ---------------------------
  // Add as many entries as you like. They render in the order you list them.
  timeline: [
    {
      date: "13th October 2022",
      title: "The Beginning",
      description: "The day our story began. I wanted to keep this first little marker here.",
      image: "./MyHeartGallery/BirthdayStory.jpeg",
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
      story: "Our first farewell. I wanted this photo to have a place here.",
      image: "./MyHeartGallery/MyFavPic.jpeg",
    },
    {
      id: "ex-002",
      title: "When She Felt Mine",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/WhenSheFeltMine.jpeg",
    },
    {
      id: "ex-003",
      title: "My First Wallpaper",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/MyFirstWallpaper.jpeg",
    },
    {
      id: "ex-004",
      title: "The Green Flag",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/TheGreenFlag.jpeg",
    },
    {
      id: "ex-005",
      title: "School Picture",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/SchoolPic.jpeg",
    },
    {
      id: "ex-006",
      title: "The Epic",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/TheEPIC.jpeg",
    },
    {
      id: "ex-007",
      title: "Farewell Selfie",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/FarewellSelfie.jpeg",
    },
    {
      id: "ex-008",
      title: "The Forced Love",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/TheForcedLove.jpeg",
    },
    {
      id: "ex-009",
      title: "Goofy Us",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/GoofyUS.jpeg",
    },
    {
      id: "ex-0010",
      title: "The Turning Point",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/TheTurningPoint.jpeg",
    },
    {
      id: "ex-0011",
      title: "Our Shy Start",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/OurShyStart.jpeg",
    },
    {
      id: "ex-0012",
      title: "Gudi Padwa",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/GudiPadwa.jpeg",
    },
    {
      id: "ex-0013",
      title: "Badmashi",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/Badmashi.jpeg",
    },
    {
      id: "ex-0014",
      title: "Us in Soft Love",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/UsInSoftLove.jpeg",
    },
    {
      id: "ex-0015",
      title: "The Wifey",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/TheWifeyyyyy.jpeg",
    },
    {
      id: "ex-0016",
      title: "Orange Love",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/OrangeLove.jpeg",
    },
    {
      id: "ex-0017",
      title: "The Married Couple",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/TheMarriedCouple.jpeg",
    },
    {
      id: "ex-0018",
      title: "Her Smile",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/HerSmile.jpeg",
    },
    {
      id: "ex-0019",
      title: "The Prince and Princess",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/ThePrince&Princess.jpeg",
    },
    {
      id: "ex-0020",
      title: "Hold My Hand",
      story: "A little piece of our story I wanted to keep.",
      video: "./MyHeartGallery/HoldMyHandForeverPlease.mp4",
    },
    {
      id: "ex-0021",
      title: "Navratri Like Never",
      story: "A little piece of our story I wanted to keep.",
      video: "./MyHeartGallery/NavratiLikeNever.mp4",
    },
    {
      id: "ex-0022",
      title: "Felt Like a Dream",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/FeltIWasInADream.jpeg",
    },
    {
      id: "ex-0023",
      title: "The Nonchalant in Love",
      story: "A little piece of our story I wanted to keep.",
      video: "./MyHeartGallery/TheNonChalantInLove.mp4",
    },
    {
      id: "ex-0024",
      title: "The Fit",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/TheFIT.jpeg",
    },
    {
      id: "ex-0025",
      title: "Tied in Love Forever",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/TiedInLoveForever.jpeg",
    },
    {
      id: "ex-0026",
      title: "Ice Cream Brownie",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/TheIceCreamBrownie.jpeg",
    },
    {
      id: "ex-0027",
      title: "Fallen in Love",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/FallenInLove.jpeg",
    },
    {
      id: "ex-0028",
      title: "How Cute Can Someone Be",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/HowCuteCanSomeoneBe.jpeg",
    },
    {
      id: "ex-0029",
      title: "Adorable",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/Adorable.jpeg",
    },
    {
      id: "ex-0030",
      title: "Her Favourite Picture",
      story: "A little piece of our story I wanted to keep.",
      image: "./MyHeartGallery/HerFavPic.jpeg",
    }
  ],

  // ---- Things I probably don't say enough --------------------------------
  // Short, specific, understated. Avoid grand declarations — the plain
  // version usually lands harder than the poetic one.
  unsaidThings: [
    "Babyy, aapke saath normal sa din bhi itna special lagta haiii.",
    "Aapki choti choti cutu harkatein main notice karta hu, even jab bolta nahi huuu.",
    "I'm sooo glad ki hum mile and meri life mein aap aayi, meri cutuuu.",
    "Kuch bhi hota hai na, sabse pehle aapko hi batane ka mann karta hai babyy.",
    "I may not say it har baar, but I love youuu more than you know, meri wifey.",
  ],

  // ---- The letter ---------------------------------------------------------
  letter: {
    heading: "A letter for you.",
    paragraphs: [
      "Meri pyaari babyy, kabhi kabhi sochta hu ki aapko kaise batau how much you mean to me. Aapki smile, aapki cutu harkatein, aur aapka mere saath hona — yeh sab meri life ko itna pyaara bana dete hain. Main har baar perfect words nahi bol pata, but mera pyaar aapke liye hamesha real haiii.",
      "Aapke saath bitaya hua har chota moment mere liye special hai, chahe hum bas baatein kar rahe ho ya ek dusre ko tang kar rahe ho. Aur agar kabhi aapka din heavy ho, please yaad rakhna ki aapko sab kuch akele handle nahi karna hai. Mujhe bata dena, main sununga, samjhunga, aur jitna ho sake aapke saath rahunga.",
      "Thank you meri life mein hone ke liye, meri cutuuu. Aap meri favourite person ho, meri comfort ho, aur main aapko har din thoda aur zyada pyaar karta huuu. Hamesha aapka, aur hamesha aapke saath.",
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
      content: "Babyyy, Cutuu Pie kyu nahi so paa rahe aap? Aankhein band karooo meri sweetuu, slowlyy slowly saans lo aur imagine karo ki main aapko apni arms mein hug kar raha hu and assuring sab theek haiii. Jo bhi thoughts aa rahe hain, unhe abhi solve karna zaroori nahi hai. Aap safe ho, you are loved, aur kal hum milke sab dekh lenge. Ab phone side mein rakho, meri cutuuu, aur thoda sa rest karne ki koshish karo. Goodnight babyy, mwaahhh.",
    },
    {
      title: "Open when you're having a bad day",
      unlockDate: "",
      content: "Awwleee, Merii babyyy ka din bad kyu ja rha haiii, if its smthing chotu ya family ka please send me Voice Message i might listen thoda late but i need it more than you do, if its smthing srs why not just call me already , but know that ki you are my strong babyy and ik that this person/thing/incident is sooo shit legit akkal hi nahi hai unko, and im so pissed off knowing this whole thing happened to youuu, dww merii cutuuu im with youu do what you think is the best and im by your side theek hai dekh lenge dono sathmee isko/unko .",
    },
    {
      title: "Open when you need to laugh",
      unlockDate: "",
      content: "Aww meri cutuuu, ek choti si reminder: aapki goofy si baatein aur woh random faces mujhe hamesha hasa dete hain, chahe mood kitna bhi serious ho. Abhi ek baar apna woh cute sa angry bird face banao aur socho main saamne hota toh kitna hasta 😭 Bas, smile karo thoda sa babyy. Aapki smile meri favourite haiii.",
    },
    {
      title: "Open when you need a hug",
      unlockDate: "",
      content: "Idhar aao meri Sweetsyy, ek biiiggg warm hug aapke liyeee 🫂 Aapko abhi kuch explain karne ki zaroorat nahi, bas thodi der mere paas rest karo. Jo bhi feel ho raha hai, it’s okay; main aapko judge nahi karunga. Aap loved ho, cared ho, aur main yahin hu aapke saath, theek hai meri babyy?",
    },
    {
      title: "Open on your birthday",
      unlockDate: "2026-10-13",
      lockedMessage: "Not Today Cutieee, Birthday ke Din Dekho Okay.",
      content: "Happy Birthdayyy meri Cutie Pieeee! Aaj ka din bilkul aapke jaisa pyaara ho, meri cutuu patootuu. I hope aap bohot saari smiles, hugs, kissies aur apni favourite cheezein enjoy karo. Thank you meri life ko itna special banane ke liye. Main aapko bohot bohot zyada pyaar karta huuu, meri wifey — aaj bhi, kal bhi, hameshaaa. Mwaahhh!",
    },
    {
      title: "Open when we're far apart",
      unlockDate: "",
      content: "Meri babyy, distance thoda annoying hai na, but aap mere dil se kabhi door nahi ho. Jab bhi miss karo, mujhe text ya call kar lena — main shayad thoda late reply karu, but I will always come back to you. Bas yaad rakhna, yeh doori temporary hai aur hum dono ek dusre ke hain. Jaldi hi phir se aapko hug karunga, meri cutuuu. I love youuu moreeee.",
    },
  ],

  // ---- How well do you know us: quiz --------------------------------------
  // "myAnswer" is what you reveal after she answers, with a short reason.
  quiz: [
    {
      question: "Which song is part of our soundtrack?",
      options: ["Zaalima", "Tum Hi Ho", "Kesariya", "Raabta"],
      myAnswer: "Zaalima",
      reason: "You picked it for this collection and said it was one of your schooltime favourites.",
    },
    {
      question: "Which other song can you play in the soundtrack?",
      options: ["Mahi Aaja", "Perfect", "Yellow", "Until I Found You"],
      myAnswer: "Mahi Aaja",
      reason: "It's here because you chose it for this collection.",
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
      cover: "./MyHeartGallery/MyFavPic.jpeg",
      why: "You said this was one of your schooltime favourite songs.",
      src: "./MyHeartGallery/Zaalima.mp3",
      link: "https://open.spotify.com/track/1J9vyEntJ79CppvgUxJs75?si=510edca8198e4d54",
    },
    {
      title: "Mahi Aaja",
      artist: "Manj Musk",
      cover: "./MyHeartGallery/TheGirliFellinLoveWith.jpeg",
      why: "A song you picked for this little collection, with a line that makes you think of us.",
      src: "./MyHeartGallery/Mahi Aaja.mp3",
      link: "https://open.spotify.com/track/67kncjHVEBrYg6iVuqaS5W?si=0d1a41737c1b4c53",
    },
  ],

  // ---- Our Future: Collection of future memories that haven't happened yet ---
  futureIntro: {
    eyebrow: "Our Future",
    heading: "Where should we go first?",
    subheading: "A few ideas for time together, whenever we're ready.",
    coreIdea: "A collection of things we could do together someday.",
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
        label: "Dinner Idea",
        route: "A table for two · Someday",
        status: "A possibility for later",
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
    { title: "Eat somewhere neither of us has tried", status: "not-yet", note: "Someday." },
    { title: "Take ridiculous photobooth photos", status: "not-yet", note: "Someday." },
    { title: "Have a terrible cooking competition", status: "not-yet", note: "Someday." },
    { title: "Spend an entire day doing absolutely nothing", status: "not-yet", note: "Someday." },
    { title: "Make another memory worth putting in here", status: "not-yet", note: "Someday." },
  ],

  destinations: [
    { label: "Somewhere new", note: "A place we can choose together." },
    { label: "A little trip", note: "Whenever it works for us." },
    { label: "Somewhere to eat", note: "Let's pick a place together." },
    { label: "A spontaneous day out", note: "We can decide as we go." },
  ],

  // ---- Surprise Me -----------------------------------------------------------
  surprises: [
    {
      type: "memory",
      title: "When we found our way back",
      content: "Yaad hai jab Delhi ke baad hum itna lad pade the? I’m sorry for how painful that was. Jab wapas aaya, tumhe dekhte hi main doston ko chhodkar tumhare paas baith gaya. Dheere dheere baat hui, and we found our way back to each other. I still remember that moment, babyy.",
    },
    {
      type: "message",
      title: "Tiny reminder",
      content: "Babyy, aap jitna soch rahe ho usse zyada achha kar rahe ho. Thoda sa rest lo, main aapke saath huuu.",
    },
    {
      type: "quote",
      title: "A little reminder",
      content: "Aapki ek smile meri poori duniya ka mood theek kar deti hai, meri babygirll.",
    },
    { type: "joke", title: "Inside joke", content: "Aapka woh cutu angry bird face dekh ke main serious rehne ki acting karta hu… but andar se toh bas aapko hug karne ka mann karta hai 😭" },
    {
      type: "idea",
      title: "A future idea",
      content: "Next time milenge toh ek slow sa walk karenge, kuch tasty khayenge, aur bina jaldi kiye bas ek dusre ke saath time spend karenge. Date fix aap choose karna, babyy 💛",
    },
  ],

  // ---- Final reveal -----------------------------------------------------------
  final: {
    line1: "If you ever wonder how much of you is part of my life...",
    line2: "More than I could fit into one little universe.",
    line3: "Happy birthday, my favourite person.",
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
