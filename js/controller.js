let toggleLoopButton = document.getElementById("toggleLoop-button");
let nextButton = document.getElementById("next-button");
let speedUpButton = document.getElementById("speedUp-button");
let speedDownButton = document.getElementById("speedDown-button");

function blockButton(button) {
    button.disabled = true;
}

function unblockButton(button) {
    button.disabled = false;
}

function toggleButtonBlock(button) {
    button.disabled = !button.disabled;
}

function start() {
    toggleLoopButton.innerHTML = 'Stop';
    startLoop();
}

function stop() {
    toggleLoopButton.innerHTML = 'Start';
    stopLoop();

}

function toggleLoop() {
    toggleLoopButton.innerHTML === 'Start' ? start() : stop();
    toggleButtonBlock(nextButton);
}

function next() {
    generateNext();
}

function speedUp() {
    speed += 1;

    if (speed > 1) {
        unblockButton(speedDownButton);
    }
}

function speedDown() {
    speed -= 1;

    if (speed <= 1) {
        blockButton(speedDownButton);
    }
}

function bindEvents() {
    toggleLoopButton.addEventListener('click', toggleLoop);
    nextButton.addEventListener('click', next);
    speedUpButton.addEventListener('click', speedUp);
    speedDownButton.addEventListener('click', speedDown);
}

bindEvents();
