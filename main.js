"use strict";

const inputDate = document.querySelector(".input-date");
const inputNumber = document.querySelector(".input-number");
const button = document.querySelector(".button");
const message = document.querySelector(".message");
console.log(inputDate);
console.log(inputNumber);

function showMessage(msg) {
  message.textContent = msg;
}

function hideMessage() {
  message.textContent = "";
}

const checkLuckyNumber = function (num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
};

const checkBirthday = function () {
  const dob = inputDate.value;
  const number = inputNumber.value;
  const dateSum = datetoSum(dob);

  if (!checkLuckyNumber(Number(number))) {
    showMessage("Lucky number can't be less than 0");
    return;
  }
  if (dob && number) {
    if (dateSum % Number(number) === 0) {
      showMessage(`The birthday is lucky🥳 `);
    } else {
      showMessage(`Your birthday is not lucky🥺`);
    }
  } else {
    showMessage(`Please enter valid entries❌`);
  }
};

const datetoSum = function (date) {
  const dateSum = date
    .replaceAll("-", "")
    .split("")
    .map((num) => Number(num))
    .reduce((num, acc) => num + acc, 0);
  return dateSum;
};

button.addEventListener("click", checkBirthday);
