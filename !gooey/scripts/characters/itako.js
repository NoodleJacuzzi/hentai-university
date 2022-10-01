var character = {index: "itako", fName: "Emi", lName: "Sato", trust: 0, encountered: false, textEvent: "", met: false, color: "#D33D3D", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false,};

var logbook = {
	index: "itako", 
	desc: "A faithful daughter hoping to one day inherit the inn and baths she works at from her mom. Like her mother, she's pure and naive to the truest evil of the world; wanton lust.",
	body: "She has a much more ordinary body than her fertility-goddess mother, but she's by no means a slouch herself..",
	clothes: "Her clothes tend towards the demure side. They have a nostalgic, safe taste at the cost of not being very trendy.",
	home: "In all likelihood she lives at her inn along with her mother.",
	tags: "Incest (mother+daughter), corruption, anal, ass-to-mouth.",
	artist: "Oreteki18kin<br>Original Image Set: Nakayoshi Chinpo Share",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro1", name: "Check out the 'Sato Bath & Inn'", requirements: "?trust miko 0; ?location parkDistrict;", altName: "", altImage: "",},
	{index: "introRepeat", name: "Head back to the inn", requirements: "?trust miko 2; ?location parkDistrict;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "intro1": {
			writeHTML(`
				itako Hello and welcome to the itakoL Inn and Baths, my name is itakoF. Here we offer a bold bit of culture from across the-<br>Whoa...
				t The girl stops her rehearsed introduction and gives you a shocked look, like you just walked in after bathing in toxic waste.
				itako ... Tell me, dear customer, have you ever worked your chakras before? Ever been on an aura cleanse? 
				player I can't say I have.
				itako Well then, dear customer, I have a deal you really need! For the modern *man, who's soul happens to be drenched in darkness as black as tar, here, come on back with me!
				t And without letting you respond she bounds off, leaving the desk unattended.
			`);
			writeFunction("writeEncounter('intro2')", "Continue");
			break;
		}
		case "intro2": {
			writeHTML(`
				miko Oh, hello. Are you a new guest? Here for a bath?
				itako Mom, there's no time for that! Take a look at *him. Like, <i>really</i> look.
				miko Alright, I'll... Oh my. *Sir, are you aware that your aura is-
				player A big old ball of darkness, practically black as tar?
				miko Well, that's certainly a colorful way of putting things.
				itako *He's right though!
				miko Yes. Normally I'd suggest a soothing soak, but for you I think something more direct might be necessary... 
				t You give her a look, although she doesn't seem to notice it.
				player Alright, how much?
				miko Free of charge. I don't think it was a coincidence you wandered into this place. I'd like to begin immediately, actually.
				t While you can tell they have the best of intentions, something about this seems... Dangerous. Not to your health, but to something just as important.
				t <b>This place seems extremely spiritually pure. If you stay here, your corruption score will go down!</b>
			`);
			writeFunction("loadEncounter('miko', 'purify1')", "Accept");
			writeFunction("writeEncounter('refuse')", "Refuse");
			break;
		}
		case "refuse": {
			writeHTML(`
				player I'll have to decline for now. Maybe some other time.
				miko Hm... I see. Please be careful though, and try to come back soon.
				itako And don't die from overwork!
				t ...
				player <i>That was close, I was about to lose something precious to me.<br>... Probably. I should come back when I've got corruption to spare.</i>
				cancel
			`);
			setTrust("miko", 2);
			setTrust("itako", 1);
			break;
		}
		case "introRepeat": {
			writeHTML(`
				itako Hello, and welcome-<br>Oh, it's you again! Here to take us up on the purification offer?
			`);
			writeFunction("loadEncounter('miko', 'purify1')", "Accept");
			writeFunction("writeEncounter('reject')", "Refuse");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "fitboiMassage0", name: "She-cream: First Application"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "miko-itakoRitual3": {
			writeHTML(`
				t Again you're left to wait.
				t And wait.
				t And wait.
				t The air is so thick, it's almost worrying. Well, it's all from inside you, so it can't be too bad for you. In fact, since you're already here...
				t ...
				t And now you're waiting, but a lot more comfortably. You decided to strip and step into the bath, and if they walk in on you naked it's their own fucking fault. Those bitches, making you-
				t You open your eyes suddenly, the air seems a lot less dark than before, and a quick look identifies why. The corruption in the air is sinking into the water, which in turn seems to be pouring your corruption back into your body. If mikoF and itakoF have been bathing in this for hours at a time, basically completely relaxing their minds and bodies in a pool of pure, undiluted corruption and lust, then-
				im images/miko/092.jpg
				miko Apologies for the wait, *sir. I was just discussing how best to perform the ritual today. Ah, I see you're already in the bath.
				t The mother and daughter pair walk in, both of them nude from head to toe.
				miko Eh? Why are you looking at us like that? I think the heat may be affecting your head.
				itako Yeah. You gotta relax if you want to cleanse, and in this heat you gotta stay comfortable if you wanna relax. Now, if you could turn around for just a moment...
				t ...
				t For what it's worth, the pair of them actually conduct the ritual as normal. Again, the knot inside your soul is forced out of your body, pushed into the air, where it will later sink into the water, and then into anyone hapless enough to bathe in it.
				itako Is it finally done? I can't sense anything more inside *him.
				miko Perhaps. We can't see where it might be going. No, I'm sure there's just a little more.
				itako Then I think it's time to go all the way!
				miko I think you might be right... playerF, would you please turn towards us and expose yourself?
				player ...?!
				miko Do not be afraid, we need to purge the last bit of nasty shade from your body.
				itako And what's the filthiest, dirtiest part of you? Duh!
				t It seems your nefarious aura, not meant for their pure hearts, has clearly taken a toll on their minds and bodies.
				t ...
				im images/miko/095.jpg
				miko Hmm... *His penis is quite the large one. Making it cum will be quite the ordeal...
				itako I c-can do it! Something this size is no trouble at all!
				miko You seem quite nervous. Here, let me...
				im images/miko/096.jpg
				miko Glllrk~!
				itako It's so big... The smell would probably make this place smell like sex, even diffused in the bath...
				miko Mmph?
				im images/miko/097.jpg
				miko Mwah~! There, all warmed up.
				itako I-it's even bigger than before! A-and it's covered in-
				miko Don't be afraid, darling, just think of it like a kiss from mommy.<br>If you don't think you can handle this, then I-
				itako No... No I can do this. Deep breaths, eye contact, okay...
				im images/miko/098.jpg
				itako Mmm...
				miko Don't push yourself too far, darling. I'm sure my part in the ritual has already weakened *him. Isn't that right, *Mister Customer?
				im images/miko/100.jpg
				itako Hah~! *He's reached *his limit~!
				miko All that horrid energy within you, let it all ooze out of you!
				itako Pump it out, we can take it!
				im images/miko/101.jpg
				itako Ghh, what a mess...
				miko You've done wonderfully, both of you. N-now...
				t Just like last time your eyelids flutter and the air becomes heavy with a spiritual fog.
				itako W-we did... A guhd job...?
				miko Yesh... Darling...
				t ...
				miko M-my, this has been quite the exhausting trial. Are you alright?
				player Yeah... I'm certainly feeling drained.<br><i>In more ways than one...</i>
				itako Exorcisms can be weird sometimes. Usually I feel tired after practicing, but this time I feel... Strange...
				miko Some more time in the baths should do us good. Feel free to return again, playerF.
				itako It's sad to see you go, you clearly have a lot more to undergo. 
			`);
			break;
		}
		case "miko-itakoRitual4": {
			writeHTML(`
				t The two of you head towards the back rooms.
				miko Another one... Oh, playerF, lovely to see you again~
				t She looked almost frustrated to see another guest arrived, but looks glad to see you.
				itako I know we finished with *him, but-
				miko Nonsense, honey. You did the right thing. I can tell corruption is welling up inside of *him yet again.
				itako You can? I can't see anything... Maybe I'm losing my touch...
				miko Never! You have all the talent a girl could ever need, maybe even more than me. Mommy's just a little more... Experienced.<br>Speaking of which, I had in mind a very special technique today playerF. This one calls for us to head into the baths ahead of you. Would you be willing to give us a moment?
				player Sure.
				itako We have to head into the baths first? I don't really get it...
				t ...
				t After a while of waiting you hear itakoF and mikoF giggling from the baths, and decide to head inside.
				miko Eheh~! It makes my skin feel so tingly~!<br>Oh my! The exorcism, how could I have forgotten? I've been distracted from how lovely the baths can feel...
				itako Y-yeah, it feels nicer on my skin... It's like my brain just shuts down...
				miko This has been our third time today... We really should... Exorcism! Oh my goodness, I'm so sorry playerF!
				itako Right, let's get started!
				im images/miko/157.jpg
				t The two of them rise from the water, seemingly purposefully exposing their bare asses towards you.
				player So... Just like last time?
				im images/miko/094.jpg
				miko No... As I said, today I think we need to go farther. An advanced technique.<br>itakoF, you need to sit this one out, alright?
				itako Advanced technique... Alright mom, go for it! 
				im images/miko/141.jpg
				miko Hah~! Time for the next level of exorcism! Today, I'll be draining every drop of darkness inside you with my unbeatable anal exorcism technique!
				itako A-anal? Mom, I don't remember this...
				miko That's because it came to me, here in the bath! Sometimes when I'm relaxing, words, images, all sorts of things float into my mind...
				itako You too? 
				miko N-now, you wouldn't keep me waiting, would you? The baths have quite the effects on this old body, I think you'll find...
				im images/miko/142a.jpg
				miko H-hooou~! S-slower, please! My body isn't used to this f-feeeeling~!
				itako Eh? But you got completely soaked so quickly!
				miko M-mommy's what you call a 'squirter', d-darling! But that doesn't mean you can be t-too rough~! A-always be... Nghh~!
				t Inches sink into a hole in a way that can only be described as the deepest of taboos. Sensation tells you this is unlike any virgin hole you've ever defiled, yet...
				miko I'm giving... My anal virginity... In front of my daughter~ 
				im images/miko/143.jpg
				miko F-faster now~! That's just the right spot~!
				itako I don't understand...
				miko D-don't worry honey~! Mommy's just exorcising the nice *man's lust, okay? Be a good girl and play with yourself, and let mommy f-focus on the sensation of a young *man's penis...
				t While a creeping sense of shame and panic might figuratively be mounting within her, a man and his fat cock are <i>literally</i> mounting her. There is simply no comparison. 
				itako Is it really that good...?
				miko Hah, it's better than good, this feels fucking amazing! Nggh~!
				im images/miko/144.jpg
				miko Ouuugh... Mommy's asshole... Mommy's cumming from her asshole...<br>My asshole... Will never be normal again...<br>Anal orgasms... Are the besht... 
				itako Eh? Mom? Mom, wake up!<br>Sorry playerF, I gotta help out mom, come back some other time. Mom?
				t ...
				t As you leave, you realize you don't feel any different. Your corruption hasn't decreased at all...
				player Wait, that wasn't spiritual cleansing at all, it was <i>just</i> anal sex!
				t ... Nice.
			`);
			break;
		}
		case "miko-itakoTogether1": {
			writeHTML(`
				player I guess I could go for another cleansing. Lead the way.
			`);
			writeDual("miko", "", "itako", "", "Yaaaay~!");
			writeHTML(`
				t ...
				t You take a moment to bask in the ambiance of the the place. It feels... Soothing. Every part lf the bathhouse has an extremely dignified, yet peaceful air.
				im images/miko/150.jpg
				itako Like this?
				miko Ah, that's right! My daughter, spreading my asshole, it just feels so... Nff~!
				t ... Aside from the obvious, of course.
				player Is that really the kind of language a mom should be using around her daughter?
				itako Don't worry! Being a maiden means letting inspriation flow through you, even if you might embarass yourself. When you feel something welling up in your heart, you need to let it out!
				miko V-very good darling, now pleeease stop distracting the nice young *man from fucking mommy's ass, okay?
				player ... The two of you either need to spend a lot less or a lot more time in these baths.
				im images/miko/151a.jpg
				miko Aaaah~!
				itako Aha... Ahaha...
				t itakoF makes a stilted laugh as you penetrate her mother, like her subconcious is panicking, realizing what's going on, but her corruption-addled brain can't figure out what's supposed to be wrong. 
				player Actually, itakoF, wanna help your mom out?
				itako Y-yes!
				player Good girl.
				im images/miko/152a.jpg
				itako Gllff-
				t itakoF's life truly has changed in these last few days. In the spam of a few meetings with you she's gone from an inexperienced but devout young girl, to being an oral-lube dispenser for her mom's anal pleasure.
				t ... Well, these years are all about self-discovery anyways, so it all works out.
				im images/miko/153a.jpg
				t In just a few motions you've gone ass-to-mouth from mother to daughter. Your dick is coated in saliva, itakoF seems completely dazed, and mikoF is barely able to hold in her anticipation.
				player Nicely done!
				miko Y-yes, good work honey. Mommy-
				im images/miko/153b.jpg
				miko OOOOOGH~!
				t Now lubed and ready, this time you penetrate mikoF for real. You aren't sure how much of this corruption hacking away at their earlier personalities, their chastity, is the corrupted waters and how much of it is them being molded by your cock, but it doesn't matter at this point, does it?
				t And you make sure to pull out on the final cumshot too.
				im images/miko/154a.jpg
				itako Gah... It's so thick...
				miko And warm~
				t Because it seems they've taken to their new lives like fish to water.
			`);
			break;
		}
		case "miko-itakoTogether2": {
			writeHTML(`
				player I guess I could go for another cleansing. Lead the way.
			`);
			writeDual("miko", "", "itako", "", "Yaaaay~!");
			writeHTML(`
				t ...
				im images/miko/150.jpg
				t As always the sight of the pair is truly something to behold. Motherly affection, youthful enthusiasm,mikoF and itakoF really communicate a lot about themselves with how they look at you.
				t Of course, they're also communicating that they're a total anal buttslut and a voyeuristic pervert, so best not to keep them waiting.
				im images/miko/152a.jpg
				itako Gllff!
				miko Ooh... You can do it, honey~!
				player You'll keep that mouth of yours nice and ready, right? If I wanted a dry fuck I wouldn't bother with you, so keep this assfucking going nice and smooth with that throat of yours whenever I need it, alright?
				itako Mphh-hmm~!
				im images/miko/153a.jpg
				t She gives a light cough after that bit of oral pleasure.
				itako I will, th-thank you, *sir...
				player Good, now...
				im images/miko/153b.jpg
				miko Ohhh fuck fuck FUCK~!
				itako Hah~ Mom's lost in the fun again~
				miko Yessss~! This is just what mommy needs in the morning~!
				t And as the three of you settle into your usual rhythm, everything starts to blur together into the usual fuckfest perversion.
				t ...
				im images/miko/154a.jpg
				miko Hah... Nothing beats an anal creampie~
				player Now then, clean me off like a good little whore, yeah?
				itako Yes *sir~!
			`);
			break;
		}
		case "itakoSolo1": {
			writeHTML(`
				im images/miko/166.jpg
				itako So... Embarassing...
				miko Don't worry honey~<br>Mommy's here to support you~
				im images/miko/167.jpg
				player Take a good, <i>long</i> look itakoF, the cock your mother is hooked on is about to take your anal virginity.
				itako The dick... Mom's addicted to...
				im images/miko/168a.jpg
				itako Oooh~! It's inside, the huge thing is inside me~!
				miko How does it feel?
				itako His huge cock in my ass feels so good~! 
				t She shudders in a small orgasm, both from losing her anal purity and from the shame of her mother's eye on this depraved act.
				miko Oh, I'm feeling a little jealous already~
				im images/miko/169a.jpg
				itako Cumming~! My butt is cumming~!
				t An orgasm that dwarfs her earlier one, a true, mind-shakong anal orgasm sweeps over her. The first of many of course, this kind of talent needs to be nutured if itakoF is to grow into a proper buttslut.
				im images/miko/170a.jpg
				miko Oh my~! *He's pumped you so full of cum, I'm not sure you'll ever stop leaking... 
				t By now all that's left of her daughter is a fuck-drunk delirious mess, but that doesn't seem to dissuade mikoF at all, rather she's beaming with motherly pride. 
			`);
			break;
		}
		case "itakoSolo2": {
			writeHTML(`
				im images/miko/167.jpg
				player So, itakoF, ready for a other round of anal?
				itako ... Ehe... Ehehe...
				miko Oh darling, there's no need to be nervous. I promise it'll be just as sensational as the last time. The thrill of anal sex just doesn't fade away~! 
				im images/miko/168a.jpg
				itako Oooh~!
				miko Oh, what a sight... It feels so nostalgic, like it was just yesterday you took my baby's first time in the ass...
				itako Mom... Ghh, don't embarass me so much...
				miko Nonsense, half the fun of anal sex is feeling embarassed down to your core!
				itako Ngh... That's... I'm-!
				im images/miko/169a.jpg
				itako Ngghh~! I'm cumming from my ass again~!
				miko Good girl, just relax and let go~!
				im images/miko/170a.jpg
				t Once again all that's left of her daughter is a fuck-drunk delirious mess, but that doesn't seem to dissuade mikoF at all, rather she's beaming with motherly pride. 
			`);
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write event ("+name+") in "+character.index+".js");
			break;
		}
	}
	//Don't touch the rest of this stuff, it has to do with unlocking scenes.
	var unlockedScene = "";
	for (i = 0; i < eventArray.length; i++) {
		if (eventArray[i].index == name) {
			unlockedScene = eventArray[i];
		}
	}
	if (unlockedScene != "" && galleryCheck(name) != true) {
		data.gallery.push(unlockedScene);
		writeSpecial("You unlocked a new scene in the gallery!");
	}
	else {
		console.log("Error, no scene named "+name+" found to unlock.");
	}
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
	{index: "placeholder", requirements: "?trust principal 10000;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "placeholder": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			clearText(character.index);
			break;
		}
	}
}

