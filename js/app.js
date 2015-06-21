$(document).ready(function () {

	$('#endScreen').hide();

	function question(mascotImage, question, answer, choice1, choice2, choice3, choice4, choice5, secondquestion, secondAnswer, secondchoice1, secondchoice2, secondchoice3, secondchoice4, secondchoice5) {
		this.mascotImage = mascotImage;
		this.question = question;
		this.answer = answer;
		this.choice1 = choice1;
		this.choice2 = choice2;
		this.choice3 = choice3;
		this.choice4 = choice4;
		this.choice5 = choice5;
		this.secondquestion = secondquestion;
		this.secondAnswer = secondAnswer;
		this.secondchoice1 = secondchoice1;
		this.secondchoice2 = secondchoice2;
		this.secondchoice3 = secondchoice3;
		this.secondchoice4 = secondchoice4;
		this.secondchoice5 = secondchoice5;
	}


	//Questions

	var question1 = new question("img/dinger.jpg", "What is my name?", "Dinger", "Wally the Green Monster", "Sluggerrr", "Orbit", "Dinger", "Lou Seal", "Who do I represent?", "Colorado Rockies", "Colorado Rockies", "Boston Red Sox", "New York Yankess", "Houston Astros", "San Diego Padres");


	var question2 = new question("img/slugger.jpg", "What is my name?", "Sluggerrr", "Simba", "Sluggerrr", "Pride", "Leo the Lion", "The Tiger", "Who do I represent?", "Kansas City Royals", "Detriot Tigers", "Chicago Cubs", "Washington Nationals", "Atlanta Braves", "Kansas City Royals");


	var question3 = new question("img/wally.jpg", "What is my name?", "Wally the Green Monster", "Phanatic", "Sully", "Raymond", "Irish Monster", "Wally the Green Monster", "Who do I represent?", "Boston Red Sox", "Boston Red Sox", "Tampa Bay Rays", "New York Yankess", "San Francisco Giants", "Philadelphia Phillies");


	var question4 = new question("img/Swinging_friar.jpg", "What is my name?", "Swinging Friar", "Mr. Met", "Phanatic", "His Holyness", "Swinging Friar", "Monk", "Who do I represent?", "San Diego Padres", "Minnesota Twins", "San Diego Padres", "Washington Nationals", "Texas Rangers", "Arizona Diamondbacks");


	var question5 = new question("img/orbit.jpg", "What is my name?", "Orbit", "Marvin", "Orbit", "E.T.", "Stro", "The Martian", "Who do I represent?", "Houston Astros", "New York Mets", "Cleveland Indians", "Chicago White Sox", "Houston Astros", "Milwaukee Brewers");


	var question6 = new question("img/fredbird.jpg", "What is my name?", "Fredbird", "Cardy", "The Oriole", "Freddy", "Jay", "Fredbird", "Who do I represent?", "St. Louis Cardinals", "Baltimore Oriole", "St. Louis Cardinals", "Atlanta Braves", "Toronto Blue Jays", "Minnesota Twins");


	var question7 = new question("img/Raymond.jpg", "What is my name?", "Raymond", "The Blue Dog", "Raymond", "Sea Monster", "Ray", "Wally", "Who do I represent?", "Tampa Bay Rays", "Miami Marlins", "Toronto Blue Jays", "Seattle Mariners", "San Francisco Giants", "Tampa Bay Rays");


	var question8 = new question("img/Lou.jpg", "What is my name?", "Lou Seal", "Lou Seal", "Louie", "Otter", "River Cat", "Sandy", "Who do I represent?", "San Francisco Giants", "Chicago Cubs", "Philadelphia Phillies", "San Francisco Giants", "Pittsburgh Pirates", "Los Angeles Dodgers");


	//The array

	var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8];

	//Keeping track of question

	var questionCounter = 0;

	var currentQuestion = questionArray[questionCounter];

	var correctPoints = 0;

	function loadData() {
		console.log(questionCounter);
		$('#mascotImage').attr('src', currentQuestion.mascotImage);
		$('#q1a1').val(currentQuestion.choice1);
		$('#q1a1Label').text(currentQuestion.choice1);
		$('#q1a2').val(currentQuestion.choice2);
		$('#q1a2Label').text(currentQuestion.choice2);
		$('#q1a3').val(currentQuestion.choice3);
		$('#q1a3Label').text(currentQuestion.choice3);
		$('#q1a4').val(currentQuestion.choice4);
		$('#q1a4Label').text(currentQuestion.choice4);
		$('#q1a5').val(currentQuestion.choice5);
		$('#q1a5Label').text(currentQuestion.choice5);

		$('#q2a1').val(currentQuestion.secondchoice1);
		$('#q2a1Label').text(currentQuestion.secondchoice1);
		$('#q2a2').val(currentQuestion.secondchoice2);
		$('#q2a2Label').text(currentQuestion.secondchoice2);
		$('#q2a3').val(currentQuestion.secondchoice3);
		$('#q2a3Label').text(currentQuestion.secondchoice3);
		$('#q2a4').val(currentQuestion.secondchoice4);
		$('#q2a4Label').text(currentQuestion.secondchoice4);
		$('#q2a5').val(currentQuestion.secondchoice5);
		$('#q2a5Label').text(currentQuestion.secondchoice5);
	}

	loadData();

	$('#submitAnswer').click(function (event) {
		event.preventDefault();

		if($('input[name=mascotName]:checked').val()==undefined && $('input[name=teamName]:checked').val()==undefined) {
			alert("Please answer the questions.");
		}else if ($('input[name=mascotName]:checked').val()==undefined) {
			alert("Please select a mascot's name.");
		} else if ($('input[name=teamName]:checked').val()==undefined) {
			alert("Please select a team name.");
		} else {
			checkAnswers();
		}
	});

	function checkAnswers() {

		if($('input[name=mascotName]:checked').val() == currentQuestion.answer && $('input[name=teamName]:checked').val() == currentQuestion.secondAnswer) {
			alert('You are correct!');
			correctPoints+=2;
		}else if ($('input[name=mascotName]:checked').val() == currentQuestion.answer || $('input[name=teamName]:checked').val() == currentQuestion.secondAnswer) {
			alert("You are partially correct. The correct mascot name is " + currentQuestion.answer + " and the correct team is " + currentQuestion.secondAnswer);
			correctPoints+=1;
		}else {
			alert("Wrong answers. The correct mascot name is " + currentQuestion.answer + " and the correct team is " + currentQuestion.secondAnswer);
		}

		questionCounter++;
		currentQuestion = questionArray[questionCounter];
		$('input[type=radio]').attr("checked", false);
		console.log(correctPoints);
		
		if(questionCounter==questionArray.length) {
			end();
		}else {
			loadData();
		}

	}

	function feedback() {
		if(correctPoints == 16) {
			document.getElementById("feedback").innerHTML = ("Congradulations, you have passed this quiz with a perfect score. Great job!");
		} else if (correctPoints > 9 && correctPoints <= 15){
			document.getElementById("feedback").innerHTML = ("Good job, you scored very well but not perfectly. Please feel free to try again.");
		} else if (correctPoints > 7 && correctPoints <= 9){
			document.getElementById("feedback").innerHTML = ("Not bad, although you could score better if you review team mascots more. Feel free to review and retry.");
		} else {
			document.getElementById("feedback").innerHTML = ("You have failed. Feel free to practice more and retake.");
		}
	}

	function end() {
		console.log("completed");
		$('#endScreen').show();
		$('#mascotDiv').hide();
		$('#photoDiv').hide();
		$('#teamDiv').hide();
		$('#submitDiv').hide();
		feedback();
		playTheme();
	}

	function playTheme() {
	$('#mlbTheme')[0].volume = 0.5;
	$('#mlbTheme')[0].load();
	$('#mlbTheme')[0].play();
	}

	$('#restart').click(function () {
		location.reload();
	});


});