function decode (word) {
    let wordArr = word.split(' ');
    for (let x = 0; x < wordArr.length; x++) {
        switch (wordArr[x].charAt(0)) {
            case 'a':
                wordArr[x] = wordArr[x].charAt(1);
                break;
            case 'b':
                wordArr[x] = wordArr[x].charAt(2);
                break;
            case 'c':
                wordArr[x] = wordArr[x].charAt(3);
                break;
            case 'd':
                wordArr[x] = wordArr[x].charAt(4);
                break;
            default:
                wordArr[x] = ' ';
        }
    }
    return wordArr.join('');
}

console.log(decode('craft block argon meter bells brown croon droop'));