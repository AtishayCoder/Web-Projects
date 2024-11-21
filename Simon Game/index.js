let buttonColors = ["red", "blue", "green", "yellow"]
let game_pattern = []

function next_sequence() {
    let rand_num = Math.round(Math.random() * (3-0) + 0);
    let random_color = buttonColors[rand_num];
    game_pattern.push(random_color)
}

audio = new Audio("sounds/".concat(game_pattern[game_pattern.length - 1]).concat(".mp3"))
audio.play()
document.querySelector("#".concat(game_pattern[game_pattern.length - 1])).fadeOut(100).fadeIn(100);