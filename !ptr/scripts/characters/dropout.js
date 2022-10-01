var character = {index: "dropout", fName: "Chloe", lName: "", trust: 0, encountered: false, textEvent: "", met: false, color: "#50528F", author: "KH_Ace", artist: "Pastel Bitch", textHistory: "", unreadText: false,};

var logbook = {
	index: "dropout", 
	desc: "Dropout student from the university who works as a prostitute for a living. Although, her body language and enthusiasm makes you feel like she isn't bothered by having to earn her life this way at all.",
	body: "She has a petite body with long, purple hair and a pair of pretty eyes like a cherry on top. Her curves are not to be underestimated as long as you don't compare it to the rest of the townfolk, maybe you could get used to seeing breasts that aren't the size of gorgeous pumpkins from time to time.",
	clothes: "You can tell she doesn't stick with only a single dress, that said she usually wears a pretty pink-white skirt under her default school uniform.",
	home: "If we put the comedy aside and avoid saying that she belongs to the streets, the only place she calls 'home' is the hotel room in which she serves her clients.",
	tags: "Female(Woah Ace, really?), Prostitution, Footjob, Facesitting, Hardcore, Femdom.",
	artist: "Pastel Bitch",
	author: "KH_Ace",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro", name: "You see something looking like a business card on the ground", location: 'street', time: "Evening", altImage: "images/dropout/image.jpg", altName: "Purple card", itemReq: "", trustMin: 0, trustMax: 0, top: 0, left: 0, day: "both",}, 
    {index: "dropoutMenu", name: "You can try visiting dropout (better bring $20)", location: 'street', time: "Evening", trustMin: 10, trustMax: 100, itemReq: "", top: 0, left: 0, day: "both",},
    {index: "dropoutNight", name: "You can try visiting dropout tonight ($30)", location: 'playerHouse', time: "Night", itemReq: "", trustMin: 100, trustMax: 100, top: 0, left: 0, day: "even",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
    writeHTML(`
		define player = sp player;
        define dropout = sp dropout;
	`);
	switch (name) {
		case "cancel": {
			unencounter("dropout");
			changeLocation(data.player.location);
			break;
		}
		case "intro": {
			writeHTML(`
				t You notice a tiny card of purple color laying on the same pathway you were walking on, picking it off the ground you see it has an image on its front side, and some text on its back.
                im images/dropout/image.jpg
                sp Card; im images/none.png; So, my card got your attention? It's either that or you're a poor street cleaner (<font size= '-1'>if you are the latter, please do not dispose of/damage this card, they cost me a fortune to print.</font>) <br>Either way it doesn't matter! <i>Man or woman, tall or short, cute or handsome... If you want to have the fun of your life with a pretty schoolgirl, this is your lucky day!</i> Bring enough money with yourself to the address below ($20 per session, %50 discount if you're a first time client) and you'll have an unforgettable night, satisfaction guaranteed!<br><font size= '-1'><br>Footnotes: No returns unless you can return me my virginity (which I've lost long ago, it'd be good to have it taken once again), payment is to be made before the service, no video games, and I am talking to you here, you know who you are you sick fuck, I am not your therapist.</font>
                player <i>A lot of text on such a tiny card, wow.</i>
                t Thinking of it, it doesn't sound like a bad idea to spend your evening (and ten dollars) for a good time, if you don't have anything better to do. Time to make a choice.
			`);
			if(data.player.money >= 10){
                writeFunction("writeEncounter('introA')", "Go to the address on the card");
            }
			writeFunction("writeEncounter('cancel')", "Ignore it for now");
			break;
		}
		case "introA": {
            data.player.money -= 10;
            passTime();
			writeHTML(`
                player <i>This must be the place...</i>
                t In front of you there is a small hotel with two floors, it's not in a populated part of the town so it looks pretty insignificant.
                player <i>What are chances that I get my organs harvested here?</i>
                t You take a step inside, it's not well lit, and there are no receptionists within sight. The only people you can see are the pair of students wearing unfamiliar uniferms, chatting quite noisily over some sodas, one of them raises his head when he notices you.
                sp Student 1; im images/none.png; Yo, here for the pretty lady?
                player I think you could say that, yeah.
                sp Student 2; im images/none.png; dropoutF's room is upstairs, door number two two five, try not to be too loud, and don't try to get rough with her.
                player ...Thanks?
                t You walk upstairs as they return to their chitchat, room 225 is on the other end of the hallway. You can practically feel the perfume on your skin coming from inside as you knock on the door.
                sp dropout; im images/none.png; HIDDENFor the last time Zach, stop trying to talk me out of this. <br>Oh, and take a shower before you scare away any more customers!
                player Duly noted, heading back for a shower sounds like a plan.
                sp dropout; im images/none.png; HIDDENOh my..! 
                t The door opens quickly to reveal a young lady behind it with a nervous smile on her face.
                dropout <i>Excuse my rudeness *sir! I wasn't expecting a client at this hour, please come on in!</i>
                t The room is a lot nicer than the rest of the hotel, more than a few furnishings inside too that don't match the hotel's asthetic.
                im images/dropout/intro1.jpg
                dropout Don't get me wrong but, <i>may I see the cash beforehand..?</i>
                t She grabs it off your hand the moment you pull out a $10 bill, taking a good long look like she's checking if its counterfit, although she keeps sneaking glances at you until she puts it in her purse and nods.
                dropout Again, sorry for the rudeness, not everyone's kind enough to actually pay for the services nowadays.
                player You're selling a young girl's body for a tenner, and you don't get a lot of customers? Why would people turn this down?
                dropout <i>Hehe~</i> Sorry but the flattery won't earn you any discounts *sir.
                player I was being sincere.
                im images/dropout/intro2.jpg
                dropout <i>That's so sweet of you then!</i> Are you planning to be a regular or just be here for a single night?
                t She isn't trying to hide her glimpse lowering to your bulge every once in a few seconds at all, which only gives her more to look at.
                player <i>Actually I was hoping you'd convince me to become a regular you know...</i>
                im images/dropout/intro3.jpg
                dropout <i>Gladly...</i>
			`);
			setTrust('dropout', 10);
			writeFunction("writeEncounter('introB')", "Get started");
			break;
		}
		case "introB": {
			writeEvent("dropout1a");
			writeFunction("changeLocation(data.player.location)", "Finish up");
			break;
		}
		case "dropoutMenu": {
            if(checkFlag("dropout", "fj") == true && checkFlag("dropout", "ff") == true && checkFlag("dropout", "fs") == true && checkFlag("dropout", "kiss") == true){
                setTrust('dropout', 100);
            }
            if(data.player.money >= 20){
                if(checkTrust("dropout") == 10){
                    setTrust('dropout', 75);
                    writeHTML(`
                        t You walk inside the hotel, the two bois are sitting in the same place as the last time.
                        sp Student 1; im images/none.png; playerF was it? Welcome back to the Snowdrop Hotel playerSir! Here for dropoutF again?
                        player Heh, looks like she's been waiting for me huh?
                        sp Student 2; im images/none.png; <i>She even made us promise we'd be nice and polite with you when you come, so I guess you could say that..</i>
                        player Let's not make her wait any longer, then.
                        t ...
                        t The door opens smoothly, letting you see the excited face of dropoutF once again.
				        dropout I knew you'd come back! <i>Yaaay~</i>
				        im intro1.jpg
                        player I told you I would, the last time was great.
                        t She giggles.
                        dropout Heheheheeee~
                        t She starts moving her shoulders back and forth as if she's doing a little dance.
                        dropout So, you only came here to say hi, <i>or did you need any "service" from me?</i>
                        trans dropout1b; name Another blowjob ($10 for you);
                        trans dropout2; name Normal sex (no condoms! $20);
                        trans dropout3; name Kisses <3 (w/ handjob! $15);
                        trans dropout4; name You eat her out! (w/ handjob! $15);
                        trans dropout5; name Ruining her socks ($20);
                        trans cancel; name Go back;
                    `);
                }
                else if(checkTrust("dropout") == 75){
                    writeHTML(`
                        t The two bois (who finally introduced you themselves, and are apparently the receptionist and the bellboy) are sitting in the same spot, Zach(Student 1) waves at you as you close the front door.
				        sp Zach; im images/none.png; Good day playerF! Here for dropoutF or were you planning to join our chat this time?
                        player Here for dropoutF, though I'll consider joining you two one day.
                        sp Drew; im images/none.png; It'd be fun, I'm looking forward to it!
                        sp Zach; im images/none.png; Same, same... Have fun in there then!
                        t ...
                        dropout <i>You're baaack~</i>
                        im intro1.jpg
                        dropout Coming to say hi is fine, <i>but I'd rather "serve" you, hun.</i>
                        trans dropout1b; name Another blowjob ($10 for you);
                        trans dropout2; name Plain sex (no condoms! $20);
                        trans dropout3; name Kisses <3 (w/ handjob! $15);
                        trans dropout4; name You eat her out! (w/ handjob! $15);
                        trans dropout5; name Ruining her socks ($20);
                        trans cancel; name Go back;
                    `);
                }
                else{
                    writeHTML(`
                        player Drew! Zach! What's up boys?
				        sp Drew; im images/none.png; playerF!
                        sp Zach; im images/none.png; We're doing great, fam! Hope you are too!
                        player Same here guys, good to see you two again.
                        t Both of them nod in agreement as you walk upstairs.
                        sp Drew; im images/none.png; Dude I'm gonna go nap, can you wake me up once they're done?
                        sp Zach; im images/none.png; Nah man, don't worry bout it. I'll clean the room if you're still asleep by then, you need sleep.
                        sp Drew; im images/none.png; ...I really do, yeah. Thanks man, you're the best.
                        t ...
                        player <i>Yaaaay I'm back~</i>
                        dropout Pfft, don't be a bully.
                        im intro1.jpg
                        dropout <i>I really hope you brought enough money today hun, because I'm eager to get paid and get laid.</i>
                        player Let me see..
                        trans dropout1b; name Another blowjob ($10 for you);
                        trans dropout2; name Plain sex (no condoms! $20);
                        trans dropout3; name Kisses <3 (w/ handjob! $15);
                        trans dropout4; name You eat her out! (w/ handjob! $15);
                        trans dropout5; name Ruining her socks ($20);
                        dropout <i>You know, I'm actually getting real tired of this job to be honest.</i>
                        trans dropoutComp; name Ask her what's wrong ($0);
                        trans cancel; name Go back;
                    `);
                }
            }
            else{
                writeText("Visiting dropoutF sounds like a fun idea, but unfortunately your wallet isn't heavy enough for that at the moment.");
                writeSpeech("player", "", "Sucks to be broke, but I'll come back later...");
                writeFunction("writeEncounter('cancel')", "Go back");
            }
			break;
		}
		case "dropout1b": {
            data.player.money -= 10;
            passTime();
            writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
        }
        case "dropout2": { //normal
            data.player.money -= 20;
            passTime();
            addFlag("dropout", "ff");
            writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
        }
        case "dropout3": { //kiss
            data.player.money -= 15;
            passTime();
            addFlag("dropout", "kiss");
            writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
        }
        case "dropout4": { //facesit
            data.player.money -= 15;
            passTime();
            addFlag("dropout", "fs");    
            writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
        }
        case "dropout5": { //feet <3
            data.player.money -= 20;
            passTime();
            addFlag("dropout", "fj");
            writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
        }
        case "dropoutNight": {
            writeHTML(`
				im images/locations/newDayNight.jpg
                t It's not the time of the day you normally go outside, but it doesn't hurt to try something new every once in a while. You look at your phone and weigh your options (along with your wallet), should you call dropoutF and have some fun outside or-
                player <i>Maybe I should just go to bed instead...</i>
			`);
            if(data.player.money >= 30){
                writeFunction("writeEncounter('dropout6')", "Continue ($30)");
            }
            writeFunction("writeEncounter('cancel')", "Go back");
            break;
        }
        case "dropout6": { //night
            data.player.money -= 30;
            writeEvent(name);
			writeFunction("changeLocation(data.player.location)", "Finish");
			break;
        }
        case "dropoutComp": { 
            writeHTML(`
                player Did I do something wrong, dropoutF?
                dropout No no it's not your fault or anything, <i>It's only that I've been thinking...</i>
                player Thinking what exactly?
                t She sighs and sits down on her bed with her face in her hands.
                dropout People get older, I get older too. I've found a white in my hair last day, can you believe it? I'm only in my early 20's.<br>And like, I'm a prostitute too, you get what I'm saying?
                t She looks up in your eyes.
                dropout I'm as good as I'm young, not much people pay to fuck an old hag you know...<br>How will I live when I get older? I'm already having problems making it through each month with what I earn.<br>Sure there are other jobs outside too, but they're just... I don't know what to do at this point, and as if that wasn't enough of a problem.
                t She looks down on the floor, drawing circles with her right foot.
                dropout <font size= '-1'>A whore doesn't get to experience <i>actual love</i> either, who'd love a girl that's been railed by the whole town?</font>
                t She shakes and gets up when she notices what she's been doing.
                dropout Oh god I'm sorry! What am I doing opening up to a client like this? Pretend you never heard a thing.
                t Now there is a decision to make, she's correct with most of what she said so far, a prostitute isn't a popular choice for a wife. Though you can't help but think she deserves better, also come on, free service for a life time doesn't sound that bad. Still, you have to break the silence somehow.
                trans dropoutEnd; name Go for it;
                trans cancel; name Leave her be for now;
            `);
            break;
        }
        case "dropoutEnd": { 
            writeHTML(`
                t No exclusivity for anyone. That was your motto when you first came to this town. But what if you were to be satisfied with what you have? Why do you need to fuck "everyone" to feel accomplished? Yeah you aren't the only one to have fucked her, but it's not like she's your first one either is it? Being someone's first one is special that's for sure, but being the "last one" is nothing short of it either. Once you make up your mind you put your hand on her shoulder.
                dropout E-Eh..?
                player <i>Tell me, dropoutF.<br>What would happen if I got you out of this?</i>
                dropout Y-You don't mean..?
                t Your nod makes her start shaking in a mix of feelings.
                dropout B-But why would you do that? Why would you dedicate your life to a whore? <i>I'm not worth it...</i>
                player Pfft, as if I'm a fucking saint myself.<br><i>I can't change your past, but I-no WE can build our future...</i>
                t She's about to break down in tears at any moment now.
                dropout But... Why? Why would you do that to yourself?
                player Sometimes, you don't need a reason for that kind of stuff. As you said, life is too short, and I'm not willing to spend over the half of it being afraid of consequences.<br>Oh also free service sounds good heheh~
                dropout Is that it? Are you only gonna do that just so you get free service?
                player Zach said you're a good cook too.<br>Oh and I'm not only getting a lifelong prostitution service, you'll have to be a proper wife as well.
                t Being unable to hold her tears in for any longer, she gives you a tight hug as she starts sobbing.
                dropout <i>I will.. I really will..! I'll make sure you won't ever regret giving me a chance.</i>
                t She wipes her tears and smiles wide with her eyes still red.
                dropout <i>So, tell me, how should I please my now-one-and-only client free of charge?</i>
                player Wanna go out and have a drink? I'd prefer an actual date instead of having sex for a change.
                dropout <i>You have no idea how good that sounds, finally being able to leave this life behind like that...</i>
                player Well then it's decided, drinks on me tonight.
                dropout <i>Don't you dare.</i>
                trans dropoutFin; name Continue;
                `);
            break;
        }
        case "dropoutFin": { 
            writeHTML(`
                t Sometimes, just sometimes, it's better to act without thinking. It's sure to change your life drastically almost always, but what if it changes for the better?
                dropout <i>Do you ever... You know...</i>
                t Your days of walking around fucking anyone you see are well over, it's been a few years since then actually. You still work as a counselor in the school but you're actually doing your job instead of using it as a cover.
                dropout Do you ever miss those days?
                t Do you miss them? Maybe, the amount of sexual enjoyment you've been receiving since that decision has went down by quite a lot, and it's not in the center of your life anymore either. It almost feels innocent at this point even, just something you do with your wife from time to time.
                player Sometimes.. But if I were given a second chance I'd do the same thing again.
                im alternative.jpg
                t dropoutF has, well, changed too, the life she despised so much without telling anyone is behind her now. She's doing her best to be a good wife, and you can tell one thing.
                player Why would I change my mind anyway? It's been years, <i>but I haven't felt the tiniest regret about my choice yet.</i>
                dropout <i>You damn flirt~</i>
                t Why would you regret it? The sex is good, the food is good, you have someone that's willing to be by your side for the rest of your life, and you noticed it's way better to sleep in a bed with someone else in it.
                t ...
                im k5.jpg
                t "Reduced sex" doesn't mean you are still as pure as a monk either.
                im ff3.jpg
                t After all it'd be dumb to declare total abstinence when you finally have the lifelong free service privilege. With her past left behind, she's way eager to treat her only client the best way she can.
                im cim2.jpg
                t No matter what way.
                im fj15.jpg
                t No matter how long.
                im n3.jpg
                t No matter where and what time of the day.
                im cim3.jpg
                t She's always happy to serve you.
                im ff9.jpg
                dropout <i>And I'll never get tired of it either.</i>
                player <i>Sure you won't, you've gotten even needier by time.</i>
                dropout And it's all your fault! I was so innocent and pure before you!
                t Both of you laugh for a bit until you slap her thigh gently.
                player Okay okay that's enough, we better get cleaned if we're going outside today.
                dropout Going where?
                player Oh right I forgot to tell you, Drew called last night.
                t Let's not forget Drew and Zach, with dropoutF leaving the hotel their already insignificant hotel lost whatever hopes it had to go big. But the two friends apparently refused to give up on their "Snowdrop Hotel" got renovated into "Snowdrop Restaurant" in a few months. And with the help of a certain social media icon's post (which kept on praising and praising their food) the restaurant became one of the biggest attractions of the town in the time passed. It's sweet of them to keep in touch with you two along the way as well.
                dropout It's not fair, you should've told me sooner... Anyway what did he say?
                player Today is the third anniversary of the restaurant's opening, and he said he and Zach have reserved a seat for us, "Food is on the house tonight! Make sure you visit us and bring the lady luck with yourself!" they added.
                dropout It's good to see the two of them winning in life really, they've been my only friends back then.
                player Well then,<i> lady luck</i>, let's get ready for tonight's date shall we?
                dropout <i>Right away, honey~</i>
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
	{index: "dropout1a", name: "First and foremost"},
    {index: "dropout1b", name: "Giving a mouthful"},
    {index: "dropout2", name: "Plain old sex"}, 
    {index: "dropout3", name: "Handjob premium"}, 
    {index: "dropout4", name: "Taste test"},
    {index: "dropout5", name: "Ruined footwear"}, 
    {index: "dropout6", name: "Night walk"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "dropout1a": {
			writeHTML(`
				im intro4.jpg
                player No introductions huh?
                dropout I'm dropoutF, that's all you need to know. And what should I call you?
                player playerF is good enough.
                t She nods while dealing with your zipper, you can feel yourself throb the moment her soft hands touch your skin.
                im intro5.jpg
                dropout ...
                player Anything the problem?
                dropout Heh, <i>I can't be the first one to tell you that it's a nice, big one you've got there, right hun?</i>
                player I mean-
                im intro6.jpg
                t It doesn't feel right to be leaking this early, but the way she moves her delicate hand along your length is not giving you much options.
                dropout It doesn't matter either way. Now, a needy virgin saying you have a big dick is one thing. But I deal with this stuff for a living, so believe me when I say...<br>You.<br>Are.<br>Huge.
                player A-And I could tell you're good at dealing with them.
                t She nods with a proud look on her face.
                im intro7.jpg
                dropout Calm down, it's only a hand... <i>This is nothing compared to what you could get if you decide to become a regular.</i>
                t You aren't sure whether she's more desperate for the sex or for the money, but you can feel the urge to be a "regular" rising either way. And it's not the only urge to rise either..
                dropout Greaat... Let dropoutF make you feel just <i>right,</i> ...<br><i>Let me see how much you can give me...</i>
                im intro8.jpg
                player <i>H-hah..?</i>
                t She keeps smiling as your shaft continues to throb and pump your load out all over the floor.
                dropout <i>Wonderful...</i>
                im intro9.jpg
                dropout <i>Say, , can we go for another round?</i>
                player <i>I was hoping you'd say that...</i>
                t ...
                im bj1.jpg
                dropout <i>Mmmmm...</i> I've to admit, I'm already looking forward to see you again.
                t She's running her fingers along your shaft gently, the excitement in her eyes make you feel like being genuine.
                player <i>I feel like it'll be sooner than you think..</i>
                im bj2.jpg
                dropout This better not be a lie, <i>you're already my favorite client hun~</i>
                t Her eyes are completely focused on your shaft as she moves it closer and closer to her head, you can feel her warm breath on your whole length.
                player And why's that? I thought you had plenty of other clients?
                dropout <i>Please, why would anyone with such a great "member" pay for prostitution when they could just rail some cloudheaded girl from the town? Don't get me wrong, I'm glad you did but...</i>
                t She sighs.
                dropout I kind of expected my clients to be hideous, of course I'm a little excited about having a decent looking one...
                im bj3.jpg
                dropout <i>With such a lovely thing in their pants, it's a pleasure to serve you hun~</i>
                player <i>I feel like it's more about the money you get.</i>
                t She rolls her eyes.
                dropout Look, , trust me...
                im bj4.jpg
                dropout <i>If this wasn't how I earn my life, I'd totally love to serve you for free..</i>
                t You can't help but shudder a bit at the praise.
                player <i>That sounded better than it should have...</i>
                im bj5.jpg
                t She gently spreads her warm saliva along your shaft with her hand, teasing your tip with her tongue as she giggles.
                dropout I can't really blame you. <i>Being a girl's favorite one out of all the other options she had, that must be a good feeling.</i>
                im bj6.jpg
                t It's like she can sense how you're feeling at any moment, she keeps changing her pace between fast and slow to avoid it getting monotonous.
                player <i>I-It feels great, yeah...</i>
                t She looks up at your face for a moment before lowering her eyes back on your shaft.
                dropout Aww, don't keep me waiting any longer sweetie~ <i>Just fill this bitch's needy mouth with your cum already..!</i>
                player <i>Oh my...</i>
                im bj7.jpg
                player <font size= '-1'><i>...Gawd~</i></font>
                t She closes her eyes for a few seconds as she milks whatever remaining cum from your shaft, breathing slowly as she savors the "taste".
                im bj8.jpg
                dropout ...
                player That was...
                im bj9.jpg
                t She cleans your shaft with her tongue as she slowly pulls it out of her mouth, and not saying a word while doing that.
                player dropoutF?
                im bj10.jpg
                dropout <font size= '-1'>Amazing...</font>
                t She puts her hands down on the floor and sits back with a dreamy/happy look on her face.
                dropout <i>Look what you did, what a mess.</i>
                im cim1.jpg
                player I'm not sorry.
                t She chuckles.
                im cim2.jpg
                dropout You shouldn't be sorry, it's a <i>lovely</i> mess.
                player <i>So you wouldn't mind if I did it again, huh?</i>
                im cim4.jpg
                dropout You and I...
                t She takes a deep breath and gulps, looking satisfied with what she got for now.
                im cim3.jpg
                dropout <i>Are gonna have so much fun...</i>
                player There goes my life savings.
                t Both of you laugh a bit as you pull your pants back up, time to say goodbye for now.
                dropout Hey, don't make me miss you okay? And take care.
                player You too, see you later then!
			`);
			break;
		}
        case "dropout1b": {
            writeHTML(`
				im intro5.jpg
                dropout So, you want me to suck you off again huh?
                player I guess you could say that I can't have enough of it.
                dropout <i>I'll gladly keep giving you more and more, then.</i>
                t She gets on her knees, eyes focused on your shaft once again as she starts slowly licking your tip.
                im bj5.jpg
                dropout It's great to have me around isn't it? <i>Isn't dropoutF just too good at pleasing her favorite client?</i>
                player No doubt, yeah..
                im bj4.jpg
                t You have a hard time speaking as she speeds up, taking your dick in her mouth deeper and faster.
                player <i>I-In a hurry are we?</i>
                im bj6.jpg 
                dropout <i>Yeth I am..! I..</i>
                t She pulls the hem of your shirt as she pulls it out of her mouth to breath.
                dropout <i>I'm gonna make sure I get my mouth filled as many times as possible during the service...</i>
                player Greedy...
                dropout Oh please, I'm just <i>needy</i> for you.
                im bj8.jpg
                dropout <i>Now go ahead and feed this needy bitch with your cum again, and again <b>AND AGAIN..!</b></i>
                player F-Fuck I'm gonna..!
                im bj7.jpg
                dropout <i>Yeeeeth~</i>
                t She keeps sucking for a bit before pulling it out of her mouth with a proud smile on her face.
                im cim3.jpg
                player <i>Happy little bitch aren't you?</i>
                t She nods and opens her mouth.
                im cim1.jpg
                im cim2.jpg
                player <i>Jesus...</i>
                t She giggles.
                im cim4.jpg
                dropout We still have plenty of time, <i>and you still have plenty of that to give me don't you?</i>
                player <i>Mercy? Please?</i>
                dropout <i>I can extend the time of your service if that's what you want .</i>
                t Seems like it'll be a loong hour that won't end soon.
			`);
			break;
        }
        case "dropout2": { //normal
            writeHTML(`
				dropout So, <i>it'll be the primary service today huh?</i>
                im ff1.jpg
                dropout <i>I've been waiting for this since the first time you know..</i>
                t You can see she's already dripping wet from the thought of it.
                player Let me guess what you'll say next, "and it'd be rude if you make me wait another second"?
                dropout Well? <i>If you knew that much what are you still waiting for???</i>
                player You have no patience do you? How are you even a prostitute?
                dropout <i>I'm not like this with the others darling, it's all your fault.</i>
                player Let me make up for it then.
                im ff3.jpg
                dropout <i>EEE-</i>
                t She squeaks as she wasn't prepared for a sudden thrust, though she gets used to it in a moment.
                dropout Do you not realize how huge your dick is? It's going too deep insideee..!
                player So should I slow down or?
                dropout <b>Even deeper, please.</b>
                t You can already hear the bed creaking under you, but she says she wants more of it.
                player If you insist...
                t The creaking bed (along with the girl on top of it) gets louder as you speed up.
                im ff4.jpg
                dropout <i>Haaaaah~ Y-You having fun, hun?</i>
                player I feel like the "fun of your life" in your card part in your card was on point.
                t She tries to giggle but gets embarrassed when it fades into moans halfway.
                dropout H-Haah? I- <i>Nooh..!</i>
                im ff5.jpg
                dropout <i>N-Not fair! I can't..! This is..! <font size= '-1'>Waaaa-</font></i>
                player <i>What's it princess? Ashamed of getting close with a client?</i>
                t You aren't sure if it wasn't about the word "princess", or just the sentence you used overall. But either way she ends up arching her back with a loud orgasm.
                dropout <b>NOT FAIIIIR~</b>
                player <i>Good girl~</i>
                dropout <i>Ghhhhhh~ Nooooh..!<br>If I'm such a good girl-</i>
                t You don't have to hear the rest of it.
                im ff6.jpg
                dropout <b>REWARD MEHHHHHH..!</b>
                t Her quick breaths slow down as you keep pumping your jizz inside her, though her legs don't stop shaking as if she were an amateur.
                im ff7.jpg
                dropout <i>Thank youuuu~</i>
                t You slowly pull out as she keeps panting with a flustered face.
                im ff8.jpg
                dropout Eeeeeeeee~
                player What's wrong?
                dropout <i>I wasn't supposed to cuuum~</i>
                player And so what?
                dropout <i>I feel like an amateur now...</i>
                t It's funny given how you were thinking of the same thing.
                player <i>And what if I told you "amateur" is one of my favorite porn categories?</i>
                t She laughs and nods.
                im ff9.jpg
                dropout Well, <i>that's way better than a normal reassurance alright.</i>
                player I'm glad it worked, because I still have half an hour.
                dropout <i>Oh god-</i>
			`);
			break;
        }
        case "dropout3": { //kiss
            writeHTML(`
                dropout Wanna hear something funny?
                im k1.jpg
                player Hm?
                t She giggles.
                dropout Kisses aren't on the normal service-list, <i>so think of it as a service exclusive to yourself, hun.</i>
                im k4.jpg
                t Her hand keeps going up and down on your shaft as her tongue keeps twirling around yours.
                player I'm not sure how that's a kiss, to be honest.
                dropout <i>Mmmh...</i> It's my kind of kiss, happy now?
                im k3.jpg
                player Quite.
                dropout Heheh~
                im k5.jpg
                t She narrows her eyes the moment she feels your leaking precum on her hand.
                dropout <i>Aren't you getting a little too excited over my hands?</i>
                player Would it be better if I didn't?
                t She giggles as she shakes her head.
                dropout Oh please, it's always so much fun to make you get off with them.
                t She starts stroking faster and turning her hand around the waist to finish quicker, with how good she is at using her hands, it's no doubt you won't be lasting much longer.
                dropout <i>It even makes me feel special, I don't and won't hesitate to lick it off my hand the moment you pour it on my hand again..</i>
                t She keeps using your own precum as a lube for the handjob, making you reach your edge in a few minutes.
                player <i>It's unfair to make me feel like a quickshot for that though.</i>
                dropout I'd be happy if I were you, <i>because I won't stop until my client is thoroughly pleased.</i>
                player I..!
                im k6.jpg
                t She giggles and places a tiny (normal) kiss on your cheek as you keep cumming.
                dropout <i>It's way too much~</i>
                player Wasn't that what you wanted?
                im k7.jpg
                dropout Exactly, it's just <i>amazing</i> to watch.
                t She licks her fingers clean, then slowly runs them down your chest back on your shaft.
                dropout <i>And I'll watch it more than once tonight.</i>
                t You can't help but wonder if she's the client here instead of you.
			`);
			break;
        }
        case "dropout4": { //facesit (it's actually not a facesitting but I felt like calling it that cuz yay)
            writeHTML(`
				dropout You know, that's actually really sweet of you to offer such a thing.
                im fs1.jpg
                dropout I feel like I'll really enjoy this one too.
                t You're grateful she isn't that heavy, or you'd have a hard time with her sitting on your chest like that.
                player As if you weren't enjoying the other times.
                t She expertly hides how flustered she is and puts her hand on your shaft.
                im fs2.jpg
                dropout U-Uhm! <i>Gee slow downn...</i>
                player Why would I? Have you ever shown me such mercy?
                t You move your tongue faster on and around her pussy, which gives her legs a little shaking.
                im fs3.jpg
                dropout <i>Haah..!</i> O-Okay I got it..!
                player Got wh-<i>Gghh~</i>
                t She tightens her grip around your dick and starts stroking faster.
                im fs4.jpg
                dropout <i>That I have to make you stop myself, hun. I do enjoy it but I won't risk an orgasm slowing me down.</i>
                player Damnit..!
                t She shakes her head as her hand keeps moving faster and faster on your cock.
                dropout <i>Just give up already, you know you want dropoutF to milk your balls dry.</i>
                player dropoutF...
                dropout Yes, darling?
                im fs5.jpg
                player ... 
                dropout <i>Heh.</i>
                im fs6.jpg
                dropout <i>You never cease to amaze me, playerF. It's always too much...</i>
                player <i>And let me guess, you're not done yet right?</i>
                t She laughs.
                dropout <i>I'm sorry sweetie, this needy bitch just can't have enough of you~</i>
                player <i>Then how about "this needy bitch" serves me for free?</i>
                t She rolls her eyes as she cleans her hand with her tongue.
                dropout <i>If "this needy little bitch" had a way to pay for her food, rent and bills, she'd definitely serve you for free, she doesn't have any real fun with her other clients anyway so she wouldn't mind doing exclusivity.</i> Though let's be real here, no one would want to be a whore's special someone, a girl that's been used way too many times and by way too many people that her personality has been reduced to a mere sex toy.
                t She shakes her head, looking all serious all of a sudden.
                dropout You wouldn't want that... Now let's get back at it yeah?
                t Her warm smile replaces the serious expression right away, though you had a chance to see how upset she is about it.
			`);
			break;
        }
        case "dropout5": { //feet <3
            writeHTML(`
				dropout <i>I knew you'd have a thing for this one, hun.</i>
                im fj1.jpg
                dropout I can't really blame you anyway, I wouldn't put it on the menu if I didn't like it myself~
                player Then why is it more expensive than almost any other service?
                t She giggles.
                dropout Work those gears in your head, hun.
                im fj2.jpg
                dropout <i>I usually have to throw the socks away once they're used this way, that's why.</i>
                player And what if you did it without socks?
                dropout It tickles a lot.
                t She's drawing circles with her right foot gently pressing against your shaft.
                im fj3.jpg
                dropout <i>Say, isn't it a bit embarrassing to get "this" excited over something like a foot?</i><br>I mean I'd understand if it were a hand, because there are fingers that I can wrap around your cock, but with a foot I can't give you any "holes" to use, you know.
                player <i>And that's why you should use your both feet.</i>
                dropout I like the way you're thinking.
                im fj4.jpg
                player Urk-
                t She moves her foot back and forth slowly to make sure you enjoy the rubbing without putting too much pressure on it.
                dropout Calm dooown, I'm not gonna break my favorite toy that easily.
                player Oh so I am the toy here?
                t She shakes her head.
                dropout <i>I'm talking about your dick, hun. It never fails to make me feel good-</i>
                im fj5.jpg
                player M-Maybe it's the other way around? What if you were the one who never fails to make it feel good?
                dropout Then, *sir.
                t She giggles again as your oozing precum wets her socks.
                im fj6.jpg
                dropout <i>I'll be a good, proud toy for your dick...</i>
                t ...
                player You could've worn panties under your skirts, you know.
                im fj7.jpg
                dropout And block your view? Hell no, I know you'll just like it more this way.
                player I can't argue with that-
                t She's smoothly curling her toes to rub your shaft with them without moving her feet.
                im fj8.jpg
                dropout Good, I'm only here to make you feel good <i>darling</i>. This is no place for arguing.
                player <i>And damn are you good at it~</i>
                t She slowly raises both of her feet up, her eyes still locked on yours.
                dropout Heheheh~ 
                im fj9.jpg
                dropout Do you really think praising works with me?
                player <i>It does.</i>
                t She laughs and nods.
                dropout Hell yeah it does, it feels great.<br><i>Speaking of which.</i>
                im fj10.jpg
                dropout <i>Does it feel great hm? These are thin enough to let you feel the skin under~</i>
                t She keeps changing her pace between fast and slow so you can't get used to either. It keeps switching between "desperate to make you cum" and "this'll take forever and you'll like it".
                dropout I've been training my legs for this, if you can't tell.
                player It wouldn't be that hard to figure out myself <i>if you just stuck with one pace instead of changing it randomly.</i>
                t She stops to curl each of her toes around your shaft one by one a few times, just to continue with the same pace of sliding her soles like before. 
                dropout And where is the fun of it hun? <i>If you can still think straight then it means dropoutF is not being a proper bitch.</i>
                im fj11.jpg
                dropout <i>And dropoutF hates that.</i>
                player <i>And playerF thinks if dropoutF keeps doing it at this speed they'll-</i>
                t She speeds up even more, rubbing her feet along your shaft as fast as she can (that she starts panting) with an excited look on her face.
                dropout <i>Just do it already, you know what I'll do with these once you're gone?<br>I'll wear them inside out just so I can feel my prize on where they belong.</i>
                t She's panting heavily from all that effort.
                dropout <b>Huff.. Just... GIVE IT TO ME ALREADY..!</b>
                player I- Ugh... <i>Cummiiing..!</i>
                im fj12.jpg
                dropout <b>MORE! MOOOORE!</b>
                t She keeps sliding her feet along your shaft swiftly instead of slowing down to make you let your whole load out.
                player <i>Ghhhh- Can't... T'muuuch-</i>
                im fj13.jpg
                dropout <b>Yesss, yeeeeh- Ruin theem wif your jizz..!</b>
                t She finally manages to slow down and stop after that, looking happy with how much she got from a single load.
                player <i>You're a monster-</i>
                dropout <i>Nuh uh bae~</i>
                t She raises her feet again, showing how badly you ruined her socks.
                im fj14.jpg
                dropout <i>You are the monster here, look what you did to them..!</i>
                player As if you have the smallest complaint about that.
                t She shakes her head with a smuggish smile.
                dropout I actually have a complaint, hun.
                player Huh?
                im fj15.jpg
                dropout Maybe consider cumming this much <i>inside me</i> sometime huh? I wasn't expecting to discover your limit by giving you a footjob...
                player <i>Uhm...<br>Ta-daa..!</i>
                t After that and a bit more chatting, you say your goodbyes to go back home. Something (like the darkened sky) tells you you've been inside for longer than the designated "one hour".
                player <i>The clock in her room is slower than normal isn't it? That bitch..</i>
			`);
			break;
        }
        case "dropout6": { //night
            writeHTML(`
				t You dial her number on your phone, hoping she isn't asleep. A second later you hear the phone being picked up followed by a yawn.
                dropout <i>playerF? Is it what I think it is?</i>
                player Well, I don't know. Were you thinking of meeting me at the park too?
                dropout <i>Sigh...</i> Be there in ten mins, and bring the thirty.
                player See you there, then!
                t You put your phone back in your pocket and prepare to go outside again, it's late but she agreed to do it outside "only under the cover of the night".
                t ...
                dropout playerF! You're right on time!
                im nightcutie.jpg
                player Didn't wanna make you wait in cold.
                dropout Aww~ How considerate!
                t She gives you a warm cuddle, then notices what she's doing and backs down.
                dropout E-Eeeh.. <i>Sorry if it felt awkward, I wasn't supposed to do that...</i>
                player Why do you apologize? It felt nice.
                dropout Well! <font size= '-1'>Not everyone enjoys being hugged by a whore.</font>
                t You give her one yourself to prove her you are someone that enjoys it, although being confused about it she doesn't resist at all.
                dropout <i>...Thank you.</i>
                player You deserve that much.
                dropout <i>Can we just get started already? I don't wanna forget what I'm here for.</i>
                t She's being too harsh on herself, but it's too cold outside to keep this up anyway. You'd also rather if the two of you could go back to your warm beds asap.
                t ...
                dropout T-Too deep..!
                im n1.jpg
                dropout <i>It's filling me up sooo geewd..!</i>
                player Nnngh~ As if you aren't the one making it go deeper.
                t She tries to be quieter with her moans, luckily there are no one around at this hour.
                dropout <b>Yes I do! I'm your little cumdump and I deserve to be filled with your whole dick!</b>
                im n2.jpg
                player <i>And you don't hesitate to get what you need either huh?</i>
                t She nods as she tries to control the shaking of her legs and the noise of her moans.
                dropout <b>No hesitation! No regrets! Just stuffing this bitch with your cum!<br>Fill her to the brim, make it not only drip but POUR!</b>
                t You start fucking rougher and rougher, getting closer by each thrust and her each moan.
                player <i>dropoutF I-</i>
                dropout <b><i>FILL MEEEEEH~</i></b>
                t You thrust inside for one last time and fill her needy hole up, making her a messed up, trembling mess as she orgasms while barely being able to stand on her feet herself.
                im n3.jpg
                dropout <b><i>Thank yhouuu~</i></b>
                t You hold her arms for a little longer, at least until you can be sure the moment you let them go. It takes a few more minutes of panting until she can speak again.
                dropout <i>That was wonderful hun, you're the best...</i>
                player Need me to walk you back to there?
                dropout Drew is already waiting outside, don't worry about me.<br>I'll see you later playerF!
                player See you later.
                t You're glad your home isn't that far from the park, or you'd freeze on your way back.
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
            writePhoneImage("images/dropout/reward.jpg", "Art by Pastel Bitch");
            writePhoneSpeech("dropout", "", "Not all characters have dedicated endings, neither are they supposed to have long stories. dropoutF was an example and an experiment on that, hope you liked her!");
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