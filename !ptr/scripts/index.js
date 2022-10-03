//Starting Variables and empty arrays
var totalCharactersLoaded = 0;
var imagesDisabled = false;
var ghostBoost = 0;
var requestType = "";
var tabIndex;
var randNum;
var activeWindow = "";
var reminderFontSize = 100;
var savedLocations = {morning: "", evening: "",};

var galleryArray = [];
var itemArray = [];
var logbookArray = [];
var definitionArray = [];
var listOfPrintedEncounters = [];

//Important Arrays
var data = {
	player: {
		name: "You",
		character: "basic",
		gender: "man",
		title: "Mister",
		honorific: "sir",
		characterArtist: "Art by Ishimura",
		currentScene: "start",
		time: "Morning",
		blacklist: [],
		day: 1,
		money: 30,
		hypnosis: 1,
		hacking: 0,
		counseling: 0,
		lastText: 100,
		dayID: 1,
		version: 19,
		location: "",
		pervert: false,
		color: "#86b4dc",
	},
	story: [
	],
	gallery: [
	],
	items: [
	],
	skills: [
		{name: "hypnosis", score: 1,},
		{name: "hacking", score: 0,},
		{name: "counseling", score: 0,},
	],
	bodytypes: [
		{index: "basic", artist: "Art by Ishimura",}
	],
	phoneImages: [
	],
}

var snippetArray = [
	{shortcut: "<green>", result: "<span style='color:green;'>"},
	{shortcut: "<pink>", result: "<span style='color:pink;'>"},
	{shortcut: "<big>", result: "<span style='font-size:200%;'>"},
	{shortcut: "<small>", result: "<span style='font-size:50%;'>"},
];

var ghostArray = [
	{name: "Ancient Chaplain", 		difficulty: 3, rarity: "01", time:"MorningEvening", top: 35, left: 20, requirement: 0, location: "computerRoom", 
	description: ""},
	{name: "Ancient Titan Saturn", 	difficulty: 1, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "beach", 
	description: ""},
	{name: "Antique Vision", 		difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 20, left: 70, requirement: 0, location: "map", 
	description: ""},
	{name: "Anubis", 				difficulty: 1, rarity: "012", time:"MorningEvening", top: 10, left: 70, requirement: 0, location: "classroomA", 
	description: ""},
	{name: "Arbiter",			 	difficulty: 2, rarity: "012", time:"MorningEvening", top: 30, left: 90, requirement: 0, location: "apartmentOutside", 
	description: ""},
	{name: "Awoken Deus",		 	difficulty: 1, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 5, location: "library", 
	description: ""},
	{name: "Awoken Cultist", 		difficulty: 4, rarity: "067", time:"MorningEvening", top: 40, left: 50, requirement: 0, location: "schoolEntrance", 
	description: ""},
	{name: "Bearington", 			difficulty: 10, rarity: "01234567", time:"MorningEvening", top: 40, left: 40, requirement: 0, location: "gym", 
	description: ""},
	{name: "Beetle", 				difficulty: 5, rarity: "0123", time:"MorningEvening", top: 60, left: 60, requirement: 0, location: "eastHallway", 
	description: ""},
	{name: "Bloom", 				difficulty: 4, rarity: "456", time:"MorningEvening", top: 20, left: 0, requirement: 0, location: "parkDistrict", 
	description: ""},
	{name: "Blue Dahlia", 			difficulty: 4, rarity: "0123", time:"MorningEvening", top: 0, left: 10, requirement: 0, location: "schoolEntrance", 
	description: ""},
	{name: "Bronze Hound", 			difficulty: 3, rarity: "012", time:"MorningEvening", top: 30, left: 30, requirement: 0, location: "library", 
	description: ""},
	{name: "Cosmic Guide",		 	difficulty: 3, rarity: "345", time:"MorningEvening", top: 50, left: 50, requirement: 0, location: "library", 
	description: ""},
	{name: "Cupid", 				difficulty: 4, rarity: "672", time:"MorningEvening", top: 20, left: 50, requirement: 0, location: "playerHouse", 
	description: ""},
	{name: "Deus Ex Machina", 		difficulty: 2, rarity: "23", time:"MorningEvening", top: 20, left: 40, requirement: 0, location: "computerRoom", 
	description: ""},
	{name: "Director",			 	difficulty: 1, rarity: "345", time:"MorningEvening", top: 6, left: 20, requirement: 0, location: "classroomA", 
	description: ""},
	{name: "Echo", 					difficulty: 5, rarity: "672", time:"MorningEvening", top: 20, left: 20, requirement: 0, location: "playerOffice", 
	description: ""},
	{name: "Father", 				difficulty: 2, rarity: "0123", time:"MorningEvening", top: 45, left: 30, requirement: 0, location: "northHallway", 
	description: ""},
	{name: "Flarecatcher", 			difficulty: 3, rarity: "012", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "westHallway", 
	description: ""},
	{name: "Flower Man", 			difficulty: 4, rarity: "4567", time:"MorningEvening", top: 52, left: 10, requirement: 0, location: "parkDistrict", 
	description: ""},
	{name: "Flying Spaghetti Monster", 	difficulty: 1, rarity: "01234567", time:"MorningEvening", top: 0, left: 55, requirement: 5, location: "playerOffice", 
	description: ""},
	{name: "Frontier Vision",	 	difficulty: 2, rarity: "01234567", time:"MorningEvening", top: 73, left: 20, requirement: 5, location: "schoolMap", 
	description: ""},
	{name: "Gehennas", 				difficulty: 1, rarity: "672", time:"MorningEvening", top: 25, left: 35, requirement: 0, location: "westHallway", 
	description: ""},
	{name: "Grey", 					difficulty: 5, rarity: "4567", time:"MorningEvening", top: 50, left: 70, requirement: 0, location: "roof", 
	description: ""},
	{name: "Hare", 					difficulty: 3, rarity: "672", time:"MorningEvening", top: 0, left: 40, requirement: 0, location: "classroomA", 
	description: ""},
	{name: "Hauntings", 			difficulty: 4, rarity: "345", time:"MorningEvening", top: 10, left: 90, requirement: 0, location: "playerHouse", 
	description: ""},
	{name: "IFO", 					difficulty: 2, rarity: "345", time:"MorningEvening", top: 25, left: 0, requirement: 0, location: "apartmentOutside", 
	description: "An Identified Flying Object. It's a saucer, from another world."},
	{name: "Investigator", 			difficulty: 4, rarity: "4567", time:"MorningEvening", top:10, left: 65, requirement: 0, location: "schoolEntrance", 
	description: ""},
	{name: "Iron Fey", 				difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 30, left: 85, requirement: 0, location: "eastHallway", 
	description: ""},
	{name: "Ivory Fey", 			difficulty: 4, rarity: "016", time:"MorningEvening", top: 20, left: 50, requirement: 0, location: "parkDistrict", 
	description: ""},
	{name: "Jester", 				difficulty: 2, rarity: "012", time:"MorningEvening", top: 100, left: 0, requirement: 0, location: "playerHouse", 
	description: ""},
	{name: "Kappa", 				difficulty: 4, rarity: "678", time:"MorningEvening", top: 30, left: 40, requirement: 0, location: "classroomB", 
	description: ""},
	{name: "Karma Head", 			difficulty: 2, rarity: "67", time:"MorningEvening", top: 0, left: 30, requirement: 0, location: "street", 
	description: ""},
	{name: "Karma Left Hand", 	difficulty: 2, rarity: "67", time:"MorningEvening", top: 0, left: 40, requirement: 0, location: "street", 
	description: ""},
	{name: "Karma Right Hand", 	difficulty: 2, rarity: "67", time:"MorningEvening", top: 0, left: 20, requirement: 0, location: "street", 
	description: ""},
	{name: "Laid Foundation", 		difficulty: 4, rarity: "012345", time:"MorningEvening", top: 60, left: 60, requirement: 0, location: "street", 
	description: ""},
	{name: "Lime Man", 				difficulty: 4, rarity: "345", time:"MorningEvening", top: 33, left: 10, requirement: 0, location: "westHallway", 
	description: ""},
	{name: "Loyalty", 				difficulty: 2, rarity: "457", time:"MorningEvening", top: 60, left: 0, requirement: 0, location: "playerOffice", 
	description: ""},
	{name: "Macabula", 				difficulty: 3, rarity: "4567", time:"MorningEvening", top: 20, left: 20, requirement: 0, location: "eastHallway", 
	description: ""},
	{name: "Mad Clown", 			difficulty: 4, rarity: "012345", time:"MorningEvening", top: 10, left: 40, requirement: 0, location: "shoppingDistrict", 
	description: ""},
	{name: "Maiden in Black", 		difficulty: 1, rarity: "671", time:"MorningEvening", top: 40, left: 35, requirement: 0, location: "apartmentOutside", 
	description: ""},
	{name: "Maudlin", 				difficulty: 4, rarity: "01234567", time:"MorningEvening", top: 40, left: 20, requirement: 0, location: "shoppingDistrict", 
	description: "The archetypal ghost."},
	{name: "Maudlos", 				difficulty: 4, rarity: "01234567", time:"MorningEvening", top: 30, left: 40, requirement: 5, location: "", 
	description: "The archetypal ghost 2."},
	{name: "Megalodon", 			difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 20, left: 0, requirement: 0, location: "library", 
	description: ""},
	{name: "Moriarty", 				difficulty: 2, rarity: "234", time:"MorningEvening", top: 60, left: 60, requirement: 0, location: "playerOffice", 
	description: ""},
	{name: "Myconid", 				difficulty: 4, rarity: "456", time:"MorningEvening", top: 43, left: 0, requirement: 0, location: "classroomB", 
	description: ""},
	{name: "Neptune Guardian", 	difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 100, left: 0, requirement: 0, location: "classroomA", 
	description: ""},
	{name: "Nyarlethotep", 			difficulty: 1, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "eastHallway", 
	description: ""},
	{name: "Offering of Valentine", difficulty: 5, rarity: "678", time:"MorningEvening", top: 50, left: 80, requirement: 0, location: "shoppingDistrict", 
	description: ""},
	{name: "Parasyte Apostle", 		difficulty: 2, rarity: "0123", time:"MorningEvening", top: 0, left: 30, requirement: 0, location: "eastHallway", 
	description: ""},
	{name: "Parasyte Core", 		difficulty: 3, rarity: "4567", time:"MorningEvening", top: 0, left: 90, requirement: 0, location: "eastHallway", 
	description: ""},
	{name: "Phoenix", 				difficulty: 3, rarity: "0123", time:"MorningEvening", top: 10, left: 80, requirement: 0, location: "gym", 
	description: ""},
	{name: "Preacher", 				difficulty: 3, rarity: "459", time:"MorningEvening", top: 40, left: 80, requirement: 0, location: "computerRoom", 
	description: ""},
	{name: "Priest of His Name", 	difficulty: 1, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "map", 
	description: "Give thanks to Him, uncaring, above! Don thy sacred headgear, strain thy heart to fight hypocrisy! Blessed thy be, touched by his noodly appendage!"},
	{name: "Psychic Grey", 			difficulty: 4, rarity: "678", time:"MorningEvening", top: 35, left: 0, requirement: 0, location: "computerRoom", 
	description: ""},
	{name: "Radiance", 				difficulty: 0, rarity: "0123", time:"MorningEvening", top: 5, left: 40, requirement: 0, location: "vintageStreet", 
	description: ""},
	{name: "Ramen Man", 			difficulty: 4, rarity: "4567", time:"MorningEvening", top: 50, left: 20, requirement: 0, location: "vintageStreet", 
	description: "One of four men, guardians of virtues. Kindness is as valuable to him as accomplishment."},
	{name: "Reaper Cloth", 			difficulty: 2, rarity: "0123", time:"MorningEvening", top: 23, left: 80, requirement: 0, location: "vintageStreet", 
	description: ""},
	{name: "Ruby Fey", 				difficulty: 4, rarity: "671", time:"MorningEvening", top: 40, left: 30, requirement: 0, location: "parkDistrict", 
	description: ""},
	{name: "Salvation", 			difficulty: 3, rarity: "0123", time:"MorningEvening", top: 20, left: 10, requirement: 0, location: "roof", 
	description: "When the core was taken from my body, a wonderful light embraced me. Empty as I was, I was finally free."},
	{name: "Saturn Guardian", 	difficulty: 2, rarity: "23", time:"MorningEvening", top: 15, left: 50, requirement: 0, location: "classroomB", 
	description: ""},
	{name: "Silverteeth", 			difficulty: 3, rarity: "674", time:"MorningEvening", top: 40, left: 86, requirement: 0, location: "library", 
	description: ""},
	{name: "Sonata", 				difficulty: 3, rarity: "4567", time:"MorningEvening", top: 20, left: 70, requirement: 0, location: "northHallway", 
	description: ""},
	{name: "Sphinx", 				difficulty: 4, rarity: "01234567", time:"MorningEvening", top: 30, left: 60, requirement: 0, location: "store", 
	description: ""},
	{name: "Stalker", 				difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "restaurant", 
	description: ""},
	{name: "Still Water", 			difficulty: 4, rarity: "4567", time:"MorningEvening", top: 50, left: 0, requirement: 0, location: "gym", 
	description: ""},
	{name: "Suika", 				difficulty: 4, rarity: "01234567", time:"MorningEvening", top: 40, left: 80, requirement: 0, location: "teacherLounge", 
	description: "A being from another world, a place of shrines and fairies."},
	{name: "Sushi Man", 			difficulty: 4, rarity: "0123", time:"MorningEvening", top: 9, left: 50, requirement: 0, location: "teacherLounge", 
	description: "One of four men, guardians of virtue. It is his burden to smell strongly, he offers praise to the clean."},
	{name: "The Man in Yellow", 	difficulty: 2, rarity: "4567", time:"MorningEvening", top: 10, left: 30, requirement: 0, location: "teacherLounge", 
	description: ""},
	{name: "Titania", 				difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 60, left: 30, requirement: 0, location: "store", 
	description: ""},
	{name: "Tortured Soul", 		difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "gym", 
	description: ""},
	{name: "Tsukomo", 				difficulty: 1, rarity: "232", time:"MorningEvening", top: 35, left:60, requirement: 0, location: "parkDistrict", 
	description: ""},
	{name: "UFO", 					difficulty: 2, rarity: "4567", time:"MorningEvening", top: 0, left: 70, requirement: 0, location: "roof", 
	description: ""},
	{name: "Unawoken Cultist", 		difficulty: 4, rarity: "012", time:"MorningEvening", top: 40, left: 80, requirement: 0, location: "classroomB", 
	description: ""},
	{name: "Virtue", 				difficulty: 3, rarity: "0123", time:"MorningEvening", top: 70, left: 80, requirement: 0, location: "vintageStreet", 
	description: ""},
	{name: "White Night", 			difficulty: 1, rarity: "018", time:"MorningEvening", top: 30, left: 30, requirement: 0, location: "playerOffice", 
	description: ""},
	{name: "Woman in Black", 		difficulty: 1, rarity: "4567", time:"MorningEvening", top: 60, left: 55, requirement: 0, location: "vintageStreet", 
	description: ""},
	{name: "Yatagarasu", 			difficulty: 3, rarity: "01234567", time:"MorningEvening", top: 0, left: 0, requirement: 0, location: "pool", 
	description: ""},
	{name: "Yorihime", 				difficulty: 1, rarity: "012", time:"MorningEvening", top: 70, left: 85, requirement: 0, location: "playerOffice", 
	description: "A being from another world, a place of shrines and fairies."},
	{name: "yokai1", 					difficulty: 1, rarity: "01234567", time:"Night", top: 70, left: 65, location: "playerHouse", 
	encounter: "meeting1", requirements: "!mode vegetarian; ?ghosts 1; !ghosts 5; ?trust yokai 0; ?time Night;",
	description: "???"},
	{name: "yokai2", 					difficulty: 3, rarity: "01234567", time:"Night", top: 70, left: 65, location: "playerHouse", 
	encounter: "meeting2", requirements: "?ghosts 6; !ghosts 10; ?trust yokai 0; ?time Night;",
	description: "???"},
	{name: "yokai3", 					difficulty: 5, rarity: "01234567", time:"Night", top: 70, left: 65, location: "playerHouse", 
	encounter: "meeting3", requirements: "?ghosts 11; ?trust yokai 0; ?time Night;",
	description: "???"},
	{name: "gilf", 					difficulty: 5, rarity: "01234567", time:"MorningEvening", top: 74, left: 04, location: "playerHouse", 
	encounter: "encounter1", requirements: "!mode carnivore; ?trust gilf 0; ?ghosts 1;",
	description: "???"},
	{name: "gilf", 					difficulty: 5, rarity: "01234567", time:"MorningEvening", top: 74, left: 04, location: "apartmentOutside", 
	encounter: "encounter3", requirements: "?trust gilf 1;",
	description: "???"},
	{name: "gilf", 					difficulty: 5, rarity: "01234567", time:"MorningEvening", top: 72, left: 84, location: "playerOffice", 
	encounter: "encounter4", requirements: "?trust gilf 2;",
	description: "???"},
	{name: "gilf", 					difficulty: 5, rarity: "01234567", time:"MorningEvening", top: 74, left: 04, location: "playerHouse", 
	encounter: "encounter5", requirements: "?trust gilf 81;",
	description: "???"},
	{name: "gilf", 					difficulty: 5, rarity: "01234567", time:"MorningEvening", top: 34, left: 4, location: "store", 
	encounter: "store", requirements: "?trustMin gilf 85; ?trustMax gilf 87; !flag gilf store;",
	description: "???"},
	{name: "gilf", 					difficulty: 5, rarity: "01234567", time:"MorningEvening", top: 68, left: 44, location: "eastHallway", 
	encounter: "school", requirements: "?trustMin gilf 85; ?trustMax gilf 87; !flag gilf eastHallway;",
	description: "???"},
	{name: "gilf", 					difficulty: 5, rarity: "01234567", time:"MorningEvening", top: 05, left: 65, location: "parkDistrict", 
	encounter: "park1", requirements: "??trustMin gilf 85; ?trustMax gilf 87; !flag gilf park;",
	description: "???"},
	{name: "gilfP", 					difficulty: 5, rarity: "01234567", time:"MorningEvening", top: 34, left: 40, location: "playerHouse", 
	encounter: "encounter6", requirements: "?trust gilf 88;",
	description: "???"},
	{name: "gilf", 					difficulty: 5, rarity: "01234567", time:"MorningEvening", top: 05, left: 65, location: "parkDistrict", 
	encounter: "encounter7", requirements: "?trust gilf 91;",
	description: "???"},
	{name: "gilfS", 					difficulty: 5, rarity: "01234567", time:"MorningEvening", top: 74, left: 95, location: "playerHouse", 
	encounter: "quoIntro", requirements: "?trust gilf 100;",
	description: "???"},
];

var achievementArray = [
	{index:"mom", frame: "", name: "", requirements: "?flag mom complete;", description: "Get momF's ending. Make sure to bring her a beer when she visits vintage street", image: "images/mom/momPT.png",},
	{index:"purple", frame: "ultraRare", name: "", requirements: "?flag purple complete;", description: "Get purpleF's ending (you might need to buy a purple flower).", image: "images/purple/purplePT.png",},
	{index:"scarf1", frame: "ultraRare", name: "", requirements: "?flag scarf bunny;", description: "Get the repeatable bunny scene in the casino.", image: "images/scarf/bunnyT.png",},
	{index:"scarf2", frame: "ultraRare", name: "", requirements: "?flag scarf bikini;", description: "Get the repeatable bikini scene in the casino.", image: "images/scarf/bikiniT.png",},
	{index:"green1", frame: "ultraRare", name: "", requirements: "?trustMin scarf 60;", description: "Complete scarfF's challenge.", image: "images/green/greenPT.png",},
	//index:"incubus", frame: "vaporRare", name: "", requirements: "", description: "Spend an exorbitant amount .", image: "images/incubus/incubusT.png",},
	{index:"neet1", frame: "ultraRare", name: "", requirements: "?flag neet endingA;", description: "Obtain the ending for neetF where you hypnotize her.", image: "images/neet/neetPT.png",},
	{index:"neet2", frame: "ultraRare", name: "", requirements: "?flag neet endingB;", description: "Obtain the ending for neetF where you DON'T hypnotize her. Use Midnight Bliss if you've already gone too far!", image: "images/neet/bikiniT.png",},
	{index:"gilf", frame: "ultraRare", name: "", requirements: "?trustMin gilf 101;", description: "Complete gilfF's content and bring her closure. You'll need to buy the Ghost AR game from the shop, don't forget to open the app in your phone!", image: "images/gilf/gilfPT.png",},
	{index:"instructor", frame: "ultraRare", name: "", requirements: "?flag instructor complete;", description: "Obtain instructorF's ending by making sure not to leave her for last when corrupting the team. Make sure to corrupt her again for the PTSA if you keep playing!", image: "images/instructor/instructorPT.png",},
	{index:"instructor2", frame: "ultraRare", name: "", requirements: "?flag instructor last;", description: "See an alternate path for the team's corruption by leaving instructorF for last.", image: "images/instructor/fullTeam.png",},
	{index:"mama1", frame: "ultraRare", name: "", requirements: "?flag mama endingB;", description: "With the help of someone else, disguise yourself as mamaF's secret fetish and get the bull ending.", image: "images/mama/mamaPT.png",},
	{index:"mama2", frame: "ultraRare", name: "", requirements: "?flag mama endingA;", description: "With the help of someone else, disguise yourself as mamaF's son and get the mama's boy ending. Make sure to answer your texts, you have to respond to one she sends to get the ending.", image: "images/mama/magicalT.png",},
	{index:"president1", frame: "ultraRare", name: "", requirements: "?trust president 101;", description: "Complete presidentF's content.", image: "images/president/presidentPT.png",},
	{index:"treasurer1", frame: "ultraRare", name: "", requirements: "?trust president 101;", description: "With presidentF's help, seduce and hypnotize treasurerF.", image: "images/treasurer/treasurerPT.png",},
	{index:"nurse1", frame: "ultraRare", name: "", requirements: "?flag nurse anal; ?flag nurse imperfectYouth; ?flag nurse charisma;", description: "Obtain all of nurseF's currently available potions", image: "images/nurse/nursePT.png",},
	{index:"miko1", frame: "ultraRare", name: "", requirements: "?flag miko brothel;", description: "Complete all of mikoF and itakoF's content", image: "images/miko/mikoPT.png",},
	{index:"brown", frame: "ultraRare", name: "", requirements: "?flag ojou brownInvite;", description: "Corrupt ojouF with brownF's help.", image: "images/brown/brownPT.png",},
	{index:"brown", frame: "ultraRare", name: "", requirements: "?flag brown complete;", description: "Corrupt brownF's entire family and get brownF's ending.", image: "images/brown/mamaPT.png",},
	{index:"ribbon", frame: "ultraRare", name: "", requirements: "?flag ojou ribbonInvite;", description: "Corrupt ojouF with ribbonF's help.", image: "images/ribbon/ribbonPT.png",},
	{index:"ojou1", frame: "ultraRare", name: "", requirements: "?trust ojou 80;", description: "Fully corrupt ojouF.", image: "images/ojou/ojouPT.png",},
	{index:"pinstripe1", frame: "ultraRare", name: "", requirements: "?trust pinstripe 81;", description: "Complete pinstripeF's content on the normal route (without blonding her again).", image: "images/pinstripe/pinstripePT.png",},
	{index:"pinstripe2", frame: "ultraRare", name: "", requirements: "?trust pinstripe 61;", description: "Blonde pinstripeF and find her on the streets.", image: "images/pinstripe/schoolgirlT.png",},
	{index:"starlet1", frame: "ultraRare", name: "", requirements: "?flag starlet complete;", description: "Get starletF's ending.", image: "images/starlet/starletPT.png",},
	{index:"pornstar", frame: "ultraRare", name: "", requirements: "?flag starlet porno1; ?flag starlet porno2; ?flag starlet porno3;", description: "Film every pornshoot at the starletL Studio.", image: "images/pornstar/pornstarPT.png",},
	{index:"emotionless1", frame: "ultraRare", name: "", requirements: "?flag emotionless complete;", description: "Max out emotionlessF's degeneracy gauge by obtaining her ending.", image: "images/emotionless/emotionlessPT.png",},
	{index:"principal1", frame: "ultraRare", name: "", requirements: "?flag principal endingSubtle;", description: "Bring principalF around the school and unlock the subtle ending. Make sure you have enough counseling skill points!.", image: "images/principal/principalPT.png",},
	{index:"principal2", frame: "ultraRare", name: "", requirements: "?flag principal endingPorno;", description: "Use common sense manipulation on principalF, then bring her with you to a certain girl's porn studio. To get the crown, go to sleep after getting all three of these last achievements!", image: "images/secretary/secretaryPT.png",},
	{index:"principal3", frame: "ultraRare", name: "", requirements: "?flag principal endingBlackmail;", description: "Gather the support of every PTSA member and directly blackmail principalF with presidentF's help. Keep meeting with presidentF and secretaryF if you're stuck!", image: "images/pink/pinkPT.png",},
	
	{index:"kuro1", frame: "ultraRare", name: "", requirements: "?flag kuro complete;", description: "Obtain kuroF's ending If you're having trouble, remember check your phone and level up hacking once or twice.", image: "images/kuro/kuroPT.png",},
	{index:"kuro2", frame: "", name: "", requirements: "?flag kuro OralFixation;", description: "Hear about kuroF's embarrassing story involving nikkiF and her oral fixation.", image: "images/kuro/9-1.jpg",},
	{index:"maid1", frame: "ultraRare", name: "", requirements: "?flag maid complete;", description: "Obtain maidF and mistressF's ending. If you pursue maidF first, dialogue with both her and mistressF will change.", image: "images/maid/maidPT.png",},
	{index:"mistress1", frame: "ultraRare", name: "", requirements: "?flag mistress complete;", description: "Obtain maidF and mistressF's ending. If you pursue mistressF first, dialogue with both her and maidF will change", image: "images/mistress/mistressPT.png",},
	{index:"nikki", frame: "ultraRare", name: "", requirements: "?flag nikki complete;", description: "Get nikkiF's ending.", image: "images/nikki/nikkiPT.png",},
	{index:"haze1", frame: "ultraRare", name: "", requirements: "?flag haze haze3AGallery; ?flag haze haze3BGallery; ?flag haze haze4AGallery;", description: "View all of hazeF's content.", image: "images/haze/hazePT.png",},
	{index:"pizza1", frame: "ultraRare", name: "", requirements: "?flag pizza complete;", description: "Get pizzaF's ending. If you can't find her, check outside your apartment in the morning.", image: "images/pizza/pizzaPT.png",},
	
	{index:"sports", frame: "ultraRare", name: "", requirements: "?trust sports 150;", description: "Complete sportsF's content. Don't forget to check your phone!", image: "images/sports/sportsPT.png",},
	{index:"coach", frame: "ultraRare", name: "", requirements: "?trust coach 200;", description: "Complete coachF's content. Make sure your counseling score is high, check your phone, and hope that someday the volleyball team will have more content.", image: "images/coach/coachPT.png",},
	
	//index:"droupout-mod", frame: "ultraRare", name: "", requirements: "?trust dropout 100;", description: "", image: "images//PT.png",},
	//index:"hearts-mod", frame: "ultraRare", name: "", requirements: "?trust hearts 100;", description: "", image: "images//PT.png",},
	
	{index:"succubus1", frame: "vaporRare", name: "", requirements: "?flag succubus newCorruption;", description: "Chat with succubusF with a high corruption stat after meeting a certain big-shot demon, and learn the secrets of corruption.", image: "images/succubus/demonPT.png",},
	{index:"succubus2", frame: "vaporRare", name: "", requirements: "?flag succubus complete;", description: "With succubusF's help, become the demon ruler of your own personal hellish harem.", image: "images/succubus/succubusPT.png",},
	{index:"succubus3", frame: "", name: "", requirements: "?flag succubus newCorruption;", description: "Purify succubusF at priestF's church by chatting at low corruption, then go out drinking together with your batty familiar.", image: "images/succubus/056a.jpg",},
	{index:"succubus4", frame: "vaporRare", name: "", requirements: "?trustMin tomgirl 665; ?trustMin fitboi 665; ?trustMin nagatoro 665;", description: "With succubusF's power, corrupt tomgirlF, nagatoroF, and fitboiF.", image: "images/succubus/demonT.png",},
	{index:"demon1", frame: "ultraRare", name: "", requirements: "?flag demon complete;", description: "See the darkest ending in demonF's hotel.", image: "images/demon/darkPT.png",},
	{index:"demon2", frame: "ultraRare", name: "", requirements: "?flag demon goodBoi;", description: "Check a certain prince of hell after succubusF takes over his hotel.", image: "images/demon/demonPT.png",},
	{index:"tomgirl1", frame: "ultraRare", name: "", requirements: "?flag tomgirl complete;", description: "Obtain tomgirlF's ending.", image: "images/tomgirl/tomgirlPT.png",},
	{index:"tomgirl2", frame: "vaporRare", name: "", requirements: "?trust tomgirl 666;", description: "Corrupt tomgirlF with the secrets learned from succubusF.", image: "images/tomgirl/tomgirlPT.png",},
	{index:"camboi1", frame: "ultraRare", name: "", requirements: "?flag camboi complete;", description: "Obtain camboiF's ending.", image: "images/camboi/camboiPT.png",},
	{index:"camboi2", frame: "vaporRare", name: "", requirements: "?trust camboi 666;", description: "Corrupt camboiF with the secrets learned from succubusF.", image: "images/camboi/camslutPT.png",},
	{index:"fitboi1", frame: "ultraRare", name: "", requirements: "?flag fitboi complete;", description: "Obtain fitboiF's ending.", image: "images/fitboi/fitboiPT.png",},
	{index:"fitboi2", frame: "vaporRare", name: "", requirements: "?trust fitboi 666;", description: "Corrupt fitboiF with the secrets learned from succubusF.", image: "images/fitboi/fitboiCT.png",},
	{index:"nagatoro1", frame: "ultraRare", name: "", requirements: "?flag tomgirl club; ?flag meji club; ?flag succubus club; ?flag yokai club; ?trustMin nagatoro 104;", description: "Invite tomgirlF, mejiF, succubusF, and yokaiF to the crossdressing club, and use the bunny outfit enough times to unlock all of nagatoroF's outfits.", image: "images/nagatoro/nagatoroPT.png",},
	{index:"nagatoro2", frame: "vaporRare", name: "", requirements: "?trust nagatoro 666;", description: "Corrupt nagatoroF with the secrets learned from succubusF.", image: "images/nagatoro/nagatoroPT.png",},
	{index:"papi1", frame: "ultraRare", name: "", requirements: "?trust papi 101;", description: "Have a threesome with papiF and sonF.", image: "images/papi/papiPT.png",},
	{index:"son1", frame: "vaporRare", name: "", requirements: "?trust papi 666;", description: "Corrupt papiF and sonF with the secrets learned from succubusF.", image: "images/son/sonPT.png",},
	{index:"yokai1", frame: "ultraRare", name: "", requirements: "?flag yokai complete;", description: "Obtain yokaiF's ending. To make him appear, buy the phone app game from the shop!", image: "images/yokai/twinsT.png",},
	{index:"yokai2", frame: "ultraRare", name: "", requirements: "?ghosts 70;", description: "Capture 70 ghosts (Are there even this many in the game?! Make sure to use the <b>eyestrain</b> cheat code!).", image: "images/yokai/yokaiPT.png",},
	{index:"priest1", frame: "ultraRare", name: "", requirements: "?flag priest complete;", description: "Get your corruption stat low enough and obtain priestF's ending.", image: "images/priest/priestPT.png",},
	{index:"priest2", frame: "", name: "", requirements: "?flag priest coward;", description: "Disable the test of wrath, either by talking to priestF after starting it, or by using the cheat code <b>oowoo</b>.", image: "images/priest/007.jpg",},
	{index:"son1", frame: "ultraRare", name: "", requirements: "?trust papi 101;", description: "Obtain sonF and papiF's ending.", image: "images/son/sonPT.png",},
	{index:"papi1", frame: "vaporRare", name: "", requirements: "?trust papi 666;", description: "Corrupt sonF and papiF with the secrets learned from succubusF.", image: "images/papi/papiPT.png",},
	
	{index:"meji1", frame: "ultraRare", name: "", requirements: "?flag meji complete;", description: "Obtain mejiF's ending. Did you know that, depending on the choice you make when you spot him crossdressing, his dialogue changes?", image: "images/meji/mejiPT.png",},
	{index:"meji2", frame: "", name: "", requirements: "?flag meji corrupt;", description: "Corrupt mejiF with the secrets learned from succubusF.", image: "images/meji/succ1-5.jpg",},
	{index:"housekeep1", frame: "ultraRare", name: "", requirements: "?flag housekeep ending;", description: "Finish Anri's content.", image: "images/housekeep/housekeepPT.png",},
	{index:"housekeep2", frame: "vaporRare", name: "", requirements: "?flag housekeep Heaven;", description: "Have Anri tell you about his home, unlocking alternate ending dialogue. If you're having trouble, try talking to succubusF and hazeF.", image: "images/housekeep/housekeepT.png",},
	
	//index:"intern-mod", frame: "vaporRare", name: "", requirements: "?flag intern corrupt;", description: "Corrupt internF and unlock a new character. mejiF and neetF can help you if you're stuck with him, or just keep talking to him to bypass and cheat the requirement.", image: "images//PT.png",},
	//index:"serious1-mod", frame: "ultraRare", name: "", requirements: "?trust serious 80;", description: "", image: "images//PT.png",},
	//index:"serious1-mod", frame: "ultraRare", name: "", requirements: "?trust serious 65;", description: "", image: "images//PT.png",},
	
	{index:"misc3", frame: "ultraRare", name: "", requirements: "?flag mom style;", description: "Change your visual style in the school library.", image: "scripts/gamefiles/profiles/joketteT.png",},
	{index:"misc4", frame: "ultraRare", name: "", requirements: "?flag mom mods;", description: "Check out the included modded characters via the game console. No, there aren't any more for download on the discord, but you can pop in to say hello!", image: "images/serious/seriousT.png",},
	{index:"misc1", frame: "ultraRare", name: "", requirements: "?flag mom backup;", description: "Save to a .noodle file in the save menu. Always keep a backup!", image: "scripts/gamefiles/logo2.png",},
	{index:"misc2", frame: "ultraRare", name: "", requirements: "?flag mom noodleJacuzzi;", description: "Go to my index at noodlejacuzzi.github.io and check out my index of games. They're fun, I promise! Probably.<br>Type the welcome message at the very top of the index as a cheat to unlock this.", image: "scripts/gamefiles/logo2.png",},
];

