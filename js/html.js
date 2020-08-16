const htmlStuff = [
  {
    lvl: 1,
    unlock: 'plaintext',
    desc: 'The user text',
    size: 0,
    qualityPoint: 0.0001,
    buttonName: 'Sample Text',
  },
  {
    lvl: 2,
    unlock: 'br',
    desc: 'Make a new line on a plain text.',
    size: 30,
    qualityPoint: 0.005,
    buttonName: 'Text into a new line',
  },
  {
    lvl: 3,
    unlock: 'p',
    desc: 'To make a paragraph',
    size: 40,
    qualityPoint: 0.01,
    buttonName: 'New paragraph',
  },
  {
    lvl: 5,
    unlock: 'b',
    desc: 'To put some text on bold',
    size: 100,
    qualityPoint: 0.1,
    buttonName: 'New bold text',
  },
  {
    lvl: 5,
    unlock: 'i',
    desc: 'To put some text on italic',
    size: 100,
    qualityPoint: 0.1,
    buttonName: 'New italic text',
  },
  {
    lvl: 5,
    unlock: 'u',
    desc: 'To put some text on underline',
    size: 100,
    qualityPoint: 0.1,
    buttonName: 'New underline text',
  },
  {
    lvl: 7,
    unlock: 'a',
    desc: 'To add a link.',
    size: 400,
    qualityPoint: 0.5,
    buttonName: 'New link',
  },
  {
    lvl: 10,
    unlock: 'uli',
    desc: 'Make some list',
    size: 200,
    qualityPoint: 0.25,
    buttonName: 'New list',
  },
  {
    lvl: 12,
    unlock: 'ol',
    desc: 'Make some numbered list',
    size: 250,
    qualityPoint: 0.3,
    buttonName: 'New numbered list',
  },
  {
    lvl: 15,
    unlock: 'img',
    desc: 'Add images to the page',
    size: 1000,
    qualityPoint: 1.5,
    buttonName: 'New image',
  },
  {
    lvl: 30,
    unlock: 'iframe',
    desc: 'Add a box of an another website into a page',
    size: 3000,
    qualityPoint: -666,
    buttonName: 'New iframe',
  },
  {
    lvl: 100,
    unlock: 'script',
    desc: 'End the game',
    size: 1000000,
    qualityPoint: 100,
    buttonName: 'New script',
  },
];

function htmladdparams() {
  btnSelection.innerHTML = '';
  htmlStuff.forEach((e) => {
    if (e.lvl <= playerInfo.lvl) {
      const btn = document.createElement('input');
      btn.setAttribute('type', 'radio');
      btn.setAttribute('name', 'html');
      const label = document.createElement('label');
      label.innerHTML = e.buttonName;
      label.setAttribute('for', e.unlock);
      btn.id = e.unlock;
      btn.addEventListener('click', (e) => {
        htmlFun(e.target.id);
      });
      const d = document.createElement('div');
      d.append(btn);
      d.append(label);
      btnSelection.append(d);
    }
  });
}

htmladdparams();

function htmlFun(id) {
  const element = htmlStuff.find((a) => a.unlock == id);
  playerInfo.currentWallet.html = element.unlock;
  allcost();
}
