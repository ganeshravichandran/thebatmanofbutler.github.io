function myFunction() {

	var char_choice = document.getElementById("characterSelect").value;

    var textbox = document.createElement("input")
    textbox.setAttribute("id","user_input")
    document.getElementById("mainstuff").appendChild(textbox)

    var submit_butt = document.createElement("input")
    submit_butt.setAttribute("value","Submit")
    submit_butt.setAttribute("id","SubmitButt")
    submit_butt.setAttribute("type","button")
    document.getElementById("mainstuff").appendChild(submit_butt)

    if (char_choice == "Agamemmnon") {
    	document.getElementById("selection_text").innerHTML = "Agamemmnon, you have fought valiantly against the Trojans, and it is time to return home...but you have encountered a terrible storm. Calchas, your seer, reveals that you must either sacrifice your daughter Iphigenia, or everyone on the ship will die with the sea."
    	document.getElementById("user_input").setAttribute("placeholder", "Do you kill your daughter? (Yes/No)")
	    submit_butt.setAttribute("onclick","Ag_1()")
    }
    else if (char_choice == "Oedipus") {
    	document.getElementById("selection_text").innerHTML = "Oedipus, you are much respected for your leadership against the Sphinx in your city of Thebes. But now, Thebes is under a terrible plague. Creon tells you to fetch Tiresius, the blind prophet. When Tiresius arrives, he refuses to reveal the truth about the murder of the former king, Laius, to you. The prophet says that you do not want to know the truth."
    	document.getElementById("user_input").setAttribute("placeholder", "Do you pressure him or release him? (Pressure/Release)")
        submit_butt.setAttribute("onclick","Oe_1()")
    }
}

function Ag_1() {
	var textbox = document.getElementById("user_input")
	var decision = textbox.value
	submit_butt = document.getElementById("SubmitButt")

	if (decision === "Yes") {
    	document.getElementById("selection_text").innerHTML = "Wow...you killed your own daughter...Clytemnestra is not going to be happy about this. At least your sailors have been saved. You finally return home, where your wife has a purple carpet spread out for you. You feel that it would be arrogant to walk on it, but your wife will get mad if you don't."
    	textbox.value = ""
    	textbox.setAttribute("placeholder", "Do you walk on it and suffer the hubris? Or do you decline to walk? (Hubris/Decline)")
	    submit_butt.setAttribute("onclick","Ag_2()")
	}
	else {
		document.getElementById("selection_text").innerHTML = "You couldn't bare to kill your own daughter...and now everyone has drowned in the sea.<br>GAME OVER (Reload to play again)"
	}
}

function Ag_2() {
	var textbox = document.getElementById("user_input")
	var decision = textbox.value
	submit_butt = document.getElementById("SubmitButt")

	if (decision === "Hubris") {
    	document.getElementById("selection_text").innerHTML = "Finally, you do something your wife tells you to do! But what are you going to do about Cassandra, the slave girl you brought back home with you? Remember, Clytemnestra is already very angry with you for killing your daughter."
    	textbox.value = ""
    	textbox.setAttribute("placeholder", "Do you demand that she comes inside? Or do you set up lodging for her outside of the House? (Inside/Outside)")
	    submit_butt.setAttribute("onclick","Ag_3()")
	}
	else {
		document.getElementById("selection_text").innerHTML = "Clytemnestra is appalled by your stubborness. You enter the House without using the carpet. As you are taking off your shoes and finally enjoying the idea of being home, Clytemnestra walks up to you and stabs you in the chest!<br>GAME OVER (Reload to play again)"
	}
}

