var b = require('bonescript');

b.pinMode('P9_14', b.ANALOG_OUTPUT);
b.pinMode('P9_42', b.INPUT);

setInterval(check,20);

function check(x) {
    b.analogRead('P9_36', printAIN1);
}

function printAIN1(x) {
    console.log('x.value = ' + x.value);
    console.log('x.err = ' + x.err);
    b.analogWrite('P9_14', x.value);
}