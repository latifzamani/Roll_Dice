const score0 = document.querySelector('.score-0');
const score1 = document.querySelector('.score-1');
const btnnew = document.querySelector('.btnnew')
const btnroll = document.querySelector('.btnroll')
const btnhold = document.querySelector('.btnhold')
score0.textContent = 0;
score0.textContent = 0;
score1.textContent = 0;
let currentNumber = 0;
let activplayer = 0;
let scores = [0, 0];
let dice = document.querySelector('.dice');
dice.classList.add('hidden');
let playing = true;


function switchnext() {
    currentNumber = 0;
    document.querySelector(`#currentscore-${activplayer}`).textContent = currentNumber
    activplayer = activplayer == 0 ? 1 : 0;
    document.querySelector(`.player0`).classList.toggle('player-active')
    document.querySelector(`.player1`).classList.toggle('player-active')

}
btnroll.addEventListener('click', function () {
    if (playing) {

        const diceNumber = Math.trunc(Math.random() * 6) + 1;
        console.log(diceNumber)
        dice.classList.remove('hidden');

        dice.src = `../image/dice-${diceNumber}.png`;

        if (diceNumber !== 1) {
            currentNumber += diceNumber;
            document.querySelector(`#currentscore-${activplayer}`).textContent = currentNumber;
        } else {
            switchnext();
        }

    }
})

btnhold.addEventListener('click', function () {
    if (playing) {

        //save the number
        scores[activplayer] += currentNumber;
        document.querySelector(`.score-${activplayer}`).textContent = scores[activplayer];
        //check if score>=100
        if (scores[activplayer] >= 20) {
            playing = false;
            dice.classList.add('hidden');
            document.querySelector(`.player${activplayer}`).classList.add('winnerplayer');
            document.querySelector(`.player${activplayer}`).classList.remove('player-active');
        } else {

            //switch to next
            switchnext();
        }

    }
})
btnnew.addEventListener('click', function () {
    playing=true;
    score0.textContent = 0;
    score1.textContent = 0;
    document.querySelector('#currentscore-0').textContent=0;
    document.querySelector('#currentscore-1').textContent=0;
    document.querySelector('.player0').classList.add('player-active');
    document.querySelector('.player1').classList.remove('player-active');
    document.querySelector('.player0').classList.remove('winnerplayer')
    document.querySelector('.player1').classList.remove('winnerplayer')
    dice.classList.add('hidden');
})
document.querySelector('.btnrule').addEventListener('click',function(){
    document.querySelector('.rules').classList.toggle('hidden');
    document.querySelector('#overlay').classList.add('overlay');
    
});
document.querySelector('.overlay').addEventListener('click',function(){
    document.querySelector('.rules').classList.toggle('hidden');
    document.querySelector('#overlay').classList.remove('overlay');

    console.log('jjjjj');

})