var menuButtons = [
{ID: "invButton", name:"INVENTORY",},
{ID: "imgButton", name:"TOGGLE IMAGES",},
{ID: "phoneButton", name:"PHONE",},
{ID: "logButton", name:"LOGBOOK",},
{ID: "saveButton", name:"SAVE/LOAD",},
{ID: "restartButton", name:"RESTART",},
{ID: "mobButton", name:"MOBILE VERSION",},
{ID: "phoneButtonMobile", name:"PHONE",},
];

var coreCharactersArray = [
	{index: "mom", 			met: false, fName: "Emily", lName: "Smith", 		trust: 0, encountered: false, textEvent: "", color: "#CCCCCC", author: "NoodleJacuzzi", artist: "Enoshima Iki", textHistory: "", unreadText: false, gender: "female",},
	{index: "kuro", 		met: false, fName: "Steph", lName: "Black", 		trust: 0, encountered: false, textEvent: "", color: "#fde1a5", author: "CryptoGreek", artist: "Enoshima Iki", textHistory: "", unreadText: false, gender: "female",},
	{index: "tomgirl", 		met: false, fName: "Sam", lName: "White", 			trust: 0, encountered: false, textEvent: "", color: "#a79e9a", author: "NoodleJacuzzi", artist: "Nagi Ichi", textHistory: "", unreadText: false, gender: "male",},
	{index: "purple", 		met: false, fName: "Mary", lName: "Williams", 		trust: 0, encountered: false, textEvent: "", color: "#cb86ef", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "chubby", 		met: false, fName: "Margaret", lName: "Williams", 	trust: 0, encountered: false, textEvent: "", color: "#da924b", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "maid", 		met: false, fName: "Lena", lName: "Rogers", 		trust: 0, encountered: false, textEvent: "", color: "#CCCCCC", author: "CryptoGreek", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "mistress", 	met: false, fName: "Anna", lName: "Fletcher", 		trust: 0, encountered: false, textEvent: "", color: "#ed9082", author: "CryptoGreek", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "meji", 		met: false, fName: "Reese", lName: "Kieran", 		trust: 0, encountered: false, textEvent: "", color: "#7e52a3", author: "CryptoGreek", artist: "Nagi Ichi", textHistory: "", unreadText: false, gender: "male",},
	{index: "principal", 	met: false, fName: "Victoria", lName: "Devons", 	trust: 0, encountered: false, textEvent: "", color: "#e47311", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "secretary", 	met: false, fName: "Lisa", lName: "Jones", 			trust: 0, encountered: false, textEvent: "", color: "#888888", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "neet", 		met: false, fName: "Tia", lName: "Sun", 			trust: 0, encountered: false, textEvent: "", color: "#da924b", author: "NoodleJacuzzi", artist: "Enoshima Iki", textHistory: "", unreadText: false, gender: "female",},
	{index: "scarf", 		met: false, fName: "Cassandra", lName: "Hamilton", 	trust: 0, encountered: false, textEvent: "", color: "#954655", author: "NoodleJacuzzi", artist: "Enoshima Iki", textHistory: "", unreadText: false, gender: "female",},
	{index: "green", 		met: false, fName: "Emma", lName: "Hamilton", 		trust: 0, encountered: false, textEvent: "", color: "#677b4c", author: "NoodleJacuzzi", artist: "Enoshima Iki", textHistory: "", unreadText: false, gender: "female",},
	{index: "succubus", 	met: false, fName: "Gou", lName: "", 				trust: 0, encountered: false, textEvent: "", color: "#BF76DF", author: "NoodleJacuzzi", artist: "Gujira 4 Gou", textHistory: "", unreadText: false, gender: "male",},
	{index: "nurse", 		met: false, fName: "Justine", lName: "Walton", 		trust: 0, encountered: false, textEvent: "", color: "#8D756B", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "housekeep", 	met: false, fName: "Anri", lName: "Ramona", 		trust: 0, encountered: false, textEvent: "", color: "#df5877", author: "CryptoGreek", artist: "Kinta no Mousou", textHistory: "", unreadText: false, gender: "male",},
	{index: "haze", 		met: false, fName: "Sienna", lName: "", 			trust: 0, encountered: false, textEvent: "", color: "#F683C8", author: "CryptoGreek", artist: "Purple Haze", textHistory: "", unreadText: false, gender: "female",},
	{index: "nikki", 		met: false, fName: "Nikki", lName: "Hunt", 			trust: 0, encountered: false, textEvent: "", color: "#445B6D", author: "CryptoGreek", artist: "Enoshima Iki", textHistory: "", unreadText: false, gender: "female",},
	{index: "cafedark", 	met: false, fName: "Mia", lName: "Gray", 			trust: 0, encountered: false, textEvent: "", color: "#83E4B7", author: "CryptoGreek", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "incubus", 		met: false, fName: "Lily", lName: "", 				trust: 0, encountered: false, textEvent: "", color: "#FFF6BD", author: "NoodleJacuzzi", artist: "Gujira 4 Gou", textHistory: "", unreadText: false, gender: "female",},
	{index: "president", 	met: false, fName: "Madison", lName: "Moore", 		trust: 0, encountered: false, textEvent: "", color: "#AD7961", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "treasurer", 	met: false, fName: "Abigail", lName: "Adams", 		trust: 0, encountered: false, textEvent: "", color: "#CFA18A", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "ojou", 		met: false, fName: "Olivia", lName: "Wright", 		trust: 0, encountered: false, textEvent: "", color: "#4EAAB5", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "mama", 		met: false, fName: "Sofia", lName: "Rossi", 		trust: 0, encountered: false, textEvent: "", color: "#A2DAF1", author: "NoodleJacuzzi", artist: "Enoshima Iki", textHistory: "", unreadText: false, gender: "female",},
	{index: "pinstripe", 	met: false, fName: "Evelyn", lName: "Weber", 		trust: 0, encountered: false, textEvent: "", color: "#924F82", author: "NoodleJacuzzi", artist: "Enoshima Iki", textHistory: "", unreadText: false, gender: "female",},
	{index: "instructor", 	met: false, fName: "Charlotte", lName: "Reid", 		trust: 0, encountered: false, textEvent: "", color: "#FD7380", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "nagatoro", 	met: false, fName: "Ash", lName: "Martin", 			trust: 0, encountered: false, textEvent: "", color: "#6E6C94", author: "NoodleJacuzzi", artist: "Kinta no Mousou", textHistory: "", unreadText: false, gender: "male",},
	{index: "sports", 		met: false, fName: "Zoe", lName: "Parker", 			trust: 0, encountered: false, textEvent: "", color: "#496EBF", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false, gender: "female",},
	{index: "swimmer", 		met: false, fName: "Naomi", lName: "Greens", 		trust: 0, encountered: false, textEvent: "", color: "#8DB7D0", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false, gender: "female",},
	{index: "orange", 		met: false, fName: "Vanessa", lName: "Lions", 		trust: 0, encountered: false, textEvent: "", color: "#BA5B17", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false, gender: "female",},
	{index: "cold", 		met: false, fName: "Kelsey", lName: "Lowe", 		trust: 0, encountered: false, textEvent: "", color: "#FCFFFA", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false, gender: "female",},
	{index: "coach", 		met: false, fName: "Amy", lName: "Silver", 			trust: 0, encountered: false, textEvent: "", color: "#D7BB2E", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false, gender: "female",},
	{index: "masseuse", fName: "Allison", lName: "Greens", trust: 0, encountered: false, textEvent: "", met: false, color: "#F683C8", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false, gender: "female",},
	{index: "brown", fName: "Daniela", lName: "Wright", trust: 0, encountered: false, textEvent: "", met: false, color: "#F9D4B7", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "ribbon", fName: "Ella", lName: "Bell", trust: 0, encountered: false, textEvent: "", met: false, color: "#8D528A", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "camboi", fName: "Damian", lName: "Wisk", trust: 0, encountered: false, textEvent: "", met: false, color: "#685E55", author: "NoodleJacuzzi", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false, gender: "male",},
	{index: "fitboi", fName: "Robin", lName: "Lee", trust: 0, encountered: false, textEvent: "", met: false, color: "#885F89", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false, gender: "male",},
	{index: "miko", fName: "Himari", lName: "Sato", trust: 0, encountered: false, textEvent: "", met: false, color: "#E27546", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "itako", fName: "Emi", lName: "Sato", trust: 0, encountered: false, textEvent: "", met: false, color: "#D33D3D", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "gilf", fName: "Eva", lName: "Rose", trust: 0, encountered: false, textEvent: "", met: false, color: "#db4bbc", author: "NoodleJacuzzi", artist: "Toxic Love", textHistory: "", unreadText: false, gender: "female",},
	{index: "yokai", fName: "Gekka", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#44d4c3", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false, gender: "male",},
	{index: "priest", fName: "Kay", lName: "Leah", trust: 0, encountered: false, textEvent: "", met: false, color: "#FFFED7", author: "NoodleJacuzzi", artist: "Akagai", textHistory: "", unreadText: false, gender: "male",},
	{index: "emotionless", fName: "Sasha", lName: "Drakeson", trust: 0, encountered: false, textEvent: "", met: false, color: "#FFDEAB", author: "NoodleJacuzzi", artist: "Nagi Ichi", textHistory: "", unreadText: false, gender: "female",},
	{index: "papi", fName: "Saffron", lName: "Hall", trust: 0, encountered: false, textEvent: "", met: false, color: "#AC4B54", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false, gender: "male",},
	{index: "son", fName: "Bay", lName: "Hall", trust: 0, encountered: false, textEvent: "", met: false, color: "#772229", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false, gender: "male",},
	{index: "pizza", fName: "Penny", lName: "Heron", trust: 0, encountered: false, textEvent: "", met: false, color: "#DC7979", author: "CryptoGreek", artist: "Amai Wakusei", textHistory: "", unreadText: false, gender: "female",},
	{index: "demon", fName: "Meph", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#9D5C3E", author: "NoodleJacuzzi", artist: "Gujira 4 Gou", textHistory: "", unreadText: false, gender: "male",},
	{index: "starlet", fName: "Lana", lName: "Cummings", trust: 0, encountered: false, textEvent: "", met: false, color: "#FDDC95", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false, gender: "female",},
	{index: "pornstar", fName: "Andrea", lName: "Cummings", trust: 0, encountered: false, textEvent: "", textHistory: "", met: false, color: "#454857", author: "NoodleJacuzzi", artist: "Oreteki18kin", gender: "female",},
	{index: "gyatrio", fName: "Delinquent", lName: "Trio", trust: 0, encountered: false, textEvent: "", met: false, color: "#EA4448", author: "NoodleJacuzzi", artist: "Uo Denim", textHistory: "", unreadText: false, gender: "female",}
]

var eggyLines = [
	"Hehehe... You fool. I have SEVENTY ALTERNATIVE ACCOUNTS!",
	"What the FUCK?! IS that Shadow's dick?!",
	"*Sigh*... I miss my wife, Tails.",
	"What the fuck, shut the fuck up. Shut the FUCK up!",
	"Everybody's fucked my wife!",
	"Who posted my nudes on twitter dot com?!",
	"I've come to make an announcement: Shadow the Hedgehog's a bitch-ass motherfucker, he pissed on my fucking wife. That's right, he took his hedgehog-fuckin' quilly dick out and he pissed on my fucking wife, and he said his dick was 'this big,' and I said 'that's disgusting.'",
	"I'm making a callout post on my Twitter.com: Shadow the Hedgehog, you've got a small dick, It's the size of this walnut except WAY smaller.",
	"Here's what my dong looks like: that's right baby, all points, no quills, no pillows— look at that, it looks like two balls and a bong.",
	"That's right, this is what you get: MY SUPER LASER PISS!!",
	"I'm not gonna piss on the Earth, I'm gonna go higher; I'm pissing ON THE MOON!",
	"How do you like that, Obama? I PISSED ON THE MOON, YOU IDIOT!",
	"Get outta my fucking sight, before I piss on you too!",
	"That's right, you ugly little girl! I HATE YOU, and your stupid nose!",
	"I'm taking everything from you, give me your phone!",
	"I'm taking over Victoria's Secret, I'm taking over Best Buy, the news is mine, and everyone else can leave! You see that planet!? I'M TAKING IT TOO! It looks like a fucking walnut! ",
	"Fuck you, moon, you never had the cheese I wanted!",
	"I hope you're ready to die, it's gonna be like Evangelion, get the fuck out.",
	"Oh no, the instant ramen's been released! We need to go, NOW!",
	"I flushed them down the terlet.",
	"That's right. I want that Aquafina, bitch. (slups) I wanna sip that shit. YES.",
	"Why are you so goddamn pale? Now, get the fuck away from me!",
	"I have you both— all of you trapped here. Now, you can either give you up and we play PUBG together OR... you can stay down here and wrestle in your Fortnite or whatever you kids are playing now.",
	"You'll have Cheeto puffs on your fingahs... And Twitch Prime will be mine!",
	"You though that you could fuckin' escape me, gamer girl. But my IQ is too HIGH!",
	"I'm going to have a birth of cactuses out of my asshole.",
	"Did you see that hot jay-peg footage that was just-",
	"Ooh baby, I'm gonna blow the walls off this place!",
	"It's been seventeen days...",
	"The robots are becoming more sentient, they've started to know my name!",
	"THREE YEARS! I'VE BEEN IN HERE FOR THREE YEARS! HWOOOOAAAAAAAAA!!!",
	"Listen to me, I know who your mother is-",
	"Huh, forgot my password, lemme just... Hmm... 'EGG'...",
	"Well honey you're mascara's off, but we gotta get out of here because the building's gonna fucking explode.",
	"Jet boots?! Oh my god!",
	"WHAT?! YOU ARE NOT-ALLOWED!",
	"Wh-wh-whuh... What in the sam hell is this?!",
	"No fuck you I'm taking it away you thot-ass-bi-OH FUCK! OUGH, MY EMERALDS! AUGH!",
	"I'M BACK IN THIS FUCKING BUILDING AGAIN?! Oh my god...",
	"I'm going to kill you...<br>...<br>...<br>...<br>... And then kill you again.",
	"How do you think I feel being cucked by a hedgehog?!",
	"She had a diamond in her vagina?!",
	"Alright we are going to explore this island and find Sonic. He has all the weed that you need. All the ganja. That Mary Jane. The marry jamitch. All in his pocket.",
	"Now hurry up you... You fucking cuckhogs.",
	"Get outta here you thot-ass-bitch you still owe me a hundred dollars!",
	"Yeah bitch you're gonna walk the plank, gonna yar-har-",
	"AAAAUGH MY BONES!",
	"That's it, I'm calling the police. 911?",
	"Shadow have you found that goddamn blue marble motherfucking son of a bitch?",
	"You have thirteen minutes before this island fucking explodes you hot topic wannabee and you blue gumball son of a bitch. You have done nothing but destroy my life and I hope you both die.",
	"Seriously? Seriously?! OH MY GOD I DIDN'T KNOW!",
	"What the actual shit? WHAT?!",
	"Ugh, oh god, what the fuck happened last night?",
	"Okay I'm gonna log onto my twitter, everybody shut up. Shut up. Shut up. SHUT UP!",
	"Hey bitcheeees.",
	"I've had enough of you, you took my wife, you fucked my crops, I'm taking your life. And the chaos emeralds!",
	"Get the fuck out or I'm shooting Amy in the fucking face, I swear to god I'll do it you bitch, get out!",
	"Put the piss stone down right now, you know what piss rock does to your-",
	"You thought you were gonna escape but I knew you would fart down here so I had to put up a fucking seal.",
	"I'm gonna make sure you watch my vine compilations and I'm gonna make sure you perish you little rodent.",
	"HAVE YOU BEEN TALKING ABOUT MY FUCKING DICK AGAIN?!",
	"Who is this... Wha... Daddy? Daddy is that you?",
	"You wanna see some weird shit?",
	"Aw that piss-loving son of a bitch, I'll miss him.",
	"The caucacity of this bitch...",
	"I am an ALPHA MALE GAMER.",
	"What is ha-WHAT IS GOING ON?!",
	"I am very tall, I am like seven foot one, and I will step on you like eggs.",
	"Good morning eggheads and crackheads.",
	"You see this? This is the brand new diamond I am going to give to my brand new husband.",
	"Kinda reminds me of a piece of ham.",
	"Oh yes... My Martha Stewart pod...",
	"What have you done?! You've activated every single robot in existence!",
	"You've ruined a lot of things Sonic, you've always been a bitch, always.", 
	"And now finally you all can die! Finally, this is the chaos I wanted to see!",
	"You son of a bitch. I'm gonna log into your twitter and tell everyone what you said.",
];

// Core System Functions
function startup() {
	//Create empty save in case of restart
	saveSlot(111);
	//Ensure that viewpoint is at the top of the page
	wrapper.scrollTop = 0;
	
	updateMenu();
	preloadImages();
	//Check for autosave, otherwise go to start of the game
	if(localStorage.getItem('data110')) {
		loadSlot(110);
	}
	else{
		loadEvent('system', 'start');
	}
	//Establish basic shortcuts for writeHTML();
	basicDefinitions();
	//Check if the noodle jacuzzi index has been visited
	if(localStorage.getItem('indexVisited')) {
		addFlag("mom", "noodleJacuzzi");
	}
	//Check if the player has any new achievements (mostly for testing new ones)
	checkForAchievements();
	loadCoreCharacters();
}

function basicDefinitions() {
	var quickVar = "";
	writeHTML(`define player = sp player;`);
	for (defIndex = 0; defIndex < data.story.length; defIndex++) {
		writeHTML(`define `+data.story[defIndex].index+` = sp `+data.story[defIndex].index+`;`);
	}
}

function preloadImages(){
	console.log("preloading...");
    var preloaded = new Image();
	for (i = 0; i < locationArray.length; i++) {
		var bg = "images/locations/"+locationArray[i].index+"Morning.jpg";
		document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
		var bg = "images/locations/"+locationArray[i].index+"Evening.jpg";
		document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
	}
	for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
		var bg = "images/"+data.story[characterIndex].index+"/"+data.story[characterIndex].index+".jpg";
		document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
	}
	//console.log("preloading finished");
}

function restartButton() {
	var restart = confirm ("restart the game?");
	if (restart == true) {
		loadSlot(111);
	}
}

function disablePictures() {
	if (imagesDisabled == false) {
		document.getElementById("playerImage").style.visibility = "hidden";		
		document.getElementById("playerImage").style.width = "0%";
		document.getElementById("playerImage").style.border = "none";
		imagesDisabled = true;
		if (data.player.location != "") {
			changeLocation(data.player.location);
		}
	}
	else {
		location.reload();
	}
}

function passTime() {
	switch (data.player.time) {
		case "Morning":
			savedLocations.morning = data.player.location;
			data.player.time = "Evening";
		break;
		case "Evening":
			savedLocations.evening = data.player.location;
			data.player.time = "Night";
		break;
		case "Night":
			if (data.player.currentScene == "newDay") {
				//data.player.time = "Morning";
			}
		break;
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//External JS loading functions
function loadCharacter(name) {
	//Load characters without printing anything on the screen
	for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
		if (data.story[loadIndex].index == name) {
			console.log(name+' found already in the data variable, aborting function');
			name = 'failed';
		}
	}
	if (name != 'failed') {
		requestType = "load";
		var filename = "scripts/characters/"+name+".js";
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		fileref.onload = function() {
			console.log("Successfully loaded file "+name+".js to the game");
		}
		
		fileref.onerror = function() {
			console.log("Error! Script load failure, tried to add "+name+" to the game, but something went wrong! Is the .js file you are trying to load present in the scripts/characters folder? Did you misspell the index?");
		}
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
}

function modCharacter() {
	//Load characters while data on the screen for loading from the game console
	var name = document.getElementById('indexSubmission').value;
	name = name.toLowerCase();
	console.log("Loading character " + name);
	for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
		if (data.story[loadIndex].index == name) {
			writeText(name+' found already in the data variable, aborting function');
			name = 'failed';
		}
	}
	if (name != 'failed') {
		requestType = "load";
		var filename = "scripts/characters/"+name+".js";
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		fileref.onload = function() {
			document.getElementById('output').innerHTML = '';
			writeText("Successfully loaded file "+name+".js to the game");
			document.getElementById('output').innerHTML += `
				<img class="bigPicture" src="images/`+name+`/profile.jpg"
				onerror="writeText('Failed to write this character's profile image! Does the file images/`+name+`/profile.jpg actually exist?')">
				<br>
			`;
			if (data.player.location == "") {
				writeFunction("writeEncounter('system', 'start')", "Back to the start menu");
			}
			else {
				writeFunction("loadEncounter('system', 'gameConsole')", "Back to the console");
			}
		}
		
		fileref.onerror = function() {
			writeText("Error! Script load failure, tried to add "+name+" to the game, but something went wrong! Is the .js file you are trying to load present in the scripts/characters folder? Did you misspell the index?");
			if (data.player.location == "") {
				writeFunction("writeEncounter('system', 'start')", "Back to the start menu");
			}
			else {
				writeFunction("loadEncounter('system', 'gameConsole')", "Back to the console");
			}
		}
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
}

function loadEncounter(js, name) {
	var targetEncounterFile = 'system';
	requestType = 'encounter';
	eventName = name;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == js) {
			data.story[i].encountered = true;
			targetEncounterFile = data.story[i].index;
			document.getElementById('sceneAuthor').innerHTML = 'Author of this scene: <br>'+data.story[i].author;
		}
	}
	
	var filename = "scripts/characters/"+targetEncounterFile+".js";
	console.log('Attempting to load '+targetEncounterFile+'.js for scene ID '+name);
	
	//Create slot for new scripts file
	var fileref=document.createElement('script');
	fileref.setAttribute("src", filename);
	
	//Append new script file
	document.getElementsByTagName("head")[0].appendChild(fileref);
	
	//Delete script file afterwards
	var select = document.getElementsByTagName("head")[0];
	select.removeChild(select.lastChild);
	
	data.player.currentScene = name;
}

function loadEvent(js, name) {
	var targetEncounterFile = 'system';
	requestType = 'event';
	eventName = name;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == js) {
			targetEncounterFile = data.story[i].index;
			document.getElementById('sceneAuthor').innerHTML = 'Author of this scene: <br>'+data.story[i].author;
		}
	}
	
	var filename = "scripts/characters/"+targetEncounterFile+".js";
	console.log('Attempting to load '+targetEncounterFile+'.js for scene ID '+name);
	
	//Create slot for new scripts file
	var fileref=document.createElement('script');
	fileref.setAttribute("src", filename);
	
	//Append new script file
	document.getElementsByTagName("head")[0].appendChild(fileref);
	
	//Delete script file afterwards
	var select = document.getElementsByTagName("head")[0];
	select.removeChild(select.lastChild);
}

