var character = {index: "gyatrio", fName: "Delinquent", lName: "Trio", trust: 0, encountered: false, textEvent: "", met: false, color: "#EA4448", author: "NoodleJacuzzi", artist: "Uo Denim", textHistory: "", unreadText: false,};

var logbook = {
	index: "gyatrio", 
	desc: "A trio of delinquents proud to be attending 'Hentai University', although they don't seem to be taking their education very seriously.",
	body: "Ginger is their leader, she's a brunette with a competitive streak. She's got her eye on you.",
	clothes: "Raven seems to be second in command. Raven-haired, she could stand to take an anger management course or two, and she can't seem to stop making innuendos.",
	home: "Goldie is more or less just along for the ride. Tan and blonde, she seems to be quite the trendy girl. She seems to be a lot more experienced than the other two, but is never taken all that seriously due to a very aloof personality.",
	tags: "Threesome, titfuck, footjob",
	artist: "Uo Denim<br>Original Set: Boku no Hajimete wa Bitch Gal",
	author: "NoodleJacuzzi",
};

writeHTML(`
	define gyaginger = sp Ginger; im images/gyaginger/gyaginger.jpg; altColor #EE9F5A;
	define gyablack = sp Raven; im images/gyablack/gyablack.jpg; altColor #646170;
	define gyablonde = sp Goldie; im images/gyablonde/gyablonde.jpg; altColor #FFFBD2;
	define ginger = sp Ginger; im images/gyaginger/gyaginger.jpg; altColor #EE9F5A;
	define raven = sp Raven; im images/gyablack/gyablack.jpg; altColor #646170;
	define goldie = sp Goldie; im images/gyablonde/gyablonde.jpg; altColor #FFFBD2;
`)

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro3Repeat", name: "Find those girls again", requirements: "?location playerHouse; ?time Night; ?trust gyatrio 0;", altName: "", altImage: "",},
	{index: "gingerTalk1A", name: "You spy Ginger meandering around", requirements: "?trust gyatrio 1; ?time MorningEvening; ?location schoolEntrance;", altName: "", altImage: "images/gyaginger/gyaginger.jpg",},
	{index: "gingerTalk2", name: "Ginger is here", requirements: "?trust gyatrio 2; ?time MorningEvening; ?location shoppingDistrict;", altName: "", altImage: "images/gyaginger/gyaginger.jpg",},
	{index: "gingerTalk3", name: "Ginger is here", requirements: "?trust gyatrio 3; ?time MorningEvening; ?location apartmentOutside;", altName: "", altImage: "images/gyaginger/gyaginger.jpg",},
	{index: "ravenTalk1", name: "Raven is here", requirements: "?trustMin gyatrio 1; ?trustMax gyatrio 3; ?time Evening; ?location classroomB;", altName: "", altImage: "images/gyablack/gyablack.jpg",},
	{index: "goldieTalk1", name: "Goldie is here", requirements: "?trustMin gyatrio 1; ?trustMax gyatrio 3; ?time Morning; ?location eastHallway;", altName: "", altImage: "images/gyablonde/gyablonde.jpg",},
	{index: "intro4A", name: "Find those girls again", requirements: "?trust gyatrio 4; ?time Night; ?location playerHouse;", altName: "", altImage: "",},
	{index: "statusQuo1Intro", name: "Invite the girls over", requirements: "?trust gyatrio 5; ?time Night; ?location playerHouse;", altName: "", altImage: "",},
	{index: "statusQuo1Repeat", name: "Invite the girls over", requirements: "?trustMin gyatrio 6; ?trustMax gyatrio 16; ?time Night; ?location playerHouse;", altName: "", altImage: "",},
	{index: "statusQuo2Intro", name: "Invite the girls over", requirements: "?trust gyatrio 21; ?time Night; ?location playerHouse;", altName: "", altImage: "",},
	{index: "statusQuo2Repeat", name: "Invite the girls over", requirements: "?trustMin gyatrio 22; ?trustMax gyatrio 37; ?time Night; ?location playerHouse;", altName: "", altImage: "",},
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
			addFlag("mom", "pop1");
			writeText("The sun has set and the streetlights fizzle on. It'd be best to head home now, otherwise you'll have trouble getting up on time tomorrow.");
			writeText("So, you begin to walk home, only to come across a group of students on your way.");
			writeBig("images/gyatrio/profile.jpg");
			writeText("But they pay you no mind, it seems like you aren't interesting enough to catch their eye.");
			data.player.location = "playerHouse";
			writeHTML(`finish`);
			break;
		}
		case "intro2": {
			addFlag("mom", "pop2");
			writeText("The sun has set and the streetlights fizzle on. It'd be best to head home now, otherwise you'll have trouble getting up on time tomorrow.");
			data.player.location = "playerHouse";
			if (checkFlag("mom", "pop1") == true) {
				writeText("So, you begin to walk home, only to come across a familiar group of students on your way.");
				writeBig("images/gyatrio/profile.jpg");
				writeHTML(`
					ginger How about *him?
					raven Are you kidding? *He looks like *he keeps pill bottles full of *his old baby teeth for easy midnight snacks.
					goldie Kinda... Plain.
					ginger Geez, fine.
					t It seems you still don't have what it takes to catch their eye.
					finish
				`);
			}
			else {
				writeText("So, you begin to walk home, only to come across a group of students on your way.");
				writeBig("images/gyatrio/profile.jpg");
				writeHTML(`
					ginger How about *him?
					raven Are you kidding? *He looks like *he keeps pill bottles full of *his old baby teeth for easy midnight snacks.
					goldie Kinda... Plain.
					ginger Geez, fine.
					t It seems you still don't have what it takes to catch their eye.
					finish
				`);
			}
			break;
		}
		case "intro3A": {
			addFlag("mom", "pop3");
			//var goof = {index: "gyatrio", fName: "Delinquent", lName: "Trio", trust: 0, encountered: false, textEvent: "", met: false, color: "#EA4448", author: "NoodleJacuzzi", artist: "Uo Denim", textHistory: "", unreadText: false,};
			//data.story.push(goof);
			writeText("The sun has set and the streetlights fizzle on. It'd be best to head home now, otherwise you'll have trouble getting up on time tomorrow.");
			writeText("So, you begin to walk home, only to be interrupted on the street.");
			writeBig("images/gyatrio/profile.jpg");
			writeHTML(`
				gyablonde They really are getting smaller, aren't they? <br>Hey, what about that one? The one with the glasses?
				gyaginger *Him? Booooring. Probably doesn't have a popular bone in *his body. You should get your eyes checked, Goldie.
				gyablack Yeah. You see those eyes? *He's a beast in heat, probably searching for girls like us.
				gyaginger Girls like <i>most</i> of us, you mean, Raven.
				gyablack Hey! You wanna fuckin' go? Not my fault Goldie is wearing about as much as an oil wrestler, and you're smuggling bowling balls!
				gyablonde Still, I actually recognize *him. *He's a part of the school staff.
				gyaginger Really? Hey, yeah, I think you're right. I think I saw *him with... What's her name? Quick, go proposition *him.
				gyablack Do you really need to phrase it like that?<br>Hey, nerd!
				t It seems like they're talking to you.
				gyaginger Hey, me and my friends hav-
				gyablack Oi, don't rope me into whatever threesome you have in mind.
				gyaginger Shh!<br>Ahem, me and my friends were hoping you could help us out with something. I'm sure a lonely *guy like you could use some company, and you look like you're used to dealing with serious issues. Help some gals out?
				gyablack Hey, ask if we can stay at *his place and get comfortable. Train fair's a bitch.
				gyaginger Ooh, yeah! You're walking home, right? You look scrawny enough you'd walk straight home the minute it gets dark.
				trans intro3B; Bring them home
			`);
			data.player.location = "playerHouse";
			writeFunction("changeLocation(data.player.location)", "Ignore the thots");
			setTrust("gyatrio", 1);
			break;
		}
		case "intro3B": {
			writeHTML(`
				t ...
				im 006.jpg;
				gyaginger *Munch*<br>Hey, you got any more snacks?
				gyablonde I genuinely cannot tell if this story is meant to be erotic. Raven?
				gyablack Hehe... Huh? What's up? Find one of *his magazines?
				t The three immediately make themselves at home, raiding your cupboard and searching around the house. You may have bitten off more than you can chew tonight, but you'll do your damnedest regardless.
				t ?trustMin succubus 70; Luckily it seems like succubusF isn't coming tonight.
				player So, what did you three need help with, exactly?
				gyablack *He's being pretty forward. Ginger? You gonna tell *him?
				t You take off your jacket.
				gyablonde I will say, the decor here is quite... Plain. Not great at setting a mood.
				t You unbutton your undershirt. Three willing ladies, if things go smoothly you might be able to hypnotise them all in one shot tonight.
				gyaginger Well, *mister, we need you help with something very special. Something the three of use can't quite manage by ourselves.
				gyablack Not that we have high hopes for you, unless you're packing something incredible behind that 'ordinary office worker' look.
				t You stretch out your muscles, you've got a long night ahead of you.
				gyaginger Oh, enough beating around the bush. We need you...<br>To help us become more popular!
				player ... Eh?
				t Your undressing stops.
				gyaginger Popularity! The lifeblood of any young woman's dreams! 
				gyablack The shine of the world's spotlight on a quivering body.
				gyablonde The fleeting rush of dopamine from being recognized as the best using arbitrary metrics.
				gyaginger And once we have it... Our combined charm will finally put <i>her</i> in her place.
				gyablack The blonde megabitch of Hentai University.
				gyablonde kuroF kuroL...
				gyablack Ghh, just hearing her name makes me wanna fist something!
				gyablonde I volunteer-
				gyaginger And that's where you come in! You're our ticket to the top of the school!
				trans intro3C; Continue
			`);
			break;
		}
		case "intro3C": {
			writeHTML(`
				player So, let me get this straight. Your plan is to find attractive *men on the street, have them bring you home, and get them to teach you how to be popular?
				ginger You pretty much nailed it.
				raven To be fair in my last school I got boys to do all the work for me.
				goldie Also to be fair, I'd be out on the street tonight looking for *men anyways.
				raven You never did tell me what you do all night when we aren't around.
				t The three of them talk amongst themselves, quickly filling the room with a white noise of teenage girl chatter.
				ginger Girls, focus!<br>Anyways, it's not like we'd know the answer. I once read a fortune cookie that said "beauty is in the eye of the beholder", so behold already! What does the megabitch have that we don't?
				t Three young women in your home, seemingly running on some bizzare form of logic that'd fit better with drug addicts than college students, stare at you intently. 
				player Well, I guess we could go over some psychology basics, maybe even identify the root cause of this drive to be popular, maybe it stems from a lack of self esteem.
				sp gyatrio; Booooring!
				t Well, hypnosis is certainly an option, but... Oh, what the hell.
				player Or, we could use my <i>magic</i> hypnosis to make you all instantly more popular.
				ginger Ooh!
				raven Ha! Alright, *he's cracked. I'm headed home.
				ginger Aww... But-
				raven No way. My uncle died of hypnosis. Or maybe it was yoga. Either way, I'm not chancing it. See ya!
				ginger Raven, wait! Part of our appeal is our trio dynamic! Also, I don't know this part of town!
				t The ginger and the raven-haired girls leave as a pair.
				player Well, it was worth a shot.<br>... You going to follow them?
				goldie Yeah.
				t And as she leaves, at her own pace, you're alone again.
				finish
			`);
			data.player.location = "playerHouse";
			setTrust("gyatrio", 1);
			break;
		}
		case "intro3Repeat": {
			writeBig("images/gyatrio/profile.jpg");
			writeHTML(`
				goldie Oh hey, it's *him again.
				ginger Heeeey~! You change your mind about hanging out with us three cuties?
				trans intro3B; Bring them home
			`);
			writeFunction("changeLocation(data.player.location)", "Ignore the thots");
			break;
		}
		case "ravenTalk1": {
			writeHTML(`
				raven Well, if it isn't the *man as interesting as a discount bag of vegetables.
				player Oi! I would never be on discount.
				raven Then you're grossly overpriced.
				player I feel like that was a backhanded insult.
				raven Nope. Front of the hand. More of a slap, really. So what did you need? Psychology lecture, magic powers, figure out a plan C to Ginger's popularity problem yet? 
				trans ravenTalk2; Discuss hypnotism
				trans cancel; Go back
			`);
			break;
		}
		case "ravenTalk2": {
			writeHTML(`
				raven ... I've heard the expression of putting your foot in your mouth, but you've managed to fit your whole leg in there. Very impressive, can you breathe like that?
				player Wow, you really don't hold back.
				raven Listen, just because you have a terminal illness doesn't mean I'll go along with your weirdo kinks.
				player I... I'm not sick though. What gave you that idea?
				raven Just wishful thinking.
				finish
			`);
			passTime();
			unencounter("gyatrio");
			break;
		}
		case "goldieTalk1": {
			writeHTML(`
				goldie Yooo.
				player Hello again... You.
				goldie You looking for something? Every time you walk by your eyes dart every which-way. 
				player Just checking for... Nevermind.
				goldie So what's up?
				trans goldieTalk2; Discuss hypnotism
				trans cancel; Go Back
			`);
			break;
		}
		case "goldieTalk2": {
			writeHTML(`
				goldie Nah, that kinda stuff relies on repressed instincts and group psychology. I've never repressed anything, 'cept what I stuff in my bra.
				player Well, it just requires a bit of relaxation. It's got plenty of health benefits.
				goldie Eh, no thanks. To be honest I'm not that great around old folks, it'd be hard to get me to relax in the first place. Plus, we hardly know each other.
				player So you trust me enough to come to my house, but not enough to try out hypnosis?
				goldie You hit the g-spot on the head.
				finish
			`);
			passTime();
			unencounter("gyatrio");
			break;
		}
		case "gingerTalk1A": {
			writeHTML(`
				ginger Oh, it's you! Fancy meeting you here, you come here often?
				player I... I work here.
				ginger Hell yeah you do! "Fake it 'til you make it", right? I read that on a bottlecap somewhere. Not sure where I found it though.
				player Attached to a bottle, maybe?
				ginger No, no way. My drinks are always no cap.
				trans gingerTalk1B; Discuss hypnotism
				trans cancel; Go Back
			`);
			break;
		}
		case "gingerTalk1B": {
			writeHTML(`
				ginger Hmm... Dropping the H-bomb on me again, it's real tempting. But what about Raven and Goldie? We're a team! 
				player They don't seem too interested in the idea.
				ginger Well then let's make them interested! I've seen some of the things hypnosis can do on TV, and all we gotta do is impress them with some fat stacks!
				player Money? Are they really so shallow that-
				ginger Yes.
				player ... Okay.
				ginger And luckily for you, I got a cunning plan! We'll gather up an easy thousand in no time, and drop it right in front of Raven and Goldie! Nobody can say no to ten hundos!
				player ... Are you insane?
				ginger I've never been tested! Anyways, meet me in the shopping district!
				finish
			`);
			unencounter("gyatrio");
			setTrust("gyatrio", 2);
			break;
		}
		case "gingerTalk2": {
			writeHTML(`
				ginger Here we are!
				player You... How'd you get here so much faster than me?
				ginger Silly counselor. "The shortest route between two points is a line"! I learned that from a book!
				player ... And?
				ginger I took a bus!
				player I'm going to have an aneurysm if this goes on any longer. I'm scared to ask, but what's your plan?
				ginger It's simple! You hypnotize me into gaining the ability to juggle, and I start throwing around progressively more dangerous objects until we build up a crowd-
				player I don't even know why I bother. Stay here, I have an idea.
				ginger -and then, once we've got them hooked, you hypnotize them all into thinking they're chickens! And-
				t You walk away from the blabbering girl. It doesn't take long to find a pawn shop, an old wristwatch, some swaying of the metal, and a careful tone later and you're walking out of the store with bills in your hand.
				ginger -The news will pick it up right away! "Chicken pandemic", they'll call it, and we sell the cure! The <i>only</i> cure!
				player I got $400. Good enough for today?
				ginger Eh? Whoa! Look at all that money!
				player I'm starting to wonder how you function. And how you managed to get into college at all.
				ginger Gumption!<br>Anyways, I forgot what I was talking about, but I have another plan! Meet me at the apartment complex on the east side of town!
				finish
			`);
			unencounter("gyatrio");
			setTrust("gyatrio", 3);
			data.player.money += 400
			updateMenu();
			break;
		}
		case "gingerTalk3": {
			data.player.money += 500
			writeHTML(`
				ginger The prodigal henchman returns! Alright, this one's a lot more simple. This one rich-looking *guy brought me over here the other night-
				player This is my house.
				ginger Oh, maybe you know *him! Anyways, the plan. Real easy. Follow my lead!
				t Ginger runs off, leaving you to follow. She runs up the stairs and knocks on the first door she reaches.
				ginger Ding dong! 
				t And after a moment the door opens.
				mom ?trust mom 0; Hello? Who are you?
				mom ?trustMin mom 1; Hello? Oh, playerF! And who are you?
				ginger We're traveling sales*men, we need some money to buy products to sell!
				player ...
				mom ...
				player I am so sorry for this. We'll get out of your hair now.
				mom I... Good luck?
				t She closes the door, confused, as she should be.
				ginger Nice work, partner! Now comes the hypnosis! Now that the idea is planted in her head-
				player Stop. Stay here.
				t ...
				ginger Doot dee doot~<br>This is the most popular tune in the city~<br>Doot dee doot~
				player I'm back. I got another $500.
				ginger Whoa! You pulled the salesman trick without me?
				player No. I've already hypnotized the landlord, and-<br>Nevermind.
				ginger Quick thinking! Landlords are always looking for land to buy, I should have thought about that.<br>No problem, I have another plan! 
				trans gingerTalk3A; ?money 1000; I already have enough
				trans gingerTalk3B; No, no more.
			`);
			updateMenu();
			break;
		}
		case "gingerTalk3A": {
			writeHTML(`
				player No need, I already have a thousand handy.
				ginger Holy cow! I've never seen this much money in one place!
				player Your tuition should be a lot more than this...
				ginger I don't handle it myself.
				player That actually makes a lot of sense.
				ginger Anyways, this is great! I'll get Raven and Goldie together tonight. Meet us at the usual place!
				finish
			`);
			unencounter("gyatrio");
			passTime();
			setTrust("gyatrio", 4);
			break;
		}
		case "gingerTalk3B": {
			writeHTML(`
				player No. No more plans. I'll get the rest myself.
				ginger Whoa... You're right. "The only way to get rich quick is to sell get-rich-quick scams". We gotta work hard and scrounge up that last hunge! Even hypnosis has it's limits, huh?
				player Please take care Ginger. Do you need me to call you a taxi to get home?
				ginger Nope, I'm bussin! See ya!
				finish
			`);
			unencounter("gyatrio");
			passTime();
			setTrust("gyatrio", 4);
			break;
		}
		case "intro4A": {
			writeBig("images/gyatrio/profile.jpg");
			writeHTML(`
				goldie You wanna grab something to eat?
				raven No, I'd rather keep contemplating my anxieties over the future.
				goldie But your stomache is growling.
				raven All my stomache cares about is keeping my body running until the end of the day, but my brain is occupied on keeping my body running for the rest of my life.
				ginger Girls, look who it is!
				goldie Oh, hey. How's it hanging?
				raven Well, look what the cat spit up. I'm pretty sure trash walking around unattended counts as littering.
				goldie You can be really mean sometimes.
				raven Thanks, my therapist says it's a way of deflecting-
				ginger So! I wonder if *he has anything special to show us? Wink wink, nudge nudge? Remember how you'd said you'd bring us something neeeeeat?
				t It's incredibly apparent she's waiting for you to show off the $1000 you said you'd gather.
				raven ... Ginger you know I love you, but how do you even remember to breathe?
				trans intro4B; ?money 1000; Bring the girls home
			`);
			writeFunction("changeLocation(data.player.location)", "Ignore the thots");
			break;
		}
		case "intro4B": {
			writeHTML(`
				raven I gotta admit... I'm impressed.
				ginger It's... It's huge!
				goldie I've seen thicker. Still pretty rare to take in a sight like this one though.
				raven How do you even walk around with the bulge that makes?
				goldie Now hold on girls, a *man whips out something like that to girls like us, it's pretty clear what we should be doing.
				ginger Taking in the view of course! I mean...
				sp gyatrio; That's a lot of cash!
				t Rolling your eyes, you pocket the $1000 you were showing off.
				player Honestly, it's not even that much money.
				ginger See girls? This is the power of hypnosis! Even this destitute *man can work up more money than boys would ever lend us back in highschool!
				goldie Well, more than they'd lend you.
				ginger And if *he can gather up this much, helping us become popular is nothing!
				raven ... Sure.
				player Really? That's all it took?
				raven Well, if Ginger's gonna nag me about it, I might as well just go through with it.
				goldie Yeah. I did something like this before anyways, roleplay is pretty normal among our generation.
				ginger Yes! Not to worry girls, I saw *his hypnosis first hand, it's straight-up magic!
				player Wrong on both fronts. You aren't listening though, are you?
				ginger And all hypnosis is personalized! So, let's do this thing!
				trans intro4C; Continue
			`);
			break;
		}
		case "intro4C": {
			writeHTML(`
				t Three of them all at once, each with their own personalities and tastes. Hypnosis is most effective when tailored to the person, but they'll either snap out of it or fall asleep if you focus on just one at a time.
				player <i>So the best option is to open them up, and then further put them under one by one later... I'll have to start with something to lay a good foundation first.<i>
				t So you kneel down in front of the trio and speak in a soothing rhythmic voice.
				player Listen closely, the rules of today are absolute. 
				sp gyatrio; Absolute...
				player Listen to me. Popularity is everything, I can help you get it. Sexuality, depravity, these are just tools along the way. Nod if you all understand.
				t The three of them nod their heads in barely-conscious approval.
				player Good. Everything you repeat to yourself tonight will sink deep into your subconcious, you won't be able to keep it out of your mind. Now, re-
				t "Three babes~ On the hunt~ Makin our way downtown~"
				player The fuck?
				t A pop song starts playing, shocking the girls out of their trance.
				gyaginger Mmm... Oh! Is that me?
				gyablonde Nnn. No, I think it's my alarm.
				t You sink your face into your palm as your attempts go up in smoke.
				gyablack Pfft, look at sulkie!
				gyablonde Guys, we gotta go, last bus downtown for the night in a few.
				gyaginger Right! Sorry *mister, we gotta make like a tree and scramble!
				t The trio rushes out the door.
				player ... I'm going to make like an egg and crack my head on the counter if I have to deal with those three much longer.
				trans intro4D; Get ready for bed
			`);
			break;
		}
		case "intro4D": {
			writeHTML(`
				t You start relaxing and getting ready for bed.
				t ...
				t Meanwhile...
				gyaginger Three babes~
				gyablonde On the bus~
				gyablack Makin our way downtown~
				t The trio softly sing in the back of the empty bus, streetlights passing by one after the other.
				gyablonde You think *he was legit?
				gyaginger Totally. I bet *he super hypnotized us already. I feel like I could do karate right now.
				gyablack Creeper perv, if *he did hypnotize us *he'd probably just give us sexual commands.
				gyaginger Well, sexuality and depravity are just tools for achieving popularity.<br>... Huh.
				gyablack What's wrong?
				gyaginger Nothing, saying that felt... Strange. Dunno where I heard it from.
				t The three have devolved into sleepy ramblings at this point, not really paying attention to what they say.
				gyablonde So, what kinda 'perverted' commands do you think *he gave you guys?
				gyaginger Oh, for Raven it's obvious. Something related to being a meanie, probably.<br>Something like, 'Whenever you bully someone, it makes you fall in love with them.'
				gyablack "Whenever you bully someone, it makes you fall in love with them." I could see *him trying that. Haha... Ha?
				gyaginger For Goldie... Hmm... You're pretty casual and collected. I could see *him trying to keep you to *himself.
				gyablack You'll never be satisfied with anyone but *him. That's probably what *he'd think of.
				gyablonde "I'll never be satisfied with anyone but *him". You're a poet, Raven.
				gyablack Sleepy. Don't sass me...
				t And as the three ride along in the dead of the night, phrases repeat in their heads with every streetlight they pass by.
				finish
			`);
			setTrust("gyatrio", 5);
			break;
		}
		case "statusQuo1Intro": {
			writeHTML(`
				t You decide to invite the trio back to your place. Hopefully the hypnosis will go more smoothly this time.
				t ...
				im 006.jpg
				player So, are the three of you just going to lounge around all night?
				ginger Maybe!
				goldie At least until the last bus passes through.
				player What ever happened to hypnosis?
				ginger Hypnosis? Pshh, that's old news. Listen, you're old so you don't really get it, but the way to move forward these days is to always look ahead!
				raven Wait, how are we gonna get popular then?
				ginger Practice, of course! Watch. First, let's all imagine a way to directly measure how popular we are, starting from... Hmm... Let's start at zero!
				im meter1.jpg
				ginger Raven! You aren't imagining!
				raven Fiiiine.
				im meter2.jpg
				ginger Boom! We have a direct measurement. Now, I have a cunning plan. Cunning in it's simplicity. Remember, sexuality and depravity are tools for popularity!
				player Wait, that stuck? I figured it'd take longer to get the three of you properly educated.
				ginger Hehe, if there's one thing I know, it's how to completely defy a teacher's expectations!
				t Ginger's friends both place their hands on her shoulders, shaking their heads solemnly as she beams at you.
				raven I swear, this school only cares about how hot you are...
				goldie Still, I'm with Ginger. I haven't been making as much lately, I could use a boost around school, especially compared to kuroF.
				ginger Ugh, don't remind me. I heard she's been hanging out on the roof. That's the coolest place in school! Alright, no more lollygagging. playerF! Time for you to help us out!
				player With... Sex? Well, if I <i>have</i> to...
			`);
			document.getElementById('output').innerHTML += `
				<div id="wardrobeGrid" style="display:grid; grid-template-columns:auto auto auto;">
				</div>
			`;
			setTrust("gyatrio", 6);
			writeWardrobeOption("gyatrio-ginger1", "images/gyatrio/032.jpg");
			writeWardrobeOption("gyatrio-goldie1", "images/gyatrio/017.jpg");
			writeWardrobeOption("gyatrio-raven1", "images/gyatrio/046.jpg");
			writeHTML(`trans cancel; Go back`)
			break;
		}
		case "statusQuo1Repeat": {
			writeHTML(`
				t You decide to invite the trio back to your place.
				t ...
				im 006.jpg
				ginger So, who's on the menu tonight?
				goldie Probably me, right? I have a pretty big pair of advantages.
				raven Take your massive tits and stuff it, Goldie. 
			`);
			document.getElementById('output').innerHTML += `
				<div id="wardrobeGrid" style="display:grid; grid-template-columns:auto auto auto;">
				</div>
			`;
			if (checkFlag("gyatrio", "gyatrio-ginger1") != true) {
				writeWardrobeOption("gyatrio-ginger1", "images/gyatrio/032.jpg");
			}
			else {
				writeWardrobeOption("gyatrio-ginger1Repeat", "images/gyatrio/037.jpg");
			}
			if (checkFlag("gyatrio", "gyatrio-goldie1") != true) {
				writeWardrobeOption("gyatrio-goldie1", "images/gyatrio/017.jpg");
			}
			else {
				writeWardrobeOption("gyatrio-goldie1Repeat", "images/gyatrio/023.jpg");
			}
			if (checkFlag("gyatrio", "gyatrio-raven1") != true) {
				writeWardrobeOption("gyatrio-raven1", "images/gyatrio/046.jpg");
			}
			else {
				writeWardrobeOption("gyatrio-raven1Repeat", "images/gyatrio/046.jpg");
			}
			writeHTML(`trans cancel; Go back`)
			break;
		}
		case "statusQuo2Intro": {
			writeHTML(`
				t You decide to invite the trio back to your place.
				t ...
				im 005.jpg
				ginger Hey, girls, you can feel it, right?
				goldie I think so?
				raven My natural charisma?
				ginger Exactly! We're on the right track here! We need to go even farther, I think we've got a chance to show up the megabitch!
				player Why are you three so obsessed with becoming popular?
				ginger That's easy! A popular girl's always on top of any situation! Becoming rich, famous, and snagging a hottie husband, all of these require the big C!
				player I hesitate to ask-
				ginger CHARISMA! Someday my name will be up in lights, and the first stepping stone is university queen! All without needing to study!
				raven For me it's easy. I miss having boys do all the heavy lifting back in highschool. I swear, attending school here was a mistake, everyone here is already top of the top gorgeous.
				goldie I just want some extra spending money. My dissertation on foreign literature won't write itself when I can't even afford to get stuffed.<br>With food, I mean. Not having any trouble in the other department.
				ginger So, let's pick up the pace!
				player Jeez, give me a minute.
				gyaginger I see... Playing hardball, huh?
				gyablack Big mistake! We're harder than you'll ever be!
				gyablonde I prefer soft balls, myself.
			`);
			document.getElementById('output').innerHTML += `
				<div id="wardrobeGrid" style="display:grid; grid-template-columns:auto auto auto;">
				</div>
			`;
			setTrust("gyatrio", 22)
			writeWardrobeOption("gyatrio-ginger1Repeat", "images/gyatrio/037.jpg");
			writeWardrobeOption("gyatrio-goldie1Repeat", "images/gyatrio/023.jpg");
			writeWardrobeOption("gyatrio-raven1Repeat", "images/gyatrio/046.jpg");
			writeWardrobeOption("gyatrio-ginger2", "images/gyatrio/040.jpg");
			writeWardrobeOption("gyatrio-goldie2", "images/gyatrio/077.jpg");
			writeWardrobeOption("gyatrio-raven2", "images/gyatrio/089.jpg");
			writeHTML(`trans cancel; Go back`)
			break;
		}
		case "statusQuo2Repeat": {
			writeHTML(`
				t You decide to invite the trio back to your place.
				t ...
				im 006.jpg
				ginger So, who's on the menu tonight?
				goldie Not gonna lie, I kinda wanna go tonight. I haven't really been feeling it lately aside from the nights I'm playing ball.
				raven Get in line, I call dibs. *He may be gross, but I wanna have some fun tonight. 
				ginger Sniff... You guys are really coming around to my idea... I'm so happy!
			`);
			document.getElementById('output').innerHTML += `
				<div id="wardrobeGrid" style="display:grid; grid-template-columns:auto auto auto;">
				</div>
			`;
			writeWardrobeOption("gyatrio-ginger1Repeat", "images/gyatrio/037.jpg");
			writeWardrobeOption("gyatrio-goldie1Repeat", "images/gyatrio/023.jpg");
			writeWardrobeOption("gyatrio-raven1Repeat", "images/gyatrio/046.jpg");
			if (checkFlag("gyatrio", "gyatrio-ginger2") != true) {
				writeWardrobeOption("gyatrio-ginger2", "images/gyatrio/040.jpg");
			}
			else {
				writeWardrobeOption("gyatrio-ginger2Repeat", "images/gyatrio/040.jpg");
			}
			if (checkFlag("gyatrio", "gyatrio-goldie2") != true) {
				writeWardrobeOption("gyatrio-goldie2", "images/gyatrio/077.jpg");
			}
			else {
				writeWardrobeOption("gyatrio-goldie2Repeat", "images/gyatrio/077.jpg");
			}
			if (checkFlag("gyatrio", "gyatrio-raven2") != true) {
				writeWardrobeOption("gyatrio-raven2", "images/gyatrio/089.jpg");
			}
			else {
				writeWardrobeOption("gyatrio-raven2Repeat", "images/gyatrio/089.jpg");
			}
			writeHTML(`trans cancel; Go back`)
			break;
		}
		case "gyatrio-ginger1": {
			writeEvent(name);
			passTime();
			raiseTrust("gyatrio", 5);
			addFlag("gyatrio", name);
			writeHTML(`finish`);
			break;
		}
		case "gyatrio-ginger1Repeat": {
			writeHTML(`
				player Alright, Ginger, you're up.
				ginger Woo~! I've been doing a lot of studying, I'll do way better this time!
				raven I can't imagine you've been reading up.
				goldie Let's see where this goes. Popularity's a big thing to her.
				t ...
				player Fff~!
				raven Whoa, you really did...
				goldie Keep it up! One, two, one, two!
				im 037.jpg
				ginger Haha, thanks girls! Hey, *mister, how am I doing?
				player Ghh~!
				ginger Oh? Did I hear "good"?
				im 038.jpg
				ginger Ehehe! Finally, I'm doing somethign right! Faster, faster, come on!
				raven What are the chances *he survives ginger tonight?
				goldie *He'd better not run dry before I get my next turn.
				im 039.jpg
				ginger Haha~! Spurt, spurt, spurt! That one went flying!
				raven Holy shit...
				goldie Alright Ginger, let the poor-
				ginger AGAIN~!
				finish
			`);
			passTime();
			break;
		}
		case "gyatrio-goldie1": {
			writeEvent(name);
			passTime();
			raiseTrust("gyatrio", 5);
			addFlag("gyatrio", name);
			writeHTML(`finish`);
			break;
		}
		case "gyatrio-goldie1Repeat": {
			writeHTML(`
				player Alright, Goldie, you're up again.
				goldie Yes!
				raven That's some enthusiasm. 
				goldie Hey, don't kinkshame me. I haven't gotten off properly in a while.
				ginger Want me to grab you another condom?
				goldie Fuck that.
				ginger Ooh, so then can I-
				raven Stop trying to eat those things!
				t ...
				im 023.jpg
				goldie D-damn... You're a tough one... Really pushing my limits, huh?
				ginger I don't think *he can help it, Goldie.
				raven Hey, isn't this kinda risky?
				goldie Gotta take some risks... Sometimes... To have fun... Now, you ready? Because I can't hold back much longer!
				t Her body, looking like it was tailor made to tempt you...
				im 024.jpg
				t Is lowering itself, inch by inch down your dick.
				goldie Ho~! Ho boy~! I don't think I've ever been spread like this~!
				ginger You got this! You're a queen in the making, Goldie!
				raven I... My head feels funny. I'm pretty sure you should be careful, Goldie. I dunno why, but this seems-
				goldie Deeper!
				im 025.jpg
				goldie H-ho~! It's never felt this good before!
				ginger Jeez, I'm feeling kinda jealous now...
				raven Goldie, I think *he's about to-
				im 026.jpg
				goldie C-cumming~! Fuck~!
				raven Oh jeez.
				ginger A dramatic finish!
				goldie Fff... Damn, what the hell was up with that? I don't think my vibe's gonna cut it anymore... Round two?
				finish
			`);
			passTime();
			break;
		}
		case "gyatrio-raven1": {
			writeEvent(name);
			passTime();
			raiseTrust("gyatrio", 5);
			addFlag("gyatrio", name);
			writeHTML(`finish`);
			break;
		}
		case "gyatrio-raven1Repeat": {
			writeHTML(`
				player Alright, Raven, you're up again.
				raven About time. Hope you didn't pop like a waterballoon after how I left you last time.
				goldie Ooh, you sound a lot more prepared this time. Get in some practice?
				raven Watch and learn, Goldie. Ginger, you can just watch.
				t ...
				im 046.jpg
				raven Alright, a teasing brush there. A rub here.
				goldie Support the... Oh, you got this.
				im 047.jpg
				raven Damn straight I do! Seriously, no restraint at all. Did you miss my touch that much?
				im 048.jpg
				raven Ehe... Ehehe~! Faster, faster, but caaaareful~! You don't get to finish until I say so! And... I...
				im 049.jpg
				raven Do! Ahaha~!
				goldie You're getting a little-
				im 050.jpg
				raven Spurt, spurt! Keep cumming, soak me! Does the sight of my pussy excite you that much~?
				ginger She's gone crazy!
				im 051.jpg
				raven Hoh... Whoa... Y-you really made a mess, jeez... I think I came from that.<br>Er-
				goldie Nice!
				ginger Just from rubbing *him!
				raven Both of you shut up, it was just a fluke! Watch, I won't cum this time, now stop squirming!
				finish
			`);
			passTime();
			break;
		}
		case "gyatrio-ginger2": {
			writeEvent(name);
			passTime();
			raiseTrust("gyatrio", 5);
			addFlag("gyatrio", name);
			writeHTML(`finish`);
			break;
		}
		case "gyatrio-ginger2Repeat": {
			writeHTML(`
				player How about Ginger again tonight?
				ginger Hehe, another win for the redhead!
				raven Quit rubbing it in.
				goldie ... Challenge you for the bathroom?
				raven Fine. Rock... Paper...
				t ...
				im 040.jpg
				ginger Rub rub, rub-a-dub~
				raven Same technique as before.
				goldie Really polished though.
				ginger Alright, teasing's done!
				im 041.jpg
				ginger Hooph~! So big!
				goldie I see a pair of big things.
				raven I swear if I'm not next...
				im 042.jpg
				ginger N-now don't listen to them, focus on me, okay?
				im 043.jpg
				ginger Hah~! Don't be rough, they're sensitive!
				im 044.jpg
				ginger One... More... So... Close!
				im 045.jpg
				ginger Hah~! It feels even warmer! Did you cum extra just for me? Good *boy~
				finish
			`);
			passTime();
			break;
		}
		case "gyatrio-goldie2": {
			writeEvent(name);
			passTime();
			raiseTrust("gyatrio", 5);
			addFlag("gyatrio", name);
			writeHTML(`finish`);
			break;
		}
		case "gyatrio-goldie2Repeat": {
			writeHTML(`
				player Alright, I pick Goldie for tonight.
				goldie Hell yeah~
				raven Okay.
				ginger What, no complaining?
				raven Not after what happened last time.
				t ...
				t *SLAP* *SLAP* *SLAP*
				ginger ...
				raven ...
				im 077.jpg
				goldie FUCK! YES!
				ginger I can't look away...
				raven I feel... I kinda feel like hypnosis might be a real thing now...
				ginger The rhythm really is like magic...
				im 078.jpg
				goldie Fffuck~! Pound my pussy, spread me open until I'm a squirting mess!
				ginger She's just as intense as last time...
				raven Maybe even more...
				im 079.jpg
				goldie Shhhit~! Gonna! G-gonna!
				im 080.jpg
				goldie Close! Close! Don't you fucking stop!
				ginger She needs it so bad...
				raven She's crying... From relief?
				im 082.jpg
				goldie FFFFUCK~! CUMMING~!
				raven G-goldie, you need another round?
				finish
			`);
			passTime();
			break;
		}
		case "gyatrio-raven2": {
			writeEvent(name);
			passTime();
			raiseTrust("gyatrio", 5);
			addFlag("gyatrio", name);
			writeHTML(`finish`);
			break;
		}
		case "gyatrio-raven2Repeat": {
			writeHTML(`
				player Alright, I pick raven again tonight.
				raven Alright! Listen, about last time-
				ginger If you think you can mess her up again like last time, you got another thing coming!
				goldie Yeah, I can't imagine that last time was anything but a fluke.
				raven G-girls, please shut-
				ginger So go ahead, give it your all!
				goldie Let's see if your dick can break even an inch of her attitude this time.
				raven ... Eep!
				t ...
				im 089.jpg
				raven C-careful!
				player They sure are confident on your behalf. I guess I didn't do well enough last time.
				raven N-no, no you did! You really did. So this time-
				ginger Look at her, trying to butter you up. Save your feelings so that she can totally wreck you once you get started.
				goldie You really are savage, Raven.
				im 090.jpg
				raven Tchhh...!
				goldie See? Barely even a peep.
				raven Sh... P-please...
				ginger "Please, I can barely even feel it!" So strong!
				goldie What a strong spirit.
				raven Y-you... Mother-
				im 091.jpg
				raven FFFFFUCKERs~!!!
				im 092.jpg
				raven ...
				ginger Raven?
				goldie Girl? You alright?
				im 093.jpg
				raven I'm sorry... P-please be gentle with me...
				ginger Oh jeez.
				goldie Maybe now she'll drop the act for good?
				ginger Wait, she's been acting?
				im 094.jpg
				raven I surrender...
				goldie Well, not any more.
				raven Y-you bunch of dummies... Quit egging *him on... Next time I'll get mad...
				finish
			`);
			passTime();
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

function writeWardrobeOption(wardrobeImage, wardrobePic) {
	document.getElementById('wardrobeGrid').innerHTML += `
		<img class="bigPicture" id="`+wardrobeImage+`" src="`+wardrobePic+`" 
		onclick="writeEncounter('`+wardrobeImage+`')",
		onmouseover="wardrobeMouseOver('`+wardrobeImage+`')"
		onmouseout="wardrobeMouseOut('`+wardrobeImage+`')"
		style="filter:brightness(50%);">
	`;
}

function wardrobeMouseOver(wardrobeImage) {
	//console.log(document.getElementById(wardrobeImage).style.filter)
	document.getElementById(wardrobeImage).style.filter = "brightness(100%)"
}

function wardrobeMouseOut(wardrobeImage) {
	//console.log(document.getElementById(wardrobeImage).style.filter)
	document.getElementById(wardrobeImage).style.filter = "brightness(50%)"
}


var eventArray = [
	{index: "gyatrio-ginger1", name: "Ginger's Chest Course"},
	{index: "gyatrio-ginger2", name: "Ginger's Body Course"},
	{index: "gyatrio-goldie1", name: "Goldie's Condom Course"},
	{index: "gyatrio-goldie2", name: "Goldie's Unprotected Course"},
	{index: "gyatrio-raven1", name: "Raven's Leg Course"},
	{index: "gyatrio-raven2", name: "Raven's Punishment Course"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "gyatrio-ginger1": {
			writeHTML(`
				player Alright, Ginger, you're up.
				ginger Woo~!
				raven Tch.
				goldie Oh well. Hey, wanna raid *his fridge?
				raven Again? Sure.
				t ...
				im 033.jpg
				ginger Alright! Sexuality is a tool or whatever, life as a big shot, here I come!
				im 032.jpg
				ginger ... It's not working.
				player Use your brain, Ginger. Or at the very least, use those tits.
				ginger Ohhhh! Right yeah, duh. Let's see, I've seen at least one video where... Hold on, let me adjust...
				raven Damn, I wish I had it that easy...
				im 034.jpg
				ginger Ehehe! I think I've got it now! Let's see, now if I just move around...
				player Damn... Keep going like that...
				goldie Some people are born on top of the mountain, some people are born chained to the floor.
				t It's mostly the tightness of her shirt and a pair of genetic advantages, but you're quickly feeling wrapped in bliss.
				im 035.jpg
				ginger Ooh, warm!
				goldie Uh, Ginger? Your top...
				ginger Ehe, yeah? What about it?
				raven That thing could barely hold those bowling balls, I can see it strain- 
				im 036.jpg
				ginger Whaaa!
				goldie Watch out for flying buttons!
				player Oof... We've got a lot to cover...
			`);
			break;
		}
		case "gyatrio-ginger2": {
			writeHTML(`
				player How about Ginger tonight?
				ginger Hehe, looks like this girl's taking home the trophy tonight~!
				raven Really, her again? Come on...
				goldie Come on miss jelly nelly, let's get something to eat.
				raven All you think about is sex and food, Goldie.
				goldie And my dissertation.
				t ...
				im 040.jpg
				ginger Rub rub, rub-a-dub~
				raven She's improving fast.
				goldie She's really putting her heart into it.
				raven She's putting one part of her chest into it, that's for sure.
				ginger Teasing's done!
				player Wait, give me a mo-
				im 041.jpg
				ginger Hooph~! No longer a virgin, this has gotta net me a lot of popularity points!
				goldie Nice form.
				raven Damn, no hesitation. You two are really into this stuff.
				ginger Ooh~ Okay, now, hands up here, okay?
				im 042.jpg
				ginger Check it out, an advanced pose! I saw this one online and the guy moaned like crazy!
				player Ghh... I'll one up you...
				im 043.jpg
				ginger Hah~! You're not a baby, d-dummy! Ooh, that feels good...
				raven Of course her weak spot would be her tits.
				im 044.jpg
				ginger J-just... Like... That~!
				goldie Jeez... Wish it were my turn.
				raven Psh... W-weak. Learn some patience. Hey, where's the bathroom?
				im 045.jpg
				ginger Hah~! It's so warm! I feel... Full~
				goldie ... Raven, I need to use it first.
			`);
			break;
		}
		case "gyatrio-goldie1": {
			writeHTML(`
				player Alright, Goldie, you're up.
				goldie Nice~
				raven Tch.
				goldie Don't be jelly! Hey, could you grab me... Ginger, don't eat that.
				ginger But I'm hungry!
				goldie Gimme.
				t ...
				im 017.jpg
				goldie Oh my, you were hiding a cock like this? Waving around a dangerous weapon like this, if I let you go no girl in the city will be safe. Like, I'm not into older *men, but you...
				player Damn, you really don't hold back. 
				ginger That leopard-print looks really cute! How much was it?
				goldie Dunno, nabbed it from my friend. Maybe you'll meet her some time? Anyways...
				im 018.jpg
				goldie I get the feeling you'll pop early if we don't get started. Now, hold still.
				ginger How's she so good at this already?
				raven Maybe tan blonde girls have some kinda special advantage, like a cheat...
				im 019.jpg
				goldie There. Sorry girls, but I'm all natural.
				raven Bull-
				im 020.jpg
				goldie Oooh~! Alright b...
				ginger Are you alright?
				raven See, this is why you don't try going from zero to sixty.
				goldie No, it's...
				im 021.jpg
				goldie You're way too big! You're stretching the condom already, if I go any deeper this thing will tear!
				player Why's it so small?
				goldie This is a normal size for... Well, I guess that one's from before college. Fine, I know just what to do. Hup... Hup...
				t With gentle, shallow strokes Goldie massages just the tip of your cock.
				t It's not a lot of stimulation, but she's extremely skilled at what is basically an expert lap-dance.
				im 020.jpg
				goldie Hup... Hup...
				player Ghhh...
				im 022.jpg
				goldie Hooh, that was actually... Pretty good. I'm not normally a fan of the bigger ones, but...
				ginger Whoa! I don't really get it, but I bet you did really good!
				raven Maybe try buying condoms for bananas, instead of shrimps next time.
			`);
			break;
		}
		case "gyatrio-goldie2": {
			writeHTML(`
				player Alright, I pick Goldie for tonight.
				goldie Hell yeah~
				raven Why you little...
				ginger Aww cmon Raven, be nice! I bet Goldie'd be happy if you got picked.
				raven ... Fine. But I'm not gonna cheer for her or anything.
				t ...
				t *SLAP* *SLAP* *SLAP*
				ginger S-so is it just me, or-
				raven N-nope. It's definitely a lot...
				im 077.jpg
				goldie FUCK! YES!
				ginger I've never seen her like this...
				raven She's acting like she hasn't gotten off in days...
				im 078.jpg
				goldie Fffuck~! Pound my pussy, spread me open until I'm a squirting mess!
				ginger *Gulp*
				im 079.jpg
				goldie Shhhit~! Gonna! G-gonna!
				im 080.jpg
				goldie Close! Close! Don't you fucking stop!
				im 082.jpg
				goldie FFFFUCK~! CUMMING~!
				raven A-alright, I guess she deserved getting picked this time...
				ginger I really wanna go next, but I'm kinda scared she'll attack me...
			`);
			break;
		}
		case "gyatrio-raven1": {
			writeHTML(`
				player Alright, Raven, you're up.
				raven Obviously. Oi! Don't touch me. Here, I know I've got a lot more work ahead of me than these two hourglasses...
				goldie Need some help?
				raven Shut up and take a seat, I've got this.
				t ...
				im 046.jpg
				raven My oh my, you're throbbing so nicely~! It almost looks like you're in pain, practically begging for release!
				goldie You're still playing the bullying card?
				raven I said shut up! *He's my toy for the night, I'll do what I want.
				ginger You go girl!
				im 047.jpg
				raven N-now... Wow, every time I insult you, it looks like it gets kinda bigger...
				ginger Really? I mean, you get a lot redder.
				goldie She's in loooove~
				im 048.jpg
				raven Alright... Now... Damn, I...
				ginger Try confessing! *Guys love that!
				goldie Give *him a little show, just a little slip of the-
				raven Alright, that's it!
				t Tired of her friends antics, Raven stops midway and starts chasing them around the room.
				ginger Ah~! Don't kick me!
				raven Stop making weird noises!
				player Well... That's about as much as can be expected.
			`);
			break;
		}
		case "gyatrio-raven2": {
			writeHTML(`
				player Alright, I pick raven tonight.
				raven Yes! Er, whatever. Listen, I'm not holding back tonight. The other two have already gotten a massive lead, so...
				ginger You got this! We'll be here the whole time!
				goldie The moment you need any kind of support, we'll be right by your side.
				raven You guys... Is it weird that makes me actually feel better?
				t ...
				im 089.jpg
				raven C-careful, nimrod!
				goldie Did you know the insult "nimrod" actually comes from-
				raven Not the time, Goldie!
				player Careful? Not a chance. It's time to fuck that attitude right out of you.
				ginger You can't! That's her charm point!
				player Watch me!
				im 090.jpg
				raven Tchhh...!
				goldie You were <i>really</i> ready for *him, weren't you?
				raven Sh... You jerky... Jerk...
				ginger She's at a loss for words! Don't give up Raven!
				goldie You just gonna let *him turbodom you like that without putting up a fight?
				raven Y-you... Mother-
				im 091.jpg
				raven FFFFFUCKER~!!!
				im 092.jpg
				raven I-I've been... Defiled...
				ginger Uh, Raven?
				im 093.jpg
				raven My first time... Was supposed to be special...
				goldie Hey, look on the bright side, the second time's supposed to be a lot more fun.
				ginger Yeah! Look on the-
				im 094.jpg
				ginger Hooh damn...
				goldie Yeah... It looks a lot bigger coming out of her...
				raven Y-you bunch of dummies...
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
	{index: "reward", requirements: "?trust gyatrio 37;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/gyatrio/052.jpg", "Art by Uo Denim");
			writePhoneSpeech("gyatrio", "", "You've completed all of the gyatrioF gyatrioL's content for this version! Tune in again later for more!");
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