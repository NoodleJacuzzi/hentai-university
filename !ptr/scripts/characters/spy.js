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
	{index: "spyEncounter07", name: "spy is leaning against the wall, looking at her notepad with a perplexed expression.", requirements: "?trust spy 21; ?location northHallway; ?time Morning;", altName: "", altImage: "",},
	{index: "spyEncounter08", name: "spy doesn't seem to be here today...", requirements: "?trust spy 30; ?location northHallway; ?time Morning;", altName: "", altImage: "",},
	{index: "spyEncounter08", name: "spy doesn't seem to be here today...", requirements: "?trust spy 35; ?location northHallway; ?time Morning;", altName: "", altImage: "",},
	{index: "spyEncounter09", name: "Your phone is ringing, and caller ID says it's spy.", requirements: "?trust spy 35; ?location playerHouse; ?time Night;", altName: "", altImage: "",},
	{index: "spyEncounter10", name: "spy is standing near your office, humming happily while waiting.", requirements: "?trust spy 40; ?location northHallway; ?time Morning;", altName: "", altImage: "",},
	{index: "spyEncounter11", name: "spy is once again near your office, scrolling through her phone.", requirements: "?trust spy 100; ?location northHallway; ?time Morning;", altName: "", altImage: "",},
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
			passTime();
			writeHTML(`
				define p; = sp spy;
				t She looks up at you for a moment, her pen in hand.
				p; Ah, there you are. I, um... I was looking over my notes, and...
				t She seems to think over her words for a moment, before shrugging.
				p; Basically, they weren't as detailed as I would like. Expect me to take more during this interview.
				t Riiiiight...
				t You have no intention of wasting your time with her handling a pencil.
				player No problem at all. Shall we?
				t You gesture for her to enter the room and, when you follow her in, you take care to lock the door behind you.
				player So, shall we begin?
			`);
			// writeHTML(`
			// 	define p; = sp spy;
			// 	t She looks up at you for a moment, her pen in hand.
			// 	p; A-Ah, I... I need time to come up with more questions. S-Sorry.
			// 	player Of course, it's no problem. I'm patient - I can wait.
			// `);
			// writeSpecial("You've completed all content currently available for spyF spyL! Look forward to more in future updates!")
			setTrust("spy", 30);
			writeFunction("writeEncounter('spyEv03')", "Continue");
			break;
		}



		case "spyEncounter08": {
			writeHTML(`
				define p; = sp spy;
				t ?trust spy 30; Hm, she doesn't seem to be here... Maybe she texted you something about it?
				t ?trust spy 35; She mentioned that she wouldn't be at the university for a bit since she's looking into something... You'll have to wait for her to contact you first, it seems like.
			`);
			for(i = 0; i < data.story.length; i++)
  				if(data.story[i].index == "spy")
    				data.story[i].encountered = false;
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}



		case "spyEncounter09": {
			passTime();
			writeHTML(`
				define p; = sp spy;
				player ?flag kuro Radicool; Texas Crematorium, you kill 'em, we grill 'em - who we cooking today?
				p; ?flag kuro Radicool; Err... What?
				player ?flag kuro Radicool; Just a bit of humor. This is playerF, yeah. What's up?
				player !flag kuro Radicool; This is playerF. How's it going, spyF?
				p; I... I need to talk to you. About the thing I was looking into?
				t Her voice seems a bit distracted, and at this point you're fairly curious.
				player I'll be at the university tomorrow - my office door's are-
				p; No! Err...
				t You can hear a quiet, embarrassed hum over the phone.
				p; I need to talk tonight.
				player ...Alright. Do you have my address?
				p; I got it from secretaryF, yeah.
				player Then I'll see you when you arrive.
				p; Y-Yeah, see you then.
				...
				t It isn't long before she arrives; she practically darts past you when you open the door for her, keeping her head down. Not down enough, though, for you to not notice the flush on her face.
				t A locked door and a short few steps later, you and spyF are seated in your apartment as she fidgets in place.
				player Should I be worried about the abruptness of the meeting?
				t Your tone is calm and even, but you'd be lying if you said you weren't just a little bit on edge.
				p; No, I just...
				t She seems to think over her words, before sighing in a long, drawn-out manner and leaning her head down onto the table between you two.
				t Her voice is a little muffled, but not by much as she slides her phone over. The screen is currently showing... an audio file?
				p; When I said I was gonna take more notes during our last interview, I... didn't mention <i>how</i> I was gonna do it. I thought maybe if I could listen to it over again, I'd have a better idea of how to progress, and what I heard was...
				player Troubling?
				t She lets out a low, frustrated groan at that, and as you hit play, it's not surprising why.
				t It's the sounds you'd expect from a microphone catching the sounds of a titjob, and the sounds of her moans are nearly as loud as your words.
				t She only lets it play for a few moments before pulling the phone back, and you let her stop the sound.
				player Not the kinds of notes you were expecting, I take it?
				t She shoots you a small glare, but it only takes a moment for it to soften as she looks back down.
				player To be honest... I'm a little bit surprised you didn't take it to your boss. Sure, it's a bit too embarrassing to use as evidence for a story, but I'm sure it'd be enough to convince him to let you come back in force, don't you?
				t spyF's fidgeting only gets more obvious, hands practically being wrung together.
				player That, or you could go directly to principalF - I can't imagine this sort of thing would look good for me. You'd successfully remove me from my position... in exchange for fewer interviews, of course.
				t The fidgeting stops for a moment.
				player Of course, that's just a ridiculous idea, isn't it? That you would-
				p; Ugh...
				t You stop when you see her push her phone forward again, an audio file selected again. This one is much smaller, though...
				t You quirk an eyebrow at her, opting to let <b>her</b> press play this time... and after a few seconds of awkward silence, she huffs a bit and, with a bright red face, presses play.
				player <i><b>Good girl.</b></i>
				t ...Well.
				t That's more blatant than expected.
				player ...You know, I remember this app having a play count-
				t The phone is immediately pulled back, and spyF somehow manages to look even more embarrassed in that moment, but relaxes a bit when you laugh and shake your head.
				player If all you wanted was a bit more praise, you could've just asked over the phone, you know. Unless, of course...
				t You lean towards her on the table, flashing an almost predatory grin.
				player That's not all you wanted in coming here. So, do tell me what brings you here - and <b>be honest</b> with me, won't you?
				t She crosses her arms and looks away before speaking.
				p; I... I wasn't actually looking into anything, or doing research, or anything like that. I was...
				p; ...I was masturbating while playing that clip over and over again...
				t Her eyes seemed close shut tight in thought for a moment, before she lets out another sigh, this one a bit more morose.
				p; You said I'm a good reporter, right? And that... and that the reason I'm not successful is because the boss doesn't know how to use me?
				player Of course. I've not a doubt in my mind that your intuition is a force to be reckoned with.
				p; Could you... help me?
				t You let a moment of silence fester, prompting her to continue.
				p; ...I want to be a better reporter, to actually <i>be</i> a reporter. But they won't <i>let</i> me, tell me it's too risky, even though I <i>know</i> what I'm doing.
				t A more resolute look on her face appears, and she perks up with a bit more confidence. 
				p; So, if I were to delete that interview recording... would you be willing to use me?
				t There's no subtlety to the double meaning to her phrasing, and the fact that she opened all of this with the audio recordings she did.
				t You place your hand on hers, the small touch highlighting the warmth of her hand against yours.
				player I could use you in ways that would result only, and <i>exclusively</i>, with satisfaction. If that's what you want, then we can start right now.
				t She bites her lip at that, before grabbing her phone. A moment later, you can see the file was deleted, and you can see her starting to lift her shirt up.
				t You stop her halfway, though, and grab onto her waist.
				player Come here.
				t There's a demure squeak from her as she leans into you, and you take control to guide her to the bed.
			`);
			setTrust("spy", 40);
			writeFunction("writeEncounter('spyEv04')", "Continue");
			break;
		}



		case "spyEncounter10" : {
			passTime();
			writeHTML(`
			 	define p; = sp spy;
			 	player How's it going?
			 	t spyF looks up at you, smiling wide for a moment before she pauses, clears her throat, and adopts a slightly more professional look to her.
			 	p; Let's discuss it in private.
			 	t You just nod at that, following her into your office with an amused smile.
			 	...
			 	player So... Is this another 'interview', or...?
			 	p; Not quite.
			 	t spyF crosses her arms over her chest at that, holding a rather serious look on her face.
			 	p; I want to discuss the serious stuff. Like, obviously I'm into you, but I'm also into my career - the whole 'use me' thing was also literal.<br>I intend to be a good reporter, and if I'm not reporting on your extra-legal sexcapades, then I feel like I need something else to work on.
			 	player Not a fan of idle hands, then?
			 	t That's fair - you're not exactly a fan of it either.
			 	t You stop to think a bit, before pausing.
			 	player Actually...
			 	t You open your phone, pulling open the browser and checking the history. You can't remember the name of it, but...
			 	t Ah, there it is.
			 	player What do you know about this place?
			 	t You slide her your phone, which shows the landing page for a separate university a few towns over - technically the 'competing' one with this place, for lack of a better word.
			 	p; ...Nothing <i>yet.</i> What kind of recon are we talking? Like, I'm good at snuffing out secrets, but figuring out a single person's schedules and other stalker-stuff is a bit more iffy.
			 	player Just a cursory look at things. You mentioned before that there were way too many attractive students at this place, so...
			 	p; ...So you trust that, if there's anyone 'blow-your-mind' levels of sexy, I'll make sure you know it's worth your time?
			 	player Nailed it in one. I don't need you to start on this sort of thing now - goodness knows it'd take you away from this place for a good long while - but it's worth thinking over for now.
			 	t She mulls over that for a bit, humming in thought.
			 	t After around a half-minute, she nods once.
			 	p; I'll also ask my boss about any rumors and the like about the place. A reporter can never have too much info, after all.
			 	player That's good and all... but what does your gut say about it?
			 	t She looks surprised for a moment (she probably forgot that you actually value your intuition for a second there), before smiling a bit.
			 	p; Honestly, I get the feeling it's about as righteous and pure as the two of us.
			 	player So more debauched than your local sex dungeon, got it.
			 	t spyF's laugh fills the room as she uncrosses her arms.
			 	p; Hope you don't mind if I head out before doing anything like <i>that</i> today. I'm all up in business mode, and I wanna get the prepwork done before I end up losing it, you know?
			 	player No problem. We have all the time in the world, so I'll see you around.
			 	p; Count on it~
			 	t She blows you a kiss and hops out of her seat with an almost infectious level of confidence in her stride.
			 	t She hasn't even started working for you, yet she already seems to be enjoying it more than her actual job...
			 	player Hah. It's that idiot's loss, honestly...
			`);
			setTrust("spy", 100);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}



		case "spyEncounter11" : {
			writeHTML(`
			 	define p; = sp spy;
				t spyF gives you a small smile as you approach, and a second later you're both in the office.
				p; Comfy as always~
				t She leans forward a bit, the cut of her shirt highlighting just the barest amount of her cleavage.
				p; So, what's the plan for the day, 'boss'?
			`);
			//writeFunction("writeEncounter('spyEv05')", "Continue");
			writeFunction("writeEncounter('spyEnding')", "Send her on the assignment", "blue");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}



		case "spyEnding" : {
			writeHTML(`
			 	define p; = sp spy;
				player Actually, I was thinking of sending you on the assignment to the other university. Did you find anything out about it?
				p; A couple rumors here and there. One sec...
				t She pulls open her phone and, after a few quick moments, your own phone buzzes.
				t Checking it, you see...
				player That's... a fair few documents.
				p; Don't worry, most of them are just newspaper articles and pictures. The number of hotties is definitely considerable, though not as many as around here if you ask me.
				t You check a few of the images, and sure enough, she's right that there are indeed some rather attractive folks pictured...
				player Huh. They even have their own nickname, huh?
				p; Yup; seems like the folks started calling it 'Ecchi University' to match this place. Not too surprising though, since a lot of the clubs seem a bit more... <i>open,</i> you could say?<br>Click on the... 13th image, I think?
				player ...That's a rather revealing outfit.
				p; Yup. She's actually <i>faculty,</i> too - she's the advisor to the belly-dancing and crossdressing clubs.
				t You set down your phone, nodding resolutely.
				player Based on the information you've gathered, I think it's safe to say it's the perfect kind of place to target next after I finish with this place.
				t She has a proud grin on her face as she leans back in her seat.
				player Now, I <i>would</i> normally commend your work and praise you until you're red in the... well, <i>everything,</i> but how about we go for a more substantial reward?
				t spyF blinks in confusion once, before sitting up straighter with a smile.
				p; Your place or mine?
				player Mine, tonight. Good girls deserve prompt rewards, I'd say.
				p; Yeees~ See you then!
				t She bounds out of her seat, heading towards the door before pausing just long enough to blow you a kiss.
				t When the door shuts behind her, you lean back in your seat, thinking.
				player ...Maybe doggy-style? Yeah, we haven't done that yet. Doggy it is...
			`);
			writeFunction("writeEncounter('spyEndingEvent')", "Continue");
			break;
		}



		case "spyEndingEvent" : {
			if(!checkFlag('spy','Ending'))
				addFlag('spy','Ending');
			if(!checkFlag('spy','EVEND'))
				addFlag('spy','EVEND');
			writeEvent('spyEventEnding');
			writeFunction("writeEncounter('spyEndingTimeSkip')", "Jump ahead...");
			break;
		}



		case "spyEndingTimeSkip" : {
			writeHTML(`
				...
				t Around six months have passed, three of which were spent here at this new 'Ecchi University'.
				t spyF really wasn't joking when she said that this place was a bit more open - sure, the Sexual Wellness club was actually just for healthy sexual education and <b>wasn't</b> a place for free-use orgies amongst the students (before you arrived, of course), but that's more than can be said about more than a few places.
				t With her help, though, figuring out a way to get mot of the faculty alone was pretty easy, and even fun. You lost track of the number of evenings you spent brainstorming ideas with spyF... before 'testing' many of them on her at her own request, of course.
				t And now, you get to not only enjoy the fruits of your labor, but also the start of a new term is once again upon you, with more than a few new students coming in.
				p; If it weren't for the tent you're pitching right now, I'd say you were looking out at the quad with nothing but pride and a sensation of accomplishment.
				player Then it's a good thing this window is above waist-level, or we'd probably have another 'sexual wellness seminar' right outside, wouldn't we?
				t You see spyF roll her eyes at that, but the wide smile is telling enough.
				p; And me without my parka.
				t She steps up right beside you, browsing through her phone.
				p; ...So, were you seriously <i>never</i> gonna make a joke about the paper's name? 'Cause like, I didn't realize the pun until one of the students pointed it out.
				player The Common Insider? Honestly, I was tempted, but knowing that you were saying it without realizing it was <i>way</i> too funny.
				t She playfully bounces her hip against yours, pushing you to the side a bit.
				p; Jerk.
				player Speaking of, how does it feel to know that the place that ignored your talents, intuition, and <i>outrageously</i> sexy body has gone under?
				p; Meh.
				t You quirk an eyebrow.
				p; ...playerF, you fucked me so hard I could swear I forgot how to <i>speak</i> for half an hour. Compared to that, revenge is pretty paltry.
				player ...
				p; ...Okay fine it feels satisfying.
				player Called it.
				t You take a slow sip from your drink, looking away from the quad to look at spyF instead.
				player So... Seeing as you didn't bother knocking, I assume you wanted to walk into the middle of me plowing someone so you could turn it into a threeway.
				p; I was hoping.
				player ...I can call Natalia-
				p; I'll walk in in about five minutes.
				player Use the key - she'll probably lock it behind her.
				p; Of course. See you in five~!
				t She gives you a quick peck on the cheek before darting out the door with that same energetic confidence you love to see.
				player Ah... Now this is the good life...
			`);
			writeFunction("loadEncounter('system', 'credits')", "The End");
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
			writeHTML(`
				t ...Of course, she tries to collect herself again a few more seconds later, but it's pretty entertaining to watch her bob back and forth between dopey and serious...
				...
				t Around five minutes of toying with her like that later, and another ten or so minutes of clean-up and getting dressed, you smile at spyF as she adjusts her sweater.
				player Hey, Ms. spyL.
				p; <font size='-3'>...spyF is fine, y'know...</font>
				t Her tone is low and her face is red, but you chuckle nonetheless.
				player Alright - spyF. Look over here.
				p; What's-
				t You step forward and bring your lips up to hers, her eyes going wide as she stands still for a moment.
				t Then, right when she started to lean into it-
				p; Ahn- huh?
				t You step backwards, increasing the distance between the two of you as she looks almost disappointed.
				player Don't surround yourself with idiots who can't see you're worth praising.
				t Her face goes completely red, her gaze immediately going to the floor.
				p; T-That's all for the interview <i>thank you for the answers <b>BYE</b></i>
				t She practically sprints out the door, and you can't help but laugh as she does.
				t Adorable...
				t Useful, too. It won't be long before these 'interviews' can wrap up and things can move on...
				t A moment later, you look down and see her notebook and pencil sitting on your couch.
				t Hilarious.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "spyEv04": {
			if(!checkFlag('spy','EV04'))
				addFlag('spy','EV04');
			writeEvent('spyEvent04');
			writeHTML(`
				p; I... I wanted to talk more about the thing, with the reporting, but...
				t She trails off, just looking down at her sweaty, and now cum-covered body.
				player Yeah, I think it can wait until tomorrow.
				t She smiles at you, before just moving an arm over her eyes.
				p; Yeah... Next time, your office; we'll discuss it.
				player Sounds good to me.
				p; Yeeeeah...
				t Yeah... This was good.
			`);
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
	{index: "spyEvent03", name: "Half-Lucid Titjob"},
	{index: "spyEvent04", name: "Missionary in the Night"},
	{index: "spyEventEnding", name: "The Pre-Mission Ride"},
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
				define p; = sp spy;
				player You know... I actually have a question for you.
				t You gently stroke along her collarbone as you say that, a jolt of pleasure going up her spine as she shudders.
				player Why are you so focused on breaking this news? Is it the thrill of catching someone up to no good?
				t Your hands slide further down, pushing her coat as you gesture for her to lift her shirt.
				t She, of course, does.
				player Is it a justice thing? Or more of a self-gratification bit?
				p; It's...
				player Oh, and Ms. spyL... <b>Do be honest about it.</b>
				t She bites her lip as she leans forward, her now bare breasts enveloping a good amount of your cock as your head pokes out between them as she seems to think over the question.
				im 03-1.jpg
				p; I... want to be...<font size='-3'>praised...</font>
				t You run your hand through her hair, grunting slightly as she starts bouncing her chest along your shaft.
				player I didn't catch that, Ms. spyL. Again, but louder this time.
				t To her credit, as she bites her lip, it seems like she's almost able to reject the order... before looking up and locking eyes with you, and her will crumbles a little bit more.
				p; I...  I said I want to be recognized for my efforts, and my skills, and... and to be praised.
				t You smile down at her, one hand going to stroke her cheek gently.
				player Really now? All of this skill, beauty, and intuition... and you're not being praised already?
				t She tries to shift her head away, but you grab her chin and force her to look right back at you.
				player Clearly, you surround yourself with blind idiots.
				t Her face flushes slightly.
				p; You're just-
				player If you imply I'm giving you empty praise, then I'm ending this interview early.
				t Her jaw snaps shut.
				player I told you last time, and I'll repeat it as much as needed. You are an excellent reporter.
				t Your hand goes to the top of her head, pulling her mouth closer to your cock as her lips press against the tip.
				p; B-But-
				player For someone wanting praise, you seem to need practice accepting it. So use that mouth for something more constructive than backtalking me. So how about you just focus on this, like a <i>good girl</i>.
				t She holds still for a moment... before she relaxes a bit more, and opens her mouth.
				im 03-2.jpg
				t Her tongue laps against the underside of the glans, drops of her saliva slowly sliding down your shaft and lubricating her tits.
				t Her hands adjust her breasts a bit, stimulating the shaft as her hot breath makes your cock feel warmer, before her lips wrap around your head entirely.
				player Fuck... That's good...
				p; Mmm...!
				t You toy with her hair as she starts to softly, almost hesitantly suck you off.
				player Such a good girl... You're getting better with every interview, you know that? Always able to get...<br>Nn!
				im 03-3.jpg
				t The vacuum pressure from her sucking gets a bit stronger, her body shifting forward a bit as her breasts slide up and down the full length of your cock to match.
				player ...able to get exactly what you want out of me~
				t She shudders again from the sound of your huskier, pleased voice as she squeezes her tits together tighter, pressing around your shaft more as she bounces a bit faster.
				t Her tongue doesn't slow down either, lapping at the underside of your cock as she bounces her tits.
				t She's putting a lot of focus and effort into it, clearly working to hear more praise...
				player Go faster, Ms. spyL...!
				p; M-Mhm~!
				t Her spit spills down from her lips down your shaft more and more, making her tits a sloppy mess as she keeps pressing her chest forward.
				t You buck your hips in time with her, fucking her cleavage roughly as her breathing picks up in speed.
				t Your hand moves along her face, grasping her hair with one hand and stroking her ear with the other.
				p; <i><b>MNN~!!</b></i>
				t Her body quivers against you as you grab the back of her head a bit tighter, before biting your lip and leaning back.
				t Your hands support your body now as she puts everything she can into sucking you off, your cockhead sliding against her tongue as she brings her tits down faster.
				player Fucking- Fuck...!
				t Each time her head bobs down, she turns her head a bit and her lips slide around your shaft, and you approach the edge faster and faster.
				t The twitching of your shaft is the only warning you give her, and the moment you start to cum, her entire body seems start shaking in ecstasy as her eyes shut tight.
				im 03-4.jpg
				t Your cum spills out from her lips, spilling down and making an even bigger mess of her chest. Your hips buck up a few more times, more ropes flooding her mouth as she keeps swallowing what she can.
				t When you finish, there's a dazed look on her face for a few moments, her cheeks still a bit puffed out from the mouthful of cum... but she seems to collect herself pretty quickly.
				im 03-5.jpg
				p; M-Mm~...
				t She swallows deeply one more time, before her mouth hangs open a bit as she blushes and pants for a few seconds.
				p; T-That was...
				player That was very good, yes.
				t You stroke her hair a bit, and she pretty much melts in place again as she leans into you.
			`);
			break;
		}
		case "spyEvent04" : {
			writeHTML(`
				define p; = sp spy;
				t You pull her back with you towards the bed, the thumb and finger of one hand unclasping the button on her skirt with a swift motion before she pulls it the rest of the way off.
				t Her coat hits the floor nearly as quickly, with the only thing remaining being the half-lifted shirt.
				t You lift it the rest of the way over her head, causing her hair to get tossed about a bit, but she shakes her head a bit to get it out of her face almost immediately.
				t And speaking of immediately, it's just as quickly that her lips are pressed against yours as she brings her body close to yours, her tits feeling warm against your body.
				t Both of you fall backwards onto the bed, with her on top of you for a second before, with one hand tightly grasping her thigh and the other around her waist, you turn her over onto her back.
				player Seems to me like masturbating to my voice wasn't quite enough, was it?
				t She looks a bit embarrassed, but doesn't look away this time.
				p; This time, I want to stay clear-headed. But, um...
				t She clears her throat once.
				p; I'm still keeping that recording.
				t You can't help but laugh at that, and lean into her ear to whisper,
				player I wouldn't have it any other way~
				p; You-
				t Any attempt at a quip is cut off as your lips tease at her earlobe, making her gasp sharply with even more arousal tinging her voice.
				t Not that words are that necessary, anyway.
				t Her pussy is soaked at this point, and your cock is more than ready as well. You have half a mind to keep teasing her and extend the foreplay out, but...
				t You're not the only one whispering huskily.
				p; Please... Stick it in already~
				t The soft, lustful tone to her voice has you throbbing as you line yourself up, and...
				im 04-1.jpg
				t You bottom out in a single long, slow stroke into her.
				t spyF's folds feel as warm and ever, but it does feel a bit different...
				p; No distractions for <i>this</i> interview~
				t Her teasing tone is accompanied by her cunt tightening around you, slowly at first before almost rolling along your cock as she relaxes and tightens in a short sequence.
				player F-Fucking hell...!
				t You feel her calves glide against your back as she wraps her legs around you, pulling your body forward and tighter against you as your hips press even more firmly against her ass.
				player You... are a lot more lewd than I gave you credit for, aren't you?
				p; You'd have learned more, you know, if you'd...
				t She pauses to roll her hips a bit, shifting your cock inside her.
				p; ...if you'd used those interviews to ask different kinds of questions~
				t You tighten your grip on her hips, slowly pulling back your own to start thrusting into her again.
				player And risk scaring off such a delightfully tight reporter? Perish the thought, spyF!
				t She rolls her eyes in amusement at that, and you can't help but enjoy the more relaxed look about her.
				t Though an entire day of fucking herself silly to the sound of your voice is likely what really pushed her over the edge...
				t And speaking of getting fucked silly...
				player I hope you weren't expecting me to hold back, spyF-
				t Her legs tighten around your back, sharply pulling you into another balls-deep thrust.
				p; <i><b>A-Ahn...!</b></i> Don't you dare~...!
				t Her eyes, desperate for pleasure, lock onto yours as she smiles.
				t Well, she asked for it...!
				...
				im 04-2.jpg
				p; F-Fuuhh...~! Fuck'n fuckkkk~!
				t Your hips keep slamming into hers with enough force to make the clap of skin-to-skin nearly loud enough overwhelm her surprisingly soft moans and the steady stream of blank expletives from her mouth.
				t Her tits sway wildly, bouncing in front of you with every clap of impact between you too, and her adorable squirming underneath you doesn't seem to be slowing as her body seems caught between trying to move away from the powerful stimulation... and trying to rub against you however she can in order to increase it.
				t You move one hand from her hips now, and her eyes flicker open for a moment as you do.
				player Why don't we see how this feels, hm?
				t You don't slow down in fucking her as your free hand rests against her lower abdomen, just lightly applying pressure down with your thumb, and her entire body shudders at once.
				p; Holy shit yes please again <i>don't stop that!</i>
				player Hah! God, you are just <i>so fucking adorable...!</i>
				t The stimulation of the area above her womb and the continuous fucking has her arching her back and squeezing wildly around your cock, wildly milking your cock as she twists in place.
				t And honestly, it's taking an incredible amount of willpower to not immediately bust inside her yourself. The way she moans and squeals and squirms, the way her wet pussy grasps and strokes your cock...
				t You bite your lip, refocusing on her face to avoid letting the stimulation put you over the edge. You don't know how many times she's cum at this point (at least one, but probably less than five?), but you have every intention of finishing at the same time as her.
				t And Fortunately for you and your cock, it's clear that that's not far off...!
				p; <i><b>Haaahn~!</b></i>
				t Each of her moans are getting louder as you push forward. With her on the edge, you know better than to switch up the stimulation, but your hand is a little too sore, so...
				player Such a sexy, beautiful woman...!
				t You grasp her hips again and continue bucking into her as you praise her.
				player Those big, lewd tits, your perfect fucking hips and ass...!
				t You can feel her tightening become more uncontrolled as her arms begin to quake a bit.
				player You know what that makes you, don't you?
				p; <i><b>Fuckfuckfuckfuck...!</b></i>
				player Such a <i><b>good fucking girl...!</b></i>
				t She finally goes over the edge one last time, and the wild squeezing like a vise around you is far too much to withstand as you cum as well.
				im 04-3.jpg
				t Her mouth is wide open in a silent scream of pleasure as she cums around your shaft, milking rope after rope of jizz into her cunt while more of it starts spilling out and coating your hips and her ass.
				t It feels like your orgasm lasts almost as long as hers as you just keep cumming, until after who-knows-how-long...
				t You're both finally just holding still, your breathing heavy and ragged as you bask in the warm afterglow of the long fuck session.
				t Her chest continues to heave up and down, shifting her tits in front of you, but her eyes catch your attention more as she just... looks at you.
				p; You... You're...
				t She can't seem to think up the words to say, before just letting out a satisfied giggle.
				p; That felt incredible~
				player Haah. Same - it felt amazing.
				t There's a deeply satisfied look to her as she relaxes into the bed, heaving a sigh of contentment.
				im 04-4.jpg
				t You glide your hands along her thighs for a moment, before you slowly pull out. She lets out a small squeak of pleasure for a moment, before you finally get all the way out and she relaxes more.
			`);
			break;
		}
		case "spyEventEnding" : {
			if(data.player.location != "gallery"){
				writeHTML(`
					t The low light of the night fills the apartment, setting what seems to be a fairly nice mood. And of course, spyF doesn't keep you waiting long...
					t When she steps through the door into your apartment, shutting the door behind her, she reaches for the light switch, but you stop her by grabbing her waist and pulling her close.
					p; Hu-? Mm~!
					t You press your lips to hers, and she relaxes in your grip, the confusion quickly giving way to amusement.
					t When you separate a bit, you can see her smile and quirked, curious eyebrow.
					p; So we're getting right into it? Not that I'm complaining~
					player I <i>did</i> say you deserved a prompt reward, didn't I?
					t Leading her to the bed is quick and easy; when you get there, she reaches down to unfasten her skirt, but you stop her again.
					player Allow me.
				`);
			}
			writeHTML(`
				t Her hands move away from her skirt as yours take their place, unfastening the button at her waist to loosen it.
				t Rather than just letting it drop unceremoniously, you grab both sides and slowly tease it down, your hands slowly gliding across her thighs at the same time.
				t Black, lacy panties catch your eye as take the skirt lower and lower, and you can't help but tease her with a gentle trailing of your lips across her inner thigh at the same time.
				p; H-Hn~...
				t The hitch in her breath is adorable, and you let the skirt go as it pools around her ankles. You slide your palms up along her legs slowly as you stand up again, teasingly pulling her panties up a bit tighter as you do.
				p; T-This is... really nice...
				player Good~
				t Her coat comes off next, your hands sliding against the sides of her breasts before moving up to cup her shoulders, pushing back the coat as you push forward into a kiss with her. She moans softly into your mouth as her coat falls back effortlessly, hitting the ground with a sound that she completely misses.
				t Then, of course... comes the sweater.
				t Your palms rest against her hips at first, you dropping low enough that your face is at her stomach, and as you lift the hem of the sweater...
				p; H-HAHN~!
				t Her body shudders from the kiss at her now-exposed stomach, right above her womb.
				p; T-Thats-! Nn~!
				t Your hands continue sliding the sweater up her body as you continue kissing her skin, pausing just long enough to pull it over her ample chest.
				t Her face is bright red at this point, the foreplay clearly doing its job of getting her excited for the next part... Though her soaked panties would be just as obvious a sign.
				t Your lips drag across her chest as her sweater slides all the way up and off, and you move your hands behind her back.
				t Grabbing her by the small of her back, you pull her in close, and she feels your hard cock press against her panties.
				p; H-Hoh wow...
				t Her hand moves down to try and grasp it, but instead you just raise your hands up from her back to the strap behind her, and...
				p; Oh!
				t Her bra pretty much falls right off when unfastened, hitting the ground between you as you grab her firmly and just fall forward.
				t You both land easily on the bed, taking her with you as she bounces quite nicely...
				p; H-Hah... Um, can you...
				t She trails off, still sounding unsure.
				player It's <i>your</i> reward. Ask with confidence.
				t She bites her lip for a moment, before nodding.
				p; I really, really enjoyed the foreplay, but... I want to get started even more. Is that okay?
				t Rather than answering immediately, you chuckle and reach down.
				t Her panties are pulled away and tossed over your shoulder to the rest of her clothes, and you grab her hips.
				t When your cock presses against her thigh, she shudders with excitement as she spreads her legs out just a bit more, and gets into position.
				player If you're that excited... then let's get started.
				im E-1.jpg
				p; F-Fuuuck yes~!
				t You start out slowly pushing into her, but dont wait long to start moving your hips against her faster when she starts pushing her ass back towards you.
				t Your hands firmly grasp her ass, your thumbs pressing in as you thrust.
				t As you pick up more and more speed, her body bouncing back against yours each time, her dogged panting gets more apparent as starts squeezing around your shaft.
				p; It's so hot...!
				player And fucking <i>tight...!</i>
				t One hand slides down her ass to tease at her pussylips, sliding a thumb along them.
				player Just how badly did you want this cock?
				p; F-Fuck...!
				t She bites her lip, somehow still looking a bit bashful despite getting absolutely railed.
				p; So much...! I wanted you to fuck me, use my pussy like it's yours, and...
				t You playfully swat at her ass, eliciting an aroused yelp from her.
				player And?
				p; And p-praise me!
				t She can say fuck time and again, but stammers to ask for that...
				t Well, only one way to fix that.
				player Your cunt is fucking <i>amazing,</i> spyF.
				t She tightens around you.
				player Every thrust, every pull back, just <i>thinking</i> about it on top of fucking you makes me feel like I'm going <i>mad.</i>
				t Your hands dig into her ass, her breathing picking up even more.
				player And every cute little squeal, every little <i>squeeze</i> around my cock, and every <i>adorable</i> moan out of your lips makes me want to <i>fuck you stupid.</i>
				p; <font size='-2'>holy fuck yes <i>please don't stop talking</i></font>
				player Every bit of that beautiful body makes me want to leave you moaning, screaming in pleasure, and <i>dripping with my cum.</i>
				im E-2.jpg
				t She is practically soaked with a mixture of your fluids and hers, every thrust making wet, lewd sounds as she lets out even louder moans of pleasure and lust.
				t Each and every thrust is matched by the wild, barely-controlled shifting and squirming of her folds around your cock, the wet heat amplifying every thrust as you can't help but grunt alongside her.
				player Fucking hell... You feel so damn good I can hardly think about anything else...!
				t Her toes curl at that and her nails dig into the sheet with one hand, the other grasping at her ass like she's trying to spread it just a little bit more for you.
				p; I-I feel like I'm gonna go crazyyyy...!
				t The pleasure has her drooling a bit as she tries to make eye-contact, but every balls-deep thrust shakes her whole body enough that she can't focus enough, her eyes even tearing up slightly from the non-stop, overwhelming pleasure.
				t But despite how mind-numbing it's getting, you don't see a sign of her even wanting you to slow down, so you keep thrusting forward and rolling your hips as you do, just enough to push into every sensitive spot within her that you can.
				t And when you find that perfect spot, and her whole body tightens up at once in a single, almost unbearably tight moment, you grin.
				im E-3.jpg
				t Her voice gets louder now, each thrust perfectly slamming past into her body starts to quake beneath you, her first orgasm (of many) starting to rake across her body.
				t Each time you bottom-out, you feel her twitch in ecstasy as you press against a certain spot deep inside...
				p; Fuck yes, ooh <i>fuck</i> just like that <i>please!</i>
				t And that's a cue to target that spot if you've ever heard one.
				t You're practically slamming your hips against hers with each thrust at this point, hitting that spot reliably as she turns into little more than a drooling mess of a girl beneath you.
				player God... You are just so <i>fucking hot...!</i>
				t Tempted as you are to flip her over and taste her lips against yours, you focus on thrusting against her weakest point, pushing the both of you closer and closer to the edge.
				t And the edge really isn't far, as you feel it welling up pretty quickly on your end.
				p; O-Ohh fuck fuck oh fuck yes fuck
				t And there's no question that she is too.
				t The tightening of her pussy around you, milking your shaft and tightening around your tip is driving you mad at this point, and after just a half-minute more...!
				player Fuck, <i><b>I'm cumming!</b></i>
				p; <font size='+3'><i><b>FUCK~!</b></i></font>
				im E-4.jpg
				t You both finish at the same time, her pussy's contractions around your shaft gripping you so tight that it's hard to pull back enough to buck forward.
				t Her heaving gasps are mirrored by the shaking of her hand on her ass, and you teasingly knead your thumb against the meat of her juicy behind.
				player That was good, spyF...
				p; Y-Yeah, it-
				player Especially for a first round.
				t There's a half-hazed look in her eyes at that, and she stares blankly at you for a second.
				im E-5.jpg
				p; U-Uhm... First round?
				player Of course. After all, you made the request, didn't you?
				t You give her a playful swat on her ass, her cunt tightening around you as her breathing hitches.
				player You wanted me to "use you", didn't you?
				t A full second goes by as she clearly weighs her options, before a resolute expression appears on her face.
				t Turning away from you, resting her face in the pillow, you watch for another moment of silence...
				p; F-Fuck me...
				t Her embarrassment has her fidgeting for another moment, before she groans loudly.
				p; Just fuck me stupid please!?
				t Just as she buries her face in the pillow, you laugh and lean in.
				player As you wish~
				t It's going to be a long, and unbelievably pleasant night...
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
	{index: "spyPhone01", requirements: "?trust spy 30;"},
	{index: "spyPhoneComplete", requirements: "?flag spy Ending;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "spyPhone01": {
			setTrust("spy", 35);
			writePhoneSpeech("spy","","Not gonna be at school for now, going to be looking into some things, will message when they're resolved");
			writePhoneSpeech("spy","","Don't think that means the interviews are done with tho");
			writePhoneSpeech("spy","","I'll have more questions for you later, so prepare yourself");
			writePhoneChoices("I'll be prepared");
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
			break;
		}
		case "spyPhone01A": {
			writePhoneSpeech("player","","I'll make sure to be prepared - I quite enjoy these interviews after all");
			writePhoneSpeech("spy","","Whatever interrogate you later");
			writePhoneSpeech("player","","Looking forward to it");
			break;
		}
		case "spyPhoneComplete": {
			writePhoneImage("images/spy/fin.jpg", "Art by Anzu Yuu");
			writePhoneSpeech("player","","Congratulations! You've completed all currently available content for spyF spyL. Her story is complete, but in the future, more lewd scenes may show up!");
			writePhoneSpeech("player","","I hope you've enjoyed HU thus far - please look forward to more content going forward!");
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