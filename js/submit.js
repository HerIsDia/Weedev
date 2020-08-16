downloadWebpage.addEventListener('click', () => {
  var blob = new Blob([webPage.innerHTML], {
    type: 'text/html;charset=utf-8',
  });
  saveAs(blob, 'generated.html');
});

submitWebpage.addEventListener('click', () => {
  let websitevalue = 0;
  websitevalue += 0.0001 * playerInfo.WebpageContent.text.length;
  playerInfo.currentWallet.text = '';
  playerInfo.currentWebpage = '';
  playerInfo.WebpageContent.text = '';

  playerInfo.WebpageContent.html.forEach((e) => {
    const value = htmlStuff.find((a) => a.unlock == e);
    websitevalue += value.qualityPoint;
  });
  playerInfo.WebpageContent.html = [];

  playerInfo.WebpageContent.css.forEach((c) => {
    const cvalue = cssStuff.find((a) => a.unlock == c);
    websitevalue += cvalue.qualityPoint;
  });
  playerInfo.WebpageContent.css = [];

  console.log(websitevalue);
  playerInfo.xp += websitevalue * 10;
  playerInfo.money += websitevalue * 2;
  savePlayerInfo();
  htmladdparams();
  cssaddparams();
});
