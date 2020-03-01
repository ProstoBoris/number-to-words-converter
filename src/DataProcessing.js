const keypadMapping = [
    ['0'],
    ['1'],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
];

export function getAllWords(numberArray) {
    var letters = [];
    for (let i = 0; i < numberArray.length; i++) {
        letters.push(keypadMapping[numberArray[i]]);
    }

    let progress = 0;
    let current_word = '';
    let limit = numberArray.length;
    let found_words = [];

    const wordArray = wordGenerator(letters, progress, current_word, limit, found_words);
    console.log(wordArray);
    return wordArray;
}

function wordGenerator(letters, progress, current_word, limit, found_words) {
    // completed word, add to collection and return
    if (progress === limit) {
        found_words.push(current_word);
    } else {
        // make recursive call for each letter in current press
        for (let i = 0; i < letters[progress].length; i++) {
            let next_word = current_word + letters[progress][i];

            wordGenerator(letters, progress + 1, next_word, limit, found_words);
        }
    }
    return found_words
}