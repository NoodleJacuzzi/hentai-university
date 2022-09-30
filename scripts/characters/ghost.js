var character = {index: "ghost", fName: "Sadako", lName: "Yamamura", trust: 0, encountered: false, textEvent: "", met: false, color: "#2388ED", author: "Penguinthunder", artist: "Vanitas", textHistory: "", unreadText: false,};

var logbook = {
	index: "ghost", 
	desc: "A restless spirit, longing for affection and willing to recieve it from anyone by any means necessary",
	body: "Such a voluptious body, there's no way she could have have been single when she was alive",
	clothes: "A plain white dress is usually not much to look at, but with how it clings to her body she might as well be naked",
	home: "Unknown",
	tags: "Titfuck, vaginal, blowjob, yokai",
	artist: "Artist: Vanitas",
	author: "Author: Penguinthunder",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "introghost", name: "Strange presence", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 0, trustMax: 0, top: 0, left: 0, day: "both",}, 
    {index: "research", name: "Who is Sadako, Yamamura?", location: 'playerHouse', time: "Morning", trustMin:20, trustMax: 20, itemReq: "", top: 0, left: 0, day: "both",},
    {index: "backformore", name: "You feel Sadako watching you.", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 30, trustMax: 30, top: 0, left: 0, day: "both",},
	{index: "reallyghost", name: "Gou seems off", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 35, trustMax: 35, top: 0, left: 0, day: "both",},
	{index: "unfinished", name: "Sadako's waiting for you", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 40, trustMax: 40, top: 0, left: 0, day: "both",},
	{index: "gettingbetter", name: "Sadako appears at your bedside", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 45, trustMax: 45, top: 0, left: 0, day: "both",},
	{index: "questions", name: "Gou is talking to Sadako", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 50, trustMax: 50, top: 0, left: 0, day: "both",},
	{index: "bath", name: "You're very very tired", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 55, trustMax: 55, top: 0, left: 0, day: "both",},
	{index: "cow", name: "Gou is greating you with coffee in his hands", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 60, trustMax: 60, top: 0, left: 0, day: "both",},
    {index: "wheretonext", name: "You might have an idea for Sadako", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 80, trustMax: 80, top: 0, left: 0, day: "odd",},
	{index: "ghostfinal", name: "Your lovely wife is waiting for you", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 100, trustMax: 100, top: 0, left: 0, day: "odd",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
    writeHTML(`
		define ghost = sp ghost;
		define player = sp player;
	`);
	switch (name) {
		case "introghost": { 
			writeEvent('ghost1');
			writeFunction("loadEncounter('system', 'newDay')", "Go to bed");
			raiseTrust('ghost', 20);
			break;
		}
		case "research": {
			if(checkTrust('ghost') <29){
				unencounter("ghost");
				writeText("The night with that apparition still plays in your head.");
				writeText("You plop down on your desk chair and start to search on the internet for Sadako Yamamura. After an hour or so of sifting through profiles and reddit forums you come across an old Myspace account named after her.");
				writeSpeech("player", "", "Myspace? Really?.....God I'm old");
				writeText("Theres a link to a reddit forum with her phone number attatch in the profile. Strange...She looks like your average young japanese girl but all the reddit comments say otherwise.");
				writeText("<i>-What a good lay, that girl was insatiable.--Perfect ass. She fucked me so hard I couldn't stand.--She wouldn't stop asking to be bred. So i didn't stop until I was sure she was pregnant.-</i>");
				writeSpeech("player", "", "God these guys are disturbing but it seems she was as lustful in life as she is in death. So why is she dead?");
				writeSpeech("player", "", "Let me see if there's a link or something to obituaries. I just need to know why is she targeting me.");
				writeText("Someone linked the news report to the forum.");
				writeText("<i>Yamamura, Sadako, age 23 lived an eventful life of many sexual partners to ensure a chance at becoming a mother. The family claims, prior to a traumatic incident at a very young age involving a previous family member she returned severly mentally ill and had a strange obsession of wanting a child. After an intervention with the family concerning her many partners, she went to consult a doctor about her progress on fertilization. She was expecting to be told how far long she was, however she was greeted with ovium cancer.</i>");
				writeSpeech("player", "", "Cancer? Shit that's heavy.");
				writeText("You feel the presence of eyes glaring at you. But this time with an overwelming a feeling of sadness building inside you. You know shes watching.");
				writeText("You continue to read. <i> On November 6th 2015 she took her own life after being told her utreus will never recover and the hope of pregnancy is no longer possible. </i>");
				writeSpeech("player", "", "That's rough. Lets see... why attach to me though? If Gou was here he'd probably say something stupid like my dick revives the dead.");
				writeSpeech("player", "", "Maybe its all the sex I keep having. Not sure what that looks like in the realm of spirits but for someone as horny as her I imagine its like a big neon sign saying <B>Fuck Me</B>.");
				writeText("Though no reply from her is given you feel the eyes once on you gone.");
				writeSpeech("player", "", "No use in being shy now. But if you want more of me when I get back from work, I don't mind.");
				writeFunction("changeLocation('playerHouse')", "Time to get going");
				if(checkTrust("ghost")== 20){
				setTrust("ghost", 30);}
			break;
			}
        }
		case "backformore": {
			if(checkTrust('ghost') <34){
				writeEvent('ghost2');
				writeFunction("loadEncounter('system', 'newDay')", "Go to bed");
				if(checkTrust("ghost")== 30){
				setTrust("ghost", 35);}
			break;
			}
        }
        case "reallyghost": {
			if(checkTrust('ghost') <39){
				writeText("succubusF is searching the room. He seems distraught.");
				writeSpeech("player", "", "What's wrong succubusF?");
				writeText("He stops and comes towards you. He begins sniffing your body.");
				writeSpeech("succubus", "", "Ever since I caught you jerking off there's been something weird about your place. Like someone's here stealing your cum from me I just can't see them but I know they're. So start talking who was here that night?");
				writeText("<i>Someone seems jealous.</i>");
				writeSpeech("player", "", "Alright you got me. I've been fucking a ghost.");
				writeText("succubusF stops sniffing you and looks at you. Once he realizes you're serious he busts out laughing.");
				writeSpeech("succubus", "", "My god, thats funny. You can't be serious. A ghost? Like Ray Parker Jr. level ghost? You fucking Slimer?");
				writeText("He falls to the ground dying with laughter.");
				writeSpeech("succubus", "", "Does-does busting make you feel good?");
				writeText("While it is very funny Sadako seem to take offence. You feel her malice building. succubusF freezes at the feeling of being watched by Sadako. he quickly shoots up and attaches himself to you.");
				writeSpeech("player", "", "What's wrong succubusF? Feel like someone's watching you?");
				writeSpeech("succubus", "", "Shut up... This is weird. I thought you were kidding but I feel awful. Something's threatening me. I may be a demon but I don't really have many run-ins with ghost you know.");
				writeSpeech("player", "", "Both you calm down will ya. That means you too Sadako! If you're gonna be attach to me you need to learn to share.");
				writeText("succubusF pulls off of you. Feeling less scared he plops down on the desk chair.");
				writeSpeech("succubus", "", "Alright alright I get it I'm sorry. What's their deal anyway?");
				writeText("You explain to succubusF Sadako's life and why she's attached to you.");
				writeSpeech("succubus", "", "She wants to get pregnant and she thinks you can impregnate her? Well, it's bad logic but hey, I don't know shit about ghost.");
				writeSpeech("player", "", "I'm not sure how this works either but I'm more than happy to try if it means I get to keep dumping my cum in her.");
				writeSpeech("succubus", "", "Very typical of you to think with your dick before your head. Whatever next time give me a heads up and I'll leave you two to your fun. But you owe me.");
				writeSpeech("player", "", "Thanks succubusF.");
				writeFunction("loadEncounter('system', 'newDay')", "Go to bed");
				if(checkTrust("ghost")== 35){
				setTrust("ghost", 40);}
				break;
			}
		}
		case "unfinished": {
			if(checkTrust('ghost') <44){
				writeEvent('ghost3');
				writeFunction("loadEncounter('system', 'newDay')", "Go to bed");
				if(checkTrust("ghost")== 40){
				setTrust("ghost", 45);}
				break;
			}
		}
		case "gettingbetter": {
			if(checkTrust('ghost') <46){
				writeEvent('ghost4');
				writeFunction("loadEncounter('system', 'newDay')", "Go to bed");
				if(checkTrust("ghost")== 45){
				setTrust("ghost", 50);}
				break;
			}
		}
		case "questions": {
			if(checkTrust('ghost') <51){
				writeText("You walk in on succubusF talking to Sadako. It seems he's giving her speech lessons. But why?");
				writeSpeech("succubus", "", "Oh playerF you're home?.");
				writeSpeech("player", "", "Sorry to interrupt but succubusF can I speak to you outside?");
				writeText("Sadako fades away while you and succubusF head outside the apartment.");
				writeSpeech("succubus", "", "Alright what's this about?");
				writeSpeech("player", "", "succubusF I know you too well to think you're doing this out of the kindness of your heart. So start talking.");
				writeSpeech("succubus", "", "What about helping Sadako talk and manifest longer? It's a simple experiment.");
				writeSpeech("player", "", "Experiment?");
				writeSpeech("succubus", "", "Ya, I had a idea after you called me a while back so you two could have fun. Like I said before I'm not experience with ghosts and I don't have many run-ins with them. I thought what if we could get her to be our median?");
				writeSpeech("player", "", "What are you suggesting?");
				writeSpeech("succubus", "", "Think, if you're able to have sex with her then that means there has to be others right?");
				writeSpeech("player", "", "And you want her to lead us to them.");
				writeSpeech("succubus", "", "Exactly! What could be better than having sex with one ghost when you could be having sex with multiple?");
				writeSpeech("player", "", "You have a point but remember she's here because of her desire to get pregnant.");
				writeSpeech("succubus", "", "She could possess someone to do that, although that's not a guarantee.");
				writeSpeech("player", "", "Look I'm not gonna bring that up right now, but I don't mind you teaching her. Just don't teach her anything stupid will ya?");
				writeSpeech("succubus", "", "Honestly you're such a buzzkill. Now if you don't mind I have some teaching to do.");
				writeSpeech("player", "", "Fine but keep it down, I have work tomorrow.");
				writeFunction("loadEncounter('system', 'newDay')", "Go to bed");
				if(checkTrust("ghost")== 50){
				setTrust("ghost", 55);}
				break;
			}
		}	
		case "bath": {
			if(checkTrust('ghost') <56){
				writeEvent('ghost5');
				writeFunction("loadEncounter('system', 'newDay')", "Go to bed");
				if(checkTrust("ghost")== 55){
				setTrust("ghost", 60);}
				break;
			}
		}		
		case "cow": {
			if(checkTrust('ghost') <61){
				writeEvent('ghost6');
				writeFunction("loadEncounter('system', 'newDay')", "Time for work");
				if(checkTrust("ghost")== 60){
				setTrust("ghost", 80);}
				break;
			}
		}	
		case "wheretonext": {
			if(checkTrust('ghost') <81){
				writeText("After a lot of brainstorming, you think you have a usage for Sadako other than sex.");
				writeSpeech("player", "", "Sadako you here? I have a proposition for you.");
				writeText("Almost immediately she fades into reality behind you.");
				writeSpeech("ghost", "", "Yes lover what is it you desire?");
				writeSpeech("player", "", "Yes I, wait 'lover'? Nevermind that I think you have untapped potential. In a short amount of time succubusF was able to have you not only speak better but hold your form better too. If we kept this up you could-");
				writeSpeech("ghost", "", "After our last intimate love making I decided to abandon......my quest for a child. Instead let me be your concubine.");
				writeSpeech("player", "", "Oh well I guess I have no real reason to say no to that but are you sure you don't want to pass on instead?");
				writeSpeech("ghost", "", "succubusF has informed me of your goals......I have no purpose left here but I like feeling of being useful to you. Please let me help you.");
				writeText("This definitely went into a different direction than planned but it's not at all a loss. You take a moment to think.");
				writeSpeech("player", "", "I got it! You said you want to help me with my crusade of lust correct?");
				writeSpeech("ghost", "", "Yes I wish just to be useful to you.");
				writeSpeech("player", "", "succubusF had a theory before that we could find more ghost like you. If you exist then surely there must be more horny spirits out there.");
				writeSpeech("ghost", "", "I can assure you my love I have met others, though they are not as experienced as me. While scary, there is a plethora of exotic spirits our there looking for a cock as great as yours.");
				writeSpeech("player", "", "It's settled then, Sadako while you will be my concubine I'd like you to find me other spirits to satisfy my lust.");
				writeSpeech("ghost", "", "I will start my search immediately.");
				writeText("With a soft kiss on your cheek, she fades away.");
				writeSpeech("player", "", "succubusF was right. Maybe I am a Ghostbuster.");
				writeFunction("loadEncounter('system', 'newDay')", "Time for bed");
				if(checkTrust("ghost")== 80){
				setTrust("ghost", 100);}
			break;
			}
        }	
		case "ghostfinal": {
			if(checkTrust('ghost') <101){
				writeText("Sadako is waiting for you near the bed.");
				writeSpeech("ghost", "", "Evening honey! What can I do for you tonight? Dinner, bath, or maybe.....me?");
				writeBig("images/ghost/stand.jpg");
				writeFunction("loadEncounter('ghost', 'ghostfinalbath')", "Actually a bath sounds nice.");
				writeFunction("loadEncounter('ghost', 'ghostfinalsoft')", "I'm quite tired, can you service me tonight?");
				writeFunction("loadEncounter('ghost', 'ghostfinalrough')", "Oh I'll be taking you tonight.");
			break;
			}
        }	
		case "ghostfinalbath": {
			if(checkTrust('ghost') <101){
				writeEvent('ghost7');
				writeFunction("loadEncounter('system', 'newDay')", "Time for bed");
				break;
			}
		}			
		case "ghostfinalsoft": {
			if(checkTrust('ghost') <101){
				writeEvent('ghost8');
				writeFunction("loadEncounter('system', 'newDay')", "Time for bed");
				break;
			}
		}	
		case "ghostfinalrough": {
			if(checkTrust('ghost') <101){
				writeEvent('ghost9');
				writeFunction("loadEncounter('system', 'newDay')", "Time for bed");
				break;
			}
		}	
	}
}