function Ag_3() {
	var textbox = document.getElementById("user_input")
	var decision = textbox.value
	submit_butt = document.getElementById("SubmitButt")

	if (decision === "Inside") {
    	document.getElementById("selection_text").innerHTML = "Well, Clytemenstra's REALLY mad now! She tries to talk to Cassandra, but she does not respond. Eventually she just leaves her there. As you are taking off your shoes and finally enjoying the idea of being home, Clytemnestra walks up to you and stabs you in the chest!<br>GAME OVER (Reload to play again)"
    	textbox.value = ""
	}
	else {
		document.getElementById("selection_text").innerHTML = "Well, so you have put up Cassandra in a guest house. Clytemnestra is happy with your decision. But you still killed your daughter, Agamemmnon. As you are taking off your shoes and finally enjoying the idea of being home, Clytemnestra walks up to you and stabs you in the chest!<br>GAME OVER (Reload to play again)"
	}
}

function Oe_1() {
	var textbox = document.getElementById("user_input")
	var decision = textbox.value
	submit_butt = document.getElementById("SubmitButt")

	if (decision === "Pressure") {
    	document.getElementById("selection_text").innerHTML = "You curse out Tiresius and force him to reveal the truth about the murder. He says that the murderer is both the brother and the father of his children, and is a son and husband to his mother. This confuses you, and when you approach your wife Jocasta with this problem, she says that Laius was killed at a crossroads. This story seems familiar to you...and the one surviving witness to these events is still alive."
    	textbox.value = ""
    	textbox.setAttribute("placeholder", "Do you call forth the witness? Or do you let it all go? (Witness/Let it go)")
	    submit_butt.setAttribute("onclick","Oe_2()")
	}
	else {
		document.getElementById("selection_text").innerHTML = "The plague continues and Thebes is ruined.<br>GAME OVER (Reload to play again)"
		textbox.value = ""
		document.getElementById("user_input").setAttribute("placeholder", "")
	}
}

function Oe_2() {
	var textbox = document.getElementById("user_input")
	var decision = textbox.value
	submit_butt = document.getElementById("SubmitButt")

	if (decision === "Witness") {
    	document.getElementById("selection_text").innerHTML = "Before the witness arrives, a messenger reveals to you that you were actually adopted by the parents who raised you...now you REALLY want to see the shepard, but Jocasta begs you not to."
    	textbox.value = ""
    	textbox.setAttribute("placeholder", "Do you still ask for the shepard? Or do you listen to Jocasta and let it all go? (Shepard/Let it go)")
	    submit_butt.setAttribute("onclick","Oe_3()")
	}
	else {
		document.getElementById("selection_text").innerHTML = "The plague continues and Thebes is ruined.<br>GAME OVER (Reload to play again)"
		textbox.value = ""
		document.getElementById("user_input").setAttribute("placeholder", "")
	}
}

function Oe_3() {
	var textbox = document.getElementById("user_input")
	var decision = textbox.value
	submit_butt = document.getElementById("SubmitButt")

	if (decision === "Shepard") {
    	document.getElementById("selection_text").innerHTML = "The Shepard reveals that you are the murderer, and your wife Jocasta is also your mother...Jocasta kills herself and you blind your eyes.<br>GAME OVER (Reload to play again)"
    	textbox.value = ""
		document.getElementById("user_input").setAttribute("placeholder", "")
	}
	else {
		document.getElementById("selection_text").innerHTML = "The plague continues and Thebes is ruined.<br>GAME OVER (Reload to play again)"
		textbox.value = ""
		document.getElementById("user_input").setAttribute("placeholder", "")
	}
}

// function Ag_1(event) {
//     if (event.keyCode === 13) {
//         var tb = document.getElementById("user_input");
//         eval(tb.value);
//         document.getElementById("selection_text").innerHTML = "yes"
//     }
//     addListener(document.getElementById("textbox"), 'keypress', Ag_1(event))

// }

function addListener(element, eventName, handler) {
	if (element.addEventListener) {
		element.addEventListener(eventName, handler, false);
	}
	else if (element.attachEvent) {
		element.attachEvent('on' + eventName, handler);
	}
	else {
		element['on' + eventName] = handler;
	}
}