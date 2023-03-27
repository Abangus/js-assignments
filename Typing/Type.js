const numbers = [98, 98, 96, 97, 98, 97, 97, 97, 97, 98, 98, 97, 98];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

const average = sum / numbers.length;
document.querySelector(".scoreAverage").innerText = average.toFixed(2);



const WPM = [64, 63, 60, 58, 61, 67, 67, 65, 63, 65, 62, 65, 66];

let sum1 = 0;
for (let i = 0; i < WPM.length; i++) {
  sum1 += WPM[i];
}
const average1 = sum1 / WPM.length;
document.querySelector(".averageWPM").innerText = average1.toFixed(2);




let highestWPM = WPM[0];
for (let i = 1; i < WPM.length; i++) {
  if (WPM[i] > highestWPM) {
    highestWPM = WPM[i];
  }
}
document.querySelector(".scoreWPM").innerText = highestWPM

let highestAcc = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > highestAcc) {
    highestAcc = numbers[i];
  }
}
document.querySelector(".scoreAcc").innerText = highestAcc