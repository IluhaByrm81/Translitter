const button = document.getElementById("push");
button.onclick = obrab;

function obrab() {
  const outOne = document.getElementById("int").value;
  const pOne = document.createElement("p");
  pOne.className = "p";
  pOne.title = `${outOne}`;
  pOne.textContent += `${outOne}`;
  outA.appendChild(pOne);

  const outTwo = translit(outOne);
  const pTwo = document.createElement("p");
  pTwo.classList = "p";
  pTwo.title = `${outTwo}`;
  pTwo.textContent += `${outTwo}`;
  outB.appendChild(pTwo);
}

function translit(text) {
  const rus_Kir = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ж: "j",
    з: "z",
    и: "i",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ы: "y",
    э: "e",
    ю: "yu",
    я: "ya",
    " ": " ",
  };

  const userText = [];
  const intText = text.split("");

  for (let i = 0; i < intText.length; i++) {
    for (const key in rus_Kir) {
      if (key == intText[i]) {
        userText.push(rus_Kir[key]);
      }
    }
  }
  return userText.join("");
}

function transliter(text) {
  return text
    .split("")
    .map((char) => object[char] || char)
    .join("");
}
