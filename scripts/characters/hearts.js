var character = {index: "hearts", fName: "Skye", lName: "Powers", trust: 0, encountered: false, textEvent: "", met: false, color: "#3F6971", author: "KH_Ace", artist: "", textHistory: "", unreadText: false,};

var logbook = {
	index: "hearts", 
	desc: "A rumor queen among the students, she's the type to seek any kind of backtalk and decide whether it is beneficial for her group or not. Though that is only what you have heard about her, which makes that rumor queen claim a rumor on itself. Other than that it could be said she's quite a strange girl that talks to talk.",
	body: "Busty? Hot? Young? Fair? Curved just in the right places? Don't you already use those words to describe more than half of the girls you've met so far? What makes her distinctive is her blue tipped hair, which she apparently dyes in different colors occasionally.",
	clothes: "She wears a white shirt (with a tie) and gray skirt, nothing special.",
	home: "She lives around the park district, and is a student from class B.",
	tags: ".",
	artist: "Kitsuneyane",
	author: "KH_Ace",
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "intro", name: "Read the files of hearts.", location: 'playerOffice', time: "Morning", itemReq: "", trustMin: 0, trustMax: 0, top: 0, left: 0, day: "both",}, 
    {index: "introAlt", name: "Pay hearts a visit.", location: 'classroomB', time: "Morning", trustMin: 5, trustMax: 5, itemReq: "", top: 0, left: 0, day: "both",},
    {index: "heartsI", name: "Pay hearts another visit.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 10, trustMax: 10, top: 0, left: 0, day: "both",}, 
    {index: "heartsIb", name: "hearts is here.", location: "classroomB", time: "Evening", trustMin: 11, trustMax: 11, itemReq: "", top: 0, left: 0, day: "both",},
    {index: "sfw2", name: "hearts is here.", location: 'classroomB', time: "Morning", itemReq: "", trustMin: 15, trustMax: 15, top: 0, left: 0, day: "both",},
    {index: "heartsII", name: "hearts is here.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 20, trustMax: 20, top: 0, left: 0, day: "both",},
    {index: "heartsIII", name: "hearts is here.", location: 'computerRoom', time: "Evening", itemReq: "", trustMin: 25, trustMax: 25, top: 0, left: 0, day: "both",},
    {index: "heartsIV", name: "hearts is here.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 30, trustMax: 30, top: 0, left: 0, day: "both",},
    {index: "heartsV", name: "hearts is here.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 40, trustMax: 40, top: 0, left: 0, day: "both",},
    {index: "sfw3", name: "Check on hearts.", location: 'classroomB', time: "Morning", itemReq: "", trustMin: 50, trustMax: 50, altImage: "images/none.png", top: 0, left: 0, day: "both",},
    {index: "sfw4", name: "hearts is supposed to be here.", location: 'classroomA', time: "Morning", itemReq: "", trustMin: 51, trustMax: 51, altImage: "images/none.png", top: 0, left: 0, day: "both",},
    {index: "heartsVI", name: "Wait for hearts.", location: 'schoolEntrance', time: "Evening", itemReq: "", trustMin: 55, trustMax: 55, altImage: "images/hearts/heartsa.jpg", top: 0, left: 0, day: "both",},
    {index: "heartsVII", name: "hearts is here.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 80, trustMax: 80, altImage: "images/hearts/heartsa.jpg", top: 0, left: 0, day: "both",},
    {index: "heartsVIII", name: "hearts is supposed to be here.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 90, trustMax: 91, altImage: "images/hearts/heartsa.jpg", top: 0, left: 0, day: "both",},
    {index: "postQuo", name: "hearts is here.", location: 'classroomB', time: "Evening", itemReq: "", trustMin: 100, trustMax: 100, altImage: "images/hearts/heartsa.jpg", top: 0, left: 0, day: "both",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
    writeHTML(`
		define player = sp player;
        define hearts = sp hearts;
		define serious = sp serious;
        define diamonds = sp diamonds;
        define clubs = sp clubs;
        define spades = sp spades;
        define ayeye = sp ayeye;
        define sports = sp sports; im images/sports/class.jpg;
        define heartsa = sp hearts; im images/hearts/heartsa.jpg; altColor #F59FB5;
		define seriousa = sp serious; im images/serious/seriousa.jpg; altColor #C00157;
	`);
	switch (name) {
		case "cancel": {
			unencounter("hearts");
			changeLocation(data.player.location);
			break;
		}
		case "intro": {
            if(checkTrust("serious") > 0){
                addFlag("hearts", "aaron");
            }
            setTrust("hearts", 10);
			writeHTML(`
                define mstudent = sp Male student; im images/none.png;
                define fstudent = sp Female student; im images/none.png;
                t Looking through the files of a few extra students, you notice one that just sounds, odd...
                player <i>A good student overall, above average grades and a clean sheet too. Then why is she a part of the "problematic" list?</i>
                t Reading more on the report, you understand the situation a little better.
                player <i>"Caught spreading the surprise exam dates in the school accurately several times", I guess that's a reason for teachers to not like her much huh? Students on the other hand however...</i>
                t Putting the sheets down, you decide to pay her a visit yourself.
                t ...
                t You enter classroom B, where you find heartsF talking to several other students.
                im morning.jpg
                hearts Said it a trillion times already boys, I've got no idea.
                mstudent Come on heartsF! Not even a clue?
                fstudent You know, anything could help...
                hearts Relax girly, the teach told us about the thing just today didn't she? I'll get the details later.
                t The other students look clearly relaxed with her reassurance.
                fstudent You rock heartsF!
                mstudent Heh, seems like I'm not gonna fail this time.
                hearts I swear y'all only like me for the info, a girl can be self-aware you know...
                player heartsF heartsL?
                t They all turn their heads to your side, the other students scuttle away, leaving heartsF alone with you. 
                hearts <font size= '-1'>Cowards...</font>
                t She chuckles a little and puts her phone down, her eyes locked on yours.
                hearts So, am I in a trouble or something, *sir?
                player I haven't seen you doing anything wrong, besides, I'm not even a teacher, I'm a-
                hearts Counselor, yeah. I haven't lost my touch yet.
                player ...Yeah, name's playerF. Nice to meet you.
                t She shakes your hand and gives you a warm smile.
                hearts Welcome aboard then! Long as you're nice to me I'm gonna be nice to you, remember that.
                player Did I... Have to be told that?
                hearts I don't know! I guess the time will show!
                t She shakes her arm a little to check her wristwatch.
                hearts And currently the time says: my break is over!
                player I think I'll see you later, then.
                hearts Would love to, catch ya later!
                t You could not get much out of her for today, though you wouldn't consider even a short introduction to be a failure. 
                finish
            `);
            break;
		}
		case "introAlt": {
            addFlag("hearts", "aaron");
            setTrust("hearts", 10);
			writeHTML(`
                define mstudent = sp Male student; im images/none.png;
                define fstudent = sp Female student; im images/none.png;
				t After learning about heartsF from a certain boy, you make your way to classroom B to pay her a visit.
                im morning.jpg
                hearts Didn't happen boys, sorry.
                mstudent What?
                fstudent But-
                t She shakes her head with a sad looking expression on her face.
                hearts The scouts they brought to the match were fakes, just to make y'all play better.
                mstudent What the hell?!
                fstudent So.. All that training, all our efforts...
                t heartsF starts rocking her chair back and forth slowly, scrolling through her phone.
                hearts ...Were in vain, sorry.
                player heartsF heartsL?
                t They all turn their heads to your side, the other students scuttle away, leaving heartsF alone with you. 
                hearts <font size= '-1'>Cowards...</font>
                t She chuckles a little and puts her phone down, her eyes locked on yours.
                hearts So, am I in a trouble or something, *sir?
                player seriousF said we could have a little talk, if you don't mind.
                hearts Oooooh you're playerF right? The counselor.
                t She shrugs.
                hearts Well if the <i>boyboss</i> told you that..
                player Boyboss?
                hearts We call him that, massages his ego I guess. Anyway!
                t She shakes your hand and gives you a warm smile.
                hearts Welcome aboard! Remember, long as you're nice to me I'm gonna be nice to you.
                player Did I... Really have to be told that?
                hearts I don't know! I guess the time will show!
                t She shakes her arm a little to check her wristwatch.
                hearts And currently the time says: my break is over!
                player I think I'll see you later, then.
                hearts Would love to, catch ya later!
                t You could not get much out of her for today, though you wouldn't consider even a short introduction to be a failure. 
                finish
			`);
			break;
		}
        case "heartsI": {
            setTrust("hearts", 11);
			writeHTML(`
				t Deciding to give heartsF another visit, you head into class B again.
                hearts Geee- I'm tiiired... 
                player heartsF?
                hearts Huh- playerF! It's you again.
                t She perks up a little and smiles.
                player ...Where are the others, if you don't mind me asking?
                hearts Class? We were dismissed early today, by the way feel free to have a seat eh.
                t Though you aren't very sure you really understand what she's trying, you decide to take a seat next to her.
                im evening.jpg
                hearts My... Don't mind me yawning alright? I'm just a lil tired that's all...
                player Why are you still in the school anyway?
                hearts Isn't it obvious? Fell asleep in the class and no one decided to wake me up...
                hearts ?flag hearts aaron; Not even seriousF...
                player Would you like me to walk you home?
                t She pulls her phone out, shaking her head with a sly smile.
                hearts Don't feel like going home yet tho, school wifi's faster than the one at my home you know?
                player And how will you get out once the building is closed?
                t She rolls her eyes, rocking her chair slowly.
                hearts Through the windows duh, not my first time doing that.
                player I see..
                hearts Hey hey hey! I've got an idea! How about you wait here with me so you can make sure I go home safe?
                player What?
                t She pulls her bracelet off, spinning it around her finger slowly.
                hearts Heard me right, just a couple hours, we can talk about stuff or stay quiet if you wish, I really don't mind. Just need some company, it's a little scary here at night-
                t You have your concerns about her choices, and you aren't really sure about wasting a few extra hours in the school but one thing is for certain.<br>It could be an excellent opportunity for you to do your "work"...
                trans cancel; name "Maybe another day";
                trans hearts1; name "Sure why not";
			`);
			break;
		}
		case "heartsIb": {
			writeHTML(`
				hearts Oh! It's you again!
                im evening.jpg
                hearts So, what you say? Are you going to accompany a young lady on her decision to stay here?
                player Why do you even want that?
                hearts <i>Just say yes goddammit!</i>
                trans cancel; name Say no;
                trans hearts1; name Say yes;
			`);
			break;
		}
		case "hearts1": {
            passTime();
			writeEvent(name);
            setTrust("hearts", 15);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "sfw2": {
            setTrust("hearts", 20);
            passTime();
            writeText("You enter classroom B again to look for some students, and find heartsF talking with some.");
			if(checkTrust("serious") > 0){
                if(checkFlag("hearts", "aaron") != true){
                    addFlag("hearts", "aaron");
                }
                writeHTML(`
				    serious And I take it you heard that yourself, correct?
                    hearts Nope I heard it from someone who heard it from someone who heard it from someone who-
                    serious Alright cut it, how am I supposed to trust somethin' that y'all passed to each other like a freaky pyramid scheme?
                    t She shakes her head, checking her phone with a tiny smirk on her face.
                    hearts Boy, what I'm telling you is a damn rumor, you know right? 
                    serious I- Can't you at least-
                    hearts Look here boy, I get your concerns..
                    t She puts her left hand on her chest, raising the other hand and shutting her eyes to put on a look like she's swearing.
                    hearts ...And honest to god, I acknowledge, appreciate, and adore your efforts on this subject, however.
                    t She lowers her hands again, enjoying the moment.
                    hearts <i>You asked me for fucking rumors, boy.</i> I trust who I heard it from, but don't know who told her and who told who told her and so on. You can't have a %100 legitimacy with these.
                    serious So the hell am I supposed to do? Someone says they heard him say it, fuckin' great! But how do I believe they're not lyin'?
                    hearts Just ask him yourself already you <i>coward</i>. Or maybe at least let ayeyeF or someone ask him on your behalf.
                    t He lets out a deep sigh.
                    serious If only I had that much confidence... Why else would I be waiting do you-
                    hearts Because you're a freaking cooooward, you call yourself a poker player yet you're literally <b>shit</b> at taking hints.
                    t You knock on the door before poor seriousF gets chewed on any further.
                    player If I could.
                    serious Oh and if it ain't-
                    hearts Yeah it ain't someone I'm gonna let you blabber around me with. playerF you here for the jackass or the <i>princess?</i>
                    serious Pffff, <i>princess of sewers</i>.
                    hearts <b>T-Try and spread word about that one little seriousF, if I hear about it from just ONE person your "secret operation" goes down in flames, you hear me?</b>
                    t seriousF starts laughing at heartsF, looks like they forgot you're still around.
                    serious Ooo ho ho, stepped on rat's tail haven't I? Anyway I'm gettin' lost, have fun with the counselor.
                    t With that, he leaves you two alone.
                    player And what exactly was that supposed to be?
                    hearts Just.. Something he isn't supposed to know. He likes pissing me off as you can see.
                    player It looked more like you were messing with him the whole time if you ask me.
                    t She sits back on her chair, laughing with a bit of anger that's yet to leave her.
                    hearts Oh please shut up, you don't even know what's going on.
                    player Meh, whatever.
                    hearts Yeah, anyway, what brings you here today?
                `);
            }
            else{
                writeHTML(`
				    ayeye So, that's what you really called us for?! Damnit.
                    diamonds ayeyeF, that's alright you know...
                    t heartsF rolls her eyes, playing with her bracelet while rocking her chair slowly.
                    hearts Listen to the Ms. diamondsL here bae, I'm only doing what you told me to do.
                    ayeye Not in this case you aren't, ugh...
                    hearts Well as I said you only ask me for ru-
                    t ayeyeF puts her finger on heartsF's lips, hushing her softly.
                    ayeye Shh shh shh shh~ I know what a rumor is, so don't try using your funny words with me 'kay? What we're askin' from you is "useful" rumor, <i>bae</i>.
                    hearts Bah, you're treating this whole "Full House" business like we're the fucking illuminati, calm yourself down. What we really are is a bunch of university students that gather info to have a somewhat more bearable life.
                    diamonds That... Is a rude way of putting it but I would say it's correct.
                    ayeye Shut your trap. I know we aren't a serious organization or shit, but at least have some passion for what you're doing.
                    t You knock on the door to make them aware of your presence.
                    ayeye Aye aye girls, ain't that-
                    hearts My way out of here yeah, now <i>bae</i> if you could excuse me...
                    diamonds H-Hold on a second, how exactly do you know *he's here for you?
                    hearts Duh, why would *he come to the class B for class A students?
                    t diamondsF nods.
                    diamonds I'm convinced.
                    ayeye Right, let's get the hell out of here then, catch ya later heartsF! <font size= '-2'>Call me.</font>
                    hearts Sure, sure.
                    t And you are left alone with heartsF as the other two leave the classroom.
                    hearts So, what's up? I mean I'm not trying to do it in the morning if you're here for a treatment like last time's.
                `);
            }
            writeHTML(`
				player Not much actually, didn't have a lot in mind coming here.
                hearts Well, would you mind takin' a stroll with me then?
                player Really now?
                t She crosses her legs and arms, rolling her eyes.
                hearts Don't come if you're busy or something, I'm not gonna hold a counselor captive ya know.
                t She curses under her breathe, slapping her knee.
                hearts !flag hearts aaron; "Ya know", ugh.. ayeyeF's mouth is fucking contagious, speak with her for too long and you'll be corrupted too.
				hearts ?flag hearts aaron; "Ya know", ugh.. ayeyeF's mouth is fucking contagious, I mean seriousF's known her since childhood and they have pretty much the same accent, I actually wonder who passed it to the other...
                player Well then, I'm up for some fresh air.
                hearts Excellent news! Then let's get going already, it's hot as hell here.
                t ...
                t After spending an entire lunch break hanging outside with heartsF and talking more than you thought you would, you finally get back inside the school.
                player ...So how did you even join the "gang"?
                hearts Oh it's easy really.
                im teehee2.jpg
                hearts Because I'm the prettiest lady you can see around this part of the town right?
                player Not sure, you've got some serious competition all around the school, including the boys-<br><b>Agh!</b>
                t She cuts your sentence by hitting your arm.
                hearts <b>TAKE A DAMN HINT!</b> I swear to god..
                player Ughh... Anyway how would being pretty help you be a part of the group?<br>Actually now thinking about it..
                hearts What?
                t You put your hand on your chin, smiling at her confused face.
                player !flag hearts aaron; You and ayeyeF have something going on, don't you?
				player ?flag hearts aaron; It was seriousF who did it, wasn't he?
                t She facepalms.
                hearts !flag hearts aaron; What the fuck? Hell no, where'd you even get that idea?
				hearts ?flag hearts aaron; seriousF is <b>GAY</b>! He likes <b>BOYS</b>! If I tried to flirt with him he'd just tell me to "grab my milk jugs" and get the hell out of his face.
                player !flag hearts aaron; I don't know, calling each other "bae" and stuff..
				player ?flag hearts aaron; Sounds like you speak from experience.
                hearts !flag hearts aaron; Oh so it's gay to call each other bae now? We're just being nice.
				hearts ?flag hearts aaron; Not me, <i>but I've seen a lotta pretty girls try and fail that...</i>
                player !flag hearts aaron; Sure, sure.
				player ?flag hearts aaron; Oh.
                t She quickly walks into the classroom, tilting her head to the side while holding the door.
                hearts Whatever! I'll see you later *sir~
                player Fine then, see you later.
                finish
			`);
			break;
		}
        case "heartsII": { //tying a tie
			writeHTML(`
                t Entering class B again, you aren't even surprised about finding her talking to someone else anymore, they just happen to be doing that.
                hearts ...Aaand, just like this! Got it?
                sports I mean... Why wouldn't I? This is how I already tie my tie.
                hearts You've got the wrong idea babe, the method I use is the same but way I tie it is not as loose as yours.
                t sportsF unties her tie to then tie it again, looking at heartsF with a face you would describe "unamused".
                sports Not sure I follow. I didn't ask you how to tie my tie now did I?
                hearts Oooh don't get too worked up girl, that's just a mere suggestion.
                sports Not trying to be rude, heartsF. But I don't think you're helping at all.
                t heartsF tightens her own tie, giving sportsF a side eye as if she's said something outrageous.
                hearts Won't you even let me finish, girl? What I'm trying to say is-
                sports <i>I think I've had enough, heartsF. Thank you.</i>
                hearts Yo wait..
                t sportsF picks her bag up and gets up before heartsF can even finish her sentence.
                sports Sorry, but I have places to be. Later.
                t You back off the door a bit, letting sportsF walk back to the gym without seeing you, which would mean an unwanted encounter.
                t After she walks into the gym and is out of sight, you enter the class B. heartsF is sitting alone talking to herself quietly.
                player heartsF?
                hearts <i>playerF? <font size= '-1'>Yoooo~</font></i>
                t You notice she hasn't even raised her head yet, and there is a sad tone to her voice.
                player You-you good?
                hearts Man... Do I sound <i>that</i> miserable?
                player You give off that impression, yeah.
                t She shakes her head, then clears her throat to talk again.
                hearts <i>Better now?</i>
                player Yeah that's the heartsF voice I know, but what was up with the last one?
                hearts Pffft, it means I gotcha! I was expecting her to come back, seeing as she forgot her school bag here. So I decided to, you know.
                player Trick her by fake crying?
                t She shrugs, by the wide smile on her face you can tell she doesn't care what you think about her methods.
                hearts I mean I'm doing this for her, so a little <i>trickery</i> shouldn't hurt, right?
                player How exactly?
                hearts You know the girl, she's got quite the uhm.. <i>Bust</i>, and leaving that much cleavage... 
                player Sounds more like you're fantasizing about her.
                t She sits down on her desk.
                hearts Not me, but I've heard some boys that.. Ugh~
                player Yeah, I guess that makes more sense.
                hearts See I give less cleavage, so boys only have my ass to talk about.
                player Is that a good thing?
                t She laughs while adjusting her tie.
                hearts At least I can't see them staring when it's from behind, anyway...
                t She puts her arms on the desk, her mouth curving with a sly smile while she looks at the door over your shoulder.
                hearts If you're available this evening... You know...
                player Did you just switch the topic?
                hearts It's fine when you do it, but we can't huh? What double standards.
                t You let out a deep sigh as she begins celebrating her victory.
                player <i>Honestly, I prefer when I am the one asking.</i>
                hearts You comin' or nah?
                trans hearts2; name Pay her a visit;
			`);
			break;
		}
        case "hearts2": {
            passTime();
			writeEvent(name);
            setTrust("hearts", 25);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "heartsIII": {
            writeHTML(`
				t heartsF said she'd be here today, so you decide to take a peek inside before entering. Well... she's in there alright, but as usual she is not alone.
                hearts You know I've heard about you before, but looks like we were meant to meet today! Hello blondie!
			`);
			if(checkTrust("serious") > 0 || checkTrust("intern") > 0){
                writeText("She ruffles the boy's hair with her hand, laughing.");
                writeSpeech("intern", "", "Ughh can you just back the fuck off pal? I've got work to do here.");
                if(checkTrust("intern") == 0){
                    writeHTML(`
				        t That should be the computer room intern, internF internL, and he is clearly flustered.
                        intern <i>I knew I should've ran while I still had the chance, but oh nooo, internF's gotta be fucking nice today! BAH! I fucking hate this, DAMN IT ALL!</i>
                        hearts Aww! You're flustered! Heheheh... Are you not used to getting your hair ruffled?
                        intern Nnnhhh~ Can you just let me do my work so I can finally leave??
                        hearts No.
                        t internF looks like he's barely holding his tears.
                        intern <b>THE HELL DO YOU WANT FROM ME?!</b>
                        hearts Jeez calm your ti- Wait a second do you really have tits? You sure you are a boy?
                        intern Buddy, ma'am, look... If you think I'm a girl just because of the size of my tits then girl... what you have would make you a <i>fucking cow</i>.
                        t Neither of them say another word for a few seconds but then...
                        hearts <i>...Moo.</i>
                        t And both of them burst out laughing.
                        intern Pfffhah- Aight I change my mind you're cool to stay, but stay the fuck away from my hair alright?
                        hearts Would love to but I gotta blast so see ya later!
                        intern I sure hope not, bye!
                    `);
                }
                else if(checkTrust("intern") > 0 && checkTrust("intern") < 666 && checkFlag("intern", "hate") != true){
                    writeHTML(`
				        t Poor internF... Though there is little you can do to save him now, you can still hope he manages to survive with heartsF.
                        intern <i>I knew I should've ran while I still had the chance, but oh nooo, internF's gotta be fucking nice today! BAH! I fucking hate this, DAMN IT ALL!</i>
                        hearts Hope you don't mind me being here internF, I'm just-
                        intern I do mind, I hate it when people touch my hair. At least without my consent...
                        t She laughs.
                        hearts Awww I'm sorry then, but can you tell me what you use for your hair? Because boy it's so damn soft!
                        intern I use shampoo.
                        hearts A-Alright... What about your eyelashes? They look pretty so you must be using- 
                        intern <i>My own fucking tears.</i>
                        t She puts her hand on her chin.
                        hearts Well, how much for a bottle of your "own fucking tears" then? I can pay.
                        intern If you keep standing that close, your perfume will burn my eyes enough for me to start crying.
                        hearts Sounds like a you problem, pretty boy.
                        intern Well... Thanks for the compliments I guess? But c'mon pal, I'm busier than I look right now.
                        t heartsF checks her watch and nods.
                        hearts Well, I will see you later then.
                        intern You don't have to...
                        hearts I will.
                        intern No fair...
                    `);
                }
                else if(checkTrust("intern") >= 666){
                    writeHTML(`
				        t It's actually quite enjoyable to watch the "mighty" demon prince flustered like that in front of a mere human, but deep down you pity him. heartsF is a walking nightmare for easily embarrassed people like internF himself.
                        intern <i>Why does it have to be me? She could've talked to neetF instead! I mean at least she could try I think. It's been some while since I started working here and we had like... Huh? Actually I think neetF talks to me way more than the other students... I wonder if she considers me to be her friend? Naaaah.</i>
                        hearts What's the matter pint sized man? You look dreamy.
                        intern Pint sized..? Girl you hang with seriousF, that motherfucking simp is the same size as I if not less!
                        t heartsF laughs.
                        hearts "Simp" huh? So you know his little secret huh?
                        intern Who the fuck doesn't? Everytime bro sees nagatoroF he looks starstruck, with that dumb smile on his stupid face too, ugh.
                        hearts Ay! We've got an official seriousF hater here! I didn't think there were many of you.
                        intern I don't hate him, we just... don't get along very well...
                        t heartsF touches her chin.
                        hearts Are you jealous or something? Ohh ohhh don't tell me! You're into nagatoroF too and you're jealous he has more of a chance than you do! Am I wrong?
                        intern Dead wrong. No scoop for the rumor queen today, I already got a boyfriend waiting for me at home so nope, I have no reason to simp for the crossdresser.
                        hearts You got a what?
                        intern Your "boyboss" knows of him well, why don't you ask your "boyboss"?
                        hearts internF... boyboss..?
                        t She laughs.
                        hearts Alright then, I'm convinced you aren't a threat for seriousF's "secret".
                        intern nagatoroF sits two seats next to mine, if I wanted to spill the beans I already would've. <i>But deep down, I kinda want that fucker to succeed... Ya know? I think he deserves that.</i>
                        hearts Ooooh... Alright then, I guess I will see you later.
                        intern Finally... bye!
                    `);
                }
            }
            else{
                writeHTML(`
				    t Although you hear another boy's voice from inside the room, you can't really figure who it belongs to, and after a while you finally hear them saying their goodbyes.
                    player <i>Finally, it's about damn time.</i>
                `);
            }
            writeHTML(`
				t You get face to face with her the moment she leaves the computer and turns around.
                hearts And well whaddya know, have you been listening to us? If you're practicing to be a part of "Full House" I regret to inform you but we already got an eavesdropper, right diamondsF?
                t You hear some footsteps from across the hall as a figure runs away...
                player How do you-
                hearts Pfft... I didn't know she was there, it always amazes me how much you can do by just <i>bluffing</i>.
                t She puts her hands on her hips, her eyes locked onto yours.
                hearts But... I'm sure you already know that, don't you? Sometimes, it doesn't matter whether you can or cannot achieve what you are trying. <i>Mind finishing my sentence?</i>
                player I guess what you're going to say next is... "All you have to do is convincing enough people that you can do it." or something like that, am I right?
                hearts Couldn't have said it better myself!
                player Well now, if you are done asking questions I'd love to-<br><i>You've gotta be fucking kidding me.</i>
                t She's holding a condom between her fingers while snickering.
                hearts Aww, we both know you don't stick around just to say 'ello to little old me. So how about we cut to the chase before I return to boasting about myself?
                trans hearts3; name Continue;
                trans heartsIIIb; name Let her boast;
            `);
			break;
		}
        case "heartsIIIb": {
            var today1 = new Date();
			var dd = String(today1.getDate()).padStart(2, '0');
			var mm = String(today1.getMonth() + 1).padStart(2, '0'); //January is 0!
			today1 = mm + '/' + dd;
            if(today1 == "07/31"){
                addFlag("hearts", "bday");
                writeHTML(`
                    player You know what, go ahead, <i>boast</i>.
                    hearts Wh-Whuh?
                    player I'm in a good mood today, so I don't mind if you praise yourself a little more.
                    t She looks down for a second and then back up, you can see her confusion in her eyes.
                    hearts I... Alright? I'm sorry it's just... I'm not very familiar with responses that don't derive from "shut the fuck up", you know.
                    player I'm a counselor, listening is half of my job, even when I'm talking to a narcissist. Also, <i>there might be a special reason for that too...</i>
                    hearts And that is?
                    t You laugh at yourself, barely holding yourself from acting like you are in a party.
                    player It's July 31st isn't it? Soo.. happy birthday heartsF!
                    hearts Oh my god... You knew???
                    player Well, I had checked that part of your file so-
                    t You feel her arms wrap around you tightly as she gives you one of the tightest cuddles you've ever received. That... isn't the type of physical contact you seek but oh well, it's nice to have this kind of feeling every once in a while.
                    hearts You earned that hug ya know, when it's friends that is something to be expected. But yeah in your case it means a lot more to be cared for I guess, thank you.
                    player Well, I'm still yet to see you boast.
                    hearts <i>How about I boast about how much I make you cum today instead huh?</i>
                    player That's not the type of birthday gift I'd ask for but you do you, lead the way.
				    trans hearts3; name Continue;
                `);
            }
            else{
                writeHTML(`
                    player You know what, go ahead, <i>boast</i>.
                    hearts Wh-Whuh?
                    player I'm in a good mood today, so I don't mind if you praise yourself a little more.
                    t She looks down for a second and then back up, you can see her confusion in her eyes.
                    hearts I... Alright? I'm sorry it's just... I'm not very familiar with responses that don't derive from "shut the fuck up", you know.
                    player I'm a counselor, listening is half of my job, even when I'm talking to a narcissist.
                    hearts Well, I'm pretty.
                    t You wait for her to continue for a while, but she doesn't say anything.
                    player Is that-
                    hearts Yep that's all, I realized I am too horny to think of anything right now.
                    player To your home then?
                    hearts To my home.
				    trans hearts3; name Continue;
                `);
            }
			break;
		}
        case "hearts3": {
            passTime();
			writeEvent(name);
            setTrust("hearts", 30);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "heartsIV": {
			writeHTML(`
				t This time, surprisingly enough, heartsF is all by herself in the classroom. Sitting on her desk while spinning her bracelet around her finger, she doesn't seem to have noticed you come in.
                player Boring day is it?
                t She keeps spinning the bracelet around her finger without raising her head.
                hearts The other way around actually, it was quite an eventful day.
                player Mind sharing what happened?
                hearts I don't see why not. 
                t She sighs deeply, getting her bangs out of her face still without raising her head.
                hearts Y'know, when you spend too much time with sketchy people to listen to rumors they know, it eventually turns back to you.
                player I'm not sure I understand.
                hearts Well... some of the whores from school, specifically some that don't like me much, have apparently seen us leave the school together a few times.
                player So what? I could very well be escorting you home.
                t She laughs.
                hearts Tch, not that easy. Looks like the assholes followed us all the way home, imagine how happy they got when it took you hours to leave my home. You get what I'm saying?
                player I think?
                hearts It didn't even take em a whole day to share their "story" with half of the school, and believe me it snowballs too, especially after they learned that you are a counselor.
                t She throws the bracelet up to catch it in her hand.
                hearts "heartsF is getting herself piped by one of the counselors", they are like fucking vultures whenever there is something to make scoop about.
                player I don't understand half of the words you said but I think what you mean is that there are rumors about us, did I get it right?
                hearts There is a rumor going on, yeah. And that's where my little friend group comes in.
                t She raises her head with a wide smile spreading on her face.
                hearts Normally, that kind of a rumor could ruin both my and your reputation in the school. I would be too ashamed to even talk to anyone ever again.
                player And what does your friend group have to do with it?
                hearts Let's say we altered the story a little... If Ms. principalL asks, you were helping me study for the chem exams. We even have reports on my progress written by yourself!
                t She opens her backpack to pull out a few sheets from a notebook, upon closer look you realize that these are actually study reports in your handwriting.
                player W-What the? Isn't this forgery?
                hearts I don't see what's wrong with it. All you have to do is show Ms. principalL these reports and tell her how our studying sesh is coming along. Just give em a read and you'll be set to lie perfectly!
                player I... What's the point of this?
                t She sighs.
                hearts Lemme summarize the whole deal thing for you alright?<br>Okay so a few girls that don't like me tried spreading the word we are either dating or fucking at my place after school, and of course the word eventually reached us. So we reached the other girls you helped "study", made our way to the principal's office with them and stated our complaints about the ruthless slander on ourselves and our <i>devoted</i> tutor. Then <i>somehow</i>, obviously without our help, Ms. principalL found the culprits behind spreading those gutless rumors about her newest counselor.
                t She pauses for a second.
                hearts And guess who is getting expelled for "serious defamation" and "non-tolerable implications" about you and several other students. Ha!
                t You watch her laugh proudly about her schemes.
                player So wait, you got a group of girls expelled out of the school just because they spread a rumor about us?
                hearts Yup, and once you give those "forged" reports to Ms. principalL you're golden! With your status proven as a trustworthy tutor, people won't think about it twice when they see you leave with another girl or boy, and even if they do they would need solid evidence to put dirt on your name. 
                t She opens her arms as if she just presented you a magic trick and laughs.
                hearts And that's what Full House is for! 
                player I think I'm beginning to like your little friend group, thanks for the alibi I guess.
                hearts Don't sweat it, but hey. <i>You down for some more "studying" after school?</i>
                player Heh, now you're talking.
                trans hearts4; name Continue;
			`);
			break;
		}
        case "hearts4": {
            passTime();
			writeEvent(name);
            setTrust("hearts", 40);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "heartsV": {
			writeHTML(`
				t Entering the classroom, you find heartsF sitting by herself once again. She's holding a tiny mirror in her hand, playing with her hair.
                player It's started feeling odd to see you all alone in here, heartsF.
                hearts ayeyeF and diamondsF were here just a minute ago, we talked about this whole "confession" thing, ayeyeF said I was a "major fucking dumbass" for letting that slip out of my mouth. diamondsF however was baffled.
                player Huh? Why was she?
                t She giggles without raising her head.
                hearts Apparently she thought ayeyeF and I were already "kind of dating", which we had considered at one point but never made happen. So we just pointed at her and laughed our asses off at her until she cried.
                player What.
                hearts Of course I'm kidding, duh. We didn't make her cry we only laughed a little, she even laughed with us though shyly.
                t At least they don't treat their shy friend like trash, you may be a counselor but even you wouldn't want to deal with such a case out of nowhere.
                hearts Anyway, I was thinking of dying my hair, do you think I should go ahead and dye it all blue? Maybe I should dye it black and have only one of my bangs dyed white? 
                player What made you even consider that?
                hearts I've been rocking the same color for three months by now, I'm bored.
                t She puts the mirror down, looking in your eyes with a tiny curve on her lips.
                player So, at your place again?
                hearts So that's all I am to you? We only have a little chat and the first thing you think of is to fuck? 
                player Yeah it is.
                hearts Same, let's go.
                trans hearts5; name Continue;
            `);
			break;
		}
        case "hearts5": {
            passTime();
			writeEvent(name);
            setTrust("hearts", 50);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "sfw3": {
            setTrust("hearts", 51);
			writeHTML(`
				t You decide to look for heartsF again, so you make your way to her class. However, to your surprise, her seat is occupied by someone else today.
                player ayeyeF?
                ayeye Ayeye, that's me! What's up?
                player I can see that much, but what are you doing here?
                t She shakes her head.
                ayeye Don't get all mad with me now eh? I'm just enjoyin' my recess, I even got some cookies! I mean they're not chocolate chip but they'd do the job, ya want some?
                player No I'm no- Actually you know what that doesn't sound half bad, I'll take one. She's gonna come back here sooner or later anyway won't she?
                t You take one of the cookies she's offering, it's a little hard to name the taste but you're pretty sure there are some walnuts in what you're eating.
                ayeye diamondsF's bakin', she's pretty good at that stuff ya know?
                player Well my compliments to the chef then, these are pretty good.
                ayeye Aye thanks! Anyway, ya lookin for heartsF aren't ya? She's in class A right now if you really gotta see her. But lemme say, <i>she's lookin' a lil different than before.</i>
                player What's that supposed to mean?
                t She takes an apple out of her bag and takes a bite.
                ayeye Why don't you go find out yourself? I'm busy eating.
                player ...Is there any chance you have a spare apple you can give me?
                ayeye Course I do, catch!
                t You catch the apple and take a bite, waiting for a little snack can't hurt now can it?
                player Thanks ayeyeF, enjoy your meal!
                ayeye Aye thanks!
                trans sfw4; name Find heartsF;
                trans cancel; name Look for her later;
            `);
			break;
		}
        case "sfw4": {
            setTrust("hearts", 55);
            passTime();
			writeHTML(`
                t You take a step inside the classroom A, however your blue-hair-tipped friend is still nowhere to be seen.
                player <i>Now where is she? I can't see any of her friends to lead me to her this time.</i>
				sp hearts; im images/none.png; altColor #F59FB5; Looking for someone? 
                t You turn around, yeah that's her voice alright but that's not the type of the change you were expecting.
                im oo.jpg
                heartsa Well hope I am who you're looking for cause I wanna know if I look pretty.
                player I think you do, yeah.
                im teehee4.jpg
                heartsa Good, you're who I wanted to impress anyway so if you think I look cute it means I look cute!
                t Having a second look at her, you notice more changes than just her hair. Her bracelets, her tie, her earrings... 
                player I mean you were already cute before.
                heartsa Thanks for the compliment but I got really bored of that old look, ya know.
                im teehee3.jpg
                heartsa It's like being a new heartsF! I am not saying I was bad before, but I am a new me and I think that's pretty cool, I love to dye my hair every once in a few months.
                t She laughs.
                heartsa The original color is plain black tho, before you ask. Anyway what made you wanna see me here?
                player I actually wanted to talk to you about your confession from earlier, remember?
                heartsa Oh! That... Will I be held accountable for that?
                t You nod.
                heartsa How about no? I-I mean I am not backing off I was honest with what I said it's just...
                player Let me guess... Not feeling ready for the commitment?
                heartsa I think so, <i>yeah.</i>
                t You look at the pendant in your chest pocket, then in her eyes.
                heartsa You're thinking of using some "extra help", aren't you?
                player You can't just knock it-
                heartsa ...I'm okay with it, as long as you can make me feel ready for that.
                t You hold the pendant in your hand and look at her again, her body looks relaxed as she starts breathing deeper.
                player <i>Is she really preparing herself for it? She looks a little calmer right now and possibly more open to suggestions but...</i>
                t And just before you can start your session with her you hear a bell ringing, marking the end of recess.
                heartsa Well dammit. We can do this later then?
                player Fine by me, how about after school today?
                heartsa Err... Sorry, I kinda promised ayeyeF I would take her and diamondsF out after school. But tomorrow is okay!
                player Alright then, see you later!
                heartsa See ya! Oh and we don't have to hurry this up ya know, we can just keep our status as friends with benefits if you want.
                player I'll think about that later, bye.
			`);
            writeFunction("changeLocation('classroomA')", "Finish");
			break;
		}
        case "heartsVI": {
			writeHTML(`
				t It has been a while since you began your wait in here, right in front of the front door, watching as students leave the school one by one. You know she's supposed to be out by now but still no sign from her.
                player <i>heartsF... Where are you this time?</i>
                t You decide to wait a little longer, after all she said she'd come and you don't want to look like you don't trust what she says. Though, with the sun closing on in the horizon, you can't help but feel a little worried.
                heartsa Would be a shame if I hadn't come wouldn't it?
                im hiya.jpg
                heartsa But you aren't getting rid of lil' old me that easily, what's up!
                player Hey heartsF! Don't mind me asking but what took you so long?
                t She shrugs, pointing at a small room with the back of her hand.
                heartsa Nothing important, they just called me in for club gathering stuff after class. Sorry for making you wait!
                t Come to think of it, you recall her being a part of a drama club.
                player Drama stuff? I thought that kinda stuff was exclusive to the high schools, not universities.
                im heya.jpg
                heartsa We asked Ms. principalL nicely and she allowed us to have a drama club, after all it's some nice, harmless activity. And I'm pretty good at it too!
                t As much as you want to go home for now, you feel like letting her talk a little more would be fun, especially given her hand gestures and obvious excitement talking about her hobby. 
                player Heh, would you like to tell me more about that? I kinda wonder how good my little actress can act.
                t You see her face turning beet red as you say that, and maybe for the first time, her breaking eye contact so quickly to look away, hiding her face between her hands.
                heartsa <font size= '-1'><i>"My little actress" Oh my gosh~</i></font> 
                t She turns around to face you again, looking at you directly in the eyes just like that last part never happened.
                heartsa I know what you're trying but it's not going to work, if anything I think we should get home before they lock us in here.
                player Fine by me, lead the way then.
                t ...
                heartsa And here we are! Hello home!
                im teehee5.jpg
                heartsa It says hi back to us!
                player Pfft, hi heartsF's home, nice to see you again.
                heartsa Yaaay you didn't bully me for that!
                t She laughs a little with both her hands on her hips.
                heartsa Anyway, time to be serious so no more jokes. Now tell me how does that work again.
                t She pulls the pendant out of your pocket and starts dangling it in front of her own face, her eyes following the swinging tool. Her breathes become slower and deeper and her eyes widen before she passes it back to you.
                heartsa I think I kinda like this, yeah.
                player Alright then. Now try to relax, you can do this right?
                t She nods before relaxing her body and closing her eyes, you can even hear her hum to herself softly. You sit next to her and listen to her with one arm over her shoulders (which she doesn't seem to notice), you can barely hear her humming as she lets her head rest on your shoulder, after a few minutes of that she finally stops to open her eyes.
                heartsa I... I feel much better now, thank you.
                player Huh? I haven't- 
                heartsa I know you haven't done anything, that's what I'm thanking you for. Just letting me calm down and rest my head on your shoulder...
                t She smiles brightly, pulling you in to kiss you on the cheek.
                heartsa I thought for sure you wouldn't wait once I was ready for a trance... I've never been so happy about being wrong before.
                player So you think you're ready for "commitment"?
                t She shrugs with her hands on her thighs, gently squeezing them herself.
                heartsa I think I'm fine with it, as long as...
                player Yeah?
                heartsa Can we do this more often? It was so soothing for me...
                player Sure, I see no reason not to.
                t She wraps her arms around your neck, cuddling you tightly.
                heartsa Then now for sex! Right?
                player Right now?
                heartsa Eh? You got a problem with that? You helped me feel good I'll help you feel good, I think it's just fair, anyway...
                im 6f.jpg
                heartsa I think we earned that~
                t Sure you did, if she's so eager to love someone like yourself she would better get used to this anyway.
                im 6g.jpg
                player I think you are doing this to reward yourself rather than me though?
                heartsa How about you stopped thinking and started feeling? Would be more fun that way ya know.
                trans hearts6; name Continue;
			`);
			break;
		}
        case "hearts6": {
            passTime();
			writeEvent(name);
            setTrust("hearts", 80);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "heartsVII": {
			writeHTML(`
                define student1 = sp Student 1;
                define student2 = sp Student 2;
                define student3 = sp Student 3;
                t Inside the classroom B you find heartsF surrounded by a group of students you cannot recognize very well, talking loudly about something.
                student1 Now isn't that a trouble huh?
                heartsa Don't really think so, it barely inconveniences us if you ask me.
                student2 How come? How can you sound so confident?
                t heartsF giggles, pointing at the student groups scattered around in the class.
                im left.jpg
                heartsa You know we can just keep our mouths shut when she asks, right? And it's not like she can get any word out of those dimwits eh? I mean we don't know much more than they do but-
                student3 Sounds to me like you're just bullshitting to us, heartsF. I'm sure you had something to do with that damn urghh... thing!
                heartsa Believe in whatever the fuck you want Annie, but I've got nothing to do with that "thing".
                t You clear your throat, all of the students including heartsF turn their heads to your side immediately.
                student2 Yo heartsF, ain't that-
                heartsa Yep, *he's the reason I passed that last chem exam.
                im right.jpg
                heartsa But what brings you here now, <i>*sir?</i> Is it another schedule change?
                player Err- Oh right, it is, could you come with me for a sec?
                t Her efforts to play it cool around you and her friends is remarkable, you have to admit. The tone in her voice was enough to convince you you actually tutored her for a moment, quite the performance from the shining star of the drama club huh? 
                heartsa Well then girlies, I'll be right back.
                student3 And there goes the whore, smile and wave girls!
                heartsa <b>GO TO HELL!</b>
                t ...
                player Alright, what's the commmotion about?
			`);
            if (checkTrust('president') > 80){
                writeHTML(`
				    heartsa You know that "piece of art" hanging over the entrance, right? The nude of presidentF. 
                    player It's hard not to know about that one, how do you feel about it as a student?
                    t She laughs.
                    im heya.jpg
                    heartsa It feels like a dictator-ette staring over us and judging with her tired eyes while also being butt booty naked, it's fucking ridiculous but I love it.
                    player Good to know, and how exactly is the commotion inside linked to the portrait, if I may ask?
                    heartsa Eh, no biggie. It's just some of the girls are anxious about the pictures they took, they're afraid of what happens if Ms. principalL finds out.
                    t You shrug and shake your head, the answer is pretty obvious.
                    player Well principalF views it as fine art, so taking pictures of it should not be a problem, I guess.
                    heartsa That's what I've been saying, tho I'm pretty sure Annie'll somehow use it to get off and is already feeling guilty about it. I'm gonna calm em down tho, leave it to me.
                    player Heh, looks like you've got the things under control huh? 
                    t She tries to hide her blush by looking away.
                    heartsa How about we link up at my place after school? My spare keys are in your pocket just in case.
                    player What do you mean they a-
                    t You check your pockets and actually find her keys inside there.
                    player ...Huh?
                    heartsa Sleight of hand nothin' big, see you there!
                    player Alright..?
                    t And she runs off, leaving you alone in the hallway.
                    trans hearts7; name Continue;
                `);
            }
            else{
                writeHTML(`
				    heartsa Oh no biggie, just a problem in the class that WE had nothing to do with, I am innocent I swear.
                    player If you say so.
                    t She stretches her arms.
                    heartsa Anyway, since I'm talking with girlies right now I can't come over yet, how about we meet at my place after school?
                    player Fine by me.
                    heartsa See you there then! I better get back before they start getting dumb.
                    player See you there!
                    t And she runs off, leaving you alone in the hallway.
                    trans hearts7; name Continue;
                `);
            }
			break;
		}
        case "hearts7": {
            passTime();
			writeEvent(name);
            setTrust("hearts", 90);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "heartsVIII": {
			writeHTML(`
                t You look into the classroom for heartsF again but once again she's nowhere to be seen, and just as you decide to turn your back and leave-
                heartsa Hey! Time to get out of that thought bubble! You look dreamy.
                t ...What thought bubble? Anyway there she is standing in the middle of the hallway with one of her hands on her waist like usual, her lips curving for a wide smile the moment she notices you.
                im heya.jpg
                hearsta For me again? Do you want me again? I'm not busy at all today you know? Can we go already I'm so bored!
                player Not a second to waste huh?
                heartsa Not a single second to waste, I am not going to sit here and wait all day!
				trans hearts9; name Sure, let's go;
                trans heartsVIIIb; name Reject, you have other things to do;
			`);
			break;
		}
        case "heartsVIIIb": {
            setTrust("hearts", 91);
			writeHTML(`
				player Sorry, I've got other things to do.
                heartsa Aww... What about a hour later or one and a half? Or two maybe?
                player No cigar, I'll go home after this.
                t The tone of her "awww" makes her sound disappointed with your answer, however her facial expressions don't change at all, she's smiling brightly as ever.
                heartsa If not today, then tomorrow. If not tomorrow, then the next day. <i>I know you'll come back for me at some point though.</i>
                player Don't worry about it.
			`);
			break;
		}
        case "hearts9": {
            passTime();
			writeEvent(name);
            setTrust("hearts", 100);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}    
        case "postQuo": {
			writeHTML(`
				heartsa Heyyy I'm right here!
                im right.jpg
                heartsa Don't make me miss you eh? Make sure you keep payin me a visit from time to time.
                player Hey, don't make it sound like you are that easy to forget.
                heartsa <i>Fucking flatterer...</i> Hehehehe~
                trans hearts6b; name Blowjob repeat;
                trans hearts9b; name Climax repeat;
                trans heartsFinalePrompt; name About her love;
                trans cancel; name Maybe later;
			`);
			break;
		}
        case "hearts6b": {
            passTime();
			writeEvent(name);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "hearts9b": {
            passTime();
			writeEvent(name);
            writeFunction("changeLocation(data.player.location)", "Finish");
			break;
		}
        case "heartsFinalePrompt": {
			if(checkFlag("hearts", "proposal") != true){
                addFlag("hearts", "proposal");
                writeHTML(`
				    player Actually, I would rather talk about your uhm... How to put it... Love, yeah.
                    heartsa What of it? I mean.
                    t She looks down with her hands on her thighs, she's looking genuinely upset for the first time since you laid eyes on her.
                    heartsa ...I mean, if it troubles you, if it's not mutual... I'm okay with giving up on love. But can yo-
                    player What the fuck are you talking about? Why do you act like we just jumped out of a damn romance novel I never said anything about wanting that.
                    heartsa Oh? 
                    t You put your hand on her shoulder, she raises her head to look at your hand and then your face.
                    heartsa So... You don't mean..?
                    player Heh, hope you have enough money for a double bed that's what I mean.
                    t She wraps her arms around your neck and begins jumping in her place, making happy little noises.
                    heartsa SURE! Sure, don't worry about it! I can help you move too it's just... Weeeeee!<br>Alright then, do we go now? I mean I had promised ayeyeF that we'd go to the movie theater today but she can just fuck herself if this is the case.
                    player Poor ayeyeF...
                    heartsa She'll be fineee, so what now? Are we really going to do this?
                    trans heartsFinale; name Sure;
                    trans cancel; name I have more to do, not yet;
                `);
            }
            else{
                writeHTML(`
				    heartsa Oh yeah, have you decided yet? I have an empty room for you at home, not that you'll need to use it as a bedroom but maybe a home office you know.
                    trans heartsFinale; name Let's do this;
                    trans cancel; name Later, I promise;
                `);
            }
			break;
		}
        case "heartsFinale": {
			writeHTML(`
				player Well let's get to it then, we don't want to waste much time here anyway do we?
                heartsa We don't! To be fair it'll probably the first and last time I see your home anyway.
                t She pulls her phone out and starts typing something quickly.
                player heartsF? What are you doing?
                heartsa See for yourself! Hey there ayeyeF!
                t You turn around to see ayeyeF standing in the doorgap.
                ayeye Aye hey there to ya too! So why'd you call me here for? Getting that ring put on your finger already?
                heartsa No no not yet, I just called you cause I need your car, me and playerF are moving together ya know.
                player Hey ayeyeF-
                ayeye Ayeee now that's cute! If only the boyboss had half of the luck you've got. Well catch!
                t heartsF catches the car keys thrown at her and winks at her friend.
                ayeye Bring it back in one piece tomorrow will ya? If I see a single scratch on my car I'm pegging the life out of your *man.
                player EH?!
                heartsa Pfft, in your dreams bitch. C'mon playerF let's go.
                player I sure hope you know how to drive...
                t She laughs.
                heartsa <i>Me too.</i>
                t ...
                heartsa Let's see, this is the last box right?
                im teehee5.jpg
                player Seems like it, yeah.
                t It's been several hours since the two of you left your old house, the room she gave you for your stuff is not really that big but oh well, no more rent!
                heartsa Thank god, I'm used to getting tired with you but normally I would expect some pleasure along with it.
                player Eh? Weren't you the one who wanted a relationship? Of course a relationship is more than just fucking all day every day.
                t She rolls her eyes and puts her arms around your neck again, landing a tiny kiss on your cheek.
                heartsa Being able to tell you that I love you without any shame is damn well worth it, you know. That's the life I choose.
                im idlea.jpg
                player We'll see if you will be so confident with your choice once you have a taste of my cooking.
                heartsa Is it that bad... Oh well, guess no one can be flawless.
                t You laugh a little, then point at the boxes on the floor.
                player And what will we do with these boxes? 
                heartsa Leave them there, we can do the unboxing later.
                t She tugs on her on skirt, blushing while rubbing her thighs together. At this point you don't even need her to tell you how horny she is, but it wouldn't be fun if she didn't say it herself right?
                heartsa All that work, I guess I got a little... Aw nevermind I can't come up with a clever pun, can I just ride your dick?
                player Can't lie, having you bend over in front of me that many times was kinda hard for me too~
                heartsa And in all of them I was expecting to be groped, gosh you really can't take a hint can you?
                t You give her a good groping right there, making her yelp quietly.
                player Happy now?
                heartsa Mmmh no, you have to go for it.
                player ...Would rather just fuck you at this point.
                heartsa Then how about you do just that! I deserved a good pounding for all my help with carrying the boxes didn't I?
                trans heartsEnd; name Continue;
			`);
			break;
		}
        case "heartsEnd": {
            passTime();
			writeEvent(name);
            writeFunction("writeEncounter('completion')", "Months later...");
			break;
		}
        case "completion": {
			writeHTML(`
				player I sure expected something else when you said we'd go on a "date" but I guess this is okay too.
                hearts Hey, it's not like we can't have a date in our own home right? And the food is still from outside so it counts!
                t Yep, she had dyed her hair back to the same color as you first met her, it took her three months to come up with that decision but she did it. And now she is standing right next to you while you're sitting on the dinner table lit by a single red candle that's kinda obsolete since the lights are already on. Well, planning this kind of stuff was never her thing.
                hearts How was your day at school hun? I think you're making good progress, I've recently seen Ms. principalL with a shorter skirt than usual so I guess that's a thing?
                player Yeah kinda, I had a good day by the way but... Why are you not sitting down?
                hearts Well... Hehehe~
                t You are not sure you like this giggle.
                hearts I've got something to tell you.
                player I gathered that much, go ahead then.
                hearts Uhmmm... I've kinda fucked up big time you know.
                t You sigh, it's not her first time but you were expecting a better type of "news", not dealing with her problems at school. Especially with all the students that still need your attention.
                player What did you do this time, princess?
                hearts Uhmm... I may have forgotten to take my birth control for the past two months and...
                im profile.jpg
                hearts Well, guess who's going to be a mommy.<br>IT'S ME!
                player Oh thank you for clarification, I thought I was pregnant for a moment there.
                hearts <i>I love you, you jerk.</i>
                t Well this is just great isn't it? You're going to be a father? Surely that's your first but it doesn't have to be your last, especially considering how heartsF is using her friends from "Full House" to help you pick new targets almost everyday. With their help and her considering to step up as an assistant, you're sure you have a lot of fun waiting for you ahead. Though for now, unfortunately, this is...
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
	{index: "hearts1", name: "Staying the night shift"},
    {index: "hearts2", name: "Unpaid overtime"}, 
    {index: "hearts3", name: "Introduction to power mechanics"}, 
    {index: "hearts4", name: "Rinse repeat"},
    {index: "hearts5", name: "No going back"}, 
    {index: "hearts6", name: "New looks same girl"},
    {index: "hearts7", name: "Advanced power mechanics"},
    //{index: "hearts8", name: "Override"}, CANCELED
    {index: "hearts9", name: "Beyond broken"},
    //{index: "hearts10", name: "Eager to finish"}, CANCELED
    {index: "hearts6b", name: "Can't have enough"},
    {index: "hearts9b", name: "Playing with a broken toy"},
    {index: "heartsEnd", name: "Horny ever after?"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "hearts1": {
			writeHTML(`
				hearts Yay! You made the right choice *sir! I really needed someone to talk to.
                player Okay then, let's hope I'm not too dry for you.
                hearts Pfft, you <i>can't</i> have a dry chat with me, don't you worry.
                player Well, how long will it take?
                hearts Maybe an hour, maybe two, then we walk home!
                player Fine..
                t ...
                t After a quite interesting conversation with heartsF you notice the sun going down the horizon, making it probably your first time seeing the night sky from inside the classroom windows.
                player Should we get going by now?
                im night.jpg
                hearts I don't know, I've had my fun I guess.. Unless there is some "fun" you might add?
                t You slowly reach and pull out your pendant, thinking it would be a good time for you to work your "art".
                hearts Wh-What's... Aww c'mon! You only had to say!
                player Excuse me..?
                t She throws her head back, only to put it on your lap after.
                player H-Huh?
                im 1a.jpg
                hearts Look, if you're too desperate to dangle something into my face, there is a better option than a freakin' pendant, get what I'm saying?
                player ...Can't say I wasn't expecting that, <i>but jesus.</i>
                hearts Breathe in, breathe out...
                im 1b.jpg
                hearts <i>Let it throb a little more~</i>
                t She sticks her tongue out, her eyes widen as she slowly moves it on your length, rubbing her thumb on the end to help make you feel better.
                hearts No regrets staying for the night shift huh?
                player Nnn- I don't know why you're even doing this...
                hearts Why? Isn't that what you wanted? I have no reason not to anyway~
                im 1c.jpg
                player "I'm doing it because I can"?
                hearts Saves you the trouble doesn't it? You don't have a reason to complain.
                t You can tell she's taking this seriously, with her thumb still moving on the base of your shaft and her tongue twisting around the head.
                player ...
                t She pulls it out of her mouth, slowly stroking you with her hand while catching her breath.
                hearts You can... Let it out inside, just so you know, alright?
                t She doesn't lose another moment, taking it back in her mouth.
                player heartsF...
                hearts <i>Just go ahead, I want it to be unexpec-</i>
                im 1d.jpg
                player Nnh-
                hearts ...
                t You can hear her softly humming to herself while cleaning around your cock with her tongue.
                im 1e.jpg
                hearts So, how was I..?
                player ...I'll say pretty good.
                im 1f.jpg
                hearts That much is fine, <i>for now.</i>
                t She gets back up, stretching her arms a little.
                hearts Now, let's go home before it's too late, right? Can't wait to meet you again!
			`);
			break;
		}
        case "hearts2": {
			writeHTML(`
                t ...
                t She turns the key and welcomes you in her home, it's not big, yet tidier than you'd expect.
                hearts Take a seat, take a seat please!
                player And what's the hur- oh.
				im 2a.jpg
                hearts Because today <i>you are the seat</i>.
                player I am no furniture you know. At least you aren't heavy...
                t She shakes her head, looking disappointed.
                hearts Hey, not everyone gets to be my seat. Be a little grateful maybe?
                player You'd need to give me more for that.
                hearts Ooooh greedy...
                im 2b.jpg
                hearts <i>How about this, then?</i>
                player <i>Much better.</i>
                im 2c.jpg
                hearts Mmm~
                t There is something about her, it's not the same as last time anyway. Last time she was on the lead, now it's you.
                im 2d.jpg
                hearts <i>Bring it back~</i>
                im 2e.jpg
                t You feel her nipples harden between your fingers as she twirls her tongue around yours.
                im 2f.jpg
                hearts <i>Haa~</i>
                t She giggles a little, lowering her face.
                hearts T-That wasn't an invitation for you to pucker up.. Not that I'm complaining but-
                t You can see her blush a little.
                player Seriously? After all we have done and all we're planning to do, you get flustered over a kiss?
                hearts I'm not very familiar with the idea of being kissed, leave me alone.
                t You hear her snickering as you lower your hands from her breasts to her panties.
                im 2g.jpg
                hearts Heh... You might need one of these.
                t You look at the condom in her hand.
                hearts Don't ask where I pulled that from, it's <i>magic</i>.
                t You let her help you put it on, though she can't resist the temptation for giving you a little stroke before you lay her down.
                im 2h.jpg
                hearts Ghhh- You brute!
                player Weren't you just ask-
                hearts <i>And who said I was complaining?</i> Keep up!
                im 2i.jpg
                hearts Haaah~ Y-Yeeeehsss...
                player Better this way huh?
                hearts Prudes really have no idea what they are missing out on..
                t After a few minutes you feel yourself reach your edge.
                player heartsF I-
                hearts <i>Do it, you're safe anyway just do it!</i>
                t You thrust yourself all the way inside her, making her yelp a little before you let out your load.
                im 2j.jpg
                hearts Oh my... I can feel it through the thing...
                im 2k.jpg
                hearts We ain't done yet, right?
                player Aren't you satisfied yet?
                t She gets on her knees, your cock near her face as she pushes it up with her fingers, then sticks her tongue out.
                im 2l.jpg
                hearts Not really, want me to give you a demonstration?
                player Demonstrate wh-
                im 2m.jpg
                player ...
                im 2n.jpg
                hearts There it comes off, and then.
                im 2o.jpg
                player Hngh-
                im 2p.jpg
                hearts <i>Ta daa~</i> Now you're ready for a round two~
                t Seems like it'll take a while for you to leave here tonight.
			`);
			break;
		}
        case "hearts3": {
			writeHTML(`
                hearts Well, what do you think about this one?
                player I guess I could say uhm...
				im 3a.jpg
                player The view down here's pretty good.
                hearts Duh. I don't even have a dick yet I'd still enjoy to have a girl bounce on me like that. I mean I love <i>tits</ man...
                player You're keeping the tie on your neck on purpose aren't you?
                t She giggles while slowly moving her hips up and down.
                hearts Don't tell me it doesn't look better this way.
                im 3b.jpg
                player Ri-
                hearts Hush.
                t She begins to move her hips even faster, taking your whole length inside her.
                im 3c.jpg
                hearts I'd rather hear moans than opinions, I already know my tits look good.
                t You let out some silent moans, though it looks like she is not satisfied with that much.
                hearts Awww... That all you can do?
                player Nnnh~ At this speed, that's the most you can get out of me...
                hearts So you need more speed huh? <i>Ask and you shall receive.</i>
                t She begins to move her body up and down much faster, her breathing gets sharper and sharper as you feel yourself approaching your climax.
                hearts Huuugh~ Y-You love that don'tcha?
                player I'm barely holding back you know...
                hearts Just let it all out goddammit! We are not even getting started yet.
                t She quite literally forces her limits to move a little slower, and instead make her moves even sharper. 
                hearts <i>Just fucking cum for me already..!</i> 
                t With each slam of her hips she lets out another moan, which helps push you off the edge as you pump your load inside the condom you're wearing.
                im 3d.jpg
                hearts <i>Huff... Okay, so...</i>
                t She wipes the sweat off her forehead.
				im 3e.jpg
                hearts That makes one, now onto the seconds.
                player Why do I feel like you won't stop at two.
                t She slowly stands up, replacing the condom on your dick.
                hearts Do YOU want to stop at two?
                player Not at all.
                hearts <i>Good.</i>
                t ...
                t Hours pass you both continue giving it your all, trying any and every position you can think of along the way.
                im 3f.jpg
                hearts <i>Nyaagh~</i> You just keep going and going and going <b>it's fucking amazing!</b>
                player Y-Yeah... I don't think I can go another round though.
                hearts That's... 
				im 3g.jpg
                hearts It's oh-kayy..! God yes fuck YES! 
                player Dunno how much I can hold this one in either, hell...
                hearts Don't... Don't try to edge! <b>JUST FUCK THE BREATH OUT OF ME ALREADY DAMNIT!</b>
                t And so you do, putting every last bit of energy you have left in your body into one last burst of desperate thrusting, you notice the loud moans she'd make at the first few rounds are now reduced to merely panting. 
                im 3h.jpg
                hearts Ha-anhh~
                player D-Don't waste your breath... It's almost over.
				im 3i.jpg
                hearts <i>Y-Yehs..! Dew it..!</i>
                t After only a few more thrusts, it finally becomes too much for you to hold back. You do your best to catch your breath as you fill the condom with the last bits of jizz you have left.
                im 3j.jpg
                hearts <i>Hufff huff...</i> I-Is it done..?
				im 3k.jpg
                player I HOPE it's done.
                hearts Hah, a-and I'm still standing! I... thought I'd collapse but I didn't!
                player Let me fix that right away then.
                im 3l.jpg
                hearts W-Wait no no no I take it back I can't ta-
                t And with a little bit of help, her body finally gives in.
				im 3m.jpg
                hearts F-Fine, I'm down, touche...
                player I think I won in the end huh?
                hearts Yep, now show some sportsmanship and pass me a towel, I'm soaked.
                t Looking outside the window (while passing her her towel of course) you notice your much needed shower will have to wait until you are home if you want to make it back before the sun goes down.
			`);
			break;
		}
        case "hearts4": {
			writeHTML(`
                player I feel like you've got something different in your mind for today?
                hearts Duh? Doing the same thing same way everyday is no fun now is it? Gotta keep the flame alive somehow.
				im 4a.jpg
                hearts Besides, I don't think we need condoms anymore. 
                t She's firmly holding your cock in her hand, moving it up and down on her erect nipples.
                hearts Don't get any ideas though, I'm still on birth control.
                player Fine by me, but if you change your mind-
                hearts Not gonna happen, now just focus and...
                im 4b.jpg
                hearts <i>Excellent.</i>
                player Hnngh~ I sure hope that's not all you had in mind for today, ugh.
                t She chuckles while shaking her head to sides.
                im 4c.jpg
                hearts Think of this as an excuse, actually.
                player An excuse for what?
                hearts Now you've gotta clean yourself don'tcha? <i>Mind if I join you in the bath?</i>
                player I like where this is going...
                t ...
                player Heh...
                im 4d.jpg
                hearts What's so funny? I told you I'd scrub your thing, I never specified what I'd use for that.
                t You smile, sure you have had bigger and softer breasts on your dick before, but this doesn't mean a boobjob from her is any less fun.
                player You don't see me complaining.
                hearts Then you wouldn't mind if I sped up just a little, right?
                t Before you can say anything she begins moving her breasts up and down on your lap, though you wouldn't call the increase "just a little".
                im 4e.jpg
                hearts Better this way? I could go faster if you want you know.
                player This is fine, you could push them a bit closer though.
                t She squeezes your shaft between her boobs tighter, giggling.
                hearts Like this huh? How about I slow down a little more so I can give you more of this?
                t She begins to squeeze and let loose between each stroke of her tits, putting small kisses on your tip. Before long you feel like you won't be able to hold much longer.
                player heartsF I'm...
                hearts Just do it, I want to feel it~
                im 4f.jpg
                hearts <i>Whoa...</i>
                t The blush on her face gets brighter and brighter as you keep cumming.
                im 4g.jpg
                hearts Now, isn't that a lovely little mess... Now could you please clean it?
                player Huh?
                hearts Come oooon.
                t ...
                hearts See? It's not that bad?
                im 4h.jpg
                player I am totally not doing this just for holding them in my hands, not at all.
                hearts Pfft.. Hey!
                t She pushes her hips back a little, taking your length between her thighs.
                hearts I'm not suggesting anything, but if you wanna-
                t You buck your hips to thrust your cock through her thighs, making her let out a quiet moan.
                im 4i.jpg
                hearts Ohhh this is amazing~ It's so fucking warm I love it.
                player I may consider giving you even more than that, but you know... <i>you'd have to beg.</i>
                hearts <i>P-please *sir...</i>
                t You squeeze her tits harder with your hands, putting time between your trusts.
                player <i>Please what?</i>
                hearts <b>PLEASE USE MY THIGHS LIKE YOUR FUCKTOY! I NEED TO FEEL DESPERATION I NEED YOU TO FUCK THEM TILL YOU'RE SATISFIED I NEED YOU-</b> Guhhhh~
                t Sure it's rude to cut her talking, but with all the sudden pleas you wouldn't expect from her you can't really hold yourself back from giving her what she so desperately needs. Moving your whole length between her thighs back and forth while also giving her tits a good squeeze.
                hearts <i>Nyaghh~</i>
                player That's how you want it isn't it?
                hearts Hell yeah it is! Just keep going I'm about to-
                im 4j.jpg
                hearts C-Cuhmmm... Gosh yeah...
                t She keeps breathing sharply even after both of you're done cumming.
                hearts Hah~ Hey... You're not done yet, are you?
                player I can go for another round.
                hearts God I fucking love you so m- A-ahem.
                t You hear her gulp as her cheeks turn into a brighter red.
                hearts I mean I love your cock, sorry just a slip of tongue.
                player Oh really now? It didn't feel like one to me.
                im 4k.jpg
                hearts <i>Shut it, not while I'm horny.</i>
			`);
			break;
		}
        case "hearts5": {
			writeHTML(`
				im profile.jpg
                hearts Do I look ready?
                player ...Do you <i>feel</i> ready?
                hearts I guess? 
                t She's pulling her own sleeves down, looking away as her cheeks turn red again.
                player Are you sure you want me to go raw? I mean I don't really mind-
                hearts I'm just a little nervous okay? Don't treat me like a virgin.
                t You sit down on her bed and open your arms.
                player Then don't act like one, now come here.
                hearts Alright...
                t You think of helping her get in the mood with a little bit of foreplay first, however before you can even pull her closer you feel her hands tugging on your pants, trying to pull them down.
                player Keh, now you look readier than I am.
                hearts <i>Just give it to me already will you.</i>
                player You won't have to tell me a second time.
                im 5a.jpg
                hearts Hnn~ A-aahah... This is... I mean... Nothing like with the condom on? I can't really express myself right now.
                player Yup, and we are going nowhere until you do.
                hearts Say what?
                t You don't move your hips even a tiny bit while also holding her down so she won't be able to move her hips either.
                hearts What now?
                player I have to know how much you want this heartsF.
                hearts Why? Why do you have to make me speak? Can't you just pin me down and rail me good already?
                player Oh come on, we can't always have it your way now can we? 
                t She keeps trying to move her hips, forcing you to hold her down with all you've got.
                hearts Ughh fine! It is much better than usual okay? Getting to feel its warmth is NICE! Can you get st- Nrk~
                im 5b.jpg
                player Better this way?
                hearts Y-Yeah... But can you just a little- Oh yeah that's it.
                t She's biting into her fingers to keep herself from moaning.
                player I'm getting close, you want me to-
                hearts Inside! Just pump it all inside me! Oh god yes...
                player Well then, I'm gonna...
                im 5c.jpg
                hearts <i>Hnaah~</i>
                t There is a short silence after you both finish cumming, the only thing you can hear are her sharp inhales.
                hearts Heh... I ahh... think I'll be addicted to that.
                player I mean we could go for another round or two if you want.
                t She just nods without saying anything, looks like she'll be totally broken by the time night falls.
                t ...
                im 5d.jpg
                hearts Fuhhh... Yes yes yes I fucking love this! Can you speed up a little?
                player You'll have to be more "desperate" than that. 
                hearts <b>GHHH JUST FUCKING MAKE MY BODY SORE FOR DAYS OKAY? I NEEEEED IT PUHLEAAASE</b>
                player See? It's not that...
                im 5e.jpg
                player <i>...Hard.</i>
                t It's either you being too preoccupied with filling her up or it's just her being in too much pleasure for it, either way half of her moans now feel like gibberish to you.
                hearts I-Nhhh <i>*master I'm gonna cuhmmmm..!</i>
                im 5f.jpg
                t You push yourself deep inside her to make sure she is not the only one getting off, filling her up with a second load.
                im 5g.jpg
                player Now, what do you think?
                hearts M-Muhhh...
                player What is it, heartsF?
                hearts *Master... p-pleashe... <i>mooooore!</i>
                player <i>Heh...</i>
                t ...
                t Your memories from here on are... blurry, to say the least. 
                im 5i.jpg
                t Though, there are still parts that you remember so vividly...
                im 5k.jpg
                hearts <i>Yeehsss~</i>
                t It may have taken you hours, but in the end you finally managed to make her what both of you wanted her to be. An absolute trainwreck.
                t ...
                hearts Hah... Huff...
                im 5m.jpg
                hearts Woh, th- ouff..
                player Are you sure you're okay, heartsF? 
                t You can't really make out whether she is nodding her head or just trying to hold it from falling down, but the thumbs up she makes for you makes you feel at least a little relieved. At least she's still conscious.
                im 5n.jpg
                player There, there. You did real good today, but I'd better make my way home. Unless you need help with cleaning or anything?
                t She groans a little as she coughs up to clear her throat, then nodding her head a little faster.
                hearts <font size= '-1'>I'll be ok... B-be safe..!</font>
                t You put a tiny kiss on her forehead and dress up to make your way back up, looks like the warm shower you so desperately need will have to wait until you are home, again.
			`);
			break;
		}
        case "hearts6": {
			writeHTML(`
                define heartsa = sp hearts; im images/hearts/heartsa.jpg; altColor #F59FB5;
				im 6h.jpg
                heartsa Heh, already hard huh? At least I know I am not the only insatiable one in this "relationship"~ Too bad it'll have to wait though.
                player Huh? What for?
                t She pulls herself away from the kiss, though obviously regretting it right away.
                heartsa Ugh, I should've waited another minute, anyway!
                t She steps back with a funny grin on her face, her hands slowly moving on her thighs to tease your gaze onto them. And without a warning she pulls her skirt up and pull her panties down.
                im 6a.jpg
                heartsa I haven't really got myself eaten out to you have I? How about we do that now?
                player It's not like I'll refuse, but do I have another choice?
                im 6b.jpg
                heartsa Not at all, <i>heh.</i>
                t She then hops on her bed while giggling. You don't see a reason not to do this the way she wants, after all this is to help her find her confidence, right? So you spread her legs to make some space for yourself before you kneel in front of her and...
                im 6c.jpg
                heartsa Hey, thanks for not turning me down. I was totally ready to be pushed down and used, if you didn't know.
                player You should know that's what I already do with pretty much everyone else and tell you what.
                t You stick your tongue around to give a good lick around her cunt, listening to her quiet yelps as she gets more and more aroused by the act.
                player Wouldn't hurt to listen to what my partner wants every once in a while now, would it?
                im 6d.jpg
                heartsa Jeez- Am I lucky to be one of these "partners" then.
                t You say nothing, not that you could even if you wanted with your tongue all the way inside her. You just focus on what you have at hand, which is to make her happy for now. You pace yourself to match her little moans and yelps to try and find the best speed.
                heartsa Ouhhh~ Yeshh just like that~
                t After a few more minutes of that same pace, she finally decides that's enough and gestures you to move your face away. You can see her legs still shaking subtly from the cunnilingus she just received.
                im 6e.jpg
                heartsa Geeee~ I need to give some good head to pay back for that one now, don't I?
                player Be my guest, I think an oral would suffice for today.
                t This time it's her turn to get on her knees, so she just puts a pillow on the floor and kneels on it with a wider smile on her face.
                player ...Okay that's clever, dammit.
                heartsa Heheh...
                im 6k.jpg
                heartsa Now what do we have here? Already leaking huh?
                t She holds your shaft in her hand and starts stroking it slowly, kissing your tip gently while humming around on it.
                heartsa Ya mind laying down for a second?
                player Huh?
                t Before you know it, she pushes you down on her bed and begins pulling your shirt up. You can't help but squirm a little as her hands roam freely on your chest and her lips let your wrap around your cock.
                im 6l.jpg
                heartsa Just relax, let me handle it for you this time okay?
                t She begins to move her fingers on your nipples slowly, looking at your face for your reaction as she slowly bobs her head up and down.
                im 6m.jpg
                heartsa See? I'll keep it slow today, no need to hurry right?
                player Fine by me, but I doubt you can really "keep it slow" given the way you look at me.
                t The blush on her face deepens as she speeds up a bit.
                im 6n.jpg
                heartsa ...Look what you've done to my self control, no fair~
                player It's not my fault it was wea-Nghhh~
                t You feel a shivering sensation go down your spine and cut your sentence as she pinches your nipples with a naughty giggle, her tongue twirling around your length even faster.
                player I get your point, but I'm not gonna last very long if you keep this up.
                heartsa Shame on you for holding back, just let it all out for me already <i>honey~</i>
                player Mmmmh~ Here it comes then..
                t And after only a few seconds you finally reach your climax and let out nice, thick stream of jizz in her mouth.
                im 6o.jpg
                player Guhhh~
                heartsa <i>Mmmmh~</i>
                im 6p.jpg
                heartsa Now that's something I love, you know.
                t Her hands keep roaming on your chest slowly as she keeps licking your shaft from the base very slowly.
                heartsa See?
                im 6q.jpg
                heartsa That was beautiful~
			`);
			break;
		}
        case "hearts7": {
			writeHTML(`
                define heartsa = sp hearts; im images/hearts/heartsa.jpg; altColor #F59FB5;
				heartsa See? I told you I can do it.
                im 7a.jpg
                heartsa Now I'm on top of the world! Get it? You're my world! <br>...Ugh this sounded a lot better in my head, I'm an awful flirt.
                player It's cute.
                t She giggles and looks away.
                heartsa Shut it, I look stupid when I'm flustered~
                t And with that, she slams her hips down, letting out a happy little yelp.
                im 7b.jpg
                player Don't your legs get sore from all that cowgirl action, heartsF?
                heartsa Ghh.. I'm used to it, think of this as an intense squat training.
                player It's not.
                t She sulks though maintaining her speed, you have no idea how you are supposed to take her tiny complaint seriously with her still moving her hips on yours.
                heartsa I said THINK! I know this is not essentially a proper workout, no form no shape no nothing just... Nghh~ Taking you inside me as many times as I can.
                im 7c.jpg
                player Well at least that's something you are good at, you really know how to take it in.
                heartsa I can do even more you know... I can... speed up!
                t Saying that she begins to bounce even faster, gritting her teeth and letting out quick, quiet moans.
                im 7d.jpg
                heartsa How's that then? Hnnnh I think I'm good enoughhh~
                t You nod, after all you have no reason to use your words and waste your breath when you could use them to moan for her. Which seems to only push her further and further to her limit, at this point you're pretty sure anything you do would arouse her, how fun~
                t In no time you feel you're reaching your climax so you let her know. She speeds up her moves yet again to push you out of your edge and literally force you into filling her up.
                im 7e.jpg
                heartsa <b>FUCK I LOVE YO- THIS!</b> I mean you too but, <i>forget it...</i>
                player Love you too, heartsF.
                heartsa Heh... Heheheheheheheheheheheheheh... <i>I'm getting better.</i> Anyway!
                t She drops on the bed with her arms behind her head and her arms up, giggling.
                im 7f.jpg
                heartsa Now it's your turn to be on top.
                player Wow, how generous of her majesty to let me top, how will I ever pay back for that.
                heartsa Can you stop making fun of me and put it inside already? 
                im 7g.jpg
                player <i>With pleasure~</i>
                t It's true that she is already full to the brim, but it does not seem to have effected her passion for having even more at all. She's moving her hips together with yours to take you in as deep as possible while moaning happily.
                player Will you ever have enough of this huh heartsF? Or will you always be this excited under me?
                heartsa With you, I don't think I will ever have enough, <i>love</i>. I-I mean *master..! This is absur- Hey!
                im 7h.jpg
                heartsa I was not ready for getting groped like that! You could've just told me first.
                player I don't think I have to.
                heartsa Well then...
                t She pushes your hands away and reaches for your own chest, pinching them gently in her hands while giggling.
                im 7i.jpg
                heartsa No double standards now hun, if you can move without warning so can I.
                player As long as you don't put something up my ass...
                heartsa I have no plans to, no *sir.
                t You feel her hands pinching you even harder.
                im 7j.jpg
                heartsa Now faster! Please faster! I need more of it inside me...
                t She doesn't have to say twice, you turn the speed up a notch, making the bed under you rock back and forth as you keep making her squeal and cry for even more.
                heartsa Yes yes <b>YES!</b> Don't stop now just keep going until-
                player G-Gonna cum..!
                heartsa <b>EXACTLY!</b>
                im 7k.jpg
                heartsa Ouuuuuhhh~ <i>Amazing~</i>
                player Heh... I wonder how many more times your <i>precious</i> creampies will ruin your bedsheets.
                im 7l.jpg
                heartsa That sounds more like something to be proud of rather than a problem if you ask me.
                player You're out of your mind.
                heartsa It's your fault I'm like that! Not complaining tho this is a lot better.
                t She finally lowers her legs and arms.
                heartsa Geee... You hungry too?
                player ...I can't really say no.
                heartsa If I order us some pizza can you open the door? I'm in no shape to be doing that you know...
			`);
			break;
		}
        case "hearts9": {
			writeHTML(`
                define heartsa = sp hearts; im images/hearts/heartsa.jpg; altColor #F59FB5;
                heartsa I'm not gonna ride you again today, not with my legs still sore from the last time.
                player Your pose already gives me that feeling, yeah. 
                t You say as you start slamming your hips against hers, from the way she's clenching onto the bedsheets it looks like she's enjoying this as much as you, if not more.
				im 9a.jpg
                heartsa Fuck yes yes YES! Keep doing that and I'll cum-!
                player Wait a sec, already?
                t You don't slow down at all, if that's the way she wants it to be, that's the way she's going to get it. As you speed up you begin to hear the poor bed creaking under the two of you along with her moans. 
                heartsa Heh heeeeh I'm gonna~!
                im 9b.jpg
                t You slow down a little and let her catch her breath.
                player I wasn't expecting that so soon, you know. What happened heartsF?
                heartsa I'll tell you what happened, <b>I'M YOUR FUCKING SLUT!</b> Hehehe, I mean that's not a joke but...<br>Actually it's just that I spent my entire night reading porn but I couldn't cum even once, I guess I was kind of pent up eh?
                player Wow...
                heartsa And don't talk like you haven't came as well, hmph.
                im 9c.jpg
                t She keeps panting for a short while before turning around and laying down onto the bed.
                heartsa Doggy ain't my cup of tea, I cum too quick and I don't like it so.
                player How about this?
                im 9d.jpg
                heartsa EXACTLY! God I love you, I-I mean-
                player No "I mean"s this time, heartsF. I heard you loud and clear.
                heartsa ...Can you just fuck me now?
                im 9e.jpg
                heartsa Gosh... You're such a brute~
                player This sounded an awful lot like a "slow down".
                t She throws her head back for a loud moan before trying to respond again, at this point you're just pounding her with all you've got.
                heartsa <b>DON'T YOU FUCKING DARE SLOW DOWN!</b>
                player Not gonna happen, now don't try to talk much more, we don't need you wasting your breath now do we?
                t She nods so you turn your pace up a notch. Well, at least you try to since it's kind of hard to go beyond your limits. The minutes pass as you do your darnedest to keep your pace at peak, her moans slowly turning into mere whimpers with each of your thrusts as you get closer and closer to your climax.
                player Agh.. you ready? I-I'm getting really close-
                t She nods her head as an answer, probably because she couldn't really form a sentence in her current situation.
                player Cumming..!
                im 9f.jpg
                t You keep your shaft all the way inside her as you cum rope after rope, filling her up with way more than her body can take.
                player Guhhh~
                heartsa <font size= '-1'><i>Haaaah~</i></font>
                im 9g.jpg
                player That was great, wasn't it heartsF?
                heartsa ...
                im 9h.jpg
                heartsa Yeeeehs it waas~
                t ...
                player You sure about that? I mean haven't we just?
                im 9i.jpg
                heartsa Aww, can you really say no to me?
                player Probably depending on the context.
                heartsa ...This better not be one of those contexts then eh.
                player Let me think.
                im 9j.jpg
                player Does this count as a "yes" for you?
                heartsa Not until you-
                im 9k.jpg
                heartsa <i>Lovely~</i>
                t She sticks her tongue out to lick off the cum that landed near her lips before you slowly thrust your length in her mouth, which she takes without a complaint.
                im 9l.jpg
                player <i>I know, pretty lovely isn't it?</i>
                im 9m.jpg
                t She nods her head without saying anything, just humming softly.
			`);
			break;
		}
        case "hearts6b": { //canceled!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
			writeHTML(`
				t <span style="color:red;" >NO TEXTS YET, THEY WILL BE ADDED LATER.</span>
                im 6a.jpg
                im 6b.jpg
                im 6c.jpg
                im 6d.jpg
                im 6e.jpg
                im 6f.jpg
                im 6g.jpg
                im 6h.jpg
                im 6i.jpg
                im 6j.jpg
                im 6k.jpg
                im 6l.jpg
                im 6m.jpg
                im 6n.jpg
                im 6o.jpg
                im 6p.jpg
                im 6q.jpg
			`);
			break;
		}
        case "hearts9b": {
			writeHTML(`
				t <span style="color:red;" >NO TEXTS YET, THEY WILL BE ADDED LATER.</span>
                im 9a.jpg
                im 9b.jpg
                im 9c.jpg
                im 9d.jpg
                im 9e.jpg
                im 9f.jpg
                im 9g.jpg
                im 9h.jpg
                im 9i.jpg
                im 9j.jpg
                im 9k.jpg
                im 9l.jpg
                im 9m.jpg
			`);
			break;
		}
        case "heartsEnd": {
			writeHTML(`
                define heartsa = sp hearts; im images/hearts/heartsa.jpg; altColor #F59FB5;
                heartsa See? That's what makes me happy.
				im 8a.jpg
                player You've seen my dick a million times already heartsF...
                heartsa And you have seen my tits a million times, but you keep staring at them like the people stare at your pendant every time I take my bra off.
                player ...They look good okay?
                im 8b.jpg
                heartsa And to me, your dick looks good. End of discussion.
                t She giggles and kisses your tip gently, watching your cock throb with gleaming eyes.
                heartsa Hell I love this, is this normal? Actually I don't give a damn I'll keep staring no matter what.
                t ...
                heartsa Hey, am I your girlfriend or your wife now?
                im 8c.jpg
                player I don't know? Whichever gets me the most head, how about princess?
                heartsa ...Yeah that'd get you a lot of head.
                im 8d.jpg
                t She's been sitting on your shaft for over a minute without moving by now, yet she seems to enjoy it a lot.
                player Will you get started today huh <i>princess</i>?
                heartsa Hey, let me enjoy the moment will ya?
                t She begins to move her hips slowly, going up and down on your lap while letting out quiet moans.
                heartsa Better this way?
                im 8e.jpg
                player A lot better, yeah.
                heartsa Then hold on tight, I'm tired but I'll give it my all!
                t And so she does, her hips moving up and down as fast as she can move them, combined with her whimpering and you being already pent up with her teasing throughout the day you feel yourself getting close sooner than you expected.
                t She understands how close you are without needing you to tell her, moaning even louder to arouse you even more. She finally stops moving her hips when you start filling her up, smiling from ear to ear.
                im 8f.jpg
                heartsa <b>Yeshh!</b> I love you shoo much heheheh~ No "I mean"sh this time either~
                im 8g.jpg
                heartsa Goshh~ Feel so full...
                player If I know <i>my</i> heartsF, this only means you want more.
                heartsa Aww, I lost the element of surprise huh? Well go ahead then, let's turn around a bit.
                t ...
                heartsa See that's great too! I'd rather be facing you but this is good! Gotta keep trying new things right? 
                im 8h.jpg
                heartsa Now if you could just move my hips yourself... My legs are too tired- Oh yeah just like that.
                t You hold her hips in your hands and move them up and down as fast as you can, her pussy may already be filled to the brim but that doesn't mean you should move slow, right?
                im 8i.jpg
                heartsa Jesus- Maybe I chewed more than I can biiite!
                t You keep giving her your all, her moans slowly descending into yelps, then mere whimpers as the fun keeps going.
                heartsa GOSHHH I-I'M GONNA..!
                player Nghh~ Don't worry I'm about to finish too.
                heartsa I'M GONNA CUMMM~!
                im 8j.jpg
                heartsa Hoooooh~ 
                t She keeps panting for a solid minute, then starts talking again with a shaky voice.
                heartsa This was amazing baby~
                player Was? I don't remember being done with you yet.
                im 8k.jpg
                heartsa No no no no I'm done I can't take any more today please baby please.
                t You laugh and pull your hands away from her hips as she sighs heavily (out of relief, you guess). She then drops herself down onto the bed and crawls up to you, wrapping her arms around your neck and her legs around yours.
                im idk.jpg
                heartsa You know, we'd better wash and sleep together for the first time now, right?
                player Guess we earned that huh?
                heartsa We sure did hun.
                t She sighs.
                heartsa We sure as hell did...
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
	{index: "notice1", trust: 25 ,},
    {index: "message2", trust: 40 ,},
    {index: "message3", trust: 55 ,},
    {index: "message4", trust: 80 ,},
    {index: "message5", trust: 91 ,},
    {index: "reward", trust: 100 ,},
]

function writePhoneEvent(name) { //Plays the relevant phone event
	phoneRight.scrollTop = 0;
	switch (name) {
		case "notice1": {
			//Write the event's text here using writePhoneSpeech, writePhoneImage, and writePhoneChoices
            writePhoneSpeech("hearts", "", "Yo boss");
            writePhoneSpeech("hearts", "", "It's heartsF");
            writePhoneSpeech("hearts", "", "U got my number saved?");
            writePhoneSpeech("hearts", "", "Yo");
            writePhoneSpeech("hearts", "", "playerF");
            writePhoneSpeech("player", "", "Jesus fucking christ I'm here");
            writePhoneSpeech("hearts", "", "Ello :3");
            writePhoneSpeech("player", "", "What do you want, heartsF?");
            writePhoneSpeech("hearts", "", "Just thought youd wanna know that I'll be at computer room this evening");
            writePhoneSpeech("hearts", "", "Would be a shame if you kept waiting at the class ;)");
            writePhoneSpeech("hearts", "", "O yeah btw do you know the admin pass for those pcs?");
            writePhoneSpeech("player", "", "Don't have any idea");
            writePhoneSpeech("hearts", "", "Aww, k bye ^^");
			break;
		}
        case "message2": {
			writePhoneSpeech("hearts", "", "Good morning!");
            writePhoneSpeech("hearts", "", "What're you doing?");
            writePhoneSpeech("player", "", "You wrote me at 6 am, what were you expecting me to do at that hour other than sleeping?");
            writePhoneSpeech("hearts", "", "It's not like you could say 'I'm asleep rn brb' or something, it's a message you were supposed to answer when you see it");
            writePhoneSpeech("player", "", "I find it hard to understand you sometimes.");
            writePhoneSpeech("hearts", "", "Ik ik, just wanted to make sure I wasn't blocked after what I said yesterday yk...");
            writePhoneSpeech("player", "", "I wouldn't even treat it as a confession or anything if you didn't act like this tbh, I mean I love you is a phrase that can be used in many different contexts");
            writePhoneSpeech("hearts", "", "...");
            writePhoneSpeech("hearts", "", "I'm a dumbass");
            writePhoneSpeech("hearts", "", "Smh");
            writePhoneSpeech("player", "", "If it'll make you feel any better that was far from the worst confession I've ever received");
            writePhoneSpeech("hearts", "", "stop");
			break;
        }
        case "message3": {
			writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Morniiiiiiing <3");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Wyd");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Hey");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "U there?");
            writePhoneSpeech("player", "", "Sigh... Good morning heartsF, what's up?");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Oh nothin, just wanted to make sure I say good morning to you right after waking up.");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Also don't bother coming in either class today I really gotta focus so I'll be waiting for you at the entrance by evening, okay?");
            writePhoneSpeech("player", "", "Thanks, knowing where to look helps a lot you know");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Well then I better go, cya");
            writePhoneSpeech("player", "", "Bye bye!");
			break;
		}
        case "message4": {
			writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Mornin <3");
            writePhoneSpeech("player", "", "Good morning heartsF.");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Slept good?");
            writePhoneSpeech("player", "", "I guess?");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Amazing! Just wanted to tell ya not to look for me in class A, I belong in B y'know");
            writePhoneSpeech("player", "", "Well so does your 'Boyboss', yet he still visits class A more than B.");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Well what can I say, he has a GOOD reason to be there");
            writePhoneSpeech("player", "", "We both know his reason, heartsF");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Hey it's not my fault he's a simp alright? It's just that he's so dedicated that I can't help but appreciate his obsession");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "And I'm no better than him anyway, if it didn't slip out of my mouth I would've never confessed to you.");
            writePhoneSpeech("player", "", "Well if having it slip out of your tongue was that easy why is he yet to do the same mistake?");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "They don't really have sex as often as we do, I mean that's what I think! They could very well be fucking somewhere out of our sight");
            writePhoneSpeech("player", "", "It sounds so impossible that it's funny to think about, who do you think would top tho?");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "...");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Ykw, I really got no idea lol");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "But I'd rather stop thinking about him having steamy hot gay sex, so can we move on?");
            writePhoneSpeech("player", "", "Well see you in school then");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Fine by me, ttyl! <3");
			break;
		}
        case "message5": {
			writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Mornin <3");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "So are you gonna come over today?");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "You don't have to, I know ur a busy *man");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Just curious");
            writePhoneSpeech("player", "", "I'll try to make some time for you, but no promises okay?");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Can't expect a promise anyway, anything could happen, c'est la vie");
            writePhoneSpeech("player", "", "Didn't think you of all people could use that in a sentence tbf");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "C'est la vie? My grandma's French, I know a tiny bit of French myself too");
            writePhoneSpeech("player", "", "You learn something new everyday, I did not know this");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "We've got a lot to learn about each other baby, and a lot to 'discover' <3");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "I was hacked sorry");
            writePhoneSpeech("player", "", "'Friend took my phone and sent that' is a more convincing lie, if you need one.");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Heck I could totally use that, ur right");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "...");
            writePhoneSpeech("hearts", "images/hearts/heartsa.jpg", "Ttyl! <3");
            writePhoneSpeech("player", "", "Later, heartsF");
			break;
		}
        case "reward": {
			writePhoneImage("images/hearts/8i.jpg", "art by Kitsuneyane");
            writePhoneSpeech("hearts", "", "Hiya, Ace here! That's all from heartsF for now, she's only missing her two repeat scenes and they'll be written when I finally find a good set for Ethan&Evan, just like ayeyeF and diamondsF. Hope you enjoyed!");
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