var eventArray = [
	{index: "ghost1", name: "First Impression",},
	{index: "ghost2", name: "Second Impression",},
	{index: "ghost3", name: "Rough",},
	{index: "ghost4", name: "Soft",},
	{index: "ghost5", name: "Bath",},
	{index: "ghost6", name: "Devotion",},
	{index: "ghost7", name: "Bath 2.0",},
	{index: "ghost8", name: "Soft 2.0",},
	{index: "ghost9", name: "Rough 2.0",},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "ghost1": { 
			writeText("You get comfortable as usual, succubusF said he'd be out for the night. Guess it's you and your right hand tonight.");
			writeText("Something feels off. Like someone's watching you.");
			writeBig("images/ghost/somethingswrong.jpg", "art by Vanitas");
			writeSpeech("player", "", "<i>succubusF, is that you peeking on me?</font></i>");
			writeText("You await an answer but....nothing.");
			writeSpeech("player", "", "Any kind of response would be nice.");
			writeText("Suddenly you hear an array of noises. Wet splashes, gurgling of pipes and muffled thuds. You look around to see handprints forming on the glass, and strange wet spots all over the walls.")
			writeBig("images/ghost/strange.jpg", "art by Vanitas");
			writeText("You recoil at the sight, but lose intrest assuming it has something to do with succubusF.");
			writeSpeech("player", "", "Alright ya little shit, if you don't wanna help me finish then I'm going to bed. I'm too tired for this.");
			writeText("You turn the lights off and get ready to sleep. Still unable to shake off that uneasy feeling or that erection.");
			writeText("A few minutes pass. You awaken to the feeling of a considerable amount of weight pressing onto your groin, followed by an intense warmth building at the base of your cock.");
			writeBig("images/ghost/awake.jpg");
			writeSpeech("player", "", "<i>Really succubusF. Now you want it?<i>");
			writeText("No response...but you hear a quiet panting coming from near your groin. You lean up to see if it's really succubusF.");
			writeText("Shocked, you are met with a voluptous woman perched atop your crouch.");
			writeBig("images/ghost/cowgirl.jpg", "art by Vanitas");
			writeSpeech("player", "", "Well, not sure how you got in here. But by all means don't let me ruin your fun.");
			writeText("This woman seems strange like she's not really there. There's an aura around her that makes your hair stand on end, like a cold chill running up your spine. But the longer you stare, the harder you get.");
			writeSpeech("ghost", "", "I-I.....W-Want...");
			writeText("You remain still as she guides your cocks tip to meet her dripping pussy. She slowly pushes you inside her. Her folds gripping your cock tighter and tighter as she lowers herself onto you. She lets out a soft moan once she hits the base of your cock");
			writeBig("images/ghost/cowgirl1.jpg");
			writeBig("images/ghost/cowgirl2.jpg");
			writeText("You shudder at the feeling of being completely enveloped.");
			writeSpeech("ghost", "", "Mmm~...S-So.......Big.");
			writeText("She starts slowly grinding her hips back a forth, having the head of your cock press against her cervix. Unfortunately for you, you're already close from not finishing earlier."); 
			writeSpeech("player", "", "So tight. I-I'm gonna...");
			writeText("She feels your cock swell and gives you a nice short bounce to send you over the edge.");
			writeBig("images/ghost/cowgirl3.jpg");
			writeSpeech("player", "", "Sorry about that. Nn~ I was backed up. We can go again if you need to cum.");
			writeText("You reach for her hips before an invisible force locks your arms back down. She glares at you instensly.");
			writeBig("images/ghost/cowgirl4.jpg");
			writeText("She adjusts her stance. Placing her hands firmly onto your chest, she leans closer to your face.");
			writeSpeech("player", "", "W-What are you?");
			writeText("You say struggling to break free of whatever is holding you down");
			writeText("She lifts her hips and starts rapidly pounding her ass down onto your shaft.");
			writeBig("images/ghost/cowgirl5.jpg");
			writeBig("images/ghost/cowgirl6.jpg");
			writeText("She leans up to your ear to whisper");
			writeSpeech("ghost", "", "Nn~Yamamura....Sss-Sadako...");
			writeText("Her moans start to escape her more and more as she pants into your ear. Her riding becomes sporadic as she brings herself to climax. Freezing up, she strangles your cock as her pussy pulsates around your thick shaft. Cumming for the first time in year.");
			writeSpeech("ghost", "", "Mmmmmmmmm...Mm-more....please...");
			writeText("She readjusts to an upright position. You feel the weight of being held down slowly fading. Realizing this, you begin thrusting rapidly under her.");
			writeBig("images/ghost/cowgirl7.jpg");
			writeText("She gasps loudly. Clentching down hard on your cock she struggles to maintain form. Her appearance starts to waver, becoming wavy and etheral. And yet you continue to thrust into her like an animal in heat.");
			writeSpeech("player", "", "I'm getting close.");
			writeSpeech("ghost", "", "P-please cum....give m-me.....your love....");
			writeBig("images/ghost/cowgirl8.jpg");
			writeText("With a final thrust you press your cocks head against her cervix. Spraying you hot load deep into her her already filled womb.");
			writeSpeech("ghost", "", "So...warm....wish...could...get...pregnant....");
			writeText("As the words escape her lips her body disappears, fading away like she's been wiped off a canvas. The weight on you is lifted as you're left there naked. You look around for her but she's gone.");
			writeText("You collect youreself and go to clean off.");
			writeSpeech("player", "", "What did she say again? Yamamura, Sadako?");
			break;
		}
		case "ghost2": {
				writeText("You feel the eyes of Sadako watching you again. Once again succubusF is out and this time you know what you're getting into.");
				writeText("You undress and lay back onto your bed, cock already rock hard in anticipation. As you lay back you feel a hand catch your hand before it can reach your pillow. Suddenly there's a tight grip on your cock.");
				writeSpeech("player", "", "Sa-da-ko? Trying a different approach? <i> Not that I mind.</i>");
				writeText("She slowly fades in to reality. She's cradling you like a mother, hand on your shaft slowly stroking. Her huge F cup breast swaying inches above your face.");
				writeSpeech("player", "", "How nice. It's been a hot minute sinc-mmph!");
				writeText("Before you can finish she shoves her right nipple into your mouth to suckle on as she jerks you off.");
				writeBig("images/ghost/handjob.jpg", "art by Vanitas");
				writeSpeech("ghost", "", "Sh-shhhhh...sorry....for...last....time...");
				writeText("You allow yourself to be coddled by her. As you start to suck on her nipple she leans into your mouth more. Letting you enjoy more of her tit while she speeds up her stroking along your shaft.");
				writeSpeech("ghost", "", "W-was.....Sel..Selfish.....of me....");
				writeText("Her hand feels smooth despite stroking with such force. While not being in charge is unusual for you, you succumb to the feeling. The sight and taste of her plump breast. The gliding of her hand up and down your cock slowly brings you close. She can sense your orgasm building and quickens her stroking, urging you to cum.");
				writeText("You thrust into her hand letting your cock shoot ropes over her hand onto the bed.");
				writeBig("images/ghost/handjob1.jpg");
				writeBig("images/ghost/handjob2.jpg");
				writeSpeech("player", "", "God that felt great. Aw shit it got on the bed.");
				writeSpeech("ghost", "", "M-messy...will...clean....");
				writeText("She releases you, slowly slithering down your body giving kisses the whole way down. When she reaches your cock she pulls off a moment to lick up the cum on the bed.");
				writeSpeech("player", "", "You really are an addict for cum.");
				writeText("After lapping up the cum she climbs back up to your cock. Giving the shaft a lick from base to tip before forcing your cock down her throat. You gasp at the sudden pleasure of her throat squeezing your cock");
				writeBig("images/ghost/blowjob2.jpg", "art by Vanitas");
				writeSpeech("player", "", "Wow...was not expecting full oral service. You're a lot more tame compared to last time.");
				writeText("She bobs her head up and down, deepthroating your cock nice and slow. Running her tongue along the bottom of your shaft, even giving your balls a quick lick everytime she hit the base. Every few bobs she pulls the tip to the front to circle her tongue around it.");
				writeBig("images/ghost/blowjob.jpg");
				writeSpeech("player", "", "If this is what getting haunted is like, I should have gotten haunted years ago.");
				writeText("She speed up her sucking. Though she's is drooling spit all over your cock, her mouth and throat wrap tightly around your shaft. Slowly coaxing out the cum from your balls.");
				writeSpeech("ghost", "", "Cummph....for....mmmme....");
				writeText("You feel your cum building more and more. Soon you selfishly shoot your load into her throat. Coating her mouth and throat with your thick spunk.");
				writeBig("images/ghost/blowjob1.jpg");
				writeText("She sucks intensely, swallowing all your load. She pulls off for a moment and savors the feeling of cum in her stomach. She starts to crawl up you body but her eyes dart to the door.");
				writeText("You her the door knob rattle before succubusF opens the door.");
				writeSpeech("succubus", "", "I'm home master.");
				writeText("You look over at the door but when you look back at Sadako. She's gone.");
				writeSpeech("player", "", "Damnit succubusF! You couldn't wait like 10 more minutes?");
				writeSpeech("succubus", "", "The fuck did I do? Wait I smell cum....were you jerking off without me?");
				writeSpeech("player", "", "Nevermind that succubusF help me clean off and I'll make us dinner.");
			break;
		}
		case "ghost3": {
				writeText("You come home, immediately feeling Sadako's presence. She's barely holding on being cock-blocked by succubusF last time.");
				writeSpeech("player", "", "Alright Sadako I get it, I'll call succubusF and tell him to stay out for a bit.");
				writeText("You give succubusF call and tell him to give you an hour before coming home. He just about you busting ghost before you hang up. As you get your clothes off your lights slowly fade out as Sadako begins to appear across the room. The lustful aura around her is intense, drawing you in.");
				writeBig("images/ghost/stand.jpg");
				writeSpeech("player", "", "I know you have trouble speaking so tell me. What do you want and how do you want it?");
				writeText("She strips off her white dress and gets down on all fours. Waving her ass at you, you can see her pussy is dripping onto the mattress.");
				writeSpeech("ghost", "", "B-Breed.......me.....fuck......me......<b>HARD</b>");
				writeText("The lust building in you up till now burst out as you kneel down and plunge your thick cock into her soaked pussy. She moans in delight.");
				writeBig("images/ghost/doggy.jpg");
				writeSpeech("ghost", "", "Mmm~so.....big...");
				writeText("You sink your hands into her fat ass, using it for leverage as you start thrusting hard into her.");
				writeText("She moans loudly, forcing her ass back against you.");
				writeSpeech("player", "", "How about this slut?");
				writeText("You bring you hand up and strike her ass hard. She gasp at the feeling. You continue to spank her, enjoying hearing her more and clench around you for every slap.");
				writeBig("images/ghost/doggy1.jpg");
				writeSpeech("ghost", "", "Sti-ings.....so........good....mmph..");
				writeSpeech("player", "", "You've been cumming a lot since I put it in haven't you? Don't worry I'm getting close.");
				writeText("You feel her tense up getting ready for your load. Her clentching becomes too much as you spray your hot cum into her.");
				writeBig("images/ghost/doggy2.jpg");
				writeText("You slowly pull out hearing an audible pop noise as your head is released by her folds. The second you pull out, your cum starts to spill out.");
				writeBig("images/ghost/doggy3.jpg");
				writeSpeech("player", "", "Look at all that cum. You're definitely in my top ten after that.");
				writeSpeech("ghost", "", "P-please......more....");
				writeSpeech("player", "", "Damn you're not broken yet? Lets fix that.");
				writeText("You push her ass down to be flushed with the bed, pull her arm back by the wrist and grab a fistful of hair. She looks back at you, eyes glazed with lust, waiting in anticipation. You shove yourself back in to her slick folds and start pounding her into the bed.");
				writeBig("images/ghost/rough.jpg");
				writeSpeech("ghost", "", "F-fill.....mmmm.....mme.....m-more...");
				writeText("You feel her pussy throb each time you hit her cervix. With every thrust you feel your second load building closer and closer.");
				writeSpeech("player", "", "I'm c-cumming.");
				writeText("You hilt youself against her emptying the rest of your balls directly into her partially filled womb. Her body spasms under you as she feels her womb filling rapidly.");
				writeBig("images/ghost/rough1.jpg");
				writeText("You feel her body go limp and soon after she loses shape. Slowly fading out once again.");
				writeSpeech("player", "", "Phew~ what a workout. Haven't been this rough since succubusF made me drink the dom potion. I gotta get ready for bed.");
			break;
		}
		case "ghost4": {
				writeText("Unlike previous your encounters with Sadako, this time she's fully visible.");
				writeSpeech("player", "", "This is new. Are you trying to be more direct?.");
				writeSpeech("ghost", "", "Getting... better at....showing, and.....talking...succubusF..... helps me....");
				writeSpeech("player", "", "succubusF? Really? Surpising to see him doing something so generous for once. Well whatever he's planning I'll ask him later, meanwhile you seem ready to go.");
				writeText("Both of you start to undress. She walks over to you slowly and presents her perky breast to you.");
				writeBig("images/ghost/grope.jpg");
				writeSpeech("player", "", "God I love your tits.");
				writeText("You grab hold of her breasts and fondle them roughly. Kneading them like fresh dough.");
				writeBig("images/ghost/grope1.jpg");
				writeText("Soft moans start to escape her as you run your fingers over her hard nipples. You bring both tits together and place them in your mouth, sucking and licking her nipples.");
				writeBig("images/ghost/grope2.jpg");
				writeSpeech("ghost", "", "~Mmmm p-please......don't tease...me so.........mmmmuch......");
				writeText("All this focusing on breast is giving you an idea. You release her breast and push her onto the bed. As if she read you mind, she adjusts onto her back and pushes her tits together for you. You mount yourself on top of her abdomen with your rock hard cock hovering over her breast. You grab her tits by the nipples and begin thrust your cock between them.");
				writeBig("images/ghost/titfuck.jpg");
				writeSpeech("ghost", "", "D-don't pull......so hard..... they're.....sensitive....");
				writeText("She moans from you yanking on her nipples. As you thrust her soft breast massage your cock from base to tip, coaxing the sperm from your balls. It isn't long before you feel yourself getting close and selfishly spray your cum over her face.");
				writeBig("images/ghost/titfuck1.jpg");
				writeBig("images/ghost/titfuck2.jpg");
				writeText("Though left unsatisfied she gathers the cum on her face and funnels it into her mouth. Cleaning herself off she remains laying under you.");
				writeText("Seeing how wet she made the bed you figure its time to penetrate her. You move back to her legs and place them around you. She wimpers at you.");
				writeBig("images/ghost/missionary.jpg");
				writeSpeech("ghost", "", "P-please......I can't......wait any.....longer.....");
				writeText("You bring your cocks head to her entrance and thrust deep into her. She cums immediately, her pussy convulsing around your shaft. You don't let up however and continue to thrust.");
				writeBig("images/ghost/missionary1.jpg");
				writeText("You pound her over and over until you feel her cum again. This time her juices squirt out around the base of your cock as she moans loudly. You pull youself out of her and roll her to her side. Getting behind her you thrust back into her slick pussy. Pulling her face to yous for a deep kiss.");
				writeBig("images/ghost/spoon.jpg");
				writeBig("images/ghost/spoon1.jpg");
				writeSpeech("ghost", "", "Feels......so mmmm.....good.......more....");
				writeText("She moans and begs into your mouth as you passionately kiss. She rolls her hips back into you having her cervix grind on the head of your cock with each thrust. Grinding against her G-spot you feel your pleasure rising.");
				writeSpeech("player", "", "I'm close.");
				writeSpeech("ghost", "", "Cum... in me..... playerF....");
				writeBig("images/ghost/spoon2.jpg");
				writeText("Both kissing fantically you release your load into her womb. Her body spasms in your arms but unlike last time she holds her shape. Though panting from her orgasm she pushes back into you to cuddle.");
				writeText("Tired from your fun, you decide not to question it and get comfortable behind her while still deep inside. Only a few seconds past before you drift off to sleep.");
			break;
		}		
		case "ghost5": {
				writeText("You practically crawl through the door exhausted from a day full of work and sex.");
				writeSpeech("succubus", "", "Geez, you look like shit.");
				writeSpeech("player", "", "Thanks succubusF. Nice to know I look how I feel. I'm gonna go take a bath.");
				writeSpeech("succubus", "", "Alright I'll be here.");
				writeText("You undress and start the water for the bath. As the tue starts to fill you start to rinse off. Suddenly there's a sound of gurgling from the pipes.");
				writeSpeech("player", "", "Sadako I'm trying to get clean here. I know you want to play but I'm pretty tired today.");
				writeText("You start lathering up your body when you feel two squishy objects press into your back followed by hand wrapping around you. It's Sadako pressing against you already naked and helping you spread soap on your body.");
				writeSpeech("ghost", "", "I help....you...");
				writeText("You can't help but relax against her from how tense you were. Her hands trace along your chest while she soaps up her breast and rub them along your back. Her hands feel soft against your body and you can't help but get aroused from this feeling");
				writeSpeech("ghost", "", "Feels..... good yes?");
				writeText("You lean back onto her breast as she rubs your chest. Tracing your chest she gravitates down to your legs. While soaping up your legs she brushes your erection. Unable to resist she grips it softly and starts stroking. While you already told her no, you let her do as she pleases. <i> After all it does feel good.</i>");
				writeText("You relax further in her arm as she jerks you off. After a minute or two you quickly snap back and rush over to the bath to turn it off.");
				writeSpeech("player", "", "Thank god I remembered, that could have been bad.");
				writeText("As you turn around you're met with Sadako presenting her soapy breast to you. She jiggles them for you, inviting you to fuck them. Being already hard you step close to her. She wraps her breast around your cock and starts rubbing your cock with them.");
				writeBig("images/ghost/bath.jpg");
				writeText("Already quite worked up from her handjob you softly thrust into her tits. She squeezes them tighter for you as you indulge yourself in her slippery chest. It doesn't take long before you're pushed over the edge and shoot your cum in between her tits.");
				writeBig("images/ghost/bath1.jpg");
				writeBig("images/ghost/bath2.jpg");
				writeText("After calming down you sit back down on your bath stool. Though you are still hard you go to grab the nozzle to rinse off. But as you reach out you're intercepted by Sadako. She grabs your hand and moves it to her ass. You give her plump cheek a squeeze and bring your legs together for her. She climbs over your legs and slowly squats down onto your cock. Wrapping her legs around your body she pushes you deep into her.");
				writeSpeech("ghost", "", "S-sorry.....couldn't wait....");
				writeBig("images/ghost/bath3.jpg");
				writeText("She kisses you and starts to grind her hips at the base of your cock. Her walls squeeze you tightly as she rocks her hips back and forth.");
				writeSpeech("ghost", "", "You're.....too big...hard to.....grind...but........feels so.........gooooooood.");
				writeText("She can't stop from moaning and nether can you. As your cock rubs her cervix she starts to tense up, you can feels she's close. You thrust up into her to bring yourself closer with her. A few seconds a moan in pleasure escapes both of you as climax. Her walls clething around your cock, you empty your balls straight into her womb.");
				writeBig("images/ghost/bath4.jpg");
				writeText("Still kissing, you both relax in each others arms. Shortly after she climbs off of you and grabs the nozzle. You both rinse off and climb into the bath together.");
				writeSpeech("player", "", "Does taking a bath with me even do anything for you? Can't you just fade away and reappear clean.");
				writeSpeech("ghost", "", "It's not......the same.....feeling.....trying to.....stay longer....");
				writeSpeech("player", "", "Fine with me.");
				writeText("After your bath, you give Sadako a kiss before she fades away. By the time you come back out succubusF is already asleep. You give his head a little pat and go to sleep yourself.");
			break;
		}
		case "ghost6": {
				writeSpeech("succubus", "", "Afternoon playerF, you look like shit again so I whipped up this for ya.");
				writeSpeech("player", "", "Thanks. How goes the training of Sadako?");
				writeText("You start downing the coffee to relieve your tiredness.");
				writeSpeech("succubus", "", "Well......about that.");
				writeText("You finish off the coffee when you feel a sudden heat rush through your loins.");
				writeSpeech("player", "", "succubusF... you drugged me didn't you!");
				writeSpeech("succubus", "", "Wowowow slow down. Before you get angry listen. Look I wanted to show you how much progress we made, and I thought why not have even more fun with it.");
				writeText("The heat builds. Suddenly your erection starts to grow and your body starts to sweat.");
				writeSpeech("succubus", "", "Sadako has that whole fixation about being bred, so I thought I'd do both of you a favor and set the scene for you. I get to observe her progress, and you get to fuck her like an animal.");
				writeSpeech("player", "", "succubusF if I wasn't a forgiving person you'd be the one getting ruined tonight.");
				writeText("Finally revealing herself, Sadako appears before you but not in her normal attire. Unlike pervious encounters, she has her hair pulled up into twin ponytails, with a hairband of cow horns on top. Her body being hugged tightly by a thin cowprint bikini with a matching thong as well as cowprint thighhigh socks. The sight alone makes your cock twitch.");
				writeSpeech("ghost", "", "Do you like it....Master? Come to me....please");
				writeText("Excited, you rush over to her and embrace her from behind. Working your shaft between her legs and out the front, you start to grind against them slowly.");
				writeBig("images/ghost/cow.jpg");
				writeSpeech("ghost", "", "I talk better....can change form....I am ready to serve.... you mmmm-Master......please breed me.");
				writeText("You reach around her, sinking your fingers deep into Sadako's soaked pussy. She moans loudly as you move your fingers around.");
				writeBig("images/ghost/cow1.jpg");
				writeText("With her already worked up, you through her to the bed. She turns herself to you, opening her mouth and letting her tongue drape out. She flicks her tongue, inviting you in.");
				writeBig("images/ghost/cow2.jpg");
				writeText("You don't hesitate and thrust your throbbing member into her mouth.");
				writeBig("images/ghost/cow3.jpg");
				writeText("She sucks your cock strongly, shoving it down her throat repeatedly.Her tongue around your shaft is enough to make you cum, but you hold on preventing yourself from cumming early and pull out.");
				writeSpeech("player", "", "Damn this drug is strong. Your mouth feels great Sadako but it's time we get to main event.");
				writeText("She turns around still on her hands and knees. She presents her ass to you but before she can wiggle it, you plant your cock between her cheeks.");
				writeBig("images/ghost/cow4.jpg");
				writeSpeech("ghost", "", "~Ooo, impatient are w-!");
				writeText("You ram yourself inside her before she can finish speaking.");
				writeBig("images/ghost/cow5.jpg");
				writeText("The drug now fully effecting your body, surges through you almost driving your hips for you. You pound into her in animalistic fashion, forcing moans out of her.");
				writeText("She tries to speak but her breath is hitched from your thrusting. Every few thrusts she'd slip out a curse or moan. Before you know it you're on the verge of climax. Without stopping you unleash your load inside of her, she cums with you squeezing around your shaft tightly.");
				writeBig("images/ghost/cow6.jpg");
				writeSpeech("ghost", "", "You're....so rough. I need a moment...");
				writeText("Still hard and ready you pull of her and flip her onto her back. She lays panting but once she sees you still hard she raises her hands out for you to grab. You take each hand but cross her arms to accentuate her bust before you slide back into her.");
				writeBig("images/ghost/cow7.jpg");
				writeText("Immediately you start thrusting again using her arms from leverage. Once again she's speechless beside her moans, constantly shaking in pleasure.");
				writeBig("images/ghost/cow8.jpg");
				writeText("You have no concept of time at this rate, the only thing you can think of is ravaging her more. She's a complete mess, cumming non-stop. You finally feel yourself drawing closer to climax. You let go of her arms and force her down into a mating press, pushing lips against her in a passionate kiss.");
				writeBig("images/ghost/cow9.jpg");
				writeText("No words are said, only moans, grunts and the sound of your love making. The drug seems to be fading but your desire to cum refuses to disappear. Push your cock deep into her she lets out a loud out of breath moan and cums hard. Her orgasm cause her to squirt, tensing up on your shaft pushing you over the edge. You hilt yourself against her cervix and spray your load straight into her womb.");
				writeBig("images/ghost/cow10.jpg");
				writeBig("images/ghost/cow11.jpg");
				writeText("You slowly pull out, your cock being followed by a wave of cum pouring out of her. You move above her with her head in your lap and rest.");
				writeSpeech("player", "", "God, that drug.....was intense.");
				writeSpeech("ghost", "", "Shoo.....full...");
				writeBig("images/ghost/cow12.jpg");
				writeText("As you look around you see succubusF is missing but before you can say anything you hear the front door open.");
				writeSpeech("succubus", "", "I'm back! Jesus you guys just finished? It's already morning you know. Either way I'm assuming that since you spent all night fucking that both my training and drug worked so I'll call that a win.");
				writeSpeech("player", "", "I won't deny that I had fun but maybe next time stop me before I fuck the night away. Shit I gotta head to work, succubusF nice work with her. If we keep this up she might prove very useful in the future.");
				writeText("You get yourself cleaned up and ready for work.");
			break;
		}
		case "ghost7": {
				writeText("She gives a slight nod to you before going to fill the bath. You strip down before heading in behind her. She has you sit down on your stool before rinsing you off.");
				writeSpeech("ghost", "", "Now then, time to soap up.");
				writeText("She takes the soap but instead of pouring it on her hands, she coats her huge tits in soap. She starts to rub her chest up and down your body. For every arm or leg placing it between her breast and using her tits like 2 huge soft loofahs. While relaxing it's almost impossible not to get hard at this feeling.");
				writeSpeech("ghost", "", "Oh~ it feels that good? Well I can't just leave you like that.");
				writeText("She tugs on your hips for you to stand up. Once standing she places your throbbing erection between her soapy cleavage. You start to thrust into her breast");
				writeBig("images/ghost/bath.jpg");
				writeSpeech("ghost", "", "Just feeling how hot it is between my tits makes me so wet.");
				writeText("The soap working as lube makes your cock glide between her breast. Each thrust bringing you closer and closer to climax. You feel it coming but right before you can tell her she lets you slip out.");
				writeSpeech("player", "", "What? Why'd you stop, I was close.");
				writeSpeech("ghost", "", "I know. You'll have to forgive me but I crave your seed too much to have it wasted on my breast.");
				writeText("Before you can respond she pushes you back down onto the stool. She climbs onto you and impales herself on your cock. She moans loudly from the sudden insertion");
				writeSpeech("player", "", "Hey would you mmph-");
				writeText("She locks you in a deep kiss before you can protest and starts to frantically ride your cock.");
				writeBig("images/ghost/bath3.jpg");
				writeText("You can't help but kiss back. After all you can't complain with how great this feels.");
				writeSpeech("ghost", "", "I know I'm mmmm~ being selfish......Please just fill me with your cum......please-");
				writeText("Her breath hitches as she feels you push up against her cervix. You push into her kiss as your cock starts to shoot its load deep into her womb.");
				writeBig("images/ghost/bath4.jpg");
				writeText("While moaning into your mouth, her whole body shakes from her orgasm. Apparently that load was just enough to send her over too. She goes limp trying to say something to you but nothing escapes her mouth.");
				writeSpeech("player", "", "It's okay I'm not mad that felt great. I'll let you rest here for a bit.");
				writeText("You give her a kiss and after a minute or two she lifts herself off of you. After rinsing off the soap and cum both of you soak in the bath for a while. After the bath, you give Sadako a kiss before she fades away. It's already really late so you figure it's time for bed.");
			break;
		}
		case "ghost8": {
				writeSpeech("ghost", "", "Feeling selfish? That's okay just lie down and let me take care of you.");
				writeText("You undress with her and lay down onto the bed. She sits near your head and has you rest it on her thighs. She lets her tits hang by your face and starts to stroke your hard cock.");
				writeSpeech("ghost", "", "Feel free to suck on my breast playerF. They're here for your pleasure.");
				writeText("You lean up and take her nipple into your mouth sucking it softly.");
				writeSpeech("ghost", "", "That's it. That feels really good.");
				writeBig("images/ghost/handjob.jpg");
				writeText("Your body is so relaxed at this point you can only focus on your cock. The tightness of her hand, the speed of the strokes. Your orgasm sneaks up you, before you can warn Sadako-");
				writeBig("images/ghost/handjob1.jpg");
				writeSpeech("ghost", "", "Oh~ thats it keep it cumming.");
				writeBig("images/ghost/handjob2.jpg");
				writeSpeech("player", "", "Sorry it felt too good. Man it got my legs.");
				writeSpeech("ghost", "", "Sit up honey I'll take care of it.");
				writeText("Once you sit up for her she starts to lick up the cum on the bed. Slowly crawling up your legs licking the cum off until she reaches your throbbing member.");
				writeSpeech("ghost", "", "Hard again?");
				writeSpeech("player", "", "What? It felt goo-");
				writeBig("images/ghost/blowjob.jpg");
				writeText("She shoves your cock into her mouth, swirling her tongue around the tip.");
				writeSpeech("player", "", "Hey I was-");
				writeBig("images/ghost/blowjob2.jpg");
				writeText("She cuts you off again by pushing your cock down her throat. Now deepthroating you, her tongue lashes your balls every time she hits the base of your cock. It's no good, you can't get the words out.");
				writeBig("images/ghost/blowjob1.jpg");
				writeText("You cum right down her throat. She swallows all your of load not even hesitating.");
				writeSpeech("ghost", "", "You always taste so good I can't help myself. Are you ready for the main course?");
				writeText("She moves up your body and pushes your top back down onto the bed. She perches herself above your cock, rubbing her dripping wet pussy along its shaft.");
				writeSpeech("player", "", "I'm always ready for more.");
				writeText("She lifts your cock up and lowers herself down onto it.");
				writeBig("images/ghost/cowgirl1.jpg");
				writeSpeech("ghost", "", "~ooooo your cock feels so good");
				writeBig("images/ghost/cowgirl6.jpg");
				writeSpeech("player", "", "So intense already?");
				writeSpeech("ghost", "", "It's so big......I can't.......get enough!");
				writeText("She continues to bounce rapidly on your cock. Every hit to her cervix sends a pulse of pleasure through both of you.");
				writeSpeech("ghost", "", "C'mon.....cum for playerF...cum fo-");
				writeBig("images/ghost/cowgirl5.jpg");
				writeSpeech("ghost", "", "<B>YES</B>");
				writeBig("images/ghost/cowgirl3.jpg");
				writeText("After pumping her womb full of cum she collapses onto you.");
				writeSpeech("player", "", "Phew that was great.");
				writeSpeech("ghost", "", "So full....I'll get up in a moment.....let me rest....");
				writeText("You hold her to you for the time being and when regained enough strength, she lifts herself off of you. After assisting her in clean up she gives you a kiss and fades away.");
				writeSpeech("player", "", "It's pretty late, I should go to bed.");
			break;
		}
		case "ghost9": {
				writeText("You push her against the wall, she lets out a gasp before being silenced by your lips forced against hers. Kissing passionately you both start to remove your clothes. You throw her to the bed and she remains on her hands and knees, waving her ass a you.");
				writeSpeech("player", "", "Eager are we?");
				writeSpeech("ghost", "", "C'mon playerF don't make me wait. Come <B>fuck</B> this pussy.");
				writeText("Accepting her invitation, you position yourself behind her and plunge your thick cock inside her. She squeals in pleasure as you start to ram her pussy.");
				writeBig("images/ghost/doggy.jpg");
				writeSpeech("ghost", "", "That's it! Yes fuck me!");
				writeSpeech("player", "", "Shut up bitch!");
				writeText("You start to spank her ass hard. Each hit makes her clentch tightly around you.");
				writeBig("images/ghost/doggy1.jpg");
				writeSpeech("ghost", "", "~MMM Give me that fat <B>cock</B>!");
				writeText("She's been cumming quite often since you started spanking her. Her moans and dirty talking is becoming too much for you.");
				writeSpeech("ghost", "", "OOH!");
				writeBig("images/ghost/doggy2.jpg");
				writeText("Though you just came inside her you're not done. You grab her arm and push her down. With one hand on her arm and one in her hair you have her pinned. You start relentlessly plowing her into the bed.");
				writeBig("images/ghost/rough.jpg");
				writeText("With her face in the mattress she only lets out muffled squeals in delight with a few curse words thrown in. She's trying to continue her dirty talk but can't get the words out from your pounding."); 
				writeSpeech("player", "", "What's that? I don't think I caught that.");
				writeText("You lift her head up by her hair, seeing how much of a mess her face is.");
				writeSpeech("ghost", "", "Cum for meeeeeeeee.......Fill my womb pleaseeeeee-");
				writeText("That despreate begging was enough to send you over. You hilt yourself deep inside her before emptying your balls straight into her womb.");
				writeBig("images/ghost/rough1.jpg");
				writeText("Her body spasms under you before going limp. You pull yourself out of her, your cum cum pouring out onto the sheets. The bed is soaked under her, she must have pissed herself in pleasure.");
				writeSpeech("player", "", "God that felt good. Thanks for being my cocksleeve this evening Sadako.");
				writeText("There's a soft moan in response but you can tell she's out of it. You decide to clean yourself off and let her rest. You'll give her a bit before waking her.");
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
	{index: "reward", requirements: "?trust ghost 100;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			writePhoneImage("images/ghost/grope.jpg", "Art by Himitsu Kessha Vanitas");
			writePhoneSpeech("ghost", "", "Not all characters have dedicated endings, ghostF is one of them. Still, you've completed ghostF as much as possible!");
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