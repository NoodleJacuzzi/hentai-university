var character = {index: "meji", met: false, fName: "Reese", lName: "Kieran", trust: 0, encountered: false, textEvent: "", color: "#7e52a3", author: "CryptoGreek", artist: "Nagi Ichi"};

//General tutorial stuff:
//writeText("text"); - Writes some plain old text.
//writeSpeech("character", "image", "dialogue") - Writes some dialogue. Leave "image" blank to find the appropriate image and name automatically.

var logbook = { //Logbook details for each character.
	index: "meji", 
	desc: "A very outwardly-confident young man with a crossdressing habit. Despite wanting to 'keep it a secret', he goes to some <i>very</i> crowded places when dressed-up.",
	body: "He has a slim, effeminate figure that's well-suited for crossdressing. He usually lets down his ponytail whenever he wears women's clothing.",
	clothes: "He usually wears a school uniform - the male version while at school, and a girl's uniform when around the town.",
	home: "He usually hangs out around the Class B hallway.",
	tags: "Crossdressing, Anal Orgasms, Orgasm Denial",
	artist: "Nagi Ichi<br>Original Image Set: Mejiri Furyou Shounen Mesu Ana Kouseisu! & Senpai (♂) Kanojo (Kari)",
	author: "Captain Cryptogreek",
};

