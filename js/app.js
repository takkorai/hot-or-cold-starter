
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	
    var num=0
    var enteredNum= 0;
    var guessCount=0
    var hint = "ABC"

  	var randNumber = function(){
  		num=Math.floor((Math.random() * 100) + 1);
  	};
    var feedbackHint = function(hint){
      $("#feedback").html(hint);
    };


    
  	var guessGame=function(enteredNum,randNumber){
  		if(enteredNum>num){
  			 hint = "High";
         feedbackHint(hint);
  		}
  		else if(enteredNum<num){
  			hint="low";
        feedbackHint(hint);
  		}
  		else if(enteredNum=num){
  			hint="Same";
        feedbackHint(hint);
  		}
  	};


    randNumber();

  	$(".button").click(function(e){
  		e.preventDefault();
      enteredNum= $("#userGuess").val();
      console.log(enteredNum);
      console.log(num);
      guessCount++;
      guessGame(enteredNum,num);
  		console.log(hint);
      $("#count").html(guessCount);
      $("<li>"+enteredNum+"</li>").appendTo("#guessList")

  	
  	});

});


