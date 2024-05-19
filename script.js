let clickBtn = document.getElementById('clickBt')
let clickBtn2 = document.getElementById('clickBt2')
let update = document.getElementById('updateScore')
let inflation = document.getElementById('updatecost')
let clickpower = 1;
let Score = 0;
let prices = 25;

function game(){
    clickBtn.addEventListener('click', addScore)
    clickBtn2.addEventListener('click', UPgrade)
}
function addScore(){
    Score += clickpower
    console.log(Score);
    updateScore.innerText = `Score: ${Score}`;
}
function UPgrade(){
    if(Score>=prices){
            Score-=prices
            clickpower += 2
            prices = clickpower*2+prices
            updateScore.innerText = `Score: ${Score}`;
            updatecost.innerText = `upgrade cost : ${prices}`;
    }
}

game();
