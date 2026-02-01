// Complete Bible data with all books and selected full chapters
export const bibleMetadata = {
  oldTestament: [
    { id: "genesis", name: { english: "Genesis", tamil: "ஆதியாகமம்" }, chapters: 50 },
    { id: "exodus", name: { english: "Exodus", tamil: "யாத்திராகமம்" }, chapters: 40 },
    { id: "leviticus", name: { english: "Leviticus", tamil: "லேவியராகமம்" }, chapters: 27 },
    { id: "numbers", name: { english: "Numbers", tamil: "எண்ணாகமம்" }, chapters: 36 },
    { id: "deuteronomy", name: { english: "Deuteronomy", tamil: "உபாகமம்" }, chapters: 34 },
    { id: "joshua", name: { english: "Joshua", tamil: "யோசுவா" }, chapters: 24 },
    { id: "judges", name: { english: "Judges", tamil: "நியாயாதிபதிகள்" }, chapters: 21 },
    { id: "ruth", name: { english: "Ruth", tamil: "ரூத்" }, chapters: 4 },
    { id: "1samuel", name: { english: "1 Samuel", tamil: "1 சாமுவேல்" }, chapters: 31 },
    { id: "2samuel", name: { english: "2 Samuel", tamil: "2 சாமுவேல்" }, chapters: 24 },
    { id: "1kings", name: { english: "1 Kings", tamil: "1 இராஜாக்கள்" }, chapters: 22 },
    { id: "2kings", name: { english: "2 Kings", tamil: "2 இராஜாக்கள்" }, chapters: 25 },
    { id: "1chronicles", name: { english: "1 Chronicles", tamil: "1 நாளாகமம்" }, chapters: 29 },
    { id: "2chronicles", name: { english: "2 Chronicles", tamil: "2 நாளாகமம்" }, chapters: 36 },
    { id: "ezra", name: { english: "Ezra", tamil: "எஸ்றா" }, chapters: 10 },
    { id: "nehemiah", name: { english: "Nehemiah", tamil: "நெகேமியா" }, chapters: 13 },
    { id: "esther", name: { english: "Esther", tamil: "எஸ்தர்" }, chapters: 10 },
    { id: "job", name: { english: "Job", tamil: "யோபு" }, chapters: 42 },
    { id: "psalms", name: { english: "Psalms", tamil: "சங்கீதம்" }, chapters: 150 },
    { id: "proverbs", name: { english: "Proverbs", tamil: "நீதிமொழிகள்" }, chapters: 31 },
    { id: "ecclesiastes", name: { english: "Ecclesiastes", tamil: "பிரசங்கி" }, chapters: 12 },
    { id: "songofsolomon", name: { english: "Song of Solomon", tamil: "உன்னதப்பாட்டு" }, chapters: 8 },
    { id: "isaiah", name: { english: "Isaiah", tamil: "ஏசாயா" }, chapters: 66 },
    { id: "jeremiah", name: { english: "Jeremiah", tamil: "எரேமியா" }, chapters: 52 },
    { id: "lamentations", name: { english: "Lamentations", tamil: "புலம்பல்" }, chapters: 5 },
    { id: "ezekiel", name: { english: "Ezekiel", tamil: "எசேக்கியேல்" }, chapters: 48 },
    { id: "daniel", name: { english: "Daniel", tamil: "தானியேல்" }, chapters: 12 },
    { id: "hosea", name: { english: "Hosea", tamil: "ஓசியா" }, chapters: 14 },
    { id: "joel", name: { english: "Joel", tamil: "யோவேல்" }, chapters: 3 },
    { id: "amos", name: { english: "Amos", tamil: "ஆமோஸ்" }, chapters: 9 },
    { id: "obadiah", name: { english: "Obadiah", tamil: "ஒபதியா" }, chapters: 1 },
    { id: "jonah", name: { english: "Jonah", tamil: "யோனா" }, chapters: 4 },
    { id: "micah", name: { english: "Micah", tamil: "மீகா" }, chapters: 7 },
    { id: "nahum", name: { english: "Nahum", tamil: "நாகூம்" }, chapters: 3 },
    { id: "habakkuk", name: { english: "Habakkuk", tamil: "ஆபகூக்" }, chapters: 3 },
    { id: "zephaniah", name: { english: "Zephaniah", tamil: "செப்பனியா" }, chapters: 3 },
    { id: "haggai", name: { english: "Haggai", tamil: "ஆகாய்" }, chapters: 2 },
    { id: "zechariah", name: { english: "Zechariah", tamil: "சகரியா" }, chapters: 14 },
    { id: "malachi", name: { english: "Malachi", tamil: "மல்கியா" }, chapters: 4 }
  ],
  newTestament: [
    { id: "matthew", name: { english: "Matthew", tamil: "மத்தேயு" }, chapters: 28 },
    { id: "mark", name: { english: "Mark", tamil: "மாற்கு" }, chapters: 16 },
    { id: "luke", name: { english: "Luke", tamil: "லூக்கா" }, chapters: 24 },
    { id: "john", name: { english: "John", tamil: "யோவான்" }, chapters: 21 },
    { id: "acts", name: { english: "Acts", tamil: "அப்போஸ்தலர்" }, chapters: 28 },
    { id: "romans", name: { english: "Romans", tamil: "ரோமர்" }, chapters: 16 },
    { id: "1corinthians", name: { english: "1 Corinthians", tamil: "1 கொரிந்தியர்" }, chapters: 16 },
    { id: "2corinthians", name: { english: "2 Corinthians", tamil: "2 கொரிந்தியர்" }, chapters: 13 },
    { id: "galatians", name: { english: "Galatians", tamil: "கலாத்தியர்" }, chapters: 6 },
    { id: "ephesians", name: { english: "Ephesians", tamil: "எபேசியர்" }, chapters: 6 },
    { id: "philippians", name: { english: "Philippians", tamil: "பிலிப்பியர்" }, chapters: 4 },
    { id: "colossians", name: { english: "Colossians", tamil: "கொலோசெயர்" }, chapters: 4 },
    { id: "1thessalonians", name: { english: "1 Thessalonians", tamil: "1 தெசலோனிக்கேயர்" }, chapters: 5 },
    { id: "2thessalonians", name: { english: "2 Thessalonians", tamil: "2 தெசலோனிக்கேயர்" }, chapters: 3 },
    { id: "1timothy", name: { english: "1 Timothy", tamil: "1 தீமோத்தேயு" }, chapters: 6 },
    { id: "2timothy", name: { english: "2 Timothy", tamil: "2 தீமோத்தேயு" }, chapters: 4 },
    { id: "titus", name: { english: "Titus", tamil: "தீத்து" }, chapters: 3 },
    { id: "philemon", name: { english: "Philemon", tamil: "பிலேமோன்" }, chapters: 1 },
    { id: "hebrews", name: { english: "Hebrews", tamil: "எபிரேயர்" }, chapters: 13 },
    { id: "james", name: { english: "James", tamil: "யாக்கோபு" }, chapters: 5 },
    { id: "1peter", name: { english: "1 Peter", tamil: "1 பேதுரு" }, chapters: 5 },
    { id: "2peter", name: { english: "2 Peter", tamil: "2 பேதுரு" }, chapters: 3 },
    { id: "1john", name: { english: "1 John", tamil: "1 யோவான்" }, chapters: 5 },
    { id: "2john", name: { english: "2 John", tamil: "2 யோவான்" }, chapters: 1 },
    { id: "3john", name: { english: "3 John", tamil: "3 யோவான்" }, chapters: 1 },
    { id: "jude", name: { english: "Jude", tamil: "யூதா" }, chapters: 1 },
    { id: "revelation", name: { english: "Revelation", tamil: "வெளிப்படுத்தல்" }, chapters: 22 }
  ]
};

