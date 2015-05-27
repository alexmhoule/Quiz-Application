$(document).ready(function () {

	function question(question, answer, choice1, choice2, choice3, choice4, choice5, 2ndquestion, 2ndanswer, 2ndchoice1, 2ndchoice2, 2ndchoice3, 2ndchoice4, 2ndchoice5) {
		this.question = question;
		this.answer = answer;
		this.choice1 = choice1;
		this.choice2 = choice2;
		this.choice3 = choice3;
		this.choice4 = choice4;
		this.choice5 = choice5;
		this.2ndquestion = 2ndquestion;
		this.2ndanswer = 2ndanswer;
		this.2ndchoice1 = 2ndchoice1;
		this.2ndchoice2 = 2ndchoice2;
		this.2ndchoice3 = 2ndchoice3;
		this.2ndchoice4 = 2ndchoice4;
		this.2ndchoice5 = 2ndchoice5;
	}


	//Questions

	var question1 = new question("What is my name?", "Dinger", "Wally the Green Monster", "Sluggerrr", "Orbit", "Dinger", "Lou Seal", "Who do I represent?", "Colorado Rockies", "Colorado Rockies", "Boston Red Sox", "New York Yankess", "Houston Astros", "San Diego Padres");


	var question2 = new question("What is my name?", "Sluggerrr", "Simba", "Sluggerrr", "Pride", "Leo the Lion", "The Tiger", "Who do I represent?", "Kansas City Royals", "Detriot Tigers", "Chicago Cubs", "Washington Nationals", "Atlanta Braves", "Kansas City Royals");


	var question3 = new question("What is my name?", "Wally the Green Monster", "Phanatic", "Sully", "Raymond", "Irish Monster", "Wally the Green Monster", "Who do I represent?", "Boston Red Sox", "Boston Red Sox", "Tampa Bay Rays", "New York Yankess", "San Francisco Giants", "Philadelphia Phillies");


	var question4 = new question("What is my name?", "Swinging Friar", "Mr. Met", "Phanatic", "His Holyness", "Swinging Friar", "Monk", "Who do I represent?", "San Diego Padres", "Minnesota Twins", "San Diego Padres", "Washington Nationals", "Texas Rangers", "Arizona Diamondbacks");


	var question5 = new question("What is my name?", "Orbit", "Marvin", "Orbit", "E.T.", "Stro", "The Martian", "Who do I represent?", "Houston Astros", "New York Mets", "Cleveland Indians", "Chicago White Sox", "Houston Astros", "Milwaukee Brewers");


	var question6 = new question("What is my name?", "Fredbird", "Cardy", "The Oriole", "Freddy", "Jay", "Fredbird", "Who do I represent?", "St. Louis Cardinals", "Baltimore Oriole", "St. Louis Cardinals", "Atlanta Braves", "Toronto Blue Jays", "Minnesota Twins");


	var question7 = new question("What is my name?", "Raymond", "The Blue Dog", "Raymond", "Sea Monster", "Ray", "Wally", "Who do I represent?", "Tampa Bay Rays", "Miami Marlins", "Toronto Blue Jays", "Seattle Mariners", "San Francisco Giants", "Tampa Bay Rays");


	var question8 = new question("What is my name?", "Lou Seal", "Lou Seal", "Louie", "Otter", "River Cat", "Sandy", "Who do I represent?", "San Francisco Giants", "Chicago Cubs", "Philadelphia Phillies", "San Francisco Giants", "Pittsburgh Pirates", "Los Angeles Dodgers");


	//The array

	var questionArray = [question1, question2, question3, question4, question5, question6, question7, question8]

	//Keeping track of question

	questionCounter = 0

	var currentQuestion = questionArray[questionCounter]

}