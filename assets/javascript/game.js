
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

$("#begin").click(function () {
    $("#welcome").hide();
    $("#direction").show();
    $(".playerBox").show();
    $("#attk").hide();
    $("#rem1Select").hide();
    $("#rem2Select").hide();

});
$("#dmBio").click(function () {
    alert(DarkMagician.bio)
})
$("#dmSelect").click(function () {
    $("#direction").hide();
    $("#darkMagicianBox").hide();
    $("#merlinBox").hide();
    $("#yenBox").hide();
    $("#jarethBox").hide();
    $("#opTag").show();
    $("#playerTag").show();
    $("#player").html('<img src="assets/images/dark-magician.png" style: height="250px"; width="175px"; padding="10px"/>');
    $("#opponent1").html('<img src="assets/images/merlin.jpg" ; style: height="250px" ; width="175px";/>' + '<button id="op1Select">Select</button>')
    $("#opponent2").html('<img src="assets/images/yen.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="op2Select">Select</button>')
    $("#opponent3").html('<img src="assets/images/jareth2.jpg" ;style: height="250px" ; width="175px"/>' + '<button id="op3Select">Select</button>')
    player = DarkMagician
    if (player = DarkMagician) {

        $("#op1Select").click(function () {
            $("#defender").html('<img src="assets/images/merlin.jpg" style: height="250px"; width="175px"; padding="10px"/>')
            $("#attk").show();
            $("#defender").show();
            $("#remaining1").html('<img src="assets/images/yen.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="rem1Select">Select</div>');
            $("#remaining2").html('<img src="assets/images/jareth2.jpg" ;style: height="250px" ; width="175px"/>' + '<button id="rem2Select">Select</button>')
            $("#opponents").hide();
            defender = Merlin;
            $("#rem1Select").hide();
            $("#rem2Select").hide();
        });


        $("#op2Select").click(function () {
            $("#defender").html('<img src="assets/images/yen.jpg" style: height="250px"; width="175px"; padding="10px"/>');
            $("#attk").show();
            $("#defender").show();
            $("#remaining1").html('<img src="assets/images/merlin.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="rem1Select">Select</div>');
            $("#remaining2").html('<img src="assets/images/jareth2.jpg" ;style: height="250px" ; width="175px"/>' + '<button id="rem2Select">Select</button>');
            $("#opponents").hide();
            defender = Yen;
            $("#rem1Select").hide();
            $("#rem2Select").hide();
        });


        $("#op3Select").click(function () {
            $("#defender").html('<img src="assets/images/jareth2.jpg" style: height="250px"; width="175px"; padding="10px";/>')
            $("#attk").show();
            $("#defender").show();
            $("#remaining1").html('<img src="assets/images/merlin.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="rem1Select">Select</div>')
            $("#remaining2").html('<img src="assets/images/yen.jpg" style: height="250px" ; width="175px"/>' + '<button id="rem2Select">Select</button>')
            $("#opponents").hide();
            defender = Jareth;
            $("#rem1Select").hide();
            $("#rem2Select").hide();

        });
        if (defender = Merlin) {
            $("#rem1Select").on("click", function () {
                $("#defender").html($('<img src="assets/images/yen.jpg" style: height="250px" ; width="175px"/>'));
                $("#rem1Select").hide();
                $("#remaining1").hide();
                defender = Yen
                document.getElementById("attk").disabled = false;

            })
        };
    }
});
$("#merlinBio").click(function () {
    alert(Merlin.bio)
})
$("#merlinSelect").click(function () {
    $("#direction").hide();
    $("#darkMagicianBox").hide();
    $("#merlinBox").hide();
    $("#yenBox").hide();
    $("#jarethBox").hide();
    $("#opTag").show();
    $("#playerTag").show();
    $("#player").html('<img src="assets/images/merlin.jpg" style: height="250px"; width="175px"; padding="10px"/>');
    $("#opponent1").html('<img src="assets/images/jareth2.jpg" ; style: height="250px" ; width="175px";/>' + '<button id="op1Select">Select</button>')
    $("#opponent2").html('<img src="assets/images/yen.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="op2Select">Select</button>')
    $("#opponent3").html('<img src="assets/images/dark-magician.png" ;style: height="250px" ; width="175px"/>' + '<button id="op3Select">Select</button>')
    player = Merlin
    if (player = Merlin) {

        $("#op1Select").click(function () {
            $("#defender").html('<img src="assets/images/jareth2.jpg" style: height="250px"; width="175px"; padding="10px"/>')
            $("#attk").show();
            $("#defender").show();
            $("#remaining1").html('<img src="assets/images/yen.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="rem1Select">Select</div>');
            $("#remaining2").html('<img src="assets/images/dark-magician.png" ;style: height="250px" ; width="175px"/>' + '<button id="rem2Select">Select</button>')
            $("#opponents").hide();
            defender = Jareth;
            $("#rem1Select").hide();
            $("#rem2Select").hide();
        });


        $("#op2Select").click(function () {
            $("#defender").html('<img src="assets/images/yen.jpg" style: height="250px"; width="175px"; padding="10px"/>');
            $("#attk").show();
            $("#defender").show();
            $("#remaining1").html('<img src="assets/images/jareth2.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="rem1Select">Select</div>');
            $("#remaining2").html('<img src="assets/images/dark-magician.png" ;style: height="250px" ; width="175px"/>' + '<button id="rem2Select">Select</button>');
            $("#opponents").hide();
            defender = Yen;
            $("#rem1Select").hide();
            $("#rem2Select").hide();
        });


        $("#op3Select").click(function () {
            $("#defender").html('<img src="assets/images/dark-magician.png" style: height="250px"; width="175px"; padding="10px";/>')
            $("#attk").show();
            $("#defender").show();
            $("#remaining1").html('<img src="assets/images/jareth2.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="rem1Select">Select</div>')
            $("#remaining2").html('<img src="assets/images/yen.jpg" style: height="250px" ; width="175px"/>' + '<button id="rem2Select">Select</button>')
            $("#opponents").hide();
            defender = DarkMagician;
            $("#rem1Select").hide();
            $("#rem2Select").hide();
        });
    }
});
$("#yenBio").click(function () {
    alert(Yen.bio)
})
$("#yenSelect").click(function () {
    $("#direction").hide();
    $("#darkMagicianBox").hide();
    $("#merlinBox").hide();
    $("#yenBox").hide();
    $("#jarethBox").hide();
    $("#opTag").show();
    $("#playerTag").show();
    $("#player").html('<img src="assets/images/yen.jpg" style: height="250px"; width="175px"; padding="10px"/>');
    $("#opponent1").html('<img src="assets/images/merlin.jpg" ; style: height="250px" ; width="175px";/>' + '<button id="op1Select">Select</button>')
    $("#opponent2").html('<img src="assets/images/jareth2.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="op2Select">Select</button>')
    $("#opponent3").html('<img src="assets/images/dark-magician.png" ;style: height="250px" ; width="175px"/>' + '<button id="op3Select">Select</button>')
    player = Yen
    if (player = Yen) {

        $("#op1Select").click(function () {
            $("#defender").html('<img src="assets/images/merlin.jpg" style: height="250px"; width="175px"; padding="10px"/>')
            $("#attk").show();
            $("#defender").show();
            $("#remaining1").html('<img src="assets/images/jareth2.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="rem1Select">Select</div>');
            $("#remaining2").html('<img src="assets/images/dark-magician.png" ;style: height="250px" ; width="175px"/>' + '<button id="rem2Select">Select</button>')
            $("#opponents").hide();
            defender = Merlin;
            $("#rem1Select").hide();
            $("#rem2Select").hide();
        });


        $("#op2Select").click(function () {
            $("#defender").html('<img src="assets/images/jareth2.jpg" style: height="250px"; width="175px"; padding="10px"/>');
            $("#attk").show();
            $("#defender").show();
            $("#remaining1").html('<img src="assets/images/merlin.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="rem1Select">Select</div>');
            $("#remaining2").html('<img src="assets/images/dark-magician.png" ;style: height="250px" ; width="175px"/>' + '<button id="rem2Select">Select</button>');
            $("#opponents").hide();
            defender = Jareth;
            $("#rem1Select").hide();
            $("#rem2Select").hide();
        });


        $("#op3Select").click(function () {
            $("#defender").html('<img src="assets/images/dark-magician.png" style: height="250px"; width="175px"; padding="10px";/>')
            $("#attk").show();
            $("#defender").show();
            $("#remaining1").html('<img src="assets/images/merlin.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="rem1Select">Select</div>')
            $("#remaining2").html('<img src="assets/images/jareth2.jpg" style: height="250px" ; width="175px"/>' + '<button id="rem2Select">Select</button>')
            $("#opponents").hide();
            defender = DarkMagician;
            $("#rem1Select").hide();
            $("#rem2Select").hide();
        });
    }
});
$("#jarethBio").click(function () {
    alert(Jareth.bio)
})
$("#jarethSelect").click(function () {
    $("#direction").hide();
    $("#darkMagicianBox").hide();
    $("#merlinBox").hide();
    $("#yenBox").hide();
    $("#jarethBox").hide();
    $("#opTag").show();
    $("#playerTag").show();
    $("#player").html('<img src="assets/images/jareth2.jpg" style: height="250px"; width="175px"; padding="10px"/>');
    $("#opponent1").html('<img src="assets/images/merlin.jpg" ; style: height="250px" ; width="175px";/>' + '<button id="op1Select">Select</button>')
    $("#opponent2").html('<img src="assets/images/yen.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="op2Select">Select</button>')
    $("#opponent3").html('<img src="assets/images/dark-magician.png" ;style: height="250px" ; width="175px"/>' + '<button id="op3Select">Select</button>')
    player = Jareth
    if (player = Jareth) {

        $("#op1Select").click(function () {
            $("#defender").html('<img src="assets/images/merlin.jpg" style: height="250px"; width="175px"; padding="10px"/>')
            $("#attk").show();
            $("#defender").show();
            $("#remaining1").html('<img src="assets/images/yen.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="rem1Select">Select</div>');
            $("#remaining2").html('<img src="assets/images/dark-magician.png" ;style: height="250px" ; width="175px"/>' + '<button id="rem2Select">Select</button>')
            $("#opponents").hide();
            defender = Merlin;
            $("#rem1Select").hide();
            $("#rem2Select").hide();
        });


        $("#op2Select").click(function () {
            $("#defender").html('<img src="assets/images/yen.jpg" style: height="250px"; width="175px"; padding="10px"/>');
            $("#attk").show();
            $("#defender").show();
            $("#remaining1").html('<img src="assets/images/merlin.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="rem1Select">Select</div>');
            $("#remaining2").html('<img src="assets/images/dark-magician.png" ;style: height="250px" ; width="175px"/>' + '<button id="rem2Select">Select</button>');
            $("#opponents").hide();
            defender = Yen;
            $("#rem1Select").hide();
            $("#rem2Select").hide();
        });


        $("#op3Select").click(function () {
            $("#defender").html('<img src="assets/images/dark-magician.png" style: height="250px"; width="175px"; padding="10px";/>')
            $("#attk").show();
            $("#defender").show();
            $("#remaining1").html('<img src="assets/images/merlin.jpg" ; style: height="250px" ; width="175px"/>' + '<button id="rem1Select">Select</div>')
            $("#remaining2").html('<img src="assets/images/yen.jpg" style: height="250px" ; width="175px"/>' + '<button id="rem2Select">Select</button>')
            $("#opponents").hide();
            defender = DarkMagician
            $("#rem1Select").hide();
            $("#rem2Select").hide();
        });
    }
});
//now for the good shit
$("#attk").click(function () {
    attackSpell();

});
// $("#rem1Select").on("click", remOneSelect());
// $("#rem2Select").on("click", remTwoSelect());


