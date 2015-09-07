var pointer = require('bonescript');

var outputs = ["USR0", "USR1", "USR2", "USR3","P9_13", "P9_15", "P9_17", "P9_23","P9_11",];
var inputs = ["P8_9", "P8_11", "P8_13", "P8_15","P8_7"];

var Size=10;

var x = new Array(Size);
for (var i = 0; i < Size; i++) {
  x[i] = new Array(Size);
}

for (var i = 0; i < Size; i++) {
  for (var j = 0; j < Size; j++){
      x[i][j] =' ';
  }
}

function gridPrint(){
  var combinedString0="X\t"
  for(var i=0;i<Size;i++) combinedString0+=i+1+"\t";
  console.log(combinedString0);
  for(var i=0;i<Size;i++){
    var combinedString1=i+1+":\t"
    for(var j=0;j<Size;j++) combinedString1+=x[i][j]+"\t";
    console.log(combinedString1);  
  }
  var separator="-------------------------------------------------------------------------------------";
  console.log(separator);
    
}

var m=0,n=0;
x[m][n]='0';

for(var i in outputs) {
    pointer.pinMode(outputs[i], pointer.OUTPUT);
}

for(var i in inputs) {
    pointer.pinMode(inputs[i], pointer.INPUT);
}

for(var i in outputs) {
    pointer.digitalWrite(outputs[i], pointer.LOW);
}


setInterval(check,120);

gridPrint();

function check(){
    pointer.digitalRead(inputs[0], checkButton0);
    pointer.digitalRead(inputs[1], checkButton1);
    pointer.digitalRead(inputs[2], checkButton2);
    pointer.digitalRead(inputs[3], checkButton3);
    pointer.digitalRead(inputs[4], checkButton4);
}



function checkButton0(d) {
  if(d.value == 1){
    pointer.digitalWrite(outputs[4], pointer.HIGH);
    pointer.digitalWrite(outputs[0], pointer.HIGH);
    if(n>=0&&n<Size-1) {
      x[m][n]='*';
      n++;
      x[m][n]='0';
      gridPrint();
    }
  }
  else{
    pointer.digitalWrite(outputs[4], pointer.LOW);
    pointer.digitalWrite(outputs[0], pointer.LOW);
  }
}

function checkButton1(d) {
  if(d.value == 1){
    pointer.digitalWrite(outputs[5], pointer.HIGH);
    pointer.digitalWrite(outputs[1], pointer.HIGH);
    if(n>0&&n<Size) {
      x[m][n]='*';
      n--;
      x[m][n]='0';
      gridPrint();
    }
    
  }
  else{
    pointer.digitalWrite(outputs[5], pointer.LOW);
    pointer.digitalWrite(outputs[1], pointer.LOW);
  }
}

function checkButton2(d) {
  if(d.value == 1){
    pointer.digitalWrite(outputs[6], pointer.HIGH);
    pointer.digitalWrite(outputs[2], pointer.HIGH);
    if(m>=0&&m<Size-1) {
      x[m][n]='*';
      m++;
      x[m][n]='0';
      gridPrint();
    }
  }
  else{
    pointer.digitalWrite(outputs[6], pointer.LOW);
    pointer.digitalWrite(outputs[2], pointer.LOW);
  }
}

function checkButton3(d) {
  if(d.value == 1){
    pointer.digitalWrite(outputs[7], pointer.HIGH);
    pointer.digitalWrite(outputs[3], pointer.HIGH);
    if(m>0&&m<Size) {
      x[m][n]='*';
      m--;
      x[m][n]='0';
      gridPrint();
    }
    
  }
  else{
    pointer.digitalWrite(outputs[7], pointer.LOW);
    pointer.digitalWrite(outputs[3], pointer.LOW);
  }
}

function checkButton4(y) {
  if(y.value == 1){
    pointer.digitalWrite(outputs[8], pointer.HIGH);
    pointer.digitalWrite(outputs[0], pointer.HIGH);
    pointer.digitalWrite(outputs[1], pointer.HIGH);
    pointer.digitalWrite(outputs[2], pointer.HIGH);
    pointer.digitalWrite(outputs[3], pointer.HIGH);
    for (var i = 0; i < Size; i++) {
      for (var j = 0; j < Size; j++){
        x[i][j] =' ';
      }
    }
    m=0;
    n=0;
    x[m][n]='0';
    gridPrint();
  }
  else{
    pointer.digitalWrite(outputs[8], pointer.LOW);
    pointer.digitalWrite(outputs[0], pointer.LOW);
    pointer.digitalWrite(outputs[1], pointer.LOW);
    pointer.digitalWrite(outputs[2], pointer.LOW);
    pointer.digitalWrite(outputs[3], pointer.LOW);
  }
}

