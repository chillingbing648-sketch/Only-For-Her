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
    src: "./music/our-song.mp3",
    title: "Our Song",
    artist: "REPLACE_ARTIST",
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
      content: "Write what you'd want her to read in this moment.",
    },
    {
      title: "Open when you can't sleep",
      unlockDate: "",
      content: "Write something calm here.",
    },
    {
      title: "Open when you're having a bad day",
      unlockDate: "",
      content: "Write something steady and reassuring here.",
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
      lockedMessage: "This one is waiting for the right day.",
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
      title: "SONG TITLE",
      artist: "ARTIST",
      cover: "./photos/song-01.jpg",
      why: "Why this one reminds you of her.",
      src: "",
      link: "",
    },
    {
      title: "SONG TITLE",
      artist: "ARTIST",
      cover: "./photos/song-02.jpg",
      why: "Why this one reminds you of her.",
      src: "",
      link: "",
    },
  ],

  // ---- Things we haven't done yet -------------------------------------------
  // status: 'not-yet' | 'planned' | 'done'
  future: [
    { title: "Watch a sunrise together", status: "not-yet", note: "Someday." },
    {
      title: "Take a completely random trip",
      status: "not-yet",
      note: "Someday.",
    },
    {
      title: "Eat somewhere neither of us has tried",
      status: "planned",
      note: "Someday.",
    },
    {
      title: "Take ridiculous photobooth photos",
      status: "not-yet",
      note: "Someday.",
    },
    {
      title: "Have a terrible cooking competition",
      status: "not-yet",
      note: "Someday.",
    },
    {
      title: "Spend an entire day doing absolutely nothing",
      status: "not-yet",
      note: "Someday.",
    },
    {
      title: "Make another memory worth putting in here",
      status: "not-yet",
      note: "Someday.",
    },
  ],

  // Abstract destination points for the Future section's map.
  destinations: [
    { label: "Somewhere we've never been", note: "A note about it." },
    { label: "First trip", note: "A note about it." },
    {
      label: "That restaurant we keep talking about",
      note: "A note about it.",
    },
    { label: "Somewhere completely random", note: "A note about it." },
  ],

  // ---- Surprise Me -----------------------------------------------------------
  surprises: [
    {
      type: "memory",
      title: "Remember this?",
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
    line2: "...the answer is probably somewhere in this little universe.",
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
