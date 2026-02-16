document.querySelector("#check").addEventListener("click", gradeQuiz);

//<label><input type="radio" name="q1" value="font-color"> font-color </label>

shuffleQ1Choices()
function shuffleQ1Choices(){

    let q1Choices = ["font-color","color","text-color"];

    //Question 1
    for(let i of q1Choices){
    let radioElement = document.createElement("input");
    radioElement.type = "radio";
    radioElement.name = "q1";
    radioElement.value = i;

    let labelElement = document.createElement("label");
    labelElement.textContent = i;

    labelElement.prepend(radioElement);
    labelElement.prepend(" ")

    document.querySelector("#q1ChoicesDiv").append(labelElement);

    console.log(labelElement);
    } 
}

//shuffleQ2Choices()
function shuffleQ2Choices(){

    let q2Choices = ["active","hover","click"];

    //Question 2
    //for(let i of q2Choices){
    let radioElement = document.createElement("input");
    radioElement.type = "dropdown menu";
    radioElement.name = "q2";
    radioElement.value = i;

    let labelElement = document.createElement("label");
    labelElement.textContent = i;

    labelElement.prepend(radioElement);
    labelElement.prepend(" ")

    document.querySelector("#q2ChoicesDiv").append(labelElement);

    console.log(labelElement);
    //}

}

shuffleQ3Choices()
function shuffleQ3Choices(){

    let q3Choices = ["<!-- text -->","// text","/- text -/"];

    //Question 3
    for(let i of q3Choices){
    let radioElement = document.createElement("input");
    radioElement.type = "textbox";
    radioElement.name = "q3";
    radioElement.value = i;

    let labelElement = document.createElement("label");
    labelElement.textContent = i;

    labelElement.prepend(radioElement);
    labelElement.prepend(" ")

    document.querySelector("#q3ChoicesDiv").append(labelElement);

    console.log(labelElement);
    }
}

shuffleQ4Choices()
function shuffleQ4Choices(){

    let q4Choices = ["5","6","7"];

    //Question 3
    for(let i of q4Choices){
    let radioElement = document.createElement("input");
    radioElement.type = "number";
    radioElement.name = "q4";
    radioElement.value = i;

    let labelElement = document.createElement("label");
    labelElement.textContent = i;

    labelElement.prepend(radioElement);
    labelElement.prepend(" ")

    document.querySelector("#q4ChoicesDiv").append(labelElement);

    console.log(labelElement);
    }
}


function gradeQuiz(){
    let q1userAnswer = document.querySelector("input[name=q1]:checked").value;
    let q2userAnswer = document.querySelector("#q2").value;
    let q3userAnswer = document.querySelector("#q3").value;
    let q4userAnswer = document.querySelector("#q4").value;
    alert("check")


    alert("grading quiz.. "  + q1userAnswer + " | " +q2userAnswer + " | " +q3userAnswer + " | " + q4userAnswer +" | ");
    points = 0;
    if(q1userAnswer == "color"){
        points += 20;
        document.querySelector("#q1userAnswer").textContent = "correct q1";
        document.querySelector("#q1userAnswer").style.color = "green";
    } else {
        document.querySelector("#q1userAnswer").textContent = "incorrect q1"
        document.querySelector("#q1userAnswer").style.color = "red"
    }
    if(q2userAnswer == "active"){
        points += 20;
        document.querySelector("#q2userAnswer").textContent = "correct q2"
        document.querySelector("#q2userAnswer").style.color = "green"
    } else {
        document.querySelector("#q2userAnswer").textContent = "incorrect q2"
        document.querySelector("#q2userAnswer").style.color = "red"
    }
    if(q3userAnswer == "// text"){
        points += 20;
        document.querySelector("#q3userAnswer").textContent = "correct q3"
        document.querySelector("#q3userAnswer").style.color = "green"
    } else {
        document.querySelector("#q3userAnswer").textContent = "incorrect q3"
        document.querySelector("#q3userAnswer").style.color = "red"
    }
    if(q4userAnswer == "6"){
        points += 20;
        document.querySelector("#q4userAnswer").textContent = "correct q4"
        document.querySelector("#q4userAnswer").style.color = "green"
    } else {
        document.querySelector("#q4userAnswer").textContent = "incorrect q4"
        document.querySelector("#q4userAnswer").style.color = "red"
    }
    document.querySelector("#po1").textContent = points;

}