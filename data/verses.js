/**
 * verses.js
 * ─────────────────────────────────────────────────────────────
 * All 50 Bible verses for the Global Youth Day Service app,
 * organised into the 9 category groups shown in the document.
 *
 * Each category object has:
 *   id        – URL-safe slug used to link index → page
 *   title     – Display title (may contain HTML &amp; for &)
 *   icon      – Emoji used in the card and page header
 *   color     – Accent color for the card bottom bar
 *   fullWidth – (optional) stretch card across both grid columns
 *   verses[]  – Array of { num, ref, text }
 * ─────────────────────────────────────────────────────────────
 */

const CATEGORIES = [
  {
    id: "strength",
    title: "Strength &amp; Courage",
    icon: "⚔️",
    color: "#F59E0B",
    verses: [
      {
        num: 1,
        ref: "Joshua 1:9",
        text: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go."
      },
      {
        num: 2,
        ref: "Deuteronomy 31:6",
        text: "Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you."
      },
      {
        num: 3,
        ref: "Isaiah 40:31",
        text: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint."
      },
      {
        num: 4,
        ref: "2 Timothy 1:7",
        text: "For God gave us a spirit not of fear but of power and love and self-control."
      },
      {
        num: 5,
        ref: "Philippians 4:13",
        text: "I can do all things through him who strengthens me."
      }
    ]
  },

  {
    id: "identity",
    title: "Identity &amp; Purpose",
    icon: "🌟",
    color: "#8B5CF6",
    verses: [
      {
        num: 6,
        ref: "Psalm 139:14",
        text: "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well."
      },
      {
        num: 7,
        ref: "Jeremiah 29:11",
        text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future."
      },
      {
        num: 8,
        ref: "Ephesians 2:10",
        text: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do."
      },
      {
        num: 9,
        ref: "Romans 12:6–8",
        text: "Having gifts that differ according to the grace given to us, let us use them: if prophecy, in proportion to our faith; if service, in our serving; the one who teaches, in his teaching; the one who exhorts, in his exhortation; the one who contributes, in his generosity; the one who leads, with zeal; the one who shows mercy, with cheerfulness."
      },
      {
        num: 10,
        ref: "Proverbs 18:15",
        text: "The heart of the discerning acquires knowledge, and the ear of the wise seeks knowledge."
      }
    ]
  },

  {
    id: "guidance",
    title: "Guidance &amp; Wisdom",
    icon: "🧭",
    color: "#10B981",
    verses: [
      {
        num: 11,
        ref: "Proverbs 3:5–6",
        text: "Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways submit to him, and he will make your paths straight."
      },
      {
        num: 12,
        ref: "James 1:5",
        text: "If any of you lacks wisdom, you should ask God, who gives generously to all without reservation and without reproach."
      },
      {
        num: 13,
        ref: "Proverbs 4:10–13",
        text: "Hear, my son, and accept my words, and the years of your life will be many. I have taught you the way of wisdom; I have led you in straight paths. Enter them, do not turn aside. Keep hold of instruction, do not let go; guard it, for it is your life."
      },
      {
        num: 14,
        ref: "Proverbs 16:3",
        text: "Commit your work to the Lord, and your plans will be established."
      },
      {
        num: 15,
        ref: "Psalm 119:105",
        text: "Your word is a lamp to my feet and a light to my path."
      }
    ]
  },

  {
    id: "hope",
    title: "Hope &amp; Faith",
    icon: "🕊️",
    color: "#3B82F6",
    verses: [
      {
        num: 16,
        ref: "Romans 8:28",
        text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose."
      },
      {
        num: 17,
        ref: "Hebrews 11:1",
        text: "Now faith is the assurance of things hoped for, the conviction of things not seen."
      },
      {
        num: 18,
        ref: "Psalm 37:4",
        text: "Delight yourself in the Lord, and he will give you the desires of your heart."
      },
      {
        num: 19,
        ref: "Jeremiah 29:12",
        text: "Then you will call upon me and come and pray to me, and I will listen to you."
      },
      {
        num: 20,
        ref: "Philippians 4:6–7",
        text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus."
      }
    ]
  },

  {
    id: "friendship",
    title: "Friendship &amp; Relationships",
    icon: "🤝",
    color: "#EC4899",
    verses: [
      {
        num: 21,
        ref: "Proverbs 17:17",
        text: "A friend loves at all times, and a brother is born for adversity."
      },
      {
        num: 22,
        ref: "Proverbs 12:26",
        text: "A righteous person is a guide to his neighbor, but the way of the wicked leads astray."
      },
      {
        num: 23,
        ref: "Ecclesiastes 4:9–10",
        text: "Two are better than one, because they have a good reward for their toil. For if they fall, one will lift up his fellow. But woe to him who is alone when he falls and has no one to lift him up."
      },
      {
        num: 24,
        ref: "1 Corinthians 13:4–7",
        text: "Love is patient and kind; love does not envy or boast; it is not proud. It does not dishonor others; it is not self-seeking; it is not easily angered; it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres."
      },
      {
        num: 25,
        ref: "Galatians 6:2",
        text: "Bear one another's burdens, and so fulfill the law of Christ."
      }
    ]
  },

  {
    id: "challenges",
    title: "Overcoming Challenges",
    icon: "🛡️",
    color: "#EF4444",
    verses: [
      {
        num: 26,
        ref: "1 Corinthians 10:13",
        text: "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it."
      },
      {
        num: 27,
        ref: "Romans 8:1",
        text: "There is therefore now no condemnation for those who are in Christ Jesus."
      },
      {
        num: 28,
        ref: "2 Corinthians 12:9",
        text: "But he said to me, \"My grace is sufficient for you, for my power is made perfect in weakness.\" Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me."
      },
      {
        num: 29,
        ref: "Psalm 34:18",
        text: "The Lord is near to the brokenhearted and saves the crushed in spirit."
      },
      {
        num: 30,
        ref: "Isaiah 43:2",
        text: "When you pass through the waters, I will be with you; and through the rivers, they shall not overwhelm you. When you walk through fire you shall not be burned, and the flame shall not consume you."
      }
    ]
  },

  {
    id: "positive",
    title: "Staying Positive",
    icon: "☀️",
    color: "#FBBF24",
    verses: [
      {
        num: 31,
        ref: "Proverbs 15:15",
        text: "All the days of the oppressed are wretched, but the cheerful heart has a continual feast."
      },
      {
        num: 32,
        ref: "Philippians 4:8",
        text: "Finally, brothers, whatever is true, whatever is honorable, whatever is just, whatever is pure, whatever is lovely, whatever is commendable, if there is any excellence, if there is anything worthy of praise, think about these things."
      },
      {
        num: 33,
        ref: "Psalm 118:24",
        text: "This is the day that the Lord has made; let us rejoice and be glad in it."
      },
      {
        num: 34,
        ref: "Proverbs 17:22",
        text: "A joyful heart is good medicine, but a crushed spirit dries up the bones."
      },
      {
        num: 35,
        ref: "James 1:2–4",
        text: "Consider it all joy, my brethren, when you encounter various trials, knowing that the testing of your faith produces endurance. And let endurance have its perfect result, so that you may be perfect and complete, lacking in nothing."
      }
    ]
  },

  {
    id: "love",
    title: "Love &amp; Forgiveness",
    icon: "❤️",
    color: "#F472B6",
    verses: [
      {
        num: 36,
        ref: "1 John 4:8",
        text: "Whoever does not love does not know God, because God is love."
      },
      {
        num: 37,
        ref: "Colossians 3:14",
        text: "And above all these put on love, which binds everything together in perfect peace."
      },
      {
        num: 38,
        ref: "Matthew 6:14–15",
        text: "For if you forgive others their trespasses, your heavenly Father will also forgive you yours. But if you forgive not others, neither will your Father forgive your trespasses."
      },
      {
        num: 39,
        ref: "Proverbs 10:12",
        text: "Hatred stirs up strife, but love covers all sins."
      },
      {
        num: 40,
        ref: "1 Corinthians 13:1–3",
        text: "If I speak in the tongues of men and of angels, but have not love, I am a noisy gong or a clanging cymbal. And if I have prophetic powers, and understand all mysteries and all knowledge, and if I have all faith, so as to remove mountains, but have not love, I am nothing. If I give away all my possessions to feed the poor, and if I surrender my body to be burned, but have not love, it profits me nothing."
      }
    ]
  },

  {
    id: "following",
    title: "Following God's Will",
    icon: "🙏",
    color: "#A78BFA",
    fullWidth: true,
    verses: [
      {
        num: 46,
        ref: "Proverbs 16:9",
        text: "The heart of man plans his way, but the Lord establishes his steps."
      },
      {
        num: 47,
        ref: "Romans 12:1–2",
        text: "I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship. Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect."
      },
      {
        num: 48,
        ref: "Psalm 37:23–24",
        text: "The steps of a man are established by the Lord, when he delights in his way; though he fall, he will not be cast headlong, for the Lord upholds him with his hand."
      },
      {
        num: 49,
        ref: "Proverbs 3:9–10",
        text: "Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine."
      },
      {
        num: 50,
        ref: "Joshua 1:8",
        text: "Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful."
      }
    ]
  }
];
