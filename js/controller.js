let toggleLoopButton = document.getElementById("toggleLoop-button");
let nextButton = document.getElementById("next-button");
let speedUpButton = document.getElementById("speedUp-button");
let speedDownButton = document.getElementById("speedDown-button");
let speedContainer = document.getElementById("speedContainer");

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
    setSpeed(speed);
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

function setSpeed(speed) {
    speedContainer.innerHTML = `<p>speed: ${speed}x</p>`;
}

function speedUp() {
    speed += 1;
    setSpeed(speed);

    if (speed > 1) {
        unblockButton(speedDownButton);
    }
}

function speedDown() {
    speed -= 1;
    setSpeed(speed);

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
