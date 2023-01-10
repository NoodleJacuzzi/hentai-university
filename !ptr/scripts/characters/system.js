var character = 'system';
var eventArray = [
	{index: "paperwork", name: "File Paperwork", location: 'playerOffice', time: "MorningEvening", 
	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 0, left: 0,}
];
var newItems = [ //If price is 0 it isn't for sale
	{name: "Butt", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/butt.jpg", description: ""},
	{name: "Ghost AR", 			key: true, 		price: 30, 	image: "scripts/gamefiles/items/ghostAR.jpg", description: "The brand new mobile game Ghost AR! Track ghosts around the city, collect them all and save the world from their ghastly threat! Open your phone and tap 'Ghost AR' after buying to play, uses art by Mazeran Pickerman."},
	{name: "Town Map", 			key: true, 		price: 20, 	image: "scripts/gamefiles/items/map.jpg", description: "Allows you to navigate around town more easily."},
	{name: "Hypnosis Textbook", key: true, 	price: 50, 	image: "scripts/gamefiles/items/hypnosisTextbook.jpg", description: "A textbook on hypnosis, you can read it at home to improve your skill."},
	{name: "Hacking Textbook", 	key: true, 	price: 50, 	image: "scripts/gamefiles/items/hackingTextbook.jpg", description: "A textbook on hacking, you can read it at home to improve your skill."},
	{name: "Counseling Textbook", key: true, 	price: 50, 	image: "scripts/gamefiles/items/counselingTextbook.jpg", description: "A textbook on counseling, you can read it at home to improve your skill."},
	{name: "Lady", 				key: true, 		price: 0, 	image: "scripts/gamefiles/profiles/lady.jpg", description: "For if you'd like to play as a cute lady. Unlocks the Lady character portrait. Aesthetic change only, art by Nusumenaihxseki"},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default. Tab appears below the map, button appears on the map itself
	{index: "paperwork", 	name: "File some Paperwork", 	location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 65, day: "both",},
	{index: "hotel", 	name: "Continue", 	location: 'hotel', 		time: "MorningEveningNight", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 40, day: "both",},
	{index: "listTextbooks", name: "Read a Book", 			location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 20, left: 72, day: "both",},
	{index: "listTextbooks", name: "Read a Book", 			location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 20, left: 72, day: "both",},
	{index: "gameConsole", 	name: "Game Console", 			location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 62, left: 72, day: "both",},
	{index: "wardrobe", 	name: "Wardrobe", 				location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 62, left: 1, day: "both",},
	{index: "laptop", 		name: "Use the Computer", 		location: 'playerHouse', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 5, day: "both",},
	{index: "skillBooks", 		name: "Read up on self-help", 		location: 'library', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 25, left: 25, day: "both",},
	{index: "styleBooks", 		name: "Read up on artistic styles", 		location: 'library', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 45, left: 45, day: "both",},
	//index: "gameBooks", 		name: "Read up on the latest trends", 		location: 'library', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 45, day: "both",},
	{index: "nap", 			name: "Take a Nap", 			location: 'playerHouse', 		time: "MorningEvening", 			itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "nap", 			name: "Take a Nap", 			location: 'playerOffice', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "nap", 			name: "Wait", 			location: 'map', 		time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 0, left: 0, day: "both",},
	{index: "newDay", 		name: "Go to Bed", 				location: 'playerHouse', 		time: "Night", 		itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 52, left: 35, day: "both",},
	{index: "shop", 		name: "General Store", 			location: 'shoppingDistrict', 	time: "MorningEvening", 	itemReq: "", trustMin: 0, trustMax: 0, type: "button", top: 40, left: 60, day: "both",},
];

function writeEncounter(scene) {
	console.log('now writing encounter '+scene);
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	if (scene.includes("porn") || data.player.location == 'gallery') {
		document.getElementById('output').innerHTML = '';
	}
	switch (scene) {
		case "hotel": {
			if (checkFlag("demon", "hotelBad") == true) {
				loadEncounter("demon", "hotelBadFinish");
			}
			if (checkFlag("succubus", "hotelGood") == true) {
				loadEncounter("succubus", "hotelGoodFinish");
			}
			if (checkFlag("succubus", "hotelGood") != true && checkFlag("succubus", "hotelGood") != true) {
				writeText("You've encountered a bug! Somehow, you entered the hotel without triggering the hotel flags. Click this button to go home, and tell noodle what happened!");
				writeFunction("changeLocation('playerHouse')", "Go home")
			}
			break;
		}
		case "start" : {
			updateMenu();
			document.getElementById('playerImage').src = "scripts/gamefiles/none.png";
			var bg = "scripts/gamefiles/logo2.png";
			document.getElementById('wrapperBG').style.backgroundImage = "url("+bg+")";
			writeBig("scripts/gamefiles/logo2.png");
			writeCenteredText("Hentai University is an adult game created by NoodleJacuuzi and Captain Cryptogreek. You can find and keep up with all NoodleJacuzzi's games, including Human Alteration App, Anomaly Vault, Bitch Medicenter, and Rainy DayZ at the master index here: <a href='https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi's Index</a>.");
			writeCenteredText("You can find more of Captain Cryptogreek's work here: <a href='https://www.reddit.com/user/CaptainCryptogreek'>Captain Cryptogreek on Reddit</a>");
			writeCenteredText("Before you begin, please review this short list of other notes and disable content as you please:");
			writeFunction("loadEncounter('system', 'otherNotes')", "Review important notes");
			writeFunction("loadEncounter('system', 'veganMenu')", "Enable vegetarian / carnivore mode, disabling straight/gay content");
			writeText("<hr>");
			writeCenteredText("This game uses art by artists like Enoshima Iki, Nagi Ichi, Oreteki18kin, and Gujira. Every image for each character is credited, and the artist can be reviewed by hovering over the image, hold-tapping it on mobile, or by looking in the character's logbook. In addition use the link below or in the credits for a full list of artists as well as links to their pixiv accounts and dlsite circles where you can purchase the CG sets these characters came from:");
			writeFunction("loadEncounter('system', 'artistList')", "See the list of artists");
			writeText("<hr>");
			writeCenteredText("Once you've read the information and chosen your desired settings...");
			writeCenteredText("<span style='font-size:300%;'><b>Choose Your Character!</b></span>");
			document.getElementById('output').innerHTML += `
			<div id="wardrobeGrid" style="display:grid; grid-template-columns:auto auto;">
			
				<img class="medPicture" style="max-width:40vw; filter:brightness(50%);"; id="basic" src="scripts/gamefiles/characters/basic.jpg" 
				onclick="writeEncounter('prologue')",
				onmouseover="wardrobeMouseOver('basic')"
				onmouseout="wardrobeMouseOut('basic')">
				
				<img class="medPicture" style="max-width:40vw; filter:brightness(50%);"; id="basil" src="scripts/gamefiles/characters/basil.jpg" 
				onclick="writeEncounter('prologueAlt')",
				onmouseover="wardrobeMouseOver('basil')"
				onmouseout="wardrobeMouseOut('basil')">
			</div>
			`;
			// replace [\r\n]+ with , 
			writeText("<hr>");
			writeCenteredText("<span style='font-size:300%;'>Special thanks to:</span>");
			writeSpecial("Xazzafrazz for helping me with fixing a huge bug with loading characters, Stiggy752 for the game's CSS, Wild Bill/Master of Puppets for the game's save to file system, and to OrangeMaestro for his orange eyes helping find many of the typos that plagued this game. Other typo/bug-hunters I'd like to shout out are Atomic Goblin, Chomp, crnicu, DarkNico, DogsAreBetterThanCats, Dowee, Eintei, Goblin Boy, Master of Puppets, M M T, MustafaSerkan, Nico Fox, PancakeLoverAkechi, Papa Primus, Shbers, sinofsloth345, SlackerSavior, and all anonymous posters who posted bugs via the suggestion box. Thanks!");
			writeSpecial("And to @spectralworks_ for providing his art for a male version of hex maniac a ghost game reward!");
			writeText("<hr>");
			writeCenteredText("<span style='font-size:300%;'>And a huge thank you to all of my fantastic patrons:</span>");
			writeSpecial("Robbie, SlackerSavior, Here Not, Confused, Moony, 4MinuteWarning, A.X.J, 林家豪, Andre, ArtemisAisu, Badaxe, Ben Nowak, BlackKnight1945, Bob, Brian Graham, brodoe1, Christopher Fox, Colin E, Dezyego, Diederik Toxopeus, DRhost, Dylan, e3, Elias, Eylgar, Hema Mania, ivanhunter- johnson, J_C_L, jack spencer, Jacob Lane, Jesus Millan, john, Klark Lesly, Knut Joakim Ellingsen, landon sills, LostSand, Louts, Manav, Manny Coutlakis, Marco Wassmer, Maybenexttime, Miner49r, mitchell cross, Na707, notornis, Novalis Silveratum, Ora494, Panda, Rictor86, ripcord628 Gondzi, Ripper, Sealon, Selignite Verine, Sergio Ramirez, Shaun, simon, Simon van Eeden, Stanley Cheong, Te Tule, that GUY, Vikignir, william lagier, Xazzafrazz, yami, Zane Dura, Zun, 仕源 李, A Channel, abuse toast, æ·±æµ·å¸çŽ‹, æ——æœ¨åƒ æ²’æœ‰, Akiha Tohno, Alex, Alex Thomas, Anarion01, Angel lachaud, AnotherAccount333, Antoine Panaye, Anton Schmidt, Antonio David Chase, Ard Galen, Arkanian001, Artheares, Ary Toussaint, asdf123, Ash mash, Ashwinder, Asmo, ASSIRTIVlizard, asulus diablo, Austin, Austin Hove, axzsd, AzarathNinja, B, Bastl, BeatDem Cheeks, beefboy, Biblicallyaccuratepitbull, Big BNB, BINKS, Blade, Bleed1ngthunder, Bob, Bob Sherran, BOK, Bradley Herbert, Braedon Jasper, brandon, Brosef88, buddy99, ç„¡å çƒé¾œ, Calla Smith, Callum Northedge, Cameron Chilton, Cameron Farabee, Candi-Stryper, Carlos, Carson Goodwin, cat, Cdev57, cheeriermoss4, Chima549, Christian Lee, ChronosEdge, ClockZ -Tar-, crimepunt, Crow, Cynnau, Daddy Tsume, DALLAS SISCO, Dallas Wright, dalvin lopez, Damsolo14, Dan, D'andre, DarthMalak, david, David Outram, david thompson, dawson, ddkre, Demonin Koloman, dev, DigiReave, Divide, dogsoneup, Dominic, Dominic Pernicone, Doryu, Draconet547, Dragoon22, drollest foot892, Dry_Garen, Dugelle, Dumcanem, dylan makings, è‡´è¿œ èˆ’, é•¿å¹³ é¬£, EgoDraconis, Eric Hslew, Evrett Varlan, Fangrove, FelloMello, Fernando Paz, Forde Wellman, fuckboi13, G. O, gabriel briones, Garrett Wade, Genxin, Geoff Heimos, ggboomsky, GirmusCz, goi, Greatsage56 ., Grim2011, Grython, Harrison Russell Brasch, henry grobins, Henry Litten, Hikari, Hrasah, Hydrq, Hyunsoo Lee, Ian Kerris, Ian Whitehead, IDFK, Ignorant Fool, INSTSM, Isaiah Gregg, Isaiah Sandoval, ItsAllOgreNow, J, Jack Masters, Jack Thompson, Jacob Atkins, Jacob Damoiseaux, jacob g, Jacob Higgs, Jaden Clark, Jamarion Blair, James Petty, Jamie, Jane, Jarallah Humaid, jaron, Jax Medema, Jazz, Jesse Greene, Jesus millan Gonzalez, Jimboo, joe, Joel Humphrey, john, John Nixon, john smith, john sparks, Johngoober, Jose MuÃ±oz, joseph, Joshua Wilmann, Juan Fernandez, Justin, Justin Kays, Kahl Free, kalan willess, Kaliden, Kethis Immortalis, Kient Wong, Kieron Kow, KIVA, Konrad Tomanek, KOOLAID, kyle fenton, Kyle Jones, Kyle Michael, Kyverdrade, Leanerbike1363, legacy fletcher, Lemme learn how to play piano, Lenny Lerry, Leon K, Lex Long, Lexi Lauton, Liam Connelly, Lil boss, Lily Evans, Limitless, LIN ZY, Lucas Laaksonen, Luis Orellana, Luke Lange, Lyko90, mahdeennave, Malachi Townsley, Marcus Gade, Marcus New, Mark, Mark Laner, Markus Hansen, Mason, Matt Silverman, Matthew Preston, matthew scarborough, Max, Maxolution, Maxwell Dedmon, meowy2, Michael Graham, Michael Stone, Minerve1, mitchellwolbert, morgan hirst, MPZ_00, Mullins JR 74, murgatroid99, Naruto fan guy, Nathaniel Grams, Neill R Toohey, Neyafi, Nick Becker, Nickson Schenk, Nicman488, nicol, Noah675, None, NyxKnight, Omar Flores, Pascal Nitsche, Patrick Buhalo, pepsi, Peter H, Petrichor, Phanes, Phillip A Brann, philthy, Plaaer, qqss, raun q, ReignVI, ren hero, RidiculeCat, Roniesis Narvaez, ryan, Ryan Spindler-Hanowski, Ryan Towers, Ryker, Sahil, sakkra83, sb2017, Scumstango, Sean Corley, Sean McKeon, Sean sullivan, sebastionLender, Sera, sh w, Shadez, Shadichaos, Shinikami, Shivane, Sid Wolf, Silverstreak1410, sindre Elshaug, Singer Moritz, Skygods, Slomberg, sltcbati, SmightySmiter, SmolFish, Sniezertas, SnivGrits, Snow, SomebodyElse, Sonny Coen, Squidy Cool Shoes, Stafford Harris, Stan Manson, studly787, Tanman, Tbnr Nuts, TCFish, Tebachi, TeLoad, ThatGuyWithTheFace, ThatOtherGuy, The Frinky Dink Man, The Gemars, theoron, thesingleguy, Thomas DeChon, Timothy Lewis, Tired_Sup, tito, Tyler Ross, tyler wyser, Uncle, undead270, unfading89, Vault, Venomill, Verillia tristari, Vikteren, Ville, Void Walker, VOID952, wei huang, Wild Bill, xdrake100, yjzyjz, Yongjie Zhao, Your Husbando, Youtube Account, Zach allen, Zachary Schicker, Zachary Webb, zafoche, بدر القرني, 仕科 余, and 陈 for funding this work! The patreon funds are split as Captain Cryptogreek has taken over as lead writer for the game.");
			writeText("<hr>");
			writeSpecial("Here's a list of authors who's written for the game:");
			writeSpeech("<a href = 'https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi</a>", "scripts/gamefiles/characters/noodle.jpg", "<b>Author of momF, Lana, tomgirlF, succubusF, and others.</b><br>I almost named myself Dwayne 'The Guac' Johnson.<br>Click my name to play my other games if you want.");
			writeSpeech("Cryptogreek", "scripts/gamefiles/characters/crypto.jpg", "<b>Author of kuroF, mistressF, maidF, mejiF, housekeepF, and others.</b><br>Thanks for enjoying the game my fellow degenerates!");
			writeSpeech("SlackerSavior", "scripts/gamefiles/characters/slacker.jpg", "<b>Author of sportsF, coachF, coldF, swimmerF, and orangeF.</b><br>I wanted to write 'Don't ask me for shit' here, but it felt a little too rude.<br>So feel free to ask, but don't expect results anytime soon.");
			break;
		}
		case "otherNotes": {
			writeText("If you are playing this game on a service such as gamcore or another hosted service, I recommend you play on <a href='https://noodlejacuzzi.github.io/index.html'>My Index</a> instead. There are also links to a direct download of the game, as well as a list of cheat codes!");
			writeText("<hr>");
			writeText("Are <b>you</b> interested in getting your own character into Hentai University? Well, you're in luck! Hentai University v3 includes <b>Mod Support!</b> Hop over to the game's <a href='https://noodlejacuzzi.github.io/Hentai%20University%20Modding%20Tutorial/Tutorial.html'>Modding Tutorial</a> if you're interested.");
			writeText("<hr>");
			writeText("We're always open to comments or criticism. If you feel like school management would add a lot to the game, you'd like us to consider adding another artist, or you'd like to suggest content of your own, you can shoot us a message anywhere this game is posted. You can find the Patreon here: <a href='https://www.patreon.com/noodlejacuzzi'>Patreon Link</a>");
			writeText("You can also send us a message directly. Noodlejacuzzi is on discord (NoodleJacuzzi#4120) or you can send an email at noodlejacuzzi@gmail.com");
			writeText("Captain Cryptogreek can be messaged on his reddit account where he regularly posts captions. You can also shoot him an email if you'd like him to proofread or you'd like to commission his skills at cryptogreekcaptions@gmail.com");
			writeText("<hr>");
			writeText("This game is based (loosely) on the design of Hentai High School by Capta1n and the Hentai High School + project. However, there are no elements of school management or system of global corruption. The smaller scale means it will be more feasible to complete than either of those games.");
			writeText("As a content warning, this game features hypnosis and dubious consent between partners, and mostly depicts straight M/F sex. There are several male characters who have scenes depicting undoubtably homosexual content, but they universally have a twink/femboi bodytype and no specific character relationships are ever forced on the player. Finally, all characters are portrayed as being 18 or older. Every single character is a high-school graduate, and we currently don't intend to add any character who is underaged.");
			writeText("If you'd like to avoid any specific fetishes, each character's logbook page lists the fetishes their scenes cover. Keep in mind that, as you are a hypnotist, hypnosis/mind control is so common we won't list it in the tags.");
			writeText("<hr>");
			writeText("You can click on the title of a window to close it. For example, if you click 'LOGBOOK' on the left (or bottom on mobile), you can close the new window by clicking anywhere in the 'LOGBOOK' section at the top.");
			writeText("There is absolutely NO grinding required to enjoy this game. Please do not feel obligated to grind for money as it is passively generated over time, and the amount you earn over time increases as you play the game. For money and stats the optimal way to play is to simply wander the town and interact with characters you like. If you ever feel pressured to grind, I recommend using a cheat code from my index instead.");
			writeText("<hr>");
			writeText("Finally, there's also a <a href='https://tiermaker.com/create/hu-waifu-tier-list-1109129'>Tier List Maker</a> for the game. It could be a fun way to start a conversation on the discord. NoodleJacuzzi has already prepared an objectively correct one for your educational benefit:");
			writeBig("scripts/gamefiles/tierList.png");
			writeBig("scripts/gamefiles/alignmentChart.png");
			writeFunction("loadEncounter('system', 'start')", "Go back to the start");
			break;
		}
		case "artistList": {
			listArtists();
			writeFunction("loadEncounter('system', 'start')", "Go back to the start");
			break;
		}
		case "veganMenu": {
			if (data.player.vegetarian != true && data.player.carnivore != true) {
				writeSpecial("Currently neither vegetarian or carnivore mode are active. You are an omnivore who can lewd both sexes!");
			}
			if (data.player.vegetarian == true && data.player.carnivore == true) {
				writeSpecial("... You've disabled both male and female characters. Are you sure this is the right game for you?");
			}
			writeBig("images/locations/vegetarian.jpg");
			if (data.player.vegetarian == true) {
				writeSpecial("Vegetarian mode is active! Femboy / male characters will no longer appear.");
				writeFunction("loadEncounter('system', 'vegetarianToggle')", "Disable vegetarian mode");
			}
			else {
				writeFunction("loadEncounter('system', 'vegetarianToggle')", "Enable vegetarian mode");
			}
			writeBig("images/locations/carnivore.jpg");
			if (data.player.carnivore == true) {
				writeSpecial("Carnivore mode is active! Female characters will no longer appear. System-essential characters such as incubusF and principalF will still appear, but will have alternate interactions with no sex.");
				writeFunction("loadEncounter('system', 'carnivoreToggle')", "Disable carnivore mode");
			}
			else {
				writeFunction("loadEncounter('system', 'carnivoreToggle')", "Enable carnivore mode");
			}
			writeText("All of the artists who's works we've used have different styles, and all work is censored due to Japan's censorship laws. It is worth noting that each have their own appeal / flaws. Oreteki is a divisive artist due to his style of drawing labia lips, and Nagi Ichi's work is 90% M/M. If these features are a dealbreaker for you, consider avoiding characters by these artists.");
			writeFunction("loadEncounter('system', 'oretekiTest')", "See an Oreteki18kin example <br>(LONG LABIA LIPS/FLAPS)");
			writeFunction("loadEncounter('system', 'start')", "Go back");
			break;
		}
		case "vegetarianToggle": {
			if (data.player.vegetarian == true) {
				data.player.vegetarian = false;
			}
			else {
				data.player.vegetarian = true;
			}
			loadEncounter('system', 'veganMenu');
			break;
		}
		case "carnivoreToggle": {
			if (data.player.carnivore == true) {
				data.player.carnivore = false;
			}
			else {
				data.player.carnivore = true;
			}
			loadEncounter('system', 'veganMenu');
			break;
		}
		case "listTextbooks": {
			listTextbooks();
			break;
		}
		case "prologue": {
			writeText("Dear <input type='text' id='nameSubmission' value='Thomas'>");
			writeText("It is with immense pleasure that I write to inform you today of your successful acceptance into the role of school counselor.");
			writeText("Due to a variety of reasons, few men have ever been considered for a position here, but your outstanding collection of references and qualifications have  made it clear that you belong here.");
			writeText("I am told that you have already finished the moving process. The dedication required to uproot yourself will not be taken lightly.");
			writeText("I have no doubt that the lives of our students will improve with the addition of a full time counselor, and I very much look forwards to meeting you.");
			//writeText("- Yours, Principal "+data.story[8].fName+".");
			writeFunction("renamePlayer()", "Finish reading the paper");
			break;
		}
		case "prologueAlt": {
			data.player.gender = "woman";
			data.player.title = "Miss";
			data.player.honorific = "ma'am";
			if (checkBody("basil") != true) {
				var goof = {index: "basil", artist: "Art by Ishimura",};
				data.bodytypes.push(goof);
			}
			var pepsi = data.bodytypes.length-1;
			changeBody(pepsi);
			writeText("Dear <input type='text' id='nameSubmission' value='Tomara'>");
			writeText("It is with immense pleasure that I write to inform you today of your successful acceptance into the role of school counselor.");
			writeText("Due to a variety of reasons, few women of your background have ever been considered for a position here, but your outstanding collection of references and qualifications have  made it clear that you belong here.");
			writeText("I am told that you have already finished the moving process. The dedication required to uproot yourself will not be taken lightly.");
			writeText("I have no doubt that the lives of our students will improve with the addition of a full time counselor, and I very much look forwards to meeting you.");
			//writeText("- Yours, Principal "+data.story[8].fName+".");
			writeFunction("renamePlayer()", "Finish reading the paper");
			writeHTML(`
				t <b>Warning! Due to the nature of this game's images, many scenes will visually depict the main character as having a male body. While many images were not used in game and some have been cropped or editted to avoid clearly depicting a male player, some images which do this still remain.</b>
				t <b>This mode only changes your character's profile and logbook image, the pronouns characters use when referring to you, dialogue ("Geezer" becomes "Hag", "Master" becomes "Mistress", etc), and some scene descriptions. If you notice any misgenderings, or you'd like to use the Blacklist cheat to create an image blacklist of undesirable pictures, please contact Noodle Jacuzzi via discord, F95Zone, Hypnopics, or email at noodlejacuzzi@gmail.com</b>
			`);
			break;
		}
		case "prologue2": {
			writeBig("scripts/gamefiles/characters/"+data.player.character+".jpg", "Art by Ishimura");
			writeText("You are " + data.player.name + ", amateur hypnotist.");
			writeText("The time spent collecting and hypnotizing references almost wasn't worth it, especially with how long faking your credentials took. But it paid off in the end.");
			writeText("Today you'll be sliding right into your new position as a school counselor. Your direct supervisor is well under your control, so you have completely free range for as long as you play it safe.");
			writeText("The house is free too, so you could just sleep in all day and get paid every five days like clockwork. But there's a lot more on offer here to enjoy.");
			writeText("This town is a hotspot of beautiful women, and the school it surrounds is often referred to by its nickname.");
			writeText("<b>Hentai University</b>");
			writeFunction("changeLocation('playerHouse')", "Get Started");
			break;
		}
		case "oretekiTest": {
			writeBig("images/porn/5A-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/principal/070.jpg", "Art by Oreteki18Kin");
			writeFunction("loadEncounter('system', 'veganMenu')", "go back");
			break;
		}
		case "cheat": {
			writeCenteredText("You can enter cheat codes here. For example, use the code 'new name' to rename all of the game's other characters.");
			writeCenteredText("I keep a list of all of these on my patreon, go there, even if you aren't a patron, to find them.");
			writeCenteredText("Enter cheat code: <input type='text' id='cheatSubmission' value=''>");
			writeFunction("diagnostic()", "Submit");
			writeFunction("loadEncounter('system', 'gameConsole')", "Go back");
			break;
		}
		case "load": {
			document.getElementById('output').innerHTML += `
				<p class='centeredText'>Warning: Save before using. Enter the modded character's index EXACTLY or it will cause issues and you'll need to load the game.</p>
				<p class='centeredText'>As of v8 March 27th 2020, The mod characters by SlackerSavior have been fully added into the game. Type in <b>coach</b> below to load them into the game. Please keep in mind though that only Zoe and Amy have content.</p>
				<p class='centeredText'>Enter character's index: <input type="text" id="indexSubmission" value=""></p>
				<p class='choiceText' onclick='modCharacter()'>Submit</p>
			`;
			if (data.player.location == "") {
				writeFunction("writeEncounter('start')", "Finish");
			}
			else {
				writeFunction("writeEncounter('gameConsole')", "Finish");
			}
			break;
		}
		case "newDay": {
			if (data.player.location != scene) {
				randNum = getRandomInt(8);
				randNum += 1;
				data.player.dayID = randNum;
				console.log("Today's day ID is " + data.player.dayID);
				data.player.day += 1;
			}
			for (i = 0; i < data.story.length; i++) {
				data.story[i].encountered = false;
			}
			data.player.time = "Morning";
			updateMenu();
			//checkDay();
			var specialEvent = false;
			//Checking for special events
			console.log("Now checking for special events for on day " + data.player.day);
			if (data.player.day == 3) {
				//specialEvent = true;
				//writeFunction("writeEvent('specialDay')", "Go to the special event");
				//writeTransition("playerHouse", "Skip the event");
			}
			if (checkTrust('succubus') > 70) {
				if (checkFlag('succubus', 'breakfast') == false) {
					specialEvent = "breakfast"; 
				}
			}
			if (checkTrust('fitboi') > 82 && checkFlag("fitboi", "morning") == false) {
				if (checkFlag('fitboi', 'morning') == false) {
					specialEvent = "shecream"; 
				}
			}
			if (checkTrust('succubus') > 77) {
				if (checkFlag('succubus', 'mission') == false) {
					specialEvent = "mission"; 
				}
			}
			var nurseReady = false;
			if (checkTrust("nurse") > 79 || checkTrust("nurse") == 3) {
				nurseReady = true;
			}
			var ojouReady = false
			if (checkTrust("ojou") > 79 || checkFlag("ojou", "incubus") == true) {
				ojouReady = true;
			}
			if (
				checkTrust("scarf") > 99 &&
				nurseReady == true &&
				checkTrust("president") > 99 &&
				checkTrust("mama") > 18 &&
				ojouReady == true &&
				checkTrust("instructor") > 1 &&
				checkTrust("pinstripe") > 1
			) {
				if (checkFlag('president', 'shadowCouncil') == false) {
					specialEvent = "shadowCouncil"; 
				}
			}
			if (checkTrust("gilf") == -3) {
				specialEvent = "morning1"; 
			}
			if (checkTrust("son") == 25) {
				specialEvent = "sonMorning"; 
			}
			if (checkTrust("papi") == 64) {
				specialEvent = "papiMorning"; 
			}
			if (checkFlag("mom", "mods") != true && data.player.day > 49) {
				addFlag("mom", "mods");
				specialEvent = "mods"; 
			}
			if (data.player.day == 100) {
				specialEvent = ""; 
			}
			if (checkTrust("wife") == 8) {
				specialEvent = "wifeCliffhanger"; 
			}
			switch (specialEvent) {
				case "breakfast": 
					loadEncounter('succubus', 'breakfast');
				break;
				case "mission": 
					loadEncounter('succubus', 'missionStart');
				break;
				case "morning1": 
					loadEncounter('gilf', 'morning1');
				break;
				case "sonMorning": 
					loadEncounter('papi', 'sonMorning');
				break;
				case "papiMorning": 
					loadEncounter('papi', 'papiMorning');
				break;
				case "shadowCouncil": 
					loadEncounter('president', 'shadowCouncilA');
				break;
				case "shecream": 
					loadEncounter('fitboi', 'fitboiMorning');
				break;
				case "wifeCliffhanger": 
					loadEncounter('wife', 'wifeMorning');
				break;
				case "mods": 
					writeBig("scripts/gamefiles/images/v20.png");
					writeSpecial("You've played more than 50 days, amazing! Have you checked the game console for more characters by talented HU modders? Above are a few characters who were added in version 20!");
				default: {
					console.log("No events found");
					checkForPhone();
					if (data.player.day == 100) {
						writeSpecial("You've played 100 days, amazing! Thank you very much for playing so far, please be sure to back up your save though! You can do this by saving to a text string, or by saving to a .noodle file in the save menu!");
					}
					document.getElementById('output').innerHTML += `
						<div class="playerRoom">
							<img class="backgroundPicture" src="images/locations/newDayMorning.jpg" usemap="#roomMap">
						</div>
					`;
					if (checkFlag("mom", "megaEasy") == true) {
						printLocationButton(
							"Get out of bed", 
							40, 
							40, 
							"map", 
						);
					}
					else {
						printLocationButton(
							"Get out of bed", 
							40, 
							40, 
							"playerHouse", 
						);
					}
					if (checkFlag("mom", "megaEasy") != true) {
						var illegalLocations = "map, casino, beach, hotel, playerHouse";
						var morningLocation = "";
						var eveningLocation = "";
						for (locationIndex = 0; locationIndex < locationArray.length; locationIndex++) {
							if (locationArray[locationIndex].index == savedLocations.morning) {
								morningLocation = locationArray[locationIndex].name;
							}
							if (locationArray[locationIndex].index == savedLocations.evening) {
								eveningLocation = locationArray[locationIndex].name;
							}
						}
						if (savedLocations.morning != "" && illegalLocations.includes(savedLocations.morning) != true) {
							writeFunction("changeLocation('"+savedLocations.morning+"')", "Shortcut: "+morningLocation);
						}
						if (savedLocations.evening != "" && illegalLocations.includes(savedLocations.evening) != true && savedLocations.evening != savedLocations.morning) {
							writeFunction("changeLocation('"+savedLocations.evening+"')", "Shortcut: "+eveningLocation);
						}
						savedLocations.morning = "";
						savedLocations.evening = "";
					}
				}
			}
			if (data.player.day % 5 === 0) {
				var paybaby = 10 + data.player.counseling;
				writeSpecial("It's payday! $10 has been wired to your account.");
				if (data.player.counseling > 0) {
					writeSpecial("You've received an extra $" + data.player.counseling + " for being so skilled, you sly dog!");
				}
				if (checkFlag('starlet', 'porno') == true) {
					paybaby += 20;
					writeSpecial("You recieved an extra $20 from your appearance in porn!");
				}
				data.player.money += paybaby;
			}
			if (checkTrust('principal') == 40) {
				if (data.player.carnivore != true) {
					raiseTrust('principal', 1);
				}
			}
			var failureToRead = false;
			for (z = 0; z < data.story.length; z++) {
				if (data.story[z].unreadText ==true) {
					if (data.story[z].textEvent.includes("eward") != true) {
						failureToRead = true;
					}
				}
			}
			if (failureToRead == true) {
				reminderFontSize += 50;
				writeText("<span style='font-size: "+reminderFontSize+"%'>You have one or more unread text messages!</span>");
				document.getElementById('phoneButton').style.color = "#0F0";
			}
			else {
				reminderFontSize = 100;
			}
			break;
		}
		case "laptop": {
			var galleryFiltersAuthor = "";
			var galleryFiltersArtist = "";
			writeFunction("loadEncounter('system', 'porn')", "Look up porn");
			writeFunction("loadEncounter('system', 'gallery')", "View the gallery");
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "porn": {
			if (data.player.time == "Night") {
				writeText("Looking out your window, you notice it's already night! You'll need to get some sleep.");
			writeFunction("changeLocation('playerHouse')", "Finish");
			}
			else {
				if (data.player.carnivore == "true") {
					writeText("Scrolling through the list, most videos uploaded to this porn site are straight. After a quick skim you don't find anything of note except for the personalized adds.")
				}
				else {
					writePorn();
				}
				writeFunction("loadEncounter('system', 'laptop')", "Go back");
				if (data.player.vegetarian != true && checkFlag("camboi", "stream") != true && data.player.day > 1) {
					popup();
				}
			}
			break;
		}
		case "gallery" : {
			data.player.location = 'gallery';
			generateGalleryNav();
			writeFunction("changeLocation('playerHouse')", "Finish up");
			break;
		}
		case "gameConsole": {
			writeFunction("loadEncounter('system', 'cheat')", "Enter cheat code");
			if (checkFlag("mom", "mods") != true) {
				writeFunction("loadEncounter('system', 'existingMods')", "Check out some included mods", "green");
			}
			else {
				writeFunction("loadEncounter('system', 'existingMods')", "Check out some included mods");
			}
			writeFunction("loadEncounter('system', 'load')", "Load an external mod character");
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case "existingMods": {
			writeCenteredText("Here's a list of mods submitted on the Noodle's Jacuzzi discord server. Please keep in mind these may not be the latest versions of these characters, especially if you are playing a downloaded version of the game.");
			writeCenteredText("This list serves as a method for modders to have their characters uploaded and be made playable online, but please keep in mind that certain content, such as underage or bestiality content, shall not be hosted here. If you would like your characters uploaded to this list, please let me know via discord!");
			if (checkFlag("mom", "mods") != true) {
				addFlag("mom", "mods");
				checkForAchievements();
			}
			writeMed("images/sports/profile.jpg");
			writeCenteredText("Zoe & the volleyball team - SlackerSavior");
			writeCenteredText("Status - Multiple characters finished, several characters in-progress");
			writeFunction("", "SlackerSavior's characters are implemented into the game by default! Please drop by the discord or the f95zone thread if you'd like to give much-welcome feedback!");
			writeMed("images/intern/aceBoys.jpg");
			writeCenteredText("Dan Flint & Ace's other fembois");
			writeSpecial("Status - Multiple currently finished male characters by Ace! They have corruption content and Aaron has a crossdressing club scene too!");
			writeFunction("writeEncounter('loadIntern')", "Load Ace's male characters, last updated 3/31/2021");
			writeMed("images/dropout/aceGirls.jpg");
			writeCenteredText("Ace's Girls");
			writeSpecial("Status - A brand new girl not pictured, the accountant of your dreams! Load today for a special preview of her!");
			writeFunction("writeEncounter('loadAceGirls')", "Load Ace's girls, last updated 4/22/2022");
			writeMed("images/ghost/profile.jpg");
			writeCenteredText("Sadako Yamamura - PenguinThunder");
			writeSpecial("Status - Currently Finished. Assumes you have progress with Gou, a male character. If you don't, the content might be confusing, but you don't <i>need</i> to understand Gou to follow the plot.");
			writeFunction("writeEncounter('loadGhost')", "Load Sadako Yamamura by PenguinThunder, last updated 12/16/2021");
			writeFunction("writeEncounter('gameConsole')", "Go back");
			break;
		}
		case "loadIntern": {
			var internLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "intern") {
					console.log(name+' found already in the data variable, aborting function');
					internLoaded = true;
				}
			}
			if (internLoaded == false) {
				var newCharacter = {index: "intern", fName: "Dan", lName: "Flint", trust: 0, encountered: false, textEvent: "", met: false, color: "#2388ED", author: "KH_Ace", artist: "", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/intern/profile.jpg;
					sp intern; internF internL has been added to the game!
				`);
			}
			else {
				writeText("internF has already been loaded.");
			}
			var seriousLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "serious") {
					console.log(name+' found already in the data variable, aborting function');
					seriousLoaded = true;
				}
			}
			if (seriousLoaded == false) {
				var newCharacter = {index: "serious", fName: "Aaron", lName: "Lucky", trust: 0, encountered: false, textEvent: "", met: false, color: '#338ABA', author: "KH_Ace", artist: "", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/serious/profile.jpg;
					sp serious; seriousF seriousL has been added to the game!
				`);
			}
			else {
				writeText("seriousF has already been loaded.");
			}
			writeFunction("writeEncounter('gameConsole')", "Back to the console");
			break;
		}
		case "loadAceGirls": {
			var dropoutLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "dropout") {
					console.log(name+' found already in the data variable, aborting function');
					dropoutLoaded = true;
				}
			}
			if (dropoutLoaded == false) {
				var newCharacter = {index: "dropout", fName: "Chloe", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#50528F", author: "KH_Ace", artist: "Pastel Bitch", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/dropout/profile.jpg;
					sp dropout; dropoutF dropoutL has been added to the game!
				`);
			}
			else {
				writeText("dropoutF has already been loaded.");
			}
			var ayeyeLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "ayeye") {
					console.log(name+' found already in the data variable, aborting function');
					ayeyeLoaded = true;
				}
			}
			if (ayeyeLoaded == false) {
				var newCharacter = {index: "ayeye", fName: "Valery", lName: "Storm", trust: 0, encountered: false, textEvent: "", met: false, color: "#E37E7A", author: "KH_Ace", artist: "Silver Radish", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/ayeye/profile.jpg;
					sp ayeye; ayeyeF ayeyeL has been added to the game!
				`);
			}
			else {
				writeText("ayeyeF has already been loaded.");
			}
			var diamondsLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "diamonds") {
					console.log(name+' found already in the data variable, aborting function');
					diamondsLoaded = true;
				}
			}
			if (diamondsLoaded == false) {
				var newCharacter = {index: "diamonds", fName: "Ashley", lName: "Piece", trust: 0, encountered: false, textEvent: "", met: false, color: "#A737E3", author: "KH_Ace", artist: "Silver Radish", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/diamonds/profile.jpg;
					sp diamonds; diamondsF diamondsL has been added to the game!
				`);
			}
			else {
				writeText("diamondsF has already been loaded.");
			}
			var heartsLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "hearts") {
					console.log(name+' found already in the data variable, aborting function');
					heartsLoaded = true;
				}
			}
			if (heartsLoaded == false) {
				var newCharacter = {index: "hearts", fName: "Skye", lName: "Powers", trust: 0, encountered: false, textEvent: "", met: false, color: "#3F6971", author: "KH_Ace", artist: "", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/hearts/profile.jpg;
					sp hearts; heartsF heartsL has been added to the game!
				`);
			}
			var accountantLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "accountant") {
					console.log(name+' found already in the data variable, aborting function');
					accountantLoaded = true;
				}
			}
			if (accountantLoaded == false) {
				var newCharacter = {index: "accountant", fName: "Pamela", lName: "Light", trust: 0, encountered: false, textEvent: "", met: false, color: "#EF4E9B", author: "KH_Ace", artist: "Kitsuneyane", textHistory: "", unreadText: false,};
				data.story.push(newCharacter);
				writeHTML(`
					im images/accountant/profile.jpg;
					sp accountant; accountantF accountantL has been added to the game!
				`);
			}
			else {
				writeText("accountantF has already been loaded.");
			}
			writeFunction("writeEncounter('gameConsole')", "Back to the console");
			break;
		}
		case "loadSerious": {
			document.getElementById('output').innerHTML += `
				<input type="text" id="indexSubmission" value="serious">
			`;
			modCharacter();
			break;
		}
		case "loadGhost": {
			var ghostLoaded = false;
			for (loadIndex = 0; loadIndex < data.story.length; loadIndex++) {
				if (data.story[loadIndex].index == "ghost") {
					console.log(name+' found already in the data variable, aborting function');
					ghostLoaded = true;
				}
			}
			if (ghostLoaded == false) {
				var newCharacter = {index: "ghost", fName: "Sadako", lName: "Yamamura", trust: 0, encountered: false, textEvent: "", met: false, color: "#2388ED", author: "Penguinthunder", artist: "Vanitas", textHistory: "", unreadText: false, gender: "female", };
				data.story.push(newCharacter);
				writeHTML(`
					im images/ghost/profile.jpg;
					sp ghost; ghostF ghostL has been added to the game!
				`);
			}
			else {
				writeText("ghostF has already been loaded.");
			}
			writeFunction("writeEncounter('gameConsole')", "Back to the console");
			break;
		}
		case "wardrobe": {
			writeWardrobe();
			writeFunction("changeLocation('playerHouse')", "Go back");
			break;
		}
		case "renamingRoom": {
			for (i = 0; i < data.story.length; i++) {
				writeMed("images/"+data.story[i].index+"/profile.jpg");
				document.getElementById('output').innerHTML += `
				<p class="centeredText"><input type="text" id="nameSubmission`+i+`1" value="`+data.story[i].fName+`"> <input type="text" id="nameSubmission`+i+`2" value="`+data.story[i].lName+`"></p>
				`;
				writeFunction("resetProgress('"+data.story[i].index+"')", "Reset progress with "+data.story[i].fName);
			}
			writeFunction("renameEveryone()", "Rename characters");
			writeFunction("changeLocation('playerHouse')", "Cancel and leave");
			break;
		}
		case "youwillcallme": {
			writeBig("scripts/gamefiles/characters/"+data.player.character+".jpg", "Art by Ishimura");
			writeText("You are <input type='text' id='nameSubmission' value='"+data.player.name+"'>");
			writeText("Those you've hypnotized call you <input type='text' id='nicknameSubmission' value='*Master'>");
			writeFunction("renameNickname()", "Continue");
			writeFunction("changeLocation('playerHouse')", "Cancel and leave");
			break;
		}
		case "paperwork": {
			writeText("You can do paperwork here, earning some quick overtime cash based on your Counseling skill. Would you like to spend a few hours doing that?");
			writeFunction("loadEncounter('system', 'filing')", "Yes");
			writeFunction("changeLocation('playerOffice')", "No");
			break;
		}
		case "filing": {
			var moneyMade = 10 + data.player.counseling + data.player.counseling;
			passTime();
			data.player.money += moneyMade;
			updateMenu();
			writeText("You spent some time doing paperwork. It's a slow and boring job, but money is money after all. As a hypnotist aren't there better things to be doing though?");
			writeSpecial("You earned $" + moneyMade + "!");
			if (data.player.time != "Night") {
				writeFunction("changeLocation('playerOffice')", "Finish up");
			}
			else {
				writeFunction("changeLocation('playerHouse')", "It's getting late, head home");
			}
			break;
		}
		case "shopLoad": {
			writeFunction("loadEncounter('system','shop')", "test shop");
			break;
		}
		case "shop": {
			changeLocation('store');
			break;
		}
		case "nap": {
			passTime();
			changeLocation(data.player.location);
			break;
		}
		case "skillBooks": {
			updateMenu();
			writeHTML(`
				t It's not the most impressive of libraries, but it fits the school's atmosphere. There are a number of textbooks of all different types, but three catch your eye...
			`);
			if (checkFlag("mom", "lHypnos") != true) {
				writeFunction("loadEncounter('system', 'lHypnos')", "Read up on hypnosis");
			}
			if (checkFlag("mom", "lHack") != true) {
				writeFunction("loadEncounter('system', 'lHack')", "Read up on computer hacking");
			}
			if (checkFlag("mom", "lCoun") != true) {
				writeFunction("loadEncounter('system', 'lCoun')", "Read up on modern counseling techniques");
			}
			writeFunction("changeLocation('library')", "Finish");
			break;
		}
		case "lHypnos": {
			writeHTML(`
				t You thoroughly read through the book on hypnosis. It's an older script, but the techniques are still useful. A section on 'sensitivity enhancement' is particularly interesting.
			`);
			writeSpecial("Your hypnosis skill has increased!");
			data.player.hypnosis += 1;
			updateMenu();
			addFlag("mom", scene);
			passTime();
			writeFunction("changeLocation('library')", "Finish");
			break;
		}
		case "lHack": {
			writeHTML(`
				t You thoroughly read through the book on hacking. It's an older script, but the techniques are still useful. A section on how to install system backdoors is particularly interesting.
			`);
			writeSpecial("Your hacking skill has increased!");
			data.player.hacking += 1;
			updateMenu();
			addFlag("mom", scene);
			passTime();
			writeFunction("changeLocation('library')", "Finish");
			break;
		}
		case "lCoun": {
			writeHTML(`
				t You thoroughly read through the book on counseling. It's an older script, but the techniques are still useful. A section on how improve your relationship with your employer is quite interesting.
			`);
			writeSpecial("Your counseling skill has increased! Since you're more talented, that obviously equates to a pay bump!");
			data.player.counseling += 1;
			updateMenu();
			addFlag("mom", scene);
			passTime();
			writeFunction("changeLocation('library')", "Finish");
			break;
		}
		case "styleBooks": {
			writeHTML(`
				t The books here each have a different kind of visual flair, the selection is very chaotic.
				sp player; Interesting...
			`);
			writeFunction("loadEncounter('system', 'basicStyle')", "'The Basics - Written by Stiggy 752.'");
			writeFunction("loadEncounter('system', 'personaStyle')", "'Rebellion Against Rotten Adults - NoodleJacuzzi'");
			writeFunction("loadEncounter('system', 'royaltyStyle')", "'Chill Vaporwave Flows - NoodleJacuzzi'");
			writeFunction("loadEncounter('system', 'lobotomyStyle')", "'Lobotomization For Dummies - NoodleJacuzzi'");
			if (data.player.style == "persona") {
				writeFunction("loadEncounter('system', 'personaToggle')", "Toggle the funky UI font");
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			addFlag("mom", "style");
			//if (checkFlag("mom", "styleBooks") != true) {addFlag("mom", "styleBooks");}
			break;
		}
		case "personaToggle": {
			writeEncounter("styleBooks");
			if (checkFlag("mom", "personaOff") != true) {
				addFlag("mom", "personaOff");
				updateMenu();
				writeSpecial("Funky UI styling has been disabled!");
			}
			else {
				removeFlag("mom", "personaOff");
				updateMenu();
				writeSpecial("Funky UI styling has been enabled!");
			}
			break;
		}
		case "basicStyle": {
			data.player.style = "basic";
			writeEncounter("styleBooks");
			writeSpecial("Visual style 'Basic' applied! Very special thank you to stiggy 752!");
			break;
		}
		case "personaStyle": {
			data.player.style = "persona";
			writeEncounter("styleBooks");
			writeSpecial("Visual style 'Persona' applied!");
			if (data.player.gender == "man") {
				if (checkBody("joker") != true) {
					var goof = {index: "joker", artist: "Art by Shigenori Soejima",};
					data.bodytypes.push(goof);
					writeSpecial("The book's contents reminds you of the importance of freedom. You unlocked a new bodytype! Change via the wardrobe.");
				}
				else {
					goof = "null";
				}
			}
			else {
				if (checkBody("jokette") != true) {
					var goof = {index: "jokette", artist: "Art by gau aka ggg",};
					data.bodytypes.push(goof);
					writeSpecial("The book's contents reminds you of the importance of freedom. You unlocked a new bodytype! Change via the wardrobe.");
				}
				else {
					goof = "null";
				}
			}
			break;
		}
		case "royaltyStyle": {
			data.player.style = "royalty";
			writeEncounter("styleBooks");
			writeSpecial("Visual style 'Royalty' applied!");
			break;
		}
		case "lobotomyStyle": {
			data.player.style = "lobotomy";
			writeEncounter("styleBooks");
			writeSpecial("Visual style 'Lobotomy' applied!");
			break;
		}
		case "credits": {
			writeText("Incredible! Outstanding! You've reached one of Hentai University's endings!");
			writeText("This game was made by <a href='https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi</a> and <a href='https://www.reddit.com/user/CaptainCryptogreek'>Captain Cryptogreek</a>. Hop on in to our <a href='https://discord.gg/pDht5BZ'>Discord</a> and let us know what you thought, we'd love to hear from you. You can also find a section dedicated to modding in there, maybe check that out? Be sure to show show your support for the members of the modding community of course if you do.");
			writeText("<hr>");
			writeCenteredText("<span style='font-size:300%;'>Special thanks to:</span>");
			writeSpecial("Stiggy752 for the game's CSS, Wild Bill/Master of Puppets for the game's save to file system, and to OrangeMaestro for his orange eyes helping find many of the typos that plagued this game. Other typo/bug-hunters I'd like to shout out are Atomic Goblin, Chomp, crnicu, DarkNico, DogsAreBetterThanCats, Dowee, Eintei, Goblin Boy, Master of Puppets, M M T, MustafaSerkan, Nico Fox, PancakeLoverAkechi, Papa Primus, Shbers, sinofsloth345, SlackerSavior, and all anonymous posters who posted bugs via the suggestion box. Thanks!");
			writeSpecial("And to @spectralworks_ for providing his art for a male version of hex maniac a ghost game reward!");
			writeText("<hr>");
			writeCenteredText("<span style='font-size:300%;'>And a huge thank you to all of my fantastic patrons:</span>");
			writeSpecial("Robbie, SlackerSavior, Here Not, Confused, Moony, 4MinuteWarning, A.X.J, 林家豪, Andre, ArtemisAisu, Badaxe, Ben Nowak, BlackKnight1945, Bob, Brian Graham, brodoe1, Christopher Fox, Colin E, Dezyego, Diederik Toxopeus, DRhost, Dylan, e3, Elias, Eylgar, Hema Mania, ivanhunter- johnson, J_C_L, jack spencer, Jacob Lane, Jesus Millan, john, Klark Lesly, Knut Joakim Ellingsen, landon sills, LostSand, Louts, Manav, Manny Coutlakis, Marco Wassmer, Maybenexttime, Miner49r, mitchell cross, Na707, notornis, Novalis Silveratum, Ora494, Panda, Rictor86, ripcord628 Gondzi, Ripper, Sealon, Selignite Verine, Sergio Ramirez, Shaun, simon, Simon van Eeden, Stanley Cheong, Te Tule, that GUY, Vikignir, william lagier, Xazzafrazz, yami, Zane Dura, Zun, 仕源 李, A Channel, abuse toast, æ·±æµ·å¸çŽ‹, æ——æœ¨åƒ æ²’æœ‰, Akiha Tohno, Alex, Alex Thomas, Anarion01, Angel lachaud, AnotherAccount333, Antoine Panaye, Anton Schmidt, Antonio David Chase, Ard Galen, Arkanian001, Artheares, Ary Toussaint, asdf123, Ash mash, Ashwinder, Asmo, ASSIRTIVlizard, asulus diablo, Austin, Austin Hove, axzsd, AzarathNinja, B, Bastl, BeatDem Cheeks, beefboy, Biblicallyaccuratepitbull, Big BNB, BINKS, Blade, Bleed1ngthunder, Bob, Bob Sherran, BOK, Bradley Herbert, Braedon Jasper, brandon, Brosef88, buddy99, ç„¡å çƒé¾œ, Calla Smith, Callum Northedge, Cameron Chilton, Cameron Farabee, Candi-Stryper, Carlos, Carson Goodwin, cat, Cdev57, cheeriermoss4, Chima549, Christian Lee, ChronosEdge, ClockZ -Tar-, crimepunt, Crow, Cynnau, Daddy Tsume, DALLAS SISCO, Dallas Wright, dalvin lopez, Damsolo14, Dan, D'andre, DarthMalak, david, David Outram, david thompson, dawson, ddkre, Demonin Koloman, dev, DigiReave, Divide, dogsoneup, Dominic, Dominic Pernicone, Doryu, Draconet547, Dragoon22, drollest foot892, Dry_Garen, Dugelle, Dumcanem, dylan makings, è‡´è¿œ èˆ’, é•¿å¹³ é¬£, EgoDraconis, Eric Hslew, Evrett Varlan, Fangrove, FelloMello, Fernando Paz, Forde Wellman, fuckboi13, G. O, gabriel briones, Garrett Wade, Genxin, Geoff Heimos, ggboomsky, GirmusCz, goi, Greatsage56 ., Grim2011, Grython, Harrison Russell Brasch, henry grobins, Henry Litten, Hikari, Hrasah, Hydrq, Hyunsoo Lee, Ian Kerris, Ian Whitehead, IDFK, Ignorant Fool, INSTSM, Isaiah Gregg, Isaiah Sandoval, ItsAllOgreNow, J, Jack Masters, Jack Thompson, Jacob Atkins, Jacob Damoiseaux, jacob g, Jacob Higgs, Jaden Clark, Jamarion Blair, James Petty, Jamie, Jane, Jarallah Humaid, jaron, Jax Medema, Jazz, Jesse Greene, Jesus millan Gonzalez, Jimboo, joe, Joel Humphrey, john, John Nixon, john smith, john sparks, Johngoober, Jose MuÃ±oz, joseph, Joshua Wilmann, Juan Fernandez, Justin, Justin Kays, Kahl Free, kalan willess, Kaliden, Kethis Immortalis, Kient Wong, Kieron Kow, KIVA, Konrad Tomanek, KOOLAID, kyle fenton, Kyle Jones, Kyle Michael, Kyverdrade, Leanerbike1363, legacy fletcher, Lemme learn how to play piano, Lenny Lerry, Leon K, Lex Long, Lexi Lauton, Liam Connelly, Lil boss, Lily Evans, Limitless, LIN ZY, Lucas Laaksonen, Luis Orellana, Luke Lange, Lyko90, mahdeennave, Malachi Townsley, Marcus Gade, Marcus New, Mark, Mark Laner, Markus Hansen, Mason, Matt Silverman, Matthew Preston, matthew scarborough, Max, Maxolution, Maxwell Dedmon, meowy2, Michael Graham, Michael Stone, Minerve1, mitchellwolbert, morgan hirst, MPZ_00, Mullins JR 74, murgatroid99, Naruto fan guy, Nathaniel Grams, Neill R Toohey, Neyafi, Nick Becker, Nickson Schenk, Nicman488, nicol, Noah675, None, NyxKnight, Omar Flores, Pascal Nitsche, Patrick Buhalo, pepsi, Peter H, Petrichor, Phanes, Phillip A Brann, philthy, Plaaer, qqss, raun q, ReignVI, ren hero, RidiculeCat, Roniesis Narvaez, ryan, Ryan Spindler-Hanowski, Ryan Towers, Ryker, Sahil, sakkra83, sb2017, Scumstango, Sean Corley, Sean McKeon, Sean sullivan, sebastionLender, Sera, sh w, Shadez, Shadichaos, Shinikami, Shivane, Sid Wolf, Silverstreak1410, sindre Elshaug, Singer Moritz, Skygods, Slomberg, sltcbati, SmightySmiter, SmolFish, Sniezertas, SnivGrits, Snow, SomebodyElse, Sonny Coen, Squidy Cool Shoes, Stafford Harris, Stan Manson, studly787, Tanman, Tbnr Nuts, TCFish, Tebachi, TeLoad, ThatGuyWithTheFace, ThatOtherGuy, The Frinky Dink Man, The Gemars, theoron, thesingleguy, Thomas DeChon, Timothy Lewis, Tired_Sup, tito, Tyler Ross, tyler wyser, Uncle, undead270, unfading89, Vault, Venomill, Verillia tristari, Vikteren, Ville, Void Walker, VOID952, wei huang, Wild Bill, xdrake100, yjzyjz, Yongjie Zhao, Your Husbando, Youtube Account, Zach allen, Zachary Schicker, Zachary Webb, zafoche, بدر القرني, 仕科 余, and 陈 for funding this work! The patreon funds are split as Captain Cryptogreek has taken over as lead writer for the game.");
			writeText("<hr>");
			writeText("Thanks for playing! It'd really help to give feedback anywhere you can, either through a review or letting us know what you think. The game has an F95Zone thread <a href='https://f95zone.to/threads/hentai-university-v15-noodlejacuzzi.37312/'>HERE</a> and a hypnopics thread <a href='https://hypnopics-collective.net/smf_forum/index.php?topic=23881.0'>HERE</a>, and we also check the reddit threads posted for each release.");
			writeText("If you're shy though you can use this anonymous suggestion box <a href='https://forms.gle/ZrDFUzTu2f7pbVZe9'>HERE</a> to voice your thoughts!");
			writeFunction("changeLocation('playerHouse')", "Keep playing");
			writeText("<hr>");
			writeSpecial("Here's a list of authors who's written for the game:");
			writeSpeech("<a href = 'https://noodlejacuzzi.github.io/index.html'>Noodle Jacuzzi</a>", "scripts/gamefiles/characters/noodle.jpg", "<b>Author of momF, Lana, tomgirlF, succubusF, and others.</b><br>I almost named myself Dwayne 'The Guac' Johnson.<br>Click my name to play my other games if you want.");
			writeSpeech("Cryptogreek", "scripts/gamefiles/characters/crypto.jpg", "<b>Author of kuroF, mistressF, maidF, mejiF, housekeepF, and others.</b><br>Thanks for enjoying the game my fellow degenerates!");
			writeSpeech("SlackerSavior", "scripts/gamefiles/characters/slacker.jpg", "<b>Author of sportsF, coachF, coldF, swimmerF, and orangeF.</b><br>I wanted to write 'Don't ask me for shit' here, but it felt a little too rude.<br>So feel free to ask, but don't expect results anytime soon.");
			writeSpeech("Ace", "scripts/gamefiles/characters/ace.jpg", "<b>Author of multiple mod characters accessible via the game console.</b><br>Ace here, finally made it to credits. Hope you enjoyed my characters too, feel free (actually obliged) to drop by Noodle’s discord and feed us some sweet, sweet reviews if you can, have a good day!");
			writeText("<hr>");
			listArtists();
			break;
		}
		case "porn0A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Lol what a stupid hat<br>Anonymous: Holy shit is that Angelica from Pop Pop girls?<br>Anonymous: Obviously not you fucking idiot, why would she be doing porn?<br>");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn0B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: You're living the life bro<br>Anonymous: Cat outfits are stupid (USER WAS BANNED FOR THIS POST)");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn0C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Isn't blackmail like this actually illegal?<br>Anonymous: Holy shit guys I think I go to the same school as her<br>Anonymous: Pics or it didn't happen");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn1C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn2C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn3C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn4C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Butakoma 330G");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Butakoma 330G");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn5C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn6C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-6.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-7.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Oreteki18Kin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Oreteki18Kin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Akushizu");
			writeBig("images/porn/"+sheet+"-6.jpg", "Art by Akushizu");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn7C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Enoshima Iki");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Enoshima Iki");
			writeText("It looks like there's no audio for this video.");
			writeSpeech("Comments", "scripts/gamefiles/none.png", "Anonymous: Whoa holy shit is this a mod?<br>Anonymous: Sauce plz<br>Anonymous: Lurk moar dumbass<br>Anonymous: Is this actually programmed into the game?");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn8A": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Wataya");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Wataya");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Wataya");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Wataya");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn8B": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Nagi Ichi");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Nagi Ichi");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Nagi Ichi");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Nagi Ichi");
			writeBig("images/porn/"+sheet+"-5.jpg", "Art by Nagi Ichi");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "porn8C": {
			var sheet = scene.slice(-2);
			passTime();
			writeBig("images/porn/"+sheet+".jpg", "Art by Master Maichin");
			writeBig("images/porn/"+sheet+"-2.jpg", "Art by Master Maichin");
			writeBig("images/porn/"+sheet+"-3.jpg", "Art by Master Maichin");
			writeBig("images/porn/"+sheet+"-4.jpg", "Art by Master Maichin");
			writeText("It looks like there's no audio for this video.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writeText("Broken! Error code: failed load encounter("+scene+")");
		}
	}
}