function printEncounterButton(character, scene, text, top, left, altName, altImage) {
	//console.log(text);
	if (text == "Game Console") {
		console.log(text);
		if (checkFlag("mom", "mods") != true) {
			text = "<b><span style='font-size:150%; color:green;'>Game Console</span></b>";
		}
	}
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick='loadEncounter("`+character+`", "`+scene+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%; border: 3px solid; border-radius: 0px;">`+text+`</div>
			`;
			break;
		}
		case "persona": {
			var ransomStringStart = text;
			if (checkFlag("mom", "personaOff")) {
				ransomStringStart = text;
			}
			ransomStringStart = ransomStringStart.toLowerCase();
			ransomStringStart = ransomStringStart.charAt(0).toUpperCase() + ransomStringStart.slice(1);
			console.log(ransomStringStart);
			var ransomStringEnd = "";
			if (ransomStringStart.charAt(2) == "g" || ransomStringStart.charAt(2) == "v") {
				for (var ransomCounter = 0; ransomCounter < ransomStringStart.length; ransomCounter++) {
					switch (ransomCounter) {
						case 0:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 1:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
						break;
						case 2:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 3:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						case 4:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 5:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(15deg);";
						break;
						case 6:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 7:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(5deg);";
						break;
						case 10:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
							if (ransomStringStart.length > 15) {
								//ransomStringEnd += "<br>"
							}
						break;
						case 11:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						default:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
					}
					console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
					console.log(ransomStringEnd);
					ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
				}
			}
			else {
				for (var ransomCounter = 0; ransomCounter < ransomStringStart.length; ransomCounter++) {
					switch (ransomCounter) {
						case 0:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 1:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 2:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: scale(1.4);";
						break;
						case 3:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						case 4:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(15deg);";
						break;
						case 5:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
						case 6:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
						break;
						case 7:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "-webkit-transform: rotate(-15deg);";
						break;
						case 10:
							var ransomFont = "font-family: norwester, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "";
							if (ransomStringStart.length > 15) {
								//ransomStringEnd += "<br>"
							}
						break;
						case 11:
							var ransomFont = "font-family: railway, times new roman, sans-serif;";
							var ransomBG = "background-color: #fff;";
							var ransomColor = "color: #000;";
							var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
						break;
						default:
							var ransomFont = "font-family: times new roman, sans-serif;";
							var ransomBG = "background-color: #000;";
							var ransomColor = "color: #fff;";
							var ransomRotate = "";
						break;
					}
					//console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
					//console.log(ransomStringEnd);
						ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
				}
			}
			if (checkFlag("mom", "personaOff") || text.includes("</b>") == true) {
				ransomStringEnd = text;
			}
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButtonPersona" onclick='loadEncounter("`+character+`", "`+scene+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 40%;">`+ransomStringEnd+`</div>
			`;
			break;
		}
		default: {
			document.getElementsByClassName('playerRoom')[0].innerHTML += `
				<div class="pictureButton" onclick='loadEncounter("`+character+`", "`+scene+`")'
				style="top: `+top+`%; left: `+left+`%; max-width: 30%;">`+text+`</div>
			`;
		}
	}
}

var encounterList = [];
function printEncounterTab(name, scene, text, altImage, altName) {
	var encounterToPrint = {name: name, scene: scene, text: text, altImage: altImage, altName: altName,};
	encounterList.push(encounterToPrint);
}

function printEncounterTabFollowup(name, scene, text, altImage, altName) {
	//console.info("TEST");
	var crown = "";
	if (character != "system") {
		var tabTrust = "<span class='unknown'>Unknown";
		var cancelTab = false;
		//Check the list of printed encounters to prevent duplicates
		for (encounterIndex = 0; encounterIndex < listOfPrintedEncounters.length; encounterIndex++) {
			if (listOfPrintedEncounters[encounterIndex] == name && listOfPrintedEncounters[encounterIndex] != "principal") {
				console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!Repeat offender detected! "+name+" has already been printed!!!!!! See here: "+listOfPrintedEncounters);
				cancelTab = true;
			}
		}
		//Set name and image
		var cssName = name;
		var img = name+".jpg";
		//Generate full name and check for completion crown
		for (z = 0; z < data.story.length; z++) {
			if (data.story[z].index == name) {
				//Disable male characters in vegetarian mode
				if (data.player.vegetarian == true) {
					if (data.story[z].gender == "male") {
						cancelTab = true;
					}
				}
				//Disable female characters in carnivore mode
				if (data.player.carnivore == true) {
					if (data.story[z].gender == "female") {
						cancelTab = true;
					}
				}
				tabIndex = z;
				if (text.includes(name)) {
					text = text.replace(name, data.story[z].fName);
				}
				var cssColor = data.story[z].color;
				if (data.story[z].textEvent.includes("reward") || data.story[z].textEvent.includes("Reward")) {
					cssColor = "#FFFFFF";
					crown = "♔";
					altName = crown + " " + data.story[z].fName + " " + data.story[z].lName + " " + crown;
				}
				if (checkFlag(data.story[z].index, "complete") == true) {
					cssColor = "#FFFFFF";
					crown = "♔";
					altName = crown + " " + data.story[z].fName + " " + data.story[z].lName + " " + crown;
				}
				if (data.story[z].encounter == true) {
					cancelTab = true;
				}
			}
		}
		//If the player is on the map and the mega easy cheat isn't active
		if (checkTrust(name) == 0 && data.player.location == "map" && checkFlag("mom", "megaEasy") == false) {
			cancelTab = true;
		}
		//Generate status
		switch (true) {
			case (data.story[tabIndex].trust > 99): {
				tabTrust = "<span class='love'>Love</span>";
				break;
			}
			case (data.story[tabIndex].trust > 79): {
				tabTrust = "<span class='trusting'>Trusting</span>";
				break;
			}
			case (data.story[tabIndex].trust > 59): {
				tabTrust = "<span class='friendly'>Friendly</span>";
				break;
			}
			case (data.story[tabIndex].trust > 39): {
				tabTrust = "<span class='relaxed'>Relaxed</span></span>";
				break;
			}
			case (data.story[tabIndex].trust > 19): {
				tabTrust = "<span class='wary'>Wary</span>";
				break;
			}
		}
		//Generate complete status
		if (crown == "♔") {
			tabTrust = "<span class='love'>Complete!</span>";
		}
		//Error checking
		var checkForError = "";
		if (altImage == undefined) {
			altImage = "";
		}
		if (altName == undefined) {
			altName = "";
		}
		if (altImage != "") {
			img = altImage
		}
		//Code to allow for beach and casino scenes to not appear on map
		if (scene.includes("Beach")==true) {
			if (data.player.location != "beach") {
				cancelTab = true;
			}
		}
		if (scene.includes("Casino")==true) {
			if (data.player.location != "casino") {
				cancelTab = true;
			}
		}
		//console.log(tabIndex);
		//console.log(cssColor);
		//If not cancelled, print the encounter via writeSpeech
		
		//console.debug("Printing "+name + scene+cancelTab+"!")
		if (cancelTab != true) {
			listOfPrintedEncounters.push(name);
			console.log("Now generating tab for " + name + ", linking to scene " + scene + " with the text " + text + " " +altImage);
			writeSpeech(name, img, `
				<p class="status"> Status: ` + tabTrust + `</p>	
				<p class="switch" onclick="loadEncounter('`+data.story[tabIndex].index+`', '`+scene+`')">` + replaceCodenames(text) + `</p>
			`, altName, cssColor
			);
		}
	}
}

function checkForEncounters() {
	encounterList = [];
	requestType = 'check';
	document.getElementById('output').innerHTML += `<div id="freshCharacters">`;
	document.getElementById('output').innerHTML += `<div id="completedCharacters">`;
	totalCharactersLoaded = 0;
	
	//Check for encounters in system.js
	var targetCheckFile = 'system';
	var filename = "scripts/characters/"+targetCheckFile+".js";
	//console.log('Attempting to load '+targetCheckFile+'.js to check for encounters');
	var fileref=document.createElement('script');
	fileref.setAttribute("src", filename);
	
	//Append new script file
	document.getElementsByTagName("head")[0].appendChild(fileref);
	
	//Delete script file afterwards
	var select = document.getElementsByTagName("head")[0];
	select.removeChild(select.lastChild);
	
	//Check for encounters in all characters in the data.story array
	for (storyChecker = 0; storyChecker < data.story.length; storyChecker++) {
		targetCheckFile = data.story[storyChecker].index;
		var filename = "scripts/characters/"+targetCheckFile+".js";
		
		//Create slot for new scripts file
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		
		fileref.onload = function() {
			totalCharactersLoaded += 1;
			console.log("Finished loading "+filename);
		}
		fileref.onerror = function() {
			totalCharactersLoaded += 1;
			writeText("Yo! A character with the codename "+data.story[storyChecker].index+" failed to load! This is pretty bad, tell noodle what's going on!");
		}
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
	
	emergencyTimeout = 0;
	setTimeout(encounterTabPrinterHelper, 50);
	
	/* Beheader script, removes all of the appended children from the head above
	for (beheader = 0; beheader < totalCharactersLoaded; beheader++) {
	//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
	*/
}

var emergencyTimeout = 0;
function encounterTabPrinterHelper() {
	console.log("Now attempting to print encounters. This is attempt number "+emergencyTimeout+", comparing data story length of "+data.story.length+" to characters loaded of "+totalCharactersLoaded+", current encounter list follows:");
	console.log(encounterList);
	if (emergencyTimeout <= 20) {
		if (totalCharactersLoaded == data.story.length) {
			for (loadIndex = 0; loadIndex < encounterList.length; loadIndex++) {
				printEncounterTabFollowup(encounterList[loadIndex].name, encounterList[loadIndex].scene, encounterList[loadIndex].text, encounterList[loadIndex].altImage, encounterList[loadIndex].altName);
			}
		}
		else {
			setTimeout(encounterTabPrinterHelper, 100*emergencyTimeout)
		}
	}
	else {
		writeText("ERROR! Something is causing your system to take too long to load the character javascript files! Try refreshing the game and if that doesn't work contact noodlejacuzzi!");
		console.error("FAILURE TO LOAD CHARACTERS AFTER BREAKING POINT");
	}
	emergencyTimeout += 1;
}

//Character Modification/Status Retrieval Functions
function raiseTrust(name, n) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			console.log('raising the trust of '+name+' by '+n);
			data.story[trustIndex].trust += n;
		}
	}
}

function setTrust(name, n) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			console.log('setting the trust of '+name+' to '+n);
			data.story[trustIndex].trust = n;
		}
	}
}

function checkTrust(name) {
	for (y = 0; y < data.story.length; y++) {
		if (data.story[y].index == name) {
			return data.story[y].trust;
		}
	}
	return 0;
}

function resetProgress(name) {
	for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
		if (data.story[trustIndex].index == name) {
			alert("Progress with "+data.story[trustIndex].fName+" has been reset. Hopefully this doesn't cause any issues!");
			console.log('setting the trust of '+name+' to 0');
			data.story[trustIndex].trust = 0;
			data.story[trustIndex].met = "";
			data.story[trustIndex].textHistory = "";
			data.story[trustIndex].encountered = false;
			data.story[trustIndex].textEvent = "";
		}
	}
}

function addFlag(character, flag) {
	console.log(character+flag);
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			if (data.story[flagIndex].met == false) {
				data.story[flagIndex].met = "";
			}
			if (checkFlag(character, flag) == true) {
				console.log('Flag rejected, '+flag+' already present for '+character);
			}
			else {
				console.log('adding the flag named '+flag+' to '+character);
				data.story[flagIndex].met += flag;
			}
		}
	}
}

function removeFlag(character, flag) {
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			if (data.story[flagIndex].met == false) {
				data.story[flagIndex].met = "";
			}
			if (data.story[flagIndex].met.includes(flag) == true) {
				console.log('Removing flag '+flag+' from '+character);
				data.story[flagIndex].met = data.story[flagIndex].met.replace(flag, "");
			}
			else {
				console.log('error! flag '+flag+' not found!');
			}
		}
	}
}

function checkFlag(character, flag) {
	for (flagIndex = 0; flagIndex < data.story.length; flagIndex++) {
		if (data.story[flagIndex].index == character) {
			if (data.story[flagIndex].met == false || data.story[flagIndex].met == true) {
				data.story[flagIndex].met = "";
			}
			if (data.story[flagIndex].met.includes(flag) == true) {
				return true;
			}
			else {
				return false;
			}
		}
	}
	return false;
}

function encounteredCheck(name) {
	for (e = 0; e < data.story.length; e++) {
		if (data.story[e].index == name) {
			if (data.story[e].encountered == true) {
				return true;
				break;
			}
			else {
				return false;
			}
		}
	}
}

function unencounter(name) {
	for (e = 0; e < data.story.length; e++) {
		if (data.story[e].index == name) {
			if (data.story[e].encountered == true) {
				data.story[e].encountered = false
				break;
			}
		}
	}
}

function renamePlayer() {
	data.player.name = document.getElementById('nameSubmission').value;
	loadEncounter("system", "prologue2");
}

function renamePlayerAlt() {
	data.player.name = document.getElementById('nameSubmission').value;
	changeLocation(data.player.location);
}

function renameEveryone() {
	for (i = 0; i < data.story.length; i++) {
		var sheet = 'nameSubmission' + i + '1';
		data.story[i].fName = document.getElementById(sheet).value;
		var sheet = 'nameSubmission' + i + '2';
		data.story[i].lName = document.getElementById(sheet).value;
	}
	changeLocation("playerHouse");
}

function renameNickname() {
	data.player.name = document.getElementById('nameSubmission').value;
	data.player.nickname = document.getElementById('nicknameSubmission').value;
	changeLocation(data.player.location);
}

//Text alteration functions
function replaceCodenames(text) {
	var codenameCheck = "";
	for (geminiLoop = 0; geminiLoop < 5; geminiLoop++) {
		for (codenameIndex = 0; codenameIndex < data.story.length; codenameIndex++) {
			if (data.story[codenameIndex].index == "bmom") {
				text = text.replace("bmomF", data.story[codenameIndex].fName);
				text = text.replace("bmomL", data.story[codenameIndex].lName);
			}
		}
		if (data.player.nickname != null) {
			text = text.replace('*Master', data.player.nickname);
			text = text.replace('*master', data.player.nickname);
		}
		text = text.replace('playerF', data.player.name);
		text = text.replace('playerGender', data.player.gender);
		text = text.replace('playerG', data.player.gender);
		text = text.replace('playerMan', data.player.gender);
		text = text.replace('playerTitle', data.player.title);
		text = text.replace('playerT', data.player.title);
		text = text.replace('playerMister', data.player.title);
		text = text.replace('playerHonorific', data.player.honorific);
		text = text.replace('playerH', data.player.honorific);
		text = text.replace('playerSir', data.player.honorific);
		switch (data.player.gender) {
			case "man": {
				text = text.replace("*he", "he");
				text = text.replace("*He", "He");
				text = text.replace("*HE", "HE");
				text = text.replace("*bastard", "bastard");
				text = text.replace("*Bastard", "Bastard");
				text = text.replace("*BASTARD", "BASTARD");
				text = text.replace("*his", "his");
				text = text.replace("*His", "His");
				text = text.replace("*HIS", "HIS");
				text = text.replace("*men", "men");
				text = text.replace("*Men", "Men");
				text = text.replace("*MEN", "MEN");
				text = text.replace("*man", "man");
				text = text.replace("*Man", "Man");
				text = text.replace("*MAN", "MAN");
				text = text.replace("*him", "him");
				text = text.replace("*Him", "Him");
				text = text.replace("*HIM", "HIM");
				text = text.replace("*boy", "boy");
				text = text.replace("*Boy", "Boy");
				text = text.replace("*BOY", "BOY");
				text = text.replace("*guy", "guy");
				text = text.replace("*Guy", "Guy");
				text = text.replace("*GUY", "GUY");
				text = text.replace("*mister", "mister");
				text = text.replace("*Mister", "Mister");
				text = text.replace("*MISTER", "MISTER");
				text = text.replace("*sir", "sir");
				text = text.replace("*Sir", "Sir");
				text = text.replace("*SIR", "SIR");
				text = text.replace("*male", "male");
				text = text.replace("*Male", "Male");
				text = text.replace("*MALE", "MALE");
				text = text.replace("*geezer", "geezer");
				text = text.replace("*Geezer", "Geezer");
				text = text.replace("*GEEZER", "GEEZER");
				text = text.replace("*master", "master");
				text = text.replace("*Master", "Master");
				text = text.replace("*MASTER", "MASTER");
				break;
			}
			case "woman": {
				text = text.replace("*he", "she");
				text = text.replace("*He", "She");
				text = text.replace("*HE", "SHE");
				text = text.replace("*bastard", "bitch");
				text = text.replace("*Bastard", "Bitch");
				text = text.replace("*BASTARD", "BITCH");
				text = text.replace("*his", "her");
				text = text.replace("*His", "Her");
				text = text.replace("*HIS", "HER");
				text = text.replace("*man", "woman");
				text = text.replace("*Man", "Woman");
				text = text.replace("*MAN", "WOMAN");
				text = text.replace("*men", "women");
				text = text.replace("*Men", "Women");
				text = text.replace("*MEN", "WOMEN");
				text = text.replace("*him", "her");
				text = text.replace("*Him", "Her");
				text = text.replace("*HIM", "HER");
				text = text.replace("*boy", "girl");
				text = text.replace("*Boy", "Girl");
				text = text.replace("*BOY", "GIRL");
				text = text.replace("*guy", "girl");
				text = text.replace("*Guy", "Girl");
				text = text.replace("*GUY", "GIRL");
				text = text.replace("*mister", "miss");
				text = text.replace("*Mister", "Miss");
				text = text.replace("*MISTER", "MISS");
				text = text.replace("*sir", "ma'am");
				text = text.replace("*Sir", "Ma'am");
				text = text.replace("*SIR", "MA'AM");
				text = text.replace("*male", "female");
				text = text.replace("*Male", "Female");
				text = text.replace("*MALE", "FEMALE");
				text = text.replace("*geezer", "hag");
				text = text.replace("*Geezer", "Hag");
				text = text.replace("*GEEZER", "HAG");
				text = text.replace("*master", "mistress");
				text = text.replace("*Master", "Mistress");
				text = text.replace("*MASTER", "Mistress");
				break;
			}
		}
		for (codenameIndex = 0; codenameIndex < data.story.length; codenameIndex++) {
			codenameCheck = data.story[codenameIndex].index + "F";
			text = text.replace(codenameCheck, data.story[codenameIndex].fName);
			codenameCheck = data.story[codenameIndex].index + "L";
			text = text.replace(codenameCheck, data.story[codenameIndex].lName);
		}
	}
	if (data.player.uwu == true && text.includes('onclick') == false) {
		for (uwuLoop = 0; uwuLoop < 30; uwuLoop++) {
			text = text.replace('<br>', "TESTTHING");
			text = text.replace('th', "d");
			text = text.replace('Th', "D");
			text = text.replace('what', "wat");
			text = text.replace('What', "Wat");
			text = text.replace('l', "w");
			text = text.replace('r', "w");
			text = text.replace('L', "W");
			text = text.replace('R', "W");
			text = text.replace('TESTTHING', "<br>");
		}
		switch (getRandomInt(15)) {
			case 0:
				text = text + " ♥w♥";
			break;
			case 1:
				text = text + " (˘ω˘)";
			break;
			case 2:
				text = text + " (U ᵕ U❁)";
			break;
			case 3:
				text = text + " ( ˊ.ᴗˋ )";
			break;
			case 4:
				text = text + " ( ͡o ꒳ ͡o )";
			break;
			case 5:
				text = text + " ( ´ω` )۶";
			break;
			case 6:
				text = text + " OwO";
			break;
			case 7:
				text = text + " (*ฅ́˘ฅ̀*)";
			break;
			case 8:
				text = text + " ( ͡o ᵕ ͡o )";
			break;
			case 9:
				text = text + " ✧･ﾟ: *✧･ﾟ♡*(ᵘʷᵘ)*♡･ﾟ✧*:･ﾟ✧";
			break;
			case 10:
				text = text + " ★⌒ヽ(˘꒳˘ *)";
			break;
			case 11:
				text = text + " (◕ ˬ ◕✿)";
			break;
			case 12:
				text = text + " (◕∇◕✿)";
			break;
			case 13:
				text = text + " (ꈍ ᴗ ꈍ✿)";
			break;
			case 14:
				text = text + " (◕‸ ◕✿) *pout*";
			break;
			case 15:
				text = text + " (≖ ︿ ≖ ✿)";
			break;
		}
	}
	text = text.replace('<spooky>', "<span style='font-family:spooky;'>");
	text = text.replace('</spooky>', "</span>");
	return text;
}

