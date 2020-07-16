console.log("pls battle me bro");



const player = 
{
    name: "heroic lad",
    attack: () => 
    {
        return 3;
    },
    // defense: 2,
    //add crit percentage later
    // crit: Math.random(2, 5) + strength,
    hp: 15,
    magAttack: () =>
    {
        return 3;
    }
}

// const ogre =
// {
//     name: "shreksy",
//     attack: () =>
//     {
//         return Math.floor(Math.random() * (5 - 1) + 1);
//     },
//     hp: 15
//         // defRange: Math.random(0-2),
//     //add percentage for crit rate so it doesn't always hit
//     // crit: 3 + hitRange = 
//     // {
//     //     console.log("ogres have LAYERS. ONIONS HAVE LAYERS. OGRES ARE LIKE ONIONS");
//     // }
// }

//adding array of enemies to pull from
let enemies = 
[
    {
        name: "Shrek",
        type: "Ogre",
        battleStyle: "appears from the mud",
        hp: 15,
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
        // encounterRate: 15%,
        battleGreeting: ["WHY ARE YOU IN MY SWAMP", "GET OUTTA MY SWAMP", "AAAAAAAAAAAAA"],
        winText: "STAY. AWAY.",
        loseText: "oooooogh",
        leaveText: "Shrek waded back into the swamp"
    },

    {
        name: "Nina",
        type: "Chimera",
        battleStyle: "wanders up to you",
        hp: 5,
        attack: () =>
        {
            return Math.floor(Math.random() * (2 - 1) + 1);
        },
        defense: 0,
        magAttack: 1,
        magDefense: 0,
        critRate: () =>
        {
            return Math.floor(Math.random() * (2 - 1) +1);
        },
        // encounterRate: 25%,
        battleGreeting: ["H....help me...", "*whines*"],
        winText: "go....now....with mama...",
        loseText: "...",
        leaveText: "Nina collapsed"
    },
    {
        name: "Cosmo Kramer",
        type: "Neighbor",
        battleStyle: "& cohort approach",
        hp: 12,
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
        // encounterRate: 20%,
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
        hp: 30,
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
        // encounterRate: 5%,
        battleGreeting: ["hee hee hee", "Having fun?", "this is a nice distraction"],
        winText: "farewell",
        loseText: "how.. could you...?",
        leaveText: "Joshua teleported away with a rather miffed expression on his face"
    },
    {
        name: "Johnothan Tronothan",
        type: "local funny man",
        battleStyle: "comes over to talk to you about boats",
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
        // encounterRate: 5%,
        battleGreeting: ["EEEEECK", "Have you heard of Flex Tape? I dunno, have you heard of JESUS?", 
        ""],
        winText: "WHAT THE FUCK IS A SONIC? *does line of coke*",
        loseText: "And I.....HOLY SHIT. Will always love you! Holy hsit I can't believe you did this to me. Damn how could you do this to me?",
        leaveText: "Jon just walks away"
    }

]
console.log(enemies);


// const gameInfo = 
// {
//     winner: " ",
//     winningMessage: () => 
//     {
//         console.log("A WINNER IS " + gameInfo.winner)
//     },
//     currentTurn: player.name
// }

// function battleTurn(attacker, defender)
// {
//     let attack = attacker.attack();
//     defender.hp -= attack;
//     console.log(attacker.name+" hit " + defender.name + " for " + attack);
//     console.log(defender.name + "'s hp is " + defender.hp);
//     if(defender.hp <= 0)
//     {
//         gameInfo.winner = attacker.name;
//     }
//     gameInfo.currentTurn = defender.name;
// }

// console.log("WILD " + enemies[0[0]] + " WANTS TO BATTLE")
// while(player.hp > 0 && enemies[0[2]] > 0)
// {
//     if (gameInfo.currentTurn == player.name)
//     {
//         battleTurn(player, ogre);
//     }
//     else if(gameInfo.currentTurn == ogre.name)
//     {
//         battleTurn(ogre, player);
//     }
// }
// gameInfo.winningMessage();