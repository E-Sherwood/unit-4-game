
var DarkMagician = {
    battk: 15,
    cattk: 14,
    hp: 100,
    name: "Dark Magician",
    bio: "A magician of immense power favored by a certain King of Games.",
    portrait: src = "assets/images/dark-magician.png"
}
var Merlin = {
    battk: 16,
    cattk: 13,
    hp: 85,
    name: "Merlin",
    bio: "A powerful wizard featured in countless legends.",
    portrait: src = "assets/images/merlin.jpg"
}
var Yen = {
    battk: 17,
    cattk: 16,
    hp: 75,
    name: "Yennefer of Vengerberg",
    bio: "An unparalleled sorceress, her beauty only matched with her biting wit.",
    portrait: src = "assets/images/yen.jpg"
}
var Jareth = {
    battk: 14,
    cattk: 17,
    hp: 115,
    name: "Jareth the Goblin King",
    bio: "A mysterious king with magical abilities, fond of toying with mortals.",
    portrait: src = "assets/images/jareth2.jpg"
}


var player 
var defender

var castSpell = function() {
    defender.hp - player.attk;
             console.log("player battk:" + player.battk)
            document.getElementById("playerHP").innerHTML = "HP : " + player.hp;
            document.getElementById("defenderHP").innerHTML = "HP : " + defender.hp;
            
             console.log("defender hp:" + defender.hp)
console.log(defender.hp);

}
