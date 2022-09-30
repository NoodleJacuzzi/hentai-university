var character = {index: "ayeye", fName: "Valery", lName: "Storm", trust: 0, encountered: false, textEvent: "", met: false, color: "#E37E7A", author: "KH_Ace", artist: "Silver Radish", textHistory: "", unreadText: false,};

var logbook = {
	index: "ayeye", 
	desc: "A student known for her attitude and sass, generally one to make others listen when she speaks, yet she's usually nice to people around her.",
	body: "Calling her curvy would be selling her a bit too low, however when compared to the rest of the students in the school her body doesn't really stand out.",
	clothes: "She might not be defying the clothing code of the school, by wearing clothes that are on the exact limit allowed by the rules. With her shirt's sleeves pulled back to her elbows and a skirt that's baaarely enough to hide what's beneath.",
	home: "She lives together with her best friend diamondsF.",
	tags: "Cum on clothes, MFF threesome.",
	artist: "Silver Radish",
	author: "KH_Ace",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
    {index: "intro", name: "You're taking a stroll outside the school when...", location: 'street', time: "Morning", itemReq: "", trustMin: 0, trustMax: 0, top: 0, left: 0, day: "both",}, 
    {index: "introAlt", name: "You're taking a stroll outside the school when...", location: "street", time: "Morning", trustMin: 5, trustMax: 5, itemReq: "", top: 0, left: 0, day: "both",},
    {index: "ayeye1a", name: "You see ayeye chatting with another student again.", location: 'schoolEntrance', time: "Evening", itemReq: "", trustMin: 20, trustMax: 20, top: 0, left: 0, day: "both",}, 
    {index: "ayeyeNight1", name: "You receive a message from ayeye.", location: "playerHouse", time: "Night", trustMin: 45, trustMax: 45, itemReq: "", top: 0, left: 0, day: "both",},
    {index: "ayeyefh", name: "You can call ayeye to your office.", location: 'playerOffice', time: "Morning", itemReq: "", trustMin: 60, trustMax: 60, top: 0, left: 0, day: "both",},
    {index: "ayeye2s", name: "ayeye has called you over again.", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 70, trustMax: 70, top: 0, left: 0, day: "both",},
    {index: "ayeye3a", name: "ayeye is here.", location: 'westHallway', time: "Evening", itemReq: "", trustMin: 80, trustMax: 80, top: 0, left: 0, day: "both",},
    {index: "ayeye4s", name: "You see ayeye outside.", location: 'roof', time: "Morning", itemReq: "", trustMin: 90, trustMax: 90, top: 0, left: 0, day: "both",},
    {index: "duoQuo", name: "You can visit the girls tonight.", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 100, trustMax: 100, top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
    writeHTML(`
		define player = sp player;
        define ayeye = sp ayeye;
		define serious = sp serious;
        define diamonds = sp diamonds;
        define nagatoro = sp nagatoro;
        define kuro = sp kuro;
        define clubs = sp clubs;
        define spades = sp spades;
        define hearts = sp hearts;
        define ginger = sp Ginger; im images/gyaginger/gyaginger.jpg; altColor #EE9F5A;
	`);
	switch (name) {
		case "cancel": {
			unencounter("ayeye");
			changeLocation(data.player.location);
			break;
		}
		case "intro": {
            setTrust('ayeye', 10);
            setTrust("diamonds", 9);
            passTime();
			writeHTML(`
                define student = sp Male student; im images/none.png;
                t Seeing the good weather outside, you decide taking a stroll around the school area. However just when you think you could enjoy your walk you witness two students arguing.
                student ...Just no way that you aren't lying you bitch, stop playing.
                t The female student answers as she keeps chewing some gum with her eyes focused on her phone.
                ayeye Oh do I look like I give two damns about your love life <i>big boy</i>? If you're so confident why don'tcha ask her out yourself?
                student I...
                ayeye Just get outta my face bro.
                t As the boy walks away, the girl finally raises her head with a slight smile.
                ayeye Aye *mister! Ya the new scarecrow hire or what?
                player Yeah right I'm sorry.
                im school.jpg
                ayeye Hiya! You're playerF, correct? The new counselor or whatevs.
                player And you were ayeyeF ayeyeL right?
                ayeye Ye ye, sorry about what ya just had to witness by the way.
                t You look around to check if the boy is still around.
                player What was up with him anyway?
                ayeye Nothin', he kept asking me about this gal again and again till I gave him his answer.
                player Aaand?
                ayeye The gal is a lesbo.
                player Oh...
                ayeye Should've picked a better person to ask, guess I broke his lil heart...
            `);
            if(checkTrust("serious") > 0){
                addFlag("ayeye", "aaron");
                writeHTML(`
                    t You stop for a moment to think.
                    player A better person like who? seriousF?
                    ayeye Maaaaybe, prolly yeah.
                    player You two are friends right? Could you tell me more about him?
                    ayeye I wouldn't upset him if I were you, he gets real annoying when he's not happy.
                    player Will consider, anyway-
                `);
            }
            writeHTML(`
                t Before you can say anything else she chuckles and puts her phone back in her purse.
                ayeye Ayey! This girlie's gotta make her way back to class if she doesn't want to be late, see me and my roomie later mkay?
                player Goodbye!
            `);
            writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "introAlt": {
            passTime();
            setTrust('ayeye', 10);
            setTrust("diamonds", 10);
            addFlag("ayeye", "aaron");
			writeHTML(`
				define student = sp Male student; im images/none.png;
                t Seeing the good weather outside, you decide taking a stroll around the school area. However before you can start enjoying your walk you witness two students arguing.
                student ...Look I only need an answer ayeyeF, please.
                ayeye Told ya I know nothing didn't I? Go ask seriousF or something.
                student But he-
                t Both of them turn their faces to your side when you clear your throat.
                player ayeyeF ayeyeL?
                ayeye Yup, got my name right *sir, is somethin' the matter? 
                player Could I talk with you for a moment?
                ayeye I mean if you so wish, but the brother here would have to excuse us first...
                t The other student nods and leaves the two of you alone.
                im school.jpg
                ayeye So the boiboss sent ya my way huh? You know, "he".
                player In a sense yeah he did, said you could use my help.
                ayeye Well *sir... <i>Does it look like I need your help?</i>
                t You take a step back and look at her, seriousF said she could use some help and it looks like you'll have to work on attitudes, again...
                ayeye Aye I didn't mean to scare ya off! seriousF knew me since I was a toddler and you're like a pro in this correct? I'm not dumb enough to think I know better than y'all! 
                t Nevermind.
                player ...I was expecting a little uhm.
                ayeye A lil' resistance? A lil' less cooperation? Pfft what do ya take me for, an "I don't need any help" dummy?
                im shappy.jpg
                ayeye Nah *sir, if there is a way this gal can get better she'll take it. Though I've got one condition if you don't mind...
                player And that is?
                ayeye diamondsF you spyin' bug, get outta the goddamn bushes!
                sp diamonds; im images/none.png; HIDDEN<b>EEP!</b>
                t Another girl slowly comes out of the bushes behind you and greets you slowly.
                im images/diamonds/dschool.jpg
                diamonds I-I'm diamondsF *sir, sorry for the rudeness.
                ayeye Ayey! Can you stop being a coward and join the convo for once? Anyway playerF that's my roommate AND my condition, if you wanna help me you gotta help her too. Simple as that.
                player I mean sure, nice to meet you too diamondsF.
                diamonds The pleasure is mine, and oh ayeyeF I think we should head back to class.
                t ayeyeF checks her phone for the time and nods.
                ayeye Aye, if we don't get going we'll be two late chicks, see ya later!
                player I'll see you two later.
                t As they walk inside, you think of what you can do for them and what you can do to earn them.
                player <i>Looks like they're doing just well actually, but I'll see what I can do for them.</i>
            `);
			writeFunction("changeLocation('street')", "Finish");
			break;
		}
		case "ayeye1a": {
			writeHTML(`
				t You see ayeyeF sitting by the stairs, talking with another student again.
                ayeye Gal... I have no idea what you're talkin' about but if you don't cut it I'll literally off myself.
                ginger Woah do you really have an on/off button? Like an android? So is that what makes you popular? I mean androids are pretty cool especially the robot dancing ones, and like they even make money from it! Maybe I should talk to the team about this-
                t ayeyeF brings her palm to her face, taking a deep breath.
                ayeye Aye! Want me to tell ya how I got "popular"? I am <b>aaaabsolutely</b> cracked at playing "Simon says"!
                ginger No way! I mean I think I could do that too and-
                ayeye Amazing! Okay so, Simon says "go back to your home and take a nap <i>or something</i>"!
                ginger Easy peasy! I'll just go take a bus and be there in a bit!
                t ayeyeF starts chuckling as Ginger walks out of the front door, mumbling a tune to herself.
                ayeye And it actually worked huh? Oh my god that was dumb as hell..
                trans ayeye1b; name Go say hi;
			`);
            writeFunction("writeEncounter('cancel')", "Go back");
			break;
		}
		case "ayeye1b": {
			writeHTML(`
				player Hey ayeyeF!
                ayeye Oh hey! Have ya seen that gal just now? Ginger or somethin', she and her friends keep asking me stuff bout "bein' cool" and whatnot. I didn't even know I was popular.
                t She shakes her head.
                ayeye !flag ayeye aaron; Maybe it's about me hanging with kuroF? But hangin' with a poppy doesn't make ya one now does it?
				ayeye ?flag ayeye aaron; Maybe it's cuz I'm friends with seriousF? I could say he's "popular" but then why would "I" be their target? Why not him?
                player Well, don't look at me. Anyway, about your message...
                t She gets up with her hands on her waist.
                ayeye Oh yeah that... I literally can't find my driver's license heheh~
                player What? 
                ayeye Probably just forgot it at home or something, so could you be my chauffeur for today?
                t She tilts her head to the side, smiling.
                ayeye And hey, <i>this gal will not leave your services unpaid.</i>
                player What do you mean?
                ayeye It doesn't matter now does it? Here are the keys, car's in the parkin' lot.
                player ...I didn't even say yes though-
                ayeye Aww c'mooon! Let's get going already!
                t ...
                im hheyo.jpg
                ayeye Looks like diamondsF is out huh? No fun.
                player Seems so, by the way why did you ask me to stay?
                ayeye ?flag ayeye aaron; Ugh, do you really think you can hide everything from everyone? <i>We</i> know what kind of a *man you are, and could use your help~
                ayeye !flag ayeye aaron; Ugh, do you really think you can hide everything from everyone? <i>I</i> know what kind of a *man you are, and could use your help~
                player What kind of a *man I am? What are you talking about?
                t As she crouches down with a smile on her face, you feel like you're about to get your answer.
                trans ayeye1; name Continue;
			`);
			break;
		}
		case "ayeye1": {
			passTime();
            setTrust('ayeye', 40);
            setTrust("diamonds", 30);
            writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
		case "ayeyeNight1": {
            setTrust('ayeye', 50);
            setTrust("diamonds", 40);
			writeHTML(`
                t Having received a message from ayeyeF, asking you to come over (quoting her, "yes, at this hour"), you decide to give a small kiss on your bat's forehead, shoo away a few ghosts and thots haunting your house, put on a warm coat and make your way to the Vintage Street.
				t ...
                im anight.jpg
                player <i>She calls me here and does not show up herself huh? The audacity-</i>
                ayeye He"double-L"o there *sir!
                im nighthaa.jpg
                ayeye Sorry about the timin' again, but we are two nighty nighty gals! The sun is too bright for me and diamondsF here doesn't enjoy being seen.
                player "diamondsF here"? Where exactly?
                ayeye Right there!
                player ..?
                im nanoy.jpg
                ayeye Really, diamondsF?
                im ndiamond1.jpg
                diamonds I'm here! Didn't realize I was being talked to.
                ayeye I'm speechless, anyway she's here!
                im nhap.jpg
                player Alright, but what's the point of all this?
                ayeye We're gonna go hang out and...
                diamonds And I thought we could use some company, hoping ya won't mind.
                im ndiamond2.jpg
                t As much as you want to say "I do mind, I've got school tomorrow!", You can't really say no to her. This is also a good opportunity to get her feel more comfortable around you, right?
                player And lemme guess, I'll be the one paying for our time together won't I?
                ayeye We're not askin' for a wallet you fool, we just need a friend to keep us company.
                player Well then, a little fun couldn't hurt I guess.
                im nhappy.jpg
                ayeye Now that's the spirit! Let's get goin'!
                diamonds I am very glad you will keep us company, playerF. It is more fun to have more people around.
                t ...
                ayeye Phew! That sure was a night huh?
                im nighthaa.jpg
                diamonds Thanks for the night, and for keeping ayeyeF's <i>drinking problem</i> under control too...
                ayeye Quit yapping you little- I only had a single can o' booze and you treat me like a borderline alcoholic? Dramatic bitch.
                diamonds You have "a can o' booze" once every week! That's just too much!
                t Both of you go silent for a moment, looking at diamondsF with questioning eyes.
                diamonds I-Isn't it too much?
                ayeye Believe whatever you want diamondsF, this gal's going to bed. G'night the starry beautiful night sky!
                im images/diamonds/dnight.jpg
                diamonds I... Think I'd better head inside too...
                player You haven't changed your mind yet? For our next meet I mean.
                diamonds ...No *sir, I will make sure I try to enjoy it instead. And for that I should get my rest, see you tomorrow!
                player See you tomorrow, then.
                finish
			`);
			break;
		}
        case "ayeyefh": {
            passTime();
            setTrust('ayeye', 65);
            setTrust("diamonds", 65);
			writeHTML(`
                t You summon Ms. ayeyeL to your office for a little private talk, in a minute she comes inside, sitting on the couch you show her.
                ayeye Soo, what am I in for today, if ya don't mind me askin'?
                player Nothing bad, relax. Just wanted to practice some of the counseling I promised you.
                t She stares nervously at your hand when you put it on your pendant.
                ayeye Hey heyey easy there hol' up..! I'll speak, just put it down. 
                player I... Wasn't thinking of interrogating you or anything though.
                ayeye May I see it then?
                t You let her hold the pendant. She swings it around, looking at it from different angles.
                ayeye So that's the holy grail huh? The thing you use to do all that "stuff".
                player That's the idea behind it, but seriously do <i>everyone</i> just know what I'm doing here? I can't be that bad at hiding it, right?
                ayeye Naaaaah don't worry 'bout it. We have no plans of exposing you for no reason, it would be <i>inconvenient</i> for all of us anyway.
                player How come?
                ayeye Want me to answer with a question?
                t She leans forward on your desk, slowly dangling the pendant against your face with a faint smile on hers.
                ayeye <i>How does it feel to hold such a power, *mister counselor?</i>
                t She sits back down, pulling the pendant back into her palm.
                ayeye Being able to make people <i>act</i> the way you want them to act, being able to make the people <i>feel</i> the way you want them to feel, <i>makin' em think the way you want em to think.</i>
                t She finally hands you your pendant back, typing something on her phone.
                ayeye With a few swings of this, a swirling gif or two, some sweet some directive words and you're ready to toy with them. <i>How's that feel?</i>
                player That's not something I usually think about.
                ayeye Oh but it should be, that's how ya got our interest after all!
                player Huh?
                ayeye I'll be real then. You're a counselor in the school, capable of hypnotizing students, teachers and pretty much anyone you want to play with, and on top of that you have a nice influence in the school. Now think about it, option one: we go out of our ways to expose you for whatever you're doin' here, you prolly get arrested, nasty stuff. And what do we earn from that? Maybe a pat on the back from principalF and that's it, nothin' else. Is it worth it? Hell nah.
                t She uses her front camera to fix her hair, still speaking.
                ayeye And then there is option two: we don't tell anyone jack shit, keep it a secret with ourselves. And even step in to interact withcha, in more than one ways.
                player For what reason exactly?
                ayeye An alliance of course! We can work together ya know, we feel that you've got big plans.
                t She offers you a handshake with a wide smile on her face.
                ayeye <i>And we're asking to help ya with that, you help us, we help you. Simple and great.</i>
                player How exactly?
                ayeye We need your influence, both as a counselor and a hypnotist. You will be helping us by being our voice in PTSA. Taming the annoying, selfish, problematic teachers, students and likes of them into proper human beings by any means necessary.<br>And in return we offer you information! Getting to know dirtiest secrets of your target without even talking to them once would help ya a ton wouldn't it? <i>Oh and additionally, we can offer ourselves too...</i>
                player ...Impressive, but how can you trust me, knowing the stuff I'm capable of doing?
                ayeye You won't hypnotize me, as a token of mutual trust. So if you betray us you'll wake up to a couple of coppers knocking on your front door aye? And don't worry if we wanted to expose you we would've done it by now, as I said we got no reason to do that.
                player I see, so you want me to join your <i>cult</i> right?
                t She plays with the back of her neck,
                ayeye <i>Jeez-</i> Do I make it sound <i>that</i> weird?
                player You make your "crew" sound like an undercover organization, ayeyeF.
                ayeye Okay fine, I'll say it's just some weird friend group. Happy now? I tried so hard to make us sound cooler.
                player That one sounds more believable.
                ayeye So, ya with us?
                t You shake her hand slowly.
                player Look, no promises, but I'll think about it.
                ayeye That's what I needed to hear! Now if you don't have anything else to say I'd love to go back to my class.
                player I'll see you later, ayeyeF.
                ayeye See ya *mister counselor!
                t She leaves the room, shutting the door behind herself.
                player <i>That's... Weird, for sure. Looks like they're trying to cooperate for now, we'll see what comes out of it.</i>
				finish 
			`);
			break;
		}
        case "ayeye2s": {
			writeHTML(`
                t Having received another text of invitation from ayeyeF, you do the same stuff as the last time, put on your coat and make your way to the Vintage Street.
                t ...
                ayeye Well, welcome back to my place friendo!
                im hheyo.jpg
                ayeye But keep that voice down aight? diamondsF's asleep ya know, wouldn't be nice if we woke her up.
                player Sure, but why did you not come to my house instead then, if I may ask?
                ayeye That... was an option right? I didn't even think of that, big oops heheh...<br>Anyway, if you could excuse me I have to grab a few thingies.
                t She quickly walks into another room, still talking to you from there.
                ayeye Now where'd I leave em..? <i>Oh diamondsF ya scum of earth-</i>
                player What's it?
                ayeye This greedy whore has stuffed all my g-damn rubbers in her bag, how rude!
                player Rubbers?
                im hanoy.jpg
                ayeye My cock containers! Bulletproof vests for lil' willies! Inverted jizz cups! <i>My condoms!</i> 
                player That's a lot of ways to say condom.
                ayeye I'm takin' em all back, she should learn buying her own, slut.
                player Why do you take them now? You are not planning to do it while your roommate is asleep, right?
                im hhap.jpg
                ayeye Aww, that's exactly what I'm planning tho. <i>Don't kinkshame aye?</i>
                t She walks back inside the room you're in, looking pretty happy.
                im hhappy.jpg
                ayeye There, I'm all set sooo.
                t She tosses her phone on the couch with a wider smile on her face.
                ayeye <i>Let's get started.</i>
				trans ayeye2; name Continue;
			`);
			break;
		}
        case "ayeye2": {
            setTrust('ayeye', 75);
            setTrust("diamonds", 75);
			writeEvent(name);
            writeFunction("changeLocation(data.player.location)", "Finish up");
			break;
		}
        case "ayeye3a": {
            writeHTML(`
                t You see ayeyeF waiting for you in the west hallway, she waves at you when you two see each other.
                sp ayeye; ?gender male; Ayeye there mister counselor! Good day today!
                sp ayeye; ?gender woman; Ayeye there missy counselor! Good day today!
                player Good evening, ayeyeF. I was expecting you to have company this time though.
                ayeye Oh I did, the gal just left to home so I was just killin' some time.
                player But what if I didn't come?
                t She raises a brow.
                ayeye Then I'd just be pissed and walk home? What're you expecting me to do, sleep on the benches? <i>I mean I've done it before and never again, my poor back.</i>
                player Well then, gimme the keys.
                ayeye Righto!
                t ...
                ayeye Wooo! Thanks a ton for bringin' me in!
                im car1.jpg
                t You can't help but feel like she'll spill the drink all over herself.
                ayeye Man I love this place, they got that good good stuff. 
                im car3.jpg
                ayeye You should've gotten some too, I'd love to pay for my chauffeur!
                player Maybe later, you sure you can eat all that while I'm driving?
                t She laughs.
                ayeye I'm a proud owner of a big mouth 'kay? Just focus on the road ahead and ignore me.
                player If you say so.
                im car2.jpg
                ayeye Oh I do...
                t ...
                ayeye I take it I have to say it once more.
                t She clears her throat.
                ayeye Thanks a ton *sir! Anythin' I can do for ya?
                player How about getting to the back?
                t She pauses, her smile fading away in a moment.
                ayeye ...Really now? Not a cuddle or somethin' like that?
                player Really, now.
                ayeye Ghh fine! Can't really say no to you anyway.. But can we at least keep it quick?
                player Maaybe...
				trans ayeye3; name Continue;
			`);
			break;
        }
        case "ayeye3": {
            passTime();
            setTrust('ayeye', 85);
            setTrust("diamonds", 85);
			writeEvent(name);
            writeFunction("changeLocation(data.player.location)", "Finish up");
			break;
        }
        case "ayeye4s": {
            writeText("Just as you were thinking of checking on the roof, you find ayeyeF standing there.");
            if(checkTrust("kuro") >= 1 && checkTrust("kuro") < 63 || checkTrust("kuro") > 63){
                writeHTML(`
				    t And it appears this time she has company.
                    kuro Last time I'm saying this, it's not about the flavor!
                    ayeye Then what else? Why would you keep a lolly in ya mouth all the time?
                    kuro I'm not asking why you're always chewing on some am I now?
                    ayeye Hoo easy there, I have my reaso-<br>I think I get what you're sayin'.
                    t kuroF nods.
                    kuro It's aight hun, ya won't see me complainin' bout having a secret or two, ya chew a gum for whatever reason.
                    t She pulls the lollipop out of her mouth for a moment before putting it back in.
                    kuro And I'm suckin' this for whatevs, get what I'm sayin?
                    ayeye Pretty much, so that's the cool way of sayin' "gal that's none of your business" ain't it?
                    kuro You make it sound bad tho- Ya know I didn't mean-
                    ayeye I know I know, chill.
                    t ayeyeF tilts her head to the side.
                    ayeye Ya know I won't rest easy till I learn, right?
                    kuro Sounds like a you problem.
                    ayeye ...
                    player Ahem, hi there.
                    t As you shut the door off and walk to the roof, both girls turn their faces around to your side.
                    kuro <i>ayeyeF, d'ya think *he's here for you or me today?</i>
                    ayeye <i>I'd say it's you, ya look hella cute.</i>
                    kuro <i>Gee lesbo, thanks.</i>
                    ayeye <i>Damn you.</i>
                    player Uhm.. You girls know that I can hear you, right?
                `);
                writeDual("ayeye", "", "kuro", "", "Yep.");
                writeHTML(`
				    ayeye Yet, we're out of damns to give about it, so why don't ya just speak for yourself?
                    player Excuse me?
                    kuro She's sayin "who are you looking for on this fine day, my good *sir?".
                    ayeye Thanks a lot ms. interpreter, as if I can't speak english properly...
                    kuro Try doin' that more often then, hun.
                    ayeye I'm gonna cry, you bully.
                    t They both laugh.
                    player Well then, I'm here for ayeyeF. Is that what you wanted?
                    kuro See? It ain't that hard, and I'd rather being alone anyway.
                    ayeye kuroF..? Ya don't want me around?
                    kuro Chill missy I'm just messin' withcha, have fun!
                    t After saying your goodbyes to kuroF, you two walk downstairs to leave the building.
                `);
            }
            else if(checkTrust("kuro") == 63){
                writeHTML(`
				    t And it appears, she has company this time.
                    ayeye You don't get it do ya?
                    kuro I'd much rather not to.
                    ayeye Ghhh- Whyyy?
                    kuro Don't know, I'm not sold's all.
                    t ayeyeF shakes her head.
                    ayeye Can't you just give it a chance? I need someone to talk about it.
                    kuro Don'tcha have a roomie? <i>Whatshername</i> diamondsL.
                    ayeye diamondsF told me to shove the thing up my-
                    kuro Whoa whoa whoa! She sounded much nicer when we met..
                    t ayeyeF laughs. 
                    ayeye That's a facade, a fraud, a fake! That bitch is a uhmm.. a bitch!
                    kuro <i>How creative, hun.</i>
                    ayeye I wanna throw myself off the edge.
                    kuro I'm not spendin' a night with the coppers you jerk, no jumping off.
                    ayeye Gotta love it when ya got someone to kinda care aboutcha, even if it's for their own convenience.
                    player Ahem, hi there!
                    t You move to the roof and shutting the door behind yourself, both girls turn their heads around to your side just for kuroF to let out a yelp with her legs shaking.
                    ayeye Oh hiya playerF- kuroF do y-
                    t ayeyeF turns again to look at her friend, who's visibly leaking down her legs in front of her.
                    ayeye <i>...Ooooooookay then?</i>
                    kuro ayeyeF-
                    ayeye Na na na you can't really explain this one. Like... What the flying fuck was that?
                    t She turns around to look at your face again and starts laughing uncontrollably.
                    ayeye My god... <b>YOU CAN'T BE SERIOUS!</b>
                    player ayeyeF?
                    ayeye I'm chill, I'm chill. Just...
                    t kuroF seems to have fully gathered herself.
                    kuro ayeyeF, you know what that-
                    ayeye ...That means. I keep this between us, and ya owe me one, we've had this before hun...<br>I mean ya... cummin' in front of me is a first but I'll probably get used to that.
                    t kuroF speaks between her teeth.
                    kuro I hope the fuck not.
                    ayeye Anyway, you here for me right? Let's get goin' then.
                    player Okay..?
                    t The two of you walk to the door, kuroF looking at ayeyeF with terror in her eyes.
                    kuro D-Don't...
                    ayeye Don't worry hun, remember? We have a deal about this and you owe me one.
                    kuro ...And?
                    t ayeyeF pulls you to the other side of the door and yells before shutting it as hard as she can.
                    ayeye Ya don't owe me no more!
                    t You hear kuroF moan/scream a high pitched "BIIIIIIITCH" as you walk downstairs.
                    ayeye Peheheh- I couldn't help it.
                `);
            }
            else{
                writeHTML(`
				    ayeye Ooooh! Look who decided to come, here for the scenery or?
                    player <i>For you.</i>
                    ayeye Sweet, let's get goin' then.
                    t She picks her stuff up and you two walk downstairs to leave the building.
                `);
            }
			writeHTML(`
                t She looks up at your face.
                ayeye Sooo, where to?
                player Isn't it obvious?
                ayeye <i>Sigh,</i> ya want me to drive?
                player Oh you brought your license this time?
                ayeye Not riskin' another round of car sex, ya ruined the seats last time~
				trans ayeye4a; name Continue;
			`);
			break;
        }
        case "ayeye4a": {
            passTime();
            passTime();
            setTrust('ayeye', 100);
            setTrust("diamonds", 100);
			writeEvent(name);
            writeFunction("loadEncounter('diamonds', 'diamonds5a')", "Continue");
			break;
		}
        case "duoQuo": {
			writeHTML(`
                ayeye diamondsF! We've got a visitor tonight darlin'!
                im hheyo.jpg
				diamonds Welcome baaack!
                im images/diamonds/dhome1.jpg
                player Hi there.
                ayeye What brings you here tonight? I mean you aren't here for a game of cards right?
                diamonds Because ayeyeF could absolutely destroy you.
                ayeye Hell yea I would!
                player Lemme see..
                t None of the scenes below are written yet, if you just wanna see the pics then go on.
                trans ayeye2b; name ayeyeF 1(reverse riding);
                trans ayeye4b; name ayeyeF 2(on the bed);
			`);
            writeFunction("loadEncounter('diamonds', 'diamonds4b')", "diamondsF 1(blowjob)");
            writeFunction("loadEncounter('diamonds', 'diamonds5b')", "diamondsF 2(cowgirl)");
            writeFunction("writeEncounter('cancel')", "Go back");
			break;
        }
        case "ayeye2b": {
            if(checkFlag("ayeye", "2b") != true){
                passTime();
                addFlag("ayeye", "2b");
            }
			writeEvent(name);
            writeFunction("changeLocation(data.player.location)", "Finish up");
			break;
		}
        case "ayeye4b": {
            if(checkFlag("ayeye", "4b") != true){
                passTime();
                addFlag("ayeye", "4b");
            }
			writeEvent(name);
            writeFunction("changeLocation(data.player.location)", "Finish up");
			break;
		}
		default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "ayeye1", name: "Mouth of the Full House"},
    {index: "ayeye2", name: "Sleeping aid"}, 
    {index: "ayeye3", name: "Carwash impromptu"}, 
    {index: "ayeye4a", name: "Final visit"},
    {index: "ayeye2b", name: "In for more"}, 
    {index: "ayeye4b", name: "One gal at a time"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "ayeye1": {
			writeHTML(`
				im bj1.jpg
                ayeye This thing here, <i>*sir.</i> Aren't you using it a bit too much nowadays?
                player Urk- You...
                t She slowly rubs her hand back and forth on your crotch.
                ayeye Look, this has nothing to do with blackmailing or anythin' alright? After all I'm the one who's gone for it in the end.
                im bj2.jpg
                ayeye You wouldn't refuse a gal like me correct? I'd be so upset if ya did.
                t Her hand on your crotch slowly moves to your zippers, letting your dick out.
                im bj3.jpg
                player Ngh- ayeyeF..!
                ayeye Aaaand just look at this <i>beast</i> right here ladies, ayeyeF's got a lot to work on~
                t She grabs a condom and wraps it around your shaft while gently stroking on it.
                player Why the condom though..?
                ayeye Excuse ya *mister? Do I have to love the taste of jizz?
                im bj4.jpg
                player I didn't mean to complain, but what did you mean by "my help"?
                ayeye You'll see later, for now, just relax...
                t Your legs tense up as she moves her tongue along your length.
                im bj5.jpg
                ayeye We can talk business later mkay? <i>Just roll with it for now~</i>
                t Though it sounds somewhat fishy, you think it wouldn't be a problem for you to stop her with some hypnosis.
                player ...Fine.
                ayeye Great, now let me demonstrate what I can offer~
                im bj6.jpg
                player ...
                t With her tongue twirling around your shaft so smoothly and her hand moving on your length, you find yourself having a hard time keeping your load inside.
                ayeye Oh and enjoyin' this a lot aren't you? <i>Why don't you treat me a nice, big load then?</i>
                player I'm-
                im bj7.jpg
                t And only a few minutes in you let your load out inside the condom, rope after rope. Despite looking a little excited herself, ayeyeF keeps herself collected as she keeps milking out every last drop she can get.
                ayeye Mmmh yeahh, you just keep giving and giving nicely~
                im bj8.jpg
                player ...Christ-
                ayeye Aye! Nice job fillin' it to the brim, aaand there..!
                im bj9.jpg
                ayeye ...Would ya look at that, that load could be considered a durability test by itself.
                player Is that supposed to be a good thing?
                ayeye Just make sure they don't break in my mouth and we're good, capiche?
                player I think that wouldn't be a problem.
                im bj10.jpg
                ayeye Then, let's say <i>we'll be playin' more in the future...</i>
                t She tries to get up and almost falls on her face from how wobbly her legs are.
                ayeye Shit- Remind me not to crouch while givin' top again alright? My legs are... <i>Dead.</i>
                player I didn't even ask for it though.
                ayeye ?flag ayeye aaron; <i>Just shut up and be grateful for once.</i>
                ayeye !flag ayeye aaron; Ughh.. Ya can't be pissed about getting sucked can you?
                im hhappy.jpg
                ayeye Now, you'd better go home before diamondsF comes back, don't wanna explain her why you're here at this hour.
			`);
			break;
		}
        case "ayeye2": {
			writeHTML(`
				ayeye Ya sure you wanna lay there? I could think of prettier poses anyway. 
                im ff1.jpg
                player It's more about my view here actually.
                ayeye Oo hoho~ I see what you did there.
                t She shakes her hips a little.
                ayeye This'll be tirin', hope I won't be late for school tomorrow heh.
                player You don't have to do this at midnight, you know right?
                im ff2.jpg
                ayeye I know, but isn't that the appeal! Crowning your day with a good nice round of fucking-
                player Well then, why don't you st-
                im ff3.jpg
                ayeye Fff- Hohohoh~ Were you sayin' something?
                player Jesus- You didn't have to <i>slam</i> it that hard!
                ayeye Wah, why not?
                t You laugh.
                player You squeezed the air out of my lungs, hell...
                im ff4.jpg
                ayeye Aww, you need only say if ya want me to slow down, I'm not tryin' to knock the life outta you.
                player As if you'd agree to slow down even if I told you to.
                ayeye Sure I would, what do you take me for? A domina? 
                player But what if I said I wanted you to go faster?
                im ff5.jpg
                ayeye Then I couldn't do much but comply, the thing is...
                t She shakes her hips a little again, biting her lip.
                ayeye <i>Should I be goin' faster, *master?</i>
                player <i>Let's see how fast you can go, ayeyeF.</i>
                ayeye <i>With pleasure.</i>
                im ff6.jpg
                t The rapid motion of her hips and the little happy moans she let out with each slam make a better combination than you expected to have at this hour.
                player <i>Nghh~</i> You- You were training for this, weren't you?
                ayeye <font size= '-1'><i>Up, down, up, down.</i></font> If you count squats to be cowgirl training then yeah I guess?
                player Huff.. They sure as hell work it seems.
                t She speeds up a little more with a gleam in her eyes.
                ayeye <i>Now that's an honor being praised like this by our lewd counselor heh~</i>
                player This "lewd counselor" will not be able to hold back any longer if you keep it up like this.
                t She starts slamming her hips against yours even harder, panting heavily from the effort.
                ayeye Right, you gotta cum too don't ya? <i>I want you to do it too, so.</i>
                im ff7.jpg
                ayeye <i>Show me how badly you can fill that poor rubber, *master.</i>
                player I'm-
                t Before you can finish your sentence, you start shooting rope after rope of your cum. She sits down on your member for a few more seconds, looking satisfied.
                ayeye T-That's what I'm talkin' bout...
                im ff8.jpg
                player Huh? 
                sp ayeye; ?gender male; <i>Man, that was fuckin' crazy, that's what I'm sayin-</i>
                sp ayeye; ?gender woman; <i>Gal, that was fuckin' crazy, that's what I'm sayin-</i>
                im ff9.jpg
                ayeye Gee- Ya made that thing look like a water balloon heh?
                player You're not planning to throw it around, right?
                ayeye Maaaybe at diamondsF's face, but nah I'm not an asshole.
                player Well, if that's all for the night.
                t She slowly gets up, laughing at her wobbly legs.
                ayeye I'll see ya in school tomorrow then, good night.
                t You also put your pants on and nod your head.
                player Later, ayeyeF.
            `);
			break;
		}
        case "ayeye3": {
			writeHTML(`
                ayeye Ya know, when I first got this car, diamondsF joked about this happenin' one day... 
                im cf2.jpg
                ayeye In my own goddamn car eh?
                player You didn't even try to resist did you?
                ayeye Like it'd change a thing, you always have it your way anyway.
                im cf3.jpg
                player <i>I feel like that's not all you have to say, though.</i>
                ayeye G-Ghah..! A-At least wear a rubber you brute...
                t You pull back a little just to push it back inside, her quietly yelping with your each move.
                player That's not what I meant, ayeyeF.
                ayeye Huff... Fine! It... Sounded temptin' as hell alright? Can you blame me for wantin-
                t Her words turn to mumbles as you speed up.
                ayeye J-Jhesus.. Lemme comph... finish my damn sentence aye?
                player No luck, it's just like you said.
                im cf4.jpg
                ayeye Guhhh-
                player <i>I always have it my way.</i>
                ayeye I-I... I see...
                t She looks like her mind is too occupied to come up with anything else, so you give it all you've got.
                t She's been biting her lips to keep quiet this whole time, but as you keep speeding up she finally gives up, letting out some of the loudest moans you've heard.
                im cf5.jpg
                ayeye <b>My fucking GOD! HAVE YA NO MERCY?!</b>
                player Oh I do, actually...
                ayeye What're ya talkin' ab-
                im cf6.jpg
                ayeye <i>H-Hah? Why would y-</i>
                im cf7.jpg
                ayeye <i>Hah..?</i>
                player ...
                im cf8.jpg
                ayeye ...Geee, thaanks for the shower I guess?
                player Heh.
                ayeye Damn you.
                im cf9.jpg
                ayeye Gimme a tissue at least, don't wanna walk out covered in organic whipped cream...
                player Organic what?
                ayeye ...Ignore my descriptions mkay? They're weird.
			`);
			break;
		}
        case "ayeye4a": {
			writeHTML(`
                t ...
                diamonds Hold on hold on hold on! <b>Why does she get to have it before me?!</b>
				im alay1.jpg
                ayeye Because, you bitch, you had your turn last time.
                diamonds Ughh... No fair!
                ayeye Life ain't fair babe, first to come first to <i>come</i>.
                diamonds <i>Go to hell.</i>
                player It's actually fun to have two girls fight over your dick, but if you could please..
                ayeye <i>I'm on it, hun.</i>
                im alay2.jpg
                ayeye <i>Better now?</i>
                player <i>...Way better.</i>
                diamonds W-What about me? What about-
                t ayeyeF shakes her head, legs wrapped around your waist and her hands holding the bedframe.
                ayeye Ignore her okay? <i>I need you for myself this time.</i>
                t So you move your hips a little forward, slowly putting your length inside her.
                im alay3.jpg
                ayeye Ouuu- That's g-goood.
                diamonds S-Shut up! I don't wanna hear you moan.
                t You turn around to see diamondsF already rubbing her hand between her thighs, letting out quiet squeaks while doing so.
                player diamondsF are you..?
                diamonds S-Shut...
                ayeye C-Can you speed up a little *sir?
                im alay4.jpg
                ayeye Nnf- Oh myyy...
                player Hey ayeyeF, tell me.
                ayeye Huh?
                player <i>You get aroused from "her" watching you, don't you?</i>
                t She bites her lip, looking away with a laugh.
                ayeye Ah-Ahah... Why would I? 
                player What about you, diamondsF?
                t diamondsF pulls her hand away from her legs, looking down with a face red as a tomato.
                diamonds <font size= '-1'>M-Maybe?</font>
                player Come on now...
                diamonds Uhm...
                player ayeyeF?
                t You slam your hips forward even harder, making her shake in pleasure.
                im alay5.jpg
                ayeye Khh- FINE YEAH I DO- Feels... goood.
                diamonds H-Hah, you.. <font size= '-1'>for real?</i>
                ayeye Having my roomie watch me get railed... Ouuuu~
                im alay6.jpg
                ayeye <i>Heh heh... Hell yeaahh~</i>
                diamonds I-I've had enough..!
                t With each thrust you feel you're getting closer to your edge, but before you can finish you feel a pair of hands pushing you down.
			`);
			break;
		}
        case "ayeye2b": {
			writeHTML(`
                t <span style="color:red;" >NO TEXTS YET, THEY WILL BE ADDED LATER.</span>
				im ff1.jpg
				im ff2.jpg
				im ff3.jpg
				im ff4.jpg
				im ff5.jpg
				im ff6.jpg
				im ff7.jpg
				im ff8.jpg
				im ff9.jpg                
			`);
			break;
		}
        case "ayeye4b": {
			writeHTML(`
                t <span style="color:red;" >NO TEXTS YET, THEY WILL BE ADDED LATER.</span>
                im alay1.jpg
                im alay2.jpg
                im alay3.jpg
                im alay4.jpg
                im alay5.jpg
                im alay6.jpg
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
	{index: "ayeye1", trust: 20 ,},
    {index: "ayeye2", trust: 80 ,},
    {index: "reward", trust: 100 ,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "ayeye1": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
            writePhoneSpeech("ayeye", "", "Goooooood morning!");
            writePhoneSpeech("player", "", "ayeyeF? Good morning");
            writePhoneSpeech("ayeye", "", "Hey do you have a drivers license? I'm not asking if you have a car I just need a license");
            writePhoneSpeech("player", "", "This came a little out of blue but yeah why'd you ask?");
            writePhoneSpeech("ayeye", "", "Awesome! I will tell you why later so see you in school");
            writePhoneSpeech("player", "", "...See you then?");
			break;
		}
        case "ayeye2": {
			writePhoneSpeech("ayeye", "", "Best of mornins to ya! Gmornin!");
            writePhoneSpeech("player", "", "Good morning, ayeyeF");
            writePhoneSpeech("ayeye", "", "Say, ya got a minute to spare 4 little ole me today?");
            writePhoneSpeech("player", "", "Don't tell me you lost your license again.");
            writePhoneSpeech("ayeye", "", "...");
            writePhoneSpeech("ayeye", "", "How?");
            writePhoneSpeech("player", "", "Just a guess");
            writePhoneSpeech("ayeye", "", "Wah! bully");
            writePhoneSpeech("player", "", "How exactly am I a bully?");
            writePhoneSpeech("ayeye", "", "Bcz youll make me walk all the way to home T~T");
            writePhoneSpeech("ayeye", "", "Nah just kiddin, it's fine if ya don't drive me home");
            writePhoneSpeech("ayeye", "", "Unless?");
            writePhoneSpeech("player", "", "I'll think of it");
            writePhoneSpeech("ayeye", "", "Yaaay best counselor! ^^");
            writePhoneSpeech("ayeye", "", "Will be waitin in front of the class, maybe we can even go buy somethin from a drive thru huh?");
            writePhoneSpeech("player", "", "ayeyeF...");
            writePhoneSpeech("ayeye", "", "Plsssss");
            writePhoneSpeech("player", "", "Fine");
            writePhoneSpeech("ayeye", "", "Yayayayay! Kay I gtg bye2");
            writePhoneSpeech("player", "", "Bye then.");
			break;
		}
        case "reward": {
            writePhoneImage("images/ayeye/reward.jpg", "Art by Silver Radish");
            writePhoneSpeech("ayeye", "", "Not all characters have endings dedicated to their own, but it doesn't mean they won't show up in an ending at some point. You've completed this FH member's route minus the repeat scenes, I hope you enjoyed!");
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