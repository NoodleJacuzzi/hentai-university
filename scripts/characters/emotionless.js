var character = {index: "emotionless", fName: "Sasha", lName: "Drakeson", trust: 0, encountered: false, textEvent: "", met: false, color: "#FFDEAB", author: "NoodleJacuzzi", artist: "Nagi Ichi", textHistory: "", unreadText: false,};

var logbook = {
	index: "emotionless", 
	desc: "The secretary of the school's student council, extremely focused on efficiency, excellent at planning and organization.",
	body: "Her figure is extremely sleek and, dare you say it, ergonomic. Still, rumors abound that at certain times she wanders around the school with a chest twice its normal size.",
	clothes: "She wears a very professional suit and pants, accompanied by a fashionable red tie.",
	home: "Some days she walks home to vintage street with the student council, but if she's interested in someone she'll head straight to their office without delay.",
	tags: "Small but actually Huge Breasts, Risky Sex",
	artist: "Nagi Ichi",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro1", name: "Someone has drawn a crowd", requirements: "?location schoolEntrance; ?trust emotionless 0;", altName: "", altImage: "",},
	{index: "intro2", name: "emotionless is here, wandering around", requirements: "?location classroomB; ?trust emotionless 2;", altName: "", altImage: "",},
	{index: "intro3", name: "emotionless is here, wandering around", requirements: "?location westHallway; ?trust emotionless 3;", altName: "", altImage: "",},
	{index: "intro4", name: "You hear a sudden *CLICK*", requirements: "?location eastHallway; ?trust emotionless 4;", altName: "", altImage: "",},
	{index: "emotionlessThighs", name: "emotionless knocks at your door", requirements: "?location playerOffice; ?trust emotionless 5;", altName: "", altImage: "",},
	{index: "emotionlessQuo", name: "emotionless is here", requirements: "?location playerOffice; ?trustMin emotionless 80;", altName: "", altImage: "",},
];

