var character = {index: "serious", fName: "Aaron", lName: "Lucky", trust: 0, encountered: false, textEvent: "", met: false, color: '#338ABA', author: "KH_Ace", artist: "", textHistory: "", unreadText: false,};

var logbook = {
	index: "serious", 
	desc: "A student who's known for living the life in his accord, though the teachers tend to complain about his carefree style he always ends up being one of the top students in the class.",
	body: "He's a bit below average in terms of height, on the other hand he's pretty quick on his feet, making you wonder if he hangs up with the track team too.",
	clothes: "His choice for a school uniform is a gray sweater on top of his shirt and tie, nothing uncommon at all, believe it.",
	home: "His assigned class is class B, though it's said that's the last place you should look if you're looking for him.",
	tags: "Crossdressing, anal, orgasm denial, tomgirl, light bdsm",
	artist: "Nagi Ichi and Silver Radish<br>Original Image Set: Otokonoko to xx No. 1- Josou Shumi no Oshiego Hen~",
	author: "KH_Ace",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "introserious", name: "A lone student in the hallway catches your eye", location: 'eastHallway', time: "Morning", itemReq: "", trustMin: 0, trustMax: 0, top: 0, left: 0, day: "both",}, 
    {index: "streetmeet", name: "You see a familiar face on the streets", altName: "Familiar Bystander", location: 'street', altImage: "images/serious/seriousa.jpg", time: "Evening", trustMin: 5, trustMax: 5, itemReq: "", top: 0, left: 0, day: "both",},
    {index: "hypnobegin", name: "serious's here for today", location: 'classroomA', time: "Morning", itemReq: "", trustMin: 10, trustMax: 15, top: 0, left: 0, day: "both",},
    {index: "rrserious1", name: "serious is here", location: 'northHallway', time: "Evening", itemReq: "", trustMin: 20, trustMax: 20, top: 0, left: 0, day: "both",},
    {index: "phoneuncheck", name: "Pay serious a visit", location: 'apartmentOutside', time: "MorningEvening", itemReq: "", trustMin: 25, trustMax: 25, top: 0, left: 0, day: "both",},
    {index: "streetremeet", name: "serious is here", location: 'street', altImage: "images/serious/seriousa.jpg", time: "Evening", trustMin: 30, trustMax: 30, itemReq: "", top: 0, left: 0, day: "both",},
    {index: "gymplay", name: "serious is here", location: 'westHallway', time: "Morning", itemReq: "", trustMin: 35, trustMax: 40, top: 0, left: 0, day: "both",},
    {index: "neighbor", name: "Pay serious a visit", location: 'apartmentOutside', time: "Evening", itemReq: "", trustMin: 45, trustMax: 50, top: 0, left: 0, day: "both",},
    {index: "postQuo1", name: "serious seems to stick in his own class during a break", location: 'classroomB', time: "Morning", itemReq: "", trustMin: 60, trustMax: 666, top: 0, left: 0, day: "odd",},
    {index: "postQuo2", name: "serious is here, chitchatting with other bois during recess", location: 'classroomA', time: "Morning", itemReq: "", trustMin: 60, trustMax: 666, top: 0, left: 0, day: "even",},
    {index: "seriousHotelGood", name: "Ask about serious", requirements: "?flag succubus hotelGood; ?trust serious 666;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
    writeHTML(`
		define player = sp player;
		define serious = sp serious;
		define seriousa = sp serious; im images/serious/seriousa.jpg; altColor #C00157;
        define succubus = sp succubus;
        define nagatoro = sp nagatoro;
        define demon = sp demon;
        define tomgirl = sp tomgirl;
        define meji = sp meji;
        define camboi = sp camboi;
        define fitboi = sp fitboi;
        define intern = sp intern;
        define indamn = sp intern; im images/intern/indamn.jpg; altColor #C078A1;
        define blessed = sp Theo; im images/intern/blessed.jpg; altColor #B1355D;
        define black = sp Black Haired Succubus; im images/demon/dark.jpg;
        define clubs = sp clubs; 
        define diamonds = sp diamonds;
        define hearts = sp hearts; 
        define spades = sp spades; 
        define ayeye = sp ayeye;
	`);
	switch (name) {
		case "cancel": {
			unencounter("serious");
			changeLocation(data.player.location);
			break;
		}
		case "introserious": {
			writeText("It's too damn hot outside this morning. Usually, at this time of the day the students would be filling every corner of the campus, but today, everyone's taking shelter indoors to avoid the hot, stale air. Anyone brave (or dumb) enough to take a step out of their blissful shadows regret it right away, the few students you see on the hallways are all loudly complaining about their schedules and the heat as they pass you.");
            writeText("Of course the students aren't the only ones to be affected by the weather, with your mouth dry as a desert you decide to give cafeteria a visit.");
            writeSpeech("player", "", "<font size= '-1'><i>Should I get soda or water for today? Or maybe both..?<br>...Probably both.</i></font>");
            writeText("As you make your way to the cafeteria you sense a pair of eyes watching you.");
            writeBig("images/serious/idle.jpg", "art by Silver Radish and Nagi Ichi");
            writeText("Since he's standing in the hall all by himself he doesn't catch any attention whatsoever, on the other hand given the way he's staring at you, you feel like you might have to wait for your drink.");
            writeFunction("writeEncounter('intro')", "Try talking to him");
			writeFunction("changeLocation('eastHallway')", "Try to ignore him");
			break;
		}
        case "intro": {
            passTime();
            setTrust('serious', 5);
			writeHTML(`    
                player <font size= '-1'><i>Can't I even enjoy a bottle of soda in this place?</i></font>
                t If you remember correctly, the boy staring at you you (without really blinking at all) must be seriousF seriousL, a class B student drawing a rather upstanding profile among the others in the class, though according to his teachers' notes he's a little "hard to contain", whatever that means.
                t As you walk towards him, his blank expression changes into a faint smile.
                player Got something on my face or you've anything you want to say?
                t He raises his hand for a handshake as his lips curve for an even wider smile.
                serious Nothing attractive on your face, you're playerF right? The new counselor?
                t Even though you've heard only one sentence from him so far, you already have a few impressions and observations about him.
                t First of all, he's finally blinked for the first time, <i>so he isn't a robot with some weird staring protocol</i>.<br>Second, despite what he said about your pretty face you can't hear that "tone" in his voice at all, as if he's telling his honest opinion about it (though you're hoping he isn't).<br>And last but not least, the hand you just shook is beyond your expectations.
                player I'm not even going to ask how you know my name.
                serious Peh, it's actually not that hard when you're a skilled mind reader.
                t With the serious tone in his voice it literally takes you a moment to understand he's just kidding.
            `);
            if(checkTrust("nagatoro") > 0){
                writeSpeech("player", "", "Great, as if one nagatoroF wasn't enough.");
                writeSpeech("serious", "", "Huh? What about him?");
                writeText("While asking that you see his face blushing ever so slightly, is there something going on between them..?");
                writeSpeech("player", "", "He also did that 'I can read minds' thing to me when we first talked with him.");
                writeText("With a notification pling from his phone, his attention slides towards the device.");
                writeBig("images/serious/happy.jpg", "art by Silver Radish and Nagi Ichi");
                writeSpeech("serious", "", "Aww, did he really steal my line? He can't even keep a serious face like I do tho.");
                writeSpeech("player", "", "Maybe you guys should just stop messing with me altogether, how about that?");
                writeText("He puts his hand on his chin for a moment to think, or at least act like he does.");
                writeSpeech("serious", "", "Hmmm, how about no?");
                addFlag("serious", "nagatoro1");
            }
            else{
                writeSpeech("player", "", "I'm not falling for that one, nope, sorry.");
                writeSpeech("serious", "", "Peh, and I was so sure my confident face was on point this time.");
                writeText("He frowns with his hands down and shoulders lowered, though you can see this one is but a joke as well.");
                writeSpeech("player", "", "Well you still got me there for a moment, so I think you did good enough.");
                writeSpeech("serious", "", "Really? <i>Yaaaay~</i>");
                writeBig("images/serious/happy.jpg", "art by Silver Radish and Nagi Ichi");
                writeText("Now that he's happier, and since his little joke picked your curiosity, you think it'd be time to ask him how he got your info.");
                writeSpeech("player", "", "Okay, if you're done joking I'd like to as-");
                writeText("<b><i>*Pling*</i></b><br>With the notification of his phone, his focus completely slides from you onto his little device in his hand. He signals you to be quiet with a finger up as he replies to the message he just received.");
                writeSpeech("serious", "", "Sorry eh, really had to answer that one, what was it again?");
            }
            writeHTML(`
				player That's fine, only if you tell me what it is if not psychic powers.
                serious Heh, did you not just say "I'm not even gonna ask it"?
                t You nod.
                player I did, and if you didn't make your little joke I wouldn't ask it as I said.
                serious Ugh, ya sure alright.
                t His phone buzzes with another message which he replies without delay.
                serious <i>I may or may not have heard the (oh so elite) Madame Principal talk boutcha on her phone, that answers your question?</i>
                t You shrug, making a thoughtful face as you express your concern.
                player Doesn't that make you an eavesdropper in a way?
                t He swings and locks his phone while grunting, with eyes (not so friendly anymore) back on your face.
                serious I mean, no? The hell? Is it a crime to <i>accidentally</i> overhear a phonecall?
                t You give him a confident shrug, pissing him off even more before you start explaining just in time to stop his complaints.
                player It's odd to recognize someone you've learned about via an <i>"accidental overhear"</i> though you know.
                im images/serious/ha.jpg
                serious Ah- I mean err so what eh? It's just that my memory is strong, if yours isn't then it's none of my fault.
                player There you go, second stage of grief, anger.
                serious <b>UGH!</b> Alright yeah so what? Gonna report me to your boss like a model employee or something? Gonna get a golden star for that too?
                t With his fists clenched and visible anger, it looks like he might cry out of frustration at any moment now.<br>...That's not a good thing, especially since you're in the hallway, maybe it's time to be a little nicer with him.
                player I have no reason to tell anyone you know, and I'm not going to do that.
                im images/serious/annoyed.jpg
                serious Oh now you say that? Am I supposed to feel grateful or what?
                player You don't have to feel anything, after all my job is to solve problems with the students, not reporting them.
                t He asks you to give him a moment by raising a finger up, after which he closes his eyes and letting out a deep sigh to calm himself down.
                t Both of you just stare at each other for a while, neither of you saying a thing and expecting the other to speak first.
                serious <i>Uhhh.</i>
                player Awkward?
                t With his right hand on his left arm, he looks down with an embarrassed face.
                serious Yea-<br><i>Sorry for that *sir, I lost control for a moment.</i>
                t You give him a pat on the shoulder, his eyes meeting with yours again.
                player Look, it's fine really, but is there anything you'd want to talk about?
                serious Excuse me?
                t You gesture at yourself with one hand, other hand still on his shoulder, he doesn't seem that uncomfortable about it anymore.
                player I mean that's what I'm here for, being there if students need to talk with someone, tell what's bugging them, get help solving their problems and so.
                t He lowers his head again though not really trying to hide his face this time.
                serious <font size= '-1'>Are you sure it'd work..?</font>
                player To be fair, I can't really promise it would, but I can promise to do everything I can to make it work.
                t He nods slowly.
                serious I know, I know... <i>Let's keep it quick then huh? Don't wanna be late to the class.</i>
                player It'll not take that long unless you've a lot to talk about.
                serious <i>Lead the way then.</i>
			`);
            writeFunction("writeEncounter('introend')", "Take him to your office");
			break;
		}
        case "introend": {
            if(checkTrust("ayeye") == 0 && data.player.carnivore != true){
                setTrust('ayeye', 5);
            }
            if(checkTrust("clubs") == 0){
                setTrust('clubs', 5);
            }
            if(checkTrust("diamonds") == 0 && data.player.carnivore != true){
                setTrust('diamonds', 5);
            }
            if(checkTrust("hearts") == 0 && data.player.carnivore != true){
                setTrust('hearts', 5);
            }
            if(checkTrust("spades") == 0){
                setTrust('spades', 5);
            }
			writeHTML(`
                t You open the door, get behind your desk and take a seat on your chair.
                serious So that's your office huh? To be fair it doesn't look that bad.
                player Thanks, and oh please take a seat.
                t He sits on the couch you show him, hands laid on his knees, eyes locked on your face.
                serious So let me make this clear, I'll tell you anything that bothers me etcetera and you'll note them down to figure out how to help me eventually, right?
                player Yup, it's good to have someone knowing the process every once in a while.
                t He takes a deep breath, his fingers tapping on his knees.
                serious Well that's exactly where it gets complicated, <i>I don't know what's bothering me either...</i>
                player Would be a little optimistic to expect everything to go so smoothly anyway, but we'll solve it this or that way don't worry.
                t He nods without saying a word.
                serious I mean you don't really have to, like I know at least five students that need this kind of help more than I do.
                t You pull your notebook and pen out of your handbag.
                player If you don't mind may I?
                t He looks up with eyes closed probably trying to remember the names to give you, after a moment he starts listing a bunch of names for you to note them down neatly.<br>Once you're done noting you rip that page off and put it in your bag before giving seriousF a thumbs up.
                player Alright, from what I see you're not the kind to accept a favor out of nowhere right?
                serious Mhm, being grateful for something I haven't asked for is such a dumb burden.
                t You put both of your arms on the desk and give him a tiny smile.
                player So am I, and the list here is no small help.
                serious ...You're not thinking of what I'm thinking of right?
                player Bad news, I am.
                t He slams his right knee, shaking his head while looking down.
                serious "Since you helped me, let me help you too so I won't feel like I owe you" right? 
                player To be honest I enjoy not needing to explain anything, maybe I can even get you to counsel for yourself huh?
                t He starts laughing along.
                serious And how will you "help me" if I do everything myself?
                player It was a joke.
                serious 'Kay.
                t You start spinning your pen in your hand, looking at him with a blank face and waiting for him to start speaking.
                serious <b>Ughhhh fine!</b> But I told you I don't even know what's wrong with me.
                player Yeah, so how about you answer my questions so I can pick the problems out myself?
                t He stops to think for a moment, looking at the clock on the wall which (unfortunately for him) isn't showing a time he could use as an excuse to leave.<br>After finally giving up, he fixes his posture with a stretch.
                serious I guess giving it a try wouldn't hurt huh?
                player Worst case scenario, we waste an hour, but we can't know if we don't try.
                t You start asking him questions, about his life, his hobbies, his friends, the people he told you about, then eventually his problems and his opinions on hypnosis. He takes his time to think after each question to give you his best answers, flipping a coin in his hand the entire time.
                t ...
                serious Don't get me wrong, I know hypnosis can be really helpful, <i>I just hate being told what to do so yeah.</i>
                player I see, don't worry about it though, getting someone in a trance isn't as easy as just dangling a pendant at their face and ordering anything you feel like.
                t He checks his watch, the recess is finally over.
                serious Well, thanks for the help I guess.
                player See you later seriousF.
                serious That is, if you can find me.
                t Without adding another word he leaves and shuts the door behind, you take a look at your notes to see what type of problems you may encounter.<br>First of all, his hate for being ordered around might make him a hard target but who knows, helping his friends out might make your job a little easier as well. And the second problem is...
                player <i>Goddamn I should've gotten myself a drink...</i>
            `);
            writeFunction("changeLocation('playerOffice')", "Go back");
			break;
		}
		case "streetmeet": {
            passTime();
            setTrust('serious', 10);
			writeHTML(`
                t The crowd in the streets is nothing short of a human sea, it makes you think everyone waited for today to go outside. Though the sun is setting slowly behind the taller buildings on the horizon places like cafés, restaurants and shops are still cramped with the loud pile of people living their life, or maybe just drinking their coffee.
                t You're taking a stroll and just enjoying the chilling of the soft wind on your face when you hear a whistle from behind.
                sp ???; im images/none.png; Don't you think it's a little rude to walk past a friend without saying hi?
                t You turn around to check where the sound came from, though it doesn't take you too long to find them since the person is standing by the wall right behind you.
                im images/serious/bystander1.jpg
                player <i>...You aren't who I'm thinking of, right?</i>
                seriousa It really depends actually, If you're thinking of someone named seriousF then I may be who you're thinking of.
                t You let out a deep sigh before greeting him.
                player Good to see you again, seriousF.
                t He lets out a giggle before bowing his head a little to return the greeting.
                seriousa Why thanks, how's it going?
                player I mean I'm doing good but like you know, what're you doing here like this?
                im images/serious/bystander2.jpg
                seriousa Huh? Oh you mean the dress? Anythin' wrong with it?
                player Nothing wrong about the dress, it's just the place.
                t He swings his head to fix his hair after the speeding wind blows it at his face.
                seriousa <i>Urgh it got in my damn eye oof...</i> Oh yeah uhm what's wrong with the place?
                player Well I don't know, boys usually tend to be shy when they're wearing girls' dresses.
                t He checks his phone for a moment, nodding at what you said.
                seriousa I know right, not me though, I look hella good in them.
                player You know of the others that do?
                t He giggles, swinging his hair once again.
                seriousa I know way more than you think.
                player Do you always listen to other people minding their businesses to get info or do you get like prophecies from the god himself?
                t He looks away slowly, not that he looks like he's trying to hide his face, instead he just looks uninterested.
                seriousa I'm not a spy or something like that 'kay? Maybe I do overhear more than I should but that's all.
                t You look thoughtful for a moment as another gust of wind blows his hair onto his face and make him curse under his breath again.
                player Well, if you happen to hear anything worth my interest, let me know.
                seriousa I am not your private investigator or anything yet champ, on the other hand if I feel like there is something worth telling you I'll keep it in mind.
                t You nod and offer him a handshake but he completely ignores the hand you offered him. 
                player Look seriousF, I'm sorry, didn't mean to treat you like a criminal.
                im images/serious/bystander1.jpg
                seriousa Do you really believe in what you just said? Do you really expect <i>me</i> to believe in that?
                t You stop to think for a moment, if you're being objective invading other people's privacies like this could be considered a petty crime. On the other hand seriousF isn't using the stuff he learned to blackmail people or anything, so you could just consider him a "curious boy" as well.
                t Thinking deeper about it would be nicer but given the nature of the question, a quick answer is as important as a correct answer at the moment.
                player seriousF, I...
            `);
            writeFunction("writeEncounter('blame')", "It's not okay");
            writeFunction("writeEncounter('noblame')", "It's alright");
            break;
        }
        case "blame": {
            addFlag("serious", "blamed");
            addFlag("serious", "learnhome");
            writeHTML(`
				player <i>I think you're right.</i>
                seriousa Huh?
                t You shrug as his eyes drift towards your direction.
                player I mean I can't really justify what you did even though it'd benefit me in the end.
                t He just stands there without saying anything, probably being unable to, until finally he manages to form a sentence.
                seriousa <i>I know, my curiosity will kill me one day for sure...</i>
                t He looks down, swinging his phone in his hand slowly. Though you weren't expecting him to feel guilty about it, he appears to be upset about the kind of person he is as well.
                player But don't think so low of yourself for that! Like-
                seriousa <i>Look, I appreciate the effort but I'm not really worth the effort, let this scum of earth suffer in pe-</i>
                t You cut his sentence off with a slam onto the wall next to him, his eyes opening wide.
                player <b>LET ME FINISH!</b>
                im images/serious/bystander2.jpg
                t He looks shocked from your sudden outlash, though it wasn't your actual intent his brief silence gives you the time to complete your sentence, hand still on the wall.
                player <i> seriousF, look, what you did was wrong that's for sure, but you aren't a bad person yourself.</i>
                t His eyes keep moving between your hand on the wall and your face, he tries to mumble something but you cut it off too.
                player If you had an ill intent while doing what you're doing, you would have blackmailed tens of students, <i>and hell even teachers</i>, but you instead gave me a list of people to help, what I see here is a good cause with poor execution, you underst-
                seriousa <b>OH MAN JUST SHUT THE FUCK UP ALREADY YOU'RE FUCKING BLEEDING!</b>
                t He grabs your fist and pulls it away from the wall you slammed, that's when you finally notice the faint stain of blood on the gray wall as well as a tiny cut on your hand.
                player <font size= '-1'><i>How did this..?</i></font>
                seriousa You slammed a fucking stone wall you idiot, do you not even feel the pain?
                t He pulls out a tiny bottle of sanitizer, some cotton, a bandaid and a tiny roll of bandage from his bag to treat your cut.
                player Ugh, it's just a tiny cut, nothing to worry about.
                seriousa You got it outdoors, if we let this one stay open you might get an infection, and it would be really nasty so just hang on.
                t ...
                t In a minute he cleans your "wound" and wraps it in a bit of bandage.
                player <i>This wasn't really necessary at all you know...</i>
                seriousa Is it really that hard to say "thank you"? Like come on it only has two syllables.
                t You chuckle, checking your poorly but carefully treated wound.
                player A "thanks" will have to make do for you, thanks a lot.
                t He nods while putting the equipment back in his bag.
                seriousa Anyway, do you really think I'm not that bad?
                t You give your bandage another look, apparently he didn't have anything to keep it wrapped on your hand so he just used a duct tape to keep it in place.
                player I mean you don't use what you learn for your benefit after all, you only know stuff you aren't supposed to know but you use it for good.
                seriousa Call me a goddamn vigilante while you're at it.
                t You consider actually calling him that when you hear him laughing, well if he was joking then you see nothing wrong with laughing along.
                t He finally checks his watch to see how late it has gotten, though the darkening sky is enough to figure it's time to go home by now.
                seriousa Oh great, I'm not gonna make it home before the sunset, anyway thanks for the chat I guess.
                player Looking forward to see you again.
                t He waves at you, apparently he's also excited for the next time. 
                seriousa I'll see you too!
                t You wave back at him and get walking to home and then just:
                seriousa Uhhh, this is getting awkward.
                player A- You need something?
                t He scratches his head with a confused face.
                seriousa I was going to ask you the same thing actually, we can't be neighbors right?
                player Pfft, there's no way.
                t ...
                t Apparently there was a way.<br>You admit that as you watch him get in his home which  is only a few doors away from yours, waving at you one last time for the night.
                player <i>Can't I have a correct assumption outside of my job for once?</i>
			`);
            writeFunction("changeLocation('apartmentOutside')", "Go back");
			break;
		}
        case "noblame": {
            writeHTML(`
				player I stand by what I said.
                seriousa Huh?
                im images/serious/bystander2.jpg
                t You shrug confidently as his eyes slowly drift to your direction.
                player Like you haven't done anything bad with what you've learned after all have you? 
                seriousa I mean-
                t You shush him with your finger on your lips.
                player <i>In fact, you've given me a list of people who actually might need my help did you not?</i>
                seriousa Heh, I guess I have...
                t You nod and look at him in the eye, though unfortunately the wind decides to blow his hair at his face again before you can keep talking.
                seriousa This damn wig, like damn damned damning of damn.
                player You can swear to your heart's content, I don't mind.
                t He looks around to make sure there are not too many people around.
                seriousa Fucking- <i>Nah I let my anger out with "damn"s already.</i>
                player <i>Damn...</i>
                t He swings his head to get the hair away from his face.
                seriousa You know, it's actually nice to have someone else to see a good point in my ways, I'm glad you think so.
			`);
            if(checkTrust("nagatoro") > 40){
                writeHTML(`
                    player Then I believe you wouldn't mind telling me about the other "pretty-bois" you mentioned huh?
                    t He shrugs.
                    seriousa Well you know, even I have a bit of respect to their privacy, so I don't see a point in giving them over.
                    player Come ooon, not even one?
                    t He unlocks his phone with a grunt.
                    seriousa Alright but <i>just one</i>, not that he minds anyway so.
                    t The photo he turns his phone around to show you is not that unfamiliar for you, in fact it's pretty expectable.
                    player nagatoroF..? I mean isn't that like a no brainer? He literally takes pride in crossdressing heh.
                    seriousa I know, but he's literally the only one I can tell you without the risk of exposing something they don't want known.
                    t He scrolls past that photo of nagatoroF however what comes after is just another pic of him, then another and another picture of the same boi until he finally gives up and locks the screen off, hiding his phone behind himself.
                    player <i>Obsessed a little are we?</i>
                    t His facemask does a good job at hiding his blushing face, however it can't hide his trembling voice from you with the same performance.
                    seriousa What nooo? I mean obsessed what? With him? nagatoroF? Pffft what? What's going on in your head?
                    t Definitely something correct.
                    player Then would you mind telling me why do you have that many photos of him?
                    t He tries looking around and playing with his phone while trying to buy time.
                    seriousa <i>Errrrrr...</i> Well it's because we're <b>friends</b>! In fact he was the one who encouraged me about dressing like this, <i>yea!</i>
                    player I fail to see a connection.
                    seriousa Gimme a moment damnit! I'm trying to gather my thoughts, urmmm...<br><i>Alright so</i> it was just another day like this, a while ago though, I was alone in the streets with my err dress but <i>he</i> somehow recognized me. I thought he'd laugh at me and tried to run away, but he just grabbed me by my arm and literally yelled <i>"Dude I knew you had the body for this! Like look how cute you look in that dress wooo!"</i> then literally just ranted about his hobby for a whole hour, can you believe it?! Anyway since that day we send each other pics in the dresses we plan buying to get each other's opinions, and that's how I have so many pics of him in my gallery, nothing odd.
                    t You check your watch.
                    player A minute and nineteen seconds, such a tall defense for just a normal friendship.
                    seriousa <font size= '-1'><i>Errr...</i></font>
                `);
                addFlag("serious", "exposed");
            }
            writeHTML(`
                t He checks his watch, then sky and finally your face.
                seriousa Awww man look at the tiiiiime, someone's gotta go!
                player Wait where am I supposed to find you next time??
                t He starts stretching his legs.
                seriousa You'll know where to look, see you later!
                player Okay okay see you later-
                t Before you can even finish your sentence he runs off into the crowd, leaving you alone once again.
                player <i>...Then!</i>
            `);
            writeFunction("changeLocation('street')", "Go back");
			break;
		}
		case "hypnobegin": {
            if(checkTrust("serious") <= 10){
                passTime();
                setTrust('serious', 11);
                writeHTML(`
                    t You're in class A for whatever reason, you probably had your own reasons like looking for a student maybe? You can't really remember either.
                    player <i>Doorway effect is a bitch.</i>
                    t Looking around, trying to remember why you might've come to the place, you notice something out of place.
                    im images/serious/idle.jpg
                    t <i>Or someone.</i>
                    serious Oh and if it isn't you, how's it goin'?
                    player I don't know, the day literally just started.
                    serious Yours may have, but I have to brag that I wake up early, hey did you know I wake up early? Isn't it just so cool?
                `);
                if(checkFlag("serious", "blamed") == true){
                    writeHTML(`
                        t He stops to look down on your hand seeing as he notices you took the wrappings off.
                        serious Your hand's better right? Hope it didn't hurt much.
                        t You raise your hand and show him the recovered cut, he looks on and around it for a bit before nodding.
                        player Thanks to my quick reacting medic friend I'm already feeling better.
                        serious Medic? Ugh heheh, it's nothing really, I just happened to have some stuff ready.
                    `);
                }    
                writeHTML(`
                    t You come to realize a thing as he says that.
                    player Wait a second, aren't you supposed to be at class B instead?
                    t He sits on his desk with his feet still on the ground, one hand supporting his sitting posture while he lays his other arm on his knees, looking at you with the side of his eye.
                    serious Am I? I mean am I not here for education? So I think I could at least get to decide which class to use. 
                    t His lips curve with a smug smile as he turns his head around.
                    serious Like, am I wrong?
                    player Yes?<br>I mean that's literally not how it works.
                    t He let's out a deep breath while shaking his head slowly, eyes closed.
                    serious That's how it works for me like it or not, my grades are good enough for me to pass the classes, so what I'm doing is only my business you see.
                    t Thinking of it, what he's doing is skipping classes for other classes at worst so he could have a point, on the other hand it's not like skipping classes is no problem.
                    player That's still skipping classes you know, and you owe me a talk in my office anyway.
                    t He jumps off the desk, a little angry though you know he knows you're right, he shakes his arms to fix his sweater folding on him before looking back up at you.
                    im images/serious/annoyed.jpg
                    serious Bet you're no fun at parties, let's get going then.
                    t You step aside as he marches upstairs into your office, stomping his feet as if he was marching, or a kid throwing a tantrum...
                `);
                writeFunction("writeEncounter('hypno1')", "Get going");
            }
            else if(checkTrust("serious") == 11){
                passTime();
                setTrust('serious', 15);
                writeHTML(`
                    t You enter the classroom again, knowing what you're looking for this time.
                    t The boi you're looking for doesn't seem to have noticed that you came in just yet as he is having a heated discussion with a few other students at the moment.
                    serious Man I wish, like I really wish I was kidding but that's just what I've heard.
                    t As he says that, he steps to the side to sit on a nearby desk (you aren't sure why he prefers the desks over benches actually, but it gives you a better view) finally allowing you to see the rest of the group.
                    tomgirl Dude we're talking about Nate here... Are you sure you haven't misheard or something?
                    serious Can you stop asking that every time? Like oh my god "dude are you sure you haven't misheard a thing dude are you sure it's real?"<br><b>I REALLY HOPE I DID OKAY?!</b>
                    t seriousF gets up, biting his fist to try containing himself, tomgirlF takes a step back after seeing him get up with such an anger, finally the third boi in the group decides to join in.
                    nagatoro Cmon seriousF, give the guy a break will ya? We just hoped you had misheard something.
                    t seriousF shakes his head, sits back on his desk as he starts taking deeper breaths.
                    tomgirl Yeah man, don't think I don't trust you or anything, <i>but Jesus man...</i>
                    serious I know I know, I'm just...<br><i>Come on man it's not fair at all..</i>
                    t Both of the other bois nod in agreement and say a few more words until seriousF finally notices you standing.
                    serious <i>Ahem,</i> gentlemen, it looks like we've an extra pair of eyes and ears nearby.
                    t The other two bois look over at your direction.
                `);
                if(checkTrust("nagatoro") == 0){
                    writeHTML(`
                        nagatoro Oh and who do we got here? Is that the counselor you were talking about?
                        serious I-I did it only once you know.
                        t nagatoroF chuckles as he wags his index finger at seriousF's face.
                        nagatoro Uh-huh, <i>but what if I told you what I see here is just a perv falling for anotheeer.</i>
                        im images/serious/flush.jpg
                        serious What the? Me and them? As if! That's the worst ship I've heard by far.
                        nagatoro Heheh, then tell me, who would <i>you</i> ship yourself with hm?
                        t With his arms laying on his desk and a smug smile, you feel like poor seriousF finds himself into situations like this quite often.
                        serious Errr... W-What kinda question is this e-eh?
                    `);
                }
                if(checkTrust("nagatoro") == 40){
                    writeHTML(`
                        nagatoro Oh and who do we got here, it's our good old <font size= '-1'><i>pervy</i></font> counselor!
                        player I'm not even that old, nagatoroF.
                        t He puts on his usual smug smile, laying his head on his hands on the desk.
                        nagatoro So you don't deny the rest of it huh? I kneeew it!
                        serious What the hell? What even is going on between you two?
                        t nagatoroF lays back on his chair, laughing.
                        nagatoro Awww come on, who else do you think would volunteer helping a crossdressing club? None other than our loyal counselor friend~
                        t seriousF turns his head around, looking at you dead in the eye.
                        serious Is he like that with you too?
                        player Pretty much.
                        t He chuckles between his teeth, for a moment you can even hear him say "wooo" silently.
                        serious <font size= '-1'>At least he isn't doing it to get rid of me.</font>
                    `);
                }
                if(checkTrust("nagatoro") == 41){
                    writeHTML(`
                        nagatoro Oh hoho~ And I thought today couldn't get any more interesting.
                        serious H-Huh, nagatoroF! You mean I'm boring or what?
                        t nagatoroF lays on his back on his chair, his hands behind his head.
                        nagatoro <i>Oh but did I not say "more interesting"?</i> So don't ya worry about our friend stealing your show okay?
                        serious W-Wha? Do you mean to say I'm jealous or somethin'!?
                        t You can see seriousF somewhat blushing as he says that, just the kind of thing nagatoroF would use to tease him further.
                        nagatoro Heheh~ <i>Oh but I don't remember saying anything about you being jealous?</i>
                        serious Ehm errr... I guess that was just a misunderstanding then, nothing to exaggerate right?
                        t He's clearly struggling to get himself out of the situation, on the other hand nagatoroF seems to also believe he had enough fun.
                        nagatoro Know how it feels to be misunderstood, alrighty then, if ya say so.
                    `);
                }
                if(checkTrust("nagatoro") == 100){
                    writeHTML(`
                        nagatoro And just when we needed a fourth for the group, sup playerF!
                        player Sorry to break it but I won't be staying for too long, I'm not really sure if I wanna stay for the next class.
                        t seriousF chuckles.
                        serious It'll be psychology class anyway, you better run before "the witch" appears.
                        nagatoro That said, seriousF, why don't you also run back to your class where it's safer? 
                        t seriousF starts swinging his feet as he's sitting on the desk next to nagatoroF's.
                        serious I've skipped every single class of hers last year...
                        nagatoro Now that's an achievement, but I guess you've to take em this year huh?
                        t seriousF nods.
                        nagatoro <i>That sounds terrible, even though it's not my problem.</i>
                    `);
                }
                if(checkTrust("nagatoro") > 100){
                    writeHTML(`
                        nagatoro The more the merrier. Cmon playerF take a seat!
                        player I'd love to but I'm not here to stay.
                        t nagatoroF nods.
                        nagatoro Sure you aren't, god knows what's going on in your mind actually, nothing too <i>pervy</i> right? <i>I've got company here, we might be short but we can outnumber you.</i>
                        serious That was aimed at you tomgirlF.
                        tomgirl <b>Y-YOU ARE SHORTER THAN ME!</b>
                        t seriousF gets up and stands in front of tomgirlF to compare their heights, his hand stops an inch above tomgirlF's head.
                        serious <i>Who is shorter now, "dude"?</i>
                        t You shrug as you laugh at their competition.
                        player Both of you, all of you. 
                        nagatoro Did you ever consider you could be too tall instead? I think we should join forces to take down the giant, we have the numbers.
                        serious Wait, I mean yeah!? Almost everyone in this place fall to the category of short, but what if you're too tall instead?
                        t nagatoroF and seriousF raise their hands for a high five.
                        serious Yeah baby! Short is the new norm! Now get outta our sight!
                        nagatoro You're getting too far ahead of yourself again, seriousF...
                        serious You're right but cmoon, now was our chance of making fun of someone for being tall.
                    `);
                }
                if(checkTrust("tomgirl") == 0){
                    writeHTML(`
                        t tomgirlF on the other hand looks rather confused about you and your presence.
                        tomgirl You guys know em? Oh right, tomgirlF is no one to introduce to people after all, right?
                        player ...Is he like that all the time?
                        t Both of the other bois nod simultaneously.
                        serious <i>Sigh,</i> tomgirlF playerF, playerF tomgirlF, nice to force you two into meeting.
                        t tomgirlF raises his hand for a handshake with a fake smile.
                        tomgirl Nice to meet ya I guess, can you tell your friends to be a little calmer though?
                    `);
                    if(checkTrust("nagatoro") == 0){
                        writeHTML(`
                            nagatoro "Your friends"? Really?
                            t tomgirlF turns his head around quickly, looking at nagatoroF as if he has the power to make him shut up.
                        `);
                    }
                    writeHTML(`
                        serious He's just like this yeah, maybe you should help him too huh playerF?
                        tomgirl Now you guys're selling me out, do you think I'm your child or something?
                        t seriousF's lips curve a little with a smile.
                        serious Whose child? Me and nagatoroF's? Peh, we'd be horrible parents.
                        nagatoro Uhmm seriousF, <i>I feel like that's exactly what he's complaining about.</i>
                        t Both of them laugh at it as tomgirlF crosses his arms with a grunt.
                        tomgirl <i>And look at them getting in the role so easily, what's next, giving me a bath like a baby?</i>
                        nagatoro <i>Think I could do that</i>, in your own place or mine?
                        tomgirl H-Huh? Fuck off you weirdo~ I don't need your help to shower.
                        t That sends nagatoroF laughing even louder.
                    `);
                }
                if(checkTrust("tomgirl") == 2){
                    writeHTML(`
                        t tomgirlF on the other hand starts trembling slightly when he notices you're in the room.
                        tomgirl <i>W-What're they doing here..?</i>
                        serious I think visiting the class, no big deal you know.
                        t tomgirlF looks away, trying to avoid eye contact with you.
                        player I'm not here for you tomgirlF, <i>not just yet.</i>
                        t You can hear him sighing with relief, but he still doesn't turn around.
                    `);
                }
                if(checkTrust("tomgirl") >= 3 && checkTrust("tomgirl") < 6){
                    writeHTML(`
                        t tomgirlF on the other hand looks away immediately when he notices you're in the class.
                        tomgirl <font size= '-1'>No no no not again no..!</font>
                        serious Aye man you alright?
                        t He looks at seriousF's face, then returns to shaking without saying a thing.
                        player Don't worry tomgirlF, I'm not here for you today, yet.
                        tomgirl E-Eh? What? 
                        t He sighs, but he still looks uncomfortable with your presence.
                    `);
                }
                if(checkTrust("tomgirl") == 6){
                    writeHTML(`
                        t tomgirlF on the other hand gets up and approaches you the moment he notices your presence in the room to whisper in your ear.
                        tomgirl <i>N-Not just now, don't you see the boys? Can't come with you right now, please at least delay it for once.</i>
                        player I'm not here for you anyway, tomgirlF.
                        t He looks kind of shocked, but you can't really tell if he's disappointed or happy about what he learned.
                        tomgirl T-Then?
                    `);
                }
                if(checkTrust("tomgirl") == 100){
                    writeHTML(`
                        t tomgirlF on the other hand gets up to run at you when he notices you in the room, looking both excited and worried.
                        tomgirl L-Look, I'll see you later okay? Kinda busy talking with the boys so please unders-
                        player I'm not here for you anyway.
                        t You see him blushing as he gets kind of frustrated.
                        tomgirl Who else then? I mean sure but I wanna know ya know I mean ughhh...
                    `);
                }
                if(checkTrust("tomgirl") > 100){
                    writeHTML(`
                        t tomgirlF on the other hand gets up to walk towards you with his eyes on the floor when he notices your presence.
                        tomgirl Uhh, let me excuse myself out of here real quick okay? Then we can go anywhere you want.
                        player Not here for you today tomgirlF, sorry.
                        t He looks up at you, eyes wide open.
                        tomgirl Wha? I mean okay but...<br>Yeah alright sorry~
                    `);
                }
                writeHTML(`
                    t You cough.
                    player seriousF, could you follow me to my office if it's no problem?
                    serious I mean alright, see you guys later.
                    t The two other bois wave at you two as you're leaving the room, though you're sure you've heard them talking behind you the moment you shut the door behind yourself.
                `);
                writeFunction("writeEncounter('hypno2')", "Get going");
            }
            else{
                passTime();
                passTime();
                setTrust('serious', 20);
                writeHTML(`
                    t seriousF seems to be alone in the class again, keeping himself busy with his phone.
                    player What's up?
                    t He raises his head up from his phone the moment he hears your voice.
                    serious <i>Hopefully not your dick.</i>
                    player I've got bad news for you.
                    im images/serious/annoyed.jpg
                    serious And how do you think you'll convince me to come to your office this time huh?
                    player I won't, I'll just go there and wait.
                    t You wave at him from the doorway and shut the door, thinking about how long it'll take for him to come upstairs.
                `);
                writeFunction("writeEncounter('hypno3')", "Start waiting");
            }
			break;
		}
        case "hypno1": {
			writeHTML(`
                t You point him the couch again, asking him to take a seat.
                serious Do you not have a car? I mean I'm sorry if that sounded rude but I know which car in the parking lot is whose but I've never seen a car that could be yours yet.
                t You shrug, dropping yourself on your chair like you've walked all the way again.
                `);
                if(checkFlag("serious", "learnhome") == true){
                    writeHTML(`
                        player We literally walked home together just the other day, do you think I look like I have a car?
                        serious <i>Do you think I look like someone who enjoys taking a stroll in the town in girls' clothes?</i>
                        t He kinda does, but you feel like it's better not to get him mad before a session.
                    `);
                }    
                writeHTML(`
                    player If you do need a car I think I can speak with a teacher that does.
                    serious Nah it's not that, I mean.
                    t He giggles.
                    serious I just found myself thinkin' of what type of car would you prefer, a muscle car? A sedan? A pickup truck maybe?
                    t You act like you're thinking for a moment with your hand on your chin and eyes unfocused before answering.
                    player <i>I'd love to have a monster truck if that answers your question.</i>
                    serious <i>Yooooooo!</i>
                    t He fixes his posture, mutes his phone for the session and puts his hands on his knees.
                    serious So now I watch that pendant thing as you dangle it at my face and then I'll be yours to play with right? 
                    player Yea- wait no. What do you mean by "play with"?
                    t He continues as if he didn't even hear the question.
                    serious Hey hey that pendant thing, can you do yo-yo tricks with it?
                    t You pull the pendant out and swing it a little, he looks at it a bit before sulking.
                    serious Aww never mind, it's too short for any tricks, hmph.
                    player It has its own tricks though, for example...
                    t You start swinging it as he's watching, that's of course too early to give him any commands at all, but you've to begin somewhere.
                    player <i>Like, do you not think it looks nice as it swings from right to left, left to right.</i>
                    serious Right to left, left to right, It's oddly enjoyable to look at.
                    t You're getting somewhere it seems, but it'd be best to hold it a little longer, being cautious is no problem when you have way more time than you need.
                    player It's pretty nice isn't it? Say, do you think of telling other people what happened here once we're done?
                    t He shrugs slightly, eyes still on the pendant.
                    serious <i>What happens here stays in here, I don't see a reason to spread the word.</i>
                    player Exactly, after all all you need is some relief right? You don't need people asking why you keep visiting the counselor.
                    t He nods.
                    player And you know, trying to keep what you want a secret all the time must be pretty stressing for you, being unable to express your desires with the fear of judgement.
                    t He nods again, eyes completely unfocused on anything but the pendant by now.
                    player But that doesn't apply for my office, I wouldn't judge you for answering my questions after all you know, even if I don't like the answer.
                    serious <i>Really?</i>
                    player Really.
                    t His tense arms loosen a little as he seems to sit in a more comfortable way for himself, looks like you have him in your hands already, on the other hand it'd be dumb to rush anything at the moment so a few "rules" will have to suffice for today.
                    player seriousF, I want you to tell me what you have in mind whenever I ask you to, so that I'll be able to help you better.
                    serious <i>Sounds fair.</i>
                    player And you won't back up out of it after you tell me, repressing yourself won't really help us if we're trying to fix your stress, after all you love doing as you wish am I wrong?
                    t He shrugs, mumbling something assuring you're correct.
                    player Alright, since we have a deal now...
                    t You stop swinging your pendant and put it back in your pocket, it takes him a while for his eyes to focus back.
                    serious Ugh, what?
                    t You clap your hands once before getting up.
                    player Hey seriousF, tell me, what's going on in your mind right now?
                    t He stops for a moment, looking directly in front of himself before turning his head over to look at you again.
                    serious <i>Sandwiches, I really wish I could gobble a sandwich down right now.</i>
                    t He scratches his head.
                    serious What the- Sorry man, where are my manners I shouldn't be talking about stuff like this now.
                    t You get to the other side of your desk, he gets up seeing as you approach him.
                    player Nah, it's fine, we're gonna get ourselves a pair of sandwiches, on me!
                    serious On you? Like as in "I'm paying for your meal too out of kindness, seriousF"?
                    t You nod.
                    im images/serious/happy.jpg
                    serious <i>Hurray!</i> I really love the ones with the cheese you know!
                    player All the sandwiches in the cafeteria have cheese in them seriousF.
                    serious Exactly, and I love all of them!
                    t You sigh, hoping he won't cost you your weekly salary...
			`);
			writeFunction("changeLocation('eastHallway')", "Go get him sandwiches");
			break;
		}
        case "hypno2": {
			writeEvent('serious1a');
			writeFunction("changeLocation('playerOffice')", "Go back");
			break;
		}
        case "hypno3": {
			writeEvent('serious1b');
			writeFunction("changeLocation('playerOffice')", "Finish up");
			break;
		}
		case "rrserious1": {
			writeHTML(`
                t You're standing all by yourself beside the door to your office, taking a sip from the mug of coffee in your hand as you gaze at the clouds from the windows on the opposite side of hallway.
                player <i>Cloudwatching sure is fun, too bad my view is limited by windows.</i>
                t You pull your phone out to check the time, you've been waiting for longer than you expected.
                player Maybe he really won't come this time huh...
                serious Waiting for someone?
                t You almost burst hot coffee out of your nose when you hear "his" voice right beside you, you must've zoned out and didn't notice him approaching.
                player <b>Jesus!</b>
                t He looks around with a rather confused look on his face, scratching his head.
            `);
            if(checkTrust("demon") > 0 && checkTrust("intern") >= 100 && checkTrust("succubus") > 0){
                writeHTML(`
                    serious Wait, don't tell me you invited <i>him</i> in this hellhole full of demon freaks?? <b>WHAT MADE YOU THINK IT WOULD BE A GOOD IDEA?!</b>
                    im images/serious/annoyed.jpg
                    player <i>...Pardon?</i>
                    t He looks back at your face, his eyes unfocus as he tries to revise what he just said and he finally facepalms.
                    serious Yeah I just come to realize you didn't mean you were waiting for Christ to come over, sorry for freaking out yeah.
                    player <i>Just what the fuck was that..?</i>
                    t He adjusts his tie and pulls his phone out as if he didn't hear you at all.
                    serious Well anyway, you asked me to come and I did.
                `);
            }
            else{
                writeHTML(`
                    serious I don't think you're the type he'd visit personally, so you'll have to make do with what you have, one particular seriousF seriousL!
                    player And what am I supposed to do with that?
                    serious ...I don't know? Why the hell did you ask me to stay then? I could just go home, grab somethin' to chew on, lay my ass on my couch and have a nice goddamn evening but you decided to ask me to stay, and now you're asking me what you're supposed to do?!
                    t You shake your head, taking one last sip of your coffee.
                    player Can you not overreact to a joke for once?
                    serious Ugh, maybe, anyway...
                `);
            }
            writeHTML(`
                t He crosses his arms, tapping his fingers on his forearm.
                serious So tell me, <i>what's it gonna be today?</i>
                player Well, you won't like what I'm thinking of.
                im images/serious/ha.jpg
                serious What the- Then stop thinking maybe?
                player I can't, sorry.
                serious Cmooon, it ain't that hard, all ya gotta do is change your mind, I do that all the time!
                t He looks down and giggles.
                serious Except for now, can't really stop myself when you call ya? <i>Curse you and your weird hypno stuff...</i>
                player I didn't force you into this you know, is it that hard for you to admit that you feel something for me hm?
                t He looks back up, eyes locked on yours before he starts laughing louder.
                im images/serious/happy.jpg
                serious Me? To you? Pwwwwh okay that's the dumbest shit ever, no offense but you're clearly not my type.
                t He tilts his head to the side, still smiling wide.
                player H-Huh?
                serious <i>Oh what's it?<br><font color= '#C00157'>Did our poor-poor counselor finally realize not everyone will magically fall in love with them after being fucked a few times? How tragic!</font></i>
                t Well that was to be expected, but did he really have to be so rude about it?
            `);
            if(checkFlag("serious", "exposed") == true){
                writeHTML(`
                    player Oh right, you had a "secret" crush, which you keep a secret so perfectly that only like <i>forty</i> other people know about it.
                    serious W-Wha? How??
                    im images/serious/flush.jpg
                    player Common sense, getting red as a tomato whenever he's talking to you doesn't really help you know.
                    t He finally gives up, seeing as he can't hide something so obvious.
                    serious <i>So.. You mean all of you just "figured" it just like that?</i>
                    player Some even "ship" you two if I have to be honest.
                    t His eyes shine with an excited gleam as he pulls the hem of your shirt.
                    serious A-And what about him? What does he think about it?? Did he say anything about this? You're a counselor aren't ya? You two seem to know each other too so did he tell you anything about me?
                    player I didn't ask him about you, so I have no idea.
                    t He starts pulling your hem even more, looking a bit angry.
                    serious Why why why why whyyyyy? You knew how I feel about him, why did you not ask him about me?
                    player I'm a counselor, not your little matchmaker you know, now if you'd please let go of my shirt..
                    t He pulls his hands back and puts them in his pockets with a sigh.
                    player Though, I might consider having a tiny role in this, depending how much I enjoy today's session.
                    im images/serious/idle.jpg
                    serious Is that supposed to be a favor or blackmail?
                    player Whichever you take it as, but I'd call it a favor.
                    serious <i>You better know what you're doing.</i>
                    t Though you wonder how the things'll turn out after this, or your role in how it'll turn out, having a promise that concerns someone else is always a burden, on the other hand it'd be nice to help if you can, in the end you can say having mixed thoughts suck.
                `);
                addFlag("serious", "acceptance");
            }
            else{
                writeHTML(`
                    player Right right, but that does sound like you're into someone else, am I wrong?
                    serious What does it matter for? At least let me have some privacy in my personal life, I'm trying to be nice but, cmon...
                    player I thought maybe I could help, nothing more.
                    t He slowly shakes his head.
                    serious You know, if you had what it takes, you'd have figured it out already, so please...
                `);
            }
            writeHTML(`
                t He looks up, whistling a tune as he taps his fingers on his thighs.
                serious ...Can we already get at it?
                player Well, as I said, you won't like this.
                serious Come ooon, it can't be that bad of an idea, right?
                trans rrserious2; name Get going;
			`);
			break;
		}
        case "rrserious2": {
            passTime();
            setTrust('serious', 25);
            writeEvent('serious2a');
            writeFunction("changeLocation('apartmentOutside')", "Finish up");
            break;
        }
        case "phoneuncheck": {
            setTrust('serious', 27);
    		writeHTML(`
				t seriousF's house is on the same street as yours, so it only takes you half a minute to get there and knock on his door.
                player seriousF! Are you there?
                t You hear his footsteps approaching the door before he opens it gently.
                im images/serious/home1.jpg
                serious Oh playerF, what makes you come here?
                t Looks like he was busy cleaning his home, it's a nice reminder other people can be busy from time to time as well.
                player Heh, nice pair of glasses you got there.
                serious Why thank ya! Though I'm quite busy today as you can see.
                t He pulls the hems of his apron and wipes his glasses clean with them.
                serious I even tried to write you about it, maybe you should check your phone more often huh?
                player Right sorry, well good luck with cleaning then!
			`);
            if(checkTrust("housekeep") > 0){
                writeHTML(`
                    player And well if you need some help with cleaning the place, I know someone that could help for only a bit of cash.
                    serious Oh wonderful, though I'd rather having the cash than the help.
                    t He checks his phone for the contacts, you can't really see the names but there are a LOT of names in there.
                    serious I feel like I know the person you're talking about though, had the chance of playing a game of cards with them even!
                    player Really? That's great!
                    serious Mhm, it's fun to meet new people every once in a while.
                `);
                addFlag("serious", "maidcontact");
            }
            writeHTML(`
                serious Alright, I think I should return to work, thanks for the unintended break but I really should get done with this crap, don't forget to check your phone next time!
                player Okay, see ya!
                t He waves you goodbye before closing the door, you can hear the vacuum cleaner starting as you walk away.
            `);
			writeFunction("changeLocation('apartmentOutside')", "Go back");
			break;
		}
        case "streetremeet": {
            passTime();
    		writeHTML(`
				t seriousF is waiting on the other side of the street in the same clothes as last time, he waves at you the moment your eyes lock.
                im images/serious/bystander2.jpg
                seriousa Nice evening ain't it?
                player Yeah, I believe the wind is not strong enough to mess your hair this time.
                t He shakes his head to give his hair a swing, giggling at the motion.
                seriousa This is why I love long hair, shorter haircuts feel like I'm wearing a damn woolen cap on my head every day.
                player That said, weren't you wearing this same outfit the last time we met here?
                t He nods while applauding slowly.
                seriousa Good observation, detective. Pff sharp eyes even.
                player I was not trying to pose on with my observing skills ugh.
                seriousa Alright alright I know, anyway that's why I was busy earlier, I was washing this outfit.
                player And you called me here to show you how clean it is? Though I must admit it smells clean.
                seriousa Thanks? But it wasn't the reason really.
                im images/serious/bystander1.jpg
                t The tone of his voice gets deeper as he finally gets serious.
                seriousa Seems like I'll have to be direct, remember your promise from earlier? You told me you would consider letting me have more control over when to do it instead of merely being your toy.
                player Yeah I think I said something like that.
                seriousa I demand an answer, I mean I know it sounds like it's dumb to let the sub have more control but, I can also promise for one thing.
                t He winks at you with a sympathetic face for the first time, as friendly as he has ever gotten with you, you can even feel a relaxation in his voice when he speaks again.
                seriousa <i>You won't regret giving me that initiative, you've my word, playerF.</i>
                player Heh, what's with this change of attitude?
                seriousa What change of attitude? I may be enjoying the idea of having an initiative a little too much, and that's all. So what it'll be?
                t Wonderful, yet another dilemma as if you needed another, breathe in, breathe out, just like that.<br>There are two options lying ahead for you, first one is what you had in mind, and what you had been doing with literally everyone else, just making him your complete sub with minimum control over what happens between you and him.<br>On the other hand he's pretty much the main character of his own life, and you can bet he feels just that way too, forcing him into obedience wouldn't be too hard but, something (and seriousF himself) tells you that letting him have his "partial initiative" wouldn't possibly hurt you at all, it's not like he's the only person in the town you can fuck anyway is he?
                player My choice huh? I hate decisions.
                seriousa Then cmon just let me make some of them for you, I'm sure I won't disappoint!
                player Can you stop interrupting me as I think?
                seriousa Alright alright, just make sure you're done before the sunset, I really don't wanna stay outside after the sun goes out, not in this outfit.
                t So, what it'll be?
                trans seriousfair; name Let him have some initiative;
                trans seriousunfair; name Keep the full control;
			`);
			break;
		}
        case "seriousfair": {
            setTrust('serious', 40);
            removeFlag("serious", "unfair");
            addFlag("serious", "fair");
            writeSpecial("Unlocked the special condition with seriousF! From now on there'll be three points of narrative with him, gray text (not the dialogues, you'll see) is rather a neutral narrative, with narrator being myself, cyan text is your character's point of view and yellow text is his point of view, awesome I think? Make sure you tell me what you think, and that's all for now, have fun!");
			writeHTML(`
				player Actually, why not?
                seriousa So you really are gonna let me?
                t He gets visibly relaxed the moment you nod to confirm you accepted the deal, seems he was really hoping that you'd give him some freedom.
                seriousa Niceee, if I'm gonna have a bit of control on it, you can bet I'll be more cooperative too... <i>All in all, you won't regret this..</i>
                t <span style="color:yellow; ">A: That went, smoother than I (seriousF, gotta love my name) expected, no arguing, no manipulating, no nothing, just what I asked for in full. And just when I started thinking today couldn't get any better, first I got a phonecall from Theo inviting me for a sleepover (ya can't really say no when he talks to you with that voice of his, ugh) and now I'm also getting this kind of exclusivity huh? Let's hope the heathen doesn't try to kick me out for drinking his precious tea this time, peh.</span>
                t <span style="color:cyan; ">P: I mean, it doesn't really matter that much for me at least, seriousF is not the only one in the whole school is he? Plenty of ass to mow like grass, and like he seems pretty excited about this, it isn't entirely impossible for him to perform better this way too, either way I'll see what happens after.</span>
                player You better not fail to meet my expectations then, it feels awkward to watch my subs become sentient.
                seriousa Sonder, I believe it's called Sonder.
                t He pulls his phone out, typing the word in the search bar.
                seriousa Mhm, "Sonder: the realization that each random passerby is living a life as vivid and complex as you." That's the word.
                player You could just say "I'm not an NPC in your damn life" you know.
                t <span style="color:yellow; ">A:Well no shit, that's literally the simplest way of saying it, just what an NPC would do, but I'm the main character of my own life!</span> 
                seriousa Yeah I could, but I think you aren't as enthusiastic about learning a new word as I thought you'd be, what a shame.
                player Yeah very useful if I decide to play a board game sometime, but I'd need three more people to play a board game wouldn't I?
                t <span style="color:cyan; ">P: Heh, I remember how we'd gather with buddies and play board games back in college from time to time, been years since I last heard from any of them...</span>
                seriousa Gee, learning's fun though, unless you're sitting on the wooden bench at the school getting your asscheeks flat like a pair of deflated tires.
                player Trust me, a comfortable chair improves the quality of your boring work significantly, I mean it's still pretty shit but at least it's bearable.
                seriousa You also get paid.
                player ...Why else would I want to step inside a school building ever again?
                seriousa Point taken, sooo, see you later?
                player I think we should get going, yeah, want me to walk you home?
                t He shakes his head, adjusting the bag hanging on his shoulder.
                seriousa I've got somewhere else to be today, sorry.
                player It's fine, later then.
                seriousa Later.
                t You wave to each other one last time before walking opposite sides, you notice him walking towards shopping district.
                t <span style="color:cyan; ">P: Well there we go, streetlights are on and the sky's getting a darker tone of blue, better walk fast if I want to make it home before sun's out...</span>
                t <span style="color:yellow; ">A: Man I'm huuuungry! Maybe I should get some frozen pizza on my way there, oooor oor maybe we can order some actual, warm pizza instead! But where did my wa-<br>No way nonono... Did I really forget my wallet at home again..? Great, I'll munch on some dry loaf then.</span>
			`);
			writeFunction("changeLocation('apartmentOutside')", "Finish up");
			break;
		}
        case "seriousunfair": {
            passTime();
            setTrust('serious', 35);
            removeFlag("serious", "fair");
            addFlag("serious", "unfair");
			writeHTML(`
				player I'm sorry, I can't really give up on my dominance, not even partially.
			`);
            if (data.player.gender == "man") {
				writeHTML(`
				    seriousa What did I expect anyway? You greedy, selfish bastard.
                `);
			}
			else {
				writeHTML(`
				    seriousa What did I expect anyway? You greedy, selfish hag.
                `);
            }
            writeHTML(`
				player Whoa whoa, no need to be rude now, right?
                t He's not even looking at your face at this point, just a cold glare from the side of his eye.
                seriousa <i>Gonna cry about it? You still got what you wanted didn't you? The complete dominance, you're the boss, aren't you just sooooo happy for making me get used to this that I can't get off any other way, and then making it painfully uncomfortable for me to be your bottom?</i>
                player I told you you could stop doing this any time you wante-
                seriousa Naah no manipulating this time, you've played with my poor mind for long enough, you wanted a toy and ya got it, but I'm telling ya, if you weren't such a <i>weak</i> top, you wouldn't be so scared over lettin' your bottom have a tad bit of control, honestly fuck you.
                t Him being so pissed over that was unexpected, or making personal analysis from merely a decision, but it seems like he won't be really happy about this from here on.
                seriousa Oh and one more thing, don't expect any effort from me, you use me to get off, I use you to get off, all clear?
                player ...Okay?
                seriousa Good, thanks for ruining this for me, see you later.
                player Later then.
                t As he walks towards the shopping district without even waving back at you, you have only one thing to say.
                player <i>He really knows how to make you feel like an asshole, it's not even my fault he wanted something from me no dom would give, right?</i>
			`);
			writeFunction("changeLocation('apartmentOutside')", "Finish up");
			break;
		}
		case "gymplay": {
            writeHTML(`
                t seriousF is standing right there, beside a wall on the hallway, though he has some "company" this time with himself, you decide it's best to watch from afar for a while.
                meji ...I couldn't believe my eyes there dude, like it was huuuge but I went to take it down all by myself and I did it like it was nothing! Anyway wanna do it again together sometime? I bet it'll be more fun together!
            `);
            if(checkTrust("serious") == 35){ //full dom
                writeHTML(`
                    serious <i>Good job, good job...</i>
                    meji Yo seriousL... You good man?
                    t seriousF puts his hands in his pockets, slowly kicking a bottle cap on the floor.
                    serious Does it look like I'm not okay?
                    meji It does, did something happen?
                    serious <font size= '-1'>It's nothing, can we move on?</font>
                    meji If you say so..
                    t You decide to step in before seriousF explodes on mejiF.
                    player Ahehm.
                    t mejiF turns his head around to look at you, seriousF on the other hand doesn't even bother.
                `);
                if(checkTrust("meji") < 10){
                    writeHTML(`
                        meji Huh? You were looking for someone?
                        serious <i>They aren't here for ya, mejiF.</i>
                        t seriousF clears his throat as mejiF looks at him with a surprised face.
                        meji Y-You used my first name..?
                        serious <i>I did? I didn't notice.</i>
                        t mejiF's eyes keep darting between the two of you.
                        meji <i>What the-</i>
                        serious <i>mejiF.</i>
                        meji Y-Yeah?
                        serious <i>Can you give us some alone time? It'll be over in a bit.</i>
                        meji What's the meaning of all this? Who's that and what's goi-
                        serious <i>Please, if you value my friendship even a tiny bit...</i>
                        t mejiF crouches down to look at seriousF's face.
                        meji I.. You? Uhh... Fine! But you better tell me what's going on once I'm back.
                        serious <i>I won't, now if you could please leave us alone...</i>
                        t mejiF gets back up to look at the two of you, seriousF is still leaning against the wall with his hands in his pockets.
                        meji ...
                        t He walks closer in to whisper in your ear.
                        meji <font size= '-1'>You better not be who made him like this, you hear me?</font>
                        t And then he walks off, looking back at the two of you in every few steps until he has to turn a corner.
                    `);
                } 
                if(checkTrust("meji") >= 10){
                    writeHTML(`
                        meji Oh hey playerF! Needed anything?
                        serious <i>I doubt they're here for ya, mejiF.</i>
                        t mejiF looks back at seriousF with a surprised face.
                        meji You..? It's been five years since you last called me by my first name, <i>what the fuck is going on?</i>
                        serious <i>Has it been that long? Doesn't matter anymore.</i>
                        meji What's that supposed to mean?
                        t seriousF clears his throat.
                        serious <i>Could you give us some alone time, mejiF?</i>
                        meji With playerF?
                        serious <i>Yes, with playerF.</i>
                        meji I... Why?
                        serious <i>Just do it, please...</i>
                        t mejiF crouches to look into seriousF's eyes, with his hand on his shoulder.
                        meji You okay?
                        serious <i>Please...</i>
                        meji F-Fine, but playerF..!
                        player Hm?
                        meji <i>"This"</i> better not be your doing, is that clear?
                        t seriousF raises his eyes to look at mejiF for a moment before lowering them again.
                        meji I'll be going now, seriousL- I mean seriousF.
                        serious Eh?
                        meji Call me when you two are done, alright?
                        serious <i>Will do.</i>
                        t And then he walks off, leaving you alone with seriousF.
                    `);
                }
                writeHTML(`
                    serious <i>So, what's it this time you asshole? Haven't you had enough fun?</i>
                    player What if I told you I'm only here to have a little chat?
                    serious I'm not buying that.
                    t He raises his head.
                    serious <i>I'm not your friend, I'm not interested in chit chatting with you either.</i>
                    player That's harsh...
                    serious <i>What do ya want?</i>
                    t You sigh.
                    player You have a gym class today, right?
                    serious Kinda, but don't tell me you're thinkin' of what I'm thinkin'.
                    player Wait for me after the training.
                    serious <i>I hate this..</i>
                    t He pulls his phone out.
                    serious Fine, I'll be there, now can you get lost?
                    player Be a little nicer, seriousF.
                    serious <i>Fuck off!</i>
                    player Damn fine. I know you're mad but-
                    t He pushes himself forward and walks off without saying anything else.
                    player ...Alright?
                    trans seriousgym; name Burn some time and meet with him;
                `);
            }
            else if(checkTrust("serious") == 40){ //initiative
                writeHTML(`
                    serious I mean it's easier to take the big ones usually cuz the smaller ones are harder to deal with, but yeah sure why not.
                    t <span style="color:cyan; ">P: They aren't... discussing dicks are they? No no why would they? Then what..</span>
                    t <span style="color:yellow; ">A: Heh, and who would've thought mejiL and I could finally get close thanks to a stupid game I taught him? But yeah playing together one day would be fun.</span>
                    t mejiF then pulls his phone out to show seriousF a pic, which he reacts with a slow, impressed nod.
                    serious Though, that really is a tough one, and ya say you beat that all by yourself?
                    meji You can bet on it seriousL! And I was underleveled as fuck but I somehow got it, and man the relief when that thing finally fell on its knees, I almost cried tears of joy.
                    t <span style="color:cyan; ">P: Oh so it was a video game... Okay now it makes a lot more sense than dicks.</span>
                    serious See? And ya told me you'd probably stop playing after first two hours.
                    meji Ugh, stop rubbing it on my face will you? Like okay I get it you were right and I wasn't, but can you stop bragging about that?
                    t <span style="color:yellow; ">A: Well he's kinda right I think, stupid seriousF and his stupid bragging, bet that's why nagatoroF still hasn't asked me out...<br>Nah how's that even related am I fucking overthinking again? Oh god..</span>
                    serious Sorry soooorry, yeah I still forget the past is past sometimes, we're not in the HS anymore are we?
                    meji Can you not? <i>I still "cringe" whenever I remember the rivalry between us.</i>
                    t <span style="color:yellow; ">A: It really was the dumbest shit, I can't even remember what ignited the rivalry in the first place, actually I wonder if he remembers the reason or is he as clueless as I am.</span>
                    serious Don'tcha worry mejiL, I'm also trying to forget those days.
                    meji <i>That's nowhere near reassuring you know, seriousL...</i>
                    t <span style="color:cyan; ">P: Seems I'll have to interrupt, or they're gonna keep talking for the rest of the day.</span>
                    player <i>Ahehm.</i>
                    t Both of the boys turn their glares to your side when you cough to make them aware of your presence.
                    serious Oh hey, here's our eavesdropping counselor, why don't you join instead of listening to us like a creep?
                    
                `);
                if(checkTrust("meji") == 0){
                    writeHTML(`
                        t mejiF looks at you with a somewhat confident look on his face, his eyes barely making contact with yours.
                        meji mejiF mejiL, and you're?
                        player let's just say I'm a counselor in the school.
                        t <span style="color:cyan; ">P: He doesn't seem that troublesome actally, wonder if they were exaggerating the situation in his file.</span>
                        t He puts his hands on his waist, you can feel his displeasure just by looking into his face, and when he finally speaks you can also hear the disdain in his voice.
                        meji <i>Oh so another minion of principalF? As if she doesn't have enough, what's it then? Here to hand us another survey which you won't care about at all in the end?</i>
                        t <span style="color:cyan; ">P: Okay so he DESPISES principalF, or he just hates everyone, I sure hope it's not the latter.</span>
                        serious Calm it mejiL, they're my friend and probably here to tell me something.
                        meji ...If you say so, fine.
                        t <span style="color:yellow; ">A: He really should try playing nicer, or the poor boy'll end up getting kicked out of the place even though his decent grades.</span>
                        player Actually, seriousF, you had some practice at gym later today didn't you?
                        serious Yup! Right after the classes, I'll join the boys' volleyball team's practices, see Ryan's invited me to join the practice and I couldn't turn it down, been a while since we hung together last time.
                        player Excellent, can you wait for me at the gym after you're done?
                        t mejiF looks a bit confused about the request.
                        meji Alright and why's that if you don't mind me asking? Isn't that past the school hours? Why would a counselor need a student at such an hour?
                        player Oh right, because uhm..
                        t <span style="color:cyan; ">P: Problem problem problem..! I completely ignored how suspicious this sounds, fuck.</span>
                        serious Ahem, we're neighbors and they walk home together sometimes, see it's not as boring when you have company.
                        meji Hmmm yeah okay, sounds about right.
                        t <span style="color:yellow; ">A: Be GLAD we're neighbors, otherwise that tall stick would spread the rumor of us having something going on in the entire place, jesus.</span>
                        player Alright then, I'll see you later neighbor.
                        t You feel your phone buzzing in your pocket with a message notification from seriousF, you check your phone to find a simple message.
                        t <span style="color:cyan; ">P: "Get lost and burn some time, don't make him get any more suspicious".. Did he really type that without looking into the screen?</span>
                        player Aaalright boys, seems like this poor counselor has more stupid papers to fill, god am I underpaid.
                        meji Why don't you ask it to your boss?
                        serious <i>mejiL!</i>
                        meji Alright alright, see you later person I'll probably forget in a day!
                        t "How nice of him" you think to yourself as you walk off to your office.
                        trans seriousgym; name Burn some time and meet with him;
                    `);
                } 
                if(checkTrust("meji") == 10){
                    writeHTML(`
                        t mejiF raises his hand to his hair, playing with his ponytail with a thoughtful expression on his face.
                        t <span style="color:cyan; ">P: Why do I feel like he forgot my name?</span>
                        t After a bit of thinking he finally speaks with a confident look on his face.
                        meji Yo seriousL, bet you know better but isn't that playerF? The new counselor hm?
                        serious And why am I supposed to know better? I mean yeah I do but what made ya think I would?
                        meji Well, who else but you brag about knowing a shit ton of useless information around the school? Aren't you tired about your little spying game hm?
                        t <span style="color:yellow; ">A: Bold words from someone who's trying to hide his crossdressing habit, but he has a point.</span>
                        t seriousF crosses his arms and turns his face to mejiF with a smug grin on his face.
                        serious Well, at least I gather useless information around me and treat them like government secrets instead of gathering useless <i>people</i> around myself and treating them like <i>friends</i>, mejiL.
                        meji Urk, you didn't have to make my friends a part of this, and I didn't even intend to pick a fight..
                        t <span style="color:yellow; ">A: Ugghhhhhh! I missed the days he'd just insult instead of making me feel guilty.</span>
                        serious Right riight, sorry about talking shit 'bout your buddies.
                        t <span style="color:cyan; ">P: Hah, guilt tripping can really be an easy way to avoid a fight while remaining triumphant, good job mejiF.</span>
                        meji It's okay dude, but aren't we forgetting our other friend here?
                        t He gestures at you while saying that, so it's your turn to speak.
                        player Well I was expecting you two to cuddle the argument off, but seems that won't happen huh?
                        t mejiF starts laughing at what you said, just to find seriousF waiting with his arms open when he looks to the side.
                        meji Aww man, for real?
                        serious Why not? It's a counselor who suggested that, and a hug can't hurt anyway.
                        meji ...I guess so.
                        t mejiF looks around quickly, but you, him and seriousF are the only ones in the hallway.
                        serious <i>Cmooon, it's not like anyone's gonna laugh at you for that.</i>
                        meji Just give me a fucking moment okay? Didn't know you were such a whore for cuddles.
                        t He looks at you for one last time, but you aren't gonna "save" him this time either.
                        meji Ugh, <i>fine!</i> Come here.
                        t With that he finally gives seriousF his hug, it takes a moment for both of them to realize that they're waiting for the other to stop first.
                        t <span style="color:yellow; ">A: ...Well I think that's the first time we did that, and it ain't half bad at all heheheh.</span>
                        t At last, mejiF pulls his arms back first, tilting his head to the side and looking at you he asks.
                        meji Ookay so you had your fun? <i>Man this was more embarrassing than I thought it'd be, ugh.</i>
                        serious What's so embarrassing about giving a friend a hug?
                        meji You shut up. You didn't have to hold me like your long lost brother, that's just weird...
                        t He turns towards you and continues.
                        meji Anyway why did you even come here? Need something?
                        player I just wanted to tell seriousF to wait for me after training.
                        meji Training..?
                        t seriousF nods excitedly.
                        serious Mhm! One of my friends in boys' volleyball team invited me to today's training.
                        meji Whatever, I'm out of here, you two better keep your mouths shut about what happened.
                        t mejiF walks off, actually he doesn't go too far, he just sits on the stairs while looking through his phone, he's probably waiting for you to get lost so he can come back.
                        serious So, why after training?
                        player Do you wanna use the toilets again?
                        serious ...Got it, I'll be in the gym, don't make me wait too long.
                        player I won't don't worry.
                        serious Then I'll see you later.
                        player Byebye!
                        t <span style="color:yellow; ">A: Why do I feel like I'll get even more tired once the training is done..</span>
                        t <span style="color:cyan; ">P: That certainly was something, hope mejiF won't hate me for what happened heheh.</span>
                        trans seriousgym; name Burn some time and meet with seriousF;
                    `);
                    addFlag("serious", "mejihug");
                }
                if(checkTrust("meji") >= 20 && checkTrust("meji") < 27){
                    writeHTML(`
                        t mejiF's eyes widen the moment he notices you, his eyes keep darting between you and seriousF.
                        meji O-Oh hey..! What're you doing here..?
                        player I'm just passing by, I work here you know.
                        t mejiF turns his face back towards seriousF, who was already staring at him confusedly.
                        serious Uhm mejiL... Ya good champ?
                        meji Huh? Oh y-yeah yeah all good. Does it look like I'm not?
                        t mejiF stretches his back to fix his posture.
                        t <span style="color:yellow; ">A: It does look like ya ain't good, mejiL. But what's the issue...</span>
                        meji Heh, yo seriousL, could you give us a moment?
                        serious I don't see why not, take ya time.
                        t mejiF snaps his fingers and tilts his head to the side quickly while looking at you as he walks towards the school entrance, basically signaling you to follow, when both of you turn the corner he leans against the nearest wall, his loosely clenched fists on his knees.
                        meji Okay so, why does the <i>info broker wannabe</i> over there know who you are?
                        player Let's see, maybe it's about we're in the same place for a few hours almost every day of the week, plus me being a counselor and-
                        meji It was a rhetorical question goddamnit!
                        t He looks up while taking a deep breath, his hands shaking, just like the rest of his body.
                        meji <i>Does he know?</i>
                        player Know what?
                        meji <b>What do you think I'm talking about? The shit you've caught me doing outside last time!</b>
                        t <span style="color:cyan; ">P: Ohhh so that was the issue, okay now it makes sense.</span>
                        player mejiF, listen.
                        t He lowers his head to look into your face, trying to control his breathing.
                        player I haven't told anyone anything, <i>I told you I wouldn't tell anyone anything. And I'm not someone to lie about a promise like that.</i> 
                        t His muscles relax as he lets out a sigh, he looks calmer as well.
                        meji Of course you wouldn't, I just... Ugh I don't want him to have dirt on me you kno-
                        player Hush, I'm not done yet.
                        t He raises his eyebrows, playing with the hem of his shirt.
                        meji Y-Yes?
                        player On the other hand mejiF, it's really disappointing you'd think I'd expose you like that, do you have any idea how serious of an accusation that is for me? Thinking that I'd break my promise when you don't even have proof for it.
                        t You put your hand on the wall over his shoulder, he can't help but gulp as his eyes narrow.
                        player <i>Don't you think that's pretty rude of you mejiF?</i> And I'm pretty sure I told you that nobody likes a rude <i>bitch</i> didn't I?
                        t He let's out a gasp as his knees start shaking, his eyes keep moving between your hand on the wall and your face.
                        meji I-I am sorry really! I didn't mean it like that I was just anxious please.
                        player Great! I knew it was just a big misunderstanding, after all you wouldn't just go blaming me without solid proof, right?
                        t He nods quickly, his head almost hitting the wall behind him.
                        meji Of course I wouldn't! 
                        t You give him a quick pat on his shoulder as you lower your hand, he looks a little more relaxed.
                        player Then it's all fine! 
                        meji <i>Thank you *sir...</i>
                        player Alright, should we go back now?
                        t He shakes his head slowly, he's still a little tense.
                        t <span style="color:cyan; ">P: Aww, did I really scare him that much? Poor mejiF..</span>
                        meji I'll be there in a bit, you can go first, seriousL doesn't stay in the same place for too long you know.
                        player <i>Info broker wannabe</i> huh?
                        meji Well he's not a bad guy, if only he could stop being so curious about stuff that's none of his business.
                        player I know I know, see you in a bit then.
                        t He nods while sitting on the stairs to the next floor, you walk back towards west hallway where seriousF is looking through his phone.
                        serious So what was his problem?
                        player ...Do you really have any dirt on the guy?
                        serious Dirt? Oooh so was he afraid you told me about his street habit?
                        player What the? How?
                        t He spins his phone once before putting it back in his pocket, there is a confident grin on his face.
                        serious It doesn't take a genius to understand how I know it, like come on work your brain! How many of the boys in this school take a walk around the town wearing skirts in the evening?
                        player Well, you do, and he does too, is it two?
                        serious Seven actually, but yeah only two you need to know of.
                        t <span style="color:cyan; ">P: SEVEN?! How does he know that many crossdressers anyway??</span>
                        t <span style="color:yellow; ">A: Hehehehe I totally made that up, I love spreading misinformation!!!</span>
                        player ...Okay, well I just wanted to tell you to wait after the training today.
                        serious How you? Bah alright, see you then.
                        player I'll see you, <i>seriousL.</i>
                        serious Not you too cmon!
                        player What? You got a nice last name.
                        serious Why don't you go do your stupid, boring work while waitin for me?
                        player Rude.
                        t You pass by mejiF while going upstairs, you can hear him receiving a notification as you're halfway through the stairs.
                        player From him?
                        meji Who else? Anyway see you later *sir.
                        trans seriousgym; name Burn some time and meet with him;
                    `);
                }
                if(checkTrust("meji") >= 40 && checkTrust("meji") < 47){
                    writeHTML(`
                        meji Yo! How's it going playerF?
                        player It's going good actually, the sky is as blue as it gets, beautiful weather blah blah, what're you guys talking about?
                        t He wraps his arm around seriousF's shoulders, smiling wide as he's answering your question.
                        meji Oh don't mind us, just two boys talking about a video game, nothing unusual, uhmm.
                        t mejiF tilts his head to seriousF's side.
                        meji <i>Does he, know..?</i>
                        serious Know what? Your silly little secret? Of course I do!
                        meji <b>W-What?!</b>
                        t <span style="color:cyan; ">P: seriousF you asshole... You are NOT helping!!</span>
                        serious Dude everyone knows your "secret", tut tut tut...
                        meji <i>You said you wouldn't tell anyone..?</i>
                        player ...
                        serious Don't make a big deal out of this mejiL, being a horrible cook doesn't make ya a bad person after all.
                        t mejiF's body relaxes visibly as he pushes seriousF away, nodding at you before turning back to him.
                        meji <b>ME? A BAD COOK?!</b> You have to be kidding dude... My grilled cheese sandwiches are the best, and I'm not even bragging about this, you should try it someday.
                        t seriousF crosses his arms with a wide smile on his face.
                        serious Alright bet, but if you fail to impress I'm gonna tell everyone how terrible you're at cooking.
                        meji That won't happen, seriousL.
                        t <span style="color:yellow; ">A: MWHAHAHA FREE FOOD FREE FOOD FREE FOOD!!!</span>
                        meji Anyway playerF, needed anything?
                        player Well, just wanted to ask seriousF if he was busy after today's training.
                        serious Actually I was planning to give mejiL an opportunity to clear his name and prove he's a good cook but alright sure, I'll be waiting.
                        player Don't mind me asking but, how can a grilled cheese sandwich make you a good cook?
                        serious We're students ya know, we live off pasta, quick stuff like grilled cheese and fast food, I mean mejiL might be rich but he doesn't seem that interested in learning fine cuisine.
                        meji Grilled cheese IS fine cuisine, also I can't bother cooking complicated stuff everyday.
                        serious Whatever ya say.
                        player Well see you two later then.
                        t seriousF pulls his phone out, typing something as he points mejiF to check his screen.
                        serious Mhm, we'll see ya too, byebye!
                        meji <i>...Why do you have 138 grilled cheese pics in your gallery anyway?</i>
                        serious I didn't buy a 1TB phone just to leave its storage completely unused, I like grill cheese.
                        meji You can't be sane.
                        trans seriousgym; name Burn some time and meet with him;
                    `);
                }
                if(checkTrust("meji") >= 60){
                    writeHTML(`
                        meji And just as I was thinking this conversation couldn't get any more interesting, what's up playerF?
                        serious It wasn't that interesting mejiL, we were only talking about the beast you've slain in a damn game.
                        meji Yeah but it was a big one you gotta give me that.
                        serious Okay yeah, no objections here.
                        t <span style="color:yellow; ">A: Keep bragging mejiL, I'll see what you're made of later..</span>
                        meji So you're here for me right?
                        player Not this time, I've something to talk with seriousF.
                        t mejiF's eyes dart between you and seriousF.
                        meji Oh really? That's funny... Alright then he's yours.
                        t <span style="color:yellow; ">A: COME ON WHY'RE YOU SELLING ME OUT LIKE THAT? THOUGHT WE WERE FRIENDS mejiL!!</span>
                        player Not right now actually, just wanted to ask him to meet me after school.
                        t *PLINK* goes your cellphone with a single message from seriousF, "what're you tryna doo?"
                        meji Alright then, whatever you have in mind is your problem, not mine.
                        player Then I'll see you two later.
                        serious I'll see ya.
                        meji Bye!
                        t You can hear them returning to their conversation as you walk away, time to burn some time.
                        trans seriousgym; name Burn some time and meet with him;
                    `);
                }  
            }
            else { //bug
                writeHTML(`
				    meji Huh? That's odd...
                    serious ...This dialogue shouldn't be here, right?
                    player Exactly.
                    serious If you're seeing this, consider joining Noodle's discord and reporting it in #bug-reporting.
                    player Don't worry though, you can click the fix button below to go back to the second street encounter with seriousF.
                    serious And if it doesn't help fixing your problem, well.
                    player It will be even more displeasing.
                    t Okay guys you've dealt enough damage to the fourth wall, now could you be so kind to press the button below to go back to that fateful dilemma?
                    serious Oooor, if you're feeling lucky, you might as well just go back and retry this encounter.
                    player Either way make sure you report this, this is delaying our progress.
                    serious At least my ass is safe.
                    player For now...
                    serious Ugh, oh hey mejiL, it's now or never, say it now!
                    meji <i>Pretty boy swaaag!</i>
                    serious Wooo! Way to go mejiL!
                    meji Man I needed to say that, for whatever reason I knew I was destined for that.
                    trans streetremeet; name Try fixing;
                    trans cancel; name Just go back;
                `);
            }
			break;
		}
        case "seriousgym": {
            passTime();
            passTime();
            if(checkTrust("serious") == 40){
                setTrust('serious', 50);
                writeEvent('serious3a');
                writeFunction("changeLocation('apartmentOutside')", "Finish up");
            }
            else if(checkTrust("serious") == 35){
                setTrust('serious', 45);
                writeEvent('serious3b');
                writeFunction("writeEncounter('serious3ba')", "Make him cum in your hand");
                writeFunction("writeEncounter('serious3bb')", "Leave him blueballed");
            }
            else{
                writeSpeech("serious", "", "Something's wacky with your game, might as well report this.");
            }
			break;
		}
        case "serious3ba": {
    		writeEvent('serious3ba');
			writeFunction("changeLocation('apartmentOutside')", "Finish up");
			break;
		}
        case "serious3bb": {
    		writeEvent('serious3bb');
            addFlag("serious", "sadist");
			writeFunction("changeLocation('apartmentOutside')", "Finish up");
			break;
		}
        case "neighbor": {
    		if(checkTrust("serious") == 50){
                writeHTML(`
				    t There is an issue. Yes, the weather is nice. Yes, the wind is gentle. Yes, you haven't forgotten your shoes either. But there is still an issue.
                    player I know there are people who think counselors are better at time management, but here I am, out of my apartment during the "silly hour".
                    t The sun is "almost" down on the horizon, which limits your choices in the wackiest way possible.
                    t <span style="color:cyan; ">P: Now let's see what choices do I have; Going downtown would be a dumb decision at the moment, because before I could do anything fun the sun would set, but if I go back in home I'll have to wait at least a whole hour before the sun sets, so I'd just sit and stare into wall. Ugh this is stupid.</span>
                    t Then, out of nowhere, a third option appears in your mind.
                    player <i>Well, let's see if seriousF can offer me some hospitality or at least cinnamon rolls.</i>
                    t ...
                    t Only a minute of walking and you're already outside his home, and only a minute to knock on his door.
                    t <span style="color:yellow; ">A: Not a minute of rest even in my own house... Who the hell is it this time I just took a break goddamnit.</span>
                    im images/serious/home1.jpg
                    t <span style="color:yellow; ">A: Of course, who else? Well it'd be housekeepF too but well.</span>
                    serious Soooo... Hi?
                    player Oh yeah sorry hi, I just... Why do you have your apron on again?
                    serious I'm vacuuming the house, hard to convince an actual maid to do the job for free you know.
                    player Oh nice, you got any snacks in there?
                    t He chuckles, shaking his head slowly.
                    serious Oh was it "act like seriousF day" today? And yeah there are snacks in the home but they're all mine, I don't print money you know.
                    player Well I see one "snack" right in front of me, how about that one?
                    im images/serious/home2.jpg 
                    serious <i>Oh heh...</i> No nononono shut up! I've got a house to clean, but ya wanna get it even dirtier. I can't clean the place all by myself after that.
                    player What if I told you I'd help with cleaning around once we're done?
                    t There is a moment of silence as he thinks of the offer before gesturing inside.
                    serious ...Then please come in <i>and let me thank you for the offer.</i>
                    trans serioushome; name Get inside;
                `);
            }
            if(checkTrust("serious") == 45){
                if(checkFlag("serious", "sadist") != true){
                    writeHTML(`
                        t You knock on seriousF's home's front door, which he opens in a moment.
                        serious Finally, I thou- <i>Oh, it's you...</i>
                        im images/serious/home1.jpg
                        player Were you waiting for someone else?
                        serious If I knew it was you I wouldn't answer the door at all.
                        t He tilts his head to the right side.
                        serious Now, whaddya want from me?
                        player Isn't it obvious?
                        serious <i>Goddammit again? What happened to all your other toys?</i>
                        player Well, I wanna play with this one.
                        t He lets out a deep sigh before opening the door all the way.
                        serious Just... Keep it quick, alright?
                        trans serioushome; name Continue;
                    `);
                }
                else{
                    setTrust('serious', 60);
                    writeHTML(`
                        t You knock on seriousF's home's front door, which he opens in no time.
                        serious Oh hi- <i>Oh, it's you, nevermind...</i>
                        im images/serious/home1.jpg
                        player Were you expecting someone else?
                        serious I was, I was hoping for <i>anyone but you</i> actually.
                        t He tilts his head to the left side.
                        serious Now, what's it ya wanted?
                        player Isn't it obvious?
                        serious <i>Get lost.</i>
                        t You put your hand on the door, making him step back.
                        player <i>But why would I? It's not like you can resist, can you?</i>
                        serious <i>Watch me.</i>
                        t He smacks your hand with the mop behind him.
                        player Hey..!
                        serious <i>Outta my fuckin sight, creep.</i>
                        t He slams the door shut, there is no point in knocking again at this point. 
                        player <i>Ugh... This'll leave a mark.</i>
                        trans cancel; name Get lost;
                    `);
                }
            }
			break;
		}
        case "serioushome": {
            if(checkTrust("serious") == 50){
                passTime();
                setTrust('serious', 75);
                writeEvent('serious4a');
                addFlag("serious", "broken");
                writeFunction("writeEncounter('wakeupcall')", "Wake up");
            }
            else if(checkTrust("serious") == 45){
                passTime();
                setTrust('serious', 60);
                writeEvent('serious4b');
                writeFunction("changeLocation('apartmentOutside')", "Finish up");
            }
			break;
		}
        case "wakeupcall": {  
            writeHTML(`
                t ...
                t *Bzzzzt*
                player <i>Gaww what's it at this hou-</i> Wait wait what time is it?
                t You raise your head from the pillow to look around and...
                im images/locations/newDayNight.jpg
                player ...Late, it's late. And wait...
                im images/locations/playerHouseNight.jpg
                player ...I'm back home?
                t *Bzzzzt!*<br>Your phone is still ringing on the table so you pick it up.
                player Hello..?
                t You can hear a few familiar giggles before someone finally replies.
			`);
            if(checkTrust("intern") > 100 && checkTrust("housekeep") >= 43){
                writeHTML(`
                    indamn <i>Finally up from your beauty sleep? You made a fucking mess over here.</i>
                    player internF? What the hell are you talking about again?
                    blessed Heyaa playerF! Don't listen to internF here he's just being rude again you know... But yeah it was a bit messy.
                    player Theo? Ughhh could any of you be kind enough to tell me what's going on?
                    t You hear a few rumbles and a short argument (an exchange of cusses) before the voice changes.
                    serious <i>Hope you slept well, sweetie. Had to call the boys to help me carry your ass back your place.</i>
                    t Thus you remember what happened back at seriousF's house today, you can hear Theo giggle as internF picks the phone again.
                    indamn Cheap bastard's lying again! Me 'n Theo did the carrying as the fuckface kept bitching about his ass on the floor for a whole hour hah ha- Hey!
                    serious Put your imp tongue back in your mouth you haybrain. if I could carry I wouldn't even bother calling you for help.
                    t <span style="color:cyan; ">P: Imp..? Could he..?</span>
                    blessed <b>Not this again! Can't you two get along for a damn minute???</b>
                    indamn But he- Aight aight don't look at me like that... My bad dude.
                    serious Ugh... 'Kay yeah sorry internF. You're a good dude still.  
                    player Wait wait wait, seriousF.
                    serious What's it? Took you that long to remember my name?
                    player You called internF an imp, so you..?
                    serious <i>Cmoon we talked 'bout this, I know way more than it's for my own good.</i>
                    indamn Theo snitched on us man don't look at me.
                    blessed It was a "valuable information exchange" you dummy.
                    player So seriousF is not a demon, right..?
                    indamn Not yet thankfully, and I'd rather it stay that way if you can keep your dick in your pants for once.
                    t Some more tension between seriousF and internF until Theo stops them for a second time.
                    serious But yeah I know them. By the way I had to call three of the bois over to help carry you back and clean. Theo even brought biscuits to eat with tea!
                    player Three? Who's the third?
                    t You can faintly hear footsteps as the other boi approaches the phone. 
                    housekeep Devoted maid housekeepF housekeepL at your service. Thanks for the unexpected yet lovely surprise, *Master.
                    serious Ughh... Can you tell me what's so lovely about a cum stained floor again bud?
                    housekeep Helping was a pleasure by itself, especially to someone so special.
                    serious Simp.
                    indamn Hey Lucky Luke, <i>weren't you the one simping over the pinkhead back at the school?</i>
                    housekeep Is he sim- I mean uhh... Me?
                    indamn Oh shit sorry fam, I should've used a more specific term like a name. What was his name again? <i>I'm sure the last name was nagatoroL but w-</i>  
                    blessed <b>internF!</b>
                    indamn Whaaa? Thought we were on the same side.
                    blessed Yeah, you and seriousF are together on the side of the simps. Have you really forgotten how many months it took you to ask me out?
                    indamn <font size= '-1'>He didn't need to KNOW!</font>
                    housekeep The boy you are talking about is not me right? That's a relief.
                    serious housekeepF do you really not know nagatoroF?
                    housekeep Maybe, I'm a little sleepy but the name sounded familiar.
                    serious Hey playerF you should be glad housekeepF agreed to help for free on your behalf, or I was gonna redirect the bill on your side.
                    player Thanks a lot housekeepF!
                    housekeep I'm a maid doing the job of a maid, no need to thank me!
                    player So what're you guys going to do now?
                    indamn For starters we'll lay seriousF on the floor and finish what you started.
                    housekeep ...No one told me about that? Theooo?
                    blessed internF thinks he's funny while he really isn't housekeepF, don't mind him. 
                    indamn Can you be on your boyfriend's side for once sir Theo? And fuck you I'm funny as hell.
                    housekeep Funny as "hell"? Haha that was a good pun internF!
                    indamn My man! See? He's backing up YOUR boyfriend.
                    blessed <i>Shut the "hell" up, internF.</i>
                    housekeep Heheheh.
                    indamn Meanies.
                    serious If you guys would let me... We're gonna eat our biscuits, drink our tea-
                    indamn Which isn't nearly half as good as mine.
                    serious Bring your own fucking tea next time then. Anyway yeah drink our tea and then part our ways to go sleep, I think you should sleep too playerF.
                    player Nice! And yeah I think I will, but can you and internF stop fighting?
                    indamn ...Just for tonight.
                    blessed Thank you playerF! I won't have to keep yelling at two bodies with only one brain in total for the rest of the time.
                    serious But I'm not half brained, Theo.
                    blessed I know! You have a full brain in your head.
                    player But doesn't that make-
                    indamn Heh, I doubt his brain is anything more than half at all.
                    player ...I think I got my answer, goodnight boys!
                    housekeep Rest well *master! <i>I'd rather cleaning a mess off my own body next time if you get what I mean.</i>
                    serious Hey playerF! Normal people sleep on the bed, not the floor, you know right?
                    blessed Good night playerF! Me and internF will be waiting for you too, right <i>blondy</i>?
                    indamn I told you not to call me thaaat..! But yeah we'll be waiting.
                    serious Yo playerF do me a favor will ya?
                    player What's it?
                    serious Check in your pockets once the call ends, okay?
                    player Alright..? I'll see you all later then!
                    t You end the call to put your hands in your pockets, there is nothing new but two tiny papers inside your right pocket, you notice they are photographs once you pull them out.
                    player <i>Ha ha. Fuck you seriousF.</i>
                    t In the first pic you can see all of them (except housekeepF, who was probably holding the camera) taking a group photo with your collapsed body, making silly faces.<br>The other pic is a selfie seemingly taken by Theo, apparently outside. Him and internF seem to have gotten below each of your arms and carry you back home that way. You can see internF's two fingers above your head making it look like a silly group selfie.
                    player Heh... Well they helped with my mess have they not? I'll keep these.
                    t You notice a note behind the second pic as you put them in your drawer, from the terrible handwriting you can guess who wrote it.
                    player "Dear playerF, I hop you liked how you're dumbass looked in the pics. I have two advices for you; first, pleese for the love of the Lucy lose weight, like yeah seriousF's home was really close but were not really physically strong dude, I would kill seriousF if he didn't offer free tea for all of us. And second, ignore succubusF tonight if you can, I fear you'll break you're fucking balls even you're beast body have limits, and funny purpleheaded boybitch can wait a little, this is coming from a FUCKING DEMON you know, if a demon is telling you to stop having sex it means your taking it a bit too far, but seriously take a rest. Fuck I'm running out of writing space sincerly internF see you lat".<br> That really hurt my eyes to read what the fuck internF how'd you even get in an university?
                `);
                addFlag("serious", "outcold1");
            }
            else if(checkTrust("intern") > 100 && checkTrust("housekeep") < 43){
                writeHTML(`
                    blessed <font color= '#BD7CDE'><i>Ooooh so you finally decided to wake up huh? Been ringing for last three minutes pal.</i></font>
                    player Theo..? What's the matter?
                    t You can hear Theo gasp, followed by a victorious scream by internF.
                    indamn <b>HA!</b> I told you you uhh you uhm... <i>You pretty bastard.</i>
                    blessed Heheheh... Was my internF impression really that bad though?
                    indamn Of course it was, my voice is unique and beautiful.
                    player Well... It's not that internF, I couldn't tell your voices apart actually.
                    indamn 'Scuse me???
                    player If it was internF, he'd have cursed at least three times once I opened the phone.
                    indamn <i>...You're not wrong but fuck you.</i>
                    t Theo's laughing is pretty loud even though internF is the one holding the phone. 
                    blessed Haha yeah I'm sorryy! How could I forget being a foul mouthed dumdum? That's the whole thing about internF.
                    indamn <b>Theo you are NOT helping.</b>
                    t You check your watch, it's well past midnight by now.
                    player Okay now, why am I getting a phonecall at this hour? Are you two drunk or what?
                    blessed Oh no no, I only get drunk on our anniversaries with internF.
                    indamn Don't look at me, it's his own choice.
                    t You can hear a third person approaching the phone.
                    serious <i>And as for why they're calling you, who else do you think brought you back home?</i>
                    t The events of the day flow back in your mind, you remember collapsing at seriousF's house and the rest is.. Blank.
                    serious I apologize on my friends' behalf.<br>Ya had a good sleep, <i>princess</i>? Someone had to call for help to clean after your mess.
                    player Oh yeah sorry for that- I promised to help but well, you know I was in no condition of even helping myself.
                    serious And you'll keep your promise either way, I'll have you clean the house sometime else.
                    player Wait wait.. How did I actually end up here though? internF did you use one of your "tricks" or something?
                    indamn Nah, me and Theo just got in each of your arms and carried your heavy ass back home. <i>You gotta lose some weight if you're trying to make collapsing in other bois' houses a habit, buddy.</i>
                    blessed Or maybe we can train muscles! I believe I'd look cuter with a bit of training.
                    indamn I'm not tryin to carry that dumbass around all the time, keep your ideas to yourself.
                    blessed Okay then you can carry me to bedroom everyday instead!
                    indamn <i>...Will consider, but don't get your hopes up.</i>
                    player Oh wait seriousF! internF and Theo, you know these two are..?
                    serious Yup! I know that they're dating, it's the weirdest relationship I've seen but well who am I to complain? <font size= '-1'><i>After all I don't have even that much...</i></font>
                    blessed seriousF is my best friend! Didn't know you knew him until tonight though.
                    indamn Ughh can you two please stop playing dumb if you wanna keep calling me the dumb one. Yeah playerF, the little fucker knows what we are thanks to Theo.
                    blessed "Valuable information exchange" is the key word internF!
                    player ...Well if you guys are done talking, can someone just explain why am I being phoned in the middle of the night?!
                    blessed seriousF just wanted to make sure you were okay.
                    indamn As if it was necessary, if ass could kill people mine would've murdered playerF countless time already.
                    serious Are you kidding me? They hit their head on the floor you cretin it has nothing to do with ass.
                    indamn Oh yeah I think I missed that detail.
                    player Could you two stop arguing already? Okay so what are you guys going to do now?
                    serious Well we've got some biscuits Theo brought, which is so nice of him since he made my favorite one, and we have tea as well.
                    indamn Which is nowhere as good as my tea, just so you know.
                    serious Oh is that why you're on your seventh cup already? Bring your own tea next time you cheapskate.
                    indamn Is that so? It's all fine when you stuff your face with MY boyfriend's cookies, but I'm a cheapskate when I drink some tea??
                    blessed internF can you please give me my phone back?
                    serious At least I appreciate the quality you ungrateful imp.
                    indamn I'd appreciate the quality if there were an- W-Wait what the f-
                    t You hear a loud thud and a short screech.
                    indamn <b>EEEEK! YOU FUCKING MANIAC YOU ALMOST BROKE MY SPINE!</b>
                    blessed <font color= '#937CF7'><i>Should've given me the phone when I asked then, honey. You should be glad I chose the couch instead of the floor.</i></font>
                    indamn Lucy's balls- Calm down alright, but as an angel you should be fair even when you're punishing. <i>So throw the bastard too!</i>
                    serious Pff, why would he? You're the one messing with me.
                    blessed <i>I'm sorry seriousF...</i>
                    serious W-Wait Theo no I'm too young..!
                    t *Thud*
                    indamn <b>WHAT THE FUCK IS YOUR PROBLEM WITH ME?!</b>
                    serious <b><i>Why HIS BODY out of all places?</i></b> I mean I'm glad it's not the floor but..
                    blessed Maybe you two should cuddle and try being nicer to each other huh?
                    t You can hear internF and seriousF whisper something, but the phone's speaker isn't strong enough to catch what they're saying.
                    blessed <i>Yaaay!</i> It was not that hard right?
                    indamn Yeah yeah now can he get off me I can't breathe.
                    serious Let me finish my damn sentence then.<br>Ahem, we're gonna feast on our cookies, drink our teas and then part our ways to go sleep.
                    player I think I should go back to sleep too, well then goodnight boys.
                    serious Aye aye cap'n! But try not to sleep on the floor this time. G'night!
                    blessed Rest well playerF! <i>Or I'll have to throw you on the bed next time you come over.</i>
                    indamn Do me a favor and ignore the funguy on your windowsill for this once okay? Nighty night.
                    t You end the call to stretch your arms, well it's goodnight time!
                    player What the hell was up with throwing them around anyway? 
                `);
                addFlag("serious", "outcold2");
            }
            else if(checkTrust("intern") < 101 && checkTrust("housekeep") >= 43){
                writeHTML(`
                    housekeep Heheheh~ Good morning playerSir! <i>Or should I say good night? But then you would go back to sleep right..?</i> Uhm can anyone help me here I'm in a bit of trouble.
                    player housekeepF? Is there a problem with anything?
                    housekeep I assume you could call the midnight shift a "problem" for Maid in Heaven? I don't really mind actually, I'm quite happy to help if I say so myself. 
                    player Help? Cleaning? At this hour? And what does it have to do with me? 
                    housekeep But you're asking too many questions at once playerSir, how am I supposed to answer them all?
                    t You can hear a few whispers before the person holding the phone switches.
                    serious <i>I believe I can answer your questions, playerSir!</i>
                    player ...You just have.
                    t The events of the day come back flooding to your mind, everything that had happened until the moment you collapsed, the rest is blank.
                    serious Is your head aching? You kinda hit your head there.
                    player Yeah, a little bit.
                    serious Good, if you used your common sense for once you would've dropped on my softer-than-clouds bed instead. You deserved that headache.
                    player You're rude.
                    serious Am I rude? Ya interrupted me while I was cleanin' my place, fucked me so badly I couldn't move for half an hour, made me call a whole maid to clean the damn house even though you promised you'd help with it, and I'm the rude one?
                    player Yes.
                    serious I should've just thrown your unconscious body out of the window.
                    housekeep But why are you two fighting? I agreed to help for free haven't I?
                    serious It's not about that, they made a promise and they didn't keep it. I was fine with cleaning the place myself ya know but thanks to your oh so precious *Master I can barely move my fucking legs.
                    housekeep That's... Tough? I don't know I never had such a problem.
                    serious <i>I was not lubed.</i>
                    housekeep Oh gosh... This kinda sounds tough okay.
                    player You could get the lube yourself seriousF.
                    serious Oh yea I could, I would probably pay up ya bills too oh and maybe even give you some pocket money. <b>I AM THE FUCKING SUB HERE I AM ALREADY GIVING MY ASS WHAT MORE DO YOU WANT FROM ME?!</b>
                    housekeep I mean I bring my own lube.
                    serious Sorry but unfortunately I don't clean my own house with the expectation of receiving rough anal sex.
                    housekeep <i>But that's the fun part about cleaning a home!</i>
                    serious ...I won't argue with that.
                    player Wait, how did I actually get home though? 
                    serious housekeepF wasn't the only person I called tonight, we're four boys over here right now. But I can safely say housekeepF is the only sane one.
                    housekeep Aww thanks, I wish I could've brought something like Theo. I was getting ready to sleep when you called.
                    serious Free cleaning is more than enough. Actually go grab yourself a sandwich from the fridge you're good.
                    t You can hear another voice a little far from the other two.
                `);
                writeSpeech("intern", "", "What about me? I helped carry the fucker back home you know.");
                writeSpeech("serious", "", "<i>Eat shit internF!</i>");
                writeSpeech("intern", "", "This is favoritism! You just have something for boys with boys with pink hai-");
                writeText("You hear a knock on something hitting the floor followed by a loud EEK.");
                writeSpeech("intern", "", "<b>FUCKING BOOKS?! YOU ALMOST HIT ME THERE!</b>");
                writeHTML(`
                    serious <i>Put your tongue back in your mouth or the next book will hit you square in the face.</i>
                    housekeep This is too much! I'm too tired to put all the books back on their shelves please.
                    serious Good point, okay fine housekeepF can you go fetch one sandwich for each of us? <font size= '-1'>Theo's giving me the stink eye again.</font>
                    housekeep Yay peace! Okay coming right up.
                    t You hear seriousF coughing as he picks the phone back from housekeepF, who walks away (probably towards kitchen.)
                    player So what're you guys up to do next?
                    serious We got tea, we got biscuits, we got sandwiches, we got cards and we're four boys. I think we're gonna play a few games of poker, or this new game housekeepF was talking about. And then we'll part our ways for the night and sleep, on our beds instead of solid floor.
                    player Ha-ha, fuck you seriousF.
                    serious No sandwich for you.
                    player <i>Nooooo..!</i>
                    t You two laugh a bit as you hear housekeepF approach again.
                    housekeep There you go seriousF.
                    serious Thanks a bunch housekeepF, which one did ya pick for yourself?
                    housekeep I don't want one, thank you.
                    t There is a momentary silence, broken by housekeepF's voice.
                    housekeep B-But if you insist..!
                    serious <i>I insist.</i>
                    housekeep I will.. Be right back!
                    t The footsteps are faster this time.
                    player What did you even do to him seriousF?
                    serious I've done nothing! He just saw the displeased look in my eyes and decided he wanted a sandwich.
                    player Displeased or dreadful?
                    serious <i>Why don't you just go to sleep already?</i><br>Goodnight tuck yourself nicely don't let the bedbugs bite.
                    t You can hear housekeepF run back towards the phone.
                    housekeep There! I got myself one, just please stop looking at me like that...
                    serious Oh a good one, you got good taste housekeepF!
                    housekeep And goodnight playerSir! I hope you'll need Maid in Heaven's services (or mine to be precise) at a more suitable hour next time! 
                    player I'm not a fan of collapsing here and there don't worry.
                    housekeep That's a relief! Okay then goodnight!
                    t You wish them both a good night once again before hanging up, it's time to slumber!
                `);
                addFlag("serious", "outcold3");
            }
            else{
                writeHTML(`
                    serious You finally up? I thought you died or somethin'.
                    player What's the matter seriousF? And how did I get home?
                    serious Would ya believe me if I told you I summoned heaven and hell's help to get you back home?
                    player Not really.
                    serious 'Kay.
                    player Well then are you better?
                    serious I guess? My ass still hurts but I can at least stand up.
                    player Thaat's somethin'
                    serious I suppose, but you still owe me a home cleaning. I'll make you wear an apron and clean up the place.
                    player And why's that?
                    serious You promised to help me clean but I ended up having to call a maid, now you owe me either the money or the labor.
                    player You won't make me do that, you got all you wanted from me haven't you.
                    serious Nope, silly mind tricks won't work this time, I'm determined to make your dumbass clean my home.
                    player Gee... I'll try to find some time on my schedule okay.
                `);
                if(checkTrust("succubus") > 1){ //succubus is most likely there, right?
                    writeHTML(`
                        define succubus = sp succubus; im demon.jpg;
                        serious <i>"Hmm tomorrow I'll first visit this boy, fuck him in the most uncomfortable place possible, then move on to pretend helping another boy while placing commands and conditions in his subconscious mind, and finally before going to sleep I'll fuck the silly windowsill demon." Ain't that your schedule?
                        t You hear a knocking on your window before you get your phone snatched out of your hand.
                        succubus <i>The windowsill demon is not the silly one!</i>
                        serious Yes he is.
                        succubus The hotel demon is the silly demon seriousF, not me.
                        serious I'm yet to meet with that sucker myself, but the suburban demon sure is silly I've gotta give you that.
                        succubus S-Suburban demon? Just how many fucking demons are there?
                        player Uhm- succubusF what is going on here?
                        succubus Give us a second, seriousF how'd you even know where I am anyway?
                        serious I told you that I'm a psychic succubusF. <i>I foresaw it.</i>
                        succubus Whaaaat?? Are you for real?
                        serious Nope. I just saw you from my own window, you know I live around there.
                        player succubusF...
                        succubus Whaat? Don't look at me like that, we've got all types of freaks around here, a psychic wouldn't be too hard to believe.
                        t He gets back on the windowsill and starts waving towards seriousF's home.
                        succubus Yeah I can see you from here! <i>Wait doesn't that mean you get to stare at my ass every night while I wait for playerF?</i>
                        serious Sometimes.
                        succubus <i>Just wait, from now on I'll stare at your ass on every opportunity as well.</i>
                        player succubusF how is he supposed to see your ass from all that distance at this hour?
                        succubus Of course because it's a big ass!<br>I think you're right.
                        serious Sorry dude I promise I'll stare at your ass another day under daylight.
                        succubus Deal!
                        t You reach at succubusF to pick the phone out of his hand. 
                        player You got anything else to say, seriousF?
                        serious Yeah can you send succubusF here for a moment? We have biscuits!
                        succubus You, calling me over? At this hour?
                        serious Maybe.
                        succubus I'll be there in a moment then, prepare a plate for me too.
                        player Alright alright, but what about me seriousF?
                        serious You already had your snack for today, now go sleep okay?
                        player Gee alright, I'll try.
                        serious Goodnight then, see ya.
                        player See you later, seriousF!
                        t You hang up and lay on your bed with several thoughts in your head.
                        player <i>Since when those two know each other? Who the fuck is the suburban demon? And most importantly did they have chocolate chip cookies??</i>
                    `); 
                }
                else{
                    writeHTML(`
                        serious You better, it's not like you do anything but tear other students' holes anyway, try abstinence for a change.
                        player Ugh... You're such a nuisance, is that all?
                        serious It is, I'm getting ready for the bed so goodnight.
                        player Goodnight, seriousF.
                        t You end the call to change your clothes, it's been a long, long day but you can finally rest, right? You couldn't be hungry for more sex right?
                    `);
                }
                addFlag("serious", "outcold4");
            }  
            writeFunction("changeLocation('playerHouse')", "Get ready for the bed");
            break;
        }
        //God forgive me for the absolute abomination below this line.
        case "postQuo1": { //Classroom B
            if(checkTrust("serious") == 75){
                if(checkFlag("serious", "inClassB") != true){
                    writeHTML(`
                        t You push the door to class B, where seriousF is sitting inside all by himself, seemingly writing something on a piece of paper he's holding. That's kind of odd especially when you think how he always had a group of people around himself to talk with. But, didn't all of the other bois have one thing in common?
                        t <span style="color:cyan; ">P: I think I finally got it... Class B doesn't have as much bois as class A anyway, he must be feeling lonely here.</span>
                        t You gently knock on the nearest desk to make him aware of your presence, he quickly perks up the moment he notices you.
                        im images/serious/happy.jpg
                        serious playerF! Never thought I'd be so happy to see ya!
                        t He walks up to you and gives you a rather quick cuddle.
                        player Heh, and what was that for?
                        serious <i>Honest answer or sweet lie?</i>
                        player Surprise me.
                        t He chuckles and raises his head.
                        serious Because I missed you that's why!
                        player Well that certainly was the lie, now tell me the honest answer.
                        t He lets out a deep sigh, flipping a coin in his hand.
                        serious <i>...I'm bored as fuck, I'm literally playing tic tac toe with myself.</i>
                        player With yourself?
                        serious Mhm, that way I always win.
                        player But you always lose too?
                        t <span style="color:yellow; ">A: No shit Sherlock, really?</span>
                        serious This is a lot like that "is the glass half full or half empty" question ya know.
                        player What is your approach to the question then? Do you consider the said glass to be half full or half empty?
                        t He knocks on his head with his pen a few times as he thinks.
                        serious Don't y'all overthink about it a little? Like half full and half empty are the same thing aren't they?
                        player Maybe, anyway since you're so bored maybe I can think of something fun.
                        t He puts his hands on his back and starts rocking on his toes and heels. 
                        serious Well then I'd be more than happy to burn some time, what's the plan boss?
                        trans seriouschat1; name "I only want to chat, actually";
                        trans seriousgymrep; name Meet him in the gym again;
                        trans serioushomerep; name Go to his home again;
                    `);
                    addFlag("serious", "inClassB");
                }
                else{
                    writeHTML(`
                        t seriousF is sitting on his desk with his legs crossed, clicking on his pen's button with a notesheet in his hand.
                        serious Well if you don't have something interesting to talk about, I'm in the middle of a tic tac toe game against myself you know.
                        trans seriouschat1; name Chat;
                        trans seriousgymrep; name Meet him in the gym again;
                        trans serioushomerep; name Go to his home again;
                    `);
                }
            }
            else if(checkTrust("serious") == 80){
                addFlag("serious", "initiativeComp");
                writeHTML(`
                    serious Glad ya decided to pay me a visit, I was gettin' real bored. Ya got anything <i>fun</i> in mind?
                    trans seriouschat1; name Chat;
                    trans seriousgymrep; name Meet him in the gym again;
                    trans serioushomerep; name Go to his home again;
                `);
                if (checkFlag('serious', 'club')!=true && checkTrust('nagatoro') > 101) {
				    writeFunction("writeEncounter('seriousJoin')", "Take seriousF to nagatoroF's club");
                }
                if (checkFlag('succubus', 'newCorruption')==true && checkTrust('serious') != 666) {
				    writeSpeech("player", "", "<i>Thinking of it, it would be quite unfair to make him a demon actually since he hates being ordered around. But something tells me he'll love the freedom of a life way longer than he could ever imagine... But should I?</i>");
				    writeFunction("writeEncounter('seriouscorrupt')", "Demon time for seriousF");
                }
                if (checkTrust("nagatoro") >= 100 && checkTrust("intern") == 666 && checkTrust("dropout") == 100 && checkTrust("ayeye") == 100 && checkTrust("clubs") == 100 && checkTrust("diamonds") == 100 && checkTrust("hearts") == 100 && checkTrust("spades") == 100){
				    writeSpeech("player", "", "<i>I can have it all. I have a plan to have it all. I will have it all</i>");
				    writeFunction("writeEncounter('allForOne')", "Ace's Special");
                }
                writeFunction("writeEncounter('seriousEndPrompt')", "Final plan");
            }
            else if(checkTrust("serious") == 666){
                writeHTML(`
                    serious Hey, am I supposed to feel all this stretchy? It's like my whole skin is a latex suit on my body. It's getting softer too, <i>and more sensitive...</i>
                    trans seriouschat1; name Chat;
                    trans seriousgymrep; name Meet him in the gym again;
                    trans serioushomerep; name Go to his home again;
                `);
                if (checkFlag('serious', 'club')!=true && checkTrust('nagatoro') > 101) {
				    writeFunction("writeEncounter('seriousJoin')", "Take seriousF to nagatoroF's club");
                }
                if (checkTrust("nagatoro") >= 100 && checkTrust("intern") == 666 && checkTrust("dropout") == 100 && checkTrust("ayeye") == 100 && checkTrust("clubs") == 100 && checkTrust("diamonds") == 100 && checkTrust("hearts") == 100 && checkTrust("spades") == 100){
				    writeSpeech("player", "", "<i>I can have it all. I have a plan to have it all. I will have it all</i>");
				    writeFunction("writeEncounter('allForOne')", "Ace's Special");
                }
                writeFunction("writeEncounter('seriousEndPrompt')", "Final plan");
            }
            else if(checkTrust("serious") == 60){
                if(checkFlag("serious", "inClassB") != true){
                    writeHTML(`
                        t You see seriousF sitting all alone in the class B, perhaps he doesn't have much friends in here.
                        player Hey seriousF!
                        serious playerF.
                        t He fixes his posture, his eyes don't feel as "sharp" and "curious" like before on you.
                        serious You know, I told you we aren't friends.
                        player <i>Right...</i>
                    `);
                    if(checkFlag("serious", "sadist") != true){
                        writeHTML(`
                            serious Uhm...
                            t He scratches his head.
                            serious <i>Thinking of the last time, I can't really say I'm all that bothered by your presence either.</i> So, what're you looking for? 
                            trans seriouschat1; name Chat;
                            trans seriousrrrep; name Take him to the restroom again;
                        `);
                    }
                    addFlag("serious", "inClassB");
                }
                else{
                    if(checkFlag("serious", "sadist") != true){
                        writeHTML(`
                            serious Well, what's it this time? 
                            trans seriouschat1; name Chat;
                            trans seriousrrrep; name Take him to the restroom again;
                        `);
                    }
                    else{
                        writeSpeech("serious", "", "Can you just leave me alone? Really I don't feel like talking to ya.");
                    }
                }
            }
            else if(checkTrust("serious") == 65){
                addFlag("serious", "domComp");
                writeHTML(`
                    serious Well hello again, do ya need anythin'?
                    trans seriouschat1; name Chat;
                    trans seriousrrrep; name Take him to the restroom again;
                `);
            }
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
        case "postQuo2": { //Classroom A
            if(checkTrust("serious") == 75){
                if(checkFlag("serious", "inClassA") != true){
                    passTime();
                    writeHTML(`
                        t You push the door to class A to take a look inside, there are not too many students in there since it's recess and the only two of them still inside appear to be busy having an argument. You decide to stay in the doorway to listen for a while.
                        tomgirl Dude, does it say "guy to talk about your dumb mobile games all day" on my forehead or something? Go talk about it with someone who actually cares.
                        t You see the other boy, seriousF, pull a sharpie out of his pocket and put his other hand on tomgirlF's shoulder.
                        serious <i>Awww, was that the problem? Don't worry bro I'll fix it right away..!</i>
                        t tomgirlF pushes seriousF's hand off his shoulder with a nervous look on his face.
                        tomgirl <i>I-I swear to god if you fucking do it...</i>
                        serious What? Afraid I'll do somethin' to your pretty face? 
                        tomgirl <i>"Afraid I'll do somethin' to your pretty face?"</i> At least mine is somewhat pretty unlike you.
                        serious I mean.. I guess you're right, I've overheard plenty of people talkin' about how they'd actually consider dating you.
                        tomgirl R-Really? Man I knew girls found me cute, hell yeah!
                        serious All of them were boys.
                        t tomgirlF hits the laughing seriousF on the shoulder.
                        serious Pffff that's not even a joke though. There are like four boys who actually admitted they'd date ya an-
                        tomgirl Enough..! I'd rather listening to your ranting about your dumb game rather than my gay lovers, ugh.
                        t seriousF throws the sharpie in his bag to pull a tiny notesheet and a pen out.
                        serious I mean sure! Here I'm writing the name of the game, the server and the guild okay? And don't worry the guild has more than only me and ya, get it?
                        tomgirl I knoow, you wouldn't want that kinda thing with me anyway, I'm not nagatoroF am I?
                        t seriousF drops his pen upon that but manages to catch it before it hits the floor.
                        serious Uhm what the hell are ya- <font size= '-1'>Everyone learned it haven't they?</font>
                        tomgirl Everyone expect nagatoroF himself, they say even the principalF is aware of it.
                        serious Even Madame principalL?
                        t There is a short silence as seriousF lowers his head.
                        serious <i>Ever since I came to this school, I made sure I learned everything important about everyone, and kept all the secrets I've learned as secrets unless it'd benefit the person, so that I could help the people that can't come out themselves.</i>
                        t He looks back up at tomgirlF's face, his voice slower than before.
                        serious <i>Over half of the gays in the school, I've helped them come out of the closet. Over half of the couples that get along better than most married couples, I made them get together by putting love letters on each of their desks, <b>I HAD TO ANALYZE THEIR INDIVIDUAL PERSONALITIES TO COPY THEIR WRITING AND WORDING FOR THAT DO YOU HAVE ANY IDEA HOW HARD THAT IS?!</b> And now look at me...</i>
                        t He sits down on the desk next to himself, hands on his knees.
                        serious <i>I had <b>ONLY ONE</b> secret for myself, like only one little thing that only I and a few more people should've known. Yeah I have a damn crush on nagatoroF, I admit. I'm not ashamed of it either but like.. Even the principal of the damn school had to know it didn't she? Now what do I do if nagatoroF learns it from someone? Or what if he already did?</i>
                        tomgirl Jesus... Take it easy dude, I mean you two are getting along pretty well if you ask me, what if he's like, you know, into you as well?
                        serious Do ya think I wouldn't know that? Do ya think I would wait another second if I had any lead on he could? He doesn't love me and he wouldn't ever, <i>I hate admitting but... I'm totally hopeless, tomgirlF.</i>
                        tomgirl ...Aren't you a little too confident in the stuff you hear from here and there? How do you know he doesn't have anything going on with you?
                        t seriousF wipes his eyes.
                        serious Look, I'm grateful but I've learned my lesson back when I was a lil kid. <i>Baseless hope always brings pain..</i>
                        tomgirl <i>I can't believe I'm doing this...</i>
                        t tomgirlF puts his hand on seriousF's shoulder.
                        tomgirl And what do you think you're doing right now?
                        serious What..?
                        tomgirl Dude you already look in pain, don't you see?
                        serious I can hide it quite good actually.
                        tomgirl That's not the point you dork, think about it. You say baseless hope brings pain, don't you?
                        serious I do, yeah?
                        tomgirl And you are already feeling it.
                        serious Can you get to the point already? I don't need to be reminded that repeatedly.
                        tomgirl What I'm saying is, if you're going to suffer either way just shoot your shot man. Failing is better than not trying at all.
                        serious But..
                        t seriousF raises his head back up.
                        serious You know what, I'll actually try it once I figure how to. Thank ya man.
                        t You can see the faint smile on seriousF's face as he opens his arms.
                        tomgirl ...Right on huh?
                        serious Bring em right on, buddy.
                        tomgirl You never change...
                        t You watch the two of them cuddle and have a laugh.
                        serious Heheh, who would've thought you'd actually be willing to help me out eh?
                        tomgirl Not me, I guess venting about your life is better than ranting about your stupid games though.
                        serious So will ya join?
                        t tomgirlF lets out a deep sigh before nodding.
                        tomgirl Ughh I'll think about it, but we have something more important at hand right now you know.
                        serious Like what?
                        tomgirl Like how you'll ask him out and what happens after that.
                        serious Gee man, you shipping us or what?
                        t seriousF pulls his phone out to check the message you sent him.
                        t <span style="color:yellow; ">A: "Meet me when you guys are done talking, see ya <3" ...Okay?</span>
                        tomgirl I'm only trying to help you out seriousF, you've been a little more uhh <i>agressive</i> than before. Maybe it can help bringing the <i>nicer</i> seriousF back.
                        serious Man, have I really become such an ominous asshole?
                        tomgirl I mean you kinda let all your hate out on people that piss you off, that's .
                        serious <i>Maybe it's about damn time for a change, then...</i>
                        tomgirl It'd be a lot better.
                        serious Right then, time to brainstorm.
                        t You decide to return to your office, seems like they'll keep talking for a while.
                        t ...
                        t seriousF sits down on the couch in your office, swinging his feet.
                        serious Thanks for waiting, I never really get to talk that much with tomgirlF ya know, and like he's actually very cool though...
                        player I understand, don't worry about it.
                        serious Then, what is it you needed from me playerSir?
                        trans seriouschat2; name "Actually I just want to chat";
                        trans seriousgymrep; name Meet him in the gym again;
                        trans serioushomerep; name Go to his home again;
                    `);
                    addFlag("serious", "inClassA");
                }
                else{
                    writeHTML(`
                        t seriousF stretches his arms and pulls his phone out.
                        serious Soo, what'll it be?
                        trans seriouschat2; name Chat;
                        trans seriousgymrep; name Meet him in the gym again;
                        trans serioushomerep; name Go to his home again;
                    `);
                }
            }
            else if(checkTrust("serious") == 80){
                writeHTML(`
                    serious Well? What're we up to this time?
                    trans seriouschat2; name Chat;
                    trans seriousgymrep; name Meet him in the gym again;
                    trans serioushomerep; name Go to his home again;
                `);
                if (checkFlag('serious', 'club')!=true && checkTrust('nagatoro') > 101) {
				    writeFunction("writeEncounter('seriousJoin')", "Take seriousF to nagatoroF's club");
                }
                if (checkFlag('succubus', 'newCorruption')==true && checkTrust('serious') != 666) {
				    writeSpeech("player", "", "<i>Thinking of it, it would be quite unfair to make him a demon actually since he hates being ordered around. But something tells me he'll love the freedom of a life way longer than he could ever imagine... But should I?</i>");
				    writeFunction("writeEncounter('seriouscorrupt')", "Demon time for seriousF");
                }
                if (checkTrust("nagatoro") >= 100 && checkTrust("intern") == 666 && checkTrust("dropout") == 100 && checkTrust("ayeye") == 100 && checkTrust("clubs") == 100 && checkTrust("diamonds") == 100 && checkTrust("hearts") == 100 && checkTrust("spades") == 100){
				    writeSpeech("player", "", "<i>I can have it all. I have a plan to have it all. I will have it all</i>");
				    writeFunction("writeEncounter('allForOne')", "Ace's Special");
                }
                writeFunction("writeEncounter('seriousEndPrompt')", "Final plan");
            }
            else if(checkTrust("serious") == 666){
                writeHTML(`
                    serious My head- No no my whole body... Feel kinda weak? But also stronger I guess? I'll get used to being a demon one day, right?<br>Anyway what's it you wanted?
                    trans seriouschat2; name Chat;
                    trans seriousgymrep; name Meet him in the gym again;
                    trans serioushomerep; name Go to his home again; 
                `);
                if (checkFlag('serious', 'club')!=true && checkTrust('nagatoro') > 101) {
				    writeFunction("writeEncounter('seriousJoin')", "Take seriousF to nagatoroF's club");
                }
                if (checkTrust("nagatoro") >= 100 && checkTrust("intern") == 666 && checkTrust("dropout") == 100 && checkTrust("ayeye") == 100 && checkTrust("clubs") == 100 && checkTrust("diamonds") == 100 && checkTrust("hearts") == 100 && checkTrust("spades") == 100){
				    writeSpeech("player", "", "<i>I can have it all. I have a plan to have it all. I will have it all</i>");
				    writeFunction("writeEncounter('allForOne')", "Ace's Special");
                }
                writeFunction("writeEncounter('seriousEndPrompt')", "Final plan");
            }
            else if(checkTrust("serious") == 60){
                if(checkFlag("serious", "inClassA") != true){
                    writeHTML(`
                        t Inside the classroom A you can see two bois talking to each other, you decide to listen to them from the doorway.
                        tomgirl <i>That doesn't sound right seriousF.</i>
                        serious <i>I don't know man, maybe I just need a break...</i>
                        tomgirl N-Nonsense..! Yeah that's just nonsense.
                        serious Care to explain?
                        tomgirl You know what people say about you?
                        serious Gay?
                        tomgirl I mean yeah but I'm not talking about that one.
                        serious Annoying?
                        tomgirl Not that either ugh...<br>You know what, nevermind do whatever you want.
                        serious tomgirlF... <font size= '-1'>I'm sorry...</font>
                        t seriousF sits down on his desk with his hands on his face, it doesn't look like you'll be able to talk to him today either.
                    `);
                    if(checkFlag("serious", "sadist") != true){
                        writeHTML(`
                            t Or so you thought, until you feel your phone buzzing in your pocket.
                            player <i>"I know youre watching, go to your office, I'll be there." Alright?</i>
                            t ...
                            player You could use the sofa..?
                            serious I won't stay for long, a chair is fine. Now tell me, what do ya want?
                            trans seriouschat1; name Chat;
                            trans seriousrrrep; name Take him to the restroom again;
                        `);
                    }
                    addFlag("serious", "inClassA");
                }
                else{
                    if(checkFlag("serious", "sadist") != true){
                        writeHTML(`
                            serious Well? How may I help ya?
                            trans seriouschat1; name Chat;
                            trans seriousrrrep; name Take him to the restroom again;
                        `);
                    }
                    else{
                        writeText("seriousF isn't alone, neither does he look like he's in the mood for talking to you at all, best not to bother him.");
                    }
                }
            }
            else if(checkTrust("serious") == 65){
                writeHTML(`
                    serious If only I... Nevermind, what do ya need?
                    trans seriouschat1; name Chat;
                    trans seriousrrrep; name Take him to the restroom again;
                `);
            }
			writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
        case "seriouschat1": { 
            if(checkTrust("serious") >= 75){
                writeHTML(`
                    serious Alrighty then, what do you wanna know?
                    trans seriousQB1; name seriousF;
                    trans seriousQB4; name Reason for initiative;
                `);
                if(checkFlag('intern', 'corrupt') == true){
                    writeHTML(`
                        trans seriousQB5; name Friendship with Theo;
                    `);
                }
                writeHTML(`
                    trans seriousQB6; name Goals and plans;
                    trans postQuo1; name "Actually nevermind";
                `);
                //trans seriousQB2; name Ethan;
                    //trans seriousQB3; name Evan;
            }
            else{
                writeHTML(`
                    serious Ya wanna talk? Not much I can tell ya but sure.
                    trans seriousQB1; name seriousF;
                    trans postQuo1; name "Actually nevermind";
                `);
                //trans seriousQB2; name Ethan;
                    //trans seriousQB3; name Evan;
            }
			break;
		}
        case "seriouschat2": { 
            if(checkTrust("serious") >= 75){
                writeHTML(`
                    serious I can't answer every single question ya know, but I'll try.
                `);
                if(checkFlag('serious', 'acceptance') == true){
                    writeHTML(`
                        trans seriousQA4; name Feelings for nagatoroF;
                    `);
                }
                writeHTML(`
                    trans seriousQA5; name Switching classes;
                `);
                if(checkTrust("intern") == 666 || checkTrust("fitboi") == 666 || checkTrust("tomgirl") == 666 || checkTrust("nagatoro") == 666){
                    writeHTML(`
                        trans seriousQA6; name Demons in the school;
                    `);
                }
                writeHTML(`
                    trans seriousQA1; name About ayeyeF;
                    trans seriousQA2; name About diamondsF;
                    trans seriousQA3; name About heartsF;
                    trans postQuo2; name "Actually nevermind";
                `);        
            }
            else{
                writeHTML(`
                    serious Oh are we gonna talk? Too bad I don't have much to tell you, sorry.
                    trans seriousQA1; name About ayeyeF;
                    trans seriousQA2; name About diamondsF;
                    trans seriousQA3; name About heartsF;
                    trans postQuo2; name "Actually nevermind";
                `);
            }
			break;
		}
        case "seriousQB1": { //Aaron
            writeHTML(`
                serious Huh? Me? Ya wanna know 'bout me?
                player Is it a problem for you?
                t He shakes his head.
                serious I mean, not really. I only thought you'd ask about other stuff ya know.
                t He looks thoughtful for a second, then lets out a deep sigh.
                serious Nothin' interesting about me to be honest, but I can answer if you specify what you wanna know.
                player I want an introduction, seriousF.
                serious Ughhh fine!
                t He puts his pen down and starts rocking his chair.
                serious Well for starters the name is seriousF seriousL but I guess you know that much, right? My birth date is fourth of September if you were curious. I uhm.. Don't remember which horoscope thingy that puts me in to be honest, not that it matters really. Uhhmmm I'm actually pretty good at volleyball have I told ya? I tried soccer once but a dumbass sprained my ankle on my first match so I'm not going back to soccer. Also, I love cooking (it's fun when you know what you're doing) and lying down on my couch watching tv or scrolling through my phone.
                player That's good, is that all?
                serious Well, if you couldn't tell I also love playing poker. I'm really good at it too! 
                player Do you gamble..?
                t He starts laughing while shaking his head.
                serious Me? Hell nah man I don't have enough money for that, also I find it stupid. I only play it for fun!
                player I see.
                serious I can actually play any card game though, poker is only my favorite. You could even call my friend group a "full house" deck ya see.
                player Full house was uhh...
                t He pulls out a card deck, turns them around and picks five cards; aces of spades and clubs, and 10's of spades, hearts and diamonds.
                serious For example that's a hand of full house.
                player Isn't it prohibited to bring playing cards to school?
                serious Isn't it prohibited to be boring?
                t He holds the aces with one of his hands and 10's with the other.
                serious You would need one three of a kind and a pair for a full house. I got two bois and three girls in my deck- I mean friend group. So it makes sense, right?
                player <i>I don't think a girl would enjoy being compared to a card.</i>
                t He puts his cards back in his bag.
                serious But I called all of them 10's! Like 10/10 girls. 
                player <i>You smooth bastard.</i>
                serious That's the least you can expect from a poker player!
                trans seriouschat1; name Go Back;
            `);
            break;
        }
        case "seriousQB2": { //Ethan
            writeHTML(`
                trans seriouschat1; name Go Back;
            `);
            break;
        }
        case "seriousQB3": { //Evan
            writeHTML(`
                trans seriouschat1; name Go Back;
            `);
            break;
        }
        case "seriousQB4": { //initiative
            writeHTML(`
                player Well, you know I gave you the initiative you wanted from me.
                t He leans forever on his desk.
                serious For which I'm forever grateful.
                player Right, and what was the reason for that?
                serious I'll be honest, I liked the way we did it before too, but having a say in how I get it is a lot better ya know. I'm not asking for the full control either though, both of us should be able to have fun!
                t He pulls a tiny comb out of his bag to comb his hair back.
                serious That doesn't apply to being a bottom by the way, I know my place. As long as you let me have some control on how I get it, I'm totally okay with getting railed aight?
                player I think you made yourself clear.
                serious Hell yeah I did.
                trans seriouschat1; name Go back;
            `);
            break;
        }
        case "seriousQB5": { //Theo
            writeHTML(`
                player So, about Theo.
                serious What of him?
                player You appear to know each other, but how? I thought he never left the home.
                t He lays back on his chair and pulls his phone out.
                serious Ya know that's a lie right? According to Theo, there are times when internF refuses being an obedient little delivery boi, like when he's tired et cetera. So Theo needs to go out sometimes, with some of their demonic-angelic freaky magic stuff. Apparently he has a hoodie which blocks the other demons to recognize there is an angel around, overcomplicated bullshit if ya ask me.
                player internF said he used a vial for his disguise, which he apparently keeps in his bag.
                serious Oh so their purpose was that? I thought he just liked playing a chemist or something.
                player Anyway, so how have you met Theo?
                serious I was out for grocery shoppin', like about a few months ago, then I saw a boi I never saw before. Not that I care about tourists or something but he looked like he had a problem so I approached him, tourists tend to tip the cute bois ya know.
                t He stares at the ceiling for a while, possibly trying to remember what happened that day.
                serious He didn't give me a tip obviously, neither was he a tourist, it was just Theo. I asked him what was the problem and he said "I'm just trying to find the apples but it appears it's all pears!" He then added that was a joke and shown me a tiny notesheet and said "Well that's the shopping list my boyfriend made me, but tell me how am I supposed to read this thing?" I recognized the handwriting the moment I looked into that note, internF's handwriting is so terrible apparently even his own lover struggled to read it.
                player Ouch... But I managed to read something he wrote recently.
                t He puts his phone back in his pocket.
                serious <i>SMS messages don't count.</i>
                player I don't mean that, I mean literal handwriting.
                serious Then apparently the imp finally began working on it, good for him. Anyway when I recognized it the first thing I said was "Aww come on! internF can't be gettin' more game than me man that's unfair!" And he just burst out laughing. He said "So it's that easy to recognize huh?" And asked me if we were from the same school so I introduced myself. "Ohh you must be the secret spy wannabe seriousF he talked about." He said.
                player Pfft.. "Secret spy wannabe".
                serious It hurts to be called that, but I kept talking with Theo. Apparently he was real interested in the stuff I learned so he asked if I wanted to be his guest for that day. You should've seen internF's face when he saw me enter his house with his boyfriend, it was so funny I almost felt bad for the bastard.
                player And then?
                serious Then the fuckers put a fuckin' curse on me, I have no idea how they work but according to what internF said I would "feel like having a thousand dicks tearing my asshole" if I walked around telling people their secret, apparently internF is a demon and Theo is an angel and that was their secret. Then Theo made me tell him some of the stuff I knew about the school and the world.
                player I mean you just told me their secret, how does it feel to have a thousand dicks inside you?
                serious It doesn't apply as long as the person I'm talkin' with knows what they are, so no I'm still yet to learn how it feels. Hey should I tell tomgirlF about them?
                player No.
                serious 'Kay.
                player Also, why did Theo ask you the stuff about the school? internF is also in the same school right?
                serious internF spends most of his free time in the computer lab since he works there, so he probably doesn't even know as much people from class A as me.
                player Fair enough.
                serious And thus I became a regular of the internL household, I sometimes help cleaning around the home for a price of Theo's special cookies. That boi <i>knows</i> how to bake a good batch of em.
                player Is it worth cleaning their home?
                im images/serious/ha.jpg
                serious Don't look at me like that, they're so good...
                trans seriouschat1; name Go Back;
            `);
            break;
        }
        case "seriousQB6": { //plans
            writeHTML(`
                player Well I was wondering...
                serious Ya wonder too much for a person of your age.
                player <i>For the last time, I'm only like 5 or so years older than you.</i>
                serious Your question please.
                t You clear your throat.
                player What are you planning to do once you get out of here?
                serious <i>"What're you gonna be when you grow up" typa half-assed questions? Really? Should I say somethin' like "I'll be an astronaut!"?</i>
                player ...I only wanted to know more about you though, is it wrong?
                serious Ughh stop trying to make me feel guilty..!
                player C'mon seriousF, it's just a casual question.
                t He puts his head on his desk between his hands.
                serious F-Fine! What do you wanna know about it anyway?
                player Just tell whatever comes to mind, what'll happen to Mr. seriousL once he graduates?
                serious I've never shared my goals before but, guess there's a first to everythin' huh?
                t He raises his head back up.
                serious How to put it into words? Uhmm... I've been into psychology for quite a while by now, though I can't say the same about the class, psychology teacher needs a psychiatrist herself if ya ask me...<br><i>You won't tell her that, right?</i>
                player <i>Tell her what?</i>
                serious Heheh.. Great.
                player So you're gonna be a psychiatrist or what?
                t He shakes his head.
                serious Aye lemme finish, what was I saying again?<br>Oh yeah, so I love psychology okay, and I also love business! Surprising I know but even its teacher is rather cool with me, can ya believe it?
                player Wait, who was in charge of that class again?
                serious I thought you'd have met Mr. camboiL by now actually, haven't ya?
            `);
            if(checkTrust("camboi") == 0){
                writeHTML(`
                    player I don't think I had the honor of meeting them in person yet.
                    serious Huh? That's odd, anyway.
                `);
            }
            else{
                writeHTML(`
                    player Oh yeah I know camboiF, but what do you mean by "he's cool"?
                    serious Jeez what did he do to ya? I mean yea he may not be the most cheerful but he's still doing his job great enough if ya ask me. We even had the chance to have a lil chit chat a few times, though he made me pay for his coffee most of the time.
                    t You laugh.
                    player Don't you think that's a bit of a scam?
                    serious Dude's teaching business, why would he both waste his money and time for me when he is not the one trying to strike a conversation?
                    player <i>Professionalism is boring as hell.</i>
                    serious Anyway!
                `);
            }
            writeHTML(`
                t He puts his hands behind his head with a grin on his face.
                serious What do ya say, *mister counselor? A student who loves psychology and business, and also great at communicating, somewhat, what's the ideal career path for the likes of me?
                player <i>Not presidency, I hope.</i>
                serious If I run for presidency ya better vote for me 'kay?
                t He chuckles.
                serious But nah, don't worry I don't have that in my plans, <i>for now.</i> I'll go for marketing instead!
                player Marketing?
                serious Mhm, an odd dream but think of it, if I can get the brain team I might even end up as one of those "entrepeneurs" they keep talkin' about! Think of the opportunities.
                player And what happens if you can't find a brain team?
                serious I can always work under a corporation, a company, whatever. I'm actually quite hopeful about it.
                t You slowly applaud while nodding your head.
                player Seems you got it all figured out, but I'll ask anyway, <i>do you have a plan B?</i>
                serious <i>I don't know, does being nagatoroF's housewife count?</i>
                player <i>You're insane.</i>
                serious <i>You asked for a plan B and you got a plan B, though it's a more preferable plan than the former...</i>
                t You think back to the time when you went to his home, there is one little thing you forgot to ask.
                player Oh and one last thing, what's up with that German dictionary in your home?
                serious Got a friend from there.
                player Oh alright.
                trans seriouschat1; name Go Back;
            `);
            break;
        }
        case "seriousQA1": { //Valery
            writeHTML(`
                player Could you tell me a little about ayeyeF.
                serious What do you want to know about her?
                player Anything you deem to be useful.
                t He thinks a little with his hand on his mouth.
                serious See, I've known her since we both were toddlers, I mean we grew up together. And as for the useful information, she's only that confident and full of herself with the people she's wary of, get her to like you and she's gonna follow you like a dog.
                player That was actually pretty useful, thanks a lot.
                serious It's nice to be useful, now your next question.
                trans seriouschat2; name Go Back;
            `);
            break;
        }
        case "seriousQA2'": { //Ashley
            writeHTML(`
                player Could you tell me a little about diamondsF?
                serious Not really, the girl's a mystery. I can't really read what's going on in her mind. She's just... Women are weird eh? I mean I like men so of course I'm a little biased but.
                player I understand, could you just tell me what you know of her?
                t He nods.
                serious Ya know neetF? diamondsF used to be just like her before moving in together with ayeyeF, and oh man that gal really rubbed off on her quickly! She's going out more often, manages to talk more than a few sentences, can START a speech rather than waiting for you to talk to her, she even began saying stuff like "heyooooo" recently, <i>man I bet they fuck each other in that home.</i>
                player Well that's good I think?
                serious ayeyeF is a NEGATIVE influence, if diamondsF were a closet pervert it's quite possible she's even more perverted because of her now, fuck her a few times and she'll start LEECHING on your cock, ugh. 
                player That's good to know.
                t He narrows his eyes.
                serious To avoid overdoing it, right?
                player Hehe.
                serious I shouldn't have told ya that, gosh...
                trans seriouschat2; name Go Back;
            `);
            break;
        }
        case "seriousQA3": { //Skye
            writeHTML(`
                player Could you tell me a little about heartsF?
                serious No.
                player Huh? Why?
                t You watch him shake his head as he pulls his phone out.
                serious No one can, not me, not ayeyeF, not her own mother, not even heartsF herself. I'm not meaning to say she has multiple personalities, it's just you can't really see what she's going to do except for a few occasions.
                player Interesting.
                serious She's pretty though, hearin' that from a gay guy boosts her ego so I do it from time to time.
                player How very nice of you, now let's change the subject.
                trans seriouschat2; name Go Back;
            `);
            break;
        }
        case "seriousQA4": { //Ash
            writeHTML(`
                player Well, I wanted to ask you about you and nagatoroF.
                t The name is enough to make him lower his eyes.
                serious W-What of us..?
                player I just wonder what made you feel for him in such a way, if you don't mind answering.
                serious A-Alright... Have I told ya 'bout the time when he saw me on the streets? With my girly clothes on and et cetera.
                player You might have but I can't remember right now, so go on.
                serious Well, when he first called my name out there, my first instinct was trying to run away as quick as possible. But apparently he was right beside me so he just caught me right away, I was embarrassed ya know, was thinking stuff like "and now what do I do if he goes around telling people that I crossdress?" and then.
                t He giggles.
                serious He just said "Waah! It looks really cute on you! Knew you were the type for that." And like, I just froze in my place. I was expecting to be made fun of I guess, just like how it has been for the rest of my life but... He kinda encouraged me instead, like he said "There's no shame in wanting to look good, if anyone made fun of me for crossdressing I would just make fun of them for not being pretty enough for a dress."
                t He looks back up at your face.
                serious Ya know I value my freedom, which rarely gets respected by people let alone getting supported. I always thought having a relationship as a burden but, I felt like he wouldn't be like that. Sometimes you just can't control how you feel, ugh.
                player I see...
                trans seriouschat2; name Go back;
            `);
            break;
        }
        case "seriousQA5": { //reason for switching classes
            writeHTML(`
                player Alright seriousF, I hope you can answer my next question.
                serious May I avoid answering..?
                t You shake your head.
                serious It better be an easy one then.
                t You put your hands together and ask.
                player Tell me, why would anyone skip their classes, just to attend other classes?
                serious N-No reason actually!
                t He giggles.
                serious <font size= '-1'>nagatoroF sometimes lets me sit with him that's all, heheh...</font>
                player Is that all?
                serious Well also most of my friends are from the other class ya know, aside from nagatoroF and my own friend group I mean.
                player Friends like who?
                serious I'd put tomgirlF at the top of that list, I mean we sometimes fight but he's cool ya know, then there is also mejiL who's an old friend of mine, it's nice to finally get along well with him again. I don't know if I should add the yellow headed dummy who sits on the very back but I guess we could be called friends.
                player You certainly do know a lot of bois.
                t He raises his head with a smug grin.
                serious I even know the color of their underwear.
                player <i>I'm not gonna ask how you learned it...</i>
                im images/serious/happy.jpg
                serious It's no big deal duh, I saw them while changing for the PE class that's all.
                player Fair enough.
                trans seriouschat2; name Go Back;
            `);
            break;
        }
        case "seriousQA6": { //Demons in school
            writeHTML(`
                serious Ya know, the increasing number of demons in the school district made me a bit curious.
                player Huh?
                serious Don't act like ya don't know what I'm talking about, <i>it's your work isn't it? This place didn't turn into a demon inn by itself.</i>
                player Uhmmm <i>I don't know what you're talking about.</i>
                serious Oh ya don't? Lemme remind you then.
                t He pulls out a notesheet out of his pocket.
            `);
            if(checkTrust("intern") == 666){
                writeHTML(`
                    serious For starters we got internF, I mean the bastard's been an imp for centuries apparently but yea I know you know the fucker. He's a damn demon and you're responsible of plowing him.
                `);
            }
            if(checkTrust("fitboi") == 666){
                writeHTML(`
                    serious Well there is also fitboiF, I used to hang with the guy every time I went to gym for volleyball team training, but when I went to see him again last time... He was this close to rubbing his cocklette on my damn leg, or at least he made me feel like it, I don't know what the hell you've done to him but he made me reconsider if I'm really into gay sex, hell.
                `);
            }
            if(checkTrust("tomgirl") == 666){
                writeHTML(`
                    serious tomgirlF too, isn't he like, in love with ya? He goes around talking about his "boyfriend" like the proud boiwife he is. I never really expected anyone to crack him down but oh well he smells like a demon too. And when I confronted him about that he couldn't even form a single sentence. Maybe ya wanted the love to live forever? I don't care really but you're weird.
                `);
            }
            if(checkTrust("nagatoro") == 666){
                writeHTML(`
                    serious M-My precious nagatoroF... How could you do that to him? I mean at least he'll live forever but. Could you at least not whore him out to earn some demonic power or shit? I guess it's fine if it's only you who's touching him but.. More than that and my jealousy will ruin me. I sure wish I could be with him for eternity though.
                `);
            }
            if(checkTrust("serious") == 666){
                writeHTML(`
                    serious And let's not forget me! It's still weird though not gonna lie. I never expected or wanted to live forever but it seems like I don't have another choice.
                `);
            }
            writeHTML(`
                player <i>...How do you know they are demons though?</i>
                serious I've spent a lot of time with someone I knew who was demon, and they just have that "aura" you could say, or maybe it's about that weird curse his boyfriend put on me, who knows.
                player Well fine yeah I did it. But can you blame me for wanting a harem of cute bois?
                serious I think I'd do the same but, what else?
                player Huh?
                serious Like I'm asking you, what else are you going to do with an eternal life? And what are they going to do with an eternal life?
                player Uhmmm...
                t He types something on his phone while maintaining eye contact with you.
                serious Yeah having sex is good for a year or two or twenty, or maybe even longer I don't know I've never lived a thousand years before, but what happens when y'all aren't fucking? Won't ya feel bored? Isn't that what makes death a good thing? What can one do with an eternal life? That just sounds so depressing.
                player Can you not ruin something I'm so excited about?
                im images/serious/happy.jpg
                serious Okay!
                player Thank you.
                serious But I wonder, if me and nagatoroF both live forever <font size= '-1'>would he finally be my boifriend one day?</font>
                player I mean it'd be better to spend an eternal life together with someone than alone.
                serious Hell yeah it'd! That's something I can feel excited about too!
                t He starts chuckling.
                serious Yeah now I'm gettin' hyped, he better not reject me for an eternity or I'll cry.
                player You'd have an eternity to forget about it.
                serious Ugh.
                trans seriouschat2; name Go Back;
            `);
            break;
        }
        case "seriousgymrep": {
            if(checkTrust("serious") == 75){
                setTrust('serious', 80);
            }
            if(checkFlag("serious", "gymrep") != true){
                passTime();
                addFlag("serious", "gymrep");
            }
            writeEvent("serious3z");
            writeFunction("changeLocation('playerOffice')", "Finish up");
            break;
        }
        case "serioushomerep": {
            if(checkTrust("serious") == 75){
                setTrust('serious', 80);
            }
            passTime();
            writeEvent("serious4z");
            writeFunction("changeLocation('apartmentOutside')", "Finish up");
            break;
        }
        case "seriousrrrep": {
            if(checkTrust("serious") == 60){
                setTrust('serious', 65);
            }
            if(checkFlag("serious", "rrrep") != true){
                passTime();
                addFlag("serious", "rrrep");
            }
            writeEvent("serious2z");
            writeFunction("changeLocation('playerOffice')", "Finish up");
            break;
        }
        case "seriousJoin": { //62553910880
            writeHTML(`
				player Well seriousF, I was thinking.
                serious Should I be asking you to tell me what you were thinkin? Or ya gonna tell me yourself?
                player You know of nagatoroF's club, right?
                t He nods.
                player Would be weird if you didn't, so you must know that he's looking for members too.
                serious Are you really asking me if I'd like to join, or are you gonna brag about how many bois you've pulled down there.
                player First one.
                t He gets up off where he's sitting with his bag.
                serious Well then, ask and you shall receive, let's go. 
                player Wait, so it was that easy?
                serious I'll get to join a club with nagatoroF in it, I believe I benefit from this deal as much as you.
                player What a simp.
                serious L-Leave me alone..!
                t ...
                t The two of you are standing in front of the door to club room, you slowly reach to knock on the door.
                sp nagatoro; im images/none.png; HIDDENWhat's the password?
                serious Ahem, <i>Six two five five three nine one zero eight eight zero.</i>
                t The door opens to reveal a giggling nagatoroF.
                nagatoro Pffft...<br>Who else but seriousF right? However you've used an invalid password heheh...
                serious Well it got the door open didn't it? Seems valid to me.
                nagatoro I can still shut the door back up you know.
                t seriousF crosses his arms.
                serious Aww, but it'd be a shame to lose a new member for your club am I wrong?
                nagatoro Well it was only a matter of time anyway.
                serious W-What're ya talking about?
                nagatoro Heheh~ I'm talking about when I saw you outside, in your dresses. <i>And I knew you'd come around sooner or later ever since the day me and playerF started this club.</i>
                t Both of you step inside the clubroom, seriousF is looking around with his eyes wide open.
                serious <i>Oh my oh my~ Look at all the stuff here..</i>
                t seriousF nods.
                serious Well, you were right, I've been considering for a while actually.
                nagatoro Then seriousF... Welcome aboard!
                t seriousF tilts his head to your side.
                serious Ya said *he helped you start the club, have you ever considered making em look pretty like us?
                nagatoro ...I don't think I have enough makeup in here for that task.
                t You can see both of them snickering at you, looks like they get along pretty well already.
                player Hey! No teaming up on me guys, I don't need any more bullies in my life.
                serious Pfft, no fun.
                nagatoro Yeah, I don't have a dress fit for your size anyway, perv. Eheheh...<br>Ahem, alright then seriousF, what do you think you'd wanna try? Anything here catch your eye?
                t <span style="color:yellow; ">A: Well YOU do catch my eye, but I don't think I wanna wear you, ugh...</span>
                serious Well, I think you should give me a dress you'd like to see me in.
                nagatoro <i>Ohhhh I just know the right thing, come with me..!</i>
                serious Right behind ya!
                t <span style="color:cyan; ">P: What kind of friends are they anyway?</span>
			`);
			addFlag("serious", "club");
			writeFunction("loadEncounter('nagatoro', 'clubQuo')", "Continue");
            break;
        }
        case "seriousClub": {
			writeEvent(name);
			passTime();
			unencounter("nagatoro");
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "seriouscorrupt": {
            writeHTML(`
                t You've got a bad feeling about this, you don't really have a reason not to corrupt him but the feeling is still there.
                im images/serious/idle.jpg
                serious Gee~ I don't like the way you're lookin' at me, you good?
                player Huh? Oh yeah I'm good thanks.
                serious This is awkward, I don't like this-
                t Seems like you have a decision to make now, this or that way you have to stop with the awkward staring.
                trans seriouscorruption; name Corrupt seriousF;
				trans cancel; name Nevermind; 
            `);
            break;
        }
        case "seriouscorruption": {
            passTime();
            passTime();
            writeEvent("seriousCorruption");
            setTrust('serious', 666);
            addFlag("serious", "corrupt");
            writeFunction("changeLocation('westHallway')", "Finish up");
            break;
        }
        case "seriousHotelGood": {
			writeHTML(`
                define black = sp Black Haired Succubus; im images/demon/dark.jpg;
                t You step inside seriousF's room to find...<br>No one inside?
                black Oops, seems like he's outside <i>again...</i> Damnit!
                player It's finee, it's a shame he isn't around though, I was eager to catch up with him.
                t He nods slowly.
                black I know I know, but yeah we can't stop him from wandering in and out since he still somehow fills his quota.
                t You shake your head.
                player Well then, how about you fill me in about him instead?
                black About seriousF? I've talked with him only a few times while you were <i>off</i> but let's see how much I can tell.
                t He pulls out a few notes from his back.
                black So, apparently he's been spending a lot of time in the hotel library (I bet you didn't know it but we have a small library in the basement! Most of them are demonF's self published fantasy books though.) He's also making friends(?) in and out of the hotel, and still going to school everyday even though he doesn't have to. I don't understand why, but oh well do I give a fuck about it.
                player Anything else?
			`);
            if(checkTrust("tomgirl") == 666){
				writeHTML(`
					black Looks like he has made friends from your harem too, unless they were friends before that? Either way him and tomgirlF seem to be getting along pretty well. They even got themselves a pair of instruments to learn, since they don't make a lot of noise we don't bother them about it.
                    player Instruments?
                    t He nods.
                    black He said something like "If we're gonna live forever at least let us have other entertainments than jumping on a damn dick." <i>You won't see me complaining, means more dick for me.</i>
                    t He flips the page.
				`);
			}
            if(checkTrust("nagatoro") == 666){
				writeHTML(`
					black Oh right... This one.
                    player What's it?
                    black Ugh... Him and another boi from your harem, nagatoroF.
                    player Oh yeah I kinda remember something going on between the two of them.
                    t He laughs with an annoyed tone in his voice.
                    black Just "something"? He's literally obsessed with the boi I'm telling you. I have no idea if they're actually "dating" but one thing's for sure, <i>they spend a hell lot of time together, inside and outside.</i>
                    player Sounds like they would.
                    black I don't understand about "love" all that much to be honest, so I don't know if they're just friends or not. Actually no one can tell and I <i>hate</i> it, there are rumors all around and no one knows which one is real. That shouldn't even be our concern that's just senseless distractions.
                    player Rumors? 
                    t He sighs.
                    black Like "Are they childhood friends that somehow got to meet again in here? Are they just friends that are really close? Are they lovers? Are they just two silly dudes hanging out? What do they do in their rooms together?" People just don't shut up about them as if there's nothing else to talk about.
                    t This time it's your turn to laugh.
                    player It was like that back at the school too, don't worry.
                    black I couldn't care less about what's going on between the two of them, as long as it doesn't reduce their performance, actually I'd even root for them if it were to make them work better. Meh, whatever.
                    t He puts his notes down.
				`);
			}
            writeHTML(`
				black I think that's all.
                player You told me more than enough, don't worry.
                black Great, let's continue the tour then?
                t You feel your phone vibrate in your pocket, you pull it out to check the message you just received.
                player <i>"You finally up? I thought you died or somethin' ya bitch." So he knows huh..?</i>
                black <i>I think you should show him how well you've rested once he comes back.</i>
                player <i>I like the sound of that.</i>
            `);
			writeFunction("changeLocation(data.player.location)", "Continue Wandering");
            break;
		}
        case "seriousEndPrompt": { 
            writeHTML(`
                player Say, seriousF, what was your future plan again?
                serious Well it changes every once in a while, but I am into business, why'd you ask?
                player I was thinking if we could take things one step further, you get what I mean?
                t He shakes his head.
                serious You already know I'm into another boy, I don't understand what you're trying to achieve.
                player Nothing of that sort, actually I would love to see you as my assistant.
                serious Your assistant..? Hmmmm... don'tcha think mejiL's more fit for that position?
                t You shrug, after all you have no idea what made him think that.
                player You know what I'm getting at, you already have a good amount of influence AND popularity among the students, so you would make a good assistant. Hell, maybe even a secretary if I get there.
                serious And what will I earn out of it?
                player Status, and probably a living wage if I can convince principalF.
                t He looks at your pendant for a moment.
                serious Will ya teach me how to hypnotize too?
                player I might consider.
                serious Well... now I like the sound of that. Okay then "boss", the class is about to begin so... is there anythin' left you wanted to tell me?
                player Meet me in the clubroom after last class, I'll see if I can get you anything new to try on.
                t He rolls his eyes and hits you on the shoulder jokingly.
                serious Of course you gotta take advantage of your subordinate, abuse of power must be a fun routine.
                player You don't have to come if you don't wanna, I always tell you that.
                serious I think I'll be there, now bye!
                player *sigh* Bye, seriousF.
                trans seriousEnd; name Later;
            `);
            break;
        }
        case "seriousEnd": {
            passTime();
			writeEvent(name);
            writeFunction("writeEncounter('Finale')", "Some time later");
			break;
		}
        case "Finale": { 
            writeHTML(`
                serious Yo boss! We finally got some free time right?
                t Having seriousF as your assistant has been an... experience, to say the least.
                player I guess so, unless you're gonna bring me more students, <i>again</i>.
                serious No no! Not this time! We deserve to have a little rest too.
                t He says as he lets himself drop onto the couch in your "new" office.
                serious So far we're doing better than we had planned, right? I don't know how much the title "head counselor of the school" means to you, but well..
                t He giggles as he leans forward.
                serious I'm proud of you, ya know.
                t It was his idea to make you the "head counselor" even though you were the only one, after making a plan together you two were capable of hypnotizing enough PTSA members to convince principalF into hiring two extra counselors, so they can do the actual counseling job while you focus on your favorite part.
                player Of course you are proud, me being the "head counselor" makes you an actual secretary, and both of us get a better paycheck.
                serious And hey! Let's not forget the fact we are actually winning over in the school! You said you're almost ready to bang principalF didn'tcha? 
                player Well if I were to work on my own I wouldn't have made the delay of getting a silly promotion like this, I would head for her spot right away.
                t You might say that, but you've already used your new position to your advantage more times than you can remember. And to your surprise, he's also using the hypnotism skills he learned from you to top some of the boys you allow him to. Usually allowing you to join in for a threesome too.
                serious And that's a wrong approach! Let her be your puppet principal so you get to control the school while SHE does the paperwork! After all you'd have even more work if you were the principal, and less time to have your dick sucked.
                player Well I have all the time right now and I'm still not getting it sucked, so how is it any better than that?
                t But all in all, even though you've expanded your reach for students thanks to him and his group.
                serious Pfft... Right away, *sir~
                t ...He's still the one who serves you the most.
            `);
            writeFunction("loadEncounter('system', 'credits')", "The End");
            break;
        }
        default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}
    
var eventArray = [
	{index: "serious1a", name: "Firsthand experience"},
    {index: "serious1b", name: "Getting used to it"},
    {index: "serious2a", name: "Locked from inside"},
    //{index: "serious2x", name: ""}, //initative repeat [CANCELED]
    {index: "serious2z", name: "Keep the doors closed"}, //fulldom repeat
    {index: "serious3a", name: "Winning hand"},
    {index: "serious3b", name: "Losing hand"}, //fulldom prompt
    {index: "serious3ba", name: "All in"}, //fulldom handjob
    {index: "serious3bb", name: "No wager"}, //fulldom blueball
    {index: "serious3z", name: "Double up"}, //(initiative only) repeat
    {index: "serious4a", name: "High hospitality"},
    {index: "serious4b", name: "You're not welcome"}, //fulldom route
    {index: "serious4z", name: "Going Full house"}, //(initiative only) repeat
    {index: "seriousCorruption", name: "Hell's VIP"},
    {index: "seriousClub", name: "The night's winner"},
    {index: "seriousEnd", name: "Conditional love"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "serious1a": {
			writeHTML(`
                t Both of you take your usual seats, he looks to be more relax than before with the way he makes himself at home, this might be your time to get at it.
                player Heh, you didn't ask me anything this time, you'd normally make a comment about me every time you're here.
                serious Haven't I? Well I might start asking by what happened last time.
                t You lay your arms on your desk, hands on each other as you maintain eye contact.
                player <i>How about you tell me what you think I did to you instead? Let me hear what's going on in your mind.</i>
                t It's clear the instructions from the last time are still effective, as he starts talking his mind without hesitation.
                serious <i>Something lewd..? I was expecting you'd do something lewd to me, I know you'd do it, but why do I not remember..? Do you also erase my memory? What the he</i><b>LL IS GOING ON?!</b>
                t Face red as a tomato, he tries to look away, apparently he can still overcome through your instructions but oh well, no one told you you'd have full control of his mind with a single trance, on the other hand you're sure that's not a problem at all.
                serious <i>S-So that's what huh?</i> So you make the eavesdropper tell you anything you ask him huh? You've gotta be fucking shitting me, really would rather being only lewded instea-AAH MAN COME ON I'M TRYING TO SPEAK..!
                t Though all you did was putting your hand on his shoulder, he freaks out as if it was scary at all, at most it was just an unexpected touch.
                player Oh so you say you'd rather be lewded?
                serious N-No Not that way ughhh...<br><font size= '-1'>Maybe..?</font>
                player Tell you what, you can just leave my room right now if you want to, really.
                t He looks up at your face not believing what you said, but the moment he gets up and takes a step towards the door, he freezes in place.
                serious I-I can't..? What did you do to me..?
                t His legs get as shaky as his voice as you're still holding your hand on his shoulder.
                serious <b>WHAT DID YOU DO TO ME?! WHY CAN'T I JUST WALK OUT OF THE FUCKING DOOR??</b>
                player Oh well that is the funny part, <i>I didn't tell you anything about it at all, it's entirely your on your own volution and you're trying to blame it on me.</i>
                t His eyes open wider, as you tighten your grip on his shoulder, it's not like he's going anywhere but you've to make sure he doesn't collapse on your floor from all that shakiness.
                serious No... W-What's next..? Are you going to just pull your dick out a-AHND...
                im images/serious/hand1.jpg
                t At first he tries to hold his hand away from it(though being visibly challenged while doing so), though his resistance starts cracking the moment you rotate your waist a little to rub your shaft on his hand yourself.
                serious H-Hah? Why..?
                player Why what? <i>Spit it out seriousF.</i>
                t Even though it's only one finger for now, he's running it along your shaft steadily, looking down at his pants you can see he doesn't have much resistance left in himself either.
                serious <i>Why, just why..? I can't stop myself? I didn't ask for it. My legs won't listen to me, my hand won't listen to me, I'm stuck in here.</i><br><i><b>I need help to get out of this but...</b></i>
                player But..? Just say it already.
                t His breathing gets louder and his hands get shakier, you can see a few tears of embarrassment in his eyes but even that doesn't stop him from just getting faster.<br> Finally he takes one deep breath, closes his eyes and...
                im images/serious/hand2.jpg
                serious <b>BUT HELP IS THE LAST THING I WANT NOW GODDAMNIT..!</b><br><i>I can't stop, and I don't want to stop...</i>
                t With that he finally starts using all of his fingers, you realized how soft his hands were from the first time you've met him but the way he uses them is something else, even with all that remnant resistance preventing him from fully enjoying it.
                player <i>See? It's easier when you let yourself be.</i>
                t He's not even under your control at this point, seeing as he ignores what you just said (and the more apparent movement inside his pants) he's completely focused in his job as he's squeezing your shaft between his fingers and moving gently.
                serious I knew it, I knew you'd do this, I knew <i>I kneeeew...</i>
                player Then why did you do nothing about it?
                t His hands also get shakier as he starts struggling to keep his pace stable.
                serious I-I <i>hoped</i> iit..! <i>I hoped you'd do it to me too but not this waaaay.</i>
                t He opens his mouth to continue, though he can't do more than stuttering when he notices the difference.
                im images/serious/hand3.jpg
                serious D-Did you..?
                player It's only precum, but I guess.
                t He keeps slowly rubbing his fingers on the head, getting his fingers wet with what he "earned".
                serious Heh... Heheh heheheheh.<br>Did I cause this? Me? I did? seriousF? <i>Aaa what the fuck is wrong with meee..?</i>
                im images/serious/hand4.jpg
                t You give him a pat on the shoulder.
                player Since when it's wrong to have a little fun yourself?
                serious Eeeeeh-
                t You put your shaft back in your pants as his eyes move quickly between your bulge and your face.
                serious Wait wait wait why're you putting it back in whaaaaa?
                player Huh? Thought you didn't want it? I mean you were yelling at me all this time.
                serious Gghhh you're a monsteeehr..!
                t From the way he's rubbing his legs against each other it's not that hard to understand you've literally left him on the edge.
                player And now, back to your class, I'll see you later seriousF.
                serious A-Alright, but are you sure you don't want me to make you cum?
                player <i>I'll see you later, seriousF.</i>
                t He waddles out of the door, hands in his pockets and legs pushed against each other, you've got a feeling like he'll try rushing to home rather than his class, and probably can't even make it home with clean pants.
			`);
			break;
		}
        case "serious1b" :{
            writeHTML(`
                t You hear a gentle knocking on your door after only five minutes of wait.
                player Come in.
                t The doorknob turns once and opens the door slowly, revealing one defeated seriousF behind it.
                player Oh hey seriousF, <i>please take a seat.</i>
                serious I hate this...
                t Despite his protests, he sits down on the couch as asked, hands firmly placed on his lap.
                serious So what today? You're gonna rail me on the couch or what?
                player I didn't have an idea actually.
                serious Oh..?
                t You get to his side and gently make him lay down, he looks annoyed about it but he really doesn't have the willpower to resist either.
                serious <i>Ughhh should've never opened my mouth... just hurry up so I can go, I don't wanna lay down here all da</i>-AYY!
                im images/serious/laid1.jpg
                serious M-Man you didn't have to snap the damn pants off me you know? I could take them off myself...
                t He might be saying that, but that sudden move was enough to get him hard, on the other hand you didn't take his pants off to watch his dick after all.
                player Well that doesn't seem too possible right now, so how about I join you instead?
                serious What what wait what? What's that supposed to me-<br>Oh yeah, your dick.
                im images/serious/laid2.jpg
                t He starts wriggling to try and get his dick touch yours when you put it out, he might not be happy about letting you win but he can't risk losing you at the moment.
                serious <i>C-Could you at least stop holding it on m-mine? I know yours is bigger, stop making me keep comparing them.</i>
                player I can, but that means I'd have to put it somewhere else.
                serious <i>Uh-oh...</i>
                im images/serious/laid3.jpg
                serious <i>GGUUUUHHHHH FUUUHK~</i>
                t His eyes roll back the moment you put it in, though you're unsure if it's from pleasure or pain.
                serious <i>I-I know what you're thinking...</i><br><b>BOTH! IT'S BOTH...!</b>
                t His whole body moves with each of your thrusts, as if being tight himself wasn't enough he keeps squeezing it between his cheeks tighter and tighter each time.
                im images/serious/laid4.jpg
                serious <i>I'm not youh tooooy, won't ever be..! Don't try it.</i>
                t You give him a deeper thrust, making him squeak under you.
                player And why is that? Like what if I try it anyway?
                serious <i>'CAUSE IF YOU TRY IT YOU'LL FUCKIN DO IT! I AM NOT STRONG ENOUGH TO RESIST FOREVEEER..!</i>
                t You give him another thrust, going as deep as the last one, making his legs go tense as he breathes out between his teeth.
                serious <i>Y-You'll break meee..! I-I swear I'll keep doing this with you, just pleaaase let me decide it...</i>
                player I can consider that, but you'll have to make up for it, if I lose a toy for it <i>you better make it worth.</i>
                im images/serious/laid5.jpg
                serious <i>It'll be worth, it'll be worth it all, I swear!</i>
                t Given the circumstances, you may actually let him free, it's not like he's going to be able to feel any less horny at this point, on the other hand you don't have a reason to let him decide when to fuck.
                serious <i>Ghhhhhh I'm... Aah~</i>
                t You feel like you should think about it later, since this freedom obsessed brat has been milking your dick inside his ass for a while now both of you're getting closer and closer to the edge.
                im images/serious/laid6.jpg
                serious <i>S-So clooooooohhss~</i>
                player Mmh so am I...<br><i>Tell me, you'd love it if I let it out inside you right?
                serious Yeeeehs...
                t You slow down and start pushing deeper and harder instead of faster.
                player Being filled to the brim with the load you earned, feeling it flow inside you, don't you just love the thought?
                serious <i>Yeeeeehs...</i>
                t You slow down even more as his dick starts throbbing even harder, he lets out a tiny moan with your every thrust.
                player <i>And then having it pulled out of you, so you could feel it slowly flow out as you're still shaking in pleasure, right?</i> 
                serious <b>YEHS YEHS YEEEEEHS..!</b>
                t His dick starts throbbing even harder, his eyes are focused right at you but you're pretty sure he's barely even looking at anything.
                serious <b><i>CUH-MIIIIING..!</i></b>
                im images/serious/laid7.jpg
                t Just as you reach the edge you manage to pull your dick out and let your jizz all over his sweater and face, and even though he's totally dumbfounded by the unexpected ending he can't hold his load inside another moment either, spurting it all out with short and quick moans.
                serious F-Fuck why..?
                player So that you can think of how it'd be when you're back home, one thought to waste several loads on.
                im images/serious/laid8.jpg
                serious <i>You better be joking...</i>
                t You pretend to think about it.
                player And why's that?
                serious Ughh, just give me some tissues then, I've to clean myself.
                t His dick pumps another tiny rope of jizz the moment you put your dick back inside.
                im images/serious/laid9.jpg
                player <i>Oh but I didn't say I wasn't kidding have I?</i>
                serious <i>Grrrgh w-what?</i>
                t You start thrusting into the messed boi under you once again, even harder than the last time.
                player <i>It means that you'll have to stay here for a while, seriousF...</i>
                serious <i>I give up, just be gentle pleaahse...</i>
                t It's fine by you, after all you've to save some of your energy for the next few hours.
            `);
			break;
        }
        case "serious2a": {
			writeHTML(`
                serious ...It seems it could be that bad, yeah.
                im images/serious/rr2.jpg
                serious Hey playerF, do you sometimes just sit down and think like "hmm, I wonder how I can make seriousF even more uncomfortable while fucking him"? Like why in a toilet stall of all places? 
                player I told you you could leave you know.
                t He shakes the leg you're holding though it doesn't really feel like he's trying to break free, rather just trying to show that he's annoyed.
                serious Easier said than done, at least pick somewhere more comfortable next time.. My leg's aching already.
                player I think, as the dominant side, that I get to choose where we do this, am I wrong?
                im images/serious/rr1.jpg
                serious <i>I think, as the submissive side, that you should shut your fucking mouth before ya blabber more of your nonsense.</i><br>CMON HOW'S THAT EVEN APPEALING FOR YOU WHY CAN'T WE JUST USE A BED FOR A CHANGE???
                player Maybe later, but for now-
                im images/serious/rr3.jpg
                serious Grrk- Uhnfaaair..
                t You knew that was the only way of stopping him from complaining, at least reducing his capability of doing so.
                player What's so unfair seriousF? <i>Do you think I didn't notice the only reason you were complaining was to make me make you shut up this way?</i>
                t Only one thrust seems to be enough to get him hard this time, looks like someone's enjoying this at least as much as you do.
                serious Kh-Can you simplify it cuz I didn't understand a word-
                player Huff, what I mean is that <i>I know you were being a bitch just so I could shut you up this way.</i>
                t He tries shaking his leg again but almost loses his balance when you get thrusting even harder.
                serious Guhhh- <i>J-just keep going, pleaaase...</i>
                player <i>With pleasure.</i>
                t You pull yourself a little back and thrust rougher inside him, even though this means sacrificing a bit of your speed, it lets you get deeper inside his warm hole tightening around your shaft.
                im images/serious/rr5.jpg
                serious <b><i>GH-AAAWD..!</i></b>
                player H-Hell this is good~
                t Despite his protests earlier he starts leaking already, though you're not really in a position to make fun of him since he also moves his hips to take you in even deeper, and making it even harder to pull back.
                player Y-You really know how to use your hips huh?
                serious It's none of your concern, you should only...
                t He squeezes your hand between his thighs and calves, moving his hips faster.
                serious ...Owwh just focus on what you're doing alright?
                player Mhm, <i>that'll be the best part.</i>
                t No more talking, you get a better grip on his leg before you pick the pace to a new level, and let the only voice being his little whimpers.
                im images/serious/rr4.jpg
                serious <i>This is shtupiiid, am already gettin' chloooose-</i>
                t The same could be said about you, not only he has a good body, he also knows how to use it for getting the most of you.
                player Don't worry, <i>it'll be over right NOW..!</i>
                t You give him one last, deep thrust right after finishing your sentence, which sends both of you beyond the edge.
                im images/serious/rr6.jpg
                serious <i>Shooo mutch, gaahh~</i>
                player Heh.. Heheheh~
                serious <font size= '-1'>You're drained, aren't you?</font>
                t You nod and thrust inside once more, making his legs get shaky.
                im images/serious/rr7.jpg
                serious I kahn't handle to go foh anodder anyway, oohhh~
                t You finally let go of his leg, he leans on the door to catch his breath.
                serious My god, <i>I'll feel this tomorrow morning, ughh...</i>
                player Don't worry, your legs aren't the only ones that are numb.
                t He turns his head around to look you in the eyes while pulling his pants back up.
                serious ...Maybe try not to fuck me while standing next time?? I hated how uncomfortable this was.
                player Mhm, and that's why you enjoyed it so much huh?
                t He opens the door when he's done with dressing, looking at you with his "annoyed as usual" face.
                serious Please shut up and be grateful for once.
                player Alright alright neighbor, need help walking home?
                serious ...Fine.
			`);
			break;
		}
        case "serious2x": { //Nothing to see here, get lost
			writeHTML(`
                serious I have no idea how you triggered this event but this shouldn't have happened, this is totally wrong.
                player This is a bug message, and you've just encountered a big one, this is really silly and should be reported unless you did it on purpose.
                serious Like cmon I have initiative why would I wanna get fucked in a restroom AGAIN? No thanks.
			`);
			break;
		}
        case "serious2z": {
			writeHTML(`
                serious Restroom again? Out of all places?
                player I mean everywhere else is literally busy right now.
                serious Why not your office?
                player Janitors.
                t He sighs.
                serious <i>Lead the way...</i>
                t ...
                serious This is just ridiculous.
                im images/serious/rr1.jpg
                player No comments.
                im images/serious/rr2.jpg
                serious Good, I don't wanna hear you talkin' and talkin', just get at it already.
                player If you say so.
                t You thrust your hips forward, pushing your length inside him.
                im images/serious/rr3.jpg
                serious <i>Guhh~ It's too deep..!</i>
                player You can take it?
                serious J-Just do it.
                t Well he asked for it, you start thrusting repeatedly, slowly getting rougher and rougher to give him a good pounding.
                im images/serious/rr5.jpg
                serious <i>Haaa~</i>
                player Looks like you're having fun this time huh?
                serious Y-Yeah, it feels goooood..!
                player Greaaat..
                t His moans get cut by a gasp.
                im images/serious/rr4.jpg
                serious <i>Y-Ya hear that?</i>
                player Hear what?
                t Both of you go silent for a moment as the door opens with a creaking sound, looks like the poor locks couldn't stand all that pressure.
                im images/serious/rr9.jpg
                serious <i>...That.</i>
                player <i>Uh oh.</i>
                serious Heh, not a problem, let me just shut it back.
                t He shuts the door just for it to slowly open again.
                serious <i>Fuck.</i>
                player Looks like the locks are broken, seriousF.
                serious So what are we supposed to- W-Wait..!
                im images/serious/rr8.jpg
                t He yelps when you pull him back and keep thrusting your shaft in his boihole.
                serious N-No no no no..! What if someone walks in?!
                player <i>We better finish quick then, less talking more uhh, fucking?</i>
                serious <i>This is baaaaaad.</i>
                t He tries to reach for the door but no luck, you pulling him down doesn't help much with it either...
                im images/serious/rr11.jpg
                serious <i>Just let me..!</i>
                player It won't work, why try shutting a door when its locks are broken?
                serious I... You..? Gah..!
                t You keep getting rougher and rougher, his raised arm starts shaking as he gets closer to his orgasm.
                im images/serious/rr10.jpg
                serious <i>Oh my gawdd~ This is too much foh meee..!</i>
                player <i>Just a little more, it'll be worth it.</i>
                serious <b>IT BETTER!</b>
                t You can feel his hole tighten around you, his arm is more swinging than shaking at this point.
                serious Gonna- Gonna..!
                player <i>I'm gonna cum..!</i>
                t A few seconds and both of you reach your climax, he starts spilling his jizz all over the floor. 
                im images/serious/rr12.jpg
                serious <i>Gaaahhh~</i>
                t Despite all his protests, he ends up cumming way more than you do.
                serious <i>N-Not... Fair..!</i>
                im images/serious/rr13.jpg
                player Looks like you'll need a tissue, good thing we have plenty here.
                serious <i>Was I good..?</i>
                player <i>You really were.</i>
                t He pulls the door to grab a toilet paper and wipe all the semen off himself.
                serious Thanks... I-I think we should get going.
                player Right, I'll see you later.
                serious I hope not in the restrooms next time..
            `);
			break;
		}
        case "serious3a": {
			writeHTML(`
                t ...
                t <span style="color:yellow; ">A: And now what's that supposed to be? I'm all sweat and like, ughhh tryna strip me naked with ya eyes or what?</span>
                t There he is, sitting in front of you, sweaty from the day's training, and probably anxious from the way you're staring at him.
                serious Uhm...
                im images/serious/gym1.jpg
                serious A-Ay, I can see you eyeing me ya know right? Why staring that hard huh..?
                player Come on, you can figure it out yourself can't you?
                t <span style="color:yellow; ">A: 'Course I can you moron, I just want you to say it yourself.</span>
                t <span style="color:cyan; ">P: I might have a thing for bois in tracksuits, or maybe it's about him spreading his legs like that?</span>
                t Either way, there is a boi sitting in front of you with his legs spreaded in a tempting way, gotta make use of that right?
                player Maybe don't present me such a scene if you don't want me staring huh?.
                serious Thought we agreed on doing this somewhere comfortable this time, why here and not the goddamn home?
                player Oh but what if I keep my promise and not do what you're thinking of? Let's just take your clothes off for now shall we?
                t He looks rather confused but that doesn't stop him from letting you help take his clothes off this time.
                t <span style="color:yellow; ">A: What're you thinking of this time you loose devil..?</span>
                im images/serious/gym2.jpg
                player Nice undies you got here really, but why'd you wear that kinda stuff to school?
                serious Ya say I come to school without anything under my pants? Weirdo.
                player seriousF...
                serious Okay okay, I just like the way they feel on me okay? They weren't meant to be seen by some curious counselor.
                t He throws his head back slowly to get rid of his hair on his face.
                player Like the way they feel on you you say?
                serious Anything wrong with it?
                player Not at all, it's just I wonder if I could give you something else you could enjoy touching your body.
                serious *Sir, if you're talking about your dick, that's a horrible joke lemme tell ya.
                player Awww, but I was thinking of something else...
                t <span style="color:yellow; ">A: I know I'll regret asking, but...</span>
                serious Like what?
                im images/serious/gym3.jpg
                player Would this answer your question?
                serious N-Nice and cleaAHR~
                t <span style="color:yellow; ">A: No no no no don't do me like that you'll make me ruin my undies. O-Okay seriousF think straight, breathe in, breathe out this shouldn't feel so GOOD HELL..!</span>
                t <span style="color:cyan; ">P: So sensitive on your dicklet aren't you seriousF? Didn't expect it to be otherwise anyway.</span>
                player Enjoying yourself there aren't you? How's it feel?
                serious S-Stupid! This is really really stupiid!
                player How so?
                serious Ugh do I really have to explain? Your hands are bigger and tougher than mines, how do they feel bett-<i>URK..!</i>
                t "Urk" was not the reaction you expected when all you did was gently rubbing a fingertip on the head of his sensitive cocklette, though apparently it was enough to make him start leaking precum.
                player What's it seriousF? Can't even complain huh?
                t <span style="color:yellow; ">A:I'm fiine, I'm fine, unless they do what I'm thinking of I'm aaaall fine.</span>
                serious Heheheheheheheheh... I've no reason to complain do I? After all you allowed me to have it my way. <i>And god this shit feels way better than it shooould haaah~
                t You pull your hand out as he's still watching, slide his top up a little to expose his chests and lick your fingers to get them wet before putting it back in his panties.
                t <span style="color:yellow; ">A: Okay I'm fucked, I'm dead now and the hungry counselor will be my killer, name: seriousF seriousL, cause of death: cumming way too much, what a shame really! I was so young and so pretty and so possibly nagatoroF's future spouse to die at this age, poor poor seriousF, he'd live long and ha-AHPY CAN YOU NOT INTERRUPT MY IMAGINARY RANTING??</span>
                im images/serious/gym4.jpg
                t <span style="color:yellow; ">A: Heheheheeh WHAT THE HELL HOW WHY WHAT?! <font size= '-1'>I can't even think straight I can't think I can't think help help helpp</font></span>
                t Your tongue on his chests combined with your wet hand on his dick is enough to make the boi lose his composure, and even his balance as his arms supporting his body fail for a second and make him fall back on his elbows until he raises himself back up.
                serious Grrrrruhhhhhhhh... <i>Shtooooop you're gonna burn my thamn nerves my poor breains..</i>
                player Okay sure thing, I'm not a fan of touching your dick anyway.
                t <span style="color:cyan; ">P: I'm probably an asshole for this, but at least I'm gonna give him a good time afterwards right?</span>
                t Thinking that, you pull your hand out again and your head away, leaving him confused.
                serious W-wha? No no I didn't mean it like that don't stop now pleasepleasepleaseplease.
                t <span style="color:yellow; ">A: FUCK YOU FUCK YOU FUCK YOU just keep going please don't leave me blueballed I need this I really really neeed this I can't think of anything else cmoon.</span>
                t It's really hard to leave him like that, as he's literally thrusting on the air and begging between his teeth, not that you were planning to end it there though.
                player Okay okay, let's get you what you deserve huh?
                serious <i>Yesss just please go on please I won't tell you to stop this timeeee.</i>
                im images/serious/gym5.jpg
                t You put your hand back in his panties, and as you give him an even more sensual handjob you start sucking on his chests as well, making the sudden pleasure hit him like a train.
                serious <b><i>HOAAH</i> <span style="color:red; ">FFFFFFFF</span> GUHHHHH WHHHHAAAAAH?!?!?</b>
                t <span style="color:yellow; ">A: ...</span>
                t <span style="color:cyan; ">P: I've no idea whether I'm trying to milk his dick or exorcising him, but either way he looks like he's enjoying it a little too much.</span>
                player Whoa whoa slow doown, you needn't to fuck my hand slow down the humping.
                serious <font color= '#C00157'>TELL THAT TO SOMEBODY WHO CARES, I AHM GETTING CLOOOHHSE!!</font>
                player It's about damn time I finish you off anyway, aaaand <i>now</i>.
                t One gentle bite on his chest, one tiny pinching on his shaft and he's already spurting like he hasn't jizzed before.
                im images/serious/gym6.jpg
                serious HHhhhhhaaah shoo muuuutch-
                t <span style="color:cyan; ">P: My fucking hand is soaked, of course it is "shoo muuuutch", holy shit.</span>
                t You keep milking his shaft with your hand until it stops leaking altogether, then you pull your hand out to show him what he "caused".
                im images/serious/gym7.jpg
                t <span style="color:yellow; ">A: ...My whole mind just went blank what the hell's thaat?</span>
                player You made such a mess, seriousF.
                serious ...You made me do it, I put all blame on you... That's a whole week's worth of goddamn cum in there ughhhh.
                player At least it'll be easier to walk you home this time.
                serious You wish, I'm completely drained of both my energy and my cum, don't mind if I just die on this mat for a bit.
                t He finally lets his tense arms go loose, his head falling back on the mat as his panties start leaking from sides.
                player Actually I'd mind, I can't fuck a dead boi can I?
                t He raises his arm again to make you pull him up, grabbing his clothes to get dressed.
                serious You could, but it wouldn't be nice, anyway you owe me an ice cream, and I'll sleep like a log again tonight.
                player Wait wait, why do I owe you an ice cream?
                serious Cuz I said so, now help me get up.
                t You help him get up, he wraps his arm around your neck to keep himself standing for a while.
                player You can't just make me owe you stuff like that what the fuck?
                serious Too bad, I just did, and cmoon it ain't even that expensive.
                player But then why don't you.. You know what, fine.
                serious Wonderful! Now let's go home my loyal steed, onwards!
                t <span style="color:cyan; ">P: ...Just where have I heard this sentence before?</span>
            `);
			break;
		}
        case "serious3b": {
			writeHTML(`
                t You go inside the gym once you think you've wasted enough time waiting for the class to finish.
                serious Finally decided to come around huh? Took you forever.
                im images/serious/gym1.jpg
                player I thought it had been only five minutes since the class was dismissed?
                serious Yeah and I could've been on my way home by now.
                player <i>But you're still here, because you wanted it too..</i>
                t He plays with the hem of his shirt.
                serious <i>Or, hear me out, could it be because someone asked me to wait for them after the class??</i>
                player You didn't have to obey seriousF, you don't have to do anything I'm telli-
                serious <i>Oh my god just <b>shut up</b> already!</i>
                player Wow... 
                t You sit next to him to help taking off his shirt and pants.
                im images/serious/gym2.jpg
                player Heh, nice undies seriousF, were you expecting someone to take your clothes off?
                serious <i>Am I supposed to ask you what to wear? Let's just get done with this already, please.</i>
                player This is getting a bit annoying, your attitude.
                t He puts his hands in his hair.
                serious Look, if only you could be a little nicer and gave me the little goddamn thing I asked from you, my attitude would be a lot nicer alright?
                player What's that supposed to mean?
                serious <i>You reap what you sown, that's all.</i>
                player So I'm at fault for being a dom?
                serious If you can't spare a bit of your dominance just for your own pleasure you deserve nothing, it's not about ethic or anything I just hate your guts.
                t You put your hand in his panties and start slowly playing with his dicklet.
                im images/serious/gym3.jpg
                serious <i>Ghh... Why..?</i>
                player I wanted to do so, any complaints?
                serious <i>A lot of them, but none of them are relevant for the time being.</i>
                t You slide his undershirt up to expose the left part of his chest and use your mouth on it.
                im images/serious/gym4.jpg
                serious S-Sensitive over there..!
                player Great, great... Consider this as a compensation maybe?
                t His legs are shaking maybe even more than your hand in his pants.
                serious I-It doesn't make up for it, <i>that's nonsense.</i>
                player Nonsense huh?
                serious ...
                im images/serious/gym5.jpg
                t He can't help but let himself moan as you speed up.
                serious F-Fuck... I'm getting close already..!
                player I decide that.
                serious H-Huh?
			`);
			break;
		}
        case "serious3ba": {
			writeHTML(`
                t You decide to speed up even more, making him barely be capable of keeping his posture.
                serious <b>Y-Yes yes YES..!</b>
                player seriousF.
                serious <i>What now?</i>
                player I'll count to three, and you'll spill it all, got it?
                serious Y-Yes playerSir...
                t You slow down to give more attention to the tip of his shaft.
                player <i>One.</i>
                serious Two! say two already!
                t You slowly regain speed, making him squeal.
                player <i>Two.</i>
                serious Gawdd..!
                t You stop once you hit the top speed.
                player <i>Three!</i>
                serious <b>HNNN~</b>
                im images/serious/gym6.jpg
                serious <i>Haaaah~ Oh my~</i>
                player Let's see...
                t You pull your hand out.
                im images/serious/gym7.jpg
                serious Uwaah~
                player A lot, isn't it?
                serious <i>A lot...</i>
                t He then collapses backwards on the mat he was sitting on.
                serious <i>I'm so tireeeeeed waaaa~</i>
                player It's getting late, need someone to walk you home?
                t He checks his watch and gets up quickly.
                serious Thanks for reminding, but I prefer not to see your face again for a while.
                player Still this behavior? Even after what I just did?
                serious <i>It was your choice, let me remind you, you are the goddamn dom here.</i>
                t He changes his clothes right away and runs out of the door.
                player <i>Well... I better make my way back to home then..</i>
			`);
			break;
		}
        case "serious3bb": {
			writeHTML(`
                t You think of it for a second and decide he needs to be taught a "lesson", so you pull your hand out of his pants.
                player Well that's all then.
                serious H-Huh?
                t You get up as you laugh.
                player <i>That's all you get for today, "asshole".</i>
                serious I'm... not...
                player What's that? Speak up boytoy.
                serious <b>I'm not gonna fuckin' beg you. Go to hell.</b>
                t He keeps shaking and squealing on the mat, being unable to get off after reaching the edge must be really painful for him.
                player <i>Oh but you won't receive anything with that attitude seriousF.</i>
                serious <i>I-I won't back down, so be it..!</i>
                player Thought you couldn't get off any other way?
                t He's still trying to catch his breath.
                serious <i>Huff... So be it then, if you don't help me get off I won't help you get off.</i>
                player I hope you're aware of your position here, you only have me but I have plenty of other people that could do your job.
                serious <b><i>Go fuck them then! Go ruin someone else's fun.</i></b>
                t He quickly gets dressed again and walks out of the room while still rubbing his hand on his bulge. He slams the door while leaving, no goodbyes or anything.
                player <i>What kind of a sub is that..?</i>
			`);
			break;
		}
        case "serious3z": {
			writeHTML(`
                serious Gym again? Is that an obsession with sweaty bois or what?
                player Would you rather if we went back to the restrooms?
                t He shudders.
                im images/serious/flush.jpg
                serious Gym sounds a lot better now..!
                player Good decision, let's get going.
                serious Wait, now? Don't you think we're forgetting something? Like a few tens of people who might be training there right now?
                t You put your hand on his shoulder with a smile on your face.
                player It won't be a problem if we use the storage room, am I wrong?
                t <span style="color:yellow; ">A: HELP!</span>
                serious Logically no, but ethically you should be wrong.
                player That I don't care about, get moving.
                serious Yes playerSir...
                t ...
                serious <i>This is so embarrassiiing~</i>
                im images/serious/gfuck1.jpg
                player You were the one who insisted to take all your clothes off.
                serious Y-Yeah I did..! So when we walk out of here I won't have to explain why my clothes are ruined to anyone who sees me.
                t <span style="color:cyan; ">P: I don't think you had to take your socks off for that.</span>
                serious Ughhh get started already..! It's gettin' a little cold here.
                player Alright alright, no point in making you suffer anyway.
                serious <font size= '-1'>Thank you...</font>
                t You slide your pants down and take your place behind him.
                serious At least the mats are soft..
                t You thrust inside his hole without making him wait any longer, you can hear a tiny squeak from him as you push deeper.
                im images/serious/gfuck2.jpg
                serious <i>D-Deep..!</i>
                player Is it too deep for you already?
                t He starts squirming under you with his hand still on his ass.
                serious <b><i>DEEPER..!</i></b>
                player A-Alright?
                t <span style="color:cyan; ">P: This was, unexpected to say the least. But alright!</span>
                t <span style="color:yellow; ">A: It was a bad decision wasn't it?</span>
                t You thrust deeper inside, until you're all the way in.
                serious G-God..! This angle doesn't help at all..!
                player You're only getting what you've asked for, seriousF.
                im images/serious/gfuck3.jpg
                serious <i>And I have no fucking regrets, keep up..!</i>
                t It's weird to see him so desperate, but you can't really complain about it.
                player What happened to you goddamnit?!
                t He tries to laugh but stops it when it gets cut by a moan.
                serious I... Ugh...<br>I'm trying to be better than anyone else! And I will be.
                player Aren't you being a little too confident? Your rivals are-
                serious <b>That's the fuckin' point! It'll be hard for me to be the best! So it'll feel even better to know I AM the BEST!!</b>
                im images/serious/gfuck4.jpg
                player <i>The fucking dedication...</i>
                serious <b>YES! I AM DEDICATED AND I WILL SUCCEED!</b>
                t He stops to catch his breath.
                serious <i>seriousF will not fail in life ever again, he'll be the best.</i>
                player At least you're hopeful huh.
                serious I aam..! <i>It's great isn't it?</i>
                player What's great?
                t His whole body starts shaking.
                serious I- Don't know? <font size= '-1'>I don't remember why I said that I just feel too good I don't knoow.</font>
                player <i>This is more than enough, seriousF.</i>
                serious Huh..?
                t You keep thrusting your dick deep inside him, making him shake more and more with each thrust.
                serious <i>FFFF- I'M GETTING CLOOOOSE~</i>
                player <i>Cumming..!</i>
                t You keep fucking his tight boyhole as you cum deep inside him, giving him an orgasm along with it as well.
                im images/serious/gfuck5.jpg
                serious <i>Hhhh~</i>
                player Huff... It's always so tiring..
                t You pull your dick out to see what you've given him was a "little more" than a creampie.
                im images/serious/gfuck6.jpg
                t <span style="color:yellow; ">A: So... Full...</span>
                serious Overwhelming...
                player Really...
                serious <i>I'm dizzy, heheheh...</i>
                t You hold him up before he can collapse, you won't be leaving him here today.
                player On your feet, seriousF. We don't want you snoozing here.
                serious <i>Right, right.</i>
                t You help him get up off the mat.
                player Will you be okay? You look shaken?
                serious I can make it to home, I think.<br>See you later!
                player Bye, then!
			`);
			break;
		}
        case "serious4a": {
			writeHTML(`
                t The moment you step inside you notice the clean smell coming from inside the home, it looks like he really was cleaning around.
                serious Ughhh... You're lucky I haven't mopped the floor here just yet, normally I don't let people keep their shoes on in my home but I'll let this one slide.
                player And what did I do to earn that?
                serious You'll clean it off yourself of course! Or hand me a few bucks to buy my labor.
                t You shake your head.
                player I'll stick to the mop.
                serious Your choice, anyway I'll be back in a min make yourself at home.<br>Assuming you wouldn't step on your own furniture with your shoes...
                player seriousF...
                serious 'Kay 'Kay wait for me.
                t You sit down on a couch and look around as he walks into his room and shuts the door behind.
                t <span style="color:cyan; ">P: This is totally unfair, even his couch is more comfortable than my bed... And and and what do we have here?</span>
                t You get up and walk towards the little bookshelf hanging on the wall.
                player <i>A thick, German dictionary, a porno magazine (obviously), a book on basic economics, a guide of... what? And even a book on psychology? I didn't know seriousF liked reading... Maybe I can borrow one of th-</i>
                serious Don't even think about it.
                t You turn around to find seriousF standing right behind you, wearing a cute dress and his usual wig.
                player Heh, looking good there seriousF!
                t He perks up a little from the praise, his eyes locked onto yours with a confident grin on his face.
                serious Glad ya like it then, this one was a bit spicy on the wallet..
                player I'd say it looks worth every penny.
                t <span style="color:yellow; ">A: Ghhh... Would be my doom if you discovered my praise kink.</span>
                t He chuckles and doesn't even try to hide his slightly blushing face.
                player Tell you what, since I agreed on letting you have a bit of control... Why don't you choose how we do it this time?
                serious O-Oh a-alright... C'mere.
                t He backs up to the nearest wall and crouches to unzip your pants, while rubbing his free hand on your bulge.
                player Mmm really? I thought you'd tell me to suck you off instead or something.
                t He pulls his hands back once he manages to get your cock out of your pants.
                im images/serious/blow1.jpg
                serious H-hey I know my place! I don't mind being a bottom as long as I can enjoy it.
                player Good boy...
                serious <i>Heh heheheh</i> stoohp it! I'm trying to focus here.
                t You can feel his breath on your crotch as he takes his time to start.
                im images/serious/blow2.jpg
                player Huff, why do you need to focus anyway? 
                t There is a shivering feel going down your spine the moment he holds your shaft in his hand, it's a little colder this time but still as delicate as you remember.
                serious <i>But we had a deal playerF, I asked you give me initiative, and in return I would give it all I've got.</i>
                t He begins licking your shaft from below its head with his hand gently moving on your length. His eyes keep moving between your face and your cock as he tries to see your reactions.
                im images/serious/blow3.jpg
                serious <i>And oh well... <font color= '#A02A20'>Being "good" won't be enough for seriousF this time.</font></i>
                t <span style="color:yellow; ">A: Heh, it's my first time and you're already throbbing huh? I told you you wouldn't regret it...</span>
                player There are plenty of good bois I know, <i>I wouldn't be so bold if I were y-</i>
                im images/serious/blow5.jpg
                t He cuts your sentence by taking half your length in his mouth, his lips move on your shaft in different directions as he twirls and twists his tongue around it to make all the sensory nerves on your cock fire off at once.
                serious I know, a competition with an obvious winner would be boring anyway.
                player <i>Urk- Slow downn or...</i>
                im images/serious/blow4.jpg
                t He raises his head to look into your face after pulling your wet shaft out of his mouth with a loud *plop*. He's using his fingertips to softly rub the saliva on your shaft's head with a wide smile on his face.
                serious <i>Or what? Don't tell me you're already gettin' close, we're just getting started...</i>
                t He returns to licking it from below after giving a kiss on your shaft's head with a proud look on his face.
                player Ghhhh how am I supposed to get a hold of myself when you keep changing paces like this???
                serious But that ain't my problem is it? Shouldn't have asked for a <i>bitch</i> you couldn't handle.
                im images/serious/blow5.jpg
                player ...
                serious <i>That's more like it, let seriousF make you feel good, relax...</i>
                t With his warm mouth, his tongue twirling around your cock, his lips enveloping half of your length and his overall attitude make it difficult for you to even stand properly.
                player <i>Hnngfh- Come here..!</i>
                t You grab his head to push your whole shaft down his throat, making him shake in place.
                im images/serious/blow6.jpg
                serious <b>MMPFH?!</b>
                t <span style="color:yellow; ">A: Yehssss..!</span>
                t You'd love to use his throat some more but that single thrust was enough to make you reach your climax.
                im images/serious/blow7.jpg
                t You let your whole load down his throat as he finally loses his pace, using his tongue to milk all he can get from your cock instead of twirling it like before.
                player ...
                t His eyes narrow as your stream of jizz slows down. Once you're finally done he slowly pulls it out of his mouth.
                im images/serious/blow8.jpg
                serious <i>Haaaah- You neally drofneth meh...</i>
                t The post nut dizziness hits you quite hard, you can still stand on your feet but hell isn't the world spinning a little too fast just now.
                t <span style="color:cyan; ">P: Just wow... Knew you had a repressed slut in you but holy FUCK.</span>
                im images/serious/blow9.jpg
                player This was...
                serious <i>A lot, fucking a lot.</i>
                t He raises his head again to look into your eyes and swallows the whole thing after holding it in his mouth a bit longer.
                serious Ugh... In no way that's tasty, but still feels good to taste, weird.
                player Great, seriousF I know is back with his talking.
                t He finally lets his body drop on the floor, sitting by the wall as he starts chuckling.
                serious Ya sure? <i>'Cause I'm sure I told you we were just gettin' started.</i>
                player ...You want more?!  
                t He slowly gets up to wrap his arms around your head and whisper.
                serious <i>What was it ya kept telling me? Oh yea, "You can just leave my <b>home</b> if you want to, really."</i>
                player You think you did something there don't you?
                serious Oh but I did, you <i>won't</i> leave playerF. You can leave but you <i>won't</i>.
                player <i>...Did you really study my dominance?</i>
                t He nods with a proud smile on his face. 
                t <span style="color:yellow; ">A: Sorry playerF but even you aren't immune to your own medicine..</span> 
                serious Might as well call yourself my mentor, I have my own style though.
                player And what's that? 
                t He wraps one of his legs around your waist, smiling into your face as he moves it slowly to rub his thighs on your shaft.
                serious <i>Go ahead... Tell me that you can't go for another round.</i>
                t <span style="color:cyan; ">P: Simple and efficient without needing hypnosis. Your "mentor" is proud of you seriousF.</span> 
                player You'll wish I just went back to my home... 
                serious <i>Oh I can't wait to do that, let's see what you've got.</i>
                t ...
                serious ...You're cruel.
                im images/serious/blay1.jpg
                player I told you you'd regret it.
                serious I thought you meant something like fucking me so hard I couldn't walk for a day, not choosing the <b>fucking floor</b> out of all my comfy furnitures. It's just uncomfortable.
                im images/serious/blay2.jpg
                player <i>We can stop right now if you wish.</i>
                serious Big if, just shut up and put it in already.
                t <span style="color:cyan; ">P: Say less.</span>
                im images/serious/blay3.jpg
                serious <i>Better make it worth the backpain, fucking lunatic.</i>
                player I think you should be grateful I didn't leave.
                serious Look, yeah you're good but stop expecting me to treat you like a blessing okay? It gets boring after a whi-
                im images/serious/blay4.jpg
                player <i>Were you saying something seriousF?</i>
                t He brings his knees closer together to raise his ass higher, swings it a bit forward and slams it back on your hips to take you inside even deeper.
                serious <b>Yehhhh..! Hardeeeer!!</b>
                player I think neither of us are on top this time huh? <i>This should be fun.</i>
                serious I-I think it's the other way around, both of us are on the lead.
                t You thrust even deeper in his hole as he clenches it tighter, making it firmly wrap around your length.
                im images/serious/blay5.jpg
                t <span style="color:yellow; ">A: So deep- So hard- So gooooood..!</span>
                t You can see his body squirming as he lets out quick moans with each thrust, he appears to still be in control of his pace, for now...
                player Hey seriousF.
                serious Whuh? 
                player I have something in mind but I feel like I should ask you if you'd like it first.
                t He shakes a little in the place while catching his breath.
                serious Just- Go for it I don't care I'll probably like it.
                t <span style="color:cyan; ">P: Then, let's see how it goes...</span>
                t His whole body tenses up as the sound of your spank echoes in the room.
                im images/serious/blay6.jpg
                serious <b><i>FFFFF-!</i></b>
                player <i>Got anything to say, seriousF?</i>
                serious <font size= '-1'><i>Aaahhg-</i></font>
                t You give him another spank on his ass, his eyes get wet as his tense body keeps squirming uncontrollably.
                serious <i>AHGAINNN-</i>
                player <i>Good boy.</i>
                serious <i>Ooooooooooooohhhhh-</i>
                t You keep getting rougher as you keep giving and giving him spanks. He just lays there and takes them as he's barely even capable of making any noise himself.
                t <span style="color:yellow; ">A: <font size= '-1'>Sooo numb all oveer...</font></span>
                player Ghhh... <i>I'm getting close.</i> Should I pull out already or?
                serious <font size= '-2'><i>Ihsiiideeee-</i></font>
                t You speed up even more, pull almost your whole shaft out and then...
                im images/serious/blay7.jpg
                serious <i>Urrgh-</i>
                t Your dick keeps pumping rest of the jizz inside his still clenching boyhole, making him roll his tongue out again. Though you can't see the floor below him you're pretty sure he's created a decent puddle of his cum on it.
                t <span style="color:yellow; ">A: J-Just how much do you have..? Does it ever end.?!</span>
                player <font size= '-1'>...Holy fucking shit-</font>
                im images/serious/blay9.jpg
                player <font size= '-1'>Gee heheh-</font>
                t You collapse beside seriousF as the exhaustion makes it impossible for you to stand, you and seriousF lock eyes one last time as your vision darkens and then, you're out cold.
            `);
			break;
		}
        case "serious4b": {
			writeHTML(`
                t He sits down on a rather wide couch as you step inside, his hands on his legs.
                serious Hope ya like my place, I mean it ain't that big but I love my home.
                player It's not bad, actually looks like you're handling it better than I do.
                serious Meh, thanks.. So what now?
                player You're waiting for my orders?
                t He sighs.
                serious <i>Yes, yes I am, and I hate waiting for stuff I already don't like so hurry it up.</i>
                player Hmmm... How about you wear one of your "dresses"?
                serious ...Fine, gimme a moment.
                t He walks in his room and yells from inside.
                serious <i>Don't touch anythin' while I'm here 'kay?</i>
                player I wasn't intending to! <i>Dammit.</i>
                t In a moment and half he leaves the room in a dress you don't remember seeing before.
                serious Would this one do?
                player <i>Finely...</i>
                t ...
                im images/serious/blow1.jpg
                serious Just a blowjob, alright? Then you go home.
                player Shouldn't I be the one to decide that?
                serious <i>...I hope you aren't thinking of having sex without consent?</i>
                t You shake your head. 
                player On a second thought, I think that's where I draw the line.
                serious <i>Great, I didn't wanna call the cops on you.</i>
                player ...
                serious <i>Now, let's get started...</i>
                t You can feel his hot breath on your shaft as he opens his mouth and rolls his tongue out.
                im images/serious/blow2.jpg
                player Hey seriousF.
                serious What now?
                player Can you tell me what made you so mad? Like I understand that it'd be a bummer to have your initiative request denied but, this is a little too much if you ask me..
                im images/serious/blow3.jpg
                serious May I chose not to answer this one?
                t You can feel his fingers softly run along your shaft, he isn't that interested but he's still doing a good job with his tongue and hands.
                player I'm not going to force you to answer, I just want to know why, please.
                t He sighs while moving his hand faster.
                serious <i>Fine.</i> Ya wanna know why I wanted it so much?
                player If you could..
                t He looks a little dreamy as he changes the hand he's using for a few seconds, then returning to the first one.
                serious If I had an initiative, I wouldn't <i>have</i> to please you. <i>Instead I could choose to do it myself, it'd be my achievement, not my duty.</i>
                im images/serious/blow4.jpg
                serious <i>I would've been doing it the way I want, and it'd be more enjoyable for both of us too. Because I'd be way more dedicated to make it the best experience you have, I didn't want to dominate you in any way either, I only wanted to have a say...</i>
                player That's...
                serious Don't tell me that's nonsense, it doesn't have to make sense to make me feel better about it. I wanted only <b>one</b> thing, but you didn't even give me that much. You became the only way I can ever get off then you fucking ruined it for me. <i>It's easy to break the hopes of a pessimist, even by such a little thing in your eyes.</i>
                player I think I understand...
                t He rolls his eyes.
                serious As if that's gonna change a thing, ya got what ya wanted.
                im images/serious/blow5.jpg
                serious And I'd be damned if I said I expected anythin' else from ya.
                player ...You want this to get done with A-S-A-P right?
                serious Please.
                player <i>With pleasure.</i>
                t You hold his head with one hand and push your whole length in his mouth.
                im images/serious/blow6.jpg
                player I didn't become a dom just to keep listening to your complaints all day, you better be ready for it.
                t He blinks twice, and you get to work. Thrusting deep inside his throat repeatedly as he twirls his tongue around your length.
                player <i>At least it's worth hearing all that shit from you..</i>
                t He doesn't even make a noise let alone giving an answer, completely focused on what he has at hand he keeps hitting your shaft with his tongue.
                player <i>G-God..</i> Are you ready?
                t He slowly nods as you speed up some more, after thrusting a few more times you finally reach your climax and let your load inside his mouth.
                im images/serious/blow7.jpg
                serious ..!
                player <i>Oh my...</i>
                t You give him a pat on his head, which makes him look up.
                player <i>Good job, seriousF.</i>
                t He sighs with his eyes unfocused.
                im images/serious/blow8.jpg
                serious <i>It wasn't that bad, I guess...</i>
                player It was, thank you..
                t He chuckles.
                serious <i>It could've been a lot better, I would've loved it...</i>
                im images/serious/blow9.jpg
                serious You can stay for a while, if you keep it in your pants.
                player Should I stay?
                t He falls on his butt when his socks slide on the wooden floor.
                serious Gah..! Well I don't know, I hate being alone...
                player Then I'll stay for a while.
                serious <font size= '-1'>...Thank you.</font>
                t ...
                t You realize the two of you won't be talking a lot when he falls asleep on the couch (which only takes like fifteen minutes), he must be tired from all the day's work. So you cover him with a blanket and make your way home.
			`);
			break;
		}
        case "serious4z": {
			writeHTML(`
                serious My home? Again?
                player Have a problem with that?
                t He shakes his head.
                im images/serious/happy.jpg
                serious None at all! At least I'll be a little comfortable too.
                player Great then, let's get going.
                serious Now..?
                t He gets up with his bag in his hands as you nod.
                serious Well, I can't complain about that at all.
                t ...
                serious Look, just a blowjob this time okay? I don't have enough cash to call a maid after you every day.
                im images/serious/blow1.jpg
                player Sounds good to me.
                t He slowly reaches for your shaft to gently stroke on it.
                serious 'Course it sounds good, it's seriousF who's serving you today.
                player And how's that any special?
                im images/serious/blow2.jpg
                serious <i>Everyone expects exclusivity from you don't they? They want you all for theirselves.</i>
                player There are a few exceptions.
                serious Shush. <i>What I feel for you isn't love, dear.</i>
                im images/serious/blow3.jpg
                serious <i>It's just pure fuckin' lust... I'm not tryna be the only one you fuck.</i>
                t He keeps twirling his tongue around your shaft, then moving his lips on it slowly.
                serious No no no, I even want you to have more bois in your harem <i>so that I can have more rivals that are no match for me.</i>
                t He raises his eyes back up with a naughty gleam in them.
                serious I'm not working to be the only one, I'm trying to be the <i>best</i> one out of all. 
                player W-What do you have to earn from it?
                serious Absolutely and totally nothing, I just want it.
                t He takes about half of your length in his mouth, licking it from all sides as he gently moves each of his fingers on the base of your shaft.
                im images/serious/blow5.jpg
                player <i>You love this don't you?</i>
                serious Mhmmm...
                t He pulls it out again to return to stroking it while using only his tongue and lips.
                im images/serious/blow4.jpg
                serious <i>I love and enjoy every second of this, playerSir...</i>
                player <i>Then why are you trying to make it last as short as possible?!</i>
                t He chuckles while using his lips to gently squeeze all around your length little by little.
                serious <i>Oh but how am I supposed to be the best if I'm not irresistible?</i>
                t <span style="color:cyan; ">P: You wouldn't have to try too hard...</span>
                player You just had to tell then, seriousF.
                serious Hah?
                t You hold his head to push your whole dick down his throat, he doesn't try to resist the sudden pull at all.
                im images/serious/blow6.jpg
                player <i>If you wanted to make me cum so much, you only had to tell..</i>
                serious <i>Mmmmmmm...</i>
                t You keep thrusting deep in his throat, he looks content with what he's getting but it's clear he'd be happier if he could make you finish quick as possible. It's not like you can keep up for much longer anyway.
                t <span style="color:yellow; ">A: Greaaat greaaaat~ It'll be over soon, just keep going..</span>
                player <i>I'm getting close... N-No I'm already gonna cumm..!</i>
                t You push your dick all the way inside for one last time to let your whole load inside his mouth.
                im images/serious/blow7.jpg
                serious <i>Mmmmpfh..!</i>
                t He keeps milking you inside with his tongue until you have nothing left to shoot in his mouth for now.
                player H-Holy shit...
                im images/serious/blow8.jpg
                serious <i>Amazing... Sho much...</i>
                t <span style="color:cyan; ">P: Maybe don't drain me entirely next time if you really want to have rivals.</span>
                serious Wheheheh... I'm a greedy boi.
                t <span style="color:yellow; ">A: This taste won't clear off my damn mouth for the whole day, not that it's a bad thing, heheheh..</span>
                player Sure you are, ugh..
                im images/serious/blow9.jpg
                serious My legs are getting numb, maybe I should've went with kneeling this time.
                player I guess. Hey may I stay for a bit? 
                serious Make yourself at home, I don't really like visitors but you're fine.<br>Don't expect free food though.
                player Don't worry I won't, I just feel a bit tired that's all.
			`);
			break;
		}
        case "seriousCorruption": {
			writeHTML(`
                define succubus = sp succubus;
                define seriousa = sp serious; im images/serious/seriousa.jpg; altColor #C00157;
                t It can't be that bad of an idea, can it? Just another demon to the harem, nothing unusual.
                player Hey seriousF, actually I have something new in mind.
                serious Well? Lemme hear it then?
                player You had a schoolgirl outfit too, didn't you?
                t He nods.
                serious Y-Yeah? What of it?
                player It's with you isn't it?
                im images/serious/flush.jpg
                serious H-How do you even know?
                player Well, isn't poker all about bluffing, seriousF?
                t He lowers his bag to check if the dress is actually with him.
                serious Ugh, using my interests against me again, ya want me to wear it now?
                t You shake your head.
                player Actually, go back to your class for now. We will use an empty class when the day is over.
                serious Can't we just take this at home then? Pleaase~
                t <span style="color:cyan; ">P: To be fair, why not?</span>
                player Alright then, we'll meet at your place once the day is over.
                serious Wait, are you for real?
                t You nod.
                im images/serious/happy.jpg
                serious Hah! Now I like the sound of it. Can't wait for the day to end heheh...
                t <span style="color:yellow; ">A: I feel like I'll regret it but maybe I'm just being a bitch huh?</span>
                t Once again you'll have to burn quite a lot of time, but it has to be done this way.
                t ...
                player Alright, on my way.
                t You put your phone back in your pocket and make your way to seriousF's house.
                player Here goes nothing...
                t You use the key he gave you to get inside, he's sitting on the couch with his normal clothes on.
                serious Hii! Sorry I just got back as well, and felt quite tired so yeah but I'll change my clothes don't worry.
                t He gets up to stretch his body.
                serious At least I had time to write housekeepF while waiting, he'll be ready to clean around when we're done.
                player How did you even convince him this time?
                serious I uhm... Better go change my clothes now!
                t You put your hand on his shoulders and focus on your mark with your eyes closed, you can feel it burn as he shudders.
                serious W-What's that supposed to be? Did your hand just uhh..
                t He pushes your hand away as you open your eyes.
                serious Ughhh~ <i>Do I really need to wear something? It's kinda warm so why don't we just do it naked..?</i>
                player Just go change your clothes already, seriousF.
                serious F-Fine! Wait here.
                t He grabs his bag and runs into his room. You sit down on a couch to read something while waiting.
                player <i>And what do we have here? A book huh? Let's see... "Endless road that goes nowhere, a book on treadmills by Theo internL"..? That sure is a title alright, and it is a bestseller too.</i>
                t And in just one minute, you can hear seriousF's voice from his room.
                serious <i>I'm ready..!</i>
                t You get up and take a step inside his room, you see that he really managed to put the dress on in such a short time, though a bit clumsy.
                im images/serious/sgirl1.jpg
                seriousa Heh... Uhm...
                t You can see him sweating as he tries to control his shaky legs.
                player What's that, seriousF? <i>Feeling in heat?</i>
                t His legs gets shaky as you say that, he looks utterly confuse since he has no idea what's going on.
                seriousa S-Shut up..! I don't know what's going on with me...
                t <span style="color:yellow; ">A: Why is it so HOT..? What the HELL is going on with my bodyyy?!</span>
                player Aww, you're being rude for no reason now aren't y-
                seriousa <b><i>JUST SHUT THE FUCK UUUP..!</i></b>
                im images/serious/sgirl2.jpg
                seriousa <i>I... Have <b>NO</b> idea... Whatever the <b>FUCK</b> is going on...</i>
                t He slowly raises his shaky hands to point at you.
                seriousa <i>B-But I know... I knooow it's <b>YOUR</b> fault..! <b>WHAT THE HELL DID YOU DO TO MY DAMN BODY?!</b></i>
                player What if I told you I had no idea?
                im images/serious/sgirl3.jpg
                seriousa <i><font color= '#C00157'>I'm not buying that, what do you take me for? A moron?</font></i>
                player Calm down..! Alright, yeah I did it, you were right. Happy now?
                seriousa NOT HAPPY AT ALL.
                player Then I'll have to fix that.
                seriousa Yes yes yes just fix my bo- Oh no...
                t He seems like he's struggling to control his legs as you lay on the floor with your pants down, he looks frustrated about how he can't resist the urge as pulls his skirt down.
                seriousa <i>W-What a brilliant idea, first set the boi on fire and then fuck him to cool him down. How's that even supposed to work?</i>
                player As if it'd stop you if it wouldn't work.
                seriousa ...
                t He sits down on your lap without taking your member inside, you can feel his dick touching yours.
                im images/serious/sgs1.jpg
                seriousa W-Wait, am I really gonna ride it? My legs are too shaky for thiiiis..!
                t You can see that much, his whole body is shaking and quite warmer than you remember. Though you know why it is warm, it's still a bit too much.
                im images/serious/sgs2.jpg
                seriousa I wish I opened a window or something... I feel like I'm being cooked here!
                player Don't worry seriousF, it'll be over in a bit.
                im images/serious/sgs3.jpg
                seriousa I-I'll be alright yeah? I will feel better after this, right? Like it won't burn anymore.
                t You can feel him moving back and forth, he's probably unable to control his hips.
                player seriousF, can you put your phone down?
                seriousa W-Why?
                player Do you think it's a good idea to hold it in your hand while getting fucked?
                seriousa Right..
                t He turns around to put his phone down and slides it away.
                im images/serious/sgs4.jpg
                seriousa T-There, I did it.
                player Now, lift yourself a bit up on your legs, hold my d-
                seriousa I know what to do..! Okay, here goes.
                t He raises his body up on his shaky legs enough to hold your shaft in his hand and put it right below his boihole.
                seriousa <i>It'll hurt won't it?</i>
                player Has it hurted that badly before? It's not your first time seriousF.
                seriousa <i>It's not like I'd stop even if it were to hurt, heheheh...</i>
                t He lets his body drop on your dick right away. Taking it inside that rough, combined with the spell you put on him, is enough to throw him off the edge.
                im images/serious/sgs5.jpg
                seriousa <b><i>UWOOOOGHH~</i></b>
                t His wig drops back as his body slowly swings back and forth, seemingly unconscious. You hear a cough from behind just as you were thinking of pulling out. You turn your head around to see where the voice was coming from.
                succubus That was... Quick, to say the least. But he looks yanked off his mind already, and not a big load either huh?
                t He pokes seriousF's leg with his foot.
                succubus Shame, I thought you two could go for a bit longer.
                player succubusF? Oh right, I know he fell pretty quick, I wasn't expecting that either.
                succubus I mean it's not a bad thing, he was probably just really tired.
                t He leans on the wall behind him with a faint smile on his face.
                player Maybe, anyway can you help me wit-
                seriousa <font size= '-1'>I'm not done yet..</font>
                t Both you and succubusF turn your eyes towards seriousF in surprise, who returns to moving his hips even though his eyes are barely open.
                im images/serious/sbs2.jpg
                seriousa <font size= '-1'>I-Is that succubusF..? So it's my turn now..? Wow...</font>
                succubus ...I wasn't expecting him to be still conscious, let alone being able to recognize me. That's hella awkward.
                player How do you two know each other anyway?
                succubus Is it wrong to chat with another boi I see on the streets? Waiting on my feet all day gets tiring sometimes, even the phone has a limited entertainment.
                player That doesn't explain how he knows what you are.
                t You can hear a faint screech from seriousF.
                seriousa <font size= '-1'>Kahn't the two of yuu talk abhout that lader? I'm trying sho hard to kum again befoo I kollapseee.</font>
                succubus I'll be waiting outside, you know the procedure once he's off to the dreamy world right?
                player I know I know, now seriousF let's get-
                succubus One last thing, it's kinda odd but it doesn't look like his thing will get much smaller than that. That doesn't mean he'd be a bad addition to your harem but, I don't know how useful he'd be as a succubus (male).
                t <span style="color:yellow; ">A: So I was right, will I really be a demon? Am I already one? I... Don't know anything.</span>
                player Well, I'll find a way to use him myself.
                im images/serious/sbs3.jpg
                seriousa <i>Puh-leaaseeee..!</i>
                t You adjust your hips as succubusF leaves the room, leaving you alone with seriousF. He gets to bouncing faster and faster on you with whatever energy he has left in his body.
                seriousa <font size= '-1'><i>Yesshhh yesssssssshhhhhhh~ I'm getting chlose againn~</i></font>
                player Ghh- Good, I'll be able to fill you this time as well...
                t He doesn't slow down even with the tears welling up his eyes.
                seriousa <font size= '-1'><i>Shpeed! Fashter! Moooore! I need mooooore..!</i></font>
                t He raises his ass once more, and both of you get pushed off the edge as he drops it on your shaft one last time.
                seriousa <i>FFFF-</i>
                im images/serious/sbs4.jpg
                seriousa <font size= '-1'>I...</font>
                im images/serious/sbs5.jpg
                player You..?
                seriousa <font size= '-2'>...will be okay, right?</font>
                t He collapses on you right after saying that, his slightly shrunk dick still leaking whatever is left from his masculinity away. You put your hand on his back as his sleeping body shakes on yours.
                player You'll be alright, seriousF. You'll be alright.
                t You decide to take a little longer with him, at least until he stops shaking. 
                t <span style="color:cyan; ">P: You'll be alright as long as I'll be alright.</span>
                t You gently lift him up to carry him on his bed once he calms down. You leave the room to find succubusF just watching the TV in the living room.
                succubus Are you guys finally done? Figured I could enjoy myself a bit, and maybe help myself to a snack or two from his fridge.
                player He'll be mad if he finds out, you know.
                succubus That is, unless I mess with that part of his memory as well!
                player succubusF...
                t He sighs and picks seriousF's bag to put a few of the clothes from his closet in it, so he'll have something to wear in the hotel.
                succubus Alright alright.<br>Look I'll take him to the hotel now. I'm sure he'll get a warm bed in there.
                player See you later succubusF, take care and oh please remind seriousF to call the maid.
                succubus I was going to ask "what maid" but then I decided that I don't care, I'll leave him a note about that.
                player You're the best, succubusF.
                t He laughs as he pulls the zips of the bag.
                succubus Thanks for the flattery but can we get going before the boi can say "g'morning" with his weird accent?
			`);
			break;
		}
        case "seriousClub": {
			writeHTML(`
                t You've been waiting for a good ten minutes since they went to find seriousF something to wear.
                player Ahem..! Guys I don't have all day you know.
                nagatoro Hey! Be patient okay? It took me a while to find what I've been looking for.
                serious Y-Ya sure I look good in this nagatoroF? I-It feels a little too uhhh...<br><i>thin...</i>
                nagatoro Eheheh... That's the good part about it isn't it?
                serious Is it..? 
                nagatoro Trust me seriousF, you look really cute in this one.
                serious Eeeeh-
                t nagatoroF leaves the room with a big smile on his face.
                nagatoro Hey *mister pervy, I'm sure you'll really like this one heheh~
                t You grab him by his arm before he can walk off.
                nagatoro E-Ehh~? 
                t <span style="color:cyan; ">P: This was meant to be asked long ago, nagatoroF.</span>
                player What about you, nagatoroF? Do <i>you</i> like <i>this one?</i>
                nagatoro U-Uhmmm... Yeah? I mean he's pretty and the suit looked good on him~ So I, yeah!
                player <i>I'm talking about the boi himself, nagatoroF.</i>
                t He chuckles and manages to slip off your grip.
                nagatoro Heheh~ <i>I'm leaving this one to your imagination then, playerF. You're free to believe in what you wish...</i><br>Have fun you two!
                t He runs off without saying anything else, you were expecting a more precise answer but oh well... 
                player <i>Well, that certainly wasn't a "no" for seriousF..</i>
                serious <i>Neither was it a "yes", thank you for asking though.</i>
                t You weren't expecting that he could hear the two of you from inside the room, but he's an eavesdropper isn't he?
                serious Five letters for ya, <b>"B-L-U-N-T"</b>. Like it was really damn <i>direct jesus fucking christ.</i> Do you even think of the consequences before acting? 
                player He didn't reject you did he?
                serious From what I've heard, no he didn't. It even kinda sounded like he was okay with it.. heheh~
                t You can hear him giggling from inside.
                serious But ya know, hearing ain't enough for observation by itself, so tell me. Was he like, <i>blushing</i> as he said that? Like "I'll leave it to your imagination" thing?
                player Maybe a bit? I didn't really look for that. 
                serious That's somethin', looks like seriousF's got a chance after all, <b>HELL FUCKIN' YEA BABY!!</b>
                t You think of telling him to calm down, but after thinking of it again you believe it wouldn't be bad for him to feel excited for once.
                player May I..?
                serious Oh come on in please, I haven't felt this excited in a while~
                t You push the door open and walk inside, where you find seriousF laying on a mattress.
                im images/serious/bboy1.jpg
                serious Ta-daa~ Do I look good?
                t You can understand why he kept calling the suit thin, well, it really looks paperthin on his body.
                serious A-Ay don't look at me like that, I already feel naked enough...
                player Looks like <i>he</i> thought you looked better naked.
                serious W-Wah! Don't take it that way~
                t He raises his hands to look at the gloves on his hands.
                serious I-I mean maybe but uhhh...<br>Wonder if I'll have to clean and bring the clothes back, just fold and leave them here or take them with myself like a gift when we're done here.
                player How am I supposed to know?
                serious How about I keep them and you buy nagatoroF a new one?
                player Whaa? Why am I buying stuff for <i>your</i> boyfriend?
                im images/serious/bboy2.jpg
                serious <i>"Your boyfriend" huh? I like the sound of that~</i>
                player I didn't mean it..!
                serious <i>Nah nah, you said it you mean it, heheh...</i>
                t He doesn't even stutter anymore, looks like he's finally confident enough about it. 
                t <span style="color:cyan; ">P: Two annoying bois, I wonder which one I should feel bad for. nagatoroF, seriousF, or anyone getting bullied by the two of them..? Good for them I guess.</span>
                player He's the one who decides that, seriousF.
                serious I know but... Calling him that feels so...<br><i>Right.</i>
                t He starts laughing with his hands on his chest.
                serious Oh playerF... <font color= '#C00157'><i>We're gonna have so much fun today...</i>
                t ...
                serious Haaah~ <i>Oh boyy I'll get soooo fuckin' ruined today~</i>
                im images/serious/bboy3.jpg
                player Heh, and where did the old seriousF go? Not even gonna complain about the way I'm holding you?
                t <span style="color:yellow; ">A: If I'm happy, I help ya get happy, simple as that.</span>
                t He pushes his hips forward while laughing.
                serious I've nothing to complain about today..! Everythin' in my damn life's finally coming together the way I wanted them to, <b>SO BRING IT THE FUCK ON!</b>
                player Gee- If only I knew a single question could change this much..
                serious <i>I'm not talking about only that ugh...</i> Like, look, I got the initiative I wanted from you right? Not only that, I'm becoming close with mejiL- I mean mejiF and tomgirlF again as well, as friends. And finally on top of that what nagatoroF said today...<br>Looks like everything's gonna be okay for me after all.
                t <span style="color:cyan; ">P: Looks like you had a lot to figure out huh? And I thought you were just grumpy.</span>
                t He keeps snickering.
                serious So, <i>only one thing left for me to complain.</i>
                im images/serious/bboy4.jpg
                serious Ahem.. <i>The hell are you still waiting for ya slowpoke..?</i>
                player <i>...That's how you wanted to be all along isn't it?</i>
                t <span style="color:yellow; ">A: Oh you have no idea how I've been waiting for "this"...</span>
                t Since he's already moving himself on your lap, you think it'd be wrong not to give him what he's trying so hard to have. 
                im images/serious/bboy5.jpg
                serious <i>Hooooofff~ Thooo deep alreadyy heheh~</i>
                player Calm down, I haven't even started thrusting yet.
                serious <i>That's the point isn't it? Cmoon playerF I'm self aware, I know how annoying I've been all this time.</i><br><b>Now go ahead and enjoy what you've earned, properly~</b>
                player You're going all in huh? <i>I'll give you what you're asking for then.</i>
                t You take a deep breath to prepare yourself, he'll certainly get what he asked for...
                im images/serious/bboy6.jpg
                serious <b>HAAAAAA~ YESSSSSSSS~</b> 
                t No complaining, no insults, no holdups. He's finally letting himself enjoying it throughly while even helping you enjoy it more.
                serious <b>I AM NOT GONNA LET ANYONE BE BETTER THAN MEE~</b>
                player Y-You won't have much competition if you keep working this hard.
                serious <i>Ghhh~ It doesn't get better than this seriousF, that's the best it gets...</i>
                t You keep going rougher and rougher, making him only get louder and more desperate.
                im images/serious/bboy7.jpg
                serious <b>I AM GONNA LOSE MY FUCKIN' MIIIIND..! I AM GETTING CLOOOOHSE..!</b>
                player I-I don't think I can hold back any longer either...
                serious <b>I-INSIDE, LET IT ALL FLOW INSIDE..! OR OUTSIDE, OR BOTH?! JUST CUM ALREADYY..!</b>
                t His loud and demanding voice doesn't really help you hold it inside anyway, all it takes is one more thrust and...
                im images/serious/bboy8.jpg 
                serious <b><i>OHHH Myyyyy...!</i></b>
                t It doesn't stop coming for a good fifteen seconds, even after you pull out.
                im images/serious/bboy9.jpg
                serious <i>Heheheh~ I'll feel thish later~</i>
                player I think even I will feel something later, I'm drained...
                t He lets himself drop backwards on the mattress with you, letting his arms spread.
                serious But it was worth it, you won't hear me complaining this time.
                player But you will hear me complaining, can you get off my chest?
                serious No.
                player Ugh, seriousF...
                serious Just gimme a min okay? I'm tiiired.
                t Might as well let him rest a little then, maybe you should rest with him for a bit too.
			`);
			break;
		}
        case "seriousEnd": {
			writeHTML(`
                define seriousa = sp serious; im images/serious/seriousa.jpg; altColor #C00157;
                seriousa Kinda feel funny about this one, is that some sort of cosplay?
                im end1.jpg
                player I don't know, he just handed me those and said "that'll do".
                seriousa No seriously, I feel like holding a futuristic gun in my hand and pose for the cameras, I have the body of a comiccon cosplayer.
                player Pfft.
                t You hold him by his arm and begin to take his shirt off slowly.
                seriousa H-Hey *mister what are you dooo- No seriously if you were going to take them off why did you make me wear em in the first place?
                player They looked a little too tight on you, a bit too uncomfortable, so I took them off.
                seriousa ...You're gonna hurt me, won't ya?
                player What makes you think that?
                t He shakes his head, he looks a little nervous but you can tell he's also excited.
                seriousa I know you don't give two fucks about me being uncomfortable normally, now you suddenly do so... 
                player I'm only treating my new assistant good, is there anything wrong with that?<br>Still, it might be a little rough.
                seriousa O-Okay then, I'm ready.
                t You start out by slowly putting your length inside him, watching as he relaxes his body to your thrusts.
                seriousa Mmmhh~ Ya know, you're actually pretty good when I'm comfortable.
                player Is that so?
                t He nods.
                seriousa Hey! Don't think I hate ya just cause I'm an ass sometimes, I just haven't been myself since... Ghh whatever just start going faster already.
                t And that's exactly what you do, speeding up your thrusts while also moving his hips faster and faster.
                im end2.jpg
                seriousa FUUHH~ Yeshhh! It hurts but I-<br>OHHH~
                player It'll be over soon, just keep it up.
                seriousa Y-Yes *sir..!
                t Despite clearly struggling to even stand, he puts a lot of effort trying to keep moving himself up and down on your lap.
                seriousa S-Shit... I can't hold- Fuhhh <b>CUMMING~!</b>
                im end3.jpg
                t He breathes sharply as both of you keep cumming, you watch as he struggles to keep himself standing, his arms shaking like strings.
                seriousa O-Ohkay I gotta admit...
                im end4.jpg
                seriousa <i>Fucking hell</i> I'm really gonna love being your assistant...<br>Now could ya help me get up cause I'm a little bit uhh-
                t He falls on his back before being able to finish his sentence, giggling softly.
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
	{index: "seriousreminder", trust: 10,},
    {index: "seriousreminder2", trust: 11,},
    {index: "seriousreminder3", trust: 15,},
    {index: "seriousdemand", trust: 20,},
    {index: "seriousbreak", trust: 25,},
    {index: "seriousrestreet", trust: 27,},
    {index: "serioushappy", trust: 40,},
    {index: "seriousRewardunfair", trust: 60,},
    {index: "seriousRewardfair", trust: 75,},
    //{index: "seriousRewardDeluxe", requirements: "?flag serious happyEnd;" ,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "seriousreminder": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
            addFlag("serious", "a");
            writePhoneSpeech("serious", "", "A");
            writePhoneSpeech("player", "", "Huh?");
            writePhoneSpeech("player", "", "Helloooo..?");
			break;
		}
        case "seriousreminder2": {
            writePhoneSpeech("serious", "", "Same place");
            writePhoneSpeech("player", "", "You wouldn't die if you just told me where to go you know right?");
            writePhoneSpeech("player", "", "...");
			break;
        }
        case "seriousreminder3": {
            writePhoneSpeech("serious", "", "U there?");
            writePhoneSpeech("player", "", "A");
            writePhoneSpeech("serious", "", "No no no you can2t do this");
            writePhoneSpeech("serious", "", "can't*");
            writePhoneSpeech("serious", "", "Fuck u");
            writePhoneSpeech("serious", "", "I'll B there");
            writePhoneSpeech("serious", "", "Oh and duck you again");
            writePhoneSpeech("serious", "", "Fuck* UGH I HATE AUTOCORRECT WHY WOULD I FUCKIN DUCK YOU");
			break;
        }
        case "seriousdemand": {
            writePhoneSpeech("player", "", "Upstairs, evening");
            writePhoneSpeech("serious", "", "You could at least say good morning first");
            writePhoneSpeech("player", "", "Right, sorry");
            writePhoneSpeech("serious", "", "It's fine, but why evening? My show's new ep releases this evening :(");
            writePhoneSpeech("player", "", "Just a suggestion but you can watch it online later, you know");
            writePhoneSpeech("serious", "", "I know but WHY EVENING??");
            writePhoneSpeech("player", "", "No one's forcing you, seriousF");
            writePhoneSpeech("serious", "", "...ill be there, but don't make this an habit ok?");
            writePhoneSpeech("player", "", "You know what, I'll try, no need to be an asshole 24/7 am I wrong?");
            writePhoneSpeech("serious", "", "Okay wow, seems you also got a heart huh?");
            writePhoneSpeech("player", "", "Shut up seriousF");
            writePhoneSpeech("serious", "", "Sir yes sir xD");
            break;
        }
        case "seriousbreak": {
            setTrust('serious', 27);
            writePhoneSpeech("serious", "", "Hey uhh");
            writePhoneSpeech("player", "", "What's up?");
            writePhoneSpeech("serious", "", "Not much, Im doin good wby?");
            writePhoneSpeech("player", "", "Great, nice weather outside so I'm pretty content too, so you here to ask for where we'll do it next time?");
            writePhoneSpeech("serious", "", "Nononono not at all I actually wanted a one day break");
            writePhoneSpeech("player", "", "A break?");
            writePhoneSpeech("serious", "", "Yep! Like don't get me wrong, its just that I feel like I'm spending too much of my time with u, u get it?");
            writePhoneSpeech("player", "", "So what do you have in mind for today?");
            writePhoneSpeech("serious", "", "I'll finish some of my assignments, clean the house maybe and then have a little rest, am I askin for too much?");
            writePhoneSpeech("player", "", "Not really, if you need time to work on yourself, you should do that");
            writePhoneSpeech("serious", "", "oK thanks, think I should get going");
            writePhoneSpeech("player", "", "See ya seriousF");
            writePhoneSpeech("serious", "", "Cya ^^!");
			break;
        }
        case "seriousrestreet": {
            writePhoneSpeech("serious", "", "Heya");
            writePhoneSpeech("player", "", "seriousF! How're you?");
            writePhoneSpeech("player", "", "Done with your stuff?");
            writePhoneSpeech("serious", "", "Oh I am(almost)! But Ill have to ask you for another favor");
            writePhoneSpeech("player", "", "What's the matter?");
            writePhoneSpeech("serious", "", "Not something big dontcha worry, I just wanted to ask if we could have another talk outdoors this evening");
            writePhoneSpeech("player", "", "I take you have a good reason to make that request?");
            writePhoneSpeech("serious", "", "I still have a few thingies to do at home and I'll take a stroll around that area once I'm done you get what I'm saying?");
            writePhoneSpeech("player", "", "And why outside if you don't mind me asking?");
            writePhoneSpeech("serious", "", "Tbf, that's only so you won't try and fuck me without letting me say what I have in mind, also it's called multitasking");
            writePhoneSpeech("player", "", "Aight alright I see what you're trying here, so I should be out in the town during afternoon?");
            writePhoneSpeech("serious", "", "Precisely, and don't worry about being unable to find me, just look for the cutest crossdresser boi in the town :>");
            writePhoneSpeech("player", "", "So how looking for nagatoroF'll help me find you?");
            writePhoneSpeech("serious", "", "...Right");
            writePhoneSpeech("serious", "", "Just call my phone if you can't find me then");
            writePhoneSpeech("player", "", "Giving up on your title so easily huh?");
            writePhoneSpeech("serious", "", "You're such a bully :/");
            setTrust('serious', 30);
			break;
        }
        case "serioushappy": {
            writePhoneSpeech("serious", "", "Heyyy, wassup?");
            writePhoneSpeech("player", "", "All good, wby?");
            writePhoneSpeech("serious", "", "I slept like a log this time, pretty good as well, wanna meet up today?");
            writePhoneSpeech("player", "", "When and where?");
            writePhoneSpeech("serious", "", "W hall, this morning.");
            writePhoneSpeech("player", "", "Lookin forward to it");
            writePhoneSpeech("serious", "", "Wait wait is that really");
            writePhoneSpeech("player", "", "?");
            writePhoneSpeech("serious", "", "mejiL's here, this might be a bit tricky.");
            writePhoneSpeech("serious", "", "I'll ttyl, bye");
            writePhoneSpeech("player", "", "Ok..? Bye");
			break;
        }
        case "seriousRewardunfair" :{
            writePhoneImage("images/serious/reward.jpg", "Art by Nagi Ichi X Silver Radish");
			writePhoneSpeech("serious", "", "It's about time to announce that you've finally come to the end of seriousF's storyline in dominance route, he will stick around with a single repeat scene and a few chatting options. But don't start frowning yet! Initiative route has even more content to it along with a happier and more cooperative seriousF! More content MAY come one day but expect the least");
			break;
		}
        case "seriousRewardfair" :{
            writePhoneImage("images/serious/sgs5.jpg", "Art by Nagi Ichi X Silver Radish");
			writePhoneSpeech("serious", "", "Does this thing really work? Seems like it did! Hello player, KH_Ace, seriousF's author, is here to announce that you've just done something really impressing. Yup, you've completed the entire storyline of seriousF in his initiative route, which is the longer and objectively better one. Really hope you've enjoyed it while it lasted and there are still a few things to do with him. Take him to his crush's club, corrupt him, fuck him again in two different places and lastly you'll even have an ending for him. There might be additions in the future but don't get your hopes up. I would love to know your opinions on the character on Noodle's discord server! Please come by sometime.");
			break;
		}
        case "seriousRewardDeluxe" :{
            writePhoneImage("images/serious/rewardcute.jpg", "Art by author's beloved friend Merve");
			writePhoneSpeech("serious", "", "You have completed all Ace content in the game and moreover gave seriousF the happiest ending he could get, thank you a lot <3");
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