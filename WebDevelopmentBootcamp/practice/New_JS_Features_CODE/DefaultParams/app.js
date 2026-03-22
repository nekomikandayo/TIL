// function rollDie(numSides = 6) {
//     // numSides = typeof numSides !== 'undefined' ? numSides : 6;
//     return Math.floor(Math.random() * numSides) + 1;
// }

// function greet(person, msg = 'こんにちは', suffix='!!') {
//     console.log(`${msg}、${person}さん${suffix}`);
// }

function rollDie(numSides = 6) {
    // if (typeof numSides === 'undefined'){
    //     numSides = 6;
    // }
    // numSides = typeof numSides !== 'undefined' ? numSides : 6;
    return Math.floor(Math.random()*numSides) + 1;
}

function greet(person = '山田',msg = 'こんにちは', suffix='!!') {
    console.log(`${msg},${person}さん${suffix}`)
}
