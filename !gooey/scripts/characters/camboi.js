var character = {index: "camboi", fName: "Damian", lName: "Wisk", trust: 0, encountered: false, textEvent: "", met: false, color: "#685E55", author: "NoodleJacuzzi", artist: "Himitsu Kessha Vanitas", textHistory: "", unreadText: false,};

var logbook = {
	index: "camboi", 
	desc: "A young teacher who's somehow already checked out and has little motivation. He's certainly not one for small talk.",
	body: "He's thin, but not quite skinny, and his skin is extremely smooth like he shaves or plucks regularly. He must have quite the hobby to keep himself in this good of a shape.",
	clothes: "He's usually wearing an ordinary button-up and tie, although the outfit fits the curves of his body a lot more than an off-the-shelf shirt should.",
	home: "He's always eager to get home, it's the only thing he seems excited about. There must be something he's doing the moment he's off the clock.<br>Maybe he's one of those types who spends all his time online?",
	tags: "Self-degradation, camwhoring, sissification, small penis",
	artist: "Himitsu Kessha Vanitas<br>Original Image Set: Kaisha no Kawaii Kouhai (♂) o Hametakute Shouganai!",
	author: "NoodleJacuzzi",
};

var newItems = [
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro", name: "A teacher's office is here.", requirements: "?location teacherLounge; ?trustMin camboi 0; ?trustMax camboi 20;", altName: "", altImage: "",},
	{index: "workQuo", name: "camboi's office is here.", requirements: "?location teacherLounge; ?trustMin camboi 21; ?trustMax camboi 22;", altName: "", altImage: "",},
	{index: "hypnoQuo", name: "camboi's office is here.", requirements: "?location teacherLounge; ?trustMin camboi 100;;", altName: "", altImage: "",},
	{index: "streamQuo", name: "You can open that streaming site again.", requirements: "?location playerHouse; ?flag camboi stream; ?time Morning;", altName: "Streaming Website", altImage: "images/camboi/camslut.jpg",},
	{index: "streamQuo", name: "You can open that streaming site again.", requirements: "?location playerHouse; ?flag camboi stream; ?time Evening;", altName: "", altImage: "images/camboi/camslut.jpg", altColor: "#97D7F3",},
	{index: "camboiHotelBad", name: "Ask about camboi", requirements: "?flag demon hotelBad; ?trust camboi 666;", altName: "", altImage: "",},
	{index: "camboiHotelGood", name: "Search for camboi", requirements: "?flag succubus hotelGood; ?trust camboi 666;", altName: "", altImage: "",},
];

function popup() {
	document.getElementById('output').innerHTML += `
		<br>
		<br>
		<img class="bigPicture" style="background-color: #fff;box-shadow:0 0 60px 30px #fff, 0 0 100px 60px #f0f, 0 0 140px 90px #0ff;"  id = "DefNotAnAd" src="images/camboi/fakeAd.png" onclick="loadEncounter('camboi', 'streamIntro')" title="This lusty BITCH needs a REAL MAN'S COCK NOW!!!">
	`;
}

