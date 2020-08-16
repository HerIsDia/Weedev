let playerInfo = {
  character: 0,
  money: 0,
  CPS: 0,
  lvl: 1,
  CPKP: 1,
  xp: 0,
  items: {
    componant: [1],
    software: [1],
  },
  currentWebpage: '',
  WebpageContent: {
    text: '',
    html: [],
    css: [],
  },
  currentWallet: {
    text: '',
    html: 'plaintext',
    css: [],
  },
};

if (localStorage.getItem('playerInfo')) {
  const saved = JSON.parse(localStorage.getItem('playerInfo'));
  playerInfo = saved;
}

savePlayerInfo();

function savePlayerInfo() {
  playerChar.innerHTML =
    `${playerInfo.character.toFixed(2)} character` +
    (playerInfo.character > 1 ? 's' : '');
  imputText.value = playerInfo.currentWallet.text;
  webPage.innerHTML = playerInfo.currentWebpage;
  playerMoney.innerHTML = playerInfo.money.toFixed(4) + '$';
  while (playerInfo.xp >= 1 * (0.1 * playerInfo.lvl)) {
    playerInfo.xp -= 1 * (0.1 * playerInfo.lvl);
    playerInfo.lvl += 1;
  }
  playerCPS.innerHTML = `+${playerInfo.CPS.toFixed(1)}/s.`;
  const pourcentXp = (playerInfo.xp * 100) / (1 * (0.1 * playerInfo.lvl));
  actualXP.setAttribute('style', `width: ${pourcentXp}px`);
  playerLevel.innerHTML = `Level ${playerInfo.lvl}`;
  try {
    const rb = document.querySelector('#' + playerInfo.currentWallet.html);
    rb.setAttribute('checked', 'true');
  } catch (error) {}
  try {
    playerInfo.currentWallet.css.forEach((e) => {
      const cb = document.querySelector('#' + e);
      cb.setAttribute('checked', 'true');
    });
  } catch (error) {}
  const goSave = JSON.stringify(playerInfo);
  localStorage.setItem('playerInfo', goSave);
}

const PCcomponant = [
  {
    id: 1,
    Name: 'InPhone 0800',
    StartingPrice: 0,
    CPKP: 1,
    Limit: 1,
  },
  {
    id: 2,
    Name: 'OceanGate 64Go',
    StartingPrice: 0.1,
    CPKP: 0.2,
    Limit: 4,
  },
  {
    id: 3,
    Name: 'PHP x560',
    StartingPrice: 1,
    CPKP: 0.5,
    Limit: 1,
  },
  {
    id: 4,
    Name: 'PHP Key Essencial',
    StartingPrice: 5,
    CPKP: 1,
    Limit: 1,
  },
  {
    id: 5,
    Name: 'RoyalStone SSD C400 256Go',
    StartingPrice: 10,
    CPKP: 2,
    Limit: 2,
  },
  {
    id: 6,
    Name: 'Ramer Chromakey RGB For Gamer With 16.8 BILLIONS of colors.',
    StartingPrice: 25,
    CPKP: 4,
    Limit: 1,
  },
  {
    id: 7,
    Name: 'Ramer LifeAdder Essential',
    StartingPrice: 50,
    CPKP: 5,
    Limit: 5,
  },
  {
    id: 8,
    Name: 'Corfire leave PRO RGB MOBA/CIV VI Optic g@m3rs mouse.',
    StartingPrice: 100,
    CPKP: 10,
    Limit: 1,
  },
  {
    id: 9,
    Name: 'Touchba 256Go',
    StartingPrice: 100,
    CPKP: 6.9,
    Limit: 5,
  },
  {
    id: 10,
    Name: 'Poorcomm Snaplion',
    StartingPrice: 200,
    CPKP: 10,
    Limit: 4,
  },
  {
    id: 11,
    Name: 'Comics Digital 1To',
    StartingPrice: 250,
    CPKP: 8,
    Limit: 8,
  },
  {
    id: 12,
    Name: 'Samsule SSD 960 512Go',
    StartingPrice: 500,
    CPKP: 15,
    Limit: 6,
  },
  {
    id: 13,
    Name: 'OceanGate GoldenCat 4To',
    StartingPrice: 1000,
    CPKP: 20,
    Limit: 4,
  },
  {
    id: 14,
    Name: 'inPhone Again i9 7th Gen',
    StartingPrice: 2000,
    CPKP: 50,
    Limit: 4,
  },
  {
    id: 15,
    Name: 'Loginfo V PRO.',
    StartingPrice: 2500,
    CPKP: 100,
    Limit: 1,
  },
  {
    id: 16,
    Name: 'Corfire K75 RGB Wireless',
    StartingPrice: 2500,
    CPKP: 80,
    Limit: 1,
  },
  {
    id: 17,
    Name: 'Dirtdisk SSD 1To',
    StartingPrice: 5000,
    CPKP: 200,
    Limit: 16,
  },
  {
    id: 18,
    Name: 'Loginfo V Oreo.',
    StartingPrice: 10000,
    CPKP: 500,
    Limit: 1,
  },
  {
    id: 19,
    Name: 'Comics Digital 2To',
    StartingPrice: 30000,
    CPKP: 1000,
    Limit: 16,
  },
  {
    id: 20,
    Name: 'DAM ULTIMATUM 6470.',
    StartingPrice: 1000000,
    CPKP: 50000,
    Limit: 1,
  },
];

