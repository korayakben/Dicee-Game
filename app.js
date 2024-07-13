let dice_dict = {
    1: "./images/dice1.png",
    2: "./images/dice2.png",
    3: "./images/dice3.png",
    4: "./images/dice4.png",
    5: "./images/dice5.png",
    6: "./images/dice6.png"
};

const chosen_left = Math.floor(Math.random() * 6) + 1;
const chosen_right = Math.floor(Math.random() * 6) + 1; 

console.log(`
    First: ${dice_dict[chosen_left]}
    Second: ${dice_dict[chosen_right]}
`);

document.getElementById("chosen-img1").src = dice_dict[chosen_left];
document.getElementById("chosen-img2").src = dice_dict[chosen_right];

console.log(Object.keys(dice_dict).length);

console.log(chosen_left + " "+chosen_right);

function createResult(whowins){
    result_div = document.createElement("div");
    result_div.id = "comeup-result";
    result_div.style.width = "30%";
    result_div.style.height = "1rem";
    result_div.style.position = "relative";
    result_div.style.top = "2rem";
    // result_div.style.backgroundColor = "yellow";
    result_div.style.color = "yellow";
    result_div.style.fontSize = "2rem";
    result_div.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
    result_div.innerHTML = whowins;
    const main_div = document.getElementById("result-div");
    main_div.appendChild(result_div);
}

if(chosen_left > chosen_right){
    createResult("Player 1 won");
}
else if(chosen_right > chosen_left){
    createResult("Player 2 won");
}
else {
    createResult("Draw");
}

