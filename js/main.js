let notes = [
    'C',
    'D',
    'E',
    'F',
    'G',
    'A',
    'B'
];

let timeout = 10000;
let speed = 1;
let loopId = 0;

let noteContainer = document.getElementById("noteContainer");
let stringContainer = document.getElementById("stringContainer");

function setNote(note) {
    let noteElement = `<p>${notes[note]}</p>`;
    noteContainer.innerHTML = noteElement;
}

function setString(string) {
    let stringElement = `<p>${string}</p>`;
    stringContainer.innerHTML = stringElement;
}

function loop() {
    generateNext();
    loopId = setTimeout(loop, timeout/speed);
}

function startLoop() {
    loop();
}

function stopLoop() {
    clearTimeout(loopId);
}

function generateNext() {
    let note, string = [nextNote(), nextString];
    setNote(nextNote());
    setString(nextString());
}

function nextNote() {
    return Math.ceil(Math.random() * 6);
}

function nextString() {
    return Math.ceil(Math.random() * 5) + 1;
}
