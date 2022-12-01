var character = {index: "mom", met: false, fName: "Emily", lName: "Smith", trust: 0, encountered: false, textEvent: "", color: "#CCCCCC",};

var logbook = { //Logbook details for each character.
	index: "mom", 
	desc: "A widowed woman, she's older than you. She honestly seems lonely sometimes, even though she can be a bit blunt.",
	body: "She's probably into her forties, but she'd never tell. She has light hair and a very curvaceous body.",
	clothes: "Her preferred outfit is a v-neck shirt thin enough that you can faintly make out her black bra through it and a pair of jeans.",
	home: "She lives in the same apartment complex as you. She occasionally goes to buy groceries in the shopping district.",
	tags: "Unshaven, Drunken Sex, Vanilla, Pregnancy (Ending)",
	artist: "Enoshima Iki<br>Original Image Set: Ore no Kaa-chan",
	author: "Noodle Jacuzzi",
};

var newItems = [//Lists the shop items unique to this character
	{name: "Beer", 				key: true, 		price: 5, 	image: "scripts/gamefiles/items/beer.jpg", description: "A can of beer. You don't drink it, but some people do."},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "mom1A", name: "Someone is at the door", location: 'playerHouse', time: "Morning", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "even",},
	{index: "mom1B", name: "A woman is struggling with some bags", location: 'apartmentOutside', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "odd",},
	{index: "mom2A", name: "mom is bringing in groceries", location: 'apartmentOutside', time: "Morning", itemReq: "", trustMin: 40, trustMax: 40, type: "tab", top: 0, left: 0, day: "odd",},
	{index: "mom2B", name: "mom is shopping around", location: 'shoppingDistrict', time: "Evening", itemReq: "", trustMin: 40, trustMax: 40, type: "tab", top: 0, left: 0, day: "even",},
	{index: "mom3", name: "mom is drunkenly stumbling home", location: 'apartmentOutside', time: "Evening", itemReq: "", trustMin: 60, trustMax: 60, type: "tab", top: 0, left: 0, day: "both",},
	{index: "mom4", name: "mom is walking down the street", location: 'vintageStreet', time: "Evening", itemReq: "Beer", trustMin: 79, trustMax: 89, type: "tab", top: 0, left: 0, day: "both",},
	{index: "mom5", name: "Knock on mom's door", location: 'apartmentOutside', time: "MorningEvening", itemReq: "", trustMin: 90, trustMax: 90, type: "tab", top: 0, left: 0, day: "both",},
	{index: "momreturn", name: "You see a familiar face next door", location: 'apartmentOutside', time: "Evening", itemReq: "", trustMin: 100, trustMax: 100, type: "tab", top: 0, left: 0, day: "both",},
	{index: "statusQuo", name: "Knock on mom's door", location: 'apartmentOutside', time: "MorningEvening", itemReq: "", trustMin: 101, trustMax: 102, type: "tab", top: 0, left: 0, day: "both",},
	{index: "momdateNight", name: "Pay mom a visit", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 101, trustMax: 900, type: "tab", top: 0, left: 0, day: "both",},
	{index: "endingPrompt", name: "mom is here", location: 'apartmentOutside', time: "MorningEvening", itemReq: "", trustMin: 103, trustMax: 103, type: "tab", top: 0, left: 0, day: "both",},
	{index: "statusQuo", name: "Knock on mom's door", location: 'apartmentOutside', time: "MorningEvening", itemReq: "", trustMin: 104, trustMax: 900, type: "tab", top: 0, left: 0, day: "both",},
	{index: "momCasino1", name: "mom is here", location: 'casino', time: "MorningEvening", itemReq: "", trustMin: 90, trustMax: 200, type: "tab", top: 0, left: 0, day: "both",},
]

