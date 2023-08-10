player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;



function send() {
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;

    trueans = parseInt(num1) * parseInt(num2);

    qn = "<h4>" + num1 + "*" + num2 + "</h4>";
    ibox = "<br>Answer : <input type = 'text' id='input_check_box'>";
    cbtn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = qn + ibox + cbtn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";

}