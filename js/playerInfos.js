function addChar() {
  playerInfo.character += playerInfo.CPKP;
  savePlayerInfo();
}

setInterval(() => {
  playerInfo.character += playerInfo.CPS;
  savePlayerInfo();
}, 1000);
