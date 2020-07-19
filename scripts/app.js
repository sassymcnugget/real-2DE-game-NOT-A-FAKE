console.log("pls bro");

//player character attributes
let hero = document.createElement("img");
hero.setAttribute("src", "./images/mc walk.gif");
hero.setAttribute("id", "heroß");
hero.setAttribute("class", "grid-img");
//document.querySelector(".grid-item").append(hero);

//gameobject that keeps track of gamestate
let gameState = 
{
    playerPositionX: 0,
    playerPositionY: 0,
    winPosition:
    {
        x: 4,
        y: 4
    },
    battleChance: .33,
    isBattling: false,
    winCount: 0
}

//Collect all grid items as an array
//Collect one row and store that row into the gridSystem
//Do for each row
let gridSystem = []

function createGrid()
{
    let gridItemArray = document.getElementsByClassName("grid-item");
    let i=0;
    for(let y = 0; y <=4; y++)
    {
        let gridRow = [];
        for(let x = 0; x <=4; x++)
        {
            let item = gridItemArray[i];
            gridRow.push(item);
            i++;
        } 
        gridSystem.push(gridRow);
    }
}

//clamping the movement of the main character so he can't move outside
//the given perimeter 
function move (x, y)
{
    if(gameState.isBattling == true) return;
    if (x < 0) x = 0;
    if (x > 4) x = 4;
    if (y < 0) y = 0;
    if (y > 4) y = 4;
    gridSystem[y][x].append(hero);
    gameState.playerPositionX = x;
    gameState.playerPositionY = y;
    winCheck();
    battleCheck();
}

//this contains the movement for the player
//aka input
function playerInput(e)
{
    //taken and modified from:
    //https://www.includehelp.com/code-snippets/move-object-with-arrow-keys-using-javascript-function.aspx
    let key_code=e.which||e.keyCode;
		switch(key_code){
            case 37: //left arrow key
            case 65: //a key
				move(gameState.playerPositionX - 1, gameState.playerPositionY);
				break;
            case 38: //Up arrow key
            case 87: //w key
				move(gameState.playerPositionX, gameState.playerPositionY - 1);
				break;
            case 39: //right arrow key
            case 68: //d key
				move(gameState.playerPositionX + 1, gameState.playerPositionY);
				break;
            case 40: //down arrow key
            case 83: //s key
				move(gameState.playerPositionX, gameState.playerPositionY + 1);
                break;
            case 32:
                pause = false;
                break;  						
		}
}

//this functions  allows the pages to easily change 
let screens = document.getElementsByClassName("screen");

//Game scene change activation

function screenChange(screenName)
{
    for(let i = 0; i < screens.length; i++)
    {
        if(screens[i].id == screenName)
        {
            showElement(screens[i]);
        } 
        else
        {
            hideElement(screens[i]);
        }
    }
}

//function to start the game
function startGame()
{
    screenChange("grid-screen");
    createGrid();
    move(0,0);
}

//this function takes the battleChance within gameState in order to see whether or not a battle will occur
//purposely left the chance for a battle to occur on the first frame because I thought that'd be funny
//changed so battleChance is within gameState so that it's easier to change in the future if more levels are added later
function battleCheck()
{
    let battleRoll = Math.random();
    if (battleRoll <= gameState.battleChance)
    {
        startBattle();
    }
}

//this checked whether or not the player has reached the bottom right corner of the board in order to win
//future-proofed the code so that it's easier to change things or add levels later
function winCheck()
{
    if(gameState.playerPositionX == gameState.winPosition.x &&
        gameState.playerPositionY == gameState.winPosition.y)
    {
        winState();
    }
}

//second part of win check. after checking that the player has landed on the bottom right corner they're brought to 
//the end screen
function winState()
{
    if (gameState.winCount >= 1)
    {
        screenChange("end-screen");
    }
    else
    {
        screenChange("pacifist-end-screen");
    }
}

//reset
function reset()
{
    player.hp = player.defaultHp;
    screenChange('start-screen');
    gameInfo.winCount = 0;
}




// MESSAGE BOX STUFF

let messageBox = document.querySelector("#message-box");

function showElement(element)
{
    element.classList.remove("hidden")
}

function hideElement(element)
{
    element.classList.add("hidden");
}

function setMessage(message)
{
    messageBox.firstElementChild.innerHTML = message;
}

//stolen and edited from https://www.sitepoint.com/delay-sleep-pause-wait/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
