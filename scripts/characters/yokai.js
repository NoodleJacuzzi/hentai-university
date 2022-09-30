var character = {index: "yokai", fName: "Gekka", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#44d4c3", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false,};

var logbook = {
	index: "yokai", 
	desc: "A wandering spirit from a far-off land, he's come here in search of something. He won't spill the beans on what, though.",
	body: "Ghosts can influence what they look like, and for some reason this one chooses to look like a soft boi. Maybe what he's searching for can help him transform himself?",
	clothes: "His clothes definitely don't match the styles you're used to seeing, either he passed away a very long time ago, or he's from somewhere on the other side of the world.",
	home: "He seems quite taken with your home, for some reason.",
	tags: "Rimming, twins, dickgirl, bratty boi, GHOST BLOWJOB WOO WOO~!",
	artist: "Silver Radish<br>Original Set: Otokonoko to xx No. 4 ~Shinshutsu Kibotsu no Shikijou Musume~",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "meeting1", name: "MEGA EASY CHEAT - Find yokai", requirements: "?flag mom megaEasy; ?ghosts 1; ?time Night; !ghosts 5; ?location map; ?trust yokai 0;", altName: "", altImage: "",},
	{index: "meeting2", name: "MEGA EASY CHEAT - Find yokai", requirements: "?flag mom megaEasy; ?ghosts 6; ?time Night; !ghosts 10; ?location map; ?trust yokai 0;", altName: "", altImage: "",},
	{index: "meeting3", name: "MEGA EASY CHEAT - Find yokai", requirements: "?flag mom megaEasy; ?ghosts 11; ?time Night; ?location map; ?trust yokai 0;", altName: "", altImage: "",},
	{index: "meeting4", name: "Leave the Ghost AR game on before bed", requirements: "?location playerHouse; ?trust yokai 20; ?time Night;", altName: "", altImage: "",},
	{index: "meeting5", name: "A familiar ghost has appeared", requirements: "?location playerHouse; ?trust yokai 21; ?time Night;", altName: "", altImage: "",},
	{index: "yokaiSex3", name: "Leave the Ghost AR game on before bed", requirements: "?location playerHouse; ?trust yokai 22; ?time Night;", altName: "", altImage: "",},
	{index: "meeting6", name: "A familiar ghost has appeared", requirements: "?location playerHouse; ?trust yokai 23; ?time Night;", altName: "", altImage: "",},
	{index: "meeting6Repeat", name: "Summon yokai", requirements: "?location playerHouse; ?trust yokai 24; ?time Night;", altName: "", altImage: "",},
	{index: "yokaiQuo", name: "Summon yokai", requirements: "?location playerHouse; ?trustMin yokai 40; ?time Night;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	var ghostTotal = countGhosts();
	var paidTotal = 0;
	if (checkFlag("yokai", "yokaiLewdFirst") == true) {
		paidTotal += 20;
	}
	if (checkFlag("yokai", "yokaiLewdTongues") == true) {
		paidTotal += 10;
	}
	if (checkFlag("yokai", "yokaiLewdWatersports") == true) {
		paidTotal += 10;
	}
	if (checkFlag("yokai", "yokaiLewdSplit") == true) {
		paidTotal += 10;
	}
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "placeholder": {
			writeHTML(`
			`);
			passTime();
			raiseTrust("mom", 1);
			writeFunction("writeEncounter('placeholder')", "Continue");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meeting1": {
			writeHTML(`
				define ??? = sp Yokai; altName ???; im images/none.png;
				t You tap your phone to catch the ghost, but...
				player ... Nothing? Weird. Maybe it's some weird game mechanic.
				t You probably just need more ghosts to catch this one.
				??? ... 
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meeting2": {
			writeHTML(`
				define ??? = sp Yokai; altName ???;
				t *TAP* *TAP* *TAP*
				player Why isn't this working, do I seriously need more ghosts? Putting a ghost in the middle of my room, making me do all this work...
				t You grumble, resolving to ignore the strange spirit until you catch more ghosts.
				??? Where... Where is it... Where is it coming from?
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meeting3": {
			writeHTML(`
				t *TAP* *TAP* *TAP*
				t Seemingly no matter how many times you tap the boyish-looking spectre, nothing happens.
				player Alright, what the hell... I can clearly see the ghost! This is bullshit...
				t Frustrated, you rub your temple. This ghost game is messing with you lately. Maybe you need to take some time to relax.
				trans yokaiLewd1; Masturbate 
				trans cancel; Nah
			`);
			break;
		}
		case "yokaiLewd1": {
			writeEvent(name);
			setTrust("yokai", 20);
			writeFunction("loadEncounter('system', 'newDay')", "Finish");
			break;
		}
		case "meeting4": {
			writeHTML(`
				t You set your phone down, the app still running, and drift off to sleep.
				t ...
				yokai Curses... Curses... What is this twice-damned sealing stone made from?<br>Hmph, If I cannot plunder it without consent, then I shall torment its owner instead... Tremble, human, for a truly unfortunate fate shall... Befall... You...
				t Barely awake, you stir gently as yokaiF mumbles ominous threats. You suddenly feel a weight on your face, somewhere between a marshmallow and dense fog.
				yokai Nggh... Why does this feel even more embarrassing for me than it does for *him? But a midnight suffocation or two ought to frighten *him to surrender...
				t You awaken to see, well, <i>feel</i> exactly what pressure woke you up.
				im 018.jpg
				trans yokaiLewd2A; Play Along First
				trans yokaiLewd2B; Push Him Down Now
			`);
			break;
		}
		case "yokaiLewd2A": {
			writeEvent(name);
			writeFunction("writeEncounter('yokaiLewd2B')", "Push Him Down");
			break;
		}
		case "yokaiLewd2B": {
			writeEvent(name);
			setTrust("yokai", 21);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meeting5": {
			writeHTML(`
				yokai We meet again, human. I think a proper introduction is in order. I am a spirit from across the world, you may call me yokaiF.
				player playerF. Nice to meet you. So, you're a ghost? Like a proper talking thinking spirit?
				yokai I am no ordinary ghost! I am a yurei, a type of obake!
				player ...
				yokai Such a dumbfounded look... <br>All you need to know is I was brought here from a far off land by some fools who wanted authentic stones for their bathhouse. Ever since then I have wandered in purgatory, searching for... Something.
				player Any idea what?
				yokai Hmph! A fool sits atop a gold mine thinking it's a trove of soft rocks. You have what I need, give it to me!
				player What, you want another round? You seemed pretty freaked out the last time I came.
				yokai I shall admit, when you covered me in your essence, I thought for sure "This is surely the end, I am about to die..." I may have been a touch overdramatic.
				player But you're already dead.
				yokai Don't remind me! That is a sensitive subject.<br>Annoying human, do you enjoy embarrassing me?<br>The... <i>game</i>, as you know it, is collecting real spirits! Minor ones of course, nothing at my level.
				player I'm not giving you my phone.
				yokai Hoh, your bravery is as admirable as it is rare in this age. Then I shall have no choice but to haunt you, and take them by force! Good luck human, you shall need it! Terrible doom shall befall you!
				t Seeming more adorable than threatening, yokaiF floats away through your wall.
				t And then, faintly, you can hear him trying to whisper to you.
				yokai <span style="font-size:50%;">Terrible doom~!<br>Have I frightened you into surrender yet?</span>
				player Nope.
				yokai <span style="font-size:50%;">Doooom~!</span>
				finish
			`);
			setTrust("yokai", 22);
			break;
		}
		case "yokaiSex3": {
			writeEvent(name);
			setTrust("yokai", 23);
			writeFunction("loadEncounter('system', 'newDay')", "Finish");
			break;
		}
		case "meeting6": {
			writeHTML(`
				yokai Huma-playerF.
				player Oh it's you again! Here to give spooky 'ooh'ing another shot?
				yokai No, I've come to admit defeat. Whether it's my own faults or your strengths, I am outmatched. I have come to bargain.
				t He seems resolved, but keeps glancing down at your lips for some reason.
				yokai And while I still have my pride... I will admit you are capable of delivering a greater pleasure than any I have ever experienced before. In life, or afterwards.
				player Really? Wait, does that mean you died a vir-
				yokai Do not continue that line of thinking, or I shall... Throw something heavy at you!<br>Repeatedly! Again!
				player Oof. Well, I guess another boy in the harem wouldn't hurt.
				yokai Ghh...
				player What's wrong this time?
				yokai I am no "boy", human. My form is of my own choosing! ... Mostly. <br>I am beyond the concepts of gender, not that you humans would understand such things.
				player Actually, that's not really too unusual these-
				yokai Regardless! For the sake of convenience, I shall swallow my pride for now. Refer to me however you wish. 'He', 'She', so long as you show me the respect my age deserves.
				player Well, how old are you?
				yokai How rude! I'll have your ton-<br>Gh... My apologies again, I'll compose myself better in the future.
				player Touchy subject, I guess.
				yokai Hmph, clearly I'll need to take breaks from being around you if I'm to keep my composure.<br>But for now... We should solidify our agreement.
				t For someone who wants something from you, he sure is a prideful little brat.
				yokai My bargain is simple. Twenty of the spirits within your capture brick, and in exchange I'll release some of those pent-up urges of yours. Meaningless souls in exchange for a satisfaction of your desires.
				player <i>Well, I guess I have been kinda pent-up since last night...</i> 
			`);
			if (countGhosts() > 19) {
				writeFunction("writeEncounter('yokaiLewdFirst')", "Accept the Deal");
			}
			writeFunction("writeEncounter('meeting6Reject')", "Reject for Now");
			break;
		}
		case "meeting6Reject": {
			writeHTML(`
				yokai N-no?!
				player It's just not that attractive a deal, honestly.
				yokai Hmph! Fine, I'll give you time to think on it. I can't offer anything greater than a satisfaction of your lusts at the moment, but in the future I'll offer greater deals for less in exchange. 
				t He flies off.
				player ... I should probably catch more ghosts.
			`);
			setTrust("yokai", 24);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meeting6Repeat": {
			writeHTML(`
				yokai playerF. My deal stands, twenty souls in exchange for a satisfaction of your worldly human lusts. I can't offer anything greater than simple satisfaction at the moment, but in the future I'll offer greater deals for less in exchange. 
			`);
			writeFunction("writeEncounter('yokaiLewdFirst')", "Accept the Deal");
			writeFunction("changeLocation(data.player.location)", "Reject for Now");
			break;
		}
		case "yokaiLewdFirst": {
			addFlag("yokai", name);
			writeHTML(`
				player I'll take you up on that deal.
				yokai A wise choice. I swear upon my grave that you shall be repaid to your full satisfaction. Now, present thy-
				t *Ziiip*
				yokai ... Thy capturing jar.
				player Ah, right. Payment first.
				t You hold out your phone and open the app. There's a soft blue light, and while your number of ghosts doesn't seem to decrease, your phone feels... Emptier, somehow.
				yokai Hoh...<br>It is like a breath of fresh air...
				player Do you even breathe?
				yokai Cease.<br>Now, present thy... Other tool. I shall drain you beyond what any modern courtesan could hope to achieve, and I shall even manage to do so with my dignity intact.
				t ...
			`);
			setTrust("yokai", 40);
			writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "yokaiQuo": {
			writeHTML(`
				yokai Greetings again, playerF. Shall we bargain?
			`);
			var newSceneCost = paidTotal + 9;
			if (checkFlag("yokai", "complete") == true) {
				newSceneCost = 0;
			}
			console.log("YOKAI SCENE COUNTER COST IS "+newSceneCost);
			if (checkFlag("yokai", "yokaiLewdTongues") == false) {
				 if (ghostTotal > newSceneCost) {
					writeSpeech("yokai", "", "Hmm... I could teach you a spell to improve your oral ministrations.");
					writeFunction("writeEncounter('yokaiBargainTongues')", "The Spell of Tongues");
				 }
				 else {
					 writeText("You can't afford 'The Spell of Tongues'");
				 }
			}
			else {
				writeFunction("writeEncounter('yokaiBargainTongues')", "The Spell of Tongues");
			}
			
			if (checkFlag("yokai", "yokaiNoWS") != true) {
				if (checkFlag("yokai", "yokaiLewdWatersports") == false) {
					 if (ghostTotal > newSceneCost) {
						writeSpeech("yokai", "", "I could teach you a spell revolving around fluid, if you do not find yellow to be a dirty color.");
						writeFunction("writeEncounter('yokaiBargainWatersports')", "The Spell of The Fountain");
					 }
					 else {
						 writeText("You can't afford 'The Spell of The Fountain'");
					 }
				}
				else {
					writeFunction("writeEncounter('yokaiBargainWatersports')", "The Spell of The Fountain");
				}
			}
			if (checkFlag("yokai", "yokaiNoRimming") != true) {
				if (checkFlag("yokai", "yokaiLewdRimming") == false) {
					 if (ghostTotal > newSceneCost) {
						writeSpeech("yokai", "", "I could teach you a spell of complete domination, although it can be offputting to certain folks.");
						writeFunction("writeEncounter('yokaiBargainRimming')", "The Spell of The Circle");
					 }
					 else {
						 writeText("You can't afford 'The Spell of The Circle'");
					 }
				}
				else {
					writeFunction("writeEncounter('yokaiBargainRimming')", "The Spell of The Circle");
				}
			}
			
			if (checkFlag("yokai", "yokaiLewdSplit") == false) {
				 if (ghostTotal > newSceneCost) {
					writeSpeech("yokai", "", "I could teach you a spell to separate spirits in two.");
					writeFunction("writeEncounter('yokaiBargainSplit')", "The Spell of Cleaving");
				 }
				 else {
					 writeText("You can't afford 'The Spell of Cleaving'");
				 }
			}
			else {
				writeFunction("writeEncounter('yokaiBargainSplit')", "The Spell of Cleaving");
			}
			if (checkFlag("yokai", "yokaiLewdEnhance") == false) {
				 if (ghostTotal > newSceneCost) {
					//writeSpeech("yokai", "", "I could teach you a spell to grant additional power to spirits.");
					//writeFunction("writeEncounter('yokaiBargainEnhance')", "The Spell of Enhancement");
				 }
				 else {
					 writeText("You can't afford 'The Spell of Enhancement'");
				 }
			}
			else {
				//writeFunction("writeEncounter('yokaiBargainEnhance')", "The Spell of Enhancement");
			}
			if (checkFlag('yokai', 'gambled') != true && checkTrust('nagatoro') > 101) {
				writeFunction("writeEncounter('yokaiClubIntro')", "Request yokaiF join the Crossdressing Club");
			}
			if (checkFlag ("yokai", "yokaiEndingPrompt") == true) {
				writeFunction("writeEncounter('yokaiEndingPrompt')", "Reconsider yokaiF's final challenge");
			}
			writeFunction("writeEncounter('cancel')", "Go back");
			if (paidTotal > 30 && checkFlag ("yokai", "yokaiEndingPrompt") != true) {
				writeEncounter("yokaiEndingPrompt");
			}
			break;
		}
		case "yokaiBargainTongues": {
			writeHTML(`
				yokai The spell of tongues!
				player Tongue magic?
				yokai Indeed. With this spell your tongue will become like the wind. You shall be capable of being any man, woman, or superior being to orgasm through oral ministration with ease!
				player Oh? Hm...
				yokai I do not like the look you are giving me, human... 
			`);
			writeFunction("writeEncounter('yokaiLewdTongues')", "Accept the Deal");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "yokaiLewdTongues": {
			writeEvent(name);
			addFlag("yokai", name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "yokaiBargainWatersports": {
			writeHTML(`
				yokai The spell of the fountain, it causes a surge of inner fluids. Not sperm, but instead the waters of your-
				player Piss?
				yokai Do not debase a sacred spell with such language!<br>But... I suppose that is not inaccurate. The generation of sacred waters shall be incredible after but a single casting, on yourself or another. Even as a lingering soul I can be made to... Leak, I suppose is the world. Not that I actually will of course. 
			`);
			writeFunction("writeEncounter('yokaiLewdWatersports')", "Accept the Deal");
			writeFunction("writeEncounter('yokaiNoWS')", "Remove this deal forever");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "yokaiLewdWatersports": {
			writeEvent(name);
			addFlag("yokai", name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "yokaiNoWS": {
			writeHTML(`
				yokai Alright, I won't offer this again.
			`);
			addFlag("yokai", name);
			writeFunction("writeEncounter('yokaiQuo')", "Go back");
			break;
		}
		case "yokaiBargainRimming": {
			writeHTML(`
				yokai The spell of the circle, a spell which can completely dominate the mind of weaker beings. Naturally, I would be the one casting it upon you.
				player And why exactly would I want to do that?
				yokai Hmph! I'll have you know the ministrations involved were defined as heavenly by all those who partook in the act. The actual technique has been lost to time, but the details are...
				t yokaiF takes a good long while to whisper into your ear.
				player ... Oh, a rimjob?
				yokai W-what?!
				player Playing the rusty trombone, eating ass.
				yokai S-so the technique has not been lost to time, and it's so common in this era that it has multiple names... Truly mankind has grown bolder since my day...
			`);
			writeFunction("writeEncounter('yokaiLewdRimming')", "Accept the Deal");
			writeFunction("writeEncounter('yokaiNoRimming')", "Remove this deal forever");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "yokaiLewdRimming": {
			writeEvent(name);
			addFlag("yokai", name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "yokaiNoRimming": {
			writeHTML(`
				yokai Alright, I won't offer this again.
			`);
			addFlag("yokai", name);
			writeFunction("writeEncounter('yokaiQuo')", "Go back");
			break;
		}
		case "yokaiBargainSplit": {
			writeHTML(`
				yokai The spell of division, it allows you to cleave a being into a pair.
				player So... I'd make two of you? Wouldn't that hurt?
				yokai I would be split. Luckily I'm quite strong of soul, it would not even phase me. The spell would mean doom for any other you used it on.<br>... Probably. And the effects on me would be temporary. 
			`);
			writeFunction("writeEncounter('yokaiLewdSplit')", "Accept the Deal");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "yokaiLewdSplit": {
			addFlag("yokai", name);
			writeHTML(`
				define twins = sp yokai; im twins.jpg;
				define pink = sp yokai; im pink.jpg; altColor #EC82C4;
				define purpl = sp yokai; im purple.jpg; altColor #A090E9;
				player Okay, let's do this...
				yokai Focus your mind on me. Charge your spiritual power!
				im charging.jpg
				yokai Hoh, not bad! I can feel it... Let loose the gates of your power!
				player Hah!
				t *FWOOOSH*
				im split.jpg
				twins Success!
				player Oof... That was tough...
				pink Oh... Are you alright?
				purpl Hmph! yokaiF, do not debase yourself to worry about *him! *His human limitations are probably catching up with *him.
				pink Eh? But yokaiF, isn't that bad? Will *he die?! Quick, we need to help *him!
				purpl No, you fool! Don't you see? This is our opportunity to finally defeat *him!
				pink But... Can't we just get along? There's two of us now, and *he looks so tired... We could nurse *him back to health...
				trans yokaiLewdSplitA; Go with yokaiF's idea - Let them nurse you
				trans yokaiLewdSplitB; Go with yokaiF's idea - Let them challenge you 
			`);
			break;
		}
		case "yokaiLewdSplitA": {
			writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "yokaiLewdSplitB": {
			writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "yokaiBargainEnhance": {
			writeHTML(`
				yokai The spell of enhancement, it gives your essence to another.
				player So what, I turn into an energy pump?
				sil In simple terms, yes. The act of sex already transfers spiritual power between parties, daemons prey on this one-sidedly, leaving you exhausted. Celestials will only give, leaving you rejuvinated.<br>This spell lets you bypass that and directly pour your energy into anothwr.
				player This one honestly sounds like a bad deal.
				sil Worry not, human. You have my solemn oath that any spiritual power you give to me will be paid back in full. I am a soul of my word. Not only that, but you shall even have a chance to see me in a vestige closer to my true form!<br>... Temporarily, of course.
			`);
			writeFunction("writeEncounter('yokaiLewdEnhance')", "Accept the Deal");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "yokaiLewdEnhance": {
			addFlag("yokai", name);
			writeHTML(`
				define lady = sp yokai; im girl.jpg;
				player Okay, let's do this...
				yokai Focus your mind on me. Charge your spiritual power!
				im charging.jpg
				yokai Hoh, not bad! I can feel it... Let loose the gates of your power!
				player Hah!
				t *FWOOOSH*
				im enhance.jpg
				lady Uhuhu~! 
				player Gh...
				lady And so the mighty titan who once devoured me wavers~<br>I certainly don't think I was given <i>that</i> much.
				player Just had... To catch my breath. So, a ton of energy poured right into you, and this is the form you take?
				lady Absolutely~
				im 118.jpg
				lady Care to take a closer look? In my time I was worshipped, nearly at the level of a divine being, the idol of dozens of fertility festivals...<br>And I can assure you, I did much more than watch.
				player Overconfident as always, I see.
				lady Uhuhu~<br>You're brimming with unearned confidence yourself, aren't you? So, shall we dance? I think you'll find that tonight I'll be quite the capable partner. But I wonder, who shall lead?
				trans yokaiLewdEnhanceA; You're on top - Challenge yokaiF
				trans yokaiLewdEnhanceB; You're on bottom - Let's see that yokaiF's got 
			`);
			break;
		}
		case "yokaiLewdEnhanceA": {
			writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "yokaiLewdEnhanceB": {
			writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "yokaiClubIntro": {
			writeHTML(`
				yokai Eh? If you seriously believe that I will debase myself in such a way, you are horribly mistaken. 
				player Oh? Well I suppose I'll keep these ghosts to myself then.
				yokai You blasted fiend... Assuming I made this contract, what would it actually entail?
				im 096.jpg
				yokai Eh? EH?! What on earth?! While I am beyond being a man, I still take justified pride in my "manhood", if you can even comprehend such a concept, these are horrifying! What manner of insanity has befallen you?
				player Actually, these outfits are quite popular. They "transcend gender", I believe you put it, more than a few boys around school wear them.
				yokai Mrgrgr... You speak with confidence, to call you a liar would probably backfire.<br>Still... I can't believe you! I am well aware of human culture, I know that these outfits are debasing! I call your bluff, human!
				player A bet, then.
				yokai A bet! One is merely a single pervert, two is an impossible gamble. Find me Three who match your claim, and if you fail, I take as many spirits from your soulcatcher as I please.
				player And if I win, you take the deal and we play a little game of dress-up, for free. 
				yokai Deal!
			`);
			addFlag("yokai", "gambled");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "yokaiClub1": {
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "yokaiClub2": {
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "yokaiEndingPrompt": {
			writeHTML(`
				yokai Salutations again, human!
				player You seem a lot more active, yokaiF. Find the soul of an energy drink or something?
				yokai Humu humu, fool. This is merely my growth as a lingering soul. I've consumed not only much of your extra spiritual essence, which you oh-so-kindly filled me with directly, as well as the spirits from your capture device.
				player So what, you don't need me anymore?
				yokai Give yourself the credit you deserve, playerF! I would not be nearly as close to my original form if not for you. In fact, perhaps... Hrm.
				player Got another wager in mind?
				yokai Perhaps. But... For me to make an investment in you, human, I'd need some form of promise between use to ensure that my gamble leads to a just reward.<br>A partnership, one which I can personally assure you will last until the end of our... Challenge.
				player A battle of wills, then?
				yokai Indeed. My terms are that you may continue your dalliances with other humans diring the day, but for as long as it takes, even for an eternity if need be, I shall challenge you every night.<br>Does that sound agreeable to you?
				player Hmm... I'm confident I'll win... But that's quite the investment. 
			`);
			addFlag("yokai", name);
			writeFunction("writeEncounter('yokaiEndingAccept')", "Accept the Deal");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "yokaiEndingAccept": {
			writeHTML(`
				player I accept your terms.
				yokai Huhu~! Then our battle, and our partnership begins tonight. I wonder if I'll make you submit before the sun rises?
				player Kiss my ass, yokaiF. I'm winning this one.
				yokai Do not get ahead of yourself, human. You're rushing right into the jaws of defeat~!
				t And so, your nighttime challenges begin.
				t ...
				im 034.jpg
				t Every night, without fail, yokaiF would appear before you with yet another night-long challenge.
				im 054.jpg
				t Most nights you got no sleep, but with a little magical help it didn't matter, you felt alive regardless.
				im 063.jpg
				t Some nights were close, very close. yokaiF came to screaming orgasmic murder, everything short of surrender.
				im 092.jpg
				t And some nights it was flipped. yokaiF tried a myriad of spells.
				im 137.jpg
				t And a myriad of forms.
				im 118.jpg
				t But ultimately, even up to today, there's no clear winner.
				t ...
				player Gh... How many does this make?
				yokai I, ngh... I've lost count, to be honest...
				player It's c-clearly been a long time now...
				yokai Y-yes, I wasn't aware your spiritual energy would have quite such a... <i>Pronounced</i> effect upon me... I knew it might make me seem a little different...
				im 107.jpg
				yokai B-but this is nothing! I'll defeat you this night, for sure!
				t Every night, having drained you of cum until you had barely a drop left, yokaiF has been left practically bloated. He looks pregnant, honestly.
				im 109.jpg
				yokai Ghh~!
				player You... Nh... You know, I don't think we talked about what would happen if we won...
				yokai St-stop distracting me! If I lose focus, I'll leak! And besides, it's obvious! If I win, I intend to take you as mine, my servant, permanently!
				player Interesting... I was also thinking... Of marriage...!
				yokai M-m-?!
				im 111.jpg
				yokai NGHHH~!!!
				im 112.jpg
				yokai Hough... Hoh... Marriage... Happy...
				im 113.jpg
				t Who knows how long it will take for you two to surrender? But it doesn't matter, really. The journey here has been it's own reward. 
			`);
			addFlag("yokai", "complete");
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "yokaiLewd1", name: "An Unexpected Guest"},
	{index: "yokaiLewd2A", name: "Entertain the Brat"},
	{index: "yokaiLewd2B", name: "Push Them Down"},
	{index: "yokaiSex3", name: "Hesitation Is Defeat"},
	{index: "yokaiLewdFirst", name: "First Bargain"},
	{index: "yokaiLewdTongues", name: "Bargain for Tongues"},
	{index: "yokaiLewdRimming", name: "Bargain for a Pleased Donut"},
	{index: "yokaiLewdWatersports", name: "Bargain for Fountains"},
	{index: "yokaiLewdSplitA", name: "Bargain for Cleaving - Pink's Idea"},
	{index: "yokaiLewdSplitB", name: "Bargain for Cleaving - Purple's Idea"},
	{index: "yokaiLewdEnhancementA", name: "Bargain for Enhancement - Player on Top"},
	{index: "yokaiLewdEnhancementB", name: "Bargain for Enhancement - Player on Bottom"},
	{index: "yokaiClub1", name: "A Crossdressing Ghost is wearing THIS?!"},
	{index: "yokaiClub2", name: "A Crossdressing Ghost is wearing THAT!?"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "yokaiLewd1": {
			writeHTML(`
				t You decide to take a breath and have a fap. It's not something you do frequently, especially after moving here, but variety is the spice of life.
				t ... Or so they say. Regardless, you get started, setting your phone down with the app still open.
				t ...
				im 004.jpg
				yokai Finally, enough to materialize... Now, where is it? I must be careful, the human's acuity to perceive me is increasing. If I don't focus on staying-
				im 006.jpg
				yokai ... Is *he... 
				im 007.jpg
				t The spirit's focus waning, their form suddenly becomes visible due to the arcane nature of the app!
				t The detail on their form, the cool air of their breath on your naked lower body, this is no ordinary app ghost!
				player Wh-who are-
				yokai Tch-! I lost focus!<br>Damnation on you for distracting-
				im 009.jpg
				player Ghh~!
				yokai Waaah!
				im 010.jpg
				player Nnn... Uh, sorry about that... Are you real, or am I hallucinating?
				yokai ...
				im 011.jpg
				player Uh...
				im 012.jpg
				player Oh, thank you. You know, I always thought telekinesis was a cool-
				im 013.jpg
				t *BONK*
				t And your vision goes black. 
			`);
			break;
		}
		case "yokaiLewd2A": {
			writeHTML(`
				im 018.jpg
				yokai Mmmr... Let's see you maintain your resolve now...<br>Behold, human, I may not understand your sealing stone, but I have already learned a technique unique to this modern era.<br>Oi! Awaken, I am tormenting you! If you don't hand over tha-
				im 019.jpg
				yokai -aaAAAAAAH-! 
				t Half scream, half squeal, his composure vanishes as you extend your tongue.
				im 020.jpg
				yokai Gyah! What are you doing?! This is not how things are meant to be!
				player <i>... What was he expecting?</i>
				yokai Aaah~! I-I see, this is your attempt to resist the "Sit upon my face" t-technique! I did not know it had a counter, p-perhaps I should have more thoroughly... Thoroughly read the manuscript from that b-bizarre shop...
				t As he struggles to eek out each word, his turns a shade darker. 
				yokai Nnn, if you e-expect me to surrender... Ouhh... Then... Then...!
			`);
			break;
		}
		case "yokaiLewd2B": {
			writeHTML(`
				player <i>Alright, it seems like I can touch him just fine, so... Alley-oop!</i>
				im 022.jpg
				yokai GYAAAH! DEATH HAS COME FOR ME! NO, I AM TOO YOUNG!
				player ... You're already dead.
				im 024.jpg
				yokai Ghh... Don't embarrass me! My plans have failed, I shall skulk off and leave you to your own matters... 
				t He dematerializes, falling through the floor. Having escaped, he'll probably find the time to catch his breath down there.
				player Well, I guess that's all for tonight.<br>I wonder if that counts as a wet dream... 
			`);
			break;
		}
		case "yokaiSex3": {
			writeHTML(`
				yokai Hmph... You are testing my patience, human. But let us see exactly where your limits lie. 
				t An adorable phantom floats across the room, his prey already in sight.
				yokai Of course, *his body is at rest for now. This time anyways. I'll start with a simple curse of ennervation...
				t A blue spectral flame flies from the tip of his finger towards your sleeping body. Although it's so small it's barely a spark, it grows and wraps around you body.
				yokai Gh... That was harder than it should have been. I have not the patience or the time to make a proper menace of myself. I will strike where your heart is. <br>Rise. A simple puppeteering spell ought to have you in the... Palm of... 
				im 065.jpg
				yokai ... Damnation. Even while unconscious, you still prove to be a thorn in my side. Is my spellcraft this weak? Or is your heart too black for my... No, impossible.<br>Brace yourself, human, for a... Single...
				im 068.jpg
				yokai A single...
				im 067.jpg
				yokai Ghh... Damnation again, yokaiF, why does cowardice still cling to me like rats at my robe?! This human is nothing special! 
				im 066.jpg
				yokai Hoh~<br>... I... I suppose I may have miscalculated. 
			`);
			break;
		}
		case "yokaiLewdFirst": {
			writeHTML(`
				player Now lean down farther.
				im 057.jpg
				yokai Ngh... How embarrassing... You may be in a position of dominance for now, but do not mistake yourself as superior to me.
				player You're really bad at bargaining, you know that?
				yokai Pride, strength, and humility. You need only two of those to achieve greatness in this world.
				player I can see which one you abandoned.
				im 058.jpg
				yokai Nhhh...
				player But let's see if we can knock that pride right out of you.
				yokai Good luck, human... I am... Indomitable...! You cannot-
				im 059.jpg
				yokai Houugh...! P-pressure! Slow down!
				player No, I don't think I will! In fact...!
				im 037.jpg
				yokai Hou~!  S-stop this! My body is-!
				player Your body is behaving better than you, it clearly knows when to... Submit!
				im 038.jpg
				yokai Nyooouh~! S-so warm!
				im 039.jpg
				yokai Hoh... Hoh... Finally...
				player Who said I was done?
				yokai Eh?
				im 040.jpg
				t ...
				yokai Huff... Huff...
				im 080.jpg
				yokai Making me use a portion of my valuable power just to render *him unconscious...<br>And yet, that I felt the need to escape... Shameful... <br>Let's see how you...!<br>N-no! Control yourself, yokaiF. This is my defeat.
				t yokaiF manages to find the self control required to not pelt your unconscious body with small objects.
				yokai Hmph. This is but a single defeat. Once I've regained all my power, you will...<br>Nevermind. Sleep soundly for now, human, I'll challenge that daunting lust of yours again.
				t ...
				player Ugh... Did I fall asleep? I wasn't done though...<br>Oh, a letter.
				t "To playerF, I hope this letter finds you in good health.
				t With this dalliance our deal is forged. I'll take what I'm owed and nothing more. When next we meet I'll present you with more favorable terms.
				t I am in possession of numerous spells, many of which are yours to learn. Offer ten more souls for each, and I shall impart unto you sacred knowledge that will surely appeal to your degenerate heart.
				t - yokaiF."
				player He still talks like a stiff board even in letters, I guess. 
			`);
			break;
		}
		case "yokaiLewdTongues": {
			writeHTML(`
				yokai Done!
				t yokaiF draws an energy from your phone, and transfers a different energy that flows into your body.
				t And of course, you cast it immediately, and yokaiF will make a good test subject.
				im 023.jpg
				yokai Gyaaa! Y-you brute! You fiend! You cannot tell me you seriously mean to use the spell on me right now!
				player Don't act like you don't want it. Let's see what this spell can do... 
				im 024.jpg
				yokai Yyyou... You feel like an eel, have you no decency?
				player ...
				im 025.jpg
				player Not really.
				yokai Ghh~
				player Is the spell wor-
				im 026.jpg
				player Oh, I guess so.
				yokai Th-this is merely a reflex! 
				player Alright then, time to push this spell to the limits!
				yokai Do not do that, do not-!
				im 027.jpg
				yokai GYAAAAA~! 
				t ...
				yokai *Huff*... *Huff*...<br>F-finished?
				t Barely able to stay all-together, yokaiF dreamily keeps pretending like he can resist you.
				im 028.jpg
				player Fine, if your mouth won't be honest, then I'll let another part of you answer. If you cum in the next minute, that's the same as admitting defeat. Got it?
				im 029.jpg
				yokai Hoho... O-overconfidence will be your... Go ahead, let us test my magic against your-
				im 030.jpg
				yokai GHHHH~!
				im 031.jpg
				t You win! And as a reward, well, you didn't think that far ahead. So what followed was more of a torturous session of tongue-lashing which yokaiF's body very much enjoyed, but his pride did not. 
			`);
			break;
		}
		case "yokaiLewdWatersports": {
			writeHTML(`
				yokai Done!
				t yokaiF draws an energy from your phone, and transfers a different energy that flows into your body.
				t And of course, you cast it immediately, and yokaiF will make a good test subject.
				yokai Hmhm, you've been fooled!<br>Simply... Simply because you cast such a spell does not mean you will always see results. I have a great deal more self control than you will find elsewhere.
				player Then why are you fidgeting so much?
				yokai I... I Am not! 
				t ...
				im 073.jpg
				yokai Hoh~!
				player Gh... Where's that self-control you were talking about?
				yokai St-shtop, pleashe~! I'm shorry~!
				player So this... Is what breaks you... Nnn~!
				im 074.jpg
				yokai GGggg... umming...
				player *Huff*... *Huff*... Congratulations... Guess you managed to last...
				im 075.jpg
				player Well, you admitted defeat, so I guess your dignity isn't totally intact.
				yokai I... I did it...
				im 076.jpg
				yokai I'm... I'm the besht~ Ehehe~
				im 077.jpg
				t After tonight, yokaiF will absolutely never speak of this again. Still, you're glad he could feel like a winner for once, it must have been a huge relief.
			`);
			break;
		}
		case "yokaiLewdSplitA": {
			writeHTML(`
				define twins = sp yokai; im twins.jpg;
				define pink = sp yokai; im pink.jpg; altColor #EC82C4;
				define purpl = sp yokai; im purple.jpg; altColor #A090E9;
				purpl I cannot believe I am agreeing to this...
				pink Mpph... You said you'd help, and this <i>is</i> *his reward for the souls...
				purpl I know, I know! Cease your prattle, to tend to *his weary spermsacks was your idea!
				pink Mmmphokay...<br><i>So mean...</i>
				im 136.jpg
				player Gh... That feels amazing...
				im 137.jpg
				purpl Huhu, of course~! I am so naturally skilled you could barely handle one yokaiF, and now you're buckling at two~!
				pink <i>Mm, so easily manipulated... I suppose it's clear which half took my pride...
				purpl Prepare your heart, human. For you aren't about to face only two angles of attack...
				im 138.jpg
				purpl Mmm, but six! Huhuhu~!
				pink Mmmph...<br><i>Aren't we supposed to be nursing *him? Oh well, I hope it feels good at least...</i>
				t Four skilled hands, two perfect mouths, the pair assault you relentlessly from more angles than you can wrap your head around.
				t And seemingly without warning...
				im 139.jpg
				purpl Hoh! It's like a fountain!
				pink Ghlllf~!<br><i>I can feel *his balls clenching! And *his prostate is throbbing!</i>
				t Your cum rockets high and then arcs down, painting the heads of both yokaiF.
				im 140.jpg
				purpl Huhu~
				pink Y-you aren't angry?
				purpl Why should I be? This jizzm seeping down my features is practically liquid praise!
				pink I guess I got all the rationality between us...
				purpl What was that?
				pink Nothing, yokaiF... *He's still hard, so...
				purpl So we shall begin again, of course! And be vocal about it, human! I demand you show appreciation for our technique and grace! 
			`);
			break;
		}
		case "yokaiLewdSplitB": {
			writeHTML(`
				define twins = sp yokai; im twins.jpg;
				define pink = sp yokai; im pink.jpg; altColor #EC82C4;
				define purpl = sp yokai; im purple.jpg; altColor #A090E9;
				im 141.jpg
				purpl Hrm... This is, perhaps...
				pink Embarassing? Well, this was your idea, after all.
				purpl A-and it was a great idea! In *his weakened state...
				pink *He doesn't look weakened anymore to me. 
				im 142.jpg
				purpl Hough~!
				pink H-hah~!? W-why am I feeling good too?! It's like *he's pounding me too!l
				im 143.jpg
				purpl Ghh! F-fool, such talk will merely excite *him more! Ough, *he's scoring my insides raw!
				pink F-faster, please, I want to feel even better~!
				purpl Noouh, s-slow down~
				t Whether it's because of the spell draining you, or the perfectly petite pair of ghost bois beneath you, you find yourself rapidly approaching climax.
				pink yokaiF, I think *he's-
				purpl Sh-shut up and let me focus, yokaiF, or... Or I'll...
				im 144.jpg
				twins Hooough~!
				im 145.jpg
				t The pair of them pant with exhaustion, even though only one of them was getting railed.
				pink Hhh... I'm leaking, from nothing at all... yokaiF?
				purpl ...
				pink I guess we lost the challenge... Well, you were the only one interested in winning, I guess... playerF, are you still-?
				im 146.jpg
				pink Hhiii~!
				purpl Bwuh?! Wh-what just happened~? Did I fall unconscious? W-why do I feel so-
				im 147.jpg
				pink Hah~!
				purpl Hough~! S-stop, I already lost! I need rest, or... Or...
				im 148.jpg
				twins Ooough~!
				im 149.jpg
				twins ...
				purpl I believe... We've been defeated...
				pink Yes... We thought it would be two against one...
				purpl But really, it was twice the normal pleasure, and spread across two minds as one...
				twins We lose again, playerF~ 
			`);
			break;
		}
		case "yokaiLewdRimming": {
			writeHTML(`
				yokai Easily!
				t yokaiF draws an energy from your phone, and you notice the air around him shimmer.
				yokai Hmhm~!<br>Apologies human, but after tonight I don't think you'll have much interest in pursuing more spells. After tonight, you shall be like wet clay in my palm.
				player You're not embarassed or anything? You're about to rim me.
				yokai Hmph! So crude. Stop trying to embarass me, this was a technique known only to the most elegant and renowned of courtesans!
				player They were probably renowned for a reason different than you think...
				t ...
				im 084.jpg
				yokai Hoo~<br>Any... Hoo~ Last words...?
				player Kinda tickles. You seem a lot more focused than before.
				yokai Of course. The spell fills me with passions and energy, absolutely necessary to dominate the weak-willed.<br>... Supposedly. I've also heard it called the 'spell of love'.
				player Uhuh. I guess you've never done this be-
				yokai Begone thine thoughts!
				im 085.jpg
				player Hoh~!
				yokai *Mlm*~<br>M-merely tasting the waters, as it were, I'm almost f-feeling doozy...
				player I think the spell is too much for you!
				yokai Y-yes, I should... I should most certainly stop...
				im 086.jpg
				yokai Hhhm~!
				t Ignoring his words, yokaiF dives tongue-first into pleasuring your anus with his diminutive tongue.
				player H-holy shit, you're eating my ass like a pro!
				yokai Mmm~!<br><i>Idiotic human, using such crass language! Something this lovely cannot be defiled by such things!
				im 088.jpg
				yokai Hmm, perhaps some extra stimulation shall quiet you. I shall hear no more foolishness, only you crooning with pleasure!
				player Ghh~! I...!
				im 089.jpg
				player Cumming~!
				im 090.jpg
				yokai Ooooh~!
				player Hhh... My back feels... Wet? Did you cum from finishing me off?
				yokai D-do not be foolish... This cannot be nearly enough, for either of us~
			`);
			break;
		}
		case "yokaiLewdEnhanceA": {
			writeHTML(`
				define lady = sp yokai; im girl.jpg;
				im 119.jpg
				im 120.jpg
				im 121.jpg
				im 122.jpg
				im 123.jpg
			`);
			break;
		}
		case "yokaiLewdEnhanceB": {
			writeHTML(`
				define lady = sp yokai; im girl.jpg;
				im 124.jpg
				im 125.jpg
				im 126.jpg
				im 128.jpg
				im 129.jpg
				im 131.jpg
			`);
			break;
		}
		case "yokaiClub1": {
			writeHTML(`
				yokai ...
				player Quiet this round, aren't we?
				yokai A-and why would I ever be vocal for this, human? What we are doing... Is entirely ordinary...
				player Really?
				im 098.jpg
				player Because your ass is a <i>lot</i> tighter than I expected.
				yokai I merely... Merely mean to end this dalliance as soon as possible... It is your own fault if you lack the stamina to finish this time-
				im 099.jpg
				yokai ...
				im 100.jpg
				yokai Mmph~<br><i>Damn this human! Why does *he treat me like I am some cheap toy?!<br>And damn this body of mine for liking it! I'll purge these disgusting instincts from myself once I'm rid of this cursed attire!</i>
				t Despite his usual grumpiness and pride, yokaiF finds himself grinding against your midsection, rubbing his tightly-packed member between a sandwich of flesh.
				yokai <i>And once I'm free... Free...<br>Ghh, I lost focus, no... Nnnnooooo!</i>
				im 101.jpg
				yokai Ggghh... Umming...
				im 102.jpg
				yokai Hohh... You... You are determined to break me, aren't you...? How many times will you make me soil this shameful attire?
				player Hey, it's the slut wearing them that makes these clothes hot. Give yourself some credit.
				yokai Ngh... Calling me cute, don't expect me to enjoy something like that...

			`);
			break;
		}
		case "yokaiClub2": {
			writeHTML(`
				yokai Hoh... Hoh...! C-cease that at once!
				player Oh? Cease what?
				yokai Y-you know what, do not play stupid!
				player Oh, but I'm just a poor, dumb human. You need to be specific, what exactly do you want me to stop?
				yokai M-my...
				player Could it be... These?
				im 103.jpg
				yokai Hooough~
				player You know, for someone so flat, you're really sensitive here.
				yokai Y-you fool...! Nngh, I told you I am beyond gender! You are not playing with a man's chest, you ape!
				player Ah! So these are breasts then. So if I just...
				im 104.jpg
				yokai Hiii~!<br><i>Must... Resist...! Cannot reveal... Weakness!<br>Pride! Strength! I... Am..!
				im 105.jpg
				yokai <i>CUMMING! GHHH!</i>
				player Wow, you're really squirting, huh? How about I...
				yokai Eh?! N-no, wait, if you-
				im 106.jpg
				yokai Hhhagh~! 
				t The added stimulation on his nipples is clearly too much for the already squirting brat. 
				player Sorry nagatoroF, hope I don't make too much of a mess, this one just can't hold back.
				yokai H-hoooough~! 
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