// Get random number for both dice
let d1 = Math.round(Math.random() * (6 - 1) + 1);
let d2 = Math.round(Math.random() * (6 - 1) + 1);

console.log("D1 = " + d1.toString());
console.log("D2 = " + d2.toString());

if (d1 > d2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (d2 > d1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a tie!";
}

document.querySelector(".img1").setAttribute("src", "images/dice".concat(d1.toString()).concat(".png"));
document.querySelector(".img2").setAttribute("src", "images/dice".concat(d2.toString()).concat(".png"));