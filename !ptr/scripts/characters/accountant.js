var character = {index: "accountant", fName: "Pamela", lName: "Light", trust: 0, encountered: false, textEvent: "", met: false, color: "#EF4E9B", author: "KH_Ace", artist: "Kitsuneyane", textHistory: "", unreadText: false,};

var logbook = {
	index: "accountant", 
	desc: "Just a preview",
	body: "Just a preview",
	clothes: "Just a preview",
	home: "Just a preview",
	tags: "Just a preview",
	artist: "Kitsuneyane",
	author: "KH_Ace",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro", name: "Someone's having a bad time.", location: 'teacherLounge', time: "Evening", itemReq: "", trustMin: 0, trustMax: 0, top: 0, left: 0, day: "both",},
	{index: "intro2", name: "accountant is now here.", location: 'gym', time: "Evening", itemReq: "", trustMin: 1, trustMax: 1, top: 0, left: 0, day: "both",},
	{index: "intro3", name: "accountant is now here.", location: 'classroomA', time: "Evening", itemReq: "", trustMin: 2, trustMax: 2, top: 0, left: 0, day: "both",},
    {index: "accountantI", name: "Look for accountant.", location: 'teacherLounge', time: "Evening", itemReq: "", trustMin: 5, trustMax: 5, top: 0, left: 0, day: "both",},
    {index: "accountantIIa", name: "accountant is here.", location: 'teacherLounge', time: "Evening", itemReq: "", trustMin: 15, trustMax: 15, top: 0, left: 0, day: "both",},
    {index: "accountantIIb", name: "accountant is here.", location: 'teacherLounge', time: "Evening", itemReq: "", trustMin: 20, trustMax: 20, top: 0, left: 0, day: "both",},
    {index: "accountantIII", name: "Look for accountant.", location: 'teacherLounge', time: "Evening", itemReq: "", trustMin: 30, trustMax: 30, top: 0, left: 0, day: "both",},
    {index: "accountantDO", name: "Wait for accountant.", location: 'playerOffice', time: "Evening", itemReq: "", trustMin: 40, trustMax: 40, top: 0, left: 0, day: "both",},
    {index: "accountantV", name: "Look for accountant.", location: 'teacherLounge', time: "Evening", itemReq: "", trustMin: 60, trustMax: 60, top: 0, left: 0, day: "both",},
    //{index: "accountantbreak", name: "Look for accountant.", location: 'teacherLounge', time: "Evening", itemReq: "", trustMin: 80, trustMax: 80, top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
    writeHTML(`
		define player = sp player;
        define acco = sp accountant;
		define emo = sp emotionless;
        define serious = sp serious;
        define dropout = sp dropout;
        define accoa = sp accountant; im images/accountant/accoa.jpg; altColor #959595;
	`);
	switch (name) {
		case "cancel": {
			unencounter("accountant");
			changeLocation(data.player.location);
			break;
		}
        case "intro": {
            setTrust("accountant", 1);
            unencounter("accountant");
			writeHTML(`
                t The teachers' lounge seems pretty stuffed today, everyone's minding their own business as one woman, almost young enough to be mistaken for a student, is walking back and forth in the room while holding her hand on her chin. It looks like she's waiting for someone.
                t In only a minute another girl passes by your side and walks in, attracting even more attention as she does.
                acco emotionlessF thank God! Have you got the numbers I asked for?
                emo Indeed, I have them here.<br>Now let's see, it says we've received a shipment of one new coffee machine, two sets of curtains and twenty <i>six</i> new chairs..? That's odd, I'm positive I've heard you say you ordered twenty eight chairs, am I correct?
                acco You are, just as I thought. But where are the other two chairs?
                t emotionlessF shrugs as the other girl keeps rereading the receipt she's holding.
                im file3.jpg
                emo That I don't know of, I asked them to count thrice for good measure and it was twenty six on all three counts.
                acco Thank you emotionlessF, really. You can go now, I have to figure this out. Let me know if you catch any students commiting any more acts of grand larceny.
                emo Actually, in order for it to be "grand", the theft would need to be worth measurably more than-
                acco Right. Keep your eyes open then. Take care, emotionlessF.
                t It seems like you won't be able to talk to her for now, but there's always next time.
                finish
			`);
			break;
		}
        case "intro2": {
            setTrust("accountant", 2);
            unencounter("accountant");
			writeHTML(`
                define student = sp Female Student;
				t There's a pile of stuff on the far corner of the gym, likely the shipment emotionlessF and accountantF were talking about. Giving it a rough counting yourself you notice there are indeed twenty six chairs instead of twenty eight.
                t On the other side of the gym accountantF is talking about something with a few of the volleyball girls.
                sports ?trustMin sports 1; Could you repeat that quickly? We are really busy here.
                student ?trustMax sports 0; Could you repeat that quickly? We are really busy here.
                acco There are two chairs missing from the pile on the corner of the gym, you girls spend a good amount of time in this room so I guess you would know where the chairs would go.
                t The girls are not very happy with the interruption, but at least it seems like they are not rude enough to turn over the poor accountant in need.
                sports ?trustMin sports 1; Now that you mention it... we took one of them for some kind of jump training my friend thought of. And I saw a boy carry another chair out, don't know where.
                student ?trustMax sports 0; Now that you mention it... we took one of them for some kind of jump training my friend thought of. And I saw a boy carry another chair out, dunno where.
                acco A boy carried it out you say? Likely a class A student, class B had their chairs replaced two months ago. Hmm... surely the chairs at class A would be insufficient, there is one class B student attending class A for his-
                t accountantF pauses, swaying her hair.
                acco To be fair it does not inconvenience anyone except for myself right now, granted how he's a helpful student most of time I would say he earned a tiny bit of "loverboyism", as a treat.
                t She giggles with her hand covering her mouth.
                acco <i>As a treat...</i> Girls, I'm grateful for your cooperation and sorry for any inconvenience I've caused for you. I have to take a picture with all twenty eight chairs in it so I ask you temporarily put it back on the pile. Just a heads up once the picture is taken it is no longer my responsibility to keep them in pile. Hope to see you all in championships!
                t She runs out without waiting for a response, most likely heading classroom A.
                finish
			`);
			break;
		}
        case "intro3": {
            setTrust("accountant", 5);
            passTime();
			writeHTML(`
				t Most of the students are moving out for recess as you follow accountantF into classroom A, where she finds her "target", the last chair...
                acco There it is, it's a good thing the students are outside right now, taking the chair while he is sitting on it would prove to be a lot more difficult.
                t She looks around to make sure there are no students inside the classroom and sighs.
                acco Especially considering how close he put the chair to his... <i>Sure the counselor is only one watching and most likely aware of what is going on between the two, yet I still feel uneasy talking about this, what a nuisance.</i>
                t She turns around to you, looking tired from all the running.
                im tired.jpg
                acco I apologize for ignoring you throughout the day, playerF. It was urgent that I find those two missing chairs, I promise I will spare you some time if you help me carry this back to the pile.
                player Well you sure look tired so, okay let's go.
                t You've been wondering why she couldn't just put another chair in the pile to replace the missing ones, up until getting a closer look to them and noticing how they have a different color and a softer seat, you're glad the gym is not far from here.
                t ...
                player <i>Back to square one, I literally just carried a chair to impress a girl. What am I? An elementary school student?</i>
                t She smiles at you after taking a picture with all of the shipment in one frame and putting her phone back in her pocket.
                acco Now I am available, what is it you wanted to say?
                player I actually just wanted to meet you but-
                acco accountantF accountantL, it's nice to finally meet you in person playerF.
                t The handshake is firm, but somewhat lifeless.
                acco I've heard of you, you're the new counselor. Most of the stuff in your office came in piles like the one behind me.
                player You are not very good at small talk are you?
                acco Kind of rude but I understand. I don't think I am very good at it, yes.
                player It's fun in its own way though.
                t She tilts her head to the side.
                acco Does that mean I am funny or I am fun to "hang with"?
                player How about both?
                acco ...This feels great to hear, thank you.
                t The two of you talk a little more and you learn that you two actually live closer than you thought, surely you are more shocked about it than she is.
                acco I enjoyed the time we spent but I really ought to be at home now, so... Do you want a "ride"?
                player That sounds great, thanks.
                t ...
                player Thanks for the ride, accountantF.
                im car1.jpg
                acco It's my pleasure, after all we are colleagues. 
                player That's a nice way of thinking, and good night accountantF!
                acco Have a pleasant night!
                t And she drives off as you yawn, carrying a single chair for two minutes was the most exhausting thing you had done in your life, hehe.
                finish
			`);
			break;
		}
        case "accountantI": {
			writeHTML(`
                define teacher1 = sp Teacher 1;
                define teacher2 = sp Teacher 2;
				t Teachers' lounge is rather quiet today, with no voices coming from inside whatsoever. You check inside to see a few teachers just drinking their coffees and fiddling with their phones, yet no sign from accountantF. 
                player Does anyone here know where accountantF is?
                teacher1 She was here a minute ago, maybe she went out to smoke?
                teacher2 She does not smoke, it can't be that.
                teacher1 Never too late to start I guess? I was thirty when I first smoked.
                t You sigh, looks like these two won't be of much help.
                player Well thanks anyway.
                t You walk out of the room and look around, you don't know where she is but maybe you can find someone who does.
			`);
            if(checkTrust("serious") >= 75){
                addFlag("accountant", "aaron");
                writeHTML(`
				    sp serious; im images/none.png; HIDDENAaand guess who's gonna be delighted to see seriousF S. seriousL again!
                    t The voice you hear from behind is so familiar that you wouldn't even need him to exclaim his full legal name to recognize who he is. Sure you needed someone who would be helpful but, he wasn't who you had in mind.
                    player Not me.
                    serious Rude, but I'm in a good mood today so I'll ignore that.
                    im images/serious/happy.jpg
                    serious Oh well, if you're lookin' for Ms. accountantL, I might know where she is.
                    t He puts his phone back in his pocket.
                    serious Though, if ya don't wanna talk to me that's fine too, I'm a good boy.
                    player If you're such a good boy, how about you stop playing around and tell me where she is?
                    serious E-Errr... diamondsF told me she's usually in the restroom at this time of day, and stays there for up to an hour.
                    t Up to an hour? Now that sounds interesting. He must think the same given the way he's smiling.
                    player What for?
                    serious I don't know for certain, but she's pretty sure the faint sounds coming from her stall are uhm... You get what I'm hinting at. And what's better, apparently the lock mechanism with that stall is pretty busted, one strong pull and you'd have the whole view for yourself.
                    player Now that's a good boy~ 
                    t He gulps with his eyes open wide as you ruffle his hair.
                    serious E-Ehhhhhh~ I-I'm just doin' my part in our deal? I said we'd help.
                    player ?gender male; One problem though, it's inside the girls' restroom. How am I supposed to get in there without risking it all?
                    serious ?gender male; Don't worry about it, I've got it covered.
                    player You're actually pretty nice to have around when you are not an asshole.
                    t He shakes his head.
                    serious Look, I love to talk but how about you get to it before she comes out? <font size= '-1'>I don't want my ass to compensate for her.</font>
                    player Okay then, make sure we stay alone in there.
                    serious Sure, if ya see a message from me stop whatever you're doing and hide.
                    trans accountantIa; name Continue;
                `);
            }
            else if(checkTrust("emotionless") >= 80){
                addFlag("accountant", "sasha");
                writeHTML(`
                    emo You are looking for accountantF, yes? 
                    im images/emotionless/025.jpg
                    player You sound like you know where she is.
                    emo She has a routine similar to my own before I met you, it's not too hard to think what she is busy doing.
                    player Excuse me?
                    t She checks her phone and shakes her head.
                    emo It would be quite a fun pastime to give you some clues to help you find her, unfortunately since I have jobs to attend I will give you the answer straight.<br>The restroom over there, stall three, doors don't lock properly and she is likely to be using her spare time to "increase efficiency".
                    player Huh?
                    emo Masturbation is another name for what she's doing.
                    t The way she says it so non chalantly almost makes you laugh.
                    player Wait, are you serious?
                    emo I don't think a joke of that caliber would be funny, she could use your "help" with what she is doing though. Heh, that is one entertaining thought, would be interesting to see how much she improves with it.
                    player This is how you are helping her?
                    emo I don't quite understand your reaction, I think both of you could benefit from that.
                    t She checks her phone again and puts it back in her pocket.
                    emo And that marks the end to my three minute break to gather my thoughts, I have to go.
                    t She quickly moves downstairs without even saying bye, leaving you all by yourself. Still, she left an important piece of information, one you could use for your benefit.
				    trans accountantIa; name Continue;
                `);
            }
            else{
                writeHTML(`
                    t After looking around for a little longer you finally give up, perhaps if you knew someone who would know where she is you could use their help. Though now you have to.
				    trans cancel; name Go back;
                `);
            }
			break;
		}
        case "accountantIa": {
			writeHTML(`
				player <i>Stall three huh? Well it's right in front of me, and a faint voice is coming from inside too.</i>
                t You pull the door but it doesn't open, you hear a loud cough from inside.
                player <i>...Actually I'm glad it didn't open, I almost forgot this.</i>
                t You take your phone out and turn your camera on, then pull the door at full force and.
                im 1b.jpg
                t *CLICK*
                acco ...No, I have nothing to say to defend myself.
                player I don't know how to reply, you're aware I have blackmail material right?
                acco I am.
                t You two stare at each other for a minute.
                acco So?
                player Hm?
                acco I don't think you are here to use the toilet, can you just let me finish this and tell me what you needed to say later? 
                t She looks dead serious as she says that, barely holding herself back from putting her toy back inside her.
                player No? I didn't come here to just take a picture and leave?
                acco If you have any terms you want to push on me as blackmail, you would need more than just a picture of me playing with myself. I am not afraid.
                player I didn't want to push any terms, though.
                im 1a.jpg
                acco Then? If you took the picture to pleasure yourself you are free to keep it.
                t You shake your head.
                acco I am out of guesses, could you enlighten me?
                player I... Nevermind, I just really wasn't expecting this type of a conversation.
                acco Would it please you if I just yelled "ahhh pervert" with all my power?
                t You shake your head again, walking into the stall and closing the door behind yourself.
                player I was actually thinking of helping you with what you are doing.
                im 1c.jpg
                acco T-That does not sound like a good idea, the janitors are bound to be here at any moment...
                player I think you like the risk though, otherwise you wouldn't be doing this here.
                t She looks away and for the first time you see her feel kind of ashamed.
                acco So... what do you suggest we do?
                im 1d.jpg
                acco W-Woah... and you already have the condom on, I believe it would feel kind of straining in your pants, am I correct?
                player I prefer not to answer.
                t She checks her phone with shaky hands.
                acco I have an offer, if you let me go for now I promise I will make up for it later, I don't think you would want to get caught and neither do I.
                player Hmmm... <i>It sounds like a good idea, even though I'm pretty sure we'll be perfectly fine it's better not to take any risks. Still, I kinda really wanna do this here.</i>
                acco I will see to it you will not regret it if you accept my deal, please.
                trans accountantIc; name Accept;
                trans accountant1; name Refuse;
			`);
			break;
		}
        case "accountantIc": {
            passTime();
            setTrust("accountant", 20);
			writeHTML(`
				player Let's do it your way then.
                t She nods her head quickly and puts on her pants.
                acco You have my word, I'm intrigued to see what you can do later.
                player Let's leave before anyone comes in, then.
                t ?flag accountant aaron; And the two of you leave the room, though it seems like your "friend" is still hanging around in front of the door.
                serious ?flag accountant aaron; So you really just let her go like that?
                player ?flag accountant aaron; I don't think it was worth risking it for now, yeah.
                serious ?flag accountant aaron; So it's "too risky" when you have to do her in a restroom stall, but when it comes to my ass suddenly it's okay to do?
                player ?flag accountant aaron; Exactly and you should take it as a compliment, actually how about you just get in there already?
                t ?flag accountant aaron; He looks down flustered.
                serious ?flag accountant aaron; F-Fine, BUT it'll only be a quickie, alright?
                t ?flag accountant aaron; Looks like you won't be going home empty handed anyway, nice.. 
                finish
			`);
			break;
		}
		case "accountant1": {
            passTime();
			writeEvent(name);
            setTrust("accountant", 15);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "accountantIIa": {
            if(checkTrust("dropout") > 0){
                addFlag("accountant", "chloe");
            }
			writeHTML(`
				t As you approach the door to the teachers' lounge, you hear accountantF's voice from inside.
                acco No- I- Yes, you should've told me sooner- You promised to- Can you let me talk for a second?
                t It looks like she's arguing with someone over the phone, though her wording stays the same you can sense some underlying anger from her voice.
                acco Listen- No, not that either- I prepared everything for your return- Yes that includes a place to stay- Yeah, this is an odd way of showing your gratitude- Yes I can make jokes also- No I did not receive an update, I am a human.
                t She keeps walking back and forth in the lounge as she talks.
                acco No, you are not "living your dream"- Then why do you need him to even afford your stay at that hotel?- Stop yelling please...
                t Her eyes widen the moment she notices you standing in front of the door.
                acco I have to hang up, I will call you again later.<br>S-So, how much of it have you heard?
                im umm.jpg
                player The last few minutes, who were you talking to?
                acco ...It is an old friend of mine. One of my old classmates, we are both graduates of this same school. Can't really call her a "graduate" though, she left the school on our last year to "chase her dream".
                player Her dream?
                im nyeh.jpg
                acco Can we talk about anything other than that fool? I am still a little angry.
                t You nod and look around to make sure no one is in the room.
                player How about we talk about the promise you've made?
                acco B-But..!
                t She's already flustered.
                acco But you did not do your part of the deal? You were supposed to not do it in that stall.
                player So you are going to say no?
                acco I am not going to say no, I am only asking you to word it better. For example you could say "could you demonstrate what you meant with your proposal in the toilet?" Or something that has a similar tone.
                player Let's pretend I said that, can you?
                t She nods.
                acco Perhaps I can, my schedule is clean and I am in the mood too... Meet me in the parking lot after school.
                player Got it, is there anything you wanna add?
                acco Yes. Do you think I look cute?
                player ...Of course.
                im heh.jpg
                acco Thank you, now if you'll excuse me I have a few jobs to finish.
                player Sure thing, see ya later!
                t ...
                sp accountant; im images/none.png; altColor #959595; I apologize if my home is too messy for you, I am not used to having guests over.
                t Being honest, it's one of the most neatly tidied places you've ever seen, not that you really care anyway with her standing in front of you like that.
                player It's a shame you don't come to school looking like this, you look a lot more uhm... "gentle" this way.
                im home.jpg
                accoa Is that really what you think? It's a shame then indeed, it's only natural I wear my business attire while doing business don't you think?
                player You look sharp in them, not going to lie. By the way, did you just turn on the music? 
                t You can swear you saw her smirk for a brief moment when you ask that.
                accoa That's the "theme" I chose for my home, I feel calmer and at ease with it. I composed it myself, by the way.
                player You composed this?
                t She looks so proud of herself as she nods her head.
                accoa I have a few hobbies you see, composing simple tunes is one. I have plenty of time for myself after school, which allows me to pick on fun hobbies.
                player You just can't stand being idle can you?
                accoa Wasting your time idly is fun but it does not feel fulfilling, I do not like it.<br>Speaking of which, don't you think we should quit stalling and get at it?
                player Now that sounds great~
                trans accountant2a; name Continue;
			`);
			break;
		}
        case "accountant2a": {
            passTime();
			writeEvent(name);
            setTrust("accountant", 30);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "accountantIIb": {
            addFlag("accountant", "tick");
			if(checkTrust("dropout") > 0){
                addFlag("accountant", "chloe");
            }
			writeHTML(`
				t As you approach the door to the teachers' lounge, you hear accountantF's voice from inside.
                acco No- I- Yes, you should've told me sooner- You promised to- Can you let me talk for a second?
                t It looks like she's arguing with someone over the phone, though her wording stays the same you can sense some underlying anger from her voice.
                acco Listen- No, not that either- I prepared everything for your return- Yes that includes a place to stay- Yeah, this is an odd way of showing your gratitude- Yes I can make jokes also- No I did not receive an update, I am a human.
                t She keeps walking back and forth in the lounge as she talks.
                acco No, you are not "living your dream"- Then why do you need him to even afford your stay at that hotel?- Stop yelling please...
                t Her eyes widen the moment she notices you standing in front of the door.
                acco I have to hang up, I will call you again later.<br>S-So, how much of it have you heard?
                im umm.jpg
                player The last few minutes, who were you talking to?
                acco ...It is an old friend of mine. One of my old classmates, we are both graduates of this same school. Can't really call her a "graduate" though, she left the school on our last year to "chase her dream".
                player Her dream?
                im nyeh.jpg
                acco Can we talk about anything other than that fool? I am still a little angry.
                t You nod and look around to make sure no one is in the room.
                player How about we talk about the promise you've made?
                acco But of course, I knew you would not forget what I said back then though...
                t She shakes her head with a sad expression.
                acco Unfortunately, Ms. principalL has just "blessed" me with an extra load of work earlier today, which was not a part of my plan. So unless you are unbothered by being my guest at my home I cannot arrange anything for now.
                player Being your guest sounds like fun.
                acco I have remarkable baking skills, however I am afraid these are not the "buns" you are after.
                t You laugh.
                player Maybe, but a little taste of your baking before that couldn't hurt, right?
                acco Perhaps, it is decided then, we will meet at the parking lot after school and you will be my guest for tonight. I can even drive you back home if we don't drink.
                player Got it, is there anything you wanna add?
                acco Yes. Do you think I look cute?
                player ...Of course.
                im heh.jpg
                acco Thank you, now if you'll excuse me I have a few jobs to finish.
                player Sure thing, see ya later!
                t ...
                sp accountant; im images/none.png; altColor #959595; The place might be a little messy, my apologies.
                t Being honest, it's one of the most neatly tidied places you've ever seen, not that you really care anyway with her standing in front of you like that.
                player It's a shame you don't come to school looking like this, you look a lot more uhm... "softer" this way.
                im home.jpg
                accoa Is that supposed to be a good thing? Then it's really a shame, it's only natural I wear my business attire while doing business don't you think?
                player You look sharp in them, not gonna lie. By the way, what's this music you just turned on? 
                t You can swear you saw her smirk for a brief moment when you ask that.
                accoa That's the "theme" I chose for my home, I feel calmer and at ease with it. I composed it myself, do you like it?
                player You really composed this yourself? 
                t She looks so proud of herself as she nods her head.
                accoa That's what I said. I have a few hobbies you see, composing simple tunes is one. I have plenty of time for myself after school, which allows me to pick on fun hobbies.
                player You just can't stand being idle can you?
                accoa Wasting your time idly is fun but it does not feel fulfilling, I do not like it.<br>Speaking of which, don't you think we should quit stalling and get at it?
                player Now that sounds great~
                trans accountant2b; name Continue;
            `);
			break;
		}
        case "accountant2b": {
            passTime();
			writeEvent(name);
            setTrust("accountant", 30);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "accountantIII": {
			writeHTML(`
				t You take a step inside the teachers' lounge, eager to see accountantF again. However you can't find anyone inside, not even someone you could ask about her.
                player Well, looks like luck's not on my side today. Maybe I should climb up to the roof and watch the sunset? I could use some "me time" right now...
                t With that in mind you head to the stairs to the roof, only to be stopped by a semi-loud "psst!" from behind after a few steps.
                player <i>...There goes my "me time"</i> Who is it?
                t At least you could make out where the voice was coming from, as you turn around you see a pair of eyes looking at you from inside the archive room.
                player accountantF?
                acco Hello, would you be so kind to help me out here? I'm having a little trouble.
                player Well since you asked nicely.
                t As you step inside the first thing you do is to instinctively reach for the light switch, which is enough for you to understand what's wrong.
                player A blackout? No that can't be, the digital clock on the hall is working fine.
                acco The old lights died on me while I was looking for a file in the archives, I have reported the lights were going to die out any minute to Ms. principalF two days ago and we're expecting them to be replaced tomorrow.
                t She stops with an upset look on her face.
                acco Unfortunately I need that file today, I could use my phone's flash for the job but I'm dangerously low on battery. What I'm trying to say is could you borrow me your phone for five minutes?
                player ...To be fair, this is not what I expected when you asked to meet me in a dark room.
                acco Would it help if I put my hands together and tilted my head to say "pleaaaase"?
                player I- What the fuck? This was almost funny.
                t She raises her head a little with her hands on her waist.
                acco It was meant to be amusing. And just so you know I would prefer doing "it" in a decently lit place, especially my home, which is where I'll be going once I find the file I mentioned.
                t She extends her right hand towards you, and continues with a more demanding tone in her voice.
                acco You're more than welcome to come with me, if I can just borrow your light for a minute.
                t You reach to your pocket and grab your phone, the moment you turn on its flash she just snatches it out of your hand with a quiet "thanks!" and runs off into the darker corners of the room.
                t You take a step forward with the intention of helping her, only to stop when you realize you don't even know which file she's looking for. Fortunately there is a chair next to the door so you can just sit down as you wait.
                acco H...I...J! Alright I found the J's! <font size= '-1'>Janna...Jasmine...Jenkins...J-</font> A-ha! Here it is!  
                t She returns your phone quickly, with a small kiss on your cheek.
                acco We can go home now, I got what I wanted.
                player Whose file were you even looking for anyway?
                acco Consider that kiss a bribe to not ask me that question. I might tell you when the time is right.
                player But-
                acco I think I deserve to keep secrets now and then, especially when they are personal.
                t You nod, there's no point in insisting when she is not willing to tell you anyway. You let her lead the way to her car once again, and prepare yourself for what's going to happen once you two get home.
                trans accountant3; name Continue;
			`);
			break;
		}
        case "accountant3": {
            passTime();
			writeEvent(name);
            setTrust("accountant", 40);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "accountantDO": {
			writeHTML(`
				t Since your watch is telling you it's already evening and you can't think of anything to do, you decide to wait for accountantF in your office just like she asked. You sit down on your chair and stretch your arms a little, and just as you start trying to find something to distract yourself with you hear a knock on the door.
                player Come in.
                t She walks into your room without wasting another moment, just to stop in front of your desk.
                player Why don't you take a seat?
                acco I would rather standing, I have no plans on staying for too long anyway.
                player Well? 
                acco It is about the friend I told you about before, do you happen to know a prostitute named dropoutF?
			`);
            if(checkTrust("dropout") >= 10){
                writeHTML(`
				    player I do, actually, but what business could you even have with someone like her?
                    t Her face lights up for a brief moment. 
                    acco This is great news! Could you please take me to where she is? There is something I must talk to her about in person.
                    player Can't you just ask her the address yourself?
                    acco She won't tell me, I don't understand why but she just doesn't. I just have to give her a few things, please...
                    t You sigh. 
                    player Fine, <i>I hope this ends well</i>.
                    trans accountantH; name Continue;
                `);
            }
            else{
                writeHTML(`
				    player I don't, unfortunately, but what business could you even have with someone like her?
                    acco Well I have my reasons, and since you can't help me with this one I'm afraid I can't really spend more time with you.
                    t Even with that wording that doesn't even sound like a threat or anything, you can tell she's genuinely upset about it as well.
                    player Well what are you going to do then?
                    acco I guess I will wait for you to find her while also trying to do so myself? I am not sure.
                    player Well... See you later then?
                    acco Hopefully, bye.
                    finish
                `);
            }
			break;
		}
        case "accountantH": {
			writeHTML(`
				im car1.jpg
                acco So this is the place? "Snowdrop Hotel", fair enough.
                t You enter the building with her, the two workers don't seem to be around so you just help yourself upstairs and knock on her door.
                player dropoutF! You there?
			`);
            if(checkTrust("dropout") == 100 && checkTrust("serious") >= 100){
                writeHTML(`
				    sp dropout; im images/none.png; HIDDENMy god those two useless goofballs..! Gimme a second hun!
                    player Okay..?
                    t You hear her talking with someone inside for a few seconds before the door eventually opens.
                    im images/dropout/intro1.jpg
                    dropout Welcome dear! Sorry for the inconvenience, I had to put on some-
                `);
            }
            else{
                writeHTML(`
				    sp dropout; im images/none.png; HIDDENCouldn't those two be more useless.. I'm here hun!
                    t She opens the door with a bright smile on her face.
                    dropout Welcome dear! I'm happy you decided to pa-
                `);
            }
            writeHTML(`
				t All of her enthusiasm fades away before your eyes the moment she notices the friend you brought in.
                dropout Oh great, hi accountantF...
                acco Nice seeing you again, dropoutF.
                t dropoutF gives you a mean look before welcoming you both in her room, it's just the same as you remember except for the maths textbook (the same one as you've seen other students holding) and a few pens.
                dropout Well, accountantF? What was so important that you went so far as to get playerF to bring you here?
                acco I got your documents, dropoutF. With these you should be able to apply for the program I told you about and return to school from grade four! You will have to attend school only one more year and then you will never have to do "this" again!
                dropout And would you be so kind to tell me where I'm supposed to get the money for that, sweetheart?
                t As you are trying to catch up with their conversation, accountantF pulls out an envelope out of her purse.
                acco This should be enough, you can pay me back whenever you want.
                t dropoutF looks down, and then in your eyes.
                dropout Fine, I'll think about it. But I'd rather be left alone for now, all of this is too much to handle for me and-
                acco Sure, C'mon playerF, let's go!
                player ...Okay?
                dropout ...
                t The moment you two leave the room you can feel her tugging on your tie, literally dragging you outside. 
                acco Excellent excellent excellent! It's all going so swimmingly I can hardly believe it!
                player Excuse me but what the hell are you talking about? And why did I have to witness that conversation?
                acco Oh.
                im come.jpg
                acco I thought it was clear enough? You will help me convince her to return to the school?
                player And why should I?
                t She shakes her head.
                acco Do I really have to explain? If she returns to school she won't have to <font size= '-1'>sell her body</font> anymore.
                player And?
                acco Blast! You're really thickheaded.
                t She takes a deep breath.
                acco Sorry, what I am saying is if she returns to school and stops prostituting then that means you will be the only person to "have fun" with her, only you!<br>Additionally you will have my thanks, and I will make sure to show it in a way you love.
                player I see, can you stop pulling my tie now? I can walk on my own.
                acco Oh- I'm sorry.
                t She starts her car as you sit next to her.
                player So, what now?
                acco I was thinking about giving you an example on how I show my gratitude.
                player Sounds good to me, so we're going back to your home?
                acco Actually...
                trans accountant4; name Continue;
            `);
			break;
		}
        case "accountant4": {
            passTime();
			writeEvent(name);
            setTrust("accountant", 60);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "accountantV": {
			writeHTML(`
				t As usual, she is not where you expect her to be. You sit down and wait for her when you hear your phone go *plink* with a notification.
                player <i>"Come downstairs, I'm in the computer room"? Sure.</i>
                t You take your time while making your way to the computer room, it's not like you have to hurry everywhere after all. When you finally get there you find accountantF sitting in front of a computer giggling.
                acco Hey playerF! Come look at this!
                t You take a chair and sit next to her only to find a weird looking application named "Your name means" on the screen.
                player And what is that supposed to be?
                acco Apparently, this is an application that tells you what your name means, but it looks so weird and gives such funny answers that I think the intern working here coded it.
                player Well that's interesting, what names did you try?
                t She gestures at herself.
                acco My own of course! I tried accountantF and look.
                t She types her own name on the tiny text box that's not even centered properly on the screen and points at the result: "accountantF: I don't know what to name my child so I guess I will go with this". Just one look at her face is enough for you to join her laughter.
                player Try mine next, I want to know what he said about me.
                acco "playerF: pay me a visit sometime, emoticon heart(<3)". Huh?
                player ...Yeah let's ignore that, how about principalF?
                acco "principalF: someone nice enough to not kick me out of the school for pulling a prank like this, colon three(:3)". Looks like he did NOT want to test his luck here.
                t Sure, this is not what you are here for, but it wouldn't hurt to have some fun with her.
                player Try Daniel, I wonder what he did for that name.
                acco "Daniel: An AMAZING person everyone on the earth should love and/or respect". I believe we found our culprit.
                player I think the program is a little biased huh?
                acco Seems fair to me, I am going to bow down before our benevolent lord Daniel and pay my respects if you don't have anything else to say.
                player Just out of curiosity, I want you to try one last name.
                acco Sure, go ahead.
                trans skye; name heartsF;
                trans tia; name neetF;
                trans val; name ayeyeF;
			`);
            if(checkTrust("serious") > 0){
                writeHTML(`
				    trans aaron; name seriousF;
                `);
            }
            if(checkTrust("intern") > 100){
                writeHTML(`
				    trans theo; name Theodore;
                `);
            }
			break;
		}
        case "skye": {
			writeHTML(`
				player heartsF.
                acco heartsF? Like heartsF heartsL?
                player Yeah, I wonder what her name "means".
                acco Okay, here goes. "heartsF: Stupid but in a hot way, annoying but fun." I had tried a bunch of random names and it usually gives out the answer as "Silly person who looked up a lame name", so he actually wrote this himself instead of defining it with a code.
                player These two could be good friends you know.
                acco No doubt, Ms. heartsL is a nice girl.
                t She turns the computer off.
                acco Well, I believe it's high time we made our way back to my home.
                player Sounds fun.
                acco I'm exhausted though, there won't be much happening today.
                trans accountant5; name Continue;
			`);
			break;
		}
        case "tia": {
			writeHTML(`
				player neetF.
                t You hear a soft yawn from across the room.
                neet Hmm? 
                player ...Forgot you could be here, just go back to your nap neetF.
                t She shrugs and lays back down, leaving you two "alone" again.
                acco ...Okay then, let's try it. "neetF: Hiya boss, have a good day! o slash(o/)"? 
                player This was simple but weird.
                acco My best bet is that she taught him how to code.
                t She turns the computer off.
                acco Well, I believe it's high time we made our way back to my home.
                player Sounds fun.
                acco I'm exhausted though, there won't be much happening today.
                trans accountant5; name Continue;
			`);
			break;
		}
        case "val": {
			writeHTML(`
				player ayeyeF.
                t She starts rambling as she types.
                acco Ooooh this should be fun, she is one of the most attractive students on the board so I think our little developer will try to find a way to imp-
                t She REALLY struggles to hold her laughter as she reads the definition appearing on the screen.
                acco "ayeyeF: Loud".
                player I don't think this is an attempt to impress.
                acco Not at all, this is the only one word definition I've seen.
                t She turns the computer off.
                acco Well, I believe it's high time we made our way back to my home.
                player Sounds fun.
                acco I'm exhausted though, there won't be much happening today.
                trans accountant5; name Continue;
			`);
			break;
		}
        case "aaron": {
			writeHTML(`
				player seriousF.
                acco Oh dear, you do know they don't like each other at all, right?
                player I think they do, theirs look more like a love-hate relationship where both sides would cry for days if the other one died.
                acco If you say so... Let's see, seriousF, enter-<br>My god, this is a pretty long list of insults...
                t And it really is, a list of insults ranging from "ugly", "broke" and "stupid" to "fucking asshole", "piece of shit" fill five whole rows on the screen.
                acco Hey, at least he wrote "still cute tho, love ya Lucky Luke <3" at the end, that's something.
                player I told you, though this is not what I expected.
                acco It sounds like they would strangle each other to death but occasionally kiss while doing so.
                player ...I don't think they would kiss but they would definitely call each other pretty.
                t She turns the computer off.
                acco Well, I believe it's high time we made our way back to my home.
                player Sounds fun.
                acco I'm exhausted though, there won't be much happening today.
                trans accountant5; name Continue;
			`);
			break;
		}
        case "theo": {
			writeHTML(`
				player Theodore.
                acco Don't think I recognize that name, care to elaborate?
                player Don't think I will, just enter it.
                acco I will have to oblige then. Let's see..<br>"Theodore: A big moron who somehow gives the warmest hugs and is both the nicest and meanest person on this earth" Huh?
                player ...That's actually sweet of him.
                acco You know that Theo, don't you?
                player I do, but the same way I don't question other people for dropoutF's old name, you better not push internF for information about that.
                acco I don't really care about that kind of info anyway, that would be more seriousF's gang's concern.
                t She turns the computer off.
                acco Well, I believe it's high time we made our way back to my home.
                player Sounds fun.
                acco I'm exhausted though, there won't be much happening today.
                trans accountant5; name Continue;
			`);
			break;
		}
        case "accountant5": {
            passTime();
			writeEvent(name);
            setTrust("accountant", 80);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "": {
			writeHTML(`
				
			`);
			break;
		}
        case "": {
			writeHTML(`
				
			`);
			break;
		}
        case "": {
			writeHTML(`
				
			`);
			break;
		}
        case "": {
			writeHTML(`
				
			`);
			break;
		}
        case "": {
			writeHTML(`
				
			`);
			break;
		}
        case "": {
			writeHTML(`
				
			`);
			break;
		}
		case "": {
            passTime();
			writeEvent(name);
            setTrust("accountant", );
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "": {
            passTime();
			writeEvent(name);
            setTrust("accountant", );
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "": {
            passTime();
			writeEvent(name);
            setTrust("accountant", );
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "": {
            passTime();
			writeEvent(name);
            setTrust("accountant", );
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
	{index: "accountant1", name: "Inconvenience"},
    {index: "accountant2a", name: "Experiment"},
    {index: "accountant2b", name: "Agreement"},
    {index: "accountant3", name: "Benefits"}, 
    {index: "accountant4", name: "Partnership"},
    {index: "accountant5", name: "Dedication"}, 
    {index: "accountant6", name: "Climax"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "accountant1": {
			writeHTML(`
                define acco = sp accountant;
				player I'm sure we'll be just fine if we do it quick.
                acco I see, it seems even the risk factor is not enough to stop you.
                t She sighs.
                acco Go on then, I am not going to waste any more time telling you how dangerous this is.
                player That's better, now.
                im 1e.jpg
                acco Nmph~
                t Though doing it here right now is okay, you can't really risk being loud right now. So you take it slowly and do it as gentle as you can.
                im 1f.jpg
                acco <i>So that's how it feels..?</i> 
                player <i>She's trying so hard to stay quiet isn't she? It'd be fun making it harder for her, too bad we have to keep quiet.</i>
                t Yet, you decide to speed up a little, slowing down every time she starts getting noisy.
                acco Nnh... Say, am I right to assume this is the most "moderate" performance you can do?
                player I'm far from giving it my all, yes.
                acco ...
                im 1g.jpg
                t You keep thrusting at a rather slow speed for about another minute, watching her expressions change as it gets harder and harder for her to keep it down even though you aren't speeding up.
                acco <i>The janitors are this late? That's odd...</i>
                player I'm pretty close accountantF, just keep your voice down for a few more seconds and...
                im 1h.jpg
                acco Ohhh... <i>I-I can feel its warmth through the rubber..? My mind's a little cloudy too.</i>
                t You finally pull out once you are done cumming, she's staring at your shaft with her eyes unfocused while breathing out of her mouth softly.
                im 1i.jpg
                acco <i>I will definitely need to experiment more with *him, but who helped *him figure out where I am and what I would be doing? Why would they? I didn't think anyone would know this... Should I focus on their blessing or finding the blesser or blessers?</i>
                acco W-Well, I... We should go now.
                player Yeah, before anyone comes in, right?
                t She gets up and quickly puts on her pants, then rushes out of the restroom before you can even get up. 
                t ?flag accountant aaron; You also leave the room a minute after she does, looking to your right you see two janitors trying to mop a huge mess off the floor. When you look down you notice a tiny note right next to your foot so you pick it up and check it.
                player ?flag accountant aaron; <i>"Now ya owe me one <3 - A. L." Did he really create a mess just to buy me some time? Well it sure helped I guess.</i>
			`);
			break;
		}
        case "accountant2a": { //no deal
			writeHTML(`
				define accoa = sp accountant; im images/accountant/accoa.jpg; altColor #959595;
                accoa After our last time together, I was sure you would try a "more direct" approach.
                im 2a.jpg
                player Hmmm... But this isn't something you can really complain about, right?
                accoa I did not mean to sound ungrateful. This is strangely pleasant, yes.
                t It's not hard to understand why she is confused, she was most likely expecting something more rough, given how you are alone together this time.
                im 2b.jpg
                accoa Hnn...
                player How are you so aroused already? Have we struck a closeted pervert hm?
                accoa Of course I am turned on, it's hard not to be when you act like this.
                t She still sounds cold despite how hot her body is getting, a "most commendable composure" as she would probably say.
                im 2c.jpg
                accoa <font size= '-1'>Eep-</font>
                t ...Or not.
                player Was that an "eep" I just heard?
                accoa I-I have nothing to be ashamed of, but you are correct.
                im 2d.jpg
                t Her breaths keep getting sharper as you keep moving your fingers on around her pussy while making out.
                accoa T-This is not even foreplay, is it *sir?
                player Sounds like you are onto me, what do you think this is then?
                accoa I-It's difficult to think while your hands are all over me, you know. Could you give me a second?
                im 2e.jpg
                t You hold your hands still to make her job a little less difficult, even though messing with her thoughts is more fun you are curious to see what conclusion she'll come up with.
                accoa Now I am thinking and trying to see this from your perspective. I believe you want me to "beg" for it, would this satisfy your ego?
                player ...It would, yeah.
                im 2f.jpg
                accoa Mmaah~ And what if I refuse to do it the easy way? I think me playing along would be a lot more enjoyable for both of us rather than me submitting spontaneously.
                player You know what, that sounds like fun.
                im 2g.jpg
                player I'll be leaving for now then.
                accoa Huh..?
                player If you are not begging for it, I think I'll just get up and leave for now.
                t She bites her lips, barely holding herself back from clinging onto your arm.
                accoa I-I will not give up this easily, it wouldn't be fun if I did.
                player Good girl~
                t Even though you say that with your back turned, you're sure you could hear her shudder a bit at the word. After that you just pick your jacket up and leave for now.
			`);
			break;
		}
        case "accountant2b": { //deal
			writeHTML(`
				define accoa = sp accountant; im images/accountant/accoa.jpg; altColor #959595;
                accoa I... certainly expected something else when I agreed to this.
                im 2a.jpg
                player You sound like you are not pleased.
                accoa Do I? Well I can say this is quite enjoyable actually, not what I was expecting but enjoyable regardless.
                t You can't really blame her for thinking it would be a different case today, after all she promised for something "better" than what you could do back in that stall and yet you are settling for just this. But it is not without a reason, it wouldn't be as fun if you did everything from the very beginning.
                im 2b.jpg
                accoa Mmmh... To think this is my first sexual experience with someone, at least where I don't play a masculine role...
                player Huh?
                accoa Blast- How did that slip out... F-Forget what I just said.
                im 2d.jpg
                player I'm pretty curious actually, how about you tell me a little more about that?
                accoa Nh-Ahh~ I think I will have to refuse, this is a more private matter. And no, being able to touch my "privates" does not mean you have full access to my privacy.
                player Jeez okay, you sound a lot colder when you are trying to defend yourself.
                t You squeeze her breasts a little more, which to your surprise makes her eep loudly.
                im 2c.jpg
                player Talking about cold, are you aware of how hot your body is getting?
                accoa Nghh~ It's no big deal I am turned on, I told you this is my-<br>No, not doing that same mistake again.
                t She lets out another almost silent moan and look directly into your eyes.
                accoa Ahmmm *sir... This is not even foreplay, is it?
                player Hmm, I wonder what makes you think that.
                accoa Y-You know, it's not really easy to consentrate when your body is being groped and fingered everywhere, my body is really sensitive.
                t Normally it's a lot more fun to overstimulate your partner to the point they can't think straight, but since she made you feel intrigued you do an exception by stopping yourself for a few seconds, giving her room to think.
                im 2e.jpg
                player There you go, now tell me what this is.
                accoa If I try and view this from your perspective, it surely would be fun to have sex on the first opportunity. But what could be more enjoyable than that? Surely it would be to "break" me down and make me "beg", would that satisfy your ego?
                player ...Pretty much so.
                im 2f.jpg
                t Saying that, you get back to moving your hands again, even more than before this time.
                accoa N-Nyaaah~ And I think I will do this the hard way. I will play this little game along, after all it would be a lot less enjoyable if I submitted spontaneously and started begging right away, am I wrong?
                player So what you're saying is...
                accoa <b>Try and break me *master, just for the fun of it.</b>
                player ...Looks like this'll be more enjoyable than I thought it would be.
                im 2g.jpg
                player So you wouldn't try and stop me if I wanted to leave, right?
                t You can clearly see her biting her lips as she barely stops herself from clinging onto your arm.
                accoa No *sir, I will not change my mind this easily, I can even offer you a ride back home.
                player Good girl~
                t Even with your back turned, you can still hear her yelp at the word. After which you leave her home to make your way to yours.
			`);
			break;
		}
        case "accountant3": {
			writeHTML(`
                define acco = sp accountant;
                define accoa = sp accountant; im images/accountant/accoa.jpg; altColor #959595;
				t It doesn't take long until she finally stops the car in front of her house and gets out slowly. Pulling her keys out of her purse as she takes her time walking to the door.
                player Something in your mind? 
                acco It's nothing, I was just thinking of what to do once you're gone.
                player And?
                acco I couldn't think of anything good, I think I will give it another thought once we are done.
                t She pushes the door open and walks inside, you can't really put your finger on it but she is a little different tonight.
                t ...
                player So, are you ready?
                accoa I am ready, don't worry about me.
                im 3a.jpg
                accoa ...And let me worry for myself instead. Because that looks like it's gonna be painful.
                player I can just keep it gentle if you want.
                accoa Again, let me worry for myself. I like to experiment and that includes testing my limits. <b>So do as you please~</b>
                im 3b.jpg
                accoa Mmm...
                t Now that you can finally stop going easy on her, you see no reason not to do so. You firmly hold both of her legs as you keep thrusting yourself deep inside her.
                im 3c.jpg
                accoa ...Hnn~ O-okay.
                player Hm? 
                accoa I... Just noticed I may have asked for way more than I can handle.
                player Oh yeah, you did.
                im 3e.jpg
                accoa NNNH..!
                player Doesn't mean I'll stop, though.
                accoa <i>...Sounds fun.</i>
                t There is not another word neither of you can say now, just little groans and moans escaping your mouths occasionally as you ride the wave of pleasure. Even though she's not the most expressive person you know in her casual life, she's not holding back any noises she can make right now.
                t It only takes you a few minutes to feel that you're getting close to reaching your climax, and the same could be said about her given the way how she keeps squirming with your each thrust.
                player accountantF... I'm about to-
                accoa Huff... Don't waste your breath and do it already! Just... Cum!
                t And right as she finishes you do, just to almost collapse with all the tiredness suddenly hitting you.
                im 3f.jpg
                accoa Mmmhh... I- I am sorry.
                player Huh?
                accoa You almost collapsed and I couldn't even raise a hand to try and prevent it, I apologize.
                player I didn't expect you to though.
                accoa The bathroom is across the hall, make sure you don't take too long in there.
                player Jeez, okay boss, whatever you say.
                t You then grab a towel and enjoy the warm water before she drives you back home, it's actually pretty nice to not walk your way back every once in a while!
			`);
			break;
		}
        case "accountant4": {
			writeHTML(`
                define acco = sp accountant;
                define accoa = sp accountant; im images/accountant/accoa.jpg; altColor #959595;
                t After a bit of driving, she stops the car on a remote part of the town. You can't see anyone on the either side of the road, looks like she's had this in her mind for a while given how confident she is sliding her panties down.
				acco Looks safe enough for me, but you're the expert.
                player Yeah, I don't see anyone on either side of the road. And personally I have never been to this side of the town, I'm just finding out that it exists.
                acco I believe I deserve a round of applause then.
                im 4a.jpg
                acco ...Sure, that also works.
                player I'm waiting for it to work.
                t She looks clueless for a second, trying to make heads and tails out of what you just said. And when she finally understands it she doesn't lose another moment to take you in her mouth.
                im 4b.jpg
                player That's better, now tell me when did you first think of taking me here?
                t With a pop, she pulls your dick out of her mouth to give an answer. Her warm breath on your throbbing member makes your whole body shiver.
                acco About two days ago, I decided to ask a student (I believe you know who I am talking about) for a place like this, he was pretty cooperative when I offered him some nice meal in return.
                player So you had this planned.
                im 4c.jpg
                acco Living without a plan is much like walking around without any clothes, sometimes hot, never professional.
                t She lets out a giggle before taking you back in her mouth, still laughing at her own joke while bobbing her head softly.
                player And what exactly is so "hot" about it?
                acco In a sense, it's being ready for whatever comes your way. You didn't have a plan today, only a goal, and I was that goal.
                t She strokes your cock a little with one hand, preparing herself for what she will say next.
                acco And I believe that was very <i>hot</i>.
                t She starts moving both her hand and her head faster, letting her tongue swirl around your shaft.
                acco <i>And it would be a lot hotter if I could just get you to fill my mouth-</i>
                player I-
                t Normally you can usually let out an "I'm gonna cum" or at least "I'm gonna-" when you are about to finish, but given her unusual determination and the sudden change in her pace...
                im 4d.jpg 
                t Even that "I" hardly escaped your mouth.
                acco <i>Just like this~</i>
                im 4e.jpg
                player Fohhh~
                im 4f.jpg
                acco Do I look good like this?
                player Really...
                acco Good, now is there any chance you brought a condom with yourself?
                t ...
                t You can tell two things, one is that she definitely didn't enjoy that "no" you gave as an answer.
                im 4g.jpg
                t And two, it still was not enough to stop her.
                acco This was bound to happen sooner or later, I should've taken those birth control pills.
                player I mean I wouldn't mind doing it another time if that is the case.
                acco I don't think you could be considered our protected sex example here. For once I choose to do now and worry later. 
                player Yeah I respect that but don't you think your car's backseats are a little too crammed for that?
                im 4h.jpg
                t She sighs.
                acco When I bought the car, I didn't buy it with the idea of getting piped in the back. Yes, I just said piped, now quit stalling!
                player Well looks like it's the only way to stop you from beating me up so...
                im 4i.jpg
                t You can feel her relax a little.
                acco A-Ah.. I wasn't going to beat you up I was just too pent up to keep waiting with my back turned.
                player That was a joke.
                acco Oh.
                im 4j.jpg
                t Her getting louder is not the first thing you would want while doing it in public, but so far it seems okay with no one coming around to investigate.
                acco C-Can't be quiet... Damnit!
                im 4k.jpg
                acco Ahhh~ Yeshhh... I know it's foolish but I'll say it.
                im 4l.jpg
                acco <b>Having you raw feels so much better~!</b>
                t You let go of her arms and push her against the door, letting yourself enjoy her tits while she keeps yelping and trying to quiet herself with no hope.
                im 4m.jpg
                acco A-Are you sure about this? I can see the road and I believe anyone passing by could see me.
                player It'll be okay, you know there is no one around.
                t Even though you say that you speed up a little, you don't have all day until someone in the town finally decides to use this road. Suddenly you feel her tighten around you with her body shaking.
                acco I-I see headlights!
                im 4n.jpg
                player It's just a car passing by, they won't stop to look at you.
                acco Yeah but what if-
                player You know what, I'm tired of this.
                t You start pushing yourself inside her even rougher, making her yelp as she tries to keep her moans in.
                player What happened to the do now worry later huh?
                acco playerF...
                t A second of silence before you feel her tighten around you even more.
                acco <b>FILL ME UP RIGHT NOW!</b>
                t You couldn't say no even if you wanted, so you oblige just as the other car is passing by.
                im 4o.jpg
                acco Yehhss~
                t Her body starts shaking as the realization of what she just did sets in.
                acco playerF...
                player Yes, accountantF?
                im 4p.jpg
                acco Try not to spill anything on the seats will you~
                t Easy for her to say...
            `);
			break;
		}
        case "accountant5": {
			writeHTML(`
				define acco = sp accountant;
                define accoa = sp accountant; im images/accountant/accoa.jpg; altColor #959595;
                player Are you sure just this much will be enough?
                accoa You sound like there is a problem?
                im 5a.jpg
                accoa You can't really say you don't like this, can you?
                t You'd have to have lost your mind to say something like that, even the warmth from her breathing alone is enough to send a shudder down your spine, but still.
                player I'm not saying this is any bad, will you be satisfied with just this much when we've been doing way more since the beginning??
                accoa I'm not trying to have more and more every time though? All I want is something quick so I can enjoy it without getting more tired.
                t You clench the bedsheets in your hands when she slowly moves her tongue along your length.
                accoa And if you are that concerned with my performance, I can tell you our next time will be much better than this, much more intense~<br>But right now...
                im 5b.jpg
                accoa I think this suits our partnership better~
                t She's not wrong. Sure, you are greedy, but making it more and more intense all the time would make it almost like a goal rather than something you are doing for your own enjoyment. So you just close your eyes and let her have it her way.
                accoa That's better, you look more relaxed now. <font size= '-1'>And even pretty, dare I say.</font>
                player Was that a confession?
                accoa <i>Maybe.</i>
                t You smile and stop talking to let her do her job easier, with her head bobbing up and down on your cock, you feel like you won't last much longer after just a few minutes.
                player accountantF...
                accoa Hm?
                im 5c.jpg
                accoa Oh, I see. Just let it out then~
                t She takes it out of her mouth to start licking the same moment you blow your load, she looks a little confused at first.
                im 5d.jpg
                accoa Didn't think you were that close, to be honest~ A close call.
                player Mmh... Didn't think you'd take it out to be honest.
                accoa I didn't feel like doing it today, you know. Watching it spray out was really...
                im 5e.jpg
                accoa ...Maybe for the first time in my life, I can't seem to find a word to describe what I'm trying to say.
                player Hot?
                accoa Not the word I'm looking for, but it was if I'm being honest. But I have a question.
                player Yeah?
                t She looks away shyly for a moment before continuing.
                accoa Did you enjoy it?
                player I did, why do you even ask?
                accoa I haven't done it the way you wanted, so I was anxious you wouldn't enjoy it as much as I did.
                t You bring your hand near her face to caress it gently, she looks a little nervous about it at first but doesn't try to stop you.
                player Well it's as you said, we can take it slow sometimes as well. It was really good regardless.
                im 5f.jpg
                accoa Eeeeeeeeee~
			`);
			break;
		}
        case "": {
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
	{index: "accorequest", trust: 40,},
    {index: "incomplete", trust: 80,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "accorequest": {
			//Write the even(t's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
            writePhoneSpeech("accountant", "", "Good morning playerF.");
            writePhoneSpeech("accountant", "", "Can we meet in your office today?");
            writePhoneSpeech("player", "", "Huh? Sure but why?");
            writePhoneSpeech("accountant", "", "I have something I want to tell you privately, I am sure you would understand.");
            writePhoneSpeech("player", "", "Fine, when should I expect you to come around?");
            writePhoneSpeech("accountant", "", "Evening should be fine, see you later.");
            writePhoneSpeech("player", "", "Okay, bye!");
			break;
		}
        case "accorequest": {
			writePhoneSpeech("accountant", "", "You have reached the current end for accountantF's content, but don't worry, more will come with the next update (hopefully, writing hasn't been as much fun as it used to be lately)! Hope you enjoyed it.");
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