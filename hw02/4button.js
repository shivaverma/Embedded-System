var pointer = require('bonescript');

var outputs = ["USR0", "USR1", "USR2", "USR3","P9_13", "P9_15", "P9_17", "P9_23","P9_11"];
var inputs = ["P8_9", "P8_11", "P8_13", "P8_15","P8_7"];


for(var i in outputs) {
    pointer.pinMode(outputs[i], pointer.OUTPUT);
}

for(var i in inputs) {
    pointer.pinMode(inputs[i], pointer.INPUT);
}

for(var i in outputs) {
    pointer.digitalWrite(outputs[i], pointer.LOW);
}


setInterval(check,100);

function check(){
    pointer.digitalRead(inputs[0], checkButton0);
    pointer.digitalRead(inputs[1], checkButton1);
    pointer.digitalRead(inputs[2], checkButton2);
    pointer.digitalRead(inputs[3], checkButton3);
    pointer.digitalRead(inputs[4], checkButton4);
}

function checkButton0(x) {
  if(x.value == 1){
    pointer.digitalWrite(outputs[4], pointer.HIGH);
    pointer.digitalWrite(outputs[0], pointer.HIGH);
  }
  else{
    pointer.digitalWrite(outputs[4], pointer.LOW);
    pointer.digitalWrite(outputs[0], pointer.LOW);
  }
}

function checkButton1(x) {
  if(x.value == 1){
    pointer.digitalWrite(outputs[5], pointer.HIGH);
    pointer.digitalWrite(outputs[1], pointer.HIGH);
  }
  else{
    pointer.digitalWrite(outputs[5], pointer.LOW);
    pointer.digitalWrite(outputs[1], pointer.LOW);
  }
}

function checkButton2(x) {
  if(x.value == 1){
    pointer.digitalWrite(outputs[6], pointer.HIGH);
    pointer.digitalWrite(outputs[2], pointer.HIGH);
  }
  else{
    pointer.digitalWrite(outputs[6], pointer.LOW);
    pointer.digitalWrite(outputs[2], pointer.LOW);
  }
}

function checkButton3(x) {
  if(x.value == 1){
    pointer.digitalWrite(outputs[7], pointer.HIGH);
    pointer.digitalWrite(outputs[3], pointer.HIGH);
  }
  else{
    pointer.digitalWrite(outputs[7], pointer.LOW);
    pointer.digitalWrite(outputs[3], pointer.LOW);
  }
}

function checkButton4(x) {
  if(x.value == 1){
    pointer.digitalWrite(outputs[8], pointer.HIGH);
    pointer.digitalWrite(outputs[0], pointer.HIGH);
    pointer.digitalWrite(outputs[1], pointer.HIGH);
    pointer.digitalWrite(outputs[2], pointer.HIGH);
    pointer.digitalWrite(outputs[3], pointer.HIGH);
  }
  else{
    pointer.digitalWrite(outputs[8], pointer.LOW);
    pointer.digitalWrite(outputs[0], pointer.LOW);
    pointer.digitalWrite(outputs[1], pointer.LOW);
    pointer.digitalWrite(outputs[2], pointer.LOW);
    pointer.digitalWrite(outputs[3], pointer.LOW);
  }
}

