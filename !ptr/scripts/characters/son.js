var character = {index: "son", fName: "Bay", lName: "Hall", trust: 0, encountered: false, textEvent: "", met: false, color: "#772229", author: "NoodleJacuzzi", artist: "Silver Radish", textHistory: "", unreadText: false,};

var logbook = {
	index: "son", 
	desc: "A young man who lives with his mother attending school from the apartment next to yours. Despite seeming very rough and standoffish, he cares deeply for his mother.",
	body: "He gives off the vibe of someone who can't wait to hurry and be respected as an adult, but there's probably something in his genetics keeping him looking short and feminine.",
	clothes: "He doesn't seem like the type to much thought into his outfit, instead choosing to wear whatever's clean and comfortable.",
	home: "He lives in the apartment next to yours, and seems only to go out for school.",
	tags: "Mother/son incest, sissification",
	artist: "Silver Radish<br>Original image set:  Oyako no himitsu zenpen 'musuko no himitsu'",
	author: "NoodleJacuzzi",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "sonIntro", name: "Someone wants your attention", requirements: "?trust son 0; ?location schoolEntrance;", altName: "", altImage: "",},
	{index: "sonHotelBad", name: "Ask about son", requirements: "?flag demon hotelBad; ?trust papi 666;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	writeHTML(`
		define black = sp Black Haired Succubus; im images/demon/dark.jpg;
	`);
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "sonIntro": {
			setTrust("son", 20);
			writeHTML(`
				im images/papi/133a.jpg
				son Hey!
				player Hello?
				son This is a private organization. You can't loiter here.
				player I work here, I'm the counselor.
				son We don't have a counselor.
				player I'm new. We could confirm it with Principal principalF if you'd like?
				son ...<br>I can check it on my own. If you really work here, sorry.
				player Maybe you missed the blurb in the student email. In any case, no need to apologize. If I'm giving off a suspicious vibe then that's something I need to work to change.
				t He doesn't say anything, looking frustrated with himself and with you, before he runs off without another word.
				player ... Strange kid.<br>Oh hey, that's the direction of my place.
				finish
			`);
			passTime();
			break;
		}
		case "sonClub1": {
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "sonClub2": {
			writeEvent(name);
			passTime();
			writeHTML(`finish`);
			break;
		}
		case "sonHotelBad": {
			writeHTML(`
				black Ah, the younger one.
				im images/son/212.jpg
				black We took him in and told him his mother was working for us, and that if he worked faithfully he'd be able to buy his and his mother's freedom.
				im images/son/216.jpg
				black Of course, we have him working as a sort of "free sample" in the bath rooms for prospective guests. 
				im images/son/217.jpg
				black But it's only natural to have him working for free, since he's such a hair-trigger that he can't hold any of the cursed energy he gathers. 
				im images/son/218.jpg
				black Well, that was months ago. Actually, I haven't checked if he still remembers his mother. Not many succubi last for very long down there, humans are very eager and play <i>very</i> rough with our sample boys.<br>Oh, just thinking about it is making me excited~ 
				finish
			`);
			break;
		}
		
		case "sonBathRepeat": {
			writeHTML(`
				define son = sp son; im images/son/bath.jpg;
				im images/son/baths1.jpg
				im images/son/baths2.jpg
				
				im images/son/sonBathRepeat.jpg
				
				im images/son/baths4.jpg
				
				im images/son/baths5.jpg
				
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

var eventArray = [
	{index: "placeholder", name: "Event Name"},
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
				player And there's another one!				im images/papi/157.jpg
				player Seriously, how many of these things do you need?!
				son You're gonna die.
				player Of what, second-hand embarassment?				im images/papi/158.jpg
				son Just stop it already! Why are you doing this?!
				player Lighten up, I'm just having a little bit of fun. Plus, this is actually pretty informative.<br>All these toys at just the slightest different bit of an angle. Everything in this box is screaming "I desperately want to have an anal orgasm, and I'm so close, but all these are just barely the wrong size!"
				son You're wrong!
				player No, you're wrong. A hands-free orgasm comes from the heart, not the wallet.
				son What the hell does that even-<br>Waaaah!				im images/papi/159.jpg
				player You thought that you were just barely off, that being on the edge of orgasm meant you just needed a little bit of pressure on a different spot, a little bit more speed, more vibration. But you weren't on the edge, you were hitting a wall.
				son Gahh!
				player The same wall every would-be anal slut hits. Fancy toys aren't the answer. When you hit that wall, what you need...				im images/papi/161.jpg
				son Ghhh~!
				player Is to break right through it! No half measures, you'll be an anal queen and there'll be no excuses!				im images/papi/162.jpg
				son Y-you psycho! I'll k-kill... You!				im images/papi/163.jpg
				t *Knock knock knock*
				son N-no...
				papi Dear, I made you and playerF some coffee! And I remembered to knock this time!
				son N-not now mom!
				papi But-				im images/papi/164.jpg
				son I s-said not now!
				papi Alright... Please, take care of yourself, alright honey? I love you.
				son I... I love...				im images/papi/165.jpg
				son Mmm~! Mom~!				im images/papi/166.jpg
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
				t ...				im images/papi/174.jpg
				son ...
				player ...
				son Ghh... Just get on with it already! I can't focus!
				player Oh? Just a taste and you already can't wait for more?
				son I just can't wait for the third session so I can be done with you.
				player Sure, sure. Up against the wall, pants off.
				t ...
				player You're adorable, you know that?
				define son = sp son; im images/son/sweater.jpg;				im images/papi/175.jpg
				son You're disgusting, you know that?
				player You're so cute, it'd be impossble to tell you're male just by looking at you.				im images/papi/176.jpg
				son ... Your breath stinks.
				player Oh man, that cuts deep. I'm donna need to see something nice to lift my spirits.<br>Shirt, or should I say, dress, up.				im images/papi/177.jpg
				son ... How long are you going to tease me like this? Why can't we just get this over with and skip ahead?
				player Oh poor little sonF. You don't know your body as well as you think you do. I told you I'd help you, and I will. I'm going to properly educate you on how to be a proper buttslut, and an overlooked step of anal play is when <i>not</i> to play with your ass.
				son ...
				t ...				im images/papi/178.jpg
				son Ghh...
				player Are you really going to keep pretending like this isn't affecting you? You're sweating so much you look like you've been jogging during a heat wave.
				son This... Is... Nothing!				im images/papi/179.jpg
				son Hoh~!
				player Heh. Just licking your nipples makes you give off the most delightful sound, and yet you're still trying to stand strong.				im images/papi/180.jpg
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
				player Oh no? Were you expecting anything less?				im images/papi/181.jpg
				son P-please, can't we do something else?
				player Hmmm~				im images/papi/182.jpg
				player Nope!
				son ...!
				player Too cold for you? Or maybe that shivering is from something else~<br>After how we left off last time, were you able to get off on your own?
				son N-no!
				player Tsk tsk, you must not have tried very hard then. Oh well, that'll just make this final step more fun for both of us.
				t For what must feel like forever to the soon-to-be buttslut you relentlessly tease his puffy prostate, never hard enough to milk an orgasm out of him of course, and while he mever vocally complains it's clearly taking a toll on his mind and body.
				player And now...				im images/papi/183.jpg
				player It's my turn to enjoy myself. Any last words of farewell to your virginity?
				son Hah... Hah...
				player Not very dignified. Can't focus? Let's bring your head...				im images/papi/184.jpg
				son Ohhh!
				player Back down to Earth!<br>How would your mom react if she saw you now? 				im images/papi/185.jpg
				son ...!
				player Trying to keep quiet? Sorry, but that won't last. Because! I don't! Fuck! Gently!
				son I... I...!				im images/papi/186.jpg
				son Hah... It's... O-over?
				player I know, I bet you're so, achingly close. Probably on the edge of complete submission, huh? But at least like this there's a <i>chance</i> you'll go back to your boring, ordinary life after this.
				son ...
				player Every day, frustrated and consumed by your inability to get off with your ass, and disappointed in how getting off with your dick feels. Most of your free time either spent masturbating or wishing you could be playing with yourself, never to find relief.				im images/papi/187.jpg
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
				t ...				im images/papi/188.jpg
				player <i>Huh, papiF didn't hear that after all. Well, not a huge issue, I would have just hypnotized her after she fainted from shock.</i>
				son ...
				player Oh right, can you even hear me? That whole 'three sessions' thing? I was lying. See you soon!				im images/papi/189.jpg
			`);
			break;
		}
		case "sonMorning": {
			writeHTML(`
				t <i>Meanwhile, in the papiL household...</i>
				son It won't stop... Building up again...				im images/papi/144.jpg
				son M-mom... I'm sorry~				im images/papi/145.jpg
				son I can't reach it... How did *he make me...?<br>I can barely remember, but I feel like *he changed me somehow, just r-remembering being dominated like... Like that~!				im images/papi/147.jpg
				son Leaking~!<br>*He really did... Help me out... And *he's gone now...<br>But... I feel like my life as it used to be is over...
			`);
			break;
		}
		case "papi-sonReveal1": {
			writeHTML(`
				define papi = sp papi; im images/papi/maid.jpg;				im images/papi/188p.jpg
				papi Ngh~! Ehehe~! You're so biiig~!
				player Shouldn't you be more quiet?
				papi Ngh~! S-sorry *master, this little kitten can't keep her mouth shut sometimes~! But I'll do better~player Oh?				im images/papi/189p.jpg
				papi Oooough~! If you k-keep that up, I'll~				im images/papi/191.jpg
				papi Cumming~! *Master's little maid fuckslut is cumming~!				im images/papi/192.jpg
				papi Ehehe~ So w-
				son So.				im images/papi/193.jpg
				papi ... sonF<br>playerF, m-move!
				son This is why *he stuck around for so long, huh?
				papi N-no! It's not what you think, I swear!				im images/papi/194.jpg
				son Really? Because it looks like my mom's giving her body to someone she hardly knows.
				papi No! I... I don't...
				player Alright sonF, you're up next.
				son Gladly.
				papi Wh-what? What's...?				im images/papi/195.jpg
				papi sonF? What are you...?				im images/papi/196.jpg
				papi I... What?
				t <i>"Aww, cmon! You're always getting off to cuck stuff, I've seen your web history. I thought you'd like the little present!"</i>				im images/papi/197.jpg
				papi Why? Why?!
				t <i>"Be real! He's just way more of a man than you are!"</i>				im images/papi/198.jpg
				papi Ah... Ahah... Ahahah!
				t <i>"You can take the kid. Make sure he grows up normal, or whatever. Although, with a dad like you..."</i>				im images/papi/199.jpg
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
				son Mmm~				im images/papi/200.jpg
				papi Baby, I can't... You're grinding so hard against me... This isn't right... Right?				im images/papi/201.jpg
				son Mmm~!
				papi H-honey, what's got you so worked up? You should take it more slowly, if you rush-
				son Sh-shut up! I'm gonna... We're gonna cum together...!
				papi Baby, that's not how it w-
				son <b>I WANNA CUM WITH YOU!</b>				im images/papi/202.jpg
			`);
				writeDual("son", "", "papi", "", "Mpphh~!<br>Oooough~!");
			writeHTML(`
				papi Hah... Hah... What just...?
				son *Huff*... *Huff*...				im images/papi/203.jpg
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
				son Hah~! Hah~!
				player You. Stupid. Brat.<br>Did I ever say I'd take my turn with papiF?				im images/papi/214.jpg
				son Haaaah~! I just came, but...!
				player Stupid bitch, you know a body like yours is built for anal, not grinding that useless fuckstick on your mom's cock.
				papi You sh-shouldn't talk to him like that...
				player And you! Shut up and come closer.
				papi ...				im images/papi/215.jpg
				player Sitting there, wishing you could jerk off to your own son getting assfucked. This is your mother, sonF. She's just meat to get fucked.<br>You <b>need</b> me. This passive bitch could never satisfy you for long.
				son N-no~! I d-don't...!
				player I see. papiF, shut him up until he sees reason. I know you can't hold back any longer.
				papi B-baby... I'm so sorry... But *he's right...!				im images/papi/216.jpg
				papi Haaaah~! I'm raping my own son's mouth!
				son Mpph~!
				player Now! Learn! Your! <b>PLACE~!</b>				im images/papi/217.jpg
				papi AAAAH~!
				son MMMM~!				im images/papi/218.jpg
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
				player Good god, you two are like rabbits.				im images/papi/219.jpg
				son Mommy~!
				papi Baby~!
				son I... I can't hold on...!				im images/papi/220.jpg
				son Nggh~!
				papi That's it, honey, just let it aaaaall out.
				son Hah~!
				papi You did very well, darling. Now-				im images/papi/221.jpg
				papi Aaah~<br>*Master's cock~
				player Looks like she likes mine a lot more, squirt.
				son Ehehe~ Feels sho gewd~!
				player There really is no getting through to you, is there?
				papi He's trying his best though.				im images/papi/222.jpg
				mom Mmm, like this honey, tease the head.
				son Ehehe~				im images/papi/224p.jpg
				player Hhnn. There.
				son Waaaarm~!
				player You really dove right off the deep end. Looks like I'll be sticking around with you two a lot longer~
				son Yes~!
				mom Oh my, so much enthusiasm!
				player Now move, and make room already!				im images/papi/225p.jpg
				t ...
				t And with that, the night looks to go on forever. It takes what feels like hours to exhaust the pair, and something tells you they'll be on each other again by the morning, but you're spent and ready to head home.
				t ... Hopefully they won't make <i>too</i> much noise in the night.
			`);
			break;
		}
		case "sonClub1": {
			writeHTML(`
				define son = sp son; im images/son/bunny.jpg;
				im images/son/190.jpg
				son S-so, how do I look?
				player You pull it off nicely.
				im images/son/191.jpg
				son ...
				player You really can't handle a compliment, can you?
				son Y-yes I can, my mom compliments me all the time...<br>Coming from you though...
				player Enough pussyfooting around, let's have some fun in that outfit.
				son Eh?! But this is nagatoroF's! I thought-Wah!
				im images/son/192.jpg
				player Worrywart, nagatoroF knows exactly why I brought you here.
				son Eh? S-so you and he-
				player But I bet you already knew that, considering...
				im images/son/194.jpg
				son H-hiiii~
				player This slutbunny outfit's pre-torn! Now, make like a good little rabbit.
				son W-what should I...
				player You already know what to do, slut.
				son ...
				im images/son/195.jpg
				son <i>This is so humiliating... But...</i>
				player I will say, you're a lot less vocal when your mom's not involved.<br>Let me see if I can fix that.
				im images/son/197.jpg
				son HMMMPH~?!
				t Not suspecting a quick and relentless assault on his piddly little member, all sonF can do is struggle, moan, and shudder as you apply a pair of vibrators to his adorably tiny sack. It does have the added benefit of causing his vocalizations to give a nice vibrating feeling to your own cock though.
				t And soon enough...
				im images/son/198.jpg
				son Glhhf~!
				im images/son/199.jpg
				son Klllaaah~!<br>*Cough* *Cough*!
				im images/son/200.jpg
				son I... *Cough*... Are you sure this club is a good fit for me?
				player You're fitting in perfectly~! 
			`);
			break;
		}
		case "sonClub2": {
			writeHTML(`
				define son = sp son; im images/son/bunny.jpg;
				player So, the same outfit as before, huh?
				im images/son/191.jpg
				son ...
				nagatoro Hey, the boy has taste.
				son Y-you're staying here?
				player Yep. I asked nagatoroF to help me make this a little more interesting. Plus, I'll have something nice to show papiF once this is all done.
				son Eh?! What's my mom got to do with this?!
				t ...
				im images/son/201.jpg
				son Th-th-this is... T-too much sensation~!
				player What's that? higher?
				im images/son/202.jpg
				son H-h-hoooooh~
				im images/son/203.jpg
				son A-and why are you recording this?
				im images/son/204.jpg
				nagatoro Well, playerF said we could use it to draw in more members, but we can't exactly advertise our group like it is now.
				player I told you, I'll be making changes to the school!
				nagatoro Sure, and this definitely <i>isn't</i> just fap material~
				player Whatever. Now, sonF, make like a good rabbit and...
				im images/son/205.jpg
				son Oooough~! My ass~!
				player Bounce!
				im images/son/206.jpg
				son Hah~! P-please, mercy! I ca... I cuh... I...
				im images/son/207.jpg
				son Cuuuuumming~!
				im images/son/208.jpg
				nagatoro Look at him splurt! Hey, hey sonF, look at the camera and say cheese!
				im images/son/209.jpg 
				son Guh... Dun lookit... Che...
				nagatoro Nice, now gimme a smile!
				son Nuh... 'ming... 'gain...
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
				im images/papi/213.jpg
				t The two moan in unison, unable to coherently form words anymore as their condoms fill with the very last bit of leaking essence. You push yourself to your limits, the room filled with the dark air of foul magic and the worldless gasping and panting of two total sluts who want nothing more than to bask in this feeling forever.
				t All too soon, you collapse backwards. 
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