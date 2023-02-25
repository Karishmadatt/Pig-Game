'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentscore0 = document.querySelector('#current--0');
const currentscore1 = document.querySelector('#current--1');
const diceE1 = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

let currentscore,activeplayer,score,playing;

const init = function(){
    score0.textContent=0;
    score1.textContent=0;
    currentscore = 0;
    activeplayer = 0;
    playing = true;
    score=[0,0];
    diceE1.classList.add('hidden');
    score0.textContent=currentscore;
    score1.textContent=currentscore;
    currentscore0.textContent=currentscore;
    currentscore1.textContent=currentscore;
    diceE1.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}

init();

const switch_player = function(){
    document.querySelector(`#current--${activeplayer}`).textContent=0
    currentscore=0;
    activeplayer = activeplayer===0?1:0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

btnroll.addEventListener('click', function(){
    if(playing){
    const dice = Math.trunc(Math.random()*6)+1;
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${dice}.png`;
    if(dice!=1){
      currentscore+=dice;
      document.querySelector(`#current--${activeplayer}`).textContent=currentscore;
    }else{
         switch_player();

    }
 }
})

btnhold.addEventListener('click',function(){
    if(playing){
    score[activeplayer]+=currentscore;
    document.querySelector(`#score--${activeplayer}`).textContent=score[activeplayer];
     
    if(score[activeplayer]>=20){
        playing=false;
        diceE1.classList.add('hidden');
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
    }else{
    switch_player();
    }
  }
})

btnnew.addEventListener('click',init);


