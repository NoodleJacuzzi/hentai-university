var character = {index: "gilf", fName: "Eva", lName: "Rose", trust: 0, encountered: false, textEvent: "", met: false, color: "#db4bbc", author: "NoodleJacuzzi", artist: "Toxic Love", textHistory: "", unreadText: false,};

var logbook = {
	index: "gilf", 
	desc: "A mysterious ghostly woman you found while playing Ghost AR, she appears to have passed away quite some time ago, and her lingering soul is searching for her missing daughter.",
	body: "Ghosts seem to have some ability to influence their own physical form, it seems like living in this town has given her a milf-esque body to match most of the women around the city.",
	clothes: "Like her body, her fashion seems to reflect modern styles. She wears a very humble pink shirt and white skirt.",
	home: "She doesn't recognize any of the surrounding townscape, it's possible the city looks nothing like it did while she was still alive.",
	tags: "Lovey-dovey, ghost blowjob WOO WOO~!",
	artist: "Toxic Love<br>Original Set: Wakeari Chintai -Kyonyuu (Moto) Hitozuma Yuurei Tsuki Bukken",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "encounter1", name: "MEGA EASY CHEAT - Find gilf", requirements: "?location map; ?trust gilf 0; ?ghosts 2; ?flag mom megaEasy;", altName: "", altImage: "",},
	{index: "encounter3", name: "MEGA EASY CHEAT - Find gilf", requirements: "?location map; ?trust gilf 1; ?flag mom megaEasy;", altName: "", altImage: "",},
	{index: "encounter4", name: "MEGA EASY CHEAT - Find gilf", requirements: "?location map; ?trust gilf 2; ?flag mom megaEasy;", altName: "", altImage: "",},
	{index: "library1", name: "Search for a book about gilf", requirements: "?location library; ?trust gilf 80;", altName: "", altImage: "",},
	{index: "encounter5", name: "MEGA EASY CHEAT - Find gilf", requirements: "?location map; ?trust gilf 81; ?flag mom megaEasy;", altName: "", altImage: "",},
	{index: "store", name: "MEGA EASY CHEAT - Find gilf", requirements: "?location map; ?trustMin gilf 85; ?trustMax gilf 87; !flag gilf store; ?flag mom megaEasy;", altName: "", altImage: "",},
	{index: "school", name: "MEGA EASY CHEAT - Find gilf", requirements: "?location map; ?trustMin gilf 85; ?trustMax gilf 87; !flag gilf eastHallway; ?flag mom megaEasy;", altName: "", altImage: "",},
	{index: "park1", name: "MEGA EASY CHEAT - Find gilf", requirements: "?location map; ?trustMin gilf 85; ?trustMax gilf 87; !flag gilf park; ?flag mom megaEasy;", altName: "", altImage: "",},
	{index: "encounter6", name: "MEGA EASY CHEAT - Find gilf", requirements: "?location map; ?trust gilf 88; ?flag mom megaEasy;", altName: "", altImage: "",},
	{index: "library2", name: "Search for a book about the school's founding", requirements: "?location library; ?trust gilf 90;", altName: "", altImage: "",},
	{index: "encounter7", name: "MEGA EASY CHEAT - Find gilf", requirements: "?location map; ?trust gilf 91; ?flag mom megaEasy;", altName: "", altImage: "",},
	{index: "quoIntro", name: "MEGA EASY CHEAT - Find gilf", requirements: "?location map; ?trust gilf 100; ?flag mom megaEasy;", altName: "", altImage: "",},
	{index: "statusQuo", name: "gilf is here", requirements: "?location playerHouse; ?trustMin gilf 101;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define gilf = sp gilf;
	`);
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "encounter1": {
			writeHTML(`
				sp gilf; altName ???; W-wait!
				t You hear a woman's voice just before you tap the ghost on the screen, and then silence.
				player ... What just happened?
				finish
			`);
			setTrust("gilf", -1)
			break;
		}
		case "morning1": {
			writeHTML(`
				t <b>Let</b>
				t <b>ME</b>
				t <b><span style="color:red;font-size:300%;">OUTTTT</span></b>
				t Your phone is buzzing wildly!
			`);
			break;
		}
		case "encounter2": {
			writeHTML(`
				t The moment you open the app, your phone explodes in light, revealing the ghost you captured from before floating in the air.
				im 002.jpg
				gilf F-finally!
				player Oh hey, I guess I caught a real ghost that time.
				gilf That's right! It may have taken a few days to break out of that thing, and... Ughh... Avoid all those other creepy things you have in there, but still!
				player Uhuh. Are you gonna haunt me?
				gilf I... Well, I probably shouldn't, but you're the first person I've met who can see me, so-
				player And if I just put you right back inside?
				gilf N-no! Please, I don't mean any harm, I'm just...
				player Just what?
				gilf ... I don't know, looking for someone. Please, just let me go...
				t You make a big show of thinking for a moment.
				player Well, maybe. Catching a live... Well, as much as you can be, ghost, is pretty neat. How about you tell me about yourself first?
				gilf Mm... Fine. What do you want to know?
				trans talkName; !flag gilf talkName; Ask her name
				trans talkCircumstance; !flag gilf talkCircumstance; Ask about who she's looking for
				trans talkGhost; !flag gilf talkGhost; Ask about being a ghost
				trans talkScared; !flag gilf talkScared; OH GOD, A GHOST?!?!
				trans encounter2Finish; ?flag gilf talkName; ?flag gilf talkCircumstance; Finish asking questions
			`);
			break;
		}
		case "talkScared": {
			addFlag("gilf", name);
			writeHTML(`
				player UWAAAAAAH, A GHOST!
				gilf ... Y-yeah. I guess I'd be scared too, but... Isn't it a bit late for that reaction?
				player Probably, just had to get that out of my system.
				trans talkName; !flag gilf talkName; Ask her name
				trans talkCircumstance; !flag gilf talkCircumstance; Ask about who she's looking for
				trans talkGhost; !flag gilf talkGhost; Ask about being a ghost
				trans talkScared; !flag gilf talkScared; OH GOD, A GHOST?!?!
				trans encounter2Finish; ?flag gilf talkName; ?flag gilf talkCircumstance; Finish asking questions
			`);
			break;
		}
		case "talkName": {
			addFlag("gilf", name);
			writeHTML(`
				player What's your name?
				gilf I'm gilfF gilfL. Nice to meet you.
				player playerF. You're very polite for a ghost.
				gilf You're very patronizing for a *man meeting a ghost.
				trans talkName; !flag gilf talkName; Ask her name
				trans talkCircumstance; !flag gilf talkCircumstance; Ask about who she's looking for
				trans talkGhost; !flag gilf talkGhost; Ask about being a ghost
				trans talkScared; !flag gilf talkScared; OH GOD, A GHOST?!?!
				trans encounter2Finish; ?flag gilf talkName; ?flag gilf talkCircumstance; Finish asking questions
			`);
			break;
		}
		case "talkCircumstance": {
			addFlag("gilf", name);
			writeHTML(`
				player Who are you looking for?
				t She looks thoughtful, like she knows the answer, but takes longer than she expects to find the words to say it.
				gilf I'm... I'm trying to find my daughter.
				player Is she a ghost too?
				gilf N-... I don't know... It's been so long. I slept for so long, and I've searched for even longer, I think. Everything looks different. But I do know she'll be waiting for me!
				player <i>She doesn't quite seem all there... At least not right now.</i>
				trans talkName; !flag gilf talkName; Ask her name
				trans talkCircumstance; !flag gilf talkCircumstance; Ask about who she's looking for
				trans talkGhost; !flag gilf talkGhost; Ask about being a ghost
				trans talkScared; !flag gilf talkScared; OH GOD, A GHOST?!?!
				trans encounter2Finish; ?flag gilf talkName; ?flag gilf talkCircumstance; Finish asking questions
			`);
			break;
		}
		case "talkGhost": {
			addFlag("gilf", name);
			writeHTML(`
				player What's it like being a ghost?
				gilf Uh... A lot like being alive, but, tired, I guess? I haven't really thought about it. My back pain is gone though...
				player Wait, are the rest of the ghosts in my phone like you?
				gilf No, I don't think so. They were really scary...
				trans talkName; !flag gilf talkName; Ask her name
				trans talkCircumstance; !flag gilf talkCircumstance; Ask about who she's looking for
				trans talkGhost; !flag gilf talkGhost; Ask about being a ghost
				trans talkScared; !flag gilf talkScared; OH GOD, A GHOST?!?!
				trans encounter2Finish; ?flag gilf talkName; ?flag gilf talkCircumstance; Finish asking questions
			`);
			break;
		}
		case "encounter2Finish": {
			removeFlag("ghost", "talkName");
			removeFlag("ghost", "talkGhost");
			removeFlag("ghost", "talkCircumstance");
			removeFlag("ghost", "talkScared");
			writeHTML(`
				player Well, take care. Good luck with your search.
				gilf R-really? Just like that?
				player You seem pretty harmless. Try not to get caught again, alright? Depending on my mood, I might want a little bit more next time.
				t She nods, oblivious to your intentions, and floats off through a wall.
				player ... Well, I guess I've got a ghost's gratitude now. If we meet again I'll push things a little farther.
				finish
			`);
			setTrust("gilf", 1)
			break;
		}
		case "encounter3": {
			writeHTML(`
				gilf Not again!
				player Oh, that was close, almost caught you again. It didn't take too long to find you, huh?
				gilf Th-thank goodness, thinking about being stuck inside that block of yours again...
				player It's called a phone. You find who you're searching for yet?
				gilf Not yet, but I know I'll find her. I don't care how long it takes! Even if she's d-... Not around anymore... If I'm still here, I'm sure she is too! Don't underestimate the bond between mother and daughter!<br>A... Ah, anyways, it was nice meeting you.
			`);
			writeFunction("writeEncounter('encounter3A')", "Press her for more");
			break;
		}
		case "encounter3A": {
			writeHTML(`
				player Actually, I did warn you I'd want something more next time.
				gilf Eh? But I don't have any food or money...
				player Yeah, but you have a nice body. Do ghosts have... Uh...
				t Her eyes are wide open and her face is beet red. Which is surprising, how can she blush? Maybe her spiritual form manifests changes to reflect her state of-
				t ... And she's gone. Looks like you'll have to find her again.  She didn't say 'no' though, it seemed more like she was just embarrassed by the idea.
				finish
			`);
			setTrust("gilf", 2)
			break;
		}
		case "encounter4": {
			writeHTML(`
				player Oh, you again. 
				gilf ... Wait, give me a moment.
				player I think I can do that.
				gilf I'm sorry for running away so quickly last time. I had some time to think, and... Okay. But only on one condition!
				player Sure. So long as it doesn't involve me becoming a ghost myself.
				gilf I want you to help me find my daughter.
				t A tough call. If you say yes and then bail... Well, getting haunted is not your idea of fun. While it sounds like a hassle, helping people out is kind of your job description. At least on paper.
			`);
			writeFunction("writeEncounter('encounter4a')", "Continue");
			writeFunction("writeEncounter('encounter4b')", "No dice, ghost lady");
			break;
		}
		case "encounter4a": {
			writeEvent("gilf1");
			setTrust("gilf", 80)
			passTime();
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "encounter4b": {
			writeHTML(`
				player Eh, sorry, I'm no detective.
				gilf Well, obviously... Oh, I didn't mean it like... Oh jeez, I'm just going to go, alright?
				t Without another word she floats off.
				player Well, hopefully we'll meet again.
				finish
			`);
			break;
		}
		case "library1": {
			writeHTML(`
				player Let's see... gilfL... gilfL...
				t It takes a bit of searching, but on page 327 of an old historical document collection you find what appears to be a short article clipping on gilfF.
				im article1.jpg
				t Though the names seem to have been scratched out, or noted over, you can barely make out "gilfF gilfL", and the "gilfL" fortune.
				player "Elder lady marries young man"... Is 30 really that old? I guess it was a different time. Still, no real news on the fate of her daughter, but there's no way she's still around. Guess I should find gilfF again.
				finish
			`);
			setTrust("gilf", 81)
			break;
		}
		case "encounter5": {
			writeHTML(`
				gilf Gah! Don't-Oh, playerF! Did you find anything?
				player Sure did, found a newspaper on your marriage back over a hundred years ago.
				t She looks a bit sheepish.
				gilf It wasn't... Nevermind. I don't need to defend myself. Anyways, what about my daughter?
				player Her name is never mentioned. That said, she's definitely passed away by now.
				im 007.jpg
				t gilfF looks somber for a moment.
				gilf ... That doesn't matter. She passed away without parents to see her grow up, that means she must have passed away with regrets! I'll find her, and I'll help her move on!<br>You'll help, right?
				player Well...
				gilf Don't worry! I don't know what happened last time, but I'm a lot more confident than I was before! I'll give you a reward you can't refuse!
				im 010.jpg
				gilf And we'll find her together!
			`);
			writeFunction("writeEncounter('encounter5A')", "Continue");
			break;
		}
		case "encounter5A": {
			writeEvent("gilf2");
			setTrust("gilf", 85)
			passTime();
			writeFunction("writeEncounter('cancel')", "finish");
			break;
		}
		case "store": {
			writeHTML(`
				t You spot gilfF wandering the district window shopping, and find a good place to talk privately.
				gilf Hello again!
				player Doing some shopping?
				gilf No. But everything's just so bright and colorful... Back when I was alive, it felt like time was just something you had to wait through, but today there's so much going on all at once.<br>I suppose I wish I'd valued my own time alive a little more... <br>So many flashy signs, do you find yourself buying stuff on impulse?
			`);
			writeFunction("writeEncounter('storeYes')", "Yes");
			writeFunction("writeEncounter('storeNo')", "No");
			break;
		}
		case "storeYes": {
			writeHTML(`
				player Yeah, I guess so. Adds a little excitement to the day.
				gilf Hmm... You know, I was actually quite wealthy back when I was alive, I could just never thing of anything I ever wanted.<br>I'm glad it didn't go to waste, at least.<br>Ah, I need to keep searching. You keep up the search as well, playerF. Good luck!
				finish
			`);
			addFlag("gilf", name);
			raiseTrust("gilf", 1);
			break;
		}
		case "storeNo": {
			writeHTML(`
				player Not really, I think of myself as pretty responsible.
				gilf Hehe, we're the same then. I was actually quite wealthy back when I was alive, and in the end I'm glad I chose to save it all.<br>Ah, I need to keep searching. You keep up the search as well, playerF. Good luck!
				finish
			`);
			addFlag("gilf", name);
			raiseTrust("gilf", 1);
			break;
		}
		case "school": {
			writeHTML(`
				t You spot gilfF wandering the school. If it weren't for the fact that she's a ghost, and also very cute, you'd probably have the instinct to call the cops on her. Still, you wait until there's nobody around and approach to say hi.
				gilf They're so... Free. And lively. 
				player Jealous?
				gilf Hmm. Maybe if I focused on my own form. Before I realized it my own clothes started to match ones from this era, this sweater actually-<br>Oh, what am I doing? This can wait until after I find my daughter. 
				player Anyone here seem familiar?
				gilf No... I think there are other ghosts in the school, but they don't seem interested in helping me. But I'm sure I'll find something. Something about this school feels... Right. 
				player I'll let you know if I find anything.
				finish
			`);
			addFlag("gilf", name);
			raiseTrust("gilf", 1);
			break;
		}
		case "park1": {
			writeHTML(`
				t You spot gilfF relaxing on a park bench, calmly enjoying the view.
				gilf Ah, hello again.
				player Where'd all that energy go?
				gilf Oh, I'm sure it'll be back. I suppose I'm just feeling nostalgic. Would you care for a seat?
				player Sure.
				gilf This place doesn't feel too different. The air's cleaner though, I think. I'd like to come back here again sometime, once we're finished searching.<br>Do you spend a lot of time out here?
			`);
			writeFunction("writeEncounter('park1Yes')", "Yes");
			writeFunction("writeEncounter('park1No')", "No");
			break;
		}
		case "park1Yes": {
			writeHTML(`
				player Yeah, being out in nature is pretty relaxing.
				gilf Hehe, you'd fit right into my time. There wasn't much to do each day, so most of my friends would spend their relaxation time outdoors.
				player How about you?
				gilf ... I didn't go out much. I wasn't the healthiest, and once I became married I wasn't very popular around town.<br>It was a complex situation...<br>Regardless, I should resume the search. You should too, I think, good luck!
				finish
			`);
			addFlag("gilf", name);
			raiseTrust("gilf", 1);
			break;
		}
		case "park1No": {
			writeHTML(`
				player Not really, I spend most of my time indoors.
				gilf We're birds of a feather. I wasn't very healthy back when I was alive, so I spent most of my time inside.<br>After I got married... Well, I wasn't too popular around town, so that was just another reason not to go out.
				player Well, you have all the time you want to explore the great outdoors now.
				gilf That's a very positive way to look at it.<br>Regardless, I should resume the search. You should too, I think, good luck!
				finish
			`);
			addFlag("gilf", name);
			raiseTrust("gilf", 1);
			break;
		}
		case "encounter6": {
			writeEvent("gilf3");
			passTime();
			setTrust("gilf", 90);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "library2": {
			writeHTML(`
				player Let's see... It shouldn't be too hard to find a book about principalF's last name... Hrm...
				t It doesn't take too long, in a short while you find a document in the same book as the last one, this one about the school's previous owners.
				im article2.png
				t Though the names seem to have been scratched out, or noted over, you can see that it's about gilfF's daughter.
				player Huh, so her daughter had a pretty big family of her own. Seems like her story turned out alright.<br>Seven kids, I guess principalF has a lot of cousins.
				finish
			`);
			setTrust("gilf", 91);
			break;
		}
		case "encounter7": {
			writeHTML(`
				t You find gilfF sitting on a bench, the same as before, looking bittersweetly out into the distance.
				gilf She's not around here, anywhere, is she? I feel stronger than before, my like myself than I have in a long time, and my intuition is saying she's gone.
				t You show gilfF the scrap of  paper, and tell her about what you've learned.
				t ...
				gilf ...
				player You alright?
				gilf Yes. I think I am. I suppose she never really needed me after all. Ghosts like me linger because we have unfinished business, I guess I needed to stay here, and she... Didn't.
				player ...
				gilf I'm glad she had a chance to find her dream, and a chance to live it out.<br>My memory's still foggy, but... I can remember her now. 
				player So, are you going to disappear?
				gilf Hmm...
				t She looks thoughtfully, but her form doesn't waver. If anything, it seems stronger than before.
				gilf I think... Well, I suppose it's a bit silly to say now, but I'd like to live for myself. See all the wonderful things in this new world. Maybe after that I'll pass on, and I'll tell my daughter about the wonderful school she built.<br>Thank you, playerF.
				player Will I see you again?
				gilf ... Yes, I'd like that. We'll see each other again some time.
				t She stays still, but suddenly grows more transparent.
				gilf Thank you again. When we next meet, I hope I'll be able to tell you about all the wonderful things I've seen.<br>Goodbye, playerF.
				t And just like that, the little park bench feels a lot more lonely, and gilfF is gone.
				finish
			`);
			setTrust("gilf", 100);
			break;
		}
		case "quoIntro": {
			writeHTML(`
				define gilf = sp gilf; im images/gilf/schoolgirl.jpg; 
				im 051.jpg
				gilf Hello again~! How do I look?
				player gilfF? I didn't expect to see you again.
				gilf Eh? I don't remember saying I was leaving...<br>Besides, you're one of the only people who can see me, who else would I show off to? How do I look?
				t She does a little spin, showing off a modern-looking schoolgirl outfit.
				gilf I was so jealous of girls these days, the idea for it just kinda popped into my head. I've come a long way from the barely-there ghost I was when we first met, huh? 
				player Yeah.
				gilf Oh! That's not all, I had a chance to follow a few nice young girls. One of them was a blonde girl who liked candy-pops, and another was a girl studying to become famous! I learned a lot about being a modern schoolgirl, let me show you!
			`);
			writeFunction("writeEncounter('gilf4')", "Continue");
			break;
		}
		case "gilf4": {
			writeEvent("gilf4");
			passTime();
			setTrust("gilf", 101);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "statusQuo": {
			switch (checkTrust("gilf")) {
				case 101: {
					writeHTML(`
						gilf Not needing to worry about... Well, anything anymore, it's exhilarating! How do people manage to get anything done in a city with so much to do? 
					`);
					break;
				}
				case 102: {
					writeHTML(`
						gilf I went out to the shopping district, and I passed by a restaurant that smelled amazing! I didn't even know I <i>could</i> smell anymore. 
					`);
					break;
				}
				case 103: {
					writeHTML(`
						gilf I passed by an electronic store today, I wonder if I could play with one of these interesting-looking box machines with the funny games on them. 
					`);
					break;
				}
				case 104: {
					writeHTML(`
						gilf playerF! Did you know there are stores dedicated to selling adult pictures and movies? I was so shocked! Times really have changed a lot, they don't even need to hide what they're selling once you're inside, how scandalous! 
					`);
					break;
				}
				case 105: {
					writeHTML(`
						gilf Oh, I was near that store I talked about yesterday. Did you know they sell games too? Games, with lewd things in them! Isn't that crazy? 
					`);
					break;
				}
				case 106: {
					writeHTML(`
						gilf You know what's confusing? Milk. There's a million types now. 
					`);
					break;
				}
				case 107: {
					writeHTML(`
						gilf I went up really high today, and you know what I saw? Apparently, some of the birds in the sky aren't actually birds, they're like... Really big sky cars! What a time to be rich, you can afford to fly through the sky. 
					`);
					break;
				}
				case 108: {
					writeHTML(`
						gilf My, it sure is a warm day. Back in my time, at this time lf year it would be freezing. I suppose that's another advantage of the modern era. 
					`);
					break;
				}
				case 109: {
					writeHTML(`
						gilf I'm glad to see some sports haven't changed since I was alive. I'm not much a fan, but it's nice to have something familiar to hold onto. 
					`);
					break;
				}
				case 110: {
					writeHTML(`
						gilf Hmm... I saw another sports game today. The players these days are amazing! Just one of them could probably beat an entire team from my era. What are they feeding children these days? 
					`);
					break;
				}
				case 111: {
					writeHTML(`
						gilf playerF, playerF! I can taste normal foods! Someone left out a piece of candy, it tasted wonderful! The sweetest thing I'd ever had before was raw honey, but this was amazing! 
					`);
					break;
				}
				case 112: {
					writeHTML(`
						gilf I went to the school again today, I wonder if Sasha was proud of what she accomplished. I suppose she was, right? Otherwise she would have lingered. 
					`);
					break;
				}
				case 113: {
					writeHTML(`
						gilf I think I met one of my great, great granddaughters on the street. She's quite successful, I'm happy for her.<br>She was also quite... Voluptuous. Even more than me. Not that there's anything wrong with that! 
					`);
					break;
				}
				case 114: {
					writeHTML(`
						gilf I cannot wait until the rainy season. I've forgotten what rain running down my skin feels like. 
					`);
					break;
				}
				case 115: {
					writeHTML(`
						gilf Hmm... I wonder if it will snow. Snow days were a treasured memory for me, some of the best moments of my life happened in the snow. 
					`);
					break;
				}
				case 116: {
					writeHTML(`
						Hmm, I should take up reading again. Something long, something I never had time for...<br>I saw a book series that seemed quite funny. It was called 'One Piece', but there were a hundred volumes!
					`);
					break;
				}
				default: {
					writeHTML(`
						gilf We sure have been meeting a lot lately. But I think that's lovely in its own way. Would you like to have some fun again today? 
					`);
				}
			}
			raiseTrust("gilf", 1);
			writeFunction("writeEncounter('gilfBlowRepeat')", "Another Blowjob");
			writeFunction("writeEncounter('gilfTitRepeat')", "Another Titfuck");
			writeFunction("writeEncounter('gilfSexRepeat')", "Another Round of Sex");
			writeFunction("writeEncounter('cancel')", "Go Back");
			break;
		}
		case "gilfBlowRepeat": {
			writeHTML(`
				im 018.jpg
				t For self-professed refined lady, it sure doesn't take long for her to eagerly take in what's hidden in your pants.
				im 019.jpg
				t That said, for someone as experienced as you, it doesn't take long for you to cum. It can't be helped though, ghost blowjobs just can't be beat.
				im 020.jpg
				t And just like last time, the pleasure doesn't stop once you've cum. Like she's in a trance, she begins to bob forwards again.
			`);
			if (checkFlag("gilf", "morning2")) {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			else {
				writeFunction("writeEncounter('morning2')", "Get some rest");
			}
			break;
		}
		case "gilfTitRepeat": {
			writeHTML(`
				im 035.jpg
				t At this rate, gilfF is going to end up as experienced at titfucking as she is buxom. Which, to be fair, is no small feat.
				im 036.jpg
				t But you're confident she's got what it takes.
				im 037.jpg
				gilf Mph...<br>Hun hore, 'lease?
				t She says, but it doesn't seem like 'no' is actually an answer here.
			`);
			if (checkFlag("gilf", "morning2")) {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			else {
				writeFunction("writeEncounter('morning2')", "Get some rest");
			}
			break;
		}
		case "gilfSexRepeat": {
			writeHTML(`
				define gilf = sp gilf; im images/gilf/schoolgirl.jpg; 
				im 053.jpg
				gilf Ehehe~<br>We're really getting a lot out of this design, hmm?
				im 054.jpg
				gilf Hah~!<br>So warm~
				im 048.jpg
				t And she leans forwards to give you a soft kiss on the cheek.
				gilf *mwah*<br>Oh! Did you jump a little at that? Maybe you like these little kisses? You wouldn't mind a little experimenting, would you?
				t Today is going to be a long day.
			`);
			if (checkFlag("gilf", "morning2")) {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			else {
				writeFunction("writeEncounter('morning2')", "Get some rest");
			}
			break;
		}
		case "morning2": {
			writeHTML(`
				t You feel something pressing on you from behind.
				gilf So cute~
				t It's early. Very early, it takes you a moment for your brain to fully wake up, but once it does you roll over to see...
				im 062.jpg
				t gilfF, naked, looking back at you.
				gilf Eh? Oh, did I wake you? Sorry, dear...
				im 061.jpg
				gilf Go back to sleep, alright? I won't do anything too fun, not while you're asleep at least.
			`);
			addFlag("gilf", name);
			writeFunction("loadEncounter('system', 'newDay')", "Go back to sleep");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "gilf1", name: "Making an Offer"},
	{index: "gilf2", name: "You Can't Refuse"},
	{index: "gilf3", name: "The Day of her Daughter"},
	{index: "gilf4", name: "Underestimate your Virtues"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "gilf1": {
			writeHTML(`
				player Fine, I'll help you find her. I'll need some payment in advance, first.
				gilf R-really? Right! Okay, I can do this. Okay!
				t She psyches herself up, closes her eyes, and puckers her lips.
				player ... Wow, getting right to it. Alright.
				t You unzip, and after a moment she opens one eye out of curiosity, and then the other in shock.
				im 013.jpg
				gilf Um...
				im 014.jpg
				gilf Uh... What is that?
				player It's a dick.
				gilf ... Nope. No it isn't. Penises are supposed to be soft and cute. They wiggle when you shake your hips, and then you get all embarrassed because... Because... W-wait, what are you even doing, I thought you wanted a kiss!
				player You sound a lot like a virgin for someone with a daughter.
				gilf Th-that's because I-
				im 016.jpg
				gilf Gggh-!
				im 017.jpg
				gilf Hmmlph-!
				player Relax, I'll help you find your kid. We're both out of our element I guess, I'm not exactly a detective.
				gilf ...
				t She takes a moment to find her resolve, and relaxes her jaw.
				im 018.jpg
				t Getting a ghost blowjob is a real out of body experience!
				t ... You take a few points of mental damage from that one, not your best moment, but you're quickly healed as, despite gilfF's clear inexperience, ghosts apparently don't have a gag reflex, or throat muscles to strain. You get all the benefits from a soft mouth without any of the normal first-blowjob downsides. Plus, ectoplasm apparently makes a good lubricant. So good in fact...
				im 019.jpg
				t That you flood her spectral mouth. Luckily she doesn't need to breathe, otherwise her lungs would be real sticky right about now.
				player For a first timer, you actually-
				im 020.jpg
				player ... You alright there?
				gilf ...
				t You pull out, she doesn't even seem to notice, instead playing with your sperm on her tongue with a gaze that says "sorry, gilfF isn't home right now."
				t Eventually she finds the mind to swallow, and snaps back to reality.
				gilf Good... G-good that... That it's done! Right, I dunno what that was, but it's over, right?
				player Wait, you actually are a virgin, aren't you?
				gilf Yes! I was trying to tell you that. I had to adopt my daughter because my husband was only-<br>N-never mind. Anyways, you'll help, right?
				player Sure, where do I start?
				gilf Well... I don't know, actually. I don't recognize any of the buildings around here. I'll go that way, and you go this way!
				t She points off in some random direction before flying off.
				player Wait! ... Damn, she's gone. Well, I'll do my best I guess.
			`);
			break;
		}
		case "gilf2": {
			writeHTML(`
				im 034.jpg
				player Nghh... You were a virgin just yesterday, where the hell did you learn this?
				gilf Hm~ It just came to me. Ever since you made me use my mouth last time, I've felt rejuvinated. New ideas have been flowing into my mind.
				im 035.jpg
				gilf It's your fault, isn't it? I'm not to blame at all, so take responsibility for your sinful nature! 
				t Her previous hesitation seems to have faded since your last visit. She's more confident, more vibrant, and doesn't seem to think much of using her tits as an incentive to help.
				t Her head bobs up and down, again showing off her lack of a gag reflex, and this time with the added enthusiasm she's showing even more efficency at getting you off than last time.
				im 036.jpg
				gilf Hmm... <br><i>Warm...</i>
				player Alright...  Okay, I'll-
				im 037.jpg
				player Ghh...
				t As if she can't hear you, she begins suckling in earnest all over again, driving your overstimulated brain wild.
				t ...
				gilf I guess you can teach an old lady new tricks after all.
				player What's with the change? Before you were all worried and disorientated.
				gilf I know, but things don't seem as scary any more. I don't know why, but I bet it's a sign! In fact, I feel even more energized than I did before! Alright, let's start the search!
				player I'm... Well, a little drained though.
				gilf Let's meet back up soon! If only I could remember more... Maybe something in town will jog my memory!
				t She floats off, not listening to you as she goes.
			`);
			break;
		}
		case "gilf3": {
			writeHTML(`
				im 021.jpg
				gilf Hello again, playerF.
				im 022.jpg
				player gilfF. You look... Well, what's the occasion?
				gilf I'm not really sure, I just felt like I needed to see you again. Be with you again, rather. 
				t It seems like her search isn't paying off. Maybe she needs a break? Or perhaps the two of you spending time together is helping her become more human? 
				im 023.jpg
				gilf Is it really so strange for someone like me to feel lonely? If you'd like, I could pretend this is just another incentive to help me instead. 
				player Hey, I won't turn you down.
				gilf That's good. Relax... Just let me lose myself in your body... Just for a moment. 
				t ...
				player You ready?
				gilf Yes, thank you. Go ahead... And... Push...!
				im 024.jpg
				t An audible sound of wetness is the only sound between the two of you, but only for a moment.
				im 025.jpg
				gilf Hah~! 
				t As surreal as it is to think about how you just took a ghost-milf's virginity, in the moment all you can think about is a familiar, warm wetness on your length.
				t Her body is an extension of her sense of self, so thankfully she's spared the pain a deflowering would normally entail. 
				gilf It's... Goood...!
				t Her embrace is soothing, yet exciting to your core at the same time, and quicker than you expected...
				im 026.jpg
				im 027.jpg
				gilf Eh... Ehehe~<br>It's warm, more than before... It's like it's coursing through me...<br>It's like my heart's started beating again after a long, long time...
				player You alright?
				gilf Yes... It's almost like being drunk, my body... Is...
				t She wobbles for a bit, then catches herself and rubs her head. Her eyes widen suddenly, and her face is that of a sudden revelation.
				gilf Sasha!
				player I'm sorry?
				gilf That was her name, my daughter's name, I can remember now! It's all coming back to me, she took her husband's name, Sasha principalL! I'm so close, thank you playerF!
				player You're welcome, I think.<br><i>principalL... I've heard that last name before...</i>
			`);
			break;
		}
		case "gilf4": {
			writeHTML(`
				im 053.jpg
				gilf Hah... Hah... I can't believe young girls these days can keep up with this style! You're hitting way too deep~!
				player Ghh, what girl were you spying on who did cowgirl this well?
				gilf Eheh~ Don't think of other girls while we're together, okay~<br>Or...
				t She stops bouncing, and suddenly you feel her pussy clench at the base, then the tightness rises up your shaft, then back down in a milking motion.
				gilf Or I'll have to erase all those other girls from your mind~
				t She lifts herself as her muscles continue to clench rhythmically, performing a sex act no human could ever hope to match.
				gilf Nnn... I feel it... Rising~!
				im 054.jpg
				gilf Hah~!
				im 048.jpg
				t She leans forwards, giving you a soft peck on the cheek as your cum leaks out of her pussy.
				gilf Mmm... You know, the more I see of the world of today, the more... Lewd it feels. Did you know that making love before marriage is actually quite commonplace now?
				player Need... Need help acclimating?
				gilf Ara ara~<br>If you're offering, I won't turn you down. I'll be sure to reward you handsomely too for the lessons~
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
	{index: "text1", requirements: "?trust gilf -1;"},
	{index: "text2", requirements: "?trust gilf -2;"},
	{index: "reward", requirements: "?flag gilf morning2;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "text1": {
			writePhoneSpeech("???", "images/none.png", "Let Me Out");
			writePhoneSpeech("???", "images/none.png", "LeT mE OUt");
			setTrust("gilf", -2);
			clearText(character.index);
			break;
		}
		case "text2": {
			writePhoneSpeech("mom", "", "Let Me Out!");
			writePhoneChoices("What are you talking about?", "Let you out from where?");
			setTrust("gilf", -3);
			break;
		}
		case "text2A": {
			if (checkTrust("mom") > 0) {
				writePhoneSpeech("player", "", "What are you talking about?");
				writePhoneSpeech("mom", "", "That's a weird way to start a conversation playerF");
				writePhoneSpeech("player", "", "You just texted me 'Let me out', did you get stuck in your apartment?");
				writePhoneSpeech("mom", "", "No??? I'm not even home yet I think your phone is glitching out");
			}
			else {
				writePhoneSpeech("player", "", "What are you talking about?");
				writePhoneSpeech("mom", "", "Excuse me? I don't think we've met before.");
				writePhoneSpeech("player", "", "But you just texted me 'Let me out'");
				writePhoneSpeech("mom", "", "I think you have the wrong number.");
			}
			clearText(character.index);
			break;
		}
		case "text2B": {
			if (checkTrust("mom") > 0) {
				writePhoneSpeech("player", "", "Let you out from where?");
				writePhoneSpeech("mom", "", "That's a weird way to start a conversation");
				writePhoneSpeech("player", "", "You just texted me 'Let me out', didn't you?");
				writePhoneSpeech("mom", "", "That would be a pretty impressive butt-dial lol No, I didn't send you anything just now");
			}
			else {
				writePhoneSpeech("player", "", "Let you out from where?");
				writePhoneSpeech("mom", "", "Excuse me? I don't think we've met before.");
				writePhoneSpeech("player", "", "But you just texted me 'Let me out'");
				writePhoneSpeech("mom", "", "I think you have the wrong number.");
			}
			clearText(character.index);
			break;
		}
		case "reward": {
			writePhoneImage("images/gilf/060.jpg", "Art by Toxic Love");
			writePhoneSpeech("gilf", "", "Not all characters have dedicated endings, gilfF is one of them. Still, you've completed as much of gilfF as possible. Good work!");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Hello?");
			writePhoneSpeech("CELL SERVICE", "images/none.png", "NUMBER NOT FOUND");
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
				//This checks if the encounter uses the .location variable, signifying it's using legacy code.
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