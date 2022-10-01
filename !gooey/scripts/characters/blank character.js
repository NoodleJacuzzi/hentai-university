var character = {index: "neet", fName: "Tia", lName: "Sun", trust: 0, encountered: false, textEvent: "", met: false, color: "#F683C8", author: "NoodleJacuzzi", artist: "Enoshima Iki", textHistory: "", unreadText: false,};

var logbook = {
	index: "", 
	desc: "",
	body: "",
	clothes: "",
	home: "",
	tags: "",
	artist: "",
	author: "",
	/*
	Here is a writeHTML cheat sheet for your convenience, feel free to delete this:
	t This line will print basic text
	t <b>This is bold text.</b> <i>This is italicized text.</i>
	t <b><i>This is both!</i></b>
	t <span style="color:red; font-size: 200%;">This is big, red text, look up css stylings for more ways to alter text!</span>
	t ...
	^The above line will print a horizontal divider I use for showing the passage of time

	sp player; This will print the player speaking a line of dialogue
	sp neet; This will print Tia (as her codename is "neet") speaking a line of dialogue
	sp neet; im images/neet/gym.jpg; This will print Tia in her gym outfit speaking a line of dialogue
	sp neet; altColor #A368A5; This will print Tia speaking a line of dialogue, but her usual orange color will be pink instead
	sp Random Student; im none; This will print dialogue by someone with the name "Random Student" with no profile image.

	addFlag neet; TestFlag
	^The above line will add the flag "test" to Tia
	removeFlag neet; TestFlag
	^The above line will remove the flag "test" from Tia
	
	raiseTrust neet; 10
	^The above line will increase Tia's trust value by 10;
	raiseTrust neet; -10
	^The above line will reduce Tia's trust value by 10;
	setTrust neet; 100
	^The above line will set Tia's trust value to exactly 100;

	im images/neet/bikini.jpg
	^ The above line will print the bikini image in Tia's images folder
	im bikini.jpg
	^ The above line is a shortcut that will print the bikini image in whatever folder this character belongs to. If your character's codename is "pink", for example, then the above line will print the image "images/pink/bikini.jpg"

	trans intro2; Continue
	^ The above line will print a button reading "Continue" that when clicked will transition to the encounter "intro2"
	cancel
	^ The above shortcut line will print a button labeled "Go back" that when clicked will transition to the "cancel" encounter, which has code to end the current encounter and unencounter the character, allowing the player to interact with them again.
	finish
	^ The above shortcut line will print a button labeled "Finish" that when clicked will end the encounter and take the player back to the map.

	The following requirement checks are usable in lots of different types of lines, apply them to the end of any line to make the line only show if the player meets the requirements:
	t ?gender male; This line will only print if the player's gender is male
	t ?gender male; This line will only print if the player's gender is male
	t ?skill hypnosis 1; This line will only print if the player has the hypnosis skill at 1 or higher
	t !gender male; This line will only print if the player's gender is not male
	t ?trust neet 30; This line will only print if Tia's trust value is exactly 30
	t ?trustMin neet 60; This line will only print if Tia's trust value is 60 or higher
	t ?trustMax neet 70; This line will only print if Tia's trust value is 70 or less
	sp player; ?flag neet sports; This dialogue will only print if Tia has the flag "sports"
	sp player; !flag neet sports; This dialogue will only print if Tia does not have the flag "sports"
	im bikini.jpg ?money 50;
	^ The above line will print the bikini image, but only if the player has $50 or more
	
	dual sp1 neet; sp2 player; This will print Tia and the player speaking in unison.
	dual sp1 neet; im1 images/neet/bikini.jpg; sp2 neet; im2 images/neet/gym.jpg; This will print two copies of Tia speaking in unison, the first wearing a bikini, the second wearing a gym outfit.
	dual sp1 neet; altColor1 #A368A5; sp2 player; altColor2 #A34E32; This will print Tia and the player speaking in unison, each with a different custom hex color.
	
	bar Fitness; im images/neet/gymT.png; progress 41;
	^ The above line will print a progress bar labelled "Fitness" with an image of Tia in her gym outfit. The progress bar will show 41 out of 100.
	bar Fitness; im images/neet/gymT.png; progress `+checkTrust("neet")+`; maximum 120;
	^ The above line will print a progress bar labelled "Fitness" with an image of Tia in her gym outfit. The progress bar will show progress equal to Tia's trust value out of 120.
	
	*/
};

var newItems = [
	{name: "", 				key: true, 		price: 0, 	image: "scripts/gamefiles/items/.jpg", description: ""},
];

var encounterArray = [//Lists encounters as they appear on the map. Nonrepeatable, only one per day per character by default.
	{index: "placeholder", name: "", requirements: "?trust principal 10000;", altName: "", altImage: "",},
];

function writeEncounter(name) { //Plays the actual encounter.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "cancel": {
			unencounter(character.index);
			changeLocation(data.player.location);
			break;
		}
		case "placeholder": {
			writeHTML(`
				im profile.jpg;
				t Placeholder text
				sp mom; Placeholder dialogue.
				sp player; Placeholder response.
				t ...
				t This is regular text.
				t <b>This is bold text.</b> <i>This is italicized text.</i>
				t <b><i>This is both!</i></b>
				t <span style="color:red; size: 200%;">This is big, red text!</span>
			`);
			passTime();
			raiseTrust("mom", 1);
			writeFunction("writeEncounter('placeholder')", "Continue");
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
	{index: "placeholder", name: "Event Name"},
];

function writeEvent(name) { //Plays the actual event.
	document.getElementById('output').innerHTML = '';
	wrapper.scrollTop = 0;
	switch (name) {
		case "placeholder": {
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