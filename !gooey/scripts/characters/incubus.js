var character =  {index: "incubus", fName: "Lily", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#FFF6BD", author: "NoodleJacuzzi", artist: "Gujira 4 Gou", textHistory: "", unreadText: false,};

var logbook = {
	index: "incubus", 
	desc: "A mysterious shopkeeper who sells a variety of magical items, as well as her body to the rare human customer. She's definitely some kind of demon.",
	body: "She has the body of a freshly-18 teenager, and probably will look that way forever. Despite how apathetic she seems in general, she unconsciously moves with an incredibly seductive grace.",
	clothes: "She wears a school uniform, although you don't know where it's from. It could be from back when she was still human.",
	home: "She lives on the second floor of her store in the city's main shopping district. Because of her sensitive nose she keeps a separate room and bed for lewd service, otherwise she wouldn't be able to sleep.",
	tags: "It depends on what you pay for.",
	artist: "Gujira 4 Gou<br>Original Image Set: Namaiki Enkou Musume to Biyaku Chinpo de Muriyari Nakayoku naru Ohanashi",
	author: "Author: NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	/*{index: "cardTest", name: "test card game", requirements: "?location shoppingDistrict;", altName: "", altImage: "",},*/
	{index: "intro", name: "Someone is leaning on the wall of a strange shop", requirements: "?trust incubus 0; ?location shoppingDistrict;", altName: "", altImage: "",},
	{index: "statusQuo", name: "Enter 'Midnight Bliss'", requirements: "?trustMin incubus 1; ?location shoppingDistrict;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define incubus = sp incubus;
		define player = sp player;
	`);
	switch (name) {
		case "cancel": {
			unencounter('incubus');
			changeLocation(data.player.location);
			break;
		}
		case "intro": {
			writeHTML(`
				im images/incubus/intro1.jpg
				t Normally you'd just walk past someone passing time on their phone, but something about her just seems... Off. Not quite in a bad way.
				t ?trustMin succubus 1; Wait, something about this feeling is very familiar.
				im images/incubus/intro2.jpg
				t She notices you, but instead of saying anything she just starts walking to a nearby store. It's closed, but she turns the handle as though it's unlocked. 
				t The sign on the front reads "MIDNIGHT BLISS", you aren't sure how you missed it before.
			`);
			data.player.incubusDiscount = 0;
			setTrust('incubus', 1);
			writeFunction("writeEncounter('statusQuo')", "Follow her");
			writeFunction("writeEncounter('cancel')", "Don't");
			break;
		}
		case "statusQuo": {
			if (data.player.carnivore != true) {
				switch (checkTrust('incubus')) {
					case 1: {
						writeHTML(`
							t You enter the store, it's a little cramped and it doesn't seem like the goods are being advertised as much as they are hoarded. Large piles of what you can only assume are merchandise are spread around the store, yet somehow everything smells like fresh air.
							t There are a lot of warnings too. One sign says 'No touching merchandise; it will touch back.' Another says 'You fuck it you buy it.' A particularly ominous-looking vase completely covered in paper talismans shakes excitedly as your gaze passes over it.
							t At the other end of the shop behind a counter is the girl from before, playing something on her phone. She sniffs before looking up from her game and notices you. She's suprised for a moment, before she goes back to being disinterested. There are several crumpled up nametags strewn about the place, each with a short name written on them then crossed out. 'Bel', 'Asmo', and so on. The only one left uncrushed reads 'Lily'.
							sp incubus; Yo, ground rules: Don't touch anything unless you buy it. Don't let anything touch you until you've paid for it. Blackboard services are for VIP customers only.
							t She raps her finger on a blackboard listing services ranging from blowjobs to rimjobs, all at surprisingly low prices. 
							sp incubus; Humans usually don't come by this place very often, so just don't fuck around. Most of the stuff in here will make eternal damnation look like candyland to you. Some of it will make you see an actual candyland, but that's besides the point. 
							sp player; Humans? What are... What exactly is this place? 
							sp incubus; You've heard of making deals with the devil, right? They pop in and fix some massive roadblock, like systemic oppression or lack of talent, just for you in exchange for your soul.<br>I deal with smaller roadblocks, conveniences and problems you could probably solve on your own. For money.
							sp player; If you really have supernatural powers, why do you need money?
							sp incubus; Microtransactions.
							t She flashes you her phone. On screen is a massive collection of icons of young-looking anime-styled boys.
							sp incubus; Anyways, whatever shit your lazy ass needs that I can fix easily, that's what I do. My dog Chunky can help with memory issues too. If you wanna send someone back to square one to try some newer, freakier shit, he's your boy. Isn't that right Chunky?
							t An iron lockbox nearby suddenly shudders, a sound coming out of it that sounds like a bark coming from a broken walkie-talkie submerged in oil.
							sp incubus; Good boy. Anyways, feel free to browse.
							t With that she goes back to playing, a young male voice moans out 'No, big sister, not there~!'
						`);
						raiseTrust('incubus', 1);
						break;
					}
					case 2: {
						writeHTML(`
						t You enter incubusF's shop, she's still here playing on her phone. It seems like she barely even notices you as you walk in.
						t You still don't have VIP privileges yet. Aparently you need to creampie her first for that.
						`);
						break;
					}
					case 3: {
						//You're a VIP
						writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. When you enter she looks up for just a moment, before blushing and looking back down to her phone.
							t With the 'fee' paid, you now have access to the VIP menu!
						`);
						break;
					}
					case 5: {
						if (checkTrust('succubus') > 77) {
							writeHTML(`
								t As you walk into the shop, you see a familiar face handing incubusF a glass vial filled with a murky white fluid. 
								sp succubus; That'll cover another month in advance, yeah? 
								sp incubus; Yep, it-<br>Customer. Scram, squirt. 
								sp succubus; I told you to stop calling me-<br>*Master? 
								sp player; Yo, succubusF.I guess it makes sense the two of you know each other. 
								t incubusF is surprised that you know succubusF, but quickly tries to hold back laughter. 
								sp incubus; Pffft...<br>*Master? That some kinda sex thing? *He your mark too, succubusF? I know this isn't *his energy you're handing off, it doesn't smell anywhere near as good as *his.
								sp succubus; Your nose is too strong for your own good, incubusF. And I'm *his familiar. 
								sp incubus; Whoa~! That official? You go girl! 
								t succubusF just sighs. 
								sp succubus; We're done here anyways. See you tonight *master. Have fun with this incub-
								sp incubus; Finish that sentence and you die. Or better yet, I've got stuff behind this counter that'll make you wish you were dead. 
								T The jovial atmosphere of the shop is squashed flat in an instant. incubusF glares daggers at succubusF, who doesn't seem to care. 
								sp succubus; You really need to get over that. It's just a rank, it doesn't decide what's in your pants. <br>Err, skirt. Anyways, bye. Lemme know if you get any more outfits in stock. 
								sp incubus; Yeah whatever. 
								sp player; See you around succubusF. Try not to get into any more trouble. 
								t You wave off succubusF as he leaves. 
								sp incubus; Come on, what're you buying? 
							`);
							raiseTrust('incubus', 1);
						}
						else {
							writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
							`);
						}
						break;
					}
					case 6: {
						if (checkTrust('housekeep') > 1) {
							writeHTML(`
								t You enter incubusF's shop, she's still here playing on her phone. However as you approach the counter she sniffs and looks up at you, confused. She leans over the counter and grabs something from your collar; a medium-length pink hair.
								sp incubus; Thought there was something fucky about you. Hold on.
								t She opens a drawer full of... Fire. Somehow it isn't burning the place down or even making a sound. She drops the hair in and shuts the drawer. There's a small sound and a puff of smoke escapes the drawer, which incubusF waves away.
								sp incubus; That would have seriously killed the mood.<br>Alright, what are you buying?
							`);
							raiseTrust('incubus', 1);
						}
						else {
							writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
							`);
						}
						break;
					}
					case 7: {
						if (checkTrust('demon') > 101) {
							writeHTML(`
								t You enter incubusF's shop, she's still here on her phone, but she seems distracted. She's breathing a little more heavily, and there's a faint sweet smell about the shop.
								t You can hear the sounds of a cashier coming from her phone, not the usual fantasy game stuff. She's distracted and turned away from you, so you walk up to the counter and check out what she's watching.
								im images/demon/demonPaint5.jpg;
								sp player; Is that demonF?
								t She freezes up and clutches her phone tightly, before she realizes it's you and calms down.
								sp incubus; ... Really need to fix that bell. Yeah, he's an old associa-<br>Wait, how do you know him?
								t You give incubusF the play-by-play of how your encounters with demonF went down, the sweet smell lingering in the shop growing more powerful as you get into the sordid details.
								sp incubus; Nice. Really nice. Good to see him getting what he deserves.
								sp player; Were you in his debt?
								sp incubus; Nope, he only gives out loans to male succubi. It's for the best actually, I'd probably have never paid it off. If you think male succubi get messed up when they develop a squirting fetish...
								sp player; So you're 100% a demon? A succubus?
								sp incubus; ... Demon, yes. I'm a rank above the boys like succubusF though. Just... Just don't think about it too much. Anyways, buy something already. I guess since you got demonF like that, I can probably give you a discount.
							`);
							data.player.incubusDiscount += 10;
							raiseTrust('incubus', 1);
						}
						else {
							writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
							`);
						}
						break;
					}
					case 8: {
						if (checkTrust('fitboi') == 666) {
							writeHTML(`
								incubus Hey, heads up, there was a big draw on energy somewhere in town, apparently someone turned into a demon.
								player Oh, uh, is that bad?
								incubus Well, depends on what they do now. If they start getting a taste for jizz, they'll probably either prey on men until some bigger demon takes the newbie under their wing, or they find demonF's hotel and sign on for a worker.
								player I see...
								incubus Yeah. Well, if you see them, try not to get drained dry. They don't always have wings, sometimes they've got lewd markings.
								player Do you have any of those?
								incubus No comment, jizztank.
							`);
							raiseTrust('incubus', 1);
						}
						else {
							writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
							`);
						}
						break;
					}
					case 9: {
						if (checkTrust('fitboi') == 666) {
							writeHTML(`
								incubus Oh for hell's sake, again?
								t incubusF yells out as you walk in. She takes a small bottle and sprays the air arpund her with a perfume that smells like... Exotic sweets? The bottle is labelled 'repressed milf fantasies'.
								incubus You gotta stop fucking with the shop's vibe. If you fuck a member of the clergy, take a shower or something first before dropping by.
							`);
							raiseTrust('incubus', 1);
						}
						else {
							writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
							`);
						}
						break;
					}
					default: {
						writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
						`);
					}
				}
				//Generate lewd services
				if (checkTrust('incubus') == 2) {
					sale("creampie", 0, "images/incubus/creampie3.jpg", "Creampie (NO CONDOMS ALLOWED!)<br>Mandatory for new customers to earn VIP privileges.");
				}
				else {
					sale("creampieRepeat", 30, "images/incubus/creampie5.jpg", "Creampie (REPEAT)<br>The second hit is never free.");
					if (checkFlag('incubus', 'blowjob') == false) {
						sale("blowjob", 40, "images/incubus/blow1.jpg", "Blowjob<br>No deepthroating allowed, once per day maximum, not responsible for heart complications or addictions that develop.");
					}
					else {
						sale("blowjobRepeat", 40, "images/incubus/blow2.jpg", "Blowjob (REPEAT)<br>No deepthroating allowed, once per day maximum, not responsible for heart complications or addictions that develop.");
					}
					if (checkFlag('incubus', 'rimjob') == false) {
						sale("rimjob", 40, "images/incubus/rim1.jpg", "Rimjob<br>Analingus, asslicking, playing the rusty trombone<br>High virility customers only, masculine or boyish bodies preferred");
					}
					else {
						sale("rimjobRepeat", 40, "images/incubus/rim5.jpg", "Rimjob (REPEAT)<br>Analingus, asslicking, playing the rusty trombone<br>High virility customers only, masculine or boyish bodies preferred");
					}
				}
			}
			else {
				switch (checkTrust('incubus')) {
					case 1: {
						writeHTML(`
							t You enter the store, it's a little cramped and it doesn't seem like the goods are being advertised as much as they are hoarded. Large piles of what you can only assume are merchandise are spread around the store, yet somehow everything smells like fresh air.
							t There are a lot of warnings too. One sign says 'No touching merchandise; it will touch back.' Another says 'You fuck it you buy it.' A particularly ominous-looking vase completely covered in paper talismans shakes excitedly as your gaze passes over it.
							t At the other end of the shop behind a counter is the girl from before, playing something on her phone. She sniffs before looking up from her game and notices you. She's suprised for a moment, before she goes back to being disinterested. There are several crumpled up nametags strewn about the place, each with a short name written on them then crossed out. 'Bel', 'Asmo', and so on. The only one left uncrushed reads 'Lily'.
							incubus Yo, ground rules. Don't touch anything unless you buy it. Don't let anything touch you until you've paid for it, and...
							t She suddenly sniffs the air around you.
							incubus Fuck! Hell's fucking bells, why the shit do I keep fishing up... Hah...
							t She suddenly leans back into her chair, slightly jostling a blackboard with a list of erotic services.
							incubus Ugh, why can't I have it easy like the tomgirls working the streets. Men flock to them in droves...<br>Oh, the board? Ignore it, I don't have a dick. Just don't fuck around. Most of the stuff in here will make eternal damnation look like candyland to you. Some of it will make you see an actual candyland, but that's besides the point. 
							sp player; Humans? What are... What exactly is this place? 
							sp incubus; You've heard of making deals with the devil, right? They pop in and fix some massive roadblock, like systemic oppression or lack of talent, just for you in exchange for your soul.<br>I deal with smaller roadblocks, conveniences and problems you could probably solve on your own. For money.
							sp player; If you really have supernatural powers, why do you need money?
							sp incubus; Microtransactions.
							t She flashes you her phone. On screen is a massive collection of icons of young-looking anime-styled boys.
							sp incubus; Anyways, whatever shit your lazy ass needs that I can fix easily, that's what I do. My dog Chunky can help with memory issues too. If you wanna send someone back to square one to try some newer, freakier shit, he's your boy. Isn't that right Chunky?
							t An iron lockbox nearby suddenly shudders, a sound coming out of it that sounds like a bark coming from a broken walkie-talkie submerged in oil.
							sp incubus; Good boy. Anyways, feel free to browse.
							t With that she goes back to playing, a young male voice moans out 'No, big sister, not there~!'
						`);
						raiseTrust('incubus', 1);
						break;
					}
					case 2: {
						writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
						`);
						raiseTrust('incubus', 1);
						break;
					}
					case 3: {
						//You're a VIP
						writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
						`);
						break;
					}
					case 5: {
						if (checkTrust('succubus') > 77) {
							writeHTML(`
								t As you walk into the shop, you see a familiar face handing incubusF a glass vial filled with a murky white fluid. 
								sp succubus; That'll cover another month in advance, yeah? 
								sp incubus; Yep, it-<br>Customer. Scram, squirt. 
								sp succubus; I told you to stop calling me-<br>*Master? 
								sp player; Yo, succubusF.I guess it makes sense the two of you know each other. 
								t incubusF is surprised that you know succubusF, but quickly tries to hold back laughter. 
								sp incubus; Pffft...<br>*Master? That some kinda sex thing? *He your mark too, succubusF? I know this isn't *his energy you're handing off, it doesn't smell anywhere near as good as *his.
								sp succubus; Your nose is too strong for your own good, incubusF. And I'm *his familiar. 
								sp incubus; Whoa~! That official? You go girl! 
								t succubusF just sighs. 
								sp succubus; We're done here anyways. See you tonight *master. Have fun with this incub-
								sp incubus; Finish that sentence and you die. Or better yet, I've got stuff behind this counter that'll make you wish you were dead. 
								T The jovial atmosphere of the shop is squashed flat in an instant. incubusF glares daggers at succubusF, who doesn't seem to care. 
								sp succubus; You really need to get over that. It's just a rank, it doesn't decide what's in your pants. <br>Err, skirt. Anyways, bye. Lemme know if you get any more outfits in stock. 
								sp incubus; Yeah whatever. 
								sp player; See you around succubusF. Try not to get into any more trouble. 
								t You wave off succubusF as he leaves. 
								sp incubus; Come on, what're you buying? 
							`);
							raiseTrust('incubus', 1);
						}
						else {
							writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
							`);
						}
						break;
					}
					case 6: {
						if (checkTrust('housekeep') > 1) {
							writeHTML(`
								t You enter incubusF's shop, she's still here playing on her phone. However as you approach the counter she sniffs and looks up at you, confused. She leans over the counter and grabs something from your collar; a medium-length pink hair.
								sp incubus; Thought there was something fucky about you. Hold on.
								t She opens a drawer full of... Fire. Somehow it isn't burning the place down or even making a sound. She drops the hair in and shuts the drawer. There's a small sound and a puff of smoke escapes the drawer, which incubusF waves away.
								sp incubus; That would have seriously killed the mood.<br>Alright, what are you buying?
							`);
							raiseTrust('incubus', 1);
						}
						else {
							writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
							`);
						}
						break;
					}
					case 7: {
						if (checkTrust('demon') > 101) {
							writeHTML(`
								t You enter incubusF's shop, she's still here on her phone, but she seems distracted. She's breathing a little more heavily, and there's a faint sweet smell about the shop.
								t You can hear the sounds of a cashier coming from her phone, not the usual fantasy game stuff. She's distracted and turned away from you, so you walk up to the counter and check out what she's watching.
								im images/demon/demonPaint5.jpg;
								sp player; Is that demonF?
								t She freezes up and clutches her phone tightly, before she realizes it's you and calms down.
								sp incubus; ... Really need to fix that bell. Yeah, he's an old associa-<br>Wait, how do you know him?
								t You give incubusF the play-by-play of how your encounters with demonF went down, the sweet smell lingering in the shop growing more powerful as you get into the sordid details.
								sp incubus; Nice. Really nice. Good to see him getting what he deserves.
								sp player; Were you in his debt?
								sp incubus; Nope, he only gives out loans to male succubi. It's for the best actually, I'd probably have never paid it off. If you think male succubi get messed up when they develop a squirting fetish...
								sp player; So you're 100% a demon? A succubus?
								sp incubus; ... Demon, yes. I'm a rank above the boys like succubusF though. Just... Just don't think about it too much. Anyways, buy something already. I guess since you got demonF like that, I can probably give you a discount.
							`);
							data.player.incubusDiscount += 10;
							raiseTrust('incubus', 1);
						}
						else {
							writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
							`);
						}
						break;
					}
					case 8: {
						if (checkTrust('fitboi') == 666) {
							writeHTML(`
								incubus Hey, heads up, there was a big draw on energy somewhere in town, apparently someone turned into a demon.
								player Oh, uh, is that bad?
								incubus Well, depends on what they do now. If they start getting a taste for jizz, they'll probably either prey on men until some bigger demon takes the newbie under their wing, or they find demonF's hotel and sign on for a worker.
								player I see...
								incubus Yeah. Well, if you see them, try not to get drained dry. They don't always have wings, sometimes they've got lewd markings.
								player Do you have any of those?
								incubus No comment, jizztank.
							`);
							raiseTrust('incubus', 1);
						}
						else {
							writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
							`);
						}
						break;
					}
					default: {
						writeHTML(`
							t You enter incubusF's shop, she's still here playing on her phone. She waves at you as you enter, giving the faintest of smiles.
						`);
					}
				}
			}
			//Generate nonlewd services, such as skipping character progression.
			if (checkTrust('neet') > 99) {
				sale("neetReset", 40, "images/neet/neet.jpg", "Chunky's Meal - neetF<br>Erases neetF's memories, allowing you to try something different with her.");
			}
			if (checkTrust('intern') > 30) {
				sale("internReset", 40, "images/intern/intern.jpg", "Chunky's Meal - internF<br>Erases internF's memories, potentially undoing some mistake.");
			}
			if (checkFlag('intern', 'ordervial') && checkFlag('intern', 'kconditioner') == false) {
				sale("kconditioner", 70, "images/intern/intern.jpg", "Karma Conditioner<br>An ancient potion prepared with the sole purpose of neutralizing the effects of an angel and a devil partner simultaneously.");
			}
			if (checkTrust('succubus') == 2) {
				sale("succubusReset", 40, "images/succubus/demon.jpg", "Status Quo-Yo<br>Undoes your decision to send succubusF away.");
			}
			if (checkTrust('camboi') > 20) {
				sale("camboiReset", 40, "images/camboi/camboi.jpg", "Chunky's Meal - camboiF<br>Erases camboiF's memories, allowing you to try a different approach with him.");
			}
			if (checkTrust('serious') > 30) {
				sale("seriousReset", 40, "images/serious/serious.jpg", "Chunky's Meal - seriousF<br>Erases seriousF's memories, allowing you to try a different approach with him.");
			}
			if (checkTrust('kuro') == 40) {
				sale("kuroReset", 40, "images/kuro/kuro.jpg", "Chunky's Meal - kuroF<br>Erases kuroF's memories, undoing a decision to share.");
			}
			if (checkTrust('nurse') == 3) {
				sale("nurseReset", 10, "images/nurse/nurse.jpg", "Chunky's Meal - nurseF<br>Erases nurseF's memories, allowing you to retry and get nurseF on your side.");
			}
			if (checkTrust('mama') == 1) {
				sale("incubusMama", 50, "images/mama/mama.jpg", "Mystic Perfume<br>Gives you a disguise to corrupt mamaF without needing to corrupt scarfF or nurseF.");
			}
			if (checkTrust('fitboi') == 80 && checkFlag("fitboi", "cream") == false) {
				sale("she-cream", 40, "images/fitboi/fitboi.jpg", "She-Cream<br>These topical creams makes the skin of men into the things of dreams.");
			}
			if (checkTrust('fitboi') == 666 && checkFlag("incubus", "fitboiFail") == false) {
				sale("fitboiReset", 0, "images/fitboi/fitboiC.jpg", "Chunky's Meal? - fitboiF<br>Can incubusF possibly help you purify fitboiF?");
			}
			if (checkTrust('mama') > 18) {
				sale("mamaReset", 40, "images/mama/mama.jpg", "Chunky's Meal - mamaF<br>Erases mamaF's memories, allowing you to try something different with her.");
			}
			if (checkTrust('ojou') == 1 && checkFlag("ojou", "incubus") == false) {
				sale("incubusOjou", 50, "images/ojou/ojou.jpg", "Distraction<br>Don't want to fuck brownF or join ribbonF's little club? I can take care of this little princess for you.");
			}
			if (checkTrust('ojou') > 20) {
				sale("ojouReset", 50, "images/ojou/ojou.jpg", "Chunky's Meal - ojouF<br>Erases ojouF's memories, and whoever you had help you corrupt her. Good if you wanna see how the other girl handles the little princess.");
			}
			if (checkTrust('pinstripe') == 1 && checkFlag('pinstripe', 'potionFlag') != true) {
				sale("incubusPinstripe", 40, "images/pinstripe/pinstripe.jpg", "Blonding Potion<br>Gives you a potion for pinstripeF without needing to corrupt nurseF.");
			}
			if (checkTrust('pinstripe') > 10 || checkTrust('pinstripe') == 2) {
				sale("pinstripeReset", 50, "images/pinstripe/pinstripe.jpg", "Chunky's Meal - pinstripeF<br>Erases pinstripeF's memories, allowing you to try something different with her. Also removes potion effects");
			}
			if (checkTrust('president') == 2 || checkTrust('president') == 3) {
				sale("incubusPresident", 50, "images/president/president.jpg", "Demonic Consultation<br>incubusF will come by and convince presidentF that she should trust hypnosis, without you needing to bring other students by to convince her.");
			}
			if (checkTrust('instructor') < 80 && checkTrust('instructor') > 0 && checkFlag("incubus", "instructor") != true) {
				sale("incubusInstructor", 50, "images/instructor/instructor.jpg", "Turvey Top<br>Need to corrupt a bunch of brats all at once, all in public? Can't be bothered to best another hypnotist, and don't have a familiar? This is a deal for you.");
			}
			if (checkTrust('instructor') > 2) {
				sale("instructorReset", 40, "images/instructor/instructor.jpg", "Chunky's Meal - instructorF<br>Erases instructorF's memories, allowing you to try something different with her and her posse of athletic sluts.");
			}
			if (data.player.gender == "man") {
				sale("genderswap", 50, "scripts/gamefiles/profiles/basil.jpg", "Genderswap<br>Don't worry, you'll still have a dick. But if you want to look a little softer, be a little more feminine, I got you.<br>Comes with a free name change too.");
			}
			if (data.player.gender == "woman") {
				sale("genderswap", 50, "scripts/gamefiles/profiles/basic.jpg", "Genderswap<br>Wanna be a little more rugged? Wanna be able to buy four comfortable shirts that fit you out of the packaging for just five dollars? I got you.<br>Comes with a free name change too.");
			}
			if (data.player.gps != true) {
				sale("findmii", 30, "scripts/gamefiles/items/map.jpg", "Find Mii<br>Can't find somebody? Instead of asking chaos or something, buy this and everybody will be a cinch to find wherever they are. Town map not included.");
			}
			if (data.player.pervert == false) {
				if (data.player.carnivore == true) {
					sale("pervert", 30, "images/nagatoro/nagatoroP.jpg", "Pervert's Sight<br>Relax and take in the sights. Whenever you speak to someone, you'll picture them as being naked or wearing erotic clothes.");
				}
				else {
					sale("pervert", 30, "images/principal/principalP.jpg", "Pervert's Sight<br>Relax and take in the sights. Whenever you speak to someone, you'll picture them as being naked or wearing erotic clothes.");
				}
			}
			if (data.player.pervert == true) {
				if (data.player.carnivore == true) {
					sale("pervert", 70, "images/nagatoro/nagatoro.jpg", "Pervert's Sight Removal<br>Oh? You don't want to see your conversation partner naked anymore? Fork up some cash, then.");
				}
				else {
					sale("pervert", 70, "images/principal/principal.jpg", "Pervert's Sight Removal<br>Oh? You don't want to see your conversation partner naked anymore? Fork up some cash, then.");
				}
			}
			if (data.player.noDisguise != true) {
				sale("noDisguise", 50, "scripts/gamefiles/profiles/son.jpg", "I hate disguises!<br>Dislike the disguises you use for some characters, like mamaF? I can make your speech normal at least.");
			}
			if (data.player.counseling < 5) {
				sale("counseling", 200, "scripts/gamefiles/profiles/principal.jpg", "Counseling++<br>You didn't become a counselor to actually do your job, right? Consider this a kind of lesser nuclear option. Watch out for the PTSA though.");
			}
			writeFunction("writeEncounter('cancel')", "Leave");
			if (checkTrust('incubus') == 4) {
				writeEncounter('discount');
			}
			if (checkTrust('incubus') == 3) {
				raiseTrust('incubus', 1);
			}
			break;
		}
		case "she-cream": {
			writeHTML(`
				player So I'm looking to corrupt someone. He's a fitness junkie, and-
				incubus Got it, I know exactly what you need.
				t incubusF opens several drawers. The first screams when opened, the second begins passionately singing in latin, and the third is full of ordinary skincare products. incubusF pulls out a nondescript tube.
				incubus She-cream oil, fresh from... Well, this century, probably. Humans invent this stuff every hundred years or so, it's an old blessing on your species from some retired demon. Hehe, nearly causes an apocalypse every time.
				player That doesn't sound good. What does it do?
				incubus You ever see one of those porno-mags with the hunks practically pissing precum everywhere and firing off loads that could fill a bathtub? That's what the pure stuff does when rubbed into the dick, this has been seriously watered down with nut oil.
				player The stuff you find in the store, right? Not-
				incubus You'll be fine if you rub it on yourself, it's really only effective on a cardio bunny. I used to be seriously into the stuff, but then I got banned from using it as lube.
				player Demons got banned from using this?
				incubus Use it wisely. And if you combine this stuff with demonic energy the recipient will never be the same.
			`);
			addFlag("fitboi", "cream");
			writeFunction("writeEncounter('cancel')", "Leave");
			break;
		}
		case "fitboiReset": {
			writeHTML(`
				incubus Oh. Oh man. No way, really, Of <i>course</i> it was you 
				player To be fair, it was an accident. Can you help?
				incubus You mixed demonic essence with She-Cream, didn't you? There are warnings to that kinda thing, you know.
				player Right right, but I wouldn't be here in this city if I always played by the rules. Again, can you help?
				incubus Nope. Nothing from here to hell can walk back full corruption. And even if you find something, I don't wanna see it, hear about it, hell, I don't even want to know it exists. Best of luck with your new boytoy.
				player Oh joy. Thanks for nothing.
				incubus Hey, I'll give you a full refund, at least.
				t incubusF pantomimes counting out coins, and hands you your change. A cool zero dollars.
				player ... You make an excellent demon.
				incubus Ooh, that's some mean dirty talk. 
			`);
			addFlag("incubus", "fitboiFail");
			writeFunction("writeEncounter('cancel')", "Leave");
			break;
		}
		case "pervert": {
			if (data.player.pervert == true) {
				writeHTML(`
					incubus Fine. Eyes forward, keep them open.
					player Alright, I'm ready this ti-
					t Blinding darkness, your vision fades for a moment...
					t And once it's back, incubusF is right back to playing her mobile game.
					incubus Alright, time for another ten-roll...
				`);
				data.player.pervert = false;
			}
			else {
				writeHTML(`
					incubus Great. Eyes forward, keep them open.
					player How does this wor-
				`);
				data.player.pervert = true;
				if (data.player.carnivore == true) {
					writeHTML(`
						t Blinding light overwhelms you, and then...
						incubus Alright, that should do it.
						player Nothing happened...
						incubus You're a meat lover, go outside and find yourself someone who's packing something extra.<br>Speaking of extra, the removal procedure costs a lot more than this. Thanks for the cash!
					`);
				}
				else {
					writeHTML(`
						t Blinding light overwhelms you, and then...
						incubus Alright, that should do it.
						player Whoa...
						incubus Staring costs extra. Speaking of extra, the removal procedure costs a lot more than this. Thanks for the cash!
					`);
				}
			}
			writeFunction("writeEncounter('cancel')", "Leave");
			break;
		}
		case "genderswap": {
			if (data.player.gender == "man") {
				data.player.gender = "woman";
				data.player.title = "Miss";
				data.player.honorific = "ma'am";
				if (checkBody("basil") != true) {
					var goof = {index: "basil", artist: "Art by Ishimura",};
					data.bodytypes.push(goof);
				}
				data.player.character = "basil";
				updateMenu();
				writeHTML(`
					t As you hand incubusF the money she takes a small can and sprays you in the face.
					t it doesn't burn, but it does have a strange smell. By the time your vision has cleared up...
					im scripts/gamefiles/characters/basil.jpg
					sp player; It's done?
					sp incubus; There you go. Fully reversible too, for cash. I've got a thing that'll handle the cleanup too, nobody will notice the change. You're a new woman. Congratulations...
				`);
				writeText("<input type='text' id='nameSubmission' value='Tomara'>");
				writeFunction("renamePlayerAlt()", "Finish");
			}
			else {
				data.player.gender = "man";
				data.player.title = "Mister";
				data.player.honorific = "sir";
				if (checkBody("basic") != true) {
					var goof = {index: "basic", artist: "Art by Ishimura",};
					data.bodytypes.push(goof);
				}
				data.player.character = "basic";
				updateMenu();
				writeHTML(`
					t As you hand incubusF the money she takes a small can and sprays you in the face.
					t it doesn't burn, but it does have a strange smell. By the time your vision has cleared up...
					im scripts/gamefiles/characters/basic.jpg
					sp player; It's done?
					sp incubus; There you go. Fully reversible too, for cash. I've got a thing that'll handle the cleanup too, nobody will notice the change. You're a new *man. Congratulations...
				`);
				writeText("<input type='text' id='nameSubmission' value='Thomas'>");
				writeFunction("renamePlayerAlt()", "Finish");
			}
			unencounter('incubus');
			break;
		}
		case "noDisguise": {
			data.player.noDisguise = true;
			writeHTML(`
				t incubusF steps out from behind the counter and picks up a small mirror, you can see your reflection in it.
				sp incubus; There, for your dialogue at least. The mirror doesn't work on larger images.
				sp player; ???
				sp incubus; And if you want to re-enable it, use a cheat code. I'm not clogging up my store with that.
				t She's speaking some arcane gibberish at you, it'd be best to finish up.
			`);
			writeFunction("writeEncounter('cancel')", "Leave");
			break;
		}
		case "findmii": {
			data.player.gps = true;
			writeHTML(`
				t incubusF pulls out a perfume bottle with a red X on the side and sprays you with it.
				sp incubus; There, this'll help you find people around town. Specifically hot ones, no more searching around. You'll need to have a town map to use it though. Basically life's on easy mode now.
				sp player; What's hard mode?
				t incubusF looks over to a box with OwO written on the front, and shudders.
				sp incubus; You don't want to know.
			`);
			writeFunction("writeEncounter('cancel')", "Leave");
			break;
		}
		case "counseling": {
			writeHTML(`
				t incubusF takes out a small jet-black bottle of perfume and sprays you with it.
				t Suddenly, you feel... Trusted.
			`);
			writeSpecial("Your ability as a competent school counselor has been greatly increased!");
			writeHTML(`
				sp incubus; Alright, that's that. I don't have a console to mess with your other skills though, so I'd find a teacher for those. And I think you'll find your boss will be a lot more trusting of you now.
			`);
			data.player.counseling = 9;
			updateMenu();
			writeFunction("writeEncounter('cancel')", "Leave");
			break;
		}
		case "discount": {
			writeHTML(`
				t You walk into the store to find incubusF laying on the counter, an arm and leg hanging off the side as she chugs down some mysterious bottle of fluid. The makeup around her eyes is streaked downwards, like she was just crying.
				sp incubus; Aaaah~
				t Finishing the small bottle she throws it aside. It shatters on the floor.
				sp player; Everything alright?
				sp incubus; Yo~<br>Jusht giving up on life, no biggie.<br>Hey, did you know what happens when you drink too much of this shtuff? When boysh drink it, their prostate shtarts building up until they shquirt it all out, and they get addicted to it. I've never done that myshelf, too dangerous to get hooked on the product, I think it'd be really fun to shquirt like that...
				sp player; What the hell happened to you?
				t She points to her phone, laying on the floor. Bits of the screen show it's been freshly thrown.
				t You pick it up, careful not to cut yourself. On the screen is a small notification about corrupted data.
				sp player; ... That's it? Your mobile game got corrupted?
				sp incubus; I had fucking Rama, Ashtolfo, even the limited Shota Merlin... I got him for shpending over fifteen-kay...<br>It'sh sho shtupid... It'sh ALL FUCKING SHTUPIIIIID~!!!
				t She goes back to wailing on the counter. If she really spent that much...<br>From how she's acting, it doesn't seem like there's a backup either.
				t For as fun as it would be to see her break on a drug binge on what you can only assume is succubus essence, the shop provides some really useful services. Not to mention she'd probably get in trouble with whoever else she sells stuff to.
			`);
			if (data.player.hacking > 2) {
				writeFunction("writeEncounter('discountVictory')", "Fix her phone");
			}
			writeFunction("writeEncounter('discountDefeat')", "Try to talk her out of a drug binge");
			break;
		}
		case "discountVictory": {
			writeHTML(`
				t The phone is still functional, so you do a bit of snooping. You're pretty handy with technology, so...
				sp player; Hey, I think I can fix this with a backup.
				sp incubus; Shut the fuck up you cockshucking bitch~ Ah already... I don't havva account backup...
				sp player; But you did update last week, so you have a global phone backup. I can't believe you've spent fifteen-thousand on this game, but your account isn't even fully registered. That's really asking-
				t Your interrupted by a tugging on your sleeve. As you look down incubusF is on the floor, tears in her eyes.
				sp incubus; You can... Get them back? My boysh?
				...
				t After about an hour of backing up her system and making sure everything is up-to-date, she starts up the app to be greeted by a twinky-looking boy, who looks maybe twelve but is probably secretly over two-thousand years old or some shit.
				t She sniffs as tears form in her red eyes again, but this time tears of joy. Luckily she's recovered from her drug-addled state. Mostly.
				sp incubus; This is really recent! Thank you! I'll uh, give you a discount~! Oh, and that outfit I have in the back... Oh, thank you thank-
				t She's interupted as the boy onscreen lets out a moan, apparently he's happy that her stamina meter is fully charged. Her eyes shoot open and her legs clench together.
				t She looks sheepish as she moves around the cashier counter, stumbling to a door leading to a back room and muttering to herself.
				sp incubus; Fuckfuckfuck don't cum, don't cum, don't waste it-
				t She slams the door behind her, leaving you alone in the store. You'll probably see her again tomorrow, and you've earned a fine discount for your troubles!
			`);
			passTime();
			data.player.incubusDiscount += 10;
			raiseTrust('incubus', 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "discountDefeat": {
			writeHTML(`
				t You pry a bottle of succubus essence out of incubusF's hand and try to calm her down. You only get every other word between full sobs, but apparantly the game meant a lot to her.
				t Years of tedium can make you pretty dependant on gambling, especially if it's for pictures of cute boys. Probably.
				t You lean in for a hug. She uses your shirt as a snot-rag, it's a little gross but it's for a good cause. You gently stroke her hair to calm her down, and she breaths in your scent between sobs that are slowly getting farther apart.
				...
				t After a while, she calms down. Her drug-addled slurr has also faded.
				sp incubus; Whatever, I'm fine already...
				sp player; You sure?
				t She nods, her eyes red.
				sp incubus; I'll just... I'll just buy another account online. And change my name after...
				t Her eyes suddenly shoot open and she rolls off the counter, stumbling to a door leading to a back room and muttering to herself.
				sp incubus; Fuckfuckfuck don't cum, don't cum, don't waste it-
				t She slams the door behind her, leaving you alone in the store. You'll probably see her again tomorrow.
			`);
			passTime();
			raiseTrust('incubus', 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "creampie": {
			writeEvent('incubuscreampie');
			passTime();
			raiseTrust('incubus', 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "creampieRepeat": {
			writeHTML(`
				sp incubus; Another one, huh? Careful, you'll get addicted. And if your performance drops I'm upping the price, I've got my eyes on an event banner running for the week.
				...
				t You're led to the back room. Despite her attitude, incubusF is clearly as excited for another round as you are. There's the sound unclasping as incubusF tosses her skirt aside and leans into your chest before taking a deep breath.
				t She takes a deep breath, holding it in her lungs. As she exhales her scowl has faded. She leans in even closer for another deep inhale as her nose brushes against your skin. 
				t Her eyes unfocus as a sweet smell fills the room. Seemingly satisfied she lays on the bed and waves her ass at you, lifting her cardigan to show you she's wearing nothing underneath.
				im images/incubus/creampie1.jpg
				t She bites her lip to hold back a sudden moan, she's sopping wet so you meet no resistance inside her.
				sp incubus; Fff... Fuck, slow down... Pace yourself so I can finish too, alr-
				im images/incubus/creampie2.jpg
				t incubusF is at a loss for words, deciding to give herself in and let herself be used.
				t You slide her cardigan up further, copping a feel of her perky tits, before firmly grasping her hips again. The sight of her ass against your hips, the bizarre scent of hers, all of it is messing with your head. Your vision blurs over as you start to cum.
				im images/incubus/creampie3.jpg
				im images/incubus/creampie4.jpg
				t incubusF goes stiff beneath you. Something about your cum pushing, if now completely throwing her over the edge.
				t After the full-body jolt passes through her, she can finally catch her breath.
				...
				im images/incubus/creampie5.jpg
				t You cum again, and it hits her like a ton of bricks. Her eyes roll back and her eyelids flutter, the sweet scent in the room grows tenfold as her muscles tense and a small stream of squirt soaks the bedding beneath you, then another, and another.
				t She babbles something as her eyes close. Fatigue overtakes her. Whatever she's been doing to your body is still ongoing, your heart is still racing, but exhaustion is starting to take its toll on you and you can't keep yourself upright much longer. At least you manage to fall to your side so you don't fall asleep on top of her.
				...
				t By the time you're awake again incubusF has left to sleep off the sexual haze, and you should get going.
			`);
			addSkill("corruption", 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "blowjob": {
			writeEvent('incubusblowjob');
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "blowjobRepeat": {
			writeHTML(`
				sp incubus; Another suckjob, huh? You really sure you wouldn't rather stuff me instead?
				sp player; If you want to get creamed that bad, why even advertise your mouth?
				sp incubus; Shut up, some girls like variety in their routines... And diets.
				...
				t You're led to the back room. Despite her attitude, incubusF is clearly as excited for another round as you are.
				im images/incubus/blow1.jpg
				t You relax yourself on the edge of a chair, incubusF doesn't take the time to get herself ready on your scent this time. 
				t Both her hands on the floor she has the head of your cock in her mouth, running her long, flexible tongue around it.
				im images/incubus/blow2.jpg
				t She looks up at you, as if she's carefully watching for every small twitch or groan of pleasure you make.
				t Her technique is incredible, and you can feel the vibrations of a small giggle as she stares at you. She must realize that making you wait for the main course like this is torture, almost as much as she must be dealing with waiting for your load.
				im images/incubus/blow3.jpg
				t Finished with the teasing torment, thus begins the spiral dance for your pleasure. You feel yourself start to cum and she takes it without missing a beat. As you hear her swallow each rope of your load, a sweet scent blankets the room.
				im images/incubus/blow4.jpg
				sp incubus; Hahh~!<br>Lucy's sake I needed that so badly...
				t She starts snapping back to her senses as yours start to fuzz over a little. Despite having just cum, you still feel pretty pent up.
				t But even as she smacks her lips, savoring the taste of her latest meal, she ushers you out. It isn't clear why she's got the one per customer rule, but she intends to stick to it.
			`);
			addSkill("corruption", 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "rimjob": {
			writeEvent('incubusrimjob');
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "rimjobRepeat": {
			writeHTML(`
				sp incubus; Ugh, another rimjob? Do you get off on being a gross degenerate or something?
				sp player; Why not advertise for anal, or something else?
				sp incubus; Because I don't like it, duh.<br>... Ignore that, just... Fuck, just cmon and let's get this over with.
				...
				t You're led to the back room. Despite her attitude, incubusF is clearly as excited for another round as you are.
				t On your hands and knees again it takes only a moment before incubusF is literally on your ass. Any pretense that she's in this for the money is gone in a flash.
				im images/incubus/rim1.jpg
				sp incubus; Fuck yesss~! God, it tastes so good I could cum right now~!
				t Once again you can't get out any form of response other than a shuddering groan, not that she'd bother to respond back when she has something so wonderful in front of her..
				im images/incubus/rim2.jpg
				t Just like before her saliva is thick on your asshole, enough of it dribbling down to be lubrication for her milking handjob.
				t She shifts between taking deep breaths and holding your scent in her lungs, and lifting her lips to your asshole to push her flexible tongue inside.
				im images/incubus/rim4.jpg
				sp incubus; Nggggh~! I'm a dirty fucking asslicking whore~!
				t Her eyes roll back and she grits her teeth, the sweet smell filling the room grows more intense and she strokes you even faster to hold back from stroking her own cunt, trying to keep herself on edge for as long as possible.
				t The sour whore from before is gone, all that's left is a girl with a fetish for making out with your asshole. Her saliva is finally pushing you over the edge, and she knows it. Her frenching and stroking are growing more feverish as you feel yourself start to cum.
				im images/incubus/rim5.jpg
				t She moans into your ass as the sudden mix of jizz splurting on her hand causes the smell of thick cum to fill her brain as well. She moans, squeals, and squirms on the spot as she matches your orgasm completely hands-free.
				im images/incubus/rim6.jpg
				sp incubus; Mmmmph~! 
				t Splurt, splurt, splurt. Her palm is rubbing the head of your cock, both to ensure you spill every last sperm cell, and to catch everything she can.
				t She takes one last long, slow stroke while her tongue is still greedily rubbing your prostate, before she uses both hands to hold as much unspilled jizz as she can. She pulls her tongue free in a long exagerated slurping motion so that she can lift her messy hands to her mouth.
				t Gulp, gulp, gulp. A depraved look on her face as she chugs a handfull of jizz. The very last mouthful is held for a moment to savor the taste and the depravity of the situation. Once she's swallowed it's only a moment before her tongue is out again to lick her hands clean.
				t You lie on the bed, needing to take a moment to catch your breath. 
				...
				t Once you're done, you're ushered out as her usual attitude returns.
			`);
			addSkill("corruption", 1);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "incubusMama": {
			writeHTML(`
				t You recount your troubles with mamaF of the PTSA. In a moment incubusF has pulled a small bottle out of a drawer. A vial of white fluid, when you shake it the fluid turns black, before relaxing and turning back again.
				sp incubus; Drink it without shaking and it'll turn you into a copy of the object of her affection, probably her son. Shake it and then drink, and you'll turn into the object of her darkest desires. Probably a big man for a good-old hard cucking session, that's usually what housewives are into these days.
				sp player; So I could just drink this, turn into her son, and hypnotise her to support me.
				sp incubus; Yep. Or you could do a little mama-son roleplay. Get a little fucky with the <span style="color:pink;">Ara ara~</span>
				t You stumble as you hear those words, like you're being wrapped in a soft blanket that makes your head fuzz over.
				sp incubus; Shit, sorry, forgot how powerful that phrase is when I say it. Anyways go get your rocks off and clear your head.
			`);
			setTrust('mama', 2);
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "mamaReset": {
			writeHTML(`
				t incubusF snaps her fingers and a nearby lockbox opens. Something small and white scurries out in a flash and flies at you, dead set on your right ear.
				...
				t Groggily, you wake up in a disoriented heap. You feel... Violated.
				sp incubus; Yo. Chunky already found her and got her memories, you're fine to fuck about. Lemme know if you want him to eat anything else. Sit outside if you need to take a breather.
				t mamaF's memories of you have been reset, you're now free to enjoy her however you please! 
			`);
			setTrust('mama', 2);
			removeFlag("mama", "complete");
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "nurseReset": {
			writeHTML(`
				t incubusF snaps her fingers and a nearby lockbox opens. Something small and white scurries out in a flash and flies at you, dead set on your right ear.
				...
				t Groggily, you wake up in a disoriented heap. You feel... Violated.
				sp incubus; Yo. Chunky already found her and got her memories, you're fine to fuck about. Lemme know if you want him to eat anything else. Sit outside if you need to take a breather.
				t nurseF's memories of you have been reset, you're now free to enjoy her however you please! 
			`);
			setTrust('nurse', 1);
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "internReset": {
			writeHTML(`
				t incubusF snaps her fingers and a nearby lockbox opens. Something small and white scurries out in a flash and flies at you, dead set on your right ear.
				...
				t Groggily, you wake up in a disoriented heap. You feel... Violated.
				sp incubus; Yo. Chunky already found him and got his memories, you're fine to fuck about. Lemme know if you want him to eat anything else. Sit outside if you need to take a breather.
				t internF's memories of you have been reset, you're now free to enjoy him however you please! 
			`);
			removeFlag("intern", "hate");
			removeFlag("intern", "reject");
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "seriousReset": {
			writeHTML(`
				t incubusF snaps her fingers and a nearby lockbox opens. Something small and white scurries out in a flash and flies at you, dead set on your right ear.
				...
				t Groggily, you wake up in a disoriented heap. You feel... Violated.
				sp incubus; Yo. Chunky already found him and got his memories, you're fine to fuck about. Lemme know if you want him to eat anything else. Sit outside if you need to take a breather.
				t seriousF's memories of you have been reset, you're now free to enjoy him however you please! 
				incubus ?trust serious 666; Oh, and by the way, chunky has a bit of a side effect of restoring drained masculinity. Just thought I'd let you know, you'll probably need to prep him again if you want to corrupt him.
			`);
			removeFlag("serious", "sadist");
			removeFlag("serious", "inClassA");
			removeFlag("serious", "inClassB");
			setTrust('serious', 30);
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "neetReset": {
			writeHTML(`
				t incubusF snaps her fingers and a nearby lockbox opens. Something small and white scurries out in a flash and flies at you, dead set on your right ear.
				...
				t Groggily, you wake up in a disoriented heap. You feel... Violated.
				sp incubus; Yo. Chunky already found her and got some of her memories, you're fine to fuck about. Lemme know if you want him to eat anything else. Sit outside if you need to take a breather.
				t neetF's memories of you have been reset, you're now free to enjoy her however you please! 
			`);
			setTrust('neet', 99);
			removeFlag("neet", "complete");
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "succubusReset": {
			writeHTML(`
				t incubusF sighs.
				incubus You're really making my job hell here, you know. Chunky's a good boy, but he's no match for a prince of hell, and I have no idea where little miss chocolate is. Hold on.
				t Reality seems to... Skip. Glitch. Like a hole was opened that incubusF falls into before she returns holding something round.
				incubus Alright, assuming this works...
				t She tosses the object, it's... A yo-yo? As it unravels you hear a low thrum that reverberates in your skull, and when it winds back up you feel slightly younger than you did before.
				incubus Alright, now to put this back. Don't make me bust out the quo-yo again, the dimension I borrow this from can get really grumpy when you take their stuff.
				...
				t Somehow your decision to send succubusF away has been undone!
			`);
			setTrust('succubus', 78);
			removeFlag("succubus", "mission");
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "kuroReset": {
			writeHTML(`
				t incubusF snaps her fingers and a nearby lockbox opens. Something small and white scurries out in a flash and flies at you, dead set on your right ear.
				...
				t Groggily, you wake up in a disoriented heap. You feel... Violated.
				sp incubus; Yo. Chunky already found her and got some of her memories, you're fine to fuck about. Lemme know if you want him to eat anything else. Sit outside if you need to take a breather.
				t kuroF's memories of you have been reset, you're now free to enjoy her however you please! 
			`);
			setTrust('kuro', 25);
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "camboiReset": {
			writeHTML(`
				t incubusF snaps her fingers and a nearby lockbox opens. Nothing comes out, but there's a frothing sound from inside.
				incubus Oh... Oh no... He's a pornstar... Chunky, wai-
				t suddenly, the world turns white.
				...
				t Groggily, you wake up in a disoriented heap. You feel... Violated. incubusF is stroking the lockbox, she's cooing softly and there's a soft whine coming from the box.
				sp incubus; There there... It'll be okay Chunky, you just had a little too much to eat...<br>He'll be okay, he was a pretty minor one. Him, and everybody who knew or watched him has had some of their memories taken by my good little boy. So, uh, fuck off and go have your fun.<br>Shh... Big meals make you grow up big and strong, it's okay...
				t Most of camboiF's memories of you have been reset, you're now free to enjoy him however you please! 
			`);
			setTrust('camboi', 1);
			removeFlag("camboi", "stream");
			removeFlag("camboi", "hypno");
			removeFlag("camboi", "streamQuoFirst");
			removeFlag("camboi", "streamQuoAngry");
			removeFlag("camboi", "bargain");
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "incubusInstructor": {
			writeHTML(`
				t incubusF pulls out a glass... Thing. It defies description, and there are only two things you can identify about it. First is that it looks cheap, like a knock-off souvenir.
				t Second, despite you not being able to understand it's structure, you somehow strongly feel like it's upside-down. You reach out but incubusF pulls it back suddenly.
				incubus Whoa there hotshot. This thing is worth a lot more than your soul. You didn't buy this, you bought a one-time use.
				player What is it, how can it help me, and why does it make my brain hurt to look at.
				incubus This is a common sense manipulator. A cheap one, anyways. Coppied it from a rich demon's collection. Energy goes in, I tip it, and it... Well, inverts morality and shame.<br>Hidden fetishes, how you feel about sex, it flips a lot of things. Nobody'll bat an eye if you raw dog a stranger on the street.
				t As she gently turns it, reality wobbles until she turns it back.
				incubus You retain full memory afterwards. Buuuut if you did something really awful, something that'd shame you to your core, in most cases you brain would rather pretend it's still affected than accept reality. Something like... Whoring out a bunch of girls who trust you to make them olimpians. Or begging a stranger for his dick in front of everyone you respect. <br>You get where I'm going with this?
				player So if I can't have it, then-
				incubus I know where you'll need it. I'll be there ready to flip it. Your bill is paid, head on back to the gym. Don't expect me to be supportive though.
			`);
			addFlag('incubus', "instructor");
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "instructorReset": {
			writeHTML(`
				t incubusF snaps her fingers and a nearby lockbox opens. Something small and white scurries out in a flash and flies at you, dead set on your right ear.
				...
				t Groggily, you wake up in a disoriented heap. You feel... Violated.
				sp incubus; Yo. Chunky already found her and got her memories, you're fine to fuck about. Lemme know if you want him to eat anything else. Sit outside if you need to take a breather.<br>Honestly, having him hit an entire team at once... Guess I should've named him 'Chonky'.
				t instructorF's memories of you have been reset, you're now free to enjoy her however you please! Feel free to hire incubusF's services, or find another helper to take down the team with.
			`);
			setTrust('instructor', 2);
			removeFlag("instructor", "complete");
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "incubusOjou": {
			writeHTML(`
				player Now, by "take care of", you mean-
				incubus I mean on the night of the meeting I'll show up at her house, work my magic, and she'll be too busy letting me munch her rug to show up to school.<br>The best kind of way to take care of her, wouldn't you say?
				player So she won't be there?
				incubus So long as it's just one or two who are absent it should be fine, right? Be pretty fucking stupid if all of them didn't show, but you should be fine.<br>Don't worry, I won't screw up. Promise~
			`);
			addFlag("ojou", "incubus");
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "ojouReset": {
			writeHTML(`
				t incubusF snaps her fingers and a nearby lockbox opens. Something small and white scurries out in a flash and flies at you, dead set on your right ear.
				...
				t Groggily, you wake up in a disoriented heap. You feel... Violated.
				sp incubus; Yo. Chunky already found her and got her memories, go fuck the other one if you want her to spy on you and do the whole thing again, I don't care. Lemme know if you want him to eat anything else. Sit outside if you need to take a breather.
				t ojouF's memories of you have been reset, you're now free to enjoy her however you please! 
				sp incubus; Oh, she got the other one too. Can't remember her name though. Chunky probably got the right one. Maybe.
			`);
			setTrust('ojou', 1);
			removeFlag("ojou", "brownInvite");
			removeFlag("ojou", "ribbonInvite");
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "incubusPinstripe": {
			writeHTML(`
				t You hand incubusF the money, and in exchange she hands you a spraybottle.
				sp incubus; Don't ask how I got this, just use a little like perfume and you'll have her off guard. Spray a little more in her face and she's your putty to play with.
				sp player; Seems easy enough. It won't affect me?
				sp incubus; You'll be fine. Modify the potion a little and you'll have something to use on the whole town. Careful though, it has some side-effects that become a little more permanent each time you use it.
				sp player; Such as...?
				sp incubus; Use it yourself and find out, you baby.
			`);
			addFlag('pinstripe', "potionFlag");
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "pinstripeReset": {
			writeHTML(`
				t incubusF snaps her fingers and a nearby lockbox opens. Something small and white scurries out in a flash and flies at you, dead set on your right ear.
				...
				t Groggily, you wake up in a disoriented heap. You feel... Violated.
				sp incubus; Yo. Chunky already found her and got her memories, you're fine to fuck about. Lemme know if you want him to eat anything else. Sit outside if you need to take a breather.
				t pinstripe's memories of you have been reset, you're now free to enjoy her however you please! 
			`);
			setTrust('pinstripe', 1);
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "incubusPresident": {
			writeHTML(`
				t You and incubusF head to the student council room at the university. Surprisingly nobody seems to pay notice to you and her together. You knock on the door, and presidentF answers.
				sp president; Hello? Oh, it's-
				t She freezes as she and incubusF lock eyes. incubusF's eyes glow a deep red just for a moment, before she breaks eye contact and walks away.
				sp president; I... I admit defeat. I've clearly misjudged your methods Thank you for your lesson, playerF. Please excuse me.
				t With that presidentF closes the door, though you can still make out parts of her conversation.
				sp treasurer; What'd *he say?
				sp president; He used to have a family, and a dog, but aparently hypnosis... recently they... I'm sorry, it's making me emotional to think about.
				t Instead of continuing eavesdropping bits and pieces you rush to catch up with incubusF.
				sp incubus; Hey, heads up, she'll still probably be suspicious about you. I just gave her a really convincing story to mull over. She'll probably agree to a 'counseling' session with you later, but if she's smart she'll still be trying to out you as a fraud. Now, lemme just...
				t She opens her game on her phone, eager to spend the money she just earned asap. The two of you walk back to the shopping district in relative silence despite any attempts you make to spark conversation.
			`);
			passTime();
			setTrust('president', 4);
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "kconditioner": {
			writeHTML(`
				t She shrugs with a tired look on her face.
				incubus Of course, who else but you would need something like this.
				t She pulls a drawer open to pull your order out pushing aside a dozen other hellish wares.
				player ???Isn???t it a little <i>tiny?</i>
				incubus Be grateful there's any at all, it was damn near impossible to find the correct recipe. Nobody's made a single vial of this in last 1700 years.
				player Glad you could find the recipe then.
				t She pulls her phone back up.
				incubus Trust me, I wouldn???t have wasted a night if the order wasn???t from above.
				player Above? 
				incubus Your friend, anyway you better drink it right away, doesn???t have a long shelf-life anyway.
				t You nod and drink it all at once.
				player It tastes like??? <i>Nothing..?</i>
				incubus Were you expecting a strawberry flavor or what? Anyway, if you don???t have anything else to buy, scram.
			`);
			addFlag("intern", "kconditioner");
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "cardTest": {
			var game = {index: "testBattle", requirements: "?location shoppingDistrict;", deck: ["Lonely Night", "Overconfidence", "Annoyance", "Lovely Sample", "incubusF",],
				quotes: {
					start: "sp incubus Alright, I guess I could go over the basics with you again.",
					victory: "",
					defeat: "",
					winning: "",
					losing: "",
				},
			}
			initializeBoard()
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "incubuscreampie", name: "Creampie for sale"},
	{index: "incubusblowjob", name: "Blowjob for sale"},
	{index: "incubusrimjob", name: "Rimjob for sale"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "incubuscreampie": {
			writeHTML(`
				t Despite the lewd message advertising free creampie service, incubusF doesn't seem too enthusiastic as she finally puts her phone away.
				sp incubus; Going for the VIP privileges, huh? You got anything left on your bucket list?
				sp player; What's that supposed to mean?
				sp incubus; Nothing, just a bad joke.
				...
				t You're led to a back room, a mostly-unused bed is here. There's the sound of something unclasping as incubusF tosses her skirt aside and leans into your chest before taking a deep breath.
				sp player; Eager, huh?
				sp incubus; Shut up, I hate talkers... *huff*<br>Just let me get wet... So we can start...
				t She takes a deep breath, holding it in her lungs. As she exhales her scowl has faded. She leans in even closer for another deep inhale as her nose brushes against your skin. 
				t Her eyes unfocus as a sweet smell fills the room. Seemingly satisfied she lays on the bed and waves her ass at you, lifting her cardigan to show you she's wearing nothing underneath.
				sp player; I figured a girl with a nose as sensitive as yours would want missionary or something. 
				sp incubus; Ugh, no... I need to have some self control, right?
				t You rub a finger along her pussy, she's wet enough that there's a string of clear fluid connecting your finger to her lower lips now. 
				t It's got a flowery scent, maybe like orchids or lilies. It's strange, but it's almost like you can feel your lungs tingle as you inhale, and your heartrate speeds up a little. Blood is rushing through your body, and your cheeks feel hot. 
				sp incubus; Don't hold back, I'll stop you after your first round so you don't hurt yourself, just go ahe-
				im images/incubus/creampie1.jpg
				t She bites her lip to hold back a sudden moan, she's sopping wet so you meet no resistance inside her.
				sp incubus; Fff... Fuck, slow down... Pace yourself so I can finish too, alr-
				im images/incubus/creampie2.jpg
				t Something about her body is affecting you in a strange way. Your heart is racing, you feel like a beast in a rut.
				t incubusF is at a loss for words, deciding to give herself in and let herself be used.
				t You slide her cardigan up further, copping a feel of her perky tits, before firmly grasping her hips again. The sight of her ass against your hips, the bizarre scent of hers, all of it is messing with your head. Your vision blurs over as you start to cum.
				im images/incubus/creampie3.jpg
				sp incubus; Y-you finally calming down? Almost at your limit, huh? Even an animal needs-
				im images/incubus/creampie4.jpg
				t incubusF goes stiff beneath you. Something about your cum pushing, if not completely throwing her over the edge.
				t After the full-body jolt passes through her, she can finally catch her breath.
				sp incubus; Hah~<br>... Hell's bells, you're still...? C-can you go again?
				t Her voice is sheepish and partially muffled by the blanket, but her body speaks for her. Something about her juices is seriously setting you off, and combined with the way she sways her hips while you're still inside her you're already good for another round.
				...
				im images/incubus/creampie5.jpg
				t You cum again, and even though this time she's ready for your cum it still hits her like a ton of bricks. Her eyes roll back and her eyelids flutter, the sweet scent in the room grows tenfold as her muscles tense and a small stream of squirt soaks the bedding beneath you, then another, and another.
				t She babbles something as her eyes close. Fatigue overtakes her. Whatever she's been doing to your body is still ongoing, your heart is still racing, but exhaustion is starting to take its toll on you and you can't keep yourself upright much longer. At least you manage to fall to your side so you don't fall asleep on top of her.
				...
				t You wake up in the back room, still weary and sticky. incubusF is gone, but at least she left you a towel. There's a little card on top, reading 'congrats on surviving and being a VIP'.
			`);
			break;
		}
		case "incubusblowjob": {
			writeHTML(`
				sp incubus; A blowjob then? Or would you prefer a suckjob, or maybe a classical knob gobbling?
				sp player; Is there a difference?
				sp incubus; Of course. A girl of my... Circumstances... Needs to know everything there is about how best to use her mouth.
				...
				im images/incubus/blow1.jpg
				t You relax yourself on the edge of a chair, incubusF doesn't take the time to get herself ready on your scent this time. 
				t Both her hands on the floor she has the head of your cock in her mouth, running her long, flexible tongue around it.
				im images/incubus/blow2.jpg
				t She looks up at you, as if she's carefully watching for every small twitch or groan of pleasure you make.
				t Her mouth is incredible, but it almost feels like torture that she isn't going any deeper, until...
				im images/incubus/blow3.jpg
				t She starts to show off as her eyes narrow, her agile tongue slipping from her lips and continuing it's spiral dance for your pleasure. You feel yourself start to cum and she takes it without missing a beat. As you hear her swallow each rope of your load, a sweet scent blankets the room.
				im images/incubus/blow4.jpg
				sp incubus; Pwahhh~
				sp player; Holy crap... You're pretty focused when you've got the pacifier you need, huh?
				sp incubus; Yeah...<br>W-wait, fuck, shut up!
				t She starts snapping back to her senses as yours start to fuzz over a little. Despite having just cum, you still feel pretty pent up.
				t But even as she smacks her lips, savoring the taste of her latest meal, she ushers you out. It isn't clear why she's got the one per customer rule, but she intends to stick to it.
			`);
			break;
		}
		case "incubusrimjob": {
			writeHTML(`
				t As you point to the advertised service, incubusF looks up from her game, then shoots you a glare.
				sp incubus; Ugh, you're a degenerate to your core huh? Fine, cmon.
				t Despite how put-off she seems, she's hurrying you along a lot faster than she does for her other services. She almost forgets to get the money.
				...
				t On your hands and knees with incubusF behind you, the situation devolved almost immediately.
				t Someone with a sensitive nose, who can get off on scent alone...
				im images/incubus/rim1.jpg
				sp incubus; Ahhh~<br>It's frying my fucking brain~!
				t Her inhibitions have long since been left behind. You get the impression that if you tried to get out some degrading dirty talk she wouldn't even hear it, or she'd just happily agree with whatever you say so she can get back to rimming you.
				im images/incubus/rim2.jpg
				t It's clear that no concept of what is or isn't taboo will stop her. Her saliva is thick on your asshole, enough of it dribbling down to be lubrication for her milking handjob.
				t She shifts between taking deep breaths and holding your scent in her lungs, and lifting her lips to your asshole to push her flexible tongue inside.
				im images/incubus/rim4.jpg
				sp incubus; Oh ghhhd!
				t Her eyes roll back and she grits her teeth, the sweet smell filling the room grows more intense and she strokes you even faster to hold back from stroking her own cunt, trying to keep herself on edge for as long as possible.
				t The sour whore from before is gone, all that's left is a girl with a fetish for making out with your asshole. Her saliva is finally pushing you over the edge, and she knows it. Her frenching and stroking are growing more feverish as you feel yourself start to cum.
				im images/incubus/rim5.jpg
				t She moans into your ass as the sudden mix of jizz splurting on her hand causes the smell of thick cum to fill her brain as well. She moans, squeals, and squirms on the spot as she matches your orgasm completely hands-free.
				im images/incubus/rim6.jpg
				sp incubus; Mmmmph~! 
				t Splurt, splurt, splurt. Her palm is rubbing the head of your cock, both to ensure you spill every last sperm cell, and to catch everything she can.
				t She takes one last long, slow stroke while her tongue is still greedily rubbing your prostate, before she uses both hands to hold as much unspilled jizz as she can. She pulls her tongue free in a long exagerated slurping motion so that she can lift her messy hands to her mouth.
				t Gulp, gulp, gulp. A depraved look on her face as she chugs a handfull of jizz. The very last mouthful is held for a moment to savor the taste and the depravity of the situation. Once she's swallowed it's only a moment before her tongue is out again to lick her hands clean.
				t You lie on the bed, needing to take a moment to catch your breath.
				...
				t Like before once you're done with your breather you're ushered out. Her previous attitude slowly returning as the sexual hunger fades, you leave so that incubusF can close up shop and shower to calm yourself down. 
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
	addSkill("corruption", 1);
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
	{index: "reward", requirements: "?flag incubus blowjob; ?flag incubus rimjob;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/incubus/reward.jpg", "Art by Gujira");
			writePhoneSpeech("incubus", "", "Not all characters have dedicated endings, incubusF is one of them. Still, you've completed as much of incubusF as possible. Thanks for the gacha funds~");
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

function sale(encounter, cost, image, text) {
	var finalPrice = cost - data.player.incubusDiscount;
	var finalPriceText = "$" + finalPrice;
	if (finalPrice < 1) {
		finalPrice = 0;
		finalPriceText = "Free!";
	}
	//alert(finalPrice);
	if (data.player.money >= finalPrice) {
	document.getElementById('output').innerHTML += `
		<div class = "shopItem" onclick = "saleTransaction('`+encounter+`', `+finalPrice+`)">
			<p class = "shopDesc">`+replaceCodenames(text)+`</p>
			<p class = "shopPrice">`+finalPriceText+`</p>
			<img class ="shopImage" src="`+image+`">
		</div>
		<br>
	`;
	}
	else {
		document.getElementById('output').innerHTML += `
			<div class = "shopItem">
				<p class = "shopDesc">`+replaceCodenames(text)+` - <b>TOO EXPENSIVE!</b></p>
				<p class = "shopPrice">$`+finalPrice+`</p>
				<img class ="shopImage" src="`+image+`">
			</div>
			<br>
		`;
	}
}

function saleTransaction(encounter, cost) {
	data.player.money -= cost;
	flashMoney();
	updateMenu();
	if (checkFlag("incubus", encounter) == false) {
		addFlag("incubus", encounter);
	}
	writeEncounter(encounter);
}

switch (requestType) {
	case "test": {
			console.info("Incubus.js now responding");
			//addEncounter("incubus", "statusQuo", "Enter Midnight Bliss")
			totalCharactersLoaded += 1;
		break;
	}
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

var newCards = [
	{name: "Lonely Night", image: "images/mom/2-2.jpg", stats: [3, 3, 3, 3], archetypes: "girl,enoshima,", rarity: 1},
	{name: "Overconfident", image: "images/purple/1-1.jpg", stats: [3, 3, 3, 3], archetypes: "girl,oreteki,", rarity: 1},
	{name: "Annoyance", image: "images/tomgirl/1-2.jpg", stats: [3, 3, 3, 3], archetypes: "boy,nagi,", rarity: 1},
	{name: "Lovely Sample", image: "images/incubus/blow1.jpg", stats: [3, 3, 3, 3], archetypes: "demon,girl,gujira", rarity: 1},
	{name: "incubusF", image: "images/incubus/incubusT.png", stats: [8, 8, 3, 3], archetypes: "demon,girl,gujira", rarity: 2},
]

function loadNewCards() {
	
}

var challengeArray = [
	{index: "testBattle", requirements: "?location shoppingDistrict;", deck: ["Lonely Night", "Overconfidence", "Annoyance", "Lovely Sample", "incubusF",],
	quotes: {
		start: "",
		victory: "",
		defeat: "",
		winning: "",
		losing: "",
	},},
]

function loadChallenges() {
	for (number = 0; number < challengeArray.length; number++) { //start going through challenge array
		var finalResult = true;
		//console.log("Now examining encounter entry "+encounterArray[number].index+encounterArray[number].requirements);
		var requirements = checkRequirements(encounterArray[number].requirements);
		//console.log(requirements);
		if (requirements != true && data.player.location != "map") {
			finalResult = false;
		}
		if (finalResult == true) {
			//console.log("Final result for "+encounterArray[number].index+" true, location is "+finalLocation);
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
			//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!final result for "+encounterArray[number].index+" false, location is "+finalLocation);
		}
	}
}