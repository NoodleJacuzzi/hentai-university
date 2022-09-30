var character = {index: "miko", fName: "Himari", lName: "Sato", trust: 0, encountered: false, textEvent: "", met: false, color: "#E27546", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false,};

var logbook = {
	index: "miko", 
	desc: "A single mother and head of a local bathing spot and inn. Seemingly doesn't have an impure bone in her body (yet).",
	body: "She's practically a walking fertility goddess, more than capable of turning heads.",
	clothes: "She's usually wearing some pretty well-covering outfit, the inn would probably see a lot more customers if she wore something more scandalous.",
	home: "In all likelihood she lives at her inn along with her daughter.",
	tags: "Incest (mother+daughter), corruption, anal, ass-to-mouth.",
	artist: "Oreteki18kin<br>Original Image Set: Nakayoshi Chinpo Share",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "meeting2", name: "Head back into the inn for purification", requirements: "?trust miko 1; ?location parkDistrict;", altName: "", altImage: "",},
	{index: "meeting2", name: "Head back into the inn for purification", requirements: "?trust miko 3; ?location parkDistrict;", altName: "", altImage: "",},
	{index: "meeting3", name: "Head back into the inn for purification", requirements: "?trust miko 80; ?location parkDistrict;", altName: "", altImage: "",},
	{index: "meeting4", name: "Head back into the inn for purification", requirements: "?trust miko 81; ?location parkDistrict;", altName: "", altImage: "",},
	{index: "corruptedQuo", name: "Head back into the inn", requirements: "?trust miko 82; ?location parkDistrict;", altName: "", altImage: "",},
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
		case "purified": {
			var finalScene = "badPurify";
			if (checkTrust("tomgirl") > 99 && checkFlag("tomgirl", "puritySaved") == false) {
				finalScene = "tomgirlPurify";
			}
			if (checkTrust("succubus") > 70 && checkFlag("succubus", "puritySaved") == false) {
				finalScene = "succubusPurify";
			}
			if (checkTrust("starlet") > 70 && checkFlag("starlet", "puritySaved") == false) {
				finalScene = "starletPurify";
			}
			if (checkTrust("president") > 90 && checkFlag("president", "puritySaved") == false) {
				finalScene = "presidentPurify";
			}
			if (checkTrust("incubus") > 3 && checkFlag("incubus", "puritySaved") == false) {
				finalScene = "incubusPurify";
			}
			writeEncounter(finalScene);
			break;
		}
		case "badPurify": {
			writeHTML(`
				t As you leave, you take a deep breath. Inside you feel...
				t Empty.
				t ...
				t Without the corruption that once guided you everything that once brought you joy now seems... Hollow.
				t Now, all that brings you satisfaction are... Much more tame. Gardening, cleaning, socializing without an ulterior motive. Up until now it feels like you've lived a truly empty life. 
				player ... Well, I guess I'll shave my head and become a monk.
				t <b>GAME OVER</b>
			`);
			break;
		}
		case "tomgirlPurify": {
			writeHTML(`
				t As you make your way home, you take a deep breath. Inside you feel...
				t Empty.
				t There isn't an ounce of lust left inside you, you've been completely purified!
				t ...
				tomgirl ... What?
				player Yeah, I no longer harbor sexual desire.
				tomgirl You're joking right?
				player I think I'm incapable of humor as well.<br>Wait, I think I find dad jokes amusing. Maybe...
				tomgirl No! No way, no way in hell! You don't get to seduce me,<i> steal</i> my maiden's heart and my maidenhood, and think you just get to to become a monk somewhere!
				player But, I-
				tomgirl No!
				im images/tomgirl/new2-1.jpg
				tomgirl Look at this, this is the boypussy <i>you</i> made! This perfect ass is <b>yours</b>!
				player That won't work, I don't have any... Any...
				tomgirl Think about how amazing this perfect bitch-hole would feel around every inch of your cock! Think about it!
				player I... I d-don't... I can't... Help... But...!
				im images/tomgirl/new2-2.jpg
				tomgirl Yes! Remember who you are, and what we have together~!
				player So... Tight!
				im images/tomgirl/new2-3.jpg
				player Ghh~!
				tomgirl Cumming~!
				im images/tomgirl/new2-4.jpg
				t *splurt*
				tomgirl Ghouu...
				player Y-your underwear... I...
				tomgirl Don't worry about it~<br>How do you feel now?
				player I feel... Better! I feel like I could go for round two, even!
				tomgirl Fuck yeah, stud... Welcome back~
				t Through the bonds you've formed, you've escaped a truly empty life. Once again thoughts of carnal sex dominate your mind and motivation, and all is as it should be. 
				finish
			`);
			addFlag("tomgirl", "puritySaved");
			setSkill("corruption", 3);
			break;
		}
		case "succubusPurify": {
			writeHTML(`
				t As you make your way home, you take a deep breath. Inside you feel...
				t Empty.
				t There isn't an ounce of lust left inside you, you've been completely purified!
				t ...
				player And so now I'm totally cleaned out, not a drop of corruption left in me.
				succubus Right, I can see that.
				player You seem awfully calm about this.
				succubus Hey, you do you, bud. If you wanna go cold turkey, that's up to you. No worries.
				player Wow, you're handling this really well.
				succubus Yeah. It's mostly because without your corrupted soul, you'll fold in a second once I give you a command.
				player Huh?
				succubus Now, <span style="color:pink;"> sit down, and don't move a muscle. Let little succubusF fix you right up.</span>
				t ...
				im images/succubus/3-1.jpg
				player Ggh~! Please, succubusF, I can't possibly-
				im images/succubus/3-2.jpg
				player Aaah~! C-cumming~!
				im images/succubus/3-3.jpg
				succubus ... Better. I think that makes fourty-two. That milk is really doing wonders for you, huh? Talk about a detox.
				player Nnnh...
				succubus You know how much of your body is water? It's pretty weird. Tonight, we make sure you're mostly comprised of demon liquor. Got it?
				player ...
				succubus Fainted? No that won't do. <span style="color:pink;">Wake up and cum again.</span>
				player Nnnngh~!
				succubus You ever pull this shit again, well, you won't survive something like this a second time.
				t Through the bonds you've formed, you've escaped a truly empty life. Once again thoughts of carnal sex dominate your mind and motivation, and all is as it should be. 
				finish
			`);
			addFlag("succubus", "puritySaved");
			setSkill("corruption", 3);
			break;
		}
		case "starletPurify": {
			writeHTML(`
				t As you make your way home, you take a deep breath. Inside you feel...
				t Empty.
				t There isn't an ounce of lust left inside you, you've been completely purified!
				t ...
				starlet ... Run that by me again.
				player The inner darkness within me has been cleaned, I no longer feel sexual urges.
				starlet ... Moooooom!
				pornstar Relax dear, I've seen this happen before. Once I kept your father in chastity for over a year, he had a similar realization.
				starlet How did you fix him?
				pornstar The exact methods were a but different, but don't worry. Mommy always has a plan. 
				player Huh? Why are you two stripping? I told you, I-
				starlet Oh, you're going for a double patty-stack! Of course! Hey, I call bottom!
				im images/starlet/B2 (1).jpg
				starlet Cmon, take a good, long look at my mom's fuckable ass, and at this pair of perfect, pristine pussies!
				player I... I...
				t ...
				im images/starlet/B2 (6).jpg
				pornstar Ouuugh...
				starlet So... Full...
				player I can see clearly again... Thank you, both of you.
				t Through the bonds you've formed, you've escaped a truly empty life. Once again thoughts of carnal sex dominate your mind and motivation, and all is as it should be. 
				finish
			`);
			addFlag("starlet", "puritySaved");
			setSkill("corruption", 3);
			break;
		}
		case "incubusPurify": {
			writeHTML(`
				t As you make your way home, you take a deep breath. Inside you feel...
				t Empty.
				t There isn't an ounce of lust left inside you, you've been completely purified!
				t ...
				incubus ... Right. So you got yourself cleaned out, and not in the fun way.
				player Not a drop of corruption left in me. I was thinking about leaving town actually, maybe taking up life as a monk.
				incubus Uhuh. So I guess you don't need that wallet anymore, huh?
				player Well... I guess not. I guess greed has left my body too. Here, you can have it.
				incubus ... Hah~<br>I swear, if you weren't so delicious, you'd be dead meat right now. Strip.
				player Sorry, I'm not interested anym-
				incubus <span style="color:pink;">Strip.</span.
				t ...
				im images/incubus/creampie1.jpg
				player GHH~!
				incubus Can't... Get a word out... Huh?
				im images/incubus/creampie2.jpg
				incubus FFff~! Stop... Hitting that spot~! 
				t ...
				im images/incubus/creampie5.jpg
				incubus Ouuugh...
				player I can see clearly again... Thank you, incubusF. Hey, could I have my wallet back?
				incubus Fffuck... No...
				t Through the bonds you've formed, you've escaped a truly empty life. Once again thoughts of carnal sex dominate your mind and motivation, and all is as it should be. 
				t ... Aside from your lack of cash.
				finish
			`);
			addFlag("incubus", "puritySaved");
			setSkill("corruption", 3);
			data.player.money = 0;
			break;
		}
		case "presidentPurify": {
			writeHTML(`
				t As you make your way home, you take a deep breath. Inside you feel...
				t Empty.
				t There isn't an ounce of lust left inside you, you've been completely purified!
				t ...
				player Where are you taking me?
				president You said your sexual desire was gone, right? Nothing better for a lost libido than some fine art.
				player I don't-
				im images/president/painting.jpg
				president Don't you dare look away, got it?
				player But I... I don't think-
				president That's right, you don't think. Not while you're looking, not while you're listening. Head empty, good feelings. Relax...
				t ...
				player Nggh... What happened? I think I blacked-
				im images/president/artRoom3.jpg
				player Whoa...
				t You don't really know what went down when you fell into a trance, but seeing presidentF's body like this is making you feel... Things.
				t Through the bonds you've formed, you've escaped a truly empty life. Once again thoughts of carnal sex dominate your mind and motivation, and all is as it should be.
				finish
			`);
			addFlag("president", "puritySaved");
			setSkill("corruption", 3);
			break;
		}
		case "purify1": {
			writeHTML(`
				player Sure, I guess I've got the time.
				miko Wonderful. itakoF, could you-?
				itako Right away! Alright, this way. We don't have a bedroom free, so you can wait in the changing room of the open air baths. It's on the left, then you make...
				t ...
				t And that's how you ended up standing in the changing room right next to a steaming-hot bath. It's... Really big.
				t The place does seem really clean, and not just in a physical sense. It almost feels like a grime is coming off of you, loosening, and-
				itako We're coming in~!
				miko itakoF, please. *He could've... Oh nevermind.<br>Greetings again, dear customer.
				im 091.jpg
				miko Sorry for the wait.
				itako Oh, it seems like it's already working! All that icky corruption is... Or wait, maybe that's sweat...
				miko Regardless, please relax.
				t ...
				miko And... Breathe...
				t You let out a breath you didn't realize you'd been holding, and out flows... Something. Something that pools onto the ground halfway between fluid and smoke, although mikoF and itakoF don't pay it any mind. It seeps across the ground, pooling in low points, eventually flowing out of the room and towards the baths like a growing puddle of ghost-juice.
				t Your body feels lighter, your thoughts a lot more clear. 
				miko Wonderful, I can already tell it's had an effect.
				player Aren't you worried about all... This?
				t You gesture around yourself, the air is thick with whatever this strange fog is.
				miko Hm? Are you seeing things? Perhaps the heat has gotten to you?
				itako I think I can kind of get what *he's talking about. It's almost like it's not fading away, but hanging in the air, mixing with the water.
				miko Darling, that's not how corruption works. Evil comes alight under the purity of the sun, and despair fades away in the presence of a kind heart.
				itako Right, I know. But what if it isn't evil or despair? Maybe we should keep going.
				miko You know I support your talent, but to progress further is dangerous for both *him and us. To purge evil leaves a hole in the heart. playerF, I hope to see you again tomorrow.
				t mikoF waves you off, although itakoF looks conflicted as you go.
				t As you leave, you can hear them continue to talk.
				miko ... Besides, what could cloud *his heart besides evil or despair? It's not malice either.
				itako Well... It could be...
				miko Hmm?
				itako It's nothing...
				miko Not to worry, I'll put up some wards against vengeful spirits just in case as well.
				t ...
				t As you walk along, you pass by a jogging woman in tight pants, but as she passes by you forget to spare a glance at her rear.
				player ... Wait, shit...
				t You turn around once you realize it, but she's long gone. You missed your chance, but you don't feel to bad about it for some reason. It seems some of your lustful urges really have been purged from you, and have been left behind in the bathhouse's waters.
			`);
			setTrust("miko", 1);
			raiseTrust("itako", 1);
			passTime();
			if (checkSkill("corruption") == 0 && checkFlag("mom", "corruptionExplained") == false) {
				setSkill("corruption", 3);
				addFlag("mom", "corruptionExplained");
				writeSpecial("Your corruption score has changed! Starting at 5, this stat changes when you do lewd things with particularly corrupt or pure individuals.");
			}
			else {
				addSkill("corruption", -3);
			}
			if (checkSkill("corruption") <1) {
				writeFunction("writeEncounter('purified')", "Finish");
			}
			else {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "meeting2": {
			writeHTML(`
				itako Welcome back *mister customer! Here for another cleanse? It's our speciality!<br>Oh, that's good actually, I should write that down... 'Two types of cleanse'...
				t Somehow, she seems more casual with you, and her demeanor is less refined than last time.
				t Well, she doesn't seem to notice. Will you ask for another cleansing?
			`);
			writeFunction("writeEncounter('purify2')", "Accept");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "purify2": {
			writeHTML(`
				t The two of you head into the back rooms, where you find mikoF kneeling in a room with a half-dozen scented candles.
				miko Hmm...
				itako Psst! Mom! *He's back!
				miko Hmm~? Ah! Good to see you again, I'm glad you recognized the importance of our time together. You came back for another session of purification, yes?
				player Sure. We doing it in here?
				miko Y-...
				t She's about to answer, but then stops, looking conflicted.
				miko No. Let's head for the baths again.
				itako Eh? The baths? But... Well, if that's what your instincts say.
				t ...
				t The three of you head back to the waiting area of the bathing room, where the purification session begins again. The air here is still thick, and while it's a lot thinner than before you get the impression that it hasn't been going down the drain.
				player Has anyone here been acting differently? Guests, I mean.
				itako Whoa! Yeah! We've only had a few, but some guys started acting really weird!<br>Hey, they say some people awaken to their power after ritual purification, maybe you-
				miko Let's not get ahead of ourselves. I need to focus, darling.
				itako Right!
				t The ritual continues like it did last time, almost identical, except...
				itako Mom, aren't you a lot closer?
				miko Eep! Err, yes, it's...
				itako I don't remember that technique...
				miko Sorry, it just came to me, suddenly. It just felt natural.
				itako Whoa, divine inspiration? 
				miko Perhaps... We should stick to the proper routine, at least for this time.
				t ...
				itako Another successful cleanse! Exorcism is about going with the flow! If it feels right...
				miko Then it is right. Very good, but for now we should appreciate everything went smoothly.
				t Another pulse courses through your body, gathering it all up in your core, before it's pushed out of you. Somehow your soul itself feels sore, like mikoF is rubbing at a spiritual muscle knot. 
				t The air becomes yet murkier, even darker than it was after your last session. It actually makes you feel bad, like you're tossing a bunch of used cigarettes into the pools and neither of them seem to notice.
				t Well, mostly. itakoF sniffs the air curiously, but doesn't say anything.
				t ...
				t mikoF waves you off, although itakoF looks conflicted as you go.
				t As you leave, you can hear them continue to talk.
				itako ... I promise, I really am seeing something! It isn't the usual rage or despair, our wards might not be working!
				miko Alright dear, I trust you, I do. Maybe it's something we lack ourselves, so don't notice it. Hmm...
				itako Do you think it'd be dangerous to continue?
				miko Our spiritual technique has withstood evils far stronger than this before. I'm sure we'll be fine. Now, how about another soak before meditation?
				itako It did feel really nice last time... Like the water was different somehow.
				miko That's just the feeling of unwinding after a hard day, dear.
				t ...
				t As you walk along, you stumble on a small, upraised bit of sidewalk.
				player Gah! Gosh dang, heck, and...<br>What the fri-uuuck?
				t A momentary slip, but your reaction startles you more. Some of your more colorful vocabulary seems... Distant. Perhaps some of your fouler language has been left behind in the bathhouse? The idea is crazy, and yet...
			`);
			setTrust("miko", 80);
			addSkill("corruption", -3);
			passTime();
			if (checkSkill("corruption") <1) {
				writeFunction("writeEncounter('purified')", "Finish");
			}
			else {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "meeting3": {
			writeHTML(`
				itako Whoa, hey! Welcome back *sir! We're actually closed today.
				player Huh. I didn't see a sign.
				itako Oh, I guess I forgot... Hehe, my bad~<br>I think I spent too long in the baths last night, maybe the heat's gotten to me. Well, since you're already here I could go get my mom.
			`);
			writeFunction("writeEncounter('purify3')", "Accept");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "purify3": {
			writeHTML(`
				t The two of you head towards the back rooms.
				itako It really is getting hot these days... I wish I didn't have to wear underwear while running errands.
				player Excuse me?
				itako Uh, underwear? You know, the stuff you wear sometimes beneath your clothes?<br>Oh, mom, hey!
				miko Oh! Welcome back. Aren't we closed today?
				itako I forgot! Ehehe...
				miko Silly... Well, since playerF is already here I suppose there's no harm in another session.
				itako Huh. Now that I think about it, I feel like... Like we wanted to take a break for some reason.
				miko Well, if it comes back to you, let me know. Please wait in the bath, *sir. We'll be right in after you.
			`);
			writeFunction("writeEncounter('miko-itakoRitual3')", "Head inside");
			break;
		}
		case "miko-itakoRitual3": {
			writeEvent(name);
			passTime();
			setTrust("miko", 81);
			addSkill("corruption", -3);
			if (checkSkill("corruption") <1) {
				writeFunction("writeEncounter('purified')", "Finish");
			}
			else {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "meeting4": {
			writeHTML(`
				itako Whoa, okay, I know I remembered the sign this time!
				player Nope, door's wide open.
				itako Aw geez. I guess that's why people keep coming in... To be honest mom hasn't been feeling like her usual self, and our usual guests have been complaining about something or another lately... Geez, we're a little slow in serving food and people just whine and whine and whine...
				t She reclines, putting her feet up on the desk, uncaring about how she looks.
				itako ... Oh! Sorry, got distracted there. You'd never complain about how we do things here. Hey, I know mom finished pumping the corruption out of you, but do you wanna pop on back?
				player Strange choice of words, but not inaccurate...
			`);
			writeFunction("writeEncounter('purify4')", "Accept");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "purify4": {
			writeEvent("miko-itakoRitual4");
			setTrust("miko", 82);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "corruptedQuo": {
			if (checkFlag("miko", "brothel") != true) {
				writeHTML(`
					itako Doot dee doot~<br>No business 'cause people are stingy~<br>Doot dee doot~<br>Oh! Heya playerF!
					player You guys actually open today?
					miko Hello playerF. Yes, we are, but to be honest, business hasn't been amazing lately...
					itako But that's just because we've been closing early to purify you! Take some responsibility!
					miko Well, it isn't your fault. If you could, though, I'd appreciate it if you could bring in a little extra business.
					itako Spread the word! No charge. Negative charge, actually! If you bring people here and show them a good time we could split the profit!
					miko Oh, but for now~
					itako Hehe, yeah, for now~
				`);
				addFlag("miko", "brothel");
				writeDual("miko", "", "itako", "", "Let's have a bath!");
			}
			else {
				writeHTML(`
					itako Welcome back to the itakoL Inn & Baths! Did you come for us?
					miko Or did you bring a guest? Either way...
				`);
				writeDual("miko", "", "itako", "", "We recommend a nice, long soak!");
				writeHTML(`
					t You've completed mikoF and itakoF's available content!
					t In the future you'll be able to bring other girls to the bathhouse for scenes and cash, but that didn't make it into v19, sorry! 
				`);
			}
			openWardrobe();
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "miko-itakoTogether1": {
			addFlag("miko", "together1");
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "miko-itakoTogether2": {
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mikoSolo1": {
			addFlag("miko", "mSolo1");
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mikoSolo2": {
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "itakoSolo1": {
			addFlag("miko", "iSolo1");
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "itakoSolo2": {
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

function writeWardrobeOption(wardrobeImage) {
	if (wardrobeImage.includes("Locked")==false) {
		document.getElementById('wardrobeGrid').innerHTML += `
			<img class="bigPicture" id="`+wardrobeImage+`" src="images/miko/`+wardrobeImage+`.jpg" 
			onclick="writeEncounter('`+wardrobeImage+`')",
			onmouseover="wardrobeMouseOver('`+wardrobeImage+`')"
			onmouseout="wardrobeMouseOut('`+wardrobeImage+`')"
			style="filter:brightness(50%);">
		`;
	}
	else {
		document.getElementById('wardrobeGrid').innerHTML += `
			<img class="bigPicture" id="`+wardrobeImage+`" src="images/miko/unknown.png" title="Tsk tsk, play with the outfits we have before you get greedy for more!"
			onmouseover="wardrobeMouseOver('`+wardrobeImage+`')"
			onmouseout="wardrobeMouseOut('`+wardrobeImage+`')"
			style="filter:brightness(50%);">
		`;
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

function openWardrobe() {
	document.getElementById('output').innerHTML += `
	<div id="wardrobeGrid" style="display:grid; grid-template-columns:auto auto auto;">
	</div>
	`;
	if (checkFlag("miko", "together1") != true) {
		writeWardrobeOption("miko-itakoTogether1");
	}
	else {
		writeWardrobeOption("miko-itakoTogether2");
	}
	if (checkFlag("miko", "mSolo1") != true) {
		writeWardrobeOption("mikoSolo1");
	}
	else {
		writeWardrobeOption("mikoSolo2");
	}
	if (checkFlag("miko", "iSolo1") != true) {
		writeWardrobeOption("itakoSolo1");
	}
	else {
		writeWardrobeOption("itakoSolo2");
	}
}

var eventArray = [
	{index: "miko-itakoRitual3", name: "Corrupted Purification 1"},
	{index: "miko-itakoRitual4", name: "Corrupted Purification 2"},
	{index: "miko-itakoTogether1", name: "Dual Service"},
	{index: "mikoSolo1", name: "Mother's Service"},
	{index: "itakoSolo1", name: "Daughter's Service"},
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
				im 092.jpg
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
				im 095.jpg
				miko Hmm... *His penis is quite the large one. Making it cum will be quite the ordeal...
				itako I c-can do it! Something this size is no trouble at all!
				miko You seem quite nervous. Here, let me...
				im 096.jpg
				miko Glllrk~!
				itako It's so big... The smell would probably make this place smell like sex, even diffused in the bath...
				miko Mmph?
				im 097.jpg
				miko Mwah~! There, all warmed up.
				itako I-it's even bigger than before! A-and it's covered in-
				miko Don't be afraid, darling, just think of it like a kiss from mommy.<br>If you don't think you can handle this, then I-
				itako No... No I can do this. Deep breaths, eye contact, okay...
				im 098.jpg
				itako Mmm...
				miko Don't push yourself too far, darling. I'm sure my part in the ritual has already weakened *him. Isn't that right, *Mister Customer?
				im 100.jpg
				itako Hah~! *He's reached *his limit~!
				miko All that horrid energy within you, let it all ooze out of you!
				itako Pump it out, we can take it!
				im 101.jpg
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
				im 157.jpg
				t The two of them rise from the water, seemingly purposefully exposing their bare asses towards you.
				player So... Just like last time?
				im 094.jpg
				miko No... As I said, today I think we need to go farther. An advanced technique.<br>itakoF, you need to sit this one out, alright?
				itako Advanced technique... Alright mom, go for it! 
				im 141.jpg
				miko Hah~! Time for the next level of exorcism! Today, I'll be draining every drop of darkness inside you with my unbeatable anal exorcism technique!
				itako A-anal? Mom, I don't remember this...
				miko That's because it came to me, here in the bath! Sometimes when I'm relaxing, words, images, all sorts of things float into my mind...
				itako You too? 
				miko N-now, you wouldn't keep me waiting, would you? The baths have quite the effects on this old body, I think you'll find...
				im 142a.jpg
				miko H-hooou~! S-slower, please! My body isn't used to this f-feeeeling~!
				itako Eh? But you got completely soaked so quickly!
				miko M-mommy's what you call a 'squirter', d-darling! But that doesn't mean you can be t-too rough~! A-always be... Nghh~!
				t Inches sink into a hole in a way that can only be described as the deepest of taboos. Sensation tells you this is unlike any virgin hole you've ever defiled, yet...
				miko I'm giving... My anal virginity... In front of my daughter~ 
				im 143.jpg
				miko F-faster now~! That's just the right spot~!
				itako I don't understand...
				miko D-don't worry honey~! Mommy's just exorcising the nice *man's lust, okay? Be a good girl and play with yourself, and let mommy f-focus on the sensation of a young *man's penis...
				t While a creeping sense of shame and panic might figuratively be mounting within her, a man and his fat cock are <i>literally</i> mounting her. There is simply no comparison. 
				itako Is it really that good...?
				miko Hah, it's better than good, this feels fucking amazing! Nggh~!
				im 144.jpg
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
				im 150.jpg
				itako Like this?
				miko Ah, that's right! My daughter, spreading my asshole, it just feels so... Nff~!
				t ... Aside from the obvious, of course.
				player Is that really the kind of language a mom should be using around her daughter?
				itako Don't worry! Being a maiden means letting inspriation flow through you, even if you might embarass yourself. When you feel something welling up in your heart, you need to let it out!
				miko V-very good darling, now pleeease stop distracting the nice young *man from fucking mommy's ass, okay?
				player ... The two of you either need to spend a lot less or a lot more time in these baths.
				im 151a.jpg
				miko Aaaah~!
				itako Aha... Ahaha...
				t itakoF makes a stilted laugh as you penetrate her mother, like her subconcious is panicking, realizing what's going on, but her corruption-addled brain can't figure out what's supposed to be wrong. 
				player Actually, itakoF, wanna help your mom out?
				itako Y-yes!
				player Good girl.
				im 152a.jpg
				itako Gllff-
				t itakoF's life truly has changed in these last few days. In the spam of a few meetings with you she's gone from an inexperienced but devout young girl, to being an oral-lube dispenser for her mom's anal pleasure.
				t ... Well, these years are all about self-discovery anyways, so it all works out.
				im 153a.jpg
				t In just a few motions you've gone ass-to-mouth from mother to daughter. Your dick is coated in saliva, itakoF seems completely dazed, and mikoF is barely able to hold in her anticipation.
				player Nicely done!
				miko Y-yes, good work honey. Mommy-
				im 153b.jpg
				miko OOOOOGH~!
				t Now lubed and ready, this time you penetrate mikoF for real. You aren't sure how much of this corruption hacking away at their earlier personalities, their chastity, is the corrupted waters and how much of it is them being molded by your cock, but it doesn't matter at this point, does it?
				t And you make sure to pull out on the final cumshot too.
				im 154a.jpg
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
				im 150.jpg
				t As always the sight of the pair is truly something to behold. Motherly affection, youthful enthusiasm,mikoF and itakoF really communicate a lot about themselves with how they look at you.
				t Of course, they're also communicating that they're a total anal buttslut and a voyeuristic pervert, so best not to keep them waiting.
				im 152a.jpg
				itako Gllff!
				miko Ooh... You can do it, honey~!
				player You'll keep that mouth of yours nice and ready, right? If I wanted a dry fuck I wouldn't bother with you, so keep this assfucking going nice and smooth with that throat of yours whenever I need it, alright?
				itako Mphh-hmm~!
				im 153a.jpg
				t She gives a light cough after that bit of oral pleasure.
				itako I will, th-thank you, *sir...
				player Good, now...
				im 153b.jpg
				miko Ohhh fuck fuck FUCK~!
				itako Hah~ Mom's lost in the fun again~
				miko Yessss~! This is just what mommy needs in the morning~!
				t And as the three of you settle into your usual rhythm, everything starts to blur together into the usual fuckfest perversion.
				t ...
				im 154a.jpg
				miko Hah... Nothing beats an anal creampie~
				player Now then, clean me off like a good little whore, yeah?
				itako Yes *sir~!
			`);
			break;
		}
		case "mikoSolo1": {
			writeHTML(`
				im 141.jpg
				player Here we are again, honestly... Do you not have an ounce of shame?
				miko Nope!
				itako I think you fucked it out of her, ehe...<br>Come on mom, get *him excited!
				miko Oh my, sorry~<br>Ever since you came here it's all been such a wonderful blur. Something about the air just makes everything feel so right for me and itakoF, like we're floating in a lovely haze...
				itako Yeah! I'm not sure why we didn't do this kind of stuff sooner, it feels so natural!
				miko So please, won't you make tonight feel even more lovely and...<br>Fuck~<br>My~<br>Ass~?
				im 142a.jpg
				miko Aaaah~!
				t She's lost all trace of her previous composure, which makes sense. Few people can shudder in an anal orgasm and still hold on to some trace of dignity, and mikoF is not one of those people.
				itako Geez, mom's got so many pounds of ass-meat, it's almost hypnotic watching them bounce like this...
				t And here's <i>this</i> girl, talking about her mom's booty juggling like she's admiring some amazing weather.
				t Although, she does have a point. Taking in the sight of her bouncing, shaking flesh as you pound her ass really is a sight to see.
				t ...
				im 143.jpg
				t Between the heat and the sensation of mikoF's warm slutty hole everything's a blur.
				player God damn your ass is perfect!
				miko Thank youuuu~!
				t itakoF nods in agreement as she rubs her own crotch. Everything about this moment is just... Right, somehow.
				im 144.jpg
				miko Oooh... Thank you for the load~
				t This is the life~
			`);
			break;
		}
		case "mikoSolo2": {
			writeHTML(`
				im 141.jpg
				player Here we are again, honestly... Do you not have an ounce of shame?
				miko Nope!
				itako I think you fucked it out of her, ehe...<br>Come on mom, get *him excited!
				miko Oh my, sorry~<br>Ever since you came here it's all been such a wonderful blur. Something about the air just makes everything feel so right for me and itakoF, like we're floating in a lovely haze...
				itako Yeah! I'm not sure why we didn't do this kind of stuff sooner, it feels so natural!
				miko So please, won't you make tonight feel even more lovely and...<br>Fuck~<br>My~<br>Ass~?
				im 142a.jpg
				miko Aaaah~!
				t She's lost all trace of her previous composure, which makes sense. Few people can shudder in an anal orgasm and still hold on to some trace of dignity, and mikoF is not one of those people.
				itako Geez, mom's got so many pounds of ass-meat, it's almost hypnotic watching them bounce like this...
				t And here's <i>this</i> girl, talking about her mom's booty juggling like she's admiring some amazing weather.
				t Although, she does have a point. Taking in the sight of her bouncing, shaking flesh as you pound her ass really is a sight to see.
				t ...
				im 143.jpg
				t Between the heat and the sensation of mikoF's warm slutty hole everything's a blur.
				player God damn your ass is perfect!
				miko Thank youuuu~!
				t itakoF nods in agreement as she rubs her own crotch. Everything about this moment is just... Right, somehow.
				im 144.jpg
				miko Oooh... Thank you for the load~
				t This is the life~
			`);
			break;
		}
		case "itakoSolo1": {
			writeHTML(`
				im 166.jpg
				itako So... Embarassing...
				miko Don't worry honey~<br>Mommy's here to support you~
				im 167.jpg
				player Take a good, <i>long</i> look itakoF, the cock your mother is hooked on is about to take your anal virginity.
				itako The dick... Mom's addicted to...
				im 168a.jpg
				itako Oooh~! It's inside, the huge thing is inside me~!
				miko How does it feel?
				itako His huge cock in my ass feels so good~! 
				t She shudders in a small orgasm, both from losing her anal purity and from the shame of her mother's eye on this depraved act.
				miko Oh, I'm feeling a little jealous already~
				im 169a.jpg
				itako Cumming~! My butt is cumming~!
				t An orgasm that dwarfs her earlier one, a true, mind-shakong anal orgasm sweeps over her. The first of many of course, this kind of talent needs to be nutured if itakoF is to grow into a proper buttslut.
				im 170a.jpg
				miko Oh my~! *He's pumped you so full of cum, I'm not sure you'll ever stop leaking... 
				t By now all that's left of her daughter is a fuck-drunk delirious mess, but that doesn't seem to dissuade mikoF at all, rather she's beaming with motherly pride. 
			`);
			break;
		}
		case "itakoSolo2": {
			writeHTML(`
				im 167.jpg
				player So, itakoF, ready for a other round of anal?
				itako ... Ehe... Ehehe...
				miko Oh darling, there's no need to be nervous. I promise it'll be just as sensational as the last time. The thrill of anal sex just doesn't fade away~! 
				im 168a.jpg
				itako Oooh~!
				miko Oh, what a sight... It feels so nostalgic, like it was just yesterday you took my baby's first time in the ass...
				itako Mom... Ghh, don't embarass me so much...
				miko Nonsense, half the fun of anal sex is feeling embarassed down to your core!
				itako Ngh... That's... I'm-!
				im 169a.jpg
				itako Ngghh~! I'm cumming from my ass again~!
				miko Good girl, just relax and let go~!
				im 170a.jpg
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
	{index: "reward", requirements: "?flag miko brothel;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/miko/reward.jpg", "Art by Silver Radish");
			writePhoneSpeech("miko", "", "You've finished all content currently available to mikoF and itakoF! Stay tuned for more, the opening of the itakoL Brothel!");
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