function wardrobeMouseOver(wardrobeImage) {
	//console.log(document.getElementById(wardrobeImage).style.filter)
	document.getElementById(wardrobeImage).style.filter = "brightness(100%)"
}

function wardrobeMouseOut(wardrobeImage) {
	//console.log(document.getElementById(wardrobeImage).style.filter)
	document.getElementById(wardrobeImage).style.filter = "brightness(50%)"
}

console.log('system.js loaded correctly. request type is '+requestType)

switch (requestType) {
	case "encounter": {
		writeEncounter(eventName);
		break;
	}
	case "event": {
		writeEncounter(eventName);
		if (data.player.location == 'gallery' && eventName != 'gallery') {
			//writeFunction("changeLocation('playerHouse')", "Finish");
		}
		break;
	}
	case "check": {
		for (i = 0; i < encounterArray.length; i++) {
			if (encounterArray[i].location.includes(data.player.location)) {
				if (encounterArray[i].time.includes(data.player.time)) {
					if (encounterArray[i].type == "tab") {
						printEncounterTab(character.index, encounterArray[i].index, encounterArray[i].name);
					}
					else {
						printEncounterButton('system', encounterArray[i].index, encounterArray[i].name, encounterArray[i].top, encounterArray[i].left);
					}
				}
			}
		}
		break;
	}
	case "shop": {
		var shopItem = "";
		for (item = 0; item < newItems.length; item++) {
			console.log("generating item "+ item + ": " + newItems[item].name + newItems[item].description + newItems[item].image + newItems[item].price + newItems[item].key);
			if (newItems[item].price != 0) {
				if (newItems[item].key == false) {
					document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
							<p class = "shopName">`+newItems[item].name+`</p>
							<p class = "shopDesc">`+newItems[item].description+`</p>
							<p class = "shopPrice">$`+newItems[item].price+`</p>
							<img class ="shopImage" src="`+newItems[item].image+`">
						</div>
						<br>
					`;
				}
				else {
					if (checkItem(newItems[item].name) == false) {
						document.getElementById('output').innerHTML += `
						<div class = "shopItem" onclick = "purchase('`+newItems[item].name+`','`+newItems[item].image+`','`+newItems[item].price+`','`+newItems[item].key+`')">
								<p class = "shopName">`+newItems[item].name+`</p>
								<p class = "shopDesc">`+newItems[item].description+`</p>
								<p class = "shopPrice">$`+newItems[item].price+`</p>
								<img class ="shopImage" src="`+newItems[item].image+`">
							</div>
						<br>
						`;
					}
				}
			}
		}
		break;
	}
}

//Needs events for computer, wardrobe, textbooks, napping, and paperwork