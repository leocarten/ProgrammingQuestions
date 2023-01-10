// first question
function submitQuestion1(){
    var answer = document.getElementById("q1").value;
    if(answer == "xOsTPmQGO0MqpJ7UfD9Ro0KgTB2EL6EpWaYeairc032kbV94oUpk4"){
        window.alert("Correct! ✅")
    }
    else{
        window.alert("Try again! ❌")
    }
}

// first hint
function getHint1(){
    window.alert("Research how to use Arrays OR String Slicers.")
}

// second questions
function submitQuestion2(){
    var answer1 = document.getElementById("q2").value;
    if(answer1 == "202"){
        window.alert("Correct! ✅")
    }
    else{
        window.alert("Try again! ❌")
    }
}

// second hint
function getHint2(){
    window.alert("Research how to iterate through a String, and how to cast a variable from a character to an integer.")
}