//Don't touch anything below this, or things will break.
//console.log(character.index+'.js loaded correctly. request type is '+requestType)

switch (requestType) {
	case "load": {
		data.story.push(character);
		console.log(character);
		console.log(data.story);
		writeSpecial(character.fName+" has been added to the game!");
		writeSpeech(character.index, "", character.fName+ " " + character.lName + ", written by "+ logbook.author + ", art by "+ logbook.artist+".");
		break;
	}
	case "encounter": {
		writeEncounter(eventName);
		break;
	}
	case "event": {
		writeEvent(eventName);
		if (data.player.location == 'gallery' && eventName != 'gallery') {
			writeFunction("loadEncounter('system', 'gallery')", "Finish");
		}
		break;
	}
	case "unlock": {
		var unlockedScene = "";
		for (i = 0; i < eventArray.length; i++) {
			if (eventArray[i].index == n) {
				unlockedScene = eventArray[i];
			}
		}
		if (unlockedScene != "") {
			data.gallery.push(unlockedScene);
			writeSpecial("You unlocked a new scene in the gallery!");
		}
		else {
			console.log("Error, no scene named "+n+" found to unlock.");
		}
		break;
	}
	case "check": {
		if (encounteredCheck(character.index) != true) {
			for (number = 0; number < encounterArray.length; number++) { //start going through encounter array
				var finalLocation = "";
				var finalResult = true;
				if (encounterArray[number].location != null) {
					var finalLocation = encounterArray[number].location;
					if (encounterArray[number].location.includes(data.player.location) || data.player.location == "map" && data.player.gps == true) { //check the location
						if (encounterArray[number].time.includes(data.player.time)) { //check the time
							if (encounterArray[number].trustMin <= checkTrust(character.index) && encounterArray[number].trustMax >= checkTrust(character.index)) { //check the trust requirements
								if (encounterArray[number].day == "even" && data.player.day%2 == 1) {
									finalResult = false;
									//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect parity");
								}
								if (encounterArray[number].day == "odd" && data.player.day%2 == 0) {
									finalResult = false;
									//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect parity");
								}
								if (encounterArray[number].itemReq != "" && checkItem(encounterArray[number].itemReq) != true) {
									finalResult = false;
									//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect item");
								}
							}
							else {
								//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect trust at "+checkTrust(character.index)+". Trustmin: "+encounterArray[number].trustMin);
								finalResult = false;
							}
						}
						else {
							//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect time");
							finalResult = false;
						}
					}
					else {
						//console.log("Failed event "+encounterArray[number].index+" for "+character.index+" due to incorrect location");
						finalResult = false;
					}
				}
				else {
					//console.log("Now examining encounter entry "+encounterArray[number].index+encounterArray[number].requirements);
					var requirements = checkRequirements(encounterArray[number].requirements);
					//console.log(requirements);
					if (requirements != true) {
						finalResult = false;
					}
				}
				if (finalResult == true) {
					//console.debug("Final result for "+encounterArray[number].index+" true, location is "+finalLocation);
					finalLocation = encounterArray[number].requirements.split(`?location `).pop().split(`;`)[0];
					if (data.player.location == "map" && finalLocation != "beach" && finalLocation != "casino") {
						var textString = "";
						for (locationIndex = 0; locationIndex < locationArray.length; locationIndex++) { //find the location target
							if (locationArray[locationIndex].index == finalLocation) {
								var textString = locationArray[locationIndex].name + " - ";
							}
						}
						if (textString != "") {
							printEncounterTab(character.index, encounterArray[number].index, textString + encounterArray[number].name, encounterArray[number].altImage, encounterArray[number].altName);
						}
						else {
							printEncounterTab(character.index, encounterArray[number].index, encounterArray[number].name, encounterArray[number].altImage, encounterArray[number].altName);
						}
					}
					else {
						//console.log(number);
						printEncounterTab(character.index, encounterArray[number].index, encounterArray[number].name, encounterArray[number].altImage, encounterArray[number].altName);
					}
				}
				else {
					//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!final result for "+encounterArray[number].index+" false, location is "+finalLocation);
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
	case "logbook": {
		logbookArray.push(logbook);
		break;
	}
	case "phoneCheck": {
		var finalMessage = "";
		var finalResult = true;
		for (number = 0; number < phoneArray.length; number++) { //start going through phone array
			//Start finding the data.story variable associated with the character
			for (phoneHistoryCheck = 0; phoneHistoryCheck < data.story.length; phoneHistoryCheck++) {
				if (data.story[phoneHistoryCheck].index == character.index) {
					//If the character has no unread texts
					//If the character does not have this text in their text history
					if (
					data.story[phoneHistoryCheck].unreadText != true &&
					data.story[phoneHistoryCheck].textHistory.includes(phoneArray[number].index) != true &&
					data.story[phoneHistoryCheck].textEvent != phoneArray[number].index
					) {
						//If the phone record is using the old system...
						if (phoneArray[number].trust != null) {
							var finalResult = false;
							if (checkTrust(character.index) == phoneArray[number].trust) { //if the player's trust with the character meets the text requirement
								for (phoneEventCheck = 0; phoneEventCheck < data.story.length; phoneEventCheck++) { //go through the characters
									if (data.story[phoneEventCheck].index == character.index) { //check what text is currently assigned to the character
										if (data.story[phoneEventCheck].textEvent.includes(phoneArray[number].index)==false) {
											notification(character.index)
											data.story[phoneEventCheck].textEvent = phoneArray[number].index;
											console.log(data.story[phoneEventCheck].textEvent);
										}
									}
								}
							}
						}
						else {
							if (phoneArray[number].requirements.includes("?time") == false) {
								phoneArray[number].requirements += "?time Morning;";
							}
							//Check the requirements
							var requirements = checkRequirements(phoneArray[number].requirements);
							console.log("Now examining encounter entry "+phoneArray[number].index+phoneArray[number].requirements+", result is "+requirements);
							if (requirements != false) {
								notification(character.index)
								data.story[phoneHistoryCheck].unreadText = true;
								data.story[phoneHistoryCheck].textEvent = phoneArray[number].index;
								data.story[phoneHistoryCheck].textHistory += phoneArray[number].index;
							}
						}
					}
				}
			}
		}
		break;
	}
	case "phoneEvent": {
		writePhoneEvent(eventName);
		break;
	}
}