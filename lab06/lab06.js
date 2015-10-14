var b = require('bonescript');

var input = ["P9_36", "P9_38", "P9_42"];
var pos={};

var gridSize=10;

b.pinMode(input[2], b.INPUT, 7, 'pullup')

var x = new Array(gridSize);
for (var i = 0; i < gridSize; i++) {
  x[i] = new Array(gridSize);
}

for (var i = 0; i < gridSize; i++) {
  for (var j = 0; j < gridSize; j++){
      x[i][j] =' ';
  }
}

function gridPrint(){
  var combinedString0="X\t"
  for(var i=0;i<gridSize;i++) combinedString0+=i+1+"\t";
  console.log(combinedString0);
  for(var i=0;i<gridSize;i++){
    var combinedString1=i+1+":\t"
    for(var j=0;j<gridSize;j++) combinedString1+=x[i][j]+"\t";
    console.log(combinedString1);  
  }
  var separator="-------------------------------------------------------------------------------------";
  console.log(separator);
    
}

var m=0,n=0;
x[m][n]='0';


setInterval(check,100);

gridPrint();

function check(){
  //console.log('a');
  b.analogRead(input[0], xPos);
  b.digitalRead(input[2], clear);
}

function clear(z){
  
  if(z.value===0){
    console.log('a' + z.value);
    for (var p = 0; p < gridSize; p++) {
      for (var q = 0; q < gridSize; q++){
        x[p][q] =' ' ;
      }
    }
    m=0;
    n=0;
    x[m][n]='0';
    gridPrint();
  }
}



function xPos(x) {
    //console.log('b');
    pos.x = parseFloat(x.value).toFixed(2);
    b.analogRead(input[1], yPos);
    
}

function yPos(x) {
	pos.y = parseFloat(x.value).toFixed(2);
	takeAction();
}


function takeAction(){
  //console.log(pos.x + ' ' + pos.y);
  if(pos.x==0.49 && pos.y==1.00){
    if(n>=0&&n<gridSize-1) {
      x[m][n]='*';
      n++;
      x[m][n]='0';
      gridPrint();
    }
  }
  
  else if(pos.x==0.49 && pos.y==0.00){
      if(n>0&&n<gridSize) {
        x[m][n]='*';
        n--;
        x[m][n]='0';
        gridPrint();
    }
  }
  
  else if(pos.x==0.00 && pos.y==0.50){
    if(m>0&&m<gridSize) {
      x[m][n]='*';
      m--;
      x[m][n]='0';
      gridPrint();
    }
    
  }
  
  else if(pos.x==1.00 && pos.y==0.50 ){
    if(m>=0&&m<gridSize-1) {
      x[m][n]='*';
      m++;
      x[m][n]='0';
      gridPrint();
    }
    
  }
  
  
}




