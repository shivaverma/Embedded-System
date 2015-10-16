var b = require('bonescript');

b.pinMode('P8_19', b.INPUT);

b.pinMode('P8_13', b.OUTPUT);





function check(){
b.digitalWrite('P8_13', b.HIGH);}
}

fu
function checkButton(x) {

  if(x.value == 1){
    for(int i=0;i<10;i++)
  { setTimeout(check,100); }
  }
  else{
    b.digitalWrite('P8_13', b.LOW);
  }
}