function writeEncounter(name) { //Plays the actual encounter.
	//writeFunction("changeLocation(data.player.location)", "Finish");
	//writeFunction("writeEncounter('cancel')", "Go back");
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define player = sp player;
		define camboi = sp camboi;
	`);
	if (checkTrust("camboi") > 1) {
		writeHTML(`
			define camslut = sp camboi; im images/camboi/camslut.jpg; altColor #97D7F3;
		`);
	}
	else {
		writeHTML(`
			define camslut = sp camboi; im images/camboi/camslut.jpg; altName Masked Camwhore; altColor #97D7F3;
		`);
	}
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "intro": {
			if (checkTrust("camboi") == 0) {
				writeHTML(`
					t You knock and after a few seconds a studious-looking young man opens the door.
					im 001.jpg
					camboi Yes?
					player Hi. I'm a new hire, I'm the school's new counselor actially. The name's playerF, nice to meet you... 
					camboi camboiF.
					t He doesn't return the handshake, he just stands there maintaining eye contact.
					player ... Right. Well, if you find a student who's struggling, or anything like that feel free to let me know. Would you happen to have anyone in mind?
					camboi Nope.
					player ... Would that happen to be because you're new here too?
					t It was just a guess by his age, although his expression of "I hope a truck runs into the school and takes me painlessly" is really throwing off your aim.
					camboi Listen, I really don't want to be rude, so I'd rather just keep this professional. Completely professional.
					player Like-
					camboi Good talk. Maybe just send an email next time. And I've worked here for years, by the way.
					t And the door is shut.
				`);
				setTrust("camboi", 1);
				passTime();
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			else {
				writeHTML(`
					im 002.jpg
					camboi You need something?
					player Just checking in. You doing alright?
					camboi I'll be fine once the shift's over.
					player What happens then?
					camboi I go home, obviously. Until then I have work to do, so could you hurry this up?
					t You're obviously not getting through to him with this attitude, unless you have something to say that'll really grab his attention.
				`);
				writeText("<input type='text' id='nameSubmission' value=''>");
				writeFunction("camboiPassword()", "Say something");
				writeFunction("writeEncounter('cancel')", "Go back");
			}
			break;
		}
		case "camboiPasswordSuccess": {
			removeFlag("camboi", "fail1");
			removeFlag("camboi", "fail2");
			writeHTML(`
				camboi !flag camboi hypno; W-what?
				player !flag camboi hypno; You heard me, bitch-boi.
				t !flag camboi hypno; He takes a step back. He's blushing, but it's clear he's more shocked than horny. Turns out terror at losing your dayjob beats pavlovian conditioning.
				camboi ?flag camboi hypno; Ghh~!
				t ?flag camboi hypno; He goes knock-kneed for a moment and steps back, a faint dark spot appearing on his slacks. He looks dazed, then horrified up at you. For a moment though hypnotic suggestion and pavlovian conditioning beat out his horror, but now the fear of losing his dayjob is present in his eyes.
				camboi I-inside. Now.
				player Oh?
			`);
			writeFunction("writeEncounter('corruption')", "Continue");
			break;
		}
		case "camboiPasswordFail": {
			writeHTML(`
				camboi ... Listen, pal, I get it. The work sucks, the place is hell, and principalF hounds you like a dog because you don't fit her inage of a "perfect school". I really don't want to be rude, but I'm. Not. Interested.<br>I don't make work friends, so unless it's an emergency just let me do my job and go home.
				t It seems like that didn't grab his attention. <b>This approach won't work. You'll need to find a way past his defenses, maybe exploring the town, or the internet, will help?</b>
				t ?flag camboi hypno; It really feels like he's the streamer you met online. If that's true he should be vulnerable to his "cum word", as he put it, because of your hypnotic video.
			`);
			if (checkFlag("camboi", "fail1") != true) {
				addFlag("camboi", "fail1");
			}
			if (checkFlag("camboi", "fail2") != true) {
				addFlag("camboi", "fail2");
				writeHTML(`
					t You're about to leave when you hear a soft whispering.
					camboi Sorry darlings, I can't be on camera now. Wait until I get home and I'll upload a new show, alright?
					player <i>If approaching him directly is a dead end, maybe I can find out what he's uploading, and where he might be uploading it to. I should use my computer at home.</i>
				`);
			}
			else {
				writeSpecial("Hiya, Noodle Jacuzzi here, I'm breaking the fourth wall for a moment because I get way too many comments about this.");
				writeSpecial("To progress with camboiF here, you need to use your computer and look up porn. There's an ad on the bottom of the screen, which should give you what you need to progress farther. If you're <i>still</i> stuck, the phrase you need to say is <b>bitch-boi</b>");
				writeHTML(`
					
				`);
			}
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "corruption": {
			if (checkFlag("camboi", "hypno") == true) {
				writeHTML(`
					im 029.jpg
					player So, you think you're the one who should be giving orders when I've got dirt like this?
					im 030.jpg
					camboi Th-that's not me. A-and besides, I could bust you for browsing sites like those. principalF is a hard-ass over a messy desk, you think she'll hesitate to go for the throat knowing her new counselor watches trap porn?!<br>And for that matter, I make more than enough to survive, you think I care about this shitty job, surrounded by twinks and bimbos all day in this stuffy suit?! I have all the leverage here, asshole, I'm the one in control, and-
					t You slam your arm into the wall next to his head and look him dead in the eye.
					player Do you feel in control?
					camboi ...!
					player I know who you are, you said it loud and clear. Your body belongs to your fans, you're a total buttslut, and what was that other one? Just hearing what we'd do to you will <i>almost</i> leave you a squirting mess?
					t He's almost hyperventilating at this point, but not out of fear. The commands he instilled in himself while under your hypnosis are still present, and are messing with his head. He tries to take a deep breath to calm himself, and he ducks under you to walk towards his desk, but he only makes it a few steps before he's unzipped his pants to reveal his hairless, undersized penis between two fingers.
					camboi N-no, don't... Don't look at me! I can't stop! Nghh~!
					player So, if you want to get off like a good little cumwhore, repeat after me, okay? Just a few little words, that's all. Just imagine you're streaming.
					t He nods. Though he isn't aware of it conciously, his subconcious mind is railing against him. On some level he realizes that each word he speaks from now on will be his absolute truth.
					player I will be honest with myself, and my new *master playerF.
					camboi I... I will be honest with myself, and my new... New...
					t He's still jerking off his little cocklette between two fingers and he arches his hips in some kind of display of total submission.
					camboi *Master! playerF!
					player My streams reflect my true desires, I want nothing more than to-
					camboi My streams reflect my true desires! I wanna be your little bitch! Cum! Need to cum!
					player Well then, I see you don't need much inspiration.
					camboi Please, I need to cum! Let me squirt! If I go too long without cumming I can't focus, I can't do anything!
					player Oh? Maybe I should look into some chastity cages.
					camboi They don't work, I cheat! I can cum just from rubbing my clitty through the cage, or getting on all fours, shaking from side to side, and slapping my little balls against my thighs! O-or-
					player I get the picture, but no. I'll let you stew for a little. Get dressed, we'll have our fun tomorrow.
					t He grunts, and his eyes actually begin to water as he pulls up his pants. And just as he's finished fumbling with the zipper...
					player See you around, bitch-boi.
					camboi GHHHH~!
					t He nearly collapses as a large dark streak goes down his pants. He shakes his hips, thrusting against nothing but air before he pivots and starts grinding against his desk. Despite having just gotten relief he's already clearly working to another orgasm. Or, as close as he can get, anyways.
				`);
				setTrust("camboi", 101);
			}
			else {
				writeHTML(`
					im 029.jpg
					player So, you think you're the one who should be giving orders when I've got dirt like this?
					im 030.jpg
					camboi Th-that's not me. A-and besides, I could bust you for browsing sites like those. principalF is a hard-ass over a messy desk, you think she'll hesitate to go for the throat knowing her new counselor watches trap porn?!<br>And for that matter, I make more than enough to survive, you think I care about this shitty job, surrounded by twinks and bimbos all day in this stuffy suit?! I have all the leverage here, asshole, I'm the one in control, and-
					t You slam your arm into the wall next to his head and look him dead in the eye.
					player Do you feel in control?
					camboi ...
					player I think you know neither one of us wants this to get out. And hey, like you said, it's not the end of the world if this gets out. I just wanted to use this to get in the door. I just want to be friends, bitch-boi.
					t He shudders and his eyes unfocus for just a moment at the word.
					player You hate this place, and I hate seeing you so sad. We can help each other, camboiF. After all, we're friends, aren't we?
					t He takes a few long, deep breaths to center himself. He weighs his options, and...
					camboi ... Fine. But... I dictate the pace. Honestly, I was gonna quit anyways, so if I get in trouble then...<br>Don't think I'm trusting you, I just... Don't care anymore.
					player Great! I'll see you around.
					camboi Eh?
					player I'm not some sex-addled psycho, I'm just looking for a little fun on the side while I make the school a better place.
					camboi Wait... You can't mean you're going after principalF...
					player I'll see you very soon, camboiF. 
				`);
				setTrust("camboi", 21);
			}
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "workQuo": {
			if (checkTrust("camboi") == 21) {
				writeHTML(`
					camboi You again... Here to ruin my life?
					player Aww, why so mad? I just want us to have a little fun.
					camboi Then you should've stayed on the other side of the camera. Ever heard of a parasocial relationship? Just because I act like a whore on camera doesn't mean I actually want to fuck an old *man like you...
					player Oh? I think you do a lot less 'acting' than you let on.
					camboi Whatever! Let's just get this over with. Remember, you take this too far and we're done.
				`);
				setTrust("camboi", 22);
				writeFunction("writeEncounter('camboiExplore')", "Explore his body");
				writeFunction("writeEncounter('camboiHandjob')", "Try and get a handjob");
				writeFunction("writeEncounter('cancel')", "Go back");
			}
			else {
				writeHTML(`
					camboi You again... Here to ruin my life? Let's be real, we'd both be happier on opposite sides of a computer screen.
				`);
				writeFunction("writeEncounter('camboiExplore')", "Explore his body");
				writeFunction("writeEncounter('camboiHandjob')", "Try and get a handjob");
				writeFunction("writeEncounter('camboiHypno')", "Hypnotize him and have him do a special stream");
				writeFunction("writeEncounter('cancel')", "Go back");
			}
			break;
		}
		case "camboiExplore": {
			writeHTML(`
				im 031.jpg
				camboi ...
				t You glide your hands along his smooth skin, enjoying the quivering your teasing is causing him.
				player You're enjoying this aren't you?
				im 032.jpg
				camboi M-maybe... Anybody would get a little worked up in a situation like this...<br>No! No no no, no more! I'm done, get your clothes on.
				t <i>It seems like his resistance is too high to go any farther.</i>
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "camboiHandjob": {
			writeHTML(`
				im 036.jpg
				t Though he agreed to a handjob, it's clear from his expression and the fact that he can't help but hover inches away from your dick, he's experiencing a classic case of 'cock shock'.
				camboi ...
				t He says nothing, but keeps taking deep breaths.
				player I think *he likes you. Not as much as you like *him, though.
				camboi Wh-wha? Uh... Ah! No! Nonono, we're done. Done! Get your clothes on, out!
				t <i>It seems like his resistance is too high to go any farther.</i>
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "camboiHypno": {
			writeHTML(`
				player How about this. No touching today, we'll even stay clothed. I'm a bit of a hypnotist, and-
				t He doesn't say anything, but he visibly perks up at this. Of course he tries to play it off like it's nothing.
				player Let me practice on you, and that'll be all for today, alright?
				camboi Trying to live out some weird porno fantasies, huh? Fine, if that's all. But that's it, okay?
				player Gotcha.
				t ...
				player You don't have the strongest will, do you?
				camboi Mhmm...
				player Easy prey. Honestly... You're a little disappointing.
				t He gulps and shifts just a little, but is still in a trance.
				player Actually... I know how to make this fun. Alright, listen closely. After work today you're going to go home and do a very special stream for your fans. In this stream you're going to act as normal, well, normal for you, but every single word you say about yourself is going to become the truth, alright? Any self-degrading comments, any whorish remarks, every word is going to be a core of your very being, got it?
				camboi Mhmm... Stream... Fun...
				player Very, very fun. Now...
				t *SNAP*
				camboi Gah!
				player Hmm, didn't work. You don't happen to watch a lot of hypnosis porn, do you?
				camboi N-no! You're probably just bad at it! Whatever, I'm going home.
				t He stands up in a huff and walks away, but just before he opens the door he turns back to you.
				camboi I'm gonna... I'm gonna stream tonight, so... Watch, or whatever.
			`);
			setTrust("camboi", 100);
			writeFunction("writeEncounter('camboiHypnoStream')", "Head home and catch the stream");
			break;
		}
		case "hypnoQuo": {
			switch (checkTrust("camboi")) {
				case 100: {
					writeHTML(`
						camboi You again... Here to ruin my life? Let's be real, we'd both be happier on opposite sides of a computer screen.
						player Aww, don't be like that. I caught your stream by the way, very enlightening. Bitch.
						camboi ...!
						player I know who you are, you said it loud and clear. Your body belongs to your fans, you're a total buttslut, and what was that other one? Just hearing what we'd do to you will <i>almost</i> leave you a squirting mess?
						camboi It's-! It's just an act!
						t He's almost hyperventilating at this point, but not out of fear. The commands he instilled in himself while under your hypnosis are still present, and are messing with his head. He tries to take a deep breath to calm himself, and he ducks under you to walk towards his desk, but he only makes it a few steps before he's unzipped his pants to reveal his hairless, undersized penis between two fingers.
						camboi N-no, don't... Don't look at me! I can't stop! Nghh~!
						player So, if you want to get off like a good little cumwhore, repeat after me, okay? Just a few little words, that's all. Just imagine you're streaming.
						t He nods. Though he isn't aware of it conciously, his subconcious mind is railing against him. On some level he realizes that each word he speaks from now on will be his absolute truth.
						player I will be honest with myself, and my new *master playerF.
						camboi I... I will be honest with myself, and my new... New...
						t He's still jerking off his little cocklette between two fingers and he arches his hips in some kind of display of total submission.
						camboi *Master! playerF!
						player My streams reflect my true desires, I want nothing more than to-
						camboi My streams reflect my true desires! I wanna be your little bitch! Cum! Need to cum!
						player Well well well, I see you don't need much inspiration.
						camboi Please, I need to cum! Let me squirt! If I go too long without cumming I can't focus, I can't do anything!
						player Oh? Maybe I should look into some chastity cages.
						camboi They don't work, I cheat! I can cum just from rubbing my clitty through the cage, or getting on all fours, shaking from side to side, and slapping my little balls against my thighs! O-or-
						player I get the picture, but no. I'll let you stew for a little. Get dressed, we'll have our fun tomorrow.
						t He grunts, and his eyes actually begin to water as he pulls up his pants. And just as he's finished fumbling with the zipper...
						player See you around, bitch-boi.
						camboi GHHHH~!
						t He nearly collapses as a large dark streak goes down his pants. He shakes his hips, thrusting against nothing but air before he pivots and starts grinding against his desk. Despite having just gotten relief he's already clearly working to another orgasm. Or, as close as he can get, anyways.
					`);
					setTrust("camboi", 101);
					writeFunction("changeLocation(data.player.location)", "Finish");
					break;
				}
				case 101: {
					writeHTML(`
						camboi ... You again.
						t He visibly shivers and starts to blush as you walk in. It seems like he still intends to put up a front, despite how obviously flimsy that front is.
						camboi What do you want this time? 
					`);
					writeFunction("writeEncounter('camboiBlowjob1')", "Office Blowjob");
					writeFunction("writeEncounter('camboiSex1')", "Office Sex");
					writeFunction("writeEncounter('cancel')", "Go back");
					break;
				}
				case 102: {
					writeHTML(`
						player `+data.player.time+`  camboiF.
						t He gives a noncommittal nod at your arrival, but clearly begins to shift nervously in his seat.
						player You certainly are excited to see me.
						camboi I'm almost finished with a grading curve overview, so-
						player So pragmatic. You get that you can't physically say no to me, even if you actually wanted to? Can you even imagine living without my dick anymore?
						camboi ...
						player ... Maybe it's time to step things up a notch. 
					`);
					writeFunction("writeEncounter('camboiStream1')", "Take Up Streaming");
					writeFunction("writeEncounter('camboiBlowjob1')", "Office Blowjob");
					writeFunction("writeEncounter('camboiSex1')", "Office Sex");
					writeFunction("writeEncounter('cancel')", "Go back");
					break;
				}
				default: {
					writeHTML(`
						t You step into camboiF's office and close the door behind you.
						camboi ...
						t Wordlessly, camboiF drops what he's doing to lower on the ground before you, pleading silently for your attention. 
						trans corruptionStart; Corrupt camboiF ?flag succubus newCorruption; ?trustMax camboi 665;
					`);
					writeFunction("writeEncounter('camboiStream2')", "Time to Stream");
					writeFunction("writeEncounter('camboiBlowjob2')", "Office Blowjob");
					writeFunction("writeEncounter('camboiSex2')", "Office Sex");
					writeFunction("writeEncounter('cancel')", "Go back");
					break;
				}
			}
			break;
		}
		case "camboiBlowjob1": {
			if (checkTrust("camboi") == 101) {
				setTrust("camboi", 102);
			}
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "camboiSex1": {
			if (checkTrust("camboi") == 101) {
				setTrust("camboi", 102);
			}
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "camboiStream1": {
			if (checkTrust("camboi") == 102) {
				setTrust("camboi", 103);
			}
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "camboiBlowjob2": {
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "camboiSex2": {
			writeEvent(name);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "camboiStream2": {
			writeEvent(name);
			writeHTML(`
				t Interestingly, you can see the comment section still moving. While all the commenters named "daddy" or "husband" are gone, there's a vertiable army of sissy posters vying for attention.
				t <i>Your</i> attention.
				t It seems like you really have a knack for streaming! Plenty of donations are flooding in too. Maybe, just maybe...
				t You could make this a regular thing? 
			`);
			passTime();
			writeFunction("writeEncounter('camboiFinale')", "Take Streaming Seriously");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "camboiFinale": {
			addFlag('camboi', 'complete');
			writeHTML(`
				t When you suggested your idea to camboiF, he was nothing but supportive. Well, supportive and cocklusty, but still.
				t And since then you've really gotten into the swing of being a sex streamer.
				im 017.jpg
				t Whether it's risky public play...
				im 052.jpg
				t Or an undisguised debut...
				im 059.jpg
				t Or a hypnosis-laden instructional video for burgeoning sissies, camboiF has remained completely subservient to your every whim.
				t ...
				im 067.jpg
				camslut Oh, oh my goood~! *His huge cock is completely distroying me!
				im 068.jpg
				player Blow your load like a good buttslut, bitch.
				camslut N-nnngh, if you say that-!
				im 069.jpg
				t But all he can continue with is a wordless moan, completely lost in the throes of pleasure. 
				t And as he squirts like a total bitch onto his webcam, all of your lovely views are commenting wildly.
				im 070.jpg
				t Hoping that soon they'll be next.
			`);
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "streamIntro": {
			var today = new Date();
			var dd = String(today.getDate()).padStart(2, '0');
			var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			var yyyy = today.getFullYear();
			today = mm + '/' + dd + '/' + yyyy;
			writeHTML(`
				t Against your better judgement, you click the banner ad advertising a local whore.
				t You brace yourself, ready for your laptop to suddenly explore, or for a thousand warnings to start blaring about how you need to renew your car insurance, but...
				im 004.jpg
				camslut -elloooo~? Can you hear me?
				t No horrible viruses? No credit card fraud?
				camslut Hey, you there? The anonymous user who just joined. You gonna say something? This is a live feed you know. Let's see... The date is `+today+`, that do anything for you?.
				t It seems like you actually joined a live camshow, exactly what the ad was promoting. Will you stick around?
			`);
			writeFunction("writeEncounter('streamIntroCont')", "Interact with them");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "streamIntroCont": {
			writeHTML(`
				
				player Hello.
				camslut They speak! Heya honey~<br>Tell me about yourself. I'm looking to make a new friend. Ooh, men only please. Well, actually, so long as you've got a dick and a sex drive I don't really care.
				player You're looking for friends on a porn website?
				camslut Hehe. You think there's a better way out there for finding good prey?
				player What do you mean 'prey'?
				camslut Isn't it obvious? Husbands, daddies, boytoys, maybe fellow sissies if I'm in the right mood. Tell me, do you wanna be... <i>Friends</i>, with a cutie like me?
				player What does it take to be friends with someone like you?
				camslut Aww, come on, no need to be suspicious~<br>All I want is your attention, and maybe something a little more down the line~<br>Tell you what, how about I give a little free demo?
				t From his mention of 'free', it seems like he's in this for the money, but this <i>is</i> what you came to the site for...
				t Will you stay?
			`);
			writeFunction("writeEncounter('streamIntroContCont')", "Yes");
			writeFunction("writeEncounter('cancel')", "No");
			break;
		}
		case "streamIntroContCont": {
			addFlag("camboi", "stream");
			writeHTML(`
				
				camslut Ooh, 'yes', that's my favorite word~! Hope you don't mind if I scream it~<br>So, I bet I can guess what you'd like to see, huh?
				im 006.jpg
				camslut See anything you like? We're a world apart but I can feel you oggling my bitchhole like you're trying to fuck it with your eyes...
				im 005.jpg
				camslut Mmm, just imagine what this'd feel like. You'd be ripping my dignity away for a tight fuck, and that's a trade I'd <i>love</i> to make.<br>You interested? Well, I have plenty of vids I'm sure you'd enjoy now that you've gotten the sample, right?
				t You ponder the matter. Luckily there are a few safe ways to throw money at internet-whores these days, but still...
				camslut Heeeey, you still there?<br>We all need a way to unwind. Maybe you've got a day job pushing pencils too? But a site like this, it's where we feel alive, right? What's a couple of tenners compared to a good time for the both of us?<br>Oh, fuck, it's getting a late. How about we pick this back up another time? I hope you won't think of me as a tease~ I've got regular streams almost every day, a little bit into the evening. If you're interested feel free to contact me again~<br>See you around, hun~
			`);
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "streamQuo": {
			if (checkFlag("camboi", "hypno") == false) {
			switch(checkTrust("camboi")) {
				case 0: {
					
				}
				case 1: {
					if (checkFlag("camboi", "streamQuoFirst") == true) {
						writeHTML(`
							
							camslut Oooh~! I caught you again~! My my my, it's almost like we have the same work schedule~!<br>So, you interested in one of my older vids? Just knowing you'll jerk off to them makes me quiver~
						`);
					}
					else {
						writeHTML(`
							
							camslut Heya hon~<br>Glad to see you're back. 
							player You treat all your fans to one-on-one conversations?
							camslut Only the lucky ones. I do regular streams but sometimes it's nice to get down and dirty with the fans, you know? Speaking of streams, I've got a nice back-catalogue if you're interested. Like I said before, what's a couple of tenners between you and a good time? And if you really play nice I might have a very special service just for you~
						`);
						addFlag("camboi", "streamQuoFirst");
					}
					if(checkFlag("camboi", "camboiSwimsuit") != true) {
						if (data.player.money > 49) {
							writeFunction("writeEncounter('camboiSwimsuitPurchase')", "'Swimsuit Vibrator Special' - $50");
						}
						else {
							writeFunction("", "'Swimsuit Vibrator Special' - $50 (TOO EXPENSIVE)");
						}
					}
					else {
						writeFunction("writeEncounter('camboiSwimsuit')", "'Swimsuit Vibrator Special'");
					}
					if(checkFlag("camboi", "camboiNips") != true) {
						if (data.player.money > 49) {
							writeFunction("writeEncounter('camboiNipsPurchase')", "'Talent Show' - $50");
						}
						else {
							writeFunction("", "'Talent Show' - $50 (TOO EXPENSIVE)");
						}
					}
					else {
						writeFunction("writeEncounter('camboiNips')", "'Talent Show'");
					}
					if(checkFlag("camboi", "camboiSchool") != true) {
						if (data.player.money > 49) {
							writeFunction("writeEncounter('camboiSchoolPurchase')", "'Risky Workplace Onahole Play' - $50");
						}
						else {
							writeFunction("", "'Risky Workplace Onahole Play' - $50 (TOO EXPENSIVE)");
						}
					}
					else {
						writeFunction("writeEncounter('camboiSchool')", "'Risky Workplace Onahole Play'");
					}
					if (checkFlag("camboi", "bargain") != true) {
						if (galleryCheck('tomgirl4') == true) {
							writeFunction("writeEncounter('camboiBargain')", "See if you can offer a trade instead of money");
						}
					}
					else {
						writeHTML(`
							camslut If you really have another video like that first one... Mmm, I'd give <i>anything</i> to see it. Would you do that for me?
							t !hacking 3; His desperation could be an incredible opportunity for you, he's clearly willing to watch whatever you send. If you had a better grasp on hacking you could send him something you could hypnotize him with.
							t ?hacking 3; His desperation could be an incredible opportunity for you, he's clearly willing to watch whatever you send. With your hacking skills you could send him a <i>very</i> personalized video with some fun hypnotic instructions.
						`);
						if (data.player.hacking > 2) {
							writeFunction("writeEncounter('camslutHypno')", "Send him a hypnotic video");
						}
					}
					break;
				}
				case 21: {
					
				}
				case 22: {
					if (checkFlag("camboi", "streamQuoAngry") == true) {
						writeHTML(`
							t You have free access to camboiF's stream archives. What will you watch?
						`);
					}
					else {
						writeHTML(`
							
							camslut You. You're playerF, aren't you?
							player Look's like the act's finally dropped. I liked your camwhore persona better.
							camslut Fuck you... Couldn't you have just left well enough alone? Let me go back to being an ordinary man at day, and let me let loose a little a night?
							player I've seen what's in your pants. You're never an 'ordinary man', day or night.
							camslut ...
							player Oh? You get off on that jab? By the way, I expect your videos will be free from now on. And the VIP treatment too.
							camslut Kh... Fine, it's easier to deal with you if I pretend you're a regular customer anyways, and not some freak stalker out to ruin my life. So...<br>What can I do for you today... <i>*master</i>?
						`);
						addFlag("camboi", "streamQuoAngry");
					}
					writeFunction("writeEncounter('camboiSwimsuit')", "'Swimsuit Vibrator Special'");
					writeFunction("writeEncounter('camboiNips')", "'Talent Show'");
					writeFunction("writeEncounter('camboiSchool')", "'Risky Workplace Onahole Play'");
					break;
				}
				case 100: {
					writeHTML(`
						t ... Or, you thought he would be. He has one scheduled, but he hasn't shown. It seems like he's made his whole catalogue free though. Maybe you should drop in and check on him?
					`);
					writeFunction("writeEncounter('camboiSwimsuit')", "'Swimsuit Vibrator Special'");
					writeFunction("writeEncounter('camboiNips')", "'Talent Show'");
					writeFunction("writeEncounter('camboiSchool')", "'Risky Workplace Onahole Play'");
					break;
				}
				case 101: {
					writeHTML(`
						
						camslut *Master~! Ooh, are you getting ready to jerk off? Mmm, I'd love it if you came to pay me a visit, maybe we could do something special together~!
						t He certainly is a lot more likeable in character...
					`);
					writeFunction("writeEncounter('camboiSwimsuit')", "'Swimsuit Vibrator Special'");
					writeFunction("writeEncounter('camboiNips')", "'Talent Show'");
					writeFunction("writeEncounter('camboiSchool')", "'Risky Workplace Onahole Play'");
					break;
				}
			}
			}
			else {
				if (checkTrust("camboi") < 100) {
					writeHTML(`
						t ... Or, you thought he would be. He has one scheduled, but he hasn't shown. It seems like he's made his whole catalogue free though. Maybe you should drop in and check on him?
					`);
					writeFunction("writeEncounter('camboiSwimsuit')", "'Swimsuit Vibrator Special'");
					writeFunction("writeEncounter('camboiNips')", "'Talent Show'");
					writeFunction("writeEncounter('camboiSchool')", "'Risky Workplace Onahole Play'");
				}
				else {
					writeHTML(`
						
						camslut *Master~! Ooh, are you getting ready to jerk off? Mmm, I'd love it if you came to pay me a visit, maybe we could do something special together~!
						t He certainly is a lot more likeable in character...
					`);
					writeFunction("writeEncounter('camboiSwimsuit')", "'Swimsuit Vibrator Special'");
					writeFunction("writeEncounter('camboiNips')", "'Talent Show'");
					writeFunction("writeEncounter('camboiSchool')", "'Risky Workplace Onahole Play'");
				}
			}
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "camboiBargain": {
			writeHTML(`
				
				player What if I could offer you something other than money?
				camslut Oh? Oh honey, if you mean your own nudes, I have a very strict policy. If you wanna walk this road...<br>I wanna see your face. All of it. Hardly anybody's been interested in doing this, but... Mmm, I can feel you're something special~!
				t He shudders in delight at the thought. That said, exposing yourself would put your plan to take over the school at risk, so there's no way you'll show your actual face. That said, you do have something saved you can use as an alternative payment...
			`);
			writeFunction("writeEncounter('camboiTomgirlReaction')", "Show him tomgirlF's video");
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "camboiTomgirlReaction": {
			writeEvent(name);
			passTime();
			addFlag("camboi", "bargain");
			addFlag("camboi", "camboiSchool");
			addFlag("camboi", "camboiSwimsuit");
			addFlag("camboi", "camboiNips");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "camslutHypno": {
			writeHTML(`
				
				player I do have another video for you, actually.
				camslut Ooh fuck yeah~<br>I'll be the first to admit I'm a total slut for a little work-play boundary mixing, schoolboys especially are <i>such</i> a turn on~!
				t ...
				camslut Eh? I don't really get what this thing is.
				t With a little bit of editting magic and a little bit of good-old hypnosis, soon his gaze turns from curious focus to an unblinking glaze.
				camslut It's really... Really bor... Boring...<br>Swirly... Everything I say... Is true...?
				t The hypnotic strategy you have for this camslut is quite simple. He's a good actor, maybe on some level he takes his self-degradation act seriously, but you're about to make sure he takes everything he says about himself now to heart.
				camslut Stream... Gotta stream...
				t By the time the video is finished he looks half asleep, before he suddenly shakes his head and snaps out of it.
				camslut Oh, shit, I zoned out. Listen, I was expecting something a little more... Huh.
				t His memory of the video has faded, replaced with a vague pleasant haze.
				camslut I, uh... I think I'm gonna stream tonight. You can feel free to join. Actually, I might make this one free...
			`);
			writeFunction("writeEncounter('camboiHypnoStream')", "Catch the stream");
			break;
		}
		case "camboiHypnoStream": {
			writeEvent(name);
			passTime();
			addFlag("camboi", "hypno");
			writeFunction("changeLocation('playerHouse')", "Finish");
			break;
		}
		case "camboiSwimsuitPurchase": {
			data.player.money -= 50;
			updateMenu();
			addFlag("camboi", "camboiSwimsuit");
		}
		case "camboiSwimsuit": {
			writeEvent("camboiSwimsuit");
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "camboiNipsPurchase": {
			data.player.money -= 50;
			updateMenu();
			addFlag("camboi", "camboiNips");
		}
		case "camboiNips": {
			writeEvent("camboiNips");
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "camboiSchoolPurchase": {
			data.player.money -= 50;
			updateMenu();
			addFlag("camboi", "camboiSchool");
		}
		case "camboiSchool": {
			writeEvent("camboiSchool");
			passTime();
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "corruptionStart": {
			writeHTML(`
				camboi Hm? W-why are you looking at me like that? Did I do something wrong?
				player No. There's something I want, I'm thinking about whether I should take it from you.
				camboi Everything about me is yours, I know there's no point in fighting anymore. Please, don't think of me as an equal, if there's something you want, <i>take it</i>, I'll just get off harder being treated as beneath you.
				trans camboiCorruption; Corrupt camboiF
				trans hypnoQuo; Go back
			`);
			break;
		}
		case "camboiCorruption": {
			writeEvent(name)
			writeHTML(`
				trans corruptionFollowup; Continue
			`);
			break;
		}
		case "corruptionFollowup": {
			passTime();
			setTrust("camboi", 666);
			writeHTML(`
				sp succubus; Do I smell a new haul?<br>Oh.
				player Quit... Quit popping in without giving me a warning. And why the disappointed look?
				sp succubus; Nothing really, just that looking at this guy, I thought he'd leak out a lot more masculinity... I mean, don't get me wrong, the floor's a fuckin mess, but... <br>Ah, he was already into the sissification stuff, huh?
				t Mostly unresponsive, camboiF continues to lay and twitch, seemingly oblivious to the world.
				sp succubus; You sure you want him? I can tell he'll be no good at collecting energy. He's got "I wanna fuckin' SPLURT" written all over his face. And body. And his thighs too, hell's bells!
				player Yeah. He's mine.
				sp succubus; Leave him with me then, I'll clean him up, he probably won't even notice the shrinkage, honestly. If he does, he'll probably just get turned on by it. I will have probably have to toss out all his toys if we want him to keep a day job.
				sp player; But he'll be fine?
				sp succubus; Yep! And I can turn him into a proper demon anytime. Once you decide to go all the way, this little bitchboi will make a fine succubus (male).
				sp player; I'll leave you to it, I'm feeling really drained...
				sp succubus; Not yet you don't~<br>Kidding! I've got my hands full with him, go get some rest.
				finish
			`);
			break;
		}
		case "camboiHotelGood": {
			writeHTML(`
				im 005.jpg
				camslut Ehehe, and that's a wrap everybody~<br>Make sure you practice at home, especially you, "HellPrince6-6", maybe you'll be the next one invited to the meet and... Greet?
				t As camboiF signs off on his latest stream he turns and notices you, before he quickly scrambles to hit the end button.
				camslut *Master, you're awake! It felt like you'd be asleep forever!
				player Seems like you're blending in well.
				camslut Oh, like you wouldn't believe! This place is heaven!
				player Err, actually-
				camslut Oh I know, I know. Hey, did <i>you</i> know this place is full of fans of my streams?
				player Huh. That actually kinda fits.
				camslut I even got asked to sign someone's... Well, they said "dick", but...<br>Actually, now that you're awake, maybe we could do an impromptus special?
				player Soon. I need to find succubusF first.
				camslut Oh, batboi? I think I saw him around earlier. He never visits, my stream, maybe you could tell him off?
				player I'm sure he'll watch next time. Everyone will.
				camslut Ooh, sounds like it'll be a hit!
				finish
			`);
			break;
		}
		case "camboiHotelBad": {
			writeHTML(`
				define black = sp Black Haired Succubus; im images/demon/dark.jpg;
				black Oh my, so you really do know camboiF~! He's a big name around here, I'd say I'm his biggest fan! Even demonF had his eye on the camslut, ready to take him into the hotel before you swooped in and stole our darling idol. Here, let me see if he's streaming...
				im 033.jpg
				black Ah~! It's already started! I'll have to watch the recording later. He doesn't even bother hiding his identity anymore, so streams usually just involve him desperately trying to find and seduce men off the streets to fuck on camera~!
				im 034.jpg
				black Ah, and no deplorable act is off limits! He's the greatest rising star in hell right now, although if you don't bring him in soon he'll probably burn out. It happens to the best of us.
				im 035.jpg
				black Oh, oh my, I really do need to watch this one later... Maybe I can convince someone to tie me up while I do... Ehehe~
				finish
			`);
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

function camboiPassword() {
	var goof = document.getElementById('nameSubmission').value;
	goof = goof.toLowerCase();
	if (goof == "bitch-boi" || goof == "bitch boi" || goof == "bitchboi" || goof == "bitch-boy" || goof == "bitch boy" || goof == "bitchboy") {
		writeEncounter("camboiPasswordSuccess")
	}
	else {
		writeEncounter("camboiPasswordFail")
	}
}

var eventArray = [
	{index: "camboiSwimsuit", name: "Swimsuit Vibrator Special"},
	{index: "camboiNips", name: "Talent Show"},
	{index: "camboiSchool", name: "Risky Workplace Onahole Stream"},
	{index: "camboiHypnoStream", name: "Self Degradation Stream"},
	{index: "camboiTomgirlReaction", name: "Reaction to a Tomgirl"},
	{index: "camboiBlowjob1", name: "Office Blowjob (Pre-Mindbreak)"},
	{index: "camboiBlowjob2", name: "Office Blowjob (Post-Mindbreak)"},
	{index: "camboiSex1", name: "Office Blowjob (Pre-Mindbreak)"},
	{index: "camboiSex2", name: "Office Blowjob (Post-Mindbreak)"},
	{index: "camboiStream1", name: "A Day in the Life of a Streamer"},
	{index: "camboiCorruption", name: "Endurance Stream to 1cm!"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	writeHTML(`
		define player = sp player;
		define camboi = sp camboi;
	`);
	if (checkTrust("camboi") > 19) {
		writeHTML(`
			define camslut = sp camboi; im images/camboi/camslut.jpg; altColor #97D7F3;
		`);
	}
	else {
		writeHTML(`
			define camslut = sp camboi; im images/camboi/camslut.jpg; altName Masked Camwhore; altColor #97D7F3;
		`);
	}
	switch (name) {
		case "camboiSwimsuit": {
			writeHTML(`
				camslut Ooh, looks like the room's packed tonight~<br>Remember, hold off on my special word till the end... N-now...
				im 020.jpg
				camslut This little baby... He's my favorite. My little clitty doesn't have the best endurance, so when my little dicky goes up against a bitchbreaker of a tool like this... Hah~
				t He begins to grind up and down against the rod. It isn't even turned on and he's getting off on the stimulation.
				camslut Y'know, I heard once that vibration can mess with your dick... That's why I bought this model of course~ Any toy that ruins my little clitty is something that has a spot in my collection. <br>Nnngh, now without any more pussyfooting, say goodbye to my sanity!
				im 021.jpg
				camslut GHHHH~OOOOddd~!!!! Ruin me! Make me squirt! I wanna be a quickshot! FasterfasterFASTER~!!!! SAY IT NOW!
				im 022.jpg
				camslut GHHHH~! CUMMING~! My little bitchstick is squirting through the swimsuit! I'm spraying right onto my maaaaask~!!!
				t He spasms and pushes the vibrating rod against his cocklette, treating it like it really is a clit. Within seconds he collapses and shuts off the vibration, and you can't hear anything from him but panting gasps and the sound of him licking his mask to try and slurp up whatever managed to soak through the fabric.
				camslut Hah... Aaaa~! Twelve seconds, a new record!<br>Wanna hear a secret? Ever since I was a teen I've known my place. I jerked off to sissy conditioning till my little balls ran dry, then I started training myself with chastity cages. Every day I wasn't caged I practiced cumming faster, turning myself into more and more of a pathetic quickshot.<br>I can cum with just one finger rubbing against my little clitty's head, so just imagine how I'll spurt and squirt if we ever compared cocks~<br>Mmm~! Join me next time, someday I'll hit a world record! I wonder if any book'd publish 'most pathetic sissy camwhore'?
				t He takes a few wobbly steps over to his streaming setup.
				camslut What? Of course I could read it from here! I knew you'd all wait for just the right moment. Alright, join me next time, hehe~
				t <i>Looking through the comment log, the phrase "bitch-boi" is repeated at least a dozen times. Apparently that's his 'cum word', whatever that means.</i>
			`);
			break;
		}
		case "camboiNips": {
			writeHTML(`
				im 011.jpg
				camslut Hey everyone~! Welcome to my little talent show! I know what you're thinking, 'what kind of talent does an onahole with a useless clitty have'? Hehe~<br>Ngh, the truth is, you can milk me! Not like a cow, b-but... But... Fuck, I can't hold back~!
				im 012.jpg
				camslut Nnngh~! I've trained my boi titties so well that... That I can cum from them! God, what I'd give for one of you to manhandle me right now~!<br>A-and I've got a special toy in my ass to ensure a <i>thorough</i> milking! I... I'm...!
				im 013.jpg
				camslut Aaaaaah~!
				t Without any stimulation to his cock, the camslut begins squirting onto the floor. The combination of being seen, the vibrator, and the stimulation to his sensitive nipples all quickly pushing him over the edge.
				im 014.jpg
				t Drooling through his mask, he pants for nearly a whole minute before he can collect himself.
				camslut ... S-so... That's my talent! My little dicklette is so sensitive it'll fire at even the lightest bit of attention, and I'm such a slut I don't even need to touch it to cum. Perfect match, huh?<br>Mmm, sorry for another short stream, I'll be ready to cum again soon though!
			`);
			break;
		}
		case "camboiSchool": {
			writeHTML(`
				define principal = sp principal;
				define secretary = sp secretary;
				im 015.jpg
				camslut Gh... H-hey everybody~! I've been really bad today. F-first, I just couldn't hold off for one more second, so we're starting off mid-show... Second, I maybe stole a uniform s-so I could get off like a little slut in the middle of my day job... A-and third...
				t He shudders and nearly falls, barely able to hold himself back from panting like a bitch in heat.
				camslut Th-third, I walked right into the girls' bathroom... Sorry ladies...<br>But this little bitch is practically a girl anyways, right? 
				im 016.jpg
				camslut Ghh, I hope you're already close... This toy's supposed to feel just like a real girl's pussy, s-so... A little boyslut like me~
				im 017.jpg
				camslut Ooough~! Watch me cum! Cumcumcum! All the boys here', they'd rape me into a leaking mess if they found me, and the girls'd treat me like garbage if they found out~!
				im 018.jpg
				camslut Hah... Ah... I made a mess... I can't tell if I wanna lick it up, or rub my cute little cocklette against the lens... I bet it'd feel really good~
				t There's the sound of a door opening, and he tenses up suddenly.
				principal Right, just give me a moment.
				secretary Of course, ma'am.
				t He quickly shuts off the camera and the stream ends abrubtly.
			`);
			break;
		}
		case "camboiHypnoStream": {
			writeHTML(`
				define comments = sp Comments; im images/none.png;
				t You enter the lobby for the camboi's latest impromptu stream. Chat is already active.
				comments Daddy23: Holy shit, another one already?<br>sissyboi12: Free free free! It's probably a mistake but fuck yeah<br>Husband891: Cheapskates, honey deserves your money.<br>Daddy23: It's probably a gift to us devoted fans. Hey, it's starting!
				im 003.jpg
				camslut Mmm, that's what I like to see~! You've all been watching my feed like hawks, haven't you? All my daddies, fellow sissies, my loving husbands, I'm so excited you all could join me for this impromptu session~
				t As he says this, his blush suddenly deepens.
				camslut Really... Really excited?
				comments Daddy23: Nervous?<br>Husband891: If you have a gun to your head blink twice
				camslut Haha~! You guys are so funny~!<br>I'm fine. In fact, I've got an extra special treat for you all tonight~
				t ...
				im 023.jpg
				camslut Ta-da~! I know you all wish you were here, and I do too~! But for tonight my little friend will have to be your substitutes~<br>And don't feel too bad, just hearing what you'd all do to me is <i>almost</i> enough to leave me a squirting mess.
				comments Husband891: Thats too big for you, we saw it last time<br>Sissyboi12: Analanalanal!!!!1!<br>Daddy23: *****-***!
				camslut Ah ah ah daddy, you know my special cum word is censored until the end. You know I cum when I hear it, you don't want to end the fun too early~<br>And my special husband, have a little faith~! I won't touch my little clitty even once tonight.<br>Now let's get started~
				im 024.jpg
				t He sets down the dildo and lowers itself gently down onto it. He's obviously incredibly tight, and only goes down a few inches.
				camslut I-I'm your dirty little fucktoy... Your little slut who loves a good... Pounding...
				t He's muttering to himself like he's working through a practiced script, but is finding the words are having an unusual effect on him.
				t Quickly, too quickly, the experienced entertainer has the energy of a exhibitionist slut boi getting off on being seen for the first time.
				camslut I can't... I can't hold it in anymore! I need to cum, and... Oh fuck~!
				im 025.jpg
				t Suddenly his pace changes. He'll lift his hands like he wants to jerk off his floppy clitty, but something is preventing him from touching it. Quickly he goes back to rapid bouncing up and down on the sex toy beneath him.
				im 026.jpg
				camslut Need need need NEED~! W-word! Uncensored, the word that makes me cum! Please, let me...!
				comments Daddy23: Bitch-boi!<br>Sissyboi12: Bitch-boi!<br>Husband891: CUM, BITCH-BOI!!!
				im 027.jpg
				camslut CUMMING~!
				t A sudden orgasm wracks his body, hypnotic conditioning making his 'cum-word' a reality.
				camslut Ffffuck...<br>A-and all of you doubted me the last time we played with my little friend... See? I'm a total buttslut, through and through. I don't even need my cute little clitty to get off like I should~<br>My body can't say no to my fans after all~
				t He says it so casually, like it's a triumph and not him sealing his own fate in a single moment.
				camslut O-oh... I'm feeling pretty tired tonight... Sorry darlings, I hope you enjoyed yourselves. And my little sissy in the audience, I hope you learned a little something~<br>For now, good night~
				t The stream suddenly ends, likely as he found himself suddenly tired after saying that line.
				comments Daddy23: That was awesome! <br>Husband891: It's mostly scripted, he said a lot of the same things in the last dildo stream, mostly.<br>Sissyboi12: Are you kidding? Anal stimulation alone made them a squirting mess!<br>Daddy23: Yeah something was different that time.
			`);
			break;
		}
		case "camboiTomgirlReaction": {
			writeHTML(`
				t With a grin you upload the video tomgirlF sent you of him playing with himself.
				camslut Ooh, I can see you uploading! What's this? It's so big, you sending me a video? Hehe, I hope you're ready to go down one hell of a rabbithole with me. 
				player The face is clearly visible, and nobody but you and I have seen this. Promise to keep it private?
				camslut Oh, oh fuck yeah. We are going to have a lot of fun together.
				t You can see the reflection of the video starting to play in his eyes, followed by a look of shock.
				camslut tomgirlF?! Fuck, shit, wait, don't log off, uh-
				player I'm not tomgirlF, I'm the one he made the video for.
				camslut Holy... Holy fuck, how did you... 
				player Is this enough to count as payment? I have more, of others like him.
				camslut I... Y-yeah, yeah... I, uh...
				t He's obviously distracted, you can tell his cheeks are flushed through his mask. 
				im images/tomgirl/5-1.jpg
				camslut Oh god, that's so fucking hot...
				im images/tomgirl/5-3.jpg
				camslut God, he's a fucking anal <i>whore</i>! I knew it...
				t Given that he knows who tomgirlF is, you have a pretty good idea of this camboi's true identity.
				im images/tomgirl/5-4.jpg
				camslut Oh fuck~!<br>Fuck fuck fuck. Okay, you win. Everything, no charge. If you have more like this then... Well, I can tell you and I are gonna be really good friends~!
			`);
			break;
		}
		case "camboiBlowjob1": {
			writeHTML(`
				im 036.jpg
				camboi This thing... It can't even be called a penis... What did you do to yourself to get this large?
				player What did you do to get yourself so pathetic?
				camboi Ngghh... God... I feel like I'm about to lose my mind... What the hell... Did I do... To deserve...
				im 041.jpg
				camboi Ohh...
				t The takes a long, hufffing breath and the look in his face shows a delight no ordinary man could hope to experience.
				camboi I can't go back... I never want to go back...
				t A single drop of precum is all it takes to show his true colors.
				camboi My old life... Is already over! I spend every day waiting for you to find me, pin me down, and rape the fuck out of me right in front of everyone! I wanna be your little ass-whore built to pleasure your cock!
				player ... Get started.
				im 038.jpg
				t There's no hesitation, but on his face is fear, as obvious as the daylight outside. The natural fear that rises from being in freefall, which makes sense with how quickly he's sinking past the depraved point of no return.
				im 039.jpg
				t Everything about him, from what he says to the way he acts shows he doesn't have an ounce of self-respect or testosterone.
				t And as his head bobs up and down along your shaft you can see he's grinding his hips against the floor, pleasuring and humiliating himself in equal measure in rhythm with you.
				im 040.jpg
				t Unadulterated joy flashes in his eyes, revelling in being treated as your sperm-toilet. 
			`);
			break;
		}
		case "camboiBlowjob2": {
			writeHTML(`
				im 036.jpg
				camboi Oh *master... What on earth did you do to get a beast like this?
				player What did you do to get yourself so pathetic?
				camboi Ngghh... God... I feel like I'm about to lose my mind...
				im 041.jpg
				camboi Ohh...
				t The takes a long, hufffing breath and the look in his face shows a delight no ordinary man could hope to experience.
				camboi I can't go back... I never want to go back...
				t A single drop of precum is all it takes to show his true colors.
				camboi My old life... Is already over! I spend every day waiting for you to find me, pin me down, and rape the fuck out of me right in front of everyone! I wanna be your little ass-whore built to pleasure your cock!
				player ... Get started.
				im 038.jpg
				t There's no hesitation, but on his face is fear, as obvious as the daylight outside. The natural fear that rises from being in freefall, which makes sense with how quickly he's sinking past the depraved point of no return.
				im 039.jpg
				t Everything about him, from what he says to the way he acts shows he doesn't have an ounce of self-respect or testosterone.
				t And as his head bobs up and down along your shaft you can see he's grinding his hips against the floor, pleasuring and humiliating himself in equal measure in rhythm with you.
				im 040.jpg
				t Unadulterated joy flashes in his eyes, revelling in being treated as your sperm-toilet. 
			`);
			break;
		}
		case "camboiSex1": {
			writeHTML(`
				im 042.jpg
				player Damn, this ass of yours never ceases to amaze. You really were destined to be my anal addict, huh?
				camboi Gh... How can you be so quippy, that huge dick should be hogging all the blood from your brain... 
				im 043.jpg
				camboi Oooough~! S-sorry, I'm sorry!
				t And already once again the threshold is crossed. camboiF's mock protests and pretenses of pride are quickly shattered yet again. You're starting to think he's just putting up a front to get you to fuck him harder.
				im 044.jpg
				camboi Fuck... Yes! Use me to jerk off! Make me squirt until I'm nothing but a fleshlight for a real cock!
				player Fine!
				im 048.jpg
				camboi W-whaa!
				player Squeal harder, whore!
				camboi Yesss~! Abuse me until my nipples are harder than my clitty! I'll be your little bitch in heat forever! I'm-!
				im 049.jpg
				t His tiny nuts somehow find just enough femboy spunk to leak out one last squirt that sails through the air, wasted on the floor. Not that it had any real chance of firing inside anyone anyways.
				im 050.jpg
				camboi Hah... Cumming this hard... I might get brain damage~ 
			`);
			break;
		}
		case "camboiSex2": {
			writeHTML(`
				im 042.jpg
				player Damn, this ass of yours never ceases to amaze. You really were destined to be my anal addict, huh?
				camboi Fff... I don't have a comeback, just please... Put my sorry excuse for an ego out of its misery...
				im 043.jpg
				camboi Oooough~! Fuck, fuck, fuuuuck~!
				t Part of you kind of misses his vain attempts at resistance, but this newfound enthusiam has its own perks.
				im 044.jpg
				camboi Fuck... Yes! Use me to jerk off! Make me squirt until I'm nothing but a fleshlight for a real cock!
				player Fine!
				im 048.jpg
				camboi W-whaa!
				player Squeal harder, whore!
				camboi Yesss~! Abuse me until my nipples are harder than my clitty! I'll be your little bitch in heat forever! I'm-!
				im 049.jpg
				t His overtaxed, tiny nuts still somehow finding just enough femboy spunk to leak out one last squirt that sails through the air, wasted on the floor. Not that it had any real chance of firing inside anyone anyways.
				im 050.jpg
				camboi Hah... Cumming this hard... I might get brain damage~ 
			`);
			break;
		}
		case "camboiStream1": {
			writeHTML(`
				camboi I can't believe you're making me do this...
				player Quiet. And remeber what I told you. The show's starting 
				im 059.jpg
				camboi Hiiii everyone~!
				t The comment section is suddenly flooded with surprised reactions. Not to camboiF, but to your presence.
				camboi Now, I'm sure you're all confused, but let's be real for a moment. You were all just names on a screen I used to fufill my exhibitionism fetish, you were just as much jerk-off fodder to me as I was to you~!<br>S... Speaking of... Which...!
				im 060.jpg
				camboi S-so huge... M-*master's really done a good job training me, right? Oh, hearing me call *him that really made you guys go crazy, huh?
				im 061.jpg
				camboi Aww, don't be mad. You all know I'm the kind of fuckslut who can get off just from wearing chastity long enough. Just the thought that my little pin-dick would become permanently smaller, permanently more useless the longer I wore the cage... Ngh~!
				t His prick oozes a line of precum at the thought.
				camboi So of course the moment I found someone who made me feel as pathetic as I really am, well... I guess I don't need anyone else any more~!
				t The two of you change position and move the camera for a better view, ignoring the protests from all the users with "daddy" and "husband" in their names.
				im 062.jpg
				camboi Oh, fffuck... Watch closely everyone, *he's larger than any dildo I've ever taken. Meanwhile, this <i>thing</i> I've got isn't even a cock, it's my little clit that only serves to show off what a pathetic bitch I am~
				t You give him a moment to take this at his own pace...
				im 063.jpg
				t And of course he takes the opportunity to shake his hips, as if without a word impatiently asking "Please *sir, won't you please rape me?"
				im 064.jpg
				t He's basically half-screaming half-moaning. Loudly, of course. It seems like silence just isn't an option for him.
				t His twig-dick is shaking like a dog's tail, it oozes shamelessly as it wags back and forth. 
				im 065.jpg
				t You cum, giving camboiF the creampie he oh so desperately needs. 
				t Out of the corner of your eye you can see the stream's comments, it's nearly silent. The look of complete graceless submission to cock on their personal camwhore's face is the final nail in the coffin for anyone with a dominant bone in their body to leave.
				t Meanwhile, camboiF just babbles. At one point he was actually capable of pretending to be a respectable, professional young man.
				t Not anymore. 
			`);
			break;
		}
		case "camboiStream2": {
			writeHTML(`
				im 059.jpg
				camslut Hey there all you lovely men, women, and everybody inbetween! Welcome to another stream between me and my perfect *master!
				camslut Ooh, so many new viewers today! Thanks for helping me out, all your eyes on me makes my *master fuck me that much harder~!<br>S... Speaking of... Which...!
				im 060.jpg
				camslut S-so huge... You've all be training yourselves too, right? If these streams have helped create even one buttslut half as pathetic as me, then I might just deserve a reward...
				im 061.jpg
				camslut What do you think, *master? Would you kindly show my uselss little pin-dick how a real cock fucks?
				t His prick oozes a line of precum at the thought.
				t The two of you change position and move the camera for a better view.
				im 062.jpg
				camslut Oh, fffuck... Watch closely everyone, *he's still larger than any dildo I've ever taken, it never makes me feel any less full. Meanehile, this <i>thing</i> I've got isn't even a cock, it's my little clit that only serves to show off what a pathetic bitch I am~
				t You give him a moment to take this at his own pace...
				im 063.jpg
				t And of course he takes the opportunity to shake his hips, as if without a word impatiently asking "Please *sir, won't you please rape me?"
				im 064.jpg
				t He's basically half-screaming half-moanjng. Loudly, of course. It seems like silence just isn't an option for him.
				t His twig-dick is shaking like a dog's tail, it oozes shamelessly as it wags back and forth. 
				im 065.jpg
				t You cum, giving camboiF the creampie he oh so desperately needs. Once again his expression is nothing but the look of complete graceless submission to cock.
				t You haphazardly lower camboiF to the floor and he just lays there, trying to regain the stamina that's been fucked out of him.
			`);
			break;
		}
		case "camboiCorruption": {
			writeHTML(`
				player Fine. Sex, now. Get on the bed and spread your legs. I want a good look at how big you are.
				camboi O-okay...
				player camboiF assumes the position as you focus on the back of your hand.
				im 051a.jpg
				camboi H-hoo... I'm... Warm? Warmer than normal?
				player Is that a problem? Maybe I drugged you.
				camboi Nhg... No. My b-body is yours... I... Oh god... P-please, I need you to fuck me, I can't wait...
				player What's that? Speak up. I can hear the traffic outside better than I can hear-
				camboi Fuck me, FUCK ME please! I don't know why I'm burning up, I don't know why it feels like I'm about to lose something precious but PLEASE~! I <i>need</i> you to fuck me up so badly I can't even think properly!
				player Heh. You're yowling like a cat in heat.
				camboi I can't find the words! I can't think! Please!
				player Fine.
				im 047.jpg
				player This position should do.
				camboi Kh~! It's like the tip of my clitty is... Boiling! Like I need to cum so badly I'm burning brain cells trying to hold on!
				player Oh? Why not stroke yourself? It seems like you won't even need your cum word.
				camboi <b>NO!</b> I <b> NEED</b> you to fuck it out of me! I don't know what's building up, but I don't want a drop of it left! Please... Break me!
				im 048.jpg
				camboi OOOH~!
				player D-damn, no resistance at all!
				camboi I can't! I can't hold back for even a second! My puny little quick-shot... Little...!
				player Can't hold back, huh? Then cum, <b>BITCH-BOI</b>!
				im 049.jpg
				camboi The moment the words leave your lips, his head is thrown back and he lets out all the scream his body can muster. The largest load of his life, by far, arcs through the air uselessly.
				player Ngh, don't you dare pass out! You'll never cum like <i>this</i> again!
				camboi ...!!!
				t He can't respond, if he can even hear you. Each neuron in his brain is likely more occupied trying to put out the electrical fire that is his nerves right now.
				t More. More. More of his sperm, destined never to touch a woman, sprays uselessly onto the floor. You don't have a good angle, but you can tell the amount he's cumming is coming from somewhere. Eventually, it peters out. A load so large it could actually rekindle his faith in his masculinity, if he hadn't just pumped what remains of it out onto the floor.
				im 050.jpg
				player You'd better still be awake.
				camboi Haaahgh... Glaaa... Happ... Phy...
				player Now, let's get a comparison...
				im 054a.jpg
				camboi It... It's...
				player Definitely smaller. Honestly, you had more of a cocktail shrimp than a dick before, but now it's so pathetic I'm not sure I could even call it a penis.
				camboi Hah... Hah~
				t He breaths deeply, soaking in the fact that his deepest, most impossible fetish has been indulged, wondering if, hoping that he'll cum that hard again.
				t And then he faints.
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
	//index: "reward", requirements: "?trust camboi 101;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/camboi/059.jpg", "Art by Himitsu Kessha Vanitas");
			writePhoneSpeech("camboi", "", "You've finished all available camboiF content! More to come!");
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