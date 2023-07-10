//1~100까지 숫자 랜덤 출력하게 해주기
//사용자가 숫자 쓰고 GO 버튼 누르고 비교해주기
//사용자 숫자>컴퓨터 숫자면 Down, 컴퓨터 숫자>사용자 숫자면 Up
//기회는 5번, 5번 모두 사용하면 리셋 시키기, go 버튼 disabled
//사용자가 범위 밖의 숫자 입력하면 알려주고, 기회 깎지 않기
//사용자가 같은 숫자 입력하면 알려주고, 기회 깎지 않기 

let computerNum = 0
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 5
let chanceArea = document.getElementById("chance-area")
let gameOver = false
let history = []

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){ 
    userInput.value="";
});

function randomNum() {
    computerNum=Math.floor(Math.random()*100)+1;
    console.log(computerNum)
}

function play() {
    let userValue = userInput.value;

    if (userValue<1 || userValue >100) {
        resultArea.textContent="1~100사이의 숫자를 입력하세요"
        return;
    }

    if (history.includes(userValue)) {
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자 입력해주세요"
        return;
    }
    
    chances --;
    chanceArea.textContent=`남은 기회: ${chances}번`

    if (computerNum>userValue) {
        resultArea.textContent="UP!!"
    } else if (computerNum<userValue) {
        resultArea.textContent="DOWN!!"
    } else  {
        resultArea.textContent="맞추셨습니다~!"
        gameOver=true
    }
   
    history.push(userValue)

    if(chances<1) {
        gameOver=true
    }

    if(gameOver==true) {
        playButton.disabled=true;
        resultArea.textContent="실패하셨습니다ㅠㅠ"
    }
}

function reset() {
    //user input 정리 
    userInput.value = ""
     //다시 시작
     randomNum()
    
}


randomNum()