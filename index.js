var randomNumber1 = Math.floor((Math.random()*6)) + 1;
var randomDiceName1 ="dice"+randomNumber1+".png";
var randomImgSrc1 = "images/"+randomDiceName1;
document.querySelector(".img1").setAttribute("src",randomImgSrc1);

var randomNumber2 = Math.floor((Math.random()*6)) + 1;
var randomDiceName2 ="dice"+randomNumber2+".png";
var randomImgSrc2 = "images/"+randomDiceName2;
document.querySelector(".img2").setAttribute("src",randomImgSrc2);

whoWins();

function whoWins() {
    if (randomNumber1>randomNumber2) {
        document.querySelector("h1").innerHTML="Player one wins"
    }else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="Player two wins"
    }else if(randomNumber1===randomNumber2){
        document.querySelector("h1").innerHTML="no one wins"
    }
}