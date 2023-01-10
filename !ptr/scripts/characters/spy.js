var character = {index: "spy", fName: "Sarah", lName: "Walker", trust: 0, encountered: false, textEvent: "", met: false, color: "#7B6170", author: "CryptoGreek", artist: "Anza Yuu", textHistory: "", unreadText: false,};

var logbook = {
	index: "spy", 
	desc: "A woman investigating the oddity of the university's local nickname, Hentai University, that it got from its abnormally attractive student body.",
	body: "She has an hourglass figure, with wide hips and large breasts that are emphasized by her clothing choices.",
	clothes: "She often wears a deep-cut sweater with a mid-thigh pencil skirt.",
	home: "She can usually be found near the north hallway, or around the school.",
	tags: "Vanilla, Oblivious",
	artist: "Anza Yuu",
	author: "CryptoGreek",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "spyEncounter01", name: "There's a woman standing nearby, watching the students closely...", requirements: "?trust spy 0; ?location street; ?time Morning;", altName: "People-Watching Woman", altImage: "",},
	{index: "spyEncounter02", name: "spy seems to be looking around the main entrance, watching some of the students go by.", requirements: "?trust spy 40; ?location schoolEntrance; ?time Morning;", altName: "", altImage: "",},
	{index: "spyEncounter03", name: "spy is standing near your office door, trying (and failing) to whistle inconspicuously.", requirements: "?trust spy 45; ?location northHallway; ?time Morning;", altName: "", altImage: "",},
	{index: "spyEncounter04", name: "spy is leaning against the wall this time. She's gotten better at whistling, too.", requirements: "?trust spy 50; ?location northHallway; ?time Morning;", altName: "", altImage: "",},
	{index: "spyEncounter05", name: "This time, she's looking surprisingly normal - no whistling. She does seem to be staring out at the middle-distance, though...", requirements: "?trust spy 55; ?location northHallway; ?time Morning;", altName: "", altImage: "",},
	{index: "spyEncounter06", name: "spy is standing near your door, a pen and notepad in hand. Seems like she's ready for an interview.", requirements: "?trust spy 20; ?location northHallway; ?time Morning;", altName: "", altImage: "",},
	{index: "spyEncounter07", name: "", requirements: "?trust principal 10000; ?location northHallway; ?time Morning;", altName: "", altImage: "",},
	{index: "spyEncounter08", name: "", requirements: "?trust principal 10000; ?location northHallway; ?time Morning;", altName: "", altImage: "",},
	{index: "spyEncounter09", name: "", requirements: "?trust principal 10000; ?location northHallway; ?time Morning;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "spyEncounter01": {
			writeHTML(`
				t As you're heading to work, you can't help but notice someone nearby that seems a bit... odd.
				im profile.jpg;
				t She's looking around the area like she's looking for something. At first you thought maybe she dropped something, but a few moments later you realize she seems to be watching a lot of the University students.
				t You could approach her and ask her why she's people-watching for them specifically, or just move along and ignore her...
			`);
			writeFunction("writeEncounter('spyEncounter01A')", "Approach her");
			writeFunction("changeLocation(data.player.location)", "Ignore her");
			break;
		}
		case "spyEncounter01A" : {
			passTime();
			writeHTML(`
				define p; = sp spy;
				t You walk up to her fairly confidently, raising your hand in greeting and to try and get her attention.
				player Hello there. Can I help you?
				t She jumps rather suddenly when you speak... She must've been too focused on people-watching to notice you.
				p; Oh! Uh, hello there. No, I'm fine - just, y'know...HIDDEN
				t She stands there, thinking for a moment.
				player ...Watching the Uni students?
				p; Yea- No! I mean...HIDDEN
				t She seems a bit frustrated at that, her face getting a bit flushed.
				t She looks fairly harmless, but if you plan on pretending to be a good, law-abiding counselor, it might be a good idea to do something about her...
				p; ...Don't you think it's <i>weird?</i>HIDDEN
				player ...Pardon?
				p; Y'know...!HIDDEN
				t She gestures towards to the crowd of people heading to the University.
				player I am... really not getting what you're talking about.
				t She leans in close to whisper to you and, mostly out of morbid curiosity, you lean in as well.
				p; They're all just <i>so hot!</i>HIDDEN
				player ...I'm not going to disagree, but what's weird about that?
				p; Nonono, you don't get it.HIDDEN
				t She once again does a sweeping motion towards the crowd.
				p; They're <i><b>ALL</b></i> hot. Like, not a <i>single one</i> is less than a solid eight; the general population is made up of average people, so why is it that the university seems to have <b>exclusively</b> well-above-average-looking people!?HIDDEN
				t That's... true. In fact, that's pretty much what earned this place it's nickname.
				p; HIDDEN See, I'm a reporter investigating-
				t Alarms immediately start blaring in your head at the word reporter.
				p; HIDDEN -exactly why it is that <i>only</i> attractive people can be found on campus. I thought about trying to infiltrate the place myself, but uh... I was a little worried that someone who works there might look up my name and start hiding all the secrets.
				player I see... So you're saying you really don't want to be found out by a University employee.
				p; HIDDEN That's right! If I was found out, it'd ruin the whole... investi...gation...
				t She looks down to your hip, finally noticing the small plastic card that identifies you as an employee.
				t She goes pale at that, looking between your face and your card a couple of times.
				t You think for a moment about letting it go... but no. You really can't afford to let a reporter snoop around, and at least if she's the one investigating, you know what she looks like.
				t ...Actually...
				player That's an interesting theory, miss... and now that you mention it, I think you might be on to something.
				t You comfortingly put your hand on her shoulder.
				player The general ratio is entirely skewed to a statistically impossible degree, to the point where I <i>have</i> to agree that there's some kind of interference going on. And that... that just doesn't sit right to me.
				t You pull out a small notepad and pencil.
				player If you're right, then it's possible that the higher-ups could be complicit in some form of discrimination against people who generally look average or below average, which is entirely unfair business practices and needs to be stopped. What did you say your name was?
				t She seems to brighten from your words, clearly and visibly relieved to see that you're 'on her side'.
				t Not that you actually care about anything you're saying - if principalF is only bringing in attractive students, that's only beneficial to you.
				p; It's spyF spyL! I work for the magazine Common Insider from the next town over.
				t ...That trashy sensationalist rag? There's no way principalF would bother reading that garbage.
				player Of course, I've heard some good things about them.
				t You scribble down your contact information and tear off the page, handing it to her.
				player I'm playerF, and I'm more than happy to help. You mentioned wanting to get into the university, but were afraid of getting caught, right?
				t She nods.
				player Then I have you covered. I'll fast-track your application and make sure nobody high up catches wind of you.
				p; Oh my God...! Thank you so much - you're a life-saver!
				player Not all employees at the University can stand injustice, spyF.
				t It is taking all of your willpower to say these lines with a straight face.
				player Now you get going - if any of the students noticed you earlier, they might find it weird that you're suddenly a student the next day.
				p; Understood. I'll see you around, partner!
				t With that, she takes off quickly, leaving you alone to walk to work.
				t ...Given how that conversation went, it shouldn't be hard to deal with her. Especially when she seems to get so... <b>singularly focused.</b>
			`);
			setTrust("spy", 40);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}


		
		case "spyEncounter02": {
			passTime();
			writeHTML(`
				define p; = sp spy;
				player Hey there.
				t Once again, spyF jumps a bit from your approach, not noticing you approach while focusing on the students.
				p; Ah, hey there playerF!
				player How are you acclimatizing after your transfer here?
				t She stares completely blankly at you for a solid second, before it clicks.
				p; Oh yeah, waaaay better than the last place. Which was bad. And not as good as here. Cause y'know, this place is better.
				t You lower your voice a bit to avoid being overheard.
				player Let's just avoid lying in general, alright?
				t She winces a bit, but nods understandingly.
				player So, what've you learned thus far?
				p; Well... Honestly, not a whole lot...
				t She kicks the ground a bit, shifting in place.
				p; I tried approaching a few of the students to ask them about what they thought about the student body, but most folks didn't really understand what I was getting at. I did have one girl say 'With student bodies like these, it's hard to keep your hands to yourself' and winked at me, but I don't think that actually told me anything.
				t ?trustMin kuro 1; Must've been Steph - that sounds like her.
				player In my opinion, going straight up to people and asking them about it isn't the best approach - especially since you're investigating actions by the faculty that would be invisible to the general student populace.
				t Plus, if she asks questions of the students, someone might slip up and mention some of your 'extra-curricular activities'...
				sp player; Instead, try going to classes normally and getting a better understanding of the general situation first. Then, use that information to start further prodding into the circumstance by watching for any suspicious faculty activity and then direct me to investigate them.
				p; That way, they won't suspect me, and you'll already be in a better position to question them... Genius!
				t She smiles, satisfied with that as she nods.
				p; I'll keep a low profile then!
				player Good. And if you need anything in the future, my office is up the stairs along the North hallway; don't hesitate to come by, no matter how small you think the matter may be. I want to stay appraised of the whole operation.
				p; Understood! Now, off to class...!
				t She turns on her heel to walk off... before looking confused and looking around, having already lost track of where her class must be.
				t If she weren't so incompetent as a reporter, you might actually be worried... but for now, it's time to get to work preparing for when she visits your office. Can't afford to cut corners on her...
			`);
			setTrust("spy", 45);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}


		
		case "spyEncounter03": {
			passTime();
			writeHTML(`
				define p; = sp spy;
				t Uncharacteristically, spyF notices you almost immediately after you start approaching her. She must've been focused on waiting for you specifically.
				player Hey there. You look like you've got something on your mind - come on in.
				p; Alrighty!
				t You open the door for her and she steps in. A quick turn of the lock later, and you two are entirely alone.
				player So... Learn anything new?
				p; Well... I learned that scarfF's teaching is a bit weird, but aside from that, nothing particularly damning.
				t She sits down on the couch next to her, her brow furrowed a bit in thought.
				p; But that doesn't mean I didn't find <i>anything</i> suspicious.
				player Oh? Do tell.
				t She starts twiddling her thumbs together, a small flush overcoming her face.
				p; Well... It's, uh. Probably gonna sound a little silly to you, if I'm being honest.
				player I work with college students. The things I've heard students say while walking the campus are probably far sillier than anything you could tell me.
				p; ...Alright.
				t She takes a deep breath, before looking right into your eyes.
				p; I have a gut feeling that the faculty here are doing some seriously suspicious stuff. I was observing secretaryF, greenF, and scarfF a bit and I couldn't get this weird feeling like there's something <i>more</i> going on. I think, maybe... there might be some kind of sex scandal involved.
				t Fuck.
				p; ?trustMin kuro 20; For example, I overheard that gal with the tan skin and blonde hair talking about how she was looking forward to meeting with someone. I know it could totally be another student or someone else entirely, but I have a feeling it's not the case.
				t ?trustMin kuro 20; Shit.
				p; ?flag meji meji1Gallery; And then there's mejiF, who seemed to mention something related to a 'really good experience' with someone that calmed him down. I can just <i>feel</i> that there's something suspicious there, and that the faculty are involved.
				t ?flag meji meji1Gallery; No fucking way.
				p; This place seems fairly open with some of its clubs and with its students - I think I heard about one girl who was interested in becoming a porn star, for example. But I don't think that this feeling is coming just from a generally more sex-positive position being held by students.
				t She places her hand down firmly on the coffee table.
				p; I trust my gut. My boss doesn't, and he says we can't go investigating dangerous leads just from a feeling since it'll get us hit with a libel suit, but I <i>know</i> there's something up here! My gut never steers me wrong!
				t ...So she's got some kind of natural skill for this, like you do with hypnosis. That's concerning.
				t But you can handle it, and you know just the method. And it'll start right here...
				player If there's some kind of scandal where a faculty member is having sex with a student, then we do need to be careful and not rush in too quickly.
				t A sour look goes across her face, and it's easy to see why.
				player That doesn't mean I don't believe you. I've got the same feeling about this, and I trust you on it.
				t She relaxes.
				player But it's <i>because</i> I believe you that I <i>know</i> we have to be careful. We need to take a look at the evidence we have, and work from there.
				p; But we don't <i>have</i> any evidence!
				player Wrong. We do... You just haven't noticed it yet. You see...
				t You slowly roll up your sleeves, giving her your most confident grin.
				player You're not the only one with skills that other folks disregard. What do you know about hypnosis?
				p; Ah... Not much, to be honest. We've covered it in the Common Insider, but not in any detail, and I was never the column writer for it.
				player That's probably for the best. It's not nearly as stylish or fancy as TV shows it, but it's useful for things like pulling up things that you saw, but didn't <i>notice.</i>
				p; Oh! Like the theory of the subconscious remembering everything you see, even if you don't consciously remember it!
				player Precisely. It'll take a bit, but let's see if there's anything I can pull up from in there...
				...
				t An hour passes before you finally start bringing her up from trance.
				t It's... pretty clear from how things went that she not only knows more about hypnosis than she said, but that she's pretty thoroughly skeptical of it. She opened up when you paralleled your ability with her intuition, but still...
				t It'll require a little bit more time and effort to safely get her far enough along to start on anything drastic.
				p; H-Haah... Huh? Is it over already?
				t Yes, yes it is. Fortunately, you made sure she forgot everything she said while under... seeing as she was able to get dangerously close to finding you out.
				player Considering it's been an hour?
				t Your tone is amused as you poke your thumb at the clock.
				player Unfortunately, we couldn't crack the case in just one sitting... but I think we're definitely onto something. I don't want to cast aspersions without evidence, but I think... you might be right.
				t You can hear her click her teeth at that, her eyes narrowing and one of her hands moving up.
				p; Damn... Well, it's something. But what did I see that makes you think so?
				player Honestly?
				t You pat her shoulder reassuringly, helping her up.
				player It was how much you believe. Hearing that, I knew there <i>has</i> to be more to it.
				t spyF's face goes red at that.
				player Now you get going, and keep a low profile. Keep your questions to a minimum, and try not to get scarfF's attention either.
				p; Got it. Don't worry - I'm not dumb enough to get caught by the enemy!
				t She moves her previously-busy hand up to give a mock salute, before heading out.
				t ...As long as she's focused, she has a lot of trouble noticing things. A good tool to use...
				t Especially since she didn't even notice she'd been fondling her own chest while talking to you.
				t You're not in the clear, but she's just susceptible enough that you can solve this...
			`);
			setTrust("spy", 50);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}


		
		case "spyEncounter04": {
			passTime();
			writeHTML(`
				define p; = sp spy;
				t You wave her in casually again, and she quickly steps in.
				player I take it you wanted to go under again?
				p; Of course! If you believe it'll help the case, then I've got the same faith in you as you have in me.
				t She playfully bounces her hip against yours - frankly, it's a rather pleasant, plush sensation.
				player Then go ahead and lay down on the couch. Hope you don't have class scheduled for the next hour or so.
				p; Nah, I'm good! ...Probably!
				...
				t Taking her under is faster this time; that misplaced faith of hers is definitely blinding her to all this.
				t You still can't afford to take risks and try implanting any real triggers yet, though. You put too much effort into getting into this university to risk it out of impatience.
				t By the time she gets up, you haven't done anything to her... yet, at least. You asked her a lot of questions about that intuition of hers, and tried to start steering it in a different direction.
				player That confidence, and the warm satisfaction of getting closer to your goal... If it all ties to a different kind of excitement, then everything will fall into place.
				t When her eyes flutter back into focus, it's with a yawn and a warm smile at you.
				p; Any progress this time, partner?
				player Definitely be careful around the teachers.
				t She freezes at the ncharacteristic sternness to your voice.
				p; Ah... So, I was right, then.
				t You would feel bad about throwing them under the bus, but... You don't really want to, so whatever.
				player Yeah. We're going to have to be just a bit more careful, got it?
				p; Yeah... I get it.
				t She stands up, grinning at you widely.
				p; But we're getting closer. I can feel it - like I'm right on the edge!
				t She doesn't even notice her lightly labored breathing or flushed expression as she says that.
				player Good. I'll see you in a bit, and we can see if we can't get to the bottom of this with just one or two more sessions.
				t She nods resolutely, and leaves the room... and leaves her bra behind, right where she'd dropped it when you had her take it off while under.
				t One more time...
				t One more, and she's yours.
			`);
			setTrust("spy", 55);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}


		
		case "spyEncounter05": {
			passTime();
			writeHTML(`
				define p; = sp spy;
				player Hey there.
				t ...Huh, she's really spacing out.
				t You open the door to your office, before poking her on the shoulder.
				player You coming in?
				t She jumps in surprise again, eyes focusing on you.
				t Ah.
				t The flushed face, heavy breathing, the way she's got her arms over her chest...
				player You figured something out.
				t The door shuts behind you too, and she sits down with a distracted nod.
				p; Yeah, I... think I did. I was watching secretaryF when I saw her handling some documents; she ended up dropping them, so I helped her pick them up.
				player A bit dangerous... but did it pay off?
				p; Yeah. The document was actually about hiring practices - apparently, one of the faculty members has a bit of a suspicious paper trail. Or I guess I should say... You do.
				t ...Ah.
				p; It's weird, though. I looked more into it, and... You have a lot of recommendations, but most of them... They rang hollow, I guess. They read almost robotically.
				player How do you mean?
				p; I've read documents written by folks going through the motions; I've even done it a couple times myself. You don't always get to write about what you're interested in.
				t Half-hazed eyes linger on you... and you let out a sigh of relief.
				t The reason she was spacing out... was because she's already halfway under. The closer she gets to a breakthrough in the case, the more turned on she gets, and the more it pulls her down.
				player Then go ahead. Tell me what you've learned.
				t She opens her mouth to speak, but her breath hitches as her crossed arms slide down.
				t You see an opening, and are intent to take it.
			`);
			setTrust("spy", 20);
			writeFunction("writeEncounter('spyEv01')", "Continue");
			break;
		}


		
		case "spyEncounter06": {
			passTime();
			writeHTML(`
				define p; = sp spy;
				t You stride right up to your door, not speaking but instead shooting spyF a wide smile.
				t Her pen taps harshly against the pad, but it's clear from her reddened face that she's more than a bit excited.
				t The door shuts behind the two of you, and she takes the same seat on the couch as before.
				p; Alright. So you said that you'd be willing to do an interview in exchange for my silence, so here I am.
				t There's a surprising amount of firmness to her voice as she meets your gaze.
				t If her thighs weren't rubbing together due to how aroused just your presence made her, you'd almost feel threatened.
				player That certainly sounds familiar, yes.
				t You sit down yourself, smiling at her.
				player Of course, I can't guarantee I'll answer every question you ask, but it'd be pretty hard for you to find something I'm <i>not</i> willing to share.
				t She scoffs, moving her hair back with one hand.
				p; I'll take that as a challenge, then. We'll start with something simple, then- H-Hah!
				t Her eyes are still on yours as your hand grasps her chin, your thumb tracing her cheekbone.
				player Simple is fun. Go ahead and think over every question you have for me very, <i>very</i> carefully... If you don't stay <b>focused</b>, you might miss a good one.
				...
				t The questions were simple. Things about your personal history, like your hometown, whether playerF is your real name, et cetera.
				t But every question has her getting a little more hot and bothered, and it helps that you have her right where you want her.
				t Literally, of course.
				t Ah, she's asking another question.
			`);
			setTrust("spy", 21);
			writeFunction("writeEncounter('spyEv02')", "Refocus on her");
			break;
		}


		
		case "spyEncounter07": {
			//passTime();
			writeHTML(`
				define p; = sp spy;
				t She looks up at you for a moment, her pen in hand.
				p; A-Ah, I... I need time to come up with more questions. S-Sorry.
				player Of course, it's no problem. I'm patient - I can wait.
			`);
			writeSpecial("You've completed all content currently available for spyF spyL! Look forward to more in future updates!")
			//setTrust("spy", 60);
			//writeFunction("writeEncounter('placeholder')", "Continue");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}


		
		case "spyEncounter08": {
			passTime();
			writeHTML(`
				
			`);
			setTrust("spy", 60);
			writeFunction("writeEncounter('placeholder')", "Continue");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}



		case "spyEncounter09": {
			passTime();
			writeHTML(`
				
			`);
			setTrust("spy", 60);
			writeFunction("writeEncounter('placeholder')", "Continue");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}



		case "spyEv01": {
			if(!checkFlag('spy','EV01'))
				addFlag('spy','EV01');
			writeEvent('spyEvent01');
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "spyEv02": {
			if(!checkFlag('spy','EV02'))
				addFlag('spy','EV02');
			writeEvent('spyEvent02');
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "spyEv03": {
			if(!checkFlag('spy','EV03'))
				addFlag('spy','EV03');
			writeEvent('spyEvent03');
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
	{index: "spyEvent01", name: "Unaware Groping"},
	{index: "spyEvent02", name: "Blindfolded Questioning"},
	{index: "spyEvent03", name: "Event Name"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "spyEvent01": {
			writeHTML(`
				define p; = sp spy;
				t Your hands move to her chest, grasping them firmly even as you maintain eye contact.
				t spyF's breathing hitches again, followed by a sharp moan.
				im 01-1.jpg
				t There's a fleeting spark of shock in her eyes... but it disappears immediately.
				player So, what did you figure out?
				p; I think...
				t She bites her lip.
				p; I think you're... the one doing lewd things with the students. That you used the teachers as a red herring.
				player And what about the ratio of attractive students? Isn't that what you were looking into in the first place?
				p; That... I don't know. It doesn't make sense - you aren't in charge of who gets accepted. And even if you were, most of the students predate you!
				t And now she's focusing on that.
				p; I just... I feel like I'm missing something <i>obvious-</i>
				player You are. And would you like to know what it is?
				t She swallows heavily, her arousal clear from her expression as you continue to squeeze and tease her chest through her sweater.
				p; Y-Yeah... Please, I need to know-
				player It's the principal. It can't be anyone else, can it? And if you remove all other options, whatever remains...
				t She lets out a low, whimpering moan.
				p; H-Has to be true... It's her, then. But how? No, <i>why?</i> What does she gain from-
				player Doesn't matter. Never did. What matters is...
				t You roll your hands around her chest again, smiling at her.
				player ...you figured it out.
				t Her body tenses sharply at that, a moan almost spilling from her.
				im 01-2.jpg
				player But... that's not the end of the story, is it? There's still more.
				p; M-More...?
				player Yes. After all, the idea that the principal is discriminating against people who aren't incredibly attractive... That's exactly the kind of story you'd read in that gossip rag every week, isn't it?
				t One of your hands moves up her chest, caressing her collarbone before going further up, and teasing her lip with your thumb.
				player But a story about a counselor that's sleeping with the student body? Now <i>that</i> would be news, wouldn't it? The sort that would make people stop questioning that intuition of yours, even...
				player And goodness... You're already so, <i>so</i> close to finding out my secret, aren't you?
				t Her body starts to gently shake at your words, her head nodding unconsciously.
				p; I'm... I'm getting close...!?
				player Yes. Closer than pretty much anyone, just on the <b>edge</b> of finding out... exactly what I've been doing.
				t You move your hands to her back, unclasping her bra as she shudders in your embrace...
				im 01-3.jpg
				t Her tits bounce gently when freed, and you don't hesitate for a moment before taking advantage.
				t Your hands sink into her breasts, and you don't bother with finesse as you tease her with your fingers.
				im 01-4.jpg
				t You have her edging in front of you with every movement, her mind hinging on your every word...
				t And you won't be changing that right now.
				p; N-Nooo...!
				t She mewls out a sad, pathetic noise as you pull your hands away from her, her desperate whimpers making it clear just how close she was.
				player If you want to solve the case... If you want to figure out exactly what I've been doing, then there's only one thing you can do.
				t You lean into her ear, blowing gently on the lobe and relishing in her shudders.
				player Come interview me, miss reporter. But don't let anyone know... or I might just have to disappear without ever giving you that sense of... <i><b>closure.</b></i>
				t You stand up, calmly adjusting your shirt as you hand her her bra back.
				player As long as you keep quiet... then I'm happy to sing like a bird for you, Ms. spyF.
				t Her eyes move to her bra for a moment, before she puts it on absentmindedly, muttering to herself.
				t When she finally stands, your heart is racing as you can clearly tell that this is the moment.
				p; I... I'll be back. And you better be honest with me when I do.
				t And you win.
				player I'll be waiting.
			`);
			break;
		}
		case "spyEvent02": {
			writeHTML(`
				player Sorry, could you repeat the question?
				p; I-I asked...
				im 02-1.jpg
				t She purses her lips as your hands continue to press into her chest through her bra.
				p; I...
				player You wanted to know how I convinced the others into doing such lewd, degenerate things with me, yes?
				t That wasn't her question, of course, but...
				p; Y-Yes, that was it. Were you p-pressuring them as a faculty m-mmmmh...
				t She is practically putty in your hands at this point.
				player I don't particularly need to. You see, I just have this... <i>charisma</i> to me, you could say.
				p; Y-Yeah, right...
				t The sarcastic tone isn't missed by you, so you can't help but chuckle.
				t She whimpers again as you pull your hands away to unclasp her bra.
				player You don't believe me? How cruel. I believed in you, didn't I? That you could solve this whole entire case...
				t She shudders again, only for her voice to spill out in a loud moan as you grab her now-bare tits.
				im 02-2.jpg
				p; Y-You... You didn't...
				player I did. Why do you think I made sure you kept coming by my office?
				t You lean into her neck, your lips dragging against the surface of it as she shudders.
				player I was worried you'd find out before I was ready. And you certainly did, didn't you? After all, I had to strike that deal with you, didn't I?
				t The teasing note to your voice goes completely over her head as she squirms.
				p; I... I guess you're right. Silence for an interview...
				player Precisely. It's not as though I'm gaining much else, right? All I have is your...
				t You roughly squeeze her breasts, making her sit back straight and let out a gasping cry of arousal.
				player ...silence. And nothing more. Yes?
				p; Y-Yeah...
				player Such a smart girl, you are. And your intuition...
				t One of your hands slides down her body, trailing along her toned stomach before going even lower.
				player It's genuinely incredible. It's really such a shame that your boss doesn't know how to <b>use</b> you the way you should be used, isn't it?
				t You tease near her clitoris with your fingers, her mind clearly losing what little focus it had left.
				im 02-3.jpg
				p; N-Ngaaahh~!
				t The high sound of her moans fills the room as she continues squirming against you.
				player Sorry, could you repeat the question?
				t You blow on her earlobe again, whimpers and moans spilling out of her more.
				player I'm having trouble understanding you, Ms. spyF. Or would you prefer I monologue?
				p; Y-You... You're...
				player Skilled, intuitive, intelligent, resourceful, curious... You truly are an incredible girl, you know.
				t Every word of praise only causes her breathing to speed up a bit more, her pussy getting wetter by the second.
				player And all of that with such a beautiful body... If you weren't being held back by that disgusting gossip rag, you could be so much more.
				p; T-That's not...
				player You would be an incredible reporter. So successful... I'm sure you agree. After all, I believe it, and when have the two of us been wrong thus far?
				p; F-Fuck, I'm...!
				player Go ahead, say it. Such an intuitive, smart girl... An excellent reporter. You know what that makes you, don't you?
				p; F-Fuuhh~
				t You smirk, whispering the next words into her ear.
				player Such a good girl.
				t Her hips start bucking immediately, her voice entirely silent as she can't even moan through her climax. It's a short spike of pleasure throughout her, and you keep her steady in front of you.
				player Good girl... So much potential. So much you could solve.
				im 02-4.jpg
				t You chuckle as she shudders in your grasp, before you stand up and bring your hand to her mouth.
				t When your hand touches her tongue, she starts absentmindedly lapping at your fingers, tasting her own juices.
				player How unfortunate that we seem to be out of time for today... but there's always tomorrow. After all, you get any number of interviews, don't you?
				t You remove her blindfold, looking into her hazed-over eyes.
				player The scoop of the century, and unlimited questions for me... You really have me <i><b>exactly</b></i> where you want me, don't you?
				t She can't respond at the moment, but you carefully get yourself dressed as she comes back up.
				t She still barely seems to notice how odd it is for her to have to put her clothes back on... but then, that's half the fun.
				player I'll see you soon, spyF.
			`);
			break;
		}
		case "spyEvent03": {
			writeHTML(`
				
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
	{index: "placeholder", requirements: "?trust principal 10000;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "placeholder": {
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
console.log(character.index+'.js loaded correctly. request type is '+requestType)

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