let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnX = true; //player x or player o
let count=0; // for count

const winchoices=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = ()=> {
    turnX=true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
       if(turnX){ //player x turn
        box.innerText = "X";
        turnX=false;
       }else{  //player o turn
        box.innerText = "O";
        turnX = true;
       }
       box.disabled = true;
       count++;
       let iswinner = checkWinner();

       if (count===9&& !iswinner) {
        gameDraw();
       }
    });
});

const gameDraw = ()=>{
    msg.innerText =`Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = ()=> {
    for(let box of boxes){
        box.disabled= true;
    }
};

const enableBoxes = ()=> {
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
};

const showwinner=(winner)=> {
    msg.innerText = `congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winchoices) {
        let val1=boxes[pattern[0]].innerText;
        let val2=boxes[pattern[1]].innerText;
        let val3=boxes[pattern[2]].innerText;

        if(val1!=""&& val2!=""&&val3!=""){
            if(val1===val2&&val2===val3) {
                console.log("winner",val1);
                showwinner(val1);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);s