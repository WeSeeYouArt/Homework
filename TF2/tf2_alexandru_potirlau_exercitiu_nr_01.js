// let words = Array('apa', 'casa', 'elefant', 'om');

// function vowels(words) {
//     var vowelsCount = 0
//     const vowels = ['a', 'e', 'i', 'o', 'u']
//     for (let char of words) {
//         if (vowels.includes(char)) {
//             vowelsCount++
//         }
//     }
//     return vowelsCount;
// }

// function consonants(words) {
//     var countConsonants = 0;
  
//     for (var i = 0; i < words.length; i++) {
  
//       if (words[i] !== "a" && words[i] !== "e" && words[i] !== "i" &&
//         words[i] !== "o" && words[i] !== "u" && words[i] !== " ") {
//         countConsonants += 1;
//       }
//     }
//     return countConsonants;
//   }

// console.log(words, words.length);
// console.log(`Array-ul are urmatoarele stringuri: ${words} si are in total ${words.length} cuvinte.`);
// console.log(`Stringul "${words[0]}" are ${words[0].length} litere.`);
// console.log(`Stringul "${words[1]}" are ${words[1].length} litere.`);
// console.log(`Stringul "${words[2]}" are ${words[2].length} litere.`);
// console.log(`Sringul "${words[3]}" are ${words[3].length} litere.`);

// vowels('om');
// console.log('Stringul "om" are ' + vowels('om') + ' vocala.');
// vowels('elefant');
// console.log('Stringul "elefant" are ' + vowels('elefant') + ' vocale.');

// consonants('apa');
// console.log('Stringul "apa" are ' + consonants('apa') + ' consoana.');
// consonants('casa');
// console.log('Stringul "casa" are ' + consonants('casa') + ' consoane.');
// consonants('elefant');
// console.log('Stringul "elefant" are ' + consonants('elefant') + ' consoane.');

let words = Array('apa', 'casa', 'elefant', 'om');
let vowels = [];
 for(let i = 0; i < words.length; i++) {
    let nrVowels = calculateTheVowels(words[i]);
    vowels.push(nrVowels);
    console.log(`Cuvantul ${words[i]} are ${words[i].length} litere.`);
    console.log(`Are ${nrVowels} vocala/e.`);
    console.log(`Si ${words[i].length - nrVowels} consoana/e.`);
 };

console.log(vowels);

function calculateTheVowels(word) {
    let nrVowels = 0;
    for(let j = 0; j < word.length; j++) {
        let letter = word[j];
        switch(letter){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                nrVowels++;
                break;
        }
    }
    return nrVowels;
};