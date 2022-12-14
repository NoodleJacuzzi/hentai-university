var character = {index: "housekeep", fName: "Anri", lName: "Ramona", trust: 0, encountered: false, textEvent: "", met: true, color: "#df5877", author: "CryptoGreek", artist: "Kinta no Mousou"};

var logbook = {
	index: "housekeep", 
	desc: "An incredibly feminine maid (male) that can look a bit drowsy at times. He works for Maid in Heaven Cleaning Services, getting paid to dress up as a cute maid and clean both houses and house-owners.",
	body: "He has a very feminine frame, looking like a girl at nearly every given moment. The makeup he's usually wearing adds to this look.",
	clothes: "He wears a fetish-maid outfit clearly designed to entice others with his short skirt, bare shoulders, and almost-exposed chest.",
	home: "The flier claims that he comes from 'The Maid Dimension', where perfect maids are born, and that he'll come to the house of whoever calls for his services.",
	tags: "Maids, Crossdressing",
	artist: "Kinta no Mousou<br>Original Image Set: Ore no Otokonoko Maid-san",
	author: "CryptoGreek",
};

var newItems = [
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "housekeep0", name: "There's a flier hanging up near you.", location: 'street', time: "MorningEvening", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both", altName: "Loose Flier", altImage: "images/housekeep/0-1.jpg",},
	{index: "housekeep1", name: "Order some servicing", location: 'playerHouse', time: "Evening", itemReq: "Flier", trustMin: -5, trustMax: -5, type: "tab", top: 0, left: 0, day: "both", altName: "Maid Services", altImage: "images/housekeep/0-1.jpg",},
	{index: "housekeep2", name: "Call on Anri for some service ($15)", location: 'playerHouse', time: "Evening", itemReq: "", trustMin: 40, trustMax: 42, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	{index: "housekeep3", name: "Call on Anri for some service", location: 'playerHouse', time: "Evening", itemReq: "", trustMin: 43, trustMax: 50, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
	//{index: "housekeep3", name: "Call on Anri for some service", location: 'playerHouse', time: "Evening", itemReq: "", trustMin: 45, trustMax: 50, type: "tab", top: 0, left: 0, day: "both", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "housekeep0": {
			setTrust("housekeep",-5);
			for(i = 0; i < data.story.length; i++)
  				if(data.story[i].index == "housekeep")
    				data.story[i].encountered = false;
			writeText("You spotted a flier hung up on a post.");
			writeBig("images/housekeep/0-1.jpg", "Art by Kinta no Mousou");
			writeSpeech("Flier","none","Are you in need of some cleaning? At Maid in Heaven Cleaning Services, we bring you only the best maids(M) to help you make sure that all your <i>favorite</i> things get nice and clean, thanks to the help from the greatest maids(M) from the Maid Dimension*!");
			writeSpeech("Flier","none","An hour of an adorable maid's time can be yours at the low price of just $15 thanks to our special start-of-business sale! Not only that, but first-time customers get the first hour free!");
			writeText("Looking a little bit lower, you can see some fine-print.");
			writeSpeech("Flier","none"," <font size='-2'> *Maids do not actually come from a maid dimension; customers may only order one hour of time each night; and the company and the maid reserve the right to refuse service should the maid feel the client dangerous, belligerent, or 'no fun'.</font>");
			writeSpeech("player", "", "Err... No fun...? Sounds like it could be interesting...");
			writeText("If you're interested, you could take the flier with you. You'd be able to call the number when you're home...");
			writeFunction("writeEncounter('housekeep0-1')", "Take the flier");
			writeFunction("changeLocation(data.player.location)", "Ignore it");
			break;
		}
		case "housekeep0-1" : {
			if(checkItem("Flier") != true)
				addItem("Flier",true,"images/housekeep/0-1.jpg");
			writeText("You take the flier off of the post, folding it neatly and putting it in your pocket. It looks like their operating hours are in the evening...");
			writeSpeech("player","","Looks like I could probably call them tonight, if I wanted...");
			writeFunction("changeLocation(data.player.location)", "Continue going about your day");
			break;
		}
		case "housekeep1": {
			passTime();
			removeItem("Flier");
			setTrust("housekeep",40);
			writeText("Sitting down on your bed and pulling out the flier, you put the number into your phone. It takes a second of ringing, but it goes through after a moment.");
			writeSpeech("housekeep","none","HIDDENThis is Maid in Heaven Cleaning Services - How may we help you?");
			writeSpeech("player","","I found this flier, and am pretty interested in the kinds of services you're offering. Is this a scheduling sort of deal, or just call-in and drop-in?");
			writeText("You can hear the phone shifting around on the other end, a tinge of excitement showing in the woman's voice.");
			writeSpeech("housekeep","none","HIDDENCall-in is fine; we can send someone pretty quick. As for rates, the flier means you're eligible for our low starting-rates and the first-time discount! If you can just give us your name and address...?");
			writeSpeech("player","","Yeah, it's playerF, and my place is...");
			writeText("After giving your address, you hear a hum of approval from the other end of the line.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","none","HIDDENAlright, you should expect someone to knock at your door within the next twenty minutes. I hope you have a wonderful night, Mister playerF~");
			else
				writeSpeech("housekeep","none","HIDDENAlright, you should expect someone to knock at your door within the next twenty minutes. I hope you have a wonderful night, Miss playerF~");
			writeText("The woman on the other end hangs up, leaving you to fiddle with your phone while you wait...");
			writeText("...");
			writeText("Your email checked and dank memes browsed, you stretch out your arms just as you hear it.");
			writeText("<i><b>KNOCK KNOCK</b></i>");
			writeText("Standing up, you open the door to check...");
			writeText("Based on the outfit, it's pretty obvious that it's your maid, so you gesture for them to come in quickly before your neighbors see anything.");
			writeSpeech("housekeep","","HIDDENYou're playerF, then?");
			writeSpeech("player","","Yeah, that's me. And your name is...?");
			writeText("He smiles gently, kneeling down in front of you.");
			writeBig("images/housekeep/1-1.jpg","Art by Kinta no Mousou");
			writeSpeech("housekeep","","I'm housekeepF housekeepL, and I will be your maid for the evening. If there's anything you'd like for me to do, you need only ask~");
			writeFunction("writeEncounter('housekeep1-1')", "Ask him about himself");
			writeFunction("writeEncounter('housekeepClean')", "A maid's job is to clean");
			writeFunction("writeEncounter('housekeep1-2')", "Request <i>sexual</i> cleaning");
			break;
		}
		case "housekeep1-1" : {
			if(checkFlag("housekeep","Asked1") != true)
				addFlag("housekeep","Asked1");
			writeSpeech("player","","Well, to start, I'd like to know a bit about you. The flier had an M in parantheses, so that means you're...?");
			writeSpeech("housekeep","","I identify as a maid, and I have a passion for serving others.");
			writeText("A small smile floats across housekeepF's face.");
			writeSpeech("housekeep","","That is to say, for helping people. It grants me a certain sense of fulfillment to make things easier for others.");
			writeSpeech("housekeep","","...And I love the way the outfit feels on my skin.");
			writeSpeech("player","","Well, you're not one to beat around the bush, are you?");
			writeSpeech("housekeep","","No, I prefer to keep myself shaved down there.");
			writeSpeech("player","","That's not what I-");
			writeText("You stop, seeing his smile get just a little bit more smug.");
			writeSpeech("housekeep","","Sorry, I couldn't help myself. You just seemed like you'd be <i>very</i> fun to tease~");
			writeText("He folds his hands in front of him, smiling gently.");
			writeSpeech("housekeep","","Now, did you have any orders for me, playerSir? Whatever they are, I promise to do my best to fulfill them~");
			if(checkFlag("housekeep","Clean") != true)
				writeFunction("writeEncounter('housekeepClean')", "A maid's job is to clean");
			else
				writeFunction("writeEncounter('housekeepClean')", "Have him clean up again");
			if(checkFlag("housekeep","Blowjob") != true)
				writeFunction("writeEncounter('housekeep1-2')", "Request <i>sexual</i> cleaning");
			else
				writeFunction("writeEncounter('housekeepSexMenu')", "Request some <i>service</i>");
			break;
		}
		case "housekeep1-2" : {
			if(checkFlag("housekeep","Blowjob") != true){
				raiseTrust("housekeep",1);
				addFlag("housekeep","Blowjob");
				writeEvent("housekeep1");
				writeFunction("changeLocation(data.player.location)", "Get ready to sleep");
			}
			else{
				writeSpecial("According to the code, you triggered the blowjob scene a second time, which shouldn't be possible.");
				writeEvent("housekeep1");
				writeFunction("changeLocation(data.player.location)", "Get ready to sleep");
			}
			break;
		}
		case "housekeep2" : {
			if(data.player.money < 15 && checkFlag('housekeep','Hypno') != true){
				writeText("You reach for the phone to call, but a phantom sensation stops you.");
				writeText("Unbidden, your mind goes to your wallet, and you remember that you don't actually have the $15 to pay for an hour...");
				writeText("Maybe next time.");
				writeFunction("changeLocation(data.player.location)", "Finish");
				break;
			}
			if(checkFlag('housekeep','Hypno') != true)
				data.player.money -= 15;
			passTime();
			if(checkFlag("housekeep","Meet2") != true){
				addFlag("housekeep","Meet2");
				writeText("You call Maid in Heaven again, requesting housekeepF. Of course, now that you've actually met him, you're able to recognize the voice on the other end...");
				writeSpeech("housekeep","","Of course! I'll be over shortly, playerSir!");
				writeSpeech("player","","Ah, you run the phones?");
				writeSpeech("housekeep","","I do, yes. I like to be able to hear the voice of the person requesting me~! Phones are really cool like that.");
				writeSpeech("player","","Huh... Neat.");
				writeSpeech("housekeep","","Very! I'll be there soon, so look forward to it!");
				writeText("He ends the call, leaving you to wait. Not for very long, though.");
				writeText("Just like last time, housekeepF arrives pretty quickly, but he doesn't look winded at all.");
				writeText("Maybe his workplace is actually really close to here...?");
				writeText("Either way, he gives a wide smile and gives a polite little curtsy as he steps into the room.");
			}
			else{
				writeText("You call Maid in Heaven and request housekeepF again. He seems pretty happy to hear you call.");
				writeSpeech("housekeep","","I'll be right over!");
				writeText("Just like last time, he does arrive quickly, a relaxed smile across his face as he gives a small, polite curtsy again.");
			}
			if(checkTrust('succubus') >= 60 && checkFlag('housekeep','Demon') != true){
				addFlag('housekeep','Demon');
				writeText("His nose wrinkles for a moment as he straightens up, looking around.");
				writeSpeech("housekeep","","I have a few people I can call if you need help with your... bat problem.");
				writeSpeech("player","","My what?<br><i>Could he mean...?</i>");
				writeText("housekeepF's expression relaxes.");
				writeSpeech("housekeep","","So it isn't a problem. Ignore that, I merely misunderstood.");
				writeText("He gives another small curtsy, smiling beautifically up at you as he does.");
			}
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Was there anything specific you wanted me to do, *Master?");
			else
				writeSpeech("housekeep","","Was there anything specific you wanted for me to do, Mistress?");
			if(checkFlag("housekeep","Asked")){
				if(checkFlag("housekeep","Asked4") && checkFlag("haze","Heaven"))
					writeFunction("writeEncounter('housekeepChatHeaven')", "Ask him about demons and angels")
				else if(checkFlag("housekeep","Asked3") && checkFlag("housekeep","bikini"))
					writeFunction("writeEncounter('housekeepChat3')", "Ask him about the custom lube from before");
				else if(checkFlag("housekeep","Asked2"))
					writeFunction("writeEncounter('housekeepChat2')", "Ask him about Maid in Heaven");
				else if(checkFlag("housekeep","Asked1"))
					writeFunction("writeEncounter('housekeepChat1')", "Ask him about how he became a maid");
			}
			else
				writeFunction("writeEncounter('housekeep1-1')", "Ask him about himself");

			if(checkFlag("housekeep","Clean")){
				if(checkFlag("housekeep","Clean2"))
					console.log("check this real quick");
				else if(checkFlag("housekeep","Clean1"))
					writeFunction("writeEncounter('housekeepClean')", "Have him clean up again");
			}
			else
				writeFunction("writeEncounter('housekeepClean')", "A maid's job is to clean");
			if(checkFlag("housekeep","Blowjob") != true)
				writeFunction("writeEncounter('housekeep1-2')", "Request <i>sexual</i> cleaning");
			else
				writeFunction("writeEncounter('housekeepSexMenu')", "Request some <i>service</i>");
			if(checkTrust('housekeep') >= 45)
				writeFunction("writeEncounter('housekeepEnding')", "Tell housekeepF you want him to be your live-in maid", "blue");
			break;
		}
		case "housekeep3" : {
			writeText("You call up Maid in Heaven again, with housekeepF just as quick to answer as before.");
			writeSpeech("housekeep","","I'll be over shortly, then~!");
			if(checkFlag('housekeep','bikini') || checkFlag('housekeep','bunnyOutfit')){
				if(checkFlag('housekeep','bunnyOutfit') && checkFlag('housekeep','bikini')){
					// writeText("You could probably try hypnotizing him again, since he's had a bit of time to relax more around you.");
					// writeFunction("writeEncounter('housekeep4')", "Call him over for another hypnosis session");
				}
				else{
					writeText("Before he hangs up, though, you could request another one of those outfits housekeepF mentioned...");
					if(!checkFlag('housekeep','bunnyOutfit'))
						writeFunction("writeEncounter('housekeep3A')", "Request a bunny-girl outfit");
					if(!checkFlag('housekeep','bikini'))
						writeFunction("writeEncounter('housekeep3B')", "Request a skimpy swimsuit");
				}
			}
			else{
				writeText("Before he hangs up, though, you do have an opportunity to request one of those outfits housekeepF mentioned...");
				writeFunction("writeEncounter('housekeep3A')", "Request a bunny-girl outfit");
				writeFunction("writeEncounter('housekeep3B')", "Request a skimpy swimsuit");
			}
			writeFunction("writeEncounter('housekeep3C')", "Have him come over like normal");
			break;
		}
		case "housekeep3A" : {
			passTime();
			if(checkTrust('housekeep') < 45)
				raiseTrust('housekeep',1);
			if(!checkFlag("housekeep","bunnyOutfit"))
				addFlag('housekeep','bunnyOutfit');
			writeSpeech("player","","Actually, I was thinking I might \"request\" an outfit. I think you mentioned a bunny-girl outfit before?");
			writeSpeech("housekeep","","...!");
			writeText("You can hear the soft, excited pick-up in his breathing.");
			writeSpeech("housekeep","","...I'll be over with one in just ten minutes~");
			writeText("...");
			writeText("When housekeepF does arrive, it's wearing a rather nice-looking coat that covers up most of him... though you can see the color of his tights around his calves where the coat stops.");
			writeText("Once the door is shut and locked, he wastes no time in opening and shrugging off the coat, revealing the full outfit to you as he does a little pose.");
			writeBig("images/housekeep/bunny-1.jpg","Art by Kinta no Mousou");
			writeSpeech("housekeep","","How does it look, *Master~?");
			writeText("His hand gently traces his tights along his hips, the subtle movement only highlighting the fact that he clearly has no panties on underneath.");
			writeSpeech("player","","I'll hold off from judging the service until we're all finished.<br>...But you've definitely got my expectations pretty high.");
			writeText("housekeepF's expression brightens up more, his blush deepening.");
			writeSpeech("housekeep","","Well, in that case, why don't we get right to it? How would you like to start~?");
			writeFunction("writeEncounter('housekeep3A-1')", "Play with his chest first");
			writeFunction("writeEncounter('housekeep3A-2')", "Get right to the sex");
			break;
		}
		case "housekeep3A-1" : {
			writeEvent("housekeep4");
			document.getElementById('output').innerHTML = '';
			writeHTML(`
				sp player; How about we start with a bit of foreplay, and you expose that cute chest of yours?
				sp housekeep; Gladly~
				t Saying that, housekeepF slowly brings his hands to his shoulders with a soft smile, hooking the bands with his thumbs and teasingly pulling them along his arms.
				t A few short moments later, his soft, barely-pink nipples are revealed as he shudders pleasurably under your gaze.
				im bunny-2.jpg
				sp housekeep; How is this, *Master?
				sp player; It's exactly what I was looking to see.
				t You take a step forward, bringing a finger forward to gently toy with his nipple, first drawing a small circle around it with the pad of your finger before softly squeezing it as it starts to harden a bit.
				sp player; I can see that I'm not the only one looking forward to this.
				t housekeepF nods excitedly, smiling wide.
				sp housekeep; I've never worn an outfit like this before, so I'm quite excited to see how we both enjoy it~
				sp player; Well, I'm enjoying it plenty thus far...
				sp housekeep; That's wonder- <b><i>O-Oh~!</i></b>
				im bunny-3.jpg
				t His breathing hitches significantly as your tongue drags along his nipple, teasing the areola with the tip before lapping at his chest firmly.
				t Each movement of your tongue seems to elicit a reaction from housekeepF, from a satisfied smile of pleasure, to balling his fists tightly at his sides, to gasping sharply in unrestrained ecstasy.
				sp player; Sensitive, aren't you? Just like a good slutty maid should be.
				t You can see his cock twitch under the cloth as you say that, housekeepF moaning from the praise alone.
				sp housekeep; T-Thank you, *Master~!
				t You gently bring your finger to the bulge in his outfit, teasingly making a small circle on the surface to see him squirm for a moment... before resuming your lustful attack on his chest.
				im bunny-4.jpg
				t His moans turn into sharp cries of bliss as you tease him more, your hands now grasping at his ass and kneading it between your fingers as you suckle on his chest, his body shuddering against you.
				t housekeepF's bulge grows larger as he starts rolling his hips seemingly unconsciously, rubbing his cock against the inside of the outfit as the pleasure overtakes him.
				t However, you don't exactly intend on letting him finish before you even get to the night's main event.
				sp housekeep; H-Hah?
				t There's a momentary confusion to housekeepF's voice as you pull away, stopping all stimulation at once... until you grab his hips and start leading him to the ground.
				t A clear sparkle of excitement overtakes his expression as he brings his legs up for you, laying on his back.
			`);
			writeFunction("writeEncounter('housekeep3A-2')", "Move on to the sex");
			break;
		}
		case "housekeep3A-2" : {
			writeEvent("housekeep4");
			document.getElementById('output').innerHTML = '';
			writeHTML(`
				t As housekeepF's legs go up, you slide the leotard-section of the bunny-outfit to the side, revealing both his cock and his hole. The tights have a big open seam along the center for easy access...
				sp player; Going for a specialty outfit, I see.
				sp housekeep; Of course~ Only the best for my *Master, after all!
				t His face flushes slightly as he says that, which only gets deeper as you press your cockhead against his exposed hole.
				sp player; A devoted maid like you deserves a reward, don't you think?
				t You start gently pressing against him, but not pushing in completely yet.
				sp player; Thankfully, I think I have the perfect reward for such a slutty little maid in mind right now...
				t You use your hand to angle your shaft, just barely pushing in now.
				sp player; ...Using your hole as a <i>toy</i> to get off with.
				t housekeepF's excitement peaks as you say that, timed perfectly with thrusting your cock into him.
				sp housekeep; Y-Yes please~ Use this slutty maid's hole to cum lots and lots~!
				im bunny-5.jpg
				sp player; There we go... Nice and tight, as always.
				t housekeepF's ass squeezes around you, his dick bobbing slightly as the praise turns him on even more.
				sp housekeep; T-Thank you~
				sp player; You're welcome... Now let's see how this bunny-hole handles being used.
				t Grasping his ankle tightly and holding it high, you start thrusting into him faster, each wet sound of your hips slapping against his ass ringing out amongst his moans.
				sp housekeep; Y-Yes, use me more~
				im bunny-6.jpg
				t Even as you pick up the pace, the look of content satisfaction doesn't leave housekeepF's face, even as his throbbing dick betrays how good his body is feeling now.
				t Moan after moan spills out of his mouth as you thrust in, shifting your hips a bit to grind against his prostate with each push and pull, beads of precum starting to dribble down from his cockhead.
				t Your free hand moves to toy with his body as you thrust in, squeezing his thigh and watching him squirm as you do. Your hand goes up to his chest too, tweaking his sensitive nipples as you trace small lines across his exposed skin.
				sp housekeep; H-Haah~!
				t He shudders the most as your thumb slides underneath the outfit's little collar, gently tracing his collarbone before moving back to his chest.
				t The sensation of your soft, gently fingers gliding across his skin, mixed with the rough, raw pleasure of getting fucked like a sextoy, has housekeep shuddering bodily beneath you, his cock bobbing faster and faster as his climax gets closer.
				sp player; You're getting close, aren't you?
				sp housekeep; Yes...! It just feels so good~!
				t At that, you pull your hand back, instead using to grasp his other ankle.
				sp player; I'm sure you won't mind, then, if I go ahead and speed up a bit. It'd be a shame if this slutty maid finished before his *Master, don't you think? 
				t housekeepF nods sharply. With a bright, genuine smile, he grasps his thigh firmly and cheerfully begs,
				sp housekeep; Please, use this maid's hole as <i>rough</i> and as <i><b>fast</b></i> as you like, and shoot all your cum deep inside~!
				t At that, you speed up as much as you can, no longer focusing on pleasing housekeepF. Instead, you roughly grasp his calves and pull him into you with each thrust, heavy gasps of pleasure spilling out of your slutty maid as you <b>slam</b> your hips against his.
				t You maintain that speed and roughness for some time, watching the joyous squirming beneath you as you pound into him and get closer to the edge with each thrust.
				t It isn't much longer before you can feel it.
				sp player; There we go... I'm getting close.
				t That happy spark in housekeepF's eyes only grows.
				sp housekeep; T-That's wonderful~ Please, f- <i><b>Hah~!</b></i> Fill me up, make me cum from <i>feeling you spurting inside me~!</i>
				t With a deep, guttural growl, you slam your hips forward one more time as you start to cum. 
				im bunny-7.jpg
				t Both your cock and his start spurting at the same time, ropes of cum shooting into his ass as his quivers and spills out across his chest.
				sp housekeep; Thank you so much, *Master~!
				t That same blissful expression sits on housekeepF's face as you cum in his ass a bit more, before you've finally emptied out inside of him.
				t When you're done, you pull yourself out slowly, relishing the gentle moan of pleasure that he lets out when you pop out of his cum-filled, well-fucked ass.
				sp player; Thank you, housekeepF. I think I'll be rating <i>this</i> service quite highly.
				t He smiles wide, nodding as he relaxes into the blanket.
				sp housekeep; I'll keep the outfit with me, then, so it'll be available for you~
				t After that, you two rested for a few minutes, before finally getting around to cleaning up the mess (housekeepF insisted on handling it, of course), and finishing up for the evening.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "housekeep3A-1repeat" : {
			document.getElementById('output').innerHTML = '';
			writeHTML(`
				t You gesture simply to his chest, which he quickly moves to undo the strap on. A few seconds later, and...
				im bunny-2.jpg
				t His hands gently grasp his chest, his thumbs brushing over his nipples gently as his breathing picks up.
				sp housekeep; How's this~?
				sp player; Perfect.
				t Stepping in, you move his hands to his sides as you grasp and play with his chest yourself, listening to his gentle moans.
				sp player; Sensitive as ever, hm?
				sp housekeep; Y-Yes...!
				im bunny-3.jpg
				sp housekeep; H-Hah~!
				t His voice gets gradually louder as you start teasing his nipple with your tongue, your hands moving to knead and tease his ass while you kiss his chest.
				t He exhales sharply each time your tongue flicks out, and a moan each time you bring your lips around his nipple.
				im bunny-4.jpg
				t It isn't long before you can see he's clearly throbbing beneath the cloth covering his dick, and you shift your body a bit to help guide housekeepF down to the ground.
			`);
			writeFunction("writeEncounter('housekeep3A-2repeat')", "Move on to the sex");
			break;
		}
		case "housekeep3A-2repeat" : {
			document.getElementById('output').innerHTML = '';
			writeHTML(`
				t Once you have housekeepF on the ground, his hands pulling his legs up to teasingly give you full access, you don't hesitate before pushing your hips forward.
				im bunny-5.jpg
				sp housekeep; Mm~ I'm not the only one that's excited~!
				sp player; How can I not be with a view like this?
				t housekeepF shudders under the praise, tightening around you.
				t You swing your hips forward even faster, the pleased look on housekeepF's face driving you to fuck him until you can bring him to the edge.
				t And of course, given you know what his biggest weakness is...
				sp player; Your hole is incredible, housekeepF.
				t His dick bobs slightly as you praise him.
				sp housekeep; O-Oh, thank you~
				im bunny-6.jpg
				t Your hands move to his wrists, pinning him down as you lean into him.
				sp player; You're a truly great <i>slutty maid,</i> you know that~?
				t His face flushes more as he bites his lip.
				sp player; ...But you're an even better slutty little <i>fuck-bunny.</i>
				t You accentuate your words with a heavy thrust, staying balls-deep for a moment as housekeepF lets out a shuddering gasp.
				t Leaning forward even more, you bring your lips to his ear and toy with it, nibbling on his earlobe as you thrust into him.
				sp player; But I bet you could put it even better, couldn't you?
				t You lean back up, focusing on thrusting into him quickly now, aiming for his prostate with each push and pull.
				sp player; Go ahead and tell me exactly what you are, and I'll <i>stop holding back.</i>
				t He doesn't even hesitate.
				sp housekeep; I'm your slutty maid~! A little fuck-bunny <i>bitch</i> for you to use to make you cum, and then <i>keep</i> using until you're completely satisfied~!
				t You grin down at him.
				sp player; That's a <i>good slutty maid...</i>
				t True to your word, you start thrusting in quickly, focusing on getting you both off as your hands roam up and down his tights-clad legs, exploiting every sensitive inch of housekeepF's body that you can reach.
				t After a fair while teasing his calves, tweaking his nipples, and toying with his balls, it isn't much longer before you can feel yourself approaching the edge.
				sp player; I'm getting close...!
				t Hearing that gets housekeepF even more riled up, his cock bobbing and twitching faster.
				sp housekeep; Please, cum inside~!
				im bunny-7.jpg
				sp housekeep; A-Ah~! Thank you, *Master~!
				t Your cock twitches and spurts several more ropes of cum inside of his ass, his own cock spurting out a bit before starting to dribble down gently.
				t When you finally finish and pull out, it's to the sound of him gently moaning from the stimulation, and the sight of him picking up some of them cum from his chest with his fingers and lapping it up.
				sp housekeep; Seems like we both enjoyed that service, *Master~
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "housekeep3B" : {
			passTime();
			if(checkTrust('housekeep') < 45)
				raiseTrust('housekeep',1);
			if(!checkFlag("housekeep","bikini"))
				addFlag('housekeep','bikini');
			writeSpeech("player","","Actually, I was thinking I might \"request\" an outfit. You wouldn't happen to have a swimsuit, by chance?");
			writeSpeech("housekeep","","Ah...!");
			writeText("There's the sound of something shifting on the other side of the phone, before:");
			writeSpeech("housekeep","","I'll bring it over now~ See you in ten minutes, *Master~");
			writeText("...");
			writeText("When housekeepF does arrive, it's wearing a rather nice-looking coat that covers up most of him. Probably for the best, since you're fairly sure what he's wearing underneath would raise some eyebrows on the street.");
			writeText("After you shut and lock the door behind him, he undoes the buttons of the coat before letting it fall to the ground, turning to face you.");
			writeBig("images/housekeep/bikini-1.jpg","Art by Kinta no Mousou");
			writeSpeech("housekeep","","Well, here we are~");
			writeText("housekeepF toys with the strings for the bikini a bit, smiling.");
			writeSpeech("housekeep","","How do I look, *Master?");
			writeSpeech("player","","You look sexy as Hell. I like it.");
			writeText("A glint of satisfaction plays in housekeepF's eyes at that.");
			writeSpeech("housekeep","","In that case... How about we take this little outfit somewhere wetter? The bath, perhaps?");
			writeSpeech("player","","I don't see why not. Go ahead and get it ready, housekeepF.");
			writeText("...");
			writeText("A few minutes later, you're stripped and ready as housekeepF finishes drawing the bath.");
			writeSpeech("housekeep","","There~ Now just go ahead and get right in...");
			writeText("He gently grasps your hand and leads you in. As you sit down in it, the warm water feels pleasant on your skin.");
			writeText("He takes a moment to squirt something into his hand and reach behind him, before winking at you.");
			writeSpeech("housekeep","","Don't worry, this lube works underwater~ How <i>is</i> the water, by the way?");
			writeSpeech("player","","Temperature's good, but I can think of a way to improve the bath.");
			writeText("He raises an eyebrow.");
			writeSpeech("housekeep","","How do you mean?");
			writeFunction("writeEvent('housekeep5')", "Pull him into the tub");
			break;
		}
		case "housekeep3C" : {
			writeText("Just like last time, he does arrive quickly, a relaxed smile across his face as he gives a small, polite curtsy again.");
			if(checkTrust('succubus') >= 60 && checkFlag('housekeep','Demon') != true){
				addFlag('housekeep','Demon');
				writeText("His nose wrinkles for a moment as he straightens up, looking around.");
				writeSpeech("housekeep","","I have a few people I can call if you need help with your... bat problem.");
				writeSpeech("player","","My what?<br><i>Could he mean...?</i>");
				writeText("housekeepF's expression relaxes.");
				writeSpeech("housekeep","","So it isn't a problem. Ignore that, I merely misunderstood.");
				writeText("He gives another small curtsy, smiling beautifically up at you as he does.");
			}
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Was there anything specific you wanted me to do, *Master?");
			else
				writeSpeech("housekeep","","Was there anything specific you wanted for me to do, Mistress?");
			if(checkFlag("housekeep","Asked")){
				if(checkFlag("housekeep","Asked4") && checkFlag("haze","Heaven"))
					writeFunction("writeEncounter('housekeepChatHeaven')", "Ask him about demons and angels")
				else if(checkFlag("housekeep","Asked3") && checkFlag("housekeep","bikini"))
					writeFunction("writeEncounter('housekeepChat3')", "Ask him about the custom lube from before");
				else if(checkFlag("housekeep","Asked2"))
					writeFunction("writeEncounter('housekeepChat2')", "Ask him about Maid in Heaven");
				else if(checkFlag("housekeep","Asked1"))
					writeFunction("writeEncounter('housekeepChat1')", "Ask him about how he became a maid");
			}
			else
				writeFunction("writeEncounter('housekeep1-1')", "Ask him about himself");

			if(checkFlag("housekeep","Clean")){
				if(checkFlag("housekeep","Clean2"))
					console.log("check this real quick");
				else if(checkFlag("housekeep","Clean1"))
					writeFunction("writeEncounter('housekeepClean')", "Have him clean up again");
			}
			else
				writeFunction("writeEncounter('housekeepClean')", "A maid's job is to clean");
			if(checkFlag("housekeep","Blowjob") != true)
				writeFunction("writeEncounter('housekeep1-2')", "Request <i>sexual</i> cleaning");
			else
				writeFunction("writeEncounter('housekeepSexMenu')", "Request some <i>service</i>");
			if(checkTrust('housekeep') >= 45)
				writeFunction("writeEncounter('housekeepEnding')", "Tell housekeepF you want him to be your live-in maid", "blue");
			break;
		}
		case "housekeepSexMenu" : {
			writeSpeech("player","","I was thinking that I wanted to have a bit of <i>fun,</i> if you get my meaning.");
			writeText("housekeepF smiles, nodding once.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","It would be my pleasure. How would you like to have me, *Master?");
			else
				writeSpeech("housekeep","","It would be my pleasure. How would you like to have me, Mistress?");
			writeFunction("writeEncounter('housekeepSecondBlowjob')", "Have him blow you again")
			if(checkFlag("housekeep","Sink") != true)
				writeFunction("writeEncounter('housekeepSink1')", "Have him bend over and put his hands on the kitchen counter");
			else
				writeFunction("writeEncounter('housekeepSink2')", "Bend him over in the kitchen again");





			if(checkFlag("housekeep",'bunnyOutfit'))
				writeFunction("writeEvent('housekeep4-1')", "Have him bring out the bunny-girl outfit again");
			if(checkFlag("housekeep",'bikini'))
				writeFunction("writeEvent('housekeep5-1')", "Have him bring out the bikini again");





			// else
			// 	writeFunction("writeEncounter('housekeepHypnoMenu')", "Ask him about the special services");
			// if(galleryCheck('housekeep3') != true)
			// 	writeFunction("writeEvent('housekeep3-1')", "Hypnotize him for sex");
			// else
			// 	writeFunction("writeEvent('housekeep3-1')", "Hypnotize him and have sex again");
			// if(checkFlag("Bath") != true)
			// 	writeFunction("writeEncounter('housekeepBath')", "Fuck in the bathroom");
			// if(checkFlag("Bath"))
			// 	writeFunction("writeEncounter('housekeepBath')", "Fuck in the bathroom again");
			// if(checkFlag("Bath") && checkItem("Skimpy Bikini"))
			// 	writeFunction("writeEncounter('housekeepBikini')", "Have him put the bikini on and bathe with you");
			// if(checkFlag("Bath2"))
			// 	writeFunction("writeEncounter('housekeepBikini')", "Have him put the bikini on and fuck him in the bath again");
			if(checkFlag("housekeep","Hypno")){
				if(checkFlag("housekeep","BlowHim") != true)
					writeFunction("writeEncounter('housekeepBlowjob1')", "Give him a blowjob");
				else
					writeFunction("writeEncounter('housekeepBlowjob2')", "Blow him again");
			}
			else if(checkTrust('housekeep') == 42)
				writeFunction("writeEncounter('housekeepHypnoEncounter')", "Hypnotize him and have him provide his services for free");
			break;
		}
		case "housekeepSecondBlowjob" : {
			if(checkFlag("housekeep","Blowjob1")){
				removeFlag("housekeep","Blowjob1");
				addFlag("housekeep","Blowjob2");
			}
			writeEvent("housekeep1-1");
			break;
		}
		case "housekeepSecondBlowjobA" : {
			writeText("You run your hand through his hair, enjoying the slow, sensual movements of his hand and tongue.");
			writeSpeech("player","","Just do it at your pace. This already feels <i>damn</i> good...");
			writeText("His face gets a bit redder.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","I'm glad to hear it, *Master~ In that case, I'll get started on a <i>proper</i> blowjob~!");
			else
				writeSpeech("housekeep","","I'm glad to hear it, Mistress~ In that case, I'll get started on a <i>proper</i> blowjob~!");
			writeText("Saying that, he uses his fingers to make a circle right below your head, pressing his lips against it...");
			writeText("Then, his eyes still locked with yours, he pushes himself forward as you feel your head spread his soft lips apart.");
			writeText("You suppress a low groan as he bobs up and down just a bit, the ridge of your glans sliding in and out of his warm, wet mouth as he lets out a pleased hum.");
			writeText("His hand strokes the parts of your shaft that he isn't sucking on, his cheeks pulling in just a bit whenever he slides back, the suction making every sensation a bit stronger.");
			writeText("Teasing your tip with his tongue as he pulls all the way back, he pauses for just a moment before letting your head slide past his lips with a <i><b>*POP~!*</b></i>");
			writeText("His hands toying with your cock and balls, he smiles up at you, a small trail of spit connecting his mouth to your cock.");
			writeSpeech("housekeep","","Here we go~!");
			writeText("With no more warning than that, he plunges his head forward, your cock pausing just for a moment when it reaches his throat, before he pushes down even further.");
			writeText("His lips press against his fingers at the base of your cock before he pulls that hand away, his nose nuzzling against your hips as he moans.");
			writeSpeech("player","","Fucking <i>Hell...!</i>");
			writeText("housekeepF pauses for a moment, the rhythmic tightening of his throat around the front of your cock slowing down as his tongue lazily slides across the underside of your shaft.");
			writeText("Then, he pulls back a bit, bobbing up... then down. He starts out slow, his head shifting around as the vacuum-suction gets stronger.");
			writeText("You moan loudly as he starts picking up speed, one hand still toying with your sack while his other sensually moves up your thigh and to your abdomen.");
			writeText("Just a few more seconds, and he's picked up enough speed and depth that you can feel yourself popping in and out of his throat as he bounces, twisting his head around to shift the angle before pushing forward.");
			writeText("His coiling tongue keeps toying with you, his eyes still playfully locked onto yours as you approach the edge.");
			writeText("You could warn him so that he can pull out and you can finish on his face, or you could grab his hair and hold him down while you cum...");
			writeFunction("writeEncounter('housekeepSecondBlowjobAA')", "Give him a facial");
			writeFunction("writeEncounter('housekeepSecondBlowjobAB')", "Hold him down");
			break;
		}
		case "housekeepSecondBlowjobAA" : {
			writeSpeech("player","","I'm about to cum...!");
			writeText("You can't really hear it over the sound of him throating your cock, but you can <b>feel</b> the excited hum as he pulls further back, his hand quickly going from your abdomen to your shaft.");
			writeText("He holds your head in his mouth for a few more seconds before sliding his lips completely away.");
			writeText("His hand keeps jerking you off, the wet spit covering the whole shaft as it makes lewd noises.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Come on, *Master~! I want to feel your cum as you <i>paint</i> your maid~!");
			else
				writeSpeech("housekeep","","Come on, Mistress~! I want to feel your cum as you <i>paint</i> your maid~!");
			writeText("You only last a few more seconds in his hand, his fingers teasing against your head being the last straw.");
			writeText("Your hips buck as housekeepF moves up close to your cock, his face coming down close just as you fire off.");
			writeBig("images/housekeep/1-6.jpg","Art by Kinta no Mousou");
			writeSpeech("player","","<i><b>F-Fuck...!</b></i>");
			writeText("Your shaft slides up against his lips as you cum, spurting wildly across his face and his hand.");
			writeSpeech("housekeep","","Waah... There's so much this time, too...!");
			writeText("He watches, entranced as you shoot out ropes of cum, your hands bunching up the sheets below.");
			writeText("After you finish, you run your hands through his hair for a moment.");
			writeSpeech("player","","That was pretty good...");
			writeText("He smiles up at you, beaming a bit from the praise.");
			writeSpeech("housekeep","","I'm glad to hear it! I practiced 'vacuum-blowjobs' at home after I read about them in a magazine, but it's quite different on a real cock!");
			writeSpeech("player","","Heh, you're pretty enthusiastic about your job, aren't you?");
			writeText("He smirks, raising his cum-covered hand to his mouth.");
			writeSpeech("housekeep","","I have a pretty good reason to be!");
			writeBig("images/housekeep/1-7.jpg","Art by Kinta no Mousou");
			writeText("His tongue laps up the cum sensually as he gives you a wink.");
			writeSpeech("player","","Y'know, if you keep doing stuff like that, I'll end up ready for another round.");
			writeSpeech("housekeep","","Haa, if only~!");
			writeText("housekeepF laughs, though a small look of regret passes over his face.");
			writeSpeech("housekeep","","It's getting a bit late, I'm afraid, so we'll need to wait until the next time you call me.");
			writeText("You take a look at the clock and, sure enough, it actually is getting dark.");
			writeSpeech("player","","Huh. Time flies when you're having fun, I guess.");
			writeText("housekeepF hums in agreement.");
			writeSpeech("housekeep","","I'll see you some other night, then?");
			writeSpeech("player","","Yup. Good night, housekeepF.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Good night to you too, *Master!");
			else
				writeSpeech("housekeep","","Good night to you too, Mistress!");
			writeText("He finishes up with a quick survey of the room and his face, checking for any cum he missed, before giving a short curtsy and making his way out the door.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "housekeepSecondBlowjobAB" : {
			writeText("When your hand goes to the back of his head, he does pause for a brief moment.");
			writeText("Then, as you pull his nose right up to your abdomen, you can feel him gag sharply around your shaft, his eyes going wide as he looks up at you.");
			writeSpeech("player","","I'm getting close...!");
			writeText("A spark of clarity flies through his eyes, a low hum coming from his throat as he refocuses on your cock.");
			writeText("Or, at least, tries.");
			writeText("His tongue teases the underside of your shaft as you thrust your hips forward, audible but enthusiastic gagging lewdly ringing out from below as you reach the edge.");
			writeSpeech("player","","<i><b>Cumming...!</b></i>");
			writeText("You feel his hands caress your thighs as you tighten up, your head as deep into his throat as you could shove it as you start spurting out rope after rope of cum.");
			writeText("Several seconds pass like this, your body curled over slightly as you twitch, housekeepF's throat still swallowing around you until you finally pull out.");
			writeText("housekeepF breathes in deeply the moment his airway is clear, his eyes having trouble focusing for a moment before he looks up at you with a smile.");
			writeSpeech("housekeep","","Mm... You had fun~?");
			writeText("You run your hand through his hair for a moment, nodding.");
			writeSpeech("player","","You've got one Hell of a throat, housekeepF.");
			writeText("He smiles up at you, beaming a bit from the praise.");
			writeSpeech("housekeep","","I'm glad to hear it.");
			writeText("He takes a moment to clear his throat, finally noticing the amount of spit dribbling down from his chin.");
			writeSpeech("housekeep","","Ah, just a moment...");
			writeText("Pulling out a small cloth from his apron, he starts wiping it up.");
			writeSpeech("housekeep","","Since you seem to like it, I'll need to practice my deepthroat technique a bit more... Though, dildos aren't quite as informative.");
			writeSpeech("player","","Well, you've always got a willing study-partner here.");
			writeText("He lets out a gentle laugh, nodding.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","I do indeed. I hope you'll keep calling for my services, *Master, so I can become a truly perfect maid.");
			else
				writeSpeech("housekeep","","I do indeed. I hope you'll keep calling for my services, Mistress, so I can become a truly perfect maid.");
			writeSpeech("player","","Look forward to it.");
			writeText("He nods, before his eyes go to the clock.");
			writeSpeech("housekeep","","Ah, it's getting a bit late. I'm afraid we'll need to wait to <i>practice</i> until the next time you call me.");
			writeText("You take a look at the clock and, sure enough, it actually is getting dark.");
			writeSpeech("player","","Huh. Time flies when you're having fun, I guess.");
			writeText("housekeepF hums in agreement.");
			writeSpeech("housekeep","","I'll see you some other night, then?");
			writeSpeech("player","","Yup. Good night, housekeepF.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Good night to you too, *Master!");
			else
				writeSpeech("housekeep","","Good night to you too, Mistress!");
			writeText("He finishes up with a quick survey of the room and his face, checking for any cum he missed, before giving a short curtsy and making his way out the door.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "housekeepSecondBlowjobB" : {
			writeSpeech("player","","Well, if you insist...");
			writeText("Your hand goes to the back of his head, his own hand moving away from your shaft as he smiles.");
			writeSpeech("player","","Open wide.");
			writeSpeech("housekeep","","Ahh~!");
			writeText("His mouth spreads open, his tongue lolling out lewdly as you aim-");
			writeText("-and <i><b>THRUST.</b></i>");
			writeText("You press against his throat in the first thrust, housekeepF gagging loudly as you pull back to adjust.");
			writeText("You quickly start pistoning your hips forward, his hair held tightly in your fist as you bounce him forward and back.");
			writeText("It only takes a couple more thrusts before you push well into his throat, his lips pressed against the base of your cock and his nose against your hips.");
			writeText("You can feel him start to swallow around you a bit as he regains a bit of focus...");
			writeText("So you pull him away and <b>slam</b> your hips forward again, intent on throat-fucking him with everything you've got.");
			writeSpeech("player","","Take every inch...!");
			writeText("You thrust into him again and again, his focus flagging more and more until you feel his hand against your thigh.");
			writeText("You almost suspect that you took it too far, before his hand grips down tightly and <b>pulls you forward.</b>");
			writeText("His other hand is holding his skirt down as he twitches slightly, clearing trying to hide how turned on he is.");
			writeSpeech("player","","Well, aren't you a little <i>slut?</i>");
			writeText("His hips shift as he half-moans around your shaft, your hand pulling him back just enough for him to breathe for a moment.");
			writeText("Then you <b>slam</b> him back down, relishing the sight of him desperately trying to focus on your cock instead of his as you start to get close.");
			writeSpeech("player","","I'd say to get ready, but...");
			writeText("You grab onto his hair with your other hand as well.");
			writeSpeech("player","","...you've probably been looking forward to <i>this</i> the whole time.");
			writeText("You buck into his mouth as quickly as you can take, your shaft fucking his mouth and throat as all of his finesse and technique fade away.");
			writeText("You use his mouth like a sex toy, pounding into it with reckless abandon as you reach the edge.");
			writeText("Grunting loudly, you pull him down as his lips press against your base, noting his grip on your thighs tightening as you start to spurt.");
			writeText("Rope after rope shoot down into his stomach as he tries to swallow around your length. When you finally finish, you slowly pull away.");
			writeText("housekeepF gasps sharply as you pop out of his throat and let him breathe, though he seems to recover very quickly, as he seems to lean towards your cock for a moment.");
			writeSpeech("housekeep","","A-Ah...");
			writeText("His face flushes red as he stops, the hand holding down his skirt pushing down a bit more. Not that it hides the dark splotches from the precum he was leaking the whole time.");
			writeText("His other hand, though, reaches into the small apron-pocket to pull out a cloth as he dabs at the spit that covered his entire mouth and chin.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","T-Thank you, *Master.");
			else
				writeSpeech("housekeep","","T-Thank you, Mistress.");
			writeText("His body shivers slightly, a small smile going across his face.");
			writeSpeech("housekeep","","Do you mind if... we practice that more, in the future?");
			writeSpeech("player","","Er, sure. You sure you're okay, though? You look a little... out of sorts.");
			writeText("He nods vigorously, smiling wide.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","I'll be fine momentarily, *Master. And, I think that this feeling might be the best part...~!");
			else
				writeSpeech("housekeep","","I'll be fine momentarily, Mistress. And, I think that this feeling might be the best part...~!");
			writeText("Huh. Looks like he might have had a breathplay fetish without realizing it.");
			writeSpeech("player","","Alright. Just make sure to slap my thigh if you really need to breathe. Safewords are a bit hard to say with a cock in your throat.");
			writeSpeech("housekeep","","Of course!");
			writeText("He finishes wiping at his lips and chin, storing the cloth with a beaming grin.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","It is getting late, but I'm absolutely looking forward to the next time you call me, *Master!");
			else
				writeSpeech("housekeep","","It is getting late, but I'm absolutely looking forward to the next time you call me, Mistress!");
			writeText("You take a look at the clock and, sure enough, it actually is getting dark.");
			writeSpeech("player","","Huh. Time flies when you're having fun, I guess.");
			writeText("housekeepF hums in agreement.");
			writeText("After a few seconds, he stands up and leans forward slightly.");
			writeSpeech("housekeep","","Ah, my makeup didn't smear, did it? I chose this brand because it's supposed to stay even through tears.");
			writeSpeech("player","","...Huh. It's actually immaculate.");
			writeSpeech("housekeep","","Oh, good! In that case, I should head out.");
			writeText("He finishes up with a quick survey of the room and his face, checking for any cum he missed, before giving a short curtsy and making his way to the door.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Good night to you too, *Master!");
			else
				writeSpeech("housekeep","","Good night to you too, Mistress!");
			writeSpeech("player","","Ah, good night, housekeepF.");
			writeText("With that, he heads out, leaving you in the room as night approaches.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "housekeepSink1" : {
			if(checkFlag("housekeep","Sink1") != true){
				addFlag("housekeep","Sink1");
				raiseTrust("housekeep",1);
			}
			else
				writeSpecial("Not sure how, but you triggered this one-time event for the second time. There must be a bug in the code.")
			writeEvent("housekeep2");
			break;
		}
		case "housekeepSink1A" : {
			writeSpeech("player","","Then you'd better get to work, shouldn't you?");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Of course, *Master~!");
			else
				writeSpeech("housekeep","","Of course, Mistress~!");
			writeText("Sliding down to his knees, he smiles widely as he grabs the base of your cock.");
			writeText("You expect him to get to work immediately, but he stops for a few seconds, breathing deeply.");
			writeSpeech("housekeep","","Jeez... It's really unfair how good your scent is, you know that?");
			writeSpeech("player","","Well, I'm glad you're enjo-<i><b>HOH.</b></i>");
			writeText("His tongue traces the edge of your extra-sensitive tip, your chest leaning forward a bit.");
			writeText("He slowly laps at your shaft, your hips bucking slightly as the slow, controlled, rough strokes of his tongue gather up all your cum.");
			writeSpeech("player","","I just came, so...");
			writeSpeech("housekeep","","Ah, sorry.");
			writeText("He does look a bit apologetic as he glances up to you.");
			writeSpeech("housekeep","","You're just so fun to tease, I had trouble holding back...");
			writeText("At that, he leans forward and gently presses his lips to your shaft.");
			writeBig("images/housekeep/1-4.jpg","Art by Kinta no Mousou");
			writeSpeech("housekeep","","There - all clean~!");
			writeText("He smiles up at you as he stands.");
			writeSpeech("housekeep","","Well, aside from the <i>floor</i>, of course. But that's an easy clean!");
			writeSpeech("player","","I see...");
			writeSpeech("housekeep","","Yup! I'll get started on that now - since it's getting a bit late, you'll probably want to wash up before bed.");
			writeText("A half-stern, half-playful look crosses his face as he leans forward.");
			writeSpeech("housekeep","","It's important to get a good amount of sleep every night, right?");
			writeText("It's a little odd to get told that with your dick still hanging out, but he's not wrong...");
			writeSpeech("player","","A shower sounds like a good idea. You're fine with finishing the cleaning like this?");
			writeText("housekeepF smiles, his face reddening a bit as he stands up straight.");
			writeSpeech("housekeep","","I'm happy to clean, and even happier to do it while <i>all-filled-up~!</i>");
			writeSpeech("player","","If you say so. You'll probably be finished before I come out, so good night, housekeepF.");
			writeSpeech("housekeep","","Ah, just a moment?");
			writeText("You pause as he steps up to you, standing up on his toes to reach your cheek.");
			writeText("He gives you a gentle kiss before stepping back with a smile.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","That's a gift for a wonderful *Master. Good night, and I'll see you next time you call~!");
			else
				writeSpeech("housekeep","","That's a gift for a wonderful Mistress. Good night, and I'll see you next time you call~!");
			writeText("He gives you a little curtsy as usual, before getting to cleaning.");
			if(data.player.location == "gallery")
				writeFunction("changeLocation(data.player.location)", "Finish");
			else
				writeFunction("changeLocation(data.player.location)", "Wash off and get ready to sleep");
			break;
		}
		case "housekeepSink1B" : {
			writeSpeech("player","","Thanks for the offer, but I think I'll wash off in the shower.");
			writeText("He pauses, before smiling politely.");
			writeSpeech("housekeep","","I see. Then in that case, I'll finish cleaning up in here!");
			writeText("One of his hands toys with his skirt a bit.");
			writeSpeech("housekeep","","I think we both might've gotten the floor a bit wet, after all~");
			writeText("You nod, fiddling with your clothes just a bit as you head to the bathroom.");
			writeSpeech("housekeep","","Ah, just a moment?");
			writeText("You pause as he steps up to you, standing up on his toes to reach your cheek.");
			writeText("He gives you a gentle kiss before stepping back with a smile.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","That's a gift for a wonderful *Master~! I'll head out when I'm finished, so good night!");
			else
				writeSpeech("housekeep","","That's a gift for a wonderful Mistress~! I'll head out when I'm finished, so good night!");
			writeSpeech("player","","Good night to you too, housekeepF.");
			writeText("He gives you a little curtsy as usual, before getting to cleaning.");
			if(data.player.location == "gallery")
				writeFunction("changeLocation(data.player.location)", "Finish");
			else
				writeFunction("changeLocation(data.player.location)", "Wash off and get ready to sleep");
			break;
		}
		case "housekeepSink2" : {
			if(checkFlag("housekeep","Sink1")){
				removeFlag("housekeep","Sink1");
				addFlag("housekeep","Sink2");
			}
			writeEvent("housekeep2-1");
			break;
		}
		case "housekeepClean" : {
			if(checkFlag("housekeep","Clean1") != true && checkFlag("housekeep","Clean2") != true){
				addFlag("housekeep","Clean1");
				writeSpeech("player","","Well, a maid's job is to clean, isn't it?");
				writeText("He smiles, nodding as he stands up straight.");
				writeSpeech("housekeep","","Then I'll get to work immediately~");
				writeText("Reaching into the small, apron-like front-piece of his outfit, he pulls out a miniature duster and cloth.");
				writeText("With greater speed than you expected from the drowsy-looking boy, he starts flitting about and examining the surfaces of the room.");
				writeText("He's actually surprisingly diligent, inspecting every surface with a keen eye and dusting at them efficiently.");
				writeText("And of course, when he starts examining the higher-surfaces, his skirt shifts quite a bit...");
				writeBig("images/housekeep/clean-1.jpg","Art by Kinta no Mousou");
				writeText("As he shifts in place, examining every level of your shelves, you can see the minute movements of his ass and thighs.");
				writeText("You see him pause for a moment... before doing a little wiggle, his eyes still set on the surfaces he's wiping at.");
				writeText("Just watching him is mesmerizing, and it isn't long before you feel the urge to reach out...");
				writeBig("images/housekeep/clean-2.jpg","Art by Kinta no Mousou");
				writeSpeech("housekeep","","There.");
				writeText("You stop mid-motion, his arms going down as his skirt covers him up again and he turns around with a knowing smile.");
				writeSpeech("housekeep","","Feel free to look for yourself, playerSir - it will be quite hard to find any dust I missed~");
				if(checkFlag("housekeep","Blowjob") != true)
					writeFunction("writeEncounter('housekeep1-2')", "Request <i>sexual</i> cleaning");
				else
					writeFunction("writeEncounter('housekeepSexMenu')", "Request some <i>service</i>");
				writeFunction("writeEncounter('housekeepCleanBlueballs')", "Thank him for his work and send him out");
				break;
			}
			else{
				if(checkFlag("housekeep","Clean2") != true && checkFlag("housekeep","Clean1") == true){
					removeFlag("housekeep","Clean1");
					addFlag("housekeep","Clean2");
				}
				writeSpeech("player","","I want to watch you clean up again.");
				writeText("He smiles and nods, dutifully retrieving the mini-duster and dustrag from behind his apron.");
				writeText("Just like last time, his skirt pulls up a bit as he goes to clean higher-up spots.");
				writeBig("images/housekeep/clean-1.jpg","Art by Kinta no Mousou");
				writeText("And just like last time, there's a purposeful wiggle in his behind as he cleans.");
				writeText("After a few seconds, you reach out.");
				writeSpeech("housekeep","","<i><font size='-1'>Ahn~!</font></i>");
				writeText("It's quiet, but it's enough to motivate you to grasp his ass with both hands, kneading into it as he keeps dusting.");
				writeText("A few moments later, though, he steps away from the shelf, making it too awkward of an angle to keep going.");
				writeText("His face is a little flushed, but he smiles.");
				writeSpeech("housekeep","","Ah, just let me get this spot above you~");
				writeText("He steps right in front of where you're sitting, reaching up high.");
				writeBig("images/housekeep/clean-3.jpg","Art by Kinta no Mousou");
				writeText("He really isn't one for subtlety, is he? Not that you mind...");
				writeText("He squirms a bit as your hands go up and down his legs, his breathing getting heavier as you caress the inside of his exposed thighs.");
				writeSpeech("player","","Sensitive down here?");
				writeText("From this angle, you can see him bite his lip.");
				writeSpeech("housekeep","","...You know, you didn't have to ask me to clean if you just wanted some <i>release~</i>");
				if(checkFlag("housekeep","Blowjob") != true)
					writeFunction("writeEncounter('housekeep1-2')", "Request <i>sexual</i> cleaning");
				else
					writeFunction("writeEncounter('housekeepSexMenu')", "Request some <i>service</i>");
				writeFunction("writeEncounter('housekeepCleanBlueballs')", "Thank him for his work and send him out");
			}
			break;
		}
		case "housekeepCleanBlueballs" : {
			if(checkFlag("housekeep","Blueballs" != true) && checkFlag("housekeep","Clean2") != true){
				addFlag("housekeep","Blueballs");
				writeSpeech("player","","Oh, cool.");
				writeText("You step right past him, looking at the shelf.");
				writeSpeech("player","","Very nice. You got it done pretty quick, so you're probably good to head out.");
				writeText("He pauses for a moment, but the confusion disappears quickly.");
				writeSpeech("housekeep","","A-Ah, well, the cleaning part is done, but... I-Is that all?");
				writeSpeech("player","","Yup. I called a maid for cleaning, and you cleaned. Pretty well, too. I'll probably call you back at some point.");
				writeText("housekeepF shifts in place, nodding.");
				writeSpeech("housekeep","","Well, alright. Then... I suppose I'll see you later?");
				writeSpeech("player","","Yup.");
				writeText("housekeepF leaves the room, though not nearly as quickly as he cleaned it.");
				writeText("You lay down in your bed, examining your room.");
				writeText("Yup. Definitely clean.");
				writeFunction("changeLocation(data.player.location)", "Lay down and get ready for bed");
			}
			else{
				if(checkFlag("housekeep","Blueballs") != true)
					addFlag("housekeep","Blueballs");
				writeSpeech("player","","That'll be it.");
				writeSpeech("housekeep","","...Alright. I suppose I'm done, then?");
				writeSpeech("player","","Neat. Thanks for the help.");
				writeSpeech("housekeep","","Are you sure? There's <i>nothing else</i> you wanted?");
				writeSpeech("player","","I'm pretty content.");
				writeText("housekeepF eyes you oddly for a moment, before shrugging.");
				if(data.player.gender == "man")
					writeSpeech("housekeep","","Well, okay. Have a good evening, *Master.");
				else
					writeSpeech("housekeep","","Well, okay. Have a good evening, Mistress.");
				writeSpeech("player","","Yup, you too.");
				writeFunction("changeLocation(data.player.location)", "Lay down and get ready for bed");
			}
			break;
		}
		case "housekeepChat1" : {
			if(checkFlag("housekeep","Asked1")){
				removeFlag("housekeep","Asked1");
				addFlag("housekeep","Asked2");
			}
			writeSpeech("player","","I was wondering how you got into the whole 'maid (male)' business. It seems like a pretty niche market to just stumble into.");
			writeSpeech("housekeep","","Hm. I feel like it was a pretty straightforward series of events... I found some magazines that talked about maid-services, and decided that I would like to give it a try.");
			writeSpeech("player","","And you got hired just like that?");
			writeSpeech("housekeep","","Well, I suppose so, yes. I asked some people I've helped before to start a maid business, and they handle the paperwork, since I don't really understand that part too well. Is that not how it normally works?");
			writeSpeech("player","","I mean... Not really? But hey, if it worked for you, then it worked. You certainly won't be hearing any complaints from me.");
			writeText("He smiles gently, nodding.");
			writeSpeech("housekeep","","I suppose you could say I'm 'blessed' like that.");
			writeText("...Weird emphasis, but okay.");
			writeSpeech("player","","If there are other people running the company, wouldn't it be a good idea to get other workers to man the phones?");
			writeSpeech("housekeep","","Maybe, but I prefer to handle that myself - like I said, I like to hear the voice of a person when they request me. That, and it's not as though we get so many calls that I can't handle them alone.");
			writeSpeech("player","","Business not exactly booming?");
			writeSpeech("housekeep","","...You could say that. Our business model is a bit odd, probably.");
			writeText("Well, seeing as you only heard about the business from a loose flier, the issue might actually be getting the name out...");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Was there anything else you would like to request, *Master?");
			else
				writeSpeech("housekeep","","Was there anything else you would like to request, Mistress?");
			if(checkFlag("housekeep","Blowjob") != true)
				writeFunction("writeEncounter('housekeep1-2')", "Request <i>sexual</i> cleaning");
			else
				writeFunction("writeEncounter('housekeepSexMenu')", "Do sexual things");
			break;
		}
		case "housekeepChat2" : {
			if(checkFlag("housekeep","Asked2")){
				removeFlag("housekeep","Asked2");
				addFlag("housekeep","Asked3");
			}
			writeHTML(`
				sp player; I'm curious - what sort of place is your business, Maid in Heaven?
				t housekeepF pauses to think.
				sp housekeep; Hm... Well, it's a pretty small business, really. I'm the only maid there, and a couple people I know handle the more business-y elements.
				sp housekeep; We focus mostly on doing our jobs while maintaining a low profile, really. I'm... not sure how much else there is to say about it.
				sp player; You seem to enjoy it, but does being the only maid cause any problems? Like overworking or anything.
				t housekeepF seems to smile wistfully at that.
				sp housekeep; No. Even if I had a bunch of clients, I'd work happily even then... but for now, you're the only person who's found the flier.
				sp player; Really? It seemed like it was in a fairly obvious place.
				t Now, a playful glint appears in his eyes.
				sp housekeep; Obvious for <i>you,</i> yes. But then, I suppose not everyone is meant to find it, in a way - otherwise, they would have.
				t He shrugs slightly.
				sp housekeep; It's not as though I mind too much, though. I'd prefer to be working more, but having a single dedicated client is its own kind of pleasure.
			`);
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Was there anything else you would like to request, *Master?");
			else
				writeSpeech("housekeep","","Was there anything else you would like to request, Mistress?");
			if(checkFlag("housekeep","Blowjob") != true)
				writeFunction("writeEncounter('housekeep1-2')", "Request <i>sexual</i> cleaning");
			else
				writeFunction("writeEncounter('housekeepSexMenu')", "Do sexual things");
			break;
		}
		case "housekeepChat3" : {
			if(checkFlag("housekeep","Asked3")){
				removeFlag("housekeep","Asked3");
				addFlag("housekeep","Asked4");
			}
			writeHTML(`
				sp player; That lube from before - you said a friend made it?
				t housekeepF nods.
				sp housekeep; He enjoys making things like that in his spare time. He actually teaches how to make things like it back home; he's got a club for that sort of thing.
			`);
			if(checkFlag('haze','heaven'))
				writeSpeech("player","","<i>A club for learning that sort of thing...? Why does that sound familiar...?</i>");
			writeHTML(`
				sp housekeep; ...Ah, I did ask if I could have some to give to you, but he told me very explicitly that the only people he's okay with using it are the people he's personally taught on how to make it. Sorry.
				sp player; Er... Is it dangerous?
				sp housekeep; Not at all - it's more that he's worried someone might use a little too much, and overload some poor person with so much pleasure that they can't function for the rest of the day. Or week.
				t ...That wouldn't really be too out of character for you, actually.
				sp player; That's a shame, I was hoping to get my hands on some for a bit of fun.<br>...Wait. Does that mean he's trained you in how to make it?
				sp housekeep; Of course. I had a bit of free time a while ago, so I joined his club for a little while and he taught me.
				t housekeepF smiles proudly.
				sp housekeep; I learned quite a few crafts during my time in the clubs, actually, including weaving and sewing. My work outfit is hand-made!
				sp player; Really? That's quite impressive.
				t He blushes slightly, sitting up straighter with a bigger smile.
				sp housekeep; Thank you very much~
				t With that, he shifts slightly in place.
			`);
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Was there anything else you would like to request, *Master?");
			else
				writeSpeech("housekeep","","Was there anything else you would like to request, Mistress?");
			if(checkFlag("housekeep","Blowjob") != true)
				writeFunction("writeEncounter('housekeep1-2')", "Request <i>sexual</i> cleaning");
			else
				writeFunction("writeEncounter('housekeepSexMenu')", "Do sexual things");
			break;
		}
		case "housekeepHypnoEncounter" : {
			if(checkFlag("housekeep","Hypno") != true){
				addFlag("housekeep","Hypno");
				data.player.money += 15;
				raiseTrust('housekeep',1);
			}
			writeSpeech("player","","Actually, there's a certain kind of kink I happen to enjoy.");
			writeText("housekeepF sits up a bit straighter, softly smiling.");
			writeSpeech("player","","How much do you know about hypnosis?");
			writeSpeech("housekeep","","Ah...");
			writeText("housekeepF seems to think for a moment, cupping his chin and closing his eyes for a moment.");
			writeSpeech("housekeep","","I knew some people who were interested in that that sort of thing, but I'm afraid that it's been too long for me to remember any details, and it wasn't something I researched personally.");
			writeText("He opens his eyes, smiling wide again as he raises a hand to his chest.");
			writeSpeech("housekeep","","Of course, if you wouldn't mind my inexperience, I would be more than happy to do that sort of play with you, *Master! Is that alright with you?");
			writeSpeech("player","","That's perfect. Just sit down on my bed and we can get started.");
			if(checkTrust('succubus') >= 60){
				writeText("He smiles and nods, looking towards the bed... and pausing, his eyes narrowing slightly.");
				writeSpeech("housekeep","","...Ah. Of course, but let me clean it first.");
				writeText("housekeepF quickly pulls out a cloth and small, unmarked spray bottle. Within a few seconds, he's given your sheets and the windowsill a quick wipedown.");
				writeText("It doesn't leave the sheets damp or anything, but it does leave a pleasantly relaxing lavender scent.");
				writeSpeech("housekeep","","There. That should be enough until next time, at least.");
				writeText("You're not sure why, but you get the feeling you shouldn't question this.");
				writeText("Stowing the cleaning tools, housekeepF turns around and smiles gently, sitting on the bed and folding his hands neatly in his lap.");
				writeSpeech("housekeep","","Sorry for the wait, but I'm ready for you now, *Master~");
			}
			else{
				writeText("housekeepF nods jovially, smoothing his skirt gently as he takes a seat, his hands folded neatly in his lap.");
				writeSpeech("housekeep","","I'm ready for you, *Master~");
			}
			writeSpeech("player","","Alright, then just take a look at this pendant and take slow, deep breaths...");
			writeText("...");
			writeText("Everything is pretty routine to start, slowly walking housekeepF through the steps of going into trance.");
			writeText("But...");
			writeSpeech("player","","housekeepF, can you... tell me how you're feeling?");
			writeText("You told him that he was feeling very loose, relaxed, and floaty.");
			writeText("And he responds, not a hint of of drowsiness in his voice,");
			writeSpeech("housekeep","","Loose, relaxed, and floaty, of course.");
			writeText("He just sits there, his body sitting up but largely relaxed, his shoulders drooping gently...");
			writeSpeech("player","","And you're now in a nice, suggestive trance, yes?");
			writeSpeech("housekeep","","Of course, *Master.");
			writeText("You sigh, shifting slightly.");
			writeSpeech("player","","<i>It's weird, but he actually does seem to be open to suggestion... Everyone's a little different when they're under, but this is definitely unique. Is he actually under...?</i>");
			writeText("You think for a moment, before deciding to test things.");
			writeSpeech("player","","housekeepF.");
			writeSpeech("housekeep","","Yes?");
			writeSpeech("player","","I want...");
			writeFunction("writeEncounter('housekeepHypnoEncounter1')", "...you to lift your skirt and show me your panties.");
			writeFunction("writeEncounter('housekeepHypnoEncounter3')", "...you to tell me about what you do in your free time.");
			writeFunction("writeEncounter('housekeepHypnoEncounter2')", "...to give you a blowjob.");
			break;
		}
		case "housekeepHypnoEncounter1" : {
			writeSpeech("player","","...I want you lift your skirt up and show me your panties.");
			writeText("His hands slowly unfold as he stands, grasping the edge of his skirt and lifting it.");
			writeText("There's no hesitation, but there isn't any of the teasing or the enjoyment housekeepF had on his face last time...");
			writeBig("images/housekeep/hypno1.jpg","Art by Kinta no Mousou");
			writeSpeech("housekeep","","Was there something else you would like as well?");
			writeText("...Actually, thinking about it, he probably wouldn't have hesitated without hypnosis, would he?");
			writeText("Ah, whatever. Reinforcing it in the future won't be too hard, so it's probably fine. It seems like it has set in (albeit a bit strangely), so it's probably better to finish what you started before moving to the fun stuff.");
			writeSpeech("player","","Since you enjoy being a maid so much, it's only logical that you could waive the fee for your services for the opportunity to improve as a maid, right?");
			writeSpeech("housekeep","","...That sounds reasonable.");
			writeText("housekeepF nods gently.");
			writeSpeech("housekeep","","By serving you, I'm improving as a maid, so I could waive the fee.");
			writeSpeech("player","","Neat.");
			writeText("...Huh.");
			writeText("That went over pretty well, actually.");
			writeText("...A little <i>too</i> well.");
			writeSpeech("player","","I was expecting that to take more finagling, but this is probably fine...?");
			writeText("Though, you are a bit curious about what he means by improve...");
			writeSpeech("player","","What kind of things are you looking to improve? Anything specific?");
			writeSpeech("housekeep","","There are several... <i>niche</i> magazines I've read that discuss certain services.");
			writeText("housekeepF's expression doesn't change, but his face flushes a bit more.");
			writeSpeech("housekeep","","It could take a little while to prepare for some of them, though. I could attempt to requisition an outfit or two, for example.");
			writeText("Requisition? Weird phrasing, but...");
			writeSpeech("player","","You mean like a bunny-girl outfit?");
			writeSpeech("housekeep","","...!");
			writeText("You can see his back just barely straighten up.");
			writeSpeech("housekeep","","That would be one example, yes.");
			writeText("...Ah, wait.");
			writeText("Ever since the hypnosis started, he's spoken a bit more formally, and with less hesitation...");
			writeSpeech("player","","...housekeepF.");
			writeSpeech("housekeep","","Yes, *Master?");
			writeSpeech("player","","You're not actually hypnotized. If I had to guess, you're paraphrasing a magazine or something you read.");
			writeText("It's not a question, and there's a momentary silence.");
			writeSpeech("housekeep","","...I apologize, *Master.");
			if(checkTrust('tomgirl') >= 2){
				if(checkTrust('meji') > 20 && checkTrust('meji') != 40)
					writeText("Well, shit. In hindsight, not everyone is going to be as easy as mejiF or tomgirlF, but still...");
				else
					writeText("Well, shit. In hindsight, not everyone is going to be as easy as tomgirlF, but still...");
			}
			else if(checkTrust('meji') > 20 && checkTrust('meji') != 40)
				writeText("Well, shit. Obviously, not everyone is going to be as easy as mejiF, but still...");
			else if(checkTrust('neet') >= 60)
				writeText("Well, shit. Maybe he's just not comfortable enough around you, like with neetF? But still...");
			else
				writeText("Well, shit. There are obviously going to be people who are more resistant, but still...");
			writeText("Well, something seems a bit off, but that just means that it'll require a different approach.");
			writeSpeech("player","","It's fine. It'll probably be easier for you the more time you spend around me, so I'll just have to call on you more, I suppose.");
			writeText("housekeepF purses his lips for a moment before nodding.");
			writeSpeech("player","","Now... You were saying something about being excited over a bunny-girl outfit?");
			writeText("He quickly perks up, his face flushing again, but his tone remaining collected... Mostly.");
			writeSpeech("housekeep","","A-Ah, no. I was just saying that I could requisition an outfit. That is, if <i>you</i> were interested in it, *Master.");
			writeText("You hold off on replying for a few moments, watching him slowly get redder.");
			writeSpeech("housekeep","","...And I would like to try wearing one, yes.");
			writeSpeech("player","","I thought you might. When you can get one, I'd be happy to see you wearing it.");
			writeSpeech("housekeep","","Of course.");
			writeText("housekeepF gives a small curtsy before standing up a bit straighter.");
			writeSpeech("housekeep","","In the meantime, though, was there anything you wanted me to do for you tonight?");
			writeFunction("writeEncounter('housekeepSexMenu')", "Do sexual things");
			writeFunction("writeEncounter('housekeepCleanHypno')", "Just some tidying up will be fine");
			break;
		}
		case "housekeepHypnoEncounter2" : {
			if(checkFlag("housekeep","BlowHim1") != true)
				addFlag("housekeep","BlowHim1");
			writeSpeech("player","","...I want to give you a blowjob.");
			writeSpeech("housekeep","","...");
			writeText("There's no response for several seconds.");
			writeSpeech("player","","As in, I want you to pull out your cock and let me-");
			writeSpeech("housekeep","","Ah.");
			writeText("housekeepF's body doesn't seem to shift much, aside from the rapid reddening of his face and a slight stirring of his skirt.");
			writeSpeech("housekeep","","It is the duty of the maid to service their *Master. I couldn't possibly have you do such a thing.");
			writeSpeech("player","","...Uh huh. Yeah, kinda thought this might be the case.");
			writeText("You lean back slightly, sighing and scratching the back of your head.");
			writeText("The way he spoke did change a little after starting hypnosis, but only barely. Between that and feeling clearly embarrassed like that...");
			writeSpeech("player","","...housekeepF.");
			writeSpeech("housekeep","","Yes, *Master?");
			writeSpeech("player","","You're not actually hypnotized. If I had to guess, you're paraphrasing a magazine or something you read to sound more composed.");
			writeText("It's not a question, and there's a momentary silence.");
			writeSpeech("housekeep","","...I apologize, *Master.");
			if(checkTrust('tomgirl') >= 2){
				if(checkTrust('meji') > 20 && checkTrust('meji') != 40)
					writeText("Well, shit. In hindsight, not everyone is going to be as easy as mejiF or tomgirlF, but still...");
				else
					writeText("Well, shit. In hindsight, not everyone is going to be as easy as tomgirlF, but still...");
			}
			else if(checkTrust('meji') > 20 && checkTrust('meji') != 40)
				writeText("Well, shit. Obviously, not everyone is going to be as easy as mejiF, but still...");
			else if(checkTrust('neet') >= 60)
				writeText("Well, shit. Maybe he's just not comfortable enough around you, like with neetF? But still...");
			else
				writeText("Well, shit. There are obviously going to people who are more resistant, but still...");
			writeText("Something seems a bit off, but that just means that it'll require a different approach.");
			writeSpeech("player","","It's fine. It'll probably be easier for you the more time you spend around me, so I'll just have to call on you more, I suppose.");
			writeText("housekeepF purses his lips for a moment before nodding.");
			writeSpeech("player","","Now... I think we were talking about blowjobs, weren't we?");
			writeText("He quickly perks up, his face flushing again, but his tone remaining collected... Mostly.");
			writeSpeech("housekeep","","A-Ah, yes. As I was saying, I'd be happy to serve <i>you</i>, *Master, but...");
			writeSpeech("player","","Let me re-word it, then.");
			writeText("You lean forward, your hand resting on his thigh.");
			writeSpeech("player","","I want to know whether you <i>want</i> me to blow you.");
			writeSpeech("housekeep","","...");
			writeText("He squirms in place just a little bit, the fidgeting increasing as you carefully bring your hand to his chin.");
			writeText("His breathing starts to get heavier as you focus entirely on him, your faces now just inches apart.");
			writeSpeech("player","","I want you to tell me what you, housekeepF, want me to do.");
			writeText("His focus is entirely on your face, moving from your eyes, down to your lips, and then back up.");
			writeSpeech("player","","And remember... A good maid always responds honestly to his *Master, don't they?");
			writeText("It takes a moment, but housekeepF nods.");
			writeSpeech("housekeep","","I want you to... <i>blow me...</i> But a maid's pleasure should be secondary to their *Master's, so-");
			writeSpeech("player","","So you would only do it if it would please me?");
			writeText("He hesitates before nodding, and you chuckle, leaning forward even more.");
			writeText("Your lips brush up against his ear as you whisper,");
			writeSpeech("player","","Blowing you would please me <i><b>greatly,</b></i> housekeepF.");
			writeText("You can feel his body shudder beneath you as you say that but, as you lean back, you can still see a bit of hesitation.");
			writeText("Of course, seeing as he's still in trance...");
			writeSpeech("player","","...and the entire time I'm doing it, you'll be completely honest with your feelings and desires.");
			writeText("You trace a thin line along housekeepF's jaw.");
			writeSpeech("player","","And that's an <i>order,</i> my slutty little maid.");
			writeText("You can feel him shudder when you say that, housekeepF nodding slightly.");
			writeSpeech("housekeep","","Yes, *Master...~!");
			writeFunction("writeEvent('housekeep3')","Get down and up close");
			break;
		}
		case "housekeepHypnoEncounter3" : {
			writeSpeech("player","","...I want you to tell me about what you do in your free time, when you're not working as a maid.");
			writeText("There's a moment of silence, before housekeepF nods.");
			writeSpeech("housekeep","","Most of the time that I'm not serving as a maid, I'm usually reading. It's often maid-related material, of course; I wish to improve and become a Perfect Maid, and improvement comes first from reflection.");
			writeSpeech("housekeep","","...But, I also enjoy playing a card game that someone introduced me to. I, um... play it more than might be proper, at times...");
			writeText("An embarrassed flush goes across his face as he says that, but his body still remains perfectly still.");
			writeSpeech("player","","So you read fetish-maid pornography...");
			writeSpeech("housekeep","","Of course.");
			writeSpeech("player","","...and play card games.");
			writeSpeech("housekeep","","Y-Yes...");
			writeSpeech("player","","And it's the <i>second one</i> that you find more embarrassing.");
			writeText("housekeepF's voice takes on a firmer tone for a moment as he replies,");
			writeSpeech("housekeep","","No one should ever feel ashamed for trying to improve themselves in their career. It's something to be proud of, regardless of whatever that profession may be.");
			writeSpeech("player","","That's... a very true statement. You have an excellent work ethic, housekeepF.");
			writeText("He smiles a bit wider, enjoying the praise.");
			writeText("Anyway... Seeing as the hypnosis seems to have set in, albeit in a different way from usual, it's probably best to finish with the original plan before moving on to the fun part.");
			writeText("...Still, if you're going to test the trance, might as well go all out...");
			writeSpeech("player","","Since you enjoy being a maid so much, it's only logical that you could waive the fee for your services for the opportunity to improve as a maid, right?");
			writeSpeech("housekeep","","...That sounds reasonable.");
			writeText("housekeepF nods gently.");
			writeSpeech("housekeep","","As long as you're helping me improve as a maid, I could waive the fee.");
			writeSpeech("player","","Neat.");
			writeText("...Huh.");
			writeText("That went over pretty well, actually. It wasn't that much of a test, actually...");
			writeSpeech("player","","I was expecting that to take more finagling, but this is probably fine...?");
			writeText("Though, you are a bit curious about what he means by improve...");
			writeSpeech("player","","What kind of things are you looking to improve? Anything specific?");
			writeSpeech("housekeep","","There are several... <i>niche</i> magazines I've read that discuss certain services.");
			writeText("housekeepF's expression doesn't change, but his face flushes a bit more.");
			writeSpeech("housekeep","","It could take a little while to prepare for some of them, though. I could attempt to requisition an outfit or two, for example.");
			writeText("Requisition? Weird phrasing, but...");
			writeSpeech("player","","You mean like a bunny-girl outfit?");
			writeSpeech("housekeep","","...!");
			writeText("You can see his back just barely straighten up.");
			writeSpeech("housekeep","","That would be one example, yes.");
			writeText("...Ah, wait.");
			writeText("Ever since the hypnosis started, he's spoken a bit more formally, and with less hesitation...");
			writeSpeech("player","","...housekeepF.");
			writeSpeech("housekeep","","Yes, *Master?");
			writeSpeech("player","","You're not actually hypnotized. If I had to guess, you're paraphrasing a magazine or something you read.");
			writeText("It's not a question, and there's a momentary silence.");
			writeSpeech("housekeep","","...I apologize, *Master.");
			if(checkTrust('tomgirl') >= 2){
				if(checkTrust('meji') > 20 && checkTrust('meji') != 40)
					writeText("Well, shit. In hindsight, not everyone is going to be as easy as mejiF or tomgirlF, but still...");
				else
					writeText("Well, shit. In hindsight, not everyone is going to be as easy as tomgirlF, but still...");
			}
			else if(checkTrust('meji') > 20 && checkTrust('meji') != 40)
				writeText("Well, shit. Obviously, not everyone is going to be as easy as mejiF, but still...");
			else if(checkTrust('neet') >= 60)
				writeText("Well, shit. Maybe he's just not comfortable enough around you, like with neetF? But still...");
			else
				writeText("Well, shit. There are obviously going to people who are more resistant, but still...");
			writeText("Well, something seems a bit off, but that just means that it'll require a different approach.");
			writeSpeech("player","","It's fine. It'll probably be easier for you the more time you spend around me, so I'll just have to call on you more, I suppose.");
			writeText("housekeepF purses his lips for a moment before nodding.");
			writeSpeech("player","","Now... You were saying something about being excited over a bunny-girl outfit?");
			writeText("He quickly perks up, his face flushing again, but his tone remaining collected... Mostly.");
			writeSpeech("housekeep","","A-Ah, no. I was just saying that I could requisition an outfit. That is, if <i>you</i> were interested in it, *Master.");
			writeText("You hold off on replying for a few moments, watching him slowly get redder.");
			writeSpeech("housekeep","","...And I would like to try wearing one, yes.");
			writeSpeech("player","","I thought you might. When you can get one, I'd be happy to see you wearing it.");
			writeSpeech("housekeep","","Of course.");
			writeText("housekeepF gives a small curtsy before standing up a bit straighter.");
			writeSpeech("housekeep","","In the meantime, though, was there anything you wanted me to do for you tonight?");
			writeFunction("writeEncounter('housekeepSexMenu')", "Do sexual things");
			writeFunction("writeEncounter('housekeepCleanHypno')", "Just some tidying up will be fine");
			break;
		}
		case "housekeepCleanHypno" : {
			writeSpeech("player","","Just some tidying up will be fine for tonight.");
			writeText("There's a small flash of disappointment across housekeepF's face, but he quickly smiles.");
			writeSpeech("housekeep","","Then I'll be sure to make sure everything is spotless for you, *Master~!");
			writeText("He gives another small curtsy as he begins examining the room, dusting, wiping, and tidying everything diligently.");
			writeText("It isn't long before he finishes up, at which point he prepares to head out.");
			writeText("As he slides on his shoes, he smiles over his shoulder to you.");
			writeSpeech("housekeep","","I'll see you next time you call - have a wonderful night, *Master!");
			writeSpeech("player","","You too, housekeepF. Stay safe.");
			writeSpeech("housekeep","","Haah~ Don't worry about that sort of thing. I'm always safe!");
			writeText("He has a slight knowing smile as he steps out the door, leaving you in a freshly cleaned, vaguely lavender-scented room.");
			writeFunction("changeLocation(data.player.location)", "Get ready for the night");
			break;
		}
		case "housekeepBlowjob1" : {
			if(checkFlag("housekeep","BlowHim1") != true)
				addFlag("housekeep","BlowHim1");
			writeSpeech("player","","I was thinking a blowjob would be pretty good.");
			writeText("housekeepF smiles widely, his tongue running across his lips.");
			writeSpeech("housekeep","","Of course, *Master~");
			if(galleryCheck("housekeep1")){
				writeText("He steps towards you, but you raise your hand to stop him and smile back.");
				writeSpeech("player","","Actually, I want to blow <i>you</i> this time, housekeepF.");
			}
			else{
				writeText("He steps towards you, but you raise your hand to stop him.");
				writeSpeech("player","","Actually, I want to blow <i>you,</i> housekeepF.");
			}
			writeSpeech("housekeep","","...");
			writeText("There's no response for several seconds, a confused look across his face.");
			writeSpeech("player","","As in, I want you to pull out your cock and let me-");
			writeSpeech("housekeep","","A-Ah!");
			writeText("housekeepF stands up straighter, looking a bit conflicted now as he shakes his head.");
			writeSpeech("housekeep","","It is the duty of the maid to service their *Master. I couldn't possibly have you do such a thing!");
			writeSpeech("player","","Let me re-word it, then.");
			writeText("You lean forward, your hand resting on his thigh.");
			writeSpeech("player","","I want to know whether you <i>want</i> me to blow you.");
			writeSpeech("housekeep","","...");
			writeText("He squirms in place just a little bit, the fidgeting increasing as you carefully bring your hand to his chin.");
			writeText("His breathing starts to get heavier as you focus entirely on him, smiling down at him.");
			writeSpeech("player","","You see, I'm not usually one to get too stuck on propriety if it means not having fun. That's why...");
			writeText("You lean in closer, your faces now just inches apart.");
			writeSpeech("player","","...I want you to tell me what you, housekeepF, want me to do.");
			writeText("His focus is entirely on your face, moving from your eyes, down to your lips, and then back up.");
			writeSpeech("player","","And remember... A good maid always responds honestly to his *Master, don't they?");
			writeText("It takes a moment, but housekeepF nods.");
			writeSpeech("housekeep","","I want you to... <i>blow me...</i> But a maid's pleasure should be secondary to their *Master's, so-");
			writeSpeech("player","","So you would only do it if it would please me?");
			writeText("He hesitates before nodding, and you chuckle, leaning just barely past him.");
			writeText("Your lips brush up against his ear as you whisper,");
			writeSpeech("player","","Then believe me when I say I'm going to enjoy <i><b>every second </b></i>of this, housekeepF.");
			writeText("You can feel his body shudder beneath you as you say that but, as you lean back, you can still see a bit of hesitation.");
			writeSpeech("player","","...and the entire time I'm doing it, I want you to be completely honest with your feelings and desires.");
			writeText("You trace a thin line along housekeepF's jaw.");
			writeSpeech("player","","And that's an <i>order,</i> my slutty little maid.");
			writeText("You can feel him shudder when you say that, housekeepF nodding slightly.");
			writeSpeech("housekeep","","Yes, *Master...~!");
			writeFunction("writeEvent('housekeep3')","Get down and up close");
			break;
		}
		case "housekeepBlowjob2" : {
			if(checkFlag("housekeep","BlowHim1")){
				removeFlag("housekeep","BlowHim1");
				addFlag("housekeep","BlowHim2");
			}
			writeSpeech("player","","How does another blowjob sound, housekeepF?");
			writeText("housekeepF's face reddens a bit.");
			if(galleryCheck('housekeep1') != true){
				writeSpeech("housekeep","","If that's your request, then I'd be happy to~");
				writeSpeech("player","","Absolutely. Besides...");
				writeText("You smirk at him a bit, shifting in place smugly.");
				writeSpeech("player","","It's your job as a maid to satisfy your *Master's desires, right?");
				writeText("housekeepF smiles wryly.");
			}
			else{
				writeSpeech("housekeep","","Ah, do you mean you want to <i>receive</i> another one, or...?");
				writeText("You smirk at him a bit, shifting in place smugly.");
				writeText("housekeepF responds by smiling, shaking his head wryly as he leans back.");
			}
			writeSpeech("housekeep","","Then in that case, forgive me for being a bit excited~");
			writeEvent("housekeep3-1");
			break;
		}
		case "housekeepBlowjobSwallow" : {
			writeText("Hearing that, you try to maintain the same speed as you bob up and down, running your tongue along his shaft as your hands tightly grasp his thighs.");
			writeText("You hear his moans peak as he presses his hands against his hips, trying and failing to hold back as he rolls his pelvis forward, breathy moans spilling out as his spills his load.");
			writeText("The first few ropes spatter against the back of your mouth, feeling warm and a nice kind of sticky as he pulls his hands away from his hips to run them through your hair.");
			writeText("You're half-expecting something bitter, but it's surprisingly not. It's definitely still cum, but there's a faintly pleasant sweetness to it that lingers for just a few seconds on your tongue.");
			writeText("You're honestly not too sure how long he was cumming, or even when you started swallowing, but when he finally finishes, it's with a deeply satisfied sigh.");
			writeText("You can feel housekeepF's hand running gently through your hair, a surprisingly pleasant feeling as he begins to collect himself, his tone still a bit dopey.");
			writeBig("images/housekeep/blowHim5.jpg","Art by Kinta no Mousou");
			writeSpeech("housekeep","","Thank you so much, *Master~... You were incredible~");
			writeText("He shifts forward a bit, the feeling of his lips pressing gently on the top of your head as he giggles and tries to breathe deeply.");
			writeSpeech("player","","It was my pleasure, housekeepF.");
			writeText("Standing up, you feel surprisingly refreshed and energetic... Probably just from the arousal of the situation, though.");
			writeText("Even more surprisingly, you feel pretty satisfied...? Or maybe 'content' is the better word? You don't really feel like continuing, which... seems like how housekeepF is feeling too, actually.");
			writeText("Standing up, you run your own hands through his hair as you look at him.");
			writeSpeech("player","","You look like you really enjoyed that. You good?");
			writeSpeech("housekeep","","Mm~ Just... need a second, that's all. You really were great~");
			writeSpeech("player","","Glad to hear that. I had fun too - you make some really nice noises when you're turned on.");
			writeSpeech("housekeep","","Haa... You tease~.");
			writeText("housekeepF lightly swats your thigh, giggling a bit before starting to stand.");
			writeText("He stretches his back a bit, an almost mewling-like sound coming from him as he stretches his arms above his head.");
			writeSpeech("housekeep","","Ah, one second...");
			writeText("He gently brings his hand to your chin, wiping a small bit of cum away with his thumb as he looks you over.");
			writeSpeech("housekeep","","Looks like I might've enjoyed myself a bit <i>too</i> much there...");
			writeSpeech("player","","It's fine. If you had fun making it, then it's probably worth a little bit of cleanup.");
			writeSpeech("housekeep","","That's true... Maybe next time, I'll be cleaning up <i>your</i> cum~");
			writeText("housekeepF smiles wryly, leaning up on his tiptoes to whisper breathily in your ear,");
			writeSpeech("housekeep","","I know I'd certainly love making <i>that</i> mess.");
			writeText("He gently blows on your earlobe, a pleasant chill going down your spine as he drops back down, reaching into his apron before pausing.");
			writeSpeech("housekeep","","Ah... Actually, I suppose there's nothing else for me to clean, is there? Since you... Y'know.");
			writeText("Looking around, he seems to think for a moment.");
			writeSpeech("housekeep","","I'll just do some quick dusting, I suppose. I'll make sure everything is nice and clean for you, *Master!");
			writeText("With that, he gives a quick little curtsy and gets to work checking every nook and cranny for even a hint of dust.");
			writeText("While he does that, you feel like putting in some effort yourself, remembering a couple of books you meant to reorganize last week...");
			writeText("...");
			writeText("It isn't long before the area is completely cleansed of dust. Your personal space looks pretty much the same, but some of the books beneath the bed have been reorganized a little.");
			writeText("Now finished, housekeepF looks up at you with a smile, his hands folded in front of him.");
			writeSpeech("housekeep","","Unfortunately, I <i>do</i> have to head out now, but I really enjoyed this. Thank you again, *Master.");
			writeSpeech("player","","No problem, and I'm glad you had fun. It's definitely a good idea to try new things every once in a while, I think.");
			writeSpeech("housekeep","","I agree completely.");
			writeText("As he heads towards the door, he smiles over his shoulder to you.");
			writeSpeech("housekeep","","I'll see you next time you call - have a wonderful night, *Master!");
			writeSpeech("player","","You too, housekeepF. Stay safe.");
			writeSpeech("housekeep","","Haah~ Don't worry about that sort of thing. I'm always safe!");
			writeText("He has a slight knowing smile as he steps out the door, leaving you in a freshly cleaned, vaguely lavender-scented room.");
			writeFunction("changeLocation(data.player.location)", "Get ready for the night");
			break;
		}
		case "housekeepBlowjobDodge" : {
			writeText("You pull your mouth back from his shaft, your hand moving to grasp it as he starts to tense up, his dick expanding a bit in your hand.");
			writeText("You hear his moans peak as he presses his hands against his hips, trying and failing to hold back as he rolls his pelvis forward, breathy moans spilling out as his spills his load.");
			writeText("He ends up spraying his load pretty far across the floor, a mess you imagine housekeepF will take pleasure in cleaning, even as his hands finally leave his hips to run through his own hair as he spurts again and again.");
			writeText("You can see each pearly-white rope shoot out right in front of you, spattering the floor as you jerk every drop out of housekeepF's shaft, just continuing to gently squeeze and stroke until he's stopped cumming.");
			writeText("When he's finally finished, the scent of arousal and cum still thick in the air, you can hear an almost dopey giggle from housekeepF as you gently pull your hand away from his softening penis.");
			writeSpeech("housekeep","","Thank you so much, *Master~... You were incredible~");
			writeText("You can feel housekeepF's hand running gently through your hair, a surprisingly pleasant feeling as he tries to collect himself.");
			writeText("He shifts forward a bit, the feeling of his lips pressing gently on the top of your head as he giggles and breathes slowly and deeply.");
			writeText("You stand up slowly, responding,");
			writeSpeech("player","","It was my pleasure, housekeepF.");
			writeText("When you get up, you feel surprisingly refreshed and energetic... Probably just from the arousal of the situation, though.");
			writeText("Even more surprisingly, you feel pretty satisfied...? Or maybe 'content' is the better word? You don't really feel like continuing, which... seems like how housekeepF is feeling too, actually.");
			writeText("Standing up, you run your own hands through his hair as you look at him.");
			writeSpeech("player","","You look like you really enjoyed that. You good?");
			writeSpeech("housekeep","","Mm~ Just... need a second, that's all. You really were great~");
			writeSpeech("player","","Glad to hear that. I had fun too - you make some really nice noises when you're turned on.");
			writeSpeech("housekeep","","Haa... You tease~.");
			writeText("housekeepF lightly swats your thigh, giggling a bit before starting to stand.");
			writeText("He stretches his back a bit, an almost mewling-like sound coming from him as he stretches his arms above his head.");
			writeSpeech("housekeep","","Alright~! Now, to clean up my mess.");
			writeText("With a wry smile, he leans up on his tiptoes to whisper breathily in your ear,");
			writeSpeech("housekeep","","Or should I say <i>our</i> mess, *Master~?");
			writeText("He gently blows on your earlobe, a pleasant chill going down your spine as he drops back down, reaching into his apron.");
			writeSpeech("player","","And you call <i>me</i> a tease?");
			writeText("housekeepF glances over his shoulder at you saucily.");
			writeSpeech("housekeep","","I'll admit to being a bit guilty of that myself. Maybe next time, you can punish me for it?");
			writeText("With that, he kneels down to start cleaning up the cum, when-");
			writeSpeech("housekeep","","<i><b>NN...~!</b></i>");
			writeText("The quick slap across his ass catches him off-balance, his thoaty moan cut short as he falls forward a bit.");
			writeText("After another moment, he shudders as he rights himself, an amused look on his face as you see that he fell face-first into the cum, and looks that much more excited for it.");
			writeSpeech("housekeep","","...Thank you, *Master~!");
			writeText("He dabs a bit of it off of his face before turning back to the carpet, though he seems satisfied to leave a bit on his cheek.");
			writeText("While he does that, you feel like putting in some effort yourself, remembering a couple of books you meant to reorganize last week...");
			writeText("...");
			writeText("By the time the floor is all clean (probably cleaner than before the spillage), you end up with a rather organized personal space and a proud-looking maid standing above the cleanliness.");
			writeSpeech("housekeep","","There, all clean!");
			writeText("housekeepF looks up at you with a smile, his hands folded in front of him.");
			writeSpeech("housekeep","","Unfortunately, I <i>do</i> have to head out now, but I really enjoyed this. Thank you again, *Master.");
			writeSpeech("player","","No problem, and I'm glad you had fun. It's definitely a good idea to try new things every once in a while, I think.");
			writeSpeech("housekeep","","I agree completely.");
			writeText("As he heads towards the door, he smiles over his shoulder to you.");
			writeSpeech("housekeep","","I'll see you next time you call - have a wonderful night, *Master!");
			writeSpeech("player","","You too, housekeepF. Stay safe.");
			writeSpeech("housekeep","","Haah~ Don't worry about that sort of thing. I'm always safe!");
			writeText("He has a slight knowing smile as he steps out the door, leaving you in a freshly cleaned, vaguely lavender-scented room.");
			writeFunction("changeLocation(data.player.location)", "Get ready for the night");
			break;
		}
		case "housekeepBlowjobEdge" : {
			if(checkFlag('housekeep','Edge') != true)
				addFlag('housekeep','Edge');
			writeText("housekeepF seems almost unreasonably sensitive down there, almost like he's totally unused to using his dick at all...");
			writeText("But now seems as good a time as ever to try giving him a bit of training.");
			writeText("You draw your head up and off of his cock with a gentle <b>*POP*</b>, housekeepF's dick bouncing slightly as he bites his lip and looks at you with a vague confusion.");
			writeText("Grasping his slick shaft, you start jerking him off a bit, teasing his head as you smirk.");
			writeSpeech("player","","You said you want to improve as a maid, right?");
			writeText("housekeepF nods shakily, his eyes trying to stay on yours, but occasionally darting down to the hand around his cock.");
			writeSpeech("player","","And all I need to do to make you <i>completely fall apart</i> is just start toying with your penis, making you <i>completely</i> forget proper decorum.");
			writeText("He opens his mouth to speak, but you use your free hand to drag your thumb across his tip, making him sharply gasp in pleasure. You can feel him start to twitch...");
			writeText("...before removing your hand entirely, a trail of spit and precum hanging between your fingers and his shaft for a moment before dropping to the floor.");
			writeSpeech("player","","You're supposed to be my maid, but you can barely handle a minute of playing before finishing. That's not very good at all, is it?");
			writeText("You slowly bring your hand back, tracing small, thin lines up and down his shaft as he tries desperately to hold still.");
			writeSpeech("housekeep","","N-No, *Master... I'm sorry-");
			writeText("You gently flick the middle of his shaft, making him jump in place.");
			writeSpeech("player","","Don't apologize. <i>Improve.</i>");
			writeText("You start moving your hand a bit faster, more of his precum starting to stream down as you rub at his cock. But once the twitching starts, you immediately pull away again.");
			writeSpeech("player","","It's a good thing you have a *Master that's willing to help you, isn't it?");
			writeText("housekeepF nods, maintaining eye contact even as his dick bounces around at the edge of orgasm.");
			writeSpeech("housekeep","","Thank you, *Master...!");
			writeSpeech("player","","Very good.");
			writeText("You tease the base of his shaft, pressing your fingertip against it gently for a moment before looking up.");
			writeSpeech("player","","You know, I might be a hypnotist, but that doesn't mean I'm psychic.");
			writeText("You speed up the teasing, watching as his cock starts bobbing again.");
			writeSpeech("player","","When you're about to cum, you should tell me. That way...");
			writeText("You move your other hand to his shaft, carefully massaging just below the tip...");
			writeSpeech("player","","...I know <i>exactly</i> when to stop.");
			writeText("housekeepF swallows loudly, nodding.");
			writeSpeech("housekeep","","Yes, *Master... I'm already about to-!");
			writeText("You pull your hand away, housekeepF's mouth shutting as he shifts in place.");
			writeSpeech("player","","Very good. Can I trust you to make sure I stop <i>every</i> time you're about to finish?");
			writeText("To his credit, housekeepF only looks conflicted for a moment before nodding.");
			writeSpeech("player","","Good.");
			writeText("You lean backwards, appreciating the small amounts of desperation in his eyes as he tries to take slow, deep breaths to control himself.");
			writeText("After a few more moments, he says,");
			writeSpeech("housekeep","","I'm... ready.");
			writeText("You remain still for a few more seconds, watching him hold still, before nodding.");
			writeText("Leaning forward, you run your thumb from his tip downward, tracing a line down to the base and back to his balls, stopping just before his hole.");
			writeText("You extend your tongue out, tracing the same line but from the base up, stopping just before the tip...");
			writeText("As you tease around the head, your lips just a fraction of an inch from his shaft, you hear him groan,");
			writeSpeech("housekeep","","S-Stop...!");
			writeText("You pull away, but gently flick his shaft again.");
			writeText("You narrow your eyes at him, and he corrects himself:");
			writeSpeech("housekeep","","Please stop, *Master...");
			writeText("You just nod once, idly waiting for a moment...");
			writeText("When he tells you he's ready, you repeat the process, shifting the type of sexual attack each time - sometimes focusing on his tip, sometimes on his balls...");
			writeText("You lose track of how many times he's reached the edge, just to freeze an inch away as he humbly requests you to stop.");
			writeText("But he always does, even as he soaks his panties in an incredible amount of pre...");
			writeText("The fact that he hasn't started begging is a testament to his devotion as a maid.");
			writeSpeech("player","","housekeepF.");
			writeSpeech("housekeep","","Yes, *Master...?");
			writeText("You gently rub at his tip with your finger, looking him in the eye.");
			writeSpeech("player","","You did well. You're a good maid.");
			writeText("He bites his lip sharply.");
			writeSpeech("housekeep","","T-Thank you, *Master...!");
			writeText("Bringing your hand to his shaft, you start to jerk him off quickly, your thumb teasing his head as you do.");
			writeSpeech("player","","Now beg for your reward.");
			writeText("You can see the dam finally break as housekeepF tenses up.");
			writeSpeech("housekeep","","Please, let me cum...! Make me cum, *Master! I want to cum so, so, <i><b>so</b></i> bad...! Please, please, please, please, <i><b>please...!</b></i>");
			writeText("He starts to twitch in your palm, and you smile.");
			writeSpeech("player","","Cum for your *Master.");
			writeText("And like that, the floodgates burst as his hips buck forward violently, almost like he's trying to fuck your hand as you milk his cock.");
			writeText("Short, gasping breaths accentuate each thick, pearly rope that spatters across the floor, housekeepF's hands tightly gasping the edge of the table as his eyes shut tight.");
			writeText("This goes on for a little while, practically soaking the floor in front of him as he empties his balls, before losing nearly all strength in his body.");
			writeText("He falls back gently, you making sure he doesn't hit his head as he falls back onto the table, his dick still twitching and dribbling out the occasional droplet of cum as his body gently quivers.");
			writeText("It takes a few seconds for him to even be able to form words but, as he does...");
			writeSpeech("housekeep","","T-Thank you, *Master...! You were <i><b>wonderful...</b></i>");
			writeSpeech("player","","You did very well, housekeepF. You're a good maid.");
			writeText("He moans slightly as you praise him, and you can see another small bead of cum dribble out from his tip.");
			if(data.player.location == "gallery"){
				writeText("With that, he seems pretty out of it and you gently run your hand through his hair while he recovers...");
			}
			else{
				writeText("Given that you're half-sure he just came so hard his brain's fried, you decide to give him a moment to recover.");
				writeText("You gently stroke his hair for a few moments as he gets his breathing under control, his eyes finally regaining their focus as he smiles up at you.");
				writeText("A minute or so of that later, and he sits up, stretching out his arms and back with that same mewling sound as before, though his smile does still look a little dopey from the pleasure.");
				writeSpeech("housekeep","","Jeez... You really know how to push a maid's limits, *Master.");
				writeText("You give an exhaggerated, theatrical bow.");
				writeSpeech("player","","I aim to please.");
				writeText("As you stand, you feel housekeepF give you a small kiss on the cheek.");
				writeSpeech("housekeep","","I look forward to my future maid training, then~");
				writeText("With that, he looks at the rather... <b>sizable</b> mess he made, nodding resolutely.");
				writeSpeech("housekeep","","You go shower, *Master. This... is going to take a little while.");
				writeSpeech("player","","I could help, if you-");
				writeText("housekeepF gives a soft laugh, shaking his head.");
				writeSpeech("housekeep","","It is a maid's pleasure to clean up these kinds of messes, *Master~ Don't you worry about me.");
				writeSpeech("player","","If you say so. I'll leave you to it, then...");
				writeText("...");
				writeText("By the time you're finished with the shower, it seems housekeepF just finished the cleaning, stowing his small cloth and spray bottle as he stands near the door.");
				writeSpeech("player","","You heading out?");
				writeText("He nods.");
				writeSpeech("housekeep","","Excellent timing - I wanted to wish you a wonderful night before going, *Master.");
				writeSpeech("player","","You too, housekeepF. Stay safe out there.");
				writeText("housekeepF flashes that same knowing grin as he nods.");
				writeSpeech("housekeep","","You shouldn't worry about that, but I promise I will, *Master.");
				writeText("With that, he slides on his shoes and heads out the door.");
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "housekeepBlowjobOverload" : {
			writeText("housekeepF seems incredibly sensitive down there - far more than most people would be. So it only seems reasonable to take advantage of that fact...");
			writeSpeech("housekeep","","<i>Nngh~...!</i>");
			writeText("He barely contains his moaning as you move a finger to press against his hole, the other hand teasing his balls while you drag your tongue along his shaft.");
			writeText("Then, wordlessly and without warning, you take his entire shaft into your mouth.");
			writeText("housekeepF sharply inhales through his teeth as you slip your finger in, pressing against his prostate with your fingertip while you drag your lips up and down his cock.");
			writeText("Turning your head slightly as you go up and down, you take pleasure in every squeak and moan as housekeepF squirms beneath you, your tongue lapping against his sensitive head every time you get to the tip, before you push back down, pressing your tongue against him as you drag down.");
			writeSpeech("housekeep","","F-From both sides, i-it's...!");
			writeText("You don't let him finish, a second finger sliding into his ass as you keep massaging his p-spot, the words falling apart into moans.");
			writeText("As you pick up speed little by little, the ragged moans turn into the only words he can still form:");
			writeSpeech("housekeep","","P-Please...! Please, *Master...!");
			writeText("You have half a mind to slow down, or even stop completely, just to hear him ask <b>properly,</b> but seeing as you're the one making it so he can barely speak...");
			writeText("A little mercy never hurt anyone.");
			writeText("You use your spare hand to gently squeeze his balls, slide a third finger into ass, and look up into his eyes.");
			writeText("He takes that for the permission it is, and you feel his cock start to swell as housekeepF lets out a sharp,");
			writeSpeech("housekeep","","<i><b><font size='+1'>HAA~!</font></b></i>");
			writeText("housekeepF starts bucking his hips forward, your fingers milking him carefully as you keep bobbing your head up and down, refusing to slow down.");
			writeText("He just keeps cumming rope after rope, your fingers stretching his hole and teasing his prostate while your other hand massages his balls.");
			writeText("Even when he stops spurting cum, you keep going a little bit longer, making absolutely sure he's <i>completely</i> drained before you finally pull away.");
			writeText("housekeepF practically collapses backwards, laying down on the small table as he stares vaguely at the ceiling with unfocused eyes, his breathing deep and heavy.");
			writeSpeech("player","","You look like you enjoyed that.");
			writeSpeech("housekeep","","<i><b><font size='-1'>Hyeah...!</font></b></i>");
			writeText("His eyes gently shut for a moment as he tries to catch his breath.");
			writeSpeech("housekeep","","I just... n-need a minute...");
			writeSpeech("player","","I have that effect on people.");
			if(data.player.location == "gallery")
				writeText("housekeepF gives a soft laugh as he relaxes completely, taking some time to recover...");
			else{
				writeText("housekeepF gives a soft laugh as he relaxes completely, leaving you feeling surprsingly content again, and with a pretty solid urge to get something done.");
				writeText("Might as well make good use of the time, right?");
				writeText("...");
				if(checkFlag('housekeep','Overload')){
					writeText("There's not a lot left to organize, so you mostly just spend your time replying to emails and organizing your schedule.");
					writeText("After a minute or so of that, you see housekeepF start to sit up, stretching his arms and back with the same mewling sound as before.");
				}
				else{
					writeText("You end up finishing all of your organizing pretty efficiently. You even find an old textbook from back when you first started learning to become a counselor!");
					writeText("Taking a look through the old thing might remind you of some old tips or tricks you've forgotten, so you end up setting it on your desk.");
					writeSpecial("You found a Counseling Textbook!")
					addItem("Counseling Textbook", true, "scripts/gamefiles/items/counselingTextbook.jpg");
					writeText("As you set it down, you see housekeepF start to sit up, stretching his arms and back with the same mewling sound as before.");
				}
				writeSpeech("housekeep","","Haah... I need to work on my endurance more, don't I?");
				writeText("He shakes his head ruefully, rolling his shoulders a bit to release the tension of gripping the table so tightly.");
				writeText("When he's finished, he nods resolutely, stands, and looks around. For the most part, there was no mess, aside from a few drops of spit that dribbled down his practically-soaked panties...");
				writeSpeech("housekeep","","Not much to clean, hm...?");
				writeText("He shrugs slightly, looking over at you.");
				writeSpeech("housekeep","","I'll just do a quick tidying while you shower, *Master. Everything will be spotless by the time you get out!");
				writeSpeech("player","","Sounds good to me. I could use a quick rinse...");
				writeText("...");
				writeText("Just like he said, housekeepF has everything perfectly clean by the time you come out of the shower, with him standing near the door. Looks like he was waiting for you before leaving.");
				writeSpeech("player","","You heading out?");
				writeText("He nods.");
				writeSpeech("housekeep","","Yes. I just wanted to wish you a wonderful night, *Master.");
				writeSpeech("player","","You too, housekeepF. Stay safe out there.");
				writeText("housekeepF flashes that same knowing grin as he nods.");
				writeSpeech("housekeep","","You shouldn't worry about that, but I promise I will, *Master.");
				writeText("With that, he slides on his shoes and heads out the door.");
			}
			if(checkFlag('housekeep','Overload') != true)
				addFlag('housekeep','Overload');
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "housekeepChatHeaven" : {
			if(checkFlag("housekeep","Asked4")){
				removeFlag("housekeep","Asked4");
				addFlag("housekeep","Asked5");
			}
			if(!checkFlag("housekeep","Heaven")){
				addFlag("housekeep","Heaven");
			}
			writeHTML(`
				define h: = sp housekeep;
				player Can you tell me about Heaven?
				t There's a momentary silence, before housekeepF cocks his head to the side.
				h: ...Huh. I thought I was keeping it subtle enough not to be noticed.
				player I had some help figuring it out.
				h: Ahh. The baku.
				t housekeepF seems to mull over that for a moment, before giving a small nod.
				h: Well, if you're curious, then I see no reason not to share.
				t He carefully sits down in front of you, thinking over his words. His hands fold over his lap, fingers intertwining as he shifts in place just barely.
				h: ...Heaven is a beautiful place. It's filled with all sorts of people like myself, constantly striving towards self-improvement through the accumulation of knowledge and ability, refining ourselves to become as close to perfection as is possible for ones such as ourselves.
				h: That's where I learned all sorts of things, such as creating the body oil from before, managing financial information, constructing high-quality upholstery, and quite a bit more. There was even a hypnotism club, but I hadn't attended that one before coming here.
				player Why come down here in the first place? Sounds like Heaven's a pretty cushy gig, all things considered.
				h: Serving my fellow angels was certainly fun, but it lacked a certain sense of... selfishness, I suppose. Aside from Razzy, at least, but he's always too busy writing syllabi to pay that much attention to the orders he's giving.
				player So you're saying it was an entire world of bottoms, and you're down here because humans will selfishly demand things of you?
				h: Precisely, yes!
				t housekeepF shifts in place, leaning towards you a bit.
				h: And since I read that maids are people who serve others, that seemed like the perfect way of finding humans that would selfishly let me serve them. After all, someone who wants to be called '*Master' <i>must</i> be a top!
				player Huh. Well, makes sense to me. Anything else that stands out about Heaven?
				h: Not particularly. Everyone runs and participates in clubs all of the time, so there isn't much else that comes to mind.
			`);
			writeFunction("writeEncounter('housekeep3C')", "Return");
			break;
		}
		case "housekeepEnding" : {
			if(!checkFlag('housekeep','Cancel')){
				writeHTML(`
					define hpk = sp housekeep;
					player Actually, I wanted to talk to you about potentially making our situation a bit more... <i>permanent.</i>
					t housekeepF raises an eyebrow curiously.
					player What are your thoughts on becoming my live-in maid?
					t He pauses at that, his eyes going wide for a moment.
					hpk I... hadn't thought about that, actually, but now that you've brought it up I am <i>quite</i> interested. I imagine it would require some small changes in how things have been, such as you moving somewhere large enough for the both of us to live comfortably...
					t housekeepF's eyes narrow in thought.
					hpk And of course, I would no longer need to run Maid in Heaven... though I'm certain there will be others who would <i>love</i> to continue it.
					t With a firm nod, housekeepF looks up at you brightly.
					hpk If you're already in a position where you could easily move to a larger apartment or home, then I would be more than happy to do so immediately. Though, if you need time to prepare for such a thing, that's more than fine as well.
				`);
			}
			else{
				writeHTML(`
					define hpk = sp housekeep;
					player Actually, I wanted to talk to you again about potentially making our situation a bit more... <i>permanent.</i>
					t housekeepF nods.
					hpk And you're in a position where you're confident that you're ready to move?
				`);
			}
			writeFunction("writeEncounter('housekeepEndingA')", "You're more than ready", "blue");
			writeFunction("writeEncounter('housekeepEndingCancel')", "On second thought...");
			break;
		}
		case "housekeepEndingCancel" : {
			if(!checkFlag('housekeep','Cancel'))
				addFlag('housekeep','Cancel');
			writeHTML(`
				define hpk = sp housekeep;
				player Well, when you put it like that... It might be better if I hold off for a bit longer.
				t housekeepF nods with that same smile.
				hpk Then in that case, I'll gladly wait until such time you're ready to extend the offer again. I appreciate it, by the way~
			`);
			writeFunction("writeEncounter('housekeep3C')", "Return");
			break;
		}
		case "housekeepEndingA" : {
			writeHTML(`
				define hpk = sp housekeep; 
				player I'm quite ready for that.
				t housekeepF looks positively giddy upon hearing you.
				hpk Then in that case, there's only one thing to do! We can begin preparations for the move immediately~
				t You smile at the adorable, excited maid as he scampers about, immediately taking inventory of all of the items in the area.
				t Stepping around, you pull things out for him to note, as well as look for those boxes you used when you moved in...
				...
				t The sun has set by the time the two of you finish taking inventory, and almost nothing is boxed yet... but the excitement hasn't faded at all. If anything, continuously seeing housekeepF keep bending over only served to excite you further.
				t And from the way he would sway his hips and how his panties seem to be pulled up as tight as possible to show off, it's clear he knows where your eyes have been going.
				player Hey housekeepF...
				t You bring your hand up to his waist, fingers trailing along the side as you do.
				player How about a short break?
				t housekeepF throws you a teasing smile.
				hpk You know, that actually sounds quite good~
				t At that, he grabs your hand and pulls you down a bit, making you sit in place.
				hpk I'll be ready in just a moment~
				t With that, he darts away, flicking off the lightswitch on his way out. The moonlight still illuminates the room, and it seems like he might be trying for a surprise...?
				t It doesn't take long, though, for him to come out with a wide smile... and nothing else.
				im ending0.jpg
				t He takes a slow, deep breath, leaning against the door. It seems like he's unused to wearing absolutely nothing, going by the light blush on his face.
				t A moment later, his eyes open and his mouth spreads into a smile as he approaches you. He kneels down in front of you in the moonlit-room, the tell-tale twitch of his cute cock showing his excitement.
			`);
			writeFunction("writeEvent('housekeepEnding')", "Have fun with him");
			break;
		}
		case "housekeepEndingAA" : {
			if(checkFlag('housekeep','Heaven')){
				if(checkFlag('housekeep','endingB'))
					writeEncounter("housekeepEndingChoice");
				else
					writeEncounter('housekeepEnding2');
			}
			else
				writeEncounter('housekeepEnding1');
			break;
		}
		case "housekeepEndingChoice" : {
			writeSpecial("Hello and welcome back to Anri's endings! Since you've unlocked both version, which would you like to see?")
			writeFunction("writeEncounter('housekeepEnding1')", "Live-In-Maid Ending");
			writeFunction("writeEncounter('housekeepEnding2')", "Living with an Angel Ending");
			break;
		}
		case "housekeepEnding1" : {
			if(!checkFlag('housekeep','endingA'))
				addFlag('housekeep', 'endingA');
			if(checkFlag('housekeep','endingB'))
				addFlag('housekeep', 'complete');
			writeHTML(`
				define hkp = sp housekeep;
				t You roll your shoulder a bit as you look out the window of the apartment. It's a small place, but it seems that housekeepF must've rubbed off on you since you don't mind the more humble living-space.
				t Plus, the perks of a high-up apartment is that despite the number of cars that drive by, you can't hear most of them.
				hkp Do you see something interesting out there?
				player Not really, no.
				t You smirk, turning back to housekeepF.
				player Nothing as pleasant to look at as you, at least.
				t Even after all this time, it's still easy to make housekeepF flush a bit, his hands folded neatly in front of him.
				hkp Always quick with a reply, aren't you~? Did you have any plans for the day?
				t You shrug and move over to the couch, sitting down comfortably.
				player Nope, not really. Gotta take your lazy days when you can get 'em, right?
				hkp Rest is an integral part of growth as well, yes.
				t As he takes a seat next to you, his thigh brushing against yours as he sits down, you idly wonder how housekeepF would sound if you tried to get him to speak casually.
				t ...The mental image of him saying "Whoa broseph, that's mega-poggers bruh" immediately has you push the thought aside, just enjoying housekeepF for how he is.
				player Hey, what's that card game you liked again? Do you have some spares I could use? I'm interested in trying it out, if you're fine teaching me.
				t He perks up significantly, standing up sharply.
				hkp Absolutely, yes! I'll get them now - the rules are pretty simple, you just need to compare the numbers...
				t In his excitement, it seems that housekeepF forgot that you can't exactly hear him particularly well from another room given how he refuses to raise his voice.
				t Ah well, you'll just have him repeat it when he comes back. Given how excited he is, you doubt he'll mind...
			`);
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "housekeepEnding2" : {
			if(!checkFlag('housekeep','endingB'))
				addFlag('housekeep', 'endingB');
			if(checkFlag('housekeep','endingA'))
				addFlag('housekeep', 'complete');
			writeHTML(`
				define hkp = sp housekeep;
				t You roll your shoulder a bit as you lean back into the couch you're seated in. It's a small place, but it seems that housekeepF must've rubbed off on you since you don't mind the more humble living-space.
				t Plus, the perks of a high-up apartment is that despite the number of cars that drive by, you can't hear most of them.
				t There's the familiar sound of the click of your lock, immediately followed by,
				hkp I'm back, *Master!
				player Welcome back. Everything's fine back home?
				t housekeepF sets down a bag as he smiles at you.
				hkp Yup! The hypnosis club was especially interested in talking with me thanks to your notes, and Razzy was very excited to overhaul the welcome syllabus. The Archangels also wanted to say that you're welcome to visit anytime.
				player Oh? Any specific reason?
				hkp Considering how they're always the ones stuck giving orders? I imagine they're just interested in being dominated. Considering that Gabriel has stayed the head of the various ropes-and-knots-related clubs...
				player Well, if you ever want to have a dinner party either here or there, you certainly won't have trouble convincing me.
				t housekeepF nods excitedly at that, neatly setting his shoes right against the wall as he checks his uniform for any dust methodically.
				hkp ...Excellent, not a single ruffle out from it's predetermined place~
				t As he takes a seat next to you, his thigh brushing against yours as he sits down, you idly wonder how housekeepF would sound if you tried to get him to speak casually.
				t ...The mental image of him saying "Whoa broseph, that's mega-poggers bruh" immediately has you push the thought aside, just enjoying housekeepF for how he is.
				player Hey, what's that card game you liked again? Do you have some spares I could use? I'm interested in trying it out, if you're fine teaching me.
				t He perks up significantly, standing up sharply.
				hkp Absolutely, yes! I'll get them now - the rules are pretty simple, you just need to compare the numbers...
				t In his excitement, it seems that housekeepF forgot that you can't exactly hear him particularly well from another room given how he refuses to raise his voice.
				t Ah well, you'll just have him repeat it when he comes back. Given how excited he is, you doubt he'll mind...
			`);
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "housekeep1", name: "First-Time Customer"},
	{index: "housekeep1-1", name: "A Second Blowjob"},
	{index: "housekeep2", name: "Bending Over the Sink"},
	{index: "housekeep2-1", name: "In the Kitchen Again"},
	{index: "housekeep3", name: "Giving a Blowjob"},
	{index: "housekeep3-1", name: "Giving a Second Blowjob"},
	{index: "housekeep4", name: "Bouncing Bunny Fun"},
	//{index: "housekeep4-1", name: "Breeding Bunny Round 2"},
	{index: "housekeep5", name: "Bikini Bathing Fun"},
	//{index: "housekeep5-1", name: "Second-Time Swimsuit"},
	{index: "housekeepEnding", name: "By the Evening's Light"},
];

function writeEvent(name) { //Plays the actual event.
	wrapper.scrollTop = 0;
	switch (name) {
		case "housekeep1": {
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","You're willing to accept any order, are you?");
			writeText("A smirk plays across his face.");
			writeSpeech("housekeep","","Almost any, yes. Of course, you have to be <i>very</i> explicit, to prevent any confusion.");
			writeSpeech("player","","Then how about we start with a blowjob?");
			writeText("He licks his lips.");
			writeSpeech("housekeep","","In that case, I'll make sure you're nice and clean <i>down there~</i>");
			if(data.player.gender == "man")
				writeText("With a sly smile, he presses his hand against your crotch, pulling down your zipper while his other hand slides down your abdomen.");
			else
				writeText("With a sly smile, he presses his hand against your crotch, his thumb hooking over your panties as he pulls them down.");
			writeText("When your cock flops out next to his face, a delighted look crosses his face.");
			writeSpeech("housekeep","","Ah, you certainly seem excited~");
			writeText("Pressing it close to his face, you hear him breathe deeply, before feeling his tongue.");
			writeBig("images/housekeep/1-3.jpg","Art by Kinta no Mousou");
			writeText("His hand dances along your shaft, the pad of his finger gently brushing along the tip as his tongue traces against the side of the shaft.");
			writeSpeech("housekeep","","Goodness, you have such a <i>beautiful</i> cock~...");
			writeText("His fingers keep moving up and down, his palm gliding against the underside of your cock as takes a deep breath in.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Thank you for letting me worship it, <i>*Master~</i>");
			else
				writeSpeech("housekeep","","Thank you for letting me worship it, <i>Mistress~</i>");
			writeBig("images/housekeep/1-4.jpg","Art by Kinta no Mousou");
			writeText("He gently presses his lips against your cock, kissing it up and down as he jerks off faster, spreading his spit and your precum up and down your dick.");
			writeSpeech("player","","O-Oh <i>fuck...!</i>");
			writeText("Between the alternating licking and kissing, the faster and faster jerking, and the soft moaning from underneath you, you're getting close fast...!");
			writeText("Almost like housekeepF can sense that, his breathing gets heavier as he focuses his kisses on your sensitive head.");
			writeText("A moment later, you feel yourself pass his lips as he takes your head into his mouth, his tongue still swirling against you as his fingers make a ring as he jerks you off.");
			writeText("He quickly starts to bob up and down, his hand trailing behind his mouth as he breathes in sharply...!");
			if(data.player.gender == "man")
				writeSpeech("player","","<i><b>Nngh...!</b></i>");
			else
				writeSpeech("player","","<i><b>NNGH~!</b></i>");
			writeText("Your hips buck forward as he pushes into you, but with his nose already pressed against your abdomen, you can't get any deeper.");
			writeText("He starts swallowing around your length, massaging you with his throat as you feel his tongue keep shifting around.");
			writeText("When he pulls himself off of your cock, it's with a resoundingly pleasant <i>pop</i> as he smirks at you.");
			writeSpeech("housekeep","","Nnn~... You know, a cock like this could make a <i>complete <b>mess</b></i> out of me, you know that?");
			writeText("housekeepF's other hand starts teasing your balls, the first returning to your shaft as he jerks you off, the wet sound only making it even more erotic.");
			writeSpeech("housekeep","","But even if you <i>did</i> mess me up, you wouldn't have to worry...");
			writeText("housekeepF's tongue slowly drags along the underside of your shaft, your precum smearing across his nose.");
			writeSpeech("player","","Shit, I'm...!");
			writeSpeech("housekeep","","Because I'd clean up <i>every last <b>drop~!</b></i>");
			writeSpeech("player","","<i><b>Cumming!</b></i>");
			writeBig("images/housekeep/1-6.jpg","Art by Kinta no Mousou");
			writeText("housekeepF's eyes go wide as you start to spurt, but it quickly gives way to a smile as he carefully strokes you, milking the cum out of your shaft.");
			writeText("When you're finished, most of it ends up on his hand, though as you recover from your orgasm, he picks up the bits that spurted onto your abdomen.");
			writeText("He smiles wide, raising his fingers to his mouth as he opens wide.");
			writeBig("images/housekeep/1-7.jpg","Art by Kinta no Mousou");
			writeSpeech("housekeep","","Geez... A beautiful cock, <i>and</i> you taste good~ If I'm not careful, <i>I'll</i> end up hooked on <i>you~!</i>");
			writeText("Scraping up the last of the cum and licking his hand clean, he bends forward a bit to give a firm kiss on your cockhead while looking you in the eye.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","I'm looking forward to playing with you more next time, <i>*Master~</i>");
			else
				writeSpeech("housekeep","","I'm looking forward to playing with you more next time, <i>Mistress~</i>");
			writeSpeech("player","","Holy crap... Where in the world did you learn to do that with your throat...?");
			writeText("He giggles, a finger delicately tracing your jaw.");
			writeSpeech("housekeep","","I get <i>very</i> enthusiastic when it comes to practicing my <i>services</i>. Call for me again, and I'll show you <i>exactly</i> how I mean.");
			writeText("With that, he takes a step back to appraise the room, the floor, and your body, before nodding.");
			writeSpeech("housekeep","","Just a reminder, that one was free, by the way... As long as you promise to call me back sometime~ You seem like you'll be fun to serve~!");
			writeSpeech("player","","I'll take that deal...");
			writeText("Nodding happily, housekeepF gives you a small little curtsy.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Then I'll be off, *Master~ Make sure to have some money when you call next time, okay? I want to make sure you can choose what would <i>satisfy you most~!</i>");
			else
				writeSpeech("housekeep","","Then I'll be off, Mistress~ Make sure to have some money when you call next time, okay? I want to make sure you can choose what would <i>satisfy you most~!</i>");
			writeText("Winking, he makes his way out of the house, leaving you feeling surprisingly satisfied for only having gotten a blowjob.");
			writeSpeech("player","","I am <i>so</i> having fun with that ass next time...");
			if(data.player.location == "gallery")
				writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "housekeep1-1" : {
			document.getElementById('output').innerHTML = '';
			writeText("You lean back on the bed, spreading your legs out a bit.");
			writeSpeech("player","","You said to be explicit, so how about you blow me again? You did a pretty good job last time.");
			writeText("housekeepF gives a short curtsy, his tongue wetting his lips a bit.");
			if(data.player.gender == "man"){
				writeSpeech("housekeep","","It would be my pleasure, *Master~ Just give me one moment to make sure I'm ready for you~!.");
				writeText("Reaching into the apron's waistband, he pulls out a small stick of chapstick.");
				writeText("He runs it along his lips, restoring the faintly glossy look as he smiles.");
				writeSpeech("housekeep","","There we go! Now, let's get to your <i>service, </i> *Master!");
				writeText("Like last time, he reaches forward and undoes your zipper gently, his other hand caressing your inner thigh.");
				writeText("A moment later, and your cock bounces out gently from your underwear as he pulls it down, the shaft resting gently across his face as he smiles up at you.");
				writeText("He takes a slow, deep breath, his face flushing slightly.");
				writeSpeech("housekeep","","Even the smell is wonderful... Thank you for letting me service your cock, *Master~!");
			}
			else{
				writeSpeech("housekeep","","It would be my pleasure, Mistress~ Just give me one moment to make sure I'm ready for you~!.");
				writeText("Reaching into the apron's waistband, he pulls out a small stick of chapstick.");
				writeText("He runs it along his lips, restoring the faintly glossy look as he smiles.");
				writeSpeech("housekeep","","There we go! Now, let's get to your <i>service, </i> Mistress!");
				writeText("Like last time, he reaches forward and slowly, teasingly pulls your panties lower, his other hand gently caressing your inner thigh.");
				writeText("A moment later, and your cock flops down gently as he toys with your skirt, your shaft resting gently across his face as he smiles up at you.");
				writeText("He takes a slow, deep breath, his face flushing slightly.");
				writeSpeech("housekeep","","Even the smell is wonderful... Thank you for letting me service your cock, Mistress~!");
			}
			writeText("Letting his tongue roll out, he starts at the base, teasing you with the tip while your cock rubs up against his face.");
			writeText("He moves one hand to start stroking you while he glides his tongue up and down your shaft, the other teasingly toying with your balls.");
			writeBig("images/housekeep/1-3.jpg","Art by Kinta no Mousou");
			writeText("His fingers keep slowly moving up and down your cock, perfectly controlled to make you want to buck your hips against his palm.");
			writeText("He gives another slow, sensual lick up your shaft, before gently kissing your sensitive head.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Are you enjoying yourself, *Master? Remember, if you want something, feel free to <i>take it~</i>");
			else
				writeSpeech("housekeep","","Are you enjoying yourself, Mistress? Remember, if you want something, feel free to <i>take it~</i>");
			writeFunction("writeEncounter('housekeepSecondBlowjobA')", "Let him control the pace");
			writeFunction("writeEncounter('housekeepSecondBlowjobB')", "Fuck his throat");
			break;
		}
		case "housekeep2" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","I want you to bend over.");
			writeText("A playful smile spreads across housekeepF's face, a finger going up to his face thoughtfully.");
			writeSpeech("housekeep","","Aha, I wonder why you would want such a thing~! But, as a maid...");
			writeText("Stepping just past you, he puts his hands against the counter, slowly leaning forward as he looks back to you.");
			writeSpeech("housekeep","","...I'm happy to follow orders~");
			writeText("You roll your eyes, your hands moving to pull your cock out.");
			writeSpeech("player","","Right, because you're such a <i>pure</i> and <i>innocent</i> maid.");
			writeSpeech("housekeep","","I'm glad you agree!");
			writeText("If it weren't for the look on his face, you'd think he was being serious...");
			writeText("Still, you move up against him, your cock rubbing against his ass as you grab onto him.");
			writeSpeech("player","","God, you look even better from this angle...");
			writeText("He stands up on his toes to help you line up, his head turning to face you with a smile.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","I'm ready whenever you are, *Master!");
			else
				writeSpeech("housekeep","","I'm ready whenever you are, Mistress!");
			writeText("Your hands run over his soft, smooth ass for a moment...");
			writeText("Before you thrust forward.");
			writeBig("images/housekeep/sink-1.jpg","Art by Kinta no Mousou");
			writeSpeech("housekeep","","<i>Haahn...~!</i>");
			writeText("His eyes flutter shut for a few moments, your cock sinking deep into him as he moans.");
			writeText("After a second, though, he refocuses as he looks into your eyes.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","I could hardly call myself a maid if I made my *Master do all the work~!");
			else
				writeSpeech("housekeep","","I could hardly call myself a maid if I made my Mistress do all the work~!");
			writeText("Saying that, you feel his ass start to squeeze down around you, your hands feeling the muscles of his bubble-butt as they tighten.");
			writeText("As you slowly draw back to continue thrusting, he clamps down even tighter, like it's unwilling to let you go.");
			writeBig("images/housekeep/sink-2.jpg","Art by Kinta no Mousou");
			writeSpeech("player","","You've got some good control...!");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","I'm glad to hear you think so, *Master~! But I can hardly accept that kind of praise...");
			else
				writeSpeech("housekeep","","I'm glad to hear you think so, Mistress~! But I can hardly accept that kind of praise...");
			writeText("housekeepF begins to smirk.");
			writeSpeech("housekeep","","...when we're only just getting started!");
			writeText("Straightening out his arms, he pushes his ass back, wiggling his hips around as your head rubs around inside of him.");
			writeText("His breathing gets a bit heavier as he rolls his hips around, smiling back at you.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Don't be afraid to get <i>rough,</i> *Master~!");
			else
				writeSpeech("housekeep","","Don't be afraid to get <i>rough,</i> Mistress~!");
			writeSpeech("player","","Be careful what you wish for...!");
			writeText("Gripping his ass tightly, you buck forward, a slight squeak coming from housekeepF as he bites his lip.");
			writeText("You start sawing into him quickly and roughly, the muffled slapping of his ass against your clothes filling the air as you fuck him.");
			writeText("As you pick up speed, the controlled tightening around your cock starts to lose a bit of its rhythm, but starts getting tighter as housekeepF starts breathing heavier.");
			writeBig("images/housekeep/sink-3.jpg","Art by Kinta no Mousou");
			writeSpeech("player","","Feels good enough that you're losing control already, huh?");
			writeText("He tries to collect himself, but his voice shudders as you thrust into him. Despite that, you can still hear the playfulness in his tone.");
			writeSpeech("housekeep","","S-Sorry, *Master, but your cock feels so much better than my toys...! I can't help it~!");
			writeText("As you pull out, you can feel him clamp down even tighter, his focus returning a bit.");
			writeText("When you thrust in, he loosens just enough for you to <i><b>slam</b></i> into him, making you both groan before he squeezes around you again.");
			writeText("He keeps wiggling against you, squirming under your hands to make sure your cock rubs against every inch of his insides, matching your thrusts as his body bobs back and forth against you.");
			writeText("You're not sure how long you two go at it before you can feel yourself approaching the edge, housekeepF's moaning and squealing when you hit his sweet spots just pushing you there faster.");
			writeSpeech("player","","I'm getting close...!");
			writeSpeech("housekeep","","A-Ah...! Please, inside!");
			writeText("He starts squeezing far more quickly around you, bouncing against your hips hungrily.");
			writeText("Between the faster speed and his voice, you feel yourself going over the edge...!");
			writeSpeech("player","","I'm cumming!");
			writeSpeech("housekeep","","<i>O-Ooh~!</i>");
			writeBig("images/housekeep/sink-cum1.jpg","Art by Kinta no Mousou");
			writeText("You can feel his body shuddering beneath you, the rhythmic tensing from his own pleasure milking you as he struggles to stay up on his toes.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","H-Haah...! Looks like me made a bit of a mess, didn't we *Master~?");
			else
				writeSpeech("housekeep","","H-Haah...! Looks like me made a bit of a mess, didn't we Mistress~?");
			writeText("You slowly pull out, your half-hard cock popping out as housekeepF moans gently. You can see his hole unconsciously try to tense up around your cock for a moment before housekeepF starts to stand.");
			writeText("He stops halfway, though, as he leans against the sink and grabs his panties, pulling them up slowly as you watch him pull them taut against his ass.");
			writeSpeech("housekeep","","I chose a nice, water-resistant fabric for these. It's pretty helpful, actually!");
			writeText("He runs his finger along the bottom, biting his lip a bit.");
			writeSpeech("housekeep","","...since it keeps it in long enough that it only starts <i>running down my legs</i> on the way home~");
			writeSpeech("player","","You're quite the diligent slutty-maid, aren't you?");
			writeText("His face flushes a deeper red, but he clearly beams from the praise.");
			writeSpeech("housekeep","","Thank you very much, but... I'm not really <i>finished</i> with cleaning yet, am I~?");
			writeText("His eyes go down to your cock for a moment.");
			writeFunction("writeEncounter('housekeepSink1A')", "Have him clean you up");
			writeFunction("writeEncounter('housekeepSink1B')", "Stop here");
			break;
		}
		case "housekeep2-1" : {
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","Bend over.");
			writeText("An excited look flies across his face, but it's quickly replaced with an 'innocent' one.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","If that's your request, *Master~!");
			else
				writeSpeech("housekeep","","If that's your request, Mistress~!");
			writeText("He goes to the same counter as before, moving with a more significant sway in his hips as he leans against the counter.");
			writeText("His skirt, as one would expect, completely fails at covering his ass as he looks back at you, one finger to his lips.");
			writeSpeech("housekeep","","Is this alright, M- <i><b>AHN~!</b></i>");
			writeText("Your hand slaps against his fat ass as he shudders, his hips bucking from the unexpected shock. It wasn't hard enough to leave a mark, but he bites his lip a bit as he looks back at you.");
			writeSpeech("player","","Cute, but I'm feeling pretty pent-up... And just why do you think that is?");
			writeText("You pull out your cock, housekeepF trying (and failing) to keep the excitement out of his eyes.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","I'm sorry, *Master~!");
			else
				writeSpeech("housekeep","","I'm sorry, Mistress~!");
			writeText("Another slap rings out, housekeepF barely holding back a gasping moan.");
			writeSpeech("player","","Actions speak louder than words, you know.");
			writeText("He wiggles his ass at you, your head rubbing up against him.");
			writeSpeech("housekeep","","Then maybe this sort of apology will do~?");
			writeText("He rolls his hips around as you press your shaft against him, sliding between his asscheeks and smearing precum along his hole.");
			writeText("A moment later, and you <b>buck</b> your hips forward.");
			writeBig("images/housekeep/sink-3.jpg","Art by Kinta no Mousou");
			writeSpeech("housekeep","","<i>Nnh~!</i>");
			writeText("You dig your hands into his ass, savagely slamming your hips against his ass as he bites his lip.");
			writeSpeech("player","","The only problem is that you <i>like it</i> rough, don't you?");
			writeSpeech("housekeep","","Haah~! Yes, yes I do~!");
			writeText("Your hand slaps against his ass again, a throaty moan spilling out of him as he grasps at the counter for support from the rough fucking.");
			writeSpeech("player","","And why is that, housekeepF?");
			writeSpeech("housekeep","","A-Ah...!");
			writeText("He hesitates for a moment-");
			writeText("Another slap rings out as he moans.");
			writeSpeech("player","","Tell the truth...");
			writeText("You start to slow down.");
			writeSpeech("player","","Or I'll <i>stop.</i>");
			writeText("He freezes, but only for a moment.");
			writeSpeech("housekeep","","B-Because I'm a slutty maid...!");
			writeText("You raise your hand a bit, sawing forward as he squeezes around you.");
			writeSpeech("housekeep","","I'm a slutty maid that gets off on being punished!");
			writeText("You slam your hips against him again, your hand slapping down.");
			writeSpeech("housekeep","","<i><b>Y-Yes~!</b></i> I want you to be rough, and spank me~! Please!");
			writeText("You can feel yourself getting close to the edge as he begs underneath you, your fingers digging deeply into his skin.");
			writeText("Grasping his hips as tightly as you can, you grin down at him.");
			writeSpeech("player","","Don't collapse, <i>slut</i>.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Y-Yes, *Master~!");
			else
				writeSpeech("housekeep","","Y-Yes, Mistress~!");
			writeText("With that, you start savagely fucking him as quickly, roughly, and violently as you can.");
			writeText("Your hands grab and pull him into you with every thrust, his own hands sliding around the counter as he desperately tries to focus on staying standing.");
			writeText("Pulling him into you, you can feel the wild, uncontrolled twitching of his ass around you, wordless moans spilling out of his mouth every time you slam forward.");
			writeText("You have no idea how many minutes you spend slamming into him before you finally reach your climax.");
			writeSpeech("player","","I'm cumming...!");
			writeText("His twitching gets even faster as you buck forward one last time, his moans reaching their peak.");
			writeBig("images/housekeep/sink-cum1.jpg","Art by Kinta no Mousou");
			writeText("When you finally pull out, he falls down softly to his knees, his forearms supporting him against the cupboard.");
			writeText("Despite looking exhausted, a dopey look of pleasure across his face, he still turns to look up at you with a smile.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","T-Thank you, *Master...~!");
			else
				writeSpeech("housekeep","","T-Thank you, Mistress...~!");
			writeText("He relaxes in place for a moment, breathing deeply.");
			writeSpeech("player","","Ah, do you need any help getting up?");
			writeSpeech("housekeep","","Oh, I'm fine. Sorry, I have a bit of a weakness for <i>rough</i> fun~");
			writeText("Slowly, he stands back up, his legs surprisingly steady as he grabs onto his panties again.");
			writeSpeech("housekeep","","...Ah.");
			writeText("By the time he pulls them up, he's already leaked a bit onto his thigh. He does keep it from reaching his stockings though, his fingers quickly pulling it up.");
			writeText("He casually laps it up, a slight smile on his face as he looks up at you.");
			writeSpeech("housekeep","","Also, thanks. Next time, maybe you could do it again? Especially the, um...");
			writeText("His face goes red, his hands fidgeting.");
			writeSpeech("housekeep","","...the spanking?");
			writeSpeech("player","","You're fine with having sex with me... but you're embarrassed by saying the word 'spanking'?");
			writeText("He huffs up just a bit, resting his hands on his hips.");
			writeSpeech("housekeep","","It's one thing to <i>do</i> that sort of thing, but it's quite another to <i>say</i> it! It's <i><b>lewd!</b></i>");
			writeText("It takes you a second to realize that he is, in fact, entirely serious about that.");
			writeText("So of course, it seems like a good time to turn the teasing tables.");
			writeSpeech("player","","...Well, unfortunately, I couldn't <i>quite</i> hear what you were asking me to do next time.");
			writeText("His eyes widen slightly as you shrug.");
			writeSpeech("player","","If you really want it, though, I'm sure you'll tell me. Well, time to wash off!");
			writeText("Turning around, it takes almost no time at all for you to feel housekeepF's hand grab onto your shirt.");
			writeText("He's very, very quiet for a moment, before he takes a deep breath, pushes his chest against your back as he stands on his toes to reach your ears, and says,");
			writeSpeech("housekeep","","<i><b>I want you to pin me down and use my body as a spankable cocksleeve.</b></i>");
			writeText("And with that, he pulls away, facing the other direction as he pulls out a cleaning cloth.");
			writeSpeech("housekeep","","A-And now, I'm going to clean, so you should take that shower, M- <i><b>NN~!</b></i>.");
			writeText("He jumps as your hand slaps against his ass, looking over his shoulder reflexively as you see just how red his face is.");
			writeSpeech("player","","You're adorable.");
			writeText("He looks away to hide his face again, though he's standing up a bit straighter now.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","...Thank you, *Master. Now go take that shower already - I could get in trouble if I end up giving you an extension without permission.");
			else
				writeSpeech("housekeep","","...Thank you, Mistress. Now go take that shower already - I could get in trouble if I end up giving you an extension without permission.");
			writeSpeech("player","","Hah, sure, sure. Good night, housekeepF.");
			if(data.player.gender == "man")
				writeSpeech("housekeep","","Good night, *Master. I look forward to your next call.");
			else
				writeSpeech("housekeep","","Good night, Mistress. I look forward to your next call.");
			writeText("With that, you head to the bathroom... but not before noting his smile as he starts cleaning.");
			if(data.player.location == "gallery")
				writeFunction("changeLocation(data.player.location)", "Finish");
			else
				writeFunction("changeLocation(data.player.location)", "Wash off and get ready to sleep");
			break;
		}
		case "housekeep3" : {
			document.getElementById('output').innerHTML = '';
			writeText("As you start to kneel, housekeepF raises his skirt enough to expose his dick, twitching a bit in the stylized panties.");
			writeBig("images/housekeep/blowHim1.jpg","Art by Kinta no Mousou");
			writeText("Another momentary flash of hesitation seems to go through housekeepF, but it disappears again just as quickly as you gently run the backs of your fingers up his shaft.");
			writeSpeech("housekeep","","N-Nn...~!");
			writeText("His eyes flutter a bit as he takes a deep breath.");
			writeSpeech("player","","Sensitive, aren't you? You must really want this, huh?");
			writeSpeech("housekeep","","Yes...!");
			writeText("You shift your hand, your fingers touching the base of his shaft while your palm presses it against his hips.");
			writeText("You watch him lightly bite his lip as you push against him, his hips pushing back as you rub his cock between your hand and his pelvis, a small bead of precum started to form at the tip.");
			writeText("A moment later, it gets big enough to slide down the head to your hand, the small movements smearing it around as housekeepF tries to keep still.");
			writeText("Sliding your hand along his cock is actually pretty nice, the slick sensation of his precum feeling oddly enjoyable, but this isn't what you came for.");
			writeSpeech("player","","Tell me what you want, housekeepF.");
			writeText("He breathes in sharply, and doesn't hesitate:");
			writeSpeech("housekeep","","Your mouth...! Please *Master, I want you to put my penis in your mouth!");
			writeSpeech("player","","Very good. An honest maid deserves a reward...");
			writeBig("images/housekeep/blowHim2.jpg","Art by Kinta no Mousou");
			writeText("Bringing your head down, the first thing you do is bring your face right up next to it...");
			writeText("And gently blow on it.");
			writeText("A sharp, thin stream of air first, making his slick cock feel cold for just a moment, before a slow, deep exhale makes it feel so much warmer.");
			writeText("It's your first time not being on the receiving end of it, but from the way he shudders and how his thighs feel tight under your hands, he seems to be enjoying it.");
			writeText("But a reward is a reward, so...");
			writeSpeech("player","","Don't buck your hips.");
			writeText("Saying that, you lean forward and take him into your mouth.");
			writeBig("images/housekeep/blowHim3.jpg","Art by Kinta no Mousou");
			writeSpeech("housekeep","","<i><b>H-Haah~!</b></i>");
			writeText("His eyes tightly shut, housekeepF shakes gently, the warm sensation of just being in your mouth already making him throb.");
			writeText("You'd make a quip about how sensitive he must be down here, but given that your mouth's full...");
			writeText("Instead, you focus on the task at hand.");
			writeText("You take it slow at first, just circling your tongue around his tip a bit, looking for the spots that make him moan or, even better, the ones that feel good enough that he can't make a sound.");
			writeText("Taunting those spots, teasing them relentlessly while gently running your hands up and down his legs, has him practically falling apart in a minute.");
			writeSpeech("housekeep","","N-No fair...~! Your mouth feels <i><b>way</b></i> too good, *Master...!");
			writeText("As he says that, you can feel his shaft tense up a bit, more of his precum starting to come out, but this time into your mouth.");
			writeText("It actually tastes nice, a bit of sweetness to it as it mixes with your spit as you bob up and down his cock.");
			writeText("Still, if housekeepF is able to speak clearly <b>and</b> control himself...");
			writeText("That means that it's time to step it up.");
			writeSpeech("housekeep","","H-Hey, are you- <i><b><font size='+1'>NN~!</font></b></i>");
			writeBig("images/housekeep/blowHim4.jpg","Art by Kinta no Mousou");
			writeText("You push yourself further down, opening your mouth a bit as you take his modest cock as deep as you can without risking gagging, your warm spit running down his shaft for a moment before you close your mouth around him again.");
			writeText("His breathing sounds labored as his fingers press down harshly against his hips, a loud moan spilling out of him as you slowly rise back up, your tongue flicking against his shaft and head as you do.");
			writeText("Before he has the chance to recover, you quickly repeat it again, but a bit faster. Then again, and again.");
			writeSpeech("housekeep","","Yes, yes, <i>yes, yes, <b>yes...!</b></i>");
			writeText("housekeepF's words fall apart into a combination of 'yes's, moans, and what you're half-sure are some kind of prayer as his cock starts to rapidly bob inside of your mouth.");
			writeText("After just a second more, housekeepF groans sharply and shouts,");
			writeSpeech("housekeep","","I-I'm already...~!");
			writeFunction("writeEncounter('housekeepBlowjobSwallow')","Let him cum in your mouth");
			writeFunction("writeEncounter('housekeepBlowjobDodge')","Finish him off with your hand");
			break;
		}
		case "housekeep3-1" : {
			if(data.player.location == "gallery")
				document.getElementById('output').innerHTML = '';
			writeText("His hands move to the hem of his skirt, lifting it up as he sits back.");
			writeBig("images/housekeep/blowHim1.jpg", "Art by Kinta no Mousou");
			writeText("Just like last time, you start with teasing his shaft with your hand a bit, particularly the head as housekeepF lets out gentle, effeminate moans.");
			writeText("It isn't long before you have his entire shaft slick with his dribbling precum, and you slowly move down between his legs.");
			writeSpeech("housekeep","","Thank you for the service, *Master...!");
			writeText("You smirk, bringing your mouth to his shaft as you use your tongue and drag small, thin lines along his cock.");
			if(galleryCheck('housekeep1')){
				writeText("You even take a page from housekeepF's own book, gently kissing the shaft and head as you go up and down, alternating between that and gently lapping at it.");
				writeText("His own technique has him moaning loudly, one of his hands running through your hair as you go down on him.");
			}
			else
				writeText("Between the carefully controlled movements of your tongue and your hand stroking up and down alongside it, you have him moaning loudly as he runs one of his hands through your hair.");
			writeText("You spend a little while repeating that before slowly moving on, pressing his head against your lips.");
			writeSpeech("housekeep","","<i>Ah...!</i>");
			writeBig("images/housekeep/blowHim6.jpg","Art by Kinta no Mousou");
			writeText("He lets out a soft gasp as you drag your lips down his shaft, taking more and more of his cock into your warm, wet mouth as your lap your tongue against every inch that goes in.");
			writeText("You start with a slow, gentle movement of your head, turning just a little bit as you go down, then reversing it as you go back up.");
			writeText("Your hand trails along just below your lips, jerking him off into your mouth with every bob back up, drop after drop of semi-sweet precum dribbling onto your tongue.");
			writeText("Unfortunately, you're barely going down on him for a minute before you can hear his moans starting to get louder, his cock getting just a bit bigger, and for him to start tensing up.");
			writeText("You could try and make him hold out for a while, edging him along the way, or you could double down and make him cum as hard as you possibly can...");
			writeFunction("writeEncounter('housekeepBlowjobEdge')","Edge him until he starts begging to cum");
			writeFunction("writeEncounter('housekeepBlowjobOverload')","Give him the strongest orgasm of his life");
			break;
		}
		case "housekeep4" : {
			document.getElementById('output').innerHTML = '';
			writeBig("images/housekeep/bunny-1.jpg","Art by Kinta no Mousou");
			writeSpeech("housekeep","","How does it look, *Master~?");
			writeText("His hand gently traces his tights along his hips, the sublte movement onto highlighting the fact that he clearly has no panties on underneath.");
			writeSpeech("player","","I'll hold off from judging the service until we're all finished.<br>...But you've definitely got my expectations pretty high.");
			writeText("housekeepF's expression brightens up more, his blush deepening.");
			writeSpeech("housekeep","","Well, in that case, why don't we get right to it? How would you like to start~?");
			writeFunction("writeEncounter('housekeep3A-1')", "Play with his chest first");
			writeFunction("writeEncounter('housekeep3A-2')", "Get right to the sex");
			break;
		}
		case "housekeep4-1" : {
			document.getElementById('output').innerHTML = '';
			writeHTML(`
				sp player; How about you pull out that bunny-girl outfit again?
				t housekeepF smiles wide, nodding.
				sp housekeep; I'd be happy to~
				...
				im bunny-1.jpg
				sp housekeep; How did you want to start this time, *Master~?
			`);
			writeFunction("writeEncounter('housekeep3A-1repeat')", "Play with his chest first");
			writeFunction("writeEncounter('housekeep3A-2repeat')", "Get right to the sex");
			break;
		}
		case "housekeep5" : {
			document.getElementById('output').innerHTML = '';
			writeHTML(`
				t Pulling him into the water, you hear housekeepF laugh softly as he goes along with it. There's a bit of a splash as you steer him into your lap, your cock shaft pressing against his ass as you do.
				sp housekeep; Haha~ You certainly seem excited~!
				sp player; With an outfit like yours, it'd be hard not to be.
				t Your hands grasp his thighs, pulling him against you as you line up your cock with his ass.
				t Shifting your head, you press your lips to his as you grind against him, a small shudder of pleasure shooting through him as you do.
				t You bring your lips away from his just as your head slides into his hole.
				im bikini-3.jpg
				sp housekeep; Mm~
				t housekeepF's eyes open a bit as he smiles at you, starting to roll his hips a bit. Despite how small the movement is, the feeling of your cock inside him feels more pleasurable than usual...
				t Given how flushed his face is already, it seems he's feeling the same.
				sp player; That lube... Some kind of specialty thing?
				sp housekeep; Maybe~
				t He relaxes into your chest a bit, letting out a content sigh of pleasure.
				sp housekeep; It helps to enhance sensitivity a little bit. A friend made it, and I thought you might enjoy it~
				sp player; Proactive as always... my slutty maid.
				t Your words make him shudder, his smile wider as he rolls his hips again. Every instant, your cock is shifting inside him as he bounces minutely in place, even before you start thrusting yourself.
				t The sensitivity of your cock and the tightness of his ass feel incredible as you start bucking into him, your grunts mixing with housekeepF's moans as you start racing towards the edge quickly.
				sp player; You feel incredible...!
				t Another gasping moan from housekeepF, the praise making him squirm.
				t Your hands toy with his soft, smooth thighs as you pull him into you, rocking your hips back and forth as you gently fuck him.
				t Seconds bleed into minutes as you find yourself already approaching the edge.
				sp player; Fuck...
				t Your grip on his thighs tighten as you breathe out sharply.
				sp player; Cumming...!
				sp housekeep; Yes~ Cum inside, *Master~!
				t housekeepF lets out a loud, low moan of ecstasy as his eyes shut tight, his cock twitching sharply as ropes of cum spurt out.
				im bikini-4.jpg
				t Your own cum spurts out inside of him, filling him up as your cock throbs inside his tight, slick hole.
				t Despite cumming, though, you don't feel your erection flagging at all - in fact, it seems to get a little harder...
				t housekeepF notices this, leaning against you with a smile.
				sp housekeep; That's the lube, too~ It's a handy little tool, isn't it?
				t Instead of replying, you buck your hips upward, the water shifting as housekeepF lets out a sharp, moaning gasp.
				sp housekeep; W-Well, if you're that interested in a round two, I certainly won't complain~!
				t You let out a sharp laugh in reply.
				sp player; Who says I want just <i>two?</i>
				t The playful spark flashes in housekeepF's eyes as he squeezes tightly around your cock for a moment.
				sp housekeep; Then let's get right to it~
				t You two might be at this for a little while...
				...
				sp housekeep; C-Cumming...!
				t Another rope of cum spills out from housekeepF's cock, spilling into the water as he writhes against you and while you fill him up with yet another creampie.
				t At this point, you're not even sure of how many rounds you've gone, but you are finally finished, the both of you breathing heavily as you relax in the tub.
				t Smiling, housekeepF looks into your eyes.
				im bikini-5.jpg
				sp housekeep; W-Well... Did you enjoy that, *Master~?
				t As your cock slides out of his ass, you let out a content sigh.
				sp player; At some point, I'll want a bit of that lube for myself. It works <i>wonderfully.</i>
				t He lets out a soft laugh, shaking his head a bit.
				sp housekeep; I'll ask my friend then - they take pride in their work, so they'll be happy to hear the praise.<br>For now, though...
				t housekeepF shifts slightly, looking over the bath.
				sp housekeep; I think I'll draw another bath... Seems to me like it'll be a good idea to rinse the cum off of us.
				sp player; Fair point.
				t The both of you end up hopping out of the bath, taking turns cleaning off to avoid another round dirtying you both up, before you finish up for the night.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "housekeep5-1" : {
			document.getElementById('output').innerHTML = '';
			if(data.player.location != 'gallery'){
				writeHTML(`
					sp player; Why don't you go ahead and grab that bikini again and draw a bath?
					t housekeepF smiles excitedly, nodding.
					sp housekeep; It'll be ready in just a moment~!
					...
					t You don't have to wait long to be in the same position as before, though this time you don't have to pull housekeepF into the water.
					t Instead, he lowers himself down into it, your hands moving to his legs to help guide him onto your cock.
				`);
			}
			writeHTML(`
				im bikini-3.jpg
				t You roll your hips into him, pulling him down onto your cock effortlessly as you press your lips to his, your tongues moving together as he moans gently.
				t Your hand toys with his chest as you thrust into him, his nipple hard between your fingers as you squeeze it and run your fingers around his areolas.
				sp housekeep; H-Hah...~!
				t Each lift of his body causes his dick to come out of the water for a moment before coming back down, the cool air stimulating the tip before it gets warmed again.
				t You don't need to move much to feel stimulated, your cock never entirely leaving his ass as you thrust back and forth.
				t His own hand presses against the wall-tile as he shudders slightly, the water shifting as his voice starts getting louder.
				sp housekeep; You feel so good inside me~
				t He rolls his own hips in the water, gliding your cock around his insides as you feel him tighten and squeeze around you, stimulating your cock from the base to the head as his body shudders.
				t You lose track of time as you gently fuck him in the water, the lube staying slick and making your cock feel pleasantly tingly and warm at all times.
				sp housekeep; A-Ah, I'm...!
				t You feel your own climax approaching, and you pull him tightly against you as you start to cum, his own cock spurting too.
				im bikini-4.jpg
				t He writhes against you for several more seconds before calming down a bit, smiling at you happily. His cock doesn't seem to have gone down, though... and neither has yours.
				sp housekeep; Mmm... Sounds like you might need another round or three to be satisfied, *Master~
				t Your cock only seems to get harder inside of him, his dick still twitching in the water.
				sp player; Let's see if you can handle it, then.
				...
			`);
			if(data.player.location != 'gallery'){
				writeHTML(`
					t It takes a fairly long while for you two to tire out, with several more orgasms than you expected tonight coming from each of you. Despite that, you honestly feel more relaxed than tired...
					t Once you finally finish up, housekeepF drains the tub and sends you out so he can finish the cleanup, before heading out for the night.
				`);
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "housekeepEnding" : {
			document.getElementById('output').innerHTML = '';
			writeHTML(`
				define hkp = sp housekeep;
				t Looking at him as he kneels, you can't help but notice the thin sheen of the aphroditic oil from before on his ass, serving as a lube.
				im ending2.jpg
				t It's nearly impossible to tell at a glance, but from the way that housekeepF fiddles with his hands for a moment, it seems that the lube is making him significantly more sensitive.
				t Case in point, he doesn't ask for permission as he leans in with a soft yet hungry smile.
				hkp Let's enjoy ourselves, hm?
				t His hands move across your chest as he gently pushes you down. As he leans down onto you, his chest pressing against yours, you can feel your cock rub up against housekeepF's abdomen as he lets out a small hum.
				im ending1.jpg
				t Your shaft and head slide across his smooth skin as a hand moves down to run a finger along your tip. A bit of your precum smears along his finger as he lets out another pleased hum, smirking at you.
				t Moving his finger back up, his tongue moves to lap up the bead of pre on his finger as he rolls his hips further up against you.
				hkp Tasty~
				t housekeepF sits up against you, your shaft pressing up against his ass as you feel it throb between the slope of his cheeks.
				im ending3.jpg
				player Are you ready?
				t You know the answer full well already, but the smirk on housekeepF's face in response is enough to make you roll your hips back as his lifts his own hips up.
				t Wordlessly, he drops back down by a few inches, the head of your cock just barely sliding in as his unbelievable tightness squeezes and stimulates your glans.
				im ending4.jpg
				hkp H-Haah~
				player Hnn...
				t housekeepF's breathy exhale is matched by your own low groan, your hands grasping at his thighs gently as he takes a moment to revel in the spreading of his hole around your shaft.
				t But of course, you have no intention of letting things stay stagnant <b>too</b> long, so you grip his thighs higher and tighter, pulling his hips down and-
				im ending5.jpg
				hkp H-Heeh~!?
				t A higher-pitched squeal of pleasure spills out from housekeepF as you pull him balls-deep in a single, smooth motion. His thighs quiver softly as his breathing gets heavier, the light blush on his face getting the slightest bit deeper.
				t You lean back a bit more, looking up to his barely-shuddering frame as he bites his lip and moans near-silently. From the way his own cock is twitching so cutely, it's clear he definitely enjoyed it, so...
				im ending6.jpg
				hkp O-OH!
				t You buck your hips up and against him sharply, bouncing his entire body up for a moment before you lower them, and his body drops with them. You can feel your balls slap against his ass with each buck, his expression reflecting how stimulating the oil is and how pleasureful it feels.
				t Each moan from him gets louder as you can start to feel the lube yourself, your shaft getting more sensitive and warm with each thrust upwards. Your own voice spills out almost as loudly as housekeepF's, though his squirming and gasping interrupt his moans nearly every second.
				t Looking at the adorable maid in front of you, your shaft feeling so warm inside of him, you can't help but reach forward and grab him, pulling him tightly against you.
				player F-Fuck...!
				hkp <i><b>Y-Yes...~!</b></i>
				im ending7.jpg
				t housekeepF's own arms wrap around your back as his body shudders and quakes around yours, each quiver squeezing your cock more as his breathing gets heavier. You can't help but nip at his earlobe for a moment, relishing the sharp moan he lets out as you do, before pressing your lips to his neck.
				t Kissing his neck has the result of making him squirm that much more, his moans not nearly as sharp but lasting far longer as his fingers drag along your back. The almost-rhythmic tightening around you keeps drawing you more and more into his embrace, just as much as you pull him in.
				t Seconds blur by, time falling well outside of what's relevant as you focus solely on making him moan and squeal. Your hands grope at his ass and drag along his back; they grasp at his thighs while you leave hickeys behind, marking him as yours in a primally satisfying way.
				t You can feel him approaching the edge well before you hear him try and fail to stutter out a warning. You quickly and sharply pull him into a deep kiss, your tongue pressing against his for a moment as he moans into your mouth, before you pull his chest into yours, bring your mouth to his neck, and just barely drag your teeth agaisnt his skin.
				t The response is immediate.
				hkp <i><b><font size='+2'>C-CUMMING~!</font></b></i>
				im ending8.jpg
				t You can feel his warm cum spatter against your abdomen, dripping down onto his cock and pooling between your bodies. You try to take a moment to slow down and let him catch his bearings, but-
				hkp Please~...
				t The whisper in your ear before his own lips gently tease at your neck immediately throws out the idea of slowing down.
				t You pick up more speed as you thrust up into him, the oil making every movement smooth without compromising the gentle texture of his ass around you. Your hands grasping his ass, you can't help but lose youself in fucking him as quickly and roughly as you can, his whispers in your ears not even forming words as he tries to push you to go faster.
				player F-Fuck, I'm...!
				t This time, it's housekeepF who presses his lips against yours, your moans silenced against one another as you roughly, sloppily kiss one another. Your mind goes blank as everything seems to go white as your shaft starts to pulse.
				t The first rope to shoot out is intensely satisfying, with each shot somehow even more so than the last. Rope after rope of jizz gets poured into his ass as he shudders against you, a moaning, whining tone coming from housekeepF as you slowly stop thrusting into him and you rest your head against his neck once again.
				im ending9.jpg
				t You try and catch your breath, but before you can, you hear housekeepF let out a shaky, but mischievous hum.
				hkp Let's go again, okay~?
				t Before you can reply, you can feel something warm drip down, and over his shoulder you can see him pouring a bit more of the oil-lube down his ass and covering your dick as he slowly slides back up.
				player Heh.
				t Instead of replying verbally, you just grab his ass tightly, waiting until the pouring stops and only your head barely remains in his ass, before <b>slamming</b> his hips down against yours.
				t It's going to be a long night~
			`);
			if(data.player.location != 'gallery'){
				writeHTML(`
					...
					t You can just barely hear birds start to sing outside the windows, the sun still not quite out yet, when you finally separate your body from housekeepF's.
					t You're both sweaty, gasping masses at this point, laying back in the bed and actually catching your breath <b>without</b> getting interrupted.
					t After a few minutes, though, there's a shifting of the cloth as housekeepF slowly sits up and stretches his back. There's a soft pop in his joints, and you slowly mirror the action while looking up at him.
					hkp Haahh...
					t The level of satisfaction on his face is incredible as he just stares at the open space between him and the wall for a moment, before looking to you with a wide and pure smile.
					im ending10.jpg
					hkp Being your exclusive, live-in maid... is going to be so much fun~
				`);
				writeFunction("writeEncounter('housekeepEndingAA')", "Time passes...");
			}
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
	else {
		console.log("Error, no scene named "+name+" found to unlock.");
	}
	if (checkSkill("corruption") == 0 && checkFlag("mom", "corruptionExplained") == false) {
		setSkill("corruption", 5);
		addFlag("mom", "corruptionExplained");
		writeSpecial("Your corruption score has changed! Starting at 5, this stat changes when you do lewd things with particularly corrupt or pure individuals.");
	}
	reduceSkill("corruption", 1);
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
	{index: "housekeepReward", trust: 500,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "housekeepReward": {
			writePhoneImage("images/housekeep/onahole-3.jpg","housekeepOnahole, art by Kinta no Mousou");
			writePhoneSpeech("housekeep","","You've finished all of the non-repeatable content for housekeepF for the update! If you haven't seen them already, there are also slightly-different, repeatable versions of those sex scenes if you request the same service from housekeepF again, including another version of the bunny-suit and bikini scenes.");
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