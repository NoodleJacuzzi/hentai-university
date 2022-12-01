var character = {index: "papi", fName: "Saffron", lName: "Hall", trust: 0, encountered: false, textEvent: "", met: false, color: "#AC4B54", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false,};

var logbook = {
	index: "papi", 
	desc: "A single mother living off her son's scholarship money in the apartment next to yours. Because of a past event her son is her entire world, and she seems satisfied with that.",
	body: "She has an unremarkable physique, but has a very approachable air around her. If she put more effort into her appearance she could easily look stunning.",
	clothes: "She doesn't have very many outfits for everyday use, instead choosing to wear cheap outfits and an apron for cooking.",
	home: "She lives in the apartment next to yours, and doesn't usually leave.",
	tags: "Mother/son incest, degradation, frotting",
	artist: "Silver Radish<br>Original image set: Oyako no Himitsu Kouhen 'Chichioya no Himitsu'",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "papiIntro", name: "You can introduce yourself to your neighbors", requirements: "?trust papi 0; ?location apartmentOutside;", altName: "", altImage: "",},
	{index: "crossoverPrompt", name: "You can visit papi again", requirements: "?trust papi 1; ?trust son 20; ?location apartmentOutside;", altName: "", altImage: "",},
	{index: "statusQuo1", name: "papi and sonF are home", requirements: "?trustMin papi 60; ?trustMax papi 100; ?location apartmentOutside;", altName: "", altImage: "",},
	{index: "statusQuo2", name: "papi and sonF are home", requirements: "?trust papi 20; ?location apartmentOutside;", altName: "", altImage: "",},
	{index: "finalQuo", name: "papi and son are home", requirements: "?trustMin papi 101; ?location apartmentOutside;", altName: "", altImage: "",},
	{index: "papiHotelBad", name: "Ask about papi", requirements: "?flag demon hotelBad; ?trust papi 666;", altName: "", altImage: "",},
	{index: "papiHotelGood", name: "Search for papi", requirements: "?flag succubus hotelGood; ?trust papi 666;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	writeHTML(`
		define black = sp Black Haired Succubus; im images/demon/dark.jpg;
	`);
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define papi = sp papi;
		define son = sp son;
	`);
	switch (name) {
		case "cancel": {
			unencounter('papi');
			changeLocation(data.player.location);
			break;
		}
		case "papiIntro": {
			setTrust("papi", 1);
			writeHTML(`
				t Feeling spontaneous, you decide to introduce yourself around the complex. Somebody here has got to catch your eye.
				im 130.jpg
				papi Oh, hello! Are you the new neighbor? I saw you moving in a while back.
				player I am. My name's playerF. It's nice to meet you, miss...?
				papi Ms. papiL. You can call me papiF though. If I'd known you were coming over I'dve made a housewarming gift-
				t *DING*!
				player Seems like your timer went off.
				papi Yes, I should get back in. My son's been so busy with his studies lately I'm sure he's forgotten to eat. 
				player I'm actually a counselor at the nearby university, so I can only wish you luck on that front.
				papi Oh, is it the one my son attends? My, that's quite the coincidence! If you happen to meet someone you think would, well... Err, It's not really important. Still, it's lovely to meet you! Feel free to visit again anytime.
				player Likewise.
				finish
			`);
			passTime();
			setTrust("papi", 1);
			break;
		}
		case "crossoverPrompt": {
			writeHTML(`
				im 130.jpg
				papi Hello again neighbor! I actually have something to offer tou this time, if you like pie that is.
				player Well, I can't say no to a homemade pastry.
				t papiF invites you in. She sets out three plates and takes a seat.
				papi Dear? There's food if you'd like, and we have a guest!<br>... Hmm, I suppose he's still busy studying. My son is quite the academic. Please, feel free to dig in.
				t ...
				t You finish eating, the pie was lovely. Apples taste a lot better when they're eaten in the company of a single mother. And when you're done you opt to help with the cleanup, noting that papiF's son still hasn't come out.
				papi So... I was wondering. Is my son doing alright at school?
				player I haven't seen much of him, why?
				papi Well, I was wondering if you could speak with him. A-although I don't have anything I'd like you to help him with in particular, just maybe you could speak with him a little?<br>O-or maybe I could hire you as a tutor?
				im 131.jpg
				t She fidgets at little, pulling at the fabric of her apron with nervous energy.
				player You seem on edge.
				papi W-well I was actually born male. It's not important of course, but for some people the subject is a bit of a dealbreaker, especially since you'll be in the house and-<br>Ohh, I'm oversharing, sorry. It's just hard to work that in naturally, but some people dislike if I take too long, and...<br>Oh...
				trans crossoverAccept1; Volunteer to help
				trans crossoverReject; Wish her luck
			`);
			break;
		}
		case "crossoverAccept1": {
			writeHTML(`
				player I can absolutely help. That's part of my job. Is he in right now?
				im 141.jpg
				papi Really? Just like that?
				player Of course, I don't see why not. And I can play the role of a tutor if it makes him feel more confortable.<br><i>Plus it's a great excuse to stick around too.</i><br>Is he in here?
				papi Yes! I think he's still-
				t You give the door a quick few knocks, which seems to set papiF on edge a little.
				son HIDDENCome in!
				im 223.jpg
				son I'm glad you finally learned how to knock, I was worried-<br>Eh?! It's you?
				papi Oh! You've already met?
				son This is the *guy I was talking about! The one who was creeping around the school!
				papi Darling, that's where *he works, helping troubled students-
				son I'm not troubled! Stop acting like I have a problem!
				t sonF quickly shuts the door, papiF just sighs. 
				papi Ohh...<br>Sorry, he really is kind at heart, he's just been under a lot of stress lately. I've tried to get him to speak with someone, but usually he says something along the lines of 'If I had the free time to talk to a therapist, I wouldn't have anything to talk with them about.'
				player A workaholic under pressure, no big deal. You go relax and I'll have another chat with him.
				papi Really?! Thank you so much! Okay, let me know if you need anything at all!
				trans crossoverAccept2; Give the door another knock
			`);
			break;
		}
		case "crossoverAccept2": {
			setTrust("papi", 60);
			writeHTML(`
				t *Knock knock knock*
				im 133.jpg
				son ... You're still here.
				player Yep. So, you're under pressure, deadlines to meet, probably have exams coming up, huh?
				son Yes, and that's exactly why-
				player Then let me help. We'll crunch out your backlog together and in exchange we can use any of the time we save to chat.
				son Look, no offense, but whatever psychology degree you have probably won't help me.
				player We'll just see about that.
				t ...
				player And so on this next one-
				im 134.jpg
				son It's cos(x), I know. These next few are derrivative of that, so...
				player Right.<br><i>Shit, I really wish I'd payed more attention in trigonometry...<br>Huh, he's really plowing through these, we're already doing work a few weeks ahead.</i>
				son Sorry. Again. 
				player Eh?
				son I jumped to conclusions when we first met. It was pretty scummy of me. And you're pretty good at your job, for what it's worth.
				player Sure, no worries.<br><i>Even though I haven't actually done anything...</i><br>How about we stop here? I can come back and help you out again another time.
				son I thought you wanted to chat?
				player My brain's fried, kid. Spend some time with your mom.
				son Ugh, you really are good at your job, I feel even worse about insulting you now.<br>How much did mum offer you? I'll pay you myself.
				player It's fine.
				son No, it isn't. If she pays you it's with my money anyways, and we'll get into an argument when she tries to justify spending the money I gave her on me.
				player You're kind of a softie deep down, huh?
				son Shut up and take my money! And then go home already!
				finish
			`);
			writeSpecial("You earned $20!")
			data.player.money += 20;
			updateMenu();
			passTime();
			break;
		}
		case "crossoverReject": {
			writeHTML(`
				player I'll look over your son's case file when I have the time, but it sounds like he's making his studies a priority right now. Just keep supporting him and everything'll turn out fine.
				papi Really? Alright, thank you! If you change your mind though, I'll be here. Take care neighbor!
				finish
			`);
			break;
		}
		case "statusQuo1": {
			writeHTML(`
				im 130.jpg
				papi Why hello again, neighbor! sonF's studying right now, would you like to come inside?
			`);
			switch(checkTrust("son")) {
				case 20: {
					writeHTML(`trans sonStudyFirst; Help sonF study`);
					break;
				}
				case 21: {
					writeHTML(`trans sonStudyRepeat; Help sonF study again`);
					break;
				}
				case 22: {
					writeHTML(`trans sonBlackmail; Help sonF 'study'`);
					break;
				}
				case 23: {
					writeHTML(`trans sonNips; Help sonF 'study'`);
					break;
				}
				case 24: {
					writeHTML(`trans sonAnal; Help sonF 'study'`);
					break;
				}
				case 26: {
					writeHTML(`trans sonFollowup; Check up on sonF`);
					break;
				}
			}
			writeHTML(`trans papiChatSelect; Chat with papiF`);
			switch(checkTrust("papi")) {
				case 60: {
					writeHTML(`trans papiDate1; Spend time with papiF`);
					break;
				}
				case 61: {
					writeHTML(`trans papiDate2; Spend time with papiF`);
					break;
				}
				case 62: {
					writeHTML(`trans papiBlowjob; Spend time with papiF`);
					break;
				}
				case 63: {
					writeHTML(`trans papiMaidFirst; Spend time with papiF`);
					break;
				}
				case 65: {
					if (checkTrust("son") > 25) {
						writeHTML(`trans papiRevealPrompt; Spend time with papiF`);
					}
					else {
						writeHTML(`trans papiMaidRepeat; Play with your slutty maid again`);
					}
					break;
				}
			}
			writeHTML(`trans cancel; Go back`);
			break;
		}
		case "sonStudyFirst": {
			setTrust("son", 21);
			writeHTML(`
				papi Oh, that would be so helpful! He was such an angel after you helped the last time!
				t ...
				t You opt to spend the day studying with sonF. Progress is actually quite great, and you're leaps and bounds ahead of the curve after only an hour.
				im 135.jpg
				papi How's it going? I-
				son Busy! And <b>knock</b>!
				papi R-right, sorry. Feel free to come out if you're hungry.
				son I will!
				t papiF gingerly shuts the door.
				player Damn, you've got a lot of anger stuffed in that tiny frame.
				son Don't call me short! And I wouldn't need to raise my voice if she would learn to knock already.
				player Why's it got you so on edge? You doing something regularly you don't want her seeing?
				im 224.jpg
				son ...
				player Oh?
				son Shut up. It's just that she needs to learn to respect my privacy. My scholarship is paying for the house. My flow state is too important to waste. Let's get back to work!
				t The two of you get back on track, you can't really make an opening for hypnosis, someone as no-nonsense as him probably won't go for the idea unless you have a solid plan.
				t After a while you call it finished for the day, and again you were barely able to keep up. Still, you made some money, maybe there'll be an opening next time?
				finish
			`);
			writeSpecial("You earned $20!")
			data.player.money += 20;
			updateMenu();
			passTime();
			break;
		}
		case "sonStudyRepeat": {
			writeHTML(`
				t You opt to spend the day studying with sonF. Progress is just as good as always, you wonder why he always seems so busy anyways.
				t That said, you notice he seems a bit distracted after a while.
				player Hey, you alright? You seem off your game.
				im 225.jpg
				son ... Stay here, I need to go do something.
				t And with a flushed face sonF leaves.
				player Weird kid. Oh, is this his phone?<br>Damn, password protected. Maybe if I...
				trans sonHackingSuccess; Try to break into sonF's phone ?skill hacking 2;
				trans sonHackingFail; Pass the time by chatting with papiF.
			`);
			break;
		}
		case "sonHackingSuccess": {
			setTrust("son", 22);
			writeHTML(`
				player Alright, let's see here... A digit passcode with no limits on attempts? Old fashioned, but whatever. Time to put my expert hacking skills to the test! One, one, one, one. Damn. One, one, one, two.
				t ...
				player Four, three, one, two... Oh! Nice! Let's see what kinda stuff you have on here...<br>Oh?
				im 151.jpg
				player Oh-ho-ho. What do we have here?
				im 144.jpg
				son Nff~<br>Hah~
				player Ho damn, some of these videos are hours long. Guess I know why he's always seemingly so busy. That might be what he's doing now...
				t You scroll through some of the videos, each involving him playing with himself, usually anally or tugging at his extremely modest dick, but you notice he never actually has an orgasm.
				player Hm. Well, this is pretty good and all, but I don't know if I could actually use this as blackmail. Anal's not really that taboo these days, so-
				im 145.jpg
				son Mommy~<br>More~
				player ... Jackpot.
				t You send some of the videos to yourself, this should be more than enough leverage.
				t Eventually, sonF returns from his little excursion, although there's not enough time left in the day to put your plan into action. The little man is pretty smart, so giving him a day to plan, or cutting your plans too short could turn out poorly, so you actually do your job properly one last time.
				finish
			`);
			writeSpecial("You earned $20!")
			data.player.money += 20;
			updateMenu();
			passTime();
			break;
		}
		case "sonHackingFail": {
			writeHTML(`
				player Well, nothing for it, hacking phones is beyond my skillset. For now.
				t ...
				papi And so then he runs off in nothing but his boxers...
				player Ha!
				papi Yes, in retrospect it's funny, but at the time I was horrified. I promised I'd be faster next-<br>Oh, sonF!
				son Sorry I took so long. Let's get back to work.
				t He took around twenty minutes, although he seem more relaxed than before.
				t And by the time you're done you still haven't found an opening. At least you got paid in the end though.
				finish
			`);
			writeSpecial("You earned $20!")
			data.player.money += 20;
			updateMenu();
			passTime();
			break;
		}
		case "sonBlackmail": {
			writeHTML(`
				t You opt to spend the day studying with sonF. Or at least, that's what he thinks.
				player Alright, what about this?
				son I already know the answer's ninety three degrees, are my calculations o-
				im 154.jpg
				son ...
				im 155.jpg
				son W-where did you... When did you...?!
				player Never leave your devices unattended.
				son You weasely shitbag, I'll-
				player "Mommy~"
				t That shuts him up real good. You can't tell if he's red with fury or embarassment though.
				player Look buddy, you won't believe me, but I swear, I really do wanna help you out. Your mom's a really nice lady.
				son If you touch her-
				player What, you'll get jealous? Anyways as I was saying, I've got your best interest at heart. I only need three sessions with you, and if you want me out of you and your mom's life after that? I'm gone, and these files are deleted too.<br>Either way I promise I'll give you what your heart <i>really</i> desires.
				son And how do I know I can trust you?
				player Would it help if I told you I'm a sucker for a cute momma's boy?
				son Grr...
				player Now, I find that teaching aides are very helpful in my line of work. How about you lose the attitude and point me towards the little friend helping you get off in the video?
				trans sonDressup; Continue
			`);
			break;
		}
		case "sonDressup": {
			setTrust("son", 23);
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "sonNips": {
			setTrust("son", 24);
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "sonAnal": {
			setTrust("son", 25);
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "sonMorning": {
			setTrust("son", 26);
			writeEvent(name);
			unencounter("papi");
			writeFunction("loadEncounter('system', 'newDay')", "Continue");
			break;
		}
		case "sonFollowup": {
			setTrust("son", 60);
			writeHTML(`
				player Hey there shortie! Care for some studying?
				son You again.<br>Why... Why can't I just be normal? Why do I have to get off on this weird fetish... Why can't I find the strength to call someone for help?
				player I dunno. Genetics? Some people are just born sluttier than others.
				son Then, my mom...
				player Well, there are other factors too. Obviously being a pushover is nuture too, not just nature.
				son When we started, you said you'd give me everything my heart desires...<br>Was that true?
				player Oh? Ohhh.<br>Finally owning up to your greedy side, huh? Good boy. I'll think about it, give me some time to set the stage.
				son ... Okay.
				trans cancel; Go back
			`);
			unencounter("papi");
			break;
		}
		case "papiChatSelect": {
			writeHTML(`
				papi Just chat? Well, I'm not exactly the most educated or charismatic woman around, but I think I can help pass the time a little. What did you want to talk about?
				trans papiChatHistory; How she ended up here
				trans papiChatSchool; About sonF's education
				trans papiChatFriends; About sonF's social life
				trans papiChatCouncil; About the PTSA council ?flag principal council;
				trans statusQuo1; Go back
			`);
			break;
		}
		case "papiChatHistory": {
			writeHTML(`
				player So, a single mom and a studious son, is there a story behind how you wound up in this town? If you don't mind me asking, I mean.
				papi sonF's mother and I... We had a falling out. She isn't around anymore, I took sonF and left.
				player Oof.
				papi I'm happy to say that part of my life is behind me. I found coping strategies in my secret hobby, and then at some point that hobby just became... Me.
				player Hey, at least he's got a positive female influence in his life now.
				papi Hehe, I suppose so~<br>We're actually here on his scholarship. I hope the stress doesn't get to him. 
				trans papiChatSelect; Go back
			`);
			break;
		}
		case "papiChatSchool": {
			writeHTML(`
				player So sonF certainly seems to have a good handle on his schoolwork.
				papi Oh yes! I had the principal herself write to me on the results of one of his larger projects! I was so proud I had the letter framed, but it got lost somewhere.
				player The praise could be resulting in more self-imposed stress.
				papi Oh, y-yes, it's just... I always feel like I should be encouraging him, but maybe that's a problem too. Young men his age should be making friends, enjoying life. I'm just not sure what to do.
				trans papiChatSelect; Go back
			`);
			break;
		}
		case "papiChatFriends": {
			writeHTML(`
				player So does sonF have any friends around school?
				papi No. Though I have heard him talk about your school's idol a few times.
				player Idol? We have one of those?
				papi He runs a club that sonF is interested in, or maybe he was trying to get one started? sonF seemed so down that he felt he didn't have the time to keep up with his studies and join.
				player And what about you?
				papi Me? Well, I mostly keep to myself. sonF keeps pushing me to go out and meeting people my age, but I don't think I really fit in around here. 
				player And you live off his scholarship, you have money of your own though right?
				papi He actually made me make my own account at the local bank and keeps giving to me, he says he wants me to go out and treat myself. He says it's just to get me out of the house and stop bothering him, but...<br>He's just pretending not to be my little sweetheart. He's the only one in town I'm really close to.
				player Well, you've made at least one more friend lately.
				papi Oh you. You're quite the sweet young *man, aren't you?
				trans papiChatSelect; Go back
			`);
			break;
		}
		case "papiChatCouncil": {
			writeHTML(`
				player Are you a member of the school council? You're a parent after all, and of a top-chart academic at that.
				papi Oh no, I could never... I certainly don't have the courage, let alone the presence. I'll find some other way to mingle. Maybe I'll go for a walk in the park later today?
				trans papiChatSelect; Go back
			`);
			break;
		}
		case "papiDate1": {
			setTrust("papi", 61);
			writeHTML(`
				papi Eh? You and me, go somewhere? But what about-
				player He's a young man at this point, a lot of his stress comes from feeling like he has to be your rock.
				papi Oh...
				player It's not a bad thing, it just means he cares. How about we spend some time together and give him some space on his own for today?
				im 120.jpg
				papi Ah. Th-this wouldn't be you taking pity on a lonely old spinster, would it?
				player It'd be me helping out a beautiful woman.
				im 121.jpg
				papi Eh?!
				t ...
				t The two of you have a nice meal together.
				papi It's nice not worring about sonF all day. Although-
				player Nope. Give him some space. I will say though, you're a great chef.
				papi Oh, thank you. I think I was always more cut out for the housewife lifestyle.
				t ...
				t And as the sun begins to set you take your leave, waving papiF off as you head home.
				papi My... *He certainly was-<br>Ah, sonF! Finally finished?
				son Yeah, I got hungry. Was that the counselor?
				papi playerF, yes, the two of us hung out... My, all day!
				son I see... Good for you.
				papi Oh? Is my little man jealous?
				son Shut up, I'm going back to my room.
				papi Wait, I'm sorry, come back! You shouldn't skip dinner like that!
				finish
			`);
			passTime();
			break;
		}
		case "papiDate2": {
			writeHTML(`
				papi Another day of relaxation? I certainly won't turn you down! 
				t ...
				t The two of you have another nice meal together, although you notice papiF keeps staring wistfully at you whenever you're speaking. That, plus the way she seems totally relaxed around you is sending clear signals.
				player <i>... Eh, what the hell. Fortune makes out with the bold.</i><br>papiF, I'll be direct. You're attractive, and I'm as far as you can possibly get from being a prude.
				papi O-oh my... Are you asking me to...
				player I am.
				papi A casual relationship...
				im 120.jpg
				papi Hm... I don't know. 
				player I won't go any farther than you're comfortable with.
				papi Well, to be honest, I've developed some... Eccentric tastes over the years, and I have a bad habit of not listening to my brain when I start to become... Aroused.<br>I might embarass myself...
				player papiF, flustered and shy? I can't <i>possibly</i> imagine that.
				papi You little flirt...<br>Okay, I'll agree, but only if we keep this... Relationship, separate from you helping sonF.
				player I'll be like a totally different person.
				papi Okay. Could we start with something a little bit... Strange? Nothing extreme, but...
				trans papiFrotting; Continue
			`);
			break;
		}
		case "papiFrotting": {
			setTrust("papi", 62);
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "papiBlowjob": {
			setTrust("papi", 63);
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "papiMaidFirst": {
			setTrust("papi", 64);
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "papiMorning": {
			setTrust("papi", 65);
			writeEvent(name);
			unencounter("papi");
			writeFunction("loadEncounter('system', 'newDay')", "Continue");
			break;
		}
		case "papiRevealPrompt": {
			writeHTML(`
				papi Ooh, of course! I'll get dressed right away~!
				t As papiF gets changed into her maid outfit, a devious idea crosses your mind.
				t sonF is already completely in your pocket, and from the sounds coming from his room it seems like he plans on playing with himself to the sounds of you and his mother.
				player Oh, you sweet, sweet piece of ass.
				t But you're in a good position now. It might be time to progress your relationship with papiF to the next level with her son's help...
				trans papi-sonReveal1; Hatch a plan along with sonF.
				trans papiMaidRepeat; Just fuck papiF again.
			`);
			break;
		}
		case "papiMaidRepeat": {
			writeHTML(`
				im 188p.jpg
				papi Ngh~! Ehehe~! You're so biiig~!
				player Shouldn't you be more quiet?
				papi Ngh~! S-sorry *master, this little kitten can't keep her mouth shut sometimes~! But I'll do better~
				player Oh?
				im 189p.jpg
				papi Oooough~! If you k-keep that up, I'll~
				im 191.jpg
				papi Cumming~! *Master's little maid fuckslut is cumming~!
				im 192.jpg
				papi Ehehe~ So warm~
				finish
			`);
			passTime();
			break;
		}
		case "papi-sonReveal1": {
			writeEvent(name);
			writeHTML(`trans papi-sonReveal2; Continue`);
			break;
		}
		case "papi-sonReveal2": {
			writeEvent(name);
			writeHTML(`finish`);
			setTrust("papi", 20);
			passTime();
			break;
		}
		case "statusQuo2": {
			writeHTML(`
				im 143.jpg
				papi Who? Who are-?
				player papiF! How're you holding up?
				im 142.jpg
				papi I've... I'm keeping busy. Did you need something? If not I'll have-
				im 140.jpg
				son Hey! You're already back!<br>Don't mind her, mom's been acting ditzy all morning.
				papi Eh? sonF? Why are you acting so cheery?
				son Because *he's gonna help you relax, duh! Like we talked about yesterday?
				papi Yesterday? What happened-
				im 199.jpg
				papi Ugh...
				son Just relax, mom. <br>Come on, let's get you sitting down.
				papi Actually, I'm not feeling well, playerF, could you lea-
				son <b>I wanna let *him inside.</b>
				papi O-of course, baby.
				son Good, now please make us something to eat, I have something important to talk about with playerF.
			`);
			writeHTML(`trans papi-sonBonding1; Continue`);
			break;
		}
		case "papi-sonBonding1": {
			writeEvent(name);
			writeHTML(`trans papi-sonBonding2; Continue`);
			break;
		}
		case "papi-sonBonding2": {
			writeEvent(name);
			writeHTML(`trans papi-sonBonding3; Continue`);
			break;
		}
		case "papi-sonBonding3": {
			writeEvent(name);
			writeHTML(`trans papi-sonBonding4; Continue`);
			break;
		}
		case "papi-sonBonding4": {
			writeEvent(name);
			passTime();
			setTrust("papi", 101);
			writeHTML(`finish`);
			break;
		}
		case "finalQuo": {
			if (checkTrust("papi") == 101) {
				writeHTML(`
					player Hello~
					papi Ah, w-welcome back.
					player Oh? Nervous to see me?
					papi I don't know what to say... Everything's been like a blur. 
					player Well, a lot's changed. Just roll with it, your relationship with your son will only go up from here, and you'll never have to repress your urges again.
					papi But... sonF-
					player Relax. This is what <b>your son wants</b>.
					papi O-okay.
					son Ah, you!
					player Well, glad to see you too. Still feisty as-
					t He quickly latches onto your side.
					son I'm not losing this time, come with me!
					player No dice, squirt. I decide when and who I play with.
					son Grr...<br>D-don't think I'll just accept you, alright? You've done a lot for me, but you're not taking my mom from me.
					player Relax, it's not like I need a ginger fleshlight <i>all</i> the time. She's your mom.
					papi That's right. Now let go of *master and-<br>Er...
					player Nope, you got it right. Now, I came here for a reason... 
				`);
				setTrust("papi", 102);
			}
			else {
				writeHTML(`
					papi Welcome back~
					son Here to play? 
				`);
			}
			document.getElementById('output').innerHTML += `
				<div id="wardrobeGrid" style="display:grid; grid-template-columns: auto auto auto;">
				</div>
			`;
			writeWardrobeOption("images/papi/151p.jpg", "papiFrottingRepeat");
			writeWardrobeOption("images/papi/156.jpg", "papiBlowjobRepeat");
			writeWardrobeOption("images/papi/184p.jpg", "papiMaidFinalRepeat");
			writeWardrobeOption("images/papi/177.jpg", "sonNipsRepeat");
			writeWardrobeOption("images/papi/183.jpg", "sonAnalRepeat");
			writeWardrobeOption("images/papi/214.jpg", "papi-sonRepeat");
			writeHTML(`
				trans papiNewChatSelect; Just talk with the two for now
				cancel
			`);
			break;
		}
		case "papiNewChatSelect": {
			writeHTML(`
				papi You came just to talk?<br>I... Sure. What's on your mind?
				player Don't sound so disappointed, I still might need my little pervert to get me off afterwards.
				papi R-right!
				trans newChatChange; Ask how have things changed around here
				trans newChatFuture; Ask the two what their plans for the future are
				trans newChatBath; ?flag miko brothel; Invite papiF to the mikoL bathhouse
				trans newChatClub; ?trustMin nagatoro 102; !flag son club; Invite sonF to the crossdressing club
				trans newChatCorrupt; ?trustMax papi 665; ?flag succubus newCorruption; Corrupt papiF and sonF 
				trans finalQuo; Go Back
			`);
			break;
		}
		case "newChatChange": {
			writeHTML(`
				papi Change... A lot's changed all at once...
				son Mom and I are getting along a lot better though!
				papi A-and no rent either. That plus the reduced stress from not needing to meet the exhausting scholarship requirements...
				son Those were the worst! I had to take double the number of courses, I had to write regular update emails to show what I was covering, the scholarships here are the worst I've ever seen...
				papi I can't... Can't think of anything else.
				son Well, every night now mom and I sleep in the same room, usually we-
				papi I don't think *master needs to know about that!
				player Still hesitant to talk about sex with your kid around, huh?
				son I'm not a kid anymore, I'm a man who can satisfy anyone in bed now!
				papi Oh... How did this turn out this way...?
				trans papiNewChatSelect; Go Back
			`);
			break;
		}
		case "newChatFuture": {
			writeHTML(`
				papi The future?
				son I'm gonna keep living with mom!
				papi Y-yes, but aside from that... I don't really have any plans. Not anymore...
				son I'll keep up at school, don't worry! And since we have free time now I can head out with you and we can make you some friends!
				trans papiNewChatSelect; Go Back
			`);
			break;
		}
		case "newChatBath": {
			writeHTML(`
				papi The bathhouse? The one in the park district?
				son Ooh, I heard they have open-air baths there! And that they're great for getting smoother skin! Mom, you and I-
				papi N-no. We can be... Together... At home. At this point I don't know what would happen if we did something like bathing together in public. There are lines too dangerous to cross out there.
				son ... Okay, I'll relent just this once. Still, I don't want to go bathing alone. playerF should come in with me.
				papi B-but...! 
				player I wouldn't leave either of you alone. If I have to take one of you, I'll take...
				trans papiBath; Take papiF
				trans sonBath; Take sonF
				trans papiNewChatSelect; Go Back
			`);
			break;
		}
		case "papiBath": {
			addFlag("papi", "bath");
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "sonBath": {
			addFlag("son", "bath");
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "papiBathRepeat": {
			writeHTML(`
				define papi = sp papi; im images/papi/bath.jpg;
				
				im images/papi/163a.jpg
				im images/papi/164a.jpg
				
				im images/papi/169.jpg
				
				im images/papi/170.jpg
				
				im images/papi/172.jpg
				
				im images/papi/173.jpg
				
				im images/papi/174a.jpg
				
			`);
			passTime();
			break;
		}
		case "sonBathRepeat": {
			writeHTML(`
				define son = sp son; im images/son/bath.jpg;
				t You decide to take sonF with you to the mikoL bathhouse. Hopefully the corruptive waters there will awaken something fun inside of him.
				t ...
				t You relax in the pool, the warm waters soothe your weary soul.
				player Hot water is nice, but it certainly does empty the head.
				son Gyah!
				im images/son/baths1.jpg
				son First the attendants, now you, why is everyone here so handsy?!
				player The attendants are loyal to me, just like your mom.
				son Hey! Mommy is loyal to me, not-
				im images/son/baths2.jpg
				son Houuu~!
				player Maybe, but we both know what <i>you're</i> loyal to.
				t The mikoL waters, muddied with the corruption of your soul have influenced sonF's mind and body. For him, it appears the bath's effects have manifested in an overwhelming sort of comfort, even with his leg lifted and his asshole being plowed, you can see he's starting to visibly relax.
				son Hoh... Hoh... *Daddy...
				player Hmm?
				t Unnatural energy flows through his frame, completely disolving his ego and anxiety beneath a wake of loving happiness.
				son *Daddy! Kiss!
				im images/son/sonBathRepeat.jpg
				t Normally far too bratty and snappy to even consider calling you that, the walls around his mind can't match up to pure, concentrated corruption and lust.
				im images/son/baths4.jpg
				son Mmm~! Cumming! 
				t With his entire body totally relaxed, you can thrust as hard and fast as you please without worry of hurting him. Soft, pliable, and completely yours from head to toe your slutty bottom partner meekly wiggles his tongue against yours as you slam your dick in and out of his greedy asshole with abandon.
				im images/son/baths5.jpg
				son HOOUUU~!
				player Good boy~
				t And as he sprays from the raw magic of corruption-fueled anal sex, the waters of the bathhouse grow more and more dark with your lust.
				son Hah... *Daddy... *Daddy's load feels so warm...
				miko Hello~? Are you two almost finished in there~?
				itako Need us to wash your back?
			`);
			passTime();
			break;
		}
		case "newChatClub": {
			writeHTML(`
				son W-what?! nagatoroF actually made his club?!
				player Yep, with the help of yours truly.
				papi That's wonderful sonF! And you have time to join them now! So, what do they do at this club?
				player Crossdressing sex. With me.
				papi ... Why was I expecting different? sonF, I think you could maybe-
				son <b>I wanna go</b>! You'll still let me, right?
				papi O-of course, baby...
				t ...
				nagatoro So, you've finally scrounged up the courage to join, huh?
				player You don't seem surprised.
				nagatoro I may have tossed the idea around to a few of the boys here who I thought would be a good fit for the club. This little squeaker went so red when I asked him about it!
				son S-sorry I couldn't join at the time...
				nagatoro Relax! I've learned lately I've got more than a few fans who get all stammery around me. Try not to stare too much though, the big pervert who brought you here does more than enough of that already. Now, let's see what fits you. You've got a smaller frame, so...
				t And so, sonF has joined the crossdressing club!
				finish
			`);
			passTime();
			addFlag("son", "club");
			break;
		}
		case "newChatCorrupt": {
			writeHTML(`
				player You two look a lot happier than when we first met.
				son Don't get too cocky! Me and mom were destined to be together.<br>You... <i>Did</i> help us out though.
				papi Even so, this sort of thing... It can't last forever, can it? sonF, you'll want your own house, a real girlfriend someday, a-
				son No! No no no! <b>I want you!</b>
				papi Of course baby...
				t As the two of them chatter you focus on the invisible mark on your hand. You <i>can</i> make this last forever, if you so choose. 
				trans papi-sonCorruption; Corrupt the pair
				trans papiNewChatSelect; Go Back
			`);
			break;
		}
		case "papi-sonCorruption": {
			writeEvent(name);
			writeHTML(`trans corruptionFollowup; Continue`);
			break;
		}
		case "corruptionFollowup": {
			setTrust("papi", 666);
			passTime();
			writeHTML(`
				succubus Hey! Wake up!
				player Eh? Wha-?
				succubus I came in here to congratulate you, but you fucked up in more ways than one. Next time do it one at a time and don't freak me out making me think you died!
				player Eheh... I thought it'd be more fun this way. Did it work?
				succubus They're both asleep. That's the second thing, you screwed up. You left a ton of femininity in the woman, she's still got tits for Lucy's sake.
				player I like her better as she is. No need to have <i>all</i> my succubi looking like tomgirl tramps.
				succubus Well... If you say so. I've never seen what happens if someone's still got some fem energy in them when they transform. Everyone I know of-<br>Oi! Don't you pass out on me! You may live next door but I'm not carrying your fat ass the way there! Up! Up!
				player I'm going, I'm going... Take care of the two for me...
				succubus Yeah yeah I'll make sure the bitch and the brat are none the wiser to their new stubby little cocktail shrimplets. Now scram!<br>Holy shit, this cowkini is nice... I wonder if...<br>Oi! OUT!
				finish
			`);
			break;
		}
		case "papiHotelGood": {
			writeHTML(`
				define son = sp son; im images/son/cattle.jpg;
				define papi = sp papi; im images/papi/cattle.jpg;
				im 219.jpg
				son Momma~! Momma~!
				player I see you two haven't changed much.
				papi playerF! You're awake!<br>Ah, sorry, I can't stop him when he's like this. So, you really turned us into demons?
				player Basically, yeah.
				im 220.jpg
				son Momma, cumming~!
				papi My my, you're getting so much better at holding it in~<br>Ah, thank you playerF, for everything. I feel like I've really found my calling. 
				player The hotel life suits you?
				papi Yes! There are so many roles I fit into here! Training the fresh succubi to hold in energy, cleaning up after everyone, pampering all the good boys here after a hard day's work-
				son Momma, again, again!
				papi I'm sure sonF would thank you too, but he's a bit indisposed. Will you be staying?
				player I will soon, I have to find succubusF for now. I'm sure you deserve a reward too for all your hard work.
				papi Oh my~
				son Hah~! Momma's tighter! It feels too goooood~! 
				finish
			`);
			break;
		}
		case "papiHotelBad": {
			writeHTML(`
				black Ah, the hag. Well, she wasn't invited to the hotel. demonF doesn't care for women you see, no matter what equipment she's wearing. That said, we have a few cameras on her, demonF said you'd want to be kept up to date. Let's see...
				im images/papi/144a.jpg
				black Ah, right. Last I checked up on her she was trying to make sense of what happened. 
				im images/papi/123.jpg
				black She went to Midnight Bliss and has since been trying to gather energy herself with anyone who will have her.
				im images/papi/126.jpg
				black Before he left demonF ordered us to make sure she doesn't make any solid headway. Most of the men she seduces are rewarded handsomely if they make her cum, wasting all her hard work!
				im images/papi/127.jpg
				black She makes a valliant effort to resist, she'd probably even manage to rise up the ranks if not for the intereference.
				im images/papi/128.jpg
				black But alas, she'll never even have the chance.
				im images/papi/129.jpg
				black If you want we could bring her into the fold, I'm sure it would be a delight to see her face when she realizes her son has been working as our gutter whore for months now~ 
				finish
			`);
			break;
		}
		case "papiFrottingRepeat": {
			writeHTML(`
				papi Okay... Why do I somehow feel more nervous than last time?
				im 146p.jpg
				papi Eep!
				player You say you're nervous, but you look just as excited as last time. Getting your wires crossed?
				son Mom...
				im 147p.jpg
				papi I... 
				player Even now I wonder where your limits lie.
				im 148.jpg
				player Hm~
				son H-hah...
				papi P-please, it's not like-
				im 149.jpg
				papi Hoh~
				im 150.jpg
				papi ...!
				son H-how... You look almost the same size, so why does she...?
				player Hands down, show your son the face of his piggy-slut mother!
				im 151p.jpg
				papi Ahh~! I'm sorry~! 
				player What are you sorry for?
				papi I'm sorry I'm such a whore for cock! I'm sorry my body won't get off unless I'm treated like pathetic trash! sonF! This is the real me!
				im 152.jpg
				papi Nggh~! Cumming~!
				t As if to show complete submission on an instinctual level to the superior member, her girlcock oozes a thick load of sperm that quickly starts to travel down and pool along her length.
				player Good girl. Now, let's get cleaned up.
				finish
			`);
			passTime();
			break;
		}
		case "papiBlowjobRepeat": {
			writeHTML(`
				papi I...<br>*Huff*...
				im 155p.jpg
				papi Why can't I resist you? What's wrong with me?
				im 156.jpg
				papi Hoh~
				player I guess the answer's pretty clear, huh? sonF, watch closely for when it's your turn. Your technique needs work.
				son L-like I'd ever... Ever want to...
				im 157p.jpg
				papi *Glrk*!
				player You know, this was one of her first requests of me. She wanted to be at my knees, sucking my cock while you were in the next room.
				papi *Mpphh*~!
				player What's that? You want it deeper? Rougher? Well...
				im 158p.jpg
				player I can provide!
				papi *Glllhf*<br><i>This feeling! What's happening to me?!</i>
				player Damn, your mouth is good!
				papi *Mph~!*<br><i>I'm...</i>
				im 159p.jpg
				papi Mmmph~!
				im 160.jpg
				im 161p.jpg
				papi Gyahh...<br>*Cough* *cough*
				player Good girl~ Now, what do you want next?
				papi I wanna stay like this a while longer... Sorry sonF, I'm messed up...
				son Hah~<br>Hah~!
				player Looks like you aren't alone.
				finish
			`);
			passTime();
			break;
		}
		case "papiMaidFinalRepeat": {
			writeHTML(`
				define papi = sp papi; im images/papi/maid.jpg;
				im 179p.jpg
				papi I... I still don't understand why you want me to do this in front of sonF...
				player Power dynamics turn me on. Now, come on, slut.
				son You shouldn't talk to her like that...
				im 181p.jpg
				papi Glhf~!
				player Good girl. Now, just for that sonF, I've decided I'm not satisfied with just your mouth. papiF?
				papi *Mwah*! Y-yes *master...
				t ...
				im 188p.jpg
				papi Khhh~
				player Face it, squirt, this is the kind of lost-cause slut your mother is.
				im 189p.jpg
				papi Hooough~!!! *He's right! I just can't help myself anymore! And I know you can't either!
				son ...
				player Good... Girl...!
				papi H-hheeek~!
				player Now, my little pet, go ahead and-
				im 191.jpg
				papi CUMMING~!
				im 192.jpg
				papi Eheh... Ehehe... 
				son Mom...
				papi You asked me before if I was happier lately since playerF came around... I really meant it when I said yes~
				finish
			`);
			passTime();
			break;
		}
		case "sonNipsRepeat": {
			writeHTML(`
				define son = sp son; im images/son/sweater.jpg;
				im 175.jpg
				player You really are so cute, right papiF.
				papi Y-yes... sonF, you-
				im 176.jpg
				son Quit it. It's my turn today, so just focus on me.
				papi ...
				player Oh? And why should I do that?
				son B-because...
				im 177.jpg
				son I'll do whatever you want, just for today...
				player Good answer.
				im 179.jpg
				son Hoh~!
				player Heh. Just licking your nipples makes you give off the most delightful sound, and yet you're still trying to stand strong.
				im 180.jpg
				son Ghh~!
				player Alright, let's head to your room next.
				son Yeah... Just you and me this time.
				t ...
				define son = sp son; im images/son/pigtails.jpg;
				im 159.jpg
				son H-hah... I feel so warm inside... Will it feel like this every time we have s-se... Sex?
				player Not necesarily. For instance, you're burning up despite the fact that we'll just be playing with toys today.
				son Wha?
				im 161.jpg
				son Hah~!
				im 162.jpg
				son Ghh~! Why are you... Teasing me?!
				player Oh, you think <i>this</i> is teasing? Squirt, you've got a long day ahead of you.
				t ...
				im 166.jpg
				son Hhh... It's not enough...
				player Almost an hour now... That should do for today.
				son W-why? Mom got exactly what she wanted...
				player That's because your mom asked nicely.
				son F-fine! Fuck my ass, make me cum like a little bitch while my mom is probably jerking off just outside the door, <i>PLEASE</i>!
				player Hmm... Maybe next time~
				son Fuck you!
				t Frustrated sonF rolls over, screaming and leaking into his sheets. As you leave the room you find papiF in the doorway, more than a little ashamed she was getting off from the sounds of you two.
				t You pat her on the head, the message is clear that she won't be allowed to relieve her son tonight, that bit of payoff is reserved for you and you alone.
				finish
			`);
			passTime();
			break;
		}
		case "sonAnalRepeat": {
			writeHTML(`
				im 181.jpg
				son P-please, please can we go all the way this time?
				player Hmmm~<br>You're not embarassed that your mom is listening in, dick in hand?
				son I'll be louder for her if you want me to...
				im 182.jpg
				player Nope!
				son ...!
				player Once a squirt, always a squirt.
				t For what must feel like forever to the through-and-through buttslut you relentlessly tease his puffy prostate, never hard enough to milk an orgasm out of him of course, and while he never vocally complains it's clearly taking a toll on his mind and body.
				player And now...
				im 183.jpg
				son Hah... Hah... Yes~
				player Not very dignified. What a shame, I guess the fight's over, huh? All that's spirit's gone out the window when a <i>real</i> orgasm's the carrot dangling in front of you.
				im 184.jpg
				son Ohhh! My Ass~! You're fucking my ass~!
				player You getting a good earful, papiF?
				son Don't think of her! Just! Me!
				im 185.jpg
				player Sorry, I forgot you're the jealous type. Good boy.
				son ...!
				player Oh, that got you to tighten. You're a good boy, sonF. I may like your mom's ass, but you're an irreplacable fucktoy to me too.
				im 186.jpg
				son Hah... Hah~<br>M-more please...
				player I know, I know, you're so, achingly close. You really have done a good job, squirt. Now...
				im 187.jpg
				son KHHH~!
				player Live up to that nickname!
				son Ghgonna~!
				player You're my little anal pet!
				son Cumming~!
				player And you love!<br>Every!<br>Second of it!
				son C-can't...! Stop...!
				t Thrust, thrust, thrust. You don't care that he's losing his mind as the orgasm goes on and on, a new one starting when one ends.
				t ...
				im 188.jpg
				player What a good little cumslut. Sleep tight, squirt, I'll send your mom in to clean up, you just get some rest.
				son ...
				finish
			`);
			passTime();
			break;
		}
		case "papi-sonRepeat": {
			writeHTML(`
				define son = sp son; im images/son/cattle.jpg;
				define papi = sp papi; im images/papi/cattle.jpg;
				im 214.jpg
				son Hah~! Hah~!
				player You! Precious! Brat! Giving me the fuck-me eyes right when I walk in the door!
				son Yes~! Please, harder, pound my prostate into mush so I can squirt harder~!
				papi I... M-*master, may I-
				player So hard you can't hold on anymore? Alright, if you're okay with treating your son as a jizzmop, then you can-
				im 215.jpg
				papi Yes~! P-please, darling, I need to cum so-
				im 216.jpg
				papi Haaaah~! I'm raping my own son's mouth!
				son Mpph~!
				player You! Precious <b>SLUTS~!</b>
				im 217.jpg
				papi AAAAH~!
				son MMMM~!
				im 218.jpg
				player Now. Who's load is bigger? Who's is more satisfying?
				son Mmm~<br>M-*master's~
				player Good answer, it's about time I got it too.
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

function writeWardrobeOption(wardrobeImage, encounter) {
	document.getElementById('wardrobeGrid').innerHTML += `
		<img class="bigPicture" id="`+wardrobeImage+`" src="`+wardrobeImage+`" title="Art by Silver Radish"
		onclick="writeEncounter('`+encounter+`')",
		onmouseover="wardrobeMouseOver('`+wardrobeImage+`')"
		onmouseout="wardrobeMouseOut('`+wardrobeImage+`')"
		style="filter:brightness(50%);">
	`;
}


var eventArray = [
	{index: "sonDressup", name: "Dressup Doll"},
	{index: "sonNips", name: "Teasing Touch"},
	{index: "sonAnal", name: "Breaking Point"},
	{index: "sonMorning", name: "Insatiable"},
	{index: "papiFrotting", name: "Frotting"},
	{index: "papiBlowjob", name: "Blowing"},
	{index: "papiMaidFirst", name: "Maid-ing"},
	{index: "papiMorning", name: "Morning"},
	{index: "papi-sonReveal1", name: "The Reveal"},
	{index: "papi-sonBonding2", name: "Family Bonding pt 1"},
	{index: "papi-sonBonding3", name: "Family Bonding pt 2"},
	{index: "papi-sonBonding4", name: "Family Bonding pt 3"},
	{index: "papi-sonCorruption", name: "Family Bonding pt 3"},
	{index: "papiBath", name: "Bathhouse Waters - Single Mother"},
	{index: "sonBath", name: "Bathhouse Waters - Mama's Boy"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "sonDressup": {
			writeHTML(`
				define son = sp son; im images/son/pigtails.jpg;
				player Ho-ly shit.
				son ...
				player And there's another one!
				im 157.jpg
				player Seriously, how many of these things do you need?!
				son You're gonna die.
				player Of what, second-hand embarassment?
				im 158.jpg
				son Just stop it already! Why are you doing this?!
				player Lighten up, I'm just having a little bit of fun. Plus, this is actually pretty informative.<br>All these toys at just the slightest different bit of an angle. Everything in this box is screaming "I desperately want to have an anal orgasm, and I'm so close, but all these are just barely the wrong size!"
				son You're wrong!
				player No, you're wrong. A hands-free orgasm isn't comes from the heart, not the wallet.
				son What the hell does that even-<br>Waaaah!
				im 159.jpg
				player You thought that you were just barely off, that being on the edge of orgasm meant you just needed a little bit of pressure on a different spot, a little bit more speed, more vibration. But you weren't on the edge, you were hitting a wall.
				son Gahh!
				player The same wall every would-be anal slut hits. Fancy toys aren't the answer. When you hit that wall, what you need...
				im 161.jpg
				son Ghhh~!
				player Is to break right through it! No half measures, you'll be an anal queen and there'll be no excuses!
				im 162.jpg
				son Y-you psycho! I'll k-kill... You!
				im 163.jpg
				t *Knock knock knock*
				son N-no...
				papi Dear, I made you and playerF some coffee! And I remembered to knock this time!
				son N-not now mom!
				papi But-
				im 164.jpg
				son I s-said not now!
				papi Alright... Please, take care of yourself, alright honey? I love you.
				son I... I love...
				im 165.jpg
				son Mmm~! Mom~!
				im 166.jpg
				player ... Sounds like she's gone.
				son <i>H-how?! I've never been able to reach one, without touching, not even once...!
				player Man are you lucky. The one time she remembers to knock, and... What's with that look on your face?
				son H-how... How did... Why did it...
				player Feel so good? Lets be real, someone who develops hobbies like yours, and who's got a body like yours, probably isn't built for the normal kind of self-pleasure. This is what your body wants.
				t You lean in close as he takes a ragged breath.
				player And I intend to become very familiar with this body.
				t ...
				papi Oh! Are you and sonF finished?
				player Yep! He's laying down for a quick nap. He'll probably be pretty hungry when he wakes up though.
				papi A nap? Got it. Thank you so much! Please feel free to come back anytime!
				player No problem, no problem at all. I look forwards to dropping by again soon.
				t <i>Meanwhile...</i>
				son C-can't... C-cum... Anymore...
			`);
			break;
		}
		case "sonNips": {
			writeHTML(`
				t You let papiF know that you'll be studying, and not to bother you.
				t ...
				im 174.jpg
				son ...
				player ...
				son Ghh... Just get on with it already! I can't focus!
				player Oh? Just a taste and you already can't wait for more?
				son I just can't wait for the third session so I can be done with you.
				player Sure, sure. Up against the wall, pants off.
				t ...
				player You're adorable, you know that?
				define son = sp son; im images/son/sweater.jpg;
				im 175.jpg
				son You're disgusting, you know that?
				player You're so cute, it'd be impossble to tell you're male just by looking at you.
				im 176.jpg
				son ... Your breath stinks.
				player Oh man, that cuts deep. I'm donna need to see something nice to lift my spirits.<br>Shirt, or should I say, dress, up.
				im 177.jpg
				son ... How long are you going to tease me like this? Why can't we just get this over with and skip ahead?
				player Oh poor little sonF. You don't know your body as well as you think you do. I told you I'd help you, and I will. I'm going to properly educate you on how to be a proper buttslut, and an overlooked step of anal play is when <i>not</i> to play with your ass.
				son ...
				t ...
				im 178.jpg
				son Ghh...
				player Are you really going to keep pretending like this isn't affecting you? You're sweating so much you look like you've been jogging during a heat wave.
				son This... Is... Nothing!
				im 179.jpg
				son Hoh~!
				player Heh. Just licking your nipples makes you give off the most delightful sound, and yet you're still trying to stand strong.
				im 180.jpg
				son Ghh~!
				player Alright, we're done now.
				son W-what?!
				player Yep, that was session two. Try not to snap waiting for the big finale.
				son I can't wait... For this to be over...
			`);
			break;
		}
		case "sonAnal": {
			writeHTML(`
				define son = sp son; im images/son/sweater.jpg;
				t You let papiF know that you'll be studying, and not to bother you.
				t ...
				son Oh no...
				player Oh no? Were you expecting anything less?
				im 181.jpg
				son P-please, can't we do something else?
				player Hmmm~
				im 182.jpg
				player Nope!
				son ...!
				player Too cold for you? Or maybe that shivering is from something else~<br>After how we left off last time, were you able to get off on your own?
				son N-no!
				player Tsk tsk, you must not have tried very hard then. Oh well, that'll just make this final step more fun for both of us.
				t For what must feel like forever to the soon-to-be buttslut you relentlessly tease his puffy prostate, never hard enough to milk an orgasm out of him of course, and while he never vocally complains it's clearly taking a toll on his mind and body.
				player And now...
				im 183.jpg
				player It's my turn to enjoy myself. Any last words of farewell to your virginity?
				son Hah... Hah...
				player Not very dignified. Can't focus? Let's bring your head...
				im 184.jpg
				son Ohhh!
				player Back down to Earth!<br>How would your mom react if she saw you now? 
				im 185.jpg
				son ...!
				player Trying to keep quiet? Sorry, but that won't last. Because! I don't! Fuck! Gently!
				son I... I...!
				im 186.jpg
				son Hah... It's... O-over?
				player I know, I bet you're so, achingly close. Probably on the edge of complete submission, huh? But at least like this there's a <i>chance</i> you'll go back to your boring, ordinary life after this.
				son ...
				player Every day, frustrated and consumed by your inability to get off with your ass, and disappointed in how getting off with your dick feels. Most of your free time either spent masturbating or wishing you could be playing with yourself, never to find relief.
				im 187.jpg
				son KHHH~!
				player Just! Kidding!<br>You'll be leaving your old life behind! 
				son Ghgonna~!
				player You'll be my little anal pet!
				son Cumming~!
				player And your mom's next!
				son Hoooh~!
				player And you'll love!<br>Every!<br>Second of it!
				son C-can't...! Stop...!
				t Thrust, thrust, thrust. You don't care that he's losing his mind as the orgasm goes on and on, a new one starting when one ends.
				t ...
				im 188.jpg
				player <i>Huh, papiF didn't hear that after all. Well, not a huge issue, I would have just hypnotized her after she fainted from shock.</i>
				son ...
				player Oh right, can you even hear me? That whole 'three sessions' thing? I was lying. See you soon!
				im 189.jpg
			`);
			break;
		}
		case "sonMorning": {
			writeHTML(`
				t <i>Meanwhile, in the papiL household...</i>
				son It won't stop... Building up again...
				im 144.jpg
				son M-mom... I'm sorry~
				im 145.jpg
				son I can't reach it... How did *he make me...?<br>I can barely remember, but I feel like *he changed me somehow, just r-remembering being dominated like... Like that~!
				im 147.jpg
				son Leaking~!<br>*He really did... Help me out... And *he's gone now...<br>But... I feel like my life as it used to be is over...
			`);
			break;
		}
		case "papiFrotting": {
			writeHTML(`
				papi Okay... Alright, let's head into my room a get a little more comfortable.
				t ...
				player So, what did you have in mind?
				papi Well, I don't want us to go too far right away, but I also...
				player You have your own tastes, I gotcha.
				player Spit it out, I won't judge.
				papi In most of my fantasies, I like *guys who are... Mean, and a little rough too...
				player Hm.
				papi S-sorry, if you don't want to, then we can-
				im 146p.jpg
				papi Eep!
				player Mean, huh? Degradation? Humiliation? What expectation do you have right now that's got you bulging at the seams?
				im 147p.jpg
				papi I... 
				player Should I call you a slut? A perverted whore shamelessly showing off her body to someone she just met? I wonder where your limits lie, let's see if I've gone too far...
				im 148.jpg
				player Hm~ I guess not~
				papi I... You seem experienced at th-this sort of thing...
				player And if I didn't know better, I'd say you were a virgin.
				papi Nhh...
				im 149.jpg
				player You know, honestly, it's not a bad size, but...
				im 150.jpg
				papi ...!
				player Comparing my dick to yours really makes it clear who the top among us is. Show me your face, slut.
				papi Hah~!
				player Show me. <b>Now.</b>
				im 151p.jpg
				papi Ahh~! I'm sorry~! 
				player What are you sorry for?
				papi I'm sorry I'm such a whore for a real cock! I'm sorry my body won't get off unless I'm treated like pathetic trash! I... I'm sorry that I'm...!
				im 152.jpg
				papi Nggh~! Cumming~!
				t As if to show complete submission on an instinctual level to the superior member, her girlcock oozes a thick load of sperm that quickly starts to travel down and pool along her length.
				player Good girl. Now, let's get cleaned up. This kinda stuff really sets you off, huh?
				papi Nhh... I'm not proud of it, but yes. It used to eat me up inside, but at my age I've just learned to accept what affects my body, and even enjoy it.
				player <i>Hmm. Sounds like something definitely happened to papiF in the past that made her develop a pretty strong humiliation fetish. I wonder if it's related to sonF's biological mom?</i>
				papi H-honestly I'm glad sonF didn't grow up with tastes like mine... I'm proud he grew up to be so responsible.
				player Hey, you did fine raising him, cut yourself some slack.
				papi Thank you... Could we do this again sometime?
				player No problem.
				t ...
				son So, *he's gone already?
				papi Yes, now come on and eat something, you must be starving!<br>Ah, he said he'd be back again soon by the way.
				son ...
			`);
			break;
		}
		case "papiBlowjob": {
			writeHTML(`
				papi S-spend some more time together? I'd love to. Do you think we could, ah...
				player I think I know what you're getting at~<br>Well, I wasn't planning on it, but if lady libido demands I perform, I'll accommodate.
				t ...
				player You sure? This doesn't seem little one-sided to you.
				papi I...<br>*Huff*...
				im 155p.jpg
				papi I'm very sure this is what I want.
				im 156.jpg
				papi Hoh~<br>You know, with a tool like this, you could probably have anyone you want...
				player I'm taking what I want right now. Or did you think I'd let you hesitate forever?
				papi Well, I thought I could maybe take my time, and-
				im 157p.jpg
				papi *Glrk*!
				player Look at you, you could have asked for anything, and you chose to be on your knees, getting off on servicing me.
				papi *Mpphh*~!
				player What's that? You want it deeper? Rougher? Well...
				im 158p.jpg
				player I can provide!
				papi *Glllhf*<br><i>This feeling! What's happening to me?!</i>
				player Damn, your mouth is good!
				papi *Mph~!*<br><i>I'm...</i>
				im 159p.jpg
				papi Mmmph~!
				im 160.jpg
				im 161p.jpg
				papi Gyahh...<br>*Cough* *cough*
				player Good girl~
				papi W-wait... I wanna stay like this a while longer... Sorry, I'm messed up...
				player It's no problem. It's pretty normal for some people to develop tastes they aren't proud of after a big event in their lives.
				papi But...
				player Hey, who's the liscenced counselor here?
				papi Y-you.<br>You're right. I shouldn't be so ashamed of it, this is just who I am...
				player Well, you should be a <i>little</i> ashamed, on account of you being a dirty little slut.
				papi Eep!
				t ...
				son Do you... Smell something weird?
				papi E-eh? Oh, I made a mess earlier while cooking, I thought I cleaned it all up, sorry.
				son playerF, the counselor was here right, I was... Studying, for most of the day.
				papi Yes *he was, *he's quite lovely when you get to know *him.
				son Mhm...
			`);
			break;
		}
		case "papiMaidFirst": {
			writeHTML(`
				papi S-spend some more time together? I'd love to. Actually, I had somethin special in mind. Could you step out for just a moment?
				t ...
				define papi = sp papi; im images/papi/maid.jpg;
				im 177p.jpg
				papi M-maybe this is going too far... You're a mother. A single mother, in a casual sex relationship with a younger *man, getting off to the same kind of things that... This is...
				im 178p.jpg
				papi Th-this is honestly pretty pathetic of me~<br>B-but *he accepts me, so...<br>Sorry sonF, I really am a pervert at heart. I guess your m-mom was right about me...<br>Don't think about it, don't think about it... Okay, here we go...
				t ...
				son <small>Mom? You out here?</span>
				player Oh, seems like sonF is looking for you, you'd better keep quiet, or...
				im 188p.jpg
				papi Khhh~
				player He might just realize what a lost-cause slut his mother is.
				papi I can handle... This much...<br><i>sonF... Hurry up and...</i>
				son <small>Guess she and playerF went out. Maybe they're still around the building.</span>
				player Aaaand... Okay. He's gone.
				papi Hah... Th-thank-
				im 189p.jpg
				papi Hooough~!!!
				player Good girl, keeping your mouth shut, but he could be back any minute now.<br>Tell me, little pervert, do you think you can possibly manage to cum before he gets back?
				papi Th-that doesn't matter~
				player Oh?
				papi A-all that matters... Is if I can satisfy <i>you</i> in time, *master!
				player I see! You've been holding back, haven't you? You're such a loyal maid. Well, luckily for you I'm generous, so.
				im 190.jpg
				papi H-hheeek~! A-are you-?
				player Yes I am, my little pet, go ahead and-
				im 191.jpg
				papi CUMMING~!
				im 192.jpg
				papi Eheh... Ehehe... I think... I think we might have enough time for another, right? A good maid should never leave their master wanting, after all~
				t ...
				define papi = sp papi;
				son Nowhere on the block... Eh?
				papi There you are! Goodness, I was so worried! Let's go home.
				son <i>You</i> were worried?! I... Ghh. Whatever.
				papi Come on, let's get you something to eat. We could try eating out today if you want.
				son You seem happier.
				papi Hmm? Well, I had a good day today.
				son I mean in general. You seem happier ever since playerF started hanging around.
				papi I do? Yeah, I guess I am happier.
				son ...
			`);
			break;
		}
		case "papiMorning": {
			writeHTML(`
				define papi = sp papi; im images/papi/maid.jpg;
				im 179p.jpg
				papi G-good morning!
				player ... Morning.
				im 180p.jpg
				papi ... I thought this would be a good idea at the time. S-since I woke up early, I mean.
				player Well? Get on with it.
				papi At once, *master.
				im 181p.jpg
				papi Mpph~
				player You're really into the *master-servant play, aren't you?
				papi Mmm~<br>I can't help what turns me on~<br>N-now just relax and let all your worries wash away...
				im 184p.jpg
				papi *Mwah*~<br>If it pleases you, you can do whatever you like with my body, you know... I'm yours for the taking~
				player Is that so? And why do I get the impression that more of <i>this</i> is exactly what you're hoping I'll ask for?
				papi Ehehe~<br>Mph~!
				im 185p.jpg
				player Ngh~!
				im 186p.jpg
				papi Mmm~
				player Gotta say, this isn't a bad way to wake up.<br>... papiF?
				im 187p.jpg
				papi Mmmhmhmhm~
			`);
			break;
		}
		case "papi-sonReveal1": {
			writeHTML(`
				define papi = sp papi; im images/papi/maid.jpg;
				im 188p.jpg
				papi Ngh~! Ehehe~! You're so biiig~!
				player Shouldn't you be more quiet?
				papi Ngh~! S-sorry *master, this little kitten can't keep her mouth shut sometimes~! But I'll do better~
				player Oh?
				im 189p.jpg
				papi Oooough~! If you k-keep that up, I'll~
				im 191.jpg
				papi Cumming~! *Master's little maid fuckslut is cumming~!
				im 192.jpg
				papi Ehehe~ So w-
				son So.
				im 193.jpg
				papi ... sonF<br>playerF, m-move!
				son This is why *he stuck around for so long, huh?
				papi N-no! It's not what you think, I swear!
				im 194.jpg
				son Really? Because it looks like my mom's giving her body to someone she hardly knows.
				papi No! I... I don't...
				player Alright sonF, you're up next.
				son Gladly.
				papi Wh-what? What's...?
				im 195.jpg
				papi sonF? What are you...?
				im 196.jpg
				papi I... What?
				t <i>"Aww, cmon! You're always getting off to cuck stuff, I've seen your web history. I thought you'd like the little present!"</i>
				im 197.jpg
				papi Why? Why?!
				t <i>"Be real! He's just way more of a man than you are!"</i>
				im 198.jpg
				papi Ah... Ahah... Ahahah!
				t <i>"You can take the kid. Make sure he grows up normal, or whatever. Although, with a dad like you..."</i>
				im 199.jpg
				papi Ahahah!!!
				t ...
				son Mmm, is she okay? I didn't think she'd break down like that.<br>She is okay, right?
				player You little softie. Yeah, she's fine. It seems like a sore spot in her past came up.
				son You said she'd just pass out, and then-
				player Relax, it's fine. Hold her up, say some relaxing things to her while I grab...
				son Is that a pendant?
				player Yep. She's shocked out of her mind, and now she just needs a calm guiding hand to help her out of this mess. And if that hand just so happens to lead her to our way of thinking, well~
				son Okay. But don't think I'll just give her away to you afterwards... She's still <i>my</i> mom.
				player Relax. You can have some input over how she turns up. Oh, remind me after we're done for me to drop by the landlord's place.
			`);
			break;
		}
		case "papi-sonReveal2": {
			writeHTML(`
				define papi = sp papi;
				papi Mmm...
				son Good morning mom~!
				papi Eh? sonF? Was I... Wah!
				t papiF flounders on her bed for a moment.
				papi Eh? I'm in my normal clo-<br>Err, what happened to... What was I doing again?
				son You fell asleep! Hey, the landlord came by, she said we don't have to pay rent anymore!
				papi What?! Are we-
				son We can live here for as long as we want! I don't have to keep up with the scholarship's requirements anymore!
				papi That's great honey... B-but your school-
				son <b>I wanna stay home today! And tomorrow too!</b>
				papi Of course, baby.<br>E-eh? Why did I suddenly agree...
				son Hehe. <b>I wanna sleep in your bed tonight!</b>
				papi Of course, baby.<br>Eh?!
			`);
			break;
		}
		case "papi-sonBonding1": {
			writeHTML(`
				papi I wonder what they're talking about in there...
				t ...
				son Give mom to me.
				player You really think you can keep her satisfied, huh?
				son Yeah. You already had your time with her. Now that she's been affected by your magic, I'm all she needs.
				player Oh? And why would I just walk away now?
				son Because you played your hand too early! I only kept you around because I was worried what would happen if mom found out, but now she'll stay with me forever no matter what. You lose.
				player Oh no. How ever could I have foreseen this.<br>Listen kid, I'll cut you a deal.
				son Another deal, huh? I know better than to trust you.
				player But if you don't, maybe I'll just use my hyp... Magic, on you next.
				son Gh...
				player It's simple. We have a night of fun. You take your turn with papiF, then I take my turn. If <i>you</i> decide you don't want me around afterwards, I'll leave you and your mom alone forever.
				son ... Deal! Heh. You said I'd be the one to decide, idiot! No take-backs!
				player No take backs.
				son Alright! 
			`);
			break;
		}
		case "papi-sonBonding2": {
			writeHTML(`
				define son = sp son; im images/son/cattle.jpg;
				define papi = sp papi; im images/papi/cattle.jpg;
				papi Ah~! Honey, where'd you even find these?
				son Mmm~
				im 200.jpg
				papi Baby, I can't... You're grinding so hard against me... This isn't right... Right?
				im 201.jpg
				son Mmm~!
				papi H-honey, what's got you so worked up? You should take it more slowly, if you rush-
				son Sh-shut up! I'm gonna... We're gonna cum together...!
				papi Baby, that's not how it w-
				son <b>I WANNA CUM WITH YOU!</b>
				im 202.jpg
			`);
				writeDual("son", "", "papi", "", "Mpphh~!<br>Oooough~!");
			writeHTML(`
				papi Hah... Hah... What just...?
				son *Huff*... *Huff*...
				im 203.jpg
				papi It... It doesn't really matter anymore, does it...?
				player Alright you two lovebirds, make room.
				son M-mom. He's gonna try and take you away from me...
				papi Oh, honey... That could never happen.
				son Do you promise?
				papi I promise, I'll be here for you forever, okay?
				son Okay. Alright playerF, do your worst...
				player I plan to.
				son Wh-wha?!
			`);
			break;
		}
		case "papi-sonBonding3": {
			writeHTML(`
				define son = sp son; im images/son/cattle.jpg;
				define papi = sp papi; im images/papi/cattle.jpg;
				son Hah~! Hah~!
				player You. Stupid. Brat.<br>Did I ever say I'd take my turn with papiF?
				im 214.jpg
				son Haaaah~! I just came, but...!
				player Stupid bitch, you know a body like yours is built for anal, not grinding that useless fuckstick on your mom's cock.
				papi You sh-shouldn't talk to him like that...
				player And you! Shut up and come closer.
				papi ...
				im 215.jpg
				player Sitting there, wishing you could jerk off to your own son getting assfucked. This is your mother, sonF. She's just meat to get fucked.<br>You <b>need</b> me. This passive bitch could never satisfy you for long.
				son N-no~! I d-don't...!
				player I see. papiF, shut him up until he sees reason. I know you can't hold back any longer.
				papi B-baby... I'm so sorry... But *he's right...!
				im 216.jpg
				papi Haaaah~! I'm raping my own son's mouth!
				son Mpph~!
				player Now! Learn! Your! <b>PLACE~!</b>
				im 217.jpg
				papi AAAAH~!
				son MMMM~!
				im 218.jpg
				player Now. Who's load is bigger? Who's is more satisfying?
				son Mmm~<br>M-mommy~
				player Hmm?
				son Mommy~! <b>I wanna 'nother chance~!</b> On the bed!
				papi Of course, baby.
			`);
			break;
		}
		case "papi-sonBonding4": {
			writeHTML(`
				define son = sp son; im images/son/cattle.jpg;
				define papi = sp papi; im images/papi/cattle.jpg;
				player Good god, you two are like rabbits.
				im 219.jpg
				son Mommy~!
				papi Baby~!
				son I... I can't hold on...!
				im 220.jpg
				son Nggh~!
				papi That's it, honey, just let it aaaaall out.
				son Hah~!
				papi You did very well, darling. Now-
				im 221.jpg
				papi Aaah~<br>*Master's cock~
				player Looks like she likes mine a lot more, squirt.
				son Ehehe~ Feels sho gewd~!
				player There really is no getting through to you, is there?
				papi He's trying his best though.
				im 222.jpg
				papi Mmm, like this honey, tease the head.
				son Ehehe~
				im 224p.jpg
				player Hhnn. There.
				son Waaaarm~!
				player You really dove right off the deep end. Looks like I'll be sticking around with you two a lot longer~
				son Yes~!
				papi Oh my, so much enthusiasm!
				player Now move, and make room already!
				im 225p.jpg
				t ...
				t And with that, the night looks to go on forever. It takes what feels like hours to exhaust the pair, and something tells you they'll be on each other again by the morning, but you're spent and ready to head home.
				t ... Hopefully they won't make <i>too</i> much noise in the night.
			`);
			break;
		}
		case "papiBath": {
			writeHTML(`
				define papi = sp papi; im images/papi/bath.jpg;
				t You decide to take papiF with you to the mikoL bathhouse. Hopefully the corruptive waters there will awaken something fun inside of her.
				t ...
				t You relax in the pool, the warm waters soothe your weary soul.
				t ... Or something like that.
				player Hot water is nice, but it certainly does empty the head.
				papi I'm coming in...
				im images/papi/163a.jpg
				papi The attendants here are... Very friendly.
				player Did they pick that outfit for you?
				papi W-well...
				im images/papi/164a.jpg
				papi They had a few recommendations...<br>Did you do the same thing to them you did to me and sonF? Will we turn out like them?
				player They were converted a little differently. And maybe. So long as you're loyal to me though I'll leave as much of your personality in fact as I can, I prefer variety in my harem.
				papi H-harem? How many people have you seduced already?
				player How much time are you going to waste instead of getting into the bath with me. Come on, the water here is downright divine.
				t ...
				papi Hot... It's hot!
				im images/papi/169.jpg
				papi I'm... I'm burning up! Can't think!
				t The mikoL waters, muddied with the corruption of your soul have influenced papiF's mind and body. For her, it appears the bath's effects have manifested in an unbearable heat, only momentarily satisfied with each bounce papiF takes upon you like a human dildo.
				im images/papi/170.jpg
				papi Ghh~!
				t Unnatural heat flows through her body, tingling her skin, clouding her mind, covering her body in a sheen of sweat, pumping her body so full of nervous sexual energy she can't hold herself back for even a moment.
				im images/papi/172.jpg
				papi Ohhh~! Ffffuck~!
				t Normally reserved and demure, not even her submissive nature can keep her from desperately trying to scratch the itch inside her body that seems to grow in intensity with each heartbeat.
				im images/papi/173.jpg
				papi Hah~! Cumming~! But It's still~!
				t Normally she has to slow down to prevent her orgasms from overstimulating her body, but her instinctual drive to satisfy her corruptive urges keeps her body moving.
				t When she finally begins to slow, it's because a complete, full exhaustion has crept over her.
				im images/papi/174a.jpg
				papi Hah... Hawt... Shtill sho... Hawt~
				miko Hello~? Are you two almost finished in there~?
				itako Don't stay too long~! 
			`);
			break;
		}
		case "sonBath": {
			writeHTML(`
				define son = sp son; im images/son/bath.jpg;
				t You decide to take sonF with you to the mikoL bathhouse. Hopefully the corruptive waters there will awaken something fun inside of him.
				t ...
				t You relax in the pool, the warm waters soothe your weary soul.
				player Hot water is nice, but it certainly does empty the head.
				son Gyah!
				im images/son/baths1.jpg
				son First the attendants, now you, why is everyone here so handsy?!
				player The attendants are loyal to me, just like your mom.
				son Hey! Mommy is loyal to me, not-
				im images/son/baths2.jpg
				son Houuu~!
				player Maybe, but we both know what <i>you're</i> loyal to.
				t The mikoL waters, muddied with the corruption of your soul have influenced sonF's mind and body. For him, it appears the bath's effects have manifested in an overwhelming sort of comfort, even with his leg lifted and his asshole being plowed, you can see he's starting to visibly relax.
				son Hoh... Hoh... *Daddy...
				player Hmm?
				t Unnatural energy flows through his frame, completely disolving his ego and anxiety beneath a wake of loving happiness.
				son *Daddy! Kiss!
				im images/son/sonBathRepeat.jpg
				t Normally far too bratty and snappy to even consider calling you that, the walls around his mind can't match up to pure, concentrated corruption and lust.
				im images/son/baths4.jpg
				son Mmm~! Cumming! 
				t With his entire body totally relaxed, you can thrust as hard and fast as you please without worry of hurting him. Soft, pliable, and completely yours from head to toe your slutty bottom partner meekly wiggles his tongue against yours as you slam your dick in and out of his greedy asshole with abandon.
				im images/son/baths5.jpg
				son HOOUUU~!
				player Good boy~
				t And as he sprays from the raw magic of corruption-fueled anal sex, the waters of the bathhouse grow more and more dark with your lust.
				son Hah... *Daddy... *Daddy's load feels so warm...
				miko Hello~? Are you two almost finished in there~?
				itako Need us to wash your back?
			`);
			break;
		}
		case "papi-sonCorruption": {
			writeHTML(`
				define son = sp son; im images/son/cattle.jpg;
				define papi = sp papi; im images/papi/cattle.jpg;
				t Steeling yourself, you command them to get comfortable and meet you in the bedroom. Corrupting two people at once shouldn't be too hard.
				t ... Probably.
				t ...
				im images/papi/201.jpg
				son Mmm~
				papi Darling, not so hard, okay?
				t The two seem content as they lay upon the bed, and so you begin to focus on the mark succubusF gave you.
				son ...?
				papi D-did the air conditioner just break?<br>I... I feel like-
				im images/papi/202.jpg
				son Mmm~!
				papi Hooh~!
				im images/papi/202a.jpg
				papi H-hah~! W-what's happening?! I've never felt like this before!
				t papiF writhes on the bed as sonF responds by wordlessly grinding against her leg. 
				papi I'm cumming! I can't stop! HaaaAAAAH~!
				t sonF grits his teeth as he experiences the same body-shaking cumquakes as his mother, which has the side effect of having him clench against her nipple. For her credit papiF doesn't seem to notice, or if she does it's just making her cum harder as the two experience a once-in-a-lifetime corruptiongasm and their dicks begin to shrink rapidly.
				t But the room starts to wobble and you fall backwards, the toll of doing them both at once has taken a lot out of you.
				son H-hey...
				papi playerF...
				im images/papi/204.jpg
				son Cum~! Wanna cum~!
				papi I'm not sure what you just did, but... Please, I need more of it...
				t The process isn't complete. You're tired, but your mother didn't raise no quitter. You focus on the mark again, the strength of your raging libido guides you!
				im images/papi/213a.jpg
				t The two moan in unison, unable to coherently form words anymore as their condoms fill with the very last bit of leaking essence. You push yourself to your limits, the room filled with the dark air of foul magic and the worldless gasping and panting of two total sluts who want nothing more than to bask in this feeling forever.
				t All too soon, you collapse backwards. 
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
	{index: "reward", requirements: "?trust papi 102;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "placeholder": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
			break;
		}
		case "reward": {
			writePhoneImage("images/papi/200.jpg", "Art by Silver Radish");
			writePhoneSpeech("papi", "", "You've completed all of papiF and sonF's plot! You can see more by playing more of the game, including getting sonF to join a club, or by corrupting the pair with a certain succubus's help.");
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
					//console.debug("Now examining encounter entry "+encounterArray[number].index+encounterArray[number].requirements);
					var requirements = checkRequirements(encounterArray[number].requirements);
					//console.log(requirements);
					if (requirements != true) {
						finalResult = false;
					}
				}
				if (finalResult == true) {
					finalLocation = encounterArray[number].requirements.split(`?location `).pop().split(`;`)[0];
					//console.debug("Final result for "+encounterArray[number].index+" true, location is "+finalLocation);
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