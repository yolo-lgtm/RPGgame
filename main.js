'use strict';
{
  const start = document.getElementById('start');

  let humanHp = 50;
  let bossHp = 100;

  const bossPhase = () => {
    const bossAttack = Math.floor(Math.random() * 7) + 1;
    humanHp -= bossAttack;
    document.getElementById('bossLog').innerHTML = '勇者に' + bossAttack + 'のダメージ！';
    document.getElementById('humanGauge').textContent = 'HP' + humanHp;
    if (humanHp <= 0) {
      window.alert('勇者は力尽きてしまった、、、');
    }
  }

  const humanPhase = () => {
    const humanSkill = Math.floor(Math.random() * 20) + 1;
    bossHp -= humanSkill;
    document.getElementById('humanLog').innerHTML = 'ボスに' + humanSkill + 'のダメージ！';
    document.getElementById('bossGauge').textContent = 'HP' + bossHp;
    if (bossHp <= 0) {
      window.alert('ボスを倒しました！');
    }
  }

  start.addEventListener('click', () => {
    bossPhase();
    humanPhase();
    if (humanHp <= 0 && bossHp <= 0) {
      window.alert('両者ともにHPがなくなってしまった！');
    }
  });

}
