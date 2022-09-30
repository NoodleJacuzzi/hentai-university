var character = {index: "brown", fName: "Alexia", lName: "Wright", trust: 0, encountered: false, textEvent: "", met: false, color: "#C67D29", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false};

var logbook = {
	index: "bmom", 
	desc: "brownF's mother, married to a weather supporter of the school who's been away on a business for a great deal of time.",
	body: "She's the archetypal lonely milf, and her body matches that trope perfectly.",
	clothes: "She doesn't wear the usual school uniform, instead going for something warmer with a puffy sweater and skirt.",
	home: "She's almost always found in Classroom B, studying and preparing for upcoming tests and getting in some light reading. She always seems to choose the back row, though.",
	tags: "Secretly perverse, step-sister incest, blowjob",
	artist: "Oreteki18kin<br>Original Image Set: Futaba-chan Jusei Chu☆",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define ojou = sp ojou;
		define brown = sp brown;
		define player = sp player;
		define bmom = sp bmom; im images/brown/mama.jpg;
	`);
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "brownIntro": {
			writeHTML(`
				im brownIntro.jpg
				t A schoolgirl, it seems she's noticed you.
				t If your records are right she's brownF brownL, a pretty ordinary girl. Maybe on the lower end of the confidence spectrum. Usually girls like her make good hypnosis targets.
				t Something about you has caught her attention, but you'll have to be the one to approach if you want to get to know her.
			`);
			writeFunction("writeEncounter('brownHypnosisA')", "Go for it");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "brownHypnosisA": {
			writeHTML(`
				player Glad you could join me, brownF. Now-<br>You're staring. Is there something on my face?
				brown ... Huh?<br>Oh! No, sorry *sir. No reason.
				t It seems you were mostly right on the money about her personality. And whatever fixation she has with you will only make this easier.
				player Alright. Well, since I have your undivided attention, I'd like you to take a look at something for me.
				...
				t As her eyes unfocus and her shoulders slump, you can't help but marvel at how quickly this has gone. She could probably be entranced by a set of windchimes if her resistance is this low.
				player Alright, where to start with you? I guess the most important place is...
			`);
			writeFunction("writeEncounter('brownHypnosisB')", "What's your fixation with me?");
			break;
		}
		case "brownHypnosisB": {
			writeHTML(`
				player brownF?
				brown Mhmm...
				player You're going to be honest with yourself and with me from now on. Why were you staring at me?
				brown You... You match the description of a character from stories I read. You're strong, confident...
				player Right, I-
				t Despite her trance her breathing starts to become unsteady.
				brown Whenever I look at you I start remembering pieces. I shouldn't be reading that sort of stuff, but-
				player I see-
				brown I want to be taken... Molested. Teased. Assaulted. Played with. Abused. Bro-
				player Okay. brownF, when I snap my fingers, you're going to wake up. and when you do you're going to remember in vivid detail everything you've just told me, and you'll believe you told it to me completely willingly.
				t You snap your fingers, and almost immediately you can see brownF's expression turn from an empty daze to shock, panic, and blind terror in a rollercoaster of emotion before her eyes start to water.
				t Dropping hypnosis without any commands is risky, but this might pay off in a fun way.
				brown I... I didn't-
				player Stop.
				t Her will was already pretty shaky. Even without giving her a command, now is as good a time as any to...
			`);
			writeFunction("writeEncounter('brownsLewd')", "Take advantage of the situation");
			break;
		}
		case "brownsLewd": {
			writeEvent(name);
			passTime();
			setTrust("brown", 80);
			if (checkTrust("ojou") == 1) {
				writeFunction("writeEncounter('brownVoyeur')", "Meanwhile...");
			}
			else {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "brownsLewdRepeat": {
			writeHTML(`
				brown S-so what are we going to do today?
				player Guess.
				brown ... W-will you use my mouth again?
				im brownLewd1.jpg
				player Any objections?
				brown ...
				im brownLewd2.jpg
				player I'll take that as a no. You're getting better, at this though.
				t While she is improving, she still can't take it down her throat. So...
				im brownLewd3.jpg
				brown Mmm... I learned this technique... From a story.<br>If it feels good, y-you can reward me... With...
				im brownLewd4.jpg
				brown Ah~!
				t The little slut she is, she eagerly tries to catch as much of the load as she can on her tongue, before scooping the rest of her face and hair to swallow down.
			`);
			passTime();
			if (checkTrust("ojou") == 1) {
				writeFunction("writeEncounter('brownVoyeur')", "Meanwhile...");
			}
			else {
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "brownInvite": {
			writeHTML(`
				define ojou = sp ojou; im images/ojou/casual.jpg;
				player Actually, I'd like to just talk this time.<br>Maybe more than that afterwards, if you behave.
				t she seemed dissapointed for a moment, but quickly perks back up.
				player ojouF, the name sound familiar?
				brown Sh-she's my sister...
				player brownL, right. 
				brown S-step sister actually... Y-you want her?
				t Rather than look disgusted or horrified, brownF just looks... Excited. Hesitant, but the way her hands twitch and she licks her lips...
				player I want a lot more than just her. I've got big plans for the whole school. And if you help me, I'll give you...
				t You lean in close to whisper, and she gasps.
				...
				ojou I'm hooome~! brownF? Mom?
				t ojouF closes and locks the door behind her. The house is quiet... Too quiet.
				ojou Hellooooo~?<br><i>Is she not home...? She left to go back to school earlier, but she wasn't in class, and *he wasn't around either...</i>
				t She'd waited more than half an hour, telling herself she wanted to catch you red handed. There's no way a refined lady would want to watch... <i>That</i>...
				ojou I guess not...<br>Wait, what if *he...
				t She hesitates for a moment before throwing her bag aside and sprinting up the stairs. She rushes into her sister's room, panting and panicked.
				brown ojouF?
				ojou brownF! Thank god, I though *he'd kid-<br>Nevermind, sorry.
				brown No, I'm sorry.
			`);
			writeFunction("writeEncounter('brownInviteLewd')", "Continue");
			break;
		}
		case "brownInviteLewd": {
			setTrust("ojou", 21);
			addFlag("ojou", "brownInvite");
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brownRegret": {
			writeHTML(`
				define ojou = sp ojou; im images/ojou/casual.jpg;
				player Actually, I'd like to just talk this time.<br>Maybe more than that afterwards, if you behave.
				t she seemed dissapointed for a moment, but quickly perks back up.
				player ojouF, the name sound familiar?
				brown M-my sister...?
				player brownL, right. 
				brown S-step sister actually... Y-you want her?
				t Rather than look disgusted or horrified, brownF just looks... Excited. Hesitant, but the way her hands twitch and she licks her lips...
				player I want a lot more than just her. I've got big plans for the whole school. And if you help me, I'll give you...
				t You lean in close to whisper, and she gasps.
				...
				ojou I'm hooome~! brownF? Mom?
				t ojouF closes and locks the door behind her. The house is quiet... Too quiet.
				ojou Hellooooo~?<br><i>Is she not home...? She left to go back to school earlier, but she wasn't in class, and *he wasn't around either...</i>
				t She'd waited more than half an hour, telling herself she wanted to catch you red handed. There's no way a refined lady would want to watch... <i>That</i>...
				ojou I guess not...<br>Wait, what if *he...
				t She hesitates for a moment before throwing her bag aside and sprinting up the stairs. She rushes into her sister's room, panting and panicked.
				brown ojouF?
				ojou brownF! Thank god, I though *he'd kid-<br>Nevermind, sorry.
				brown No, I'm sorry.
			`);
			writeFunction("writeEncounter('brownRegretLewd')", "Continue");
			break;
		}
		case "brownRegretLewd": {
			addFlag("ojou", "brownInvite");
			writeEvent("brownInviteLewd");
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brownInviteRepeat": {
			writeHTML(`
				define ojou = sp ojou; im images/ojou/ojouP.jpg;
				im brownInvite1.jpg
				ojou St... No...
				player brownF, you're sure?
				brown Yes... Watching you defile her...
				im brownInvite2.jpg
				player Wow. You hear that? She's gotta hate you something fie-
				brown N-no! I love you, ojouF! You're my sister!
				im brownInvite3.jpg
				ojou Ghh... Why-hy-hy...?
				brown Because... I can't help it... Watching him...
				im brownInvite4.jpg
				brown Watching him defile someone so beautiful...
				im brownInvite5.jpg
				ojou Ghhh~!
				brown Mmm... C-can we... Again-
				player Yeah, hurry it up!
				im brownInvite6.jpg
				brown I really do love you ojouF... See?
				define brown = sp brown; im images/brown/brownP.jpg;
				im brownInvite9.jpg
				brown P-please, playerF... I can't feel that good again unless you...
				player Unless... Ghh... I what?
				brown Please, make me cum, by covering me in my sister's creampie!
				im brownInvite10.jpg
				brown Ghh~! Cumming~!
				player This family...
				t You drop ojouF onto the bed.
				brown Y-yes... I'll clean her up for you...<br>ojouF, spread your legs... Please...
			`);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brownVoyeur": {
			writeHTML(`
				t Peeking through a crack in the door, she doesn't know you've spotted her from the corner of your eye.
				ojou <i>brownF... What on earth are you...<br>My own sister! I have to tell someone...</i>
				t Yet as she gulps to try and keep her mouth from watering, she realizes she can't move an inch. Anyone walking by could see her peeping, but she still spreads her legs anyways...
				t But when you say farewell to brownF she snaps out of it, carefully running away as fast as she can.
				t You walk out of the classroom as brownF cleans herself up. No trace of her left but a few droplets on the floor.
				t You'll have her soon.
			`);
			setTrust("ojou", 2);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brownQuo": {
			writeHTML(`
				t You wait for the other students to file out...
				im brownIntro.jpg
				brown Ah, *sir... Did you need another... Some relief?
			`);
			writeFunction("writeEncounter('brownsLewdRepeat')", "Let's use your mouth again");
			if (checkFlag("ojou", "brownInvite") != true && checkTrust("ojou") == 2) {
				writeFunction("writeEncounter('brownInvite')", "Talk about ojouF");
			}
			if (checkFlag("ojou", "brownInvite") == true) {
				writeFunction("writeEncounter('brownInviteRepeat')", "Let's invite ojouF again");
			}
			if (checkFlag("ojou", "ribbonInvite") == true && checkFlag("ojou", "brownInvite") != true) {
				writeHTML(`
					brown Hmm... ojouF has been staying late at school more often these days. Oh, sorry, I was just thinking of my system.
					t Since ojouF has already fallen prey to you, you don't need brownF to help you corrupt her. However, maybe a shock to the system from a family member could be useful for ojouF's training...
				`);
				writeFunction("writeEncounter('brownRegret')", "Use brownF to help train ojouF.");
			}
			switch (checkTrust("brown")) {
				case 81: {
					writeHTML(`
						brown S-so, is today the day you go... All the way with mom? I'm ready to help.
					`);
					writeFunction("writeEncounter('bmomLewd1')", "Head home with brownF");
					break;
				}
				case 82: {
					writeHTML(`
						brown S-so, I did just like you said with my mom. I'm not sure I did it right, but I think I have a plan just in case it hasn't fully stuck with her.
					`);
					writeFunction("writeEncounter('bmomLewd2')", "Head home with brownF");
					break;
				}
				case 100: {
					writeHTML(`
						t brownF looks thoughtful for a moment.
						brown Mom's been asking about you... And not in a subtle way either. Actually, I was wondering if I could talk to you about something...
					`);
					writeFunction("writeEncounter('bmomRepeat')", "Head home with brownF again");
					writeFunction("writeEncounter('brownStoryIntro')", "Talk with brownF");
					break;
				}
				default: {
					writeFunction("writeEncounter('brownChat')", "Talk about her story");
				}
			}
			writeFunction("writeEncounter('cancel')", "Go back");
			if (checkFlag("ojou", "brownInvite") == true && checkTrust("ojou") > 79 && checkTrust("brown") == 80) {
				writeEncounter('bmomPrompt');
			}
			break;
		}
		case "bmomIntro": {
			var goof = {index: "bmom", fName: "Alexia", lName: "Wright", trust: 0, encountered: false, textEvent: "", met: false, color: "#C67D29", author: "NoodleJacuzzi", artist: "Oreteki18kin", textHistory: "", unreadText: false,};
			data.story.push(goof);
			writeHTML(`
				define bmom = sp bmom; im images/brown/mama.jpg; 
				player Sure, I can run interference for you for a while.
				brown Thank you so much! I-
				t She quiets down as you approach her.
				player You understand what you're doing right now, yeah? You're inviting me into your home, when I've already taken you <i>and</i> your sister.
				t She gulps, but she doesn't seem surprised at what you're suggesting.
				brown Y-yes *sir.
				t ...
				im 014.jpg
				bmom Oh my, that's fantastic! So, is she making friends in class?
				t This little trip has been pretty ordinary so far, bmomF having shown a rapt interest in you from the moment you walked in the door. Apparently brownF's wealthy father doesn't live in the city.
				player We haven't covered that subject, actually. I do know she's been participating in more extracurricular activities lately though.
				t Every so often you glance behind bmomF to see brownF peeking out from her doorway. So much for this being about hiding her stash, she's clearly scoping out how you and her mother are interacting.
				t Which makes it all the more fun to tease her like this.
				bmom Oh, you should stay for dinner! I know brownF is a natural at her coursework, but I'd also love to hear about how ojouF is doing at school too. It's such a shame she's late to come home today. Oh, did you know her father...
				t As bmomF goes on and on, you think to yourself. Really, brownF is kind of playing you here. Sure, you'll have bmomF, but really brownF is just using you to play off her own degenerate fetish of having her mother fucked and stolen away.
				t Which is fine, obviously, except for the fact that she's not helping. Such passive behavior should be...
				player Oh, I couldn't possibly intrude like that. I actually should be getting going.
				t Punished.
				bmom Oh, that's such a shame! Well, you're welcome back any time. brownF? *Mister playerF is leaving!
				brown R-right, goodbye! Oh wait, I needed to talk with you for just a moment.
				t brownF pulls you aside and whispers.
				brown B-but I thought this was going to be... You know... The moment you-
				player Nope. But it's not just because I enjoy tormenting you. I'm not going to work my magic while you're squirreled away in your room. Next time, I expect you to be a more helpful assistant. And let's invite your sister too, yeah?
				brown B-but-
				player Anyways! Thank you again for having me. Take care!
				bmom Take care.
				brown G... Goodbye...
				Finish
			`);
			setTrust("brown", 81);
			passTime();
			break;
		}
		case "bmomLewd1": {
			writeEvent(name);
			writeHTML(`
				finish
			`);
			passTime();
			setTrust("brown", 82);
			break;
		}
		case "bmomLewd2": {
			writeEvent(name);
			writeHTML(`
				finish
			`);
			passTime();
			setTrust("brown", 100);
			break;
		}
		case "bmomRepeat": {
			writeHTML(`
				t You accompany brownF back to her place.
				t ...
				im 016.jpg
				bmom Welcome ho- Oh! M-my, playerF, I wasn't expecting you.
				t You give brownF a side-eyed glance as a completely nude bmomF arrives to greet you. She averts her eyes, but has a nervous grin on her face. It seems like she's been busy, and creative, with her mother since your last visit.
				player ... Well. Since you're obviously comfortable walking around like a complete whore, I may as well get right to it.
				bmom I'm sure I don't know what you mean by that... 
				t ...
				im 021.jpg
				bmom L-like this? I can't believe you want to do this, my daughter is-
				player Still resistant?
				brown It's mostly for show... I find it's easiest to find inspiration when I'm dealing with people who hold themselves back just a little.
				player Until the fucking starts, of course.
				bmom Using such language like that-
				im 022.jpg
				bmom Fffuck! My pussy! You're gouging my wet cunt right in front of my baby girl!
				player She's really mouthy, isn't she?
				brown Y-yeah, all the girls in my story are. I know it can be distracting, but hearing her say all these things...
				player You hear that, whore? Your daughter's getting off to your dirty talk.
				bmom Nggh~! 
				im 023.jpg
				im 024a.jpg
				bmom I'm sorry, darling... Mommy's completely addicted to this now...
				brown I wouldn't have it any other way, mom~
				finish
			`);
			passTime();
			break;
		}
		case "brownStoryIntro": {
			writeHTML(`
				brown H-hey... I just wanted to ask you... ojouF, She's not the last one you'll be going after, right?
				player Nope. The PTSA, the school, honestly maybe the entire town. The nice thing about being greedy is there's always something new to want.
				brown So you really are planning to corrupt the entire school.
				t She takes a deep breath, her body quivering just the slightest bit.
				brown I... I want to be an author. I want to do things to people, make them feel like I do.
				player Well good for you! I don't think I have a writer in my harem yet.
				brown But, I don't want to just write the normal stuff. I think the authors I read are pulling from something more than just imagination, and I want to try that too.<br>I want to feel like I did when you toyed with ojouF... With m-mom...
				player I think I can arrange something. 
				brown That's amazing! Thank you so much! I want to be published someday, this is like a dream come true...<br>So long as it's alright with you, I'll make stories about your... Your <i>conquests</i>. I promise I won't let you down!
				cancel
			`);
			setTrust("brown", 101);
			break;
		}
		case "brownStoryQuo": {
			writeHTML(`
				t You wait for the other students to file out...
				im brownIntro.jpg
				brown Welcome back *sir. D-did you have something, or someone, to show me today?
			`);
			writeFunction("writeEncounter('brownsLewdRepeat')", "Let's use your mouth again");
			writeFunction("writeEncounter('bmomRepeat')", "Let's pay your mother another visit");
			if (checkFlag("ojou", "brownInvite") != true && checkTrust("ojou") == 2) {
				writeFunction("writeEncounter('brownInvite')", "Talk about ojouF");
			}
			if (checkFlag("ojou", "brownInvite") == true) {
				writeFunction("writeEncounter('brownInviteRepeat')", "Let's invite ojouF again");
			}
			if (checkFlag("ojou", "ribbonInvite") == true && checkFlag("ojou", "brownInvite") != true) {
				writeHTML(`
					brown Hmm... ojouF has been staying late at school more often these days. Oh, sorry, I was just thinking of my system.
					t Since ojouF has already fallen prey to you, you don't need brownF to help you corrupt her. However, maybe a shock to the system from a family member could be useful for ojouF's training...
				`);
				writeFunction("writeEncounter('brownRegret')", "Use brownF to help train ojouF.");
			}
			if (checkTrust("president") > 81) {
				writeFunction("writeEncounter('brown-president')", "Use presidentF as reference material.");
			}
			if (checkTrust("starlet") > 82) {
				writeFunction("writeEncounter('brown-starlet')", "Use starletF as reference material.");
			}
			if (checkTrust("purple") > 89) {
				writeFunction("writeEncounter('brown-purple')", "Use purpleF as reference material.");
			}
			if (checkTrust("instructor") > 79) {
				writeFunction("writeEncounter('brown-instructor')", "Use instructorF and her team as reference material.");
			}
			if (checkTrust("brown") > 102) {
				writeFunction("writeEncounter('brownFinaleRepeat')", "Ponder brownF's live-in offer.");
			}
			writeFunction("writeEncounter('cancel')", "Go back");
			if (checkTrust("brown") == 103) {
				writeEncounter("brownFinalePrompt");
			}
			break;
		}
		case "brown-president": {
			writeEvent(name);
			passTime();
			raiseTrust("brown", 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brown-starlet": {
			writeEvent(name);
			passTime();
			raiseTrust("brown", 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brown-purple": {
			writeEvent(name);
			passTime();
			raiseTrust("brown", 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brown-instructor": {
			writeEvent(name);
			passTime();
			raiseTrust("brown", 1);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "brownFinalePrompt": {
			writeHTML(`
				t You wait for the other students to file out...
				im brownIntro.jpg
				brown playerF... I-i want to make you an offer.
				player Oh? You're not usually this forward.
				brown W-well, you always seem to like it when I push myself, so... I want you to live with me!<br>I want to commit to being an erotica artist, I want to be around you every waking moment of the day, not just capturing the aftermath of your conquests!<br>I know bmomF would love it, and ojouF... Would probably like it too!
				t It's clear she's gathered up a lot of courage to try and convince you. Despite your relationship, it feels more like she's still basically playing the reader to you, instead of being a member of your harem proper.
				brown I can't even begin to imagine how it'd feel... To wake up every morning knowing you could take me without warning, or that I could come downstairs to find you deep inside my mom... It's one thing to participate in the fantasies, it'd be another to live them every hour of every day...
				player Honestly, you sound like a drug addict looking for a bigger fix.
				brown I understand, it would be a huge investment... To ask you to put aside your own goals, at least for now, to indulge me like this. But you'd still be free to live your normal life, and I'd do my best to help you get anything, or anyone, you want at school...
			`);
			raiseTrust("brown", 1);
			writeFunction("writeEncounter('brownFinaleAccept')", "Accept brownF's offer");
			writeFunction("writeEncounter('brownFinaleReject')", "Refuse brownF's offer for now");
			break;
		}
		case "brownFinaleRepeat": {
			writeHTML(`
				brown S-so, have you made a decision yet? You'd still be free to live your normal life, and I'd do my best to help you get anything, or anyone, you want at school...
				t She's speaking from the heart, but it's clear her fantasies mostly involve you staying at her place. Plus, between brownF, bmomF, and ojouF, the brownL family will be a lot to manage.
			`);
			writeFunction("writeEncounter('brownFinaleAccept')", "Accept brownF's offer");
			writeFunction("writeEncounter('cancel')", "Refuse brownF's offer for now");
			break;
		}
		case "brownFinaleAccept": {
			writeHTML(`
				player Sure.
				brown Plus, I know with my dad's connections we could exert a lot more pressure over the school.
				player brownF.
				brown Ah! You probably don't want to share bmomF, that's fine! I've read a few stories where the original husband is kept around as a bank account, or divorced entirely. To be honest, I don't really like-
				player brownF, I said yes!
				brown A... Eh? R-really? You really mean it?
				player Yeah. I'm interested to see where you go from here, just like you're interested in me.
				brown Oh, thank you! I won't let you down! I'll help you move, and if you need a room then...
				t She goes on and on, she really thought this all through. At this point you may as well just enjoy the ride.
				t ...
				t And so the ride begins.
				im 026.jpg
				brown So how are you feeling?
				ojou W-well, I guess it's not to bad to enjoy a moment together, like we used to.
				brown No, you know what I meant. 
				ojou Oh... I, um...
				im 027a.jpg
				ojou I suppose it's a bit... Drafty.
				brown Don't you feel excited? Anyone could see you!
				t Since you moved in brownF has really taken a near-scientific approach to turning her life as lewd as possible, using ojouF, bmomF, and even you to explore anything that catches her fancy.
				im 073.jpg
				t And it seems like every day she's impressing you with a new idea.
				im 075a.jpg
				t Slowly falling down the rabbit-hole of degeneracy.
				im 082.jpg
				ojou I can't believe you...
				bmom My darlight daughter... Are you enjoying the view?
				im 087.jpg
				t And delighting in the fact that she's dragging her family down with her.
				im finale1.jpg
				t Always delighting in seeing you defile what she holds dear, it's like she puts you on a pedestal. She adores you, worships you...
				im finale2.jpg
				t And then finally, with enough training, and coaching from your other little pets...
				im finale3.jpg
				t brownF finally tasted the forbidden fruits she'd been writing about for so long. Of course, by this point, both her sister and mother are heavily pregnant on account of how frequently you use them as jizz-dumps....
				t So brownF has some catching up to do. Perhaps her next story will capture the essence of what could be considered the greatest form of conquest of them all.
			`);
			addFlag("brown", "complete");
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "brownFinaleReject": {
			writeHTML(`
				player Not yet.
				brown Ah... R-right. Of course! You still have work at the school.
				player Yeah, but don't worry. I'll make sure you have a chance to see some more inspiration along the way.
				brown Really? Alright, I'll make you proud! I'll memorize every inch, I'll write stories that'll leave you stunned, and we'll all live comfortably off the fortune I'll make!
				player Oh? Is there good money in writing erotica?
				brown W-well... No, not really... But maybe I'll do so well I'll live the live of a star anyways!
			`);
			writeFunction("writeEncounter('cancel')", "Finish");
			break;
		}
		case "brownChat": {
			writeHTML(`
				player So what exactly does this character I resemble <i>do</i>?
				brown They... *He wakes up the protagonist, and the people around her.
				player Right, but how?
				brown It isn't physical as much as... They start to be aware of how they're seen. How people talk about their bodies, and how powerless they'd be to...<br>They start having fantasies, and exploring darker places on the internet... A-and then <i>*he</i> arrives.
				t She crosses her legs.
				brown They feel small and weak, and every time they do their bodies tingle from their feet up their spine and a voice inside their head says "you're right"...
				player Is that how you feel?
				brown ... A little. C-can I... Can I pleasure you again today?
			`);
			writeFunction("writeEncounter('brownsLewdRepeat')", "Let's use your mouth again");
			writeFunction("writeEncounter('cancel')", "Maybe another time");
			break;
		}
		case "brownSpecialOffer": {
			writeHTML(`
				im brownMother1.jpg
			`);
			break;
		}
		case "brownSpecialLewd": {
			writeHTML(`
				
			`);
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "bmomPrompt": {
			writeHTML(`
				t You wait for the other students to file out...
				im images/brown/brownIntro.jpg
				brown Ah, *sir. i'm afraid I actually need to head home early today, I'm sorry. My mom is planning doing a full-house-clean today, so I need to make sure to hide my... Er...
				player I think I get the gist.
				brown A-actually, I'll want to hide things very thoroughly, if I had someone to... Distract her...
				player <i>This sounds like a very thinly veiled attempt to get me to come home with her.</i>
			`);
			writeFunction("writeEncounter('bmomIntro')", "Go home with brownF");
			writeFunction("writeEncounter('cancel')", "Let brownF go home");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "bmomLewd1", name: "Fantasy"},
	{index: "bmomLewd2", name: "Seduction"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "brownIntro": {
			writeHTML(`
				im brownIntro.jpg
			`);
			break;
		}
		case "brownsLewd": {
			writeHTML(`
				t Since you've already gone from zero to sixty in a single meeting, you may as well go all the way to one hundred, right?
				player brownF, I'm going to give you two options.<br>One; The two of us walk away and pretend this conversation never happened.
				brown I think I'd like-<br>*Sir, w-why are you taking off your clothes?
				player Option two: I give you everything you've ever wanted, and you become mine.
				im brownLewd1.jpg
				player What will it be?
				brown ...
				im brownLewd2.jpg
				t She gulps before immediately leaning forwards to take in your cock.
				t ... When you told her to be more honest, this wasn't <i>exactly</i> what you had in mind. But this works too. She must've been even more repressed than you'd assumed.
				t Despite her enthusiasm she lacks technique and can't get very far down, so instead...
				im brownLewd3.jpg
				brown Hah... Aaah~
				t Tongue out she strokes you with both hands while locking eyes with you. The pleading look is just unfair...
				im brownLewd4.jpg
				brown Ah~!
				t As you paint her face white she keeps letting out small gasps, shivering with each line of cum hitting her face.
				player Wow... You've really got some potential. 
				t She just closes her eyes and nods.
				player <i>Not much work to do on her... I guess I could visit her if I need relief. It might be worth it to have another student in my pocket at least.</i><br>Good work. I'll see you around.
				t She nods again.
			`);
			break;
		}
		case "brownsLewdRepeat": {
			writeHTML(`
				im brownLewd1.jpg
				im brownLewd2.jpg
				im brownLewd3.jpg
				im brownLewd4.jpg
			`);
			break;
		}
		case "brownInviteLewd": {
			writeHTML(`
				define ojou = sp ojou; im images/ojou/ojouP.jpg;
				im brownInvite1.jpg
				ojou Let me go! Let me go right now! brownF, help!
				brown *He told me... About how you were watching us...
				ojou N-no! No, *he's lying!
				brown So *he made me a deal... *He said if I gave you to *him...
				ojou Stop *him, please! It doesn't have to be you or me! Call the-
				brown *He said I could watch...
				im brownInvite2.jpg
				ojou AAAAAAH!
				brown Ah...
				t She is unbelievably wet. Her panties were soaked when you peeled them off of her, and it's very clear how they got that way.
				im brownInvite3.jpg
				ojou GHHHhhg!
				t She grunts as you let gravity aid your thrust, plunging as deep down her cunt as she can take.
				t All the while brownF watches, unable to avert her eyes. It's like she can't even more.
				im brownInvite4.jpg
				t After only a few thrusts her legs are quivering, she's having an orgasm while her sister watchings this brutal fucking.
				t As you begin to grunt yourself brownF's panting grows louder. She's clearly getting excited watching you get closer... Until...
				im brownInvite5.jpg
				ojou NOOOOO!
				t For all her desperate resistance, she knows down to her core what this hot sensation filling her is. Again, she can't help but shake and quiver from her treatment.
				player Ghh... brownF, stand up, lift your skirt.
				im brownInvite6.jpg
				brown O-okay...
				t Her panties are soaked through too.
				player Good... Strip! <b>Now</b>!
				t You start thrusting again.
				define brown = sp brown; im images/brown/brownP.jpg;
				im brownInvite8.jpg
				brown Okay... *Sir...
				ojou N-no... Shtop...
				player Gh... Hands away from your pussy! Get ready!
				t With one big motion you lift ojouF to give brownF a proper reward, pulling your cock out of ojouF's creampied pussy as she hits an orgasm. As a result...
				im brownInvite10.jpg
				t Cum and pussy juice splatter over brownF's lower body. Despite not touching herself...
				brown Aaahgggh~!
				t She shakes in what is obviously her own orgasm. Her cunt even starts leaking from the sensation.
				player How does it feel?
				brown It...<br>I'm not even touching... But it feels even better than when I...<br>ojouF... I'm sorry...
				player Don't be. She wanted this.<br>Now, wanna watch me work some magic?
				t You drop ojouF onto the bed and reach into your heap of clothes to fish out your pendant.
				brown Is... Is that...?<br> What are you going to do with her?
				player Nothing too big, for now. Just a command to keep quiet about this with anyone but you and me. And a command to drop by my office soon.<br>After that... I have a little more fun planned.
			`);
			break;
		}
		case "brownInviteRepeat": {
			writeHTML(`
				im brownInvite6.jpg
				im brownInvite1.jpg
				im brownInvite2.jpg
				im brownInvite3.jpg
				im brownInvite4.jpg
				im brownInvite5.jpg
			`);
			break;
		}
		case "brownSpecialLewd": {
			writeHTML(`
				im brownMother2.jpg
				im brownMother3.jpg
				im brownMother4.jpg
				im brownMother5.jpg
				im brownMother6.jpg
				im brownMother7.jpg
			`);
			break;
		}
		case "bmomLewd1": {
			writeHTML(`
				define bmom = sp bmom; im images/brown/mama.jpg; 
				define ojou = sp ojou; im images/ojou/casual.jpg;
				brown So then... Today's the day. Alright, what should I do?
				player Hmm. Well, a good technique for loving mothers is to shock the system and put them into a trance while they're half conscious and delusional, but we'll need to set the scene first. We could wait for a midday nap, or maybe she uses sleeping pills...
				brown Hmm... I think I have a plan. ojouF will be home too, I'd like her help too.
				player The more the merrier.
				t You accompany brownF back home. Sneaking in quietly, you set the stage for brownF's plan.
				t ...
				define bmom = sp bmom; im images/brown/mamaP.jpg; 
				define brown = sp brown; im images/brown/brownP.jpg; 
				bmom Mmm...
				t Groggily, bmomF squints her eyes open.
				bmom Hmm, I think I napped for too long. I probably should stop reading those stories, it's not ri-<br>What the hell? My hands...
				t As she tries to rub her eyes bmomF finds resistance, she's been tied to the bedpost.
				brown I did good, right...? So for my reward...
				bmom brownF's voice?
				player Yeah, it's time you get what's coming to you. I think she's awake. ojouF, be a dear and help your sister relax. 
				bmom Who is-
				t You, a nervous but giddy brownF, and a tense ojouF walk into the bedroom where bmomF is tied down, all three of you completely nude.
				im 049.jpg
				bmom What on earth?! 
				brown G-good morning mom, I was kind of hoping you'd wake up right in the middle of the act...
				bmom brownF, what is going on? What are you doing?! And ojouF?!
				t ojouF averts her eyes, ashamed.
				bmom N-no, don't do this. If this is about those stories you've been reading-
				brown You read them? I was wondering where those books went. Still, I'm sorry. There's no turning back.
				bmom Darling! Those were fiction, please snap out of this! You can't let him do this to me!
				brown Don't worry mom, we're not doing "mother's day gift", we're doing something closer to the finale scene of "Master and I's Performance".
				t A brief look of confusion passes over bmomF's face, followed by an even deeper look of terror. Clearly she recognizes the story.
				brown Okay.. Okay... I can do this.
				im 051.jpg
				ojou Are you sure? It's not too late to turn back.
				brown I... I don't...
				im 053a.jpg
				t brownF takes in the sight of your member and it's clear her conviction wavers for a moment. She's a virgin, a pretty small one too, your dick is as big as her forearm.
				brown I-
				bmom Stop! Please, take me instead! 
				t At that, brownF gasps, her cunt clenching suddenly. This wasn't part of the plan, but she looks up at you with a pleading expression.
				player ... Sure, why not. I'll even untie you. You two lay back and enjoy.
				im 052a.jpg
				brown R-right...
				t You untie bmomF, and let her get into a more comfortable position. She doesn't try to run, probably because she's worried you'd take her daughters hostage.
				im 020.jpg
				bmom Okay... Okay...
				t But really, she's not doing any better than brownF. She's got a much, much more developed body but is clearly barely able to stay in control of herself. As you approach she actually starts to hyperventilate.
				t Her daughters, her position, maybe even her fantasies from the stories she took from her daughter. All of this comes to a booming crescendo until her mind can take no more, and suddenly...!
				t Her head slumps down.
				player ... Oi. Did I just get blueballed?
				t ... No response. She's still breathing, but-
			`);
			writeDual("brown", "images/brown/brownP.jpg", "ojou", "images/ojou/casual.jpg", "Mom!");
			writeHTML(`
				player Relax, she just fainted. Probably for the best anyways, I wasn't really looking forward to doing this the unpleasant way.<br>So, brownF. Wanna take the next step together? Just like in your books?
				brown Eh? J-just like... In my books...
				ojou What?! You can't be serious! brownF, look what he did! You can still say no, brownF. You can draw the line here...
				t brownF takes a moment, thinking, taking in the sight of you, the very picture of dominance, of her dreams, standing over her naked and unconcious mother.
				brown ...
				t ...
				bmom Goodbye! And do take care!
				player Thank you for everything, it was lovely meeting with you. Tomorrow, then?
				bmom Of course! You're welcome back here anytime. Are you sure you don't want a snack for the road?
				player No thanks, I had something to eat while brownF was working on you.
				bmom Huh? Working on me? I... I don't...
				player Don't think too hard on it. I'll see you again soon!
			`);
			break;
		}
		case "bmomLewd2": {
			writeHTML(`
				player So, how'd her conditioning go?
				brown Really well. Since I know she's been reading the same stories as me, I think I know what buttons are best to push. Plus, dad's been away for almost a year now, so...
				player Alright, let's do this then. I'm feeling pretty ready after getting teased last time.
				t You accompany brownF back home.
				t ...
				im 014.jpg
				bmom brownF. playerF, it's good to see you again!
				player And you as well, ma'am. 
				brown I have to go handle something in my room for a while. Mom, playerF wanted to talk to you. Is that alright?
				bmom Of course!
				t brownF makes some flimsy excuse for why she has to go, but it doesn't seem like bmomF particularly cares. brownF didn't go into how she conditioned her mother, but as bmomF invites you to talk at the dinner table it's clear one of the commands was to be a lot more forwards with you.
				t ...
				bmom It can certainly be... Challenging, to raise them while their father is off in another country. Sure, he calls, but...
				player I can imagine how hard it would be. Young women like them could certainly benefit from a second parent.
				bmom Ehe... Another glass of wine? To be honest, I'm quite tempted to ask you to stay longer to talk about the girls. Maybe... Overnight?
				player Ma'am, your daughter is home.
				bmom It'll be fine~<br>To be honest... Well, can I tell you a secret?
				t She leans in to whisper into your ear.
				bmom Under my dress... I'm not wearing anything~
				im 015a.jpg
				player Oh my.
				bmom I certainly hope I'm not being too forwards~
				player ... Alright, fine. Get naked.
				bmom Ooh, how forwards! How'd you know that's how I like my *men?
				t ...
				define bmom = sp bmom; im images/brown/mamaP.jpg; 
				im 021.jpg
				t It doesn't take long for her to wind up in the same position she was in last time, but the atmosphere is completely different. 
				bmom Mmm, I hope you don't mind me saying, but there's something familiar about you.<br>Have you been invading and old lady's dreams lately?
				t She presents herself without hesitation in the most whorish way she can manage.
				t And then, the sound of the doorknob turning.
				brown ... Mommy?
				im 021a.jpg
				bmom ...
				t brownF playing the doe in headlights, bmomF frozen in a mess of motherly instincts conflicting with hypnotic conditioning, the stage is set and it's up to you to take action.
				im 022.jpg
				t And take action you do. 
				bmom Fff...! brownF, close the door!
				brown ...
				bmom Stuh... Don't look at me! 
				t Her cunt clenches with every thrust, and interestingly despite trying to get brownF to close the door, she doesn't once ask you to stop.
				bmom Nggh, g-gonna... I can't cum... Not in front of my daughter...!
				im 023.jpg
				bmom NNNGH~!
				t Her legs shake as she cums, <b>hard</b>, hard enough to make her lose her sense of self for a moment.
				bmom Hh... Sto... brownF, go to your-
				t And then you resume thrusting without missing a beat.
				t ...
				im 024.jpg
				player So, what exactly did you do with her?
				brown Mostly, I made the stories she read, the same ones I did, repeat in her head, over and over. I guess after a few times she started seeing you like... Like I do.
				player Interesting... How about you push her a little farther for next time?
				brown Next... Right! Yes *sir, I'll do my best to impress you!
			`);
			break;
		}
		case "brown-president": {
			writeHTML(`
				define president = sp president; im images/president/presidentP.jpg; 
				president Ah, brownL. Welcome, come on in.
				brown presidentF?! W-what are... Well, I guess I shouldn't be too surprised, know that playerF has already gotten to you. Still, why are you...
				president Naked? Really, what <i>is</i> nudity, aside from just another means of self-expression? In a way, I am creating art in more ways than one, and the underlying motif is the same: Freedom.
				brown So cool... You're still yourself, even like this...
				president Hmhm. treasurerF doesn't seem to think so, at times. Such is life. Now, playerF, was there something you needed?
				player Yeah, actually.
				t ...
				brown The student council president... You were probably the most respected girl in the entire school...
				im images/president/artRoom1.jpg
				brown Bearing the weight of more responsibilities than most grown adults, and now you're...
				im images/president/anal1.jpg
				president Nggh, now I'm just my *master's perfect fucktoy! But I still have some agency of my own, you know...
				brown Oooh, I feel something coming on... 
				president Same... Here... Darling!
				im images/president/anal2.jpg
				president Cumming~!
				brown Hah~!
				t ...
				brown Hm... All the possibilities... What if she had a plot of her own, and corrupted women of her own accord... Hm...
				t While you and presidentF get cleaned up, brownF is writing away at her latest fantasy.
				president My, she's quite admirable. I think someone as driven as her has a bright future ahead.
				player Yeah, writing smut.
				president Writing <i>art</i>, playerF. Do take care.
			`);
			break;
		}
		case "brown-purple": {
			writeHTML(`
				purple Hey, uh... Nice to meet you. Hey, you have scarfL's psychiatry class, right?
				brown Yeah! I love how she really puts things into perspective, even if she is a bit...
				purple Yeah, yeah, I get that. Although I've learned not to judge books by their cover. Look at playerF for example.
				player Oi.
				t The two girls have a laugh at your expense for a moment.
				purple Hehe... So, what did you want again?
				t ...
				im images/purple/1-1.jpg
				purple Honestly, to think after all we've been through, to think you wanted something as normal as this.
				brown S-so you're really going to-?
				purple Sure, why wouldn't I?
				im images/purple/1-2.jpg
				purple Seriously, this thing's a monster.
				brown Yeah, it's too big for me...
				purple Eh, really? That's a shame. I mostly just roll with it, but I think my mom could give you some pointers.
				brown Mmm... What does playerF want all these mother daughter pairs for... Hm...
				purple Maybe-
				player <b>Suck.</b>
				im images/purple/1-3.jpg
				purple Glllhf-!
				brown W-wow... And of her own accord... 
				t ...
				im images/purple/1-4.jpg
				purple Kph... H-how was that?
				player You're getting better every day. chubbyF would be proud.
				purple Hehe~
				brown Hm... All the possibilities... But what if the hypnosis had a beneficial effect... A family dynamic repaired through pleasure...
				t While you and purpleF get cleaned up, brownF is writing away at her latest fantasy.
				purple Hmm. You know, I never knew she had this kind of habit. She was always so quiet in class.
				player Oh, made a new friend?
				purple You sound like my mom. Oh, speaking of, I think she's making a new kind of pie today. Let's go grab some! 
				player I could go for a cream-<br>No, that joke's too easy.
			`);
			break;
		}
		case "brown-starlet": {
			writeHTML(`
				starlet Omigod! An amateur writer, that's awesome! Hey, if you ever need a-<br>Well, I'd have to ask my mom, but if you're any good I can totally vouch for you to come work with us!
				brown W-wow, really? I've been in talks with a few people, but if I could write something for y-<br>Wait, mom?
				starlet Yeah, she runs the studio me and playerF work at! Dad's an actor too, but he's mostly retired. He'll cameo in a cuck scene from now-
				brown ...
				starlet You alright? You look kinda flush.
				player She's probably just excited. So, you ready?
				starlet Sure! Doing things off camera is a bit... Hmm, but I guess so long as there's an audience it's still porn. Let's go!
				t ...
				brown And to think, you seemed so normal at first glance.
				im images/starlet/1-3.jpg
				starlet Ffffuck me, right in my slutty little ass~!
				brown Well, I guess I didn't really know you all that well... Oh wow, I searched your name online and... <i>Wow</i>...
				starlet Oh yeah, keep that rhythm... If you w-want, brownF, we could watch them together~!
				brown And with your mother too... Oh wow...
				im images/starlet/1-4.jpg
				starlet Oh fuck yes, creampie me~!
				t ...
				brown Hm... All the possibilities... A family dynamic entirely defined by porn, but what if I showed her sensitive side too? Oh, and I have a lot of reference materials too...
				t While you and starletF get cleaned up, brownF is writing away at her latest fantasy.
				starlet Wow, she's really passionate!
				player She reminds me of a certain someone.
				starlet Hehe, what, me? Nah, I get bored just writing super easily. Hey, I ever tell you about the time I passed a technical writing course without talking about pornography? Man, I had to use three of mom's toys just to keep myself awake.
				player Three? While writing? How did-<br>Nevermind, you can keep that to yourself.
			`);
			break;
		}
		case "brown-instructor": {
			writeHTML(`
				define bikini = sp Bianca; im images/instructor/bikini.jpg; altColor #D88A25;
				define track = sp Casey; im images/instructor/track.jpg; altColor #227F2E;
				define karate = sp Aiko; im images/instructor/karate.jpg; altColor #FAF9FE;
				define gymnast = sp Lansley; im images/instructor/gymnast.jpg; altColor #D07E8D;
				instructor Oh, it's brownF!
				brown H-hello, Miss instructorL.
				instructor I haven't seen you since the last extra-credit assignment for your gym class. You need another proctor?
				player No, actually we had something else we needed. We were hoping that I and the team could put on a little show for her.
				instructor Sure! Inspiring others is half of an athlete's job after all. Girls, let's show off a little, line up for playerF!
				t ...
				im images/instructor/102.jpg
				karate W-why do I have to be the demonstration?!
				instructor Huh? Don't be rediculous, you're not the demonstration, you're just up first. Alright!
				im images/instructor/103a.jpg
				karate Haaah~!
				instructor Nice entry! Alright, one, two! One, two! Roll those hips!
				purple W-wow...
				track She's got pretty good form, huh? I mostly go for standing, but this position's a pretty good isometric.
				gymnast I can't believe instructorF even tailors this to our specialties...
				im images/instructor/104.jpg
				karate Oh~!
				instructor Don't lost focus, hold that core tight!
				t ...
				im images/instructor/106.jpg
				karate *Huff*... *Huff*...
				instructor Good Hustle! 
				brown Hm... All the possibilities... Oh, what if the Olympics was just as corrupt as they are? Oooh, and all those other sweaty, ready athletes were to...
				t While you and the team switch up, brownF is writing away at her latest fantasy.
				instructor Hah, she's a regular monkey at a typewriter! Maybe she'll write something covering one of you guys one day!
				karate Make sure to show... Or write, I guess, my good side!
				gymnast Oh goodness...
				instructor Anyways, good work! Next up line up, and be sure to in some more practice after you finish. Uh, maybe not something that uses your legs.
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
			writePhoneImage("images/brown/reward.jpg", "Art by Oreteki18kin");
			writePhoneSpeech("brown", "", "Not all characters have dedicated endings, brownF is one of them. Still, you've completed as much of brownF as possible. Good work!");
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