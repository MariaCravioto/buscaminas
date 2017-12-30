var arrImages = new Array();

function bomb(){
  var i;
  var num;
  for(i = 0; i < 12 ; i ++)
  {
  arrImages [i]= "assets/images/star.jpg";
}
  for(i = 0; i < 4; i ++){

  do{
    numero = Math.floor(Math.random()*12);                                            where you place the bomb*/
    }
    while (arrImages [num] != "assets/images/star.jpg")
    arrImages []= "assets/images/bomb.jpg";

};
function img_click(imagen){
imagen.src = arrImages[imagen.id];
if (arrImages[imagen.id]== "assets/images/bomb.jpg"){
alert("you lose");
bomb();
document.getElementById('0').src = "assets/images/logolab.png";
}
}
else{
}
}