function checkRequirements(string) {
	//console.log("Now checking requirements of string "+string);
	var finalResult = true;
	while (string.includes("!location ") == true) {
		var check = string.split(`!location `).pop().split(`;`)[0];
		if (check.includes(data.player.location) == true) {
			finalResult = false;
		}
		string = string.replace(`!location `+check+`;`, ``);
	}
	while (string.includes("?location ") == true) {
		var check = string.split(`?location `).pop().split(`;`)[0];
		if (data.player.gps == true && data.player.location == "map") {
			//Do nothing
		}
		else {
			if (check.includes(data.player.location) != true) {
				finalResult = false;
			}
		}
		string = string.replace(`?location `+check+`;`, ``);
	}
	while (string.includes("!item ") == true) {
		var check = string.split(`!item `).pop().split(`;`)[0];
		if (checkItem(check) == true) {
			finalResult = false;
		}
		string = string.replace(`!item `+check+`;`, ``);
	}
	while (string.includes("?item ") == true) {
		var check = string.split(`?item `).pop().split(`;`)[0];
		if (checkItem(check) != true) {
			finalResult = false;
		}
		string = string.replace(`?item `+check+`;`, ``);
	}
	
	for (skillTarget = 0; skillTarget < data.skills.length; skillTarget++) {
		var corruptionTarget = data.skills[skillTarget].name;
		while (string.includes("?skill "+corruptionTarget) == true) {
			var check = string.split(`?skill `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkSkill(data.skills[skillTarget].name) < check) {
				finalResult = false;
			}
			string = string.replace(`?skill `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("!skill "+corruptionTarget) == true) {
			var check = string.split(`!skill `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkSkill(data.skills[skillTarget].name) >= check) {
				finalResult = false;
			}
			string = string.replace(`!skill `+corruptionTarget+` `+check+`;`, ``);
		}
	}
	if (string.includes("?skill") == true) {
		//Cleanup code to make sure no unknown skills are left
		finalResult = false;
	}
	
	while (string.includes("?money ") == true) {
		var check = string.split(`?money `).pop().split(`;`)[0];
		if (data.player.money < check) {
			finalResult = false;
		}
		string = string.replace(`?money `+check+`;`, ``);
	}
	while (string.includes("!money ") == true) {
		var check = string.split(`!money `).pop().split(`;`)[0];
		if (data.player.money >= check) {
			finalResult = false;
		}
		string = string.replace(`!hypnosis `+check+`;`, ``);
	}
	while (string.includes("?hypnosis ") == true) {
		var check = string.split(`?hypnosis `).pop().split(`;`)[0];
		if (checkSkill("hypnosis") < check) {
			finalResult = false;
		}
		string = string.replace(`?hypnosis `+check+`;`, ``);
	}
	while (string.includes("!hacking ") == true) {
		var check = string.split(`!hacking `).pop().split(`;`)[0];
		if (checkSkill("hacking") >= check) {
			finalResult = false;
		}
		string = string.replace(`!hacking `+check+`;`, ``);
	}
	while (string.includes("?hacking ") == true) {
		var check = string.split(`?hacking `).pop().split(`;`)[0];
		if (checkSkill("hacking") < check) {
			finalResult = false;
		}
		string = string.replace(`?hacking `+check+`;`, ``);
	}
	while (string.includes("!counseling ") == true) {
		var check = string.split(`!counseling `).pop().split(`;`)[0];
		if (checkSkill("counseling") >= check) {
			finalResult = false;
		}
		string = string.replace(`!counseling `+check+`;`, ``);
	}
	while (string.includes("?counseling ") == true) {
		var check = string.split(`?counseling `).pop().split(`;`)[0];
		if (checkSkill("counseling") < check) {
			finalResult = false;
		}
		string = string.replace(`?counseling `+check+`;`, ``);
	}
	while (string.includes("!time ") == true) {
		var check = string.split(`!time `).pop().split(`;`)[0];
		if (data.player.time == check) {
			finalResult = false;
		}
		string = string.replace(`!time `+check+`;`, ``);
	}
	while (string.includes("?time ") == true) {
		var check = string.split(`?time `).pop().split(`;`)[0];
		if (check.includes(data.player.time) != true) {
			finalResult = false;
		}
		string = string.replace(`?time `+check+`;`, ``);
	}
	while (string.includes("?flag player ") == true) {
		var check = string.split(`?flag player `).pop().split(`;`)[0];
		if (data.player.flags.includes(check) != true) {
			finalResult = false;
		}
		string = string.replace(`?flag player `+check+`;`, ``);
	}
	while (string.includes("!flag player ") == true) {
		var check = string.split(`!flag player `).pop().split(`;`)[0];
		if (data.player.flags.includes(check) == true) {
			finalResult = false;
		}
		string = string.replace(`!flag player `+check+`;`, ``);
	}
	while (string.includes("?ghosts ") == true) {
		var check = string.split(`?ghosts `).pop().split(`;`)[0];
		if (data.player.ghost != null) {
			if (countGhosts() < check) {
				finalResult = false;
			}
		}
		else {
			finalResult = false;
		}
		string = string.replace(`?ghosts `+check+`;`, ``);
	}
	while (string.includes("!ghosts ") == true) {
		var check = string.split(`!ghosts `).pop().split(`;`)[0];
		if (data.player.ghost != null) {
			if (countGhosts() >= check) {
				finalResult = false;
			}
		}
		else {
			finalResult = false;
		}
		string = string.replace(`!ghosts `+check+`;`, ``);
	}
	if (string.includes("?parity") == true) {
		var check = string.split(`?parity `).pop().split(`;`)[0];
		switch (check) {
			case "even": {
				if (data.player.day%2 == 1) {
					finalResult = false;
				}
				break;
			}
			case "odd": {
				if (data.player.day%2 == 0) {
					finalResult = false;
				}
				break;
			}
			default: {
				console.log("Error! Parity defined but an invalid parity used. BE sure to use either even or odd, and make sure you have a semicolon afterwards.");
			}
		}
	}
	while (string.includes("!mode") == true) {
		var check = string.split(`!mode `).pop().split(`;`)[0];
		switch (check) {
			case "carnivore": {
				if (data.player.carnivore == true) {
					finalResult = false;
				}
				break;
			}
			case "vegetarian": {
				if (data.player.vegetarian == true) {
					finalResult = false;
				}
				break;
			}
		}
		string = string.replace(`!mode `+check+`;`, ``);
	}
	while (string.includes("!gender") == true) {
		var check = string.split(`!gender `).pop().split(`;`)[0];
		switch (check) {
			case "male": {
				if (data.player.gender == "man") {
					finalResult = false;
				}
				break;
			}
			case "female": {
				if (data.player.gender == "woman") {
					finalResult = false;
				}
				break;
			}
			case "man": {
				if (data.player.gender == "man") {
					finalResult = false;
				}
				break;
			}
			case "woman": {
				if (data.player.gender == "woman") {
					finalResult = false;
				}
				break;
			}
			default: {
				console.log("Error! Parity defined but an invalid parity used. BE sure to use either even or odd, and make sure you have a semicolon afterwards.");
			}
		}
		string = string.replace(`!gender `+check+`;`, ``);
	}
	while (string.includes("?gender") == true) {
		var check = string.split(`?gender `).pop().split(`;`)[0];
		switch (check) {
			case "male": {
				if (data.player.gender == "woman") {
					finalResult = false;
				}
				break;
			}
			case "female": {
				if (data.player.gender == "man") {
					finalResult = false;
				}
				break;
			}
			case "man": {
				if (data.player.gender == "woman") {
					finalResult = false;
				}
				break;
			}
			case "woman": {
				if (data.player.gender == "man") {
					finalResult = false;
				}
				break;
			}
			default: {
				console.log("Error! Parity defined but an invalid parity used. BE sure to use either even or odd, and make sure you have a semicolon afterwards.");
			}
		}
		string = string.replace(`?gender `+check+`;`, ``);
	}
	var listOfCharacters = "";
	for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
		listOfCharacters += data.story[characterIndex].index;
		var corruptionTarget = data.story[characterIndex].index;
		while (string.includes("?trust "+corruptionTarget) == true) {
			var check = string.split(`?trust `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) != check) {
				finalResult = false;
			}
			string = string.replace(`?trust `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?minTrust "+corruptionTarget) == true) {
			var check = string.split(`?minTrust `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) < check) {
				finalResult = false;
			}
			string = string.replace(`?minTrust `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?maxTrust "+corruptionTarget) == true) {
			var check = string.split(`?maxTrust `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) > check) {
				finalResult = false;
			}
			string = string.replace(`?maxTrust `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?trustMin "+corruptionTarget) == true) {
			var check = string.split(`?trustMin `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) < check) {
				finalResult = false;
			}
			string = string.replace(`?trustMin `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?trustMax "+corruptionTarget) == true) {
			var check = string.split(`?trustMax `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkTrust(corruptionTarget) > check) {
				finalResult = false;
			}
			string = string.replace(`?trustMax `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("!flag "+corruptionTarget) == true) {
			var check = string.split(`!flag `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkFlag(corruptionTarget, check) == true) {
				finalResult = false;
			}
			string = string.replace(`!flag `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("?flag "+corruptionTarget) == true) {
			var check = string.split(`?flag `+corruptionTarget+` `).pop().split(`;`)[0];
			if (checkFlag(corruptionTarget, check) == false) {
				finalResult = false;
			}
			string = string.replace(`?flag `+corruptionTarget+` `+check+`;`, ``);
		}
	}
	if (string.includes("?trust ") || string.includes("?minTrust ") || string.includes("?trustMin ")|| string.includes("?flag ")) {
		//var check = string.split(`?flag`).pop().split(`;`)[0];
		//var check = string.split(` `).pop().split(` `)[0];
		//if (listOfCharacters.includes(check) == false) {} 
		finalResult = false
	}
	return finalResult;
}

function cullRequirements(string) {
	while (string.includes("!location ") == true) {
		var check = string.split(`!location `).pop().split(`;`)[0];
		string = string.replace(`!location `+check+`;`, ``);
	}
	while (string.includes("?location ") == true) {
		var check = string.split(`?location `).pop().split(`;`)[0];
		string = string.replace(`?location `+check+`;`, ``);
	}
	while (string.includes("!item ") == true) {
		var check = string.split(`!item `).pop().split(`;`)[0];
		string = string.replace(`!item `+check+`;`, ``);
	}
	while (string.includes("?item ") == true) {
		var check = string.split(`?item `).pop().split(`;`)[0];
		string = string.replace(`?item `+check+`;`, ``);
	}
	for (skillTarget = 0; skillTarget < data.skills.length; skillTarget++) {
		var corruptionTarget = data.skills[skillTarget].name;
		while (string.includes("?skill "+corruptionTarget) == true) {
			var check = string.split(`?skill `+corruptionTarget+` `).pop().split(`;`)[0];
			string = string.replace(`?skill `+corruptionTarget+` `+check+`;`, ``);
		}
		while (string.includes("!skill "+corruptionTarget) == true) {
			var check = string.split(`!skill `+corruptionTarget+` `).pop().split(`;`)[0];
			string = string.replace(`!skill `+corruptionTarget+` `+check+`;`, ``);
		}
	}
	if (string.includes("?skill") == true) {
		finalResult = false;
	}
	while (string.includes("!hypnosis ") == true) {
		var check = string.split(`!hypnosis `).pop().split(`;`)[0];
		string = string.replace(`!hypnosis `+check+`;`, ``);
	}
	while (string.includes("?hypnosis ") == true) {
		var check = string.split(`?hypnosis `).pop().split(`;`)[0];
		string = string.replace(`?hypnosis `+check+`;`, ``);
	}
	while (string.includes("!money ") == true) {
		var check = string.split(`!money `).pop().split(`;`)[0];
		string = string.replace(`!money `+check+`;`, ``);
	}
	while (string.includes("?money ") == true) {
		var check = string.split(`?money `).pop().split(`;`)[0];
		string = string.replace(`?money `+check+`;`, ``);
	}
	while (string.includes("!hacking ") == true) {
		var check = string.split(`!hacking `).pop().split(`;`)[0];
		string = string.replace(`!hacking `+check+`;`, ``);
	}
	while (string.includes("?hacking ") == true) {
		var check = string.split(`?hacking `).pop().split(`;`)[0];
		string = string.replace(`?hacking `+check+`;`, ``);
	}
	while (string.includes("!counseling ") == true) {
		var check = string.split(`!counseling `).pop().split(`;`)[0];
		string = string.replace(`!counseling `+check+`;`, ``);
	}
	while (string.includes("?counseling ") == true) {
		var check = string.split(`?counseling `).pop().split(`;`)[0];
		string = string.replace(`?counseling `+check+`;`, ``);
	}
	while (string.includes("!time ") == true) {
		var check = string.split(`!time `).pop().split(`;`)[0];
		string = string.replace(`!time `+check+`;`, ``);
	}
	while (string.includes("?time ") == true) {
		var check = string.split(`?time `).pop().split(`;`)[0];
		string = string.replace(`?time `+check+`;`, ``);
	}
	while (string.includes("?flag player ") == true) {
		var check = string.split(`?flag player `).pop().split(`;`)[0];
		string = string.replace(`?flag player `+check+`;`, ``);
	}
	while (string.includes("!flag player ") == true) {
		var check = string.split(`!flag player `).pop().split(`;`)[0];
		string = string.replace(`!flag player `+check+`;`, ``);
	}
	while (string.includes("?ghost ") == true) {
		var check = string.split(`?ghost `).pop().split(`;`)[0];
		string = string.replace(`?ghost `+check+`;`, ``);
	}
	while (string.includes("!ghost ") == true) {
		var check = string.split(`!ghost `).pop().split(`;`)[0];
		string = string.replace(`!ghost `+check+`;`, ``);
	}
	while (string.includes("?parity") == true) {
		var check = string.split(`?parity `).pop().split(`;`)[0];
		string = string.replace(`?parity `+check+`;`, ``);
	}
	while (string.includes("?gender") == true) {
		var check = string.split(`?gender `).pop().split(`;`)[0];
		string = string.replace(`?gender `+check+`;`, ``);
	}
	while (string.includes("!gender") == true) {
		var check = string.split(`!gender `).pop().split(`;`)[0];
		string = string.replace(`!gender `+check+`;`, ``);
	}
	while (string.includes("?trust ") == true) {
		var check = string.split(`?trust`).pop().split(`;`)[0];
		string = string.replace(`?trust`+check+`;`, ``);
	}
	while (string.includes("!trust ") == true) {
		var check = string.split(`!trust`).pop().split(`;`)[0];
		string = string.replace(`!trust`+check+`;`, ``);
	}
	while (string.includes("?trustMin ") == true) {
		var check = string.split(`?trustMin`).pop().split(`;`)[0];
		string = string.replace(`?trustMin`+check+`;`, ``);
	}
	while (string.includes("?trustMax ") == true) {
		var check = string.split(`?trustMax`).pop().split(`;`)[0];
		string = string.replace(`?trustMax`+check+`;`, ``);
	}
	while (string.includes("?flag ") == true) {
		var check = string.split(`?flag`).pop().split(`;`)[0];
		string = string.replace(`?flag`+check+`;`, ``);
	}
	while (string.includes("!flag ") == true) {
		var check = string.split(`!flag`).pop().split(`;`)[0];
		string = string.replace(`!flag`+check+`;`, ``);
	}
	return string;
}

//Scene Writing functions
function writeHTML(text) {
	//Separate the text into lines
	var lines = text.split('\n');
	//For each of these lines
	for(var lineCounter = 0;lineCounter < lines.length;lineCounter++){
		//Remove all tabs from the line, in case we use tab spacing
		while (lines[lineCounter].includes('\t') == true) {
			lines[lineCounter] = lines[lineCounter].replace(`\t`, ``);
		}
		while (lines[lineCounter].charAt(0) == " ") {
			lines[lineCounter] = lines[lineCounter].substring(1);
		}
		//If the line is not empty (we don't want to print empty lines)
		if (lines[lineCounter] != "") {
			//Grab the first word of the line to use as the command
			var command = lines[lineCounter].replace(/ .*/,'');
			//Depending on which command, execute different code. Convert the command to lowercase as well in case we used Sp instead of sp, as js is case-sensitive.
			if (command == "b") {
				writeText("<span style='color:red'>Warning! This is a depreciated shortcut! Please let noodle jacuzzi that the character "+character.index+" uses: '"+lines[lineCounter]+"'");
			}
			for (i = 0; i < definitionArray.length; i++) {
				if (command.toLowerCase() == definitionArray[i].shortcut) {
					lines[lineCounter] = lines[lineCounter].replace(definitionArray[i].shortcut, definitionArray[i].result);
				}
				//console.log("Shortcut replaced, line is now "+lines[lineCounter]);
			}
			for (i = 0; i < snippetArray.length; i++) {
				while (lines[lineCounter].includes(snippetArray[i].shortcut)) {
					lines[lineCounter] = lines[lineCounter].replace(snippetArray[i].shortcut, snippetArray[i].result);
				}
				//console.log("Shortcut replaced, line is now "+lines[lineCounter]);
			}
			var command = lines[lineCounter].replace(/ .*/,'');
			switch (command.toLowerCase()) {
				case "define": {
					//Remove the command from the line we actually want to print.
					var definitionShortcut = lines[lineCounter].split(`define `).pop().split(` = `)[0];
					lines[lineCounter] = lines[lineCounter].replace(`define `+definitionShortcut+` = `, ``);
					var definitionResult = lines[lineCounter];
					var overWrite = false;
					for (i = 0; i < definitionArray.length; i++) {
						if (definitionArray[i].shortcut == definitionShortcut) {
							overWrite = true;
							definitionArray[i].shortcut = definitionShortcut;
							definitionArray[i].result = definitionResult;
						}
					}
					if (overWrite == false) {
						var definition = {shortcut: definitionShortcut, result: definitionResult};
						definitionArray.push(definition);
					}
					console.log("Now writing definition statement, using shortcut "+definitionShortcut+" for result "+definitionResult+", overwrite value is "+overWrite);
					break;
				}
				case "snippet": {
					//Remove the command from the line we actually want to print.
					var definitionShortcut = lines[lineCounter].split(`snippet `).pop().split(` = `)[0];
					lines[lineCounter] = lines[lineCounter].replace(`snippet `+definitionShortcut+` = `, ``);
					var definitionResult = lines[lineCounter];
					var overWrite = false;
					for (i = 0; i < snippetArray.length; i++) {
						if (snippetArray[i].shortcut == definitionShortcut) {
							overWrite = true;
							snippetArray[i].shortcut = definitionShortcut;
							snippetArray[i].result = definitionResult;
						}
					}
					if (overWrite == false) {
						var definition = {shortcut: definitionShortcut, result: definitionResult};
						snippetArray.push(definition);
					}
					console.log("Now writing snippet, using shortcut "+definitionShortcut+" for result "+definitionResult+", overwrite value is "+overWrite);
					break;
				}
				//If the command is "t"
				case "t": {
					//Remove the command from the line we actually want to print.
					lines[lineCounter] = lines[lineCounter].replace(command+` `, ``);
					//Execute the writeText command to print everything left to the screen.
					if (checkRequirements(lines[lineCounter]) == true) {
						writeText(lines[lineCounter]);
					}
					//Don't execute any of the below switch cases.
					break;
				}
				case "sp": {
					//Get the name of our speaker
					var name = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
					//If "; altName" is in our code we want to use an alternate name for the character, so use that. Otherwise set the altName variable blank.
					if (lines[lineCounter].includes("; altName")) {
						var altName = lines[lineCounter].split(`altName `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`altName `+altName+`; `, ``);
					}
					else {
						var altName = "";
					}
					//If "; altColor" is in our code we want to specify a specific color for the character, so use that. Otherwise set the altColor variable blank.
					if (lines[lineCounter].includes("; altColor")) {
						var altColor = lines[lineCounter].split(`altColor `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`altColor `+altColor+`; `, ``);
					}
					else {
						var altColor = "";
					}
					//Remove the command from the line we actually want to print.
					lines[lineCounter] = lines[lineCounter].replace(command+` `+name+`; `, ``);
					//If "; im" is in our code we want to specify a specific profile image, so use that. Otherwise set the image variable blank so it can be automatically found.
					if (lines[lineCounter].includes("im ") && lines[lineCounter].includes(".jpg;") || lines[lineCounter].includes(".png;")) {
						var image = lines[lineCounter].substring(
							lines[lineCounter].indexOf("im ") + 3, 
							lines[lineCounter].indexOf("; ")
						);
						lines[lineCounter] = lines[lineCounter].replace(`im `+image+`; `, ``);
					}
					else {
						var image = "";
					}
					//Execute the writeSpeech command to print everything we have left.
					if (checkRequirements(lines[lineCounter]) == true) {
						if (activeWindow != "phone") {
							writeSpeech(name, image, cullRequirements(lines[lineCounter]), altName, altColor);
						}
						else {
							writePhoneSpeech(name, image, cullRequirements(lines[lineCounter]));
						}
					}
					break;
				}
				case "im": {
					//Get the location of the image
					var location = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
					//If "; cap" is in our code we want to attach a caption to our image. Otherwise leave the caption blank.
					if (lines[lineCounter].includes("; cap")) {
						var caption = lines[lineCounter].split(`cap `).pop().split(`;`)[0];
					}
					else {
						var caption = "";
					}
					//Bring up the image on screen. Since we aren't printing the line itself we don't need to clean it by removing commands.
					if (checkRequirements(lines[lineCounter]) == true) {
						if (activeWindow != "phone") {
							writeBig(location, caption);
						}
						else {
							writePhoneImage(location, caption);
						}
					}
					break;
				}
				case "trans": {
					//Get the label of our button
					var target = lines[lineCounter].split(`trans `).pop().split(`;`)[0];
					var name = lines[lineCounter].replace(`trans `+target+`;`, ``);
					//If "; arg" is in our code we want the function to have a special argument. Otherwise leave the argument section blank
					if (checkRequirements(lines[lineCounter]) == true) {
						if (lines[lineCounter].includes("name ") && lines[lineCounter].includes(";")) {
							name = lines[lineCounter].split(`name `).pop().split(`;`)[0];
						}
						else {
							name = cullRequirements(name);
						}
						if (activeWindow != "phone") {
							writeFunction("writeEncounter('"+target+"')", name);
						}
						else {
							writePhoneTrans(target, name);
						}
					}
					break;
				}
				case "cancel": {
					if (checkRequirements(lines[lineCounter]) == true) {
						writeFunction("writeEncounter('cancel')", "Go Back");
					}
					break;
				}
				case "finish": {
					if (checkRequirements(lines[lineCounter]) == true) {
						writeFunction("changeLocation(data.player.location)", "Finish");
					}
					break;
				}
				case "raisetrust": {
					var character = lines[lineCounter].split(`raiseTrust `).pop().split(`;`)[0];
					var trust = lines[lineCounter].replace(`raiseTrust `+character+`; `, ``);
					//console.debug("Trying to add "+trust+" to "+character+"'s trust value");
					while (trust.charAt(0) == " ") {
						trust = trust.substring(1);
					}
					if (checkRequirements(trust) == true) {
						trust = cullRequirements(trust);
						raiseTrust(character, parseInt(trust));
					}
					break;
				}
				case "addtrust": {
					var character = lines[lineCounter].split(`addTrust `).pop().split(`;`)[0];
					var trust = lines[lineCounter].replace(`addTrust `+character+`; `, ``);
					//console.debug("Trying to add "+trust+" to "+character+"'s trust value");
					while (trust.charAt(0) == " ") {
						trust = trust.substring(1);
					}
					if (checkRequirements(trust) == true) {
						trust = cullRequirements(trust);
						raiseTrust(character, parseInt(trust));
					}
					break;
				}
				case "settrust": {
					var character = lines[lineCounter].split(`setTrust `).pop().split(`;`)[0];
					var trust = lines[lineCounter].replace(`setTrust `+character+`; `, ``);
					//console.debug("Trying to add "+trust+" to "+character+"'s trust value");
					while (trust.charAt(0) == " ") {
						trust = trust.substring(1);
					}
					if (checkRequirements(trust) == true) {
						trust = cullRequirements(trust);
						setTrust(character, parseInt(trust));
					}
					break;
				}
				case "addflag": {
					var character = lines[lineCounter].split(`addFlag `).pop().split(`;`)[0];
					var flag = lines[lineCounter].replace(`addFlag `+character+`; `, ``);
					while (flag.charAt(0) == " ") {
						flag = flag.substring(1);
					}
					if (checkRequirements(flag) == true) {
						addFlag(character, cullRequirements(flag));
					}
					break;
				}
				case "removeflag": {
					var character = lines[lineCounter].split(`removeFlag `).pop().split(`;`)[0];
					var flag = lines[lineCounter].replace(`removeFlag `+character+`; `, ``);
					while (flag.charAt(0) == " ") {
						flag = flag.substring(1);
					}
					if (checkRequirements(flag) == true) {
						removeFlag(character, cullRequirements(flag));
					}
					break;
				}
				case "button": {
					//Get the label of our button
					var name = lines[lineCounter].split(`b `).pop().split(`;`)[0];
					//Get the function we want our button to perform
					var func = lines[lineCounter].split(`f `).pop().split(`;`)[0];
					//If "; arg" is in our code we want the function to have a special argument. Otherwise leave the argument section blank.
					if (lines[lineCounter].includes("; arg")) {
						var argument = lines[lineCounter].split(`arg `).pop().split(`;`)[0];
					}
					else {
						var argument = "";
					}
					//Write the button to the screen using the information we've collected.
					if (checkRequirements(lines[lineCounter]) == true) {
						writeFunction(func+"('"+argument+"')", cullRequirements(name))
					}
					break;
				}
				case "dual": {
					//dual sp1 miko; sp2 itako; im1 images/miko/miko.jpg; im2 images/itako/itako.jpg; altColor1 #A368A5; altColor2 #A34E32; Hello!
					if (checkRequirements(lines[lineCounter]) == true) {
						//Obtain the first name
						var name1 = lines[lineCounter].split(`sp1 `).pop().split(`;`)[0];
						//Obtain the second name
						var name2 = lines[lineCounter].split(`sp2 `).pop().split(`;`)[0];
						
						
						//Check for alternate images
						if (lines[lineCounter].includes("; im1")) {
							var altImage1 = lines[lineCounter].split(`im1 `).pop().split(`;`)[0];
							lines[lineCounter] = lines[lineCounter].replace(`im1 `+altImage1+`; `, ``);
						}
						else {
							var altImage1 = "";
						}
						if (lines[lineCounter].includes("; im2")) {
							var altImage2 = lines[lineCounter].split(`im2 `).pop().split(`;`)[0];
							lines[lineCounter] = lines[lineCounter].replace(`im2 `+altImage2+`; `, ``);
						}
						else {
							var altImage2 = "";
						}
						
						//Check for alternate colors
						if (lines[lineCounter].includes("; altColor1")) {
							var altColor1 = lines[lineCounter].split(`altColor1 `).pop().split(`;`)[0];
							lines[lineCounter] = lines[lineCounter].replace(`altColor1 `+altColor1+`; `, ``);
						}
						else {
							var altColor1 = "";
						}
						if (lines[lineCounter].includes("; altColor2")) {
							var altColor2 = lines[lineCounter].split(`altColor2 `).pop().split(`;`)[0];
							lines[lineCounter] = lines[lineCounter].replace(`altColor2 `+altColor2+`; `, ``);
						}
						else {
							var altColor2 = "";
						}
						
						//Remove the names, leaving only the line we want to print
						lines[lineCounter] = lines[lineCounter].replace(command+` sp1 `+name1+`; sp2 `+name2+`;`, ``);
						
						writeDual(name1, altImage1, name2, altImage2, cullRequirements(lines[lineCounter]), altColor1, altColor2);
					}
					break;
				}
				case "bar": {
					//bar Fitness; im images/neet/gymT.png; progress 41; maximum 100;
					if (checkRequirements(lines[lineCounter]) == true) {
						var title = lines[lineCounter].split(command+` `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`bar `+title+`; `, ``);
						
						var img = lines[lineCounter].split(`im `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`im `+img+`; `, ``);
						
						var progress = lines[lineCounter].split(`progress `).pop().split(`;`)[0];
						lines[lineCounter] = lines[lineCounter].replace(`progress `+progress+`; `, ``);
						
						if (lines[lineCounter].includes("maximum ")) {
							var maximum = lines[lineCounter].split(`maximum `).pop().split(`;`)[0];
							lines[lineCounter] = lines[lineCounter].replace(`maximum `+maximum+`; `, ``);
						}
						else {
							var maximum = 100
						}
						writeBar(img, title, progress, maximum);
					}
					break;
				}
				case "passtime": {
					if (checkRequirements(lines[lineCounter]) == true) {
						passTime();
					}
					break;
				}
				//This is for convenience. If the line is just an elipses, replace it with a horizontal line cutting across the screen.
				case "...": {
					writeText("<hr>");
					break;
				}
				//If the command isn't found in the list above then the code can't be parsed (understood), print an error code in red.
				default: {
					writeText("<span style='color:red'>Unknown command. The line '"+lines[lineCounter]+"' could not be parsed.");
				}
			}
		}
	}
}

//Scene Writing - Plain Text
function writeText (text) {
	if (text == "...") {
		text = "<hr>";
	}
	text = cullRequirements(text);
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
				<p class='lobotomyText'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "royalty": {
			document.getElementById('output').innerHTML += `
				<p class='lobotomyText'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		case "persona": {
			document.getElementById('output').innerHTML += `
				<p class='lobotomyText'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class='rawText'>` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

function writeCenteredText (text) {
	if (text == "...") {
		text = "<hr>";
	}
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText' style='
				margin: 30px 0;
				font-size: 1.3em;
				font-family: railway, times new roman, sans-serif;
				font-style: normal;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

function writeSpecial (text) {
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('output').innerHTML += `
				<p class='specialText' style='
				font-size: 1.3em;
				font-family: railway, times new roman, sans-serif;
				font-style: normal;
				'>` + replaceCodenames(text) + `</p>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class = "specialText">` + replaceCodenames(text) + `</p>
			`;
		}
	}
}

//Scene Writing - Dialogue
function writeSpeech (name, img, text, altName, altColor) {
	//Set up the location to print the character's speech to for sorting
	var outputTarget = "output";
	//Check if this is printing an encounter tab, and if so, if the character's complete to give them a crown.
	if (text.includes("loadEncounter") == true && text.includes("Status:") == true) {
		if (text.includes("Complete!") == true) {
			outputTarget = "completedCharacters";
		}
		else {
			outputTarget = "freshCharacters";
		}
	}
	//What is printed may not actually be the name and img declared above, so establish the final variables that are printed to the screen.
	var finalName = name;
	var finalImg = "";
	var finalColor = "#FFFFFF";
	//If the author is using a shortcut...
	var backupFinalImg = finalImg;
	if (img == "") {
		finalImg = "images/"+name+"/"+name+".jpg";
	}
	else {
		backupFinalImg = "images/"+name+"/"+name+".jpg";
		if (img.includes("images") != true && img.includes("scripts") != true) {
			finalImg = "images/"+name+"/"+img;
		}
		else {
			finalImg = img;
		}
	}
	//If the name is player, use the player's details
	if (name == "player") {
		finalImg = "scripts/gamefiles/profiles/" + data.player.character + ".jpg";
		backupFinalImg = "scripts/gamefiles/profiles/"+data.player.character+".jpg";
		finalName = data.player.name;
		switch (data.player.color) {
			case null:
			case "":
			data.player.color = "#86b4dc"
			default:
			finalColor = data.player.color;
		}
	}
	//Check if a pervert image should be used.
	if (data.player.pervert == true) {
		//If pervert mode is active, create a backup image of the character's default perverted image.
		backupFinalImg = backupFinalImg.replace('.jpg', 'P.jpg');
		finalImg = finalImg.replace('T.png', 'PT.png');
		finalImg = finalImg.replace('.jpg', 'P.jpg');
	}
	//Check if a transparent image should be used
	if (data.player.style == "persona" || data.player.style == "royalty" || data.player.style == "lobotomy") {
		//If transparent mode is active, create a backup image of the character's default transparent image.
		backupFinalImg = backupFinalImg.replace('.jpg', 'T.png');
		finalImg = finalImg.replace('.jpg', 'T.png');
		backupFinalImg = backupFinalImg.replace('.jpg', 'T.png');
	}
	//If the player is in carnivore mode, remove any perverted images from principal and incubus.
	if (data.player.carnivore == true) {
		finalImg = finalImg.replace("principalP", "principal");
		finalImg = finalImg.replace("incubusP", "incubus");
		finalImg = finalImg.replace("secretaryP", "secretary");
	}
	//Search the data variable for if an index was used in place of a proper name
	var checkIfIndexInStory = false;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			finalName = data.story[i].fName + ' ' + data.story[i].lName;
			finalColor = data.story[i].color;
			checkIfIndexInStory = true;
		}
	}
	var checkForError = `onerror ="javascript:this.src='`+backupFinalImg+`';"`;
	if (checkIfIndexInStory == false) {
		checkForError = `onerror ="javascript:this.src='images/none.png'"`;
	}
	if (img == "none") {
		finalImg = "images/none.png";
	}
	//HIDDEN shortcut for crypto to mask the name of the character
	if (text.includes("HIDDEN") == true) {
		finalName = "???";
		text = text.replace("HIDDEN", "");
	}
	//Check if an alternate final color should be used.
	if (altColor != null && altColor != "") {
		finalColor = altColor;
	}
	//Check if an alternate final name should be used.
	if (altName != null && altName != "") {
		finalName = altName;
	}
	if (name == "player") {
		backupFinalImg = backupFinalImg.replace('P.jpg', '.jpg');
		backupFinalImg = backupFinalImg.replace('PT.png', 'T.png');
		checkForError = `onerror ="javascript:this.src='`+backupFinalImg+`'"`;
		console.log("!!!!!!!!!"+backupFinalImg);
	}
	if (name == "ghost") {
		text = "<spooky>"+text+"</spooky>";
	}
	if (name == "nagatoro" && checkFlag("nagatoro", "blue") == true) {
		backupFinalImg = backupFinalImg.replace('images/nagatoro', 'images/nagatoroBlue');
		finalImg = finalImg.replace('images/nagatoro', 'images/nagatoroBlue');
	}
	if (data.player.egg == true && name == "player") {
		text = eggyLines[Math.floor(Math.random() * eggyLines.length)];
		finalImg = "scripts/gamefiles/profiles/egg.jpg";
	}
	console.info("Now printing "+finalName+" with the image "+finalImg+"");
	//Output the speech in the assigned style.
	switch (data.player.style) {
		case "lobotomy": {
			//old
			document.getElementById(outputTarget).innerHTML += `
			<div class="textBoxLobotomy" style="border-color: `+finalColor+`;">
				<div class = "lobotomyThumb" style="background-color: `+finalColor+`">
					<div class = "lobotomyThumbBorder">
						<img class = "textThumbLobotomy" src = "
							`+ finalImg +`
						"`+checkForError+`>
					</div>
				</div>
				<div class="textBoxContentLobotomy">
					<p class = "textNameLobotomy" style = "color:`+finalColor+`">`+ finalName + `</p>
					<p>` + replaceCodenames(text) + `</p>
				</div>
			<br>
			`;
			break;
		}
		case "royalty": {
			//old
			document.getElementById(outputTarget).innerHTML += `
			<div class="textBoxRoyalty">
				<div class = "royaltyThumb">
					<div class = "royaltyImageHolder">
						<img class = "textThumbRoyalty" style="
							position:absolute;
							-webkit-filter: drop-shadow(2px 2px 0 `+finalColor+`)
							drop-shadow(-2px -2px 0 `+finalColor+`);
							filter: drop-shadow(2px 2px 0 `+finalColor+`)
							drop-shadow(-5px -5px 0 `+finalColor+`);"
						src = "`+finalImg+`"`+checkForError+`>
						<img class = "textThumbRoyalty" src = "`+finalImg+`"`+checkForError+`>
					</div>
					<div class="nameBoxRoyalty" style = "border-color:`+finalColor+`;">
						<p class = "textNameRoyalty" style = "color:`+finalColor+`;">`+finalName+`</p>
					</div>
				</div>
				<div class="textBoxContentRoyalty">
					<div class="dialogueBoxRoyalty" style = "border-color:`+finalColor+`">
						<p>` + replaceCodenames(text) + `</p>
					</div>
				</div>
			<br>
			`;
			break;
		}
		case "persona": {
			document.getElementById(outputTarget).innerHTML += `
			<div class="textBoxPersona">
				<div class = "personaThumb" style = "box-shadow:0px 5px `+finalColor+`">
					<img class = "textThumbPersona" src = "`+finalImg+`"`+checkForError+`>
				</div>
				<div class="textBoxContentPersona">
					<div class="nameBoxPersona">
						<p class = "textNamePersona" style = "color:`+finalColor+`">`+ finalName + `</p>
						<div class="textNamePersonaWhite" style = "border-color:`+finalColor+`"></div>
						<div class="textNamePersonaBlack"></div>
						<div class="personaNameArrow"></div>
						<div class="personaNameArrowShadow" style = "border-right-color:`+finalColor+`"></div>
					</div>
					<div class="dialogueBoxPersona" style = "border-color:`+finalColor+`">
						<p>` + replaceCodenames(text) + `</p>
					</div>
				</div>
			<br>
			`;
			break;
		}
		default: {
			document.getElementById(outputTarget).innerHTML +=`
			<div class="textBox" style="border-color: `+finalColor+`">
				<img class = "textThumb" style="box-shadow: -5px 5px `+finalColor+`" src = "
					`+ finalImg +`
				"`+checkForError+`>
				<div class="textBoxContent">
				<p class = "textName" style="color:`+finalColor+`">`+ finalName + `</p>
				<p>` + replaceCodenames(text) + `</p>
			</div>
			<br>
			`;
		}
	}
}

function writeDual (name1, img1, name2, img2, text, altColor1, altColor2) { 
//Special function for writing speech of two characters
//Does not use a lot of the safety checks as writeSpeech!
	console.debug("Writing dual speech. Name1: "+name1+", image 1:"+img1+", Name2:"+name2+", image 2:"+img2+", text to print: "+text+", Alt color 1:"+altColor1+", Alt color 2:"+altColor2);
	var finalName1 = name1;
	var finalImg1 = img1;
	var finalColor1 = "";
	var checkForError1 = `onerror ="javascript:this.src='images/`+name1+`/`+name1+`.jpg'"`;
	var finalName2 = name2;
	var finalImg2 = img2;
	var finalColor2 = "";
	var checkForError2 = `onerror ="javascript:this.src='images/`+name2+`/`+name2+`.jpg'"`;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name1) {
			finalName1 = data.story[i].fName;
			finalColor1 = data.story[i].color;
			if (img1 == "") {
				finalImg1 = "images/"+name1+"/"+name1+".jpg";
			}
		}
		if (data.story[i].index == name2) {
			finalName2 = data.story[i].fName;
			finalColor2 = data.story[i].color;
			if (img2 == "") {
				finalImg2 = "images/"+name2+"/"+name2+".jpg";
			}
		}
	}
	if (data.player.pervert == true) {
		finalImg1 = finalImg1.replace('.jpg', 'P.jpg');
		finalImg2 = finalImg2.replace('.jpg', 'P.jpg');
	}
	if (name1 == "player") {
		finalImg1 = "scripts/gamefiles/profiles/" + data.player.character + ".jpg";
		finalName1 = data.player.name;
		finalColor1 = "#86b4dc";
	}
	if (name2 == "player") {
		finalImg2 = "scripts/gamefiles/profiles/" + data.player.character + ".jpg";
		finalName2 = data.player.name;
		finalColor2 = "#86b4dc";
	}
	if (data.player.style == "persona" || data.player.style == "royalty" || data.player.style == "lobotomy") {
		finalImg1 = finalImg1.replace('.jpg', 'T.png');
		finalImg2 = finalImg2.replace('.jpg', 'T.png');
	}
	if (altColor1 != null && altColor1 != "") {
		finalColor1 = altColor1;
	}
	if (altColor2 != null && altColor2 != "") {
		finalColor2 = altColor2;
	}
	switch (data.player.style) {
		case "lobotomy": {
			//old
			document.getElementById('output').innerHTML += `
			<div class="textBoxLobotomy" style="border-color: `+finalColor1+`;">
				<div class = "lobotomyThumb" style="background-color: `+finalColor1+`; margin-right: 10px; margin-left: 10px;">
					<div class = "lobotomyThumbBorder">
						<img class = "textThumbLobotomy" src = "
							`+ finalImg1 +`
						"`+checkForError1+`>
					</div>
				</div>
				<div class = "lobotomyThumb" style="background-color: `+finalColor2+`; margin-right: 10px; margin-left: 10px;">
					<div class = "lobotomyThumbBorder">
						<img class = "textThumbLobotomy" src = "
							`+ finalImg2 +`
						"`+checkForError2+`>
					</div>
				</div>
				<div class="textBoxContentLobotomy">
					<p class = "textNameLobotomy">
						<span style = "color:`+finalColor1+`">`+ finalName1 + `</span> 
						<span style = "color:#FFFFFF;">&</span> 
						<span style = "color:`+finalColor2+`">`+ finalName2 + `</span>
					</p>
					<p>` + replaceCodenames(text) + `</p>
				</div>
			<br>
			`;
			break;
		}
		case "royalty": {
			//old
			document.getElementById('output').innerHTML += `
			<div class="textBoxRoyalty">
				<div class = "royaltyThumb">
					<div class = "royaltyImageHolder">
						<img class = "textThumbRoyalty" style="
							position:absolute;
							-webkit-filter: drop-shadow(2px 2px 0 `+finalColor1+`)
							drop-shadow(-2px -2px 0 `+finalColor1+`);
							filter: drop-shadow(2px 2px 0 `+finalColor1+`)
							drop-shadow(-5px -5px 0 `+finalColor1+`);"
						src = "`+finalImg1+`"`+checkForError1+`>
						<img class = "textThumbRoyalty" src = "`+finalImg1+`"`+checkForError1+`>
					</div>
					<div class="nameBoxRoyalty" style = "border-color:`+finalColor1+`;">
						<p class = "textNameRoyalty">
							<span style = "color:`+finalColor1+`">`+ finalName1 + `</span> 
						</p>
					</div>
				</div>
				<div class = "royaltyThumb">
					<div class = "royaltyImageHolder">
						<img class = "textThumbRoyalty" style="
							position:absolute;
							-webkit-filter: drop-shadow(2px 2px 0 `+finalColor2+`)
							drop-shadow(-2px -2px 0 `+finalColor2+`);
							filter: drop-shadow(2px 2px 0 `+finalColor2+`)
							drop-shadow(-5px -5px 0 `+finalColor2+`);"
						src = "`+finalImg2+`"`+checkForError2+`>
						<img class = "textThumbRoyalty" src = "`+finalImg2+`"`+checkForError2+`>
					</div>
					<div class="nameBoxRoyalty" style = "border-color:`+finalColor2+`;">
						<p class = "textNameRoyalty">
							<span style = "color:`+finalColor2+`">`+ finalName2 + `</span> 
						</p>
					</div>
				</div>
				<div class="textBoxContentRoyalty">
					<div class="dialogueBoxRoyalty">
						<p>` + replaceCodenames(text) + `</p>
					</div>
				</div>
			<br>
			`;
			break;
		}
		case "persona": {
			document.getElementById('output').innerHTML += `
			<div class="textBoxPersona">
				<div class = "personaThumb" style = "box-shadow:0px 5px `+finalColor1+`; width: 325px;">
					<img class = "textThumbPersona" src = "`+finalImg1+`"`+checkForError1+`>
					<img class = "textThumbPersona" src = "`+finalImg2+`"`+checkForError2+`>
				</div>
				<div class="textBoxContentPersona">
					<div class="nameBoxPersona">
						<p class = "textNamePersona">
							<span style = "color:`+finalColor1+`">`+ finalName1 + `</span> 
							& 
							<span style = "color:`+finalColor2+`">`+ finalName2 + `</span>
						</p>
						<div class="textNamePersonaWhite" style = "border-color:`+finalColor1+`"></div>
						<div class="textNamePersonaBlack"></div>
						<div class="personaNameArrow"></div>
						<div class="personaNameArrowShadow" style = "border-right-color:`+finalColor1+`"></div>
					</div>
					<div class="dialogueBoxPersona" style = "border-color:`+finalColor2+`">
						<p>` + replaceCodenames(text) + `</p>
					</div>
				</div>
			<br>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML +=`
			<div class="textBox" style="border-color: `+finalColor1+`">
				<img class = "textThumb" style="box-shadow: -5px 5px `+finalColor1+`" src = "
					`+ finalImg1 +`
				"`+checkForError1+`>
				<img class = "textThumb" style="box-shadow: -5px 5px `+finalColor2+`" src = "
					`+ finalImg2 +`
				"`+checkForError2+`>
				<div class="textBoxContent">
				<p class = "textName">
					<span style = "color:`+finalColor1+`">`+ finalName1 + `</span> 
					& 
					<span style = "color:`+finalColor2+`">`+ finalName2 + `</span>
				</p>
				<p>` + replaceCodenames(text) + `</p>
			</div>
			<br>
			`;
		}
	}
}

//Scene Writing - Images
function writeBig (img, cap) {
	var writeBigAbort = false;
	if (data.player.blacklist.includes(img) == true) {
			writeBigAbort = true;
	}
	if (checkFlag("nagatoro", "blue") == true) {
		if (img.includes("images/nagatoro") == true) {
			img = img.replace("images/nagatoro", "images/nagatoroBlue");
		}
	}
	if (writeBigAbort == false) {
		if (cap == "") {
			if (character.artist != null) {
				cap = character.artist;
			}
		}
		if (img.includes('profile') == true) {
			if (data.player.pervert != true) {
				var checkForError = "";
				var pervertImage = img;
			}
			else {
				if (data.player.carnivore == true && img.includes("principal") || img.includes("incubus") || img.includes("secretary")) {
					//Empty space to signify that victoria and lily should not have pervert mode images in carnivore mode.
				}
				else {
					var backupImage = img;
					var checkForError = `onerror ="javascript:this.src='`+backupImage+`'"`;
					img = img.replace('profile', 'profileP');
					console.log(img);
				}
			}
		}
		if (img.includes("images") == false && img.includes("imagebox") == false && img.includes("scripts") == false) {
			img = "images/"+character.index+"/"+img;
		}
		if (imagesDisabled != true) {
			switch (data.player.style) {
				case "lobotomy": {
					var cssColor = "#CCCCCC";
					for (i = 0; i < data.story.length; i++) {
						if (img.includes(data.story[i].index) == true) {
							cssColor = data.story[i].color;
							break;
						}
					}
					document.getElementById('output').innerHTML += `
							<img class="bigPicture" style="border-color:`+cssColor+`; border-radius: 5px;"  id = "` + img + `" src="` + img + `"`+checkForError+` title="` + cap + `">
						<br>
					`;
					break;
				}
				case "persona": {
					var cssColor = "#CCCCCC";
					for (i = 0; i < data.story.length; i++) {
						if (img.includes(data.story[i].index) == true) {
							cssColor = data.story[i].color;
							break;
						}
					}
					document.getElementById('output').innerHTML += `
							<img class="bigPicture" style="border-color:`+cssColor+`; border-radius: 5px;"  id = "` + img + `" src="` + img + `"`+checkForError+` title="` + cap + `">
						<br>
					`;
					break;
				}
				default: {
					document.getElementById('output').innerHTML += `
						<img class="bigPicture" id = "` + img + `" src="` + img + `"`+checkForError+` title="` + cap + `">
						<br>
					`;
				}
			}
			if (data.player.blacklistMode == true) {
				document.getElementById('output').innerHTML += `
					<p class="choiceText" id = "` + img + `Button" onclick="blacklistImage('` + img + `')">
						Blacklist this image
					</p>
				`;
			}
		}
	}
}

function writeMed (img, cap) {
	if (img.includes('profile') == true) {
		if (data.player.pervert != true) {
			var checkForError = "";
			var pervertImage = img;
		}
		else {
			var backupImage = img;
			var checkForError = `onerror ="javascript:this.src='`+backupImage+`'"`;
			if (data.player.carnivore == true && name == "principal" || name == "incubus" || name == "secretary") {
				//Empty space to signify that victoria and lily should not have pervert mode images in carnivore mode.
			}
			else {
				img = img.replace('profile', 'profileP');
				console.log(img);
			}
		}
	}
	if (imagesDisabled != true) {
	document.getElementById('output').innerHTML += `
		<img class="medPicture" src="` + img + `"`+checkForError+` title="` + cap + `">
		<br>
	`;
	}
}

function writePorn() {
	console.log("Now generating porn for day ID" + data.player.dayID);
	var pornID = data.player.dayID - 1;
	if (data.player.carnivore == true) {
		pornID = 8;
	}
	document.getElementById('output').innerHTML = '';
	if (imagesDisabled != true) {
		document.getElementById('output').innerHTML += `
			<div id="wardrobeGrid" style="display:grid; grid-template-columns:auto auto auto;">
			</div>
		`;
		document.getElementById('wardrobeGrid').innerHTML += `
			<img class="bigPicture" id="porn`+pornID+`A" src="images/porn/` + pornID + `A.jpg"
			onclick="writeEncounter('porn`+pornID+`A')",
			onmouseover="wardrobeMouseOver('porn`+pornID+`A')"
			onmouseout="wardrobeMouseOut('porn`+pornID+`A')"
			style="filter:brightness(50%);">
		`;
		document.getElementById('wardrobeGrid').innerHTML += `
			<img class="bigPicture" id="porn`+pornID+`B" src="images/porn/` + pornID + `B.jpg"
			onclick="writeEncounter('porn`+pornID+`B')",
			onmouseover="wardrobeMouseOver('porn`+pornID+`B')"
			onmouseout="wardrobeMouseOut('porn`+pornID+`B')"
			style="filter:brightness(50%);">
		`;
		document.getElementById('wardrobeGrid').innerHTML += `
			<img class="bigPicture" id="porn`+pornID+`C" src="images/porn/` + pornID + `C.jpg"
			onclick="writeEncounter('porn`+pornID+`C')",
			onmouseover="wardrobeMouseOver('porn`+pornID+`C')"
			onmouseout="wardrobeMouseOut('porn`+pornID+`C')"
			style="filter:brightness(50%);">
		`;
	}
	else {
		writeText("The porn system is disabled without images.");
	}
}

//Scene Writing - Misc
function writeBar(img, title, progress, cap) {
	if (cap == null) {
		cap = 100;
	}
	document.getElementById('output').innerHTML += `
		<div class="textBox" style="border-bottom:none; padding:0px;">
			<img class = "textThumb" src = "
				`+img+`">
			<div class="textBoxContent">
				<p class = "textName" style = "margin:15px;">`+title+`</p>
				<div class="progressBar" style="background-color: #565656;border-radius: 13px;padding: 3px;">
					<div style="background-color: orange;width: `+progress+`%;height: 20px;border-radius: 10px;"></div>
				</div>
				<p class = "textName" style = "margin:15px;">`+progress+` / `+cap+`</p>
			</div>
		</div>
	`;
}

function writeFunction (name, func, color) {
	if (color == null) {
		color = "#FFFFFF";
	}
	switch (color) {
		case "blue":
			color = "#B7BDFF"
		break;
		case "red":
			color = "#FF0019"
		break;
		case "green":
			color = "#00FF1D"
		break;
	}
	switch (data.player.style) {
		case "lobotomy": {
			var skewNumber = getRandomInt(8);
			skewNumber -= 4;
			var borderNumber = getRandomInt(2) + 3;
			var rotationNumber = getRandomInt(2) -1;
			if (skewNumber >= 0) {
				skewNumber += getRandomInt(3);
			}
			if (skewNumber <= 0) {
				skewNumber -= getRandomInt(3);
			}
			var reverseSkew = skewNumber - skewNumber - skewNumber;
			var rotationReverse = rotationNumber - rotationNumber - rotationNumber;
			console.log('skewnumber is ' +skewNumber + ' rotationnumber is '+ rotationNumber);
			document.getElementById('output').innerHTML += `
			<div class="choiceFrameLobotomy" 
			style ="
				-moz-transform: skew(`+skewNumber+`deg, 0deg);
				-webkit-transform: skew(`+skewNumber+`deg, 0deg);
				-o-transform: skew(`+skewNumber+`deg, 0deg);
				-ms-transform: skew(`+skewNumber+`deg, 0deg);
				transform: skew(`+skewNumber+`deg, 0deg);
				border: solid `+borderNumber+`px `+color+`;
			">
			<p class="choiceTextLobotomy" 
			style ="
				-moz-transform: skew(`+reverseSkew+`deg, 0deg);
				-webkit-transform: skew(`+reverseSkew+`deg, 0deg);
				-o-transform: skew(`+reverseSkew+`deg, 0deg);
				-ms-transform: skew(`+reverseSkew+`deg, 0deg);
				transform: skew(`+reverseSkew+`deg, 0deg);
			" 
			onclick="` + name + `">
				` + replaceCodenames(func) + `
			</p>
			</div>
			`;
			break;
		}
		case "persona": {
			var skewNumber = 5;
			var reverseSkew = skewNumber - skewNumber - skewNumber;
			console.log('skewnumber is ' +skewNumber + ' rotationnumber is '+ rotationNumber);
			document.getElementById('output').innerHTML += `
			<div class="choiceFramePersona" onclick="` + name + `"
			style ="
				-moz-transform: skew(`+skewNumber+`deg, 0deg);
				-webkit-transform: skew(`+skewNumber+`deg, 0deg);
				-o-transform: skew(`+skewNumber+`deg, 0deg);
				-ms-transform: skew(`+skewNumber+`deg, 0deg);
				transform: skew(`+skewNumber+`deg, 0deg);
			">
			<p class="choiceTextPersona" 
			style ="
				-moz-transform: skew(`+reverseSkew+`deg, 0deg);
				-webkit-transform: skew(`+reverseSkew+`deg, 0deg);
				-o-transform: skew(`+reverseSkew+`deg, 0deg);
				-ms-transform: skew(`+reverseSkew+`deg, 0deg);
				transform: skew(`+reverseSkew+`deg, 0deg);
			" 
			>
				` + replaceCodenames(func) + `
			</p>
			</div>
			`;
			break;
		}
		default: {
			document.getElementById('output').innerHTML += `
				<p class="choiceText" onclick="` + name + `"
				style = "border-bottom: 3px solid `+color+`; color: `+color+`"
				>
					` + replaceCodenames(func) + `
				</p>
			`;
		}
	}
}

//Menu functions
function updateMenu() {
	//console.log(data.skills);
	document.getElementById('skillsList').innerHTML = "";
	//Code for legacy skills of hypnosis, hacking, and counseling
	if (checkSkill("hypnosis") < data.player.hypnosis) {
		setSkill("hypnosis", data.player.hypnosis)
	}
	if (data.player.hypnosis < checkSkill("hypnosis")) {
		data.player.hypnosis = checkSkill("hypnosis");
	}
	if (checkSkill("hacking") < data.player.hacking) {
		setSkill("hacking", data.player.hacking)
	}
	if (data.player.hacking < checkSkill("hacking")) {
		data.player.hacking = checkSkill("hacking");
	}
	if (checkSkill("counseling") < data.player.counseling) {
		setSkill("counseling", data.player.counseling)
	}
	if (data.player.counseling < checkSkill("counseling")) {
		data.player.counseling = checkSkill("counseling");
	}
	//Check the list of skills, and display all with scores above 0.
	for (beanCounter = 0; beanCounter < data.skills.length; beanCounter++) {
		if (data.skills[beanCounter].score > 0) {
			var skillName = data.skills[beanCounter].name.charAt(0).toUpperCase() + data.skills[beanCounter].name.slice(1);
			document.getElementById('skillsList').innerHTML += `<p class = "version">`+skillName+`: `+data.skills[beanCounter].score+`</p>`;
		}
	}
	
	
	var listOfApprovedCharacters = "joker, jokette";
	document.getElementById('playerName').innerHTML = data.player.name;
	if (data.player.pervert != true) {
		document.getElementById('playerName').style.color = "#86b4dc";
	}
	else {
		document.getElementById('playerName').style.color = "#fc53f1";
	}
	document.getElementById('playerMoney').innerHTML = "$" + data.player.money;
	document.getElementById('day').innerHTML = "Day " + data.player.day + " - " + data.player.time;
	var characterString = data.player.character;
	if (data.player.pervert == true) {
		characterString = characterString.replace("basil", "basilP");
	}
	document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+characterString+".jpg";
	document.getElementById('playerImage').title = data.player.characterArtist;
	switch (data.player.style) {
		case "lobotomy": {
			document.getElementById('title').style.fontFamily = "norwester, times new roman, sans-serif";
			document.getElementById('menu').style.fontFamily = "railway, times new roman, sans-serif";
			for (i = 0; i < menuButtons.length; i++) {
				document.getElementById(menuButtons[i].ID).innerHTML = menuButtons[i].name;
				document.getElementById(menuButtons[i].ID).style.borderRadius = "0px";
				document.getElementById(menuButtons[i].ID).style.border = "3px solid";
			}
			document.getElementById('playerImage').style.borderRadius = "0px";
			if (data.player.pervert != true) {
				document.getElementById('playerImage').style.borderColor = "#86b4dc";
			}
			else {
				document.getElementById('playerImage').style.borderColor = "#fc53f1";
			}
			console.log(data.player.style);
			break;
		}
		case "persona": {
			if (listOfApprovedCharacters.includes(data.player.character) == false) {
				if (data.player.gender == "man") {
					document.getElementById('playerImage').src = "scripts/gamefiles/characters/basicT.png";
				}
				else {
					if (data.player.pervert == true) {
						document.getElementById('playerImage').src = "scripts/gamefiles/characters/basilPT.png";
					}
					else {
						document.getElementById('playerImage').src = "scripts/gamefiles/characters/basilT.png";
					}
				}
			}
			else {
				document.getElementById('playerImage').src = "scripts/gamefiles/characters/"+data.player.character+"T.png";
			}
			for (menuCounter = 0; menuCounter < menuButtons.length; menuCounter++) {
				document.getElementById(menuButtons[menuCounter].ID).style.borderRadius = "0px";
				document.getElementById(menuButtons[menuCounter].ID).style.border = "3px solid";
				document.getElementById(menuButtons[menuCounter].ID).classList.add('personaMenuButton');
				var ransomStringStart = menuButtons[menuCounter].name;
				ransomStringStart = ransomStringStart.toLowerCase();
				ransomStringStart = ransomStringStart.charAt(0).toUpperCase() + ransomStringStart.slice(1);
				ransomStringStart = ransomStringStart.replace(" ", "Q");
				//console.log(ransomStringStart);
				var ransomStringEnd = "";
				if (ransomStringStart.charAt(2) == "g" || ransomStringStart.charAt(2) == "v") {
					for (var ransomCounter = 0; ransomCounter < ransomStringStart.length; ransomCounter++) {
						switch (ransomCounter) {
							case 0:
								var ransomFont = "font-family: norwester, times new roman, sans-serif;";
								var ransomBG = "background-color: #000;";
								var ransomColor = "color: #fff;";
								var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
							break;
							case 1:
								var ransomFont = "font-family: railway, times new roman, sans-serif;";
								var ransomBG = "background-color: #fff;";
								var ransomColor = "color: #000;";
								var ransomRotate = "";
							break;
							case 2:
								var ransomFont = "font-family: times new roman, sans-serif;";
								var ransomBG = "background-color: #000;";
								var ransomColor = "color: #fff;";
								var ransomRotate = "";
							break;
							case 3:
								var ransomFont = "font-family: norwester, times new roman, sans-serif;";
								var ransomBG = "background-color: #fff;";
								var ransomColor = "color: #000;";
								var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
							break;
							case 4:
								var ransomFont = "font-family: railway, times new roman, sans-serif;";
								var ransomBG = "background-color: #000;";
								var ransomColor = "color: #fff;";
								var ransomRotate = "-webkit-transform: scale(1.4);";
							break;
							case 5:
								var ransomFont = "font-family: railway, times new roman, sans-serif;";
								var ransomBG = "background-color: #000;";
								var ransomColor = "color: #fff;";
								var ransomRotate = "-webkit-transform: rotate(15deg);";
							break;
							case 6:
								var ransomFont = "font-family: norwester, times new roman, sans-serif;";
								var ransomBG = "background-color: #000;";
								var ransomColor = "color: #fff;";
								var ransomRotate = "-webkit-transform: scale(1.4);";
							break;
							case 7:
								var ransomFont = "font-family: norwester, times new roman, sans-serif;";
								var ransomBG = "background-color: #000;";
								var ransomColor = "color: #fff;";
								var ransomRotate = "-webkit-transform: rotate(5deg);";
							break;
							case 10:
								var ransomFont = "font-family: norwester, times new roman, sans-serif;";
								var ransomBG = "background-color: #fff;";
								var ransomColor = "color: #000;";
								var ransomRotate = "";
							break;
							case 11:
								var ransomFont = "font-family: railway, times new roman, sans-serif;";
								var ransomBG = "background-color: #fff;";
								var ransomColor = "color: #000;";
								var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
							break;
							default:
								var ransomFont = "font-family: times new roman, sans-serif;";
								var ransomBG = "background-color: #000;";
								var ransomColor = "color: #fff;";
								var ransomRotate = "";
							break;
						}
						//console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
						//console.log(ransomStringEnd);
						if (ransomStringStart.charAt(ransomCounter) != "Q") {
							ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
						}
						else {
							ransomStringEnd += "<br>";
						}
					}
					if (checkFlag("mom", "personaOff")) {
						ransomStringEnd = menuButtons[menuCounter].name;
					}
					document.getElementById(menuButtons[menuCounter].ID).innerHTML = ransomStringEnd;
				}
				else {
					for (var ransomCounter = 0; ransomCounter < ransomStringStart.length; ransomCounter++) {
							switch (ransomCounter) {
								case 0:
									var ransomFont = "font-family: railway, times new roman, sans-serif;";
									var ransomBG = "background-color: #000;";
									var ransomColor = "color: #fff;";
									var ransomRotate = "";
								break;
								case 1:
									var ransomFont = "font-family: norwester, times new roman, sans-serif;";
									var ransomBG = "background-color: #fff;";
									var ransomColor = "color: #000;";
									var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
								break;
								case 2:
									var ransomFont = "font-family: times new roman, sans-serif;";
									var ransomBG = "background-color: #000;";
									var ransomColor = "color: #fff;";
									var ransomRotate = "-webkit-transform: scale(1.4);";
								break;
								case 3:
									var ransomFont = "font-family: norwester, times new roman, sans-serif;";
									var ransomBG = "background-color: #000;";
									var ransomColor = "color: #fff;";
									var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
								break;
								case 4:
									var ransomFont = "font-family: railway, times new roman, sans-serif;";
									var ransomBG = "background-color: #000;";
									var ransomColor = "color: #fff;";
									var ransomRotate = "-webkit-transform: rotate(15deg);";
								break;
								case 5:
									var ransomFont = "font-family: railway, times new roman, sans-serif;";
									var ransomBG = "background-color: #000;";
									var ransomColor = "color: #fff;";
									var ransomRotate = "";
								break;
								case 6:
									var ransomFont = "font-family: norwester, times new roman, sans-serif;";
									var ransomBG = "background-color: #000;";
									var ransomColor = "color: #fff;";
									var ransomRotate = "-webkit-transform: skew(5deg, 0deg);";
								break;
								case 7:
									var ransomFont = "font-family: norwester, times new roman, sans-serif;";
									var ransomBG = "background-color: #000;";
									var ransomColor = "color: #fff;";
									var ransomRotate = "-webkit-transform: rotate(-15deg);";
								break;
								case 10:
									var ransomFont = "font-family: norwester, times new roman, sans-serif;";
									var ransomBG = "background-color: #fff;";
									var ransomColor = "color: #000;";
									var ransomRotate = "";
								break;
								case 11:
									var ransomFont = "font-family: railway, times new roman, sans-serif;";
									var ransomBG = "background-color: #fff;";
									var ransomColor = "color: #000;";
									var ransomRotate = "-webkit-transform: skew(-5deg, 0deg);";
								break;
								default:
									var ransomFont = "font-family: times new roman, sans-serif;";
									var ransomBG = "background-color: #000;";
									var ransomColor = "color: #fff;";
									var ransomRotate = "";
								break;
							}
							//console.log('replacing menu character' + ransomCounter + ' with the style of ' + ransomFont+ransomBG+ransomColor);
							//console.log(ransomStringEnd);
							if (ransomStringStart.charAt(ransomCounter) != "Q") {
								ransomStringEnd += "<span style='display:inline-block;white-space:pre;"+ransomFont+ransomBG+ransomColor+ransomRotate+"'>"+ransomStringStart.charAt(ransomCounter)+"</span>";
							}
							else {
								ransomStringEnd += "<br>";
							}
						}
						if (checkFlag("mom", "personaOff")) {
							ransomStringEnd = menuButtons[menuCounter].name;
						}
						document.getElementById(menuButtons[menuCounter].ID).innerHTML = ransomStringEnd;
					}
				}
			document.getElementById('restartButton').style.color = "#ffffff";
			document.getElementById('title').style.fontFamily = "norwester, times new roman, sans-serif";
			document.getElementById('menu').style.fontFamily = "railway, times new roman, sans-serif";
			document.getElementById('playerImage').style.borderRadius = "0px";
			document.getElementById('playerImage').style.border = "0px";
			if (data.player.pervert != true) {
				document.getElementById('playerImage').style.borderColor = "#86b4dc";
			}
			else {
				document.getElementById('playerImage').style.borderColor = "#fc53f1";
			}
			//console.log(data.player.style);
			break;
		}
		case "royalty": {
			if (data.player.gender == "man") {
				document.getElementById('playerImage').src = "scripts/gamefiles/characters/basicT.png";
			}
			else {
				if (data.player.pervert == true) {
					document.getElementById('playerImage').src = "scripts/gamefiles/characters/basilPT.png";
				}
				else {
					document.getElementById('playerImage').src = "scripts/gamefiles/characters/basilT.png";
				}
			}
			for (i = 0; i < menuButtons.length; i++) {
				document.getElementById(menuButtons[i].ID).innerHTML = menuButtons[i].name;
				document.getElementById(menuButtons[i].ID).style.borderRadius = "0px";
				document.getElementById(menuButtons[i].ID).style.border = "3px solid";
				document.getElementById(menuButtons[i].ID).classList.add('personaMenuButton');
			}
			document.getElementById('title').style.fontFamily = "norwester, times new roman, sans-serif";
			document.getElementById('menu').style.fontFamily = "railway, times new roman, sans-serif";
			document.getElementById('playerImage').style.borderRadius = "0px";
			document.getElementById('playerImage').style.border = "0px";
			if (data.player.pervert != true) {
				document.getElementById('playerImage').style.borderColor = "#86b4dc";
			}
			else {
				document.getElementById('playerImage').style.borderColor = "#fc53f1";
			}
			//console.log(data.player.style);
			break;
		}
		default: {
			document.getElementById('title').style.fontFamily = "arial, sans-serif";
			document.getElementById('menu').style.fontFamily = "arial, sans-serif";
			//console.log(document.getElementById('title').style.fontFamily);
			for (i = 0; i < menuButtons.length; i++) {
				document.getElementById(menuButtons[i].ID).innerHTML = menuButtons[i].name;
				document.getElementById(menuButtons[i].ID).style.borderRadius = "5px";
				document.getElementById(menuButtons[i].ID).style.border = "none";
				document.getElementById(menuButtons[i].ID).style.borderBottom = "3px solid";
				document.getElementById(menuButtons[i].ID).classList.remove('personaMenuButton');
			}
			document.getElementById('restartButton').style.color = "#FF0000";
			document.getElementById('playerImage').style.borderRadius = "3px";
			document.getElementById('playerImage').style.borderColor = "#FFFFFF";
		}
	}
	if (data.player.egg == true) {
		document.getElementById('playerImage').src = "scripts/gamefiles/characters/egg.jpg";
	}
}

function closeButton() {
	document.getElementById("menu").style.width = "0px";	
	document.getElementById("closeButton").style.visibility = "hidden";	
	document.getElementById("openButton").style.visibility = "visible";	
}

function openButton() {
	document.getElementById("menu").style.width = "400px";	
	document.getElementById("closeButton").style.visibility = "visible";	
	document.getElementById("openButton").style.visibility = "hidden";	
}

//Player skill functions
function addSkill(name, n) {
	if (checkSkill("corruption") == 0 && checkFlag("mom", "corruptionExplained") == false) {
		setSkill("corruption", 5);
		addFlag("mom", "corruptionExplained");
		writeSpecial("Your corruption score has changed! Starting at 5, this stat changes when you do lewd things with particularly corrupt or pure individuals.");
	}
	var skillExists = false;
	for (i = 0; i < data.skills.length; i++) {
		if (name == data.skills[i].name.toLowerCase()) {
			skillExists = true;
			data.skills[i].score += n;
		}
		if (data.skills[i].score < 0) {
			data.skills[i].score = 0;
		}
	}
	if (skillExists == false) {
		var goof = {name: name, score: n};
		data.skills.push(goof);
	}
	if (name == "corruption" && checkSkill("corruption") > 9) {
		setSkill("corruption", 9);
	}
	//updateMenu();
}

function reduceSkill(name, n) {
	if (checkSkill("corruption") == 0 && checkFlag("mom", "corruptionExplained") == false) {
		setSkill("corruption", 5);
		addFlag("mom", "corruptionExplained");
		writeSpecial("Your corruption score has changed! Starting at 5, this stat changes when you do lewd things with particularly corrupt or pure individuals.");
	}
	var skillExists = false;
	for (i = 0; i < data.skills.length; i++) {
		if (name == data.skills[i].name.toLowerCase()) {
			skillExists = true;
			data.skills[i].score -= n;
		}
		if (data.skills[i].score < 0) {
			data.skills[i].score = 0;
		}
	}
	if (skillExists == false) {
		var goof = {name: name, score: n};
		data.skills.push(goof);
	}
	updateMenu();
}

function setSkill(name, n) {
	var skillExists = false;
	for (iskills = 0; iskills < data.skills.length; iskills++) {
		if (name == data.skills[iskills].name.toLowerCase()) {
			skillExists = true;
			data.skills[iskills].score = n;
		}
	}
	if (skillExists == false) {
		var goof = {name: name, score: n};
		data.skills.push(goof);
	}
	//updateMenu();
}

function checkSkill(name) {
	var skillExists = false;
	for (iskills = 0; iskills < data.skills.length; iskills++) {
		if (name == data.skills[iskills].name.toLowerCase()) {
			return data.skills[iskills].score;
		}
	}
	if (skillExists == false) {
		return 0;
	}
}

//Window functions such as inventory and phone
function deleteWindow() {
	activeWindow = "";
	document.getElementById('windowHolder').innerHTML = ``;
}

function generateWindow(type) {
	activeWindow = type;
	document.getElementById('windowHolder').innerHTML = `
	<div class = 'windowBackdrop' onclick = 'deleteWindow()'>
		<div id = 'window' class = 'popup' onclick="event.stopPropagation()"></div>
	</div>
	`;
	switch (type) {
		case "string": {
			document.getElementById('window').innerHTML += `
			<h1 class = "windowTitle" onclick="deleteWindow()">SAVE/LOAD</h1>
			<div id = "windowList" class="saveList">
			<p>Save data copied! It's been added to your clipboard, or you can manually copy the information below. Paste it into an email or a text document asap!</p>
			<textArea id = "copyData">`+JSON.stringify(data)+`</textArea>
			<p class="choiceText" onclick="generateWindow('save')">
				Finished copying
			</p>
			</div>`;
			var copyText = document.getElementById("copyData");
			
			
			
			copyText.select();
			copyText.setSelectionRange(0, 99999);
			document.execCommand("copy");
			break;
		}
		case "phoneSelection": {
			document.getElementById('window').innerHTML += `
				<h1 id = "windowTitle" class = "windowTitle" onclick="deleteWindow()">PHONE</h1>
				<div id = "phoneGridHolder" class="gridHolder" style="width: 100%; height: 80%;">
					<div id="phoneSelectionMenu" class="phoneSelectionMenu">
					</div>
				</div>
			`;
			var phoneList1 = [];
			var phoneList2 = [];
			for (i = 0; i < data.story.length; i++) {
				if (data.story[i].textEvent!= "") {
					var goof = {
						index: data.story[i].index, 
						fName: data.story[i].fName, 
						color: data.story[i].color, 
						textEvent: data.story[i].textEvent, 
						unreadText: data.story[i].unreadText,};
					if (goof.textEvent.includes("reward") || goof.textEvent.includes("Reward")) {
						phoneList2.push(goof);
					}
					else {
						phoneList1.push(goof);
					}
				}
			}
			logbookList = phoneList1.sort(compare);
			logbookList = phoneList2.sort(compare);

			
			document.getElementById('phoneSelectionMenu').innerHTML += `
				<div class = "textBox" style="border 3px solid #FFFFFF" onclick = "phoneImages()">
					<img class = "textThumb" src = "scripts/gamefiles/images/camera.png">
					<div class="textBoxContent">
						<span style = "color: #FFFFFF;" class = "selectionMenuText">Pictures</span>
					</div>
				</div>
			`;
			if (checkItem('Ghost AR') == true) {
				document.getElementById('phoneSelectionMenu').innerHTML += `
					<div class = "textBox" style="border 3px solid #FFFFFF" onclick = "ghostAR()">
						<img class = "textThumb" src = "images/ghosts/maudlin.png">
						<div class="textBoxContent">
							<span style = "color: #FFFFFF;" class = "selectionMenuText">Ghost AR</span>
						</div>
					</div>
				`;
			}
			if (data.player.pervert == true) {
				var P = "P";
			}
			else {
				var P = "";
			}
			for (i = 0; i < phoneList1.length; i++) {
				console.log(phoneList1);
				if (phoneList1[i].unreadText != false) {
					phoneList1[i].fName = "<b>!!!</b>"+phoneList1[i].fName+"<b>!!!</b>"
				}
				document.getElementById('phoneSelectionMenu').innerHTML += `
					<div class = "textBox" style="border: 3px solid `+phoneList1[i].color+`" onclick = "switchContact('`+phoneList1[i].index+`')">
						<img class = "textThumb" style = "border-color: `+phoneList1[i].color+`" src = "images/`+phoneList1[i].index+`/`+phoneList1[i].index+P+`.jpg">
						<div class="textBoxContent">
							<span style = "color: `+phoneList1[i].color+`;" class = "selectionMenuText">`+phoneList1[i].fName+`</span>
						</div>
					</div>
				`;
			}
			for (i = 0; i < phoneList2.length; i++) {
				document.getElementById('phoneSelectionMenu').innerHTML += `
					<div class = "textBox" style="border: 3px solid #FFFFFF" onclick = "switchContact('`+phoneList2[i].index+`')">
						<img class = "textThumb" src = "images/`+phoneList2[i].index+`/`+phoneList2[i].index+P+`.jpg">
						<div class="textBoxContent">
							<span style = "color: #FFFFFF;" class = "selectionMenuText">`+phoneList2[i].fName+`</span>
							<span style = "color: #FFFFFF;" class = "selectionMenuCrown">♔</span>
						</div>
					</div>
				`;
			}
			if (data.player.currentScene != "" && data.player.currentScene != "newDay") {
				generateWindow("warning");
			}
			break;
		}
		case "save": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">SAVE/LOAD</h1>
				<div id = "windowList" class="saveList">
				</div>
			`;
			document.getElementById('windowList').innerHTML += `
				<div class = "saveSlot">
					<p id = "save109Name" class = "saveName">Manual</p>
					<p id = "save109Button" class = "saveFileButton button" onclick = "saveTXT()">Save to .noodle file</p>
					<input type="file" id="loadFile" onload="fileLoaded()" class = "loadFileButton button" onchange = "loadSave()"></input>
				</div>
				<div class = "saveSlot">
					<p id = "save9Name" class = "saveName">String</p>
					<p id = "load9Button" class = "loadFileButton button" onclick = "loadFile()">Load from text string</p>
					<p id = "save9Button" class = "saveFileButton button" onclick = "saveFile()">Save to text string</p>
				</div>
				<div class = "saveSlot">
					<p id = "save9Name" class = "saveName">Auto</p>
					<p class = "loadFileButton button" onClick="window.location.reload();">The game autosaves regularly while cookies are enabled. Refresh the page to load the autosave anytime.</p>
				</div>
			`;
			for (saveCounter = 1; saveCounter < 9; saveCounter++) {
				document.getElementById('windowList').innerHTML += `
				<div class = "saveSlot">
					<p id = "save10`+saveCounter+`Name" class = "saveName">Slot `+saveCounter+`</p>
					<p id = "save10`+saveCounter+`Date" class = "saveDate"></p>
					<p id = "load10`+saveCounter+`Button" class = "loadButton button" onclick = "loadSlot(10`+saveCounter+`)"></p>
					<p id = "delete10`+saveCounter+`Button" class = "deleteButton button" onclick = "deleteSlot(10`+saveCounter+`)"></p>
					<p id = "save10`+saveCounter+`Button" class = "saveButton button" onclick = "saveSlot(10`+saveCounter+`)">SAVE</p>
				</div>
				`;
			}
			generateSave();
			break;
		}
		case "phone": {
			document.getElementById('window').innerHTML += `
				<h1 id = "windowTitle" class = "windowTitle" onclick="deleteWindow()">PHONE</h1>
			`;
			document.getElementById('window').innerHTML += `
				<div class = "logbookLeft" id = "phoneLeft">
				</div>
				<div class = "logbookRight" id = "phoneRight">
				</div>
			`;
			generateContacts();
			break;
		}
		case "inventory": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">Inventory</h1>
				<div id = "gridHolder" class="gridHolder" style="width: 100%; height: 100%;">
					<div id = "gridInventory" class="gridInventory">
					</div>
				</div>
			`;
			// Old Code
			/*
			for (i = 0; i < data.items.length; i++) {
				if (data.items[i].key == false) {
					document.getElementById('windowLeft').innerHTML += `
					<div class = "item">
						<p class = "itemName">`+data.items[i].name+`</p>
						<img class ="itemImage" src="`+data.items[i].image+`">
					<div>
					`;
				}
				else {
					document.getElementById('windowRight').innerHTML += `
					<div class = "item">
						<p class = "itemName">`+data.items[i].name+`</p>
						<img class ="itemImage" src="`+data.items[i].image+`">
					</div>
					`;
				}
			}
			*/
			//New Code
			for (i = 0; i < data.items.length; i++) {
				document.getElementById('gridInventory').innerHTML += `
				<div class = "item">
					<p class = "itemName">`+data.items[i].name+`</p>
					<img class ="itemImage" src="`+data.items[i].image+`">
				<div>
				`;
			}
			break;
		}
		case "logbook": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">LOGBOOK</h1>
				<div class = "logbookLeft" id = "logbookLeft">
				</div>
				<div class = "logbookRight" id = "logbookRight">
				</div>
			`;
			//generateNav();
			break;
		}
		case "achievements": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">ACHIEVEMENTS</h1>
				<div id = "logbookGridHolder" class="gridHolder" style="width: 100%; height: 80%;">
					<div id="achievements" class="hand"></div>
				</div>
			`;
			loadAchievements();
			//generateNav();
			break;
		}
		case "logbookSelection": {
			document.getElementById('window').innerHTML += `
				<h1 id = "windowTitle" class = "windowTitle" onclick="deleteWindow()">LOGBOOK</h1>
				<div id = "logbookGridHolder" class="gridHolder" style="width: 100%; height: 80%;">
					<div id="phoneSelectionMenu" class="phoneSelectionMenu">
					</div>
				</div>
			`;
			document.getElementById('phoneSelectionMenu').innerHTML += `
				<div class = "textBox" style="border 3px solid #FFFFFF" onclick = "generateWindow('achievements')">
					<img class = "textThumb" src = "scripts/gamefiles/images/trophy.png">
					<div class="textBoxContent">
						<span style = "color: #FFFFFF; font-size: 1.0rem;" class = "selectionMenuText">Achievements</span>
					</div>
				</div>
			`;

			var logbookList = [];
			for (i = 0; i < data.story.length; i++) {
				if (data.story[i].trust > 0 && data.story[i].index != "masseuse") {
					var goof = {index: data.story[i].index, fName: data.story[i].fName, color: data.story[i].color,};
					logbookList.push(goof);
				}
			}
			logbookList = logbookList.sort(compare);
			for (i = 0; i < logbookList.length; i++) {
				var fontSizeModifier = 1.5
				if (logbookList[i].fName.length > 9) {
					fontSizeModifier = 1.2
				}
				if (logbookList[i].fName == "Delinquent") {
					logbookList[i].fName = "Delinquents";
				}
				if (data.player.pervert == true) {
					var P = "P";
				}
				else {
					var P = "";
				}
				document.getElementById('phoneSelectionMenu').innerHTML += `
					<div class = "textBox" style="border: 3px solid `+logbookList[i].color+`" onclick = "generateNav('`+logbookList[i].index+`')">
						<img class = "textThumb" style="filter: drop-shadow(5px 2px `+logbookList[i].color+`)" src = "images/`+logbookList[i].index+`/`+logbookList[i].index+P+`T.png">
						<div class="textBoxContent">
							<span style = "color: `+logbookList[i].color+`; font-size: `+fontSizeModifier+`rem" class = "selectionMenuText">`+logbookList[i].fName+`</span>
						</div>
					</div>
				`;
			}
			break;
		}
		case "warning": {
			document.getElementById('window').innerHTML += `
				<h1 id = "windowTitle" class = "windowTitle" onclick="deleteWindow()">SORRY!</h1>
				<div id = "windowList" class="saveList">
				<p>You can't read entries in the logbook or check your texts while doing something else! Let's say your hands are busy, or something. Finish up and you can check your records.</p>
				</div>
			`;
			break;
		}
		case "settings": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">SETTINGS</h1>
				<div class = "saveSlot">
					<p id = "save9Name" class = "saveName">Note:</p>
					<p id = "settingsText" class = "settingsFileButton button">Changes are not applied until you change your location or speak to someone.</p>
				</div>
				<div class = "settingsSlot">
					<p class = "settingsName">Dialogue Style</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('dialogue', 'basic')">Basic</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('dialogue', 'lobotomy')">Lobotomy</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('dialogue', 'persona')">Persona</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('dialogue', 'royalty')">Royalty</p>
				</div>
				<div class = "settingsSlot">
					<p class = "settingsName">Images</p>
					<p class = "settingsFileButton button" onclick = "disablePictures()">Toggle images</p>
				</div>
			`;
			/*
				<div class = "settingsSlot">
					<p class = "settingsName">Style</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('all', 'basic')">Basic</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('all', 'lobotomy')">Lobotomy</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('all', 'persona')">Persona</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('all', 'royalty')">Royalty</p>
				</div>
				<div class = "settingsSlot">
					<p class = "settingsName">Menu Style</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('menu', 'basic')">Basic</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('menu', 'lobotomy')">Lobotomy</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('menu', 'persona')">Persona</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('menu', 'royalty')">Royalty</p>
				</div>
				<div class = "settingsSlot">
					<p class = "settingsName">Choice Style</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('choice', 'basic')">Basic</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('choice', 'lobotomy')">Lobotomy</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('choice', 'persona')">Persona</p>
					<p class = "settingsFileButton button" onclick = "changeStyle('choice', 'royalty')">Royalty</p>
				</div>
			*/
			break;
		}
		case "wardrobe": {
			document.getElementById('window').innerHTML += `
				<h1 class = "windowTitle" onclick="deleteWindow()">WARDROBE</h1>
				<div id = "gridInventory" class="gridInventory">
				</div>
			`;
			var playerBody = data.player.body.charAt(0).toUpperCase() + data.player.body.substring(1);
			for (i = 0; i < data.inventory.length; i++) {
				if (data.inventory[i].type.includes("clothes") && data.inventory[i].type.includes(playerBody)) {
					document.getElementById('gridInventory').innerHTML += `
					<div class = "item" onclick="changeClothes('`+data.inventory[i].index+`')">
						<p class = "itemName">`+data.inventory[i].name+`</p>
						<img class ="itemImage" src="`+data.inventory[i].image+`">
					<div>
					`;
				};
			};
			break;
		}
	}
}

//Saving And Save Data Modification
function saveSlot(slot) {
	var saveName = "data" + slot;
	localStorage.setItem(saveName,JSON.stringify(data));
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
	saveName = "date" + slot;
	localStorage.setItem(saveName,date);
	generateSave();
}

function deleteSlot(slot) {
	var saveName = "data" + slot;
	localStorage.removeItem(saveName);
	console.log("Saved data");
	saveName = "date" + slot;
	localStorage.removeItem(saveName);
	generateSave();
}

function loadSlot(slot) {
	saveName = "data" + slot;
	data = localStorage.getItem(saveName);
	data = JSON.parse(data);
	console.log("loaded data");
	updateSave();
	if (data.player.location != "") {
		changeLocation(data.player.location);
	}
	else {
		loadEncounter('system', 'start');
	}
	//sceneTransition(data.player.currentScene);
	//This is a function for catching repeats in the data.story variable.
	//Go through each character in the data variable
	for (layer1 = 0; layer1 < data.story.length; layer1++) {
		//
		var counter = 0;
		var index = data.story[layer1].index;
		//Go through each character in the data variable again to compare names of layer2 to layer1
		for (layer2 = 0; layer2 < data.story.length; layer2++) {
			if (index == data.story[layer2].index) {
				counter += 1;
				if (counter > 1) {
					console.log('duplicate character found in data variable, removing '+index);
					data.story.splice(layer2, 1);
					console.log(data);
				}
			}
		}
	}
	deleteWindow();
	document.getElementById('phoneButton').style.color = "#CCCCCC";
	document.getElementById('logButton').style.color = "#CCCCCC";
}

function saveFile(){
	deleteWindow();
	generateWindow("string");
}

function loadFile(){
	document.body.innerHTML += `
		<div id="loadFileContainer" style="
		position:absolute; z-index:2;
		border: 3px solid #f1f1f1; 
		border-top-left-radius: 4px; 
		border-top-right-radius: 4px;
		left:30vw;
		top:35vh;
		height:45vh;
		width:40vw;
		background-color: black;
		color: white;
		 text-align: center;
		">
			<p>Paste your data in this box:</p>
			<input type='text' id='loadFileEntry' value=''>
			<br><br>
			<button onclick="loadFileCont()"
			style="
				background-color: #4CAF50;
				border: none;
				color: white;
				padding: 15px 32px;
				text-align: center;
				text-decoration: none;
				display: inline-block;
				font-size: 16px;
				margin: 4px 2px;
				cursor: pointer;
			">Load Data</button>
			<button onclick="cancelLoad()"
			style="
				background-color: #4CAF50;
				border: none;
				color: white;
				padding: 15px 32px;
				text-align: center;
				text-decoration: none;
				display: inline-block;
				font-size: 16px;
				margin: 4px 2px;
				cursor: pointer;
			">Cancel</button>
		</div>
	`;
}

function loadFileCont() {
	//data = prompt("Please paste the data", "");
	if (document.getElementById('loadFileEntry').value == "" ||document.getElementById('loadFileEntry').value == null) {
		alert("The text box is empty?!")
	}
	else {
		var goof = document.getElementById('loadFileEntry').value;
		data = JSON.parse(goof);
		console.log(data);
		saveSlot(110);
		loadSlot(110);
		if (data.player.name == null) {
			alert("Invalid pasted data! If we tried to use this, the game would completely break!");
			loadSlot(111);
		}
		else {
			saveSlot(110);
			loadSlot(110);
		}
		updateSave();
	}
	cancelLoad()
}

function cancelLoad() {
	document.getElementById('loadFileContainer').remove();
}

function saveTXT() {
	addFlag("mom", "backup");
	checkForAchievements();
	var date = new Date();
	date = date.toDateString() + " " + date.toLocaleTimeString();
    var textFileAsBlob = new Blob([JSON.stringify(data)], {type:'text/plain'});
    var downloadLink = document.createElement("a");
    downloadLink.download = "HU "+date+".noodle";
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

const fr = new FileReader();
fr.addEventListener("load", fileLoaded);

function loadSave(){
    files = document.getElementById('loadFile').files;
    if(files.length == 0)
        return;
    file = files[0];
    fr.readAsText(file);
}
function fileLoaded(){
    console.log(fr.result);
	var fakedata = fr.result;
	fakedata = JSON.parse(fakedata);
	if (fakedata.player.hypnosis == null) {
		alert("Whoa there! I don't think that's a Hentai University save file! If it is, be sure to let me (Noodlejacuzzi) know and I'll help you out.");
	}
	else {
		data = fakedata;
		updateSave();
		changeLocation(data.player.location);
	}
	document.getElementById('loadFile').value = '';
}

function generateSave() {
	if (activeWindow == "save") {
	for (i = 101; i < 109; i++) {
		var searchName = 'data' + i;
		if(localStorage.getItem(searchName)) {
			var buttonName = 'load' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "LOAD";
			var buttonName = 'delete' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "DELETE";
			var buttonName = 'save' + i + 'Date';
			var dateName = 'date' + i;
			document.getElementById(buttonName).innerHTML = localStorage.getItem(dateName);
		}
		else {
			var buttonName = 'load' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "";
			var buttonName = 'delete' + i + 'Button';
			document.getElementById(buttonName).innerHTML = "";
			var buttonName = 'save' + i + 'Date';
			document.getElementById(buttonName).innerHTML = "";
		}
	}
	}
}

function updateSave() {
	//Outdated function used for save data updating before core character function
	console.log("checking for updates...");
	switch(data.player.version) {
		case undefined: {
			console.log('version 1 detected, updating save');
			data.player.version = 2;
			data.story[5] = {index: "maid", met: false, fName: "Lena", lName: "Rogers", trust: 0, encountered: false, textEvent: "",};
			data.story[6] = {index: "mistress", met: false, fName: "Anna", lName: "Fletcher", trust: 0, encountered: false, textEvent: "",};
			data.story[7] = {index: "meji", met: false, fName: "Reese", lName: "Kieran", trust: 0, encountered: false, textEvent: "",};
			data.story[8] = {index: "principal", met: false, fName: "Victoria", lName: "Devons", trust: 0, encountered: false, textEvent: "",};
			data.story[9] = {index: "secretary", met: false, fName: "Lisa", lName: "Jones", trust: 0, encountered: false, textEvent: "",};
			data.story[10] = {index: "neet", met: false, fName: "Tia", lName: "Sun", trust: 0, encountered: false, textEvent: "",};
			data.story[11] = {index: "scarf", met: false, fName: "Casandra", lName: "Hamilton", trust: 0, encountered: false, textEvent: "",};
			data.story[12] = {index: "green", met: false, fName: "Emma", lName: "Hamilton", trust: 0, encountered: false, textEvent: "",};
		}
		case 2: {
			console.log('version 2 detected, updating save');
			data.player.version = 3;
			data.player.title = "man";
			data.player.title = "Mister";
			data.player.honorific = "sir";
		}
		case 3: {
			console.log('version 3 detected, updating save');
			data.player.version = 4;
			alert('older save version detected! Moving you to back to your house. Feel free to restart if needed.');
			data.player.location = 'playerHouse';
			data.story[0].color = "#CCCCCC";
			data.story[1].color = "#fde1a5";
			data.story[2].color = "#a79e9a";
			data.story[3].color = "#cb86ef";
			data.story[4].color = "#da924b";
			data.story[5].color = "#CCCCCC";
			data.story[6].color = "#ed9082";
			data.story[7].color = "#7e52a3";
			data.story[8].color = "#e47311";
			data.story[9].color = "#888888";
			data.story[10].color = "#da924b";
			data.story[11].color = "#954655";
			data.story[12].color = "#677b4c";
		}
		case 4: {
			console.log('version 4 detected, updating save');
			data.player.version = 5;
			var goof = {index: "succubus", fName: "Gou", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#BF76DF", author: "NoodleJacuzzi", artist: "Gujira"};
			data.story.push(goof);
			goof = {index: "nurse", fName: "Justine", lName: "Walton", trust: 0, encountered: false, textEvent: "", met: false, color: "#8D756B", author: "NoodleJacuzzi", artist: "Oreteki18kin"};
			data.story.push(goof);
			console.log(data.story);
		}
		case 5: {
			console.log('version 5 detected, updating save');
			data.player.version = 6;
			var goof = {index: "housekeep", fName: "Anri", lName: "Ramona", trust: 0, encountered: false, textEvent: "", met: false, color: "#df5877", author: "CryptoGreek", artist: "Kinta no Mousou"};
			data.story.push(goof);
			console.log(data.story);
		}
		case 6: {
			console.log('version 6 detected, updating save');
			data.player.version = 7;
			var loadZoe = true
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "sports") {
					//console.log('sports found already in the data variable, aborting function');
					var loadZoe = false
				}
			}
			if (loadZoe == true) {
				var goof = {index: "sports", fName: "Zoe", lName: "Parker", trust: 0, encountered: false, textEvent: "", met: false, color: "#496EBF", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false};
				data.story.push(goof);
				var goof = {index: "swimmer", fName: "Naomi", lName: "Greens", trust: 0, encountered: false, textEvent: "", met: false, color: "#8DB7D0", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false};
				data.story.push(goof);
				var goof = {index: "orange", fName: "Vanessa", lName: "Lions", trust: 0, encountered: false, textEvent: "", met: false, color: "#BA5B17", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false};
				data.story.push(goof);
				var goof = {index: "cold", fName: "Kelsey", lName: "Lowe", trust: 0, encountered: false, textEvent: "", met: false, color: "#FCFFFA", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false};
				data.story.push(goof);
				var goof = {index: "coach", fName: "Amy", lName: "Silver", trust: 0, encountered: false, textEvent: "", met: false, color: "#D7BB2E", author: "Slackersavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false};
				data.story.push(goof);
				writeSpecial("Characters by mod author SlackerSavior have been added to the game!");
			}
			var goof = {index: "haze", fName: "Sienna", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#F683C8", author: "CryptoGreek", artist: "Purple Haze", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "nikki", fName: "Nikki", lName: "Hunt", trust: 0, encountered: false, textEvent: "", met: false, color: "#445B6D", author: "CryptoGreek", artist: "Kinta no Mousou", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "cafedark", fName: "Mia", lName: "Grey", trust: 0, encountered: false, textEvent: "", met: false, color: "#83E4B7", author: "CryptoGreek", artist: "Kinta no Mousou", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "incubus", fName: "Lily", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#FFF6BD", author: "NoodleJacuzzi", artist: "Gujira 4 Gou", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "president", fName: "Madison", lName: "Moore", trust: 0, encountered: false, textEvent: "", met: false, color: "#AD7961", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "treasurer", fName: "Abigail", lName: "Adams", trust: 0, encountered: false, textEvent: "", met: false, color: "#CFA18A", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "ojou", fName: "Olivia", lName: "Wright", trust: 0, encountered: false, textEvent: "", met: false, color: "#4EAAB5", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "mama", fName: "Sofia", lName: "Rossi", trust: 0, encountered: false, textEvent: "", met: false, color: "#A2DAF1", author: "NoodleJacuzzi", artist: "Enoshima Iki", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "pinstripe", fName: "Evelyn", lName: "Weber", trust: 0, encountered: false, textEvent: "", met: false, color: "#924F82", author: "NoodleJacuzzi", artist: "Enoshima Iki", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "instructor", fName: "Charlotte", lName: "Reid", trust: 0, encountered: false, textEvent: "", met: false, color: "#FD7380", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "nagatoro", fName: "Ash", lName: "Martin", trust: 0, encountered: false, textEvent: "", met: false, color: "#6E6C94", author: "NoodleJacuzzi", artist: "Kinta no Mousou", textHistory: "", unreadText: false,};
			data.story.push(goof);
			for (y = 0; y < data.story.length; y++) {
				data.story[y].textHistory = "";
				data.story[y].unreadText = false;
			}
			console.log(data.story);
		}
		case 7: {
			console.log('version 7 detected, updating save');
			data.player.version = 8;
			if (data.player.blacklist == null) {
				data.player.blacklist = [];
			}
		}
		case 8: {
			console.log('version 8 detected, updating save');
			data.player.version = 9;
			var goof = {index: "masseuse", fName: "Allison", lName: "Greens", trust: 0, encountered: false, textEvent: "", met: false, color: "#F683C8", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false,};
			data.story.push(goof);
		}
		case 9: {
			console.log('version 9 detected, updating save');
			data.player.version = 10;
			var goof = {index: "brown", fName: "Daniela", lName: "Wright", trust: 0, encountered: false, textEvent: "", met: false, color: "#F9D4B7", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false};
			data.story.push(goof);
			var goof = {index: "ribbon", fName: "Ella", lName: "Bell", trust: 0, encountered: false, textEvent: "", met: false, color: "#8D528A", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false};
			data.story.push(goof);
		}
		case 10: {
			console.log('version 10 detected, updating save');
			data.player.version = 11;
			for (x = 0; x < data.story.length; x++) {
				if (data.story[x].textEvent.includes("reward") || data.story[x].textEvent.includes("Reward")) {
					data.story[x].textEvent = "";
				}
			}
		}
		case 11: {
			console.log('save version 11 detected, updating save');
			data.player.version = 12;
			var goof = {index: "camboi", fName: "Damian", lName: "Wisk", trust: 0, encountered: false, textEvent: "", met: false, color: "#685E55", author: "NoodleJacuzzi", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false};
			data.story.push(goof);
		}
		case 12: {
			console.log('save version 12 detected, updating save');
			data.player.version = 13;
			data.skills = [];
			var goof = {index: "fitboi", fName: "Robin", lName: "Lee", trust: 0, encountered: false, textEvent: "", met: false, color: "#885F89", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "miko", fName: "Himari", lName: "Sato", trust: 0, encountered: false, textEvent: "", met: false, color: "#E27546", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "itako", fName: "Emi", lName: "Sato", trust: 0, encountered: false, textEvent: "", met: false, color: "#D33D3D", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false,};
			data.story.push(goof);
		}
		case 13: {
			console.log('save version 13 detected, updating save');
			data.player.version = 14;
			data.skills = [];
			var goof = {index: "gilf", fName: "Eva", lName: "Rose", trust: 0, encountered: false, textEvent: "", met: false, color: "#db4bbc", author: "NoodleJacuzzi", artist: "Toxic Love", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "yokai", fName: "Gekka", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#44d4c3", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false,};
			data.story.push(goof);
		}
		case 14: {
			console.log('save version 14 detected, updating save');
			data.player.version = 15;
			var goof = {index: "priest", fName: "Kay", lName: "Leah", trust: 0, encountered: false, textEvent: "", met: false, color: "#FFFED7", author: "NoodleJacuzzi", artist: "Akagai", textHistory: "", unreadText: false,};
			data.story.push(goof);
		}
		case 15: {
			console.log('save version 15 detected, updating save');
			data.player.version = 16;
			var goof = {index: "emotionless", fName: "Sasha", lName: "Drakeson", trust: 0, encountered: false, textEvent: "", met: false, color: "#FFDEAB", author: "NoodleJacuzzi", artist: "Nagi Ichi", textHistory: "", unreadText: false,};
			data.story.push(goof);
		}
		case 16: {
			console.log('save version 16 detected, updating save');
			data.player.version = 17;
		}
		case 17: {
			console.log('save version 17 detected, updating save');
			data.player.version = 18;
			var goof = {index: "papi", fName: "Saffron", lName: "Hall", trust: 0, encountered: false, textEvent: "", met: false, color: "#AC4B54", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false,};
			data.story.push(goof);
			var goof = {index: "son", fName: "Bay", lName: "Hall", trust: 0, encountered: false, textEvent: "", met: false, color: "#772229", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false,};
			data.story.push(goof);
		}
		case 18: {
			console.log('save version 18 detected, updating save');
			data.player.version = 19;
			var goof = {index: "pizza", fName: "Penny", lName: "Heron", trust: 0, encountered: false, textEvent: "", met: false, color: "#DC7979", author: "CryptoGreek", artist: "Amai Wakusei", textHistory: "", unreadText: false,};
			data.story.push(goof);
		}
	}
	for (zetta = 0; zetta < data.story.length; zetta++) {
		if (data.story[zetta].met == false) {
			data.story[zetta].met = "";
		}
	}
	saveSlot(110);
	//var goof = {index: "camboi", fName: "Charlie", lName: "Miller", trust: 0, encountered: false, textEvent: "", met: false, color: "#716559", author: "SlackerSavior", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false,};
	loadCoreCharacters();
}

function loadCoreCharacters() {
	for (coreIndex = 0; coreIndex < coreCharactersArray.length; coreIndex++) {
		var characterPresent = false;
		for (presentIndex = 0; presentIndex < data.story.length; presentIndex++) {
			if (coreCharactersArray[coreIndex].index == data.story[presentIndex].index) {
				characterPresent = true;
				data.story[presentIndex].author = coreCharactersArray[coreIndex].author;
				data.story[presentIndex].artist = coreCharactersArray[coreIndex].artist;
				data.story[presentIndex].gender = coreCharactersArray[coreIndex].gender;
			}
		}
		if (characterPresent == false) {
			console.log(coreCharactersArray[coreIndex].index + " not detected in save data. Updating.");
			data.story.push(coreCharactersArray[coreIndex]);
		}
	}
}

//Logbook and Achievements
function checkForAchievements() {
	//establish an achievement list
	if (data.player.achievements == null) {
		data.player.achievements = [];
	}
	//Go through a list of all achievements
	for (achievementIndex = 0; achievementIndex < achievementArray.length; achievementIndex++) {
		//First check if the achievement is already unlocked, we should add the achievement until proven otherwise.
		var addAchievement = true;
		for (achievementChecker = 0; achievementChecker < data.player.achievements.length; achievementChecker++) {
			if (data.player.achievements[achievementChecker] == achievementArray[achievementIndex].index) {
				addAchievement = false;
			}
		}
		if (addAchievement == true) {
			//Now check the achievement's requirements
			if (checkRequirements(achievementArray[achievementIndex].requirements) == true) {
				var newAchievement = achievementArray[achievementIndex].index;
				data.player.achievements.push(newAchievement);
				document.getElementById('logButton').style.color = "#00AA00";
				writeSpecial("You unlocked a new achievement, check it out in the logbook!");
			}
		}
	}
}

function generateNav(target) {
	if (data.player.currentScene == "" || data.player.currentScene == "newDay") {
		deleteWindow();
		generateWindow("logbook");
		document.getElementById('logbookLeft').innerHTML = '';
		requestType = "logbook";
		logbookArray = [];
		//document.getElementById('logbookLeft').innerHTML += `<h3 class = "button" style = "color: white;" onclick = "loadAchievements();">Achievements</h3>`;
		for (i = 0; i < data.story.length; i++) {
			targetLogbookFile = data.story[i].index;
			var filename = "scripts/characters/"+targetLogbookFile+".js";
			var fileref=document.createElement('script');
			fileref.setAttribute("src", filename);
			
			//Append new script file
			document.getElementsByTagName("head")[0].appendChild(fileref);
			console.log(targetLogbookFile+ ' import successful');
			
			//Delete script file afterwards
			var select = document.getElementsByTagName("head")[0];
			select.removeChild(select.lastChild);
		}
		var logbookList = [];
		for (i = 0; i < data.story.length; i++) {
			if (data.story[i].trust > 0 && data.story[i].index != "masseuse") {
				var goof = {index: data.story[i].index, fName: data.story[i].fName, color: data.story[i].color,};
				logbookList.push(goof);
			}
		}
		console.log(logbookList);
		logbookList = logbookList.sort(compare);
		console.log(logbookList);
		for (i = 0; i < logbookList.length; i++) {
			document.getElementById('logbookLeft').innerHTML += `<h3 class = "button" style = "color: `+logbookList[i].color+`" onclick = "switchDesc('`+logbookList[i].index+`')">` + logbookList[i].fName + `</h3>`;
		}
		setTimeout(switchDesc, 500, target);
	}
	else {
		generateWindow("warning");
	}
}

function loadAchievements() {
	//generateWindow("logbook");
	document.getElementById('logButton').style.color = "#CCCCCC";
	var achievementsPrinted = 0;
	var redColor = `linear-gradient(306deg, rgba(2,0,36,1) 0%, rgba(121, 9, 104,1) 13%, rgba(228, 119, 255,1) 100%);`;
	var blueColor = `linear-gradient(306deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 9%, rgba(0,212,255,1) 100%);`;
	var neutralColor = `linear-gradient(306deg, rgba(2,0,36,1) 0%, rgba(9, 121, 31,1) 9%, rgba(119, 255, 187,1) 100%);`;
	
	for (achievementIndex = 0; achievementIndex < achievementArray.length; achievementIndex++) {
		var cardColor = neutralColor;
		var cardFrame = "cardFrame";
		var achivementCharacter = "";
		for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
			if (achievementArray[achievementIndex].index.includes(data.story[characterIndex].index)) {
				achivementCharacter = data.story[characterIndex].index;
				if (data.story[characterIndex].gender == "male") {
					cardFrame = "maleFrame";
					cardColor = blueColor;
					if (data.player.vegetarian == true) {
						printAchievement = false;
					}
				}
				if (data.story[characterIndex].gender == "female") {
					cardFrame = "femFrame";
					cardColor = redColor;
					printAchievement = false;
					if (data.player.carnivore == true) {
						printAchievement = false;
					}
				}
			}
		}
		//console.debug("now checking achivement "+achievementArray[achievementIndex].index+", character is "+achievementCharacter);
		var printAchievement = true;
		var achievementUnlocked = false;
		for (achievementChecker = 0; achievementChecker < data.player.achievements.length; achievementChecker++) {
			if (data.player.achievements[achievementChecker] == achievementArray[achievementIndex].index) {
				achievementUnlocked = true;
			}
		}
		
		if (printAchievement == true) {
			achievementsPrinted += 1;
			if (achievementUnlocked == true) {
				switch (achievementArray[achievementIndex].frame) {
					case "rare": {
						document.getElementById("achievements").innerHTML += `
						<div class="flip-card-inner">
							<div class="flip-card-front">
								<div class="cardContainer">
									<img class="cardImage" src="`+achievementArray[achievementIndex].image+`" style="position:absolute; top:0px; left:0px; width:100%;height:100%;">
									<img class="cardFrame" src="images/cards/cardFrame.png">
								</div>
							</div>
						</div>
						<p>`+replaceCodenames(achievementArray[achievementIndex].description)+`</p>`;
						break;
					}
					case "ultraRare": {
						document.getElementById("achievements").innerHTML += `
						<div class="flip-card-inner">
							<div class="flip-card-front" style="background:`+cardColor+`">
								<div class="cardBackground" style="position:absolute;top:0px;left:0px;height:100%;width:100%;background-color:white;">
								</div>
								<div class="cardBackground shimmer" style="position:absolute;top:0px;left:0px;height:100%;width:100%;background:`+cardColor+`">
								</div>
								<div class="cardContainer">
									<img class="cardImage" src="`+achievementArray[achievementIndex].image+`" style="position:absolute; top:0px; left:0px; width:100%;height:100%;">
									<img class="cardFrame" src="images/cards/`+cardFrame+`.png">
								</div>
							</div>
							<div class="flip-card-back" style="background:linear-gradient(306deg, rgba(2,0,36,0) 0%, rgba(9,9,121,0) 9%, rgba(0,212,255,0) 100%);">
								<div class="cardBackground" style="position:absolute;top:0px;left:0px;height:100%;width:100%;background-color:white;">
								</div>
								<div class="cardBackground shimmer" style="position:absolute;top:0px;left:0px;height:100%;width:100%;background:linear-gradient(306deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 13%, rgba(255,119,119,1) 100%)">
								</div>
								<div class="cardContainer">
									<img class="cardImage" src="`+achievementArray[achievementIndex].image+`" style="position:absolute; top:0px; left:0px; width:100%;height:100%;">
									<img class="cardFrame" src="images/cards/`+cardFrame+`.png">
								</div>
							</div>
						</div>
						<p>`+replaceCodenames(achievementArray[achievementIndex].description)+`</p>`;
						break;
					}
					case "vaporRare": {
						var finalColor = "#FFFFFF";
						for (beanCounter = 0; beanCounter < data.story.length; beanCounter++) {
							if (achievementArray[achievementIndex].index.includes(data.story[beanCounter].index)) {
								finalColor = data.story[beanCounter].color;
							}
						}
						document.getElementById("achievements").innerHTML += `
						<div class="flip-card-inner">
							<div class="flip-card-front" style="background:`+cardColor+`">
								<div class="cardContainer">
									<img class = "textThumbRoyalty shimmer" style="
										position:absolute;
										height:95%;
										width:100%;
										top:4%;
										left:0px;
										-webkit-filter: drop-shadow(10px 0px 0 `+finalColor+`)
										drop-shadow(-20px -10px 0 `+finalColor+`);
										filter: drop-shadow(10px 0px 0 `+finalColor+`)
										drop-shadow(-20px -10px 0 `+finalColor+`);"
									src = "`+achievementArray[achievementIndex].image+`">
									<img class = "textThumbRoyalty" src = "`+achievementArray[achievementIndex].image+`" style="
										position:absolute;
										height:95%;
										width:100%;
										top:4%;
										left:0px;
									">
									<img class="cardFrame shimmer" src="images/cards/`+cardFrame+`.png">
								</div>
							</div>
							<div class="flip-card-back">
								<div class="cardContainer">
									<img class = "textThumbRoyalty shimmer" style="
										position:absolute;
										height:95%;
										width:100%;
										top:4%;
										left:0px;
										-webkit-filter: drop-shadow(10px 0px 0 `+finalColor+`)
										drop-shadow(-20px -10px 0 `+finalColor+`);
										filter: drop-shadow(10px 0px 0 `+finalColor+`)
										drop-shadow(-20px -10px 0 `+finalColor+`);"
									src = "`+achievementArray[achievementIndex].image+`">
									<img class = "textThumbRoyalty" src = "`+achievementArray[achievementIndex].image+`" style="
										position:absolute;
										height:95%;
										width:100%;
										top:4%;
										left:0px;
									">
									<img class="cardFrame shimmer" src="images/cards/cardFrame.png">
								</div>
							</div>
						</div>
						<p>`+replaceCodenames(achievementArray[achievementIndex].description)+`</p>`;
						break;
					}
					default: {
						document.getElementById("achievements").innerHTML += `
						<div class="flip-card-inner">
							<div class="flip-card-front" style="background:`+cardColor+`">
								<div class="cardContainer">
									<img class="cardImage" src="`+achievementArray[achievementIndex].image+`" style="position:absolute; top:0px; left:0px; width:100%;height:100%;">
									<img class="cardFrame" src="images/cards/cardFrame.png">
								</div>
							</div>
							<div class="flip-card-back">
								<div class="cardContainer">
									<img class="cardImage" src="`+achievementArray[achievementIndex].image+`" style="position:absolute; top:10%; left:10%; width:80%;height:80%;border-radius:10px;border:3px solid;">
									<img class="cardFrame" src="images/cards/`+cardFrame+`.png">
								</div>
							</div>
						</div>
						<p>`+replaceCodenames(achievementArray[achievementIndex].description)+`</p>`;
					break;
					}
				}
			}
			else {
				document.getElementById("achievements").innerHTML += `
				<div class="flip-card-inner">
					<div class="flip-card-front" style="background:`+cardColor+`">
						<div class="cardContainer">
							<img class="cardImage" src="`+achievementArray[achievementIndex].image+`" 
							style="position:absolute; 
							top:0px; 
							left:0px; 
							width:100%;
							height:100%;
							filter: brightness(0);
							opacity: 0.8;">
							<img class="cardFrame" src="images/cards/emptyFrame.png">
						</div>
					</div>
				</div>
				<p>`+replaceCodenames(achievementArray[achievementIndex].description)+`</p>`;
			}
		}
	}
	//document.getElementById('achievements').style.height = "500vh";
}

function switchDesc(n) {
	if (n != "player") {
		var scenesUnlocked = 0;
		var scenesTotal = 0;
		for (logbookIndex = 0; logbookIndex < logbookArray.length; logbookIndex++) {
			if (logbookArray[logbookIndex].index == n) {
				var logCounter = logbookIndex
			}
		}
		for (characterIndex = 0; characterIndex < data.story.length; characterIndex++) {
			if (data.story[characterIndex].index == n) {
				var characterCounter = characterIndex
			}
		}
		console.log("searching for " + n + " in gallery");
		for (x = 0; x < galleryArray.length; x++) {
			console.log(galleryArray[x].index);
			if (galleryArray[x].index.includes(n)) {
				console.log("Index does include " + n);
				scenesTotal += 1;
				if (galleryCheck(galleryArray[x].index) == true) {
					scenesUnlocked += 1;
				}
			}
		}
		console.log("Displaying logbook page for character "+data.story[characterCounter].fName+".");
		var tabTrust;
		switch (true) {
			case (data.story[characterCounter].trust > 99): {
				tabTrust = "Devoted";
				break;
			}
			case (data.story[characterCounter].trust > 79): {
				tabTrust = "Trusting";
				break;
			}
			case (data.story[characterCounter].trust > 59): {
				tabTrust = "Friendly";
				break;
			}
			case (data.story[characterCounter].trust > 39): {
				tabTrust = "Relaxed";
				break;
			}
			case (data.story[characterCounter].trust > 19): {
				tabTrust = "Wary";
				break;
			}
			default: {
				tabTrust = "Unknown";
				break;
			}
		}
		if (data.story[characterCounter].textEvent.includes("reward") || data.story[characterCounter].textEvent.includes("Reward")) {
			tabTrust = "♔ <b>Complete</b> ♔";
		}
		if (checkFlag(data.story[characterCounter].index, "complete") == true) {
			tabTrust = "♔ <b>Complete</b> ♔";
		}
		if (data.player.pervert != true) {
			if (imagesDisabled != true) {
				document.getElementById('logbookRight').innerHTML = `
					<img id="selfImage" class="selfImage" src="images/`+data.story[characterCounter].index+`/profile.jpg">
				`;
			}
		}
		else {
			if (imagesDisabled != true) {
				document.getElementById('logbookRight').innerHTML = `
					<img id="selfImage" class="selfImage" src="images/`+data.story[characterCounter].index+`/profileP.jpg" onerror ="javascript:this.src='images/`+data.story[characterCounter].index+`/profile.jpg'">
				`;
			}
		}
		document.getElementById('logbookRight').innerHTML += `
		<div class=" lb_primary">
			<h2 class = "selfDesc" style = "color: `+data.story[characterCounter].color+`">`+data.story[characterCounter].fName+` `+data.story[characterCounter].lName+`</h2>
			<p class = "selfDesc lb_trust ">Trust: <span class="`+tabTrust+`">`+tabTrust+`</p></span>
		</div><div class=" lb_secondary">
			<p class = "selfDesc lb_desc">`+replaceCodenames(logbookArray[logCounter].desc)+`</p>
			<p class = "selfDesc lb_body">`+replaceCodenames(logbookArray[logCounter].body)+`</p>
			<p class = "selfDesc lb_clothes">`+replaceCodenames(logbookArray[logCounter].clothes)+`</p>
			<p class = "selfDesc lb_home">`+replaceCodenames(logbookArray[logCounter].home)+`</p>
			<p class = "selfDesc lb_tags">`+replaceCodenames(logbookArray[logCounter].tags)+`</p>
			<p class = "selfDesc lb_tags">Artist: `+replaceCodenames(logbookArray[logCounter].artist)+`</p>
			<p class = "selfDesc lb_tags">Author: `+replaceCodenames(logbookArray[logCounter].author)+`</p>
		</div>
		`;
	}
	else {
		if (imagesDisabled != true) {
			document.getElementById('logbookRight').innerHTML = `
				<img id="selfImage" class="selfImage" src="scripts/gamefiles/characters/`+data.player.character+`.jpg">
			`;
		}
		document.getElementById('logbookRight').innerHTML += `
		<h2 class = "selfDesc lb_Name char_player">`+data.player.name+`</h2>
			<p class = "selfDesc">Day: `+data.player.day+`</p>
			<p class = "selfDesc">Time: `+data.player.time+`</p>
			<p class = "selfDesc">Money: $`+data.player.money+`</p>
			<p class = "selfDesc">Skills: </p>
		`;
		for (beanCounter = 0; beanCounter < data.skills.length; beanCounter++) {
			if (data.skills[beanCounter].score > 0) {
				var skillName = data.skills[beanCounter].name.charAt(0).toUpperCase() + data.skills[beanCounter].name.slice(1);
				document.getElementById('logbookRight').innerHTML += `<p class = "version">`+skillName+`: `+data.skills[beanCounter].score+`</p>`;
			}
		}
	}
}

function compare(a, b) {
	//Sorting helper function for phone and logbook
	if ( a.fName < b.fName ){
		return -1;
	}
	if ( a.fName > b.fName ){
		return 1;
	}
	return 0;
}

//Inventory & shopping
function loadShop() {
	console.log('now importing shop data from character js files');
	itemArray = [];
	var targetFile = 'system';
	requestType = "shop";
	var filename = "scripts/characters/"+targetFile+".js";
	var fileref=document.createElement('script');
	fileref.setAttribute("src", filename);
	
	//Append new script file
	document.getElementsByTagName("head")[0].appendChild(fileref);
	
	//Delete script file afterwards
	var select = document.getElementsByTagName("head")[0];
	select.removeChild(select.lastChild);
	
	for (i = 0; i < data.story.length; i++) {
		//console.log('test');
		targetFile = data.story[i].index;
		var filename = "scripts/characters/"+targetFile+".js";
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
}

function purchase(name, image, price, key) {
	console.log("purchasing " + name);
	if (data.player.money >= price) {
		data.player.money -= price;
		flashMoney();
		updateMenu();
		var purchasedItem = {name: name, key: key, price: price, image: image};
		console.log(purchasedItem);
		data.items.push(purchasedItem);
	}
	loadEncounter("system", "shop");
}

function flashMoney() {
	flashy();
	setTimeout(flashy, 1000);
}

function flashy() {
	document.getElementById('playerMoney').style.color = (document.getElementById('playerMoney').style.color == 'green' ? 'white' : 'green');
}

function checkItem(n) {
	//console.log("Checking for item ID " + n);
	for (x = 0; x < data.items.length; x++) {
		if (data.items[x].name.includes(n)) {
			console.log("Item id " + data.items[0].name + " is owned");
			return true;
			break;
		}
	}
	return false;
}

function addItem(name, key, image) {
	var purchasedItem = {name: name, key: key, image: image};
	console.log(purchasedItem);
	data.items.push(purchasedItem);
}

function removeItem(n) {
	for (i = 0; i < data.items.length; i++) {
		if (data.items[i].name.includes(n)) {
			data.items.splice(i, 1);
			break;
		}
	}
}

//Phone
function checkForPhone() { 
	var targetPhoneFile = '';
	requestType = "phoneCheck";
	for (i = 0; i < data.story.length; i++) {
		targetPhoneFile = data.story[i].index;
		var filename = "scripts/characters/"+targetPhoneFile+".js";
		var fileref=document.createElement('script');
		fileref.setAttribute("src", filename);
		
		//Append new script file
		document.getElementsByTagName("head")[0].appendChild(fileref);
		//console.log(targetPhoneFile+ ' import successful');
		
		//Delete script file afterwards
		var select = document.getElementsByTagName("head")[0];
		select.removeChild(select.lastChild);
	}
}

function loadPhoneEvent(js, name) {
	var targetPhoneFile = 'system';
	requestType = 'phoneEvent';
	eventName = name;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == js) {
			targetPhoneFile = data.story[i].index;
		}
	}
	var filename = "scripts/characters/"+targetPhoneFile+".js";
	console.log('Attempting to load '+targetPhoneFile+'.js for scene ID '+name);
	//Create slot for new scripts file
	var fileref=document.createElement('script');
	fileref.setAttribute("src", filename);
	//console.log(fileref);
	//Append new script file
	document.getElementsByTagName("head")[0].appendChild(fileref);
	//console.log(document.getElementsByTagName("head")[0].children);
	//Delete script file afterwards
	var select = document.getElementsByTagName("head")[0];
	select.removeChild(select.lastChild);
}

function notification(name) {
	writeText("Bzzt! You got a text from "+fName(name)+"!");
	document.getElementById('phoneButton').style.color = "#0F0";
	document.getElementById('phoneButton').innerHTML = "PHONE";
	document.getElementById('phoneButtonMobile').innerHTML = "PHONE";
}

function writePhoneSpeech (name, img, text) {
	var cssName;
	if (img == "") {
		if (data.player.pervert != true) {
			var checkForError = "";
			img = "images/"+name+"/"+name+".jpg";
			console.log(img);
		}
		else {
			var checkForError = `onerror ="javascript:this.src='images/`+name+`/`+name+`.jpg'"`;
			img = "images/"+name+"/"+name+"P.jpg";
			console.log(img);
		}
	}
	if (name == "player") {
		img = "scripts/gamefiles/profiles/"+data.player.character+".jpg";
		name = data.player.name;
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == name) {
			name = data.story[i].fName + ' ' + data.story[i].lName
			cssName = data.story[i].index;
		}
	}
	document.getElementById('phoneRight').innerHTML +=`
	<div class = "phoneTextBox">
		<img class = "phoneTextThumb" src = "
			`+ img +`
		"`+checkForError+`>
		<div class="phoneTextBoxContent">
		<p class = "phoneTextName">`+ name + `</p>
		<p class = "selfDesc">` + replaceCodenames(text) + `</p>
	</div></div>
	<br>
	`
}

function writePhoneImage (img, cap) {
	console.log("writing phone image "+cap);
	if (imagesDisabled != true) {
		document.getElementById('phoneRight').innerHTML += `
			<img class="phonePicture" src="` + img + `" title="` + cap + `">
			<br>
		`;
	}
	var savedImage = {name: img, src: img,};
	if (checkPhoneImages(img) == false) {
		data.phoneImages.push(savedImage);
		console.log("Unlocked image "+savedImage.name);
	}
}

function writePhoneChoices (text1, text2, text3) {
	var choiceList = `
			<div id = "phoneChoice">
			<p class="choiceText" onclick="phoneChoice('A')">
				` + replaceCodenames(text1) + `
			</p>
	`;
	if (typeof text2 != 'undefined') {
		choiceList += `
			<p class="choiceText" onclick="phoneChoice('B')">
				` + replaceCodenames(text2) + `
			</p>
	`;
	}
	if (typeof text3 != 'undefined') {
		choiceList += `
			<p class="choiceText" onclick="phoneChoice('C')">
				` + replaceCodenames(text3) + `
			</p>
	`;
	}
	choiceList += `
		</div>
	`;
	document.getElementById('phoneRight').innerHTML += choiceList;
}

function phoneChoice(n) {
	document.getElementById('phoneRight').innerHTML = '';
	data.story[data.player.lastText].textEvent = n;
	writePhoneEvent(data.story[data.player.lastText].textEvent);
}

function writePhoneTrans (target, label) {
	var choiceList = `
		<div id = "phoneChoice">
			<p class="choiceText" onclick="phoneTrans('`+target+`')">
				` + replaceCodenames(label) + `
			</p>
		</div>
	`;
	document.getElementById('phoneRight').innerHTML += choiceList;
}

function phoneTrans(n) {
	document.getElementById('phoneRight').innerHTML = '';
	data.story[data.player.lastText].textEvent = n;
	writePhoneEvent(data.story[data.player.lastText].textEvent);
}

function generateContacts() {
	console.log("contacts generated");
	data.player.lastText = 100;
	document.getElementById('phoneLeft').innerHTML = ``;
	
	
	var phoneList1 = [];
	var phoneList2 = [];
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].textEvent!= "") {
			var goof = {
				index: data.story[i].index, 
				fName: data.story[i].fName, 
				color: data.story[i].color, 
				textEvent: data.story[i].textEvent, 
				unreadText: data.story[i].unreadText,};
			if (goof.textEvent.includes("reward") || goof.textEvent.includes("Reward")) {
				phoneList2.push(goof);
			}
			else {
				phoneList1.push(goof);
			}
		}
	}
	logbookList = phoneList1.sort(compare);
	logbookList = phoneList2.sort(compare);
	document.getElementById('phoneLeft').innerHTML += `<p class = "logbookSwitch" onclick = "generateWindow('phoneSelection')"><b>BACK</b></p>`;
	document.getElementById('phoneLeft').innerHTML += `<p class = "logbookSwitch" onclick = "phoneImages()"><b>Pictures</b></p>`;
	if (checkItem('Ghost AR') == true) {
		document.getElementById('phoneLeft').innerHTML += `<p class = "logbookSwitch" onclick = "ghostAR()"><b>Ghost AR</b></p>`;
	}
	for (i = 0; i < phoneList1.length; i++) {
		document.getElementById('phoneLeft').innerHTML += `<h3 class = "button char_` + phoneList1[i].index + `" style = "color: `+phoneList1[i].color+`" onclick = "switchContact('`+phoneList1[i].index+`')">` + phoneList1[i].fName + `</h3 >`;
	}
	for (i = 0; i < phoneList2.length; i++) {
		document.getElementById('phoneLeft').innerHTML += `<h3 class = "button char_` + phoneList2[i].index + `" style = "color: #FFFFFF" onclick = "switchContact('`+phoneList2[i].index+`')">` + phoneList2[i].fName + `<br>♔</h3 >`;
	}
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].unreadText != false) {
			data.player.lastText = data.story[i].index;
		}
	}
	if (data.player.lastText != 100) {
		//switchContact(data.player.lastText);
	}
	else {
		document.getElementById('windowTitle').innerHTML = "PHONE";
	}
	document.getElementById('phoneButton').style.color = "#CCCCCC";
	if (imagesDisabled != true) {
		document.getElementById('phoneLeft').innerHTML += `<p class = "logbookSwitch" onclick = "phoneImages()">Saved Images</p>`;
	}
}

function switchContact(n) {
	deleteWindow();
	generateWindow("phone");
	console.log(n);
	var finalResult = 0;
	for (i = 0; i < data.story.length; i++) {
		if (data.story[i].index == n) {
			finalResult = i;
		}
	}
	phoneRight.scrollTop = 0;
	console.log("contact switched to index "+finalResult+", codename "+n);
	document.getElementById('phoneRight').innerHTML = '';
	document.getElementById('windowTitle').innerHTML = data.story[finalResult].fName;
	data.story[finalResult].unreadText = false;
	data.player.lastText = finalResult;
	loadPhoneEvent(data.story[data.player.lastText].index, data.story[data.player.lastText].textEvent);
}

function checkUnread(n) {
	for (textIndex = 0; textIndex < data.story.length; textIndex++) {
		if (data.story[textIndex].index.includes(n)) {
			if (data.story[textIndex].unreadText == true) {
				return true;
				break;
			}
		}
	}
	return false;
}

function checkText(character, target) {
	for (textIndex = 0; textIndex < data.story.length; textIndex++) {
		if (data.story[textIndex].index.includes(character)) {
			if (data.story[textIndex].textHistory.includes(target)) {
				return true;
				break;
			}
		}
	}
	return false;
}

function phoneImages() {
	generateWindow("phone");
	//phoneRight.scrollTop = 0;
	data.phoneImages.sort(function(a, b){
    var x = a.name.toLowerCase();
    var y = b.name.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
	console.log("viewing phone images");
	document.getElementById('windowTitle').innerHTML = "SAVED IMAGES";
	document.getElementById('phoneRight').innerHTML = '';
	for (i = 0; i < data.phoneImages.length; i++) {
		writePhoneImage(data.phoneImages[i].src, data.phoneImages[i].name);
		document.getElementById('phoneRight').innerHTML += '<p class="choiceText" onclick="deleteImage('+i+')">DELETE</p>';
	}
}

function checkPhoneImages(n) {
	console.log("checking phone images for "+n);
	for (i = 0; i < data.phoneImages.length; i++) {
		if (data.phoneImages[i].name.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

function deleteImage(n) {
	data.phoneImages.splice(n, 1);
	phoneImages();
}

function clearText(n) {
	for (textIndex = 0; textIndex < data.story.length; textIndex++) {
		if (data.story[textIndex].index == n) {
			console.log('deleting text log of '+n);
			data.story[textIndex].textEvent = "";
		}
	}
}

//Gallery
var galleryFiltersAuthor = "";
var galleryFiltersArtist = "";

function filterGallery(type, filter) {
	switch (type) {
		case "author": {
			if (galleryFiltersAuthor.includes(filter) != true) {
				console.log("This button will filter out the "+type+" "+filter);
				galleryFiltersAuthor += filter;
			}
			else {
				galleryFiltersAuthor = galleryFiltersAuthor.replace(filter, "");
			}
			break;
		}
		case "artist": {
			if (galleryFiltersArtist.includes(filter) != true) {
				console.log("This button will filter out the "+type+" "+filter);
				galleryFiltersArtist += filter;
			}
			else {
				galleryFiltersArtist = galleryFiltersArtist.replace(filter, "");
				console.log("Removing the filter: "+type+" "+filter);
			}
			break;
		}
	}
	writeEncounter("gallery");
}

function generateGalleryNav(filter) {
	var authorsList = [];
	//Create the grid of buttons to sort by author
	document.getElementById('output').innerHTML += `
	<p style="margin:0px;" class="centeredText">Filter by author:</p>
	<div class="buttonGrid" id="authorGrid">
	</div>
	`;
	//Collect the list of authors by combing the data.story variable
	for (authorIndex = 0; authorIndex < data.story.length; authorIndex++) {
		switch(data.story[authorIndex].index) {
			case "ghost":
				data.story[authorIndex].artist = "Himitsu Kessha Vanitas";
			break;
			case "intern":
				data.story[authorIndex].artist = "Morino Kuma";
			break;
			case "serious":
				data.story[authorIndex].artist = "Silver Radish";
			break;
			case "hearts":
				data.story[authorIndex].artist = "Kitsuneyane";
			break;
		}
		if (authorsList.includes(data.story[authorIndex].author) != true) {
			authorsList.push(data.story[authorIndex].author);
		}
	}
	//Print a button for each author that will filter out that author
	for (i = 0; i < authorsList.length; i++) {
		var color = "#FFFFFF";
		if (galleryFiltersAuthor.includes(authorsList[i]) == true) {
			color = "#00BB00";
		}
		document.getElementById('authorGrid').innerHTML += `
			<p id ="authorGridButton`+authorsList[i]+`" class="choiceText" style="color:`+color+`;" onclick="filterGallery('author', '`+authorsList[i]+`')">
				` + authorsList[i] + `
			</p>
		`;
		console.log("Creating a button will that will filter out the author "+authorsList[i]);
	}
	var artistsList = [];
	//Create the grid of buttons to sort by artist
	document.getElementById('output').innerHTML += `
	<p style="margin:0px;" class="centeredText">Filter by artist:</p>
	<div class="buttonGrid" id="artistGrid">
	</div>
	`;
	//Collect the list of artists by combing the data.story variable
	for (artistIndex = 0; artistIndex < data.story.length; artistIndex++) {
		if (artistsList.includes(data.story[artistIndex].artist) != true) {
			artistsList.push(data.story[artistIndex].artist);
		}
	}
	//Print a button for each artist that will filter out that artist
	for (i = 0; i < artistsList.length; i++) {
		var color = "#FFFFFF";
		if (galleryFiltersArtist.includes(artistsList[i]) == true) {
			color = "#00BB00";
		}
		document.getElementById('artistGrid').innerHTML += `
			<p id ="artistGridButton`+artistsList[i]+`" class="choiceText" style="color:`+color+`;" onclick="filterGallery('artist', '`+artistsList[i]+`')">
				` + artistsList[i] + `
			</p>
		`;
		console.log("Creating a button will that will filter out the artist "+artistsList[i]);
	}
	
	
	document.getElementById('output').innerHTML += `
	<div class="galleryGrid" id="galleryGrid">
	</div>
	`;
	
	for (i = 0; i < data.story.length; i++) {
		var printCharacter = true;
		if (galleryFiltersAuthor != "") {
			if (galleryFiltersAuthor.includes(data.story[i].author) != true) {
				printCharacter = false;
			}
		}
		if (galleryFiltersArtist != "") {
			if (galleryFiltersArtist.includes(data.story[i].artist) != true) {
				printCharacter = false;
			}
		}
		if (data.story[i].trust > 0 && printCharacter == true && data.story[i].index != "masseuse") {
			document.getElementById('galleryGrid').innerHTML += `
			<div class = "textBox" onclick="generateGalleryPage('` + data.story[i].index + `')" >
				<img class = "textThumb" src = "images/`+ data.story[i].index +`/`+ data.story[i].index +`.jpg">
				<div class="textBoxContent">
				<span class = "choiceText" onclick="generateGalleryPage('` + data.story[i].index + `')">`+data.story[i].fName + ` ` + data.story[i].lName +`</span>
			</div></div>
			<br>
			`;
		}
	}
	//data.story[i].artist
	//data.story[i].author
}

function generateGalleryPage(n) {
	document.getElementById('output').innerHTML = '';
	writeBig("images/"+n+"/profile.jpg");
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].index.includes(n)) {
			if (galleryCheck(data.gallery[i].index) == true) {
				if (n == "mom" && data.gallery[i].index.includes("bmom")) {
					//This is the workaround for using such a simple codename for emily T.T
				}
				else {
					writeFunction("loadEvent('"+n+"','"+data.gallery[i].index+"')", data.gallery[i].name)
				}
			}
		}
	}
	writeFunction("changeLocation('playerHouse')", "Go back");
}

function galleryCheck(n) {
	for (i = 0; i < data.gallery.length; i++) {
		if (data.gallery[i].index.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

//Misc
function blacklistImage(image) {
	//This function adds an image produced via writeBig or writeMed to the blacklist, preventing it from being shown
	console.log(image+" has been added to the blacklist+");
	console.log(document.getElementById(image));
	data.player.blacklist.push(image);
	var blacklistedImage = document.getElementById(image);
	blacklistedImage.remove();
	var blacklistedImage = document.getElementById(image+"Button");
	blacklistedImage.remove();
}

function listTextbooks() {
		document.getElementById('output').innerHTML = '';
	if (checkItem("Hypnosis Textbook") == false && checkItem("Hacking Textbook") == false && checkItem("Counseling Textbook") == false) {
		writeText("<p class='centeredText'>You don't have any textbooks to read.<span>");
	}
	if (checkItem("Hypnosis Textbook") == true) {
		if (checkFlag("mom", "hypnosis") != true) {
			writeFunction("textbook('hypnosis')", "Read your hypnosis textbook");
		}
	}
	if (checkItem("Hacking Textbook") == true) {
		if (checkFlag("mom", "hacking") != true) {
			writeFunction("textbook('hacking')", "Read your hacking textbook");
		}
	}
	if (checkItem("Counseling Textbook") == true) {
		if (checkFlag("mom", "counseling") != true) {
			writeFunction("textbook('counseling')", "Read your counseling textbook");
		}
	}
	writeFunction("changeLocation(data.player.location)", "Go back");
}

function textbook(n) {
		document.getElementById('output').innerHTML = '';
	switch (n) {
		case "hypnosis":
			data.player.hypnosis += 1;
			addFlag("mom", "hypnosis");
			passTime();
			writeText("You read through the textbook. It's a bit mind-numbing, which is probably appropriate. The tricks in here help you see things in a new light, it's a different sort of feeling from being trained.");
			writeSpecial("Your skill in hypnosis has improved!");
		break;
		case "hacking":
			data.player.hacking += 1;
			addFlag("mom", "hacking");
			passTime();
			writeText("You read through the textbook. It's a bit mind-numbing, but still interesting. The tricks in here help you see things in a new light, it's a different sort of feeling from being trained.");
			writeSpecial("Your skill in hacking has improved!");
		break;
		case "counseling":
			data.player.counseling += 1;
			addFlag("mom", "counseling");
			passTime();
			writeText("You read through the textbook. It's a bit mind-numbing, but the pictures are interesting. The tricks in here help you see things in a new light, it's a different sort of feeling from being trained.");
			writeSpecial("Your skill in counseling has improved!");
		break;
	}
	writeFunction("changeLocation(data.player.location)", "Finish");
}

function listArtists() {
	writeSpecial("Here's a list of artists who's works are currently in the game:");
	writeMed("images/mom/profile.jpg", "Art by Enoshima Iki");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/26267">Enoshima Iki's Pixiv</a>`;
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG09718.html">Enoshima Iki's DLsite Circle</a>`;
	writeMed("images/tomgirl/profile.jpg", "Art by Nagi Ichi");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/4229818">Nagi Ichi's Pixiv</a>`;
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG18802.html">Nagi Ichi's DLsite Circle</a>`;
	writeMed("images/purple/profile.jpg", "Art by Oreteki18kin");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/5893974">Oreteki18kin's Pixiv</a>`;
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG01200.html/?locale=en_US">Oreteki18kin's DLsite Circle</a>`;
	writeMed("images/succubus/profile.jpg", "Art by Gujira");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/215082">Gujira 4 Gou's Pixiv</a>`;
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG06917.html/?locale=en_US">Gujira 4 Gou's DLsite Circle</a>`;
	writeMed("images/haze/profile.jpg", "Art by Purple Haze");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/1233996">Purple Haze's Pixiv</a>`;
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG10910.html/?locale=en_US">Purple Haze's DLsite Circle</a>`;
	writeMed("images/coach/profile.jpg", "Art by Himitsu Kessha Vanitas");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/16913239">Himitsu Kessha Vanitas's Pixiv</a>`;
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG35033.html">DLsite Circle's Pixiv</a>`;
	writeMed("images/housekeep/profile.jpg", "Art by Kinta no Mousou");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG32832.html">Kinta no Mousou's DLsite Circle</a>`;
	writeMed("images/fitboi/profile.jpg", "Art by Silver Radish (aka Hagurumarokuro)");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG36753.html">Silver Radish's DLsite Circle's</a>`;
	writeMed("images/gilf/profile.jpg", "Art by Toxic Love");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG32143.html">Toxic Love's DLsite Circle's</a>`;
	writeMed("images/gyatrio/profile.jpg", "Art by Uo Denim");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/1673468/artworks">Uo Denim's Pixiv</a>`;
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG16675.html">Uo Denim's DLsite Circle</a>`;
	writeMed("images/priest/profile.jpg", "Art by Akagai, Aka Mine Thrower");
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.pixiv.net/en/users/764078/artworks">Mine Thrower's Pixiv</a>`;
	document.getElementById('output').innerHTML += `<a class="choiceText" href = "https://www.dlsite.com/maniax/fsr/=/keyword_creater/%22%E3%83%9E%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%AD%E3%82%A2%22">Akagai's DLsite Circle</a>`;
}

