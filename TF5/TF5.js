let x = 1;
let y = 2;
let p = 'N';

function right() {
    if (p == 'N') {
        p = 'E';
    } else if (p == 'E'){
        p = 'S';
    } else if (p == 'S') {
        p = 'W';
    } else {
        p = 'N';
    }
}

function left() {
    if (p == 'N'){
        p = 'W';
    } else if (p == 'W') {
        p = 'S';
    } else if (p == 'S') {
        p = 'E';
    } else {
        p = 'N';
    }
}

function move() {
    if (p == 'N') {
        y = y + 1;
    } else if (p == 'S') {
        y = y - 1;
    } else if (p == 'E') {
        x = x + 1;
    } else {
        x = x - 1;
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
console.log (x,y,p);