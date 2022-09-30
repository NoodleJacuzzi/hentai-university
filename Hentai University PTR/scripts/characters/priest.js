var character = {index: "priest", fName: "Kay", lName: "Leah", trust: 0, encountered: false, textEvent: "", met: false, color: "#FFFED7", author: "NoodleJacuzzi", artist: "Akagai", textHistory: "", unreadText: false,};

var logbook = {
	index: "priest", 
	desc: "An effeminate priest who claims to have visited heaven, and found it to be an endless paradise of soft femboi angels.",
	body: "He's quite short and keeps his skin soft and smooth, clearly trying to realize the image of how he percieves the divine host of heaven.",
	clothes: "He wears something between a priest's garb and a nun's habit, it's a very humble getup and it looks hand-sewn.",
	home: "He lives in the park, tending to his ramshackle church dedicated to his vision of heaven. A truly cruel person might call him a hobo, but you know better. Right?",
	tags: "Vanilla, Worship, No Swearing",
	artist: "Akagai",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro1", name: "You spy an old sign on the road", requirements: "?trust priest 0; ?location parkDistrict;", altName: "", altImage: "",},
	{index: "quoEventCheck", name: "priest's church is here", requirements: "?trustMin priest 1; ?location parkDistrict;", altName: "", altImage: "",},
	{index: "priestHotelBad", name: "A familiar face is here", requirements: "?flag demon hotelBad; ?flag priest guestDemon;", altName: "", altImage: "",},
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
				t It's a small, dingy sign meant to give directions. One is an arrow pointed straight up, labeled 'Heaven', the second is an arrow pointed off towards a dilapidated shack, labeled 'Shepherd'. 
				im 055.jpg
				priest Salutations wandering soul, I am the priest here, priestF. Are you lost?
				t And as if on cue, a nun appears. They look... Off. Perhaps its the habit with the texture of a worn sack, the complete lack of any trace of makeup on the beautiful face, or perhaps the androgynous air around them.
				priest Oh my. *Sir, could I ask you to come with me? I don't mean to alarm you, but there's a matter of your immortal soul I'd like to discuss.
				player <i>Well... I guess I don't have anything better to do. Plus a nun is a good break from the norm.</i>
				trans intro2; Follow the nun
				trans cancel; Ignore the nun
			`);
			break;
		}
		case "intro2": {
			writeHTML(`
				t You follow the nun into the shack.
				im 056.jpg
				t It's like the interior of the building is just one big dingy basement.
				player So what does the nunnery want with me?
				priest Ah, apologies, *sir. I am priestF, a priest, one who strives to approach a perfect form. From what I can see of your soul you don't share these same ideals.<br> You see, I have been gifted the ability to peer into a *man's soul, and I can see yours is like pitch. Like a dark ball, completely clouded by myriad lusts.
				player Rude.
				priest I'm quite sorry, it's just that I fear on your current path the possibility of reaching heaven may be lost to you.
				player Right, very informative. I'll-
				priest And all of God's children ought to be able to experience a paradise of gorgeous angelic harems!
				player ...
				trans intro3; You have my attention
				trans cancel; I'm leaving now
			`);
			break;
		}
		case "intro3": {
			writeHTML(`
				priest You see, I was once a boisterous and strapping man, I cut quite the imposing figure. But during my time in heaven I came to envy the angel's forms.
				im 060.jpg
				priest Ehe... Ehehe... Their wonderful, petite bodies. Their cute little pen-
				player ...
				priest ...
				im 059.jpg
				priest I came to envy them, and as a gift they spoke unto me 'be beautiful', and I did. I must have spent years as a member of the 'Cute Fitness' sphere alone, let alone the 'Skincare' and the 'Body Hair Removal' spheres.<br>In exchange I've resolved to guide lost lambs to that paradise.
				player Angels turned you into a woman?
				priest Eh? No, my member remains intact. Though to show I do not bear the sin of pride I partake in no pleasure of my own shaft.<br>It is quite large, would you like to see it?
				player What.
				priest Hmm?
				im 057.jpg
				priest I can see you feel trepidation, I understand. Though heaven's mountain might seem impossible to scale, by my hand the path shall be marked and by the Lord's grace shall your legs find the strength to climb.<br>I can sense you have great plans for this town and its inhabitants, I can help you achieve those goals.
				player Oh? You'd help me, whose soul is clouded by lusts?
				priest Indeed. Our time here in the garden of mortality is our own. Those above do not judge our earthly delights, they seek to guide us in bringing joy and living God's gift to the fullest. Rest on our discussion, please. Should you find your way back here I shall avail you with all that this house can provide.
				player O... Kay.
				priest That is my name, yes.
				finish
			`);
			passTime();
			setTrust("priest", 1);
			break;
		}
		case "quoEventCheck": {
			var specialEvent = "";
			var eventCheck = ""
			var eventCheck = "corruption"
			if (checkFlag("succubus", "corruption") == true && checkFlag("priest", eventCheck) != true) {
				specialEvent = eventCheck;
			}
			var eventCheck = "intern"
			if (checkTrust(eventCheck) > 0 && checkFlag("priest", eventCheck) != true) {
				specialEvent = eventCheck;
			}
			var eventCheck = "haze"
			if (checkTrust(eventCheck) > 0 && checkFlag("priest", eventCheck) != true) {
				specialEvent = eventCheck;
			}
			var eventCheck = "demon"
			if (checkTrust(eventCheck) > 0 && checkFlag("priest", eventCheck) != true) {
				specialEvent = eventCheck;
			}
			var eventCheck = "incubus"
			if (checkTrust(eventCheck) > 0 && checkFlag("priest", eventCheck) != true) {
				specialEvent = eventCheck;
			}
			var eventCheck = "housekeep"
			if (checkTrust(eventCheck) > 0 && checkFlag("priest", eventCheck) != true) {
				specialEvent = eventCheck;
			}
			var eventCheck = "succubus"
			if (checkTrust(eventCheck) > 0 && checkFlag("priest", eventCheck) != true) {
				specialEvent = eventCheck;
			}
			if (checkFlag("priest", "rewardWaiting") == true && specialEvent != "corruption") {
				specialEvent = "reward";
			}
			if (checkTrust("priest") == 1) {
				specialEvent = "";
			}
			switch (specialEvent) {
				case "succubus":
					writeHTML(`
						im 058.jpg
						priest Hmm... Looking at you, I can tell you've been near someone consumed by envy...
						player <i>That sounds like succubusF...</i>
						priest But worry not! Though you smell of sin, which hints strangely of sweet chocolate, I shall smother this unholy air with the pure scent of this shepherd's blessing.
					`);
					addFlag("priest", specialEvent);
					writeHTML(`trans statusQuo; Continue`);
				break;
				case "demon":
					writeHTML(`
						im 058.jpg
						priest Hm... You've blanketed yourself with the aura of someone who seeks relief from endless sloth.
						player <i>That could be demonF...</i>
						priest Lost lamb, I offer you salvation. To walk with sloth will only lead to your heart's pain.<br>Allow me to guide you with my flesh to a happier path.
					`);
					addFlag("priest", specialEvent);
					writeHTML(`trans statusQuo; Continue`);
				break;
				case "housekeep":
					writeHTML(`
						im 059.jpg
						priest Oh my~!
						player What's the matter? Is something wrong?
						priest No, quite the opposite!<br>Your soul, it gleams with an immaculate luster! I can tell you've become entwined with someone so pure of heart that you've gained a lovely gleam to your soul.
						player I don't suppose that means I can skip your trials?
						priest Heavens forbid! That you should be so lucky as to meet someone pure, it's another reason we should ensure you are spotless. <br>When the rag cleans up a dark stain the white cloth becomes darker.
					`);
					addFlag("priest", specialEvent);
					writeHTML(`trans statusQuo; Continue`);
				break;
				case "incubus":
					writeHTML(`
						im 058.jpg
						priest Hm... You're radiating it. It's like a perfume worn by someone consumed by greed.
						player <i>That sounds like succubusF...</i>
						priest Worry not! Though I sense the presence of harlotry, I shall educate your flesh in it's truest desire; The wonderful blessing of a body beyond gender.
					`);
					addFlag("priest", specialEvent);
					writeHTML(`trans statusQuo; Continue`);
				break;
				case "intern":
					writeHTML(`
						im 058.jpg
						priest Hm... You've been touched by someone enraptured by wrath.
						player <i>That sounds like hazeF...</i>
						priest Worry not! Though your body may be insatiable, I shall offer your heart and mind satisfaction in exchange for my purest body.
					`);
					addFlag("priest", specialEvent);
					writeHTML(`trans statusQuo; Continue`);
				break;
				case "haze":
					writeHTML(`
						im 058.jpg
						priest Hm... You've been touched by someone consumed by gluttony.
						player <i>That sounds like hazeF...</i>
						priest Worry not! Though your body may be insatiable, I shall offer your heart and mind satisfaction in exchange for my purest body.
					`);
					addFlag("priest", specialEvent);
					writeHTML(`trans statusQuo; Continue`);
				break;
				case "corruption":
					writeHTML(`
						im 058.jpg
						priest Hold.
						player What's up?
						t priestF looks at you with a confused expression.
						priest Your soul has been bespeckled. Pockmarked by some strange means.
						player <i>He's probably noticed I've been hanging around with demons...</i><br>It's probably nothing.
						priest Hmm. To have overcome whatever darkened you is quite the feat, I recommend a cleansing.
					`);
					addFlag("priest", specialEvent);
					writeHTML(`trans statusQuo; Continue`);
				break;
				default:
				writeEncounter("statusQuo");
			}
			switch (specialEvent) {
				case "reward":
					if (checkFlag("priest", "reward5") == true) {
						if (checkSkill("corruption") < 2 && checkFlag("priest", "reward6") != true) {
							addFlag("priest", "reward6");
							writeEncounter("priestEndingOffer");
						}
						else {
							writeEncounter("statusQuo");
						}
					}
					else {
						var priestLoop = 0;
						while (priestLoop < 6) {
							priestLoop +=1;
							if (checkFlag("priest", "reward"+priestLoop) != true) {
								addFlag("priest", "reward"+priestLoop);
								writeEvent("priestReward"+priestLoop);
								passTime();
								addFlag("priest", specialEvent);
								removeFlag("priest", "rewardWaiting");
								priestWhile = false;
								writeHTML(`finish`);
								priestLoop = 5;
							}
						}
					}
				break;
			}
			if (checkTrust("priest") == 1) {
				writeEncounter("statusQuo");
			}
			break;
		}
		case "statusQuo": {
			if (checkTrust("priest") == 1) {
				writeHTML(`
					im 057.jpg
					priest Welcome back to this house of the Lord. Should you seek guidance on mortal matters, you need only ask and the Lord's glorious children shall provide. <br>Should you be eager to cleanse your soul, I can offer challenges inspired by those I encountered above. For you, bound for heaven, I am sure they shall have your darkened soul cleansed like the finest gleaming diamond.<br>And should you simply desire mortal companionship, I can most certainly oblige. I spent a few years in the "Small Talk" circle above.
				`);
				setTrust("priest", 2);
			}
			else {
				writeHTML(`
				im 057.jpg
				priest Welcome back to this house of the Lord. Whether you seek guidance, challenge, or companionship, this house provides.
				`);
			}
			writeHTML(`
				trans guidance; Seek divine guidance
				trans challenges; Accept the church's challenges
				trans candy; ?flag priest c-donation; Take some more candy and increase your corruption
				trans donationRepeat; ?flag priest c-donation; ?money 10; Make another $10 donation and reduce your corruption
				trans chat; Chat with priestF
				priest ?flag priest reward6; !skill corruption 2; Have you considered my offer for true salvation? I cannot promise it will be easy, but I can guarantee there is no greater calling.
				trans priestEndingAccept; ?flag priest reward6; !skill corruption 2; Accept priestF's offer
				trans cancel; Leave
			`);
			break;
		}
		case "challenges": {
			writeHTML(`
				priest Dearest lost lamb, to never lose sight of the path again despite your straying, these holy challenges are yours to complete. Bear these burdens well and I swear upon my station that you shall be rewarded with heaven-like grace on earth.
				trans sermon; Listen to holy sermons
				trans donation1; !flag priest c-donation; Make a $20 donation to the 'church'
				trans oowoo; Endure the 'Punishment of Wrath'
				trans degenerate; Endure the 'Punishment of Lust'
				trans guestSuccubus; ?trustMin succubus 78; !flag priest guestSuccubus; Bring a lost lamb to the fold (succubusF)
				trans guestFitboi; ?trust fitboi 666; !flag priest guestFitboi; Bring a lost lamb to the fold (fitboiF)
				trans guestDemon; ?trustMin demon 100; !flag priest guestDemon; Bring a demonic lamb to the fold (demonF)
				trans guestIncubus; ?trustMin incubus 3; !flag priest guestIncubus; Bring a lost lamb to the fold (incubusF)
				trans cancel; Go back
			`);
			break;
		}
		case "guestSuccubus": {
			writeHTML(`
				player I actually have someone I'd like you to meet.
				priest Oh? Please feel free to introduce them to this flock. All lambs, no matter how lost, are welcome here.
				t ...
				succubus So? Where are we going? Especially at this time of day?
				player You'll see.
				succubus Listen, if you wanted a little bit of public alone time with me, you could just ask. I'm not... picky...<br>I recognize this neck of the woods.
				im 055.jpg
				priest Welcome, my lost lamb! And to you too as well, dear guest!
				succubus Oh, this is... Oho, I get where you're going with this. A little menage a trois, huh?
				priest Child of darkness, do not despair. This one has brought you here to see the path you could walk, one towards salvation!
				succubus ... Eh? How'd you know...<br>Oh no. Oh fuck no, you did not bring me to this stuffy as shit run-down box to this little sky-daddy obsessed overdressed tramp so that I could-
				priest Recieve forgiveness and purification!
				succubus Listen, playerF. You've had a lot of crazy ideas so far, but this takes the cake. I've heard things about what happens to a demon who undergoes 'salvation'. It's not pretty, or hot.
				priest My son-
				succubus Call me that again and I'll deepthroat you.
				priest ... An odd threat.<br>Regardless, do not trust the words of your dark masters. Seek only the Lord's blessing and I shall grant you salvation!
				succubus ... I gotta go.
				t In a rush, succubusF discards his disguise and flies away as quickly as his wings will allow.
				priest Doubt creeps into his heart, a true tragedy. Still, his bond with you was clear and beautiful. I have no doubt he'll return should you ask him, and that salvation is within his grasp. Thank you for bringing him here, I shall make arrangements should he ever wish to return.
				finish
			`);
			addFlag("priest", name);
			addFlag("priest", "rewardWaiting");
			passTime();
			break;
		}
		case "guestIncubus": {
			writeHTML(`
				player I actually have someone I'd like you to meet.
				priest Oh? Please feel free to introduce them to this flock. All lambs, no matter how lost, are welome here.
				t ...
				player Hey, I'm back.
				priest How did it go?
				player She said, and I quote, "Send me a pic of his dick and I'll consider it."
				priest I must politely refuse. Some people have a long way to go before they are prepared for what I have to offer. Still, thank you for the attempt. You shall surely be rewarded soon.
				finish
			`);
			addFlag("priest", name);
			addFlag("priest", "rewardWaiting");
			passTime();
			break;
		}
		case "guestDemon": {
			writeHTML(`
				player I actually have someone I'd like you to meet.
				priest Oh? Please feel free to introduce them to this flock. All lambs, no matter how lost, are welome here.
				t ...
				demon Oh boy, a church! I haven't burned one of those down in ages!
				im 055.jpg
				priest Welcome, my lost lamb! And to you too as well, dear guest!
				demon Heeeey~! One of God's little trollops. Man, you have got one hell of a choir boy's ass, don't you?
				priest Patron of darkness, I can sense you mask your unease with vitriol, but have no fear, you are forgiven.
				demon So, *master, I take it we aren't here to fuck in one of the pews while the priest watches? That's kind of what I was expecting.
				priest No. This lamb has brought you here for salvation, and the first step-
				demon Hahaha~!<br>Baby-dicked Christ that's hilarious! Me? Saved? God, I'd roast myself just to see you try.
				priest It will surely be a challenge, but I shall guide you to grace. None are above deserving a kind hand.
				demon ... This has honestly been funny enough that I forgive you for not ruining my ass today. I look forwards to a real date next time, playerF.
				t With that, demonF leaves. He does knock over a vase and cackle as he goes, but at least he isn't torching the place or pissing on the walls.
				player That went well.
				priest Indeed! I can tell he feels great fear, his bond with you means that if you were to walk the right path he would have no choice but to follow.<br>He is surely one who has lived a life of strife, I hope my hand shall be enough to guide him to peace. 
				finish
			`);
			addFlag("priest", name);
			addFlag("priest", "rewardWaiting");
			passTime();
			break;
		}
		case "guestFitboi": {
			writeHTML(`
				define fitboi = sp fitboi; im images/fitboi/fitboiC.jpg; 
				player I actually have someone I'd like you to meet.
				priest Oh? Please feel free to introduce them to this flock. All lambs, no matter how lost, are welome here.
				t ...
				im 055.jpg
				priest Welcome, my lost lamb! And to you too as well, dear guest!
				fitboi Hey~<br>Oh man, you really stink! Not in a good way. Hey, you wanna play?
				priest I can see you have only recently fallen. Have no fear my child, I shall guide you back onto the lord's path.
				fitboi This isn't as fun as I was hoping it'd be when you invited me to the park, playerF...<br>How about I have some fun with this one? Cmon, lemme push him down and have a nice meal~!
				priest I can see you hunger. But child, I can assure you that the word of God is more satisfying in your mouth than any pleasure rod.
				fitboi Oh, I bet you'd know a lot about that~
				priest Yes, yes I would.
				fitboi ... You're weird. This whole place feels awful and stuffy, I'm leaving. playerF, you'd better find some time to play with me later~
				player That went well.
				priest Indeed! I can sense the darkness around him is shallow. I am certain my hand shall be enough to guide him to peace.<br>Now, if you'll excuse me, I must find my decorum. That lamb's appearance was... Distracting.
				finish
			`);
			addFlag("priest", name);
			addFlag("priest", "rewardWaiting");
			passTime();
			break;
		}
		case "donation1": {
			writeHTML(`
				player Here.
				im 057.jpg
				priest Wonderful! This will go to a good cause. Actually, I have something I've been meaning to purchase. Could you wait here for just a moment?
				t priestF makes his way out of the room.
				t ...
				t And when he returns, he has a large bowl of candy with a 'please take only one' sign on it.
				priest Behold, a bowl of delicious treats! What lost lamb could resist these sugary confections? Here, try one!
				t You eat one, it tastes like divine love, which apparently also tastes like vanilla.
				t <span style="color:green;">Your soul feels substantially more pure!</span>
				finish
			`);
			reduceSkill("corruption", 2);
			data.player.money -= 20;
			addFlag("priest", "rewardWaiting");
			addFlag("priest", "c-donation");
			passTime();
			break;
		}
		case "donationRepeat": {
			writeHTML(`
				player Here.
				im 057.jpg
				priest Thank you. The giving of alms is a charity that cleanses the soul.
				t <span style="color:green;">Your soul feels substantially more pure!</span>
				trans cancel; Go back
			`);
			data.player.money -= 10;
			reduceSkill("corruption", 2);
			break;
		}
		case "candy":{ 
			writeHTML(`
				t You take another piece of candy. priestF seems not to mind, but...
				t <span style="color:green;">Your soul feels substantially more corrupt!</span>
				trans cancel; Go back
			`);
			addSkill("corruption", 2);
			break
		}
		case "sermon": {
			writeHTML(`
				priest Ah, a sermon? Of course!
				t You take a seat on a pew as priestF clears his throat.
				t ...
			`);
			if (checkFlag("priest", "c-sermon") == true) {
				removeFlag("priest", "c-sermon");
				addFlag("priest", "rewardWaiting");
			}
			switch(checkTrust("priest")) {
				case 2:
					writeHTML(`
						priest And as such, those who leave their litter behind on the ground are cruel! Despicable! Those above, the divine, their compassion does not extend to insects, and as such litterbugs are cursed to be without the wonderful bodies of our heavenly watchers!
						player Littering? I guess I can follow.
						priest Indeed. For enduring with grace and glory shall our souls be given new light! Bask with me, and ye shall be rewarded. 
					`);
					addFlag("priest", "rewardWaiting");
				break;
				case 3:
					writeHTML(`
						priest A single puff of the smoke leaves your mouth to taste like ash! Suckle not on nicotine, instead, imagine an...
						im 060.jpg
						priest Ehehe... Imagine suckling upon... Upon a...
					`);
				break;
				case 4:
					writeHTML(`
						priest And thus, you must avoid wrathful actions, but not only that, do not let anger taint your thoughts either! Compassion is a virtue, and to forgive even those who do not deserve it is the only path to peace anong all men!
					`);
					addFlag("priest", "rewardWaiting");
				break;
				case 5:
					writeHTML(`
						priest Have no doubt in your heart, for you are loved! If not by your neighbor, then by yourself! And if not by yourself, then by the heavens themselves! Do not despair, for all men shall be blessed by fat-bottomed angel bois, this, I promise!
					`);
				break;
				case 6:
					writeHTML(`
						priest The world turns, and it burns yet hotter every day, but this is not your fault! Though the blame is often laid at your shoulders, the vast majority of pollutants are actually released by chocolate producers! The path forwards is to reject their chocolate milk, not to abhor meat, because... Because...
						im 060.jpg
						priest Ehehe... My, to imagine an angel's "meat"... Ehehe...
					`);
					addFlag("priest", "rewardWaiting");
				break;
				case 7:
					writeHTML(`
						priest And so, clearly, <b>CLEARLY</b>, I say, canine partners are superior to felines! I have seen heaven's hosts, and they are kind and loving, loyal companions! Not like those awful cats who hiss horribly when you reach to pet their temptingly soft fur!
						t priestF stops for a moment.
						im 060.jpg
						priest Ehehe... Thinking of a cat's ears upon an angel's body, perhaps my mind could be changed...
					`);
				break;
				case 8:
					writeHTML(`
						priest Squats! Bridges! Imagine the look of heaven's hosts as they disrobe you, you cannot deny you hope to see hunger in their eyes, and only through regular exercise can that be made real! Plus... Plus...
						im 060.jpg
						priest Ehehe... Just imagining it...
					`);
					addFlag("priest", "rewardWaiting");
				break;
				case 9:
					writeHTML(`
						priest Brush! Floss! Bathe! These actions are nothing less than divine! To spend time with an angelic lover, only for their adorable nose to crinkle in disgust at your hygene, this would be unthinkable! Take care of yourself as a lover would take care of you!
					`);
				break;
				case 10:
					writeHTML(`
						priest And lo, they look down from above, and what do they see? Debauchery! Lustful acts, done without remorse! We teach the angels these foul deeds through our actions, and yet...<br>And yet we remain mostly silent! How are our divine voyeurs meant to learn if we do not describe every act, every sensual movement? We must be more vocal during the deed!
					`);
					addFlag("priest", "rewardWaiting");
				break;
				case 11:
					writeHTML(`
						priest And so there is no doubt in my mind that white is the greatest color of Gagic the Mathering! What greater joy could there be than summoning a vigilant angel to annihilate your foe? None! And all those who channel black magic are cursed! Cursed!
					`);
				break;
				case 12:
					writeHTML(`
						priest And so these fools are mistaken! It is not wrong to love a man, because their members are much like those of the divine angels! And neither is it wrong to love a woman, for her soft skin nears the perfection of an angel's body! The Lord knows this, for his creations frolic in heaven, playing... And...
						im 060.jpg
						priest Ehehe... They certainly shall play...
					`);
					addFlag("priest", "rewardWaiting");
				break;
				default: 
				writeHTML(`
					priest And, well... Um...
					player Run out of things to complain about?
					priest I believe I have. Thank you playerF, your presence is quite soothing. Perhaps you could share a sermon of your own?
					player Well...
				`);
				addFlag("priest", "rewardWaiting");
			}
			if (checkTrust("priest") < 13) {
				raiseTrust("priest", 1);
			}
			passTime();
			writeHTML(`
				t And so the sermon continues on, gradually drifting further and further away from it's initial track, until the fading sunlight through the shack's window lets you know it's time to leave.
				finish
			`);
			break;
		}
		case "chat": {
			writeHTML(`
				priest My mind and my history are both dedicated towards service. What would you like to know?
				trans chatHeaven; What exactly is heaven like?
				trans chatPlayer; You really think I can make it to heaven?
				trans chatChurch; This place is a bit dilapidated, isn't it?
				trans chatOil; So what are all of these wooden casks?
				trans statusQuo; Go back
			`);
			break;
		}
		case "chatHeaven": {
			writeHTML(`
				player So what exactly is heaven like?
				priest It is a true paradise unlike any in the world. Being immortal, they have nothing to do but to strive for self-perfection in all forms. They form spheres, gatherings where they practice new skills from carpentry to inflicting pleasure upon flesh.
				player Sounds like a bunch of clubrooms. Are you sure you went to heaven, and not some community college?
				t He sighs deeply.
				priest I've seen wonderful forms here in the city, but they pale in comparison to the men above.<br>Their perfect forms are beyond gender, I've striven to be like them in all ways.
				player Wait, so heaven is full of femboys?
				im 060.jpg
				priest Oh yes, ehehe~<br>It most certainly is~
				trans chat; Go back
			`);
			break;
		}
		case "chatPlayer": {
			writeHTML(`
				player You really think I can make it to heaven? I've done a few things down here that sky papi probably doesn't approve of.
				priest Oh lost lamb, have no fear. The Lord gave us teeth so that we might eat, and so he gave us free will that we might sin. I will not claim His message has been twisted; I can only express what I have seen above.
				player And that is...?
				priest Pure, unadulterated kindness and forgiveness in all things. Beings of pure light and purer heart. We were placed upon this world to experience all things, tragedy and joy, because that is the greatest and only gift we can be given; life. <br>Besides, I can see that beneath the myriad lusts your soul gleams. I believe you have already brought more kindness and joy into this world than you have taken.
				trans chat; Go back
			`);
			break;
		}
		case "chatChurch": {
			writeHTML(`
				player This place is a bit dilapidated, isn't it?
				priest Yes... I've spent many a sleepless night dreaming of hiring a maid to clean the place.
				im 060.jpg
				priest The advertisements for "Maid in Heaven"... Ehe, ehehe... I've collected every one of their fliers...
				player Oi.
				priest Ah, right. But during my time in heaven no angel ever asked for money, so I learn by their example to live a humble life.<br>Besides, my body belongs to lost lambs, and my heart belongs to His agents. I have nothing I can offer to a housecleaner.
				trans chat; Go back
			`);
			break;
		}
		case "chatOil": {
			writeHTML(`
				player So what are all of these wooden casks?
				priest Baby oil.
				player ....
				priest I have been assured several times they are not made from actual children.<br>... They are for my skin. The regimen taught to me from on high requires veritable gallons of the oil.
				trans chat; Go back
			`);
			break;
		}
		case "oowoo": {
			if (data.player.uwu != true) {
				writeHTML(`
					priest The punishment of wrath. If you accept, I shall ask the Lord's children to burden you with what can only be defined as a curse. Everyone you hear shall speak in a tongue perfected in the art of inducing rage and anger. 
					player could you give me an example?
					priest Indeed. Hold for just a moment...
					t priestF prays for a moment.
					priest Behold, widdwe wamb, do you dawe beaw the stwain of da curse dat is da punishment of wwath? (◕∇◕✿)
					t Note, this punishment is not required for unlocking all of priestF's content.
					trans oowooAccept; Bear the burden
					trans cancel; Refuse this burden
				`);
			}
			else {
				writeHTML(`
					priest You wish the remove the burden of wrath's punishment? Have no shame, you have already proven yourself in the eyes of heaven.
					trans oowooAccept; Remove the burden
					trans cancel; Go back
				`);
			}
			break;
		}
		case "oowooAccept": {
			if (checkFlag("priest", "oowoo") != true) {
				addFlag("priest", "rewardWaiting");
				addFlag("priest", "oowoo");
			}
			if (data.player.uwu != true) {
				data.player.uwu = true;
				writeHTML(`
					priest It is done. Bear this burden and may you find glorious reward in the future.
					finish
				`);
			}
			else {
				data.player.uwu = false;
				writeHTML(`
					priest It is done, the curse has been removed.
					trans cancel; Go back
				`);
				addFlag("priest", "coward");
			}
			break;
		}
		case "degenerate": {
			if (data.player.pervert != true) {
			writeHTML(`
				priest The punishment of lust. If you accept, I shall ask the Lord's children to burden you with what can only be defined as a curse. When someone, anyone, speaks to you, you shall be accosted by images of lust and nudity. 
				player could you give me an example?
				priest Indeed. Hold for just a moment...
				t priestF prays for a moment.
				sp priest; im images/priest/priestP.jpg; Behold, lost lamb, do you dare bear the strain of the curse that is the punishment of lust?
				t Note, this punishment is not required for unlocking all of priestF's content.
				trans degenerateAccept; Bear the burden
				trans cancel; Refuse this burden
			`);
			}
			else {
				writeHTML(`
					priest You wish the remove the burden of lust's punishment? Have no shame, you have already proven yourself in the eyes of heaven.
					trans degenerateAccept; Remove the burden
					trans cancel; Go back
				`);
			}
			break;
		}
		case "degenerateAccept": {
			if (checkFlag("priest", "degen") != true) {
				addFlag("priest", "rewardWaiting");
				addFlag("priest", "degen");
			}
			if (data.player.pervert != true) {
				data.player.pervert = true;
				data.player.color = "#fc53f1";
				updateMenu();
				writeHTML(`
					priest It is done. Bear this burden and may you find glorious reward in the future.
					finish
				`);
			}
			else {
				data.player.pervert = false;
				writeHTML(`
					priest It is done, the curse has been removed.
					trans cancel; Go back
				`);
				data.player.color = "#86b4dc";
				updateMenu();
			}
			break;
		}
		case "reward1": {
			writeEvent(name);
			passTime();
			removeFlag("priest", "rewardWaiting");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "reward2": {
			writeEvent(name);
			passTime();
			removeFlag("priest", "rewardWaiting");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "reward3": {
			writeEvent(name);
			passTime();
			removeFlag("priest", "rewardWaiting");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "reward4": {
			writeEvent(name);
			passTime();
			removeFlag("priest", "rewardWaiting");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "reward5": {
			writeEvent(name);
			passTime();
			removeFlag("priest", "rewardWaiting");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "priestEndingOffer": {
			writeHTML(`
				im 057.jpg
				priest Welcome back, child of the Lord.
				player Time for another reward then? Seems a bit quick after the last one, but I won't complain.
				priest Actually... playerF. Do you know the measure of your soul?
				t He walks up to you and gently places his hand upon your chest.
				priest I believe you have a great potential, that the myriad clouds that darken your heart are as temporary as the rain. In fact, I can nearly see through them now.
				t As you think about it, you have noticed that after spending time at the church, you feel... Cleaner, somehow.
				priest Corruption is like a snake. Hidden from most, and as you feed it, it shall grow larger and hungrier.<br>I confess I don't know any method to purge it from your body, I am but a humble mouthpiece, but...
				player But?
				priest To have your soul satisfied by good deeds, and to have your needs satisfied with loving care. Those two things are what keep a heart pure. If you'll let me, if you'll agree to it, I shall support you forevermore.
				player You're sounding awfully serious. Where's the creepy giggles you usually give when you think about heaven?
				im 059.jpg
				priest There is no need to deflect your fears, playerF. I can tell you've lived a life of hedonism, and for that I will not blame you, and to hunger for something more is natural, not shameful.<br>Yet should you ever desire more, these doors, and my arms behind them, shall be forever open.
				trans priestEndingAccept; Accept priestF's offer
				trans cancel; Decline
			`);
			break;
		}
		case "priestEndingAccept": {
			writeHTML(`
				priest I see. Take a seat then, playerF. 
				player What, you gonna deliver a rousing speech that'll cleanse me to the bone?
				priest No. No sermons, no lectures. Not today, you have already taken the first step, and that is to be commended. <br>For rich shall weep and wail, and the wealth they horde shall rot. There are no greater riches than the sacrifice of a good *man. Thank you, playerF.
				player Oi, what exactly am I safrificing here?
				priest Your free time of course! I'll have a bed ready for you by nightfall. Do not fret, for together we shall live honest lives of virtue!
				player I have a job, priestF.
				priest Of course, and many hobbies and passions too. I shall not hold you from them, I encourage you to continue to connect with others in fact.<br>But when you are free, I ask that you return here with me. We shall be perfect, as the heavenly host is perfect.
				player Well, in for a penny, in for a pound.
				im 060.jpg
				priest Ehe... Ehehe...
				player Hey, what's that look for?
				t ...
				t And so, you moved into the shack in the park with priestF. It actually wasn't all that bad. Your dayjob already involved helping people, and you didn't even have to stop your other hobbies.
				t In fact, just like before priestF would help you by providing divine guidance, saying...
				priest Of course I'll help. Your actions, however selfish they may seem, shall ultimately lead to greater happiness and self-acceptance among those you interact with. This I am certain of.
				t So your daily routine didn't actually change much.
				t ...
				t But each night...
				im 039.jpg
				priest Aha~! Tell me my lamb, does this not make you feel complete beyond words, as it does for me?
				player Nghh~!
				t His technique is immaculate, divine some might say. Each night he takes the time to show you a new position with an infectious enthusiasm, and you find it harder to ever doubt he truly was taught by those from above.
				im 040.jpg
				priest YesyesyesyesYES~! Release your lusts, your sins and burdens! W-with love! W-we shall~!
				im 041.jpg
				priest Haaaaah~!!
				t And so, you have lived a blissful life, free of the penitence you expected to serve along this path.
				t ... His vocabulary has rubbed off on you, it seems.
				trans priestEpilogue; Much later...
			`);
			break;
		}
		case "priestEpilogue": {
			writeHTML(`
				im 049.jpg
				priest We really must be getting out of bed soon, little lamb. Another day is ahead of us.
				player Just a little longer...
				im 047.jpg
				priest Mmm... No, I must remain vigilant. When the waters above run dry, the gates below shall accept the thirsty. 
				player So no snooze button? Aren't you tired too?
				priest I appreciate your consideration, but just a little sleep, a little slumber, and poverty shall arrive at our door like a burglar.<br>Another day of good deeds lay ahead of us.
				im 046.jpg
				priest But have no fear. Whether it be this home or the next, this life or the next, I shall love my neighbor... <br>Ehehe~
			`);
			if (checkFlag("succubus", "purified")) {
				writeHTML(`
					t ...
					t After a lovely breakfast the two of you head out into town to find the third member of the church.
					t And eventually...
					succubus Hey! Cockmonglers!
					priest Oh, how wonderful! You're clearly hard at work already. I'm certain you are already nearing complete purification!
					im images/succubus/074.jpg
					succubus It weirds me out how genuinely happy you are to see me every day.
					player It's crazy how fast you found a job as a maid.
					succubus Yeah, real crazy. Why exactly do I have to work while you and priestF get to bump uglies at home?!
					priest succubusF, your contributions to the church are indispensable. If you would like to take your turn with playerF early, I won't mind.
					succubus You...! Trying to make me feel bad for you again, huh? Fine, I'll wait... But when it's my turn as the housewife I'm rocking *his goddamn world!
					priest I have no doubt of that at all. 
				`);
			}
			addFlag("priest", "complete");
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "priestHotelBad": {
			writeHTML(`
				im 058.jpg
				priest Hello, playerF.
				player priestF? I wasn't expecting you to be here.
				priest I had not expected my true calling to lead me here either, but here I am. For my father and my mother have forsaken me, but the Lord's children will take me up.
				player So, why are you here exactly?
				im 060.jpg
				priest I have been blessed from on high with a special artifact. A very...
				im 009.jpg
				priest Very special one. I have been sent to reclaim your soul, and bring peace to those who you've betrayed. Lost lamb. No, damned lamb.
				im 011.jpg
				priest Your time has come, demon. I'm sorry. You are beyond forgiveness.
				t ...
				player So, how is he?
				black well, he was stupid enough to challenge you with some low-grade artifact, so he was already pretty fucked in the head.<br>Oh, you mean the corruption? Here, lemme see if the camera...
				im 030.jpg
				priest Oh my, will tonight's play be rough?
				black There we go. We've got one of our best hellspawns in there corrupting him, and a good angle too.
				im 032.jpg 
				priest Oooh~! Y-your comfort brings me joy, oh divinity~!
				black Plus those hypnosis skills of yours are... Honestly kind of scary. He really believes he's back up in heaven fucking some femboy with wings.
				im 033.jpg
				priest Haaah~! I'm cumming~! Bless me with divine light until naught is left!
				black He should fall pretty hard when he snaps out of it. <i>When</i> he snaps out of it, I should say.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "guidance": {
			writeHTML(`
				priest The heavenly host above provides guidance for all lost lambs. Picture in your heart the face of someone you struggle with, or perhaps imagine the face of someone you've yet to meet, and I shall relay the divine message.
			`);
			document.getElementById('output').innerHTML += `
			<div id="wardrobeGrid" style="display:grid; grid-template-columns:auto auto auto auto auto;">
			</div>
			`;
			writeWardrobeOption("tomgirl");
			writeWardrobeOption("meji");
			writeWardrobeOption("nagatoro");
			writeWardrobeOption("camboi");
			writeWardrobeOption("fitboi");
			writeWardrobeOption("housekeep");
			writeWardrobeOption("succubus");
			writeWardrobeOption("demon");
			writeWardrobeOption("yokai");
			var printAce = false;
			for (z = 0; z < data.story.length; z++) {
				if (data.story[z].index == "intern" || data.story[z].index == "serious") {
					printAce = true;
				}
			}
			if (printAce == true) {
				writeWardrobeOption("intern");
				writeWardrobeOption("serious");
				document.getElementById('wardrobeGrid').innerHTML += `
					<img class="bigPicture" id="blessed" src="images/intern/blessed.jpg" 
					onclick="writeEncounter('blessed')",
					onmouseover="wardrobeMouseOver('blessed')"
					onmouseout="wardrobeMouseOut('blessed')"
					style="filter:brightness(50%);">
				`;
			}
			writeHTML(`
				trans statusQuo; Go back
			`);
			break;
		}
		case "tomgirl": {
			writeMed("images/"+name+"/profile.jpg");
			writeHTML(`
				priest The divine message for you is: "Meet in the western classroom until a hand in marriage is offered." How romantic!
			`);
			writeFunction("writeEncounter('statusQuo')", "Go Back");
			break;
		}
		case "meji": {
			writeMed("images/"+name+"/profile.jpg");
			writeHTML(`
				priest The divine message for you is: "Wander the streets at sunset. Bring great hypnotic skill and a swimsuit to future meetings. Whether you are cruel or nice, you are sure to find assistance."
			`);
			writeFunction("writeEncounter('statusQuo')", "Go Back");
			break;
		}
		case "nagatoro": {
			writeMed("images/"+name+"/profile.jpg");
			writeHTML(`
				priest The divine message for you is: "In the western hall, meet until the club is formed. Sleep with the rabbit three times and all questions will become outfits. The larger your harem the larger the club shall grow." What a riddle!
			`);
			writeFunction("writeEncounter('statusQuo')", "Go Back");
			break;
		}
		case "camboi": {
			writeMed("images/"+name+"/profile.jpg");
			writeHTML(`
				priest The divine message for you is: "The brown-haired man seeks a special code phrase. Find this code from the comfort of your home by using your terminal. Watch his display in swimwear and he will speak the clue." Terminal... Perhaps the message means your computer is the key?
			`);
			writeFunction("writeEncounter('statusQuo')", "Go Back");
			break;
		}
		case "housekeep": {
			writeMed("images/"+name+"/profile.jpg");
			writeHTML(`
				priest The divine message for you is: "Find a flier on the street, the cute maid you'll buy can't be beat! Tell him to call home once in a while, okay?" How curious.
			`);
			writeFunction("writeEncounter('statusQuo')", "Go Back");
			break;
		}
		case "fitboi": {
			writeMed("images/"+name+"/profile.jpg");
			writeHTML(`
				priest The divine message for you is: "Seek aid from a nurse, a bat-winged boy, or from a mystical pawn shop for a special oil. If you use magic to corrupt him, seek a holy man to cure the sickness." 'Holy'... I'm quite devout myself.
			`);
			writeFunction("writeEncounter('statusQuo')", "Go Back");
			break;
		}
		case "succubus": {
			writeMed("images/"+name+"/profile.jpg");
			writeHTML(`
				priest The divine message for you is: "This two-faced boy requires a sizeable harem. Tell him of your exploits until you journey into a hotel. Afterwards chat about a foul technique, then corrupt the tomgirl, the crossdresser, or the runner to unlock his final confession."
			`);
			writeFunction("writeEncounter('statusQuo')", "Go Back");
			break;
		}
		case "demon": {
			writeMed("images/"+name+"/profile.jpg");
			writeHTML(`
				priest The divine message for you is: "Speak with the boy on the street, and tell him of your exploits until you journey into a hotel. Take pity on the starving demon until he makes you the final offer." Demon?! Surely it can't be literal...
			`);
			writeFunction("writeEncounter('statusQuo')", "Go Back");
			break;
		}
		case "yokai": {
			writeMed("images/"+name+"/profile.jpg");
			writeHTML(`
				priest The divine message for you is: "This ephemeral spirit is beyond gender. Purchase a game, make sure to activate it in your phone, and speak the codeword 'eyestrain' for an easier time. After fifty spirits you will have more than enough for all this one offers."
			`);
			writeFunction("writeEncounter('statusQuo')", "Go Back");
			break;
		}
		case "intern": {
			writeMed("images/"+name+"/profile.jpg");
			writeHTML(`
				priest The divine message for you is: "This angry little man needs some help with computers. Make a video with a boy named mejiF and find a tech wizard to help you set the stage. Be sure not to forget to learn the bat's secrets for more fun!"
			`);
			writeFunction("writeEncounter('statusQuo')", "Go Back");
			break;
		}
		case "serious": {
			writeMed("images/"+name+"/profile.jpg");
			writeHTML(`
				priest The divine message for you is: "This boy moves around a lot, search the town at many times in the day."
			`);
			writeFunction("writeEncounter('statusQuo')", "Go Back");
			break;
		}
		case "blessed": {
			writeMed("images/intern/twrite1.jpg");
			writeHTML(`
				priest The divine message for you is: "This one's been on a sabatical, careful not to disturb his vacation. To meet our friend, learn a dark secret from a foul-mouthed bat, and use that skill on a blonde-haired man who's bad with computers." You know, in heaven, all the angels called each other friends!
			`);
			writeFunction("writeEncounter('statusQuo')", "Go Back");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

function writeWardrobeOption(wardrobeImage) {
	document.getElementById('wardrobeGrid').innerHTML += `
		<img class="bigPicture" id="`+wardrobeImage+`" src="images/`+wardrobeImage+`/`+wardrobeImage+`.jpg" 
		onclick="writeEncounter('`+wardrobeImage+`')",
		onmouseover="wardrobeMouseOver('`+wardrobeImage+`')"
		onmouseout="wardrobeMouseOut('`+wardrobeImage+`')"
		style="filter:brightness(50%); width:100%; height:100%;">
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
	{index: "priestReward1", name: "Noodle 23:3 - In that land their tongue was fondled and his virgin cheeks caressed"},
	{index: "priestReward2", name: "Noodle 23:8 - [You] caressed his virgin tongue and poured out your lust on him"},
	{index: "priestReward3", name: "Noodle 23:20 - So you longed for the lewdness of his youth"},
	{index: "priestReward4", name: "Noodle 5:28 - Anyone who looks at a woman lustfully has already committed adultery with her in his heart, so a man is okay!"},
	{index: "priestReward5", name: "Noodle 13:4 - Let marriage be held in honor among all"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "priestReward1": {
			writeHTML(`
				im 057.jpg
				priest Welcome back, child of the Lord.
				player Heya. Got another challenge of the day? Another sermon?
				priest Actually, I've recieved revelation. For one with a heart such as yours, the clearest path to walk is one illuminated with a certain kind of reward. For your gracious service, I am prepared to give you such a reward.
				player O... Kay?
				priest Have no fear. Please, follow me into the back room.
				t ...
				player Should a priest really be doing this?
				priest All that breathes and makes merry is God's domain. Trust me, for I shall never lead you astray.
				im 012.jpg
				priest Ah, this mouth which speaks the word of God shall soon be stuffed with a godly member~
				t Almost creepily, priestF giggles in giddy anticipation, and then...
				im 013.jpg
				t What immediately follows is nothing short of a miracle, pun not intended.
				player Holy... You took it down in one motion, how did-
				im 014.jpg
				player Fff-!
				im 015.jpg
				player H-how... There's no way you're human...!
				im 017.jpg
				priest *gulp*<br>Mmm... Nothing is quite as satisfying as giving relief to the needy~
				t He gives you the kind of smile only a power-bottom could wear, before licking his lips.
				im 016.jpg
				priest Ahhh~<br>You know, the deadliest sin is pride. I should appreciate your help in training me even further to swallow it~
				player How... How did you...
				priest My time above was not always spent on the top, if you understand my meaning. The angels have many lessons to teach. Infinite, really, if you are willing to learn. Now, take care lost lamb, I shall see you again soon.
			`);
			break;
		}
		case "priestReward2": {
			writeHTML(`
				im 057.jpg
				priest Welcome back, child of the Lord. Tell me, would you care to join me again for another reward?
				t ...
				im 026.jpg
				priest Mmph... Ah, this scent, it surely ruins my senses and thoughts. How am I meant to praise the lord when my mind cannot wander from this irresistible rod before me?
				player Sometimes I wonder if you're cracked...
				priest Ehe... Have no fear, my pleasure is to serve, and I shall take great pleasure today~
				im 027.jpg
				t Motion becomes a blur as he becomes like a man dying of thirst.
				im 028.jpg
				priest *Glg*... *Glg*... *Pwah~!*<br>Hah~! My... My brain is coming alight~!
				im 029.jpg
				priest Truly... Wonderful~ Ooh, I feel as though the angels have touched me again~! Perhaps another... Just one more~
			`);
			break;
		}
		case "priestReward3": {
			writeHTML(`
				im 057.jpg
				priest Welcome back, child of the Lord. Tell me, would you care to join me again for another reward?
				t ...
				im 018.jpg
				priest Oh dear lamb, there is no sin here. If God had not wished you to be aroused by my rear, the angels would not have spent so long perfecting this rump of mine.
				t You approach as his eyes say 'pin me down and take me'.
				t So you do.
				im 022.jpg
				priest Ooh, the perfect position for breeding, I see my body has put your thinking mind to rest.
				player You'd better be ready for this, I won't hold back.
				priest My my, I must say you spark quite the desire in me.
				t He rubs his abdomen, hovering over where his prostate lies to accentuate his words.
				im 023.jpg
				priest Yes, yes! Thank you o lord for this pleasure I recieve!
				player I'm the one... Doing all the work...!
				priest Ehehe~! It is God and his angels who blessed me with a prostate that so hungers, so that I might feel the joy of satisfaction~<br>But it is you... Oh, do not hesitate! I was given this wonderful prostate gland for a reason!
				im 024.jpg
				priest Nggh~! That you should so aggressively ravage me, I am truly blessed!
				im 025.jpg
				priest Ngh~! Pound every bit of lust out of my sinful body~!
				t His 'holy water' arcs into the air, splattering his chest.
				priest Hoh... My, this scene... It's enough to unravel a mind at the seams...<br>N-now, if you are satisfied, I
			`);
			break;
		}
		case "priestReward4": {
			writeHTML(`
				im 057.jpg
				priest Welcome back, child of the Lord. Tell me, would you care to join me again for another reward?
				t ...
				im 034.jpg
				priest It is temptation that I adore. Not to succumb to lust, but to know that my faith is unshakable even as I leak love-fluid from my adorable member~
				im 035.jpg
				t His hips move in sync with yours, bouncing against each of your thrusts.
				im 036.jpg
				priest Yesss~! Oh angels, ever the voyeurs, please watch as I leak holy love-juice upon this hallowed ground!
				t It's sacrilegious, but your first instinct as always is just to see him as a fat femboi ass with a holy body attached.
				priest Bless unto me your divine load!
				t And he certainly isn't helping that notion.
				im 037.jpg
				priest Oh... How cruel of you to addict me to such filthy acts~
				t And on your final thrust he coos softly, the soft sound of liquid beneath him revealing his body has decided to baptise the bedsheets.
				priest Ehehe... I certainly hope you've enjoyed your reward~
			`);
			break;
		}
		case "priestReward5": {
			writeHTML(`
				im 042.jpg
				priest O-oh my...
				player You're unusually nervous tonight.
				priest How could I not be? This is the most sacred of positions. The first taught to me during my time above. D-did I ever tell how how I ended up there?
				player You're stalling.
				priest I... Well, it's no sin to be hesitant-
				im 043.jpg
				priest H-hoh my~! F-from this position I can feel it so much more deeply~! 
				im 044.jpg
				priest P-please, don't hold back, baptise me!
				t With each thrust more of his "holy water" leaks out, painting his chest white, until you have no more energy left to spend.
				im 045.jpg
				priest Ehe... Ehehe... I've been blessed with a truly perfect gift, even though I was the one supposed to reward you~
				t As you stand up you can see his satisfied eyes reignite with hunger looking at you.
				priest Oh my... Perhaps I am lost, for now I lust for a lover who's emissions are like that of a horse's...
			`);
			break;
		}
		case "priestReward6": {
			writeEncounter("priestEndingOffer")
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
	reduceSkill("corruption", 1);
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
	{index: "placeholder", requirements: "?trust principal 10000;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
			writePhoneImage("images/priest/041.jpg", "Art by Akagai");
			writePhoneSpeech("priest", "", "Not all characters have dedicated endings, priestF is one of them. Still, you've completed as much of priestF as possible. In the future you'll be able to purify Gou and fail to purify Meph, as well as unlock a dedicated ending for this priestly boi. Thanks for playing!");
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