var newItems = [//Lists the shop items unique to this character
{name: "Leotard", 			key: true, 		price: 20, 	image: "scripts/gamefiles/items/leotard.jpg", description: "A sports-leotard for women."},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
{index: "meji1a", name: "A particularly loud student is walking down the hall.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 0, trustMax: 0, type: "tab", top: 0, left: 0, day: "both",},
{index: "meji2", name: "You spot a familiar face.", location: 'street', time: "Evening", itemReq: "", trustMin: 10, trustMax: 10, type: "tab", top: 0, left: 0, day: "both",},

	//Submissive meji
	{index: "meji3", name: "You can see meji coming down the hall with his friends.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 20, trustMax: 24, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji4", name: "It looks like meji is standing in the hallway alone, like he's waiting for something.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 25, trustMax: 25, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji5", name: "meji's leaning against the wall, adjusting his shirt a bit while he looks around.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 26, trustMax: 26, type: "tab", top: 0, left: 0, day: "both",},

	//Willful/bratty meji
	{index: "meji3", name: "You can see meji coming down the hall with his friends.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 40, trustMax: 44, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji4", name: "It looks like meji is standing in the hallway alone, like he's waiting for something.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 45, trustMax: 45, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji5", name: "meji's leaning against the wall, adjusting his shirt a bit while he looks around.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 46, trustMax: 46, type: "tab", top: 0, left: 0, day: "both",},
	
	{index: "meji6", name: "meji's standing on his own, looking through his phone and leaning on the wall.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 60, trustMax: 60, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji7", name: "meji's leaning against the wall and looking through his phone.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 61, trustMax: 65, type: "tab", top: 0, left: 0, day: "both",},

	{index: "meji11", name: "meji's moving between classes at the moment, though not quickly - you could probably talk with him.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 100, trustMax: 110, type: "tab", top: 0, left: 0, day: "both",},
	{index: "meji12", name: "meji seems to be relaxing between classes right now, leaning against a wall.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 120, trustMax: 120, type: "tab", top: 0, left: 0, day: "both",},
	
	{index: "meji12", name: "meji seems to be relaxing between classes right now, leaning against a wall.", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 200, trustMax: 200, type: "tab", top: 0, left: 0, day: "both",},
	
	{index: "mejiHotelBad", name: "Ask about meji", requirements: "?flag demon hotelBad; ?flag meji corrupt;", altName: "", altImage: "",},
	{index: "mejiHotelGood", name: "Search for meji", requirements: "?flag succubus hotelGood; ?flag meji corrupt;", altName: "", altImage: "",},
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
		case "meji1a" : {
			//encountering him in the school during morning
			//call him to the office and you can get him to out himself
			writeText("Three students are having a pretty loud discussion of their 'conquests' as they walk by.");
			writeBig("images/meji/1-1.jpg", "Art by Nagi Ichi");
			writeText("You recognize the one in the middle pretty easily - one of the 'high profile cases' when it comes to needing counseling.");
			writeText(fName('meji')+ " "+lName('meji')+", a rich-kid delinquent attending university because it's what's 'expected of him'. Counseling is a hard-sell when people don't want to work for something, but given your abilities...");
			writeFunction("writeEncounter('meji1aa')", "Invite him to your office");
			writeFunction("changeLocation(data.player.location)", "Leave and let "+fName('principal')+" handle him");
			break;
		}
		case "meji1aa" : {
			setTrust('meji', 10);
			writeSpeech("player","",fName('meji')+" "+lName('meji')+"?");
			writeText("He stops, only now realizing you're here.");
			writeSpeech("meji","","Yeah. What do <i>you</i> want?");
			writeSpeech("player","","Not much, just a conversation in my office. As the new counselor, the Principal said I might want to speak to you. Any idea why?");
			writeText("His eyes narrow.");
			writeSpeech("meji","","I've got a feeling, yeah.");
			writeText("He nods to the guys beside him before nodding again to you.");
			writeSpeech("meji","","Let's make it quick.");
			writeText("...");
			writeText("You arrive in your office pretty quickly, letting " + fName('meji')+" in before shutting the door behind you.");
			writeText("He sits casually on the small bed you had set up, crossing his arms as he looks at you.");
			writeSpeech("meji","","So, how's this supposed to go down? You ask a couple of questions, I answer, you tell "+fName('principal')+" everything's fine?");
			writeSpeech("player","","...In a manner of speaking, yes. She didn't give very many details about you, so I'd like to know why you think she'd drop your name specifically.");
			writeText("That was a blatant lie, of course. His file had more than a few incidents laid out in excruciating detail... but your methods require a certain level of trust when starting out.");
			writeText("Well, that or having some seriously repressed desires, but that can be a bit of a gamble. No need to put him on the defensive just yet...");
			writeText("He scoffs, leaning back a bit.");
			writeSpeech("meji","","God, where the fuck do I <i>begin?</i> I swear, she has to have it out for me for something...");
			writeText("Off to a good start, then.");
			writeText("...");
			writeText("He ends up spending a good amount of time ranting about the principal, several instructors, and a few of the students before he finally realizes the time and leaves.");
			writeText("From the seems of things, he needed a place to just rant. Aside from that group of his, at least. He's not ready for full-hypnosis just yet, but you get the feeling he's already rather open to suggestions...");
			data.player.location = 'playerOffice';
			writeFunction("changeLocation(data.player.location)", "Finish");
			passTime();
			break;
		}
		case "meji2" : {
			writeText("Despite the fact that you could <i>swear</i> you spotted mejiF, you very quickly lose sight of him.");
			writeText("At least, until the familiar color of his hair pops up nearby. You turn quickly to look at him, just barely catching a glimpse of him before he darts off quickly.");
			writeText("You can tell he changed clothes, but it's not too clear why he's darting off towards a few of the harder-to-navigate alleys.");
			writeText("He's panicking, so he'll probably head in the opposite direction of you while using the alleys to make himself hard to follow. It wouldn't take a genius psychologist to figure out where he'll come out...");
			writeFunction("writeEncounter('meji2a')", "Go to where he's most likely to come out");
			writeFunction("changeLocation(data.player.location)", "Leave him be");
			break;
		}
		case "meji2a" : {
			writeText("Getting ahead of him isn't exactly hard, though you do find yourself breathing a bit heavily after the run. You get a minute or so to catch your breath before...");
			writeBig("images/meji/1-2.jpg", "Art by Nagi Ichi");
			writeText("He freezes in place when he spots you.");
			writeSpeech("player","","You know, I think you wouldn't do too bad as a runner, " + fName('meji') + ".");
			writeText("His hands go to his sides, clenching tightly into fists.");
			writeSpeech("meji","images/meji/meji2.jpg","...You can't tell anyone...");
			writeText("He quickly rushes over to you, grabbing you by the shirt and trying to pull you down to look him in the eyes.");
			writeSpeech("meji","images/meji/meji2.jpg","Not one single person hears about this, you got that!?");
			writeFunction("writeEncounter('meji2b')", "Agree and walk him safely to his place");
			writeFunction("writeEncounter('meji2c')", "Explain how you won't tolerate such rudeness");
			break;
		}
		case "meji2b" : {
			writeSpeech("player","","...I mean, sure. I don't really think I have a reason to tell anyone, anyway.");
			writeText("He pauses.");
			writeSpeech("meji","images/meji/meji2.jpg","...W-wait, really?");
			writeText("His grip on your shirt relaxes a bit, before he suddenly stands a bit straighter and he steps back.");
			writeSpeech("meji","images/meji/meji2.jpg","I, uh... I mean, of course you don't.");
			writeSpeech("player","","Yup. What you do for fun in your spare time is none of my business.");
			writeText("He tenses.");
			writeSpeech("meji","images/meji/meji2.jpg","W-Well, it's not like I do this a lot! It's just, sometimes, I... Uh...");
			writeSpeech("player","","How about I just walk you home?");
			writeSpeech("meji","images/meji/meji2.jpg","...Thanks.");
			writeText("Getting him to his place is pretty quick; his house looks like some old, traditional-looking place. He really is a rich kid, then.");
			writeText("All things considered, he's probably a <i>lot</i> more open to suggestion than you thought, but it might be a good idea to leave that for another day.");
			writeText("When you do get to his place, he just mumbles a quick thanks and practically sprints through the door, his face bright red.");
			writeText("Speaking to him at school again should be pretty interesting...");
			data.player.location = 'vintageStreet';
			writeFunction("changeLocation(data.player.location)", "Leave him be");
			setTrust('meji', 40);
			passTime();
			break;
		}
		case "meji2c" : {
			writeText("You take a moment to really focus on him.");
			writeText("His eyes have a clearly desperate look to them, and his hand, despite gripping tightly, is still faintly shaking.");
			writeText("Most of him is shaking, actually.");
			writeSpeech("player","","...Is that really how someone in your position should be making a request?");
			writeText("He freezes.");
			writeSpeech("player","","Hm. Seems like the principal was right about your attitude needing... <i>adjustment.</i>");
			writeSpeech("meji","images/meji/meji2.jpg","Y-You can't tell her-");
			writeSpeech("player","","I won't tell anyone anything.");
			writeText("His eyes go wide for a moment, his grip relaxing-");
			writeSpeech("player","","<i>Yet.</i>");
			writeText("You push his hand away from your chest, staring down at him as you make a show of looking him over.");
			writeSpeech("player","","If you don't want me to go sharing what I'm looking at with every student and faculty member around the university, then I have a simple little request...");
			writeText("You lean forward, dropping your voice to whisper in his ear...");
			writeSpeech("player","","You're going to ask me, <i>politely</i>, not to share your <i>crossdressing habit</i> with everyone.");
			writeSpeech("meji","images/meji/meji2.jpg","...T-That's all...?");
			writeSpeech("player","","Nobody likes a rude <i>bitch</i>, "+fName('meji')+".");
			writeText("He flinches at the word, but bows his head down a bit.");
			writeSpeech("meji","images/meji/meji2.jpg","...I'm... sorry. Please, don't tell anyone about my... <i>c-crossdressing habit</i>...");
			writeSpeech("player","","...Good enough. Go home, "+fName('meji')+". We'll talk more at school.");
			writeText("He swallows nervously, nodding once before running off quickly.");
			writeText("...All in all, it didn't exactly build <i>trust</i> between you two, but you can already tell that things are going to get <i>interesting.</i>");
			data.player.location = 'vintageStreet';
			writeFunction("changeLocation(data.player.location)", "Head home");
			setTrust('meji', 20);
			passTime();
			break;
		}
		case "meji3" : { // - NOT WRITTEN
			//it's a set of options
			//option 1, if not already done, is the fingering
			//option 2, available once the fingering is done, is fucking his ass in-uniform
			//option 3 involves getting a leotard and fucking his ass, but he doesn't orgasm
			//option 4, leotard, is netting him his first anal orgasm by grinding your cock inside him

			//This checks if the first event has been done, as the opening dialogue and available choices change depending on whether it has.
			if(checkFlag('meji','meji1Gallery') != true){

				//Dialogue for if you walked him home during Encounter meji2
				if(checkTrust('meji') == 40){
					writeText(fName('meji')+" sees you approaching and stops. He says something to his group before approaching you alone.");
					writeSpeech("meji","","Hey.");
					writeText("He shifts his weight, placing one hand on his hip.");
					writeSpeech("meji","","Thanks, for before. Especially the, uh... 'walking me home' part. Was there something you needed?");
				}

				//Dialogue for if you chastised him during Encounter meji2
				else if(checkTrust('meji') == 20){
					writeText(fName('meji')+" sees you approaching and pales. Muttering something to his group, he quickly approaches you.");
					writeSpeech("meji","","Y-Yo. Uh, I mean...");
					writeText("He takes a moment to breathe, before he starts looking confident again.");
					writeSpeech("meji","","Thank you, "+data.player.honorific+". For not... telling anyone.");
				}
				else{
					writeText("This is test-text. If you see this in-game, then something's fucky.");
				}
				writeFunction("writeEncounter('meji3a')", "Invite him to your office for hypnotic training");
				writeFunction("changeLocation(data.player.location)", "Leave him be for now");
				break;
			}

			else{
				//Forgive me this ugly-as-sin 'if/else'ing below.
				//Dialogue for if you walked him home during Encounter meji2
				if(checkTrust('meji') == 41){
					writeText("When he sees you, "+fName('meji')+" quickly separates from his friends and walks up to you.");
					writeText("He seems to walk a bit oddly as he approaches, and you can see a flash of something in his eyes.");
					writeSpeech("meji","","I think we, uh... need to talk about last time?");
					writeFunction("writeEncounter('meji3z')", "Take him to your office");
					writeFunction("changeLocation(data.player.location)", "Leave him be for now");
					break;
				}

				//Dialogue for if you chastised him during Encounter meji2
				else if(checkTrust('meji') == 21){
					writeText("When you approach, "+fName('meji')+" quickly separates from his friends and walks up to you.");
					writeText("His face is clearly flushed, he's walking a bit oddly, and he seems to fidget a bit with the crotch of his pants.");
					writeSpeech("meji","","Hello, "+data.player.honorific+". I wanted to speak with you, maybe in your office...?");
					writeFunction("writeEncounter('meji3z')", "Take him to your office");
					writeFunction("changeLocation(data.player.location)", "Leave him be for now");
					break;
				}
				else if(checkTrust('meji') == 22 || checkTrust('meji') == 42){
					if(data.player.hypnosis < 2){
						writeText("You can see " +fName('meji')+ " up ahead with his friends. Unfortunately, you can't really help him just yet - you'll need to improve your hypnotic abilities somehow.");
						writeText("Maybe the shopping district might have something to help? Their stock is pretty... <i>varied.</i> That, or you could see if there's anything in the school library that might help?");
						writeFunction("changeLocation(data.player.location)", "Leave him be for now");
						break;
					}
					else{
						writeText("You can see " +fName('meji')+ " up ahead with his friends. With a better understanding of your abilities, you should be able to help him out now.");
						writeFunction("writeEvent('meji2')", "Invite him to your office");
						writeFunction("changeLocation(data.player.location)", "Leave him be for now");
						break;
					}
				}
				else{
					writeText("As he and his friends approach, you see "+fName('meji')+ " clearly perk up as he spots you.");
					writeText("He waves off his friends quickly, coming up to you and shifting nervously.");
					if(checkTrust('meji') < 40){
						writeSpeech("meji","","Is now a good time? I, uh... I still haven't been able to <i>finish</i>. I was hoping you could help...?");
					}
					else{
						writeSpeech("meji","","Hello, "+data.player.honorific+". I was wondering if now would be a good time for some <i>counseling...?</i>");
					}
					if(checkFlag('meji','meji2Gallery') != true){
						writeFunction("writeEvent('meji2')", "Fuck his ass");
					}
					if(checkItem('Leotard') == true){
						if(checkFlag('meji','meji3Gallery') != true){
							writeFunction("writeEncounter('meji3c')", "Give him the leotard");
						}
					}
					if(checkFlag('meji','meji3Gallery') == true && checkFlag('meji','meji4Gallery') != true){
						writeFunction("writeEvent('meji4')", "Ask him about last time");
					}
					else{
						if(checkItem("Leotard") == false)
							writeFunction("writeEncounter('meji3b')", "Tell him you want to see something new");
					}
				}
				writeFunction("changeLocation(data.player.location)", "Leave him be for now");
			}
			break;
		}
		case "meji3z" : {
			//This is named Zed because I messed up and forgot to account for this scene during allocation shut up
			writeText("When the two of you reach your office, you shut and lock the door just in case before turning to "+fName('meji')+".");
			writeText("It's obvious what the problem is, but...");
			writeSpeech("player","","Is something wrong?");
			writeText("He kinda flinches at that, his hands fidgeting in his lap.");
			writeSpeech("meji","","...When I was, uh... <i>under</i>, did anything happen?");
			writeSpeech("player","","Do you remember anything happening?");
			writeText("His face goes red as he pauses.");
			writeSpeech("meji","","Honestly, I'm not sure? I just remember feeling really, <i>really...</i>");
			writeText("His voice hitches for a second, but he covers it up (poorly) with a cough.");
			writeSpeech("meji","","<font size='-1'><i>...It felt really good.</i></font>");
			writeText("...Huh. Well, he's being honest, so you probably shouldn't mislead him.");
			writeSpeech("player","","And now, you can't feel any pleasure from your dick, right?");
			writeText("He sits up straighter, looking right at you with a cautious smile.");
			writeSpeech("meji","","Y-Yeah! Do you know how to fix it?");
			writeSpeech("player","","It's... not necessarily that easy.");
			writeText("He stops.");
			writeSpeech("player","","I can probably fix it, but I'd need you to be honest with me about something.");
			writeText("You think for a moment about how to phrase it, before just going with the blunt option.");
			writeSpeech("player","","Did you masturbate with your ass after losing sensation in your penis?");
			writeText("His rapidly-reddening face gives the answer immediately.");
			writeSpeech("meji","","I didn't... y'know, <i>finish</i> or anything though so it should be fine, right?");
			writeText("You just shrug.");
			writeSpeech("player","","Hypnosis can be fickle, but it can't make you do anything you don't want. If you really want sensation down there, it'll come back if you give it some time.");
			writeText("Probably. You can speed it up, of course, but it really is on him for this one.");
			writeSpeech("meji","","O-Oh. But, what do I do until then?");
			writeText("He fidgets a bit more and, on closer inspection, you can see the problem.");
			writeText("Just because he can't get off with his dick doesn't mean it can't get hard.");
			writeSpeech("player","","That's... definitely a question. Fucking your ass didn't help?");
			writeSpeech("meji","","I, uh... couldn't finish.");
			writeText("He shifts a bit, and his odd walking earlier starts making sense.");
			writeSpeech("player","","Got it. In that case, I think I have a plan, but I'm afraid it'll take some time to prepare.");
			writeText("He just nods, standing up and getting ready to leave. He seems a lot more relaxed now that he knows nothing's actually <i>wrong</i> with him.");
			writeText("...Technically, this 'problem' of his could actually be a legitimate issue for him, but altering it isn't as easy as just telling him his dick is sensitive.");
			writeText("If he's willing to fuck his ass until he can barely walk, though...");
			if(data.player.hypnosis >= 2){
				writeText("Given that your hypnosis abilities have been improving lately, you can have a nice little routine ready by tomorrow.");
				writeText("It'll take a few sessions, of course, but if he's open and willing, it'll work perfectly.");
			}
			else{
				writeText("Well, that's a thought to be had once you improve your skills a bit more. Increasing sensation is a lot more finicky than taking it away.");
				writeText("Might be a good idea to practice on someone else to improve, or find some other way to improve your hypnosis.");
			}
			data.player.location = 'playerOffice';
			writeFunction("changeLocation(data.player.location)", "Get back to work");
			raiseTrust('meji', 1);
			passTime();
			break;
		}
		case "meji3a" : { //Intro to ass training, varies depending on trust
			writeSpeech("player","","I have something important to discuss with you.");
			if(checkTrust('meji') == 40){
				writeText("He nods, waving to his friends and following you to your office.");
			}
			else{
				writeText("He nods, obediently following behind you.");
			}
			writeText("...");
			writeText("When you arrive, "+fName('meji')+" sits down on the bed, still keeping his eyes on you.");
			if(checkTrust('meji') == 40){
				writeSpeech("meji","","Does this have to do with... <i>the other night?</i>");
				writeText("He shifts uncomfortably for a moment, glancing at the door as it shuts.");
				writeText("Nodding, you tell him,");
				writeSpeech("player","","I think the other night probably wasn't the best way for us to broach the topic of your... hobby.");
				writeText("He winces, but nods.");
				writeSpeech("meji","","Sorry about that, by the way. I, uh... probably shouldn't have grabbed you like that.");
				writeSpeech("player","","It's fine. It was a stressful situation, after all. And that stress is part of the reason I brought you here. You see, I became a counselor here because my counseling methods are a bit... odd.");
				writeText("Reaching into your pocket, you pull out your pendant, his eyes widening.");
			}
			else{
				writeText("He shifts a bit, looking rather uncomfortable. He even jumps a little when the door clicks shut.");
				writeSpeech("meji","","...This is about the other night.");
				writeText("You nod, sitting down on the bed beside him.");
				writeSpeech("player","","While I think you probably could've been a little less rude about it, I do understand why you wouldn't want word to spread. And, like I said, I won't go tattling on you unless you give me a reason.");
				writeText("At that, you reach into your pocket and pull out your pendant, his eyes widening as you do.");
			}
			writeSpeech("meji","","...You can't be serious.");
			writeSpeech("player","","I am, actually. It's not quite the 'do whatever I say' trick that people think. It's really just a way to help someone relax, be a bit more open about themselves.");
			writeText("He shifts a bit, looking down at it.");
			writeSpeech("meji","","Do you mind if I...?");
			writeText("You shrug, handing it to him. He rolls it around in his hand for a few seconds, looking at it from nearly every angle.");
			writeText("It's not like it's actually anything special, but if he <i>thinks</i> it is...");
			writeSpeech("meji","","...I'm not saying I actually believe in this, but I do owe you one. So, how does this work?");
			writeText("You smile, gently taking it back from him.");
			writeSpeech("player","","The details of it can be pretty complicated to explain, but it basically boils down to keeping an eye on the pendant while you listen closely to my voice. Of course, since you'll want to be as comfortable as possible...");
			writeText("He thinks for a moment, before nodding.");
			writeSpeech("meji","","Y-Yeah. If you don't mind, then...");
			writeText("...");
			writeText("It takes a few minutes for him to relax enough to go into trance, but what you learn after he does is pretty interesting.");
			writeText("You started out by just asking simple questions, but <i>he</i> was the one that started talking about what he would do after coming home, still crossdressing.");
			writeText("The fact that he has so many fantasies about being dominated just helps you push him deeper and deeper into trance, and he doesn't exactly spare any details...");
			writeText("At this point, he's more than far enough along for you to help him enjoy himself, and have some fun of your own along the way. It helps that, in that skirt, he can make for a pretty convincing girl.");
			writeFunction("writeEvent('meji1')", "See how far along he already is in training his ass");
			break;
		}
		case "meji3b" : {
			writeSpeech("meji","","Something new...? What do you...");
			writeText("He thinks for a moment before his face goes red.");
			if(checkTrust('meji') >= 40){
				writeSpeech("meji","","...<i>Oh.</i> I mean, I don't have a problem with something like that, but... I don't really have any spending money right now.");
			}
			else{
				writeSpeech("meji","","...Sorry, "+data.player.honorific+", but I don't have the money for something like that. I don't usually keep much money on-hand for things like that...");
			}
			writeText("Hm. Well, that is a problem... But then again, there's no reason <i>you</i> can't buy something, if you're interested in seeing him in it. Maybe there's something at the shopping district...?");
			writeFunction("writeEncounter('meji3')", "Choose something else");
			writeFunction("changeLocation(data.player.location)", "Leave him be for now");
			break;
		}
		case "meji3c" : {
			removeItem("Leotard");
			writeText("His eyes go wide as you try to discretely hand it to him.");
			if(checkTrust('meji') >= 40){
				writeSpeech("meji","","Th-This is... Wow.");
				writeText("He looks up at you, as flushed as usual as he grins.");
				writeSpeech("meji","","If this is your way of requesting something...");
				writeText("His voice goes much quieter.");
				writeSpeech("meji","","<i>Then just tell me when to come to your office, "+data.player.honorific+".</i>");
				writeText("Hoo boy. That would normally be how this goes but, this time...");
				writeSpeech("player","","The last club meeting in the room behind the gym finishes in an hour.");
				writeText("He tenses sharply.");
				writeSpeech("player","","If you're not up for it, though-");
				writeSpeech("meji","","Don't be late... Please.");
			}
			else{
				writeText("His face is clearly flushed and, you note, you can see him starting to tent his pants already.");
				writeSpeech("meji","","...When do you want me, "+data.player.honorific+"?");
				writeText("Normally, you'd just take him to your office now, but...");
				writeSpeech("player","","The last club meeting in the room behind the gym finishes in an hour.");
				writeText("He tenses sharply.");
				writeSpeech("player","","If you're not up for it, though-");
				writeSpeech("meji","","Thank you for the gift, "+data.player.honorific+". I won't be late.");
			}
			writeText("He quickly strides off in the direction of the gym, probably to scope it out.");
			writeFunction("writeEvent('meji3')", "Burn a little time and meet up with him");
			break;
		}
		case "meji4" : {
			writeText("When you start to approach, "+data.story[7].fName+" perks up visibly.");
			if(data.story[7].trust > 40){
				writeText("He smiles widely as he leans against the wall.");
				if(data.player.gender == "man"){
					writeSpeech("meji","","Just the guy I was looking for. You aren't busy, are you?");
				}
				else{
					writeSpeech("meji","","Just the lady I was looking for. You aren't busy, are you?");
				}
				writeSpeech("player","","I can make time. What's the matter?");
				writeSpeech("meji","","<i>Personal</i> stuff. Your office?");
				writeSpeech("player","","Sounds good.");
			}
			else{
				writeText("He clasps his hands in front of him as he stands a bit straighter.");
				writeSpeech("meji","","Good morning. Are you busy? I was hoping we could talk about... something.");
				writeSpeech("player","","Is this more of a <i>private</i> discussion?");
				writeText("He nods, fiddling with his hands in front of him.");
				writeSpeech("player","","The office, then.");
			}
			writeText("...");
			writeText(data.story[7].fName+" relaxes a bit as the familiar <b>click</b> of the lock rings out.");
			if(data.story[7].trust > 40){
				writeText("He sits down on the bed, resting his hands behind him. It's probably not an accident that that pose thrusts his chest out.");
				writeText("Despite that, though, he seems to be avoiding eye-contact.");
				writeSpeech("player","","So, what sort of personal stuff did you want to talk about?");
				writeSpeech("meji","","...Last time felt good, right? I mean, you came a <i>lot</i>, but like... You really enjoyed it, yeah? I know that, after cumming the first time, it can get really sensitive, but I don't think I ever really slowed down.");
				writeText("He shifts a bit in his seat, starting to kick his legs gently.");
				writeSpeech("meji","","I just want to make sure I didn't go too far, or something.");
				writeText("You take a moment to sit down next to him, resting a hand on his thigh.");
				writeSpeech("player","","You were fine, "+data.story[7].fName+". The whole point was to go as far as <i>you</i> wanted, and if I wasn't enjoying it, I'd have just told you.");
				writeText("He relaxes a bit, exhaling deeply.");
				writeSpeech("meji","","Okay. Thanks, I just... wanted to be sure. I've been having a lot of fun with this, and I don't want to go ruining it just 'cause I was feeling a little <i>too</i> pent-up.");
				writeSpeech("player","","It's all good. Remember, if you're ever feeling that pent-up again, I'm happy to help you <i>unload</i>... as long as you're willing to the do the same for me, of course.");
				writeText("With that, you feel his pants shift under your palm as his hand traces around your thigh.");
				writeSpeech("meji","","If you're not careful, "+data.player.honorific+", I'll take statements like that as permission to help you unload every chance I get~. In fact...");
				writeText("His hand slides further up, just barely missing your crotch as he runs his fingers to your hips.");
				writeSpeech("meji","","Maybe that <i>is</i> permission...?");
				writeFunction("writeEncounter('meji4a')", "Lean back and nod");
				writeFunction("writeEncounter('meji4b')", "Maybe later");
			}
			else{
				writeText("He pauses for a second before sitting on the bed and brushing off his pants. A slow, deep breath later...");
				writeSpeech("meji","","I... wasn't too forceful last time, was I? I know you gave me permission and all, but you were gone when I woke up.");
				writeText("He continues fidgeting, one of his hands shifting against his hip as he does.");
				writeSpeech("meji","","I don't mean to come off as clingy, "+data.player.honorific+", it's just... I didn't go too far, did I? You're not still sore or anything?");
				writeText("You take a moment to sit down next to him, resting a hand on his thigh.");
				writeSpeech("player","","You were fine. A bit controlling, maybe, but that was kind of the point. I <i>wanted</i> you to get off, and if I wasn't enjoying myself, I'd have just told you... which probably would've just made you try even harder.");
				writeText("His face flushes again as you feel his pants shift under your palm.");
				writeSpeech("player","","If I don't want you to do something, during sex or otherwise, I'll tell you. If I <i>do</i> want you to do something, I'll tell you that, too. Games are the most fun when <i>everyone</i> enjoys themselves, after all.");
				writeSpeech("meji","","...Thank you. This, what we've been doing, has been great. I didn't want to ruin it just because I was too desperate to get myself off and ended up getting too rough.");
				writeSpeech("player","","It's all good. Honestly, the only lingering problem I have from last time is the throbbing erection I get when I think about it.");
				writeText("At that, "+data.story[7].fName+" leans a bit closer to you, one of his hands resting on your thigh.");
				writeSpeech("meji","","That sounds like a bit of a problem, "+data.player.honorific+". A very <i>big</i> problem, at that...");
				writeText("He slowly looks up, smiling gently as he locks eyes with you.");
				writeSpeech("meji","","Would you like me to <i>take responsibility?</i>");
				writeFunction("writeEncounter('meji4a')", "Lean back and nod");
				writeFunction("writeEncounter('meji4b')", "Maybe later");
			}
			break;
		}
		case "meji4a" : {
			raiseTrust('meji',1);
			writeEvent("meji5");
			passTime();
			writeText("His hands move towards his bikini bottoms for a moment, but he stops.");
			if(checkTrust('meji')>40){
				writeSpeech("meji","","Crap... It's getting late.");
				writeText("He gestures to the clock, frowning.");
				writeSpeech("meji","","Sorry, I wasn't originally planning on doing anything with you today. Thought you might still be sore, so I kinda made plans...");
				writeSpeech("player","","That's fine. This <i>was</i> kind of spur-of-the-moment. Thanks for checking up with me, though. And for the <i>fun</i>, of course.");
				writeText("He smiles, standing up and stretching his legs a bit as he picks up his clothes.");
				writeSpeech("meji","","I'm happy to do it. Plus, I get the feeling you'll be <i>very</i> enthusiastic about paying me back for <i>every single <b>drop.</b></i>");
				writeText("He winks as he slides his pants up, hiding his underwear as he wipes the last of his spit from his chin.");
				writeSpeech("meji","","How do I look? Did I miss anything?");
				writeSpeech("player","","You got it all. Not a soul out there would suspect that you just sucked off your counselor in women's swimwear.");
				writeText("He scoffs, swinging jokingly at you.");
				writeSpeech("meji","","Ah, quit it. The fact that I can still taste you is enough of a turn-on, "+data.player.honorific+" - keep talking like that, and I'll rip through my jeans.");
				writeText("mejiF unlocks the door, leaning against it for a second.");
				writeSpeech("meji","","Thanks for the talk, by the way. See you later!");
			}
			else{
				writeSpeech("meji","","Damn... It's getting late.");
				writeText("He gestures to the clock, frowning.");
				writeSpeech("meji","","Sorry, I wasn't sure that we were doing anything today. I thought you might still be sore, so I... kinda made plans...");
				writeSpeech("player","","That's fine. This <i>was</i> rather spur-of-the-moment, after all.");
				writeText("He smiles, standing up and stretching his legs a bit as he picks up his clothes.");
				writeSpeech("meji","","Thank you, "+data.player.honorific+". I'll make sure to keep my schedule open after school.");
				writeText("He quickly slides his pants up, hiding his underwear as he wipes the last of his spit from his chin.");
				writeSpeech("meji","","I didn't miss anything, did I?");
				writeSpeech("player","","You got it all. Not a soul out there would suspect that you just sucked off your counselor in women's swimwear.");
				writeText("He looks down to the floor, smiling as his face gets a little flushed.");
				writeSpeech("meji","","Or that I can still <i>taste</i> you, "+data.player.honorific+". Don't go making me wait <i>too</i> long, please?");
				writeText("mejiF unlocks the door, leaning against it for a second.");
				writeSpeech("meji","","...Thanks for the talk, by the way. It means a lot.");
			}
			writeText("He leaves quickly, shutting the door behind him and leaving you with whatever business you have planned for the day.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meji4b" : {
			raiseTrust('meji',1);
			writeSpeech("player","","Not today, sorry. I'm a bit tied up with some other business.");
			writeText("He smiles, nodding.");
			writeSpeech("meji","","That's fine - I kinda thought you might be. I hope you won't make me wait <i>too</i> long, though~! I actually have something I'd like to show you next time, so let's both look forward to it.");
			writeSpeech("player","","Sure thing, mejiF.");
			writeText("With that, he stands up and (after checking the buttons on his shirt) exits the room, leaving you to your business.");
			writeFunction("changeLocation(data.player.location)", "Get back to work");
			break;
		}

		case "meji5" : {
			passTime();
			if(checkTrust('meji') == 26){
				addFlag('meji','submissive');
			}
			else{
				addFlag('meji','willful');
			}
			setTrust('meji',60);
			if(checkFlag('meji','willful')){
				writeText("mejiF grins broadly as he spots you, brushing at his shirt for a second.");
			}
			else{
				writeText("mejiF smiles gently as you approach. He seems to keep fiddling with his pants, right around his hip...");
			}
			if(checkFlag('meji','meji5Gallery')){
				if(checkFlag('meji','willful'))
					writeSpeech("meji","","How about the two of us pick up where we left off? If we head back to my place, we won't have to worry about anyone knocking on your office door~!");
				else
					writeSpeech("meji","","Hello, playerSir. I was wondering if maybe you wanted to pick up where we left off last time? We could go to my place and not worry about getting interrupted...");
			}
			else{
				if(checkFlag('meji','willful'))
					writeSpeech("meji","","Heya, playerSir! I was wondering if you were free later? I want to show you that 'something' I mentioned last time!");
				else
					writeSpeech("meji","","Hello, playerSir. I was wondering if you have some time later today? I'd like to show you that 'something' I mentioned last time...");
			}
			writeFunction("writeEncounter('meji5a')", "Go to his place");
			writeFunction("changeLocation(data.player.location)", "Maybe later");
			break;
		}
		case "meji5a" : {
			if(checkFlag('meji','willful')){
				writeText("mejiF's grin widens further. He quickly scans the hallway and, satisfied that no one seems to be watching, he steps forward.");
				writeText("You feel his lips press gently against yours as he winks.");
				writeSpeech("meji","","See you then, playerSir.");
				writeText("He strides off confidently, his hands folded clasped his back as he goes. Plus, with that sway he has going on, it's a pleasure to watch him go...");
			}
			else{
				writeText("His face gets a little redder.");
				writeSpeech("meji","","Alright. I'll see you then, playerSir.");
				writeText("He starts to turn away, but pauses.");
				writeText("He looks around for a second and, seeing no one else looking, he quickly steps toward you.");
				writeText("His lips just barely brush up against yours before he steps back.");
				writeSpeech("meji","","Thanks.");
				if(checkFlag('meji','meji5Gallery'))
					writeText("Before you can respond, he darts off. Seems like he's really looking forward to finishing what you two started...");
				else
					writeText("Before you can respond, he darts off. Seems like he's really excited to show you whatever it is he got...");
			}
			writeText("...");
			writeText("Shutting the door as you step into his house, you can hear what sounds like mejiF humming from the main room.");
			writeText("He goes quiet as you walk further in.");
			if(checkFlag('meji','willful'))
				writeSpeech("meji","","playerF?");
			else{
				if(data.player.gender == "man")
					writeSpeech("meji","","Sir?");
				else
					writeSpeech("meji","","Ma'am?");
			}
			writeText("Rounding the corner, you see mejiF sitting in the middle of the room, smiling and pocketing his phone.");
			if(checkFlag('meji','meji5Gallery'))
				writeSpeech("player","","The one and only. Looks like I might've kept you waiting?");
			else
				writeSpeech("player","","The one and only. You said you had something you wanted to show me? Is it safe to assume it's something <i>fun?</i>");
			if(checkFlag('meji','willful'))
				writeSpeech("meji","","Nah. I was texting some friends about the weekend, so your timing is actually perfect.");
			else
				writeSpeech("meji","","Not at all! I was just making plans for the weekend, so I was barely waiting at all.");
			writeSpeech("player","","Oh? What sort of plans? Nothing that a school counselor might object to, I hope.");
			writeText("mejiF smiles, shaking his head.");
			writeSpeech("meji","","Study group, actually. I can't spend <i>all</i> my time having fun - if I did, I'd flunk right out of the University.");
			if(checkFlag('meji','willful')){
				writeText("Saying that, he grins saucily and starts undoing his shirt's top-button.");
				writeSpeech("meji","","Of course, that doesn't mean I can't have my fun between the study sessions.");
			}
			else{
				writeText("Saying that, he blushes a bit as he reaches for his shirt's buttons.");
				writeSpeech("meji","","Of course, while I plan on studying up, everyone needs a bit of fun between sessions. Don't you agree, playerSir?");
			}
			if(checkFlag('meji','meji5Gallery')){
				writeSpeech("player","","A bit of relaxation can do wonders for your studying... probably. And that's just one more reason we should pick up where we left off.");
				writeSpeech("meji","","Of course.");
			}
			else{
				writeSpeech("player","","A bit of relaxation can do wonders for your studying... probably. But I suppose that means you're about to show me a new <i>studying aid?</i>");
				writeSpeech("meji","","You could say that.");
			}
			writeText("mejiF turns around for a moment, undoing the buttons on his shirt and his pants.");
			writeText("When he turns back around, it's to show what he's been wearing underneath.");
			if(checkFlag('meji','meji5Gallery')){
				writeBig("images/meji/8-1.jpg", "Art by Nagi Ichi");
				writeSpeech("meji","","Do you like it? I've been wearing it under my uniform lately... including in your office back then.");
				writeSpeech("player","","I'd say it looks nice, but I feel like you're not looking for a <i>verbal</i> reply.");
				writeText("He smiles as he tosses his other clothes to the side.");
				writeText("He steps in front of you before kneeling down, his hands rubbing against your crotch as he slides forward.");
				writeSpeech("meji","","Mmm... I could tell from looking at you, but feeling it in my hand is way better.");
				if(data.player.gender == "man"){
					writeText("He leans his head down, pulling your pants low enough to reveal your underwear.");
					writeText("You feel his mouth press down against the thin fabric, his hot breath and spit soaking into it as his tongue dances across the fabric.");
					writeSpeech("meji","","Don't worry, I won't make you wait for the real deal...");
					writeText("He slides your underwear down, your cock springing out as it does, smiling up at you and giving a wink.");
				}
				else{
					writeText("He leans his head down, lifting your skirt just enough to reveal your panties.");
					writeText("You feel his mouth press down against the thin fabric, his hot breath and spit soaking into it as his tongue dances across the fabric.");
					writeSpeech("meji","","Don't worry, I won't make you wait for the real deal...");
					writeText("He slides your panties down, your cock springing out as it does, smiling up at you and giving a wink.");
				}
				writeSpeech("meji","","So let's get right to it~!");
				writeFunction("writeEvent('meji7')", "Get ready to fuck");
				break;
			}
			else{
				writeEvent("meji6");
			}
			break;
		}
		case "meji6" : {
			if(checkTrust('meji') == 60)
				setTrust('meji',61);
			writeText("You clear your throat as you approach, making him look up from the phone.");
			if(checkFlag('meji','willful')){
				writeSpeech("meji","","Oh, hey! What's up?");
				writeSpeech("player","","Not much... <b>puppy.</b>");
				writeText("mejiF freezes for a second, just barely suppressing a shuddering moan before turning bright red.");
				writeSpeech("meji","","W-Whoa there... At least wait until the halls are empty~");
				writeText("He grins, putting a hand on his hip and speaking quietly.");
				writeSpeech("meji","","Of course, if you want to do some <i>public-play,</i> I can't say I'm against it.");
				writeText("He pauses.");
				writeSpeech("meji","","I mean, unless there's something else you wanted to talk about... or <i>try out,</i> at least.");
			}
			else{
				writeSpeech("meji","","Ah, hello playerSir! Sorry, I got a little distracted.");
				writeSpeech("player","","It's fine. Something important?");
				writeSpeech("meji","","Just the study-group I mentioned before. We were going over integral calculus, and I was reviewing the text logs.");
				writeText("He pockets the phone, smiling up at you.");
				writeSpeech("meji","","Was there something you wanted to ask about?");
				writeSpeech("player","","I just wanted to check on you... <b>puppy.</b>");
				writeText("mejiF freezes for a second, just barely suppressing a shuddering moan before turning bright red.");
				writeText("He takes a second to look around, seeing if anyone heard, but it seems like no one did.");
				writeSpeech("meji","","...Thank you, playerSir!");
				writeText("He shifts his weight, clasping his hands in front of him.");
				writeSpeech("meji","","If you want to do public-play, though, I'd be happy to go into town with you. If you're interested, that is...");
				writeText("He pauses.");
				writeSpeech("meji","","Well, unless there was something else you wanted to talk about?");
			}
			if(checkFlag('meji','meji8Gallery') != true)
				writeFunction("writeEncounter('meji8')", "Go for a walk in town while he cross-dresses");
			if(checkFlag('meji','meji9Gallery') != true)
				writeFunction("writeEncounter('meji9')", "Have him meet you in the gym with women's workout shorts on");
			writeFunction("changeLocation(data.player.location)", "Maybe later");
			break;
		}
		case "meji7" : {
			if(checkTrust('meji') == 61)
				setTrust('meji',62);
			writeText("You see mejiF's head just slightly twitch as you approach, and he looks up.");
			if(checkFlag('meji','willful')){
				writeSpeech("meji","","Yo. What's up, playerSir?");
				writeText("He grins wolfishly.");
				writeSpeech("meji","","You here to invite innocent ol' me out for a little <i>fun?</i>");
			}
			else{
				writeSpeech("meji","","Good morning, playerSir!");
				writeText("He quickly pockets his phone, smiling gently up at you.");
				writeSpeech("meji","","Did you want to talk to me about something?");
			}
			if(checkFlag('meji','meji8Gallery') != true)
				writeFunction("writeEncounter('meji8')", "Go for a walk in town while he cross-dresses");
			if(checkFlag('meji','meji9Gallery') != true)
				writeFunction("writeEncounter('meji9')", "Have him meet you in the gym with women's workout shorts on");
			if(checkFlag('meji','meji8Gallery') && checkFlag('meji','meji9Gallery'))
				writeFunction("writeEncounter('meji10')", "Talk to mejiF about his future plans");
			writeFunction("changeLocation(data.player.location)", "Maybe later");
			break;
		}
		case "meji8" : {
			passTime();
			if(checkTrust('meji') == 61)
				writeSpeech("player","","Actually, public-play isn't such a bad idea. I know you own a girl's uniform, but...");
			else
				writeSpeech("player","","I was thinking about going for walk through town with you. I know you own a girl's uniform, but...");
			if(checkFlag('meji','willful')){
				writeSpeech("meji","","You want to know if I've got casualwear that <i>doesn't</i> look like it belongs on a gymnast?");
				writeText("He smirks.");
				writeSpeech("meji","","It's a bit revealing, but I've got just the outfit. Where do you wanna meet?");
				writeSpeech("player","","How about near the shopping district?");
				writeSpeech("meji","","Perfect. See you after classes!");
			}
			else{
				writeSpeech("meji","","Ah, I do have a casual outfit. Though, it's a bit more revealing than the uniform...");
				writeSpeech("player","","'Public indecency' revealing, or 'the way I like it' revealing?");
				writeText("He laughs lightly.");
				writeSpeech("meji","","More of the second, I think. Where did you want to meet up?");
				writeSpeech("player","","How about near the shopping district?");
				writeSpeech("meji","","That sounds great. I'll see you after classes!");
			}
			writeText("...");
			writeEvent("meji8");
			break;
		}
		case "meji8a" : {
			data.player.location = "shoppingDistrict";
			addFlag('meji','alleySex')
			writeSpeech("player","","Reactions can be pretty entertaining to watch... <b><i>puppy.</i></b>");
			writeText("His grip on your arm tightens sharply, accompanied by an audible hitch in his breathing.");
			writeSpeech("meji","","...Thank you, playerSir~");
			if(checkFlag('meji','willful')){
				writeText("He smirks up at you, a teasing look in his eyes.");
				writeSpeech("meji","","But I don't plan on falling apart <i>that</i> easily. After all...");
			}
			else{
				writeText("He smiles up at you, a teasing twinkle in his eyes.");
				writeSpeech("meji","","I'll be sure not to fall apart <i>too</i> easily, though. After all...");
			}
			writeText("He stands up on his toes, his breath warm against your ear...");
			writeSpeech("meji","","<i>You trained me better than that.</i>");
			writeText("Relaxing a bit, mejiF leans against you as you walk.");
			writeText("There's a strong part of you that's saying to just have a nice day on the town, just enjoy hanging out with mejiF...");
			writeText("And then there's the <i>very</i> strong part that's taking those words as a challenge.");
			writeSpeech("player","","Hey, did you know that there's a particular store near here that you might be interested in?");
			writeSpeech("meji","","Really? What kind?");
			writeSpeech("player","","A pet store.");
			if(checkFlag('meji','willful'))
				writeSpeech("meji","","...Oh, I am going to regret today in the <i>best</i> ways.");
			else
				writeSpeech("meji","","...Oh <i>fuck yes.</i>");
			writeText("...");
			writeText("You have a very <i>interesting</i> time looking at the animals. There were the fish, of course, and the ferrets were absolutely lovely. The hamsters were pudgy, and the mice... Well, they're not for everyone.");
			writeText("And, of course, there were all the dogs.");
			writeText("You really didn't know that two dogs had given birth to full litters just last week, but the timing was pretty great.");
			writeText("The best part wasn't even when you would use the trigger on mejiF. Since the trigger was specifically set to go off when you called him a puppy, it was pretty rare for it to happen accidentally.");
			writeText("No, the best part was definitely watching him balance how much he loved the adorable little floofs with how jealous he was getting at hearing the word without any effect.");
			writeText("Of course, you managed to keep things civil by figuring out that, even if you weren't calling <i>him</i> puppy, maintaining direct eye-contact while saying it seemed to have a lesser effect.");
			writeText("However, all good things must come to an end, and using a pet shop to tease your companion can only last so long...");
			writeText("Mainly because if you stayed any longer, there's no way mejiF could hide his erection, and you really don't want to explain to the staff why a crossdresser is erect in a pet store.");
			writeSpeech("meji","","...");
			writeText("mejiF's actually been silent for a few minutes now, ever since you left. He's kept his grip on your arm pretty tight, and he's walking very close.");
			writeSpeech("player","","...Are you okay?");
			writeText("There's another moment of silence, before he lets go of your arm.");
			writeText("You turn to look at him, and...");
			if(checkFlag('meji','willful')){
				writeBig("images/meji/9-2w.jpg", "Art by Nagi Ichi");
				writeSpeech("meji","","I'm f-fine. I'm definitely not about to...");
				writeText("He blinks a few times before taking a deep breath.");
				writeSpeech("meji","","...Screw it.");
				writeSpeech("player","","W-Whoa!");
				writeText("You feel mejiF suddenly and sharply pull on your arm, taking the both of you to a side-alley.");
				writeText("A second later, his arms are wrapped around your chest as he takes an even deeper breath.");
				writeText("It takes you a moment to notice, but...");
				writeText("This is one of the alleys mejiF used to try and avoid you back when you first saw him cross-dressing.");
				writeSpeech("meji","","...God, your smell is only making this stupid hard-on <i>so much worse.</i>");
				writeText("He looks up from your chest, pouting.");
				writeSpeech("meji","","And you always know <i>exactly</i> what you're doing whenever you do it. You're totally making it impossible to go a day without thinking about your body, you know that?");
				writeSpeech("player","","...Thanks?");
				writeSpeech("meji","","Thank me with a <i>different</i> part, playerSir.");
				writeText("He pulls back from you, turning around and cautiously looking around the alley to make sure you're alone...");
				writeText("...before popping his skirt over his ass, showing off the thin pink fabric barely covering his hole.");
				writeSpeech("meji","","So, what are you waiting for? I'm practically already cu- <i><b>FUCK!</b></i>");
				writeText("Your hand swings across his ass, the expletive accompanied by a low moan as his body shivers a bit.");
				writeSpeech("player","","You are, without question, the most <i>masochistic <b>bitch</b></i> I've ever met. You know that?");
				writeSpeech("meji","","...I fucking <i>love</i> your foreplay~");
			}
			else{
				writeBig("images/meji/9-2w.jpg", "Art by Nagi Ichi");
				writeText("He's breathing a bit heavily, trying to maintain eye-contact as you realize that the reason he was standing close was to hide his erection from the crowd.");
				writeSpeech("meji","","I, um... I might've underestimated the trigger.");
				writeSpeech("player","","Yeah, I can see that.");
				writeText("You pull him a bit closer to try and mask it a bit.");
				writeSpeech("player","","Let's get you back to my place, and we'll see about dealing with that- WHOA!");
				writeText("You feel mejiF suddenly and sharply pull on your arm, pulling you further down the street.");
				writeSpeech("meji","","Sorry, playerSir, but...");
				writeText("He takes you to a side-alley - an alley that you actually recognize as one of the ones mejiF used to try and avoid you back when you first saw him cross-dressing.");
				writeText("A second later, his arms are wrapped around your chest as he takes a deep breath.");
				writeSpeech("meji","","...God, your smell is only making this stupid hard-on <i>so much worse.</i>");
				writeText("He looks up from your chest, pouting.");
				writeSpeech("meji","","Here.");
				writeSpeech("player","","...Here?");
				writeText("He nods slowly.");
				writeSpeech("meji","","Last time we were here, I was... rude. When you suggested public-play, I, um... kinda had an agenda.");
				writeText("He pulls back from you, turning around and cautiously looking around the alley to make sure you're alone...");
				writeText("...before popping his skirt over his ass, showing off the thin pink fabric barely covering his hole.");
				writeSpeech("meji","","I already apologized, and you already forgave me, but...");
				writeText("He runs his hands along his ass, his erection forcing his panties to stretch to their limit.");
				writeSpeech("meji","","I just <i>really</i> wanted to do it here... If you're okay with- <i><b>FUCK!</b></i>");
				writeText("Your hand swings across his ass, the expletive accompanied by a low moan as his body shivers a bit.");
				writeSpeech("player","","You are, without question, the most <i>masochistic <b>bitch</b></i> I've ever met. You know that?");
				writeSpeech("meji","","...I'm sorry, I-");
			}
			writeText("Another slap quickly shuts him up, before you then slide his panties to the side.");
			writeSpeech("player","","But you're <i>my</i> bitch, <b>puppy.</b>");
			writeText("You press yourself against him, his whole body shuddering from the trigger as you undo your belt.");
			writeSpeech("player","","And if you want to get fucked in the alley like a dog...");
			writeText("You free your cock from your pants and grab his hands by the wrists as you line up your quickly-freed cock to his hole.");
			writeSpeech("player","","Then I'm happy to oblige.");
			writeText("Pulling him with your arms, you slam into him forcefully, his slick walls opening up easily for you.");
			writeBig("images/meji/9-3.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","Oh fuck...!");
			writeText("You immediately go full-force, the sound of your thighs slamming against his ass ringing out dangerously loud.");
			writeText("Not that mejiF seems to care the much, his ass tightening around you.");
			writeSpeech("player","","Is this what you wanted the whole time?");
			writeText("You buck against him sharply, a high-pitched squeal escaping his lips.");
			writeSpeech("player","","Teasing me from the start... You wanted to get fucked in the streets.");
			writeSpeech("meji","","Y-Yeah...!");
			writeSpeech("player","","We could get caught pretty easily. Especially with you moaning like a <i>bitch in heat.</i>");
			writeText("He barely squeaks out a response as he starts quaking around your shaft.");
			writeSpeech("player","","But I bet getting caught-");
			writeText("You draw back until the very tip of your dick is barely inside.");
			writeSpeech("player","","-would just make you <i>spurt even harder.</i>");
			writeText("You <b>slam</b> your shaft in again, mejiF's legs nearly giving out as he starts to cum, almost as if on-cue.");
			writeBig("images/meji/9-4.jpg", "Art by Nagi Ichi");
			writeText("You can feel his ass milking your own load out of you while he paints the wall white, but it's not enough for either of you.");
			writeText("Letting go of his hands, you place one on his thigh while grabbing his hair with the other.");
			writeText("You pull him closer to your body, speaking directly into his ear.");
			writeSpeech("player","","Now, what do you say to the *Man that just made you <i>cum,</i> <b>puppy?</b>");
			if(checkFlag('meji','willful')){
				writeText("You can feel him laugh softly, even as his body keeps shuddering.");
				writeSpeech("meji","","Harder, daddy~");
				writeText("Oh, this promises to be fun...");
			}
			else{
				writeText("You feel his own hand reach back, pulling your head towards his.");
				writeText("For a moment, you feel his lips press hungrily against yours, his tongue sliding into your mouth for a second before he pulls back, looking at you with lust-hazed eyes.");
				writeSpeech("meji","","Thank you for filling my ass, playerSir~... Please keep using me until <i>you're</i> satisfied too...!");
				writeText("Oh, this promises to be fun...");
			}
			writeText("...");
			writeText("The two of you eventually manage to satisfy each other, miraculously without anyone coming to investigate the sounds of your fuckfest.");
			writeText("Most of the day is gone at that point, but then again, the whole point of going out was experimenting a bit with public play, so...");
			writeText("Mission accomplished. Plus, there's a certain primal satisfaction that comes from walking mejiF home while your cum runs down his legs...");
			writeText("It might be a good idea to give him a bit of time to recover, though. Either way, it's about time to head out. You have other business to attend to... Probably.");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meji9" : {
			document.getElementById('output').innerHTML = '';
			passTime();
			setTrust('meji',65);
			writeSpeech("player","","Do you happen to have any women's workout shorts?");
			if(checkFlag('meji','willful')){
				if(checkTrust('sports') >= 111){
					writeSpeech("meji","","Women's shorts? I mean, I don't actually <i>have</i> any, but I could get a pair pretty easily. sportsF and I have been chatting after her club lately.");
					writeText("He smirks up at you, his hand on his hip.");
					writeSpeech("meji","","Turns out we have a few talking points in common, <i>*Master~</i>");
					writeSpeech("player","","Huh. Yeah, I did mention you to her, but I didn't think she'd approach you.");
					writeSpeech("meji","","Mm, she wanted to talk to me about the best ways to please you.");
					if(checkTrust('sports') >= 130){
						writeSpeech("meji","","Specifically, she wanted some pointers on how to make anal feel even better. I guess she really enjoyed having you fuck her ass, *Sir~ Just thinking about the way you had her gushing over how good it felt is getting me turned on like <i>crazy.</i>");
						writeSpeech("player","","Good. That'll make it that much more fun for both of us when you meet me in the gym wearing those shorts.");
					}
					else{
						writeSpeech("meji","","...Of course, I only really have tips for anal, and she's never taken anything up there, so we ended up just gushing over how you taste. You should've seen how she was rubbing her thighs together when I mentioned how good you make anal feel though~!");
						writeSpeech("player","","I'll have to keep that in mind while training her... In the meantime, make sure to get a pair of workout shorts and meet me in the gym later.");
					}
				}
				else{
					writeSpeech("meji","","Women's shorts? Yeah, I've got a pair at home. I wear them while exercising, since they don't limit my movement much.");
					writeSpeech("player","","Excellent. In that case, I want you to come to the gym wearing them.");
					writeText("He nods with a confident grin.");
				}
				writeSpeech("meji","","You got it, *Sir! I'll have the door locked, just in case someone comes while I'm waiting for you.");
			}
			else{
				if(checkTrust('sports') >= 111){
					writeSpeech("meji","","Women's shorts...? I mean, I don't own my own pair, but I can get a pair. I've been spending time with sportsF lately. She came to talk to me after you mentioned me to her, and we've been hanging out a bunch, talking about...");
					writeText("His face reddens a bit.");
					writeSpeech("meji","","Well, about <i>you,</i> mostly, but we also talked about clothes too. I'd have asked about borrowing some, but I think it's pretty obvious that most of hers wouldn't exactly fit me.");
					writeSpeech("player","","Oh? You actually have me curious now... When you discussed me, what were you two talking about specifically?");
					if(checkTrust('sports') >= 130){
						writeText("His face gets even redder, but he smiles proudly as he shifts in place.");
						writeSpeech("meji","","I gave her tips on anal. Things like my preferred lube, how to make it feel better for her, and ways to make it more fun for you, too!");
						writeSpeech("player","","Huh, giving sex tips to my other toys, huh? You're a very good little slave, you know that?");
						writeText("His face lights up in embarrassment as he looks down at the ground bashfully.");
						writeSpeech("meji","","...Thank you, *Sir~");
					}
					else{
						writeText("His face gets even redder as he shifts in embarrassment.");
						writeSpeech("meji","","How to please you, our favorite times having sex with you... We spent a little while gushing over your taste, too. When I told her about the time where you made me cum with just anal, she seemed really, <i>really</i> excited.");
						writeSpeech("player","","Huh. Good to know - I'll have to keep that in mind while training her. I might have another little <i>butt-slut</i> on my hands.");
						writeText("He smiles up at you, nodding.");
						writeSpeech("meji","","I hope she enjoys it as much as I do, *Sir.");
					}
					writeSpeech("player","","Anyway, you should go get those shorts and meet me in the gym while wearing them. I plan on having some fun with you today.");
					writeText("He nods excitedly.");
					writeSpeech("meji","","Yes *Sir! I'll have the door locked in case someone comes to the gym before we meet up.");
				}
				else{
					writeText("He pauses to think.");
					writeSpeech("meji","","Women's shorts? I do, actually. I have them at home - I use them when I'm exercising. Did you want me to wear them?");
					writeSpeech("player","","Yes. I want you to come to the gym wearing them, and you should probably lock the door so that if someone comes before I do, you won't get caught.");
					writeSpeech("meji","","Of course, *Sir. I'll head home to get them now, and then I'll wait for you in the gym~");
				}
			}
			writeSpeech("player","","Sounds good. I'll see you there.");
			writeFunction("writeEvent('meji9')", "Kill some time before heading to the gym");
			break;
		}
		case "mejiEvent9A" : {
			if(checkFlag('meji','NippleCum') != true)
				addFlag('meji','NippleCum');
			writeSpeech("player","","If you're enjoying my hands that much, then how about this...");
			writeText("You lean your head forward, your lips nearly against his ear as you speak.");
			writeSpeech("player","","I'm going to tease your chest. I'll rub all around your nipples, just like this...");
			writeText("You drag the pad of your fingers in circles around his chest, making him twitch.");
			writeSpeech("player","","...and I'm going to count down from five, nice and slow. But you <i>won't</i> be going deep into a trance.");
			writeText("He pauses for just a moment, before nodding.");
			writeSpeech("player","","...If something is true, mejiF, I want you to say 'Yes *Sir'.");
			writeSpeech("meji","","Y-Yes *Sir.");
			writeSpeech("player","","And if I say it... it must be true, right?");
			writeSpeech("meji","","Yes, *Sir~");
			writeSpeech("player","","Very good.");
			writeText("You spread your hands out a bit, cupping his chest in your palms and rubbing around in small circles.");
			writeSpeech("player","","This is five, mejiF, and your chest is very, <i>very</i> sensitive.");
			writeSpeech("meji","","Hn~... Yes, *Sir.");
			writeText("Gently pulling your hands together, you squeeze a bit as mejiF sharply inhales.");
			writeSpeech("player","","Four. Your nipples feel so stiff right now, and just the slightest touch, even the <i>breeze</i> would be enough to make you moan.");
			writeText("As he opens his mouth, you move your hands away quickly.");
			writeSpeech("meji","","F-Fuck~...!");
			writeText("He shakes a bit against your body, the air probably feeling like sparks of pleasure on his skin.");
			writeSpeech("meji","","Yes, *Sir...!");
			writeSpeech("player","","That's very good... Three. Your sensitivity isn't getting lower as I tease you. It's getting <i>higher.</i>");
			writeText("His breathing just picks up more, a half-squeal coming out of his mouth as you go back to drawing slow spirals around his chest, getting closer and closer to his nipples.");
			writeSpeech("meji","","Yes, yes, yes...!");
			writeText("You sharply pull away.");
			writeSpeech("player","","Yes?");
			writeSpeech("meji","","Y-Yes <i>*Sir!</i>");
			writeSpeech("player","","Two, and you're getting closer. Much, <i>much</i> closer to finishing, to cumming from nothing but your chest.");
			writeText("He lets out a few gasping pants, just as you press your lips to his ear.");
			writeSpeech("player","","One.");
			writeText("You reach towards his chest, pinches his nipples almost roughly and pulling.");
			writeSpeech("meji","","Oh holy <i>FUCK~</i>");
			writeBig("images/meji/10-4.jpg","Art by Nagi Ichi");
			writeText("His eyes roll up as you carefully twist and pinch, his hips bucking sharply forward as he starts to spurt, pushed over the edge as you pull.");
			writeText("He keeps cumming for several seconds before leaning back against you, slumping gently with a contented sound.");
			if(checkFlag('meji','willful')){
				writeSpeech("meji","","Fuck, that was...");
				writeText("He takes a moment to breathe, looking up at you with a grin.");
				writeSpeech("meji","","That was amazing. Thanks, *Sir~. But, y'know...");
			}
			else{
				writeSpeech("meji","","T-That was...");
				writeText("He takes a moment to breathe, before looking up with a gentle smile.");
				writeSpeech("meji","","Thank you, *Sir~... But, you know...");
			}
			writeText("You feel his hand press gently against your crotch, his smile widening.");
			writeSpeech("meji","","It's <i>definitely</i> not fair if I'm the only one who gets to get off today~");
			writeFunction("writeEncounter('mejiEvent9B')", "Bring him down to the ground now");
			break;
		}
		case "mejiEvent9B" : {
			writeText("Grabbing him by the waist, you grin down at him as you start to crouch down on the mat-floor. He quickly follows suit, both of you laying on your sides after a moment.");
			writeSpeech("player","","Are you ready?");
			writeSpeech("meji","","Mm, definitely~");
			writeText("You slide his shorts to the side, exposing his hole to the air as he gently moans from the feeling of your hands moving across his ass.");
			writeText("He doesn't hesitate for a moment to slide his ass against your cock, letting out a low, sexual hum of pleasure when he feels it press against his hole.");
			writeSpeech("player","","You want this.");
			writeSpeech("meji","","Yes *Sir~!");
			writeText("You lean forward, your lips gently brushing against his ear as you speak.");
			writeSpeech("player","","Then say it.");

			writeSpeech("meji","","Y-Yes *Sir! Please, fill my ass with your fat fucking cock~! <i>Use my ass until you cum!</i>");
			writeSpeech("player","","Very good.");
			writeText("Without another moment of hesitation, you slide your body forward, feeling his body shake gently as you push into him and spread his ass with your cock.");
			writeSpeech("meji","","God, yes~! Thank you so much, *Sir~!");
			if(checkFlag('meji','NippleCum')){
				writeBig("images/meji/10-5c.jpg","Art by Nagi Ichi");
			}
			else{
				writeBig("images/meji/10-5.jpg","Art by Nagi Ichi");
			}
			writeText("He seems to enjoy servicing you just as much, if not more, than getting himself off. It really begs the question, and with your hypnosis...");
			writeSpeech("player","","mejiF.");
			writeText("You hear him grunt as he turns his head to look at your face.");
			writeSpeech("player","","Every time I thrust into you, you'll feel your inhibitions fade away, and you'll tell me <i>exactly</i> what you want me to do to make you cum.");
			writeText("His eyes go wide for a second.");
			writeSpeech("meji","","I-... Yes, *Sir!");
			writeText("You tighten your grip on his thigh as you start pistoning into him, high-pitched feminine moans spilling out of his mouth with every thrust.");
			writeText("You give his nipple a short pinch as he gasps in pleasure.");
			writeSpeech("meji","","I... I want...");
			writeText("His voice hitches for a moment, so you thrust into him again and again, waiting to hear it.");
			writeText("You're not sure how many times you thrust into him, pounding his ass and pressing against his prostate as he moans sweetly.");
			writeSpeech("meji","","I want-...!");
			writeText("He keeps hesitating, each thrust slowly breaking away his sense of restraint, until finally...");
			writeSpeech("meji","","Oh, fuck it!");
			writeText("His hand grabs the back of your head, pulling it towards his as he presses his lips against yours.");
			writeText("It's surprisingly simple, without any of the sexual hunger you expected, as he slowly pulls back a bit.");
			writeSpeech("meji","","Do you have any idea how much time you've put into making me cum? With my ass, with my chest, with <i>whatever.</i> I couldn't have kept track if I tried.");
			writeSpeech("meji","","I get that you enjoy getting me off, but frankly *Sir?");
			writeText("He smiles wryly, running his hand gently across your cheek for a moment.");
			writeSpeech("meji","","I want you to fuck me like a piece of meat and fill me up like a cheap <i>whore.</i> I want to pleasure you too.");
			writeText("You feel his ass tighten around you, making each thrust even more pleasurable.");
			writeSpeech("player","","...You know what you're getting yourself into?");
			writeText("He lets out a soft, gentle laugh as he shifts into a slightly more comfortable position.");
			writeSpeech("meji","","Yes, *Sir~!");
			writeText("You tighten your grip around him and take a deep breath.");
			writeText("Then you start to <b>fuck him.</b>");
			writeText("Your hands roughly paw at his chest as he gasps sharply, his body starting to twitch quickly as another load starts to spurt out of him.");
			writeText("You focus solely on your own pleasure, on using him and fucking him into the mat.");
			writeSpeech("meji","","S-Shit, fuck, fuck yes, <i>yes, <b>yes~!</b></i>");
			writeText("Instead of holding back, you go as fast as you can handle, and it isn't long before you're starting to approach the edge.");
			writeText("mejiF can hardly seem to speak as you pound into him, his voice reduced to mewling your name, God's, and several expletives as he keeps dribbling more and more cum.");
			writeSpeech("player","","I'm...!");
			writeText("His moans reach their peak as you speed up for one final burst, finishing with you slamming your cock into him and cumming.");
			writeBig("images/meji/10-6.jpg","Art by Nagi Ichi");
			writeText("As you fill him up, your thrusting finally coming to a halt, he takes gasping breaths and shivers against you.");
			writeSpeech("meji","","Thank you...");
			writeText("Honestly, a part of you wants to thank <b>him,</b> but...");
			writeSpeech("player","","You're welcome. You did good.");
			writeText("There's a momentary tightening around your shaft, your cock popping out as mejiF's hips buck one more time.");
			writeBig("images/meji/10-7.jpg","Art by Nagi Ichi");
			writeText("You stay there hazily for a few seconds before your bodies go a bit limp, relaxing on the ground. You're like that for a minute or so before you feel at least energized enough to get up.");
			writeText("Cum's not gonna clean itself up, and it is your job on the line, technically speaking...");
			writeText("But as you start to shift, you feel mejiF's hand on your wrist.");
			writeSpeech("meji","","I... wanna help clean up. In a minute, when I'm... not so tired. So just... hold up a sec, and lay back down...");
			writeSpeech("player","","...Hah. Alright, mejiF.");
			writeText("Smiling, you relax again, a contented sigh coming from the well-fucked mess as he basks in the afterglow.");
			writeText("...");
			if(checkFlag('meji','NippleCum'))
				removeFlag('meji','NippleCum');
			if(data.player.location != "gallery"){
				writeSpeech("meji","","Hm, that took a bit longer than expected.");
				writeSpeech("player","","That'll happen when you fall asleep for ten minutes.");
				if(checkFlag('meji','willful')){
					writeSpeech("meji","","Not my fault you-...");
					writeSpeech("player","","...You were about to say that it's not your fault I fucked you to sleep?");
					writeSpeech("meji","","I could've probably thought that one through a bit more, yeah.");
					writeText("He chuckles, shaking his head as he leans against the wall of the now-clean gym back-room.");
					writeSpeech("meji","","...Hey, can I be crazy honest about something?");
					writeSpeech("player","","Didn't I just fuck you into telling me your truest desire?");
					writeText("He laughs a bit, rolling his eyes a bit.");
					writeSpeech("meji","","I'm glad I met you. I never had someone to talk to about this stuff, and you let me do that and a lot more.");
					writeText("mejiF shrugs.");
					writeSpeech("meji","","Maybe it's the post-nut clarity, 'cause it feels like I'm seeing things nice and clear.");
					writeSpeech("player","","I might be a pervert and a hypnotist, but I'm still a councilor. Pretty sure that's my job. But I'm glad I've been helping.");
					writeText("mejiF smiles, nodding.");
					writeSpeech("meji","","Yeah. Anyway, I just wanted to say that. Don't wanna get <i>too</i> sappy though, so I think I'll head home. Slowly.");
					writeSpeech("player","","You <i>did</i> want it rough.");
					writeSpeech("meji","","And every step will be a wonderful reminder~");
					writeText("He grins, stepping up onto his toes to give you a quick peck on the cheek.");
					writeSpeech("meji","","Fuck ya later, *Sir!");
					writeSpeech("player","","See you later, mejiF.");
					writeText("With that, he walks his way out of the gym back room, leaving you to take a moment before heading out yourself...");
				}
				else{
					writeSpeech("meji","","Maybe, but that just means it was worth it.");
					writeText("He smiles over his shoulder at you, standing near the door of the now-clean room.");
					writeSpeech("meji","","...Hm. *Sir, do you mind if I'm super honest about something?");
					writeText("You pause.");
					writeSpeech("player","","Not at all. What's up?");
					writeSpeech("meji","","I'm glad I met you.");
					writeText("There's a moment of silence.");
					writeSpeech("player","","Thanks, I think.");
					writeSpeech("meji","","Ah, I mean that... you're the first person I've opened up to about crossdressing, and I never really realized how nice it is to just have... this.");
					writeText("He smiles wider, folding his hands behind him.");
					writeSpeech("meji","","It's freeing to have someone I can be open with.");
					writeSpeech("player","","Mm, I understand.");
					writeText("He laughs, nodding.");
					writeSpeech("meji","","You are a counselor after all, helping your student to cum to great realizations.");
					writeSpeech("player","","...I heard that pun.");
					writeSpeech("meji","","And I'm proud of it, so I'm not taking it back~");
					writeText("Stepping toward you, mejiF gets up on his toes to give you a quick peck on the cheek.");
					writeSpeech("meji","","I'll see you later, *Sir.");
					writeSpeech("player","","See you later, mejiF.");
					writeText("With that, he walks his way out of the gym back room, leaving you to take a moment before heading out yourself...");
				}
			}
			writeFunction("changeLocation(data.player.location)", "Finish up");
			break;
		}
		case "meji10" : {
			setTrust('meji',100);
			passTime();
			writeSpeech("player","","Actually I was curious if you had any plans for the future, after college.");
			if(checkFlag('meji','willful')){
				writeText("He chuckles abashedly, scratching the back of his head.");
				writeSpeech("meji","","Oof. Gotta hit me where it hurts, huh? But I guess you are a counselor, and I have had some thoughts about it recently. How about we chat in your office?");
				writeSpeech("player","","Sure.");
				writeText("...");
				writeText("When he enters the office, he reflexively checks the lock before sitting down.");
				writeText("Casually leaning back, he takes a deep breath and sighs.");
				writeSpeech("meji","","...So, I've been thinking.");
				writeSpeech("player","","An important thing to do.");
				writeText("He smirks for a moment, before his face gets a bit more serious.");
				writeSpeech("meji","","I... want to work for you. Like, in the future I mean - obviously not right now, since exams are bullshit and take up way too much time, but when I graduate.");
				writeSpeech("player","","And when you say <i>'work for me,'</i> you mean...?");
				writeSpeech("meji","","Both elements, actually. I don't know what I want to do for the <i>long</i> long-term, but getting a job here and helping you with counseling seems like a good job with great company.");
				writeSpeech("meji","","...Plus, call me a total perv, but I may or may not have fantasized about helping you do your hypno thing to other guys. I think the idea of you having a harem of dudes where I'm the top-bitch is just a solid life goal, really.");
				writeSpeech("player","","Well... that's not really a bad idea. I do have some fairly ambitious plans for the future, so getting some help for the long-run might pay off, and you're definitely good company to have.");
				writeSpeech("meji","","For things like the upcoming PTSA meeting, yeah.");
				if(checkFlag('principal','council')){
					writeSpeech("player","","Right, that... Yeah, that's a whole ongoing thing.");
					writeText("mejiF nods.");
					writeSpeech("meji","","I can ask if the other students know anything about it, if that helps?");
					writeSpeech("player","","Sure. If you could do that, I'd be greatful.");
					writeSpeech("meji","","So... does that make me your intern?");
				}
				else{
					writeSpeech("player","","...Wait, the what?");
					writeText("mejiF pauses.");
					writeSpeech("meji","","Did... Did they not tell you? I don't know exactly when it's happening, but there's supposed to be a meeting some time soon.");
					writeText("His eyes narrow slightly.");
					writeSpeech("meji","","That's weird... Though maybe Principal principalL is just waiting on a confirmation to tell you about it?");
					writeText("He shakes his head.");
					writeSpeech("meji","","I can try to look more into it, if you like. I know that a couple of the key-members are coming to the school to discuss things like who belongs on the staff and budgetary cuts, but aside from that, I'm afraid I don't actually know anything.");
					writeSpeech("player","","I see... If you could do that, I'd be greatful.");
					writeText("A whole bunch of people with a lot of influence suddenly coming to the university at once...");
					writeText("When it happens, it'll probably be a big deal. principalF will probably tell you about it when she thinks it's relevant but... better safe than sorry.");
					writeSpeech("meji","","So... does this make me your intern?");
				}
				writeSpeech("player","","I could probably get you listed as my assistant if you wanted. Not sure that it'll actually change anything though.");
				writeSpeech("meji","","No problem, I just think it'd be hot to do some boss-and-employee play or something. Just a kink thing, ignore it.");
				writeText("That's really not something that's easy to ignore...");
				writeText("He stands up, stretching gently with a grin.");
				writeSpeech("meji","","Neat! I'm gonna make sure my class schedule for next semester leaves some nice gaps for helping you with information-gathering and boy-sluttification.");
				writeSpeech("player","","...I <i>am</i> a counselor. It's literally my job to help with that, so we could always just use my computer and pull it up.");
				writeSpeech("meji","","Right, forgot that was a part of it... I skipped my counseling meeting when I enrolled. Anyway, let's go ahead and do this...");
			}
			else{
				writeSpeech("meji","","Hm... I've thought a bit about it, but probably not as much as I should. Should we discuss it in your office?");
				writeSpeech("player","","Of course.");
				writeText("...");
				writeText("When he enters the office, he reflexively checks the lock before sitting down.");
				writeSpeech("meji","","I've been thinking for a little while now, about what to do after college. But I'll be frank...");
				writeText("He takes a slow, deep breath before looking up at you.");
				writeSpeech("meji","","I want to work for you after I graduate, and hopefully help you out around the school in the meantime. When exams aren't bearing down on me, at least.");
				writeSpeech("player","","And when you say <i>'work for me,'</i> you mean...?");
				writeSpeech("meji","","Both the actual counseling part, and the... <i>lewd</i> parts.");
				writeText("His face flushes a bit, but he stays focused.");
				writeSpeech("meji","","I don't know if it's necessarily something I'd want to do forever, but getting a job here and helping you with counseling seems like a good job with great company.");
				if(checkTrust('tomgirl') >= 100)
					writeSpeech("meji","","...And I may or may not have fantasized about helping you do your hypno thing to other guys. I do know about tomgirlF, at least - he hasn't been very subtle since getting back.");
				else
					writeSpeech("meji","","...And I may or may not have fantasized about helping you do your hypno thing to other guys.");
				writeSpeech("player","","Well... that's not really a bad idea. I'm a fairly ambitious *Man, so getting some help for the long-run might pay off, and you're definitely good company to have.");
				writeSpeech("meji","","For things like the upcoming PTSA meeting, yeah.");
				if(checkFlag('principal','council')){
					writeSpeech("player","","Right, that... Yeah, that's a whole ongoing thing.");
					writeText("mejiF nods.");
					writeSpeech("meji","","I can ask if the other students know anything about it, if that helps?");
					writeSpeech("player","","Sure. If you could do that, I'd be greatful.");
					writeSpeech("meji","","So... does that make me your intern?");
				}
				else{
					writeSpeech("player","","...Wait, the what?");
					writeText("mejiF pauses.");
					writeSpeech("meji","","Did... Did they not tell you? I don't know exactly when it's happening, but there's supposed to be a meeting some time soon.");
					writeText("His eyes narrow slightly.");
					writeSpeech("meji","","That's weird... Though maybe Principal principalL is just waiting on a confirmation to tell you about it?");
					writeText("He shakes his head.");
					writeSpeech("meji","","I can try to look more into it, if you like. I know that a couple of the key-members are coming to the school to discuss things like who belongs on the staff and budgetary cuts, but aside from that, I'm afraid I don't actually know anything.");
					writeSpeech("player","","I see... If you could do that, I'd be greatful.");
					writeText("A whole bunch of people with a lot of influence suddenly coming to the university at once...");
					writeText("When it happens, it'll probably be a big deal. principalF will probably tell you about it when she thinks it's relevant but... better safe than sorry.");
					writeSpeech("meji","","So... does this make me your intern?");
				}
				writeSpeech("player","","I could probably get you listed as my assistant if you wanted. Not sure that it'll actually change anything though.");
				writeSpeech("meji","","Oh, I didn't mean it like that. I just... really like the idea of being under you.");
				writeSpeech("meji","","...Err, working-wise, I mean. Though the other kind <i>is</i> also really nice...");
				writeText("He shakes his head a bit, before smiling again.");
				writeSpeech("meji","","Anyway, I think it'd probably be a good idea for me to make sure my class schedule for next semester has a few periods that I can use to help out with information-gathering, especially on other guys like me.");
				writeSpeech("player","","Well, seeing as that <i>is</i> technically my job, I can pull that up on my computer.");
				writeSpeech("meji","","That would be lovely, thanks! I was thinking of taking a biology course with Miss nurseL...");
			}
			writeText("...");
			writeText("The two of you spend a while discussing class schedules and the optimal amount of free time to be spent on convincing boys to join your harem before heading your separate way for the day.");
			writeFunction("changeLocation(data.player.location)", "Finish up");
			break;
		}
		case "meji11" : {
			if(!checkFlag('meji','mejiAlt1Gallery')){
				writeSpeech("player","","Hey mejiF. How're you doing?");
				writeText("mejiF "+(checkFlag('meji','willful') ? "perks up when he spots you, smiling wide as you approach." : "seems to perk up a bit as approach, folding his hands behind his back with a smile. "));
				writeSpeech("meji","","Pretty good, actually; got a psych paper back with high marks. What about you? Any plans for the day?");
				writeFunction("writeEncounter('mejiAlt1Encounter')", "Tell him to meet you at your place in pantyhose");
				if(checkTrust('nagatoro') > 101){
					if (checkFlag("meji", "club") != true) {
						writeFunction("writeEncounter('mejiJoin')","Talk to him about the crossdressing club")
					}
					if(!checkFlag('meji','mejiCC!Gallery')) {
						//writeFunction("writeEncounter('mejiCC')","Talk to him about the crossdressing club")
					}
					else if(!checkFlag('meji','mejiCC2Gallery')) {
						writeSpeech("meji","","Oh, and if you want to do some more stuff at the club, just give Ash a heads-up first and I'll be right over.");
						//writeFunction("writeEncounter('mejiCC')","Take him to the crossdressing club again")
					}
					else {
						//writeFunction("writeEncounter('mejiCC')","Have sex in the magical girl outfit again")
					}
				}
				writeFunction("changeLocation(data.player.location)", "Never mind");
				break;
			}
			else if(!checkFlag('meji','mejiAlt2Gallery')){
				writeSpeech("player","","How's it going, mejiF?");
				writeSpeech("meji","","As good as ever.");
				writeText("mejiF "+(checkFlag('meji','willful') ? "grins up at you, moving a bit of his hair to the side." : "smiles a bit, shifting in place a bit."));
				writeFunction("writeEncounter('mejiAlt2Encounter')", "Tell him to come by in the pantyhose again");
				if(checkTrust('nagatoro') > 101){
					if (checkFlag("meji", "club") != true) {
						writeFunction("writeEncounter('mejiJoin')","Talk to him about the crossdressing club")
					}
					if(!checkFlag('meji','mejiCC1Gallery')) {
						//writeFunction("writeEncounter('mejiCC')","Talk to him about the crossdressing club")
					}
					else if(!checkFlag('meji','mejiCC2Gallery')) {
						writeSpeech("meji","","Oh, and if you want to do some more stuff at the club, just give Ash a heads-up first and I'll be right over.");
						//writeFunction("writeEncounter('mejiCC')","Take him to the crossdressing club again")
						}
					else {
						//writeFunction("writeEncounter('mejiCC')","Have sex in the magical girl outfit again")
					}
				}
				writeFunction("changeLocation(data.player.location)", "Tell him you're a bit busy today");
				break;
			}
			else{
				// writeSpeech("player","","Hey mejiF. How are you doing?");
				// writeSpeech("meji","","Pretty good... aside from upcoming exams anyway. I've got some studying scheduled up for later today so I don't bomb.");
				// writeSpeech("player","","Ah, makes sense. Good luck with your exams - you've got this.");
				// writeText("mejiF "+(checkFlag('meji','willful') ? "grins a bit " : "blushes slightly ")+"and nods before heading off to another class.");
				// if(checkFlag('succubus', 'newCorruption') && !checkFlag('meji','corrupt')){
				// 	writeText("Though, you could speak with him about the corruption...");
				// 	writeFunction("writeEncounter('mejiCorruptionPrompt')", "Talk to mejiF about corruption");
				// }
				// writeFunction("changeLocation(data.player.location)", "Go back");

				if(checkTrust('meji') < 120)
					setTrust('meji', 120);
				writeSpeech("player","","How's your morning going, mejiF?");
				writeText("He turns to face you, smiling widely as you approach.");
				writeSpeech("meji","","It's going good, chatted a bit with the principal about thing you mentioned before?");
				writeSpeech("player","","...Ah, being my assistant?");
				writeSpeech("meji","","Yup!");
				writeText(""+(checkFlag('meji','willful') ? "He nods, pausing a bit." : "He pauses slightly."));
				writeSpeech("meji","",""+(checkFlag('meji','willful') ? "That is, if you still think it's a good idea." : "Unless you think it wouldn't be a good idea, at least."));
				writeSpeech("player","","I actually already turned in the paperwork. Like I said, not too much is likely to change since we're already keeping your schedule fairly open... unless we were to really focus on training you for the job, anyway.");
				writeSpeech("meji","",""+(checkFlag('meji','willful') ? "That's fine, it's really the fact that I <i>am</i> your assistant that counts." : "That's no problem, being your assistant is the important part."));
				writeText("He pauses for a moment.");
				writeSpeech("meji","","...Though, when you say training, what do you mean? Like, paperwork-stuff?");
				writeSpeech("player","","More along the lines of my <i>other</i> activities. But that would be a pretty big change and probably take up a lot of time for both of us, so I'd suggest thinking it over instead of jumping into it now.");
				writeText("He thinks it over for a moment, before nodding.");
				writeSpeech("meji","",""+(checkFlag('meji','willful') ? "Alright, but it's not like I'd turn down a bit of <i>that</i> kind of training. Just bring it up when you're ready." : "Ah, alright. I'd be happy to receive some training whenever you have the free time."));
				writeText("Seems like he's pretty open to it. If you're interested in focusing exclusively on mejiF for quite a while, you can talk to him about it in the future...");
				if(checkFlag('succubus', 'newCorruption') && !checkFlag('meji','corrupt')){
					writeText("Though, you could speak with him now about the subject of corruption if you wanted...");
					writeFunction("writeEncounter('mejiCorruptionPrompt')", "Talk to mejiF about corruption");
				}
				if(checkTrust('nagatoro') > 101){
					if (checkFlag("meji", "club") != true) {
						writeFunction("writeEncounter('mejiJoin')","Talk to him about the crossdressing club")
					}
					if(!checkFlag('meji','mejiCC1allery')) {
						//writeFunction("writeEncounter('mejiCC')","Talk to him about the crossdressing club")
					}
					else if(!checkFlag('meji','mejiCC2Gallery')) {
						//writeFunction("writeEncounter('mejiCC')","Take him to the crossdressing club again")
						writeSpeech("meji","","Oh, and if you want to do some more stuff at the club, just give Ash a heads-up first and I'll be right over.");
						}
					else {
						//writeFunction("writeEncounter('mejiCC')","Have sex in the magical girl outfit again")
					}
				}
				writeFunction("changeLocation(data.player.location)", "Go back");
				break;
			}
		}
		case "meji12" : {
			writeSpeech("player","","Hey there mejiF, how's your morning going?");
			writeText("He turns to face you, smiling"+(checkFlag('meji','willful') ? " widely" : "")+" as you approach.");
			writeSpeech("meji","",""+(checkFlag('meji','willful') ? "It's going pretty good thus far, and definitely better now. What's up?" : "It's going well thus far. What's up?"));
			if(checkFlag('succubus', 'newCorruption') && !checkFlag('meji','corrupt')){
				writeText("You could probably bring up the corruption...");
				writeFunction("writeEncounter('mejiCorruptionPrompt')", "Talk to mejiF about corruption");
			}
			if(checkTrust('nagatoro') > 101){
				if (checkFlag("meji", "club") != true) {
					writeFunction("writeEncounter('mejiJoin')","Talk to him about the crossdressing club")
				}
				if(!checkFlag('meji','mejiCC1Gallery')) {
					//writeFunction("writeEncounter('mejiCC')","Talk to him about the crossdressing club")
				}
				else if(!checkFlag('meji','mejiCC2Gallery')) {
					//writeFunction("writeEncounter('mejiCC')","Take him to the crossdressing club again")
					writeSpeech("meji","","Oh, and if you want to do some more stuff at the club, just give Ash a heads-up first and I'll be right over.");
					}
				else {
					//writeFunction("writeEncounter('mejiCC')","Have sex in the magical girl outfit again")
				}
			}
			writeFunction("writeEncounter('mejiFinale1')", "Tell mejiF you want to train him as your assistant", "blue");
			writeFunction("changeLocation(data.player.location)", "Leave him to his own devices for now");
			break;
		}
		case "mejiFinale1" : {
			writeSpeech("player","","I was planning to invite you back to my office to dicuss your training, actually.");
			writeText("mejiF stands up a bit straighter at that, "+(checkFlag('meji','willful') ? "grinning widely." : "smiling with a nod.") );
			writeSpeech("meji","","Do we need to discuss it with principalF, or...?");
			writeSpeech("player","","Nah, it'll be fine. You said you already brought it up with her, and the paperwork is already done. All that's really left is the training itself.");
			writeText("It's obvious from the sparkle in mejiF's eyes that he knows what kind of 'training' you're referring to.");
			writeText("You'll be teaching him all kinds of things in time, of course, but for now...");
			writeText("Leaning in close, you speak softly into his ear.");
			writeSpeech("player","","If you're going to help me with my toys, you'll need to know <i>exactly</i> how it feels to be treated like one...");
			writeText("There's a clear shudder throughout his body as you say that, a gentle gasp coming from his lips before he licks them.");
			writeSpeech("meji","","Lead the way, *Sir~");
			writeText("Your hand moves to stop him, smiling a bit.");
			writeSpeech("player","","Ah, not at this exact second, <b>puppy.</b> I need to get things <i>prepared.</i>");
			writeText("He shudders at the trigger before nodding loyally.");
			writeSpeech("meji","","See you then~!");
			writeText("With that, you head home, fully intending on being as thorough as necessary when using him well...");
			writeText("...");
			writeEvent('mejiEnding');
			break;
			writeSpeech("meji","",""+(checkFlag('meji','willful') ? "" : ""));
			writeText(""+(checkFlag('meji','willful') ? "" : ""));
			checkFlag('meji','willful') ? "" : "" ;
		}
		case "mejiFinaleEnd" : {
			if(checkTrust('meji') < 200)
				setTrust('meji',200);
			writeText("The light tapping of a stack of papers against your assistant's desk pulls you back into the moment, mejiF letting out a sharp exhale as he collects the paperwork into a neat stack.");
			writeSpeech("meji","","Aaaand... That's the last of the papers on pinstripeF's contributions to the college.");
			writeText("Given the size of the office, he doesn't have to lean far to toss the sheaf (contained in a manilla folder now) to you.");
			writeSpeech("meji","","With the student council in your hand and the PTSA under your heel, I think that's pretty much the final nail. You're in control of the school now.");
			writeSpeech("meji","",checkFlag('meji','willful') ? "...Not gonna lie, this feels weirdly anti-climactic." : "...To be quite honest, I was expecting a more... climactic victory.");
			writeText("You let out a small laugh, though you can't really blame him. You were exceedingly (and at times, even boringly) careful at times to avoid getting caught. Plus...");
			writeSpeech("player","","Blame it on my assistant - he's simply too capable at his job.");
			writeText("mejiF's face flushes,"+(checkFlag('meji','willful') ? " though he seems to preen a bit under the praise." : " his hands fiddling happily in his lap."));
			writeSpeech("meji","","Thank you very much, *Sir~");
			writeText("With that, he leans back in his seat and looks to the ceiling. His fingers bounce lightly against his leg, making a soft sound.");
			writeSpeech("meji","","...If you don't mind me asking, now what? Like, is there a plan or anything?");
			writeSpeech("player","","Aside from enjoy myself to the fullest extent possible?");
			writeText("You shrug.");
			writeSpeech("player","","Not really. I don't exactly have plans for world domination or anything. Of course, if you're interested in that sort of thing...");
			writeText("He rolls his eyes playfully.");
			writeSpeech("meji","","I can still barely put any of your toys under, let alone induct someone new. I think domination is just a <i>bit</i> outside my current purview.");
			writeText("You can't help but let out a chuckle at his phrasing.");
			writeSpeech("player","","Then we keep working as counselors. And if you need a bit more practice with <i>domination,</i> it sounded like nagatoroF enjoyed the sybian-play.");
			writeText("mejiF laughs gently at that, shaking his head. Your eyes get caught by the way his hair bounces for a moment, before you notice it looks like he thought of something.");
			writeSpeech("meji","","...You know, it's actually been a while since we finished all of our work early. In fact, I don't think we've skipped work for some fun in some time either...");
			writeText("There's a small smile on mejiF's lips as he toys with the buttons on his shirt.");
			writeSpeech("meji","","Did you want to try going somewhere to eat? With all this extra time on our hands, I imagine we'll need the <i>energy~</i>");
			writeText("You feign a scandalized voice, raising an eyebrow at him.");
			writeSpeech("player","","Now, don't tell me that my little assistant is having <i>lewd thoughts</i> at his desk!");
			writeText("His laughter fills the room as he nods.");
			writeSpeech("meji","","I'm afraid so, *Sir. Perhaps I need a bit of disciplining later tonight?");
			writeSpeech("player","","It seems that way - oh whatever shall I do with such a wild assistant?");
			writeSpeech("meji","","I think you mean whatever shall you do <i><b>to</b></i> your assistant~");
			writeText("He winks at you, starting to stand. You do the same, stretching out your back after spending a bit too much time slouching over the papers.");
			writeSpeech("player","","But first, that meal. It'll be a good way to celebrate a firm, and subtle, takeover of the University, even if it was a bit anti-climactic.");
			writeSpeech("meji","","That just means we need to make our own climax, doesn't it *Sir?");
			writeSpeech("player","","Hah, too true. Let's get going then, shall we?");
			writeSpeech("meji","","Happily~");
			if(!checkFlag('meji','endingA'))
				addFlag('meji', 'endingA');
			if(!checkFlag('meji','complete'))
				addFlag('meji', 'complete');
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "mejiConcluded" : {
			writeSpeech("player","","So, how's my assistant doing today?");
			writeText("mejiF smiles up at you.");
			writeSpeech("meji","","I'm doing good, thanks for asking. What's up?");
			writeSpecial("You've completed all content for mejiF - thanks for playing, and good luck with your next capture target!");
			writeFunction("changeLocation(data.player.location)", "Never mind");
			break;
		}
		case "mejiAlt1Encounter" : {
			passTime();
			if(checkTrust('meji') < 105)
				setTrust('meji',105);
			writeSpeech("player","","Actually, I was hoping to speak with you about something.");
			writeText((checkFlag('meji','willful') ? "mejiF raises an eyebrow quizzically." : "mejiF tilts his head, waiting for you to continue."));
			writeText("Leaning in a bit, you say in a low tone,");
			writeSpeech("player","","How about we meet at my place in some pantyhose? Assuming you have a pair, of course.");
			writeText("His face flushes red for a second"+(checkFlag('meji','willful') ? " before he nods excitedly." : ", before giving you a small, lusty smile."));
			writeSpeech("meji","","I have just the pair. See you when I get there, playerF.");
			writeText("There's an excitement in his steps as he turns and leaves, just as you head to your place yourself.");
			writeText("...");
			writeText("You're not waiting long before you hear a rhythmic knocking against the door. When you move to open it, mejiF is there with a small smile. He's wearing pants, though when he steps into your apartment, you hear the sound of him undoing his belt.");
			writeText("mejiF"+(checkFlag('meji','willful') ? " smirks over his shoulder to you, his thumb lowering his pants just enough to give you a peak at the black material underneath" : "'s face is a bit red as he turns to face you, hooking his thumbs into his pants to lower them just enough to give you a peak at the bulge in the black material underneath")+".");
			writeSpeech("meji","","Did you have any specific plans, *Sir~?");
			writeText("Deciding to toy with him a bit, you flick him a condom with a smile and say,");
			writeFunction("writeEvent('mejiAlt1')", "\"Blow me.\"");
			break;
		}
		case "mejiAlt2Encounter" : {
			passTime();
			if(checkTrust('meji') < 110)
				setTrust('meji',110);
			writeSpeech("player","","Why don't you come back to my place again. Though this time...");
			writeText("You pause for a moment, watching mejiF's excitement build a little.");
			writeSpeech("player","","...make sure you're wearing a pair that you don't mind parting with.");
			writeText((checkFlag('meji','willful') ? "His face splits into a massive grin as he nods." : "His face turns red with excitement as he nods quickly, biting his lip for just a moment."));
			writeSpeech("meji","","I'll grab a pair and be right over.");
			writeText("...");
			writeText("Once again, you don't wait long before he arrives and you let him in, though this time he doesn't stop just at undoing his belt.");
			writeText("You watch as he undoes the buttons on his shirt as well, letting it all drop to the floor as he faces you, his arousal clear from the bulge in the pantyhose.");
			writeSpeech("meji","","Are you ready, *Sir~?");
			writeSpeech("player","","Actually, not quite.");
			writeText("Stepping over to the bed, you tap on your phone a bit to get it ready and set up. Putting it down with a clear view of the bed from behind you two, you wait a second for mejiF to realize it.");
			writeText("His face flushes bright red when he realizes the camera is set up, but given that he doesn't object (and that the twitching in his pantyhose is even more pronounced now), you're sure you won't hear a complaint.");
			writeSpeech("player","","Now...");
			writeFunction("writeEvent('mejiAlt2')", "\"Start by bending over.\"");
			break;
		}
		case "mejiCorruptionPrompt" : {
			writeSpeech("player","","Actually, there's something I wanted to talk to you about.");
			writeText("mejiF shifts in place, his head tilting slightly.");
			writeSpeech("meji","","What's up? Something serious?");
			writeSpeech("player","","More that... things tend to change. The clock ticks on, and people get older. If I told you I had a way to change that, what would you say?");
			writeText("There's a momentary pause, before he narrows his eyes a bit.");
			writeSpeech("meji","","I'd... probably say you're trying to sell me something? But that doesn't really seem like your thing, so...");
			writeText("He shrugs.");
			writeSpeech("meji","","I'd say go for it. I mean, hypnosis is weird, but you're able to do that, so while I don't really get what you're talking about, I say go for it.");
			writeFunction("writeEncounter('mejiCorruption')", "Corrupt mejiF");
			writeFunction("writeEncounter('cancel')", "Change your mind");
			break;
		}
		case "mejiCorruption" : {
			writeEvent('mejiCorruption');
			addFlag('meji','corrupt');
			passTime();
			writeFunction("writeEncounter('mejiCorruption2')", "Continue");
			break;
		}
		case "mejiCorruption2" : {
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
		case "mejiJoin": {
			writeSpeech("player","","Do you know about the Crossdressing Club?");
			writeText("mejiF pauses for a moment, before nodding.");
			writeSpeech("meji","","That thing nagatoroF tried to start? He got that past principalF? I said no when he asked me to start it with him before, since I'm a bit more private about it than he is. Wasn't sure if he'd go, like, spreading it around school.");
			writeSpeech("player","","Ah. Well, you don't have to worry about that - I'll tell him to keep it quiet. That is, if you want to check it out?");
			writeSpeech("meji","","Well, that was my only concern, so sure!");
			writeText("...");
			writeText("As you step into the club, nagatoroF turns to face you two, a smug smile quickly appearing on his face.");
			writeSpeech("nagatoro","","Oh? I always knew you had the body-type mejiF, but I'm surprised you finally decided to come on by~");
			writeSpeech("meji","","playerF said you'd keep things on the down-low, so I didn't see the harm. Not surprised he ended up interested in you, though.");
			writeSpeech("nagatoro","","Now that's definitely a compliment~ Did you come here with an outfit in mind, or...?");
			writeText("mejiF kinda shrugs.");
			writeSpeech("meji","","Honestly, aside from some panties, the girl's uniform, and a swimsuit, I'm not too experienced with this sort of thing. Surprise me, I guess?");
			writeText("A playful, almost naughty gleam sparks through nagatoroF's eyes at hearing that.");
			writeSpeech("nagatoro","","You heard that, right playerF?");
			writeSpeech("player","","Yup. Go ahead - surprise him.");
			writeText("mejiF pauses, before letting out a slow sigh.");
			writeSpeech("meji","","Well, at least I know it'll be cute.");
			writeText("Barely a moment passes before nagatoroF whisks mejiF into the changing room, leaving you to wait...");
			writeText("...");
			writeText("You don't actually end up waiting too long before nagatoroF leaves the changing room, winks to you wordlessly, then leaves the clubroom and locks the door behind him.");
			writeText("When mejiF comes out too, you can see why.");
			writeBig("images/meji/CC-1.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","...So, uh... Yeah. I'm not saying I <i>regret</i> my phrasing, but... Well.");
			writeText("He looks over himself and you (though mainly his outfit), his hands fiddling behind his back as he shifts in place.");
			writeSpeech("player","","A magical-girl outfit, huh? How does it feel?");
			writeSpeech("meji","","Somehow, this actually feels <i>more</i> revealing than being naked...");
			writeSpeech("player","","You don't see me complaining.");
			writeText("mejiF cracks a small smile, standing up a bit straighter.");
			writeSpeech("meji","","Y-Yeah. It doesn't look bad, it just feels... different, I guess. It's definitely not something I'd wear and go for a walk.");
			writeSpeech("player","","That just means I'm the only one who gets to enjoy the view.");
			writeText("His smile widens as his face flushes a bit... and his skirt shifts, his cock twitching from the compliment.");
			writeSpeech("meji","","If you're that set on turning me on, why don't we go ahead and get started?");
			writeText("He brings his glove up to his mouth, gently rubbing along his lips, which actually seem to have a nearly-invisible layer of gloss on them.");
			writeFunction("writeEncounter('mejiCC1')", "Have him get down and blow you");
			addFlag("meji", "club");
			break;
		}
		case "mejiCC1" : {
			if (checkFlag("meji", "CC1Scene") == true) {
				writeText("He quickly kneels down in front of you on the bed, leaning forward to bring his face near your cock.");
				writeBig("images/meji/CC-2.jpg","Art by Nagi Ichi");
				writeSpeech("meji","","God, I just love this angle~...");
				writeText("Extending his tongue, he slowly, teasingly drags the tip of it from the base of your cock all the way to the top, stopping to carefully trace the rim of your head for a moment before smiling.");
				writeSpeech("meji","","Here we go~");
				writeText("Bobbing his head down, he takes half your cock into his mouth immediately, his tongue toying at the back of it as his first hand moves to your shaft, and the other to your balls.");
				writeBig("images/meji/CC-3.jpg","Art by Nagi Ichi");
				writeText("He gently massages at your sack while firmly stroking the bottom half of your cock, his spit already getting your shaft slick as it slides down from his mouth.");
				writeText("Each swift bounce downwards gets just a bit deeper, until just over a minute later, he's nearly deepthroating you with each drop.");
				writeText("The loud, wet, sloppy sounds of him basically face-fucking himself with your cock fill the room, his spit dribbling down now to your balls as he still dutifully toys with them.");
				writeText("It's not long at all, though, before his ministrations start bringing you to the edge.");
				writeSpeech("player","","mejiF...!");
				writeText("He just lets out a low, pleased hum of acknowledgement, not slowing down for a moment as he keeps throating you blissfully.");
				writeText("Your hands grip the sheets tightly, and you buck your hips slightly upwards as you grunt sharply and cum.");
				writeBig("images/meji/CC-4.jpg","Art by Nagi Ichi");
				writeText("Raising his head, mejiF smoothly swallows the cum in his mouth before his gloved fingers pick up the rest of the cum.");
				writeSpeech("meji","","Glad to see it doesn't stain...");
				writeText("He laps the rest of it up, watching your erection as he does with a smile.");
				writeSpeech("meji","","Haah~... Even after a BJ, you're still nice and hard~ You feeling up for round two, *Sir~?");
				writeText("He rises to his feet, turning around with a small smile before flipping his skirt for a second, and moving to line you up.");
				writeFunction("writeEncounter('mejiCC2')", "Let him climb up and line your cock up");
			}
			else {
				writeEvent(name);
				addFlag("meji", "club2");
				addFlag("meji", "CC1Scene");
			}
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish here");
			break;
		}
		case "mejiCC2" : {
			if (checkFlag("meji", "CC2Scene") == true) {
				writeText("He rises to his feet, turning around with a small smile before flipping his skirt for a second, and moving to line you up.");
				writeText("A few seconds later, and...");
				writeSpeech("meji","","A-Ahh~!");
				writeBig("images/meji/CC-5.jpg","Art by Nagi Ichi");
				writeText("He quickly lowers himself down, moaning loudly as he slides your cock further into him until you bottom out.");
				writeSpeech("meji","","F-Fuck~...");
				writeText("He rolls his hips around, focusing on the sensation of you stretching him out as he shudders around you.");
				writeSpeech("player","","There we go...");
				writeText("You start thrusting your hips upwards into him as he starts to slowly bounce up and down, his hole gripping you tightly as his moans get higher and sweeter.");
				writeText("mejiF tries to support himself with his hands as you thrust and bounces, pressed into the fabric of the bed as his cock bounces around lewdly.");
				writeSpeech("meji","","Y-Yes, just like that~...! Fuck me harder, *Master~!");
				writeText("Grasping his wrists in your hands, you opt to do exactly that, picking up speed and thrusting into him...");
				writeText("You're not sure how many minutes pass like that, mejiF fucked into a moaning, begging mess as you start approaching the edge.");
				writeText("Given the sharp change in his breathing, you're sure mejiF picked up on that little fact too.");
				writeSpeech("meji","","F-Fuck please...~! Fill me up, cum inside and <i>make me cum too~!</i>");
				writeText("Slamming your hips up and into him, you bark out a low order:");
				writeSpeech("player","","Cum for me.");
				writeText("His entire body shakes as you thrust into him harshly again, mejiF sharply gasping as you start to spurt inside him, and as his cock starts to shoot off too.");
				writeBig("images/meji/CC-6.jpg","Art by Nagi Ichi");
				writeText("More than a bit of cum splatters across his skirt and stockings again as he shakes atop you, his ass milking every drop from you.");
				writeText("After a few more moments like that, he relaxes back against you for a moment, catching his breath... before slowly moving and taking your cock out of his hole.");
				writeSpeech("meji","","Haah~... Just as good as always, *Sir~");
			}
			else {
				writeEvent(name);
				addFlag("meji", "CC2Scene");
			}
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mejiHotelGood": {
			writeHTML(`
				define m = sp meji;
				t You push open the door to mejiF's room, stepping in to the sight of...
				im hotelGood.jpg
				m Oh! Welcome, *Master!
				t mejiF smiles widely, not seeming surprised as you step in.
				player Were you expecting me?
				m No, but I <i>was</i> hoping a little that you'd come in while I was trying this on, since it's a lot like that one you got me before. What d'you think?
				t He gives a small twirl around, showing off his ass in the new leotard with a smirk.
				player I think I'm tempted to pin you down and slide it to the side right now.
				m Hah~
				t His face flushes as he folds his hands behind his back.
				m Unfortunate, then, that succubusF is looking for you... though I might just have to try and monopolize you afterwards if I can~
				player With that outfit on? You can be sure you won't be waiting long.
				t mejiF lets out a melodic laugh, nodding.
				m See you in a bit then, *Master. I'll check out the other outfits in the meantime, but I'll be sure to keep this one out~
			`);
			writeFunction("changeLocation(data.player.location)", "Continue Wandering");
			break;
		}
		case "mejiHotelBad": {
			writeHTML(`
				define m = sp meji;
				define black = sp Black Haired Succubus; im images/demon/dark.jpg;
				black Ah, the one with a ponytail, yes? He didn't seem to have any unique abilities, but his potential was rather impressive for one so inexperienced. He seemed quite confused at first, and rather adamant that he only intended to have sex with you, but telling him that this was your intention softened that aspect of him quite quickly. Now...
				im hotelBad1.jpg
				m Oh f-fuck, holy <i><b>shit</b></i> you're still so hard...!
				black ...Now, he's doing quite well in working with all sorts of people, even pushing them to cum more than would otherwise be possible. Would you believe his current partner's already fired his eighth load?
				im hotelBad2.jpg
				m That's it, thrust deeper~
				black And of course, he's always quite voracious - something I'm noting is a pattern amongst your partners, hm?
				im hotelBad3.jpg
				m Ohhh~! So warm~! Keep filling me up, please~!
				black He's fitting in <i>quite</i> well indeed.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "mejiHotelGoodEpilogue" : {
			console.log("What the hecc");
			writeHTML(`
				define m = sp meji;
				m O-Oh fuck, no faaaair~!
				im hotelEpilogue1.jpg
				t Another day, another half-dozen loads pumped into mejiF's ass. He'd always been quick to help out newcomers to the harem, appointing himself as your unofficial assistant and running about to help where he can. Though as is pretty obvious, his favorite way to "help" remains the same...
				t Nowadays, you're not even sure if he gets off more from the fucking, or from the praise you whisper in his ear when you cum.
				im hotelEpilogue2.jpg
				t Either way though, it's clear that he's more than happy to be a part of the harem... And you're happy to have him here too.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		default: {
			writePhoneSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [ //Lists the events of the character for unlocking and replaying in the gallery.
{index: "meji1", name: "Beginner's Training"},
{index: "meji2", name: "Feeling Numb"},
{index: "meji3", name: "Backing Up Leotard"},
{index: "meji4", name: "Finally Finishing"},
{index: "meji5", name: "Lingerie Blowjob"},
{index: "meji6", name: "Lingerie Blowjob with Intro"},
{index: "meji7", name: "Lingerie Fuck"},
{index: "meji8", name: "Public Walk and Fuck"},
{index: "meji9", name: "Women's Shorts Fuck"},
{index: "mejiEnding", name: "Training the Assistant, Part 1"},
{index: "mejiEnding2", name: "Training the Assistant, Part 2"},
{index: "mejiAlt1", name: "Pantyhose Blowjob"},
{index: "mejiAlt2", name: "Taping the Pantyhose Fuck"},
{index: "mejiCorruption", name: "Corrupted Rider"},
{index: "mejiCC1", name: "Magical Girl (Male) Blowjob"},
{index: "mejiCC2", name: "Magical Girl (Male) Reverse Cowgirl"},
];

function writeEvent(name) { //Plays the actual event.
	wrapper.scrollTop = 0;
	switch (name) {
		case "meji1" : {
			if(!checkFlag('meji','meji1Gallery'))
				addFlag('meji','meji1Gallery');
			document.getElementById('output').innerHTML = '';
			writeText("You get "+fName('meji')+" to stand up and bend over, which he does pretty easily, his eyes still shut. Going by the way he's tenting his panties, talking about his favorite ways to get off turned him on pretty good, even under hypnosis.");
			writeText("Given his various fantasies, you look around for something to bind his wrists with, but you just find some easily-torn rubber tubing... which, all things considered, is probably fine.");
			writeText("You tie his hands behind his back and slide his panties to the side.");
			writeText("You have lube in one of your drawers, of course. You didn't exactly come to this university unprepared.");
			writeText("Smearing it across a finger, you continue speaking.");
			writeSpeech("player","","You're still rather relaxed, aren't you, "+fName('meji')+"?");
			writeSpeech("meji","","Nn...");
			writeText("As soon as you bring your lubed finger to his ass, his breathing picks up, and you slide your other hand onto his thigh to stabilize him.");
			writeText("You can feel him squirming against your hands, not-quite-straining against the fragile makeshift-rope.");
			writeSpeech("player","","Hm... This might shock him out of it, but...");
			writeText("You carefully start pushing your finger into him, and you notice his eyes starting to open.");
			writeBig("images/meji/3-1.jpg", "Art by Nagi Ichi");
			if (data.player.gender == "man") {
				writeSpeech("meji","","Haa... Ah...? S-"+data.player.honorific+", what is...");
			}
			else {
				writeSpeech("meji","","Haa... Ah...? M-"+data.player.honorific+", what is...");
			}
			writeText("Shame starts to flood his face, but you push your finger a bit deeper and...");
			writeSpeech("meji","","<i>N-Nn~...!</i>");
			writeText("The rapid clenching of his ass almost feels like it's sucking on you, "+fName('meji')+ " hanging his head a bit.");
			writeSpeech("player","","You know... I never said you had to stop.");
			writeSpeech("meji","","W-what?");
			writeText("You plunge your finger further, finding your target as you press into his prostate. You can barely hear yourself over his moans.");
			writeSpeech("player","","You were talking about how you play with yourself at home. Remember?");
			writeText("His eyes refocus a bit and you can see his cock twitch in his panties.");
			writeSpeech("meji","","...like this...");
			writeSpeech("player","","Hm. I couldn't hear anything. Oh well, it was fun.");
			writeText("You start sliding your hand out, but panic flies across his face.");
			writeSpeech("meji","","W-Wait! I...");
			writeText("He takes a slow, deep breath.");
			writeSpeech("meji","","I play with m-my ass... I finger it, just like this, while jerking off...!");
			writeText("Nodding along, you pull his panties even further to the side, his cock flopping out weakly.");
			writeSpeech("player","","You mean... like this?");
			writeBig("images/meji/3-2.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","<i>F-Fuck~!</i> J-Just like that!");
			writeText("You start carefully pressuring his prostate as you jerk him off, moans and whimpers now quietly spilling out of his mouth.");
			writeSpeech("player","","And what do you think about when you're fingering yourself, <i>slut?</i>");
			writeText("He goes quiet for just a second's hesitation, until you just barely slow down-");
			writeSpeech("meji","","<font size='-1'>...Getting fucked...</font> Having someone grab me from behind, and <i>bend me over</i>, and just <i><b><font size='+2'>fucking my ass until I'm a jizz-covered mess!</size></b></i>");
			writeSpeech("player","","Wow.");
			writeText("You speed up even more.");
			writeSpeech("player","","You know, I thought you might've been a bit of a slut, but...");
			writeText("You can feel him start twitching in your hand.");
			writeSpeech("player","","You're actually just a subby masochist <i>bitch</i>, aren't you?");
			writeText("He squeezes tighter around you, just about to cum when you take your hand off of his dick.");
			writeSpeech("meji","","B-But I was...!");
			writeSpeech("player","","You were about to cum like a <i>man</i>, "+fName('meji')+". Not much of one, honestly, but the point still stands. If you want to cum, you'd better listen.");
			writeText("Leaning forward, you push your finger in as far as you can, speaking quietly.");
			writeText("He's still partially in trance, so this should work...");
			writeSpeech("player","","The more you cum from that cock of yours, the less you'll be able to feel it.");
			writeText("You start slowly jerking him off again, twisting your finger inside of him.");
			writeSpeech("player","","If you were to let me milk you right now, let you spill your cockmilk all over the floor... I'm not sure you could cum from your dick ever again. Is that really what you want?");
			writeText("He starts squirming against you even more, seemingly resisting... but not even partially straining the fragile tubing on his wrists.");
			writeSpeech("player","","Do you really want to spurt out the last of that masculinity of yours, and become a <i>slutty little <b>bitch</b></i> that can only get off on anal?");
			writeSpeech("meji","","...care...");
			writeText("You start going even faster, feeling his cock start to throb and his hips start to buck.");
			writeSpeech("player","","You'd better hurry up and stop me... Otherwise, you'll-");
			writeText("Suddenly, he slams his ass against your hand, his breathing rough and labored.");
			writeSpeech("meji","","I don't care <i>I don't care <b>I don't care!</b></i> Finger me, fuck me, just <i>please let me cum!</b>");
			writeSpeech("player","","...You really are a desperate little <i>whore.</i>");
			writeText("Your words are the last straw as he starts tightening hard, pulling your finger against his anal-slut-button with every squeeze.");
			writeBig("images/meji/3-3.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","<i><b>CUMMING~!</b></i>");
			writeText("His cum spills all over the floor, shot after shot milked out of him as his whole body squirms in every direction.");
			writeText("During his shaking, you can hear the tubing snap as he grabs out for the bed, his moans barely muffled by the sheets.");
			writeText("You're honestly impressed by the amount that spatters everywhere before he finally collapses against the bed.");
			writeText("He barely looks conscious at this point, and you don't imagine he'll be recovering from <i>that</i> very quickly.");
			writeText("It gives you time to clean up, at least...");
			writeText("...");
			writeText("After he recovers a bit, you pull him out of trance - he's still a bit out of it, of course, but when you tell him you'll be calling him back in sometime soon, you see him shudder in pleasure.");
			writeSpeech("meji","","T-Thank you, "+data.player.honorific+"~...!");
			writeText("As he leaves, you can't help but wonder if he'll be as thankful when he's back to normal and can't feel his hand when he touches his dick...");
			if (data.player.location != 'gallery') {
				data.player.location = 'playerOffice';
				writeFunction("changeLocation(data.player.location)", "Finish up");
				raiseTrust('meji', 1);
				passTime();
			}
			break;
		}
		case "meji2" : {
			if(!checkFlag('meji','meji2Gallery'))
				addFlag('meji','meji2Gallery');
			document.getElementById('output').innerHTML = '';
			writeText("You and "+fName('meji')+" arrive in your office pretty quickly - it seems like he's a bit antsy.");
			writeSpeech("meji","","Did you figure how to fix it?");
			writeSpeech("player","","Not exactly, no. I did figure <i>something</i> out, though.");
			writeText("Well, two things actually. The first was what you actually did want to know.");
			writeText("The other is that the hypnosis for his dick wouldn't last this long unless, on some level, he really did want it numb.");
			writeText("Neat.");
			writeSpeech("player","","I can't help you with your dick. What I can do, though, is help you feel a little less <i>pent-up.</i>");
			writeSpeech("meji","","...But wait, how are you-");
			writeSpeech("player","","Anal.");
			writeText("His breathing picks up <i>fast.</i>");
			writeSpeech("meji","","O-Oh. I, um... My uniform is in my bag. Could you turn around...?");
			writeText("...You just told him you were going to plow him, and he's embarrassed about being seen getting changed?");
			writeText("Fuck it, might as well.");
			writeSpeech("meji","","Thanks...");
			writeText("A few seconds later, he's in-uniform, sitting on the bed while your pendant sways.");
			writeText("It takes a little bit longer for him to go under than last time but, when he goes into trance, he goes deep.");
			writeText("You use a bit more of that plastic tubing to bind his arms behind his back, slowly pushing him down onto the bed.");
			writeText("As you do, sliding his panties to the side, you watch as his throbbing cock twitches around and, more importantly, his ass seems to tighten around nothing.");
			writeText("You get the lube, spreading it across your fingers carefully as you start teasing his hole.");
			writeSpeech("player","","Alright... "+fName('meji')+", are you ready?");
			writeSpeech("meji","","Nn...!");
			writeText("He starts grinding his ass against your hand, half-lidded eyes trying their best to focus on you.");
			writeSpeech("player","","Good enough.");
			writeText("You start carefully lubing his insides with your fingers, carefully stretching him out.");
			writeText("It doesn't take long. His ass eagerly takes in one finger, then another. You still take your time applying the lube, but the way he's squirming...");
			writeSpeech("player","","Just how often do you play with this ass of yours?");
			writeText("He moans gently, his voice quiet.");
			writeSpeech("meji","","E-Every night... I have a dildo...");
			writeSpeech("player","","Oh...? And how do you usually use it?");
			writeText("He opens his mouth to speak, but a strangled mewl is all that comes out as you pull out your fingers.");
			writeSpeech("meji","","I t-tease around my hole...");
			writeText("You undo your belt, the air feeling almost cold against your length before you press against him.");
			writeSpeech("meji","","After I'm wet enough, I...");
			writeText("He pauses, his eyes opening a bit more, but you get the gist of what he does next.");
			writeSpeech("player","","You<i> thrust it in,</i> right?");
			writeBig("images/meji/4-1.jpg","Art by Nagi Ichi");
			writeText("You can immediately see his cock start to rhythmically bob up and down as he squeezes around you.");
			writeText("Days of being pent-up has his cock already streaming almost cum-colored pre.");
			writeSpeech("meji","","F-Fuck...~!");
			writeText("You saw in slowly and carefully, watching his eyes flutter each time your head scrapes against his insides with each thrust.");
			writeText("But this isn't just about feeling a little nice...");
			writeText("You lean forward, nearly pinning his knees behind his head as you start to quietly whisper into his ear...");
			writeSpeech("player","","Is this what you wanted, "+fName('meji')+"? To be a playerG's private little <i>butt-slut?</i>");
			writeSpeech("meji","","Fuck, yes...!");
			writeSpeech("player","","But that sort of things has <i>costs,</i> doesn't it, "+fName('meji')+"?");
			writeSpeech("meji","","<i>Y-yes!</i>");
			writeText("You start speeding up, breathing onto his ear now as he writhes in pleasure beneath you.");
			writeSpeech("player","","Each thrust is making your ass more and more sensitive, isn't it?");
			writeSpeech("meji","","Yes!");
			writeText("Every 'yes' has him breathing deeper, has him squirming more and more.");
			writeSpeech("player","","Yes <i>what?</i>");
			writeSpeech("meji","","<i>Y-Yes, "+data.player.honorific+"~!</i>");
			writeText("You grin, picking up speed.");
			writeBig("images/meji/4-2.jpg","Art by Nagi Ichi");
			writeSpeech("player","","You know what you are, don't you?");
			writeText("You hear him swallow hard, before smiling.");
			writeSpeech("meji","","I-I'm a subby masochist <i>bitch</i>...! I'm a horny little <i>whore~!</i>");
			writeSpeech("player","","Very good. And do you know how honest whores get rewarded?");
			writeText("His ass grips onto you like a vice, <i>almost</i> slowing you down as you start fucking him harder.");
			writeText("He keeps trying to answer, but every push and pull of your cock slams against his prostate, only moans and mewls coming out of his mouth.");
			writeSpeech("player","","You really are eager, aren't you? In that case, let's finish...");
			writeText("You slam your hips into his quickly, pushing yourself to the edge and beyond as you feel your cock start to twitch.");
			writeBig("images/meji/4-3.jpg","Art by Nagi Ichi");
			writeText("From the first spurt, he starts spasming around you, your hands being the only thing stopping his legs from wrapping around his back.");
			writeText("His cock rapidly bounces up and down, the same precum still oozing down as he twitches underneath you.");
			writeText("As you pump the last of your jizz inside of him, your dick making a lewd <b>pop</b> as you pull out, he goes limp.");
			writeText("Just like last time, he's barely able to move but, this time, you're taking advantage of that.");
			writeSpeech("player","","You're going to remember <i>everything</i> with perfect clarity this time.");
			writeText("You swing your hand down, slapping his ass as his entire body tightens, a quiet moan escaping his lips.");
			writeSpeech("player","","And each time we fuck, it'll get <i>better</i> and <i>better</i> until eventually...");
			writeSpeech("player","","You can start spurting without ever even <i>needing</i> to touch that dick of yours. <i>Is that clear?</i>");
			writeSpeech("meji","","<i>Y-Yes...<b> "+data.player.honorific+"~...!</b></i>");
			writeText("You give him another, gentler slap on the ass.");
			writeSpeech("player","","Good girl...");
			writeText("...");
			writeText("After a while, "+fName('meji')+" recovers enough to clean himself up, changing back into his other uniform before leaving.");
			writeText("Not without a quick thanks, of course. He's never felt better, apparently.");
			writeText("That's your good deed for the day. Now, to deal with the <i>rest</i> of the day...");
			if (data.player.location != 'gallery') {
				data.player.location = 'playerOffice';
				writeFunction("changeLocation(data.player.location)", "Finish up");
				raiseTrust('meji', 1);
				passTime();
			}
			break;
		}
		case "meji3" : {
			if(!checkFlag('meji','meji3Gallery'))
				addFlag('meji','meji3Gallery');
			document.getElementById('output').innerHTML = '';
			writeText("A few minutes after you're sure everyone's left the club room (and double-checking that no one seems to be coming back), you gently try the door.");
			writeText("Locked. Makes sense, if he's already in there. You gently knock.");
			writeText("There's a moment of silence, before...");
			writeSpeech("meji","","Is that you?");
			writeSpeech("player","","...No.");
			writeText("The lock clicks as he opens the door and you step in.");
			writeBig("images/meji/5-1.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","I double-checked the room for anything anyone forgot, and there doesn't seem to be anything.");
			writeSpeech("player","","That worried about someone seeing you like this?");
			writeText("He tries to scowl, but the skin-tight leotard does nothing to hide the tell-tale twitch of arousal.");
			writeSpeech("meji","","...S-So, are you going to put me under? It's a little hard to relax in here.");
			writeSpeech("player","","Not this time. Consider it part of your... training. How's the dick, by the way?");
			writeSpeech("meji","","<font size='-1'>...still numb...</font>");
			writeSpeech("player","","Then in that case, let's get right to it.");
			writeText("He stands a bit straighter, stiffening a bit (in both meanings of the word).");
			writeSpeech("meji","","H-How do you want me?");
			writeText("You look around for a moment, before pulling out the lube and pointing to the table.");
			writeSpeech("player","","That's a little bit below waist-level, so why don't you climb on it?");
			writeText("To his credit, he only pauses in confusion for a second before moving.");
			writeSpeech("player","","Good girl.");
			writeText("You quickly move towards him, preparing to start lubing up his ass as he leans forward a bit...");
			writeSpeech("player","","Are you... already dripping?");
			writeText("You can't see his face but, given how easily he blushes...");
			writeSpeech("meji","","I, um... I didn't want to get caught, so I thought if I got myself ready earlier-");
			writeText("A loud slap across his ass turns his words into a throaty moan.");
			writeSpeech("player","","You really <i>are</i> a good little bitch.");
			writeSpeech("meji","","...Thank you, "+data.player.honorific+"~.");
			writeText("At that, though, you quickly strip and grab something from your bag.");
			writeText("There's no way in Hell that the tubing would work for his legs, but it's obvious how much he enjoys being bound, so...");
			writeText("He tenses at the sound of the tape being pulled, but he holds still as you wrap it around his smoothly shaved legs.");
			writeSpeech("player","","There. That should keep you from bucking <i>too</i> hard.");
			writeText("Without further ado, you line your head up with his slick hole, pressing gently as it starts to spread...");
			writeText("And you stop.");
			writeText(fName('meji')+" doesn't say anything for a few seconds, waiting patiently, until you nod and say,");
			writeSpeech("player","","Get fucking, whore.");
			writeText("He <i>immediately</i> backs up against you, biting his lower lip to avoid from moaning too loudly as your head pops in and starts gliding inside of his ass.");
			writeBig("images/meji/5-2.jpg","Art by Nagi Ichi");
			writeText("He takes a moment to collect himself, before getting to work.");
			writeText("Since he isn't in trance this time, his muscle control is phenomenal, squeezing gently as he pulls you in deeper, then relaxing as he bobs forward.");
			writeText("Even partially bound, he moves easily to take you deeper and deeper with each thrust, but unfortunately for you both, he can't exactly go <i>fast</i> in this position.");
			writeText("Pretty soon, his moans go from pleasure to frustration, trying to back himself up harder against you. He grits his teeth, using his arms to push and pull himself.");
			writeText("Given such an admirable attempt, you can't help yourself.");
			writeSpeech("player","","Don't fall.");
			writeText("You tighten your hand around his wasit and <i>thrust.</i>");
			writeBig("images/meji/5-3.jpg", "Art by Nagi Ichi");
			writeText("His ass slams back against yours as he tries to keep his balance, the table almost rocking forward as you viciously fuck his asshole.");
			writeText("The sound of his ass against your hips echoes in the room, but "+fName('meji')+" doesn't even seem to notice as starts twisting his hips each time you bottom-out.");
			writeText("The other hypnotic suggestions are clearly still holding strong, particularly the one that makes him more sensitive with each thrust, as he's soon panting raggedly as he milks your cock with his ass.");
			writeSpeech("player","","Fuck... You're a high-quality piece of <i>bitchmeat</i>, you know that?");
			writeText("He squeezes around you.");
			writeSpeech("meji","","A-Are you close...?");
			writeSpeech("player","","That depends.");
			writeText("Your hand slides a bit up his waist as you step in, <i>slamming</i> your cock into him.");
			writeSpeech("player","","How much do you want it?");
			writeText("He leans his head forward, pressing his hands firmly against the table.");
			writeSpeech("meji","","More than anything else...! Please, fill my bitch-hole with your <i>hot fucking cum~!</i>");
			writeText("You raise your free hand, slapping his ass once, then twice. Each time you do, he squeezes just a bit tighter, moaning just a bit louder.");
			writeText("You only last a few more seconds of thrusting, before you feel it start to spurt.");
			writeBig("images/meji/5-4.jpg","Art by Nagi Ichi");
			writeText("More of it spills out than you intended, but the rapid tensing of "+fName('meji')+"'s ass keeps a lot of it in place.");
			writeText("He manages to stay upright this time, even as you slide the leotard over his spasming asshole.");
			writeSpeech("meji","","Th-Thank you... "+data.player.honorific+"...");
			writeText("You give him one last swat to the ass, relishing the hitched breathing and spasming as he goes limp.");
			writeText("Just before he does, though, you spot a single bead of cum beneath him, separate from the rest.");
			writeText("He didn't orgasm, but he got close. One more time, and he might actually cum from just anal...");
			writeText("As much as the thought gets you ready for round two, your eyes do go to the clock.");
			writeSpeech("player","","Damn...");
			writeText("It's getting late, and you know for a fact that the janitor isn't going to be happy if you're caught here.");
			writeText("You help "+fName('meji')+" get cleaned up, the leotard going underneath his regular clothes as he finishes up.");
			writeText("Just before you leave, though, he moves close to you and goes up on his toes and whispers in your ear,");
			writeSpeech("meji","","I can feel your cum inside the leotard, y'know~...");
			writeText("He does a little hop, and you feel his lips just barely brush against your ear.");
			writeText("With that, he darts out of the room, leaving you with a bit of time left before dark and a raging hard-on.");
			if (data.player.location != 'gallery') {
				data.player.location = 'gym';
				writeFunction("changeLocation(data.player.location)", "Get going");
				raiseTrust('meji', 1);
				passTime();
			}
			break;
		}
		case "meji4" : {
			if(!checkFlag('meji','meji4Gallery'))
				addFlag('meji','meji4Gallery');
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","You seem like you had fun last time.");
			writeText(fName('meji')+" stands up a bit straighter, nodding.");
			writeSpeech("meji","","A <i>lot</i> of fun, "+data.player.honorific+". I, um... actually would've liked to keep going, but...");
			writeSpeech("player","","You didn't want to get seen?");
			writeText("He slowly nods, shyly looking to the side.");
			writeSpeech("meji","","Yeah. I didn't want you to get caught and lose your job, or... worse.");
			writeText("...Fuck it, you are <i>definitely</i> getting him off.");
			writeSpeech("player","","Your place. Bring the leotard.");
			writeText("He pauses in surprise.");
			writeSpeech("meji","","I'm... actually wearing it now. I thought you might like it if-");
			writeText("You step closer to him, his voice squeaking as you do.");
			writeSpeech("player","","<i>Now.</i>");
			writeText("He stiffens.");
			writeSpeech("meji","","Yes, "+data.player.honorific+"~");
			writeText("...");
			writeText("The moment his front door is shut, he starts pulling off his male uniform, revealing the leotard beneath.");
			writeText("You start stripping as well, barely taking in the general lack of decoration. The moment your pants are off, "+fName('meji')+" leads you by the hand to a large living-room.");
			writeText("As he turns to face you, smiling wide, you can see the twitching outline of his cock as his eyes drift down to yours.");
			writeSpeech("meji","","How do you want me, "+data.player.honorific+"~?");
			writeText("You think for a moment...");
			writeSpeech("player","","This time... You choose.");
			writeText("He pauses for a moment.");
			writeSpeech("meji","","R-Really?");
			writeText("You just nod, his entire face lighting up.");
			writeSpeech("meji","","Well, then... Can you lie down, please? Last time, I couldn't do too much until you started thrusting, so I want to... ride you.");
			writeText("You go along with it, the carpeting feeling nice on your back, and fortunately not something you'll need to clean the jizz off of later.");
			writeText("He quickly straddles you, resting his plump ass on your length for a second before taking deep breaths.");
			writeText("Just the sensation of the thin strip of leotard on your cock, wrapped on both sides by his ass...");
			writeSpeech("player","","Fuck...!");
			writeText("Hearing that, "+fName('meji')+" starts rotating and grinding his hips against you with a smile, relishing in the feeling of your half-hard cock growing to full mast.");
			writeText("He slowly lifts himself up, sliding the leotard to the side to expose his pink, well-fucked hole.");
			writeSpeech("meji","","A-Are you ready, "+data.player.honorific+"?");
			writeSpeech("player","",fName('meji')+", I was ready to bend you over in an alley and <i>fuck you sense-</i>");
			writeText("He immediately drops his full body weight down, swallowing your cock balls-deep in one smooth motion and shutting you up completely.");
			writeBig("images/meji/6-1.jpg", "Art by Nagi Ichi");
			writeText("He wastes absolutely no time in bouncing up and down, his eyes rolling up in ecstasy.");
			writeSpeech("meji","","God... I fucking <i>love</i> this~!");
			writeText("His hands press down harder on your thighs, bouncing quickly as your head rubs all over his insides.");
			writeSpeech("meji","","When I got home, I was still so <i><b>fucking turned on</b></i>, I couldn't think...! I tried fucking myself with my dildo, but it wasn't the same~!");
			writeText("It's been less than thirty seconds, but the bouncing, the squeezing, the twisting all together has you already fighting to hold yourself back.");
			writeSpeech("meji","","It's your fault...! Whenever you're inside of me, I feel so <i>full</i>! I spent an hour <i><b>slamming</b></i> a dildo into my slutty little bitch-hole, stirring up your jizz while it was still warm, and <i><b>nothing.</b></i>");
			writeText("His entire body pitches forward, his hands resting on your chest now as you feel yourself reaching your limit.");
			writeSpeech("meji","","Whenever you're inside of me, it just feels better and better. I don't even <i>care</i> about my useless cock, because it could <i>never</i> feel as good as yours.");
			writeText("He starts slowing down a bit, running his hands up your body.");
			writeSpeech("meji","","Do you have any idea how empty I feel every time you come near me? Do you have any idea how many times you've thrust into me, how sensitive my ass even <i>is</i> now?");
			writeText("He slows, almost to a stop, and brings his hand to his stomach, ignoring his cock completely.");
			writeSpeech("meji","","Fucking me senseless one day, and then turning around and leaving me to fill myself up with some plastic toy... And then you let <i>me</i> choose how today goes?");
			writeText("Without even moving, you can feel his ass start tightening rhythmically around you, rapidly milking your length as you see the muscles in his abs rapidly tighten along with it.");
			writeSpeech("meji","","This is your fault, <i><b>"+data.player.honorific+",</b></i>, and the only way to make up for it is to <i>draining your balls inside of me <b>down to the last drop.</b></i>");
			writeText("You open your mouth to reply, but he quickly starts bouncing again, the tightening only speeding up, and you feel yourself lose it.");
			writeBig("images/meji/6-2.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","F-Fuck, it's hot...!");
			writeText("He slows down just a bit, adjusting his position before grinning.");
			writeSpeech("meji","","S-So... Let's see how many shots you have in you. Are you ready, <i><b>"+data.player.honorific+"~?</b></i>");
			writeText("...");
			writeText("You didn't even bother trying to track of how long you two fucked.");
			writeText("You'd changed positions a few times, but it always came back to cowgirl and, as you're finally starting to flag, you feel it.");
			writeText("A jolt goes up his back as he slams down against you with short, shallow movements, your hips bucking up every time he comes down.");
			writeSpeech("meji","","Fuck... Fuck fuck fuck~! I can feel it...!");
			writeText("His hands start clutching your thighs tightly, his legs start shaking uncontrollably, and it happens.");
			writeBig("images/meji/6-3.jpg", "Art by Nagi Ichi");
			writeText("As he starts spurting through the leotard, you fire one last load inside of him, leaning forward to support him as he nearly falls into you.");
			writeText("Seconds fade away as you two lay there before, eventually, you find the strength to get up.");
			writeText("You're not sure how dark it was when you went limp enough to pop out of his ass, but it's clearly night at this point.");
			writeText(fName('meji')+" is clearly out like a light, sleeping contentedly on your chest.");
			writeText("Despite how much you want to sleep yourself, you opt to get up, move him onto the couch, and finally head home.");
			writeText("Good fucking <i>God</i>, you need a shower...");
			if (data.player.location != 'gallery') {
				writeFunction("changeLocation(data.player.location)", "Go home and sleep");
				raiseTrust('meji', 1);
				passTime();
				passTime();
			}
			break;
		}
		case "meji5" : {
			if(!checkFlag('meji','meji5Gallery'))
				addFlag('meji','meji5Gallery');
			if(data.player.location == 'gallery' && checkFlag('meji','Intro') != true){
				document.getElementById('output').innerHTML = '';
			}
			else{
				removeFlag('meji','Intro');
			}
			if (data.player.location != 'gallery' && (checkTrust('meji') == 26 || checkTrust('meji') == 46) && (checkFlag('meji','submissive') == false || checkFlag('meji','willful') == false)) {
				writeText("mejiF grins as he raises his free hand to his shirt.");
				writeSpeech("meji","","I was hoping I'd get to show you this soon. See, I recently saved up just enough cash to pick up something I think we'll <i>both</i> enjoy...");
				writeText("He slides down between your legs, pulling off his clothes with practiced ease as you do the same.");
			}
			writeText("He spreads his legs out a bit, looking up at you from your thighs as his tongue rolls out of his mouth.");
			writeBig("images/meji/7-1.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","How's the view up there?");
			writeSpeech("player","","Absolutely stunning.");
			writeText("His blush gets deeper as he starts running his hand up and down your shaft, his tongue spreading his spit around your head.");
			writeText("His other hand slowly runs up your thigh and, after a moment, he pushes forward.");
			writeText("He takes your head into his mouth as he starts twisting his head a bit, his tongue and lips teasing at your tip as his slick hand jerks you off.");
			writeSpeech("player","","<i>Fuck...</i> You've got a gift for this, you know that?");
			writeText("You can feel him hum in agreement around your cock before he starts pulling away. The suction feels incredible as he keeps sliding back, until...");
			writeText("<font size='+2'><b><i>*POP~!*</i></b></font>");
			writeText("He grins up at you as he brings his other hand down to your cock as well.");
			writeSpeech("meji","","I've been practicing with some toys. Still, though...");
			writeText("He pauses to drag his tongue around your tip, teasing your slit just a bit before pulling back.");
			writeSpeech("meji","","I'm kinda surprised that this is my first time with you in my mouth. Three times in my ass, <i>and God knows how many loads down there,</i> and I'm only just now sucking you off. Kinda weird, isn't it?");
			writeSpeech("player","","A bit, sure. But that just means we have a lot of time to make up for, doesn't it?");
			writeSpeech("meji","","My thoughts <i>exactly</i>, "+data.player.honorific+"~!");
			writeText("Going back down on you, he wraps his lips around your head and starts bobbing up and down, his hand picking up speed.");
			writeBig("images/meji/7-2.jpg","Art by Nagi Ichi");
			writeText("The wet, sloppy sound of his blowjob gets louder as he starts bobbing lower each time, slowly inching his way down your shaft as he starts using fewer fingers to stroke your length.");
			writeText("After a few dozen more bounces, his hand moves down to gently toy with your sack, his lips nearly going down to your base with every bob.");
			writeText("He tries pushing all the way down, your cockhead pressing against the entrance to his throat, but he can't <i>quite</i> get all the way down.");
			writeText("After a few more tries, he puts both of his palms on the ground as he pulls his mouth off of you, gasping loudly and looking up to your eyes as he catches his breath.");
			writeSpeech("player","","You okay, mejiF?");
			writeSpeech("meji","","Y-Yeah. Just... having a bit of trouble relaxing my throat. It'll be easier once I get you past it the first time...");
			writeSpeech("player","","In that case... Want some help?");
			writeText("He pauses, then nods with a smile.");
			writeSpeech("meji","","I'll leave it to you. And remember, it's my first time - <i>don't</i> be gentle~!");
			writeText("Grabbing the back of his head, you shift your hips forward as his arms spread out a bit. You stand just a bit straighter, and start to slowly push in.");
			writeText("Making it to the throat barrier already feels great, the blowjob completely soaking your cock and his mouth, and you feel your head press against the entrance.");
			writeSpeech("player","","Okay... Hum when you're ready.");
			writeText("He starts to take a few slow, deep breaths...");
			writeSpeech("meji","","Hmm- <font size='+2'><i><b>HGPH~!!</b></i></font>");
			writeText("Just as he started to hum, you bucked your hips forward and forced your cock into his throat, moaning throatily as he starts gagging around you.");
			writeText("You quickly pop yourself back out, giving mejiF a few seconds to cough and collect himself...");
			writeText("Except, instead of coughing, he just smirks and looks up at you playfully.");
			writeSpeech("meji","","I-Is that... a-all you're gunna give, to this pussy...?");
			writeText("Your hand goes back to his head, gripping his hair tightly. You feel him shiver in pleasure as you jerk his head towards your length.");
			writeSpeech("player","","Squeeze my thigh when you need air.");
			writeText("His mouth engulfs your length as you start pulling his head against your hips, pushing into his throat as he tries matching your pace.");
			writeText("He's practically fucking his own throat after a few seconds, his hands going behind you to grab your ass. The rare moments that he stops for air are impressively far apart as he keeps bouncing up and down.");
			writeText("When he starts <i>swallowing around you</i>, you realize just how close you've gotten.");
			writeSpeech("player","","mejiF, I'm...!");
			writeText("You can feel him start humming around you, barely able to stay standing as one of his hands starts massaging your spit-slick balls again.");
			writeText("When you finally cum, it feels like you're shooting your load directly into his stomach as his throat and tongue milk every drop out of you.");
			writeText("The seconds drag on as he keeps swallowing around your shaft until, finally, you feel your head pop out of his throat, along his tongue, and past his lips.");
			writeText("He pauses for just a moment, before gently pressing his lips against your head for a wet, sloppy kiss.");
			writeBig("images/meji/7-3.jpg","Art by Nagi Ichi");
			writeText("He gives you a smug smirk and leans back.");
			writeSpeech("meji","","Not bad for my first <i>real</i> blowjob, right?");
			writeSpeech("player","","mejiF.");
			writeText("He pauses.");
			writeSpeech("meji","","...Y-Yeah?");
			writeSpeech("player","","You were <i>amazing</i>.");
			writeText("The smugness immediately disappears, replaced by a face-wide blush as his eyes going to pretty much anywhere except for yours.");
			if((data.player.location != "gallery") && (checkFlag('meji','submissive') || checkFlag('meji','willful')))
				writeSpeech("meji","","...Thanks. But you know, we're not stopping here~");
			else
				writeSpeech("meji","","...Thanks.");
			break;
		}
		case "meji6" : {
			if(!checkFlag('meji','meji6Gallery'))
				addFlag('meji','meji6Gallery');
			if(data.player.location == "gallery"){
				document.getElementById('output').innerHTML = '';
				if(checkFlag('meji','Intro') != true)
					addFlag('meji','Intro');
			}
			writeBig("images/meji/8-1.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","Do you like it? I've been wearing it under my uniform lately... including in your office back then.");
			writeSpeech("player","","I'd say it looks nice, but I feel like you're not looking for a <i>verbal</i> reply.");
			writeText("He smiles as he tosses his other clothes to the side.");
			writeText("He steps in front of you before kneeling down, his hands rubbing against your crotch as he slides forward.");
			writeSpeech("meji","","Mmm... I could tell from looking at you, but feeling it in my hand is way better.");
			if(data.player.gender == "man"){
				writeText("He leans his head down, pulling your pants low enough to reveal your underwear.");
				writeText("You feel his mouth press down against the thin fabric, his hot breath and spit soaking into it as his tongue dances across the fabric.");
				writeSpeech("meji","","Don't worry, I won't make you wait for the real deal...");
				writeText("He slides your underwear down, your cock springing out as it does, smiling up at you and giving a wink.");
				writeEvent("meji5");
			}
			else{
				writeText("He leans his head down, lifting your skirt just enough to reveal your panties.");
				writeText("You feel his mouth press down against the thin fabric, his hot breath and spit soaking into it as his tongue dances across the fabric.");
				writeSpeech("meji","","Don't worry, I won't make you wait for the real deal...");
				writeText("He slides your panties down, your cock springing out as it does, smiling up at you and giving a wink.");
				writeEvent("meji5");
			}
			writeFunction("writeEvent('meji7')", "Get ready to fuck");
			break;
		}
		case "meji7" : {
			if(!checkFlag('meji','meji7Gallery'))
				addFlag('meji','meji7Gallery');
			document.getElementById('output').innerHTML = '';
			writeText("Grabbing your hand, he pulls you to the side of the room to a futon. He smiles and kneels down on it, but...");
			writeSpeech("player","","Actually, let's try a different position.");
			writeSpeech("meji","","Really? I mean, sure. I don't know too many, but which one-");
			writeText("You step forward, gently pushing his body over onto his back. As he does, you see his erection completely pop out of his bikini bottoms as you push your hands against his thighs.");
			writeSpeech("meji","","O-Oh.");
			writeText("He looks down at your cock, then back up to your face, a bit embarrassed.");
			writeSpeech("meji","","M-Missionary is fine too. Better than fine, really.");
			writeText("He grabs onto his own legs, pulling them back a bit.");
			writeBig("images/meji/8-2.jpg", "Art by Nagi Ichi");
			writeSpeech("meji","","God... You feel so <i>warm</i>... If you were getting pent-up, you should've gotten me sooner.");
			writeText("He smiles, rolling his hips a bit as you rub your cock against his hole.");
			writeSpeech("meji","","I'd've been more than happy to take <i>every drop you've got.</i> So don't keep both of us waiting, okay?");
			writeText("You smirk, lining your cockhead up to his hole.");
			writeSpeech("player","","You're practically <i>begging</i> me to get as rough as I can, aren't you?");
			writeSpeech("meji","","If I <i>literally</i> beg, do you promise to fuck me harder~?");
			writeText("You answer by <b>shoving</b> your cock into his ass, hearing his throaty moan as you angle yourself a bit lower...");
			writeSpeech("meji","","O-Oh <b>FUCK, <i>right there~!</i></b>");
			writeText("Pressing your head against his prostate, you piston against it for a few seconds, watching him squirm as his cock starts to dribble out almost-white precum.");
			writeBig("images/meji/8-3.jpg", "Art by Nagi Ichi");
			writeSpeech("player","","I actually wouldn't mind hearing you beg a little. Would you like to try?");
			writeText("He opens his mouth but, as he does, you <i>pound</i> his prostate quickly, cutting him off with his own moan.");
			writeText("Panting raggedly, he shudders underneath you as he squeezes around your shaft.");
			writeSpeech("player","","Well? Didn't you just say...");
			writeText("You pull out almost completely, your head almost sliding out...");
			writeSpeech("player","","...not to <i>keep us both <b>waiting?</b></i>");
			writeText("You buck your hips forward, hearing him gasp and feeling him shiver as you bottom-out in his ass.");
			writeSpeech("meji","","<font size='-2'>S-Sorry...!</font> <font size='-1'>P-Please...!</font>");
			writeText("You shift your weight in small circles, his voice hitching as you move your cock around inside his ass.");
			writeSpeech("player","","Please? Please what, mejiF?");
			writeSpeech("meji","","<font size='-1'>F-Fuck me...</font>");
			writeSpeech("player","","You can do better than that.");
			writeText("Slowly, you draw your cock out, pressing against every senstive fold you can as he squeals.");
			writeSpeech("meji","","F-Fuck me stupid...! Please, use my body like a sex-toy! Like <i>your</i> sex-toy!");
			writeSpeech("player","","If that's what you want...");
			writeText("Halfway out now, you gently prod at his prostate with your cock.");
			writeSpeech("player","","Then <b><i>relax.</i></b> Relax every part of you, and just focus on <i>this.</i>");
			writeText("You saw further into him, seeing him bite his lip gently as he holds his legs.");
			writeSpeech("player","","You still remember last time you relaxed, don't you? How you got <i>more and more <b>sensitive</b> with every thrust?</i>");
			writeSpeech("meji","","Y-Yes playerSir...!");
			writeSpeech("player","","Focus on that memory, on how <i>good</i> it felt to be relaxed while a "+data.player.gender+" uses you.");
			writeText("His eyes start to haze over, his breathing deepening.");
			writeSpeech("player","","Think about the sensation of my hard cock <i>splitting you apart.</i>");
			writeSpeech("meji","","N-Nn~...");
			writeSpeech("player","","And now... think about how <i>empty</i> you feel.");
			writeText("You pull out completely, a pathetic mewl escaping his lips for a second. His eyes start to clear up, but...");
			writeSpeech("player","","<i><b>Puppy.</b></i>");
			writeText("You immediately thrust back in, your hips clapping against his thighs as he moans.");
			writeSpeech("player","","That's what you are, mejiF. You are my...");
			writeText("You pull out...");
			writeSpeech("player","","...adorable, lovable, cute little <i><b>puppy.</b></i>");
			writeText("He groans again as you push in as deep as you can, grinding against his ass when you can't go further.");
			writeSpeech("player","","And whenever I remind you of what you are, do you know what will happen?");
			writeSpeech("meji","","No... playerSir...");
			writeSpeech("player","","I think you do. I think you know how <i>full</i> you'll feel, how <i>good</i> it'll be.");
			writeText("You see his dick start to twitch, practically oozing precum from the tip and dribbling it all over his stomach.");
			writeSpeech("player","","And I think we <i>both</i> know what would happen if I said it too many times.");
			writeText("His body starts to shake underneath you, your cock still slowly moving back and forth, every thrust making the next one that much more pleasureful.");
			writeSpeech("player","","Let's test out <i>exactly</i> what that would look like... <i><b><font size='+2'>puppy.</font></b></i>");
			writeText("His eyes go wide, his mouth gaping open as he completely loses control.");
			writeBig("images/meji/8-4.jpg","Art by Nagi Ichi");
			writeText("His jizz spurts out across his face, some of it spilling into his mouth and most of it spattering across his chest and hair.");
			writeText("But it doesn't stop after the first rope.");
			writeSpeech("player","","Remember this feeling, <b>puppy.</b> Remember how good it feels to be called that, to hear <i><b>me</b></i> call you that.");
			writeText("A few more spurts fly out, the sight of him painting his own face pushing you closer to the edge.");
			writeSpeech("player","","Do you understand what I'm saying?");
			writeText("He gives a vague, unsteady nod, his tongue lapping at the cum on his face.");
			writeSpeech("meji","","<font size='-1'>Y-Yes... playerSir~...");
			writeText("With a grin, you thrust quickly and deeply, mejiF's orgasm milking you, your own just seconds off.");
			writeSpeech("player","","<i>Good <b>puppy.</b></i>");
			writeText("He twitches around you one last time as you fill his ass with your spunk, the last dribbles of his semen dripping onto his stomach.");
			writeText("Pulling out, you can see your load start to ooze out, mejiF's eyes rolled up in semi-conscious bliss.");
			writeBig("images/meji/8-5.jpg","Art by Nagi Ichi");
			writeText("You smile down at him before confidently shouting, and accentuating it with a firm slap on his ass,");
			writeSpeech("player","","<i><b>Wake up.</b></i>");
			writeText("His eyes refocus a little... but not much.");
			writeText("His legs flop down against the bed, your jizz oozing out onto the sheets as he starts shuddering a bit.");
			writeSpeech("meji","","Is... Is this how you use all your toys...?");
			writeSpeech("player","","Yup.");
			writeText("A dumb grin spreads across his face, his eyes shutting.");
			if(data.player.gender == "man")
				writeSpeech("meji","","I love it... <i>*Master...</i>");
			else
				writeSpeech("meji","","I love it... <i>M-Mistress...</i>");
			writeText("His breathing levels out quickly, meaning that he fell asleep. Not that you can blame him, given the hypnosis treatment.");
			writeSpeech("player","","...Well, might as well clean up. Hope he doesn't mind me using one of his towels to wipe him off...");
			if(data.player.location != "gallery"){
				data.player.location = "vintageStreet";
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "meji8" : {
			if(!checkFlag('meji','meji8Gallery'))
				addFlag('meji','meji8Gallery');
			passTime();
			document.getElementById('output').innerHTML = '';
			writeText("You arrive a bit earlier than you intended, so you spend a few minutes meandering about the district.");
			writeText("Seems like there's a coffee shop near here. You might have to try that place out sometime...");
			writeText("After a bit of mindless wandering, you hear mejiF's voice call out to you.");
			if(checkFlag('meji','willful'))
				writeSpeech("meji","","There you are! Sorry for the wait, I was having some trouble finding the belt for this one.");
			else
				writeSpeech("meji","","Ah, playerSir! I thought I'd get here first.");
			writeSpeech("player","","It's fine, I was...");
			writeText("You pause, taking in his appearance and outfit.");
			writeBig("images/meji/9-1.jpg","Art by Nagi Ichi");
			if(checkFlag('meji','willful'))
				writeSpeech("meji","","What do you think? I've never actually worn this one outside before, since the shirt shows off my stomach.");
			else{
				writeSpeech("player","","So when you called it revealing...");
				writeSpeech("meji","","I meant my, um... stomach, yes. I'm a lot more used to skirts than belly-shirts.");
			}
			writeSpeech("player","","If I didn't know better, I'd say you were trying to tempt me into taking you straight to my place...");
			if(checkFlag('meji','willful')){
				writeText("He laughs, shaking his head.");
				writeSpeech("meji","","Don't be ridiculous, playerSir.");
				writeText("He toys with the skirt a bit, the barest hint of pink flashing for a moment.");
				writeSpeech("meji","","<i>I wouldn't make you wait that long.</i>");
				writeSpeech("player","","Well, you're certainly pretty forward today.");
				writeSpeech("meji","","Hm... I wonder why?");
				writeText("He slides up next to you, grabbing onto your arm with a wide grin.");
				writeSpeech("meji","","Maybe it's because it's fun to see your reactions.");
				writeText("You pause to think for a moment.");
				writeText("Fun reactions, huh...?");
				writeFunction("writeEncounter('meji8a')", "\"Reactions can be pretty entertaining to watch... <i>puppy.</i>\"");
			}
			else{
				writeSpeech("meji","","Mm, not at all. If anything, I'm actually looking forward to hanging out with you.");
				writeText("He flattens out his skirt a bit, smiling.");
				writeSpeech("meji","","Being around you without thinking about sex has a different kind of appeal, playerSir.");
				writeSpeech("player","","...You know, you <i>could</i> call me by my name, if you wanted.");
				writeSpeech("meji","","I know, but...I don't think I will.");
				writeText("He steps next to you, gently interlocking his arm with yours.");
				writeSpeech("meji","","I like how saying it makes me feel. Calling you playerSir makes things feel simpler, I guess. Plus...");
				writeSpeech("player","","...!");
				writeText("You feel one of his hands brush along your thigh, his voice dropping to a whisper.");
				writeSpeech("meji","","<i>It reminds me of the feeling of being underneath you, playerSir.</i>");
				writeText("You feel his hand retreat, though he still holds onto your arm.");
				writeSpeech("player","","...Well, you're certainly being more forward than normal today.");
				writeSpeech("meji","","I think being happy tends to do that. Though... I admit that your reactions are pretty fun.");
				writeSpeech("player","","Is that so...?");
				writeText("Fun reactions, huh?");
				writeText("That sounds like an interesting idea...");
				writeFunction("writeEncounter('meji8a')", "\"Reactions can be pretty entertaining to watch... <i>puppy.</i>\"");
			}
			break;
		}
		case "meji9" : {
			if(!checkFlag('meji','meji9Gallery'))
				addFlag('meji','meji9Gallery');
			document.getElementById('output').innerHTML = '';
			writeText("Killing some time isn't hard given that you do technically work here, but it isn't long before you're headed to the gym.");
			writeText("When you get there, you give a soft knock on the door and wait a few moments... before hearing a click.");
			if(checkFlag('meji','willful')){
				writeSpeech("meji","","There.");
				writeText("Pulling the door open, mejiF pokes his head out first with a grin, looking behind you first before opening it wider.");
				writeSpeech("player","","Hello, mejiF.");
				writeText("You step through, the door shutting quickly behind you as he makes sure it's locked.");
				writeSpeech("meji","","Alright, we're good...");
				writeText("When he turns around, it's with a wide smile as he clasps his hands behind his back.");
				writeBig("images/meji/10-1w.jpg","Art by Nagi Ichi");
				writeSpeech("meji","","Hello, *Sir! I heard the lock's been acting up lately, so I just wanted to double-check it real quick.");
				writeSpeech("player","","And the verdict?");
				writeSpeech("meji","","Had to twist the lock extra hard, but it's functional one-hundred percent. Which, of course, means...");
				writeText("He grins wider, leaning his body forward.");
				writeSpeech("meji","","Not a soul is gonna sneak up on us while we have our fun~! So, did you want to start with?");
				writeSpeech("player","","Actually, I was a little curious. You don't get off by jerking off any more, yes?");
				writeText("He nods firmly.");
				writeSpeech("meji","","I've been using toys on my ass to get off... though they're not as fun or as satisfying as you.");
				writeSpeech("player","","Have you been using anything else?");
				writeText("He pauses for a moment, before his eyes widen, remembering something.");
				writeSpeech("meji","","Kinda yeah, actually. I was bouncing on a toy at home, trying to get off, which led me to thinking about you, and how your hands would feel...");
				writeText("He flushes a bit, smiling at you.");
				writeSpeech("meji","","My chest wasn't exactly sensitive, but it's the thought that counts, and it <i>really</i> counted.");
				writeText("Thinking back on it, you did tell him that he'd only be able to get off with his ass... which messed with <i>all</i> his erogenous zones, it sounds like.");
				writeText("Which basically means it's time to have some fun with sensory manipulation again.");
				writeSpeech("player","","mejiF, I want you to take a nice, slow breath for me.");
				writeText("He immediately listens, not questioning it as he slowly inhales.");
				writeSpeech("player","","Hold it for just a short count of three... and exhale, just as slowly.");
				writeText("You slowly make your way around mejiF, moving to stand behind him as he repeats the breathing.");
				writeText("His shoulders relax first, though you note that, as you put your hands against them, he tenses for a brief moment... before relaxing again.");
				writeSpeech("player","","How are you feeling?");
				writeSpeech("meji","","...Pretty chill, honestly.");
				writeSpeech("player","","Good.");
				writeText("You slowly run your fingers down his arms, watching him shiver slightly from the gentle sensation.");
				writeSpeech("player","","Do you feel that, mejiF?");
				writeSpeech("meji","","Yes *Sir...");
				writeText("You reach forward a bit, running your fingers along his ribcage now as he shifts.");
				writeSpeech("player","","And this?");
				writeSpeech("meji","","Yes *Sir. It... tickles~");
				writeText("You smile, moving your hands back up to grab the top of his jersey, and unzip it.");
				writeText("Pulling it open, you step forward to get a better position, only to feel him press his ass against you.");
			}
			else{
				writeSpeech("meji","","Hello, *Sir!");
				writeText("His head pokes out slightly as he starts opening the door, looking behind you for a moment before opening it wider.");
				writeSpeech("player","","Hello, mejiF.");
				writeText("You step through, the door shutting quickly behind you as he makes sure it's locked.");
				writeSpeech("meji","","Alright, it's locked...");
				writeText("When he turns around, it's with a somewhat nervous expression as he shifts in place.");
				writeBig("images/meji/10-1.jpg","Art by Nagi Ichi");
				writeSpeech("player","","Something wrong, mejiF?");
				writeSpeech("meji","","A bit, *Sir. I'm just... not used to being seen in this.");
				writeText("He runs his thumb around the band, revealing a bit of his hips in the process.");
				writeSpeech("meji","","My legs actually feel <i>more</i> exposed than when I'm naked... Plus, I heard the lock's been acting up, so it's making me a little nervous.");
				writeText("You frown slightly, moving to the door and giving it a testing twist...");
				writeText("And it seems to hold steady.");
				writeSpeech("meji","","Ah, it's fine now. I had to lock it harder the second time, but it's working.");
				writeSpeech("player","","Then there's no reason to be nervous, is there?");
				writeText("You smile down at him, giving the doorknob one last twist before nodding.");
				writeSpeech("player","","See? Nothing to worry about.");
				writeText("Probably, anyway.");
				writeText("He nods though, taking a deep breath before smiling.");
				writeSpeech("meji","","Then in that case, what would you like to do?");
				writeSpeech("player","","Actually, I was a little curious. You don't get off by jerking off any more, yes?");
				writeText("His face flushes a bit as he nods.");
				writeSpeech("meji","","I don't get off as often now, but I have been <i>getting off</i> with my butt when I do.");
				writeSpeech("player","","Have you been using anything else?");
				writeText("He pauses for a moment, before his face gets even redder.");
				writeSpeech("player","","That's a yes, then.");
				writeText("mejiF nods.");
				writeSpeech("meji","","I was using a toy at home and... thought about your hands on my body. I started running my hands along my stomach, then my chest, then...");
				writeText("He trails off, so you finish for him:");
				writeSpeech("player","","And then your nipples.");
				writeSpeech("meji","","Yes, *Sir. I didn't actually <i>feel</i> my hands, really, but imagining they were yours was... <i>really</i> pleasant.");
				writeText("Thinking back on it, you did tell him that he'd only be able to get off with his ass... which messed with <i>all</i> his erogenous zones, it sounds like.");
				writeText("Which basically means it's time to have some fun with sensory manipulation again.");
				writeSpeech("player","","mejiF, I want you to take a nice, slow breath for me.");
				writeText("He immediately listens, not questioning it as he slowly inhales.");
				writeSpeech("player","","Hold it for just a short count of three... and exhale, just as slowly.");
				writeText("You slowly make your way around mejiF, moving to stand behind him as he repeats the breathing.");
				writeText("His shoulders relax first, though you note that, as you put your hands against them, he tenses for a brief moment... before relaxing again.");
				writeSpeech("player","","How are you feeling?");
				writeSpeech("meji","","...Better. A bit calmer.");
				writeSpeech("player","","That's very good.");
				writeText("You slowly run your fingers down his arms, watching him shiver slightly from the gentle sensation.");
				writeSpeech("player","","Do you feel that, mejiF?");
				writeSpeech("meji","","Yes *Sir...");
				writeText("You reach forward a bit, running your fingers along his ribcage now as he shifts.");
				writeSpeech("player","","And this?");
				writeSpeech("meji","","Yes *Sir. It... tickles~");
				writeText("You smile, moving your hands back up to grab the top of his jersey and unzip it, before lifting the shirt underneath.");
				writeText("You step forward to a get a better position, only to feel him press his ass against you.");
			}
			writeText("He feels far more relaxed now as you run your hands along his now-bare chest, his erection plainly obvious as you look over his shoulder.");
			writeText("His breathing gets heavier, small mewls of pleasure coming out as you start to tease his nipples.");
			writeBig("images/meji/10-2.jpg","Art by Nagi Ichi");
			writeSpeech("player","","And what about this, mejiF?");
			writeText("A soft moan spills out of his mouth before he gently bites his lip.");
			writeSpeech("meji","","It's... <i>good,</i> *Sir~");
			writeSpeech("player","","That's right. It feels great, doesn't it?");
			writeSpeech("meji","","Y-Yes *Sir...!");
			writeText("He starts grinding his ass against you more, pressing against your bulge as he inhales sharply.");
			writeSpeech("player","","You know... I was really expecting this to take a bit more <i>effort,</i> mejiF. I wonder...");
			writeBig("images/meji/10-3.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","<i><b>N-Nn~!</b></i>");
			writeSpeech("player","","...just how much of a slut are you, that <i>this</i> is how fast you're falling in love with having your nipples teased?");
			writeText("Over his shoulder, you can see his cock twitch in the shorts as you say that.");
			writeSpeech("meji","","That's... not fair, *Sir~");
			writeSpeech("player","","Oh?");
			writeText("You can hear a small smile on his face as he rubs his hands against your thighs.");
			writeSpeech("meji","","I wouldn't be moaning like this if <i>you</i> weren't the one teasing me~");
			writeSpeech("player","","...Flattery will get you everywhere, mejiF.");
			writeFunction("writeEncounter('mejiEvent9B')", "Take him down to the floor and play with him there");
			writeFunction("writeEncounter('mejiEvent9A')", "Make him cum with just his chest first");
			break;
		}
		case "mejiAlt1" : {
			if(!checkFlag('meji','mejiAlt1Gallery'))
				addFlag('meji','mejiAlt1Gallery');
			document.getElementById('output').innerHTML = '';
			writeText("To his credit, he does move fairly quickly to affix the condom, albeit with a hint of confusion.");
			writeText("His hand strokes you firmly to get you hard, pinching the tip of the condom as he starts to slowly roll it down.");
			writeText("You take a moment to look down at him, before focusing clearly on his eyes.");
			writeText("Calmly, you pull your pendant out from your shirt, letting it sway for just a few moments.");
			writeText("Despite the fact that it's been a while since you've pulled it out for him, he still seems to go under pretty quick, stopping in place.");
			writeSpeech("player","","Listen close, now.");
			writeText("You bring your other hand down to his head, running it through his hair for a moment as he shifts slightly, reacting to the sensation.");
			writeSpeech("player","","You're eager to make me feel good, aren't you?");
			writeText("He gives a slow, hazy nod.");
			writeSpeech("player","","Very good. And pleasing me makes you feel good, doesn't it? You enjoy it?");
			writeSpeech("meji","","Ahh... Yes...");
			writeText("You smile down at him, moving your hands away from his head.");
			writeSpeech("player","","Each time you lap at it, and each time you take it in your mouth... The sensation gets stronger, doesn't it?");
			writeText("You can feel his breathing pick up more, the muted warmth of his breath growing heavier as he stares at your cock.");
			writeSpeech("player","","You will get closer and closer the more you please me... but it'll just keep building up, unable to release... until you make me fill this condom.");
			writeText("He shudders slightly, subconsciously licking his lips.");
			writeSpeech("player","","...Now go ahead and get started.");
			writeText("You slide the pendant back under your shirt, mejiF blinking once before glancing up at you... and extending his tongue.");
			writeBig("images/meji/11-1.jpg","Art by Nagi Ichi");
			writeText("He pauses for a moment at the taste of the condom, before the sensation seems to spread through him.");
			writeText("His face gets a little flushed for a moment, before he gets right back to it, his tongue swirling around your shaft.");
			writeSpeech("meji","","A-Ahh~...!");
			writeText("There's a slight look of frustration as he goes at you energetically. Pleasing you would make him feel wonderful, but with the condom in the way...");
			writeText("He's practically just teasing himself into frustration.");
			writeText("It isn't long at all before he brings his mouth up, his tongue no longer lapping at your length as he takes your head into his mouth.");
			writeBig("images/meji/11-2.jpg","Art by Nagi Ichi");
			writeText("He bobs his mouth down a bit, his lips pressing against his fingers as he goes down, his hand stroking you with each bob.");
			writeText("He turns his head a bit, the sliding sensation of his lips on your cock feeling pleasant as he continues gliding up and down your shaft.");
			writeText("mejiF's eyes go up to meet yours for a moment as he takes you into his mouth deeper and deeper, until his hand basically has no room to hold on with each bob down.");
			writeText("His lips press against your base as he pauses and holds there for a moment, before he slides back up and picks up the pace, only going halfway down again but moving quickly and using his hand to stroke the rest.");
			writeSpeech("player","","Very good, mejiF...");
			writeText("His eyes drift down to your cock as he keeps going, low hums coming from his mouth as he keeps trying to please you more, only to end up squirming in desire instead.");
			writeText("His ass shakes a bit, wiggling side to side almost teasingly as he focuses. Feeling tempted, you reach forward and grab it with a firm hand.");
			writeSpeech("meji","","Nnf~!");
			writeText("He moans softly around your cock as you run your hand along his ass, kneading and squeezing it as he keeps trying to please you, getting himself more and more riled up.");
			writeText("Which, of course, you're more than happy to watch him do for as long as needed...");
			writeText("...");
			writeBig("images/meji/11-3.jpg","Art by Nagi Ichi");
			writeText("You're not sure how long he's been servicing you, but it was long enough that you've gotten intimately familiar with his throat as you bob his head back and forth, sometimes letting him do it and othertimes getting rough and pulling him down.");
			writeText("A lot of the feverish excitement has turned to an almost trance-like focus, milking every bit of pleasure he can get from pleasing you as his mouth slides up and down.");
			writeText("You feel his head turn slightly, your cockhead sliding against the inside of his cheek for a moment as he moans around your shaft, and you realize that you're actually approaching the edge.");
			writeText("You give his ass another firm grasp, his body shuddering slightly as you do, before you lean back and say,");
			writeSpeech("player","","Get ready...!");
			writeText("When you finish, it's with just a low groan of contentment as your cock twitches in his mouth, and you feel his entire body begin to gently shake.");
			writeText("You feel the condom expand a bit in his mouth as his head goes up, his gasping causing your dick to slide out of his mouth as unfocused eyes stay focused solely on your tip.");
			writeBig("images/meji/11-4.jpg","Art by Nagi Ichi");
			writeText("His body shudders gently as your cock twitches a few more times, the weight of the filled condom causing it to drift as his unfocused eyes follow along.");
			writeText("Shifting a bit, you can see from the state of his pantyhose that he finished as well, a small damp spot soaking through the hose and the panties beneath them.");
			writeText("You sit like that until he seems to recover his mind a bit, refocusing on you and swallowing hard.");
			writeSpeech("meji","","A-Ah... That felt amazing, *Sir~");
			writeText("You pull off the condom, watching his eyes follow it for a moment... and you decide to toy with him just a bit more.");
			writeSpeech("player","","Stick out your tongue.");
			writeText("mejiF doesn't hesitate, his mouth opening wide as his eyes follow the condom as you empty it into his mouth.");
			writeText("When it's all dribbled out, he closes his mouth for a moment, before swallowing firmly and smiling.");
			writeSpeech("meji","","Thank you, *Sir~");
			writeText("He's still a bit drowsy getting up, but with a bit of time he's completely back to normal with a smile.");
			if(data.player.location != 'gallery'){
				data.player.location = 'playerHouse';
				writeFunction("changeLocation(data.player.location)", "Clean up and finish.");
			}
			break;
		}
		case "mejiAlt2" : {
			if(!checkFlag('meji','mejiAlt2Gallery'))
				addFlag('meji','mejiAlt2Gallery');
			if(!checkFlag('meji','video'))
				addFlag('meji','video');
			document.getElementById('output').innerHTML = '';
			writeSpeech("player","","Start by bending over.");
			writeSpeech("meji","","Yes *Sir~");
			writeText("You dig your thumb into the fabric, mejiF's ass moving just slightly as you gently pull... Before you <b>tug.</b>");
			writeText("There's the sound of tearing as you make a quick circular hole in the hose, just large enough to give you a bit of room as you pull his white panties to the side.");
			writeText("It hardly comes as a surprise when you touch his hole to find it already slick and ready...");
			writeSpeech("player","","You went and lubed yourself up before you even slid these on, didn't you?");
			writeSpeech("meji","","Y-Yes *Sir~!");
			writeText("You rub your cockhead against his hole, giving a low laugh as you saw into him.");
			writeSpeech("player","","Very good. In that case...");
			writeText("You give mejiF a firm slap on the ass, his whole body tightening for a second with a moan.");
			writeSpeech("player","","Make a nice noise for the camera, mejiF.");
			writeSpeech("meji","","Y-Ye- <i><b>FUCK~!</b></i>");
			writeBig("images/meji/12-1.jpg","Art by Nagi Ichi");
			writeText("His voice spills out sharply, his eyes going wide as you thrust into him, rolling your hips forward until you bottom-out in one smooth push, his ass already ready to accept your shaft.");
			writeText("You waste no time picking up speed, thrusting into him forcefully. Each draw out only just leaves your head inside before you <b>slam</b> back in, the resonant clap of your hips on his ass making him let out throaty moans.");
			writeText("The lower angle lets you saw against his prostate each time you thrust in, already getting him moaning - if he didn't have panties under the hose, he'd absolutely have soaked through them by now.");
			writeSpeech("meji","","O-Oh <b><i>fuck</i></b> i-it's so <i><b>good...!</b></i>");
			writeText("You hammer into him again and again, your hands grasping his waist to pull him into each thrust. His arms start to quake beneath him as his head falls forward a bit, his moaning getting higher pitched as you drive into him.");
			writeText("He slowly raises his head a bit, his eyes shut tight as you feel him already starting to convulse around you.");
			writeSpeech("player","","Already? I knew you were sensitive, but...");
			writeBig("images/meji/12-2.jpg","Art by Nagi Ichi");
			writeText("You piston into him a bit slower but with more control, grinding your cockhead against his prostate as you feel him already starting to shake beneath you.");
			writeSpeech("player","","You really are a total anal <b>slut,</b> aren't you?");
			writeText("You bring your hand up, slapping his ass firmly as he lets out another sharp cry of pleasure, his ass squeezing around you.");
			writeSpeech("meji","","Y-Yes...! Please, just don't stop...!");
			writeText("He glances back at you, the ecstasy obvious in his eyes.");
			writeSpeech("meji","","I-It feels so good...! Not just my ass, but having you <i>use</i> it, pleasuring you with my hole...!");
			writeText("Hm... Looks like the hypnosis from last time didn't wear off then.");
			writeText("Well, not that it matters. After all...");
			writeSpeech("player","","If my pleasure makes you feel that good... then <i><b>here.</b></i>");
			writeText("You swing your hips forward again, picking up wild speed as you slap his ass again, before grasping his waist and fucking him harder.");
			writeText("Your name spills from his lips again and again as you use his ass and thrust heavily, paying no attention to time or focus as you wildly fuck him, emphasizing solely your own pleasure... which seems to be more than enough to reduce mejiF to a slutty moaning mess.");
			writeText("You're not sure how long you're fucking his ass before you approach the edge, but it's long enough that mejiF can barely hold his arms steady, his mouth hanging open with the same hazed-over eyes.");
			writeText("As you get close, you give him another firm slap on the ass, his hole tightening around you sharply as you do.");
			writeSpeech("player","","Come on, slut. Look at the camera while you make me cum.");
			writeText("He lifts his face, looking right at it as you push yourself to get to the edge as fast as possible, before going over and...!");
			writeSpeech("meji","","<i><b>O-OOH~!</b></i>");
			writeBig("images/meji/12-3.jpg","Art by Nagi Ichi");
			writeText("His eyes are wide as he stares forward into the camera, which you're sure is catching every twitch and spurt in his pantyhose as your cock twitches and flexes.");
			writeText("Each hot, sticky rope filling him up causes his ass to tense up again and again, milking out every drop in your shaft as you gradually slow down.");
			writeText("When you're finished, you finally draw yourself out with a low sigh of contentment, even as mejiF looks back at you.");
			writeBig("images/meji/12-4.jpg","Art by Nagi Ichi");
			writeText("Turning his body a bit, shaking with post-orgasmic pleasure and a few gentle gasps, he slowly pulls his thighs apart. As he does, you can see the white cum dribbling down his thighs from his own cock, soaking through the thin hose.");
			writeText("He rolls onto his side, a soft wet squish being heard as his thighs come back together as he takes a moment to catch his breath and relax.");
			writeSpeech("meji","","H-Holy crap... I don't think I've cum that much in one go in... a <i>while...</i>");
			if(data.player.location != 'gallery'){
				writeText("You give a bit of a laugh, laying down next to him. Going all out from the start until the finish was a bit more of a workout than you intended...");
				writeText("The two of you lay there for a while to catch your breath (mejiF taking considerably longer), until you finally get ready to clean up.");
				data.player.location = 'playerHouse';
				writeFunction("changeLocation(data.player.location)", "Wash the sheets and finish (for now).");
			}
			break;
		}
		case "mejiCorruption" : {
			if(!checkFlag('meji','mejiCorruptionGallery'))
				addFlag('meji','mejiCorruptionGallery');
			document.getElementById('output').innerHTML = '';
			writeText("There's a brief moment where your hand starts to glow a faint red, something that makes mejiF's eyebrow raise for just a moment.");
			writeSpeech("meji","","Huh... How're you doing tha-");
			writeText("He stops suddenly, a small shudder going through him for a moment, his face flushing red.");
			writeSpeech("meji","","That's... different? Definitely different, like it's... <i><b>building...</b></i>");
			writeSpeech("player","","Let's get somewhere a bit more private real quick...");
			writeSpeech("meji","","Y-Yeah... Let's go, I actually was planning an outfit at home...");
			writeText("...");
			writeBig('images/meji/succ1-1.jpg',"Art by Nagi Ichi");
			writeSpeech("meji","","F-Fuck, I hope it looks good, 'cause I'm not sure I can hold back much longer~");
			writeText("His hands quickly move to your chest, biting his lip as his breathing goes wild.");
			writeText("You quickly take him to the bed, where you feel him guide you down onto your back. A moment later, you're back in a familiar position, with him getting ready to ride you.");
			writeSpeech("player","","Just take it s<i><b>LOW!</b></i>");
			writeBig("images/meji/succ1-2.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","O-Ohhhh <i><b>fuuuck...!</b></i>");
			writeText("He lowers his head slightly, his cock clearly covered in his pre-cum, yet still soft... for now, at least. As he takes you balls-deep into his ass, you can see it swell up.");
			writeText("His breathing is ragged as he starts to slowly bounce up and down, his cock bouncing with him as he moans luridly.");
			writeBig("images/meji/succ1-3.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","F-Fuck, why does this~...!?");
			writeText("His hands grasp your thighs tightly as he lets out a mewling moan, your cock sliding over his prostate harder with each bounce.");
			writeSpeech("meji","","I-It feels great, better than before...!");
			writeSpeech("player","","Just... focus on the pleasure, mejiF.");
			writeText("You let out a low groan as he does exactly that, picking up speed.");
			writeText("Just from looking at him, you can tell that he's already getting close.");
			writeBig("images/meji/succ1-4.jpg","Art by Nagi Ichi");
			writeText("A faint pulse of corrupting influence seems to surge through him as he arches his back harder, his moans turning into desperate gasps as you feel yourself getting pushed to the edge yourself.");
			writeSpeech("meji","","I-I'm about to...! I'm about to <i><b>cum~</b></i>");
			writeText("His dick starts to bob as he picks up the pace, twitching strongly as you feel his ass tighten around you tighly and you go over the edge yourself.");
			writeBig("images/meji/succ1-5.jpg","Art by Nagi Ichi");
			writeText("His ass tenses tight around your cock, his body gently shaking in the bliss of orgasm as his cocks spurts again and again, before his eyes seem to roll up a bit.");
			writeText("When he's finally finished cumming, he seems to relax into you, his body pitching against you as his eyes gently shut.");
			break;
		}
		case "mejiCC1" : {
			if(!checkFlag('meji','mejiCC1Gallery'))
				addFlag('meji','mejiCC1Gallery');
			document.getElementById('output').innerHTML = '';
			writeText("mejiF slowly climbs up between your legs on the bed, his hand gently moving to grasp your cock as his face nears it.");
			writeBig("images/meji/CC-2.jpg","Art by Nagi Ichi");
			writeSpeech("meji","","Do the gloves feel alright?");
			writeSpeech("player","","Different... but good.");
			writeText("He smiles slightly at that, nodding.");
			writeSpeech("meji","","Then I'll go ahead and get started~");
			writeText("Bringing his head down, he takes your head past his lips first, his fingers slowly starting to stroke your length as he breathes in sharply.");
			writeText("The sensation changes just as sharply as he gives you a vacuum blowjob, slowly teasing his lips up and down the edge around your head as he fingers move almost methodically to stroke your shaft.");
			writeBig("images/meji/CC-3.jpg","Art by Nagi Ichi")
			writeSpeech("player","","Very good...");
			writeText("He shudders slightly at the compliment, humming happily as he starts picking up speed and depth as he bobs his head down.");
			writeText("His tongue teases at your tip as he takes you deeper into his mouth, his hand stroking anything that isn't between his lips as his spit spills down, making the handjob feel more pleasurable, as well as louder.");
			writeText("The wet sounds of his hand and mouth together push you along fairly quickly, groans spilling out of your mouth even before his second hand comes to bear.");
			writeSpeech("player","","Mm...");
			writeText("His other hand gently toys with your balls, cradling them as he slides up and down your shaft. His gentle teasing and massaging causes you to let out soft groans of pleasure, each one only getting mejiF even more aroused.");
			writeText("The blowjob keeps going for quite some time, his tongue and lips and hands each serving to bring you closer and closer.");
			writeText("It isn't that much longer before you find yourself on the brink, grunting lowly to mejiF.");
			writeSpeech("player","","I'm close...!");
			writeText("He takes this as a sign to speed up even more, his excited humming getting louder as it gently vibrates your cock pleasantly, taking you almost balls-deep with each bob.");
			writeText("With his hands working your shaft and balls, it's only seconds longer before you grunt sharply one more time, filling mejiF's mouth as he shudders in ecstasy from the taste of your cum and the pleasure of earning it.");
			writeBig("images/meji/CC-4.jpg","Art by Nagi Ichi");
			writeText("Raising his head, mejiF smoothly swallows the cum in his mouth before his gloved fingers pick up the rest of the cum.");
			writeSpeech("meji","","Hopefully this doesn't stain...");
			writeText("He laps the rest of it up from his fingers, smiling for a moment... before his eyes drift to the wall for a moment.");
			writeSpeech("meji","","I'd ask if you were up for another round but, unfortunately...");
			writeText("mejiF gestures to the nearby clock which, sure enough, is getting annoyingly close to class-time for him.");
			writeSpeech("player","","Damn. Well, that just means I've got something to look forward to.");
			writeText("He blushes slightly but nods... before leaning forward to give your cockhead a quick, gentle kiss.");
			writeSpeech("meji","","I'll look forward to it, *Sir~!");
			writeText("As he gets up, you playfully swat at his ass with your hand, a soft moan spilling from his mouth as he smiles wide.");
			writeSpeech("meji","","Thanks, *Sir~");
			writeText("With that, he moves to start changing out of the outfit to get ready for class, while you clean yourself up as best you can before getting back to work.");
			if (data.player.location == "gallery") {
				writeFunction("changeLocation(data.player.location)", "Finish here");
			}
			break;
		}
		case "mejiCC2" : {
			if(!checkFlag('meji','mejiCC2Gallery'))
				addFlag('meji','mejiCC2Gallery');
			document.getElementById('output').innerHTML = '';
			writeText("Leaning back, you spread your legs to give him easier access as he slides up onto the bed, flipping his skirt a bit as he does. And, given that you can see a bead of lube down there...");
			writeSpeech("player","","You prepped yourself while getting changed?");
			writeSpeech("meji","","Of course~");
			writeText("You feel your cock begin to press against his hole as he shifts his body against yours, only to slide up between his cheeks.");
			writeSpeech("meji","","Given how last time ended, I wanted to make sure we spent as much time fucking as we can get away with~");
			writeText("You feel your cock rub up against his lubed-up ass, the sensation of his ass on your shaft and your head rubbing up against the frilly skirt of the outfit feeling really, really pleasant.");
			writeText("Still, you didn't come here to rub your cock on a skirt and spend your time hotdogging him...");
			writeSpeech("player","","Well, if that's the case mejiF... Why don't you <b>sit</b> for me?");
			writeText("A smirk spreads across mejiF's face.");
			writeSpeech("meji","","Of course, <i>*Master~</i>");
			writeBig("images/meji/CC-5.jpg","Art by Nagi Ichi");
			writeText("A gasping moan pours out of his mouth as he shudders and shakes atop you, the pleasure of your cock spreading him open causing him to have trouble focusing.");
			writeSpeech("meji","","O-Oh <i><b>fuck~!</b></i>");
			writeText("Biting his lip, he pauses for a moment, but not long before he starts to slowly go down again.");
			writeText("You can't help but just barely thrust your hips upwards as you do, each one causing sputtering gasps to spill out of him until you feel his ass against your thighs and you've bottomed out.");
			writeSpeech("meji","","God, it's almost <i>insane</i> how good it feel every single time...!");
			writeText("Playfully, you thrust upwards into him, relishing in the small spasm of pleasure that causes his back to arch momentarily.");
			writeSpeech("player","","Remember that you're not the only one getting off here, mejiF.");
			writeText("He bites his lip for just a moment, laughing softly and shaking his head.");
			writeSpeech("meji","","How can I forget, when half the pleasure is in getting you off in the first place?");
			writeText("Saying that, he starts rolling his hips slightly as he raises himself up, his hands pressed into the sheets at either of your sides as he lifts himself up.");
			writeText("It starts out slow, but each bounce down picks up a little more speed, his hips still gently rolling around and pressing your cock against every inch of his insides as he thoroughly fucks himself with your cock.");
			writeText("Of course, it's not like you plan on staying inactive.");
			writeText("Thrusting your hips up each time he comes down, the sound of your ass clapping against your thighs resoundingly fills the room as your cock drags along his prostate, each one causing him to shudder atop you and start dribbling out drop after drop of precum.");
			writeSpeech("meji","","Holy ff<i>ff<b>fuck</b> yes~!</i>");
			writeText("His gasps and shouts of pleasure only add to it, getting you off harder as you start to pant yourself. Your hands grip his wrists beside you as you thrust up, matching his increasing speed each time.");
			writeText("Barely a minute passes before you're both going nearly as fast as you can go, the rapid sound of your fucking ringing out again and again, nearly as loud as your and mejiF's moans.");
			writeSpeech("meji","","F-Fuck, I'm close...~! I wanna cum, I want <i>you</i> to cum inside and <i><b>make</b></i> me cum~!");
			writeText("Hardly focused, mejiF tries to keep up the same speed as you plow his ass, but you're not far off yourself.");
			writeSpeech("player","","I'm almost there too...!");
			writeText("Another shudder goes through him.");
			writeSpeech("meji","","Then cum...! Cum for me, cum for your little magical-girl <i><b>fuckslut,</b></i> *Master~!");
			writeText("His words push you over as you grasp his wrists tight, swinging your hips up into him and letting out a loud, shouting grunt and shoot off inside of him, and from the tightening and moaning, he finishes with you.");
			writeBig("images/meji/CC-6.jpg","Art by Nagi Ichi");
			writeText("Rope after rope of cum spurts into his ass, and ropes more spill from his cock and spurt onto the bed and his thighs, spattering his skirt, stockings, and even the jeweled-heart over his chest.");
			writeText("When you both finally finish emptying your balls, he leans back into you, barely preventing himself from collapsing as he gasps in pleasure.");
			writeSpeech("meji","","E-Every time... It's like you make me cum my brains out~");
			writeText("He lets out a gentle giggle for a moment, before taking slow, deep breaths.");
			writeText("The two of you lay like that for a minute before he slowly gets up, your cock sliding out of him as he lets out another gentle moan.");
			writeSpeech("meji","","...Hey, uh, these clothes... Did you figure out whether they stain?");
			writeText("He looks down at the ropes of cum across his legs and skirt, looking a bit abashed.");
			writeSpeech("player","","It's probably fine, nagatoroF never seems to have issues with that.");
			writeSpeech("meji","","Hm... Alright, I'll take your word for it.");
			writeText("Slowly standing now, he stretches a bit before gesturing to the bed.");
			writeSpeech("meji","","We're probably gonna want to get started on cleanup, yeah?");
			writeSpeech("player","","Yeah, that sounds about right. That was good though - I really enjoyed that, mejiF.");
			writeText("He flushes slightly, nodding.");
			writeSpeech("meji","","Same here... Though, looks like we're gonna have to deal with the <i>evidence</i> of that fact~");
			writeText("He laughs slightly at that, and you two get to cleaning so as to be done before mejiF has to deal with classes again...");
			if (data.player.location == "gallery") {
				writeFunction("changeLocation(data.player.location)", "Finish here");
			}
			break;
		}
		case "mejiEnding" : {
			if(data.player.location == 'gallery')
				document.getElementById('output').innerHTML = '';
			writeHTML(`
				sp player; I swear, the more I improve my skills, the harder it seems to get to hypnotize myself.
				t The set-up takes a bit longer than you'd like, but when you're eventually satisfied, you nod to yourself.
				t You sent the text to mejiF a little bit ago, and you know he arrived by now. Which, of course, means he's probably ready for you to call him in wearing your 'gift'.
				t With no reason <b>not</b> to get things started already, you look to the door and call out,
				sp player; Alright mejiF, come on in.
				t The turning of the doorknob is slow, but his movements walking in are even slower.
				t He hesitantly steps out, though he seems to get a bit more confident in that outfit with each step. When he's standing in front of you, he smiles with more than a bit of embarrassment.
				im images/meji/fin.jpg
				t His hand moves to toy with his hair, twisting small circles softly as he looks at you.
			`);
			writeSpeech("meji","",""+(checkFlag('meji','club') ? "Did you get this from nagatoroF or something? It definitely looks like his style..." : "Where do you even buy this sort of thing? It's more revealing than being naked...")+" Not that I'm complaining or anything. It just feels... different.");
			writeHTML(`
				sp player; How I got it is a lot less important than how you look in it. And judging by how <i>excited</i> you look...
				t As you take a step forward, he brings his hand down to his back, standing a bit taller as he pushes his chest forward a bit.
				sp player; ...I'd say you <i><b>love</b></i> how it looks and feels on you.
				t You trace a finger-tip against the head of his dick, sliding it down the shaft... Then further down, until your hand goes between his thighs and your finger can tease at his hole.
				t As soon as you touch it, it's clear that you weren't the only one who took the time to prepare for tonight.
				t However, rather than fingering his lubed-up ass, you instead lightly brush your thumb against his chin and give him an order:
				sp player; <i><b>Kneel.</b></i>
				t There's no hesitation as he drops down, his breathing already picking up as he arches his back a bit, pushing out his ass as his lips hover right above the head of your cock.
				t He stops there, his warm breath on your cock feeling pleasant as he waits for another order.
				t He'll be waiting a bit, though, as riling him up as much as possible is where most of the fun is...
				sp player; You're really quite the excitable <i>bitch,</i> aren't you?
				sp meji; Yes *Sir~!
				t He smiles up at you, though the smile flickers somewhat when your hand moves to start stroking yourself. He looks confused for a moment, his gaze moving from your eyes to your cock.
				t The confusion fades away after a few seconds, replaced with a knowing hunger as he pieces it together. Loyally, he stays as close as he can to your cock without touching it as you stroke.
				t You can hear him swallow heavily when the first bead of precum forms from your head, and you watch him shudder when he sees it slowly move down to your shaft, before getting smeared about as you stroke.
				t When you're satisfied with the hungry, lip-biting look mejiF gives you, you finally move your hand away. As expected, he moves forward to bring his mouth to your cock, but your hand moves faster.
				sp meji; N-Ngh~
				t The sound of your hand across his cheek rings out, your pre undoubtedly adding to mejiF's embarrassment as he stops. And, of course, his own dick bobs gently, the embarrassment turning him on more and more.
				t You take a moment to gently run your thumb against where you struck him, and he leans into it gently as continues to look up at you with a smile.
				t A moment later, you give him a nod, and he begins.
				im images/meji/14-1.jpg
				t His lips press gently against your head, starting with a gentle, fluttering kiss before taking tip into his mouth. Maintaining eye-contact, he slowly starts bobbing up and down, only taking in the first inch or so at a time.
				t His tongue laps gently against the underside of your cock, his focus on the more sensitive glans feeling incredible as his gloves hands gently run along your thighs.
				t Sliding himself back and forth, he starts to slowly take more of your cock with each shift, coating more of your shaft with his spit, and letting each inch glide against his lips and tongue as he moans throatily.
				t You bring your hand to his face again, brushing some of his hair away as you look into his eyes.
				sp player; It feels good, doesn't it? It feels wonderful to <b>serve</b> me.
				t Another low moan goes through him, his body shuddering at your tone as your thumb traces a small line along his skin.
				sp player; But I already need to tell you that, do I? Getting off from pleasuring me is exactly how my toy should behave.
				t His cock bobs more and more as he picks up speed, taking you deeper into his mouth and back to his throat now, the pleasure overtaking him.
				t Luckily for him, you're feeling a bit pent-up yourself, and took quite a few steps to make sure you'd be able to cum all night long tonight.
				t As you get close to the edge, you let out a guttural, throaty moan as you look down at him.
				sp player; I'm about to cum... So go ahead. Cum with your *Master like a <i>good little <b>puppy.</b></i>
				t He lets out a shuddering moan as you buck your hips forward, your grunts almost drowning out his moans as your cock throbs in his mouth and you cum for the first time tonight.
				t Your first load spills into his throat as his own spills onto the ground. He pulls his head back a bit, thoroughly tasting and swallowing your cum with a satisfied look on his face.
				im images/meji/14-2.jpg
				t But you yourself are hardly satsified.
				sp player; Deep breath, puppy.
				t You give him just a moment to prepare, before grabbing his hair and pulling him down.
				t You sink ball-deep in the first thrust, mejiF's low moan of pleasure humming through your cock as you pull his head back a bit, roll your hips back, and then <b>thrust</b> again.
				t It's a rough, sloppy, and especially messy throat-fucking, but from the way his cock continues to dribble out drops of semen, that's only getting him off harder.
				t Each time his lips reach the base of your cock, the loud sound of his just barely gagging on your cock can be heard as you keep thoroughly fucking his throat like the privately-owned sex-toy it is.
				t It doesn't take too long for you to start rapidly approaching the edge again, and it's clear from the way his fingers grasp at your thighs that he can tell.
				t So, of course, you pull out.
				sp meji; <i><b><font size='+2'>G-Ghuh...~!</font></b></i>
				t A thick line of fluid connects your mouth to his cock as he looks up at you.
			`);
			writeFunction("writeEvent('mejiEnding2')","Order him to get on the bed")
			break;
		}
		case "mejiEnding2" : {
			document.getElementById('output').innerHTML = '';
			writeHTML(`
				sp player; Bed. <i>Now.</i>
				sp meji; Y-Yes *Master...!
				t You keep stroking your cock as you watch him move, staying near the edge as he gets up. He collects himself remarkably fast, before laying down on his back.
				t His legs go back as well, exposing his ass to you in a considerable feat of flexibility.
				im images/meji/14-3.jpg
				t You line your cock up against his hole, grasping his ass firmly as you grind against him, still straddling the edge as he lets out a shuddering gasp at your warm, wet cock pressed against him.
				sp meji; F-Fuck yes...!
				t His eyes roll up a bit as he quivers in anticipation, one hand moving to lift up some of his own cum to his mouth.
				t With a smile, you decide to scoop up the rest of his cum, your hand against his stomach making him squirm, before letting all of it spill down onto his hole.
				t His eyes go wide as you thrust a finger in, spreading and lubing up his hole with his own cum as you press against his prostate.
				sp meji; Holy shit, that's so <i>hot...!</i>
				t You grin down at him, leaning in now to whisper into his ear.
				sp player; I've spent this whole time edging, you know - just waiting to pop inside your hole. Your cum must feel nice inside you, but mine...
				t You line your cock up against his hole, before finally <b>thrusting</b> in.
				sp player; Mine feels <i>so much <b>better,</b></i> doesn't it?
				t You're barely half-way inside of him before you start releasing your load, mejiF's hands clenching tightly behind his head as he squirms and shakes.
				t His voice is clouded and floaty as he moans and says,
				sp meji; I-It's so much <i>w-warmer,</i> and <i><b>thicker...!</b></i>
				t You can't help but smile wider as you watch his cock bob again with each inch that slides into his ass, until you finally sink balls-deep and his cock dribbles out another few drops of cum.
				im images/meji/14-4.jpg
				t You take a moment to breathe deep as you relax a bit, his gently squirming ass gripping down on your cock, his walls practically stroking you off inside him even as you hold still.
				t But this wouldn't be "training" if you gave him too long of a break, would it?
				sp meji; <i><b>Nnnhg~!!</b></i>
				t You swing your hips backwards and forwards, the sounds of your hips slamming against his ass filling the entire room as he squirms in place, his ass still gripping tightly around you as you does his best to please you even while being overcome by the pleasure himself.
				t He keeps taking gasping breaths in time with your thrusts, but not a whisper of a complaint about the speed or force comes out of him - rather, as you keep getting rougher, his moans get louder.
				im images/meji/14-5.jpg
				sp meji; H-Hnnn...~!
				sp player; Distracted, are you?
				t You slow down for a moment, moving your hand forward.
				t As soon as mejiF opens his mouth to speak, you firmly squeeze his chest, grinding his nipple against your palm as he lets out a gasp.
				sp player; Don't tell me my toy can barely handle <i>this</i> much...
				t Your tone is playful as you look down on him. Each time he tries to speak, you either toy with his chest, or thrust balls-deep in one motion.
				t Again and again, his voice fails him as he squirms and shakes.
				sp player; ...At this rate, I might start worrying I might break you.
				t His eyes go wide, and you thrust forward again, but...
				sp meji; H-Hard!
				t You smile down at him, raising an eyebrow.
				sp player; Oh? Am I going too hard?
				t You know the real answer, but you still try to interrupt it with another swift thrust, your cockhead dragging against his prostate as his eyes roll up.
				sp meji; <i>Harder...!</i>
				t This time, you frown down at him.
				sp player; You know, when you can't phrase your requests properly, it almost sounds like you're trying to <i>give</i> the order, doesn't it?
				t You draw your hips back again, and wait until he opens his mouth to speak to swing forward, tweaking his nipples with your hands as you do, but...
				sp meji; I-I can take harder~!
				t Even while squirming and shaking under the pleasure, he still makes eye contact, shakily saying as you thrust,
				sp meji; Use your t-toy- your fuckhole <i><b>bitch</b></i> as hard as you like, p-please~!
				sp player; Such a polite <b>puppy.</b> How could I say no to that?
				t At that, you place your hands on his thighs and start thrusting with abandon. You've got at least a half-a-dozen shots in the tank for tonight, and you plan on dumping another inside his ass.
				t One hand continues to tease his chest while the other goes up to his mouth, your thumb sliding in as you hook it to the side gently. His heads leans slightly as he pants like a bitch, practically drooling as you use his ass like a sextoy.
				t He tries to gently suck on your thumb, but each thrust has him moaning too hard to result in anything but you getting to toy with his tongue as you get closer to the edge.
				t You pull your hands back to his hips as you go for faster, measured thrusts, pulling his body into yours with each movement, the ringing sound of your skin against his getting only louder.
				sp player; Take it, you slutty bitch...!
				t Gritting your teeth, you don't slow your thrusts for even a moment as you let out another load.
				im images/meji/14-6.jpg
				t His eyes roll back again as he orgasms with you, his mouth going wide in a silent orgasm, his entire body tensing and only a high mewl of sexual pleasure escaping him as you thrust.
				t The previous loads spill out as you thrust in and replace them, and after a few more seconds of heavy movements, you slow to a stop, and finally pull out.
				im images/meji/14-7.jpg
				sp meji; F-Fuck... Holy s-shit...
				t His eyes shut for a moment, before slowly opening back up.
				sp meji; That was... <i><b>incredible...</b></i>
				t You just respond by stretching out your back and saying,
				sp player; What do you mean "was"? Hands against the wall.
				t There's a look of shock in his eyes, before it quickly gets replaced with lust.
				sp meji; H-Hey... If you fuck me so good I can't even <i>stand</i> any more...
				t He swallows heavily, smiling.
				sp meji; That doesn't mean <b>stop,</b> okay?
				t You roll your eyes, rolling your shoulder.
				sp player; I said "against the wall", slut.
				sp meji; Yes *Sir~
				...
				t Once with his hands against the wall, twice with his <b>back</b> against the wall, and another pressing his face into the bed...
				sp meji; F-Fuck fuck fuck yes <i>fuck <b>please</b></i>
				im images/meji/14-8.jpg
				t And, of course, one more time after he can't even stand, because you're a *man of your word.
				t You roll your hips forward, lowering him down onto your cock pushing against him. Each thrust bucks him back upwards, his body practically limp against you as you keep using his hole again and again.
				t You're not even sure mejiF can even respond any more at this point, locked in a mind-melting barrage of pleasure as you whisper in his ear.
				sp player; I'm almost there... One last cumshot for the night, and you'll have done your job as the perfect sextoy whore.
				sp meji; Nnngh fuuuuck...~!
				t You gently nibble at the lobe of his ear, making him twitch slightly in your grasp.
				sp player; You're going to cum with me, right <b>puppy?</b>
				t He barely lets out a high-pitched whimper as bounce him up and down again, but that's probably as close to an affirmative as you'll get.
				sp player; Then you better get ready, because I'm gonna count down. And when I hit zero, you're going to spill <i>every last <b>drop</b> of cum inside you,</i> got it?
				t mejiF tries to nod, his toes curling slightly as you pick up speed.
				sp player; Three...
				t His cock begins to twitch more as you thrust up into him, your head gliding against his prostate with each thrust.
				sp player; Two...
				t Your grip on his thighs tightens as his gasping gets even louder, his moans getting higher as he starts to gently shake in your arms.
				sp player; One...!
				t His body tenses up sharply, every muscle going tight as he squeezes around your ass, the wild movements suddenly milking your cock for all its worth.
				sp player; <i><b><font ='+2'>Cum!</font></b></i>
				t His head rolls backwards as his eyes go wide.
				im images/meji/14-9.jpg
				t Even after cumming as much as you both had, the amount that you spurt out at the end is incredible as you unload your jizz into his ass. Each shaky spurt of his own cum comes with a milking squeeze of his walls around you, until you both are finally spent.
				t You just stand there for a bit, before you lift him just enough that you feel your cock slide out of him. mejiF shakily tries to lean forward, his deep gasping breaths all you can hear for what feels like a long while.
				im images/meji/14-10.jpg
				sp meji; T-Thank you... for using me, M-*Master...
				t You just as shakily take a few steps towards the bed, setting him down on it with as much control as you can... before letting yourself fall down next to him with significantly less control.
				t He tries to roll over to face you, but pauses when he feels your arm wrap around him.
				t There's a moment of silence, before he relaxes into you.
				sp meji; ...I enjoyed that... playerF.
				t You let out a sharp exhale through your nose, before pulling him in tighter to you.
				sp player; Get some sleep, mejiF. Paperwork's a bitch, and you're helping me tomorrow.
				t He lets out a soft, gentle laugh. You're pretty sure he intended some sort of witty comeback, but a second later, he's already out like a light.
				t You aren't far behind, honestly. It was a good, good night...
			`);
			if(data.player.location == 'gallery')
				writeFunction("changeLocation(data.player.location)", "Finish here");
			else
				writeFunction("writeEncounter('mejiFinaleEnd')", "Sleep for a nice, long time...");
			break;
		}		
		default: {
			document.getElementById('output').innerHTML = '';
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
}

var phoneArray = [//Lists the potential text events the player can receive at the start of the day, depending on their trust.
{index: "mejiReward", trust: 999,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	switch (name) {
		case "mejiReward": {
			if(checkItem("Leotard"))
				removeItem("Leotard");
			writePhoneImage("images/meji/fin.jpg", "Art by Nagi Ichi");
			writePhoneSpeech("meji", "", "You've finished all of mejiF's content for this version, congratulations!");
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