function writeWardrobe() {
	if (checkItem("Lady") == true) {
		if (checkBody("lady") == false) {
			var goof = {index: "lady", artist: "Art by Nusumenaihxseki",};
			data.bodytypes.push(goof);
		}
	}
	if (data.player.gender == "man") {
		if (checkBody("hex") == true) {
			if (checkBody("hexMan") != true) {
				var goof = {index: "hexMan", artist: "Art by @spectralworks_",};
				data.bodytypes.push(goof);
			}
		}
	}
	for (i = 0; i < data.bodytypes.length; i++) {
		writeMed("scripts/gamefiles/characters/"+data.bodytypes[i].index+".jpg", data.bodytypes[i].artist);
		writeFunction("changeBody('"+i+"')", data.bodytypes[i].index);
	}
}

function checkBody(n) {
	console.log("Now checking for bodytype " + n);
	for (i = 0; i < data.bodytypes.length; i++) {
		if (data.bodytypes[i].index.includes(n)) {
			return true;
			break;
		}
	}
	return false;
}

function changeBody(n) {
	data.player.character = data.bodytypes[n].index;
	data.player.characterArtist = data.bodytypes[n].artist;
	updateMenu();
}

function diagnostic() {
	var goof = document.getElementById('cheatSubmission').value;
	goof = goof.toLowerCase();
	console.log("Testing code " + goof);
	writeEncounter('cheat');
	switch (goof) {
		case "human alteration app": {
			if (checkBody("sub") != true) {
				var goof = {index: "sub", artist: "Art by Aya",};
				data.bodytypes.push(goof);
				writeSpecial("Unlocked a new bodytype! Change via the wardrobe.");
			}
			else {
				goof = "null";
			}
			break;
		}
		case "haa": {
			if (checkBody("sub") != true) {
				var goof = {index: "sub", artist: "Art by Aya",};
				data.bodytypes.push(goof);
				writeSpecial("Unlocked a new bodytype! Change via the wardrobe.");
			}
			else {
				goof = "null";
			}
			break;
		}
		case "princess quest": {
			if (checkBody("elizabeth") != true) {
				var goof = {index: "elizabeth", artist: "Art by Neromashin",};
				data.bodytypes.push(goof);
				writeSpecial("Unlocked a new bodytype! Change via the wardrobe.");
			}
			else {
				goof = "null";
			}
			break;
		}
		case "slackersavior": {
			if (checkBody("slacker") != true) {
				var goof = {index: "slacker", artist: "Art by Nainsoo",};
				data.bodytypes.push(goof);
				writeSpecial("Unlocked a new bodytype! Change via the wardrobe.");
			}
			else {
				goof = "null";
			}
			break;
		}
		case "slacker": {
			if (checkBody("slacker") != true) {
				var goof = {index: "slacker", artist: "Art by Nainsoo",};
				data.bodytypes.push(goof);
				writeSpecial("Unlocked a new bodytype! Change via the wardrobe.");
			}
			else {
				goof = "null";
			}
			break;
		}
		case "rainy dayz": {
			if (checkBody("jill") != true) {
				var goof = {index: "jill", artist: "Unknown artist",};
				data.bodytypes.push(goof);
				writeSpecial("Unlocked a new bodytype! Change via the wardrobe.");
			}
			else {
				goof = "null";
			}
			break;
		}
		case "thomas": {
			data.player.gender = "man";
			data.player.title = "Mister";
			data.player.honorific = "sir";
			if (checkBody("basic") != true) {
				var goof = {index: "basic", artist: "Art by Ishimura",};
				data.bodytypes.push(goof);
			}
			for (i = 0; i < data.bodytypes.length; i++) {
				if (data.bodytypes[i].index.includes('basic')) {
					changeBody(i);
					break;
				}
			}
			loadEncounter('system', 'prologue');
			break;
		}
		case "tomara": {
			data.player.gender = "woman";
			data.player.title = "Miss";
			data.player.honorific = "ma'am";
			if (checkBody("basil") != true) {
				var goof = {index: "basil", artist: "Art by Ishimura",};
				data.bodytypes.push(goof);
			}
			for (i = 0; i < data.bodytypes.length; i++) {
				if (data.bodytypes[i].index.includes('basil')) {
					changeBody(i);
					break;
				}
			}
			loadEncounter('system', 'prologue');
			break;
		}
		case "pervert": {
			if (data.player.pervert != true) {
				data.player.pervert = true;
				writeSpecial("Pervert mode activated!");
				data.player.color = "#fc53f1";
				updateMenu();
			}
			else {
				data.player.pervert = false;
				writeSpecial("Pervert mode deactivated!");
				data.player.color = "#86b4dc";
				updateMenu();
			}
			break;
		}
		case "prude": {
			data.player.pervert = false;
			writeSpecial("Pervert mode deactivated!");
			break;
		}
		case "vegetarian": {
			if (data.player.vegetarian == true) {
				data.player.vegetarian = false;
				writeSpecial("Vegetarian cheat deactivated.");
			}
			else {
				data.player.vegetarian = true;
				writeSpecial("Femboy / male characters have been deactivated.");
			}
			break;
		}
		case "carnivore": {
			if (data.player.carnivore == true) {
				data.player.carnivore = false;
				writeSpecial("Carnivore cheat deactivated.");
			}
			else {
				data.player.carnivore = true;
				writeSpecial("Female characters have been deactivated. However, system-essential characters such as incubusF and principalF will still appear.");
			}
			break;
		}
		case "lobotomy": {
			data.player.style = "lobotomy";
			updateMenu();
			writeEncounter('cheat');
			writeSpecial("Lobotomy visual style active!");
			break;
		}
		case "persona": {
			data.player.style = "persona";
			updateMenu();
			writeEncounter('cheat');
			writeSpecial("Persona visual style active!");
			break;
		}
		case "royalty": {
			data.player.style = "royalty";
			updateMenu();
			writeEncounter('cheat');
			writeSpecial("Royalty visual style active!");
			break;
		}
		case "stiggy752": {
			data.player.style = "basic";
			updateMenu();
			writeEncounter('cheat');
			writeSpecial("Basic visual style active!");
			break;
		}
		case "baddy": {
			data.player.style = "basic";
			updateMenu();
			writeEncounter('cheat');
			writeSpecial("Basic visual style active!");
			break;
		}
		case "cash money": {
			data.player.money += 100;
			updateMenu();
			writeSpecial("You got $100! This should be all you need, but you could always make more.");
			break;
		}
		case "nuclear option": {
			data.player.hypnosis = 3;
			data.player.hacking = 3;
			data.player.counseling = 5;
			updateMenu();
			writeSpecial("All of your stats have been set to 3 or above. You can keep improving them past this point, but you shouldn't see any skill-related roadblocks from here on!");
			break;
		}
		case "youwillcallme": {
			loadEncounter('system', 'youwillcallme');
			break;
		}
		case "you will call me": {
			loadEncounter('system', 'youwillcallme');
			break;
		}
		case "birthday": {
			writeBig("images/nagatoro/040.jpg");
			writeSpeech("nagatoro", "", "Thanks for the birthday wishes, Ash Martin Sevdalisi! Hope you have a lovely 2022~!");
			break;
		}
		case "new name": {
			loadEncounter('system', 'renamingRoom');
			break;
		}
		case "export blacklist": {
			document.getElementById('output').innerHTML += JSON.stringify(data.player.blacklist);
			break;
		}
		case "import blacklist": {
			var blacklist = prompt("Please paste the blacklist", "");
			blacklist = JSON.parse(blacklist);
			for (i = 0; i < blacklist.length; i++) {
				data.player.blacklist.push(blacklist[i]);
			}
			writeText("Blacklist imported! Now adding the following:"+ JSON.stringify(blacklist));
			break;
		}
		case "blacklist": {
			if (data.player.blacklistMode != true) {
				data.player.blacklistMode = true;
				writeSpecial("Blacklist mode activated. Click the button beneath an image to prevent it from appearing again.");
			}
			else {
				data.player.blacklistMode = false;
				writeSpecial("Blacklist mode has been deactivated.");
			}
			break;
		}
		case "oowoo": {
			if (data.player.uwu != true) {
				data.player.uwu = true;
				writeSpecial("What's this? UwU cheat activated.");
			}
			else {
				data.player.uwu = false;
				writeSpecial("Oowoo cheat has been deactivated.");
				addFlag("priest", "coward");
			}
			break;
		}
		case "i've come to make an announcement: shadow the hedgehog's a bitch-ass motherfucker": {
			if (data.player.egg != true) {
				data.player.egg = true;
				writeSpecial("He pissed on my fucking wife. That's right, he took his hedgehog-fuckin' quilly dick out and he pissed on my fucking wife, and he said his dick was 'this big,' and I said 'that's disgusting,' so I'm making a callout post on my Twitter.com: Shadow the Hedgehog, you've got a small dick, It's the size of this walnut except WAY smaller. And guess what? Here's what my dong looks like: that's right baby, all points, no quills, no pillows— look at that, it looks like two balls and a bong. He fucked my wife, so guess what, I'm gonna fuck the EARTH. That's right, this is what you get: MY SUPER LASER PISS!! Except I'm not gonna piss on the Earth, I'm gonna go higher; I'm pissing ON THE MOON! How do you like that, Obama? I PISSED ON THE MOON, YOU IDIOT! You have twenty-three hours before the piss drrrrroplllllllets hit the fucking Earth, now get outta my fucking sight, before I piss on you too!.");
			}
			else {
				data.player.egg = false;
				writeSpecial("Egg cheat has been deactivated.");
			}
			break;
		}
		case "good boy": {
			setSkill("corruption", 1);
			writeSpecial("Your corruption has been lowered!.");
			break;
		}
		case "bad boy": {
			setSkill("corruption", 9);
			writeSpecial("Your corruption has been lowered!.");
			break;
		}
		case "egg": {
			if (data.player.egg != true) {
				data.player.egg = true;
				writeSpecial("He pissed on my fucking wife. That's right, he took his hedgehog-fuckin' quilly dick out and he pissed on my fucking wife, and he said his dick was 'this big,' and I said 'that's disgusting,' so I'm making a callout post on my Twitter.com: Shadow the Hedgehog, you've got a small dick, It's the size of this walnut except WAY smaller. And guess what? Here's what my dong looks like: that's right baby, all points, no quills, no pillows— look at that, it looks like two balls and a bong. He fucked my wife, so guess what, I'm gonna fuck the EARTH. That's right, this is what you get: MY SUPER LASER PISS!! Except I'm not gonna piss on the Earth, I'm gonna go higher; I'm pissing ON THE MOON! How do you like that, Obama? I PISSED ON THE MOON, YOU IDIOT! You have twenty-three hours before the piss drrrrroplllllllets hit the fucking Earth, now get outta my fucking sight, before I piss on you too!.");
			}
			else {
				data.player.egg = false;
				writeSpecial("Egg cheat has been deactivated.");
			}
			break;
		}
		case "find mii": {
			if (data.player.gps != true) {
				data.player.gps = true;
				writeSpecial("GPS mode activated. NPC encounters will appear on the map.");
			}
			else {
				data.player.gps = false;
				writeSpecial("GPS mode deactivated.");
			}
			break;
		}
		case "mega easy": {
			if (checkFlag("mom", "megaEasy") != true) {
				data.player.gps = true;
				addFlag("mom", "megaEasy");
				data.player.hypnosis = 3;
				data.player.hacking = 3;
				data.player.counseling = 5;
				data.player.money += 1000;
				updateMenu();
				writeSpecial("Mega easy mode activated! NPC encounters will appear on the map, you will now start on the town map, stats have been adjusted, and you have a lot of money");
			}
			else {
				data.player.gps = false;
				removeFlag("mom", "megaEasy");
				writeSpecial("Mega easy mode deactivated, GPS mode deactivated.");
			}
			break;
		}
		case "eyestrain": {
			if (checkItem('Ghost AR') != true) {
				writeSpecial("You need to own the Ghost AR game before you can use this cheat.");
			}
			else {
				ghostBoost += .4;
				writeSpecial("Increased the visibility of ghosts! You can repeat this code if you need to. Refreshing the game will undo this code.");
			}
			break;
		}
		case "no disguise": {
			if (data.player.noDisguise != true) {
				data.player.noDisguise = true;
				writeSpecial("No Disguise mode activated. Default player image will be used for speech during scenes with characters like mamaF.");
			}
			else {
				data.player.noDisguise = false;
				writeSpecial("You will now use disguise images in place of your usual picture for scenes with characters like mamaF.");
			}
			break;
		}
		case "saint valentines": {
			loadEvent("intern", "internvdayspecial");
			writeFunction("changeLocation(data.player.location", "Finish");
			break;
		}
		case "welcome to noodlejacuzzi's master index!": {
			addFlag("mom", "noodleJacuzzi");
			checkForAchievements();
			writeSpecial("Code accepted! Thanks for checking out the index, friend!");
			break;
		}
		case "please don't bully me": {
			if (checkFlag("nagatoro", "blue") != true) {
				addFlag("nagatoro", "blue");
				writeSpecial("Ash pallete swap activated!");
			}
			else {
				removeFlag("nagatoro", "blue");
				writeSpecial("Ash pallete swap deactivated!");
			}
			break;
		}
	}
	if (goof == "null") {
		writeText("You've already used this code before.");
	}
}

