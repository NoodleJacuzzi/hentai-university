var character = {index: "nikki", fName: "Nikki", lName: "Hunt", trust: 0, encountered: false, textEvent: "", met: false, color: "#445B6D", author: "CryptoGreek", artist: "Enoshima Iki", textHistory: "", unreadText: false,};

var logbook = {
	index: "nikki", 
	desc: "A university student with fairly high marks in every course without exception - despite looking fairly tired most of the time, she also seems remarkably diligent.",
	body: "She's a bespectacled beauty befitting the university; her body fills out her uniform incredibly well, and seeing as she has a <i>lot</i> of PE classes in her files, she's must be quite fit beneath it all.",
	clothes: "She mostly wears a very snug-fitting version of the university's general uniform, though the fit of the uniform is modified to match her specific bodytype.",
	home: "Her files say she lives in an apartment just a stone's throw from the university, so she's almost always on-campus.",
	tags: "Online Exhibitionism, Cuckquean, Cumplay",
	artist: "Enoshima Iki",
	author: "CryptoGreek",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "nikkiEnc1", name: "It looks like one of the students is "+(data.player.time == "Morning" ? "taking a break between classes." : "finished with classes."), requirements: "?trustMax nikki 0; ?location eastHallway;", altName: "", altImage: "",},
	{index: "nikkiEnc1CA", name: "It looks like nikki is talking to another student.", requirements: "?trust nikki 20; ?location eastHallway;", altName: "", altImage: "",},
	{index: "nikkiEnc2", name: "nikki seems to be reading a textbook alone nearby.", requirements: "?trust nikki 30; ?location northHallway; ?parity odd;", altName: "", altImage: "",},
	{index: "nikkiEnc2", name: "nikki seems to be reading a textbook just down the hall from your office.", requirements: "?trust nikki 30; ?location eastHallway; ?parity even;", altName: "", altImage: "",},
	{index: "nikkiEnc3", name: "nikki seems to be reading another textbook.", requirements: "?trustMin nikki 40; ?trustMax nikki 45; ?location northHallway; ?parity odd;", altName: "", altImage: "",},
	{index: "nikkiEnc3", name: "nikki's writing in a notebook nearby.", requirements: "?trustMin nikki 40; ?trustMax nikki 45; ?location eastHallway; ?parity even;", altName: "", altImage: "",},
	{index: "nikkiEnc4", name: "nikki seems to be studying just down the hall.", requirements: "?trust nikki 50; ?location northHallway; ?parity odd;", altName: "", altImage: "",},
	{index: "nikkiEnc4", name: "nikki's reading a textbook diligently.", requirements: "?trust nikki 50; ?location eastHallway; ?parity even;", altName: "", altImage: "",},
	{index: "nikkiEnc5", name: "nikki is leaning against the wall, reading yet another textbook.", requirements: "?trust nikki 55; ?location northHallway; ?parity odd;", altName: "", altImage: "",},
	{index: "nikkiEnc5", name: "nikki, the ever-diligent student, seems to be reviewing her notes.", requirements: "?trust nikki 55; ?location eastHallway; ?parity even;", altName: "", altImage: "",},
	{index: "nikkiEnc5", name: "nikki is leaning against the wall again, though this time she seems to have a lollipop in her mouth.", requirements: "?trustMin nikki 60; ?trustMax nikki 65; ?location northHallway; ?parity odd;", altName: "", altImage: "",},
	{index: "nikkiEnc5", name: "nikki, the ever-diligent student, seems to be reviewing her notes again, though this time she seems to have a lollipop in her mouth", requirements: "?trustMin nikki 60; ?trustMax nikki 65; ?location eastHallway; ?parity even;", altName: "", altImage: "",},
	{index: "nikkiEnc7", name: "nikki seems to be leaning against the wall again, one hand holding a textbook and the other toying with her hair", requirements: "?trustMin nikki 80; ?trustMax nikki 80; ?location eastHallway; ?parity even;", altName: "", altImage: "",},
	{index: "nikkiEnc7", name: "nikki seems to be leaning against the wall again, toying with her hair while reviewing a notebook", requirements: "?trustMin nikki 80; ?trustMax nikki 80; ?location northHallway; ?parity odd;", altName: "", altImage: "",},
	{index: "nikkiEnc8", name: "nikki seems to be leaning against the wall again, one hand holding a textbook and the other toying with her hair", requirements: "?trustMin nikki 85; ?trustMax nikki 85; ?location eastHallway; ?parity even;", altName: "", altImage: "",},
	{index: "nikkiEnc8", name: "nikki seems to be leaning against the wall again, toying with her hair while reviewing a notebook", requirements: "?trustMin nikki 85; ?trustMax nikki 85; ?location northHallway; ?parity odd;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "nikkiEnc1": {
			if(galleryCheck('kuro1')){
				var hasImage = false;
				console.log("hasImage is currently false");
				for(var i = 0; i < data.phoneImages.length; i++){
					console.log("Now checking the "+i+" phoneImage")
				    if(data.phoneImages[i].src.includes("nikki.jpg")){
				    	console.log("hasImage is now true");
				        hasImage = true;
				    }
				}
				if(hasImage){
					console.log("The player does possess the image.");
					writeText("Actually, isn't that...?");
					writeBig("images/nikki/profile.jpg","Art by Enoshima Iki");
					writeText("Approaching her, it isn't hard to recognize her from the picture on your phone.");
					writeText("It's a pretty different angle, but looking at her in uniform, you actually remember her student file too - nikkiF nikkiL. If you recall correctly, she has pretty great grades in her courses...");
					writeText("She didn't seem like the exhibitionist kind, but you suppose the files can't really contain everything.");
					writeText("You could apporach her if you wanted, though the question is really of how you want to do so...");
					writeFunction("writeEncounter('nikkiEnc1B')", "Carefully show her the picture here");
					writeFunction("writeEncounter('nikkiEnc1A')", "Ask her as a counselor to come to your office first");
				}
				else{
					console.log("The player does not possess the image, but has been overheard.")
					writeBig("images/nikki/profile.jpg","Art by Enoshima Iki");
					writeText("nikkiF nikkiL... You recognize her from her student file. She's taken a wide variety of classes at the university, and always scored well regardless of the subject - especially on the many PE classes.");
					writeText("Aside from that, you only really remember that she requested a custom-fit uniform and that, according to the last counselor's notes, she doesn't keep 'the best company'.");
					writeFunction("writeEncounter('nikkiEnc1C')", "Call out to her");
				}
			}
			else{
					console.log("The player does not possess the image, and has not received a handjob from kuroF.");
					writeBig("images/nikki/profile.jpg","Art by Enoshima Iki");
					writeText("nikkiF nikkiL... You recognize her from her student file. She's taken a wide variety of classes at the university, and always scored well regardless of the subject - especially on the many PE classes.");
					writeText("Aside from that, you only really remember that she requested a custom-fit uniform and that, according to the last counselor's notes, she doesn't keep 'the best company'.");
					writeFunction("writeEncounter('nikkiEnc1C')", "Call out to her");
			}
			writeFunction("changeLocation(data.player.location)", "Leave her be");
			break;
		}
		case "nikkiEnc1A" : {
			passTime();
			writeSpeech("player","","You're nikkiF, right?");
			writeText("She turns her head to face you, blinking once before looking you over.");
			writeSpeech("nikki","","I am, yes. May I help you, playerMister...?");
			writeSpeech("player","","Call me playerF. I'm the new student counselor. I was actually hoping I could speak with you in my office? Nothing's wrong of course, but I wanted to speak with a few of the students while I get settled into my position.");
			writeText("An almost invisible frown appears on her face, quickly replaced by a small, if nervous smile as she nods.");
			writeSpeech("nikki","","Of course. Lead the way, playerMister Counselor.");
			writeText("...");
			writeText("When you arrive, you internally debate whether you want to close the door. You wouldn't want to put her on edge, but given the nature of what you'll be discussing...");
			writeSpeech("player","","Go ahead and take a seat while I shut this.");
			writeText("The soft click of the door rings out in the otherwise silent room, followed by the sound of nikkiF sitting down as you move to sit across from her.");
			writeText("She has an... odd look about her. Not odd in that it's out of place, but almost like it's <b>too</b> in-place. Past attempts at hypnosis have taught you, at this point, that anything <b>too</b> normal is just as suspicious as the extreme.");
			writeText("Keeping her hands folded on her lap in front of her, she quirks her lip into a small, if slightly uncomfortable smile. Makes sense, considering the situation.");
			writeText("Hell, she even got the hands right, with one resting on top of the other close to the abdomen, her pointer finger shifting in place just enough to catch your eye, but not enough to seem really noteworthy. Any regular counselor would think she's a bit nervous.");
			writeText("She's completely calm though, so why in the world is she trying to convince you she's nervous...?");
			writeText("Playing along, you let your smile slip a bit for just a moment as you look down her file. Sure enough, her finger stops in place for a moment.");
			writeSpeech("player","","Truth be told, what I wanted to discuss with you was actually something a bit different.");
			writeText("She pauses slightly, a genuine-seeming look of confusion going across her face as you pull out your phone.");
			writeText("Then, you show her the image, and her expression shifts to something markedly more... neutral.");
			writeSpeech("player","","Your poker face is impeccable.");
			writeSpeech("nikki","","Thank you.");
			writeText("She pauses for a moment, the slight drowsiness from her earlier expression completey replaced by an almost calculating look.");
			writeSpeech("nikki","","Do we want to go over any ground rules? I think it might be a good idea to get any of those out of the way first.");
			writeText("Not a bad idea, but... Well, better to be safe than sorry. She knows about your activities and hasn't been hypnotized...");
			writeSpeech("player","","Before any of that, I'd like to know a bit more about you, if you don't mind.");
			writeText("She pauses for a moment, before nodding simply.");
			writeSpeech("nikki","","Ah, okay - what did you want to know?");
			writeText("You'll need to make her a bit more comfortable before you can hypnotize her, so you'll start out simple...");
			writeText("You reach into your pocket, looping the pendant around your wrist as you speak.");
			writeSpeech("player","","I see that you've taken quite the variety of courses here. Your major is listed as...");
			writeText("You reach for your files, but nikkiF shifts and replies,");
			writeSpeech("nikki","","Ah, business management.");
			writeSpeech("player","","Right, right.");
			writeText("You look over the files a bit, skimming the information for anything of note.");
			writeText("Keeping her hands folded on her lap in front of her, she quirks her lip into a small, if slightly uncomfortable smile. Makes sense, considering the situation.");
			writeText("Hell, she even got the hands right, with one resting on top of the other close to the abdomen, her pointer finger shifting in place just enough to catch your eye, but not enough to seem really noteworthy. Any regular counselor would think she's a bit nervous.");
			writeText("She's completely calm though, so why in the world is she trying to convince you she's nervous...?");
			writeText("Playing along, you let your smile slip a bit for just a moment as you look down her file. Sure enough, her finger stops in place for a moment.");
			writeSpeech("nikki","","You said you wanted to speak with me about something?");
			writeSpeech("player","","I'm looking to get acquainted with some of the students, seeing as I'm new here. And, honestly? My memory isn't the best.");
			writeText("You give a small, self-deprecating laugh as you set the papers down.");
			writeSpeech("player","","You're doing pretty good in your classes, but some of these don't really seem to make sense for a business major. Workplace psychology makes sense, but...");
			writeText("You glance down at the papers.");
			writeSpeech("player","","Well, it might just be me, but film study seems to be a bit disconnected. Was that just a personal-interest thing? I know I took a few classes like that myself.");
			writeText("She perks up slightly, her hands separating and sitting neatly on each thigh now.");
			writeSpeech("nikki","","Ah, a family friend showed me a Hitchcock film some time ago, and I thought it would be good to take a fun course alongside some of the more difficult ones that term.");
			writeText("You bring your hand up from your pocket, the pendant glinting slightly in the light.");
			writeSpeech("player","","And all the PE courses?");
			writeSpeech("nikki","","A sound mind resides within a sound body.");
			writeText("Her eyes move to the pendant for a moment... but she quickly refocuses.");
			writeSpeech("player","","And you have plans for what you'll do after your associate's degree?");
			writeSpeech("nikki","","I think I'll go for a bachelor's, or maybe get a job if I can.");
			writeSpeech("player","","I see.");
			writeSpeech("nikki","","Sorry, could you repeat that? There was a sound in the hall.");
			writeText("She lies pretty well...");
			writeSpeech("player","","I was just talking about your courses. You take PE, you said?");
			writeSpeech("nikki","","Yes, I-");
			writeSpeech("player","","And film history?");
			writeText("She pauses, and her posture shifts a bit as her eyes drift to the pendant again.");
			writeSpeech("nikki","","Yes. A friend-");
			writeSpeech("player","","-showed you a Hitchcock film.");
			writeSpeech("nikki","","Yes.");
			writeText("She blinks once, her brow furrowing slightly.");
			writeSpeech("nikki","","Yes, they-... h-he did.");
			writeSpeech("player","","Ah, are you feeling alright?");
			writeText("You lean forward slightly, the pendant catching the light again.");
			writeSpeech("nikki","","Y-Ye-");
			writeText("She suddenly stops.");
			writeText("Her expression goes completely neutral as she focuses in on you, a startling clarity to them for just a second.");
			writeText("But then, just as suddenly, she seems to relax a bit, but she doesn't bother faking the smile.");
			writeSpeech("nikki","","...Now, how in the <i>world</i> did you do that?");
			writeSpeech("player","","Do... what?");
			writeText("You lower your hands to the desk, her eyes following the pendant for a moment before returning to your face.");
			writeText("Smoothly, she stands up and steps towards the door. There's a brief, brief moment where you freeze... before she closes it, the click of the lock ringing out.");
			writeText("Sitting right back down, she folds her hands on her hips, the same neutral expression on her face... and some sort of spark in her eyes.");
			writeSpeech("nikki","","If you're worried about prying ears, this should be fine.");
			writeSpeech("player","","I'm not sure I know what you're talking about.");
			writeText("This is <b>not</b> going according to plan.");
			writeSpeech("nikki","","No, <i>I'm</i> not sure what I'm talking about - you, playerMister Counselor, are very much aware.");
			writeText("She brings up one of her legs, crossing it over the other with a calm expression.");
			writeText("Once again, her eyes move to the pendant... and she doesn't notice, even when she has to turn her entire head to refocus on you.");
			writeSpeech("player","","Look, I think-");
			writeSpeech("nikki","","I'd like you to do it again.");
			writeSpeech("player","","...Pardon?");
			writeText("Another near-invisible frown... though this time, she doesn't hide it.");
			writeSpeech("nikki","","I am, or at least I consider myself to be, a person of logic and fact. And a simple, immutable fact is this, playerMister Counselor:");
			writeText("She crosses her arms over her chest.");
			writeSpeech("nikki","","When I'm having a serious conversation with someone, <i><b>I do not stutter.</b></i> Therefore, either I'm losing my touch or...");
			writeText("Once again, she pauses slightly, her eyes going to the pendant.");
			writeSpeech("nikki","","...You did it again.");
			writeText("Shaking her head gently, she looks into your eyes...");
			writeText("And you can see that her face is getting flushed.");
			writeSpeech("player","","nikkiF... What do you think I'm doing?");
			writeText("Your tone is measured, but you can't help but let your curiosity leak through.");
			writeSpeech("nikki","","You made me stop thinking. Right in the middle of a conversation, there was <i>nothing.</i>");
			writeSpeech("player","","And when did that happen?");
			writeSpeech("nikki","","After you asked me questions and I answered...");
			writeText("Her eyes go to the pendant once again.");
			writeSpeech("player","","When you answered 'Yes'.");
			writeSpeech("nikki","","...Yes.");
			writeText("Her breathing picks up slightly, before she shakes her head.");
			writeSpeech("nikki","","Why do you keep stopping?");
			writeSpeech("player","","Honestly? Confusion, mostly. Why did you pretend to be nervous?");
			writeSpeech("nikki","","Because it was the best way to interact with you.");
			writeSpeech("player","","...Okay, define 'best'.");
			writeText("She seems to mull over her words for a moment.");
			writeSpeech("nikki","","...Because you seemed like the kind of person who would respond best to a slightly nervous, but largely open university student.");
			writeText("...Well, the fact that you were gunning for this job is proof she isn't wrong.");
			writeSpeech("player","","You were putting on a face to put me at ease.");
			writeSpeech("nikki","","Y-... Yes. Having friends on the faculty is beneficial.");
			writeText("...Oh. Oh!");
			writeSpeech("player","","If the faculty likes you... they'll be more lenient with you. More likely to curve up a grade, more likely to excuse an absence, things like that.");
			writeSpeech("nikki","","Correct.");
			writeSpeech("player","","You really are a business major, aren't you?");
			writeSpeech("nikki","","...Yes?");
			writeText("You shake your head.");
			writeSpeech("player","","Never mind. One last question:<br>Why did you want me to do it again?");
			writeText("A look of genuine confusion goes across nikkiF's face.");
			writeSpeech("nikki","","Because... I liked it? Should there be another reason?");
			writeSpeech("player","","And you liked it because...?");
			writeSpeech("nikki","","...I don't understand the question.");
			writeText("...This is looking like it'll be complicated. Interesting, definitely - but complicated.");
			writeSpeech("player","","I think I need you to come back to talk again some time.");
			writeText("You scribble down your number, handing it to her.");
			writeSpeech("player","","Text me any time. But here's the thing...");
			writeText("You raise your wrist, the pendant hanging from it as her eyes focus on it and glaze over slightly.");
			writeSpeech("player","","We just talked about your grades. Right?");
			writeText("There's a moments pause, before you see the first full, genuine smile on her face.");
			writeSpeech("nikki","","Don't worry about a thing, playerMister Counselor... I know how to keep a secret.<br>Oh, and I hope you don't mind, but expect to see me outside your office more often.");
			writeText("...Not quite what you were going for, but okay.");
			if(data.player.time == "Morning")
				writeSpeech("nikki","","Now, I do have some more classes before I head home, but...");
			else
				writeSpeech("nikki","","I do have to be heading home now, but...");
			writeText("Her expression tightens up into the same pleasant look as before.");
			writeSpeech("nikki","","I look forward to learning more about what you're doing to me, playerMister Counselor~");
			writeText("With that, she stands and leaves, not a hint of excitement being betrayed by her movements.");
			writeText("...Well, that wasn't quite what was expected. Still, at least you won't be bored...");
			setTrust('nikki',30);
			writeFunction("changeLocation(data.player.location)", "Leave her be");
			break;
		}
		case "nikkiEnc1B" : {
			passTime();
			writeSpeech("player","","You're nikkiF, right?");
			writeText("She pauses, looking towards you.");
			writeSpeech("nikki","","I am, yes. You're... the new counselor, yes?");
			writeSpeech("player","","That's me. I actually had a question I wanted to ask you about this phone...");
			writeText("nikkiF smiles slightly, nodding.");
			writeSpeech("nikki","","What's your quest-");
			writeText("When she sees the screen, she pauses.");
			writeText("Then, with a perfectly natural delivery, she says,");
			writeSpeech("nikki","","kuroF's had that problem before. If you want, I can fix it up in your office, though I might end up intruding on you for a while in doing so.");
			writeSpeech("player","","Oh, it's no problem - be my pleasure, really.");
			writeSpeech("nikki","","Then lead the way.");
			writeText("...");
			writeText("When you get into the office, nikkiF calmly shuts the door behind the two of you and, for a moment, seems to pause.");
			writeText("You hear her take a slow, deep breath before she moves to sit on the couch. Her expression is actually almost perfectly neutral as she looks you over.");
			writeSpeech("player","","Your poker face is impeccable.");
			writeSpeech("nikki","","Thank you.");
			writeText("She pauses for a moment.");
			writeSpeech("nikki","","Do we want to go over any ground rules?");
			writeText("Not a bad idea, but... Well, better to be safe than sorry. She knows about your activities and hasn't been hypnotized...");
			writeSpeech("player","","Before any of that, I'd like to know a bit more about you, if you don't mind.");
			writeText("She pauses for a moment, before nodding simply.");
			writeSpeech("nikki","","Ah, okay - what did you want to know?");
			writeText("You'll need to make her a bit more comfortable before you can hypnotize her, so you'll start out simple...");
			writeText("You reach into your pocket, looping the pendant around your wrist as you speak.");
			writeSpeech("player","","I see that you've taken quite the variety of courses here. Your major is listed as...");
			writeText("You reach for your files, but nikkiF shifts and replies,");
			writeSpeech("nikki","","Ah, business management.");
			writeSpeech("player","","Right, right.");
			writeText("You look over the files a bit, skimming the information for anything of note.");
			writeText("Keeping her hands folded on her lap in front of her, she quirks her lip into a small, if slightly uncomfortable smile. Makes sense, considering the situation.");
			writeText("Hell, she even got the hands right, with one resting on top of the other close to the abdomen, her pointer finger shifting in place just enough to catch your eye, but not enough to seem really noteworthy. Any regular counselor would think she's a bit nervous.");
			writeText("She's completely calm though, so why in the world is she trying to convince you she's nervous...?");
			writeText("Playing along, you let your smile slip a bit for just a moment as you look down her file. Sure enough, her finger stops in place for a moment.");
			writeSpeech("nikki","","You said you wanted to speak with me about something?");
			writeSpeech("player","","I'm looking to get acquainted with some of the students, seeing as I'm new here. And, honestly? My memory isn't the best.");
			writeText("You give a small, self-deprecating laugh as you set the papers down.");
			writeSpeech("player","","You're doing pretty good in your classes, but some of these don't really seem to make sense for a business major. Workplace psychology makes sense, but...");
			writeText("You glance down at the papers.");
			writeSpeech("player","","Well, it might just be me, but film study seems to be a bit disconnected. Was that just a personal-interest thing? I know I took a few classes like that myself.");
			writeText("She perks up slightly, her hands separating and sitting neatly on each thigh now.");
			writeSpeech("nikki","","Ah, a family friend showed me a Hitchcock film some time ago, and I thought it would be good to take a fun course alongside some of the more difficult ones that term.");
			writeText("You bring your hand up from your pocket, the pendant glinting slightly in the light/");
			writeSpeech("player","","And all the PE courses?");
			writeSpeech("nikki","","A sound mind resides within a sound body.");
			writeText("Her eyes move to the pendant for a moment... but she quickly refocuses.");
			writeSpeech("player","","And you have plans for what you'll do after your associate's degree?");
			writeSpeech("nikki","","I think I'll go for a bachelor's, or maybe get a job if I can.");
			writeSpeech("player","","I see.");
			writeSpeech("nikki","","Sorry, could you repeat that? There was a sound in the hall.");
			writeText("She lies pretty well...");
			writeSpeech("player","","I was just talking about your courses. You take PE, you said?");
			writeSpeech("nikki","","Yes, I-");
			writeSpeech("player","","And film history?");
			writeText("She pauses, and her posture shifts a bit as her eyes drift to the pendant again.");
			writeSpeech("nikki","","Yes. A friend-");
			writeSpeech("player","","-showed you a Hitchcock film.");
			writeSpeech("nikki","","Yes.");
			writeText("She blinks once, her brow furrowing slightly.");
			writeSpeech("nikki","","Yes, they-... h-he did.");
			writeSpeech("player","","Ah, are you feeling alright?");
			writeText("You lean forward slightly, the pendant catching the light again.");
			writeSpeech("nikki","","Y-Ye-");
			writeText("She suddenly stops.");
			writeText("Her expression goes completely neutral as she focuses in on you, a startling clarity to them for just a second.");
			writeText("But then, just as suddenly, she seems to relax a bit, but she doesn't bother faking the smile.");
			writeSpeech("nikki","","...Now, how in the <i>world</i> did you do that?");
			writeSpeech("player","","Do... what?");
			writeText("You lower your hands to the desk, her eyes following the pendant for a moment before returning to your face.");
			writeText("Smoothly, she stands up and steps towards the door. There's a brief, brief moment where you freeze... before she closes it, the click of the lock ringing out.");
			writeText("Sitting right back down, she folds her hands on her hips, the same neutral expression on her face... and some sort of spark in her eyes.");
			writeSpeech("nikki","","If you're worried about prying ears, this should be fine.");
			writeSpeech("player","","I'm not sure I know what you're talking about.");
			writeText("This is <b>not</b> going according to plan.");
			writeSpeech("nikki","","No, <i>I'm</i> not sure what I'm talking about - you, playerMister Counselor, are very much aware.");
			writeText("She brings up one of her legs, crossing it over the other with a calm expression.");
			writeText("Once again, her eyes move to the pendant... and she doesn't notice, even when she has to turn her entire head to refocus on you.");
			writeSpeech("player","","Look, I think-");
			writeSpeech("nikki","","I'd like you to do it again.");
			writeSpeech("player","","...Pardon?");
			writeText("Another near-invisible frown... though this time, she doesn't hide it.");
			writeSpeech("nikki","","I am, or at least I consider myself to be, a person of logic and fact. And a simple, immutable fact is this, playerMister Counselor:");
			writeText("She crosses her arms over her chest.");
			writeSpeech("nikki","","When I'm having a serious conversation with someone, <i><b>I do not stutter.</b></i> Therefore, either I'm losing my touch or...");
			writeText("Once again, she pauses slightly, her eyes going to the pendant.");
			writeSpeech("nikki","","...You did it again.");
			writeText("Shaking her head gently, she looks into your eyes...");
			writeText("And you can see that her face is getting flushed.");
			writeSpeech("player","","nikkiF... What do you think I'm doing?");
			writeText("Your tone is measured, but you can't help but let your curiosity leak through.");
			writeSpeech("nikki","","You made me stop thinking. Right in the middle of a conversation, there was <i>nothing.</i>");
			writeSpeech("player","","And when did that happen?");
			writeSpeech("nikki","","After you asked med questions and I answered...");
			writeText("Her eyes go to the pendant once again.");
			writeSpeech("player","","When you answered 'Yes'.");
			writeSpeech("nikki","","...Yes.");
			writeText("Her breathing picks up slightly, before she shakes her head.");
			writeSpeech("nikki","","Why do you keep stopping?");
			writeSpeech("player","","Honestly? Confusion, mostly. Why did you pretend to be nervous?");
			writeSpeech("nikki","","Because it was the best way to interact with you.");
			writeSpeech("player","","...Okay, define 'best'.");
			writeText("She seems to mull over her words for a moment.");
			writeSpeech("nikki","","...Because you seemed like the kind of person who would respond best to a slightly nervous, but largely open university student.");
			writeText("...Well, the fact that you were gunning for this job is proof she isn't wrong.");
			writeSpeech("player","","You were putting on a face to put me at ease.");
			writeSpeech("nikki","","Y-... Yes. Having friends on the faculty is beneficial.");
			writeText("...Oh. Oh!");
			writeSpeech("player","","If the faculty likes you... they'll be more lenient with you. More likely to curve up a grade, more likely to excuse an absence, things like that.");
			writeSpeech("nikki","","Correct.");
			writeSpeech("player","","You really are a business major, aren't you?");
			writeSpeech("nikki","","...Yes?");
			writeText("You shake your head.");
			writeSpeech("player","","Never mind. One last question:<br>Why did you want me to do it again?");
			writeText("A look of genuine confusion goes across nikkiF's face.");
			writeSpeech("nikki","","Because... I liked it? Should there be another reason?");
			writeSpeech("player","","And you liked it because...?");
			writeSpeech("nikki","","...I don't understand the question.");
			writeText("...This is looking like it'll be complicated. Interesting, definitely - but complicated.");
			writeSpeech("player","","I think I need you to come back to talk again some time.");
			writeText("You scribble down your number, handing it to her.");
			writeSpeech("player","","Text me any time. But here's the thing...");
			writeText("You raise your wrist, the pendant hanging from it as her eyes focus on it and glaze over slightly.");
			writeSpeech("player","","We just talked about your grades. Right?");
			writeText("There's a moments pause, before you see the first full, genuine smile on her face.");
			writeSpeech("nikki","","Don't worry about a thing, playerMister Counselor... I know how to keep a secret.");
			writeText("...Not quite what you were going for, but okay.");
			if(data.player.time == "Morning")
				writeSpeech("nikki","","Now, I do have some more classes before I head home, but...");
			else
				writeSpeech("nikki","","I do have to be heading home now, but...");
			writeText("Her expression tightens up into the same pleasant look as before.");
			writeSpeech("nikki","","I look forward to <i>nothing,</i> playerMister Counselor.");
			writeText("With that, she stands and leaves, not a hint of excitement being betrayed by her movements.");
			writeText("...Well, that wasn't quite what was expected. Still, at least you won't be bored...");
			setTrust('nikki',30);
			writeFunction("changeLocation(data.player.location)", "Leave her be");
			break;
		}
		case "nikkiEnc1C" : {
			passTime();
			writeSpeech("player","","You're nikkiF, right?");
			writeText("She turns her head to face you, blinking once before looking you over.");
			writeSpeech("nikki","","I am, yes. May I help you, playerMister...?");
			writeSpeech("player","","Call me playerF. I'm the new student counselor. I was actually hoping I could speak with you in my office? Nothing's wrong of course, but I wanted to speak with a few of the students while I get settled into my position.");
			writeText("An almost invisible frown appears on her face, quickly replaced by a small, if nervous smile as she nods.");
			writeSpeech("nikki","","Of course. Lead the way, playerMister Counselor.");
			writeText("...");
			writeText("Arriving in your office, you debate for a moment whether to leave the door open, but ultimately decide to do so. No reason <b>not</b> to be careful.");
			writeText("Sitting down, you smile reassuringly to her.");
			writeSpeech("player","","I see that you've taken quite the variety of courses here. Your major is listed as...");
			writeText("You reach for your files, but nikkiF shifts and replies,");
			writeSpeech("nikki","","Ah, business management.");
			writeSpeech("player","","Right, right.");
			writeText("You look over the files a bit, skimming the information for anything of note.");
			writeSpeech("nikki","","...If you like, I can shut the door.");
			writeSpeech("player","","Ah, I wasn't planning on discussing anything protected under FERPA, if that's what you're worried about..");
			writeText("Keeping her hands folded on her lap in front of her, she quirks her lip into a small, if slightly uncomfortable smile. Makes sense, considering the situation.");
			writeText("Hell, she even got the hands right, with one resting on top of the other close to the abdomen, her pointer finger shifting in place just enough to catch your eye, but not enough to seem really noteworthy. Any regular counselor would think she's a bit nervous.");
			writeText("She's completely calm though, so why in the world is she trying to convince you she's nervous...?");
			writeText("Playing along, you let your smile slip a bit for just a moment as you look down her file. Sure enough, her finger stops in place for a moment.");
			writeSpeech("nikki","","You said you wanted to speak with me about something?");
			writeSpeech("player","","I'm looking to get acquainted with some of the students, seeing as I'm new here. And, honestly? My memory isn't the best.");
			writeText("You give a small, self-deprecating laugh as you set the papers down.");
			writeSpeech("player","","You're doing pretty good in your classes, but some of these don't really seem to make sense for a business major. Workplace psychology makes sense, but...");
			writeText("You glance down at the papers.");
			writeSpeech("player","","Well, it might just be me, but film study seems to be a bit disconnected. Was that just a personal-interest thing? I know I took a few classes like that myself.");
			writeText("She perks up slightly, her hands separating and sitting neatly on each thigh now.");
			writeSpeech("nikki","","Ah, a family friend showed me a Hitchcock film some time ago, and I thought it would be good to take a fun course alongside some of the more difficult ones that term.");
			writeSpeech("player","","And all the PE courses?");
			writeSpeech("nikki","","A sound mind resides within a sound body.");
			writeSpeech("player","","And you have plans for what you'll do after your associate's degree?");
			writeSpeech("nikki","","I think I'll go for a bachelor's, or maybe get a job if I can.");
			writeSpeech("player","","I see.");
			writeText("You nod calmly, looking her over.");
			if(data.player.hypnosis >= 3){
				writeText("This will take a slight change in tactics.");
				writeText("You reach into your pocket, looping your pendant around your wrist before leaning forward.");
				writeText("Resting your elbows on the desk, you smile reassuringly as the pendant catches the light, nikkiF's eyes looking at it for a moment...");
				writeText("...and then another. And another.");
				writeText("She blinks once before refocusing, not even having noticed that her guard dropped for a second there - that her smile had completely dropped.");
				writeSpeech("nikki","","Sorry, could you repeat that? There was a sound in the hall.");
				writeText("She lies pretty well...");
				writeSpeech("player","","I was just talking about your courses. You take PE, you said?");
				writeSpeech("nikki","","Yes, I-");
				writeSpeech("player","","And film history?");
				writeText("She pauses, and her posture shifts a bit as her eyes drift to the pendant again.");
				writeSpeech("nikki","","Yes. A friend-");
				writeSpeech("player","","-showed you a Hitchcock film.");
				writeSpeech("nikki","","Yes.");
				writeText("She blinks once, her brow furrowing slightly.");
				writeSpeech("nikki","","Yes, they-... h-he did.");
				writeSpeech("player","","Ah, are you feeling alright?");
				writeText("You lean forward slightly, the pendant catching the light again.");
				writeSpeech("nikki","","Y-Ye-");
				writeText("She suddenly stops.");
				writeText("Her expression goes completely neutral as she focuses in on you, a startling clarity to them for just a second.");
				writeText("But then, just as suddenly, she seems to relax a bit, but she doesn't bother faking the smile.");
				writeSpeech("nikki","","...Now, how in the <i>world</i> did you do that?");
				writeSpeech("player","","Do... what?");
				writeText("You lower your hands to the desk, her eyes following the pendant for a moment before returning to your face.");
				writeText("Smoothly, she stands up and steps towards the door. There's a brief, brief moment where you freeze... before she closes it, the click of the lock ringing out.");
				writeText("Sitting right back down, she folds her hands on her hips, the same neutral expression on her face... and some sort of spark in her eyes.");
				writeSpeech("nikki","","If you're worried about prying ears, this should be fine.");
				writeSpeech("player","","I'm not sure I know what you're talking about.");
				writeText("This is <b>not</b> going according to plan.");
				writeSpeech("nikki","","No, <i>I'm</i> not sure what I'm talking about - you, playerMister Counselor, are very much aware.");
				writeText("She brings up one of her legs, crossing it over the other with a calm expression.");
				writeText("Once again, her eyes move to the pendant... and she doesn't notice, even when she has to turn her entire head to refocus on you.");
				writeSpeech("player","","Look, I think-");
				writeSpeech("nikki","","I'd like you to do it again.");
				writeSpeech("player","","...Pardon?");
				writeText("Another near-invisible frown... though this time, she doesn't hide it.");
				writeSpeech("nikki","","I am, or at least I consider myself to be, a person of logic and fact. And a simple, immutable fact is this, playerMister Counselor:");
				writeText("She crosses her arms over her chest.");
				writeSpeech("nikki","","When I'm having a serious conversation with someone, <i><b>I do not stutter.</b></i> Therefore, either I'm losing my touch or...");
				writeText("Once again, she pauses slightly, her eyes going to the pendant.");
				writeSpeech("nikki","","...You did it again.");
				writeText("Shaking her head gently, she looks into your eyes...");
				writeText("And you can see that her face is getting flushed.");
				writeSpeech("player","","nikkiF... What do you think I'm doing?");
				writeText("Your tone is measured, but you can't help but let your curiosity leak through.");
				writeSpeech("nikki","","You made me stop thinking. Right in the middle of a conversation, there was <i>nothing.</i>");
				writeSpeech("player","","And when did that happen?");
				writeSpeech("nikki","","After you asked med questions and I answered...");
				writeText("Her eyes go to the pendant once again.");
				writeSpeech("player","","When you answered 'Yes'.");
				writeSpeech("nikki","","...Yes.");
				writeText("Her breathing picks up slightly, before she shakes her head.");
				writeSpeech("nikki","","Why do you keep stopping?");
				writeSpeech("player","","Honestly? Confusion, mostly. Why did you pretend to be nervous?");
				writeSpeech("nikki","","Because it was the best way to interact with you.");
				writeSpeech("player","","...Okay, define 'best'.");
				writeText("She seems to mull over her words for a moment.");
				writeSpeech("nikki","","...Because you seemed like the kind of person who would respond best to a slightly nervous, but largely open university student.");
				writeText("...Well, the fact that you were gunning for this job is proof she isn't wrong.");
				writeSpeech("player","","You were putting on a face to put me at ease.");
				writeSpeech("nikki","","Y-... Yes. Having friends on the faculty is beneficial.");
				writeText("...Oh. Oh!");
				writeSpeech("player","","If the faculty likes you... they'll be more lenient with you. More likely to curve up a grade, more likely to excuse an absence, things like that.");
				writeSpeech("nikki","","Correct.");
				writeSpeech("player","","You really are a business major, aren't you?");
				writeSpeech("nikki","","...Yes?");
				writeText("You shake your head.");
				writeSpeech("player","","Never mind. One last question:<br>Why did you want me to do it again?");
				writeText("A look of genuine confusion goes across nikkiF's face.");
				writeSpeech("nikki","","Because... I liked it? Should there be another reason?");
				writeSpeech("player","","And you liked it because...?");
				writeSpeech("nikki","","...I don't understand the question.");
				writeText("...This is looking like it'll be complicated. Interesting, definitely - but complicated.");
				writeSpeech("player","","I think I need you to come back to talk again some time.");
				writeText("You scribble down your number, handing it to her.");
				writeSpeech("player","","Text me any time. But here's the thing...");
				writeText("You raise your wrist, the pendant hanging from it as her eyes focus on it and glaze over slightly.");
				writeSpeech("player","","We just talked about your grades. Right?");
				writeText("There's a moments pause, before you see the first full, genuine smile on her face.");
				writeSpeech("nikki","","Don't worry about a thing, playerMister Counselor... I know how to keep a secret.");
				writeText("...Not quite what you were going for, but okay.");
				if(data.player.time == "Morning")
					writeSpeech("nikki","","Now, I do have some more classes before I head home, but...");
				else
					writeSpeech("nikki","","I do have to be heading home now, but...");
				writeText("Her expression tightens up into the same pleasant look as before.");
				writeSpeech("nikki","","I look forward to <i>nothing,</i> playerMister Counselor.");
				writeText("With that, she stands and leaves, not a hint of excitement being betrayed by her movements.");
				writeText("...Well, that wasn't quite what was expected. Still, at least you won't be bored...");
				setTrust('nikki',30);
			}
			else{
				writeText("As it is, it'll take a bit of time to do anything with her. For whatever reason, she's intent on convincing you that she's nervous.");
				writeSpeech("player","","Well... Seems to me like things are going pretty good for you thus far.");
				writeText("You smile brightly at her, picking up the papers on the desk.");
				writeSpeech("player","","If it's alright, I'd like to talk with you again sometime. I'd recommend looking into trying to form some connections with businesses now, while you're still in school, so that you at least have options prepared for when you graduate.");
				writeSpeech("nikki","","Ah, I've been looking into that sort of thing, actually. Not much progress though, if I'm being honest...");
				writeText("\"And you're not\", you resist the urge to say.");
				writeSpeech("player","","Well, don't be a stranger. If there's anything you need to talk about, remember that my door is always open to those who need someone to listen.");
				writeText("She smiles brightly, nodding once.");
				writeSpeech("nikki","","I look forward to speaking with you again, playerMister Counselor.");
				writeText("With that, she stands up and heads out.");
				writeText("...Well, might as well get started on preparing.");
				writeText("You're not sure what game she's playing, but that's fine. In the end, you always win anyway...");
				setTrust('nikki',20);
			}
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nikkiEnc1CA" : {
			passTime();
			writeText("When you approach her, you almost call out to her... before realizing she must've already noticed you, as the person she was talking to gives some kind of understanding nod and leaves just as you approach.");
			writeSpeech("nikki","","Ah, playerMister Counselor - how are you today?");
			writeText("She looks up at you with that same measured smile.");
			writeSpeech("player","","I'm doing pretty good, just wanted to ask you something I forgot to mention yesterday - it has to do with your PE credits though, so if you want to discuss it in my office...?");
			writeText("A momentary look of concern seems to pass through her as she nods.");
			writeSpeech("nikki","","Please, lead the way.");
			writeText("...");
			writeText("Sitting down across from her, you smile a bit.");
			writeText("You reach into your pocket, looping your pendant around your wrist before leaning forward.");
			writeText("It's not how you'd normally do it, but...");
			writeSpeech("nikki","","You wanted to discuss my credits, yes?");
			writeSpeech("player","","That's right. You see...");
			writeText("Shifting a bit forward, you angle the pendant to catch the light, nikkiF's eyes looking at it for a moment as it just barely sways.");
			writeSpeech("nikki","","Ah, I didn't see that yesterday. It's...");
			writeText("She pauses slightly.");
			writeSpeech("nikki","","It looks quite nice.");
			writeText("Slowly, she turns her head back to face you, the small smile returning to her face.");
			writeSpeech("player","","Thank you. But the answer to my question...?");
			writeText("nikkiF pauses in confusion.");
			writeSpeech("nikki","","Sorry, could you repeat the question? I must've been distracted by your... pendant.");
			writeSpeech("player","","I was just talking about your courses. You take PE, you said?");
			writeSpeech("nikki","","Yes, I-");
			writeSpeech("player","","And film history?");
			writeText("She pauses, and her posture shifts a bit as her eyes drift to the pendant again.");
			writeSpeech("nikki","","Yes. A friend-");
			writeSpeech("player","","-showed you a Hitchcock film.");
			writeSpeech("nikki","","Yes.");
			writeText("She blinks once, her brow furrowing slightly.");
			writeSpeech("nikki","","Yes, they-... h-he did.");
			writeSpeech("player","","Ah, are you feeling alright?");
			writeText("You lean forward slightly, the pendant catching the light again.");
			writeSpeech("nikki","","Y-Ye-");
			writeText("She suddenly stops.");
			writeText("Her expression goes completely neutral as she focuses in on you, a startling clarity to them for just a second.");
			writeText("But then, just as suddenly, she seems to relax a bit, but she doesn't bother faking the smile.");
			writeSpeech("nikki","","...Now, how in the <i>world</i> did you do that?");
			writeSpeech("player","","Do... what?");
			writeText("You lower your hands to the desk, her eyes following the pendant for a moment before returning to your face.");
			writeText("Smoothly, she stands up and steps towards the door. There's a brief, brief moment where you freeze... before she closes it, the click of the lock ringing out.");
			writeText("Sitting right back down, she folds her hands on her hips, the same neutral expression on her face... and some sort of spark in her eyes.");
			writeSpeech("nikki","","If you're worried about prying ears, this should be fine.");
			writeSpeech("player","","I'm not sure I know what you're talking about.");
			writeText("This is <b>not</b> going according to plan.");
			writeSpeech("nikki","","No, <i>I'm</i> not sure what I'm talking about - you, playerMister Counselor, are very much aware.");
			writeText("She brings up one of her legs, crossing it over the other with a calm expression.");
			writeText("Once again, her eyes move to the pendant... and she doesn't notice, even when she has to turn her entire head to refocus on you.");
			writeSpeech("player","","Look, I think-");
			writeSpeech("nikki","","I'd like you to do it again.");
			writeSpeech("player","","...Pardon?");
			writeText("Another near-invisible frown... though this time, she doesn't hide it.");
			writeSpeech("nikki","","I am, or at least I consider myself to be, a person of logic and fact. And a simple, immutable fact is this, playerMister Counselor:");
			writeText("She crosses her arms over her chest.");
			writeSpeech("nikki","","When I'm having a serious conversation with someone, <i><b>I do not stutter.</b></i> Therefore, either I'm losing my touch or...");
			writeText("Once again, she pauses slightly, her eyes going to the pendant.");
			writeSpeech("nikki","","...You did it again.");
			writeText("Shaking her head gently, she looks into your eyes...");
			writeText("And you can see that her face is getting flushed.");
			writeSpeech("player","","nikkiF... What do you think I'm doing?");
			writeText("Your tone is measured, but you can't help but let your curiosity leak through.");
			writeSpeech("nikki","","You made me stop thinking. Right in the middle of a conversation, there was <i>nothing.</i>");
			writeSpeech("player","","And when did that happen?");
			writeSpeech("nikki","","After you asked med questions and I answered...");
			writeText("Her eyes go to the pendant once again.");
			writeSpeech("player","","When you answered 'Yes'.");
			writeSpeech("nikki","","...Yes.");
			writeText("Her breathing picks up slightly, before she shakes her head.");
			writeSpeech("nikki","","Why do you keep stopping?");
			writeSpeech("player","","Honestly? Confusion, mostly. Why did you pretend to be nervous?");
			writeSpeech("nikki","","Because it was the best way to interact with you.");
			writeSpeech("player","","...Okay, define 'best'.");
			writeText("She seems to mull over her words for a moment.");
			writeSpeech("nikki","","...Because you seemed like the kind of person who would respond best to a slightly nervous, but largely open university student.");
			writeText("...Well, the fact that you were gunning for this job is proof she isn't wrong.");
			writeSpeech("player","","You were putting on a face to put me at ease.");
			writeSpeech("nikki","","Y-... Yes. Having friends on the faculty is beneficial.");
			writeText("...Oh. Oh!");
			writeSpeech("player","","If the faculty likes you... they'll be more lenient with you. More likely to curve up a grade, more likely to excuse an absence, things like that.");
			writeSpeech("nikki","","Correct.");
			writeSpeech("player","","You really are a business major, aren't you?");
			writeSpeech("nikki","","...Yes?");
			writeText("You shake your head.");
			writeSpeech("player","","Never mind. One last question:<br>Why did you want me to do it again?");
			writeText("A look of genuine confusion goes across nikkiF's face.");
			writeSpeech("nikki","","Because... I liked it? Should there be another reason?");
			writeSpeech("player","","And you liked it because...?");
			writeSpeech("nikki","","...I don't understand the question.");
			writeText("...This is looking like it'll be complicated. Interesting, definitely - but complicated.");
			writeSpeech("player","","I think I need you to come back to talk again some time.");
			writeText("You scribble down your number, handing it to her.");
			writeSpeech("player","","Text me any time. But here's the thing...");
			writeText("You raise your wrist, the pendant hanging from it as her eyes focus on it and glaze over slightly.");
			writeSpeech("player","","We just talked about your grades. Right?");
			writeText("There's a moments pause, before you see the first full, genuine smile on her face.");
			writeSpeech("nikki","","Don't worry about a thing, playerMister Counselor... I know how to keep a secret.");
			writeText("...Not quite what you were going for, but okay.");
			if(data.player.time == "Morning")
				writeSpeech("nikki","","Now, I do have one more class before I head home, but...");
			else
				writeSpeech("nikki","","I do have to be heading home now, but...");
			writeText("Her expression tightens up into the same pleasant look as before.");
			writeSpeech("nikki","","I look forward to <i>nothing,</i> playerMister Counselor.");
			writeText("With that, she stands and leaves, not a hint of excitement being betrayed by her movements.");
			writeText("...Well, that wasn't quite what was expected. Still, at least you won't be bored...");
			setTrust('nikki',30);
			writeFunction("changeLocation(data.player.location)", "Leave her be");
			break;
		}
		case "nikkiEnc2" : {
			passTime();
			setTrust('nikki',40);
			writeSpeech("player","","Brushing up before a class?");
			writeText("She looks up slightly from the book, one on physiology from the looks of it, and she gives the measured smile again.");
			writeSpeech("nikki","","I am, yes. It isn't for a little while, though.");
			writeSpeech("player","","Well, in that case... Do you want to continue our conversation from before?");
			writeText("nikkiF pulls out a bookmark, smoothly shutting the book.");
			writeSpeech("nikki","","Lead the way.");
			writeText("...");
			writeText("Shutting the door behind you, you once again wrap the pendant's cord around your wrist as you turn.");
			writeText("Sure enough, you can hear her breathing hitch slightly when you turn around and it catches the light.");
			writeText("You jostle your wrist slightly, the pendant swaying from it as nikkiF seems to relax a bit, the measured smile going back to a more natural, neutral expression.");
			writeSpeech("player","","How long have you been interested in this kind of 'relaxing', if you don't mind my asking?");
			writeSpeech("nikki","","It's stress relief. Constantly focusing on grades and exams, on forming relations with businesses and exploiting familial connections... It's tiresome.");
			writeText("She steps forward, her expression still neutral as her eyes trail up your body, her finger trailing up your arm.");
			writeSpeech("nikki","","You see, being in control all the time, thinking through every little action for every possible outcome... Do it for too long, and you start wanting something <i>else.</i>");
			writeText("nikkiF leans into you fully now, getting up on her toes to whisper in your ear,");
			writeSpeech("nikki","","You want to <i>lose</i> that control, have it <i>pounded out of you</i> until you're a drooling mess that couldn't make a decision if you wanted to. Unfortunately...");
			writeText("She steps back, a miniscule frown on her face.");
			writeSpeech("nikki","","As much as I'd love to bend over and get used like a cumrag, finding someone discrete is a challenge"+(checkTrust('kuro') > 24 ? ", though hearing that you were involved with kuroF made it a bit simpler." : ", though the fact that you're a counselor here makes it a bit simpler."));
			writeText("You roll your wrist again.");
			writeSpeech("player","","Because if anyone hears about this, I'd lose my job.");
			writeSpeech("nikki","","Y-");
			writeText("She shudders in place.");
			writeSpeech("nikki","","...Yes. My privacy is more-or-less guaranteed by virtue of your position.");
			writeText("Well, virtue is hardly the word you'd use, but you get the intent.");
			writeSpeech("nikki","","...Yes. Hm. Yes, yes, yes.");
			writeText("Her frown deepens a bit.");
			writeSpeech("nikki","","Drat. It only happens when I'm actually answering a question.");
			writeSpeech("player","","You're pretty diligent, aren't you?");
			writeText("She smiles minutely, before stepping in again. Her fingers go up your thigh as she replies,");
			writeSpeech("nikki","","Yes~");
			writeText("There's a sharp exhale from her nose before she sighs contentedly.");
			writeSpeech("nikki","","Let's get down to fun, hm? I think it's about time we got to the good parts...");
			writeText("She puts her hands on her skirt, slowly getting down to her knees as she lowers herself down, one hand's fingers trailing down your thighs as she does, the other hand going under her own skirt.");
			writeSpeech("nikki","","I'll only be getting a taste for you today, but next time I'm sure we'll have do quite a bit more...");
			writeFunction("writeEvent('nikki1')", "Watch her kneel");
			break;
		}
		case "nikkiEnc3" : {
			writeText("As you approach, nikkiF looks up at you again from her book. Psychology, this time.");
			writeSpeech("nikki","","Well hello again, playerMister Counselor. How may I help you today?");
			writeFunction("writeEncounter('nikkiEnc3A')", "Try to hypnotize her in your office");
			writeFunction("writeEncounter('nikkiEnc3repeat')", "Go to your office for another handjob");
			writeFunction("changeLocation(data.player.location)", "Never mind, nothing for today");
			break;
		}
		case "nikkiEnc3repeat" : {
			passTime();
			writeSpeech("player","","How about we head to my office to go over the same material as last time?");
			writeText("nikkiF nods once, the same playful spark in her eyes as before.");
			writeSpeech("nikki","","Lead the way, playerMister Counselor.");
			writeText("...");
			writeText("When you arrive, nikkiF smoothly shuts and latches the door before turning to face you, licking her lips.");
			writeSpeech("nikki","","Let's get right to it, hm?");
			writeText("She saunters towards you before crouching down...");
			writeFunction("writeEvent('nikki1repeat')", "Watch her kneel again");
			break;
		}
		case "nikkiEnc3A" : {
			passTime();
			if(checkTrust('nikki') < 50)
				setTrust('nikki',50);
			writeSpeech("player","","Actually, I was hoping to speak with you about the same thing as last time, if you're free.");
			writeText("She shuts the textbook smoothly, the measured smile on her face as she folds her hands in front of herself.");
			writeSpeech("nikki","","Of course, I'm happy to help. Your office, then?");
			writeText("You nod, turning and heading back while she trails slightly behind you.");
			writeText("...");
			writeText("With the door clicked shut again, Nikki's expression returns to neutral as she sits, though there's still that hint of excitement behind her eyes that she doesn't try to hide.");
			writeSpeech("nikki","","Are you planning on using the pendant again, perhaps~?");
			writeSpeech("player","","Picked up on that, hm?");
			writeText("You casually take the pendant out, but don't wrap it around your wrist - instead, you just place it onto the desk.");
			writeSpeech("nikki","","...?");
			writeText("She shifts in place as you sit across from her, her eyes still lingering on your hand for a moment even without your usual tool.");
			writeText("Instead, you rest your hand on the desk gently, your fingers lightly drumming.");
			writeSpeech("player","","You said before that you liked it - being mindless, that is.");
			writeText("nikkiF nods, though her eyes narrow slightly.");
			writeSpeech("player","","...Well?");
			writeSpeech("nikki","","...Oh- Yes.");
			writeText("She shudders slightly, the word leaving her mouth as you give the desk a firmer, harder tap.");
			writeSpeech("player","","Is that statement made from experience?");
			writeSpeech("nikki","","Yes.");
			writeText("Another tap, and you watch her smile slightly. She gets what you're doing, then.");
			writeSpeech("nikki","","It's the same reason I use these sorts of things to relax.");
			writeText("She leans forward now, resting her chest on the desk.");
			writeSpeech("nikki","","It's impossible to overthink things when you're <i>cumming your brains out,</i> after all.");
			writeSpeech("player","","True enough... But I do have a question. You're a...");
			writeText("You pause, your finger tapping once heavily.");
			writeSpeech("player","","-<i><b>smart girl,</b></i> right?");
			writeSpeech("nikki","","Yes~");
			writeText("Her eyes momentarily drift to the pendant on the table, before shifting back to you.");
			writeSpeech("player","","Then you've already figured out what's happening here.");
			writeSpeech("nikki","","I have, yes. There's the long, scientific name for it, but... I don't think either of us care about that.");
			writeText("She leans even more into the desk now.");
			writeSpeech("nikki","","I'll freely admit, though, that I know very little about how hypnosis works... Though I'm happy to learn~");
			writeSpeech("player","","In that case, I have to ask...");
			writeText("You slowly stand, walking around to her. You don't stop the light drumming, doing it on your pants as you move, and then on her shoulder as you approach.");
			writeSpeech("player","","Do you realize how much time and effort it normally takes to hypnotize someone? Answer <b>honestly.</b>");
			writeText("She shudders in place slightly.");
			writeSpeech("nikki","","N-No, I don't.");
			writeSpeech("player","","Smart girl. The answer, of course, depends on the person.");
			writeText("You circle around again, the drumming continuing.");
			writeSpeech("player","","And of course, you likely know that there are levels to how deep a person goes into trance.");
			writeSpeech("nikki","","...Yes.");
			writeSpeech("player","","Good girl.");
			writeText("Sitting down again, you focus on her, looking her in the eyes as you keep drumming.");
			writeText("They're already starting to haze over a bit, the trance starting to affect her. Though, she'll probably have trouble going deep...");
			writeText("Still, there's not very much thrill to winning the game in a second, is there?");
			writeSpeech("player","","You know why you're already feeling tired, don't you? Why you're having trouble focusing, why you're already starting to stutter?");
			writeSpeech("nikki","","...Y-Yes...?");
			writeSpeech("player","","Good girl. So <b>tell me.</b>");
			writeText("She sits there quietly for a moment, before speaking softly:");
			writeSpeech("nikki","","Because... I want this.");
			writeSpeech("player","","Very good.");
			writeText("Reaching forward, you grab the pendant... and put it back in your pocket.");
			writeSpeech("player","","That'll be all for today.");
			writeText("Her eyes almost immediately clear as she sharply sits up straight, perfectly in time with you stopping the drumming. She's used to switching mindsets on a dime, then...");
			writeSpeech("nikki","","May I ask why? I wasn't aware I'd made any mistakes...");
			writeSpeech("player","","And you were very aware, weren't you?");
			writeText("She purses her lips.");
			writeSpeech("nikki","","...I think I understand.");
			writeSpeech("player","","If you can say that with a straight face, I guarantee you don't.");
			writeText("You calmly stand up, moving towards the door as you can barely see her face take on a confused expression.");
			writeSpeech("player","","And now you do.");
			writeSpeech("nikki","","You've... lost me completely.");
			writeSpeech("player","","Good. Now just accept that, and I'll call you back when we're <i>both</i> ready. Any questions?");
			writeText("Her mouth immediately opens, but she stops herself with a pause.");
			writeSpeech("nikki","","...No?");
			writeText("You smile at her, nodding.");
			writeSpeech("player","","Smart girl.");
			writeText("As she leaves the room, you shut the door with a sigh.");
			writeText("That's the groundwork for induction and two triggers... It might take a while to get everything ready for the next step, but it's a start.");
			writeText("Now, to occupy your own mind with other things...");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nikkiEnc4" : {
			writeText("As you approach, nikkiF looks up at you again from her book. Medical terminology, this time.");
			writeSpeech("nikki","","Hello again, playerMister Counselor. Did you need to speak with me again?");
			writeFunction("writeEncounter('nikkiEnc4A')", "Try to take her deeper into trance and have some fun.");
			writeFunction("writeEncounter('nikkiEnc3repeat')", "Go to your office for another handjob");
			writeFunction("changeLocation(data.player.location)", "Never mind, nothing for today");
			break;
		}
		case "nikkiEnc4A" : {
			passTime();
			if(checkTrust('nikki') < 55)
				setTrust('nikki',55);
			writeSpeech("player","","You're right on the money. Do you have time for another session?");
			writeSpeech("nikki","","Of course.");
			writeText("She shuts the book and slides it into her bag.");
			writeSpeech("nikki","","Lead the way, playerMister Counselor.");
			writeText("...");
			writeText("It isn't long before you two are sitting across from each other. She's quick to go into the first level of trance, still completely aware of her surroundings but still fairly open.");
			writeText("The problem is, of course, that just like last time, she doesn't seem to be able to go any deeper from whispered words and orders.");
			writeText("She still has trouble going beyond a surface-level trance... Even if she says she wants to give up control, she doesn't seem willing to. Not like this, anyway.");
			writeText("Well, doing the same thing again and again won't make progress here - if anything, it'll slow down any future development.");
			writeText("Instead, you decide to...");
			writeFunction("writeEvent('nikki2')", "...change up your tactics.");
			break;
		}
		case "nikkiEvent2A" : {
			writeSpeech("player","","nikkiF.");
			writeText("She looks up from your cock, her eyes settling on your wrist as you shift the pendant into her view again.");
			writeSpeech("player","","It feels good, doesn't it?");
			writeText("She blinks once, before nodding.");
			writeSpeech("nikki","","Yes~");
			writeSpeech("player","","<b>Good girl.</b> It just feels wonderful, right? It feels so sensitive, my cock sliding between your slick, wet tits...");
			writeText("She shudders slightly, the smile returning.");
			writeSpeech("player","","It feels so good, in fact, that you can't focus on anything else.");
			writeText("There's a small, almost inaudible gasp from her.");
			writeSpeech("player","","It's like lightning across your skin, spreading out to every nerve across your body...");
			writeSpeech("nikki","","I-It is...?");
			writeText("You run your hand along her breast, thumbing her nipple as she lets out a sharp gasp.");
			writeSpeech("player","","You tell me, nikkiF.");
			writeSpeech("nikki","","Y-Yes...!");
			writeText("She shudders, her movements getting more erratic as she starts moving faster.");
			writeSpeech("player","","<b>Good girl.</b> Every movement is making it harder to think about anything but the pleasure, isn't it?");
			writeText("You move your hand past her chest, gently running your thumb along her forearm and feeling her shudder as she gasps.");
			writeSpeech("player","","Everything else is just spilling away - every thought that isn't about pleasure, every inhibition, and every last scrap of reason... They're spilling away with every deep, gasping breath.");
			writeSpeech("nikki","","O-Oh fuck...~!");
			writeText("Her hands are shaking now as she bites her lip, squeezing her tits together around your cock even tighter.");
			writeSpeech("player","","You can feel it, can't you? The pleasure seeping into every part of you...");
			writeSpeech("nikki","","Y-yes...! Yes, yes, <i><b>yes...!</b></i>");
			writeText("Her hands knead at her chest as she shuts her eyes, grinding her body into yours, relishing every movement of her tits against your shaft, her fingers digging in as she groans deeply at even the slightest sensation.");
			writeSpeech("player","","<b>Good girl.</b> You know... I think you might even deserve a reward.");
			writeText("She gasps sharply again, half-hazed eyes focusing on yours now.");
			writeSpeech("player","","With how sensitive you are right now, I bet nothing would feel as good as my cum on your-");
			writeSpeech("nikki","","<i><b>Yes!</b></i>");
			writeText("Your words turn to a sharp moan of pleasure as she moves with all the energy she can, her spit and your pre mixing together as lube while she bounces her tits with abandon.");
			writeText("No inhibitions, no reason... Just a desire for pleasure.");
			writeSpeech("player","","<b>G-Good girl...!</b>");
			writeText("She gasps sharply again, but she just keeps speeding up, desperately panting as she does.");
			writeSpeech("nikki","","Cum, cum, cum...! Cum all over me, make me squeal from your jizz all over me...!");
			writeText("You let out a low groan as she picks up the pace, leaning even further back.");
			writeSpeech("player","","I'm about to finish...! So, tell me, nikkiF. Do you want it?");
			writeText("Her body shudders once more as she nods rapidly.");
			writeSpeech("nikki","","Yes...!");
			writeSpeech("player","","<b>Good girl.</b>");
			writeText("She shudders again, only for it to push you fully over the edge.");
			writeText("Your cock throbs and your hips buck against her as you both let out lust-filled moans, your cum spurting out across her face and chest.");
			writeText("She doesn't stop moving until you finally spurt out the last rope, and she lets out a low contented hum as she looks up at you.");
			writeBig("images/nikki/2-4.jpg","Art by Enoshima Iki");
			writeSpeech("nikki","","Hah~... That felt wonderful~");
			if(data.player.location != 'gallery'){
				writeText("Then, she pauses slightly.");
				writeSpeech("nikki","","Ah... Hm.");
				writeText("She sits up a bit straighter, touching her cum-struck hairband for a moment.");
				writeSpeech("nikki","","It's a good thing I came prepared this time.");
				writeText("Saying that, she smiles at you, slowly standing and reaching into her skirt, pulling out some wet wipes.");
				writeSpeech("nikki","","That felt... incredible. Really.");
				writeSpeech("player","","I aim to please.");
				writeSpeech("nikki","","And you pleased what you aimed at~");
				writeText("She wipes off most of the cum from her chest, using a small spray-bottle to help clean off most of the jizz in your hair.");
				writeText("You're not sure what's in it, but it smells vaguely of lavender.");
				writeText("It isn't long before you're both clean, nikkiF smiling contentedly back at you.");
				writeSpeech("nikki","","Thank you for that, by the way. Feeling my inhibitions sliding away was... new. I look forward to all of the other things you'll be doing to me~ Unfortunately, I have some business I ought to attend to, so if you'll forgive the abruptness...");
				writeText("She grabs her button-up, swiftly pulling it on.");
				writeSpeech("player","","No problem. And as for next time... Well, you can expect some more play of that sort.");
				writeText("nikkiF lets out a small chuckle.");
				writeSpeech("nikki","","I'll see you then.");
				writeText("Pulling her jacket on, she steps out of the room smoothly, not a hair out of place as you get ready to attend to your own business...");
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "nikkiEvent2B" : {
			writeSpeech("player","","nikkiF.");
			writeText("She looks up from your cock, her eyes settling on your wrist as you shift the pendant into her view again.");
			writeSpeech("player","","It feels good, doesn't it?");
			writeText("She blinks once, before nodding.");
			writeSpeech("nikki","","Yes~");
			writeSpeech("player","","<b>Good girl.</b> It just feels wonderful, right? It feels so sensitive, my cock sliding between your slick, wet tits...");
			writeText("She shudders slightly, the smile returning.");
			writeSpeech("player","","Fucking your tits with my cock, bouncing down and up again... It almost feels as good as your pussy, doesn't it?");
			writeText("nikkiF opens her mouth to speak, but only a moan spills out.");
			writeSpeech("player","","You can imagine it right now, can't you? How it would feel to be bouncing on my cock, squeezing just as tight around my shaft as your tits are squeezed right now.");
			writeText("You can feel her hands shudder a bit, pushing her chest together more.");
			writeText("The pendant glints in the light again, her focus entirely on it, yet the movements of her hands and breasts not getting any less skillful.");
			writeSpeech("player","","You can feel it right now, can't you? Every shift, every thrust, every movement...");
			writeText("She gently bites her lip again, still unable to look away from the pendant as she replies,");
			writeSpeech("nikki","","Y-Yes...! My whole body feels tingly, and my pussy...");
			writeText("You give the pendant a slight flick, firmly saying,");
			writeSpeech("player","","<b>Good girl.</b>");
			writeText("She shudders again, the pleasure of praise and of her sensitive body mingling inside her.");
			writeSpeech("player","","Just keep fucking yourself on my cock, nikkiF... Right now, the only thing that should be on your mind is <b>pleasure.</b> Aside from that...");
			writeText("You swing the pendant gently one more time, before lowering your wrist out of her sight.");
			writeSpeech("player","","...let your mind go <b>blank.</b>");
			writeText("Her whole body quivers at that, her eyes going back to yours as her panting gets heavier.");
			writeText("She shifts and rolls her chest against you more, moving faster and sharper and kneading them more forcefully with her hands.");
			writeSpeech("nikki","","Y-Yes...! Yes, yes, <i><b>yes...!</b></i>");
			writeText("Her eyes, half-hazed over, keep glancing back and forth from your face to your cock, desperately focusing on pleasure - both yours, and her's.");
			writeSpeech("player","","<b>Good girl.</b> You know... I think you might even deserve a reward.");
			writeText("She looks back up again, panting from the phantom sensation of getting fucked.");
			writeSpeech("player","","You want to feel it, don't you?");
			writeSpeech("nikki","","F-Feel...?");
			writeText("Your cock twitches between her tits, approaching the edge as a momentary look of clarity goes through her eyes.");
			writeSpeech("nikki","","Y-Yes...! Your cum, covering my face, and filling me up~");
			writeText("She smiles widely now, her chest heaving more and more as she gets even more excited.");
			writeSpeech("nikki","","I want it! Please, paint my face with your cum!");
			writeText("You let out a low groan as she picks up the pace, leaning even further back.");
			writeSpeech("player","","I'm about to finish... So, tell me, nikkiF. Do you want it?");
			writeText("Her body shudders once more as she nods rapidly.");
			writeSpeech("nikki","","Yes...!");
			writeSpeech("player","","<b>Good girl.</b>");
			writeText("She shudders again, only for it to push you fully over the edge.");
			writeText("Your cock throbs and your hips buck against her as you both let out lust-filled moans, your cum spurting out across her face and chest.");
			writeText("She doesn't stop moving until you finally spurt out the last rope, and she lets out a low contented hum as she looks up at you.");
			writeBig("images/nikki/2-4.jpg","Art by Enoshima Iki");
			writeSpeech("nikki","","Hah~... That felt wonderful~");
			if(data.player.location != 'gallery'){
				writeText("Then, she pauses slightly.");
				writeSpeech("nikki","","Ah... Hm.");
				writeText("She sits up a bit straighter, touching her cum-struck hairband for a moment.");
				writeSpeech("nikki","","It's a good thing I came prepared this time.");
				writeText("Saying that, she smiles at you, slowly standing and reaching into her skirt, pulling out some wet wipes.");
				writeSpeech("nikki","","That felt... incredible. Really.");
				writeSpeech("player","","I aim to please.");
				writeSpeech("nikki","","And you pleased what you aimed at~");
				writeText("She wipes off most of the cum from her chest, using a small spray-bottle to help clean off most of the jizz in your hair.");
				writeText("You're not sure what's in it, but it smells vaguely of lavender.");
				writeText("It isn't long before you're both clean, nikkiF smiling contentedly back at you.");
				writeSpeech("nikki","","Thank you for that, by the way. Feeling the titfuck in my pussy was... new. I look forward to all of the other things you'll be doing to me~ Unfortunately, I have some business I ought to attend to, so if you'll forgive the abruptness...");
				writeText("She grabs her button-up, swiftly pulling it on.");
				writeSpeech("player","","No problem. And as for next time... Well, you can expect some more play of that sort.");
				writeText("nikkiF lets out a small chuckle.");
				writeSpeech("nikki","","I'll see you then.");
				writeText("Pulling her jacket on, she stops out of the room smoothly, not a hair out of place as you get ready to attend to your own business...");
			}
			writeFunction("changeLocation(data.player.location)", "Finish (for now)");
			break;
		}
		case "nikkiEnc5" : {
			writeText("nikkiF smiles at you as you approach, all of her attention on you as she closes her book.");
			writeSpeech("nikki","","Hello again, playerMister Counselor. Thanks again for all the help lately - our sessions have been simply <i>wonderful.</i>");
			writeText("The measured smile gives way to a teasing smirk for just a moment.");
			writeSpeech("nikki","","Did you have time for another today, perhaps?");
			if(!galleryCheck('nikki3'))
				writeFunction("writeEncounter('nikkiEnc5A')", "Take her back to your place");
			else if(!galleryCheck('nikki4'))
				writeFunction("writeEncounter('nikkiEnc5B')", "Take her home and hypnotize her");
			else if (galleryCheck('nikki3') && galleryCheck('nikki4'))
				writeFunction("writeEncounter('nikkiEnc6')", "Take her to your office for further hypnosis");
			else if(galleryCheck('nikki1repeat') && galleryCheck('nikki2repeat') && galleryCheck('nikki3') && galleryCheck('nikki4'))
				writeSpecial("You've finished all of nikkiF's content as of this update! Thanks for playing!")
			writeFunction("writeEncounter('nikkiEnc3repeat')", "Go to your office for another handjob");
			writeFunction("writeEncounter('nikkiEnc5repeat')", "Have her give you a titjob again");
			writeFunction("changeLocation(data.player.location)", "Never mind, nothing for today");
			break;
		}
		case "nikkiEnc5repeat" : {
			passTime();
			writeSpeech("player","","How about we head over to my office for a chat? You look like you have to get off your chest.");
			writeText("There's a faint, bemused hum from nikkiF in response to your pun as she nods.");
			writeSpeech("nikki","","I do, actually. Let's go, playerMister Counselor~");
			writeText("...");
			writeText("The amusement seems to quickly turn to excitement as she leans forward.");
			writeBig("images/nikki/2-1.jpg","Art by Enoshima Iki");
			writeSpeech("nikki","","I can see that you're enjoying the view... But how about we get right down to it~?");
			writeFunction("writeEvent('nikki2repeat')", "Take her to the couch");
			break;
		}
		case "nikkiEnc5A" : {
			passTime();
			if(checkTrust('nikki') < 60)
				setTrust('nikki',60);
			writeSpeech("player","","Well, I'll be out of office this afternoon, but if you'd prefer to just drop in...");
			writeText("You text her your address real quick, which she looks over with a small smile.");
			writeSpeech("nikki","","I'll do just that. See you there, playerMister Counselor~");
			writeText("...");
			writeText("nikkiF takes a moment to look around the room, an appraising look to her eye.");
			writeSpeech("nikki","","I like it. Comfy, I think would be the right word. Though I suppose the main point of interest for us is the bed, isn't it~?");
			writeText("She turns around, spinning gently on her heel as she looks at you with a lusty look.");
			writeSpeech("nikki","","How do you want me today, playerMister Counselor~?");
			writeFunction("writeEvent('nikki3')", "Have her lay back on the bed");
			//if(checkTrust('kuro') > 24)
			//	writeFunction("writeEvent('nikki3Alter')", "Have her call kuroF to listen in");
			break;
		}
		case "nikkiEnc5Arepeat" : {
			writeFunction("writeEvent('nikki3repeat')", "Have her lay back on the bed");
			/*
			if(checkTrust('kuro') > 24){
				if(!galleryCheck('nikki3Alter'))
					writeFunction("writeEvent('nikki3Alter')", "Have her call kuroF to listen in");
				else
					writeFunction("writeEvent('nikki3repeatAlter')", "Have her call kuroF again");
			}
			*/
			break;
		}
		case "nikkiEnc5B" : {
			passTime();
			setTrust("nikki",65);
			writeSpeech("player","","Let's head back to my place, if you're interested.");
			writeText("She gives a small smile, nodding.");
			writeSpeech("nikki","","I'm <i>quite</i> interested.");
			writeText("...");
			writeText("When you get there, nikkiF wastes little time striding over to the bed and sitting down, her hands folded neatly in her lap.");
			writeSpeech("nikki","","So, how do we want to start *Mister Counselor~?");
			writeSpeech("player","","You'll start by taking off most of those clothes and getting on the bed.");
			writeText("You smile slightly at her as her hands move without hesitation, her own smile beaming back.");
			writeSpeech("player","","Now be a <b>good girl</b> and get face-down, ass-up...");
			writeFunction("writeEvent('nikki4')", "Watch as she gets in position");
			break;
		}
		case "nikkiEnc6" : {
			if(data.player.location != 'gallery')
			{
				passTime();
				setTrust("nikki",80);
			}
			writeHTML(`
				define spn = sp nikki;
				define spp = sp player;
				spp Let's go ahead and talk in my office. We've got a bit to discuss, as I recall.
				spn Yes playerSir~
				...
				t Shutting the door behind the both of you, you gesture for her to take a seat. She doesn't hesitate, resting her hands on her lap as you both sit across from each other.
				spp You mentioned before that the reason you were so interested in this was the feeling of not thinking.
				spn Correct. The sensation of not overthinking things and having an empty mind is very...
				t You can see her mouth quirk into a small smile.
				spn ...freeing, you could say.
				spp Good, then I'm sure you'll quite enjoy this.
				t You sit down in front of her, grasping her hands. She quirks her eyebrow quizzically, but doesn't resist.
				spp Go ahead and shut your eyes for me, nikkiF.
				t She does so immediately, her head tilting down the smallest bit as she does.
				spp <b>Good girl.</b>
				t You can feel her hands twitch at that.
				spp Today, we're going to focus just on clearing that cute little head of yours.
				t You lean in towards her, her measured breathing feeling a bit warm.
				spp You understand how a visualization exercise works, right?
				spn Yes playerSir.
				spp Good... Then let's start with that.
				t Using your thumbs, you slowly rub at the back of her hands, smiling a bit.
				spp Visualize a burlap bag for me - the same kind we have in the PE storage room that we use for sandbags. The rough texture of the material, the loose weight of it while it's empty...
				t You can see her nod minutely, and you run your thumb slowly across the back of her hand again.
				spp Now, I want you to think. It can, and should, be about <i>anything.</i> Every thought and idea that's filled your head since waking up, that've been tossing about like a whirlwind in your head...
				t Her face twitches a bit, her eyes gently moving behind shut lids now.
				spp Good. Now, I want you to take each and every thought, and visualize them flowing into the bag. You don't need to finish with them - just file them away when you recognize them, and let the next thought drift through.
				t nikkiF's face seems to visibly relax a bit at that, though her eyes still seem to shift around. Perhaps it's how she often encodes her memories...?
				spp <b>Good girl.</b>
				spn <i>Haah~...</i>
				t She exhales heavily at that, and you can feel her grasp your hands a bit more firmly.
				spp Keep letting them flow into the bag, held in there by the burlap, as it keeps filling more and more. Like grains of sand, let every word in your mind filter into it and weigh the bag down more and more, letting the weight move from you to the bag.
				t You lean in even more, speaking softly into her ear.
				spp Just let everything flow for as long as it takes...
				t She doesn't respond, just continuing to follow the order as you keep gently toying with her hands, feeling each minute twitch as her breathing slows down just a little bit more.
				t You're not sure how long you're sitting there, just listening to her breath, but eventually you notice that her eyes aren't moving as much any more, and her shoulders seem to have relaxed as well.
				t A few moments later, you can see her lips part just barely as she whispers,
				spn Okay...
				t Even though she can't see it, you smile at her.
				spp <b>Good girl.</b> Go ahead and feel how heavy the bag is, how full it is of everything, how much weight you've pushed into it...
				t You slowly, but firmly, draw a line across the backs of her palms.
				spp ...and imagine slashing the bottom of the sandbag, and letting it all spill away into the void.
				t You draw another line across her hand, your thumb just barely tracing along the skin this time.
				spp Just imagine the grains of stress, of thought, of worries and responsibilities... all draining and falling away. Every grain slowly disappearing, the bag getting lighter and lighter with every passing second.
				t You slowly release her hands, standing up and stepping to her side.
				spp And as your worries all fall away, just feel your body relaxing more and more, feeling lighter and floaty.
				t You grasp her shoulders gently, pushing your thumbs against the muscles and slowly, carefully massaging them.
				spp And as your body gets lighter, so does your mind... Correct?
				spn Y-...Yes...
				t Your hands slide up and down her arms as she sits, her breathing slow and controlled.
				t You can feel the slightest quiver in response to your touch, especially when you just barely glide your fingertips along her skin.
				spn H-Haah...
				t The slow, gentle exhale matches her body relaxing a bit more into the chair.
				spp Good. Just keep relaxing more and more... Don't worry about idle thoughts, or anything like that.
				t You lean in, your breath just barely pushing against her ear as you continue.
				spp Don't try and clear your mind - you don't need to put any effort into it. If you have a thought, just recognize it... and let it flow into the bag, to drain away like the rest.
				t Circling around where she's seated, you let your hand gently drift across the small of her back for a moment, relishing in the slight twitch as you do.
				spp Let nothing linger, and just let your body keep relaxing. Let everything in that whirlwind mind of yours just flow away...
				t nikkiF's head seems to gently nod for a moment as you circle around her, her face looking rather at peace and calm now.
				spp Such a <b>good, good girl...</b>
				...
				t It takes a while of whispered words and affirmations, but she's completely under now - her whole body is relaxed and, if you didn't know better, you'd think she'd fallen asleep.
				t Now it's time for some more fun...
			`);
			writeFunction("writeEvent('nikki5')", "Continue");
			//The plan for this one is a text-only event, which might be... odd. But it's the only option here, I think.
			//The purpose of it is to reinforce the Good Girl / Smart Girl dichotomy one more time, and reinforce the idea that being a good girl
			//means relief from frustration, by connecting it to sexual frustration by preventing her from masturbating while she's under.
			//Later, we can do the cowgirl scene too.
			break;
		}
		case "nikkiEvent5" : {
			writeHTML(`
				define spn = sp nikki;
				define spp = sp player;
				t You bring your hands along her thighs, trailing up the exposed skin and teasing her inner-thighs.
				spp It's so <i>frustrating</i> being a smart girl - always thinking about what you need to do, planning for everything that could come your way...
				spp It's just so much easier to let go, empty your head...
				t You slide your hands along her thighs, your fingers teasing at them as they inch closer to her labia. Even while completely under, her breathing still picks up a bit from her arousal.
				spp And be a <b>good girl.</b>
				spp Really, you're such a...
				t Your fingers press against her pussy, spreading her open and teasing her for a moment
				spp ...smart girl.
				t You pull your hands away immediately, moving around her again.
				spp Always reading your textbooks in the halls, controlling how the faculty see you, and thinking about how to get what you want. But what you want isn't to be a smart girl at all, is it?
				t You lean in close enough to press your lips against the lobe of her ear, before gently whispering,
				spp You want to be my <b>good girl.</b>
				spn <i>Haah...</i>
				t nikkiF lets out a slow exhale as your fingers go back to teasing her, doing little more than rubbing at her pussylips for now. Full satisfaction is hardly the goal right now, after all...
				t Your other hand moves to her chest, teasing nikkiF's tits as you grope her through her shirt.
				spn Mmnn~...
				t You press your lips to her neck as you tease her chest and her pussy, kissing down along the crook of her neck as your hands drift along her body, listening to the soft sounds she makes.
				t Her own lips part gently as you feel her nipple hardens beneath your palm. She's just barely leaning her chest into your hand unconsciously, adoring every movement of your fingers against her body and the cloth.
				t The more you tease her, the more you can feel her panties dampen from her lust as she leans into your touch.
				spn Nnnn~...
				t Her moans blend into each other as the seconds go by, your slow, methodical movements pleasuring her towards a gradual peak.
				t It's a slow, long buildup as you keep teasing her, but you can feel her body starting to twitch and tense up in a familiar way.
				spp Such an excitable little toy...
				t Your whispered words cause her to breathe heavier now, her fingers starting to gently twitch at their place by her sides.
				spp You're getting close, aren't you?
				spn <font size='-1'>Y-Yes...</font>
				t You can't help but let out a soft laugh as you keep teasing her, groping at her chest while your other hand continues rubbing at her pussy.
				spp Then don't bother holding back. Let go...
				t There's a sharp exhale from her as you feel her start to shudder just a bit. It's not the usual body-racking orgasm you've put her through, but...
				t Well, there's no doubt she's still loving every second.
				spp That's it... Such a good, good...
				spp ...<b>good girl.</b>
				spn <i><b>N-Nnn~...!</b></i>
				t nikkiF's body tenses sharply, a quiet moan spilling from her mouth as she leans against your body, her eyes barely fluttering open now.
				t Her lips are just parted only slightly as she breathes heavily. Her eyes are still hazed over as she comes up from the trance, but as she does...
				t She leans in, her lips pressing against yours in a much softer kiss than normal as you feel her warm breath for just a moment, before she pulls away.
				spn H-Haaah~...
				t You sit down across from her as she slowly comes back up, still looking as relaxed as ever.
				spp Time to go back to being a 'smart girl', nikkiF~
				t Your teasing tone slowly pulls her the rest of way up as she blinks repeatedly.
				spn That was... really nice~
				spp I'm glad. I'm more used to bringing ladies to ear-splitting orgasms, but I thought you'd enjoy this quite a bit.
				t nikkiF smiles wide, leaning forward just enough to press her chest against yours, and her lips against your cheek.
				spn It was wonderful, and I certainly did.
				t She slowly stands up, stretching out a bit (and incidentally pushing her chest out right in front of you in the process). For once, she seems rather unaware of herself as she rolls her shoulders a bit.
				t It doesn't last long, though, before you can see the same calculating glint return to her eyes as she folds her arms underneath her chest, lifting them just enough to accentuate them.
				spn Given the time on the clock, it looks like we'll have to call it here... but thank you very much, playerMister Counselor~
				spp No problem at all; it was fun for me too.
				spn Hah, I'm sure~
				t She grabs her coat and pulls it on over her shirt, but she pauses.
				spn Ah, actually, next time we meet up, I'll have something I'll want to talk to you about.
				t You quirk an eyebrow quizzically at that.
				spp Anything I should worry about?
				spn Not at all. I'll explain it when I finish working on the groundwork, but for now, just be aware of that.
				t She hops over to you again, kissing you on the lips quickly with a smile.
				spn Until then, have fun Counselor~
				t nikkiF steps out of the room quickly, leaving you to your own devices... and with a chair that probably needs a bit of a wipe-down.
			`);
			writeFunction("changeLocation(data.player.location)", "Clean and finish up");
			break;
		}
		case "nikkiEnc7" : {
			if(checkTrust('nikki') < 85)
				setTrust('nikki', 85);
			writeHTML(`
				define spn = sp nikki;
				define spp = sp player;
				t nikkiF looks up as you approach, once again focusing wholly on you as her book shuts firmly.
				spn Well hello again, playerMister Counselor - I was hoping to see you today.
				spp Hello to you too, nikkiF, and I was thinking the same.
				t She steps a bit closer to you, putting her book into her bag smoothly without breaking eye-contact.
				spn Actually, there was something I wanted to speak with you about privately, if you didn't mind.
				t Ah, taking the initiative, is she...?
				spp Sure thing; let's head to my office.
				...
				t As you shut the door behind you, nikkiF takes a seat calmly, though you do note a slight difference in her demeanor this time around.
				spp I assume this is about the thing you mentioned last time?
				spn Correct. You see, I was actually rather interested in talking to you about a potential...
				t She pauses, clearly thinking her words over carefully.
				spn ...Well, 'job' is really not the word for it. I suppose you could say I want to discuss <i>'ambitions'</i> - both mine, and how they may affect yours.
				t You take a seat across from her, narrowing your eyes.
				spp You've got my interest. What kind of ambitions?
				spn To put it simply, I want to use your abilities for our mutual benefit through corporate espionage and hypnotic manipulation.
				t You quirk an eyebrow at that.
				spp You did mention wanting a job after your get your associate's degree...
				spn And I feel this is the best way to do exactly that. There's more than a few ways to introduce you to some of the higher-up 'movers and shakers', as it were, but some of the easiest would be as simple as going through my family.
				t She smiles at that, letting out a soft chuckle.
				spn Frankly, my mother's word carries a fair amount of weight amongst the wives of several higher-ups, and I'm sure you have methods for getting her to put a good word in for you.
				spp And you're suggesting you're more than fine with that?
				t nikkiF adjusts her glasses, nodding.
				spn I mentioned before that I've been working hard to succeed in life, specifically through business relations and exploiting familial connections. I don't see this as very different at all.
				spp So you see attending a dinner party of your parents' friends as on the same level as me fucking your mother.
				spn Not at all. The parties are boring, involve far too much talking around the problem, and rarely leave anyone involved satisfied. Your hypnosis and general sex life are none of those things.
				spn ...Additionally, at least this way I can choose to be outside of the room when someone's kissing my mother's ass.
				t You think it over, leaning back in your seat.
				spp Alright... It sounds pretty reasonable, but I can't imagine it would be a quick one-two-done deal. How long would this take?
				spn A few months of concerted effort, if not a full year. You'd need to be very careful about your public image as well, and likely wouldn't be able to engage in your usual behaviors.
				spp I don't think I'd be that easy to catch, nikkiF.
				t An uncharacteristic sneer goes across her face.
				spn Reporters are bloodhounds, playerSir, and I have no intention of leaving them a single drop to shove their muzzles into. And we <i>both</i> know you didn't make it this far without being caught by being any less careful than necessary.
				t You think about it even deeper now. That's quite the opportunity being laid out... Just getting into the university was originally a challenge, but this would be far beyond that.
				t A chance to take control of entire companies... It's not your normal cup of tea, but the possibilities would be practically endless.
				spn Oh, and do be aware that this is <i>not</i> a limited time deal. If now isn't the time, I have no problem waiting until it is.
				t She pulls some of her hair back over her ear, looking expectantly at you.
				t It's a big choice, but you'll have to...
			`);
			writeFunction("writeEncounter('endingA2')", "...accept her offer.");
			writeFunction("writeEncounter('endingA3')", "...turn her down, for now at least.");
			break;
		}
		case "endingA2" : {
			if(!checkFlag('nikki','endingA'))
				addFlag('nikki', 'endingA');
			if(!checkFlag('nikki','complete'))
				addFlag('nikki', 'complete');
			writeHTML(`
				define spn = sp nikki;
				define spp = sp player;
				spp ...You know what? Alright.
				t A clear flash of excitement goes across nikkiF's face.
				spn Wonderful! Absolutely wonderful.
				t She pushes her glasses up, immediately pulling out her phone. Mere seconds later, you receive a text.
				spn That's a link to most of the information I've gathered thus far.
				spp Isn't leaving a digital trail-
				spn The link is an expiring redirect URL, so even if someone got your text logs, they'd just get an empty page.
				spp ...Smart girl.
				t She beams slightly at that.
				spn My mother should be back in town within the month, at which point I'll introduce you to her. By that point, we'll need to have already falsified some documentation that says you're a licensed masseur.
				spp Ah, to convince her to try my 'services' and get her alone.
				spn Precisely; given her previous affair with her chiropractor, I imagine you'll find her easier than most to seduce under those circumstances.
				spp And then we just have her recommend my <i>services</i> to her rich and famous friends, who then recommend me to <i>their</i> friends-
				spn -until eventually, you're in control of far more than any of them ever could've expected to give you.
				spp And you've already got a plan for dealing with your father?
				spn You could seduce him too if you like.
				spp Not quite what I meant there.
				t She chuckles, shaking her head.
				spn It's all in the documentation. We can discuss this further after you've reviewed it. For now, though... Well.
				t nikkiF runs her hands through her hair, her face a bit flushed.
				spn How about we have ourselves some fun and "clear our heads" before we take any action~?
				spp That sounds just perfect...
			`);
			writeFunction("writeEvent('nikkiEnding')", "'Clear your heads' with some fun");
			break;
		}
		case "endingA2-2" : {
			writeHTML(`
				t ...
				t Eight months.
				t In just eight months, you had gone from counselor at the local university to having sex in a CEO's office on the 63rd floor of a high-rise.
				t ...Well, technically four months until you actually had sex in it, but it took eight months for it to be <b>your</b> office while you were fucking someone on the desk.
				t There's undoubtedly a certain kind of thrill to doing the act while looking out over the city...
				sp nikki; I won't bother asking if you were paying attention.
				sp player; Which is probably for the best, because I wasn't.
				t You turn around to face nikkiF, who's adjusting her skirt while looking over a clipboard.
				sp nikki; Yes, well, unfortunately for you, <i>I</i> happen to find the quarterly reports quite exciting.
				sp player; Intellectually or sexually?
				sp nikki; Do you want me to answer by saying "both", or by lifting my skirt?
				t Her dry delivery masks the amusement obvious in her eyes as she leafs through the papers.
				sp nikki; Well, that bombshell of an assistant you have out there made sure to schedule a full 45 minutes for me to go over the reports with you, playerMister "CEO".
				sp player; After you complained that twenty wouldn't nearly be enough, as I recall.
				t She smirks, pulling her glasses off as she circles around the desk to your side.
				sp nikki; I almost talked her into an hour, too... but you hardly need half that to give us both what we want, right?
				t You return the smirk, your hand going to the back of her head.
				sp player; And tell me <i>exactly</i> what you want again? I feel I could use a reminder.
				t nikkiF lets out that gentle, melodic laugh again as she kneels down under your desk, her eyes glimmering with excitement.
				sp nikki; I want you to put me under, <i>Master...</i> And <i>you</i> want a brainless bimbo suckslut under your desk to grab by the hair and <i>facefuck.</i>
				t Sitting down in the seat, letting her lean in between your thighs, you reply,
				sp player; <b>Good girl.</b> Now get sucking.
				t Forty-five minutes never went by so fast...
				t But it's not like it'd be the last time. You'd be enjoying this view for a long time to come...
			`);
			writeFunction("loadEncounter('system', 'credits')", "The End");
			break;
		}
		case "endingA3" : {
			writeHTML(`
				define spn = sp nikki;
				define spp = sp player;
				spp I'm going to have to turn you down, for now at least. I've still got a fair few things that need doing here in the University.
				spn I understand completely. Like I said, I'm in no rush.
				t She smiles, a predatory glint behind her eyes.
				spn I'll continue working on my plan in the meantime. There are always kinks to iron out. When your business is finished, or if you ever get bored, just tell me and I'll set you up with some more-expensive prey.
				spn ...Oh, though don't be a stranger if your interests for the day are a bit more <i>carnal~</i>
				t Her voice holds a teasing tone as she stands up, winking at you once as she steps out of the room.
			`);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "nikkiEnc8" : {
			writeHTML(`
				define spn = sp nikki;
				define spp = sp player;
				t nikkiF spots you immediately as you approach, a soft smile on her face.
				spn Hello again, playerMister Counselor~ Did you want to speak with me about something?
			`);
			if(checkFlag('nikki','endingA'))
				writeSpecial("Congratulations on finishing all current content for nikkiF! More is planned for her, so keep an eye out for that!")
			writeFunction("writeEncounter('endingRepeat')", "Talk about her ambitions again");
			writeFunction("changeLocation(data.player.location)", "Never mind");
			break;
		}
		case "endingRepeat" : {
			writeHTML(`
				define spn = sp nikki;
				define spp = sp player;
				spp Actually, I wanted to talk to you about your plans going forward - the ones you mentioned before.
				t Her eyes brighten significantly as she immediately starts walking.
				spn Then let's discuss this in your office, playerMister Counselor~
				...
				t When the door shuts behind you, nikkiF smiles at you with a predatory glint to her expression.
				spn Did you decide now's the time, playerSir?
			`);
			writeFunction("writeEncounter('endingA2')", "Accept her offer.");
			writeFunction("writeEncounter('endingA3repeat')", "Turn her down, for now at least.");
			break;
		}
		case "endingA3repeat" : {
			writeHTML(`
				define spn = sp nikki;
				define spp = sp player;
				spp Actually... Not yet.
				t Her smile falters for a moment, but she nods understandingly.
				spn No problem at all. Just call me back over if you change your mind.
				t With that, she heads out of the room.
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
	{index: "nikki1", name: "Handjob in the Backroom"},
	{index: "nikki1repeat", name: "Another Handjob in the Backroom"},
	{index: "nikki2", name: "Hypnotized Titjob"},
	{index: "nikki2repeat", name: "A Second Hypnotized Titjob"},
	{index: "nikki3", name: "Plowed in Bed"},
	///{index: "nikki3Alter", name: "Phone a (Sex-)Friend"},
	///{index: "nikki3repeat", name: "Plowed in Bed Again"},
	///{index: "nikki3repeatAlter", name: "Phone a (Sex-)Friend Again"},
	{index: "nikki4", name: "Face-Down, Ass-Up"},
	{index: "nikki5", name: "Hypnotized Touch"},
	{index: "nikkiEnding", name:"CEO Face-Fuck"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "nikki1": {
			writeText("Kneeling down, nikkiF looks closely at the shape of your cock through your clothes. She just sits there for a second, seemingly thinking, before reaching her hand up.");
			writeBig("images/nikki/1-1.jpg","Art by Enoshima Iki");
			writeText("Her hand strokes upwards, her palm applying pressure to the base as she gets a good, strong feel for it.");
			writeText("You can see her lick her lips a bit as she stares intently, before the sharply focus on your face.");
			writeText("She seems to almost study it for a moment, watching your features as she shifts her hand and rubs with her fingers against your covered shaft.");
			writeSpeech("nikki","","Hm...");
			writeSpeech("player","","Are you studying me?");
			writeText("Her lips curl into a small smile for a moment.");
			writeSpeech("nikki","","Guilty as charged. Everyone's different, so I can't help but be curious...");
			writeText("Her hand slides up, reaching your zipper before pulling down.");
			writeSpeech("nikki","","...what sort of expressions you'll make~.");
			writeText("nikkiF's hand helps pull your cock out, her expression going neutral again as she runs her hand along your length.");
			writeBig("images/nikki/1-2.jpg","Art by Enoshima Iki");
			writeSpeech("nikki","","Oh...? Quite the nice size.");
			writeText("Her thumb teases the underside of your cock, just barely below the head as her pointer finger slides over the ridge of your tip, feeling not too bad.");
			writeSpeech("player","","For someone curious about my expressions, you're not particularly emotive yourself.");
			writeText("She quirks a momentary smile again, shrugging slightly as her hand starts stroking your shaft.");
			writeSpeech("nikki","","I'm sure you'll see some interesting expressions with time, playerMister Counselor.");
			writeText("She leans forward, her nose gently pressing against your head as she looks up at you. She pauses for a moment, before her tongue...");
			writeSpeech("player","","Nn...");
			writeText("...slowly slides up the underside of your cock, the rough-and-wet sensation going almost too slow as you feel her breathing against you.");
			writeText("When she reaches the tip, she looks down at it for a moment, before using just the end of her tongue to circle around your cockhead, encircling the slit before pulling back.");
			writeSpeech("nikki","","...I like yours.");
			writeSpeech("player","","...Pardon?");
			writeText("Her hand resumes stroking you, her lips and tongue toying with your head as her fingers squeeze and stroke at your shaft.");
			writeText("You can't help but groan as each finger seems to shift pressure just the slightest bit differently, the spit from her tongue being spread along your cock as she goes.");
			writeSpeech("nikki","","The texture, the taste... The smell.");
			writeText("nikkiF smiles again, this time a bit wider as she takes your head into her mouth, her free hand adjusting her glasses as she bobs her head up and down.");
			writeText("She doesn't take you deep, but each time she moves, her lips drag along your sensitive glans again and again, her tongue still teasing at every point it can as her eyes linger on yours.");
			writeSpeech("player","","Fuck...!");
			writeText("Every noise you make, every facial expression and word, she seems to focus on them all as she goes, looking for the spots that make your voice go low and throaty as she goes.");
			writeText("Her hand moves faster and rougher now, her mouth opening just enough after every few bobs to leak spit down your cock before her mouth gets unbelievably tight again.");
			writeText("Letting out a low groan, you relax in place a bit, letting her do as she likes. You have half a mind to try and hold out, but she said she only wanted a taste for today, so...");
			writeSpeech("player","","I-");
			writeText("Your lips barely open before you lean further forward, sliding your cock further into her mouth with an almost mischievous twinkle to her eyes as you feel your cock rub up against the inside of her cheek.");
			writeText("Your hips buck slightly forward, rubbing up inside her mouth for just another moment, before you reach the edge and she pulls back quickly-");
			writeBig("images/nikki/1-3.jpg","Art by Enoshima Iki");
			writeSpeech("nikki","","Ah...?");
			writeText("Her hand keeps stroking you, a firm grasp milking each rope of cum from your cock as you shoot all over her.");
			writeText("She doesn't seem too focused on where it lands though, as she stares intently at your shaft until you finish, her tongue gently running over her lips again as she watches each twitch until you finally finish.");
			if(data.player.location != 'gallery'){
				writeSpeech("nikki","","...Ah.");
				writeText("Shaking her head slightly, she refocuses and raises her clean hand to her hair now.");
				writeSpeech("nikki","","I... may not have thought that through.");
				writeSpeech("player","","Here, I'll grab something...");
				writeText("...");
				writeText("Several cold wet-wipes later, nikkiF is checking her hair carefully. Seemingly satisfied, she gives a slight nod and says, more to herself than anything,");
				writeSpeech("nikki","","That should be fine for now. I'll give it a more thorough cleaning at home of course, but this will be enough until then.");
				writeText("Looking to the clock, she nods a second time before turning to fully face you. Her eyes just barely narrow as she looks you over.");
				writeSpeech("nikki","","...You're an interesting person, playerMister Counselor. I look forward to seeing more of you, if you're willing to brave the risk.");
				writeSpeech("player","","Same to you, nikkiF. Good luck keeping those grades up.");
				writeText("She gives you a wry smile, nodding once before leaving the room.");
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "nikki1repeat" : {
			writeText("nikkiF kneels down in front of you, her tongue tracing her lips as she brings her hand to your pants again.");
			writeBig("images/nikki/1-1.jpg","Art by Enoshima Iki");
			writeSpeech("nikki","","Ah...");
			writeText("Her hand toys with it through your pants for a bit, before she leans forward.");
			writeText("As she takes your cock out, it presses against her face for a moment as she takes a deep breath.");
			writeSpeech("nikki","","Mm... There we go~");
			writeText("She runs her tongue along the shaft, from the base to the tip, before leaning back and grasping you firmly with her hand.");
			writeBig("images/nikki/1-2.jpg","Art by Enoshima Iki");
			writeText("She starts stroking you fairly quickly, teasing the ridge of your head every time her hand reaches the top.");
			writeText("After a few dozen strokes, she leans forward, her tongue teasing your head playfully as she strokes you faster and faster, her other hand under her skirt.");
			writeSpeech("player","","Fuck...!");
			writeText("You feel her exhale from her nose, a small smile on her face as she targets the same sensitive points as before.");
			writeText("Minutes pass as she strokes your cock, her lips and tongue moving across your cock again and again, until...");
			writeSpeech("player","","I'm close...!");
			writeSpeech("nikki","","Don't hold back~");
			writeBig("images/nikki/1-3.jpg","Art by Enoshima Iki");
			writeText("When you finish bucking your hips, your seed spraying across her again, she lets out a contented sigh.");
			if(data.player.location != 'gallery'){
				if(checkTrust('nikki') < 45)
					setTrust('nikki',45);
				writeText("Then, pulling out a wet wipe and a small spray bottle, one almost like it's for perfume, she gives her hair a quick spritz.");
				writeSpeech("nikki","","It's the same thing that "+(checkTrust('kuro') >= 20 ? "kuroF uses." : "a friend uses when she does these sorts of things."));
				writeText("The cleanup goes pretty quickly, though the spray leaves a slight lavender scent behind. When she's finished, though, she smiles back at you.");
				writeSpeech("nikki","","Until next time, playerMister Counselor.");
				writeFunction("changeLocation(data.player.location)", "Finish");
			}
			break;
		}
		case "nikki2" : {
			writeText("You sit across from her, looking over her as she breathes softly, her eyes gently shut.");
			writeSpeech("player","","Eyes forward.");
			writeText("nikkiF looks ahead, meeting your gaze with a minute smile.");
			writeBig("images/nikki/2-1.jpg","Art by Enoshima Iki");
			writeSpeech("player","","No bra, hm? Do you usually go around campus without one?");
			writeSpeech("nikki","","Given that I usually wear my jacket with it... Yes~");
			writeSpeech("player","","Good girl. In that case...");
			writeText("Stepping toward her, you watch as her eyes follow with the pendant again, the light drumming audible as you sit down on the small couch.");
			writeSpeech("player","","Let's have some fun with them.");
			writeText("An excited spark goes through her eyes as she starts to unbutton her shirt. She's quick at removing the first few, but as she gets to the ones right on top of her tits...");
			writeText("She slows down quite a bit, a fair bit of skin exposed as she fiddles with it for a moment, teasing you a bit as she saunters over.");
			writeText("While she moves, you start to remove your own clothes, nikkiF gently biting her lip as she looks you over while you strip.");
			writeText("As you lean back, she finally undoes the last button, her hands hefting her chest as she toys with them in front of you for a moment.");
			writeSpeech("player","","Hah. Having fun, nikkiF?");
			writeSpeech("nikki","","Not as much fun as I will be~");
			writeText("Saying that, she drops down to her knees, the weight of her tits pressing down against you.");
			writeBig("images/nikki/2-2.jpg","Art by Enoshima Iki");
			writeSpeech("nikki","","Enjoying the view~?");
			writeText("Not waiting for an answer, she rolls her chest forward, her chest almost completely enveloping your shaft as her hands press both tits together.");
			writeSpeech("player","","F-Fuck...!");
			writeSpeech("nikki","","I'll take that as a yes~");
			writeText("Her expression goes back to a more neutral state as she looks down, shifting in place and watching your reactions.");
			writeText("When a certain shift makes your shaft twitch, she smiles for a moment - when she makes you groan, she lets out a contented hum.");
			writeText("Lifting her tits and dropping them a bit, smearing your pre across her cleavage as she tests to see what makes you feel best... She's focused.");
			writeText("Then, with a momentary wry smile, she opens her mouth wide, her tongue sticking out as some of her spit dribbles down between her tits.");
			writeSpeech("player","","Mm...");
			writeText("Another content hum from her as she shifts and rolls her tits around your shaft, that same spark in her eyes even with the neutral expression.");
			writeBig("images/nikki/2-3.jpg","Art by Enoshima Iki");
			writeText("She keeps rolling her chest against you, her breathing getting heavier as she does, her arousal growing even as she focuses on you and you alone.");
			writeText("nikkiF's highly focused now... Aroused and pent-up and, most of all, <b>fixated.</b>");
			writeText("She's a lot more likely to be receptive to an order now...");
			writeFunction("writeEncounter('nikkiEvent2A')","Instruct her to act without inhibitions")
			writeFunction("writeEncounter('nikkiEvent2B')","Make her feel as though her pussy is getting fucked too")
			break;
		}
		case "nikki2repeat" : {
			writeText("As you move to the couch, she quickly undoes the buttons on her shirt, stepping past the already-shed jacket as she smiles at the sight of you undressing.");
			writeText("When you're both suitably unclothed, she slowly drops down to her knees, hefting her tits high, just above your cock...");
			writeText("...before letting the drop down onto each thigh, the slap of skin-on-skin forcing a small moan of pleasure to spill from nikkiF.");
			writeBig("images/nikki/2-2.jpg","Art by Enoshima Iki");
			writeSpeech("player","","Ooh, fuck...!");
			writeText("She smiles at the sound of you, gently kneading her chest around your shaft as she drools down between her tits to lube you up.");
			writeText("Each shift of her hands presses your cock from side to side, her chest sometimes even engulfing and stimulating your head as she goes.");
			writeText("After a good few minutes of her kneading pleasure, nikkiF pauses with a focused expression.");
			writeBig("images/nikki/2-3.jpg","Art by Enoshima Iki");
			writeText("She quickly resumes the pleasure but, just like last now, she seems like she'd be particularly open to the same orders as before right now...");
			writeFunction("writeEncounter('nikkiEvent2A')","Instruct her to act without inhibitions")
			writeFunction("writeEncounter('nikkiEvent2B')","Make her feel as though her pussy is getting fucked too")
			break;
		}
		case "nikki3" : {
			writeText("nikkiF leans back onto the bed, her legs going back quite a bit.");
			writeSpeech("nikki","","PE has kept me nice and flexible~");
			writeText("She stares up at you for a moment as you take in the view.");
			writeBig("images/nikki/3-1.jpg","Art by [ARTIST]");
			writeSpeech("player","","A smart girl knows when to say no... but you're not trying to be a smart girl right now, are you? You want to be something else.");
			writeText("Stepping forward, you get a bit closer and grasp her legs just above the knees, pinning them down beside her as you lean in.");
			writeSpeech("player","","You want to be a <b>good girl</b>, don't you?");
			writeSpeech("nikki","","Yes~");
			writeText("You lean into her more, your cock rubbing at her pussy slowly, teasingly pressing your shaft against her lips.");
			writeBig("images/nikki/3-2.jpg","Art by [ARTIST]");
			writeSpeech("player","","You just want to focus on this, on the pleasure of being filled.");
			writeSpeech("nikki","","Yes~...!");
			writeSpeech("player","","You just want...");
			writeText("You pull back more, your head now pressed against her, just barely keeping from thrusting in to split to her open...");
			writeSpeech("player","","...to go <b>blank</b> with ecstasy.");
			writeSpeech("nikki","","Yes~! Yes, yes, ye-");
			writeBig("images/nikki/3-3.jpg","Art by [ARTIST]");
			writeSpeech("nikki","","<i><b><font size='+2'>Haaaah...! Yesss~!</font></b></i>");
			writeSpeech("player","","<b>Good girl.</b>");
			writeText("You slam your hips forward, pounding into her again and again as her warm, wet heat drives you to fuck her wildly.");
			writeText("You don't even need to rely on hypnosis to increase her sensitivity; the idea of being a blank-minded fuckhole has her shuddering and squirming in bliss already.");
			writeSpeech("player","","You're an absolute slut, aren't you? Desperate to lose yourself to pleasure.");
			writeSpeech("nikki","","Y-Yes...!");
			writeText("Her body shudders even harder now, her mind hardly able to focus on anything beyond you, your words, and your thrusting.");
			writeSpeech("player","","An honest girl is a <b>good girl.</b>");
			writeText("You slam your hips forward to punctuate the trigger, making her gasp sharply as you fuck her harder, her tits bouncing wildly with each slap of your hips against her ass.");
			writeText("You wordlessly thrust into her again and again - no need to overuse the trigger when she can clearly barely think.");
			writeText("Fucking her like that, you push her legs against the bed more firmly as you swing your hips against her, seconds bleeding into minutes as she squeals and moans.");
			writeText("You're not sure how long it is before her shuddering takes on a very different feeling, as she approaches the edge.");
			writeText("You can hardly blame her, given that you're sure you two have been at it for a little while now.");
			writeSpeech("player","","You're close, aren't you?");
			writeSpeech("nikki","","H-Haah, ahh...~! Y-Yes~! P-Please, I'm getting close...!");
			writeText("You start to slow down a bit, frowning down at her as her face takes on a desperate look for a moment... before you start going as hard and as fast as you can.");
			writeText("Her breath catches in her throat as her mouth opens wide in a silent, blissful moan as she squeezes around you, every thrust making her tighten and relax uncontrollably.");
			writeText("She's barely able to squeak out one moan after the other as her eyes roll up, and you approach the edge yourself.");
			writeSpeech("nikki","","<i><b>F-Fuck...~!</b></i>");
			writeText("When she starts orgasming around you, you can feel her get tighter than before, the spasming around your cock as she shakes beneath you pushing you over.");
			writeSpeech("player","","I'm about to...!");
			writeText("With a shuddering breath, you pull out just as you start to cum.");
			writeBig("images/nikki/3-4.jpg","Art by [ARTIST]");
			writeSpeech("nikki","","H-Haaah...");
			writeText("nikkiF relaxes a bit as she comes down from the orgasm, starting to smile gently as she looks over the cum across her chest.");
			writeText("Using her finger, she scrapes up a bit of it and, with a wink, brings it to her lips... before leaning back into the bed with a satisfied sigh.");
			if(data.player.location != "gallery"){
				writeText("...");
				writeText("A little while later, after both of you relax a bit and then clean up, nikkiF stretches out a bit.");
				writeSpeech("nikki","","Mm... That was a lot of fun~ I swear, that hypnotism of yours is positively sinful with how good it feels.");
				writeSpeech("player","","Hah, I think that has more to do with you enjoying being an empty-headed slut.");
				writeText("She gives you a smirk, winking at you again.");
				writeSpeech("nikki","","Keep calling me that, and I'll end up too turned on to leave the room.");
				writeSpeech("player","","You say that like it's a bad thing.");
				writeText("nikkiF rolls her eyes, checking her skirt.");
				writeSpeech("nikki","","There's only so much time in the day, unfortunately. Next time, though...");
				writeText("She leans into you a bit, her breasts pressing against you as she whispers lustfully,");
				writeSpeech("nikki","","Call me a slut even more, playerMister Counselor~");
				writeText("With that, she turns around and strides confidently out the door... or as confidently as she can with a slight shudder in her step from the rough fucking.");
				writeText("Whatever the case, it's probably about time to deal with other things...");
				writeFunction("changeLocation(data.player.location)", "Finish (for now)");
			}
			break;
		}
		case "nikki3Alter" : {
			writeHTML(`
				t You smirk up at her.
				sp player; You know... I distinctly remember 
			`);
			break;
		}
		case "nikki3repeatAlter" : {
			break;
		}
		case "nikki4" : {
			writeHTML(`
				t Dropping her shirt and skirt to the ground, she pauses for a moment at the thigh-highs, before leaving them on as she kneels on the bed.
				t She slowly bends down, her chest pressing into the sheets as she looks back at you teasingly, wiggling her ass as she relaxes just a bit.
				im 4-1.jpg
				t Getting onto the bed yourself, you slowly move your hand along her ass, your thumb teasing at her labia as she subtly shifts at your touch.
				sp player; A smart girl knows when to say no, but you don't <i>want</i> to be a smart girl right now, do you?
				t You rub your cockhead against her pussy, feeling her push her hips back a bit, but enough to get you to push into her.
				sp player; All you want is to feel <i>good,</i> isn't that right?
				sp nikki; Y-Yes...!
				t You smile, your hand getting rougher as you grasp her ass.
				sp player; Good...
				t She shudders slightly in anticipation, waiting for the second word, but...
				sp player; Very good.
				t She pauses slightly, but stays mostly still.
				sp player; You don't need to think right now, nikkiF... Right?
				sp nikki; Yes...!
				t Your hand pauses slightly.
				sp player; Yes <i>what?</i>
				t She bites her lip slightly, a shudder going down her back as she replies,
				sp nikki; Yes <i><b>*Sir~</b></i>
				sp player; <b>Good girl.</b>
				im 4-2.jpg
				sp nikki; <i><b>Ahnn~!</b></i>
				t Her voice fills the room momentarily as you thrust into her, small pants and moans spilling out with each swing of your hips.
				sp player; A <b>good girl</b> can stop thinking so hard. You can just keep focusing on nothing but <i><b>this.</b></i>
				t You punctuate your words with a heavy thrust, fucking her into the bed roughly as her moans pick up.
				sp player; All you need is to be <i>fucked stupid</i> like the <i>toy you are.</i>
				t Her pussy squeezes around you as you say that, her back arching further as she gasps in pleasure.
				sp player; Isn't that right, <b>slut?</b>
				sp nikki; Y-Ye-
				im 4-3.jpg
				t You interrupt nikkiF with another forceful slam into her, her voice cutting out as she writhes in pleasure.
				sp nikki; Yes yes <i>yes yes <b>YES~</b></i>
				sp player; <b>Good girl.</b> Just keeping saying yes while I pump your slutty cunt full, and don't bother thinking about anything else. Just let every thrust fuck away all those annoying thoughts...
				sp nikki; Y-Yes *Sir~...!
				t Thrusting forward, you let your own throaty moans spill out as you slam into her, thrusting at a comfortable pace for a while as nikkiF's head goes blank with the pleasure.
				t Her pussy just keeps squeezing around you, unconsciously trying to milk you as she shudders and squirms under you. When her pleasure slowly reaches the peak, her orgasm spreading through her entire body, you can feel it from the way she starts squeezing even tighter.
				sp player; You're getting close, aren't you?
				t She barely nods, still muttering yes again and again, before you give her a firm slap on her ass.
				t nikkiF moans sharply, the haze disappearing from her eyes for just a moment as you say,
				sp player; You'd better be, since I'm about to finish too.
				t A lustful, almost hungry look appears in nikkiF's eyes at that as she squeezes tight around you, the spank just enough to clear her head and get her to beg:
				sp nikki; Fuck yes, please~! <i><b>Cum inside your little slut~!</b></i>
				t Grinning, you throw yourself into each thrust, fucking her slick, wet pussy with abandon as you focus solely on going over the edge.
				t When it happens, it's with a loud groan of pleasure from you, and a squealing moan of ecstasy from nikkiF.
				im 4-4.jpg
				sp nikki; <i><b>F-Fuckkk~!</b></i>
				t You buck your hips into her's several more times as you cum, her eyes rolling up at the sensation of being filled as she shudders and quakes beneath your body.
				t Each pulse of your cock and jet of your cum cause her to moan thoatily, her mind still hazed-out as the pleasure keeps pushing aside any rational thoughts.
				t She stays that way for a while after you finally pull out, your cum spilling out onto the sheets as she pants. When she finally collects herself, it's with a half-dopey smile.
				sp nikki; H-Haah... That was amazing~ Thanks for the fun, *Mister Counselor~
				sp player; Any time, nikkiF.
				`);
			if(data.player.location != 'gallery')
				writeFunction("changeLocation(data.player.location)", "Clean and finish up");
			break;
		}
		case "nikki5" : {
			if(data.player.location == 'gallery'){
				writeFunction("writeEncounter('nikkiEnc6')", "Start with the hypnotic induction");
				writeFunction("writeEncounter('nikkiEvent5')", "Skip the hypnotic induction");
			}
			else{
				writeEncounter('nikkiEvent5');
			}
			break;
		}
		case "nikkiEnding" : {
			writeHTML(`
				t nikkiF gets down on her knees, smirking as you bring your hand to the back of her head... only for a more quizzical expression to appear as you push her a bit further down.
				t Her hands rest on the ground as she holds still, patiently observing you with the tell-tale flush of excitement on her face.
				sp player; Just a moment...
				t You let your hand trail across her back, slowly inching along it as you let out a low hum. When your hand reaches her hips, you drag your thumb along her skirt for a moment, before reaching under it with your other hand.
				sp player; No panties?
				t It's easy to tell as you tease her lower lips with a finger, drawing along the slit methodically, that she's already drenched and read to go.
				sp nikki; I thought you'd like it better that way~
				t You smile at her, slowly pushing your finger into her wet pussy as she inhales sharply.
				sp player; <b>Good girl.</b>
				t Your free hand slowly adjusts her skirt, carefully removing it as you continue to fingerfuck her cunt for a few moments more... before stopping.
				t There's a momentary flash of disappointment in her eyes, but it disappears a moment later as she waits. No complaints, just a compliant toy... Just like she wants to be.
				im E-1.jpg
				sp player; You're really that desperate for praise today, aren't you?
				t There's no shame in her eyes as she nods firmly, answering quickly,
				sp nikki; Absolutely.
				t You can't help but chuckle at the almost brusque reply, before giving her a light swat on the ass as you circle around her.
				sp player; Such a <b>good...</b> <i>toy</i> you are.
				t She exhales sharply at that, but not from the spike in pleasure she was expecting. Her eyes narrow at you, and you reply,
				sp player; Oh, do you prefer <b>good...</b> <i>bitch?</i>
				t Another swift swat on her ass has her shuddering, but she bites her lip as she looks at you again.
				t When you're completely behind her, you line your cock up to her entrance as give her thigh a firm squeeze, enjoying the feeling as she starts pushing her pussy back against your shaft.
				sp nikki; If you want me to beg, playerSir, I'll gladly-
				sp player; <b>Good girl.</b>
				t The sudden interruption throws her off balance, and you push your cock in as her pleasure spikes.
				t You thrust into her, slowly pushing in each inch as she lets out shaky breaths. When you finally bottom out, she's gently panting as she arches her back.
				im E-2.jpg
				t You stay like that for a bit, your cock fully shoved into her cunt as you lean against her back.
			`);
			if(data.player.gender == "man")
				writeText("You reach your hand below her, grabbing onto her breast and teasing at them with your palm, feeling them shift in your hand as she quietly moans.");
			else
				writeText("Your tits press against her back as your hand reaches below her, grasping at her breasts and teasing them roughly.");
			writeHTML(`
				t Slipping your hand into her jacket, you can feel that she's once again gone without a bra as you feel her hard nipples easily.
				sp player; Someone's excited, hm?
				sp nikki; M-Mm... Yes, playerSir~
				t You chuckle a bit, before blowing gently on her ear and whispering,
				sp player; <b>Good girl.</b>
				t She tightens up around your cock as she bites her lip, a sharp exhale accompanying a soft, pleasured whine.
				t You don't have to be able to see her eyes to know that they're starting to get a bit unfocused, the trigger again pushing her further down.
				t But that alone isn't nearly enough.
				t You pull her tightly against you, your chest and her back now completely flush to one another as you move your hand from her chest down. Your fingers trail across her stomach, your nails just barely dragging across her skin as she squirms slightly under your touch.
				t When you reach your target, her breathing hitches yet again as she holds still.
				sp player; Such a cute little thing, hm?
				t Your fingers trail along the top of her pussy, teasing around her clit and gently running your finger right beside it.
				sp player; You want me to play with it, don't you?
				t She opens her mouth to speak, but you quickly buck your hips forward. Despite already being bottomed-out, the stimulation is still enough to make her words catch in her throat.
				sp nikki; Y-
				t You interrupt her again, pulling back first just enough that when you push forward again, you're just barely fucking her.
				sp player; How weird, I would've thought you would want me to. Oh well.
				t Straightening your back a bit, you hear her draw in breath to speak again, and you respond by thrusting even more forcefully, only to hear-
				sp nikki; <i><b>FUCK YES PLEASE~!!</b></i>
				t Instead of being interrupted, she rolls with it as her hands unsteadily hold herself up.
				t Frankly, if she's that excited for it...
				sp player; If you insist, then consider it a reward.
				t Smirking, you lean back in and start teasing her clith and lips, even as you buck your hips forward and back just a bit. You never slide more than an inch out of her, but between the wet tightness of her hole and the sounds nikkiF keeps making, you're sure you're both enjoying the ride.
				t The soft, high whining sounds nikkiF makes are uncharacteristicly adorable coming from her lips as as you fuck her and rub at her clit, and the sharp inhale as you gently pressure it between two fingers suggests that she's getting close to the edge fairly quickly.
				t Of course, you don't intend to let her finish so quickly.
				sp player; Now... for the <b>rest</b> of the reward.
				t You start to straight up now, your hand moving away from her sensitive clit and trailing along her hip.
				sp nikki; H-Huh...?
				t You slap her ass sharply, her breath hitching as a rush of pleasure shoots up her spine.
				sp player; Such a <b>good, good girl.</b>
				im E-3.jpg
				t nikkiF's fingers drag against the floor as her body quivers, her head rolled back as the pleasure keeps mounting.
				t You thrust into her more forcefully now, your hips against her causing her ass to shake as you grasp and spank her ass again.
				sp nikki; F-Fuckkk~!
				t The way she tightens around you every time you spank her, especially with how wet she's gotten, is pushing you to the edge.
				t Grasping her hips with both hands now, you start pulling her into you with each thrust forward, her ass quaking as you fuck her deep and fast.
				sp player; Here it comes...!
				t nikkiF's groaning moans only get louder as she arches her back further, sharp gasps spilling from her mouth as she shouts,
				sp nikki; Yes, <i><b>yes,</b></i> fill my slutty hole with your cum~!
				im E-4.jpg
				sp nikki; <i><b>OOOOOHHH~!</b></i>
				t nikkiF's body shudders heavily as each rope spurts out, filling her up. You keep thrusting, her arms starting to give out in pleasure beneath you as you keep bucking into her.
				t By the time you finish, your balls thoroughly drained inside of her, she's been practically fucked prone, her empty-headed stare and blissful smile showing her as the dopey, thoughtless, bimbo slut she wanted to be made into.
				t You have to take a few minutes to recover yourself, just catching your breath after giving it your all...
				t ...and then you give her a few more minutes on top of that, just as a little brainless-bimbo-bonus for her.
				sp player; Such a <b>good girl...</b>
				t She twitches slightly, moaning ever-so-softly as you say that, as you brush some of her hair out of her face.
				sp player; ...but it's time to be a smart girl again, nikkiF, so let's get up, hm?
				t Slowly, nikkiF's eyes refocus as she blinks a few times. Still half-dopey, she rolls over onto her back, her body shuddering slightly as her fucked-red ass presses against the floor.
				sp nikki; H-Haah... Fuck, that was good...
				t You laugh, nodding.
				sp player; Take your time; we have all the time in the world.
			`);
			if(data.player.location != 'gallery'){
				writeHTML(`
					t ...
					t nikkiF takes a few slow, deep breaths before adjusting her skirt and checking herself over.
					sp nikki; Alright... Thank you for that, playerF. I'd stay for the cooldown, but if you don't mind, I really should start draft an email to my mother about a certain unknown-masseur's skills.
					t You nod, smiling to her.
					sp player; Then I'll talk to you later. If you need me, I'm just a text message away.
					t She nods, before turning sharply on her heel and walking out quickly, leaving you sitting with bemusement. Outside of the sex, she's always a curt one...
					t To be honest, taking over entire companies really wasn't something you were interested in before... but it's not like you were against it.
					t Besides, you'd be lying if you said you weren't interested in seeing whether she could actually pull off what she's claiming. After all, isn't a part of being a counselor the act of helping others reach their full potential?
					t With that in mind, you open the link on your phone and start a cursory scroll...
					t ...And damn, this thing is <b>thorough</b>...
				`);
				writeFunction("writeEncounter('endingA2-2')", "Follow the plan.");
			}
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
	{index: "nikkiText1", requirements: "?trust nikki 55;"},
	{index: "nikkiReward", requirements: "?trust nikki 200;"},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "nikkiText1" : {
			writePhoneSpeech("nikki","","Hey there, playerMister Counselor");
			writePhoneSpeech("nikki","","How's your morning thus far?");
			writePhoneChoices("Pretty good, you?", "Better now that you've texted me");
			break;
		}
		case "nikkiText1A" : {
			writePhoneSpeech("player","","Pretty good overall. How about you?");
			writePhoneSpeech("nikki","","Had a bit of a slow start, but that makes sense when you consider how annoying posing can be.");
			writePhoneSpeech("player","","Posing?");
			writePhoneImage("images/nikki/text1.jpg", "nikkiText1, Art by Enoshima Iki");
			writePhoneSpeech("nikki","","I'm headed out the door now, but I hope I'll see you on-campus, playerMister Counselor~");
			break;
		}
		case "nikkiText1B" : {
			writePhoneSpeech("player","","Better now that you've texted me. How's yours going?");
			writePhoneSpeech("nikki","","You're quite the flirt, aren't you? Though I certainly won't complain~");
			writePhoneSpeech("nikki","","Had a bit of a slow start, but that makes sense when you consider how annoying posing can be.");
			writePhoneSpeech("player","","Posing?");
			writePhoneImage("images/nikki/text1.jpg", "nikkiText1, Art by Enoshima Iki");
			writePhoneSpeech("nikki","","I'm headed out the door now, but I hope I'll see you on-campus, playerMister Counselor~");
			break;
		}
		case "nikkiReward": {
			writePhoneImage("images/nikki/reward.jpg", "nikkiReward, Art by Enoshima Iki");
			writePhoneSpeech("nikki", "", "You've made it to the end of nikkiF's current content, congratulations! Leave a comment in the Discord or any of the discussion threads if you're interested in seeing more!");
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