const SoftwareLicence = [
  {
    id: 1,
    Name: 'Nulix Tubunu 10.0',
    Price: 0,
    CPS: 0,
  },
  {
    id: 2,
    Name: 'PadNotes--',
    Price: 1,
    CPS: 0.1,
  },
  {
    id: 3,
    Name: 'Comics',
    Price: 2,
    CPS: 0.4,
  },
  {
    id: 4,
    Name: 'Airiabl',
    Price: 5,
    CPS: 0.5,
  },
  {
    id: 5,
    Name: 'OrangeOS 7.0',
    Price: 20,
    CPS: 2,
  },
  {
    id: 6,
    Name: 'Magnific text',
    Price: 25,
    CPS: 3,
  },
  {
    id: 7,
    Name: 'web previsualizer',
    Price: 35,
    CPS: 5,
  },
  {
    id: 8,
    Name: 'AutoComplete+',
    Price: 50,
    CPS: 10,
  },
  {
    id: 9,
    Name: 'NewBooks',
    Price: 100,
    CPS: 20,
  },
  {
    id: 10,
    Name: 'Winup 7 Pro',
    Price: 200,
    CPS: 10,
  },
  {
    id: 11,
    Name: 'MediaWater',
    Price: 250,
    CPS: 5,
  },
  {
    id: 12,
    Name: 'Inbox',
    Price: 300,
    CPS: 10,
  },
  {
    id: 13,
    Name: 'Textual Studio code',
    Price: 500,
    CPS: 30,
  },
  {
    id: 14,
    Name: 'e-meet',
    Price: 750,
    CPS: 50,
  },
  {
    id: 15,
    Name: 'GIGA',
    Price: 1000,
    CPS: 20,
  },
  {
    id: 16,
    Name: 'Computo',
    Price: 1500,
    CPS: 40,
  },
  {
    id: 17,
    Name: 'Global One',
    Price: 3000,
    CPS: 100,
  },
  {
    id: 18,
    Name: 'Winup 10 Pro',
    Price: 10000,
    CPS: 200,
  },
  {
    id: 19,
    Name: 'WebFlash',
    Price: 20000,
    CPS: 300,
  },
  {
    id: 20,
    Name: 'AICodePro',
    Price: 100000,
    CPS: 1000,
  },
];

componantDiv.innerHTML = '';
softwareDiv.innerHTML = '';
PCcomponant.forEach((e) => {
  if (e.Limit != playerInfo.items.componant.filter((x) => x == e.id).length) {
    const object = document.createElement('div');
    object.classList.add('c' + e.id);
    object.innerHTML = `
      <h3>${e.Name}</h3>
      <button class="buy" id="componant ${e.id}" CPKPValue="${e.CPKP}">${e.StartingPrice}$</button>
    `;
    componantDiv.append(object);
  }
});

SoftwareLicence.forEach((e) => {
  if (!playerInfo.items.software.find((element) => element == e.id)) {
    const object = document.createElement('div');
    object.classList.add('s' + e.id);
    object.innerHTML = `
        <h3>${e.Name}</h3>
        <button class="buy" id="software ${e.id}">${e.Price}$</button> 
      `;
    softwareDiv.append(object);
  }
});