// Ghost AR game
function ghostAR() {
	generateWindow("phone");
	if (data.player.currentScene == "morning1") {
		loadEncounter("gilf", "encounter2");
	}
	else {
		if (data.player.ghost == undefined) {
			console.log('Installing Ghost AR');
			data.player.ghost = "";
			document.getElementById('phoneRight').innerHTML = ``;
			document.getElementById('phoneRight').innerHTML +=`
			<div class = "phoneTextBox">
				<img class = "phoneTextThumb" src = "scripts/gamefiles/items/ghostIcon.png">
				<div class="phoneTextBoxContent">
				<p class = "phoneTextName">System</p>
				<p class = "selfDesc">Ghost hunting is enabled! Good luck hunting!</p>
			</div></div>
			<br>
			`;
		}
		else {
			if (data.player.ghost.includes('REWARD')) {
				document.getElementById('phoneRight').innerHTML = ``;
				if (data.player.ghost.includes('REWARD1')) {
					data.player.ghost = data.player.ghost.replace('REWARD1', 'claimed');
					data.player.hypnosis += 1;
					updateMenu();
					document.getElementById('phoneRight').innerHTML +=`
					<div class = "phoneTextBox">
						<img class = "phoneTextThumb" src = "scripts/gamefiles/items/ghostIcon.png">
						<div class="phoneTextBoxContent">
						<p class = "phoneTextName">System</p>
						<p class = "selfDesc">Congratulations! For your discipline, you've earned a reward!</p>
					</div></div>
					<br>
					<p class="rawText">The reward is a link to some occult documents. Most are nonsense, but there's one on hypnosis that is actually pretty thorough.</p>
					<p class="specialText">Your hypnosis skill has improved!</p>
					`;
				}
				if (data.player.ghost.includes('REWARD2')) {
					data.player.ghost = data.player.ghost.replace('REWARD2', 'claimed');
					data.player.money += 50;
					updateMenu();
					document.getElementById('phoneRight').innerHTML +=`
					<div class = "phoneTextBox">
						<img class = "phoneTextThumb" src = "scripts/gamefiles/items/ghostIcon.png">
						<div class="phoneTextBoxContent">
						<p class = "phoneTextName">System</p>
						<p class = "selfDesc">Congratulations! For your discipline, you've earned a reward!</p>
					</div></div>
					<br>
					<p class="rawText">The reward is a link to a short survey. You're rewarded for your participation.</p>
					<p class="specialText">You earned $50!</p>
					`;
				}
				if (data.player.ghost.includes('REWARD3')) {
					data.player.ghost = data.player.ghost.replace('REWARD3', 'claimed');
					if (checkItem('Secret Shrine Location') != true) {
						addItem('Secret Shrine Location', true, 'scripts/gamefiles/items/shrine.jpg');
					}
					updateMenu();
					document.getElementById('phoneRight').innerHTML +=`
					<div class = "phoneTextBox">
						<img class = "phoneTextThumb" src = "scripts/gamefiles/items/ghostIcon.png">
						<div class="phoneTextBoxContent">
						<p class = "phoneTextName">System</p>
						<p class = "selfDesc">Congratulations! For your discipline, you've earned a reward!</p>
					</div></div>
					<br>
					<p class="rawText">The reward is a link to a to a historical page on the town, there's a neat shrine that isn't on most maps in the park district.</p>
					<p class="specialText">You gained the location of the secret shrine!</p>
					`;
				}
				if (data.player.ghost.includes('REWARD4')) {
					data.player.ghost = data.player.ghost.replace('REWARD4', 'claimed');
					if (data.player.gender == "man") {
						var goof = {index: "hexMan", artist: "Art by @spectralworks_",};
						data.bodytypes.push(goof);
					}
					else {
						var goof = {index: "hex", artist: "Art by Unknown Artist",};
						data.bodytypes.push(goof);
					}
					document.getElementById('phoneRight').innerHTML +=`
					<div class = "phoneTextBox">
						<img class = "phoneTextThumb" src = "scripts/gamefiles/items/ghostIcon.png">
						<div class="phoneTextBoxContent">
						<p class = "phoneTextName">System</p>
						<p class = "selfDesc">Congratulations! For your discipline, you've earned a reward!</p>
					</div></div>
					<br>
					<p class="rawText">The reward is a link to a very, very detailed cosplay guide. You have most of these materials at home!</p>
					<p class="specialText">You gained a new profile image, head back home and use the wardrobe to change!</p>
					`;
				}
			}
			else {
				generateGhostCollection();
			}
		}
	}
}

