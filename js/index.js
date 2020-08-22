body.addEventListener('keyup', () => {
  addChar();
});

imputText.addEventListener('input', () => {
  playerInfo.currentWallet.text = imputText.value;
  allcost();
  savePlayerInfo();
});

// imputText.addEventListener('')

let cost = 0;

function allcost() {
  // For text
  cost = playerInfo.currentWallet.text.length;

  // For html
  const e = htmlStuff.find((a) => a.unlock == playerInfo.currentWallet.html);
  cost += e.size;

  // For css
  playerInfo.currentWallet.css.forEach((q) => {
    const l = cssStuff.find((y) => y.unlock == q);
    cost += l.size;
  });

  submitInfo.innerHTML =
    `This will be cost ${cost} character` + (cost > 1 ? 's.' : '.');
}

pushButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (playerInfo.character >= cost) {
    push();
  } else {
    alert("You don't have enouth character");
  }
});

imputText.addEventListener('keypress', (e) => {
  if (e.key == 'Enter') {
    e.preventDefault();
    if (playerInfo.character >= cost) {
      push();
    } else {
      alert("You don't have enouth character");
    }
  }
});

allcost();
let cssProperties = '';
function push() {
  cssProperties = '';
  let isCss = playerInfo.currentWallet.css[0] ? 1 : 0;
  let isHtml = 0;
  if (playerInfo.currentWallet.html != '') {
    const e = htmlStuff.find((a) => a.unlock == playerInfo.currentWallet.html);
    if (e.lvl > 2) {
      isHtml = 1;
    }
  }
  const added =
    isHtml == 0
      ? document.createElement('span')
      : htmlAdded(playerInfo.currentWallet.text);
  if (isHtml == 0) {
    console.log(added);
    added.innerText = playerInfo.currentWallet.text;
    playerInfo.character -= cost;
    if (isCss == 1) {
      cssAdded();
      added.setAttribute('style', cssProperties);
    }
    playerInfo.currentWebpage += added.outerHTML;
    playerInfo.WebpageContent.text += playerInfo.currentWallet.text;
    playerInfo.currentWallet.text = '';
    if (playerInfo.currentWallet.html == 'br') {
      playerInfo.currentWebpage += '<br />';
      playerInfo.WebpageContent.html.push('br');
    }
  } else {
    if (isCss == 1) {
      cssAdded();
      const doc = new DOMParser().parseFromString(added, 'text/xml');
      doc.documentElement.setAttribute('style', cssProperties);
      playerInfo.currentWebpage += doc.documentElement.outerHTML;
      playerInfo.WebpageContent.text += doc.documentElement.outerHTML;
    } else {
      playerInfo.currentWebpage += added;
      playerInfo.WebpageContent.text += added;
    }
    playerInfo.character -= cost;
    playerInfo.currentWallet.text = '';
  }
  savePlayerInfo();
  allcost();
}
let ulC = '';
function htmlAdded(e) {
  switch (playerInfo.currentWallet.html) {
    case 'a':
      const a = document.createElement('a');
      const url = prompt('What is the URL ?');
      a.setAttribute('href', url);
      a.innerText = e;
      return a.outerHTML;
    case 'uli':
      const ul = document.createElement('ul');
      const li = document.createElement('li');
      ulC = '';
      do {
        const liTxt = prompt('Add a list. (leave bank to finish)');
        li.innerText = liTxt;
        ulC += liTxt != '' ? li.outerHTML : '';
        console.log(li, liTxt, ul);
      } while (li.innerText != '');
      ul.innerHTML = ulC;
      return ul.outerHTML;
    case 'ol':
      const ol = document.createElement('ol');
      const lio = document.createElement('li');
      ulC = '';
      do {
        const lioTxt = prompt('Add a list. (leave bank to finish)');
        lio.innerText = lioTxt;
        ulC += lioTxt != '' ? lio.outerHTML : '';
        console.log(lio, lioTxt, ol);
      } while (lio.innerText != '');
      ol.innerHTML = ulC;
      return ol.outerHTML;
    case 'img':
      const image = document.createElement('img');
      image.setAttribute('src', prompt('What is the image URL ?'));
      return image.outerHTML;
    case 'iframe':
      alert('Nobody love iframe');
      body.innerHTML = '<iframe src="https://wix.com" class="hell"></iframe>';
      return '';
    case 'script':
      alert('You won the game. gg wp.');

    default:
      playerInfo.WebpageContent.html.push(playerInfo.currentWallet.html);
      const other = document.createElement(playerInfo.currentWallet.html);
      other.innerText = e;
      return other.outerHTML;
  }
}

function cssAdded() {
  playerInfo.currentWallet.css.forEach((w) => {
    playerInfo.WebpageContent.css.push(w);
    switch (w) {
      case 'font-family':
        const f = prompt(
          'CHANGE FONT FAMILY\nWhat is your font ?\n\nExample:\n"Comic Sans"\nsans-serif'
        );
        cssProperties += `font-family: ${f};`;
        break;
      case 'color':
        const color = prompt(
          'CHANGE COLOR\nWhat is the color (RGB or HEX)\nExample: #424242 or rgb(42,42,42)'
        );
        cssProperties += `color: ${color};`;
        break;
      case 'background-color':
        const bgcolor = prompt(
          'CHANGE BACKGROUND COLOR\nWhat is the background color (RGB or HEX)\n\nExample:\n#424242\nrgb(42,42,42)'
        );
        cssProperties += `background-color: ${bgcolor};`;
        break;
      case 'font-size':
        const fonts = prompt(
          'CHANGE FONT SIZE\nWhat is your font size ? (in px)\n\nExample:\n20'
        );
        cssProperties += `font-size: ${fonts}px;`;
        break;
      case 'border':
        const border1 = prompt(
          'ADD BORDER (1/2)\nWhat is the color of the Border ? (RGB or HEX)\n\nExample:\n#424242\nrgb(42,42,42)'
        );
        const border2 = prompt(
          'ADD BORDER (2/2)\nWhat is the size of the border ? (in px)\n\nExample:\n20'
        );
        cssProperties += `border: ${border1} ${border2}px solid;`;
        break;
      case 'border-radius':
        const br = prompt(
          'MAKE ROUNDED BORDER\nWhat is your border radius ? (in px)\n\nExample:\n20'
        );
        cssProperties += `border-radius: ${br}px;`;
        break;
      case 'margin':
        const m1 = prompt(
          'ADD SPACE INSIDE THE BORDER (1/2)\nWho many pixels of space you want horizontaly ?\n\nExample:\n7'
        );
        const m2 = prompt(
          'ADD SPACE INSIDE THE BORDER (2/2)\nWho many pixels of space you want vertically ?\n\nExample:\n7'
        );
        cssProperties += `padding: ${m2}px ${m1}px;`;
        // IS NOT CHEAT, IS OPTIMISATION TIME !
        break;
      case 'padding':
        const p1 = prompt(
          'ADD SPACE OUTSIDE THE BORDER (1/2)\nWho many pixels of space you want horizontaly ?\n\nExample:\n7'
        );
        const p2 = prompt(
          'ADD SPACE OUTSIDE THE BORDER (2/2)\nWho many pixels of space you want vertically ?\n\nExample:\n7'
        );
        cssProperties += `margin: ${p2}px ${p1}px;`;
        // IS NOT CHEAT, IS OPTIMISATION TIME !
        break;
    }
  });
}
