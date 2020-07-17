console.log("pls battle me bro");

let battleScreen = document.querySelector("#battle-screen");
let battleImage = document.querySelector("#battle-image");

const player = 
{
    name: "heroic lad",
    attack: () =>
        {
        return Math.floor(Math.random() * (4 - 1) + 1);
        },
    defense: 2,
    //add crit percentage later
    // crit: Math.random(2, 5) + strength,
    defaultHp: 15,
    hp: 15,
    magAttack: () =>
    {
        return Math.floor(Math.random() * (4 - 1) + 1);
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
        overworldImage: "./images/placeholder.gif",
        hp: 15,
        defaultHp: 15,
        attack: () =>
        {
            return Math.floor(Math.random() * (5 - 1) + 1);
        },
        defense: 2,
        magAttack: () =>
        {
            return Math.floor(Math.random() * (2 - 1) + 1);
        },
        magDefense: 0,
        critRate: () =>
        {
            return Math.floor(Math.random() * (2 - 1) +1);
        },
        encounterChance: 4,
        battleGreeting: ["WHY ARE YOU IN MY SWAMP", "GET OUTTA MY SWAMP", "AAAAAAAAAAAAA"],
        winText: "STAY. AWAY.",
        loseText: "oooooogh",
        leaveText: "Shrek waded back into the swamp"
    },

    {
        name: "Nina",
        type: "Chimera",
        battleStyle: "wanders up to you",
        battleImage: "./images/nina doing a THING.gif",
        overworldImage: "./images/placeholder.gif",
        hp: 5,
        defaultHp: 5,
        attack: () =>
        {
            return Math.floor(Math.random() * (2 - 1) + 1);
        },
        defense: 0,
        magAttack: () =>
        {
            return Math.floor(Math.random() * (2 - 1) + 1);
        },
        magDefense: 0,
        critRate: () =>
        {
            return Math.floor(Math.random() * (2 - 1) +1);
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
        overworldImage: "./images/placeholder.gif",
        hp: 12,
        defaultHp: 12,
        attack: () =>
        {
            return Math.floor(Math.random() * (3 - 1) + 1);
        },
        defense: 1,
        magAttack: () =>
        {
            return Math.floor(Math.random() * (3 - 1) + 1);
        },
        magDefense: 0,
        critRate: () =>
        {
            return Math.floor(Math.random() * (2 - 1) +1);
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
        overworldImage: "./images/placeholder.gif",
        hp: 30,
        defaultHp: 30,
        attack: () =>
        {
            return Math.floor(Math.random() * (7 - 1) + 1);
        },
        defense: 4,
        magAttack: () =>
        {
            return Math.floor(Math.random() * (5 - 1) + 1);
        },
        magDefense: 0,
        critRate: () =>
        {
            return Math.floor(Math.random() * (3 - 1) +1);
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
        overworldImage: "./images/placeholder.gif",
        hp: 18,
        attack: () =>
        {
            return Math.floor(Math.random() * (2 - 1) + 1);
        },
        defense: 3,
        magAttack: () =>
        {
            return Math.floor(Math.random() * (4 - 1) + 1);
        },
        magDefense: 0,
        critRate: () =>
        {
            return Math.floor(Math.random() * (3 - 1) +1);
        },
        encounterChance: 2,
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

//encounter chance addede within start battle
//doing the math in the function so that it's easier to pull from later if I add more enemies later
function startBattle()
{
    battleScreen.classList.remove("hidden");
    console.log("this battle has started!");
    let currentEnemy = encounterFunction();
    console.log(currentEnemy.type + " " + currentEnemy.name + " " + currentEnemy.battleStyle);
    battleImage.setAttribute("src", currentEnemy.battleImage);
    battle(currentEnemy);
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
    currentTurn: player.name
}

function battleTurn(attacker, defender)
{
    let attack = attacker.attack();
    defender.hp -= attack;
    console.log(attacker.name+" hit " + defender.name + " for " + attack);
    console.log(defender.name + "'s hp is " + defender.hp);
    if(defender.hp <= 0)
    {
        gameInfo.loser = defender;
        gameInfo.currentTurn = player.name;
    }
    else 
    {
        gameInfo.currentTurn = defender.name;
    }
}

function battle(currentEnemy)
{
    console.log(currentEnemy.battleGreeting[0]);
    while(player.hp > 0 && currentEnemy.hp > 0)
    {
        if (gameInfo.currentTurn == player.name)
        {
            battleTurn(player, currentEnemy);
        }
        else if(gameInfo.currentTurn == currentEnemy.name)
        {
            battleTurn(currentEnemy, player);
        }
    }
    console.log(gameInfo.loser.loseText);
    console.log(gameInfo.loser.leaveText);

    if (gameInfo.loser === currentEnemy)
    {
        player.hp = player.defaultHp;
        currentEnemy.hp = currentEnemy.defaultHp;
    }
    else
    {
        currentEnemy.hp = currentEnemy.defaultHp;
        screenChange("death-screen");
    }
}