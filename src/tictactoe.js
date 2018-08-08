
var b1="b1",b2="b2",b3="b3",b4="b4",b5="b5",b6="b6",b7="b7",b8="b8",b9="b9";

var con = 1;
var text;

export default function actions(boton){

  if(boton.className == "buttons"){
    boton.className = "clicked";
    console.log("class name == buttons");

    if(con % 2 == 0){
      text = "X";

    }else{

      text = "O";

    }
    console.log(text);
    asignationO(text, boton);
    boton.value = text;
    boton.appendChild(document.createTextNode(text));
    con++;


  }
  asignationX();
  validation(text);
}

function asignationO(text, boton){
    console.log(b1);
  if(b1 == boton.name){
    b1 = text;
  }else if (b2 == boton.name) {
    b2 = text;
  }else if (b3 == boton.name) {
    b3 = text;
  }else if (b4 == boton.name) {
    b4 = text;
  }else if (b5 == boton.name) {
    b5 = text;
  }else if (b6 == boton.name) {
    b6 = text;
  }else if (b7 == boton.name) {
    b7 = text;
  }else if (b8 == boton.name) {
    b8 = text;
  }else if (b9 == boton.name) {
    b9 = text;
  }

  validation(text);
}

function asignationX(){
  var pos;

  if(b1 == "b1" ){
    console.log("entro en b1");
    b1 = "X";
    pos = "b11";
  }else if (b2 == "b2") {
    console.log("entro en b2");
    b2 = "X";
    pos = "b12";
  }else if (b3 == "b3") {
    b3 = "X";
    pos = "b13";
  }else if (b4 == "b4") {
    b4 = "X";
    pos = "b21";
  }else if (b5 == "b5") {
    b5 = "X";
    pos = "b22";
  }else if (b6 == "b6") {
    b6 = "X";
    pos = "b23";
  }else if (b7 == "b7") {
    b7 = "X";
    pos = "b31";
  }else if (b8 == "b8") {
    b8 = "X";
    pos = "b32";
  }else if (b9 == "b9") {
    b9 = "X";
    pos = "b33";
  }

  var botonX = document.getElementById(pos);
  botonX.value = "X";
  botonX.appendChild(document.createTextNode("X"));
  console.log(botonX);
  con++;
}



function validation(text){
   if((b1==b2 && b2==b3)||(b1==b5 && b5==b9)||(b3==b5 && b5==b7)||(b4==b5 && b5==b6)||(b7==b8 && b8==b9)||(b1==b4 && b4==b7)||(b2==b5 && b5==b8)||(b3==b6 && b6==b9)){
      var con=confirm(text+" has won!!!\nDo you wanna play again?");
      if(con==true){
       window.location.reload();
      }
   }
}
