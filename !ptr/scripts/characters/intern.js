var character = {index: "intern", fName: "Dan", lName: "Flint", trust: 0, encountered: false, textEvent: "", met: false, color: "#2388ED", author: "KH_Ace", artist: "", textHistory: "", unreadText: false,};

var logbook = {
	index: "intern", 
	desc: "Short tempered student boy in charge of computer room during daytime, he's easy to piss off but harmless",
	body: "A blonde boy with blue eyes and a distinctly feminine body, taller than most other twinks you see around in the school",
	clothes: "Usually wears his school uniform but of course he has casual clothes too, you hope",
	home: "Says he lives somewhere around the shopping district, meaning he either lives in a cardboard box or has some serious money",
	tags: "Trap, tomgirl, anal, crossdressing, threesome, hypnosis, brat, cosplay",
	artist: "Morino Kuma, Toxic Love(second half)",
	author: "KH_Ace",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "introintern", name: "Someone's muttering near the computers", location: 'computerRoom', time: "Morning", itemReq: "", trustMin: 0, trustMax: 0, top: 0, left: 0, day: "both",}, 
    {index: "meetagain", name: "intern is working on computers again", location: 'computerRoom', time: "Morning", trustMin:30, trustMax: 30, itemReq: "", top: 0, left: 0, day: "both",},
    {index: "dateout", name: "intern is playing with his phone inside", location: 'computerRoom', time: "Morning", itemReq: "", trustMin: 40, trustMax: 40, top: 0, left: 0, day: "both",},
    {index: "inrestroom", name: "intern seems troubled about something", location: 'computerRoom', time: "Morning", itemReq: "", trustMin: 60, trustMax: 60, top: 0, left: 0, day: "both",},
    {index: "classvisit", name: "intern's class is over", location: 'classroomA', time: "Evening", itemReq: "", trustMin: 80, trustMax: 80, top: 0, left: 0, day: "odd",},
    {index: "postQuo", name: "intern is here", location: 'computerRoom', time: "Morning", itemReq: "", trustMin: 100, trustMax: 666, top: 0, left: 0, day: "both",},
    {index: "devilQuo", name: "You should be able to find intern and Theo's house from here", location: 'shoppingDistrict', time: "Evening", itemReq: "", altImage: "images/intern/indamn.jpg", trustMin: 666, trustMax: 666, top: 0, left: 0, day: "even",},
    {index: "devilQuo", name: "You should be able to find intern and Theo's house from here", location: 'shoppingDistrict', time: "Evening", itemReq: "", altImage: "images/intern/blessed.jpg", trustMin: 666, trustMax: 666, top: 0, left: 0, day: "odd",},
    {index: "internHotelGood", name: "Find intern", requirements: "?flag succubus hotelGood; ?trust intern 666;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
    writeHTML(`
		define player = sp player;
		define intern = sp intern;
		define blessed = sp Theo; im images/intern/blessed.jpg; altColor #B1355D;
		define indamn = sp intern; im images/intern/indamn.jpg; altColor #C078A1;
        define serious = sp serious;
        define intran = sp intern; im images/intern/intran.jpg; altColor #C05DE5;
	`);
	switch (name) {
        case "cancel": {
			unencounter("intern");
			changeLocation(data.player.location);
            break;
		}
		case "introintern": { 
			writeText("You decide to take a peek at the computer room when you suddenly hear a boy muttering to himself.");
			writeText("You slowly enter the room and see the boy trying to turn on a computer while cursing under his breath.");
			writeSpeech("intern", "", "<font size='-1'><i>Fuck fuck fuck why don't you just turn on already?</font></i>");
            writeText("... And apparently not making any progress. You approach the boy from behind and cough to get his attention.");
			writeSpeech("player", "", "Anything wrong in there?");
            writeSpeech("intern", "", "<b>EEK!</b>");
            writeBig("images/intern/crwhaaa.jpg", "art by Morino Kuma");
            writeText("You scared him, what made you think it'd be a good idea to sneak up on someone like that?");
            writeSpeech("intern", "", "A-and you are..?");
            writeText("You nod you head and introduce yourself.");
            writeSpeech("player", "", "The school's counselor, playerF. And you are?");
            writeSpeech("intern", "", "Name's "+fName('intern')+" "+lName('intern')+", so do you <i>usually</i> scare the bejezus out of the students *Mister counselor? Seems like a shitty thing for a counselor to do.");
            writeSpeech("player", "", "Only the ones that seem distracted by a problem, and you do seem to be dealing with a problem here.");
            writeText("He looks away scornfully and rubs his arm, seems you hit the nail on the head.");
            writeText("Finally he admits defeat with a heavy sigh.");
            writeBig("images/intern/crsad.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Yeah, I have to check this one for viruses and other stuff, but it won't turn on.");
            writeText("Well, that much was apparent...");
            writeSpeech("player", "", "Well, not to be more of an asshole but...");
            writeText("You point at the power outlet.");
            writeSpeech("player", "", "... You should plug it in first.");
            writeText("His eyes slide to the outlet and you hear him whisper.");
            writeSpeech("intern", "", "<i>You've gotta be shitting me...</i>");
            writeBig("images/intern/crduh.jpg", "art by Morino Kuma");
            writeText("He gets down to plug the computer and...");
            writeText("...Nothing happens. Huh, you were pretty sure that was the problem.");
            writeText("He gets back up with his hands on his waist.");
            writeSpeech("intern", "", "But if that's not- Then- Agh! What the hell is wrong with this thing??");
            writeText("He looks back at you.");
            writeSpeech("intern", "", "You got any other smartass guesses in mind playerMister counselor?");
            writeText("You shrug. That was about all you had.");
            writeText("He laughs and nods:");
            writeBig("images/intern/crcute.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Don't worry about it, I am the intern here after all.");
            writeText("He sighs and continues:");
            writeSpeech("intern", "", "And well, at least we ruled that one option out huh?");
            writeText("He's trying to play it off, but he's obviously still pissed.");
            writeSpeech("intern", "", "Well, back to square one...");
            writeText("You think walking away but it's not like you've got anything else to do anyway, plus, he seems pretty cute.");
            writeSpeech("player", "", "internF, you want me to give you a hand for a while?");
            writeText("He looks back at you with questioning eyes.");
            writeBig("images/intern/crwut.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Well, you know I need to do more than check the plugs right? Like I have to run Antivirus programs and report anything unusual.");
            writeSpeech("player", "", "Can't be that hard.");
            writeSpeech("intern", "", "You know what, that'd actually be awesome.");
            writeText("And there you go. A smile..");
            writeSpeech("intern", "", "But... Don't you have more important things to do?");
            writeSpeech("player", "", "Well, helping students is part of our work so this is technically my job.");
            writeText("He seems satisfied with that answer.");
            writeSpeech("intern", "", "Let's get to work, then!");
            passTime();
            raiseTrust('intern', 30);
			writeFunction("writeEncounter('help')", "Help him check the computers");
			break;
		}
        case "help": {
            writeText("After an hour and half you're finally done.");
            writeText("It took a little longer than expected, but without you internF would have been here for a long time.");
            writeSpeech("player", "", "Does it always take this long?");
            writeSpeech("intern", "", "Usually takes a lot more so...");
            writeText("He gives you a slight bow, and laughs as he thanks you.");
            writeSpeech("intern", "", "I guess I owe you a drink, huh?");
            writeText("You chuckle a bit too.");
            writeSpeech("player", "", "I guess it's a date.");
            writeBig("images/intern/crumm.jpg", "art by Morino Kuma");
            writeText("He clearly blushes, but quickly tries to hide it.");
            writeSpeech("intern", "", "H-Hey..!");
            writeText("His face scrunches up seriously for a moment.");
            writeSpeech("intern", "", "If I were going to ask you on a date, I'd try to be a little more... I dunno, Respectful? Just... Look, I'll get you a drink, okay?");
            writeText("You laugh again, softly, and it seems to disarm him, because after a moment he's lightened up and laughing too. He shakes his head and grabs his bag as he heads towards the door.");
            writeSpeech("intern", "", "Well, guess I'll be off, see you later!");
            writeSpeech("player", "", "Alright then, I'll be around too.");
            writeText("And with that, both of you leave the computer room.");
            writeFunction("changeLocation('eastHallway')", "Go Back");
			break;
		}   
        case "meetagain": {
            if(checkTrust('meji') <41){
                if(checkTrust('neet') >4){
                    addFlag("intern", "neetav");
                }
                writeText("You enter the room and see internF.");
                writeSpeech("intern", "", "Heya! How have you been?");
                writeText("He's clearly busy working on something, but turns to you. Maybe he's looking for a distraction.");
                writeSpeech("player", "", "Pretty fine actually, fixed that thing up yet?");
                writeText("You point at the computer he's working on. internF groans and shakes his head.");
                writeBig("images/intern/crsad.jpg", "art by Morino Kuma");
                writeSpeech("intern", "", "No. Apparently it has some missing part or another, or a piece of it got fried, so it's pretty much dead, unless...");
                writeText("He then pauses to think.");
                writeSpeech("intern", "", "Actually, if you know anyone who's good with computers, I could go ask for some help. Maybe it's a simple fix I'm just not savvy enough to understand.");
                writeSpeech("player", "", "Rain check on that drink then?");
                writeText("He nods, then gets back to the computer.");
                writeText("Maybe you should check in on someone else until this he's available. Maybe there's someone who could help him with the computer?");
                writeFunction("changeLocation('eastHallway')", "Go back");
            }
            else if(checkFlag("intern", "neetav") ==true){
                writeText("You enter the room and see internF.");
                writeSpeech("intern", "", "Heya! How have you been?");
                writeText("He's clearly busy working on something, but turns to you. Maybe he's looking for a distraction.");
                writeSpeech("player", "", "Pretty fine actually, fixed that thing up yet?");
                writeText("He nods.");
                writeBig("images/intern/crcute.jpg", "art by Morino Kuma");
                writeSpeech("intern", "", "Yeah actually, I asked Miss neetF, turns out it just needed a new power supply. So that's all taken care of.");
                writeText("Considering the fact the he had to ask for help, and forgot to plug it in the first time he was troubleshooting, the smug look on his face is a bit much.");
                writeSpeech("intern", "", "She was kind enough to replace it, so now, all that's left is to turn it on!");
                writeText("You let out a sigh.");
                writeSpeech("player", "", "And here I was hoping for that date.");
                writeSpeech("intern", "", "H-Hey!");
                writeText("He blushes, and lightly punches your shoulder.");
                writeBig("images/intern/crhehe.jpg", "art by Morino Kuma");
                writeSpeech("intern", "", "I told you it isn't a date.");
                writeText("You laugh and shrug.");
                writeSpeech("intern", "", "But fine, I do owe you one. Let me finish up and clock out");
                writeSpeech("player", "", "Want me to give you a hand? Or should I just come back?");
                writeText("He shrugs.");
                writeSpeech("intern", "", "It'll just take me a second. Have some patience.");
                writeSpeech("player", "", "Alright, then. Finish up.");
                writeText("It's one last computer, what could go wrong?");
                writeFunction("writeEncounter('turnon')", "Turn the computer on");
            }
            else{
                if(checkTrust('neet') >4){
                    addFlag("intern", "neetav");
                }
                writeText("You enter the room and see internF.");
                writeSpeech("intern", "", "Heya! How have you been?");                   
                writeText("He's clearly busy working on something, but turns to you. Maybe he's looking for a distraction.");
                writeSpeech("player", "", "Pretty fine actually, fixed that thing yet?");
                writeText("He shakes his head.");
                writeBig("images/intern/crsad.jpg", "art by Morino Kuma");
                writeSpeech("intern", "", "Nope, apparently something in it is fried. I don't know what to do.");
                writeText("He then pauses to think:");
                writeSpeech("intern", "", "Actually, if you know anyone who could fix it, could you let me know?");
                writeSpeech("player", "", "Rain check on that drink, then?");
                writeText("He nods, then gets back to work.");
                writeText("Maybe you should check in on someone else until this he's available. Maybe there's someone who could help him with the computer, or maybe try asking him again right now for some reason?");
                writeFunction("writeEncounter('cancel')", "Go back");
                if(checkFlag("intern", "turnontry1") ==false){
                    addFlag("intern", "turnontry1");
                }
                else{
                    addFlag("intern", "neetav");
                    writeSpeech("Kh_Ace", "images/none.png", "Hello folks! Kh_Ace here for a quick fourth wall breaking! Normally you'd need a bit of progress with neetF to continue this part of the scenario, but for the sake of carnivore compatibility I'm gonna grant you access for the next scene. (Press the button below to see the magic, not above.)", "", "#937CF7");
                    writeSpecial("You can now proceed with internF! (Just act like you've met neetF before.)");
                    writeFunction("writeEncounter('meetagain')", "Assume The PC Was Repaired");
                }
            }
            break;
        }
        case "turnon": {
            writeText("<i>Oh.</i>");
            writeText("There's a moment of clarity as the computer comes on and a familiar scene begins to play out in front of you.");
            writeSpeech("player", "", "<i>Oh, goddamnit.</i>");
            writeText("neetF said she deleted those videos.");
            writeText("You're frozen, trying to find a way out of the situation as the video of you 'helping' mejiF plays on the screen. Your own voice plays back, first an induction, then some hypnotic suggesions, and then...");
            writeBig("images/meji/3-1.jpg", "Art by Nagi Ichi");
            writeText("For his part, internF also seems stunned, and his face is beet red as he stares at the screen.");
            writeSpeech("intern", "", "T-that's mejiF right..? And the other one is...");
            writeText("He slowly turns his eyes on you mouth agape before his eyes wander back to the screen.");
            writeText("You've got to do something.");
            writeFunction("writeEncounter('turnonA')", "Try to slowly back off");
            writeFunction("writeEncounter('turnonB')", "Wait for him to talk");
            break;
        }
        case "turnonA":{
            writeText("All right, you're in <b>big</b> trouble, so it's probably time to get the fuck out.");
            writeText("You're not going to let a video like this ruin things. Maybe you can get out and lock the door behind you, and figure something out? Why isn't neetF here, you could really use a hand...");
            writeText("Just as you're opening the door, you hear internF speak.");
            writeSpeech("intern", "", "Are you really just gonna leave?");
            writeText("... He's got a point.");
            writeText("There's a moment of silence, your hand still on the door knob, before internF speaks again. This time, his voice is colder.");
            writeSpeech("intern", "", "He's not the only one, is he?");
            writeText("You stay silent, keeping your hand on the door, as internF keeps his eyes locked on the screen.");
            writeSpeech("intern", "", "<i>Was that what you had in mind all along?</i>");
            writeText("He finally turns to face you.");
            writeSpeech("intern", "", "Were you gonna... With <i>me</i>?");
            writeText("He's still standing there next to the computer, but his hands are shaking... Maybe you can turn this around.");
            writeSpeech("player", "", "internF-");
            writeSpeech("intern", "", "Was it worth it?");
            writeText("His eyes dart between you and the screen.");
            writeSpeech("intern", "", "Like, is it really worth risking your entire career?");
            writeSpeech("player", "", "Well, I didn't think there'd be a video, obviously.");
            writeSpeech("intern", "", "He... Seems to be enjoying himself, I guess?");
            writeText("You keep staring him down, and begin to realize something. internF is turned on. His face is red, his breathing is hot, and you can see the bulge in his pants as he continues to look back and forth between the video and... Your crotch?");
            writeSpeech("player", "", "I mean, you can see for yourself. I think the money shot is coming up soon, if you want proof.");
            writeSpeech("intern", "", "S-so... Do you <i>usually</i> do this to the students, *Mister counselor?");
            writeText("He leans in, his voice shaky and low...");
            writeSpeech("player", "", "Only the ones I think need it.");
            writeBig("images/intern/crhehe.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "And... Since I'm here and I saw this... You probably think I need it, right?");
            writeText("He keeps leaning in, and moves closer to you.");
            writeSpeech("intern", "", "It's not like I can resist right? If... If you can do that to mejiF... W-what chance do I have?");
            writeText("He definitely can. mejiF had been conditioned and you had time to work on him. But if internF <i>thinks</i> it'll work... Maybe you've got a chance.");
            writeText("You pull out your pendant and start swinging it at his face.");
            writeFunction("writeEncounter('intern1')", "'Hypnotize' him");
            break;    
        }
        case "turnonB": {
            writeText("Running away won't fix anything, so you just keep seated as he watches the screen.");
            writeSpeech("intern", "", "<i>Damn...</i>");
            writeText("He keeps repeating himself, eyes glued to the screen.");
            writeSpeech("intern", "", "So... This is what you had in mind all along?");
            writeText("You stay silent, keeping your hand on the door, as internF keeps his eyes locked on the screen.");
            writeSpeech("intern", "", "Were you gonna... With <i>me</i>?");
            writeText("He's still standing there next to the computer, but his hands are shaking... Maybe you can turn this around.");
            writeSpeech("player", "", "internF-");
            writeSpeech("intern", "", "Was it worth it?");
            writeText("His eyes dart between you and the screen.");
            writeSpeech("intern", "", "Like, is it really worth risking your entire career?");
            writeSpeech("player", "", "Well, I didn't think there'd be a video, obviously.");
            writeSpeech("intern", "", "He... Seems to be enjoying himself, I guess?");
            writeText("You keep staring him down, and begin to realize something. internF is turned on. His face is red, his breathing is hot, and you can see the bulge in his pants as he continues to look back and forth between the video and... Your crotch?");
            writeSpeech("player", "", "I mean, you can see for yourself. I think the money shot is coming up soon, if you want proof.");
            writeSpeech("intern", "", "S-so... Do you <i>usually</i> do this to the students, *Mister counselor?");
            writeText("He leans in, his voice shaky and low...");
            writeSpeech("player", "", "Only the ones I think need it.");
            writeBig("images/intern/crhehe.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "And... Since I'm here and I saw this... You probably think I need it, right?");
            writeText("He keeps leaning in, and moves closer to you.");
            writeSpeech("intern", "", "It's not like I can resist right? If... If you can do that to mejiF... W-what chance do I have?");
            writeText("He definitely can. mejiF had been conditioned and you had time to work on him. But if internF <i>thinks</i> it'll work... Maybe you've got a chance.");
            writeText("You pull out your pendant and start swinging it at his face.");
            writeFunction("writeEncounter('intern1')", "'Hypnotise' him");
            break;
        }
        case "intern1": {
            writeEvent('intern1');
            writeFunction("writeEncounter('endhypno')", "Snap Your Finger");
            break;
        }
        case "endhypno" :{
            writeSpeech("player", "", "Okay internF, time to wake up.");
            writeBig("images/intern/crweee.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "W-what? nooo... It's even twitching now, you were about to...");
            writeSpeech("player", "", "Oh? You're not snapping out of the trance?");
            writeBig("images/intern/crumm.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Er...<br>W-what happened? I don't remember anything...");
            writeSpeech("player", "", "Ah, it just took a second.");
            writeSpeech("intern", "", "ughhh- Oh, my aching head... Could I clock out early?");
            writeText("He gives an awkwardly fake moan of pain, his crotch still straining his pants. It's obvious he just plans to run home and play with himself.");
            writeSpeech("player", "", "No, no problem at all. See you tomorrow then, internF.");
            writeBig("images/intern/crhehe.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Ugh- umm thanks...");
            writeText("With that, he walks out of the door dragging his feet, trying to hide his erection.");
            writeSpeech("player", "", "Well, only one thing left to do.");
            writeText("You head for the computer that started it all to the last piece of incriminating evidence against you.");
            writeText("You take the disk in your hand, and just as you're about to break it, you see a little note written on it:");
            writeText("'From neetF, please send the appropiate appreciation at your earliest convenience <b>No additional copies exist, please handle with care.</b>'");
            writeSpeech("player", "", "She knew this would happen?");
            writeText("And to think how betrayed you felt when you saw the video playing...");
            writeSpeech("player", "", "I guess it did turn out well in the end...");
            writeText("...");
            writeText("After about 2 hours and half, you're finally done with your end of internF's bargain.");
            writeSpeech("player", "", "Was intern work always this boring?");
            passTime();
            setTrust('intern', 40);
            writeFunction("changeLocation('eastHallway')", "Finish");
            break;    
        }
        case "dateout" :{
            writeText("It seems like internF is busy on his phone so you walk inside to say hello.");
            writeSpeech("player", "", "What's up?");
            writeBig("images/intern/crwhaaa.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<b><font size='+1'>EEK!</font></b>");
            writeText("He was caught pretty off guard, again...");
            writeText("He takes a moment to catch his breath while closing the absurd amount of tabs open on his phone.");
            writeSpeech("intern", "", "F-for FUCK'S SAKE, can you stop sneaking up on me please??");
            writeText("His face is all red again, which is pretty usual for him.");
            writeSpeech("player", "", "Maybe some day. Anyways, what were you doing? I thought you'd be busy working today as well.");
            writeSpeech("intern", "", "Nah, nobody's used the room since yesterday.");
            writeText("He starts playing with his phone halfheartedly to distract himself, but it's obvious his mind is focused on your last session.");
            writeSpeech("player", "", "So then what are you still doing in here?");
            writeBig("images/intern/crumm.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "I was waiting for the <i>date</i> I promised you.");
            writeSpeech("player", "", "Oh so it's a date now? Thought you said it wasn't.");
            writeSpeech("intern", "", "You kept calling it a date! Fuck, nothing satisfies you, does it?");
            writeBig("images/intern/crduh.jpg", "art by Morino Kuma");
            writeText("Well, he's closer to accepting it now at least.");
            writeSpeech("player", "", "So, where are we going to eat?");
            writeSpeech("intern", "", "Hey! I only promised a drink. You think interns can afford both food <i>and</i> water?");
            writeSpeech("player", "", "Alright cheapskate, the food is on me.");
            writeSpeech("intern", "", "Hmph, very funny. I know an excellent place to go, let's get going!");
            writeSpeech("player", "", "Lead the way.");
            writeBig("images/intern/crcute.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Come oon-");
            writeText("You both laugh and leave the room.");
            writeFunction("writeEncounter('outside')", "Follow internF");
            break;
        }
        case "outside" :{
            writeText("The two of you walk for a while, finally coming to a stop at a place that's completely empty.");
            writeSpeech("player", "", "Hey internF, are you sure this is the right place?<br>This has got to be the quietest place in the whole shopping district.");
            writeText("... Oh, that's why he brought you here.");
            writeBig("images/intern/streetblush.jpg", "art by Morino Kuma");
            if (data.player.gender == "man") {
				writeSpeech("intern", "", "Well, I don't want to be seen eating outside with a guy as if I'm his boyfriend.");
			}
			else {
				writeSpeech("intern", "", "Well, I don't want to be seen eating outside with a gal as if I'm her boyfriend.");
            }
            writeSpeech("player", "", "Fair enough, so where is the waiter?");
            writeSpeech("intern", "", "Oh, Urm...");
            writeText("He shakes his head.");
            writeSpeech("intern", "", "Well, you see, it's a self-service type of place, that said...");
            writeText("He knocks the door of the building to no avail.");
            writeBig("images/intern/streetnoo.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Damnit, the old bastard is away again!");
			writeText("...");
            writeText("A little fruitless waiting, a little searching, and one backup plan later, the two of you have taken a seat and are drinking some sodas in peace.");
            writeSpeech("intern", "", "Should we toast?");
            writeSpeech("player", "", "Toast soda cans? I'll bite, what're we toasting for?");
            writeBig("images/intern/streetowo.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "To our ruined date.");
            writeText("<i>clink</i>");
            writeSpeech("player", "", "To our ruined date.");
            writeText("...");
            writeText("After several cans of soda and small talk, you finally decide to give him what he's waiting for.");
            writeText("You pull your pendant out and start spinning it around your finger.");
            writeSpeech("player", "", "You were staring at this, weren't you?");
            writeSpeech("intern", "", "<b><i>...!</i></b>");
            writeBig("images/intern/streetflush.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Y-yeah, is it wrong to do so?");
            writeSpeech("player", "", "Not really, unless there is something you want to do with it.");
            writeBig("images/intern/streethehe.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "N-nooooo why would I? eheh...");
            writeText("You just let out a sigh and start swinging the pendant.");
            writeFunction("writeEncounter('intern2')", "'Hypnotize' him Again");
            break;
        }    
        case "intern2" :{//Stopped here for now
            writeEvent('intern2');
            writeFunction("writeEncounter('intern2a')", "Snap Your Finger");
            writeFunction("writeEncounter('intern2b')", "Keep The Act");
            break;
        }    
        case "intern2a" :{
            writeEvent('intern2a');
            passTime();
            setTrust('intern', 60);
            writeFunction("changeLocation('shoppingDistrict')", "Leave");
            break;
        }
        case "intern2b" :{
            writeEvent('intern2b');
            passTime();
            setTrust('intern', 60);
            writeFunction("changeLocation('shoppingDistrict')", "Leave");
            break;
        }
        case "inrestroom" :{
            writeText("You see internF sitting alone in the computer room, so you walk inside after gently knocking on the door.");
            writeBig("images/intern/crcute.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Oh heya! You finally done with sneaking on me?");
            writeSpeech("player", "", "Well, you looked like you didn't need any more problems, anything wrong?");
            writeText("He looks down at the phone in his hand.");
            writeSpeech("intern", "", "Man, thanks a bunch but I don't think that's something <i>even</i> you can help about.");
            writeSpeech("player", "", "You know my job right? I can help people about pretty much anything.")
            writeText("He looks like he would laugh at your confidence if he was having a better day.");
            writeSpeech("intern", "", "Look, playerF, I know what you are but it's not something like that, <i>I've gotta go</i>...");
            writeSpeech("player", "", "Wait where?");
            writeBig("images/intern/crduh.jpg", "art by Morino Kuma");
            writeText("He shrugs with a disappointed look on his face.");
            writeSpeech("intern", "", "To the <b><i>fucking restrooms</i></b> man..");
            writeText("Good thing's now you know why you can't be of help, but this is kinda embarrassing.");
            writeSpeech("player", "", "...Then what's stopping you, like just go?");
            writeSpeech("intern", "", "B-but my bag, what if someone comes here while I'm gone?");
            writeText("You look over to his bag that's hanging from the little hook on his desk."); 
            writeSpeech("player", "", "I'll keep an eye on it.");
            writeText("He looks around a little before thanking you quickly and making a run for it.");
            writeText("With that, you're alone in a room full of computers, guarding a little bag.");
            writeSpeech("player", "", "<i>Funny, I don't even know what's the treasure I'm guarding.</i>");
            writeText("Well, might as well ask him when he's back.");
            writeText("...");
            writeText("You check your watch, it's been a whole hour since he left the room, leaving you with his bag.");
            writeSpeech("player", "", "<i>Come ooon, where the hell'd you go?</i>");
            writeText("You're ok with waiting, but his bag's contents keep picking your curiosity.");
            writeSpeech("player", "", "<font size='-1'>It wouldn't kill if I only took a peek right?</font>");
            writeText("It doesn't weigh much, so you can assume it isn't being used for carrying books.");
            writeSpeech("player", "", "<i>Then, what could it be?</i>");
            writeText("You know there is only one way to find out.");
            writeText("It might not be the right thing to do, but you aren't a saint either.");
            writeFunction("writeEncounter('checkbag')", "Check The Bag");
            writeFunction("writeEncounter('leavebag')", "Leave It Alone");
            break;
        }
        case "checkbag" :{
            if(checkTrust('nagatoro') >20){
                writeText("...");
                writeSpeech("player", "", "<i>Sigh</i>, of course...");
                writeText("You open the bag only to find various fetishwear, women's clothes, lingerie etc...");
                writeSpeech("player", "", "Heh, wonder how much I could get from nagatoroF for all this.");
                writeText("You check deeper to see if there's something worth your interest, but you don't find anything except a few perfume bottles and a notebook you can't even read.");
                writeSpeech("player", "", "Is that even in English?");
                writeText("If you ignore the porn magazines at the very end of the bag, that's pretty much all there is in the bag, and since its owner is still yet to return, you decide to look for him yourself.");
                writeSpeech("player", "", "Better leave this in my office first, don't want anyone else to find this 'treasure'.");
                addFlag("intern", "bagcheck");
                writeFunction("writeEncounter('search')", "Look For internF");
            }
            else{
                writeText("...");
                writeSpeech("player", "", "<b>Sigh</b>, of course...");
                writeText("You open the bag only to find various fetishwear, women's clothes, lingerie etc...");
                writeSpeech("player", "", "I wonder where he got all of those.");
                writeText("You check deeper to see if there's something worth your interest, but you don't find anything except a few perfume bottles and a notebook you can't even read.");
                writeSpeech("player", "", "Is that even in English?");
                writeText("If you ignore the porn magazines at the very end of the bag, that's pretty much all there is in the bag, and since its owner is still yet to return, you decide to look for him yourself.");
                writeSpeech("player", "", "Better leave this in my office first, don't want anyone else to find this 'treasure'.");
                addFlag("intern", "bagcheck");
                writeFunction("writeEncounter('search')", "Look For internF");
            }
            break;
        }
        case "leavebag" :{
            writeText("It's not like he would ever know if you checked it, but you feel bad about it so you just put it back.");
            writeSpeech("player", "", "I may not be the second coming of Christ, but even I have my limits.");
            writeText("You decide to sit down and wait for him to come, but you feel like something's wrong.");
            writeSpeech("player", "", "Am I really worried about him?");
            writeText("You take a deep breath to calm yourself down but it doesn't work quite well either, he's the type of the guy to get himself in trouble after all.");
            writeText("You get up and leave the room to put the bag in your office first, then look for its owner.");
            writeFunction("writeEncounter('search')", "Look For internF");
            break;
        }
        case "search" :{
            writeText("You leave the bag in your office and quickly return downstairs, you check the classes, ask the students around, but none of them know neither where he is, nor if he left the school.");
            writeSpeech("player", "", "Where the <i>hell</i> are you internF..?");
            writeText("You decide to return upstairs to see if anyone there would have any idea, but you <i>bump into one</i> right after the last step...");
            writeSpeech("???", "images/none.png", "Oof hey! Watch where you're going.");
            writeText("Well, you <i>found</i> someone, it would be better if you didn't run into him though.");
            writeBig("images/camboi/profile.jpg", "Art by Himitsu Kessha Vanitas");
            if(checkTrust('camboi') >80){
                writeSpeech("camboi", "", "O-Oh hey, sorry I didn't see you.");
                writeText("You see you've ran right into camboiF, as a teacher he could be helpful, but you also feel like he hasn't left the teachers' lounge in last hour.");
                writeSpeech("camboi", "", "Were you looking for something?");
            }
            else if(checkTrust('camboi') >20){
                writeSpeech("camboi", "", "And just when I was thinking my day couldn't get any worse...");
                writeText("camboiF seems kind of pissed, and you can see you're the reason for it.");
                writeSpeech("camboi", "", "If you're going to say anything better keep it quick, I don't wanna be seen with you.");
            }
            else if(checkTrust('camboi') >0){
                writeSpeech("camboi", "", "Oh, it's you. playerF wasn't it?");
                writeText("You're surprised he actually remembers your name, but from his impatient gestures you can see he's not as pleased about this encounter as you are.");
                writeSpeech("camboi", "", "Is there anything or do you just enjoy bumping into people minding their business?");
            }
            else{
                writeSpeech("camboi", "", "Do I know you?");
                writeText("If memory serves, you're standing before a teacher named camboiF, and you can see he's hurrying to either home or his class.");
                writeSpeech("camboi", "", "If you don't need anything, could you step aside pal?");
            }
            writeFunction("writeEncounter('askhim')", "Ask camboiF If He Has Seen internF");
            writeFunction("writeEncounter('dontask')", "Keep Looking For internF");
            break;
        }
        case "askhim" :{
            writeText("You apologize for the bump before asking your question.");
            writeSpeech("player", "", "Hey camboiF, could you have seen internF by any chance?");
            writeText("He stops for a moment to think.");
            writeSpeech("camboi", "", "internF? Well he's from classroom A but I haven't seen him after class today.");
            writeText("It doesn't look like he's lying, not that he'd have a reason to do so.");
            writeSpeech("player", "", "Alright thanks, sorry again.");
            writeText("He keeps on his way to downstairs with a tired sigh.");
            writeText("If internF hasn't been to the second floor this whole time, there is only one place left you haven't checked.");
            writeSpeech("player", "", "He couldn't be still there right..?");
            writeText("You sigh, it seems you have nowhere else left to look.");
            addFlag("intern", "classlearn");
            writeFunction("writeEncounter('intern3')", "Check The Restroom");
            break;
        }    
        case "dontask" :{
            writeText("You quickly apologize before stepping out of his way.");
            if(checkTrust('camboi') >80){
                writeSpeech("camboi", "", "It's fine pal, don't worry about it, but watch your step next time.");
            }
            else if(checkTrust('camboi') >20){
                writeSpeech("camboi", "", "At least try not to ram into people who aren't into you, my day is already insufferable enough.");
            }
            else{
                writeSpeech("camboi", "", "Alright alright, just watch your step and we're cool.");
            }
            writeText("You look around the teachers' lounge, your office, other offices, pretty much everywhere but internF is nowhere to be seen.");
            writeSpeech("player", "", "You've gotta be shitting me...");
            writeText("There is only one place left that you haven't checked...");
            writeSpeech("player", "", "<i>But come on, who spends <b>that</b> long in the restroom?</i>");
            writeText("Walking downstairs, you feel like you're about to find out.");
            writeFunction("writeEncounter('intern3')", "Check The Restroom");
            break;
        }
        case 'intern3' :{
            writeEvent('intern3');
            writeFunction("writeEncounter('intern3a')", "Lean In For A Kiss");
            writeFunction("writeEncounter('intern3b')", "Start Stripping his clothes");
            break;
        }
        case "intern3a" :{
            writeEvent('intern3a');
            writeFunction("writeEncounter('intern3b')", "Turn Him Around");
            break;
        }
        case "intern3b" :{
            writeEvent('intern3b');
            writeFunction("writeEncounter('backhome')", "Help internF Walk Home");
            break;
        }
        case "backhome" :{
            writeText("His house is not too far away from the school, which is great since neither of you have enough energy for a longer trip than that.");
            writeText("His home is not that big, though still bigger than what you have, you can see how relieved he looks when you two finally get to the front door.");
            writeSpeech("intern", "", "Thanks for the company eh, maybe I can let you go home without carrying me to bed for this once.");
            writeSpeech("player", "", "It's not like we're married after all you know right?");
            writeBig("images/intern/streetblush.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "'In your dreams asshole' was it? I may have agreed on a date but that was all for you.");
            writeText("You open him the door with a smile.");
            writeSpeech("player", "", "Oh really? I guess that's paint on your cheeks then?");
            writeSpeech("intern", "", "Don't think that's something, it happens way too much <i>and I hate it</i>.");
            writeText("He gives you a kiss on the cheek.");
            writeSpeech("intern", "", "Happy now? That's about all you can get from me so better stop dreaming.");
            writeText("You nod and return the kiss.");
            writeSpeech("player", "", "Mhm, I am.");
            writeSpeech("intern", "", "Good, now I think you owe me an apology.");
            writeSpeech("player", "", "For your legs again?");
            writeText("He shrugs before knocking on your head softly.");
            writeBig("images/intern/streetcute.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Is there any brain here at all? I am talking about my bag dumbass, you forgot to return it.");
            writeText("Well that's right, you completely forgot about it.");
            writeSpeech("player", "", "Yeah, I guess I did, <b>'EEK!'</b> Was it?");
            writeSpeech("intern", "", "Ha-Ha, very funny.");
            writeText("Despite saying that, both of you burst into a laughter about it for a good minute.");
            writeSpeech("intern", "", "Alright, you can bring it to me tomorrow, or the day after, I don't know if I wanna come to school tomorrow.");
            writeSpeech("player", "", "You've got a deal.");
            writeBig("images/intern/homecute.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Good, now if you'd excuse me, I need a <i>looong</i> warm bath.");
            writeText("You agree and wave each other goodbye before he closes the door behind himself.");
            passTime()
            setTrust('intern', 80);
            writeFunction("changeLocation('shoppingDistrict')", "Leave");
            break;
        }
        case "classvisit" :{ 
            writeText("You enter the empty classroom, where internF is reading a book alone in a silent corner.");
            if(checkFlag("intern", "classlearn") ==true){
                writeText("You slowly walk to him and softly knock on his desk to warn him of your presence.");
                writeSpeech("player", "", "Hey internF, what's up?");
                writeText("He raises his head with a smile before getting up.");
                writeBig("images/intern/crcute.jpg", "art by Morino Kuma");
                writeSpeech("intern", "", "And if it isn't my favorite counselor, what made you come here hm?");
                writeSpeech("player", "", "What do you think it could be?");
            }
            else {
                writeText("Inside the empty Classroom A, you see internF sitting alone in a corner.");
                writeSpeech("player", "", "Hey internF! What you doing here pal?");
                writeText("He bounces in his place from the unexpected voice in the empty class, but catches his breath quickly.");
                writeSpeech("intern", "", "Man, you know I'm a student right? The real question is why are <i>you</i> here?");
                writeSpeech("player", "", "Make a guess.");
            }
            writeText("His face goes red when tries to 'guess'.");
            writeBig("images/intern/crhehe.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "I mean sure, <i>but in class? Really?</i>");
            writeSpeech("player", "", "I actually didn't mean <i>that</i> though.");
            writeText("That wasn't you actual plan, you were here only to bring him to your office to give him his long awaited bag <i>and maybe fuck him there</i>.");
            writeSpeech("player", "", "But if you insist...");
            writeText("He closes his book with a tired look on his face and a rising bulge in his pants.");
            writeSpeech("intern", "", "There is no stopping you is there?");
            writeText("You answer not with words, but with a loud spank on his ass that makes him even harder");
            writeSpeech("player", "", "Be honest, if there <i>was</i> a way to stop me, would you even try it?");
            writeText("He leans back on his desk as you keep teasing him with your words and hands.");
            writeBig("images/intern/crhot.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "C-Come on now, when did I say I'd want something of that sort?");
            writeSpeech("player", "", "Then what is stopping <i>you</i> from getting what you want?");
            writeText("His eyes unfocus as he does an impression of his fake trance.");
            writeSpeech("intern", "", "<i>'I am waiting for my *Master's ooorders...'</i>");
            writeText("His silly impression makes both of you laugh for a moment.");
            writeSpeech("player", "", "Okay then, your *Master's first order is:");
            writeFunction("writeEncounter('intern4a')", "'Unzip Your Pants For A Blowjob'");
            writeFunction("writeEncounter('intern4b')", "'Lay Back, Pants Down'");
            break;
        }
        case "intern4a" :{
            writeEvent('intern4a');
            writeFunction("writeEncounter('intern4b')", "Get Up And Strip His Clothes");
            break;
        }
        case "intern4b" :{
            writeEvent('intern4b');
            writeText("You two pull your pants back up to pull a chair and sit together.");
            writeSpeech("player", "", "So, let me ask again, what was that 'thank you' for?");
            writeText("A blush goes through his face.");
            writeBig("images/intern/crhehe.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "I mean, you didn't just leave me, an annoying little bitch with plenty of alternatives...");
            writeSpeech("player", "", "Alternatives? Maybe if I wanted a soulless fucktoy, but don't you think we are more than that?");
            writeText("His face gets a little more red with each of your words.");
            writeSpeech("intern", "", "R-really..? I mean that's a bit <i>weird</i> to tell to someone after piping them on their desk but...");
            writeSpeech("player", "", "I mean, if you don't wanna be friends I'd understand.");
            writeSpeech("intern", "", "No noo, I enjoy your company, it's just...");
            writeBig("images/intern/crumm.jpg", "art by Morino Kuma");
            writeText("He lowers his trembling voice and eyes while drawing circles on the floor with his foot.");
            writeSpeech("intern", "", "<font size= '-1'>...It's not like friends go on dates do they...?</font>");
            if(checkTrust('tomgirl') >100){
                writeText("For a second you don't understand what he meant, then it clicks for you, that is the second confession you have received from a boy.");
            }
            else{
                writeText("You get kind of confused trying to understand what he meant, just to realize it was some half assed confession.");
            }
            writeSpeech("player", "", "internF are you really uhm, sure about that?");
            writeSpeech("intern", "", "Forget I said anything.");
            writeSpeech("player", "", "internF...");
            writeText("He accepts defeat with a deep breath.");
            writeSpeech("intern", "", "Okay okay you got me, yeah I love the guy who fucked half of the people in my school including me, is there anything wrong about it?");
            writeSpeech("player", "", "No no not at all, you got it wrong, I just want to make sure you won't do anything you might regret later...");
            writeText("He gets up with a smug smile on his face and a naughty look on his eyes.");
            writeSpeech("intern", "", "Do you remember when I told you to make me regret even enrolling here in the first place?");
            writeSpeech("player", "", "Y-yeah I do, why?");
            writeText("Your whole body feels hot when you feel him staring right into your soul with his excited eyes.");
            writeSpeech("intern", "", "I think I changed my mind...");
            writeText("And in a blink of an eye, his hand is on your shirt's collar, and you can feel his warm breath on your neck.");
            writeSpeech("intern", "", "<b><i><font color= '#BD7CDE'>Now I want you to make me regret EVERYTHING and ANYTHING, *Master...</font></i></b>");
            writeText("It was a completely unexpectable proposal from a completely unexpected person, but you can also see he's absolutely sure when you look at his eyes.");
            writeSpeech("intern", "", "<b><i><font color= '#BD7CDE'>So, what will it be..?</font></i></b>");
            writeText("He's clearly expecting an answer so you've got to think of one, you don't really like the idea of dedicating yourself for one person, but on the other hand, if he's going to keep acting like he does now, it would be an interesting ride...");
            passTime();
            setTrust('intern', 100);
            writeFunction("writeEncounter('ido1')", "Accept His Proposal");
            writeFunction("writeEncounter('idont')", "'I Will Consider It'");
            break;
        }
        case "ido1" :{
            writeSpeech("player", "", "Well...");
            writeBig("images/intern/crsad.jpg", "art by Morino Kuma");
            writeText("The hopeful light in his eyes slowly fade away as he loosens his grip.");
            writeSpeech("intern", "", "I knew I should've expected this, forget I said a thing.");
            writeText("You push his hand down before reaching for his collar and locking eyes the same way he did to you.");
            writeSpeech("player", "", "Now hold it right there, I just wanted to let you know about your worst habit.");
            writeBig("images/intern/croh.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "E-Eh..?");
            writeText("You pull him to yourself for a deep kiss, making both of you zone out for a hot minute.");
            writeSpeech("player", "", "<i>You never wait for me to complete what I'm saying.</i>");
            writeText("He lowers his gaze for a moment until actually realizing what you're actually trying to say and raising his head.");
        }
        case "ido2":{
            removeFlag("intern", "reject");
            addFlag("intern", "accept");
            writeSpeech("intern", "", "Y-you mean..?");
            writeSpeech("player", "", "Yes, I mean <b><i>I would love that</i></b>");
            writeText("His eyes spark with happiness as they begin watering.");
            writeBig("images/intern/crwhaaa.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "S-So you're really..?");
            writeText("The moment you nod, you get cuddled in the most intense way ever.");
            writeBig("images/intern/crweee.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "I-I'm not dreaming right? O-Of course I am, this kind of stuff only happens in my dreams and I'll wake up to th- <b>HEY OUCH MAN!</b>");
            writeText("It takes him a moment to realize that you pinched him to prove he's actually not dreaming.");
            writeSpeech("intern", "", "<b>I-IT IS REAL! YOU ARE REAL! IT WAS ALL REAL! I CAN'T BELIEVE IT-</b>");
            writeSpeech("player", "", "Spare that joy for home, You'll regret everything just like you wanted when we get there.");
            writeText("He laughs in your face before picking a smug face.");
            writeSpeech("intern", "", "<i><font color= '#BD7CDE'>I would love to see you try, for your little threat is nothing but exciting for me.</font></i>");
            writeSpeech("player", "", "Then let me ask you a question.");
            writeText("He tilts his head to the side, waiting for your question.");
            writeSpeech("player", "", "Whose house should we go?");
            writeSpeech("intern", "", "Really, was that all?");
            writeText("You nod.");
            writeSpeech("intern", "", "Man I mean I don't give a fuck as long as you are there with me, but if you care that much...");
            writeText("He puts his housekeys in your hand with a smile.");
            writeBig("images/intern/crcute.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "But this time, you have to carry me to bed.");
            writeSpeech("player", "", "I wish I could but we're still not married you know.");
            writeText("He sighs with a loud, tired voice.");
            writeBig("images/intern/crduh.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "When I told you to make me regret everything, I didn't mean I wanted to deal with this kind of bullshit, but if you insist.");
            writeText("He pulls a small purse from his pocket, from which he pulls a tiny swiss knife, some glue and a pair of plastic bottlecaps.");
            writeSpeech("player", "", "What are you up to..?");
            writeText("He uses the knife to cut the outline of a circle from both caps, then cuts the circles open into stripes.");
            writeText("He reaches for your left hand, puts a stripe below your ring finger and wraps it around the finger.");
            writeSpeech("player", "", "...You can't be serious-");
            writeText("He does the same with the other stripe with his finger, then glues both of them to make them stay in shape.");
            writeSpeech("intern", "", "Oh but I am.");
            writeText("After making sure glue had dried on both 'rings', he puts them on the fingers of their owners.");
            writeBig("images/intern/crcute.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Oh well, I pronounce you and I married, you may (and must) kiss the bride.");
            writeText("He pulls you for a tiny kiss on the lips.");
            writeSpeech("intern", "", "Seems like you're out of excuses not to carry me now, right?");
            writeSpeech("player", "", "Ugh, what if my back is aching?");
            writeSpeech("intern", "", "If it was aching, it would ache more.");
            writeText("You accept defeat with a sigh, which makes him chuckle.");
            writeSpeech("player", "", "Alright, I'll carry you to bed, but ONLY when we're in home okay? Also I hope these are not the rings we will wear for the rest of our lives.");
            writeSpeech("intern", "", "I think it is too early to be discussing about this, how about we look into it when we are home?");
            writeText("You let out another sigh before opening him the door and walking out with him...");
            writeFunction("writeEncounter('internepilogue')", "Continue");
            break;
        }
        case "internepilogue" :{
            writeText("8 months, it has been about 8 months since that day, yet it's still impossible to find a way to satisfy the little bitch he has turned into.");
            writeText("Not only that, there is another thing about him that hasn't changed one bit as well.");
            writeSpeech("player", "", "I can't believe you're still making me carry you around in the  home...");
            writeText("He is not even slightly ashamed of using his partner as a carriage, he even looks proud about it when you put him on the floor next to the bed.");
            writeBig("images/intern/boiwifeyay.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Cry me a river, It's the best way of transportation ever.");
            writeText("Right after he finishes his sentence, you pull him on the bed along with yourself.");
            writeSpeech("player", "", "But isn't its fee a little too expensive for you?");
            writeText("He acts scared but the lust in his eyes (and the bulging in his panties) gives it away.");
            writeSpeech("intern", "", "Uhm playerSir, could you excuse me of the fee for once..?");
            writeText("He smiles and starts rubbing one of his legs on your crotch when you shrug slowly.");
            writeSpeech("intern", "", "<i>As you should</i>, come get it then.");
            writeText("He doesn't have to ask twice, so you slide his panties down to put his dick in an onahole and your dick in his waiting ass.");
            writeBig("images/intern/finalfuck1.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "M-Man you don't have to be <i>so</i> rough about this, I am all yours you know right?");
            writeText("It's definitely a lie, you can tell that much even by only looking at how zoned out his eyes are.");
            writeSpeech("player", "", "Oh I better slow down a little then.");
            writeSpeech("intern", "", "<i><font color= '#BD7CDE'>Don't you fucking dare.</font></i>");
            writeText("No need nor a way of daring that, so you pick up some speed instead.");
            writeBig("images/intern/finalfuck2.jpg", "art by Morino Kuma");
            writeSpeech("player", "", "You know it's not possible to slow down with you anyway.");
            writeText("He smiles with the same lust in his eyes as the first day.");
            writeSpeech("intern", "", "That's only because you aren't supposed to slow down, but I appreciate the praise.");
            writeSpeech("player", "", "Who's the one in charge here anyway? You act like you're the one controlling me.");
            writeSpeech("intern", "", "<i>I'd call that manipulating, and that's what you've been doing to everyone else isn't it?</i>");
            writeText("You grunt.");
            writeSpeech("player", "", "B-But it's only fun when I am the one doing it.");
            writeSpeech("intern", "", "Will you stop being a crybaby and do what you're good at?");
            writeText("At this point you're just too weak to put any resistance, and well, might as well let this squirming little slut have the control for another night.");
            writeSpeech("player", "", "Enjoy your fake dominance while it lasts then.");
            writeSpeech("intern", "", "Oh boy<b> I sure as hell fucking will.</b>");
            writeText("With the confidence in his voice, he looks like he misses the little detail he is talking with someone who's blowing his back and making him a cum covered mess every night.");
            writeSpeech("player", "", "Well, <i>let's get at it then...</i>");
            writeSpeech("intern", "", "Finally-");
            writeText("...");
            writeText("You two have been fucking for god knows how long before even feeling close to the first load of this busy night.");
            writeBig("images/intern/finalfuck3.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<i><b>Y-YEETH-</b></i>");
            writeBig("images/intern/finalfuck4.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Fhuuck-");
            writeText("He gets particularly loud whenever he reaches an orgasm with you, and if you have learned something from last 236 nights you have spent together, you'll have a hard time waking up early tomorrow and the countless days after...");
            writeFunction("loadEncounter('system', 'credits')", "The End");
            break;
        }
        case "idont" :{
            writeSpeech("intern", "", "Of course you will, yeah...");
            writeBig("images/intern/crsad.jpg", "art by Morino Kuma");
            writeText("He looks down, trying to hide his watering eyes.");
            writeSpeech("intern", "", "T-That's alright... I mean, I guess that was to be expected huh?");
            writeText("If it was another day you could swear he was agitating, but now he looks shattered.");
            writeSpeech("player", "", "Look, I said I will consider it, I really will, I just need so-");
            writeSpeech("intern", "", "No need, I don't think you would change your mind at this point, thanks for the day anyway eh?");
            writeText("You try to reach for him but he just walks past you.");
            writeSpeech("intern", "", "If you wanna talk later, you know where to find me.");
            writeText("He reaches for the door handle.");
            writeSpeech("player", "", "I guess I will see you later then..?");
            writeSpeech("intern", "", "You'll be the judge of that.");
            writeText("He fixes the collar of his shirt and walks out of the door, leaving you alone in the dead silent room, where you can hear his sobbing fade away as he leaves the building.");
            writeSpeech("player", "", "<i>Goddamn...</i>");
            writeText("After all the noises are gone, you're all by yourself again, so you sit down in silence for a few more minutes before leaving the school as well.");
            addFlag("intern", "reject");
            passTime();
            writeFunction("changeLocation('eastHallway')", "Go Back");
            break;
        }
        case "postQuo" :{
            writeText("You knock on the door before entering, making internF turn around to see who his visitor is.");
            if(checkFlag("intern", "reject") ==true){
                writeBig("images/intern/crduh.jpg", "art by Morino Kuma");
                writeSpeech("intern", "", "Oh well, look who decided to show up.");
            }
            else{
                writeBig("images/intern/crcute.jpg", "art by Morino Kuma");
                writeSpeech("intern", "", "Oh heya playerF, here to brighten my day or you need anything?.");
            }
            if(checkFlag("intern", "hate") ==false){
                writeText("He starts spinning a pen on his fingers with his eyes locked on yours.");
                writeSpeech("intern", "", "So, what makes you come here?");
                writeFunction("writeEncounter('intern3z')", "Take Him To The Restrooms Again");
                if(checkFlag("intern", "corrupt") !=true){
                    writeFunction("writeEncounter('consider')", "'Hey, About Your Proposal'");
                }
                if(checkFlag("intern", "date2") !=true){
                    writeFunction("writeEncounter('dateagain')", "Take Him On A Second Date");
                }
                else{
                    writeFunction("writeEncounter('dateagain')", "Take Him On Another Date");
                }
                if(checkFlag('succubus', 'newCorruption') ==true){
                    if(checkFlag("intern", "corrupt") !=true){
                        writeFunction("writeEncounter('demonization')", "Corrupt internF");
                    }
                    else{
                        writeSpeech("intern", "", "Theo and I'll be waiting for you if you wanna have some <i>real fun</i>. Got what I'm saying?");
                    }
                }
            }
            else{
                writeText("He looks into your face with soulless eyes before turning back to his computers.");
                writeSpeech("intern", "", "It's kinda annoying that you still have the audacity come here you know.");
                writeText("That's likely his kindest way of telling you to get the hell out, and his noisy typing gives away how impatient he is about it.");
            }
            writeFunction("changeLocation('eastHallway')", "Go Back");
            break;
        }
        case "intern3z" :{
            writeEvent('intern3z');
            if(checkFlag("intern", "rrcomplete") ==false){
                addFlag("intern", "rrcomplete");
                passTime();
            }
            writeFunction("changeLocation('eastHallway')", "Go Back");
            break;
        }
        case "consider" :{
            if(checkFlag("intern", "accept") ==false){
                writeText("He drops the pen as you see his eyes light up with hope.");
                writeSpeech("intern", "", "A-And..?");
                writeFunction("writeEncounter('ido2')", "'I Have Thought About It And...'");
                writeFunction("writeEncounter('fuckyou')", "'I Think I Have To Refuse It'");
            }
            else{
                writeSpeech("intern", "", "I know right! It still feels like a dream you said yes.");
                writeBig("images/intern/crcute.jpg", "art by Morino Kuma");
                writeText("He gives you a kiss on cheek with a confident smile on his face.");
                writeSpeech("intern", "", "And that is the only thing you can't make me regret, <i>ever</i>.");
                writeText("You two have a little chatter as he decides to spend his break with you.");
                writeSpeech("player", "", "I guess I'll see you at home then huh?");
                writeSpeech("intern", "", "Hmph, as if I didn't have enough reasons to want to go back home early.");
                writeFunction("changeLocation('eastHallway')", "Go Back");
            }
            break;
        }
        case "fuckyou" :{
            writeSpeech("intern", "", "W-What..?");
            writeText("His eyes are still locked on yours as they begin to water.");
            writeSpeech("intern", "", "You could've just, I mean, did you really bring it up if you were to just say no..?");
            writeSpeech("player", "", "internF, I am so sorry, I thought I had t-");
            if(checkFlag("intern", "reject") ==true){
                addFlag("intern", "hate");
                writeText("With his fists clenched and body shaking, he can no longer hold his tears.");
                writeSpeech("intern", "", "<i>G-Get lost... <b>Get lost and don't make me see your face ever again.</b></i>");
                writeText("He's pointing at the door with his shaky hands.");
                writeText("It'd be better to leave now before he lets it all out.");
                //Author's note: if you've triggered this line, fuck you
            }
            else{
                addFlag("intern", "reject");
                writeText("He wipes his tears before showing you the door with his shaky hands and broken voice.");
                writeSpeech("intern", "", "<i>Could you please get out, I don't want you to see me cry.</i>");
                writeText("Looking at his face, it looks like you don't have much time before he starts so you leave the room, only to hear him sobbing silently the moment the door is closed.");
                writeSpeech("player", "", "internF...");
            }
            writeFunction("changeLocation('eastHallway')", "Go Back");
            break;
        }
        case "dateagain" :{
            if(checkFlag("intern", "date2") !=true){
                addFlag("intern", "date2");
            }
            writeSpeech("player", "", "Well, I wonder if you could fancy me another date?");
            writeText("He chuckles for a moment thinking it as a joke.");
            writeSpeech("intern", "", "Gee man, just tell what you actually want will ya? <br><i>Unless, are you serious..?</i>");
            if(checkFlag("intern", "reject") ==true){
                writeSpeech("player", "", "Yeah I am, thought it'd be fun you know.");
                writeText("He raises an eyebrow and crosses his arms with a more serious expression.");
                writeSpeech("intern", "", "Dude, you can't be for real, first you reject my proposal, then you invite me on a date yourself, I'm not coming anywhere.");
                writeSpeech("player", "", "No no no it's not like that-");
                writeText("He turns you his back without saying anything else, neither listening to anything you would say.");
                writeSpeech("player", "", "internF...");
                writeText("It seems you won't be changing his mind today...");
                writeFunction("changeLocation('eastHallway')", "Go Back");
            }
            else{ 
                writeText("He scratches his head with a confused look on his face.");
                writeSpeech("intern", "", "Just asking but, you remember that we still have about 2 hours of work?");
                writeSpeech("player", "", "I mean, it's not like your computers get flooded with malwares everyday do they?");
                writeBig("images/intern/crumm.jpg", "art by Morino Kuma");
                writeSpeech("intern", "", "Hmm, yeah I guess you're right, so what you've got in mind?");
                writeSpeech("player", "", "Nothing in mind actually, same place as before?");
                writeText("He leans his back on a wall with his eyes closed to think.");
                writeSpeech("intern", "", "I mean, I guess we could go there if you wanna fuck again.<br>On the other hand, if you were to take me on an actual date, I know a prettier place.");
                writeSpeech("player", "", "<i>The same place, then.</i>");
                writeText("He gives you a disappointed look before packing his bag and getting ready.");
                writeSpeech("intern", "", "Because you'd die if you were to romance me properly just once right?");
                writeSpeech("player", "", "One day, I promise.");
                writeBig("images/intern/crduh.jpg", "art by Morino Kuma");
                writeSpeech("intern", "", "It'll take forever won't it?");
                writeText("You open the door for him without answering.");
                writeSpeech("player", "", "Could you keep the complaints for yourself till we're done?");
                writeSpeech("intern", "", "You're lucky I love you...");
                writeText("...");
                writeText("He might have agreed on coming, but he won't let you go without a date, so you two just enjoy a few cans of drink and chatter.");
                writeSpeech("intern", "", "You know we don't have to fuck like rabbits anyway right?");
                writeBig("images/intern/streethehe.jpg", "art by Morino Kuma");
                writeText("He stretches his body before continuing.");
                writeSpeech("intern", "", "Like, I mean it's not like we can't fuck another day, can't we just have today for ourselves?");
                writeText("Thinking of it, he's not wrong, you can still get at it another day, but do you really want to waste this chance?");
                writeFunction("writeEncounter('intern2z')", "Not Really");
                writeFunction("writeEncounter('datecute')", "Maybe This Once");
            }
            break;
        }
        case "intern2z" :{
            writeEvent('intern2z');
            passTime();
            writeFunction("changeLocation('shoppingDistrict')", "Leave Him Home");
            break;
        }
        case "datecute" :{
            writeText("Well, being a nice guy every so often wouldn't hurt, so why not?");
            writeSpeech("player", "", "Fine, what about a walk around the town?");
            writeText("His eyes spark with happiness.");
            writeBig("images/intern/streetowo.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Hold on, you're not kidding right? I mean-");
            writeSpeech("player", "", "Dead serious, so what you say?");
            writeText("He cuddles your arm and jumping in place, screeching happily.");
            writeSpeech("player", "", "Alright alright calm down, we can get going once my can is empty.");
            writeText("He quickly reaches for your drink and pours it all in his mouth before you even notice.");
            writeSpeech("player", "", "Aw man, my fucking soda...");
            writeSpeech("intern", "", "I'll get you another one later.");
            writeBig("images/intern/streetcute.jpg", "art by Morino Kuma");
            writeSpeech("player", "", "Fine, but I'll get that soda.");
            writeText("...");
            writeText("You take a walk around the town with internF, visiting some parks and stores along the way and having talked a lot more than you would expect by the end of the day.");
            writeBig("images/intern/datecute1.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Phew, man, what a day huh?.");
            writeSpeech("player", "", "Yeah, like who would've thought?");
            writeText("He grunts.");
            writeBig("images/intern/datecute3.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "What do you mean who would've thought? Of course you would have, we are on a date you moron.");
            writeText("He might be annoyed, but he looks cute when he is.");
            writeSpeech("player", "", "Man, you get so worked up even on a simple joke.");
            writeBig("images/intern/datecute2.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Maybe try to make jokes that are actually funny next time.");
            writeText("You reply with a fake sadness on your face.");
            writeSpeech("player", "", "You don't have to be so rude...");
            writeSpeech("intern", "", "Awww come on, you know I don't mean it that way-");
            writeText("Giving you a cuddle, he asks:");
            writeSpeech("intern", "", "Better now, you little crybaby?");
            writeText("You chuckle nodding.");
            writeSpeech("intern", "", "Great, now could you walk me home? I'm mad tired.");
            writeSpeech("player", "", "Depends, will you make me carry you?");
            writeSpeech("intern", "", "Maaaaybe.");
            writeSpeech("player", "", "Fine fine, we'll see when we get there.");
            writeText("...");
            writeText("You open the door for your tired partner, getting a tiny kiss as a reward.");
            writeBig("images/intern/homeehe.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Phew, finally the comfort of my home.");
            writeSpeech("player", "", "I guess I'll see you later then.");
            writeSpeech("intern", "", "Well, uhhh I mean... <br><font size ='-1'>Thanks for the day, really...");
            writeText("You give him a proper headpat.");
            writeSpeech("player", "", "Anytime, but I think you should get some rest.");
            writeText("He nods and waves you goodbye while yawning.");
            passTime();
            writeFunction("changeLocation('shoppingDistrict')", "Leave");
            break;
        }
        case "demonization" :{
            addFlag("intern", "corrupt");
            removeFlag("intern", "reject");
            passTime();
            setTrust('intern', 666);
            writeText("You close your eyes and focus on the mark on your hand, there is a momentary sensation of burning before it fades away.");
            writeSpeech("intern", "", "Aye man you okay? You look a little pale.");
            writeBig("images/intern/crwut.jpg", "art by Morino Kuma");
            writeText("He walks closer, holding your wrist to check your pulse nervously.");
            writeSpeech("intern", "", "You seem ok pal, is it somethin' else?");
            writeSpeech("player", "", "I'm okay I'm okay, let's sit down shall we?");
            writeText("He doesn't seem to understand what's going on, but eager to find it out, he sits down on the nearest chair.");
            writeText("You kinda feel bad about corrupting the boi who's trying to help you until the last moment, but it doesn't stop you from reaching his forehead to put your mark on use.");
            writeSpeech("intern", "", "Umm, playerF, what're you doing..?");
            writeText("Now it's your turn to be confused, you're a hundred percent sure your mark <b>did</b> glow when you touched him, but he looks completely the same.");
            writeSpeech("intern", "", "That was such a sorry excuse of a headpat, <i>if it was meant to be one</i>.");
            writeText("You let out a screech and pull your hand back when you feel an intense burning on your mark, when you look down on it you see it glowing brighter than usual.");
            writeText("You raise your eyes back up, seeing your familiar stare into your soul with a smug grin.");
            writeSpeech("intern", "", "Cute mark, got it from one of the bois out there?");
            writeSpeech("player", "", "W-What..? How..?");
            writeText("He laughs at the question for a while, enjoying himself too much that he has to wipe his tears.");
            writeSpeech("intern", "", "I should've expected you'd get yourself one of these marks by now, wanna see mine?");
            writeText("With a fingersnap, a mark similar to yours (however much brighter) appears on his forehead for a split second before fading away.");
            writeSpeech("intern", "", "But man, there is a small issue...<br><i><font color= '#BD7CDE'>You can't corrupt what's already corrupted baby.</i></font>");
            writeText("Finally, the penny drops.");
            writeSpeech("player", "", "Y-You were a..?");
            writeSpeech("intern", "", "<i>A hellspawn? A demon? I sure as hell am buddy.</i>");
            writeText("Him being a demon would explain a lot, though it'd create a lot more problems.");
            writeSpeech("player", "", "Wait a second, if you're a demon, how have I never have the same issues with you as others?");
            writeSpeech("intern", "", "What do you mean?");
            writeSpeech("player", "", "You know like, their mindbreaking fluids, neverending lust, etc.");
            writeText("He pulls a tiny vial from his bag, shaking it slowly with his eyes focused on you he replies.");
            writeSpeech("intern", "", "They are collectors, low ranked demons, they 'harvest' the stuff we need, that's why they have such a 'fuzz' as you call it.");
            writeSpeech("player", "", "Oh so I'm talking to a <i>demon big shot?</i> I thought likes of you didn't need to fuck humans.");
            writeText("He stops shaking his vial to point it at your face.");
            writeSpeech("intern", "", "What makes you think I 'need' you anyway? <i>Can't a demon fuck for fun?</i>");
            writeSpeech("player", "", "Okay fair, but what about the fuzz?");
            writeText("He opens his vial for a moment, filling the room with a bitter smell before he shuts it back.");
            writeSpeech("intern", "", "This little thing here suppresses that fuzz and <i>other demonic features</i>, so, <i>the likes of me</i> can blend in with you humans and not actually kill them when we barely even touch them.");
            writeText("You shrug with a confident laugh.");
            writeSpeech("player", "", "<i>You're underestimating my demon boy tolerance.</i>");
            writeText("He gives you a funny look before putting the vial away and pulling a green one instead.");
            writeSpeech("intern", "", "Well, I think you wouldn't mind if I tested that <i>tolerance</i> then? Stay conscious and I'll admit defeat.");
            writeText("Your guts tell you that it's a bad idea, but you know he wouldn't let you just die in here either.");
            writeSpeech("player", "", "Alright, let's see what a top notch heathen can do.");
            writeSpeech("intern", "", "<i><font color= '#BD7CDE'>Call me a heathen again and I'll tear your tongue away.</font></i>");
            writeText("The room gets filled with the familiar 'concept of sinning' smell the moment he opens the second vial to pour a bit in his mouth.");
            writeText("You see internF's eye gleam in a bright purple before your mind goes black and you collapse on the cold floor.");
            writeSpeech("intern", "", "<font size= '-1'>playerF..!</font>");
            writeFunction("writeEncounter('devilHome')", "Continue");
            break;
        }
        case "devilHome" :{
            passTime();
			writeHTML(`
				t Your head is throbbing, it seems you've been out for a few hours and have been moved in your sleep.
				player <i>How long has it been..?</i>
				sp ???; im images/none.png; Five hours and thirty four minutes, playerSir.
                t You turn around to see where that voice came from, it seems the boy's busy writing something.
                im images/intern/twrite3.jpg
                t He looks pretty, and interestingly enough his presence feels more <i>calming</i> than <i>charming</i> for you.
				player <i>And who the hell are you supposed to be..?</i>
                blessed Oh excuse me I forgot to introduce myself, name's Theo Dorres, but please just call me Theo, and if I'm not wrong you must be playerF.
                im images/intern/theoyay.jpg 
                t He seems to know your name, and by the looks you see he knows more than just that.
                player ...Do you know where internF is?
                blessed internF? I don't know who you're talking about.
                t You stare at him, obviously not buying that lie, and with the way you're looking at him it only takes him a few seconds to burst into a laughter.
                blessed Okay okay just kidding, he went outside to fetch you something to eat, you know we don't eat the same stuff as you do.
                player I doubt that, who wouldn't love a good warm pot of soup?
                blessed <i>...Okay you've got a point, but I think that's all we've got in common with human cuisine, and pancakes.</i>
                t His constant claim of not being human makes you finally give in and ask him the question he's been waiting for.
                player Well then, uhmm, <i>what are you..?</i> Like it's obvious you're no demon.
                blessed Heh, isn't it obvious? <i>I'm just a cutie!</i>
                t He's a cutie that's for sure, though not really a humble one.
                player <i>Eye</i> can see that much, but you know that's not what I'm asking.
                blessed Heh, if you must know, I'm the opposite of internF.
                player <i>You don't mean..?</i>
                t The front door opens along with a familiar voice.
                indamn Yep, Theo's an angel.
                im images/intern/danyay.jpg
                t internF doesn't look like the last you've seen him, not the usual internF, but not what you've seen in computer room either.
                indamn I see two of you've met already, Theo's pretty fun to hang with, <i>even for a demon.</i>
                blessed Aww, you're flattering me.
                t internF tosses his bags onto the couch you woke up on.
                player One hellspawn and one heavensent in the same home huh, I could get used to that.
                t They laugh at what you say with a shrug.
                indamn Sure you would pal, but don'tcha think you're rushin' a bit?
                player What you mean?
                t Theo raises his hand and starts jumping in place for a permission from internF to speak.
                indamn <b><i>Sigh</i></b>, go on Theo.
                blessed <i>Yaay..!</i> Okay so, you see, I'm an angel and internF here is a demon right, having both of us together for yourself would be like mixing boiling and freezing water in a thin glass.
                indamn In short, you'd break and die.
                player You keep telling and telling me how you'd kill me this or that way, I call it bullshit.
                t Theo shrugs.
                blessed I mean, you could've died there you know? Like if it weren't for-
                indamn <i>Theo, you better not.</i>
                t Theo starts chuckling before looking back at you with a wide smile.
                im images/intern/theo.jpg
                blessed ...If it weren't for your little lover here calling and begging me to come help, you could be a little less alive right now.
                indamn <font color= '#BD7CDE'>You little- It wasn't like that you dumbass, I just couldn't bring myself to let him die because of me, and that's all.</font>
                blessed I'd believe it if I didn't see you there myself, oh man you had to see it, he was shaking and crying like a baby.
                t internF curses under his breath with a light blush going through his face.
                player Aww internF, were you really worried for a mere human like me? Come here.
                t You pull him in for a cuddle, which he tries to resist for a few seconds before giving up.
                indamn <i>This is so embarrassing...</i>
                t No matter what he says, internF is still the same internF you know, just a little more <i>hellish</i> than before.
                blessed Okay, it's getting pretty late, it was nice to meet you playerF.
                player Aww, I thought I could at least get laid by one of you today.
                t Theo rolls his eyes and looks over at internF, which he replies with a tired nod.
                indamn Yep, always like that...
                blessed Damn, may god lend you some strength man.
                indamn Okay look, here's the thing, you almost fucking died once today, and I don't want that happening a second time, alright?
                t You nod.
                blessed And I wouldn't want you sleeping on our floor, so I think you should make haste and go home my friend, and don't worry, we'd be pleased to have you come over again sometime.
                indamn <i>Well, if you'd like to chat a little I guess you could stay for a while, you know, you don't get to see soul twins everyday.</i>
                blessed And if not I think I should say goodbye for now, may the heavens bless you on your way back home like they blessed me.
                indamn Just don't get ran over 'kay? I can't ride a roadkill after all.
			`);
            writeFunction("writeEncounter('duoChat')", "Chat With Them");
            writeFunction("changeLocation('shoppingDistrict')", "Thank Them, Say Goodbye And Make Your Way Home");
            break;
        }
        case "duoChat" :{
            var today1 = new Date();
			var dd = String(today1.getDate()).padStart(2, '0');
			var mm = String(today1.getMonth() + 1).padStart(2, '0'); //January is 0!
			today1 = mm + '/' + dd;
            writeHTML(`
				player Actually there are a few things I'd like to ask.
                indamn Fire away then, we've got a lot to tell.
                blessed Just make sure you can get done before night, I've heard it gets pretty dangerous when the sun is out.
			`);
            writeFunction("writeEncounter('duoQ1')", "Soul Twins?");
            writeFunction("changeLocation('shoppingDistrict')", "'Actually I'd Better Go Home'");
            break;
        }
        case "duoChat1" :{
            var today1 = new Date();
			var dd = String(today1.getDate()).padStart(2, '0');
			var mm = String(today1.getMonth() + 1).padStart(2, '0'); //January is 0!
			today1 = mm + '/' + dd;
            writeHTML(`
                indamn Oh so you have more to ask?
                player I'd actually like to ask a few more things.
                blessed And I'd be delighted to answer!
			`);
            writeFunction("writeEncounter('duoQ1')", "Listen Their Story Again");
            writeFunction("writeEncounter('duoQ2')", "internF's Real Identity");
            writeFunction("writeEncounter('duoQ3')", "Theo?");
            writeFunction("writeEncounter('duoQ4')", "The Blessed And The Cursed?");
            writeFunction("writeEncounter('duoQ5')", "What To Do?");
            writeFunction("writeEncounter('duoQ6')", "Ask Them About Themselves");
            writeFunction("writeEncounter('duoQ7')", "Ask internF about the harem");
            if(today1 == "02/14"){
                writeFunction("writeEncounter('duoVday')", "Valentines Day!!!");
            }
            writeFunction("changeLocation('shoppingDistrict')", "'Actually I'd Better Go Home'");
            break;
        }
        case "duoChat2" :{
            var today1 = new Date();
			var dd = String(today1.getDate()).padStart(2, '0');
			var mm = String(today1.getMonth() + 1).padStart(2, '0'); //January is 0!
			today1 = mm + '/' + dd;
            writeHTML(`
				player Actually there are a few things I'd like to ask.
                indamn Fire away then, we've got a lot to tell.
                blessed Just make sure you can get done before night, I've heard it gets pretty dangerous when the sun is out.
			`);
            writeFunction("writeEncounter('duoQ1')", "Soul Twins?");
            if(today1 == "02/14"){
                writeFunction("writeEncounter('duoVday')", "Valentines Day!!!");
            }
            writeFunction("writeEncounter('devilQuo0')", "Go Back");
            break;
        }
        case "duoChat3" :{
            var today1 = new Date();
			var dd = String(today1.getDate()).padStart(2, '0');
			var mm = String(today1.getMonth() + 1).padStart(2, '0'); //January is 0!
			today1 = mm + '/' + dd;
            writeHTML(`
                indamn Oh so you have more to ask?
                player I'd actually like to ask a few more things.
                blessed I'd be delighted to answer!
			`);
            writeFunction("writeEncounter('duoQ1')", "Listen Their Story Again");
            writeFunction("writeEncounter('duoQ2')", "internF's Real Identity");
            writeFunction("writeEncounter('duoQ3')", "Theo?");
            writeFunction("writeEncounter('duoQ4')", "The Blessed And The Cursed?");
            writeFunction("writeEncounter('duoQ5')", "What To Do?");
            writeFunction("writeEncounter('duoQ6')", "Ask Them About Themselves");
            writeFunction("writeEncounter('duoQ7')", "Ask internF about the harem");
            if(today1 == "02/14"){
                writeFunction("writeEncounter('duoVday')", "Valentines Day!!!");
            }
            writeFunction("writeEncounter('devilQuo0')", "Go Back");
            break;
        }
        case "duoQ1" :{
            addFlag("intern", "learnstory");
            writeHTML(`
                player What did you mean by "soul twins"?
                im images/intern/theoyay.jpg
                blessed Oh that's my favorite story, what about you internF?
                indamn That's our backstory you dumbass.
                t Theo grunts.
                blessed So? I still think it's an exciting story.
                indamn Easy for you to say, you weren't the one to get tortured.
                player May I learn what you guys are arguing about?
                t Theo looks at internF like he's waiting for his permission, which gets granted with a slow nod from him.
                blessed <i>Ahem</i>, okay so, many many decades ago, there were two princes in a distant kingdom...
                indamn <b>One</b> prince, you remember I wasn't a prince like you were right?
                blessed I don't care, you're still my little prince.
                indamn <i>Shush...</i>
                t Though you're interested in hearing more about their backstory, it's cute to see them get flirty.
                blessed Hmmmm, aha yeah I remember, let's continue.
                indamn The prince and his servant's son, or in other words Theo and I were once best friends.
                blessed They would spend their days together, everyday, from dawn till night.
                indamn Eventually, as they grew up, something happened. 
                blessed They began feeling for each other, more and more by each day.
                indamn The servant boy couldn't even consider such a thing, he believed the prince would never love someone like him.
                blessed Until the prince himself confessed him his love.
                indamn Their feelings were mutual! And on that day they became a couple in secret.
                blessed What a cliché huh? Royal boy falls in love with poor maiden.
                player I guess..?
                blessed Anyway, our fresh and happy couple thought they could keep their secret until they had a chance of living together.
                indamn <i>They couldn't</i>, all they had was a wonderful year together.
                blessed ...I'd give <i>anything and everything</i> to live another year like that.
                indamn Of course the king wasn't really happy with what he learned, his only son falling in love with a mere peasant who can't even give birth to a heir.
                blessed So he secretly ordered his servant to "convince" his son to leave the prince alone...
                indamn Servant used some cruel "methods", such as making his son go to bed hungry and beating him till he fainted during daytime.
                blessed But the "peasant boy" never gave up on his love, no matter what they tried.
                indamn So the king decided to step in.
                blessed A servant he believed to be loyal told the prince he'd be able to see his lover again if he followed him.
                indamn And when they finally arrived he found himself surrounded by his father's loyal guards.
                blessed And his lover on the edge of a cliff...
                indamn Completely beaten up and bloodied, lover of the prince still managed to smile when he saw him.
                blessed King was also there but he let them cuddle for one last time...
                indamn ...Before ordering his own son to push his suffering lover off the edge...
                blessed "It's either that filthy dog or your title, he'll die to his wounds anyway", I can still hear my once-beloved father telling me that.
                indamn Prince was so frustrated about his father's mercilessness.
                blessed And in no time, the prince and the king had drawn their blades, prince's swordfight skills were unrivaled in his land so he could easily kill his foe if it weren't <i>his own father</i>.
                indamn The peasant on the other hand, knew he'd lower his guard if he kept fighting his  father, so he slowly pushed himself off the cliff, saying "I love you" for one last time.
                blessed But the prince had his eyes on his lover, so when he saw him start moving he ran to try and catch him.
                indamn He caught him on the last second, but the edge collapsed with both of them still on it.
                blessed As they were falling, the prince managed to reach for his lover to cuddle him one last time.
                indamn And both them swore for revenge and mercy in their last moments.
                blessed <i>Revenge for their ruined love...</i>
                indamn <i>...And mercy from lord for each other and everyone who remained loyal to them until the last moment.</i>
                blessed The moment their bodies hit the ground and their souls left their bodies, they learned one thing.
                indamn Their vows were granted, both of them!
                blessed One were to choose being the one to take their revenge.
                indamn And the other could work for the god and make sure their helpers would receive mercy.
                blessed But the couple was eager to have both for both.
                indamn They said they wouldn't choose either unless they could choose both, they were told it would be costly but they didn't step back.
                blessed Their souls were shattered into two pieces, then put together into one again.
                indamn Except, they were now half themselves and half their lovers.
                blessed We're the same person, but we were made from two different people.
                indamn And then put in two different bodies when being brought back to life.
                blessed This way, both of them could take their revenge while also helping the people who remained loyal to them, but as they were warned, that costed them everything.
                indamn They were finally together in each body, and forever.
                blessed But they were also each other, which means they also lost their lovers, <i>forever...</i>
                indamn The couple kept their promise, the old king died slowly and painfully as possible, without a heir for his "glorious" kingdom.
                blessed And their helpers lived happily till their short lives ended peacefully.
                indamn In the end, the couple had completed their purposes, as one identical soul locked in two different bodies.
                blessed One ascended to be an angel.
                indamn And the other descended deep into hell to be a devil.
                blessed Since that day, we've been sticking together and have moved between countless countries.
                indamn And switched countless names.
                blessed We tried to hang on with the bits of what we loved about each other.
                indamn But when both of you're the same person, most you can do is remembering the old days together.
                blessed May our souls be parted again one day, so we can get together once more in heaven.
                indamn Or hell...
                blessed Doesn't matter, if we'd be together once again, I'd go anywhere without hesitation.
                indamn So would I...
                blessed And that my friend, is the story of the soul twins you see.
                indamn A couple that'll always be together...
                blessed ...Yet never get to feel each other.
                t You feel a little broken about that last part.
                player Damn, is that really what happened?
                indamn Kinda, I mean we somewhat made it up, but Theo really was a prince. <i>A cute one that is.</i>
                blessed Aww... But yeah when you spend a few thousands of years alive you forget what happened when you were twenty one.
                indamn I'm pretty sure we di- I mean transitioned on twenty, not twenty one.
                blessed It was my birthday, remember?
                indamn Yeah yeah you're one day older than me mister mature fuck, nineteenth of June is only one day before twentieth.
                blessed I'm still older than you, darling. <i>Cry about it.</i>
                t internF sniffles.
                indamn I will now, hope you're happy.
			`);
            writeFunction("writeEncounter('duoChat1')", "Go Back");
            break;
        }
        case "duoQ2" :{
            writeHTML(`
				player So internF, you really are a demon huh?
                t He giggles.
                indamn <i>Actually I'd rather be called a demon prince, I'm no normal demon you know.</i>
                player Okay you narcissistic heathen, can you tell me more about that?
                indamn <i><b>I'm no heathen you scum, heathens and demons aren't the same.</b></i>
                t You cross your arms with a serious look on your face.
                indamn Ggh, fine, I'll tell you more, but you better not call me that again.
                t You nod and sit down.
                indamn Okay so, when I was first corrupted, I too had a succubus phase like almost everyone else, but I had an advantage.
                blessed You were granted a corruption mark right?
                indamn Yep, and I thought to myself, I'd either harvest some dumbasses for the rest of my life, or <i>I would play big.</i>
                t He stops for a moment to think the details.
                indamn Yeah, it's been a huge while since, but I remember waiting for nights to come out and act like an apparition to those who had a part in our fate.
                indamn I'd tell them I came for revenge and have them beg for mercy, then I'd spare their lives by corrupting them into my slaves.
                player Wouldn't they notice what was going on? Like how would you convince them to work for you?
                indamn <i>Well I simply didn't tell 'em they had another choice, so until they noticed something was off, they thought they served a "weird ghost who wants them to gather cum for him", it was really funny if I say so myself.</i>
                t His eyes still shine with the sweet taste of revenge he had taken.
                player So, with several subordinates working for you...
                indamn I quickly gained ranks, yeah, and in a few centuries I reached where I am right now.
                t Theo grunts.
                blessed They don't let such cheating on the holy side though, really stupid.
                player One last thing, what is a demon like you doing in a <i>damn college?</i>
                indamn Well you see, it has been a long while since I last got education, so I thought it'd be fun to learn something new in the human world, turns out humanity didn't need to fantasize hell as a realm of punishment.
                player And why is that?
                indamn <i>We don't do calculus in hell you know...</i>
            `);
            writeFunction("writeEncounter('duoChat1')", "Go Back");
            break;
        }
        case "duoQ3" :{
            writeHTML(`
				player What about you, Theo?
                blessed Huh? What about me? The book I'm working on is actually a romance novel if that's what you're asking.
                player Well good to know, but what I'm asking is uhmm, so you're an angel right? How does it feel being an angel? Is it fun at all?
                t He raises an eyebrow, curious of why you'd ask that.
                blessed I mean compared to being a demon it's rather boring, but at least it's a calm job, people don't curse me like a hellspawn and I feel good with what I'm doing.
                player What do you do?
                blessed What I do is pretty much helping people that lost their hopes, in different ways, like I write motivational books as an anonymous author so maybe a few people can feel better about their lives.
                player ...That's actually really nice, as a counselor I know many people to need that kind of motivation.
                t He looks surprised about the praise.
                blessed W-Wait, you actually find it useful..?
                player I do, I'd actually like to have a few copies to distribut if it's fi-
                t Your sentence gets cut short with his happy screeching.
                blessed <i>Yaay!</i> Thanks a bunch, you're the first person ever to take my job serious.
                indamn Good job pal, now he won't shut up about it for days.
                blessed Cry me a river you jealous little baby, my job is importaaant.
			`);
            writeFunction("writeEncounter('duoChat1')", "Go Back");
            break;
        }
        case "duoQ4" :{
            writeHTML(`
				player So one of you're a demon and the other is an angel huh?
                blessed Precisely so.
                player And how come you're allowed to live together?
                indamn Well you see, we've each other's souls, so we can't be seperated one to hell and one to heaven forever.
                blessed Also, I'm not a proper angel and he's not a proper demon, we're both and that's how we can be together no problem.
                player I see, but doesn't that mean you can't go neither hell nor heaven though?
                indamn Yeah, I'm a prince of underworld who barely spent a month in his realm for the century
                blessed On the other hand I can go to heaven no problem, but the place is always so bright it hurts my eyes.
			`);
            writeFunction("writeEncounter('duoChat1')", "Go Back");
            break;
        }
        case "duoQ5" :{
            addFlag("intern", "ordervial");
            writeHTML(`
				player So is there anything I could do to have both of you at once?
                indamn Well that would be awesome for both of us, right?
                blessed Yeah! We would finally have a way to feel bonded with each other, through a third person or not.
                player So you mean there is a way huh? If so, I'd like to help.
                blessed Let's be honest playerF, you'd help us just so you could bang a demon and an angel together.
                player <i>Maaaaybe.</i>
                t You see internF going through the pages of an old looking book.
                indamn <i>A-ha!</i> Here it is, the "Karma conditioner"!
                player The hell is a karma conditioner?
                indamn Okay so, fucking a demon and fucking an angel are two different things, as a human you could use a devil conditioner to protect yourself from "aftermath effects" of a demon partner, of course prohibited to use since it takes our trump card away.
                blessed There are also angel conditioners, though angels don't really get laid often, their bodies can still leave effects on a human, not as painful as demons though.
                indamn A karma conditioner is a mixture of that two, though it's an ancient recipe which gets prepared only when ordered specifically.
                player I suppose people don't have the same problem as me that often huh?
                t internF shrugs.
                indamn Pretty much no one, and the conditioner's effects are still weak so the user has to be familiar with both bodies separately.
                player Rain check on a threesome then huh?
                indamn Yup, but once you get familiar with each of us, I could get the nearest demon merchant prepare one for you, but you'd have to buy it yourself.
                player And why is that?
                t internF chuckles.
                indamn <i>Cuz I'm broke man, internship don't pay the bills.</i>
                player Damn you...
			`);
            writeFunction("writeEncounter('duoChat1')", "Go Back");
            break;
        }
        case "duoQ6" :{
            writeHTML(`
				player So could you two tell me more about yourselves?
                blessed There's not much about us we could tell actually.
                indamn Like yeah, we just live together and do what we have to do, Theo likes collecting pens and-
                blessed I guess you wanted to say "and always beats me in the video games".
                t internF clenches his fists.
                indamn <b>You definitely cheat on that game you cheap bitch.</b>
                blessed I'm just better than you, cry about it.
                indamn Just wait until the next time.
                blessed You've been saying that for last two years, anyway, internF really likes collecting "clothes" and perfumes, I've gotta admit he smells nice with them.
                player Uh huh, interesting.
			`);
            if(checkFlag("intern", "checkbag") ==true){
               writeHTML(`
				player Oh yeah, I saw that much in his bag, but I found one more thing.
                t internF looks confused while Theo looks disappointed.
                blessed You checked his bag? How rude!
                player Yeah but I got curious, anyway what was in that notebook I found in your bag? I couldn't understand a word it said, is it some demonic alphabet or som-
                t Before you can finish your sentence Theo starts laughing really really loud, making internF hide his red face.
                indamn <i><font size= '-1'>It's my psychology notebook, completely written in English...</font></i>
                blessed Pfff, man I told you your handwriting is horrible.
                indamn And you never offered to help me improve it, are you afraid I'd write better books than you do?
                blessed Maybe, but I would love some competition.
                indamn Oh well guess I got myself a boring trouble, thanks playerF.
                player Heh, you're welcome.
                `); 
            }
            writeFunction("writeEncounter('duoChat1')", "Go Back");
            break;
        }
        case "duoQ7" :{
            writeHTML(`
				player So, internF, I was thinking.
                indamn Oh I know that tone, Theo Theo watch *him make a fucked up proposal out of blue!
                im dtea2.jpg
                player ...When you put it that way, I think I'll back off.
                indamn Whaaaat?
                t He looks a little frustrated, though you won't tell him he just looks cuter this way.
                indamn You can't just pique my interest and fuck off just like that, you aren't leaving this home till you do.
                player Fine then, I was going to ask you if you would like to become a part of my succubus harem.
                im dtea1.jpg
                indamn And theeeere we go, I'm not even a succubus you dum.
                blessed I'm pretty sure *he said "succubus" because most of them are his own converts, therefore still mere succubi, correct?
                player Bravo Theo, you want a candy?
                im twrite2.jpg
                blessed I feel like I'm being made fun of.
                player Well internF? What do you say? We have a whole hotel for this job and are gathering in there.
                indamn That hotel?! Are you trying to get them drugged and fucked to death? What the hell is wrong with you?
                player A lot of things, but that's not the case, I've got control over my own harem of bois so they are safe so far.
                t You can feel the relief in his sigh.
                indamn Well, now that sounds like a better deal, but you are forgetting one thing.
                player And that is?
                blessed Me, I can't let you take internF from me, and I can't come into a demon infested area either. Before you ask, I tried going in a demon inn before and they...
                t internF laughs.
                indamn <b>THEY TRIED TO USE HIS FUCKING HALO AS A COCK RING IT WAS RIDICULOUS!</b>
                blessed Ahem! Anyway, even if internF wanted to leave I could not let him, we both may love you but I can't let you take him from me.
                indamn The hell you mean "even if internF wanted to"? Do you have any idea how terrible I feel whenever we have to part for even a single day? Shit breaks me man.
                im twrite4.jpg
                blessed I never thought you would, but let's give playerF a chance to say something hm?
                player I was gonna say it's okay if he doesn't want to "live" in the hotel like others, he can just stay overnight from time to time if he wishes to.
                indamn ...Theo?
                t Theo nods.
                blessed That's reasonable, but I have one condition.
                player And that is?
                blessed You'll come visit us from time to time as well, <i>after all internF is not the only one that needs some fun.</i>
                player Sounds like a deal to me.
			`);
            writeFunction("writeEncounter('duoChat1')", "Go Back");
            break;
        }
        case "duoVday" :{
            writeEvent('internvdayspecial');
            writeFunction("writeEncounter('duoChat1')", "Go Back");
            break;
        }
        case "devilQuo" :{
            if(checkFlag("intern", "hate") ==false){
                if(checkFlag("intern", "visit1") ==false){
                    addFlag("intern", "visit1");
                    writeHTML(`
                    t You get a warm welcome only a few seconds after knocking on the front door.
                    im images/intern/danyay.jpg 
                    indamn Yaaaay! Hey Theo look who's here!
                    im images/intern/twrite4.jpg
                    blessed Hello again playerF, nice to see you.
                    player Feels nice being here too, what are you guys up to?
                    t internF chuckles.
                    indamn Well you see, your generic nerd over there is working on his book again.
                    im images/intern/twrite2.jpg
                    blessed And your generic demon bitch is contributing absolutely nothing to society, as always.
                    im images/intern/danwow.jpg
                    indamn You smug bitch.
                    t As fun as it is to watch them fight, it doesn't look like they'll stop unless you intervene.
                    player <b>Ahem</b>, don't you guys think it is weird for "soul twins" to fight that often?
                    indamn Have you never heard of infighting?
                    player I don't want you guys to do that right now.
                    blessed So, what would you like us to do then?
                    indamn We'd love to talk a bit if you'd like, but I doubt someone as horny as you would care.
                    player <i>Says the demon cumslut...</i>
                `);
                }
                else{
                   writeHTML(`
                        blessed Welcome back playerF! Here to talk again?
                        indamn Or maybe... You know.
                        player It could be either, or both.
                    `); 
                    writeDual("intern", "images/intern/indamn.jpg", "Theo", "images/intern/blessed.jpg", "Take your time!");
                }
                if(checkFlag("intern", "learnstory") ==true){
                    writeFunction("writeEncounter('duoChat3')", "Chat");
                }
                else{
                    writeFunction("writeEncounter('duoChat2')", "Chat");
                }
                if (checkFlag('intern', 'club')!=true && checkTrust('nagatoro') > 101) {
                    writeFunction("writeEncounter('internCD')", "Ask internF about crossdressing");
                }
                if(checkFlag("intern", "devilbang") ==false){
                    writeFunction("writeEncounter('interndevil1')", "Devil Debut");
                }
                else{
                    writeFunction("writeEncounter('interndevil2')", "Another Hellish Night");
                }
                if(checkFlag("intern", "angelbang") ==false){
                    writeFunction("writeEncounter('internangel1')", "Angel Annihilator");
                }
                else{
                    writeFunction("writeEncounter('internangel2')", "Heaven Alternative");
                }
                if(checkFlag("intern", "kconditioner") ==true){
                    if(checkFlag("intern", "angelbang") ==true){
                        if(checkFlag("intern", "devilbang") ==true){
                            writeFunction("writeEncounter('duoEnd')", "Devote Yourself To The Couple");
                        }
                    }
                }
            }
            else{
                writeHTML(`
				    t You approach their door to knock it, but no one answers.
                    player <i>Are they not home..?</i>
                    t You knock a little more until the door opens slowly.
                    blessed Uhh, alright so internF wanted me to tell you that he "heard and <i>ignored</i> you first time just well" and wants you to "fuck off", sorry.
                    player Theo hold on-
                    blessed I think you should leave, <i>I really think you should leave.</i>
                    t And then, the door is shut, seems like someone is not ready to forgive you yet.
                `);
            }
            writeFunction("changeLocation('shoppingDistrict')", "Go Back");
            break;
        }
        case "devilQuo0" :{
            writeHTML(`
				indamn So, is there anything else?
                player Lemme think...
                `);
            if(checkFlag("intern", "learnstory") ==true){
                writeFunction("writeEncounter('duoChat3')", "Chat");
            }
            else{
                writeFunction("writeEncounter('duoChat2')", "Chat");
            }
            if (checkFlag('intern', 'club')!=true && checkTrust('nagatoro') > 101) {
               writeFunction("writeEncounter('internCD')", "Ask internF about crossdressing");
            }
            if(checkFlag("intern", "devilbang") ==false){
                writeFunction("writeEncounter('interndevil1')", "Devil Debut");
            }
            else{
                writeFunction("writeEncounter('interndevil2')", "Another Hellish Night");
            }
            if(checkFlag("intern", "angelbang") ==false){
                writeFunction("writeEncounter('internangel1')", "Angel Annihilator");
            }
            else{
                writeFunction("writeEncounter('internangel2')", "Heaven Alternative");
            }
            if(checkFlag("intern", "kconditioner") ==true){
                if(checkFlag("intern", "angelbang") ==true){
                    if(checkFlag("intern", "devilbang") ==true){
                        addFlag("intern", "complete");
                        writeFunction("writeEncounter('duoEnd')", "Devote Yourself To The Couple");
                    }
                }
            }
            writeFunction("changeLocation('shoppingDistrict')", "Go Back");
            break;
        }
        case "interndevil1" :{
            writeEvent('interndevil1');
            passTime();
            addFlag("intern", "devilbang");
            addSkill("corruption", 2);
            writeFunction("changeLocation('shoppingDistrict')", "Clean And Go Back");
            break;
        }
        case "interndevil2" :{
            writeEvent('interndevil2');
            passTime();
            addSkill("corruption", 2);
            writeFunction("changeLocation('shoppingDistrict')", "Go Back");
            break;
        }
        case "internangel1" :{
            writeEvent('internangel1');
            passTime();
            addFlag("intern", "angelbang");
            reduceSkill("corruption", 2);
            writeFunction("changeLocation('shoppingDistrict')", "Go Back");
            break;
        }
        case "internangel2" :{
            writeEvent('internangel2');
            passTime();
            reduceSkill("corruption", 2);
            writeFunction("changeLocation('shoppingDistrict')", "Clean And Go Back");
            break;
        }
        case "duoEnd" :{
            passTime();
            writeHTML(`
                player So, is it time finally?
                indamn I don't know, let's check the list.
                t Theo pulls a notebook out of his bag.
                indamn Okay so did you use the karma conditioner?
                player Yep, it was quite expensive though.
                indamn Theo, cross the conditioner.
                t Theo crosses a line on his list which you believe said "k. conditioner".
                blessed We know you've had at least one time with each of us as well.
                t He crosses two more lines for each of them.
                indamn Is your dick still in place.
                t You look in your pants and nod with a relieved sigh, Theo giggles and crosses another line.
                blessed Okay, last question, <i>are you ready to what comes after this?</i>
                player A hot threesome?
                im images/intern/twrite1.jpg
                blessed Duh, internF.
                indamn Well, yeah, but also you know, <i>devoting yourself to an angel and a devil simultaneously.
                player Does it have any more problems you guys haven't told me?
                indamn Well yeah-
                blessed I don't know if a demon or an angel has ever invited you for devotion before, and it would be fine if it was either.
                indamn But it's different when you go for both.
                t Theo nods slowly with a sad face.
                blessed Yeah, having both of them at the same time would cause huge problems even with the conditioner...
                player <i>For fucks sake what else? I even bought this ancient nephilim potion for a fuckton of money and you say there'd still be problems, <b>WHAT ELSE COULD GO WRONG?!</b></i>
                t Theo and internF look at each other and start chuckling.
                blessed Well, <i>you'd get two extremely horny partners for yourself...</i>
                indamn <i>...More than you wish they could be.</i>
                player <i>You guys are <b>ANNOYING!</i></b>
                t You all laugh at their little "prank".
                t Theo puts his notebook away and gets up.
                im images/intern/theoyay.jpg
                blessed Alright, it seems you're all set.
                indamn Except for one thing...
                blessed Huh?
                t You look at internF with your eyes wide open.
                player <i>What is it this time?</i>
                im images/intern/danbrat.jpg
                indamn Your dominance, <i>you'll have to hand it over to us for this time.</i>
                player <i>Nooo my dominance-</i> Why the fuck?
                indamn Ahem... Since two is bigger than one, that would mean two of us can take the control this time as well.
                player That doesn't make any sense-
                t Theo laughs.
                blessed Your math is better than I expected.
                indamn <i>Fuck you too, Theo... I'm tryna convince him to let us dom this time.</i>
                blessed Why would he accept that? Have you thought before asking? He has been waiting for this for such a long time you know.
                indamn Well... 
                blessed Pfft fine, let's ask him then, hey playerF, would you let us dominate in your first time where you could get to dominate both of us together?
                player Sure thing.
                blessed See? I to- ...wait what?
                im images/intern/danwow.jpg
                indamn Wait, really..?
                t You nod.
                im images/intern/danyay.jpg
                indamn <b>WOOOO! SUCK IT YOU MORON!</b>
                blessed <i>Oh I sure will, and you *sir will not regret letting us dominate this time.</i>
                player <i>I've no doubt...</i>
                t internF grabs a pen out of Theo's bag to spin it in his hand.
                indamn Okay so whose bedroom are we using?
                player Don't look at me, you guys are in charge.
                blessed <i><font color= '#937CF7'>Right here in the living room.</font></i>
                t Both of you look over at Theo.
                indamn <i><font color= '#BD7CDE'>What the fuck was that?</font></i>
                blessed <i>What? Do you guys think I'm not the type to give orders?</i>
                player No no not at all.
                blessed <i><font color= '#937CF7'>Good, sit down, dick out.</font></i>
                indamn <i>Don't look at me man, I don't know what happened to him either.</i>
                blessed Oh it's nothing, <i><font color= '#937CF7'>I just let my desires loose.</font></i>
                im images/intern/theo.jpg
                t He might have a cute smile on his face now, but you're sure he won't let you stop until all of you are drained tonight...
                t ...
                player Uhm guys, are you really sure that's how you wanna do it?
                im images/intern/duoblow1.jpg 
                blessed Is that a complaint or a genuine question?
                player Uhh- Both..?
                indamn Complaint denied, the answer is <i>yes</i>.
                player And here I thought I could still have some influence over you two.
                t Theo giggles.
                blessed Maybe, but not tonight.
                indamn <i><font color= '#BD7CDE'>Tonight we'll entertain you the way we want.</font></i>
                blessed <i><font color= '#937CF7'>And we'll enjoy it ourselves as well.</font></i>
                t As if one wasn't good enough, having two pairs of otherworldly soft lips pressing on your dick is an entirely new type of arousal for you.
                player <i>Okay... Maybe it really isn't that bad...</i>
                t internF lands a tiny smooch on your dick.
                indamn <i><font color= '#BD7CDE'>Just trust us *master, you'll have the night of your life.</font></i>
                player <font size= '-1'>I don't have another choice do I?</font>
                t Both of the boys shrug slowly.
                player Fuck it,<i> show me what you guys can do then.</i>
                t A gleam passes by their eyes before they start their somehow coordinated work, a most hellish and heavenly feeling at the same moment, each better than the other.
                im images/intern/duoblow2.jpg
                player <b>Fffffuck you guys've got some serious coordination going on.</b>
                t They stop for a moment, but just as you're expecting a response they get back to their work even more intense than before.
                player <b>S-Shiiit- I-If you guys keep this up I'm gonna-</b>
                t They don't even let you finish your sentence by giving your dick a hard press of their lips at the same moment.
                im images/intern/duoblow3.jpg
                blessed <i>...Wonderful.</i>
                indamn <i>Now that IS a lot.</i>
                t Of course it was, you're still shaking as the boys are eyeing you naughtily.
                player <i>Oh daamn-</b>
                blessed <i>Alright, lay back.</i>
                player No break for poor little me..?
                indamn <i><font color= '#BD7CDE'>We've warned you.</font></i>
                player I can't believe this one wasn't an empty threat.
                t Theo pushes you down on the bed and in a blink of an eye you find him sitting on your crotch.
                indamn Hey what the fuck are you doing? That's my-
                blessed <b><i><font color= '#937CF7'>Please keep your damn mouth shut for once, I'll get it first this time and I accept no objections.</font></i></b>
                indamn Fucking- playerF say something, tell him I deserve it more..!
                player You don't see me complaining.
                t internF looks really disappointed.
                indamn Ughhh fine, <font color= '#BD7CDE'>just this once.</font>
                blessed <i>Heh, we'll see...</i>
                t And without losing a moment he starts slamming his ass on your dick as hard as he can.
                im images/intern/duoft1.jpg
                blessed Haaaah- I <b>AM</b> better am I not *master?
                indamn <i>I could definitely do better.</i>
                blessed <i>I didn't ask you.</i>
                player I really wish you guys could stop arguing and do your job.
                t Theo speeds up with a giggle, but something seems wrong with internF.
                player Guh- Is there anything wrong, internF?
                indamn <i>What me? Of course noooo hehe...</i>
                t Both you and Theo stop to give him a suspecting look.
                indamn Fuck, <i>fine I'm nervous about threesomes, didn't have a good experience last time I found myself in one. <br>It was traumatic.</i>
                player That was...
                blessed ...Unexpected, but why did you not tell me?
                indamn I thought you'd laugh at me...
                blessed Nooo, why the hell would I?
                t Theo gets back to bouncing slowly after saying that.
                player <i>Well we'll have a lot of time, I'm sure we can get you used to it by time.</i>
                blessed <i><font color= '#937CF7'>And I'd be pleased to help too.</font></i>
                indamn I mean thanks but, <i>Theo aren't you supposed to be the fucking angel here?</i>
                blessed <i><font color= '#937CF7'>I filled the absence of a proper devil bitch, what's wrong with that?</font></i>
                t The moment you try to laugh internF seals your lips shut by pressing his lips on them.
                blessed About damn time.
                t After that moment there are no more words, with the devil boy's lips on yours and the corrupt angel ramming your dick in his ass, it doesn't take long for you to reach your climax.
                im images/intern/duoft2.jpg
                blessed <b><i>GOOOSH..!</i></b>
                indamn <i>Holy shit-</i>
                player ...I guess we aren't done yet eh?
                blessed Nah, it's internF's turn.
                indamn What? Me?!
                t Theo slowly gets up and reaches internF's hair with a lustful grin.
                blessed <i><font color= '#937CF7'>What makes you think you can join a threesome and not get your ass fucked?</font></i>
                indamn Eeeeeh...
                blessed <i><font color= '#937CF7'>Hey playerF, could you sit down for a moment?</font></i>
                player S-Sure thing.
                t You take a seat on the same couch you were laying on, but before you know it Theo pulls internF on your lap, sitting right next to you.
                im images/intern/duofd1.jpg
                indamn <i>GAH- M-Man what the hell are you doing?!</i>
                blessed <i>Just helping you get started.</i>
                t He brings his mouth to internF's neck, making him squirm on your dick even harder.
                indamn <b><i><font color= '#BD7CDE'>WHOSE SIDE ARE YOU ON YOU GODDAMN BASTAHHHD-</font></i></b>
                player <i>...Hey Theo aren't you getting a little ahead of yourself?</i>
                blessed <font color= '#937CF7'>I am doing what this little brat begged for but couldn't, <i>he should be thankful.</i></font>
                t Combined with you laying waste in his ass, Theo's warm breath and soft lips teasing his neck starts being too much for poor internF.
                indamn <b><i>Fuuh- You guys- Fuckers- I am- NOooh- <font color= '#BD7CDE'>CUMMIING!</font></i></b>
                im images/intern/duofd2.jpg
                indamn <i><b>Fuuuuhck-</b></i>
                blessed <i>What a show.</i>
                t You feel your head getting heavy, even with that expensive conditioner having an angel and a demon for yourself is still a little too much for you.
                blessed Now to my room everyone, onward!
                player To sleep right!?
                t He pretends to think a bit.
                blessed Heheheh, alright maybe after one last round.
                indamn <i>And you call yourself merciful?</i>
                blessed <i>I can make it two any moment.</i>
                t internF shudders.
                indamn Gah! Forget I said a thing.
                player I sure hope you won't dom forever.
                t Theo shrugs with a laugh.
                blessed Hell no, this thing's tiring as hell to be honest.
                indamn <i>God, look, I know I'm a fucking hellspawn but I have to thank god for what this fucker just said, thanks a lot man.</i>
                t You laugh as all three of you walk into Theo's bedroom.<br>Though you've got a feeling that he might ask for more than "one more time".
                t ...
                indamn <font color= '#BD7CDE'>Fucking hell...</font>
                im images/intern/duofinale1.jpg
                t You were kinda right, Theo didn't stop with one more load, but two of them seem to have sufficed for him.
                blessed <i>Indeed, "fucking hell".</i>
                indamn Hey Theo, do you really think this'll help us feel like the old days again?
                blessed Well it kinda helped already.
                im images/intern/duofinale2.jpg
                blessed Like look at us, been a while since the last time we had this kinda fun you know.
                t internF chuckles.
                indamn Hey playerF, did you know Theo was the dom in our relationship as well? Like before all that bullshit.
                blessed Because this little yellow head was the subbiest little thing you could see.
                player It all still sounds like a fairytale with a bad ending to me.
                t Theo nods.
                blessed I don't know how we ended up with such a stupid life either, I had my plans man, I would live a happy life with my boy and die after like 40 years, yet I've found myself in the middle of a stupid fairytale.
                player Well not necessarily.
                t Both of them look up at you with questioning eyes.
                player I mean now that I'm here, you guys can live forever with each other like the old days right?
                indamn <i>One small issue, aren't you still a human?</i>
                player I thought you guys could find a way for that.
                blessed It's actually really easy, but are you really sure you wanna live forever?
                t You nod.
                player <i>I've nothing to lose.</i>
                im images/intern/duofinale3.jpg
                indamn You fuckers are gonna make me cry, but for this once I'll allow it.
                player Heh, if I'll live forever it means I'll get to see you crying a lot more than this.
                blessed But you still have a long life ahead, so how about we discuss this later?
                t You open your mouth to give him an answer, but your vision darkens and you're sound asleep in a few minutes.
            `);
            writeFunction("writeEncounter('duoEpilogue')", "Continue");
            break;
        }
        case "duoEpilogue" :{
            writeHTML(`
                t After what felt like years, <i>despite being only two months,<i> you are finally all fit to live together.
                blessed Good morniing!
                im images/intern/tangel1.jpg
                t Theo has gotten used to living together in quite a short while, sharing your experiences also have been a huge help for both of you, as he has improved the quality of his books and even started making money off them.
                player Gah- <i>Do you really have to flash your dick in my face everyday?</i>
                blessed Nope.
                t And in the bed, you still let him take the control from time to time, with or without internF.
                im images/intern/tangel2.jpg
                blessed I mean you still need some "sunshine" to start your day am I wrong?
                player <i>And you had the audacity to call me a bad joker.</i>
                blessed <i>Your puns are still bad.</i>
                t He's also still the same joke critic you've known.
                indamn <i>Huaah- Good morning guys.</i>
                im images/intern/daredevil1.jpg
                t internF on the other hand was the tougher nut to crack, despite him having asked you out himself.
                blessed You always do this, it takes you ages to wake up.
                indamn Love you too, chicken.
                blessed Hmph, unlike you I have a proper sleep schedule, that's why I'm always the cuter one.
                indamn <i>Shut up.</i>
                t At first he was a little nervous of living <i>and sleeping</i> together as a trio, but he eventually became the biggest fan of group sleeping, in fact you often wake up to find him snuggling on your arm in his sleep.
                im images/intern/daredevil2.jpg
                indamn We don't need your narcissism do we?
                player How many times do I have to tell you guys to not make me a part of your fights?
                indamn <i>Booo! You're no fun.</i>
                t And still the same immature piece of boyslut as before, it took a few weeks but you finally managed to get him used to threesomes as well.
                player Ugh, but this fight is pointless, I'm still the cutest one in this room.
                blessed But who'll decide who's the cutest when everyone claims to be the one?
                im images/intern/daredevil3.jpg
                indamn <i>How about we all be the cutest?</i>
                t In school, he's helping you hook up new boys as well, <i>though getting jealous the moment you actually hook up with another boy.</i>
                blessed I'll accept this blasphemy for this once, just so you guys get up and come for breakfast, I've made pancakes!
                t And oh boy, did Theo turn out being a better cook than you thought, he even managed to grasp human meals pretty well.
                player <i>Heh, gonna be there in a moment then.</i>
                indamn <b>You better not eat it all again or I'll seriously strangle you this time.</b>
            `);
            writeFunction("loadEncounter('system', 'credits')", "The End");
            break;
        }
        case "internCD" :{
            writeHTML(`
                player Hey internF, would you like to join nagatoroF's club?
                indamn nagatoroF? Like nagatoroF nagatoroL? The pink dude from my class?
                player Yeah?
                t He laughs.
                indamn He's got a club now? And for what? Finding other cutie twinks like himself and crossdressing shit? Hah!
                blessed Uhm.. internF.
                indamn Don't...<br>Ain't no way he's got a fucking crossdressing club approved by the prude bitch called principalF man. I mean no offense but your boss sucks ass playerF.
                player None taken, but yeah he's got a club for that.
                t internF looks at Theo, then back at you.
                indamn Lucy's chastity cage... FINE okay I'll join if that's what you want.
                blessed And I'll wait right here, nagatoroF doesn't know me just yet.
                player Just yet?
                indamn I'm <b>not</b> taking you to the school, Theo. Anyway playerF gimme a moment to prepare, and we'll be good to go.
                blessed Don't worry about me, I'll just invite a friend over to play cards with.
                t ...
                t Normally you'd walk your way to the school since it's not even that far, but arriving at school late is not an option when you're looking for a student.
                intran Did we really have to take public transport? Shit makes me hella nervy you know..
                player I'm not your chauffeur am I?
                im intrain1.jpg
                player Also, I still don't know why you changed your looks altogether, like what's the point? 
                intran It's not a big deal pal, I only made myself a bit tanner and a bit taller.
                player And why?
                im intrain2.jpg
                intran Because I fucking can, you gotta problem with that?
                t You sigh and let him be as you get ready to leave the bus approaching the university.
                trans internJoin; name Continue;
            `);
            break;
        }
        case "internJoin" :{
            writeHTML(`
                nagatoro So playerF, you wanted me to wait for who again?
                intran You'll have to make a wild guess, buddy.
                t nagatoroF looks at internF confused.
                nagatoro Niel..? Is that really you?
                intran internF, yeah...
                im cdp.jpg
                nagatoro Uhmm... weren't you a little... <i>paler</i> bro?
                t internF giggles.
                intran I guess you could say I got a tan, yeah.
                nagatoro In one day..?
                player Wouldn't question it if I were you.
                nagatoro I don't know what <i>indecent</i> thing you've done to him to make him like that but... Welcome aboard internF!
                t internF nods his head before turning around to look up at your face.
                intran Heheheh, hey playerF should we tell him about the Lucky Lukey?
                player The what?
                nagatoro Eeehh~ Ahem. Whatever cowboy fantasy you two have will have to wait until I leave the room okay? Now let's see what we can find for you internF, come here.
                intran Alright alright, but try not to touch too much, I've got a husband waiting for me at home.
                nagatoro I'm not even gonna ask what you're talking about this time.
            `);
            addFlag("intern", "club");
			writeFunction("loadEncounter('nagatoro', 'clubQuo')", "Continue");
            break;
        }
        case "internClub1" :{
            writeEvent(name);
            passTime();
            addSkill("corruption", 2);
            writeFunction("changeLocation(data.player.location)", "Go Back");
            break;
        }
        case "internClub2" :{
            writeEvent(name);
            passTime();
            addSkill("corruption", 2);
            writeFunction("changeLocation(data.player.location)", "Go Back");
            break;
        }
        case "internHotelGood": {
			writeHTML(`
                define black = sp Black Haired Succubus; im images/demon/dark.jpg;
                black internF has been coming to visit you from time to time since you passed out, looks like he last checked in two days ago and.
                t He points at the door across the hallway.
                black Has been staying in that room since his arrival.
                player Can't you just tell me his room number?
                black Every last room in this hotel is "Room 666", me telling you that would not be helpful.
                t He turns around and walks to the opposite side of the hallway.
                black If you need anything, I'll be here.
                t You step inside internF's suite but no one's inside, so you decide to check the place a little bit and hear voices coming from the bathroom.
                player <i>Bet you don't even lock your bathroom door, you slut.</i>
                t And as you expected the door opens easily the moment you push the handle down, followed by a loud noise coming from inside.
                intern <b>I FUCKING HATE HOUSEKEEPING NOT KNOCKING ON MY FUCKING DO-</b>
                im bath2.jpg
                intern playerF..? Is that really you?
                player Last time I checked I was me, that was a long time ago though do you have a mirror?
                im bath3.jpg
                intern Unfunny as ever, it's really you! Oh thank fuck I was so worried YOU MORON!
                player A little emotional are we?
                intern Fuck you!<br>Yes...
                t He wipes his tears.
                intern So, have you seen me in your dream? Was I cute? Did you see me in a bride dress?
                player I wish I did, it'd be very funny to see. So, what have you been up to while I was off.
                intern What do you think I've been up to? Same life as before with Theodore internL, except he was even more worried than I.
			`);
            if(checkTrust("serious") == 666){
				writeHTML(`
					t He laughs. 
                    intern Oh and seriousF! Man I had NO IDEA he'd be here too, looks like he's befriending your bois one by one though.
                    player How about you? Are you making any new friends?
                    intern ...Actually, I hang with seriousF and the other bois a lot more now, I'm no more a loner, can you believe it? internF being a loved part of a friend group?
                    player People united by my penis huh?
                    t He looks at you dead in the eye, clearly not amused, but then turns to look in front of himself again.
                    intern Guess that could be said, yeah. What a mighty union eh?
				`);
			}
            writeHTML(`
				im bath1.jpg
                intern But, life's getting better overall, I'm feeling content for the first time since... I have no fucking idea but this might be my first time post mortem.
                player Well, I better get out so you can finish your bath then, I still have bois to see.
                intern Great! Hey playerF if you see seriousF on your little tour can you tell him something mean for me?
                player Sure I guess..
                intern Yaaay!
            `);
			writeFunction("changeLocation(data.player.location)", "Continue Wandering");
            break;
		}
        case "idfkwhattonamethisone" :{ //NOODLE MY FRIEND! THIS ONE IS FOR YOU TO CUT FROM THIS JS, EDIT (OPTIONALLY) AND PASTE INTO GOU'S JS! I AM USING CAPS LOCK BECAUSE I FELT LIKE IT
            writeHTML(`
                t ...
                im images/intern/hotel1.jpg
				t As for internF? You could say even he changed himself a little along the way.
                im images/intern/hotel2.jpg
                t Although he's still living with Theo, he is no longer isolating himself from the others in the school AND the hotel.
                im images/intern/hotel3.jpg
                intern Heheheh...
                t Even though he's still grumpy at times he's now one of the biggest entertainers in your harem, because whenever he comes over he brings all sorts of stuff for partying with everyone in the hotel. And when the party is over, well...
                im images/intern/hotel4.jpg
                t That's when the real "party" starts.
			`);
            break;
        }
        default: {
			writeSpeech("player", "", "Error! You must've called the wrong encounter. Error code: Failed to write encounter ("+name+") in "+character.index+".js");
			break;
		}
	}
}

var eventArray = [
	{index: "intern1", name: "Hypnolying"},
    {index: "intern2", name: "First Date"},
    {index: "intern2a", name: "Honesty"},
    {index: "intern2b", name: "Dishonesty"},
    {index: "intern3", name: "In The Restroom"},
    {index: "intern3a", name: "Stalling"},
    {index: "intern3b", name: "Occupation"},
    {index: "intern4a", name: "Blowback"},
    {index: "intern4b", name: "Tabletopping"},
    {index: "intern3z", name: "Restroom Repeat"},
    {index: "intern2z", name: "Second Date"},
    {index: "interndevil1", name: "Devil Dare Devil"},
    {index: "interndevil2", name: "Demon Driller"},
    {index: "internangel1", name: "Corrupt Angel"},
    {index: "internangel2", name: "Purely Impure"},
    {index: "internClub1", name: "Sunkissed Demon Swimmer"},
    {index: "internClub2", name: "Maid in Hell"},
    {index: "internvdayspecial", name: "Valentines Day Special! SFW"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "intern1" :{
            writeText("You dangle your pendant in front of internF's face, knowing full well it won't have an effect, but he doesn't know that.");
            writeText("So you start giving him some commands, the kind you'd hear from a bad TV show instead of an actual hypnosis session.");
            writeText("And he's buying it, hook, line, and sinker.");
            writeText("...");
            writeText("You gave him a few goofy commands to test the waters, now it's time to give him what he's been waiting for.");
            writeSpeech("player", "", "Alright internF, that's enough, now get down on your knees.");
            writeSpeech("intern", "", "Yes, " +data.player.honorific+"...");
            writeText("It's funny to see him do it without hesitation. It seems like all he needs to get through his hangups is to believe he's still in control of himself.");
            writeBig("images/intern/pplick1.jpg", "art by Morino Kuma");
            writeText("But the boy whose breath warms your crotch thinks otherwise, and this is no time to be a buzzkill.");
            writeSpeech("intern", "", "N-now what..?");
            writeText("He's definitely enjoying it, you can see that much.");
            writeSpeech("player", "", "Isn't it obvious?");
            writeBig("images/intern/pplick2.jpg", "art by Morino Kuma");
            writeText("He watches intently as you unzip your pants and your dick flops out mere inches away from his face.");
            writeText("And without even waiting for your order he starts licking it with tip of his tongue.");
            writeBig("images/intern/pplick3.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<i>mmmmpfh...</i>");
            writeText("He's inexperienced, but certainly is enthusiastic.");
            writeSpeech("player", "", "Mmmhmm, great, great, keep it up.");
            writeText("You'd probably laugh at how convinced he is that he's in a trance, but his tongue is giving you good reason to hold yours...");
            writeText("And after a moment you realize he's waiting for a command to pick up  the pace.");
            writeSpeech("player", "", "<b>Nnn-</b> hey how'd you learn to give a blowjob like this?");
            writeText("He's flustered but he still answers anyways.");
            writeSpeech("intern", "", "<i>Mlpfh-</i> I-I...<br>I r-really like watching videos in my free time...");
            writeSpeech("player", "", "Oh? What kind of videos are we talking about?");
            writeText("He begins licking your length faster, pretending he didn't hear the question, so you push his head back a little.");
            writeSpeech("player", "", "internF, I asked you a question.");
            writeText("His face is totally red now.");
            writeSpeech("intern", "", "T-tomgirl videos, "+data.player.honorific+"..");
            writeSpeech("player", "", "See, everything is easier when you're cooperative.");
            writeText("Although by the look of his pants you can at least one thing is <i>harder</i> when he's cooperative.");
            writeSpeech("player", "", "And how often do you play with yourself?");
            writeText("Again he hesitates, this time only for a second.");
            writeBig("images/intern/pplick4.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<i>Mmmmmmmmm</i> Every day "+data.player.honorific+", twice every day, actually.");
            writeText("Good that's he's playing along, as you can't handle much more of this teasing.");
            writeSpeech("player", "", "<i><font size='-1'>No way is this brat beating me...</i><br>So, what is your favorite part in the videos?");
            writeBig("images/intern/pplick5.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "T-the part where they <b><i>cum</i></b> all over the place, "+data.player.honorific+"...");
            writeText("Which is the exact reply you were expecting, so.");
			break;
		}
        case "intern2" :{
            writeText("You both play your roles well, and He's now in his 'trance' again, you give him a few fake commands before getting into actual stuff.");
            writeText("...");
            writeText("Finally, you decide he is ready.")
            writeSpeech("player", "", "Alright internF, time for you to get on your knees again.");
            writeText("That's the only part he breaks the role, He's supposed to look emotionless but his eyes spark the moment you give him that order.");
            writeText("He gets on his knees in a bit, and doesn't look pretty much annoyed by it either.");
            writeSpeech("player", "", "Okay, now you-");
            writeText("Just as you're about to give him his order, you think of something.");
            writeSpeech("player", "", "Hey internF, tell me, you'd answer all my questions with honesty right?");
            writeSpeech("intern", "", "yes " +data.player.honorific+"...");
            writeSpeech("player", "", "Then tell me...");
            writeText("You make him look into your eyes and ask:");
            writeSpeech("player", "", "If internF wasn't in a trance right now, what would He do?");
            writeText("He almost instantly looks away with a red face.");
            writeSpeech("intern", "", "I-I don't understand the question, " +data.player.honorific+"...");
            writeText("You run your hand slowly along his hair and ask again:");
            writeSpeech("player", "", "What's holding internF from having sex with his *Master outside a trance?");
            writeText("He notices he simply can't avoid the question at this point and thus gives up.");
            writeSpeech("intern", "", "B-because internF is afraid he'd be seen as a weirdo, " +data.player.honorific+"...");
            writeText("<i>Finally, the sweet truth...</i>");
            writeSpeech("player", "", "Okay then, from now on you won't feel that way when we're alone, you don't have to worry about it with me.");
            writeText("He nods:");
            writeSpeech("player", "", "And well, now for your reward.");
            writeText("You unzip your pants as He watches with excitement again.");
            writeBig("images/intern/hehepp.jpg", "art by Morino Kuma");
            writeSpeech("player", "", "This time, I don't want you to lick it, instead you will <b>GGH-</b>");
            writeBig("images/intern/stsuck1.jpg", "art by Morino Kuma");
            writeText("You see He understood the assignment early and took the head of your shaft in his mouth already.");
            writeSpeech("player", "", "Not bad, not bad at all-");
            writeText("Well, you're kind of lying, 'not bad' is an understatement for what He's doing right now, but He seems He's ok with that much.");
            writeSpeech("intern", "", "T-thanks...");
            writeBig("images/intern/stsuck2.jpg", "art by Morino Kuma");
            writeText("He keeps hitting the head of your shaft with his tongue from every side while sucking it the best he can.");
            writeSpeech("player", "", "S-so, internF, if you were to leave your state of trance at the moment what would you do?");
            writeSpeech("intern", "", "I-I don't care...");
            writeText("Well, that certainly is something, and you think to yourself:");
            writeText("<b>To end this dumb play or not risk it at all...</b>");
            break;
        }
        case "intern2a" :{
            writeText("The unexpected sound of your snapping fingers makes him shake.");
            writeSpeech("player", "", "Time to wake up internF.");
            writeText("He looks around for a moment trying to understand what happened.");
            writeSpeech("intern", "", "W-whaat?");
            writeSpeech("player", "", "I ended your trance, anything wrong?");
            writeText("His eyes keep moving between you and your dick until he finally gives up.");
            writeSpeech("intern", "", "You know what, fuck it-");
            writeBig("images/intern/stsuck3.jpg", "art by Morino Kuma");
            writeText("He returns to sucking your cock with eyes that bear no regrets, <b>even harder</b> than before.");
            writeSpeech("player", "", "Feeling relieved huh?");
            writeSpeech("intern", "", "Eh..?");
            writeText("You sigh before explaining him how he was never hypnotised.");
            writeSpeech("intern", "", "Man... I knew something felt off...");
            writeSpeech("player", "", "Well, now you no longer have to act so why do- <b>GGH-</b>");
            writeText("He presses your shaft between his ungodly soft lips while moving his head around it.");
            writeText("He reaches back on your crotch to control his pace better, his eyes are focused but you can see the lust in them.");
            writeSpeech("intern", "", "I said I didn't care anymore haven't I?");
            writeSpeech("player", "", "I-I know but aren't you going a little too fast..?");
            writeText("He looks up at you with a naughty smile on his face.");
            writeSpeech("intern", "", "And why is that? It's not like I'm 'under your control' am I?");
            writeText("He is doing it like trying to prove he can be the one to control as well.");
            writeSpeech("player", "", "You know I'm still the top right? With or without hypnosis.");
            writeSpeech("intern", "", "I don't remember agreeing on that second part, be glad you still get your dick sucked.");
            writeText("He's acting like hypnosis was all you had under your sleeve in terms of controlling people, and it'll be fun to prove him otherwise.");
            writeSpeech("player", "", "You'd better, as you can't find a replacement for me while I can find one for you.");
            writeSpeech("intern", "", "<i>Fuck-</i>");
            writeBig("images/intern/stlick.jpg", "art by Morino Kuma");
            writeText("He sticks his whole tongue out to lick the entirety of your member's length, moving his tongue both up and down and to sides.");
            writeSpeech("intern", "", "Okay fair, but you'll let me control for this once.");
            writeText("Fair enough, he doesn't look like you've got another choice anyway.");
            writeSpeech("player", "", "Fine but make it quick.");
            writeSpeech("intern", "", "Heh, <b><i>with pleasure, *Master...</i></b>");
            writeText("He starts sucking it like he took that a little too seriously, since you find yourself getting literally milked by his mouth you only last mere minutes.");
            writeBig("images/intern/stsuck4.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "...");
            writeBig("images/intern/stsuck5.jpg", "art by Morino Kuma");
            writeText("For a moment neither of you say anything until he finally decides to swallow.");
            writeSpeech("intern", "", "Aww man, I hoped you'd last longer...");
            writeSpeech("player", "", "I could've if you didn't go <i>that</i> hard on me.");
            writeText("He laughs.");
            writeSpeech("intern", "", "I only did what you told me, and I mean at least you kept your promise.");
            writeSpeech("player", "", "Huh?");
            writeText("He cleans your dick with his tongue.");
            writeSpeech("intern", "", "You promised you'd take me out to eat.");
            writeText("He winks at you before putting it back in your pants.");
            writeSpeech("intern", "", "...And I'm satisfied with what I ate.");
            writeSpeech("player", "", "Talk about optimism.");
            writeText("You both laugh a little before he checks his phone and picks his bag.");
            writeSpeech("intern", "", "Aaaalright, I believe it's the time we go home.");
            writeText("You check your watch to see it's late evening as well.");
            writeSpeech("player", "", "I guess so, well, see you later then.");
            writeText("He leans in and kisses you on cheek with a smile.");
            writeBig("images/intern/streetcute.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "See you later!");
            writeText("You wave at each other until he gets out of your sight.");
            writeSpeech("player", "", "Heh, for the first time, he isn't the only one to blush.");
            break;
        }
        case "intern2b" :{
            writeText("Looking at how much he is enjoying himself, you decide to let him believe a little longer.");
            writeSpeech("player", "", "Well, I don't either.");
            writeSpeech("intern", "", "Eh?");
            writeSpeech("player", "", "Nothing, just keep it up.");
            writeText("He looks confused but follows the order nonetheless.");
            writeSpeech("player", "", "Hey internF, another question.");
            writeText("He raises an eyebrow.");
            writeSpeech("intern", "", "Hm?");
            writeSpeech("player", "", "Tell me, what were you looking at when I entered the computer room?");
            writeText("He looks away with a blush but still answers the question.");
            writeSpeech("intern", "", "I was looking at some tomgirl stuff again...");
            writeSpeech("player", "", "On work? Really?");
            writeText("He looks <b>pissed</b> about what you said.");
            writeSpeech("intern", "", "Well, at least I don't <b>fuck</b> students on work.");
            writeSpeech("player", "", "Valid point.");
            writeText("Except for one tiny detail.");
            writeSpeech("player", "", "Though, I don't think you wouldn't say such a thing as a person in trance, am I wrong internF?");
            writeText("He gasps with the realization.");
            writeSpeech("intern", "", "<i>My trance is not real, is it..?</i>");
            writeText("You shrug.");
            writeText("He looks around for a moment.");
            writeSpeech("intern", "", "You know what, fuck it.");
            writeBig("images/intern/stsuck3.jpg", "art by Morino Kuma");
            writeText("He returns to sucking your cock with eyes that bear no regrets, <b>even harder</b> than before.");
            writeSpeech("player", "", "Feeling relieved huh?");
            writeSpeech("intern", "", "Fuck yeah man, it was tiring to act.");
            writeSpeech("player", "", "But then why did you keep it up?");
            writeText("He chuckles.");
            writeSpeech("intern", "", "Well, I <i>believed</i> I was in trance till the last second...");
            writeSpeech("intern", "", "Man... I knew something felt off...");
            writeSpeech("player", "", "Well, now you no longer have to act so why do- <b>GHH-</b>");
            writeText("He presses your shaft between his ungodly soft lips while moving his head around it.");
            writeText("He reaches back on your crotch to control his pace better, his eyes are focused and you can see the lust in them.");
            writeSpeech("intern", "", "I said I didn't care anymore haven't I?");
            writeSpeech("player", "", "I-I know but aren't you going a little too fast..?");
            writeText("He looks up at you with a naughty smile on his face.");
            writeSpeech("intern", "", "And why is that? It's not like I'm 'under your control' am I?");
            writeText("He is doing it like trying to prove he can be the one to control as well.");
            writeSpeech("player", "", "You know I'm still the top right? With or without hypnosis.");
            writeSpeech("intern", "", "I don't remember agreeing on that second part, be glad you still get your dick sucked.");
            writeText("He's acting like hypnosis was all you had under your sleeve in terms of controlling people, and it'll be fun to prove him otherwise.");
            writeSpeech("player", "", "You'd better, it's not like you're the only student I'm shagging right?");
            writeSpeech("intern", "", "<i>Fuck-</i>");
            writeBig("images/intern/stlick.jpg", "art by Morino Kuma");
            writeText("He sticks his whole tongue out to lick the entirety of your member's length, moving his tongue both up and down and to sides.");
            writeSpeech("intern", "", "Okay fair, but you'll let me control for this once.");
            writeText("Fair enough, he doesn't look like you've got another choice anyway.");
            writeSpeech("player", "", "Fine but make it quick.");
            writeSpeech("intern", "", "Heh, <b><i>with pleasure, *Master...</i></b>");
            writeText("He starts sucking it like he took that a little too seriously, since you find yourself getting literally milked by his mouth you only last mere minutes.");
            writeBig("images/intern/stsuck4.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "...");
            writeBig("images/intern/stsuck5.jpg", "art by Morino Kuma");
            writeText("For a moment neither of you say anything until he finally decides to swallow.");
            writeSpeech("intern", "", "Aww man, I hoped you'd last longer...");
            writeSpeech("player", "", "I could've if you didn't go <i>that</i> hard on me.");
            writeText("He laughs.");
            writeSpeech("intern", "", "I only did what you told me, and I mean at least you kept your promise.");
            writeSpeech("player", "", "Huh?");
            writeText("He cleans your dick with his tongue.");
            writeSpeech("intern", "", "You promised you'd take me out to eat.");
            writeText("He winks at you before putting it back in your pants.");
            writeSpeech("intern", "", "...And I'm satisfied with what I ate.");
            writeSpeech("player", "", "Talk about optimism.");
            writeText("You both laugh a little before he checks his phone and picks his bag.");
            writeSpeech("intern", "", "Aaaalright, I believe it's the time we go home.");
            writeText("You check your watch to see it's late evening as well.");
            writeSpeech("player", "", "I guess so, well, see you later then.");
            writeText("He leans in and kisses you on cheek with a smile.");
            writeBig("images/intern/streetcute.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "See you later!");
            writeText("You wave at each other until he gets out of your sight.");
            writeSpeech("player", "", "Heh, for the first time, he isn't the only one to blush.");
            break;
        }
        case "intern3" :{
            writeText("The restroom is pleasantly clean, you even feel kind of proud for the students.");
            writeSpeech("player", "", "At least they seem to have a good sense of hygiene.");
            writeText("As clean as it is, it's also pretty much empty.");
            writeSpeech("player", "", "I guess he's not here either huh...");
            writeText("Just the moment you reach for the handle of the door leading to hallway, you hear a slight noise coming from one of the stalls.");
            writeSpeech("player", "", "...Could he?");
            writeText("You follow the noise to make sure which stall it is coming from, and just the moment you feel you've found the one, the door opens to a familiar face.");
            writeBig("images/intern/rrflush.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<b><font size= '+3'>EEEEK!!!</font></b>");
            writeText("Thankfully, your eardrums aren't ruptured, yet.");
            writeText("He tries catching his breath for a moment.");
            writeSpeech("intern", "", "J-just-");
            writeSpeech("player", "", "Just what?");
            writeText("He takes a deep breath.");
            writeSpeech("intern", "", "<b><font size= '+1'>JUST WHAT THE FUCK IS WRONG WITH YOU???</font></b>");
            writeText("After calming down a bit, he continues.");
            writeBig("images/intern/rrhot.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "playerF, man, you're really gonna give me a heart attack one of these days.");
            writeSpeech("player", "", "And you'll give me anxiety, do you have any idea how long it's been since you've left?");
            writeText("He looks confused, like he's unaware of the time.");
            writeSpeech("intern", "", "What do you mean all this time? It's only been-");
            writeText("He checks his phone for the time.");
            writeSpeech("intern", "", "A-A WHOLE HOUR?");
            writeSpeech("player", "", "I don't think you would need that much time in a toilet stall, right?");
            writeBig("images/intern/rrfluster.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "I-I'm sorry "+data.player.honorific+", I didn't notice the time...");
            writeSpeech("player", "", "What were you doing here then?");
            writeBig("images/intern/rrblush.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<b>Sigh</b> if you must know.");
            writeText("He holds his fist up to swing it up and down slowly.");
            writeSpeech("player", "", "Couldn't you at least wait until going home?");
            writeSpeech("intern", "", "<i>It's not like <b>you</b> wait until going home anyway, at least I do it all by myself, bothering no one.</i>");
            writeText("He might try to look confident, but he's still embarrassed about being caught.");
            if(checkFlag("intern", "bagcheck") == true){
                writeSpeech("player", "", "Were the stuff in your bag for self-pleasure only as well?");
                writeText("He hits your shoulder with an angry face.");
                writeSpeech("intern", "", "Did you really look into my bag man?! Can't I trust anyone around here?");
                writeSpeech("player", "", "Maybe you shouldn't spend that long in the restroom with your bag left to someone else.");
                writeText("He cusses under his breath.");
            }
            writeSpeech("intern", "", "Wait, if you're here now, where is my bag?");
            writeSpeech("player", "", "Don't worry about it, it's safe in my office.");
            writeText("He chuckles.");
            writeSpeech("intern", "", "Your office? Safe? Well I guess it'd be safe for the things you wouldn't stick your dick into.");
            writeSpeech("player", "", "I guess you're right, but.");
            writeText("You pull him into the stall with yourself, shutting the door behind you.");
            writeBig("images/intern/rrclose1.jpg", "art by Morino Kuma");
            writeSpeech("player", "", "...Don't you think your words are a little tough for something I <i>would</i> stick my dick into?");
            writeText("He looks concerned, but isn't trying to escape either.");
            writeBig("images/intern/rrclose2.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "G-give me a break man- you know I have already went over the limit today.");
            writeSpeech("player", "", "But I haven't.");
            writeText("His eyes are locked on yours, you see the scared look in his eyes get replaced by a lustful one <i>you kinda wonder if you should be the one scared</i>.");
            writeSpeech("intern", "", "<b><i>Oh then why don't you make me regret wasting it alone? Why don't you make me regret even having enrolled here?</i></b>");
            writeText("His hand is on your crotch already, and you know you <b>won't</b> let him get away with a blowjob this time.");
            break;
        }
        case "intern3a" :{
            writeBig("images/intern/rrkiss1.jpg", "art by Morino Kuma");
            writeText("He wasn't expecting a kiss, but is not denying it either.");
            writeSpeech("intern", "", "W-what was that for..?");
            writeSpeech("player", "", "Is it wrong to enjoy a little kiss huh?");
            writeText("He gets closer to give you one back.");
            writeBig("images/intern/rrkiss2.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "When did I say it was wrong? I only thought you'd get at it right away.");
            writeBig("images/intern/rrclose4.jpg", "art by Morino Kuma");
            writeSpeech("player", "", "Hmmm, yeah no, in your dreams asshole.");
            writeText("You feel his bulge touching yours, and looks like he felt it too since he looks down and back up with a wider smile.");
            writeBig("images/intern/rubrub.jpg", "art by Morino Kuma");
            writeSpeech("player", "", "Aren't you trying a little too hard to get laid, internF?");
            writeSpeech("intern", "", "<i>Yeah and so what?</i>");
            writeText("It wouldn't be a problem if you wanted to get at it right away too, but looks like he isn't really into foreplaying.");
            writeBig("images/intern/rrclose3.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Why're you still holding back? Aren't we here for some good time?");
            writeSpeech("player", "", "I'm having a pretty good time myself, so can you stop complaining?");
            writeSpeech("intern", "", "And what if I don't?");
            writeBig("images/intern/rrclose6.jpg", "art by Morino Kuma");
            writeText("You pull him closer, reminding him you're the one in control.");
            writeSpeech("intern", "", "<i>Nnn- a-alright you win...</i>");
            writeText("He might've let you have it your way, but you're too teased to celebrate your victory.");
            break;
        }
        case "intern3b" :{
            writeText("You turn your hungry slut around to strip his clothes as he pants.");
            writeSpeech("intern", "", "Oh god <b><i>fucking finally</i></b>.");
            writeText("You shush him right away.");
            writeSpeech("player", "", "Look, I don't know about you, but I am no exhibitionist, you get what I'm saying?");
            writeSpeech("intern", "", "<i>Ghh, yeah, sorry.</i>");
            writeSpeech("player", "", "So if you don't want an audience watching your little show, zip it.");
            writeText("He nods with a displeased huff.");
            writeSpeech("player", "", "Good, then let's get started.");
            writeBig("images/intern/rrfuck1.jpg", "art by Morino Kuma");
            writeText("You ram inside him without mercy, making him gasp.");
            writeBig("images/intern/rrfuck4.jpg", "art by Morino Kuma");
            writeText("He's biting his lips trying to be quiet, but it doesn't really work. <i>Not that you're helping him in any way either</i>.");
            writeSpeech("intern", "", "<b>OW FUUuu<font size= '-1'>uuuu</font><font size = '-2'>uuck...</font></b>.");
            writeText("His eyes widen and his shaft stiffens, looks like the brat left his body when dick entered.");
            writeSpeech("player", "", "So, is it 'worth' it like you asked?");
            writeText("He nods while panting loudly.");
            writeBig("images/intern/rrfuck3.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<i>it iiiiiiisssss...</i>");
            writeText("His legs get shaky as you pick up speed.");
            writeSpeech("intern", "", "<i>just don't stop, pleeeaseee...</i>");
            writeText("It's not like you can stop yourself anyway, you might be in control of his body, but your body's acting in its own accord.");
            writeBig("images/intern/rrfuck2.jpg", "art by Morino Kuma");
            writeText("He's smiling like he knows that too, but is too pent up to use that for teasing you.");
            writeSpeech("player", "", "Well, if you insist...");
            writeText("His body gets shakier and shakier with your each thrust and his moans get louder and louder until the moment both of you reach your climax.");
            writeBig("images/intern/rrfuck5.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<i>Oh my <b>FUCKING GAAHD-</b></i>");
            writeText("You might have just came but he looks like he could go for one more round, or two, <i>or five</i>, no matter how many, this stall looks like it'll stay occupied for a little longer.");
            writeText("...");
            writeText("It has been a while since you've stopped counting, but when your sight starts feeling fuzzy you make your decision.");
            writeSpeech("intern", "", "<font size= '-1'><i>C-cumming agaiin..!</font></i>");
            writeBig("images/intern/rrfuck6.jpg", "art by Morino Kuma");
            writeText("That was the last one for the day...");
            writeText("You try reaching for your pants but your head gets all fuzzyy, that was <b>TIRING</b>.");
            writeSpeech("player", "", "Ggh man my head... are you satisfied now?");
            writeSpeech("intern", "", "M-me? satisfied? Are <b>YOU</b> satisfied you fucking terminator?!");
            writeSpeech("player", "", "I am, finally.");
            writeText("He tries to stand on his legs but barely even manages to stop himself from falling.");
            writeSpeech("intern", "", "Man I'm the one to say finally here, my legs have been finally-zed by a certain horny counselor.");
            writeSpeech("player", "", "You could ask me to walk you home in a kinder way you know.");
            writeText("He sighs.");
            writeSpeech("intern", "", "<i>You better carry me there.</i>");
            writeSpeech("player", "", "I can help you walk there but I don't think I can carry anything let alone a slut filled to the brim.");
            writeSpeech("intern", "", "Faaaaaair, but let's clean our clothes first eh?");
            writeText("After wiping the stains with the toilet paper you borrow from the stall you've used, you finally get redressed to get out.");
            writeSpeech("intern", "", "Man, I forgot this place was this big...");
            writeText("You check your watch to see it's already evening.");
            writeSpeech("player", "", "Alright let's get going.");
            break;
        }
        case "intern4a" :{
            writeSpeech("intern", "", "Wait what?");
            writeText("You shake your head, confused as of why you felt like saying that.");
            writeSpeech("intern", "", "So you mean <i>you</i> will blow <i>me</i>, ha?");
            writeText("He looks quite excited about it, and it wouldn't hurt to be the one on the other end for once anyway...");
            if(checkFlag("housekeep", "BlowHim") == true){
                writeText("...On the other hand, this is not your first time either.");
            }
            writeSpeech("player", "", "<i>Well, might as well roll with it I guess...</i>");
            writeText("Within a moment he's on his desk with pants down.");
            writeBig("images/intern/crpphehe.jpg", "art by Morino Kuma");
            writeText("You've got a strange feeling about this, but it's not like you suck dick everyday so might as well just ignore it.");
            writeSpeech("intern", "", "Man I can't believe this is happening, like wow.");
            writeText("It seems like he won't stop talking about this anytime soon unless you do something, so you kneel down.");
            writeSpeech("intern", "", "T-Theere we go, man I can't wa<b>IIIIIT-</b>");
            writeBig("images/intern/rblow.jpg", "art by Morino Kuma");
            writeText("His eyes widen and his arms start shaking the moment you put his dick in your mouth.");
            writeSpeech("intern", "", "<i>M-Man can you shlow dow<b>NHHH-</b></i>");
            writeBig("images/intern/rblow1.jpg", "art by Morino Kuma");
            writeText("He is panting heavily despite having his dick barely being sucked, his eyes are fazed off from the pleasure.");
            writeSpeech("intern", "", "Y-you fucking- <b>WHY</b>... no one-");
            writeSpeech("player", "", "Can't even form a sentence huh?");
            writeSpeech("intern", "", "<font size '+1'><b>WHY THE FUCK DID NO ONE EVER TELL ME IT FELT LIKE THIS??</b></font>");
            writeBig("images/intern/rblow2.jpg", "art by Morino Kuma");
            writeText("You're pretty sure you aren't that good at giving head, but it looks like he is getting the head of his life.");
            writeText("Normally you'd finish him quickly, but you aren't that annoyed about what you're doing yet, plus <i>this little brat doesn't deserve a reward of that sort</i>.");
            writeSpeech("intern", "", "<i>Nnn- I am-</i>");
            writeText("You pull his dick out of your mouth with a sassy smile making him bite his lips to not moan.");
            writeSpeech("player", "", "No you aren't.");
            writeText("His eyes widen in terror when he realizes what you're thinking.");
            writeSpeech("intern", "", "Y-you fucking <i>monster-</i>");
            writeSpeech("player", "", "Heh, seems like you're at this monster's mercy for a little while.");
            writeText("He looks completely terrified, the perfect time to return to your job...");
            writeText("...");
            writeText("You don't remember for how much you've been edging him, neither do you have an idea how many times you stopped right before he could cum. But you feel like it's time to finish it when you hear him with a voice barely louder than a whisper.");
            writeSpeech("intern", "", "<font size= '-2'>J-jusht leth me cuhm thish time <br> puhleaseeeeee...</font>");
            writeText("His arms look like they might give up on any moment so you decide to end his pain, it's not like he can last much longer than that no matter how good you edge him anyway.");
            writeSpeech("player", "", "Look how the mighty brat has fallen, I may think of it if you beg a little more.");
            writeText("He takes a deep breath.");
            writeSpeech("intern", "", "<i>PHLEASE, JUST PLEASE LET MEEEE-</i>");
            writeSpeech("player", "", "Fiiine, get ready.");
            writeText("You put his dicklet in your mouth for one more time, just for him to empty his load in mere seconds with a half-loud moan.");
            writeBig("images/intern/rblow3.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<font size= '-1'>Thank youuuuu...</font>");
            writeText("...It is an interesting feeling, maybe not pleasing, but it was surely satisfying.");
            writeText("He collapses back on his desk the moment he finishes cumming.");
            writeSpeech("intern", "", "P-please...");
            writeText("He raises his shaky arm with two fingers up.");
            writeSpeech("intern", "", "Just give me a break, two minutes, I am <b><i>huff</i></b> out of breath.");
            writeText("You'd also use a little rest yourself so you just wait until he's ready again.");
            writeText("After exactly two minutes of wait he raises his arm again, only with a thumbs up this time.");
            break;
        }
        case "intern4b" :{
            writeText("With him laying on the desk and you being between his legs, everything is ready when you hear him laugh to himself.");
            writeBig("images/intern/tabletop1.jpg", "art by Morino Kuma");
            writeSpeech("player", "", "Something funny?");
            writeSpeech("intern", "", "Oh, heh, nothing really.");
            writeText("He lays his head on the desk with eyes closed and a smile.");
            writeSpeech("intern", "", "I somewhat remember of daydreaming of being in this exact situation on my first day in this class.");
            writeSpeech("player", "", "You daydream of getting fucked on a desk?");
            writeText("He chuckles.");
            writeSpeech("intern", "", "Why do you ask it like it's wrong? Like why don't <i>you</i> dream of it too?");
            writeSpeech("player", "", "I feel like you're missing the small detail that I'm not a bottom.");
            writeText("He shrugs with a naughty look on his face.");
            writeSpeech("intern", "", "I don't see you being a top either, will you start already or do you have a pantless chatting fetish?");
            writeText("He might be acting smug but his bulging dick shows he is as excited as you are.");
            writeSpeech("intern", "", "H-hey, playerF...");
            writeSpeech("player", "", "What is it this time?");
            writeSpeech("intern", "", "N-nothing, just wanted to ask if you could be a little more gentle this time, I mean you know...");
            writeText("He looks a little scared he might end up being as beaten as last time.");
            writeSpeech("player", "", "Fine fine, but you can't ask me to carry you around this time.");
            writeSpeech("intern", "", "Wait really? I mean sure thing..");
            writeText("And finally, you put your dick inside his boihole, making him bite his lips trying to be quiet.");
            writeBig("images/intern/tabletop2.jpg", "art by Morino Kuma");
            writeText("He breathes heavily to control his voice.");
            writeSpeech("intern", "", "Oh boy- <i>you'll breeeeak me one day</i>...");
            writeText("You start moving inside with a steady speed making him squirm under you.");
            writeBig("images/intern/tabletop3.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<i>M-man, I <b>needed</b> thisss.</i>");
            writeText("He is looking comfortable with the current pace, so you think of <i>testing</i> how much more he can handle.");
            writeBig("images/intern/tabletop4.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "I-Is that what you call gentle eh..?");
            writeSpeech("player", "", "If I get too fast, you can just tell me.");
            writeText("He suddenly locks into your eyes with a lustful smile.");
            writeSpeech("intern", "", "<i>Changed my mind, fuck being gentle... <b>Just turn me into a cum covered mess like the last time.</b></i>");
            writeText("It's like he wasn't the one who begged you for you to be gentle, but if that's what he wants might as well just give it to him.");
            writeBig("images/intern/tabletop6.jpg", "art by Morino Kuma");
            writeText("He starts panting the moment you gear up.");
            writeSpeech("intern", "", "H-heh, <i>is that all you've got..?</i>");
            writeText("...You can't help but wonder if he hates himself.");
            writeSpeech("player", "", "What is <i>enough</i> for you then?");
            writeSpeech("intern", "", "If I can still talk, <i>You're not working hard enough...</i>");
            writeText("With the smug face he is making, and the way he's looking in your face. <br>...You'll make sure he regrets that.");
            writeSpeech("player", "", "Oh boy, I am <i>so</i> abusing this permission then.");
            writeBig("images/intern/tabletop7.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<b>E-Eh???</b>");
            writeText("He looks a little scared, but you can see he's more excited than scared.");
            writeBig("images/intern/tabletop8.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<b>OMPF PHUCK-</b>");
            writeText("...");
            writeText("As both of you're approaching your climax, he doesn't seem to care about being loud anymore.");
            writeSpeech("player", "", "<i>I'd go for another round if it weren't this late...</i>");
            writeText("He's completely drowned in pleasure so he just nods instead of saying anything.");
            writeSpeech("player", "", "C-Cumming..!");
            writeSpeech("intern", "", "<i>Me thoooooo...</i>");
            writeBig("images/intern/tabletop9.jpg", "art by Morino Kuma");
            writeText("The moment you fill his hole again, exhaustion hits you like a train.");
            writeBig("images/intern/tabletop10.jpg", "art by Morino Kuma");
            writeText("But looks like it hit internF harder, as he couldn't even stop his legs from swinging down at all.");
            writeSpeech("intern", "", "<font size= '-1'>Hey, playerF...");
            writeSpeech("player", "", "Yes?");
            writeText("He gives you a tired smile with his eyes barely open.");
            writeSpeech("intern", "", "Thanks for sticking with me man, really.");
            writeText("He slowly tries to get up only for his legs to give up on him and making him almost fall flat on the floor.");
            writeSpeech("intern", "", "Ow man... my legs-");
            writeSpeech("player", "", "You okay?");
            writeText("Fixing his posture, he nods while trying to control his shaky legs.");
            writeSpeech("intern", "", "I just need to sit for a few mins, mind joining?");
            writeSpeech("player", "", "Sure, but we better be quick unless you want them to lock us in.");
            break;
        }
        case "intern3z" :{
            writeSpeech("player", "", "Hey internF, mind coming to the restroom for a minute?");
            writeSpeech("intern", "", "Only if it is for a good reason.");
            writeText("You do the same gesture as he did last time in restroom.");
            writeSpeech("intern", "", "Bah, why there though?");
            writeSpeech("player", "", "Would you rather fucking in principal's office?");
            writeBig("images/intern/crduh.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Man, why must you be like this?");
            writeSpeech("player", "", "Will you or not?");
            writeText("He points the door with a tired sigh.");
            writeSpeech("intern", "", "Lead the way, playerSir.");
            writeText("...");
            writeText("Same cabin, same position, same place, yet this time still feels different.");
            writeSpeech("intern", "", "Man doing this here is embarrassing-");
            writeSpeech("player", "", "You know you could just say no.");
            writeText("He turns his head a bit to give you a stink eye.");
            writeSpeech("intern", "", "It's not like you let me say no to you at all.");
            writeText("He turns back to door with a slow shrug.");
            writeText("Given you're in your workplace's restrooms, you would better stop messing with him to start making him a mess.");
            writeBig("images/intern/rrfuck1.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<i>Awww damn yeah..!</i>");
            writeText("Eyes shut, mouth open and breathing heavily, he is technically begging you to speed up at this point.");
            writeBig("images/intern/rrfuck3.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<b>GHH- THAT'S WHAT I AM TALKING ABOUT!</b>");
            writeText("...");
            writeBig("images/intern/rrfuck4.jpg", "art by Morino Kuma");
            writeText("It's been only a few minutes, but you feel ready to paint his insides already.");
            writeSpeech("intern", "", "<b><i>F-Fucking hell, here comes-</i></b>");
            writeText("The moment he feels the first rope of your cum inside himself, he spurts his entire load at the door, <i>being loud as possible</i>.");
            writeBig("images/intern/rrfuck5.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<i>Haaaah-</i>");
            writeBig("images/intern/rrfuck6.jpg", "art by Morino Kuma");
            writeText("You shoot a few more ropes of cum inside him before pulling out.");
            writeSpeech("intern", "", "O-Ohkay, you satisfied now?");
            writeSpeech("player", "", "Is it possible being not satisfied with something like you around?");
            writeText("He chuckles with a light blush on his face");
            writeSpeech("intern", "", "You know a thank you would be enough.");
            writeSpeech("player", "", "Do you have a problem with what I said?");
            writeBig("images/intern/rrblush.jpg", "art by Morino Kuma");
            writeText("He shrugs pretty quickly with eyes open wide.");
            writeSpeech("intern", "", "No no not at all, but now if you'd excuse me I better go before anyone notices.");
            writeText("You clean the mess you've created before leaving the restroom.");
            break;
        }
        case "intern2z" :{
            writeSpeech("player", "", "Fine, I guess I owe you one, but not today.");
            writeText("He drinks the rest of his drink in one sip before getting up.");
            writeBig("images/intern/streetowo.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Alright, but don't forget it.");
            writeSpeech("player", "", "Don't worry, I won't.");
            writeText("He nods before holding your arm to pull you behind a wall.");
            writeText("...");
            writeText("This time, you turn him around pants down, getting behind him.");
            writeSpeech("intern", "", "Uhmmm, hey playerF, may I ask you a question?");
            writeSpeech("player", "" , "Fire away, what's up?");
            writeText("He laughs with a clear annoyance in his voice.");
            writeSpeech("intern", "", "I mean, you know we both have beds right? Why do we fuck like stray dogs in a back alley when we could have the comfort of our homes?");
            writeSpeech("player", "", "I don't see why not.");
            writeText("He shrugs with a deep sigh.");
            writeSpeech("intern", "", "Forget I asked.");
            writeText("He might be annoyed, but that doesn't make him any less horny than you are, so you push your hips to end his wait.");
            writeSpeech("intern", "", "<b>NGH- <br>...finally-</b>");
            writeBig("images/intern/stfuck1.jpg", "art by Morino Kuma");
            writeText("As much as he might complain, looking at his drooling mouth and twitching dick, it's not so hard to guess he's enjoying this as much as he can.");
            writeSpeech("player", "", "Oh what's that? I thought you didn't like the idea of fucking here?");
            writeText("As he turns his face around you can see he didn't like what you just said.");
            writeSpeech("intern", "", "<font color= '#BD7CDE'>It would be a lot better if you could just <i>shut the fuck up</i>.</font>");
            writeText("He continues after calming himself down a bit, still huffing.");
            writeSpeech("intern", "", "Like man, I am the one getting <i>fucking railed</i> here and somehow you make more noise than I do.");
            writeText("Well, he's got a point, you can make fun of him later so, might as well pick up the pace...");
            writeBig("images/intern/stfuck3.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<b><i>A LOT BETTER THIS WAY!</i></b>");
            writeText("After that, neither of you say another word until the end.");
            writeSpeech("player", "", "<i>Nnnh-</i> I am getting close..");
            writeSpeech("intern", "", "Me thooo-");
            writeBig("images/intern/stfuck4.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "<b><font color= '#BD7CDE'>YETHHHH-</font></b>");
            writeBig("images/intern/stfuck5.jpg", "art by Morino Kuma");
            writeText("He wipes his sweat as he is trying to control his shaky legs.");
            writeSpeech("intern", "", "Y-you know, picking a better place for the next time we fuck wouldn't kill you...");
            writeText("He leans on the wall to catch his breath after pulling his pants.");
            writeSpeech("player", "", "Maybe, but I can't promise.");
            writeText("He shrugs with a disappointed sigh.");
            writeBig("images/intern/streetaw.jpg", "art by Morino Kuma");
            writeSpeech("intern", "", "Knew you'd say that, then at least take me home.");
            writeText("You give him your hand but instead he wraps his arms around your arm.");
            writeSpeech("player", "", "Well then, let's go before the night falls.");
            break;
        }
        case "interndevil1" :{
            writeHTML(`
                define blessed = sp Theo; im images/intern/blessed.jpg; altColor #B1355D;
                define indamn = sp intern; im images/intern/indamn.jpg; altColor #C078A1;    
                player Well, let's say I am actually horny, <i>what're you gonna do about it?</i>
                indamn Wait, you talkin' to me?
                player Uh huh, who else?
                t He scratches his head
                indamn I thought you'd go for Theo this time, I mean you've used me a lot already.
                t Theo giggles.
                blessed He's definitely excited about, and terrible at hiding it.
                player <i>No shit Sherlock.</i>
                t His giggle is replaced with a grunt.
                blessed Ugh, I just wanted to help you.
                player We've been together with him for quite a while, I could see that myself.
                indamn Well, if you can see that I'm excited, why aren't you doing anything about it?
                im images/intern/dtea2.jpg
                t Given by the way he is looking at you, it seems he won't let you leave the house unless you do something about it.
                player Well then,<i> surprise me.</i>
                indamn Huh?
                player Surprise me, like a new dress or a new style of your choosing, whatever.
                t His eyes gleam in a moment of excitement.
                indamn Ohhhh I know the right thing, give me a moment.
                t He runs off to his room and slams the door shut before yelling from inside.
                indamn <i>Just wait till I tell you to come in!</i>
                t With that, you're alone in the room with Theo for a while.
                `); 
            if(checkTrust('serious') >10){
                writeHTML(`
                    blessed <i>So, what's the plan?</i>
                    player Huh?
                    im images/intern/twrite3.jpg
                    blessed You know, I'm not actually that dumb, <i>what is your plan?</i>
                    player What plan are you talking about..?
                    blessed Coming to this town out of nowhere, using your hypnosis skills in your job as a corrupt counselor, slowly turning all the girls and boys into your sex "consenting sex slaves", and not limiting yourself with literally anything, that plan.
                    t <b>HOW..?</b>
                    player What are you even asking me if you know this much..?
                    blessed Our part in the plan, like how can we trust a "boy collector" to devote himself to us?
                    t You raise an eyebrow.
                    player <i>Is that your only problem with this whole "plan"?</i>
                    blessed Yep.
                    player <i>Sigh...</i> look Theo, believe it or not but I too have a heart, and I'm still only considering it, I'm not sure of "devoting" myself yet.
                    blessed Fair enough, I was just curious anyway.
                    t He seems satisfied with that answer, which means it's your turn to ask questions.
                    player <i>But how did you know about that..?</i>
                    blessed Heh, let's just say I have some "friends" I get my information from.
                    t Thinking of it, you may know that "friend" as well, a friend that'll pay...
                `);
            } 
            writeHTML(`
                t After a little while of silence, you finally hear internF calling for you.
                indamn <i>Hey playerF! I'm ready!</i>
                t You look over at Theo again to see him smile at you.
                blessed Have fun in there then!
                t Just as you reach for the door handle, you hear Theo talking to you again.
                blessed And don't worry, if I hear your soul getting torn away I'll run for your help.
                player Can he do that?
                blessed Absolutely not, I'm only assuring.
                player Thanks I guess..?
                t You walk inside internF's room, it's dark inside to hide his "little surprise" so you turn on the lights and...
                im images/intern/dcat1.jpg
                indamn <i>Ta daa- How do I look?</i>
                player I mean, <i>Good as hell.</i>
                indamn Heheh, I knew you'd like this.
                player Well you don't really need these to look good at all.
                indamn Aww, how flattering, <font color= '#BD7CDE'>would you like me to take them off then?</font>
                t You shrug with a light smile on your face.
                player Now now wouldn't that be such a waste of your time?
                im images/intern/dcat2.jpg
                indamn <i>Just say you want to fuck the cute catboy alreadyyy.</i>
                player Hmph, well, "<i>I want to fuck the cute catboy alreadyyy-</i>"
                t His eyes gleam naughtily.
                indamn You're a lot better when you're like this you know?
                player And you're a lot better on your knees.
                indamn Heh, give me a moment then.
                t You pull your pants down, having your dick spring out at his face.
                im images/intern/dpp1.jpg
                indamn Wooh whoa! Be careful man, you almost smacked me dead with that thing!
                player Maybe that wouldn't happen if you could keep your face away from my dick huh?
                im images/intern/dpp2.jpg
                indamn Heh, not gonna happen.
                player If you don't pull your face away, how about you put it closer?
                indamn Okay that <b>IS</b> gonna happen.
                t And without losing a moment he gets up close, pressing his lips on your dick while using his tongue great as ever.
                im images/intern/dsuck1.jpg
                player <i>Guh-</i> What's the hurry?
                indamn I'm not even going that fast, <i>you're just expecting me to be too slow.</i>
                player Such a <i>mouthy</i> slut aren't you?
                indamn Could you stop making stupid puns in the middle of sex please? It kills the mood.
                player How about no? I love my puns.
                t He sighs.
                im images/intern/dsuck2.jpg
                indamn You're evil...
                player And that's coming from a devil, speed up dummy.
                indamn <b><i>With pleasure, *master.</i></b>
                t He picks some speed, using his hands (or well, fake paws) as perfectly as his mouth and tongue to send you to <i>hell and back.</i>
                player <i>Ggh- Don't you have a moment to waste?</i>
                indamn Mhm, not a single second.
                im images/intern/dass.jpg
                player Then I won't waste another moment either.
                t You see his eyes gleam once again before starting to suck even harder, licking his lips to make it an overall better experience for you.
                player <i>Ugh... Here it comes-</i>
                indamn <b>Finally..!</b>
                t And at last, you can no longer hold yourself back, giving him the cumshot he so desired.
                im images/intern/dsuck3.jpg
                indamn <i>God dahmnn-</i>
                im images/intern/dpp3.jpg
                indamn <i>Sho fucking mushh.</i>
                t He looks really happy with what he's gotten, but he also looks like it wasn't enough for him.
                player Well then, time to get down.
                indamn You can go foh more..?
                t You needn't to use words for this one, so you use a little "demonstration" to give him his answer.
                im images/intern/dcb1.jpg
                indamn <b>YESH YOU CAAAAN..!</b>
                t He's having his fun louder than usual until when you finally hear Theo yell from inside.
                blessed <i>Could you guys be a little quieter for god's sake? I'm trying to write something here.</i>
                indamn <b>AYE SHUT THE FUCK UP!</b>
                blessed <i>Rude...</i>
                indamn <b>Don't mind himmmm, keep uuuuuhp... <font color= '#BD7CDE'>BREAK ME DOOOWN..!</font></b>
                player <i>Say less...</i>
                t You get rougher and rougher, making him shake like a bitch in heat to the point both of you reach your climax again.
                indamn <b><i><font color= '#BD7CDE'><font size= '+1'>C-CUM! CUMMING! GOHNA CUM AGAIIIN!</font></font></i></b>
                im images/intern/dcb2.jpg
                indamn <b><font color= '#BD7CDE'>GAWDDD-</font></b>
                t He's breathing heavily.
                indamn <i>I made muhself a mehss agaihnnn-</i>
                player You sure did...
                t And once again, right when you're done you feel all the fuzz flooding your brain.
                player Aw man, <i>my fucking head-</i>
                im images/intern/dcb3.jpg
                indamn <i>Guhhhh- You're a fucking savage, a barbarian! Look what you've done to me...</i>
                player <i>You asked for it.</i>
                indamn <i>So what? I'd ask for it any day.</i>
                player It looks like you want more of it huh?
                t He looks more panicked than excited this time.
                indamn A-Are you out of your mind?! Are you trying to fucking kill me??
            `); 
            if(checkTrust('demon') >100){
                writeHTML(`
                    player Why? I thought you were a demon, aren't you guys like extremely durable?
                    indamn You talking about that exhibitionist slut? Man I don't know whatever you've done to him but we're not the same, <i>I still have some self respect..</i>
                `);
            } 
            writeHTML(`
                player Don't worry, I'm just messing around.
                im images/intern/dcsit1.jpg
                indamn <i>Wait, are you really going to stop..?</i>
                player Sure thing, there's no point in keeping up anyway.
                indamn And why's that?
                player <i>You know, I'm human after all, I've got my limits.</i>
                indamn Hmph, fair enough, your head must be killing you right now.
                player <i>And it was totally worth it.</i> 
                im images/intern/dcsit2.jpg
                indamn Good to know you enjoyed it too, hehehe.
                player But you know we'll have to clean up.
                t He curses under his breath.
                indamn Let me guess, you're going to wash at internF's house, he's paying for the water bills anyway right?
                player It's your fault I'm covered in jizz in the first place, and you may stay dirty if you so wish.
                indamn ...Just keep it quick.
                player Heheheh.
            `);
            break;
        }
        case "interndevil2" :{
            writeHTML(`
                define blessed = sp Theo; im images/intern/blessed.jpg; altColor #B1355D;
                define indamn = sp intern; im images/intern/indamn.jpg; altColor #C078A1;
                t You sit down next to internF and pour yourself some of his tea as he's watching you with curious eyes.
                player Well, I'm here as a visitor today, if that's no problem for you guys.
                indamn H-Huh..?
                blessed I'd be glad, make yourself at home playerF!
                indamn T-Theo!
                blessed What? Can't he?
                t He looks troubled about what he's going to say.
                indamn I mean he can but, <i>my tea...</i>
                t You laugh at him while sipping some of his precious tea.
                player Tch tch tch, what happened to the good ol' sharing is caring?
                indamn <b>Look, if sharing my tea without my own will is caring, I don't care about anything.</b>
                blessed He says that tea helps him keep calm, I think you really shouldn't mess with it.
                indamn And Theo prefers coffee over tea, you know that bitter "drink" only nerdy maniacs love.
                player <i>I love me a cup of joe sometimes though...</i>
                indamn Who's j- <i>Wait no.</i>
                im images/intern/dtea1.jpg
                t Both you and Theo put a wide and evil looking smile on your faces.
                player <i>What was your question, internF?</i>
                t He quickly goes through his phone and reads the answer out loud.
                indamn <b>A CUP OF JOE IS THE SLANG TERM FOR A CUP OF COFFEE, YEAH THAT'S THAT!</i>
                blessed Aww, he used the online dictionary.
                indamn I won't fall for that godawful joke, not again.
                player Alright then, what about having a "godawful" night?
                t He giggles.
                indamn Well that sounds better I guess, but I thought you were gonna stay as a visitor today?
                player What if I changed my mind?
                indamn <i>Well it would be great if you did.</i>
                player To your room then, soon as I finish my tea.
                im images/intern/danyay.jpg
                indamn It looks like you really like it huh?
                player Well it'd be a shame to let it cold am I wrong?
                t He nods.
                indamn 'Kay then what cosplay should I prepare this time?
                player Hmm, <i>what about internF internL cosplay?</i>
                im images/intern/danwow.jpg
                indamn Me cosplaying myself? How am I supposed to fuckin' do that?
                t You sip your tea quickly and get up.
                player That means I don't want no costumes dummy, I want you as yourself.
                im images/intern/danbrat.jpg
                indamn <i>Damn you, okay I'm down.</i>
                blessed Can I expect you guys to be a little quiet this time?
                t internF shrugs without even looking.
                blessed Bah, okay then.
                t ...
                player Will you ever get tired of this?
                im images/intern/dfuck1.jpg
                indamn Noope, not gonna happen.
                player <i>Oh boy am I glad.</i>
                t You didn't tell him to get on top instead of laying down, but he's using his hips way too good for you to complain.
                indamn Guhh- <i>I needed this...</i>
                player You will get a lot more than this.
                indamn You don't have to get me even more excited you know..
                t You give him a spanking, making his hips shake and lose the rhythm.
                indamn <b>Ouff-</b> A-Again..?
                player Only if you beg for it.
                t He breathes in and out, trying to form a proper sentence.
                indamn <b>P-Puhlease spank me more, *master..!</b>
                player Well since you asked so nicely.
                t Two more spanks were enough for him to break his rhythm altogether and start slamming his ass on your dick as much and hard as possible to hit his prostate inside.
                indamn <b>YESH YESH YESH YESH YESH-</b>
                player <i>Ghh- I'm getting close again..</i>
                indamn <b><i><font color= '#BD7CDE'><font size= '+1'>FILL MEEEEH</font></font></i></b>
                t With all the teasing you put on him, he finally spurts first time for the night the same moment as you.
                im images/intern/dfuck2.jpg
                indamn <b>Haaaah-</b>
                im images/intern/dsit.jpg
                indamn <i>Thank youuuu..!</i>
                player You really got some strong hips for a boy of your size.
            `);
            if(checkTrust('fitboi') >0){
                writeHTML(`
                    indamn W-Well I've been joining fitboiF in his trainings for a while.
                    player Really? Thought you weren't the type to be a runner.
                    indamn Why not? Burning some energy helps me sleep better, also I've been getting more outgoing since we started hanging out with him.
                    player Glad to hear you guys can get along.
                    indamn <b>AND I EVEN MANAGED TO CATCH UP TO HIM LAST TIME!</b> Oh man you had to see his face.
                    t He laughs.
                `);
            }    
            writeHTML(`
                indamn <i>Gotta train my hips better though, I can't even move them now.</i>
                t He's still trying to catch his breath after all that bouncing.
                im images/intern/dfuck3.jpg
                player Well if you can't bounce anymore, how about laying down?
                indamn Oh fuck...
                t His "scared excitement" is arousing as ever, and since he can't really resist with his wasted legs you can use him however you'd love.
                im images/intern/dfuck4.jpg
                indamn <b>I'VE GOT A MONSTER INSIDE ME..!</b>
                player You're overreacting you dramatic bitch.
                t He sighs.
                indamn Was it really that obvious?
                t You nod.
                indamn It still hurts tho, <b>but it's totally worth it.</b>
                player Well if it is, mind if I speed up a bit?
                t You ram hard and deep inside, making him bite his lips trying not to scream.
                indamn <i>You're gonna break meeh..</i>
                player Yes or no?
                indamn <font color= '#BD7CDE'>Yes, fuck yes, absolutely yes.</font>
                player Well since you want it so much.
                t As you get rougher and rougher on his ass, tears start welling up his eyes while he gets louder and louder as well.
                indamn <i>I'm really gonna regret thiissss..!</i>
                player Nnh- Is it not worth it anymore?
                indamn <b>IT'S NOT! BUT IT FEELS SO GOOD I DON'T WANT THIS TO STOOOP..!</b>
                t He doesn't really look like he's acting anymore, yet he seems to enjoy it even more than you do.
                indamn <b>C-Cum- ming- I ahm- <font color= '#BD7CDE'>NNNH- I'M CUMMMMIIING!!!</font></b>
                t You ram deep inside him and fill his boyhole the same moment he starts spurting just so he'll have a painfully long sissygasm.
                im images/intern/dfuck5.jpg
                indamn <i>Oooooomhffh- It's not stophiiing-</i>
                player God <b>DAMN</b>... That was something else.
                t Once the glorious brat, now squirming under you as his asshole pumps your cum on the bedsheets slowly.
                indamn <i>Sho fuuull of my *master's sehmen-</i>
                player <i>And it's not even all for the night.</i>
                t He trembles in fear and excitement.
                indamn <i>I'm gohna get paralyzeeehd..</i>
                t ...
                t Hours? Loads? Orgasms? You can't exactly remember how much, but it has been a huge lot of each with this shaky little mess under you.
                im images/intern/dfuck6.jpg
                indamn <font size= '-1'>Ughhhh...</font>
                t And he seems to be shaken a little too hard that he can barely even speak, no more teasing, no more complaining, he just takes all you give him.
                player <i>Okay, last one for the day.</i>
                indamn <i>Yeshhh!</i>
                t You shove your dick all the way in once again, giving the squirmy devil last load of the night as he takes it in with a tired moan.
                im images/intern/dfuck7.jpg
                indamn <i>Sho goooood-</i>
                player Well I think I'm lucky tonight, my head didn't even get that b-
                t As the delayed fuzz floods your mind, you regret having talked early.
                player <b>Ughhhh-</b>
                indamn I expected so.
                t He raises his arm and yells with what little power he has left.
                indamn Theoooo- He killed meeeh..!
                blessed <i>Good job playerF!</i>
                indamn <i>You'll have to wash me, I can't even stand on my feet now and am sticky all over.</i>
                t There is a short silence before Theo yells again.
                blessed <i>...Damn you playerF!</i>
            `);
            break;
        }
        case "internangel1" :{
            writeHTML(`
                define blessed = sp Theo; im images/intern/blessed.jpg; altColor #B1355D;
                define indamn = sp intern; im images/intern/indamn.jpg; altColor #C078A1;
                t You take a look at internF, and then Theo, maybe it's time to try a new boy after all.
                player Soo, hey Theo!
                im images/intern/twrite3.jpg
                blessed Hm? Anything wrong *sir?
                player Not at all, what are you writing?
                blessed Nothing actually, I also enjoy drawing sometimes, like right now.
                t You giggle.
                player To be honest, best I can draw is stickmen, so I guess you're a bit out of my league huh?
                t He shrugs with a smile.
                im images/intern/twrite4.jpg
                blessed Well, did I ever say I draw good? You don't have to draw good to enjoy drawing at all!
                player You're certainly the optimistic one.
                blessed <i>Because a pessimistic angel would be an absurd concept, am I wrong?</i>
                t You cross your arms, raising an eyebrow.
                player That would be true, but I think being a boyslut would be <i>absurd</i> for an angel as well.
                t He slowly closes his notebook, getting up with a funny smile.
                blessed <i>Heh</i>, well...
                im images/intern/theoyay.jpg
                blessed I believe that would be my problem wouldn't it?
                indamn <i>Just say you're a bitch.</i>
                blessed Well if you need to be a bitch to get dick, <i>wouldn't you be the one getting it right now?</i>
                t That gotta hurt, but he deserved it.
                indamn Fuck you and fuck your smart words, you nerd.
                t Theo wags his arms for a little dance just to mess with internF while chuckling.
                blessed You should know better, you can't roast me.
                indamn Whatever, I'll just quietly enjoy myself here.
                t Theo walks into his room and leaves with a schoolgirl uniform after a minute.
                blessed Soo, like uhm... What do I do now..? <font size= '-1'>I'm so new to all of this...</font>
                t You smirk.
                player Well, I guess you could start by showing me what you've got under that skirt.
                t He pulls his skirt up with a smile.
                im images/intern/tshow2.jpg
                blessed L-Like this..?
                player Uhm yeah but-
                blessed But..? Did I somehow do this wrong too?
                player No no it's not that.
                t internF fake coughs.
                indamn He meant he wanted to see your ass, you moron.
                blessed Gee- So sorry *sir.
                player I'm not the one complaining here, it's your favorite yellow headed dumbass who does.
                t internF fake cries.
                indamn Now you meanies are teaming on me to bully little old me? No fair, heartbroken.
                player I mean it's your fault, you could've kept quiet, anyway.
                t You grab Theo by his waist and turn him around yourself.
                im images/intern/tshow4.jpg
                blessed <b>E-EH?!</b>
                player Calm down, I'm not starting yet.
                t He's still blushing.
                blessed <i>This is still so embarrassing.</i>
                player Seems like you're not ready for it, do you really wanna do this?
                t He shrugs with a scared expression.
                blessed No no I'm ready, all ready! Just nervous but ready!
                player Well if you say so, why don't you just get down?
                blessed To unzip your pants..?
                t You nod tiredly.
                blessed O-Okay here goes-
                t He slowly kneels down, and the moment he pulls your pants down you heart a tiny scream.
                im images/intern/tpp1.jpg
                blessed <b>HOW AM I SUPPOSED TO TAKE THIS ALL IN?!</b>
                t internF sighs.
                indamn That's actually a pretty average size though, you'll be fine.
                blessed I know you said this just to call me a tiny dick, but thanks I guess.
                indamn See? I didn't say it, he said it himself! 
                player Your sizes are pretty much the same though.
                t He crosses his arms.
                indamn <i>M-E-A-N-I-E, that's what you are, a meanie.</i>
                t Theo giggles.
                im images/intern/tpp2.jpg
                blessed It's not playerF's fault, of course he'd favor the cuter one.
                indamn If he were to favor the cuter one, he'd definitely favor me.
                player Ahem, could you guys stop arguing? <i>Like we all know I'm the cutest one here.</i>
                indamn Ohhhh you fucking-
                t Theo coughs.
                blessed I believe what he meant to say was "shut the fuck up internF".
                indamn Hmph, you'll pay for this.
                player Well, I can think of <i>a certain way</i> to make him pay.
                blessed E-Eh?
                t You push his sketchbook away and put the author himself on the desk instead, with your own little addition.
                im images/intern/tfuck1.jpg
                blessed <b><i>EEH!? I-I thought being gentle on virgin boys was a norm?!</i></b>
                player I mean it is, but do you think I really care about it?
                blessed <i>And on my own desk huh? I bet you're making horrible puns about me being an author in your head right now.</i>
                t Ouch.
                player Why do you act so angry all of a sudden?
                blessed <i>Gggh- Sorry but it's not really easy to stay kind while getting your back blown.</i>
                player I mean you were the one who wanted it.
                im images/intern/tfuck2.jpg
                blessed A-And I still do! It feels good actuallyyy-
                player So you wouldn't mind if I went a little rougher on you right?
                blessed R-Rougher..?
                t You nod and increase the speed as he screeches under you.
                blessed <i>You'll break meeeeee-</i>
                t You hear internF chuckle quietly, he knows that's nothing close to what you've given him before.
                blessed <i>I-I'm getting clooooohse.</i>
                player Huh? Already?
                blessed <b><i><font color= '#937CF7'>YEAAH..!</font></i></b>
                im images/intern/tfuck3.jpg
                t You stop for him to catch his breath, though you haven't came yet, he looks happy enough.
                im images/intern/tfuck4.jpg
                blessed S-So, how was I? Did you enjoy it? <br><i>Will you do it again???</i>
                player Whoa whoa whoa, slow down, I mean I enjoyed it but you see, I haven't came yet, but I'm sure you'll make me next time.
                blessed What? Why do I have to wait until next time?!
                player You can't be suggesting..?
                blessed Too bad, I'm exactly suggesting that, if you don't cum you won't be acclimated to my body, and all of this will be for nothing!
                indamn He just made it up, you should be fine either way so don't listen to him.
                blessed <i>Just keep that mouth shut, or else...</i>
                im images/intern/tfuck5.jpg
                blessed Don't listen to him *master, you definitely need more, you can't stop until I'm filled with your cum, this is how it really works!
                player It sounds like you're begging for more actually.
                blessed <b><font color= '#937CF7'><i>So?</i></font></b>
                player N-Nothing...
                im images/intern/tbench1.jpg
                blessed <b>EEK!</b>
                player Oh so you can do that too?
                blessed <i>J-Just warn me next time before you start dammit..</i>
                t He might be a little angry, but from the noises he make you can see him enjoy it as much as you, <i>if not more.</i>
                player Mmh, I'll consider.
                im images/intern/tbench2.jpg
                blessed You're just messing with me...
                player Would you rather me messing with your insides?
                t There is a short silence.
                blessed <font size= '-1'>Yes please.</font>
                t He needn't say more, as you give him what he wanted a little rougher than he expected to receive it.
                blessed <i>You're ruining meeeh-</i>
                player Isn't that- What you wanted..?
                blessed <i>It iiiiis, just don't stoohp!</i>
                t His dicklet starts twitching again despite having just jizzed, and since you're getting close as well you decide to gear up a little more.
                blessed <i>Gonna- Gonna-</i>
                player Gonna what? 
                blessed <b>GONNA MAKE MUHSELF A MESS AGAIIN..!</b>
                t You stop to start "messing" his insides as he spurts all over himself again.
                im images/intern/tbench3.jpg
                blessed <i>Thish'll take forever to wash offfff...</i>
                t After just laying there with his eyes unfocused for a while, he notices it.
                blessed W-Wait, you came too..?
                player It seems so.
                blessed Would you die if you just said yes or no?
                player Yes.
                im images/intern/tbench4.jpg
                blessed <i>Yaay...</i> Wait, did you say "yes" to first question or latter?
                player Heh, <b>both.</b>
                blessed <i>Yaay..!</i>
                t He sighs with relief.
                blessed Thank you *sir.
                player Why're you thanking me? I should thank you instead.
                blessed Well, <i>it felt so gooood.</i>
                im images/intern/tbench5.jpg
                player Well I've enjoyed it a lot too, but have you guys never done it with internF?
                blessed <i>We're the same soul, remember? It has been centuries since we last did.</i>
                player Yeah, and so..?
                indamn Are you suggesting I fuck myself?
                player <font size= '-1'>Fair point.</font>
                blessed Well then, <i>I think you should go before I feel like going for another round.</i>
                player I wouldn't mind actually-
                indamn But you should, unless you want to become the next sleeping beauty.
                player What do you..?
                t Your eyelids start feeling heavy and your body feels numb, so that's the price of going for an angel.
                player I think I got it, see you guys then..
                t You walk towards the door, your legs barely capable of carrying yourself.
                blessed Good night.
                indamn See you later pal, try not to die.
            `);
            break;
        }
        case "internangel2" :{
            writeHTML(`
                define blessed = sp Theo; im images/intern/blessed.jpg; altColor #B1355D;
                define indamn = sp intern; im images/intern/indamn.jpg; altColor #C078A1;
                t You look over at Theo and signal him, he nods with a tiny smile on his face before getting up.
                blessed Well, it seems like you've got something in mind with me huh?
                player Maybe, but you look quite excied this time.
                im images/intern/theo.jpg
                blessed Maybe it's because I am?
                player So, are you going to change your clothes this time?
                blessed Yeah, give me a minute.
                t He runs off, leaving you alone with internF.
                indamn ...Sooo, what's up?
                player I'm doing pretty fine actually, what about you?
                indamn I'm also well, had some good tea today.
                t There is an awkward silence as neither of you know what to say.
                im images/intern/dtea1.jpg
                indamn This is...
                player Weird, yeah.
                t You sit next to him, he pours some tea for you as well.
                player Yeah, this one tastes pretty good actually.
                indamn Right?! They somehow make it so damn good.
                t You two keep waiting and waiting, but there's no sign from Theo at all.
                player Where the hell is he? I thought you were the only one to say "be right back" and not be "right back".
                indamn Don't get me wrong pal, but I feel like he wants you to go check for him.
                player And what makes you think that?
                im images/intern/dtea2.jpg
                indamn Would you believe me if I told you I sensed it?
                player Not really, no.
                t He chuckles.
                indamn Because I'd be lying if I did, that dumbass texted me to send you there.
                player And why the fuck did he wait that long to say that?
                indamn How 'bout you ask him yourself while having fun? I'll be listening.
                t You get up.
                player Can I trust you to come help me if you hear sounds of me getting raptured.
                indamn Pfff- You got it.
                t You walk in Theo's room to find it rather empty.
                player Theo... Where the hell are you..?
                t You turn around and get pushed on the bed with an unexpected force, in a moment you find yourself laying down on the bed with someone familiar sitting on your crotch.
                im images/intern/tsit2.jpg
                blessed <i>Right here *master...</i>
                t You giggle and make a fake scared expression.
                player I've been ambushed! I've been ambushed!
                t He shrugs with a totally disappointed face. 
                blessed Why must you be like this man? Like I'm creating an ambience here, wait for you to come over, and you just make some silly joke instead of appreciating the effort.
                player I just can't help it, though you look good in these.
                blessed Thanks eh, but they're just my PJ's, heheh...
                player <i>Well, I bet you'd look better without them.</i>
                im images/intern/tsit1.jpg
                blessed O-Okay that one was better, your previous nonce is forgiven.
                t You chuckle.
                player I have been forgiven by an angel, does that mean I can still go to heaven?
                t He rolls his eyes.
                blessed You'd have to repent from your sins, live a modest life and blah blah blah.
                t You can feel him moving his ass on your crotch slowly to tease you.
                blessed <font color= '#937CF7'>I don't want you to do that though, <i>you're better as a sinner.</i></font>
                player Well damn, you're rubbing yourself pretty hard aren't you?
                blessed <b><i>So what? You're getting hard too.</i></b>
                player Would you at least get off my chest..?
                t He laughs.
                im images/intern/tsit3.jpg
                blessed <b><font color= '#937CF7'><i>Make me!</i></font></b>
                player And I thought you'd be the innocent one...
                blessed <i>Innocence is pointless, even for angels, <font color= '#937CF7'>especially for the ones in heat.</font></i>
                player If you say so...
                t You take him down and strip him off his clothes in a moment before ramming inside him.
                im images/intern/tfold1.jpg
                blessed <b>UGHHH- That's a lot bettehh!</b>
                t Even though you're going a lot rougher than last time, he doesn't seem half bothered by it.
                player <i>You've trained your hole after last time huh?</i>
                blessed <i>M-Maybe? Maybe I wanted to be able to please you better?</i>
                player Talk about a desperate slut huh.
                blessed <i>Uh huh.</i>
                t You give him the rough fucking he thought he was prepared for, though his squirming suggests his preparation was not enough at all.
                blessed <font size= '+2'><b>HOW CAN YOU GET SO GODDAMN ROUGHHHHH?!</b></font>
                player Mhm, where is your confidence now?
                blessed <font color= '#937CF7'><b>GONE! <font size= '-1'>ALL GONE!</font> DON'T STOP! <font size= '+1'>JUST DON'T STOP!</font></font>
                t Normally, you'd stop just to edge him some more, <i>if you could...</i>
                blessed <i>Getting cloooooohse..!</i>
                player <i>Then let it all out for your *master, like a good little boyslut.</i>
                blessed <b>GGH- YES YES YESSSSHHH..!</b>
                t You get painting his insides as he covers himself in his own jizz, and being particularly loud about it.
                im images/intern/tfold2.jpg
                blessed <b><i>I'm making muhself a mess agaiiiin</i></b>
                t You spank his ass with a smirk on your face.
                player But we are not done yet you know?
                blessed H-huh..?
                t You pull him back on his feet for a little "test of durability".
                im images/intern/tbend.jpg
                blessed <b><i>Haaaaaaaah..!</i></b>
                player You don't even need a break huh?
                blessed <i>I only need you to break meeeeh.</i>
                player Well, if you say so.
                blessed Wait wait..! <i>You aren't really gonna get rougher right..?</i>
                t You nod and really do get rougher, as he really does get louder.
                t ...
                blessed <i>H-How much has it been already..?</i>
                t You stopped counting long ago, well you don't care either and might as well add another.
                player <i>I don't know, but here's another.</i>
                im images/intern/tcum1.jpg
                blessed <i>Nnh- Just how much you can cum anyway?!</i>
                player Well, I think that's all for tonight.
                im images/intern/tcum2.jpg
                blessed <i>I'm sho tired, I'm sho messed uup, I'm coated in *master's cuuuhm.</i>
                player So am I, <i>it's harder to satisfy you than the literal demon sipping his tea inside.</i>
                t You hear the mentioned demon yell from inside.
                indamn <i>I told you so!</i>
                im images/intern/tcum3.jpg
                blessed You know this'll take forever to clean off right?
                player You could ask for internF's help.
                blessed Heh, he'd just tell me to fuck off.
                t Another yelling from the demon.
                indamn <i>I'd just tell him to fuck off.</i>
                player Heh, well sorry for the inconvenience then.
                im images/intern/tcum4.jpg
                blessed Apology accepted, but only if you let me lay here a little longer.
                player I don't mind it, though I hope it wouldn't be a problem if I wanted to use you guys' bathroom, I'm sticky all over..
                blessed Go ahead, I don't pay the water bill anyway.
                t One last yelling from inside.
                indamn <i>Fuck you too, playerF.</i>
            `);
            break;
        }
        case "internClub1" :{
            writeHTML(`
				intran And ta daaa..!
                im cdb1.jpg
                intran How do I look hm? Prettier than Theo right?
                player Well it wouldn't be fair if I said anything before seeing Theo in a swimsuit.
                t He chuckles.
                intran He likes to swim a lot eh, you'll definitely see him in his swimsuit sooner or later.
                player Heh, I'm looking forward to that.
                intran Heeey..!
                im cdb2.jpg
                intran What about me? What about the cute boi standing in front of you? Deal with me first or else!
                player You're a bit too excited aren't you?
                intran Maybe?! I mean cmoon, this silk or whatever feels too uhmm... <i>Delicate</i> on my skin, it's like a gentle touch heh.<br>That nagatoroF really knows what to wear on his pretty boibuns.
                player Looks like you really love putting on dresses huh?
                intran I really like putting on dresses, but...
                im cdb3.jpg
                intran I <i>love</i> taking them off a lot more~<br>How about <i>you</i> touch my skin instead of this piece of cloth?
                player <i>You horny bitch.</i>
                t ...
                intran This... Feel gooood~
                im cdb4.jpg
                player I knew you were touch sensitive but...
                intran Just fucking squeeze it harder you-!<br>I-I'm not like this all the time... Maybe it's about the form? The tan? I don't know it just...
                t He bites his lips in a fruitless effort for holding his moans in as you keep pushing your fingers deeper inside him.
                intran <b>JUST PUT IT THE FUCK IN ALREADY..!</b> <font size= -1>Please...</font>
                player Oh you even added please huh? <i>Good boy~</i>
                intran I... Don't have praise kink... Don't try-
                im cdb5.jpg
                intran Jes-I mean Lucy fucking antichrist this feels good..! I love using different forms for this exactly..!
                t He clenches his boihole to tighten around your cock, forcing you to speed up by moving his hips.
                intran <i>This bitchhole is like all new dear, for you to fucking ruin it again~</i>
                player Lemme guess, you want me to make you "regret" this one too, right?
                intran I meaaaan...
                t He squeaks the moment you thrust deeper inside him.
                intran ...Fuck me stupid. Ruin me!
                player That's more like it~
                t His voice gets shakier and shakier with your each thrust.
                intran <font size= -1>I... Cum...</font>
                player Louder, internF.
                im cdb6.jpg
                intran <b>CUMM..!</b>
                t His legs go tense as you let your load inside him, his dick twitching and spurting jizz at the same time.
                intran Fuckk~ 
                player Well, are you satisfied yet?
                t He takes a deep breath, eyes still a little teary from the rough (yet short) fucking you just gave him.
                im cdb7.jpg
                intran For now, yeah... Hey do you think nagatoroF would tell me where he got these clothes from? They're really nice you know.
                player Maybe you should ask him yourself.
                intran Booo, be useful for something other than dickin' me down for once.
			`);
            break;
        }
        case "internClub2" :{
            writeHTML(`
				intran A-Are you sure with this one? This one is a little...
                player Pretty?
                t He pulls the hem of his skirts.
                intran It's so fucking tight man... But I guess that's the design eh? <i>But why won't my fucking dick fit in the skirt?</i>
                player I think it's for...
                t You reach his waist to pull him down on your lap.
                im cda7.jpg
                player ...This!
                intran G-Ghooosh nooooh~
                player You're sensitive down there aren't you internF?
                t He nods with his hand a few inches above his dick, seemingly hesitating to touch without an order.
                player Well, why don't you be a power bottom this time? <i>At least until both of us can get off with your dick on mine...</i>
                intran You know I'm gonna cheat right? A little bit of demon shit and you'll be cumming the same moment as me if not earlier.
                player It means I get to dom earlier too.
                intran As if I give a fuck.
                t He puts his hands down to start moving his hips back and forth, grinding himself on your dick as fast as he can do it.
                intran Ghhh~ Fuck yess.. <i>Now for the "spice"!</i>
                t Your sight gets "fuzzy" like the first time you were first doing it with a demon, your dick feeling more sensitive with his each thrust.
                intran <b><font color= '#BD7CDE'>Mmmhm just like that. internF is nothing short of the other demon fembois is he? Let him make you feel good~</b></font>
                player I-I'm already..!?
                intran <b><font color= #BD7CDE>FUCK YES! CUM WITH MEEEEH!</b></font>
                im cda8.jpg
                intran Haah~ Huff..
                im cda9.jpg
                player I- Gosh my head...
                intran Heh, that's what you get. Your turn to regret a good fucking instead of me heheh.
                player I don't think I had the "fucking" yet, internF.
                intran So you want more huh?
                im cda10.jpg
                intran Bring it on then, let's see how badly you can break "this" internF.
                t ...
                intran I'd feel less naked without an uniform like this...
                im cda1.jpg
                player You don't see me complaining, the view is pretty nice over here.
                intran Are you gonna watch my damn ass all day? I mean Theo can just take a pic of it for you if you're only gonna watch it and do nothing.
                player Stop complaining and get up then.
                t He lets a deep sigh out as he gets up lazily, and then...
                im cda2.jpg
                intran Eeek~ T-Take it easy eh! This one's a new hole remember?? It hurts when you just shove it in like that.
                player You really should stop asking to "regret" letting me go rough on you, internF.
                intran I just love to complain like a whore, I even enjoy the pain afterwards just please don't slow dooown~
                t You begin to speed up (and ignore his whining as you do) as his moans get sharper and louder.
                intran I-playerF..! Oh my fucking- <font color= #BD7CDE>Cumming..!</font>
                im cda3.jpg 
                intran ...
                t He spurts a few more ropes of jizz on the floor with his shaky arm barely preventing him from falling flat on his face.
                player Are you satisfied yet, internF?
                intran <font color= #BD7CDE><font size= '-1'>More.</font></font>
                player You're insane... <i>But so be it, Lay down.</i>
                t ...
                t Several hours pass by as you keep fucking him in various positions, on different surfaces and with different toys. But as you get closer to your god-knows-which load you can tell this is the last.
                intran Fuhhh yeshh~ I'm cuhmming agaiin!
                im cda4.jpg
                t You put in whatever strength you have left in your body to speed up for one last time.
                intran Yesyes <b>YES! <font color= #BD7CDE>FILL ME UP AGAIIN!</b></font>
                im cda5.jpg
                player Nghhh~
                intran Yess...
                t You two take deep breathes as you struggle not to collapse on the "jizz covered mess" chuckling to himself.
                intran I'm a mehss~
                player Hell yeah you are, we've been fucking for hours you needy thing.
                intran Heheheh...
                im cda6.jpg
                intran Thanks for giving me what I needed... Theo'll wish it was him heheheh...
                player I think Theo would rather being able to walk properly.
                intran Speaking of walking, I better call a taxi, could you untie my hands..?
                player Will I get to ride that cab too?
                intran No, pay for your own ride you cheapskate.
			`);
            break;
        }
        case "internvdayspecial" :{
            writeHTML(`
				blessed Oh hey internF, could you please tell me what day is it today?
                indamn Ahem, I'm pretty sure we're somewhere in Anno Domini 2000's, or 2100's? Fuck me if I know.
                im images/intern/twrite1.jpg
                blessed ...That's internF for you. I'm asking him today's date and my little dumdum can't even remember what year we're in.
                t Theo gets up from his chair to gently knock on internF's head.
                blessed It's valentines' again cutie, the day of lovers!
                im images/intern/dtea1.jpg
                indamn Is it really that time of the year again? Maaaan the last year's V day was like one of the best days of my longer than expected life..
                blessed <i>internF, the last year's Valentines' day was a normal day for us... Like all we did was sitting together, sharing a blanket as we watch TV while we drink hot chocolate, just like any other winter day...</i>
                indamn <i>Exactly, you fucking buffoon... <font color= '#BD7CDE'>Do you think I could have a better day than a day where I'm together with you?</font></i>
                blessed ...Heheheheh. <i>I love you you flirty little imp.</i>
                t internF grunts.
                indamn Who're you calling an imp hah? I'm no fucking imp! I'm a whole ass demon prince and I <i>normally</i> belong to the deepest depths of hell and-
                t Theo puts his hand on internF's head, giving him a gentle headpat.
                im images/intern/theo.jpg
                blessed Shh, don't even try... <i>Only place you belong is in my arms...</i>
                t It doesn't take a moment for internF to get blushing. 
                im images/intern/dtea2.jpg
                indamn <i>...And wouldn't wanna be in anywhere else anyway.</i>
                blessed Heheheh...<br>Oh gee internF we forgot our visitor..!
                indamn Visi-who? Oh shit playerF..!
                player Don't mind me I'm just enjoying myself here, <i>you lovebirds.</i>
                indamn "Lovebirds" blah blah blah shut your trap! We've spent countless years together of course I love this little fucker. <i>Like look at him how can I not?</i>
                im images/intern/theoyay.jpg
                blessed Heheh... <i>Looks like someone's gonna have a feast of heart shaped pancakes tonight.</i>
                indamn <i>T-the special ones?</i>
                t Theo nods slowly, making internF get visibly excited.
                indamn <b>WOOOOOO YEAH BABY!</b>
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
	{index: "reward", trust: 100,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "reward" :{
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
            writePhoneImage("images/intern/reward.jpg", "Art by Morino Kuma");
			writePhoneSpeech("intern", "", "Ace here for the announcement, you've officially completed internF, the longest current boi in the whole game (I had to brag about it), and you can still check him at his home and computer room for content you might've overlooked as well. He might get some fixes and a bit of rewrite, <i>and maybe a few tiny additions</i> but that was pretty much all of it, see you with a new character soon!");
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