let a = 1;
let b = 2;
let c = 'N';

function right() {
    if (c == 'N') {
        c = 'E';
    } else if (c == 'E'){
        c = 'S';
    } else if (c == 'S') {
        c = 'W';
    } else {
        c = 'N';
    }
}

function left() {
    if (c == 'N'){
        c = 'W';
    } else if (c == 'W') {
        c = 'S';
    } else if (c == 'S') {
        c = 'E';
    } else {
        c = 'N';
    }
}

function move() {
    if (c == 'N') {
        b = b + 1;
    } else if (c == 'S') {
        b = b - 1;
    } else if (c == 'E') {
        a = a + 1;
    } else {
        a = a - 1;
    }
}

let apel = ['L','M','L','M','L','M','L','M','M'];

for (let i=0; i< apel.length; i++) {
    if (apel[i] == 'L') {
        left()
    } else if (apel[i]=='R') {
        right()
    } else if (apel[i] == 'M') {
        move()
    }
}
console.log (a,b,c);