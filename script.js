var myColors = ["red", "blue", "green", "black"]

for (var i = 0; i <= myColors.length; i++) {
    console.log(myColors[i])
    var childCards = document.getElementsByClassName('palette_body');
    childCards.style.backgroundColor = myColors[i];
}