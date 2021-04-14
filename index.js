var x = 0;
var table = document.getElementById("table1");
var cells = document.getElementsByTagName("td");
var y = "x";
var count = 0;
var sq = [];

function test() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].onclick = function () {
            if (this.innerHTML === "") {
                if (count % 2 == 0) {
                    this.innerHTML = x;
                }
                else {
                    this.innerHTML = y;
                }
                count++;
                checkWinner();
            }

        }
    }
}
function getUserData() {
    for (var i = 0; i < cells.length; i++) {
        sq[i] = document.getElementById("td" + (i + 1)).innerHTML;
        // return sq[i];
    }
    return sq;
}
function checkWinner() {

    var array = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    getUserData();

    var isGameTie = true;

    for (var i = 0; i < array.length; i++) {
        var [a, b, c] = array[i];
        if (sq[a] !== "" && sq[a] === sq[b] && sq[a] === sq[c]) {
            //            return sq[a];
            showWinner(sq[b]);
            isGameTie = false;
        }
    }
    if (isGameTie && sq.indexOf("") == -1) {
        alert("Game is tie");
    }
}

var showWinner = function (winner) {
    setTimeout(function () {
        if (confirm("Game over: " + winner + " is winner")) {
            for (var i = 0; i < cells.length; i++) {
                document.getElementById("td" + (i + 1)).innerHTML = "";
            }
        }
        else {
            for (var i = 0; i < cells.length; i++) {
                document.getElementById("td" + (i + 1)).innerHTML = "";
            }
        }
    }, 500);
}

window.onload = function () {
    test();
}
