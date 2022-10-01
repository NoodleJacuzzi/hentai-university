var character = {index: "diamonds", fName: "Ashley", lName: "Piece", trust: 0, encountered: false, textEvent: "", met: false, color: "#A737E3", author: "KH_Ace", artist: "Silver Radish", textHistory: "", unreadText: false,};

var logbook = {
	index: "diamonds", 
	desc: "A student who's usually quiet and well behaving, as meek as she is the real reason behind her silence is to listen to the other people talking, which efficiently makes her the ears of the Full House.",
	body: "Not much to talk about with her body unless you try to be creative and define busty in as many ways as you can.",
	clothes: "A pretty pair of glasses, a ribbon used like a bowtie on a proper plain school uniform, you can tell she's trying so hard not to be chewed on about her clothing.",
	home: "She lives in the same flat as her (somehow) best friend ayeyeF.",
	tags: "Titjob, cum on glasses, MFF threesome.",
	artist: "Silver Radish",
	author: "KH_Ace",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
    {index: "intro", name: "You see a student on the streets.", location: 'street', time: "Evening", altImage: "", altName: "", itemReq: "", trustMin: 9, trustMax: 9, top: 0, left: 0, day: "both",},
	{index: "introAlt", name: "You see diamonds outside.", location: 'street', time: "Evening", altImage: "", altName: "", itemReq: "", trustMin: 10, trustMax: 10, top: 0, left: 0, day: "both",}, 
    {index: "diamondsSecond", name: "diamonds is outside again.", location: 'street', time: "Evening", trustMin: 30, trustMax: 30, itemReq: "", top: 0, left: 0, day: "both",},
    {index: "diamonds1a", name: "diamonds is waiting for you.", location: 'northHallway', time: "Evening", itemReq: "", trustMin: 40, trustMax: 40, top: 0, left: 0, day: "both",},
    {index: "diamonds2a", name: "You find diamonds waiting in the hallway.", location: 'westHallway', time: "Evening", itemReq: "", trustMin: 65, trustMax: 65, top: 0, left: 0, day: "both",},
    {index: "diamonds3a", name: "diamonds is outside again.", location: 'street', time: "Evening", itemReq: "", trustMin: 75, trustMax: 75, top: 0, left: 0, day: "both",},
    {index: "diamonds4s", name: "You can visit diamonds tonight.", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 85, trustMax: 85, top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
    writeHTML(`
		define player = sp player;
        define diamonds = sp diamonds;
		define serious = sp serious;
        define ayeye = sp ayeye;
        define nagatoro = sp nagatoro;
        define nikki = sp nikki;
        define neet = sp neet;
        define clubs = sp clubs;
        define hearts = sp hearts;
        define spades = sp spades;
        define kuro = sp kuro;
        define seriousa = sp serious; im images/serious/seriousa.jpg; altColor #C00157;
	`);
	switch (name) {
		case "cancel": {
			unencounter("diamonds");
			changeLocation(data.player.location);
			break;
		}
        case "intro": {
            passTime();
            setTrust('ayeye', 20);
            setTrust("diamonds", 20);
            writeHTML(`
                t While on your back home, you come across a student from the school.
                im sheyo.jpg
                diamonds Oh hey there, you must be the new counselor in the school right?
                player Why yes I am, and you must be diamondsF if memory serves.
                diamonds You have it right *sir, diamondsF diamondsL to be precise.
                player If you don't mind me asking, what were you doing here?
                t She looks around nervously.
                diamonds A-Am I supposed to be somewhere else? I didn't know!
                player I was just curious.
                diamonds Oh... Well I was out shopping for groceries and I uhh...
                im suhm.jpg
                diamonds ...Could I ask you to walk me home please? ayeyeF said a group of girls stopped her while she was out recently. I'm a little nervous they might cross me too.
                player You were her roommate right? Well I don't think I have anything better to do, so sure.
                im shappy.jpg
                diamonds Thanks, I'm not very talkative but your company will still be enjoyable.
                player It's fine if you don't wanna talk, I'm not going to force you.
                diamonds That means a lot, thank you.
                t ...
                t The two of you stop in front of an apartment building in Vintage Street, it looks newer than the buildings surrounding it, making the are look "less vintage".
                player So this is the place?
                im images/ayeye/aday.jpg
                diamonds It is, thank you for-
                ayeye Thank you for bringin' my roomie in, playerF!
                im duo1.jpg
                diamonds Ugh.. You two already know each other right?
                ayeye Ayey! But... Heheheh~
                t ayeyeF keeps looking at the two of you.
                ayeye What took ya two too long to come back heh? diamondsF you nasty littl-
                diamonds <b>S-STOP..!</b>
                im duo2.jpg
                diamonds ayeyeF can you <b>not</b> do this while there are other people around?
                ayeye Pfffft fine fine... I'm sorry.
                t diamondsF still looks a little annoyed about the joke her friend made.
                player Hey, why don't I get any apologies?
                im duo3.jpg
                ayeye Because, dear, we already know ya liked the idea. So why not keep it shut like we did?
                diamonds I mean you also like-
                ayeye Shut up. Anyway playerF, thanks for bringing Ms. diamondsL in but it's getting a lil late so...
                t You nod your head and wish both of them a good evening as they return to their home.
                player <i>"We already know ya liked the idea." Peh, maybe...</i>
                finish
            `);
			break;
		}
		case "introAlt": {
            passTime();
            setTrust('ayeye', 20);
            setTrust("diamonds", 20);
            writeHTML(`
                t While on your way back home from school, you get to see a familiar face.
                im sheyo.jpg
                diamonds Hey *mister counselor! How are you doing?
                player Just playerF is fine diamondsF, and thanks. What are you doing here?
                diamonds I was out for grocery shopping, but looks like sun's about to set huh?
                im suhm.jpg
                diamonds ...Could I ask you to walk me home please? ayeyeF said a group of girls stopped her while she was out recently. I'm a little nervous they might cross me too.
                player Sure thing, I don't have anything better to do anyway.
                im shappy.jpg
                diamonds Thanks, I'm not very talkative but your company will still be enjoyable.
                player It's fine if you don't wanna talk, I'm not going to force you.
                diamonds That means a lot, thank you.
                t ...
                t The two of you stop in front of an apartment building in Vintage Street, the building is looking newer than the ones surrounding it, messing with the "vintage" atmosphere of the place.
                player So this is the place?
                im images/ayeye/aday.jpg
                diamonds It is, thank you for-
                ayeye Thank you for bringin' my roomie in, playerF!
                im duo1.jpg
                diamonds Ugh.. Don't treat me like a child..!
                ayeye But darling, even a child knows not to follow a stranger doesn't it? Anyway...
                t ayeyeF keeps looking at the two of you.
                ayeye What took ya two too long to come back heh? diamondsF you nasty littl-
                diamonds <b>S-STOP..!</b>
                im duo2.jpg
                diamonds ayeyeF can you <b>not</b> do this while *he's around?
                ayeye Pfffft fine fine... I'm sorry.
                t diamondsF still looks a little annoyed about the joke her friend made.
                player Hey, why don't I get any apologies?
                im duo3.jpg
                ayeye Because, dear, we already know ya liked the idea. <i>So why not keep it shut like we do~?</i>
                diamonds Actually you do t-
                ayeye Shut up. Anyway playerF, thanks for bringing Ms. diamondsL in but it's getting a lil late so...
                t You nod your head and wish both of them a good evening as they return to their home.
                player <i>"We already know ya liked the idea" huh? Maaaybe...</i>
                finish
            `);
			break;
		}
		case "diamondsSecond": {
            setTrust('diamonds', 35);
            setTrust('ayeye', 45);
            passTime();
            writeText("As you're taking your evening walk, you notice diamondsF talking with someone.");
			if(checkTrust("serious") >= 10){
                writeHTML(`
				    diamonds I... Are you really sure?
                    t The boy she's talking with tilts his head to the side, looking her dead in the eye.
                    seriousa Not too proud of it, but I gotta admit it somehow works.
                    diamonds Do I really have to? I believe I don't need any help <i>of that kind</i>.
                    im images/serious/bystander1.jpg
                    seriousa diamondsF... Just do what I'm askin' from you okay? I mean it'll happen sooner or later, by *him or someone else, via hypnosis or not but it'll happen.
                    diamonds ...Can't I just live without it?
                    seriousa ayeyeF keeps complaining about how noisy you are with the little vibe ya got yourself, you know right?
                    t diamondsF looks away, hiding her face with her one hand.
                    diamonds O-Okay you've got me, but...
                    seriousa No "buts", diamondsF. You were the one who suggested this idea before I even thought of it.
                    t seriousF tilts his head to your side without looking.
                    seriousa Anyway, looks like you've got a guest too so... See you later?
                    diamonds ...Can't you just stay a little longer-
                    seriousa Awww... Ya really want me to stay that much? Like a husband calming down his wife giving birth by holding her hand?
                    diamonds You just made it sound weird dude... I changed my mind just get lost.
                    seriousa ...With all my due respect I'm gay and therefore not interested in that "husband" scenario, not even a bit.<br><font size= '-1'><i>Who'd wanna wake up to a pair of goddamn milk jugs everyday anyway?</i></font>
                    diamonds Pair of what?!
                    seriousa Bye bye!
                    t As seriousF walks away, you find yourself alone with diamondsF.
                    im suhm.jpg
                    diamonds He's a huge nuisance, and him being right only makes it more frustrating.
                    player An odd way of saying hi, diamondsF.
                    diamonds I'm sorry if I'm being rude but I don't feel like doing greetings today, I would rather get straight to the point.
                `);
            }
            else{
                writeHTML(`
				    diamonds ...Just like that huh?
                    nikki It just happens so, could not help but ask her about it.
                    diamonds She kind of reminds me of ayeyeF if I'm being honest here.
                    nikki I can see what makes you think that, and I can't say you're the only one who thinks that way.
                    t nikkiF checks the time as if she needed to hurry somewhere.
                    diamonds Well, people also that say we, I mean you and I are a lot like each other as well. What do you make of that?
                    nikki Nothing, I don't think opinions like these are worth my time. <i>Yet</i> I think they might have a point.
                    diamonds Oh cool, so are we also going to be best buddies like ayeyeF and her? 
                    nikki You're taking it a little too far.
                    diamonds I was kidding, no worries.
                    t nikkiF looks at the time again, her lips curving for a quick smile.
                    nikki So was I, maybe we could hang out some time. But for now I'll just make my way home.
                    diamonds Yes that's fair, see you later nikkiF!
                    t With nikkiF walking away you decide to finally show yourself.
                    player Hey diamondsF!
                    im sheyo.jpg
                    diamonds Hello playerF! Fancy meeting you here.
                    player ayeyeF said you wanted to meet me here, is there something?
                    im suhm.jpg
                    diamonds Uhmm... Yes, I will be direct with it if I may.
                    player Sure thing? What was it?
                `);
            }
            writeHTML(`
				t She shuts her eyes and takes a deep breath.
                diamonds <font size= '-2'>Can we have intercourse?</font>
                player What the?
                t She fixes her posture, clears her throat and nods.
                diamonds Ahem... You heard what I said. I am requesting your "special treatment", the one you used with several other students and townsfolk alike.
                player ...
                diamonds Don't get me wrong, I don't want this out of pure "lust", I just- Have my reasons...
                t She nervously looks down on her chest and back at your face.
                diamonds <i>And I take it you have a reason to want this too...</i>
                player ...Seems like you already know enough huh? I don't think this one was some baseless bluff.
                diamonds You can't just have sex in the school more than once and expect no one to notice *sir, especially in a school where you can find a curious bunch like me and my friends.
                player Wow... Is that the same group ayeyeF was talking about?
                diamonds The "Full House", that's what we call it. A poker hand where the player has three cards from one kind and a pair of another kind. 
                player I think that's an odd name for a friend group.
                im shappy.jpg
                diamonds Well, I am the one who came up with the name and uhm... They just went with it so.
                t She checks the time, and then the sky.
                diamonds Aww shucks, it's getting late again.<br>Could you maybe..?
                player Fiiine, let's get going.
                t ...
                ayeye And ya just asked for it like that?! Straight to the point that's my gal!
                im duo1.jpg
                diamonds I can still change my mind..! I'm not too comfortable with talking about it anyway...
                ayeye But I am comfortable, ya whore.
                im duo3.jpg
                diamonds <font size= '-1'>Laugh all you want, <i>you are the only whore here.</i></font>
                ayeye I can hear you.
                diamonds That was my intention.
                t ayeyeF laughs with her hand on diamondsF's shoulder.
                ayeye And with that, my poor heart has been broken into pieces by my dear roomie. I guess I'll see you two later!
                im dugh.jpg
                player Nice roommate huh?
                diamonds You don't say... Anyway, I better go inside before she notices she can eat the ice cream on my side as well, see you later playerF!
                player I really hope she doesn't... And goodbye diamondsF!
                finish
			`);
			break;
		}
		case "diamonds1a": {
			writeHTML(`
				t You find diamondsF standing by the door of your office with a nervous look on her face. She waves at you the moment she notices you.
                diamonds Hey playerF! Over here! It's me!
                player I can see you diamondsF.
                diamonds Heh... I guess I'm not as good at standing out as I am at hiding.
                player Why are you doing that anyway, why hide and be the "bug"?
                t She puts her hand on her chin.
                diamonds Each member of this group have their own specialities, for example I make the ears, ayeyeF makes the mouth. Skye gets the nose and two E's are the eyes and the hand, if that explains anything.
                player ...What?
                diamonds Divided we are not too good at anything, but together we can make sure we know about everything there is to know around us.
                player That's just weird, you know right?
                t She laughs with a hand covering her mouth.
                diamonds Fully aware, *sir. And would you be so kind to tell me why that's a problem?
                player It- I don't think it is actually a problem.
                diamonds Trust me, we all have our reasons to be a part of this thing.
                t She lets out another sigh and checks the time.
                diamonds Now, could we get started before the sun goes down?
                trans diamonds1; name Continue;
			`);
			break;
		}
        case "diamonds1": {
            passTime();
            setTrust('ayeye', 60);
            setTrust("diamonds", 60);
			writeEvent(name);
            writeFunction("changeLocation('northHallway')", "Finish");
			break;
		}
        case "diamonds2a": {
            if(data.player.vegetarian != true){
                writeHTML(`
                    t As you're walking through the hallway to the west, you witness diamondsF talking with another student.
                    diamonds Well, I don't think I could overcome such amounts of stress, what you're doing is worth praise.
                    t The boy she's talking with shakes his head, looking a little confused.
                    nagatoro I mean, what gives you the impression that crossdressing would be a stressful hobby?
                    diamonds Ah- I... I don't know actually, it was for me at least. As a kid whenever I wore pants my brother would laugh and say stuff like "Great, my sister is looking more handsome than her brother again today." Heheh...
                    nagatoro Awww, what's wrong with looking handsome though? Not my best advice but you can't look that bad in a pair of jeans if you wanna try it sometime.
                    diamonds Jeans huh..?
                    nagatoro Just a funny thought of course, I'm not some kinda fancy female fashion designer now am I? I make cute boys look cuter that's all.
                    diamonds I also wonder how it'd be if I were a boy, would I be a pretty one?
                    t nagatoroF steps back, looks thoughtful for a moment before bursting into a laughter.
                    nagatoro You would better change your name though <i>diamondsF</i>, there can only be one nagatoroF in this school.
                    diamonds Heheh, a namesake right? I mean if I changed my name to nagatoroF you could always change yours to diamondsF though.
                    nagatoro diamondsF nagatoroL..? I would cry.
                    diamonds nagatoroF diamondsL... 
                    nagatoro May I have my name back? It's rude to take someone's name without their permission.
                    t Both of them laugh a little.
                    diamonds Well then, I'll see you in the class I guess. 
                    nagatoro ?flag serious club; Sure thing, oh and if you know more cute bois, lemme know.
                    nagatoro !flag serious club; Sure thing, byebye!
                    t She walks towards the school entrance, just to bump into you on her way. 
                `);
            }
            else{
                writeHTML(`
                    t As you're walking through the hallway to the west, you witness diamondsF standing by herself.
                    player diamondsF?
                `);
            }
			writeHTML(`
                diamonds Eep! O-oh, it's you *master...
                player Pfft, *master?
                diamonds Y-Yes, ayeyeF said I could call you that, and I can't think of any reason not to.
                t She pulls down the hem of her skirt.
                diamonds E-Especially knowing what we'll be doing next, right?
                player You were a little hesitant last time though?
                diamonds Yes but... No matter how much I tried I couldn't get the last time out of my mind.
                player Well then, <i>we'd better deal with it.</i>
                t She looks down.
                diamonds Lead the way...
				trans diamonds2; name Continue;
			`);
			break;
		}
        case "diamonds2": {
            passTime();
            setTrust('ayeye', 70);
            setTrust("diamonds", 70);
			writeEvent(name);
            writeFunction("changeLocation('northHallway')", "Finish");
			break;
		}
        case "diamonds3a": {
			writeHTML(`
                t While walking down the street, you notice diamondsF waving at you.
                diamonds Hey-o ma- errrm playerF!
                im sheyo.jpg
                player Hey there diamondsF, you're out again?
                diamonds Yes... Lost a bet with ayeyeF so she gets to have me go out fetch the stuff while she lays her ass down at home.
                t She sighs.
                diamonds Aaaanyway, it may not be bad as I thought. L-Like, I wouldn't get to see you if I stayed home right?
                player Oh? Anything you wanted to tell me?
                diamonds Yes~ I mean... I guess?
                im suhm.jpg
                diamonds What... <i>what exactly did you do to me..?</i>
                player Hm?
                t She wipes some sweat off her forehead.
                diamonds A-After last time, when I tried to... You know-
                t Her face gets redder as she keeps speaking.
                diamonds I-It was a mess on my bed and ayeyeF started laughing her ass off the moment she saw it~
                player I... Can picture her doing that-
                diamonds <i>She choked on her own saliva laughing and collapsed on the floor, too-</i>
                player I can picture her doing that, too.
                t You laugh a little.
                diamonds It was... Different, you get what I'm saying?
                player Think I do, so you're more into it by now huh?
                t She looks down.
                diamonds <i>Would you like a demonstration, *master?</i>
				trans diamonds3; name Continue;
			`);
			break;
		}
        case "diamonds3": {
            passTime();
            setTrust('ayeye', 80);
            setTrust("diamonds", 80);
            writeEvent(name);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "diamonds4s": {
            writeHTML(`
                t Just as you were about to go to bed, you receive a call from the two friends like usual, though this time the caller is different.
                diamonds H-Hey, would you mind coming over tonight *master?
                player diamondsF? What's that for?
                diamonds Just.. Come over.
                t So you put on your coat and leave home.
                t ...
                ayeye Aye diamondsF! Cmere and say hiya to our nighty regular counselor!
                im images/ayeye/hhappy.jpg
                diamonds I'm busyyyy.
                ayeye Ya goddamn- Don't mind her 'kay? She's a bit out of her mind today.
                player What do you mean?
                ayeye You'll see!
                diamonds Hiya- I ugh hi there playerF!
                im dhome1.jpg
                player ...I think you were right ayeyeF.
                ayeye I'm always right, this bitch hasn't put her toy down the whole day.
                diamonds I mean I'm willing to put it down if you just use your fin-
                ayeye <b>MY HANDS ARE TIRED I MADE YA CUM THREE TIMES ALREADY Ya INSATIABLE LITTLE CUNT!</b>
                diamonds <i>Mmmfh you didn't have to call me that..</i>
                t diamondsF rubs her thighs while saying that.
                ayeye I'm not even your... GREAT, I think she has a degradeé fetish or something now, just fuckin' great. Look what you've done to her ya *bastard.
                im dhome3.jpg
                player Seems fine to me.
                diamonds <i>Hehehe~</i>
                ayeye I mean to each their own I don't give a shit but now I have to live with this piece of walking fuckmeat, and I'm not very happy with that.
                im dhome2.jpg
                diamonds <i>You'll get used to it though, don't be all whiny.</i>
                ayeye Kinda miss the old you, ya know, the one that had a brain.
                player Not very nice of you, ayeyeF.
                im images/ayeye/hanoy.jpg
                ayeye Oh okay then *mister nice guy, I'm gonna go to bed so y'all better not be loud 'kay? Night! 
                t She then shuts the door and leaves the room, leaving you two alone in the room. diamondsF turns her around to look at you.
                diamonds H-Heheh...
                player You are doing this on purpose aren't you?
                diamonds ...Maybe a bit, it's fun to mess with ayeyeF.
                t You laugh as she unties her hair and takes her apron off, then folding and putting it on the coffee table nearby.
                player I thought so too, well did you have anything in mind for tonight?
                diamonds Actually, yes I do have an idea...
                trans diamonds4a; name Continue;
            `);
			break;
        }
        case "diamonds4a": {
            setTrust('ayeye', 90);
            setTrust("diamonds", 90);
			writeEvent(name);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "diamonds5a": {
            writeEvent(name);
            addFlag('diamonds', 'complete');
            addFlag('ayeye', 'complete');
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "diamonds4b": {
            if(checkFlag('diamonds', '4b') != true){
                passTime();
                addFlag('diamonds', '4b');
            }
			writeEvent(name);
            writeFunction("changeLocation(data.player.location)", "Finish up");
			break;
		}
        case "diamonds5b": {
            if(checkFlag('diamonds', '5b') != true){
                passTime();
                addFlag('diamonds', '5b');
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

var eventarray = [ 
	{index: "diamonds1", name: "A different approach?"},
    {index: "diamonds2", name: "Not necessarily a virgin"}, 
    {index: "diamonds3", name: "Getting desperate"}, 
    {index: "diamonds4a", name: "Broken beyond repair"},
    {index: "diamonds5a", name: "No going back"}, 
    {index: "diamonds4b", name: "Practice makes perfect"},
    {index: "diamonds5b", name: "Extra effort"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "diamonds1": { 
			writeHTML(`
				t ...
                diamonds It feels like my heart is about to stop beating..
                player You'll be fii- <i>Whoa~</i>
                im dtit2.jpg
                diamonds D-Don't stare too hard..!
                player Have I- I didn't even tell you to-
                t She looks down on the floor, drawing circles with her right foot. It's clear she's embarrassed about how she's hurried up the process.
                diamonds Right... I just wanted to get done with this as soon as possible. I apologize.
                player I see, you sure you want to do it now?
                im dtit1.jpg
                diamonds I... I'm not very sure. Like, yes I want it now but I still don't feel all ready for it, if it makes any sense.
                player Don't worry diamondsF, I understand. And well if you aren't feeling ready for it, we could try something else instead, <i>a different approach.</i>
                im dtit3.jpg
                diamonds A different approach..?
                t Her eyes keep darting between your face and her own breasts for a while until she finally understands what you have in mind.
                im dtit4.jpg
                diamonds E-Eeeh?? Really..?
                player If you had something else in mind, please go ahead.
                t She moves closer slowly with a defeated look on her face.
                diamonds B-Be gentle, okay? They are se-<b>HNSITIVE..!</b>
                im dtit5.jpg
                diamonds He-heeey~ I... *huff* wasn't readyyy..!
                player I am merely holding them diamondsF, see? I'm not even moving my fingers, now calm down and tell me when you're ready for more.
                t She mutters something to herself with her eyes shut, in a few seconds her breathing returns to normal and she gives you the signal to continue by nodding her head once quickly.
                player Fine then, now sloowly...
                im dtit6.jpg
                diamonds Eep-
                t She keeps yelping and biting her lips as you slowly move your hands on her breasts. You can see the panic in her eyes when you stick your tongue out.
                diamonds That... Would be too much for me to handle~
                t You go for it anyways, she struggles to keep quiet with your tongue on her sensitive nipples.
                im dtit8.jpg
                diamonds Fuhhh... It's so wrong I'm-
                player Hm? What's wrong?
                im dtit7.jpg
                diamonds D-Don't look..! I'm...
                t She pushes you away gently and walks back with her legs shaking, you look down to see the a "puddle" beneath her.
                player Have you..? Just from your..?
                diamonds <b>SHUT UP..!</b>
                t She pulls the hems of her skirt down and instinctively wipe the mess between her legs just to realize how she's making it even worse for herself, with a stain on her skirt.
                diamonds <font size= '-1'>Fuck...</font>
                player How did you..
                diamonds <b>I DON'T KNOW!</b> I-It just happened... This is so embarrassiiing.
                t She looks down on her skirt and the puddle on the floor before laughing with her head in her hands.
                diamonds <i>I'd kill myself if ayeyeF found out about this one-</i>
                player Need me to walk you home?
                t She nods, so both of you leave the school and make your way back to her home.
			`);
			break;
		}
        case "diamonds2": {
			writeHTML(`
                t ...
				diamonds I... Are you a hundred percent sure we're safe here?
                im dvt2.jpg
                player I would normally say yes, but your little friend group has made it harder for me, you know.
                diamonds T-they won't be a problem, I requested them stay away from here for a while...
                player Great, <i>we don't need any witnesses do we?</i>
                diamonds No *sir, I mean *master-
                player Now, let me ask you.
                t She looks at you confused, you continue talking with a calmer tone.
                player Until this point, you have had the option to change your mind, right?
                diamonds I did, you're right.
                player But now you're here, after turning down all the chances you had of staying out of this. But why?
                diamonds I'm... <font size= '-1'>They told me I would have-</font>
                t You shake your head.
                player There is no way I'm buying that lie, diamondsF.
                im dvt1.jpg
                diamonds E-eeeh? But they-
                player They may have done or said anything, <i>but you and I both know that wasn't what kept you in this deal.</i>
                diamonds ...
                player <i>Why don't you just admit it already?</i>
                diamonds No...
                t Her eyes widen as she watches you put your pants back on, shaking her head to the sides slowly.
                diamonds No no no no you don't have to do this~
                player I won't do it if you just say it.
                diamonds I stayed because I-
                im dvt3.jpg
                player Because you what?
                diamonds <b>BECAUSE I WANTED IT ALRIGHT?</b>
                t She takes deep breathes to calm herself down.
                diamonds Since the first time I've heard of you, of what you're doing, I couldn't help but keep thinking about this, me being the one under. Was that what you wanted to hear?
                player <i>Precisely.</i>
                im dvt4.jpg
                player Now, if you were the one who wanted it all along, why are you so pressed about it? You're just getting what you wanted here aren't you?
                diamonds It doesn't work like that!
                player If you keep telling yourself that, you can't expect it to work.
                diamonds ...
                player For now, let's just get starte-
                im dvt5.jpg
                diamonds <b>KHHHHH-</b>
                player ...Wait.
                t You pull your member back a little bit and take a look, what you see is not really unexpected, but not very pleasant either.
                im dvt6.jpg
                player Oh right...
                diamonds D-Don't tell me-
                player I umm... Will help you clean after.
                t She takes a deep sigh.
                diamonds I expected the mess, but the feel was... <i>Something else.</i>
                player Great then, so I take it you're ready for more.
                diamonds M-More..?
                t You get back to moving your hips, making her squeal under you.
                im dvt7.jpg
                diamonds Haah~
                player Tell me how it feels, diamondsF.
                diamonds F-Feels great...
                player Just the way it should be, now let's think together.
                t You speed up a little as she lets out another yelp.
                player That's only your first time, and yet you're enjoying it aren't you?
                t She bites her lip and nods, so you pick the pace up a little more.
                player And you know, it only goes up from here, every time we do this again it'll feel better than the last time.
                diamonds Mmmmhmmm~
                player <i>Way better.</i>
                diamonds <i>Yeeeeeh-</i>
                im dvt8.jpg
                player Ghh- You're taking it pretty good for someone doing it for the first time.
                diamonds <b><i>I'm being torn apart heeeere-</i></b>
                player Don't worry, it'll be over soon~
                diamonds ...I can't hold it in any longer anyway, p-please cum with me *master~
                t You take a deep breath and start giving it your all, leaving her in sweat.
                diamonds I'm- <i>Cummiiihn~</i>
                t You finally slow down as you shoot rope after rope of warm jizz inside the condom you're wearing. 
                im dvt9.jpg
                diamonds My god... H-Have you?
                t You nod and slowly pull your shaft out of her.
                im dvt10.jpg
                diamonds Hah~ It went, better than I expected?
                player To be fair, I think I could say the same. You did amazing, diamondsF.
                im dvt11.jpg
                diamonds I- Heyy noo I did nothing worthy of praise~
                player For a first timer it was pretty good, now, let's get you some tissues.
                t She looks down with a slightly redder face.
                diamonds Thank you-
			`);
			break;
		}
        case "diamonds3": {
			writeHTML(`
				t ...
                player Soooo?
                diamonds I errm... actually had something <i>different</i> in mind this time.
                player Like what?
                t She takes a notebook out of her bag, puts it on the ground and uses it as a soft floor to kneel on.
                diamonds Ghhh- My knees hurt a bit but... it'll be fine~
                t Saying that, she pulls your pants down.
                player Are you really gonna..?
                im tj1.jpg
                diamonds In public? Yes I will, it's unlikely we'll be seen anyway. 
                t Her warm breasts enveloping your hard member has you shaking in place, and she seems to be well aware of it.
                diamonds Oh, I knew you would love this, especially if I do a little bit-
                t She starts slowly moving them on your length, watching your face for a reaction while speeding up steadily.
                im tj2.jpg
                player Guhhh... W-Where did you even learn doing this?
                diamonds I had the idea you liked my errrr- Yes, <font size= '-1'><i>so I asked ayeyeF what I could do and she told me that...</i></font>
                im tj3.jpg
                diamonds And it looks like she gave me genuine advice for a change, you seem to be enjoying it.
                player Well obviously-
                diamonds Great... Because I'd feel guilty if I were the only one to enjoy this~
                t With that she speeds up even more, watching your face for reactions and adjusting her pace accordingly.
                player Jesus- You sure it's your first time doing this?
                diamonds It is, a-and yes it feels great... Are you errrm..?
                player Am I what?
                t You see a naughty gleam in her eyes for a split second as she pushes her tits together.
                diamonds <i>Ready to cum, *master?</i>
                player <i>Nghh- I am~</i>
                diamonds Then, let it all out for me will you? <i>I would love a mess about right-</i>
                im tj4.jpg
                diamonds <i>...Now!</i>
                t She slows down as you let your load out on her tits and face, looking around before wiping the jizz off herself with one finger.
                diamonds H-Heh... It's really warm, I think I like it...
                t She then slides her mask down to clean her finger with a proud looking face.
                im tj5.jpg
                diamonds How do I look?
                player ...
                im tj6.jpg
                diamonds I could get used to that..
                im tj7.jpg
                diamonds Heh heh heh...
                t From the looks of it, there's no fixing her at this point. She also seems to be aware of that herself...
                diamonds Can't wait for the next time already, <i>*master~</i>
                t ...And taking it surprisingly well.
			`);
			break;
		}
        case "diamonds4a": {
			writeHTML(`
                player Not even a second to waste huh?
				im bj1.jpg
                diamonds Delaying it will only make me want it more so, <i>not a single second to waste.</i>
                t Her lips gently moving along your length, she keeps mumbling as she moves her head up and down.
                player Hnn- You don't have to wrap your tits around it every time you know.
                diamonds Oh? But you seem to like them a lot...
                player I do but- I'd rather not cumming until you get to the real thing.
                diamonds <i>Ooooooh, you only had to say.</i>
                im bj2.jpg
                player ...
                t She is definitely an amateur, but her desperation (and maybe her boobs wrapped around your dick) easily make up for her lack of experience.
                diamonds <i>Mmmmfhhhh-</i>
                t She holds your left hand and pulls it on her head, asking you to help her out in a way.
                im bj3.jpg
                player ...Alright then, hit my leg if you need a breather.
                t She keeps mumbling words as you push her head up and down, she starts puckering her lips and moving her tongue around your member while her head is moving.
                player Ghhh.. Going great, but how about..
                im bj4.jpg
                diamonds <font size= '-1'>Eep..!</font>
                player Knew it...
                t Her eyes roll back as you play with her nipples, moving her head as fast as she can. You know you won't be lasting much longer if this keeps up.
                player diamondsF... I'm gonna.
                t She doesn't say anything, neither does she slow down a little so you just hold her head down and...
                im bj5.jpg
                diamonds ...
                player ...
                t You let out an entire load in her mouth as she watches, eyes widening for a while before rolling back again.
                im bj6.jpg
                player ...Not bad for your first time.
                diamonds T-Thanks..
                t After staying like that for a while, you clean off and make your way back home.
			`);
			break;
		}
        case "diamonds5a": {
			writeHTML(`
                player Urk-
				ayeye <b>diamondsF you fuckin' bitch!</b>
                im dbr1.jpg
                diamonds <i>Heheheheh, mine.</i>
                t She keeps slamming herself on your dick hungrily, moaning louder and louder with each move.
                im dbr2.jpg
                diamonds <b>More, MORE!</b>
                t You start helping her out by pushing her up and down as well, her screaming in pleasure at this point.
                diamonds <b>HOW'S THAT HUH? HOW IS IT BEING THE ONE WATCHING?</b>
                ayeye You're outta your damn mind, that's what. <font size= '-1'>It's hot tho.</font>
                t Having already warmed up with ayeyeF, it takes you almost no time reaching your edge with that shaking mess on top of you.
                player diamondsF I am-
                diamonds <i>Ihnsiiiide~</i>
                ayeye What the fuck? diamondsF no-
                im dbr3.jpg
                diamonds <b>diamondsF yeeehs..!</b>
                t She keeps bouncing up and down as you pump your load inside her, her moans making even ayeyeF give up and play with herself.
                ayeye You are... You'll regret it ya dumbass... <i>My god!</i>
                im dbr4.jpg
                diamonds <i>Mooooore..! Mooooooooore..!</i>
                im dbr5.jpg
                ayeye I... Think you broke her-
                player Yeah...
                diamonds <i>I said more!</i>
                t She doesn't stop bouncing even once you're done cumming, not even giving you a second to rest.
                im dbr6.jpg
                player Nrk-
                diamonds <b>YEEEEEHS~ I WANT MOOOOOORE~</b>
                ayeye M-Me next goddammit! I can't just lay here and watch it all night.
                t As you feel the second load coming, you already know it'll be a long, tiring night.
			`);
			break;
		}
        case "diamonds4b": {
			writeHTML(`
                t <span style="color:red;" >NO TEXT YET, THESE SCENES WILL BE WRITTEN LATER</span>
				im bj1.jpg
                im bj2.jpg
                im bj3.jpg
                im bj4.jpg
                im bj5.jpg
                im bj6.jpg
			`);
			break;
		}
        case "diamonds5b": {
			writeHTML(`
				t <span style="color:red;" >NO TEXT YET, THESE SCENES WILL BE WRITTEN LATER.</span>
                im dbr1.jpg
                im dbr2.jpg
                im dbr3.jpg
                im dbr4.jpg
                im dbr5.jpg
                im dbr6.jpg
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
	{index: "reward", trust: 100 ,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
            writePhoneImage("images/diamonds/reward.jpg", "Art by Silver Radish");
            writePhoneSpeech("diamonds", "", "Not all characters have endings dedicated to their own, but it doesn't mean they won't show up in an ending at some point. You've completed this FH member's route minus the repeat scenes, I hope you enjoyed!");
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