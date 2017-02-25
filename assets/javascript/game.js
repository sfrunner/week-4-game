$(document).ready(function(){

	var randomNumber = Math.floor((Math.random() * 120) + 19);
	var ballOneRN = Math.floor((Math.random() * 12) + 1);
	var ballTwoRN = Math.floor((Math.random() * 12) + 1);
	var ballThreeRN = Math.floor((Math.random() * 12) + 1);
	var ballFourRN = Math.floor((Math.random() * 12) + 1);
	console.log(ballOneRN);
	console.log(ballTwoRN);
	console.log(ballThreeRN);
	console.log(ballFourRN);
	console.log(randomNumber);
	console.log($("#current-value").html());
	var totalScoreArray = [];
	var currentScore = 0;
	
	$("#random-number").html("Your Random Number is " + randomNumber);
	
	$("[alt='basketball']").click(function(){
		$(this).rotate({
      		duration:400,
      		angle: 0,
      		animateTo:360
      	});
		$("#current-value").css("color","red");
		totalScoreArray.push(ballOneRN);
		for (var i = 0;i < totalScoreArray.length; i++){
			currentScore = currentScore + parseInt(totalScoreArray[i]);
		}
		$("#current-value").html(currentScore);
		currentScore = 0;
		ifelse($("#current-value").html(),randomNumber);
	});
	
	$("[alt='football']").click(function(){
		$(this).rotate({
      		duration:400,
      		angle: 0,
      		animateTo:360
      	});
		$("#current-value").css("color","red");
		totalScoreArray.push(ballTwoRN);
		for (var i = 0;i < totalScoreArray.length; i++){
			currentScore = currentScore + parseInt(totalScoreArray[i]);
		}
		$("#current-value").html(currentScore);
		currentScore = 0;
		ifelse($("#current-value").html(),randomNumber);
	});
	
	$("[alt='soccer']").click(function(){
	$(this).rotate({
      		duration:400,
      		angle: 0,
      		animateTo:360
      	});
		$("#current-value").css("color","red");
		totalScoreArray.push(ballThreeRN);
		for (var i = 0;i < totalScoreArray.length; i++){
			currentScore = currentScore + parseInt(totalScoreArray[i]);
		}
		$("#current-value").html(currentScore);
		currentScore = 0;
		ifelse($("#current-value").html(),randomNumber);
	});
	
	$("[alt='baseball']").click(function(){
	$(this).rotate({
      		duration:400,
      		angle: 0,
      		animateTo:360
      	});
		$("#current-value").css("color","red");
		totalScoreArray.push(ballFourRN);
		for (var i = 0;i < totalScoreArray.length; i++){
			currentScore = currentScore + parseInt(totalScoreArray[i]);
		}
		$("#current-value").html(currentScore);
		currentScore = 0;
		ifelse($("#current-value").html(),randomNumber);
	});
	
	function ifelse (a,b){
		if(parseInt(a) === parseInt(b)){
			alert("You Win!");
			var currentWinsScore = parseInt($("#wins-score").html().replace("Wins: ","")) + 1;
			$("#wins-score").html("Wins: " + currentWinsScore);
			randomNumber = Math.floor((Math.random() * 120) + 19);
			ballOneRN = Math.floor((Math.random() * 12) + 1);
			ballTwoRN = Math.floor((Math.random() * 12) + 1);
			ballThreeRN = Math.floor((Math.random() * 12) + 1);
			ballFourRN = Math.floor((Math.random() * 12) + 1);
			totalScoreArray = [];
			$("#random-number").html("Your Random Number is " + randomNumber);
			$("#current-value").css("color","#eee");
		}
		else if(parseInt(a) > parseInt(b)){
			alert("You Lose!");
			var currentLossesScore = parseInt($("#losses-score").html().replace("Losses: ","")) + 1;
			$("#losses-score").html("Losses: " + currentLossesScore);
			randomNumber = Math.floor((Math.random() * 120) + 19);
			ballOneRN = Math.floor((Math.random() * 12) + 1);
			ballTwoRN = Math.floor((Math.random() * 12) + 1);
			ballThreeRN = Math.floor((Math.random() * 12) + 1);
			ballFourRN = Math.floor((Math.random() * 12) + 1);
			totalScoreArray = [];
			$("#random-number").html("Your Random Number is " + randomNumber);
			$("#current-value").css("color","#eee");

		}
	}

});