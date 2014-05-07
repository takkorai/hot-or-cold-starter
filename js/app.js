
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	/*
  	var randNumber = function(num){
  		var num=Math.floor((Math.random() * 100) + 1);

  	};

  	var guessGame=function(enteredNum,randNumber){
  		if(enteredNum>randNumber){
  			var answer = "Higher";
  		};
  		else if(enteredNum<randNumber){
  			answer="lower";
  		};
  		else if{enteredNum=randNumber}{
  			answer="Same";
  		};
  	};*/

  	$(".button").click(function(event){
  		console.log("clicked");
  		event.PreventDefault();
  		var enteredNum=$(".userGuess").val();
  		console.log(enteredNum);
  	
  	});

});


