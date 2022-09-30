var character = {index: "pizza", fName: "Penny", lName: "Heron", trust: 0, encountered: false, textEvent: "", met: false, color: "#DC7979", author: "CryptoGreek", artist: "Amai Wakusei", textHistory: "", unreadText: false,};

var logbook = {
	index: "pizza", 
	desc: "A full-bodied woman and student at the University, despite spending the minimum amount of time there that she can while balancing working a job at a pizzeria. She hates the job, but bills are bills.",
	body: "She's a stacked blond who nearly always keeps her hair loosely tied up, preferring light make-up around her eyes to bring out their color.",
	clothes: "She's usually wearing either her school outfit of a simple button-up (with no bra) and a skirt, or work uniform that does nothing to hide her figure.",
	home: "She spends most of her time either in the shopping district for work, or at her apartment fairly close to yours.",
	tags: "Gyaru",
	artist: "Amai Wakusei<br>Original Image Set: Otomari JK Seikatsu ~Pizza-ya Bait no Gal to Icha Love Ecchi~",
	author: "CryptoGreek",
};

var newItems = [
{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "pizza1", name: "There's a woman in some kind of work uniform standing there.", requirements: "?trust pizza 0; ?location shoppingDistrict; ?time Evening;", altName: "", altImage: "",},
	{index: "pizza2", name: "pizza is leaning against a railing nearby.", requirements: "?trust pizza 1; ?location shoppingDistrict; ?time Evening;", altName: "", altImage: "",},
	{index: "pizza3", name: "You hear a loud thud from outside.", requirements: "?trust pizza 2; ?location playerHouse; ?time Night;", altName: "???", altImage: "none.png",},
	{index: "pizza4", name: "You can check on how pizza is doing.", requirements: "?trust pizza 3; ?location apartmentOutside; ?time Morning;", altName: "", altImage: "",},
	{index: "pizza5", name: "You can drop by and visit pizza.", requirements: "?trust pizza 40; ?location apartmentOutside; ?time Morning;", altName: "", altImage: "pizzaAlt.jpg",},
	{index: "pizza6", name: "Sounds like pizza is home, and she did mention 'next time'...", requirements: "?trust pizza 60; ?location apartmentOutside; ?time Morning; !flag pizza pizza3Event; !flag pizza pizza4Event; !flag pizza pizza5Event;", altName: "", altImage: "pizzaAlt.jpg",},
	{index: "pizza6", name: "Going by the sound of quiet music, pizza must be home.", requirements: "?trust pizza 60; ?location apartmentOutside; ?time Morning; ?flag pizza pizza3Event; !flag pizza pizza4Event; !flag pizza pizza5Event;", altName: "", altImage: "pizzaAlt.jpg",},
	{index: "pizza6", name: "Going by the sound of quiet music, pizza must be home.", requirements: "?trust pizza 60; ?location apartmentOutside; ?time Morning; !flag pizza pizza3Event; ?flag pizza pizza4Event; !flag pizza pizza5Event;", altName: "", altImage: "pizzaAlt.jpg",},
	{index: "pizza6", name: "Going by the sound of quiet music, pizza must be home.", requirements: "?trust pizza 60; ?location apartmentOutside; ?time Morning; !flag pizza pizza3Event; !flag pizza pizza4Event; ?flag pizza pizza5Event;", altName: "", altImage: "pizzaAlt.jpg",},
	{index: "pizza6", name: "Sounds like pizza is home.", requirements: "?trust pizza 60; ?location apartmentOutside; ?time Morning; ?flag pizza pizza3Event; ?flag pizza pizza4Event; !flag pizza pizza5Event;", altName: "", altImage: "pizzaAlt.jpg",},
	{index: "pizza6", name: "Sounds like pizza is home.", requirements: "?trust pizza 60; ?location apartmentOutside; ?time Morning; !flag pizza pizza3Event; ?flag pizza pizza4Event; ?flag pizza pizza5Event;", altName: "", altImage: "pizzaAlt.jpg",},
	{index: "pizza6", name: "Sounds like pizza is home.", requirements: "?trust pizza 60; ?location apartmentOutside; ?time Morning; ?flag pizza pizza3Event; !flag pizza pizza4Event; ?flag pizza pizza5Event;", altName: "", altImage: "pizzaAlt.jpg",},
	{index: "pizza6", name: "Sounds like pizza is home.", requirements: "?trust pizza 60; ?location apartmentOutside; ?time Morning; ?flag pizza pizza3Event; ?flag pizza pizza4Event; ?flag pizza pizza5Event;", altName: "", altImage: "pizzaAlt.jpg",},
	{index: "pizza7", name: "pizza would probably be pretty excited to see you.", requirements: "?trust pizza 200; ?location apartmentOutside; ?time Morning;", altName: "", altImage: "pizzaAlt.jpg",},
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
		case "pizza1": {
			writeHTML(`
				t Stepping forward to look a bit closer, it looks like she must work for a local pizza spot going by the uniform. Considering the bike next to her, she's probably working delivery.
				im profileAlt.jpg
				t It also looks like she's not going anywhere. Maybe she's on a break?
				sp pizza; Well howdy, *Mister Wandering-Eyes. How's the view?
				t There's a playful tone to her voice as her focus shifts onto you.
				trans pizza1-1; Walk closer and talk with her
				trans cancel; Apologize for staring and leave her alone
			`);
			break;
		}
		case "pizza1-1" : {
			writeHTML(`
				player Does that say Pizza Life?
				sp pizza; Pizza Lili, actually - you're not the first to guess that though.
				t She idly toys with the scrunchie on her wrist, looking you up and down with an amused expression.
				sp pizza; Do you usually walk around staring at girls around this time of night, or should I be feeling special?
				player Hah, definitely more of the latter. I get that this town has a reputation for being full of beautiful folk, but it can still throw me off my game when I see someone with looks like yours.
				sp pizza; You're quick with a compliment, arent'cha? You're lucky I'm vain~
				t She preens a bit under the praise, smiling wide.
				player So, you on your break?
				t She smirks playfully, leaning against a railing beside her.
				sp pizza; Not <i>technically,</i> but I'm not due back from delivery for another five anyway, so I'm taking a little extra me-time to cool off.
				player Ahh, I get that. Tough night?
				t She scoffs, rolling her eyes a bit.
				sp pizza; Is there any other kind? The elevator was out at the last place I delivered to.
				t Her eyes lock onto yours, frustration clear in them.
				sp pizza; The order was for an apartment on the <i>seventh floor.</i>
				t You wince at that, shaking your head.
				player Shit, that's rough. Sorry to hear about that.
				sp pizza; Eh, on the upside I can count that as my squats for the night. Gotta look for the silver lining...
				t She exhales sharply between her teeth, before the smiling expression comes back in full force.
				sp pizza; Speaking of, time for me to look for that lining back at work, 'cause you caught me at the tail end of my five.
				t She pushes away from the railing, smiling at you as she folds her arms behind her back... and incidentally pushing out her chest a fair bit.
				sp pizza; I'm pizzaF, by the way.
				player I'm playerF. It's nice to meet you, pizzaF.
				sp pizza; Right back at'cha, playerF~ If you end up laying eyes on me on 'break' again, feel free to call out - I'm always up for a chat.
				player I'll keep that in mind. Good luck at work.
				t She lets out a half-scoffing, half-barking laugh.
				sp pizza; I'll take all the luck I can get, thanks. Stay safe out there, cutie.
				t At that, she kicks the stand off of her bike and hops on, the seat pressing firmly against what you can now clearly tell is a <b>very</b> nice ass. She looks at you over her shoulder just long enough to wink at you before speeding off.
				finish
			`);
			passTime();
			setTrust("pizza", 1);
			break;
		}
		case "pizza2" : {
			writeHTML(`
				player So, you actually on your break, or are you taking five?
				t pizzaF's eyes lock onto yours as you approach, a small, smug smile on her face.
				sp pizza; Actual break. I might not always get them on <i>time</i>, but at least I still get 'em.
				player I'm certainly not about to complain about the company, but do they not have a breakroom? I imagine sitting down would be a bit comfier.
				t pizzaF's face twists into a scowl for a moment as she shakes her head in response.
				sp pizza; No chance in Hell you're getting me to stay in there for a minute than I have'ta. Last time I tried, I had the folks on shift asking me questions every three minutes, and at that point it's not a <i>break</i>.
				t The scowl turns to a wince as she shudders slightly, clearly remembering something.
				sp pizza; God... The worst was this one lady that came in demanding ice cream. At a <i>pizza parlor.</i> Poor Charlie was getting shouted down about how she wasn't leaving 'till she got her ice cream, and I had to run and get the manager to deal with it.
				player That's...
				sp pizza; Confusing? Perplexing? Ridiculous, and flabbergasting?
				t She exhales sharply out of her nose, shaking her head a bit more gently this time.
				sp pizza; I've got more adjectives, but I'm tiring myself out just thinking about it.
				player Not to sound patronizing, but... It sounds like you've got a pretty shit job. Why stick around?
				sp pizza; They pay me a dollar above minimum wage, which is a dollar more than any other place that's called me back.
				t That's... uncomfortably familiar to your own experiences (outside of hypnosis), actually.
				t She lets out a low sigh, massaging her shoulders.
				sp pizza; God, every day those sugar-daddy memes get more and more appealing, y'know? Tits like mine, maybe I oughta go buy a crop-top and a choker - beats working my ass off around here at least...
				t There's a joking tone to her voice, but... Well, if you were looking for an 'in' regarding getting with her, it's hard to have a clearer one than this.
			`);
			if(data.player.gender == "man")
				writeFunction("writeEncounter('pizza2-1')", "Offer yourself as a sugar-daddy");
			else
				writeFunction("writeEncounter('pizza2-1')", "Offer yourself as a sugar-momma");
			writeHTML(`
				trans pizza2-2; Listen quietly while she gets her complaints off her chest
			`);
			passTime();
			setTrust('pizza',2);
			break;
		}
		case "pizza2-1" : {
			writeHTML(`
				player I mean, if you're serious about that sort of thing...
				t You let the sentence trail off, and given the way her eyes immediately lock on yours with a glint of interest, it's clear she picked up on it.
				t After a moment, though, she just lets out a laugh and shakes her head.
				sp pizza; God, I barely know ya and yet I'm tempted to say yes... How desperate's a girl gotta be, huh?
				t She slides her hand into her pocket, pulling out a pen and paper.
				sp pizza; I ain't saying yes... but I <i>am</i> saying I appreciate the offer. If that was a joke, then you're funny enough that you earned my number.
				t She quickly scrawls her digits onto the paper, before pulling it sharply from the pad and handing it to you.
				sp pizza; And if you're serious... Well, I actually just might consider it. <i>Especially</i> when the offer's coming from someone who's more than a little pleasant to look at~
				t There's a low buzz from her pocket as her smile turns strained again, and she rolls her shoulders.
				sp pizza; And once again, break's done less than a minute after we start talking... I'll need to find you on a day off or something. I wanna actually talk for <i>more</i> than a couple seconds before dipping.
				player I'll be looking forward to it.
				t She moves to straddle the bike again, kicking her leg high over the bike. From the grin on her face, it's clear she was purposefully showin off how high her leg could go...
				sp pizza; Toodles, cutie~
				player Good luck in there.
				t She just smiles and nods before taking off quickly, speeding down the lane.
				finish
			`);
			break;
		}
		case "pizza2-2" : {
			writeHTML(`
				sp pizza; Ugh... For real, I've honestly thought about going the digital-stripper path, y'know? Maybe dress up as a TV-show character or something, I dunno. Lot of folks finding success that way - why <i>not</i> me?
				t Her fingers drum on the railing as her face screws up in equal parts thought and distaste.
				sp pizza; ...Then again, 'grass is always greener' and all that. It probably ain't as easy as slapping on some pasties and posing for the phone, and I'm just over here being a salty bitch about it.
				t pizzaF sighs again, a slow and heavy one... before she looks back up at you with a weak smile.
				sp pizza; And I'm over here whining your ear off, ain't I?
				player I don't mind. Sounds like something you needed to get off your chest anyway.
				t She blinks once, before a wide smirk goes across her face as she looks down, stifling a chuckle.
				sp pizza; Yeah, 'off my chest'... Hah. Dunno if that was on purpose, but either way?
				t She reaches into her pocket, pulling out a pen and paper.
				sp pizza; You're not just cute, but you're funny too. And more than a good enough listener that you've earned my number.
				t She quickly scrawls her digits onto the paper, before pulling it sharply from the pad and handing it to you.
				sp pizza; I'll try not to bitch your ear off next time.
				t There's a low buzz from her pocket as her smile turns strained again, and she rolls her shoulders.
				sp pizza; Yeah, thought that'd go off soon... I'll need to find you on a day off or something. I wanna actually talk for <i>more</i> than a couple seconds before dipping.
				player I'll be looking forward to it.
				t She moves to straddle the bike again, kicking her leg high over the bike. From the grin on her face, it's clear she was purposefully showin off how high her leg could go...
				sp pizza; Toodles, cutie~
				player Good luck in there.
				t She just smiles and nods before taking off quickly, speeding down the lane.
				finish
			`);
			break;
		}
		case "pizza3" : {
			writeSpeech("pizza","none.png","HIDDEN<font size='-2'>Son of a motherless <i><b>cockthrongler...!</b></i></font>")
			writeHTML(`
				t Walking around to see the source of the thud and the hushed cussing, you step down the stairs. Clearly she could hear you coming, as the cussing stops and by the time you turn around, she has a pleasant (and forced) smile on her face.
				im pizzaHome.jpg
				sp pizza; Sorry about that, I just got off my bike and smacked my- playerF?
				t The customer-service expression swaps out for shock as she looks at you, then up the stairs you came down from.
				sp pizza; Were you, uh... Y'know, <i>visting</i> someone? If so, my bad - didn't mean to interrupt-
				player No, nothing like that - I live here. And does the pizza place actually deliver <i>this</i> late in the night?
				sp pizza; No, I just...
				t She pauses, lifting her bike a bit.
				sp pizza; I kinda... live here too. Ground floor, so no draggin' this thing up stairs or anything like that.
				player I see.
				t There's a moment of awkward silence as pizzaF shifts in place, before wincing slightly and touching her forehead.
				player ...Are you okay?
				sp pizza; Yeah, just... tough night. Stumbled on the dismount, and kinda tumbled down and hit my forehead.
				player I have a first-aid kit if you need me to look at it-
				sp pizza; I'm fine, thanks.
				t She flinches at her own curt tone, forcing it to soften a bit as she continues,
				sp pizza; I appreciate that, but it's not bleeding, and honestly... I need to lay down. Work was worse than usual, I didn't get my last break, and now my head... Thanks, really, but I <b><i>need</i></b> to just lay down and not move for eight to ten hours right now.
				t You nod understandingly.
				player You've got it. I hope you don't mind if I check on you in the morning to make sure you're alright, and good night.
				t She sends a weak smile your way, nodding silently before pulling her bike towards her door. She waves at you once before stepping in and shutting it.
				finish
			`);
			passTime();
			setTrust('pizza',3);
			break;
		}
		case "pizza4" : {
			writeHTML(`
				define p; = sp pizza;
				t You knock firmly on pizzaF's door, waiting a few seconds after... and hearing the shifting of footsteps a moment later.
				t Sure enough, the door opens as pizzaF greets you with a smile - this one considerably more genuine than the last one after she hit her head.
				p; Howdy neighbor!
				player Howdy to you too. I wanted to make sure you were doing alright? You sounded pretty rough last time.
				t She winces gently at that, gesturing with her head for you to come in.
				p; Yeaaah... Sorry about that, it was <i>not</i> a good night.
				player I don't think that's something you need to apologize for.
				t You step in behind her, your eyes moving across the room for a moment before settling on her.
				im profile.jpg
				define p; = sp pizza; im pizzaAlt.jpg;
				p; Don't mind the outfit - it's my studying digs. Wearing them help with getting into the right vibe and headspace, y'know?
				player I don't mind it at all. Though it makes me wonder, do you go to the University? I don't recall seeing you there, which is a bit surprising since I <i>do</i> work as a counselor there.
				p; Er...
				t She has a bit of a sheepish look on her face as she sits back on her bed.
				p; That's, uh... So it's not like I'm <i>really</i> skipping.
				t Ah yes, a wonderful way to phrase that.
				p; Truth is, I kinda just... drop by at the start of the week, pick up the homework, and do it when I have the chance. <i>Usually</i> either before bed or, as you can see, a bit after getting up. Gives me extra time to pick up shifts.
				player Trying to balance that sounds a bit... stressful.
				p; Yup. The principal's tried to chew me out for it more than once, but I usually get away with it since it's a university, not a <i>high-school.</i> Attendance ain't mandatory and all.
				t She flops back onto the bed. If her knees weren't pressed together, she'd be flashing you pretty clearly in that skirt...
				t But ignoring that, you move to sit down next to her, thinking over your words carefully.
				player I can try and help you manage that stress, if you'd like. I'm not a counselor just for my striking good looks, after all.
				p; With a face like that, if you told me you were? I'd believe ya in a heartbeat~
				t She smirks up at you at that, stretching out her back on the bed a bit... and straining the fabric of her shirt in the process.
				player Do you believe in hypnosis, pizzaF?
				t pizzaF shrugs, sitting up a bit to meet your gaze.
				p; Honestly? I've taken exactly enough psych courses to know that I know <i>nothing</i> about psych. For all I know, I could be a brain in a tube hypnotizing myself into imagining the world around me.
				t ...Not the most normal response, but not the weirdest either.
				player Having an open mind is good. It'll make things a fair bit easier to do.
				t You take off your pendant from around your neck, wrapping it loosely around your hand as she looks between it and you.
				p; Alright, let's do it.
				t You don't need any more prompting than that to let the pendant start to swing, her eyes following it closely...
				...
				t Putting her under trance is simple and straightforward - having a completely willing subject often helps with that.
				player There we go... How are you feeling, pizzaF?
				t She lets out a low hum, blinking slowly.
				p; I feel... peaceful. Relaxed.
				player Wonderful. Now, why don't we try something simple? We'll just focus on your inhibitions - the ones that you use to hold yourself back. They're stressful to maintain, and so tiring... Wouldn't it be nice to be without them for a short while?
				t pizzaF slowly nods at that.
				player Then go ahead and discard them, just for now. You'll have them back when you awake, but for now-
				t Your words are interrupted as pizzaF leans forward suddenly, pressing her lips hungrily against yours as her hands move to your sides.
				player <i>Alright, so apparently she was holding back around me more than I thought...</i>
				t She pulls away after a moment, a brief gasp coming from her as she presses her chest against yours.
				p; Holy <i>fuck</i> I've wanted to kiss those lips since you walked up to me~...!
				t One of her hands moves up to your face as she smiles, the soft haze of the hypnosis just barely in her eyes as she acts freely.
				p; I saw where you were looking earlier, and when I was on my bike, lover~ And I can <i>not</i> be the only one finding it a bit too warm in here for all these layers.
				player Oh I agree entirely...
			`);
			writeFunction("writeEvent('pizza1Event')", "Strip each other and fuck");
			passTime();
			setTrust('pizza',40);
			break;
		}
		case "pizza5" : {
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				t You knock on pizzaF's door and wait a moment - it doesn't take long to hear the click of the lock before she opens it, peering out almost sheepishly...
				p; Howdy, neighbor(?).
				t There's a halting lilt to her tone as she opens it wide enough to let you in.
				player Is everything alright?
				p; Oh yeah, totally fine. Definitely not embarrassed at jumping your bones with all the self-control of a rabid wolverine, no siree.
				t Admitting that seems to help her relax just a bit as she steps past you and sits on the bed.
				p; That, uh... That hypnosis thing. It really works, don't it?
				player Its effectiveness varies depending on the person... but I'd say that it definitely worked last time, yes.
				t There's a blush on her face as she sharply exhales, her bangs shifting slightly from the breath.
				p; Well, just to get things outta the way, I definitely enjoyed it. I actually was wonderin' if you wanted to...
				t She seems struggle to find the right words, before her blush deepens as she rolls her eyes.
				p; Fuck it, tact ain't my thing. I want a casual relationship 'tween us, 'cause I had a great time and going by how much washin' those sheets needed, you did too.
				t You can't help but notice that same drawl to her tone from before, only much thicker this time.
				player Do you have an accent?
				t A friends-with-benefits relationship sounds perfect.
				t She blinks once, and a moment later it clicks that... Yup, you said the part you were thinking out loud instead of what you <b>meant</b> to say.
				p; Not when I'm paying attention, I don't.
				t pizzaF crosses her arms while locking eyes with you, still a little embarrassed but a bit distracted.
				player Sorry, I meant to say that yes, I'd be interested in a friends-with-benefits sort of deal. And... I actually think the accent is cute.
				p; Well, don't get too used to hearing it.
				t Her flippant tone does little to hide the fact that she starts fiddling with her hair at the compliment, a trace of a smile on her face.
				t With that, she hops to her feet and grins, stepping in close to you. Her chest squishes against yours, the fabric of your and her shirt doing little to hide the obvious fact that she was going braless.
				p; Of course, now that we've got those details dealt with... How about we start on those benefi-
				t <i><b>RINGRINGRING. RINGRINGRING.</b></i>
				t Her expression immediately crashes as she steps back.
				p; God damn it... Sorry, one sec.
				t Whipping out her phone, she turns away and flips it open.
				p; I'm not scheduled for today, what's up?<br>...Well of course she called in sick - she warned you that she couldn't work today, even if you scheduled her for-
				t Her face twists into a grimace. She pauses, taking the phone away from her ear for a moment, before looking at you. You can hear the person on the other end still talking as pizzaF seems to think things over.
				p; ...Look, I can't cover for her today. I hit my head getting off my bike last night, and the migraine is hellish. If I try to work like this, I won't last five minutes before I snap at a customer, and neither of us wants to deal with the fallout of that.
				t She snaps the phone shut, rubbing the bridge of her nose for a moment.
				t Tossing the phone over her shoulder onto on of her pillows, she falls backwards into the bed with a pomf and a grunt.
				player ...So, a flip phone huh? Haven't seen one of those in a while.
				t pizzaF exhales sharply out of her nose, smiling a bit.
				p; The thing's a relic, but I got it <i>damn</i> cheap, so I'm planning on using it 'till it breaks.
				t She rolls over a bit, looking over her nails for a second before looking up at you.
				p; Now, getting back to what I was <i>saying...</i> My boss might've killed mood for a good fucking, but if you're feeling up for it, I don't mind getting a bit <i>hands-on</i> with ya, if you catch my meaning~
			`);
			writeFunction("writeEncounter('pizza2Event')", "Strip down");
			setTrust('pizza',60);
			break;
		}
		case "pizza6" : {
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				t A quick knocking at the door rewards you with pizzaF's bright expression as she opens the door for you.
				p; Howdy again, neighbor! Come on in, you're just in time for my irregularly-scheduled break~
				t You step in and latch the door behind you, her wide smile and chipper attitude almost infectiously bubbly.
				t She hops down onto the bed, her ass bouncing down on it as she grins up at you with her legs just <b>barely</b> spread enough for you to look up her skirt.
				p; So, what're you feeling up to today, sexy?
				trans pizza2-1Event; How about another handjob?
				trans pizza3Event; !flag pizza pizza3Event; Let's see you use those tits
				trans pizza3-1Event; ?flag pizza pizza3Event; Another titfuck
				trans pizza4Event; !flag pizza pizza4Event; I want to see your lips around my cock
				trans pizza4-1Event; ?flag pizza pizza4Event; Blow me again
				trans pizza5Event; !flag pizza pizza5Event; How about we both use our mouths this time?
				trans pizza6Event; ?flag pizza pizza3Event; ?flag pizza pizza4Event; ?flag pizza pizza5Event; Let's fuck
				finish
			`);
			/*writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				t A quick knocking at the door rewards you with pizzaF's bright expression as she opens the door for you.
				p; Howdy again, neighbor! Come on in, you're just in time for my irregularly-scheduled break~
				t You step in and latch the door behind you, her wide smile and chipper attitude almost infectiously bubbly.
				t She hops down onto the bed, her ass bouncing down on it as she grins up at you with her legs just <b>barely</b> spread enough for you to look up her skirt.
				p; So, what're you feeling up to today, sexy?
				trans pizza2-1Event; How about another handjob?
				trans pizza3Event; !flag pizza pizza3Event; Let's see you use those tits
				trans pizza3-1Event; ?flag pizza pizza3Event; Another titfuck
				trans pizza4Event; !flag pizza pizza4Event; I want to see your lips around my cock
				trans pizza4-1Event; ?flag pizza pizza4Event; Blow me again
				trans pizza5Event; !flag pizza pizza5Event; How about we both use our mouths this time?
				trans pizza5-1Event; ?flag pizza pizza5Event; Let's 69 again
				trans pizza6Event; ?flag pizza pizza3Event; ?flag pizza pizza4Event; ?flag pizza pizza5Event; Let's fuck
				finish
			`);*/
			break;
		}
		case "pizza7" : {
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				t You barely knock on the door before you can hear pizzaF quickly get the door, opening it up quickly. She's like an excitable puppy whenever she sees you at this point.
				p; Howdy howdy, playerF~! What's up? Did you wanna have some fun together~?
				trans pizza2-1Event; Jerk me off
				trans pizza3-1Event; Another titfuck
				trans pizza4-1Event; Blow me
			`);
			/*
				trans pizza5-1Event; Let's 69
				trans pizza6-1Event; Let's fuck again
				trans pizza7Event; !flag pizza pizza7Event; Let's have some fun with your uniform
				trans pizza7-1Event; ?flag pizza pizza7Event; Let's grind on your uniform again
			*/
			writeFunction("writeEncounter('pizzaConclusion')", "Ask if she's interested in moving in together", "blue");
			writeHTML(`finish`);
			break;
		}
		case "pizza7-1" : {
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				p; So, was there anything you wanted to do~?
				trans pizza2-1Event; Jerk me off
				trans pizza3-1Event; Another titfuck
				trans pizza4-1Event; Blow me
			`);
			/*
				trans pizza5-1Event; Let's 69
				trans pizza6-1Event; Let's fuck again
				trans pizza7Event; !flag pizza pizza7Event; Let's have some fun with your uniform
				trans pizza7-1Event; ?flag pizza pizza7Event; Let's grind on your uniform again
			*/
			writeFunction("writeEncounter('pizzaConclusion')", "Ask if she's interested in moving in together", "blue");
			writeHTML(`finish`);
			break;
		}
		case "pizzaConclusion" : {
			if(checkFlag('pizza',"EndingRepeat")){
				writeHTML(`
					define p; = sp pizza; im pizzaAlt.jpg;
					player I was thinking about us moving in together.
					p; Oh yeah? Should I get started on the paperwork?
					trans pizzaConclusionAccept; Yes
					trans pizza7-1; Never mind
				`)
			}
			else
			{
				writeHTML(`
					define p; = sp pizza; im pizzaAlt.jpg;
					player What are your thoughts on moving in together?
					t She quirks an eyebrow up, taking on a more serious expression.
					p; That's... a bit of a big move. You serious?
					player Yup.
					t pizzaF looks you in the eyes for a moment, before bringing her hand to her chin in thought.
					p; ...Honestly, it'd be pretty good for me. Like, sharing a place would save me <i>loads</i> of money, so there's that. But like...
					t She leans against the wall, meeting your eyes again.
					p; That feels more like I'm trying to justify it to myself. But my gut response?
					t She pauses... probably for dramatic effect.
					p; I want to pin you to a wall, press my lips to yours, and say yes while ranting about all the lewd fun we'll have.
					player That... sounds like a yes.
					p; Oh yeah, definitely. Like, I'd have to hop through some hoops regarding my lease, but like... If you're serious, I can get on that pretty quick. Of course, I'd 'prolly end up eating up way more of your time, being the voracious and sexy beast I am.
					player Oh no. How horrible. Whatever will I do.
					t She giggles at your tone, before smiling up at you.
					p; Do you want me to get on the paperwork soon, or like, hold off for a bit?
					trans pizzaConclusionAccept; Sooner
					trans pizzaConclusionReject; Hold off
				`);
			}
			break;
		}
		case "pizzaConclusionAccept" : {
			if(!checkFlag('pizza','complete'))
				addFlag('pizza', 'complete');
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				player No time like the present, right? Let's go for it.
				t pizzaF's bubbly smile widens at that, and she leans in and presses her body to yours. Her voice is a throaty purr as she says,
				p; Then I'll get right on that... as soon as we do a bit of 'celebrating' over the decision~
				t One hand moves up to the buttons of her shirt while the other starts pulling you to another room.
				t As she pushes the door to the bathroom open, you quirk up an eyebrow quizzically.
				p; This way, we don't have to worry about any clean-up, and just focus on fucking~ No need to bounce on squishy sheets on... what, hour <i>two</i> of our sex~?
				t You chuckle, stepping forward.
				player Sounds good to me.
				trans pizzaConclusionEnd; Strip down and step into the room
			`);
			break;
		}
		case "pizzaConclusionEnd" : {
			writeEvent("pizzaConclusion");
			writeHTML(`trans ending; Time passes...`)
			break;
		}
		case "ending" : {
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				...
				p; On your six, lover.
				t You scoot to the side a bit, pizzaF casually placing a hand on the back of the couch before hopping over it with a large bowl in her other hand.
				t The couch bounces a bit as she lands, somehow not spilling a single kernel before she places it on the small table sitting between you and the TV.
				p; Did I miss anything?
				player Not unless you're interested in the commercial break.
				p; Only when they're hilariously terrible.
				t It's been a couple months since you started sharing a place, and it's definitely been pretty chill overall. She wasn't kidding about being sexually voracious, though...
				t She grabs some popcorn as she tilts her body over, lightly plopping her head onto your lap.
				p; ...Think I could get you to nut before the ads are over?
				player You're good pizzaF, but not 'pop in thirty seconds' good.
				t There's a playful glint in her eyes as she looks up at you.
				p; Wanna bet~?
				player Y'know, if you want me to flip you over and fuck your brains out, you <i>can</i> try just asking for it.
				t She rolls her eyes with a giggle, popping a piece of popcorn in her mouth.
				p; It's more fun when it's a bet I lose~! Or when it's as a... <i>punishment~</i>
				t You reach over and firmly slap her ass at that, and she yelps...
				p; <i><b>Ahhn~!</b></i>
				t ...rather seductively.
				player I'm beginning to wonder if you suggested movie night just to be a brat.
				p; Whaaaaat~?
				t She rolls over a bit, half-lidded eyes looking right up into yours from your lap.
				p; Are you suggesting that I, the perfectly pure and chaste young lady that I am, might <i>possibly</i> have suggested this just so I could sass you, resulting in you bending me over the couch like your personal-use <i>whore?</i>
				t She bats her eyelashes innocently at you a few times.
				player ...You know, you're in the <i>perfect</i> position for me to grab your ponytail and- Did you just unzip my fly with your teeth?
				p; ...No?
				t You can't help but smile as she replies with your zipper still in your mouth.
				player Just get in my lap, you little slut.
				t She lets out a disappointed huff as she sits up and hops up... which quickly gets replaced by an excited mewl when she feels where you hands go.
				player Sit quietly through the film like a good girl, and I'll make sure to reward you.
				t She moans softly as you drag your finger along her panties for a moment, and she relaxes backwards into your body.
				p; Okaaaaay~
				t Right on cue, the ad break ends.
				p; ...For real though, it's actually a really good flick, especially the part where-
				t You smile as you press your lips against her neck.
				player Spoilers.
				p; Oh right. But seriously, you'll love it.
				t You chuckle.
				player I'm sure I will.
			`);
			writeFunction("loadEncounter('system','credits')", "The End");
			break;
		}
		case "pizzaConclusionReject" : {
			if(!checkFlag('pizza',"EndingRepeat"))
				addFlag('pizza',"EndingRepeat");
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				t You think it over for a moment.
				player Let's hold off for now, at least. Better to wrap other things up before then.
				p; Alright, sounds good to me. Just give me a heads-up when you want me to get started.
				trans pizza7-1; Return
			`);
			break;
		}
		case "pizza2Event" : {
			passTime();
			if(!checkFlag('pizza',name))
				addFlag('pizza',name);
			writeEvent(name);
			writeHTML(`
				...
				t After a minute or so to cool down, pizzaF stretches out her back a bit (which only further emphasizes her tits) as she looks you over with a satisfied smile.
				p; Well, looks like I'll have to toss this outfit in the wash... but honestly, that was <i>definitely</i> worth a loud of laundry~
				t Her eyes drift over to the clock for a moment, then the open textbook on her desk... and she lets out a small sigh, then a shrug.
				p; Well, better get back to it sooner rather than later, huh?
				player Good luck with that. If you need any help, I <i>am</i> a counselor and only a flight of stairs away.
				t She smiles gratefully to you.
				p; Thanks. In the meantime, you've probably got more to do, so I'll see you out real quick.
				t As you check your shirt and get ready to leave, she leans in to give you a peck on the cheek as you head out.
				t Though as you step out, you look behind yourself as she's shutting the door and you can see her squeeze one of her breasts for a moment and mouth, "Next time~"
				t The door clicks shut, and you chuckle a bit.
				t Tease.
				finish
			`);
			break;
		}
		case "pizza2-1Event" : {
			passTime();
			writeEvent(name);
			writeHTML(`finish`);
			break;
		}
		case "pizza3Event" : {
			passTime();
			if(!checkFlag('pizza',name))
				addFlag('pizza',name);
			writeEvent(name);
			writeHTML(`finish`);
			break;
		}
		case "pizza3-1Event" : {
			passTime();
			writeEvent(name);
			writeHTML(`finish`);
			break;
		}
		case "pizza4Event" : {
			passTime();
			if(!checkFlag('pizza',name))
				addFlag('pizza',name);
			writeEvent(name);
			writeHTML(`finish`);
			break;
		}
		case "pizza4-1Event" : {
			passTime();
			writeEvent(name);
			writeHTML(`finish`);
			break;
		}
		case "pizza5Event" : {
			passTime();
			if(!checkFlag('pizza',name))
				addFlag('pizza',name);
			writeEvent(name);
			writeHTML(`
				...
				t You both slowly get up, your energy recovered a bit from laying there.
				p; Whew... You might just be better with that tongue of yours than I am~
				t You playfully pinch her earlobe between your fingers, toying with it gently as she immediately seems to melt into your touch.
				player Might, hm? I guess next time, I'll just have to prove it beyond doubt.
				p; H-Hahn, <i>yes please~</i>
				t Releasing her earlobe, she quickly goes back to her bright and chipper expression. Standing up on her tiptoes, with her tits pressed quite tightly to your chest, she gives you a peck on the cheek... and then another in the crook of your neck before pulling away.
				p; Come back soon, y'hear~?
				player As if I could stay away when <i>you're</i> here to welcome me.
				p; Psh, that was cheesy~
				t Despite rolling her eyes and saying that, the bright blush and way she toys with her hair for a moment betrays her true feelings.
				player See you soon, pizzaF.
				p; You'd better~
				finish
			`);
			break;
		}
		case "pizza5-1Event" : {
			passTime();
			writeEvent(name);
			writeHTML(`finish`);
			break;
		}
		case "pizza6Event" : {
			passTime();
			removeFlag('pizza','pizza3Event')
			removeFlag('pizza','pizza4Event')
			removeFlag('pizza','pizza5Event')
			setTrust('pizza',200);
			writeEvent(name);
			writeHTML(`
				...
				t A few minutes later, you both slowly extract yourself from the bed - pizzaF wipes the cum from between her legs while you take a quick shower, cleaning the sweat and jizz from your body.
				t Once you finish up, she's standing by the bathroom door to wash up herself, but she loops her finger near your tie first and gently pulls you towards her, standing on her toes again.
				t This time, her lips press against yours rather than just your cheek, and her tongue plays against yours for just a moment before she pulls back.
				p; Come by again any time, lover. I'll be looking forward to it~
				t She saunters past you into the bathroom, her hips swaying with each step before the door shuts behind her.
				t And now, it's probably about time for you to head out...
				finish
			`);
			break;
		}
		case "pizza6-1Event" : {
			passTime();
			writeEvent(name);
			writeHTML(`finish`);
			break;
		}
		case "pizza7Event" : {
			passTime();
			if(!checkFlag('pizza',name))
				addFlag('pizza',name);
			writeEvent(name);
			writeHTML(`finish`);
			break;
		}
		case "pizza7-1Event" : {
			passTime();
			writeEvent(name);
			writeHTML(`finish`);
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
{index: "pizza1Event", name: "An Uninhibited Day In Bed"},
{index: "pizza2Event", name: "Hands-On Experience"},
{index: "pizza3Event", name: "Pleasant Paizuri"},
{index: "pizza4Event", name: "Her Lips, Your Cock"},
{index: "pizza5Event", name: "Putting Your Mouths to Work"},
{index: "pizza6Event", name: "Ride 'Em Cowgirl"},
{index: "pizza7Event", name: "A Girl In Uniform"},
{index: "pizza2-1Event", name: "Hands-On Experience - Repeat Variant"},
{index: "pizza3-1Event", name: "Pleasant Paizuri - Repeat Variant"},
{index: "pizza4-1Event", name: "Her Lips, Your Cock - Repeat Variant"},
{index: "pizza5-1Event", name: "Putting Your Mouths to Work - Repeat Variant"},
{index: "pizza6-1Event", name: "Ride 'Em Cowgirl - Repeat Variant"},
{index: "pizza7-1Event", name: "A Girl In Uniform - Repeat Variant"},
{index: "pizzaConclusion", name: "Sugar Finale"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "pizza1Event": {
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				t pizzaF undoes the buttons on her shirt with almost frantic speed, her breathing heavy as she tries pulling it off while your hands pull her panties down. They're left hanging from her thigh as pizzaF practically rips her bra off and drops it beside her, while your clothes are just as quick to follow.
				t You'd normally be focusing on the foreplay right now, but from the hungry look in her eyes and the way she's spreading her legs for you, you can't imagine she wants to be kept waiting.
				p; God, you're so fucking ho-<i><b>AAHN~!</b></i>
				im 1-1.jpg
				t Her breathing shakes as you thrust into her, her words spilling out in the form of moans and soft squeals of pleasure.
				t Your hands tighten around her thighs as you press them down and back, the plush feeling of your fingers sinking into them adding to the pleasure of fucking her.
				t Each thrust causes her to moan louder, your cock pressing deep into her pussy and spreading her wide. Her wet, tight hole feels like it's trying to wring the cum out of you already as she shudders underneath you.
				p; F-Fuck yes, pleeeaaaase fuck me <b>more~!</b>
				t Her hands move to her chest, squeezing her tits and playing with her nipples as she squirms even more, her legs pressing against your hands as she seems to barely resist wrapping them around your back.
				t You can even feel her bucking her hips against you as best she can from her position, squeezing tight around your shaft each time she does.
				player Fucking Hell, your cunt feels incredible...!
				t You can see and even <b>feel</b> the visceral pleasure she experiences from the praise, her back arching for a brief second as her pussy squeezes down like a vise around your cock, almost enough to make you slow down your thrusts.
				t Almost.
				p; Fuckfuckfuckfuckfuckfuck<i><b>fuck~!</b></i>
				t Her hands move above her head again, running through her hair as she continues squirming beneath you, barely able to focus on anything more than squeezing around you with every movement, tightening as much as she can each time you try and draw out.
				im 1-2.jpg
				t Her tits are bouncing around with each thrust now, and it's clear that neither one of you intend on trying to hold out. The way she looks at you through half-lidded eyes is nearly as much of a turn-on as her body, her hands grasping wildly at the pillow behind her head.
				p; Please, pleease fuck me <i><b>uuuup~</b></i>
				t There's almost a drawl to her voice now as she starts edging, desperation in her eyes.
				p; Fuck me and fill me and <i>pin me down and <b>pump my cunt so full of your cum that I <font size='+2'>can't even move anymore~!</font></b></i>
				t Her begging is what pushes you over the edge as well, and you slam your hips against hers with reckless abandon as you start to cum.
				im 1-3.jpg
				t For the first dozen or so shots, you keep thrusting into her as her eyes squeeze shut and her entire body shakes in orgasmic bliss. After that, you just hold yourself fairly steady, cock still halfway in as you catch your breath from the primal fuckfest.
				t Slowly, you pull out your cock (eliciting another soft moan from pizzaF) and watch as it pops out, bobbing gently as the last of your cum shoots out across her thighs, and more than a bit of jizz starts to spill out of her onto her sheets.
				im 1-4.jpg
				p; T-That was...
				t She lets her head collapse back, breathily trying to find the words.
				p; That was... fucking...
				t A low laugh spills out of her, followed by another full-body-quiver that causes a bit more cum to spill out from her.
				p; That was... fucking <i><b>amazing,</b></i> like... Holy <i>crap...</i>
				t You can't help but let out a laugh as well, moving to lay beside her.
				player What can I say? I aim to please.
				p; And you pleased aiming... Pleased what you... You fuckin'...
				t She loses her train of thought and giggles a bit, rolling over just enough to rest her breasts against your chest.
				p; Heheh, you fucked me <i>stupid~</i>
				t She blissfully keeps giggling for a while at that, enjoying the sensation of nuzzling against you for what was at least a few minutes.
			`);
			if(data.player.location != "gallery")
			{
				writeHTML(`
					...
					t You two eventually collect yourselves (particularly pizzaF) and clean up, getting yourselves clothed again... Mostly. pizzaF seems more than satisfied to skip the bra and leave her shirt completely open as the both of you drink some water.
					t Of course, her half-dopey state of relaxed hypnosis isn't exactly the <b>best</b> for conversation, so not much is said. Even when you wake her from her trance, she seems entirely content to just lay back down on top of the towel tossed onto her bed.
					p; Talk t'ya later, ya fuckinnnn'... sexy bitch~
					t You smile back at her as she relaxes completely in the bed, reveling in the feeling as you get ready for the rest of your day.
					finish
 				`);
			}
			break;
		}
		case "pizza2Event" : {
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				t pizzaF sits up straighter on the bed, crossing her legs with a wry smile.
				im 2-1.jpg
				t Her fingers fiddle with the buttons on her shirt, leaning forward as she starts popping them one by one. You can see the shirt straining for a moment as she arches her back, befire she pops the last button open.
				t A dark-pink bra supports her sizable chest, her hands running along the fabric as she gives you a saucy wink.
				p; If you like the view, then how about you give me a good look too~?
				player I'd be happy to.
				t Your hands move to swiftly strip down, her eyes trailing across your body as her fingers slowly start to tease the bra upwards. The moment she sees your cock bounce out unrestrained, she pulls her bra up all the way, exposing her tits.
				im 2-2.jpg
				t pizzaF brings her hands up to her chest, grabbing them firmly and lifting them just a bit - you can see her fingers sink into the soft, plush flesh as she lifts them... just to drop them down, making them bounce deliciously.
				t Your cock twitches at the show, and she smiles wider at the response.
				t Her hand reaches forward to carefully grasp your cock, her thumb trailing up the underside of it as she watches it with a very curious look, watching every twitch as her traces her fingers along it.
				t As pizzaF's hands move around, beads of your precum smear across the surface of your shaft as her fingers start to get slick. 
				im 2-3.jpg
				p; It's really warm...
				t She mutters quietly to herself for a moment, her eyes entirely focused on your cock now. Her soft fingers feel incredible along your sensitive cock, and each time she slides her hand back up, she rotates her wrist just enough to stimulate the underside of your head.
				t Her breathing is getting heavier as she picks up speed, jerking you off with a pleasantly firm grip as her other hand moves to her own chest. From the way she gently bites her lip, her face flushed a deep red, it's no secret how turned on she is while staring at the cock that fucked her before.
				player Fuck...
				t The single word is enough to make her jump slightly, her eyes moving up to meet yours again as she smiles at you.
				p; How's it feel~?
				t You sharply exhale from your nose, returning the smile.
				player Just keep that up, it feels great...
				t She perks up a bit more, excited by that as she stares at your cock again. Her dainty hand bounces up and down again, her grip shifting between firmer and softer as she watches both your expressions and the twitching of your cock, looking for the signs of what you're enjoying most.
				t It's not long before your own breathing is heavy, and she's figured out a blissfully pleasant grip and speed as she strokes you off even faster.
 				im 2-4.jpg
 				t The focused, aroused expression on her face, her mind entirely focused on pleasuring your shaft, is a massive turn-on in its own right...
 				t She unconsciously pushes her chest forward as she jerks you off, your shaft getting closer to her tits and her panting breaths stimulating your glans.
 				t Your low grunts of pleasure pick up sharply as she shifts a bit, and you get a momentary glance of just how soaked her panties are.
 				t Between the view, the stroking, and the hungry way you can see her licking her lips, you can't hold back any longer.
 				player Shit, I'm cumming...!
 				p; H-Huh?
				im 2-5.jpg
				p; Wah!
				t She recoiled back a bit as you came, caught off-guard but not stopping her stroking as ropes of cum shoot into the air between the two of you.
				t Your hips buck gently against her hand as the spurts of cum slowly trail off, leaving her chest and face lightly spattered with your seed.
				t The stroking slows down a bit as she looks down at her chest, before the surprise turns to a pleased, satisfied expression as she meets your eyes once more.
				p; Mm~
				t There's a teasing look in her eyes as she uses her fingers to pick up some of your cum from her tits, before she takes it too her mouth.
				im 2-6.jpg
				t She winks at you.
				p; That's one way to show how much ya like it~
			`);
			break;
		}
		case "pizza3Event" : { //Titfuck scene
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				player How about we have some fun with those beautiful tits of yours, pizzaF?
				t She smiles wide and nods firmly.
				p; Sounds perfect to me, lover~
				t pizzaF kneels down between your legs with a grin, slowly and seductively undoing each button on her shirt.
				t After each button slides through, she lets the shirt slowly fall from her shoulders bit-by-bit until her chest is barely covered, her nipples nearly visible as she leans forward.
				t Then, bringing her arms across her chest, her palms slide up from the bottom of her tits and swoop gently upwards, pulling the shirt aside completely as you get a clear view of her incredible tits.
				t She shifts them around in her hands, bringing one of them up and...
				im 3-1.jpg
				t Her tongue laps at her own nipple for a moment before she hefts both tits up and leans forward. Sticking out her tongue, she teases you a bit by rolling it around in her mouth lewdly.
				p; Ahhh~
				t Her spit dribbles down into her cleavage in the place of lube as she shifts both tits in her hands, before she finally moves forward enough to engulf your cock between them.
				im 3-2.jpg
				t The plush sensation of her warm breasts wrapping around your shaft, slick with her spit as your cockhead pokes out from her cleavage, is enough to pull a moan from your throat.
				t The pleasure only spikes when she presses her breasts together harder, the tightness around your cock increasing as she starts sliding each one up and down.
				p; Mm, looks like you're having fun, aren'tcha?
				t You exhale sharply, smirking back at her.
				player Something tells me I'm not the only one. You look pretty excited too, pizzaF.
				t She laughs lightly, nodding a bit... and kneading her hands against her tits more, stroking your cock between them.
				p; That obvious, huh~?
				im 3-3.jpg
				t pizzaF has a playful expression as she leans her head forward, gently kissing your tip once and smearing your pre on her lips like lipgloss.
				p; Hearing you moan, seeing the way your eyes trace along my body, feeling just how <i>hard</i> your cock is getting between my tits...
				t She kisses your tip again, this time lingering as her tongue just barely slides along your slit before she raises her head back up.
				t You can feel the short exhale from her nose against your shaft as her expression becomes more lustful, before she laps at your cock head for a moment and says,
				p; All of it, all of <i>you,</i> is just such a <i><b>huge fucking turn-on~</b></i>
				im 3-4.jpg
				t Her lips settle on the tip of your cock as she teases it with her mouth and tongue, her tits still sliding along your shaft as she slides her entire body forward and back as she does.
				t The firm, squeezing pressure is almost like a lubed-up cocksleeve, your hips starting to buck and try to fuck her cleavage as her movements seem to squeeze every drop of pre from your dick.
				t She slowly starts bobbing her head down a bit, but just barely enough to take most of your head into her mouth each time... but with the way she uses her breasts to make a perfect fuckable sleeve for your shaft, it's almost overwhelming.
				player Shit, you're good at this...!
				t She lets out a pleased hum, inadvertently sending pleasant vibrations along your shaft, as she smiles up at you. She doesn't reply with words, but driven by the praise, she quickly redoubles her efforts to drain you.
				im 3-5.jpg
				t Going by the controlled but quick rate that she slides her tits around your shaft, she's found a good pace as she bobs her mouth up and down in time. You roll your hips up each time as well, her tongue lapping at the underside of your cock each time you do.
				t You can feel the way her soft lips wrap about the bottom of the glans each time, just before she pulls her head up and away again and your cock throbs in anticipation of the next moment you're fucking her lips. Meanwhile, her chest is no less pleasing and tight around your cock, the drool spilling out from around your shaft only making the titfuck even wetter and sloppier.
				t That single-minded, hyperfocused desire to please you, alongside the stimulation from and view of her incredible breasts, all gets you closer and close to the edge with each passing second.
				player Fuck, I'm...!
				t Hearing that, she immediately picks up even more speed while moulding her tits around your cock, her mouth taking your full tip in and gently suckling as you're about to burst. Then, the moment you're about to finish...
				im 3-6.jpg
				p; Haahn~!
				t A lewd, guttural moan spills from pizzaF's throat as your cum shoots across her face, the gentle shuddering from her body as rope after rope spatters across her skin reflecting just how turned on getting a facial is for her.
				t She lets out several gasping pants, the heavy breaths against your slowly-softening cock almost enough to get you up again... but then pizzaF slowly stretches out her neck, looking up at you with her cum-covered face.
				im 3-7.jpg
				p; God... I swear, somehow it seems like making you cum feels better than <i>actual sex</i>...
				t Your cock twitches at that, getting ready for another round, but she just flashes you a gentle smile as she slowly stands, your cock being released from the warmth of her cleavage.
				p; It's so tempting to jump you right now... but I wanna hold off for now.
				t She drags her finger along to pick up several strings of your cum and, like before, laps it up with a lewd look.
				p; I skipped to the main course and fucked you right outta the gate earlier, so I wanna take my time and build up to it... so that way, I lose my <i>gosh dang mind</i> when you fuck my brains out~
				t Well, you're no stranger to delayed gratification, so...
				player Then I'll make sure that when I do pound your cunt again, you'll absolutely lose your mind.
				t pizzaF giggles at that.
				p; I'm gonna hold you to that, lover~
				t With that said, the two of you start to clean up. When you're finished and about to head out, pizzaF does take a moment to get up on her tiptoes next to you...
				t Giving you a quick peck on the cheek, she smiles brightly at you as you head out.
			`);
			break;
		}
		case "pizza4Event" : { //Blowjob scene
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				player How about you put those lips to work, pizzaF?
				t She teasingly licks her lips, before running a finger just along them.
				p; What, these cute, pouty lil' things?
				t She leans forward, sliding down your pants with a saucy grin.
				p; I was wonderin' when you'd ask~
				im 4-1.jpg
				p; It's so hard~ You love the view that much, huh?
				t pizzaF slowly leans forward into you, your shaft resting across her face now as she lets out a shuddering breath.
				p; And it's heavy, too...
				t She slowly starts kissing along your cock, starting at the tip and slowly moving down the base. Her fingers slowly tease at the spots her lips touch, the soft wetness of her lips feeling almost agonizingly gentle.
				t When she reaches the bottom, she presses her lips against your sack, before starting to shudder in pleasure as she breathes deep, taking in your musk. Her free hand slides between her thighs as she does, and for a moment it seems like she loses herself in the pleasure of rubbing herself through her panties and huffing your scent.
				t Right before you reach down to refocus her, though, she slowly pulls back, extending her tongue and letting it slowly drag across the underside of your dick and smear her spit across the whole of your cock.
				t Her eyes are still gently shut she reaches the top, a thin line of drool still connecting your cock and her tongue.
				im 4-2.jpg
				p; Haaahh... There's just no way I can keep holding back~
				t Her fingers still rubbing at her panties, she pushes her head forward and takes your cock into her mouth. She starts just with your cockhead, her saliva quickly spreading across the shaft.
				im 4-3.jpg
				t Her hands smear it about quickly as she strokes you in time with the bobbing of her head, each movement taking you deeper inch by inch.
				t By the time she's taking you halfway down, you can tell from the way she's wiggling her ass and teasing her cunt that she's barely thinking about anything but pleasure.
				t She can't seem to quite take you balls-deep, stopping when only most of the way down, but the passion and focus more than makes up for it as her rough tongue lapping against your shaft adds to the mounting sensations.
				p; Hnmmmm~!
				im 4-4.jpg
				t Looking down at her as she squirms in pleasure, her eyes gently shut as she bobs up your tip to most of the way down, you can't help but eye her ponytail.
				player Hey... pizzaF.
				p; Hn... Hm?
				player Take a deep breath.
				t When she feels your hand grasp right around her scrunchie, you see her eyes do wide as she sharply inhales, and you take that as your cue.
				t You take control of the pace and start pulling her down onto your cock as her hand drops away and supports her as you buck your hips forward with each pull.
				t The wet, sloppy sounds of you pushing your cock against her throat-barrier with each thrust floods the room as you start forcing her to go down deeper and deeper.
				player Fucking <i>hell...!</i>
				t You finally push forward and slide past the barrier, her eyes going wider as she reaches her hands up to your thighs... only to pull you as close as she can.
				t The movements of her throat as she desperately tries not to gag are practically milking you, her throat squeezing tight and trying to forcibly relax multiple times a second.
				t You can barely focus as you roll your hips forward, her lips pressed to the base of your cock as you just barely manage to slide a quarter-inch deeper, before you're already reaching the edge.
				player Fuck, I'm cumming!
				t You pull yourself back a bit, releasing her ponytail as she pulls away. There's a sharp exhale of her held breath along your shaft before she shuts her eyes again and tries to stroke you to completion, her warm and wet mouth pushing you over the edge.
				im 4-5.jpg
				p; Mmm~!
				t Your hips buck forward as you start spurting cum into her mouth, her tongue lapping it all up inside as her hand keeps gently stroking your shaft.
				t She seems intent on draining every drop she can from your cock, sucking on your cockhead for several seconds after you finish cumming before finally raising her head away and letting her hand drop down.
				t Her other hand, of course, slowly pulls away from her own sopping cunt as she lets out several heavy gasps, before she looks up at you and...
				p; Ahhhn~!
				t ...shows a completely empty mouth - evidence she swallowed every drop.
				player God, you are such a good little slut.
				t pizzaF inhales sharply at that, her back straightening and arousal clear in her eyes.
				t She really is just such a praise-slut...
				t You reach forward and gently cup her chin, guiding her face closer to yours.
				p; H-Hah?
				t This time, you're the one who places a kiss on <b>her</b> cheek, and you could swear her face goes nuclear from how red it turns.
				t She squirms a bit, her lips gently parted now as she shudders in pleasure, her arms moving across her chest for a moment.
				p; N... No f-fair~...!
				t You respond my nibbling on her earlobe, as lets out a squeaking moan and gently pushes you away.
				p; S-Stop that! If you keep that up, my self-control is gonna go right out the window...!
				player And what if that's what I want?
				t She bites her lip at that, clearly weighing the options, questioning if this was enough build-up for the main event...
				t ...before you lean away from her with a smirk.
				player But then, making you wait is half the fun, isn't it?
				t You can see her hand move down between her thighs as she lets out a little squeak again.
				p; Mmph... Yes, it is~
				t Saying that, she stands up and quickly moves to button her shirt, her face still a deep crimson.
				t A quick minute of cleanup later, and you're ready to leave. pizzaF leans up against you to kiss your cheek again...
				t ...but instead gently blows air on your earlobe, sending a shiver down your back as she whispers,
				p; I have <i>very</i> sensitive ears, so tease me for that lots when you fuck me, okay~?
				player Hah.
				t You cup her chin again and pull her into a full kiss on the lips. She's surprised for a moment, and just as she parts her lips to let your tongue in... you pull away.
				player See you later, pizzaF.
				t She lightly brushes her fingers against her lips, her blush still in full force.
				p; See you soon, lover~
			`);
			break;
		}
		case "pizza5Event" : { //69 scene
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				t With a smirk, you sit down on the bed and undo your pants, before laying back on the bed.
				player This time, how about we both put our mouths to work?
				p; Oh~?
				t She saunters up to you, the arousal clear on her face as she smoothly undoes her buttons.
				p; Now <i>that</i> sounds like fun~
				t She gets up on the bed smoothly, and a moment later, you're pushing her skirt up and back at getting a <b>very</b> good look at her panties.
				im 5-1.jpg
				t Her tongue traces circles around your cockhead as your hands grasp at her ass, spreading her cheeks apart and getting a good view of her panties-clad cunt.
				t You start pulling them to the side, revealing her soaked folds as her tongue stops for just a moment.
				p; H-Hahn~!
				t pizzaF's back arches as you pull her on her thighs and press your face into her snatch. Your own tongue teases the sides of her labia as she tries to get back into the groove of blowing you.
				t Roaming your hands up and down her thighs, you start slow by kissing along her inner thigh. Each time you press your lips to her skin, her hips shake minutely and her breath hitches the slightest bit.
				p; F-Fuck~...
				t Refocusing on your cock, she quickly takes your shaft more than halfway down in a single bob down, letting her tongue slide against your shaft as her hands stroke the lower half. Her other hand moves to your balls, cradling them in her hand as she stimulates them.
				t Amused at the burst of vigor from her, you focus up as well, using your thumbs to spread her pussylips and extend your tongue, drawing lines with the tip along her inner labia. Slow, methodical movements seem to be working a bit better on pizzaF than fast ones, so you continue to tease her with controlled strokes of the tongue.
				t Meanwhile, pizzaF seems to take that as a challenge. Sucking in just enough air, you can feel her mouth get incredibly tight as she bobs up and down, her vacuum-blowjob accompanied with the sensations of her hand rapidly stroking you, slickened with her spit. She bobs up enough for just the tip to be in her mouth for a moment...
				im 5-2.jpg
				t ...before she bobs down fully, taking you nearly to the base as your cockhead presses against the entrance to her throat.
				player So tight...!
				t Your voice is muffled by her cunt, but the way she gently squirms against you shows that she heard it well enough. A moment later, though, and you're completely focused on turning the tables on her.
				t You press your tongue against the proper entrance to her cunt, but one of your thumbs slides up to the top of her pussy to tease a different spot.
				t The moment you tease at the clitoral hood, her back goes straight.
				p; <i><b>MMPFH~!</b></i>
				t Your cock in her mouth silences the sharp shout of pleasure, as you very quickly learn that she has a <b>very</b> sensitive clit.
				t The moment of shock passes, your thumb now teasing at her lips as your tongue focuses on drawing a teasing line down from just above her snatch to the clit... and then skipping just barely over it and teasing her slit instead. Another slow slide upwards...
				p; M-Mmnn...!
				t ...and she's practically mewling for you to focus down on it again.
				t And of course, you oblige.
				p; <b>HMNN~!</b>
				t She bobs her head down in time with when your tongue flicks against her clit, the tight squeezing of her mouth and throat around you paired with the moans around your cock. You start bucking your hips upward as she bobs down, and she mirrors the action by lowering her hips and pressing her cunt down closer to you.
				t The two of you both focus on the other's pleasure, your fingers and thumb toying with her snatch as your tongue flicks and laps at her sensitive clit, while she presses down enough for your cock to just barely enter her throat with each long bob down, with her hand stroking up and down just past her lips each time.
				t You almost completely lose track of time, pleasure clouding both your thoughts and hers as minutes fade away, and the two of you quickly start approaching the edge.
				t The quivering of her hips and thighs are more than enough to alert you, while your own cock starts to throb and pulse in warning for your load, and she's the first to finish.
				p; <i><b>M-MMMPFHH!</b></i>
				t Her hips buck a bit as her thighs squeeze and quiver beside you, her tits pressing down firmly against your lower abdomen while she loses her focus on blowing you.
				t You keep teasing her for a bit after she starts cumming, but you slowly ease off after a good thirty seconds. Her shuddering, heavy breathing through her nose and gently shaking hand and head aren't enough to finish you off, but are just enough to keep you hovering on the edge.
				t And the moment she recovers, she starts pushing you over that edge by gripping your cock firmly and stroking it with purpose, her mouth around the head of your cock as she still tries to catch her breath, all while running her tongue all along your tip.
				t Sure enough, less than a minute later...
				im 5-3.jpg
				t Your cum shoots out into her mouth again as your hands grasp her ass tightly, your head pressed against the bed as you let out a heavy groan of pleasure and release.
				t You're sure that more than a bit must have spilled down along your shaft from the way pizzaF gasps sharply as she takes her head off your cock, a few drops spilling from her lips as she pants.
				im 5-4.jpg
				t The two of you sit like that for a moment, before you feel her shift her body back a bit... just enough that she can extend her tongue, and lap up the cum from the base of your cock upwards, moaning softly as she cleans up every spilled drop.
				t A matter of moments later, she shakily lifts her leg over and past your head, rolling onto her back as she smiles gently towards the ceiling, her eyes still shut as her erratic breathing finally slows down.
			`);
			break;
		}
		case "pizza6Event" : { //Sex scene
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				t Laying back on the bed, you slide your pants off and lean back, letting her eyes hungrily roam your body before wholly focusing on your cock.
				player Get up here and ride me, pizzaF.
				t There's no snarky reply as her skirt drops to the ground, only an obedient and lustful,
				p; Oh I would <i><b>love</b></i> to~
				t As she takes her spot above you, her hand moves to grab your cock and aim it at her pussy as she shifts in place for a moment. She's practically dripping with anticipation at this point, and a moment later, you can feel your head sliding past her lips.
				t Rather than stopping to get acclimated, though, she keeps sliding down with shuddering breaths until she can't take any more of your cock inside her.
				t You feel her press down against your hips as you bottom out, pizzaF licking her lips lustfully as holds the position for a moment.
				im 6-1.jpg
				p; Haaahh... It feels even better than the first time~
				t Saying that, she starts to slowly raise her hips, biting her lip as she does. She's almost agonizingly tight as she moves up, her muscles tense as she gets used to your length sliding out of her.
				t Then, with a shallow breath, she drops her hips down, bottoming you out again as a moan spills from her lips. Despite starting slow, she quickly starts to pick up speed and bounces shallowly on your shaft, your cockhead grinding delightfully against her inner folds.
				t pizzaF's tits bounce in front of you as she bounces in your lap, her moans getting louder and filling the room as you fill her cunt. After a moment, she hilts you again and pauses... only to start rolling her hips in place, rubbing your cock all around inside of her.
				im 6-2.jpg
				p; Such a... perfect fit~...!
				t Still rolling her hips a bit, she raises them as well and bounces on your cock again, riding your shaft while her tits start to shake erotically in front of you. A trail of drool starts to slide past her lips as she lets out lewd moans, accompanied by the loud moans that fill the room each time your hips and her ass press together again.
				t Not quite satisfied with sitting still, you start bucking your hips upward in time with her bounces, a high squeak of pleasure coming from pizzaF's throat each time you do. The pleasure keeps mounting in her as you feel her pussy squeeze around your shaft more erratically, more wild in its attempts to squeeze your load out of you.
				im 6-3.jpg
				p; Fuckfuckfuck, <i>I love your cock~!</i>
				t One of her hands moves up and grabs at her chest, her fingers toying with her nipple as her other goes between her legs. Her breathing gets faster and shallower as she teases at her clit as your cock glides and scrapes into her, with her wild bouncing getting faster as well.
				t Your own hands move to the side to grip the bed as you start bucking your hips harder, the clap of her hips and yours resounding nearly as loud as her moans as her hands swing back just to help her keep balance. Her voice hits a higher, sweeter pitch as you fuck her deeply, pizzaF barely able to focus on anything but the pleasure.
				im 6-4.jpg
				t The feeling of her cunt squeezing around you, all semblance of control lost as she squirms atop you and her thighs quiver, causes the pleasure to mount in you as well. Watching your cock split her wet snatch open, your head sliding against her deepest parts each time, has you groaning through gritted teeth with every moment.
				t It was only a matter of time before you reached your limit, and fortunately for you both, pizzaF seems to hit it at nearly the same time. If nothing else, she'll definitely go over when you finish inside her.
				player Get ready...!
				t Her breathing hitches, an ecstatic glimmer in her eyes as she hears you.
				p; Fuck yes, <i><b>fill me up~!</b></i>
				t Her hips keep slamming down against yours, every swift drop taking you from barely inside of her to bottomed-out as you go over the edge.
				im 6-5.jpg
				t The first spurt is accompanied by an even louder cry of pleasure from pizzaF as she shudders, the ecstasy and warmth spreading through her overwhelming her with each rope shot into her.
				t Even as you cum, she can't seem to stop bouncing up and down until every drop of cum has been spurted inside of her, with more than a bit spilling out between her legs from the rough riding.
				im 6-6.jpg
				t pizzaF looks between her thighs to the cum that spilled out around with a hazy, lustful expression... before giggling softly, and slowly raising herself off of your cock. When your head slides past her lips, another small moan passes from her lips before she lays down on the bed beside you.
				p; Haahn... That was really, <i>really</i> nice~
				player Agreed... It felt amazing.
				t She leans in just enough to lightly press your earlobe between her lips, teasing it for a moment, before leaning her head into the crook of your neck instead.
				t You feel her chest press against you as she cuddles up beside you, her breathing starting to slow down and become calm as she just enjoys your warmth for a bit.
			`);
			break;
		}
		case "pizza7Event" : { //Uniformed scene
			writeHTML(`
				t Uniform
				define p; = sp pizza; im pizzaAlt.jpg;



				define p; = sp pizza;
			`);
			break;
		}
		case "pizzaConclusion" : { //Cowgirl ending
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				t Stepping towards the tub, she lets her clothes drop to the floor before she reaches up to her hair.
				t The thought occurs to you, watching as she tosses the scrunchie onto the counter nearby, that this is your first time seeing her with her hair down.
				t She smiles back at you, gently grabbing your wrist and pulling you towards the tub before climbing in right on top of you.
				p; Here you go~
				t She pulls your head towards her chest as she straddles you, and your hands move to hold her thighs.
				im 7-1.jpg
				t pizzaF looks back for a moment, rolling her hips and sliding them back just enough that you can feel her asscheeks start to envelope your cock.
				p; Mm~ Your cock feels so <i>warm</i> against me~
				t Whispering that, she rolls her hips just enough to bounce her ass a bit, her ass gliding along your shaft as you hotdog her.
				player You have such a <i>fine</i> ass, you know that?
				t She leans in to your ear, her breath warm and heavy on it, as she replies,
				p; And it's all yours now, <i>lover~</i>
				t She bobs her ass up again, but this time slides her hips back enough that you can feel your cock press into her cunt.
				t The moment your head pushes past her lips and spreads her apart, you buck your hips gently as she moans.
				im 7-2.jpg
				t The two of you take a moment to bask in each other's bodies for a moment, letting your cock just barely slide into her inch by inch.
				t The sensation of her tits against your face is nice, though what's nicer is her moans as you press your lips against her chest and feel her squirm a little bit.
				player You really are sensitive, aren't you pizzaF~?
				p; Only when <i>you're</i> the one doing it, hun~
				t Saying that, she starts bouncing ever faster as her cunt squeezes tighter around you.
				im 7-3.jpg
				t Each time she lowers her hips down against yours, her tits lift just enough for you to tease around the areola with your tongue and lips.
				t Her shuddering moans take on a huskier quality each time, and you can practically feel her getting wetter and more turned on as your fingers dig into her thighs.
				p; F-Fuck... Rougher, p-please~?
				t You smirk up to her.
				player <i><b>Gladly.</b></i>
				t Your hands slide further up her ass, grasping them tightly as you start lifting her a bit and dropping her back down onto your cock.
				im 7-4.jpg
				t Your grunts of exertion are effortlessly drowned out by her throaty moans of ecstasy, your fingers practically digging into her ass as you roughly slam her down against you.
				t Your hips buck up against her ass with each drop, her moans geting louder and sweetly echoing off the tiling as you pick up speed.
				t Her gushing cunt keeps squeezing around your shaft with each thrust, the lewd sounds of your fucking bouncing around the walls alongside your grunts.
				im 7-5.jpg
				t The wild way her pussy keeps squeezing around you, the way her voice is getting sweeter and louder, and the way her fingers spastically grasp at your hair make things pretty clear.
				t She's getting closer to the edge with every thrust, especially with you screwing her onto your dick like a cocksleeve. Fortunately for her...
				t It seems like you'll both be finishing at the same time.
				player pizzaF...!
				t Hearing her name spill from your lips causes her to squirm even more, several gasping moans spilling out as her hands move wildly through your hair.
				p; F-Fuckholyshitfuck...!
				t Unfocused words spill out of her mouth as you pick up even more speed, thrusting your hips up as you rapidly push yourself to and beyond the edge.
				player I'm...!
				p; <i><b>CUMMING~!</b></i>
				im 7-6.jpg
				t Her pussy squeezes wildly around your pulsating cock, milking every drop from you as she twitches and quivers atop you.
				t Each small movement of her body is accompanied by the shuddering of her against you as you pump her full, rope after rope shooting into her even as it spills out.
				im 7-7.jpg
				t As your cum drips down from your cock and her cunt, she lets out a light giggle.
				t Several seconds pass as you both try and catch your breath... only for pizzaF to smile at you impishly and nuzzle her face into your hair.
				p; You know... There's nothing saying we have to stop after just one load~ How about we...
				t Her voice drops to a husky, throaty whisper...
				p; ...see just how <i>full</i> you can make my tight little cunt, lover~?
				t You respond by grabbing her ass tighter and realigning your cock with her entrance.
				player If you think you can handle it... then let's find out, pizzaF.
				t Her tinkling laugh is quickly replaced by a moan as you start fucking her wildly again, and you both spend quite some time enjoying each other's bodies...
			`);
			break;
		}
		case "pizza2-1Event" : { //Handjob repeat
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				player I want you to jerk me off again.
				p; Gladly, hun~
				t Taking a seat up on the bed next to you, she smiles at you with half-lidded eyes as she undoes her shirt.
				p; Don't want these obstructin' the view, now do we~?
				t Lifting her bra, she lets her tits bounce out freely in front of you as she enjoys the way you look at them.
				im 2-2.jpg
				t Her hand reaches forward towards you, quickly removing your own garments and exposing your shaft.
				t As she looks over it, a lightly lustful expression on her face, she reaches forward.
				im 2-3.jpg
				p; Warm~...
				t Her palm glides across the surface of your tip, picking up the precum and smearing it across her hand and your shaft.
				t She starts out slow, making sure it's sufficiently lubed up before starting to pick up speed. She slowly twists her wrist each time her hand comes up, focusing especially on stroking your glans.
				t Her speed picks up more and more, the wet and squishy sounds of your lubed-up cock fucking her dainty hand filling the room.
				im 2-4.jpg
				p; It feels so firm and hard~...!
				t She keeps stroking it faster, her grip slowly tightening until it feels perfect around your shaft as more of your precum makes the surface even slicker.
				t You can see her licking her lips, her face lightly flushed, as she keeps stroking you with a delightful practiced pace.
				t When you reach the edge, you let out a low grunt to alert her, and she bites her lip for a moment...
				t Then, you erupt.
				im 2-5.jpg
				p; Hah~!
				t Her eyes go wide as your cum shoots out, her hand still stroking firmly as your hips buck against her palm. Ropes of jizz shoot out across her chest and face as she lets out a soft giggle.
				p; Jeez... Somehow, the amount still manages to catch me off guard~
				t She pulls her hand away from your shaft once you finish, lapping at her palm with her tongue once before smiling at you.
				t A few minutes of cooldown and clean-up later, though, and you're ready to head out.
			`);
			break;
		}
		case "pizza3-1Event" : { //Titfuck repeat
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				player How about another titfuck? Seemed to me like we both enjoyed the last one.
				t pizzaF smirks at you as her hands start quickly undoing the buttons of her shirt.
				p; More than happy to oblige, lover~
				im 3-8.jpg
				p; Ahhhhn~
				t She toys with her exposed chest, giving you a bit of a show as she lets her spit lube up her tits again.
				t She doesn't make you wait long before you feel the warmth of her breasts wrap around your shaft, a jolt of pleasure going up her back as your shaft glides between her tits.
				t The pleasure is just as potent for you, your sensitive cockhead sliding between them before poking out of her cleavage as she starts bobbing her tits along your shaft.
				im 3-3.jpg
				t Precum starts to spill from your cocktip quickly, but pizzaF is quick to lap it up with her tongue almost hungrily, relishing in your taste as she moans whenever her lips slide over your cockhead.
				p; Mmmm~
				t Each moan sends vibrations through your cock, adding to the pleasure of being squeezed tightly between her tits, her cleavage becoming like a slick cocksleeve for you to fuck.
				im 3-5.jpg
				t She's just a bit better than last time, her movements more controlled and confident as she strokes your cock and suckles on the tip lovingly, each movement aiming to get you closer to giving her another facial.
				t And in the face of such vigorous, enthusiastic pleasure, you don't plan on keeping her waiting for long either.
				t The sheets bunch up in your hand as you suck in a deep breath.
				player pizzaF...!
				p; Mm, perfect~
				t She runs her tongue along the underside of your shaft one more time before focusing on stroking your load out with her tits.
				im 3-6.jpg
				t Like before, her body shudders with delight as you shoot your load across her face, the pleasure causing her breathing to become heavy as she rubs her thighs together in arousal.
				t After you finish, and after a minute or so of clean-up, pizzaF is happily leaning her (still-uncovered) tits against your arm as she kisses your cheek.
				p; See ya next time, lover~
			`);
			break;
		}
		case "pizza4-1Event" : { //Blowjob repeat
			writeHTML(`
				define p; = sp pizza; im pizzaAlt.jpg;
				player I want you kneeling in front of me, with my cock down your throat.
				t The blunt phrasing causes her to bite her lip, immediately dropping to her knees and opening the front of her shirt.
				p; Yes playerSir~!
				t Her skirt quickly tumbles to the ground as she kneels down, her eyes immediately locked onto the bulge in your clothes.
				t You casually slide down your pants as she moves forward, a small trail of drool at the corner of her mouth as she gently grasps your cock.
				im 4-6.jpg
				p; It's almost unfair how sexy your cock is~
				t She wastes no time in sliding her head forward, taking your cockhead between her lips as she starts bobbing down.
				im 4-4.jpg
				t Just like before, she starts out fairly slow as she carefully works on warming up and taking you deeper.
				t This time, though, she doesn't seem content to just go 'most' of the way down without your help.
				player Fuck...
				t Your groan incentivizes her further as she starts pushing herself down further. You can feel your cockhead press against her throat barrier, and it seems for a moment like she's having trouble...
				t Before you feel her free hand grab your backside and pull you forward just enough that you can feel your shaft slide that last inch.
				t Your own breathing hitches as the ungodly tightness of her throat squeezes around you, the same wild attempts to not gag as before completely overriding your ability to focus as she slowly bobs back and forth by the smallest amount.
				t After a few more moments, though, her confidence swells as she lets your cockhead pop out of her throat... only to push it right back in.
				t The forceful pressure and tight fit make it nearly impossible to hold out as she bobs back and forth, fucking her throat with your cock again and again, only going faster as your breathing gets heavier.
				t You reach the edge quickly, but just as you do, she seems to run out of breath and she slides most of the way up.
				p; F-fuckkk, please cum for me~!
				t Her lips immediately go back around your cock as she strokes you with her hand, and her begging finishes you off.
				im 4-5.jpg
				t You can hear her swallowing each rope of cum as she shudders beneath you, and you find yourself grasping her ponytail a bit after a moment to slowly pull her off of your cock.
				t When you do, she seems to be almost in a daze as you see her fluids practically flowing down her legs.
				p; I... fucking... I <i>came...</i>
				t There's a breathy pride to her voice at the realization that she came with her hands too busy to touch herself. She looks up at you with a yearning look, almost like an expectant puppy, and you can't help but lean forward.
				t Your hand strokes her cheek for a moment, her face leaning into it as you say,
				player That was incredible. Good girl, pizzaF.
				t Her body twitches at that as she lets out another haltering, blissful breath.
				t Unsurprisingly, it takes her a few minutes to fully recover from that. But when you do, pizzaF is happy to send you off with the usual peck on the cheek.
			`);
			break;
		}
		case "pizza5-1Event" : { //69 repeat
			writeHTML(`
				t 69 repeat
				define p; = sp pizza; im pizzaAlt.jpg;
			`);
			break;
		}
		case "pizza6-1Event" : { //Sex repeat
			writeHTML(`
				t Fucking repeat
				define p; = sp pizza; im pizzaAlt.jpg;
			`);
			break;
		}
		case "pizza7-1Event" : { //Uniform repeat
			writeHTML(`
				t Uniform repeat
				define p; = sp pizza; im pizzaAlt.jpg;



				define p; = sp pizza;
			`);
			break;
		}
		case "empty" : { //EmptyCaseForCopyPaste
			writeHTML(`
				t Empty_case
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