let str = 'Avida Diva'; // str should be defined

function Palin(str) {
    // remove special characters, spaced and make lowercase
    var removeChar = str.replace(/[^A-Z0-9]/ig, '').toLowerCase();
    // reverse removeChar for comparison
    var checkPalin = removeChar.split('').reverse().join('');
    // check to see if str is a Palindrome
    return (removeChar === checkPalin);
};

if (Palin(str) == true) {
    console.log(`${str} este palindrom`)
} else {
    console.log(`${str} nu este palindrom`)
};