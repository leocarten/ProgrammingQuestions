// random window alert for correct
function CorrectAnswer(max) {
    var correct = ["Correct! ✅","Yay! 🎉", "Right! 🔥", "You're on a roll! 🚀"]
    var num = Math.floor(Math.random() * max);
    var ay = correct[num]
    return ay
  }

// random window alert for wrong
function WrongAnswer(max) {
    var wrong = ["Try again! ❌", "Incorrect! ❌", "Wrong ❌ Try the hint!"]
    var num = Math.floor(Math.random() * max);
    var ay = wrong[num]
    return ay
  }

// first question
function submitQuestion1(){
    var answer = document.getElementById("q1").value;
    if(answer == "xOsTPmQGO0MqpJ7UfD9Ro0KgTB2EL6EpWaYeairc032kbV94oUpk4"){
        window.alert(CorrectAnswer(4))
    }
    else{
        window.alert(WrongAnswer(3))
    }
}

// first hint
function getHint1(){
    window.alert("You could Arrays or String Slicers.")
}

// second questions
function submitQuestion2(){
    var answer1 = document.getElementById("q2").value;
    if(answer1 == "202"){
        window.alert(CorrectAnswer(4))
    }
    else{
        window.alert(WrongAnswer(3))
    }
}

// second hint
function getHint2(){
    window.alert("You'll need to iterate through a String and cast a variable from a character to an integer.")
}

//third question
function submitQuestion3(){
    var answer = document.getElementById("q3").value;
    if(answer == "2"){
        window.alert(CorrectAnswer(4))
    }
    else{
        window.alert(WrongAnswer(3))
    }
}

// third hint
function getHint3(){
    window.alert("You'll need to iterate through the string, and keep a running tally everytime you come across the character.")
}

// fourth question
function submitQuestion4(){
    var answer = document.getElementById("q4").value;
    if(answer == "L27"){
        window.alert(CorrectAnswer(4))
    }
    else{
        window.alert(WrongAnswer(3))
    }
}

// fourth hint
function getHint4(){
    window.alert("Take note of how the string is set up - it will always follow the pattern of direction and distance. Both direction and distance are singular characters. Also, make sure your answer consists of both the direction, and distance. For example, your answer should be structured as 'R45'.")
}
