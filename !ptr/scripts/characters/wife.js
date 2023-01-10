var character = {index: "wife", fName: "Ophelia", lName: "Rose", trust: 0, encountered: false, textEvent: "", met: false, color: "#EF96CE", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false,};

var logbook = {
	index: "wife", 
	desc: "The wife of your apartment complex's landlord who happens to be <i>extremely</i> pent-up.",
	body: "She's an absolute bombshell, it's a wonder your easily-hypnotized landlord managed to wind up with a lady like her.",
	clothes: "She usually wears what <i>would</i> be a modest sweater and skirt, but her heaving bosom could curve even the thickest of outfits, and she somehow doesn't seem to notice her dick is actively bulging through her skirt.",
	home: "She lives with the landlord in the same complex as you. She seems to be a very stay-at-home type as well.",
	tags: "Housewife, cheating, netorase, BDSM (optional), risky sex (optional), rimming (optional)",
	artist: "Silver Radish<br>Original Image Set: [Hagurumarokuro (Silver Radish)] Saotsuki Hitozuma to no Tsukiaikata",
	author: "NoodleJacuzzi",
	/*
	Here is a writeHTML cheat sheet for your convenience, feel free to delete this:
	t This line will print basic text
	t <b>This is bold text.</b> <i>This is italicized text.</i>
	t <b><i>This is both!</i></b>
	t <span style="color:red; font-size: 200%;">This is big, red text, look up css stylings for more ways to alter text!</span>
	t ...
	^The above line will print a horizontal divider I use for showing the passage of time

	sp player; This will print the player speaking a line of dialogue
	sp neet; This will print Tia (as her codename is "neet") speaking a line of dialogue
	sp neet; im images/neet/gym.jpg; This will print Tia in her gym outfit speaking a line of dialogue
	sp neet; altColor #A368A5; This will print Tia speaking a line of dialogue, but her usual orange color will be pink instead
	sp Random Student; im none; This will print dialogue by someone with the name "Random Student" with no profile image.

	addFlag neet; TestFlag
	^The above line will add the flag "test" to Tia
	removeFlag neet; TestFlag
	^The above line will remove the flag "test" from Tia
	
	raiseTrust neet; 10
	^The above line will increase Tia's trust value by 10;
	raiseTrust neet; -10
	^The above line will reduce Tia's trust value by 10;
	setTrust neet; 100
	^The above line will set Tia's trust value to exactly 100;

	im images/neet/bikini.jpg
	^ The above line will print the bikini image in Tia's images folder
	im bikini.jpg
	^ The above line is a shortcut that will print the bikini image in whatever folder this character belongs to. If your character's codename is "pink", for example, then the above line will print the image "images/pink/bikini.jpg"

	trans intro2; Continue
	^ The above line will print a button reading "Continue" that when clicked will transition to the encounter "intro2"
	cancel
	^ The above shortcut line will print a button labeled "Go back" that when clicked will transition to the "cancel" encounter, which has code to end the current encounter and unencounter the character, allowing the player to interact with them again.
	finish
	^ The above shortcut line will print a button labeled "Finish" that when clicked will end the encounter and take the player back to the map.

	The following requirement checks are usable in lots of different types of lines, apply them to the end of any line to make the line only show if the player meets the requirements:
	t ?gender male; This line will only print if the player's gender is male
	t ?gender male; This line will only print if the player's gender is male
	t ?skill hypnosis 1; This line will only print if the player has the hypnosis skill at 1 or higher
	t !gender male; This line will only print if the player's gender is not male
	t ?trust neet 30; This line will only print if Tia's trust value is exactly 30
	t ?trustMin neet 60; This line will only print if Tia's trust value is 60 or higher
	t ?trustMax neet 70; This line will only print if Tia's trust value is 70 or less
	sp player; ?flag neet sports; This dialogue will only print if Tia has the flag "sports"
	sp player; !flag neet sports; This dialogue will only print if Tia does not have the flag "sports"
	im bikini.jpg ?money 50;
	^ The above line will print the bikini image, but only if the player has $50 or more
	
	dual sp1 neet; sp2 player; This will print Tia and the player speaking in unison.
	dual sp1 neet; im1 images/neet/bikini.jpg; sp2 neet; im2 images/neet/gym.jpg; This will print two copies of Tia speaking in unison, the first wearing a bikini, the second wearing a gym outfit.
	dual sp1 neet; altColor1 #A368A5; sp2 player; altColor2 #A34E32; This will print Tia and the player speaking in unison, each with a different custom hex color.
	
	bar Fitness; im images/neet/gymT.png; progress 41;
	^ The above line will print a progress bar labelled "Fitness" with an image of Tia in her gym outfit. The progress bar will show 41 out of 100.
	bar Fitness; im images/neet/gymT.png; progress `+checkTrust("neet")+`; maximum 120;
	^ The above line will print a progress bar labelled "Fitness" with an image of Tia in her gym outfit. The progress bar will show progress equal to Tia's trust value out of 120.
	
	*/
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro1", name: "Someone taps you on the shoulder", requirements: "?trust wife 0; ?location apartmentOutside;", altName: "???", altImage: "none",},
	{index: "intro2", name: "You could visit the landlord's house", requirements: "?trust wife 1; ?location apartmentOutside;", altName: "", altImage: "",},
	{index: "detectiveQuo", name: "You could visit the landlord's house", requirements: "?trustMin wife 2; ?trustMax wife 4; ?location apartmentOutside;", altName: "", altImage: "",},
	{index: "tranceQuo", name: "You could visit the landlord's house", requirements: "?trust wife 5; ?location apartmentOutside;", altName: "", altImage: "",},
	{index: "fetishQuo", name: "You could visit wifeF", requirements: "?trustMin wife 60; ?location apartmentOutside;", altName: "", altImage: "",},
];
		writeHTML(`
			define landlord = sp Landlord; im images/wife/landlord.jpg;
		`);

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
				t Someone taps you on the back, and you jump slightly. Not because you're on edge, but because something about the touch-
				im 007.jpg
				wife Why hello there~! Do you live here, or are you here for a house tour?
				t There's no trace of malice in the kind-looking woman's voice, but there's a sort of spark when you meet her eyes. You can feel the hairs on the back of your neck stand up for just a moment.
				player I'm a resident. I'm... Uh...
				im bulge.jpg
				player <i>Bulge... Bulge...<br>B- Shit, focus. Does she not notice?</i>
				im 008.jpg
				wife Oh~! How wonderful. I'm wifeF, wifeF wifeL. I hope you're enjoying your new home. If anything's wrong I'm sure my husband can fix it up in no time at all!
				t She closes her eyes and laughs softy, and for a moment you realize a pressure has suddenly disappeared.
				player Husband fix it up... Wait, are you-
				landlord Darling!
				im 002.jpg
				t A familiar face suddenly arrives. The most plain, average sort of guy you've ever met.
			`);
			if (data.player.day > 100) {
				writeHTML(`
					t It seems like it was ages ago, but when preparing for your move here you hypnotized the landlord to get a steep discount on your rent.
				`)
			}
			else {
				writeHTML(`
					t It didn't seem important at the time, but when preparing for your move here you hypnotized the landlord to get a steep discount on your rent.
				`)
			}
			writeHTML(`
				landlord Ah, playerF. Good to see you! I see you've met my wife, wifeF.
				player Yeah, sure.<br><i>Probably should have checked if he was married... Hopefully the hypnosis hasn't changed his personality too strongly... What commands did I give him again? <b>No need for me to pay rent</b>...</i>
				landlord Ah, a shame we can't catch up, but I know how busy you are!
				player <i><b>Don't bother me unless it's an emergency</b></i>...
				landlord And I should also be going, my work's about to start.
				player <i><b>Don't be a leech on society...</b><br>There was one more, what was it...</i>
				wife Oh, you're leaving already? Can't you call in sick...
				im 005.jpg
				wife Just once?
				landlord S-sorry darling, you know I can't...
				player <span style="size:50%;">Impotent?</span>
				landlord Huh?
				player Ah! Sorry, I was trying to remember something. <b>Don't sweat the small stuff, stay relaxed.</b>
				landlord Y-yeah. Don't sweat the small stuff, stay relaxed. Don't sweat the small stuff...
				t Nodding along, the landlord pulls away from wifeF and shuffles off despite her sighing.
				wife Hah... That man...<br>Ah, sorry playerF. I need to deal with something. Take care!
				player Yeah, you too.
				t She walks off, her ass hypnotically swaying as she walks, and before you know it she's turned the corner.
				player ... Alright, I <i>may</i> need to do some cleanup later. No telling how long it'll be before she starts connecting dots.
				finish
			`);
			setTrust("wife", 1);
			passTime();
			break;
		}
		case "intro2": {
			writeHTML(`
				t You give a few raps on the landlord's door.
				wife Just a minute!
				t You hear the sound of clattering before the door opens.
				im 009.jpg
				wife playerF! My, I was just thinking of you!
				player Hi, just stopping by to say hello, actually.<br>She's still bursting at the seams... Has she still not noticed? She smells like she showered, it has to be intentional for it to be like this twice in a row...
				wife Oh that's lovely! Not many of the residents come by with anything but issues. Not that there's anything wrong with that, maintaining the place is our job after all.
				im 010.jpg
				wife Hmm... But my husband isn't home right now.
				player Actually, I came to talk to you.
				wife Ara ara~? Well then, that's all the more reason to invite you in.<br>Would you care for a drink? I the water boiling for tea. We only have earl grey, rose petals, and jasmine though.
				player Sure, whatever you recommend would be lovely.<br><i>Alright, this seems straightforwards. In and out, hypnotize her not to notice her husband's under my control, or at least to not blame me for it.</i>
				wife Wonderful~
				player <i>... Maybe I'll have a little bit of fun here too. This should be easy.</i>
				t ...
				player <i>Alright, so what exactly went wrong here?</i>
				wife Oh no! It's worse than I thought!
				player <i>Stuff like this doesn't just happen, not outside of porn anyways. This is going way too well, even for me.</i>
				wife And you're completely <i>soaked</i>~!
				im 013.jpg
				wife I hope it wasn't too hot!
				player Ugh... It's fine, it was kinda lukewarm anyways, and you're not really doing anything with that cloth aside from-
				im 014.jpg
				wife Oh...<br>Oh my... Ten~
				player I, uh... Okay, look, I'm not saying no, but is that like... Rating it on a scale, or are you estimating the length?
				im 016.jpg
				wife ...
				trans wifeFrotting; "Hello? You listening?"
			`);
			break;
		}
		case "detectiveQuo": {
			writeHTML(`
				player ?trust wife 2; Alright, no more shenanigans. Today, I get answers!
				t ?trust wife 2; You stride up to the landlord's door and give it a few hard raps. After a short bit, it opens.
				landlord ?trust wife 2; ... playerF! Did you need more money?
				player ?trust wife 2; No. Well...<br>No! Not right now. I'm here for answers, and-
				landlord ?trust wife 2; Ah, no problem then, what can I help you with?
				player ?trust wife 2; ...<i>Right, calm down playerF. It's not like he's the cause of all this. And if he is, really I'm the cause. Any maybe the solution?</i>
				landlord ?trust wife 2; ... Hello?
				
				landlord !trust wife 2; playerF! Back so soon? How can I-
				player !trust wife 2; Business, landman. You aren't attractive enough for smalltalk.
				landlord !trust wife 2; Hah, that's what they all say!
				player !trust wife 2; ... I refuse to pity you. Anyways!
				
				trans detectiveLandlord; Investigate the landlord !flag wife detectiveLandlord;
				trans detectiveWife; Investigate wifeF !flag wife wifeHandjob;
				trans detectiveHouse; Investigate the house for clues !flag wife detectiveHouse;
				
			`);
			break;
		}
		case "detectiveLandlord": {
			addFlag("wife", name);
			raiseTrust("wife", 1);
			writeHTML(`
				t You take a sit down with the landlord and get straight to the important matters.
				player ... Your wife's nice.
				landlord Yeah! She'd been getting on my case a lot, but that's the end of the honeymoon period for you.
				player So she's been acting different lately?
				landlord Well, I guess? I've been really focused on work lately.
				player Right, avoid being a leech. I should probably ease-
				landlord But you know how women can be! Haha!
				player ...
				landlord So I started paying for her to get some therapeutic massages, and that kept her quiet for a while.<br>... Really quiet, actually... And I haven't actually gotten a bill from them in weeks... Huh.
				player Did you try and investigate at all?
				landlord Nope! Oh, but I tried going with her once. They kicked me out, said I was "too much of a chump"! But I don't sweat the small stuff.
				player ... I really do not know how to feel about you.
				landlord No worries though! On the streets, I met this girl, well, kinda? Male pronouns, but <i>damn</i>, they asked for a fifty and-
				player Guilt absolved, nice. Well, you're a dead end. 
				landlord Haha! Yeah, I guess so! Man, you really tell it like it is. Honestly, I should be paying you, you're basically a therapist, right?
				player ...
				t ...
				landlord Come back anytime!
				player ... You threw away these pesky emotions of guilt a long time ago, playerF. Remember the saying...
			`);
			writeSpecial("You 'earned' $20!");
			data.player.money += 20;
			updateMenu();
			writeHTML(`
				player When you find a twenty under a doormat, you take it.
				finish
			`)
			passTime();
			break;
		}
		case "detectiveWife": {
			writeHTML(`
				player Where's your wife, I wanna talk to her.
				landlord Oh, sure! Honey~!
				wife Still busy~!
				landlord But playerF's visiting!
				wife ... I'll be out in a minute~!
				landlord Ah, women. Anyways, what did you-
				player Smalltalk done. No need to <b>leech</b> off your wife's social life.
				landlord Right... Right, I think I needed to do something.
				player Go check on the other residents or something, maybe the paint's peeling.
				landlord Good idea! Hmm, papiF asked me to stop coming over after I said her son was really cute... Like, god, he's so-
				player I would really like to not hear your voice anymore.
				landlord You got it bud~!
				wife Hello? Honey? Where-
				im 028.jpg
				wife M-my, what can I help you with? I'm afraid you caught me at kind of a bad time...
				player I need to ask you a few things. I was hoping-
				wife I... I'm really horny right now, I'm not sure how helpful I'll be. I'm almost out of lotion too, so...
				player Lotion?<br>Err, fine. After we chat we can-
				im 030.jpg
				wife Hah~? Are you propositioning me?
				player Well, I... That depends on how helpful you are.
				wife Oh, don't worry... When sex is on the line, I <i>always</i> lose~
				player I genuinely cannot tell if you are incredible at seducing me, or you have no idea what you're doing.
				t ...
				player So, how long have you been feeling so pent-up?
				t The two of you are sitting across from each other, but she's rocking back and forth, her eyes almost seem glazed over.
				player And what lotion were you talking about earlier?
				wife Good...
				player Hmm?
				wife Good girls can be patient... Good girls can be patient...
				player ... Hey!
				im 027.jpg
				wife Kya~!
				player Focus! What were you just chanting right there?<br><i>Has she already been hypnotized? By who? The landlord...<br>No way. But why is she...</i>
				wife I'm sorry, I really don't know what you're talking about. It's really hard to focus...
				t She starts taking deeper breaths.
				wife I <i>really</i> cannot possibly focus knowing you've got such a fat, delicious fucking cock down there... It's only natural, right?
				player This is going nowhere...
				wife Oh! I'm sorry, I really am! 
				t You take a deep breath, and decide to try...
				trans wifeHandjob; A different approach
			`);
			break;
		}
		case "detectiveHouse": {
			writeHTML(`
				player I want to take a look around your house.
				landlord I...
				player Have absolutely no problem with that, <b>relax</b>.
				landlord Right... Relax, yeah, sorry. Feel free. My wife's out at the moment, not sure where she went but she's usually not gone for long.
				player Interesting... Now scram. It's time to play detective.
				landlord Aw man, I love mysteries...
				t ...
				t Searching around the house you find precisely nothing of interest, mostly. The kitchen is as bog-standard as it gets, the bathroom's cleaner than yours, the landlord's room is so clean it's basically empty. Speaking of...
				player Separate rooms, huh? He's sleeping in a pop-up cot too... Alright wifeF, what's in your roo-
				t You walk face-first into a solid wall of the smell of sex, with no immediate source. It <i>seems</i> clean. The bed smells sweet, an obvious potential source, but no dice; the sheets smell fresher than the air somehow, they're recently washed and so worn it seems like they're cleaned daily. The bookshelf is lined with marital help stuff, but it's all dusty.
				t There's a computer open, it's an older model.
				player Hmm, no password and history isn't deleted. I wonder-
				t It's porn. Lots of porn. Gooner mixtapes, sissy hypnosis, lots and lots of cheating...
				player ... Huh. It really ramps up too. Looking at the timelogs, she must spend around six hours a day at least...
				t Checking the drawers you find toys, all neatly organized, onaholes and dildos. Again, somehow not the cause of the smell, which is actually starting to affect you.
				t Finally, you find the source. A single bottle, just a few ounces, laying at the side of the nightstand. Just about empty, but...
				player Shit, this stuff... What...<br>"She-cream"? 
				player ?flag fitboi cream; How the hell did she get some of this? There's no way we got it from the same place... Plus the bottle's design is different from mine...
				player !flag fitboi cream; Strange, if there were a lotion that smelled like this sold at stores, I would <i>absolutely</i> know about it...
				t There's not even a drop left, just a thin coating on the bottle's inside. Still, you pocket it. A good detective, something something clues.
				player Nothing more in here, at least this gives me some answers.<br>... And a lot more questions. Man, I didn't sign up for mysteries, I came to this town to bang...
				finish
			`);
			addFlag("wife", name);
			raiseTrust("wife", 1);
			passTime();
			break;
		}
		case "tranceQuo": {
			writeHTML(`
				wife Oh my, hello again~
				player Hey, no more games. I wanna try something.
				wife Mmm, my husband's away, so I'm absolutely available for some experimentation... !flag wife tranceCode; !flag trancePendant;
				player Hypnosis. !flag wife tranceCode; !flag trancePendant;
				wife ... Hm? !flag wife tranceCode; !flag trancePendant;
				player I want to- !flag wife tranceCode; !flag trancePendant;
				wife Yes! Yes, absolutely! Oh, I've seen so many... Oh, yes, let's get started, I'm so excited! !flag wife tranceCode; !flag trancePendant;
				player Eh... That might make it harder, actually. !flag wife tranceCode; !flag trancePendant;
				wife Even better~ !flag wife tranceCode; !flag trancePendant;
				player ... Whatever.<br><i>Alright, she's definitely under someone's control, probably. If I can find the trigger I can put her in a trance easily...</i>
				trans tranceCode; !flag wife tranceCode; Try finding a codeword or trigger phrase
				trans trancePendant; !flag wife trancePendant; Try using your pendant
				trans tranceOil; Try using the lotion bottle
			`);
			break;
		}
		case "tranceCode": {
			addFlag("wife", name);
			writeHTML(`
				player Alright, just sit back and relax.
				wife Ooh, we're off to a good start already~
				t ...
				t A while later, and no results.
				wife Hmhm~ I think it might be working~
				player <i>No good, she's so completely porn-addled that even if these were the triggers, she's desensitised to them. Which means it wasn't verbal, or the codeword's not something I can stumble into.</i> 
				t You sigh.
				player I'll have to try something else. I'll be back.
				wife Aww... Well, next time it'll work for sure!
				finish
			`);
			passTime()
			break;
		}
		case "trancePendant": {
			addFlag("wife", name);
			writeHTML(`
				player Alright, just sit back and relax.
				wife Ooh, we're off to a good start already~
				t ...
				t A while later, and no results.
				wife Hmhm~ Swing, swing, I'm definitely under already~
				player <i>No good, she can't focus on the pendant, and she's way too excited to go under. I don't think whoever put her in a trance first was using a pendant...</i>
				t You sigh.
				player I'll have to try something else. I'll be back.
				wife Aww... Well, next time it'll work for sure!
				finish
			`);
			passTime()
			break;
		}
		case "tranceOil": {
			writeHTML(`
				player Alright, just sit back and relax.
				wife Ooh, I can tell this will be fun~
				player Right right right, just try not to control yourself. Close your eyes, now take a whiff of this.
				t She obeys as you wave the lotion bottle under her nose.
				player Alright, now take a deep... wifeF?
				wife ...
				t She doesn't respond, her eyes flutter and her pupils are rolled back, she leans back down and seems docile.
				player <i>So, they trained her to go under to the scent of the lotion... Wait, actually...<br></i>Who do you obey?
				wife Oh... I'll do whatever you want...
				player Who am I?
				wife playerF...
				player ... Huh. I don't think you were hypnotized on purpose... 
				wife I'm nuh... Not under a trance... We don't use hypnosis here... Just friendly suggestions...
				player And those suggestions are?
				wife We... Good girls show up on time... Good girls don't tell anyone about the treatment... Good girls watch porn between appointments... Good girls only get to cum if they stay soft until the lotion is applied...
				player And who is the one applying the lotion?
				wife Good girls don't tell-
				player Tell anyone about the treatments, right.
				wife Been waiting... For so long... Come back...
				player Well, it wasn't a direct answer, but at least I have some information. Somebody hypnotised her, but only to keep some kind of special massage treatment under wraps. It might have even been an accident and they're currently out of town.<br>Alright, when I snap my fingers, you'll wake, yeah?
				t *SNAP*!
				wife Waiting... So...
				player ... Hah...<br>I guess they didn't set a wake trigger, and you're used to strong stimulation while under a trance. Guess we're...
				trans wifeSex; Doing things the hard way
			`);
			break;
		}
		case "fetishQuo": {
			writeHTML(`
				
			`);
			break;
		}
		case "massageReturn": {
			writeHTML(`
				
			`);
			break;
		}
		case "wifeFrotting": {
			writeEvent(name);
			passTime();
			setTrust("wife", 2);
			writeHTML(`finish`);
			break;
		}
		case "wifeHandjob": {
			writeEvent(name);
			passTime();
			addFlag("wife", name);
			raiseTrust("wife", 1);
			writeHTML(`finish`);
			break;
		}
		case "wifeSex": {
			writeEvent(name);
			passTime();
			removeFlag("wife", "tranceCode")
			removeFlag("wife", "trancePendant")
			removeFlag("wife", "detectiveHouse")
			removeFlag("wife", "detectiveLandlord")
			removeFlag("wife", "wifeHandjob")
			raiseTrust("wife", 1);
			writeHTML(`finish`);
			break;
		}
		case "wifeRimGiving": {
			if (checkTrust("wife") == 6) {
				raiseTrust("wife", 1);
			}
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "wifeRimRecieving": {
			if (checkTrust("wife") == 6) {
				raiseTrust("wife", 1);
			}
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "wifeRiskyHandy": {
			if (checkTrust("wife") == 7) {
				raiseTrust("wife", 1);
			}
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "wifeRiskySex": {
			if (checkTrust("wife") == 7) {
				raiseTrust("wife", 1);
			}
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "placeholder", name: "Event Name"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "wifeFrotting": {
			writeHTML(`
				im 017.jpg
				wife Hah~! I can't hold back anymore, I'm really sorry *mister playerF, I know I'm supposed to be a good girl but I <i>really</i> can't wait anymore.
				player I can see that! 
				im 018.jpg
				wife Mmm... Ah, I'm packing by the way, I hope that isn't a dealbreaker. I prefer recieving anyways, so It shouldn't get in the way...
				player I noticed. It's not an issue, b-
				im 019.jpg
				wife Ooouh~! That's lovely to hear~! I m-might not last long though!
				player <i>Okay... Focus playerF... What's going on here? Cmon brain...</i>
				im 020.jpg
				player <i>... Too hard, brain off.</i><br>Fine, problem solve now, strategize later. Let's calm you down.
				wife Hmmm, what's wr-
				im 022.jpg 
				wife Kya~! My breast!
				t The ravenous horndog on top of you seems relieved that you're finally playing ball. As you suckle her tit she grinds her silk-covered shaft along your length. Curiously...
				player <i>... Soft?</i>
				wife Yes~! Treat my tits like fuckmeat~!
				player <i>And her skin... Her sweat tastes... Sweet?</i>
				wife Hah~! N-no, I can't-
				player <i>Oh boy, better dodge...</i>
				im 023.jpg
				wife Fffffuck~! Hah, I'm leaking so hard~! 
				im 024.jpg
				wife Oh... S-sorry, this load would be so much better on me...
				player It's fine. Calmed down yet?<br><i>I wonder how long I'll have to go at her before she's relaxed enough for hypnosis?</i>
				wife I think so... I-
				im 025.jpg
				wife -REALLYSHOULDNOTHAVEDONETHAT!<br>playerF! I'm so sorry!<br>Oh no, oh no, oh no-!
				player And we're back to square one. Could you get off already?
				t ...
				im 027.jpg
				wife Oh... I've really done it this time...
				player It's fine.<br><i>What the hell, she's totally flipped. Can I even blackmail her with this?</i>
				im 029.jpg
				wife I really screwed this one up... Hey...
				t She takes a step forwards like she's trying to stake a claim on your personal space.
				im 030.jpg
				wife You won't tell my husband, right? Right?
				player I won't-
				im 031.jpg
				wife That's a relief! He really trusts you... For some reason. This really is just an unfortunate situation. Plus, we didn't <i>really</i> fuck, so-
				player Okay, what is your deal?! Why are you-
				wife Ah~! Don't be too rough with me, or-<br>Oh! The time! He'll be getting back soon, quick, out the back! A-and... You smell, by the way... Sorry...
				t Unable to wrap your head around what's going on, you channel your inner professional to try and manage this chaos.
				t ... And you book it out the back.
			`);
			break;
		}
		case "wifeHandjob": {
			writeHTML(`
				im 033.jpg
				wife Hah~ I feel so spoiled... Is it my birthday? It sure feels like it...
				player Gh... Focus... Lotion...
				wife Hm?
				im 034.jpg
				wife Oh, it's a special lotion just from this massage parlor. See, my husband started acting different... Disinterested...
				im 035.jpg
				player Khh~!
				wife And I thought, "oh, it must be me!" I was <i>so</i> worried! Really, it seems so long ago now. I tried a lot of things, books, finding advice, and my oh my, I watched a <i>lot</i> of porn.
				t Her hand glides up and down your shaft, seemingly no need to lube, even when she rubs her palm along the glands.
				wife I think I stopped really wanting our old relationship back. I became just a little bit addicted... Hehe...
				im 036.jpg
				wife Ara ara~! Who's distracted now? 
				player Ghhh~! I'm~! Listening~! Keep going!
				im 037.jpg
				wife Hmmph. Well, the massage parlor was kind of a last resort. It turns out it was also a sexual wellness clinic. I signed up for more than a few different kinds of courses, but how could I not? The massuese was so cute... I didn't think there'd be so many side effects.
				player Gonna... Can't...!
				wife I love what they did with my pores. I was really self-concious about how much I sweat, but I guess they changed that? Now I only really sweat when masturbating, and it smells really sweet. I can actually use it as a lube, and when I do-
				im 038.jpg
				wife Mmmm~!<br>Just like that! Spurt spurt spurt~! Oh, but not by jerking off. 
				im 039.jpg
				wife So thick... Mine is too, but one of the treatments... I got so large, much bigger than before. I was all ready to peg my hubby into a mess and wake him out of his funk, but another side effect is that I don't get hard anymore. And... And...
				im 040.jpg
				wife Mmm~<br>God, you're delicious... And besides, the masseuse told me he was no good anyways... There were a lot of fancy words, but I watch so much porn lately I knew what he was...
				im 041.jpg
				player Khh~! Sensitive~!
				wife He's a "one-pump-chump"! A prejac, and he doesn't even have the ass to make up for it~! But you're different, right? I <i>really</i> need you to be, I haven't been able to in for a session in weeks and I'm all out of the special stuff...<br>A horny little fuckslut needs her fix~
				player Ffff...
				t All you can do is lean back, this is no normal handjob. It feels like you edged for hours and are gliding along a continuous orgasm. An inexperienced horny housewife shouldn't have this kind of a technique...
				t ...
				im 031.jpg
				wife I really can't thank you enough.
				player ...
				wife Please, come back anytime. I'm not sure where my husband went, but I'm sure he won't be an issue.
				player Sure... Hoh...
				wife Take care on your way home~! Well, it's just up the stairs. You know, I could come up with you, and maybe we could-
				t You close the door behind you and take a deep breath of fresh air.
				player ... Have I lost my touch?<br>No, it's that woman who's completely cracked. Tomorrow I'll find some real answers...<br>Oh god... Stairs...
			`);
			break;
		}
		case "wifeSex": {
			writeHTML(`
				im 100.jpg
				im 101.jpg
				im 102.jpg
				im 103.jpg
				im 104.jpg
				im 105.jpg
				im 106.jpg
				im 107.jpg
				im 108.jpg
				im 109.jpg
				im 110.jpg
			`);
			break;
		}
		case "wifeRimGiving": {
			writeHTML(`
				
			`);
			break;
		}
		case "wifeRimRecieving": {
			writeHTML(`
				
			`);
			break;
		}
		case "wifeRiskyHandy": {
			writeHTML(`
				
			`);
			break;
		}
		case "wifeRiskySex": {
			writeHTML(`
				
			`);
			break;
		}
		case "wifeFetishBypass": {
			writeHTML(`
				
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
	{index: "reward", requirements: "?trust wife 8;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/wife/profileP.jpg", "Art by Silver Radish");
			writePhoneSpeech("wife", "", "You've finished all of wifeF's current content, sorry for the cliffhanger! The story shall continue soon!");
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
console.log(character.index+'.js loaded correctly. request type is '+requestType)

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