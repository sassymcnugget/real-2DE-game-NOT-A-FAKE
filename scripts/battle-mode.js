console.log("pls battle me bro");

let battleScreen = document.querySelector("#battle-screen");
let battleImage = document.querySelector("#battle-image");

const player = 
{
    name: "heroic lad",
    attack: () =>
        {
        return Math.round(Math.random() * (4 - 1) + 1);
        },
    defense: 2,
    critDamage: () =>
        {
            return Math.round(Math.random() * (4 - 1) +1);
        },
    defaultHp: 15,
    hp: 15,
    magAttack: () =>
    {
        return Math.round(Math.random() * (4 - 1) + 1);
        },
    magDefense: 3,
    leaveText: "Heroic lad scurried away crying to his family",
    loseText: "OH GEEZ"
}


//adding array of enemies to pull from
let enemies = 
[
    {
        name: "Shrek",
        type: "Ogre",
        battleStyle: "appears from the mud",
        battleImage: "./images/shrekk.gif",
        battleHurtImage: "./images/shrekk hurt.gif",
        overworldImage: "./images/placeholder.gif",
        hp: 15,
        defaultHp: 15,
        attack: () =>
        {
            return Math.round(Math.random() * (5 - 1) + 1);
        },
        defense: 1,
        magAttack: () =>
        {
            return Math.round(Math.random() * (1 - 1) + 1);
        },
        magDefense: 0,
        critDamage: () =>
        {
            return Math.round(Math.random() * (2 - 1) +1);
        },
        encounterChance: 4,
        battleGreeting: ["WHY ARE YOU IN MY SWAMP", "GET OUTTA MY SWAMP", "AAAAAAAAAAAAA"],
        winText: "STAY. AWAY.",
        loseText: "DONKEH",
        leaveText: "Shrek waded back into the swamp"
    },

    {
        name: "Nina",
        type: "Chimera",
        battleStyle: "wanders up to you",
        battleImage: "./images/nina doing a THING.gif",
        battleHurtImage: "./images/nina hurt.gif",
        overworldImage: "./images/placeholder.gif",
        hp: 5,
        defaultHp: 5,
        attack: () =>
        {
            return Math.round(Math.random() * (2 - 1) + 1);
        },
        defense: 0,
        magAttack: () =>
        {
            return Math.round(Math.random() * (2 - 1) + 1);
        },
        magDefense: 0,
        critDamage: () =>
        {
            return Math.round(Math.random() * (2 - 1) +1);
        },
        encounterChance: 6,
        battleGreeting: ["H....help me...", "*whines*"],
        winText: "go....now....with mama...",
        loseText: "...",
        leaveText: "Nina collapsed"
    },
    {
        name: "Cosmo Kramer",
        type: "Neighbor",
        battleStyle: "& cohort approach",
        battleImage: "./images/Cosmo.gif",
        battleHurtImage: "./images/Cosmo hurt.gif",
        overworldImage: "./images/placeholder.gif",
        hp: 12,
        defaultHp: 12,
        attack: () =>
        {
            return Math.round(Math.random() * (3 - 1) + 1);
        },
        defense: 1,
        magAttack: () =>
        {
            return Math.round(Math.random() * (3 - 1) + 1);
        },
        magDefense: 0,
        critDamage: () =>
        {
            return Math.round(Math.random() * (2 - 1) +1);
        },
        encounterChance: 5,
        battleGreeting: ["You know, I love the name Isosceles. If I had a kid, I would name him Isosceles. Isosceles Kramer", 
        "Have you ever MET a proctologist? They usually have a very good sense of humor. You meet a proctologist at a party, dont walk away. Plant yourself there because you will hear the funniest stories you've ever heard",
        "Who IS the ass man?", "LOOK AWAY, I'M HIDEOUS"],
        winText: "Looks like you're nothing but an anti dentite",
        loseText: "these... crackers are making... me thirsty....",
        leaveText: "Kramer stumbled away looking confused"
    },
    {
        name: "Joshua",
        type: "devil",
        battleStyle: "laughs his way into battle",
        battleImage: "./images/devil.gif",
        battleHurtImage: "./images/devil hurt.gif",
        overworldImage: "./images/placeholder.gif",
        hp: 30,
        defaultHp: 30,
        attack: () =>
        {
            return Math.round(Math.random() * (7 - 1) + 1);
        },
        defense: 2,
        magAttack: () =>
        {
            return Math.round(Math.random() * (5 - 1) + 1);
        },
        magDefense: 0,
        critDamage: () =>
        {
            return Math.round(Math.random() * (3 - 1) +1);
        },
        encounterChance: 1,
        battleGreeting: ["hee hee hee", "Having fun?", "this is a nice distraction"],
        winText: "farewell",
        loseText: "how.. could you...?",
        leaveText: "Joshua teleported away with a rather miffed expression on his face"
    },
    {
        name: "Johnothan Tronothan",
        type: "local funny man",
        battleStyle: "comes over to talk to you about boats",
        battleImage: "./images/jonothantronathan.png",
        battleHurtImage: "./images/nina hurt.gif",
        overworldImage: "./images/placeholder.gif",
        hp: 18,
        defaultHp: 18,
        attack: () =>
        {
            return Math.round(Math.random() * (2 - 1) + 1);
        },
        defense: 3,
        magAttack: () =>
        {
            return Math.round(Math.random() * (4 - 1) + 1);
        },
        magDefense: 0,
        critDamage: () =>
        {
            return Math.round(Math.random() * (3 - 1) +1);
        },
        encounterChance: 3,
        battleGreeting: ["EEEEECK", "Have you heard of Flex Tape? I dunno, have you heard of JESUS?", 
        "YOU MAKE ME ANGRY PHIL"],
        winText: "WHAT THE FUCK IS A SONIC? *does line of coke*",
        loseText: "And I.....HOLY SHIT. Will always love you! Holy hsit I can't believe you did this to me. Damn how could you do this to me?",
        leaveText: "Jon just walks away"
    }

]

