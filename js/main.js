var notes = [
    'C',
    'D',
    'E',
    'F',
    'G',
    'A',
    'B'
];

var noteContainer = document.getElementById("noteContainer");
var stringContainer = document.getElementById("stringContainer");

function setNote(note) {
    var noteElement = "<p>C</p>";
    noteContainer.innerHTML = noteElement;
}

function setString(string) {
    var stringElement = "<p>1</p>";
    stringContainer.innerHTML = stringElement;
}

function start() {
    setNote(0);
    setString(1);
}

start();