writeHTML(`
	define emo = sp emotionless;
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
				im 001.jpg
				t There's a high amount of energy forming in the air as a tall blonde walks around the school with a crowd of students around her.
				purple And so...
				emo Indeed, I'm afraid I can't help you further though.
				purple Right! Sorry, take care.
				emo Of course.
				t And as she leaves the crowd around her continues to fluctuate, it seems she's attracting random students and helping them as she goes, before more than a few break off from the group to head home.
				purple ?trust purple 0; She's really got things together...
				brown ?trust purple 0; Yeah... Oh, we should get going.
				player ?trustMin purple 1; Good to see you purpleF. Do you know her?
				purple ?trustMin purple 1; ?trustMax purple 70; Oh! Yeah, she's the student council secretary. She was just asking for a new study location, she helps out struggling students a lot too.<br>Eh... Sorry *mister counselor, but I don't think she needs your help. She seems to have things pretty well put together.
				purple ?trustMin purple 71; Oh, *master! Yeah, she's the student council secretary. She moves around the school a lot looking for good study locations. Eh... I don't think she'd make a good target. Somebody as single-minded as her probably isn't all that into sex.
				player Interesting.
				finish
			`);
			unencounter(character.index);
			setTrust("emotionless", 2);
			break;
		}
		case "intro2": {
			writeHTML(`
				t You spy emotionlessF wandering about, it seems the other students have finished crowding around her.
				t As you pass her by, you can hear her muttering to herself.
				emo Hm... So I'll need to invest heavily into a backup location earlier than expected...<br>Let's see... That makes each classroom on this side... This sort of maximum is unacceptable...
				player Ah, emotionlessF. Anything I can help with?
				emo Where to try next... Let's see...
				t She swalks around you, but is too wrapped up in whatever she's doing to hear you. You only catch a glimpse of her notebook, but it's fully of tally marks and times, and each page you spy is practically bursting with notes.
				finish
			`);
			unencounter(character.index);
			setTrust("emotionless", 3);
			break;
		}
		case "intro3": {
			writeHTML(`
				im 025.jpg
				emo That makes a rate of... Ten minutes to thirty minutes. Too dangerous a rate. And having already fully explored the location, it's certainly too dangerous in more ways than one to dally in there...
				t She passes you by, seemingly in a rush and looking quite flushed. 
				emo And *he's here as well, that increases the risk factor even further, but average visit times when moving westbound are...
				t But before you can ask what she's muttering about she's already gone.
				player <i>Seems like she finally has a destination in mind. I wonder where she's gone?</i>
				finish
			`);
			unencounter(character.index);
			setTrust("emotionless", 4);
			break;
		}
		case "intro4": {
			writeHTML(`
				t *CLICK*
				player <i>Was that a phone camera?</i>
				sp emo; im images/none.png; HIDDENCurses, the shudder sound...
				player <i>It's coming from inside the empty classroom...</i>
				trans emotionless1; Investigate
				trans cancel; Ignore it
			`);
			break;
		}
		case "emotionless1": {
			writeEvent(name);
			passTime();
			setTrust("emotionless", 5);
			writeHTML(`finish`);
			break;
		}
		case "emotionlessThighs": {
			writeEvent(name);
			passTime();
			setTrust("emotionless", 80);
			writeHTML(`finish`);
			break;
		}
		case "emotionlessQuo": {
			switch(checkTrust("emotionless")) {
				case 80: {
					writeHTML(`
						player Come in. emotionlessF, how have you been?
						emo Impatient. I wonder if our arrangement will reduce my productivity in the long run. I do have council responsibilities to perform, and you have your counseling activities. So, what shall we be doing today?
						player Hmm...
						`);
					writeBar("images/emotionless/emotionlessT.png", "Degeneracy", "40")
					writeHTML(`
						trans emotionlessTitjob; Let's try titfucking
						trans emotionlessThighsRepeat; Another Thighjob
						trans cancel; Go back
					`);
					break;
				}
				case 81: {
					writeHTML(`
						player Come in. emotionlessF, how have you been?
						emo Eagerly awaiting our meeting today. Aside from that, I observed ants recently.
						player ... Why?
						emo To observe the efficiency of a hive mind, of course. Sometimes I wish my mind could be linked to President presidentF for greater efficiency. So, what shall we be doing today?
						player Hmm...
						`);
					writeBar("images/emotionless/emotionlessT.png", "Degeneracy", "50")
					writeHTML(`
						trans emotionlessSpanking; Let's see if you're a masochist
						trans emotionlessTitjobRepeat; Another Titfuck
						trans emotionlessThighsRepeat; Another Thighjob
						trans cancel; Go back
					`);
					break;
				}
				case 82: {
					writeHTML(`
						player Come in. emotionlessF, how have you been?
						emo Slightly nettled. I once went to a haunted house, but there were nothing but poorly-cleaned machines and humans inside.<br>I petitioned them to remove the "haunted" prefix, but I was ignored.
						player ... Sure, that tracks.
						emo So, what nefarious deed shall we commit together today?
						`);
					writeBar("images/emotionless/emotionlessT.png", "Degeneracy", "60")
					writeHTML(`
						trans emotionlessSex; Let's tap into that exhibitionism
						trans emotionlessSpankingRepeat; More spanking sex
						trans emotionlessTitjobRepeat; Another Titfuck
						trans emotionlessThighsRepeat; Another Thighjob
						trans cancel; Go back
					`);
					break;
				}
				case 85: {
					writeHTML(`
						player Welcome back, emotionlessF.
						emotionless It's lovely to be back. Thank you again for your time. In our time together you've exposed me-
						player <i>Heh.</i>
						emo -to an entirely new world. What lesson do you have for me today?
					`);
					writeBar("images/emotionless/emotionlessT.png", "Degeneracy", "80")
					writeHTML(`
						trans emotionlessPetIntro; Research a new fetish
						trans emotionlessBlind1; Blindfolded Blowjob !flag emotionless emotionlessBlind1;
						trans emotionlessBlind2; Blindfolded Sex ?flag emotionless emotionlessBlind1; !flag emotionless emotionlessBlind2;
						trans emotionlessBlindRepeat1; Another Blindfolded Blowjob ?flag emotionless emotionlessBlind2;
						trans emotionlessBlindRepeat2; More Blindfolded Sex ?flag emotionless emotionlessBlind2;
						trans emotionlessSexRepeat; More risky sex
						trans emotionlessSpankingRepeat; More spanking sex
						trans emotionlessTitjobRepeat; Another Titfuck
						trans emotionlessThighsRepeat; Another Thighjob
						trans cancel; Go back
					`);
					break;
				}
				case 86: {
					writeHTML(`
						player Welcome back, emotionlessF.
						emotionless Indeed. Let's see... How do you feel about sharks, in general?
						player ... Why?
						emo ... We'll be right back after these messages.
						player You can't cut to commercial in real life!
						emo Regardless! Ignoring my poor attempt at smalltalk, shall we get down to... <i>Business</i>?
						player Only this school's head council secretary would think the word "business" is arousing.
					`);
					writeBar("images/emotionless/emotionlessT.png", "Degeneracy", "90")
					writeHTML(`
						trans emotionlessHumilIntro; Research a new fetish
						trans emotionlessPet1; !flag emotionless emotionlessPet1; Petplay
						trans emotionlessPetRepeat1; ?flag emotionless emotionlessPet1; More petplay
						trans emotionlessBlind1; Blindfolded Blowjob !flag emotionless emotionlessBlind1;
						trans emotionlessBlind2; Blindfolded Sex ?flag emotionless emotionlessBlind1; !flag emotionless emotionlessBlind2;
						trans emotionlessBlindRepeat1; Another Blindfolded Blowjob ?flag emotionless emotionlessBlind2;
						trans emotionlessBlindRepeat2; More Blindfolded Sex ?flag emotionless emotionlessBlind2;
						trans emotionlessSexRepeat; More risky sex
						trans emotionlessSpankingRepeat; More spanking sex
						trans emotionlessTitjobRepeat; Another Titfuck
						trans emotionlessThighsRepeat; Another Thighjob
						trans cancel; Go back
					`);
					break;
				}
				case 87: {
					writeHTML(`
						t ... Or at least you thought she was. Weird, she's had an inhuman level of consistency up until now.
						player I wonder where she could be?<br>Oh, I think I forgot to check my texts this morning. I should probably check those when I'm back in my chair.
						trans cancel; Go back
					`);
					break;
				}
				case 100: {
					writeHTML(`
						player Another day.
						emotionless Another delight~<br>In all our time together playerF, I can't help but appreciate all you've shown me. I was wondering if I might have a moment of your time, since we have some privacy, to discuss the terms of our dalliances? If you'd rather relieve yourself with my body instead though, I won't mind.
					`);
					writeBar("images/emotionless/emotionlessT.png", "Degeneracy", "99")
					writeHTML(`
						trans emotionlessEndingPrompt; Review emotionlessF's contract
						trans emotionlessPet1; !flag emotionless emotionlessPet1; Petplay
						trans emotionlessPetRepeat1; ?flag emotionless emotionlessPet1; More petplay
						trans emotionlessBlind1; Blindfolded Blowjob !flag emotionless emotionlessBlind1;
						trans emotionlessBlind2; Blindfolded Sex ?flag emotionless emotionlessBlind1; !flag emotionless emotionlessBlind2;
						trans emotionlessBlindRepeat1; Another Blindfolded Blowjob ?flag emotionless emotionlessBlind2;
						trans emotionlessBlindRepeat2; More Blindfolded Sex ?flag emotionless emotionlessBlind2;
						trans emotionlessSexRepeat; More risky sex
						trans emotionlessSpankingRepeat; More spanking sex
						trans emotionlessTitjobRepeat; Another Titfuck
						trans emotionlessThighsRepeat; Another Thighjob
						trans cancel; Go back
					`);
					break;
				}
				default: {
					writeHTML(`
						player Come in.
						emo I have fantastic news!
						player Just slap me with that right as you walk in the door. Ever hear of "hello"?
						emo Introductions are for the inefficient.<br>I'm quite glad to say that since our last dalliance my productivity rate has shot up by 63.2%. More than making up for the extra time we'll be spending together!
						player ... You're getting more work done because we're-
						emo Soon bound to be copulating like animals, yes. My own self-relief sessions had been growing longer and less effective, even considering the added risk-factors of pleasuring myself at school.<br>However, due to your expertice at manhandling me...
						player ?gender female; Oi. Rude.
						player ?gender male; Hey, I'll take that as a compliment.
						emo I have completed this!
						t She holds out a stack of papers the size of a phonebook, each page completely filled with calculations.
						player ... Is it every number in pi?
						emo There are only ten unique numbers in pi, so no. This is a mathematical formula which provably solves the issue of compounding water waste resulting in a reduction of global drinking water.
						player ... Cool.
						emo So! My mind has been positively racing, I absolutely must know, what is on the agenda for today?
						`);
					writeBar("images/emotionless/emotionlessT.png", "Degeneracy", "70")
					writeHTML(`
						trans emotionlessBlindIntro; Research a new fetish
						trans emotionlessSexRepeat; More risky sex
						trans emotionlessSpankingRepeat; More spanking sex
						trans emotionlessTitjobRepeat; Another Titfuck
						trans emotionlessThighsRepeat; Another Thighjob
						trans cancel; Go back
					`);
				} //trans emotionlessChat; Small Talk Engage!
			}
			break;
		}
		case "emotionlessChat": {
			writeHTML(`
				
				trans emotionlessQuo; Go back
			`);
			break;
		}
		case "emotionlessThighsRepeat": {
			writeHTML(`
				im 027.jpg
				im 029.jpg
				im 028.jpg
				im 030.jpg
				im 031.jpg
			`);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "emotionlessTitjob": {
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			addFlag("emotionless", name);
			raiseTrust("emotionless", 1);
			break;
		}
		case "emotionlessTitjobRepeat": {
			writeHTML(`
				im 042.jpg
				im 045.jpg
				im 046.jpg
				im 047.jpg
				im 048.jpg
			`);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "emotionlessSpanking": {
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			addFlag("emotionless", name);
			raiseTrust("emotionless", 1);
			break;
		}
		case "emotionlessSpankingRepeat": {
			writeHTML(`
				im 049.jpg
				im 050.jpg
				im 051.jpg
				im 052.jpg
				im 053.jpg
				im 054.jpg
				im 055.jpg
				im 056.jpg
			`);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "emotionlessSex": {
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			addFlag("emotionless", name);
			raiseTrust("emotionless", 1);
			break;
		}
		case "emotionlessSexRepeat": {
			writeHTML(`
				im 032.jpg
				im 033.jpg
				im 034.jpg
				im 037.jpg
				im 038.jpg
				im 039.jpg
				im 040.jpg
				im 041.jpg
			`);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "emotionlessBlindIntro": {
			writeHTML(`
				emo Blindfolding and sensory deprivation. My research shows that one one sense is taken away, others heighten in response. The complete and total helplessness that comes with a submission of one of your senses...
				player Right... Just try not to overindulge, okay? And keep your expectations to what's humanly possible. Buy some simple toys, do some research to get yourself mentally ready, and-
				emo Understood, I'll gather the materials and be back here the same time tomorrow!
				player You're buying them yourself?
				emo Indeed, and don't worry, budget is not an issue. I won't let you down.
				player Well... Alright then.
				t emotionlessF quickly leaves the room, looking excited and prepared to go out... Fetish gear hunting.
				finish
			`);
			passTime();
			setTrust("emotionless", 85);
			break;
		}
		case "emotionlessBlind1": {
			writeEvent(name);
			addFlag("emotionless", name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "emotionlessBlind2": {
			writeEvent(name);
			addFlag("emotionless", name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "emotionlessPetIntro": {
			writeHTML(`
				emo Petplay and collaring. My research on this subject has been... Thorough, although you've taught me that theoretical research is nowhere near the same as proper experience. Just thinking of what it must be like to surrender my very dignity...
				player Honestly, any fetish store should carry some useful stuff. Grab what speaks to you.
				emotionless And if-
				player No grabbing anything that <i>litterally</i> speaks to you. I don't need a talking toy in the bedroom.
				emotionless ... And what about-
				player Oh, and no fursuits. I know you said you don't have a budget, but that's way to far for a first-time dive.
				emotionless ... I have no further questions. I'll prepare the items and be back here tomorrow.
				finish
			`);
			passTime();
			raiseTrust("emotionless", 1);
			break;
		}
		case "emotionlessPet1": {
			writeEvent(name);
			addFlag("emotionless", name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "emotionlessHumilIntro": {
			writeHTML(`
				emo This one... Public humiliation. This one I wonder if it's simply too much. Casual risky sex is already something like a drug to me. I wonder if taking a massive leap like this, even if I work to protect my identity, would completely reshape my tastes and perspective...<br>S-still, despite all that, this is certainly the topic I'm most excited to study by quite a wide margin.
				t emotionlessF is visibly excited at the very thought. A scarlet blush has completely taken her usually quite-stoic demeanor.
				player Public stuff... Honestly, I don't think you <i>can</i> set your expectations too high. Knowing how you reacted to a bit of risky sex and how far your masochistic streak extends...
				emotionless I see... I should prepare to burn my former belongings then to commit more effectively to a new lifestyle to adapt then.
				player How on Earth is that an okay reaction?!<br>Anyways, you'll want to keep things safe, so nothing illegal, and preferably done in a way that doesn't implicate me in anything.
				emotionless I see. I'm sure I won't disappoint you then. I think I can manage within that ruleset.
				player I see. Then can you promise that you won't do anything too crazy?
				emo ...I once went to a haunted house, but there were nothing but poorly-cleaned machines and humans inside.<br>I petitioned them to remove the "haunted" prefix, but I was ignored.
				player You are absolutely terrible at changing the subject.
				finish
			`);
			passTime();
			raiseTrust("emotionless", 1);
			break;
		}
		case "emotionlessHumilText": {
			writeHTML(`
				t *Ring*... *Ring*...
				emo H-hello~!
				t As she picks up you can hear her breathing heavily, although it sounds like it's through a mask. You can hear the sound of a light wind and some birds too.
				player emotionlessF? Everything alright?
				emo B-better than alright! So, I'd like to meet up at a nearby hotel if that's alright with you! Quickly!
				player O... Kay? Did you have a plan for what we're doing today?
				emo Yes!<br>Err, sorry, yes. I did quite a bit of research. Do you know of rimming?
				player I am aware of it, yeah.
				emo Perfect! Let's meet quickly!
				player emotionlessF. What are you wearing?
				emo How scandalous of you~
				im 083.jpg
				define emo = sp emotionless; im images/emotionless/emotionlessGyaru.jpg;
				emo Nothing appropriate for the the situation, I promise. I'll head into the hotel ahead of you so it doesn't seem like we're together. See you soon~
				trans emotionlessHumil1; Meet up
			`);
			clearText("emotionless");
			hideStuff();
			setTrust("emotionless", 100);
			break;
		}
		case "emotionlessHumilQuo": {
			writeHTML(`
				im 083.jpg
				t What are you calling emotionlessF over for today?
				trans emotionlessHumilRepeat1; Another rimjob
				trans emotionlessHumil2; Sex !flag emotionless emotionlessHumil2;
				trans emotionlessHumilRepeat2; More sex ?flag emotionless emotionlessHumil2;
				trans cancel; Change your mind
			`);
			hideStuff();
			break;
		}
		case "emotionlessHumil1": {
			writeEvent(name);
			addFlag("emotionless", name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "emotionlessHumil2": {
			writeEvent(name);
			addFlag("emotionless", name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "emotionlessEndingPrompt": {
			writeHTML(`
				player You want to redraw the lines of our little arrangement, huh? Second thoughts about it all?
				emo Yes. Well, no, not exactly. I... I want to be yours.
				player You already are.
				emo No, not like we are now. Right now, I'm still emotionlessF. I'm the student council secretary. I live alone. I have passionate, erotic sex with you every other day. It's all... Roleplay.
				player Oh? You want to stop playing, is that it?
				emo Yes! I want to wake up every morning in your arms! I want to fall asleep every night filled with your cum! I want you, and I want you to want me, and to let nothing else in the whole world matter!<br>I'm ready to move into your place at any time to be your permanent... Fuckslut...
				im 027.jpg
				emo This is the pose that started our time together. Please. I want you to take me in, and for our arrangement to become my entire life. You've made every day exciting for me, I want it to stay like this permanently.
				trans emotionlessEndingAccept; Accept emotionlessF's offer
				trans emotionlessEndingReject; Turn emotionlessF down
			`);
			break;
		}
		case "emotionlessEndingAccept": {
			writeHTML(`
				player I accept.
				emotionless ...!
				player You understand what that means, right?
				emotionless I'm... Yours... Forever!
				t ...
				emotionless Ohh...
				im 094.jpg
				player You're fucking soaked, huh?
				emotionless Yes. Just knowing that I've finally crossed the line, that I'll never go back, and that it was entirely my choice... It's...<i> Intoxicating</i>.
				player Well then, I won't waste time.
				im 095.jpg
				emo Oh~!
				player Welcome to the first day of the rest of your life!
				im 096.jpg
				emo Hoggh~! It feels even better than usual~! This is amazing!
				im 097.jpg
				emo Hgggh~!
				im 098.jpg
				emo OoooOOOh~! Cumming~! H-here's to the first day of forever~!
				player Did you really think...
				im 099.jpg
				player I was finished?!
				emo Hahh~! W-wait! I just came~!
				im 100.jpg
				emo OOOOUGH~!
				im 101.jpg
				im 102.jpg
				emo Hoh... Holy... *Master*~
				player You still have a face begging for more, huh?
				im 099.jpg
				player This is your life now! Every day, whenever <i>I</i> want! You! Are! MINE!
				emo Y-yes~! Yes pleeeeeease~!
				t And so the day went on, and eventually drew to a close.
				im 100.jpg
				t Any time you weren't having sex was a break. To sleep, to eat, to rest... And then it was back to what the two of you really wanted. Needed.
				im 101.jpg
				t To fuck. This marked the end of the first of many blurred days that would soon become the norm.
				t ...
				define emo = sp emotionless; im images/emotionless/emotionlessGyaru.jpg;
				t Months later...
			`);
			if (checkTrust("president") > 80) {
				writeHTML(`
					treasurer presidentF! We got a package from emotionlessF.
					president Oh really? I think she's been training with playerF. It's been months since *he let her come back to school, I wonder what they've been doing?
					treasurer Knowing *him, I don't think I want to know... There's a disc inside. Can we just-
					president We're watching it. treasurerF, set up the player. I at least want to know how our former head secretary is doing.
					treasurer It's... Black? A dark room? Is that...?
					emo President~! Heeeeey~!
					president ...!
					treasurer Is... Is she...?!
					emo Hey girls! Just thought I'd catch back up with you~! Today's fetish was just supposed to be preggo sex, but I wanted to add a little spice so I asked my *master to help record a little message for you two! Let me get the lights...
					im 103.jpg
					treasurer emotionlessF!
					president M-my, I barely recognize her.
					emo Hah~! How's it look from your end? I used to have such a sleek figure, were you jealous? I bet you are now! My *master stuffed my pussy with so much jizz that I'm super pregnant now~!
					treasurer Ugh, why'd they have to send us their sex tape? It's bad enough *he keeps coming around the council room to "play" with us. Here, let me-
					president N-no, keep it playing. It's good to see emotionlessF after so long.
					treasurer presidentF...
					emo You probably already know, but I'm not coming back to the council, being a jizzrag for *master is just way too much fun! I hope you two don't miss me too much. Although, you're welcome to join me anytime!
					president ...
					emo Ah~ Hah~<br>N-now I know it's a girl, so I thought I'd name her presidentF after you! But if you wanna... Wanna join the harem then come quick...! And I'll pick a new... New...!
					im 104.jpg
					emo Hoooh~! Cumming~! Your pregnant bitch is cumming her brains out again on video~!
					treasurer Alright, I'm stopping it there! presidentF, you can't seriously be considering joining her! playerF left you in charge of the school while *he's away. You're practically running the place, you can't be wanting to throw that away to... To become some pregnant whore like her!
					president Of... Of course not...<br>Ahem, sorry treasurerF, I'll need to cut today's meeting a little short.
					treasurer presidentF...
				`);
			}
			else {
				writeHTML(`
					treasurer presidentF! We got a package from emotionlessF!
					president Really? She's been absent for months now. She can send a package, but not bother to call?
					treasurer Maybe it's important? Oh, there's a disk inside! Let me see if we still have something that can play this...
					president She'd better have a good excuse. Abandoning her head secretary duties, she may as well have dropped out of school completely.
					treasurer Do you think it has anything to do with the counselor who came to the school a few months back?
					president I can't imagine she'd associate with someone like *him. Alright, let's see what she felt the need to send us.
					treasurer It's... Black? A dark room? Is that...?
					emo Hey girls! Just thought I'd catch back up with you~! Today's fetish was just supposed to be preggo sex, but I wanted to add a little spice so I asked my *master to help record a little message for you two! Let me get the lights...
					im 103.jpg
					treasurer emotionlessF!
					president What the hell?!
					emo Hah~! How's it look from your end? I used to have such a sleek figure, were you jealous? I bet you are now! My *master stuffed my pussy with so much jizz that I'm super pregnant now~!
					treasurer Sh-she's... This is so disgusting!
					president What happened to her... Where'd the pride I used to respect go? Is this some kind of dream?
					t But despite their apparent disgust, neither of them think to stop the playback.
					emo You probably already know, but I'm not coming back to the council, being a jizzrag for *master is just way too much fun! I hope you two don't miss me too much. Although, you're welcome to join me anytime!
					emo Ah~ Hah~<br>N-now I know it's a girl, so I thought I'd name her presidentF after you! But if you wanna... Wanna join the harem then come quick...! And I'll pick a new... New...!
					im 104.jpg
					emo Hoooh~! Cumming~! Your pregnant bitch is cumming her brains out again on video~!
					treasurer I-it's over?!
					president I... treasurerF. I think we need to watch it again. She's certainly being blackmailed. No woman, especially not treasurerF would enjoy being treated like... <i>That</i>.
					treasurer presidentF... You must be right! Alright, I'll restart it now! I won't miss a single detail!
					president N-neither will I...
				`);
			}
			writeBar("images/emotionless/emotionlessT.png", "Degeneracy", "100")
			writeHTML(`
				
			`);
			addFlag("emotionless", "complete");
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "emotionlessEndingReject": {
			writeHTML(`
				player Down girl, don't make me get the spraybottle.
				emo But-!
				player Calm down. I'll think about it and let you know when I come to a decision. 
				emo I see. Thank you.
				cancel
			`);
			break;
		}
		case "emotionlessBlindRepeat1": {
			writeHTML(`
				define emo = sp emotionless; im images/emotionless/blind.jpg;
				im 058.jpg
				im 059.jpg
				im 060.jpg
				im 061.jpg
				im 062.jpg
				im 063.jpg
				finish
			`);
			passTime();
			break;
		}
		case "emotionlessBlindRepeat2": {
			writeHTML(`
				define emo = sp emotionless; im images/emotionless/blind.jpg;
				im 064.jpg
				im 065.jpg
				im 066.jpg
				im 067.jpg
				im 068.jpg
				im 069.jpg
				im 070.jpg
				im 071.jpg
				finish
			`);
			passTime();
			break;
		}
		case "emotionlessPetRepeat1": {
			writeHTML(`
				define emo = sp emotionless; im images/emotionless/cat.jpg;
				im 072.jpg
				im 073.jpg
				im 074.jpg
				im 075.jpg
				im 076.jpg
				finish
			`);
			passTime();
			break;
		}
		case "emotionlessHumilRepeat1": {
			writeHTML(`
				define emo = sp emotionless; im images/emotionless/emotionlessGyaru.jpg;
				im 084.jpg
				im 085.jpg
				im 086.jpg
				im 087.jpg
				finish
			`);
			passTime();
			break;
		}
		case "emotionlessHumilRepeat2": {
			writeHTML(`
				define emo = sp emotionless; im images/emotionless/emotionlessGyaru.jpg;
				im 088.jpg
				im 089.jpg
				im 091.jpg
				im 092.jpg
				im 093.jpg
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
	{index: "emotionless1", name: "Risky Selfies: High Payoff, Low Cleanup, Poor Lighting"},
	{index: "emotionlessThighs", name: "Thighjobs: Acceptable Performance"},
	{index: "emotionlessTitjob", name: "Titjobs: Enjoyable, but Inefficient"},
	{index: "emotionlessSpanking", name: "Spankings: Quite Effective, Highly Risky"},
	{index: "emotionlessSex", name: "Risky Sex: A Perfect Fit"},
	{index: "emotionlessBlind1", name: "Sensory Deprivation: Improves Sensations"},
	{index: "emotionlessBlind2", name: "Helpless Sex: Quick Burst, High Quality"},
	{index: "emotionlessPet1", name: "Petplay: Humiliating, but Effective"},
	{index: "emotionlessHumil1", name: "Humiliation: Striking Solid Gold"},
	{index: "emotionlessHumil2", name: "Whorish Bareback Sex: A Perfect-er Fit"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "emotionless1": {
			writeHTML(`
				im 003.jpg
				t *CLICK*
				t The dark room is momentarily illuminated as emotionlessF snaps another photo of herself, her top opened to expose one of her breasts, much larger than you expected given her sleek frame.
				im 004.jpg
				t *CLICK*
				emo My my, as exhilarating as always... I wonder if this is what they mean about self-love? Still, this behavior is quite-
				t The door lets out an impressive creak as you try to gently nudge the thing open a little further.
				im 005.jpg
				emo ...
				player ...
				emo ... I thought I last saw you headed down the west hallway.
				player I had business up here.
				emo Ah, understandable.
				t A truly dreadful silence overtakes the room, one that you purposefully drag on for as long as it will last.
				emo So, this is it then. I've long since weighed the risks of this behavior, considered the possibility of destroying my finder's reputation in an attempt to save myself.
				player Sorry, but I don't intend to let-
				emo But no, that's not the foundation a society can be built upon. I must accept responsibility for my actions, and especially for my behavior. Counselor, I'm sorry we had to meet for the first and last time like this.
				player Hold on! Relax, I didn't come in to get you expelled. I'm the school's new counselor, and I take confidentiality <i>very</i> seriously.
				t She stops.
				t She sizes you up.
				t She stares at you blankly for what feels like a good long minute.
				emo I apologize. I'm frankly terribly at telling what people are thinking sometimes. 'Reading the room', as it were. I'm torn on whether you're a genuinely kind person making a serious offer, or a pervert ripped directly out of my early-morning reading material.
				player I... Early morning?
				im 006.jpg
				emo Yes, it helps increase my energy for the rest of the day.
				player This is not how I was expecting things to go. I will say, it's actually impressive you're still holding on to some measure of dignity.
				emo Dignity is a concept, not something I feel the need to physically cling to. That said, I'm not someone who'd lose composure over-
				im 007.jpg
				emo Khhh~
				player Sorry, what was that? I felt like grabbing your tit. I'm the latter, by the way.
				emo Animalistic behavior like this... Where did you find this kind of confidence? Still, I'll take that in place of a handshake.<br> Obviously we'll need to implement a failsafe.
				player Both of our reputations are on the line. What exactly did you have in mind?
				emo Yes. We must pinky swear we "absolutely won't tell anyone".
				player ... Did I miss a news headline or something? "Logic market experiencing a total crash"?
				emo When all options are terrible, even a bad idea can be the most logical one.
				player ... Fine. This isn't going to be a normal partnership, is it?
				emo Absolutely not. Now hurry, I timed this session exactly, I'm expected to walk home with several members of the student council tonight.
				t The two of you lock fingers and shake your hands, symbolizing the birth of your relationship with this very bizarre young lady.
				emo I'll see you tomorrow, I promise. And you'll have a full explanation as well.
			`);
			break;
		}
		case "emotionlessThighs": {
			writeHTML(`
				player Come in.
				t emotionlessF walks into your office, closes the door, and...
				im 027.jpg
				player Whoa!
				emo Counselor. I want to first apologize. I haven't had the time to write up a formal contract of what our relationship together should entail.<i>Yet.</i>
				player I... I wasn't expecting one. To be honest I don't really know what to expect from you.
				emo Then I'll do what I do best and lay out a plan. Counselor playerF. Extensive testing has resulted in me identifying seven fetishes which score higher than a 5.0 on my effective arousal scale. Exhibitionism, for reference, scores an 8.9.
				player <i>I might have gotten a lot more than I bargained for with this girl...</i><br>I don't understand how you quantify that.
				emo Carefully. Leaving the 10.0 score unused is obviously inefficient, but needing to re-structure the scale when a new peak is found is also an unacceptable timesink.
				player That's not what I meant... Nevermind.
				emo Regardless, I fully understand that what we have between us should not be defined as "passion", so I can only ask that you not interfere with my usual schedule, and that our time together be spent as efficiently as possible.<br>Normally I take two breaks per day for personal relief, one thirty-seven minutes after-
				im 029.jpg
				player Sorry, but I'm a little more spontaneous about life.
				emo I see...!
				player Finally lost that calculated air about you, huh?
				emo I am merely... Adjusting to an unfamiliar sensation.
				im 028.jpg
				emo Oh!<br>That's quite a, well... An impressive sandwich?<br>Ah, is that not an effective example of dirty talk? 
				player Relax, you're too high strung. Virgin?
				emo Well, the definition of virgin is-
				player So I hit the nail on the head. Listen, I get your type. Logical to a fault, probably unapproachable romantically, so to you sex is just a biological urge to be satisfied, and you think a quick rub-out will solve both our problems.
				emo Well, I wouldn't say...
				t The words keep stopping in her throat as you slap your hips against the meat of her thighs.
				player I'll be blunt, then. You have no idea what you're getting into, so relax and enjoy the ride. Maybe you'll learn something about yourself... Along... The... Way!
				im 030.jpg
				emo ...!
				im 031.jpg
				emo I... I see. You've quite made your point, quite effectively at that. This is a most efficient choice of attire. It strikes a flawless balance between maximum titillation without reducing my outward-facing status, but if I were to go out smelling like I do now...
				player I've got plenty to clean yourself with. If we watch out for each other, we can have as much fun as we want and nobody will be the wiser.
				emo I see. And if what you're saying turns out to be demonstrably false, I would be perfectly justified in burning down your house.<br>Correct?
				player How on earth is that an okay reaction?! You really do need to relax.
				emo I haven't been relaxed since I was eight years old.
				player That's very specific.
				emo Of course, I remember the day like it was yesterday. I was watching "My Neighbor To-"<br>... Well, suffice it to say, I learned my lesson that day.<br>In any case, I'll take your words under consideration. I'll see you again tomorrow?
				player Sounds good.
			`);
			break;
		}
		case "emotionlessTitjob": {
			writeHTML(`
				emo I see... Playing with my breasts, then. That's something I'm quite used to... Here, allow me to undo my clothes.
				player I'm glad you're getting into the swing of things. Closer.
				im 042.jpg
				emo Right, of course... We can't risk someone else coming in, so...
				im 045.jpg
				emo Like this?
				t You softly coo as you feel your member near completely enveloped by soft titflesh.
				emo For someone with a role focused on helping others... I suppose that reaction was clear enough. Now...
				im 046.jpg
				emo Mmmh...
				player Gh, enjoying yourself?
				emo I... I am, more than I expected... My breasts feel more sensitive than normal, I can feel myself growing wet as well.
				player Too direct, try again.
				emo Oh, I... My, my tits are practically abuzz with joy at your thick... Meat?
				im 047.jpg
				emo Oh~! Was it that effective?
				player It was more your massive tits that were doing the work. You need to read more porn.
				emo More that I need to find the confidence, if I spoke half of what I've consumed...
				player Oh?
				emo ?gender male; Of course, learning about your partner's body is a basic step for someone with any measure of empathy.<br>Plus, during our time together I have already unlearned sixteen erroneous facts about male biology.
				emo !gender male; Of course, learning about your partner's body is a basic step for someone with any measure of empathy.<br>Plus, during our time together I have already unlearned sixteen erroneous facts about the actual biology of someone with a penis.
				player Sixteen, huh?
				emo Indeed. I have come to the conclusion that erotic fiction can be... Misleading. For example, I would never once define your muscles as 'rippling'.
				player Oof.
				emo Still... I can't help but find what I see to be...
				im 048.jpg
				emo Quite impressive.
			`);
			break;
		}
		case "emotionlessSpanking": {
			writeHTML(`
				emo Masochism? Ah, no need to test that. I already investigated my sensitivity to pain.
				player Oh? How exactly did you do that?
				emo I think I would know, I have a history of minor self injuries, always unpleasant and no sexual thrill. Thus-
				player Bend over.
				t ...
				im 049.jpg
				emo Mmm... Doing this in a classroom, even an empty one is...
				player Well then you'd better keep quiet, although given how wet you are I don't think that's likely.<br>Now, let's see if I still have the touch...
				t You give your knuckles a crack, emotionlessF squirms a bit, and...
				im 050.jpg
				t *WHAP*!
				emo Hah~!
				im 051.jpg
				emo W-what was that?! How did you do that?
				player Experience. Something you obviously lack. 
				emo But how? Was there some kind of trick to it? Or-
				im 052.jpg
				emo Hhhh!
				player Give yourself a moment to adjust, and don't forget where we are right now.
				emo How could I forget? We're in a classroom, where my peers and I-
				im 053.jpg
				emo Khhh~!<br>Wuh... What's going...
				im 054.jpg
				t *WHAP*!
				emo HAAAH~!
				t *WHAP*!
				emo If you keep doing that...!
				t *WHAP*!
				emo I'm...!
				im 055.jpg
				emo Hooooh~! Why does it feel so gooood~!?
				im 056.jpg
				emo Oh...
				player So, how was it? I know you grade fetishes, where's this one land?
				emo ...
				player Pretty high, I guess. Come on, wake up, aftercare's one of the best parts of maso play!
				emo ...
			`);
			break;
		}
		case "emotionlessSex": {
			writeHTML(`
				emo High risk sex... Doesn't what we did last time count?
				player Only if you have no imagination. 
				emo You don't think that we might be going a bit too far?
				player Maybe, but what is life except an excuse to fuck around in new ways?<br>Plus, you're fun to push past your comfort zone.
				t ...
				emo My...
				im 032.jpg
				emo An active classroom, just as everyone is headed home, with the windows open... I feel so exposed...
				player Your body shows it.
				im 033.jpg
				emo Mmm... You shouldn't be too loud...
				player You too worried? Maybe I should stop here.
				emo No. Y-you should... Continue.
				player Oh? And why exactly should I do that?
				emo Well... If a random burst of electricity were to strike out at you, then it'd be defused across both of us?
				player ...
				im 034.jpg
				emo Ohhhh!
				player You need some honesty in your diet! Tell me what you want, now!
				emo Ghh... I...
				player Come on!
				emo I want you to press me up against the window and fuck me!
				player ...
				emo Er, wait, I didn't think ab-<br>Gah!
				im 037.jpg
				emo Hah~! W-wait, this isn't good!
				player Feels good to me! And with how tight you are, I can tell it feels good for you too!
				im 038.jpg
				emo Ghhh~! People down there... Anyone could look and see me!
				player Maybe they'll think their mind is playing tricks on them? Or maybe they'll realize their student council secretary-
				im 039.jpg
				emo Oh, don't say it!
				player Is a dirty...
				emo Nooooo~!
				player Is a dirty...<br>Filthy...<br>Exhibitionist slut!
				im 040.jpg
				emo Cumming~! Look at me~!
				t Her body jerks, rubbing against the glass which has the added benefit of milking your orgasm for all it's worth.
				im 041.jpg
				emo ...
				player ... She's out again. Inexperience, plus her fetishes are a lot stronger than she realized, there's no going back to regular masturbation for you, is there?
				emo ...
			`);
			break;
		}
		case "emotionlessBlind1": {
			writeHTML(`
				player So, what'd you buy?
				t emotionlessF starts unbuttoning her coat and stripping. She brought a small bag with her and you peer inside.
				emo Several odds and ends. I discovered a phenomenon I'm currently calling the inverse bell-curve fabric cost ratio. I could name it the playerF theorem if you'd like.
				player I know we're in a school and all, but if you start talking about inverse bell curves during sex I'll find a new blonde fucktoy.
				emo I see. Here, let me see if this regains your interest.
				im 057a.jpg
				player Ho boy~<br>Slingshot bikini...
				emo I also picked up several blindfolds. The one I'm tending towards was advertised as being as "tight on your body as a layer of paint".
				player Well then, let's get started.
				t ...
				define emo = sp emotionless; im images/emotionless/blind.jpg;
				emo Ohhh~<br>The smell is... <i>Pervasive~</i>
				im 058.jpg
				t emotionlessF coos in delight as you wave your shaft in front of her, sticking out her tongue as you playfully keep it just out of reach until...
				im 059.jpg
				emo *Chu*~<br>Oh my~ It leaves a lasting heat on my lips just to kiss, and the outfit is digging in so intensely~<br>Is it your intention to turn me into a degenerate with this cock of yours today?
				player You mean <i>more</i> of a degenerate? Well, I'm a counselor. I bring out the best in the students here.
				emo Clearly~
				im 060.jpg
				emo *Glllhk*~
				t For a moment after you push between her plush lips, she hesitates. It's her first blowjob, so naturally she'll have to-
				im 061.jpg
				emo *Glllk*~!<br>*Hlllk*~!
				t Immediately dive in headfirst and start gliding up and down your shaft?
				player H-holy shit, how much research did you do?
				t Naturally, she answers the only way a perverted suckfiend can. Head-bobs and tongue-wagging.
				im 062.jpg
				emo *Mlllh*~!<br>*Gulp*
				im 063.jpg
				player Hah... Y'know, just sitting there like that, like an object to be used...<br>You're just asking to be used like the sextoy you are again, aren't you?
			`);
			break;
		}
		case "emotionlessBlind2": {
			writeHTML(`
				define emo = sp emotionless; im images/emotionless/blind.jpg;
				emo M-my, you're taking your sweet time, aren't you?
				player It's called foreplay.
				emo And what kind of foreplay involves leaving a lady waiting?
				t *CLICK*
				im 064.jpg
				player The kind that excites exhibitionist perverts like you.
				emo Ooh~<br>W-was that a camera?
				player She's a smart one! Tell me though, can you identify... <i>This?</i>
				im 065.jpg
				emo M-my~<br>It's on the tip of my tongue~<br>It's certainly familiar~
				player I thought that blindfold was hightening your sense of touch. Need a hint?
				emo Hmm~<br>Okay.
				im 066.jpg
				emo Ooogh~! It's a cock, a huge cock~!
				im 067.jpg
				emo Khh~! The kind of cock that gets a girl like me addicted~!
				player Not too fast, how's the blindfold helping?
				emo Ghh~!<br>It's making this feel like torture~<br>B-but... I can't get enough~!
				im 068.jpg
				emo Ouuugh~!!!<br>My pussy! My pussyyyy~!
				im 069.jpg
				emo ...!
				t She takes a sharp breath as you start to play with her nipples, this kind of play is really setting her off like a firecracker!
				emo Hah~! Hah~! I'm~! I'm gonna~!
				im 070.jpg
				emo Cumming~!!!
				im 071.jpg
				emo Hah... Hah... Wha... So warm...
				player You're covered in sweat, dear. Need a moment to recover for round two?
				emo Ohh... Y-yes I do~
			`);
			break;
		}
		case "emotionlessPet1": {
			writeHTML(`
				define emo = sp emotionless; im images/emotionless/cat.jpg;
				player So, how are you feeling?
				im 072.jpg
				emo M-more than a little embarassed. To be honest, it's not gripping me right away like other fetishes did...<br>Err, I mean... Nya?
				player It's a matter of power, control. That collar on your neck is a sign of submission. <i>Ownership</i>.
				emo ...!<br>
				player Just let go. Do what comes naturally. No thinking, you're my precious little kitty.
				im 073.jpg
				t She parts her lips and starts loyally suckling at your cock. A much more relaxed pace than she usually takes, like she's trying to deeply savor the moment and memorize every inch of her *master's length.
				player Good girl~
				emo ...!
				im 074.jpg
				t And as if she was signaled, she begins sucking you off in earnest. You take a moment to gently rub her head, causing her to let out a soft moan like she's somehow more excited to be praised than to be sucking you off.
				t ... Well, just barely, as shown by how dutifully deep she takes in your dick.
				im 075.jpg
				t And as you cum you fill her mouth with hot spunk, and she pulls back to create her very best suction effect to draw out as much jizz as she can.
				im 076.jpg
				emo Hah~<br>*Master~!!!
				t ...
				define emo = sp emotionless;
				player So? How was it?
				emo ... I have conflicting feelings on the matter. I enjoyed the feeling of simple, unconditional love towards a pet I was feeling, but...<br>I'm more into the rougher, more degradational treatment. 
				player Everybody has their own tastes, I suppose.
				emo ... I don't think I'll be meowing next time. That was a very... Un-arousing type of shame for me.
			`);
			break;
		}
		case "emotionlessHumil1": {
			writeHTML(`
				define emo = sp emotionless; im images/emotionless/emotionlessGyaru.jpg;
				player Holy... You came here wearing that?
				emo Y-yes. Please, on the bed, I can't hold back any longer...
				player It's official, you're a junkie.
				emo Oh~<br>P-please, enough with the dirty talk, I can't hold on!
				player Fine...
				im 084.jpg
				emo Hoh~<br>A *man's asshole...
				player Second thoughts?
				emo Only of how amazing I feel right now... Taking pictures of myself in class, I feel like I've lived a dozen lives since that was enough to satisfy me...
				im 085.jpg
				t She wastes no time, fondling and stroking her tits around your shaft while her tongue darts around the rim of your asshole. 
				player F-fuck...
				t Her passion can't be matched, these are the actions of someone so completely drunk on lust that she's getting off without touching herself, without a second thought as her body is thoroughly used for your pleasure.
				emo Hah... You're pulsing... Go ahead~
				im 086.jpg
				t You can barely keep from falling over as you cum from such a powerful dual-point assault.
				im 087.jpg
				emo Hmm~<br>This will have to be a regular thing. Keep my number, please.<br>Now, it's time for my second course~
			`);
			break;
		}
		case "emotionlessHumil2": {
			writeHTML(`
				define emo = sp emotionless; im images/emotionless/emotionlessGyaru.jpg;
				emo Mmm~<br>Walking here was all the foreplay I can stand.
				player Slut~
				emo If you try to make me any wetter...
				im 088.jpg
				emo You'll drown~
				player You look like a whore, emotionlessF.
				emo Only for you~!
				im 089.jpg
				emo Hooogh~! Cock~! I can feel every inch of it spreading me so much! All those looks, they're all worth it! No, they make it even better~!
				t Her cunt clenches around you, signaling her first orgasm from just a single thrust.
				im 090.jpg
				emo Hah~! Hah~! Every moment I'm not dressed like a total whore is so stifling! This is the real me!
				im 091.jpg
				emo Hggh~! If you thrust back like that! I'll~!
				im 092.jpg
				emo Cumming~!!!
				im 093.jpg
				emo Oh... Ffffuck...
				player Damn...
				emo Another... Please...
				player You're busted in the head, emotionlessF.
				emo Yes I am~
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
	//index: "reward", requirements: "?trust emotionless 84;"},
	{index: "humil", requirements: "?trust emotionless 87;"},
	{index: "humilQuo", requirements: "?trust emotionless 100;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
			writePhoneImage("images/emotionless/reward.jpg", "Art by Nagi Ichi");
			writePhoneSpeech("emotionless", "", "You've completed all currently available content for emotionlessF! Stay tuned for more soon!");
			break;
		}
		case "humil": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
			writePhoneSpeech("emotionless", "", "Good Morning!!!");
			writePhoneSpeech("emotionless", "", "Fortune!!!");
			writePhoneSpeech("emotionless", "", "Favors The Bold!!!");
			writePhoneSpeech("emotionless", "", "I May Have Gone Too Far!!! Are You Busy!!! Can We Call Now!!!");
			if (data.player.currentScene == "newDay" || data.player.currentScene == "") {
				document.getElementById('phoneRight').innerHTML += `
				<div id = "phoneChoice">
					<p class="choiceText" onclick="loadEncounter('emotionless', 'emotionlessHumilText')">
						`+replaceCodenames("Call emotionlessF")+`
					</p>
				</div>
				`;
			}
			else {
				writePhoneSpeech("player", "", "I'm busy atm, let me get away and call you in a sec");
			}
			break;
		}
		case "humilQuo": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
			writePhoneSpeech("emotionless", "", "Are We Meeting Again Today!!!");
			writePhoneSpeech("emotionless", "", "Call If YEs!!!");
			if (data.player.currentScene == "newDay" || data.player.currentScene == "") {
				document.getElementById('phoneRight').innerHTML += `
				<div id = "phoneChoice">
					<p class="choiceText" onclick="loadEncounter('emotionless', 'emotionlessHumilQuo')">
						`+replaceCodenames("Call emotionlessF")+`
					</p>
				</div>
				`;
			}
			else {
				writePhoneSpeech("player", "", "I'm busy atm, let me get away and call you in a sec");
			}
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