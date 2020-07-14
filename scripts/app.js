console.log("pls bro");

let hero = document.createElement("img");
hero.setAttribute("src", "./images/ness bike.gif");
hero.setAttribute("id", "heroß");
hero.setAttribute("class", "grid-img");
//document.querySelector(".grid-item").append(hero);

//gameobject that keeps track of gamestate
let gameState = 
{
    playerPositionX: 0,
    playerPositionY: 0
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
    if (x < 0) x = 0;
    if (x > 4) x = 4;
    if (y < 0) y = 0;
    if (y > 4) y = 4;
    gridSystem[y][x].append(hero);
    gameState.playerPositionX = x;
    gameState.playerPositionY = y;
}

function playerInput(e)
{
    //taken and modified from:
    //https://www.includehelp.com/code-snippets/move-object-with-arrow-keys-using-javascript-function.aspx
    let key_code=e.which||e.keyCode;
		switch(key_code){
			case 37: //left arrow key
				move(gameState.playerPositionX - 1, gameState.playerPositionY);
				break;
			case 38: //Up arrow key
				move(gameState.playerPositionX, gameState.playerPositionY - 1);
				break;
			case 39: //right arrow key
				move(gameState.playerPositionX + 1, gameState.playerPositionY);
				break;
			case 40: //down arrow key
				move(gameState.playerPositionX, gameState.playerPositionY + 1);
				break;						
		}
}


let screens = document.getElementsByClassName("screen");

//Game scene change activation

function screenChange(screenName)
{
    for(let i = 0; i < screens.length; i++)
    {
        if(screens[i].id == screenName)
        {
            screens[i].classList.remove("hidden");
        } 
        else
        {
            screens[i].classList.add("hidden");
        }
    }
}

function startGame()
{
    screenChange("grid-screen");
    createGrid();
    move(0,0);
}

