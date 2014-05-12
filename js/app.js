
$(document).ready(function(){
  
  /*--- Display information modal box ---*/
    $(".what").click(function(){
      $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
      $(".overlay").fadeOut(1000);
    });


    
    var num=0;
    var enteredNum= 0;
    var guessCount=0;
    var hint = "ABC";
    var htmlClone = $("body").clone();
    var StoredNum =[];
    var dupCheck = "good";

    var clearDupCheck=function(){
      dupCheck = "good";
    };


    $(".new").click(function(e){
      $("body").replaceWith(htmlClone);
      num=0;
      enteredNum= 0;
      guessCount=0;
      hint = "ABC";
      htmlClone = $("body").clone();
      StoredNum =[];
      clearDupCheck();
    });

    var randNumber = function(){
      num=Math.floor((Math.random() * 100) + 1);
    };

    var feedbackHint = function(hotCold){
      $("#feedback").html(hotCold);
    };

    var guessGame=function(enteredNum,num){
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
      else if (Math.abs(enteredNum-num)==0){
         hotCold = "Congradulation! You got the number!";
         feedbackHint(hotCold);
      }
    };



    randNumber();

    $(".button").click(function(e){
      e.preventDefault();
      
      enteredNum= $("#userGuess").val();
      clearDupCheck();

      if(isNaN(enteredNum)){
        alert("Entered is not a number");

      }
      else if(enteredNum > 100){
        alert("Number bigger than 100!");
      }
      else{

        for(var i=0; i<StoredNum.length; i++){
          if(StoredNum[i] === enteredNum){
            dupCheck="exist";
          }
          else{};
        };

        if(dupCheck==="exist"){
          alert("number already used");
        }
        else{
          guessCount++;
          guessGame(enteredNum,num);
          $("#count").html(guessCount);
          $("<li>"+enteredNum+"</li>").appendTo("#guessList");
          StoredNum.push(enteredNum);
          clearDupCheck();
        };
        
        //console.log(StoredNum);
      };



    });

});