function generateGhostCollection() {
	document.getElementById('phoneRight').innerHTML +=`
	<div class = "phoneTextBox">
		<img class = "phoneTextThumb" src = "scripts/gamefiles/items/ghostIcon.png">
		<div class="phoneTextBoxContent">
		<p class = "phoneTextName">System</p>
		<p class = "selfDesc">You've caught `+countGhosts()+` ghosts!</p>
	</div></div>
	<br>
	`;
}

function checkForGhosts(location) {
	for (i = 0; i < ghostArray.length; i++) {
		if (ghostArray[i].rarity.includes(data.player.dayID) == true && ghostArray[i].location.includes(location) == true) {
			if (ghostArray[i].requirement != null) {
				if (ghostArray[i].requirement <= countGhosts()) {
					if (!data.player.ghost.includes(ghostArray[i].name)) {
						var ghostOpacity = ghostArray[i].difficulty*7;
						ghostOpacity = ghostOpacity/100;
						ghostOpacity += ghostBoost;
						console.log(ghostOpacity);
						console.log('Ghost detected! ' +ghostArray[i].name);
						document.getElementsByClassName('playerRoom')[0].innerHTML += `
							<img class = "ghost" src = "images/ghosts/`+ghostArray[i].name+`.png" style="width: 15%; top: `+ghostArray[i].top+`%; left: `+ghostArray[i].left+`%; opacity: `+ghostOpacity+`;" onclick='captureGhost("`+ghostArray[i].name+`")'>
						`;
					}
				}
			}
			else {
				if (checkRequirements(ghostArray[i].requirements)) {
					var targetChar = ghostArray[i].name
					if (ghostArray[i].name.includes("gilf")) {
						targetChar = "gilf";
					}
					if (ghostArray[i].name.includes("yokai")) {
						targetChar = "yokai";
					}
					var ghostOpacity = ghostArray[i].difficulty*7;
					ghostOpacity = ghostOpacity/100;
					ghostOpacity += ghostBoost;
					console.log(ghostOpacity);
					console.log('Ghost detected! ' +ghostArray[i].name);
					document.getElementsByClassName('playerRoom')[0].innerHTML += `
						<img class = "ghost" src = "images/ghosts/`+ghostArray[i].name+`.png" style="width: 15%; top: `+ghostArray[i].top+`%; left: `+ghostArray[i].left+`%; opacity: `+ghostOpacity+`;" onclick='loadEncounter("`+targetChar+`", "`+ghostArray[i].encounter+`")'>
					`;
				}
			}
		}
	}
}

