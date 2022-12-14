var character = {index: "succubus", fName: "Gou", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#BF76DF", author: "NoodleJacuzzi", artist: "Gujira"};

var logbook = {
	index: "succubus", 
	desc: "A succubus (male), the lowest rank of demons aside from imps. He's been trying to seduce humans to increase his rank.",
	body: "While disguised he looks entirely human, albeit incredibly feminine for a boy.",
	clothes: "One of his hobbies is collecting girl's clothes. He claims it's purely for seduction purposes.",
	home: "He comes over to your place every night, but you don't know if he actually needs to sleep.",
	tags: "Corruption, anal, tomgirl, trap, cosplay, prostitution, demon",
	artist: "Gujira<br>Original Image Set: Kimeseku ni Maketa Shounen & Succubus♂ o Zetsurin de Toriko ni suru!!",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "introOffer", name: "Someone is leaning on the wall, they look like they're waiting for someone.", location: 'street', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "windowProposal", name: "Someone in cosplay is sitting in your windowsill", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 1, trustMax: 1, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "demon.jpg",},
	{index: "caseSelect", name: "succubus is here again", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 60, trustMax: 76, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "demon.jpg",},
	{index: "date1", name: "succubus is here waiting for you", location: 'shoppingDistrict', time: "MorningEvening", itemReq: "", trustMin: 77, trustMax: 77, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "postQuo", name: "succubus is here again", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 78, trustMax: 99, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "demon.jpg",},
	{index: "succubusHotelBad", name: "Ask about succubus", requirements: "?flag demon hotelBad;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define player = sp player;
		define succubus = sp succubus;
		define tomgirl = sp tomgirl;
		define nagatoro = sp nagatoro;
		define black = sp Black Haired Succubus; im images/demon/dark.jpg;
	`);
	switch (name) {
		case "introOffer": {
			writeText("Normally you'd just walk past someone passing time on their phone, but something about him just seems... Off. Not quite in a bad way.");
			writeText("Just looking at him makes your vision a little blurry, like your head is being filled with pink fuzz. After a second of focus it dissipates though, maybe he's wearing perfume?");
			writeSpeech("player", "", "Hi. Are you waiting for someone?");
			writeBig("images/succubus/profile.jpg", "Art by Gujira");
			writeText("Without looking you in the eye, he glances up from his phone to size up your body.");
			writeSpeech("succubus", "", "You'll do. Name's Gou, don't need yours.<br>Fifty bucks for an hour, you won't need any longer.");
			writeText("He's pretty direct, and it doesn't seem like anyone's watching.");
			writeFunction("writeEncounter('introAcceptance')", "Accept");
			writeFunction("writeEncounter('introRejection')", "Refuse");
			break;
		}
		case "introAcceptance": {
			writeSpeech("player", "", "Sounds fair. I'll probably need more than an hour though.");
			writeSpeech("succubus", "",  "Sure you will buddy, sure you will.");
			writeText("Eyes still locked on his phone, he leads you to a nearby hotel.");
			writeSpeech("player", "", "Not getting the money up front? And you'll just do anyone who asks?");
			writeSpeech("succubus", "",  "I've got my standards and my methods.");
			writeText("The hotel is actually a pretty nice looking place, but the receptionist doesn't even seem to notice as the two of you walk by.");
			writeText("The elevator ride up is pretty slow. He tends to answer your questions with single-word 'yup's.");
			writeSpeech("player", "", "Gotta say, not impressed so far. Not super interested in a boy going starfish under me.");
			writeSpeech("succubus", "",  "Heh. You don't need to worry, you're about to have the time of your life.");
			writeSpeech("player", "", "Sure. You got a name? A real name, I mean.");
			writeSpeech("succubus", "", "... succubusF.");
			writeText("Whoever he really is, he seems pretty keen on keeping this anonymous. Probably for the best, otherwise you'd need to hypnotize him afterwards. His uniform isn't familiar, he probably doesn't go to your university.");
			writeText("He fishes out a keycard and the two of you enter the room, the lighting and decorations are very direct about the room's purpose.");
			writeText("He takes off the outer layer of his clothes and takes a seat, before rolling his neck trying to work out a kink.");
			writeText("All he's wearing is an extremely lewd set of lingerie, but his bratty posture doesn't do a great job of showing off.");
			writeSpeech("succubus", "", "God I'm tired... This is my only catch this week, gotta hit up Vintage Street after this...<br>Dick out, hurry up.");
			writeFunction("writeEncounter('introWhoring')", "Get Undressed");
			break;
		}
		case "introWhoring": {
			setTrust('succubus', 1);
			passTime();
			writeEvent('succubusDisguise1');
			writeFunction("changeLocation('street')", "Leave");
			for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
				if (data.story[trustIndex].index == "succubus") {
					data.story[trustIndex].encountered = false;
					console.log(data.story[trustIndex]);
				}
			}
			break;
		}
		case "introRejection": {
			writeSpeech("player", "", "No thanks, I'm good.");
			writeSpeech("succubus", "",  "Huh.");
			writeText("He seems suprised that you'd disagree. ");
			writeSpeech("succubus", "",  "Well, you do you. <br>... I must be tired. I'll try again tomorrow.");
			writeText("He mutters to himself before leaving.");
			writeFunction("changeLocation('street')", "Leave");
			break;
		}
		case "maid": {
			writeFunction("changeLocation('street')", "Leave");
			break;
		}
		case "windowProposal": {
			writeBig("images/succubus/profileD.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Hehe, too easy. You really should lock your windows.<br>Hey, remember me? From in town? It's good to see you're already back to walking around.");
			writeText("It's that streetwalker from earlier, although his skin is darker and he's in a strange outfit.");
			writeSpeech("player", "", "I don't have any drugs, and Halloween was a while ago. Scram, before somebody calls the cops and I need to explain why a sassy boi in cosplay is sitting in my windowsill.");
			writeSpeech("succubus", "demon.jpg", "Hah! Cosplay!");
			writeText("He hops down off the windowsill into your room, before turning around and showing off his little spade tail waving about.");
			writeSpeech("succubus", "demon.jpg", "Hehe. It's your lucky night too, human. I, the succubus (male), known as succubusF, have decided to make you an o-");
			writeSpeech("player", "", "Wait what? You're an incubus?");
			writeSpeech("succubus", "demon.jpg", "N-no, I'm a succubus (male). I'm here to-");
			writeSpeech("player", "", "You can't have my soul. I get that I'm mega-super fucking damned by now, but it's still-<br>Shit. Is all that stuff real? Am I going to hell?");
			writeSpeech("succubus", "demon.jpg", "Calm down. Listen. Don't worry about any of that.<br>This is going nowhere. I can see I'm going to need to be direct with you.");
			writeText("succubusF sighs, before in one fluid motion gets down on his knees in a begging position.");
			writeSpeech("succubus", "demon.jpg", "Please take me as your familiar, *Master!");
			writeSpeech("player", "", "... Excuse me?");
			writeSpeech("succubus", "demon.jpg", "Your heart is the darkest, most selfish I've ever seen! Like it's not tainted with lust, it's a big ball of lust with a little bit of humanity sprinkled inside. Just one fuck with you put me over the top and I had enough energy to meet my quotas and get promoted too. <br>Then I wasted it and dumped it onto the bedsheets, but I won't hold that against you. <br>My point is that not only are you some cream of the crop gourmet shit, but you're also a magnet for virgin energy, making you-");
			writeSpeech("player", "", "Now hold on a moment there-");
			writeSpeech("succubus", "demon.jpg", "Other virgins, you've got the potential to seduce virgins, I'm not saying you're one. Gimme a second dude. Lucy's sake, don't have a fucking crusade. <br>Anyways, I want it. You aren't using it all anyways, and I can help you out and... Give you some other incentives.");
			writeSpeech("player", "", "I don't understand. I thought incu- I mean succubi stole souls while you slept? I mean, I'm not super fresh with Christian mythology...");
			writeSpeech("succubus", "demon.jpg", "Well... It's a little complicated... But I'd never hurt anybody! I just siphon a little bit of corrupted soul off the top! You humans make more anyways, it isn't dangerous. ");
			writeText("You lean in to inspect the begging demon on your floor. His hair smells like the abstract concept of sinning, which is surprisingly close to chocolate.");
			writeSpeech("player", "", "So why would you need my help?");
			writeText("He looks up, his amber eyes meeting yours.");
			writeSpeech("succubus", "demon.jpg", "I'm just a succubus (male), one of the lowest ranks of demons. I'm barely making my dues to my superiors, I'm having a hard time staying afloat, let alone saving up to become a proper incubus!");
			writeText("He sits up to clasp your hands in his. He's very soft.");
			writeSpeech("succubus", "demon.jpg", "But with you, you're the most corruptive influence I've ever seen. Dark energy, the glorious essence that comes from corrupting humans... You're teeming with the stuff!");
			writeText("You lean back, deep in thought. On the one hand, he's cute. On the other, potential for eternal damnation. Well, you're probably damned anyways.");
			writeSpeech("player", "", "What's in it for me?");
			writeSpeech("succubus", "demon.jpg", "I'll reward you with my body! Well, that's a given, really, but more too! I haven't really been looking, but I'm sure I can find even more targets for you to corrupt, and with my help you can take them even farther!");
			writeFunction("writeEncounter('windowAcceptance')", "Accept");
			writeFunction("writeEncounter('windowRejection')", "Refuse, send this spawn of Satan packing");
			break;
		}
		case "windowAcceptance": {
			setTrust("succubus", 60);
			writeSpeech("player", "", "That sounds pretty tempting. So, I don't even need to do anything different?");
			writeSpeech("succubus", "demon.jpg", "Nope! Basically we demons feed off corrupted life force. We gather it ourselves or convert other people into demons and make them gather it for us.");
			writeSpeech("player", "", "Like a multi-level marketing scheme? I always knew those were from hell.");
			writeSpeech("succubus", "demon.jpg", "You don't know the half of it. Anyways, you're coated in the stuff already. I just gotta <i>extract</i> it.");
			writeSpeech("player", "", "Does it hurt?");
			writeSpeech("succubus", "demon.jpg", "Only if the demon sucks at giving a blowjob.");
			writeFunction("writeEncounter('windowFollowup')", "Let's get to it then");
			writeFunction("writeEncounter('windowRejection')", "Never mind, flock off hellspawn");
			break;
		}
		case "windowFollowup": {
			writeEvent('succubus1');
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "windowRejection": {
			writeSpeech("player", "", "No dice, spawn of Satan. This place is a home of purity, a bastion of chastity. No chocolate boi booty can tempt me.");
			writeSpeech("succubus", "demon.jpg", "... Are you serious?");
			writeSpeech("player", "", "About rejecting you, yes. Everything else was a cold lie.");
			writeSpeech("succubus", "demon.jpg", "Oh... Well, uh... I don't suppose you might change your mind?");
			writeSpeech("player", "", "Begone, demon. Out of this house!");
			writeText("You start drawing crosses in the air like you've seen on TV.");
			writeSpeech("succubus", "demon.jpg", "Gah! Stop, stop, I'm going!");
			writeText("He quickly hops out your window and begins flying away.");
			writeSpeech("succubus", "demon.jpg", "You 'deus vult' motherfuckers are all the same. Don't think I'll forgive you when you come crawling back, unless I <b>really</b> feel like accepting your apology!");
			writeText("You close the window and lock it shut.");
			setTrust('succubus', -1);
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "caseSelect": {
			if (checkTrust('succubus') == 60) {
				writeSpeech("succubus", "demon.jpg", "Heeey~ How're you feeling? You were pretty out of it when I left last time, you rehydrate yourself? ");
				writeSpeech("player", "", "I'm feeling fine, really good actually.");
				writeSpeech("succubus", "demon.jpg", "Well, increased potency is a side effect. Not that you'd need it, you're pretty insatiable already.");
				writeSpeech("player", "", "In any case, we should probably get started with this whole *Master and familiar dynamic. Do I need to sign something?");
				writeSpeech("succubus", "demon.jpg", "Nope! All you need is for me to declare submission, *Master, and for the deal to be sealed with a kiss. My lips on your dick, to be precise. We're all set already!");
				writeSpeech("player", "", "Alright then, I look forwards to working with you, succubusF. ");
				writeSpeech("succubus", "demon.jpg", "Same here, *Master. So! I did a quick spyjob on the school you work at looking for targets, I even got their names! Here's what I found:");
				raiseTrust('succubus', 1);
			}
			else {
				writeSpeech("succubus", "demon.jpg", "Maaaster~ I'm hooome~<br>Hehe, miss me?");
				writeSpeech("player", "", "Welcome back. What do you have for me tonight, succubusF?");
			}
			if (checkFlag('succubus', 'tomgirlS') != true) {
				writeSpeech("succubus", "demon.jpg", "There's a boy named tomgirlF I think would make a good target, he even tried hitting on me.");
				writeFunction("writeEncounter('tomgirlStart')", "tomgirlF tomgirlL");
			}
			else {
				if (checkFlag('succubus', 'tomgirlF') != true) {
					writeSpeech("succubus", "demon.jpg", "You have that tomgirl, tomgirlF, in the palm of your hands yet? You'll wanna go all the way before we have our fun.");
					if (checkTrust('tomgirl') > 99) {
						writeFunction("writeEncounter('tomgirlEnd')", "Talk about tomgirlF");
					}
				}
			}
			if (checkFlag('succubus', 'mejiS') != true) {
				writeSpeech("succubus", "demon.jpg", "There's a boy named mejiF, I tailed him leaving school.");
				writeFunction("writeEncounter('mejiStart')", "mejiF mejiL");
			}
			else {
				if (checkFlag('succubus', 'mejiF') != true) {
					writeSpeech("succubus", "demon.jpg", "You looked into that wannabe delinquent yet?");
					if (checkTrust('meji') > 50) {
						writeFunction("writeEncounter('mejiEnd')", "Talk about mejiF");
					}
				}
			}
			if (checkFlag('succubus', 'nagatoroS') != true) {
				writeSpeech("succubus", "demon.jpg", "I was skulking around your school for a bit looking for a mark, and I think I found someone good in one of the hallways.");
				writeFunction("writeEncounter('nagatoroStart')", "nagatoroF nagatoroL");
			}
			else {
				if (checkFlag('succubus', 'nagatoroF') != true) {
					writeSpeech("succubus", "demon.jpg", "You look into that twinky boi looking for a faculty advisor yet? Apparantly he's trying to form a club, I think on the east side of your school.");
					if (checkTrust('nagatoro') > 99) {
						writeFunction("writeEncounter('nagatoroEnd')", "Talk about nagatoroF");
					}
				}
			}
			if (checkFlag('succubus', 'camboiS') != true) {
				writeSpeech("succubus", "demon.jpg", "I saw-Er, an acquaintance of mine saw an ad the other day that you might find interesting.");
				writeFunction("writeEncounter('camboiStart')", "Mystery Ad");
			}
			else {
				if (checkFlag('succubus', 'camboiF') != true) {
					writeSpeech("succubus", "demon.jpg", "Find out the identity of that streamer yet? I, uh, heard from an acquaintance that they react to the phrase 'bitch-boi'.");
					if (checkTrust('camboi') > 99) {
						writeFunction("writeEncounter('camboiEnd')", "Talk about camboiF");
					}
				}
			}
			if (checkFlag('succubus', 'fitboiS') != true) {
				writeSpeech("succubus", "demon.jpg", "Y'know, I'm starting to get the impression that your school is some kinda boi-magnet.");
				writeFunction("writeEncounter('fitboiStart')", "fitboiF fitboiL");
			}
			else {
				if (checkFlag('succubus', 'fitboiF') != true) {
					writeSpeech("succubus", "demon.jpg", "You bag that jogger yet? You might need some more practice on that hypnosis technique if you wanna fit in on the field. I hear they sell textbooks for that kinda thing.");
					if (checkTrust('fitboi') > 79) {
						writeFunction("writeEncounter('fitboiEnd')", "Talk about fitboiF");
					}
				}
			}
			if (checkFlag('succubus', 'priestS') != true) {
				writeSpeech("succubus", "demon.jpg", " I was flying over the park when I spied a small shack calling itself a church. I think the priest there is your type.");
				writeFunction("writeEncounter('priestStart')", "priestF priestL");
			}
			else {
				if (checkFlag('succubus', 'priestF') != true) {
					writeSpeech("succubus", "demon.jpg", "Did you check out that shoddy church in the park yet?");
					if (checkTrust('priest') > 1) {
						writeFunction("writeEncounter('priestEnd')", "Talk about priestF");
					}
				}
			}
			if (checkFlag('succubus', 'housekeepS') != true) {
				writeSpeech("succubus", "demon.jpg", "I saw this flier in town while in disguise advertising for a maid service. You wanna check it out?");
				writeFunction("writeEncounter('housekeepStart')", "housekeepF housekeepL");
			}
			else {
				if (checkFlag('succubus', 'housekeepF') != true) {
					writeSpeech("succubus", "demon.jpg", "You hired a maid yet? Honestly, something seems fishy about them.");
					if (checkTrust('housekeep') > 20) {
						writeFunction("writeEncounter('housekeepEnd')", "Talk about housekeepF");
					}
				}
			}
			if (checkTrust('succubus') == 83) {
				writeSpeech("succubus", "demon.jpg", "Nothing tonight, sorry. We've hit the obvious targets, I'll need to search the school more carefully from here on.");
				writeSpeech("player", "", "Keep yourself out of trouble then.");
				writeSpeech("succubus", "demon.jpg", "Of course! I am a demon after all, have a little faith in your familiar. <br>I'll keep searching, and let you know if I find any good targets.");
			}
			writeSpeech("succubus", "demon.jpg", "We could also just spend the night chatting, if you wanted. I get that I'm a pretty unique sort of houseguest, after all.");
			writeFunction("writeEncounter('chatSelect')", "Chat");
			writeFunction("changeLocation('playerHouse')", "Finish");
			if (checkFlag('succubus', 'mission') == true) {
				if (checkFlag('succubus', 'missionF') != true) {
					addFlag('succubus', 'missionF');
					writeEncounter('missionF');
				}
			}
			break;
		}
		case "tomgirlStart": {
			addFlag('succubus', 'tomgirlS');
			writeSpeech("succubus", "demon.jpg", "There's one boy who tried hitting on me till he realized I was a guy-");
			writeSpeech("player", "", "That's debatable.");
			writeSpeech("succubus", "demon.jpg", "Shut up. Anyways I let him know I had a dick, he got all stammery. He seems like a pretty good target. His name's tomgirlF tomgirlL. He should be a pretty quick corruption, just show him your dick and he should break on the spot!");
			writeSpeech("player", "", "It probably won't quite be that easy, but I should be able to handle it.");
			writeSpeech("succubus", "demon.jpg", "Meh, you humans are too wrapped up in your weird holdups. Honestly, I'd fuck anyone cute, so long as they didn't have a chastity fetish.");
			writeText("succubusF shudders.");
			writeSpeech("succubus", "demon.jpg", "Never again.");
			writeFunction("writeEncounter('caseSelect')", "Back");
			if (checkTrust('tomgirl') > 99) {
				writeEncounter('tomgirlEarly');
			}
			break;
		}
		case "tomgirlEnd": {
			writeSpeech("succubus", "demon.jpg", "You have that tomgirl, tomgirlF, in the palm of your hands yet? You'll wanna go all the way before we have our fun.");
			writeSpeech("player", "", "I have, actually. I've had more than a little fun with him already.");
			writeSpeech("succubus", "demon.jpg", "Ooh! I knew you could do it! Really I would've thought you would've jumped him earlier. Well, better late than never, yeah? <br>Hehe, I guess that means it's time for my snack! ");
			addFlag('succubus', 'tomgirlF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "tomgirlEarly": {
			writeSpeech("succubus", "demon.jpg", "There's one boy who tried hitting on me till he realized I was a guy-");
			writeSpeech("player", "", "That's debatable.");
			writeSpeech("succubus", "demon.jpg", "Shut up. Anyways I let him know I had a dick, he got all stammery. He seems like a pretty good target. His name's tomgirlF tomgirlL. He-");
			writeSpeech("player", "", "tomgirlF, yeah. I already met him, he's already mine.");
			writeSpeech("succubus", "demon.jpg", "... Oh. Well, he was a pretty obvious target. It makes sense you'd hook him pretty quickly. Alright then, playerMister Jumps-The-Gun, lemme get a taste of that sweet virgin essence...");
			addFlag('succubus', 'tomgirlF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "camboiStart": {
			addFlag('succubus', 'camboiS');
			writeSpeech("succubus", "demon.jpg", "I saw-Er, an acquaintance of mine saw an ad the other day that you might find interesting.");
			writeSpeech("player", "", "An acquaintance, huh? Sure. Anyways, try not to believe everything you read.");
			writeSpeech("succubus", "demon.jpg", "No, no, this was on a porn website! Those are always legit.");
			writeSpeech("player", "", "...");
			writeSpeech("succubus", "demon.jpg", "What? Hey, I'm serious. This one time a prince from a foreign country emailed me, and I actually made like-");
			writeSpeech("player", "", "Alright, fine, let's say I believe you. What was the ad about?");
			writeSpeech("succubus", "demon.jpg", "It was this camboi streamer, it was on a seriously popular porn website. One click and you're chatting with them. And the best part is that the ad says they're in our area!");
			writeSpeech("player", "", "...");
			writeSpeech("succubus", "demon.jpg", "Stop looking at me like that! You think someone would just go on the internet and tell lies? That's illegal!<br>Anyways, they have a thing where whenever they want to cum the chat has to say 'bitch-boi', so if you just say that to every twinkish guy in town-");
			writeSpeech("player", "", "Alright, let's move on before I end up in jail.");
			writeFunction("writeEncounter('caseSelect')", "Back");
			if (checkTrust('camboi') > 99) {
				writeEncounter('camboiEarly');
			}
			break;
		}
		case "camboiEnd": {
			writeSpeech("succubus", "demon.jpg", "Click the ad yet? I think I've got a few leads on the streamer. Pretty sure his real identity is-");
			writeSpeech("player", "", "A guy named camboiF, I know. I already hypnotized him, he's putty in my hands.");
			writeSpeech("succubus", "demon.jpg", "How the fuck... Fine! Make my job hard why don't you...");
			writeSpeech("player", "", "Oh, I'll show you hard...");
			addFlag('succubus', 'camboiF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "camboiEarly": {
			writeSpeech("succubus", "demon.jpg", "I saw-Er, an acquaintance of mine saw an ad the other day that you might find interesting.");
			writeSpeech("player", "", "This wouldn't happen to have been a 'Camwhore Sissy Bitch in Your Area' ad, would it?");
			writeSpeech("succubus", "demon.jpg", "Yeah, actually. Did you click it?");
			writeSpeech("player", "", "Yeah. It turned out to be legit, wasn't expecting that.");
			writeSpeech("succubus", "demon.jpg", "Huh? Why not? You know telling lies on the internet is illegal, right?<br>Anyways, so the streamer the ad leads to is actually-");
			writeSpeech("player", "", "A guy named camboiF, I know. I already hypnotized him, he's putty in my hands.");
			writeSpeech("succubus", "demon.jpg", "How the fuck... Fine! Make my job hard why don't you...");
			writeSpeech("player", "", "Oh, I'll show you hard...");
			addFlag('succubus', 'camboiF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "fitboiStart": {
			addFlag('succubus', 'fitboiS');
			writeHTML(`
				define succubus = sp succubus; im demon.jpg;
				succubus Y'know, I'm starting to get the impression that your school is some kinda boi-magnet.
				player Oh? Is it because you're-
				succubus Listen, smart ass. I mean because I keep spying choice cuts of that good meat around campus. There's this one, I think his name's fitboiF, he's trying to get on the track and field team.
				player Oh... A runner...
				succubus Ha! Yeah, you don't exactly look the type. Maybe brush up on some better hypnosis techniques.
				player I have to do everything myself, don't I?
				succubus Well... Maybe I should start pulling my weight a little. Here, stand here. So, I usually just rely on my powers, but if you keep your voice steady just right...
				t ...
				succubus ... And then that bitch's ass is grass!
				player That was very informative. Somehow.
				t <b>Your skill in hypnosis has improved with succubusF's demonstation!</b>
				succubus Now go get 'em champ!
			`);
			writeFunction("writeEncounter('caseSelect')", "Back");
			if (checkTrust('fitboi') > 79) {
				writeEncounter('fitboiEarly');
			}
			else {
				addSkill("hypnosis", 1);
			}
			break;
		}
		case "fitboiEnd": {
			if (checkTrust("fitboi") == 80 && checkFlag("fitboi", "cream") == false) {
				writeHTML(`
				define succubus = sp succubus; im demon.jpg;
					succubus You bag that jogger yet?
					player fitboiF. He's proving to be troublesome.
					succubus Aww, his tight pants too distracting?
					player No, it's...
					t ...
					t You explain the situation to succubusF, and in response he starts looking through a small carry-bag he brought with him.
					t Wiggling his ass as he searches, he eventually pops back up holding a tube of lotion marked 'Stupid Bitch, #3/7
					succubus Here. I swiped one of the lotions used by the staff at a local demon joint.<br>This is high quality stuff, but let me tell you, it requires one hell of a body to work on. fitboiF works out a lot, yeah? He's the primary target there unless you're willing to wait years for this to take effect on someone else.
					player You should know I'm not that patient. What exactly is it?
					succubus She-cream oil, it's a human recipe actually. It pops up every so often, I think it's some kind of curse on humanity that some kinky sap will invent it and totally ruin themselves and everyone they know with the stuff.
					player Sounds dangerous.
					succubus Hehe, it's an old classic. Precum generation goes up dramatically, and sensitivity goes absolutely bonkers. It's so potent that most bosses won't even let succubi use it as lube~
					player If it's banned from use by succubi-
					succubus Hey, don't worry. This stuff is watered down to hell and back. Apparently demonF's a real cheapskate. Although you know how many souls I'd have to sell to get my hands on the pure stuff?<br>Anyways, be seriously careful though. If you combined this stuff with demonic corruption...
					t succubusF shudders and his hand tightens around the tube.
					succubus Let's just say I wanna stay your prinary boytoy, yeah? I'm not sure we need a chocolate buttslut who's even thirstier than I am. Now, I can still smell a lot of him on you, and that's already good enough for me~!
				`);
				addFlag('fitboi', 'cream');
			}
			else {
				writeHTML(`
					succubus You bag that jogger yet?
					player Yeah. I had to doll him up with some special super-cream to get him to play ball.
					succubus ... I knew I smelled she-cream! That shit's got that good stink, any succubus (male) worth his salt knows it by heart. Where'd you nab it?
					player I've got connections.
					succubus Well, whatever. He probably won't be a good target for corruption, but another boi is another boi! C'mere, lemme enjoy that lingering scent~
				`);
			}
			addFlag('succubus', 'fitboiF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "fitboiEarly": {
			if (checkTrust("fitboi") == 80 && checkFlag("fitboi", "cream") == false) {
				writeHTML(`
				define succubus = sp succubus; im demon.jpg;
					succubus Y'know, I'm starting to get the impression that your school is some kinda boi-magnet.
					player Oh? Is it because you're-
					succubus Listen, smart ass. I mean because I keep spying choice cuts of that good meat around campus. There's this one, I think his name's fitboiF, he's trying to get on the track and field team.
					player Ah, fitboiF. He's proving to be troublesome.
					succubus Aww, his tight pants too distracting?
					player No, it's...
					t ...
					t You explain the situation to succubusF, and in response he starts looking through a small carry-bag he brought with him.
					t Wiggling his ass as he searches, he eventually pops back up holding a tube of lotion marked 'Stupid Bitch, #3/7
					succubus Here. I swiped one of the lotions used by the staff at a local demon joint.<br>This is high quality stuff, but let me tell you, it requires one hell of a body to work on. fitboiF works out a lot, yeah? He's the primary target there unless you're willing to wait years for this to take effect on someone else.
					player You should know I'm not that patient. What exactly is it?
					succubus She-cream oil, it's a human recipe actually. It pops up every so often, I think it's some kind of curse on humanity that some kinky sap will invent it and totally ruin themselves and everyone they know with the stuff.
					player Sounds dangerous.
					succubus Hehe, it's an old classic. Precum generation goes up dramatically, and sensitivity goes absolutely bonkers. It's so potent that most bosses won't even let succubi use it as lube~
					player If it's banned from use by succubi-
					succubus Hey, don't worry. This stuff is watered down to hell and back. Apparently demonF's a real cheapskate. Although uou know how many souls I'd have to sell to get my hands on the pure stuff?<br>Anyways, be seriously careful though. If you combined this stuff with demonic corruption...
					t succubusF shudders and his hand tightens around the tube.
					succubus Let's just say I wanna stay your prinary boytoy, yeah? I'm not sure we need a chocolate buttslut who's even thirstier than I am. Now, I can still smell a lot of him on you, and that's already good enough for me~!
				`);
			}
			else {
				writeHTML(`
					succubus Y'know, I'm starting to get the impression that your school is some kinda boi-magnet.
					player Oh? Is it because you're-
					succubus Listen, smart ass. I mean because I keep spying choice cuts of that good meat around campus. There's this one, I think his name's fitboiF, he's trying to get on the track and field team.
					player Oh right, yeah. I had to doll him up with some special super-cream to get him to play ball.
					succubus ... I knew I smelled she-cream! That shit's got that good stink, any succubus (male) worth his salt knows it by heart. Where'd you nab it?
					player I've got connections.
					succubus Well, whatever. He probably won't be a good target for corruption, but another boi is another boi! C'mere, lemme enjoy that lingering scent~
				`);
			}
			addFlag('succubus', 'fitboiF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "mejiStart": {
			writeSpeech("succubus", "demon.jpg", "There's a boy I tailed out of the school. I think his name was mejiF. At first he seemed like the pretty run of the mill delinquent type, but it turns out he's got another side.");
			writeSpeech("player", "", "Oh? Do tell.");
			writeSpeech("succubus", "demon.jpg", "Hehe, just follow him into town after your school thing ends and you'll see for yourself. He should be a pretty quick fuck when you hold his secret over his head.");
			addFlag('succubus', 'mejiS');
			writeFunction("writeEncounter('caseSelect')", "Back");
			if (checkTrust('meji') > 50) {
				writeEncounter('mejiEarly');
			}
			break;
		}
		case "mejiEnd": {
			writeSpeech("succubus", "demon.jpg", "You looked into that wannabe delinquent yet?");
			writeSpeech("player", "", "Yeah, mejiF. Loyal as he is broken in.");
			writeSpeech("succubus", "demon.jpg", "Hehe, I never had any doubts. Mmm, just remembering what he looked like has me feeling hungry. <br>C'mon, I wanna play with my food tonight.");
			addFlag('succubus', 'mejiF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "mejiEarly": {
			writeSpeech("succubus", "demon.jpg", "There's a boy I tailed out of the school. I think his name was mejiF.");
			writeSpeech("player", "", "Yeah, I already know him.");
			writeSpeech("succubus", "demon.jpg", "Ah, but did you know that after school he likes to-");
			writeSpeech("player", "", "Crossdress, yep.");
			writeSpeech("succubus", "demon.jpg", "Haaah... You're really not letting me take the easy way out, are you? Well, it looks like I'll actually have to search carefully for some new targets, not just pick the most in-denial buttsluts in town. ");
			writeSpeech("player", "", "Useless demons don't get rewards. ");
			writeSpeech("succubus", "demon.jpg", "Well, I guess I'll need to work for my living then. Speaking of which...");
			addFlag('succubus', 'mejiF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "priestStart": {
			writeHTML(`
				define succubus = sp succubus; im images/succubus/demon.jpg; 
				succubus I was flying over the park when I spied a small shack calling itself a church. I think the priest there is your type.
				player I didn't think you and churches mixed.
				succubus We don't! The air in there is stuffy, and the staff gets all mad when you swear, or if you wear a pair of booty shorts that show off your asscheeks, or-
				player I think I get the point. And so you think I should try seducing a priest next?
				succubus Well, he was actually wearing a nun's habit, so...<br>Look, I don't know what his deal is, but he's got the kind of face women would kill for. What's the worst that could happen? I'm sure he's in the closet or something, and he'll fold like a bad hand the moment you darken his doorstep.
			`);
			addFlag('succubus', 'priestS');
			writeFunction("writeEncounter('caseSelect')", "Back");
			if (checkTrust('priest') > 1) {
				writeEncounter('priestEarly');
			}
			break;
		}
		case "priestEnd": {
			writeHTML(`
				define succubus = sp succubus; im images/succubus/demon.jpg; 
				succubus Did you check out that shoddy church in the park yet?
				player Yeah, the preist priestF and I... He and I are... Acquainted.
				succubus Oho~? If I know anything about priests, especially ones with bodies like his, I bet he was so far in the closet he could've drilled a hole and smoked cock through it. How'd it go?
				player It went... Well? His belief system is a bit out there. He believes angels spend all their times in circles practicing hobbies, and they all have femboi bodies.
				succubus Oh... So he's already been upstairs... I wasn't expecting him to actually know how it all works...<br>Well, you still did good! You might have some 'goody-two-shoes' skank stank on you, but I think I can stomach it long enough to give you a reward.
			`);
			addFlag('succubus', 'priestF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "priestEarly": {
			writeHTML(`
				define succubus = sp succubus; im images/succubus/demon.jpg; 
				succubus I was flying over the park when I spied a small shack calling itself a church. I think the priest there is your type.
				player priestF. He and I are... Acquainted.
				succubus Oho~? If I know anything about preists, especially ones with bodies like his, I bet he was so far in the closet he could've drilled a hole and smoked cock through it. How'd it go?
				player It went... Well? His belief system is a bit out there. He believes angels spend all their times in circles practicing hobbies, and they all have femboi bodies.
				succubus Oh... So he's already been upstairs... I wasn't expecting him to actually know how it all works...<br>Well, you still did good! You might have some 'goody-two-shoes' skank stank on you, but I think I can stomache it long enough to give you a reward.
			`);
			addFlag('succubus', 'priestF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "nagatoroStart": {
			writeSpeech("succubus", "demon.jpg", "I was skulking around your school for a bit looking for a mark, and I think I found someone good in one of the hallways. They're looking for a faculty advisor from what I hear, that's your jam right?");
			writeSpeech("player", "", "I can keep an eye out.");
			writeSpeech("succubus", "demon.jpg", "You should have some fun, I could feel an almost tangible aura of smugness coming from him. And I know you have a thing for smug bois.");
			addFlag('succubus', 'nagatoroS');
			writeFunction("writeEncounter('caseSelect')", "Back");
			if (checkTrust('nagatoro') > 50) {
				writeEncounter('nagatoroEarly');
			}
			break;
		}
		case "nagatoroEnd": {
			writeSpeech("succubus", "demon.jpg", " You look into that twinky boi looking for a faculty advisor yet? Apparently he's trying to form a club, I think on the east side of your school.");
			writeSpeech("player", "", "nagatoroF? Yeah, I spoke to him. He wanted to start a crossdressing club, you interested? ");
			writeSpeech("succubus", "demon.jpg", "I don't need a club to... Nevermind. Well, if you've got another boi for your harem, I'll need to do something to stand out, huh?  How about...");
			addFlag('succubus', 'nagatoroF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "nagatoroEarly": {
			writeSpeech("succubus", "demon.jpg", "I was skulking around your school for a bit looking for a mark, and I think I found someone good in one of the hallways. They're looking for a faculty advisor from what I hear, that's your jam right?");
			writeSpeech("player", "", "You mean nagatoroF? He wanted to start a crossdressing club, you interested? ");
			writeSpeech("succubus", "demon.jpg", "I don't need a club to... Nevermind. Jeez, making me feel a little useless, *master! Well, I guess I can reward you for being ahead of the curve~");
			addFlag('succubus', 'nagatoroF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "housekeepStart": {
			writeSpeech("succubus", "demon.jpg", "I saw a flier advertising a maid service in town, looks like more of a fetish thing than an actual cleaner though. Call 'em in, get them alone, work your magic. Seems like an easy catch.");
			writeSpeech("player", "", "Can I see the flier?");
			writeSpeech("succubus", "demon.jpg", "I would, but...<br>Listen, I'd be at least a little cautious with this one.");
			writeSpeech("player", "", "Why? Is it a front for another succubus or something?");
			writeSpeech("succubus", "demon.jpg", "No.<br>Because I got a papercut on the flier.");
			writeSpeech("player", "", "... I'm sorry?");
			writeSpeech("succubus", "demon.jpg", "Listen *master, I'm a demon. I don't experience most of the inconveniences of modern life. I get a bad omen, I stay away.");
			writeSpeech("player", "", "I'll be sure to be careful around the dangerous edges of the paper then, and keep an eye out.");
			writeSpeech("succubus", "demon.jpg", "Hah hah, very funny. Lemme know if the maid stuff pans out, I can help you dirty up whatever they clean.");
			writeText("succubusF gives you a sly wink.");
			addFlag('succubus', 'housekeepS');
			writeFunction("writeEncounter('caseSelect')", "Back");
			if (checkTrust('housekeep') > 20) {
				writeEncounter('housekeepEarly');
			}
			break;
		}
		case "housekeepEnd": {
			writeSpeech("succubus", "demon.jpg", "You hired a maid yet? Honestly, something seems fishy about them.");
			writeSpeech("player", "", "Yeah, not sure what you mean. Honestly they seem pretty chill.");
			writeSpeech("succubus", "demon.jpg", "Well, I've been off about these things before. So, I guess-<br>God damn, what's that smell?");
			writeSpeech("player", "", "My place has never been more clean, what's the matter?");
			writeSpeech("succubus", "demon.jpg", "That's just it, it's really fuckin' clean. As in I feel like the Buddha scrubbed the place down. A human did this?<br>Props, honestly.");
			writeText("You lean back onto the bed, succubusF comes over and sniffs your collar.");
			writeSpeech("succubus", "demon.jpg", "Honestly, you stink of purity yourself. How about I clean that maid's touch right off of you, and we get seriously dirty?");
			addFlag('succubus', 'housekeepF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "housekeepEarly": {
			writeSpeech("player", "", "One step ahead of you. They've already been here, actually.");
			writeSpeech("succubus", "demon.jpg", "Thought as much, the place is really clean, like on a spiritual level. As in I feel like the Buddha scrubbed the place down. A human did this?<br>Props, honestly. Anything seem off about them?");
			writeSpeech("player", "", "No, why? Is he a succubus in disguise?");
			writeSpeech("succubus", "demon.jpg", "No.<br>Because I got a papercut on the flier.");
			writeSpeech("player", "", "... I'm sorry?");
			writeSpeech("succubus", "demon.jpg", "Listen *master, I'm a demon. I don't experience most of the inconveniences of modern life. I get a bad omen, I stay away.");
			writeSpeech("player", "", "I'll be sure to be careful around the dangerous edges of the paper then, and keep and eye out.");
			writeSpeech("succubus", "demon.jpg", "Hah hah, very funny. Honestly, you stink of purity yourself. How about I clean that maid's touch right off of you, and we get seriously dirty?");
			addFlag('succubus', 'housekeepF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "mephEnd": {
			writeSpeech("succubus", "demon.jpg", "Hey, you play with demonF yet? He wasn't at his hotel, so I was able to swipe some stuff off him.");
			writeSpeech("player", "", "Yeah, you missed it  Surprised you didn't stay to watch, didn't you hate him?");
			writeSpeech("succubus", "demon.jpg", "Hate is a strong word. Not strong enough, though. I already saw him break though, that's good enough for me. Honestly I keep remembering his face from when you pushed him over the edge, a cute little succubus (male) like me could develop a splurting fetish from that alone. If I saw him breaking again...");
			writeSpeech("player", "", "Well, I suppose it's fine either way.");
			writeSpeech("succubus", "demon.jpg", "By the way, I notice you've got a bit of an aura. He use his abilities on you?");
			writeSpeech("player", "", "I don't think so. Called him names, fucked his ass, made him clean up his mess... I was a little bit more mean than I normally am I guess.");
			writeText("succubusF snorts as he barely holds back a laugh.");
			writeSpeech("succubus", "demon.jpg", "Damn! He's using what remains of his powers to get you to abuse him harder? Lucy's sake, I never thought I'd live to see him break like this. So, you ready for your reward?");
			writeSpeech("player", "", "Oh? I thought I got rewarded for corrupting people, how does demonF count?");
			writeSpeech("succubus", "demon.jpg", "You kidding? I could wake you up with a blowjob every morning and we still wouldn't be even. Now you're taking his ass in public? Hell yes.");
			writeSpeech("player", "", "Well alright then, let's do it. ");
			addFlag('succubus', 'mephF');
			writeFunction("writeEncounter('reward')", "Get started");
			break;
		}
		case "chatSelect": {
			writeSpeech("succubus", "demon.jpg", "We could also just chat, if you wanted. I get that I'm a pretty unique sort of houseguest, after all.");
			writeSpeech("player", "", "Sure, why not. Just keep it interesting, alright? I'm not interested in a long-winded explanation of demon foot massage techniques. ");
			writeSpeech("succubus", "demon.jpg", "Hehe, no problem. I'm well versed in many types of <i>entertainment</i> if you stick my wicket. I'll keep whatever you want to talk about brief. ");
			writeFunction("writeEncounter('chatStory')", "Your story");
			writeFunction("writeEncounter('chatClothes')", "Your clothes");
			writeFunction("writeEncounter('chatDemons')", "Other kinds of demons");
			writeFunction("writeEncounter('chatTransformation')", "Demonization process");
			if (checkFlag('succubus', 'mission') == true) {
				if (checkFlag('succubus', 'club') != true) {
					if (checkTrust('nagatoro') > 101) {
						writeFunction("writeEncounter('chatClub')", "Wanna join nagatoroF's club?");
					}
				}
				if (checkFlag('succubus', 'newCorruption') != true) {
					if (checkFlag('succubus', 'corruption') == true) {
						writeFunction("writeEncounter('oldCorruption')", "Ask about how you can add more succubi to your harem");
					}
					else {
						writeFunction("writeEncounter('newCorruptionPrompt')", "Ask about how you can add more succubi to your harem");
					}
				}
				if (checkFlag('priest', 'guestSuccubus') == true && checkFlag('succubus', 'purified') != true && checkSkill("corruption") < 4) {
					writeFunction("writeEncounter('succubusPurifyOffer')", "Invite succubusF back to the church");
				}
			}
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "succubusPurifyOffer": {
			writeHTML(`
				define transformed = sp succubus; im images/succubus/demon.jpg; 
				transformed Back to the church? You kidding me?
				player The priest seemed pretty confident nothing bad would happen to you.
				transformed Well... I guess most of the stuff I heard was from other demons. I can't imagine they would really know what purification is like, or that they'd tell me the truth about it if they did. Still!
				player Still?
				transformed ... Fine! Dickweed, twatwaffling... I'll go if you want me to, but I expect a decent reward after!
				trans succubusPurifyReturn1; Head to the church
				trans cancel; Change your mind
			`);
			break;
		}
		case "succubusPurifyReturn1": {
			writeHTML(`
				succubus Hah... Fine. But I'm not waiting for the morning.
				t ...
				priest Oh~! I had a feeling you would be... *Yawn*<br>Coming!
				succubus Yeah, I thought I'd be cumming tonight too. Whatever, you gonna invite us in?
				priest Of course, my child. Welcome, this place is a respite from sin, and you are free from judgement here.
				succubus Oh?
				t succubusF flashes a grin at you before his form starts to shift.
				transformed Boom~!<br>So? Ready to run screaming?
				priest I will not. "If people do not provide for their own and especially those of their own household, they have denied the faith." 
				transformed Not even batting an eye... Fine! Whatever. Just get this garbage rolling already, it's starting to stink.
				priest In such a world as this, it is easy to deny religion for the most tragic reason: That the idea of a loving Father is alien to us.<br>I beg you to take heart, for the Lord granted us the capacity to love ourselves, and He is all things.
				transformed ... Whatever.
				priest He is love, and those who abide in love abide in Him. Do not fear, for He shall hold onto you with His righteous hand.
				trans succubusPurifyReturn2; Continue
			`);
			break;
		}
		case "succubusPurifyReturn2": {
			writeHTML(`
				t You take a seat on a pew alongside Gou.
				priest Alright, now you need only relax. This place shall do the work for you. As those who watch above judge, you have no harm, and you have already begun to walk a path of kindness alongside playerF.
				t succubusF begins to fidget on the spot.
				transformed It's... Prickly. And the room's... Spinning. It's hot...
				priest You're reclaiming your humanity, which means...<br>You're remembering your last moments as a human.
				t Gou coughs, and you can see beads of sweat forming along his skin.
				priest You are not alone, friend. 
				t priestF takes succubusF's hand, and you take the other one. succubusF seems to calm down, taking slow and deliberate breaths.
				priest Now, close your eyes. Both of you.
				t You and succubusF shut your eyes tight, and you hear the church's doors open.
				define angel = sp housekeep; im images/none.png; HIDDEN
				t You feel presences approaching, but the energy in your body, all except the strength that keeps your hand clasped around succubusF's, has faded.
				angel Oh my... What a tender soul...
				angel I'll be careful on cleanup. He's so cute though~!
				angel He grimaced at that one! Little cutie's got a stronger sense of self than most. You did good making it so far.
				angel Now, little buddy, rest.
				t ...
				t Faintly, you can hear birds chirping. You find the strength to open your eyes, they're quite heavy. You must have been asle-
				succubus Gyaaah!
				priest And with that, the next step of your journey has begun.
				t succubusF is in his human form, but is examining himself like he's surprised.
				succubus I can't... Why can't I-
				priest Oh, wait, you shouldn't try to tap into-
				t *POOF*
				transformed Eh?
				t And he's back to his bat-winged self.
				priest Your corruption is deeply seeded. Only a pious life will guide you to total freedom from your bargain.
				transformed You... You hack! You scam artist! I thought that'd be it! You make me come all the way over here and open up just to...<br>Fuck you! I'm gonna do drugs and bounce on *his dick all night long just to spite you!
				priest Well, I'd recommend the second part more than the first one.
				transformed Eh?
				priest Apologies. By a pious life, I simply meant one spent being kind and happy. I fully encourage lovemaking, especially in the missionary position with fingers interlocked, and... And...
				im images/priest/060.jpg
				priest Ehehe... The room smells of angels...
				transformed You... You creep me the fuck out... playerF, let's scram!
				priest Do take care! If you find yourself in need of ordinary work, I'm certain divine guidance will be of use to you!
				t ...
				succubus That guy was weird...
				player Yeah. Sorry this didn't pan out.
				succubus Well, you tried. And hey, I guess this place isn't too bad. If you ever decide you wanna stay here at the church, I guess... I guess I wouldn't mind giving this place another shot.
				t You give succubusF a happy smile as he avoids eye contact.
				succubus ... Whatever! I'm gonna... I dunno, go gambling with hookers or something. Try not to get your butt... Ass... Shit!
				t And on that note, succubusF runs off.
				finish
			`);
			addFlag("succubus", "purified");
			break;
		}
		case "chatStory": {
			writeSpeech("succubus", "demon.jpg", "There's not much to say about me, just barely making quotas for... I don't know how long it's been. The days feel so long but the years seem to just fly by. <br>I don't have that interesting of an origin either. A demon thought I was cute enough to make a good harvester, and I was about to die, sooo yeah. ");
			writeFunction("writeEncounter('chatSelect')", "Back");
			break;
		}
		case "chatClothes": {
			writeSpeech("succubus", "demon.jpg", "Hehe, you like em? I collect a lot of pretty clothes. Ah, it's just for seduction purposes of course. If I could I'd lounge in pajamas all day.<br>Hmm... Here, lemme see your phone.");
			writeText("You hand succubusF your phone.");
			writeText("After a moment he hands it back to you and busts out his own.");
			writeText("Bzzt! You got a text from succubusF!");
			for (succIndex = 0; succIndex < data.story.length; succIndex++) {
				if (data.story[succIndex].index == "succubus") {
					data.story[succIndex].textEvent = 'clothes';
				}
			}
			document.getElementById('phoneButton').innerHTML = "PHONE(*)";
			document.getElementById('phoneButtonMobile').innerHTML = "PHONE(*)";
			writeSpeech("succubus", "demon.jpg", "I don't let a lot of pictures get taken of me, but I'll be sure to bring some pieces of my collection over some time~");
			writeFunction("writeEncounter('chatSelect')", "Back");
			break;
		}
		case "chatDemons": {
			writeSpeech("succubus", "demon.jpg", "Hmm. There's my rank, succubus (male). We seduce humans, same as incubi except succubi are expected to be the catchers while the incubi get to pitch. There's plenty of regional demons too. I think in some countries the succubi have fox tails. <br>Once you get to the higher ranks you get demons that no longer need to draw energy from humans, they just bully other demons. Basically they don't need to look humanoid anymore, so they're monsters. Although some still hang on to a sense of style and want to look beautiful or handsome.");
			writeFunction("writeEncounter('chatSelect')", "Back");
			break;
		}
		case "chatTransformation": {
			writeSpeech("succubus", "demon.jpg", "For all the benefits like eternal youth, inhuman beauty, wings, and so on, there are some downsides. You'll get attacked by humans who feel like you're 'not right', and you start at the lowest rank so you end up looking like a sassy boi, or a teenage girl unless you can climb the ranks.<br>Transformation does feel really good though, you cum out all that excess size and masculinity, and your body's new sensitivity is finely tuned over the next few days. Some of the better-off ones get multi-day spa treatments to help them acclimate, but I was just thrown in a tentacle pit for a week.");
			writeSpeech("player", "", "Do you regret becoming a demon?");
			writeSpeech("succubus", "demon.jpg", "... <br>I'm alive today because I'm a demon, and I'm immortal too. I'll find something that'll make all these years worth it, and I'll have an eternity to enjoy it.");
			writeFunction("writeEncounter('chatSelect')", "Back");
			break;
		}
		case "chatCorruption": {
			if (checkFlag('succubus', 'corruption') != true) {
				writeSpeech("succubus", "demon.jpg", "Oh ho? You wanna learn how to corrupt souls? Well, it's one of the first, non-sexual things I was taught.<br>It'll take me awhile, but I can teach you. I need to warn you though...");
				writeText("succubusF leans in close.");
				writeSpeech("succubus", "demon.jpg", "You're turning people who trust you, people you have control over, into semen demons. You'll have fun transforming them for sure, but after that they'll go off to harvest energy from others. You really okay with that?");
				writeFunction("writeEncounter('chatAgree')", "Yes");
				writeFunction("writeEncounter('chatSelect')", "No");
			}
			else {
				writeSpeech("succubus", "demon.jpg", "Uh, *Master, did you forget that I already gave you the ability?");
				writeFunction("writeEncounter('chatSelect')", "Back");
			}
			break;
		}
		case "chatAgree": {
			addFlag('succubus', 'corruption');
			writeSpeech("succubus", "demon.jpg", "Well, the more the merrier! C'mere.");
			writeText("succubusF pulls you close, his lips inches from yours.");
			writeSpeech("player", "", "Ah, fuck!");
			writeText("You pull back at a burning sensation on the back of your right hand, there's a dark mark there that quickly fades away.");
			writeSpeech("succubus", "demon.jpg", "Sorry, probably should've warned you, but you look like you aren't super good at dealing with pain.<br>Anyways it's super easy. Just focus on where the mark was and it'll come back, allowing you to corrupt people.<br>They need to be deep, and I mean balls-deep in love with you though. Only the most broken bois may apply.");
			writeSpeech("player", "", "Neat, thanks.");
			writeSpeech("succubus", "demon.jpg", "... You really are an oddball, *Master.");
			writeFunction("writeEncounter('chatSelect')", "Back");
			break;
		}
		case "chatClub": {
			writeHTML(`
				define succubus = sp succubus; im demon.jpg;
				player Hey, you know that one boi I corrupted, nagatoroF?
				succubus The one with the wardrobe, yeah.
				player Well, I was thinking it'd be pretty fun if you joined his club. Might be nice for you to make some friends. At least before we turn him into a succubus (male).
				succubus Friends? No. I've dealt with too many demons with betrayal fetishes.<br>But having an in at the school might not be so bad. Maybe I'll show up once or twice.
			`);
			addFlag("succubus", "club");
			writeFunction("writeEncounter('chatSelect')", "Back");
			break;
		}
		case "reward": {
			switch (checkTrust('succubus')) {
				case 61:
					writeEvent('succubus2');
				break;
				case 66:
					writeEvent('succubus3');
				break;
				case 71:
					writeEncounter('dateSetup');
				break;
				case 78:
					writeEvent('succubus4');
				break;
			}
			raiseTrust('succubus', 5);
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "breakfast": {
			for (trustIndex = 0; trustIndex < data.story.length; trustIndex++) {
				if (data.story[trustIndex].index == "succubus") {
					data.story[trustIndex].encountered = false;
					console.log(data.story[trustIndex]);
				}
			}
			writeEvent('succubusBreakfast');
			addFlag("succubus", "breakfast");
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "dateSetup": {
			raiseTrust('succubus', 1);
			writeSpeech("succubus", "demon.jpg", "So, you ready for your reward?");
			writeSpeech("player", "", "Absolutely. What's on the agenda?");
			writeSpeech("succubus", "demon.jpg", "Hehe, close your eyes.");
			writeSpeech("player", "", "Okay. I'm ready anytime.<br>... succubusF?");
			writeText("After a few moments of silence you open your eyes back up. succubusF is nowhere to be seen.");
			writeSpeech("player", "", "Where... What's this?");
			writeText("You pick up a scrap of paper with some pencil scrawlings on it. It's an address and a message from succubusF. It's some restaurant in the shopping district.");
			writeSpeech("succubus", "demon.jpg", "Surprise! You were expecting something really lewd, huh? I figured I'd mix things up this time and maybe see if I can give you something a little more fulfilling than a quickie. I feel a little bad for that awful breakfast, lemme make it up to you.");
			writeText("It's signed with a cute little pink heart.");
			writeSpeech("player", "", "Aww... Well, no use being disappointed now. I should get to bed and head out tomorrow.");
			break;
		}
		case "date1": {
			raiseTrust('succubus', 1);
			passTime();
			writeSpeech("player", "", "Hey, succubusF! Over here!");
			writeText("He's in disguise, looking pretty different from usual. He's got a pretty dour look on his face and it doesn't fade as he walks over to you.");
			writeBig("images/succubus/date1.jpg");
			writeSpeech("player", "", "Well, you certainly look excited.");
			writeSpeech("succubus", "", "I've been having trouble keeping this look intact lately. I gotta keep a straight face or I'll be outed in public. I'm ready to have a good time, promise.");
			writeSpeech("player", "", "If you say so. So, you ready to eat?");
			writeSpeech("succubus", "", "Eeeh. I'd rather you just have a good time. I don't eat, remember? I wanna treat you today, I'm more than just a jizz-sock with aphrodisiac spit. I'll sneak you bits of my share so that nobody suspects anything.");
			writeText("...");
			writeText("The two of you have a pretty nice time at the restaurant. succubusF is still trying to keep composed, it does bring down the mood a little.");
			writeBig("images/succubus/date2.jpg");
			writeSpeech("succubus", "", "That was... A little less nice than I was expecting. Did you have a good time a least?");
			writeSpeech("player", "", "Sure. Maybe we should go to a movie or something next time.");
			writeSpeech("succubus", "", "Next time? I'm surprised you'd wanna go on another date like this one. I underestimated how excited I'd be today, it's taking a lot not to drop the act.");
			writeSpeech("player", "", "Maybe you just need some training. Bathroom?");
			writeBig("images/succubus/date3.jpg");
			writeSpeech("succubus", "", "What part of 'I'm more than just a jizz-sock' don't you get? I want us to get along better, we can't just spend all out time together making like a pair of gay rabbits.");
			writeSpeech("player", "", "Says who? You saying no?");
			writeSpeech("succubus", "", "... Fine.");
			writeFunction("writeEncounter('date2')", "Head into the bathroom");
			break;
		}
		case "date2": {
			writeEvent('succubusDate1');
			writeFunction("writeEncounter('date3')", "Continue");
			break;
		}
		case "date3": {
			writeEvent('succubusDate2');
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "missionStart": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="images/locations/newDayMorning.jpg" usemap="#roomMap">
				</div>
			`;
			addFlag("succubus", "mission");
			//loadCharacter('demon');
			writeSpeech("succubus", "demon.jpg", "Wake up. Wake the fuck up right now. <br>... Please? ");
			writeSpeech("player", "", "Ugh... This is a much less pleasant way to wake up then bacon. ");
			writeSpeech("succubus", "demon.jpg", "No joking around, I fucked up. I fucked up real bad. ");
			writeSpeech("player", "", "Alright, who's dead? ");
			writeSpeech("succubus", "demon.jpg", "Me, if you don't help me out of this. ");
			writeText("You sigh as you get up and start getting dressed. succubusF only stares at your dick a little as you get dressed, this must be really serious. ");
			writeSpeech("succubus", "demon.jpg", "Listen, I fucked up. After we had our fun last night I went to have a nice catnap. Rookie mistake, I know, never sleep on a full prostate. I ended up having a very nice dream, you were in it so this is kinda your fault too, and... And I maybe wasted this month's collection.");
			writeSpeech("player", "", "Ah, dumped your collection in your sleep. So what, we fuck all day?");
			writeSpeech("succubus", "demon.jpg", "Lucy's sake dude, take this seriously. You're great but not 'entire month's soul energy collection in a day' good.");
			writeSpeech("player", "", "So what's the damage?");
			writeSpeech("succubus", "demon.jpg", "Normally not too bad, I'd get yelled at and punished for a week, maybe chastity maybe parasites, whatever they think will motivate me. The problem is that this is maybe... Not the first time I've missed my quota. Which means they'll check to see if I've got a splurting fetish.");
			writeSpeech("player", "", "I still don't see the problem.");
			writeSpeech("succubus", "demon.jpg", "They'll look into where I've been to make sure I haven't been getting my boi-hole pounded off the clock, and to make sure I'm not stashing stuff. Everywhere I've been, that means here, that means a high ranking demon in your house. One misplaced tissue and they'll see what a gold mine you are. <br>And believe me, these are the kinds of guys who can and will beat off a dead horse, what do you think they'll do to a cash cow like you?");
			writeSpeech("player", "", "Fuck.");
			writeSpeech("succubus", "demon.jpg", "Now you've got the picture! Life of luxury, demon babes on your cock twenty four seven. Sure it'd be fun day one, but what about when they start testing fetishes to see what makes you tick? You don't got a diaper fetish, but they sure as hell are gonna make sure of that before they agree you don't have one. Worst of all we'll never see each other again!");
			writeSpeech("player", "", "What do we do?");
			writeSpeech("succubus", "demon.jpg", "Okay, I've got a plan. It's a good plan, but you maybe won't like it. Maybe! Because it's a good-");
			writeSpeech("player", "", "Spill it, bat-slut!");
			writeSpeech("succubus", "demon.jpg", "Okay so collection time is at midnight. All we need to do is get a month's worth of soul energy in a few hours. This is a last resort kind of thing; we steal it.<br>I know another demon in the city, real cute, just your type. I maybe pretend you're some pathetic jizzpump I found and... Well, you don't need to know the rest. You work your magic and we get their stuff.");
			writeFunction("loadEncounter('demon', 'intro1')", "Agree");
			writeSpeech("player", "", "What's plan B?");
			writeSpeech("succubus", "demon.jpg", "Plan B is that I run. They won't bother searching here if I flee the town, they'll just think I'm abandoning my post. I'll get out of the country where some people I know can keep me safe. <br>This kinda counts as self-sacrifice, maybe heaven will take me in and I'll work as a maid somewhere.");
			writeFunction("loadEncounter('succubus', 'missionRefusal')", "Go with plan B");
			break;
		}
		case "missionRefusal": {
			setTrust('succubus', 2);
			writeSpeech("player", "", "I'm not going any deeper. This is too far, I can't be looking over my shoulder for satan-");
			writeSpeech("succubus", "demon.jpg", "Lucy.");
			writeSpeech("player", "", "Whatever. I'm sorry, succubusF.");
			writeText("He puts on a tough face and gives you a familiar bratty smile.");
			writeSpeech("succubus", "demon.jpg", "Hey, it's fine, ya little bitch. This is my fault anyways. Listen, we don't have long then. They'll realize what I'm doing and send a fury after me, and those harpies are fast.");
			writeSpeech("player", "", "succubusF...");
			writeSpeech("succubus", "demon.jpg", "I'll be alright, okay? I know what I'm doing. I planned some exit strategies a few years back when I was in a darker place, now they're paying off. I won't see you around, no cellphones in heaven and if I'm caught, well, no reception down there either. <br>It's been real fun, okay playerF? Don't go sobbing like a bitch when this booty goes over the horizon.");
			writeSpeech("player", "", "I'll miss you, succubusF.");
			writeSpeech("succubus", "demon.jpg", "Hah! Starting the waterworks early, huh?");
			writeText("succubusF climbs onto your windowsill.");
			writeSpeech("succubus", "demon.jpg", "I'll miss you too.");
			writeText("And he flies away, out of your life forever. He doesn't turn back, but you do see him rub his face a few times before he's out of sight.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "missionF": {
			writeSpeech("succubus", "demon.jpg", "I'm baaaack~!");
			writeSpeech("player", "", "Welcome back. How did that collection thing go?");
			writeSpeech("succubus", "demon.jpg", "Anticlimactic. Usually it's a three-hour milking session to make sure they got everything, but this time I just handed off the vial and paid myself off for a three-month vacation.");
			writeSpeech("player", "", "That much, huh?");
			writeSpeech("succubus", "demon.jpg", "Yep. And the best part? Demons don't ask questions. Hey, guess who I found jerking off in some back-alley?");
			writeSpeech("player", "", "I don't think I wanna know.");
			writeSpeech("succubus", "demon.jpg", "Oh, you do. It was Meph! He's totally broken now, he's siphoning out his nest egg just to jerk it out with his tiny widdle winkie on the street. I wouldn't be surprised if he hires a succubus (male) from his collection to rim him all day. I'd imagine somebody new will step in to replace him though. But that's not even the best part, you ready?");
			writeSpeech("player", "", "I'm barely conscious.");
			writeSpeech("succubus", "demon.jpg", "Ta-daaah~");
			writeText("succubusF holds up his phone to display his latest texts.");
			writeSpeech("demon", "", "I need to see *him again. I'll do anything.");
			writeSpeech("demon", "", "Please");
			writeSpeech("demon", "", "I can pay you");
			writeSpeech("demon", "", "I'll suck you off");
			writeSpeech("demon", "", "Please respond");
			writeText("It goes on for about thirty more texts, each more desperate than the last.");
			writeSpeech("player", "", "How the mighty fall, huh?");
			writeSpeech("succubus", "demon.jpg", "Yeah. Watch, I'm gonna text him 'build up a ton of energy, then wait bottomless by'... Where do you want him? It's gotta be in public, we don't want him knowing your address otherwise he'll just start living here all day.");
			writeSpeech("player", "", "You really want me involved with him again?");
			writeSpeech("succubus", "demon.jpg", "If you don't wanna, I'll totally respect that.<br>Psyche! He's a prince of Hell! You know how much cred you could get by making him your bitch? You bite the dust and go plummeting into that fiery hole, only to be caught on cushions by Lucy herself!");
			writeSpeech("player", "", "This seems risky, I legit think I barely survived last time.");
			writeSpeech("succubus", "demon.jpg", "He's a broken bitch now, don't worry~<br>But for reals, I gotcha. You want me to be the only boi in your life with a set of horns. If you really don't wanna, then I'll tease him myself. He's so desperate I could string him along for months watching him crack. Maybe I throw in an anonymous tip to his whores that the first person to get their tongue in his ass gets thirty years worth of energy, and maaaaybe I post our little meetup location on the net.");
			writeFunction("writeEncounter('demonAgree')", "Fine, I guess I can fuck another demon");
			writeFunction("writeEncounter('demonRefusal')", "You do you, I'm good with just the one hellspawn");
			break;
		}
		case "demonAgree": {
			setTrust('demon', 2);
			writeSpeech("player", "", "Fine, fine. How about you have him wait outside the apartment? I hate walking far during the night.");
			writeSpeech("succubus", "demon.jpg", "Afraid of getting mugged?");
			writeSpeech("player", "", "succubusF, do I look like I could take a dude with a knife? My life is a lot more valuable than that.");
			writeSpeech("succubus", "demon.jpg", "Psh, you goofball.<br>...Bitch! I mean you little bitch! What is going on with me today?");
			writeSpeech("player", "", "Distracted?");
			writeSpeech("succubus", "demon.jpg", "Yeah. I think Meph had something in the air that messes with the heads of his whores. The whole time you were up there I was... I was quaking, dude. Cold sweat, my hands were shaking like I was jerking off some ghosts, serious terror. I think it's still in me, honestly, I feel kinda sick.");
			writeSpeech("player", "", "Aww, you were worried about me?");
			writeSpeech("succubus", "demon.jpg", "Hah! You versus a prince of hell? I'd bet on you any day. Actually, I <i>did</i> make that bet, I put the rest of my life as one of Meph's little demon bitches on the line. Anyways, no sex for you tonight. Any more demon fluids on your skin and you'll wind up looking like me by the morning. Get some sleep, we'll go back to boihunting tomorrow. I'll send the text to Meph... Someday. Maybe I'll tease him a bit first. Hehe...");
			writeSpeech("player", "", "Find anyone new, by the way?");
			writeSpeech("succubus", "demon.jpg", "Uh, no! I was a little distracted today, fuckwad!");
			writeSpeech("player", "", "That's my succubusF. Good night.");
			writeSpeech("succubus", "demon.jpg", "Sleep tight, bitch.");
			writeFunction("loadEvent('system', 'newDay')", "Go to sleep");
			break;
		}
		case "demonRefusal": {
			writeSpeech("succubus", "demon.jpg", "Psh, you goofball.<br>...Bitch! I mean you little bitch! What is going on with me today?");
			writeSpeech("player", "", "Distracted?");
			writeSpeech("succubus", "demon.jpg", "Yeah. I think Meph had something in the air. The whole time you were up there I was... I was quaking, dude. Cold sweat, my hands were shaking like I was jerking off some ghosts, serious terror. I think it's still in me, honestly, I feel kinda sick.");
			writeSpeech("player", "", "Aww, you were worried about me?");
			writeSpeech("succubus", "demon.jpg", "Hah! You versus a prince of hell? I'd bet on you any day. Actually, I <i>did</i> make that bet, I put the rest of my life as one of Meph's little demon bitches on the line. Anyways, no sex for you tonight. Any more demon fluids on your skin and you'll wind up looking like me by the morning. Get some sleep, we'll go back to boihunting tomorrow.");
			writeSpeech("player", "", "Find anyone new, by the way?");
			writeSpeech("succubus", "demon.jpg", "Uh, no! I was a little distracted today, fuckwad!");
			writeSpeech("player", "", "That's my succubusF. Good night.");
			writeSpeech("succubus", "demon.jpg", "Sleep tight, bitch.");
			writeFunction("loadEvent('system', 'newDay')", "Go to sleep");
			break;
		}
		case "postQuo": {
			writeHTML(`
				sp succubus; im demon.jpg; I'm hoooome~<br>Were you lonely while I was away? Stealing from demonF is getting easier by the day. 
				sp player; What do you have for me tonight, succubusF?
				sp succubus; im demon.jpg; With a new big source of income, we should be in the green for a long time. You can have fun for as long as we want, but...
				t succubusF rummages through his bag of goods.
			`);
			if (checkFlag('succubus', 'dominance') == false) {
				writeHTML(`
					sp succubus; im demon.jpg; I stole some potions from demonF's vault! They mess with your dominance and submissiveness, wanna try 'em out?
				`);
				writeFunction("writeEncounter('dominancePrompt')", "Have some dom/sub play fun");
			}
			else {
				writeHTML(`
					sp succubus; im demon.jpg; Hey, hey, you wanna try out those dom and sub potions again tonight?
				`);
				writeFunction("writeEncounter('dominancePrompt')", "Have some dom/sub play fun");
			}
			if (checkFlag("succubus", "purified") == true && checkFlag("succubus", "shocked") != true) {
				writeHTML(`
					sp succubus; im demon.jpg; Ugh, I can still taste the air of the church in the back of my throat. How about we go out drinking?
				`);
				writeFunction("writeEncounter('succubusShock')", "Head out to a bar with succubusF");
			}
			if (checkTrust('demon') > 0) {
				if (checkFlag('succubus', 'mephF') != true) {
					if (checkFlag('succubus', 'mission') == true) {
						writeSpeech("succubus", "demon.jpg", "Hey, you play with demonF yet? He wasn't at his hotel, so I was able to swipe some stuff off him.");
						if (galleryCheck('demon1') == true) {
							writeFunction("writeEncounter('mephEnd')", "Talk about demonF");
						}
					}
				}
			}
			if (checkTrust('fitboi') == 80 && checkFlag("fitboi", "cream") != true) {
				writeFunction("writeEncounter('succubusCream')", "Talk about fitboiF");
			}
			if (checkTrust('instructor') < 80 && checkTrust('instructor') > 0 && checkFlag("succubus", "instructor") != true) {
				writeFunction("writeEncounter('succubusInstructor')", "Talk about instructorF");
			}
			if (checkTrust('camboi') < 20 && checkTrust('camboi') > 0) {
				writeSpeech("succubus", "demon.jpg", "Find out the identity of that streamer yet? I, uh, heard from an acquaintance that they react to the phrase 'bitch-boi'.");
			}
			writeSpeech("succubus", "demon.jpg", "We could also just spend the night chatting, if you wanted. Anything on your mind?");
			if (checkFlag("succubus", "excited") == true) {
				writeFunction("writeEncounter('proposal')", "Ask what's got succubusF so excited");
			}
			writeFunction("writeEncounter('chatSelect')", "Chat");
			writeFunction("changeLocation('playerHouse')", "Finish");
			if (checkFlag('succubus', 'mission') == true) {
				if (checkFlag('succubus', 'missionF') != true) {
					addFlag('succubus', 'missionF');
					writeEncounter('missionF');
				}
			}
			if (checkTrust("tomgirl") == 666 && checkFlag("succubus", "excited") == false) {
				writeEncounter("excited");
			}
			if (checkTrust("nagatoro") == 666 && checkFlag("succubus", "excited") == false) {
				writeEncounter("excited");
			}
			if (checkTrust("fitboi") == 666 && checkFlag("succubus", "excited") == false) {
				writeEncounter("excited");
			}
			break;
		}
		case "succubusShock": {
			writeEvent(name);
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "succubusCream": {
			writeHTML(`
				player I'm not getting any farther with fitboiF, got anything for me?
				succubus The cardio bunny with a tummy I wish I could lick clean? Yeah, I do actually. I swiped one of the lotions used by the staff at demonF's hotel.
				t succubusF digs through a bag comprised of fifty percent sex toys and fourty-nine percent mystical artifact. Wiggling his ass as he searches, he eventually pops back up holding a tube of lotion marked 'Stupid Bitch, #3/7
				succubus This is high quality stuff, but let me tell you, it requires one hell of a body to work on. fitboiF works out a lot, yeah? He's the primary target there unless you're willing to wait years for this to take effect on someone else.
				player You should know I'm not that patient. What exactly is it?
				succubus She-cream oil, it's a human recipe actually. It pops up every so often, I think it's some kind of curse on humanity that some kinky sap will invent it and totally ruin themselves and everyone they know with the stuff.
				player Sounds dangerous.
				succubus Hehe, it's an old classic. Precum generation goes up dramatically, and sensitivity goes absolutely bonkers. It's so potent that most bosses won't even let succubi use it as lube~
				player If it's banned from use by succubi-
				succubus Hey, don't worry. This stuff is watered down to hell and back. Apparently demonF's a real cheapskate. Although uou know how many souls I'd have to sell to get my hands on the pure stuff?<br>Anyways, be seriously careful though. If you combined this stuff with demonic corruption...
				t succubusF shudders and his hand tightens around the tube.
				succubus Let's just say I wanna stay your prinary boytoy, yeah? I'm not sure we need a chocolate buttslut who's even thirstier than I am.
			`);
			addFlag('fitboi', 'cream');
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "dominancePrompt": {
			if (checkFlag('succubus', 'dominance') == false) {
				addFlag('succubus', 'dominance');
				writeHTML(`
					t succubusF holds up two small potion bottles with the star signs of Virgo and Aries on the front.
					sp succubus; im demon.jpg; Ta-da~! These two potions drastically increase dominance and submissiveness. It's a temporary thing, mostly for sex.
					sp player; As expected of a sex demon's cache.
					sp succubus; im demon.jpg; Yep! And I also brought some stuff to play with as well. I'm a sub at heart, but I'm also a bit of a wimp, honestly so the potion should make me a little more comfortable with some of the things I brought.
					t succubusF brings out a small box of outfits, some pink egg vibrators, and other various things. One of them catches your attention for a second, they're...
					sp player; Are these... Bridal gloves... But for your feet?
					t They're large stockings with a ring for the middle toe that expose most of the feet. As you inspect them succubusF blushes almost as hard as he does when he splurts on himself.
					sp succubus; im demon.jpg; Well, ah, you only need to drink a little of the potions to get them working, so... I was maybe thinking I could try out the dominant one, just once? I know you're usually on top... Ah, it's silly. Nevermind, I also brought some rope you can use on me, and...
					t He rambles on about what he brought with him as you mull over his words. If you only need to drink a small amount then you effectively can use the potions as much as you want with the demon boi. What will you do tonight?
				`);
			}
			else {
				writeHTML(`
					t succubusF holds up two small potion bottles with the star signs of Virgo and Aries on the front.
					sp succubus; im demon.jpg; Hehe, now for some fun on the other side, right? I brought toys too, so which one do you want tonight?
				`);
			}
			writeFunction("writeEncounter('succubusPlayerDom')", "Take the dom potion");
			writeFunction("writeEncounter('succubusPlayerSub')", "Take the sub potion");
			writeFunction("writeEncounter('postQuo')", "Change your mind");
			break;
		}
		case "succubusPlayerDom": {
			writeEvent(name);
			addFlag("succubus", "shocked");
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "succubusPlayerSub": {
			writeEvent(name);
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "oldCorruption": {
			writeHTML(`
			sp player; I was hoping to talk to you about the demonization process.
			sp succubus; im demon.jpg; Oh yeah! You corrupt anybody yet?
			sp player; I haven't. Honestly, turning people into whores who'll sleep around...
			sp succubus; im demon.jpg; Ehehe, don't worry about that, *master. With a direct line into demonF's vault, we're set for life! You could have a gaggle of girlyboys for a harem and you'd be... Well...
			sp player; Is there a problem?
			sp succubus; im demon.jpg; Yeah, it's you actually. Listen, you're a stud, I won't deny it. But entertaining more than one demon a day is... Risky. Three? You're tempting fate. Four is a very enjoyable way to commit suicide.
			t succubusF rubs his chin, deep in thought.
			sp succubus; im demon.jpg; There <i>is</i> a way. We could sap them of their masculinity, whatever they have anyways, and leave them on the verge of corruption. If you do decide to take the leap with me then I turn them and you get a demon harem. <br>And if you change your mind they'll stay normal humans.<br>Well, their cocks would be a little smaller, and they might squirt from a good spanking, but that's not a big deal if they're already good buttsluts.
			t succubusF smiles a catlike grin.
			sp succubus; im demon.jpg; Hehe... Maybe you should start with that feisty one, tomgirlF I think his name was? He'd be a perfect guinea pig. 
			`);
			addFlag('succubus', 'newCorruption');
			writeFunction("writeEncounter('postQuo')", "Finish");
			break;
		}
		case "newCorruptionPrompt": {
			if (checkSkill("corruption") > 7) {
				writeSpeech("succubus", "demon.jpg", "Oh ho? You wanna learn how to corrupt souls? Well, it's one of the first, non-sexual things I was taught.<br>It'll take me awhile, but I can teach you. I need to warn you though...");
				writeText("succubusF leans in close.");
				writeSpeech("succubus", "demon.jpg", "You're turning people who trust you, people you have control over, into semen demons.");
				writeHTML(`
					sp player; What, will they sleep around or something?
					sp succubus; im demon.jpg; Ehehe, don't worry about that, *master. With a direct line into demonF's vault, we're set for life! You could have a gaggle of girlyboys for a harem and you'd be... Well...
					sp player; Is there a problem?
					sp succubus; im demon.jpg; Yeah, it's you actually. Listen, you're a stud, I won't deny it. But entertaining more than one demon a day is... Risky. Three? You're tempting fate. Four is a very enjoyable way to commit suicide.
					t succubusF rubs his chin, deep in thought.
					sp succubus; im demon.jpg; There <i>is</i> a way. We could sap them of their masculinity, whatever they have anyways, and leave them on the verge of corruption. If you do decide to take the leap with me then I turn them and you get a demon harem. <br>And if you change your mind they'll stay normal humans.<br>Well, their cocks would be a little smaller, and they might squirt from a good spanking, but that's not a big deal if they're already good buttsluts.
					t succubusF smiles a catlike grin.
					sp succubus; im demon.jpg; So, what do you say? Interested in a harem of boys who are just as hungry as I am? 
				`);
				writeFunction("writeEncounter('newCorruptionAgree')", "Agree");
				writeFunction("writeEncounter('postQuo')", "Decline");
			}
			else {
				writeSpeech("succubus", "demon.jpg", "Oh ho? You wanna learn how to corrupt souls? Well, too bad. You aren't corrupted enough to do something like that.");
				writeHTML(`
					sp player; I thought you said my soul was inky black, or something like that.
					sp succubus; im demon.jpg; Yeah, but this is different. Being lusty doesn't mean you're seeped in the darkness of hell.<br>It's like, black tea doesn't have any tar in it, but they're both black.
					sp player; So what should I do?
					sp succubus; im demon.jpg; Ehe, that's no big deal. Just 'dip your teabag' in a few sources of demonic energy, if you know what I mean.
					sp player; I think I-
					sp succubus; im demon.jpg; Like my mouth, or maybe my ass. Hey, we could do a little potion play if you want, and-
					sp player; I got it.
				`);
				writeFunction("writeEncounter('postQuo')", "Go back");
			}
			break;
		}
		case "newCorruptionAgree": {
			writeSpeech("succubus", "demon.jpg", "Well, the more the merrier! C'mere.");
			writeText("succubusF pulls you close, his lips inches from yours.");
			writeSpeech("player", "", "Ah, fuck!");
			writeText("You pull back at a burning sensation on the back of your right hand, there's a dark mark there that quickly fades away.");
			writeSpeech("succubus", "demon.jpg", "Sorry, probably should've warned you, but you look like you aren't super good at dealing with pain.<br>Anyways it's super easy. Just focus on where the mark was and it'll come back, allowing you to corrupt people.<br>They need to be deep, and I mean balls-deep in love with you though. Only the most broken bois may apply.");
			writeSpeech("player", "", "Neat, thanks.");
			writeSpeech("succubus", "demon.jpg", "... You really are an oddball, *Master.<br>Now, this shouldn't be an issue for you, but if you want to corrupt anyone, make sure you stay... You.");
			addFlag('succubus', 'newCorruption');
			writeSpecial("You can now corrupt certain characters! Doing this requires they be fully in love with you, and that you are mostly corrupt.");
			writeFunction("writeEncounter('postQuo')", "Finish");
			break;
		}
		case "tomgirlCorruption": {
			writeHTML(`
			sp succubus; Wow, you really did a number on him.
			t You jump a little as you hear succubusF's voice from behind your shoulder. You sigh and pull out of tomgirlF's ass with a *schlorp*.
			sp succubus; Good work, I'll make sure nothing happens to him overnight, mess with his memories a little. He'll think that the shrinkage of his dick is a result of swearing loyalty to you. He, uh, won't really be able to get off with his hand anymore though. And sterility... Well, it doesn't really matter if it'll just splatter onto the floor while you pound his ass.
			sp player; He should be his usual self tomorrow then?
			sp succubus; Yep! And I can pull the trigger on his full transformation afterwards.<br>Let's see... No special powers, but I'm sure he has what it takes to make a good member of the harem.
			`);
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "nagatoroCorruption": {
			writeHTML(`
				sp succubus; Damn, you really lucked out with this one.
				t succubusF's voice shocks you out of your stupor. You set the bunnyboi down on a chair. He's completely lost conciousness, but cum is still leaking down between his thighs.
				sp succubus; Leave him with me, I'll clean him up and make sure he won't freak out too much about his body undergoing some changes. <br>Huh, he did not have a lot of masculinity in him, that load was the absolute last of it. He'll probably never have an erection again, not that it matters, because... 
				t succubusF gently touches the bulge of nagatoroF's flaccid, small bulge. nagatoroF's body twitches and he lets out a moan. His eyes flicker open for just a moment, but it's just reflexive, he's still out cold.
				sp succubus; He's got some amazing potential as a succubus, I'm actually a little jealous. Although his tiny cock's sensitivity will be through the roof, geez. Even if he can't get hard it's gonna be a bitch to keep him from jerking it from the moment he wakes up...
				sp player; But he'll be fine?
				sp succubus; Yep! And I can turn him into a proper demon anytime. He might even have some special powers, some people fit into the succubus role so naturally they could turn a nun into a whore day one. <br>Anyways, out so I can lock the door. The place will be empty soon, yeah? <br>... Hey, would he mind if I swiped some of these outfits?
				sp player; He would absolutely notice.
				sp succubus; Fiiine~<br>Maybe if I traded one of them for one of my special ones so he can get a taste of the good life coming his way... Hmm... The schoolgirl one looks cute.
			`);
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "mejiCorruption" : {
			writeHTML(`
				sp succubus; Looks like you two had some fun... Digging his outfit by the way.
				t succubusF's voice catches you a bit off-guard as you look back, seeing him leaning against the wall casually.
				sp succubus; He's got some good potential - definitely not to <i>my</i> level of course, but it's respectable. I'll make sure the changes to his body are a bit on the gradual side.
				t succubusF chuckles slightly, shaking his head.
				sp succubus; Not that some of those changes will change much for him, seeing as he's already getting off with just his ass already.
				sp player; And he'll be acting like his usual self tomorrow?
				sp succubus; Yup. I can set off his full transformation later.<br>Let's see... No unique powers I can detect, but it's not like you wanted him for that. I'll just mess with his memories real quick...
			`);
			writeFunction("changeLocation('playerHouse')", "Leave succubusF to it");
			break;
		}
		case "succubusClub": {
			writeEvent(name);
			passTime();
			unencounter("nagatoro");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "succubusInstructor": {
			writeHTML(`
				define succubus = sp succubus; im demon.jpg;
				player I'm close to having control of the school, but if you're free I could use some support.
				succubus Oh?
				player I need to be able to hypnotize a bunch of girls at once. Maybe you could help me out? Call a bunch of your demon friends or something.
				succubus ... You think I have friends?
				player ... Contacts?
				succubus Nope.
				player Acquaintances?
				succubus Nobody but you, and people I hate. But fuck 'em! With what I've got from demonF's vault, a bunch of hormonal teenagers will be a cakewalk. Hehe...
				t succubusF Goes to his bag and pulls out a glass... Something. It defies description, the only thing you can actually be sure of is that it looks like succubusF is holding upside-down.
				succubus With this, and a little bit of energy, I can manipulate someone's common sense. Basically it inverts someone's normal morals or preferences, specifically desires someone wants to keep hidden.<br>Let's say you were into the oh-so forbidden act of hand-holding. I tilt like so while thinking of you...
				t succubusF tilts the... Thing... And reality begins to wobble.
				succubus And suddenly you'd hold hands in public, not caring how scandalous you look~<br>And back to normal. Temporary, but effective.
				player How temporary?
				succubus Well, you remember what happened, but the human mind is kind of a pushover. If you feel enough shame it breaks you, leaving you permanently in the manipulated state rather than accept what happened.<br>I think you know where I'm going with this~
				player So I call you to the gym, you work your magic-
				succubus And then you work yours! It'll be nice to see you in action, *master.<br>I'll head out and get ready, see you there~
			`);
			addFlag("succubus", "instructor");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "excited": {
			writeHTML(`
				define succubus = sp succubus; im demon.jpg;
				im profileD.jpg
				succubus Hello *master~!
				t Upon your windowsill is your bubbly chocolate companion, looking quite chipper.
				succubus The others you've drained are doing pretty well! They'll slot in perfectly to their new lives, hopefully soon! And~<br>That might be coming soon~!<br>So, so, what will we be doing tonight?
			`);
			addFlag("succubus", "excited");
			writeFunction("writeEncounter('postQuo')", "Continue");
			break;
		}
		case "proposal": {
			writeHTML(`
				define succubus = sp succubus; im demon.jpg;
				player So, what's got you so excited tonight?
				succubus Hehe, this~!
				t He pulls out another bottle of cloudy fluid.
				succubus This right here is the crown jewel, or at least the pearl necklace, of demonF's collection. Enough of the stuff that just drinking a sip would boost me up to at least the rank of incubus, maybe even higher.<br>And if you drank this after being transformed, well... You wouldn't have to go through a period with my bodytype on your way to being a prince of hell~
				player So there's nothing left to wait for...
				succubus That's right~!<br>Well, nothing I can't handle myself. Finding a place for you to relax and adjust to your new body, and actually making the plunge on the others you've corrupted...
				player Adjust?
				succubus Yeah, you'll be out of commission for a while. I couldn't walk for a week after, and that's also on top of the month-long coma.<br>Ah! But I had a pretty shit overseer, it'll be way easier for you.
			`);
			writeFunction("writeEncounter('accept')", "Alright");
			writeFunction("writeEncounter('refusal')", "Maybe another night");
			break;
		}
		case "accept": {
			writeHTML(`
				define succubus = sp succubus; im demon.jpg;
				t You take a deep breath.
				player Alright. Let's go through with the transformation.
				succubus Really?! You're sure, like really sure?
				player Yeah, will it hurt?
				succubus Not at all. Well, it might, depending on how you define 'hurt', but don't worry. It'll all be worth it.<br>Don't worry *master, I'll take care of everything. You just relax, okay?
				t Looking into succubusF's eyes you suddenly feel weak at the knees.
				succubus Don't worry. Relax.<br>I need to draw it all out, but you'll only be empty for a moment.
				t There's a growing burning sensation coursing through your veins, but quickly you realize it isn't pain, but an overloading pleasure.
				succubus You helped me, now it's my turn.
				t Darkness swallows your vision, and you feel empty. Lights flash into existence as phantom sensations assault your fading consciousness, soon the empty black void is replaced with colors and scents beyond description.
				t You feel something leave your body, something important, but letting it go opens your mind to an overwhelming euphoria.
				t And then you feel as though you are drowning, and the sensations grow as your lungs, your very soul, take in whatever floods you.
				...
				t Every few moments the assault on your being fades for just a moment. The briefest flicker of alertness as your mind rejoins the waking world.
				t Only to fade away yet again as you feel a gentle hand on yours, and then another.
				...
				succubus Y... ke and s...
				t Time must be passing... Yet without any kind of way to tell, it's like you were dropped from an airplane with a blindfold on.
				succubus Wake up... To a new world... Yours...
				...
				t You open your eyes, feeling like you've just finished a quick nap, a small blip of consciousness. 
				t But the fact that you're in an unfamiliar room suggests otherwise. It's one of demonF's hotel rooms. And across from you is a dozing succubusF.
				succubus ... Hm? Mmm, you awake? For real this time, or just dreaming with your eyes open again?
				player I-
				t At the very first syllable you utter succubusF shoots to full awakeness.
				succubus You are! You're awake! Good morning!
				t Across from you is a mirror, so you can at least see you look the same. But you feel... Different.
				succubus You've been out for weeks. I mean, you did jump right up the ranks at least.<br>Ah, don't freak out about the room. demonF okayed us staying here. Since most of his reserves are inside you now, he's pretty much just the owner of this place in name now. Oh, there's so much to do... Gotta get the outfit, and...<br>Hey, hey, can you walk?
				player I think... Yeah, I feel fine, actually.
				succubus You'd better. All that time and energy spent on you, you should have the stamina of a racehorse-turned stud.<br>Alright, out of the room with you.
				player Why?
				succubus It's a surprise! Listen, the other bois are here too, go hang out with them, let them know you're alright, and come back here and I'll be ready. Okay?<br>You'll know where they are, trust me.
			`);
			data.player.time = "Morning";
			addFlag("succubus", "hotelGood");
			for (i = 0; i < data.story.length; i++) {
				data.story[i].encountered = false;
			}
			writeFunction("changeLocation('hotel')", "Begin searching");
			break;
		}
		case "refusal": {
			writeHTML(`
				define succubus = sp succubus; im demon.jpg;
				player Maybe another time, alright?
				succubus ...
				player succubusF?
				succubus Ah, yeah, sorry! Of course, there's still way more to do before you make the plunge. Another time, just not right now.<br>Patience is a virture, right?
				player Yeah. How about we-
				succubus Actually, I, uh... I need to go.
				t His voice is a little shaky. You pat his head, but he turns away from you.
				succubus More fun tomorrow night, alright? I need some fresh air.
				t He leaves through the window, and suddenly you're alone in your room.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "hotelGoodFinish": {
			writeHTML(`
				define succubus = sp succubus; im demon.jpg;
				succubus So, you finish catching up with your harem?
				player Things are gonna change a lot, aren't they? No more worrying about taking over the town.
				succubus Hey, perk up buttercup. There's plenty of men and women who'd give the world to be a part of this place with you. Speaking of, go ahead and come in.
				t You push open the door.
				im choc (26).jpg
				succubus Welcome home~!<br>Hehe, I've always wanted to say that~
				t succubusF quickly embraces you in a hug.
				succubus You know, a *guy like you could've had anything *he wanted. I mean, you probably will, but I'm glad that for now you're here with me.<br>I can be a little rough around the edges, and hell's bells when I get my fix out of you I'll be swearing up a storm, but just for now... I love you.
				player I l-
				succubus Ah ah ah~<br>I wanna hear it with your actions tonight. I watched over your body every night since we made the plunge, let's just say...<br>No, I'll be direct. succubusF's hungry for some honeymoon fucking. 
				...
				im choc (23).jpg
				succubus Hah, fffuck, you've gotten bigger, haven't you?
				t You offered to take the lead, but succubusF insisted on this position.
				im choc (24).jpg
				succubus Ggghh.... Fucking hell, it's stronger than before... At least-
				player I'm still feeling fresh, let's go for another.
				succubus Holy... Alright, that's what I wanna hear! Let's... Let's get cleaned off, alright?<br>It's so weird for you to be outlasting me by so much... I maybe made a mess over here already... I might need a break.
				...
				im choc (29).jpg
				succubus Ah~! Rougher~!
				player I thought you needed a break?
				succubus Yesh~! Shtarting the shower wash long enough~!
				im choc (31).jpg
				succubus CummiiiIIING~! M-more~! Love you~!
				...
				im choc (32).jpg
				succubus Hah... Aah~<br>It'sh sho thick...
				t You've absolutely plastered succubusF's face, yet... You still feel energized. Empowered beyond all reason.
				succubus M-more?
				...
				im choc (7).jpg
				t succubusF gurgles intermittently, his nonsensical babble reaching t's peak whenever his overwork cock twitches, unable to still even another drop but still causing succubusF's body to twitch with pleasure.
				t But somehow, you're still going strong. This was the plan, after all. This hotel has undergone a shift while you were changing, and it's all for you.
				succubus Haaaaghf~
				t This one's exhausted, but your harem isn't for show. Maybe that receptionist, maybe demonF, maybe more. You pick up succubusF, ideas racing through your mind. No longer bound by mortal limitations, the city, the world is your oyster.
				t And you have no doubt succubusF will be by your side all the way.
			`);
			writeFunction("writeEncounter('hotelGoodEpilogue')", "Continue");
			break;
		}
		case "hotelGoodEpilogue": {
			addFlag("succubus", "complete");
			writeHTML(`
				define succubus = sp succubus; im demon.jpg;
				define tomgirl = sp tomgirl;
				define nagatoro = sp nagatoro;
				define demon = sp demon;
				t The days blend together in the following months, then years. No longer bound to your humanity your time in the hotel has become what feels like an endless vacation surrounded by your harem.
			`);
			if (checkTrust("tomgirl") == 666) {
				writeHTML(`
					...
					im images/tomgirl/8-2.jpg
					t tomgirlF proved to be a loyal concubine, always eager to engage with you romantically. Easily pushed to jealousy, competitions between him and the other members of your harem spark often.
					im images/tomgirl/8-6.jpg
					t These competitions often end messily.
				`);
			}
			if (checkTrust("nagatoro") == 666) {
				writeHTML(`
					...
					im images/nagatoro/016.jpg
					t nagatoroF's seductive skills and talents only improved with his corruption. Every so often he'll vanish from the hotel, only to bring back a group of excited bois eager to transform themselves.
					im images/nagatoro/hotelGood.jpg
					t Of course, whenever these excursions go on for a little too long, he takes some time to indulge his teasing habits by letting you know how the process is going.
				`);
			}
			if (checkTrust("fitboi") == 666) {
				writeHTML(`
					t ...
					im images/fitboi/248.jpg
					t And that makes yet another anal orgasm while his cocklette isn't even a semblance of erect. fitboiF had no trouble fitting into the new hotel, and even helped a few of the newer guests feel at home with their newly corrupted bodies. He got a lot of attention because of his hair especially.
					im images/fitboi/249.jpg
					t Of course, his talents were more than just scalp deep.
					im images/fitboi/250.jpg
					t Really, fitboiF has a solid place in your harem that can't be beat, mostly because of his boundless endurance. Few other members can hope to keep up with your higher-energy days.
					im images/fitboi/251.jpg
					fitboi Deeper, deeper, deepEEER~! I want to feel it in my fucking stomach! 
					im images/fitboi/252.jpg
					t And fewer still can say they hope to someday outlast you.
				`);
				addFlag("fitboi", "complete");
			}
			if (checkTrust("camboi") == 666) {
				writeHTML(`
					t ...
					camslut Ehehe, welcome back my fellow sissies~!
					im images/camboi/007.jpg
					t Informally known as "Hell's Idol" among the hotel, camboiF may not have any talent for storing energy, but he's proven to be the best at gathering new recruits to the hotel by far.
					im images/camboi/008.jpg
					t Playing the "role" of a sissified streamer-turned-demon, camboiF's fans grew into the thousands and quickly shot up much higher, helped along by a few of the more technical and devoted among the hotel's staff.
					im images/camboi/009.jpg
					t And now that you're back in the picture, these won't just be solo streams anymore.
					im images/camboi/010.jpg
					camslut Ehehe, I leaked so much so quickly~! Now, I'd like to introduce someone <i>very</i> special. Someone all of you are going to get to know a lot better from now on~!
				`);
				addFlag("fitboi", "complete");
			}
			if (checkTrust("papi") == 666) {
				writeHTML(`
					t ...
					im images/papi/204.jpg
					t The duo fit into your new harem perfectly, although papiF certainly helped her son transition into his new life.
					t For once, papiF was the responsible caretaker as sonF could barely keep himself from constantly milking his corrupted and supercharged prostate constantly.
					im images/papi/206.jpg
					t sonF had to learn to adjust to his new body the hard way. Luckily, it was also the fun way. Like a good pupil he now keeps his masturbation to reasonable levels so he's hot and ready for you whenever you call.
					im images/papi/210.jpg
					t papiF meanwhile kept proving herself invaluable by becoming the defacto mother of the hotel. As it turns out, demons don't often have the luxury of spending time with someone who loves them like a good parent should. For emotional or physical support, papiF is there.
					t That said, both of them aren't always in sync. Days like today they make a game of trying to outperform eachother to keep up with your lust.
					im images/papi/213.jpg
					t And when they play, you're always the winner.
				`);
				addFlag("fitboi", "complete");
			}
			if(checkTrust("serious") == 666){
				writeHTML(`
					t ...
					t As for seriousF, he got used to his life in hotel in no time, making friends here and there. Though that didn’t stop him from wandering in and out as he wishes. 
					serious <i>Oh ya, here are the reports for the week, not that you read any of em anyway.</i>
					t Apparently he has been using those “strolls” to scout for bois that would be potential additions to your harem. With the information he gathers from his friends in and out of the hotel he manages to convince several people almost every day.
					im images/serious/finale1.jpg
					t And always being eager for the rewards of his hard work.
					im images/serious/finale2.jpg
				`)
			}
			if (checkTrust("demon") > 0) {
				writeHTML(`
					...
					im images/demon/032.jpg
					t demonF's participation in your harem was spotty at first, he'd regularly claim you'd gone soft as a result of all your harem's pampering. It took a while, but eventually you found his weak point.
					im images/demon/039.jpg
					t Always trying to goad you into roughness, your new form has given you ample ability to resist his taunting. It turns out that a slow-burn, patient fuck leaves him completely on edge. Your time with him often lasts entire nights as you slowly chip away at his attitude problem.
				`);
			}
			writeHTML(`
				...
				im images/succubus/choc (12).jpg
				t succubusF has been by your side nearly every moment of every day. Though he still harbors worries that something will break apart your idyllic life, you've found some fun in pushing him to step outside his comfort zone. Getting him to go out in his true form was quite the big moment for him.
				im images/succubus/choc (3).jpg
				t And of course you're always eager to reward him for good behavior.
				...
				t There's no telling what the future holds, but daily life right now is a carnival of indulgence.
				t But for now, this is...
			`);
			writeFunction("loadEncounter('system', 'credits')", "The End");
			removeFlag("succubus", "hotelGood");
			addFlag("succubus", "complete");
			break;
		}
		case "succubusHotelBad": {
			writeHTML(`
				im 008.jpg
				black succubusF's adjustment has been... Strained. At first they refused to participate, sure you'd wake up to set this matter right. Like all the whores here he's certainly got the charm to draw in men, and his naivety is useful to ensure his targets fall for him.
				im 011.jpg
				black I suppose that's the advantage of being experienced... Still, of all our newest batches of girls, succubusF is by far the least efficient. Only four targets corrupted since you began your change.<br>I, on the other hand, have personally drawn in sixteen.
				im 021.jpg
				black His prey eventually do fall, their masculinity draining away and they find their sessions growing shorter and shorter, until they've been completely drained.<br>Callously, succubusF will usually dump them, and then leave other whores to do the dirty work of the actual corruption.<br>Let's just say... He hasn't made any friends here. His former targets in particular were quite eager to join in his retraining.
				t Stupid Bitch suddenly realizes something, and closes the feed to bring up another file.
				black See, eventually we got tired of his attitude. Always so sure you'd wake up, pick him as your favorite, and he'd never have to work another day. Well...
				im choc (20).jpg
				black After that day, well, after those days, it took quite a while, he's certainly lost his former attitude. We've delved into the hotel's drug collection a few times to really ensure his rebellious streak is gone for good.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "succubusDisguise1", name: "Streetwalking"},
	{index: "succubusDisguise2", name: "Maid Whoring 1"},
	{index: "succubusDisguise3", name: "Maid Whoring 2"},
	{index: "succubus1", name: "The Proposal"},
	{index: "succubus2", name: "Succubus Milk"},
	{index: "succubus3", name: "Succubus Game"},
	{index: "succubusBreakfast", name: "Making Breakfast"},
	{index: "succubusDate1", name: "Date Part 1"},
	{index: "succubusDate2", name: "Date Part 2"},
	{index: "succubus4", name: "Paradise Found"},
	{index: "succubusPlayerDom", name: "Ares Potion"},
	{index: "succubusPlayerSub", name: "Virgo Potion"},
	{index: "succubusClub", name: "Crossdressing Club"},
	{index: "succubusShock", name: "Talk To Your Guardian Angel To See If Purification Is Right For You"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "succubusShock": {
			writeHTML(`
				player Sure, lets go drinking. Where we headed?
				t Instead of a proper answer succubusF just winks and his form suddenly shifts.
				succubus I'll walk you there.
				t ...
				player So, this place has private rooms, huh?
				succubus Not for people like you, if you catch my drift.
				player Ah, a secret demon bar. Guess I should be careful in the bathrooms. Will the drinks be spiked?
				succubus Only if you wanna have a <i>really</i> good time. Honestly though, I think I'll take it slow.
				player Actually, I wanted to ask. Why are you in your human form?
				im 052.jpg
				player And a cross necklace? Isn't that-
				succubus Don't get hung up on it, it's the only real way to be a rebel when you're a bottom-rung demon.<br>Although, I guess I'll be wearing it unironically someday...<br>And don't worry about the human form. Some people like wearing fancy clothes to relax. Ah, drinks. Here, normal alcohol for you, and for me...
				player If you say so. Bottoms up!
				t ...
				succubus It's really warm in here, huh?
				player Not really? You've only had a few sips, you already drunk?
				succubus Pssh. This drink's actually pretty mild by demon standards. I guess I never told you-
				im 056.jpg
				succubus KKKKKHHHHH~!
				t succubusF's body jerks suddenly as purple energy arcs off his body.
				player Whoa!
				t It only takes a moment for the reaction to stop, leaving succubusF heavily flushed and panting.
				player What happened?
				succubus I don't know... It didn't feel like something suddenly spiked, it's like my normal tingles were suddenly more than I could handle.
				player Tingles?
				succubus A succubus (male)'s body is extremely sensitive, and fine tuned by some pretty squelchy means over years to normalize what would give a human a hair trigger. Like building up a drug tolerance.
				player So what, your purification is removing that tolerance?
				succubus Oh fuck off with that. 
				player Maybe it's like a gem in a rock? Maybe you need to shave off the outside, your resistance, before you start turning back into-
				im 056a.jpg
				succubus GHHHHHT!<br>F-fuck, do <i>something</i>! I'll waste a load at this rate! I'm already leaking!
				player What am I supposed to do? It's not like I can just re-normalize you...<br>Or can I? Here, let me see.
				im 060.jpg
				succubus Ghhh... Nooo... It's- KHHH~!
				player Only one thing I can do now...
				succubus Hurry~! Hurryhurry~!
				t ...
				im 070a.jpg
				succubus Hah~! Ffffuck~! My ass is BREAKING~!!!
				t He's covered head to toe in sweat, you really can't tell if your efforts are helping or making things worse, but there's no trace of purple lightning, and...
				succubus FUUUUUCK MEEEE~!
				t At least he seems to be enjoying it. The only problem is that you can't last much longer, your knees are starting to buckle and each thrust is pushing you farther over where you think your limits should be.
				t And yet, you soldier on, for friendship, perhaps even love, but mostly-
				im 072.jpg
				succubus HOOOGH~!
				t You can't remember what you were thinking, your vision is starting to go blurry...
				t ...
				im 046.jpg
				t The rest of the night is a haze, fading in an out of consciousness with your demon boi familiar on top of you. He was trying to hold back at first, but for now he's basically an open faucet, absolutely zero ability to hold in any energy he stores and it all leaks back onto you between rounds.
				t ...
				player Ghh~!
				t You shoot awake, feeling sore beyond words, in your bed, succubusF's body cleaned and asleep next to you.
				t You spy an unfamiliar hand waving at you as your door closes, it seems this isn't an uncommon occurrence at a demon bar, although...
				t There's a lovely, very clean scent in the air.
			`);
			break;
		}
		case "succubusDisguise1": {
			writeSpeech("player", "", "Not very good at setting the mood, are you?");
			writeSpeech("succubus", "", "Ugh, a talker.");
			writeText("He leans forwards and touches your hand. His skin is <i>soooof-</i>");
			writeText("You stumble, that was weird. The pink fuzz came back for a second. Now, with seemingly no warning, you've got a massive erection.");
			writeSpeech("succubus", "", "Damn, what the hell is going on? ");
			writeSpeech("player", "", "Alright, I'm getting some mixed signals here, this is getting fishy. What's-");
			writeText("Suddenly, he stands up and pulls you into a kiss, and the pink fuzz fills your brain again much more intensely this time.");
			writeText("Once he backs off you take a moment to focus and the fuzz fades. While you're fighting off whatever's going on, he pulls off his top and skirt, and relaxes on the bed.");
			if (data.player.gender == "man") {
				writeSpeech("succubus", "", "I'm seriously off my game today. Can't believe this old man is resisting.");
			}
			else {
				writeSpeech("succubus", "", "I'm seriously off my game today. Can't believe this old hag is resisting.");
			}
			writeSpeech("player", "", "Excuse me?");
			writeSpeech("succubus", "", "God fucking Jes- what the hell!?");
			writeText("He falls forwards in surprise.");
			writeSpeech("player", "", "You know I can hear you right? Are you trying to drug me?");
			writeSpeech("succubus", "", "Uh... Fuck, uh, yeah! Yeah I was drugging you. Guess it didn't work, wow! You've got a really strong uh... Fuck, what's that thing you have?");
			writeSpeech("player", "", "What?");
			writeSpeech("succubus", "", "Stomach! Yeah, stomach! Wow, bet you really want to take your frustrations out on me now, haha!");
			writeSpeech("player", "", "Fuck, this was fishy after all.");
			writeText("You start to leave, this is almost definitely a trap. As you get moving, he finally makes eye contact with you, shooting you his best bedroom eyes. If he seriously thinks that's going to be en-");
			writeBig("images/succubus/profileP.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Aww, come on. Don't you want some of this? You know you <span style='color: #fc53f1'>can't resist</span>.");
			writeText("Something's wrong. Something's wrong. You need to keep repeating that to yourself because your body isn't listening. There's something in the air, it's relaxing and energizing you at the same time.");
			writeText("You half walk, half stumble over to the bed.");
			writeSpeech("player", "", "Can't... What's going-");
			writeSpeech("succubus", "eyes.jpg", "<span style='color: #fc53f1'>Shhhh.</span>");
			writeBig("images/succubus/1-1.jpg", "Art by Gujira");
			writeSpeech("succubus", "eyes.jpg", "I'm <span style='color: #fc53f1'>really</span> sorry about how I've been acting. A real <span style='color: #fc53f1'>playerMan</span> like you deserves better, right?");
			writeText("You feel like the wind got knocked flat out of you as his tongue runs across your nipple.");
			writeBig("images/succubus/1-2.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Just close your eyes, I'll make you feel a lot better, okay? Don't worry about money, time, or even your life. Just sit tight and let me blow your mind.");
			writeBig("images/succubus/1-3.jpg", "Art by Gujira");
			writeText("He's got to have some kind of drugged lipstick or something, because the moment he wraps his lips around your nipple you feel like a live wire current is ripping through you.");
			writeBig("images/succubus/1-4.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Aaaah~<br>You're really incredible playerMister.<br>And you're still hard too! I've changed my mind, I don't need anyone else, you're my new sex slave, okay?");
			writeSpeech("player", "", "Ghh...");
			writeSpeech("succubus", "", "And you're still resisting! I really stumbled onto a diamond, didn't I? Are you even human?<br>Ah, I'm really pent up, so this is risky... Fuck it, I'll take that gamble!");
			writeBig("images/succubus/1-5.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Come on, I can't wait any longer!");
			writeSpeech("player", "", "<i>Gotta fight... Can't let this little bitch... Beat me...</i>");
			writeSpeech("succubus", "eyes.jpg", "<span style='color: #fc53f1'>Fuck me!</span>");
			writeBig("images/succubus/1-6.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Ah, yes! God, I needed this!");
			writeSpeech("player", "", "<i>So... Good...</i>");
			writeSpeech("succubus", "", "Nghh, this is amazing~!<br>Fuck, ah! I can't keep going though, sorry! I'm going to need... Nfff... Need you to hurry up and...");
			writeSpeech("succubus", "eyes.jpg", "<b><span style='color: #fc53f1'>Cum!</span><b>");
			writeBig("images/succubus/1-7.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Yeessshh... That'sh the shtuff...");
			writeText("You feel the pink fuzz creeping into the corners of your mind again, as suddenly another sweeping wave of pleasure overtakes you.");
			writeSpeech("succubus", "", "More, give it all to me...");
			writeText("You cum again, even more powerfully than the last time, even though you've stopped thrusting.");
			writeText("He giggles gleefully as you start to feel woozy.");
			writeSpeech("player", "", "<i>Fuck... I'm starting to fade out... God damnit, this is not how I go!</i>");
			writeText("You fight through the haze and start thrusting again, fully intending to power through whatever's going on.");
			writeSpeech("succubus", "", "W-what? No, shtop, I-<br>Noooo~!");
			writeText("His ass suddenly tightens as his dicklette finally starts leaking small droplets of cum.");
			writeSpeech("succubus", "", "Nonono, please~! I can't... Aaaa~!");
			writeBig("images/succubus/1-8.jpg", "Art by Gujira");
			writeText("His eyes roll back in his head and his body starts shaking, suddenly his piddly droplets of cum turn into a constant leaking stream.");
			writeText("His grimace turns into a drunken smile and his tongue lolls out of his mouth as he defiles the sheets with his jizz.");
			writeBig("images/succubus/1-9.jpg", "Art by Gujira");
			writeSpeech("succubus", "", "Cumming~! I'm washting it all... But if feelsh sho gewd~!");
			writeText("Dimly, you're aware that your second orgasm never actually finished, you've been cumming non stop and your vision is starting to fade.");
			writeText("You collapse on top of him as he drunkenly giggles about how good he feels.");
			writeText("...");
			writeText("You surge awake, feeling awfully sore. After a quick check, you confirm you still have both kidneys, and it looks like he took the bedsheets with him.");
			writeSpeech("player", "", "What happened... What was I thinking? Did he have some kind of aphrodisiac perfume on him?");
			writeText("After a moment you feel back to normal, better than before in fact! It has gotten really late though.");
			break;
		}
		case "succubusDisguise2": {
			break;
		}
		case "succubusDisguise3": {
			break;
		}
		case "succubus1": {
			writeSpeech("player", "", "Let's get to it then.");
			writeSpeech("succubus", "demon.jpg", "That's the spirit! C'mon, dick out!");
			writeText("He cheers you on as you begin to disrobe.");
			writeSpeech("player", "", "You're a lot more enthusiastic than last time.");
			writeSpeech("succubus", "demon.jpg", "Well, let's just say most people who take me up on my street offer tend to be... Lowest common denominator types. Of course I'd be excited when I'm about to get some top-quality product waved in front of my face.<br>Ooh, speak of the devil...");
			writeBig("images/succubus/2-1.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Eheh... You sure you're all human?");
			writeSpeech("player", "", "You sure you aren't stalling? Is it too big for you?");
			writeSpeech("succubus", "demon.jpg", "Cocky bitch! <br>Alright, just try to stay conscious, alright?");
			writeBig("images/succubus/2-2.jpg", "Art by Gujira");
			writeSpeech("player", "", "Ggh~!");
			writeSpeech("succubus", "demon.jpg", "Mmm... *Mwah*!<br>My saliva is pretty strong, so we'll need to start slow for you to get used to it.");
			writeText("succubusF playfully kisses the tip before taking it into his mouth, soaking your cockhead in a potent aphrodisiac.");
			writeSpeech("succubus", "demon.jpg", "Mmm... Hurr hoing hreat! (You're doing great!)<br><i>Mmm, this really was worth it... I wanna tease *him but...<br>Mmm! I can't hold back any longer!</i>");
			writeSpeech("player", "", "Cumming!");
			writeBig("images/succubus/2-3.jpg", "Art by Gujira");
			writeText("You sigh in relief as your needy cock finally pumps out it's pent up contents. You should be exhausted after your last marathon session, but your feeling of relief only feels more powerful.");
			writeBig("images/succubus/2-4.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Hah... Hah...");
			writeText("succubusF looks almost drunk as he catches your cum on his tongue.");
			writeSpeech("succubus", "demon.jpg", "How w... Was that?");
			writeSpeech("player", "", "It felt amazing. How many more loads do you need?");
			writeSpeech("succubus", "demon.jpg", "Y-you can go again?");
			writeSpeech("player", "", "Hell yeah I can. Hey, let's try going deeper this time...");
			writeText("...");
			writeText("The two of you go another few rounds, but surprisingly it's succubusF who stops you.");
			writeSpeech("succubus", "demon.jpg", "A-alright, we need to stop here!");
			writeSpeech("player", "", "Why? Oh, you mean move on? Yeah, you sucking just the tip is getting kinda boring.");
			writeSpeech("succubus", "demon.jpg", "Boring!? Why you...<br>No, this was to let you acclimate to my, uh, fluids. if we keep going your system might get overloaded. <br>So, does this mean you accept? Will you take me on as your familiar?");
			writeSpeech("player", "", "Sure. We can-");
			writeText("You try to stand, only for your legs to completely disobey you.");
			writeSpeech("succubus", "demon.jpg", "H-hey!<br>Ghh, heavy bastard... We should've stopped after the first round.");
			writeSpeech("player", "", "Uhuh... Why's the room spinning...?");
			writeSpeech("succubus", "demon.jpg", "Ugh, get some sleep. I'll come by tomorrow night, alright?");
			writeText("With some effort succubusF hauls you over to your bed and lays you down.");
			writeSpeech("succubus", "demon.jpg", "You did good tonight...<br>Good night, my new *Master.");
			break;
		}
		case "succubus2": {
			writeSpeech("player", "", "So, same kind of play as before?");
			writeSpeech("succubus", "demon.jpg", "Hehe, not quite. Last time we went for as long as your body could take, this time I wanna see how long your mind can last.<br>Here, drink this.");
			writeText("He hands you a vial of a cloudy white fluid.");
			writeSpeech("player", "", "This sounds kinda fishy.");
			writeSpeech("succubus", "demon.jpg", "Relax, it's completely safe. You and I have a lot we can do for each other, I'm not wasting that on a quickie.");
			writeText("As he speaks, he gets out some strips of cloth and starts tying your legs to your chair.");
			writeSpeech("succubus", "demon.jpg", "This is just so you don't tackle me, I'm really pent up right now and I can't risk wasting it on your bedsheets.");
			writeSpeech("player", "", "Wasting... Cum?");
			writeSpeech("succubus", "demon.jpg", "Yep! That's where we keep stored essence. Wasting it... Wasting it is embarrassing... You gonna drink that or what?");
			writeSpeech("player", "", "Ehhh...");
			writeSpeech("succubus", "demon.jpg", "Relax. It's succubus milk. It'll make sure your body can take what I'm about to dish out. By the time we're done tonight, you're gonna be totally acclimated to me, and you'll be an even better fuck for it.");
			writeSpeech("player", "", "Well... Alright, I guess.");
			writeText("You down the fluid, its taste is hard to describe. It's close to the feeling of jerking off on your sleeping mother's hair, but also sweet and salty at the same time.");
			writeText("After you drink it a warm fuzz permeates your body as succubusF ties your wrists to the arms of your chair.");
			writeSpeech("player", "", "It feels... Weird... What exactly is it? ");
			writeSpeech("succubus", "demon.jpg", "We give it to new breeding cows to prep them for milking. It'll help you generate enough sperm to, well, you'll see.");
			writeText("succubusF kneels down with a catlike grin on his face, before he starts fishing your dick out. It looks a little bigger than before, actually. ");
			writeSpeech("succubus", "demon.jpg", "Ah~ There's my big friend~! Sorry we had to cut things short last time, you deserve a better chance to show your spunk.");
			writeText("Your vision is starting to blur, the milk must be kicking in. You feel... <i>hungry. </i>");
			writeText("...");
			writeBig("images/succubus/3-1.jpg", "Art by Gujira");
			writeText("You don't know how long it's been now, hours? Honestly, you feel like days have gone by. At first succubusF was teasingly suckling on the head of your shaft but...");
			writeBig("images/succubus/3-2.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Mmph... Mmm~");
			writeText("After the first three loads he lost all sense of self control. He became completely ravenous.");
			writeText("Sometime after the seventh round you blacked out, and when you came back to succubusF was still sucking, but covered in a <b>lot</b> more cum than before.");
			writeBig("images/succubus/3-3.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Mmm~!");
			writeText("succubusF moans appreciatively as you spurt again. His eyes are glazed over with a familiar fog, at this point he's absolutely cum-drunk. ");
			writeText("You'd think that at some point you'd go numb to the pleasure, or that you'd start shooting dry shots at some point, but you'd be wrong on both counts. Electric energy courses through you as your cock spurts just as thick a load as its first. ");
			writeText("But as he slurps down this last load, a look of panic flashes in his eyes and he backs off and clutches his crotch.");
			writeSpeech("succubus", "demon.jpg", "Ah~... Ah~... That was close. <br>Aaah~ it's too much~! Don't leak, don't leak, don't leak....");
			writeText("Desperately, he tries to hold himself back from spurting all his hard-earned essence, and after a moment he manages to calm himself down.");
			writeText("Without the constant stimulation you're finally getting soft, and exhaustion hits you like a tidal wave.");
			writeSpeech("succubus", "demon.jpg", "Gonna... Gonna need to fly back...");
			writeText("There's a plump bulge near the base of his abdomen. Succubi must store their essence in their prostate, probably.");
			writeSpeech("succubus", "demon.jpg", "Hey... Hey you still conscious? ");
			writeText("You barely manage a halfhearted grunt, and he unties you.");
			writeSpeech("succubus", "demon.jpg", "Ah~<br>You smell so... No! Gotta focus...");
			writeText("Your scent nearly pushing him over the edge again, he's quick to unceremoniously flop you onto your bed then stumble his way to your window.");
			writeText("You faintly hear him mumbling 'don't leak' over and over again as he flies off, and you can't keep your eyes open any longer. ");
			break;
		}
		case "succubus3": {
			writeText("You move to take a seat again. This time you intend to stay conscious until the end, ready to outlast succubusF once more.");
			writeSpeech("succubus", "demon.jpg", "Ah ah! We'll be doing something different tonight.");
			writeText("He chides you and pulls you away.");
			writeSpeech("succubus", "demon.jpg", "I'm not pent up today, stud, so I thought we'd some fun tonight. Even if I cum, I won't be wasting too much. <br>We're gonna play the splurt game!");
			writeText("He starts peeling off his dark clothes, and you follow his lead.");
			writeSpeech("succubus", "demon.jpg", "It's a game played among friends down below. The rules are simple! Hard, anal sex and the first to splurt loses!");
			writeSpeech("player", "", "That just sounds like sex while keeping score.");
			writeSpeech("succubus", "demon.jpg", "Hehe. Don't feel too bad if you lose. We succubi are trained to hold it together for months at a time even with constant stimulation.<br>And you, poor human, you're going up against me.");
			writeText("He gets up close to rub his chest against your abs, he's pretty smug for someone barely more than half your height.");
			if (data.player.gender == "man") {
				writeSpeech("succubus", "demon.jpg", "Every bit of me is made for turning men like you into quickshot sluts. Every. Single. Bit.");
			}
			else {
				writeSpeech("succubus", "demon.jpg", "Every bit of me is made for turning women like you into quickshot sluts. Every. Single. Bit.");
			}
			writeText("He gently pushes you down to the floor, and playfully slaps your hands away.");
			writeSpeech("succubus", "demon.jpg", "Ah ah~<br>Catcher controls the speed, that's one of the rules~");
			writeSpeech("player", "", "Cmon brat, quit with the cheekiness and put your money where your mouth is.");
			writeSpeech("succubus", "demon.jpg", "Mmm~! I'll enjoy breaking you, let's see how long you can keep that serious face up.");
			writeText("He straddles you cowgirl style, teasingly hotdogging your shaft between his asscheecks, slowing down whenever your cockhead bumps against his puckered rim. ");
			writeText("His tail wraps around your shaft and aligns it with his boihole.");
			writeBig("images/succubus/4-1.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Wanna give up now? I'm not going to stop, but the sooner you give in, the better it'll feel, I promise.");
			writeSpeech("player", "", "Fuck you.");
			writeSpeech("succubus", "demon.jpg", "Gladly, *Master!");
			writeBig("images/succubus/4-2.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Ah~! You're so big~!");
			writeSpeech("player", "", "Ghh...");
			writeText("Despite how badly you'd love to take him down a peg, his boasts weren't empty. The texture and grip of his ass, and his incredibly skillful muscle control have already decided the match.");
			writeText("Despite the fact you can feel your cockhead bump against his demon prostate with every drawn out thrust, he still looks like he's totally in control.");
			writeSpeech("succubus", "demon.jpg", "Ah~! Ah~! I'll have to be ready to fly tomorrow, because I won't be walking!");
			writeSpeech("player", "", "Gh... Shut up, tramp!");
			writeSpeech("succubus", "demon.jpg", "Oh, I'm worse than that, *Master! I'm a slut, a little bitch boi, I'm <b>yours!</b>");
			writeText("You can't hold back anymore as he goes balls deep and gyrates his hips in a circle to thoroughly milk your dick. ");
			writeSpeech("player", "", "C... Cumming~!");
			writeSpeech("succubus", "demon.jpg", "Yes~! Cmon, let's see that face of yours tw-");
			writeBig("images/succubus/4-3.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Gggh~");
			writeText("You came first, but the moment you start cumming inside of him sparks of purple lightning flash around him.");
			writeSpeech("succubus", "demon.jpg", "C-cum~");
			writeText("His bratty smugness is gone. He's won the game but certainly lost the battle.");
			writeSpeech("succubus", "demon.jpg", "C-cum~!");
			writeText("Now he just looks like an animal, bouncing on your shaft trying to scratch that original primal itch.");
			writeText("His body must be having an effect on you, because there's absolutely no cooldown period for you right now. This little bitch hasn't slowed down for a second but you don't care.");
			writeSpeech("succubus", "demon.jpg", "Gah~! It feels hot~! Feels so good~!");
			writeText("Dewdrops have begun to form on the tip of his cock.");
			writeSpeech("succubus", "demon.jpg", "Ah~! No, I can't~<br>Leak~!");
			writeText("His attitude-laden comments have been breathy, barely coherent gasps and moans. His very nature has taught him to feel shame at cumming, that he's wasting his hard work, but with you here none of that matters.");
			writeText("Finally, he lets go, and lets the body-quaking anal orgasm overtake him.");
			writeBig("images/succubus/4-4.jpg", "Art by Gujira");
			writeSpeech("succubus", "demon.jpg", "Cumming~!");
			writeText("His dicklette gives an excited jump before a solid white stream begins leaking out, the stream surging in strength with every bounce he does on your hips.");
			writeSpeech("succubus", "demon.jpg", "Cumming, cumming, cumming cumming cumming~!");
			writeText("As he pounds the essence right out of himself, you feel yourself pushed over the edge once again.");
			writeSpeech("succubus", "demon.jpg", "Sho good~! I'm wasting all of it again, all because of *Master's cock~!");
			writeText("Finally able to take no more, his legs give out and he's left sitting on you balls deep on your cock.");
			writeSpeech("succubus", "demon.jpg", "Hehe... Hehehe...");
			writeBig("images/succubus/4-5.jpg", "Art by Gujira");
			writeSpeech("player", "", "How's it feel? You feel like a winner?");
			writeSpeech("succubus", "demon.jpg", "Yesh... Win win win... I shplurted...~");
			writeText("...");
			writeText("After getting him off in more ways then one, you get cleaned up. Sheepishly, succubusF wipes the cum off his and your bodies.");
			writeSpeech("player", "", "Don't worry, there's plenty more where that came from.");
			writeSpeech("succubus", "demon.jpg", "Y-yeah, It's just that... I might get addicted to this. Succubi who get addicted to cumming... They'll usually give anything just to splurt it out and waste all their essence. It's a pretty common fetish to fail your quotas by pounding yourself on a dildo the day before the essence is due.");
			writeText("After he's finished you start getting ready for bed. And he gets ready to fly off. ");
			writeSpeech("succubus", "demon.jpg", "See you around *Master, and thanks. I don't have anyone to play with, so that was my first time with the game.");
			writeSpeech("player", "", "Anytime, succubusF.");
			break;
		}
		case "succubusBreakfast": {
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="images/locations/newDayMorning.jpg" usemap="#roomMap">
				</div>
			`;
			writeText("You stretch out after a good night's rest, before you notice the smell of... Food? Not quite, but it's coming from the kitchen.");
			writeSpeech("succubus", "demon.jpg", "Ska-ba-da-dah-doo~<br>Gathering souls is~ so ea-sy~<br>I'm gonna be-ee~ An in-cu-bus~<br>Thank goodness~ For sucke-");
			writeSpeech("player", "", "Nice singing.");
			writeBig("images/succubus/breakfast1.jpg");
			writeSpeech("succubus", "demon.jpg", "Ah! H-how long were you listening?");
			writeSpeech("player", "", "Long enough. So, you're just using me to gain standing among your demon buddies?");
			writeSpeech("succubus", "demon.jpg", "N-no! Well, I -");
			writeBig("images/succubus/breakfast2.jpg");
			writeSpeech("succubus", "demon.jpg", "Ah~!");
			writeSpeech("player", "", "Because that's totally fine. It's not like I'm gonna use these souls myself.");
			writeSpeech("succubus", "demon.jpg", "... Oh. You're really okay with that? I mean, you're not too bad a *guy. Maybe I have less selfish a motivation than you think.");
			writeSpeech("player", "", "Maybe. Anyways bend over.");
			writeSpeech("succubus", "demon.jpg", "Wait! I might be fireproof, but you shouldn't mix stoves and sex!");
			writeBig("images/succubus/breakfast3.jpg");
			writeSpeech("succubus", "demon.jpg", "Ah~! Stop, I didn't come here for fucking this time!");
			writeSpeech("player", "", "Lying isn't nice you know, especially when you're showing off your slutty ass like this.");
			writeBig("images/succubus/breakfast4.jpg");
			writeSpeech("succubus", "demon.jpg", "Th-this is a religious thing! We... Ah~<br>Clothes chafe a lot if they aren't sexy~!");
			writeSpeech("player", "", "Well then these must not chafe at all. You ready?");
			writeText("...");
			writeBig("images/succubus/breakfast5.jpg");
			writeSpeech("succubus", "demon.jpg", "Ah~! Slow down~! I'm really full right now!");
			writeSpeech("player", "", "Don't care, gonna cum!");
			writeSpeech("succubus", "demon.jpg", "Stooop~! If you cum right now-");
			writeBig("images/succubus/breakfast6.jpg");
			writeText("As you pump a load of cum into him, he spasms while purple light flickers around his head.");
			writeSpeech("succubus", "demon.jpg", "Khhhhk~<br><i>H-hold it in! Don't cum! Don't waste it!</i>");
			writeText("The food in the pan starts popping, bits of it flying out onto the stovetop and coming alight in purple flame.");
			writeText("As succubusF finishes his spasms, he relaxes.");
			writeSpeech("succubus", "demon.jpg", "Ah~ Ehehe~ I'm sho full... Aww... I made a mess... Hehe... <br>Ah, fuck! The food!");
			writeText("Despite succubusF's scrambling after he comes back to his senses, he can't save the demonically burnt meal.");
			writeText("...");
			writeSpeech("player", "", "It's fine. *munch*<br>It was already ruined anyways, I could smell cinnamon mixed with the eggs. ");
			writeText("succubusF looks downcast as you munch on a bagel from the fridge.");
			writeSpeech("succubus", "demon.jpg", "Aw man... Food is one of the five great temptations, but I suck at this one too? ");
			writeSpeech("player", "", "Hey. There's only one great seduction I need, and you're great at it. ");
			writeText("You give succubusF's ass a squeeze, ");
			writeSpeech("succubus", "demon.jpg", "How the hell am I supposed to be an incubus even if I can get a bunch of souls, if all I'm good at is being your butt-buddy?");
			writeText("You try to picture succubusF as a more masculine incubus.");
			writeSpeech("player", "", "... Nope, hard pass. Anyways you need to scram, don't need neighbors asking why a small sassy boi is hanging around my house. ");
			writeSpeech("succubus", "demon.jpg", "Alright. I'll see you later, *Master.");
			writeSpeech("player", "", "By the way, those eggs. You didn't fuck with it or anything, did you? Like putting some succubus milk in there?");
			writeSpeech("succubus", "demon.jpg", "No way! You don't fuck with somebody's breakfast. Isn't it super important for you humans?");
			writeSpeech("player", "", "Most important meal of the day? No, that's a myth, I think cereal companies spread it around.");
			writeText("He looks shocked, shocked like he found out the tooth fairy is his new stepdad.");
			writeSpeech("succubus", "demon.jpg", "I can't believe it... I should've studied dinner recipes instead... ");
			break;
		}
		case "succubusDate1": {
			writeBig("images/succubus/date4.jpg");
			writeSpeech("succubus", "", "Hey, just a quickie, alright? We don't need people asking why my skin and eye color changed after a bathroom break.");
			writeSpeech("player", "", "Nobody'll notice, you worry too much. Just keep a straight face and it'll be fine.");
			writeSpeech("succubus", "", "You're impossible to reason with, have you-");
			writeBig("images/succubus/date5.jpg");
			writeSpeech("succubus", "", "...");
			writeSpeech("player", "", "Holding your tongue, eh? I wonder how long you can keep from moaning.");
			writeSpeech("succubus", "", "I'll... I'll be fine, dickweed. I've dealt... I've dealt with way more than this.");
			writeText("He's  doing his best keeping a totally neutral expression, but the way his brow furrows and how he takes a small, yet sharp breath with every thrust gives away his true intentions.");
			writeSpeech("player", "", "How're you holding up?");
			writeSpeech("succubus", "", "I'm doing... My best... Did you get bigger!?");
			writeSpeech("player", "", "Nope! But you're a hell of a lot tighter than last time. Excited we might get caught?");
			writeSpeech("succubus", "", "Just... Just finish already...");
			writeSpeech("player", "", "Damn, already gonna cum!");
			writeBig("images/succubus/date6.jpg");
			writeSpeech("succubus", "", "...");
			writeSpeech("player", "", "Damn, you've improved a lot. With how you act normally when you get some of my cum, you should be pretty much broken by now.<br>Hey, you alright? You look like you're half on your way to passing out.");
			writeSpeech("succubus", "", "Sit. Sit down here...");
			break;
		}
		case "succubusDate2": {
			writeBig("images/succubus/date8.jpg");
			writeSpeech("succubus", "demon.jpg", "Aah~! Aah~! I'm sorry, I can't hold it in anymore~! I need more~!");
			writeSpeech("player", "", "Ghh, lost control already huh? How desperate have you been since you left that stupid note? If you wanted to reward me we could have skipped all this and gotten to the gift you really wanted to give me.");
			writeSpeech("succubus", "demon.jpg", "Just, nngh, just fuck me harder! I've been on edge for too long, I just wanna let go!");
			writeSpeech("player", "", "Then cum! And shut up before we get caught for real!");
			writeSpeech("succubus", "demon.jpg", "Ah, what're you gonna do to make me, huh *Master?");
			writeBig("images/succubus/date9.jpg");
			writeText("*SPANK*");
			writeSpeech("succubus", "demon.jpg", "...!");
			writeSpeech("player", "", "There, that shut you up. Fuck, you got way tighter. You like that, huh? Well, how about...");
			writeBig("images/succubus/date10.jpg");
			writeSpeech("succubus", "demon.jpg", "YES~!  FUCK YES~!");
			writeSpeech("player", "", "Shit, pushed you way over... God damn, gonna cum!");
			writeBig("images/succubus/date11.jpg");
			writeSpeech("succubus", "demon.jpg", "Oooh~! Fuck, that's just... What I... Needed...");
			writeText("As you slow down your thrusts to give yourself a break, you notice tears of exertion running down succubusF's face.");
			writeSpeech("succubus", "demon.jpg", "Gotta... Gotta hold it... In... Can't waste it, not today...");
			writeSpeech("player", "", "You did great. Now, how about we head home? ");
			writeSpeech("succubus", "demon.jpg", "Cum... Wanna cum...");
			writeSpeech("player", "", "Hey, pull yourself together or I'll give you another spanking.");
			writeSpeech("succubus", "demon.jpg", "Nnhg~<br>If you do that I won't be able to hold back... Okay, okay, lemme just...");
			writeText("He lifts himself off your cock, stopping suddenly when the head bumps against his prostate. He bites his knuckle and his legs twitch, but only a small bead of cum escapes.");
			writeSpeech("succubus", "demon.jpg", "Sho full... Of you and me... ");
			writeText("With a soft *pop* his ass releases your cockhead, and he takes a few wobbly steps backwards.");
			writeText("After a moment of careful and diligent effort, he manages to get his clothes back on without splurting his load onto the tile floor.");
			if (data.player.gender = "man") {
				writeSpeech("succubus", "demon.jpg", "Let'sh... Let'sh go, mashter... Collection day ish tomorrow... Gotta hold on, I need to go.");
			}
			else {
				writeSpeech("succubus", "demon.jpg", "Let'sh... Let'sh go, mishtress... Collection day ish tomorrow... Gotta hold on, I need to go.");
			}
			writeSpeech("player", "", "Stay safe, alright?");
			writeSpeech("succubus", "demon.jpg", "Mhmm...");
			writeText("The two of you leave the bathroom and go your separate ways as the sky darkens.");
			break;
		}
		case "succubus4": {
			writeBig("images/succubus/5-1.jpg");
			writeText("No note or romantic date this time, just a fun new game at succubusF's suggestion.");
			writeSpeech("player", "", "Honestly, at this point you're just begging to become addicted to this.");
			writeSpeech("succubus", "demon.jpg", "Just... I don't care~<br>You'll take care of me when I'm a broken, splurting mess, right?");
			writeSpeech("player", "", "Oh, I'll take care of you alright. I'll give you exactly what you <b>need</b>!");
			writeBig("images/succubus/5-2.jpg");
			writeText("*SPANK*");
			writeSpeech("succubus", "demon.jpg", "Gggh~! Harder~!");
			writeText("A few beads of cum leak from his small cock, positioned in a way that they splatter on his face. He suggested this position saying the embarrassment meant he could hold himself back for longer, but...");
			writeSpeech("player", "", "You just wanna cum all over your own face, don't you?");
			writeSpeech("succubus", "demon.jpg", "Nnngh~ I can't~<br>It's wrong, I gotta hold back...");
			writeSpeech("player", "", "You said you were in the clear for months, right? It doesn't matter how much you cum tonight. Let loose!");
			writeSpeech("succubus", "demon.jpg", "Nooo~ That's a really... Nnngh... A really dangerous way to go...");
			writeSpeech("player", "", "Well then, I guess I know how we're spending the rest of the night. I'm not stopping until I force every last bit of milk from those balls of yours.");
			writeSpeech("succubus", "demon.jpg", "Aaah~! If you think... If you think you can make me cuuuUUUM~!<br> Then give it your b-best shot! I'll d-drain you <b>dry</b>, *Master!");
			writeText("...");
			writeBig("images/succubus/5-3.jpg");
			writeSpeech("succubus", "demon.jpg", "YES~! MORE~!<br>You said you'd make me cum, are you getting tired yet~!?");
			writeSpeech("player", "", "You little... Brat! You've squirted four times already~!");
			writeSpeech("succubus", "demon.jpg", "N-no way~! This is just... Just precum~! There's no way I'd cum from you spankng me like a little bitch, or from your hard cock~! I'm a good little succubus, and succubi don't splurt~!");
			writeSpeech("player", "", "Ghh... Let's see... Let's see how long you can keep that straight face with a load of jizz in your ass!");
			writeSpeech("succubus", "demon.jpg", "Yes~! Pump me full, I wanna... I can't... I'm...");
			writeBig("images/succubus/5-4.jpg");
			writeSpeech("succubus", "demon.jpg", "<b>CUMMING</b>~!");
			writeText("You slam your hips into succubusF as his voice grows hoarse from screaming. Tears are running down his face as his will finally shatters into a million well-fucked pieces. ");
			writeSpeech("player", "", "God damn, you don't... You don't break easy...");
			writeSpeech("succubus", "demon.jpg", "Failure...");
			writeSpeech("player", "", "Huh?");
			writeBig("images/succubus/5-5.jpg");
			writeSpeech("succubus", "demon.jpg", "Failed... Ih'ma failure... Washted... Precioush...");
			writeText("You give a sigh as succubusF mumbles to himself, completely lost in the moment. His rational thought left the station and all that's left is his instinctive self-hate for wasting sperm.");
			writeSpeech("player", "", "Damn, I'm exhausted... But I can see words aren't going to get through to you. I guess I'd better train some self-esteem into you the only way I can.");
			writeBig("images/succubus/5-6.jpg");
			writeText("The rest of the night is spent giving succubusF some positive reinforcement in the form of anal pounding. At some point you passed what you thought was your limit, relying on succubusF's performance enhancing saliva to keep you going after your own stamina gave out. It was all worth it by the time succubusF's broken psyche shattered again into even smaller bits of giggling joy at every orgasm.");
			writeText("It's not really clear if fucking the self-loathing out of a demon counts as a good deed, but by the time you collapse, naked and spent, you're pretty sure you've fucked a new fetish into the heart of your chocolate demon femboi.");
			break;
		}
		case "succubusPlayerDom": {
			writeHTML(`
				t The two of you take a small amount of the potion fluids and down them like shots.
				t The taste is... Meaty. Like a steak in drink form.
				sp player; ... I don't feel any different.
				sp succubus; im demon.jpg; It might be slow-acting. Cmon, let's get ready for when they take effect.
				...
				sp succubus; im demon.jpg; M-*master? I, um... I'm not sure it's working.
				im images/succubus/067.jpg
				sp succubus; im demon.jpg; M-maybe you could untie me, and we could try something different?<br>Ah, you can just untie me, I don't keep clippers in the box or anyth...
				t You dig through the box of toys succubusF brought over and pull out some things that catch your eye.
				sp succubus; im demon.jpg; Eheh... V-very funny, but those are, uh...<br>Listen, my body's more sensitive than a normal person, so maybe we should just leave those unti-<br>Hey, heyheyhey wait a-<br>Mpph! Mmmmph!
				im images/succubus/067a.jpg
				sp player; It's kicking in just fine for me, and your cock's being pretty honest with how hard it is.<br>It <i>is</i> hard, right? It's hard to tell sometimes.
				sp succubus; im demon.jpg; Mppph~!
				t He sputters and jerks on the spot as best he can.
				sp player; Now you just hold still for a moment, plenty of toys in this little box to play with, and we've got all night together.
				t You grab some more goods and connect them to the squirming boy beneath you with some tape. Despite his earlier protests...
				im images/succubus/067b.jpg
				sp player; You're already leaking, huh? Are these special vibes, or are you so much of a pervert that these little toys are enough to break your will?
				sp succubus; im demon.jpg; Phhooh~!<br>Mpphphrr~!
				sp player; I'll give you one chance. If you can last just a few seconds now without leaking any more, I'll untie you.
				t He goes mostly quiet, trying to control his breathing until he squeaks when you displace the base of his skimpy swimsuit.
				sp player; And if you can't, I'll fuck you until you can't see straight, then I'll pound you even harder while these vibes go off at max power.
				t His breathing hitches, his ass clenches reflexively, and you can see a small almost-transparent drop of precum at the crotch of his outfit.
				sp player; Good answer
				im images/succubus/068.jpg
				sp succubus; im demon.jpg; Mpppph~! Mh-hh-hh-hhh~!
				t He flexes and squrms but he can't break through the ropes or the iron bar keeping his legs spread. You turn a small dial and the sound of buzzing becomes very audible.
				t Between the stimulation to his little cocklette, his puffy nipples, and the sensation of a powerful dick giving his prostate plenty of lovetaps, it's obvious that his willpower has shattered.
				sp player; D-damn, I'm already close~! You want it inside, right?
				sp succubus; im demon.jpg; Mhhhm~! Mhhhm~!
				im images/succubus/069.jpg
				sp succubus; im demon.jpg; Phhhhhhckck~!
				t As if on command his body shudders as he cums hard enough to leak through the suit. He's gasping for breath, before his body jerks in response to the feeling of cum inside him fucking his body up, hard.
				sp player; Hoo... Now, I'm pulling out, but don't you worry. You brought us enough toys to last the night. You ready?
				sp succubus; im demon.jpg; Mmm... Mhmm...
				sp player; Good girl.
				...
				t Finally you feel the potion's effects starting to wear off, and the exhaustion is starting to set in. You're back to your senses.
				im images/succubus/070.jpg
				sp succubus; im demon.jpg; ?gender man; Maaa... Mathter...
				sp succubus; im demon.jpg; ?gender woman; Miii... Mithtreth...
				t He's soaked to the bone in cum, every vibe in the box still noisily buzzing as they pleasure his cocklette and nipples.
				t Two large vibrators and several beads in his ass keep his bitch hole satisfied, and a little clamp over his tongue keeps him from pulling it back in making it harder to swallow.
				t These potions are really effective. The least you can do is untie him so he can get a shower while you pass out.
			`);
			break;
		}
		case "succubusPlayerSub": {
			writeHTML(`
				t The two of you take a small amount of the potion fluids and down them like shots.
				t The taste is... Green. Like you're drinking celery mixed with apple-flavored candy.
				sp player; ... I don't feel any different.
				sp succubus; im demon.jpg; It might be slow-acting. Cmon, let's get ready for when they take effect.
				...
				sp succubus; im demon.jpg; Now hold still, lemme just... Oh, these are really comfy.
				sp player; I... I think the potions are kicking in...
				im images/succubus/020.jpg
				sp succubus; im demon.jpg; Oh? <br>... Oh. You're enjoying this already, huh?
				t He's really flexible, slowly stroking your length with his feet.
				sp succubus; im demon.jpg; Ooh, looks like that got a reaction out of you. Is my big, strong *master getting off on this? You know, if you just tried really <b>hard</b> you could overpower me right now. 
				im images/succubus/021a.jpg
				sp succubus; im demon.jpg; But you won't! Hehe, my big puppy of a *master just wants to get off any way he can! <br>Don't you worry my sweet little *master, I'll play with you. Whenever you want, whenever you feel that perverted throbbing in your balls, I can be there. You'll never need to look at another skanky boi. 
				t He's speeding up now, stimulating the head of your dick before returning to stroking your shaft.
				sp succubus; im demon.jpg; You want to cum? Of course you do, that's all you ever want. But instead of plowing my fuckable hole, you're just going to spray it all over my feet! <br>Aha~! Don't worry *master, no matter what kind of pathetic face you make when you start splurting, you'll always be mine! <br>My ass, my mouth, maybe something kinkier like my armpits, I'll never leave my precious pleasure piggy behind~! 
				im images/succubus/022.jpg
				sp succubus; im demon.jpg; Aha, ahahaha~! You're cumming! Just this once, I'm in charge, and I say you don't get to stop squirting until my feet are covered in your slime~!
				im images/succubus/022a.jpg
				sp succubus; im demon.jpg; Ehe, eheheh~! More, more~! Spray every drop from that filthy cock~! <br>Get addicted to my soles and be <b>my</b> servant for tonight~! Ahahaha~! 
				t Even as your orgasm starts to wind down, the addictive drug that is a succubus's body is pushing you to the edge again already. 
				t His eyes have a manic hunger in them as he keeps stroking your still-sensitive dick, every bit of reservation fading from his mind. Even as he's cackling about finally having control, you can actually see some fluid splurting from the crotch of his hotpants.
				... 
				t succubusF's forehead touches the floor. He's bowing all the way to the ground, apologizing for how carried away he got. 
				t You take another sip of the sports drink he picked up for you. 
				sp player; It's... Fine. We just need to be more careful about dehydration next time. 
				t You rub the head of your bat-winged familiar to cheer him up. Now's a good a time as any to get some rest. 
			`);
			break;
		}
		case "succubusClub": {
			writeHTML(`
				im club1.jpg
				succubus ... It's really hard to get into a groove with you staring like that.
				player You certainly seem excited though. I thought you had to stay calm, or else you change?
				succubus D'aww, you listened? Pussy.<br>Let's just say I'm getting better at this. Speaking of getting better...
				im club2.jpg
				succubus Mmm~ Mwah!<br>That smug look isn't gonna last much longer. Mmm...
				player I think... You'll find I'm getting better myself... I won't break as quickly anymore...
				succubus ...
				im club3.jpg
				succubus Eheheh~
				im club4.jpg
				t Taking that as a challenge succubusF smiles. Or as best he can with cock in his mouth. Your vision starts to wobble as you're treated to a full-course delight of a succubus's aphrodisiac saliva and incredible head skill.
				t Hoping to throw him off his game, and also trying to let loose some of your rapidly building energy, you thrust.
				im club5.jpg
				t But the sensation of his inner cheek rubbing against your cocktip starts making certain neurons fire off in your brain like a christmas tree at a rave party.
				im club6.jpg
				t Your legs shake as succubusF earns his reward, neither of you interested in continuing your little game, both of you just interested in indulging in hedonistic bliss.
				succubus Hah~<br>Mmm, you might be finished, but...
				im club7.jpg
				player Ghh!
				t Between his cocksucking talent and inhumanly perfect body, you may be at this for a while.
			`);
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write event ("+name+") in "+character.index+".js");
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
	if (data.player.location == "gallery") {
		writeFunction("changeLocation(data.player.location)", "Finish");
	}
	else {
		console.log("Error, no scene named "+name+" found to unlock.");
	}
	addSkill("corruption", 1);
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
	{index: "succubusReminder", trust: 77,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "succubusReminder": {
			writePhoneSpeech("succubus", "", "Waiting for you at the restaurant. Don't take to long or I'll go shopping and make you wait instead.");
			break
		}
		case "succubusReward": {
			writePhoneImage("images/succubus/reward.jpg", "Art by Gujira");
			writePhoneSpeech("succubus", "", "You've finished all of succubusF's content for this version, more is on the way!");
			break;
		}
		case "succubusNewReward": {
			writePhoneImage("images/succubus/newReward.jpg", "Art by Gujira");
			writePhoneSpeech("succubus", "", "You've finished all of succubusF's content for this version, more is on the way!");
			break;
		}
		case "clothes": {
			writePhoneImage('images/succubus/text.jpg', 'Art by Gujira');
			writePhoneSpeech('succubus', '', 'Enjoy!');
			clearText('succubus');
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong event. Error code: Failed to write phone event("+name+") in "+character.index+".js");
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