var player = {}
var defender = {}

var attackSpell = function () {

    var x = defender.hp - player.battk
    defender.hp = x
    console.log("player battk:" + player.battk)
    
    console.log("defender hp:" + defender.hp);

    console.log("new defenderhp =" + defender.hp)
    if (defender.hp <= 0) {
        alert("battle won");
        document.getElementById("attk").disabled = true
        nextBattle();
    }
    var y = player.hp - defender.cattk
    player.hp = y
    if (player.hp <= 0) {
        alert("battle lost")
    }
    var z = player.battk + Math.floor(player.battk / 2)
    player.battk = z
    console.log(player.battk)
    document.getElementById("playerHP").innerHTML = "HP : " + y;
    document.getElementById("defenderHP").innerHTML = "HP : " + x;
}
var nextBattle = function () {
        $("#rem1Select").show()
        $("#rem2Select").show()
}

var remOneSelect = function (){
    if ((player = DarkMagician) && (defender = Merlin)){
        $("#defender").html('<img src="assets/images/yen.jpg" style: height="250px"; width="175px"; padding="10px"/>');
        defender = Yen;
        document.getElementById("attk").disabled = false;
    }
    if ((player = DarkMagician) && (defender = Yen)){
        $("#defender").html('<img src="assets/images/merlin.jpg" style: height="250px"; width="175px"; padding="10px"/>');
        defender = Merlin;
        document.getElementById("attk").disabled = false;
    }
    if ((player= DarkMagician) && (defender = Jareth)){
        $("#defender").html('<img src="assets/images/merlin.jpg" style: height="250px"; width="175px"; padding="10px"/>');
        defender = Merlin;
        document.getElementById("attk").disabled = false;
    }

}
var remTwoSelect = function (){
    if ((player = DarkMagician) && (defender = Merlin)){
        $("#defender").html('<img src="assets/images/jareth2.jpg" style: height="250px"; width="175px"; padding="10px"/>');
        defender = Jareth;
        document.getElementById("attk").disabled = false;
    }
    if ((player = DarkMagician) && (defender = Yen)){
        $("#defender").html('<img src="assets/images/jareth2.jpg" style: height="250px"; width="175px"; padding="10px"/>');
        defender = Jareth;
        document.getElementById("attk").disabled = false;
    }
    if ((player= DarkMagician) && (defender = Jareth)){
        $("#defender").html('<img src="assets/images/yen.jpg" style: height="250px"; width="175px"; padding="10px"/>');
        defender = Yen;
        document.getElementById("attk").disabled = false;
    }
}