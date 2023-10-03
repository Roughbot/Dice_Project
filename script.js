let images = ["dice-01.svg",
"dice-02.svg",
"dice-03.svg",
"dice-04.svg",
"dice-05.svg",
"dice-06.svg"];

let dice = document.querySelectorAll("img");

function roll() {
    dice.forEach(function(die) {
        die.classList.add("shake");
    });
    const audio = new Audio((src = "https://bit.ly/dice-sound"));
    audio.play();
    setTimeout(function(){
        dice.forEach(function(die){
            die.classList.remove("shake");
        });
        let dice1 = math.floor(Math.random()*6);
        let dice2 = math.floor(Math.random()*6);
        console.log(dice1,dice2);
        document.querySelector("#D1").setAttribute("src", "images/" + images[dice1]);
        document.querySelector("#D2").setAttribute("src", "images/" + images[dice2]);
        document.querySelector("#sum").innerHTML = ((dice1 + 1) + (dice2 + 1));
    },
        1000 
    );
    
}
roll();



