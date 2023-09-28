export function getRandomCombo(comboLength: number) {
  const validKeysCombined = "1234567890qwertyuiopasdfghjklzxcvbnm";
  const validKeys = validKeysCombined.split("");

  let randomCombo = "";

  while (randomCombo.length !== comboLength) {
    let randomIndex = Math.floor(Math.random() * validKeys.length + 0);

    randomCombo += validKeys[randomIndex];

    validKeys.splice(randomIndex, 1);
  }

  return randomCombo;
}

export function playAudio(path: string) {
  var audio = new Audio(path);

  audio.play();
}
