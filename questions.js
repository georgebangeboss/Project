let index = 0;
const allQuestions = [
    "Explain compiled languages",
    "Explain interpreted languages",
    "What does href tag do?",
    "Describe how the internet works in 400 words"
];
function showNextQuestion() {
    if (index < allQuestions.length) {
        document.getElementById("current_question").innerHTML=allQuestions[index];
        document.getElementById("answer_field").value= "";
        index++;
    } else {
        alert("You have reached end of queue");
        location.href = "./dashboard.html";
    }

}