function checkGhost(n) {
	if (data.player.ghost.includes(n)) {
		return true;
	}
	else {
		return false;
	}
}

function countGhosts() {
	var ghostNumber = 0;
	for (ghostIndex = 0; ghostIndex < ghostArray.length; ghostIndex++) {
		if (data.player.ghost.includes(ghostArray[ghostIndex].name)) {
			//console.log('test');
			ghostNumber += 1;
		}
	}
	//console.log(ghostNumber);
	return ghostNumber;
}

function captureGhost(n) {
	data.player.ghost += n;
	changeLocation(data.player.location);
	switch (n) {
		case "Maudlos": {
			writeSpecial("Special ghost caught! Open the app to claim your reward.");
			data.player.ghost += 'REWARD3';
			break;
		}
		case "UFO": {
			writeSpecial("Special ghost caught! Open the app to claim your reward.");
			data.player.ghost += 'REWARD2';
			break;
		}
		default: {
			if (countGhosts() == 30) {
				writeSpecial("You caught 30 ghosts! Open the app to claim your reward.");
				data.player.ghost += 'REWARD4';
			}
			else {
				if (countGhosts() == 10) {
					writeSpecial("You caught 10 ghosts! Open the app to claim your reward.");
					data.player.ghost += 'REWARD1';
				}
				else {
					writeText("You caught a ghost!");
				}
			}
			break;
		}
	}
}

//Card game
var samplePlayerHand = [
	{image: "images/hex-kunT.png", top: 3, right: 3, bottom: 3, left:7, rarity: "vaporRare"},
	{image: "images/hex-kunT.png", top: 3, right: 3, bottom: 3, left:7, rarity: "vaporRare"},
	{image: "images/succubus/succubusPT.png", top: 5, right: 5, bottom: 5, left:5, rarity: "vaporRare"},
	{image: "images/mom/1-2.jpg", top: 5, right: 5, bottom: 5, left:5, rarity: ""},
	{image: "images/kuro/kuroPT.png", top: 3, right: 3, bottom: 3, left:3, rarity: "ultraRare"},
]
var sampleOpponentHand = [
	{image: "images/neet/profile.jpg", top: 3, right: 3, bottom: 3, left:7, rarity: ""},
	{image: "images/instructor/karateT.png", top: 3, right: 3, bottom: 3, left:7, rarity: "rare"},
	{image: "images/instructor/trackT.png", top: 9, right: 9, bottom: 3, left:3, rarity: "rare"},
	{image: "images/neet/neetPT.png", top: 3, right: 3, bottom: 3, left:4, rarity: "ultraRare"},
	{image: "images/demon/demonT.png", top: 9, right: 9, bottom: 9, left:9, rarity: "vaporRare"},
]

var boardArray = [];
var playerHandArray = [];
var opponentHandArray = [];
var turnCounter = 0;
var selectedCard = "";
var selectedOrigin = "";
var canPlayCards = 1;

function generateCard(index, card) {
	var top = card.top;
	var right = card.right;
	var bottom = card.bottom;
	var left = card.left;
	var image = card.image;
	var rarity = card.rarity;
	switch (rarity) {
		case "empty": {
			document.getElementById(index).innerHTML = `
			<div class="flip-card-inner">
				<div class="flip-card-front" style="background:linear-gradient(306deg, rgba(2,0,36,0) 0%, rgba(9,9,121,0) 9%, rgba(0,212,255,0) 100%);>
					<div class="cardContainer">
						<img class="cardFrame" src="images/cards/emptyFrame.png">
					</div>
				</div>
				<div class="flip-card-back" style="background:linear-gradient(306deg, rgba(2,0,36,0) 0%, rgba(9,9,121,0) 9%, rgba(0,212,255,0) 100%);>
					<div class="cardContainer">
						<img class="cardFrame" src="images/cards/emptyFrame.png" style="position:absolute; top:0px; left:0px; width:300px;height:400px;">
					</div>
				</div>
			</div>
			`;
			break;
		}
		case "rare": {
			document.getElementById(index).innerHTML = `
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<div class="cardContainer">
						<div class="cardStatBlock">
							<div class="cardStat" style="position:absolute;top:5%;left:11%;">`+top+`</div>
							<div class="cardStat" style="position:absolute;top:14%;left:19%;">`+right+`</div>
							<div class="cardStat" style="position:absolute;top:24%;left:11%;">`+bottom+`</div>
							<div class="cardStat" style="position:absolute;top:14%;left:4%;">`+left+`</div>
						</div>
						<img class="cardImage" src="`+image+`" style="position:absolute; top:0px; left:0px; width:100%;height:100%;">
						<img class="cardFrame" src="images/cards/cardFrame.png">
					</div>
				</div>
				<div class="flip-card-back">
					<div class="cardContainer">
						<img class="cardImage" src="`+image+`" style="position:absolute; top:0px; left:0px; width:100%;height:100%;">
						<img class="cardFrame" src="images/cards/cardFrame.png">
					</div>
				</div>
			</div>`;
			break;
		}
		case "ultraRare": {
			document.getElementById(index).innerHTML = `
			<div class="flip-card-inner">
				<div class="flip-card-front" style="background:linear-gradient(306deg, rgba(2,0,36,0) 0%, rgba(9,9,121,0) 9%, rgba(0,212,255,0) 100%);">
					<div class="cardBackground" style="position:absolute;top:0px;left:0px;height:100%;width:100%;background-color:white;">
					</div>
					<div class="cardBackground shimmer" style="position:absolute;top:0px;left:0px;height:100%;width:100%;background:linear-gradient(306deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 9%, rgba(0,212,255,1) 100%);">
					</div>
					<div class="cardContainer">
						<div class="cardStatBlock">
							<div class="cardStat" style="position:absolute;top:5%;left:11%;">`+top+`</div>
							<div class="cardStat" style="position:absolute;top:14%;left:19%;">`+right+`</div>
							<div class="cardStat" style="position:absolute;top:24%;left:11%;">`+bottom+`</div>
							<div class="cardStat" style="position:absolute;top:14%;left:4%;">`+left+`</div>
						</div>
						<img class="cardImage" src="`+image+`" style="position:absolute; top:0px; left:0px; width:100%;height:100%;">
						<img class="cardFrame" src="images/cards/cardFrame.png">
					</div>
				</div>
				<div class="flip-card-back" style="background:linear-gradient(306deg, rgba(2,0,36,0) 0%, rgba(9,9,121,0) 9%, rgba(0,212,255,0) 100%);">
					<div class="cardBackground" style="position:absolute;top:0px;left:0px;height:100%;width:100%;background-color:white;">
					</div>
					<div class="cardBackground shimmer" style="position:absolute;top:0px;left:0px;height:100%;width:100%;background:linear-gradient(306deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 13%, rgba(255,119,119,1) 100%)">
					</div>
					<div class="cardContainer">
						<img class="cardImage" src="`+image+`" style="position:absolute; top:0px; left:0px; width:100%;height:100%;">
						<img class="cardFrame" src="images/cards/cardFrame.png">
					</div>
				</div>
			</div>`;
			break;
		}
		case "vaporRare": {
			var finalColor = "#FFFFFF";
			for (beanCounter = 0; beanCounter < data.story.length; beanCounter++) {
				if (image.includes(data.story[beanCounter].index)) {
					finalColor = data.story[beanCounter].color;
				}
			}
			document.getElementById(index).innerHTML = `
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<div class="cardContainer">
						<div class="cardStatBlock">
							<div class="cardStat" style="position:absolute;top:5%;left:11%;">`+top+`</div>
							<div class="cardStat" style="position:absolute;top:14%;left:19%;">`+right+`</div>
							<div class="cardStat" style="position:absolute;top:24%;left:11%;">`+bottom+`</div>
							<div class="cardStat" style="position:absolute;top:14%;left:4%;">`+left+`</div>
						</div>
						<img class = "textThumbRoyalty shimmer" style="
							position:absolute;
							height:95%;
							width:100%;
							top:4%;
							left:0px;
							-webkit-filter: drop-shadow(10px 0px 0 `+finalColor+`)
							drop-shadow(-20px -10px 0 `+finalColor+`);
							filter: drop-shadow(10px 0px 0 `+finalColor+`)
							drop-shadow(-20px -10px 0 `+finalColor+`);"
						src = "`+image+`">
						<img class = "textThumbRoyalty" src = "`+image+`" style="
							position:absolute;
							height:95%;
							width:100%;
							top:4%;
							left:0px;
						">
						<img class="cardFrame shimmer" src="images/cards/cardFrame.png">
					</div>
				</div>
				<div class="flip-card-back">
					<div class="cardContainer">
						<img class = "textThumbRoyalty shimmer" style="
							position:absolute;
							height:95%;
							width:100%;
							top:4%;
							left:0px;
							-webkit-filter: drop-shadow(10px 0px 0 `+finalColor+`)
							drop-shadow(-20px -10px 0 `+finalColor+`);
							filter: drop-shadow(10px 0px 0 `+finalColor+`)
							drop-shadow(-20px -10px 0 `+finalColor+`);"
						src = "`+image+`">
						<img class = "textThumbRoyalty" src = "`+image+`" style="
							position:absolute;
							height:95%;
							width:100%;
							top:4%;
							left:0px;
						">
						<img class="cardFrame shimmer" src="images/cards/cardFrame.png">
					</div>
				</div>
			</div>`;
			break;
		}
		default:
			document.getElementById(index).innerHTML = `
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<div class="cardContainer">
						<div class="cardStatBlock">
							<div class="cardStat" style="position:absolute;top:5%;left:11%;">`+top+`</div>
							<div class="cardStat" style="position:absolute;top:14%;left:19%;">`+right+`</div>
							<div class="cardStat" style="position:absolute;top:24%;left:11%;">`+bottom+`</div>
							<div class="cardStat" style="position:absolute;top:14%;left:4%;">`+left+`</div>
						</div>
						<img class="cardImage" src="`+image+`" style="position:absolute; top:10%; left:10%; width:80%;height:80%;border-radius:10px;border:3px solid;">
						<img class="cardFrame" src="images/cards/cardFrame.png">
					</div>
				</div>
				<div class="flip-card-back">
					<div class="cardContainer">
						<img class="cardImage" src="`+image+`" style="position:absolute; top:10%; left:10%; width:80%;height:80%;border-radius:10px;border:3px solid;">
						<img class="cardFrame" src="images/cards/cardFrame.png">
					</div>
				</div>
			</div>`;
		break;
	}
}

function initializeBoard() {
	turnCounter = 0;
	opponentHandArray = [];
	document.getElementById('output').innerHTML += `
	<div id="opponentHand" class="hand" style="display:grid; grid-template-columns:minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);height:30vh;"></div>
	`;
	for (i = 0; i < 5; i++) {
		console.log(generationIndex);
		var generationIndex = "opponentHand"+i
		opponentHandArray.push({index:generationIndex, top: 0, right: 0, bottom: 0, left: 0});
		document.getElementById('opponentHand').innerHTML += `
			<div id="opponentHand`+i+`" class="flip-card" onclick="selectCard('opponent', '`+i+`')">
			</div>
		`;
		opponentHandArray[i] = sampleOpponentHand[i];
		generateCard(generationIndex, sampleOpponentHand[i]);
		document.getElementById("opponentHand"+i).classList.add("flipping");
	}
	boardArray = [];
	document.getElementById('output').innerHTML += `
	<div id="board" class="board" style="display:grid; grid-template-columns:auto auto auto;max-width:900px;height:70vh; width:60vh;"></div>
	`;
	for (i = 0; i < 9; i++) {
		var generationIndex = "card"+i
		document.getElementById('board').innerHTML += `
			<div id="card`+i+`" class="flip-card" onclick="selectBoard('card`+i+`')">
			</div>
		`;
		var emptyCard = {image: "images/mom/1-2.jpg;", top: 0, right: 0, bottom: 0, left: 0, rarity: "empty",};
		generateCard("card"+i, emptyCard)
		boardArray.push(emptyCard);
		console.log(boardArray[i].rarity);
	}
	playerHandArray = [];
	document.getElementById('output').innerHTML += `
	<div id="playerHand" class="hand" style="display:grid; grid-template-columns:minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);height:30vh;"></div>
	`;
	for (i = 0; i < 5; i++) {
		var generationIndex = "playerHand"+i
		playerHandArray.push({index:generationIndex, top: 0, right: 0, bottom: 0, left: 0});
		document.getElementById('playerHand').innerHTML += `
			<div id="playerHand`+i+`" class="flip-card" onclick="selectCard('playerHand'+`+i+`, '`+i+`')">
			</div>
		`;
		playerHandArray[i] = samplePlayerHand[i];
		generateCard(generationIndex, samplePlayerHand[i]);
	}
}

function flipCard(n) {
	var cardID = n.replace("card", "");
	cardID = parseInt(cardID);
	var cardToFlip = document.getElementById(n);
	if (boardArray[cardID].owner == 1) {
		cardToFlip.classList.add("flipping");
		boardArray[cardID].owner = 2
	}
	else {
		cardToFlip.classList.remove("flipping");
		boardArray[cardID].owner = 1
	}
}

function selectBoard(n) {
	if (selectedCard != "") {
		generateCard(n, selectedCard);
		var emptyCard = {image: "images/mom/1-2.jpg;", top: 0, right: 0, bottom: 0, left: 0, rarity: "empty",};
		n = n.replace("card", "");
		n = parseInt(n);
		boardArray[n] = selectedCard;
		boardArray[n].owner = 1;
		calculateFlips(n);
		document.getElementById(selectedOrigin).style.filter = "brightness(100%)";
		selectedCard = "";
		canPlayCards = 0;
		turnCounter += 1;
		generateCard(selectedOrigin, emptyCard);
		n = selectedOrigin.replace("playerHand", "");
		n = parseInt(n);
		playerHandArray[n] = emptyCard;
		if (turnCounter == 9) {
			calculateVictory();
		}
		else {
			setTimeout(opponentTurn, 900)
		}
	}
}

function calculateVictory() {
	var playerScore = 0;
	var opponentScore = 0;
	for (i = 0; i < 5; i++) {
		if (playerHandArray[i].rarity != "empty") {
			playerScore += 1
		}
	}
	for (i = 0; i < 5; i++) {
		if (opponentHandArray[i].rarity != "empty") {
			opponentScore += 1
		}
	}
	for (i = 0; i < 9; i++) {
		if (boardArray[i].owner == 1) {
			playerScore += 1;
		}
		else {
			opponentScore +=1
		}
	}
	if (playerScore > opponentScore) {
		writeText("Victory!");
	}
	if (playerScore == opponentScore) {
		writeText("Draw!")
	}
	if (playerScore < opponentScore) {
		writeText("Defeat!")
	}
}

function selectCard(origin, n) {
	if (canPlayCards == 1) {
		if (origin == selectedOrigin) {
			document.getElementById(selectedOrigin).style.filter = "brightness(100%)";
			selectedCard = "";
			selectedOrigin = "";
		}
		else {
			if (selectedCard == "") {
				if (origin.includes("player")) {
					document.getElementById("playerHand"+n).style.filter = "brightness(150%)";
					selectedCard = playerHandArray[n];
					selectedOrigin = origin;
				}
			}
		}
	}
	console.log(selectedCard);
}

function opponentTurn() {
	selectedCard = "";
	selectedOrigin = "";
	var finalFlips = 0;
	var finalCard = 9;
	var finalLocation = 0;
	var flipHolder = 0;
	var arrayOfMoves = [];
	var cardStrength = 99;
	for (handTester = 0; handTester < 5; handTester++) {
		if (opponentHandArray[handTester].rarity != "empty") {
			selectedCard = opponentHandArray[handTester];
			for (boardTester = 0; boardTester < 9; boardTester++) {
				if (boardArray[boardTester].rarity == "empty") {
					flipHolder = checkForFlips(boardTester);
					//console.log("Now checking card "+handTester+" on space "+boardTester+", number of flips is "+checkForFlips(boardTester));
					//This block of code is aggressive AI, it prioritizes offense and leaves out bait cards.
					if (flipHolder > finalFlips) {
						finalFlips = flipHolder;
						finalLocation = boardTester;
						finalCard = handTester;
						cardStrength = opponentHandArray[handTester].top + opponentHandArray[handTester].right + opponentHandArray[handTester].bottom + opponentHandArray[handTester].left;
					}
					if (flipHolder == finalFlips) {
						var newCardStrength = opponentHandArray[handTester].top + opponentHandArray[handTester].right + opponentHandArray[handTester].bottom + opponentHandArray[handTester].left;
						if (newCardStrength < cardStrength) {
							finalFlips = flipHolder;
							finalLocation = boardTester;
							finalCard = handTester;
						}
					}
					
				}
			}
		}
	}
	var emptyCard = {image: "images/mom/1-2.jpg;", top: 0, right: 0, bottom: 0, left: 0, rarity: "empty",};
	if (finalCard == 9 || finalFlips == 0) {
		for (handTester = 0; handTester < 5; handTester++) {
			if (opponentHandArray[handTester].rarity != "empty") {
				var newCardStrength = opponentHandArray[handTester].top + opponentHandArray[handTester].right + opponentHandArray[handTester].bottom + opponentHandArray[handTester].left;
				if (newCardStrength < cardStrength) {
					cardStrength = newCardStrength
					finalCard = handTester;
				}
			}
		}
		console.log(cardStrength);
	}
	if (boardArray[finalLocation].rarity != "empty") {
		for (boardTester = 0; boardTester < 9; boardTester++) {
			if (boardArray[boardTester].rarity == "empty") {
				finalLocation = boardTester;
			}
		}
	}
	console.log("Now ready to play card! Playing "+selectedOrigin+" in zone "+finalLocation);
	selectedCard = opponentHandArray[finalCard];
	selectedOrigin = "opponentHand"+finalCard;
	opponentHandArray[finalCard] = emptyCard;
	generateCard(selectedOrigin, emptyCard);
	boardArray[finalLocation] = selectedCard;
	boardArray[finalLocation].owner = 2;
	document.getElementById("card"+finalLocation).classList.add("flipping");
	generateCard("card"+finalLocation, selectedCard);
	calculateFlips(finalLocation);
	selectedCard = "";
	selectedOrigin = "";
	turnCounter +=1;
	if (turnCounter == 9) {
		calculateVictory();
	}
	else {
		canPlayCards = 1;
	}
}

function checkForFlips(placement) {
	//console.log("Checking for flips with "+selectedCard);
	var finalScore = 0;
	var checkLeft = false;
	var checkRight = false;
	var checkUp = false;
	var checkDown = false;
	var ownerChecker = 2;
	var target = 99;
	if (placement != 0 && placement != 3 && placement != 6) {
		//Not on the left side
		checkLeft = true;
	}
	if (placement != 2 && placement != 5 && placement != 8) {
		//Not on the right side
		checkRight = true;
	}
	if (placement > 2) {
		//Not on the top
		checkUp = true;
	}
	if (placement < 6) {
		//Not on the bottom
		checkDown = true;
	}
	//console.log("Now checking for flips. checkLeft = "+checkLeft+", checkRight = "+checkRight+", checkUp = "+checkUp+", checkDown = "+checkDown);
	if (checkLeft == true) {
		target = placement-1
		console.log("Now checking for flips to the left. "+selectedCard.left+" vs "+boardArray[target].right+". Target zone is "+boardArray[target].rarity);
		if (boardArray[target].right < selectedCard.left && boardArray[target].rarity != "empty") {
			console.log("!!!!!!!WE HAVE A FLIP!");
		}
		if (boardArray[target].right < selectedCard.left && boardArray[target].rarity != "empty" && boardArray[target].owner != ownerChecker) {
			finalScore += 1;
		}
	}
	if (checkRight == true) {
		target = placement+1
		console.log("Now checking for flips to the right. "+selectedCard.right+" vs "+boardArray[target].left+". Target zone is "+boardArray[target].rarity);
		if (boardArray[target].left < selectedCard.right && boardArray[target].rarity != "empty" && boardArray[target].owner != ownerChecker) {
			console.log("!!!!!!!WE HAVE A FLIP!");
			finalScore += 1;
		}
	}
	if (checkUp == true) {
		target = placement-3
		if (boardArray[target].bottom < selectedCard.top && boardArray[target].rarity != "empty" && boardArray[target].owner != ownerChecker) {
			finalScore += 1;
		}
	}
	if (checkDown == true) {
		target = placement+3
		if (boardArray[target].top < selectedCard.bottom && boardArray[target].rarity != "empty" && boardArray[target].owner != ownerChecker) {
			finalScore += 1;
		}
	}
	return finalScore;
}

function calculateFlips(placement) {
	var checkLeft = false;
	var checkRight = false;
	var checkUp = false;
	var checkDown = false;
	var ownerChecker = 2;
	var target = 99;
	if (placement != 0 && placement != 3 && placement != 6) {
		//Not on the left side
		checkLeft = true;
	}
	if (placement != 2 && placement != 5 && placement != 8) {
		//Not on the right side
		checkRight = true;
	}
	if (placement > 2) {
		//Not on the top
		checkUp = true;
	}
	if (placement < 6) {
		//Not on the bottom
		checkDown = true;
	}
	if (selectedOrigin.includes("player")) {
		ownerChecker = 1;
	}
	if (checkLeft == true) {
		target = placement-1
		if (boardArray[target].right < selectedCard.left && boardArray[target].rarity != "empty" && boardArray[target].owner != ownerChecker) {
			flipCard("card"+target);
		}
	}
	if (checkRight == true) {
		target = placement+1
		if (boardArray[target].left < selectedCard.right && boardArray[target].rarity != "empty" && boardArray[target].owner != ownerChecker) {
			flipCard("card"+target);
		}
	}
	if (checkUp == true) {
		target = placement-3
		if (boardArray[target].bottom < selectedCard.top && boardArray[target].rarity != "empty" && boardArray[target].owner != ownerChecker) {
			flipCard("card"+target);
		}
	}
	if (checkDown == true) {
		target = placement+3
		if (boardArray[target].top < selectedCard.bottom && boardArray[target].rarity != "empty" && boardArray[target].owner != ownerChecker) {
			flipCard("card"+target);
		}
	}
}