//encounter chance sum totalled here
let encounterChanceSum = 0

function calculateEncounterSum()
{
    for(let i=0; i < enemies.length; i++)
    {
        encounterChanceSum += enemies[i].encounterChance;
    }
}

function randomElementInArray(array)
{
    return array[Math.floor(Math.random() * array.length)];
}

//encounter chance addede within start battle
//doing the math in the function so that it's easier to pull from later if I add more enemies later
async function startBattle()
{
    gameState.isBattling = true;
    battleScreen.classList.remove("hidden");
    console.log("this battle has started!");

    let currentEnemy = encounterFunction();
    gameInfo.currentEnemy = currentEnemy;
    document.querySelector("#enemy-hp").innerHTML = currentEnemy.hp;
    document.querySelector("#player-hp").innerHTML = player.hp;
    
    battleImage.setAttribute("src", currentEnemy.battleImage);
    showElement(messageBoxContainer);
    setMessage(currentEnemy.type + " " + currentEnemy.name + " " + currentEnemy.battleStyle);
    console.log(currentEnemy.type + " " + currentEnemy.name + " " + currentEnemy.battleStyle);

    await sleep(2000);

    console.log(randomElementInArray(currentEnemy.battleGreeting));
    setMessage(randomElementInArray(currentEnemy.battleGreeting));
}

//battle chance
//this returns a value to see who is most likely to be battled
//easier so that I can scale enemies later
function encounterFunction()
{
    let encounterStep = 0;
    let roll = Math.random() * encounterChanceSum;
    for(let i=0; i < enemies.length; i++)
    {
        if(roll < encounterStep + enemies[i].encounterChance)
            return enemies[i];
        else
            encounterStep += enemies[i].encounterChance;
    }
}

calculateEncounterSum();
console.log(encounterChanceSum);


const gameInfo = 
{
    loser: {},
    currentEnemy: {}
}

function rollCpuAttack()
{
    if(Math.random() <= .5)
    {
        return "attack";
    }
    else
    {
        return "magAttack";
    }
}

async function battle(attackValue, defenseValue)
{
    if("name" in gameInfo.loser) return;

    let currentEnemy = gameInfo.currentEnemy;

    let cpuAttack = rollCpuAttack();
    let battleMessage;
    if(cpuAttack == "magAttack")
    {
        battleMessage = battleTurn(player, currentEnemy, attackValue, defenseValue) +  
        "  |  (magic damage)" + battleTurn(currentEnemy, player, currentEnemy.magAttack(), player.magDefense);
        console.log("magic attack is happening");
    }
    else
    {
        battleMessage = battleTurn(player, currentEnemy, attackValue, defenseValue) +  
        "  |  " + battleTurn(currentEnemy, player, currentEnemy.attack(), player.defense);
        console.log("regular attack is happening");
    }
    
    document.querySelector("#enemy-hp").innerHTML = currentEnemy.hp;
    document.querySelector("#player-hp").innerHTML = player.hp;
    console.log(battleMessage);
    setMessage(battleMessage);

    if('name' in gameInfo.loser)
    {
        await sleep(2000);
        endBattle();
    }
    if(currentEnemy.hp <= currentEnemy.defaultHp/3)
    {
        battleImage.setAttribute("src", currentEnemy.battleHurtImage);
    }
}

function battleTurn(attacker, defender, attackAmount, defenseAmount)
{
    defender.hp -= Math.max(attackAmount - defenseAmount, 0);
    
    let battleMessage = attacker.name+" hit " + defender.name + " for " + attackAmount;
    let critDamage = attacker.critDamage();
    let critRate = .3;
    if(Math.random() < critRate)
    {
        battleMessage += "\nWith additional critical damage of " + critDamage;
        defender.hp -= critDamage;
    }

    if(defender.hp <= 0)
    {
        gameInfo.loser = defender;
    }
    return battleMessage;
}

async function endBattle()
{
    let currentEnemy = gameInfo.currentEnemy;

    console.log(gameInfo.loser.loseText);
    console.log(gameInfo.loser.leaveText);

    setMessage(gameInfo.loser.loseText);
    await sleep(2000);
    setMessage(gameInfo.loser.leaveText);
    await sleep(2000);

    if (gameInfo.loser === currentEnemy)
    {
        player.hp = player.defaultHp;
        currentEnemy.hp = currentEnemy.defaultHp;
        gameState.winCount++;
        console.log(gameState.winCount);
    }
    else
    {
        currentEnemy.hp = currentEnemy.defaultHp;
        screenChange("death-screen");
        gameInfo.winCount = 0;
    }
    hideElement(messageBoxContainer);
    hideElement(battleScreen);
    gameInfo.loser = {};
    gameState.isBattling = false;
}

async function runAway()
{
    console.log("hero successfully ran away");
    setMessage("Hero successfully ran away");
    await sleep(2000);
    hideElement(messageBoxContainer);
    hideElement(battleScreen);
    gameState.isBattling = false;
}