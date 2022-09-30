var character = {index: "fitboi", fName: "Robin", lName: "Lee", trust: 0, encountered: false, textEvent: "", met: false, color: "#885F89", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false,};

var logbook = {
	index: "fitboi", 
	desc: "A physically-active student, as extroverted as he is dedicated to earning a spot on the school's track and field club.",
	body: "He's got a runner's body, a fit form without a hint of unnecessary fat or muscle.",
	clothes: "You've only ever seen him wearing his blue T-shirt and shorts combo, standard for the club he's aiming to join. It becomes soaked in sweat pretty quickly after a good run.",
	home: "Ever the active student, you don't actually know where he lives: He spends nearly all of his time at the university's gymnasium and the outdoor track.",
	tags: "Feminization, oil play, body modification, corruption of innocence.",
	artist: "Silver Radish<br>Original Image Set: Otokonoko to xx No. 2 ~Kappatsu Junshin na Kouhai Hen~",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "meeting1-1", name: "Explore the outdoor field", requirements: "?trust fitboi 0; ?location gym;", altName: "Wander around", altImage: "",},
	{index: "meeting2-1", name: "Try and find fitboi", requirements: "?trust fitboi 40; ?location gym;", altName: "", altImage: "",},
	{index: "meeting3-1", name: "fitboi is somewhere around here", requirements: "?trust fitboi 60; ?location gym;", altName: "", altImage: "",},
	{index: "meeting4", name: "fitboi is in the track field's shed", requirements: "?trust fitboi 80; ?location gym;", altName: "", altImage: "",},
	{index: "meeting5", name: "fitboi is in the track field's shed", requirements: "?trust fitboi 81; ?location gym;", altName: "", altImage: "",},
	{index: "meeting6", name: "fitboi is in the track field's shed", requirements: "?trust fitboi 82; ?location gym;", altName: "", altImage: "",},
	{index: "meeting7", name: "fitboi is in the track field's shed", requirements: "?trust fitboi 83; ?location gym;", altName: "", altImage: "",},
	{index: "statusQuo", name: "fitboi is in the track field's shed", requirements: "?trust fitboi 84; ?location gym;", altName: "", altImage: "",},
	{index: "meeting8", name: "Try and find fitboi", requirements: "?trust fitboi 666; ?location gym;", altName: "", altImage: "",},
	{index: "fitboiHotelBad", name: "Ask about fitboi", requirements: "?flag demon hotelBad; ?trust fitboi 666;", altName: "", altImage: "",},
	{index: "fitboiHotelGood", name: "Search for fitboi", requirements: "?flag succubus hotelGood; ?trust fitboi 666;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	writeHTML(`
		define fitboi = sp fitboi;
	`);
	wrapper.scrollTop = 0;
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "meeting1-1": {
			writeHTML(`
				im 140.jpg
				t You take some time to wander about the track and field area. At seemingly all times of the day the place is in near constant use.
				player It's hard to believe we've got an indoor gym and an outdoor field. How loaded is this place?
				t Most of the students are exercising on their own, only talking to trainers or supervisors as needed, mostly mingling among themselves.
				t A counselor would definitely not fit in here, it's not like any of them seem particularly troubled so you can't find a shy student as an excuse.
				t !hypnosis 2; Ultimately you lack the skill needed to use hypnosis to blend into the crowd. It's a shame, but there's nothing left to do here for now.
				t ?hypnosis 2; That said, you're more than skilled enough to do a quick job of hypnosis on the run. You just need to search around to find a good target, then get into the zone.
			`);
			if (data.player.hypnosis > 1) {
				writeFunction("writeEncounter('meeting1-2')", "Blend in");
			}
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "meeting1-2": {
			writeHTML(`
				t You decide to blend in the best way you can.
				t Running!
				t After a few stretches, of course, but then you're off like a racehorse! There's no event going on or anything formal like that, so you just kinda... Start. All these university sprouts eat your dust in no time at all.
				t ... Or they would if you were particularly fit. Unfortunately you put all your points into sexual stamina, libido, and pants-dropping charisma, so sooner than your pride would like you can hear someone gaining on you.
				sp ???; im images/none.png; Oi, fitboiF! Quit trying to show off!
				fitboi Hah, that's all you got? On your left! You too, *sir!
				im 142a.jpg
				fitboi Too slow!
				t A lithe young man jogs past another student and then you, his body matted with sweat, it shouldn't be too much work to catch up with him and rise to the challenge.
			`);
			writeFunction("writeEncounter('meeting1-3')", "Accept");
			writeFunction("writeEncounter('meeting1-4')", "Decline");
			break;
		}
		case "meeting1-3": {
			writeHTML(`
				t Feeling confident you pick up the pace and run forwards. Nobody makes a fool out of you!
				t ...
				player *Huff*... *Huff*...
				im profile.jpg
				fitboi Hehe, not bad! It's not often somebody tries to catch up to me!
				player Why you little... I'm just a bit rusty...
				t Your stamina was great, but your leg strength is a bit... Lacking. Plus your opponent has clearly spent a lot more time on the track than you.
				fitboi Hehe, so I guess that means you want a rematch? The name's fitboiF, nice to meet'cha!
				player ... Charmed. I'm-
				fitboi Oh shoot! Sorry, I gotta run, catch you later!
				t And just like that, fitboiF sprints off towards the main gym building. 
				player Someone's in a hurry...<br><i>I hardly got the chance to do any hypnosis. At least he should be a little more relaxed when he next sees me. </i>
				finish
			`);
			addSkill("sweet gains", 1);
			passTime();
			setTrust("fitboi", 40);
			break;
		}
		case "meeting1-4": {
			writeHTML(`
				t You decide to take things at your own pace, leaving the odd boy to leave you behind.
				t No one else approaches you, but at least you got in a good run. Today at least has been a bit of good training for these legs of yours.
				finish
			`);
			passTime();
			break;
		}
		case "meeting2-1": {
			writeHTML(`
				define student = sp Student; im images/none.png;
				t You ready yourself for another run, making sure to prepare for when you see fitboiF again. Casual conversation is often a good way to relax a target.
				t ... Although, a track isn't the best sort of environment to relax in. You'll just have to make do.
				t ...
				t Searching around, you don't seem to find fitboiF anywhere on the field. Eventually you peek in through the window of a small shed.
				im 209.jpg
				student So what, you think you've got a decent sprint and that's enough? You realize the kind of students this school pumps out, right?
				fitboi I... Yeah, I know...
				student It's not happening fitboiF. Maybe try convincing the club mentor next time.
				fitboi But I-
				student See ya.
				t The other students quickly file out, leaving fitboiF alone.
				t And after they're gone you step in.
				player You alright?
				fitboi Eh?
				im 146.jpg
				fitboi Ah, yeah, I'm fine. Friendly rivalry between athletes, y'know? Hey, you want that rematch?
			`);
			writeFunction("writeEncounter('meeting2-2')", "Accept");
			writeFunction("writeEncounter('cancel')", "Decline");
			break;
		}
		case "meeting2-2": {
			writeHTML(`
				t You decide to challenge fitboiF to another run.
				t ...
				im profile.jpg
				fitboi Hehe! Another one left in the dust!
				player *huff*... I was a lot closer that time...
				fitboi Hah! In a rivalry, second place is the same as dead last!<br>But I guess you did get a tiny bit faster than last time. What's your secret?
				player ... I'm a fitness master.
				t You give some offhand comment, and when you manage to finally catch your breath and look up at fitboiF he's staring at you with a starry-eyed expression.
				fitboi Whoa, really?! Could you-<br>Oh dang! Sorry, I gotta run again! Tell me more next time, alright?
				t And with that, he runs off again. Still, you feel like the two of you have grown closer.
				finish
			`);
			passTime();
			setTrust("fitboi", 60);
			addSkill("sweet gains", 1);
			break;
		}
		case "meeting3-1": {
			writeHTML(`
				define mentor = sp Mentor; im images/none.png;
				t You ready yourself, making sure to prepare for when you see fitboiF again. The two of you are getting closer, so it shouldn't be too long until you can get him into a trance.
				t ...
				t Searching around, you don't seem to find fitboiF anywhere on the field. When you check the shed again...
				im 176.jpg
				mentor Listen, the team really appreciates all you've done.
				fitboi Yeah?
				mentor But just cleaning up after us isn't enough to get in. <br>This is the kind of club that goes on your resume. Granted, I'm no instructorF, but...
				fitboi B-but I've been training! My times are getting faster!
				mentor And yet you still aren't out there long enough to keep up with the rest of the team. You need endurance too, kid. The kind of endurance you can build with some character-building labor.<br>See? Just keep on doing what you know, good things'll happen!
				fitboi But... Fine, okay sir...
				t The older man looks satisfied and leaves, leaving fitboiF alone.
				t And after they're gone you step in.
				player Rough day?
				fitboi Oh, it's you...<br>Haa... It's fine, just frustrated. Sorry, I can't really step out for a race, I promised to clean the equipment.
			`);
			writeFunction("writeEncounter('meeting3-2')", "Offer to help");
			writeFunction("writeEncounter('cancel')", "Maybe another time");
			break;
		}
		case "meeting3-2": {
			writeHTML(`
				player How about I help you out?
				fitboi Ah, it's alright. Apparently this is supposed to improve my stamina, so...
				player And what if I had a better way to do that?
				fitboi Oh right, you're some kind of fitness master. Well...<br>Sure, why not. Help me out and I'll try whatever you've got. Can't be worse than being the track club's maid...
				t ...
				player fitboiF, can you hear me?
				fitboi Mhmm...
				t Sitting across from you is fitboiF, in a light trance after a short bit of hypnosis. The problem is...
				player You'll do whatever I say, right?
				fitboi Mmm... Maybe...
				t He's stonewalling you. While you can mess with his common sense a little, it's not enough to actually exert meaningful control over you.
				player You want a better body, right? I can give you one, but you need to be willing to do whatever I say.
				fitboi Creepy...
				player Special exercises, and massages?
				fitboi Those might be... Okay...
				t It's a starting point at least.
				player Alright, when I snap my fingers you're going to forget all that we talked about today. All you'll remember is that you promised to let me massage you, even if it feels a little weird, alright?
				fitboi ... Alright.
				trans fitboiMassage0; name Continue;
			`);
			break;
		}
		case "fitboiMassage0": {
			writeEvent(name);
			passTime();
			setTrust("fitboi", 80);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meeting4": {
			writeHTML(`
				im 146.jpg
				fitboi Ah, hey... S-sorry, I'm a little busy.<br>Oh, that thing you did last time, it didn't help. And I can't race you again today. Maybe some other time...
				t !flag fitboi cream; You still don't have anything you could use to improve his performance, futher massages will just weaken the trust he already has in you.
				t ?flag fitboi cream; You've got the container of she-cream oil with you, it's worth a shot to see if it has an effect.
				trans fitboiMassage1; name Use the oil; ?flag fitboi cream;
				trans cancel; name Go Back;
			`);
			break;
		}
		case "fitboiMassage1": {
			writeEvent(name);
			passTime();
			setTrust("fitboi", 81);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meeting5": {
			writeHTML(`
				im 144.jpg
				fitboi Heya! Guess who got noticed this morning by the club members?
				player Oh? I wonder.
				fitboi It's me! I was running as normal, and by the time I looked back I outlasted Randall and Ken! The stuff really works?
				player Glad to hear you finally trust my methods.
				fitboi Ah, yeah, sorry... I was a bit rude before, you only wanted to help after all.
				player Well, I'm glad you learned your lesson. That oil was pretty expensive after all.
				fitboi Eh?! B-but, I didn't-
				player Hey, don't worry about it. I used it because we're friends, right?
				fitboi Yeah! H-hey, I don't wanna be rude, but I've got some free time today, I had a chance to get started early. Maybe instead of a race, we could...
				trans fitboiMassage2; name Use the oil again;
				trans cancel; name Go Back;
			`);
			break;
		}
		case "fitboiMassage2": {
			writeEvent(name);
			passTime();
			setTrust("fitboi", 82);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "meeting6": {
			writeHTML(`
				im 147.jpg
				fitboi Ah~!
				player You alright?
				fitboi Y-yes... M-my pants just rubbed my... S-sorry, that's not really appropriate.
				player Of course it is! We have to track your progress after all. Still, it sounds like you're too sensitive for another session.
				fitboi No! No, I need it, please. Something's been building since the last time.
				player Sorry, but your front's just too sensitive. Well, now that I think about it...
				trans fitboiBehind1; name Use the oil again;
				trans cancel; name Go Back;
			`);
			setTrust("fitboi", 83);
			break;
		}
		case "fitboiBehind1": {
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "fitboiMorning": {
			addFlag("fitboi", "morning");
			unencounter(character.index);
			writeEvent(name);
			writeText("...");
			document.getElementById('output').innerHTML += `
				<div class="playerRoom">
					<img class="backgroundPicture" src="images/locations/newDayMorning.jpg" usemap="#roomMap">
				</div>
			`;
			if (checkFlag("mom", "megaEasy") == true) {
				printLocationButton(
					"Get out of bed", 
					40, 
					40, 
					"map", 
				);
			}
			else {
				printLocationButton(
					"Get out of bed", 
					40, 
					40, 
					"playerHouse", 
				);
			}
			break;
		}
		case "meeting7": {
			writeHTML(`
				im 145.jpg
				fitboi You're back...
				player You seem a lot more relaxed.
				fitboi Yeah. After I finish leaking it feels like the fuzz around my head fades away for a little bit.
				t He shivers a little, and you notice that there are beads of sweat across his body.
				fitboi I'm so much better than I was before, nobody could outlast me.<br>But then... I started to feel good while running and... I started leaking.
				player Oh? You started cumming in your pants in front of everyone?
				fitboi I had to run to the bathroom, and all the while... It wouldn't stop, it felt like I was in heaven.<br>I don't understand what's going on anymore, I don't really care. Can we do it again today? My penis, my butt, I don't care, so long as I can feel good again.
				trans fitboiBlow2; name Request a blowjob first;
				trans fitboiBehind2; name Apply the cream to his ass;
				trans fitboiMassage3; name Apply the cream to his front;
				trans fitboiCorruptionPrompt; name Talk about Corruption; ?flag succubus newCorruption;
				trans cancel; name Go Back;
			`);
			raiseTrust("fitboi", 1);
			break;
		}
		case "fitboiBlow2": {
			writeEvent(name);
			writeHTML(`
				trans fitboiMassage2; name Train his front;
				trans fitboiBehind2; name Train his rear;
				finish
			`);
			break;
		}
		case "fitboiBehind2": {
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "fitboiMassage3": {
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "statusQuo": {
			writeHTML(`
				im 145.jpg
				fitboi Welcome back! What are we gonna do today?
				player You don't even care about running anymore, do you?
				fitboi Would that excite you? I could strip down and streak across the school, my dangling prick oozing out, squirting with every step!
				player Maybe not that far, not yet at least.
				trans fitboiBlow2; name Request a blowjob first;
				trans fitboiBehind2; name Apply the cream to his ass;
				trans fitboiMassage3; name Apply the cream to his front;
				trans fitboiCorruptionPrompt; name Talk about Corruption; ?flag succubus newCorruption;
				trans finalePrompt; name Ponder the possibilities of the cream;
				trans cancel; name Go Back;
			`);
			break;
		}
		case "finalePrompt": {
			writeHTML(`
				player Hmm... Maybe I should bring you back with me...
				t The effects of the oil so far have been extremely potent. You could take over the entire town like this with hardly any resistance.
				fitboi I'll go anywhere you want to. If it'll get me more of that oil I'll strip right in front of everyone and let you use my ass as you please. <br>You made me feel good, special, that's more than they've ever done for me.
				t But going along that line of thinking, the stuff is so potent you'd be giving up on taking over the school the normal way. Plus using fitboiF as the vector would put him in other people's hands, if only long enough for the she-cream to take effect.
				t What will you do?
			`);
			writeFunction("writeEncounter('finaleAccept')", "Use fitboiF to spread the she-cream's effect");
			writeFunction("writeEncounter('cancel')", "Maybe another time");
			break;
		}
		case "finaleAccept": {
			writeHTML(`
				define student = sp Student; im images/none.png;
				t After a quick chat with who gave you the she-cream in the first place, a plan is hatched.
				im 186.jpg
				fitboi Oooh fuck~! Harderharderharder!
				im 190.jpg
				fitboi Cumming~! N-no, I'm leaking~! I'm squirting, I can't stop~!
				player Good, don't spill even a single drop!
				t As you collect what they can from fitboiF's squirting, shaking prick, a grin crosses your face. You already know the perfect way to use the next batch of the cream.
				t ...
				im 214.jpg
				student Hah... I can't believe we lucked out... Who knew you'd be so desperate to join the team?
				fitboi ...
				student And you're... Already oiled... Ghh
				fitboi Hurry...
				student F-fine, none of us can hold back either! I h-hope you're ready...
				im 216.jpg
				student Ghh... It feels weird...
				student This oil is messing with my head...
				fitboi Please, I need it... I need my reward for doing a good job, so hurry up and rub it in more...
				student Ghh... Fine!
				im 218.jpg
				student Y-you see what happens when you act... Oh, fuck!
				im 220.jpg
				fitboi Hah~!
				student How am... How am I already cumming?!
				student My skin... It's changing...?!
				student Cum, gotta cum, need to cum!
				im 221.jpg
				student It's... It's lasting so long...
				student Your skin feels so good! I wanna feel like you!
				student Leaking...!
				t ...
				im 223.jpg
				student Can't stop... I can't stop cumming... It's like I've broken a leak...
				t fitboiF's eyes are practically glazed over with pleasure, but when he notices you...
				im 224.jpg
				fitboi *He's here! *He's here! Please, fuck my ass, give me more! I can't hold back anymore, the rest of them are turning just like you said they would!
				student Ghh... Itch... It burns, but it doesn't hurt...!?
				student It's all over my chest, it feels weird!
				student What the hell did you do to us?! Ghh, please, just... Ouuugh~!
				fitboi I'll do this as many times as you want, just please, give me relief! I need your cock, now and forever!
				t And thus, a new journey begins, one that promises something vastly different than the life of a school counselor.
			`);
			writeFunction("loadEncounter('system', 'credits')", "The End");
			addFlag("fitboi", "complete");
			break;
		}
		case "fitboiCorruptionPrompt": {
			writeHTML(`
				player Hey, do you have a minute?
				fitboi Eh? Of course, aren't we gonna... You know...
				t He squirms a little on the spot, playing out some fantasy in his head. The cream has clearly had a massive effect on him already.
				t ... Speaking of, this might be a <b>bad idea</b>, there's no telling how full corruption might combine with the effects of the she-cream oil. Weren't you specifically warned about this?
			`);
			writeFunction("writeEncounter('fitboiCorruption')", "Corrupt fitboiF");
			writeFunction("writeEncounter('cancel')", "Maybe another time");
			break;
		}
		case "fitboiCorruption": {
			writeEvent(name);
			writeFunction("writeEncounter('fitboiCorruptionFollowup')", "Continue");
			break;
		}
		case "fitboiCorruptionFollowup": {
			writeHTML(`
				succubus Lucy's chastity cage, what the hell happened here?
				player I corrupted him, he went a little farther than I expected.
				succubus Well no duh, you drained him of his masculinity when it'd already been drained by the oil. It's not like siphoning gas from an empty tank, you made a vacuum...
				t succubusF touches fitboiF's unconscious form, causing fitboiF to spasm.
				succubus Hmm... I dunno. There's nothing I can do for his old self at this point, let's hope he takes to lewdness like a fish to water, or he might drown. Check this out.
				t succubusF gestures towards a very faint mark on fitboiF's body, some kind of pale heart symbol where a woman's womb would be.
				player What is...
				succubus He's already started turning into a demon, he probably started drawing it out of the air from us, or maybe from the jizz you pumped into him.<br>Don't worry, I'll show him the ropes, make sure he doesn't break into a sperm bank or something looking for a fix.
				player Will he be alright?
				succubus Well, normally new succubi get blasted with sensation to normalize them to their new selves. I'll have to make do with my toy collection and a fuckton of porn.<br>Come check on him tomorrow, I'll have him all ready, although he won't be like the fitboiF you knew. 
				finish
			`);
			setTrust("fitboi", 666);
			passTime();
			break;
		}
		case "meeting8": {
			if (checkFlag("fitboi", "corruptionQuo") != true) {
				writeHTML(`
					define fitboi = sp fitboi; im images/fitboi/fitboiC.jpg; 
					im 227.jpg
					fitboi It's playerF~! Heeeey~!
					t Finding fitboiF doesn't take long, recognizing him, however, is another story.
					t His hair looks dyed blonde, his chest now undeniably has a puffy pair of boi tits so sensitive that he's casually writhing around in his clothes. Probably getting off on the feeling of fabric on his corrupted body.
					player Hey fitboiF, you snuck out of my friend's home. He was trying to take care of you.
					fitboi Eeeh~? You mean batty boy? He's so boring! I keep asking him to play with me, but no! You're my favorite after all, so why don't you <pink>play with me?</span>
					t Nowhere near as strong as succubusF or demonF's commands, fitboiF's corruptuon-tinged words still make the room spin as you hold yourself back.
					t It's hard to resist, to avoid giving into the primal urge and completely destroy that twinky ass. To paint the insides of that-
					player Holy shit, whoa... Focus... Focus...
					im 228.jpg
					t Even just trying to remember what he looked like previously is tough, as it feels like someone's running a smoke machine at full blast inside your head.
					fitboi I feel so nice! I just... I just have to lay back, take a few deep breaths, and it all just... Washes out of me. I leak. So. Baaaad~
					t His voice keeps trailing off into happy little giggles.
					fitboi I feel so much lighter than normal! And it feels just like I'm wearing lipstick too~
					player You do look... Different...
					fitboi It's cute, right? I take such good care of my hair, and now it's changed to suit the new me~! Mm, just the feeling of rubbing it against my face...
					t There's really nothing left of him except a giddy little demonic bimbo whore...
					fitboi Oh... I bet there's plenty of men just as hung as you out there, somewhere...<br>And if they're only as big as me, that's okay too, in it's own way~
					player Put a pin in that. I can't have you corrupting random people around the school.<br>... Not yet at least.
					fitboi D'aww, you're a selfish *man? That's so cute, but if monogamy is what it takes you to fuck me harder~
					player So, that's what it'll take to keep you here, without risking you sexually assaulting half the school?
					fitboi Hmm~ Maybe~? Let's give it a try~! 
				`);
				addFlag("fitboi", "corruptionQuo");
			}
			else {
				writeHTML(`
					define fitboi = sp fitboi; im images/fitboi/fitboiC.jpg; 
					t You walk into the room, feeling like you're being watched. In a flash, fitboiF appears before you.
					im 227.jpg
					fitboi Oooh, it's *Mr. Walking Wet-Dream *himself! Here to make my dreams a reality? If you don't... Well, there's no telling what might happen~
				`);
			}
			writeFunction("writeEncounter('fitboiBehind3')", "Fuck the demon brat's ass");
			if (checkFlag("priest", "guestFitboi") == true) {
				writeFunction("writeEncounter('fitboiPurify')", "Bring fitboiF back to the church for purification");
			}
			writeFunction("writeEncounter('cancel')", "Maybe another time");
			break;
		}
		case "fitboiPurify": {
			writeHTML(`
					define fitboi = sp fitboi; im images/fitboi/fitboiC.jpg; 
				fitboi Again? Aww, cmon, it was so boring last time though~!
				player I promise it'll be worth it.
				fitboi Fine, but I'll hold you to that~
				t ...
				t The two of you arrive at the old shack, priestF is waiting patiently at the entrance like he's been expecting you.
				priest Please, both of you, come in.
				fitboi Ooh, time for a threesome? He's a bit stuffy and too clean for my liking, but I know exactly how to make sure we rub off on him.
				t You're guided inside and told to sit down as fitboiF is led to the main altar.
				priest Alright, both of you, close your eyes. I humbly ask that you not open them for any reason.
				fitboi Hehe, okay~
				player Alright.
				t You take a deep breath, and release. As you do, you can feel all the energy, worries, stress, and tenseness leave your body. You can hear the ramshackle doors of the church opening, but don't hear any footsteps despite a presence growing closer.
				sp housekeep; im images/none.png; HIDDENAlright, let's... My, this place could really use a maid.
				sp housekeep; im images/none.png; HIDDENFocus. This one needs our help.
				sp housekeep; im images/none.png; HIDDENSo twisted by demonic oils. Should we clear that up too?
				sp housekeep; im images/none.png; HIDDENNo, just focus on the corruption. 
				t As the mysterious voices talk, you can't manage to find the strength to open your eyes. A floral scent fills your nose as you hear fitboiF groan. What follows next is a cacophany of sounds, and you find yourself drifting off feeling like you're floating on a cloud.
				t ...
				priest playerF!
				player Eh? What happened? How long was I out?
				priest For quite a while. Here, look at this!
				t priestF hands you a note, reading "Howdy friend! We gave your little buddy a thorough scrubbing. Since it wasn't a deep clean we brought him back to his place to sleep it off, he should be back to normal tomorrow.
				t Don't worry, we know how he got into this mess, but there's no judgement! Keep on being kind to those around you, that's all we ask.
				t - Friends"
				im images/priest/059.jpg
				priest They were here! Isn't it amazing?
				player Yeah. Thanks for helping me out, by the way.
				priest Thank <i>you</i>! The once musty air of this place is now cleared, filled with the scent of vanilla and air fresheners. This is the scent of the divine!
				im images/priest/060.jpg
				priest The scent of... I need some privacy, if you will allow me.
				player Right. Take care.
				finish
			`);
			passTime();
			setTrust("fitboi", 84);
			break;
		}
		case "fitboiBehind3": {
			writeEvent(name);
			addSkill("corruption", 1);
			passTime();
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "fitboiHotelGood": {
			writeHTML(`
					define fitboi = sp fitboi; im images/fitboi/fitboiC.jpg; 
				t You gently push open the door to fitboiF's room...
				im 239.jpg
				fitboi Hah, that one was nice, shame the battery-<br>Oh, well if it isn't the *master of the castle~
				player I see you're fitting in nicely.
				fitboi Why wouldn't I? The boys and girls here are a lot nicer than my old "friends". They certainly seem to recognize my talents at least, and they provide such nice gifts when I offer to help them relieve some tension.
				player Still as perverted as ever, I see. It's a good thing demonF never found you while he was still in charge of this place.
				fitboi Hehe, the <i>really</i> mean one? It's hard to believe he was ever in charge at all. I heard he soaked a bed so hard once the girls were sucking-<br>Ah, wait, I think batty was looking for you.
				player I should probably find him then, take care, alright?
				fitboi Mmm, I'll try not to have to much fun without you. Now, let's see if I can find a battery than lasts longer than six hours...
			`);
			writeFunction("changeLocation(data.player.location)", "Continue Wandering");
			break;
		}
		case "fitboiHotelBad": {
			writeHTML(`
					define fitboi = sp fitboi; im images/fitboi/fitboiC.jpg; 
				define black = sp Black Haired Succubus; im images/demon/dark.jpg;
				black Ah, the fit boy. Imagine our surprise to find a demon, turned by a model of oil made for our kind, out in public! After we dealt with succubusF and while you were asleep, he became so starved he started assaulting anyone he could find. And with a body like his...
				im 253.jpg
				fitboi Aww, come on, all that cardio had to have been good for something~<br>Be good little sperm-monkeys and give me what I need, okay?
				black He doesn't care, it's almost like he <i>can't</i> care about who he once was. Too much of his mind and body are dominated by "anal slut" energy. I wonder if he'd recognize you now?
				im 254.jpg
				fitboi Hah~! So warm~! Squirt it aaaall out onto me, okay?
				black Regardless, all we had to do to get him onto the payroll was tell him we could offer what his body already craved. I suppose we have you to thank for him.
				im 255.jpg
				black Plus, knowing how easily the oil can transform humans, I'm sure we'll have a flood of new employees once fitboiF is done having his fun. Ah, I actually have a picture I took to commemorate his first customer.
				im 241.jpg
				black He certainly wears the outfit well~
			`);
			addFlag("fitboi", "complete");
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
	{index: "fitboiMassage0", name: "She-cream: First Application"},
	{index: "fitboiMassage1", name: "She-cream: Second Application"},
	{index: "fitboiMassage2", name: "Training the Front"},
	{index: "fitboiBehind1", name: "She-cream: Special Application"},
	{index: "fitboiBehind2", name: "Training the Rear"},
	{index: "fitboiBlow2", name: "Training the Mouth"},
	{index: "fitboiMorning", name: "Side Effects May Include"},
	{index: "fitboiCorruption", name: "Mixing Medications"},
	{index: "fitboiBehind3", name: "Perfecting the Rear"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "fitboiMassage0": {
			writeHTML(`
				im 148.jpg
				player Are you ready?
				fitboi I... I think so... You're like, certified, right?
				player Just relax. You've been stuck in a rut, yeah? No matter how hard you work they don't appreciate you?
				fitboi ...
				player Relax...
				im 150.jpg
				fitboi Hmm!
				t He squirms beneath your touch, his skin is soft and pliant to the touch, but he's clearly still nervous.
				im 151.jpg
				t He exhales softly as you massage his chest, his blush is more out of embarrassment than pleasure though.
				t He's growing more skeptical of you, so this is as far as you can go for now. You let him go.
				fitboi Hff... You finished already? I don't feel too different.
				player The effects are subtle, more effective ones are a lot more hands-on.
				fitboi Right... Maybe I'll stick to running then.<br>Ah, sorry. I promised to try it out. I'll time myself at least, I wanna give this a fair shake.
				t With that he runs off. He probably won't find a difference, and he's too distrusting for you to try more hypnosis. You'll need something else, something that can actually have some tangible result on his body, if you want to progress any further.
			`);
			break;
		}
		case "fitboiMassage1": {
			writeHTML(`
				im 148.jpg
				player Just relax, alright?
				fitboi This is the last time, okay? It's not working, o-or it didn't last time at least, so-
				player It'll be okay, I've got a secret weapon this time.
				im 153.jpg
				fitboi Hah! C-cold!
				player Sorry, it should warm up soon.
				fitboi W-what kind of massage oil is... Is...
				im 156.jpg
				t His shudders aren't like before, these are the instinctive reactions to a curious new form of stimulation.
				fitboi H-hot... It's getting hot... All over...
				im 157.jpg
				fitboi H-hoooh, stuh... 
				t His nipples are hardening into tiny peaks, and he's twitching whenever you roll over the little nubs.
				im 158.jpg
				player Should I keep going?
				fitboi *huff*... *huff*...<br>Ghh, n-no, let's stop!
				t He leans forwards and stands up, although when his shirt falls down he lets out a girlish yelp.
				player This time the effects will be obvious. 
				fitboi Mmh... Y-you'd better be... Hah... I-if you're just lying to-
				player You have my absolutely promise, fitboiF. Why don't you head home? Let the oil sink in, it'll help your heart.
				t Huffing and puffing, he can't think of a response, so instead he runs off.
			`);
			break;
		}
		case "fitboiMassage2": {
			writeHTML(`
				im 148.jpg
				player You seem tense again.
				fitboi S-sorry... When I think about how it felt last time my body...
				player I understand. Just focus on the sound of my voice, alright?
				im 153.jpg
				fitboi Hah~!
				player Just focus on my voice, let the thoughts flow right out of your head. We aren't stopping early this time, right?
				fitboi N-no *sir... Y-you can keep rubbing... As long as you like...
				player Good boy...
				t ...
				im 159.jpg
				fitboi Hot... Hot... My body... It's burning...
				player Does it hurt?
				fitboi No! N-no... It's a good burn... It just won't stop building...
				player Well that's why you removed a layer. Didn't that make you feel better?
				fitboi Yes... Yeah...
				player So then...?
				fitboi B-but I only have my underwear left...
				player Oh? Are we already done for today?
				fitboi N-no! No...
				im 160.jpg
				fitboi It's off! Hoooh... Oh it feels so... Good...
				player And how does your chest feel?
				fitboi So good~<br>I can't stop shaking~
				player Oh, and look at that...
				im 161.jpg
				fitboi It's dripping... Khh... It's gonna touch my p-p...
				player Well, we can't have that. With how good your chest feels, just imagine how torturous it would be to have this special oil drizzle over your dick.
				fitboi Nnngh~! P-please *sir, my chest is feeling dry, could you add a little m-
				im 162.jpg
				fitboi Gggg~!
				player The oil's most effective when spread across the body, wouldn't you agree? How does it feel?
				fitboi GHHHH~! C-can't... Can't think straight!
				im 163.jpg 
				fitboi Hahhh~! W-what's happening to me? This doesn't feel normal!
				t Cum sprays out of his still-flaccid cock, flowing and flowing out. It's a thin, almost watery consistency, almost like he's squirting instead of cumming.
				fitboi Kkkhh~! Can't stop! Burning, so good~! 
				im 164.jpg
				fitboi It won't stop! It still feels hot!
				player Relax, just ride it out, focus on how good it feels and let yourself get overwhelmed.
				t Tears are actually forming in his eyes as he begins to sweat. He braces himself and his shivering slows for a moment 
				t Only for his shakes to resume as his penis begins to squirt yet again.
				t ...
				t Once he's finally managed to calm down, and the oil has soaked in enough the warmth has faded, hours have passed. It's very late.
				fitboi H... Hot... O-on... Cold...
				player Relax, you'll be fine. Can you get dressed?
				fitboi Dr... Yes... Yeah...
				t You help him up, deciding to call it a day for now.
			`);
			break;
		}
		case "fitboiMassage3": {
			writeHTML(`
				im 153.jpg
				fitboi It's heating up...!
				player Oh? Where exactly? Right...
				im 154.jpg
				player Here?
				fitboi Gghhg~
				player Hmm, sounds like I'm getting warming. How about...
				im 157.jpg
				player Here?
				fitboi Ghhh~! My nipple! W-when you touch it my brain feels hot!
				player Your brain isn't the only part of you that's reacting.
				im 160.jpg
				player Don't you feel embarassed, leaking precum like a faucet just from having your chest massaged?
				fitboi It just feels too good...
				im 162.jpg
				im 163.jpg
				fitboi Hhhaaaah~!
				player Just three seconds, you're getting faster.<br>Although I suppose you aren't really cumming, are you? You're just leaking.
				fitboi Leaking~! Make me squirt out more, please~!
				player Hmm? And what if I...
				im 164.jpg
				fitboi Nooo... Please, I need more... It's getting...
				player Hotter? I noticed your erections have been getting shorter. Does that mean you aren't feeling as good?
				fitboi No! Please, it'll get smaller but the heat just gets mote intense! If you don't... Gh~!
				im 161a.jpg
				fitboi Nggh~!
				player Wow, you're spraying cum even though your dick is completely soft. How does your prostate feel?
				fitboi It's, ghh... Throbbing... With every... Ghh...
				t Splurts of leaking fluid keep interrupting him, until fitboiF sinply gives up on trying to talk and commits to riding out the orgasm.
			`);
			break;
		}
		case "fitboiBehind1": {
			writeHTML(`
				im 192.jpg
				fitboi Oh... This is really embarassing, *sir...
				player Say the word and we'll stop for the day.
				fitboi No... If I don't have it... I need more, please.
				player How much have you been improving lately?
				fitboi I don't know... I was distracted today, whenever I'd rub my chest, my penis would leak... Whenever I'd rub my penis, I'd...
				im 193.jpg
				fitboi Khhh!
				t He draws in a sharp breath between grit teeth, his body clearly unused to this kind of play.
				player Don't worry, I used plenty of oil. Now, instead of playing around with your rim, how about I make sure you get a lot of your dose... Right...
				im 194.jpg
				fitboi Aaaah!
				player Here!
				t He screams out as his cock suddenly flops backwards. Making circular motions, you ensure his prostate is thoroughly exposed to the she-cream oil.
				fitboi Ah! It's itching! It's itching!
				t The sensation is unique, it actually feels like his prostate is pulsing beneath your fingers. Like it's growing. Like he's...
				im 196a.jpg
				fitboi Haaaaah~!
				t He actually doesn't even seem to notice he's cumming, the stimulation to his prostate enhanced by the oil is simply too much.
				player I'll make an anal whore out of you yet, fitboiF.
				fitboi My butt~! It won't stop~!
				t ...
				im 197a.jpg
				fitboi ...
				t His cock squirts again, splashing against the pool on his tummy and leaking onto the mat.
				player Can you even still hear me?
				fitboi ...
				player Should I stop, fitboiF?
				fitboi ... (small more small)
				player Greedy boy.
				t ...
				im 198a.jpg
				t Wiping your hands off you take a moment to bask in your work. fitboiF is completely broken to you now. Experienced buttsluts would envy his sensitivity at this point.
				player Take care getting home, fitboiF.
				fitboi ...
			`);
			break;
		}
		case "fitboiBehind2": {
			writeHTML(`
				im 192.jpg
				fitboi A-again?
				player Just say the word and we'll stop for the day.
				fitboi No... Please, make me feel good, like last time...
				im 193.jpg
				fitboi Khhh!
				t He draws in a soft breath as your fingers sink into his ass, he's getting used to this.
				player Don't worry, I used plenty of oil. Now, instead of playing around with your rim, how about I make sure you get a lot of your dose... Right...
				im 194.jpg
				fitboi Aaaah!
				player Here!
				t He screams out as his cock suddenly flops backwards. Making circular motions, you ensure his prostate is thoroughly exposed to the she-cream oil.
				fitboi Ah! It's itching! It's itching!
				t Again, you can feel his prostate pulse under your finger, the oil triggering a reflex near identical to cumming. In fact...
				im 196a.jpg
				fitboi Haaaaah~!
				t He actually doesn't even seem to notice he's cumming, the stimulation to his prostate enhanced by the oil is simply too much.
				fitboi My butt~! It won't stop~!
				t ...
				im 197a.jpg
				fitboi ...
				t His cock squirts again, splashing against the pool on his tummy and leaking onto the mat.
				player Can you even still hear me?
				fitboi ...
				player Should I stop, fitboiF?
				fitboi ... (small more small)
				player Greedy boy.
				t ...
				im 198a.jpg
				t Wiping your hands off you take a moment to bask in your work. fitboiF is completely broken to you now. Experienced buttsluts would envy his sensitivity at this point.
				player Take care getting home, fitboiF.
				fitboi ...
			`);
			break;
		}
		case "fitboiBlow2": {
			writeHTML(`
				im 179.jpg
				fitboi Hah... Are you sure this will really...
				player Sure, gotta improve that breathing ability if you want to get past your current plateau.<br>Keep being nosy and I'll just go home.
				fitboi I've just never-
				im 180.jpg
				fitboi ...<br><i>Huge...</i>
				t A nice look of cock-shock washes over him, but your silence is telling him he should get started.
				im 182.jpg
				fitboi Eeeeh...<br><i>Salty...</i>
				t He licks the head hesitantly, unable to really hide his distaste for the act.
				t To be fair it's not like you preyed on some repressed dicklust to corrupt fitboiF, so his lacklustre performance isn't too surprising.
				im 183.jpg
				fitboi Mmph...
				t He looks up to you to see if he's doing a good job. 
				player A shame. It seems like some people don't have the talent for cocksucking. 
				fitboi Sorry *sir, I'll try harder...
				im 184.jpg
				player Admirable, but I'm not even getting close.
				fitboi Sorry... D-do you think we could try something else?
			`);
			break;
		}
		case "fitboiMorning": {
			writeHTML(`
				t Meanwhile, somewhere in town...
				fitboi Itching...
				t A burning heat, yet it isn't painful.
				fitboi Itching...!
				t It pulses in time with his heartbeat.
				fitboi Need-! Need to-!
				t His nipples burn. His penis burns. But most of all...
				fitboi Can't hold back anynore!
				im 204.jpg
				fitboi The cream, I need more! I c... I can't hold on... Gh... I'm leaking already...<br>W-wait... Maybe I can...
				im 205.jpg
				fitboi Leaking... Please, I just need to go... Deeper...
				im 206.jpg
				fitboi Oh! Oh! It's here! The good feeling! N-no, my sheets! I should... I have to stop, but...!
				im 207.jpg
				fitboi Haha... I'm ruining my sheets... I'm gonna smell like my cum tomorrow... Ahaha~<br>Mmm, more, I'm hungry for more~
			`);
			break;
		}
		case "fitboiCorruption": {
			writeHTML(`
				t You take a deep breath and focus on the back of your hand as fitboiF lays down for you. He's clearly eager, it's a good thing you have privacy in here.
				t The back of your hand glows red for just a moment before fading. Jolts on the spot, and begins to strip like there's a bug in his clothes. There's a panic in his eyes you haven't seen since your first sexual encounter with him, and quickly it's clear why.
				im 192a.jpg
				fitboi I-it's leaking again! Without you even touching me! I c... Can't...
				t Suddenly you feel... Compelled. There's no other way to describe it, it's like there's a gravitational field around fitboiF.
				player What is-
				fitboi N-need... Cock... Pleeee<pink>EEEEASE</span>~!
				im 199.jpg
				t His scream of desire is somehow louder in your mind than in your ears, and you can't help but resist.
				t And after only a few thrusts...
				im 201.jpg
				t Darkness overtakes you for a moment. You can feel your body move to continue thrusting into his need asshole, but it's not your conscious decision. 
				t ...
				t With one last pathetic dribble from his cock, a sudden emptiness washes over fitboiF. Complete and total calm. At the same time, you finally find yourself being released to pull out of fitboiF with a soft 'pop'.
				t Emptiness.
				t But then...
				im 203a.jpg
				fitboi Ehe... Ehehe~! 
				t fitboiF's world begins to realign. His hair starts to change color before your eyes, and his eyes flutter closed.
			`);
			break;
		}
		case "fitboiBehind3": {
			writeHTML(`
					define fitboi = sp fitboi; im images/fitboi/fitboiC.jpg; 
				fitboi Ooh, hurry, hurry~!
				player I'm go-What the hell did you do to your...
				im 230.jpg
				t Just looking at him makes your mind run completely run out of control and fill with perverted fantasies. 
				fitboi Ooh, I guess all that time running is still worth something, huh? Oh, fun fact, it might be a really weak version, but the batty boy told me I actually sweat something just like the oil you used on me before.
				im 231.jpg
				fitboi Oooh, and you're already hard and ready to fuck, aren't you? Good thing I'll never need lube again, huh?
				player To think... You used to be such a normal cardio bunny...
				t You try to hold yourself together with dirty talk, but even as low of a level of demon as he is, fitboiF still makes your head fog over with every wiggle of his bountiful ass.
				fitboi Screw running, screw everything! I want to be your bottom bitch forever!
				im 232.jpg
				fitboi Oh fuck, yeah~! You made me like this. You turned this good little boy into a total bitch~!
				im 234.jpg
				fitboi And I'd let you do it again in a heartbeat!
				t He licks his lips, and you swear you can feel something glide against the base of your balls. You give him a shocked look, and he just smugly smiles. 
				fitboi L-like it? I'm still learning how to use these powers, but can you believe the bat bitch says they'll go away if I cum too hard? Apparently I gathered a bunch of energy by accident, and I'm backed up in more ways than one. Guess I shouldn't get used to them, huh?<br>But, while I still have them...
				t He slams his ass back against you, enveloping your length in one powerful motion within his demonic bitch-hole.
				im 236.jpg
				t Soon jizz begins to back up, leaking from what little space there is between his tightly puckered hole and your cumming cock. 
				t He gives a desperate little jerk, looking more like he needs to pee than how a male should look while cumming.
				im 237.jpg
				fitboi Oooh, I don't think I ever made you cum that hard while I was human...
				t His gaping ass leaks out sperm, pooling over his tiny, throbbing balls.
				im 238.jpg
				fitboi Hah... You can go for another round, right? I'm all messy anyways...
				t It seems like he doesn't care that anyone around him could instantly identify him as a walking cumdump. 
				t ...
				t After just one more round you're tapped dry, but the little cardio bitch is as bright-eyed and bushy-tailed as ever. You lean on the wall for support.
				fitboi Hehe, tired? I'll be fine, the bat boy is taking good care of me. Oh, but you don't really want to leave, do you? You want to <pink>stay, and play with me forever, right?</span>
				player Ngggh... That... Won't work on me...
				fitboi Aww, it was worth a try, I guess. See you around~
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
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/fitboi/reward.jpg", "Art by Silver Radish");
			writePhoneSpeech("fitboi", "", "You've finished all content currently available to fitboiF fitboiL! Stay tuned for more, including his corruption!");
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