function writeEncounter(name) { //Plays the actual encounter.
	writeHTML(`
		define mom = sp mom;
		define player = sp player;
	`)
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "mom1A": {
			//Write the event's text here using writeText, writeSpeech, and writeBig for images.
			writeText("*KNOCK* *KNOCK* *KNOCK*");
			writeSpeech('player', '', 'Coming, hold on a second.');
			writeText("You crack your neck and walk over to open the door.");
			writeBig("images/mom/profile.jpg", "Art by Enoshima Iki");
			writeSpeech('mom', '', 'Hiya!');
			writeText("A woman is at the door, probably in her early fourties but still quite beautiful. She has faint wrinkles beside her eyes, but what catches your attention right away are her nipples, large enough to make visible bumps through her bra and shirt.");
			writeText("You manage to play it off as a wandering glance though, totally smooth.");
			writeSpeech('mom', '', "The name's " + fName('mom') + " " + lName('mom') + ", I'm your neighbor a few doors down.");
			writeSpeech('player', '', "Nice to meet you, I'm " +data.player.name + ".");
			writeText("She shakes your hand with a firm, energetic grip.");
			writeSpeech('mom', '', "I've seen you walk by a few times. If you're ever lost I can't help, but I can point you in the direction of the market if you need it.");
			writeSpeech('player', '', "I might take you up on that some time, I'm new in town.");
			writeSpeech('mom', '', "No problem, it's that way!");
			writeText("She points off in a vaguely westward direction before laughing at her joke.");
			writeText("She quickly takes the reigns of the conversation, bouncing between subjects like the weather, the state of the building, and at some point she glides right past the fact that she's a widow.");
			writeText("Her incredibly strong personality makes itself clear right away. Even a master hypnotist would have trouble getting through her will with months of preparation.");
			writeText("Still, she seems eager enough for some company that you could quickly make friends with her. Spending some time listening to her go on about nothing in particular and not completely sperging out will probably be enough.");
			writeText("Eventually the conversation slows back down.");
			writeSpeech('mom', '', "Aw damnit, is it that late already? I gotta get back in and quit wasting your time.");
			writeSpeech('player', '', "Only if you promise to waste it again, it's been lovely to get to know you.");
			writeSpeech('mom', '', "Ha! Little flirt, I'm old enough to be your mother.");
			writeSpeech('player', '', "Talk to you later, " + fName('mom') + ".");
			writeSpeech('mom', '', "Bye!");
			passTime();
			setTrust('mom', 40);
			writeFunction("changeLocation(data.player.location)", "Go back inside");
			break;
		}
		case "mom1B": {
			writeText("The woman brings her bag through the doorway, but one breaks open at the bottom spilling out onto the floor.");
			writeSpeech('mom', '', "God...! Damn little...");
			writeSpeech('player', '', "Need some help?");
			writeSpeech('mom', '', "Yes please, one second...");
			writeText("You pick up the small bags of dried fruit that fell out.");
			writeBig("images/mom/profile.jpg", "Art by Enoshima Iki");
			writeSpeech('mom', '', "Thanks. Lucky it wasn't the wine, right?");
			writeText("The woman in the doorway is probably in her early fourties but is still quite beautiful. She has faint wrinkles beside her eyes, but what catch your attention right away are her nipples, large enough to make visible bumps through her bra and shirt.");
			writeText("You manage to play it off as a wandering glance though, totally smooth.");
			writeSpeech('mom', '', "Oh hey, you new in town?");
			writeSpeech('player', '', "Yes actually, I just moved in. The name's " +data.player.name + ".");
			writeSpeech('mom', '', "The name's " + fName('mom') + " " + lName('mom') + ", I'm your neighbor a few doors down. If you're ever lost I can't help, but I can point you in the direction of the market if you need it.");
			writeSpeech('player', '', "I might take you up on that some time, I'm not great at navigation.");
			writeSpeech('mom', '', "No problem, it's that way!");
			writeText("She points off in a vaguely westward direction before laughing at her joke.");
			writeText("She quickly takes the reigns of the conversation, bouncing between subjects like the weather, the state of the building, and at some point she glides right past the fact that she's a widow.");
			writeText("Her incredibly strong personality makes itself clear right away. Even a *Master hypnotist would have trouble getting through her will with months of preparation.");
			writeText("Still, she seems eager enough for some company that you could quickly make friends with her. Spending some time listening to her go on about nothing in particular and not completely sperging out will probably be enough.");
			writeText("Eventually the conversation slows back down.");
			writeSpeech('mom', '', "Aw damnit, is it that late already? I gotta get back in and quit wasting your time.");
			writeSpeech('player', '', "Only if you promise to waste it again, it's been lovely to get to know you.");
			writeSpeech('mom', '', "Ha! Little flirt, I'm old enough to be your mother.");
			writeSpeech('player', '', "Talk you later, " + fName('mom') + ".");
			writeSpeech('mom', '', "Bye!");
			passTime();
			setTrust('mom', 40);
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom2A": {
			writeText("As you're walking down the hall you see " + fName('mom') + " walking towards her apartment. She's got an emotionally drained look in her eyes, so you call out to her and her expression brightens.");
			writeSpeech('mom', '', "" +data.player.name + "! Hey how've you been? Help me carry these in?");
			writeSpeech('player', '', "Sure, no problem.");
			writeText("You help her get her bags inside. She offers you to sit down at the table and hands you a glass of water.");
			writeText("...");
			writeText("As you get comfortable in your seat, you notice " + fName('mom') + " preparing some tea with a soft smile on her face.");
			writeFunction("loadEncounter('mom','mom2AA')", "Strike up a conversation");
			writeFunction("loadEncounter('mom','mom2AB')", "Enjoy the silence");
			passTime();
			setTrust('mom', 60);
			break;
		}
		case "mom2AA": {
			writeSpeech("player", "", "So do you always walk to and back from the shopping district? It's a pretty long road from the store back home.");
			writeSpeech("mom", "", "Yeah. The road is usually deserted by now. It's usually quiet, but today it felt pretty nice. What about you?");
			writeSpeech("player", "", "Oh I was just in the neighborhood, not really looking for anything in particular.");
			writeSpeech("mom", "", "Well you found it. Got the lay of the land yet?");
			writeSpeech("player", "", "Yeah I think I've got a pretty good grasp of the town by now. It's a nice place. I could definitely see myself staying here.");
			writeSpeech("mom", "", "That's great! It's always nice to know you can set your roots somewhere.");
			writeText("...");
			writeText("The conversation carries on for several hours of what feels like small talk. This time both of you are carrying the conversation, and " + fName('mom') + " follows along with what you say with patient attentiveness.");
			writeText("It's soothing to just whittle away the time, and you feel like you both understand each other better. Eventually though you make it back to the apartment complex and you wish each other well before you go your separate ways.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom2AB": {
			writeText("You decide to remain quiet and enjoy the silence.");
			writeText("...");
			writeText("Eventually, " + fName('mom') + " brings up something about the weather and the two of you are wrapped up in smalltalk.");
			writeText("The conversation carries on for several hours of what feels like small talk. This time both of you are carrying of the conversation, and " + fName('mom') + " follows along with what you say with patient attentiveness.");
			writeText("It's soothing to just whittle away the time, and you feel like you both understand each other better. Eventually though you make it back to the apartment complex and you wish each other well before you go your separate ways. ");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom2B": {
			writeText("As you're walking down the road you see " + fName('mom') + " walking towards her apartment. She's got an emotionally drained look in her eyes, so you call out to her and her expression brightens.");
			writeSpeech('mom', '', "" +data.player.name + "! Hey how've you been? Help me carry these home?");
			writeSpeech('player', '', "Sure, no problem.");
			writeText("You take half her bags and start walking down the street alongside her.");
			writeText("...");
			writeText("The two of you walk in silence for a moment. It isn't an awkward one, and " + fName('mom') + " has a soft smile on her face.");
			writeFunction("loadEncounter('mom','mom2BA')", "Strike up a conversation");
			writeFunction("loadEncounter('mom','mom2BB')", "Enjoy the silence");
			passTime();
			setTrust('mom', 60);
			data.player.location = "apartmentOutside";
			break;
		}
		case "mom2BA": {
			writeSpeech("player", "", "Do you always walk this way? It's a pretty long road from the store back home.");
			writeSpeech("mom", "", "Yeah. This road is usually deserted by now. It's usually quiet, but today it feels pretty nice. What about you?");
			writeSpeech("player", "", "Oh I was just in the neighborhood, not really looking for anything in particular.");
			writeSpeech("mom", "", "Well you found it. Got the lay of the land yet?");
			writeSpeech("player", "", "Yeah I think I've got a pretty good grasp of the town by now. It's a nice place. I could definitely see myself staying here.");
			writeSpeech("mom", "", "That's great! It's always nice to know you can set your roots somewhere.");
			writeText("...");
			writeText("The conversation carries on for several hours of what feels like small talk. This time both of you are carrying of the conversation, and " + fName('mom') + " follows along with what you say with patient attentiveness.");
			writeText("It's soothing to just whittle away the time, and you feel like you both understand each other better. Eventually though you make it back to the apartment complex and you wish each other well before you go your separate ways.");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom2BB": {
			writeText("You decide to remain quiet and enjoy the silence.");
			writeText("...");
			writeText("Eventually, " + fName('mom') + " brings up something about the weather and the two of you are wrapped up in smalltalk.");
			writeText("The conversation carries on for several hours of what feels like small talk. This time both of you are carrying of the conversation, and " + fName('mom') + " follows along with what you say with patient attentiveness.");
			writeText("It's soothing to just whittle away the time, and you feel like you both understand each other better. Eventually though you make it back to the apartment complex and you wish each other well before you go your separate ways. ");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom3": {
			writeText("It'd be hard to miss her, as she's drunkenly mumbling half the words to some old pop song while fumbling with her keys.");
			writeSpeech('player', '', "Have a fun afternoon?");
			writeText("She jumps on the spot, scared for just a second before she gives you a smile that says 'glad to see you'.");
			writeSpeech('mom', '', "" +data.player.name + "! Heyyyyyy! Cmon in!");
			writeText("You'd intended just to say hi, but what the hell.");
			writeText("...");
			writeSpeech('mom', '', "Fuggin sweet... Got a phone number...");
			writeSpeech('player', '', "Don't give it out like candy, I only give my number to people I like.");
			writeSpeech('mom', '', "Fu... Who the fuck am I gonna give it out to, huh?");
			writeText("She waves her phone in your face, showing off her empty contacts list. You see a few numbers she hasn't spoken to in years, and there isn't even a 'mom' or a 'dad' entry.");
			writeSpeech('mom', '', "Hehe... Eheh... Ha! I've got your nuuuumber. You'd better reshpond if I send you something...");
			writeText("Eventually she starts heavily slurring her words, she's walking the edge of conciousness.");
			writeSpeech('player', '', "You alright? Maybe I should get going.");
			writeSpeech('mom', '', "Nooooo! Hey we've got all day left, don't leave me alone! You don't talk much, but beeee-lieve me, it gets quiet when I'm alone in here buddyyy...");
			writeText("She lazily grabs onto your arm, holding it tightly. You can feel her soft hands, but also her breasts through her shirt against your skin.");
			writeText("You weigh the options, but one thing tips the scales. Having your way with her here would feel nice, but it'd also be temporary at best.");
			writeText("She's a nice friend, and maybe that could go somewhere in the future. You'll be a gentleman here, especially since she's an awful pick for hypnotizing. Getting away with it would be more trouble than it's worth.");
			writeSpeech('player', '', "Alright " + fName('mom') + ", time to get you into bed.");
			writeSpeech('mom', '', "Fuggin... Not even fuggin tired you little bitch...");
			writeText("You get her into bed without much trouble despite her protests. Before you leave she grabs onto your hand for a few moments before she's out like a light.");
			passTime();
			setTrust('mom', 80);
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom4": {
			writeEvent('mom1');
			removeItem('Beer');
			writeText("...");
			writeSpeech("mom", "", "You should go, I've already sobered up. I'm sorry.");
			writeSpeech("player", "", "We can talk tomorrow, alright? I'm still here for you if you need me.");
			passTime();
			setTrust('mom', 90);
			data.story[0].textEvent = '';
			data.player.location = "apartmentOutside";
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "mom5": {
			writeEvent('mom2');
			writeText("...");
			writeText("You two spend the next few hours enjoying each other's company, before finally the two of you begin to get dressed.");
			writeSpeech("player", "", "This was nice. Wanna do it again sometime?");
			writeSpeech("mom", "", "Sure. I'll be out of town for most of tomorrow, but I'll be back soon. We can, well, have some fun once I'm back.");
			writeSpeech("player", "", "It's a date.");
			passTime();
			setTrust('mom', 100);
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "momCasino1": {
			writeBig("images/scarf/casinoMom1.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Heeey~! C'mon in, have a grand old time! Just the two of us!");
			writeSpeech("player", "", "momF? What're you wearing?");
			writeText("It's a trick of the mind, you're filling in the blanks of the casino yourself. You're aware enough to know that falling down the rabbit hole is a bad idea, but...");
			writeBig("images/scarf/casinoMom2.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "I'm headed in now. If you wanna follow, well...");
			writeText("Too self concious to finish her statement, she walks through a small door you didn't see before.");
			writeSpeech("scarf", "bunny.jpg", "Relax... Let yourself sink in and enjoy~");
			writeFunction("writeEncounter('momCasino2')", "Follow momF");
			writeFunction("changeLocation(data.player.location)", "Resist, keep on track");
			break;
		}
		case "momCasino2": {
			writeBig("images/scarf/casinoMom3.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "So, what kinda fun were you hoping to have with me? I was hoping we could...");
			writeText("Her voice fades out as a pleasant haze fills your mind.");
			writeBig("images/scarf/casinoMom4.jpg", "Art by Enoshima Iki");
			writeSpeech("scarf", "bunny.jpg", "Just relax, enjoy. There's nothing left to worry about, I'll do all the thinking for you.");
			writeBig("images/scarf/casinoMom5.jpg", "Art by Enoshima Iki");
			writeSpeech("scarf", "bunny.jpg", "Your body will follow my instructions, while your mind enjoys a little slice of heaven on repeat.");
			writeBig("images/scarf/casinoMom6.jpg", "Art by Enoshima Iki");
			writeSpeech("scarf", "bunny.jpg", "Forever and ever. Goodnight, child.");
			writeText("Her voice is like waves against brittle rocks. Each splash takes a little more of you away, until you're broken apart and spread throughout the ocean.");
			writeText("Some small, last part of you recognizes her soft hand on your cheek before it fades away, leaving you with nothing but the pleasure of an endless night in the casino with momF.");
			writeFunction("loadEncounter('scarf', 'failure')", "The End");
			break;
		}
		case "momreturn": {
			writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			passTime();
			setTrust('mom', 101);
			break;
		}
		case "statusQuo": {
			switch(checkTrust('mom')) {
				case 101:
					writeHTML(`
						im profile.jpg;
						sp mom; playerF! How's it going? Everything going great? Not much on my agenda for today, I was thinking about staying in. Maybe seeing if you wanted to hang out, actually.
						sp player; Sure. I was thinking...
					`);
				break;
				case 102:
					writeHTML(`
						sp mom; playerF! `+data.player.time+`! Hope you aren't overworking yourself at that school of yours.
					`);
				break;
				case 104:
					writeHTML(`
						t It seems like she isn't home today, so you're about to leave until you feel a tap on your shoulder.
						im 6-2.jpg
						sp mom; Hah, did I scare ya? Come in, come in! Take a breather, you wanna go out again tonight?
					`);
					writeFunction("writeEncounter('momEnding')", "Maybe it's time to settle down");
				break;
				case 105:
					writeHTML(`
						sp mom; Oh, hey playerF. If you wanna go out tonight I can, just a little weirded out.
						sp player; Something happen?
						sp mom; Yeah... I was at the store and there was some guy in pajamas... He was with this other guy, and he kept making weird noises. He would be all 'ooh woo', and talking about musk.<br>I know I shouldn't judge, but... Whatever. Could you take my mind off it?
					`);
					writeFunction("writeEncounter('momEnding')", "Maybe it's time to settle down");
				break;
				case 106:
					writeHTML(`
						sp mom; Heeey~! There's my playerF! Hey, I read that giraffes are the only animals born with horns. Bullshit, right? But I checked it out, it seems legit!
					`);
					writeFunction("writeEncounter('momEnding')", "Maybe it's time to settle down");
				break;
				default:
					writeHTML(`
						sp mom; Oof, it feels like the groceries get heavier every week. Hey, why aren't I getting you to do it?<br>Just kidding, hah!<br>... Unless?
					`);
					writeFunction("writeEncounter('momEnding')", "Maybe it's time to settle down");
			}
			writeFunction("writeEncounter('momdateDrinking')", "Go out drinking");
			writeFunction("writeEncounter('momdateRestaurant')", "Go to a restaurant");
			writeFunction("writeEncounter('momdateHypno')", "Try out hypnosis");
			writeFunction("writeEncounter('momdateBeach')", "Go to the beach");
			writeHTML(`
				trans momBath; ?flag miko brothel; !flag mom bath; Invite momF to the mikoL bathhouse
			`);
			//writeFunction("writeEncounter('momdateStayIn')", "Stay in with momF");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "momdateDrinking": {
			writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			data.player.time = "Night";
			raiseTrust('mom', 1);
			break;
		}
		case "momdateRestaurant": {
			writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			passTime();
			raiseTrust('mom', 1);
			break;
		}
		case "momdateHypno": {
			if (checkFlag("mom", "momHypno") == false) {
				writeHTML(`
					t Practically from the first moment you met momF you knew that her strong personality would make hypnosis difficult, but now that you two are together it's probably worth a shot. You decide to bring up the idea.
					mom ... Hypnosis.
					player Yes.
					t She awkwardly looks aside for a moment before letting out a slow exhale.
					mom Well... Everybody has their thing, I guess. If it'd make you happy then... Go ahead.
					t ...
				`);
				addFlag("mom", "momHypno");
			}
			else {
				writeHTML(`
					mom Again? 
					player Yeah, I figured since we both had fun last time..
					mom Hmm. Alright, sure. Lemme grab a drink at least.
					t ...
				`);
			}
			if (data.player.hypnosis < 2) {
				writeText("As she lightly drifts off, you realize your technique might actually be affecting her. Still, the way her chest heaves with each breath, the softness of her lips, it's...");
				writeFunction("writeEncounter('momHypnoFail')", "Distracting...");
				passTime();
				raiseTrust('mom', 1);
			}
			else {
				writeText("As she lightly drifts off, you realize your technique might actually be affecting her. Still, the way her chest heaves with each breath, the softness of her lips, it's...");
				writeFunction("writeEncounter('momHypnoFail')", "Distracting...");
				writeFunction("writeEncounter('momHypnoSuccess')", "More motivation to succeed");
				passTime();
				raiseTrust('mom', 1);
			}
			break;
		}
		case "momHypnoFail": {
			writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "momHypnoSuccess": {
			writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "momdateBeach": {
			writeEvent(name);
			writeFunction("writeEncounter('momdateBeachCont')", "Continue");
			data.player.time = "Night";
			raiseTrust('mom', 1);
			break;
		}
		case "momdateBeachCont": {
			writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "momdateNight": {
			writeEvent(name);
			writeFunction("writeEncounter('momdateNightCont')", "Go to sleep");
			data.player.time = "Morning";
			raiseTrust('mom', 1);
			break;
		}
		case "momdateNightCont": {
			writeHTML(`
				t The soft buzz of an unfamiliar alarm clock causes you to jolt up. On autopilot you're already moving, until you nearly trip on an empty bottle.
				mom Good morning~<br>Oof, my pussy... I guess it's better than a hangover.
				im 069.jpg
				mom How many times did...<br>Are you some kind of prostitute or something? I'd ask if you're some kind of 'sexpert', but I'm actually serious about this.
				player No, but I've done a lot of community service.
				mom ... That's the weirdest answer you could've given.
				player Fine, just assume I'm a sexpert then. Another round for good luck?
				mom Wha-<br>Are you kidding? No! Down *boy! <i>I</i> happen to be an ordinary human, we have limits!
				player Limits are meant to be broken~
				mom Go tease another old lady, I need some rest or my body'll start getting used to this. I'd be some kind of super-pervert like you.
				player Fiiiine, I should get to work then. See you soon, momF.
				mom See you. Oh, and, it was nice having somebody to sleep next to. Thanks.<br>The sex was pretty good too, I guess. Hehe~
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "momdateStayIn": {
			if (galleryCheck(name) == false) {
				writeEvent(name);
			}
			else {
				writeHTML(`
					im return2.jpg
					im 114.jpg
					im 115.jpg
					im 6-3.jpg
					im 6-4.jpg
				`);
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			passTime();
			raiseTrust('mom', 1);
			break;
		}
		case "endingPrompt": {
			writeHTML(`
				im 1-1.jpg
				t You see her walking by, she looks as good as ever, although her expression seems a little downcast.
				t You call out to her and she lights up quickly.
				sp mom; playerF~! Good to see you, I was just out picking up some things. You wanna go out again tonight?
				sp player; Maybe. Why, you gonna start playing hard to get?
				sp mom; Hah! It's tough to play hard to get when you're hard to...<br>*Ahem*<br>Nevermind, not as funny as it was in my head. Give me a minute.
				t As she starts sorting through her bag it's nice to see how bright her expression becomes around you. Just being around her is... Nice. It's good to know that outside your daily life of hypnotism and paranoia over being caught, you can always come home to someone who just enjoys being around you.
			`);
			raiseTrust('mom', 1);
			writeFunction("writeEncounter('momEnding')", "Maybe it's time to settle down?");
			writeSpeech("mom", "", "Alright, that should do it. So, what's up?");
			writeFunction("writeEncounter('momdateDrinking')", "Go out drinking");
			writeFunction("writeEncounter('momdateRestaurant')", "Go to a restaurant");
			writeFunction("writeEncounter('momdateHypno')", "Try out hypnosis");
			writeFunction("writeEncounter('momdateBeach')", "Go to the beach");
			//writeFunction("writeEncounter('dateBeach')", "Go to the beach");
			//writeFunction("writeEncounter('dateStayIn')", "Stay in with momF");
			writeFunction("changeLocation(data.player.location)", "Go back");
			break;
		}
		case "momEnding": {
			addFlag("mom", "complete");
			writeEvent(name);
			writeFunction("writeEncounter('momEndingCont')", "Months later");
			break;
		}
		case "momEndingCont": {
			writeEvent(name);
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "momBath": {
			writeEvent(name);
			addFlag("mom", "bath");
			passTime();
			writeHTML(`
				finish
			`);
			break;
		}
		case "momBathRepeat": {
			writeHTML(`
				im 007.jpg
				t ...
				im 079.jpg
				im 086.jpg
				im 087.jpg
				im 088.jpg
				im 091.jpg
				im 093.jpg
				t ...
				im momBathRepeat.jpg
				finish
			`);
			passTime();
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
	{index: "mom1", name: "Drinking Buddy",},
	{index: "mom2", name: "Breaking Tensions",},
	{index: "momreturn", name: "Return",},
	{index: "momdateDrinking", name: "Date - A Mug of Booze",},
	{index: "momdateRestaurant", name: "Date - A Lovely Meal",},
	{index: "momHypnoFail", name: "Date - A Hypnotic Evening (Fail)",},
	{index: "momHypnoSuccess", name: "Date - A Hypnotic Evening (Success)",},
	{index: "momdateBeach", name: "Date - A Day on the Beach 1",},
	{index: "momdateBeach Cont", name: "Date - A Day on the Beach 2",},
	{index: "momdateNight", name: "Date - Midnight Meeting",},
	{index: "momdateStayIn", name: "Date - Lazy Weekend",},
	{index: "momBath", name: "Bathhouse Waters - Youthful Energy"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "mom1": {
			writeSpeech("player", "", ""+fName('mom')+"! Hey!");
				writeText("She has a familiar despondent look in her eyes, but it softens as she sees you waving from across the street.");
				writeText("She gives you a small wave back and you walk over to her.");
				writeSpeech("player", "", "Care for some company?");
				writeSpeech("mom", "", "I would. Thank you.");
				writeText("Her voice is quiet, she seems down. The two of you walk in an unusual silence.");
				writeBig("images/mom/1-1.jpg", "Art by Enoshima Iki");
				writeText("She really is gorgeous, it's a shame she's not very open to hypnosis.");
				writeBig("images/mom/1-2.jpg", "Art by Enoshima Iki");
				writeSpeech("player", "", "Ah, sorry.");
				writeSpeech("mom", "", "It's fine.");
				writeText("She seems like she noticed you staring, but doesn't say anything else.");
				writeText("The two of you make your way back to the apartment complex, but when you reach your door "+fName('mom')+" grasps your hand and pulls you towards her apartment.");
				writeSpeech("mom", "", "You have booze right? I need a drink, and I'm almost dry.");
				writeSpeech("player", "", "Yeah, I have some.");
				writeText("...");
				writeBig("images/mom/2-1.jpg", "Art by Enoshima Iki");
				writeSpeech("mom", "", "And so then what happened next? Nothing! Nothing at all!");
				writeText("She got changed into her pajamas before she started downing the booze. Her massive breasts are just barely visible through the near-transparent top.");
				writeSpeech("player", "", "Uhuh. Yeah.");
				writeText("After only a few cans she seems well past buzzed and is now droning on about nothing at all. It'd be fine if you had something to drink too, but she isn't sharing.");
				writeSpeech("player", "", "Well, I should probably get going. Early day tomorrow.");
				writeBig("images/mom/2-2.jpg", "Art by Enoshima Iki");
				writeSpeech("mom", "", "Hey.");
				writeText("She sits up, slightly wobbly.");
				writeSpeech("mom", "", "Fuck you.");
				writeSpeech("player", "", "Excuse me?");
				writeSpeech("mom", "", "I'm hot, right? Why did you just leave the other night?");
				writeSpeech("player", "", "I'm sorry? Did you want me to do something? Like, sexual, to you while you were drunk?");
				writeSpeech("mom", "", "Hell no, I would've punched the shit out of you.");
				writeSpeech("player", "", "I don't understand. What do you want then?");
				writeText("She looks frustrated, more at herself than you.");
				writeSpeech("mom", "", "I just... I want something, you know? I wanna speak my mind without drinking. I don't want to spend all day waiting for the day to end. I don't want to hear about community events and then chicken out at the last moment, telling myself 'I bet I'll have an awful time anyways!'<br>I just...");
				writeBig("images/mom/2-3.jpg", "Art by Enoshima Iki");
				writeText("She lifts her top, letting her tits flop out.");
				writeSpeech("mom", "", "Here! Stare at them all you want. I could feel you looking at them while we were walking.");
				writeSpeech("player", "", "You're my friend "+fName('mom')+", but I'm getting tired of this. You look gorgeous, what's wrong?");
				writeSpeech("mom", "", "I just... I don't want to be alone right now. Please stay.");
				writeSpeech("player", "", "And if I do?");
				writeSpeech("mom", "", "T-then I'll do whatever you-");
				writeBig("images/mom/2-4.jpg", "Art by Enoshima Iki");
				writeText("You grab her by the waist and take her nipple into your mouth.");
				writeSpeech("mom", "", "Mmmnn...");
				writeText("You suck hungrily on her nipple, and she's squirming in your grasp.");
				writeText("Within moments, a full-body shiver makes its way up her body and she gasps.");
				writeText("Wordlessly, she pants. She must've been on a pretty long dry spell.");
				writeSpeech("mom", "", "... You're next. Take off your pants. I'm not going to go far, but I can at least help you out too.");
				writeText("...");
				writeBig("images/mom/2-5.jpg", "Art by Enoshima Iki");
				writeSpeech("mom", "", "Just leave everything to me. Don't think about anything else, okay?<br><i>Just keep your mind clear. No backing out now.</i>");
				writeText("Her gentle hand slides up and down your shaft.");
				writeSpeech("mom", "", "Don't hold it in. Just focus on my hand. Let it all out.");
				writeBig("images/mom/2-6.jpg", "Art by Enoshima Iki");
				writeSpeech("mom", "", "Ah, it shot pretty high.");
				writeText("There's an almost relaxed admiration in your voice as she watches sperm ooze out from your cockhead.");
			break;
		}
		case "mom2": {
			writeSpeech("player", "", "Hello?");
			writeSpeech("mom", "", "Good morning!");
			writeBig("images/mom/3-1.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "I was just on my way to pick up a few things, wanna come?");
			writeSpeech("player", "", "Yeah, sure.");
			writeText("...");
			writeBig("images/mom/3-2.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "So, about last night.");
			writeBig("images/mom/3-3.jpg", "Art by Enoshima Iki");
			writeText("She sighs, trying to collect herself.");
			writeSpeech("mom", "", "Yes. Listen. I like you, you like me, right?");
			writeSpeech("player", "", "Yep. Wouldn't have spent as much time with you if I didn't enjoy hanging out with you.");
			writeBig("images/mom/3-4.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Ugh. This really wasn't worth all the worrying, was it?");
			writeSpeech("player", "", "Cmon. Let's head home.");
			writeText("...");
			writeBig("images/mom/3-5.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Ohhh... I don't get why you like them so much.");
			writeText("You knead her breasts, enjoying her wrthing as you run your fingers over her nipples.");
			writeBig("images/mom/3-6.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "A-ahhh...<br>How... Long are you going to spend teasing me?");
			writeSpeech("player", "", "As long as I like.");
			writeSpeech("mom", "", "Well, I can't wait anymore");
			writeText("She pulls you by the arm over to her bed, and tosses you a string of condoms.");
			writeSpeech("mom", "", "You know how to use them, right?<br>... Sorry, of course you do. I'm just-");
			writeSpeech("player", "", "Shh.");
			writeBig("images/mom/3-7.jpg", "Art by Enoshima Iki");
			writeSpeech("player", "", "You're really wet.");
			writeSpeech("mom", "", "Don't say stuff like that out loud, I'll get self-conscious.<br>And I don't want to see any of that 'pump and dump' stuff I hear about, alright? If you feel like you're going to pop early, sto-");
			writeBig("images/mom/3-8.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Aaaaa~!!<br>S-stop~! I wasn't... Nnn...");
			writeSpeech("player", "", "You're more than ready. Don't hold back. A beautiful woman like you deserves to get lost in the sensation.");
			writeSpeech("mom", "", "S-stop... Aaah~<br>Quit it with the corny... With the corny smooth talking.");
			writeSpeech("player", "", "You're right. No more words.");
			writeBig("images/mom/3-9.jpg", "Art by Enoshima Iki");
			writeSpeech("mom", "", "Aaaah~!");
			writeText("Her legs shaking, you ride through an orgasm, filling the first condom of many tonight.");
			break;
		}
		case "momreturn": {
			writeHTML(`
				t You spy a familiar face, so you greet her with a smile and a wave and she smiles back at you.
				im profile.jpg
				sp mom; playerF! Hah, you miss me?
				sp player; Of course. It's good to see you again momF.
				sp mom; Cmon in! Make yourself at home. <br>Ah, it's good to see you again too.
				t You follow her inside and take a seat. She's unpacking a few things like some shirts and other odds and ends.
				im return1.jpg
				sp mom; Hey, I can feel you staring, you know. I haven't been gone that long... I really need a shower. Be right back.
				t You take a breather and relax while momF cleans herself off.
				...
				sp mom; Hey, wake up. I'm finished, you need one?
				im return2.jpg
				sp mom; Geez, you really missed me, huh? It's obvious from your face. Honestly, I could really use some sleep, but...
				im return3.jpg
				sp mom; I'd be lying if I said I didn't think of you while I was out... I could go for something quick, if you're up for it.
				...
				im return4.jpg
				sp mom; How on earth do you manage to control yourself? It's so energetic it feels like it should've burst through your pants earlier...
				t momF lets out a squeak as you thrust, slapping your hips against the bottoms of her breasts as you enjoy the pillowy sensation between them.
				sp mom; It's so... Big... When it's up this close, it's actually intimidating. 
				im return5.jpg
				t She doesn't say anything, just smiling as your balls contract and you blow your load over her face.
				im return6.jpg
				sp mom; Ah~... You really do make a mess, don't you? My face is coated... I'll need another shower.
				sp player; Well, while you're already dirty...
				sp mom; Another?! Where are you getting this energy?! 
			`);
			break;
		}
		case "momdateDrinking": {
			writeHTML(`
				sp player; How about the two of us grab something to drink?
				sp mom; Sure! I've got a few cases of beer. It's cheap, but it should get us-
				sp player; Actually, I was thinking we could go out for a drink. Maybe head somewhere with a nice ambiance.
				sp mom; O-oh, well, I guess that's fine. I don't really go out much, so I can't recommend anywhere in particular.
				...
				t The two of you go out to a bar and grab something to drink. Though she seemed hesitant at first, after a few drinks she started to get into the spirit of things.
				sp mom; A-and then, and then, she looked at me like I wash fucking hammer'd~! I can remember that night, so I guess I washn't that fucking drunk, wush I?!
				sp player; I guess not.
				t For a while she was prety self concious about being out, talking in a pretty hushed tone. Alcohol can have some strong effects on the right people.
				t ... Speaking of which, you should probably cut her off if you want to walk home tonight.
				...
				im 1-1.jpg
				sp mom; Hoo... Warmer tonight than I thought.
				sp player; Really? It's pretty chilly, actually.
				sp mom; Mmm... Still kinda wobbly, don't usually go out to drink.
				t As you reach her door, you split off for a moment to-
				sp mom; Hey, where the hell do you think you're going?
				sp player; Just needed to grab something real quick.
				sp mom; Well hurry up, fuckin' tease. I got cut off before getting smashed, so I'll be pissed if I fall asleep tonight without getting laid.
				...
				im 5-1.jpg
				sp mom; Ahh~! Ahah~!
				t The sounds of drunken sex fill the room, less verbose but much louder than usual fucking.
				sp mom; There~! Right~ There~!
				im 5-2.jpg
				sp mom; Haaah~!
				im 5-3.jpg
				sp mom; Oooohg~!
				t As the climax winds down the day of a lovely date, the sound of sex will fill the air for a while more. The sun has set, the streetlights are lit, and the two of you are satisfied.
				t ... For now.
			`);
			break;
		}
		case "momdateRestaurant": {
			writeHTML(`
				sp player; How about the two of us grab a bite to eat?
				sp mom; Oh, sure. I mostly got cheap stuff anyways, I could go for a quick bite. I at least know a few fast food places in the area.
				sp player; Actually...
				...
				im 3-4.jpg
				sp mom; Haahh~... That was a dirty trick. <br>I was expecting something quick, and you take me to a place so fancy they charge for water... How'd you get your meal for free anyways?
				sp player; I have my ways. You seemed out of your element. Did you not have a good time?
				sp mom; I did, I just could've used some warning though. I don't usually go out to places like that. I felt way out of place.
				sp player; You look fantastic, you fit right in back there.
				sp mom; ... Flirt.<br>Mmm... Honestly, I'd kill for a massage right now. These babies aren't light, and <i>somebody</i> keeps getting me all riled up. You'll take responsibility for that, right?<br>Don't answer that yet. I'll rinse off, you should too. I'll leave the door unlocked for you, alright?
				t As you arrive at your place the two of you split up for a bit. 
				...
				t You push open momF's front door and shut it behind you. The place is dark and you don't hear her, so you turn on the light and are greeted with...
				im 070.jpg
				sp mom; Took you long enough. I know we just ate...
				im 071.jpg
				sp mom; But I hope you're still hungry.
				...
				im 094.jpg
				t The sound of her panting is barely audible against the sound of your hips slapping against her ass. She shudders, her toes clench and relax in a rhythm, she's enjoying the sensation of raw sex just as much as you are.
				sp mom; Nnn-ooo~<br>Inside... Ghhh~!
				im 095.jpg
				t She lets out a long sigh, slightly hitching each time she feels your cock spurts inside her.
				sp mom; It's... It's fine... It's okay for today, just... Just take a breather so we can go again, okay?
			`);
			break;
		}
		case "momdateBeach": {
			writeHTML(`
				mom Eh? Did I hear you right?
				player Yep. We can catch a train today, be back before it gets too dark.
				mom You have to give me time to prepare for these things! You can't just drop that kinda idea on a girl... Maybe a college girl, but...<br>I need a swimsuit, some sunblock, and I'm totally out of shape, and-
				player You look great, we'll pick up whatever we need on the way, and I'm pretty sure you already have something to wear.
				mom Hah... Fine, I can't say no to you... I expect you to pick up the slack, since you're springing this on me and all. Give me a minute and we'll go.<br>... Thanks for this. I could use a break from this town for a bit.
				t ...
				t The trip was pretty uneventful, but momF was practically buzzing with excitement from the moment you got on the train. And when you arrive...
				im 7-1.jpg
				mom There's that smell of saltwater, the sun on the skin, the sand beneath the toes! It's the beach! Isn't it great?
				player The sunlight... It burns...
				t You dramatically pose like you're melting away, getting quite the laugh from momF.
				im 7-2.jpg
				mom Hah! Quit messing around~! Hey, let's find a nice spot to relax. Ooh, you know I've never built a sand castle before?
				t Laughing, she leads you along the beach.
				t ... 
				t Eventually the two of you lay down beneath an unbrella to relax in the shade.
				im 7-5.jpg
				mom ... You gonna blink? You've been staring so long I'm worried the heat's actually fried you.
				t She glances down between your legs and smiles.
				mom Oooh, I get it. <br>Hah... You're incorrigible. Seriously, what kind of pervert would get turned on in a place like this? I bet you can't wait until we get back home.<br>Well...
				im 7-6.jpg
				mom I can't wait either~<br>Haha! That got a rise out of you!
				t She sits up, enjoying the effect her body is having on you.
				im 7-4.jpg
				mom How about this? Hehe, I think I get why you love teasing me so much, it's got quite the charm to it~
				t She stands up, giving you a good view of her ass.
				im 7-3.jpg
				mom Mmm, don't get me wrong, I love the beach but... I think I've had my fill of it today.
			`);
			break;
		}
		case "momdateBeachCont": {
			writeHTML(`
				t Once the two of you made it home, you spent the day on wholesome activities like scrabble, and enjoyed a nice meal together.
				im 064.jpg
				mom Fuck! Yes~!
				t Well, actually you started fucking like rabbits the moment you closed the door. That's wholesome in it's own way, right?
				im 065.jpg
				mom Oooh~! R-remind me to tease you more next time~! Lemme push your buttons whenever I want, and in exchange you can punish me however <i>you</i> want~!
				t Very wholesome.
				t ...
				im 115.jpg
				mom You just won't calm down, will you? Is this bit of you broken or something?
				player Oh? And who was the one teasing me the entire trip to make me like this?
				mom Please, how long have you gone without having sex today? I think you'd still be ready to pop even if I'd been wearing a full-body gown.
				player I think you could pull off anything.
				im 114.jpg
				mom Hmph! Flirt! You're just saying that so I'll get you off! If you think a few sweet words will get you my pussy, or even my hand, you're dead wrong!<br>Though... A few more compliments like that might just get you something else~
				t ...
				im 067.jpg
				mom Hehe~
				t She gives a giggle as she sandwiches your cock between her huge, soft breasts. Though she'll poke fun at you for it, she clearly does enjoy your little demonstrations of just how virile her partner can be.
				im 068.jpg
				mom Mmm... Can you go again?
			`);
			break;
		}
		case "momdateNight": {
			writeHTML(`
				t Feeling a little pent up you decide to go pay momF a visit.
				t ...
				mom Lonely huh? I know the feeling. Cmon, my bed's big enough for the both of us.
				player Actually, I had something else in mind...
				mom Eh?
				t You give her a gentle push onto the bed, it's quite the treat to watch as she jiggles to the touch.
				im 021.jpg
				mom Whoa! Hey, careful! There's a strict 'no animal' policy in this house.
				player Sorry, something about you has got me in a mood tonight.
				mom A good mood?
				im 022.jpg
				mom I guess so... How much energy does this litt-<br>Well, big guy I guess. Seriously, you're like a teenager.
				player And yet you can still keep up with me.
				mom Are we gonna keep sassing each other or are you going to put on a show? 
				player You like it?
				mom Well... It's not a sight I get to see often... Except online I guess. Do you need help? I could try some dirty talking. Y'know, 'ooh, my giant breasts ache for your daddy-juice'...
				im 023.jpg
				mom Wha-? No way, am I a natural?
				player Ghh, coincidence, just let your body do the talking...
				mom Goodness sake, you could impregnate a rock if you found a hole... You...
				im 024.jpg
				mom You're still... Mmm...
				t She slowly gulps down the splurts that landed in her mouth. You keep firing off until she's well-glazed.
				im 026.jpg
				mom Hah... You're a real piece of work, you know. And what are you eating, anyways? I'm pretty sure this stuff is supposed to be watery, and a lot less... Well, sploogey.
				player We all have our strong points.
				mom And yours is pointing right at me. Hah!<br>*Ahem* You need any help with that? I figure I'm already a mess, so...<br>You wanna stay the night?
				t Well, since you're here already...
			`);
			break;
		}
		case "momdateStayIn": {
			writeHTML(`
				im return2.jpg
				im 114.jpg
				im 115.jpg
				im 6-3.jpg
				im 6-4.jpg
			`);
			break;
		}
		case "momEnding": {
			writeHTML(`
				t You sigh, deep in thought. It's hard to imagine going legit for anyone, even momF.
				sp mom; Hellooo~? You got a headache or something? I have some-
				sp player; momF, I want these dates to be a regular thing.
				sp mom; Uh... They already are, though?<br>Oh I get it, you want the happy endings more regularly? Hah! You're practically still a kid!
				sp player; Not just that... I like spending time with you. I want more.
				sp mom; ... You're acting pretty weird today. Yeah, I'll hang out with you as much as you want, okay? Cmon in, I'll grab us some drinks. You can sleep over if you want, you live nextdoor anyways.
				sp player; Yeah... Just not sure what else to say... It's not like I've got a ring or anything.
				t She does a double take.
				sp mom; Wha-? Wait, that's what you meant?! You asshole!
				t She gives you a hard jab in the shoulder, and pouts for a little, then sighs.
				sp mom; God damn, that was a trash way to ask... But... <br>My answer's still yes.
				sp player; Let's drink to it then.
				sp mom; Hah~! Gonna try and get me hammered so I forget that awful proposal? Fat chance!<br>Hehe... I guess a little would be fine though. Drunk sex is more fun, right?
				...
				im 2-1.jpg
				t You spend the night in good company, despite her earlier claim she's pretty comfortable getting pretty drunk with you.
				t As things reach a fever pitch she sits up so she can start slipping her comfortable pajamas off.
				im 140.jpg
				t She waves her ass, trying to seduce you as best as a middle-aged drunk woman can.
				sp mom; Eheh... Y'know... I was confused why somebody like you'd hang out with somebody like me...<br>I bet it's cause of this, huh?
				sp player; You are tempting. But there's more to you too.
				sp mom; Hah~! I'm old, not blind. I can see you stealing glances whenever you can tear your eyes away from my chest!
				...
				im 114.jpg
				sp mom; Hah... You're still here, huh? So I guess that means you were serious?
				sp player; I meant every word.
				sp mom; Mmmgh... Fine. But if you want me to be yours... You're gonna need to keep up with me, alright? You may be cute, and you might pay good lip service...
				im 115.jpg
				sp mom; But I'm a woman with needs, got it? Don't think I'll take your work as an excuse either, okay? You and I aren't leaving this house until we're both exhausted, sweaty wrecks!
			`);
			break;
		}
		case "momEndingCont": {
			writeHTML(`
				t You push open the door and walk inside. Another day's work behind you.
				sp player; I'm hoooome~
				sp mom; Bedroom, honey~!
				im e-1.jpg
				sp mom; Suprise~! They're getting even bigger~!
				t You're greeted with a pair of tits. A lovely way to start the end of your day.
				im e-2.jpg
				sp mom; Ooh, that feels nice. It feels like they're more full of milk every day...<br>Hey, you in the mood?
				sp player; Always, dear. But it's been every day, aren't you getting tired?
				sp mom; Hehe, some women get cravings around this time you know.
				sp player; Yeah. You're the only one I've heard about who gets them for dick though.
				sp mom; Hah~! You keep telling me I'm special!<br>Cmon... I need it~
				im e-3.jpg
				sp mom; Ah~! Ah~!
				t Each spank causes her to tighten around you. Part of you wants to be gentle with her, but her expression shows she's clearly hungry for more.
				im e-4.jpg
				sp mom; Ohhh...
				t A thin line of drool escapes her lips as her eyes narrow and roll back.
				t You pull out, having cum inside so deeply not a drop leaks out. You relax and lay back on the bed, content to let momF rest in the aftergl-
				t But you're interrupted as momF takes your cock in her hand and starts stroking it up and down, even leaning down to lick the head.
				sp player; You're insatiable, darling.
				sp mom; You're addictive, honey.
				im e-5.jpg
				sp mom; Hoo~
				t The night passes in a blurred frenzy, as most of them do these days.
				im e-7.jpg
			`);
		break;
		}
		case "momHypnoFail": {
			writeHTML(`
				t You take a seat in front of momF, your attempts at hypnosis finished. You wave your hand in front of her face and her eyes follow your movement.
				player You're feeling relaxed, sinking deeper and deeper...
				mom I am? I am. Yep.
				t A failure, unfortunately. Well, not totally, she seems to be a little more relaxed at least. Plus you know a few tricks to make the best of a botched bit of fun.
				t You put your hand on her cheek and look her deep in the eyes as she blushes.
				player You're starting to feel warmer, a deep heat is building inside you.
				mom Y-yep. Pretty warm in here. I should probably take off my top, huh?
				t You give a patient smile. She's got the spirit at least.
				t And after a second she show's what else she's got.
				im momP.jpg
				mom So, uh, what else am I feeling?
				...
				im 098.jpg
				mom Ahah~! Am I... Mmmgh, sinking deeper? I think I'm feeling it now~!
				t Though she's enjoying a bit of fun teasing, you still have one more trick up your sleeve and decide to take control of the situation by force.
				mom Whoa!
				t You push her down to the bed and show her exactly how you repay a little attitude.
				im 6-3.jpg
				mom Mmm~! 
				t Overall though, not a bad attempt all things considered. While you weren't able to hypnotize her, you at least have her squarely under your control, at least for tonight.
			`);
			break;
		}
		case "momHypnoSuccess": {
			writeHTML(`
				t You take a seat in front of momF, your attempts at hypnosis finished. You wave your hand in front of her face and she doesn't seem to notice. Success!
				t Well... Partially. It's not a very deep trance. Still, it's a clear sign you've improved as a hypnotist since you came here.
				player How are you feeling, momF?
				mom ... Sleepy.
				...
				im 099.jpg
				t Something about tonight is causing the air to take on an almost electric quality.
				t For all her vulnerabilities, while she's grown attached to you across your meeting and previous sexual encounters, tonight is different. Tonight you are in full control of this woman. It's both a lust for power and her body that pump through your veins.
				t And when you push forwards she goes down as easily as clay in your hands.
				im 6-3.jpg
				t Her body and mind are both here for your pleasure, and she knows it. For tonight it's something that'll become a core of her very being.
				t And with a wordless shudder she sinks even deeper beneath you, her mind swimming in a sea of foglike sensation.
				im 6-4.jpg
				mom Hooo... Good...
				player Hey, can you still hear me?
				mom Mhmm...
				player When you wake up, you're going to feel good. Happy. And you'll appreciate yourself just as much as I do, got it?
				mom Mhmm...
				t You gently pat her head as she drifts off to sleep in the afterglow of a lovely night.
			`);
			break;
		}
		case "momBath": {
			writeHTML(`
				im 007.jpg
				t ...
				im 079.jpg
				im 086.jpg
				im 087.jpg
				im 088.jpg
				im 091.jpg
				im 093.jpg
				t ...
				im momBathRepeat.jpg
			`);
			break;
		}
	}
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
	{index: "momPhone1", trust: 80,},
	{index: "momPhone2", trust: 81,},
	{index: "momPhone3", trust: 82,},
	{index: "momPhone4", trust: 83,},
	{index: "momPhone5", trust: 84,},
	//index: "momReward", trust: 100,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "momPhone1": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage for images, and writePhoneChoices
			writePhoneSpeech("mom", "", "Hello. This is "+fName('mom')+".");
			writePhoneChoices("Sleep well?", "Who?");
			break;
		}
		case "momPhone1A": {
			writePhoneSpeech("player", "", "Sleep well?");
			writePhoneSpeech("mom", "", "Yes. I have not slept that well in years, thank you.");
			writePhoneSpeech("mom", "", "It was probably the booze though.");
			writePhoneSpeech("mom", "", "I will talk to you again later.");
			writePhoneSpeech("player", "", "Take care.");
			setTrust('mom', 81);
			break;
		}
		case "momPhone1B": {
			writePhoneSpeech("player", "", "Who?");
			writePhoneSpeech("mom", "", "Sorry. I must have the wrong number. Please have a nice day.");
			writePhoneSpeech("mom", "", "Wait");
			writePhoneSpeech("mom", "", "You jerk I can see your picture attached to the number");
			writePhoneSpeech("player", "", "Sorry, I couldn't resist. How're you doing?");
			writePhoneSpeech("mom", "", "I am doing well. Still hungover. Good night.");
			writePhoneSpeech("player", "", "Take care. Talk to you later.");
			setTrust('mom', 81);
			break;
		}
		case "momPhone2": {
			writePhoneSpeech("mom", "", "Good morning. I have been thinking about going to the beach sometime.");
			writePhoneSpeech("mom", "", "Have you been to the beach before?");
			writePhoneChoices("Yep. I had a good time.", "Not recently, no.");
			break;
		}
		case "momPhone2A": {
			writePhoneSpeech("player", "", "Yep. I had a good time. I'd go again with you, though.");
			writePhoneSpeech("mom", "", "Flirt!");
			writePhoneSpeech("mom", "", "I still have my old bikini though.");
			writePhoneSpeech("player", "", "I must see it. You cannot tease me like this.");
			writePhoneImage("images/mom/7-2.jpg", "Art by Enoshima Iki");
			writePhoneSpeech("mom", "", "Do not go sharing it around.");
			writePhoneSpeech("player", "", "Whoaaaaa!");
			writePhoneSpeech("player", "", "Gorgeous.");
			writePhoneSpeech("player", "", "Wait, who took the picture?");
			writePhoneSpeech("player", "", "Hello?");
			setTrust('mom', 82);
			break;
		}
		case "momPhone2B": {
			writePhoneSpeech("player", "", "Not recently, no. I'd go if you came in a bikini though.");
			writePhoneSpeech("mom", "", "Flirt! I don't even know if my old one still fits.");
			writePhoneSpeech("player", "", "I'll buy you a new one. What did the old one look like?");
			writePhoneSpeech("mom", "", "Horndog! I know what you are planning.");
			writePhoneSpeech("player", "", "You can't blame me for trying.");
			writePhoneImage("images/mom/7-2.jpg", "Art by Enoshima Iki");
			writePhoneSpeech("mom", "", "Do not go sharing it around.");
			writePhoneSpeech("player", "", "Whoaaaaa!");
			writePhoneSpeech("player", "", "Gorgeous.");
			writePhoneSpeech("player", "", "Wait, who took the picture?");
			writePhoneSpeech("player", "", "Hello?");
			setTrust('mom', 82);
			break;
		}
		case "momPhone3": {
			writePhoneSpeech("mom", "", "Good morning. I am sorry about missing your texts.");
			writePhoneSpeech("mom", "", "I went to bed after sending the picture.");
			writePhoneChoices("It's fine. What's up?", "I won't pry");
			break;
		}
		case "momPhone3A": {
			writePhoneSpeech("player", "", "It's fine. What's up with you?");
			writePhoneSpeech("mom", "", "Nothing very different. A TV show I like is on a marathon today.");
			writePhoneSpeech("mom", "", "It is about housewives.");
			writePhoneSpeech("player", "", "Sounds neat. Enjoy yourself, alright?");
			writePhoneSpeech("mom", "", "I will!");
			setTrust('mom', 83);
			break;
		}
		case "momPhone3B": {
			writePhoneSpeech("player", "", "I won't pry. If you need someone to talk to, I'm here.");
			writePhoneSpeech("mom", "", "I appreciate it, but I really am alright.");
			writePhoneSpeech("mom", "", "I will talk to you later.");
			writePhoneSpeech("mom", "", "Thank you.");
			writePhoneSpeech("player", "", "No problem.");
			setTrust('mom', 83);
			break;
		}
		case "momPhone4": {
			writePhoneSpeech("mom", "", "Good morning again.");
			writePhoneSpeech("mom", "", "I was wondering what you do.");
			writePhoneSpeech("player", "", "To pass the time?");
			writePhoneSpeech("mom", "", "No. For your job. What do you do for a -living-.");
			writePhoneChoices("I'm a school counselor", "I's a federal agent", "I'm a hypnotist");
			break;
		}
		case "momPhone4A": {
			writePhoneSpeech("player", "", "Ah, gotcha. I'm a school counselor.");
			writePhoneSpeech("mom", "", "Ooh. Like helping kids? Do you work at that highschool down the road?");
			writePhoneSpeech("player", "", "No. That's been under construction for years. Pretty sure it's condemned by now.");
			writePhoneSpeech("player", "", "I'm at the university across town.");
			writePhoneSpeech("mom", "", "They have counselors there?.");
			writePhoneSpeech("player", "", "Not usually, I'm worth it tho ;)");
			writePhoneSpeech("mom", "", "Haha! You are smooth. Talk to you later.");
			writePhoneSpeech("player", "", "Later");
			setTrust('mom', 84);
			break;
		}
		case "momPhone4B": {
			writePhoneSpeech("player", "", "I'm a federal agent, I'm here on a sting operation drug bust.");
			writePhoneSpeech("mom", "", "Oh no!");
			writePhoneSpeech("mom", "", "Will you be leaving after?");
			writePhoneSpeech("mom", "", "Have you already caught them?");
			writePhoneSpeech("player", "", "That was a joke.");
			writePhoneSpeech("mom", "", "I knew that");
			writePhoneSpeech("mom", "", "You cannot fool me");
			writePhoneSpeech("mom", "", "Got to go");
			writePhoneSpeech("player", "", "No problem. Talk to you later.");
			setTrust('mom', 84);
			break;
		}
		case "momPhone4C": {
			writePhoneSpeech("player", "", "I'm a hypnotist. I bend people's will to live like a king here.");
			writePhoneSpeech("mom", "", "haha");
			writePhoneSpeech("mom", "", "Can you hypnotize the landlord to reduce my rent?");
			writePhoneSpeech("player", "", "Sure.");
			writePhoneSpeech("mom", "", "Thank you haha.");
			writePhoneSpeech("player", "", "No problem.");
			writePhoneSpeech("mom", "", "Got to go");
			writePhoneSpeech("player", "", "No problem. Talk to you later.");
			setTrust('mom', 85);
			break;
		}
		case "momPhone5": {
			writePhoneSpeech("mom", "", "I will be out of the house soon. Going to visit a friend on Vintage Street.");
			writePhoneSpeech("player", "", "Want some company?");
			writePhoneSpeech("mom", "", "Only if you bring beer.");
			writePhoneSpeech("mom", "", "But it is a long way back. I might see you on my way home.");
			writePhoneSpeech("player", "", "I'll be sure to say hi.");
			writePhoneSpeech("mom", "", "And booze?");
			writePhoneSpeech("player", "", "I'll see if I can grab some.");
			writePhoneSpeech("mom", "", "Thank you");
			writePhoneSpeech("mom", "", "I saw a thing in a magazine the other day. Watch");
			writePhoneSpeech("mom", "", "<3");
			writePhoneSpeech("mom", "", "It is a heart.");
			writePhoneSpeech("player", "", "<3 You too.");
			setTrust('mom', 85);
			break;
		}
		case "momReward": {
			writePhoneImage("images/mom/7-4.jpg", "Art by Enoshima Iki");
			writePhoneSpeech("mom", "", "You've finished all of "+fName('mom')+"'s content for this version, congratulations!");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
			break;
		}
	}
}

//Don't touch anything below this, or things will break.
//console.log('mom.js loaded correctly. request type is '+requestType)

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
					//console.log("Final result for "+encounterArray[number].index+" true, location is "+finalLocation);
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