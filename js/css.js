const cssStuff = [
  {
    lvl: 20,
    unlock: 'font-family',
    desc: 'To change the font of a element.',
    size: 200,
    qualityPoint: 1,
    buttonName: 'Change Font',
  },
  {
    lvl: 20,
    unlock: 'color',
    desc: 'Change a color of ellement',
    size: 100,
    qualityPoint: 0.25,
    buttonName: 'Change color',
  },
  {
    lvl: 20,
    unlock: 'background-color',
    desc: 'to change the background color. duhhh.',
    size: 150,
    qualityPoint: 0.25,
    buttonName: 'Change background color',
  },
  {
    lvl: 20,
    unlock: 'font-size',
    desc: 'to change the size of the font',
    size: 200,
    qualityPoint: 0.5,
    buttonName: 'Change font size',
  },
  {
    lvl: 30,
    unlock: 'border',
    desc: 'Add border to an element',
    size: 600,
    qualityPoint: 1,
    buttonName: 'Add border',
  },
  {
    lvl: 35,
    unlock: 'border-radius',
    desc: 'Arroud the border',
    size: 500,
    qualityPoint: 1,
    buttonName: 'Make rounded border',
  },
  {
    lvl: 50,
    unlock: 'margin',
    desc: 'add space inside the border',
    size: 1000,
    qualityPoint: 5,
    buttonName: 'Add space inside the border',
  },
  {
    lvl: 75,
    unlock: 'padding',
    desc: 'add space outside the border',
    size: 1000,
    qualityPoint: 5,
    buttonName: 'Add space outside the border',
  },
];

function cssaddparams() {
  cssBtn.innerHTML = '';
  cssStuff.forEach((e) => {
    if (e.lvl <= playerInfo.lvl) {
      const cssbut = document.createElement('input');
      cssbut.setAttribute('type', 'checkbox');
      cssbut.setAttribute('name', 'css');
      cssbut.id = e.unlock;
      const cssl = document.createElement('label');
      cssl.innerText = e.buttonName;
      cssl.setAttribute('for', e.unlock);
      cssbut.addEventListener('click', (a) => {
        cssFun(a.target.id, a.target.checked);
      });
      const dc = document.createElement('div');
      dc.append(cssbut);
      dc.append(cssl);
      cssBtn.append(dc);
    }
  });
}

cssaddparams();

function cssFun(id, state) {
  const element = cssStuff.find((a) => a.unlock == id);
  if (state) {
    playerInfo.currentWallet.css.push(element.unlock);
  } else {
    const d = playerInfo.currentWallet.css.indexOf(element.unlock);
    playerInfo.currentWallet.css.splice(d, 1);
  }
  allcost();
}
