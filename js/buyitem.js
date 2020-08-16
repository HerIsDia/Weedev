let buyBtn = document.querySelectorAll('.buy');

buyBtn.forEach((Btn) => {
  Btn.addEventListener('click', (e) => {
    const buyable = e.target.id.split(' ');
    if (buyable[0] == 'componant') {
      const cost = PCcomponant[buyable[1] - 1].StartingPrice;
      if (playerInfo.money >= cost) {
        playerInfo.money -= cost;
        playerInfo.items.componant.push(buyable[1]);
        console.log(e.currentTarget.parentNode);
        if (
          PCcomponant[buyable[1] - 1].Limit ==
          playerInfo.items.componant.filter((x) => x == buyable[1]).length
        ) {
          e.currentTarget.parentNode.remove();
        }
        playerInfo.CPKP += PCcomponant[buyable[1] - 1].CPKP;
        savePlayerInfo();
      } else {
        alert('You dont have enouth money');
      }
    } else if (buyable[0] == 'software') {
      const cost = SoftwareLicence[buyable[1] - 1].Price;
      if (playerInfo.money >= cost) {
        playerInfo.money -= cost;
        playerInfo.items.software.push(buyable[1]);
        e.currentTarget.parentNode.remove();
        playerInfo.CPS += SoftwareLicence[buyable[1] - 1].CPS;
        savePlayerInfo();
      } else {
        alert('You dont have enouth money');
      }
    }
  });
});
