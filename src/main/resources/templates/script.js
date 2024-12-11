let isRunning = false;
let intervalId;
let drawnNumbers = [];

function toggleRoulette() {
  const controlButton = document.getElementById("controlButton");
  const rouletteNumber = document.getElementById("rouletteNumber");

  if (isRunning) {
    clearInterval(intervalId);
    isRunning = false;
    controlButton.textContent = "スタート";
    addToHistory(rouletteNumber.textContent);
  } else {
    isRunning = true;
    controlButton.textContent = "ストップ";
    intervalId = setInterval(() => {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * 75) + 1;
      } while (drawnNumbers.includes(randomNumber));
      rouletteNumber.textContent = randomNumber;
    }, 100);
  }
}

function addToHistory(number) {
  if (!drawnNumbers.includes(parseInt(number))) {
    drawnNumbers.push(parseInt(number));
    const historyList = document.getElementById("numberHistory");
    const listItem = document.createElement("li");
    listItem.textContent = number;
    historyList.appendChild(listItem);
  }
}