// Full text data - includes complete chapters
// Note: For production, you would load this from a JSON file or API
export const bibleData = {
  books: [
    {
      id: "john",
      name: { english: "John", tamil: "யோவான்" },
      testament: "new",
      chapters: [
        {
          number: 1,
          verses: [
            { number: 1, text: { english: "In the beginning was the Word, and the Word was with God, and the Word was God.", tamil: "ஆதியிலே வசனம் இருந்தது, அந்த வசனம் தேவனிடத்தில் இருந்தது, அந்த வசனம் தேவனாக இருந்தது." } },
            { number: 2, text: { english: "The same was in the beginning with God.", tamil: "இது ஆதியிலே தேவனிடத்தில் இருந்தது." } },
            { number: 3, text: { english: "All things were made by him; and without him was not any thing made that was made.", tamil: "சகலமும் அவர் மூலமாய் உண்டாயிற்று; உண்டானவைகளில் ஒன்றும் அவராலல்லாமல் உண்டாகவில்லை." } },
            { number: 4, text: { english: "In him was life; and the life was the light of men.", tamil: "அவரிடத்தில் ஜீவன் இருந்தது; அந்த ஜீவன் மனுஷருக்கு ஒளியாயிருந்தது." } },
            { number: 5, text: { english: "And the light shineth in darkness; and the darkness comprehended it not.", tamil: "அந்த ஒளி இருளிலே பிரகாசிக்கிறது; இருள் அதை மேற்கொள்ளவில்லை." } }
          ]
        },
        {
          number: 3,
          verses: [
            { number: 16, text: { english: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", tamil: "தேவன், தம்முடைய ஒரேபேறான குமாரனை விசுவாசிக்கிறவன் எவனோ அவன் கெட்டுப்போகாமல் நித்தியஜீவனை அடையும்படிக்கு, அவரைத் தந்தருளி, இவ்வளவாய் உலகத்தில் அன்பு கூர்ந்தார்." } },
            { number: 17, text: { english: "For God sent not his Son into the world to condemn the world; but that the world through him might be saved.", tamil: "தேவன் தம்முடைய குமாரனை உலகத்தை ஆக்கினைக்குள்ளாகத் தீர்க்கும்படி அனுப்பாமல், உலகம் அவர் மூலமாய் இரட்சிக்கப்படும்படி அவரை அனுப்பினார்." } },
            { number: 18, text: { english: "He that believeth on him is not condemned: but he that believeth not is condemned already, because he hath not believed in the name of the only begotten Son of God.", tamil: "அவரை விசுவாசிக்கிறவன் ஆக்கினைக்குள்ளானவனல்ல; விசுவாசியாதவன் தேவனுடைய ஒரேபேறான குமாரனுடைய நாமத்தில் விசுவாசிக்காதபடியால், அவன் ஆக்கினைக்குள்ளானவனாயிற்று." } }
          ]
        }
      ]
    },
    {
      id: "genesis",
      name: { english: "Genesis", tamil: "ஆதியாகமம்" },
      testament: "old",
      chapters: [
        {
          number: 1,
          verses: [
            { number: 1, text: { english: "In the beginning God created the heaven and the earth.", tamil: "ஆதியிலே தேவன் வானத்தையும் பூமியையும் சிருஷ்டித்தார்." } },
            { number: 2, text: { english: "And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.", tamil: "பூமி ஒழுங்கின்மையும் வெறுமையுமாக இருந்தது; ஆழத்தின்மேல் இருள் இருந்தது; தேவனுடைய ஆவி ஜலத்தின்மேல் அசைவாடிக்கொண்டிருந்தது." } },
            { number: 3, text: { english: "And God said, Let there be light: and there was light.", tamil: "தேவன்: ஒளி உண்டாகக்கடவது என்றார்; ஒளி உண்டாயிற்று." } },
            { number: 4, text: { english: "And God saw the light, that it was good: and God divided the light from the darkness.", tamil: "தேவன் அந்த ஒளியை நல்லது என்று கண்டார்; தேவன் ஒளியையும் இருளையும் பிரித்தார்." } },
            { number: 5, text: { english: "And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.", tamil: "தேவன் ஒளிக்குப் பகல் என்றும், இருளுக்கு இராத்திரி என்றும் பேரிட்டார்; சாயங்காலமும் விடியற்காலமும் ஆனது முதலாம் நாள்." } },
            { number: 6, text: { english: "And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.", tamil: "தேவன்: ஜலங்களின் நடுவே ஒரு ஆகாய விரிவு உண்டாகி, அது ஜலங்களை நீக்கி வைக்கக்கடவது என்றார்." } },
            { number: 7, text: { english: "And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.", tamil: "அப்படியே தேவன் ஆகாய விரிவை உண்டுபண்ணி, ஆகாய விரிவுக்குக் கீழிருக்கிற ஜலத்தையும், ஆகாய விரிவுக்கு மேலிருக்கிற ஜலத்தையும் நீக்கினார்; அது அப்படியே ஆயிற்று." } },
            { number: 8, text: { english: "And God called the firmament Heaven. And the evening and the morning were the second day.", tamil: "தேவன் அந்த ஆகாய விரிவுக்கு வானம் என்று பேரிட்டார்; சாயங்காலமும் விடியற்காலமும் ஆனது இரண்டாம் நாள்." } },
            { number: 9, text: { english: "And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.", tamil: "பின்பு தேவன்: வானத்தின்கீழுள்ள ஜலங்கள் ஒரே இடத்தில் கூடி, நிலம் காணப்படக்கடவது என்றார்; அது அப்படியே ஆயிற்று." } },
            { number: 10, text: { english: "And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good.", tamil: "தேவன் காணப்பட்ட நிலத்துக்குப் பூமி என்றும், கூடிய ஜலங்களுக்குச் சமுத்திரங்கள் என்றும் பேரிட்டார்; அது நல்லது என்று தேவன் கண்டார்." } },
            { number: 11, text: { english: "And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.", tamil: "மேலும் தேவன்: பூமியானது பசும்புல்லையும், தன்தன் ஜாதியின்படி பிாயுள்ள பூண்டையும், தன்தன் ஜாதியின்படி தனக்குள்ளே விதையுள்ள கனியையும் கொடுக்கிற கனிமரங்களையும் முளைப்பிக்கக்கடவது என்றார்; அது அப்படியே ஆயிற்று." } },
            { number: 12, text: { english: "And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.", tamil: "பூமியானது பசும்புல்லையும், தன்தன் ஜாதியின்படி பீஜங்கொடுக்கும் பூண்டையும், தன்தன் ஜாதியின்படி தனக்குள்ளே விதையுள்ள கனியைக் கொடுக்கும் மரங்களையும் முளைப்பித்தது; அது நல்லது என்று தேவன் கண்டார்." } },
            { number: 13, text: { english: "And the evening and the morning were the third day.", tamil: "சாயங்காலமும் விடியற்காலமும் ஆனது மூன்றாம் நாள்." } },
            { number: 14, text: { english: "And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:", tamil: "பின்பு தேவன்: இராத்திரியை நீக்கிப் பகலுக்கு ஆகாய விரிவில் சுடர்கள் உண்டாகக்கடவது; அவைகள் அடையாளங்களாகவும், காலங்கள், நாள், வருஷம் என்பவைகளுக்கு அறிகுறிகளாகவும் இருப்பதாக." } },
            { number: 15, text: { english: "And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.", tamil: "பூமியின்மேல் வெளிச்சங்கொடுக்க அவைகள் ஆகாய விரிவில் சுடர்களாயிருக்கக்கடவது என்றார்; அது அப்படியே ஆயிற்று." } },
            { number: 16, text: { english: "And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.", tamil: "பகலை ஆளுகிறதற்குப் பெரிய சுடரும், இராத்திரியை ஆளுகிறதற்குச் சிறிய சுடருமாகிய இரண்டு பெரிய சுடர்களையும், நட்சத்திரங்களையும் தேவன் உண்டுபண்ணினார்." } },
            { number: 17, text: { english: "And God set them in the firmament of the heaven to give light upon the earth,", tamil: "பூமியின்மேல் வெளிச்சங்கொடுக்கவும்," } },
            { number: 18, text: { english: "And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.", tamil: "பகலையும் இராத்திரியையும் ஆளவும், ஒளியை இருளுக்கு நீக்கிவைக்கவும், தேவன் அவைகளை ஆகாய விரிவில் வைத்தார்; அது நல்லது என்று தேவன் கண்டார்." } },
            { number: 19, text: { english: "And the evening and the morning were the fourth day.", tamil: "சாயங்காலமும் விடியற்காலமும் ஆனது நான்காம் நாள்." } },
            { number: 20, text: { english: "And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.", tamil: "பின்பு தேவன்: ஜலங்கள் ஜீவஜந்துக்களின் தொகையைப் பெருக முளைப்பிக்கக்கடவது; பூமியின்மேல் ஆகாய விரிவிலே பறவைகள் பறக்கக்கடவது என்றார்." } },
            { number: 21, text: { english: "And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.", tamil: "தேவன் பெரிய மத்ஸ்யங்களையும், ஜலங்களில் தன்தன் ஜாதியின்படி முளைத்துப் பெருகின சகல ஜீவசஞ்சலங்களையும், தன்தன் ஜாதியின்படி இறகுள்ள சகல பறவைகளையும் சிருஷ்டித்தார்; அது நல்லது என்று தேவன் கண்டார்." } },
            { number: 22, text: { english: "And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth.", tamil: "தேவன் அவைகளை ஆசீர்வதித்து: நீங்கள் பலுகிப் பெருகி, சமுத்திரங்களின் ஜலங்களில் நிறையுங்கள்; பூமியிலே பறவைகளும் பெருகக்கடவது என்றார்." } },
            { number: 23, text: { english: "And the evening and the morning were the fifth day.", tamil: "சாயங்காலமும் விடியற்காலமும் ஆனது ஐந்தாம் நாள்." } },
            { number: 24, text: { english: "And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.", tamil: "பின்பு தேவன்: பூமியானது தன்தன் ஜாதியின்படி ஜீவஜந்துக்களையும், நடமாடும் பிராணிகளையும், தன்தன் ஜாதியின்படி காட்டுமிருகங்களையும் முளைப்பிக்கக்கடவது என்றார்; அப்படியே ஆயிற்று." } },
            { number: 25, text: { english: "And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.", tamil: "தேவன் தன்தன் ஜாதியின்படி காட்டுமிருகங்களையும், தன்தன் ஜாதியின்படி நாட்டுமிருகங்களையும், தன்தன் ஜாதியின்படி பூமியில் ஊரும் சகலவித பிராணிகளையும் உண்டாக்கினார்; அது நல்லது என்று தேவன் கண்டார்." } },
            { number: 26, text: { english: "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.", tamil: "பின்பு தேவன்: நாம் நம்முடைய சாயலாக, நம்முடைய ரூபத்தின்படியே மனுஷனை உண்டாக்குவோமாக; அவர்கள் சமுத்திரத்தின் மத்ஸ்யங்களையும், ஆகாயத்துப் பறவைகளையும், மிருகஜீவன்களையும், பூமியனைத்தையும், பூமியின்மேல் ஊரும் சகல பிராணிகளையும் ஆளக்கடவர்கள் என்றார்." } },
            { number: 27, text: { english: "So God created man in his own image, in the image of God created he him; male and female created he them.", tamil: "தேவன் மனுஷனைத் தம்முடைய சாயலாகப் படைத்தார், அவனைத் தேவசாயலாகவே படைத்தார்; ஆணும் பெண்ணுமாக அவர்களைப் படைத்தார்." } },
            { number: 28, text: { english: "And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.", tamil: "தேவன் அவர்களை ஆசீர்வதித்து, அவர்களை நோக்கி: நீங்கள் பலுகிப் பெருகி, பூமியை நிரப்பி, அதைக் கீழ்ப்படுத்தி, சமுத்திரத்தின் மத்ஸ்யங்களையும், ஆகாயத்துப் பறவைகளையும், பூமியின்மேல் நடமாடுகிற சகல ஜீவஜந்துக்களையும் ஆண்டுகொள்ளுங்கள் என்றார்." } },
            { number: 29, text: { english: "And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.", tamil: "பின்னும் தேவன்: இதோ, பூமியின் மேலெங்கும் இருக்கிற விதையுண்டாக்கும் சகல பூண்டுகளையும், விதைகொண்ட கனிதரும் மரங்களுடைய சகல கனிகளையும் உங்களுக்குத் தந்தேன்; அவைகள் உங்களுக்கு ஆகாரமாயிருக்கக்கடவது." } },
            { number: 30, text: { english: "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so.", tamil: "பூமியின் எல்லா ஜீவன்களுக்கும், ஆகாயத்தின் எல்லாப் பறவைகளுக்கும், பூமியில் ஊரும் எல்லாப் பிராணிகளுக்கும், பசும்புல் எல்லாம் ஆகாரமாயிருக்கக்கடவது என்றார்; அது அப்படியே ஆயிற்று." } },
            { number: 31, text: { english: "And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.", tamil: "தேவன் தாம் உண்டாக்கிய அனைத்தையும் பார்த்தார்; இதோ, அது மிகவும் நன்றாயிருந்தது; சாயங்காலமும் விடியற்காலமும் ஆனது ஆறாம் நாள்." } }
          ]
        }
      ]
    }
  ]
};
