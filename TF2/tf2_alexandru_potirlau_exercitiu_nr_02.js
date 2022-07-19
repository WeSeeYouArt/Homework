let pal = (n) => {
    let nOriginal = n;
    let nInvers = '';
    while(n != 0) {
        nInvers = nInvers + (n % 10);
        n = (n - (n % 10)) / 10;
    }
    if(nOriginal == nInvers) {
       return true;
    } else {
    }
};
let j = [];
for(i = 0; i < 10000; i++) {
    if(pal(i) === true) {
        j.push(i);
    }
}
for(let i = 0; i < j.length; i++){
    console.log(j[i]);
};