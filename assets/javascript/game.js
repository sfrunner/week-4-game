$(document).ready(function(){
	var randomNumber = Math.floor((Math.random() * 120) + 19);
	var ballOneRN = Math.floor((Math.random() * 12) + 1);
	var ballTwoRN = Math.floor((Math.random() * 12) + 1);
	var ballThreeRN = Math.floor((Math.random() * 12) + 1);
	var ballFourRN = Math.floor((Math.random() * 12) + 1);
	var winsCount = $("wins-score").html();
	var loseCount = $("wins-score").html();
	console.log(ballOneRN);
	console.log(ballTwoRN);
	console.log(ballThreeRN);
	console.log(ballFourRN);
	var totalScoreArray = [];
	var currentScore = 0;
	$("#random-number").html("Your Random Number is " + randomNumber);
	$("[alt='basketball']").click(function(){
		totalScoreArray.push(ballOneRN);
		for (var i = 0;i < totalScoreArray.length; i++){
			currentScore = currentScore + parseInt(totalScoreArray[i]);
		}
		$("#current-value").html(currentScore);
		currentScore = 0;
	}

	});
	$("[alt='football']").click(function(){
		totalScoreArray.push(ballTwoRN);
		for (var i = 0;i < totalScoreArray.length; i++){
			currentScore = currentScore + parseInt(totalScoreArray[i]);
		}
		$("#current-value").html(currentScore);
		currentScore = 0;
	});
	$("[alt='soccer']").click(function(){
		totalScoreArray.push(ballThreeRN);
		for (var i = 0;i < totalScoreArray.length; i++){
			currentScore = currentScore + parseInt(totalScoreArray[i]);
		}
		$("#current-value").html(currentScore);
		currentScore = 0;
	});
	$("[alt='baseball']").click(function(){
		totalScoreArray.push(ballFourRN);
		for (var i = 0;i < totalScoreArray.length; i++){
			currentScore = currentScore + parseInt(totalScoreArray[i]);
		}
		$("#current-value").html(currentScore);
		currentScore = 0;
	});
	
	console.log($("#current-score").html());
	console.log(randomNumber);
	if(parseInt($("#current-value").html()) === parseInt(randomNumber)){
		alert("You Win!");
		winsCount.html(winsCount++);
	}
	else if(parseInt($("#current-value").html()) > parseInt(randomNumber)){
		alert("You Lose!");
		loseCount.html(loseCount++);

	}


});