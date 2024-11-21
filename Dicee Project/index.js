// Get random number for both dice
let d1 = Math.round(Math.random() * 10);
let d2 = Math.round(Math.random() * 10);

if (d1 > d2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (d2 > d1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a tie!";
}

document.querySelector(".img1").setAttribute("src", "dice" + d1.toString());
document.querySelector(".img2").setAttribute("src", "dice" + d2.toString());