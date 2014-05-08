
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
    var htmlClone = $("body").clone();

    $(".new").click(function(e){
      $("body").replaceWith(htmlClone);
    });

  	var randNumber = function(){
  		num=Math.floor((Math.random() * 100) + 1);
  	};

    var feedbackHint = function(hotCold){
      $("#feedback").html(hotCold);
    };

    var guessGame=function(enteredNum,randNumber){
      if(Math.abs(enteredNum-num)>50){
         hotCold = "Ice Cold";
         feedbackHint(hotCold);
      }
      else if(Math.abs(enteredNum-num)>30){
         hotCold = "Cold";
         feedbackHint(hotCold);
      }
      else if (Math.abs(enteredNum-num)>20){
         hotCold = "Warm";
         feedbackHint(hotCold);
      }
      else if (Math.abs(enteredNum-num)>10){
         hotCold = "Hot";
         feedbackHint(hotCold);
      }
      else if (Math.abs(enteredNum-num)>1){
         hotCold = "very hot";
         feedbackHint(hotCold);
      }
      else if (Math.abs(enteredNum-num)=0){
         hotCold = "Congradulation!";
         feedbackHint(hotCold);
      }
    };



    randNumber();

  	$(".button").click(function(e){
  		e.preventDefault();
      enteredNum= $("#userGuess").val();
      guessCount++;
      guessGame(enteredNum,num);
  		console.log(hotCold);
      $("#count").html(guessCount);
      $("<li>"+enteredNum+"</li>").appendTo("#guessList")

  	
  	});

});


